import cax from 'cax'

import Player from './player'

const stage = new cax.Stage(520, 377, '#canvasCtn')

const bg = new cax.Bitmap('./track.jpg')
stage.add(bg)

const shape = [
  // 直线用控制点均分贝赛尔曲线防止速度不均匀
  [123, 91, 211, 91, 300, 91, 389, 91],
  [389, 91, 430, 90, 473, 145, 474, 213],
  [474, 213, 475, 278, 420, 340, 346, 334],
  [346, 334, 257, 316, 224, 229, 158, 229],
  [158, 229, 82, 250, 51, 180, 59, 152],
  [59, 152, 60, 129, 82, 96, 123, 91]
]

const player = new Player(shape)

cax.tick(() => {
  stage.update()
  player.update()
})
stage.add(player)

let tag = true

document.querySelector('#tgBtn').addEventListener('click', () => {
  if (tag) {
    player.speed = 0
  } else {
    player.speed = 5
  }
  tag = !tag
})

// const g = new cax.Graphics()
// g.moveTo(123, 91)
// //均匀分布控制点，防止速度前快后慢，因为 getPosition是根据路程求 t
// .bezierCurveTo(123, 91,389,91,389,91)
// .bezierCurveTo(430, 90,473,145,474 ,213)

// .bezierCurveTo(475,278,420,340,346,334)
// .bezierCurveTo(257,316,224,229,158,229)
// .bezierCurveTo(82,250,51,180,59,152)

// .bezierCurveTo(60,129,82,96,123, 91)

// .stroke()
// stage.add(g)
