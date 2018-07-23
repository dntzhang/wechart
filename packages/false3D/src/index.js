/**
 *
 * @Date: 2018/7/22
 * @author: twist
 *
 */

import cax from "cax";
import Axis from "../../axis/src";

const { Rect, Group } = cax;

class triangle extends Group {
  constructor(data, config, axisConfig, stage) {
    super();

    Object.keys(axisConfig).forEach(key => {
      if (axisConfig[ key ]) {
        const axis = new Axis(axisConfig[ key ], key);
        this.add(axis);
      }
    });
    config.forEach(rect => {
      rect.processedData = processPoint(rect, data);
      rect.processedData.forEach((item, index) => {
        this.add(new oneTriangle(data[ index ], index, stage));
      });
    });
  }
}

function processPoint(rect, data) {
  const renderWidth = rect.eleDomain - rect.x;
  const itemWidth = renderWidth / data.length;
  let depth = 15;
  let angle = Math.PI / 2.3;
  data.forEach((item, index) => {
    !index ? item.x = 30 : item.x = data[ index - 1 ].x + itemWidth;
    item.itemWidth = itemWidth * .7;
    item.height = rect.scale(item.age);
    item.y = rect.xAxisY;
    item.p1 = {
      x : item.x + Math.cos(angle) * item.itemWidth,
      y : item.y - item.height - Math.sin(angle) - depth
    };
    item.p2 = {
      x : item.p1.x + item.itemWidth,
      y : item.p1.y
    };
    item.p3 = {
      x : item.x + item.itemWidth,
      y : item.y - item.height
    };
  });
  return data;
}

class oneTriangle extends Group {
  constructor(data, index, stage) {
    super();
    const graphics = new cax.Graphics();
    drawTriangle(graphics, data, index, stage);
  }
}

function drawTriangle(graphics, data, index, stage) {
  let mainColorList = ['#f6e242', '#ebec5b', '#d2ef5f', '#b1d894','#97d5ad', '#82d1c0', '#70cfd2', '#63c8ce', '#50bab8', '#38a99d'];
  let topColorList = ['#e9d748', '#d1d252', '#c0d75f', '#a2d37d','#83d09e', '#68ccb6', '#5bc8cb', '#59c0c6', '#3aadab', '#2da094'];
  let rightColorList = ['#dfce51', '#d9db59', '#b9d54a', '#9ece7c','#8ac69f', '#70c3b1', '#65c5c8', '#57bac0', '#42aba9', '#2c9b8f'];
  //正面
  let rect = new Rect(data.itemWidth, data.height, {
    fillStyle : mainColorList[ index ]
  });
  rect.x = data.x;
  rect.y = data.y - data.height;
  //顶部
  graphics.beginPath()
    .moveTo(data.x, data.y - data.height)
    .lineTo(data.p1.x, data.p1.y)
    .lineTo(data.p2.x, data.p2.y)
    .lineTo(data.p3.x, data.p3.y)
    .moveTo(data.x, data.y)
    .fillStyle(topColorList[ index ])
    .fill();
  //右侧
  graphics.beginPath()
    .moveTo(data.p2.x, data.p2.y)
    .lineTo(data.p2.x, data.y)
    .lineTo(data.x + data.itemWidth, data.y)
    .lineTo(data.x + data.itemWidth, data.y - data.height)
    .moveTo(data.p2.x, data.p2.y)
    .fillStyle(rightColorList[ index ])
    .fill();
  stage.add(rect);
  stage.add(graphics);
}

export default triangle;