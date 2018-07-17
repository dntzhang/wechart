
import cax from 'cax'


const { Graphics, Group } = cax

class Clock extends Group {
  constructor (data, config, axisConfig) {
    super()

    this.graphics = new Graphics()

    this.add(this.graphics)

    this.graphics.x = 400
    this.graphics.y = 400
  }

  update(){
    this.nowDate = new Date()
    const second = this.nowDate.getSeconds()
    const minute = this.nowDate.getMinutes()
    const hour = this.nowDate.getHours()


    
   
    this.graphics.clear().beginPath();
    this.graphics.lineCap( "round")
    for (let i = 0; i < 60; i++) {
        if ((i + 5) % 5 === 0) {
            continue;
        }
        this.graphics.moveTo(Math.cos((i * 6) / 180 * Math.PI) * 350 , Math.sin((i * 6) / 180 * Math.PI) * 350 );
        this.graphics.lineTo(Math.cos((i * 6) / 180 * Math.PI) * 335 , Math.sin((i * 6) / 180 * Math.PI) * 335 );
    }

    this.graphics.closePath();
    // ctx.shadowOffsetX=-5;
    // ctx.shadowOffsetY=2;
    // ctx.shadowBlur = 20;
    // ctx.shadowColor = "#000";
    this.graphics.lineWidth ( 7)
    this.graphics.strokeStyle ( '#000')
    this.graphics.stroke();

    this.graphics.beginPath();
    this.graphics.lineCap ( "round")
    for (let i = 1; i < 13; i++) {
      this.graphics.moveTo(Math.cos((i * 30) / 180 * Math.PI) * 350 , -Math.sin((i * 30) / 180 * Math.PI) * 350 );
      this.graphics.lineTo(Math.cos((i * 30) / 180 * Math.PI) * 320 , -Math.sin((i * 30) / 180 * Math.PI) * 320 );
        // ctx.font = "50px Arial";
        // if (i > 9) {
        //     ctx.fillText(i, Math.cos((i * 30 - 90) / 180 * Math.PI) * 280 + 400 - 25, Math.sin((i * 30 - 90) / 180 * Math.PI) * 280 + 400 + 25);
        // } else {
        //     ctx.fillText(i, Math.cos((i * 30 - 90) / 180 * Math.PI) * 280 + 388, Math.sin((i * 30 - 90) / 180 * Math.PI) * 280 + 400 + 20);
        // }
    }
    this.graphics.lineWidth (11)
    this.graphics.strokeStyle ('#000')
    this.graphics.stroke();
    this.graphics.closePath();
  

    // ctx.beginPath();
    // ctx.font = "24px Arial";
    // ctx.fillText('LOVE LELE', 333, 540)
    // ctx.font = "18px Arial";
    // ctx.fillText('Rourou', 370, 570)
    // ctx.closePath();

    this.graphics.beginPath();
    this.graphics.moveTo(Math.cos((hour * 30 + minute / 2 - 90) / 180 * Math.PI) * 220 , Math.sin((hour * 30 + minute / 2 - 90) / 180 * Math.PI) * 220 );
    this.graphics.lineTo(0, 0);

    this.graphics.lineCap ("round")
    this.graphics.closePath();

    // ctx.shadowOffsetX = -5;
    // ctx.shadowBlur = 10;
    // ctx.shadowColor = "#000";


    this.graphics.lineWidth (24)
    this.graphics.strokeStyle ('#222')
    this.graphics.stroke();


    this.graphics.beginPath();
    this.graphics.moveTo(Math.cos((minute * 6 + second * 0.1 - 90) / 180 * Math.PI) * 300 , Math.sin((minute * 6 + second * 0.1 - 90) / 180 * Math.PI) * 300 );
    this.graphics.lineTo(0, 0);

    this.graphics.closePath();

    // ctx.shadowOffsetX = -5;
    // ctx.shadowBlur = 10;
    // ctx.shadowColor = "#000";

    this.graphics.lineWidth ( 13)
    this.graphics.strokeStyle ('#222')

    this.graphics.stroke();


    this.graphics.beginPath();
    this.graphics.moveTo(Math.cos((second * 6 - 90) / 180 * Math.PI) * 345 , Math.sin((second * 6 - 90) / 180 * Math.PI) * 345 );
    this.graphics.lineTo(0, 0);

    
    this.graphics.closePath();

    // ctx.shadowOffsetX = -5;
    // ctx.shadowBlur = 10;
    // ctx.shadowColor = "#000";

    this.graphics.lineWidth  (5)
    this.graphics.strokeStyle ('rgb(213, 153, 0)')
    this.graphics.stroke();

    this.graphics.closePath();


    this.graphics.arc(0, 0, 20, 0, Math.PI * 2);

    // ctx.shadowOffsetX = -5;
    // ctx.shadowBlur = 10;
    // ctx.shadowColor = "#000";

    this.graphics.fillStyle ( 'rgb(213, 153, 0)')
    this.graphics.fill();



  }
}

export default Clock





