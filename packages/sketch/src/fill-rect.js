


const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

export default function fillRect(width, height, option) {
    option = Object.assign({
        gap: 5,
        randomRange: 4,
        curveRange: 35,
        fillAngle: -45,
        fillRepeat: 3,
        fillWidth: 1,
        fillStyle: 'black'
    }, option)
    canvas.width = width
    canvas.height = height
    ctx.clearRect(0, 0, width, height)
    const maxLen = Math.sqrt(width * width + height * height)
    const count = maxLen / option.gap

    ctx.save()
    ctx.translate(width / 2, height / 2)
    ctx.lineWidth = option.fillWidth
    ctx.strokeStyle = option.fillStyle
    for (let j = 0; j < option.fillRepeat; j++) {
        console.log(1)

        const ba = option.fillAngle * Math.PI / 180
        const ea = (option.fillAngle + 180) * Math.PI / 180
        const ca = (option.fillAngle + 90) * Math.PI / 180
        ctx.beginPath()
        for (let i = -Math.ceil(count / 2); i < Math.ceil(count / 2); i++) {
            let x1 = i * option.gap * Math.cos(ca) + maxLen / 2 * Math.cos(ba)
            let y1 = i * option.gap * Math.sin(ca) + maxLen / 2 * Math.sin(ba)
            let x2 = i * option.gap * Math.cos(ca) + maxLen / 2 * Math.cos(ea)
            let y2 = i * option.gap * Math.sin(ca) + maxLen / 2 * Math.sin(ea)
            ctx.moveTo.apply(ctx, _shake(x1, y1, option.randomRange))
            let qp = _shake(x2, y2, option.randomRange)
            let cp = _shake((x1 + x2) / 2, (y1 + y2) / 2, option.curveRange)
            ctx.quadraticCurveTo(cp[0], cp[1], qp[0], qp[1])
        }

        ctx.stroke()

    }
    ctx.restore()

 return canvas.toDataURL()
}

function _shake(x, y, randomRange) {
    const r = Math.random() * randomRange
    const a = Math.random() * 360 * Math.PI / 180
    return [x + r * Math.cos(a), y + r * Math.sin(a)]
}
