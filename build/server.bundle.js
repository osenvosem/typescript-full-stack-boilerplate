/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/app/Main/components/MainMenu/index.tsx":
/*!****************************************************!*\
  !*** ./src/app/Main/components/MainMenu/index.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _mainMenuItems = _interopRequireDefault(__webpack_require__(/*! ./mainMenuItems.json */ "./src/app/Main/components/MainMenu/mainMenuItems.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var MainMenu = function MainMenu() {
  return _react.default.createElement("nav", null, _mainMenuItems.default.map(function (item) {
    return _react.default.createElement(_reactRouterDom.NavLink, {
      exact: item.path === "/",
      to: item.path,
      key: item.path,
      activeStyle: {
        fontWeight: "bold"
      }
    }, item.title);
  }));
};

var _default = MainMenu;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MainMenu, "MainMenu", "/Users/srg/Documents/dev/learning-react/src/app/Main/components/MainMenu/index.tsx");
  reactHotLoader.register(_default, "default", "/Users/srg/Documents/dev/learning-react/src/app/Main/components/MainMenu/index.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/app/Main/components/MainMenu/mainMenuItems.json":
/*!*************************************************************!*\
  !*** ./src/app/Main/components/MainMenu/mainMenuItems.json ***!
  \*************************************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = [{"title":"Home","path":"/"},{"title":"Animals","path":"/animals"},{"title":"About","path":"/about"}];

/***/ }),

/***/ "./src/app/Main/index.tsx":
/*!********************************!*\
  !*** ./src/app/Main/index.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader");

var _MainMenu = _interopRequireDefault(__webpack_require__(/*! ./components/MainMenu/ */ "./src/app/Main/components/MainMenu/index.tsx"));

var _NotFound = _interopRequireDefault(__webpack_require__(/*! components/NotFound */ "./src/app/shared/components/NotFound/index.tsx"));

var _Home = _interopRequireDefault(__webpack_require__(/*! ./screens/Home/ */ "./src/app/Main/screens/Home/index.tsx"));

var _About = _interopRequireDefault(__webpack_require__(/*! ./screens/About */ "./src/app/Main/screens/About/index.tsx"));

var _Animals = _interopRequireDefault(__webpack_require__(/*! ./screens/Animals */ "./src/app/Main/screens/Animals/index.tsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main =
/*#__PURE__*/
function (_Component) {
  _inherits(Main, _Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", null, _react.default.createElement(_MainMenu.default, null)), _react.default.createElement("main", null, _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/",
        component: _Home.default
      }), _react.default.createElement(_reactRouterDom.Route, {
        path: "/animals",
        component: _Animals.default
      }), _react.default.createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/about",
        component: _About.default
      }), _react.default.createElement(_reactRouterDom.Route, {
        component: _NotFound.default
      }))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Main;
}(_react.Component);

var _default = (0, _reactHotLoader.hot)(module)(Main);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Main, "Main", "/Users/srg/Documents/dev/learning-react/src/app/Main/index.tsx");
  reactHotLoader.register(_default, "default", "/Users/srg/Documents/dev/learning-react/src/app/Main/index.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/app/Main/screens/About/index.tsx":
/*!**********************************************!*\
  !*** ./src/app/Main/screens/About/index.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var About = function About() {
  return _react.default.createElement("div", null, _react.default.createElement("h2", null, "This is the About page."));
};

var _default = About;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(About, "About", "/Users/srg/Documents/dev/learning-react/src/app/Main/screens/About/index.tsx");
  reactHotLoader.register(_default, "default", "/Users/srg/Documents/dev/learning-react/src/app/Main/screens/About/index.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/app/Main/screens/Animals/index.tsx":
/*!************************************************!*\
  !*** ./src/app/Main/screens/Animals/index.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _Cats = _interopRequireDefault(__webpack_require__(/*! ./screens/Cats */ "./src/app/Main/screens/Animals/screens/Cats/index.tsx"));

var _Dogs = _interopRequireDefault(__webpack_require__(/*! ./screens/Dogs */ "./src/app/Main/screens/Animals/screens/Dogs/index.tsx"));

var _Hamsters = _interopRequireDefault(__webpack_require__(/*! ./screens/Hamsters */ "./src/app/Main/screens/Animals/screens/Hamsters/index.tsx"));

var _NotFound = _interopRequireDefault(__webpack_require__(/*! components/NotFound */ "./src/app/shared/components/NotFound/index.tsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var navLinkActiveStyle = {
  fontWeight: "bold",
  textDecoration: "none"
};

var Animals = function Animals(_ref) {
  var match = _ref.match;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("nav", null, _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.NavLink, {
    exact: true,
    to: "".concat(match.url, "/cats"),
    activeStyle: navLinkActiveStyle
  }, "Cats")), _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.NavLink, {
    exact: true,
    to: "".concat(match.url, "/dogs"),
    activeStyle: navLinkActiveStyle
  }, "Dogs")), _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.NavLink, {
    exact: true,
    to: "".concat(match.url, "/hamsters"),
    activeStyle: navLinkActiveStyle
  }, "Hamsters")))), _react.default.createElement("article", null, _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "".concat(match.url, "/cats"),
    component: _Cats.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "".concat(match.url, "/dogs"),
    component: _Dogs.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "".concat(match.url, "/hamsters"),
    component: _Hamsters.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    component: _NotFound.default
  }))));
};

var _default = Animals;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(navLinkActiveStyle, "navLinkActiveStyle", "/Users/srg/Documents/dev/learning-react/src/app/Main/screens/Animals/index.tsx");
  reactHotLoader.register(Animals, "Animals", "/Users/srg/Documents/dev/learning-react/src/app/Main/screens/Animals/index.tsx");
  reactHotLoader.register(_default, "default", "/Users/srg/Documents/dev/learning-react/src/app/Main/screens/Animals/index.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/app/Main/screens/Animals/screens/Cats/index.tsx":
/*!*************************************************************!*\
  !*** ./src/app/Main/screens/Animals/screens/Cats/index.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var Cats = function Cats() {
  return _react.default.createElement("h2", null, "This is the Cats page.");
};

var _default = Cats;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Cats, "Cats", "/Users/srg/Documents/dev/learning-react/src/app/Main/screens/Animals/screens/Cats/index.tsx");
  reactHotLoader.register(_default, "default", "/Users/srg/Documents/dev/learning-react/src/app/Main/screens/Animals/screens/Cats/index.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/app/Main/screens/Animals/screens/Dogs/index.tsx":
/*!*************************************************************!*\
  !*** ./src/app/Main/screens/Animals/screens/Dogs/index.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var Dogs = function Dogs() {
  return _react.default.createElement("h2", null, "This is the Dogs page.");
};

var _default = Dogs;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Dogs, "Dogs", "/Users/srg/Documents/dev/learning-react/src/app/Main/screens/Animals/screens/Dogs/index.tsx");
  reactHotLoader.register(_default, "default", "/Users/srg/Documents/dev/learning-react/src/app/Main/screens/Animals/screens/Dogs/index.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/app/Main/screens/Animals/screens/Hamsters/index.tsx":
/*!*****************************************************************!*\
  !*** ./src/app/Main/screens/Animals/screens/Hamsters/index.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var Hamsters = function Hamsters() {
  return _react.default.createElement("h2", null, "This is the Hamsters page.");
};

var _default = Hamsters;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Hamsters, "Hamsters", "/Users/srg/Documents/dev/learning-react/src/app/Main/screens/Animals/screens/Hamsters/index.tsx");
  reactHotLoader.register(_default, "default", "/Users/srg/Documents/dev/learning-react/src/app/Main/screens/Animals/screens/Hamsters/index.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/app/Main/screens/Home/index.tsx":
/*!*********************************************!*\
  !*** ./src/app/Main/screens/Home/index.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("h2", null, "This is the Home page.");
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Home;
}(_react.Component);

var _default = Home;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Home, "Home", "/Users/srg/Documents/dev/learning-react/src/app/Main/screens/Home/index.tsx");
  reactHotLoader.register(_default, "default", "/Users/srg/Documents/dev/learning-react/src/app/Main/screens/Home/index.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/app/shared/components/NotFound/index.tsx":
/*!******************************************************!*\
  !*** ./src/app/shared/components/NotFound/index.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var NotFound = function NotFound(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_reactRouterDom.Route, {
    render: function render(_ref2) {
      var staticContext = _ref2.staticContext;
      if (staticContext) staticContext.code = 404;
      return _react.default.createElement("article", null, _react.default.createElement("h1", null, "Page not found."), children);
    }
  });
};

var _default = NotFound;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NotFound, "NotFound", "/Users/srg/Documents/dev/learning-react/src/app/shared/components/NotFound/index.tsx");
  reactHotLoader.register(_default, "default", "/Users/srg/Documents/dev/learning-react/src/app/shared/components/NotFound/index.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = _interopRequireDefault(__webpack_require__(/*! config */ "config"));

var _server = _interopRequireDefault(__webpack_require__(/*! ./server */ "./src/server/server.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_server.default.listen(_config.default.get("serverPort"));

/***/ }),

/***/ "./src/server/routes/SSR/index.tsx":
/*!*****************************************!*\
  !*** ./src/server/routes/SSR/index.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _Main = _interopRequireDefault(__webpack_require__(/*! ../../../app/Main */ "./src/app/Main/index.tsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var clientAssets = JSON.parse("[\"/assets/main.bundle.js\",\"/assets/vendors~main.chunk.js\"]");

var SSRHandler = function SSRHandler(req, res, next) {
  var context = {};
  var markup = (0, _server.renderToString)(_react.default.createElement(_reactRouter.StaticRouter, {
    location: req.url,
    context: context
  }, _react.default.createElement(_Main.default, null)));

  if (context.url) {
    res.redirect(context.status || 301, context.url);
  } else {
    var html = "\n      <!DOCTYPE html>\n      <html lang=\"en\">\n\n      <head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n        <title>Document</title>\n      </head>\n\n      <body>\n        <div id=\"root\">".concat(markup, "</div>\n\n        ").concat(clientAssets.map(function (assetPath) {
      return "<script src=\"".concat(assetPath, "\"></script>\n");
    }).join("\n"), "\n      </body>\n\n      </html>\n    ");
    res.send(html);
  }
};

var _default = SSRHandler;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(clientAssets, "clientAssets", "/Users/srg/Documents/dev/learning-react/src/server/routes/SSR/index.tsx");
  reactHotLoader.register(SSRHandler, "SSRHandler", "/Users/srg/Documents/dev/learning-react/src/server/routes/SSR/index.tsx");
  reactHotLoader.register(_default, "default", "/Users/srg/Documents/dev/learning-react/src/server/routes/SSR/index.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(__webpack_require__(/*! express */ "express"));

var _SSR = _interopRequireDefault(__webpack_require__(/*! ./routes/SSR */ "./src/server/routes/SSR/index.tsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var app = (0, _express.default)();

if (false) {}

app.use(_SSR.default);
var _default = app;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(app, "app", "/Users/srg/Documents/dev/learning-react/src/server/server.ts");
  reactHotLoader.register(_default, "default", "/Users/srg/Documents/dev/learning-react/src/server/server.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "config":
/*!*************************!*\
  !*** external "config" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });
//# sourceMappingURL=server.bundle.js.map