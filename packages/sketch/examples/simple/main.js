import cax from 'cax'
import Sketch from '../../src'
import fillRect from '../../src/fill-rect'

const stage = new cax.Stage(400, 400, 'body')

const sg = new Sketch({
  gap: 10,
  randomRange: 4,
  fillAngle: 10,
  strokeRepeat: 1,
  fillRepeat: 2,
  strokeWidth: 2,
  fillWidth: 2,
  storkeStyle: 'red',
  fillStyle: 'green'
})

sg.beginPath().moveTo(100, 100).lineTo(100, 200).lineTo(200, 200).lineTo(200, 100).lineTo(100, 100).stroke()


const img = fillRect(100,100,{})

const bmp = new cax.Bitmap(img)
bmp.x = 100
bmp.y = 100
stage.add(bmp)
//sg.fillRect(100,100,200,200 )
stage.add(sg)


cax.tick(()=>{
  stage.update()
})
