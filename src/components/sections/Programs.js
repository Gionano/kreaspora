"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _image = _interopRequireDefault(require("next/image"));
var _link = _interopRequireDefault(require("next/link"));
var _landingPageData = require("@/data/landingPageData");
var _framerMotion = require("framer-motion");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Programs = function Programs() {
  var targetRef = (0, _react.useRef)(null);
  var _useScroll = (0, _framerMotion.useScroll)({
      target: targetRef,
      offset: ['start start', 'end end']
    }),
    scrollYProgress = _useScroll.scrollYProgress;
  var containerRef = (0, _react.useRef)(null);
  var scrollContentRef = (0, _react.useRef)(null);
  var cardRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)([0]),
    _useState2 = _slicedToArray(_useState, 2),
    snapPoints = _useState2[0],
    setSnapPoints = _useState2[1];
  var _useState3 = (0, _react.useState)([0]),
    _useState4 = _slicedToArray(_useState3, 2),
    progressPoints = _useState4[0],
    setProgressPoints = _useState4[1];
  (0, _react.useEffect)(function () {
    if (containerRef.current && cardRef.current) {
      var containerWidth = containerRef.current.offsetWidth;
      var cardWidth = cardRef.current.offsetWidth;
      var gap = parseInt(window.getComputedStyle(cardRef.current.parentElement).gap) || 32;
      var cardPlusGap = cardWidth + gap;
      var start = containerWidth / 2 - cardWidth / 2;
      var points = _landingPageData.programs.map(function (_, i) {
        return start - i * cardPlusGap;
      });
      setSnapPoints(points);
      var numPrograms = _landingPageData.programs.length;
      if (numPrograms > 1) {
        var progress = _landingPageData.programs.map(function (_, i) {
          return i / (numPrograms - 1);
        });
        setProgressPoints(progress);
      } else {
        setProgressPoints([0]);
      }
    }
  }, []);
  var x = (0, _framerMotion.useTransform)(scrollYProgress, progressPoints, snapPoints);
  var xSpring = (0, _framerMotion.useSpring)(x, {
    stiffness: 200,
    damping: 40
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    id: "program",
    ref: targetRef,
    className: "relative h-[400vh]",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "sticky top-0 flex h-screen items-center overflow-hidden",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        ref: containerRef,
        className: "w-full px-4 sm:px-6 lg:px-8",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_framerMotion.motion.div, {
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
            ease: "easeOut"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "text-center mb-12 md:mb-16",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
              className: "text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-transparent",
              children: "Program Lomba"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto break-words",
              children: "Scroll ke bawah untuk melihat, dan klik pada card lomba untuk melihat lebih lanjut."
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_framerMotion.motion.div, {
          ref: scrollContentRef,
          style: {
            x: xSpring
          },
          className: "inline-flex gap-6 sm:gap-8",
          children: _landingPageData.programs.map(function (program, index) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_link["default"], {
              href: "/lomba",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                ref: index === 0 ? cardRef : null,
                className: "group min-w-[18rem] max-w-sm sm:w-80 flex-shrink-0 select-none bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-teal-400 active:scale-95",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "relative w-full h-48",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_image["default"], {
                    src: program.image,
                    alt: program.title,
                    fill: true,
                    sizes: "(max-width: 640px) 288px, 320px",
                    className: "object-cover",
                    draggable: "false"
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "p-6 sm:p-8",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
                    className: "text-xl sm:text-2xl font-bold mb-4 text-white break-words",
                    children: program.title
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                    className: "text-gray-300 text-sm sm:text-base break-words",
                    children: program.description
                  })]
                })]
              })
            }, program.id);
          })
        })]
      })
    })
  });
};
var _default = exports["default"] = Programs;