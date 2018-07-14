import cax from 'cax'
const { Graphics, Text, Group } = cax

class Excel extends Group {
  constructor(data, option) {
    super()


    this.data = data

    this.option = option

    this.colCount = option.colWidth.length
    this.rowCount = option.rowHeight.length

    this.gridColor = option.gridColor || '#cccccc'

    this.grid = new Graphics()


    this.width = arrSum(option.colWidth)
    this.height = arrSum(option.rowHeight)

    this.offset = this._processOffset(option)

    this.renderGrid()
    this.renderText()

  }

  _processOffset(option) {
    const offsetX = [0]
    for (let i = 0, length = option.colWidth.length; i < length - 1; i++) {
      offsetX[i + 1] = offsetX[i] + option.colWidth[i]
    }
    const offsetY = [0]
    for (let i = 0, length = option.rowHeight.length; i < length - 1; i++) {
      offsetY[i + 1] = offsetY[i] + option.rowHeight[i]
    }

    return {
      x: offsetX,
      y: offsetY
    }
  }


  renderText() {

    this.data.forEach((row, y) => {
      row.forEach((value, x) => {
        const text = new Text(value, '', 'red')
        if(value !== undefined && value !== null){
          text.x = this.offset.x[x]
          text.y = this.offset.y[y]
          this.add(text)
        }
      })
    })
  }

  renderGrid() {
    this.grid.beginPath().strokeStyle(this.gridColor)

    this.grid.moveTo(0, 0).lineTo(this.width, 0)
    let currentY = 0, currentX = 0
    for (let i = 0; i < this.rowCount; i++) {

      currentY += this.option.rowHeight[i]
      this.grid.moveTo(0, currentY).lineTo(this.width, currentY)
    }

    this.grid.moveTo(0, 0).lineTo(0, this.height)
    for (let i = 0; i < this.colCount; i++) {

      currentX += this.option.colWidth[i]
      this.grid.moveTo(currentX, 0).lineTo(currentX, this.height)
    }

    this.grid.stroke()

    this.add(this.grid)
  }
}

function arrSum(arr) {
  let sum = 0
  arr.forEach(value => {
    sum += value

  })
  return sum
}

export default Excel
