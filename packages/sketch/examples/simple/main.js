import cax from 'cax'
import Sketch from '../../src'

const stage = new cax.Stage(400, 400, 'body')

const sg = new Sketch({
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



sg.fillRect(100, 100, 100, 100)

// sg.beginPath()
// .moveTo(100, 100)
// .lineTo(100, 200)
// .lineTo(200, 200)
// .lineTo(200, 100)
// .lineTo(100, 100)
// .stroke()



stage.add(sg)

sg.strokeRect(100, 100, 100, 100)

sg.fillCircle(280,200, 50)
sg.strokeCircle(280,200, 50)

sg.strokeEllipse(100,40,160,50)

sg.fillEllipse(100,40,160,50,{fillStyle: '#459130'})
//sg.strokePath
//sg.fillPath()

cax.tick(() => {
  stage.update()
})
