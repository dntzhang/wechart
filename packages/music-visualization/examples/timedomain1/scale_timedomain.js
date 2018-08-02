import cax from 'cax'
export default class ScaleTimeDoamin extends cax.Group {
  constructor (tex, dir = 'horizontal', slice = 123) {
    super()
    var [imgW, imgH] = [tex.width, tex.height]

    this.dir = dir
    this.slice = this.dir !== 'horizontal' ? Math.max(imgW, slice) : Math.max(imgH, slice)

    var val = this.dir !== 'horizontal' ? imgW : imgH

    var w = this.dir !== 'horizontal' ? imgW / slice : imgW

    var h = this.dir !== 'horizontal' ? imgH : imgH / slice

    this.bitmaps = Array.from({length: this.slice}, (v, i) => {
      const bitmap = new cax.Bitmap(tex)
      bitmap.originX = imgW * 0.5
      bitmap.originY = imgH * 0.5
      const clipPath = new cax.Graphics()

      this.dir !== 'horizontal' ? clipPath.rect(val * i / this.slice, 0, w, h) : clipPath.rect(0, val * i / slice, w, h)

      bitmap.clip(clipPath)
      this.add(bitmap)
      return bitmap
    })
  }
  update (timeDomainData) {
    Array.from(timeDomainData, (v, i) => {
      // console.log(v)
      var bitmap = this.bitmaps[i / timeDomainData.length * this.slice | 0]
      // console.log(bitmap);
      // return
      this.dir !== 'horizontal' ? (bitmap.scaleY = v / 128) : (bitmap.scaleX = v / 128)
    })
  }
}
