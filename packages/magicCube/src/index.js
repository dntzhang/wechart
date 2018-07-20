const PIAngle = Math.PI/180;
const threePow = n => Math.pow(n, 3);
const FaceName = ['all', 'top', 'bottom', 'left', 'right', 'ahead', 'back', 'center', 'edge'];
const renderSort = [ 'right', 'left', 'top', 'bottom', 'ahead', 'back', ]
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

class magicCube extends THREE.Group {
  constructor (option) {
    super()
    let that = this;
    this.option = Object.assign({
      level:3,
      interval:0,
      size:120,
      padding:1,
      style:{ top:0xffff00, bottom:0xffffff, left:0xFF8C00, right:0xFF0000, ahead:0x0000FF, back:0x00FF00, },
      cubeStyle:{
        top:[],
        bottom:[],
        left:[],
        right:[],
        ahead:[],
        back:[],
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
      this.cubes[_d].forEach((d, i)=>{
        let color = option.cubeStyle[_d][i] || option.style[_d];
        d.geometry.faces[_i*2].color.setHex(color);
        d.geometry.faces[_i*2+1].color.setHex(color);
      })
    })
  }


  createCubeMesh (d) {
    let size = this.size,
      cubeSize = size - this.option.padding;
    let geometry = d.geometry = new THREE.BoxGeometry( cubeSize, cubeSize, cubeSize );
    
    let material = d.material = new THREE.MeshPhongMaterial({ opacity: 1, transparent: true, vertexColors: THREE.FaceColors})
    let mesh = d.mesh = new THREE.Mesh(geometry, material)

    mesh.position.x = (d.x-1) * size - this.offset;
    mesh.position.z = -(d.y-1) * size + this.offset;
    mesh.position.y = -(d.z-1) * size + this.offset;

    mesh.data = d;
    return mesh
  }

}

export default magicCube
