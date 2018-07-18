
import cax from 'cax'

const { TWEEN, Text, Graphics, Circle, Group, To } = cax

class WordSphere extends Group {
  constructor(data, option) {
    super()

    this.data = data
    this.option = option


    this.center = { x: 300, y: 300, z: 0 }
    this.cameraPosition = { x: 300, y: 300, z: 500 }
    this.r = 250
    this.distance = 300
    this.positions = []
    this.rdPositions = []
    this.stepAngle = Math.PI / 360


    this.randomPoints()
    this.createTexts()


  }


  randomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  randomPoints() {
    const cos = Math.cos
    const sin = Math.sin

    let x = this.r,
    y = 0,
    z = 0, xtmp, ytmp, ztmp, angle, j = -1, i = 0
    for (; i < this.data.length; i++) {

      angle = this.randomNumber(0, 360) * Math.PI / 180
      xtmp = cos(angle) * x - sin(angle) * y
      ytmp = sin(angle) * x + cos(angle) * y
      x = xtmp
      y = ytmp



      angle = this.randomNumber(0, 360) * Math.PI / 180
      xtmp = cos(angle) * x - sin(angle) * z
      ztmp = sin(angle) * x + cos(angle) * z
      x = xtmp
      z = ztmp

      angle = this.randomNumber(0, 360) * Math.PI / 180
      ytmp = cos(angle) * y - sin(angle) * z
      ztmp = sin(angle) * y + cos(angle) * z
      y = ytmp
      z = ztmp

      this.positions.push({ x: x, y: y, z: z });
      this.rdPositions.push({ x: x, y: y, z: z });

    }
  }


  createTexts() {


    this.data.forEach((item, index) => {
  
      let text = new Text(item.text, {
        color: this.option.color(index),
        font: this.option.scale(item.value) +'px ' + this.option.fontFamily||'Arial'
      })

      this.transform(text, index)
      this.add(text)
    })



  }

  render() {
    this.children.forEach((child, index) => {
      // console.log(index)
      this.transform(child, index);
    })
  }



  transform(text, i) {

    const z = this.positions[i].z;
    text.x = this.center.x + this.rdPositions[i].x;
    text.y = this.center.x + this.rdPositions[i].y;
    //projection
   // text.scaleX = text.scaleY = 0.5 * this.distance / Math.abs(this.cameraPosition.z - z);
    text.alpha = 0.1 + 1 - (this.r - z) / (2 * this.r);

  }

  projection() {

    var index = 0,
      len = this.positions.length;
    for (; index < len; index++) {
      var p = this.positions[index];
      var rp = this.rdPositions[index];
      //perspective projection
      //rp.x = p.x * this.distance / Math.abs(camera_position.z - p.z);
      //rp.y =  p.y * this.distance / Math.abs(camera_position.z - p.z);
      //orthogonal projection
      rp.x = p.x;
      rp.y = p.y;
    }
  }

  rotate() {
    let cx,
      z,
      i = 0,
      positions = this.positions,
      len = positions.length,
      stepAngle = this.stepAngle
    for (; i < len; i++) {
      cx = positions[i].x;
      z = positions[i].z;
      positions[i].x = positions[i].x * Math.cos(stepAngle) - positions[i].z * Math.sin(stepAngle);
      positions[i].z = positions[i].z * Math.cos(stepAngle) + cx * Math.sin(stepAngle);
    }
  }

  update() {
    this.rotate()
    this.projection()
    this.render()
  }
}

export default WordSphere