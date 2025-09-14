"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _landingPageData = require("@/data/landingPageData");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var About = function About() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("section", {
    id: "tentang",
    className: "relative py-20 px-4 sm:px-6 lg:px-8",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "max-w-6xl mx-auto",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        className: "text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-transparent",
        children: "Tentang MPKOSIS"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "text-xl text-gray-300 max-w-3xl mx-auto",
        children: "MPKOSIS adalah lembaga tertinggi yang mewadahi seluruh aspirasi siswa dalam mengembangkan potensi dan menciptakan perubahan positif di lingkungan sekolah."
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "space-y-6",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300 transform hover:scale-105",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            className: "text-2xl font-bold mb-4 text-yellow-400",
            children: "Visi Kami"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-gray-300",
            children: "Menjadi organisasi siswa yang unggul, demokratis, dan berkarakter dalam mewujudkan lingkungan sekolah yang kondusif untuk pengembangan potensi siswa."
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300 transform hover:scale-105",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            className: "text-2xl font-bold mb-4 text-lime-400",
            children: "Misi Kami"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
            className: "space-y-2 text-gray-300"
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "grid grid-cols-2 gap-6",
        children: _landingPageData.achievements.map(function (achievement, index) {
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "bg-gradient-to-br from-teal-500/20 to-green-500/20 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10 hover:scale-110 transition-all duration-300",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "text-3xl font-bold text-yellow-400 mb-2",
              children: achievement.number
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "text-gray-300",
              children: achievement.label
            })]
          }, achievement.label);
        })
      })]
    })]
  });
};
var _default = exports["default"] = About;