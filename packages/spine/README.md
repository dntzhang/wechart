```js
var stage = new createjs.Stage(canvas);
var dragon = new createjs.Spine("res/dragon.atlas", "res/dragon.json");

//cax 未来支持 setTransform
dragon.x = 300
dragon.y = 220, 
dragon.scaleX = 0.5
dragon.scaleY = 0.5


dragon.onComplete = function(){
  console.log(dragon);
  dragon.state.setAnimationByName(0, 'flying', true);
  stage.add(dragon);
}

stage.add(dragon);

cax.tick(function(e){
//e.delta支持一下，时间之间的间隔
  dragon.update(e);
  stage.update();
})
```