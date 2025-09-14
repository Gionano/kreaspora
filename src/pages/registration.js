"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", { value: true });
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Navbar = _interopRequireDefault(require("@/components/sections/Navbar"));
var _Footer = _interopRequireDefault(require("@/components/layout/Footer"));
var _FadeInBackground = _interopRequireDefault(require("@/components/layout/FadeInBackground"));
var _sweetalert = _interopRequireDefault(require("sweetalert2"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var backgroundImages = ['/background/sport-1.jpg', '/background/sport-3.jpg', '/background/sport-2.jpg', '/background/melukis.jpg'];
var competitions = {
  "Lomba 1": {
    participants: 3,
    group: "per Jurusan perangkatan"
  },
  "Lomba 2": {
    participants: 4,
    group: "per jurusan perangkatan"
  },
  "Lomba 3": {
    participants: 3,
    group: "per kelas"
  },
  "Lomba 4": {
    participants: 2,
    group: "per kelas"
  },
  "Lomba 5": {
    participants: 2,
    group: "per kelas"
  },
  "Lomba 6": {
    participants: 8,
    group: "per kelas"
  },
  "Lomba 7": {
    participants: 9,
    group: "per kelas"
  },
  "Lomba 8": {
    participants: 11,
    group: "per kelas"
  },
  "Lomba 9": {
    participants: 7,
    group: "Perjurusan"
  },
  "Lomba 10": {
    participants: 15,
    group: "Perjurusan"
  },
  "Lomba 11": {
    participants: 3,
    group: "Perjurusan"
  },
  "Lomba 12": {
    participants: 4,
    group: "Perjurusan"
  },
  "Lomba 13": {
    participants: 1,
    group: "per Jurusan perangkatan"
  },
  "Lomba 14": {
    participants: 1,
    group: "per Jurusan perangkatan"
  },
  "Lomba 15": {
    participants: 3,
    group: "per Jurusan perangkatan"
  }
};
var majors = ["MPLB", "AKL", "PM", "DKV", "TKJ", "TKL"];
var romanNumerals = {
  "X": 10,
  "XI": 11,
  "XII": 12
};
var majorClassCount = {
  "MPLB": 3,
  "AKL": 3,
  "PM": 3,
  "DKV": 2,
  "TKJ": 2,
  "TKL": 1
};
var RegistrationPage = function RegistrationPage() {
  var _useState = (0, _react.useState)(Object.keys(competitions)[0]),
    _useState2 = _slicedToArray(_useState, 2),
    selectedCompetition = _useState2[0],
    setSelectedCompetition = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    dynamicFieldValue = _useState4[0],
    setDynamicFieldValue = _useState4[1];
  (0, _react.useEffect)(function () {
    setDynamicFieldValue('');
  }, [selectedCompetition]);
  var handleCompetitionChange = function handleCompetitionChange(event) {
    setSelectedCompetition(event.target.value);
  };
  var handleDynamicFieldChange = function handleDynamicFieldChange(event) {
    setDynamicFieldValue(event.target.value);
  };
  var getParticipantClassOptions = function getParticipantClassOptions() {
    var competition = competitions[selectedCompetition];
    if (!competition) return [];
    var group = competition.group.toLowerCase();
    var classOptions = [];
    if (group.includes("per jurusan perangkatan")) {
      if (!dynamicFieldValue) return [];
      var _dynamicFieldValue$sp = dynamicFieldValue.split(' '),
        _dynamicFieldValue$sp2 = _slicedToArray(_dynamicFieldValue$sp, 2),
        grade = _dynamicFieldValue$sp2[0],
        major = _dynamicFieldValue$sp2[1];
      if (!grade || !major) return [];
      var count = majorClassCount[major] || 0;
      for (var i = 1; i <= count; i++) {
        classOptions.push("".concat(grade, " ").concat(major, " ").concat(i));
      }
    }
    else if (group.includes("perjurusan")) {
      if (!dynamicFieldValue) return [];
      var _major = dynamicFieldValue;
      Object.keys(romanNumerals).forEach(function (grade) {
        var count = majorClassCount[_major] || 0;
        for (var _i = 1; _i <= count; _i++) {
          classOptions.push("".concat(grade, " ").concat(_major, " ").concat(_i));
        }
      });
    }
    return classOptions;
  };
  var renderParticipantFields = function renderParticipantFields() {
    var competition = competitions[selectedCompetition];
    if (!competition) return null;
    var participantClassOptions = getParticipantClassOptions();
    var group = competition.group.toLowerCase();
    var showClassDropdown = (group.includes("per jurusan perangkatan") || group.includes("perjurusan")) && participantClassOptions.length > 0;
    var fields = [];
    for (var i = 1; i <= competition.participants; i++) {
      fields.push(/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "space-y-2",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          htmlFor: "participant-".concat(i),
          className: "text-sm font-medium text-gray-300",
          children: "Peserta ".concat(i)
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: "text",
          name: "participant-".concat(i),
          id: "participant-".concat(i),
          className: "bg-gray-700/50 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5",
          placeholder: "Nama Peserta ".concat(i),
          required: true
        }), showClassDropdown && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            htmlFor: "participant-class-".concat(i),
            className: "text-sm font-medium text-gray-300 sr-only",
            children: "Kelas"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("select", {
            id: "participant-class-".concat(i),
            className: "bg-gray-700/50 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 mt-1",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
              value: "",
              disabled: true,
              children: "Pilih Kelas"
            }), participantClassOptions.map(function (className) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                value: className,
                children: className
              }, className);
            })]
          })]
        })]
      }, i));
    }
    return fields;
  };
  var renderDynamicField = function renderDynamicField() {
    var competition = competitions[selectedCompetition];
    if (!competition) return null;
    var group = competition.group.toLowerCase();
    if (group.includes("per jurusan perangkatan")) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          htmlFor: "jurusan-angkatan",
          className: "text-sm font-medium text-gray-300",
          children: "Jurusan Angkatan"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("select", {
          id: "jurusan-angkatan",
          onChange: handleDynamicFieldChange,
          value: dynamicFieldValue,
          className: "bg-gray-700/50 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
            value: "",
            disabled: true,
            children: "Pilih Jurusan dan Angkatan"
          }), Object.keys(romanNumerals).map(function (grade) {
            return majors.map(function (major) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                value: "".concat(grade, " ").concat(major),
                children: "".concat(grade, " ").concat(major)
              }, "".concat(grade, "-").concat(major));
            });
          })]
        })]
      });
    }
    else if (group.includes("per kelas")) {
      var classOptions = [];
      Object.keys(romanNumerals).forEach(function (grade) {
        majors.forEach(function (major) {
          for (var i = 1; i <= (majorClassCount[major] || 0); i++) {
            classOptions.push("".concat(grade, " ").concat(major, " ").concat(i));
          }
        });
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          htmlFor: "kelas",
          className: "text-sm font-medium text-gray-300",
          children: "Kelas"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("select", {
          id: "kelas",
          className: "bg-gray-700/50 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5",
          children: classOptions.map(function (className) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
              value: className,
              children: className
            }, className);
          })
        })]
      });
    }
    else if (group.includes("perjurusan")) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          htmlFor: "jurusan",
          className: "text-sm font-medium text-gray-300",
          children: "Jurusan"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("select", {
          id: "jurusan",
          onChange: handleDynamicFieldChange,
          value: dynamicFieldValue,
          className: "bg-gray-700/50 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
            value: "",
            disabled: true,
            children: "Pilih Jurusan"
          }), majors.map(function (major) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
              value: major,
              children: major
            }, major);
          })]
        })]
      });
    }
    return null;
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(event) {
      var form, confirmation, competitionName, competitionDetails, group, participants, i, nameInput, classSelect, dynamicInput, registrationData, response, result, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            event.preventDefault();
            form = event.currentTarget;
            _context.n = 1;
            return _sweetalert["default"].fire({
              title: 'Konfirmasi Pendaftaran',
              text: "Apakah Anda yakin data yang diisi sudah benar?",
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Ya, daftarkan!',
              cancelButtonText: 'Batal'
            });
          case 1:
            confirmation = _context.v;
            if (confirmation.isConfirmed) {
              _context.n = 2;
              break;
            }
            return _context.a(2);
          case 2:
            competitionName = selectedCompetition;
            competitionDetails = competitions[competitionName];
            group = competitionDetails.group;
            participants = [];
            for (i = 1; i <= competitionDetails.participants; i++) {
              nameInput = form.elements.namedItem("participant-".concat(i));
              classSelect = form.elements.namedItem("participant-class-".concat(i));
              participants.push({
                name: nameInput ? nameInput.value : '',
                "class": classSelect ? classSelect.value : null
              });
            }
            dynamicInput = form.querySelector('[id="jurusan-angkatan"], [id="kelas"], [id="jurusan"]');
            registrationData = {
              competition: competitionName,
              group: group,
              group_selection: dynamicFieldValue || (dynamicInput ? dynamicInput.value : ''),
              participants: participants
            };
            _context.p = 3;
            _sweetalert["default"].fire({
              title: 'Memproses...', 
              text: 'Mohon tunggu, pendaftaran Anda sedang kami proses.',
              allowOutsideClick: false,
              didOpen: function didOpen() {
                _sweetalert["default"].showLoading();
              }
            });
            console.log('Submitting registration data:', registrationData);
            _context.n = 4;
                        return fetch('/kreaspora/public/api/register.php', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(registrationData)
            });
          case 4:
            response = _context.v;
            _context.n = 5;
            return response.json();
          case 5:
            result = _context.v;
            console.log('Received response:', {
              status: response.status,
              body: result
            });
            _sweetalert["default"].close(); // Close the loading popup

            if (response.status === 201 && result.status === 'success') {
              _sweetalert["default"].fire('Berhasil!', 'Pendaftaran Anda telah diterima.', 'success');
              form.reset();
              setSelectedCompetition(Object.keys(competitions)[0]);
            } else if (response.status === 409 && result.status === 'exists') {
              _sweetalert["default"].fire('Pendaftaran Gagal', result.message, 'warning');
            } else {
              _sweetalert["default"].fire('Pendaftaran Gagal', result.message || 'Terjadi kesalahan yang tidak diketahui.', 'error');
            }
            _context.n = 7;
            break;
          case 6:
            _context.p = 6;
            _t = _context.v;
            _sweetalert["default"].close(); // Close the loading popup
            console.error('Error submitting form:', _t);
            _sweetalert["default"].fire('Error Jaringan', 'Tidak dapat terhubung ke server. Pastikan XAMPP Anda berjalan.', 'error');
          case 7:
            return _context.a(2);
        }
      }, _callee, null, [[3, 6]]);
    }));
    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "min-h-screen",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Navbar["default"], {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FadeInBackground["default"], {
      images: backgroundImages,
      activeIndex: 0
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("main", {
      className: "relative min-h-screen flex items-center justify-center py-24",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "w-full max-w-md p-8 space-y-8 bg-white/10 backdrop-blur-md rounded-lg shadow-lg",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          className: "text-3xl font-bold text-center text-white",
          children: "Formulir Pendaftaran"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
          className: "space-y-6",
          onSubmit: handleSubmit,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              htmlFor: "competition",
              className: "text-sm font-medium text-gray-300",
              children: "Pilih Lomba"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("select", {
              id: "competition",
              onChange: handleCompetitionChange,
              value: selectedCompetition,
              className: "bg-gray-700/50 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5",
              children: Object.keys(competitions).map(function (competitionName) {
                return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                  value: competitionName,
                  children: competitionName
                }, competitionName);
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
              className: "mt-2 text-sm text-gray-400",
              children: ["Ketentuan: ", competitions[selectedCompetition].group]
            })]
          }), renderDynamicField(), renderParticipantFields(), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "submit",
            className: "w-full text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",
            children: "Daftar"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "text-center text-gray-400 text-sm mt-4",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: "Mengalami kendala saat pendaftaran?"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: "Hubungi Tim IT kami:"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            href: "https://wa.me/62895386225110",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-teal-400 hover:text-teal-500 font-medium",
            children: "Tim IT (WhatsApp)"
          })]
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer["default"], {})]
  });
};
var _default = exports["default"] = RegistrationPage;