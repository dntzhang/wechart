import cax from 'cax'
import WordSphere from '../../src'
import { scaleLinear } from '../../../common/scale'

const fontScale = scaleLinear([0, 10], [12, 30])
const stage = new cax.Stage(800, 800, '#canvasCtn')

const ws = new WordSphere([
  { text: 'WECHART', value: '6' },
  { text: 'CAX', value: '12' },
  { text: '紅樓夢', value: '10' },
  { text: '賈寶玉', value: '3' },
  { text: '林黛玉', value: '3' },
  { text: '薛寶釵', value: '3' },
  { text: '王熙鳳', value: '3' },
  { text: '李紈', value: '3' },
  { text: '賈元春', value: '7' },
  { text: '賈迎春', value: '7' },
  { text: '賈探春', value: '3' },
  { text: '賈惜春', value: '7' },
  { text: '秦可卿', value: '3' },
  { text: '賈巧姐', value: '3' },
  { text: '史湘雲', value: '5' },
  { text: '妙玉', value: '3' },
  { text: '賈政', value: '2' },
  { text: '賈赦', value: '2' },
  { text: '賈璉', value: '6' },
  { text: '賈珍', value: '2' },
  { text: '賈環', value: '6' },
  { text: '賈母', value: '2' },
  { text: '王夫人', value: '2' },
  { text: '薛姨媽', value: '6' },
  { text: '尤氏', value: '2' },
  { text: '平兒', value: '2' },
  { text: '鴛鴦', value: '2' },
  { text: '襲人', value: '2' },
  { text: '晴雯', value: '2' },
  { text: '香菱', value: '2' },
  { text: '紫鵑', value: '2' },
  { text: '麝月', value: '2' },
  { text: '小紅', value: '2' },
  { text: '金釧', value: '2' },
  { text: '甄士隱', value: '0' },
  { text: '賈雨村', value: '0' }
], {
  color: function () {
    return colorLuminance(randomHexColor(), -0.2)
  },
  fontFamily: 'Microsoft Jhenghei',
  scale: fontScale
})

function colorLuminance (hex, lum) {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '')
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  lum = lum || 0

  // convert to decimal and change luminosity
  var rgb = '#', c, i
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16)
    c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16)
    rgb += ('00' + c).substr(c.length)
  }

  return rgb
}

function randomHexColor () { // 随机生成十六进制颜色
  return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6)
}

stage.add(ws)
ws.x = 100
ws.y = 100
cax.tick(() => {
  stage.update()
  ws.update()
})
