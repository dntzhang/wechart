import cax from 'cax'
import Pie from '../../src/index'

const stage = new cax.Stage(640, 400, 'body')
const rd = cax.util.randomInt

const pie = new Pie([
    { name: 'WeChat', value: rd(10, 30) },
    { name: 'Canvas', value: rd(10, 30) },
    { name: 'Cax', value: rd(10, 30) },
    { name: 'Tencent', value: rd(10, 30) },
    { name: 'Wepay', value: rd(10, 30) }
], {
        processing: (item) => { return item.value },
        x: stage.width / 2,
        y: stage.height / 2,
        r: 160,
        color: (index) => {
            return ['#4BC0C0', '#FF6485', '#FFA07A', '#ADACB9', '#A37AC1'][index]
        },
        circleColor: 'white',
        duration: 1000,
        label: (item) => {
            return item.name
        },
        easing: cax.easing.bounceOut,
        textOffsetY: -12,
        font: '20px Arial',
        tooltip: (item) => {
            return item.name + '<br/>' + item.value
        },
        textColor: (index) => {
            return ['#4BC0C0', '#FF6485', '#FFA07A', '#ADACB9', '#A37AC1'][index]
        }
    }
)


stage.add(pie)

if (window.innerWidth <= 500) {
    stage.scaleEventPoint(0.5, 0.5)
}

cax.tick(() => {
    stage.update()
})


