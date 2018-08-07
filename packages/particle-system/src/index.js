import cax from 'cax'
import Particle from './particle'

class ParticleSystem extends cax.Group {
  constructor(option) {
    super()

    this.speedRange = option.speedRange
    this.angleRange = option.angleRange
    this.emitRange = option.emitRange //支持圆形和方形
    this.gravity = option.gravity || { x: 0, y: 0 }
    this.filter = option.filter

    this.emitCount = option.emitCount || 1
    this.maxCount = option.maxCount || 100
    this.emitX = option.emitX || 0
    this.emitY = option.emitY || 0
    this.texture = option.texture
    this.option = option
  }

  emit() {
    const angle = randomInt(this.angleRange[0], this.angleRange[1]) * Math.PI / 180
    const speed = randomInt(this.speedRange[0], this.speedRange[1])
    const hw = this.emitRange[0] / 2
    const hh = this.emitRange[1] / 2
    const particle = new Particle({
      x: this.emitX+ randomInt(-hw, hw),
      y:  this.emitY+randomInt(-hh, hh),
      velocity: { x: speed * Math.cos(angle), y: speed * Math.sin(angle) },
      texture: this.texture,
      acceleration: this.gravity,
      scale:this.option.scale
    })
    this.add(particle);
  }

  update() {

    let len = this.children.length;
    if (len < this.maxCount) {
      for (let k = 0; k < this.emitCount; k++) {
        this.emit();
      }
    }
    for (let i = 0; i < len; i++) {
      const item = this.children[i];
      if (item.isVisible()) {
        item.update();
      } else {
        this.remove(item);
        i--;
        len--;
      }
    }

  }
}

function randomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

export default ParticleSystem