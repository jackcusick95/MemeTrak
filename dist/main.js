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

document.addEventListener('DOMContentLoaded', function () {
  _scripts_about_js__WEBPACK_IMPORTED_MODULE_0__.addEventListeners();
  _scripts_about_js__WEBPACK_IMPORTED_MODULE_0__.openModal();
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL3NjcmlwdHMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9zdHlsZXMvYWJvdXQuc2Nzcz9kZTc3Iiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vLi9zcmMvc3R5bGVzL25hdmJhci5zY3NzP2ViYWQiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsib3Blbk1vZGFsIiwibW9kYWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtYWluQ29udGVudENvbnRhaW5lciIsInN0eWxlIiwiZGlzcGxheSIsIm92ZXJmbG93IiwiYmFja2dyb3VuZCIsInZpc2liaWxpdHkiLCJjbG9zZU1vZGFsIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJuYXZCYXIiLCJhYm91dCIsImNsb3NlTW9kYWxCdG4iLCJvbmNsaWNrIiwiZSIsInRhcmdldCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhYm91dEZpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxTQUFTQSxTQUFULEdBQXFCO0FBQ3hCLE1BQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFD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L3N0eWxlcy9hYm91dC5zY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvbmF2YmFyLnNjc3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIilcbiAgICBjb25zdCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQtY29udGFpbmVyJylcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnN0eWxlLmJhY2tncm91bmQgPSAncmdiYSgwLDAsMCwwLjYpJztcbiAgICBtYWluQ29udGVudENvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpXG4gICAgY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50LWNvbnRhaW5lcicpXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3doaXRlJztcbiAgICBtYWluQ29udGVudENvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJykuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWJhci1jb250YWluZXJcIilcbiAgICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0XCIpXG4gICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKVxuICAgICBjb25zdCBjbG9zZU1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ0bicpXG4gICAgIGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudC1jb250YWluZXInKVxuXG4gICAgbmF2QmFyLm9uY2xpY2sgPSAoZSkgPT4ge1xuXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gYWJvdXQpIHtcbiAgICAgICAgICAgIHJldHVybiBvcGVuTW9kYWwoKVxuICAgICAgICB9XG4gICAgICAgIGNsb3NlTW9kYWwoKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gbW9kYWwpIHtcblxuICAgICAgICAgICAgY2xvc2VNb2RhbCgpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY2xvc2VNb2RhbEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBjbG9zZU1vZGFsKClcbiAgICB9XG59OyAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBhYm91dEZpbGUgZnJvbSAnLi9zY3JpcHRzL2Fib3V0LmpzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBhYm91dEZpbGUuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICBhYm91dEZpbGUub3Blbk1vZGFsKCk7XG59KSJdLCJzb3VyY2VSb290IjoiIn0=