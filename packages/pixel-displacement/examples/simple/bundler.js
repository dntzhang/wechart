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
// let canvas, canvas2, ctx, ctx2, img, width, height
// let imageData,
//   data,
//   g,
//   grids = []

// window.addEventListener('load', init, false)

// function init () {
//   // var $img = document.querySelector('img')
//   // var $cv = document.createElement('canvas')
//   // $cv.width = $img.width
//   // $cv.height = $img.height
//   // var c = $cv.getContext('2d')
//   // c.drawImage($img, 0, 0)
//   // document.body.appendChild($cv)
//   // console.log($cv.toDataURL('image/jpeg', 1.0))
//   // debugger

//   createCanvas()
//   loop()
// }

// function createCanvas () {
// 	canvas = document.getElementById('canvas')
// 	canvas2 = document.getElementById('canvas2')
// 	width = canvas.width = canvas2.width = 468
// 	height = canvas.height = canvas2.height = 284
// 	ctx = canvas.getContext('2d')
// 	ctx2 = canvas2.getContext('2d')
// 	img = document.getElementById('img')
// 	ctx2.drawImage(img, 0, 0, 468, 284)
//   imageData = ctx2.getImageData(0, 0, 468, 284)
//   ctx2.clearRect(0, 0, img.width, img.height)
//   data = imageData.data
// 	for (let i = 0; i < img.height; i += 10) {
// 		g = new createGrid(0, i)
// 		grids.push(g)
// 	}
// }
// var rdColor = () => '#' + ((Math.random() * 0xffffff) | 0).toString(16)


// let createGrid = function (x, y) {
// 	this.x = x
// 	this.y = y
// }
// let color;
// let gap = 0;
// let lastcolor;
// let arr = [];
// createGrid.prototype.draw = function () {
// 	for (let j = 0; j < img.width; j += 1) {
//     let index = (j + this.y * img.width) * 4
//     //console.log(index)

// 		let r = data[index + 0]
// 		let g = data[index + 1]
// 		let b = data[index + 2]

//     if ((r + g + b) / 3 < 100) {
//       // console.log(rdColor());
// 			ctx.strokeStyle ='red'
// 			color = '#9c8bd3'
//       ctx.beginPath()
//       ctx.moveTo(j + gap, this.y)
//       ctx.lineTo(j + 1, this.y)
//       ctx.stroke()

// 		} else {
// 			ctx.lineWidth = 5;
// 			ctx.strokeStyle = '#00ffc5';
// 			color = '#00ffc5';
//       gap = 0
//       ctx.beginPath()
//       ctx.moveTo(j + gap, this.y)
//       ctx.lineTo(j + 1, this.y)
//       ctx.stroke()


// 		}


// 	}
// }

// createGrid.prototype.update = function () {
//   this.y += 1
//   if (this.y > height) {
//     this.y = 0
//   }
// }

// function loop () {
//   ctx.clearRect(0, 0, width, height)
//   for (let j = 0; j < grids.length; j += 1) {
//    grids[j].draw()
//    grids[j].update()
//   }
//   window.requestAnimationFrame(loop)
// }


//////////////////////////////////////////////////
// var scene = new THREE.Scene()
// var renderer = new THREE.WebGLRenderer({antialias: true})
// var $b = document.body
// var camera = new THREE.OrthographicCamera( -$b.offsetWidth / 2, $b.offsetWidth / 2, $b.offsetHeight / 2, $b.offsetHeight / -2, 0, 10000)
// renderer.setClearColor(new THREE.Color().setRGB(1, 1, 1))
// renderer.setSize($b.offsetWidth, $b.offsetHeight)
// document.body.appendChild(renderer.domElement)
// camera.position.copy(new THREE.Vector3(0, 0, 60))


// var uniforms = {
//   image: { value: new THREE.TextureLoader().load('./asset/a.jpeg') },
//   map: { value: new THREE.TextureLoader().load('./asset/wave.png') },
//   scaleX: {type: 'f', value: 0.05},
//   scaleY: {type: 'f', value: 0.05},
//   u_time: {type: 'f', value: Date.now() * 0.01}
// }
// var plane1 = new THREE.Mesh(
//   new THREE.PlaneGeometry(280, 200, 6, 6)
//   // , new THREE.MeshBasicMaterial({ wireframe: true, color: new THREE.Color().setRGB(1, 0, 1) })
//   , new THREE.ShaderMaterial({
//     uniforms,
//     vertexShader : `
//       varying vec2 vUv;
//       attribute float displacement; 
//       void main(){
//         vUv = uv;
//         gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1);
//       }
//     `
//     , fragmentShader: `
//       precision highp float;
//       uniform sampler2D image;
//       uniform sampler2D map;
//       uniform float scaleX;
//       uniform float scaleY;
//       uniform float u_time;
//       varying vec2 vUv;

//       void main() {
//         //vec4 t_map = texture2D(map, fract(vUv + u_time));

//         vec4 t_map = texture2D(map, vUv);

//         float offset = t_map.g;

//         // vec2 uv = vec2(
//         //   vUv.x + offset*.1 ,
//         //   vUv.y + offset*.05
//         // );
//         vec2 uv = vec2(
//           vUv.x + sin(vUv.y*3.1415926*20.)*.1,
//           vUv.y
//         );


//         vec4 t_image = texture2D(image, uv);
//         gl_FragColor = t_image;

//       }
//     `
//   })
// )
// scene.add(plane1)
// // ///////////////////////////////////////////////////////////

// var t = 0;
// ;(function animate () {
//   window.requestAnimationFrame(animate)
//   renderer.render(scene, camera)
//   //t = 1
//   t += 0.001
//   uniforms.u_time.value = t

//   //console.log(uniforms.u_time.value);

// })()


/***/ })
/******/ ]);