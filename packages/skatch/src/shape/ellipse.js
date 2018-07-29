
import cax from 'cax'

class Ellipse extends cax.Shape {
  constructor(w, h, option) {
    super()
    this.option = option || {}

    const k = 0.5522848
    const ox = (w / 2) * k
    const oy = (h / 2) * k
    const xe = w
    const ye = h
    const xm = w / 2
    const ym = h / 2

    this.pointsList = []
    for (let i = 0; i < this.option.strokeRepeat; i++) {


      this.pointsList.push([
        _shake(0, ym, this.option.randomRange),
        _shake(0, ym - oy, this.option.randomRange),
        _shake(xm - ox, 0, this.option.randomRange),
        _shake(xm, 0, this.option.randomRange),
        _shake(xm + ox, 0, this.option.randomRange),
        _shake(xe, ym - oy, this.option.randomRange),
        _shake(xe, ym, this.option.randomRange),
        _shake(xe, ym + oy, this.option.randomRange),
        _shake(xm + ox, ye, this.option.randomRange),
        _shake(xm, ye, this.option.randomRange),
        _shake(xm - ox, ye, this.option.randomRange),
        _shake(0, ym + oy, this.option.randomRange),
        _shake(0, ym, this.option.randomRange)

      ])
    }


  }

  draw() {
    this.pointsList.forEach((points) => {



      this.beginPath()
      this.moveTo(points[0][0], points[0][1])
      this.bezierCurveTo(points[1][0], points[1][1], points[2][0], points[2][1], points[3][0], points[3][1])
      this.bezierCurveTo(points[4][0], points[4][1], points[5][0], points[5][1], points[6][0], points[6][1])
      this.bezierCurveTo(points[7][0], points[7][1], points[8][0], points[8][1], points[9][0], points[9][1])
      this.bezierCurveTo(points[10][0], points[10][1], points[11][0], points[11][1], points[12][0], points[12][1])

      if (this.option.strokeStyle) {

        if (this.option.lineWidth !== undefined) {
          this.lineWidth(this.option.lineWidth)
        }
        this.strokeStyle(this.option.strokeStyle)
        this.stroke()
      }

      if (this.option.fillStyle) {
        this.fillStyle(this.option.fillStyle)
        this.fill()
      }


    })

  }
}


function _shake(x, y, randomRange) {
  const r = Math.random() * randomRange
  const a = Math.random() * 360 * Math.PI / 180
  return [x + r * Math.cos(a), y + r * Math.sin(a)]
}


export default Ellipse
