import cax from 'cax'
import '../../../../common/orbit-controls'
import FrequencyMesh from '../src/index'

var AudioContext = window.AudioContext || window.webkitAudioContext
var analyser, frequencyData
var actx = new AudioContext()
var controls

var media = '../asset/miku.mp3'

var loadAudio = (url) => {
  var xhr = new window.XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.responseType = 'arraybuffer'
  return new Promise(resolve => {
    xhr.onload = () => {
      // resolve(xhr.response)
      analyser = actx.createAnalyser()
      analyser.fftSize = 2048
      analyser.smoothingTimeConstant = 0.8
      actx.decodeAudioData(xhr.response, buffer => {
        var asource = actx.createBufferSource()
        asource.buffer = buffer
        asource.loop = true
        var splitter = actx.createChannelSplitter()
        asource.connect(splitter)
        splitter.connect(analyser, 0, 0)
        analyser.connect(actx.destination)
        asource.start()
        resolve()
      })
    }
    xhr.send()
  })
}
var genVxNormal = (geo) => {
  var vxNormals = [],
    mp = {a: 0, b: 1, c: 2}
  geo.faces.forEach(face => {
    Object.keys(mp).forEach(k => {
      vxNormals[face[k]] = face.vertexNormals[mp[k]]
    })
  })
  return vxNormals
}

loadAudio(media).then(buffer => {
  var scene = new THREE.Scene()
  var renderer = new THREE.WebGLRenderer()
  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000)
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
  camera.position.copy(new THREE.Vector3(0, 1, 50))

  controls = new THREE.OrbitControls(camera, renderer.domElement)

  var ambientLight = new THREE.AmbientLight(0x523318)
  scene.add(ambientLight)
  var directionalLight = new THREE.DirectionalLight(new THREE.Color(0.9, 0.9, 0.9))
  directionalLight.position.set(0, 0, 1)
  scene.add(directionalLight)

  frequencyData = new Uint8Array(analyser.frequencyBinCount)

  // /////////////////////////////////////////////////
  var geo = new THREE.TorusGeometry(5, 1.5, 26, 26)
  var mesh1 = new FrequencyMesh(
    geo,
    new THREE.MeshPhongMaterial({
      wireframe: false,
      vertexColors: THREE.FaceColors
    })
  )
  geo.faces.forEach(f => {
    f.color = new THREE.Color().setRGB(1, 0, Math.random())
  })
  scene.add(mesh1)
  mesh1.position.set(0, -9, -4)

  var geo2 = geo.clone()
  var mesh2 = new FrequencyMesh(
    geo2,
    new THREE.MeshPhongMaterial({
      wireframe: false,
      vertexColors: THREE.FaceColors
    })
  )
  geo2.faces.forEach(f => {
    f.color = new THREE.Color().setRGB(0, Math.random(), 1)
  })
  scene.add(mesh2)
  mesh2.position.set(0, 9, -4)
  // ///////////////////////////////////////////////

  ;(function animate () {
    window.requestAnimationFrame(animate)
    renderer.render(scene, camera)
    controls.update()
    analyser.getByteFrequencyData(frequencyData)

    mesh1.update(frequencyData, analyser.frequencyBinCount, 1)
    mesh2.update(frequencyData, analyser.frequencyBinCount, 0.34)
  })()
})
