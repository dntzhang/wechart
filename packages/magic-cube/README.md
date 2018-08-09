## Magic-cube 魔方

![Pie](./asset/magic-cube.png)

* [Preview](https://dntzhang.github.io/wechart/packages/magic-cube/examples/simple/) | [Usage Source]


## 快速开始
```javascript
import magicCube from '../../src/index'
import '../../../common/orbit-controls'

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 500)
camera.position.set(150, 100, 150)

const scene = new THREE.Scene()

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0x000000)
document.body.appendChild(renderer.domElement)
const controls = new THREE.OrbitControls(camera, renderer.domElement)
const group = new THREE.Group()

const pyramid = new magicCube({
  level:4,
  size:100,
  control:{
    camera,
    controls
  },
  cubeStyle:{
    top:[null,null,{url:'../../asset/bbb.bmp'}],
    ahead:{11:{url:'../../asset/bbb.bmp'}}
  }
})

const { rotateControl } = pyramid;

rotateControl.add('x', 1)
rotateControl.add('y', 2)
rotateControl.add('z', 1)
rotateControl.start();


group.add(pyramid)
scene.add(group)

// light
const light = new THREE.DirectionalLight(0xeeeeee, 1)
light.position.set(40, 50, 60)
scene.add(light)
const DricetionalLight = new THREE.DirectionalLight(0xeeeeee, 1)
DricetionalLight.position.set(-40, -50, -60)
scene.add(DricetionalLight)

function animate () {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  controls.update()
}

animate()
```

上面是一个简单的应用，目前魔方具备如下参数
### 配置大小
```javascript
const pyramid = new magicCube({
  // 魔方阶数（整数），推荐尽量不要大于10，以几何倍增长魔方生成时间
  level:3,
  // 魔方总大小（数值），将会根据魔方阶数相除调整每一阶的大小
  size:120,
  // 每一小块相对原大小的缩小值（数值），可用作增加物理缝隙
  padding:0,
})
```

### 配置样式
```javascript
const pyramid = new magicCube({
  // 圆角值（数值）
  radio:14,
  // 每一小面向内的边距（数值），设置该参数将漏出backgroundColor底色
  innerPadding:15,
  // 默认方块底色（color），未设置贴图或颜色时的底色
  backgroundColor:'#333333',
})
```

### 配置颜色或贴图
```javascript
const pyramid = new magicCube({
  // 每一大面的默认颜色
  style:{ top:"#ffff00", bottom:"#ffffff", left:"#FF8C00", right:"#FF0000", ahead:"#0000FF", back:"#00FF00", },
  // 每一小面的颜色或贴图路径
  // 数组下标 或 对象key 对应自左向右、从上到下的某一小面
  cubeStyle:{
    /* 可传入   
      [
        '#00ff00',
        'rgba(255,126,103,.3)',
        {color:'#00ff00'},
        {color:'rgba(255,126,103,.3)'},
        {url:'https://github.com/dntzhang/wechart/raw/master/asset/c12.png'},
      ]
      几种类型
    */
    top:[null,null,{url:'../../asset/bbb.bmp'}],
    /* 或这样写
      {
        3:'#ff00ff',
        4:'#ff00ee',
        6:'rgba(255,1,1,.3)',
        11:{url:'https://github.com/dntzhang/wechart/raw/master/asset/c12.png'}
      }
    */
    ahead:{11:{url:'../../asset/bbb.bmp'}}
  },
})
```

### 开启魔方控制
```javascript
const camera = window.c = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 500)
camera.position.set(150, 100, 150)

const scene = new THREE.Scene()

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0x000000)
document.body.appendChild(renderer.domElement)
const controls = new THREE.OrbitControls(camera, renderer.domElement)

const pyramid = new magicCube({
  // 传入control对象
  control:{
    // 传入 camera
    camera,
    // 传入 相机控制器
    controls
  },
})
```


### 手动控制魔方
```javascript

let rotateControl = pyramid.rotateControl;

// 队列
rotateControl.add('x', 1)
rotateControl.add('y', 2)
rotateControl.add('z', 1)
rotateControl.run();

// 单次旋转
rotateControl.trigger('x', 1)
rotateControl.trigger('x', 1)

// 反向旋转
rotateControl.trigger('x', 1, true)

// 旋转回调
rotateControl.trigger('x', 1, true, function(){
  console.log('旋转完成')
})
// 如果当前有旋转或旋转队列尚未完成将会排在队列后

```