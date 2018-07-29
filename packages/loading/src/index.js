import cax from 'cax'
const { Graphics, Bitmap, Text, Group } = cax

class Loading extends Group {
  constructor (option) {
    super()

    this.color = option.color

    this.g = new Graphics()
    this.text = new cax.Text(option.percent + '%', {
      color: option.colorB,
      font: option.font
    })
    const width = option.img.width
    const height = option.img.height
    this.text.x = width / 2 - this.text.getWidth() / 2
    this.text.y = height / 2 - 10

    this.group = new Group()
    this.bmp = new Bitmap(option.img)
    this.bmp.compositeOperation = 'destination-atop'

    this.text.compositeOperation = 'source-in'

    this.group.add(this.g, this.bmp)

    this.add(this.group)
    this.group.cache(0, 0, width, height, 1, true)

    this.textB = new cax.Text(option.percent + '%', {
      color: option.colorA,
      font: option.font
    })
    this.textB.x = width / 2 - this.text.getWidth() / 2
    this.textB.y = height / 2 - 10
    this.add(this.textB)

    this.groupB = new Group()
    this.groupB.add(this.g, this.text)
    this.groupB.cache(0, 0, width, height, 1, true)
    this.add(this.groupB)

    this.waveSpeed = option.waveSpeed
    this.img = option.img
    this.waveWidth = width * 2.5
    this.offset = 0
    this.waveHeight = 8
    this.waveCount = 5
    this.startX = -width / 2
    this.startY = height
    this.progress = option.percent / 100 * height
    this.progressStep = option.step || 1
    this.d2 = this.waveWidth / this.waveCount
    this.d = this.d2 / 2
    this.hd = this.d / 2
  }

  update () {
    this.offset -= this.waveSpeed
    this.progress += this.progressStep
    if (this.progress > this.img.height) {
      this.progress = this.img.height
      this.progressStep *= -1
    } else if (this.progress < 0) {
      this.progress = 0
      this.progressStep *= -1
    }

    if (Math.abs(this.offset) >= this.d2) {
      this.offset = this.d2 - Math.abs(this.offset)
    }

    this.g.clear().beginPath().fillStyle(this.color)
    var offsetY = this.startY - this.progress
    this.g.moveTo(this.startX - this.offset, offsetY)
    for (var i = 0; i < this.waveCount; i++) {
      var dx = i * this.d2
      var offsetX = dx + this.startX - this.offset
      this.g.quadraticCurveTo(offsetX + this.hd, offsetY + this.waveHeight, offsetX + this.d, offsetY)
      this.g.quadraticCurveTo(offsetX + this.hd + this.d, offsetY - this.waveHeight, offsetX + this.d2, offsetY)
    }

    this.g.lineTo(this.startX + this.waveWidth, this.img.height * 1.5)
    this.g.lineTo(this.startX, this.img.height * 1.5)

    this.g.fill()
  }
}

export default Loading
