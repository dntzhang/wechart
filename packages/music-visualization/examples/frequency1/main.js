import cax from 'cax'
import Variants from './variants'
import FrequencyBars from './frequency_bars'
import stage from './stage'
var AudioContext = window.AudioContext || window.webkitAudioContext
var analyser, frequencyData
var actx = new AudioContext()
var media = './asset/miku.mp3'

var loadAudio = (url) => {
  var xhr = new window.XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.responseType = 'arraybuffer'
  return new Promise(resolve => {
    var $precent = document.querySelector('#precent')
    $precent.style.display = 'block'
    xhr.onload = () => {
      $precent.style.display = 'none'
      // resolve(xhr.response)
      analyser = actx.createAnalyser()
      analyser.fftSize = 2048
      analyser.smoothingTimeConstant = 0.8
      actx.decodeAudioData(xhr.response, buffer => {
        var asource = actx.createBufferSource()
        asource.buffer = buffer
        asource.loop = true
        var splitter = actx.createChannelSplitter()
        asource.connect(splitter)
        splitter.connect(analyser, 0, 0)
        analyser.connect(actx.destination)
        asource.start()
        resolve()
      })
    }
    xhr.onprogress = (o) => {
      // console.log(o);
      // loaded: 2574559, total: 2679663
      var {loaded, total} = o

      $precent.textContent = Math.round(loaded / total * 100) + '%'
    }
    xhr.send()
  })
}
var getAvg = (frequencyData) => {
  var value = 0
  var values = [].slice.call(frequencyData)
  values.forEach(function (v) {
    value += v
  })
  return value / values.length
}

loadAudio(media).then(data => {
  frequencyData = new Uint8Array(analyser.frequencyBinCount)
  var bg = new cax.Rect(stage.width, stage.height, {fillStyle: 'black'})
  stage.add(bg)

  var gap = stage.width * 0.04
  var fqbTop = new FrequencyBars(45, gap, 'top')
  var fqbBot = new FrequencyBars(45, gap, 'bottom')
  // stage.add(fqbTop, fqbBot)
  fqbTop.alpha = 0.5
  fqbBot.alpha = 0.5
  fqbTop.y = 0
  fqbBot.y = stage.height

  // ars, r = 12, gap = 5
  var variants = new Variants(['rect', 'cir'], stage.width * 0.04, stage.width * 0.05)
  variants.alpha = 0.2
  variants.n = 0
  var text = new cax.Text('wechart', {
    font: '60px Arial',
    color: 'white',
    baseline: 'middle',
    textAlign: 'center'
  })
  text.alpha = 0.6
  text.x = stage.width * 0.5
  text.y = stage.height * 0.5
  text.originX = text.getWidth() * 0.5

  stage.add(variants)
  stage.add(fqbTop)
  stage.add(fqbBot)
  stage.add(text)

  var callee = () => {
    var polygon = ++variants.n % 2 === 0 ? 'rect' : 'cir'
    variants.usePolygon(polygon, function () {
      setTimeout(() => {
        callee()
      }, 2333 + Math.random() * 2333)
    })
  }
  callee()
  ;(function animate () {
    window.requestAnimationFrame(animate)

    var avg = getAvg(frequencyData)

    analyser.getByteFrequencyData(frequencyData)
    fqbBot.update(frequencyData)
    fqbTop.update(frequencyData)
    variants.update(frequencyData, avg)
    text.scaleX = text.scaleY = 1 + avg * 0.01
    stage.update()
  })()
})
