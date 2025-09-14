"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var FadeInBackground = function FadeInBackground(_ref) {
  var images = _ref.images,
    activeIndex = _ref.activeIndex;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "fixed inset-0 -z-10",
    children: [images.map(function (src, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "absolute inset-0 h-full w-full bg-cover bg-center flex items-center justify-center transition-opacity duration-1000 ease-in-out",
        style: {
          backgroundImage: "url(".concat(src, ")"),
          opacity: index === activeIndex ? 1 : 0
        }
      }, src);
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "absolute inset-0 bg-black/60"
    })]
  });
};
var _default = exports["default"] = FadeInBackground;