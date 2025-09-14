"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _landingPageData = require("@/data/landingPageData");
var _framerMotion = require("framer-motion");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var About = function About() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    id: "tentang",
    className: "w-full px-4",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_framerMotion.motion.div, {
      className: "max-w-6xl mx-auto",
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
        ease: "easeOut",
        delay: 0.2
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "text-center mb-12 md:mb-16",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          className: "text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-transparent",
          children: "(Tentang Event)"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto",
          children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "grid md:grid-cols-2 gap-8 md:gap-12 items-center",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "space-y-6",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300 transform hover:scale-105",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
              className: "text-xl sm:text-2xl font-bold mb-4 text-yellow-400",
              children: "Tujuan Event"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "text-gray-300",
              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "grid grid-cols-2 gap-4 sm:gap-6",
          children: _landingPageData.achievements.map(function (achievement, index) {
            return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "bg-gradient-to-br from-teal-500/20 to-green-500/20 backdrop-blur-md rounded-2xl p-4 sm:p-6 text-center border border-white/10 hover:scale-110 transition-all duration-300",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "text-2xl sm:text-3xl font-bold text-yellow-400 mb-2",
                children: achievement.number
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "text-gray-300 text-sm sm:text-base",
                children: achievement.label
              })]
            }, achievement.label);
          })
        })]
      })]
    })
  });
};
var _default = exports["default"] = About;