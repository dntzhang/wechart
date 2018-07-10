import cax from 'cax'
import { getPoint, getPosition } from './bezier'

class Pen extends cax.Group {
  constructor (shape, once, callback) {
    super()
    this.g = new cax.Graphics()
    this.g.beginPath()
    this.g.arc(0, 0, 5, 0, Math.PI * 2)
    this.g.closePath()
    this.g.fill()

    this.shape = shape
    this.add(this.g)
    this.speed = 4
    this.length = 0

    this.drawGraphics = new cax.Graphics()
    this.drawGraphics.beginPath()
    this.drawPoints = []

    this.add(this.drawGraphics)

    this.once = once
    this.callback = callback
    this.isStop = false
  }

  stop () {
    this.remove(this.g)
    this.isStop = true
  }

  start () {
    this.isStop = false
    this.drawGraphics = new cax.Graphics()
    this.drawGraphics.beginPath()
    this.drawPoints = []

    this.add(this.drawGraphics)
  }

  update () {
    if (this.isStop) {
      return
    }
    this.length += this.speed
    const position = getPosition(this.length, this.shape)

    const point = getPoint(position.t, position.index, this.shape)

    this.g.x = point.x
    this.g.y = point.y

    this.drawPoints.push(point)

    this.drawGraphics.clear().beginPath()

    this.drawPoints.forEach((p, index) => {
      this.drawGraphics[index === 0 ? 'moveTo' : 'lineTo'](p.x, p.y)
    })

    if (this.length > this.shape.pathLen) {
      if (this.once) {
        this.length = 0
        this.isStop = true
        this.drawPoints.length = 0
        this.drawGraphics.closePath()
        this.callback()
      } else {
        this.length -= this.shape.pathLen
      }
    }

    this.drawGraphics.stroke()
  }
}

export default Pen
