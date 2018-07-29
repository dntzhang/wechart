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
  level: 4,
  size: 100,
  cubeStyle: {
    bottom: [null, null, null, null, null, null, {url: '../../asset/wepay-diy.jpg'}],
    ahead: {6: {url: '../../asset/qq.png'}}
  }
})

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

window.addEventListener('mousemove', function (event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
}, false)

function animate () {
  raycaster.setFromCamera(mouse, camera)
  var intersects = raycaster.intersectObjects(pyramid.meshList)

  if (intersects.length) {
    let cube = intersects[0]
    window.a = cube
  }

  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  controls.update()
}

animate()
