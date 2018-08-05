
class Earth extends THREE.Group {
  constructor (option) {
    super()

    this.option = Object.assign({
      coord: []
    }, option)

    this.coords = []

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

    delete this.option

    this.generateInfoBoard()
  }

  generateInfoBoard () {
    this.infoBoard = document.createElement('canvas')
    let ctx = this.infoBoard.getContext('2d')

    let width = 105
    let height = 40

    this.infoBoard.setAttribute('width', width * window.devicePixelRatio)
    this.infoBoard.setAttribute('height', height * window.devicePixelRatio)

    this.infoBoard.width = width * window.devicePixelRatio
    this.infoBoard.height = height * window.devicePixelRatio

    ctx.scale(devicePixelRatio, devicePixelRatio)

    this.infoBoard.style.backgroundColor = 'transparent'

    ctx.textBaseline = 'middle'

    document.body.appendChild(this.infoBoard)
  }

  addCoord (option) {
    let {
      lng,
      lat,
      color,
      text,
      nationalFlag
    } = option
    // +90是要有个变换
    let coord = lglt2xyz(lng + 90, lat, 200)
    let light = new THREE.PlaneGeometry(8, 64)
    let texture = new THREE.TextureLoader().load('./light.jpg')
    texture.wrapT = THREE.ClampToEdgeWrapping
    texture.rotation = Math.PI
    texture.center = new THREE.Vector2(0.5, 0.5)
    let lightMaterial = new THREE.MeshBasicMaterial({
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
      fog: true,
      map: texture
    })
    let lightMesh = new THREE.Mesh(light, lightMaterial)
    let wrapper = new THREE.Object3D()

    lightMesh.applyMatrix((new THREE.Matrix4()).makeTranslation(0, 32, 0))
    lightMesh.applyMatrix((new THREE.Matrix4()).makeRotationX(Math.PI / 2))

    wrapper.add(lightMesh)

    let ringBody = new THREE.RingGeometry(0, 5, 6, 1)
    let ringBodyMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide
    })

    let ringBodyMesh = new THREE.Mesh(ringBody, ringBodyMaterial)
    ringBodyMesh.position.set(0, 0, 0)

    wrapper.add(ringBodyMesh)

    let ringLine = new THREE.RingGeometry(7.8, 8, 6, 1)
    let ringLineMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      wireframe: true
    })

    let ringLineMesh = new THREE.Mesh(ringLine, ringLineMaterial)
    ringLineMesh.position.set(0, 0, 0)

    wrapper.add(ringLineMesh)

    wrapper.lookAt(new THREE.Vector3(coord.x, coord.y, coord.z))
    wrapper.position.set(coord.x, coord.y, coord.z)

    this.add(wrapper)

    this.coords.push({
      mesh: [ringBodyMesh, ringLineMesh],
      text: text,
      nationalFlag: nationalFlag,
      light: lightMesh
    })

    return coord
  }

  bindEvent (scene, camera) {
    let raycaster = new THREE.Raycaster()
    let mouse = new THREE.Vector2()

    function mousemove (event) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
      // console.log(mouse);
      // 通过鼠标点的位置和当前相机的矩阵计算出raycaster
      raycaster.setFromCamera(mouse, camera)

      let intersects = []
      let i = 0
      let showInfo = false
      for (; i < this.coords.length; i++) {
        intersects = raycaster.intersectObjects(this.coords[i].mesh)

        if (intersects.length > 0) {
          showInfo = true
          this.activeCoord(this.coords[i], event)
        } else {
          this.coords[i].light.visible = true
        }
      }

      if (!showInfo) {
        this.infoBoard.style.display = 'none'
      }

      // console.log(intersects);
    }

    document.addEventListener('mousemove', mousemove.bind(this))
  }

  activeCoord (obj, event) {
    if (obj.light.visible === false) {
      return
    }
    obj.light.visible = false

    Object.assign(this.infoBoard.style, {
      left: event.clientX + 'px',
      top: event.clientY + 'px',
      position: 'absolute'
    })

    this.infoBoard.style.display = 'block'

    let ctx = this.infoBoard.getContext('2d')

    ctx.clearRect(0, 0, this.infoBoard.width, this.infoBoard.height)

    // 绘制右边标题
    ctx.beginPath()
    ctx.fillStyle = '#ffffff'
    ctx.moveTo(105, 0)
    ctx.lineTo(105, 20)
    ctx.lineTo(52.5, 20)
    ctx.lineTo(40, 0)
    ctx.closePath()
    ctx.fill()

    // 绘制标题文字
    ctx.fillStyle = '#000000'
    ctx.font = '12px 微软雅黑'
    let width = ctx.measureText(obj.text).width
    ctx.fillText(obj.text, 55 + (50 - width) / 2, 10)

    let img = new Image()
    img.src = obj.nationalFlag

    img.onload = function () {
      // 绘制国旗
      ctx.save()
      ctx.beginPath()
      ctx.moveTo(12.5, 0)
      ctx.lineTo(37.5, 0)
      ctx.lineTo(50, 20)
      ctx.lineTo(37.5, 40)
      ctx.lineTo(12.5, 40)
      ctx.lineTo(0, 20)
      ctx.clip()

      let width = this.width / 100
      let height = this.height / (this.width / 100)

      ctx.drawImage(this, -25, (40 - height) / 2, 100, height)

      ctx.closePath()
      ctx.restore()
    }
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
