
; (function () {
  var Complex = function (r, i) {
    this.r = r
    this.i = i
  }

  Complex.prototype = {
    madIteration: function (r, i) {
      return new Complex(this.r * this.r - this.i * this.i + r, 2 * this.r * this.i + i)
    },
    modulusSqu: function () {
      return this.r * this.r + this.i * this.i
    }
  }

  var canvas = document.getElementById('ourCanvas'),
    context = canvas.getContext('2d'),
    w = canvas.width,
    h = canvas.height,
    colors = ['#FFC1C1', '#D1EEEE', '#C0FF3E', '#7CCD7C', '#D15FEE', '#63B8FF', '#FF8C69']

  function render (iterMax) {
    context.clearRect(0, 0, w, h)
    var imageData = context.getImageData(0, 0, 600, 400),
      iter = 0,
      current,
      temp
    for (var x = 0; x < w; x++) {
      for (var y = 0; y < h; y++) {
        current = new Complex(x / 100 - 3, y / 100 - 2)
        temp = current
        iter = 0
        while (temp.modulusSqu() <= 4 && iter < iterMax) {
          temp = temp.madIteration(current.r, current.i)
          iter = iter + 1
        }
        var index = 4 * (canvas.width * y + x),
          color = colorRgb(colors[iter % 7])
        if (iter > 7) {
          color = colorRgb('#e24337')
        }
        if (iter !== iterMax) {
          imageData.data[index] = color[0]
          imageData.data[index + 1] = color[1]
          imageData.data[index + 2] = color[2]
        }
        imageData.data[index + 3] = 255
      }
    }
    context.putImageData(imageData, 0, 0)
  }

  function colorRgb (sColor) {
    var arr = []
    for (var i = 1; i < 7; i += 2) {
      arr.push(parseInt('0x' + sColor.slice(i, i + 2)))
    }
    return arr
  }

  function main () {
    var i = 2, step = 1
    setInterval(function () {
      (i === 1 || i === 18) && (step *= -1)
      render(i += step)
    }, 500)
  }

  main()
})()
