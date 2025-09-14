"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _landingPageData = require("@/data/landingPageData");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var Programs = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
    id: "program",
    ref: ref,
    className: "relative py-20 px-4 sm:px-6 lg:px-8 bg-white/5",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "max-w-6xl mx-auto",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "text-center mb-16",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          className: "text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-transparent",
          children: "Program Unggulan"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto",
          children: "Berbagai program inovatif yang dirancang untuk mengembangkan potensi siswa dan menciptakan perubahan positif."
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-8",
        children: _landingPageData.programs.map(function (program, index) {
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
              className: "text-xl sm:text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors",
              children: program.title
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "text-base text-gray-300 mb-6",
              children: program.description
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "flex items-center text-teal-400 group-hover:text-green-400 transition-colors"
            })]
          }, program.title || index);
        })
      })]
    })
  });
});
Programs.displayName = 'Programs';
var _default = exports["default"] = Programs;