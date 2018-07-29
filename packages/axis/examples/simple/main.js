
import cax from 'cax'

import Axis from '../../src/index'
import { scaleLinear } from '../../../common/scale'

const stage = new cax.Stage(740, 520, 'body')

const config = {
  bottom: {
    color: 'black',
    interval: 1,
    scale: scaleLinear([0, 7], [0, 700]),
    x: 30,
    y: 450,
    text: {
      color: '#444',
      value: (index, data) => {
        return 'index-' + index
      },
      x: 30,
      y: 10,
      font: '10px Verdana',
      range: [0, 4],
      rotation: 0
    },
    gird: {
      color: '#ddd',

      length: 400
    }
  },
  left: {
    color: 'black',
    interval: 6,
    scale: scaleLinear([-30, 30], [400, 0]),
    x: 30,
    y: 50,
    text: {
      color: '#444',
      x: -20,
      y: 0
    },
    gird: {
      color: '#ddd',
      length: 700
    }
  }
}

Object.keys(config).forEach(key => {
  if (config[key]) {
    const axis = new Axis(config[key], key)
    stage.add(axis)
  }
})

stage.update()
