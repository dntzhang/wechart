import Axis from '../../axis3d/src/index'

class Bar extends THREE.Group {
  constructor (data, option) {
    super()
    const xLen = data[0].length
    const zLen = data.length
    const axis = new Axis(data[0].length, option.yGrid, data.length, option.gridSize, option.axis)
    this.add(axis)

    this.topValue = option.axis.y.from

    for (let k = 0; k < option.yGrid; k++) {
      this.topValue += option.axis.y.gridValue
    }

    for (var i = 0; i < zLen; i++) {
      for (var j = 0; j < xLen; j++) {
        let height = option.gridSize * option.yGrid * (data[i][j] - option.axis.y.from) / (this.topValue - option.axis.y.from)
        if (height > 0) {
          var material = new THREE.MeshLambertMaterial({
            color: randomHexColor()
          })

          let geometry = new THREE.BoxGeometry(option.gridSize, height, option.gridSize)
          var cube = new THREE.Mesh(geometry, material)

          cube.position.y = height / 2

          // 0,0,0在前表面左下角
          cube.position.x = 0 - option.gridSize * xLen / 2 + option.gridSize / 2 + j * option.gridSize
          cube.position.z = 0 + option.gridSize * zLen / 2 - option.gridSize / 2 - i * option.gridSize

          this.add(cube)
        }
      }
    }
  }
}

function randomHexColor () {
  var hex = Math.floor(Math.random() * 16777216).toString(16)
  while (hex.length < 6) {
    hex = '0' + hex
  }
  return '#' + hex
}

export default Bar
