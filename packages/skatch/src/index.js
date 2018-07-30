import cax from 'cax'
import Ellipse from './shape/ellipse'
import fillRect from './fill-rect'

import pathToShapes from './path/path-to-shapes'

class Skatch extends cax.Group {
  constructor (option) {
    super()
    this.option = Object.assign({
      gap: 5,
      randomRange: 4,
      fillAngle: -45,
      strokeRepeat: 2,
      fillRepeat: 2,
      strokeWidth: 1,
      fillWidth: 1,
      strokeStyle: 'black',
      fillStyle: 'black'
    }, option)
    
  }

  fillCircle(x,y,r,option){
    
    const bmp = new cax.Bitmap(fillRect(r*2,r*2,Object.assign({},this.option,option)  ))
    bmp.x = x-r
    bmp.y = y-r
    const graphics = new cax.Graphics()
    graphics.arc(r,r,r,0,Math.PI*2)
    bmp.clip(graphics)
    this.add(bmp)
    return this
  }

  fillEllipse(x, y, w, h, option){
    
    const bmp = new cax.Bitmap(fillRect(w,h,Object.assign({},this.option,option) ))
    bmp.x = x-w/2
    bmp.y = y-h/2
    const graphics = new cax.Graphics()
   
    const k = 0.5522848
    const ox = (w / 2) * k
    const oy = (h / 2) * k
    const xe = w
    const ye = h
    const xm = w / 2
    const ym = h / 2

    graphics.moveTo(0, ym)
    graphics.bezierCurveTo(0, ym - oy, xm - ox, 0, xm, 0)
    graphics.bezierCurveTo(xm + ox, 0, xe, ym - oy, xe, ym)
    graphics.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye)
    graphics.bezierCurveTo(xm - ox, ye, 0, ym + oy, 0, ym)
    bmp.clip(graphics)
    this.add(bmp)
    return this
  }

  strokeEllipse(x, y, w, h){
    const ellipse = new Ellipse(w, h, {
      strokeStyle: this.option.strokeStyle,
      randomRange: this.option.randomRange,
      strokeRepeat: this.option.strokeRepeat,
      lineWidth: this.option.strokeWidth})
    ellipse.x = x
    ellipse.y = y
    ellipse.originX = w/2
    ellipse.originY = h/2
    //ellipse.rotation = Math.random()*360

    this.add(ellipse)
  }

  strokeCircle(x, y, r){
    const circle = new Ellipse(r*2, r*2, {
      strokeStyle: this.option.strokeStyle,
      randomRange: this.option.randomRange,
      strokeRepeat: this.option.strokeRepeat,
      lineWidth: this.option.strokeWidth})
    circle.x = x
    circle.y = y
    circle.originX = r
    circle.originY = r
    circle.rotation = Math.random()*360

    this.add(circle)
  }

  strokeRect (x,y,w,h) {
    const rect = new cax.Graphics()
    for(let i =0;i< this.option.strokeRepeat;i++){
      rect.beginPath()
      .moveTo.apply(rect,this._shake(x,y))
        .lineTo.apply(rect,this._shake(x, y+h))
        .lineTo.apply(rect,this._shake(x+w, y+h))
        .lineTo.apply(rect,this._shake(x+w, y))
        .lineTo.apply(rect,this._shake(x, y))
        .stroke()
    }
   this.add(rect )
  }

  fillRect (x,y,w,h) {

    const bmp = new cax.Bitmap(fillRect(w,h,this.option ))
    bmp.x = x
    bmp.y = y

    this.add(bmp)
    return this
  }

  _shake(x, y){
    const r = Math.random()*this.option.randomRange
    const a = Math.random()*360*Math.PI/180
    return [x+r*Math.cos(a),y+r*Math.sin(a)]
  }

 

  ellipse(x,y,w,h,option){
    const o = Object.assign({},this.option,option)
    this.fillEllipse(x,y,w,h,o)
    this.strokeEllipse(x,y,w,h,o)
  }

  circle(x,y,r,option){
    const o = Object.assign({},this.option,option)
    this.fillCircle(x,y, r,o)
    this.strokeCircle(x,y, r,o)
  }

  rect (x,y,w,h,option) {
        
    const o = Object.assign({},this.option,option)
    this.fillRect(x, y, w, h,o)
    this.strokeRect(x, y, w, h,o)

    return this
  }

  strokePath(path){
    const shapes = this._shakeShapes(pathToShapes(path))
    shapes.forEach(shape=>{
      const g = new cax.Graphics()
      g.beginPath().moveTo(shape[0][0],shape[0][1])
      shape.forEach(curve=>{
        g.bezierCurveTo(curve[2],curve[3],curve[4],curve[5],curve[6],curve[7])
      })
      g.stroke()
      this.add(g)
    })
   
  }

  _shakeShapes(shapes) {
    const ns = []
    shapes.forEach(shape => {
      const s = []
      const p1 = this._shake(shape[0][0], shape[0][1], this.option.randomRange)
      shape.forEach((curve, index) => {
        let c = null
        if (Math.random() < this.option.filter) {
          const p2 = this._shake(curve[2], curve[3], this.option.randomRange)
          const p3 = this._shake(curve[4], curve[5], this.option.randomRange)
          const p4 = this._shake(curve[6], curve[7], this.option.randomRange)
         
          c = [p1[0], p1[1], p2[0], p2[1], p3[0], p3[1], p4[0], p4[1]]  
          s.push(c)
        }
      })
      ns.push(s)
    })

    return ns
   
  }

  path(path,option){

    const o = Object.assign({},this.option,option)
    this.fillPath(path,o)
    this.strokePath(path,o)

    return this
  }

  fillPath(path, option){

    const shapes = pathToShapes(path)
    const box = this._getShapesBox(shapes) 
    const bmp = new cax.Bitmap(fillRect(box[2],box[3],Object.assign({},this.option,option) ))
    bmp.x = box[0]
    bmp.y = box[1]
    const g = new cax.Graphics()
   
    shapes.forEach(shape=>{
      g.moveTo(shape[0][0],shape[0][1])
      shape.forEach(curve=>{
        g.bezierCurveTo(curve[2],curve[3],curve[4],curve[5],curve[6],curve[7])
      })
    })
    g.x = box[0]*-1
    g.y = box[1]*-1
    bmp.clip(g)
    this.add(bmp)
    return this
  }

  _getShapesBox(shapes){
    
const curve = shapes[0][0]
    let minX = curve[0],
    minY =  curve[1],
    maxX =  curve[0],
    maxY =   curve[1]

    shapes.forEach(shape => {
     
      shape.forEach((curve, index) => {
        minX = Math.min(minX,curve[2],curve[4],curve[6])
        maxX = Math.max(maxX,curve[2],curve[4],curve[6])
        minY = Math.min(minY,curve[3],curve[5],curve[7])
        maxY = Math.max(maxY,curve[3],curve[5],curve[7])
      })
    })


  return [minX,minY,maxX-minX,maxY-minY]
  }


  clear () {
    this.empty()
    return this
  }

//   setLineDash () {
//     this.cmds.push(['setLineDash', arguments])
//     return this
//   }


//   lineCap () {
//     this.cmds.push(['lineCap', arguments])
//     return this
//   }

//   lineDashOffset () {
//     this.cmds.push(['lineDashOffset', arguments])
//     return this
//   }

//   lineJoin () {
//     this.cmds.push(['lineJoin', arguments])
//     return this
//   }

//   miterLimit () {
//     this.cmds.push(['miterLimit', arguments])
//     return this
//   }

}

export default Skatch
