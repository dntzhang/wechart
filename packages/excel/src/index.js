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

    this._initStyle()
    this.offset = this._processOffset(option)

    this.renderGrid()
    this.renderText()

  }

  _initStyle() {
    if (!this.option.style) {
      this.option.style = []

    }

    for (let i = 0; i < this.rowCount; i++) {
      let row = []
      for (let j = 0; j < this.colCount; j++) {
        row.push(this.getStyle(i, j))
      }
      this.option.style.push(row)
    }


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
        const style = this.option.style[y][x]
        const text = new Text(value, { font: style.fontStyle + ' ' + style.fontWeight + ' ' + style.fontSize + 'px ' + style.fontFamily, color: style.color })
        if (value !== undefined && value !== null) {

          text.x = this._getX(style.textAlign, this.option.colWidth[x], text.getWidth(), this.offset.x[x])
          text.y = this._getY(style.verticalAlign, this.option.rowHeight[y], style.fontSize, this.offset.y[y])
          this.add(text)
        }
      })
    })
  }

  getStyle(row, col) {
    const defaultStyle = {
      backgroundColor: "#fff",
      borderLeft: null,
      borderRight: null,
      borderTop: null,
      borderBottom: null,
      color: "black",
      fontFamily: "sans-serif", //sans-serif的 bold无效
      fontSize: 10,
      fontStyle: 'normal', //italic oblique
      fontWeight: 'normal', //bold 100 200 300
      textAlign: "center",
      verticalAlign: "middle",
      textBreak: 'default' //default auto break
    }
    if (this.option.style && this.option.style[row] && this.option.style[row][col]) {
      return Object.assign(defaultStyle, this.option.style[row][col])
    }
    return defaultStyle
  }

  _getX(textAlign, colWidth, textWidth, offsetX) {
    switch (textAlign) {
      case 'center':
        return offsetX + colWidth / 2 - textWidth / 2
      case 'left':
        return offsetX + 4
      case 'right':
        return offsetX + colWidth - textWidth - 4
    }
  }


  _getY(verticalAlign, rowHeight, fontSize, offsetY) {
    switch (verticalAlign) {
      case 'middle':
        return offsetY + rowHeight / 2 - fontSize / 2
      case 'top':
        return offsetY + 2
      case 'bottom':
        return offsetY + rowHeight - fontSize - 2
    }
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
