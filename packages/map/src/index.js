import cax from 'cax'

class Map extends cax.Group {
  constructor(data, option) {
      super()
      const tooltip = document.createElement('div')
      document.body.appendChild(tooltip)
      if(option.tooltipClass){
        tooltip.className = option.tooltipClass
      }else{
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
      }
      
      this.tooltip = tooltip


    

      const shapes = data.shapes
      Object.keys(shapes).forEach(key => {
          const p = new cax.Path(shapes[key], option)
          p.hover((evt)=>{
            evt.target.option.fillStyle = option.overFillStyle
            evt.target.option.strokeStyle = option.overStrokeStyle

            tooltip.style.left = (evt.pureEvent.pageX + 5) + 'px'
            tooltip.style.top = (evt.pureEvent.pageY + 5) + 'px'
            tooltip.innerHTML = option.tooltip(key)
            tooltip.style.display = 'block'
          },(evt)=>{
            evt.target.option.fillStyle = option.fillStyle
            evt.target.option.strokeStyle = option.strokeStyle

            tooltip.style.display = 'none'
          },(evt)=>{
            
            tooltip.style.left = (evt.pureEvent.pageX + 5) + 'px'
            tooltip.style.top = (evt.pureEvent.pageY + 5) + 'px'
          })
          this.add(p)
      })
  }
}

export default Map