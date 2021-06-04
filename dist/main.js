/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/about.js":
/*!******************************!*\
  !*** ./src/scripts/about.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openModal": function() { return /* binding */ openModal; },
/* harmony export */   "closeModal": function() { return /* binding */ closeModal; },
/* harmony export */   "addEventListeners": function() { return /* binding */ addEventListeners; }
/* harmony export */ });
/* harmony import */ var _styles_about_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/about.scss */ "./src/styles/about.scss");
/* harmony import */ var _styles_navbar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/navbar.scss */ "./src/styles/navbar.scss");


function openModal() {
  var modal = document.querySelector(".modal");
  var mainContentContainer = document.querySelector('.main-content-container');
  modal.style.display = 'block';
  document.querySelector("body").style.overflow = 'hidden';
  document.querySelector("body").style.background = 'rgba(0,0,0,0.6)';
  mainContentContainer.style.visibility = 'hidden'; // document.querySelector('footer').style.visibility = 'hidden'
}
function closeModal() {
  var modal = document.querySelector(".modal");
  var mainContentContainer = document.querySelector('.main-content-container');
  modal.style.display = 'none';
  document.querySelector("body").style.overflow = 'visible';
  document.querySelector("body").style.background = 'white';
  mainContentContainer.style.visibility = 'visible'; // document.querySelector('footer').style.visibility = 'visible'
}
function addEventListeners() {
  var navBar = document.querySelector(".nav-bar-container");
  var about = document.querySelector(".about");
  var modal = document.querySelector(".modal");
  var closeModalBtn = document.querySelector('.close-btn');
  var mainContentContainer = document.querySelector('.main-content-container');

  navBar.onclick = function (e) {
    if (e.target === about) {
      return openModal();
    }

    closeModal();
  };

  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  closeModalBtn.onclick = function () {
    closeModal();
  };
}
;

/***/ }),

/***/ "./src/scripts/pricing.js":
/*!********************************!*\
  !*** ./src/scripts/pricing.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gotData": function() { return /* binding */ gotData; }
/* harmony export */ });
var pricing;

function setup() {
  createCanvas(200, 200);
  loadJSON('http://api.marketstack.com/v1/eod?access_key=e47827176fbbffd4068a5060a925c64f&symbols=BB&date_from=2020-01-01', gotData);
}

function gotData(data) {
  // console.log(data);
  println(data);
}

/***/ }),

/***/ "./src/styles/about.scss":
/*!*******************************!*\
  !*** ./src/styles/about.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/navbar.scss":
/*!********************************!*\
  !*** ./src/styles/navbar.scss ***!
  \********************************/
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
/* harmony import */ var _scripts_about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/about.js */ "./src/scripts/about.js");
/* harmony import */ var _scripts_pricing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/pricing.js */ "./src/scripts/pricing.js");


document.addEventListener('DOMContentLoaded', function () {
  _scripts_about_js__WEBPACK_IMPORTED_MODULE_0__.addEventListeners();
  _scripts_about_js__WEBPACK_IMPORTED_MODULE_0__.openModal();
  _scripts_pricing_js__WEBPACK_IMPORTED_MODULE_1__.gotData(data);
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL3NjcmlwdHMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9zY3JpcHRzL3ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9zdHlsZXMvYWJvdXQuc2NzcyIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL3N0eWxlcy9uYXZiYXIuc2NzcyIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJvcGVuTW9kYWwiLCJtb2RhbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1haW5Db250ZW50Q29udGFpbmVyIiwic3R5bGUiLCJkaXNwbGF5Iiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kIiwidmlzaWJpbGl0eSIsImNsb3NlTW9kYWwiLCJhZGRFdmVudExpc3RlbmVycyIsIm5hdkJhciIsImFib3V0IiwiY2xvc2VNb2RhbEJ0biIsIm9uY2xpY2siLCJlIiwidGFyZ2V0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInByaWNpbmciLCJzZXR1cCIsImNyZWF0ZUNhbnZhcyIsImxvYWRKU09OIiwiZ290RGF0YSIsImRhdGEiLCJwcmludGxuIiwiYWJvdXRGaWxlIl0sIm1h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VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSw2Q0FBNkMsd0RBQXdELEU7Ozs7O1dDQXJHO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBdkIsUUFBUSxDQUFDaUIsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDaERRLGtFQUFBO0FBQ0FBLDBEQUFBO0FBQ0FQLDBEQUFBLENBQWdCSyxJQUFoQjtBQUNILENBSkQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2Fib3V0LnNjc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9uYXZiYXIuc2Nzc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKVxuICAgIGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudC1jb250YWluZXInKVxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2JhKDAsMCwwLDAuNiknO1xuICAgIG1haW5Db250ZW50Q29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIilcbiAgICBjb25zdCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQtY29udGFpbmVyJylcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnN0eWxlLmJhY2tncm91bmQgPSAnd2hpdGUnO1xuICAgIG1haW5Db250ZW50Q29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtYmFyLWNvbnRhaW5lclwiKVxuICAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXRcIilcbiAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpXG4gICAgIGNvbnN0IGNsb3NlTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnRuJylcbiAgICAgY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50LWNvbnRhaW5lcicpXG5cbiAgICBuYXZCYXIub25jbGljayA9IChlKSA9PiB7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBhYm91dCkge1xuICAgICAgICAgICAgcmV0dXJuIG9wZW5Nb2RhbCgpXG4gICAgICAgIH1cbiAgICAgICAgY2xvc2VNb2RhbCgpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBtb2RhbCkge1xuXG4gICAgICAgICAgICBjbG9zZU1vZGFsKClcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjbG9zZU1vZGFsQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGNsb3NlTW9kYWwoKVxuICAgIH1cbn07ICIsIlxudmFyIHByaWNpbmc7XG5mdW5jdGlvbiBzZXR1cCgpIHtcbiAgICBjcmVhdGVDYW52YXMoMjAwLCAyMDApO1xuICAgIGxvYWRKU09OKCdodHRwOi8vYXBpLm1hcmtldHN0YWNrLmNvbS92MS9lb2Q/YWNjZXNzX2tleT1lNDc4MjcxNzZmYmJmZmQ0MDY4YTUwNjBhOTI1YzY0ZiZzeW1ib2xzPUJCJmRhdGVfZnJvbT0yMDIwLTAxLTAxJywgZ290RGF0YSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnb3REYXRhKGRhdGEpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBwcmludGxuKGRhdGEpO1xufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIGFib3V0RmlsZSBmcm9tICcuL3NjcmlwdHMvYWJvdXQuanMnO1xuaW1wb3J0ICogYXMgcHJpY2luZyBmcm9tICcuL3NjcmlwdHMvcHJpY2luZy5qcyc7IFxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGFib3V0RmlsZS5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIGFib3V0RmlsZS5vcGVuTW9kYWwoKTtcbiAgICBwcmljaW5nLmdvdERhdGEoZGF0YSk7IFxufSkiXSwic291cmNlUm9vdCI6IiJ9