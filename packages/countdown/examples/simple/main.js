import cax from 'cax'
import Countdown from '../../src'

const stage = new cax.Stage(480, 500, 'body')

const countdown = new Countdown()

stage.add(countdown)

countdown.start()

cax.tick(() => {
  countdown.update()
  stage.update()
})
