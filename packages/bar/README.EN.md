## Bar

Bar chart by cax

* [Simple Demo Preview](https://dntzhang.github.io/wechart/packages/bar/examples/simple/)

![Bar](./asset/bar.png)

## Usage


```js

const data = [ //数据
    { name: 'dntzhang', age: cax.util.randomInt(-20, 20), exp: cax.util.randomInt(500, 100) },
    { name: 'Canvas', age: cax.util.randomInt(-20, 20), exp: cax.util.randomInt(500, 100) },
    { name: 'Wechart', age: cax.util.randomInt(-20, 20), exp: cax.util.randomInt(500, 100) },
    { name: 'Tencent', age: cax.util.randomInt(-20, 20), exp: cax.util.randomInt(500, 100) },
    { name: 'Cax', age: cax.util.randomInt(-20, 20), exp: cax.util.randomInt(500, 100) }
]

const config = [{//rects代表拆分多个rect，下面是相关的配置
    //age 30 对应 200像素高 
    mapping: [30, 200],
    width: 30,
    interval: 100,
    x: 40,
    y: 250,
    processing: (item) => { return item.age },//数据预处理，提取影响形状的报表
    color: (index) => {//每个柱子的颜色
        return ['#4BC0C0', '#FF6485', '#FFCE5C', '#ADACB9', '#A37AC1'][index]
    },
    tooltip: (item) => {
        return item.name + '-age<br/>' + item.age
    },
    transition: {
        duration: 1000,//动画的时间
    },
    show: {//过渡动画
        // from: { y: -510 },//起始点
        // to: { y: 0 },//终点
        from: { scaleY: 0 },//起始点
        to: { scaleY: 1 },//终点
        duration: 2000,//动画的时间
        easing: cax.easing.elasticOut,//缓动函数
        delay: (i) => { return i * 300 }//每个柱子的动画依次开始
    },
    hide: {
        from: { scaleY: 1 },//起始点
        to: { scaleY: 0 },//终点
        duration: 1000,//动画的时间
        //delay: (i) => { return i * 300 }//每个柱子的动画依次开始
    }
}, {//rects代表拆分多个rect，下面是相关的配置
    //age 30 对应 200像素高 
    mapping: [1200, 200],
    width: 30,
    interval: 100,
    x: 80,
    y: 250,
    processing: (item) => { return item.exp },//数据预处理，提取影响形状的报表
    color: (index) => {//每个柱子的颜色
        return ['#4BC0C0', '#FF6485', '#FFCE5C', '#ADACB9', '#A37AC1'][index]
    },
    tooltip: (item) => {
        return item.name + '-exp<br/>' + item.exp
    },
    transition: {
        duration: 800,//动画的时间
    },
    show: {//过渡动画
        from: { scaleY: 0 },//起始点
        to: { scaleY: 1 },//终点
        duration: 2000,//动画的时间
        easing: cax.easing.elasticOut,//缓动函数
        delay: (i) => { return i * 300 + 150 }//每个柱子的动画依次开始
    },
    hide: {
        from: { scaleY: 1 },//起始点
        to: { scaleY: 0 },//终点
        duration: 1000,//动画的时间
        //delay: (i) => { return i * 300+ 150 }//每个柱子的动画依次开始
    }
}]

stage.add(new Bar(data, config))

cax.tick(stage.update.bind(stage))
```

