import cax from 'cax'
import Loader from '../../../common/loader'
import ScaleTimeDomain from './scale_timedomain'
var AudioContext = window.AudioContext || window.webkitAudioContext
var analyser, timeDomainData
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
      var {loaded, total} = o

      $precent.textContent = Math.round(loaded / total * 100) + '%'
    }
    xhr.send()
  })
}

loadAudio(media).then(data => {
  timeDomainData = new Uint8Array(analyser.frequencyBinCount)

  var stage = new cax.Stage(window.innerWidth, window.innerHeight, 'body')
  var bg = new cax.Rect(stage.width, stage.height, {fillStyle: 'black'})
  stage.add(bg)

  var loader = new Loader({
    res: [
      { id: 'logo', src: './asset/logox3.png' }
    ],
    complete: () => {
      var tex = loader.get('logo')
      var tdpic1 = new ScaleTimeDomain(tex, 'horizontal')
      var tdpic2 = new ScaleTimeDomain(tex, 'vertical')
      stage.add(tdpic1, tdpic2)
      tdpic1.y = stage.height * 0.5 - 150
      tdpic1.x = stage.width * 0.5

      tdpic2.y = stage.height * 0.5 + 150
      tdpic2.x = stage.width * 0.5

      tdpic1.scaleX = tdpic1.scaleY = 0.8
      tdpic2.scaleX = tdpic2.scaleY = 0.8

      ;(function animate () {
        window.requestAnimationFrame(animate)
        analyser.getByteTimeDomainData(timeDomainData)
        stage.update()
        tdpic1.update(timeDomainData)
        tdpic2.update(timeDomainData)
      })()
    }
  })
  loader.start()
})
