import cax from 'cax'

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
      storkeStyle: 'black',
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


  strokeRect () {
    this.cmds.push(['strokeRect', arguments])
    return this
  }

  fillRect () {
    this.cmds.push(['fillRect', arguments])
    return this
  }

  _shake(x, y){
    const r = Math.random()*this.option.randomRange
    const a = Math.random()*360*Math.PI/180
    return [x+r*Math.cos(a),y+r*Math.sin(a)]
  }

  stroke () {
    this.strokeGroup.children.forEach(g=>{
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
