import cax from 'cax'
import Vector from './vector'
var GraphNode = class extends cax.Group {
  constructor (node, text, config) {
    super()
    this.node = node
    this.add(this.node)

    this.edges = []

    this.text = text

    if (this.text) {
      this.add(text)
    }
    this.pos = new Vector(this.node.x, this.node.y)
    this.node.x = 0
    this.node.y = 0

    this.on('drag', e => {
      // console.log(e)
      this.pos.x = e.stageX
      this.pos.y = e.stageY
    })
    this.on('mousedown', e => {
      this.dragged = true
      // debugger
    })
    this.on('touchstart', e => {
      this.dragged = true
    })
    this.on('mouseup', e => {
      // debugger
      this.dragged = false
    })
    this.on('touchend', e => {
      this.dragged = false
    })

    this.node.on('mousemove', e => {
      // console.log('mouseover')
      this.handle_move(e)
    })
    this.node.on('mouseout', e => {
      // debugger
      // console.log('mouseout')
      this.handle_out(e)
    })
    this.node.on('touchend', e => {
      this.handle_out(e)
    })
  }
  onMouseMove (handle) {
    this.handle_move = handle
  }
  onMouseOut (handle) {
    this.handle_out = handle
  }
  connect (other) {
    this.edges.push(other)
    other.edges.push(this)
  }
  hasEdge (other) {
    for (let i = 0; i < this.edges.length; i++) {
      if (this.edges[i] === other) {
        return true
      }
    }
  }
  drag () {
  }
  update () {
    this.x = this.pos.x
    this.y = this.pos.y
  }
}
export default GraphNode
