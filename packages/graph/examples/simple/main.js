import cax from 'cax'


const stage = new cax.Stage(2000, 2000, 'body')
const grahpGroup = new cax.Group()
const g = new dagre.graphlib.Graph()

function init(nodeCount) {
    // Set an object for the graph label
    g.setGraph({
        // ranksep: 80,
        // nodesep: 10
    });

    // Default to assigning a new object as a label for each new edge.
    g.setDefaultEdgeLabel(function () { return {}; });

    for (let i = 0; i < nodeCount; i++) {
        g.setNode("node" + i, { label: "node" + i, width: 50, height: 50 });
    }

    for (let i = 0; i < nodeCount; i++) {
        g.setEdge("node" + cax.util.randomInt(0, nodeCount - 1), "node" + cax.util.randomInt(0, nodeCount - 1));
    }

    dagre.layout(g);
}

function render() {

    g.edges().forEach(function (e) {
        const path = g.edge(e).points
        const ap = new cax.ArrowPath(path)
        grahpGroup.add(ap)
    });

    g.nodes().forEach(function (v) {

        const node = g.node(v)

        const rr = new cax.Button({
            width: node.width,
            height: node.height,
            borderRadius: 5,
            color: 'white',
            text: v,
            textX: 3,
            textY: -2,
            borderColor: '#8899AB',
            backgroundColor: '#123456'
        })

        rr.originX = node.width / 2
        rr.originY = node.height / 2
        rr.x = node.x
        rr.y = node.y
        grahpGroup.add(rr)
    });

    grahpGroup.x = 100
    grahpGroup.y = 100

    stage.add(grahpGroup)
    stage.update()
}


init(20)
render()