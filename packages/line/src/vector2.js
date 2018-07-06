class Vector2 {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  normalize() {
    const inv = 1 / this.length()
    return new Vector2(this.x * inv, this.y * inv)
  }

  add(v) {
    return new Vector2(this.x + v.x, this.y + v.y)
  }

  multiply(f) {
    return new Vector2(this.x * f, this.y * f)
  }

  dot(v) {
    return this.x * v.x + this.y * v.y
  }
  
  angle(v) {
    return Math.acos(this.dot(v) / (this.length() * v.length())) * 180 / Math.PI
  }
}


export default Vector2