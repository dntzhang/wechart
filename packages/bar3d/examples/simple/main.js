import Bar from '../../src/index'
import font from '../../../common/font'
import noise from '../../../common/perlin'
import '../../../common/orbit-controls'

noise.seed(Math.random())
const data = []
for (var x = 0; x < 10; x++) {
  const arr = []
  for (var y = 0; y < 20; y++) {
    // All noise functions return values in the range of -1 to 1.
    arr.push((noise.simplex2(x / 10, y / 10) + 1) * 5 + 10)
    // var value = noise.simplex3(x/10 , y/10, time);
    // image[x][y].r = Math.abs(value) * 256; // Or whatever. Open demo.html to see it used with canvas.
  }
  data.push(arr)
}

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 500)
camera.position.set(0, 20, 110)

const scene = new THREE.Scene()

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0xAAAAAA)
document.body.appendChild(renderer.domElement)
const controls = new THREE.OrbitControls(camera, renderer.domElement)
const group = new THREE.Group()
group.rotation.y = -0.2 * Math.PI

group.position.y = -10

const bar = new Bar(data, {
  yGrid: 10,
  gridSize: 3,
  axis: {
    x: {
      from: 0,
      gridValue: 1,
      interval: 0
    },
    y: {
      from: 0,
      gridValue: 2,
      interval: 1
    },
    z: {
      from: 0,
      gridValue: 1,
      interval: 2
    }
  },
  colors: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
})

group.add(bar)
scene.add(group)

// light
const light = new THREE.PointLight(0xffffff, 1, 1000)
light.position.set(0, 0, 100)
scene.add(light)

const gem = new THREE.TextGeometry('Wechart', {
  font: font,
  size: 2,
  height: 1
})
const mat = new THREE.MeshPhongMaterial({
  color: 0x3DCE3D
})
gem.center()
const text = new THREE.Mesh(gem, mat)
text.position.y = 33
text.position.z = -12
group.add(text)

function randomHexColor () {
  var hex = Math.floor(Math.random() * 16777216).toString(16)
  while (hex.length < 6) {
    hex = '0' + hex
  }
  return '#' + hex
}

function animate () {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  controls.update()
}

animate()
