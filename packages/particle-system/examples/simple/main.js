
import cax from 'cax'
import ParticleSystem from '../../src/index'

const stage = new cax.Stage(240, 280, '#canvasCtn')

cax.loadImg({
  img: './wx.png',
  complete: function (img) {

    const ps = new ParticleSystem({
      speedRange: [3, 4],
      angleRange: [-120, -60],
      texture: img,
      gravity:{ x: 0, y: 0.2 },
      emitRange: [0, 0],
      emitX:stage.width / 2,
      emitY :stage.height / 2 + 40,
      scale: 0.5
    })

    ps.compositeOperation = "lighter"


    stage.add(ps)

    cax.tick(() => {

      ps.update()
      stage.update()
    })

    stage.on('mousemove',(evt)=>{
      ps.emitX = evt.stageX
      ps.emitY = evt.stageY
    })
  }
})