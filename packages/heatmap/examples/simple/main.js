import Heatmap from '../../src/index'

const data = [];
for (var i = 0; i < 2000; ++i) {
  data.push([Math.random() * 600,
  Math.random() * 400,
  Math.random()]);
}
for (var i = 0; i < 60; ++i) {
  data.push([
    Math.random() * 20 + i / 2 + 100,
    Math.random() * 20 + 200,
    Math.random()]);
}
for (var i = 0; i < 100; ++i) {
  data.push([
    Math.random() * 40 + i / 2 + 400,
    Math.random() * 20 - i / 3 + 200,
    Math.random()]);
}

for (var i = 0; i < 50; ++i) {
  data.push([
    Math.random() * 40 + i / 2 + 300,
    Math.random() * 20 - i / 3 + 300,
    Math.random()]);
}




var heat = new Heatmap(data, {
  radius: 25,
  blur: 15,
  gradient: {
    0.4: 'blue',
    0.6: 'cyan',
    0.7: 'lime',
    0.8: 'yellow',
    1.0: 'red'
  },

  max: 18,
  alpha: 0.05
}, '#myCanvas'),
  frame;

function draw() {
  console.time('draw');
  heat.draw();
  console.timeEnd('draw');
  frame = null;
}

draw();

document.querySelector('#myCanvas').onmousemove = function (e) {
  heat.data.push([e.layerX, e.layerY, 1]);
  draw()
};

