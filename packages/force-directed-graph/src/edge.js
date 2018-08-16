import cax from 'cax'
export default function ({relation, font, color, strokeStyle, lineWidth, alpha}) {
  return {
    // node: `${i},${j}`,
    line: new cax.Graphics(),
    text: new cax.Text(relation, {
      font: font,
      color: color,
      baseline: 'middle',
      textAlign: 'center'
    }),
    init () {
      this.text.originX = this.text.getWidth() * 0.5
    },
    updateLine (v1 = {x: 0, y: 0}, v2 = {x: 0, y: 0}) {

      var parent = this.lineGroup
      parent.remove(this.line)
      this.line = new cax.Graphics()
      this.line
        .strokeStyle(strokeStyle)
        .lineWidth(lineWidth)
        .beginPath()
        .moveTo(v1.x, v1.y)
        .lineTo(v2.x, v2.y)
        .closePath()
        .stroke()

      this.line.alpha = alpha
      parent.add(this.line)
      // debugger
      // this.line.parent
      // this.line.opacity
    },
    updateText (x, y) {
      this.text.x = x
      this.text.y = y
    }
  }
}
