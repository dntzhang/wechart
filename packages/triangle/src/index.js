/**
 *
 * @Date: 2018/7/22
 * @author: twist
 *
 */

import cax from 'cax'
const { Group } = cax
class triangle extends Group {
  constructor (data, config, axisConfig, stage) {
    super()

    config.forEach(rect => {
      rect.processedData = processPoint(rect, data)
      rect.processedData.forEach((item, index) => {
        this.add(new oneTriangle(data[ index ], index, stage))
      })
    })
  }
}

function processPoint (rect, data) {
  const renderWidth = rect.eleDomain - rect.x
  const itemWidth = renderWidth / data.length
  data.forEach((item, index) => {
    !index ? item.x = 30 : item.x = data[ index - 1 ].x + itemWidth
    item.itemWidth = itemWidth
    item.height = rect.scale(item.age)
    item.y = rect.xAxisY
  })
  return data
}

class oneTriangle extends Group {
  constructor (data, index, stage) {
    super()
    const graphics = new cax.Graphics()
    drawTriangle(graphics, data, index, stage)
  }
}

function drawTriangle (graphics, data, index, stage) {
  let colorList = [ '#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56', '#d0743c', '#ff8c00' ]
  graphics.beginPath()
    .moveTo(data.x, data.y)
    .lineTo(data.x + data.itemWidth, data.y)
    .lineTo(data.x + data.itemWidth / 2, data.height)
    .moveTo(data.x, data.y)
    .fillStyle(colorList[ index ])
    .fill()
  stage.add(graphics)
}

export default triangle
