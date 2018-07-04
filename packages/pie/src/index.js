import cax from 'cax'

const { Graphics, To, Group, Text } = cax



const defaultOption = {
  totalAngle: 0,
  begin: Math.random() * Math.PI * 2
}

class Pie extends Group {
  constructor(data, option) {
    super()

    this.data = data

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

  
    const textGroup = new Group()
    option = Object.assign({}, defaultOption, option)
    this.option = option
    let totalValue = 0
    data.forEach((item) => {
      totalValue += option.processing(item)
    })

   

    this.sectorGroup = new cax.Group()
  
   
    this.add(this.sectorGroup)
    this.add(textGroup)

    this.totalValue = totalValue
    this.textGroup = textGroup
    
  }

  show(){
    this._init()
    this._to(0, Math.PI*2, 1000,cax.easing.bounceOut,true)
  }

  hide(){
    this._to( Math.PI*2, 0, 600,null,false)
  }

  _init(){
    
    const option = this.option
    const data = this.data
    const { x, y, r } = option
    let current = option.begin
    
    let totalValue = 0
    data.forEach((item) => {
      totalValue += option.processing(item)
    })

    data.forEach((item, index) => {
      const sector = new Graphics()
      sector.value = option.processing(item)
      sector
        .beginPath()
        .moveTo(0, 0)
        .arc(0, 0, r, current, current += option.totalAngle * option.processing(item) / totalValue)
        .closePath()
        .fillStyle(option.color(index))
        .fill()
        .strokeStyle(option.circleColor)
        .lineWidth(2)
        .stroke()
      sector.x = x
      sector.y = y
      this.sectorGroup.add(sector)


      if (option.tooltip) {
        sector.hover(function (evt) {
          bounceIn(sector, 1, 1.1)
          tooltip.style.left = (evt.pureEvent.pageX + 5) + 'px'
          tooltip.style.top = (evt.pureEvent.pageY + 5) + 'px'
          tooltip.innerHTML = option.tooltip(data[index])
          tooltip.style.display = 'block'

        }, function (evt) {
          bounceOut(sector, 1.1, 1)
          tooltip.style.display = 'none'

        }, function (evt) {
          tooltip.style.left = (evt.pureEvent.pageX + 5) + 'px'
          tooltip.style.top = (evt.pureEvent.pageY + 5) + 'px'
        })
      }
    })

  }

  _to(from, to,duration,easing, show){

    const option = this.option
    const sectorGroup = this.sectorGroup
    const { x, y, r } = option
    const totalValue = this.totalValue
    const data = this.data
    let current = option.begin

    if(!show){
      fadeOut(this.textGroup,()=>{
        this.textGroup.empty()
      })
    }

    To.get({totalAngle:from})
      .to({ totalAngle: to}, duration, easing)
      .progress((object) => {

        current = option.begin
        sectorGroup.children.forEach((item, index) => {
          item
            .clear()
            .beginPath()
            .moveTo(0, 0)
            .arc(0, 0, r, current, current += object.totalAngle * option.processing(item) / totalValue)
            .closePath()
            .fillStyle(option.color(index))
            .fill()
            .strokeStyle(option.circleColor)
            .lineWidth(2)
            .stroke()
            .closePath()
        })
      })
      .end((object) => {
        current = option.begin
        let arr = []
        sectorGroup.children.forEach((item, index) => {
          let center = current + object.totalAngle * option.processing(item) / totalValue / 2
          current += object.totalAngle * option.processing(item) / totalValue
          arr.push(center)
        })
        if(show){

       
          this.textGroup.alpha = 0
          arr.forEach((angle, index) => {
            angle %= Math.PI * 2
            let centerX = x + r * Math.cos(angle)
            let centerY = y + r * Math.sin(angle)

            const currentColor = option.textColor(index)
            const label = option.label(data[index])
            const text = new Text(label, { color: currentColor, font: option.font })

            const g = new Graphics()

            if (angle >= 0 && angle < Math.PI / 2) {
              g.beginPath().moveTo(centerX, centerY)
                .lineTo(centerX + 20 * 0.7, centerY + 20 * 0.5)
                .lineTo(centerX + 20 * 0.7 + 20, centerY + 20 * 0.5)
                .strokeStyle(currentColor)
                .stroke()

              text.x = centerX + 20 * 0.7 + 20 + 3
              text.y = centerY + 20 * 0.5 + option.textOffsetY
            } else if (angle >= Math.PI / 2 && angle < Math.PI) {
              g.beginPath().moveTo(centerX, centerY)
                .lineTo(centerX - 20 * 0.7, centerY + 20 * 0.5)
                .lineTo(centerX - 20 * 0.7 - 20, centerY + 20 * 0.5)
                .strokeStyle(currentColor)
                .stroke()

              text.x = centerX - 20 * 0.7 - 20 - text.getWidth() - 3
              text.y = centerY + 20 * 0.5 + option.textOffsetY
            } else if (angle >= Math.PI && angle < Math.PI + Math.PI / 2) {
              g.beginPath().moveTo(centerX, centerY)
                .lineTo(centerX - 20 * 0.7, centerY - 20 * 0.5)
                .lineTo(centerX - 20 * 0.7 - 20, centerY - 20 * 0.5)
                .strokeStyle(currentColor)
                .stroke()

              text.x = centerX - 20 * 0.7 - 20 - text.getWidth() - 3
              text.y = centerY - 20 * 0.5 + option.textOffsetY
            } else if (angle >= Math.PI + Math.PI / 2 && angle <= Math.PI * 2) {
              g.beginPath().moveTo(centerX, centerY)
                .lineTo(centerX + 20 * 0.7, centerY - 20 * 0.5)
                .lineTo(centerX + 20 * 0.7 + 20, centerY - 20 * 0.5)
                .strokeStyle(currentColor)
                .stroke()

              text.x = centerX + 20 * 0.7 + 20 + 3
              text.y = centerY - 20 * 0.5 + option.textOffsetY
            }

            this.textGroup.add(g, text)
          })
          fadeIn(this.textGroup)
        }else{
          
          this.sectorGroup.empty()
        }
        
      })
      .start()

  }


}


function fadeIn(obj) {
  obj.alpha = 0
  To.get(obj).to({ alpha: 1 }, 600).start()
}


function fadeOut(obj, callback) {
  obj.alpha = 1
  To.get(obj).to({ alpha: 0 }, 600).end(function(){callback()}).start()
}

function bounceIn(obj, from, to) {
  from = from || 0
  obj.from = from
  To.get(obj).to({ scaleX: to || 1, scaleY: to || 1 }, 300, cax.easing.bounceOut).start()
}

function bounceOut(obj, from, to) {
  from = from || 1
  obj.from = from
  To.get(obj).to({ scaleX: to || 0, scaleY: to || 0 }, 300, cax.easing.bounceOut).start()
}



export default Pie



