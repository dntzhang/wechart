import cax  from 'cax'
const { Graphics, Text, Group } = cax


class Axis extends Group {

  constructor (axis, orient) {
    super()
    const f = axis.from
    const t = axis.to
    const x = axis.x
    const y = axis.y
    const g = new Graphics()
    const lineTo = [0, 0]
    switch (orient) {
      case 'left':
        lineTo[0] = x
        lineTo[1] = y - (t - f) / axis.mapping[0] * axis.mapping[1]
        break
      case 'bottom':
        lineTo[0] = x + (t - f) / axis.mapping[0] * axis.mapping[1]
        lineTo[1] = y
        break
      case 'right':
        lineTo[0] = x
        lineTo[1] = y - (t - f) / axis.mapping[0] * axis.mapping[1]
        break
      case 'top':
        lineTo[0] = x + (t - f) / axis.mapping[0] * axis.mapping[1]
        lineTo[1] = y
        break
    }
  
    g.beginPath().strokeStyle(axis.color).moveTo(x, y).lineTo(lineTo[0], lineTo[1]).stroke()
  
    let current
    switch (orient) {
      case 'bottom':
        for (let i = f; i <= t; i += axis.interval) {
          current = x + (i - f) / axis.mapping[0] * axis.mapping[1]
  
          g.beginPath().strokeStyle(axis.color).moveTo(current, y).lineTo(current, y + 5).stroke()
  
          if (axis.gird && i > f) {
            g.beginPath().strokeStyle(axis.gird.color).moveTo(current, y - 1).lineTo(current, y - axis.gird.length).stroke()
          }
  
          if (!axis.text.range || i >= axis.text.range[0] && i <= axis.text.range[1]) {
            const text = new Text(axis.text.value ? axis.text.value(i) : i, axis.text.font, axis.text.color)
            text.x = current + axis.text.x
            text.y = y + 5 + axis.text.y
            text.rotation = axis.text.rotation || 0
            this.add(text)
          }
        }
        break
      case 'left':
  
        for (let i = f; i <= t; i += axis.interval) {
          current = y - (i - f) / axis.mapping[0] * axis.mapping[1]
  
          g.beginPath().strokeStyle(axis.color).moveTo(x, current).lineTo(x - 5, current).stroke()
  
          if (axis.gird && i > f) {
            g.beginPath().strokeStyle(axis.gird.color).moveTo(x + 1, current).lineTo(x + axis.gird.length, current).stroke()
          }
          if (!axis.text.range || i >= axis.text.range[0] && i <= axis.text.range[1]) {
            const text = new Text(axis.text.value ? axis.text.value(i) : i, axis.text.font, axis.text.color)
            text.x = x - 5 + axis.text.x
            text.y = current + axis.text.y
            text.rotation = axis.text.rotation || 0
            this.add(text)
          }
        }
        break
  
      case 'top':
        for (let i = f; i <= t; i += axis.interval) {
          current = x + (i - f) / axis.mapping[0] * axis.mapping[1]
  
          g.beginPath().strokeStyle(axis.color).moveTo(current, y).lineTo(current, y - 5).stroke()
  
          if (axis.gird && i > f) {
            g.beginPath().strokeStyle(axis.gird.color).moveTo(current, y - 1).lineTo(current, y - axis.gird.length).stroke()
          }
  
          if (!axis.text.range || i >= axis.text.range[0] && i <= axis.text.range[1]) {
            const text = new Text(axis.text.value ? axis.text.value(i) : i, axis.text.font, axis.text.color)
            text.x = current + axis.text.x
            text.y = y - 5 + axis.text.y
            text.rotation = axis.text.rotation || 0
            this.add(text)
          }
        }
        break
  
      case 'right':
  
        for (let i = f; i <= t; i += axis.interval) {
          current = y - (i - f) / axis.mapping[0] * axis.mapping[1]
  
          g.beginPath().strokeStyle(axis.color).moveTo(x, current).lineTo(x + 5, current).stroke()
  
          if (axis.gird && i > f) {
            g.beginPath().strokeStyle(axis.gird.color).moveTo(x + 1, current).lineTo(x + axis.gird.length, current).stroke()
          }
          if (!axis.text.range || i >= axis.text.range[0] && i <= axis.text.range[1]) {
            const text = new Text(axis.text.value ? axis.text.value(i) : i, axis.text.font, axis.text.color)
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