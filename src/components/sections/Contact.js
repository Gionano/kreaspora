"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _lucideReact = require("lucide-react");
var _framerMotion = require("framer-motion");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Contact = function Contact() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_framerMotion.motion.section, {
    id: "kontak",
    className: "relative py-20 px-4 sm:px-6 lg:px-8",
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
      delay: 0.6
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "max-w-4xl mx-auto text-center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        className: "text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-transparent",
        children: "Mari Bergabung"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "text-xl text-gray-300 mb-12",
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-12",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300 transform hover:scale-105",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.Mail, {
            className: "w-8 h-8 text-teal-400 mx-auto mb-4"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            className: "font-bold mb-2",
            children: "Email"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-gray-300",
            children: "mpkosis@sekolah.sch.id"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300 transform hover:scale-105",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.Phone, {
            className: "w-8 h-8 text-lime-400 mx-auto mb-4"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            className: "font-bold mb-2",
            children: "Telepon"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-gray-300",
            children: "seman sarnah 0909827590725"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300 transform hover:scale-105",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.MapPin, {
            className: "w-8 h-8 text-yellow-400 mx-auto mb-4"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            className: "font-bold mb-2",
            children: "Lokasi"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-gray-300",
            children: "Just Kidding"
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
        className: "bg-gradient-to-r from-teal-500 to-green-600 px-12 py-4 rounded-full text-lg font-semibold hover:from-teal-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto",
        children: ["Hubungi Guweh Sekarang Juga", /*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.Star, {
          className: "ml-2 w-5 h-5 animate-spin"
        })]
      })]
    })
  });
};
var _default = exports["default"] = Contact;