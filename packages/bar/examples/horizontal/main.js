import cax from 'cax'
import Bar from '../../src/index'
import { scaleLinear } from '../../../common/scale'

const stage = new cax.Stage(800, 520, 'body')

const data = [ // 数据
  { name: 'dntzhang', age: cax.util.randomInt(10, 20), exp: cax.util.randomInt(500, 1000) },
  { name: 'Canvas', age: cax.util.randomInt(10, 20), exp: cax.util.randomInt(500, 1000) },
  { name: 'Wechart', age: cax.util.randomInt(10, 20), exp: cax.util.randomInt(500, 1000) },
  { name: 'Tencent', age: cax.util.randomInt(10, 20), exp: cax.util.randomInt(500, 1000) },
  { name: 'Cax', age: cax.util.randomInt(10, 20), exp: cax.util.randomInt(500, 1000) }
]
const xScale =  scaleLinear([0, 7], [0, 700])
const yScaleLeft = scaleLinear([0, 30], [0, 700])


const scale =  scaleLinear([0, 30], [0, 700])

const config = [{// rects代表拆分多个rect，下面是相关的配置
  vertical : false,
  scale: scale,
  size: 10,
  interval: 80,
  x: 30,
  y: 100,
  processing: (item) => { return item.age }, // 数据预处理，提取影响形状的报表
  color: (index) => { // 每个柱子的颜色
  
    return ['#4BC0C0', '#FF6485', '#FFCE5C', '#ADACB9', '#A37AC1'][index]
  },
  tooltip: (item) => {
    return item.name + '-age<br/>' + item.age
  },
  transition: {
    duration: 1000// 动画的时间
  },
  show: {// 过渡动画
    // from: { y: -510 },//起始点
    // to: { y: 0 },//终点
    from: { scaleX: 0 }, // 起始点
    to: { scaleX: 1 }, // 终点
    duration: 2000, // 动画的时间
    easing: cax.easing.elasticOut, // 缓动函数
    delay: (i) => { return i * 300 }// 每个柱子的动画依次开始
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
    scale:  scaleLinear([0, 5], [0, 400]),
    interval: 1,
    x: 30,
    y: 50,
    color: 'black',
    text: {
      color: '#444',
      value: (index, data) => {
        return 'index-' + index
      },
      x: -40,
      y: 50,
      font: '10px Verdana',
      range: [0, 4],
      rotation: -30
    },
    gird: {
      color: '#ddd',

      length: 700
    }
  },
  top: {
    scale: scale ,
    color: 'black',
    interval: 2,
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
