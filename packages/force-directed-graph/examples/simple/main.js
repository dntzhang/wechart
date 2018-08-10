import cax from 'cax'
// debugger;
var GraphNode = class extends cax.Group {
  constructor (x = 0, y = 0, name = '123') {
    super()
    this.cir = new cax.Circle(15, {fillStyle: 'black'})
    this.add(this.cir)

    this.pos = new Vector(x, y)
    this.edges = []
    this.name = name

    this.text = new cax.Text(name, {
      color: 'red'
    })

    this.text.x = 0
    this.text.y = 0
    this.add(this.text)

    this.on('drag', e => {
      // console.log(e)
      this.pos.x = e.stageX
      this.pos.y = e.stageY
    })

    this.on('mousedown', e => {
      // debugger
      console.log('touchstart!')
    })
    this.on('mouseup', e => {
      // debugger
      console.log('touchend!')
    })
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

var Vector = class Vector {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
  minus (vec) {
    return new Vector(this.x - vec.x, this.y - vec.y)
  }
  times (s) {
    return new Vector(this.x * s, this.y * s)
  }
  plus (vec) {
    return new Vector(this.x + vec.x, this.y + vec.y)
  }
  get length () {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
}

// var springLength = 40
// var springStrength = 0.01
// var repulsionStrength = 1500
var [w, h] = [window.innerWidth, window.innerHeight]

// var springLength = w * 0.5
var springLength = 100
var springStrength = 0.1
var repulsionStrength = 1500

var forceDirected_simple = (graph) => {
  graph.forEach( node => {
    graph.forEach( other => {
      if (other === node) return
      var apart = other.pos.minus(node.pos)
      var distance = Math.max(1, apart.length)
      var forceSize = -repulsionStrength / (distance * distance)

      if (Math.abs(forceSize) < 0.1) forceSize = 0
      // console.log(forceSize);
      if (node.hasEdge(other)) {
        // 静止长度&当前长度
        forceSize += (distance - springLength) * springStrength
        let line = new cax.Graphics()
        line
          .beginPath()
          .moveTo(node.pos.x, node.pos.y)
          .lineTo(other.pos.x, other.pos.y)
          .closePath()
          .stroke()

        stage.add(line)

        lines.push(line)
      }
      var normalized = apart.times(1 / distance)
      node.pos = node.pos.plus(normalized.times(forceSize))
    })
  })
}

var lines = []
var graph = []
var stage = new cax.Stage(w, h, 'body')

// var relation = require('./relation1.json')
// console.log(relation)
// var {nodes, links} = relation
// node

var nodes = [
  {name: "桂林"  ,image:'' }
  ,{name: "广州" },
{ name: "厦门"    }, { name: "杭州"   },
{ name: "上海"   }, { name: "青岛"    },
{ name: "天津"    } ];

var links = [  
  { source : 0  , target: 1 ,relation:'挚友' ,lineWidth:'', strokeStyle:'' } , { source : 0  , target: 2 } ,
 { source : 0  , target: 3 } , { source : 1  , target: 4 } ,
 { source : 1  , target: 5 } , { source : 1  , target: 6 }  ];	


Array.from(nodes, (o, i) => {
  var gnode = new GraphNode(w * Math.random(), h * Math.random(), o.name)
  graph.push(gnode)
  stage.add(gnode)
})
Array.from(links, (o, i) => {
  // { "source" : 0 , "target": 1 }

  graph[o.source].connect(graph[o.target])
})

// ;[...Array(3)].forEach((v, i) => {
//   var gnode = new GraphNode(w * Math.random(), h * Math.random(), 'gnode1')
//   graph.push(gnode)
//   stage.add(gnode)
//   if (i > 0) {
//     gnode.connect(graph[i - 1])
//   }
// })

// graph[0].connect(graph[graph.length - 1])

;(function animate () {
  window.requestAnimationFrame(animate)
  stage.update()

  lines.forEach(line => {
    stage.remove(line)
  })
  forceDirected_simple(graph)
  // console.log(stage.children.length)
  graph.forEach(gnode => {
    gnode.update()
  })

})()
