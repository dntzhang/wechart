## 比例尺

Scale

## 快速开始

``` js
import { scaleLinear } from '../../../common/scale'

const x = scaleLinear([10, 130], [0, 960])

//根据数值映射坐标
console.log(x(20))// 80
console.log(x(50))// 320

//根据坐标映射数值
console.log(x.invert(80)) // 20
console.log(x.invert(320)); // 50
```
