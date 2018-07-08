import tigerData from './tiger'

import cax from 'cax'

const stage = new cax.Stage(600, 600, 'body')

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
