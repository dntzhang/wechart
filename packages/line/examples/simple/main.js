import cax from 'cax'
import Line from '../../src'

const stage = new cax.Stage(800, 600, '#canvasCtn')

const lines = [{
  // age 30 对应 200像素高
  mapping: [30, 200],
  width: 30,
  interval: 100,
  x: 0,
  y: 250,
  projectionY: 200,
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
  mapping: [1200, 200],
  width: 30,
  interval: 100,
  x: 0,
  y: 250,
  smooth: true,
  processing: (item) => { return item.exp }, // 数据预处理，提取影响形状的报表
  color: (index) => { // 每个柱子的颜色
    return ['#4BC0C0', '#FF6485', '#FFCE5C', '#ADACB9', '#A37AC1'][index]
  },
  tooltip: (item) => {
    return item.name + '<br/>' + item.age
  },
  projectionY: 200,
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

function random () {
  stage.empty()
  const data = [ // 数据
    { name: 'dntzhang', age: cax.util.randomInt(-20, 20), exp: cax.util.randomInt(500, 100) },
    { name: 'Canvas', age: cax.util.randomInt(-20, 20), exp: cax.util.randomInt(500, 100) },
    { name: 'Cax', age: cax.util.randomInt(-20, 20), exp: cax.util.randomInt(500, 100) },
    { name: 'Tencent', age: cax.util.randomInt(-20, 20), exp: cax.util.randomInt(500, 100) },
    { name: 'SVG', age: cax.util.randomInt(-20, 20), exp: cax.util.randomInt(500, 100) },
    { name: 'WebGL', age: cax.util.randomInt(-20, 20), exp: cax.util.randomInt(500, 100) },
    { name: 'WebGL', age: cax.util.randomInt(-20, 20), exp: cax.util.randomInt(500, 100) },
    { name: 'WebGL', age: cax.util.randomInt(-20, 20), exp: cax.util.randomInt(500, 100) }
  ]

  stage.add(new Line(data, lines))
}

random()

document.querySelector('#randomBtn').addEventListener('click', random)

cax.tick(stage.update.bind(stage))
