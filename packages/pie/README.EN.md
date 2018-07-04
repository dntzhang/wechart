## Pie

Pie chart by cax

* [Simple Demo Preview](https://dntzhang.github.io/wechart/packages/pie/examples/simple/)

## Usage

Create pie chart：

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

Render to stage:

```js
const stage = new cax.Stage(640, 400, 'body')
stage.add(pie)
stage.update()
```

