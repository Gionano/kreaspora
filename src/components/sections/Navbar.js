"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _image = _interopRequireDefault(require("next/image"));
var _link = _interopRequireDefault(require("next/link"));
var _router = require("next/router");
var _lucideReact = require("lucide-react");
var _logo = _interopRequireDefault(require("@/img/logo.jpeg"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Navbar = function Navbar() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMenuOpen = _useState2[0],
    setIsMenuOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isScrolled = _useState4[0],
    setIsScrolled = _useState4[1];
  var router = (0, _router.useRouter)();
  (0, _react.useEffect)(function () {
    var handleScroll = function handleScroll() {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  var handleScrollToSection = function handleScrollToSection(event, path) {
    if (router.pathname !== '/') {
      // If we are not on the home page, navigate to home and then scroll
      router.push('/').then(function () {
        // This part is tricky and might need a more robust solution like context
        // For now, we just navigate
      });
      return;
    }
    event.preventDefault();
    var targetId = path.substring(1); // Remove '#'
    var targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        // Adjusted for navbar height
        behavior: 'smooth'
      });
    }
  };
  var navItems = [{
    name: 'Beranda',
    path: '/'
  }, {
    name: 'Tentang',
    path: '#tentang'
  }, {
    name: 'Program',
    path: '#program'
  }, {
    name: 'Pendaftaran',
    path: '/registration'
  }];
  var renderNavItem = function renderNavItem(item) {
    var isMobile = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var isActive = router.pathname === item.path;
    var isScrollLink = item.path.startsWith('#');
    var activeClass = isMobile ? "text-teal-300" : "text-teal-300 border-b-2 border-teal-400";
    var baseClass = isMobile ? "font-medium text-gray-200 hover:text-teal-300 text-xl cursor-pointer" : "font-medium text-gray-300 hover:text-teal-300 transition-all duration-300 pb-1";
    if (isScrollLink) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        href: item.path,
        onClick: function onClick(e) {
          handleScrollToSection(e, item.path);
          if (isMobile) setIsMenuOpen(false);
        },
        className: "".concat(baseClass, " cursor-pointer"),
        children: item.name
      });
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_link["default"], {
      href: item.path,
      legacyBehavior: true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        onClick: function onClick() {
          if (isMobile) setIsMenuOpen(false);
        },
        className: "".concat(baseClass, " ").concat(isActive ? activeClass : ''),
        children: item.name
      })
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("header", {
    className: "fixed top-0 w-full z-40 transition-all duration-300 ".concat(isScrolled ? 'bg-slate-900/80 backdrop-blur-md' : 'bg-transparent', " border-b border-white/10"),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("nav", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_link["default"], {
        href: "/",
        legacyBehavior: true,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
          className: "flex items-center gap-3",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_image["default"], {
            src: _logo["default"],
            alt: "MPKOSIS Logo",
            width: 32,
            height: 32,
            className: "rounded-full"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "text-2xl font-bold bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-transparent",
            children: "MPKOSIS"
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
        className: "hidden md:flex items-center space-x-8",
        children: navItems.map(function (item) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
            children: renderNavItem(item)
          }, item.name);
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "md:hidden",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          onClick: function onClick() {
            return setIsMenuOpen(!isMenuOpen);
          },
          className: "text-gray-300 hover:text-white focus:outline-none",
          "aria-label": "Buka menu",
          children: isMenuOpen ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.X, {
            size: 28
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.Menu, {
            size: 28
          })
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "md:hidden fixed top-16 left-0 h-[calc(100vh-4rem)] w-2/3 max-w-xs bg-slate-900/95 backdrop-blur-lg transition-transform duration-300 ease-in-out ".concat(isMenuOpen ? 'translate-x-0' : '-translate-x-full'),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
        className: "flex flex-col items-start space-y-8 p-8",
        children: navItems.map(function (item) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
            children: renderNavItem(item, true)
          }, item.name);
        })
      })
    })]
  });
};
var _default = exports["default"] = Navbar;