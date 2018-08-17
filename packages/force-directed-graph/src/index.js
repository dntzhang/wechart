import cax from 'cax'
import GraphNode from './graphnode'
import Edge from './edge'
import Loader from '../../common/loader'
// debugger
var ForceDirectedGraph = class extends cax.Group {
  constructor (nodes, edges, config) {
    super()
    config = Object.assign({}, {
      springLength: 123,
      springStrength: 0.1,
      repulsionStrength: 2500,
      bound: {
        left: 0,
        right: 600,
        top: 0,
        bottom: 600
      }
    }, config)
    // debugger
    this.config = config

    this.nodeGroup = new cax.Group()
    this.edgeTextGroup = new cax.Group()
    this.edgeLineGroup = new cax.Group()
    this.nodes = []
    this.edges = []
    this.Edges = Object.create(null)
    this.xedges = edges

    this.add(
      this.edgeLineGroup,
      this.edgeTextGroup,
      this.nodeGroup
    )

    this.createTooltip()
    this.adapterNodes(nodes).then(nodes => {
      this.nodes = nodes.map((o, i) => {
        var processing = config.processing || this.processing.bind(this)
        var {graphNode, text} = processing({name: o.name, image: o.image}, i)
        var node = new GraphNode(
          graphNode, text, {}
        )

        this.nodeGroup.add(node)

        node.onMouseMove((e) => {
          if (!config.tooltip) return false
          var val = config.tooltip({name: o.name, node}, i)
          if (!val) return false
          this.$tooltip.innerHTML = val
          // console.log(e.stageX, e.stageY)
          // debugger
          this.$tooltip.style.left = (e.stageX + 10) + 'px'
          this.$tooltip.style.top = (e.stageY + 10) + 'px'
          this.$tooltip.style.display = 'block'
        })

        node.onMouseOut(() => {
          if (!config.tooltip) return false
          this.$tooltip.style.display = 'none'
        })

        return node
      })

      edges.forEach((o, i) => {
        var {source, target} = o
        if (this.nodes[source]) {
          this.nodes[source].connect(this.nodes[target])
        }
      })

      this.nodes.forEach((node, i) => {
        // 0 1
        // 0 2
        // 1 2
        for (let j = i + 1, len = this.nodes.length; j < len; j++) {
          // console.log(i, j)
          let other = this.nodes[j]
          if (node.hasEdge(other)) {
            let attr = this.findEdgeAttr(i, j)
            if (attr.length) {
              let edgeAttr = attr[0]
              edgeAttr = Object.assign({},
                {font: '15px Arial', color: 'black', strokeStyle: 'gray', lineWidth: '1', alpha: 0.7, relation: ''},
                edgeAttr
              )
              // let {relation, font, color, strokeStyle, lineWidth, alpha} = edgeAttr

              // debugger
              if (!this.Edges[i]) this.Edges[i] = {}

              this.Edges[i][j] = Edge(edgeAttr)

              this.Edges[i][j].lineGroup = this.edgeLineGroup

              this.edgeLineGroup.add(this.Edges[i][j].line)
              this.edgeTextGroup.add(this.Edges[i][j].text)

              this.Edges[i][j].init()

              this.Edges[i][j].updateLine()
            }
          }
        }
      })
    })
  }
  processing (param, i) {
    var {image, name} = param
    var graphNode, text, wh

    if (image) {
      graphNode = new cax.Bitmap(image)
      graphNode.originX = image.width * 0.5
      graphNode.originY = image.height * 0.5
      graphNode.scaleX = graphNode.scaleY = 1
    } else {
      graphNode = new cax.Circle(10, {fillStyle: `gray`})
    }

    if (typeof this.parent.width !== 'undefined') {
      wh = {w: this.parent.width, h: this.parent.height}
    } else {
      wh = {w: 600, h: 600}
    }
    graphNode.x = Math.random() * wh.w
    graphNode.y = Math.random() * wh.h

    text = new cax.Text(name, {
      font: '14px Arial',
      color: 'black',
      baseline: 'middle',
      textAlign: 'center'
    })
    // text.originX = text.getWidth() * 0.5
    text.x = 0
    text.y = image ? image.height * 0.7 : graphNode.r * 2
    return {
      graphNode, text
    }
  }
  createTooltip () {
    const tooltip = document.createElement('div')
    document.body.appendChild(tooltip)
    tooltip.style.position = 'absolute'
    tooltip.style.width = 'auto'
    tooltip.style.maxWidth = '400px'
    tooltip.style.height = 'auto'
    tooltip.style.padding = '4px 8px'
    tooltip.style.display = 'none'
    tooltip.style.minWidth = '100px'
    tooltip.style.pointerEvents = 'none'
    if (window.devicePixelRatio === 1) {
      tooltip.style.transition = 'all .6s'
    }
    tooltip.style.backgroundColor = 'rgba(0,0,0,.5)'
    tooltip.style.color = 'white'
    tooltip.style.textAlign = 'center'
    this.$tooltip = tooltip
  }
  adapterNodes (nodes) {
    var pms = nodes.map((o, i) => {
      return new Promise(resolve => {
        if (o.image && typeof o.image === 'string') {
          let loader = new Loader({
            res: [ { id: 'tex', src: o.image } ],
            complete: () => {
              var tex = loader.get('tex')
              resolve({name: o.name, image: tex}, i)
            }
          })

          loader.start()
          return
        }
        resolve(o, i)
      })
    })

    return Promise.all(pms)
  }
  findEdgeAttr (i, j) {
    return this.xedges.filter((o) => {
      return (o.source === i && o.target === j) || (o.source === j && o.target === i)
    })
  }
  constrain (node) {
    var {left, right, top, bottom} = this.config.constrain
    // debugger
    var {x, y} = node.pos
    if (x < left) node.pos.x = left
    if (x > right) node.pos.x = right
    if (y < top) node.pos.y = top
    if (y > bottom) node.pos.y = bottom
  }
  update () {
    const {springLength, springStrength, repulsionStrength} = this.config
    // // // console.log('------------------------')
    // console.log(this.config)
    this.nodes.forEach((node, i) => {
      this.constrain(node)

      for (let j = i + 1, len = this.nodes.length; j < len; j++) {
        let other = this.nodes[j]
        if (other === node) return

        let apart = other.pos.sub(node.pos)
        let distance = Math.max(1, apart.length)
        let forceSize = -repulsionStrength / (distance * distance)
        // console.log(j)
        if (node.hasEdge(other)) {
          forceSize += (distance - springLength) * springStrength

          let normalized = apart.multiplyScalar(1 / distance)
          let v = normalized.multiplyScalar(distance * 0.5)

          if (this.Edges[i][j]) {
            this.Edges[i][j].updateLine(node.pos, other.pos)
            this.Edges[i][j].updateText(node.pos.x + v.x, node.pos.y + v.y)
          }
        }

        if (Math.abs(forceSize) < 0.3) forceSize = 0

        let applied = apart.multiplyScalar(forceSize / distance)
        if (!node.dragged) node.pos = node.pos.add(applied)
        if (!other.dragged) other.pos = other.pos.add(applied.multiplyScalar(-1))

        this.constrain(node)
        this.constrain(other)
      }
    })
    // // console.log('------------------------')
    this.nodes.forEach(node => {
      node.update()
    })
  }
}
export default ForceDirectedGraph
