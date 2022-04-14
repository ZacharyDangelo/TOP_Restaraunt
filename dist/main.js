/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./GreatVibes-Regular.ttf */ "./src/GreatVibes-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./BarlowCondensed-ExtraLight.ttf */ "./src/BarlowCondensed-ExtraLight.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./Poppins-Regular.ttf */ "./src/Poppins-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./bg.jpg */ "./src/bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: \"GreatVibes\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    font-weight:600;\r\n    style:normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Barlow\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    font-weight:200;\r\n    style:normal;\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: \"Poppins\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n    font-weight:500;\r\n    style:normal;\r\n}\r\n\r\n\r\nbody{\r\n    box-sizing: border-box;\r\n    margin:0;\r\n    padding:0;\r\n    max-width:100vw;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n    background-size: cover;\r\n\r\n    height:99.95vh;\r\n    display:grid;\r\n    grid-template-rows: 1fr 4fr 3rem;\r\n    grid-template-columns: 1fr;\r\n    grid-template-areas: \"header\" \"main\" \"footer\";\r\n    font-family:\"Poppins\";\r\n}\r\n\r\n.header-container{\r\n    margin:0;\r\n    background:rgba(0, 0, 0, 0.726);\r\n    text-align:center;\r\n    border-bottom: thin solid rgba(211, 211, 211, 0.219);\r\n    grid-area:header;\r\n}\r\n\r\n.header-container h1{\r\n    margin-top:0;\r\n    padding-top:1.5rem;\r\n    color:white;\r\n    font-family:\"GreatVibes\";\r\n    font-size: 3.75rem;\r\n}\r\n\r\n.link-container{\r\n    width:25%;\r\n    display:flex;\r\n    justify-content: space-between;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n    padding-bottom:1.5rem;\r\n}\r\n\r\n.link-container a{\r\n    box-sizing: border-box;\r\n    font-family: \"Barlow\";\r\n    font-size: 2rem;\r\n    color: white;\r\n    text-decoration: none;\r\n    padding-bottom: .5rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n}\r\n\r\n#body-container{\r\n    grid-area:main;\r\n    margin-top: 3rem;\r\n    padding-top: 2rem;\r\n    padding-bottom: 3rem;\r\n    background:rgba(0, 0, 0, 0.404);\r\n    text-align:center;\r\n    color:white;\r\n    width:33%;\r\n    min-width:600px;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n    border: thin solid rgba(211, 211, 211, 0.507);\r\n}\r\n\r\n#body-container .owner-image{\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\r\n    border-radius: 256px;\r\n    height:325px;\r\n    width:325px;\r\n}\r\n\r\n.footer-container{\r\n    grid-area:footer;\r\n    display:flex;\r\n    justify-content: center;\r\n    width:100%;\r\n    background:rgba(0, 0, 0, 0.726);\r\n    border-top: thin solid rgba(22, 19, 19, 0.219);\r\n    color:white;\r\n    height: 3rem;\r\n    margin-top: 2rem;\r\n}\r\n\r\n\r\n.content{\r\n    height:100%;\r\n}\r\n\r\n.menu-container{\r\n    display:grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    justify-items:center;\r\n    gap: 1.25rem;\r\n}\r\n\r\n.menu-item{\r\n    display:flex;\r\n    flex-direction: column;\r\n    align-items:center;\r\n    width: 14rem;\r\n    height: 14rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    padding-top: 2rem;\r\n    background:rgba(0, 0, 0, 0.726);\r\n    border: thin solid rgba(211, 211, 211, 0.219);\r\n}\r\n\r\n.menu-item-title{\r\n    margin-bottom: 12px;\r\n}\r\n\r\n.menu-item-image{\r\n    width:64px;\r\n    height:64px;\r\n}\r\n\r\n.contact-container{\r\n    display:flex;\r\n    flex-direction:column;\r\n    padding-left: 2rem;\r\n    padding-right: 2rem;\r\n}\r\n\r\n.phone-container img{\r\n    height:32px;\r\n    width:32px;\r\n}\r\n\r\n.address-container img{\r\n    height:32px;\r\n    width:32px;\r\n}\r\n\r\n.phone-container{\r\n    display:flex;\r\n    align-items:center;\r\n    gap: 1rem;\r\n}\r\n\r\n.address-container{\r\n    display:flex;\r\n    align-items:center;\r\n    gap: 1rem;\r\n}\r\n\r\n.map-image{\r\n    margin-top: 2rem;\r\n    max-height:100%;\r\n    max-width:100%;\r\n    height: 412px;\r\n    width:512px;\r\n    align-self:center;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,4CAAoC;IACpC,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,qBAAqB;IACrB,4CAA4C;IAC5C,eAAe;IACf,YAAY;AAChB;;;AAGA;IACI,sBAAsB;IACtB,4CAAiC;IACjC,eAAe;IACf,YAAY;AAChB;;;AAGA;IACI,sBAAsB;IACtB,QAAQ;IACR,SAAS;IACT,eAAe;IACf,yDAAiC;IACjC,sBAAsB;;IAEtB,cAAc;IACd,YAAY;IACZ,gCAAgC;IAChC,0BAA0B;IAC1B,6CAA6C;IAC7C,qBAAqB;AACzB;;AAEA;IACI,QAAQ;IACR,+BAA+B;IAC/B,iBAAiB;IACjB,oDAAoD;IACpD,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,SAAS;IACT,YAAY;IACZ,8BAA8B;IAC9B,gBAAgB;IAChB,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;IACtB,qBAAqB;IACrB,eAAe;IACf,YAAY;IACZ,qBAAqB;IACrB,qBAAqB;IACrB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;IACpB,+BAA+B;IAC/B,iBAAiB;IACjB,WAAW;IACX,SAAS;IACT,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,6CAA6C;AACjD;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,oBAAoB;IACpB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,uBAAuB;IACvB,UAAU;IACV,+BAA+B;IAC/B,8CAA8C;IAC9C,WAAW;IACX,YAAY;IACZ,gBAAgB;AACpB;;;AAGA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,oBAAoB;IACpB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,+BAA+B;IAC/B,6CAA6C;AACjD;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,qBAAqB;IACrB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,UAAU;AACd;;AAEA;IACI,WAAW;IACX,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,cAAc;IACd,aAAa;IACb,WAAW;IACX,iBAAiB;AACrB","sourcesContent":["@font-face {\r\n    font-family: \"GreatVibes\";\r\n    src: url(\"./GreatVibes-Regular.ttf\");\r\n    font-weight:600;\r\n    style:normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Barlow\";\r\n    src: url(\"./BarlowCondensed-ExtraLight.ttf\");\r\n    font-weight:200;\r\n    style:normal;\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: \"Poppins\";\r\n    src: url(\"./Poppins-Regular.ttf\");\r\n    font-weight:500;\r\n    style:normal;\r\n}\r\n\r\n\r\nbody{\r\n    box-sizing: border-box;\r\n    margin:0;\r\n    padding:0;\r\n    max-width:100vw;\r\n    background-image: url('./bg.jpg');\r\n    background-size: cover;\r\n\r\n    height:99.95vh;\r\n    display:grid;\r\n    grid-template-rows: 1fr 4fr 3rem;\r\n    grid-template-columns: 1fr;\r\n    grid-template-areas: \"header\" \"main\" \"footer\";\r\n    font-family:\"Poppins\";\r\n}\r\n\r\n.header-container{\r\n    margin:0;\r\n    background:rgba(0, 0, 0, 0.726);\r\n    text-align:center;\r\n    border-bottom: thin solid rgba(211, 211, 211, 0.219);\r\n    grid-area:header;\r\n}\r\n\r\n.header-container h1{\r\n    margin-top:0;\r\n    padding-top:1.5rem;\r\n    color:white;\r\n    font-family:\"GreatVibes\";\r\n    font-size: 3.75rem;\r\n}\r\n\r\n.link-container{\r\n    width:25%;\r\n    display:flex;\r\n    justify-content: space-between;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n    padding-bottom:1.5rem;\r\n}\r\n\r\n.link-container a{\r\n    box-sizing: border-box;\r\n    font-family: \"Barlow\";\r\n    font-size: 2rem;\r\n    color: white;\r\n    text-decoration: none;\r\n    padding-bottom: .5rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n}\r\n\r\n#body-container{\r\n    grid-area:main;\r\n    margin-top: 3rem;\r\n    padding-top: 2rem;\r\n    padding-bottom: 3rem;\r\n    background:rgba(0, 0, 0, 0.404);\r\n    text-align:center;\r\n    color:white;\r\n    width:33%;\r\n    min-width:600px;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n    border: thin solid rgba(211, 211, 211, 0.507);\r\n}\r\n\r\n#body-container .owner-image{\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\r\n    border-radius: 256px;\r\n    height:325px;\r\n    width:325px;\r\n}\r\n\r\n.footer-container{\r\n    grid-area:footer;\r\n    display:flex;\r\n    justify-content: center;\r\n    width:100%;\r\n    background:rgba(0, 0, 0, 0.726);\r\n    border-top: thin solid rgba(22, 19, 19, 0.219);\r\n    color:white;\r\n    height: 3rem;\r\n    margin-top: 2rem;\r\n}\r\n\r\n\r\n.content{\r\n    height:100%;\r\n}\r\n\r\n.menu-container{\r\n    display:grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    justify-items:center;\r\n    gap: 1.25rem;\r\n}\r\n\r\n.menu-item{\r\n    display:flex;\r\n    flex-direction: column;\r\n    align-items:center;\r\n    width: 14rem;\r\n    height: 14rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    padding-top: 2rem;\r\n    background:rgba(0, 0, 0, 0.726);\r\n    border: thin solid rgba(211, 211, 211, 0.219);\r\n}\r\n\r\n.menu-item-title{\r\n    margin-bottom: 12px;\r\n}\r\n\r\n.menu-item-image{\r\n    width:64px;\r\n    height:64px;\r\n}\r\n\r\n.contact-container{\r\n    display:flex;\r\n    flex-direction:column;\r\n    padding-left: 2rem;\r\n    padding-right: 2rem;\r\n}\r\n\r\n.phone-container img{\r\n    height:32px;\r\n    width:32px;\r\n}\r\n\r\n.address-container img{\r\n    height:32px;\r\n    width:32px;\r\n}\r\n\r\n.phone-container{\r\n    display:flex;\r\n    align-items:center;\r\n    gap: 1rem;\r\n}\r\n\r\n.address-container{\r\n    display:flex;\r\n    align-items:center;\r\n    gap: 1rem;\r\n}\r\n\r\n.map-image{\r\n    margin-top: 2rem;\r\n    max-height:100%;\r\n    max-width:100%;\r\n    height: 412px;\r\n    width:512px;\r\n    align-self:center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createContactPage)
/* harmony export */ });
/* harmony import */ var _telephone_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./telephone.png */ "./src/telephone.png");
/* harmony import */ var _home_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.png */ "./src/home.png");
/* harmony import */ var _map_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.png */ "./src/map.png");





function createContactPage(){
    const container = document.querySelector("#body-container");

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");
    createPhoneSection(contactContainer);
    createAddressSection(contactContainer);
    
    const mapImage = document.createElement("img");
    mapImage.src = _map_png__WEBPACK_IMPORTED_MODULE_2__;
    mapImage.classList.add("map-image");
    contactContainer.appendChild(mapImage);
    container.appendChild(contactContainer);
}

function createPhoneSection(container){
    const phoneContainer = document.createElement("div");
    phoneContainer.classList.add("phone-container");
    
    const phoneIcon = document.createElement("img");
    phoneIcon.classList.add("phone-icon");
    phoneIcon.src = _telephone_png__WEBPACK_IMPORTED_MODULE_0__;
    phoneContainer.appendChild(phoneIcon);
    
    const phoneText = document.createElement("p");
    phoneText.classList.add("phone-text");
    phoneText.textContent = "(555)-555-5555";
    phoneContainer.appendChild(phoneText);



    container.appendChild(phoneContainer);
}

function createAddressSection(container){
    const addressContainer = document.createElement("div");
    addressContainer.classList.add("address-container");
    
    const addressIcon = document.createElement("img");
    addressIcon.classList.add("address-icon");
    addressIcon.src = _home_png__WEBPACK_IMPORTED_MODULE_1__;
    addressContainer.appendChild(addressIcon);
    
    const addressText = document.createElement("p");
    addressText.classList.add("address-text");
    addressText.textContent = "37 Pizza pizza lane, New York, USA";
    addressContainer.appendChild(addressText);



    container.appendChild(addressContainer);
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHomePage)
/* harmony export */ });
/* harmony import */ var _img_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img.png */ "./src/img.png");


function createHomePage(){
    const container = document.querySelector("#body-container");
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");
    
    const tagline = document.createElement("h2");
    tagline.textContent = "Best pizza outside of Pisa"
    infoContainer.appendChild(tagline);

    const subTagline = document.createElement("h2");
    subTagline.textContent = "Est. circa 1170";
    infoContainer.appendChild(subTagline);

    const img = document.createElement("img");
    img.classList.add("owner-image");
    img.src = _img_png__WEBPACK_IMPORTED_MODULE_0__;
    infoContainer.appendChild(img);
    
    const callToAction = document.createElement("h2");
    callToAction.textContent = "Order online or visit today!";
    infoContainer.appendChild(callToAction);

    container.appendChild(infoContainer);
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenuPage)
/* harmony export */ });
/* harmony import */ var _pepperoni_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pepperoni.png */ "./src/pepperoni.png");
/* harmony import */ var _mushroom_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mushroom.png */ "./src/mushroom.png");
/* harmony import */ var _red_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./red.png */ "./src/red.png");
/* harmony import */ var _plain_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plain.png */ "./src/plain.png");
/* harmony import */ var _olive_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./olive.png */ "./src/olive.png");
/* harmony import */ var _everything_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./everything.jpg */ "./src/everything.jpg");
/* harmony import */ var _everything2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./everything2.png */ "./src/everything2.png");









function createMenuPage(){
    const container = document.querySelector("#body-container");
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    menuContainer.appendChild(createMenuItem(_pepperoni_png__WEBPACK_IMPORTED_MODULE_0__, "Pepperoni", "This is a slice of Pepperoni pizza. My favorite!"));
    menuContainer.appendChild(createMenuItem(_mushroom_png__WEBPACK_IMPORTED_MODULE_1__, "Mushroom", "Mushrooms, pepperoni, and some greens. You'll love it!"));
    menuContainer.appendChild(createMenuItem(_red_png__WEBPACK_IMPORTED_MODULE_2__, "Red", "A red slice! It's got all the goodies you could imagine on there."));
    menuContainer.appendChild(createMenuItem(_plain_png__WEBPACK_IMPORTED_MODULE_3__, "Plain", "Maybe you're just feeling a little plain today, that's okay too."));
    menuContainer.appendChild(createMenuItem(_olive_png__WEBPACK_IMPORTED_MODULE_4__, "Olive", "Olives and pepperonis oh my! Probably pretty tasty if you're into that sort of thing."));
    menuContainer.appendChild(createMenuItem(_everything_jpg__WEBPACK_IMPORTED_MODULE_5__, "Everything", "Everything in the kitchen that's what I'm throwin on this slice. If we got it, it's on there."));


    container.appendChild(menuContainer);
}

function createMenuItem(imgPath, title, description){
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("menu-item");
    
    const itemImg = document.createElement("img");
    itemImg.classList.add("menu-item-image");
    itemImg.src = imgPath;
    itemDiv.appendChild(itemImg);

    const itemTitle = document.createElement("h3");
    itemTitle.classList.add("menu-item-title");
    itemTitle.textContent = title;
    itemDiv.appendChild(itemTitle);

    const itemDesc = document.createElement("p");
    itemDesc.classList.add("menu-item-description");
    itemDesc.textContent = description;
    itemDiv.appendChild(itemDesc);


    return itemDiv;
}

/***/ }),

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
    createHeader(document.body);
    createBody(container);
    createFooter(document.body);
};


function createHeader(container){
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');
    container.prepend(headerContainer);

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

/***/ }),

/***/ "./src/BarlowCondensed-ExtraLight.ttf":
/*!********************************************!*\
  !*** ./src/BarlowCondensed-ExtraLight.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4faea5b95ff16cab1095.ttf";

/***/ }),

/***/ "./src/GreatVibes-Regular.ttf":
/*!************************************!*\
  !*** ./src/GreatVibes-Regular.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d246c3b51d7eb58b13a.ttf";

/***/ }),

/***/ "./src/Poppins-Regular.ttf":
/*!*********************************!*\
  !*** ./src/Poppins-Regular.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35d26b781dc5fda684cc.ttf";

/***/ }),

/***/ "./src/bg.jpg":
/*!********************!*\
  !*** ./src/bg.jpg ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b82cd5a289766cfde52.jpg";

/***/ }),

/***/ "./src/everything.jpg":
/*!****************************!*\
  !*** ./src/everything.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1215fda540dc2c1ac55d.jpg";

/***/ }),

/***/ "./src/everything2.png":
/*!*****************************!*\
  !*** ./src/everything2.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5625cc49c52fd3875117.png";

/***/ }),

/***/ "./src/home.png":
/*!**********************!*\
  !*** ./src/home.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e0fe0af761b15e94f199.png";

/***/ }),

/***/ "./src/img.png":
/*!*********************!*\
  !*** ./src/img.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24ca59e4fa6dd6e2d9a8.png";

/***/ }),

/***/ "./src/map.png":
/*!*********************!*\
  !*** ./src/map.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b21e3f229ea30f1bcc7.png";

/***/ }),

/***/ "./src/mushroom.png":
/*!**************************!*\
  !*** ./src/mushroom.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a00340d52c7a747fc4e.png";

/***/ }),

/***/ "./src/olive.png":
/*!***********************!*\
  !*** ./src/olive.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "00d1ff88e19b665e72b3.png";

/***/ }),

/***/ "./src/pepperoni.png":
/*!***************************!*\
  !*** ./src/pepperoni.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "74ff66737307c9be7c60.png";

/***/ }),

/***/ "./src/plain.png":
/*!***********************!*\
  !*** ./src/plain.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "75a1d137e02cab4ab1ca.png";

/***/ }),

/***/ "./src/red.png":
/*!*********************!*\
  !*** ./src/red.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d1e586eee0389e3c72c.png";

/***/ }),

/***/ "./src/telephone.png":
/*!***************************!*\
  !*** ./src/telephone.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef30635c556cb8b552a7.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");






var currentPage = "Home";



function clearPage(){
    const bodyContainer = document.querySelector("#body-container");
    while(bodyContainer.firstChild){
        bodyContainer.removeChild(bodyContainer.firstChild);
    }
}

function registerClickEvents(){
    const homeLink = document.querySelector("#home-link");
    homeLink.addEventListener("click", showHomePage);

    const menuLink = document.querySelector("#menu-link");
    menuLink.addEventListener("click",showMenuPage);

    const contactLink = document.querySelector("#contact-link");
    contactLink.addEventListener("click", showContactPage);
}

function showHomePage(){
    if(currentPage != "Home"){
        clearPage();
        (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
        currentPage = "Home";
    }
}

function showMenuPage(){
    if(currentPage != "Menu"){
        clearPage();
        (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
        currentPage = "Menu";
    }
}

function showContactPage(){
    if(currentPage != "Contact"){
        clearPage();
        (0,_contact__WEBPACK_IMPORTED_MODULE_4__["default"])();
        currentPage = "Contact";
    }
}

(0,_page__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
registerClickEvents();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NkNBQTZDLHVDQUFVO0FBQ3ZELDZDQUE2Qyx1Q0FBVTtBQUN2RCw2Q0FBNkMsNENBQWU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJnQztBQUNJO0FBQ0E7QUFDZjtBQUNxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFpQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFVO0FBQ1YsaURBQWM7QUFDZCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcF9yZXN0YXJhdW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b3BfcmVzdGFyYXVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhcmF1bnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXJhdW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhcmF1bnQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhcmF1bnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhcmF1bnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXJhdW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcF9yZXN0YXJhdW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXJhdW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhcmF1bnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGFyYXVudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3RvcF9yZXN0YXJhdW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhcmF1bnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGFyYXVudC8uL3NyYy9wYWdlLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXJhdW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcF9yZXN0YXJhdW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcF9yZXN0YXJhdW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3BfcmVzdGFyYXVudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvcF9yZXN0YXJhdW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhcmF1bnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3BfcmVzdGFyYXVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b3BfcmVzdGFyYXVudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b3BfcmVzdGFyYXVudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9HcmVhdFZpYmVzLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9CYXJsb3dDb25kZW5zZWQtRXh0cmFMaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL1BvcHBpbnMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2JnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkdyZWF0VmliZXNcXFwiO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcXHJcXG4gICAgc3R5bGU6bm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJCYXJsb3dcXFwiO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OjIwMDtcXHJcXG4gICAgc3R5bGU6bm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbiAgICBmb250LXdlaWdodDo1MDA7XFxyXFxuICAgIHN0eWxlOm5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOjA7XFxyXFxuICAgIHBhZGRpbmc6MDtcXHJcXG4gICAgbWF4LXdpZHRoOjEwMHZ3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcblxcclxcbiAgICBoZWlnaHQ6OTkuOTV2aDtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnIgM3JlbTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXJcXFwiIFxcXCJtYWluXFxcIiBcXFwiZm9vdGVyXFxcIjtcXHJcXG4gICAgZm9udC1mYW1pbHk6XFxcIlBvcHBpbnNcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWNvbnRhaW5lcntcXHJcXG4gICAgbWFyZ2luOjA7XFxyXFxuICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjcyNik7XFxyXFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcclxcbiAgICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkIHJnYmEoMjExLCAyMTEsIDIxMSwgMC4yMTkpO1xcclxcbiAgICBncmlkLWFyZWE6aGVhZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWNvbnRhaW5lciBoMXtcXHJcXG4gICAgbWFyZ2luLXRvcDowO1xcclxcbiAgICBwYWRkaW5nLXRvcDoxLjVyZW07XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbiAgICBmb250LWZhbWlseTpcXFwiR3JlYXRWaWJlc1xcXCI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmstY29udGFpbmVye1xcclxcbiAgICB3aWR0aDoyNSU7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bztcXHJcXG4gICAgcGFkZGluZy1ib3R0b206MS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGluay1jb250YWluZXIgYXtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJCYXJsb3dcXFwiO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2JvZHktY29udGFpbmVye1xcclxcbiAgICBncmlkLWFyZWE6bWFpbjtcXHJcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC40MDQpO1xcclxcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxuICAgIHdpZHRoOjMzJTtcXHJcXG4gICAgbWluLXdpZHRoOjYwMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bztcXHJcXG4gICAgYm9yZGVyOiB0aGluIHNvbGlkIHJnYmEoMjExLCAyMTEsIDIxMSwgMC41MDcpO1xcclxcbn1cXHJcXG5cXHJcXG4jYm9keS1jb250YWluZXIgLm93bmVyLWltYWdle1xcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNTZweDtcXHJcXG4gICAgaGVpZ2h0OjMyNXB4O1xcclxcbiAgICB3aWR0aDozMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1jb250YWluZXJ7XFxyXFxuICAgIGdyaWQtYXJlYTpmb290ZXI7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjcyNik7XFxyXFxuICAgIGJvcmRlci10b3A6IHRoaW4gc29saWQgcmdiYSgyMiwgMTksIDE5LCAwLjIxOSk7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jb250ZW50e1xcclxcbiAgICBoZWlnaHQ6MTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczpjZW50ZXI7XFxyXFxuICAgIGdhcDogMS4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbXtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxNHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxNHJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuNzI2KTtcXHJcXG4gICAgYm9yZGVyOiB0aGluIHNvbGlkIHJnYmEoMjExLCAyMTEsIDIxMSwgMC4yMTkpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtLXRpdGxle1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtLWltYWdle1xcclxcbiAgICB3aWR0aDo2NHB4O1xcclxcbiAgICBoZWlnaHQ6NjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGhvbmUtY29udGFpbmVyIGltZ3tcXHJcXG4gICAgaGVpZ2h0OjMycHg7XFxyXFxuICAgIHdpZHRoOjMycHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNzLWNvbnRhaW5lciBpbWd7XFxyXFxuICAgIGhlaWdodDozMnB4O1xcclxcbiAgICB3aWR0aDozMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGhvbmUtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkcmVzcy1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5tYXAtaW1hZ2V7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICAgIG1heC1oZWlnaHQ6MTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOjEwMCU7XFxyXFxuICAgIGhlaWdodDogNDEycHg7XFxyXFxuICAgIHdpZHRoOjUxMnB4O1xcclxcbiAgICBhbGlnbi1zZWxmOmNlbnRlcjtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qiw0Q0FBb0M7SUFDcEMsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNENBQTRDO0lBQzVDLGVBQWU7SUFDZixZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLHNCQUFzQjtJQUN0Qiw0Q0FBaUM7SUFDakMsZUFBZTtJQUNmLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZUFBZTtJQUNmLHlEQUFpQztJQUNqQyxzQkFBc0I7O0lBRXRCLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLDBCQUEwQjtJQUMxQiw2Q0FBNkM7SUFDN0MscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsb0RBQW9EO0lBQ3BELGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFlBQVk7SUFDWixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsU0FBUztJQUNULGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsK0JBQStCO0lBQy9CLDhDQUE4QztJQUM5QyxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0IsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztJQUNkLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkdyZWF0VmliZXNcXFwiO1xcclxcbiAgICBzcmM6IHVybChcXFwiLi9HcmVhdFZpYmVzLVJlZ3VsYXIudHRmXFxcIik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcXHJcXG4gICAgc3R5bGU6bm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJCYXJsb3dcXFwiO1xcclxcbiAgICBzcmM6IHVybChcXFwiLi9CYXJsb3dDb25kZW5zZWQtRXh0cmFMaWdodC50dGZcXFwiKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6MjAwO1xcclxcbiAgICBzdHlsZTpub3JtYWw7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiO1xcclxcbiAgICBzcmM6IHVybChcXFwiLi9Qb3BwaW5zLVJlZ3VsYXIudHRmXFxcIik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcXHJcXG4gICAgc3R5bGU6bm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgcGFkZGluZzowO1xcclxcbiAgICBtYXgtd2lkdGg6MTAwdnc7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9iZy5qcGcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG5cXHJcXG4gICAgaGVpZ2h0Ojk5Ljk1dmg7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyIDNyZW07XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyXFxcIiBcXFwibWFpblxcXCIgXFxcImZvb3RlclxcXCI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OlxcXCJQb3BwaW5zXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1jb250YWluZXJ7XFxyXFxuICAgIG1hcmdpbjowO1xcclxcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC43MjYpO1xcclxcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCByZ2JhKDIxMSwgMjExLCAyMTEsIDAuMjE5KTtcXHJcXG4gICAgZ3JpZC1hcmVhOmhlYWRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1jb250YWluZXIgaDF7XFxyXFxuICAgIG1hcmdpbi10b3A6MDtcXHJcXG4gICAgcGFkZGluZy10b3A6MS41cmVtO1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6XFxcIkdyZWF0VmliZXNcXFwiO1xcclxcbiAgICBmb250LXNpemU6IDMuNzVyZW07XFxyXFxufVxcclxcblxcclxcbi5saW5rLWNvbnRhaW5lcntcXHJcXG4gICAgd2lkdGg6MjUlO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOjEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmstY29udGFpbmVyIGF7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIjtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNib2R5LWNvbnRhaW5lcntcXHJcXG4gICAgZ3JpZC1hcmVhOm1haW47XFxyXFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcXHJcXG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuNDA0KTtcXHJcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbiAgICB3aWR0aDozMyU7XFxyXFxuICAgIG1pbi13aWR0aDo2MDBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XFxyXFxuICAgIGJvcmRlcjogdGhpbiBzb2xpZCByZ2JhKDIxMSwgMjExLCAyMTEsIDAuNTA3KTtcXHJcXG59XFxyXFxuXFxyXFxuI2JvZHktY29udGFpbmVyIC5vd25lci1pbWFnZXtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjU2cHg7XFxyXFxuICAgIGhlaWdodDozMjVweDtcXHJcXG4gICAgd2lkdGg6MzI1cHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItY29udGFpbmVye1xcclxcbiAgICBncmlkLWFyZWE6Zm9vdGVyO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC43MjYpO1xcclxcbiAgICBib3JkZXItdG9wOiB0aGluIHNvbGlkIHJnYmEoMjIsIDE5LCAxOSwgMC4yMTkpO1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY29udGVudHtcXHJcXG4gICAgaGVpZ2h0OjEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6Y2VudGVyO1xcclxcbiAgICBnYXA6IDEuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW17XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbiAgICB3aWR0aDogMTRyZW07XFxyXFxuICAgIGhlaWdodDogMTRyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjcyNik7XFxyXFxuICAgIGJvcmRlcjogdGhpbiBzb2xpZCByZ2JhKDIxMSwgMjExLCAyMTEsIDAuMjE5KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbS10aXRsZXtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbS1pbWFnZXtcXHJcXG4gICAgd2lkdGg6NjRweDtcXHJcXG4gICAgaGVpZ2h0OjY0cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBob25lLWNvbnRhaW5lciBpbWd7XFxyXFxuICAgIGhlaWdodDozMnB4O1xcclxcbiAgICB3aWR0aDozMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkcmVzcy1jb250YWluZXIgaW1ne1xcclxcbiAgICBoZWlnaHQ6MzJweDtcXHJcXG4gICAgd2lkdGg6MzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBob25lLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHJlc3MtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFwLWltYWdle1xcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICBtYXgtaGVpZ2h0OjEwMCU7XFxyXFxuICAgIG1heC13aWR0aDoxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDQxMnB4O1xcclxcbiAgICB3aWR0aDo1MTJweDtcXHJcXG4gICAgYWxpZ24tc2VsZjpjZW50ZXI7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUGhvbmVJbWFnZSBmcm9tIFwiLi90ZWxlcGhvbmUucG5nXCJcclxuaW1wb3J0IEhvbWVJbWFnZSBmcm9tIFwiLi9ob21lLnBuZ1wiXHJcbmltcG9ydCBNYXBJbWFnZSBmcm9tIFwiLi9tYXAucG5nXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDb250YWN0UGFnZSgpe1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2R5LWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtY29udGFpbmVyXCIpO1xyXG4gICAgY3JlYXRlUGhvbmVTZWN0aW9uKGNvbnRhY3RDb250YWluZXIpO1xyXG4gICAgY3JlYXRlQWRkcmVzc1NlY3Rpb24oY29udGFjdENvbnRhaW5lcik7XHJcbiAgICBcclxuICAgIGNvbnN0IG1hcEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIG1hcEltYWdlLnNyYyA9IE1hcEltYWdlO1xyXG4gICAgbWFwSW1hZ2UuY2xhc3NMaXN0LmFkZChcIm1hcC1pbWFnZVwiKTtcclxuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobWFwSW1hZ2UpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQaG9uZVNlY3Rpb24oY29udGFpbmVyKXtcclxuICAgIGNvbnN0IHBob25lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHBob25lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwaG9uZS1jb250YWluZXJcIik7XHJcbiAgICBcclxuICAgIGNvbnN0IHBob25lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBwaG9uZUljb24uY2xhc3NMaXN0LmFkZChcInBob25lLWljb25cIik7XHJcbiAgICBwaG9uZUljb24uc3JjID0gUGhvbmVJbWFnZTtcclxuICAgIHBob25lQ29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lSWNvbik7XHJcbiAgICBcclxuICAgIGNvbnN0IHBob25lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcGhvbmVUZXh0LmNsYXNzTGlzdC5hZGQoXCJwaG9uZS10ZXh0XCIpO1xyXG4gICAgcGhvbmVUZXh0LnRleHRDb250ZW50ID0gXCIoNTU1KS01NTUtNTU1NVwiO1xyXG4gICAgcGhvbmVDb250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmVUZXh0KTtcclxuXHJcblxyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwaG9uZUNvbnRhaW5lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFkZHJlc3NTZWN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICBjb25zdCBhZGRyZXNzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFkZHJlc3NDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFkZHJlc3MtY29udGFpbmVyXCIpO1xyXG4gICAgXHJcbiAgICBjb25zdCBhZGRyZXNzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBhZGRyZXNzSWNvbi5jbGFzc0xpc3QuYWRkKFwiYWRkcmVzcy1pY29uXCIpO1xyXG4gICAgYWRkcmVzc0ljb24uc3JjID0gSG9tZUltYWdlO1xyXG4gICAgYWRkcmVzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzSWNvbik7XHJcbiAgICBcclxuICAgIGNvbnN0IGFkZHJlc3NUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBhZGRyZXNzVGV4dC5jbGFzc0xpc3QuYWRkKFwiYWRkcmVzcy10ZXh0XCIpO1xyXG4gICAgYWRkcmVzc1RleHQudGV4dENvbnRlbnQgPSBcIjM3IFBpenphIHBpenphIGxhbmUsIE5ldyBZb3JrLCBVU0FcIjtcclxuICAgIGFkZHJlc3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkcmVzc1RleHQpO1xyXG5cclxuXHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3NDb250YWluZXIpO1xyXG59IiwiaW1wb3J0IEltYWdlIGZyb20gJy4vaW1nLnBuZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIb21lUGFnZSgpe1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2R5LWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5mby1jb250YWluZXJcIik7XHJcbiAgICBcclxuICAgIGNvbnN0IHRhZ2xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICB0YWdsaW5lLnRleHRDb250ZW50ID0gXCJCZXN0IHBpenphIG91dHNpZGUgb2YgUGlzYVwiXHJcbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhZ2xpbmUpO1xyXG5cclxuICAgIGNvbnN0IHN1YlRhZ2xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBzdWJUYWdsaW5lLnRleHRDb250ZW50ID0gXCJFc3QuIGNpcmNhIDExNzBcIjtcclxuICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoc3ViVGFnbGluZSk7XHJcblxyXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGltZy5jbGFzc0xpc3QuYWRkKFwib3duZXItaW1hZ2VcIik7XHJcbiAgICBpbWcuc3JjID0gSW1hZ2U7XHJcbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGNhbGxUb0FjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGNhbGxUb0FjdGlvbi50ZXh0Q29udGVudCA9IFwiT3JkZXIgb25saW5lIG9yIHZpc2l0IHRvZGF5IVwiO1xyXG4gICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYWxsVG9BY3Rpb24pO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvQ29udGFpbmVyKTtcclxufSIsImltcG9ydCBQZXBwZXJvbmlJbWFnZSBmcm9tIFwiLi9wZXBwZXJvbmkucG5nXCJcclxuaW1wb3J0IE11c2hyb29tSW1hZ2UgZnJvbSBcIi4vbXVzaHJvb20ucG5nXCJcclxuaW1wb3J0IFJlZEltYWdlIGZyb20gXCIuL3JlZC5wbmdcIlxyXG5pbXBvcnQgUGxhaW5JbWFnZSBmcm9tIFwiLi9wbGFpbi5wbmdcIlxyXG5pbXBvcnQgT2xpdmVJbWFnZSBmcm9tIFwiLi9vbGl2ZS5wbmdcIlxyXG5pbXBvcnQgRXZlcnl0aGluZ0ltYWdlIGZyb20gXCIuL2V2ZXJ5dGhpbmcuanBnXCJcclxuaW1wb3J0IEV2ZXJ5dGhpbmcySW1hZ2UgZnJvbSBcIi4vZXZlcnl0aGluZzIucG5nXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZW51UGFnZSgpe1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2R5LWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1jb250YWluZXJcIik7XHJcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFBlcHBlcm9uaUltYWdlLCBcIlBlcHBlcm9uaVwiLCBcIlRoaXMgaXMgYSBzbGljZSBvZiBQZXBwZXJvbmkgcGl6emEuIE15IGZhdm9yaXRlIVwiKSk7XHJcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKE11c2hyb29tSW1hZ2UsIFwiTXVzaHJvb21cIiwgXCJNdXNocm9vbXMsIHBlcHBlcm9uaSwgYW5kIHNvbWUgZ3JlZW5zLiBZb3UnbGwgbG92ZSBpdCFcIikpO1xyXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShSZWRJbWFnZSwgXCJSZWRcIiwgXCJBIHJlZCBzbGljZSEgSXQncyBnb3QgYWxsIHRoZSBnb29kaWVzIHlvdSBjb3VsZCBpbWFnaW5lIG9uIHRoZXJlLlwiKSk7XHJcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFBsYWluSW1hZ2UsIFwiUGxhaW5cIiwgXCJNYXliZSB5b3UncmUganVzdCBmZWVsaW5nIGEgbGl0dGxlIHBsYWluIHRvZGF5LCB0aGF0J3Mgb2theSB0b28uXCIpKTtcclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oT2xpdmVJbWFnZSwgXCJPbGl2ZVwiLCBcIk9saXZlcyBhbmQgcGVwcGVyb25pcyBvaCBteSEgUHJvYmFibHkgcHJldHR5IHRhc3R5IGlmIHlvdSdyZSBpbnRvIHRoYXQgc29ydCBvZiB0aGluZy5cIikpO1xyXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShFdmVyeXRoaW5nSW1hZ2UsIFwiRXZlcnl0aGluZ1wiLCBcIkV2ZXJ5dGhpbmcgaW4gdGhlIGtpdGNoZW4gdGhhdCdzIHdoYXQgSSdtIHRocm93aW4gb24gdGhpcyBzbGljZS4gSWYgd2UgZ290IGl0LCBpdCdzIG9uIHRoZXJlLlwiKSk7XHJcblxyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0oaW1nUGF0aCwgdGl0bGUsIGRlc2NyaXB0aW9uKXtcclxuICAgIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaXRlbURpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xyXG4gICAgXHJcbiAgICBjb25zdCBpdGVtSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGl0ZW1JbWcuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbS1pbWFnZVwiKTtcclxuICAgIGl0ZW1JbWcuc3JjID0gaW1nUGF0aDtcclxuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbUltZyk7XHJcblxyXG4gICAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgaXRlbVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW0tdGl0bGVcIik7XHJcbiAgICBpdGVtVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbVRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBpdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgaXRlbURlc2MuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbS1kZXNjcmlwdGlvblwiKTtcclxuICAgIGl0ZW1EZXNjLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XHJcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1EZXNjKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIGl0ZW1EaXY7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQYWdlKCl7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gICAgY3JlYXRlSGVhZGVyKGRvY3VtZW50LmJvZHkpO1xyXG4gICAgY3JlYXRlQm9keShjb250YWluZXIpO1xyXG4gICAgY3JlYXRlRm9vdGVyKGRvY3VtZW50LmJvZHkpO1xyXG59O1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcihjb250YWluZXIpe1xyXG4gICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBoZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWNvbnRhaW5lcicpO1xyXG4gICAgY29udGFpbmVyLnByZXBlbmQoaGVhZGVyQ29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGhlYWRlclRleHQudGV4dENvbnRlbnQgPSBcIkxpbCBGaWJvbmFjY2knc1wiO1xyXG4gICAgaGVhZGVyVGV4dC5jbGFzc0xpc3QuYWRkKCdoZWFkZXItdGV4dCcpO1xyXG4gICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xyXG5cclxuICAgIGNvbnN0IGxpbmtDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxpbmtDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGluay1jb250YWluZXInKTtcclxuICAgIGNvbnN0IGhvbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgaG9tZUxpbmsuaWQgPSBcImhvbWUtbGlua1wiO1xyXG4gICAgaG9tZUxpbmsuaHJlZiA9IFwiI1wiO1xyXG4gICAgaG9tZUxpbmsudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcclxuICAgIGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZUxpbmspO1xyXG5cclxuICAgIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbWVudUxpbmsuaWQgPSBcIm1lbnUtbGlua1wiO1xyXG4gICAgbWVudUxpbmsuaHJlZiA9IFwiI1wiO1xyXG4gICAgbWVudUxpbmsudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICAgIGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUxpbmspO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgY29udGFjdExpbmsuaWQgPSBcImNvbnRhY3QtbGlua1wiO1xyXG4gICAgY29udGFjdExpbmsuaHJlZiA9IFwiI1wiO1xyXG4gICAgY29udGFjdExpbmsudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcclxuICAgIGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdExpbmspO1xyXG5cclxuICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rQ29udGFpbmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQm9keShjb250YWluZXIpe1xyXG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudENvbnRhaW5lci5pZCA9IFwiYm9keS1jb250YWluZXJcIjtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKGNvbnRhaW5lcil7XHJcbiAgICBjb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZvb3RlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZm9vdGVyVGV4dC5jbGFzc0xpc3QuYWRkKCdmb290ZXItdGV4dCcpO1xyXG4gICAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9IFwiKEMpIFphY2hhcnkgRCdBbmdlbG8gMjAyMlwiO1xyXG4gICAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXJDb250YWluZXIpO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgY3JlYXRlUGFnZSBmcm9tIFwiLi9wYWdlXCI7XHJcbmltcG9ydCBjcmVhdGVIb21lUGFnZSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCBjcmVhdGVNZW51UGFnZSBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgY3JlYXRlQ29udGFjdFBhZ2UgZnJvbSBcIi4vY29udGFjdFwiO1xyXG5cclxudmFyIGN1cnJlbnRQYWdlID0gXCJIb21lXCI7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNsZWFyUGFnZSgpe1xyXG4gICAgY29uc3QgYm9keUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9keS1jb250YWluZXJcIik7XHJcbiAgICB3aGlsZShib2R5Q29udGFpbmVyLmZpcnN0Q2hpbGQpe1xyXG4gICAgICAgIGJvZHlDb250YWluZXIucmVtb3ZlQ2hpbGQoYm9keUNvbnRhaW5lci5maXJzdENoaWxkKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJDbGlja0V2ZW50cygpe1xyXG4gICAgY29uc3QgaG9tZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWUtbGlua1wiKTtcclxuICAgIGhvbWVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93SG9tZVBhZ2UpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWxpbmtcIik7XHJcbiAgICBtZW51TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixzaG93TWVudVBhZ2UpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LWxpbmtcIik7XHJcbiAgICBjb250YWN0TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0NvbnRhY3RQYWdlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0hvbWVQYWdlKCl7XHJcbiAgICBpZihjdXJyZW50UGFnZSAhPSBcIkhvbWVcIil7XHJcbiAgICAgICAgY2xlYXJQYWdlKCk7XHJcbiAgICAgICAgY3JlYXRlSG9tZVBhZ2UoKTtcclxuICAgICAgICBjdXJyZW50UGFnZSA9IFwiSG9tZVwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93TWVudVBhZ2UoKXtcclxuICAgIGlmKGN1cnJlbnRQYWdlICE9IFwiTWVudVwiKXtcclxuICAgICAgICBjbGVhclBhZ2UoKTtcclxuICAgICAgICBjcmVhdGVNZW51UGFnZSgpO1xyXG4gICAgICAgIGN1cnJlbnRQYWdlID0gXCJNZW51XCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dDb250YWN0UGFnZSgpe1xyXG4gICAgaWYoY3VycmVudFBhZ2UgIT0gXCJDb250YWN0XCIpe1xyXG4gICAgICAgIGNsZWFyUGFnZSgpO1xyXG4gICAgICAgIGNyZWF0ZUNvbnRhY3RQYWdlKCk7XHJcbiAgICAgICAgY3VycmVudFBhZ2UgPSBcIkNvbnRhY3RcIjtcclxuICAgIH1cclxufVxyXG5cclxuY3JlYXRlUGFnZSgpO1xyXG5jcmVhdGVIb21lUGFnZSgpO1xyXG5yZWdpc3RlckNsaWNrRXZlbnRzKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==