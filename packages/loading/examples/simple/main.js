
import cax from 'cax'
import Loading from '../../src/index'


const stage = new cax.Stage(200, 220, 'body')

const img = new Image()
img.onload = function(){
  const loading = new Loading(img, '#22F2B0')
  stage.add(loading)
  cax.tick(()=>{
  
    loading.update()
    stage.update()
  })
  
}
img.src = '../../asset/qq.png'


