
import cax from 'cax'
import { getControlPoint } from './get-control-point'
import { scaleLinear } from '../../common/scale'
import Axis from '../../axis/src'

const { TWEEN, Graphics, Circle, Group, Stage, To } = cax

export default class Line extends Group {
  constructor (data) {
    super()

    
    //根据 data 计算标尺
    const len = data.datasets.length
    const axisConfig = {}

    let twoAxis = false
    data.datasets.every(ds=>{
      console.log(ds)
      if(ds.right){
        console.log(2)
        twoAxis = ds.right
        return false
      }
      return true
    })
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

    let lmin = data.datasets[0].data[0]
    let lmax = lmin
    if(!twoAxis){
      data.datasets.forEach(dataset=>{
        lmin =Math.min(lmin, Math.min.apply(null,dataset.data))
        lmax =Math.max(lmax, Math.max.apply(null,dataset.data))
      })

    }else{
       lmin = Math.min.apply(null,data.datasets[0].data)
       lmax = Math.max.apply(null,data.datasets[0].data)
    }

   
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

    if(twoAxis){
      console.log(1)
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

      this.add(new OneLine(dataset,yScaleLeft,xInterval,startX,yScaleRight))
    })
  
  }
}


class OneLine extends Group {
  constructor (dataset,yScaleLeft,xInterval,startX,yScaleRight) {
    super()

    const eps = []
    dataset.data.forEach((value,index)=>{
      eps.push({x:xInterval*index+startX+xInterval/2,y:(dataset.right)?yScaleRight(value):yScaleLeft(value),value})
    })
   
    this.add(createLine(eps,dataset.color))
    this.add(createCircles(eps,dataset.color))
  }
 
}

function fadeIn (obj) {
  obj.alpha = 0
  To.get(obj).to({ alpha: 1 }, 600).start()
}

function createLine(eps, color){
  const graphics = new cax.Graphics()
  graphics.beginPath()
  eps.forEach((ep,index)=>{
   
    graphics.strokeStyle(color)[index===0?'moveTo':'lineTo'](ep.x,ep.y).stroke()
  })

  return graphics
}

function createCircles (eps, color) {
  const group = new Group()
  eps.forEach((ep, index) => {
    const circle = new Circle(3, {lineWidth:2, fillStyle: 'white',strokeStyle:color })
    
    circle.x = ep.x
    circle.y = ep.y
    const text = new cax.Text(ep.value, {color, font: '14px Arial'})
    text.textAlign = 'center'
    text.x = ep.x 
    text.y = ep.y + 10
    group.add(text)
    group.add(circle)
  })
  //group.alpha = 0
  // group.x = option.x
  // group.y = option.y
  return group
}

function walkPath (g, path, cps) {
  g.moveTo(path[0].x, path[0].y)
  g.bezierCurveTo(path[0].x, path[0].y, cps[0].x, cps[0].y, path[1].x, path[1].y)

  const len = path.length
  let j = 1, count = len - 2
  for (; j < count; j++) {
    g.bezierCurveTo(cps[j * 2 - 1].x, cps[j * 2 - 1].y, cps[j * 2].x, cps[j * 2].y, path[j + 1].x, path[j + 1].y)
  }

  const cpLen = cps.length
  g.bezierCurveTo(cps[cpLen - 1].x, cps[cpLen - 1].y, path[len - 1].x, path[len - 1].y, path[len - 1].x, path[len - 1].y)
}

export function hideLine (group, options, callback) {
  let cpt = false

  group.children.forEach((subGroup, index) => {
    const option = options[index]
    let compLen = 0
    const from = Object.assign({}, option.hide.from)
    const to = Object.assign({}, option.hide.to)

    const total = subGroup.children.length
    subGroup.children.forEach((rect, rectIndex) => {
      new TWEEN.Tween(from)
        .to(to, option.hide.duration)
        .delay(typeof option.hide.delay === 'function'
          ? option.hide.delay(rectIndex) : (option.hide.delay || 0))
        .easing(option.hide.easing || TWEEN.Easing.Linear.None)
        .onUpdate((object) => {
          Object.assign(rect, object)
        })
        .onComplete(() => {
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

function update (projectionY, path, g, pg, option) {
  const cps = getControlPoint(path)

  g.clear().beginPath().strokeStyle(option.color)

  walkPath(g, path, cps)
  g.stroke()

  pg.clear().beginPath().fillStyle(option.color)

  walkPath(pg, path, cps)

  pg.lineTo(path[path.length - 1].x, projectionY)
  pg.lineTo(path[0].x, projectionY)
  pg.closePath()
  pg.fill()
}
