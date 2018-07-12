var Axis = function (gridX, gridY, gridZ, gridSize) {
    this.gridX = gridX
    this.gridY = gridY
    this.gridZ = gridZ
    this.gridSize = gridSize


    this.obj3d = new THREE.Group()


    this.material = new THREE.LineBasicMaterial({ color: '#ccc' })
    this.obj3d.position.x = gridX * gridSize / -2
    this.obj3d.position.z = gridZ * gridSize / -2

    this.addXY()
    this.addXZ()
    this.addYZ()

    //this.addXText()


}


Axis.prototype = {
    addXY() {

        for (var i = 0; i < this.gridX + 1; i++) {

            var geometry = new THREE.Geometry()
            geometry.vertices.push(new THREE.Vector3(this.gridSize * i, 0, 0))
            geometry.vertices.push(new THREE.Vector3(this.gridSize * i, this.gridSize * this.gridY, 0))
            var line = new THREE.Line(geometry, this.material)

            this.obj3d.add(line)
        }

        for (var j = 0; j < this.gridY + 1; j++) {

            var geometry = new THREE.Geometry()
            geometry.vertices.push(new THREE.Vector3(0, this.gridSize * j, 0))
            geometry.vertices.push(new THREE.Vector3(this.gridSize * this.gridX, this.gridSize * j, 0))
            var line = new THREE.Line(geometry, this.material)

            this.obj3d.add(line)
        }
    },

    addXZ() {
        for (var i = 0; i < this.gridX + 1; i++) {

            var geometry = new THREE.Geometry()
            geometry.vertices.push(new THREE.Vector3(this.gridSize * i, 0, 0))
            geometry.vertices.push(new THREE.Vector3(this.gridSize * i, 0, this.gridSize * this.gridZ))
            var line = new THREE.Line(geometry, this.material)

            this.obj3d.add(line)
        }

        for (var j = 0; j < this.gridZ + 1; j++) {

            var geometry = new THREE.Geometry()
            geometry.vertices.push(new THREE.Vector3(0, 0, this.gridSize * j))
            geometry.vertices.push(new THREE.Vector3(this.gridSize * this.gridX, 0, this.gridSize * j))
            var line = new THREE.Line(geometry, this.material)

            this.obj3d.add(line)
        }
    }

    ,

    addYZ() {
        for (var i = 0; i < this.gridY + 1; i++) {

            var geometry = new THREE.Geometry()
            geometry.vertices.push(new THREE.Vector3(0, this.gridSize * i, 0))
            geometry.vertices.push(new THREE.Vector3(0, this.gridSize * i, this.gridSize * this.gridZ))
            var line = new THREE.Line(geometry, this.material)

            this.obj3d.add(line)
        }

        for (var j = 0; j < this.gridZ + 1; j++) {

            var geometry = new THREE.Geometry()
            geometry.vertices.push(new THREE.Vector3(0, 0, this.gridSize * j))
            geometry.vertices.push(new THREE.Vector3(0, this.gridSize * this.gridX, this.gridSize * j))
            var line = new THREE.Line(geometry, this.material)

            this.obj3d.add(line)
        }
    }

}

export default Axis