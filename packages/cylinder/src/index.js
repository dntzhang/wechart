
import cax from 'cax'
const { Ellipse, Graphics, Group } = cax

class Cylinder extends Group {

  constructor(width, height, percent, color, bottleColor) {
    super()

    this.width = width
    this.height = height
    this.value = percent
    bottleColor = bottleColor || '#CACACA'
    const topRect = new Graphics()
    const th = height * (1 - percent)
    const shortSize = width / 2.5 / 2
    this.shortSize = shortSize
    topRect.beginPath().fillStyle(bottleColor).fillRect(0, 0, width, height)
    topRect.alpha = 0.618

    this.surfaceY = height - height * percent - shortSize
    const btRect = new Graphics()
    btRect.beginPath().fillStyle(color).fillRect(0, 0, width, height - th)
    btRect.y = th


    const topEllipse = new Ellipse(width, width / 2.5, {
      fillStyle: bottleColor
    })
    topEllipse.y = shortSize * -1

    const middleEllipse = new Ellipse(width, width / 2.5, {
      fillStyle: color
    })
    middleEllipse.y = th - shortSize

    const middleEllipseMask = new Ellipse(width, width / 2.5, {
      fillStyle: bottleColor
    })
    middleEllipseMask.alpha = 0.618
    middleEllipseMask.y = th - shortSize

    const bottomEllipse = new Ellipse(width, width / 2.5, {
      fillStyle: color
    })
    bottomEllipse.y = height - shortSize

    this.add(topRect, topEllipse, btRect, bottomEllipse, middleEllipse, middleEllipseMask)
  }
}

export default Cylinder