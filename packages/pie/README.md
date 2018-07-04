## Pie

Cax 渲染的精致响应式饼图

* [Simple Demo Preview](https://dntzhang.github.io/wechart/packages/pie/examples/simple/)

## 快速开始

创建饼图实例:

```js
const pie = new Pie([
    { name: 'WeChat', value: 10 },
    { name: 'Canvas', value: 15 },
    { name: 'Cax', value: 23 },
    { name: 'Tencent', value: 7 },
    { name: 'Wepay', value: 22 }
], {
        processing: (item) => { return item.value },
        x: 200,
        y: 200,
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
```

添加到舞台:

```js
const stage = new cax.Stage(640, 400, 'body')
stage.add(pie)
stage.update()
```

显示和隐藏:

```js
pie.show()
pie.hide()
```

## 实现原理

看到上面的 DEMO 可以会有几方面技术需要讲解：

* Cax 扇形绘制
* 展开和收缩动画实现
* 文字和文字走线显示在对应扇形的中间
* 显示兼容 PC 和 Mobile 
* 交互兼容 PC 和 Mobile 
* 渐变和点击弹出和移除收缩实现
* Tooltip 实现

### 扇形绘制

Cax 内置 Graphics，可以使用连缀 Canvas API 的方式绘制图形:

```js
const sector = new cax.Graphics()
sector
    .beginPath()
    .moveTo(0, 0)
    .arc(0, 0, 30, 0, Math.PI/2)
    .closePath()
    .fillStyle('green')
    .fill()
    .strokeStyle('red')
    .lineWidth(2)
    .stroke()

stage.add(sector)
```

这里假设你已经创建好了舞台。效果如下:

![sector.png](./asset/sector.png)

所以一个饼图就是把圆分成若干个扇形。怎么分？ arc 方法传入动态数据：

```js
let current = 0

data.forEach((item, index) => {
    const sector = new cax.Graphics()
    sector
        .beginPath()
        .moveTo(0, 0)
        .arc(0, 0, 30, current, current += Math.PI * 2 * item.value / totalValue)
        .closePath()
        .fillStyle('green')
        .fill()
        .strokeStyle('red')
        .lineWidth(2)
        .stroke()
})
```

其中 totalValue 为所有 item.value 的和。可以看到上面是平分一个圆。那么怎么平分一个扇形？能运动平分的角度吗？

### 展开和收缩动画实现

看这行代码:

``` js
.arc(0, 0, 30, current, current += Math.PI * 2 * item.value / totalValue)
```

把  Math.PI * 2  改成 totalAngle 动态变量就可以！

``` js
let totalAngle = 0
...
...
.arc(0, 0, 30, current, current += totalAngle * item.value / totalValue)
```

运动 totalAngle 并且进行重绘:

```js
 cax.To.get(option)
      .to({ totalAngle: Math.PI * 2 }, option.duration, option.easing)
      .progress((object) => {
        current = option.begin
        sectors.forEach((item, index) => {
          item
            .clear()
            .beginPath()
            .moveTo(0, 0)
            .arc(0, 0, r, current, current += object.totalAngle * option.processing(item) / totalValue)
            .closePath()
            .fillStyle(option.color(index))
            .fill()
            .strokeStyle(option.circleColor)
            .lineWidth(2)
            .stroke()
            .closePath()
        })
      })
    ...
    ...
    ...
```

使用 cax 内置的 to2to 运动能力。这里需要提醒的是，progress 方法会不断地执行，为了防止 sector 的 graphics path 不断叠加，在循环执行的代码里一定要调用 clear 来清除 graphics 的以前的 Canvas 绘制命令。