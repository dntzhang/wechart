import cax from 'cax'
import ForceDirectedGraph from '../../src'

var stage = new cax.Stage(document.body.offsetWidth, document.body.offsetHeight, 'body')

var graph = new ForceDirectedGraph(
  [
    {'name': 'Aqua', 'image': './asset/aqua.png'},
    {'name': '高海千歌', 'image': './asset/chika.jpg'},
    {'name': '樱内梨子', 'image': './asset/Riko.jpg'},
    {'name': '松浦果南', 'image': './asset/kanan.jpg'},
    {'name': '黑泽黛雅', 'image': './asset/Dia.jpg'},
    {'name': '渡边曜', 'image': './asset/You.jpg'},
    {'name': '津岛善子', 'image': './asset/yoshiko.jpg'},
    {'name': '国木田花丸', 'image': './asset/Hanamaru.jpg'},
    {'name': '小原鞠莉', 'image': './asset/mari.jpg'},
    {'name': '黑泽露比', 'image': './asset/rubi.jpg'}
  ],
  [
    {'source': 0, target: 1, 'relation': '团员'},
    {'source': 0, target: 2, 'relation': '团员'},
    {'source': 0, target: 3, 'relation': '团员'},
    {'source': 0, target: 4, 'relation': '团员'},
    {'source': 0, target: 5, 'relation': '团员'},
    {'source': 0, target: 6, 'relation': '团员', strokeStyle: '#42487a', lineWidth: 3, alpha: 1},
    {'source': 0, target: 7, 'relation': '团员'},
    {'source': 0, target: 8, 'relation': '团员'},
    {'source': 0, target: 9, 'relation': '团员'}
  ],
  {
    constrain: {
      left: 0,
      right: stage.width,
      top: 0,
      bottom: stage.height
    },
    springStrength: 0.15,
    repulsionStrength: 3500,
    springLength: stage.width * 0.5,
    processing: (param, i) => {
      var {image, name} = param
      var graphNode, text

      if (image) {
        graphNode = new cax.Bitmap(image)
        graphNode.originX = image.width * 0.5
        graphNode.originY = image.height * 0.5
        graphNode.scaleX = graphNode.scaleY = i === 0 ? 0.4 : 1
      } else {
        graphNode = new cax.Circle(10, {fillStyle: 'pink'})
      }

      // debugger
      graphNode.x = Math.random() * stage.width
      graphNode.y = Math.random() * stage.height

      text = new cax.Text(i === 6 ? name + `(堕天使夜羽)` : '', {
        font: '14px Arial',
        color: i === 6 ? '#42487a' : 'black',
        baseline: 'middle',
        textAlign: 'center'
      })
      text.x = 0
      text.y = 50

      return {
        graphNode, text
      }
    },
    tooltip: (param, i) => {
      if (i === 0) return false
      return param.name + 'OvO'
    }
  }
)

stage.on('touchstart', e => {
  e.preventDefault()
})
stage.add(graph)
cax.tick(() => {
  stage.update()
  graph.update()
})
