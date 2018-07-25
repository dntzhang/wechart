import cax from 'cax'
const { Graphics, Text, Group } = cax

class Functions extends Group {
  constructor(fns, option) {
    super()

    this.scale = 1
    this.g = new Graphics()
    this.range = [-5, 5]
    this.list = []
    this.option = Object.assign({
      scale: 60,
      width: 400,
      height: 400,
      color: function () { }
    }, option)
    fns.forEach(fn => {
      const arr = []
      for (let i = this.range[0]; i < this.range[1]; i += 0.01) {
        const y = fn(i)
        if (!isNaN(y)) {
          arr.push({ x: i, y })
        }
      }
      this.list.push(arr)
    })

    this.render()
    this.g.rotation = 180
    this.g.x = this.option.width / 2
    this.g.y = this.option.height / 2
    this.ag = new Graphics()
    this.add(this.ag, this.g)

    this.renderAxis()
  }


  render() {
    this.g.clear()
    this.list.forEach((fnPoints, index) => {
      this.g.fillStyle(this.option.color(index))
      fnPoints.forEach(point => {
        this.g.beginPath().arc(point.x * this.option.scale, point.y * this.option.scale, 1, 0, Math.PI * 2).fill()
      })
    })
  }

  renderAxis() {
    this.ag.clear().strokeStyle(this.option.axisColor)
    const cols = this.option.width / this.option.scale
    const rows = this.option.height / this.option.scale
    for (let i = 0; i < Math.ceil(cols / 2); i += 1) {

      this.ag.beginPath().moveTo(this.option.width / 2 + i * this.option.scale, 0).lineTo(this.option.width / 2 + i * this.option.scale, this.option.height)
      this.ag.stroke()
      if (i > 0) {


        this.ag.beginPath().moveTo(this.option.width / 2 - i * this.option.scale, 0).lineTo(this.option.width / 2 - i * this.option.scale, this.option.height)
        this.ag.stroke()
      }

    }

    for (let i = 0; i < Math.ceil(rows / 2); i += 1) {

      this.ag.beginPath().moveTo(0, this.option.height / 2 + i * this.option.scale).lineTo(this.option.width, this.option.height / 2 + i * this.option.scale)
      this.ag.stroke()
      if (i > 0) {


        this.ag.beginPath().moveTo(0, this.option.height / 2 - i * this.option.scale).lineTo(this.option.width, this.option.height / 2 - i * this.option.scale)
        this.ag.stroke()
      }

    }



  }
}

export default Functions
