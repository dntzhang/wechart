import cax from 'cax'
import Ring from '../../src/index'

const stage = new cax.Stage(800, 600, 'body')

const ring = new Ring()
stage.add(ring)

stage.update()
