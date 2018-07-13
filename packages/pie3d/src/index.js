import font from './font'

class Pie extends THREE.Group {
  constructor(option) {

    super()



    this.option = Object.assign({
      intervalAngle: 0,
      interval: 0.4,
      height: 3
    }, option)


    let sum = 0

    this.totalInterval = this.option.intervalAngle * this.option.items.length

    this.option.items.forEach(item => {
      sum += item.value
    });

    this.totalAngle = 360 - this.totalInterval

    let current = Math.random() * 360
    for (let i = 0, len = this.option.items.length; i < len; i++) {
      let item = this.option.items[i]

      let geometry = this.sector(5, 15, current, current + item.value / sum * this.totalAngle, this.option.height)
      //{color: color[i],opacity:1,transparent:true}
      let mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({ color: item.color, opacity: 1, transparent: true }))


      let center = (current + current + item.value / sum * this.totalAngle) / 2 * Math.PI / 180
      mesh.position.x += this.option.interval * Math.cos(center)
      mesh.position.y += this.option.interval * Math.sin(center)
      this.add(mesh)

      current += item.value / sum * this.totalAngle
      current += this.option.intervalAngle
    }

    this.rotation.x = - Math.PI / 3

  }

  sector(inRadius, outRadius, begin, end, height) {
    var shape = new THREE.Shape();
    if (inRadius == 0) {
      shape.moveTo(0, 0);

    } else {
      shape.moveTo(inRadius, 0);
      shape.absarc(0, 0, inRadius, begin / 180 * Math.PI, end / 180 * Math.PI, false);
    }

    shape.lineTo(outRadius * Math.cos(end / 180 * Math.PI), outRadius * Math.sin(end / 180 * Math.PI));

    shape.absarc(0, 0, outRadius, end / 180 * Math.PI, begin / 180 * Math.PI, true);
    shape.lineTo(inRadius * Math.cos(begin / 180 * Math.PI), inRadius * Math.sin(begin / 180 * Math.PI));

    return new THREE.ExtrudeGeometry(shape, { amount: height, bevelEnabled: false, steps: 1, });

  }


  addText(text, x, y, z) {
    const gem = new THREE.TextGeometry(text + '', {
      font: font, //字体，默认是'helvetiker'，需对应引用的字体文件
      size: 2, //字号大小，一般为大写字母的高度
      height: 0.1
    });

    const mat = new THREE.MeshPhongMaterial({
      color: 0x000000,
    });

    //gem.left()
    const textObj = new THREE.Mesh(gem, mat);

    textObj.position.x = x
    textObj.position.y = y
    textObj.position.z = z

    this.add(textObj)
  }
}

export default Pie