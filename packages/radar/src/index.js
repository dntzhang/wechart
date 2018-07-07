import cax from 'cax'

const { Polygon, EquilateralPolygon, To, Graphics, Circle ,Group} = cax


class Radar extends Group {
  constructor(data, option) {
    super()
    const arr = Object.keys(data)

    const interval = (option.r - option.startR) / option.count
    for (let i = 0; i < option.count; i++) {
      const p = new EquilateralPolygon(arr.length, option.startR + i * interval, { strokeColor: option.netColor })
      p.x = option.x
      p.y = option.y

      this.add(p)
    }

    const p = new EquilateralPolygon(arr.length, option.r, { strokeColor: option.netColor })
    p.x = option.x
    p.y = option.y

    this.add(p)

    const g = new Graphics()

    g.beginPath().strokeStyle(option.netColor)
    p.vertex.forEach(v => {
      g.moveTo(option.x, option.y)
      g.lineTo(v[0] + p.x, v[1] + p.y)
    })

    g.stroke()
    this.add(g)
    const points = []

    if (option.show) {
      const ratio = 0

      arr.forEach((key, index) => {
        let pos = p.vertex[index]
        let x = pos[0] / option.r
        let y = pos[1] / option.r
        let len = ratio * option.r * data[key].value / 100

        points.push([x * len, y * len])
      })

      const vp = new Polygon(points, {
        fillColor: option.fillColor
      })
      vp.alpha = 0.5
      vp.x = option.x
      vp.y = option.y
      this.add(vp)
      const circles = []
      points.forEach(p => {
        const c = new Circle(option.dotR, {
          fillStyle: option.dotColor,
          strokeStyle: option.dotColor
        })
        c.x = option.x + p[0]
        c.y = option.y + p[1]
        circles.push(c)
        this.add(c)
      })

      circles.forEach((circle, index) => {
        To.get({ ratio })
          .wait(typeof option.show.delay === 'number'
              ? option.show.delay
              : option.show.delay(index))
          .to({ ratio: 1 }, option.show.duration, option.show.easing )
          
          .progress(function (object) {
            let pos = p.vertex[index]
            let x = pos[0] / option.r
            let y = pos[1] / option.r
            let len = object.ratio * option.r * data[arr[index]].value / 100

            points[index][0] = x * len
            points[index][1] = y * len
            circle.x = points[index][0] + option.x
            circle.y = points[index][1] + option.y
          }).start()
      })
    } else {
      arr.forEach((key, index) => {
        let pos = p.vertex[index]
        let x = pos[0] / option.r
        let y = pos[1] / option.r
        let len = option.r * data[key].value / 100

        points.push([x * len, y * len])
      })

      const vp = new Polygon(points, {
        fillColor: option.fillColor
      })
      vp.alpha = 0.5
      vp.x = option.x
      vp.y = option.y
      this.add(vp)

      points.forEach(p => {
        const c = new Circle(option.dotR, {
          fillStyle: option.dotColor,
          strokeStyle: option.dotColor
        })
        c.x = option.x + p[0]
        c.y = option.y + p[1]
        this.add(c)
      })
    }
  }
}


export default Radar

