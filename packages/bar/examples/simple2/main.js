import cax from 'cax'
import Bar from '../../src/index2'


const stage = new cax.Stage(800, 520, 'body')


stage.add(new Bar({
  labels:['aaaaaaaaa','b','c'],
  datasets:[
    {
      lable:'age',
      data: [10,20,30],
      color:'red'
    },
    {
      lable:'exp',
      data: [100,2000,30],
      color:'green'
    }
  ],

  width:700,
  height:500,
  size:10
}))

cax.tick(stage.update.bind(stage))
