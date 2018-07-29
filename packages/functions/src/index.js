import cax from 'cax'
const { Graphics, Text, Group } = cax

class Functions extends Group {
  constructor (fns, option) {
    super()

    this.scale = 1

    this.list = []
    this.option = Object.assign({
      scale: 60,
      width: 400,
      height: 400,
      step: 0.0001,
      color: function () { }
    }, option)

    this.fns = fns

    this.compute()
    this.render()
    this.renderAxis()
  }

  compute () {
    const range = Math.ceil(this.option.width / this.option.scale / 2)

    this.fns.forEach(fn => {
      const arr = []
      for (let i = -range; i < range; i += this.option.step) {
        window.x = i
        const y = fn(i)
        if (!isNaN(y)) {
          arr.push({ x: i, y })
        }
      }
      this.list.push(arr)
    })
    delete window.x
  }

  render () {
    this.g = new Graphics()

    this.g.rotation = 180
    this.g.x = this.option.width / 2
    this.g.y = this.option.height / 2
    this.g.clear()
    this.list.forEach((fnPoints, index) => {
      this.g.strokeStyle(this.option.fnColor(index)).beginPath().lineWidth(this.option.lineWidth)
      fnPoints.forEach((point, subIndex) => {
        this.g[subIndex === 0 ? 'moveTo' : 'lineTo'](point.x * this.option.scale, point.y * this.option.scale)
      })

      this.g.stroke()
    })

    this.add(this.g)
  }

  update () {
    this.list.length = 0
    this.empty()
    this.compute()
    this.render()
    this.renderAxis()
  }

  renderAxis () {
    this.ag = new Graphics()

    this.add(this.ag)
    this.ag.clear().strokeStyle(this.option.axisColor)
    const cols = this.option.width / this.option.scale
    const rows = this.option.height / this.option.scale
    for (let i = 1; i < Math.ceil(cols / 2); i += 1) {
      this.ag.beginPath().moveTo(this.option.width / 2 + i * this.option.scale, 0).lineTo(this.option.width / 2 + i * this.option.scale, this.option.height)
      this.ag.stroke()

      this.ag.beginPath().moveTo(this.option.width / 2 - i * this.option.scale, 0).lineTo(this.option.width / 2 - i * this.option.scale, this.option.height)
      this.ag.stroke()

      let text = new Text(i)
      this.add(text)
      text.x = this.option.width / 2 + 3
      text.y = this.option.height / 2 + i * this.option.scale

      text = new Text(-i)
      this.add(text)
      text.x = this.option.width / 2 + 3
      text.y = this.option.height / 2 + -i * this.option.scale
    }

    for (let i = 1; i < Math.ceil(rows / 2); i += 1) {
      this.ag.beginPath().moveTo(0, this.option.height / 2 + i * this.option.scale).lineTo(this.option.width, this.option.height / 2 + i * this.option.scale)
      this.ag.stroke()

      this.ag.beginPath().moveTo(0, this.option.height / 2 - i * this.option.scale).lineTo(this.option.width, this.option.height / 2 - i * this.option.scale)
      this.ag.stroke()

      let text = new Text(i)
      this.add(text)
      text.y = this.option.height / 2
      text.x = this.option.width / 2 + i * this.option.scale

      text = new Text(-i)
      this.add(text)
      text.y = this.option.height / 2
      text.x = this.option.width / 2 + -i * this.option.scale
    }

    let text = new Text(0)
    this.add(text)
    text.y = this.option.height / 2
    text.x = this.option.width / 2 + 3

    this.ag.beginPath().strokeStyle('black').moveTo(this.option.width / 2, 0).lineTo(this.option.width / 2, this.option.height)
    this.ag.stroke()

    this.ag.beginPath().strokeStyle('black').moveTo(0, this.option.height / 2).lineTo(this.option.width, this.option.height / 2)
    this.ag.stroke()
  }
}

export default Functions
