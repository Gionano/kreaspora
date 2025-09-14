"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _Navbar = _interopRequireDefault(require("../components/sections/Navbar"));
var _Footer = _interopRequireDefault(require("../components/layout/Footer"));
var _Head = _interopRequireDefault(require("next/head"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var LombaPage = function LombaPage() {
  // Typing animation logic
  (0, _react.useEffect)(function () {
    var typeAnimation = function typeAnimation(element, text, callback) {
      var i = 0;
      element.innerHTML = '';
      var _typing = function typing() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(_typing, 25);
        } else if (callback) {
          callback();
        }
      };
      _typing();
    };
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var h3 = entry.target.querySelector('h3');
          var p = entry.target.querySelector('p');
          if (h3 && p) {
            var originalH3 = h3.dataset.original;
            var originalP = p.dataset.original;
            if (originalH3 && originalP) {
              typeAnimation(h3, originalH3, function () {
                typeAnimation(p, originalP);
              });
            }
          }
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });
    document.querySelectorAll('.lomba-text').forEach(function (element) {
      observer.observe(element);
    });
    return function () {
      return observer.disconnect();
    };
  }, []);

  // Parallax scroll logic
  (0, _react.useEffect)(function () {
    var sections = document.querySelectorAll('.lomba-section');
    var smoothingFactor = 0.04;
    var animatedElements = Array.from(sections).map(function (section, index) {
      var wrapper = section.querySelector('.lomba-visual-wrapper');
      var image = wrapper === null || wrapper === void 0 ? void 0 : wrapper.querySelector('.lomba-image');
      return {
        element: image,
        isFromLeft: index % 2 === 0,
        targetX: 0,
        targetOpacity: 0,
        targetRotate: 0,
        currentX: 0,
        currentOpacity: 0,
        currentRotate: 0
      };
    });
    function updateTargets() {
      animatedElements.forEach(function (item) {
        if (!item.element) return;
        var rect = item.element.parentElement.parentElement.getBoundingClientRect();
        var viewportHeight = window.innerHeight;
        var zoneStart = viewportHeight * 0.9;
        var zoneEnd = viewportHeight * 0.1;
        var zoneHeight = zoneStart - zoneEnd;
        var elemCenter = rect.top + rect.height / 2;
        var progressInZone = (zoneStart - elemCenter) / zoneHeight;
        var tentProgress = 1 - Math.abs(progressInZone - 0.5) * 2;
        var clampedProgress = Math.max(0, Math.min(1, tentProgress));
        var initialX = item.isFromLeft ? -50 : 50;
        item.targetX = initialX - initialX * clampedProgress;
        var initialRotate = item.isFromLeft ? -8 : 8;
        item.targetRotate = initialRotate - initialRotate * clampedProgress;
        item.targetOpacity = clampedProgress;
      });
    }
    var animationFrameId;
    function animationLoop() {
      animatedElements.forEach(function (item) {
        if (!item.element) return;
        item.currentX += (item.targetX - item.currentX) * smoothingFactor;
        item.currentOpacity += (item.targetOpacity - item.currentOpacity) * smoothingFactor;
        item.currentRotate += (item.targetRotate - item.currentRotate) * smoothingFactor;
        item.element.style.opacity = item.currentOpacity.toString();
        item.element.style.transform = "translateX(".concat(item.currentX, "%)");
        item.element.style.setProperty('--rotation', "".concat(item.currentRotate, "deg"));
      });
      animationFrameId = requestAnimationFrame(animationLoop);
    }
    window.addEventListener('scroll', updateTargets, {
      passive: true
    });
    updateTargets();
    animationLoop();
    return function () {
      window.removeEventListener('scroll', updateTargets);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Head["default"], {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
        children: "Kreaspora - Lomba"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Navbar["default"], {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)("main", {
      style: {
        paddingTop: '4rem'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
        style: {
          textAlign: 'center',
          paddingTop: '5rem',
          paddingBottom: '3rem'
        },
        children: "Landing Page Lomba"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "lomba-container",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          className: "lomba-main-title",
          children: "Daftar Lomba"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
          className: "lomba-section",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "lomba-content",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "lomba-visual-wrapper",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "lomba-image",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                  src: "/background/kreativitas-1.jpg",
                  alt: "Lomba Melukis"
                })
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "lomba-text",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
                "data-original": "1. Lomba Melukis"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                "data-original": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              })]
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
          className: "lomba-section",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "lomba-content",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "lomba-visual-wrapper",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "lomba-image",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                  src: "/background/sport-1.jpg",
                  alt: "Lomba Basket"
                })
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "lomba-text",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
                "data-original": "2. Lomba Basket 3x3"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                "data-original": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              })]
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
          className: "lomba-section",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "lomba-content",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "lomba-visual-wrapper",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "lomba-image",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                  src: "/background/kreativitas-2.jpg",
                  alt: "Lomba Fotografi"
                })
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "lomba-text",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
                "data-original": "3. Lomba Fotografi"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                "data-original": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              })]
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
          className: "lomba-section",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "lomba-content",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "lomba-visual-wrapper",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "lomba-image",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                  src: "/background/sport-2.jpg",
                  alt: "Lomba Catur"
                })
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "lomba-text",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
                "data-original": "4. Lomba Catur"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                "data-original": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              })]
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
          className: "lomba-section",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "lomba-content",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "lomba-visual-wrapper",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "lomba-image",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                  src: "/background/kreativitas-3.jpg",
                  alt: "Lomba Puisi"
                })
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "lomba-text",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
                "data-original": "5. Lomba Baca Puisi"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                "data-original": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              })]
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
          className: "lomba-section",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "lomba-content",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "lomba-visual-wrapper",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "lomba-image",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                  src: "/background/sport-3.jpg",
                  alt: "Lomba Lari"
                })
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "lomba-text",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
                "data-original": "6. Lomba Lari Marathon"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                "data-original": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              })]
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
          className: "lomba-section",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "lomba-content",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "lomba-visual-wrapper",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "lomba-image",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                  src: "/img/img_lomba/blue.png",
                  alt: "Lomba Desain Grafis"
                })
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "lomba-text",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
                "data-original": "7. Lomba Desain Grafis"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                "data-original": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              })]
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
          className: "lomba-section",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "lomba-content",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "lomba-visual-wrapper",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "lomba-image",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                  src: "/img/img_lomba/blue-2.jpg",
                  alt: "Lomba Debat"
                })
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "lomba-text",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
                "data-original": "8. Lomba Debat"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                "data-original": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              })]
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
          className: "lomba-section",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "lomba-content",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "lomba-visual-wrapper",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "lomba-image",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                  src: "/background/melukis.jpg",
                  alt: "Lomba Menyanyi"
                })
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "lomba-text",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
                "data-original": "9. Lomba Menyanyi Solo"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                "data-original": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              })]
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
          className: "lomba-section",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "lomba-content",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "lomba-visual-wrapper",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "lomba-image",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                  src: "/sponsors/logo_nesta.png",
                  alt: "Lomba Band"
                })
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "lomba-text",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
                "data-original": "10. Lomba Band Akustik"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                "data-original": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              })]
            })]
          })
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer["default"], {})]
  });
};
var _default = exports["default"] = LombaPage;