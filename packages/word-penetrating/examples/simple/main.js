import cax from 'cax'

const width = 1020
const height = 624
const stage = new cax.Stage(width, height, '#canvasCtn')

cax.loadImg({
  img: './transformers.jpg',
  complete: function (img) {
    document.querySelector('#loading').style.opacity= 0

    setTimeout(function(){
      play(img)
    },1500)

  }
})



function play(img){

  const bitmapA = new cax.Bitmap(img)
  bitmapA.alpha = 0
  stage.add(bitmapA)

  const group = new cax.Group()

  const bitmapB = bitmapA.clone()
  group.add(bitmapB)
  bitmapB.originX = bitmapA.originX = width / 2
  bitmapB.originY = bitmapA.originY = height / 2
  bitmapA.scaleX = bitmapA.scaleY = bitmapB.scaleX = bitmapB.scaleY = 5
  bitmapB.x = bitmapA.x = width / 2
  bitmapB.y = bitmapA.y = height / 2
  const text = new cax.Text('TRANSFORMERS', {
    color: 'white',
    font: '100px Segoe UI'
  })
  text.x = width / 2 - text.getWidth() / 2
  text.y = height / 2 - 50
  text.compositeOperation = 'destination-atop'
  group.add(text)

  group.cache(0, 0, width, height, 1, true)

  stage.add(group)

  text.alpha = 0.1
   cax.To.get(text).wait(600).to({alpha:1},600).start()

  const textB = new cax.Text('TRANSFORMERS', {
    color: 'white',
    font: '100px Segoe UI'
  })
  textB.x = width / 2 - text.getWidth() / 2
  textB.y = height / 2 - 50
  textB.alpha = 0.1
  stage.add(textB)


  cax.To.get(bitmapA).wait(4000).to({ alpha: 1 }, 6000).start()

  cax.To.get(textB).wait(7000).to({ alpha: 1 }, 2600).start()

  let step = - 0.02

  cax.tick(function () {
    stage.update()
    
      bitmapB.scaleX += step
      bitmapB.scaleY += step
      bitmapA.scaleX += step
      bitmapA.scaleY += step
    if (bitmapB.scaleX < 1.01) {
      step = 0.001
    }
    if(step>0&&bitmapB.scaleX >1.3){
      step = 0
      document.querySelector('#github').style.opacity= 1
    }
  })

}


//document.querySelector('#randomBtn').addEventListener('click', random)
