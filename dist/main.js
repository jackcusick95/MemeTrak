/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/about.js":
/*!******************************!*\
  !*** ./src/scripts/about.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./src/scripts/max_chart.js":
/*!**********************************!*\
  !*** ./src/scripts/max_chart.js ***!
  \**********************************/
/***/ (function() {

// import axios from "axios"; 
// export const maxChart = async (arg) => {
//     const response = await axios.get("https://api.twelvedata.com/time_series", {
//         params: {
//             symbol: ["BB", "AMC", "GME", "NOK", "BBBY"],
//             interval: "1week",
//             outputsize: "3000",
//             apikey: MYAPIKEY,
//             source: "docs",
//         },
//     });
// }

/***/ }),

/***/ "./src/styles/about.scss":
/*!*******************************!*\
  !*** ./src/styles/about.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/navbar.scss":
/*!********************************!*\
  !*** ./src/styles/navbar.scss ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/about.js */ "./src/scripts/about.js");
/* harmony import */ var _scripts_max_chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/max_chart.js */ "./src/scripts/max_chart.js");
/* harmony import */ var _scripts_max_chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_max_chart_js__WEBPACK_IMPORTED_MODULE_1__);


document.addEventListener('DOMContentLoaded', function () {
  _scripts_about_js__WEBPACK_IMPORTED_MODULE_0__.addEventListeners();
  _scripts_about_js__WEBPACK_IMPORTED_MODULE_0__.openModal();
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL3NjcmlwdHMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi8uL3NyYy9zY3JpcHRzL21heF9jaGFydC5qcyIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL3N0eWxlcy9hYm91dC5zY3NzIiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vLi9zcmMvc3R5bGVzL25hdmJhci5zY3NzIiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsib3Blbk1vZGFsIiwibW9kYWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtYWluQ29udGVudENvbnRhaW5lciIsInN0eWxlIiwiZGlzcGxheSIsIm92ZXJmbG93IiwiYmFja2dyb3VuZCIsInZpc2liaWxpdHkiLCJjbG9zZU1vZGFsIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJuYXZCYXIiLCJhYm91dCIsImNsb3NlTW9kYWxCdG4iLCJvbmNsaWNrIiwiZSIsInRhcmdldCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhYm91dEZpbGUi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Q0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLDZDQUE2Qyx3REFBd0QsRTs7Ozs7V0NBckc7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQVIsUUFBUSxDQUFDaUIsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDaERDLGtFQUFBO0FBQ0FBLDBEQUFBO0FBQ0gsQ0FIRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvYWJvdXQuc2Nzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL25hdmJhci5zY3NzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpXG4gICAgY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50LWNvbnRhaW5lcicpXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYmEoMCwwLDAsMC42KSc7XG4gICAgbWFpbkNvbnRlbnRDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJykuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKVxuICAgIGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudC1jb250YWluZXInKVxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc3R5bGUuYmFja2dyb3VuZCA9ICd3aGl0ZSc7XG4gICAgbWFpbkNvbnRlbnRDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1iYXItY29udGFpbmVyXCIpXG4gICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dFwiKVxuICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIilcbiAgICAgY29uc3QgY2xvc2VNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1idG4nKVxuICAgICBjb25zdCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQtY29udGFpbmVyJylcblxuICAgIG5hdkJhci5vbmNsaWNrID0gKGUpID0+IHtcblxuICAgICAgICBpZiAoZS50YXJnZXQgPT09IGFib3V0KSB7XG4gICAgICAgICAgICByZXR1cm4gb3Blbk1vZGFsKClcbiAgICAgICAgfVxuICAgICAgICBjbG9zZU1vZGFsKClcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQgPT09IG1vZGFsKSB7XG5cbiAgICAgICAgICAgIGNsb3NlTW9kYWwoKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNsb3NlTW9kYWxCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgY2xvc2VNb2RhbCgpXG4gICAgfVxufTsgIiwiLy8gaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiOyBcblxuLy8gZXhwb3J0IGNvbnN0IG1heENoYXJ0ID0gYXN5bmMgKGFyZykgPT4ge1xuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9hcGkudHdlbHZlZGF0YS5jb20vdGltZV9zZXJpZXNcIiwge1xuLy8gICAgICAgICBwYXJhbXM6IHtcbi8vICAgICAgICAgICAgIHN5bWJvbDogW1wiQkJcIiwgXCJBTUNcIiwgXCJHTUVcIiwgXCJOT0tcIiwgXCJCQkJZXCJdLFxuLy8gICAgICAgICAgICAgaW50ZXJ2YWw6IFwiMXdlZWtcIixcbi8vICAgICAgICAgICAgIG91dHB1dHNpemU6IFwiMzAwMFwiLFxuLy8gICAgICAgICAgICAgYXBpa2V5OiBNWUFQSUtFWSxcbi8vICAgICAgICAgICAgIHNvdXJjZTogXCJkb2NzXCIsXG4vLyAgICAgICAgIH0sXG4vLyAgICAgfSk7XG5cblxuLy8gfSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBhYm91dEZpbGUgZnJvbSAnLi9zY3JpcHRzL2Fib3V0LmpzJztcbmltcG9ydCAqIGFzIHByaWNpbmcgZnJvbSAnLi9zY3JpcHRzL21heF9jaGFydC5qcyc7IFxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGFib3V0RmlsZS5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIGFib3V0RmlsZS5vcGVuTW9kYWwoKTtcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==