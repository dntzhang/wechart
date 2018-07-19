
import cax from 'cax'
import Loading from '../../src/index'


const stage = new cax.Stage(200, 220, 'body')

const img = new Image()
img.onload = function(){
  const loading = new Loading({
    img:img,
    waveSpeed: -5,
    color:'#1568C9',
    percent : 40.5,
    font: 'bold 36px Arial',
    colorA:'red',
    colorB:'white',
    step: 0.5
  })
  stage.add(loading)
  cax.tick(()=>{
  
    loading.update()
    stage.update()
  })
  
}
img.src = '../../asset/qq.png'


