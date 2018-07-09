import tigerData from './tiger'

import cax from 'cax'

const stage = new cax.Stage(600, 600, '#canvasCtn')

const tiger = new cax.Group()
tigerData.forEach(item => {
  const p = new cax.Path(item.path, {
    strokeStyle: item.stroke,
    fillStyle: item.fill,
    lineWidth: item['stroke-width']
  })

  tiger.add(p)
})
tiger.x = 200
tiger.y = 200
tiger.cursor = 'move'
tiger.on('drag', (evt) => {
  evt.target.x += evt.dx
  evt.target.y += evt.dy
})
stage.add(tiger)

cax.tick(stage.update.bind(stage))

if (window.innerWidth <= 500) {
  stage.scaleEventPoint(320 / 600, 320 / 600)
}


document.querySelector('#subScaleBtn').addEventListener('click',()=>{
  tiger.scaleX -= 0.1
  tiger.scaleY -= 0.1
})

document.querySelector('#addScaleBtn').addEventListener('click',()=>{
  tiger.scaleX += 0.1
  tiger.scaleY += 0.1
})