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
    var $precent = document.querySelector('#precent');
    $precent.style.display = 'block'
    xhr.onload = () => {
      $precent.style.display = 'none'
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
    xhr.onprogress = (o) => {
      // console.log(o);
      // loaded: 2574559, total: 2679663
      var {loaded, total} = o

      $precent.textContent = Math.round(loaded / total * 100) + '%'

    }
    xhr.send()
  })
}

loadAudio(media).then(buffer => {
  var scene = new THREE.Scene()
  var renderer = new THREE.WebGLRenderer({antialias: true})
  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000)
  renderer.setClearColor(new THREE.Color().setRGB(1,1,1));
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
  camera.position.copy(new THREE.Vector3(0, 1, 60))

  controls = new THREE.OrbitControls(camera, renderer.domElement)

  frequencyData = new Uint8Array(analyser.frequencyBinCount)

  // /////////////////////////////////////////////////
  var [h,s,l] = [Math.random()*.7, 0.75, .75];
  var geo = new THREE.TorusGeometry(5, 1.8, 10, 15)
  var mat =  new THREE.MeshPhongMaterial({specular: 0xffffff, shininess: 20,  vertexColors: THREE.FaceColors, flatShading: true})
  
  var mesh1 = new FrequencyMesh(geo, mat.clone())
  geo.faces.forEach(f => {
    f.color = new THREE.Color().setHSL(
      h + Math.random() * 0.3 
      , s
      , l  + Math.random() * 0.25
    )
  })
  scene.add(mesh1)
  mesh1.position.set(0, -18, -7)

  var [h,s,l] = [Math.random()*.7, 0.75, .75];
  var geo2 = geo.clone()
  var mesh2 = new FrequencyMesh(geo2, mat.clone() )
  geo2.faces.forEach(f => {
    f.color = new THREE.Color().setHSL(
      h + Math.random() * 0.3 
      , s
      , l  + Math.random() * 0.25
    )
  })
  scene.add(mesh2)
  mesh2.position.set(0, 18, -7)


  var [h,s,l] = [Math.random()*.7, 0.75, .75]
  var geo3 = new THREE.IcosahedronGeometry(6, 1)
  var mesh3 = new FrequencyMesh(geo3, mat.clone() )
  geo3.faces.forEach(f => {
    f.color = new THREE.Color().setHSL(
      h + Math.random() * 0.3 
      , s
      , l  + Math.random() * 0.25
    )
  })
  scene.add(mesh3)
  mesh3.position.set(0, 0, -7)
  // ///////////////////////////////////////////////


  //
  var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
  hemiLight.color.setHSL( 0.6, 1, 0.6 );
  hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
  hemiLight.position.set( 0, 50, 0 );
  scene.add( hemiLight );
  var hemiLightHelper = new THREE.HemisphereLightHelper( hemiLight, 10 );
  scene.add( hemiLightHelper );
  //
  var dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
  dirLight.color.setHSL( 0.1, 1, 0.95 );
  dirLight.position.set( -1, 1.75, 1 );
  dirLight.position.multiplyScalar( 30 );
  scene.add( dirLight );
  dirLight.castShadow = true;
  dirLight.shadow.mapSize.width = 2048;
  dirLight.shadow.mapSize.height = 2048;
  var d = 50;
  dirLight.shadow.camera.left = -d;
  dirLight.shadow.camera.right = d;
  dirLight.shadow.camera.top = d;
  dirLight.shadow.camera.bottom = -d;
  dirLight.shadow.camera.far = 3500;
  dirLight.shadow.bias = -0.0001;
  var dirLightHeper = new THREE.DirectionalLightHelper( dirLight, 10 );
  scene.add( dirLightHeper );

  ////////////////////

  ;(function animate () {
    window.requestAnimationFrame(animate)
    renderer.render(scene, camera)
    controls.update()
    analyser.getByteFrequencyData(frequencyData)

    mesh1.update(frequencyData, analyser.frequencyBinCount, 1)
    mesh2.update(frequencyData, analyser.frequencyBinCount, 0.34)
    mesh3.update(frequencyData, analyser.frequencyBinCount, 0.7)
  })()
})
