import cax from 'cax'
const { Graphics, Bitmap, Text, Group } = cax

class Loading extends Group {
  constructor(img, color) {
    super()

    this.color = color

    this.g = new Graphics()
   
    this.bmp = new Bitmap(img)
    this.bmp.compositeOperation = "destination-atop"
    this.add(this.g, this.bmp)
    this.cache(0, 0, img.width, img.height, 1, true)


    this.waveWidth = 500
    this.offset = 0
    this.waveHeight = 8
    this.waveCount = 5
    this.startX = -100
    this.startY = 204
    this.progress = 0
    this.progressStep = 1
    this.d2 = this.waveWidth / this.waveCount
    this.d = this.d2 / 2
    this.hd = this.d / 2

  }


  update() {


    this.offset -= 5
    this.progress += this.progressStep
    if (this.progress > 220 || this.progress < 0) this.progressStep *= -1
    if (-1 * this.offset === this.d2) this.offset = 0

    this.g.clear().beginPath().fillStyle(this.color)
    var offsetY = this.startY - this.progress
    this.g.moveTo(this.startX - this.offset, offsetY)
    for (var i = 0; i < this.waveCount; i++) {
      var dx = i * this.d2
      var offsetX = dx + this.startX - this.offset;
      this.g.quadraticCurveTo(offsetX + this.hd, offsetY + this.waveHeight, offsetX + this.d, offsetY)
      this.g.quadraticCurveTo(offsetX + this.hd + this.d, offsetY - this.waveHeight, offsetX + this.d2, offsetY)
    }


    this.g.lineTo(this.startX + this.waveWidth, 300)
    this.g.lineTo(this.startX, 300)

    this.g.fill()

  }
}

export default Loading
