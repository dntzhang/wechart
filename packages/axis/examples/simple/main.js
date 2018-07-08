
import cax from 'cax'

import Axis from '../../src/index'

const stage = new cax.Stage(740, 520, 'body')

const config = {
  bottom: {
    interval: 1,
    from: 0,
    mapping: [1, 100],
    x: 30,
    y: 450,
    to: 7,
    color: 'black',
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
    mapping: [30, 200],
    from: -30,
    to: 30,
    x: 30,
    y: 450,
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
