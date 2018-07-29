import cax from 'cax'
import Line from '../../src'
import { scaleLinear } from '../../../common/scale'

const stage = new cax.Stage(800, 500, '#canvasCtn')

const xScale = scaleLinear([0, 7], [0, 700])
const yScaleLeft = scaleLinear([-30, 30], [400, 0])
const yScaleRight = scaleLinear([500, 1000], [400, 0])

const lines = [{
  // age 30 对应 200像素高
  scale: yScaleLeft,
  width: 30,
  interval: 100,
  x: 0,
  y: 50,
  projectionY: 400,
  color: '#FF6484',
  processing: (item) => { return item.age }, // 数据预处理，提取影响形状的报表
  // smooth: true,
  tooltip: (item) => {
    return item.name + '<br/>' + item.age
  },

  show: {// 过渡动画
    // from: { y: -510 },//起始点
    // to: { y: 0 },//终点
    from: { scaleY: 0 }, // 起始点
    to: { scaleY: 1 }, // 终点
    duration: 2000, // 动画的时间
    easing: cax.easing.elasticOut, // 缓动函数
    delay: (i) => { return i * 300 }// 每个柱子的动画依次开始
  },

  smooth: true,
  hide: {
    from: { scaleY: 1 }, // 起始点
    to: { scaleY: 0 }, // 终点
    duration: 1000// 动画的时间
    // delay: (i) => { return i * 300 }//每个柱子的动画依次开始
  }
},
{// rects代表拆分多个rect，下面是相关的配置
  // age 30 对应 200像素高
  scale: yScaleRight,
  width: 30,
  interval: 100,
  x: 0,
  y: 50,
  smooth: true,
  processing: (item) => { return item.exp }, // 数据预处理，提取影响形状的报表
  color: (index) => { // 每个柱子的颜色
    return ['#4BC0C0', '#FF6485', '#FFCE5C', '#ADACB9', '#A37AC1'][index]
  },
  tooltip: (item) => {
    return item.name + '<br/>' + item.age
  },
  projectionY: 400,
  color: '#4BC0C0',
  show: {// 过渡动画
    from: { scaleY: 0 }, // 起始点
    to: { scaleY: 1 }, // 终点
    duration: 2000, // 动画的时间
    easing: cax.easing.elasticOut, // 缓动函数
    delay: (i) => { return i * 300 + 150 }// 每个柱子的动画依次开始
  },
  hide: {
    from: { scaleY: 1 }, // 起始点
    to: { scaleY: 0 }, // 终点
    duration: 1000// 动画的时间
    // delay: (i) => { return i * 300+ 150 }//每个柱子的动画依次开始
  }
}
]

const axisConfig = {
  bottom: {
    interval: 1,
    from: 0,
    scale:xScale,
    x: 30,
    y: 450,
    to: 7,
    color: 'black',
    text: {
      color: '#444',
      value: (item) => {
        return item.name
      },
      x: 0,
      y: 10,
      font: '10px Verdana',
      range: [0, 7],
      rotation: 0
    },
    gird: {
      color: '#ddd',

      length: 400
    }
  },
  left: {
    color: 'black',
    interval: 6,
    scale:yScaleLeft,

    x: 30,
    y: 50,
    text: {
      color: '#444',
      x: 0,
      y: -10
    },
    gird: {
      color: '#ddd',

      length: 700
    }
  },
  right: {
    color: 'black',
    interval: 100,
    scale:yScaleRight,

    x: 730,
    y: 50,
    text: {
      color: '#444',
      x: 0,
      y: -10
    }
  }
}

function random () {
  stage.empty()
  const data = [ // 数据
    { name: 'dntzhang', age: cax.util.randomInt(-20, 20), exp: cax.util.randomInt(500, 1000) },
    { name: 'Canvas', age: cax.util.randomInt(-20, 20), exp: cax.util.randomInt(500, 1000) },
    { name: 'Cax', age: cax.util.randomInt(-20, 20), exp: cax.util.randomInt(500, 1000) },
    { name: 'Tencent', age: cax.util.randomInt(-20, 20), exp: cax.util.randomInt(500, 1000) },
    { name: 'SVG', age: cax.util.randomInt(-20, 20), exp: cax.util.randomInt(500, 1000) },
    { name: 'WebGL', age: cax.util.randomInt(-20, 20), exp: cax.util.randomInt(500, 1000) },
    { name: 'Wechart', age: cax.util.randomInt(-20, 20), exp: cax.util.randomInt(500, 1000) },
    { name: 'Threejs', age: cax.util.randomInt(-20, 20), exp: cax.util.randomInt(500, 1000) }
  ]
  const line = new Line(data, lines, axisConfig)
  stage.add(line)
}

random()

document.querySelector('#randomBtn').addEventListener('click', random)

cax.tick(stage.update.bind(stage))
