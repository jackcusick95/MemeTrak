/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/DOMExample.js":
/*!***********************************!*\
  !*** ./src/scripts/DOMExample.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMExample": function() { return /* binding */ DOMExample; }
/* harmony export */ });
/* harmony import */ var _images_yoda_stitch_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/yoda-stitch.jpg */ "./src/images/yoda-stitch.jpg");

var DOMExample = function DOMExample() {
  var _testObj$key;

  var testObj = {
    key1: "hi",
    key2: {
      key3: "Hello"
    }
  };
  var greeting = (testObj === null || testObj === void 0 ? void 0 : (_testObj$key = testObj.key2) === null || _testObj$key === void 0 ? void 0 : _testObj$key.key3) || testObj.key1;
  document.body.classList.add("center");
  var randomCard = document.createElement("div");
  randomCard.classList.add("card", "center", "rando");
  var winnerP = document.createElement("p");
  var randomButton = document.createElement("btn");
  randomButton.innerText = "Pick Me!";
  randomCard.append(randomButton, winnerP);
  document.body.append(randomCard);

  randomButton.onclick = function (e) {
    e.preventDefault();
    winnerP.innerHTML = randomJobSeeker();
  };

  var card = document.createElement("div");
  card.classList.add("card", "center");
  card.innerHTML = "<h2>".concat(greeting, " World!!!</h2>");
  document.body.append(card);
  var imgCard = document.createElement("div");
  imgCard.classList.add("card", "center", "image-card");
  document.body.appendChild(imgCard);
  var imgElement = document.createElement("img");
  imgElement.src = document.querySelector(".js-stitch-yoda-src").src;
  imgElement.classList.add("card", "center");
  imgElement.style.objectFit = "cover";
  imgElement.style.filter = "grayscale(80%)";
  document.body.appendChild(imgElement);
}; // to resolve path issues for images in JS

function buildAssetPath(imgSrc) {
  return "./dist/".concat(imgSrc);
}

function randomJobSeeker() {
  var jobSeekers =  true ? Object(function webpackMissingModule() { var e = new Error("Cannot find module '../secret'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).JOBSEEKERS : 0;
  var winner = jobSeekers[Math.floor(Math.random() * jobSeekers.length)];
  return winner;
}

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var canvasExample = /*#__PURE__*/function () {
  function canvasExample(props) {
    _classCallCheck(this, canvasExample);

    this.coords = [10, 10, 150, 100];
    this.animationDir = 1;
    this.fillColor = "green";
    this.canvas = document.createElement("canvas");
    this.canvas.width = window.innerWidth * 0.75;
    this.canvas.height = this.canvas.width / 2;
    this.ctx = this.canvas.getContext("2d");
  }

  _createClass(canvasExample, [{
    key: "createCanvas",
    value: function createCanvas() {
      document.body.append(this.canvas);
    } // drawSquare() {
    //   this.ctx.fillStyle = this.fillColor;
    //   this.ctx.fillRect(...this.coords);
    // }
    // updateSquare() {
    //   this.coords = this.coords.map((coord) => (coord += 1 * this.animationDir));
    // }
    // clearSquare() {
    //   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // }
    // reverseAnimation() {
    //   this.animationDir *= -1;
    // }

  }, {
    key: "clearCanvas",
    value: function clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "setColor",
    value: function setColor(color) {
      this.fillColor = color;
      document.body.style.backgroundColor = color;
      document.body.style.filter = "brightness(150%)";
    }
  }]);

  return canvasExample;
}();

/* harmony default export */ __webpack_exports__["default"] = (canvasExample);

/***/ }),

/***/ "./src/scripts/square.js":
/*!*******************************!*\
  !*** ./src/scripts/square.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Square = /*#__PURE__*/function () {
  function Square(ctx, coords) {
    var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "green";

    _classCallCheck(this, Square);

    this.ctx = ctx;
    this.coords = coords;
    this.color = color;
    this.animationDir = 1;
  }

  _createClass(Square, [{
    key: "drawSquare",
    value: function drawSquare() {
      var _this$ctx;

      this.ctx.fillStyle = this.color;

      (_this$ctx = this.ctx).fillRect.apply(_this$ctx, _toConsumableArray(this.coords));
    }
  }, {
    key: "updateSquare",
    value: function updateSquare(color) {
      var _this = this;

      this.color = color;
      this.coords = this.coords.map(function (coord) {
        return coord += 1 * _this.animationDir;
      });
    }
  }, {
    key: "reverseAnimation",
    value: function reverseAnimation() {
      this.animationDir *= -1;
    }
  }]);

  return Square;
}();

/* harmony default export */ __webpack_exports__["default"] = (Square);

/***/ }),

/***/ "./src/images/yoda-stitch.jpg":
/*!************************************!*\
  !*** ./src/images/yoda-stitch.jpg ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/yoda-stitch.jpg");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _images_yoda_stitch_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/yoda-stitch.jpg */ "./src/images/yoda-stitch.jpg");
/* harmony import */ var _scripts_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/canvas */ "./src/scripts/canvas.js");
/* harmony import */ var _scripts_square__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/square */ "./src/scripts/square.js");
/* harmony import */ var _scripts_DOMExample__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/DOMExample */ "./src/scripts/DOMExample.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var currentStateObj = {
  currentExample: null,
  currentEventListeners: []
};
document.querySelector("#canvas-demo").addEventListener("click", startCanvas);
document.querySelector("#DOM-demo").addEventListener("click", startDOM);

function startDOM() {
  unregisterEventListeners();
  clearDemo();
  currentStateObj.currentExample = "DOMDEMO";
  (0,_scripts_DOMExample__WEBPACK_IMPORTED_MODULE_4__.DOMExample)();
}

function startCanvas() {
  clearDemo();
  unregisterEventListeners();
  currentStateObj.currentExample = "CANVASDEMO";
  var canvas = new _scripts_canvas__WEBPACK_IMPORTED_MODULE_2__.default();
  canvas.createCanvas();
  var squares = [new _scripts_square__WEBPACK_IMPORTED_MODULE_3__.default(canvas.ctx, canvas.coords, canvas.fillColor)];
  var animating = true;

  var animation = function animation() {
    canvas.clearCanvas();
    if (animating) squares.forEach(function (sq) {
      return sq.updateSquare(canvas.fillColor);
    });
    squares.forEach(function (sq) {
      return sq.drawSquare();
    });
    window.requestAnimationFrame(animation);
    squares.forEach(function (sq) {
      if (sq.coords[0] + sq.coords[2] > window.innerWidth) sq.reverseAnimation();
      if (sq.coords[0] < 0) sq.reverseAnimation();
    });
  };

  window.requestAnimationFrame(animation);
  window.addEventListener("keydown", handleKeyDown);
  currentStateObj.currentEventListeners.push(["window", "keydown", handleKeyDown]);
  window.addEventListener("mousedown", handleMouseDown);
  currentStateObj.currentEventListeners.push(["window", "mousedown", handleMouseDown]);

  function handleKeyDown(event) {
    if (event.which === 32) {
      event.preventDefault();
      squares.forEach(function (sq) {
        return sq.reverseAnimation();
      });
      canvas.setColor("#".concat(Math.floor(Math.random() * 16777215).toString(16)));
    }
  }

  function handleMouseDown(event) {
    event.preventDefault();
    squares.push(new _scripts_square__WEBPACK_IMPORTED_MODULE_3__.default(canvas.ctx, canvas.coords.map(function (co) {
      return co + 25;
    }), canvas.fillColor)); // animating = !animating;
  }
}

function unregisterEventListeners() {
  while (currentStateObj.currentEventListeners.length) {
    var _currentStateObj$curr = currentStateObj.currentEventListeners.pop(),
        _currentStateObj$curr2 = _slicedToArray(_currentStateObj$curr, 3),
        selector = _currentStateObj$curr2[0],
        event = _currentStateObj$curr2[1],
        handler = _currentStateObj$curr2[2];

    if (selector === "window") {
      window.removeEventListener(event, handler);
      console.log(handler);
    } else {
      document.querySelector(selector).removeEventListener(event, handler);
    }
  }
}

function clearDemo() {
  if (currentStateObj.currentExample === "CANVASDEMO") document.body.removeChild(document.querySelector("canvas"));

  if (currentStateObj.currentExample === "DOMDEMO") {
    _toConsumableArray(document.querySelectorAll(".card")).forEach(function (elem) {
      return document.body.removeChild(elem);
    });
  }
}
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL3NjcmlwdHMvRE9NRXhhbXBsZS5qcyIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL3NjcmlwdHMvY2FudmFzLmpzIiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vLi9zcmMvc2NyaXB0cy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9pbWFnZXMveW9kYS1zdGl0Y2guanBnIiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/MDA5NCIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJET01FeGFtcGxlIiwidGVzdE9iaiIsImtleTEiLCJrZXkyIiwia2V5MyIsImdyZWV0aW5nIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmFuZG9tQ2FyZCIsImNyZWF0ZUVsZW1lbnQiLCJ3aW5uZXJQIiwicmFuZG9tQnV0dG9uIiwiaW5uZXJUZXh0IiwiYXBwZW5kIiwib25jbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlubmVySFRNTCIsInJhbmRvbUpvYlNlZWtlciIsImNhcmQiLCJpbWdDYXJkIiwiYXBwZW5kQ2hpbGQiLCJpbWdFbGVtZW50Iiwic3JjIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwib2JqZWN0Rml0IiwiZmlsdGVyIiwiYnVpbGRBc3NldFBhdGgiLCJpbWdTcmMiLCJqb2JTZWVrZXJzIiwicHJvY2VzcyIsInJlcXVpcmUiLCJ3aW5uZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJjYW52YXNFeGFtcGxlIiwicHJvcHMiLCJjb29yZHMiLCJhbmltYXRpb25EaXIiLCJmaWxsQ29sb3IiLCJjYW52YXMiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY2xlYXJSZWN0IiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJTcXVhcmUiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIm1hcCIsImNvb3JkIiwiY3VycmVudFN0YXRlT2JqIiwiY3VycmVudEV4YW1wbGUiLCJjdXJyZW50RXZlbnRMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnRDYW52YXMiLCJzdGFydERPTSIsInVucmVnaXN0ZXJFdmVudExpc3RlbmVycyIsImNsZWFyRGVtbyIsImNyZWF0ZUNhbnZhcyIsInNxdWFyZXMiLCJhbmltYXRpbmciLCJhbmltYXRpb24iLCJjbGVhckNhbnZhcyIsImZvckVhY2giLCJzcSIsInVwZGF0ZVNxdWFyZSIsImRyYXdTcXVhcmUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZXZlcnNlQW5pbWF0aW9uIiwiaGFuZGxlS2V5RG93biIsInB1c2giLCJoYW5kbGVNb3VzZURvd24iLCJldmVudCIsIndoaWNoIiwic2V0Q29sb3IiLCJ0b1N0cmluZyIsImNvIiwicG9wIiwic2VsZWN0b3IiLCJoYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVDaGlsZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFVB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QW1DLFNBQXZDLEVBQWtEO0FBQ2hELHVCQUFJdkQsUUFBUSxDQUFDd0YsZ0JBQVQsQ0FBMEIsT0FBMUIsQ0FBSixFQUF3Q3JCLE9BQXhDLENBQWdELFVBQUNzQixJQUFEO0FBQUEsYUFDOUN6RixRQUFRLENBQUNDLElBQVQsQ0FBY3NGLFdBQWQsQ0FBMEJFLElBQTFCLENBRDhDO0FBQUEsS0FBaEQ7QUFHRDtBQUNGLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdGl0Y2hBbmRZb2RhIGZyb20gXCIuLi9pbWFnZXMveW9kYS1zdGl0Y2guanBnXCI7XG5cbmV4cG9ydCBjb25zdCBET01FeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCB0ZXN0T2JqID0ge1xuICAgIGtleTE6IFwiaGlcIixcbiAgICBrZXkyOiB7XG4gICAgICBrZXkzOiBcIkhlbGxvXCIsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBncmVldGluZyA9IHRlc3RPYmo/LmtleTI/LmtleTMgfHwgdGVzdE9iai5rZXkxO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJjZW50ZXJcIik7XG4gIGNvbnN0IHJhbmRvbUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByYW5kb21DYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIsIFwiY2VudGVyXCIsIFwicmFuZG9cIik7XG4gIGNvbnN0IHdpbm5lclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgcmFuZG9tQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ0blwiKTtcbiAgcmFuZG9tQnV0dG9uLmlubmVyVGV4dCA9IFwiUGljayBNZSFcIjtcbiAgcmFuZG9tQ2FyZC5hcHBlbmQocmFuZG9tQnV0dG9uLCB3aW5uZXJQKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQocmFuZG9tQ2FyZCk7XG4gIHJhbmRvbUJ1dHRvbi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgd2lubmVyUC5pbm5lckhUTUwgPSByYW5kb21Kb2JTZWVrZXIoKTtcbiAgfTtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIiwgXCJjZW50ZXJcIik7XG4gIGNhcmQuaW5uZXJIVE1MID0gYDxoMj4ke2dyZWV0aW5nfSBXb3JsZCEhITwvaDI+YDtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY2FyZCk7XG4gIGNvbnN0IGltZ0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbWdDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIsIFwiY2VudGVyXCIsIFwiaW1hZ2UtY2FyZFwiKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWdDYXJkKTtcbiAgY29uc3QgaW1nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltZ0VsZW1lbnQuc3JjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1zdGl0Y2gteW9kYS1zcmNcIikuc3JjO1xuICBpbWdFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIsIFwiY2VudGVyXCIpO1xuICBpbWdFbGVtZW50LnN0eWxlLm9iamVjdEZpdCA9IFwiY292ZXJcIjtcbiAgaW1nRWxlbWVudC5zdHlsZS5maWx0ZXIgPSBcImdyYXlzY2FsZSg4MCUpXCI7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nRWxlbWVudCk7XG4gIFxufTtcblxuLy8gdG8gcmVzb2x2ZSBwYXRoIGlzc3VlcyBmb3IgaW1hZ2VzIGluIEpTXG5cbmZ1bmN0aW9uIGJ1aWxkQXNzZXRQYXRoKGltZ1NyYykge1xuICByZXR1cm4gYC4vZGlzdC8ke2ltZ1NyY31gO1xufVxuXG5mdW5jdGlvbiAgcmFuZG9tSm9iU2Vla2VyKCkge1xuICBsZXQgam9iU2Vla2VycyA9IChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgP1xuICAgIHJlcXVpcmUoJy4uL3NlY3JldCcpLkpPQlNFRUtFUlMgOlxuICAgIFtcbiAgICAgIFwiQXJ0aHVyIERlbnRcIixcbiAgICAgIFwiRm9yZCBQcmVmZWN0XCIsXG4gICAgICBcIlphcGhvZCBCZWVibGVicm94XCIsXG4gICAgICBcIk1hcnZpbiB0aGUgUGFyYW5vaWQgQW5kcm9pZFwiLFxuICAgICAgXCJUcmlsbGlhblwiLFxuICAgICAgXCJTbGFydGliYXJ0ZmFzdFwiLFxuICAgIF07XG4gIGNvbnN0IHdpbm5lciA9IGpvYlNlZWtlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogam9iU2Vla2Vycy5sZW5ndGgpXTtcbiAgcmV0dXJuIHdpbm5lcjtcbn1cblxuIiwiY2xhc3MgY2FudmFzRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5jb29yZHMgPSBbMTAsIDEwLCAxNTAsIDEwMF07XG4gICAgdGhpcy5hbmltYXRpb25EaXIgPSAxO1xuICAgIHRoaXMuZmlsbENvbG9yID0gYGdyZWVuYDtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuNzU7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5jYW52YXMud2lkdGggLyAyO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICB9XG4gIGNyZWF0ZUNhbnZhcygpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmNhbnZhcyk7XG4gIH1cbiAgLy8gZHJhd1NxdWFyZSgpIHtcbiAgLy8gICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmZpbGxDb2xvcjtcbiAgLy8gICB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLmNvb3Jkcyk7XG4gIC8vIH1cbiAgLy8gdXBkYXRlU3F1YXJlKCkge1xuICAvLyAgIHRoaXMuY29vcmRzID0gdGhpcy5jb29yZHMubWFwKChjb29yZCkgPT4gKGNvb3JkICs9IDEgKiB0aGlzLmFuaW1hdGlvbkRpcikpO1xuICAvLyB9XG5cbiAgLy8gY2xlYXJTcXVhcmUoKSB7XG4gIC8vICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAvLyB9XG5cbiAgLy8gcmV2ZXJzZUFuaW1hdGlvbigpIHtcbiAgLy8gICB0aGlzLmFuaW1hdGlvbkRpciAqPSAtMTtcbiAgLy8gfVxuICBjbGVhckNhbnZhcygpIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gIH1cbiAgc2V0Q29sb3IoY29sb3IpIHtcbiAgICB0aGlzLmZpbGxDb2xvciA9IGNvbG9yO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5maWx0ZXIgPSBgYnJpZ2h0bmVzcygxNTAlKWA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FudmFzRXhhbXBsZTtcbiIsImNsYXNzIFNxdWFyZSB7XG4gIGNvbnN0cnVjdG9yKGN0eCwgY29vcmRzLCBjb2xvciA9IFwiZ3JlZW5cIikge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLmFuaW1hdGlvbkRpciA9IDE7XG4gIH1cblxuICBkcmF3U3F1YXJlKCkge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoLi4udGhpcy5jb29yZHMpO1xuICB9XG4gIHVwZGF0ZVNxdWFyZShjb2xvcikge1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLmNvb3JkcyA9IHRoaXMuY29vcmRzLm1hcCgoY29vcmQpID0+IChjb29yZCArPSAxICogdGhpcy5hbmltYXRpb25EaXIpKTtcbiAgfVxuXG4gIHJldmVyc2VBbmltYXRpb24oKSB7XG4gICAgdGhpcy5hbmltYXRpb25EaXIgKj0gLTE7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3F1YXJlO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMveW9kYS1zdGl0Y2guanBnXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9pbWFnZXMveW9kYS1zdGl0Y2guanBnXCI7XG5pbXBvcnQgY2FudmFzRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2NhbnZhc1wiO1xuaW1wb3J0IFNxdWFyZSBmcm9tIFwiLi9zY3JpcHRzL3NxdWFyZVwiO1xuaW1wb3J0IHsgRE9NRXhhbXBsZSB9IGZyb20gXCIuL3NjcmlwdHMvRE9NRXhhbXBsZVwiO1xuY29uc3QgY3VycmVudFN0YXRlT2JqID0ge1xuICBjdXJyZW50RXhhbXBsZTogbnVsbCxcbiAgY3VycmVudEV2ZW50TGlzdGVuZXJzOiBbXSxcbn07XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FudmFzLWRlbW9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0Q2FudmFzKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjRE9NLWRlbW9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0RE9NKTtcblxuZnVuY3Rpb24gc3RhcnRET00oKSB7XG4gIHVucmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xuICBjbGVhckRlbW8oKTtcbiAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID0gXCJET01ERU1PXCI7XG4gIERPTUV4YW1wbGUoKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRDYW52YXMoKSB7XG4gIGNsZWFyRGVtbygpO1xuICB1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcbiAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID0gXCJDQU5WQVNERU1PXCI7XG4gIGNvbnN0IGNhbnZhcyA9IG5ldyBjYW52YXNFeGFtcGxlKCk7XG4gIGNhbnZhcy5jcmVhdGVDYW52YXMoKTtcbiAgY29uc3Qgc3F1YXJlcyA9IFtuZXcgU3F1YXJlKGNhbnZhcy5jdHgsIGNhbnZhcy5jb29yZHMsIGNhbnZhcy5maWxsQ29sb3IpXTtcblxuICBsZXQgYW5pbWF0aW5nID0gdHJ1ZTtcblxuICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4gICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4gICAgaWYgKGFuaW1hdGluZykgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4gc3EudXBkYXRlU3F1YXJlKGNhbnZhcy5maWxsQ29sb3IpKTtcbiAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS5kcmF3U3F1YXJlKCkpO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiB7XG4gICAgICBpZiAoc3EuY29vcmRzWzBdICsgc3EuY29vcmRzWzJdID4gd2luZG93LmlubmVyV2lkdGgpXG4gICAgICAgIHNxLnJldmVyc2VBbmltYXRpb24oKTtcbiAgICAgIGlmIChzcS5jb29yZHNbMF0gPCAwKSBzcS5yZXZlcnNlQW5pbWF0aW9uKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wdXNoKFtcbiAgICBcIndpbmRvd1wiLFxuICAgIFwia2V5ZG93blwiLFxuICAgIGhhbmRsZUtleURvd24sXG4gIF0pO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZU1vdXNlRG93bik7XG4gIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucHVzaChbXG4gICAgXCJ3aW5kb3dcIixcbiAgICBcIm1vdXNlZG93blwiLFxuICAgIGhhbmRsZU1vdXNlRG93bixcbiAgXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC53aGljaCA9PT0gMzIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS5yZXZlcnNlQW5pbWF0aW9uKCkpO1xuICAgICAgY2FudmFzLnNldENvbG9yKGAjJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpfWApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc3F1YXJlcy5wdXNoKFxuICAgICAgbmV3IFNxdWFyZShcbiAgICAgICAgY2FudmFzLmN0eCxcbiAgICAgICAgY2FudmFzLmNvb3Jkcy5tYXAoKGNvKSA9PiBjbyArIDI1KSxcbiAgICAgICAgY2FudmFzLmZpbGxDb2xvclxuICAgICAgKVxuICAgICk7XG4gICAgLy8gYW5pbWF0aW5nID0gIWFuaW1hdGluZztcbiAgfVxufVxuXG5mdW5jdGlvbiB1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIHdoaWxlIChjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLmxlbmd0aCkge1xuICAgIGxldCBbXG4gICAgICBzZWxlY3RvcixcbiAgICAgIGV2ZW50LFxuICAgICAgaGFuZGxlcixcbiAgICBdID0gY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wb3AoKTtcbiAgICBpZiAoc2VsZWN0b3IgPT09IFwid2luZG93XCIpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgIGNvbnNvbGUubG9nKGhhbmRsZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJEZW1vKCkge1xuICBpZiAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID09PSBcIkNBTlZBU0RFTU9cIilcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIikpO1xuICBpZiAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID09PSBcIkRPTURFTU9cIikge1xuICAgIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRcIildLmZvckVhY2goKGVsZW0pID0+XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==