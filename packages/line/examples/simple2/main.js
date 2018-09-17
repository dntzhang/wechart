import cax from 'cax'
import Bar from '../../src/index2'


const stage = new cax.Stage(800, 520, 'body')


stage.add(new Bar({
  labels:['aaaaaaaaa','b','c','c','d','e','f','g'],
  datasets:[
    {
      label:'age',
      data: [10,20,30,13,15,27,32,4],
      color:'red'
    },
    {
      label:'exp',
      data: [100,200,130,176,120,111,43,80],
      color:'green',
      right:true
    }
  ],

  width:700,
  height:500
}))

cax.tick(stage.update.bind(stage))
