export default class Vector {
  constructor (x, y) {
    this.x = x
    this.y = y
    this.z = 0
  }
  sub (vec) {
    return new Vector(this.x - vec.x, this.y - vec.y)
  }
  multiplyScalar (s) {
    return new Vector(this.x * s, this.y * s)
  }
  add (vec) {
    return new Vector(this.x + vec.x, this.y + vec.y)
  }
  get length () {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
}
