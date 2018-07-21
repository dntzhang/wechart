
import cax from 'cax'

const { Text, Group } = cax

class WordCloud extends Group {
  constructor(data, option) {
    super()

    this.option = option
    data.forEach(item => {
      item.fontSize = option.scale(item.value)
    })

    this.offScreenCanvas = document.createElement('canvas')
    this.offScreenCanvas.width = 400
    this.offScreenCanvas.height = 400
    this.offScreenCtx = this.offScreenCanvas.getContext('2d')

    //debug
    document.body.appendChild(this.offScreenCanvas)

    this.compositeCanvas = document.createElement('canvas')
    this.compositeCanvas.width = 400
    this.compositeCanvas.height = 400
    this.compositeCtx = this.compositeCanvas.getContext('2d')
    this.miniCanvas = document.createElement('canvas')
    this.miniCanvas.width = 140
    this.miniCanvas.height = 140
    this.miniCtx = this.miniCanvas.getContext('2d')

    data.forEach(item => {
      this.drawText(item, option.dd, 0, this.randomTextRotation())
    })
  }

  drawText(item, r, rotation, textRotation) {
    if (r < 500) {

      const x = this.option.center.x + r * Math.cos(rotation * Math.PI / 180)
      const y = this.option.center.y - r * Math.sin(rotation * Math.PI / 180)
   
      this.compositeCtx.clearRect(0, 0, 400, 400)
      this.compositeCtx.save()
      this.compositeCtx.drawImage(this.offScreenCanvas, 0, 0)
      this.compositeCtx.font = item.fontSize + 'px ' + this.option.fontFamily
      this.compositeCtx.globalCompositeOperation = 'source-in'
      this.compositeCtx.translate(x,y)
      this.compositeCtx.rotate(textRotation*Math.PI/180)
      this.compositeCtx.fillText(item.text, 0,0)
      this.compositeCtx.restore()

      this.miniCtx.clearRect(0, 0, 140, 140)
      this.miniCtx.drawImage(this.compositeCanvas, 0, 0, 140, 140)

      if (this.havePixel(this.miniCanvas, this.miniCtx)) {

        if (textRotation > -100000) {
          if (rotation === 360) {
            this.drawText(item, r + this.option.dd, 0, 0)
          } else {
            this.drawText(item, r, rotation + this.option.dr, textRotation)
          }

        } else {
          this.drawText(item, r, rotation, textRotation + 2*this.option.tdr*Math.random()- this.option.tdr)
        }
      } else {
        this.offScreenCtx.save()
        this.offScreenCtx.translate(x,y)
        this.offScreenCtx.rotate(textRotation*Math.PI/180)
        this.offScreenCtx.font = item.fontSize + 'px ' + this.option.fontFamily
        this.offScreenCtx.fillText(item.text, 0, 0)
        this.offScreenCtx.restore()
      }


    }
  }

  randomTextRotation(){
    
   return   -70+   Math.floor(Math.random()*15)*10
  }

  havePixel(canvas, ctx) {
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data
 
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] > 0) {
        return true
      }
    }

  }

}

export default WordCloud