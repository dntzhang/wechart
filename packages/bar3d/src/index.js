
import cax from 'cax'

const { Rect, Group } = cax

const defaultOption = {
  vertical: true
}

class Bar extends Group {
  constructor (data, config) {
    super()

    const tooltip = document.createElement('div')
    document.body.appendChild(tooltip)
    tooltip.style.position = 'absolute'
    tooltip.style.width = 'auto'
    tooltip.style.maxWidth = '400px'
    tooltip.style.height = 'auto'
    tooltip.style.padding = '4px 8px'
    tooltip.style.display = 'none'
    tooltip.style.minWidth = '100px'
    tooltip.style.pointerEvents = 'none'
    tooltip.style.transition = 'all .6s'
    tooltip.style.backgroundColor = 'rgba(0,0,0,.5)'
    tooltip.style.color = 'white'
    tooltip.style.textAlign = 'center'

    config.forEach(rect => {
      rect.processedData = rect.processing ? data.map(rect.processing) : data

      rect.processedData.forEach((value, index) => {
        this.add(new OneBar(value, rect, index, tooltip, data))
      })
    })
  }
}

class OneBar extends Group {
  constructor (value, option, index, tooltip, data) {
    super()
    option = Object.assign({}, defaultOption, option)
    let rect
    if (option.vertical) {
      const height = option.mapping[1] * value / option.mapping[0]
      const width = option.width

      rect = new Rect(width, height, {
        fillStyle: option.color(index)
      })

      rect.x = index * option.interval + option.x
      rect.y = option.y
      rect.originY = height
    } else {
      const height = option.width
      const width = option.mapping[1] * value / option.mapping[0]

      rect = new Rect(
        width,
        height,
        { fillStyle: option.color(index) })

      rect.x = option.x
      rect.y = index * option.interval + option.y
      rect.originY = height
    }

    const from = Object.assign({}, option.show.from)
    const to = Object.assign({}, option.show.to)
    if (from.hasOwnProperty('x')) {
      from.x += rect.x
      to.x += rect.x
    }

    if (from.hasOwnProperty('y')) {
      from.y += rect.y
      to.y += rect.y
    }

    if (option.show) {
      Object.assign(rect, from)
    }

    if (option.tooltip) {
      rect.addEventListener('mouseover', (evt) => {
        tooltip.style.left = (evt.pureEvent.pageX + 5) + 'px'
        tooltip.style.top = (evt.pureEvent.pageY + 5) + 'px'
        tooltip.innerHTML = option.tooltip(data[index])
        tooltip.style.display = 'block'
      })

      rect.addEventListener('mousemove', (evt) => {
        tooltip.style.left = (evt.pureEvent.pageX + 5) + 'px'
        tooltip.style.top = (evt.pureEvent.pageY + 5) + 'px'
      })
      rect.addEventListener('mouseout', () => {
        tooltip.style.display = 'none'
      })
    }

    this.add(rect)

    cax.To.get(from)

      .wait(typeof option.show.delay === 'number'
        ? option.show.delay
        : option.show.delay(index))
      .to(to, option.show.duration, option.show.easing)
      .progress(function (object) {
        Object.assign(rect, object)
      }).start()
  }
}

export function hideRects (group, options, callback) {
  let cpt = false

  group.children.forEach((subGroup, index) => {
    const option = options[index]
    let compLen = 0
    const from = Object.assign({}, option.hide.from)
    const to = Object.assign({}, option.hide.to)

    const total = subGroup.children.length
    subGroup.children.forEach((rect, rectIndex) => {
      cax.To.get(from)
        .wait(typeof option.hide.delay === 'function'
          ? option.hide.delay(rectIndex) : (option.hide.delay || 0))
        .to(to, option.hide.duration, option.hide.easing)
        .progress((object) => {
          Object.assign(rect, object)
        })
        .end(() => {
          compLen++
          if (compLen === total && !cpt) {
            callback()
            cpt = true
          }
        })
        .start()
    })
  })
}

export function getRectsInfo (value, option, index, stage) {
  // const option = options.rects

  const height = option.mapping[1] * value / option.mapping[0]
  const width = option.width

  var rect = {
    left: 0,
    top: 0,
    width,
    height,
    color: option.color(index)
  }

  rect.x = index * option.interval + option.x
  // rect.y = option.y - height
  rect.y = option.y
  rect.originY = height

  stage.push(rect)
}

// color 待定
// A-> B
export function animateRect (rectA, rectB, transition) {
  const to = {};

  ['left', 'top', 'width', 'height', 'alpha', 'scaleX', 'scaleY', 'x', 'y', 'rotation', 'skewX', 'skewY', 'originX', 'originY'].forEach(key => {
    if (rectA[key] !== rectB[key] && rectB[key] !== undefined) {
      to[key] = rectB[key]
    }
  })

  cax.To.get(rectA)
    .to(to, transition.duration, transition.easing)
    .start()
}

export default Bar
