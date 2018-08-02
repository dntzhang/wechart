import cax from 'cax'
import stage from './stage'
class Variant extends cax.Group {
  constructor (r, fillStyle) {
    super()
    this.rect = new cax.Rect(r * 2, r * 2, {fillStyle})
    this.rect.originX = r
    this.rect.originY = r
    this.add(this.rect)
    this.cir = new cax.Circle(r, {fillStyle})
    this.add(this.cir)
    this.rect.visible = this.cir.visible = false
    this.usePolygon('rect')
  }
  usePolygon (s) {
    this.rect.visible = this.cir.visible = false
    this[s].visible = true
  }
}
export default class Variants extends cax.Group {
  constructor (ars, r = 12, gap = 5, co = 'pink') {
    super()
    this.ars = ars
    this.variants = []
    this.h = 160
    var [ceil, row] = [
      Math.ceil(stage.width / (r * 2 + gap * 1)),
      Math.ceil(stage.height / (r * 2 + gap * 1))
    ]

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < ceil; j++) {
        // let variant = new Variant(r, 'pink')
        let variant = new Variant(r, `hsl(${this.h},100%,70%)`)
        variant.x = j * r * 2 + gap * 2 * j
        variant.y = i * r * 2 + gap * 2 * i
        this.add(variant)
        this.variants.push(variant)
      }
    }
  }

  update (frequencyData, avg) {
    this.h += 0.1
    this.variants.forEach((o, i) => {
      o.scaleY = o.scaleX = 1 + avg * 0.008
      o.rotation += 0.8
      // 'hsl(160,100%,50%)'
      o.children.forEach(polygon => {
        polygon.option.fillStyle = `hsl(${this.h},100%,70%)`
      })
    })
  }
  usePolygon (s, fn) {
    this.variants.forEach((o, i) => {
      o.usePolygon(s)
    })
    fn && fn.call(this)
  }
}
