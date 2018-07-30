import cax from 'cax'
const { Graphics, Text, Group } = cax

class Axis extends Group {
  constructor (axis, orient, data) {
    super()
    const scale = axis.scale
    const f = scale.domain[0]
    const t = scale.domain[1]
    const rf = scale.range[0]
    const rt = scale.range[1]

    const x = axis.x
    const y = axis.y
    const g = new Graphics()
    const moveTo = [0, 0]
    const lineTo = [0, 0]
    switch (orient) {
      case 'left':
      case 'right':
        moveTo[0] = x
        moveTo[1] = y + rf
        lineTo[0] = x
        lineTo[1] = y + rt
        break
      case 'top':
      case 'bottom':
        moveTo[0] = x + rf
        moveTo[1] = y
        lineTo[0] = x + rt
        lineTo[1] = y
        break
    }

    g.beginPath().strokeStyle(axis.color).moveTo(moveTo[0], moveTo[1]).lineTo(lineTo[0], lineTo[1]).stroke()

    let current
    switch (orient) {
      case 'bottom':
        for (let i = f; i <= t; i += axis.interval) {
          current = scale(i) + x
          g.beginPath().strokeStyle(axis.color).moveTo(current, y).lineTo(current, y + 5).stroke()

          if (axis.gird && i > f) {
            g.beginPath().strokeStyle(axis.gird.color).moveTo(current, y - 1).lineTo(current, y - axis.gird.length).stroke()
          }

          if (!axis.text.range || i >= axis.text.range[0] && i <= axis.text.range[1]) {
            const text = new Text(axis.text.value ? axis.text.value(data[i], i) : i, {font: axis.text.font, color: axis.text.color})
            text.x = current + axis.text.x - text.getWidth() / 2
            text.y = y + 5 + axis.text.y
            text.rotation = axis.text.rotation || 0
            this.add(text)
          }
        }
        break
      case 'left':

        for (let i = f; i <= t; i += axis.interval) {
          current = scale(i) + y
          g.beginPath().strokeStyle(axis.color).moveTo(x, current).lineTo(x - 5, current).stroke()

          if (axis.gird && i > f) {
            g.beginPath().strokeStyle(axis.gird.color).moveTo(x + 1, current).lineTo(x + axis.gird.length, current).stroke()
          }
          if (!axis.text.range || i >= axis.text.range[0] && i <= axis.text.range[1]) {
            const text = new Text(axis.text.value ? axis.text.value(data[i], i) : i, {font: axis.text.font, color: axis.text.color})
            text.x = x - 5 + axis.text.x - text.getWidth()
            text.y = current + axis.text.y
            text.rotation = axis.text.rotation || 0
            this.add(text)
          }
        }
        break

      case 'top':
        for (let i = f; i <= t; i += axis.interval) {
          current = scale(i) + x
          g.beginPath().strokeStyle(axis.color).moveTo(current, y).lineTo(current, y - 5).stroke()

          if (axis.gird && i > f) {
            g.beginPath().strokeStyle(axis.gird.color).moveTo(current, y - 1).lineTo(current, y - axis.gird.length).stroke()
          }

          if (!axis.text.range || i >= axis.text.range[0] && i <= axis.text.range[1]) {
            const text = new Text(axis.text.value ? axis.text.value(data[i], i) : i, {font: axis.text.font, color: axis.text.color})
            text.x = current + axis.text.x - text.getWidth() / 2
            text.y = y - 5 + axis.text.y
            text.rotation = axis.text.rotation || 0
            this.add(text)
          }
        }
        break

      case 'right':

        for (let i = f; i <= t; i += axis.interval) {
          current = scale(i) + y
          g.beginPath().strokeStyle(axis.color).moveTo(x, current).lineTo(x + 5, current).stroke()

          if (axis.gird && i > f) {
            g.beginPath().strokeStyle(axis.gird.color).moveTo(x + 1, current).lineTo(x + axis.gird.length, current).stroke()
          }
          if (!axis.text.range || i >= axis.text.range[0] && i <= axis.text.range[1]) {
            const text = new Text(axis.text.value ? axis.text.value(data[i], i) : i, {font: axis.text.font, color: axis.text.color})
            text.x = x + 5 + axis.text.x
            text.y = current + axis.text.y
            text.rotation = axis.text.rotation || 0
            this.add(text)
          }
        }
        break
    }

    this.add(g)
  }
}

export default Axis
