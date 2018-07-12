import font from './font'


class Axis extends THREE.Group {
    constructor(gridX, gridY, gridZ, gridSize, option) {

        super()
        this.gridX = gridX
        this.gridY = gridY
        this.gridZ = gridZ
        this.gridSize = gridSize

        this.option = option




        this.material = new THREE.LineBasicMaterial({ color: '#ccc' })
        this.position.x = gridX * gridSize / -2
        this.position.z = gridZ * gridSize / -2

        this.addXY()
        this.addXZ()
        this.addYZ()


        this.addTexts()

    }


    addText(text, x, y, z) {
        const gem = new THREE.TextGeometry(text + '', {
            font: font, //字体，默认是'helvetiker'，需对应引用的字体文件
            size: 1, //字号大小，一般为大写字母的高度
            height: 0.1
        });

        const mat = new THREE.MeshPhongMaterial({
            color: 0x000000,
        });

        gem.center()
        const textObj = new THREE.Mesh(gem, mat);


        textObj.position.x = x
        textObj.position.y = y
        textObj.position.z = z

        this.add(textObj)
    }

    addTexts() {
        for (let i = 0; i < this.gridX; (this.option.x.interval ? i += this.option.x.interval : i++)) {
            this.addText(this.option.x.from + i * this.option.x.gridValue, this.gridSize * i + this.gridSize / 2, this.gridSize / -2, this.gridSize * this.gridZ)
        }

        for (let i = 0; i < this.gridY + 1; (this.option.y.interval ? i += this.option.y.interval : i++)) {
            this.addText(this.option.y.from + i * this.option.y.gridValue, this.gridSize / -2, this.gridSize * i, this.gridSize * this.gridZ)
        }

        for (let i = this.gridZ - 1; i > -1; (this.option.z.interval ? i -= this.option.z.interval : i--)) {

            this.addText(this.option.z.from + (this.gridZ - i - 1) * this.option.z.gridValue, this.gridSize * this.gridX + this.gridSize / 2, 0, this.gridSize * i + this.gridSize / 2)
        }
    }


    addXY() {

        for (let i = 0; i < this.gridX + 1; i++) {

            let geometry = new THREE.Geometry()
            geometry.vertices.push(new THREE.Vector3(this.gridSize * i, 0, 0))
            geometry.vertices.push(new THREE.Vector3(this.gridSize * i, this.gridSize * this.gridY, 0))
            let line = new THREE.Line(geometry, this.material)

            this.add(line)

        }

        for (let j = 0; j < this.gridY + 1; j++) {

            let geometry = new THREE.Geometry()
            geometry.vertices.push(new THREE.Vector3(0, this.gridSize * j, 0))
            geometry.vertices.push(new THREE.Vector3(this.gridSize * this.gridX, this.gridSize * j, 0))
            let line = new THREE.Line(geometry, this.material)

            this.add(line)
        }
    }

    addXZ() {
        for (let i = 0; i < this.gridX + 1; i++) {

            let geometry = new THREE.Geometry()
            geometry.vertices.push(new THREE.Vector3(this.gridSize * i, 0, 0))
            geometry.vertices.push(new THREE.Vector3(this.gridSize * i, 0, this.gridSize * this.gridZ))
            let line = new THREE.Line(geometry, this.material)

            this.add(line)
        }

        for (let j = 0; j < this.gridZ + 1; j++) {

            let geometry = new THREE.Geometry()
            geometry.vertices.push(new THREE.Vector3(0, 0, this.gridSize * j))
            geometry.vertices.push(new THREE.Vector3(this.gridSize * this.gridX, 0, this.gridSize * j))
            let line = new THREE.Line(geometry, this.material)

            this.add(line)


        }
    }



    addYZ() {
        for (let i = 0; i < this.gridY + 1; i++) {

            let geometry = new THREE.Geometry()
            geometry.vertices.push(new THREE.Vector3(0, this.gridSize * i, 0))
            geometry.vertices.push(new THREE.Vector3(0, this.gridSize * i, this.gridSize * this.gridZ))
            let line = new THREE.Line(geometry, this.material)

            this.add(line)


        }

        for (let j = 0; j < this.gridZ + 1; j++) {

            let geometry = new THREE.Geometry()
            geometry.vertices.push(new THREE.Vector3(0, 0, this.gridSize * j))
            geometry.vertices.push(new THREE.Vector3(0, this.gridSize * this.gridX, this.gridSize * j))
            let line = new THREE.Line(geometry, this.material)

            this.add(line)
        }
    }

}


export default Axis