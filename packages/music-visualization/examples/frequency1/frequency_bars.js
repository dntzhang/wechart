import cax from 'cax'
import stage from './stage'

class FrequencyBars extends cax.Group {
  constructor (num, gap, origin = 'center') {
    super()
    this.rects = []
    this.num = num
    var w = (stage.width - gap * (num - 1)) / num
    Array.from({length: num}, (v, i) => {
      var rect = new cax.Rect(w, 50, {
        fillStyle: 'white'
      })
      rect.alpha = 0.666
      rect.scaleY = 0.1
      this.add(rect)
      this.rects.push(rect)
      rect.x = w * i + gap * i
      switch (origin) {
        case 'top':
          rect.originY = 0
          break
        case 'bottom':
          rect.originY = rect.height
      }
    })
  }
  update (frequencyData) {
    let pFrequency = frequencyData.length / this.num | 0
    let frequencyStep = 0
    this.rects.forEach((o, i) => {
      frequencyStep += pFrequency
      var v = Math.abs(frequencyData[frequencyStep]) / 128
      o.scaleY = Math.max(0.1, v * 0.56)
      // console.log(v)
    })
  }
}
export default FrequencyBars
