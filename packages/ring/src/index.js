
import cax from 'cax'

const { Graphics, Group, Text } = cax


class Ring extends Group {

	constructor(data, option) {
		super()

		this.option = Object.assign({
			fontSize: 50,
			r: 60,

		}, option)

		this.graphics = new Graphics()

		this.drawBg()

		this.add(this.graphics)

		this.x = 400
		this.y = 400

		this.scaleX = this.scaleY = 0.5
	}

	update () {
	    
  	}

  	drawBg () {

  		const r = this.option.r
	    this.graphics.clear().beginPath()
	    this.graphics.lineCap('round')

		for (let i = 30; i < 60; i++) {
			if ((i + 5) % 5 === 0) {
				continue
			}
			this.graphics.moveTo(Math.cos((i * 6) / 180 * Math.PI) * 350, Math.sin((i * 6) / 180 * Math.PI) * 350)
			this.graphics.lineTo(Math.cos((i * 6) / 180 * Math.PI) * 335, Math.sin((i * 6) / 180 * Math.PI) * 335)
		}

		this.graphics.closePath()

		this.graphics.lineWidth(7)
		this.graphics.strokeStyle('#000')
		this.graphics.stroke()

		this.graphics.beginPath()
		this.graphics.lineCap('round')
		for (let i = 0; i < 7; i++) {
			this.graphics.moveTo(Math.cos((i * 30) / 180 * Math.PI) * 350, -Math.sin((i * 30) / 180 * Math.PI) * 350)
			this.graphics.lineTo(Math.cos((i * 30) / 180 * Math.PI) * 320, -Math.sin((i * 30) / 180 * Math.PI) * 320)
		}
		this.graphics.lineWidth(11)
		this.graphics.strokeStyle('#000')
		this.graphics.stroke()
		this.graphics.closePath()

  	}
}

export default Ring