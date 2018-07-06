
import cax from 'cax'
import { getControlPoint } from './get-control-point'
const { TWEEN, Graphics, Circle, Group, Stage, To } = cax

export default class Line extends Group {
  constructor(data, lines) {
    super()
    lines.forEach(item => {
      item.processedData = item.processing ? data.map(item.processing) : data

      this.add(new OneLine(item, data))
    })
  }
}

const defaultOption = {
  smooth: true
}

class OneLine extends Group {
  constructor(option, data) {

    super()
    const path = []
    option = Object.assign({}, defaultOption, option)
    option.endPoints = []
    option.processedData.forEach((value, index) => {
      const x = option.width + index * option.interval
      const y = 0
      option.endPoints.push({ x, y: option.mapping[1] * value / option.mapping[0] })
      path.push({ x, y })
    })

    if (option.smooth) {
      const cps = getControlPoint(path)

      const g = new Graphics()
      g.beginPath().strokeStyle(option.color)

      walkPath(g, path, cps)
      g.stroke()

      g.x = option.x
      g.y = option.y

      const pg = new Graphics()
      pg.alpha = 0.382
      if (option.hasOwnProperty('projectionY')) {
        pg.beginPath().fillStyle(option.color)

        walkPath(pg, path, cps)

        pg.lineTo(path[path.length - 1].x, 0)
        pg.lineTo(path[0].x, 0)
        pg.closePath()
        pg.fill()
      }
      pg.x = option.x
      pg.y = option.y
      this.add(pg, g)

      const py = { py: 0 }

      path.forEach((p, index) => {

        To.get(p)
          .wait(index * 50)
          .to(option.endPoints[index], 2000, option.show.easing)
          .progress(function (object) {
            update(py.py, path, g, pg, option)

            // Object.assign(rect, object)
          }).start()
      })

      To.get(py)
        .to({ py: option.projectionY }, 2000, option.show.easing)
        .progress(function (object) {
          update(py.py, path, g, pg, option)
        })
        .end(() => {
          const cg = createCircles(option.endPoints, option)
          this.add(cg)
          fadeIn(cg)
        })
        .start()
    } else {
      const g = new Graphics()
      g.beginPath().strokeStyle(option.color)
      path.forEach((p, index) => {
        g[index === 0 ? 'moveTo' : 'lineTo'](p.x, p.y)
      })
      g.stroke()

      const pg = new Graphics()
      pg.alpha = 0.5
      if (option.hasOwnProperty('projectionY')) {
        pg.beginPath().fillStyle(option.color)
        path.forEach((p, index) => {
          pg[index === 0 ? 'moveTo' : 'lineTo'](p.x, p.y)
        })

        pg.lineTo(path[path.length - 1].x, 0)
        pg.lineTo(path[0].x, 0)
        pg.closePath()
        pg.fill()
      }
      pg.x = option.x
      pg.y = option.y
      g.x = option.x
      g.y = option.y

      this.add(pg, g)

      const py = { py: 0 }
      path.forEach((p, index) => {
        new TWEEN.Tween(p)
          .to(option.endPoints[index], 2000)
          .delay(index * 50)
          .easing(option.show.easing || TWEEN.Easing.Linear.None)
          .onUpdate(function (object) {
            g.clear().beginPath().strokeStyle(option.color)
            path.forEach((p, index) => {
              g[index === 0 ? 'moveTo' : 'lineTo'](p.x, p.y)
            })
            g.stroke()
          })
          .start()
      })

      new TWEEN.Tween(py)
        .to({ py: option.projectionY }, 2000)
        .easing(option.show.easing || TWEEN.Easing.Linear.None)
        .onUpdate(function (object) {
          if (option.hasOwnProperty('projectionY')) {
            pg.clear().beginPath().fillStyle(option.color)
            path.forEach((p, index) => {
              pg[index === 0 ? 'moveTo' : 'lineTo'](p.x, p.y)
            })

            pg.lineTo(path[path.length - 1].x, py.py)
            pg.lineTo(path[0].x, py.py)
            pg.closePath()
            pg.fill()
          }
        })
        .onComplete(() => {
          const cg = createCircles(option.endPoints, option)
          this.add(cg)
          fadeIn(cg)
        })
        .start()
    }

    // const from = Object.assign({}, option.show.from)
    // const to = Object.assign({}, option.show.to)
    // if (from.hasOwnProperty('x')) {
    //   from.x += rect.x
    //   to.x += rect.x
    // }

    // if (from.hasOwnProperty('y')) {
    //   from.y += rect.y
    //   to.y += rect.y
    // }

    // if (option.show) {
    //   Object.assign(rect, from)
    // }

    // if (option.tooltip) {
    //   rect.addEventListener('mouseover', (evt) => {
    //     tooltip.innerHTML = option.tooltip(data[index])
    //     tooltip.style.display = 'block'
    //   })

    //   rect.addEventListener('mousemove', (evt) => {
    //     tooltip.style.left = evt.stageX + 'px'
    //     tooltip.style.top = evt.stageY + 'px'
    //   })
    //   rect.addEventListener('mouseout', () => {
    //     tooltip.style.display = 'none'
    //   })
    // }
  }
}


function fadeIn(obj) {
  obj.alpha = 0
  To.get(obj).to({ alpha: 1 }, 600).start()
}


function createCircles(eps, option) {
  const group = new Group()
  eps.forEach((ep, index) => {
    const circle = new Circle(4, { fillStyle: option.color })
    circle.x = ep.x
    circle.y = ep.y
    group.add(circle)
  })
  group.alpha = 0
  group.x = option.x
  group.y = option.y
  return group
}

function walkPath(g, path, cps) {
  g.moveTo(path[0].x, path[0].y)
  g.bezierCurveTo(path[0].x, path[0].y, cps[0].x, cps[0].y, path[1].x, path[1].y)

  const len = path.length
  let j = 1, count = len - 2
  for (; j < count; j++) {
    g.bezierCurveTo(cps[j * 2 - 1].x, cps[j * 2 - 1].y, cps[j * 2].x, cps[j * 2].y, path[j + 1].x, path[j + 1].y)
  }

  const cpLen = cps.length
  g.bezierCurveTo(cps[cpLen - 1].x, cps[cpLen - 1].y, path[len - 1].x, path[len - 1].y, path[len - 1].x, path[len - 1].y)
}

export function hideLine(group, options, callback) {
  let cpt = false

  group.children.forEach((subGroup, index) => {
    const option = options[index]
    let compLen = 0
    const from = Object.assign({}, option.hide.from)
    const to = Object.assign({}, option.hide.to)

    const total = subGroup.children.length
    subGroup.children.forEach((rect, rectIndex) => {
      new TWEEN.Tween(from)
        .to(to, option.hide.duration)
        .delay(typeof option.hide.delay === 'function'
          ? option.hide.delay(rectIndex) : (option.hide.delay || 0))
        .easing(option.hide.easing || TWEEN.Easing.Linear.None)
        .onUpdate((object) => {
          Object.assign(rect, object)
        })
        .onComplete(() => {
          compLen++
          if (compLen === total && !cpt) {
            callback()
            cpt = true
          }
        })
        .start()
    })
  })
}

function update(projectionY, path, g, pg, option) {
  const cps = getControlPoint(path)

  g.clear().beginPath().strokeStyle(option.color)

  walkPath(g, path, cps)
  g.stroke()

  pg.clear().beginPath().fillStyle(option.color)

  walkPath(pg, path, cps)

  pg.lineTo(path[path.length - 1].x, projectionY)
  pg.lineTo(path[0].x, projectionY)
  pg.closePath()
  pg.fill()
}
