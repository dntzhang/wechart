/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(1);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 500);
camera.position.set(150, 100, 150);

var scene = new THREE.Scene();

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);
document.body.appendChild(renderer.domElement);
var controls = new THREE.OrbitControls(camera, renderer.domElement);
var group = new THREE.Group();

var pyramid = new _index2.default({
  level: 3,
  size: 100,
  control: {
    camera: camera,
    controls: controls
  },
  cubeStyle: {
    // top:[null,null,{url:'../../asset/bbb.bmp'}],
    // ahead:{11:{url:'../../asset/bbb.bmp'}}
  }
});

var rotateControl = pyramid.rotateControl;


rotateControl.add('x', 1);
rotateControl.add('y', 2);
rotateControl.add('z', 1);
rotateControl.start();

group.add(pyramid);
scene.add(group);

// light
var light = new THREE.DirectionalLight(0xeeeeee, 1);
light.position.set(40, 50, 60);
scene.add(light);
var DricetionalLight = new THREE.DirectionalLight(0xeeeeee, 1);
DricetionalLight.position.set(-40, -50, -60);
scene.add(DricetionalLight);

function animate() {

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
}

animate();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PIAngle = Math.PI / 180;
var threePow = function threePow(n) {
  return Math.pow(n, 3);
};
var FaceName = ['all', 'top', 'bottom', 'left', 'right', 'ahead', 'back', 'center', 'edge'];
var renderSort = ['right', 'left', 'top', 'bottom', 'ahead', 'back'];

//圆角矩形
CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
  var min_size = Math.min(w, h);
  if (r > min_size / 2) r = min_size / 2;
  // 开始绘制
  this.beginPath();
  this.moveTo(x + r, y);
  this.arcTo(x + w, y, x + w, y + h, r);
  this.arcTo(x + w, y + h, x, y + h, r);
  this.arcTo(x, y + h, x, y, r);
  this.arcTo(x, y, x + w, y, r);
  this.closePath();
  return this;
};
var rotateAroundWorldAxis = function rotateAroundWorldAxis(object, axis, radians) {
  var rotWorldMatrix = new THREE.Matrix4();
  rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);

  // old code for Three.JS pre r54:
  //  rotWorldMatrix.multiply(object.matrix);
  // new code for Three.JS r55+:
  rotWorldMatrix.multiply(object.matrix); // pre-multiply

  object.matrix = rotWorldMatrix;

  // old code for Three.js pre r49:
  // object.rotation.getRotationFromMatrix(object.matrix, object.scale);
  // old code for Three.js pre r59:
  // object.rotation.setEulerFromRotationMatrix(object.matrix);
  // code for r59+:
  object.rotation.setFromRotationMatrix(object.matrix);
};

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
mouse.x = mouse.y = -1;
var clientX = void 0,
    clientY = void 0;
var pyramid = undefined;
var intersects = void 0;
var selectAxis = void 0,
    selectCube = void 0,
    selectAhead = void 0,
    flag = false;

var getDirection = function getDirection(quadrant, angle, xName, yName) {
  var direction = void 0;

  if (quadrant === 1 || quadrant === 2) {
    direction = angle < -45 ? xName : yName;
  }
  if (quadrant === 3 || quadrant === 4) {
    direction = angle > 45 ? xName : yName;
  }

  return direction;
};

var xAxis = function xAxis(isF, pyramid, camera) {
  var rotateControl = pyramid.rotateControl;

  if (selectAxis !== 'y') {
    rotateControl.trigger('y', selectCube.y, isF);
  } else {
    var quadrant = pyramid.getQuadrant(camera.position.x, camera.position.z);
    var angle = pyramid.getAngle(camera.position.x, camera.position.z);
    var direction = getDirection(quadrant, angle, 'x', 'z');
    rotateControl.trigger(direction, selectCube[direction], isF);
  }
  flag = false;
};

var yAxis = function yAxis(isF, pyramid, camera) {
  var rotateControl = pyramid.rotateControl;

  if (selectAxis !== 'y') {
    selectAxis === 'x' ? selectAxis = 'z' : selectAxis = 'x';
    var angle = selectAxis === 'x' ? 90 : -90;
    angle = isF ? angle : -angle;
    angle = selectAhead ? angle : -angle;

    rotateControl.trigger(selectAxis, selectCube[selectAxis], angle > 0);
  } else {
    var quadrant = pyramid.getQuadrant(camera.position.x, camera.position.z);
    var _angle = pyramid.getAngle(camera.position.x, camera.position.z);
    var direction = getDirection(quadrant, _angle, 'z', 'x');
    rotateControl.trigger(direction, selectCube[direction], isF);
  }
  flag = false;
};

var getCubeObj = function getCubeObj(index, level, twoPow, num) {
  var z = remainder(index, twoPow),
      y = remainder(index, level) % level || level,
      x = index % twoPow % level + 1;
  // debugger;
  return {
    x: x,
    y: y,
    z: z,
    index: index
  };
};
var remainder = function remainder(num, bnum) {
  var n = 1;
  while (num + 1 > bnum) {
    n += 1;
    num -= bnum;
  }
  return n;
};
var getCubeList = function getCubeList(level) {
  var cubes = {},
      num = threePow(level),
      twoPow = level * level;
  for (var i in FaceName) {
    cubes[FaceName[i]] = [];
  }for (var _i2 = 0; _i2 < num; _i2++) {
    var cube = getCubeObj(_i2, level, twoPow, num);
    var edge = false;
    cubes.all.push(cube);
    if (_i2 < twoPow) {
      edge = true;
    }
    if (_i2 >= num - twoPow) {
      edge = true;
    }
    if (_i2 % level === 0) {
      edge = true;cubes.left.push(cube);
    }
    if ((_i2 + 1) % level === 0) {
      edge = true;cubes.right.push(cube);
    }
    if (_i2 % twoPow < level) {
      edge = true;cubes.ahead.push(cube);
    }
    if (_i2 % twoPow >= twoPow - level) {
      edge = true;cubes.back.push(cube);
    }
    if (edge) {
      cubes.edge.push(cube);
    } else {
      cubes.center.push(cube);
    }
  }

  cubes.top = cubes.all.slice(0, twoPow);
  cubes.bottom = cubes.all.slice(num - twoPow);

  return cubes;
};

var isOdd = function isOdd(n) {
  return !!(n % 2);
};

var MagicCube = function (_THREE$Group) {
  _inherits(MagicCube, _THREE$Group);

  function MagicCube(option) {
    _classCallCheck(this, MagicCube);

    var _this = _possibleConstructorReturn(this, (MagicCube.__proto__ || Object.getPrototypeOf(MagicCube)).call(this));

    _initialiseProps.call(_this);

    var that = _this;
    _this.option = Object.assign({
      level: 3,
      size: 120,
      padding: 0,
      style: { top: "#ffff00", bottom: "#ffffff", left: "#FF8C00", right: "#FF0000", ahead: "#0000FF", back: "#00FF00" },
      cubeStyle: {
        top: [],
        bottom: [],
        left: [],
        right: [],
        ahead: [],
        back: []
      },
      radio: 14,
      innerPadding: 15,
      backgroundColor: '#333333',
      control: {
        camera: null,
        controls: null
      }
    }, option);
    option = _this.option;
    _this.size = option.size / option.level;
    _this.offset = (option.size - _this.size) / 2;
    _this.loader = new THREE.TextureLoader();

    _this.meshList = [];
    _this.cubes = getCubeList(option.level);
    _this.cubes.all.forEach(function (d, i) {
      var mesh = _this.createCubeMesh(d);

      that.add(mesh);
      that.meshList.push(mesh);
    });

    renderSort.forEach(function (_d, _i) {
      var _loop = function _loop() {
        var d = _this.cubes[_d][i];

        var style = _this.getCubeStyle(_d, i);
        if (style.isImg) {
          _this.imgFaces(style.url, function (img) {
            d.matArray[_i].map = this.createTexture(img);
          });
        } else {
          d.matArray[_i].map = _this.createTexture('', style.color);
        }
      };

      for (var i in _this.cubes[_d]) {
        _loop();
      }
    });

    var _option$control = option.control,
        camera = _option$control.camera,
        controls = _option$control.controls;

    if (camera && controls) {
      controls.domElement.addEventListener('touchmove', function (event) {
        if (event.targetTouches.length > 1) return;
        that.control.move.call(that, event.targetTouches[0]);
      }, false);

      controls.domElement.addEventListener('touchstart', function (event) {
        event.preventDefault();
        that.control.start.call(that, event.targetTouches[0]);
      }, false);

      controls.domElement.addEventListener('touchend', function (event) {
        that.control.end.call(that, event.targetTouches[0]);
      }, false);

      controls.domElement.addEventListener('mousemove', _this.control.move.bind(_this), false);
      controls.domElement.addEventListener('mousedown', _this.control.start.bind(_this), false);
      controls.domElement.addEventListener('mouseup', _this.control.end.bind(_this), false);
    }
    return _this;
  }

  _createClass(MagicCube, [{
    key: 'createCubeMesh',
    value: function createCubeMesh(d) {
      var size = this.size,
          cubeSize = size - this.option.padding;
      var geometry = d.geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);

      d.matArray = [new THREE.MeshBasicMaterial({ opacity: 1, transparent: true, vertexColors: THREE.FaceColors, map: this.createInitTexture() }), new THREE.MeshBasicMaterial({ opacity: 1, transparent: true, vertexColors: THREE.FaceColors, map: this.createInitTexture() }), new THREE.MeshBasicMaterial({ opacity: 1, transparent: true, vertexColors: THREE.FaceColors, map: this.createInitTexture() }), new THREE.MeshBasicMaterial({ opacity: 1, transparent: true, vertexColors: THREE.FaceColors, map: this.createInitTexture() }), new THREE.MeshBasicMaterial({ opacity: 1, transparent: true, vertexColors: THREE.FaceColors, map: this.createInitTexture() }), new THREE.MeshBasicMaterial({ opacity: 1, transparent: true, vertexColors: THREE.FaceColors, map: this.createInitTexture() })];
      var mesh = d.mesh = new THREE.Mesh(geometry, d.matArray);

      mesh.position.x = (d.x - 1) * size - this.offset;
      mesh.position.z = -(d.y - 1) * size + this.offset;
      mesh.position.y = -(d.z - 1) * size + this.offset;

      mesh.data = d;
      return mesh;
    }
  }, {
    key: 'createTexture',
    value: function createTexture(img, color) {
      var texture = new THREE.Texture(this.faces(img, document.createElement('canvas'), color));
      texture.needsUpdate = true;
      return texture;
    }
  }, {
    key: 'createInitTexture',
    value: function createInitTexture() {
      return new THREE.Texture(document.createElement('canvas'));
    }
  }, {
    key: 'faces',
    value: function faces(img, canvas, color) {
      canvas.width = 256;
      canvas.height = 256;
      var context = canvas.getContext('2d');
      var radio = this.option.radio;
      var innerPadding = this.option.innerPadding;

      if (context) {
        context.fillStyle = this.option.backgroundColor;
        context.fillRect(0, 0, 256, 256);

        if (img.toString() === "[object HTMLImageElement]") {

          // 拉伸图片
          var canvasTemp = document.createElement('canvas');
          var contextTemp = canvasTemp.getContext('2d');
          canvasTemp.width = 256 - innerPadding; // 目标宽度
          canvasTemp.height = 256 - innerPadding; // 目标高度
          contextTemp.drawImage(img, innerPadding, innerPadding, 256 - innerPadding * 2, 256 - innerPadding * 2);

          // 绘制图片
          var pattern = context.createPattern(canvasTemp, "no-repeat");
          context.roundRect(innerPadding, innerPadding, 256 - innerPadding * 2, 256 - innerPadding * 2, radio * 1 || 0);
          // 填充绘制的圆
          context.fillStyle = pattern;
          context.fill();
        } else {
          context.rect(innerPadding, innerPadding, 256 - innerPadding * 2, 256 - innerPadding * 2);
          context.lineJoin = 'round';
          context.lineWidth = radio;
          context.fillStyle = color;
          context.strokeStyle = color;
          context.stroke();
          context.fill();
        }
      }
      return canvas;
    }
  }, {
    key: 'imgFaces',
    value: function imgFaces(url, callback) {
      var img = new Image(),
          that = this;
      img.onload = function () {
        callback.bind(that)(img);
      };
      img.src = url;
    }
  }, {
    key: 'getCubeStyle',
    value: function getCubeStyle(direction, index) {
      var option = this.option;
      var defaultColor = option.style[direction];
      var setting = option.cubeStyle[direction] && option.cubeStyle[direction][index] || defaultColor;
      var style = {};

      if ((typeof setting === 'undefined' ? 'undefined' : _typeof(setting)) === 'object') {
        style.color = setting.color || defaultColor;
        style.url = setting.url;
        style.isImg = !!setting.url;
      } else {
        style.isImg = false, style.color = setting || defaultColor;
      }
      return style;
    }
  }, {
    key: 'getLayer',
    value: function getLayer(object) {
      return {
        x: Math.round((object.position.x + this.offset + this.size) / this.size),
        y: this.option.level - Math.round((object.position.y + this.offset + this.size) / this.size) + 1,
        z: this.option.level - Math.round((object.position.z + this.offset + this.size) / this.size) + 1
      };
    }
  }, {
    key: 'rotate',
    value: function rotate(angle, list, axis) {
      var _this2 = this;

      if (!list || !list.length) return;
      var mapping = this.axisMapping[axis];
      list.forEach(function (d) {
        var position = d.mesh.position;
        rotateAroundWorldAxis(d.mesh, mapping.rotateAxis, angle * PIAngle);
        var newPosition = _this2.getRotatedPosition(position[mapping.position[0]], position[mapping.position[1]], angle);
        position[mapping.position[0]] = newPosition[0];
        position[mapping.position[1]] = newPosition[1];
      });
    }
  }, {
    key: 'getRotatedPosition',
    value: function getRotatedPosition(x, y, angle) {
      var c = Math.sqrt(x * x + y * y),
          a = 180 * Math.asin(x / c || 0) / Math.PI + angle;
      if (y < 0) a = 180 - a, a += angle * 2;
      return [Math.sin(a * PIAngle) * c, Math.cos(a * PIAngle) * c];
    }
  }]);

  return MagicCube;
}(THREE.Group);

var _initialiseProps = function _initialiseProps() {
  this.control = {
    start: function start(event) {
      var _option$control2 = this.option.control,
          camera = _option$control2.camera,
          controls = _option$control2.controls;

      flag = true;
      mouse.x = event.clientX / window.innerWidth * 2 - 1;
      clientX = event.clientX;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      clientY = event.clientY;
      raycaster.setFromCamera(mouse, camera);
      intersects = raycaster.intersectObjects(this.meshList);
      if (intersects && intersects.length) {
        controls.enableRotate = false;
        var cube = intersects[0];
        var point = cube.point;
        var unAxis = void 0;
        for (var i in point) {
          var num = this.option.size / 2 - Math.abs(point[i]);
          if (num < 0.00001) {
            selectAxis = i;
            selectAhead = point[i] > 0;
            selectCube = this.getLayer(cube.object);
          }
        }
      }
    },
    move: function move(event) {
      var _option$control3 = this.option.control,
          camera = _option$control3.camera,
          controls = _option$control3.controls;

      if (!controls.enableRotate && flag) {
        var x = event.clientX - clientX,
            y = event.clientY - clientY;
        if (Math.abs(x) > 20) {
          return xAxis(!(x < 0), this, camera);
        }
        if (Math.abs(y) > 20) {
          return yAxis(!(y < 0), this, camera);
        }
      }
    },
    end: function end(event) {
      var _option$control4 = this.option.control,
          camera = _option$control4.camera,
          controls = _option$control4.controls;

      flag = false;
      controls.enableRotate = true;
      mouse.x = mouse.y = -1;
    }
  };
  this.rotateControl = {
    start: function () {
      var action = this.rotateControl.actionList.shift();
      if (!action) return;
      var axis = action.axis,
          layer = action.layer,
          isF = action.isF;

      this.rotateControl.trigger(axis, layer, isF);
      this.rotateControl.next();
    }.bind(this),

    trigger: function (axis, layer, isF) {
      var mb = (layer - 1) * this.size;
      if (axis === 'x') {
        mb -= this.offset;
      } else if (axis === 'y') {
        mb = this.offset - mb;
      } else if (axis === 'z') {
        mb = this.offset - mb;
      }

      var readyList = this.cubes.all.map(function (d) {
        var num = Math.abs(mb - d.mesh.position[axis]);
        return num < 0.00000000001 && d;
      }).filter(function (d) {
        return d;
      });

      this.rotate(isF ? 90 : -90, readyList, axis);
      return readyList;
    }.bind(this),

    add: function (axis, layer, isF) {
      this.rotateControl.actionList.push({
        axis: axis,
        layer: layer,
        isF: isF
      });
    }.bind(this),

    next: function () {
      this.rotateControl.start();
    }.bind(this),

    actionList: []
  };
  this.axisMapping = {
    x: {
      rotateAxis: new THREE.Vector3(1, 0, 0),
      position: ['z', 'y']
    },
    y: {
      rotateAxis: new THREE.Vector3(0, 1, 0),
      position: ['x', 'z']
    },
    z: {
      rotateAxis: new THREE.Vector3(0, 0, 1),
      position: ['y', 'x']
    }
  };

  this.getQuadrant = function (x, y) {
    var quadrant = 0;
    if (x > 0) {
      quadrant = y > 0 ? 3 : 4;
    } else {
      quadrant = y > 0 ? 2 : 1;
    }
    return quadrant;
  };

  this.getAngle = function (x, y) {
    return 180 * Math.asin(x / Math.sqrt(x * x + y * y) || 0) / Math.PI;
  };
};

exports.default = MagicCube;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 */

// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
// 
//    Orbit - left mouse / touch: one-finger move
//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
//    Pan - right mouse, or arrow keys / touch: two-finger move

THREE.OrbitControls = function (object, domElement) {

		this.object = object;

		this.domElement = domElement !== undefined ? domElement : document;

		// Set to false to disable this control
		this.enabled = true;

		// "target" sets the location of focus, where the object orbits around
		this.target = new THREE.Vector3();

		// How far you can dolly in and out ( PerspectiveCamera only )
		this.minDistance = 0;
		this.maxDistance = Infinity;

		// How far you can zoom in and out ( OrthographicCamera only )
		this.minZoom = 0;
		this.maxZoom = Infinity;

		// How far you can orbit vertically, upper and lower limits.
		// Range is 0 to Math.PI radians.
		this.minPolarAngle = 0; // radians
		this.maxPolarAngle = Math.PI; // radians

		// How far you can orbit horizontally, upper and lower limits.
		// If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
		this.minAzimuthAngle = -Infinity; // radians
		this.maxAzimuthAngle = Infinity; // radians

		// Set to true to enable damping (inertia)
		// If damping is enabled, you must call controls.update() in your animation loop
		this.enableDamping = false;
		this.dampingFactor = 0.25;

		// This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
		// Set to false to disable zooming
		this.enableZoom = true;
		this.zoomSpeed = 1.0;

		// Set to false to disable rotating
		this.enableRotate = true;
		this.rotateSpeed = 1.0;

		// Set to false to disable panning
		this.enablePan = true;
		this.panSpeed = 1.0;
		this.screenSpacePanning = false; // if true, pan in screen-space
		this.keyPanSpeed = 7.0; // pixels moved per arrow key push

		// Set to true to automatically rotate around the target
		// If auto-rotate is enabled, you must call controls.update() in your animation loop
		this.autoRotate = false;
		this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

		// Set to false to disable use of the keys
		this.enableKeys = true;

		// The four arrow keys
		this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

		// Mouse buttons
		this.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT };

		// for reset
		this.target0 = this.target.clone();
		this.position0 = this.object.position.clone();
		this.zoom0 = this.object.zoom;

		//
		// public methods
		//

		this.getPolarAngle = function () {

				return spherical.phi;
		};

		this.getAzimuthalAngle = function () {

				return spherical.theta;
		};

		this.saveState = function () {

				scope.target0.copy(scope.target);
				scope.position0.copy(scope.object.position);
				scope.zoom0 = scope.object.zoom;
		};

		this.reset = function () {

				scope.target.copy(scope.target0);
				scope.object.position.copy(scope.position0);
				scope.object.zoom = scope.zoom0;

				scope.object.updateProjectionMatrix();
				scope.dispatchEvent(changeEvent);

				scope.update();

				state = STATE.NONE;
		};

		// this method is exposed, but perhaps it would be better if we can make it private...
		this.update = function () {

				var offset = new THREE.Vector3();

				// so camera.up is the orbit axis
				var quat = new THREE.Quaternion().setFromUnitVectors(object.up, new THREE.Vector3(0, 1, 0));
				var quatInverse = quat.clone().inverse();

				var lastPosition = new THREE.Vector3();
				var lastQuaternion = new THREE.Quaternion();

				return function update() {

						var position = scope.object.position;

						offset.copy(position).sub(scope.target);

						// rotate offset to "y-axis-is-up" space
						offset.applyQuaternion(quat);

						// angle from z-axis around y-axis
						spherical.setFromVector3(offset);

						if (scope.autoRotate && state === STATE.NONE) {

								rotateLeft(getAutoRotationAngle());
						}

						spherical.theta += sphericalDelta.theta;
						spherical.phi += sphericalDelta.phi;

						// restrict theta to be between desired limits
						spherical.theta = Math.max(scope.minAzimuthAngle, Math.min(scope.maxAzimuthAngle, spherical.theta));

						// restrict phi to be between desired limits
						spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));

						spherical.makeSafe();

						spherical.radius *= scale;

						// restrict radius to be between desired limits
						spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius));

						// move target to panned location
						scope.target.add(panOffset);

						offset.setFromSpherical(spherical);

						// rotate offset back to "camera-up-vector-is-up" space
						offset.applyQuaternion(quatInverse);

						position.copy(scope.target).add(offset);

						scope.object.lookAt(scope.target);

						if (scope.enableDamping === true) {

								sphericalDelta.theta *= 1 - scope.dampingFactor;
								sphericalDelta.phi *= 1 - scope.dampingFactor;

								panOffset.multiplyScalar(1 - scope.dampingFactor);
						} else {

								sphericalDelta.set(0, 0, 0);

								panOffset.set(0, 0, 0);
						}

						scale = 1;

						// update condition is:
						// min(camera displacement, camera rotation in radians)^2 > EPS
						// using small-angle approximation cos(x/2) = 1 - x^2 / 8

						if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {

								scope.dispatchEvent(changeEvent);

								lastPosition.copy(scope.object.position);
								lastQuaternion.copy(scope.object.quaternion);
								zoomChanged = false;

								return true;
						}

						return false;
				};
		}();

		this.dispose = function () {

				scope.domElement.removeEventListener('contextmenu', onContextMenu, false);
				scope.domElement.removeEventListener('mousedown', onMouseDown, false);
				scope.domElement.removeEventListener('wheel', onMouseWheel, false);

				scope.domElement.removeEventListener('touchstart', onTouchStart, false);
				scope.domElement.removeEventListener('touchend', onTouchEnd, false);
				scope.domElement.removeEventListener('touchmove', onTouchMove, false);

				document.removeEventListener('mousemove', onMouseMove, false);
				document.removeEventListener('mouseup', onMouseUp, false);

				window.removeEventListener('keydown', onKeyDown, false);

				//scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?
		};

		//
		// internals
		//

		var scope = this;

		var changeEvent = { type: 'change' };
		var startEvent = { type: 'start' };
		var endEvent = { type: 'end' };

		var STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY_PAN: 4 };

		var state = STATE.NONE;

		var EPS = 0.000001;

		// current position in spherical coordinates
		var spherical = new THREE.Spherical();
		var sphericalDelta = new THREE.Spherical();

		var scale = 1;
		var panOffset = new THREE.Vector3();
		var zoomChanged = false;

		var rotateStart = new THREE.Vector2();
		var rotateEnd = new THREE.Vector2();
		var rotateDelta = new THREE.Vector2();

		var panStart = new THREE.Vector2();
		var panEnd = new THREE.Vector2();
		var panDelta = new THREE.Vector2();

		var dollyStart = new THREE.Vector2();
		var dollyEnd = new THREE.Vector2();
		var dollyDelta = new THREE.Vector2();

		function getAutoRotationAngle() {

				return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
		}

		function getZoomScale() {

				return Math.pow(0.95, scope.zoomSpeed);
		}

		function rotateLeft(angle) {

				sphericalDelta.theta -= angle;
		}

		function rotateUp(angle) {

				sphericalDelta.phi -= angle;
		}

		var panLeft = function () {

				var v = new THREE.Vector3();

				return function panLeft(distance, objectMatrix) {

						v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix
						v.multiplyScalar(-distance);

						panOffset.add(v);
				};
		}();

		var panUp = function () {

				var v = new THREE.Vector3();

				return function panUp(distance, objectMatrix) {

						if (scope.screenSpacePanning === true) {

								v.setFromMatrixColumn(objectMatrix, 1);
						} else {

								v.setFromMatrixColumn(objectMatrix, 0);
								v.crossVectors(scope.object.up, v);
						}

						v.multiplyScalar(distance);

						panOffset.add(v);
				};
		}();

		// deltaX and deltaY are in pixels; right and down are positive
		var pan = function () {

				var offset = new THREE.Vector3();

				return function pan(deltaX, deltaY) {

						var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

						if (scope.object.isPerspectiveCamera) {

								// perspective
								var position = scope.object.position;
								offset.copy(position).sub(scope.target);
								var targetDistance = offset.length();

								// half of the fov is center to top of screen
								targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0);

								// we use only clientHeight here so aspect ratio does not distort speed
								panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
								panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
						} else if (scope.object.isOrthographicCamera) {

								// orthographic
								panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
								panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
						} else {

								// camera neither orthographic nor perspective
								console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
								scope.enablePan = false;
						}
				};
		}();

		function dollyIn(dollyScale) {

				if (scope.object.isPerspectiveCamera) {

						scale /= dollyScale;
				} else if (scope.object.isOrthographicCamera) {

						scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom * dollyScale));
						scope.object.updateProjectionMatrix();
						zoomChanged = true;
				} else {

						console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
						scope.enableZoom = false;
				}
		}

		function dollyOut(dollyScale) {

				if (scope.object.isPerspectiveCamera) {

						scale *= dollyScale;
				} else if (scope.object.isOrthographicCamera) {

						scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / dollyScale));
						scope.object.updateProjectionMatrix();
						zoomChanged = true;
				} else {

						console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
						scope.enableZoom = false;
				}
		}

		//
		// event callbacks - update the object state
		//

		function handleMouseDownRotate(event) {

				//console.log( 'handleMouseDownRotate' );

				rotateStart.set(event.clientX, event.clientY);
		}

		function handleMouseDownDolly(event) {

				//console.log( 'handleMouseDownDolly' );

				dollyStart.set(event.clientX, event.clientY);
		}

		function handleMouseDownPan(event) {

				//console.log( 'handleMouseDownPan' );

				panStart.set(event.clientX, event.clientY);
		}

		function handleMouseMoveRotate(event) {

				//console.log( 'handleMouseMoveRotate' );

				rotateEnd.set(event.clientX, event.clientY);

				rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);

				var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

				rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight); // yes, height

				rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);

				rotateStart.copy(rotateEnd);

				scope.update();
		}

		function handleMouseMoveDolly(event) {

				//console.log( 'handleMouseMoveDolly' );

				dollyEnd.set(event.clientX, event.clientY);

				dollyDelta.subVectors(dollyEnd, dollyStart);

				if (dollyDelta.y > 0) {

						dollyIn(getZoomScale());
				} else if (dollyDelta.y < 0) {

						dollyOut(getZoomScale());
				}

				dollyStart.copy(dollyEnd);

				scope.update();
		}

		function handleMouseMovePan(event) {

				//console.log( 'handleMouseMovePan' );

				panEnd.set(event.clientX, event.clientY);

				panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);

				pan(panDelta.x, panDelta.y);

				panStart.copy(panEnd);

				scope.update();
		}

		function handleMouseUp(event) {

				// console.log( 'handleMouseUp' );

		}

		function handleMouseWheel(event) {

				// console.log( 'handleMouseWheel' );

				if (event.deltaY < 0) {

						dollyOut(getZoomScale());
				} else if (event.deltaY > 0) {

						dollyIn(getZoomScale());
				}

				scope.update();
		}

		function handleKeyDown(event) {

				//console.log( 'handleKeyDown' );

				switch (event.keyCode) {

						case scope.keys.UP:
								pan(0, scope.keyPanSpeed);
								scope.update();
								break;

						case scope.keys.BOTTOM:
								pan(0, -scope.keyPanSpeed);
								scope.update();
								break;

						case scope.keys.LEFT:
								pan(scope.keyPanSpeed, 0);
								scope.update();
								break;

						case scope.keys.RIGHT:
								pan(-scope.keyPanSpeed, 0);
								scope.update();
								break;

				}
		}

		function handleTouchStartRotate(event) {

				//console.log( 'handleTouchStartRotate' );

				rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
		}

		function handleTouchStartDollyPan(event) {

				//console.log( 'handleTouchStartDollyPan' );

				if (scope.enableZoom) {

						var dx = event.touches[0].pageX - event.touches[1].pageX;
						var dy = event.touches[0].pageY - event.touches[1].pageY;

						var distance = Math.sqrt(dx * dx + dy * dy);

						dollyStart.set(0, distance);
				}

				if (scope.enablePan) {

						var x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
						var y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);

						panStart.set(x, y);
				}
		}

		function handleTouchMoveRotate(event) {

				//console.log( 'handleTouchMoveRotate' );

				rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);

				rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);

				var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

				rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight); // yes, height

				rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);

				rotateStart.copy(rotateEnd);

				scope.update();
		}

		function handleTouchMoveDollyPan(event) {

				//console.log( 'handleTouchMoveDollyPan' );

				if (scope.enableZoom) {

						var dx = event.touches[0].pageX - event.touches[1].pageX;
						var dy = event.touches[0].pageY - event.touches[1].pageY;

						var distance = Math.sqrt(dx * dx + dy * dy);

						dollyEnd.set(0, distance);

						dollyDelta.set(0, Math.pow(dollyEnd.y / dollyStart.y, scope.zoomSpeed));

						dollyIn(dollyDelta.y);

						dollyStart.copy(dollyEnd);
				}

				if (scope.enablePan) {

						var x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
						var y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);

						panEnd.set(x, y);

						panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);

						pan(panDelta.x, panDelta.y);

						panStart.copy(panEnd);
				}

				scope.update();
		}

		function handleTouchEnd(event) {}

		//console.log( 'handleTouchEnd' );

		//
		// event handlers - FSM: listen for events and reset state
		//

		function onMouseDown(event) {

				if (scope.enabled === false) return;

				event.preventDefault();

				switch (event.button) {

						case scope.mouseButtons.ORBIT:

								if (scope.enableRotate === false) return;

								handleMouseDownRotate(event);

								state = STATE.ROTATE;

								break;

						case scope.mouseButtons.ZOOM:

								if (scope.enableZoom === false) return;

								handleMouseDownDolly(event);

								state = STATE.DOLLY;

								break;

						case scope.mouseButtons.PAN:

								if (scope.enablePan === false) return;

								handleMouseDownPan(event);

								state = STATE.PAN;

								break;

				}

				if (state !== STATE.NONE) {

						document.addEventListener('mousemove', onMouseMove, false);
						document.addEventListener('mouseup', onMouseUp, false);

						scope.dispatchEvent(startEvent);
				}
		}

		function onMouseMove(event) {

				if (scope.enabled === false) return;

				event.preventDefault();

				switch (state) {

						case STATE.ROTATE:

								if (scope.enableRotate === false) return;

								handleMouseMoveRotate(event);

								break;

						case STATE.DOLLY:

								if (scope.enableZoom === false) return;

								handleMouseMoveDolly(event);

								break;

						case STATE.PAN:

								if (scope.enablePan === false) return;

								handleMouseMovePan(event);

								break;

				}
		}

		function onMouseUp(event) {

				if (scope.enabled === false) return;

				handleMouseUp(event);

				document.removeEventListener('mousemove', onMouseMove, false);
				document.removeEventListener('mouseup', onMouseUp, false);

				scope.dispatchEvent(endEvent);

				state = STATE.NONE;
		}

		function onMouseWheel(event) {

				if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE && state !== STATE.ROTATE) return;

				event.preventDefault();
				event.stopPropagation();

				scope.dispatchEvent(startEvent);

				handleMouseWheel(event);

				scope.dispatchEvent(endEvent);
		}

		function onKeyDown(event) {

				if (scope.enabled === false || scope.enableKeys === false || scope.enablePan === false) return;

				handleKeyDown(event);
		}

		function onTouchStart(event) {

				if (scope.enabled === false) return;

				event.preventDefault();

				switch (event.touches.length) {

						case 1:
								// one-fingered touch: rotate

								if (scope.enableRotate === false) return;

								handleTouchStartRotate(event);

								state = STATE.TOUCH_ROTATE;

								break;

						case 2:
								// two-fingered touch: dolly-pan

								if (scope.enableZoom === false && scope.enablePan === false) return;

								handleTouchStartDollyPan(event);

								state = STATE.TOUCH_DOLLY_PAN;

								break;

						default:

								state = STATE.NONE;

				}

				if (state !== STATE.NONE) {

						scope.dispatchEvent(startEvent);
				}
		}

		function onTouchMove(event) {

				if (scope.enabled === false) return;

				event.preventDefault();
				event.stopPropagation();

				switch (event.touches.length) {

						case 1:
								// one-fingered touch: rotate

								if (scope.enableRotate === false) return;
								if (state !== STATE.TOUCH_ROTATE) return; // is this needed?

								handleTouchMoveRotate(event);

								break;

						case 2:
								// two-fingered touch: dolly-pan

								if (scope.enableZoom === false && scope.enablePan === false) return;
								if (state !== STATE.TOUCH_DOLLY_PAN) return; // is this needed?

								handleTouchMoveDollyPan(event);

								break;

						default:

								state = STATE.NONE;

				}
		}

		function onTouchEnd(event) {

				if (scope.enabled === false) return;

				handleTouchEnd(event);

				scope.dispatchEvent(endEvent);

				state = STATE.NONE;
		}

		function onContextMenu(event) {

				if (scope.enabled === false) return;

				event.preventDefault();
		}

		//

		scope.domElement.addEventListener('contextmenu', onContextMenu, false);

		scope.domElement.addEventListener('mousedown', onMouseDown, false);
		scope.domElement.addEventListener('wheel', onMouseWheel, false);

		scope.domElement.addEventListener('touchstart', onTouchStart, false);
		scope.domElement.addEventListener('touchend', onTouchEnd, false);
		scope.domElement.addEventListener('touchmove', onTouchMove, false);

		window.addEventListener('keydown', onKeyDown, false);

		// force an update at start

		this.update();
};

THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype);
THREE.OrbitControls.prototype.constructor = THREE.OrbitControls;

Object.defineProperties(THREE.OrbitControls.prototype, {

		center: {

				get: function get() {

						console.warn('THREE.OrbitControls: .center has been renamed to .target');
						return this.target;
				}

		},

		// backward compatibility

		noZoom: {

				get: function get() {

						console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
						return !this.enableZoom;
				},

				set: function set(value) {

						console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
						this.enableZoom = !value;
				}

		},

		noRotate: {

				get: function get() {

						console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
						return !this.enableRotate;
				},

				set: function set(value) {

						console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
						this.enableRotate = !value;
				}

		},

		noPan: {

				get: function get() {

						console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
						return !this.enablePan;
				},

				set: function set(value) {

						console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
						this.enablePan = !value;
				}

		},

		noKeys: {

				get: function get() {

						console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
						return !this.enableKeys;
				},

				set: function set(value) {

						console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
						this.enableKeys = !value;
				}

		},

		staticMoving: {

				get: function get() {

						console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
						return !this.enableDamping;
				},

				set: function set(value) {

						console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
						this.enableDamping = !value;
				}

		},

		dynamicDampingFactor: {

				get: function get() {

						console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
						return this.dampingFactor;
				},

				set: function set(value) {

						console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
						this.dampingFactor = value;
				}

		}

});

/***/ })
/******/ ]);