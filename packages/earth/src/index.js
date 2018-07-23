
class Earth extends THREE.Group {
  constructor (option) {
    super()

    this.option = Object.assign({
      coord: []
    }, option)

    let loader = new THREE.TextureLoader()
    loader.load('./textures.jpg', (texture) => {
      let geometry = new THREE.SphereGeometry(200, 40, 40)
      let material = new THREE.MeshBasicMaterial({
        map: texture,
        overdraw: 0.5
      })

      let mesh = new THREE.Mesh(geometry, material)
      this.add(mesh)
    })

    this.option.coord.forEach((item) => {
      this.addCoord(item)
    })
  }

  generateText (text, color, isBack) {
    let canvas = document.createElement('canvas')

    canvas.setAttribute('width', 32)
    canvas.setAttribute('height', 16)

    canvas.style.backgroundColor = 'rgba(0,0,0,0)'

    let ctx = canvas.getContext('2d')
    ctx.font = '10px Georgia'

    let height
    let width = ctx.measureText(text).width

    width = Math.max(32, width)
    height = width / 2

    canvas.setAttribute('width', width * window.devicePixelRatio)
    canvas.setAttribute('height', height * window.devicePixelRatio)

    canvas.width = width * window.devicePixelRatio
    canvas.height = height * window.devicePixelRatio

    ctx.scale(devicePixelRatio, devicePixelRatio)
    ctx.strokeStyle = ctx.fillStyle = hexToRgba(color)
    ctx.textBaseline = 'middle'

    ctx.fillText(text, 0, 8)

    return canvas
  }

  addCoord (option) {
    let {
      lng,
      lat,
      color,
      text
    } = option
    // +90是要有个变换
    let coord = lglt2xyz(lng + 90, lat, 200)
    let light = new THREE.PlaneGeometry(8, 64)
    let texture = new THREE.TextureLoader().load( "./light.jpg" )
    texture.wrapT = THREE.ClampToEdgeWrapping
    texture.rotation = Math.PI
    texture.center = new THREE.Vector2(0.5, 0.5);
    let lightMaterial = new THREE.MeshBasicMaterial({
      transparent: true,
      opacity: .9,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
      fog: true,
      map: texture
    })
    let lightMesh = new THREE.Mesh(light, lightMaterial)
    let wrapper = new THREE.Object3D()

    lightMesh.applyMatrix((new THREE.Matrix4).makeTranslation(0, 32, 0))
    lightMesh.applyMatrix((new THREE.Matrix4).makeRotationX(Math.PI / 2))

    wrapper.add(lightMesh)

    let ringBody = new THREE.RingGeometry(0, 5, 6, 1)
    let ringBodyMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide
    })
    
    let ringBodyMesh = new THREE.Mesh(ringBody, ringBodyMaterial);
    ringBodyMesh.position.set(0,0,0)
    
    wrapper.add(ringBodyMesh)

    let ringLine = new THREE.RingGeometry(7.8, 8, 6, 1);
    let ringLineMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide,
        wireframe: true
    })
    
    let ringLineMesh = new THREE.Mesh(ringLine, ringLineMaterial)
    ringLineMesh.position.set(0,0,0)

    wrapper.add(ringLineMesh)

    wrapper.lookAt(new THREE.Vector3(coord.x, coord.y, coord.z))
    wrapper.position.set(coord.x, coord.y, coord.z)

    this.add(wrapper)

    return coord
  }
}

function lglt2xyz (longitude, latitude, radius) {
  let lg = degToRad(longitude), lt = degToRad(latitude)
  let y = radius * Math.sin(lt)
  let temp = radius * Math.cos(lt)
  let x = temp * Math.sin(lg)
  let z = temp * Math.cos(lg)

  return {
    x: x,
    y: y,
    z: z
  }
}

function degToRad (value) {
  return value / 180 * Math.acos(-1)
}

function hexToRgba (hex, opacity) {
  hex = hex.toString(16)

  if (opacity === undefined) {
    opacity = 1
  }

  return 'rgba(' + parseInt('0x' + hex.slice(0, 2)) + ',' + parseInt('0x' + hex.slice(2, 4)) + ',' + parseInt('0x' + hex.slice(4, 6)) + ',' + opacity + ')'
}

export default Earth
