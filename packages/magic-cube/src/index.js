const PIAngle = Math.PI / 180
const threePow = n => Math.pow(n, 3)
const FaceName = ['all', 'top', 'bottom', 'left', 'right', 'ahead', 'back', 'center', 'edge']
const renderSort = [ 'right', 'left', 'top', 'bottom', 'ahead', 'back' ]

// 圆角矩形
CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
  var min_size = Math.min(w, h)
  if (r > min_size / 2) r = min_size / 2
  // 开始绘制
  this.beginPath()
  this.moveTo(x + r, y)
  this.arcTo(x + w, y, x + w, y + h, r)
  this.arcTo(x + w, y + h, x, y + h, r)
  this.arcTo(x, y + h, x, y, r)
  this.arcTo(x, y, x + w, y, r)
  this.closePath()
  return this
}

const getCubeObj = function (index, level, twoPow, num) {
  let z = remainder(index, twoPow),
    y = (remainder(index, level) % level) || level,
    x = (((index) % twoPow) % level) + 1
  // debugger;
  return {
    x: x,
    y: y,
    z: z,
    index: index
  }
}
const remainder = function (num, bnum) {
  let n = 1
  while (num + 1 > bnum) {
    n += 1
    num -= bnum
  }
  return n
}
const getCubeList = function (level) {
  let cubes = {},
    num = threePow(level),
    twoPow = level * level
  for (var i in FaceName) cubes[FaceName[i]] = []

  for (let i = 0; i < num; i++) {
    let cube = getCubeObj(i, level, twoPow, num)
    let edge = false
    cubes.all.push(cube)
    if (i < twoPow) { edge = true }
    if (i >= num - twoPow) { edge = true }
    if (i % level === 0) { edge = true; cubes.left.push(cube) }
    if ((i + 1) % level === 0) { edge = true; cubes.right.push(cube) }
    if (i % twoPow < level) { edge = true; cubes.ahead.push(cube) }
    if (i % twoPow >= twoPow - level) { edge = true; cubes.back.push(cube) }
    if (edge) {
      cubes.edge.push(cube)
    } else {
      cubes.center.push(cube)
    }
  }

  cubes.top = cubes.all.slice(0, twoPow)
  cubes.bottom = cubes.all.slice(num - twoPow)

  return cubes
}

class MagicCube extends THREE.Group {
  constructor (option) {
    super()
    let that = this
    this.option = Object.assign({
      level: 3,
      size: 120,
      padding: 0,
      style: { top: '#ffff00', bottom: '#ffffff', left: '#FF8C00', right: '#FF0000', ahead: '#0000FF', back: '#00FF00' },
      cubeStyle: {
        top: [],
        bottom: [],
        left: [],
        right: [],
        ahead: [],
        back: []
      },
      radio: 14,
      innerPadding: 15,
      backgroundColor: '#333333'
    }, option)
    option = this.option
    this.size = option.size / option.level
    this.offset = (option.size - this.size) / 2
    this.loader = new THREE.TextureLoader()

    this.meshList = []
    this.cubes = getCubeList(option.level)
    this.cubes.all.forEach((d, i) => {
      let mesh = this.createCubeMesh(d)

      that.add(mesh)
      that.meshList.push(mesh)
    })

    renderSort.forEach((_d, _i) => {
      for (var i in this.cubes[_d]) {
        let d = this.cubes[_d][i]

        let style = this.getCubeStyle(_d, i)
        if (style.isImg) {
          this.imgFaces(style.url, function (img) {
            d.matArray[_i].map = this.createTexture(img)
          })
        } else {
          d.matArray[_i].map = this.createTexture('', style.color)
        }
      }
    })
  }

  createCubeMesh (d) {
    let size = this.size,
      cubeSize = size - this.option.padding
    let geometry = d.geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize)

    d.matArray = [
      new THREE.MeshBasicMaterial({ opacity: 1, transparent: true, vertexColors: THREE.FaceColors, map: this.createInitTexture()}),
      new THREE.MeshBasicMaterial({ opacity: 1, transparent: true, vertexColors: THREE.FaceColors, map: this.createInitTexture()}),
      new THREE.MeshBasicMaterial({ opacity: 1, transparent: true, vertexColors: THREE.FaceColors, map: this.createInitTexture()}),
      new THREE.MeshBasicMaterial({ opacity: 1, transparent: true, vertexColors: THREE.FaceColors, map: this.createInitTexture()}),
      new THREE.MeshBasicMaterial({ opacity: 1, transparent: true, vertexColors: THREE.FaceColors, map: this.createInitTexture()}),
      new THREE.MeshBasicMaterial({ opacity: 1, transparent: true, vertexColors: THREE.FaceColors, map: this.createInitTexture()})
    ]
    let mesh = d.mesh = new THREE.Mesh(geometry, d.matArray)

    mesh.position.x = (d.x - 1) * size - this.offset
    mesh.position.z = -(d.y - 1) * size + this.offset
    mesh.position.y = -(d.z - 1) * size + this.offset

    mesh.data = d
    return mesh
  }

  createTexture (img, color) {
    var texture = new THREE.Texture(this.faces(img, document.createElement('canvas'), color))
    texture.needsUpdate = true
    return texture
  }

  createInitTexture () {
    return new THREE.Texture(document.createElement('canvas'))
  }

  faces (img, canvas, color) {
    canvas.width = 256
    canvas.height = 256
    var context = canvas.getContext('2d')
    var radio = this.option.radio
    var innerPadding = this.option.innerPadding

    if (context) {
      context.fillStyle = this.option.backgroundColor
      context.fillRect(0, 0, 256, 256)

      if (img.toString() === '[object HTMLImageElement]') {
        // 拉伸图片
        var canvasTemp = document.createElement('canvas')
        var contextTemp = canvasTemp.getContext('2d')
        canvasTemp.width = 256 - innerPadding // 目标宽度
        canvasTemp.height = 256 - innerPadding // 目标高度
        contextTemp.drawImage(img, innerPadding, innerPadding, 256 - innerPadding * 2, 256 - innerPadding * 2)

        // 绘制图片
        var pattern = context.createPattern(canvasTemp, 'no-repeat')
        context.roundRect(innerPadding, innerPadding, 256 - innerPadding * 2, 256 - innerPadding * 2, radio * 1 || 0)
        // 填充绘制的圆
        context.fillStyle = pattern
        context.fill()
      } else {
        context.rect(innerPadding, innerPadding, 256 - innerPadding * 2, 256 - innerPadding * 2)
        context.lineJoin = 'round'
        context.lineWidth = radio
        context.fillStyle = color
        context.strokeStyle = color
        context.stroke()
        context.fill()
      }
    }
    return canvas
  }

  imgFaces (url, callback) {
    var img = new Image(), that = this
    img.onload = function () {
      callback.bind(that)(img)
    }
    img.src = url
  }

  getCubeStyle (direction, index) {
    let option = this.option
    let defaultColor = option.style[direction]
    let setting = option.cubeStyle[direction] && option.cubeStyle[direction][index] || defaultColor
    let style = { }

    if (typeof setting === 'object') {
      style.color = setting.color || defaultColor
      style.url = setting.url
      style.isImg = !!setting.url
    } else {
      style.isImg = false, style.color = setting || defaultColor
    }
    return style
  }
}

export default MagicCube
