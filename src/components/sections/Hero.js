"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _lucideReact = require("lucide-react");
var _framerMotion = require("framer-motion");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Hero = function Hero(_ref) {
  var isLoaded = _ref.isLoaded;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    id: "beranda",
    className: "w-full pt-16 px-4",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_framerMotion.motion.div, {
      className: "text-center max-w-4xl mx-auto",
      initial: {
        opacity: 0,
        y: 50
      },
      whileInView: {
        opacity: 1,
        y: 0
      },
      viewport: {
        once: true,
        amount: 0.5
      },
      transition: {
        duration: 0.8,
        ease: "easeOut"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
        className: "text-4xl sm:text-6xl lg:text-7xl font-bold mb-6",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "bg-gradient-to-r from-teal-400 via-green-400 to-cyan-500 bg-clip-text text-transparent animate-pulse",
          children: "Kreaspora"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("h2", {
        className: "text-lg sm:text-2xl lg:text-3xl mb-8 text-gray-300",
        children: ["Selamat Datang", /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "text-green-300",
          children: "Kreasi dan Sporta"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "text-base sm:text-xl mb-12 text-gray-400 max-w-2xl mx-auto",
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_link["default"], {
          href: "/registration",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
            className: "group bg-gradient-to-r from-teal-500 to-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-teal-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center",
            children: ["Registration Form", /*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.ArrowRight, {
              className: "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
            })]
          })
        })
      })]
    })
  });
};
var _default = exports["default"] = Hero;