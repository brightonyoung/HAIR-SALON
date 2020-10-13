"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t, n, r, o) {
  "function" == typeof define && define.amd ? define(function () {
    return e.fullpage = r(t, n), e.fullpage;
  }) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = r(t, n) : t.fullpage = r(t, n);
}(void 0, window, document, function (e, t) {
  "use strict";

  var n = "fullpage-wrapper",
      r = "." + n,
      o = "fp-responsive",
      i = "fp-notransition",
      a = "fp-destroyed",
      l = "fp-enabled",
      s = "fp-viewing",
      c = "active",
      u = "." + c,
      f = "fp-completely",
      d = "." + f,
      h = ".section",
      p = "fp-section",
      v = "." + p,
      g = v + u,
      m = "fp-tableCell",
      E = "." + m,
      b = "fp-auto-height",
      x = "fp-normal-scroll",
      T = "fp-nav",
      w = "#" + T,
      y = "fp-tooltip",
      S = "." + y,
      A = "fp-show-active",
      R = ".slide",
      L = "fp-slide",
      _ = "." + L,
      k = _ + u,
      P = "fp-slides",
      I = "." + P,
      C = "fp-slidesContainer",
      O = "." + C,
      F = "fp-table",
      M = "fp-slidesNav",
      B = "." + M,
      D = B + " a",
      U = ".fp-controlArrow",
      H = "fp-prev",
      N = "fp-controlArrow " + H,
      X = U + ("." + H),
      j = "fp-controlArrow fp-next",
      z = U + ".fp-next";

  function $(t, n) {
    e.console && e.console[t] && e.console[t]("fullPage: " + n);
  }

  function W(e, n) {
    return (n = arguments.length > 1 ? n : t) ? n.querySelectorAll(e) : null;
  }

  function Y(e) {
    e = e || {};

    for (var t = 1, n = arguments.length; t < n; ++t) {
      var r = arguments[t];
      if (r) for (var o in r) {
        r.hasOwnProperty(o) && ("[object Object]" !== Object.prototype.toString.call(r[o]) ? e[o] = r[o] : e[o] = Y(e[o], r[o]));
      }
    }

    return e;
  }

  function G(e, t) {
    return null != e && (e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className));
  }

  function q() {
    return "innerHeight" in e ? e.innerHeight : t.documentElement.offsetHeight;
  }

  function V(e, t) {
    var n;

    for (n in e = re(e), t) {
      if (t.hasOwnProperty(n) && null !== n) for (var r = 0; r < e.length; r++) {
        e[r].style[n] = t[n];
      }
    }

    return e;
  }

  function K(e, t, n) {
    for (var r = e[n]; r && !ye(r, t);) {
      r = r[n];
    }

    return r;
  }

  function Q(e, t) {
    return K(e, t, "previousElementSibling");
  }

  function J(e, t) {
    return K(e, t, "nextElementSibling");
  }

  function Z(e) {
    return e.previousElementSibling;
  }

  function ee(e) {
    return e.nextElementSibling;
  }

  function te(e) {
    return e[e.length - 1];
  }

  function ne(e, t) {
    e = ae(e) ? e[0] : e;

    for (var n = null != t ? W(t, e.parentNode) : e.parentNode.childNodes, r = 0, o = 0; o < n.length; o++) {
      if (n[o] == e) return r;
      1 == n[o].nodeType && r++;
    }

    return -1;
  }

  function re(e) {
    return ae(e) ? e : [e];
  }

  function oe(e) {
    e = re(e);

    for (var t = 0; t < e.length; t++) {
      e[t].style.display = "none";
    }

    return e;
  }

  function ie(e) {
    e = re(e);

    for (var t = 0; t < e.length; t++) {
      e[t].style.display = "block";
    }

    return e;
  }

  function ae(e) {
    return "[object Array]" === Object.prototype.toString.call(e) || "[object NodeList]" === Object.prototype.toString.call(e);
  }

  function le(e, t) {
    e = re(e);

    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.classList ? r.classList.add(t) : r.className += " " + t;
    }

    return e;
  }

  function se(e, t) {
    e = re(e);

    for (var n = t.split(" "), r = 0; r < n.length; r++) {
      t = n[r];

      for (var o = 0; o < e.length; o++) {
        var i = e[o];
        i.classList ? i.classList.remove(t) : i.className = i.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ");
      }
    }

    return e;
  }

  function ce(e, t) {
    t.appendChild(e);
  }

  function ue(e, n, r) {
    var o;
    n = n || t.createElement("div");

    for (var i = 0; i < e.length; i++) {
      var a = e[i];
      (r && !i || !r) && (o = n.cloneNode(!0), a.parentNode.insertBefore(o, a)), o.appendChild(a);
    }

    return e;
  }

  function fe(e, t) {
    ue(e, t, !0);
  }

  function de(e, t) {
    for ("string" == typeof t && (t = Ae(t)), e.appendChild(t); e.firstChild !== t;) {
      t.appendChild(e.firstChild);
    }
  }

  function he(e) {
    for (var n = t.createDocumentFragment(); e.firstChild;) {
      n.appendChild(e.firstChild);
    }

    e.parentNode.replaceChild(n, e);
  }

  function pe(e, t) {
    return e && 1 === e.nodeType ? ye(e, t) ? e : pe(e.parentNode, t) : null;
  }

  function ve(e, t) {
    me(e, e.nextSibling, t);
  }

  function ge(e, t) {
    me(e, e, t);
  }

  function me(e, t, n) {
    ae(n) || ("string" == typeof n && (n = Ae(n)), n = [n]);

    for (var r = 0; r < n.length; r++) {
      e.parentNode.insertBefore(n[r], t);
    }
  }

  function Ee() {
    var n = t.documentElement;
    return (e.pageYOffset || n.scrollTop) - (n.clientTop || 0);
  }

  function be(e) {
    return Array.prototype.filter.call(e.parentNode.children, function (t) {
      return t !== e;
    });
  }

  function xe(e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = !1;
  }

  function Te(e) {
    if ("function" == typeof e) return !0;
    var t = Object.prototype.toString(e);
    return "[object Function]" === t || "[object GeneratorFunction]" === t;
  }

  function we(n, r, o) {
    var i;
    o = void 0 === o ? {} : o, "function" == typeof e.CustomEvent ? i = new CustomEvent(r, {
      detail: o
    }) : (i = t.createEvent("CustomEvent")).initCustomEvent(r, !0, !0, o), n.dispatchEvent(i);
  }

  function ye(e, t) {
    return (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t);
  }

  function Se(e, t) {
    if ("boolean" == typeof t) for (var n = 0; n < e.length; n++) {
      e[n].style.display = t ? "block" : "none";
    }
    return e;
  }

  function Ae(e) {
    var n = t.createElement("div");
    return n.innerHTML = e.trim(), n.firstChild;
  }

  function Re(e) {
    e = re(e);

    for (var t = 0; t < e.length; t++) {
      var n = e[t];
      n && n.parentElement && n.parentNode.removeChild(n);
    }
  }

  function Le(e, t, n) {
    for (var r = e[n], o = []; r;) {
      (ye(r, t) || null == t) && o.push(r), r = r[n];
    }

    return o;
  }

  function _e(e, t) {
    return Le(e, t, "nextElementSibling");
  }

  function ke(e, t) {
    return Le(e, t, "previousElementSibling");
  }

  return e.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function (t, n) {
    n = n || e;

    for (var r = 0; r < this.length; r++) {
      t.call(n, this[r], r, this);
    }
  }), e.fp_utils = {
    $: W,
    deepExtend: Y,
    hasClass: G,
    getWindowHeight: q,
    css: V,
    until: K,
    prevUntil: Q,
    nextUntil: J,
    prev: Z,
    next: ee,
    last: te,
    index: ne,
    getList: re,
    hide: oe,
    show: ie,
    isArrayOrList: ae,
    addClass: le,
    removeClass: se,
    appendTo: ce,
    wrap: ue,
    wrapAll: fe,
    wrapInner: de,
    unwrap: he,
    closest: pe,
    after: ve,
    before: ge,
    insertBefore: me,
    getScrollTop: Ee,
    siblings: be,
    preventDefault: xe,
    isFunction: Te,
    trigger: we,
    matches: ye,
    toggle: Se,
    createElementFromHTML: Ae,
    remove: Re,
    filter: function filter(e, t) {
      Array.prototype.filter.call(e, t);
    },
    untilAll: Le,
    nextAll: _e,
    prevAll: ke,
    showError: $
  }, function (K, re) {
    var ae = re && new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(re.licenseKey) || t.domain.indexOf("alvarotrigo.com") > -1;

    if (!G(W("html"), l)) {
      var ue = W("html, body"),
          me = W("body")[0],
          Le = {};
      re = Y({
        menu: !1,
        anchors: [],
        lockAnchors: !1,
        navigation: !1,
        navigationPosition: "right",
        navigationTooltips: [],
        showActiveTooltip: !1,
        slidesNavigation: !1,
        slidesNavPosition: "bottom",
        scrollBar: !1,
        hybrid: !1,
        css3: !0,
        scrollingSpeed: 700,
        autoScrolling: !0,
        fitToSection: !0,
        fitToSectionDelay: 1e3,
        easing: "easeInOutCubic",
        easingcss3: "ease",
        loopBottom: !1,
        loopTop: !1,
        loopHorizontal: !0,
        continuousVertical: !1,
        continuousHorizontal: !1,
        scrollHorizontally: !1,
        interlockedSlides: !1,
        dragAndMove: !1,
        offsetSections: !1,
        resetSliders: !1,
        fadingEffect: !1,
        normalScrollElements: null,
        scrollOverflow: !1,
        scrollOverflowReset: !1,
        scrollOverflowHandler: e.fp_scrolloverflow ? e.fp_scrolloverflow.iscrollHandler : null,
        scrollOverflowOptions: null,
        touchSensitivity: 5,
        touchWrapper: "string" == typeof K ? W(K)[0] : K,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,
        keyboardScrolling: !0,
        animateAnchor: !0,
        recordHistory: !0,
        controlArrows: !0,
        controlArrowColor: "#fff",
        verticalCentered: !0,
        sectionsColor: [],
        paddingTop: 0,
        paddingBottom: 0,
        fixedElements: null,
        responsive: 0,
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: !1,
        parallax: !1,
        parallaxOptions: {
          type: "reveal",
          percentage: 62,
          property: "translate"
        },
        cards: !1,
        cardsOptions: {
          perspective: 100,
          fadeContent: !0,
          fadeBackground: !0
        },
        sectionSelector: h,
        slideSelector: R,
        v2compatible: !1,
        afterLoad: null,
        onLeave: null,
        afterRender: null,
        afterResize: null,
        afterReBuild: null,
        afterSlideLoad: null,
        onSlideLeave: null,
        afterResponsive: null,
        lazyLoading: !0
      }, re);
      var Pe,
          Ie,
          Ce,
          Oe,
          Fe = !1,
          Me = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
          Be = "ontouchstart" in e || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
          De = "string" == typeof K ? W(K)[0] : K,
          Ue = q(),
          He = !1,
          Ne = !0,
          Xe = !0,
          je = [],
          ze = {
        m: {
          up: !0,
          down: !0,
          left: !0,
          right: !0
        }
      };
      ze.k = Y({}, ze.m);
      var $e,
          We,
          Ye,
          Ge,
          qe,
          Ve,
          Ke,
          Qe = e.PointerEvent ? {
        down: "pointerdown",
        move: "pointermove"
      } : {
        down: "MSPointerDown",
        move: "MSPointerMove"
      },
          Je = {
        touchmove: "ontouchmove" in e ? "touchmove" : Qe.move,
        touchstart: "ontouchstart" in e ? "touchstart" : Qe.down
      },
          Ze = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
          et = !1;

      try {
        var tt = Object.defineProperty({}, "passive", {
          get: function get() {
            et = !0;
          }
        });
        e.addEventListener("testPassive", null, tt), e.removeEventListener("testPassive", null, tt);
      } catch (e) {}

      var nt,
          rt = Y({}, re),
          ot = !1,
          it = !0;
      $n(), e.fp_easings = Y(e.fp_easings, {
        easeInOutCubic: function easeInOutCubic(e, t, n, r) {
          return (e /= r / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t;
        }
      }), De && (Le.version = "3.0.5", Le.setAutoScrolling = gt, Le.setRecordHistory = mt, Le.setScrollingSpeed = Et, Le.setFitToSection = bt, Le.setLockAnchors = function (e) {
        re.lockAnchors = e;
      }, Le.setMouseWheelScrolling = xt, Le.setAllowScrolling = Tt, Le.setKeyboardScrolling = yt, Le.moveSectionUp = St, Le.moveSectionDown = At, Le.silentMoveTo = Rt, Le.moveTo = Lt, Le.moveSlideRight = _t, Le.moveSlideLeft = kt, Le.fitToSection = Xt, Le.reBuild = Pt, Le.setResponsive = It, Le.getFullpageData = function () {
        return re;
      }, Le.destroy = function (n) {
        gt(!1, "internal"), Tt(!0), wt(!1), yt(!1), le(De, a), clearTimeout(Ge), clearTimeout(Ye), clearTimeout(We), clearTimeout(qe), clearTimeout(Ve), e.removeEventListener("scroll", Nt), e.removeEventListener("hashchange", fn), e.removeEventListener("resize", wn), t.removeEventListener("keydown", hn), t.removeEventListener("keyup", pn), ["click", "touchstart"].forEach(function (e) {
          t.removeEventListener(e, Ct);
        }), ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function (e) {
          t.removeEventListener(e, Ft, !0);
        }), clearTimeout(Ge), clearTimeout(Ye), n && (Nn(0), W("img[data-src], source[data-src], audio[data-src], iframe[data-src]", De).forEach(function (e) {
          rn(e, "src");
        }), W("img[data-srcset]").forEach(function (e) {
          rn(e, "srcset");
        }), Re(W(w + ", " + B + ", " + U)), V(W(v), {
          height: "",
          "background-color": "",
          padding: ""
        }), V(W(_), {
          width: ""
        }), V(De, {
          height: "",
          position: "",
          "-ms-touch-action": "",
          "touch-action": ""
        }), V(ue, {
          overflow: "",
          height: ""
        }), se(W("html"), l), se(me, o), me.className.split(/\s+/).forEach(function (e) {
          0 === e.indexOf(s) && se(me, e);
        }), W(v + ", " + _).forEach(function (e) {
          re.scrollOverflowHandler && re.scrollOverflow && re.scrollOverflowHandler.remove(e), se(e, F + " " + c + " " + f);
          var t = e.getAttribute("data-fp-styles");
          t && e.setAttribute("style", e.getAttribute("data-fp-styles")), G(e, p) && !ot && e.removeAttribute("data-anchor");
        }), An(De), [E, O, I].forEach(function (e) {
          W(e, De).forEach(function (e) {
            he(e);
          });
        }), V(De, {
          "-webkit-transition": "none",
          transition: "none"
        }), e.scrollTo(0, 0), [p, L, C].forEach(function (e) {
          se(W("." + e), e);
        }));
      }, Le.getActiveSection = function () {
        return new qn(W(g)[0]);
      }, Le.getActiveSlide = function () {
        return en(W(k, W(g)[0])[0]);
      }, Le.test = {
        top: "0px",
        translate3d: "translate3d(0px, 0px, 0px)",
        translate3dH: function () {
          for (var e = [], t = 0; t < W(re.sectionSelector, De).length; t++) {
            e.push("translate3d(0px, 0px, 0px)");
          }

          return e;
        }(),
        left: function () {
          for (var e = [], t = 0; t < W(re.sectionSelector, De).length; t++) {
            e.push(0);
          }

          return e;
        }(),
        options: re,
        setAutoScrolling: gt
      }, Le.shared = {
        afterRenderActions: Ht
      }, e.fullpage_api = Le, re.$ && (re.$.fn.fullpage = Le), re.css3 && (re.css3 = function () {
        var n,
            r = t.createElement("p"),
            o = {
          webkitTransform: "-webkit-transform",
          OTransform: "-o-transform",
          msTransform: "-ms-transform",
          MozTransform: "-moz-transform",
          transform: "transform"
        };

        for (var i in r.style.display = "block", t.body.insertBefore(r, null), o) {
          void 0 !== r.style[i] && (r.style[i] = "translate3d(1px,1px,1px)", n = e.getComputedStyle(r).getPropertyValue(o[i]));
        }

        return t.body.removeChild(r), void 0 !== n && n.length > 0 && "none" !== n;
      }()), re.scrollBar = re.scrollBar || re.hybrid, function () {
        if (!re.anchors.length) {
          var e = "[data-anchor]",
              t = W(re.sectionSelector.split(",").join(e + ",") + e, De);
          t.length && (ot = !0, t.forEach(function (e) {
            re.anchors.push(e.getAttribute("data-anchor").toString());
          }));
        }

        if (!re.navigationTooltips.length) {
          var e = "[data-tooltip]",
              n = W(re.sectionSelector.split(",").join(e + ",") + e, De);
          n.length && n.forEach(function (e) {
            re.navigationTooltips.push(e.getAttribute("data-tooltip").toString());
          });
        }
      }(), function () {
        V(De, {
          height: "100%",
          position: "relative"
        }), le(De, n), le(W("html"), l), Ue = q(), se(De, a), le(W(re.sectionSelector, De), p), le(W(re.slideSelector, De), L);

        for (var e = W(v), r = 0; r < e.length; r++) {
          var o = r,
              i = e[r],
              s = W(_, i),
              u = s.length;
          i.setAttribute("data-fp-styles", i.getAttribute("style")), Bt(i, o), Dt(i, o), u > 0 ? Mt(i, s, u) : re.verticalCentered && _n(i);
        }

        re.fixedElements && re.css3 && W(re.fixedElements).forEach(function (e) {
          me.appendChild(e);
        }), re.navigation && function () {
          var e = t.createElement("div");
          e.setAttribute("id", T);
          var n = t.createElement("ul");
          e.appendChild(n), ce(e, me);
          var r = W(w)[0];
          le(r, "fp-" + re.navigationPosition), re.showActiveTooltip && le(r, A);

          for (var o = "", i = 0; i < W(v).length; i++) {
            var a = "";
            re.anchors.length && (a = re.anchors[i]), o += '<li><a href="#' + a + '"><span class="fp-sr-only">' + Ut(i, "Section") + "</span><span></span></a>";
            var l = re.navigationTooltips[i];
            void 0 !== l && "" !== l && (o += '<div class="' + y + " fp-" + re.navigationPosition + '">' + l + "</div>"), o += "</li>";
          }

          W("ul", r)[0].innerHTML = o, V(W(w), {
            "margin-top": "-" + W(w)[0].offsetHeight / 2 + "px"
          });
          var s = W("li", W(w)[0])[ne(W(g)[0], v)];
          le(W("a", s), c);
        }(), W('iframe[src*="youtube.com/embed/"]', De).forEach(function (e) {
          var t, n, r;
          n = "enablejsapi=1", r = (t = e).getAttribute("src"), t.setAttribute("src", r + (/\?/.test(r) ? "&" : "?") + n);
        }), re.scrollOverflow && ($e = re.scrollOverflowHandler.init(re));
      }(), Tt(!0), wt(!0), gt(re.autoScrolling, "internal"), yn(), Dn(), "complete" === t.readyState && un(), e.addEventListener("load", un), re.scrollOverflow || Ht(), e.addEventListener("scroll", Nt), e.addEventListener("hashchange", fn), e.addEventListener("blur", En), e.addEventListener("resize", wn), t.addEventListener("keydown", hn), t.addEventListener("keyup", pn), ["click", "touchstart"].forEach(function (e) {
        t.addEventListener(e, Ct);
      }), re.normalScrollElements && (["mouseenter", "touchstart"].forEach(function (e) {
        Ot(e, !1);
      }), ["mouseleave", "touchend"].forEach(function (e) {
        Ot(e, !0);
      })));
      var at = !1,
          lt = 0,
          st = 0,
          ct = 0,
          ut = 0,
          ft = 0,
          dt = new Date().getTime(),
          ht = 0,
          pt = 0,
          vt = Ue;
      return Le;
    }

    function gt(e, t) {
      e || Nn(0), zn("autoScrolling", e, t);
      var n = W(g)[0];
      if (re.autoScrolling && !re.scrollBar) V(ue, {
        overflow: "hidden",
        height: "100%"
      }), mt(rt.recordHistory, "internal"), V(De, {
        "-ms-touch-action": "none",
        "touch-action": "none"
      }), null != n && Nn(n.offsetTop);else if (V(ue, {
        overflow: "visible",
        height: "initial"
      }), mt(!!re.autoScrolling && rt.recordHistory, "internal"), V(De, {
        "-ms-touch-action": "",
        "touch-action": ""
      }), null != n) {
        var r = tn(n.offsetTop);
        r.element.scrollTo(0, r.options);
      }
    }

    function mt(e, t) {
      zn("recordHistory", e, t);
    }

    function Et(e, t) {
      zn("scrollingSpeed", e, t);
    }

    function bt(e, t) {
      zn("fitToSection", e, t);
    }

    function xt(n) {
      n ? (function () {
        var n,
            r = "";
        e.addEventListener ? n = "addEventListener" : (n = "attachEvent", r = "on");
        var o = "onwheel" in t.createElement("div") ? "wheel" : void 0 !== t.onmousewheel ? "mousewheel" : "DOMMouseScroll",
            i = !!et && {
          passive: !1
        };
        "DOMMouseScroll" == o ? t[n](r + "MozMousePixelScroll", qt, i) : t[n](r + o, qt, i);
      }(), De.addEventListener("mousedown", vn), De.addEventListener("mouseup", gn)) : (t.addEventListener ? (t.removeEventListener("mousewheel", qt, !1), t.removeEventListener("wheel", qt, !1), t.removeEventListener("MozMousePixelScroll", qt, !1)) : t.detachEvent("onmousewheel", qt), De.removeEventListener("mousedown", vn), De.removeEventListener("mouseup", gn));
    }

    function Tt(e, t) {
      void 0 !== t ? (t = t.replace(/ /g, "").split(",")).forEach(function (t) {
        jn(e, t, "m");
      }) : jn(e, "all", "m");
    }

    function wt(e) {
      e ? (xt(!0), function () {
        if (Me || Be) {
          re.autoScrolling && (me.removeEventListener(Je.touchmove, zt, {
            passive: !1
          }), me.addEventListener(Je.touchmove, zt, {
            passive: !1
          }));
          var e = re.touchWrapper;
          e.removeEventListener(Je.touchstart, Yt), e.removeEventListener(Je.touchmove, $t, {
            passive: !1
          }), e.addEventListener(Je.touchstart, Yt), e.addEventListener(Je.touchmove, $t, {
            passive: !1
          });
        }
      }()) : (xt(!1), function () {
        if (Me || Be) {
          re.autoScrolling && (me.removeEventListener(Je.touchmove, $t, {
            passive: !1
          }), me.removeEventListener(Je.touchmove, zt, {
            passive: !1
          }));
          var e = re.touchWrapper;
          e.removeEventListener(Je.touchstart, Yt), e.removeEventListener(Je.touchmove, $t, {
            passive: !1
          });
        }
      }());
    }

    function yt(e, t) {
      void 0 !== t ? (t = t.replace(/ /g, "").split(",")).forEach(function (t) {
        jn(e, t, "k");
      }) : (jn(e, "all", "k"), re.keyboardScrolling = e);
    }

    function St() {
      var e = Q(W(g)[0], v);
      e || !re.loopTop && !re.continuousVertical || (e = te(W(v))), null != e && Qt(e, null, !0);
    }

    function At() {
      var e = J(W(g)[0], v);
      e || !re.loopBottom && !re.continuousVertical || (e = W(v)[0]), null != e && Qt(e, null, !1);
    }

    function Rt(e, t) {
      Et(0, "internal"), Lt(e, t), Et(rt.scrollingSpeed, "internal");
    }

    function Lt(e, t) {
      var n = In(e);
      void 0 !== t ? Cn(e, t) : null != n && Qt(n);
    }

    function _t(e) {
      Vt("right", e);
    }

    function kt(e) {
      Vt("left", e);
    }

    function Pt(t) {
      if (!G(De, a)) {
        He = !0, Ue = q();

        for (var n = W(v), r = 0; r < n.length; ++r) {
          var o = n[r],
              i = W(I, o)[0],
              l = W(_, o);
          re.verticalCentered && V(W(E, o), {
            height: kn(o) + "px"
          }), V(o, {
            height: Ue + "px"
          }), l.length > 1 && xn(i, W(k, i)[0]);
        }

        re.scrollOverflow && $e.createScrollBarForAll();
        var s = ne(W(g)[0], v);
        s && Rt(s + 1), He = !1, Te(re.afterResize) && t && re.afterResize.call(De, e.innerWidth, e.innerHeight), Te(re.afterReBuild) && !t && re.afterReBuild.call(De);
      }
    }

    function It(e) {
      var t = G(me, o);
      e ? t || (gt(!1, "internal"), bt(!1, "internal"), oe(W(w)), le(me, o), Te(re.afterResponsive) && re.afterResponsive.call(De, e), re.scrollOverflow && $e.createScrollBarForAll()) : t && (gt(rt.autoScrolling, "internal"), bt(rt.autoScrolling, "internal"), ie(W(w)), se(me, o), Te(re.afterResponsive) && re.afterResponsive.call(De, e));
    }

    function Ct(e) {
      var t = e.target;
      t && pe(t, w + " a") ? function (e) {
        xe(e);
        var t = ne(pe(this, w + " li"));
        Qt(W(v)[t]);
      }.call(t, e) : ye(t, S) ? function () {
        we(Z(this), "click");
      }.call(t) : ye(t, U) ? function () {
        var e = pe(this, v);
        G(this, H) ? ze.m.left && kt(e) : ze.m.right && _t(e);
      }.call(t, e) : ye(t, D) || null != pe(t, D) ? function (e) {
        xe(e);
        var t = W(I, pe(this, v))[0],
            n = W(_, t)[ne(pe(this, "li"))];
        xn(t, n);
      }.call(t, e) : pe(t, re.menu + " [data-menuanchor]") && function (e) {
        !W(re.menu)[0] || !re.lockAnchors && re.anchors.length || (xe(e), Lt(this.getAttribute("data-menuanchor")));
      }.call(t, e);
    }

    function Ot(e, n) {
      t["fp_" + e] = n, t.addEventListener(e, Ft, !0);
    }

    function Ft(e) {
      e.target != t && ("touchend" === e.type && (it = !1, setTimeout(function () {
        it = !0;
      }, 800)), ("mouseenter" !== e.type || it) && re.normalScrollElements.split(",").forEach(function (n) {
        null != pe(e.target, n) && wt(t["fp_" + e.type]);
      }));
    }

    function Mt(e, n, r) {
      var o = 100 * r,
          i = 100 / r,
          a = t.createElement("div");
      a.className = P, fe(n, a);
      var l = t.createElement("div");
      l.className = C, fe(n, l), V(W(O, e), {
        width: o + "%"
      }), r > 1 && (re.controlArrows && function (e) {
        var t = [Ae('<div class="' + N + '"></div>'), Ae('<div class="' + j + '"></div>')];
        ve(W(I, e)[0], t), "#fff" !== re.controlArrowColor && (V(W(z, e), {
          "border-color": "transparent transparent transparent " + re.controlArrowColor
        }), V(W(X, e), {
          "border-color": "transparent " + re.controlArrowColor + " transparent transparent"
        })), re.loopHorizontal || oe(W(X, e));
      }(e), re.slidesNavigation && function (e, t) {
        ce(Ae('<div class="' + M + '"><ul></ul></div>'), e);
        var n = W(B, e)[0];
        le(n, "fp-" + re.slidesNavPosition);

        for (var r = 0; r < t; r++) {
          ce(Ae('<li><a href="#"><span class="fp-sr-only">' + Ut(r, "Slide") + "</span><span></span></a></li>"), W("ul", n)[0]);
        }

        V(n, {
          "margin-left": "-" + n.innerWidth / 2 + "px"
        }), le(W("a", W("li", n)[0]), c);
      }(e, r)), n.forEach(function (e) {
        V(e, {
          width: i + "%"
        }), re.verticalCentered && _n(e);
      });
      var s = W(k, e)[0];
      null != s && (0 !== ne(W(g), v) || 0 === ne(W(g), v) && 0 !== ne(s)) ? Hn(s, "internal") : le(n[0], c);
    }

    function Bt(e, t) {
      t || null != W(g)[0] || le(e, c), Oe = W(g)[0], V(e, {
        height: Ue + "px"
      }), re.paddingTop && V(e, {
        "padding-top": re.paddingTop
      }), re.paddingBottom && V(e, {
        "padding-bottom": re.paddingBottom
      }), void 0 !== re.sectionsColor[t] && V(e, {
        "background-color": re.sectionsColor[t]
      }), void 0 !== re.anchors[t] && e.setAttribute("data-anchor", re.anchors[t]);
    }

    function Dt(e, t) {
      void 0 !== re.anchors[t] && G(e, c) && Rn(re.anchors[t], t), re.menu && re.css3 && null != pe(W(re.menu)[0], r) && W(re.menu).forEach(function (e) {
        me.appendChild(e);
      });
    }

    function Ut(e, t) {
      return re.navigationTooltips[e] || re.anchors[e] || t + " " + (e + 1);
    }

    function Ht() {
      var e,
          t = W(g)[0];
      le(t, f), on(t), an(t), re.scrollOverflow && re.scrollOverflowHandler.afterLoad(), (!(e = In(dn().section)) || void 0 !== e && ne(e) === ne(Oe)) && Te(re.afterLoad) && Jt("afterLoad", {
        activeSection: null,
        element: t,
        direction: null,
        anchorLink: t.getAttribute("data-anchor"),
        sectionIndex: ne(t, v)
      }), Te(re.afterRender) && Jt("afterRender");
    }

    function Nt() {
      var e, t, n, r;

      if (!re.autoScrolling || re.scrollBar) {
        var o = Ee(),
            i = function (e) {
          var t = e > lt ? "down" : "up";
          return lt = e, ht = e, t;
        }(o),
            a = 0,
            l = o + q() / 2,
            s = me.offsetHeight - q() === o,
            u = W(v);

        if (s) a = u.length - 1;else if (o) for (var d = 0; d < u.length; ++d) {
          u[d].offsetTop <= l && (a = d);
        } else a = 0;

        if (t = i, n = W(g)[0].offsetTop, r = n + q(), ("up" == t ? r >= Ee() + q() : n <= Ee()) && (G(W(g)[0], f) || (le(W(g)[0], f), se(be(W(g)[0]), f))), !G(e = u[a], c)) {
          at = !0;
          var h,
              p,
              m = W(g)[0],
              E = ne(m, v) + 1,
              b = Ln(e),
              x = e.getAttribute("data-anchor"),
              T = ne(e, v) + 1,
              w = W(k, e)[0],
              y = {
            activeSection: m,
            sectionIndex: T - 1,
            anchorLink: x,
            element: e,
            leavingSection: E,
            direction: b
          };
          w && (p = w.getAttribute("data-anchor"), h = ne(w)), Xe && (le(e, c), se(be(e), c), Te(re.onLeave) && Jt("onLeave", y), Te(re.afterLoad) && Jt("afterLoad", y), sn(m), on(e), an(e), Rn(x, T - 1), re.anchors.length && (Pe = x), Fn(h, p, x)), clearTimeout(qe), qe = setTimeout(function () {
            at = !1;
          }, 100);
        }

        re.fitToSection && (clearTimeout(Ve), Ve = setTimeout(function () {
          re.fitToSection && W(g)[0].offsetHeight <= Ue && Xt();
        }, re.fitToSectionDelay));
      }
    }

    function Xt() {
      Xe && (He = !0, Qt(W(g)[0]), He = !1);
    }

    function jt(e) {
      if (ze.m[e]) {
        var t = "down" === e ? At : St;

        if (re.scrollOverflow) {
          var n = re.scrollOverflowHandler.scrollable(W(g)[0]),
              r = "down" === e ? "bottom" : "top";

          if (null != n) {
            if (!re.scrollOverflowHandler.isScrolled(r, n)) return !0;
            t();
          } else t();
        } else t();
      }
    }

    function zt(e) {
      re.autoScrolling && Wt(e) && ze.m.up && xe(e);
    }

    function $t(t) {
      var n = pe(t.target, v) || W(g)[0];

      if (Wt(t)) {
        re.autoScrolling && xe(t);
        var r = Un(t);
        ut = r.y, ft = r.x, W(I, n).length && Math.abs(ct - ft) > Math.abs(st - ut) ? !Fe && Math.abs(ct - ft) > e.innerWidth / 100 * re.touchSensitivity && (ct > ft ? ze.m.right && _t(n) : ze.m.left && kt(n)) : re.autoScrolling && Xe && Math.abs(st - ut) > e.innerHeight / 100 * re.touchSensitivity && (st > ut ? jt("down") : ut > st && jt("up"));
      }
    }

    function Wt(e) {
      return void 0 === e.pointerType || "mouse" != e.pointerType;
    }

    function Yt(e) {
      if (re.fitToSection && (nt = !1), Wt(e)) {
        var t = Un(e);
        st = t.y, ct = t.x;
      }
    }

    function Gt(e, t) {
      for (var n = 0, r = e.slice(Math.max(e.length - t, 1)), o = 0; o < r.length; o++) {
        n += r[o];
      }

      return Math.ceil(n / t);
    }

    function qt(t) {
      var n = new Date().getTime(),
          r = G(W(d)[0], x);
      if (!ze.m.down && !ze.m.up) return xe(t), !1;

      if (re.autoScrolling && !Ce && !r) {
        var o = (t = t || e.event).wheelDelta || -t.deltaY || -t.detail,
            i = Math.max(-1, Math.min(1, o)),
            a = void 0 !== t.wheelDeltaX || void 0 !== t.deltaX,
            l = Math.abs(t.wheelDeltaX) < Math.abs(t.wheelDelta) || Math.abs(t.deltaX) < Math.abs(t.deltaY) || !a;
        je.length > 149 && je.shift(), je.push(Math.abs(o)), re.scrollBar && xe(t);
        var s = n - dt;
        return dt = n, s > 200 && (je = []), Xe && Gt(je, 10) >= Gt(je, 70) && l && jt(i < 0 ? "down" : "up"), !1;
      }

      re.fitToSection && (nt = !1);
    }

    function Vt(e, t) {
      var n = null == t ? W(g)[0] : t,
          r = W(I, n)[0];

      if (!(null == r || Fe || W(_, r).length < 2)) {
        var o = W(k, r)[0],
            i = null;

        if (null == (i = "left" === e ? Q(o, _) : J(o, _))) {
          if (!re.loopHorizontal) return;
          var a = be(o);
          i = "left" === e ? a[a.length - 1] : a[0];
        }

        Fe = !Le.test.isTesting, xn(r, i, e);
      }
    }

    function Kt() {
      for (var e = W(k), t = 0; t < e.length; t++) {
        Hn(e[t], "internal");
      }
    }

    function Qt(e, t, n) {
      if (null != e) {
        var r,
            o,
            i = {
          element: e,
          callback: t,
          isMovementUp: n,
          dtop: function (e) {
            var t = e.offsetHeight,
                n = e.offsetTop,
                r = n,
                o = n > ht,
                i = r - Ue + t,
                a = re.bigSectionsDestination;
            return t > Ue ? (o || a) && "bottom" !== a || (r = i) : (o || He && null == ee(e)) && (r = i), ht = r, r;
          }(e),
          yMovement: Ln(e),
          anchorLink: e.getAttribute("data-anchor"),
          sectionIndex: ne(e, v),
          activeSlide: W(k, e)[0],
          activeSection: W(g)[0],
          leavingSection: ne(W(g), v) + 1,
          localIsResizing: He
        };

        if (!(i.activeSection == e && !He || re.scrollBar && Ee() === i.dtop && !G(e, b))) {
          if (null != i.activeSlide && (r = i.activeSlide.getAttribute("data-anchor"), o = ne(i.activeSlide)), !i.localIsResizing) {
            var a = i.yMovement;
            if (void 0 !== n && (a = n ? "up" : "down"), i.direction = a, Te(re.onLeave) && !1 === Jt("onLeave", i)) return;
          }

          re.autoScrolling && re.continuousVertical && void 0 !== i.isMovementUp && (!i.isMovementUp && "up" == i.yMovement || i.isMovementUp && "down" == i.yMovement) && (i = function (e) {
            return e.isMovementUp ? ge(W(g)[0], _e(e.activeSection, v)) : ve(W(g)[0], ke(e.activeSection, v).reverse()), Nn(W(g)[0].offsetTop), Kt(), e.wrapAroundElements = e.activeSection, e.dtop = e.element.offsetTop, e.yMovement = Ln(e.element), e.leavingSection = ne(e.activeSection, v) + 1, e.sectionIndex = ne(e.element, v), e;
          }(i)), i.localIsResizing || sn(i.activeSection), re.scrollOverflow && re.scrollOverflowHandler.beforeLeave(), le(e, c), se(be(e), c), on(e), re.scrollOverflow && re.scrollOverflowHandler.onLeave(), Xe = Le.test.isTesting, Fn(o, r, i.anchorLink, i.sectionIndex), function (e) {
            if (re.css3 && re.autoScrolling && !re.scrollBar) {
              var t = "translate3d(0px, -" + Math.round(e.dtop) + "px, 0px)";
              Pn(t, !0), re.scrollingSpeed ? (clearTimeout(Ye), Ye = setTimeout(function () {
                nn(e);
              }, re.scrollingSpeed)) : nn(e);
            } else {
              var n = tn(e.dtop);
              Le.test.top = -e.dtop + "px", Wn(n.element, n.options, re.scrollingSpeed, function () {
                re.scrollBar ? setTimeout(function () {
                  nn(e);
                }, 30) : nn(e);
              });
            }
          }(i), Pe = i.anchorLink, Rn(i.anchorLink, i.sectionIndex);
        }
      }
    }

    function Jt(e, t) {
      var n,
          r = function (e, t) {
        var n;
        return (n = re.v2compatible ? {
          afterRender: function afterRender() {
            return [De];
          },
          onLeave: function onLeave() {
            return [t.activeSection, t.leavingSection, t.sectionIndex + 1, t.direction];
          },
          afterLoad: function afterLoad() {
            return [t.element, t.anchorLink, t.sectionIndex + 1];
          },
          afterSlideLoad: function afterSlideLoad() {
            return [t.destiny, t.anchorLink, t.sectionIndex + 1, t.slideAnchor, t.slideIndex];
          },
          onSlideLeave: function onSlideLeave() {
            return [t.prevSlide, t.anchorLink, t.sectionIndex + 1, t.prevSlideIndex, t.direction, t.slideIndex];
          }
        } : {
          afterRender: function afterRender() {
            return {
              section: Zt(W(g)[0]),
              slide: en(W(k, W(g)[0])[0])
            };
          },
          onLeave: function onLeave() {
            return {
              origin: Zt(t.activeSection),
              destination: Zt(t.element),
              direction: t.direction
            };
          },
          afterLoad: function afterLoad() {
            return n.onLeave();
          },
          afterSlideLoad: function afterSlideLoad() {
            return {
              section: Zt(t.section),
              origin: en(t.prevSlide),
              destination: en(t.destiny),
              direction: t.direction
            };
          },
          onSlideLeave: function onSlideLeave() {
            return n.afterSlideLoad();
          }
        })[e]();
      }(e, t);

      if (re.v2compatible) {
        if (!1 === re[e].apply(r[0], r.slice(1))) return !1;
      } else if (we(De, e, r), !1 === re[e].apply(r[Object.keys(r)[0]], (n = r, Object.keys(n).map(function (e) {
        return n[e];
      })))) return !1;

      return !0;
    }

    function Zt(e) {
      return e ? new qn(e) : null;
    }

    function en(e) {
      return e ? new Vn(e) : null;
    }

    function tn(t) {
      var n = {};
      return re.autoScrolling && !re.scrollBar ? (n.options = -t, n.element = W(r)[0]) : (n.options = t, n.element = e), n;
    }

    function nn(e) {
      !function (e) {
        null != e.wrapAroundElements && (e.isMovementUp ? ge(W(v)[0], e.wrapAroundElements) : ve(W(v)[W(v).length - 1], e.wrapAroundElements), Nn(W(g)[0].offsetTop), Kt());
      }(e), Te(re.afterLoad) && !e.localIsResizing && Jt("afterLoad", e), re.scrollOverflow && re.scrollOverflowHandler.afterLoad(), e.localIsResizing || an(e.element), le(e.element, f), se(be(e.element), f), Xe = !0, Te(e.callback) && e.callback();
    }

    function rn(e, t) {
      e.setAttribute(t, e.getAttribute("data-" + t)), e.removeAttribute("data-" + t);
    }

    function on(e) {
      re.lazyLoading && W("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", cn(e)).forEach(function (e) {
        if (["src", "srcset"].forEach(function (t) {
          var n = e.getAttribute("data-" + t);
          null != n && n && rn(e, t);
        }), ye(e, "source")) {
          var t = pe(e, "video, audio");
          t && t.load();
        }
      });
    }

    function an(e) {
      var t = cn(e);
      W("video, audio", t).forEach(function (e) {
        e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play();
      }), W('iframe[src*="youtube.com/embed/"]', t).forEach(function (e) {
        e.hasAttribute("data-autoplay") && ln(e), e.onload = function () {
          e.hasAttribute("data-autoplay") && ln(e);
        };
      });
    }

    function ln(e) {
      e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
    }

    function sn(e) {
      var t = cn(e);
      W("video, audio", t).forEach(function (e) {
        e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause();
      }), W('iframe[src*="youtube.com/embed/"]', t).forEach(function (e) {
        /youtube\.com\/embed\//.test(e.getAttribute("src")) && !e.hasAttribute("data-keepplaying") && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
      });
    }

    function cn(e) {
      var t = W(k, e);
      return t.length && (e = t[0]), e;
    }

    function un() {
      var e = dn(),
          t = e.section,
          n = e.slide;
      t && (re.animateAnchor ? Cn(t, n) : Rt(t, n));
    }

    function fn() {
      if (!at && !re.lockAnchors) {
        var e = dn(),
            t = e.section,
            n = e.slide,
            r = void 0 === Pe,
            o = void 0 === Pe && void 0 === n && !Fe;
        t && t.length && (t && t !== Pe && !r || o || !Fe && Ie != n) && Cn(t, n);
      }
    }

    function dn() {
      var t,
          n,
          r = e.location.hash;

      if (r.length) {
        var o = r.replace("#", "").split("/"),
            i = r.indexOf("#/") > -1;
        t = i ? "/" + o[1] : decodeURIComponent(o[0]);
        var a = i ? o[2] : o[1];
        a && a.length && (n = decodeURIComponent(a));
      }

      return {
        section: t,
        slide: n
      };
    }

    function hn(e) {
      clearTimeout(Ke);
      var n = t.activeElement,
          r = e.keyCode;
      9 === r ? function (e) {
        var n = e.shiftKey,
            r = t.activeElement,
            o = mn(cn(W(g)[0]));

        function i(e) {
          return xe(e), o[0] ? o[0].focus() : null;
        }

        (function (e) {
          var n = mn(t),
              r = n.indexOf(t.activeElement),
              o = e.shiftKey ? r - 1 : r + 1,
              i = n[o],
              a = en(pe(i, _)),
              l = Zt(pe(i, v));
          return !a && !l;
        })(e) || (r ? null == pe(r, g + "," + g + " " + k) && (r = i(e)) : i(e), (!n && r == o[o.length - 1] || n && r == o[0]) && xe(e));
      }(e) : ye(n, "textarea") || ye(n, "input") || ye(n, "select") || "true" === n.getAttribute("contentEditable") || "" === n.getAttribute("contentEditable") || !re.keyboardScrolling || !re.autoScrolling || ([40, 38, 32, 33, 34].indexOf(r) > -1 && xe(e), Ce = e.ctrlKey, Ke = setTimeout(function () {
        !function (e) {
          var t = e.shiftKey;
          if (Xe || !([37, 39].indexOf(e.keyCode) < 0)) switch (e.keyCode) {
            case 38:
            case 33:
              ze.k.up && St();
              break;

            case 32:
              if (t && ze.k.up) {
                St();
                break;
              }

            case 40:
            case 34:
              ze.k.down && At();
              break;

            case 36:
              ze.k.up && Lt(1);
              break;

            case 35:
              ze.k.down && Lt(W(v).length);
              break;

            case 37:
              ze.k.left && kt();
              break;

            case 39:
              ze.k.right && _t();
          }
        }(e);
      }, 150));
    }

    function pn(e) {
      Ne && (Ce = e.ctrlKey);
    }

    function vn(e) {
      2 == e.which && (pt = e.pageY, De.addEventListener("mousemove", bn));
    }

    function gn(e) {
      2 == e.which && De.removeEventListener("mousemove", bn);
    }

    function mn(e) {
      return [].slice.call(W(Ze, e)).filter(function (e) {
        return "-1" !== e.getAttribute("tabindex") && null !== e.offsetParent;
      });
    }

    function En() {
      Ne = !1, Ce = !1;
    }

    function bn(e) {
      Xe && (e.pageY < pt && ze.m.up ? St() : e.pageY > pt && ze.m.down && At()), pt = e.pageY;
    }

    function xn(e, t, n) {
      var r,
          o,
          i = pe(e, v),
          a = {
        slides: e,
        destiny: t,
        direction: n,
        destinyPos: {
          left: t.offsetLeft
        },
        slideIndex: ne(t),
        section: i,
        sectionIndex: ne(i, v),
        anchorLink: i.getAttribute("data-anchor"),
        slidesNav: W(B, i)[0],
        slideAnchor: Bn(t),
        prevSlide: W(k, i)[0],
        prevSlideIndex: ne(W(k, i)[0]),
        localIsResizing: He
      };
      a.xMovement = (r = a.prevSlideIndex, o = a.slideIndex, r == o ? "none" : r > o ? "left" : "right"), a.direction = a.direction ? a.direction : a.xMovement, a.localIsResizing || (Xe = !1), re.onSlideLeave && !a.localIsResizing && "none" !== a.xMovement && Te(re.onSlideLeave) && !1 === Jt("onSlideLeave", a) ? Fe = !1 : (le(t, c), se(be(t), c), a.localIsResizing || (sn(a.prevSlide), on(t)), !re.loopHorizontal && re.controlArrows && (Se(W(X, i), 0 !== a.slideIndex), Se(W(z, i), null != ee(t))), G(i, c) && !a.localIsResizing && Fn(a.slideIndex, a.slideAnchor, a.anchorLink, a.sectionIndex), function (e, t, n) {
        var r = t.destinyPos;

        if (re.css3) {
          var o = "translate3d(-" + Math.round(r.left) + "px, 0px, 0px)";
          Le.test.translate3dH[t.sectionIndex] = o, V(Sn(W(O, e)), Xn(o)), Ge = setTimeout(function () {
            n && Tn(t);
          }, re.scrollingSpeed);
        } else Le.test.left[t.sectionIndex] = Math.round(r.left), Wn(e, Math.round(r.left), re.scrollingSpeed, function () {
          n && Tn(t);
        });
      }(e, a, !0));
    }

    function Tn(e) {
      var t, n;
      t = e.slidesNav, n = e.slideIndex, re.slidesNavigation && null != t && (se(W(u, t), c), le(W("a", W("li", t)[n]), c)), e.localIsResizing || (Te(re.afterSlideLoad) && Jt("afterSlideLoad", e), Xe = !0, an(e.destiny)), Fe = !1;
    }

    function wn() {
      if (yn(), Me) {
        var e = t.activeElement;

        if (!ye(e, "textarea") && !ye(e, "input") && !ye(e, "select")) {
          var n = q();
          Math.abs(n - vt) > 20 * Math.max(vt, n) / 100 && (We = setTimeout(function () {
            Pt(!0), vt = n;
          }, navigator.userAgent.match("CriOS") ? 50 : 0));
        }
      } else clearTimeout(We), We = setTimeout(function () {
        Pt(!0);
      }, 350);
    }

    function yn() {
      var t = re.responsive || re.responsiveWidth,
          n = re.responsiveHeight,
          r = t && e.innerWidth < t,
          o = n && e.innerHeight < n;
      t && n ? It(r || o) : t ? It(r) : n && It(o);
    }

    function Sn(e) {
      var t = "all " + re.scrollingSpeed + "ms " + re.easingcss3;
      return se(e, i), V(e, {
        "-webkit-transition": t,
        transition: t
      });
    }

    function An(e) {
      return le(e, i);
    }

    function Rn(e, t) {
      var n;
      n = e, W(re.menu).forEach(function (e) {
        re.menu && null != e && (se(W(u, e), c), le(W('[data-menuanchor="' + n + '"]', e), c));
      }), function (e, t) {
        re.navigation && null != W(w)[0] && (se(W(u, W(w)[0]), c), le(e ? W('a[href="#' + e + '"]', W(w)[0]) : W("a", W("li", W(w)[0])[t]), c));
      }(e, t);
    }

    function Ln(e) {
      var t = ne(W(g)[0], v),
          n = ne(e, v);
      return t == n ? "none" : t > n ? "up" : "down";
    }

    function _n(e) {
      if (!G(e, F)) {
        var n = t.createElement("div");
        n.className = m, n.style.height = kn(e) + "px", le(e, F), de(e, n);
      }
    }

    function kn(e) {
      var t = Ue;

      if (re.paddingTop || re.paddingBottom) {
        var n = e;
        G(n, p) || (n = pe(e, v));
        var r = parseInt(getComputedStyle(n)["padding-top"]) + parseInt(getComputedStyle(n)["padding-bottom"]);
        t = Ue - r;
      }

      return t;
    }

    function Pn(e, t) {
      t ? Sn(De) : An(De), V(De, Xn(e)), Le.test.translate3d = e, setTimeout(function () {
        se(De, i);
      }, 10);
    }

    function In(e) {
      var t = W(v + '[data-anchor="' + e + '"]', De)[0];

      if (!t) {
        var n = void 0 !== e ? e - 1 : 0;
        t = W(v)[n];
      }

      return t;
    }

    function Cn(e, t) {
      var n = In(e);

      if (null != n) {
        var r = function (e, t) {
          var n = W(_ + '[data-anchor="' + e + '"]', t)[0];
          return null == n && (e = void 0 !== e ? e : 0, n = W(_, t)[e]), n;
        }(t, n);

        Bn(n) === Pe || G(n, c) ? On(r) : Qt(n, function () {
          On(r);
        });
      }
    }

    function On(e) {
      null != e && xn(pe(e, I), e);
    }

    function Fn(e, t, n, r) {
      var o = "";
      re.anchors.length && !re.lockAnchors && (e ? (null != n && (o = n), null == t && (t = e), Ie = t, Mn(o + "/" + t)) : null != e ? (Ie = t, Mn(n)) : Mn(n)), Dn();
    }

    function Mn(t) {
      if (re.recordHistory) location.hash = t;else if (Me || Be) e.history.replaceState(void 0, void 0, "#" + t);else {
        var n = e.location.href.split("#")[0];
        e.location.replace(n + "#" + t);
      }
    }

    function Bn(e) {
      if (!e) return null;
      var t = e.getAttribute("data-anchor"),
          n = ne(e);
      return null == t && (t = n), t;
    }

    function Dn() {
      var e = W(g)[0],
          t = W(k, e)[0],
          n = Bn(e),
          r = Bn(t),
          o = String(n);
      t && (o = o + "-" + r), o = o.replace("/", "-").replace("#", "");
      var i = new RegExp("\\b\\s?" + s + "-[^\\s]+\\b", "g");
      me.className = me.className.replace(i, ""), le(me, s + "-" + o);
    }

    function Un(e) {
      var t = [];
      return t.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, Be && Wt(e) && re.scrollBar && void 0 !== e.touches && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t;
    }

    function Hn(e, t) {
      Et(0, "internal"), void 0 !== t && (He = !0), xn(pe(e, I), e), void 0 !== t && (He = !1), Et(rt.scrollingSpeed, "internal");
    }

    function Nn(e) {
      var t = Math.round(e);
      if (re.css3 && re.autoScrolling && !re.scrollBar) Pn("translate3d(0px, -" + t + "px, 0px)", !1);else if (re.autoScrolling && !re.scrollBar) V(De, {
        top: -t + "px"
      }), Le.test.top = -t + "px";else {
        var n = tn(t);
        Yn(n.element, n.options);
      }
    }

    function Xn(e) {
      return {
        "-webkit-transform": e,
        "-moz-transform": e,
        "-ms-transform": e,
        transform: e
      };
    }

    function jn(e, t, n) {
      "all" !== t ? ze[n][t] = e : Object.keys(ze[n]).forEach(function (t) {
        ze[n][t] = e;
      });
    }

    function zn(e, t, n) {
      re[e] = t, "internal" !== n && (rt[e] = t);
    }

    function $n() {
      var e = re.licenseKey,
          t = "font-size: 15px;background:yellow;";
      ae ? e && e.length < 20 && (console.warn("%c This website was made using fullPage.js slider. More info on the following website:", t), console.warn("%c https://alvarotrigo.com/fullPage/", t)) : ($("error", "Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"), $("error", "https://github.com/alvarotrigo/fullPage.js#options.")), G(W("html"), l) ? $("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (re.continuousVertical && (re.loopTop || re.loopBottom) && (re.continuousVertical = !1, $("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), !re.scrollOverflow || !re.scrollBar && re.autoScrolling || $("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"), !re.continuousVertical || !re.scrollBar && re.autoScrolling || (re.continuousVertical = !1, $("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), re.scrollOverflow && null == re.scrollOverflowHandler && (re.scrollOverflow = !1, $("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")), ["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset", "parallax", "cards"].forEach(function (e) {
        re[e] && $("warn", "fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: " + e);
      }), re.anchors.forEach(function (e) {
        var t = [].slice.call(W("[name]")).filter(function (t) {
          return t.getAttribute("name") && t.getAttribute("name").toLowerCase() == e.toLowerCase();
        }),
            n = [].slice.call(W("[id]")).filter(function (t) {
          return t.getAttribute("id") && t.getAttribute("id").toLowerCase() == e.toLowerCase();
        });
        (n.length || t.length) && ($("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), n.length && $("error", '"' + e + '" is is being used by another element `id` property'), t.length && $("error", '"' + e + '" is is being used by another element `name` property'));
      }));
    }

    function Wn(t, n, r, o) {
      var i = function (t) {
        return t.self != e && G(t, P) ? t.scrollLeft : !re.autoScrolling || re.scrollBar ? Ee() : t.offsetTop;
      }(t),
          a = n - i,
          l = 0;

      nt = !0;

      var s = function s() {
        if (nt) {
          var c = n;
          l += 20, r && (c = e.fp_easings[re.easing](l, i, a, r)), Yn(t, c), l < r ? setTimeout(s, 20) : void 0 !== o && o();
        } else l < r && o();
      };

      s();
    }

    function Yn(t, n) {
      !re.autoScrolling || re.scrollBar || t.self != e && G(t, P) ? t.self != e && G(t, P) ? t.scrollLeft = n : t.scrollTo(0, n) : t.style.top = n + "px";
    }

    function Gn(e, t) {
      this.anchor = e.getAttribute("data-anchor"), this.item = e, this.index = ne(e, t), this.isLast = this.index === e.parentElement.querySelectorAll(t).length - 1, this.isFirst = !this.index;
    }

    function qn(e) {
      Gn.call(this, e, v);
    }

    function Vn(e) {
      Gn.call(this, e, _);
    }

    $n();
  };
}), window.jQuery && window.fullpage && function (e, t) {
  "use strict";

  e && t ? e.fn.fullpage = function (n) {
    n.$ = e, new t(this[0], n);
  } : window.fp_utils.showError("error", "jQuery is required to use the jQuery fullpage adapter!");
}(window.jQuery, window.fullpage), function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : t(e.$);
}(void 0, function (e) {
  "use strict";

  function t(e) {
    return "%" == e[e.length - 1];
  }

  function n(e, t, n) {
    function r(e, t) {
      var n = i.createShader(e);
      if (i.shaderSource(n, t), i.compileShader(n), !i.getShaderParameter(n, i.COMPILE_STATUS)) throw new Error("compile error: " + i.getShaderInfoLog(n));
      return n;
    }

    var o = {};
    if (o.id = i.createProgram(), i.attachShader(o.id, r(i.VERTEX_SHADER, e)), i.attachShader(o.id, r(i.FRAGMENT_SHADER, t)), i.linkProgram(o.id), !i.getProgramParameter(o.id, i.LINK_STATUS)) throw new Error("link error: " + i.getProgramInfoLog(o.id));
    o.uniforms = {}, o.locations = {}, i.useProgram(o.id), i.enableVertexAttribArray(0);

    for (var a, l, s = /uniform (\w+) (\w+)/g, c = e + t; null != (a = s.exec(c));) {
      l = a[2], o.locations[l] = i.getUniformLocation(o.id, l);
    }

    return o;
  }

  function r(e, t) {
    i.activeTexture(i.TEXTURE0 + (t || 0)), i.bindTexture(i.TEXTURE_2D, e);
  }

  function o(e) {
    var t = /url\(["']?([^"']*)["']?\)/.exec(e);
    return null == t ? null : t[1];
  }

  var i,
      a = (e = e && "default" in e ? e["default"] : e)(window),
      l = function () {
    function e(e, t, r) {
      var o = "OES_texture_" + e,
          i = o + "_linear",
          a = i in n,
          l = [o];
      return a && l.push(i), {
        type: t,
        arrayType: r,
        linearSupport: a,
        extensions: l
      };
    }

    var t = document.createElement("canvas");
    if (!(i = t.getContext("webgl") || t.getContext("experimental-webgl"))) return null;
    var n = {};
    if (["OES_texture_float", "OES_texture_half_float", "OES_texture_float_linear", "OES_texture_half_float_linear"].forEach(function (e) {
      var t = i.getExtension(e);
      t && (n[e] = t);
    }), !n.OES_texture_float) return null;
    var r = [];
    r.push(e("float", i.FLOAT, Float32Array)), n.OES_texture_half_float && r.push(e("half_float", n.OES_texture_half_float.HALF_FLOAT_OES, null));
    var o = i.createTexture(),
        a = i.createFramebuffer();
    i.bindFramebuffer(i.FRAMEBUFFER, a), i.bindTexture(i.TEXTURE_2D, o), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, i.NEAREST), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE);

    for (var l = null, s = 0; s < r.length; s++) {
      if (i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, 32, 32, 0, i.RGBA, r[s].type, null), i.framebufferTexture2D(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, o, 0), i.checkFramebufferStatus(i.FRAMEBUFFER) === i.FRAMEBUFFER_COMPLETE) {
        l = r[s];
        break;
      }
    }

    return l;
  }(),
      s = function (e, t) {
    try {
      return new ImageData(32, 32);
    } catch (e) {
      return document.createElement("canvas").getContext("2d").createImageData(32, 32);
    }
  }();

  e("head").prepend("<style>.jquery-ripples { position: relative; z-index: 0; }</style>");

  var c = function c(t, n) {
    var r = this;
    this.$el = e(t), this.interactive = n.interactive, this.resolution = n.resolution, this.textureDelta = new Float32Array([1 / this.resolution, 1 / this.resolution]), this.perturbance = n.perturbance, this.dropRadius = n.dropRadius, this.crossOrigin = n.crossOrigin, this.imageUrl = n.imageUrl;
    var o = document.createElement("canvas");
    o.width = this.$el.innerWidth(), o.height = this.$el.innerHeight(), this.canvas = o, this.$canvas = e(o), this.$canvas.css({
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      zIndex: -1
    }), this.$el.addClass("jquery-ripples").append(o), this.context = i = o.getContext("webgl") || o.getContext("experimental-webgl"), l.extensions.forEach(function (e) {
      i.getExtension(e);
    }), e(window).on("resize", function () {
      r.updateSize();
    }), this.textures = [], this.framebuffers = [], this.bufferWriteIndex = 0, this.bufferReadIndex = 1;

    for (var a = l.arrayType, s = a ? new a(this.resolution * this.resolution * 4) : null, c = 0; c < 2; c++) {
      var u = i.createTexture(),
          f = i.createFramebuffer();
      i.bindFramebuffer(i.FRAMEBUFFER, f), i.bindTexture(i.TEXTURE_2D, u), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, l.linearSupport ? i.LINEAR : i.NEAREST), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, l.linearSupport ? i.LINEAR : i.NEAREST), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, this.resolution, this.resolution, 0, i.RGBA, l.type, s), i.framebufferTexture2D(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, u, 0), this.textures.push(u), this.framebuffers.push(f);
    }

    this.quad = i.createBuffer(), i.bindBuffer(i.ARRAY_BUFFER, this.quad), i.bufferData(i.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), i.STATIC_DRAW), this.initShaders(), this.initTexture(), this.setTransparentTexture(), this.loadImage(), i.clearColor(0, 0, 0, 0), i.blendFunc(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA), this.visible = !0, this.running = !0, this.inited = !0, this.destroyed = !1, this.setupPointerEvents(), requestAnimationFrame(function e() {
      r.destroyed || (r.step(), requestAnimationFrame(e));
    });
  };

  c.DEFAULTS = {
    imageUrl: null,
    resolution: 256,
    dropRadius: 20,
    perturbance: .03,
    interactive: !0,
    crossOrigin: ""
  }, c.prototype = {
    setupPointerEvents: function setupPointerEvents() {
      function e(e, n) {
        t.visible && t.running && t.interactive && t.dropAtPointer(e, t.dropRadius * (n ? 1.5 : 1), n ? .14 : .01);
      }

      var t = this;
      this.$el.on("mousemove.ripples", function (t) {
        e(t);
      }).on("touchmove.ripples, touchstart.ripples", function (t) {
        for (var n = t.originalEvent.changedTouches, r = 0; r < n.length; r++) {
          e(n[r]);
        }
      }).on("mousedown.ripples", function (t) {
        e(t, !0);
      });
    },
    loadImage: function loadImage() {
      var e = this;
      i = this.context;
      var t = this.imageUrl || o(this.originalCssBackgroundImage) || o(this.$el.css("backgroundImage"));
      if (t != this.imageSource) if (this.imageSource = t, this.imageSource) {
        var n = new Image();
        n.onload = function () {
          function t(e) {
            return 0 == (e & e - 1);
          }

          i = e.context;
          var r = t(n.width) && t(n.height) ? i.REPEAT : i.CLAMP_TO_EDGE;
          i.bindTexture(i.TEXTURE_2D, e.backgroundTexture), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, r), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, r), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, n), e.backgroundWidth = n.width, e.backgroundHeight = n.height, e.hideCssBackground();
        }, n.onerror = function () {
          i = e.context, e.setTransparentTexture();
        }, n.crossOrigin = function (e) {
          return e.match(/^data:/);
        }(this.imageSource) ? null : this.crossOrigin, n.src = this.imageSource;
      } else this.setTransparentTexture();
    },
    step: function step() {
      i = this.context, this.visible && (this.computeTextureBoundaries(), this.running && this.update(), this.render());
    },
    drawQuad: function drawQuad() {
      i.bindBuffer(i.ARRAY_BUFFER, this.quad), i.vertexAttribPointer(0, 2, i.FLOAT, !1, 0, 0), i.drawArrays(i.TRIANGLE_FAN, 0, 4);
    },
    render: function render() {
      i.bindFramebuffer(i.FRAMEBUFFER, null), i.viewport(0, 0, this.canvas.width, this.canvas.height), i.enable(i.BLEND), i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT), i.useProgram(this.renderProgram.id), r(this.backgroundTexture, 0), r(this.textures[0], 1), i.uniform1f(this.renderProgram.locations.perturbance, this.perturbance), i.uniform2fv(this.renderProgram.locations.topLeft, this.renderProgram.uniforms.topLeft), i.uniform2fv(this.renderProgram.locations.bottomRight, this.renderProgram.uniforms.bottomRight), i.uniform2fv(this.renderProgram.locations.containerRatio, this.renderProgram.uniforms.containerRatio), i.uniform1i(this.renderProgram.locations.samplerBackground, 0), i.uniform1i(this.renderProgram.locations.samplerRipples, 1), this.drawQuad(), i.disable(i.BLEND);
    },
    update: function update() {
      i.viewport(0, 0, this.resolution, this.resolution), i.bindFramebuffer(i.FRAMEBUFFER, this.framebuffers[this.bufferWriteIndex]), r(this.textures[this.bufferReadIndex]), i.useProgram(this.updateProgram.id), this.drawQuad(), this.swapBufferIndices();
    },
    swapBufferIndices: function swapBufferIndices() {
      this.bufferWriteIndex = 1 - this.bufferWriteIndex, this.bufferReadIndex = 1 - this.bufferReadIndex;
    },
    computeTextureBoundaries: function computeTextureBoundaries() {
      var e,
          n = this.$el.css("background-size"),
          r = this.$el.css("background-attachment"),
          o = function (e) {
        var t = e.split(" ");
        if (1 !== t.length) return t.map(function (t) {
          switch (e) {
            case "center":
              return "50%";

            case "top":
            case "left":
              return "0";

            case "right":
            case "bottom":
              return "100%";

            default:
              return t;
          }
        });

        switch (e) {
          case "center":
            return ["50%", "50%"];

          case "top":
            return ["50%", "0"];

          case "bottom":
            return ["50%", "100%"];

          case "left":
            return ["0", "50%"];

          case "right":
            return ["100%", "50%"];

          default:
            return [e, "50%"];
        }
      }(this.$el.css("background-position"));

      if ("fixed" == r ? ((e = {
        left: window.pageXOffset,
        top: window.pageYOffset
      }).width = a.width(), e.height = a.height()) : ((e = this.$el.offset()).width = this.$el.innerWidth(), e.height = this.$el.innerHeight()), "cover" == n) var i = Math.max(e.width / this.backgroundWidth, e.height / this.backgroundHeight),
          l = this.backgroundWidth * i,
          s = this.backgroundHeight * i;else if ("contain" == n) i = Math.min(e.width / this.backgroundWidth, e.height / this.backgroundHeight), l = this.backgroundWidth * i, s = this.backgroundHeight * i;else {
        l = (n = n.split(" "))[0] || "", s = n[1] || l;
        t(l) ? l = e.width * parseFloat(l) / 100 : "auto" != l && (l = parseFloat(l)), t(s) ? s = e.height * parseFloat(s) / 100 : "auto" != s && (s = parseFloat(s)), "auto" == l && "auto" == s ? (l = this.backgroundWidth, s = this.backgroundHeight) : ("auto" == l && (l = this.backgroundWidth * (s / this.backgroundHeight)), "auto" == s && (s = this.backgroundHeight * (l / this.backgroundWidth)));
      }
      var c = o[0],
          u = o[1];
      c = t(c) ? e.left + (e.width - l) * parseFloat(c) / 100 : e.left + parseFloat(c), u = t(u) ? e.top + (e.height - s) * parseFloat(u) / 100 : e.top + parseFloat(u);
      var f = this.$el.offset();
      this.renderProgram.uniforms.topLeft = new Float32Array([(f.left - c) / l, (f.top - u) / s]), this.renderProgram.uniforms.bottomRight = new Float32Array([this.renderProgram.uniforms.topLeft[0] + this.$el.innerWidth() / l, this.renderProgram.uniforms.topLeft[1] + this.$el.innerHeight() / s]);
      var d = Math.max(this.canvas.width, this.canvas.height);
      this.renderProgram.uniforms.containerRatio = new Float32Array([this.canvas.width / d, this.canvas.height / d]);
    },
    initShaders: function initShaders() {
      var e = ["attribute vec2 vertex;", "varying vec2 coord;", "void main() {", "coord = vertex * 0.5 + 0.5;", "gl_Position = vec4(vertex, 0.0, 1.0);", "}"].join("\n");
      this.dropProgram = n(e, ["precision highp float;", "const float PI = 3.141592653589793;", "uniform sampler2D texture;", "uniform vec2 center;", "uniform float radius;", "uniform float strength;", "varying vec2 coord;", "void main() {", "vec4 info = texture2D(texture, coord);", "float drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - coord) / radius);", "drop = 0.5 - cos(drop * PI) * 0.5;", "info.r += drop * strength;", "gl_FragColor = info;", "}"].join("\n")), this.updateProgram = n(e, ["precision highp float;", "uniform sampler2D texture;", "uniform vec2 delta;", "varying vec2 coord;", "void main() {", "vec4 info = texture2D(texture, coord);", "vec2 dx = vec2(delta.x, 0.0);", "vec2 dy = vec2(0.0, delta.y);", "float average = (", "texture2D(texture, coord - dx).r +", "texture2D(texture, coord - dy).r +", "texture2D(texture, coord + dx).r +", "texture2D(texture, coord + dy).r", ") * 0.25;", "info.g += (average - info.r) * 2.0;", "info.g *= 0.995;", "info.r += info.g;", "gl_FragColor = info;", "}"].join("\n")), i.uniform2fv(this.updateProgram.locations.delta, this.textureDelta), this.renderProgram = n(["precision highp float;", "attribute vec2 vertex;", "uniform vec2 topLeft;", "uniform vec2 bottomRight;", "uniform vec2 containerRatio;", "varying vec2 ripplesCoord;", "varying vec2 backgroundCoord;", "void main() {", "backgroundCoord = mix(topLeft, bottomRight, vertex * 0.5 + 0.5);", "backgroundCoord.y = 1.0 - backgroundCoord.y;", "ripplesCoord = vec2(vertex.x, -vertex.y) * containerRatio * 0.5 + 0.5;", "gl_Position = vec4(vertex.x, -vertex.y, 0.0, 1.0);", "}"].join("\n"), ["precision highp float;", "uniform sampler2D samplerBackground;", "uniform sampler2D samplerRipples;", "uniform vec2 delta;", "uniform float perturbance;", "varying vec2 ripplesCoord;", "varying vec2 backgroundCoord;", "void main() {", "float height = texture2D(samplerRipples, ripplesCoord).r;", "float heightX = texture2D(samplerRipples, vec2(ripplesCoord.x + delta.x, ripplesCoord.y)).r;", "float heightY = texture2D(samplerRipples, vec2(ripplesCoord.x, ripplesCoord.y + delta.y)).r;", "vec3 dx = vec3(delta.x, heightX - height, 0.0);", "vec3 dy = vec3(0.0, heightY - height, delta.y);", "vec2 offset = -normalize(cross(dy, dx)).xz;", "float specular = pow(max(0.0, dot(offset, normalize(vec2(-0.6, 1.0)))), 4.0);", "gl_FragColor = texture2D(samplerBackground, backgroundCoord + offset * perturbance) + specular;", "}"].join("\n")), i.uniform2fv(this.renderProgram.locations.delta, this.textureDelta);
    },
    initTexture: function initTexture() {
      this.backgroundTexture = i.createTexture(), i.bindTexture(i.TEXTURE_2D, this.backgroundTexture), i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, 1), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, i.LINEAR), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR);
    },
    setTransparentTexture: function setTransparentTexture() {
      i.bindTexture(i.TEXTURE_2D, this.backgroundTexture), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, s);
    },
    hideCssBackground: function hideCssBackground() {
      var e = this.$el[0].style.backgroundImage;
      "none" != e && (this.originalInlineCss = e, this.originalCssBackgroundImage = this.$el.css("backgroundImage"), this.$el.css("backgroundImage", "none"));
    },
    restoreCssBackground: function restoreCssBackground() {
      this.$el.css("backgroundImage", this.originalInlineCss || "");
    },
    dropAtPointer: function dropAtPointer(e, t, n) {
      var r = parseInt(this.$el.css("border-left-width")) || 0,
          o = parseInt(this.$el.css("border-top-width")) || 0;
      this.drop(e.pageX - this.$el.offset().left - r, e.pageY - this.$el.offset().top - o, t, n);
    },
    drop: function drop(e, t, n, o) {
      i = this.context;
      var a = this.$el.innerWidth(),
          l = this.$el.innerHeight(),
          s = Math.max(a, l);
      n /= s;
      var c = new Float32Array([(2 * e - a) / s, (l - 2 * t) / s]);
      i.viewport(0, 0, this.resolution, this.resolution), i.bindFramebuffer(i.FRAMEBUFFER, this.framebuffers[this.bufferWriteIndex]), r(this.textures[this.bufferReadIndex]), i.useProgram(this.dropProgram.id), i.uniform2fv(this.dropProgram.locations.center, c), i.uniform1f(this.dropProgram.locations.radius, n), i.uniform1f(this.dropProgram.locations.strength, o), this.drawQuad(), this.swapBufferIndices();
    },
    updateSize: function updateSize() {
      var e = this.$el.innerWidth(),
          t = this.$el.innerHeight();
      e == this.canvas.width && t == this.canvas.height || (this.canvas.width = e, this.canvas.height = t);
    },
    destroy: function destroy() {
      this.$el.off(".ripples").removeClass("jquery-ripples").removeData("ripples"), this.$canvas.remove(), this.restoreCssBackground(), this.destroyed = !0;
    },
    show: function show() {
      this.visible = !0, this.$canvas.show(), this.hideCssBackground();
    },
    hide: function hide() {
      this.visible = !1, this.$canvas.hide(), this.restoreCssBackground();
    },
    pause: function pause() {
      this.running = !1;
    },
    play: function play() {
      this.running = !0;
    },
    set: function set(e, t) {
      switch (e) {
        case "dropRadius":
        case "perturbance":
        case "interactive":
        case "crossOrigin":
          this[e] = t;
          break;

        case "imageUrl":
          this.imageUrl = t, this.loadImage();
      }
    }
  };
  var u = e.fn.ripples;
  e.fn.ripples = function (t) {
    if (!l) throw new Error("Your browser does not support WebGL, the OES_texture_float extension or rendering to floating point textures.");
    var n = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : void 0;
    return this.each(function () {
      var r = e(this),
          o = r.data("ripples"),
          i = e.extend({}, c.DEFAULTS, r.data(), "object" == _typeof(t) && t);
      (o || "string" != typeof t) && (o ? "string" == typeof t && c.prototype[t].apply(o, n) : r.data("ripples", o = new c(this, i)));
    });
  }, e.fn.ripples.Constructor = c, e.fn.ripples.noConflict = function () {
    return e.fn.ripples = u, this;
  };
});