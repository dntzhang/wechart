
this.addEventListener('message', function (e) {
  importScripts(e.data.script)

  var imageData = e.data.imageData

  var length = e.data.length
  var index = e.data.index

  transform(imageData.data, length, e.data.option)

  this.postMessage({
    result: imageData,
    index: index
  })

  this.close()
})
