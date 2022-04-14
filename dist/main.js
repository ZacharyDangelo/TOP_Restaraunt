/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createPage)
/* harmony export */ });
function createPage(){
    const container = document.querySelector('#content');
    createHeader(container);
    createBody(container);
    createFooter(container);
};


function createHeader(container){
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');
    container.appendChild(headerContainer);

    const headerText = document.createElement('h1');
    headerText.textContent = "Lil Fibonacci's";
    headerText.classList.add('header-text');
    headerContainer.appendChild(headerText);

    const linkContainer = document.createElement('div');
    linkContainer.classList.add('link-container');
    const homeLink = document.createElement('a');
    homeLink.id = "home-link";
    homeLink.href = "#";
    homeLink.textContent = "Home";
    linkContainer.appendChild(homeLink);

    const menuLink = document.createElement('a');
    menuLink.id = "menu-link";
    menuLink.href = "#";
    menuLink.textContent = "Menu";
    linkContainer.appendChild(menuLink);

    const contactLink = document.createElement('a');
    contactLink.id = "contact-link";
    contactLink.href = "#";
    contactLink.textContent = "Contact";
    linkContainer.appendChild(contactLink);

    headerContainer.appendChild(linkContainer);
}

function createBody(container){
    const contentContainer = document.createElement('div');
    contentContainer.id = "body-container";
    container.appendChild(contentContainer);
}

function createFooter(container){
    const footerContainer = document.createElement('div');
    footerContainer.classList.add("footer-container");

    const footerText = document.createElement('p');
    footerText.classList.add('footer-text');
    footerText.textContent = "(C) Zachary D'Angelo 2022";
    footerContainer.appendChild(footerText);

    container.appendChild(footerContainer);
}

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./src/page.js");




(0,_page__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUN6REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05nQztBQUNoQztBQUNBO0FBQ0E7QUFDQSxpREFBVSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wX3Jlc3RhcmF1bnQvLi9zcmMvcGFnZS5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGFyYXVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3BfcmVzdGFyYXVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhcmF1bnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3BfcmVzdGFyYXVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcF9yZXN0YXJhdW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVBhZ2UoKXtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbiAgICBjcmVhdGVIZWFkZXIoY29udGFpbmVyKTtcclxuICAgIGNyZWF0ZUJvZHkoY29udGFpbmVyKTtcclxuICAgIGNyZWF0ZUZvb3Rlcihjb250YWluZXIpO1xyXG59O1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcihjb250YWluZXIpe1xyXG4gICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBoZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWNvbnRhaW5lcicpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBoZWFkZXJUZXh0LnRleHRDb250ZW50ID0gXCJMaWwgRmlib25hY2NpJ3NcIjtcclxuICAgIGhlYWRlclRleHQuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLXRleHQnKTtcclxuICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcclxuXHJcbiAgICBjb25zdCBsaW5rQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsaW5rQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xpbmstY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBob21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGhvbWVMaW5rLmlkID0gXCJob21lLWxpbmtcIjtcclxuICAgIGhvbWVMaW5rLmhyZWYgPSBcIiNcIjtcclxuICAgIGhvbWVMaW5rLnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcbiAgICBsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVMaW5rKTtcclxuXHJcbiAgICBjb25zdCBtZW51TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIG1lbnVMaW5rLmlkID0gXCJtZW51LWxpbmtcIjtcclxuICAgIG1lbnVMaW5rLmhyZWYgPSBcIiNcIjtcclxuICAgIG1lbnVMaW5rLnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbiAgICBsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVMaW5rKTtcclxuXHJcbiAgICBjb25zdCBjb250YWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGNvbnRhY3RMaW5rLmlkID0gXCJjb250YWN0LWxpbmtcIjtcclxuICAgIGNvbnRhY3RMaW5rLmhyZWYgPSBcIiNcIjtcclxuICAgIGNvbnRhY3RMaW5rLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcbiAgICBsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RMaW5rKTtcclxuXHJcbiAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobGlua0NvbnRhaW5lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJvZHkoY29udGFpbmVyKXtcclxuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRlbnRDb250YWluZXIuaWQgPSBcImJvZHktY29udGFpbmVyXCI7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvb3Rlcihjb250YWluZXIpe1xyXG4gICAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb290ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvb3Rlci1jb250YWluZXJcIik7XHJcblxyXG4gICAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGZvb3RlclRleHQuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLXRleHQnKTtcclxuICAgIGZvb3RlclRleHQudGV4dENvbnRlbnQgPSBcIihDKSBaYWNoYXJ5IEQnQW5nZWxvIDIwMjJcIjtcclxuICAgIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGFpbmVyKTtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZVBhZ2UgZnJvbSBcIi4vcGFnZVwiO1xyXG5cclxuXHJcblxyXG5jcmVhdGVQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9