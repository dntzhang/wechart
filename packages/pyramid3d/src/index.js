import font from './font'

class Pyramid extends THREE.Group {
  constructor (option) {
    super()

    this.option = option

    this.option.items.sort((a, b) => {
      return a.value - b.value
    })

    this.height = this.option.height / this.option.items.length

    let currentR = 0,
      nextR = this.height * option.gradient,
      currentHeight = 0

    this.option.items.forEach((item, index) => {
      var geometry = new THREE.CylinderGeometry(currentR, nextR, this.height, 32)

      var material = new THREE.MeshPhongMaterial({ color: item.color })
      var cylinder = new THREE.Mesh(geometry, material)
      cylinder.position.y -= currentHeight + this.option.interval * index

      this.add(cylinder)

      this.addText(this.option.text(item), (currentR + nextR) / 2, cylinder.position.y, 0)

      currentHeight += this.height
      currentR += this.height * option.gradient
      nextR += this.height * option.gradient
    })
  }

  addText (text, x, y, z) {
    const gem = new THREE.TextGeometry(text + '', {
      font: font, // 字体，默认是'helvetiker'，需对应引用的字体文件
      size: 2, // 字号大小，一般为大写字母的高度
      height: 0.1
    })

    const mat = new THREE.MeshPhongMaterial({
      color: 0x000000
    })

    // gem.left()
    const textObj = new THREE.Mesh(gem, mat)

    textObj.position.x = x
    textObj.position.y = y
    textObj.position.z = z

    this.add(textObj)
  }
}

export default Pyramid
