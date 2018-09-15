
import cax from 'cax'
import { scaleLinear } from '../../common/scale'
import Axis from '../../axis/src'

const { Rect, Group } = cax

const defaultOption = {
  vertical: true
}



class Bar extends Group {
  constructor (data) {
    super()

    //根据 data 计算标尺
    const len = data.datasets.length
    const axisConfig = {}

    const bottomY = data.height-30
    const startX = 100
    const xScale = scaleLinear([0, data.labels.length], [startX, data.width])
    const xInterval =  (data.width-startX)/data.labels.length
   
    axisConfig.bottom = {
      scale: xScale,
      interval: 1,
      x: 0,
      y: bottomY,
      color: 'black',
      text: {
        color: '#444',
        value: (item, index) => {
          return data.labels[index]
        },
        x: xInterval/2,
        y: 3,
        font: '10px Verdana',
        range: [0, data.labels.length-1],
        //rotation: -10
      },
      // gird: {
      //   color: '#ddd',
  
      //   length: 400
      // }
    }

    const lmin = Math.min.apply(null,data.datasets[0].data)
    const lmax = Math.max.apply(null,data.datasets[0].data)
    const interval  =(lmax-lmin)/8
    const yScaleLeft = scaleLinear([lmin-interval, lmax+interval], [bottomY, 0+30])

    axisConfig.left = {
      scale: yScaleLeft,
      color: 'black',
      interval: (lmax-lmin)/8,
      x: startX,
      y: 0,
      text: {
        color: '#444',
        x: -5,
        y: -8
      },
      gird: {
        color: '#ddd',
  
        length: data.width-100
      }
    }  
    let yScaleRight

    if(len>1){
      const rmin = Math.min.apply(null,data.datasets[1].data)
      const rmax = Math.max.apply(null,data.datasets[1].data)
      const rinterval  =(rmax-rmin)/8
      yScaleRight= scaleLinear([rmin-rinterval, rmax+rinterval], [bottomY, 0+30])
      axisConfig.right = {
        scale: yScaleRight,
        color: 'black',
        interval: rinterval,
        x: data.width,
        y: 0,
        text: {
          color: '#444',
          x: 0,
          y: -8
        }
        // gird: {
        //   color: '#eee',
    
        //   length: -700
        // }
      }
    }


    Object.keys(axisConfig).forEach(key => {
      if (axisConfig[key]) {
        const axis = new Axis(axisConfig[key], key, data)
        this.add(axis)
      }
    })

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

    data.datasets.forEach((dataset,index) => {
    
      dataset.data.forEach((subData, subIndex) => {
        this.add(new OneBar(index,subData, subIndex, tooltip,index ===0?yScaleLeft:yScaleRight,dataset.color,xScale,data.size,bottomY,xInterval/2,len))
      })
    })
  }
}

function getX(x, index, len, size){
  if(len%2 ===0){
    return x+(index- (len/2)+1)*size*2 - size
  }else{
    return x+(index-Math.floor(len/2))*size*2
  }
}

class OneBar extends Group {
  constructor (index,value, subIndex, tooltip,scale,color,xScale,size,bottomY,interval,len) {
    super()
    const option = Object.assign({}, defaultOption)

    let rect
    if (option.vertical) {
      const height = scale(value) 

   

      rect = new Rect(size, height, {
        fillStyle: color
      })

      rect.x = getX(xScale(subIndex)+interval-size/2,index,len,size)
      rect.y =bottomY
      rect.originY = height
    } else {
    
      const width = scale(value)

      rect = new Rect(width,size,{ fillStyle: color })

      rect.x = 100
      rect.y = 100
      rect.originY = size
    }

    const from = Object.assign({}, {scaleY:0})
    const to = Object.assign({}, {scaleY:1})
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
        tooltip.innerHTML = option.tooltip(data[subIndex])
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

      .wait(subIndex*150+index*150)
      .to(to, 2000, cax.easing.elasticOut)
      .progress(function (object) {
        // console.log(rect)
        // console.log(object)
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
