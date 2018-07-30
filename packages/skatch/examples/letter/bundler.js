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
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 *  cax v1.2.3
 *  By https://github.com/dntzhang 
 *  Github: https://github.com/dntzhang/cax
 *  MIT Licensed.
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["cax"] = factory();else root["cax"] = factory();
})(typeof self !== 'undefined' ? self : undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 16);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc) {
          return desc.value;
        } else {
          var getter = desc.get;if (getter === undefined) {
            return undefined;
          }return getter.call(receiver);
        }
      };

      var _graphics = __webpack_require__(3);

      var _graphics2 = _interopRequireDefault(_graphics);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var Shape = function (_Graphics) {
        _inherits(Shape, _Graphics);

        function Shape() {
          _classCallCheck(this, Shape);

          return _possibleConstructorReturn(this, (Shape.__proto__ || Object.getPrototypeOf(Shape)).apply(this, arguments));
        }

        _createClass(Shape, [{
          key: 'draw',

          // constructor() {
          //     super()
          // }

          value: function draw() {}
        }, {
          key: 'render',
          value: function render(ctx) {
            this.clear();
            this.draw();
            _get(Shape.prototype.__proto__ || Object.getPrototypeOf(Shape.prototype), 'render', this).call(this, ctx);
          }
        }]);

        return Shape;
      }(_graphics2.default);

      exports.default = Shape;

      /***/
    },
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc) {
          return desc.value;
        } else {
          var getter = desc.get;if (getter === undefined) {
            return undefined;
          }return getter.call(receiver);
        }
      };

      var _displayObject = __webpack_require__(2);

      var _displayObject2 = _interopRequireDefault(_displayObject);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var Group = function (_DisplayObject) {
        _inherits(Group, _DisplayObject);

        function Group(data) {
          _classCallCheck(this, Group);

          var _this = _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this, data));

          _this.children = [];
          return _this;
        }

        _createClass(Group, [{
          key: 'add',
          value: function add(child) {
            var len = arguments.length;

            for (var i = 0; i < len; i++) {
              this.children.push(arguments[i]);
              arguments[i].parent = this;
            }
          }
        }, {
          key: 'addChildAt',
          value: function addChildAt(child, index) {
            var par = child.parent;
            par && par.removeChildAt(par.children.indexOf(child));
            child.parent = this;
            this.children.splice(index, 0, child);
          }
        }, {
          key: 'removeChildAt',
          value: function removeChildAt(index) {
            var child = this.children[index];
            if (child) {
              child.parent = null;
            }
            this.children.splice(index, 1);
          }
        }, {
          key: 'replace',
          value: function replace(current, pre) {
            var index = pre.parent.children.indexOf(pre);
            this.removeChildAt(index);
            this.addChildAt(current, index);
          }
        }, {
          key: 'remove',
          value: function remove(child) {
            var len = arguments.length;
            var cLen = this.children.length;

            for (var i = 0; i < len; i++) {
              for (var j = 0; j < cLen; j++) {
                if (child.id === this.children[j].id) {
                  child.parent = null;
                  this.children.splice(j, 1);
                  j--;
                  cLen--;
                }
              }
            }
          }
        }, {
          key: 'empty',
          value: function empty() {
            this.children.forEach(function (child) {
              child.parent = null;
            });
            this.children.length = 0;
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.empty();
            // Stage does not have a parent
            this.parent && _get(Group.prototype.__proto__ || Object.getPrototypeOf(Group.prototype), 'destroy', this).call(this);
          }
        }]);

        return Group;
      }(_displayObject2.default);

      exports.default = Group;

      /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _matrix2d = __webpack_require__(21);

      var _matrix2d2 = _interopRequireDefault(_matrix2d);

      var _eventDispatcher = __webpack_require__(22);

      var _eventDispatcher2 = _interopRequireDefault(_eventDispatcher);

      var _uid = __webpack_require__(23);

      var _uid2 = _interopRequireDefault(_uid);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var DisplayObject = function (_EventDispatcher) {
        _inherits(DisplayObject, _EventDispatcher);

        function DisplayObject() {
          _classCallCheck(this, DisplayObject);

          var _this = _possibleConstructorReturn(this, (DisplayObject.__proto__ || Object.getPrototypeOf(DisplayObject)).call(this));

          _this.alpha = _this.complexAlpha = _this.scaleX = _this.scaleY = 1;
          _this.x = _this.y = _this.rotation = _this.skewX = _this.skewY = _this.originX = _this.originY = 0;
          _this.cursor = null;
          _this.visible = true;
          _this._matrix = new _matrix2d2.default();
          _this._hitMatrix = new _matrix2d2.default();
          _this.id = _uid2.default.get();
          _this.clipGraphics = null;
          _this.clipRuleNonzero = true;
          _this.fixed = false;
          _this.shadow = null;
          _this.compositeOperation = null;
          _this.absClipGraphics = null;
          _this.absClipRuleNonzero = true;
          _this.cacheUpdating = false;
          return _this;
        }

        _createClass(DisplayObject, [{
          key: 'isVisible',
          value: function isVisible() {
            return this.visible && this.alpha > 0 && this.scaleX !== 0 && this.scaleY !== 0;
          }
        }, {
          key: 'initAABB',
          value: function initAABB() {
            if (this.width === undefined || this.height === undefined) {
              return;
            }

            var x = void 0,
                y = void 0,
                width = this.width,
                height = this.height,
                mtx = this._matrix,
                xA = width * mtx.a,
                xB = width * mtx.b,
                yC = height * mtx.c,
                yD = height * mtx.d,
                tx = mtx.tx,
                ty = mtx.ty,
                minX = tx,
                maxX = tx,
                minY = ty,
                maxY = ty;

            if ((x = xA + tx) < minX) {
              minX = x;
            } else if (x > maxX) {
              maxX = x;
            }
            if ((x = xA + yC + tx) < minX) {
              minX = x;
            } else if (x > maxX) {
              maxX = x;
            }
            if ((x = yC + tx) < minX) {
              minX = x;
            } else if (x > maxX) {
              maxX = x;
            }
            if ((y = xB + ty) < minY) {
              minY = y;
            } else if (y > maxY) {
              maxY = y;
            }
            if ((y = xB + yD + ty) < minY) {
              minY = y;
            } else if (y > maxY) {
              maxY = y;
            }
            if ((y = yD + ty) < minY) {
              minY = y;
            } else if (y > maxY) {
              maxY = y;
            }
            this.AABB = [minX, minY, maxX - minX, maxY - minY];
            this.rectPoints = [{
              x: tx,
              y: ty
            }, {
              x: xA + tx,
              y: xB + ty
            }, {
              x: xA + yC + tx,
              y: xB + yD + ty
            }, {
              x: yC + tx,
              y: yD + ty
            }];
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.parent.remove(this);
          }
        }, {
          key: 'hover',
          value: function hover(over, out, move) {
            this.on('mouseover', over);
            this.on('mouseout', out);
            move && this.on('mousemove', move);
          }

          // https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/clip

        }, {
          key: 'clip',
          value: function clip(graphics, notClipRuleNonzero) {
            this.clipGraphics = graphics;
            this.clipRuleNonzero = !notClipRuleNonzero;
          }
        }, {
          key: 'unclip',
          value: function unclip() {
            this.clipGraphics = null;
          }
        }, {
          key: 'absClip',
          value: function absClip(graphics, notClipRuleNonzero) {
            this.absClipGraphics = graphics;
            this.absClipRuleNonzero = !notClipRuleNonzero;
          }
        }, {
          key: 'unAbsClip',
          value: function unAbsClip() {
            this.absClipGraphics = null;
          }
        }, {
          key: 'cache',
          value: function cache(x, y, width, height, scale, cacheUpdating) {
            this._cacheData = {
              x: x || 0,
              y: y || 0,
              width: width || this.width,
              height: height || this.height,
              scale: scale || 1
            };
            this.cacheUpdating = cacheUpdating;
            if (!this.cacheCanvas) {
              if (typeof wx !== 'undefined' && wx.createCanvas) {
                this.cacheCanvas = wx.createCanvas();
              } else {
                this.cacheCanvas = document.createElement('canvas');
              }
              this.cacheCtx = this.cacheCanvas.getContext('2d');
            }
            this.cacheCanvas.width = this._cacheData.width * this._cacheData.scale;
            this.cacheCanvas.height = this._cacheData.height * this._cacheData.scale;

            // debug cache canvas
            // this.cacheCtx.fillRect(0,0,1000,1000)
            this._readyToCache = true;
          }
        }, {
          key: 'uncache',
          value: function uncache() {
            this.cacheCanvas = null;
          }
        }, {
          key: 'filter',
          value: function filter(filterName, filterBox) {
            this.cache(filterBox.x || 0, filterBox.y || 0, filterBox.width || this.width, filterBox.height || this.height);
            this._readyToFilter = true;
            this._filterName = filterName;
          }
        }, {
          key: 'unfilter',
          value: function unfilter() {
            this.uncache();
          }
        }]);

        return DisplayObject;
      }(_eventDispatcher2.default);

      exports.default = DisplayObject;

      /***/
    },
    /* 3 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _displayObject = __webpack_require__(2);

      var _displayObject2 = _interopRequireDefault(_displayObject);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var assMap = {
        fillStyle: true,
        strokeStyle: true,
        lineWidth: true,
        lineCap: true,
        lineDashOffset: true,
        lineJoin: true,
        miterLimit: true
      };

      var Graphics = function (_DisplayObject) {
        _inherits(Graphics, _DisplayObject);

        function Graphics() {
          _classCallCheck(this, Graphics);

          var _this = _possibleConstructorReturn(this, (Graphics.__proto__ || Object.getPrototypeOf(Graphics)).call(this));

          _this.cmds = [];
          _this.currentGradient = null;
          return _this;
        }

        _createClass(Graphics, [{
          key: 'clearRect',
          value: function clearRect() {
            this.cmds.push(['clearRect', arguments]);
            return this;
          }
        }, {
          key: 'rect',
          value: function rect() {
            this.cmds.push(['rect', arguments]);
            return this;
          }
        }, {
          key: 'clear',
          value: function clear() {
            this.cmds.length = 0;
            return this;
          }
        }, {
          key: 'setLineDash',
          value: function setLineDash() {
            this.cmds.push(['setLineDash', arguments]);
            return this;
          }
        }, {
          key: 'strokeRect',
          value: function strokeRect() {
            this.cmds.push(['strokeRect', arguments]);
            return this;
          }
        }, {
          key: 'fillRect',
          value: function fillRect() {
            this.cmds.push(['fillRect', arguments]);
            return this;
          }
        }, {
          key: 'beginPath',
          value: function beginPath() {
            this.cmds.push(['beginPath', arguments]);
            return this;
          }
        }, {
          key: 'arc',
          value: function arc() {
            this.cmds.push(['arc', arguments]);
            return this;
          }
        }, {
          key: 'closePath',
          value: function closePath() {
            this.cmds.push(['closePath', arguments]);
            return this;
          }
        }, {
          key: 'fillStyle',
          value: function fillStyle() {
            this.cmds.push(['fillStyle', arguments]);
            return this;
          }
        }, {
          key: 'fill',
          value: function fill() {
            this.cmds.push(['fill', arguments]);
            return this;
          }
        }, {
          key: 'strokeStyle',
          value: function strokeStyle() {
            this.cmds.push(['strokeStyle', arguments]);
            return this;
          }
        }, {
          key: 'lineWidth',
          value: function lineWidth() {
            this.cmds.push(['lineWidth', arguments]);
            return this;
          }
        }, {
          key: 'lineCap',
          value: function lineCap() {
            this.cmds.push(['lineCap', arguments]);
            return this;
          }
        }, {
          key: 'lineDashOffset',
          value: function lineDashOffset() {
            this.cmds.push(['lineDashOffset', arguments]);
            return this;
          }
        }, {
          key: 'lineJoin',
          value: function lineJoin() {
            this.cmds.push(['lineJoin', arguments]);
            return this;
          }
        }, {
          key: 'miterLimit',
          value: function miterLimit() {
            this.cmds.push(['miterLimit', arguments]);
            return this;
          }
        }, {
          key: 'stroke',
          value: function stroke() {
            this.cmds.push(['stroke', arguments]);
            return this;
          }
        }, {
          key: 'moveTo',
          value: function moveTo() {
            this.cmds.push(['moveTo', arguments]);
            return this;
          }
        }, {
          key: 'lineTo',
          value: function lineTo() {
            this.cmds.push(['lineTo', arguments]);
            return this;
          }
        }, {
          key: 'bezierCurveTo',
          value: function bezierCurveTo() {
            this.cmds.push(['bezierCurveTo', arguments]);
            return this;
          }
        }, {
          key: 'quadraticCurveTo',
          value: function quadraticCurveTo() {
            this.cmds.push(['quadraticCurveTo', arguments]);
            return this;
          }
        }, {
          key: 'createRadialGradient',
          value: function createRadialGradient() {
            this.cmds.push(['createRadialGradient', arguments]);
            return this;
          }
        }, {
          key: 'createLinearGradient',
          value: function createLinearGradient() {
            this.cmds.push(['createLinearGradient', arguments]);
            return this;
          }
        }, {
          key: 'addColorStop',
          value: function addColorStop() {
            this.cmds.push(['addColorStop', arguments]);
            return this;
          }
        }, {
          key: 'fillGradient',
          value: function fillGradient() {
            this.cmds.push(['fillGradient']);
            return this;
          }
        }, {
          key: 'arcTo',
          value: function arcTo() {
            this.cmds.push(['arcTo', arguments]);
            return this;
          }
        }, {
          key: 'render',
          value: function render(ctx) {
            var _this2 = this;

            this.cmds.forEach(function (cmd) {
              var methodName = cmd[0];
              if (assMap[methodName]) {
                ctx[methodName] = cmd[1][0];
              } else if (methodName === 'addColorStop') {
                _this2.currentGradient && _this2.currentGradient.addColorStop(cmd[1][0], cmd[1][1]);
              } else if (methodName === 'fillGradient') {
                ctx.fillStyle = _this2.currentGradient;
              } else {
                var result = ctx[methodName].apply(ctx, Array.prototype.slice.call(cmd[1]));
                if (methodName === 'createRadialGradient' || methodName === 'createLinearGradient') {
                  _this2.currentGradient = result;
                }
              }
            });
          }
        }]);

        return Graphics;
      }(_displayObject2.default);

      exports.default = Graphics;

      /***/
    },
    /* 4 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _displayObject = __webpack_require__(2);

      var _displayObject2 = _interopRequireDefault(_displayObject);

      var _util = __webpack_require__(9);

      var _util2 = _interopRequireDefault(_util);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var Bitmap = function (_DisplayObject) {
        _inherits(Bitmap, _DisplayObject);

        function Bitmap(img, onLoad) {
          _classCallCheck(this, Bitmap);

          var _this = _possibleConstructorReturn(this, (Bitmap.__proto__ || Object.getPrototypeOf(Bitmap)).call(this));

          if (typeof img === 'string') {
            if (Bitmap.cache[img]) {
              if (_util2.default.isWeapp) {
                _this.img = Bitmap.cache[img].img;
                _this.rect = [0, 0, Bitmap.cache[img].width, Bitmap.cache[img].height];
                _this.width = _this.rect[2];
                _this.height = _this.rect[3];
              } else {
                _this.img = Bitmap.cache[img];
                _this.rect = [0, 0, _this.img.width, _this.img.height];
                _this.width = _this.img.width;
                _this.height = _this.img.height;
              }
              onLoad && onLoad.call(_this);
            } else if (_util2.default.isWeapp) {
              _util2.default.getImageInWx(img, function (result) {
                _this.img = result.img;
                if (!_this.rect) {
                  _this.rect = [0, 0, result.width, result.height];
                }
                _this.width = result.width;
                _this.height = result.height;
                onLoad && onLoad.call(_this);
                Bitmap.cache[img] = result;
              });
            } else {
              _this.img = _util2.default.isWegame ? wx.createImage() : new window.Image();
              _this.visible = false;
              _this.img.onload = function () {
                _this.visible = true;
                if (!_this.rect) {
                  _this.rect = [0, 0, _this.img.width, _this.img.height];
                }
                _this.width = _this.img.width;
                _this.height = _this.img.height;
                onLoad && onLoad.call(_this);
                Bitmap.cache[img] = _this.img;
              };
              _this.img.src = img;
            }
          } else {
            _this.img = img;
            _this.rect = [0, 0, img.width, img.height];
            _this.width = img.width;
            _this.height = img.height;
            Bitmap.cache[img.src] = img;
          }
          return _this;
        }

        _createClass(Bitmap, [{
          key: 'clone',
          value: function clone() {
            // 复制完img宽度0？？所以直接传字符串
            var bitmap = new Bitmap(typeof this.img === 'string' ? this.img : this.img.src);
            bitmap.x = this.x;
            bitmap.y = this.y;
            bitmap.scaleX = this.scaleX;
            bitmap.scaleY = this.scaleY;
            bitmap.rotation = this.rotation;
            bitmap.skewX = this.skewX;
            bitmap.skewY = this.skewY;
            bitmap.originX = this.originX;
            bitmap.originY = this.originY;
            bitmap.width = this.width;
            bitmap.height = this.height;
            bitmap.cursor = this.cursor;

            return bitmap;
          }
        }]);

        return Bitmap;
      }(_displayObject2.default);

      Bitmap.cache = {};

      exports.default = Bitmap;

      /***/
    },
    /* 5 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _displayObject = __webpack_require__(2);

      var _displayObject2 = _interopRequireDefault(_displayObject);

      var _util = __webpack_require__(9);

      var _util2 = _interopRequireDefault(_util);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var measureCtx = void 0;

      if (_util2.default.isWeapp) {
        measureCtx = wx.createCanvasContext('measure0');
      } else if (typeof document !== 'undefined') {
        measureCtx = document.createElement('canvas').getContext('2d');
      }

      var Text = function (_DisplayObject) {
        _inherits(Text, _DisplayObject);

        function Text(text, option) {
          _classCallCheck(this, Text);

          var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this));

          _this.text = text;
          option = option || {};
          _this.font = option.font || '10px sans-serif';
          _this.color = option.color || 'black';

          _this.baseline = option.baseline || 'top';
          return _this;
        }

        _createClass(Text, [{
          key: 'getWidth',
          value: function getWidth() {
            if (!measureCtx) {
              if (_util2.default.isWegame) {
                measureCtx = wx.createCanvas().getContext('2d');
              }
            }

            if (this.font) {
              measureCtx.font = this.font;
            }
            return measureCtx.measureText(this.text).width;
          }
        }]);

        return Text;
      }(_displayObject2.default);

      exports.default = Text;

      /***/
    },
    /* 6 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _displayObject = __webpack_require__(2);

      var _displayObject2 = _interopRequireDefault(_displayObject);

      var _util = __webpack_require__(9);

      var _util2 = _interopRequireDefault(_util);

      var _bitmap = __webpack_require__(4);

      var _bitmap2 = _interopRequireDefault(_bitmap);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var Sprite = function (_DisplayObject) {
        _inherits(Sprite, _DisplayObject);

        function Sprite(option) {
          _classCallCheck(this, Sprite);

          var _this = _possibleConstructorReturn(this, (Sprite.__proto__ || Object.getPrototypeOf(Sprite)).call(this));

          _this.option = option;
          var len = _this.option.imgs.length;
          var count = 0;
          var firstImg = _this.option.imgs[0];
          _this.imgMap = {};

          if (_util2.default.isWeapp) {
            _this.option.imgs.forEach(function (img) {
              _util2.default.getImageInWx(img, function (result) {
                _this.imgMap[img] = result.img;
                count++;
                if (count === len) {
                  _this.img = _this.imgMap[firstImg];
                  _this.rect = [0, 0, 0, 0];
                }
              });
            });
          } else {
            if (typeof firstImg === 'string') {
              var _len = _this.option.imgs.length;
              var loadedCount = 0;
              _this.option.imgs.forEach(function (src) {
                if (_bitmap2.default.cache[src]) {
                  _this.imgMap[src] = _bitmap2.default.cache[src];
                  loadedCount++;
                  if (loadedCount === _len) {
                    _this.img = _this.imgMap[firstImg];
                    _this.rect = [0, 0, 0, 0];
                  }
                } else {
                  var img = _util2.default.isWegame ? wx.createImage() : new window.Image();
                  img.onload = function () {
                    _this.imgMap[src] = img;
                    loadedCount++;
                    if (loadedCount === _len) {
                      _this.img = _this.imgMap[firstImg];
                      _this.rect = [0, 0, 0, 0];
                    }
                    _bitmap2.default.cache[src] = img;
                  };
                  img.src = src;
                }
              });
            } else if (firstImg instanceof _bitmap2.default) {
              _this.rect = [0, 0, 0, 0];
              _this.img = firstImg.img;
            } else {
              _this.rect = [0, 0, 0, 0];
              _this.img = firstImg;
            }
          }

          _this.x = option.x || 0;
          _this.y = option.y || 0;
          _this.currentFrameIndex = 0;
          _this.animationFrameIndex = 0;
          _this.currentAnimation = option.currentAnimation || null;

          _this.interval = 1e3 / option.framerate;

          _this.paused = false;
          _this.animationEnd = option.animationEnd || function () {};
          if (_this.currentAnimation) {
            if (option.playOnce) {
              _this.gotoAndPlayOnce(_this.currentAnimation);
            } else {
              _this.gotoAndPlay(_this.currentAnimation);
            }
          }
          return _this;
        }

        _createClass(Sprite, [{
          key: 'play',
          value: function play() {
            this.paused = false;
          }
        }, {
          key: 'pause',
          value: function pause() {
            this.paused = true;
          }
        }, {
          key: 'reset',
          value: function reset() {
            this.currentFrameIndex = 0;
            this.animationFrameIndex = 0;
          }
        }, {
          key: 'updateFrame',
          value: function updateFrame() {
            if (!this.paused) {
              var opt = this.option;
              this.dt = Date.now() - this.startTime;
              var frames = opt.animations[this.currentAnimation].frames;
              var len = frames.length;
              var index = Math.floor(this.dt / this.interval % len);
              this.rect = opt.frames[frames[index]];
              var rectLen = this.rect.length;

              rectLen > 4 && (this.originX = this.rect[2] * this.rect[4]);
              rectLen > 5 && (this.originY = this.rect[3] * this.rect[5]);
              rectLen > 6 && (this.img = this.imgMap[this.option.imgs[this.rect[6]]]);

              if (index === len - 1 && (!this.endTime || Date.now() - this.endTime > this.interval)) {
                this.endTime = Date.now();
                this.animationEnd();
                if (this._willDestroy) {
                  this.destroy();
                }
              }
            }
          }
        }, {
          key: 'gotoAndPlay',
          value: function gotoAndPlay(animation) {
            this.paused = false;
            this.reset();
            this.currentAnimation = animation;
            this.startTime = Date.now();
          }
        }, {
          key: 'gotoAndStop',
          value: function gotoAndStop(animation) {
            this.reset();
            this.paused = true;
            this.currentAnimation = animation;
            var opt = this.option;
            var frames = opt.animations[this.currentAnimation].frames;
            this.rect = opt.frames[frames[this.animationFrameIndex]];
            var rect = this.rect;
            this.width = rect[2];
            this.height = rect[3];
            var rectLen = rect.length;
            rectLen > 4 && (this.originX = rect[2] * rect[4]);
            rectLen > 5 && (this.originY = rect[3] * rect[5]);
            rectLen > 6 && (this.img = this.imgMap[this.option.imgs[rect[6]]]);
          }
        }, {
          key: 'gotoAndPlayOnce',
          value: function gotoAndPlayOnce(animation) {
            this.gotoAndPlay(animation);
            this._willDestroy = true;
          }
        }]);

        return Sprite;
      }(_displayObject2.default);

      exports.default = Sprite;

      /***/
    },
    /* 7 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var Event = function () {
        function Event() {
          _classCallCheck(this, Event);

          this.propagationStopped = false;
          this.stageX = null;
          this.stageY = null;
          this.pureEvent = null;
        }

        _createClass(Event, [{
          key: "stopPropagation",
          value: function stopPropagation() {
            this.propagationStopped = true;
          }
        }, {
          key: "preventDefault",
          value: function preventDefault() {
            this.pureEvent.preventDefault();
          }
        }]);

        return Event;
      }();

      exports.default = Event;

      /***/
    },
    /* 8 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var Render = function () {
        function Render() {
          _classCallCheck(this, Render);
        }

        _createClass(Render, [{
          key: "render",
          value: function render() {}
        }, {
          key: "renderGraphics",
          value: function renderGraphics() {}
        }, {
          key: "clear",
          value: function clear() {}
        }]);

        return Render;
      }();

      exports.default = Render;

      /***/
    },
    /* 9 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /* WEBPACK VAR INJECTION */
      (function (global) {

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
          return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        } : function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        };

        exports.getImageInWx = getImageInWx;
        function getImageInWx(img, callback) {
          if (img.indexOf('https://') === -1 && img.indexOf('http://') === -1 || img.indexOf('http://tmp/') === 0) {
            wx.getImageInfo({
              src: img,
              success: function success(info) {
                callback({
                  img: img,
                  width: info.width,
                  height: info.height
                });
              }
            });
          } else {
            wx.downloadFile({
              url: img,
              success: function success(res) {
                if (res.statusCode === 200) {
                  wx.getImageInfo({
                    src: res.tempFilePath,
                    success: function success(info) {
                      callback({
                        img: res.tempFilePath,
                        width: info.width,
                        height: info.height
                      });
                    }
                  });
                }
              }
            });
          }
        }

        function getGlobal() {
          if ((typeof global === 'undefined' ? 'undefined' : _typeof(global)) !== 'object' || !global || global.Math !== Math || global.Array !== Array) {
            if (typeof self !== 'undefined') {
              return self;
            } else if (typeof window !== 'undefined') {
              return window;
            } else if (typeof global !== 'undefined') {
              return global;
            }
            return function () {
              return this;
            }();
          }
          return global;
        }

        var root = getGlobal();

        exports.default = {
          getImageInWx: getImageInWx,
          root: root,
          isWeapp: typeof wx !== 'undefined' && !wx.createCanvas,
          isWegame: typeof wx !== 'undefined' && wx.createCanvas
        };
        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(25));

      /***/
    },
    /* 10 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /* WEBPACK VAR INJECTION */
      (function (process) {

        var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
          return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        } : function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        };

        /**
         * Tween.js - Licensed under the MIT license
         * https://github.com/tweenjs/tween.js
         * ----------------------------------------------
         *
         * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
         * Thank you all, you're awesome!
         */

        var _Group = function _Group() {
          this._tweens = {};
          this._tweensAddedDuringUpdate = {};
        };

        _Group.prototype = {
          getAll: function getAll() {
            return Object.keys(this._tweens).map(function (tweenId) {
              return this._tweens[tweenId];
            }.bind(this));
          },

          removeAll: function removeAll() {
            this._tweens = {};
          },

          add: function add(tween) {
            this._tweens[tween.getId()] = tween;
            this._tweensAddedDuringUpdate[tween.getId()] = tween;
          },

          remove: function remove(tween) {
            delete this._tweens[tween.getId()];
            delete this._tweensAddedDuringUpdate[tween.getId()];
          },

          update: function update(time, preserve) {
            var tweenIds = Object.keys(this._tweens);

            if (tweenIds.length === 0) {
              return false;
            }

            time = time !== undefined ? time : TWEEN.now();

            // Tweens are updated in "batches". If you add a new tween during an update, then the
            // new tween will be updated in the next batch.
            // If you remove a tween during an update, it may or may not be updated. However,
            // if the removed tween was added during the current batch, then it will not be updated.
            while (tweenIds.length > 0) {
              this._tweensAddedDuringUpdate = {};

              for (var i = 0; i < tweenIds.length; i++) {
                var tween = this._tweens[tweenIds[i]];

                if (tween && tween.update(time) === false) {
                  tween._isPlaying = false;

                  if (!preserve) {
                    delete this._tweens[tweenIds[i]];
                  }
                }
              }

              tweenIds = Object.keys(this._tweensAddedDuringUpdate);
            }

            return true;
          }
        };

        var TWEEN = new _Group();

        TWEEN.Group = _Group;
        TWEEN._nextId = 0;
        TWEEN.nextId = function () {
          return TWEEN._nextId++;
        };

        // Include a performance.now polyfill.
        // In node.js, use process.hrtime.
        if (typeof window === 'undefined' && typeof process !== 'undefined') {
          if (typeof wx !== 'undefined') {
            TWEEN.now = Date.now;
          } else {
            TWEEN.now = function () {
              var time = process.hrtime();

              // Convert [seconds, nanoseconds] to milliseconds.
              return time[0] * 1000 + time[1] / 1000000;
            };
          }
        } else if (typeof window !== 'undefined' &&
        // In a browser, use window.performance.now if it is available.
        window.performance !== undefined && window.performance.now !== undefined) {
          // This must be bound, because directly assigning this function
          // leads to an invocation exception in Chrome.
          TWEEN.now = window.performance.now.bind(window.performance);
        } else if (Date.now !== undefined) {
          // Use Date.now if it is available.
          TWEEN.now = Date.now;
        } else {
          // Otherwise, use 'new Date().getTime()'.
          TWEEN.now = function () {
            return new Date().getTime();
          };
        }

        TWEEN.Tween = function (object, group) {
          this._object = object;
          this._valuesStart = {};
          this._valuesEnd = {};
          this._valuesStartRepeat = {};
          this._duration = 1000;
          this._repeat = 0;
          this._repeatDelayTime = undefined;
          this._yoyo = false;
          this._isPlaying = false;
          this._reversed = false;
          this._delayTime = 0;
          this._startTime = null;
          this._easingFunction = TWEEN.Easing.Linear.None;
          this._interpolationFunction = TWEEN.Interpolation.Linear;
          this._chainedTweens = [];
          this._onStartCallback = null;
          this._onStartCallbackFired = false;
          this._onUpdateCallback = null;
          this._onCompleteCallback = null;
          this._onStopCallback = null;
          this._group = group || TWEEN;
          this._id = TWEEN.nextId();

          this._paused = false;
          this._passTime = null;
        };

        TWEEN.Tween.prototype = {
          getId: function getId() {
            return this._id;
          },

          toggle: function toggle() {
            if (this._paused) {
              this.play();
            } else {
              this.pause();
            }
          },

          pause: function pause() {
            this._paused = true;
            var pauseTime = TWEEN.now();
            this._passTime = pauseTime - this._startTime;
          },

          play: function play() {
            this._paused = false;
            var nowTime = TWEEN.now();
            this._startTime = nowTime - this._passTime;
          },

          isPlaying: function isPlaying() {
            return this._isPlaying;
          },

          to: function to(properties, duration) {
            this._valuesEnd = properties;

            if (duration !== undefined) {
              this._duration = duration;
            }

            return this;
          },

          start: function start(time) {
            this._group.add(this);

            this._isPlaying = true;

            this._onStartCallbackFired = false;

            this._startTime = time !== undefined ? typeof time === 'string' ? TWEEN.now() + parseFloat(time) : time : TWEEN.now();
            this._startTime += this._delayTime;

            for (var property in this._valuesEnd) {
              // Check if an Array was provided as property value
              if (this._valuesEnd[property] instanceof Array) {
                if (this._valuesEnd[property].length === 0) {
                  continue;
                }

                // Create a local copy of the Array with the start value at the front
                this._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);
              }

              // If `to()` specifies a property that doesn't exist in the source object,
              // we should not set that property in the object
              if (this._object[property] === undefined) {
                continue;
              }

              // Save the starting value.
              this._valuesStart[property] = this._object[property];

              if (this._valuesStart[property] instanceof Array === false) {
                this._valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
              }

              this._valuesStartRepeat[property] = this._valuesStart[property] || 0;
            }

            return this;
          },

          stop: function stop() {
            if (!this._isPlaying) {
              return this;
            }

            this._group.remove(this);
            this._isPlaying = false;

            if (this._onStopCallback !== null) {
              this._onStopCallback(this._object);
            }

            this.stopChainedTweens();
            return this;
          },

          end: function end() {
            this.update(this._startTime + this._duration);
            return this;
          },

          stopChainedTweens: function stopChainedTweens() {
            for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
              this._chainedTweens[i].stop();
            }
          },

          group: function group(group) {
            this._group = group;
            return this;
          },

          delay: function delay(amount) {
            this._delayTime = amount;
            return this;
          },

          repeat: function repeat(times) {
            this._repeat = times;
            return this;
          },

          repeatDelay: function repeatDelay(amount) {
            this._repeatDelayTime = amount;
            return this;
          },

          yoyo: function yoyo(yy) {
            this._yoyo = yy;
            return this;
          },

          easing: function easing(eas) {
            this._easingFunction = eas;
            return this;
          },

          interpolation: function interpolation(inter) {
            this._interpolationFunction = inter;
            return this;
          },

          chain: function chain() {
            this._chainedTweens = arguments;
            return this;
          },

          onStart: function onStart(callback) {
            this._onStartCallback = callback;
            return this;
          },

          onUpdate: function onUpdate(callback) {
            this._onUpdateCallback = callback;
            return this;
          },

          onComplete: function onComplete(callback) {
            this._onCompleteCallback = callback;
            return this;
          },

          onStop: function onStop(callback) {
            this._onStopCallback = callback;
            return this;
          },

          update: function update(time) {
            if (this._paused) return true;
            var property;
            var elapsed;
            var value;

            if (time < this._startTime) {
              return true;
            }

            if (this._onStartCallbackFired === false) {
              if (this._onStartCallback !== null) {
                this._onStartCallback(this._object);
              }

              this._onStartCallbackFired = true;
            }

            elapsed = (time - this._startTime) / this._duration;
            elapsed = this._duration === 0 || elapsed > 1 ? 1 : elapsed;

            value = this._easingFunction(elapsed);

            for (property in this._valuesEnd) {
              // Don't update properties that do not exist in the source object
              if (this._valuesStart[property] === undefined) {
                continue;
              }

              var start = this._valuesStart[property] || 0;
              var end = this._valuesEnd[property];

              if (end instanceof Array) {
                this._object[property] = this._interpolationFunction(end, value);
              } else {
                // Parses relative end values with start as base (e.g.: +10, -3)
                if (typeof end === 'string') {
                  if (end.charAt(0) === '+' || end.charAt(0) === '-') {
                    end = start + parseFloat(end);
                  } else {
                    end = parseFloat(end);
                  }
                }

                // Protect against non numeric properties.
                if (typeof end === 'number') {
                  this._object[property] = start + (end - start) * value;
                }
              }
            }

            if (this._onUpdateCallback !== null) {
              this._onUpdateCallback(this._object);
            }

            if (elapsed === 1) {
              if (this._repeat > 0) {
                if (isFinite(this._repeat)) {
                  this._repeat--;
                }

                // Reassign starting values, restart by making startTime = now
                for (property in this._valuesStartRepeat) {
                  if (typeof this._valuesEnd[property] === 'string') {
                    this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
                  }

                  if (this._yoyo) {
                    var tmp = this._valuesStartRepeat[property];

                    this._valuesStartRepeat[property] = this._valuesEnd[property];
                    this._valuesEnd[property] = tmp;
                  }

                  this._valuesStart[property] = this._valuesStartRepeat[property];
                }

                if (this._yoyo) {
                  this._reversed = !this._reversed;
                }

                if (this._repeatDelayTime !== undefined) {
                  this._startTime = time + this._repeatDelayTime;
                } else {
                  this._startTime = time + this._delayTime;
                }

                return true;
              } else {
                if (this._onCompleteCallback !== null) {
                  this._onCompleteCallback(this._object);
                }

                for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
                  // Make the chained tweens start exactly at the time they should,
                  // even if the `update()` method was called way past the duration of the tween
                  this._chainedTweens[i].start(this._startTime + this._duration);
                }

                return false;
              }
            }

            return true;
          }
        };

        TWEEN.Easing = {

          Linear: {

            None: function None(k) {
              return k;
            }

          },

          Quadratic: {

            In: function In(k) {
              return k * k;
            },

            Out: function Out(k) {
              return k * (2 - k);
            },

            InOut: function InOut(k) {
              if ((k *= 2) < 1) {
                return 0.5 * k * k;
              }

              return -0.5 * (--k * (k - 2) - 1);
            }

          },

          Cubic: {

            In: function In(k) {
              return k * k * k;
            },

            Out: function Out(k) {
              return --k * k * k + 1;
            },

            InOut: function InOut(k) {
              if ((k *= 2) < 1) {
                return 0.5 * k * k * k;
              }

              return 0.5 * ((k -= 2) * k * k + 2);
            }

          },

          Quartic: {

            In: function In(k) {
              return k * k * k * k;
            },

            Out: function Out(k) {
              return 1 - --k * k * k * k;
            },

            InOut: function InOut(k) {
              if ((k *= 2) < 1) {
                return 0.5 * k * k * k * k;
              }

              return -0.5 * ((k -= 2) * k * k * k - 2);
            }

          },

          Quintic: {

            In: function In(k) {
              return k * k * k * k * k;
            },

            Out: function Out(k) {
              return --k * k * k * k * k + 1;
            },

            InOut: function InOut(k) {
              if ((k *= 2) < 1) {
                return 0.5 * k * k * k * k * k;
              }

              return 0.5 * ((k -= 2) * k * k * k * k + 2);
            }

          },

          Sinusoidal: {

            In: function In(k) {
              return 1 - Math.cos(k * Math.PI / 2);
            },

            Out: function Out(k) {
              return Math.sin(k * Math.PI / 2);
            },

            InOut: function InOut(k) {
              return 0.5 * (1 - Math.cos(Math.PI * k));
            }

          },

          Exponential: {

            In: function In(k) {
              return k === 0 ? 0 : Math.pow(1024, k - 1);
            },

            Out: function Out(k) {
              return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
            },

            InOut: function InOut(k) {
              if (k === 0) {
                return 0;
              }

              if (k === 1) {
                return 1;
              }

              if ((k *= 2) < 1) {
                return 0.5 * Math.pow(1024, k - 1);
              }

              return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
            }

          },

          Circular: {

            In: function In(k) {
              return 1 - Math.sqrt(1 - k * k);
            },

            Out: function Out(k) {
              return Math.sqrt(1 - --k * k);
            },

            InOut: function InOut(k) {
              if ((k *= 2) < 1) {
                return -0.5 * (Math.sqrt(1 - k * k) - 1);
              }

              return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
            }

          },

          Elastic: {

            In: function In(k) {
              if (k === 0) {
                return 0;
              }

              if (k === 1) {
                return 1;
              }

              return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
            },

            Out: function Out(k) {
              if (k === 0) {
                return 0;
              }

              if (k === 1) {
                return 1;
              }

              return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
            },

            InOut: function InOut(k) {
              if (k === 0) {
                return 0;
              }

              if (k === 1) {
                return 1;
              }

              k *= 2;

              if (k < 1) {
                return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
              }

              return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
            }

          },

          Back: {

            In: function In(k) {
              var s = 1.70158;

              return k * k * ((s + 1) * k - s);
            },

            Out: function Out(k) {
              var s = 1.70158;

              return --k * k * ((s + 1) * k + s) + 1;
            },

            InOut: function InOut(k) {
              var s = 1.70158 * 1.525;

              if ((k *= 2) < 1) {
                return 0.5 * (k * k * ((s + 1) * k - s));
              }

              return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
            }

          },

          Bounce: {

            In: function In(k) {
              return 1 - TWEEN.Easing.Bounce.Out(1 - k);
            },

            Out: function Out(k) {
              if (k < 1 / 2.75) {
                return 7.5625 * k * k;
              } else if (k < 2 / 2.75) {
                return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
              } else if (k < 2.5 / 2.75) {
                return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
              } else {
                return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
              }
            },

            InOut: function InOut(k) {
              if (k < 0.5) {
                return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
              }

              return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
            }

          }

        };

        TWEEN.Interpolation = {

          Linear: function Linear(v, k) {
            var m = v.length - 1;
            var f = m * k;
            var i = Math.floor(f);
            var fn = TWEEN.Interpolation.Utils.Linear;

            if (k < 0) {
              return fn(v[0], v[1], f);
            }

            if (k > 1) {
              return fn(v[m], v[m - 1], m - f);
            }

            return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
          },

          Bezier: function Bezier(v, k) {
            var b = 0;
            var n = v.length - 1;
            var pw = Math.pow;
            var bn = TWEEN.Interpolation.Utils.Bernstein;

            for (var i = 0; i <= n; i++) {
              b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
            }

            return b;
          },

          CatmullRom: function CatmullRom(v, k) {
            var m = v.length - 1;
            var f = m * k;
            var i = Math.floor(f);
            var fn = TWEEN.Interpolation.Utils.CatmullRom;

            if (v[0] === v[m]) {
              if (k < 0) {
                i = Math.floor(f = m * (1 + k));
              }

              return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
            } else {
              if (k < 0) {
                return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
              }

              if (k > 1) {
                return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
              }

              return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
            }
          },

          Utils: {

            Linear: function Linear(p0, p1, t) {
              return (p1 - p0) * t + p0;
            },

            Bernstein: function Bernstein(n, i) {
              var fc = TWEEN.Interpolation.Utils.Factorial;

              return fc(n) / fc(i) / fc(n - i);
            },

            Factorial: function () {
              var a = [1];

              return function (n) {
                var s = 1;

                if (a[n]) {
                  return a[n];
                }

                for (var i = n; i > 1; i--) {
                  s *= i;
                }

                a[n] = s;
                return s;
              };
            }(),

            CatmullRom: function CatmullRom(p0, p1, p2, p3, t) {
              var v0 = (p2 - p0) * 0.5;
              var v1 = (p3 - p1) * 0.5;
              var t2 = t * t;
              var t3 = t * t2;

              return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
            }

          }

        };

        // UMD (Universal Module Definition)
        (function (root) {
          if (typeof module !== 'undefined' && (false ? 'undefined' : _typeof(exports)) === 'object') {
            // Node.js
            module.exports = TWEEN;
          } else if (root !== undefined) {
            // Global variable
            root.TWEEN = TWEEN;
          }
        })(undefined);
        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(17));

      /***/
    },
    /* 11 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _tween = __webpack_require__(10);

      var _tween2 = _interopRequireDefault(_tween);

      var _rafInterval = __webpack_require__(12);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var To = function () {
        function To(element) {
          _classCallCheck(this, To);

          this.element = element;
          this.cmds = [];
          this.index = 0;
          this.tweens = [];
          this._pause = false;
          this.loop = (0, _rafInterval.setRafInterval)(function () {
            _tween2.default.update();
          }, 15);
          this.cycleCount = 0;
        }

        _createClass(To, [{
          key: 'to',
          value: function to(target, duration, easing) {
            this.cmds.push(['to']);
            if (arguments.length !== 0) {
              for (var key in target) {
                this.set(key, target[key], duration, easing);
              }
            }
            return this;
          }
        }, {
          key: 'set',
          value: function set(prop, value, duration, easing) {
            this.cmds[this.cmds.length - 1].push([prop, [value, duration, easing]]);
            return this;
          }
        }, {
          key: 'x',
          value: function x() {
            this.cmds[this.cmds.length - 1].push(['x', arguments]);
            return this;
          }
        }, {
          key: 'y',
          value: function y() {
            this.cmds[this.cmds.length - 1].push(['y', arguments]);
            return this;
          }
        }, {
          key: 'z',
          value: function z() {
            this.cmds[this.cmds.length - 1].push(['z', arguments]);
            return this;
          }
        }, {
          key: 'rotation',
          value: function rotation() {
            this.cmds[this.cmds.length - 1].push(['rotation', arguments]);
            return this;
          }
        }, {
          key: 'scaleX',
          value: function scaleX() {
            this.cmds[this.cmds.length - 1].push(['scaleX', arguments]);
            return this;
          }
        }, {
          key: 'scaleY',
          value: function scaleY() {
            this.cmds[this.cmds.length - 1].push(['scaleY', arguments]);
            return this;
          }
        }, {
          key: 'skewX',
          value: function skewX() {
            this.cmds[this.cmds.length - 1].push(['skewX', arguments]);
            return this;
          }
        }, {
          key: 'skewY',
          value: function skewY() {
            this.cmds[this.cmds.length - 1].push(['skewY', arguments]);
            return this;
          }
        }, {
          key: 'originX',
          value: function originX() {
            this.cmds[this.cmds.length - 1].push(['originX', arguments]);
            return this;
          }
        }, {
          key: 'originY',
          value: function originY() {
            this.cmds[this.cmds.length - 1].push(['originY', arguments]);
            return this;
          }
        }, {
          key: 'alpha',
          value: function alpha() {
            this.cmds[this.cmds.length - 1].push(['alpha', arguments]);
            return this;
          }
        }, {
          key: 'begin',
          value: function begin(fn) {
            this.cmds[this.cmds.length - 1].begin = fn;
            return this;
          }
        }, {
          key: 'progress',
          value: function progress(fn) {
            this.cmds[this.cmds.length - 1].progress = fn;
            return this;
          }
        }, {
          key: 'end',
          value: function end(fn) {
            this.cmds[this.cmds.length - 1].end = fn;
            return this;
          }
        }, {
          key: 'wait',
          value: function wait() {
            this.cmds.push(['wait', arguments]);
            return this;
          }
        }, {
          key: 'then',
          value: function then() {
            this.cmds.push(['then', arguments]);
            return this;
          }
        }, {
          key: 'cycle',
          value: function cycle() {
            this.cmds.push(['cycle', arguments]);
            return this;
          }
        }, {
          key: 'start',
          value: function start() {
            if (this._pause) return;
            var len = this.cmds.length;
            if (this.index < len) {
              this.exec(this.cmds[this.index], this.index === len - 1);
            } else {
              (0, _rafInterval.clearRafInterval)(this.loop);
            }
            return this;
          }
        }, {
          key: 'pause',
          value: function pause() {
            this._pause = true;
            for (var i = 0, len = this.tweens.length; i < len; i++) {
              this.tweens[i].pause();
            }
            if (this.currentTask === 'wait') {
              this.timeout -= new Date() - this.currentTaskBegin;
              this.currentTaskBegin = new Date();
            }
          }
        }, {
          key: 'toggle',
          value: function toggle() {
            if (this._pause) {
              this.play();
            } else {
              this.pause();
            }
          }
        }, {
          key: 'play',
          value: function play() {
            this._pause = false;
            for (var i = 0, len = this.tweens.length; i < len; i++) {
              this.tweens[i].play();
            }
            var self = this;
            if (this.currentTask === 'wait') {
              setTimeout(function () {
                if (self._pause) return;
                self.index++;
                self.start();
                if (self.index === self.cmds.length && self.complete) self.complete();
              }, this.timeout);
            }
          }
        }, {
          key: 'stop',
          value: function stop() {
            for (var i = 0, len = this.tweens.length; i < len; i++) {
              this.tweens[i].stop();
            }
            this.cmds.length = 0;
          }
        }, {
          key: 'animate',
          value: function animate(name) {
            this.cmds = this.cmds.concat(To.animationMap[name] || []);
            return this;
          }
        }, {
          key: 'exec',
          value: function exec(cmd, last) {
            var len = cmd.length,
                self = this;
            this.currentTask = cmd[0];
            switch (this.currentTask) {
              case 'to':
                self.stepCompleteCount = 0;
                for (var i = 1; i < len; i++) {
                  var task = cmd[i];
                  var ease = task[1][2];
                  var target = {};
                  var prop = task[0];
                  target[prop] = task[1][0];

                  var t = new _tween2.default.Tween(this.element).to(target, task[1][1]).onStart(function () {
                    if (cmd.begin) cmd.begin.call(self.element, self.element);
                  }).onUpdate(function () {
                    if (cmd.progress) cmd.progress.call(self.element, self.element);
                    // self.element[prop] = this[prop];
                  }).easing(ease || _tween2.default.Easing.Linear.None).onComplete(function () {
                    self.stepCompleteCount++;
                    if (self.stepCompleteCount === len - 1) {
                      if (cmd.end) cmd.end.call(self.element, self.element);
                      if (last && self.complete) self.complete();
                      self.index++;
                      self.start();
                    }
                  }).start();
                  this.tweens.push(t);
                }
                break;
              case 'wait':
                this.currentTaskBegin = new Date();
                this.timeout = cmd[1][0];
                setTimeout(function () {
                  if (self._pause) return;
                  self.index++;
                  self.start();
                  if (cmd.end) cmd.end.call(self.element, self.element);
                  if (last && self.complete) self.complete();
                }, cmd[1][0]);
                break;
              case 'then':
                var arg = cmd[1][0];
                arg.index = 0;
                arg.complete = function () {
                  self.index++;
                  self.start();
                  if (last && self.complete) self.complete();
                };
                arg.start();
                break;
              case 'cycle':
                var count = cmd[1][1];
                if (count === undefined) {
                  self.index = cmd[1][0] || 0;
                  self.start();
                } else {
                  if (count && self.cycleCount === count) {
                    self.index++;
                    self.start();
                    if (last && self.complete) self.complete();
                  } else {
                    self.cycleCount++;
                    self.index = cmd[1][0];
                    self.start();
                  }
                }
                break;
            }
          }
        }]);

        return To;
      }();

      To.get = function (element) {
        var to = new To(element);
        return to;
      };

      To.animationMap = {};
      To.extend = function (animationName, cmds) {
        To.animationMap[animationName] = cmds;
      };

      exports.default = To;

      /***/
    },
    /* 12 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.setRafInterval = setRafInterval;
      exports.clearRafInterval = clearRafInterval;
      /*!
       *  raf-interval v0.3.0 By dntzhang
       *  Github: https://github.com/dntzhang/raf-interval
       *  MIT Licensed.
       */

      if (!Date.now) {
        Date.now = function now() {
          return new Date().getTime();
        };
      }

      var queue = [],
          id = -1,
          ticking = false,
          tickId = null,
          now = Date.now,
          lastTime = 0,
          vendors = ['ms', 'moz', 'webkit', 'o'],
          x = 0,
          isWeapp = typeof wx !== 'undefined' && !wx.createCanvas,
          isWegame = typeof wx !== 'undefined' && wx.createCanvas,
          isBrowser = typeof window !== 'undefined';

      var raf = isBrowser ? window.requestAnimationFrame : null;
      var caf = isBrowser ? window.cancelAnimationFrame : null;

      function mockRaf(callback, element) {
        var currTime = now();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = setTimeout(function () {
          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      }

      function mockCaf(id) {
        clearTimeout(id);
      }

      if (isBrowser) {
        window.setRafInterval = setRafInterval;
        window.clearRafInterval = clearRafInterval;

        for (; x < vendors.length && !window.requestAnimationFrame; ++x) {
          window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
          window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
        }

        if (!raf) {
          raf = mockRaf;
          caf = mockCaf;
          window.requestAnimationFrame = raf;
          window.cancelAnimationFrame = caf;
        }
      } else if (isWeapp) {
        raf = mockRaf;
        caf = mockCaf;
      } else if (isWegame) {
        raf = requestAnimationFrame;
        caf = cancelAnimationFrame;
      }

      function setRafInterval(fn, interval) {
        id++;
        queue.push({ id: id, fn: fn, interval: interval, lastTime: now() });
        if (!ticking) {
          var tick = function tick() {
            tickId = raf(tick);
            each(queue, function (item) {
              if (item.interval < 17 || now() - item.lastTime >= item.interval) {
                item.fn();
                item.lastTime = now();
              }
            });
          };
          ticking = true;
          tick();
        }
        return id;
      }

      function clearRafInterval(id) {
        var i = 0,
            len = queue.length;

        for (; i < len; i++) {
          if (id === queue[i].id) {
            queue.splice(i, 1);
            break;
          }
        }

        if (queue.length === 0) {
          caf(tickId);
          ticking = false;
        }
      }

      function each(arr, fn) {
        if (Array.prototype.forEach) {
          arr.forEach(fn);
        } else {
          var i = 0,
              len = arr.length;
          for (; i < len; i++) {
            fn(arr[i], i);
          }
        }
      }

      /***/
    },
    /* 13 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _canvasRender = __webpack_require__(24);

      var _canvasRender2 = _interopRequireDefault(_canvasRender);

      var _group = __webpack_require__(1);

      var _group2 = _interopRequireDefault(_group);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var Renderer = function () {
        function Renderer(canvasOrContext, width, height) {
          _classCallCheck(this, Renderer);

          this.renderList = [];
          if (arguments.length === 3) {
            this.renderer = new _canvasRender2.default(canvasOrContext, width, height);
            this.width = width;
            this.height = height;
          } else {
            this.renderer = new _canvasRender2.default(canvasOrContext);
            this.width = canvasOrContext.width;
            this.height = canvasOrContext.height;
          }
          this.ctx = this.renderer.ctx;
        }

        _createClass(Renderer, [{
          key: 'update',
          value: function update(stage) {
            this.renderer.clear(this.ctx, this.width, this.height);
            this.renderer.render(this.ctx, stage);
            this.ctx.draw && this.ctx.draw();
          }
        }, {
          key: 'getHitRenderList',
          value: function getHitRenderList(stage) {
            var objs = this.renderList;
            objs.length = 0;
            this.computeMatrix(stage);
            return objs;
          }
        }, {
          key: 'computeMatrix',
          value: function computeMatrix(stage) {
            for (var i = 0, len = stage.children.length; i < len; i++) {
              this._computeMatrix(stage.children[i]);
            }
          }
        }, {
          key: 'initComplex',
          value: function initComplex(o) {
            o.complexCompositeOperation = this._getCompositeOperation(o);
            o.complexAlpha = this._getAlpha(o, 1);
          }
        }, {
          key: '_computeMatrix',
          value: function _computeMatrix(o, mtx) {
            if (!o.isVisible()) {
              return;
            }
            if (mtx && !o.fixed) {
              o._matrix.initialize(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
            } else {
              o._matrix.initialize(1, 0, 0, 1, 0, 0);
            }

            o._matrix.appendTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation, o.skewX, o.skewY, o.originX, o.originY);

            if (o instanceof _group2.default) {
              var list = o.children,
                  len = list.length,
                  i = 0;
              for (; i < len; i++) {
                this._computeMatrix(list[i], o._matrix);
              }
            } else {
              // if (o instanceof Graphics) {
              //   this.renderList.push(o)
              //   this.initComplex(o)
              // } else {
              o.initAABB();
              // if (this.isInStage(o)) {
              this.renderList.push(o);
              this.initComplex(o);
              // }
              // }
            }
          }
        }, {
          key: '_getCompositeOperation',
          value: function _getCompositeOperation(o) {
            if (o.compositeOperation) return o.compositeOperation;
            if (o.parent) return this._getCompositeOperation(o.parent);
          }
        }, {
          key: '_getAlpha',
          value: function _getAlpha(o, alpha) {
            var result = o.alpha * alpha;
            if (o.parent) {
              return this._getAlpha(o.parent, result);
            }
            return result;
          }
        }, {
          key: 'isInStage',
          value: function isInStage(o) {
            return this.collisionBetweenAABB(o.AABB, this.stage.AABB);
          }
        }, {
          key: 'collisionBetweenAABB',
          value: function collisionBetweenAABB(AABB1, AABB2) {
            var maxX = AABB1[0] + AABB1[2];
            if (maxX < AABB2[0]) return false;
            var minX = AABB1[0];
            if (minX > AABB2[0] + AABB2[2]) return false;
            var maxY = AABB1[1] + AABB1[3];
            if (maxY < AABB2[1]) return false;
            var minY = AABB1[1];
            if (minY > AABB2[1] + AABB2[3]) return false;
            return true;
          }
        }]);

        return Renderer;
      }();

      exports.default = Renderer;

      /***/
    },
    /* 14 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _group = __webpack_require__(1);

      var _group2 = _interopRequireDefault(_group);

      var _renderer = __webpack_require__(13);

      var _renderer2 = _interopRequireDefault(_renderer);

      var _wxHitRender = __webpack_require__(38);

      var _wxHitRender2 = _interopRequireDefault(_wxHitRender);

      var _event = __webpack_require__(7);

      var _event2 = _interopRequireDefault(_event);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var WeStage = function (_Group) {
        _inherits(WeStage, _Group);

        function WeStage(width, height, id, page) {
          _classCallCheck(this, WeStage);

          var _this = _possibleConstructorReturn(this, (WeStage.__proto__ || Object.getPrototypeOf(WeStage)).call(this));

          var component = page.selectComponent('#' + id);
          component.setData({
            width: width,
            height: height
          });
          component.stage = _this;
          var canvasId = component.getCaxCanvasId();

          var ctx = wx.createCanvasContext(canvasId, component);
          var hitCtx = wx.createCanvasContext(canvasId + 'Hit', component);
          _this.renderer = new _renderer2.default(ctx, width, height);
          _this._hitRender = new _wxHitRender2.default(hitCtx, component, canvasId);
          _this._overObject = null;
          _this.ctx = ctx;
          _this.hitAABB = true;
          _this.width = width;
          _this.height = height;
          return _this;
        }

        _createClass(WeStage, [{
          key: 'touchStartHandler',
          value: function touchStartHandler(evt) {
            var _this2 = this;

            var p1 = evt.changedTouches[0];

            evt.stageX = p1.x;
            evt.stageY = p1.y;

            this._getObjectUnderPoint(evt, function (obj) {
              _this2.willDragObject = obj;
              _this2._mouseDownX = evt.stageX;
              _this2._mouseDownY = evt.stageY;
              _this2.preStageX = evt.stageX;
              _this2.preStageY = evt.stageY;
            });
          }
        }, {
          key: 'touchMoveHandler',
          value: function touchMoveHandler(evt) {
            var _this3 = this;

            var p1 = evt.changedTouches[0];

            evt.stageX = p1.x;
            evt.stageY = p1.y;

            this._getObjectUnderPoint(evt, function (obj) {
              var mockEvt = new _event2.default();
              mockEvt.stageX = evt.stageX;
              mockEvt.stageY = evt.stageY;
              mockEvt.pureEvent = evt;

              if (_this3.willDragObject) {
                mockEvt.type = 'drag';
                mockEvt.dx = mockEvt.stageX - _this3.preStageX;
                mockEvt.dy = mockEvt.stageY - _this3.preStageY;
                _this3.preStageX = mockEvt.stageX;
                _this3.preStageY = mockEvt.stageY;
                _this3.willDragObject.dispatchEvent(mockEvt);
              }

              if (obj) {
                if (_this3._overObject === null) {
                  _this3._overObject = obj;
                } else {
                  if (obj.id !== _this3._overObject.id) {
                    _this3._overObject = obj;
                  } else {
                    mockEvt.type = 'touchmove';
                    obj.dispatchEvent(mockEvt);
                  }
                }
              } else if (_this3._overObject) {
                _this3._overObject = null;
              }
            });
          }
        }, {
          key: 'touchEndHandler',
          value: function touchEndHandler(evt) {
            var _this4 = this;

            var p1 = evt.changedTouches[0];

            evt.stageX = p1.x;
            evt.stageY = p1.y;

            var mockEvt = new _event2.default();
            mockEvt.stageX = evt.stageX;
            mockEvt.stageY = evt.stageY;

            mockEvt.pureEvent = evt;

            this._getObjectUnderPoint(evt, function (obj) {
              _this4._mouseUpX = evt.stageX;
              _this4._mouseUpY = evt.stageY;

              _this4.willDragObject = null;
              _this4.preStageX = null;
              _this4.preStageY = null;

              if (obj && Math.abs(_this4._mouseDownX - _this4._mouseUpX) < 30 && Math.abs(_this4._mouseDownY - _this4._mouseUpY) < 30) {
                mockEvt.type = 'tap';
                obj.dispatchEvent(mockEvt);
              }
            });
          }
        }, {
          key: '_handleMouseOut',
          value: function _handleMouseOut(evt) {
            this.dispatchEvent({
              pureEvent: evt,
              type: 'mouseout',
              stageX: evt.stageX,
              stageY: evt.stageY
            });
          }
        }, {
          key: '_getObjectUnderPoint',
          value: function _getObjectUnderPoint(evt, cb) {
            var list = this.renderer.getHitRenderList(this);
            if (this.hitAABB) {
              return this._hitRender.hitAABB(list, evt, cb);
            } else {
              this._hitRender.clear();
              this._hitRender.hit(list, evt, cb, list.length - 1);
            }
          }
        }, {
          key: 'update',
          value: function update() {
            this.renderer.update(this);
          }
        }]);

        return WeStage;
      }(_group2.default);

      exports.default = WeStage;

      /***/
    },
    /* 15 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _shape = __webpack_require__(0);

      var _shape2 = _interopRequireDefault(_shape);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var RoundedRect = function (_Shape) {
        _inherits(RoundedRect, _Shape);

        function RoundedRect(width, height, r, option) {
          _classCallCheck(this, RoundedRect);

          var _this = _possibleConstructorReturn(this, (RoundedRect.__proto__ || Object.getPrototypeOf(RoundedRect)).call(this));

          _this.option = Object.assign({
            lineWidth: 1
          }, option);
          _this.r = r || 0;
          _this.width = width;
          _this.height = height;
          return _this;
        }

        _createClass(RoundedRect, [{
          key: 'draw',
          value: function draw() {
            var width = this.width,
                height = this.height,
                r = this.r;

            var ax = r,
                ay = 0,
                bx = width,
                by = 0,
                cx = width,
                cy = height,
                dx = 0,
                dy = height,
                ex = 0,
                ey = 0;

            this.beginPath();

            this.moveTo(ax, ay);
            this.arcTo(bx, by, cx, cy, r);
            this.arcTo(cx, cy, dx, dy, r);
            this.arcTo(dx, dy, ex, ey, r);
            this.arcTo(ex, ey, ax, ay, r);

            if (this.option.fillStyle) {
              this.closePath();
              this.fillStyle(this.option.fillStyle);
              this.fill();
            }

            if (this.option.strokeStyle) {
              this.lineWidth(this.option.lineWidth);
              this.strokeStyle(this.option.strokeStyle);
              this.stroke();
            }
          }
        }]);

        return RoundedRect;
      }(_shape2.default);

      exports.default = RoundedRect;

      /***/
    },
    /* 16 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var _tween = __webpack_require__(10);

      var _tween2 = _interopRequireDefault(_tween);

      var _to = __webpack_require__(11);

      var _to2 = _interopRequireDefault(_to);

      __webpack_require__(18);

      var _stage = __webpack_require__(19);

      var _stage2 = _interopRequireDefault(_stage);

      var _weStage = __webpack_require__(14);

      var _weStage2 = _interopRequireDefault(_weStage);

      var _graphics = __webpack_require__(3);

      var _graphics2 = _interopRequireDefault(_graphics);

      var _bitmap = __webpack_require__(4);

      var _bitmap2 = _interopRequireDefault(_bitmap);

      var _text = __webpack_require__(5);

      var _text2 = _interopRequireDefault(_text);

      var _group = __webpack_require__(1);

      var _group2 = _interopRequireDefault(_group);

      var _sprite = __webpack_require__(6);

      var _sprite2 = _interopRequireDefault(_sprite);

      var _shape = __webpack_require__(0);

      var _shape2 = _interopRequireDefault(_shape);

      var _roundedRect = __webpack_require__(15);

      var _roundedRect2 = _interopRequireDefault(_roundedRect);

      var _arrowPath = __webpack_require__(39);

      var _arrowPath2 = _interopRequireDefault(_arrowPath);

      var _ellipse = __webpack_require__(40);

      var _ellipse2 = _interopRequireDefault(_ellipse);

      var _path = __webpack_require__(41);

      var _path2 = _interopRequireDefault(_path);

      var _button = __webpack_require__(44);

      var _button2 = _interopRequireDefault(_button);

      var _rect = __webpack_require__(45);

      var _rect2 = _interopRequireDefault(_rect);

      var _circle = __webpack_require__(46);

      var _circle2 = _interopRequireDefault(_circle);

      var _polygon = __webpack_require__(47);

      var _polygon2 = _interopRequireDefault(_polygon);

      var _equilateralPolygon = __webpack_require__(48);

      var _equilateralPolygon2 = _interopRequireDefault(_equilateralPolygon);

      var _rafInterval = __webpack_require__(12);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      _to2.default.easing = {
        linear: _tween2.default.Easing.Linear.None
      };

      var cax = {
        easing: {
          linear: _tween2.default.Easing.Linear.None
        },
        util: {
          randomInt: function randomInt(min, max) {
            return min + Math.floor(Math.random() * (max - min + 1));
          }
        },

        Stage: _stage2.default,
        WeStage: _weStage2.default,
        Graphics: _graphics2.default,
        Bitmap: _bitmap2.default,
        Text: _text2.default,
        Group: _group2.default,
        Sprite: _sprite2.default,
        Shape: _shape2.default,

        ArrowPath: _arrowPath2.default,
        Ellipse: _ellipse2.default,
        Path: _path2.default,

        Button: _button2.default,

        RoundedRect: _roundedRect2.default,
        Rect: _rect2.default,
        Circle: _circle2.default,
        Polygon: _polygon2.default,
        EquilateralPolygon: _equilateralPolygon2.default,

        setInterval: _rafInterval.setRafInterval,
        clearInterval: _rafInterval.clearRafInterval,
        tick: function tick(fn) {
          return (0, _rafInterval.setRafInterval)(fn, 16);
        },
        untick: function untick(tickId) {
          (0, _rafInterval.clearRafInterval)(tickId);
        },

        caxCanvasId: 0,
        TWEEN: _tween2.default,
        To: _to2.default
      };

      ['Quadratic', 'Cubic', 'Quartic', 'Quintic', 'Sinusoidal', 'Exponential', 'Circular', 'Elastic', 'Back', 'Bounce'].forEach(function (item) {
        var itemLower = item.toLowerCase();
        cax.easing[itemLower + 'In'] = _tween2.default.Easing[item].In;
        cax.easing[itemLower + 'Out'] = _tween2.default.Easing[item].Out;
        cax.easing[itemLower + 'InOut'] = _tween2.default.Easing[item].InOut;

        _to2.default.easing[itemLower + 'In'] = _tween2.default.Easing[item].In;
        _to2.default.easing[itemLower + 'Out'] = _tween2.default.Easing[item].Out;
        _to2.default.easing[itemLower + 'InOut'] = _tween2.default.Easing[item].InOut;
      });

      cax.loadImg = function (option) {
        var img = new Image();
        img.onload = function () {
          option.complete(this);
        };
        img.src = option.img;
      };

      cax.loadImgs = function (option) {
        var result = [];
        var loaded = 0;
        var len = option.imgs.length;
        option.imgs.forEach(function (src, index) {
          var img = new Image();
          img.onload = function (i, img) {
            return function () {
              result[i] = img;
              loaded++;
              option.progress && option.progress(loaded / len, loaded, i, img, result);
              if (loaded === len) {
                option.complete && option.complete(result);
              }
            };
          }(index, img);
          img.src = src;
        });
      };

      module.exports = cax;

      /***/
    },
    /* 17 */
    /***/function (module, exports) {

      // shim for using process in browser
      var process = module.exports = {};

      // cached from whatever global is present so that test runners that stub it
      // don't break things.  But we need to wrap it in a try catch in case it is
      // wrapped in strict mode code which doesn't define any globals.  It's inside a
      // function because try/catches deoptimize in certain engines.

      var cachedSetTimeout;
      var cachedClearTimeout;

      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }
      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }
      (function () {
        try {
          if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;

      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }

      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }

      process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };

      // v8 likes predictible objects
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      process.title = 'browser';
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = ''; // empty string to avoid regexp issues
      process.versions = {};

      function noop() {}

      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;

      process.listeners = function (name) {
        return [];
      };

      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };

      process.cwd = function () {
        return '/';
      };
      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };
      process.umask = function () {
        return 0;
      };

      /***/
    },
    /* 18 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var _to = __webpack_require__(11);

      var _to2 = _interopRequireDefault(_to);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      _to2.default.extend('rubber', [['to', ['scaleX', {
        '0': 1.25,
        '1': 300
      }], ['scaleY', {
        '0': 0.75,
        '1': 300
      }]], ['to', ['scaleX', {
        '0': 0.75,
        '1': 100
      }], ['scaleY', {
        '0': 1.25,
        '1': 100
      }]], ['to', ['scaleX', {
        '0': 1.15,
        '1': 100
      }], ['scaleY', {
        '0': 0.85,
        '1': 100
      }]], ['to', ['scaleX', {
        '0': 0.95,
        '1': 150
      }], ['scaleY', {
        '0': 1.05,
        '1': 150
      }]], ['to', ['scaleX', {
        '0': 1.05,
        '1': 100
      }], ['scaleY', {
        '0': 0.95,
        '1': 100
      }]], ['to', ['scaleX', {
        '0': 1,
        '1': 250
      }], ['scaleY', {
        '0': 1,
        '1': 250
      }]]]);

      _to2.default.extend('bounceIn', [['to', ['scaleX', {
        '0': 0,
        '1': 0
      }], ['scaleY', {
        '0': 0,
        '1': 0
      }]], ['to', ['scaleX', {
        '0': 1.35,
        '1': 200
      }], ['scaleY', {
        '0': 1.35,
        '1': 200
      }]], ['to', ['scaleX', {
        '0': 0.9,
        '1': 100
      }], ['scaleY', {
        '0': 0.9,
        '1': 100
      }]], ['to', ['scaleX', {
        '0': 1.1,
        '1': 100
      }], ['scaleY', {
        '0': 1.1,
        '1': 100
      }]], ['to', ['scaleX', {
        '0': 0.95,
        '1': 100
      }], ['scaleY', {
        '0': 0.95,
        '1': 100
      }]], ['to', ['scaleX', {
        '0': 1,
        '1': 100
      }], ['scaleY', {
        '0': 1,
        '1': 100
      }]]]);

      _to2.default.extend('flipInX', [['to', ['rotateX', {
        '0': -90,
        '1': 0
      }]], ['to', ['rotateX', {
        '0': 20,
        '1': 300
      }]], ['to', ['rotateX', {
        '0': -20,
        '1': 300
      }]], ['to', ['rotateX', {
        '0': 10,
        '1': 300
      }]], ['to', ['rotateX', {
        '0': -5,
        '1': 300
      }]], ['to', ['rotateX', {
        '0': 0,
        '1': 300
      }]]]);

      _to2.default.extend('zoomOut', [['to', ['scaleX', {
        '0': 0,
        '1': 400
      }], ['scaleY', {
        '0': 0,
        '1': 400
      }]]]);

      /***/
    },
    /* 19 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _wegameCanvas = __webpack_require__(20);

      var _wegameCanvas2 = _interopRequireDefault(_wegameCanvas);

      var _group = __webpack_require__(1);

      var _group2 = _interopRequireDefault(_group);

      var _renderer = __webpack_require__(13);

      var _renderer2 = _interopRequireDefault(_renderer);

      var _hitRender = __webpack_require__(37);

      var _hitRender2 = _interopRequireDefault(_hitRender);

      var _event = __webpack_require__(7);

      var _event2 = _interopRequireDefault(_event);

      var _weStage = __webpack_require__(14);

      var _weStage2 = _interopRequireDefault(_weStage);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var Stage = function (_Group) {
        _inherits(Stage, _Group);

        function Stage(width, height, renderTo) {
          _classCallCheck(this, Stage);

          var _this = _possibleConstructorReturn(this, (Stage.__proto__ || Object.getPrototypeOf(Stage)).call(this));

          var len = arguments.length;
          _this.isWegame = typeof wx !== 'undefined' && wx.createCanvas;
          if (len === 0) {
            // wegame
            _this.canvas = _wegameCanvas2.default;
            _this.disableMoveDetection = true;
          } else if (len === 4) {
            var _ret;

            // weapp
            return _ret = new _weStage2.default(arguments[0], arguments[1], arguments[2], arguments[3]), _possibleConstructorReturn(_this, _ret);
          } else {
            if (len === 1) {
              _this.canvas = typeof width === 'string' ? document.querySelector(width) : width;
            } else {
              _this.renderTo = typeof renderTo === 'string' ? document.querySelector(renderTo) : renderTo;
              if (_this.renderTo.tagName === 'CANVAS') {
                _this.canvas = _this.renderTo;
                _this.canvas.width = width;
                _this.canvas.height = height;
              } else {
                _this.canvas = document.createElement('canvas');
                _this.canvas.width = width;
                _this.canvas.height = height;
                _this.renderTo.appendChild(_this.canvas);
              }
            }
            // get rect again when trigger onscroll onresize event!?
            _this._boundingClientRect = _this.canvas.getBoundingClientRect();

            _this.offset = _this._getOffset(_this.canvas);
          }
          _this.renderer = new _renderer2.default(_this.canvas);
          if (_this.isWegame) {
            wx.onTouchStart(function (evt) {
              return _this._handleMouseDown(evt);
            });

            wx.onTouchMove(function (evt) {
              return _this._handleMouseMove(evt);
            });

            wx.onTouchEnd(function (evt) {
              return _this._handleMouseUp(evt);
            });
          } else {
            _this.canvas.addEventListener('click', function (evt) {
              return _this._handleClick(evt);
            });
            _this.canvas.addEventListener('mousedown', function (evt) {
              return _this._handleMouseDown(evt);
            });
            _this.canvas.addEventListener('mousemove', function (evt) {
              return _this._handleMouseMove(evt);
            });
            _this.canvas.addEventListener('mouseup', function (evt) {
              return _this._handleMouseUp(evt);
            });
            _this.canvas.addEventListener('mouseout', function (evt) {
              return _this._handleMouseOut(evt);
            });
            _this.canvas.addEventListener('touchstart', function (evt) {
              return _this._handleMouseDown(evt);
            });
            _this.canvas.addEventListener('touchmove', function (evt) {
              return _this._handleMouseMove(evt);
            });
            _this.canvas.addEventListener('touchend', function (evt) {
              return _this._handleMouseUp(evt);
            });

            _this.canvas.addEventListener('dblclick', function (evt) {
              return _this._handleDblClick(evt);
            });
            // this.addEvent(this.canvas, "mousewheel", this._handleMouseWheel.bind(this));

            document.addEventListener('contextmenu', function (evt) {
              return _this._handleContextmenu(evt);
            });
          }

          _this.borderTopWidth = 0;
          _this.borderLeftWidth = 0;

          _this.hitAABB = false;
          _this._hitRender = new _hitRender2.default();

          _this._overObject = null;

          _this._scaleX = 1;
          _this._scaleY = 1;

          _this._mouseDownX = 0;
          _this._mouseDownY = 0;

          _this._mouseUpX = 0;
          _this._mouseUpY = 0;

          _this.willDragObject = null;
          _this.preStageX = null;
          _this.preStageY = null;

          _this.width = _this.canvas.width;
          _this.height = _this.canvas.height;
          return _this;
        }

        _createClass(Stage, [{
          key: '_handleContextmenu',
          value: function _handleContextmenu(evt) {
            this._getObjectUnderPoint(evt);
          }
        }, {
          key: '_handleDblClick',
          value: function _handleDblClick(evt) {
            this._getObjectUnderPoint(evt);
          }
        }, {
          key: '_handleClick',
          value: function _handleClick(evt) {
            if (Math.abs(this._mouseDownX - this._mouseUpX) < 20 && Math.abs(this._mouseDownY - this._mouseUpY) < 20) {
              this._getObjectUnderPoint(evt);
            }
          }
        }, {
          key: '_handleMouseDown',
          value: function _handleMouseDown(evt) {
            if (this.isWegame) {
              evt.type = 'touchstart';
            }
            this.offset = this._getOffset(this.canvas);
            var obj = this._getObjectUnderPoint(evt);
            this.willDragObject = obj;
            this._mouseDownX = evt.stageX;
            this._mouseDownY = evt.stageY;
            this.preStageX = evt.stageX;
            this.preStageY = evt.stageY;
          }
        }, {
          key: 'scaleEventPoint',
          value: function scaleEventPoint(x, y) {
            this._scaleX = x;
            this._scaleY = y;
          }
        }, {
          key: '_handleMouseUp',
          value: function _handleMouseUp(evt) {
            if (this.isWegame) {
              evt.type = 'touchend';
            }
            var obj = this._getObjectUnderPoint(evt);
            this._mouseUpX = evt.stageX;
            this._mouseUpY = evt.stageY;

            var mockEvt = new _event2.default();
            mockEvt.stageX = evt.stageX;
            mockEvt.stageY = evt.stageY;
            mockEvt.pureEvent = evt;

            this.willDragObject = null;
            this.preStageX = null;
            this.preStageY = null;

            if (obj && Math.abs(this._mouseDownX - this._mouseUpX) < 30 && Math.abs(this._mouseDownY - this._mouseUpY) < 30) {
              mockEvt.type = 'tap';
              obj.dispatchEvent(mockEvt);
            }
          }
        }, {
          key: '_handleMouseOut',
          value: function _handleMouseOut(evt) {
            this._computeStageXY(evt);
            this.dispatchEvent({
              pureEvent: evt,
              type: 'mouseout',
              stageX: evt.stageX,
              stageY: evt.stageY
            });
          }
        }, {
          key: '_handleMouseMove',
          value: function _handleMouseMove(evt) {
            if (this.isWegame) {
              evt.type = 'touchmove';
            }
            if (this.disableMoveDetection) return;
            var obj = this._getObjectUnderPoint(evt);
            var mockEvt = new _event2.default();
            mockEvt.stageX = evt.stageX;
            mockEvt.stageY = evt.stageY;
            mockEvt.pureEvent = evt;

            if (this.willDragObject) {
              mockEvt.type = 'drag';
              mockEvt.dx = mockEvt.stageX - this.preStageX;
              mockEvt.dy = mockEvt.stageY - this.preStageY;
              this.preStageX = mockEvt.stageX;
              this.preStageY = mockEvt.stageY;
              this.willDragObject.dispatchEvent(mockEvt);
            }

            if (obj) {
              if (this._overObject === null) {
                mockEvt.type = 'mouseover';
                obj.dispatchEvent(mockEvt);
                this._overObject = obj;
                this._setCursor(obj);
              } else {
                if (obj.id !== this._overObject.id) {
                  this._overObject.dispatchEvent({
                    pureEvent: evt,
                    type: 'mouseout',
                    stageX: evt.stageX,
                    stageY: evt.stageY
                  });
                  mockEvt.type = 'mouseover';
                  obj.dispatchEvent(mockEvt);
                  this._setCursor(obj);
                  this._overObject = obj;
                } else {
                  mockEvt.type = 'mousemove';
                  obj.dispatchEvent(mockEvt);
                  mockEvt.type = 'touchmove';
                  obj.dispatchEvent(mockEvt);
                }
              }
            } else if (this._overObject) {
              mockEvt.type = 'mouseout';
              this._overObject.dispatchEvent(mockEvt);
              this._overObject = null;
              this._setCursor({ cursor: 'default' });
            }
          }
        }, {
          key: '_setCursor',
          value: function _setCursor(obj) {
            if (!this.canvas.style) {
              return;
            }
            if (obj.cursor) {
              this.canvas.style.cursor = obj.cursor;
            } else if (obj.parent) {
              this._setCursor(obj.parent);
            } else {
              this._setCursor({ cursor: 'default' });
            }
          }
        }, {
          key: '_getObjectUnderPoint',
          value: function _getObjectUnderPoint(evt) {
            this._computeStageXY(evt);
            if (this.hitAABB) {
              return this._hitRender.hitAABB(this, evt);
            } else {
              return this._hitRender.hitPixel(this, evt);
            }
          }
        }, {
          key: '_computeStageXY',
          value: function _computeStageXY(evt) {
            this._boundingClientRect = this.isWegame ? { left: 0, top: 0 } : this.canvas.getBoundingClientRect();
            if (evt.touches || evt.changedTouches) {
              var firstTouch = evt.touches[0] || evt.changedTouches[0];
              if (firstTouch) {
                evt.stageX = (firstTouch.pageX - this.offset[0]) / this._scaleX;
                evt.stageY = (firstTouch.pageY - this.offset[1]) / this._scaleY;
              }
            } else {
              evt.stageX = (evt.clientX - this._boundingClientRect.left - this.borderLeftWidth) / this._scaleX;
              evt.stageY = (evt.clientY - this._boundingClientRect.top - this.borderTopWidth) / this._scaleY;
            }
          }
        }, {
          key: '_getOffset',
          value: function _getOffset(el) {
            if (this.isWegame) {
              return [0, 0];
            }
            var _t = 0,
                _l = 0;
            if (document.documentElement.getBoundingClientRect && el.getBoundingClientRect) {
              var box = el.getBoundingClientRect();
              _l = box.left;
              _t = box.top;
            } else {
              while (el.offsetParent) {
                _t += el.offsetTop;
                _l += el.offsetLeft;
                el = el.offsetParent;
              }
              return [_l, _t];
            }
            return [_l + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), _t + Math.max(document.documentElement.scrollTop, document.body.scrollTop)];
          }
        }, {
          key: 'update',
          value: function update() {
            this.renderer.update(this);
          }
        }, {
          key: 'on',
          value: function on(type, fn) {
            var _this2 = this;

            this.canvas.addEventListener(type, function (evt) {
              _this2._computeStageXY(evt);
              fn(evt);
            });
          }
        }, {
          key: 'off',
          value: function off(type, fn) {
            this.canvas.removeEventListener(type, fn);
          }
        }]);

        return Stage;
      }(_group2.default);

      exports.default = Stage;

      /***/
    },
    /* 20 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var wegameCanvas = null;
      if (typeof wx !== 'undefined' && wx.createCanvas) {
        wegameCanvas = wx.createCanvas();
      }

      exports.default = wegameCanvas;

      /***/
    },
    /* 21 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var DEG_TO_RAD = 0.017453292519943295;

      var Matrix2D = function () {
        function Matrix2D(a, b, c, d, tx, ty) {
          _classCallCheck(this, Matrix2D);

          this.a = a == null ? 1 : a;
          this.b = b || 0;
          this.c = c || 0;
          this.d = d == null ? 1 : d;
          this.tx = tx || 0;
          this.ty = ty || 0;
          return this;
        }

        _createClass(Matrix2D, [{
          key: "identity",
          value: function identity() {
            this.a = this.d = 1;
            this.b = this.c = this.tx = this.ty = 0;
            return this;
          }
        }, {
          key: "appendTransform",
          value: function appendTransform(x, y, scaleX, scaleY, rotation, skewX, skewY, originX, originY) {
            if (rotation % 360) {
              var r = rotation * DEG_TO_RAD;
              var cos = Math.cos(r);
              var sin = Math.sin(r);
            } else {
              cos = 1;
              sin = 0;
            }
            if (skewX || skewY) {
              skewX *= DEG_TO_RAD;
              skewY *= DEG_TO_RAD;
              this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), x, y);
              this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, 0, 0);
            } else {
              this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y);
            }
            if (originX || originY) {
              this.tx -= originX * this.a + originY * this.c;
              this.ty -= originX * this.b + originY * this.d;
            }
            return this;
          }
        }, {
          key: "append",
          value: function append(a, b, c, d, tx, ty) {
            var a1 = this.a;
            var b1 = this.b;
            var c1 = this.c;
            var d1 = this.d;
            this.a = a * a1 + b * c1;
            this.b = a * b1 + b * d1;
            this.c = c * a1 + d * c1;
            this.d = c * b1 + d * d1;
            this.tx = tx * a1 + ty * c1 + this.tx;
            this.ty = tx * b1 + ty * d1 + this.ty;
            return this;
          }
        }, {
          key: "initialize",
          value: function initialize(a, b, c, d, tx, ty) {
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
            this.tx = tx;
            this.ty = ty;
            return this;
          }
        }, {
          key: "setValues",
          value: function setValues(a, b, c, d, tx, ty) {
            this.a = a == null ? 1 : a;
            this.b = b || 0;
            this.c = c || 0;
            this.d = d == null ? 1 : d;
            this.tx = tx || 0;
            this.ty = ty || 0;
            return this;
          }
        }, {
          key: "invert",
          value: function invert() {
            var a1 = this.a;
            var b1 = this.b;
            var c1 = this.c;
            var d1 = this.d;
            var tx1 = this.tx;
            var n = a1 * d1 - b1 * c1;

            this.a = d1 / n;
            this.b = -b1 / n;
            this.c = -c1 / n;
            this.d = a1 / n;
            this.tx = (c1 * this.ty - d1 * tx1) / n;
            this.ty = -(a1 * this.ty - b1 * tx1) / n;
            return this;
          }
        }, {
          key: "copy",
          value: function copy(matrix) {
            return this.setValues(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
          }
        }]);

        return Matrix2D;
      }();

      exports.default = Matrix2D;

      /***/
    },
    /* 22 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var MOUSEOUT = 'mouseout';

      var EventDispatcher = function () {
        function EventDispatcher() {
          _classCallCheck(this, EventDispatcher);

          this._listeners = null;
          this._captureListeners = null;
        }

        _createClass(EventDispatcher, [{
          key: 'addEventListener',
          value: function addEventListener(type, listener, useCapture) {
            var listeners;
            if (useCapture) {
              listeners = this._captureListeners = this._captureListeners || {};
            } else {
              listeners = this._listeners = this._listeners || {};
            }
            var arr = listeners[type];
            if (arr) {
              this.removeEventListener(type, listener, useCapture);
            }
            arr = listeners[type]; // remove may have deleted the array
            if (!arr) {
              listeners[type] = [listener];
            } else {
              arr.push(listener);
            }
            return listener;
          }
        }, {
          key: 'removeEventListener',
          value: function removeEventListener(type, listener, useCapture) {
            var listeners = useCapture ? this._captureListeners : this._listeners;
            if (!listeners) {
              return;
            }
            var arr = listeners[type];
            if (!arr) {
              return;
            }

            arr.every(function (item, index) {
              if (item === listener) {
                arr.splice(index, 1);
                return false;
              }
              return true;
            });
          }
        }, {
          key: 'on',
          value: function on(type, listener, useCapture) {
            this.addEventListener(type, listener, useCapture);
          }
        }, {
          key: 'off',
          value: function off(type, listener, useCapture) {
            this.removeEventListener(type, listener, useCapture);
          }
        }, {
          key: 'dispatchEvent',
          value: function dispatchEvent(evt) {
            if (evt.type === MOUSEOUT || !this.parent) {
              this._dispatchEvent(evt, 0);
              this._dispatchEvent(evt, 1);
            } else {
              var top = this,
                  list = [top];
              while (top.parent) {
                list.push(top = top.parent);
              }
              var i,
                  l = list.length;

              // capture & atTarget
              for (i = l - 1; i >= 0 && !evt.propagationStopped; i--) {
                list[i]._dispatchEvent(evt, 0);
              }
              // bubbling
              for (i = 0; i < l && !evt.propagationStopped; i++) {
                list[i]._dispatchEvent(evt, 1);
              }
            }
          }
        }, {
          key: '_dispatchEvent',
          value: function _dispatchEvent(evt, type) {
            var _this = this;

            evt.target = this;
            if (this._captureListeners && type === 0) {
              var cls = this._captureListeners[evt.type];
              cls && cls.forEach(function (fn) {
                fn.call(_this, evt);
              });
            }

            if (this._listeners && type === 1) {
              var ls = this._listeners[evt.type];
              ls && ls.forEach(function (fn) {
                fn.call(_this, evt);
              });
            }
          }
        }]);

        return EventDispatcher;
      }();

      exports.default = EventDispatcher;

      /***/
    },
    /* 23 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var UID = {};

      UID._nextID = 0;

      UID.get = function () {
        return UID._nextID++;
      };

      exports.default = UID;

      /***/
    },
    /* 24 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _group = __webpack_require__(1);

      var _group2 = _interopRequireDefault(_group);

      var _graphics = __webpack_require__(3);

      var _graphics2 = _interopRequireDefault(_graphics);

      var _render2 = __webpack_require__(8);

      var _render3 = _interopRequireDefault(_render2);

      var _sprite = __webpack_require__(6);

      var _sprite2 = _interopRequireDefault(_sprite);

      var _bitmap = __webpack_require__(4);

      var _bitmap2 = _interopRequireDefault(_bitmap);

      var _text = __webpack_require__(5);

      var _text2 = _interopRequireDefault(_text);

      var _index = __webpack_require__(26);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var CanvasRender = function (_Render) {
        _inherits(CanvasRender, _Render);

        function CanvasRender(canvasOrContext, width, height) {
          _classCallCheck(this, CanvasRender);

          var _this = _possibleConstructorReturn(this, (CanvasRender.__proto__ || Object.getPrototypeOf(CanvasRender)).call(this));

          if (arguments.length === 3) {
            _this.ctx = canvasOrContext;
            _this.width = width;
            _this.height = height;
          } else {
            _this.ctx = canvasOrContext.getContext('2d');
            _this.width = canvasOrContext.width;
            _this.height = canvasOrContext.height;
          }
          return _this;
        }

        _createClass(CanvasRender, [{
          key: 'clear',
          value: function clear(ctx, width, height) {
            ctx.clearRect(0, 0, width, height);
          }
        }, {
          key: 'render',
          value: function render(ctx, o, cacheData) {
            var mtx = o._matrix;
            if (o.children) {
              var list = o.children.slice(0),
                  l = list.length;
              for (var i = 0; i < l; i++) {
                var child = list[i];
                mtx.initialize(1, 0, 0, 1, 0, 0);
                mtx.appendTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation, o.skewX, o.skewY, o.originX, o.originY);
                // if (!this.checkBoundEvent(child)) continue
                ctx.save();
                this._render(ctx, child, cacheData ? null : mtx, cacheData, true);
                ctx.restore();
              }
            } else {
              this._render(ctx, o, cacheData ? null : mtx, cacheData);
            }
          }
        }, {
          key: '_render',
          value: function _render(ctx, o, mtx, cacheData, inGroup) {
            if (!o.isVisible()) return;
            if (mtx && !o.fixed) {
              o._matrix.initialize(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
            } else if (cacheData && !o.fixed) {
              o._matrix.initialize(cacheData.scale, 0, 0, cacheData.scale, cacheData.x * -1, cacheData.y * -1);
            } else {
              o._matrix.initialize(1, 0, 0, 1, 0, 0);
            }
            mtx = o._matrix;

            // group 进行 cache canvas 内部的子元素需要进行appendTransform
            // cache canvas 渲染不叠加自身的 transform，因为进入主渲染会进行appendTransform
            if (inGroup || !cacheData) {
              mtx.appendTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation, o.skewX, o.skewY, o.originX, o.originY);
            }
            var ocg = o.clipGraphics;
            if (ocg) {
              ctx.beginPath();
              ocg._matrix.copy(mtx);
              ocg._matrix.appendTransform(ocg.x, ocg.y, ocg.scaleX, ocg.scaleY, ocg.rotation, ocg.skewX, ocg.skewY, ocg.originX, ocg.originY);
              ctx.setTransform(ocg._matrix.a, ocg._matrix.b, ocg._matrix.c, ocg._matrix.d, ocg._matrix.tx, ocg._matrix.ty);
              ocg.render(ctx);
              ctx.clip(o.clipRuleNonzero ? 'nonzero' : 'evenodd');
            }

            var oacg = o.absClipGraphics;
            if (oacg) {
              ctx.beginPath();
              oacg._matrix.initialize(1, 0, 0, 1, 0, 0);
              oacg._matrix.appendTransform(oacg.x, oacg.y, oacg.scaleX, oacg.scaleY, oacg.rotation, oacg.skewX, oacg.skewY, oacg.originX, oacg.originY);
              ctx.setTransform(oacg._matrix.a, oacg._matrix.b, oacg._matrix.c, oacg._matrix.d, oacg._matrix.tx, oacg._matrix.ty);
              oacg.render(ctx);
              ctx.clip(o.absClipRuleNonzero ? 'nonzero' : 'evenodd');
            }

            // if(!cacheData){
            ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
            // }
            if (o._readyToCache || o.cacheUpdating) {
              this.setComplexProps(ctx, o);
              o._readyToCache = false;
              o.cacheCtx.clearRect(0, 0, o.cacheCanvas.width, o.cacheCanvas.height);
              o.cacheCtx.save();
              this.render(o.cacheCtx, o, o._cacheData);
              o.cacheCtx.restore();
              // debug cacheCanvas
              // document.body.appendChild(o.cacheCanvas)
              if (o._readyToFilter) {
                o.cacheCtx.putImageData((0, _index.filter)(o.cacheCtx.getImageData(0, 0, o.cacheCanvas.width, o.cacheCanvas.height), o._filterName), 0, 0);
                this._readyToFilter = false;
              }

              ctx.drawImage(o.cacheCanvas, o._cacheData.x, o._cacheData.y);
            } else if (o.cacheCanvas && !cacheData) {
              this.setComplexProps(ctx, o);
              ctx.drawImage(o.cacheCanvas, o._cacheData.x, o._cacheData.y);
            } else if (o instanceof _group2.default) {
              var list = o.children.slice(0),
                  l = list.length;
              for (var i = 0; i < l; i++) {
                ctx.save();
                this._render(ctx, list[i], mtx);
                ctx.restore();
              }
            } else if (o instanceof _graphics2.default) {
              this.setComplexProps(ctx, o);
              o.render(ctx);
            } else if (o instanceof _sprite2.default && o.rect) {
              this.setComplexProps(ctx, o);
              o.updateFrame();
              var rect = o.rect;
              ctx.drawImage(o.img, rect[0], rect[1], rect[2], rect[3], 0, 0, rect[2], rect[3]);
            } else if (o instanceof _bitmap2.default && o.rect) {
              this.setComplexProps(ctx, o);
              var bRect = o.rect;
              ctx.drawImage(o.img, bRect[0], bRect[1], bRect[2], bRect[3], 0, 0, bRect[2], bRect[3]);
            } else if (o instanceof _text2.default) {
              this.setComplexProps(ctx, o);
              ctx.font = o.font;
              ctx.fillStyle = o.color;
              ctx.textBaseline = o.baseline;
              ctx.fillText(o.text, 0, 0);
            }
          }
        }, {
          key: 'setComplexProps',
          value: function setComplexProps(ctx, o) {
            o.complexCompositeOperation = ctx.globalCompositeOperation = this.getCompositeOperation(o);
            o.complexAlpha = ctx.globalAlpha = this.getAlpha(o, 1);

            o.complexShadow = this.getShadow(o);
            if (o.complexShadow) {
              ctx.shadowColor = o.complexShadow.color;
              ctx.shadowOffsetX = o.complexShadow.offsetX;
              ctx.shadowOffsetY = o.complexShadow.offsetY;
              ctx.shadowBlur = o.complexShadow.blur;
            }
          }
        }, {
          key: 'getCompositeOperation',
          value: function getCompositeOperation(o) {
            if (o.compositeOperation) return o.compositeOperation;
            if (o.parent) return this.getCompositeOperation(o.parent);
          }
        }, {
          key: 'getAlpha',
          value: function getAlpha(o, alpha) {
            var result = o.alpha * alpha;
            if (o.parent) {
              return this.getAlpha(o.parent, result);
            }
            return result;
          }
        }, {
          key: 'getShadow',
          value: function getShadow(o) {
            if (o.shadow) return o.shadow;
            if (o.parent) return this.getShadow(o.parent);
          }
        }]);

        return CanvasRender;
      }(_render3.default);

      exports.default = CanvasRender;

      /***/
    },
    /* 25 */
    /***/function (module, exports) {

      var g;

      // This works in non-strict mode
      g = function () {
        return this;
      }();

      try {
        // This works if eval is allowed (see CSP)
        g = g || Function("return this")() || (1, eval)("this");
      } catch (e) {
        // This works if the window reference is available
        if ((typeof window === 'undefined' ? 'undefined' : _typeof2(window)) === "object") g = window;
      }

      // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}

      module.exports = g;

      /***/
    },
    /* 26 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.filter = filter;

      var _invert = __webpack_require__(27);

      var _blur = __webpack_require__(28);

      var _brightness = __webpack_require__(30);

      var _contrast = __webpack_require__(31);

      var _grayscale = __webpack_require__(32);

      var _sepia = __webpack_require__(33);

      var _threshold = __webpack_require__(34);

      var _gamma = __webpack_require__(35);

      var _colorize = __webpack_require__(36);

      function filter(pixels, name) {
        if (typeof name === 'string') {
          var type = name.split('(')[0];
          var num = getNumber(name);
          switch (type) {
            case 'invert':
              return (0, _invert.invert)(pixels, num);
            case 'brightness':
              return (0, _brightness.brightness)(pixels, -255 + num * 255);
            case 'blur':
              return (0, _blur.blur)(pixels, num);
            case 'contrast':
              return (0, _contrast.contrast)(pixels, -255 + num * 255);
            case 'grayscale':
              return (0, _grayscale.grayscale)(pixels, num);
            case 'sepia':
              return (0, _sepia.sepia)(pixels, num);
            case 'threshold':
              return (0, _threshold.threshold)(pixels, num);
            case 'gamma':
              return (0, _gamma.gamma)(pixels, num);
          }
        } else {
          switch (name.type) {
            case 'colorize':
              return (0, _colorize.colorize)(pixels, name);
          }
        }
      }

      function getNumber(str) {
        str = str.replace(/(invert)|(brightness)|(blur)|(contrast)|(grayscale)|(sepia)|(threshold)|(gamma)?\(/g, '').replace(')', '');
        if (str.indexOf('%') !== -1) {
          return Number(str.replace('%', '')) / 100;
        } else if (str.indexOf('px') !== -1) {
          return Number(str.replace('px', ''));
        } else {
          return Number(str);
        }
      }

      /***/
    },
    /* 27 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.invert = invert;
      function invert(pixels, ratio) {
        var d = pixels.data;
        ratio = ratio === undefined ? 1 : ratio;
        for (var i = 0; i < d.length; i += 4) {
          d[i] = d[i] + ratio * (255 - 2 * d[i]);
          d[i + 1] = d[i + 1] + ratio * (255 - 2 * d[i + 1]);
          d[i + 2] = d[i + 2] + ratio * (255 - 2 * d[i + 2]);
        }
        return pixels;
      }

      /***/
    },
    /* 28 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.blur = blur;

      var _createImageData = __webpack_require__(29);

      function blur(pixels, diameter) {
        diameter = Math.abs(diameter);
        if (diameter <= 1) return pixels;
        var radius = diameter / 2;
        var len = Math.ceil(diameter) + (1 - Math.ceil(diameter) % 2);
        var weights = new Float32Array(len);
        var rho = (radius + 0.5) / 3;
        var rhoSq = rho * rho;
        var gaussianFactor = 1 / Math.sqrt(2 * Math.PI * rhoSq);
        var rhoFactor = -1 / (2 * rho * rho);
        var wsum = 0;
        var middle = Math.floor(len / 2);
        for (var i = 0; i < len; i++) {
          var x = i - middle;
          var gx = gaussianFactor * Math.exp(x * x * rhoFactor);
          weights[i] = gx;
          wsum += gx;
        }
        for (var i = 0; i < weights.length; i++) {
          weights[i] /= wsum;
        }
        return separableConvolve(pixels, weights, weights, false);
      }

      function separableConvolve(pixels, horizWeights, vertWeights, opaque) {
        return horizontalConvolve(verticalConvolve(pixels, vertWeights, opaque), horizWeights, opaque);
      }

      function horizontalConvolve(pixels, weightsVector, opaque) {
        var side = weightsVector.length;
        var halfSide = Math.floor(side / 2);

        var src = pixels.data;
        var sw = pixels.width;
        var sh = pixels.height;

        var w = sw;
        var h = sh;
        var output = (0, _createImageData.createImageData)(w, h);
        var dst = output.data;

        var alphaFac = opaque ? 1 : 0;

        for (var y = 0; y < h; y++) {
          for (var x = 0; x < w; x++) {
            var sy = y;
            var sx = x;
            var dstOff = (y * w + x) * 4;
            var r = 0,
                g = 0,
                b = 0,
                a = 0;
            for (var cx = 0; cx < side; cx++) {
              var scy = sy;
              var scx = Math.min(sw - 1, Math.max(0, sx + cx - halfSide));
              var srcOff = (scy * sw + scx) * 4;
              var wt = weightsVector[cx];
              r += src[srcOff] * wt;
              g += src[srcOff + 1] * wt;
              b += src[srcOff + 2] * wt;
              a += src[srcOff + 3] * wt;
            }
            dst[dstOff] = r;
            dst[dstOff + 1] = g;
            dst[dstOff + 2] = b;
            dst[dstOff + 3] = a + alphaFac * (255 - a);
          }
        }
        return output;
      }

      function verticalConvolve(pixels, weightsVector, opaque) {
        var side = weightsVector.length;
        var halfSide = Math.floor(side / 2);

        var src = pixels.data;
        var sw = pixels.width;
        var sh = pixels.height;

        var w = sw;
        var h = sh;
        var output = (0, _createImageData.createImageData)(w, h);
        var dst = output.data;

        var alphaFac = opaque ? 1 : 0;

        for (var y = 0; y < h; y++) {
          for (var x = 0; x < w; x++) {
            var sy = y;
            var sx = x;
            var dstOff = (y * w + x) * 4;
            var r = 0,
                g = 0,
                b = 0,
                a = 0;
            for (var cy = 0; cy < side; cy++) {
              var scy = Math.min(sh - 1, Math.max(0, sy + cy - halfSide));
              var scx = sx;
              var srcOff = (scy * sw + scx) * 4;
              var wt = weightsVector[cy];
              r += src[srcOff] * wt;
              g += src[srcOff + 1] * wt;
              b += src[srcOff + 2] * wt;
              a += src[srcOff + 3] * wt;
            }
            dst[dstOff] = r;
            dst[dstOff + 1] = g;
            dst[dstOff + 2] = b;
            dst[dstOff + 3] = a + alphaFac * (255 - a);
          }
        }
        return output;
      };

      /***/
    },
    /* 29 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.createImageData = createImageData;
      var tmpCtx = null;

      if (typeof document !== 'undefined') {
        tmpCtx = document.createElement('canvas').getContext('2d');
      } else if (typeof wx !== 'undefined' && wx.createCanvas) {
        tmpCtx = wx.createCanvas().getContext('2d');
      }

      function createImageData(w, h) {
        return tmpCtx.createImageData(w, h);
      }

      /***/
    },
    /* 30 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.brightness = brightness;
      function brightness(pixels, adjustment) {
        var data = pixels.data;
        var length = data.length;
        for (var i = 0; i < length; i += 4) {
          data[i] += adjustment;
          data[i + 1] += adjustment;
          data[i + 2] += adjustment;
        }
        return pixels;
      }

      /***/
    },
    /* 31 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.contrast = contrast;
      function contrast(pixels, contrast) {
        var data = pixels.data;
        var length = data.length;
        var factor = 259 * (contrast + 255) / (255 * (259 - contrast));

        for (var i = 0; i < length; i += 4) {
          data[i] = factor * (data[i] - 128) + 128;
          data[i + 1] = factor * (data[i + 1] - 128) + 128;
          data[i + 2] = factor * (data[i + 2] - 128) + 128;
        }

        return pixels;
      };

      /***/
    },
    /* 32 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.grayscale = grayscale;
      function grayscale(pixels, adjustment) {
        var data = pixels.data;
        var length = data.length;
        for (var i = 0; i < length; i += 4) {
          var r = data[i];
          var g = data[i + 1];
          var b = data[i + 2];

          // CIE luminance for the RGB
          // The human eye is bad at seeing red and blue, so we de-emphasize them.
          var v = 0.2126 * r + 0.7152 * g + 0.0722 * b;
          data[i] = r + (v - r) * adjustment;
          data[i + 1] = g + (v - g) * adjustment;
          data[i + 2] = b + (v - b) * adjustment;
        }
        return pixels;
      };

      /***/
    },
    /* 33 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.sepia = sepia;
      function sepia(pixels, adjustment) {
        var data = pixels.data;
        var length = data.length;
        for (var i = 0; i < length; i += 4) {
          var r = data[i];
          var g = data[i + 1];
          var b = data[i + 2];

          var sr = r * 0.393 + g * 0.769 + b * 0.189;
          var sg = r * 0.349 + g * 0.686 + b * 0.168;
          var sb = r * 0.272 + g * 0.534 + b * 0.131;

          data[i] = r + (sr - r) * adjustment;
          data[i + 1] = g + (sg - g) * adjustment;
          data[i + 2] = b + (sb - b) * adjustment;
        }

        return pixels;
      };

      /***/
    },
    /* 34 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.threshold = threshold;
      function threshold(pixels, threshold) {
        var data = pixels.data;
        var length = data.length;
        for (var i = 0; i < length; i += 4) {
          var r = data[i];
          var g = data[i + 1];
          var b = data[i + 2];
          var v = 0.2126 * r + 0.7152 * g + 0.0722 * b >= threshold ? 255 : 0;
          data[i] = data[i + 1] = data[i + 2] = v;
        }
        return pixels;
      };

      /***/
    },
    /* 35 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.gamma = gamma;
      function gamma(pixels, adjustment) {
        var data = pixels.data;
        var length = data.length;
        for (var i = 0; i < length; i += 4) {
          data[i] = Math.pow(data[i] / 255, adjustment) * 255;
          data[i + 1] = Math.pow(data[i + 1] / 255, adjustment) * 255;
          data[i + 2] = Math.pow(data[i + 2] / 255, adjustment) * 255;
        }
        return pixels;
      };

      /***/
    },
    /* 36 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.colorize = colorize;
      function colorize(pixels, option) {
        var data = pixels.data;
        var length = data.length;
        var hex = option.color.charAt(0) === '#' ? option.color.substr(1) : option.color;
        var colorRGB = {
          r: parseInt(hex.substr(0, 2), 16),
          g: parseInt(hex.substr(2, 2), 16),
          b: parseInt(hex.substr(4, 2), 16)
        };

        for (var i = 0; i < length; i += 4) {
          data[i] -= (data[i] - colorRGB.r) * option.amount;
          data[i + 1] -= (data[i + 1] - colorRGB.g) * option.amount;
          data[i + 2] -= (data[i + 2] - colorRGB.b) * option.amount;
        }

        return pixels;
      };

      /***/
    },
    /* 37 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _group = __webpack_require__(1);

      var _group2 = _interopRequireDefault(_group);

      var _graphics = __webpack_require__(3);

      var _graphics2 = _interopRequireDefault(_graphics);

      var _render = __webpack_require__(8);

      var _render2 = _interopRequireDefault(_render);

      var _event = __webpack_require__(7);

      var _event2 = _interopRequireDefault(_event);

      var _sprite = __webpack_require__(6);

      var _sprite2 = _interopRequireDefault(_sprite);

      var _bitmap = __webpack_require__(4);

      var _bitmap2 = _interopRequireDefault(_bitmap);

      var _text = __webpack_require__(5);

      var _text2 = _interopRequireDefault(_text);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var HitRender = function (_Render) {
        _inherits(HitRender, _Render);

        function HitRender() {
          _classCallCheck(this, HitRender);

          var _this = _possibleConstructorReturn(this, (HitRender.__proto__ || Object.getPrototypeOf(HitRender)).call(this));

          if (typeof wx !== 'undefined' && wx.createCanvas) {
            _this.canvas = wx.createCanvas();
          } else {
            _this.canvas = document.createElement('canvas');
          }

          _this.canvas.width = 1;
          _this.canvas.height = 1;
          _this.ctx = _this.canvas.getContext('2d');

          // debug event
          // this.canvas.width = 441
          // this.canvas.height = 441
          // this.ctx = this.canvas.getContext('2d')
          // document.body.appendChild(this.canvas)

          _this.disableEvents = ['mouseover', 'mouseout', 'mousemove', 'touchmove'];
          return _this;
        }

        _createClass(HitRender, [{
          key: 'clear',
          value: function clear() {
            this.ctx.clearRect(0, 0, this.width, this.height);
          }
        }, {
          key: 'hitAABB',
          value: function hitAABB(o, evt) {
            var list = o.children.slice(0),
                l = list.length;
            for (var i = l - 1; i >= 0; i--) {
              var child = list[i];
              // if (!this.isbindingEvent(child)) continue;
              var target = this._hitAABB(child, evt);
              if (target) return target;
            }
          }
        }, {
          key: '_hitAABB',
          value: function _hitAABB(o, evt) {
            if (!o.isVisible()) {
              return;
            }
            if (o instanceof _group2.default) {
              var list = o.children.slice(0),
                  l = list.length;
              for (var i = l - 1; i >= 0; i--) {
                var child = list[i];
                var target = this._hitAABB(child, evt);
                if (target) return target;
              }
            } else {
              if (o.AABB && this.checkPointInAABB(evt.stageX, evt.stageY, o.AABB)) {
                // this._bubbleEvent(o, type, evt);
                this._dispatchEvent(o, evt);
                return o;
              }
            }
          }
        }, {
          key: 'checkPointInAABB',
          value: function checkPointInAABB(x, y, AABB) {
            var minX = AABB[0];
            if (x < minX) return false;
            var minY = AABB[1];
            if (y < minY) return false;
            var maxX = minX + AABB[2];
            if (x > maxX) return false;
            var maxY = minY + AABB[3];
            if (y > maxY) return false;
            return true;
          }
        }, {
          key: 'hitPixel',
          value: function hitPixel(o, evt) {
            var ctx = this.ctx;
            ctx.clearRect(0, 0, 2, 2);
            var mtx = o._hitMatrix;
            var list = o.children.slice(0),
                l = list.length;
            for (var i = l - 1; i >= 0; i--) {
              var child = list[i];
              mtx.initialize(1, 0, 0, 1, 0, 0);
              mtx.appendTransform(o.x - evt.stageX, o.y - evt.stageY, o.scaleX, o.scaleY, o.rotation, o.skewX, o.skewY, o.originX, o.originY);
              // if (!this.checkBoundEvent(child)) continue
              ctx.save();
              var target = this._hitPixel(child, evt, mtx);
              ctx.restore();
              if (target) return target;
            }
          }
        }, {
          key: '_hitPixel',
          value: function _hitPixel(o, evt, mtx) {
            if (!o.isVisible()) return;
            var ctx = this.ctx;
            if (mtx && !o.fixed) {
              o._hitMatrix.initialize(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
            } else {
              o._hitMatrix.initialize(1, 0, 0, 1, 0, 0);
            }
            mtx = o._hitMatrix;
            mtx.appendTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation, o.skewX, o.skewY, o.originX, o.originY);

            var ocg = o.clipGraphics;
            if (ocg) {
              ctx.beginPath();
              ocg._matrix.copy(mtx);
              ocg._matrix.appendTransform(ocg.x, ocg.y, ocg.scaleX, ocg.scaleY, ocg.rotation, ocg.skewX, ocg.skewY, ocg.originX, ocg.originY);
              ctx.setTransform(ocg._matrix.a, ocg._matrix.b, ocg._matrix.c, ocg._matrix.d, ocg._matrix.tx, ocg._matrix.ty);
              ocg.render(ctx);
              ctx.clip(o.clipRuleNonzero ? 'nonzero' : 'evenodd');
            }

            var oacg = o.absClipGraphics;
            if (oacg) {
              ctx.beginPath();
              oacg._matrix.initialize(1, 0, 0, 1, 0, 0);
              oacg._matrix.appendTransform(oacg.x, oacg.y, oacg.scaleX, oacg.scaleY, oacg.rotation, oacg.skewX, oacg.skewY, oacg.originX, oacg.originY);
              ctx.setTransform(oacg._matrix.a, oacg._matrix.b, oacg._matrix.c, oacg._matrix.d, oacg._matrix.tx, oacg._matrix.ty);
              oacg.render(ctx);
              ctx.clip(o.absClipRuleNonzero ? 'nonzero' : 'evenodd');
            }

            if (o.cacheCanvas) {
              ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
              ctx.drawImage(o.cacheCanvas, o._cacheData.x, o._cacheData.y);
            } else if (o instanceof _group2.default) {
              var list = o.children.slice(0),
                  l = list.length;
              for (var i = l - 1; i >= 0; i--) {
                ctx.save();
                var target = this._hitPixel(list[i], evt, mtx);
                ctx.restore();
                if (target) return target;
              }
            } else {
              ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
              if (o instanceof _graphics2.default) {
                this.setComplexProps(ctx, o);

                o.render(ctx);
              } else if (o instanceof _sprite2.default && o.rect) {
                this.setComplexProps(ctx, o);

                o.updateFrame();
                var rect = o.rect;
                ctx.drawImage(o.img, rect[0], rect[1], rect[2], rect[3], 0, 0, rect[2], rect[3]);
              } else if (o instanceof _bitmap2.default && o.rect) {
                this.setComplexProps(ctx, o);

                var bRect = o.rect;
                ctx.drawImage(o.img, bRect[0], bRect[1], bRect[2], bRect[3], 0, 0, bRect[2], bRect[3]);
              } else if (o instanceof _text2.default) {
                this.setComplexProps(ctx, o);

                ctx.font = o.font;
                ctx.fillStyle = o.color;
                ctx.textBaseline = o.baseline;
                ctx.fillText(o.text, 0, 0);
              }
            }

            if (ctx.getImageData(0, 0, 1, 1).data[3] > 1) {
              this._dispatchEvent(o, evt);
              return o;
            }
          }
        }, {
          key: 'setComplexProps',
          value: function setComplexProps(ctx, o) {
            ctx.globalCompositeOperation = o.complexCompositeOperation;
            ctx.globalAlpha = o.complexAlpha;
            // The shadow does not trigger the event, so remove it
            // if(o.complexShadow){
            //   ctx.shadowColor = o.complexShadow.color
            //   ctx.shadowOffsetX = o.complexShadow.offsetX
            //   ctx.shadowOffsetY = o.complexShadow.offsetY
            //   ctx.shadowBlur = o.complexShadow.blur
            // }
          }
        }, {
          key: '_dispatchEvent',
          value: function _dispatchEvent(obj, evt) {
            if (this.disableEvents.indexOf(evt.type) !== -1) return;
            var mockEvt = new _event2.default();
            mockEvt.stageX = evt.stageX;
            mockEvt.stageY = evt.stageY;
            mockEvt.pureEvent = evt;
            mockEvt.type = evt.type;
            obj.dispatchEvent(mockEvt);
          }
        }]);

        return HitRender;
      }(_render2.default);

      exports.default = HitRender;

      /***/
    },
    /* 38 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _graphics = __webpack_require__(3);

      var _graphics2 = _interopRequireDefault(_graphics);

      var _render = __webpack_require__(8);

      var _render2 = _interopRequireDefault(_render);

      var _event = __webpack_require__(7);

      var _event2 = _interopRequireDefault(_event);

      var _sprite = __webpack_require__(6);

      var _sprite2 = _interopRequireDefault(_sprite);

      var _bitmap = __webpack_require__(4);

      var _bitmap2 = _interopRequireDefault(_bitmap);

      var _text = __webpack_require__(5);

      var _text2 = _interopRequireDefault(_text);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var WxHitRender = function (_Render) {
        _inherits(WxHitRender, _Render);

        function WxHitRender(ctx, component, canvasId) {
          _classCallCheck(this, WxHitRender);

          var _this = _possibleConstructorReturn(this, (WxHitRender.__proto__ || Object.getPrototypeOf(WxHitRender)).call(this));

          _this.ctx = ctx;
          _this._isWeapp = true;
          _this._component = component;
          _this._hitCanvasId = canvasId + 'Hit';

          _this.disableEvents = ['mouseover', 'mouseout', 'mousemove', 'touchmove'];
          return _this;
        }

        _createClass(WxHitRender, [{
          key: 'clear',
          value: function clear() {
            this.ctx.clearRect(0, 0, 2, 2);
          }
        }, {
          key: 'hitAABB',
          value: function hitAABB(list, evt, cb) {
            var len = list.length;
            for (var i = len - 1; i >= 0; i--) {
              var o = list[i];

              if (o.AABB && this.checkPointInAABB(evt.stageX, evt.stageY, o.AABB)) {
                this._dispatchEvent(o, evt);
                cb(o);
                return o;
              }
            }
          }
        }, {
          key: 'checkPointInAABB',
          value: function checkPointInAABB(x, y, AABB) {
            var minX = AABB[0];
            if (x < minX) return false;
            var minY = AABB[1];
            if (y < minY) return false;
            var maxX = minX + AABB[2];
            if (x > maxX) return false;
            var maxY = minY + AABB[3];
            if (y > maxY) return false;
            return true;
          }
        }, {
          key: 'hit',
          value: function hit(list, evt, cb, current) {
            var _this2 = this;

            var ctx = this.ctx;
            var obj = list[current];
            var mtx = obj._hitMatrix.initialize(1, 0, 0, 1, 0, 0);
            ctx.save();
            mtx.appendTransform(obj.x - evt.stageX, obj.y - evt.stageY, obj.scaleX, obj.scaleY, obj.rotation, obj.skewX, obj.skewY, obj.originX, obj.originY);
            ctx.globalCompositeOperation = obj.complexCompositeOperation;
            ctx.globalAlpha = obj.complexAlpha;
            ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
            if (obj instanceof _graphics2.default) {
              obj.render(ctx);
            } else if (obj instanceof _sprite2.default && obj.rect) {
              obj.updateFrame();
              var rect = obj.rect;
              ctx.drawImage(obj.img, rect[0], rect[1], rect[2], rect[3], 0, 0, rect[2], rect[3]);
            } else if (obj instanceof _bitmap2.default && obj.rect) {
              var bRect = obj.rect;
              ctx.drawImage(obj.img, bRect[0], bRect[1], bRect[2], bRect[3], 0, 0, bRect[2], bRect[3]);
            } else if (obj instanceof _text2.default) {
              ctx.font = obj.font;
              ctx.fillStyle = obj.color;
              ctx.fillText(obj.text, 0, 0);
            }
            ctx.restore();
            current--;
            ctx.draw(false, function () {
              wx.canvasGetImageData({
                canvasId: _this2._hitCanvasId,
                x: 0,
                y: 0,
                width: 1,
                height: 1,
                success: function success(res) {
                  if (res.data[3] > 1) {
                    _this2._dispatchEvent(obj, evt);
                    cb(obj);
                  } else {
                    if (current > -1) {
                      _this2.hit(list, evt, cb, current);
                    }
                  }
                }
              }, _this2._component);
            });
          }
        }, {
          key: '_dispatchEvent',
          value: function _dispatchEvent(obj, evt) {
            if (this.disableEvents.indexOf(evt.type) !== -1) return;
            var mockEvt = new _event2.default();
            mockEvt.stageX = evt.stageX;
            mockEvt.stageY = evt.stageY;
            mockEvt.pureEvent = evt;
            mockEvt.type = evt.type;
            obj.dispatchEvent(mockEvt);
          }
        }]);

        return WxHitRender;
      }(_render2.default);

      exports.default = WxHitRender;

      /***/
    },
    /* 39 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _shape = __webpack_require__(0);

      var _shape2 = _interopRequireDefault(_shape);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var ArrowPath = function (_Shape) {
        _inherits(ArrowPath, _Shape);

        function ArrowPath(path, option) {
          _classCallCheck(this, ArrowPath);

          var _this = _possibleConstructorReturn(this, (ArrowPath.__proto__ || Object.getPrototypeOf(ArrowPath)).call(this));

          _this.path = path;
          _this.option = Object.assign({
            strokeStyle: 'black',
            lineWidth: 1,
            headSize: 10
          }, option);
          return _this;
        }

        _createClass(ArrowPath, [{
          key: 'draw',
          value: function draw() {
            var path = this.path;
            this.beginPath();
            var len = path.length;
            if (len === 2) {
              this.drawArrow(path[0].x, path[0].y, path[1].x, path[1].y, 30);
            } else {
              this.moveTo(path[0].x, path[0].y);
              for (var i = 1; i < len - 1; i++) {
                this.lineTo(path[i].x, path[i].y);
              }
              this.drawArrow(path[len - 2].x, path[len - 2].y, path[len - 1].x, path[len - 1].y, 30);
            }

            this.stroke();
          }
        }, {
          key: 'drawArrow',
          value: function drawArrow(fromX, fromY, toX, toY, theta) {
            var angle = Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI,
                angle1 = (angle + theta) * Math.PI / 180,
                angle2 = (angle - theta) * Math.PI / 180,
                hs = this.option.headSize,
                topX = hs * Math.cos(angle1),
                topY = hs * Math.sin(angle1),
                botX = hs * Math.cos(angle2),
                botY = hs * Math.sin(angle2);

            var arrowX = fromX - topX,
                arrowY = fromY - topY;

            this.moveTo(arrowX, arrowY);
            this.moveTo(fromX, fromY);
            this.lineTo(toX, toY);
            arrowX = toX + topX;
            arrowY = toY + topY;
            this.moveTo(arrowX, arrowY);
            this.lineTo(toX, toY);
            arrowX = toX + botX;
            arrowY = toY + botY;
            this.lineTo(arrowX, arrowY);
            this.strokeStyle(this.option.strokeStyle);
            this.lineWidth(this.option.lineWidth);
          }
        }]);

        return ArrowPath;
      }(_shape2.default);

      exports.default = ArrowPath;

      /***/
    },
    /* 40 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _shape = __webpack_require__(0);

      var _shape2 = _interopRequireDefault(_shape);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var Ellipse = function (_Shape) {
        _inherits(Ellipse, _Shape);

        function Ellipse(width, height, option) {
          _classCallCheck(this, Ellipse);

          var _this = _possibleConstructorReturn(this, (Ellipse.__proto__ || Object.getPrototypeOf(Ellipse)).call(this));

          _this.option = option || {};
          _this.width = width;
          _this.height = height;
          return _this;
        }

        _createClass(Ellipse, [{
          key: 'draw',
          value: function draw() {
            var w = this.width;
            var h = this.height;
            var k = 0.5522848;
            var ox = w / 2 * k;
            var oy = h / 2 * k;
            var xe = w;
            var ye = h;
            var xm = w / 2;
            var ym = h / 2;

            this.beginPath();
            this.moveTo(0, ym);
            this.bezierCurveTo(0, ym - oy, xm - ox, 0, xm, 0);
            this.bezierCurveTo(xm + ox, 0, xe, ym - oy, xe, ym);
            this.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
            this.bezierCurveTo(xm - ox, ye, 0, ym + oy, 0, ym);

            if (this.option.strokeStyle) {
              if (this.option.lineWidth !== undefined) {
                this.lineWidth(this.option.lineWidth);
              }
              this.strokeStyle(this.option.strokeStyle);
              this.stroke();
            }

            if (this.option.fillStyle) {
              this.fillStyle(this.option.fillStyle);
              this.fill();
            }
          }
        }]);

        return Ellipse;
      }(_shape2.default);

      exports.default = Ellipse;

      /***/
    },
    /* 41 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _pathParser = __webpack_require__(42);

      var _pathParser2 = _interopRequireDefault(_pathParser);

      var _shape = __webpack_require__(0);

      var _shape2 = _interopRequireDefault(_shape);

      var _arcToBezier = __webpack_require__(43);

      var _arcToBezier2 = _interopRequireDefault(_arcToBezier);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var Path = function (_Shape) {
        _inherits(Path, _Shape);

        function Path(d, option) {
          _classCallCheck(this, Path);

          var _this = _possibleConstructorReturn(this, (Path.__proto__ || Object.getPrototypeOf(Path)).call(this));

          _this.d = d;

          option = Object.assign({
            fillStyle: 'black',
            strokeStyle: 'black',
            lineWidth: 1
          }, option);
          _this.option = option;
          return _this;
        }

        _createClass(Path, [{
          key: 'draw',
          value: function draw() {
            var _this2 = this;

            var cmds = (0, _pathParser2.default)(this.d);

            this.beginPath();
            // https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths
            // M = moveto
            // L = lineto
            // H = horizontal lineto
            // V = vertical lineto
            // C = curveto
            // S = smooth curveto
            // Q = quadratic Belzier curve
            // T = smooth quadratic Belzier curveto
            // A = elliptical Arc  暂时未实现，用贝塞尔拟合椭圆
            // Z = closepath
            // 以上所有命令均允许小写字母。大写表示绝对定位，小写表示相对定位(从上一个点开始)。
            var preX = void 0,
                preY = void 0,
                curves = void 0,
                lastCurve = void 0;

            // 参考我的 pasition https://github.com/AlloyTeam/pasition/blob/master/src/index.js
            for (var j = 0, cmdLen = cmds.length; j < cmdLen; j++) {
              var item = cmds[j];
              var action = item[0];
              var preItem = cmds[j - 1];

              switch (action) {
                case 'M':
                  preX = item[1];
                  preY = item[2];
                  this.moveTo(preX, preY);
                  break;
                case 'L':
                  preX = item[1];
                  preY = item[2];
                  this.lineTo(preX, preY);
                  break;
                case 'H':
                  preX = item[1];
                  this.lineTo(preX, preY);
                  break;
                case 'V':
                  preY = item[1];
                  this.lineTo(preX, preY);
                  break;
                case 'C':
                  preX = item[5];
                  preY = item[6];
                  this.bezierCurveTo(item[1], item[2], item[3], item[4], preX, preY);
                  break;
                case 'S':

                  if (preItem[0] === 'C' || preItem[0] === 'c') {
                    this.bezierCurveTo(preX, preY, preX + preItem[5] - preItem[3], preY + preItem[6] - preItem[4], item[1], item[2], item[3], item[4]);
                  } else if (preItem[0] === 'S' || preItem[0] === 's') {
                    this.bezierCurveTo(preX, preY, preX + preItem[3] - preItem[1], preY + preItem[4] - preItem[2], item[1], item[2], item[3], item[4]);
                  }
                  preX = item[3];
                  preY = item[4];
                  break;

                case 'Q':
                  preX = item[3];
                  preY = item[4];
                  this.quadraticCurveTo(item[1], item[2], preX, preY);
                  break;

                case 'm':
                  preX += item[1];
                  preY += item[2];
                  this.moveTo(preX, preY);
                  break;
                case 'l':
                  preX += item[1];
                  preY += item[2];
                  this.lineTo(preX, preY);
                  break;
                case 'h':
                  preX += item[1];
                  this.lineTo(preX, preY);
                  break;
                case 'v':
                  preY += item[1];
                  this.lineTo(preX, preY);
                  break;
                case 'c':
                  this.bezierCurveTo(preX + item[1], preY + item[2], preX + item[3], preY + item[4], preX + item[5], preY + item[6]);
                  preX = preX + item[5];
                  preY = preY + item[6];
                  break;
                case 's':
                  if (preItem[0] === 'C' || preItem[0] === 'c') {
                    this.bezierCurveTo(preX, preY, preX + preItem[5] - preItem[3], preY + preItem[6] - preItem[4], preX + item[1], preY + item[2], preX + item[3], preY + item[4]);
                  } else if (preItem[0] === 'S' || preItem[0] === 's') {
                    this.bezierCurveTo(preX, preY, preX + preItem[3] - preItem[1], preY + preItem[4] - preItem[2], preX + item[1], preY + item[2], preX + item[3], preY + item[4]);
                  }

                  preX += item[3];
                  preY += item[4];
                  break;
                case 'q':

                  this.quadraticCurveTo(preX + item[1], preY + item[2], item[3] + preX, item[4] + preY);
                  preX += item[3];
                  preY += item[4];
                  break;
                case 'Z':
                  this.closePath();
                  break;
                case 'z':
                  this.closePath();
                  break;

                case 'a':
                  curves = (0, _arcToBezier2.default)({
                    rx: item[1],
                    ry: item[2],
                    px: preX,
                    py: preY,
                    xAxisRotation: item[3],
                    largeArcFlag: item[4],
                    sweepFlag: item[5],
                    cx: preX + item[6],
                    cy: preX + item[7]
                  });
                  lastCurve = curves[curves.length - 1];

                  curves.forEach(function (curve, index) {
                    if (index === 0) {
                      _this2.bezierCurveTo(preX, preY, curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y);
                    } else {
                      _this2.bezierCurveTo(curves[index - 1].x, curves[index - 1].y, curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y);
                    }
                  });

                  preX = lastCurve.x;
                  preY = lastCurve.y;

                  break;

                case 'A':

                  curves = (0, _arcToBezier2.default)({
                    rx: item[1],
                    ry: item[2],
                    px: preX,
                    py: preY,
                    xAxisRotation: item[3],
                    largeArcFlag: item[4],
                    sweepFlag: item[5],
                    cx: item[6],
                    cy: item[7]
                  });
                  lastCurve = curves[curves.length - 1];

                  curves.forEach(function (curve, index) {
                    if (index === 0) {
                      _this2.bezierCurveTo(preX, preY, curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y);
                    } else {
                      _this2.bezierCurveTo(curves[index - 1].x, curves[index - 1].y, curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y);
                    }
                  });

                  preX = lastCurve.x;
                  preY = lastCurve.y;

                  break;

                case 'T':

                  if (preItem[0] === 'Q' || preItem[0] === 'q') {
                    preCX = preX + preItem[3] - preItem[1];
                    preCY = preY + preItem[4] - preItem[2];
                    this.quadraticCurveTo(preX, preY, preCX, preCY, item[1], item[2]);
                  } else if (preItem[0] === 'T' || preItem[0] === 't') {
                    this.quadraticCurveTo(preX, preY, preX + preX - preCX, preY + preY - preCY, item[1], item[2]);
                    preCX = preX + preX - preCX;
                    preCY = preY + preY - preCY;
                  }

                  preX = item[1];
                  preY = item[2];
                  break;

                case 't':
                  if (preItem[0] === 'Q' || preItem[0] === 'q') {
                    preCX = preX + preItem[3] - preItem[1];
                    preCY = preY + preItem[4] - preItem[2];
                    this.quadraticCurveTo(preX, preY, preCX, preCY, preX + item[1], preY + item[2]);
                  } else if (preItem[0] === 'T' || preItem[0] === 't') {
                    this.quadraticCurveTo(preX, preY, preX + preX - preCX, preY + preY - preCY, preX + item[1], preY + item[2]);
                    preCX = preX + preX - preCX;
                    preCY = preY + preY - preCY;
                  }

                  preX += item[1];
                  preY += item[2];
                  break;
              }
            }
            if (this.option.fillStyle) {
              this.fillStyle(this.option.fillStyle);
              this.fill();
            }

            if (this.option.strokeStyle) {
              this.lineWidth(this.option.lineWidth);
              this.strokeStyle(this.option.strokeStyle);
              this.stroke();
            }
          }
        }]);

        return Path;
      }(_shape2.default);

      exports.default = Path;

      /***/
    },
    /* 42 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      // https://github.com/jkroso/parse-svg-path/blob/master/index.js
      /**
       * expected argument lengths
       * @type {Object}
       */

      var length = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0

        /**
         * segment pattern
         * @type {RegExp}
         */

      };var segment = /([astvzqmhlc])([^astvzqmhlc]*)/ig;

      /**
       * parse an svg path data string. Generates an Array
       * of commands where each command is an Array of the
       * form `[command, arg1, arg2, ...]`
       *
       * @param {String} path
       * @return {Array}
       */

      function parse(path) {
        var data = [];
        path.replace(segment, function (_, command, args) {
          var type = command.toLowerCase();
          args = parseValues(args);

          // overloaded moveTo
          if (type === 'm' && args.length > 2) {
            data.push([command].concat(args.splice(0, 2)));
            type = 'l';
            command = command === 'm' ? 'l' : 'L';
          }

          while (true) {
            if (args.length === length[type]) {
              args.unshift(command);
              return data.push(args);
            }
            if (args.length < length[type]) throw new Error('malformed path data');
            data.push([command].concat(args.splice(0, length[type])));
          }
        });
        return data;
      }

      var number = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;

      function parseValues(args) {
        var numbers = args.match(number);
        return numbers ? numbers.map(Number) : [];
      }

      exports.default = parse;

      /***/
    },
    /* 43 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _slicedToArray = function () {
        function sliceIterator(arr, i) {
          var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;_e = err;
          } finally {
            try {
              if (!_n && _i["return"]) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }return _arr;
        }return function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();

      // https://github.com/colinmeinke/svg-arc-to-cubic-bezier

      var TAU = Math.PI * 2;

      var mapToEllipse = function mapToEllipse(_ref, rx, ry, cosphi, sinphi, centerx, centery) {
        var x = _ref.x,
            y = _ref.y;

        x *= rx;
        y *= ry;

        var xp = cosphi * x - sinphi * y;
        var yp = sinphi * x + cosphi * y;

        return {
          x: xp + centerx,
          y: yp + centery
        };
      };

      var approxUnitArc = function approxUnitArc(ang1, ang2) {
        var a = 4 / 3 * Math.tan(ang2 / 4);

        var x1 = Math.cos(ang1);
        var y1 = Math.sin(ang1);
        var x2 = Math.cos(ang1 + ang2);
        var y2 = Math.sin(ang1 + ang2);

        return [{
          x: x1 - y1 * a,
          y: y1 + x1 * a
        }, {
          x: x2 + y2 * a,
          y: y2 - x2 * a
        }, {
          x: x2,
          y: y2
        }];
      };

      var vectorAngle = function vectorAngle(ux, uy, vx, vy) {
        var sign = ux * vy - uy * vx < 0 ? -1 : 1;
        var umag = Math.sqrt(ux * ux + uy * uy);
        var vmag = Math.sqrt(ux * ux + uy * uy);
        var dot = ux * vx + uy * vy;

        var div = dot / (umag * vmag);

        if (div > 1) {
          div = 1;
        }

        if (div < -1) {
          div = -1;
        }

        return sign * Math.acos(div);
      };

      var getArcCenter = function getArcCenter(px, py, cx, cy, rx, ry, largeArcFlag, sweepFlag, sinphi, cosphi, pxp, pyp) {
        var rxsq = Math.pow(rx, 2);
        var rysq = Math.pow(ry, 2);
        var pxpsq = Math.pow(pxp, 2);
        var pypsq = Math.pow(pyp, 2);

        var radicant = rxsq * rysq - rxsq * pypsq - rysq * pxpsq;

        if (radicant < 0) {
          radicant = 0;
        }

        radicant /= rxsq * pypsq + rysq * pxpsq;
        radicant = Math.sqrt(radicant) * (largeArcFlag === sweepFlag ? -1 : 1);

        var centerxp = radicant * rx / ry * pyp;
        var centeryp = radicant * -ry / rx * pxp;

        var centerx = cosphi * centerxp - sinphi * centeryp + (px + cx) / 2;
        var centery = sinphi * centerxp + cosphi * centeryp + (py + cy) / 2;

        var vx1 = (pxp - centerxp) / rx;
        var vy1 = (pyp - centeryp) / ry;
        var vx2 = (-pxp - centerxp) / rx;
        var vy2 = (-pyp - centeryp) / ry;

        var ang1 = vectorAngle(1, 0, vx1, vy1);
        var ang2 = vectorAngle(vx1, vy1, vx2, vy2);

        if (sweepFlag === 0 && ang2 > 0) {
          ang2 -= TAU;
        }

        if (sweepFlag === 1 && ang2 < 0) {
          ang2 += TAU;
        }

        return [centerx, centery, ang1, ang2];
      };

      var arcToBezier = function arcToBezier(_ref2) {
        var px = _ref2.px,
            py = _ref2.py,
            cx = _ref2.cx,
            cy = _ref2.cy,
            rx = _ref2.rx,
            ry = _ref2.ry,
            _ref2$xAxisRotation = _ref2.xAxisRotation,
            xAxisRotation = _ref2$xAxisRotation === undefined ? 0 : _ref2$xAxisRotation,
            _ref2$largeArcFlag = _ref2.largeArcFlag,
            largeArcFlag = _ref2$largeArcFlag === undefined ? 0 : _ref2$largeArcFlag,
            _ref2$sweepFlag = _ref2.sweepFlag,
            sweepFlag = _ref2$sweepFlag === undefined ? 0 : _ref2$sweepFlag;

        var curves = [];

        if (rx === 0 || ry === 0) {
          return [];
        }

        var sinphi = Math.sin(xAxisRotation * TAU / 360);
        var cosphi = Math.cos(xAxisRotation * TAU / 360);

        var pxp = cosphi * (px - cx) / 2 + sinphi * (py - cy) / 2;
        var pyp = -sinphi * (px - cx) / 2 + cosphi * (py - cy) / 2;

        if (pxp === 0 && pyp === 0) {
          return [];
        }

        rx = Math.abs(rx);
        ry = Math.abs(ry);

        var lambda = Math.pow(pxp, 2) / Math.pow(rx, 2) + Math.pow(pyp, 2) / Math.pow(ry, 2);

        if (lambda > 1) {
          rx *= Math.sqrt(lambda);
          ry *= Math.sqrt(lambda);
        }

        var _getArcCenter = getArcCenter(px, py, cx, cy, rx, ry, largeArcFlag, sweepFlag, sinphi, cosphi, pxp, pyp),
            _getArcCenter2 = _slicedToArray(_getArcCenter, 4),
            centerx = _getArcCenter2[0],
            centery = _getArcCenter2[1],
            ang1 = _getArcCenter2[2],
            ang2 = _getArcCenter2[3];

        var segments = Math.max(Math.ceil(Math.abs(ang2) / (TAU / 4)), 1);

        ang2 /= segments;

        for (var i = 0; i < segments; i++) {
          curves.push(approxUnitArc(ang1, ang2));
          ang1 += ang2;
        }

        return curves.map(function (curve) {
          var _mapToEllipse = mapToEllipse(curve[0], rx, ry, cosphi, sinphi, centerx, centery),
              x1 = _mapToEllipse.x,
              y1 = _mapToEllipse.y;

          var _mapToEllipse2 = mapToEllipse(curve[1], rx, ry, cosphi, sinphi, centerx, centery),
              x2 = _mapToEllipse2.x,
              y2 = _mapToEllipse2.y;

          var _mapToEllipse3 = mapToEllipse(curve[2], rx, ry, cosphi, sinphi, centerx, centery),
              x = _mapToEllipse3.x,
              y = _mapToEllipse3.y;

          return { x1: x1, y1: y1, x2: x2, y2: y2, x: x, y: y };
        });
      };

      exports.default = arcToBezier;

      /***/
    },
    /* 44 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _group = __webpack_require__(1);

      var _group2 = _interopRequireDefault(_group);

      var _text = __webpack_require__(5);

      var _text2 = _interopRequireDefault(_text);

      var _roundedRect = __webpack_require__(15);

      var _roundedRect2 = _interopRequireDefault(_roundedRect);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var Button = function (_Group) {
        _inherits(Button, _Group);

        function Button(option) {
          _classCallCheck(this, Button);

          var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));

          _this.width = option.width;

          var textHeight = 0;
          _this.text = new _text2.default(option.text, {
            font: option.font,
            color: option.color
          });
          var textWidth = _this.text.getWidth();
          var textGroup = new _group2.default();

          if (textWidth > option.width) {
            var step = Math.round(option.text.length * option.width / textWidth / 2);

            var textList = _this.stringSplit(option.text, step);
            var lineHeight = option.lineHeight || 12;
            textHeight = textList.length * lineHeight + 6;

            textList.forEach(function (text, index) {
              _this.text = new _text2.default(text, {
                font: option.font,
                color: option.color
              });

              _this.text.x = option.width / 2 - _this.text.getWidth() / 2 * _this.text.scaleX + (option.textX || 0);
              _this.text.y = Math.max(textHeight, option.height) / 2 - 10 + 5 * _this.text.scaleY + (option.textY || 0) + index * 12 - textHeight / 2 + lineHeight / 2;
              textGroup.add(_this.text);
            });
          } else {
            _this.text.x = option.width / 2 - _this.text.getWidth() / 2 * _this.text.scaleX + (option.textX || 0);
            _this.text.y = option.height / 2 - 10 + 5 * _this.text.scaleY + (option.textY || 0);
            textGroup.add(_this.text);
          }

          _this.roundedRect = new _roundedRect2.default(option.width, option.autoHeight ? Math.max(textHeight, option.height) : option.height, option.borderRadius, {
            strokeStyle: option.borderColor || 'black',
            fillStyle: option.backgroundColor || '#F5F5F5'
          });

          _this.add(_this.roundedRect);
          _this.add(textGroup);
          return _this;
        }

        _createClass(Button, [{
          key: 'stringSplit',
          value: function stringSplit(str, len) {
            var arr = [],
                offset = 0,
                char_length = 0;
            for (var i = 0; i < str.length; i++) {
              var son_str = str.charAt(i);
              encodeURI(son_str).length > 2 ? char_length += 1 : char_length += 0.5;
              if (char_length >= len || char_length < len && i === str.length - 1) {
                var sub_len = char_length == len ? i + 1 : i;
                arr.push(str.substr(offset, sub_len - offset + (char_length < len && i === str.length - 1 ? 1 : 0)));
                offset = i + 1;
                char_length = 0;
              }
            }
            return arr;
          }
        }]);

        return Button;
      }(_group2.default);

      exports.default = Button;

      /***/
    },
    /* 45 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _shape = __webpack_require__(0);

      var _shape2 = _interopRequireDefault(_shape);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var Rect = function (_Shape) {
        _inherits(Rect, _Shape);

        function Rect(width, height, option) {
          _classCallCheck(this, Rect);

          var _this = _possibleConstructorReturn(this, (Rect.__proto__ || Object.getPrototypeOf(Rect)).call(this));

          _this.width = width;
          _this.height = height;
          _this.option = option || {};
          return _this;
        }

        _createClass(Rect, [{
          key: 'draw',
          value: function draw() {
            if (this.option.fillStyle) {
              this.fillStyle(this.option.fillStyle);
              this.fillRect(0, 0, this.width, this.height);
            }

            if (this.option.strokeStyle) {
              this.strokeStyle(this.option.strokeStyle);
              this.strokeRect(0, 0, this.width, this.height);
            }
          }
        }]);

        return Rect;
      }(_shape2.default);

      exports.default = Rect;

      /***/
    },
    /* 46 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _shape = __webpack_require__(0);

      var _shape2 = _interopRequireDefault(_shape);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var Circle = function (_Shape) {
        _inherits(Circle, _Shape);

        function Circle(r, option) {
          _classCallCheck(this, Circle);

          var _this = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this));

          _this.option = option || {};
          _this.r = r;

          _this._dp = Math.PI * 2;
          return _this;
        }

        _createClass(Circle, [{
          key: 'draw',
          value: function draw() {
            this.beginPath();
            this.arc(0, 0, this.r, 0, this._dp, false);

            if (this.option.strokeStyle) {
              if (this.option.lineWidth !== undefined) {
                this.lineWidth(this.option.lineWidth);
              }
              this.strokeStyle(this.option.strokeStyle);
              this.stroke();
            }

            if (this.option.fillStyle) {
              this.fillStyle(this.option.fillStyle);
              this.fill();
            }
          }
        }]);

        return Circle;
      }(_shape2.default);

      exports.default = Circle;

      /***/
    },
    /* 47 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _shape = __webpack_require__(0);

      var _shape2 = _interopRequireDefault(_shape);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var Polygon = function (_Shape) {
        _inherits(Polygon, _Shape);

        function Polygon(vertex, options) {
          _classCallCheck(this, Polygon);

          var _this = _possibleConstructorReturn(this, (Polygon.__proto__ || Object.getPrototypeOf(Polygon)).call(this));

          _this.vertex = vertex || [];
          _this.options = options || {};
          _this.strokeColor = _this.options.strokeColor;
          _this.fillColor = _this.options.fillColor;
          return _this;
        }

        _createClass(Polygon, [{
          key: 'draw',
          value: function draw() {
            this.clear().beginPath();
            this.strokeStyle(this.strokeColor);
            this.moveTo(this.vertex[0][0], this.vertex[0][1]);

            for (var i = 1, len = this.vertex.length; i < len; i++) {
              this.lineTo(this.vertex[i][0], this.vertex[i][1]);
            }
            this.closePath();
            // 路径闭合
            //  if (this.options.strokeStyle) {
            //    this.strokeStyle = strokeStyle;
            // this.lineWidth(this.options.width);
            // this.lineJoin('round');
            // this.stroke();
            //  }
            if (this.strokeColor) {
              this.strokeStyle(this.strokeColor);
              this.stroke();
            }
            if (this.fillColor) {
              this.fillStyle(this.fillColor);
              this.fill();
            }
          }
        }]);

        return Polygon;
      }(_shape2.default);

      exports.default = Polygon;

      /***/
    },
    /* 48 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _shape = __webpack_require__(0);

      var _shape2 = _interopRequireDefault(_shape);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var EquilateralPolygon = function (_Shape) {
        _inherits(EquilateralPolygon, _Shape);

        function EquilateralPolygon(num, r, options) {
          _classCallCheck(this, EquilateralPolygon);

          var _this = _possibleConstructorReturn(this, (EquilateralPolygon.__proto__ || Object.getPrototypeOf(EquilateralPolygon)).call(this));

          _this.num = num;
          _this.r = r;
          _this.options = options || {};
          _this.strokeColor = options.strokeColor || 'black';
          _this.vertex = [];
          _this.initVertex();
          return _this;
        }

        _createClass(EquilateralPolygon, [{
          key: 'initVertex',
          value: function initVertex() {
            this.vertex.length = [];
            var num = this.num;
            var r = this.r;
            var i = void 0,
                startX = void 0,
                startY = void 0,
                newX = void 0,
                newY = void 0;

            if (num % 2 === 0) {
              startX = r * Math.cos(2 * Math.PI * 0 / num);
              startY = r * Math.sin(2 * Math.PI * 0 / num);

              this.vertex.push([startX, startY]);
              for (i = 1; i < num; i++) {
                newX = r * Math.cos(2 * Math.PI * i / num);
                newY = r * Math.sin(2 * Math.PI * i / num);

                this.vertex.push([newX, newY]);
              }
            } else {
              startX = r * Math.cos(2 * Math.PI * 0 / num - Math.PI / 2);
              startY = r * Math.sin(2 * Math.PI * 0 / num - Math.PI / 2);

              this.vertex.push([startX, startY]);
              for (i = 1; i < num; i++) {
                newX = r * Math.cos(2 * Math.PI * i / num - Math.PI / 2);
                newY = r * Math.sin(2 * Math.PI * i / num - Math.PI / 2);

                this.vertex.push([newX, newY]);
              }
            }
          }
        }, {
          key: 'draw',
          value: function draw() {
            this.beginPath();
            this.strokeStyle(this.strokeColor);
            this.moveTo(this.vertex[0][0], this.vertex[0][1]);

            for (var i = 1, len = this.vertex.length; i < len; i++) {
              this.lineTo(this.vertex[i][0], this.vertex[i][1]);
            }
            this.closePath();
            // 路径闭合
            //  if (this.options.strokeStyle) {
            //    this.strokeStyle = strokeStyle;
            // this.lineWidth(this.options.width);
            // this.lineJoin('round');
            this.stroke();
            //  }
            if (this.options.fillStyle) {
              this.fillStyle(this.options.fillStyle);
              this.fill();
            }
          }
        }]);

        return EquilateralPolygon;
      }(_shape2.default);

      exports.default = EquilateralPolygon;

      /***/
    }]
    /******/)
  );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _cax = __webpack_require__(0);

var _cax2 = _interopRequireDefault(_cax);

var _src = __webpack_require__(3);

var _src2 = _interopRequireDefault(_src);

var _helvetica = __webpack_require__(9);

var _helvetica2 = _interopRequireDefault(_helvetica);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stage = new _cax2.default.Stage(500, 400, '#canvasCtn');

_cax2.default.tick(function () {
  stage.update();
});

render();

document.querySelector('#refreshBtn').addEventListener('click', function () {
  stage.empty();
  render();
});

function render() {
  var option = {
    gap: 5,
    randomRange: 2,
    fillAngle: -45,
    strokeRepeat: 12,
    curveRange: 10,
    fillRepeat: 4,
    strokeWidth: 1,
    fillWidth: 1,
    strokeStyle: 'black',
    fillStyle: '#6aa8df',
    filter: 1
  };

  var group = new _cax2.default.Group();
  var s = new _src2.default(option);
  s.path(_helvetica2.default.s);

  var k = new _src2.default(option);
  k.path(_helvetica2.default.k);
  k.x = 80;

  var a = new _src2.default(option);
  a.path(_helvetica2.default.a);
  a.x = 80 * 2;

  var t = new _src2.default(option);
  t.path(_helvetica2.default.t);
  t.x = 80 * 3;

  var c = new _src2.default(option);
  c.path(_helvetica2.default.c);
  c.x = 295;

  var h = new _src2.default(option);
  h.path(_helvetica2.default.h);
  h.x = 380;

  group.add(s, k, a, t, c, h);
  group.x = 20;

  group.y = 100;
  stage.add(group);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cax = __webpack_require__(0);

var _cax2 = _interopRequireDefault(_cax);

var _ellipse = __webpack_require__(4);

var _ellipse2 = _interopRequireDefault(_ellipse);

var _fillRect2 = __webpack_require__(5);

var _fillRect3 = _interopRequireDefault(_fillRect2);

var _pathToShapes = __webpack_require__(6);

var _pathToShapes2 = _interopRequireDefault(_pathToShapes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Skatch = function (_cax$Group) {
  _inherits(Skatch, _cax$Group);

  function Skatch(option) {
    _classCallCheck(this, Skatch);

    var _this = _possibleConstructorReturn(this, (Skatch.__proto__ || Object.getPrototypeOf(Skatch)).call(this));

    _this.option = Object.assign({
      gap: 5,
      randomRange: 4,
      fillAngle: -45,
      strokeRepeat: 2,
      fillRepeat: 2,
      strokeWidth: 1,
      fillWidth: 1,
      strokeStyle: 'black',
      fillStyle: 'black'
    }, option);
    return _this;
  }

  _createClass(Skatch, [{
    key: 'fillCircle',
    value: function fillCircle(x, y, r, option) {
      var bmp = new _cax2.default.Bitmap((0, _fillRect3.default)(r * 2, r * 2, Object.assign({}, this.option, option)));
      bmp.x = x - r;
      bmp.y = y - r;
      var graphics = new _cax2.default.Graphics();
      graphics.arc(r, r, r, 0, Math.PI * 2);
      bmp.clip(graphics);
      this.add(bmp);
      return this;
    }
  }, {
    key: 'fillEllipse',
    value: function fillEllipse(x, y, w, h, option) {
      var bmp = new _cax2.default.Bitmap((0, _fillRect3.default)(w, h, Object.assign({}, this.option, option)));
      bmp.x = x - w / 2;
      bmp.y = y - h / 2;
      var graphics = new _cax2.default.Graphics();

      var k = 0.5522848;
      var ox = w / 2 * k;
      var oy = h / 2 * k;
      var xe = w;
      var ye = h;
      var xm = w / 2;
      var ym = h / 2;

      graphics.moveTo(0, ym);
      graphics.bezierCurveTo(0, ym - oy, xm - ox, 0, xm, 0);
      graphics.bezierCurveTo(xm + ox, 0, xe, ym - oy, xe, ym);
      graphics.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
      graphics.bezierCurveTo(xm - ox, ye, 0, ym + oy, 0, ym);
      bmp.clip(graphics);
      this.add(bmp);
      return this;
    }
  }, {
    key: 'strokeEllipse',
    value: function strokeEllipse(x, y, w, h) {
      var ellipse = new _ellipse2.default(w, h, {
        strokeStyle: this.option.strokeStyle,
        randomRange: this.option.randomRange,
        strokeRepeat: this.option.strokeRepeat,
        lineWidth: this.option.strokeWidth });
      ellipse.x = x;
      ellipse.y = y;
      ellipse.originX = w / 2;
      ellipse.originY = h / 2;
      // ellipse.rotation = Math.random()*360

      this.add(ellipse);
    }
  }, {
    key: 'strokeCircle',
    value: function strokeCircle(x, y, r) {
      var circle = new _ellipse2.default(r * 2, r * 2, {
        strokeStyle: this.option.strokeStyle,
        randomRange: this.option.randomRange,
        strokeRepeat: this.option.strokeRepeat,
        lineWidth: this.option.strokeWidth });
      circle.x = x;
      circle.y = y;
      circle.originX = r;
      circle.originY = r;
      circle.rotation = Math.random() * 360;

      this.add(circle);
    }
  }, {
    key: 'strokeRect',
    value: function strokeRect(x, y, w, h) {
      var rect = new _cax2.default.Graphics();
      for (var i = 0; i < this.option.strokeRepeat; i++) {
        rect.beginPath().moveTo.apply(rect, this._shake(x, y)).lineTo.apply(rect, this._shake(x, y + h)).lineTo.apply(rect, this._shake(x + w, y + h)).lineTo.apply(rect, this._shake(x + w, y)).lineTo.apply(rect, this._shake(x, y)).stroke();
      }
      this.add(rect);
    }
  }, {
    key: 'fillRect',
    value: function fillRect(x, y, w, h) {
      var bmp = new _cax2.default.Bitmap((0, _fillRect3.default)(w, h, this.option));
      bmp.x = x;
      bmp.y = y;

      this.add(bmp);
      return this;
    }
  }, {
    key: '_shake',
    value: function _shake(x, y) {
      var r = Math.random() * this.option.randomRange;
      var a = Math.random() * 360 * Math.PI / 180;
      return [x + r * Math.cos(a), y + r * Math.sin(a)];
    }
  }, {
    key: 'ellipse',
    value: function ellipse(x, y, w, h, option) {
      var o = Object.assign({}, this.option, option);
      this.fillEllipse(x, y, w, h, o);
      this.strokeEllipse(x, y, w, h, o);
    }
  }, {
    key: 'circle',
    value: function circle(x, y, r, option) {
      var o = Object.assign({}, this.option, option);
      this.fillCircle(x, y, r, o);
      this.strokeCircle(x, y, r, o);
    }
  }, {
    key: 'rect',
    value: function rect(x, y, w, h, option) {
      var o = Object.assign({}, this.option, option);
      this.fillRect(x, y, w, h, o);
      this.strokeRect(x, y, w, h, o);

      return this;
    }
  }, {
    key: 'strokePath',
    value: function strokePath(path, option) {
      var _this2 = this;

      var o = Object.assign({}, this.option, option);
      for (var i = 0; i < o.strokeRepeat; i++) {
        var shapes = this._shakeShapes((0, _pathToShapes2.default)(path));
        shapes.forEach(function (shape) {
          var g = new _cax2.default.Graphics();
          g.beginPath().moveTo(shape[0][0], shape[0][1]);
          shape.forEach(function (curve) {
            g.bezierCurveTo(curve[2], curve[3], curve[4], curve[5], curve[6], curve[7]);
          });
          g.stroke();
          _this2.add(g);
        });
      }
    }
  }, {
    key: '_shakeShapes',
    value: function _shakeShapes(shapes) {
      var _this3 = this;

      var ns = [];
      shapes.forEach(function (shape) {
        var s = [];
        var p1 = _this3._shake(shape[0][0], shape[0][1], _this3.option.randomRange);
        shape.forEach(function (curve, index) {
          var c = null;
          if (Math.random() < _this3.option.filter) {
            var p2 = _this3._shake(curve[2], curve[3], _this3.option.randomRange);
            var p3 = _this3._shake(curve[4], curve[5], _this3.option.randomRange);
            var p4 = _this3._shake(curve[6], curve[7], _this3.option.randomRange);

            c = [p1[0], p1[1], p2[0], p2[1], p3[0], p3[1], p4[0], p4[1]];
            s.push(c);
          }
        });
        ns.push(s);
      });

      return ns;
    }
  }, {
    key: 'path',
    value: function path(_path, option) {
      var o = Object.assign({}, this.option, option);
      this.fillPath(_path, o);
      this.strokePath(_path, o);

      return this;
    }
  }, {
    key: 'fillPath',
    value: function fillPath(path, option) {
      var shapes = (0, _pathToShapes2.default)(path);
      var box = this._getShapesBox(shapes);
      var bmp = new _cax2.default.Bitmap((0, _fillRect3.default)(box[2], box[3], Object.assign({}, this.option, option)));
      bmp.x = box[0];
      bmp.y = box[1];
      var g = new _cax2.default.Graphics();

      shapes.forEach(function (shape) {
        g.moveTo(shape[0][0], shape[0][1]);
        shape.forEach(function (curve) {
          g.bezierCurveTo(curve[2], curve[3], curve[4], curve[5], curve[6], curve[7]);
        });
      });
      g.x = box[0] * -1;
      g.y = box[1] * -1;
      bmp.clip(g);
      this.add(bmp);
      return this;
    }
  }, {
    key: '_getShapesBox',
    value: function _getShapesBox(shapes) {
      var curve = shapes[0][0];
      var minX = curve[0],
          minY = curve[1],
          maxX = curve[0],
          maxY = curve[1];

      shapes.forEach(function (shape) {
        shape.forEach(function (curve, index) {
          minX = Math.min(minX, curve[2], curve[4], curve[6]);
          maxX = Math.max(maxX, curve[2], curve[4], curve[6]);
          minY = Math.min(minY, curve[3], curve[5], curve[7]);
          maxY = Math.max(maxY, curve[3], curve[5], curve[7]);
        });
      });

      return [minX, minY, maxX - minX, maxY - minY];
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.empty();
      return this;
    }

    //   setLineDash () {
    //     this.cmds.push(['setLineDash', arguments])
    //     return this
    //   }

    //   lineCap () {
    //     this.cmds.push(['lineCap', arguments])
    //     return this
    //   }

    //   lineDashOffset () {
    //     this.cmds.push(['lineDashOffset', arguments])
    //     return this
    //   }

    //   lineJoin () {
    //     this.cmds.push(['lineJoin', arguments])
    //     return this
    //   }

    //   miterLimit () {
    //     this.cmds.push(['miterLimit', arguments])
    //     return this
    //   }

  }]);

  return Skatch;
}(_cax2.default.Group);

exports.default = Skatch;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cax = __webpack_require__(0);

var _cax2 = _interopRequireDefault(_cax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ellipse = function (_cax$Shape) {
  _inherits(Ellipse, _cax$Shape);

  function Ellipse(w, h, option) {
    _classCallCheck(this, Ellipse);

    var _this = _possibleConstructorReturn(this, (Ellipse.__proto__ || Object.getPrototypeOf(Ellipse)).call(this));

    _this.option = option || {};

    var k = 0.5522848;
    var ox = w / 2 * k;
    var oy = h / 2 * k;
    var xe = w;
    var ye = h;
    var xm = w / 2;
    var ym = h / 2;

    _this.pointsList = [];
    for (var i = 0; i < _this.option.strokeRepeat; i++) {
      _this.pointsList.push([_shake(0, ym, _this.option.randomRange), _shake(0, ym - oy, _this.option.randomRange), _shake(xm - ox, 0, _this.option.randomRange), _shake(xm, 0, _this.option.randomRange), _shake(xm + ox, 0, _this.option.randomRange), _shake(xe, ym - oy, _this.option.randomRange), _shake(xe, ym, _this.option.randomRange), _shake(xe, ym + oy, _this.option.randomRange), _shake(xm + ox, ye, _this.option.randomRange), _shake(xm, ye, _this.option.randomRange), _shake(xm - ox, ye, _this.option.randomRange), _shake(0, ym + oy, _this.option.randomRange), _shake(0, ym, _this.option.randomRange)]);
    }
    return _this;
  }

  _createClass(Ellipse, [{
    key: 'draw',
    value: function draw() {
      var _this2 = this;

      this.pointsList.forEach(function (points) {
        _this2.beginPath();
        _this2.moveTo(points[0][0], points[0][1]);
        _this2.bezierCurveTo(points[1][0], points[1][1], points[2][0], points[2][1], points[3][0], points[3][1]);
        _this2.bezierCurveTo(points[4][0], points[4][1], points[5][0], points[5][1], points[6][0], points[6][1]);
        _this2.bezierCurveTo(points[7][0], points[7][1], points[8][0], points[8][1], points[9][0], points[9][1]);
        _this2.bezierCurveTo(points[10][0], points[10][1], points[11][0], points[11][1], points[12][0], points[12][1]);

        if (_this2.option.strokeStyle) {
          if (_this2.option.lineWidth !== undefined) {
            _this2.lineWidth(_this2.option.lineWidth);
          }
          _this2.strokeStyle(_this2.option.strokeStyle);
          _this2.stroke();
        }

        if (_this2.option.fillStyle) {
          _this2.fillStyle(_this2.option.fillStyle);
          _this2.fill();
        }
      });
    }
  }]);

  return Ellipse;
}(_cax2.default.Shape);

function _shake(x, y, randomRange) {
  var r = Math.random() * randomRange;
  var a = Math.random() * 360 * Math.PI / 180;
  return [x + r * Math.cos(a), y + r * Math.sin(a)];
}

exports.default = Ellipse;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fillRect;

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

function fillRect(width, height, option) {
  option = Object.assign({
    gap: 5,
    randomRange: 4,
    curveRange: 35,
    fillAngle: -45,
    fillRepeat: 3,
    fillWidth: 1,
    fillStyle: 'black'
  }, option);
  canvas.width = width;
  canvas.height = height;
  ctx.clearRect(0, 0, width, height);
  var maxLen = Math.sqrt(width * width + height * height);
  var count = maxLen / option.gap;

  ctx.save();
  ctx.translate(width / 2, height / 2);
  ctx.lineWidth = option.fillWidth;
  ctx.strokeStyle = option.fillStyle;
  for (var j = 0; j < option.fillRepeat; j++) {
    var ba = option.fillAngle * Math.PI / 180;
    var ea = (option.fillAngle + 180) * Math.PI / 180;
    var ca = (option.fillAngle + 90) * Math.PI / 180;
    ctx.beginPath();
    for (var i = -Math.ceil(count / 2); i < Math.ceil(count / 2); i++) {
      var x1 = i * option.gap * Math.cos(ca) + maxLen / 2 * Math.cos(ba);
      var y1 = i * option.gap * Math.sin(ca) + maxLen / 2 * Math.sin(ba);
      var x2 = i * option.gap * Math.cos(ca) + maxLen / 2 * Math.cos(ea);
      var y2 = i * option.gap * Math.sin(ca) + maxLen / 2 * Math.sin(ea);
      ctx.moveTo.apply(ctx, _shake(x1, y1, option.randomRange));
      var qp = _shake(x2, y2, option.randomRange);
      var cp = _shake((x1 + x2) / 2, (y1 + y2) / 2, option.curveRange);
      ctx.quadraticCurveTo(cp[0], cp[1], qp[0], qp[1]);
    }

    ctx.stroke();
  }
  ctx.restore();

  return canvas.toDataURL();
}

function _shake(x, y, randomRange) {
  var r = Math.random() * randomRange;
  var a = Math.random() * 360 * Math.PI / 180;
  return [x + r * Math.cos(a), y + r * Math.sin(a)];
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pathToShapes;

var _pathParser = __webpack_require__(7);

var _pathParser2 = _interopRequireDefault(_pathParser);

var _arcToBezier = __webpack_require__(8);

var _arcToBezier2 = _interopRequireDefault(_arcToBezier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pathToShapes(path) {
  // https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths
  // M = moveto
  // L = lineto
  // H = horizontal lineto
  // V = vertical lineto
  // C = curveto
  // S = smooth curveto
  // Q = quadratic Belzier curve
  // T = smooth quadratic Belzier curveto
  // A = elliptical Arc
  // Z = closepath
  // 以上所有命令均允许小写字母。大写表示绝对定位，小写表示相对定位(从上一个点开始)。
  var cmds = (0, _pathParser2.default)(path),
      preX = 0,
      preY = 0,
      j = 0,
      len = cmds.length,
      shapes = [],
      current = null,
      closeX = void 0,
      closeY = void 0,
      preCX = void 0,
      preCY = void 0,
      sLen = void 0,
      curves = void 0,
      lastCurve = void 0;

  for (; j < len; j++) {
    var item = cmds[j];
    var action = item[0];
    var preItem = cmds[j - 1];

    switch (action) {
      case 'm':
        sLen = shapes.length;
        shapes[sLen] = [];
        current = shapes[sLen];
        preX = preX + item[1];
        preY = preY + item[2];
        break;
      case 'M':

        sLen = shapes.length;
        shapes[sLen] = [];
        current = shapes[sLen];
        preX = item[1];
        preY = item[2];
        break;

      case 'l':
        current.push([preX, preY, preX, preY, preX, preY, preX + item[1], preY + item[2]]);
        preX += item[1];
        preY += item[2];
        break;

      case 'L':

        current.push([preX, preY, item[1], item[2], item[1], item[2], item[1], item[2]]);
        preX = item[1];
        preY = item[2];

        break;

      case 'h':

        current.push([preX, preY, preX, preY, preX, preY, preX + item[1], preY]);
        preX += item[1];
        break;

      case 'H':
        current.push([preX, preY, item[1], preY, item[1], preY, item[1], preY]);
        preX = item[1];
        break;

      case 'v':
        current.push([preX, preY, preX, preY, preX, preY, preX, preY + item[1]]);
        preY += item[1];
        break;

      case 'V':
        current.push([preX, preY, preX, item[1], preX, item[1], preX, item[1]]);
        preY = item[1];
        break;

      case 'C':

        current.push([preX, preY, item[1], item[2], item[3], item[4], item[5], item[6]]);
        preX = item[5];
        preY = item[6];
        break;
      case 'S':
        if (preItem[0] === 'C' || preItem[0] === 'c') {
          current.push([preX, preY, preX + preItem[5] - preItem[3], preY + preItem[6] - preItem[4], item[1], item[2], item[3], item[4]]);
        } else if (preItem[0] === 'S' || preItem[0] === 's') {
          current.push([preX, preY, preX + preItem[3] - preItem[1], preY + preItem[4] - preItem[2], item[1], item[2], item[3], item[4]]);
        }
        preX = item[3];
        preY = item[4];
        break;

      case 'c':
        current.push([preX, preY, preX + item[1], preY + item[2], preX + item[3], preY + item[4], preX + item[5], preY + item[6]]);
        preX = preX + item[5];
        preY = preY + item[6];
        break;
      case 's':
        if (preItem[0] === 'C' || preItem[0] === 'c') {
          current.push([preX, preY, preX + preItem[5] - preItem[3], preY + preItem[6] - preItem[4], preX + item[1], preY + item[2], preX + item[3], preY + item[4]]);
        } else if (preItem[0] === 'S' || preItem[0] === 's') {
          current.push([preX, preY, preX + preItem[3] - preItem[1], preY + preItem[4] - preItem[2], preX + item[1], preY + item[2], preX + item[3], preY + item[4]]);
        }

        preX = preX + item[3];
        preY = preY + item[4];

        break;
      case 'a':
        curves = (0, _arcToBezier2.default)({
          rx: item[1],
          ry: item[2],
          px: preX,
          py: preY,
          xAxisRotation: item[3],
          largeArcFlag: item[4],
          sweepFlag: item[5],
          cx: preX + item[6],
          cy: preX + item[7]
        });
        lastCurve = curves[curves.length - 1];

        curves.forEach(function (curve, index) {
          if (index === 0) {
            current.push([preX, preY, curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y]);
          } else {
            current.push([curves[index - 1].x, curves[index - 1].y, curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y]);
          }
        });

        preX = lastCurve.x;
        preY = lastCurve.y;

        break;

      case 'A':

        curves = (0, _arcToBezier2.default)({
          rx: item[1],
          ry: item[2],
          px: preX,
          py: preY,
          xAxisRotation: item[3],
          largeArcFlag: item[4],
          sweepFlag: item[5],
          cx: item[6],
          cy: item[7]
        });
        lastCurve = curves[curves.length - 1];

        curves.forEach(function (curve, index) {
          if (index === 0) {
            current.push([preX, preY, curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y]);
          } else {
            current.push([curves[index - 1].x, curves[index - 1].y, curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y]);
          }
        });

        preX = lastCurve.x;
        preY = lastCurve.y;

        break;
      case 'Q':
        current.push(pasition.q2b(preX, preY, item[1], item[2], item[3], item[4]));
        preX = item[3];
        preY = item[4];

        break;
      case 'q':
        current.push(pasition.q2b(preX, preY, preX + item[1], preY + item[2], item[3] + preX, item[4] + preY));
        preX += item[3];
        preY += item[4];
        break;

      case 'T':

        if (preItem[0] === 'Q' || preItem[0] === 'q') {
          preCX = preX + preItem[3] - preItem[1];
          preCY = preY + preItem[4] - preItem[2];
          current.push(pasition.q2b(preX, preY, preCX, preCY, item[1], item[2]));
        } else if (preItem[0] === 'T' || preItem[0] === 't') {
          current.push(pasition.q2b(preX, preY, preX + preX - preCX, preY + preY - preCY, item[1], item[2]));
          preCX = preX + preX - preCX;
          preCY = preY + preY - preCY;
        }

        preX = item[1];
        preY = item[2];
        break;

      case 't':
        if (preItem[0] === 'Q' || preItem[0] === 'q') {
          preCX = preX + preItem[3] - preItem[1];
          preCY = preY + preItem[4] - preItem[2];
          current.push(pasition.q2b(preX, preY, preCX, preCY, preX + item[1], preY + item[2]));
        } else if (preItem[0] === 'T' || preItem[0] === 't') {
          current.push(pasition.q2b(preX, preY, preX + preX - preCX, preY + preY - preCY, preX + item[1], preY + item[2]));
          preCX = preX + preX - preCX;
          preCY = preY + preY - preCY;
        }

        preX += item[1];
        preY += item[2];
        break;

      case 'Z':
        closeX = current[0][0];
        closeY = current[0][1];
        current.push([preX, preY, closeX, closeY, closeX, closeY, closeX, closeY]);
        break;
      case 'z':
        closeX = current[0][0];
        closeY = current[0][1];
        current.push([preX, preY, closeX, closeY, closeX, closeY, closeX, closeY]);
        break;
    }
  }

  return shapes;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://github.com/jkroso/parse-svg-path/blob/master/index.js
/**
 * expected argument lengths
 * @type {Object}
 */

var length = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0

  /**
   * segment pattern
   * @type {RegExp}
   */

};var segment = /([astvzqmhlc])([^astvzqmhlc]*)/ig;

/**
 * parse an svg path data string. Generates an Array
 * of commands where each command is an Array of the
 * form `[command, arg1, arg2, ...]`
 *
 * @param {String} path
 * @return {Array}
 */

function parse(path) {
  var data = [];
  path.replace(segment, function (_, command, args) {
    var type = command.toLowerCase();
    args = parseValues(args);

    // overloaded moveTo
    if (type === 'm' && args.length > 2) {
      data.push([command].concat(args.splice(0, 2)));
      type = 'l';
      command = command === 'm' ? 'l' : 'L';
    }

    while (true) {
      if (args.length === length[type]) {
        args.unshift(command);
        return data.push(args);
      }
      if (args.length < length[type]) throw new Error('malformed path data');
      data.push([command].concat(args.splice(0, length[type])));
    }
  });
  return data;
}

var number = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;

function parseValues(args) {
  var numbers = args.match(number);
  return numbers ? numbers.map(Number) : [];
}

exports.default = parse;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// https://github.com/colinmeinke/svg-arc-to-cubic-bezier

var TAU = Math.PI * 2;

var mapToEllipse = function mapToEllipse(_ref, rx, ry, cosphi, sinphi, centerx, centery) {
  var x = _ref.x,
      y = _ref.y;

  x *= rx;
  y *= ry;

  var xp = cosphi * x - sinphi * y;
  var yp = sinphi * x + cosphi * y;

  return {
    x: xp + centerx,
    y: yp + centery
  };
};

var approxUnitArc = function approxUnitArc(ang1, ang2) {
  var a = 4 / 3 * Math.tan(ang2 / 4);

  var x1 = Math.cos(ang1);
  var y1 = Math.sin(ang1);
  var x2 = Math.cos(ang1 + ang2);
  var y2 = Math.sin(ang1 + ang2);

  return [{
    x: x1 - y1 * a,
    y: y1 + x1 * a
  }, {
    x: x2 + y2 * a,
    y: y2 - x2 * a
  }, {
    x: x2,
    y: y2
  }];
};

var vectorAngle = function vectorAngle(ux, uy, vx, vy) {
  var sign = ux * vy - uy * vx < 0 ? -1 : 1;
  var umag = Math.sqrt(ux * ux + uy * uy);
  var vmag = Math.sqrt(ux * ux + uy * uy);
  var dot = ux * vx + uy * vy;

  var div = dot / (umag * vmag);

  if (div > 1) {
    div = 1;
  }

  if (div < -1) {
    div = -1;
  }

  return sign * Math.acos(div);
};

var getArcCenter = function getArcCenter(px, py, cx, cy, rx, ry, largeArcFlag, sweepFlag, sinphi, cosphi, pxp, pyp) {
  var rxsq = Math.pow(rx, 2);
  var rysq = Math.pow(ry, 2);
  var pxpsq = Math.pow(pxp, 2);
  var pypsq = Math.pow(pyp, 2);

  var radicant = rxsq * rysq - rxsq * pypsq - rysq * pxpsq;

  if (radicant < 0) {
    radicant = 0;
  }

  radicant /= rxsq * pypsq + rysq * pxpsq;
  radicant = Math.sqrt(radicant) * (largeArcFlag === sweepFlag ? -1 : 1);

  var centerxp = radicant * rx / ry * pyp;
  var centeryp = radicant * -ry / rx * pxp;

  var centerx = cosphi * centerxp - sinphi * centeryp + (px + cx) / 2;
  var centery = sinphi * centerxp + cosphi * centeryp + (py + cy) / 2;

  var vx1 = (pxp - centerxp) / rx;
  var vy1 = (pyp - centeryp) / ry;
  var vx2 = (-pxp - centerxp) / rx;
  var vy2 = (-pyp - centeryp) / ry;

  var ang1 = vectorAngle(1, 0, vx1, vy1);
  var ang2 = vectorAngle(vx1, vy1, vx2, vy2);

  if (sweepFlag === 0 && ang2 > 0) {
    ang2 -= TAU;
  }

  if (sweepFlag === 1 && ang2 < 0) {
    ang2 += TAU;
  }

  return [centerx, centery, ang1, ang2];
};

var arcToBezier = function arcToBezier(_ref2) {
  var px = _ref2.px,
      py = _ref2.py,
      cx = _ref2.cx,
      cy = _ref2.cy,
      rx = _ref2.rx,
      ry = _ref2.ry,
      _ref2$xAxisRotation = _ref2.xAxisRotation,
      xAxisRotation = _ref2$xAxisRotation === undefined ? 0 : _ref2$xAxisRotation,
      _ref2$largeArcFlag = _ref2.largeArcFlag,
      largeArcFlag = _ref2$largeArcFlag === undefined ? 0 : _ref2$largeArcFlag,
      _ref2$sweepFlag = _ref2.sweepFlag,
      sweepFlag = _ref2$sweepFlag === undefined ? 0 : _ref2$sweepFlag;

  var curves = [];

  if (rx === 0 || ry === 0) {
    return [];
  }

  var sinphi = Math.sin(xAxisRotation * TAU / 360);
  var cosphi = Math.cos(xAxisRotation * TAU / 360);

  var pxp = cosphi * (px - cx) / 2 + sinphi * (py - cy) / 2;
  var pyp = -sinphi * (px - cx) / 2 + cosphi * (py - cy) / 2;

  if (pxp === 0 && pyp === 0) {
    return [];
  }

  rx = Math.abs(rx);
  ry = Math.abs(ry);

  var lambda = Math.pow(pxp, 2) / Math.pow(rx, 2) + Math.pow(pyp, 2) / Math.pow(ry, 2);

  if (lambda > 1) {
    rx *= Math.sqrt(lambda);
    ry *= Math.sqrt(lambda);
  }

  var _getArcCenter = getArcCenter(px, py, cx, cy, rx, ry, largeArcFlag, sweepFlag, sinphi, cosphi, pxp, pyp),
      _getArcCenter2 = _slicedToArray(_getArcCenter, 4),
      centerx = _getArcCenter2[0],
      centery = _getArcCenter2[1],
      ang1 = _getArcCenter2[2],
      ang2 = _getArcCenter2[3];

  var segments = Math.max(Math.ceil(Math.abs(ang2) / (TAU / 4)), 1);

  ang2 /= segments;

  for (var i = 0; i < segments; i++) {
    curves.push(approxUnitArc(ang1, ang2));
    ang1 += ang2;
  }

  return curves.map(function (curve) {
    var _mapToEllipse = mapToEllipse(curve[0], rx, ry, cosphi, sinphi, centerx, centery),
        x1 = _mapToEllipse.x,
        y1 = _mapToEllipse.y;

    var _mapToEllipse2 = mapToEllipse(curve[1], rx, ry, cosphi, sinphi, centerx, centery),
        x2 = _mapToEllipse2.x,
        y2 = _mapToEllipse2.y;

    var _mapToEllipse3 = mapToEllipse(curve[2], rx, ry, cosphi, sinphi, centerx, centery),
        x = _mapToEllipse3.x,
        y = _mapToEllipse3.y;

    return { x1: x1, y1: y1, x2: x2, y2: y2, x: x, y: y };
  });
};

exports.default = arcToBezier;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    a: "M34.999,64.015c3.671-0.46,6.296-1.038,7.877-1.73c2.835-1.199,4.253-3.068,4.253-5.605c0-3.09-1.088-5.225-3.262-6.401c-2.175-1.177-5.367-1.765-9.575-1.765c-4.724,0-8.068,1.154-10.032,3.46c-1.403,1.708-2.339,4.014-2.806,6.92H2.422c0.416-6.597,2.27-12.018,5.56-16.263c5.236-6.644,14.225-9.965,26.968-9.965c8.294,0,15.661,1.638,22.103,4.914c6.44,3.276,9.661,9.458,9.661,18.547v34.603c0,2.399,0.045,5.306,0.139,8.72c0.138,2.584,0.53,4.337,1.176,5.26c0.646,0.923,1.614,1.685,2.907,2.284v2.907H49.482c-0.6-1.522-1.016-2.952-1.246-4.291c-0.231-1.338-0.416-2.86-0.554-4.568c-2.738,2.953-5.895,5.467-9.467,7.543c-4.269,2.445-9.096,3.668-14.479,3.668c-6.869,0-12.541-1.95-17.019-5.848C2.238,102.505,0,96.98,0,89.829c0-9.273,3.602-15.987,10.806-20.139c3.951-2.26,9.761-3.875,17.43-4.845L34.999,64.015z M47.059,73.219c-1.263,0.785-2.538,1.418-3.824,1.903c-1.287,0.484-3.051,0.934-5.296,1.349l-4.49,0.831c-4.208,0.739-7.23,1.638-9.066,2.699c-3.106,1.799-4.659,4.591-4.659,8.374c0,3.369,0.948,5.803,2.846,7.301c1.896,1.5,4.204,2.249,6.921,2.249c4.31,0,8.28-1.246,11.911-3.737c3.631-2.492,5.516-7.035,5.656-13.633V73.219z",
    b: "M65.102,43.53c5.643,7.152,8.463,16.379,8.463,27.682c0,11.719-2.783,21.431-8.348,29.135c-5.564,7.706-13.333,11.557-23.303,11.557c-6.261,0-11.292-1.246-15.094-3.737c-2.273-1.476-4.731-4.06-7.374-7.751v9.481H0V8.028h19.724v36.264c2.506-3.506,5.269-6.182,8.288-8.028c3.575-2.307,8.126-3.46,13.652-3.46C51.646,32.803,59.459,36.379,65.102,43.53z M48.616,89.482c2.837-4.106,4.257-9.504,4.257-16.194c0-5.352-0.699-9.781-2.094-13.288c-2.651-6.644-7.536-9.965-14.653-9.965c-7.21,0-12.165,3.252-14.863,9.758c-1.396,3.46-2.093,7.936-2.093,13.426c0,6.46,1.441,11.812,4.326,16.056c2.884,4.245,7.28,6.367,13.188,6.367C41.801,95.642,45.778,93.589,48.616,89.482z",
    c: "M49.413,61.523c-0.37-2.813-1.318-5.352-2.844-7.612c-2.221-3.045-5.667-4.568-10.337-4.568c-6.661,0-11.216,3.299-13.667,9.896c-1.295,3.498-1.942,8.146-1.942,13.944c0,5.523,0.647,9.964,1.942,13.323c2.358,6.275,6.798,9.412,13.32,9.412c4.625,0,7.909-1.246,9.851-3.737c1.942-2.492,3.122-5.721,3.538-9.689h20.139c-0.462,5.998-2.633,11.673-6.512,17.024c-6.189,8.628-15.356,12.941-27.501,12.941c-12.146,0-21.083-3.599-26.809-10.796C2.863,94.465,0,85.133,0,73.667c0-12.939,3.163-23.009,9.49-30.206s15.055-10.796,26.187-10.796c9.467,0,17.214,2.123,23.241,6.367c6.026,4.246,9.594,11.742,10.703,22.492H49.413z",
    d: "M44.845,35.675c3.552,2.007,6.436,4.787,8.65,8.339V8.028h20v101.87H54.326v-10.45c-2.815,4.476-6.021,7.729-9.62,9.758c-3.599,2.029-8.074,3.045-13.426,3.045c-8.813,0-16.229-3.564-22.25-10.692C3.01,94.431,0,85.285,0,74.119C0,61.247,2.964,51.12,8.893,43.738c5.928-7.381,13.852-11.073,23.772-11.073C37.232,32.665,41.292,33.668,44.845,35.675z M49.689,89.413c2.907-4.152,4.36-9.526,4.36-16.125c0-9.227-2.33-15.824-6.99-19.793c-2.861-2.398-6.183-3.599-9.965-3.599c-5.768,0-10,2.18-12.699,6.54c-2.699,4.36-4.049,9.77-4.049,16.229c0,6.967,1.373,12.538,4.118,16.713c2.745,4.176,6.909,6.263,12.492,6.263C42.538,95.642,46.783,93.565,49.689,89.413z",
    e: "M55.106,35.992c5.262,2.357,9.607,6.077,13.035,11.159c3.09,4.482,5.094,9.68,6.01,15.595c0.531,3.465,0.748,8.456,0.65,14.971H19.861c0.307,7.567,2.937,12.873,7.889,15.917c3.013,1.892,6.637,2.837,10.875,2.837c4.493,0,8.144-1.153,10.951-3.46c1.531-1.246,2.886-2.976,4.06-5.19h20.137c-0.531,4.476-2.969,9.021-7.312,13.634c-6.758,7.335-16.217,11.003-28.38,11.003c-10.039,0-18.896-3.094-26.57-9.281C3.836,96.99,0,86.923,0,72.977C0,59.91,3.463,49.89,10.392,42.917c6.927-6.972,15.919-10.459,26.975-10.459C43.931,32.458,49.845,33.636,55.106,35.992z M25.601,53.031c-2.788,2.873-4.539,6.765-5.255,11.676h33.98c-0.359-5.236-2.11-9.208-5.255-11.919s-7.044-4.067-11.697-4.067C32.311,48.721,28.387,50.158,25.601,53.031z",
    f: "M38.963,6.955c1.014,0.069,2.398,0.173,4.152,0.312v16.056c-1.107-0.139-2.965-0.242-5.57-0.312c-2.607-0.069-4.406,0.508-5.398,1.73c-0.992,1.223-1.488,2.573-1.488,4.049c0,1.477,0,3.599,0,6.367H43.6v13.91H30.658v60.832H11.074V49.066H0v-13.91h10.797v-4.844c0-8.073,1.359-13.633,4.082-16.679c2.861-4.521,9.76-6.782,20.693-6.782C36.818,6.852,37.947,6.886,38.963,6.955z",
    g: "M41.953,34.395c4.791,1.984,8.662,5.629,11.611,10.935V34.464h19.238v71.558c0,9.734-1.637,17.07-4.912,22.007c-5.631,8.488-16.426,12.734-32.389,12.734c-9.643,0-17.51-1.893-23.6-5.675c-6.09-3.784-9.457-9.436-10.104-16.956h21.453c0.555,2.307,1.453,3.967,2.699,4.983c2.121,1.799,5.697,2.699,10.727,2.699c7.105,0,11.857-2.376,14.258-7.128c1.566-3.045,2.352-8.166,2.352-15.364v-4.844c-1.893,3.23-3.922,5.652-6.09,7.267c-3.922,3-9.02,4.499-15.295,4.499c-9.688,0-17.428-3.402-23.217-10.208C2.895,93.231,0,84.015,0,72.389c0-11.211,2.787-20.634,8.363-28.271c5.574-7.635,13.477-11.453,23.707-11.453C35.848,32.665,39.143,33.242,41.953,34.395z M48.67,88.479c3.172-3.483,4.756-9.031,4.756-16.644c0-7.151-1.506-12.595-4.514-16.333c-3.01-3.737-7.041-5.605-12.094-5.605c-6.893,0-11.646,3.253-14.266,9.758c-1.379,3.46-2.068,7.729-2.068,12.803c0,4.384,0.734,8.282,2.205,11.696c2.664,6.367,7.443,9.55,14.336,9.55C41.617,93.704,45.5,91.963,48.67,88.479z",
    h: "M54.074,34.882c3.789,1.616,6.902,4.087,9.336,7.411c2.066,2.818,3.33,5.716,3.789,8.694c0.461,2.978,0.691,7.839,0.691,14.58v44.332H47.752V63.963c0-4.064-0.689-7.344-2.062-9.838c-1.785-3.51-5.174-5.266-10.166-5.266c-5.176,0-9.104,1.744-11.783,5.231c-2.678,3.487-4.018,8.464-4.018,14.93v40.877H0V8.235h19.723v35.987c2.848-4.383,6.145-7.439,9.889-9.169c3.742-1.73,7.682-2.595,11.816-2.595C46.068,32.458,50.283,33.266,54.074,34.882z",
    i: "M20,25.468H0V7.267h20V25.468z M0,34.464h20v75.434H0V34.464z",
    j: "M0,124.362c1.107,0.092,1.891,0.149,2.354,0.173c0.461,0.023,0.875,0.035,1.246,0.035c1.938,0,3.4-0.474,4.395-1.418c0.99-0.946,1.486-2.78,1.486-5.502V34.81h19.725v83.185c0,7.612-1.5,13.241-4.498,16.886c-3,3.644-8.883,5.467-17.648,5.467c-0.6,0-1.486-0.024-2.664-0.069c-1.176-0.046-2.641-0.093-4.395-0.138V124.362z M29.205,25.468H9.48V7.267h19.725V25.468z",
    k: "M0,8.235h19.377v55.029L44.254,34.81h24.527L41.744,62.912l28.084,46.986H45.824L27.547,77.669l-8.17,8.492v23.737H0V8.235z",
    l: "M19.723,109.898H0V7.89h19.723V109.898z",
    m: "M94.465,34.741c3.229,1.292,6.158,3.553,8.789,6.782c2.121,2.63,3.553,5.86,4.291,9.689c0.461,2.538,0.691,6.252,0.691,11.142l-0.139,47.544H87.891V61.87c0-2.86-0.463-5.213-1.385-7.059c-1.754-3.506-4.982-5.26-9.689-5.26c-5.443,0-9.203,2.261-11.279,6.782c-1.062,2.399-1.592,5.284-1.592,8.651v44.914H44.084V64.984c0-4.475-0.463-7.728-1.385-9.758c-1.662-3.644-4.914-5.467-9.758-5.467c-5.629,0-9.412,1.823-11.35,5.467C20.529,57.302,20,60.394,20,64.5v45.398H0V34.603h19.17v11.004c2.443-3.921,4.75-6.713,6.92-8.374c3.828-2.952,8.789-4.429,14.879-4.429c5.768,0,10.426,1.27,13.98,3.807c2.859,2.353,5.027,5.375,6.504,9.065c2.584-4.429,5.789-7.682,9.619-9.758c4.061-2.076,8.582-3.114,13.564-3.114C87.959,32.803,91.234,33.45,94.465,34.741z",
    n: "M60.689,38.79c4.938,4.083,7.408,10.854,7.408,20.312v50.797H47.889V64.015c0-3.967-0.525-7.012-1.578-9.135c-1.926-3.875-5.59-5.813-10.992-5.813c-6.643,0-11.199,2.837-13.672,8.512c-1.283,3-1.924,6.829-1.924,11.488v40.831H0V34.603h19.1v11.004c2.527-3.875,4.916-6.667,7.168-8.374c4.041-3.045,9.164-4.567,15.367-4.567C49.398,32.665,55.75,34.707,60.689,38.79z",
    o: "M67.545,100.67c-6.367,7.859-16.033,11.789-28.996,11.789c-12.967,0-22.631-3.93-28.998-11.789C3.184,92.811,0,83.349,0,72.285c0-10.878,3.184-20.305,9.551-28.28c6.367-7.975,16.031-11.963,28.998-11.963c12.963,0,22.629,3.988,28.996,11.963c6.367,7.975,9.551,17.402,9.551,28.28C77.096,83.349,73.912,92.811,67.545,100.67z M51.766,89.769c3.092-4.101,4.637-9.928,4.637-17.484c0-7.555-1.545-13.372-4.637-17.448s-7.52-6.116-13.287-6.116s-10.207,2.039-13.322,6.116c-3.113,4.077-4.67,9.893-4.67,17.448c0,7.557,1.557,13.384,4.67,17.484c3.115,4.1,7.555,6.149,13.322,6.149S48.674,93.869,51.766,89.769z",
    p: "M63.99,42.561c6.152,6.505,9.229,16.056,9.229,28.651c0,13.287-3.008,23.415-9.02,30.381c-6.014,6.967-13.758,10.45-23.23,10.45c-6.037,0-11.053-1.5-15.045-4.499c-2.182-1.661-4.318-4.083-6.408-7.267v39.309H0V34.464h18.893v11.142c2.137-3.275,4.41-5.859,6.826-7.751c4.41-3.367,9.656-5.052,15.74-5.052C50.326,32.803,57.838,36.056,63.99,42.561z M48.852,56.749c-2.68-4.475-7.025-6.713-13.039-6.713c-7.225,0-12.188,3.391-14.891,10.173c-1.4,3.599-2.098,8.167-2.098,13.703c0,8.767,2.352,14.926,7.055,18.478c2.797,2.076,6.107,3.114,9.93,3.114c5.547,0,9.779-2.122,12.693-6.367c2.912-4.244,4.371-9.896,4.371-16.955C52.873,66.368,51.531,61.224,48.852,56.749z",
    q: "M47.268,37.101c2.26,1.756,4.568,4.643,6.92,8.663V34.603h19.031v105.192H53.703v-39.239c-1.477,3.045-4.002,5.756-7.578,8.132c-3.576,2.375-8.455,3.564-14.637,3.564c-8.719,0-16.148-3.486-22.283-10.458C3.068,94.82,0,85.515,0,73.878c0-12.56,3.08-22.604,9.24-30.13c6.158-7.526,13.76-11.29,22.803-11.29C38.316,32.458,43.393,34.006,47.268,37.101z M51.484,86.632c1.848-3.834,2.773-8.686,2.773-14.556c0-4.62-0.787-8.755-2.357-12.406c-2.82-6.562-7.768-9.842-14.842-9.842c-4.994,0-9.004,1.918-12.031,5.753c-3.027,3.835-4.543,9.657-4.543,17.467c0,5.222,0.693,9.496,2.082,12.822c2.588,6.33,7.396,9.495,14.424,9.495C43.785,95.365,48.617,92.454,51.484,86.632z",
    r: "M42.111,32.7c0.252,0.023,0.818,0.058,1.695,0.104v20.208c-1.246-0.138-2.354-0.23-3.322-0.277c-0.969-0.045-1.754-0.069-2.354-0.069c-7.936,0-13.264,2.584-15.986,7.751c-1.521,2.907-2.283,7.382-2.283,13.426v36.056H0V34.464h18.822v13.149c3.045-5.028,5.697-8.466,7.959-10.312c3.691-3.09,8.488-4.637,14.395-4.637C41.545,32.665,41.855,32.677,42.111,32.7z",
    s: "M20.002,85.814c0.416,3.507,1.32,5.998,2.711,7.474c2.457,2.63,7,3.945,13.629,3.945c3.895,0,6.988-0.576,9.283-1.73c2.295-1.153,3.441-2.883,3.441-5.19c0-2.215-0.924-3.898-2.771-5.052c-1.85-1.152-8.729-3.137-20.635-5.952c-8.57-2.122-14.609-4.775-18.115-7.958c-3.508-3.137-5.26-7.658-5.26-13.564c0-6.966,2.738-12.952,8.217-17.959c5.48-5.005,13.189-7.509,23.131-7.509c9.432,0,17.117,1.88,23.059,5.64c5.941,3.761,9.352,10.254,10.23,19.481H47.199c-0.279-2.537-0.996-4.544-2.15-6.021c-2.176-2.675-5.877-4.014-11.105-4.014c-4.303,0-7.367,0.669-9.193,2.007c-1.828,1.339-2.742,2.907-2.742,4.706c0,2.261,0.971,3.899,2.916,4.914c1.941,1.062,8.807,2.884,20.592,5.467c7.857,1.846,13.748,4.637,17.67,8.374c3.875,3.784,5.812,8.512,5.812,14.187c0,7.474-2.785,13.576-8.355,18.305c-5.572,4.729-14.182,7.093-25.83,7.093c-11.883,0-20.654-2.503-26.316-7.509C2.832,99.944,0,93.565,0,85.814H20.002z",
    t: "M0,49.205V35.156h10.52V14.118h19.516v21.038h12.248v14.049H30.035v39.862c0,3.091,0.391,5.017,1.176,5.778s3.184,1.142,7.197,1.142c0.6,0,1.234-0.011,1.904-0.035c0.668-0.023,1.324-0.057,1.971-0.104v14.741l-9.342,0.346c-9.32,0.322-15.688-1.291-19.102-4.844c-2.213-2.26-3.32-5.744-3.32-10.45V49.205H0z",
    u: "M20.207,34.464v45.468c0,4.291,0.506,7.521,1.516,9.688c1.791,3.83,5.301,5.744,10.535,5.744c6.703,0,11.293-2.722,13.773-8.166c1.285-2.952,1.928-6.852,1.928-11.696V34.464h20v75.434h-19.17V99.24c-0.184,0.231-0.645,0.923-1.379,2.076c-0.736,1.154-1.611,2.169-2.623,3.045c-3.082,2.769-6.062,4.661-8.938,5.675c-2.875,1.015-6.246,1.523-10.109,1.523c-11.135,0-18.633-4.014-22.498-12.042C1.08,95.088,0,88.56,0,79.932V34.464H20.207z",
    v: "M53.912,34.464h21.176l-27.24,75.434H27.053L0,34.464h22.146l15.709,55.641L53.912,34.464z",
    w: "M43.807,34.464h20l11.488,54.326l11.766-54.326h20.553l-21.869,75.434H65.469L53.633,54.949l-11.971,54.949H21.176L0,34.464h21.176l11.766,54.118L43.807,34.464z",
    x: "M0,109.898l25.744-38.201L1.107,34.603H25.26l12.602,21.85l12.312-21.85h23.461L48.859,71.351l25.744,38.547H50.035L37.053,87.219l-13.107,22.679H0z",
    y: "M10.762,124.362l2.492,0.139c1.938,0.092,3.781,0.022,5.535-0.208c1.754-0.231,3.229-0.761,4.43-1.592c1.152-0.785,2.225-2.422,3.219-4.914c0.99-2.491,1.418-4.014,1.281-4.567L0,34.464h21.938l16.471,55.641L53.98,34.464h20.969l-25.861,74.188c-4.998,14.302-8.951,23.172-11.861,26.609c-2.908,3.437-8.729,5.156-17.459,5.156c-1.754,0-3.164-0.012-4.225-0.035c-1.064-0.024-2.658-0.104-4.781-0.242V124.362z",
    z: "M2.629,50.52V34.464h59.654v16.401L25.27,93.704H63.6v16.194H0V94.534L37.391,50.52H2.629z",
    A: "M36.414,7.89h24.119l36.09,102.008H73.508l-6.73-20.969H29.213l-6.916,20.969H0L36.414,7.89z M35.01,71.351h26.125L48.248,31.211L35.01,71.351z",
    B: "M75.734,18.755c3.121,4.337,4.682,9.527,4.682,15.571c0,6.229-1.574,11.235-4.725,15.018c-1.76,2.123-4.354,4.061-7.779,5.813c5.205,1.892,9.133,4.891,11.783,8.997c2.648,4.107,3.975,9.09,3.975,14.948c0,6.045-1.516,11.465-4.543,16.263c-1.926,3.184-4.334,5.86-7.225,8.028c-3.256,2.492-7.098,4.199-11.525,5.121c-4.426,0.924-9.23,1.384-14.414,1.384H0V7.89h49.297C61.734,8.074,70.549,11.696,75.734,18.755z M20.346,25.606v22.492h24.793c4.43,0,8.025-0.841,10.787-2.526c2.762-1.684,4.145-4.671,4.145-8.962c0-4.751-1.826-7.89-5.479-9.412c-3.152-1.061-7.17-1.592-12.055-1.592H20.346z M20.346,64.984v27.198h24.766c4.424,0,7.867-0.599,10.33-1.8c4.469-2.214,6.705-6.458,6.705-12.733c0-5.305-2.168-8.95-6.5-10.935c-2.416-1.107-5.814-1.684-10.193-1.73H20.346z",
    C: "M14.172,18.547C22.389,10.15,32.84,5.952,45.529,5.952c16.98,0,29.395,5.629,37.246,16.886c4.336,6.321,6.662,12.665,6.982,19.031H68.443c-1.355-4.89-3.098-8.582-5.221-11.073c-3.797-4.429-9.424-6.644-16.881-6.644c-7.594,0-13.584,3.126-17.967,9.377c-4.385,6.252-6.576,15.099-6.576,26.541c0,11.442,2.312,20.012,6.939,25.709c4.625,5.699,10.504,8.547,17.635,8.547c7.311,0,12.885-2.445,16.721-7.335c2.121-2.63,3.881-6.575,5.279-11.834h21.178c-1.826,11.12-6.494,20.163-14.002,27.128c-7.508,6.967-17.127,10.45-28.857,10.45c-14.514,0-25.926-4.706-34.232-14.118C4.152,89.16,0,76.195,0,59.724C0,41.916,4.723,28.19,14.172,18.547z",
    D: "M59.771,10.104c7.156,2.353,12.951,6.667,17.385,12.941c3.555,5.076,5.979,10.566,7.271,16.471c1.293,5.906,1.939,11.535,1.939,16.886c0,13.564-2.725,25.052-8.172,34.464c-7.389,12.688-18.793,19.031-34.215,19.031H0V7.89h43.98C50.307,7.982,55.568,8.72,59.771,10.104z M20.691,25.606v66.576h19.686c10.074,0,17.098-4.959,21.072-14.879c2.17-5.443,3.258-11.926,3.258-19.447c0-10.381-1.631-18.35-4.887-23.91c-3.258-5.559-9.738-8.339-19.443-8.339H20.691z",
    E: "M74.811,25.952H20.832v21.661h49.551V65.33H20.832v26.229h56.471v18.339H0V7.89h74.811V25.952z",
    F: "M0,8.028h72.734v17.924H21.176v23.46h45.191v17.716H21.176v42.769H0V8.028z",
    G: "M73.496,39.724c-1.615-6.966-5.561-11.834-11.834-14.602c-3.508-1.522-7.404-2.284-11.695-2.284c-8.213,0-14.961,3.097-20.242,9.291c-5.285,6.194-7.926,15.506-7.926,27.938c0,12.526,2.861,21.39,8.582,26.593c5.721,5.203,12.227,7.805,19.516,7.805c7.152,0,13.012-2.051,17.578-6.155c4.568-4.104,7.381-9.48,8.443-16.129h-23.6V55.157h42.492v54.741H80.693l-2.145-12.734c-4.107,4.823-7.799,8.223-11.074,10.197c-5.629,3.444-12.549,5.167-20.762,5.167c-13.518,0-24.592-4.68-33.217-14.04C4.498,89.083,0,76.219,0,59.896c0-16.505,4.543-29.739,13.633-39.698S34.74,5.26,49.689,5.26c12.965,0,23.379,3.287,31.246,9.862c7.865,6.574,12.375,14.775,13.529,24.602H73.496z",
    H: "M0,109.898V7.89h21.178v38.893h39.654V7.89H82.01v102.008H60.832V64.361H21.178v45.537H0z",
    I: "M21.178,109.898H0V7.89h21.178V109.898z",
    J: "M20.139,71.212v2.353c0.174,7.889,0.986,13.438,2.438,16.644c1.451,3.208,4.561,4.81,9.328,4.81c4.725,0,7.846-1.753,9.361-5.26c0.91-2.076,1.365-5.582,1.365-10.519V7.89h21.314v71.004c0,8.674-1.465,15.548-4.398,20.623c-4.961,8.582-13.916,12.872-26.863,12.872s-21.633-3.471-26.053-10.415C2.211,95.031,0,85.562,0,73.565v-2.353H20.139z",
    K: "M0,7.89h20.969v42.03L60.381,7.89h27.543L46.064,49.843l44.006,60.055H62.664L31.234,65.37L20.969,75.78v34.118H0V7.89z",
    L: "M0,7.89h21.316v83.669H72.25v18.339H0V7.89z",
    M: "M68.016,7.89h30.67v102.008H78.824V40.9c0-1.983,0.023-4.763,0.068-8.339c0.047-3.575,0.07-6.332,0.07-8.27l-19.332,85.607H38.916L19.723,24.291c0,1.938,0.023,4.695,0.07,8.27c0.045,3.576,0.068,6.356,0.068,8.339v68.998H0V7.89h31.016l18.568,80.208L68.016,7.89z",
    N: "M0,7.89h22.346l40.492,71.127V7.89h19.861v102.008H61.389L19.861,37.519v72.379H0V7.89z",
    O: "M82.355,100.832c-7.705,7.936-18.848,11.903-33.426,11.903c-14.58,0-25.723-3.967-33.428-11.903C5.168,91.098,0,77.072,0,58.755c0-18.686,5.168-32.71,15.502-42.077C23.207,8.744,34.35,4.775,48.93,4.775c14.578,0,25.721,3.968,33.426,11.903c10.287,9.366,15.432,23.391,15.432,42.077C97.787,77.072,92.643,91.098,82.355,100.832z M69.033,85.33c4.959-6.229,7.439-15.087,7.439-26.575c0-11.441-2.48-20.288-7.439-26.54c-4.961-6.251-11.66-9.377-20.104-9.377s-15.18,3.114-20.209,9.343s-7.543,15.086-7.543,26.575c0,11.488,2.514,20.346,7.543,26.575s11.766,9.343,20.209,9.343S64.072,91.559,69.033,85.33z",
    P: "M68,65.745c-5.973,4.983-14.5,7.474-25.584,7.474H21.178v36.679H0V7.89h43.801c10.098,0,18.146,2.629,24.15,7.889s9.006,13.403,9.006,24.43C76.957,52.25,73.971,60.762,68,65.745z M51.73,28.997c-2.699-2.26-6.48-3.391-11.344-3.391H21.178v30.035h19.209c4.863,0,8.645-1.222,11.344-3.668c2.699-2.445,4.049-6.32,4.049-11.626C55.779,35.042,54.43,31.258,51.73,28.997z",
    Q: "M94.465,80.07c-1.793,5.85-4.438,10.708-7.932,14.577l11.711,11.029l-11.115,11.599l-12.252-11.626c-3.74,2.27-6.973,3.868-9.697,4.794c-4.57,1.528-10.043,2.292-16.416,2.292c-13.299,0-24.289-3.967-32.971-11.903C5.264,91.282,0,77.257,0,58.755c0-18.639,5.398-32.734,16.193-42.285c8.812-7.796,19.77-11.695,32.873-11.695c13.195,0,24.268,4.129,33.219,12.388c10.334,9.55,15.502,22.907,15.502,40.07C97.787,66.322,96.68,73.935,94.465,80.07z M55.791,93.771c1.246-0.323,2.838-0.901,4.777-1.733l-10.326-9.822l10.951-11.433l10.367,9.764c1.613-3.321,2.744-6.228,3.391-8.719c1.014-3.736,1.521-8.095,1.521-13.078c0-11.44-2.344-20.286-7.025-26.536c-4.684-6.25-11.523-9.376-20.52-9.376c-8.443,0-15.18,3-20.207,8.997c-5.029,5.998-7.543,14.972-7.543,26.921c0,13.979,3.6,23.991,10.799,30.035c4.66,3.922,10.246,5.882,16.754,5.882C51.176,94.673,53.529,94.372,55.791,93.771z",
    R: "M64.887,10.519c3.756,1.616,6.939,3.991,9.549,7.128c2.158,2.584,3.869,5.444,5.129,8.582c1.26,3.138,1.891,6.713,1.891,10.727c0,4.844-1.225,9.609-3.668,14.291c-2.447,4.683-6.482,7.993-12.111,9.931c4.705,1.893,8.039,4.58,10,8.062c1.961,3.484,2.941,8.801,2.941,15.952v6.851c0,4.661,0.188,7.82,0.562,9.481c0.562,2.63,1.873,4.568,3.936,5.813v2.561H59.586c-0.646-2.26-1.107-4.083-1.385-5.467c-0.553-2.86-0.854-5.79-0.9-8.789l-0.137-9.481c-0.088-6.505-1.213-10.841-3.373-13.011c-2.16-2.168-6.209-3.252-12.143-3.252H20.83v40H0V7.89h48.791C55.764,8.028,61.129,8.905,64.887,10.519z M20.83,25.606v27.405H43.77c4.557,0,7.975-0.554,10.254-1.661c4.031-1.938,6.047-5.767,6.047-11.488c0-6.182-1.951-10.334-5.85-12.457c-2.191-1.199-5.479-1.799-9.859-1.799H20.83z",
    S: "M20.346,78.41c0.66,4.661,1.955,8.144,3.887,10.45c3.533,4.199,9.586,6.298,18.16,6.298c5.135,0,9.305-0.554,12.508-1.661c6.076-2.122,9.115-6.066,9.115-11.834c0-3.367-1.49-5.974-4.465-7.82c-2.979-1.799-7.699-3.391-14.164-4.775l-11.043-2.422c-10.855-2.398-18.312-5.005-22.371-7.82C5.098,54.119,1.662,46.76,1.662,36.748c0-9.135,3.361-16.724,10.086-22.769c6.727-6.043,16.605-9.066,29.637-9.066c10.881,0,20.162,2.85,27.846,8.547c7.684,5.699,11.711,13.969,12.086,24.81H60.832c-0.379-6.135-3.123-10.496-8.23-13.08c-3.406-1.707-7.639-2.561-12.699-2.561c-5.629,0-10.123,1.107-13.48,3.322c-3.359,2.214-5.037,5.306-5.037,9.273c0,3.645,1.656,6.367,4.967,8.166c2.127,1.2,6.645,2.607,13.553,4.222l17.9,4.222c7.846,1.846,13.727,4.314,17.643,7.405c6.082,4.799,9.121,11.742,9.121,20.831c0,9.32-3.602,17.059-10.807,23.219c-7.205,6.159-17.383,9.239-30.533,9.239c-13.43,0-23.992-3.033-31.688-9.101C3.846,97.361,0,89.022,0,78.41H20.346z",
    T: "M82.631,7.89v18.062h-30.52v83.946H30.656V25.952H0V7.89H82.631z",
    U: "M0,7.89h21.662v62.65c0,7.007,0.826,12.124,2.482,15.351c2.574,5.717,8.182,8.575,16.826,8.575c8.596,0,14.182-2.858,16.756-8.575c1.654-3.227,2.482-8.343,2.482-15.351V7.89h21.662v62.7c0,10.843-1.682,19.286-5.045,25.329c-6.264,11.073-18.215,16.609-35.855,16.609s-29.617-5.537-35.928-16.609C1.682,89.875,0,81.432,0,70.589V7.89z",
    V: "M67.268,7.89h22.146L54.637,109.898H34.498L0,7.89h22.77l22.145,77.44L67.268,7.89z",
    W: "M22.631,7.89l13.467,58.416l2.934,16.257l2.943-15.924L53.496,7.89h22.492l12.119,58.407l3.105,16.266l3.148-15.633l13.6-59.04h21.701l-28.697,102.008h-20.41L68.236,50.243L64.639,30.52l-3.6,19.724l-12.318,59.655H28.924L0,7.89H22.631z",
    X: "M24.775,109.898H0l32.805-51.973L1.592,7.89h25.469L45.254,41.11L63.945,7.89h24.639L57.371,57.094l33.15,52.804H64.639L45.256,75.116L24.775,109.898z",
    Y: "M66.576,7.89h24.152L56.609,71.649v38.249H35.295V71.649L0,7.89h25.121l21.178,44.43L66.576,7.89z",
    Z: "M0,91.905l52.139-65.953H1.314V7.89h77.303v17.093L25.803,91.905h52.953v17.993H0V91.905z",
    0: "M61.49,22.354c5.143,8.997,7.717,21.777,7.717,38.339c0,16.564-2.574,29.32-7.717,38.271c-5.145,8.951-14.107,13.426-26.887,13.426s-21.742-4.475-26.887-13.426C2.572,90.013,0,77.257,0,60.693C0,44.13,2.572,31.35,7.717,22.354c5.145-8.997,14.107-13.495,26.887-13.495S56.346,13.356,61.49,22.354z M22.977,87.164c1.893,6.114,5.768,9.169,11.627,9.169s9.699-3.056,11.523-9.169c1.82-6.113,2.732-14.937,2.732-26.471c0-12.087-0.912-21.038-2.732-26.852c-1.824-5.813-5.664-8.72-11.523-8.72s-9.734,2.907-11.627,8.72c-1.893,5.813-2.838,14.765-2.838,26.852C20.139,72.228,21.084,81.051,22.977,87.164z",
    1: "M0,40.693V27.267c6.211-0.277,10.561-0.692,13.045-1.246c3.959-0.875,7.182-2.629,9.666-5.259c1.701-1.799,2.99-4.198,3.865-7.197c0.506-1.799,0.76-3.137,0.76-4.014h16.471v100.348H23.598V40.693H0z",
    2: "M4.637,90.174c2.814-6.689,9.459-13.771,19.932-21.246c9.09-6.505,14.971-11.165,17.648-13.979c4.105-4.383,6.158-9.181,6.158-14.395c0-4.244-1.176-7.773-3.529-10.588c-2.354-2.813-5.721-4.221-10.104-4.221c-5.998,0-10.082,2.238-12.25,6.713c-1.246,2.584-1.984,6.69-2.215,12.318H1.107C1.43,36.241,2.979,29.343,5.75,24.083C11.014,14.073,20.367,9.066,33.807,9.066c10.621,0,19.074,2.941,25.355,8.824c6.279,5.882,9.422,13.668,9.422,23.357c0,7.429-2.219,14.026-6.658,19.792c-2.912,3.83-7.695,8.097-14.352,12.803l-7.904,5.606c-4.947,3.507-8.33,6.044-10.152,7.612c-1.824,1.569-3.357,3.391-4.604,5.467h43.809v17.371H0C0.186,102.701,1.73,96.126,4.637,90.174z",
    3: "M19.377,79.102c0,4.014,0.645,7.336,1.934,9.966c2.395,4.844,6.742,7.266,13.049,7.266c3.867,0,7.238-1.326,10.115-3.979c2.877-2.652,4.314-6.471,4.314-11.454c0-6.597-2.666-11.003-8.002-13.218c-3.037-1.246-7.818-1.868-14.35-1.868V51.696c6.391-0.092,10.85-0.715,13.379-1.869c4.367-1.938,6.551-5.858,6.551-11.765c0-3.829-1.115-6.943-3.348-9.343c-2.23-2.398-5.373-3.599-9.422-3.599c-4.646,0-8.064,1.477-10.25,4.429c-2.186,2.953-3.232,6.898-3.139,11.834H1.799c0.186-4.983,1.037-9.711,2.559-14.187c1.613-3.921,4.148-7.543,7.605-10.865c2.58-2.353,5.645-4.152,9.193-5.398s7.904-1.869,13.066-1.869c9.586,0,17.316,2.48,23.193,7.439c5.875,4.96,8.814,11.616,8.814,19.966c0,5.906-1.754,10.889-5.26,14.948c-2.215,2.538-4.523,4.268-6.922,5.19c1.801,0,4.383,1.546,7.752,4.637c5.027,4.661,7.543,11.027,7.543,19.101c0,8.49-2.939,15.952-8.814,22.388c-5.877,6.436-14.576,9.654-26.1,9.654c-14.195,0-24.059-4.637-29.59-13.91C1.936,93.543,0.322,87.084,0,79.102H19.377z",
    4: "M70.383,88.306h-11.35v21.592H39.725V88.306H0V71.074l36.887-60.9h22.146v62.7h11.35V88.306z M39.725,72.873V29.651L14.678,72.873H39.725z",
    5: "M19.654,83.046c0.781,4.291,2.277,7.602,4.486,9.931c2.209,2.331,5.432,3.495,9.666,3.495c4.879,0,8.596-1.718,11.15-5.156c2.555-3.437,3.832-7.762,3.832-12.976c0-5.121-1.197-9.446-3.59-12.976c-2.395-3.529-6.123-5.294-11.186-5.294c-2.395,0-4.465,0.3-6.213,0.899c-3.084,1.107-5.41,3.161-6.975,6.159l-17.68-0.83l7.041-55.434h55.211v16.748h-40.98l-3.592,21.938c3.041-1.983,5.414-3.298,7.119-3.944c2.857-1.061,6.336-1.592,10.436-1.592c8.293,0,15.525,2.792,21.701,8.374c6.174,5.583,9.262,13.703,9.262,24.36c0,9.273-2.975,17.556-8.92,24.845c-5.945,7.291-14.842,10.935-26.686,10.935c-9.543,0-17.377-2.561-23.508-7.682C4.102,99.725,0.689,92.458,0,83.046H19.654z",
    6: "M47.545,34.81c0-1.614-0.623-3.391-1.869-5.329c-2.123-3.137-5.328-4.706-9.619-4.706c-6.414,0-10.98,3.599-13.703,10.796c-1.477,3.968-2.49,9.827-3.045,17.578c2.445-2.907,5.283-5.028,8.514-6.367c3.229-1.337,6.92-2.007,11.072-2.007c8.904,0,16.205,3.022,21.902,9.066c5.699,6.044,8.547,13.772,8.547,23.184c0,9.367-2.791,17.625-8.373,24.775c-5.582,7.152-14.256,10.727-26.021,10.727c-12.641,0-21.961-5.282-27.959-15.848C2.33,88.421,0,77.764,0,64.707c0-7.658,0.322-13.887,0.971-18.686c1.152-8.535,3.391-15.64,6.713-21.315c2.859-4.845,6.607-8.743,11.244-11.696c4.637-2.952,10.186-4.429,16.645-4.429c9.318,0,16.748,2.388,22.285,7.163c5.535,4.775,8.65,11.131,9.342,19.066H47.545z M24.154,91.351c2.906,3.415,6.596,5.121,11.072,5.121c4.383,0,7.83-1.649,10.346-4.948c2.514-3.298,3.771-7.578,3.771-12.837c0-5.859-1.43-10.346-4.291-13.46s-6.365-4.671-10.518-4.671c-3.369,0-6.346,1.015-8.928,3.045c-3.877,3-5.814,7.844-5.814,14.533C19.793,83.531,21.246,87.937,24.154,91.351z",
    7: "M71.143,26.298c-2.957,2.907-7.072,8.086-12.342,15.537c-5.27,7.452-9.684,15.146-13.242,23.08c-2.82,6.229-5.363,13.841-7.627,22.838c-2.266,8.997-3.398,16.379-3.398,22.146H14.049c0.6-17.993,6.512-36.702,17.73-56.125c7.25-12.042,13.322-20.438,18.217-25.19H0l0.277-17.717h70.865V26.298z",
    8: "M3.816,66.783c2.545-4.568,6.27-8.004,11.176-10.312c-4.863-3.229-8.023-6.724-9.482-10.485c-1.459-3.76-2.188-7.277-2.188-10.554c0-7.289,2.75-13.506,8.252-18.651c5.502-5.144,13.271-7.716,23.305-7.716c10.035,0,17.803,2.573,23.305,7.716c5.502,5.145,8.254,11.362,8.254,18.651c0,3.276-0.727,6.794-2.18,10.554c-1.453,3.761-4.604,7.024-9.447,9.792c4.959,2.769,8.691,6.436,11.193,11.004c2.504,4.567,3.756,9.666,3.756,15.294c0,8.443-3.131,15.629-9.387,21.557c-6.258,5.929-15,8.893-26.221,8.893c-11.223,0-19.721-2.964-25.492-8.893C2.887,97.707,0,90.521,0,82.078C0,76.449,1.271,71.351,3.816,66.783z M24.326,92.25c2.561,2.723,6.102,4.083,10.623,4.083s8.062-1.36,10.623-4.083c2.561-2.722,3.84-6.551,3.84-11.488c0-5.121-1.303-9.008-3.91-11.661c-2.605-2.653-6.123-3.979-10.553-3.979s-7.947,1.327-10.555,3.979c-2.607,2.653-3.91,6.54-3.91,11.661C20.484,85.7,21.766,89.529,24.326,92.25z M25.58,46.575c2.244,2.308,5.355,3.46,9.334,3.46c4.025,0,7.137-1.153,9.334-3.46c2.197-2.307,3.297-5.282,3.297-8.927c0-3.968-1.1-7.07-3.297-9.309c-2.197-2.237-5.309-3.356-9.334-3.356c-3.979,0-7.09,1.12-9.334,3.356c-2.244,2.239-3.365,5.341-3.365,9.309C22.215,41.293,23.336,44.269,25.58,46.575z",
    9: "M9.307,18.72c6.205-6.667,14.268-10,24.188-10c15.271,0,25.744,6.76,31.42,20.277c3.229,7.659,4.844,17.74,4.844,30.243c0,12.135-1.547,22.261-4.637,30.381c-5.906,15.457-16.748,23.184-32.525,23.184c-7.521,0-14.281-2.227-20.277-6.678C6.32,101.674,2.883,95.181,2.006,86.645H21.66c0.461,2.953,1.707,5.353,3.738,7.197c2.029,1.846,4.729,2.768,8.096,2.768c6.506,0,11.074-3.599,13.703-10.796c1.43-3.967,2.33-9.758,2.699-17.371c-1.799,2.261-3.715,3.991-5.744,5.19c-3.691,2.215-8.236,3.322-13.633,3.322c-7.982,0-15.064-2.756-21.246-8.27C3.09,63.174,0,55.226,0,44.845C0,34.096,3.102,25.388,9.307,18.72z M42.492,58.548c4.475-2.86,6.713-7.82,6.713-14.879c0-5.675-1.328-10.173-3.98-13.495c-2.652-3.322-6.287-4.982-10.9-4.982c-3.367,0-6.252,0.946-8.65,2.837C21.891,30.981,20,35.987,20,43.046c0,5.952,1.211,10.415,3.633,13.391c2.422,2.976,6.148,4.464,11.178,4.464C37.531,60.901,40.092,60.117,42.492,58.548z",
    "-": "M0,61.039h38.617v18.686H0V61.039z",
    "=": "M74.949,47.129V65.33H0V47.129H74.949z M74.949,79.448v18.201H0V79.448H74.949z",
    "_": "M0,127.614v-6.989h79.102v6.989H0z",
    "+": "M0,81.385V63.323h28.375V34.949h18.201v28.374h28.373v18.062H46.576v28.513H28.375V81.385H0z",
    "[": "M0,6.92h34.742v14.395H18.686v101.385h16.057v14.464H0V6.92z",
    "]": "M0,122.701h16.055V21.039H0V6.92h34.74v130.245H0V122.701z",
    "{": "M14.395,94.327c0-5.813-1.754-10.265-5.26-13.356C7.012,79.079,3.967,77.579,0,76.472v-8.374c4.475-1.522,7.635-3.206,9.48-5.052c3.275-3.183,4.914-8.05,4.914-14.602V29.896c0-2.353,0.391-4.82,1.174-7.405c1.381-4.475,3.727-8.028,7.041-10.658c3.039-2.398,6.605-3.99,10.703-4.775c2.484-0.507,6.053-0.784,10.701-0.831v11.073c-3.807,0.831-6.396,1.936-7.771,3.317c-2.107,2.12-3.162,5.83-3.162,11.128v16.036c0,5.161-0.693,9.261-2.076,12.302c-2.354,5.116-6.967,9.263-13.842,12.442c6.229,2.535,10.416,5.484,12.561,8.847c2.146,3.364,3.264,8.018,3.357,13.961v17.487c0,5.115,1.236,8.801,3.713,11.059c1.375,1.336,3.783,2.511,7.221,3.525v11.073l-4.9-0.138c-6.584-0.185-12.35-2.157-17.297-5.917c-4.947-3.761-7.422-9.239-7.422-16.437V94.327z",
    "}": "M0,138.479v-11.073c3.461-1.014,5.883-2.212,7.268-3.594c2.352-2.304,3.574-5.968,3.668-10.99V95.335c0-6.542,1.271-11.392,3.82-14.548c2.547-3.157,6.598-5.91,12.154-8.26c-6.066-2.949-10.246-6.301-12.537-10.057c-2.293-3.755-3.438-8.652-3.438-14.688V31.747c0-5.115-0.82-8.594-2.457-10.436C6.84,19.468,4.014,18.132,0,17.301V6.229c4.625,0.046,8.186,0.323,10.684,0.831c4.115,0.785,7.721,2.376,10.82,4.775c3.098,2.399,5.248,5.353,6.451,8.858c1.203,3.507,1.803,6.575,1.803,9.204v18.547c0,6.598,1.5,11.442,4.5,14.533c1.844,1.846,5.143,3.553,9.896,5.121v8.374c-3.924,1.107-6.898,2.538-8.928,4.291c-3.646,3.138-5.469,7.659-5.469,13.564v21.661c0,7.013-2.428,12.445-7.283,16.298c-4.855,3.852-10.705,5.871-17.549,6.056L0,138.479z",
    "\\": "M16.254,4.775l39.689,105.123H39.539L0,4.775H16.254z",
    "|": "M18.201,6.92v102.978H0V6.92H18.201z",
    ";": "M0,37.371h20.969v20.692H0V37.371z M0,126.3c4.66-1.339,7.912-3.714,9.758-7.128c1.152-2.123,1.893-5.214,2.215-9.273H0V89.206h21.316v17.909c0,3.193-0.416,6.486-1.246,9.877c-0.83,3.391-2.377,6.332-4.637,8.823c-2.354,2.63-5.191,4.637-8.512,6.021C3.6,133.22,1.291,133.912,0,133.912V126.3z",
    "'": "M18.893,7.89l-3.461,42.146H3.459L0,7.89H18.893z",
    ":": "M0,37.371h20.969v20.692H0V37.371z M0,89.206h20.969v20.692H0V89.206z",
    "\"": "M18.893,7.89l-3.32,42.146H3.115L0,7.89H18.893z M45.123,7.89l-3.254,42.146H29.412L26.229,7.89H45.123z",
    ",": "M0,126.3c3.967-1.107,6.885-2.953,8.754-5.537c1.869-2.584,2.941-6.206,3.219-10.865H0V89.206h21.314v17.91c0,3.146-0.414,6.426-1.246,9.841c-0.83,3.414-2.375,6.367-4.637,8.858c-2.445,2.675-5.316,4.694-8.615,6.056c-3.299,1.36-5.57,2.042-6.816,2.042V126.3z",
    ".": "M0,89.206h20.969v20.692H0V89.206z",
    "/": "M39.564,4.775h16.41L16.264,109.898H0L39.564,4.775z",
    "<": "M0,63.496l80.9-31.004v19.327L23.264,72.353L80.9,92.959v19.257L0,81.212V63.496z",
    ">": "M80.9,81.212L0,112.216V92.959l57.705-20.632L0,51.818V32.492l80.9,31.143V81.212z",
    "?": "M13.771,12.111c5.443-3.505,12.133-5.259,20.068-5.259c10.428,0,19.09,2.491,25.986,7.474c6.898,4.982,10.348,12.365,10.348,22.146c0,5.998-1.496,11.05-4.486,15.156c-1.75,2.492-5.107,5.675-10.078,9.55l-4.898,3.807c-2.67,2.076-4.441,4.498-5.314,7.267c-0.553,1.754-0.854,4.476-0.898,8.166H25.744c0.275-7.796,1.012-13.184,2.207-16.159c1.195-2.976,4.277-6.402,9.246-10.277l5.037-3.944c1.656-1.246,2.99-2.606,4.002-4.083c1.84-2.537,2.76-5.329,2.76-8.374c0-3.506-1.023-6.701-3.072-9.585c-2.047-2.883-5.787-4.325-11.219-4.325c-5.34,0-9.127,1.776-11.357,5.329C21.115,32.55,20,36.241,20,40.07H0C0.553,26.921,5.143,17.602,13.771,12.111z M25.26,89.897h20.691v20H25.26V89.897z",
    "`": "M35.227,24.291H20.969L0,3.599h21.938L35.227,24.291z",
    "~": "M3.375,74.604c1.461-3.968,3.26-7.22,5.395-9.758c2.273-2.675,4.617-4.556,7.029-5.64c2.412-1.083,4.896-1.626,7.447-1.626c1.113,0,2.574,0.139,4.385,0.416c2.877,0.461,5.549,1.154,8.018,2.076l16.273,6.229c1.908,0.738,3.758,1.257,5.551,1.557c1.793,0.3,3.178,0.45,4.156,0.45c3.072,0,5.516-1.188,7.332-3.564c1.814-2.376,3.143-5.248,3.98-8.616h11.766c-1.254,8.582-3.816,15.941-7.691,22.077c-3.875,6.136-9.105,9.204-15.695,9.204c-1.299,0-2.668-0.115-4.105-0.346c-2.785-0.415-6.086-1.407-9.904-2.976l-14.596-5.467c-1.352-0.507-3.004-0.969-4.959-1.384c-1.955-0.415-3.398-0.623-4.33-0.623c-2.654,0-5.006,1.003-7.053,3.01c-2.049,2.007-3.516,5.064-4.4,9.17H0C0.789,83.3,1.912,78.572,3.375,74.604z",
    "!": "M0,8.235h21.66v25.858l-5.605,47.569H5.744L0,34.093V8.235z M0.484,89.897h20.691v20H0.484V89.897z",
    "@": "M33.115,80.14c-3.715-4.014-5.572-9.62-5.572-16.817c0-8.35,2.838-16.17,8.514-23.46c5.674-7.289,12.641-10.935,20.898-10.935c4.846,0,8.605,1.339,11.281,4.014c2.029,2.076,3.391,4.453,4.082,7.128l2.492-8.72h13.08l-8.857,30.035c-0.693,2.446-1.189,4.256-1.488,5.433c-0.301,1.176-0.451,2.204-0.451,3.08c0,1.384,0.461,2.688,1.385,3.91c0.922,1.223,2.398,1.834,4.43,1.834c3.967,0,7.945-2.595,11.938-7.786c3.99-5.19,5.986-12.077,5.986-20.658c0-12.688-5.445-21.8-16.332-27.336c-6.83-3.505-14.512-5.259-23.045-5.259c-15.688,0-28.283,4.799-37.787,14.395c-8.582,8.674-12.873,19.078-12.873,31.211c0,13.473,5.029,24.153,15.088,32.042c8.904,6.967,19.77,10.45,32.596,10.45c8.766,0,16.955-1.615,24.568-4.844c4.152-1.707,8.441-4.129,12.871-7.267l1.662-1.177l5.051,7.751c-6.551,5.076-13.645,8.939-21.279,11.592c-7.637,2.653-15.561,3.979-23.773,3.979c-19.146,0-33.979-5.952-44.498-17.855C4.359,85.008,0,73.312,0,59.793c0-15.132,5.443-27.959,16.332-38.478C27.773,10.197,42.422,4.637,60.277,4.637c14.533,0,26.574,3.806,36.125,11.419c10.059,8.028,15.088,18.686,15.088,31.973c0,10.474-3.184,19.458-9.551,26.956C95.572,82.482,88.307,86.23,80.139,86.23c-4.244,0-7.508-1.199-9.791-3.599c-2.285-2.398-3.426-4.867-3.426-7.405c0-0.322,0.01-0.68,0.033-1.073c0.023-0.391,0.059-0.818,0.105-1.28c-1.754,3.322-3.715,5.976-5.883,7.958c-3.922,3.554-8.629,5.329-14.119,5.329C41.477,86.161,36.828,84.154,33.115,80.14z M66.16,40.9c-1.477-1.661-3.461-2.491-5.951-2.491c-4.799,0-8.928,2.987-12.389,8.962c-3.459,5.976-5.189,11.754-5.189,17.336c0,3.368,0.771,6.09,2.318,8.166c1.545,2.076,3.725,3.114,6.539,3.114c4.938,0,8.984-3.748,12.146-11.246c3.158-7.497,4.74-13.392,4.74-17.682C68.375,44.615,67.637,42.561,66.16,40.9z",
    "#": "M3.094,70.659h14.01l5.479-20.277H8.523l3.094-11.557h14.088l7.555-27.959h13.762l-7.555,27.959h11.326l7.496-27.959h13.758l-7.498,27.959h14.068l-3.096,11.557h-14.07l-5.438,20.277h14.08L67,82.216H52.916l-7.422,27.682H31.738l7.422-27.682H27.742l-7.48,27.682H6.5l7.48-27.682H0L3.094,70.659z M42.258,70.659l5.438-20.277H36.344l-5.479,20.277H42.258z",
    "$": "M38.689,126.3h-6.713v-13.772c-9.09-1.016-15.871-2.999-20.346-5.952C3.742,101.271-0.135,92.228,0.003,79.448h18.686c0.646,5.813,1.545,9.712,2.699,11.696c1.799,3.091,5.328,5.098,10.588,6.021v-29.55l-5.605-1.661c-8.812-2.583-15.029-6.182-18.65-10.796c-3.623-4.613-5.432-10.173-5.432-16.679c0-4.291,0.701-8.189,2.109-11.695c1.408-3.506,3.379-6.528,5.918-9.066c3.275-3.275,6.92-5.537,10.934-6.782c2.445-0.784,6.021-1.36,10.727-1.73V0h6.713v9.343c7.486,0.6,13.363,2.446,17.635,5.537c7.762,4.937,11.779,12.941,12.055,24.014H50.177c-0.365-4.106-1.049-7.104-2.051-8.997c-1.732-3.275-4.877-5.074-9.438-5.398v26.367c10.934,3.784,18.281,7.128,22.049,10.035c6.201,4.844,9.303,11.673,9.303,20.484c0,11.626-4.27,20.07-12.805,25.329c-5.213,3.229-11.395,5.122-18.547,5.675V126.3z M31.976,24.637c-4.014,0.093-6.988,1.166-8.926,3.218c-1.939,2.054-2.908,4.856-2.908,8.409c0,3.875,1.453,6.944,4.361,9.204c1.613,1.246,4.105,2.399,7.473,3.46V24.637z M38.689,96.957c3.604-0.46,6.227-1.291,7.869-2.491c2.875-2.122,4.312-5.79,4.312-11.004c0-3.967-1.348-7.104-4.039-9.412c-1.596-1.338-4.311-2.722-8.143-4.152V96.957z",
    "%": "M43.98,53.98c-5.008,5.029-11.086,7.543-18.236,7.543c-7.105,0-13.172-2.514-18.201-7.543C2.514,48.952,0,42.885,0,35.779c0-7.104,2.514-13.172,7.543-18.201c5.029-5.028,11.096-7.543,18.201-7.543s13.172,2.515,18.201,7.543c5.029,5.029,7.543,11.097,7.543,18.201C51.488,42.885,48.986,48.952,43.98,53.98z M33.529,43.565c2.146-2.146,3.219-4.741,3.219-7.786c0-3.045-1.072-5.64-3.219-7.786c-2.145-2.146-4.74-3.218-7.785-3.218s-5.641,1.073-7.785,3.218s-3.219,4.74-3.219,7.786c0,3.045,1.074,5.64,3.219,7.786c2.145,2.145,4.74,3.218,7.785,3.218S31.385,45.71,33.529,43.565z M82.008,9.55h10.479L36.594,112.528H25.883L82.008,9.55z M111.213,104.361c-5.029,5.029-11.096,7.543-18.201,7.543s-13.172-2.514-18.201-7.543c-5.029-5.028-7.543-11.095-7.543-18.201c0-7.151,2.514-13.229,7.543-18.236c5.029-5.005,11.096-7.509,18.201-7.509s13.172,2.515,18.201,7.543c5.027,5.029,7.543,11.097,7.543,18.201C118.756,93.266,116.24,99.333,111.213,104.361z M100.797,78.375c-2.145-2.146-4.74-3.218-7.785-3.218s-5.641,1.073-7.785,3.218s-3.219,4.741-3.219,7.786s1.074,5.64,3.219,7.786c2.145,2.145,4.74,3.218,7.785,3.218s5.641-1.073,7.785-3.218c2.146-2.146,3.219-4.741,3.219-7.786S102.943,80.521,100.797,78.375z",
    "^": "M41.039,7.89l25.398,61.177H48.98L33.283,29.985l-15.82,39.082H0L25.469,7.89H41.039z",
    "&": "M4.568,67.261c3.045-4.384,8.027-8.721,14.947-13.013l2.146-1.315c-2.953-3.326-5.236-6.722-6.852-10.187c-1.615-3.464-2.422-7.068-2.422-10.811c0-7.438,2.52-13.247,7.564-17.429c5.041-4.181,11.578-6.272,19.609-6.272c7.33,0,13.387,2.141,18.174,6.421c4.785,4.281,7.18,9.754,7.18,16.418c0,6.017-1.436,10.899-4.307,14.646c-2.869,3.749-7.08,7.22-12.633,10.414l14.658,17.774c1.682-2.398,2.979-5.004,3.889-7.818c0.91-2.813,1.389-5.79,1.438-8.926h17.508c-0.322,6.202-1.818,12.472-4.486,18.812c-1.475,3.564-3.865,7.497-7.18,11.8l18.518,22.122H68.445l-7.096-8.641c-3.453,3.201-6.67,5.567-9.654,7.097c-5.316,2.735-11.449,4.104-18.396,4.104c-10.447,0-18.607-3.045-24.484-9.136C2.939,97.232,0,90.472,0,83.042C0,76.905,1.523,71.645,4.568,67.261z M23.846,91.691c2.793,2.818,6.371,4.227,10.738,4.227c3.285,0,6.396-0.741,9.33-2.224c2.934-1.482,5.316-3.136,7.148-4.961L31.98,65.498c-4.996,3.281-8.299,6.168-9.91,8.663s-2.416,5.243-2.416,8.246C19.654,85.779,21.051,88.874,23.846,91.691z M32.531,37.054c0.859,1.341,2.725,3.721,5.598,7.142c2.871-1.941,4.928-3.583,6.172-4.923c2.393-2.496,3.59-5.201,3.59-8.114c0-2.126-0.719-4.021-2.154-5.686c-1.436-1.665-3.613-2.497-6.531-2.497c-1.818,0-3.518,0.486-5.096,1.457c-2.393,1.434-3.59,3.699-3.59,6.796C30.52,33.078,31.189,35.02,32.531,37.054z",
    "*": "M3.258,19.272l14.459,4.667V7.267h11.973v16.677l14.461-4.666l3.256,10.304l-14.74,4.536l9.619,13.772l-8.859,6.298l-9.598-13.016L13.91,54.188L5.053,47.89l9.688-13.772L0,29.582L3.258,19.272z",
    "(": "M8.996,32.458c3.322-7.658,6.896-14.141,10.727-19.447l4.914-6.782l11.35,0.138c-6.412,11.72-10.773,20.969-13.08,27.751c-3.83,11.35-5.744,24.038-5.744,38.063c0,9.043,0.738,17.371,2.215,24.983c2.26,11.673,6.299,22.86,12.111,33.564l4.221,7.751H24.014c-7.473-10.242-13.172-20.323-17.094-30.243C2.307,96.704,0,85.1,0,73.427C0,59.956,2.998,46.298,8.996,32.458z",
    ")": "M31.156,33.634c5.389,12.457,8.084,25.007,8.084,37.647c0,13.888-3.201,28.005-9.602,42.354c-3.594,8.027-6.98,14.071-10.156,18.131l-4.906,6.713H0c6.068-10.98,10.297-19.978,12.688-26.99c4.092-11.857,6.137-24.845,6.137-38.962c0-9.042-0.734-17.394-2.205-25.053c-2.254-11.672-6.275-22.837-12.066-33.495L0.346,6.229h14.854C22.199,16.01,27.518,25.146,31.156,33.634z"
};

/***/ })
/******/ ]);