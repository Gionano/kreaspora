"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var CustomCursor = function CustomCursor(_ref) {
  var mousePosition = _ref.mousePosition,
    isLoaded = _ref.isLoaded;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "fixed w-6 h-6 bg-gradient-to-r from-teal-400 to-green-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-300 ease-out",
    style: {
      left: mousePosition.x - 12,
      top: mousePosition.y - 12,
      transform: "scale(".concat(isLoaded ? 1 : 0, ")")
    }
  });
};
var _default = exports["default"] = CustomCursor;