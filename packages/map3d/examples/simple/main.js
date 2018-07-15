import pasition from './pasition.js'
import chinaData from './china'

import '../../../common/orbit-controls'

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 5000)
camera.position.set(0, 0, 300)

const scene = new THREE.Scene()

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0xAAAAAA)
document.body.appendChild(renderer.domElement)
const controls = new THREE.OrbitControls(camera, renderer.domElement)

// light
const light = new THREE.PointLight(0xffffff, 1, 1000)
light.position.set(0, 70, 200)
scene.add(light)


const group = new THREE.Group()
scene.add(group)
group.position.x = -80
group.position.y = 80
group.rotation.x = -Math.PI / 9
group.rotation.z = -Math.PI / 20
group.scale.x = group.scale.y = group.scale.z = 0.3




const shapes = chinaData.shapes
const cityList = []

for (let city in shapes) {
  cityList.push({ city: city, curves: pasition.path2shapes(shapes[city])[0] })
}


cityList.forEach((city, aa) => {

  var heartShape = new THREE.Shape();
  city.curves.forEach((curve, index) => {

    if (index === 0) {
      heartShape.moveTo(curve[0], curve[1] * -1);
    }

    heartShape.bezierCurveTo(curve[2], curve[3] * -1, curve[4], curve[5] * -1, curve[6], curve[7] * -1);


  })

  var extrudeSettings = { depth: 10, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };

  var geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);

  var mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial());
  mesh.position.z = Math.random() * 4
  group.add(mesh)

})

let step = 2

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  if (light.position.x > 300) {
    step = -2
    light.position.x = 300
  } else if (light.position.x < -300) {
    light.position.x = -300
    step = 2
  }
  light.position.x += step
  controls.update()
}

animate()

