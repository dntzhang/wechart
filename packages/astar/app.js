var App = function () {
  var canvas = document.querySelector('#ourCanvas'), ctx = canvas.getContext('2d')
  var astarView = new AstarView(canvas)
  var astarControl = new AstarController(astarView)
  canvas.addEventListener('click', function (evt) {
    var of = astarView.getOffset(canvas)
    var x = Math.floor((evt.pageX - of[0]) / astarView.dx)
    var y = Math.floor((evt.pageY - of[1]) / astarView.dy)
    astarControl.input(x, y)
  }, false)
}
