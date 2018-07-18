import cax from 'cax'
import china from './china'
import Map from '../../src'

const stage = new cax.Stage(600, 500, 'body')

const map = new Map(china, {
  fillStyle: '#97D5D8',
  strokeStyle: '#888',
  overFillStyle: '#EEF824',
  tooltip: (key) => {
    return china.names[key]
  }
})
map.x = 20
map.y = 15
stage.add(map)

if (window.innerWidth <= 500) {
  stage.scaleEventPoint(320 / 600, 320 / 600)
}
cax.tick(stage.update.bind(stage))
