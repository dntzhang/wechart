import cax from 'cax'
import Graph from '../../src'

const stage = new cax.Stage(2000, 2000, 'body')

function randomData(nodeCount) {
    const nodes = []
    for (let i = 0; i < nodeCount; i++) {
        nodes.push({ id: i, name: 'node' + i })
    }

    const edges = []
    for (let i = 0; i < nodeCount; i++) {
        edges.push([cax.util.randomInt(0, nodeCount - 1), cax.util.randomInt(0, nodeCount - 1)])
    }

    return { nodes, edges }
}
const graph = new Graph(randomData(20))

graph.x = 100
graph.y = 100

stage.add(graph)
stage.update()

