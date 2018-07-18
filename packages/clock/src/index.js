
import cax from 'cax'


const { Graphics, Group, Text } = cax

class Clock extends Group {
  constructor(option) {
    super()

    this.option = Object.assign({
      fontSize: 50,
      r: 60,
      textA: 'POWERED BY CAX',
      textB: 'dntzhang & wechart'

    }, option)
    this.graphics = new Graphics()
    this.minuteGraphics = new Graphics()
    this.hourGraphics = new Graphics()


    this.secondGraphics = new Graphics()

    this.drawBg()
    this.add(this.graphics, this.minuteGraphics, this.hourGraphics, this.secondGraphics)

    this.x = 400
    this.y = 400

    this.scaleX = this.scaleY = 0.5

  }

  update() {
    this.nowDate = new Date()
    const second = this.nowDate.getSeconds()
    const minute = this.nowDate.getMinutes()


    this.drawHour(minute, this.nowDate.getHours())
    this.drawMinute(minute, second)
    this.drawSecond(second)


  }

  drawBg() {
    const r = this.option.r
    this.graphics.clear().beginPath();
    this.graphics.lineCap("round")
    for (let i = 0; i < 60; i++) {
      if ((i + 5) % 5 === 0) {
        continue;
      }
      this.graphics.moveTo(Math.cos((i * 6) / 180 * Math.PI) * 350, Math.sin((i * 6) / 180 * Math.PI) * 350);
      this.graphics.lineTo(Math.cos((i * 6) / 180 * Math.PI) * 335, Math.sin((i * 6) / 180 * Math.PI) * 335);
    }

    this.graphics.closePath();

    this.graphics.lineWidth(7)
    this.graphics.strokeStyle('#000')
    this.graphics.stroke();

    this.graphics.beginPath();
    this.graphics.lineCap("round")
    for (let i = 1; i < 13; i++) {
      this.graphics.moveTo(Math.cos((i * 30) / 180 * Math.PI) * 350, -Math.sin((i * 30) / 180 * Math.PI) * 350);
      this.graphics.lineTo(Math.cos((i * 30) / 180 * Math.PI) * 320, -Math.sin((i * 30) / 180 * Math.PI) * 320);
    }
    this.graphics.lineWidth(11)
    this.graphics.strokeStyle('#000')
    this.graphics.stroke();
    this.graphics.closePath();


    for (let i = 1; i < 13; i++) {
      let text = new Text(i, {
        color: 'black',
        font: this.option.fontSize + "px Arial"
      })
      if (i > 9) {
        text.x = Math.cos((i * 30 - 90) / 180 * Math.PI) * 280 - 25
        text.y = Math.sin((i * 30 - 90) / 180 * Math.PI) * 280 - 25
      } else {
        text.x = Math.cos((i * 30 - 90) / 180 * Math.PI) * 280 - 12
        text.y = Math.sin((i * 30 - 90) / 180 * Math.PI) * 280 - 25

      }
      this.add(text)
    }

    if (this.option.textA) {
      let text = new Text(this.option.textA, {
        color: 'black',
        font: "24px Arial"
      })
      text.x = text.getWidth() / 2 * -1
      text.y = 130
      this.add(text)
    }

    if (this.option.textB) {
      let text = new Text(this.option.textB, {
        color: 'black',
        font: "18px Arial"
      })

      text.x = text.getWidth() / 2 * -1
      text.y = 180
      this.add(text)
    }

  }


  drawSecond(second) {

    this.secondGraphics.clear().beginPath();
    this.secondGraphics.moveTo(Math.cos((second * 6 - 90) / 180 * Math.PI) * 345, Math.sin((second * 6 - 90) / 180 * Math.PI) * 345);
    this.secondGraphics.lineTo(0, 0);


    this.secondGraphics.closePath();


    this.secondGraphics.shadow = {
      offsetX: -5,
      blur: 10,
      color: 'black'
    }

    this.secondGraphics.lineWidth(5)
    this.secondGraphics.strokeStyle('rgb(213, 153, 0)')
    this.secondGraphics.stroke();

    this.secondGraphics.closePath();


    this.secondGraphics.arc(0, 0, 20, 0, Math.PI * 2);
    this.secondGraphics.fillStyle('rgb(213, 153, 0)')
    this.secondGraphics.fill();
  }
  drawMinute(minute, second) {


    this.minuteGraphics.clear().beginPath();
    this.minuteGraphics.moveTo(Math.cos((minute * 6 + second * 0.1 - 90) / 180 * Math.PI) * 300, Math.sin((minute * 6 + second * 0.1 - 90) / 180 * Math.PI) * 300);
    this.minuteGraphics.lineTo(0, 0);

    this.minuteGraphics.closePath();

    this.minuteGraphics.shadow = {
      offsetX: -5,
      blur: 10,
      color: 'black'
    }

    this.minuteGraphics.lineWidth(13)
    this.minuteGraphics.strokeStyle('#222')

    this.minuteGraphics.stroke();

  }

  drawHour(minute, hour) {
    this.hourGraphics.clear().beginPath();
    this.hourGraphics.moveTo(Math.cos((hour * 30 + minute / 2 - 90) / 180 * Math.PI) * 220, Math.sin((hour * 30 + minute / 2 - 90) / 180 * Math.PI) * 220);
    this.hourGraphics.lineTo(0, 0);

    this.hourGraphics.lineCap("round")
    this.hourGraphics.closePath();

    this.hourGraphics.shadow = {
      offsetX: -5,
      blur: 10,
      color: 'black'
    }


    this.hourGraphics.lineWidth(24)
    this.hourGraphics.strokeStyle('#222')
    this.hourGraphics.stroke();



  }
}

export default Clock





