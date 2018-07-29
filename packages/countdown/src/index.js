import cax from 'cax'
import pasition from '../../common/pasition'
import path from './number-path'

const { Group, Graphics } = cax

class Countdown extends Group {
  constructor (option) {
    super()
    option = option || {}
    this.g = new Graphics()
    this.add(this.g)
    this.index = 10
    this.color = option.color || '#14D212'
    this.lineWidth = option.lineWidth || 6
  }

  update () {
    this.g.clear()
    this.g.strokeStyle(this.color)
    this.g.lineWidth(this.lineWidth)
    this.shapes.forEach(shape => {
      this.g.beginPath()
      this.g.moveTo(shape[0][0], shape[0][1])
      shape.forEach(curve => {
        this.g.bezierCurveTo(curve[2], curve[3], curve[4], curve[5], curve[6], curve[7])
      })
      this.g.stroke()
    })
  }

  start () {
    pasition.animate({
      from: path[this.index],
      to: path[--this.index],
      time: 600,
      progress: (shapes) => {
        this.shapes = shapes
      },
      end: () => {
        setTimeout(() => {
          if (this.index > 0) {
            this.start()
          }
        }, 400)
      }
    })
  }
}

export default Countdown
