import cax from 'cax'
import Ellipse from './shape/ellipse'
import fillRect from './fill-rect'

const assMap = {
  fillStyle: true,
  strokeStyle: true,
  lineWidth: true,
  lineCap: true,
  lineDashOffset: true,
  lineJoin: true,
  miterLimit: true
}

class Sketch extends cax.Group {
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
    this.cmds = []
    this.currentGradient = null

    this.strokeGroup = new cax.Group()
    for(let i =0;i< this.option.strokeRepeat;i++){
      this.strokeGroup.add(new cax.Graphics())
    }
   
    this.add(this.strokeGroup)
  }

  fillCircle(x,y,r){
    
    const bmp = new cax.Bitmap(fillRect(r*2,r*2,this.option ))
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

  stroke () {
    
    this.strokeGroup.children.forEach(g=>{
      g.strokeStyle(this.option.strokeStyle)
      g.lineWidth(this.option.strokeWidth)
      g.stroke()
    })
    return this
  }

  beginPath () {
    this.strokeGroup.children.forEach(g=>{
      g.beginPath()
    })
    return this
  }
  
  moveTo (x, y) {
    this.strokeGroup.children.forEach(g=>{
      g.moveTo.apply(g,this._shake(x,y))
    })
    return this
  }

  lineTo (x, y) {
    this.strokeGroup.children.forEach(g=>{
      g.lineTo.apply(g,this._shake(x,y))
    })
    return this
  }

  clearRect () {
    this.cmds.push(['clearRect', arguments])
    return this
  }

  rect () {
    this.cmds.push(['rect', arguments])
    return this
  }

  clear () {
    this.cmds.length = 0
    return this
  }

  setLineDash () {
    this.cmds.push(['setLineDash', arguments])
    return this
  }



  arc () {
    this.cmds.push(['arc', arguments])
    return this
  }

  closePath () {
    this.cmds.push(['closePath', arguments])
    return this
  }

  fillStyle () {
    this.cmds.push(['fillStyle', arguments])
    return this
  }

  fill () {
    this.cmds.push(['fill', arguments])
    return this
  }

  strokeStyle () {
    this.cmds.push(['strokeStyle', arguments])
    return this
  }

  lineWidth () {
    this.cmds.push(['lineWidth', arguments])
    return this
  }

  lineCap () {
    this.cmds.push(['lineCap', arguments])
    return this
  }

  lineDashOffset () {
    this.cmds.push(['lineDashOffset', arguments])
    return this
  }

  lineJoin () {
    this.cmds.push(['lineJoin', arguments])
    return this
  }

  miterLimit () {
    this.cmds.push(['miterLimit', arguments])
    return this
  }


  bezierCurveTo () {
    this.cmds.push(['bezierCurveTo', arguments])
    return this
  }

  quadraticCurveTo () {
    this.cmds.push(['quadraticCurveTo', arguments])
    return this
  }

  createRadialGradient () {
    this.cmds.push(['createRadialGradient', arguments])
    return this
  }

  createLinearGradient () {
    this.cmds.push(['createLinearGradient', arguments])
    return this
  }

  addColorStop () {
    this.cmds.push(['addColorStop', arguments])
    return this
  }

  fillGradient () {
    this.cmds.push(['fillGradient'])
    return this
  }

  arcTo () {
    this.cmds.push(['arcTo', arguments])
    return this
  }

  render (ctx) {
    this.cmds.forEach(cmd => {
      const methodName = cmd[0]
      if (assMap[methodName]) {
        ctx[methodName] = cmd[1][0]
      } else if (methodName === 'addColorStop') {
        this.currentGradient && this.currentGradient.addColorStop(cmd[1][0], cmd[1][1])
      } else if (methodName === 'fillGradient') {
        ctx.fillStyle = this.currentGradient
      } else {
        let result = ctx[methodName].apply(ctx, Array.prototype.slice.call(cmd[1]))
        if (methodName === 'createRadialGradient' || methodName === 'createLinearGradient') {
          this.currentGradient = result
        }
      }
    })
  }
}

export default Sketch
