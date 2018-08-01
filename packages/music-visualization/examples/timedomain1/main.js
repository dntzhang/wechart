import cax from 'cax'
var AudioContext = window.AudioContext || window.webkitAudioContext
var analyser, timeDomainData
var actx = new AudioContext()
var media = './asset/miku.mp3'
// var imgSrc = './asset/logox2.png'
var imgSrc = './asset/logox3.png'

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

loadAudio(media).then(data => {
  timeDomainData = new Uint8Array(analyser.frequencyBinCount)
  var stage = new cax.Stage(window.innerWidth, window.innerHeight, 'body')
  var bg = new cax.Rect(stage.width, stage.height, {fillStyle: 'black'})
  stage.add(bg)


  //new TimeDomainPic('./asset/logox3.png',256,256)
  
  //console.log(new cax.Bitmap('./asset/logox3.png'))

  var [imgW, imgH] = [256, 256]
  var slice = Math.min(256, imgW)
  var perW = imgW / slice
  var bitmaps = Array.from({length: slice}, (v, i) => {
    // const bitmap = new cax.Bitmap('./enemy.png')
    // const bitmap = new cax.Bitmap('./logox.png')
    const bitmap = new cax.Bitmap(imgSrc)
    bitmap.originX = imgW * 0.5
    bitmap.originY = imgH * 0.5
    const clipPath = new cax.Graphics()
    clipPath.rect(imgW * i / slice, 0, perW, imgH)
    bitmap.clip(clipPath)
    stage.add(bitmap)
    // bitmap.x = stage.width * 0.5 + imgW * i / slice
    bitmap.x = stage.width * 0.5
    bitmap.y = bitmap.yy = stage.height * 0.5
    return bitmap
  })

  // var [imgW, imgH] = [256, 256]
  // const bitmap = new cax.Bitmap('./logox2.png')
  // bitmap.originX = imgW * 0.5
  // bitmap.originY = imgH * 0.5
  // const clipPath = new cax.Graphics()
  // clipPath.rect(0, imgH*.5, imgW, imgH*.5)
  // bitmap.clip(clipPath)
  // stage.add(bitmap)
  // // bitmap.x = stage.width * 0.5 + imgW * i / slice
  // bitmap.x = stage.width * 0.5
  // bitmap.y = bitmap.yy = stage.height * 0.5

  // var [imgW, imgH] = [256, 256]
  // var slice = Math.min(250, imgH)
  // var perH = imgH / slice
  // var bitmaps = Array.from({length: slice}, (v, i) => {
  //   // const bitmap = new cax.Bitmap('./enemy.png')
  //   // const bitmap = new cax.Bitmap('./logox.png')
  //   const bitmap = new cax.Bitmap('./asset/logox3.png')
  //   bitmap.originX = imgW * 0.5
  //   bitmap.originY = imgH * 0.5
  //   const clipPath = new cax.Graphics()
  //   clipPath.rect(0, imgH * i / slice, imgW, perH)
  //   bitmap.clip(clipPath)
  //   stage.add(bitmap)
  //   // bitmap.x = stage.width * 0.5 + imgW * i / slice
  //   bitmap.x = stage.width * 0.5
  //   bitmap.y = bitmap.yy = stage.height * 0.5
  //   return bitmap
  // })

  ;(function animate () {
    window.requestAnimationFrame(animate)
    analyser.getByteTimeDomainData(timeDomainData)
    Array.from(timeDomainData, (v, i) => {
      // console.log(v)
      var bitmap = bitmaps[i / timeDomainData.length * slice | 0]
      bitmap.scaleY = v / 128
    })
    // Array.from(timeDomainData, (v, i) => {
    //   // console.log(v)
    //   var bitmap = bitmaps[i / timeDomainData.length * slice | 0]
    //   bitmap.scaleX = v / 128
    // })

    stage.update()
  })()
})
