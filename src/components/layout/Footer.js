"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _image = _interopRequireDefault(require("next/image"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var sponsors = [{
  src: '/sponsors/logo_nesta.png',
  width: 50,
  height: 10
}, {
  src: '/sponsors/perari.png',
  width: 50,
  height: 10
}];
var Footer = function Footer() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("footer", {
    className: "relative bg-black/50 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "max-w-6xl mx-auto text-center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "mb-10",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          className: "text-lg text-gray-400 mb-6",
          children: "Didukung oleh:"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "flex justify-center items-center gap-8 md:gap-12 flex-wrap",
          children: sponsors.map(function (sponsor, index) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_image["default"], {
                src: sponsor.src,
                alt: "Logo Sponsor ".concat(index + 1),
                width: sponsor.width,
                height: sponsor.height,
                className: "h-12 w-auto",
                objectFit: "contain"
              })
            }, sponsor.src);
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "border-t border-white/10 pt-8 text-gray-500",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          children: ["\xA9 ", new Date().getFullYear(), " Giovano. Semua hak dilindungi undang-undang."]
        })
      })]
    })
  });
};
var _default = exports["default"] = Footer;