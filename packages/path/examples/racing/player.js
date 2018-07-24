import cax from 'cax'
import { getPoint, getPosition, getLength, slope } from '../../../common/bezier'

class Player extends cax.Group {
  constructor (shape) {
    super()
    this.g = new cax.Graphics()
    this.g.beginPath()
    this.g.arc(0, 0, 5, 0, Math.PI * 2)
    this.g.fill()

    shape.pathLen = 0
    shape.forEach((c) => {
      c.bzLen = getLength(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], 50)
      shape.pathLen += c.bzLen
    })

    this.shape = shape
    this.add(this.g)
    this.speed = 5
    this.length = 0

    this.bitmap = new cax.Bitmap('./car.png')
    this.bitmap.scaleX = this.bitmap.scaleY = 0.2
    this.bitmap.originX = 46
    this.bitmap.originY = 100
    this.add(this.bitmap)
  }

  update () {
    this.length += this.speed
    const position = getPosition(this.length, this.shape)
    let rotation = slope(this.shape[position.index], position.t) * 180 / Math.PI
    const point = getPoint(position.t, position.index, this.shape)

    if (rotation === Infinity) {
      rotation = 0
    }

    this.bitmap.rotation = rotation + 90
    this.bitmap.x = point.x
    this.bitmap.y = point.y

    if (this.length > this.shape.pathLen) {
      this.length -= this.shape.pathLen
    }
  }
}

export default Player
