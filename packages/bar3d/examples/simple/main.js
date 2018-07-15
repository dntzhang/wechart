import Bar from '../../src/index'
import { control } from '../../../common/control-obj'
import font from '../../../common/font'

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 500)
camera.position.set(0, 20, 110)

const scene = new THREE.Scene()

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0xAAAAAA)
document.body.appendChild(renderer.domElement)

const group = new THREE.Group()
group.rotation.y = -0.2 * Math.PI

const bar = new Bar([
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 7, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 9, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 10, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 2]
], {
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
  }
})

group.add(bar)
scene.add(group)

// light
const light = new THREE.PointLight(0xffffff, 1, 1000)
light.position.set(0, 10, 100)
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
text.position.y = 23
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
}

animate()
control(group)
