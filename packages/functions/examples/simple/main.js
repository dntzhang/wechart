
import cax from 'cax'
import Functions from '../../src/index'


function heartTop(x) {
  return Math.pow(x * x, 1 / 3) + Math.pow(1 - x * x, 1 / 2)
}

function heartBottom(x) {
  return Math.pow(x * x, 1 / 3) - Math.pow(1 - x * x, 1 / 2)
}

const stage = new cax.Stage(400, 400, 'body')
const funs = new Functions([
  heartTop,
  heartBottom
], {
    scale: 60,
    width: stage.width,
    height: stage.height,
    fnColor: () => {
      return 'red'
    },
    axisColor: '#888'
  })

stage.add(funs)
stage.update()
