const PIAngle = Math.PI/180;
const threePow = n => Math.pow(n, 3);
const FaceName = ['all', 'top', 'bottom', 'left', 'right', 'ahead', 'back', 'center', 'edge'];
const renderSort = [ 'right', 'left', 'top', 'bottom', 'ahead', 'back', ]

//圆角矩形
CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
  var min_size = Math.min(w, h);
  if (r > min_size / 2) r = min_size / 2;
  // 开始绘制
  this.beginPath();
  this.moveTo(x + r, y);
  this.arcTo(x + w, y, x + w, y + h, r);
  this.arcTo(x + w, y + h, x, y + h, r);
  this.arcTo(x, y + h, x, y, r);
  this.arcTo(x, y, x + w, y, r);
  this.closePath();
  return this;
}
const rotateAroundWorldAxis = function(object, axis, radians) {
  let rotWorldMatrix = new THREE.Matrix4();
  rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);

  // old code for Three.JS pre r54:
  //  rotWorldMatrix.multiply(object.matrix);
  // new code for Three.JS r55+:
  rotWorldMatrix.multiply(object.matrix);                // pre-multiply

  object.matrix = rotWorldMatrix;

  // old code for Three.js pre r49:
  // object.rotation.getRotationFromMatrix(object.matrix, object.scale);
  // old code for Three.js pre r59:
  // object.rotation.setEulerFromRotationMatrix(object.matrix);
  // code for r59+:
  object.rotation.setFromRotationMatrix(object.matrix);
}



var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
mouse.x = mouse.y = -1;
let clientX, clientY;
let pyramid = this;
let intersects;
let selectAxis, selectCube, selectAhead, flag = false;

const getDirection = function(quadrant, angle, xName, yName){
  let direction;

  if(quadrant === 1 || quadrant === 2){
    direction = angle < -45 ? xName : yName;
  }
  if(quadrant === 3 || quadrant === 4){
    direction = angle > 45 ? xName : yName;
  }

  return direction;
}

const xAxis = function(isF, pyramid, camera){
  let {rotateControl} = pyramid;
  if(selectAxis !== 'y'){
    rotateControl.trigger('y', selectCube.y);
  }else{
    let quadrant = pyramid.getQuadrant(camera.position.x, camera.position.z);
    let angle = pyramid.getAngle(camera.position.x, camera.position.z);
    let direction = getDirection(quadrant, angle, 'x', 'z');
    rotateControl.trigger(direction, selectCube[direction]);
  }
  flag = false;
}

const yAxis = function(isF, pyramid, camera){
  let {rotateControl} = pyramid;
  if(selectAxis !== 'y'){
    selectAxis === 'x' ? selectAxis = 'z' : selectAxis = 'x';
    let angle = selectAxis === 'x' ? 90 : -90;
    angle = isF ? angle : -angle;
    angle = selectAhead ? angle : - angle;

    rotateControl.trigger(selectAxis,selectCube[selectAxis])
  }else{
    let quadrant = pyramid.getQuadrant(camera.position.x, camera.position.z);
    let angle = pyramid.getAngle(camera.position.x, camera.position.z);
    let direction = getDirection(quadrant, angle, 'z', 'x');
    rotateControl.trigger(direction, selectCube[direction])
  }
  flag = false;
}

const getCubeObj = function(index, level, twoPow, num) {
  let z = remainder(index, twoPow), 
      y = (remainder(index, level) % level) || level,
      x = (((index) % twoPow) % level) + 1;
      // debugger;
  return {
    x:x,
    y:y,
    z:z,
    index:index,
  } 
} 
const remainder = function(num, bnum){
  let n = 1;
  while(num+1>bnum){
    n += 1;
    num -= bnum;
  }
  return n;
}
const getCubeList = function(level){
  let cubes = {},
    num = threePow(level),
    twoPow = level*level;
  for(var i in FaceName) cubes[FaceName[i]] = [];

  for(let i = 0; i< num; i++) {
    let cube = getCubeObj(i, level, twoPow, num);
    let edge = false;
    cubes.all.push(cube);
    if(i < twoPow){ edge = true; }
    if(i >=  num - twoPow){ edge = true; }
    if(i%level === 0){ edge = true; cubes.left.push(cube); }
    if((i+1)%level === 0){ edge = true; cubes.right.push(cube); }
    if(i%twoPow < level){ edge = true; cubes.ahead.push(cube); }
    if(i%twoPow >= twoPow - level){ edge = true; cubes.back.push(cube); }
    if(edge){
      cubes.edge.push(cube);
    }else{
      cubes.center.push(cube);
    }
  }

  cubes.top = cubes.all.slice(0, twoPow);
  cubes.bottom = cubes.all.slice(num-twoPow);

  return cubes;
}

const isOdd = (n) => !!(n % 2);

class magicCube extends THREE.Group {
  constructor (option) {
    super()
    let that = this;
    this.option = Object.assign({
      level:3,
      size:120,
      padding:0,
      style:{ top:"#ffff00", bottom:"#ffffff", left:"#FF8C00", right:"#FF0000", ahead:"#0000FF", back:"#00FF00", },
      cubeStyle:{
        top:[],
        bottom:[],
        left:[],
        right:[],
        ahead:[],
        back:[],
      },
      radio:14,
      innerPadding:15,
      backgroundColor:'#333333',
      control:{
        camera:null,
        controls:null,
      },
    }, option)
    option = this.option;
    this.size = option.size / option.level;
    this.offset = (option.size - this.size)/2;
    this.loader = new THREE.TextureLoader();

    this.meshList = [];
    this.cubes = getCubeList(option.level);
    this.cubes.all.forEach((d, i)=>{
      let mesh = this.createCubeMesh(d)
      
      that.add(mesh)
      that.meshList.push(mesh)
    })
      
    renderSort.forEach((_d, _i)=>{
      for(var i in this.cubes[_d]){
        let d = this.cubes[_d][i];

        let style = this.getCubeStyle(_d, i);
        if(style.isImg){
          this.imgFaces(style.url, function(img){
            d.matArray[_i].map = this.createTexture(img);
          })
        }else{
          d.matArray[_i].map = this.createTexture('', style.color);
        }
      }
    })

    let {camera, controls} = option.control;
    if(camera && controls){
      controls.domElement.addEventListener( 'touchmove', function(event){
        if(event.targetTouches.length > 1) return;
        that.control.move.call(that, event.targetTouches[0])
      }, false );
      
      controls.domElement.addEventListener( 'touchstart', function(event){
        event.preventDefault();
        that.control.start.call(that, event.targetTouches[0])
      }, false );
      
      controls.domElement.addEventListener( 'touchend', function(event){
        that.control.end.call(that, event.targetTouches[0])
      }, false );

      controls.domElement.addEventListener( 'mousemove', this.control.move.bind(this), false );
      controls.domElement.addEventListener( 'mousedown', this.control.start.bind(this), false );
      controls.domElement.addEventListener( 'mouseup', this.control.end.bind(this), false );
    }
  }

  control = {
    start:function(event){
      let { camera, controls } = this.option.control;
      flag = true;
      mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      clientX = event.clientX;
      mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;		
      clientY = event.clientY;
      raycaster.setFromCamera( mouse, camera );
      intersects = raycaster.intersectObjects( this.meshList );
      if(intersects && intersects.length) {
        controls.enableRotate = false;
        let cube = intersects[0];
        let point = cube.point;
        let unAxis;
        for(var i in point){
          let num = this.option.size/2 - Math.abs(point[i]);
          if(num< 0.00001){
            selectAxis = i;
            selectAhead = point[i] > 0;
            selectCube = this.getLayer(cube.object);
          }
        }
      }
    },
    move:function(event){
      let { camera, controls } = this.option.control;
      if(!controls.enableRotate && flag) {
        let x = event.clientX - clientX, y = event.clientY - clientY;
        if(Math.abs(x)>20){
          return xAxis(!(x<0), this, camera);
        }
        if(Math.abs(y)>20){
          return yAxis(!(y<0), this, camera);
        }
      }
    },
    end:function(event){
      let { camera, controls } = this.option.control;
      flag = false;
      controls.enableRotate = true;
      mouse.x = mouse.y = -1;
    },
  }


  createCubeMesh (d) {
    let size = this.size,
      cubeSize = size - this.option.padding;
    let geometry = d.geometry = new THREE.BoxGeometry( cubeSize, cubeSize, cubeSize );

    d.matArray = [
      new THREE.MeshBasicMaterial({ opacity: 1, transparent: true, vertexColors: THREE.FaceColors, map:this.createInitTexture()}),
      new THREE.MeshBasicMaterial({ opacity: 1, transparent: true, vertexColors: THREE.FaceColors, map:this.createInitTexture()}),
      new THREE.MeshBasicMaterial({ opacity: 1, transparent: true, vertexColors: THREE.FaceColors, map:this.createInitTexture()}),
      new THREE.MeshBasicMaterial({ opacity: 1, transparent: true, vertexColors: THREE.FaceColors, map:this.createInitTexture()}),
      new THREE.MeshBasicMaterial({ opacity: 1, transparent: true, vertexColors: THREE.FaceColors, map:this.createInitTexture()}),
      new THREE.MeshBasicMaterial({ opacity: 1, transparent: true, vertexColors: THREE.FaceColors, map:this.createInitTexture()}),
    ];
    let mesh = d.mesh = new THREE.Mesh(geometry, d.matArray);

    mesh.position.x = (d.x-1) * size - this.offset;
    mesh.position.z = -(d.y-1) * size + this.offset;
    mesh.position.y = -(d.z-1) * size + this.offset;

    mesh.data = d;
    return mesh
  }

  createTexture(img, color){
    var texture = new THREE.Texture(this.faces(img, document.createElement('canvas'), color));
    texture.needsUpdate = true;
    return texture;
  }

  createInitTexture(){
    return new THREE.Texture(document.createElement('canvas'));
  }

  faces(img, canvas, color) {
    canvas.width = 256;
    canvas.height = 256;
    var context = canvas.getContext('2d');
    var radio = this.option.radio;
    var innerPadding = this.option.innerPadding;

    if(context) {
      context.fillStyle = this.option.backgroundColor;
      context.fillRect(0, 0, 256, 256);

      if(img.toString() === "[object HTMLImageElement]"){

        // 拉伸图片
        var canvasTemp = document.createElement('canvas');
        var contextTemp = canvasTemp.getContext('2d');
        canvasTemp.width = 256-innerPadding; // 目标宽度
        canvasTemp.height = 256-innerPadding; // 目标高度
        contextTemp.drawImage(img,innerPadding,innerPadding,256-innerPadding*2,256-innerPadding*2)

        // 绘制图片
        var pattern = context.createPattern(canvasTemp, "no-repeat");
        context.roundRect(innerPadding, innerPadding, 256-innerPadding*2, 256-innerPadding*2, radio * 1 || 0);
        // 填充绘制的圆
        context.fillStyle = pattern;
        context.fill();
      }else{
        context.rect(innerPadding, innerPadding, 256-innerPadding*2, 256-innerPadding*2);
        context.lineJoin = 'round';
        context.lineWidth = radio;
        context.fillStyle = color;
        context.strokeStyle = color;
        context.stroke();
        context.fill();
      }
    }
    return canvas;
  }

  imgFaces(url, callback){
    var img = new Image(), that = this;
    img.onload = function() {
      callback.bind(that)(img);
    }
    img.src=url;
  }

  getCubeStyle(direction, index){
    let option = this.option;
    let defaultColor = option.style[direction];
    let setting = option.cubeStyle[direction] && option.cubeStyle[direction][index] || defaultColor;
    let style = { }
    
    if(typeof setting === 'object') {
      style.color = setting.color || defaultColor;
      style.url = setting.url;
      style.isImg = !!setting.url;
    }else{
      style.isImg = false, style.color = setting || defaultColor;
    }
    return style;
  }

  

  rotateControl = {
    start:function(){
      let action = this.rotateControl.actionList.shift();
      if(!action) return;
      let {axis, layer}  = action;
      this.rotateControl.trigger(axis, layer);
      this.rotateControl.next();
    }.bind(this),

    trigger:function(axis, layer){
      let mb = (layer -1) * this.size;
      if(axis === 'x'){
        mb -= this.offset;
      }else if(axis === 'y'){
        mb = this.offset - mb;
      }else if(axis === 'z'){
        mb = this.offset - mb
      }

      let readyList = this.cubes.all.map(d=>{
        let num = Math.abs(mb - d.mesh.position[axis])
        return num < 0.00000000001 && d;
      }).filter(d=>d);

      this.rotate(90, readyList, axis)
      return readyList;
    }.bind(this),

    add:function(axis, layer){
      this.rotateControl.actionList.push({
        axis,
        layer,
      })
    }.bind(this),

    next:function(){
      this.rotateControl.start();
    }.bind(this),

    actionList :[],
  }

  getLayer(object){
    return {
      x:Math.round((object.position.x + this.offset + this.size) / this.size),
      y:this.option.level - Math.round((object.position.y + this.offset + this.size) / this.size) + 1,
      z:this.option.level - Math.round((object.position.z + this.offset + this.size) / this.size) + 1,
    };
  }

  axisMapping = {
    x:{
      rotateAxis:new THREE.Vector3(1,0,0),
      position:['z', 'y']
    },
    y:{
      rotateAxis:new THREE.Vector3(0,1,0),
      position:['x', 'z']
    },
    z:{
      rotateAxis:new THREE.Vector3(0,0,1),
      position:['y', 'x']
    },
  }

  rotate(angle, list, axis){
    if(!list || !list.length) return;
    let mapping = this.axisMapping[axis];
    list.forEach(d=>{
      let position = d.mesh.position;
      rotateAroundWorldAxis(d.mesh, mapping.rotateAxis, angle*PIAngle)
      let newPosition = this.getRotatedPosition(position[mapping.position[0]], position[mapping.position[1]], angle);
      position[mapping.position[0]] = newPosition[0]
      position[mapping.position[1]] = newPosition[1]
    })
  }

  getRotatedPosition(x,y,angle){
    let c = Math.sqrt(x*x+y*y), a = 180*Math.asin(x/c||0)/Math.PI + angle;
    if(y<0) a=180-a, a+=angle*2;
    return [Math.sin(a*PIAngle)*c, Math.cos(a*PIAngle)*c];
  }

  getQuadrant = (x, y) => {
    let quadrant = 0;
    if(x>0){
      quadrant = y>0?3:4
    }else{
      quadrant = y>0?2:1
    }
    return quadrant;
    
  };

  getAngle = (x, y) => 180*Math.asin(x/Math.sqrt(x*x+y*y)||0)/Math.PI;
}

export default magicCube
