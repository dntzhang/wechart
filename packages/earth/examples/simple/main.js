import Earth from '../../src/index'
import '../../../common/orbit-controls'

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 2000)
camera.position.z = 500

const scene = new THREE.Scene()

const renderer = new THREE.WebGLRenderer({
  antialias: true
})

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0xAAAAAA)
document.body.appendChild(renderer.domElement)
const controls = new THREE.OrbitControls(camera, renderer.domElement)
const group = new THREE.Group()

const earth = new Earth({
  coord: [
    {
      text: '中国',
      color: 0xff3333,
      nationalFlag: 'https://www.ifreesite.com/world/image/china_flag.png',
      lng: 116.20,
      lat: 39.55
    },
    {
      text: '比利时',
      color: 0xffcc33,
      nationalFlag: 'https://www.ifreesite.com/world/image/belgium_flag.png',
      lng: 4.21,
      lat: 50.51
    },
    {
      text: '巴西',
      color: 0xffcc00,
      nationalFlag: 'https://www.ifreesite.com/world/image/brazil_flag.png',
      lng: -47.55,
      lat: -15.47
    },
    {
      text: '美国',
      color: 0x33cc33,
      nationalFlag: 'https://www.ifreesite.com/world/image/united_states_of_america_flag.png',
      lng: -77.02,
      lat: 39.91
    },
    {
      text: '克罗地亚',
      color: 0x33ccff,
      nationalFlag: 'https://www.ifreesite.com/world/image/croatia_flag.png',
      lng: 15.58,
      lat: 45.50
    }
  ]
})

group.add(earth)
scene.add(group)

earth.bindEvent(scene, camera);

const light = new THREE.PointLight(0xffffff, 1, 1000)
light.position.set(0, 10, 100)
scene.add(light)

function animate () {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  controls.update()
}

animate()
