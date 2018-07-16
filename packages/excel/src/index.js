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
    this.mCtx = document.createElement('canvas').getContext('2d')
    this.width = arrSum(option.colWidth)
    this._initStyle()

    this._processOption(this.option)
    this.height = this.getHeight()
    this.offset = this._processOffset(option)

    this.renderGrid()
    this.renderText()

  }

  toColumnName(num) {
    for (var ret = '', a = 1, b = 26; (num -= a) >= 0; a = b, b *= 26) {
      ret = String.fromCharCode(parseInt((num % b) / a) + 65) + ret;
    }
    return ret;
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
      offsetY[i + 1] = offsetY[i] + (option.rowAutoHeight[i] || option.rowHeight[i])
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
        let text = null
        if (style.textList) {
          style.textList.forEach((text, index) => {
            text = new Text(text, { font: style.fontStyle + ' ' + style.fontWeight + ' ' + style.fontSize + 'px ' + style.fontFamily, color: style.color })

            if (value !== undefined && value !== null) {

              text.x = this._getX(style.textAlign, this.option.colWidth[x], text.getWidth(), this.offset.x[x])
              text.y = this._getY(style.verticalAlign, this.option.rowAutoHeight[y] || this.option.rowHeight[y], style.lineHeight, this.offset.y[y]) + index * style.lineHeight - style.textList.length / 2 * style.lineHeight + style.lineHeight / 2

              this.add(text)
            }
          })
        } else {
          text = new Text(value, { font: style.fontStyle + ' ' + style.fontWeight + ' ' + style.fontSize + 'px ' + style.fontFamily, color: style.color })
          if (value !== undefined && value !== null) {
            this.mCtx.font = style.fontStyle + ' ' + style.fontWeight + ' ' + style.fontSize + 'px ' + style.fontFamily

            const clipPath = new cax.Graphics()

            clipPath.rect(this.x+this.offset.x[x], this.y+this.offset.y[y], this.option.colWidth[x],  this.option.rowAutoHeight[y] || this.option.rowHeight[y])
            text.absClip(clipPath)
                    
            text.x = this._getX(style.textAlign, this.option.colWidth[x], text.getWidth(), this.offset.x[x])
            text.y = this._getY(style.verticalAlign, this.option.rowAutoHeight[y] || this.option.rowHeight[y], style.fontSize, this.offset.y[y])
            this.add(text)
          }
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
      fontSize: 12,//字体默认10，canvas里计算字体宽度却是按照12来，所有默认用12
      fontStyle: 'normal', //italic oblique
      fontWeight: 'normal', //bold 100 200 300
      textAlign: "center",
      verticalAlign: "middle",
      lineHeight: 15,
      //TODO DEFAULT
      textBreak: 'auto' //default auto 
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


  _getY(verticalAlign, rowHeight, lineHeight, offsetY) {
    switch (verticalAlign) {
      case 'middle':

        return offsetY + rowHeight / 2 - lineHeight / 2
      case 'top':
        return offsetY + 2
      case 'bottom':
        return offsetY + rowHeight - lineHeight - 2
    }
  }


  renderGrid() {
    this.grid.beginPath().strokeStyle(this.gridColor)

    this.grid.moveTo(0, 0).lineTo(this.width, 0)
    let currentY = 0, currentX = 0
    for (let i = 0; i < this.rowCount; i++) {

      currentY += this.option.rowAutoHeight[i] || this.option.rowHeight[i]
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


  _processOption(option) {
    option.rowAutoHeight = {}
    option.style.forEach((row, y) => {
      let maxHeight = option.rowHeight[y]
      row.forEach((cell, x) => {
        const dataRow = this.data[y]
        const text = dataRow[x]
        this.mCtx.font = cell.fontSize + "px " + cell.fontFamily
        const textWidth = this.mCtx.measureText(text).width
        const cellWidth = option.colWidth[x]
        if (cell.textBreak === 'auto' && textWidth > cellWidth) {



          const step = Math.round(text.length * (cellWidth - 30) / textWidth / 2)

          cell.textList = this.stringSplit(text, step)

          maxHeight = Math.max(cell.textList.length * cell.lineHeight + 8, maxHeight)
        }
        option.rowAutoHeight[y] = maxHeight
      

      })
    })
  }

  getHeight(){
    let sum = 0
    this.option.rowHeight.forEach((height,y)=>{
      sum+=( this.option.rowAutoHeight[y]? this.option.rowAutoHeight[y]:height)
    })

    return sum
  }
  
  stringSplit(str, len) {
    let arr = [],
      offset = 0,
      char_length = 0
    for (let i = 0; i < str.length; i++) {
      let son_str = str.charAt(i);
      encodeURI(son_str).length > 2 ? char_length += 1 : char_length += 0.5;
      if (char_length >= len || (char_length < len && i === str.length - 1)) {
        let sub_len = char_length == len ? i + 1 : i;
        arr.push(str.substr(offset, sub_len - offset + ((char_length < len && i === str.length - 1) ? 1 : 0)))
        offset = i + 1
        char_length = 0
      }
    }
    return arr
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
