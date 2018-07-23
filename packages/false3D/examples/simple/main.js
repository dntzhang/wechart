/**
 *
 * @Date: 2018/7/22
 * @author: twist
 *
 */

import cax from "cax";
import triangle from "../../src/index";
import { scaleLinear } from "../../../common/scale";

const stage = new cax.Stage(800, 520, "body");

const data = [ // 数据
  { name : "dntzhang", age : cax.util.randomInt(22, 20), exp : cax.util.randomInt(500, 1000) },
  { name : "Canvas", age : cax.util.randomInt(40, 20), exp : cax.util.randomInt(500, 1000) },
  { name : "Wechart", age : cax.util.randomInt(10, 20), exp : cax.util.randomInt(500, 1000) },
  { name : "Tencent", age : cax.util.randomInt(30, 20), exp : cax.util.randomInt(500, 1000) },
  { name : "Cax", age : cax.util.randomInt(20, 20), exp : cax.util.randomInt(500, 1000) }
];
const xScale = scaleLinear([ 0, 4 ], [ 0, 700 ]);
const yScaleLeft = scaleLinear([ 70, 0 ], [ 0, 430 ]);

const config = [
  {// rects代表拆分多个rect，下面是相关的配置
    scale : yScaleLeft,
    size : 30,
    interval : 100,
    x : 45,
    y : 20,
    processing : (item) => {
      return item.age;
    }, // 数据预处理，提取影响形状的报表
    color : (index) => { // 每个柱子的颜色
      return "#4BC0C0";
    },
    tooltip : (item) => {
      return item.name + "-age<br/>" + item.age;
    },
    transition : {
      duration : 1000// 动画的时间
    },
    show : {// 过渡动画
      // from: { y: -510 },//起始点
      // to: { y: 0 },//终点
      from : { scaleY : 0 }, // 起始点
      to : { scaleY : 1 }, // 终点
      duration : 2000, // 动画的时间
      easing : cax.easing.elasticOut, // 缓动函数
      delay : (i) => {
        return i * 300;
      }// 每个柱子的动画依次开始
    },
    hide : {
      from : { scaleY : 1 }, // 起始点
      to : { scaleY : 0 }, // 终点
      duration : 1000// 动画的时间
      // delay: (i) => { return i * 300 }//每个柱子的动画依次开始
    },
    eleDomain : 800,
    xAxisY : 450
  }
];

const axisConfig = {
  bottom : {
    scale : xScale,
    interval : 1,
    x : 30,
    y : 450,
    color : "black",
    text : {
      color : "#444",
      value : index => {
        return "index-" + index;
      },
      x : 30,
      y : 10,
      font : "10px Verdana",
      range : [ 0, 4 ],
      rotation : 0
    },
    gird : {
      color : "#ddd",
      length : 400
    }
  },
  left : {
    scale : yScaleLeft,
    color : "black",
    interval : 6,
    x : 30,
    y : 20,
    text : {
      color : "#444",
      x : -20,
      y : -8
    },
    gird : {
      color : "#ddd",
      length : 700
    }
  }
};

stage.add(new triangle(data, config, axisConfig,stage));

cax.tick(stage.update.bind(stage));
