import cax from 'cax'
import Skatch from '../../src'
import helvetica from './helvetica'

const stage = new cax.Stage(500, 400, '#canvasCtn')

cax.tick(() => {
  stage.update()
})

render()

document.querySelector('#refreshBtn').addEventListener('click', () => {
  stage.empty()
  render()
})

function render () {
  const option = {
    gap: 5,
    randomRange: 2,
    fillAngle: -45,
    strokeRepeat: 12,
    curveRange: 10,
    fillRepeat: 4,
    strokeWidth: 1,
    fillWidth: 1,
    strokeStyle: 'black',
    fillStyle: '#6aa8df',
    filter: 1
  }

  const group = new cax.Group()
  const s = new Skatch(option)
  s.path(helvetica.s)

  const k = new Skatch(option)
  k.path(helvetica.k)
  k.x = 80

  const a = new Skatch(option)
  a.path(helvetica.a)
  a.x = 80 * 2

  const t = new Skatch(option)
  t.path(helvetica.t)
  t.x = 80 * 3

  const c = new Skatch(option)
  c.path(helvetica.c)
  c.x = 295

  const h = new Skatch(option)
  h.path(helvetica.h)
  h.x = 380

  group.add(s, k, a, t, c, h)
  group.x = 20

  group.y = 100
  stage.add(group)
}
