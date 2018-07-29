
import cax from 'cax'
import Loader from '../../../common/loader'
// import Axis from '../../src/index'

const stage = new cax.Stage(240, 280, '#canvasCtn')

const loader = new Loader({
  res: [{ id: 'a1', src: '../../asset/a1.jpg' }, { id: 'a2', src: '../../asset/a2.jpg' }, { id: 'a3', src: '../../asset/a3.jpg' }],
  complete: () => {
    let groupA = new cax.Group()
    let bitmapA = new cax.Bitmap(loader.get('a1'))

    let clipPathA = new cax.Graphics()
    clipPathA.x = 70
    clipPathA.y = 70
    clipPathA.arc(0, 0, 55, 0, Math.PI * 2)
    bitmapA.clip(clipPathA)
    let graphicsA = new cax.Graphics()

    graphicsA.beginPath().strokeStyle('white').lineWidth(2).arc(0, 0, 55, 0, Math.PI * 2).stroke()

    graphicsA.x = 70
    graphicsA.y = 70
    groupA.add(bitmapA, graphicsA)

    stage.add(groupA)

    let groupB = new cax.Group()
    let bitmapB = new cax.Bitmap(loader.get('a2'))

    let clipPathB = new cax.Graphics()
    clipPathB.x = 70
    clipPathB.y = 70
    clipPathB.arc(0, 0, 55, 0, Math.PI * 2)
    bitmapB.clip(clipPathB)
    let graphicsB = new cax.Graphics()

    graphicsB.beginPath().strokeStyle('white').lineWidth(2).arc(0, 0, 55, 0, Math.PI * 2).stroke()

    graphicsB.x = 70
    graphicsB.y = 70
    groupB.add(bitmapB, graphicsB)
    groupB.x = 100

    stage.add(groupB)

    const group = new cax.Group()

    groupB = new cax.Group()
    bitmapB = new cax.Bitmap(loader.get('a3'))

    clipPathB = new cax.Graphics()
    clipPathB.x = 70
    clipPathB.y = 70
    clipPathB.arc(0, 0, 55, 0, Math.PI * 2)
    bitmapB.clip(clipPathB)
    graphicsB = new cax.Graphics()

    graphicsB.beginPath().strokeStyle('white').lineWidth(2).arc(0, 0, 55, 0, Math.PI * 2).stroke()

    graphicsB.x = 70
    graphicsB.y = 70
    groupB.add(bitmapB, graphicsB)
    groupB.x = 50
    groupB.y = 290

    group.add(groupB)

    groupA = new cax.Group()
    bitmapA = new cax.Bitmap(loader.get('a1'))

    clipPathA = new cax.Graphics()
    clipPathA.x = 70
    clipPathA.y = 70
    clipPathA.arc(0, 0, 55, 0, Math.PI * 2)
    bitmapA.clip(clipPathA)
    graphicsA = new cax.Graphics()

    graphicsA.beginPath().strokeStyle('white').lineWidth(2).arc(0, 0, 55, 0, Math.PI * 2).stroke()

    graphicsA.x = 70
    graphicsA.y = 70
    groupA.add(bitmapA, graphicsA)
    groupA.y = 200

    groupA.compositeOperation = 'source-atop'

    group.add(groupA)

    group.cache(0, 0, 400, 800)
    group.y = -200
    stage.add(group)

    cax.tick(() => {
      stage.update()
    })

    let tag = false

    
    document.querySelector('#btnA').addEventListener('click', () => {
      if(tag){
        groupA.compositeOperation = 'source-atop'
        group.uncache()
        group.cache(0, 0, 400, 800)
      }else{
        groupA.compositeOperation = 'source-over'
        group.uncache()
        group.cache(0, 0, 400, 800)
      }
      tag = !tag
    })

  }
})

loader.start()
