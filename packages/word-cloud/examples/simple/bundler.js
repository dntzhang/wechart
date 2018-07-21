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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _src = __webpack_require__(3);

var _src2 = _interopRequireDefault(_src);

var _scale = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _src2.default([{ text: 'WECHART', value: '6' }, { text: 'CAX', value: '12' }, { text: '紅樓夢', value: '10' }, { text: '賈寶玉', value: '3' }, { text: '林黛玉', value: '3' }, { text: '薛寶釵', value: '3' }, { text: '王熙鳳', value: '3' }, { text: '李紈', value: '3' }, { text: '賈元春', value: '4' }, { text: '賈迎春', value: '4' }, { text: '賈探春', value: '3' }, { text: '賈惜春', value: '4' }, { text: '秦可卿', value: '3' }, { text: '賈巧姐', value: '3' }, { text: '史湘雲', value: '5' }, { text: '妙玉', value: '3' }, { text: '賈政', value: '2' }, { text: '賈赦', value: '2' }, { text: '賈璉', value: '4' }, { text: '賈珍', value: '2' }, { text: '賈環', value: '4' }, { text: '賈母', value: '2' }, { text: '王夫人', value: '2' }, { text: '薛姨媽', value: '3' }, { text: '尤氏', value: '2' }, { text: '平兒', value: '2' }, { text: '鴛鴦', value: '2' }, { text: '襲人', value: '2' }, { text: '晴雯', value: '2' }, { text: '香菱', value: '2' }, { text: '紫鵑', value: '2' }, { text: '麝月', value: '2' }, { text: '小紅', value: '2' }, { text: '金釧', value: '2' }, { text: '甄士隱', value: '0' }, { text: '賈雨村', value: '0' }, { text: '賈雨村', value: '0' }, { text: '賈雨村', value: '0' }], {
  center: { x: 180, y: 200 },
  dd: 20,
  dr: 20,
  tdr: 10,
  fontFamily: 'Arial',
  scale: (0, _scale.scaleLinear)([0, 10], [13, 40]),
  done: function done() {
    document.querySelector('#tip').innerHTML = '';
  }
});

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WordCloud = function () {
  function WordCloud(data, option) {
    var _this = this;

    _classCallCheck(this, WordCloud);

    this.option = option;
    data.forEach(function (item) {
      item.fontSize = option.scale(item.value);
    });

    this.offScreenCanvas = document.getElementById('myCanvas');
    this.offScreenCtx = this.offScreenCanvas.getContext('2d');

    this.compositeCanvas = document.createElement('canvas');
    this.compositeCanvas.width = 400;
    this.compositeCanvas.height = 400;
    this.compositeCtx = this.compositeCanvas.getContext('2d');
    this.miniCanvas = document.createElement('canvas');
    this.miniCanvas.width = 100;
    this.miniCanvas.height = 100;
    this.miniCtx = this.miniCanvas.getContext('2d');

    data.forEach(function (item) {
      _this.drawText(item, option.dd, 0, _this.randomTextRotation());
    });

    this.option.done && this.option.done();
  }

  _createClass(WordCloud, [{
    key: 'drawText',
    value: function drawText(item, r, rotation, textRotation) {
      if (r < 500) {

        var x = this.option.center.x + r * Math.cos(rotation * Math.PI / 180);
        var y = this.option.center.y - r * Math.sin(rotation * Math.PI / 180);

        this.compositeCtx.clearRect(0, 0, 400, 400);
        this.compositeCtx.save();
        this.compositeCtx.drawImage(this.offScreenCanvas, 0, 0);
        this.compositeCtx.font = item.fontSize + 'px ' + this.option.fontFamily;
        this.compositeCtx.globalCompositeOperation = 'source-in';
        this.compositeCtx.translate(x, y);
        this.compositeCtx.rotate(textRotation * Math.PI / 180);
        this.compositeCtx.fillText(item.text, 0, 0);
        this.compositeCtx.restore();

        this.miniCtx.clearRect(0, 0, 100, 100);
        this.miniCtx.drawImage(this.compositeCanvas, 0, 0, 100, 100);

        if (this.havePixel(this.miniCanvas, this.miniCtx)) {

          // if (textRotation > -100000) {
          if (rotation === 360) {
            this.drawText(item, r + this.option.dd, 0, 0);
          } else {
            this.drawText(item, r, rotation + this.option.dr, textRotation);
          }

          // } else {
          //   this.drawText(item, r, rotation, textRotation + 2*this.option.tdr*Math.random()- this.option.tdr)
          // }
        } else {
          this.offScreenCtx.save();
          this.offScreenCtx.translate(x, y);
          this.offScreenCtx.rotate(textRotation * Math.PI / 180);
          this.offScreenCtx.font = item.fontSize + 'px ' + this.option.fontFamily;
          this.offScreenCtx.fillStyle = colorLuminance(randomHexColor(), -0.2);
          this.offScreenCtx.fillText(item.text, 0, 0);
          this.offScreenCtx.restore();
        }
      }
    }
  }, {
    key: 'randomTextRotation',
    value: function randomTextRotation() {

      return -70 + Math.floor(Math.random() * 15) * 10;
    }
  }, {
    key: 'havePixel',
    value: function havePixel(canvas, ctx) {
      var data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

      for (var i = 3; i < data.length; i += 4) {
        if (data[i] > 0) {
          return true;
        }
      }
    }
  }]);

  return WordCloud;
}();

function colorLuminance(hex, lum) {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // convert to decimal and change luminosity
  var rgb = "#",
      c,
      i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ("00" + c).substr(c.length);
  }

  return rgb;
}

function randomHexColor() {
  //随机生成十六进制颜色
  return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
}

exports.default = WordCloud;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scaleLinear = undefined;

var _linear = __webpack_require__(5);

exports.scaleLinear = _linear.scaleLinear;
exports.default = {
    scaleLinear: _linear.scaleLinear
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.scaleLinear = scaleLinear;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScaleLinear = function () {
    function ScaleLinear(domain, range) {
        _classCallCheck(this, ScaleLinear);

        this.domainFrom = domain[0];
        this.domainTo = domain[1];
        this.domainInterval = this.domainTo - this.domainFrom;

        this.rangeFrom = range[0];
        this.rangeTo = range[1];
        this.rangeInterval = this.rangeTo - this.rangeFrom;
    }

    _createClass(ScaleLinear, [{
        key: "calculate",
        value: function calculate(value) {
            return this.rangeFrom + (value - this.domainFrom) / this.domainInterval * this.rangeInterval;
        }
    }, {
        key: "invert",
        value: function invert(value) {

            return this.domainFrom + (value - this.rangeFrom) / this.rangeInterval * this.domainInterval;
        }
    }]);

    return ScaleLinear;
}();

function scaleLinear(domain, range) {
    var instance = new ScaleLinear(domain, range);

    var calculate = function calculate(v) {
        return instance.calculate(v);
    };

    calculate.domain = domain;
    calculate.range = range;
    calculate.invert = instance.invert.bind(instance);

    return calculate;
}

/***/ })
/******/ ]);