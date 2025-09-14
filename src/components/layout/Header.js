"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var navItems = [];
var Header = function Header(_ref) {
  var isLoaded = _ref.isLoaded,
    setActiveSection = _ref.setActiveSection;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("nav", {
    className: "fixed top-0 w-full bg-white/10 backdrop-blur-md z-40 border-b border-white/10",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex items-center justify-between h-16",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "text-2xl font-bold bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent transform transition-all duration-1000 ".concat(isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'),
          children: "Lorem Ipsum"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "hidden md:flex space-x-8",
          children: navItems.map(function (item, i) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              onClick: function onClick() {
                return setActiveSection(item.toLowerCase());
              },
              className: "hover:text-teal-300 transition-all duration-300 transform hover:scale-110 ".concat(isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'),
              style: {
                transitionDelay: "".concat(i * 100, "ms")
              },
              children: item
            }, item);
          })
        })]
      })
    })
  });
};
var _default = exports["default"] = Header;