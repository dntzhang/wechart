var camera, scene, renderer
var geometry, material, mesh

var targetRotationX = 0
var preX = 0

var group = new THREE.Group()

init()
animate()

function init() {
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 500)
  camera.position.set(0, 0, 100)

  scene = new THREE.Scene()

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  var groundGeometry = new THREE.PlaneGeometry(50, 50, 5)
  var ground = new THREE.Mesh(groundGeometry, [
    new THREE.MeshBasicMaterial({ color: 'white', side: THREE.DoubleSide })
  ])

  // light
  var light = new THREE.PointLight(0xffffff, 1, 1000)
  light.position.set(0, 10, 100)
  scene.add(light)

  group.add(ground)
  group.rotation.x = -0.35 * Math.PI
  // create a blue LineBasicMaterial
  var material = new THREE.LineBasicMaterial({ color: '#ccc' })

  var geometry = new THREE.Geometry()
  geometry.vertices.push(new THREE.Vector3(0, -25, 0))
  geometry.vertices.push(new THREE.Vector3(0, 25, 0))

  for (var i = 0; i <= 20; i++) {
    // 画横线
    var line = new THREE.Line(geometry, material)
    line.position.y = (i * 2.5) - 25
    line.rotation.z = 90 * Math.PI / 180 // 转90度
    group.add(line)

    var line = new THREE.Line(geometry, material)
    line.position.x = (i * 2.5) - 25

    group.add(line)
  }

  scene.add(group)

  var geometry = new THREE.BoxGeometry(2, 2, 10)

  for (var i = 0; i < 9; i++) {
    var material = new THREE.MeshLambertMaterial({
      color: randomHexColor()
    })
    var height = 10 + Math.random() * 10
    var geometry = new THREE.BoxGeometry(2, 2, height)
    var cube = new THREE.Mesh(geometry, material)
    group.add(cube)
    cube.position.z = height / 2
    cube.position.x = -20 + i * 5
  }
  var loader = new THREE.FontLoader();

  loader.load( 'font.json', function ( font ) {
  
    var gem = new THREE.TextGeometry( 'Wechart', {
      font: font, //字体，默认是'helvetiker'，需对应引用的字体文件
      size: 12, //字号大小，一般为大写字母的高度
      height: 1, //文字的厚度
      // weight: 'normal', //值为'normal'或'bold'，表示是否加粗
      // style: 'normal', //值为'normal'或'italics'，表示是否斜体
      // bevelThickness: 1, //倒角厚度
      // bevelSize: 1, //倒角宽度
      // curveSegments: 30,//弧线分段数，使得文字的曲线更加光滑
      // bevelEnabled: true, //布尔值，是否使用倒角，意为在边缘处斜切
    } );
    
    var mat = new THREE.MeshPhongMaterial({
      color: 0x3DCE3D,
  
  });
  gem.center()
  var text = new THREE.Mesh(gem, mat);
   text.position.y = -20
  // text.position.z = -40
  text.scale.x = text.scale.y = 0.4
  group.add(text)
  } );

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
    group.rotation.z += (event.clientX - preX) * 0.01
    preX = event.clientX
    event.preventDefault()
  }
}

function onDocumentMouseUp(){
  isMouseDown = false
}

document.addEventListener('touchstart', onTouchStart, false)
document.addEventListener('touchmove', onTouchMove, false)


function onTouchStart(event) {
  preX = event.touches[0].clientX
}

function onTouchMove(event) {
    group.rotation.z += (event.touches[0].clientX - preX) * 0.01
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
