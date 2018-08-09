import cax from 'cax'

class Particle extends cax.Group {
  constructor(option) {
    super()
    this.x = option.x||0
    this.y = option.y||0
    this.rotation = option.rotation || 0
    this.velocity = option.velocity
    this.acceleration = option.acceleration || 0
    this.rotatingSpeed = option.rotatingSpeed || 0
    this.rotatingAcceleration = option.rotatingAcceleration || 0
    this.hideSpeed = option.hideSpeed || .01
    this.zoomSpeed = option.hideSpeed || .01
    this.scale = option.scale || 1
    this.texture = new cax.Bitmap(option.texture)
    this.texture.originX = option.texture.width/2
    this.texture.originY = option.texture.height/2
    this.add(this.texture)
    this.fixed = true
    this.scaleX = this.scaleY = option.scale 
  }

  update() {

    this.velocity.x += this.acceleration.x
    this.velocity.y += this.acceleration.y
    this.x += this.velocity.x
    this.y += this.velocity.y

    this.rotatingSpeed += this.rotatingAcceleration
    this.rotation += this.rotatingSpeed

    this.alpha -= this.hideSpeed
    this.alpha = this.alpha

    this.scale -= this.zoomSpeed
    if (this.scale >= 0) {
      this.scaleX = this.scaleY = this.scale
    }

  }
}

export default Particle