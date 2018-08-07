import cax from 'cax'
const { Graphics, Text, Group } = cax

class Excel extends Group {
  constructor (data, option) {
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

    this.textGroup = new Group()
    this.renderGrid()

    this.add(this.grid, this.textGroup)
    this.renderText()

    this.borderLevel = 0

    this.style = this.option.style
  }

  toColumnName (num) {
    for (var ret = '', a = 1, b = 26; (num -= a) >= 0; a = b, b *= 26) {
      ret = String.fromCharCode(parseInt((num % b) / a) + 65) + ret
    }
    return ret
  }

  _initStyle () {
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

  _processOffset (option) {
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

  renderText () {
    this.data.forEach((row, y) => {
      row.forEach((value, x) => {
        const style = this.option.style[y][x]
        let text = null
        const mergeInfo = this.getMergeInfo(y, x)
        if (!mergeInfo.isMerge || mergeInfo.isLeftTop) {
          let boxWidth = this.option.colWidth[x]
          let boxHeight = this.option.rowAutoHeight[y] || this.option.rowHeight[y]
          if (mergeInfo.isLeftTop) {
            boxWidth = mergeInfo.width
            boxHeight = mergeInfo.height
          }

          if (style.textList) {
            style.textList.forEach((text, index) => {
              text = new Text(text, { font: style.fontStyle + ' ' + style.fontWeight + ' ' + style.fontSize + 'px ' + style.fontFamily, color: style.color })

              if (value !== undefined && value !== null) {
                text.x = this._getX(style.textAlign, boxWidth, text.getWidth(), this.offset.x[x])
                text.y = this._getY(style.verticalAlign, boxHeight, style.lineHeight, this.offset.y[y]) + index * style.lineHeight - style.textList.length / 2 * style.lineHeight + style.lineHeight / 2

                this.textGroup.add(text)
              }
            })
          } else {
            text = new Text(value, { font: style.fontStyle + ' ' + style.fontWeight + ' ' + style.fontSize + 'px ' + style.fontFamily, color: style.color })
            if (value !== undefined && value !== null) {
              this.mCtx.font = style.fontStyle + ' ' + style.fontWeight + ' ' + style.fontSize + 'px ' + style.fontFamily

              text.x = this._getX(style.textAlign, boxWidth, text.getWidth(), this.offset.x[x])
              text.y = this._getY(style.verticalAlign, boxHeight, style.fontSize, this.offset.y[y])

              const clipPath = new cax.Graphics()

              clipPath.rect(this.offset.x[x] - text.x, this.offset.y[y] - text.y, boxWidth, boxHeight)
              text.clip(clipPath)
              this.textGroup.add(text)
            }
          }
        }
      })
    })
  }

  update () {
    this.textGroup.empty()

    this._processOption(this.option)
    this.height = this.getHeight()
    this.offset = this._processOffset(this.option)
    this.renderGrid()
    this.renderText()
  }

  setLeftBorder (row, col, color) {
    this.option.style[row][col].borderLeft = {
      color: color,
      level: this.borderLevel++
    }
  }

  setRightBorder (row, col, color) {
    this.option.style[row][col].borderRight = {
      color: color,
      level: this.borderLevel++
    }
  }

  setTopBorder (row, col, color) {
    this.option.style[row][col].borderTop = {
      color: color,
      level: this.borderLevel++
    }
  }

  setBottomBorder (row, col, color) {
    this.option.style[row][col].borderBottom = {
      color: color,
      level: this.borderLevel++
    }
  }

  setBorder (row, col, color) {
    this.option.style[row][col].borderLeft = {
      color: color,
      level: this.borderLevel
    }

    this.option.style[row][col].borderRight = {
      color: color,
      level: this.borderLevel
    }

    this.option.style[row][col].borderTop = {
      color: color,
      level: this.borderLevel
    }

    this.option.style[row][col].borderBottom = {
      color: color,
      level: this.borderLevel++
    }
  }

  getStyle (row, col) {
    const defaultStyle = {
      backgroundColor: '#fff',
      borderLeft: null,
      borderRight: null,
      borderTop: null,
      borderBottom: null,
      color: 'black',
      fontFamily: 'sans-serif', // sans-serif的 bold无效
      fontSize: 12, // 字体默认10，canvas里计算字体宽度却是按照12来，所有默认用12
      fontStyle: 'normal', // italic oblique
      fontWeight: 'normal', // bold 100 200 300
      textAlign: 'center',
      verticalAlign: 'middle',
      lineHeight: 15,
      // TODO DEFAULT
      textBreak: 'auto' // default auto
    }
    if (this.option.style && this.option.style[row] && this.option.style[row][col]) {
      return Object.assign(defaultStyle, this.option.style[row][col])
    }
    return defaultStyle
  }

  _getX (textAlign, colWidth, textWidth, offsetX) {
    switch (textAlign) {
      case 'center':
        return offsetX + colWidth / 2 - textWidth / 2
      case 'left':
        return offsetX + 4
      case 'right':
        return offsetX + colWidth - textWidth - 4
    }
  }

  _getY (verticalAlign, rowHeight, lineHeight, offsetY) {
    switch (verticalAlign) {
      case 'middle':

        return offsetY + rowHeight / 2 - lineHeight / 2
      case 'top':
        return offsetY + 2
      case 'bottom':
        return offsetY + rowHeight - lineHeight - 2 - lineHeight / 2
    }
  }

  renderGrid () {
    this.grid.clear()
    let boxHeight = 0
    for (let i = 0; i < this.rowCount; i++) {
      boxHeight += this.option.rowAutoHeight[i] || this.option.rowHeight[i]
    }
    this.grid.fillStyle(this.option.backgroundColor).fillRect(0, 0, arrSum(this.option.colWidth), boxHeight)
    for (let i = 0; i < this.rowCount; i++) {
      for (let j = 0; j < this.colCount; j++) {
        const h = this.option.rowAutoHeight[i] || this.option.rowHeight[i]
        if (this._borderCheck(i, j, 'left')) {
          this.grid.beginPath().moveTo(this.offset.x[j], this.offset.y[i]).lineTo(this.offset.x[j], this.offset.y[i] + h)
          let style = this._getBorderColor(i, j, 'left')
          if (style) {
            this.grid.strokeStyle(style.color)
          } else {
            this.grid.strokeStyle(this.gridColor)
          }
          this.grid.stroke()
        }
        if (this._borderCheck(i, j, 'top')) {
          this.grid.beginPath().moveTo(this.offset.x[j], this.offset.y[i]).lineTo(this.offset.x[j] + this.option.colWidth[j], this.offset.y[i])
          let style = this._getBorderColor(i, j, 'top')
          if (style) {
            this.grid.strokeStyle(style.color)
          } else {
            this.grid.strokeStyle(this.gridColor)
          }
          this.grid.stroke()
        }

        if (j === this.colCount - 1) {
          if (this._borderCheck(i, j, 'right')) {
            this.grid.beginPath().moveTo(this.offset.x[j] + this.option.colWidth[j], this.offset.y[i]).lineTo(this.offset.x[j] + this.option.colWidth[j], this.offset.y[i] + h)
            let style = this._getBorderColor(i, j, 'right')
            if (style) {
              this.grid.strokeStyle(style.color)
            } else {
              this.grid.strokeStyle(this.gridColor)
            }
            this.grid.stroke()
          }
        }

        if (i === this.rowCount - 1) {
          if (this._borderCheck(i, j, 'bottom')) {
            this.grid.beginPath().moveTo(this.offset.x[j], this.offset.y[i] + h).lineTo(this.offset.x[j] + this.option.colWidth[j], this.offset.y[i] + h)
            let style = this._getBorderColor(i, j, 'bottom')
            if (style) {
              this.grid.strokeStyle(style.color)
            } else {
              this.grid.strokeStyle(this.gridColor)
            }
            this.grid.stroke()
          }
        }
      }
    }
  }

  getMergeInfo (y, x) {
    const result = { }
    this.option.merge.every(rect => {
      if (x >= rect[0] && x <= rect[0] + rect[2] - 1 && y >= rect[1] && y <= rect[1] + rect[3] - 1) {
        result.isMerge = true
        if (x === rect[0] && y === rect[1]) {
          result.isLeftTop = true
          result.xEnd = rect[0] + rect[2]
          result.yEnd = rect[1] + rect[3]
        }
        return false
      }

      return true
    })

    if (result.isLeftTop) {
      result.width = 0
      result.height = 0

      for (let i = x; i < result.xEnd; i++) {
        result.width += this.option.colWidth[i]
      }

      for (let i = y; i < result.yEnd; i++) {
        result.height += this.option.rowAutoHeight[i] || this.option.rowHeight[i]
      }
    }

    return result
  }

  _getBorderColor (y, x, dir) {
    let current, next
    switch (dir) {
      case 'top':

        current = this.option.style[y][x]
        if (this.option.style[y - 1]) {
          next = this.option.style[y - 1][x]
        }

        if (next) {
          if (!current.borderTop && !next.borderBottom) {
            return null
          } else if (current.borderTop && !next.borderBottom) {
            return current.borderTop
          } else if (!current.borderTop && next.borderBottom) {
            return next.borderBottom
          } else if (next.borderBottom.level > current.borderTop.level) {
            return next.borderBottom
          } else {
            return current.borderTop
          }
        } else {
          return current.borderTop
        }

        break

      case 'bottom':

        current = this.option.style[y][x]
        if (this.option.style[y + 1]) {
          next = this.option.style[y + 1][x]
        }

        if (next) {
          if (!current.borderBottom && !next.borderTop) {
            return null
          } else if (current.borderBottom && !next.borderTop) {
            return current.borderBottom
          } else if (!current.borderBottom && next.borderTop) {
            return next.borderTop
          } else if (next.borderTop.level > current.borderBottom.level) {
            return next.borderTop
          } else {
            return current.borderBottom
          }
        } else {
          return current.borderBottom
        }

        break

      case 'left':

        current = this.option.style[y][x]

        next = this.option.style[y][x - 1]

        if (next) {
          if (!current.borderLeft && !next.borderRight) {
            return null
          } else if (current.borderLeft && !next.borderRight) {
            return current.borderLeft
          } else if (!current.borderLeft && next.borderRight) {
            return next.borderRight
          } else if (next.borderRight.level > current.borderLeft.level) {
            return next.borderRight
          } else {
            return current.borderLeft
          }
        } else {
          return current.borderLeft
        }

        break

      case 'right':
        current = this.option.style[y][x]

        next = this.option.style[y][x + 1]

        if (next) {
          if (!current.borderRight && !next.borderLeft) {
            return null
          } else if (current.borderRight && !next.borderLeft) {
            return current.borderRight
          } else if (!current.borderRight && next.borderLeft) {
            return next.borderLeft
          } else if (next.borderLeft.level > current.borderLeft1.level) {
            return next.borderLeft
          } else {
            return current.borderRight
          }
        } else {
          return current.borderRight
        }

        break
    }
  }

  _borderCheck (y, x, dir) {
    let result = true
    this.option.merge.every(rect => {
      if (x >= rect[0] && x <= rect[0] + rect[2] - 1 && y >= rect[1] && y <= rect[1] + rect[3] - 1) {
        if (rect[1] > 1) {
          if (x === rect[0] && dir === 'right') {
            result = false

            return false
          }

          if (x === rect[0] + rect[2] - 1 && dir === 'left') {
            result = false
            return false
          }
        }

        if (x > rect[0] && x < rect[0] + rect[2] - 1 && (dir === 'left' || dir === 'right')) {
          result = false
          return false
        }

        if (rect[3] > 1) {
          if (y === rect[1] && dir === 'bottom') {
            result = false
            return false
          }

          if (y === rect[1] + rect[3] - 1 && dir === 'top') {
            result = false
            return false
          }
        }

        if (y > rect[1] && y < rect[1] + rect[3] - 1 && (dir === 'top' || dir === 'bottom')) {
          result = false
          return false
        }
      }

      return true
    })

    return result
  }

  _processOption (option) {
    option.rowAutoHeight = {}
    option.style.forEach((row, y) => {
      let maxHeight = option.rowHeight[y]
      row.forEach((cell, x) => {
        const dataRow = this.data[y]
        const text = dataRow[x]
        this.mCtx.font = cell.fontSize + 'px ' + cell.fontFamily
        const textWidth = this.mCtx.measureText(text).width
        const cellWidth = this.getMergeInfo(y, x).width || option.colWidth[x]
        if (cell.textBreak === 'auto' && textWidth > cellWidth) {
          const step = Math.round(text.length * (cellWidth - 30) / textWidth / 2)

          cell.textList = this.stringSplit(text, step)

          maxHeight = Math.max(cell.textList.length * cell.lineHeight + 8, maxHeight)
        } else {
          cell.textList = null
        }
        option.rowAutoHeight[y] = maxHeight
      })
    })
  }

  getHeight () {
    let sum = 0
    this.option.rowHeight.forEach((height, y) => {
      sum += (this.option.rowAutoHeight[y] ? this.option.rowAutoHeight[y] : height)
    })

    return sum
  }

  stringSplit (str, len) {
    let arr = [],
      offset = 0,
      char_length = 0
    for (let i = 0; i < str.length; i++) {
      let son_str = str.charAt(i)
      encodeURI(son_str).length > 2 ? char_length += 1 : char_length += 0.5
      if (char_length >= len || (char_length < len && i === str.length - 1)) {
        let sub_len = char_length == len ? i + 1 : i
        arr.push(str.substr(offset, sub_len - offset + ((char_length < len && i === str.length - 1) ? 1 : 0)))
        offset = i + 1
        char_length = 0
      }
    }
    return arr
  }
}

function arrSum (arr) {
  let sum = 0
  arr.forEach(value => {
    sum += value
  })
  return sum
}

export default Excel
