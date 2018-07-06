import cax from 'cax'

const { Graphics, Group, Button, ArrowPath } = cax

class Graph extends Group {
  constructor(data) {
    super()
    this.data = data
    const g = new dagre.graphlib.Graph()

    // Set an object for the graph label
    g.setGraph({
      // ranksep: 80,
      // nodesep: 10
    });

    // Default to assigning a new object as a label for each new edge.
    g.setDefaultEdgeLabel(function () { return {}; });

    this.data.nodes.forEach(node => {
      g.setNode(node.id, { label: node.name, width: node.width || 50, height: node.height || 50 });
    })

    this.data.edges.forEach(edge => {
      g.setEdge(edge[0], edge[1]);
    })

    dagre.layout(g);

    this.render(g)
  }

  render(g) {
    g.edges().forEach((e) => {
      const path = g.edge(e).points
      const ap = new ArrowPath(path)
      this.add(ap)
    });

    g.nodes().forEach((v) => {
      const node = g.node(v)
      const rr = new Button({
        width: node.width,
        height: node.height,
        borderRadius: 5,
        color: 'white',
        text: node.label,
        textX: 3,
        textY: -2,
        borderColor: '#8899AB',
        backgroundColor: '#123456'
      })

      rr.originX = node.width / 2
      rr.originY = node.height / 2
      rr.x = node.x
      rr.y = node.y
      this.add(rr)
    });
  }
}

export default Graph