
import cax from 'cax'
import Functions from '../../src/index'


const ips = document.querySelectorAll('input')
const fA = function(){
  return eval(ips[0].value)
}
const fB = function(){
  return eval(ips[1].value)
}
const stage = new cax.Stage(400, 400, '#canvasCtn')
const funs = new Functions([
  fA,
  fB
], {
    scale: 50,
    width: stage.width,
    height: stage.height,
    fnColor: () => {
      return 'red'
    },
    axisColor: '#999',
    lineWidth: 3, 
    step:0.01
  })

stage.add(funs)
stage.update()


document.querySelector('#drawBtn').addEventListener('click',()=>{
  funs.update()
  stage.update()
})