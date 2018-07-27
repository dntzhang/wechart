import cax from 'cax'
import Sketch from '../../src/index'

const stage = new cax.Stage(400, 400, 'body')

const sg = new Sketch({
  gap: 10,
  randomRange: 4,
  fillAngle: 10,
  strokeRepeat: 5,
  fillRepeat: 2,
  strokeWidth: 2,
  fillWidth: 2,
  storkeStyle: 'red',
  fillStyle: 'green'
})

sg.beginPath().moveTo(100, 100).lineTo(100, 200).lineTo(200, 200).lineTo(200, 100).lineTo(100, 100).stroke()


stage.add(sg)
stage.update()

