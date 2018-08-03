import cax from 'cax'
import Spine from '../../src/index'

var stage = new cax.Stage(500,500,'body');
var dragon = new Spine("./spineboy.atlas", "./spineboy.json");

//cax 未来支持 setTransform
dragon.x = 300
dragon.y = 220, 
dragon.scaleX = 0.5
dragon.scaleY = 0.5


dragon.onComplete = function(){
  console.log(dragon);
  dragon.state.setAnimationByName(0, 'walk', true);
  stage.add(dragon);
}

stage.add(dragon);
var now = Date.now(),
pre =now
cax.tick(function(e){
//e.delta支持一下，时间之间的间隔
now =  Date.now()
  dragon.update({delta: now -pre});
  pre = now
  stage.update();
})