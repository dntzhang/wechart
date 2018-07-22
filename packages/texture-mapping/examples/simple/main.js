
import cax from 'cax'
import Loader from '../../../common/loader'

import { slope, getValue } from '../../../common/bezier'

const stage = new cax.Stage(440, 240, '#canvasCtn')

const points = [60, 100, 160, 0, 260, 200, 360, 100]

const loader = new Loader({
  res: [{ id: 'a1', src: '../../asset/bg.png' }],
  complete: () => {
    render()

    stage.on('click',(evt)=>{
      stage.empty()
      if(evt.stageX>220){

        points[4] = evt.stageX
        points[5] = evt.stageY
      }else{

        points[2] = evt.stageX
        points[3] = evt.stageY
      }
      render()
    })
  }
})

function render(){

  const dw = 10
  const img = loader.get('a1')
  const dt = 0.03

  const g = new cax.Graphics()
  g.beginPath()

  for (let i = 0; i < 1; i += dt) {

    const p = getValue(points, i)

    const angle = slope(points, i, 0.01) * 180 / Math.PI


    g[i === 0 ? 'moveTo' : 'lineTo'](p.x, p.y)

    const bitmap = new cax.Bitmap(img)

    let offsetX = dw * (i / dt)
    if (offsetX + dw > img.width) {
      if (img.width - offsetX % img.width < dw) {
        offsetX = 0
      } else {

        offsetX = Math.ceil(offsetX % img.width / dw) * dw
      }
    }
    bitmap.rect = [offsetX, 0, dw, img.height]
    bitmap.x = p.x
    bitmap.y = p.y

    //skew(half of rotation)导致宽度不一致
    bitmap.skewY = angle
    bitmap.scaleX = (getValue(points, i + dt).x - p.x) / (dw * Math.cos(angle * Math.PI / 180)) + 0.1
    stage.add(bitmap)

   
  }



  g.stroke()

  stage.add(g)

  stage.update()
}

loader.start()