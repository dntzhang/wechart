/**
 * Created by jusfoun-fe.github.io on 2017/12/05.
 * 3D文字
 */
import * as THREE from './three.js'

export default class Font3D{
  constructor(){

  }

  static create(txt,o){
    var opt = {
      size: 50,
      follow:true,
      family:'Arial',
      borderColor: '#000000', //background-color, default: random color
      color: '#ffffff', //text color, default: random color
      style:'oblique', //font-style, can be: normal / italic / oblique, default: 'oblique'
      weight: 'bold', //font-weight, can be: normal / bold / bolder / lighter / Number, default: 'bold'
    }
    Object.assign(opt,o);
    return getText2D(txt,opt)
  }
}

function getText2D(text,opt){
  let canvas = document.createElement('canvas');
  let context = canvas.getContext('2d');
  let canvas_width = 512//context.measureText( text ).width;
  let canvas_height = 512//opt.size;
  canvas.width=canvas_width;
  canvas.height=canvas_height;


   context.clearRect(0, 0, canvas_width, canvas_height);
  // context.fillStyle = 'red';
  // context.fillRect(0,0,canvas_width, canvas_height)
  // let scale=1.0;
  //context.translate(canvas_width / 2, canvas_height / 2);
  //context.scale(scale, scale);

  context.font = '100px '+opt.family;
  context.fillStyle = opt.color;
  context.textAlign='center';//文本程度对齐方法
 // context.textBaseline='middle';//文本垂曲标的目的，基线位置
  context.fillText(text, 256, canvas_height/2);
  context.strokeStyle  = opt.borderColor;
  context.strokeText(text, 256, canvas_height/2);

  // canvas contents will be used for a texture
  var texture = new THREE.Texture(canvas)
  texture.needsUpdate = true;

  let textObj=null;
  if(opt.follow){
    let spriteMaterial = new THREE.SpriteMaterial({ map: texture});
    textObj = new THREE.Sprite( spriteMaterial );
  }
  else{
    let material = new THREE.MeshBasicMaterial({ map: texture,color:0xffffff, transparent:true, side:THREE.DoubleSide });
    let geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
    textObj = new THREE.Mesh(geometry, material);
  }
  textObj.scale.set(opt.size/10,opt.size/10,1.0);
  return textObj;
}


