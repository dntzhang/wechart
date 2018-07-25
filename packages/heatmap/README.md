heatmap
==========

```js
var heat = new Heatmap(data,{
  radius: 25,
  blur: 15,
  gradient: {
      0.4: 'blue',
      0.6: 'cyan',
      0.7: 'lime',
      0.8: 'yellow',
      1.0: 'red'
  },

  max :18,
  alpha:0.05
},'#myCanvas')

heat.draw()
```

#### Other methods

```js
// set point radius and blur radius (25 and 15 by default)
heat.radius(r, blur);

// set gradient colors as {<stop>: '<color>'}, e.g. {0.4: 'blue', 0.65: 'lime', 1: 'red'}
heat.gradient(grad);

// call in case Canvas size changed
heat.resize();
```