
class WordCloud {
  constructor (data, option) {
    this.option = option
    data.forEach(item => {
      item.fontSize = option.scale(item.value)
    })

    this.offScreenCanvas = document.getElementById('myCanvas')
    this.offScreenCtx = this.offScreenCanvas.getContext('2d')

    this.compositeCanvas = document.createElement('canvas')
    this.compositeCanvas.width = 400
    this.compositeCanvas.height = 400
    this.compositeCtx = this.compositeCanvas.getContext('2d')
    this.miniCanvas = document.createElement('canvas')
    this.miniCanvas.width = 100
    this.miniCanvas.height = 100
    this.miniCtx = this.miniCanvas.getContext('2d')

    data.forEach(item => {
      this.drawText(item, option.dd, 0, this.randomTextRotation())
    })

    this.option.done && this.option.done()
  }

  drawText (item, r, rotation, textRotation) {
    if (r < 500) {
      const x = this.option.center.x + r * Math.cos(rotation * Math.PI / 180)
      const y = this.option.center.y - r * Math.sin(rotation * Math.PI / 180)

      this.compositeCtx.clearRect(0, 0, 400, 400)
      this.compositeCtx.save()
      this.compositeCtx.drawImage(this.offScreenCanvas, 0, 0)
      this.compositeCtx.font = item.fontSize + 'px ' + this.option.fontFamily
      this.compositeCtx.globalCompositeOperation = 'source-in'
      this.compositeCtx.translate(x, y)
      this.compositeCtx.rotate(textRotation * Math.PI / 180)
      this.compositeCtx.fillText(item.text, 0, 0)
      this.compositeCtx.restore()

      this.miniCtx.clearRect(0, 0, 100, 100)
      this.miniCtx.drawImage(this.compositeCanvas, 0, 0, 100, 100)

      if (this.havePixel(this.miniCanvas, this.miniCtx)) {
        // if (textRotation > -100000) {
        if (rotation === 360) {
          this.drawText(item, r + this.option.dd, 0, 0)
        } else {
          this.drawText(item, r, rotation + this.option.dr, textRotation)
        }

        // } else {
        //   this.drawText(item, r, rotation, textRotation + 2*this.option.tdr*Math.random()- this.option.tdr)
        // }
      } else {
        this.offScreenCtx.save()
        this.offScreenCtx.translate(x, y)
        this.offScreenCtx.rotate(textRotation * Math.PI / 180)
        this.offScreenCtx.font = item.fontSize + 'px ' + this.option.fontFamily
        this.offScreenCtx.fillStyle = colorLuminance(randomHexColor(), -0.2)
        this.offScreenCtx.fillText(item.text, 0, 0)
        this.offScreenCtx.restore()
      }
    }
  }

  randomTextRotation () {
    return -70 + Math.floor(Math.random() * 15) * 10
  }

  havePixel (canvas, ctx) {
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data

    for (let i = 3; i < data.length; i += 4) {
      if (data[i] > 0) {
        return true
      }
    }
  }
}

function colorLuminance (hex, lum) {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '')
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  lum = lum || 0

  // convert to decimal and change luminosity
  var rgb = '#', c, i
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16)
    c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16)
    rgb += ('00' + c).substr(c.length)
  }

  return rgb
}

function randomHexColor () { // 随机生成十六进制颜色
  return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6)
}

export default WordCloud
