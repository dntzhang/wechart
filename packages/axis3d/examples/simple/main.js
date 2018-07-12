import Axis from './axis'
import font from './font'

var camera, scene, renderer
var geometry, material, mesh

var targetRotationX = 0
var preX = 0

var group

init()
animate()



function init() {
  group = new THREE.Group()
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 500)
  camera.position.set(0, 20, 110)

  scene = new THREE.Scene()

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)

  renderer.setClearColor(0xAAAAAA)
  document.body.appendChild(renderer.domElement)

  var groundGeometry = new THREE.PlaneGeometry(50, 50, 5)
  // var ground = new THREE.Mesh(groundGeometry, [
  //   new THREE.MeshBasicMaterial({ color: 'white', side: THREE.DoubleSide })
  // ])

  // light
  var light = new THREE.PointLight(0xffffff, 1, 1000)
  light.position.set(0, 10, 100)
  scene.add(light)

  //group.add(ground)
  //group.rotation.x = 0.15 * Math.PI
  // create a blue LineBasicMaterial

  group.rotation.y = -0.2 * Math.PI
  var material = new THREE.LineBasicMaterial({ color: '#ccc' })

  var geometry = new THREE.Geometry()
  geometry.vertices.push(new THREE.Vector3(0, -25, 0))
  geometry.vertices.push(new THREE.Vector3(0, 25, 0))

  for (var i = 0; i <= 20; i++) {
    // 画横线
    var line = new THREE.Line(geometry, material)
    line.position.y = (i * 2.5) - 25
    line.rotation.z = 90 * Math.PI / 180 // 转90度
    //group.add(line)

    // 画竖线
    var line = new THREE.Line(geometry, material)
    line.position.x = (i * 2.5) - 25

    // group.add(line)


  }


  var a = new Axis(10, 10, 10, 2.5)
  group.add(a.obj3d)

  var geometry = new THREE.Geometry()
  geometry.vertices.push(new THREE.Vector3(-25, -25, 0))
  geometry.vertices.push(new THREE.Vector3(-25, 25, 0))




  scene.add(group)



  //var loader = new THREE.FontLoader();

 // loader.load('font.json', function (font) {

    var gem = new THREE.TextGeometry('Wechart', {
      font: font, //字体，默认是'helvetiker'，需对应引用的字体文件
      size: 2, //字号大小，一般为大写字母的高度
      height: 1, //文字的厚度
      // weight: 'normal', //值为'normal'或'bold'，表示是否加粗
      // style: 'normal', //值为'normal'或'italics'，表示是否斜体
      // bevelThickness: 1, //倒角厚度
      // bevelSize: 1, //倒角宽度
      // curveSegments: 30,//弧线分段数，使得文字的曲线更加光滑
      // bevelEnabled: true, //布尔值，是否使用倒角，意为在边缘处斜切
    });

    var mat = new THREE.MeshPhongMaterial({
      color: 0x3DCE3D,

    });
    gem.center()
    var text = new THREE.Mesh(gem, mat);
    text.position.y = 23
    text.position.z = -12
    //text.scale.x = text.scale.y = 0.2
    group.add(text)
  //});

}


document.addEventListener('mousedown', onDocumentMouseDown, false)
document.addEventListener('mousemove', onDocumentMouseMove, false)
document.addEventListener('mouseup', onDocumentMouseUp, false)
var isMouseDown = false

function onDocumentMouseDown(event) {
  isMouseDown = true
  preX = event.clientX
  event.preventDefault()
}

function onDocumentMouseMove(event) {
  if (isMouseDown) {
    group.rotation.y += (event.clientX - preX) * 0.01
    preX = event.clientX
    event.preventDefault()
  }
}

function onDocumentMouseUp() {
  isMouseDown = false
}

document.addEventListener('touchstart', onTouchStart, false)
document.addEventListener('touchmove', onTouchMove, false)


function onTouchStart(event) {
  preX = event.touches[0].clientX
}

function onTouchMove(event) {
  group.rotation.y += (event.touches[0].clientX - preX) * 0.01
  preX = event.touches[0].clientX
}


function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}




function randomHexColor() {
  var hex = Math.floor(Math.random() * 16777216).toString(16)
  while (hex.length < 6) {
    hex = '0' + hex
  }
  return '#' + hex
}
