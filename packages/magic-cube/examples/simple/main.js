import MagicCube from '../../src/index'
import '../../../common/orbit-controls'

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 1000)
camera.position.set(150, 200, 450)

const scene = new THREE.Scene()

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0x000000)
document.body.appendChild(renderer.domElement)
const controls = new THREE.OrbitControls(camera, renderer.domElement)
const group = new THREE.Group()

const pyramid = new MagicCube({
  size:100,
  control:{
    camera,
    controls
  },
  level: 4,
  cubeStyle: {
    bottom: [null, null, null, null, null, null, {url: '../../asset/wepay-diy.jpg'}],
    ahead: {6: {url: '../../asset/qq.png'}}
  }
})

let { rotateControl } = pyramid;

rotateControl.add('x', 1)
rotateControl.add('y', 2)
rotateControl.add('z', 1)
rotateControl.start();

group.add(pyramid)
scene.add(group)

// light
const light = new THREE.DirectionalLight(0xeeeeee, 1)
light.position.set(40, 50, 60)
scene.add(light)
const DricetionalLight = new THREE.DirectionalLight(0xeeeeee, 1)
DricetionalLight.position.set(-40, -50, -60)
scene.add(DricetionalLight)

var raycaster = new THREE.Raycaster()
var mouse = new THREE.Vector2()

function animate () {

  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  controls.update()
}

animate()
