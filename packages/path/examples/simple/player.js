import cax from 'cax'
import {getPoint, getPosition} from './bezier'

class Player extends cax.Group {
  constructor (shape) {
    super()
    this.g = new cax.Graphics()
    this.g.beginPath()
    this.g.arc(0, 0, 5, 0, Math.PI * 2)
    this.g.fill()

    this.shape = shape
    this.add(this.g)
    this.speed = 10
    this.length = 0

    this.drawGraphics = new cax.Graphics()
    this.drawGraphics.beginPath()
    this.drawPoints = []

    this.add(this.drawGraphics)
  }

  update () {
    this.length += this.speed
    const position = getPosition(this.length, this.shape)

    const point = getPoint(position.t, position.index, this.shape)

    this.g.x = point.x
    this.g.y = point.y

    this.drawPoints.push(point)

    this.drawGraphics.clear()

    this.drawPoints.forEach((p, index) => {
      this.drawGraphics[index === 0 ? 'moveTo' : 'lineTo'](p.x, p.y)
    })

    this.drawGraphics.stroke()

    if (this.length > this.shape.pathLen) {
      this.length -= this.shape.pathLen
    }
  }
}

export default Player
