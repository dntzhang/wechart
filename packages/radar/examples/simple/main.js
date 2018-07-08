import cax from 'cax'
import Radar from '../../src'

const stage = new cax.Stage(1080, 540, 'body')

const bitmap = new cax.Bitmap('./bg.png')

const radar = new Radar({
  output: { value: cax.util.randomInt(30, 100), describe: '输出' },
  live: { value: cax.util.randomInt(30, 100), describe: '生存' },
  team: { value: cax.util.randomInt(30, 100), describe: '团战' },
  growth: { value: cax.util.randomInt(30, 100), describe: '发育' },
  kda: { value: cax.util.randomInt(30, 100), describe: 'KDA' }
}, {
  x: 820,
  y: 280,
  r: 60,
  startR: 20,
  count: 3,
  netColor: '#1F3F57',
  fillColor: '#78D5FD',
  dotColor: '#78D5FD',
  dotR: 3,
  mouseover: (evt, item, value, target) => {
  },
  mouseout: () => {
  },
  show: {
    duration: 2000, // 动画的时间
    easing: cax.easing.elasticOut, // 缓动函数
    delay: (i) => { return i * 100 }// 每个柱子的动画依次开始
  }
})

stage.add(bitmap, radar)

cax.tick(stage.update.bind(stage))
