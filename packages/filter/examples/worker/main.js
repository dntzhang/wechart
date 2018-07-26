import transform from './brightness'

const w = new Worker('./worker.js')

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const img = new Image()

img.onload = function () {
  ctx.drawImage(img, 0, 0)
  initWorder(ctx.getImageData(0, 0, 300, 300), 300, 300, createScript(transform), {
    adjustment: -20
  })
}
img.src = './wepay-diy.jpg'

function initWorder (imageData, width, height, script, option) {
  w.addEventListener('message', function (e) {
    ctx.putImageData(e.data.result, 0, 0)
  })

  w.postMessage({
    imageData: imageData,
    length: width * height * 4,
    option: option,
    script: script
  })
}

function createScript (transform) {
  var blob = new Blob(['' + transform], { type: 'text/javascript' })
  return window.URL.createObjectURL(blob)
}
