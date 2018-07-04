## Pie

Cax 渲染的精致响应式饼图

* [Simple Demo Preview](https://dntzhang.github.io/wechart/packages/pie/examples/simple/)

![Pie](./asset/pie.png)

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
        sectorGroup.forEach((item, index) => {
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

### 文字和文字走线

文字和走线分四种情况:

![](./asset/axis.png)

```js
if (angle >= 0 && angle < Math.PI / 2) {
        
} else if (angle >= Math.PI / 2 && angle < Math.PI) {
    
} else if (angle >= Math.PI && angle < Math.PI + Math.PI / 2) {
    
} else 

}
```

需要注意的是：

* 落在左边的文字的 x 坐标需要减去文件的宽度。 Cax 内置的 Text 可以使用 getWidth() 方法获取到文字的宽度
* 走线的第一根线角度也分两种情况，1、3象限平行，2、4象限平行，走线的第二根先角度都是平行于 y 轴

### 显示与交互兼容 PC 和 Mobile

从 javascript 里会发现 canvas 的宽高是 640*400：

``` js
const stage = new cax.Stage(640, 400, 'body')
```

就和我们平时使用两倍图一样，在移动端通过 media 把 canvas 变成一半宽度:

``` css
 @media screen and (max-width: 500px) {  
        canvas {
            width : 320px
        }
}
```

这个时候会出现一个问题！因为 cax 会把 canvas 上的事件过度给 cax 内置对象，事件发生的坐标因为 canvas 宽高的变化而变化了， 移动端点击事件触发位置不准确了！这个时候需要 scaleEventPoint 方法来校正坐标：

``` js
if (window.innerWidth <= 500) {
    stage.scaleEventPoint(0.5, 0.5)
}
```

搞定！

### 渐变和点击弹出和移除收缩实现

```js
function fadeIn(obj) {
  obj.alpha = 0
  To.get(obj).to({ alpha: 1 }, 600).start()
}

function fadeOut(obj) {
  obj.alpha = 1
  To.get(obj).to({ alpha: 0 }, 600).start()
}

function bounceIn(obj, from, to) {
  from = from || 0
  obj.from = from
  To.get(obj).to({ scaleX: to || 1, scaleY: to || 1 }, 300, cax.easing.bounceOut).start()
}

function bounceOut(obj, from, to) {
  from = from || 1
  obj.from = from
  To.get(obj).to({ scaleX: to || 0, scaleY: to || 0 }, 300, cax.easing.bounceOut).start()
}
```

基于 cax 内置的 to2to 动画引擎封装了四个方法。

### Tooltip 实现

```js
sector.hover(function (evt) {
    bounceIn(sector, 1, 1.1)
    tooltip.style.left = (evt.pureEvent.pageX + 5) + 'px'
    tooltip.style.top = (evt.pureEvent.pageY + 5) + 'px'
    tooltip.innerHTML = option.tooltip(data[index])
    tooltip.style.display = 'block'
}, function (evt) {
    bounceOut(sector, 1.1, 1)
    tooltip.style.display = 'none'
}, function (evt) {
    tooltip.style.left = (evt.pureEvent.pageX + 5) + 'px'
    tooltip.style.top = (evt.pureEvent.pageY + 5) + 'px'
})
```

Cax 内置对象拥有 `hover(over, out, move)` 方法来监听鼠标或者手指 over、out 和 move。

Tooltip 也是完全基于 DOM 来实现的，这样可以浮在 Canvas 外面，而不会限制在 Canvas 里面。