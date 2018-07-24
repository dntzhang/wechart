import cax from 'cax'



const stage = new cax.Stage(660, 600, 'body')

const bg = new cax.Bitmap('./track.jpg')
stage.add(bg)

cax.tick(() => {
  stage.update()
})
