import cax from 'cax'
import sketch from '../../src'

const stage = new cax.Stage(400, 400, 'body')

const ss = new sketch.Shape({
  gap: 5,
  randomRange: 4,
  fillAngle: -45,
  strokeRepeat: 1,
  curveRange: 45,
  fillRepeat: 2,
  strokeWidth: 1,
  fillWidth: 1,
  strokeStyle: 'black',
  fillStyle: '#ee5c63'
})


stage.add(ss)


ss.rect(100, 100, 100, 100)

ss.circle(280,200, 50)

ss.ellipse(100,40,160,50,{fillStyle: '#459130'})
//sg.strokePath
//sg.fillPath()




const sg = new sketch.Graphics({
  gap: 5,
  randomRange: 4,
  strokeRepeat: 1,
  curveRange: 45,
  strokeWidth: 1,
  strokeStyle: 'black'
})


sg.beginPath()
.moveTo(100, 100)
.lineTo(100, 200)
.lineTo(200, 200)
.lineTo(200, 100)
.lineTo(100, 100)
.stroke()


sg.y = 120
stage.add(sg)

cax.tick(() => {
  stage.update()
})
