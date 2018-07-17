import cax from 'cax'
import Clock from '../../src/index'


const stage = new cax.Stage(800, 800, 'body')

const clock = new Clock()
stage.add(clock)

cax.tick(()=>{
  stage.update()
  clock.update()
})
