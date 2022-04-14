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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./bg.jpg */ "./src/bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\r\n    box-sizing: border-box;\r\n    margin:0;\r\n    padding:0;\r\n    max-width:100vw;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: cover;\r\n\r\n    height:99.95vh;\r\n    display:grid;\r\n    grid-template-rows: 1fr 4fr 3rem;\r\n    grid-template-columns: 1fr;\r\n    grid-template-areas: \"header\" \"main\" \"footer\";\r\n}\r\n\r\n.header-container{\r\n    margin:0;\r\n    background:rgba(0, 0, 0, 0.726);\r\n    text-align:center;\r\n    border-bottom: thin solid rgba(211, 211, 211, 0.219);\r\n    grid-area:header;\r\n}\r\n\r\n.header-container h1{\r\n    margin-top:0;\r\n    padding-top:1.5rem;\r\n    color:white;\r\n    font-size: 2.5rem;\r\n}\r\n\r\n.link-container{\r\n    width:25%;\r\n    display:flex;\r\n    justify-content: space-between;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n    padding-bottom:1.5rem;\r\n}\r\n\r\n.link-container a{\r\n    box-sizing: border-box;\r\n    font-size: 1.5rem;\r\n    color: white;\r\n    text-decoration: none;\r\n    padding-bottom: .5rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n}\r\n\r\n#body-container{\r\n    grid-area:main;\r\n    margin-top: 3rem;\r\n    padding-top: 2rem;\r\n    padding-bottom: 3rem;\r\n    background:rgba(0, 0, 0, 0.404);\r\n    text-align:center;\r\n    color:white;\r\n    width:33%;\r\n    min-width:600px;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n    border: thin solid rgba(211, 211, 211, 0.507);\r\n}\r\n\r\n#body-container .owner-image{\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\r\n    border-radius: 256px;\r\n    height:325px;\r\n    width:325px;\r\n}\r\n\r\n.footer-container{\r\n    grid-area:footer;\r\n    display:flex;\r\n    justify-content: center;\r\n    width:100%;\r\n    background:rgba(0, 0, 0, 0.726);\r\n    border-top: thin solid rgba(22, 19, 19, 0.219);\r\n    color:white;\r\n    height: 3rem;\r\n    margin-top: 2rem;\r\n}\r\n\r\n\r\n.content{\r\n    height:100%;\r\n}\r\n\r\n.menu-container{\r\n    display:grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    justify-items:center;\r\n    gap: 1.25rem;\r\n}\r\n\r\n.menu-item{\r\n    display:flex;\r\n    flex-direction: column;\r\n    align-items:center;\r\n    width: 14rem;\r\n    height: 14rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    padding-top: 2rem;\r\n    background:rgba(0, 0, 0, 0.726);\r\n    border: thin solid rgba(211, 211, 211, 0.219);\r\n}\r\n\r\n.menu-item-image{\r\n    width:64px;\r\n    height:64px;\r\n}\r\n\r\n.contact-container{\r\n    display:flex;\r\n    flex-direction:column;\r\n    padding-left: 2rem;\r\n    padding-right: 2rem;\r\n}\r\n\r\n.phone-container img{\r\n    height:32px;\r\n    width:32px;\r\n}\r\n\r\n.address-container img{\r\n    height:32px;\r\n    width:32px;\r\n}\r\n\r\n.phone-container{\r\n    display:flex;\r\n    align-items:center;\r\n    gap: 1rem;\r\n}\r\n\r\n.address-container{\r\n    display:flex;\r\n    align-items:center;\r\n    gap: 1rem;\r\n}\r\n\r\n.map-image{\r\n    max-height:100%;\r\n    max-width:100%;\r\n    height: 412px;\r\n    width:412px;\r\n    align-self:center;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,QAAQ;IACR,SAAS;IACT,eAAe;IACf,yDAAiC;IACjC,sBAAsB;;IAEtB,cAAc;IACd,YAAY;IACZ,gCAAgC;IAChC,0BAA0B;IAC1B,6CAA6C;AACjD;;AAEA;IACI,QAAQ;IACR,+BAA+B;IAC/B,iBAAiB;IACjB,oDAAoD;IACpD,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,SAAS;IACT,YAAY;IACZ,8BAA8B;IAC9B,gBAAgB;IAChB,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;IACtB,iBAAiB;IACjB,YAAY;IACZ,qBAAqB;IACrB,qBAAqB;IACrB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;IACpB,+BAA+B;IAC/B,iBAAiB;IACjB,WAAW;IACX,SAAS;IACT,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,6CAA6C;AACjD;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,oBAAoB;IACpB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,uBAAuB;IACvB,UAAU;IACV,+BAA+B;IAC/B,8CAA8C;IAC9C,WAAW;IACX,YAAY;IACZ,gBAAgB;AACpB;;;AAGA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,oBAAoB;IACpB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,+BAA+B;IAC/B,6CAA6C;AACjD;;AAEA;IACI,UAAU;IACV,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,qBAAqB;IACrB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,UAAU;AACd;;AAEA;IACI,WAAW;IACX,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,cAAc;IACd,aAAa;IACb,WAAW;IACX,iBAAiB;AACrB","sourcesContent":["body{\r\n    box-sizing: border-box;\r\n    margin:0;\r\n    padding:0;\r\n    max-width:100vw;\r\n    background-image: url('./bg.jpg');\r\n    background-size: cover;\r\n\r\n    height:99.95vh;\r\n    display:grid;\r\n    grid-template-rows: 1fr 4fr 3rem;\r\n    grid-template-columns: 1fr;\r\n    grid-template-areas: \"header\" \"main\" \"footer\";\r\n}\r\n\r\n.header-container{\r\n    margin:0;\r\n    background:rgba(0, 0, 0, 0.726);\r\n    text-align:center;\r\n    border-bottom: thin solid rgba(211, 211, 211, 0.219);\r\n    grid-area:header;\r\n}\r\n\r\n.header-container h1{\r\n    margin-top:0;\r\n    padding-top:1.5rem;\r\n    color:white;\r\n    font-size: 2.5rem;\r\n}\r\n\r\n.link-container{\r\n    width:25%;\r\n    display:flex;\r\n    justify-content: space-between;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n    padding-bottom:1.5rem;\r\n}\r\n\r\n.link-container a{\r\n    box-sizing: border-box;\r\n    font-size: 1.5rem;\r\n    color: white;\r\n    text-decoration: none;\r\n    padding-bottom: .5rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n}\r\n\r\n#body-container{\r\n    grid-area:main;\r\n    margin-top: 3rem;\r\n    padding-top: 2rem;\r\n    padding-bottom: 3rem;\r\n    background:rgba(0, 0, 0, 0.404);\r\n    text-align:center;\r\n    color:white;\r\n    width:33%;\r\n    min-width:600px;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n    border: thin solid rgba(211, 211, 211, 0.507);\r\n}\r\n\r\n#body-container .owner-image{\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\r\n    border-radius: 256px;\r\n    height:325px;\r\n    width:325px;\r\n}\r\n\r\n.footer-container{\r\n    grid-area:footer;\r\n    display:flex;\r\n    justify-content: center;\r\n    width:100%;\r\n    background:rgba(0, 0, 0, 0.726);\r\n    border-top: thin solid rgba(22, 19, 19, 0.219);\r\n    color:white;\r\n    height: 3rem;\r\n    margin-top: 2rem;\r\n}\r\n\r\n\r\n.content{\r\n    height:100%;\r\n}\r\n\r\n.menu-container{\r\n    display:grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    justify-items:center;\r\n    gap: 1.25rem;\r\n}\r\n\r\n.menu-item{\r\n    display:flex;\r\n    flex-direction: column;\r\n    align-items:center;\r\n    width: 14rem;\r\n    height: 14rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    padding-top: 2rem;\r\n    background:rgba(0, 0, 0, 0.726);\r\n    border: thin solid rgba(211, 211, 211, 0.219);\r\n}\r\n\r\n.menu-item-image{\r\n    width:64px;\r\n    height:64px;\r\n}\r\n\r\n.contact-container{\r\n    display:flex;\r\n    flex-direction:column;\r\n    padding-left: 2rem;\r\n    padding-right: 2rem;\r\n}\r\n\r\n.phone-container img{\r\n    height:32px;\r\n    width:32px;\r\n}\r\n\r\n.address-container img{\r\n    height:32px;\r\n    width:32px;\r\n}\r\n\r\n.phone-container{\r\n    display:flex;\r\n    align-items:center;\r\n    gap: 1rem;\r\n}\r\n\r\n.address-container{\r\n    display:flex;\r\n    align-items:center;\r\n    gap: 1rem;\r\n}\r\n\r\n.map-image{\r\n    max-height:100%;\r\n    max-width:100%;\r\n    height: 412px;\r\n    width:412px;\r\n    align-self:center;\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZGQUEyQjtBQUN2RSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSwrQ0FBK0MsK0JBQStCLGlCQUFpQixrQkFBa0Isd0JBQXdCLDBFQUEwRSwrQkFBK0IsMkJBQTJCLHFCQUFxQix5Q0FBeUMsbUNBQW1DLDREQUE0RCxLQUFLLDBCQUEwQixpQkFBaUIsd0NBQXdDLDBCQUEwQiw2REFBNkQseUJBQXlCLEtBQUssNkJBQTZCLHFCQUFxQiwyQkFBMkIsb0JBQW9CLDBCQUEwQixLQUFLLHdCQUF3QixrQkFBa0IscUJBQXFCLHVDQUF1Qyx5QkFBeUIsMEJBQTBCLDhCQUE4QixLQUFLLDBCQUEwQiwrQkFBK0IsMEJBQTBCLHFCQUFxQiw4QkFBOEIsOEJBQThCLDJCQUEyQiw0QkFBNEIsS0FBSyx3QkFBd0IsdUJBQXVCLHlCQUF5QiwwQkFBMEIsNkJBQTZCLHdDQUF3QywwQkFBMEIsb0JBQW9CLGtCQUFrQix3QkFBd0IseUJBQXlCLDBCQUEwQixzREFBc0QsS0FBSyxxQ0FBcUMseUJBQXlCLDRCQUE0Qiw2QkFBNkIscUJBQXFCLG9CQUFvQixLQUFLLDBCQUEwQix5QkFBeUIscUJBQXFCLGdDQUFnQyxtQkFBbUIsd0NBQXdDLHVEQUF1RCxvQkFBb0IscUJBQXFCLHlCQUF5QixLQUFLLHFCQUFxQixvQkFBb0IsS0FBSyx3QkFBd0IscUJBQXFCLHVDQUF1Qyw2QkFBNkIscUJBQXFCLEtBQUssbUJBQW1CLHFCQUFxQiwrQkFBK0IsMkJBQTJCLHFCQUFxQixzQkFBc0IsMkJBQTJCLDRCQUE0QiwwQkFBMEIsd0NBQXdDLHNEQUFzRCxLQUFLLHlCQUF5QixtQkFBbUIsb0JBQW9CLEtBQUssMkJBQTJCLHFCQUFxQiw4QkFBOEIsMkJBQTJCLDRCQUE0QixLQUFLLDZCQUE2QixvQkFBb0IsbUJBQW1CLEtBQUssK0JBQStCLG9CQUFvQixtQkFBbUIsS0FBSyx5QkFBeUIscUJBQXFCLDJCQUEyQixrQkFBa0IsS0FBSywyQkFBMkIscUJBQXFCLDJCQUEyQixrQkFBa0IsS0FBSyxtQkFBbUIsd0JBQXdCLHVCQUF1QixzQkFBc0Isb0JBQW9CLDBCQUEwQixLQUFLLE9BQU8sZ0ZBQWdGLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxjQUFjLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksUUFBUSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLCtCQUErQiwrQkFBK0IsaUJBQWlCLGtCQUFrQix3QkFBd0IsMENBQTBDLCtCQUErQiwyQkFBMkIscUJBQXFCLHlDQUF5QyxtQ0FBbUMsNERBQTRELEtBQUssMEJBQTBCLGlCQUFpQix3Q0FBd0MsMEJBQTBCLDZEQUE2RCx5QkFBeUIsS0FBSyw2QkFBNkIscUJBQXFCLDJCQUEyQixvQkFBb0IsMEJBQTBCLEtBQUssd0JBQXdCLGtCQUFrQixxQkFBcUIsdUNBQXVDLHlCQUF5QiwwQkFBMEIsOEJBQThCLEtBQUssMEJBQTBCLCtCQUErQiwwQkFBMEIscUJBQXFCLDhCQUE4Qiw4QkFBOEIsMkJBQTJCLDRCQUE0QixLQUFLLHdCQUF3Qix1QkFBdUIseUJBQXlCLDBCQUEwQiw2QkFBNkIsd0NBQXdDLDBCQUEwQixvQkFBb0Isa0JBQWtCLHdCQUF3Qix5QkFBeUIsMEJBQTBCLHNEQUFzRCxLQUFLLHFDQUFxQyx5QkFBeUIsNEJBQTRCLDZCQUE2QixxQkFBcUIsb0JBQW9CLEtBQUssMEJBQTBCLHlCQUF5QixxQkFBcUIsZ0NBQWdDLG1CQUFtQix3Q0FBd0MsdURBQXVELG9CQUFvQixxQkFBcUIseUJBQXlCLEtBQUsscUJBQXFCLG9CQUFvQixLQUFLLHdCQUF3QixxQkFBcUIsdUNBQXVDLDZCQUE2QixxQkFBcUIsS0FBSyxtQkFBbUIscUJBQXFCLCtCQUErQiwyQkFBMkIscUJBQXFCLHNCQUFzQiwyQkFBMkIsNEJBQTRCLDBCQUEwQix3Q0FBd0Msc0RBQXNELEtBQUsseUJBQXlCLG1CQUFtQixvQkFBb0IsS0FBSywyQkFBMkIscUJBQXFCLDhCQUE4QiwyQkFBMkIsNEJBQTRCLEtBQUssNkJBQTZCLG9CQUFvQixtQkFBbUIsS0FBSywrQkFBK0Isb0JBQW9CLG1CQUFtQixLQUFLLHlCQUF5QixxQkFBcUIsMkJBQTJCLGtCQUFrQixLQUFLLDJCQUEyQixxQkFBcUIsMkJBQTJCLGtCQUFrQixLQUFLLG1CQUFtQix3QkFBd0IsdUJBQXVCLHNCQUFzQixvQkFBb0IsMEJBQTBCLEtBQUssbUJBQW1CO0FBQzVpUDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1YxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM1QmE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmd0M7QUFDTjtBQUNGO0FBQ2hDO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUNBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyQ0FBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isc0NBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEQ4QjtBQUM5QjtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMscUNBQUs7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI0QztBQUNGO0FBQ1Y7QUFDSTtBQUNBO0FBQ1U7QUFDRTtBQUNoRDtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsMkNBQWM7QUFDM0QsNkNBQTZDLDBDQUFhO0FBQzFELDZDQUE2QyxxQ0FBUTtBQUNyRCw2Q0FBNkMsdUNBQVU7QUFDdkQsNkNBQTZDLHVDQUFVO0FBQ3ZELDZDQUE2Qyw0Q0FBZTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0NlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQmdDO0FBQ0k7QUFDQTtBQUNmO0FBQ3FCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQWlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQVU7QUFDVixpREFBYztBQUNkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wX3Jlc3RhcmF1bnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvcF9yZXN0YXJhdW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGFyYXVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhcmF1bnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGFyYXVudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b3BfcmVzdGFyYXVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGFyYXVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhcmF1bnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhcmF1bnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhcmF1bnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGFyYXVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXJhdW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhcmF1bnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGFyYXVudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3RvcF9yZXN0YXJhdW50Ly4vc3JjL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhcmF1bnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhcmF1bnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhcmF1bnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcF9yZXN0YXJhdW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhcmF1bnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3BfcmVzdGFyYXVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcF9yZXN0YXJhdW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvcF9yZXN0YXJhdW50L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvcF9yZXN0YXJhdW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2JnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjowO1xcclxcbiAgICBwYWRkaW5nOjA7XFxyXFxuICAgIG1heC13aWR0aDoxMDB2dztcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG5cXHJcXG4gICAgaGVpZ2h0Ojk5Ljk1dmg7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyIDNyZW07XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyXFxcIiBcXFwibWFpblxcXCIgXFxcImZvb3RlclxcXCI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItY29udGFpbmVye1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuNzI2KTtcXHJcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgcmdiYSgyMTEsIDIxMSwgMjExLCAwLjIxOSk7XFxyXFxuICAgIGdyaWQtYXJlYTpoZWFkZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItY29udGFpbmVyIGgxe1xcclxcbiAgICBtYXJnaW4tdG9wOjA7XFxyXFxuICAgIHBhZGRpbmctdG9wOjEuNXJlbTtcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGluay1jb250YWluZXJ7XFxyXFxuICAgIHdpZHRoOjI1JTtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDphdXRvO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbToxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5saW5rLWNvbnRhaW5lciBhe1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYm9keS1jb250YWluZXJ7XFxyXFxuICAgIGdyaWQtYXJlYTptYWluO1xcclxcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjQwNCk7XFxyXFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG4gICAgd2lkdGg6MzMlO1xcclxcbiAgICBtaW4td2lkdGg6NjAwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDphdXRvO1xcclxcbiAgICBib3JkZXI6IHRoaW4gc29saWQgcmdiYSgyMTEsIDIxMSwgMjExLCAwLjUwNyk7XFxyXFxufVxcclxcblxcclxcbiNib2R5LWNvbnRhaW5lciAub3duZXItaW1hZ2V7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1NnB4O1xcclxcbiAgICBoZWlnaHQ6MzI1cHg7XFxyXFxuICAgIHdpZHRoOjMyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWNvbnRhaW5lcntcXHJcXG4gICAgZ3JpZC1hcmVhOmZvb3RlcjtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuNzI2KTtcXHJcXG4gICAgYm9yZGVyLXRvcDogdGhpbiBzb2xpZCByZ2JhKDIyLCAxOSwgMTksIDAuMjE5KTtcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNvbnRlbnR7XFxyXFxuICAgIGhlaWdodDoxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVte1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDE0cmVtO1xcclxcbiAgICBoZWlnaHQ6IDE0cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC43MjYpO1xcclxcbiAgICBib3JkZXI6IHRoaW4gc29saWQgcmdiYSgyMTEsIDIxMSwgMjExLCAwLjIxOSk7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0taW1hZ2V7XFxyXFxuICAgIHdpZHRoOjY0cHg7XFxyXFxuICAgIGhlaWdodDo2NHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5waG9uZS1jb250YWluZXIgaW1ne1xcclxcbiAgICBoZWlnaHQ6MzJweDtcXHJcXG4gICAgd2lkdGg6MzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHJlc3MtY29udGFpbmVyIGltZ3tcXHJcXG4gICAgaGVpZ2h0OjMycHg7XFxyXFxuICAgIHdpZHRoOjMycHg7XFxyXFxufVxcclxcblxcclxcbi5waG9uZS1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNzLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1hcC1pbWFnZXtcXHJcXG4gICAgbWF4LWhlaWdodDoxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6MTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA0MTJweDtcXHJcXG4gICAgd2lkdGg6NDEycHg7XFxyXFxuICAgIGFsaWduLXNlbGY6Y2VudGVyO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZUFBZTtJQUNmLHlEQUFpQztJQUNqQyxzQkFBc0I7O0lBRXRCLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLDBCQUEwQjtJQUMxQiw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixvREFBb0Q7SUFDcEQsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsU0FBUztJQUNULGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsK0JBQStCO0lBQy9CLDhDQUE4QztJQUM5QyxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0IsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTtJQUNiLFdBQVc7SUFDWCxpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOjA7XFxyXFxuICAgIHBhZGRpbmc6MDtcXHJcXG4gICAgbWF4LXdpZHRoOjEwMHZ3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYmcuanBnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuXFxyXFxuICAgIGhlaWdodDo5OS45NXZoO1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmciAzcmVtO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlclxcXCIgXFxcIm1haW5cXFwiIFxcXCJmb290ZXJcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWNvbnRhaW5lcntcXHJcXG4gICAgbWFyZ2luOjA7XFxyXFxuICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjcyNik7XFxyXFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcclxcbiAgICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkIHJnYmEoMjExLCAyMTEsIDIxMSwgMC4yMTkpO1xcclxcbiAgICBncmlkLWFyZWE6aGVhZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWNvbnRhaW5lciBoMXtcXHJcXG4gICAgbWFyZ2luLXRvcDowO1xcclxcbiAgICBwYWRkaW5nLXRvcDoxLjVyZW07XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmstY29udGFpbmVye1xcclxcbiAgICB3aWR0aDoyNSU7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bztcXHJcXG4gICAgcGFkZGluZy1ib3R0b206MS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGluay1jb250YWluZXIgYXtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2JvZHktY29udGFpbmVye1xcclxcbiAgICBncmlkLWFyZWE6bWFpbjtcXHJcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC40MDQpO1xcclxcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxuICAgIHdpZHRoOjMzJTtcXHJcXG4gICAgbWluLXdpZHRoOjYwMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bztcXHJcXG4gICAgYm9yZGVyOiB0aGluIHNvbGlkIHJnYmEoMjExLCAyMTEsIDIxMSwgMC41MDcpO1xcclxcbn1cXHJcXG5cXHJcXG4jYm9keS1jb250YWluZXIgLm93bmVyLWltYWdle1xcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNTZweDtcXHJcXG4gICAgaGVpZ2h0OjMyNXB4O1xcclxcbiAgICB3aWR0aDozMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1jb250YWluZXJ7XFxyXFxuICAgIGdyaWQtYXJlYTpmb290ZXI7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjcyNik7XFxyXFxuICAgIGJvcmRlci10b3A6IHRoaW4gc29saWQgcmdiYSgyMiwgMTksIDE5LCAwLjIxOSk7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jb250ZW50e1xcclxcbiAgICBoZWlnaHQ6MTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczpjZW50ZXI7XFxyXFxuICAgIGdhcDogMS4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbXtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxNHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxNHJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuNzI2KTtcXHJcXG4gICAgYm9yZGVyOiB0aGluIHNvbGlkIHJnYmEoMjExLCAyMTEsIDIxMSwgMC4yMTkpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtLWltYWdle1xcclxcbiAgICB3aWR0aDo2NHB4O1xcclxcbiAgICBoZWlnaHQ6NjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGhvbmUtY29udGFpbmVyIGltZ3tcXHJcXG4gICAgaGVpZ2h0OjMycHg7XFxyXFxuICAgIHdpZHRoOjMycHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNzLWNvbnRhaW5lciBpbWd7XFxyXFxuICAgIGhlaWdodDozMnB4O1xcclxcbiAgICB3aWR0aDozMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGhvbmUtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkcmVzcy1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5tYXAtaW1hZ2V7XFxyXFxuICAgIG1heC1oZWlnaHQ6MTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOjEwMCU7XFxyXFxuICAgIGhlaWdodDogNDEycHg7XFxyXFxuICAgIHdpZHRoOjQxMnB4O1xcclxcbiAgICBhbGlnbi1zZWxmOmNlbnRlcjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQaG9uZUltYWdlIGZyb20gXCIuL3RlbGVwaG9uZS5wbmdcIlxyXG5pbXBvcnQgSG9tZUltYWdlIGZyb20gXCIuL2hvbWUucG5nXCJcclxuaW1wb3J0IE1hcEltYWdlIGZyb20gXCIuL21hcC5wbmdcIlxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RQYWdlKCl7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvZHktY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jb250YWluZXJcIik7XHJcbiAgICBjcmVhdGVQaG9uZVNlY3Rpb24oY29udGFjdENvbnRhaW5lcik7XHJcbiAgICBjcmVhdGVBZGRyZXNzU2VjdGlvbihjb250YWN0Q29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgY29uc3QgbWFwSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgbWFwSW1hZ2Uuc3JjID0gTWFwSW1hZ2U7XHJcbiAgICBtYXBJbWFnZS5jbGFzc0xpc3QuYWRkKFwibWFwLWltYWdlXCIpO1xyXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChtYXBJbWFnZSk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRhaW5lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBob25lU2VjdGlvbihjb250YWluZXIpe1xyXG4gICAgY29uc3QgcGhvbmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcGhvbmVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInBob25lLWNvbnRhaW5lclwiKTtcclxuICAgIFxyXG4gICAgY29uc3QgcGhvbmVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIHBob25lSWNvbi5jbGFzc0xpc3QuYWRkKFwicGhvbmUtaWNvblwiKTtcclxuICAgIHBob25lSWNvbi5zcmMgPSBQaG9uZUltYWdlO1xyXG4gICAgcGhvbmVDb250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmVJY29uKTtcclxuICAgIFxyXG4gICAgY29uc3QgcGhvbmVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwaG9uZVRleHQuY2xhc3NMaXN0LmFkZChcInBob25lLXRleHRcIik7XHJcbiAgICBwaG9uZVRleHQudGV4dENvbnRlbnQgPSBcIig1NTUpLTU1NS01NTU1XCI7XHJcbiAgICBwaG9uZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwaG9uZVRleHQpO1xyXG5cclxuXHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lQ29udGFpbmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQWRkcmVzc1NlY3Rpb24oY29udGFpbmVyKXtcclxuICAgIGNvbnN0IGFkZHJlc3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWRkcmVzc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWRkcmVzcy1jb250YWluZXJcIik7XHJcbiAgICBcclxuICAgIGNvbnN0IGFkZHJlc3NJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGFkZHJlc3NJY29uLmNsYXNzTGlzdC5hZGQoXCJhZGRyZXNzLWljb25cIik7XHJcbiAgICBhZGRyZXNzSWNvbi5zcmMgPSBIb21lSW1hZ2U7XHJcbiAgICBhZGRyZXNzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3NJY29uKTtcclxuICAgIFxyXG4gICAgY29uc3QgYWRkcmVzc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGFkZHJlc3NUZXh0LmNsYXNzTGlzdC5hZGQoXCJhZGRyZXNzLXRleHRcIik7XHJcbiAgICBhZGRyZXNzVGV4dC50ZXh0Q29udGVudCA9IFwiMzcgUGl6emEgcGl6emEgbGFuZSwgTmV3IFlvcmssIFVTQVwiO1xyXG4gICAgYWRkcmVzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzVGV4dCk7XHJcblxyXG5cclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkcmVzc0NvbnRhaW5lcik7XHJcbn0iLCJpbXBvcnQgSW1hZ2UgZnJvbSAnLi9pbWcucG5nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCl7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvZHktY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWNvbnRhaW5lclwiKTtcclxuICAgIFxyXG4gICAgY29uc3QgdGFnbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIHRhZ2xpbmUudGV4dENvbnRlbnQgPSBcIkJlc3QgcGl6emEgb3V0c2lkZSBvZiBQaXNhXCJcclxuICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQodGFnbGluZSk7XHJcblxyXG4gICAgY29uc3Qgc3ViVGFnbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIHN1YlRhZ2xpbmUudGV4dENvbnRlbnQgPSBcIkVzdC4gY2lyY2EgMTE3MFwiO1xyXG4gICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJUYWdsaW5lKTtcclxuXHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJvd25lci1pbWFnZVwiKTtcclxuICAgIGltZy5zcmMgPSBJbWFnZTtcclxuICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIFxyXG4gICAgY29uc3QgY2FsbFRvQWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgY2FsbFRvQWN0aW9uLnRleHRDb250ZW50ID0gXCJPcmRlciBvbmxpbmUgb3IgdmlzaXQgdG9kYXkhXCI7XHJcbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbGxUb0FjdGlvbik7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9Db250YWluZXIpO1xyXG59IiwiaW1wb3J0IFBlcHBlcm9uaUltYWdlIGZyb20gXCIuL3BlcHBlcm9uaS5wbmdcIlxyXG5pbXBvcnQgTXVzaHJvb21JbWFnZSBmcm9tIFwiLi9tdXNocm9vbS5wbmdcIlxyXG5pbXBvcnQgUmVkSW1hZ2UgZnJvbSBcIi4vcmVkLnBuZ1wiXHJcbmltcG9ydCBQbGFpbkltYWdlIGZyb20gXCIuL3BsYWluLnBuZ1wiXHJcbmltcG9ydCBPbGl2ZUltYWdlIGZyb20gXCIuL29saXZlLnBuZ1wiXHJcbmltcG9ydCBFdmVyeXRoaW5nSW1hZ2UgZnJvbSBcIi4vZXZlcnl0aGluZy5qcGdcIlxyXG5pbXBvcnQgRXZlcnl0aGluZzJJbWFnZSBmcm9tIFwiLi9ldmVyeXRoaW5nMi5wbmdcIlxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1lbnVQYWdlKCl7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvZHktY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRhaW5lclwiKTtcclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oUGVwcGVyb25pSW1hZ2UsIFwiUGVwcGVyb25pXCIsIFwiVGhpcyBpcyBhIHNsaWNlIG9mIFBlcHBlcm9uaSBwaXp6YS4gTXkgZmF2b3JpdGUhXCIpKTtcclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oTXVzaHJvb21JbWFnZSwgXCJNdXNocm9vbVwiLCBcIk11c2hyb29tcywgcGVwcGVyb25pLCBhbmQgc29tZSBncmVlbnMuIFlvdSdsbCBsb3ZlIGl0IVwiKSk7XHJcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFJlZEltYWdlLCBcIlJlZFwiLCBcIkEgcmVkIHNsaWNlISBJdCdzIGdvdCBhbGwgdGhlIGdvb2RpZXMgeW91IGNvdWxkIGltYWdpbmUgb24gdGhlcmUuXCIpKTtcclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oUGxhaW5JbWFnZSwgXCJQbGFpblwiLCBcIk1heWJlIHlvdSdyZSBqdXN0IGZlZWxpbmcgYSBsaXR0bGUgcGxhaW4gdG9kYXksIHRoYXQncyBva2F5IHRvby5cIikpO1xyXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShPbGl2ZUltYWdlLCBcIk9saXZlXCIsIFwiT2xpdmVzIGFuZCBwZXBwZXJvbmlzIG9oIG15ISBQcm9iYWJseSBwcmV0dHkgdGFzdHkgaWYgeW91J3JlIGludG8gdGhhdCBzb3J0IG9mIHRoaW5nLlwiKSk7XHJcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKEV2ZXJ5dGhpbmdJbWFnZSwgXCJFdmVyeXRoaW5nXCIsIFwiRXZlcnl0aGluZyBpbiB0aGUga2l0Y2hlbiB0aGF0J3Mgd2hhdCBJJ20gdGhyb3dpbiBvbiB0aGlzIHNsaWNlLiBJZiB3ZSBnb3QgaXQsIGl0J3Mgb24gdGhlcmUuXCIpKTtcclxuXHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShpbWdQYXRoLCB0aXRsZSwgZGVzY3JpcHRpb24pe1xyXG4gICAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpdGVtRGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XHJcbiAgICBcclxuICAgIGNvbnN0IGl0ZW1JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgaXRlbUltZy5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLWltYWdlXCIpO1xyXG4gICAgaXRlbUltZy5zcmMgPSBpbWdQYXRoO1xyXG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtSW1nKTtcclxuXHJcbiAgICBjb25zdCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBpdGVtVGl0bGUuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbS10aXRsZVwiKTtcclxuICAgIGl0ZW1UaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IGl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBpdGVtRGVzYy5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLWRlc2NyaXB0aW9uXCIpO1xyXG4gICAgaXRlbURlc2MudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbURlc2MpO1xyXG5cclxuXHJcbiAgICByZXR1cm4gaXRlbURpdjtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVBhZ2UoKXtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbiAgICBjcmVhdGVIZWFkZXIoZG9jdW1lbnQuYm9keSk7XHJcbiAgICBjcmVhdGVCb2R5KGNvbnRhaW5lcik7XHJcbiAgICBjcmVhdGVGb290ZXIoZG9jdW1lbnQuYm9keSk7XHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKGNvbnRhaW5lcil7XHJcbiAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItY29udGFpbmVyJyk7XHJcbiAgICBjb250YWluZXIucHJlcGVuZChoZWFkZXJDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiTGlsIEZpYm9uYWNjaSdzXCI7XHJcbiAgICBoZWFkZXJUZXh0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci10ZXh0Jyk7XHJcbiAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XHJcblxyXG4gICAgY29uc3QgbGlua0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGlua0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaW5rLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgaG9tZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBob21lTGluay5pZCA9IFwiaG9tZS1saW5rXCI7XHJcbiAgICBob21lTGluay5ocmVmID0gXCIjXCI7XHJcbiAgICBob21lTGluay50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG4gICAgbGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChob21lTGluayk7XHJcblxyXG4gICAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBtZW51TGluay5pZCA9IFwibWVudS1saW5rXCI7XHJcbiAgICBtZW51TGluay5ocmVmID0gXCIjXCI7XHJcbiAgICBtZW51TGluay50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG4gICAgbGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51TGluayk7XHJcblxyXG4gICAgY29uc3QgY29udGFjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBjb250YWN0TGluay5pZCA9IFwiY29udGFjdC1saW5rXCI7XHJcbiAgICBjb250YWN0TGluay5ocmVmID0gXCIjXCI7XHJcbiAgICBjb250YWN0TGluay50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xyXG4gICAgbGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0TGluayk7XHJcblxyXG4gICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmtDb250YWluZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVCb2R5KGNvbnRhaW5lcil7XHJcbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250ZW50Q29udGFpbmVyLmlkID0gXCJib2R5LWNvbnRhaW5lclwiO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoY29udGFpbmVyKXtcclxuICAgIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9vdGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXItY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBmb290ZXJUZXh0LmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci10ZXh0Jyk7XHJcbiAgICBmb290ZXJUZXh0LnRleHRDb250ZW50ID0gXCIoQykgWmFjaGFyeSBEJ0FuZ2VsbyAyMDIyXCI7XHJcbiAgICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3RlckNvbnRhaW5lcik7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBjcmVhdGVQYWdlIGZyb20gXCIuL3BhZ2VcIjtcclxuaW1wb3J0IGNyZWF0ZUhvbWVQYWdlIGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IGNyZWF0ZU1lbnVQYWdlIGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBjcmVhdGVDb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0XCI7XHJcblxyXG52YXIgY3VycmVudFBhZ2UgPSBcIkhvbWVcIjtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY2xlYXJQYWdlKCl7XHJcbiAgICBjb25zdCBib2R5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2R5LWNvbnRhaW5lclwiKTtcclxuICAgIHdoaWxlKGJvZHlDb250YWluZXIuZmlyc3RDaGlsZCl7XHJcbiAgICAgICAgYm9keUNvbnRhaW5lci5yZW1vdmVDaGlsZChib2R5Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWdpc3RlckNsaWNrRXZlbnRzKCl7XHJcbiAgICBjb25zdCBob21lTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZS1saW5rXCIpO1xyXG4gICAgaG9tZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dIb21lUGFnZSk7XHJcblxyXG4gICAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtbGlua1wiKTtcclxuICAgIG1lbnVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHNob3dNZW51UGFnZSk7XHJcblxyXG4gICAgY29uc3QgY29udGFjdExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtbGlua1wiKTtcclxuICAgIGNvbnRhY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93Q29udGFjdFBhZ2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93SG9tZVBhZ2UoKXtcclxuICAgIGlmKGN1cnJlbnRQYWdlICE9IFwiSG9tZVwiKXtcclxuICAgICAgICBjbGVhclBhZ2UoKTtcclxuICAgICAgICBjcmVhdGVIb21lUGFnZSgpO1xyXG4gICAgICAgIGN1cnJlbnRQYWdlID0gXCJIb21lXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dNZW51UGFnZSgpe1xyXG4gICAgaWYoY3VycmVudFBhZ2UgIT0gXCJNZW51XCIpe1xyXG4gICAgICAgIGNsZWFyUGFnZSgpO1xyXG4gICAgICAgIGNyZWF0ZU1lbnVQYWdlKCk7XHJcbiAgICAgICAgY3VycmVudFBhZ2UgPSBcIk1lbnVcIjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0NvbnRhY3RQYWdlKCl7XHJcbiAgICBpZihjdXJyZW50UGFnZSAhPSBcIkNvbnRhY3RcIil7XHJcbiAgICAgICAgY2xlYXJQYWdlKCk7XHJcbiAgICAgICAgY3JlYXRlQ29udGFjdFBhZ2UoKTtcclxuICAgICAgICBjdXJyZW50UGFnZSA9IFwiQ29udGFjdFwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5jcmVhdGVQYWdlKCk7XHJcbmNyZWF0ZUhvbWVQYWdlKCk7XHJcbnJlZ2lzdGVyQ2xpY2tFdmVudHMoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9