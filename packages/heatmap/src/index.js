/*
Inspired by: https://github.com/mourner/simpleheat
Simpleheat demo: http://mourner.github.io/simpleheat/demo
*/

'use strict'

if (typeof module !== 'undefined') module.exports = Heatmap

function Heatmap (data, option, canvas) {
  // if (!(this instanceof heatmap)) return new heatmap(canvas);

  this._canvas = canvas = typeof canvas === 'string' ? document.querySelector(canvas) : canvas

  this._ctx = canvas.getContext('2d')
  this._width = canvas.width
  this._height = canvas.height

  this.data = data

  this.option = Object.assign({
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
  }, option)
}

Heatmap.prototype = {

  radius: function (r, blur) {
    blur = blur === undefined ? this.option.blur : blur

    // create a grayscale blurred circle image that we'll use for drawing points
    var circle = this._circle = this._createCanvas(),
      ctx = circle.getContext('2d'),
      r2 = this._r = r + blur

    circle.width = circle.height = r2 * 2

    ctx.shadowOffsetX = ctx.shadowOffsetY = r2 * 2
    ctx.shadowBlur = blur
    ctx.shadowColor = 'black'

    ctx.beginPath()
    ctx.arc(-r2, -r2, r, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fill()

    return this
  },

  resize: function () {
    this._width = this._canvas.width
    this._height = this._canvas.height
  },

  gradient: function (grad) {
    // create a 256x1 gradient that we'll use to turn a grayscale heatmap into a colored one
    var canvas = this._createCanvas(),
      ctx = canvas.getContext('2d'),
      gradient = ctx.createLinearGradient(0, 0, 0, 256)

    canvas.width = 1
    canvas.height = 256

    for (var i in grad) {
      gradient.addColorStop(+i, grad[i])
    }

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 1, 256)

    this._grad = ctx.getImageData(0, 0, 1, 256).data

    return this
  },

  draw: function () {
    if (!this._circle) this.radius(this.option.radius)
    if (!this._grad) this.gradient(this.option.gradient)

    var ctx = this._ctx

    ctx.clearRect(0, 0, this._width, this._height)

    // draw a grayscale heatmap by putting a blurred circle at each data point
    for (var i = 0, len = this.data.length, p; i < len; i++) {
      p = this.data[i]
      ctx.globalAlpha = Math.min(Math.max(p[2] / this.option.max, this.option.alpha), 1)
      ctx.drawImage(this._circle, p[0] - this._r, p[1] - this._r)
    }

    // colorize the heatmap, using opacity value of each pixel to get the right color from our gradient
    var colored = ctx.getImageData(0, 0, this._width, this._height)
    this._colorize(colored.data, this._grad)
    ctx.putImageData(colored, 0, 0)

    return this
  },

  _colorize: function (pixels, gradient) {
    for (var i = 0, len = pixels.length, j; i < len; i += 4) {
      j = pixels[i + 3] * 4 // get gradient color from opacity value

      if (j) {
        pixels[i] = gradient[j]
        pixels[i + 1] = gradient[j + 1]
        pixels[i + 2] = gradient[j + 2]
      }
    }
  },

  _createCanvas: function () {
    if (typeof document !== 'undefined') {
      return document.createElement('canvas')
    } else {
      // create a new canvas instance in node.js
      // the canvas class needs to have a default constructor without any parameter
      return new this._canvas.constructor()
    }
  }
}
