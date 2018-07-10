import cax from 'cax'
import pasition from './pasition.js'

import Pen from './pen'
import { getLength } from './bezier'

const paths = document.querySelectorAll('path')
const mapPath = []
const list = []
const allShape = []


paths.forEach(path => {
  mapPath.push(path.getAttribute('d'))
})

const stage = new cax.Stage(430, 430, 'body')

mapPath.forEach(path => {
  list.push(pasition.path2shapes(path))
})

list.forEach((shapes) => {
  shapes.forEach(shape => {
    shape.pathLen = 0
    shape.forEach((c, index) => {
      c.bzLen = getLength(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], 50)
      shape.pathLen += c.bzLen
    })
    allShape.push(shape)
  })
})

let startIndex = 0
const pen = new Pen(allShape[startIndex], true, () => {
  startIndex++
  if (startIndex < allShape.length) {
    setTimeout(() => {
      pen.shape = allShape[startIndex]
      pen.start()
    }, 200)
  } else {
    pen.stop()
  }
})

pen.x = -360
pen.y = -540
pen.scaleX = pen.scaleY = 2
stage.add(pen)

cax.tick(() => {
  pen.update()
  stage.update()
})