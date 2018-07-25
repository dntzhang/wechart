import cax from 'cax'
import Bar from '../../src/index'
import { scaleLinear } from '../../../common/scale'

const stage = new cax.Stage(800, 520, 'body')

const data = [ // 数据
  { name: 'JS', count: 211 },
  { name: 'C#', count: 183  },
  { name: 'C++', count: 157 },
  { name: 'CSS', count: 133},
  { name: 'HTML', count: 111 },
  { name: 'Java', count: 91 },
  { name: 'F#', count: 73 },
  { name: 'Go', count: 57 },
  { name: 'PHP', count: 43 },
  { name: 'Ruby', count: 31 },
  { name: 'Python', count: 21 },
  { name: 'Swift', count: 13 },
  { name: 'R', count: 7 },
  { name: 'C', count: 3 },
  { name: 'Perl', count: 1 }
]
const xScale = scaleLinear([0, 7], [0, 700])
const yScaleLeft = scaleLinear([0, 30], [0, 700])

const scale = scaleLinear([0, 230], [0, 700])

const config = [{// rects代表拆分多个rect，下面是相关的配置
  vertical: false,
  scale: scale,
  size: 10,
  interval: 26.5,
  x: 31,
  y: 70,
  processing: (item) => { return item.count }, // 数据预处理，提取影响形状的报表
  color: (index) => { // 每个柱子的颜色
    return '#FF6485'
  },
  tooltip: (item) => {
    return item.name + '<br/>' + item.count
  },
  transition: {
    duration: 500// 动画的时间
  },
  show: {// 过渡动画
    // from: { y: -510 },//起始点
    // to: { y: 0 },//终点
    from: { scaleX: 0 }, // 起始点
    to: { scaleX: 1 }, // 终点
    duration: 1000, // 动画的时间
    easing: cax.easing.elasticOut, // 缓动函数
    delay: (i) => { return i * 100 }// 每个柱子的动画依次开始
  },
  hide: {
    from: { scaleX: 1 }, // 起始点
    to: { scaleX: 0 }, // 终点
    duration: 1000// 动画的时间
    // delay: (i) => { return i * 300 }//每个柱子的动画依次开始
  }
}]

const axisConfig = {
  left: {
    scale: scaleLinear([0, 15], [0, 400]),
    interval: 1,
    x: 30,
    y: 50,
    color: 'black',
    text: {
      color: '#444',
      value: (index) => {
        return data[index].name
      },
      x: 0,
      y: 7,
      font: '12px Verdana',
      range: [0, 14],
     // rotation: -30
    },
    gird: {
      color: '#ddd',

      length: 700
    }
  },
  top: {
    scale: scale,
    color: 'black',
    interval: 8,
    x: 30,
    y: 50,
    text: {
      color: '#444',
      x: -5,
      y: -15
    },
    gird: {
      color: '#ddd',

      length: -400
    }
  }
}

const bar = new Bar(data, config, axisConfig)
bar.x = 20
stage.add(bar)

cax.tick(stage.update.bind(stage))
