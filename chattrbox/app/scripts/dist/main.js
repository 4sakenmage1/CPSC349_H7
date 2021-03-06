parcelRequire = function(e, r, t, n) {
  var i, o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c
      }
      p.resolve = function(r) {
        return e[t][1][r] || r
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this)
    }
    return r[t].exports;

    function p(e) {
      return f(p.resolve(e))
    }
  }
  f.isParcelRequire = !0, f.Module = function(e) {
    this.id = e, this.bundle = f, this.exports = {}
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function(r, t) {
    e[r] = [function(e, r) {
      r.exports = t
    }, {}]
  };
  for (var c = 0; c < t.length; c++) try {
    f(t[c])
  } catch (e) {
    i || (i = e)
  }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
      return l
    }) : n && (this[n] = l)
  }
  if (parcelRequire = f, i) throw i;
  return f
}({
  "mYIs": [function(require, module, exports) {
    "use strict";
    var e;

    function n(n) {
      e = new WebSocket(n), console.log("connecting...")
    }

    function o(n) {
      e.onopen = function() {
        console.log("open"), n()
      }
    }

    function s(n) {
      e.onmessage = function(e) {
        console.log("message", e.data);
        var o = JSON.parse(e.data);
        n(o)
      }
    }

    function t(n) {
      e.send(JSON.stringify(n))
    }
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var a = {
      init: n,
      registerOpenHandler: o,
      registerMessageHandler: s,
      sendMessage: t
    };
    exports.default = a;
  }, {}],
  "KZ7Y": [function(require, module, exports) {
    "use strict";

    function t(e) {
      return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(e)
    }

    function e(e, o) {
      return !o || "object" !== t(o) && "function" != typeof o ? n(e) : o
    }

    function n(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }

    function o(t) {
      return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function r(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && i(t, e)
    }

    function i(t, e) {
      return (i = Object.setPrototypeOf || function(t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    function u(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function c(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
      }
    }

    function f(t, e, n) {
      return e && c(t.prototype, e), n && c(t, n), t
    }
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.UserStore = void 0;
    var s = function() {
        function t(e) {
          u(this, t), this.api = e
        }
        return f(t, [{
          key: "get",
          value: function() {
            return this.api.getItem(this.key)
          }
        }, {
          key: "set",
          value: function(t) {
            this.api.setItem(this.key, t)
          }
        }]), t
      }(),
      a = function(t) {
        function n(t) {
          var r;
          return u(this, n), (r = e(this, o(n).call(this, sessionStorage))).key = t, r
        }
        return r(n, s), n
      }();
    exports.UserStore = a;
  }, {}],
  "FT5O": [function(require, module, exports) {

    var t, e, n = module.exports = {};

    function r() {
      throw new Error("setTimeout has not been defined")
    }

    function o() {
      throw new Error("clearTimeout has not been defined")
    }

    function i(e) {
      if (t === setTimeout) return setTimeout(e, 0);
      if ((t === r || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
      try {
        return t(e, 0)
      } catch (n) {
        try {
          return t.call(null, e, 0)
        } catch (n) {
          return t.call(this, e, 0)
        }
      }
    }

    function u(t) {
      if (e === clearTimeout) return clearTimeout(t);
      if ((e === o || !e) && clearTimeout) return e = clearTimeout, clearTimeout(t);
      try {
        return e(t)
      } catch (n) {
        try {
          return e.call(null, t)
        } catch (n) {
          return e.call(this, t)
        }
      }
    }! function() {
      try {
        t = "function" == typeof setTimeout ? setTimeout : r
      } catch (n) {
        t = r
      }
      try {
        e = "function" == typeof clearTimeout ? clearTimeout : o
      } catch (n) {
        e = o
      }
    }();
    var c, s = [],
      l = !1,
      a = -1;

    function f() {
      l && c && (l = !1, c.length ? s = c.concat(s) : a = -1, s.length && h())
    }

    function h() {
      if (!l) {
        var t = i(f);
        l = !0;
        for (var e = s.length; e;) {
          for (c = s, s = []; ++a < e;) c && c[a].run();
          a = -1, e = s.length
        }
        c = null, l = !1, u(t)
      }
    }

    function m(t, e) {
      this.fun = t, this.array = e
    }

    function p() {}
    n.nextTick = function(t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      s.push(new m(t, e)), 1 !== s.length || l || i(h)
    }, m.prototype.run = function() {
      this.fun.apply(null, this.array)
    }, n.title = "browser", n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = p, n.addListener = p, n.once = p, n.off = p, n.removeListener = p, n.removeAllListeners = p, n.emit = p, n.prependListener = p, n.prependOnceListener = p, n.listeners = function(t) {
      return []
    }, n.binding = function(t) {
      throw new Error("process.binding is not supported")
    }, n.cwd = function() {
      return "/"
    }, n.chdir = function(t) {
      throw new Error("process.chdir is not supported")
    }, n.umask = function() {
      return 0
    };
  }, {}],
  "lwLq": [function(require, module, exports) {
    var global = arguments[3];
    var process = require("process");
    var define;
    var e, t = arguments[3],
      n = require("process");
    ! function(e, t) {
      "use strict";
      "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
      } : t(e)
    }("undefined" != typeof window ? window : this, function(t, n) {
      "use strict";
      var r = [],
        i = t.document,
        o = Object.getPrototypeOf,
        a = r.slice,
        s = r.concat,
        u = r.push,
        l = r.indexOf,
        c = {},
        f = c.toString,
        p = c.hasOwnProperty,
        d = p.toString,
        h = d.call(Object),
        g = {},
        v = function(e) {
          return "function" == typeof e && "number" != typeof e.nodeType
        },
        y = function(e) {
          return null != e && e === e.window
        },
        m = {
          type: !0,
          src: !0,
          nonce: !0,
          noModule: !0
        };

      function x(e, t, n) {
        var r, o, a = (n = n || i).createElement("script");
        if (a.text = e, t)
          for (r in m)(o = t[r] || t.getAttribute && t.getAttribute(r)) && a.setAttribute(r, o);
        n.head.appendChild(a).parentNode.removeChild(a)
      }

      function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[f.call(e)] || "object" : typeof e
      }
      var w = function(e, t) {
          return new w.fn.init(e, t)
        },
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

      function C(e) {
        var t = !!e && "length" in e && e.length,
          n = b(e);
        return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
      }
      w.fn = w.prototype = {
        jquery: "3.4.1",
        constructor: w,
        length: 0,
        toArray: function() {
          return a.call(this)
        },
        get: function(e) {
          return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
          var t = w.merge(this.constructor(), e);
          return t.prevObject = this, t
        },
        each: function(e) {
          return w.each(this, e)
        },
        map: function(e) {
          return this.pushStack(w.map(this, function(t, n) {
            return e.call(t, n, t)
          }))
        },
        slice: function() {
          return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
          return this.eq(0)
        },
        last: function() {
          return this.eq(-1)
        },
        eq: function(e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
          return this.prevObject || this.constructor()
        },
        push: u,
        sort: r.sort,
        splice: r.splice
      }, w.extend = w.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || v(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
          if (null != (e = arguments[s]))
            for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || w.isPlainObject(n) ? n : {}, i = !1, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
      }, w.extend({
        expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
          throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
          var t, n;
          return !(!e || "[object Object]" !== f.call(e)) && (!(t = o(e)) || "function" == typeof(n = p.call(t, "constructor") && t.constructor) && d.call(n) === h)
        },
        isEmptyObject: function(e) {
          var t;
          for (t in e) return !1;
          return !0
        },
        globalEval: function(e, t) {
          x(e, {
            nonce: t && t.nonce
          })
        },
        each: function(e, t) {
          var n, r = 0;
          if (C(e))
            for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
          else
            for (r in e)
              if (!1 === t.call(e[r], r, e[r])) break;
          return e
        },
        trim: function(e) {
          return null == e ? "" : (e + "").replace(T, "")
        },
        makeArray: function(e, t) {
          var n = t || [];
          return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function(e, t, n) {
          return null == t ? -1 : l.call(t, e, n)
        },
        merge: function(e, t) {
          for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
          return e.length = i, e
        },
        grep: function(e, t, n) {
          for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
          return r
        },
        map: function(e, t, n) {
          var r, i, o = 0,
            a = [];
          if (C(e))
            for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
          else
            for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
          return s.apply([], a)
        },
        guid: 1,
        support: g
      }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = r[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
      });
      var E = function(e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, v, y, m, x, b = "sizzle" + 1 * new Date,
          w = e.document,
          T = 0,
          C = 0,
          E = ue(),
          k = ue(),
          S = ue(),
          N = ue(),
          A = function(e, t) {
            return e === t && (f = !0), 0
          },
          D = {}.hasOwnProperty,
          j = [],
          q = j.pop,
          L = j.push,
          H = j.push,
          O = j.slice,
          P = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              if (e[n] === t) return n;
            return -1
          },
          R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          M = "[\\x20\\t\\r\\n\\f]",
          I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
          $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
          F = new RegExp(M + "+", "g"),
          B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
          _ = new RegExp("^" + M + "*," + M + "*"),
          z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
          U = new RegExp(M + "|>"),
          X = new RegExp($),
          V = new RegExp("^" + I + "$"),
          G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + $),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + R + ")$", "i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
          },
          Y = /HTML$/i,
          Q = /^(?:input|select|textarea|button)$/i,
          J = /^h\d$/i,
          K = /^[^{]+\{\s*\[native \w/,
          Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ee = /[+~]/,
          te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
          ne = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
          },
          re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          ie = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
          },
          oe = function() {
            p()
          },
          ae = be(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
          }, {
            dir: "parentNode",
            next: "legend"
          });
        try {
          H.apply(j = O.call(w.childNodes), w.childNodes), j[w.childNodes.length].nodeType
        } catch (ke) {
          H = {
            apply: j.length ? function(e, t) {
              L.apply(e, O.call(t))
            } : function(e, t) {
              for (var n = e.length, r = 0; e[n++] = t[r++];);
              e.length = n - 1
            }
          }
        }

        function se(e, t, r, i) {
          var o, s, l, c, f, h, y, m = t && t.ownerDocument,
            T = t ? t.nodeType : 9;
          if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
          if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
            if (11 !== T && (f = Z.exec(e)))
              if (o = f[1]) {
                if (9 === T) {
                  if (!(l = t.getElementById(o))) return r;
                  if (l.id === o) return r.push(l), r
                } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
              } else {
                if (f[2]) return H.apply(r, t.getElementsByTagName(e)), r;
                if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return H.apply(r, t.getElementsByClassName(o)), r
              } if (n.qsa && !N[e + " "] && (!v || !v.test(e)) && (1 !== T || "object" !== t.nodeName.toLowerCase())) {
              if (y = e, m = t, 1 === T && U.test(e)) {
                for ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = b), s = (h = a(e)).length; s--;) h[s] = "#" + c + " " + xe(h[s]);
                y = h.join(","), m = ee.test(e) && ye(t.parentNode) || t
              }
              try {
                return H.apply(r, m.querySelectorAll(y)), r
              } catch (C) {
                N(e, !0)
              } finally {
                c === b && t.removeAttribute("id")
              }
            }
          }
          return u(e.replace(B, "$1"), t, r, i)
        }

        function ue() {
          var e = [];
          return function t(n, i) {
            return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
          }
        }

        function le(e) {
          return e[b] = !0, e
        }

        function ce(e) {
          var t = d.createElement("fieldset");
          try {
            return !!e(t)
          } catch (ke) {
            return !1
          } finally {
            t.parentNode && t.parentNode.removeChild(t), t = null
          }
        }

        function fe(e, t) {
          for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
        }

        function pe(e, t) {
          var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
          if (r) return r;
          if (n)
            for (; n = n.nextSibling;)
              if (n === t) return -1;
          return e ? 1 : -1
        }

        function de(e) {
          return function(t) {
            return "input" === t.nodeName.toLowerCase() && t.type === e
          }
        }

        function he(e) {
          return function(t) {
            var n = t.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && t.type === e
          }
        }

        function ge(e) {
          return function(t) {
            return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
          }
        }

        function ve(e) {
          return le(function(t) {
            return t = +t, le(function(n, r) {
              for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
            })
          })
        }

        function ye(e) {
          return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = se.support = {}, o = se.isXML = function(e) {
            var t = e.namespaceURI,
              n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
          }, p = se.setDocument = function(e) {
            var t, i, a = e ? e.ownerDocument || e : w;
            return a !== d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.attributes = ce(function(e) {
              return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = ce(function(e) {
              return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = K.test(d.getElementsByClassName), n.getById = ce(function(e) {
              return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
            }), n.getById ? (r.filter.ID = function(e) {
              var t = e.replace(te, ne);
              return function(e) {
                return e.getAttribute("id") === t
              }
            }, r.find.ID = function(e, t) {
              if (void 0 !== t.getElementById && g) {
                var n = t.getElementById(e);
                return n ? [n] : []
              }
            }) : (r.filter.ID = function(e) {
              var t = e.replace(te, ne);
              return function(e) {
                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                return n && n.value === t
              }
            }, r.find.ID = function(e, t) {
              if (void 0 !== t.getElementById && g) {
                var n, r, i, o = t.getElementById(e);
                if (o) {
                  if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                  for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                }
                return []
              }
            }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
              return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
              var n, r = [],
                i = 0,
                o = t.getElementsByTagName(e);
              if ("*" === e) {
                for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                return r
              }
              return o
            }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
              if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
            }, y = [], v = [], (n.qsa = K.test(d.querySelectorAll)) && (ce(function(e) {
              h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]")
            }), ce(function(e) {
              e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t = d.createElement("input");
              t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
            })), (n.matchesSelector = K.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function(e) {
              n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), y.push("!=", $)
            }), v = v.length && new RegExp(v.join("|")), y = y.length && new RegExp(y.join("|")), t = K.test(h.compareDocumentPosition), x = t || K.test(h.contains) ? function(e, t) {
              var n = 9 === e.nodeType ? e.documentElement : e,
                r = t && t.parentNode;
              return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
              if (t)
                for (; t = t.parentNode;)
                  if (t === e) return !0;
              return !1
            }, A = t ? function(e, t) {
              if (e === t) return f = !0, 0;
              var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
              return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & r ? -1 : 1)
            } : function(e, t) {
              if (e === t) return f = !0, 0;
              var n, r = 0,
                i = e.parentNode,
                o = t.parentNode,
                a = [e],
                s = [t];
              if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;
              if (i === o) return pe(e, t);
              for (n = e; n = n.parentNode;) a.unshift(n);
              for (n = t; n = n.parentNode;) s.unshift(n);
              for (; a[r] === s[r];) r++;
              return r ? pe(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
            }, d) : d
          }, se.matches = function(e, t) {
            return se(e, null, null, t)
          }, se.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== d && p(e), n.matchesSelector && g && !N[t + " "] && (!y || !y.test(t)) && (!v || !v.test(t))) try {
              var r = m.call(e, t);
              if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (ke) {
              N(t, !0)
            }
            return se(t, d, null, [e]).length > 0
          }, se.contains = function(e, t) {
            return (e.ownerDocument || e) !== d && p(e), x(e, t)
          }, se.attr = function(e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()],
              o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
          }, se.escape = function(e) {
            return (e + "").replace(re, ie)
          }, se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
          }, se.uniqueSort = function(e) {
            var t, r = [],
              i = 0,
              o = 0;
            if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(A), f) {
              for (; t = e[o++];) t === e[o] && (i = r.push(o));
              for (; i--;) e.splice(r[i], 1)
            }
            return c = null, e
          }, i = se.getText = function(e) {
            var t, n = "",
              r = 0,
              o = e.nodeType;
            if (o) {
              if (1 === o || 9 === o || 11 === o) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
              } else if (3 === o || 4 === o) return e.nodeValue
            } else
              for (; t = e[r++];) n += i(t);
            return n
          }, (r = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
              ">": {
                dir: "parentNode",
                first: !0
              },
              " ": {
                dir: "parentNode"
              },
              "+": {
                dir: "previousSibling",
                first: !0
              },
              "~": {
                dir: "previousSibling"
              }
            },
            preFilter: {
              ATTR: function(e) {
                return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
              },
              CHILD: function(e) {
                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
              },
              PSEUDO: function(e) {
                var t, n = !e[6] && e[2];
                return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
              }
            },
            filter: {
              TAG: function(e) {
                var t = e.replace(te, ne).toLowerCase();
                return "*" === e ? function() {
                  return !0
                } : function(e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t
                }
              },
              CLASS: function(e) {
                var t = E[e + " "];
                return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function(e) {
                  return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                })
              },
              ATTR: function(e, t, n) {
                return function(r) {
                  var i = se.attr(r, e);
                  return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                }
              },
              CHILD: function(e, t, n, r, i) {
                var o = "nth" !== e.slice(0, 3),
                  a = "last" !== e.slice(-4),
                  s = "of-type" === t;
                return 1 === r && 0 === i ? function(e) {
                  return !!e.parentNode
                } : function(t, n, u) {
                  var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                    v = t.parentNode,
                    y = s && t.nodeName.toLowerCase(),
                    m = !u && !s,
                    x = !1;
                  if (v) {
                    if (o) {
                      for (; g;) {
                        for (p = t; p = p[g];)
                          if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                        h = g = "only" === e && !h && "nextSibling"
                      }
                      return !0
                    }
                    if (h = [a ? v.firstChild : v.lastChild], a && m) {
                      for (x = (d = (l = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
                        if (1 === p.nodeType && ++x && p === t) {
                          c[e] = [T, d, x];
                          break
                        }
                    } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                      for (;
                        (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++x || (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p !== t)););
                    return (x -= i) === r || x % r == 0 && x / r >= 0
                  }
                }
              },
              PSEUDO: function(e, t) {
                var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, n) {
                  for (var r, o = i(e, t), a = o.length; a--;) e[r = P(e, o[a])] = !(n[r] = o[a])
                }) : function(e) {
                  return i(e, 0, n)
                }) : i
              }
            },
            pseudos: {
              not: le(function(e) {
                var t = [],
                  n = [],
                  r = s(e.replace(B, "$1"));
                return r[b] ? le(function(e, t, n, i) {
                  for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                }) : function(e, i, o) {
                  return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                }
              }),
              has: le(function(e) {
                return function(t) {
                  return se(e, t).length > 0
                }
              }),
              contains: le(function(e) {
                return e = e.replace(te, ne),
                  function(t) {
                    return (t.textContent || i(t)).indexOf(e) > -1
                  }
              }),
              lang: le(function(e) {
                return V.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                  function(t) {
                    var n;
                    do {
                      if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1
                  }
              }),
              target: function(t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id
              },
              root: function(e) {
                return e === h
              },
              focus: function(e) {
                return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
              },
              enabled: ge(!1),
              disabled: ge(!0),
              checked: function(e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && !!e.checked || "option" === t && !!e.selected
              },
              selected: function(e) {
                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              },
              empty: function(e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0
              },
              parent: function(e) {
                return !r.pseudos.empty(e)
              },
              header: function(e) {
                return J.test(e.nodeName)
              },
              input: function(e) {
                return Q.test(e.nodeName)
              },
              button: function(e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && "button" === e.type || "button" === t
              },
              text: function(e) {
                var t;
                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
              },
              first: ve(function() {
                return [0]
              }),
              last: ve(function(e, t) {
                return [t - 1]
              }),
              eq: ve(function(e, t, n) {
                return [n < 0 ? n + t : n]
              }),
              even: ve(function(e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e
              }),
              odd: ve(function(e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e
              }),
              lt: ve(function(e, t, n) {
                for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                return e
              }),
              gt: ve(function(e, t, n) {
                for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                return e
              })
            }
          }).pseudos.nth = r.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
          }) r.pseudos[t] = de(t);
        for (t in {
            submit: !0,
            reset: !0
          }) r.pseudos[t] = he(t);

        function me() {}

        function xe(e) {
          for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
          return r
        }

        function be(e, t, n) {
          var r = t.dir,
            i = t.next,
            o = i || r,
            a = n && "parentNode" === o,
            s = C++;
          return t.first ? function(t, n, i) {
            for (; t = t[r];)
              if (1 === t.nodeType || a) return e(t, n, i);
            return !1
          } : function(t, n, u) {
            var l, c, f, p = [T, s];
            if (u) {
              for (; t = t[r];)
                if ((1 === t.nodeType || a) && e(t, n, u)) return !0
            } else
              for (; t = t[r];)
                if (1 === t.nodeType || a)
                  if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                  else {
                    if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                    if (c[o] = p, p[2] = e(t, n, u)) return !0
                  } return !1
          }
        }

        function we(e) {
          return e.length > 1 ? function(t, n, r) {
            for (var i = e.length; i--;)
              if (!e[i](t, n, r)) return !1;
            return !0
          } : e[0]
        }

        function Te(e, t, n, r, i) {
          for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
          return a
        }

        function Ce(e, t, n, r, i, o) {
          return r && !r[b] && (r = Ce(r)), i && !i[b] && (i = Ce(i, o)), le(function(o, a, s, u) {
            var l, c, f, p = [],
              d = [],
              h = a.length,
              g = o || function(e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n
              }(t || "*", s.nodeType ? [s] : s, []),
              v = !e || !o && t ? g : Te(g, p, e, s, u),
              y = n ? i || (o ? e : h || r) ? [] : a : v;
            if (n && n(v, y, s, u), r)
              for (l = Te(y, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (y[d[c]] = !(v[d[c]] = f));
            if (o) {
              if (i || e) {
                if (i) {
                  for (l = [], c = y.length; c--;)(f = y[c]) && l.push(v[c] = f);
                  i(null, y = [], l, u)
                }
                for (c = y.length; c--;)(f = y[c]) && (l = i ? P(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
              }
            } else y = Te(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : H.apply(a, y)
          })
        }

        function Ee(e) {
          for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = be(function(e) {
              return e === t
            }, s, !0), f = be(function(e) {
              return P(t, e) > -1
            }, s, !0), p = [function(e, n, r) {
              var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
              return t = null, i
            }]; u < o; u++)
            if (n = r.relative[e[u].type]) p = [be(we(p), n)];
            else {
              if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                return Ce(u > 1 && we(p), u > 1 && xe(e.slice(0, u - 1).concat({
                  value: " " === e[u - 2].type ? "*" : ""
                })).replace(B, "$1"), n, u < i && Ee(e.slice(u, i)), i < o && Ee(e = e.slice(i)), i < o && xe(e))
              }
              p.push(n)
            } return we(p)
        }
        return me.prototype = r.filters = r.pseudos, r.setFilters = new me, a = se.tokenize = function(e, t) {
          var n, i, o, a, s, u, l, c = k[e + " "];
          if (c) return t ? 0 : c.slice(0);
          for (s = e, u = [], l = r.preFilter; s;) {
            for (a in n && !(i = _.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = z.exec(s)) && (n = i.shift(), o.push({
                value: n,
                type: i[0].replace(B, " ")
              }), s = s.slice(n.length)), r.filter) !(i = G[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
              value: n,
              type: a,
              matches: i
            }), s = s.slice(n.length));
            if (!n) break
          }
          return t ? s.length : s ? se.error(e) : k(e, u).slice(0)
        }, s = se.compile = function(e, t) {
          var n, i = [],
            o = [],
            s = S[e + " "];
          if (!s) {
            for (t || (t = a(e)), n = t.length; n--;)(s = Ee(t[n]))[b] ? i.push(s) : o.push(s);
            (s = S(e, function(e, t) {
              var n = t.length > 0,
                i = e.length > 0,
                o = function(o, a, s, u, c) {
                  var f, h, v, y = 0,
                    m = "0",
                    x = o && [],
                    b = [],
                    w = l,
                    C = o || i && r.find.TAG("*", c),
                    E = T += null == w ? 1 : Math.random() || .1,
                    k = C.length;
                  for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                    if (i && f) {
                      for (h = 0, a || f.ownerDocument === d || (p(f), s = !g); v = e[h++];)
                        if (v(f, a || d, s)) {
                          u.push(f);
                          break
                        } c && (T = E)
                    }
                    n && ((f = !v && f) && y--, o && x.push(f))
                  }
                  if (y += m, n && m !== y) {
                    for (h = 0; v = t[h++];) v(x, b, a, s);
                    if (o) {
                      if (y > 0)
                        for (; m--;) x[m] || b[m] || (b[m] = q.call(u));
                      b = Te(b)
                    }
                    H.apply(u, b), c && !o && b.length > 0 && y + t.length > 1 && se.uniqueSort(u)
                  }
                  return c && (T = E, l = w), x
                };
              return n ? le(o) : o
            }(o, i))).selector = e
          }
          return s
        }, u = se.select = function(e, t, n, i) {
          var o, u, l, c, f, p = "function" == typeof e && e,
            d = !i && a(e = p.selector || e);
          if (n = n || [], 1 === d.length) {
            if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
              if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
              p && (t = t.parentNode), e = e.slice(u.shift().value.length)
            }
            for (o = G.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o], !r.relative[c = l.type]);)
              if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && ye(t.parentNode) || t))) {
                if (u.splice(o, 1), !(e = i.length && xe(u))) return H.apply(n, i), n;
                break
              }
          }
          return (p || s(e, d))(i, t, !g, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, n.sortStable = b.split("").sort(A).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ce(function(e) {
          return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }), ce(function(e) {
          return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ce(function(e) {
          return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
          return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
          var r;
          if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
      }(t);
      w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
      var k = function(e, t, n) {
          for (var r = [], i = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
              if (i && w(e).is(n)) break;
              r.push(e)
            } return r
        },
        S = function(e, t) {
          for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
          return n
        },
        N = w.expr.match.needsContext;

      function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      }
      var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

      function j(e, t, n) {
        return v(t) ? w.grep(e, function(e, r) {
          return !!t.call(e, r, e) !== n
        }) : t.nodeType ? w.grep(e, function(e) {
          return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function(e) {
          return l.call(t, e) > -1 !== n
        }) : w.filter(t, e, n)
      }
      w.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) {
          return 1 === e.nodeType
        }))
      }, w.fn.extend({
        find: function(e) {
          var t, n, r = this.length,
            i = this;
          if ("string" != typeof e) return this.pushStack(w(e).filter(function() {
            for (t = 0; t < r; t++)
              if (w.contains(i[t], this)) return !0
          }));
          for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
          return r > 1 ? w.uniqueSort(n) : n
        },
        filter: function(e) {
          return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
          return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
          return !!j(this, "string" == typeof e && N.test(e) ? w(e) : e || [], !1).length
        }
      });
      var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      (w.fn.init = function(e, t, n) {
        var r, o;
        if (!e) return this;
        if (n = n || q, "string" == typeof e) {
          if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
          if (r[1]) {
            if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), D.test(r[1]) && w.isPlainObject(t))
              for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
          }
          return (o = i.getElementById(r[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
      }).prototype = w.fn, q = w(i);
      var H = /^(?:parents|prev(?:Until|All))/,
        O = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
        };

      function P(e, t) {
        for (;
          (e = e[t]) && 1 !== e.nodeType;);
        return e
      }
      w.fn.extend({
        has: function(e) {
          var t = w(e, this),
            n = t.length;
          return this.filter(function() {
            for (var e = 0; e < n; e++)
              if (w.contains(this, t[e])) return !0
          })
        },
        closest: function(e, t) {
          var n, r = 0,
            i = this.length,
            o = [],
            a = "string" != typeof e && w(e);
          if (!N.test(e))
            for (; r < i; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                  o.push(n);
                  break
                } return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
        },
        index: function(e) {
          return e ? "string" == typeof e ? l.call(w(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
          return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function(e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
      }), w.each({
        parent: function(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
          return k(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
          return k(e, "parentNode", n)
        },
        next: function(e) {
          return P(e, "nextSibling")
        },
        prev: function(e) {
          return P(e, "previousSibling")
        },
        nextAll: function(e) {
          return k(e, "nextSibling")
        },
        prevAll: function(e) {
          return k(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
          return k(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
          return k(e, "previousSibling", n)
        },
        siblings: function(e) {
          return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
          return S(e.firstChild)
        },
        contents: function(e) {
          return void 0 !== e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
      }, function(e, t) {
        w.fn[e] = function(n, r) {
          var i = w.map(this, t, n);
          return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i)
        }
      });
      var R = /[^\x20\t\r\n\f]+/g;

      function M(e) {
        return e
      }

      function I(e) {
        throw e
      }

      function W(e, t, n, r) {
        var i;
        try {
          e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
          n.apply(void 0, [e])
        }
      }
      w.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
          var t = {};
          return w.each(e.match(R) || [], function(e, n) {
            t[n] = !0
          }), t
        }(e) : w.extend({}, e);
        var t, n, r, i, o = [],
          a = [],
          s = -1,
          u = function() {
            for (i = i || e.once, r = t = !0; a.length; s = -1)
              for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
            e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
          },
          l = {
            add: function() {
              return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                w.each(n, function(n, r) {
                  v(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== b(r) && t(r)
                })
              }(arguments), n && !t && u()), this
            },
            remove: function() {
              return w.each(arguments, function(e, t) {
                for (var n;
                  (n = w.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
              }), this
            },
            has: function(e) {
              return e ? w.inArray(e, o) > -1 : o.length > 0
            },
            empty: function() {
              return o && (o = []), this
            },
            disable: function() {
              return i = a = [], o = n = "", this
            },
            disabled: function() {
              return !o
            },
            lock: function() {
              return i = a = [], n || t || (o = n = ""), this
            },
            locked: function() {
              return !!i
            },
            fireWith: function(e, n) {
              return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
            },
            fire: function() {
              return l.fireWith(this, arguments), this
            },
            fired: function() {
              return !!r
            }
          };
        return l
      }, w.extend({
        Deferred: function(e) {
          var n = [
              ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
              ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
              ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
            ],
            r = "pending",
            i = {
              state: function() {
                return r
              },
              always: function() {
                return o.done(arguments).fail(arguments), this
              },
              catch: function(e) {
                return i.then(null, e)
              },
              pipe: function() {
                var e = arguments;
                return w.Deferred(function(t) {
                  w.each(n, function(n, r) {
                    var i = v(e[r[4]]) && e[r[4]];
                    o[r[1]](function() {
                      var e = i && i.apply(this, arguments);
                      e && v(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                    })
                  }), e = null
                }).promise()
              },
              then: function(e, r, i) {
                var o = 0;

                function a(e, n, r, i) {
                  return function() {
                    var s = this,
                      u = arguments,
                      l = function() {
                        var t, l;
                        if (!(e < o)) {
                          if ((t = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                          l = t && ("object" == typeof t || "function" == typeof t) && t.then, v(l) ? i ? l.call(t, a(o, n, M, i), a(o, n, I, i)) : (o++, l.call(t, a(o, n, M, i), a(o, n, I, i), a(o, n, M, n.notifyWith))) : (r !== M && (s = void 0, u = [t]), (i || n.resolveWith)(s, u))
                        }
                      },
                      c = i ? l : function() {
                        try {
                          l()
                        } catch (t) {
                          w.Deferred.exceptionHook && w.Deferred.exceptionHook(t, c.stackTrace), e + 1 >= o && (r !== I && (s = void 0, u = [t]), n.rejectWith(s, u))
                        }
                      };
                    e ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), t.setTimeout(c))
                  }
                }
                return w.Deferred(function(t) {
                  n[0][3].add(a(0, t, v(i) ? i : M, t.notifyWith)), n[1][3].add(a(0, t, v(e) ? e : M)), n[2][3].add(a(0, t, v(r) ? r : I))
                }).promise()
              },
              promise: function(e) {
                return null != e ? w.extend(e, i) : i
              }
            },
            o = {};
          return w.each(n, function(e, t) {
            var a = t[2],
              s = t[5];
            i[t[1]] = a.add, s && a.add(function() {
              r = s
            }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
              return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
            }, o[t[0] + "With"] = a.fireWith
          }), i.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
          var t = arguments.length,
            n = t,
            r = Array(n),
            i = a.call(arguments),
            o = w.Deferred(),
            s = function(e) {
              return function(n) {
                r[e] = this, i[e] = arguments.length > 1 ? a.call(arguments) : n, --t || o.resolveWith(r, i)
              }
            };
          if (t <= 1 && (W(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || v(i[n] && i[n].then))) return o.then();
          for (; n--;) W(i[n], s(n), o.reject);
          return o.promise()
        }
      });
      var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      w.Deferred.exceptionHook = function(e, n) {
        t.console && t.console.warn && e && $.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
      }, w.readyException = function(e) {
        t.setTimeout(function() {
          throw e
        })
      };
      var F = w.Deferred();

      function B() {
        i.removeEventListener("DOMContentLoaded", B), t.removeEventListener("load", B), w.ready()
      }
      w.fn.ready = function(e) {
        return F.then(e).catch(function(e) {
          w.readyException(e)
        }), this
      }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
          (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(i, [w]))
        }
      }), w.ready.then = F.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? t.setTimeout(w.ready) : (i.addEventListener("DOMContentLoaded", B), t.addEventListener("load", B));
      var _ = function(e, t, n, r, i, o, a) {
          var s = 0,
            u = e.length,
            l = null == n;
          if ("object" === b(n))
            for (s in i = !0, n) _(e, t, s, n[s], !0, o, a);
          else if (void 0 !== r && (i = !0, v(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
              return l.call(w(e), n)
            })), t))
            for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
          return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        z = /^-ms-/,
        U = /-([a-z])/g;

      function X(e, t) {
        return t.toUpperCase()
      }

      function V(e) {
        return e.replace(z, "ms-").replace(U, X)
      }
      var G = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
      };

      function Y() {
        this.expando = w.expando + Y.uid++
      }
      Y.uid = 1, Y.prototype = {
        cache: function(e) {
          var t = e[this.expando];
          return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
            value: t,
            configurable: !0
          }))), t
        },
        set: function(e, t, n) {
          var r, i = this.cache(e);
          if ("string" == typeof t) i[V(t)] = n;
          else
            for (r in t) i[V(r)] = t[r];
          return i
        },
        get: function(e, t) {
          return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function(e, t, n) {
          return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
          var n, r = e[this.expando];
          if (void 0 !== r) {
            if (void 0 !== t) {
              n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;
              for (; n--;) delete r[t[n]]
            }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
          }
        },
        hasData: function(e) {
          var t = e[this.expando];
          return void 0 !== t && !w.isEmptyObject(t)
        }
      };
      var Q = new Y,
        J = new Y,
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

      function ee(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
          if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
            try {
              n = function(e) {
                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : K.test(e) ? JSON.parse(e) : e)
              }(n)
            } catch (i) {}
            J.set(e, t, n)
          } else n = void 0;
        return n
      }
      w.extend({
        hasData: function(e) {
          return J.hasData(e) || Q.hasData(e)
        },
        data: function(e, t, n) {
          return J.access(e, t, n)
        },
        removeData: function(e, t) {
          J.remove(e, t)
        },
        _data: function(e, t, n) {
          return Q.access(e, t, n)
        },
        _removeData: function(e, t) {
          Q.remove(e, t)
        }
      }), w.fn.extend({
        data: function(e, t) {
          var n, r, i, o = this[0],
            a = o && o.attributes;
          if (void 0 === e) {
            if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
              for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
              Q.set(o, "hasDataAttrs", !0)
            }
            return i
          }
          return "object" == typeof e ? this.each(function() {
            J.set(this, e)
          }) : _(this, function(t) {
            var n;
            if (o && void 0 === t) return void 0 !== (n = J.get(o, e)) ? n : void 0 !== (n = ee(o, e)) ? n : void 0;
            this.each(function() {
              J.set(this, e, t)
            })
          }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
          return this.each(function() {
            J.remove(this, e)
          })
        }
      }), w.extend({
        queue: function(e, t, n) {
          var r;
          if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, w.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
          t = t || "fx";
          var n = w.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = w._queueHooks(e, t);
          "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
            w.dequeue(e, t)
          }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
          var n = t + "queueHooks";
          return Q.get(e, n) || Q.access(e, n, {
            empty: w.Callbacks("once memory").add(function() {
              Q.remove(e, [t + "queue", n])
            })
          })
        }
      }), w.fn.extend({
        queue: function(e, t) {
          var n = 2;
          return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
            var n = w.queue(this, e, t);
            w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
          })
        },
        dequeue: function(e) {
          return this.each(function() {
            w.dequeue(this, e)
          })
        },
        clearQueue: function(e) {
          return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
          var n, r = 1,
            i = w.Deferred(),
            o = this,
            a = this.length,
            s = function() {
              --r || i.resolveWith(o, [o])
            };
          for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
          return s(), i.promise(t)
        }
      });
      var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        re = ["Top", "Right", "Bottom", "Left"],
        ie = i.documentElement,
        oe = function(e) {
          return w.contains(e.ownerDocument, e)
        },
        ae = {
          composed: !0
        };
      ie.getRootNode && (oe = function(e) {
        return w.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
      });
      var se = function(e, t) {
          return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === w.css(e, "display")
        },
        ue = function(e, t, n, r) {
          var i, o, a = {};
          for (o in t) a[o] = e.style[o], e.style[o] = t[o];
          for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
          return i
        };

      function le(e, t, n, r) {
        var i, o, a = 20,
          s = r ? function() {
            return r.cur()
          } : function() {
            return w.css(e, t, "")
          },
          u = s(),
          l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
          c = e.nodeType && (w.cssNumber[t] || "px" !== l && +u) && ne.exec(w.css(e, t));
        if (c && c[3] !== l) {
          for (u /= 2, l = l || c[3], c = +u || 1; a--;) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
          c *= 2, w.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
      }
      var ce = {};

      function fe(e) {
        var t, n = e.ownerDocument,
          r = e.nodeName,
          i = ce[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ce[r] = i, i)
      }

      function pe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = Q.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && se(r) && (i[o] = fe(r))) : "none" !== n && (i[o] = "none", Q.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
      }
      w.fn.extend({
        show: function() {
          return pe(this, !0)
        },
        hide: function() {
          return pe(this)
        },
        toggle: function(e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
            se(this) ? w(this).show() : w(this).hide()
          })
        }
      });
      var de = /^(?:checkbox|radio)$/i,
        he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ge = /^$|^module$|\/(?:java|ecma)script/i,
        ve = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };

      function ye(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? w.merge([e], n) : n
      }

      function me(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
      }
      ve.optgroup = ve.option, ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead, ve.th = ve.td;
      var xe, be, we = /<|&#?\w+;/;

      function Te(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
          if ((o = e[d]) || 0 === o)
            if ("object" === b(o)) w.merge(p, o.nodeType ? [o] : o);
            else if (we.test(o)) {
          for (a = a || f.appendChild(t.createElement("div")), s = (he.exec(o) || ["", ""])[1].toLowerCase(), u = ve[s] || ve._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
          w.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; o = p[d++];)
          if (r && w.inArray(o, r) > -1) i && i.push(o);
          else if (l = oe(o), a = ye(f.appendChild(o), "script"), l && me(a), n)
          for (c = 0; o = a[c++];) ge.test(o.type || "") && n.push(o);
        return f
      }
      xe = i.createDocumentFragment().appendChild(i.createElement("div")), (be = i.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), xe.appendChild(be), g.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue;
      var Ce = /^key/,
        Ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ke = /^([^.]*)(?:\.(.+)|)/;

      function Se() {
        return !0
      }

      function Ne() {
        return !1
      }

      function Ae(e, t) {
        return e === function() {
          try {
            return i.activeElement
          } catch (e) {}
        }() == ("focus" === t)
      }

      function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
          for (s in "string" != typeof n && (r = r || n, n = void 0), t) De(e, s, n, r, t[s], o);
          return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ne;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
          return w().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = w.guid++)), e.each(function() {
          w.event.add(this, t, i, r, n)
        })
      }

      function je(e, t, n) {
        n ? (Q.set(e, t, !1), w.event.add(e, t, {
          namespace: !1,
          handler: function(e) {
            var r, i, o = Q.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (o.length)(w.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (o = a.call(arguments), Q.set(this, t, o), r = n(this, t), this[t](), o !== (i = Q.get(this, t)) || r ? Q.set(this, t, !1) : i = {}, o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value
            } else o.length && (Q.set(this, t, {
              value: w.event.trigger(w.extend(o[0], w.Event.prototype), o.slice(1), this)
            }), e.stopImmediatePropagation())
          }
        })) : void 0 === Q.get(e, t) && w.event.add(e, t, Se)
      }
      w.event = {
        global: {},
        add: function(e, t, n, r, i) {
          var o, a, s, u, l, c, f, p, d, h, g, v = Q.get(e);
          if (v)
            for (n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(ie, i), n.guid || (n.guid = w.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(t) {
                return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
              }), l = (t = (t || "").match(R) || [""]).length; l--;) d = g = (s = ke.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
              type: d,
              origType: g,
              data: r,
              handler: n,
              guid: n.guid,
              selector: i,
              needsContext: i && w.expr.match.needsContext.test(i),
              namespace: h.join(".")
            }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
          var o, a, s, u, l, c, f, p, d, h, g, v = Q.hasData(e) && Q.get(e);
          if (v && (u = v.events)) {
            for (l = (t = (t || "").match(R) || [""]).length; l--;)
              if (d = g = (s = ke.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                for (f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || w.removeEvent(e, d, v.handle), delete u[d])
              } else
                for (d in u) w.event.remove(e, d + t[l], n, r, !0);
            w.isEmptyObject(u) && Q.remove(e, "handle events")
          }
        },
        dispatch: function(e) {
          var t, n, r, i, o, a, s = w.event.fix(e),
            u = new Array(arguments.length),
            l = (Q.get(this, "events") || {})[s.type] || [],
            c = w.event.special[s.type] || {};
          for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
          if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
            for (a = w.event.handlers.call(this, s, l), t = 0;
              (i = a[t++]) && !s.isPropagationStopped();)
              for (s.currentTarget = i.elem, n = 0;
                (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((w.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, s), s.result
          }
        },
        handlers: function(e, t) {
          var n, r, i, o, a, s = [],
            u = t.delegateCount,
            l = e.target;
          if (u && l.nodeType && !("click" === e.type && e.button >= 1))
            for (; l !== this; l = l.parentNode || this)
              if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                o.length && s.push({
                  elem: l,
                  handlers: o
                })
              } return l = this, u < t.length && s.push({
            elem: l,
            handlers: t.slice(u)
          }), s
        },
        addProp: function(e, t) {
          Object.defineProperty(w.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: v(t) ? function() {
              if (this.originalEvent) return t(this.originalEvent)
            } : function() {
              if (this.originalEvent) return this.originalEvent[e]
            },
            set: function(t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t
              })
            }
          })
        },
        fix: function(e) {
          return e[w.expando] ? e : new w.Event(e)
        },
        special: {
          load: {
            noBubble: !0
          },
          click: {
            setup: function(e) {
              var t = this || e;
              return de.test(t.type) && t.click && A(t, "input") && je(t, "click", Se), !1
            },
            trigger: function(e) {
              var t = this || e;
              return de.test(t.type) && t.click && A(t, "input") && je(t, "click"), !0
            },
            _default: function(e) {
              var t = e.target;
              return de.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a")
            }
          },
          beforeunload: {
            postDispatch: function(e) {
              void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
            }
          }
        }
      }, w.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
      }, w.Event = function(e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : Ne, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
      }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: Ne,
        isPropagationStopped: Ne,
        isImmediatePropagationStopped: Ne,
        isSimulated: !1,
        preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = Se, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = Se, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = Se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
      }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
          var t = e.button;
          return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ee.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
      }, w.event.addProp), w.each({
        focus: "focusin",
        blur: "focusout"
      }, function(e, t) {
        w.event.special[e] = {
          setup: function() {
            return je(this, e, Ae), !1
          },
          trigger: function() {
            return je(this, e), !0
          },
          delegateType: t
        }
      }), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function(e, t) {
        w.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function(e) {
            var n, r = e.relatedTarget,
              i = e.handleObj;
            return r && (r === this || w.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
          }
        }
      }), w.fn.extend({
        on: function(e, t, n, r) {
          return De(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
          return De(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
          var r, i;
          if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
          if ("object" == typeof e) {
            for (i in e) this.off(i, t, e[i]);
            return this
          }
          return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ne), this.each(function() {
            w.event.remove(this, e, n, t)
          })
        }
      });
      var qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Le = /<script|<style|<link/i,
        He = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

      function Pe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
      }

      function Re(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
      }

      function Me(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
      }

      function Ie(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
          if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events))
            for (i in delete a.handle, a.events = {}, l)
              for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n]);
          J.hasData(e) && (s = J.access(e), u = w.extend({}, s), J.set(t, u))
        }
      }

      function We(e, t, n, r) {
        t = s.apply([], t);
        var i, o, a, u, l, c, f = 0,
          p = e.length,
          d = p - 1,
          h = t[0],
          y = v(h);
        if (y || p > 1 && "string" == typeof h && !g.checkClone && He.test(h)) return e.each(function(i) {
          var o = e.eq(i);
          y && (t[0] = h.call(this, i, o.html())), We(o, t, n, r)
        });
        if (p && (o = (i = Te(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
          for (u = (a = w.map(ye(i, "script"), Re)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(a, ye(l, "script"))), n.call(e[f], l, f);
          if (u)
            for (c = a[a.length - 1].ownerDocument, w.map(a, Me), f = 0; f < u; f++) l = a[f], ge.test(l.type || "") && !Q.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && !l.noModule && w._evalUrl(l.src, {
              nonce: l.nonce || l.getAttribute("nonce")
            }) : x(l.textContent.replace(Oe, ""), l, c))
        }
        return e
      }

      function $e(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && oe(r) && me(ye(r, "script")), r.parentNode.removeChild(r));
        return e
      }
      w.extend({
        htmlPrefilter: function(e) {
          return e.replace(qe, "<$1></$2>")
        },
        clone: function(e, t, n) {
          var r, i, o, a, s, u, l, c = e.cloneNode(!0),
            f = oe(e);
          if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
            for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++) s = o[r], u = a[r], l = void 0, "input" === (l = u.nodeName.toLowerCase()) && de.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
          if (t)
            if (n)
              for (o = o || ye(e), a = a || ye(c), r = 0, i = o.length; r < i; r++) Ie(o[r], a[r]);
            else Ie(e, c);
          return (a = ye(c, "script")).length > 0 && me(a, !f && ye(e, "script")), c
        },
        cleanData: function(e) {
          for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
            if (G(n)) {
              if (t = n[Q.expando]) {
                if (t.events)
                  for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                n[Q.expando] = void 0
              }
              n[J.expando] && (n[J.expando] = void 0)
            }
        }
      }), w.fn.extend({
        detach: function(e) {
          return $e(this, e, !0)
        },
        remove: function(e) {
          return $e(this, e)
        },
        text: function(e) {
          return _(this, function(e) {
            return void 0 === e ? w.text(this) : this.empty().each(function() {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
            })
          }, null, e, arguments.length)
        },
        append: function() {
          return We(this, arguments, function(e) {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pe(this, e).appendChild(e)
          })
        },
        prepend: function() {
          return We(this, arguments, function(e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var t = Pe(this, e);
              t.insertBefore(e, t.firstChild)
            }
          })
        },
        before: function() {
          return We(this, arguments, function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this)
          })
        },
        after: function() {
          return We(this, arguments, function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
          })
        },
        empty: function() {
          for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
          return this
        },
        clone: function(e, t) {
          return e = null != e && e, t = null == t ? e : t, this.map(function() {
            return w.clone(this, e, t)
          })
        },
        html: function(e) {
          return _(this, function(e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if ("string" == typeof e && !Le.test(e) && !ve[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
              e = w.htmlPrefilter(e);
              try {
                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
                t = 0
              } catch (i) {}
            }
            t && this.empty().append(e)
          }, null, e, arguments.length)
        },
        replaceWith: function() {
          var e = [];
          return We(this, arguments, function(t) {
            var n = this.parentNode;
            w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this))
          }, e)
        }
      }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function(e, t) {
        w.fn[e] = function(e) {
          for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), u.apply(r, n.get());
          return this.pushStack(r)
        }
      });
      var Fe = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Be = function(e) {
          var n = e.ownerDocument.defaultView;
          return n && n.opener || (n = t), n.getComputedStyle(e)
        },
        _e = new RegExp(re.join("|"), "i");

      function ze(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Be(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = w.style(e, t)), !g.pixelBoxStyles() && Fe.test(a) && _e.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
      }

      function Ue(e, t) {
        return {
          get: function() {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get
          }
        }
      }! function() {
        function e() {
          if (c) {
            l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(l).appendChild(c);
            var e = t.getComputedStyle(c);
            r = "1%" !== e.top, u = 12 === n(e.marginLeft), c.style.right = "60%", s = 36 === n(e.right), o = 36 === n(e.width), c.style.position = "absolute", a = 12 === n(c.offsetWidth / 3), ie.removeChild(l), c = null
          }
        }

        function n(e) {
          return Math.round(parseFloat(e))
        }
        var r, o, a, s, u, l = i.createElement("div"),
          c = i.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(g, {
          boxSizingReliable: function() {
            return e(), o
          },
          pixelBoxStyles: function() {
            return e(), s
          },
          pixelPosition: function() {
            return e(), r
          },
          reliableMarginLeft: function() {
            return e(), u
          },
          scrollboxSize: function() {
            return e(), a
          }
        }))
      }();
      var Xe = ["Webkit", "Moz", "ms"],
        Ve = i.createElement("div").style,
        Ge = {};

      function Ye(e) {
        var t = w.cssProps[e] || Ge[e];
        return t || (e in Ve ? e : Ge[e] = function(e) {
          for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--;)
            if ((e = Xe[n] + t) in Ve) return e
        }(e) || e)
      }
      var Qe = /^(none|table(?!-c[ea]).+)/,
        Je = /^--/,
        Ke = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
        },
        Ze = {
          letterSpacing: "0",
          fontWeight: "400"
        };

      function et(e, t, n) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
      }

      function tt(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
          s = 0,
          u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + re[a] + "Width", !0, i))) : (u += w.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += w.css(e, "border" + re[a] + "Width", !0, i) : s += w.css(e, "border" + re[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
      }

      function nt(e, t, n) {
        var r = Be(e),
          i = (!g.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, r),
          o = i,
          a = ze(e, t, r),
          s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Fe.test(a)) {
          if (!n) return a;
          a = "auto"
        }
        return (!g.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === w.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === w.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + tt(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
      }

      function rt(e, t, n, r, i) {
        return new rt.prototype.init(e, t, n, r, i)
      }
      w.extend({
        cssHooks: {
          opacity: {
            get: function(e, t) {
              if (t) {
                var n = ze(e, "opacity");
                return "" === n ? "1" : n
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var i, o, a, s = V(t),
              u = Je.test(t),
              l = e.style;
            if (u || (t = Ye(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
            "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
          }
        },
        css: function(e, t, n, r) {
          var i, o, a, s = V(t);
          return Je.test(t) || (t = Ye(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = ze(e, t, r)), "normal" === i && t in Ze && (i = Ze[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
      }), w.each(["height", "width"], function(e, t) {
        w.cssHooks[t] = {
          get: function(e, n, r) {
            if (n) return !Qe.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? nt(e, t, r) : ue(e, Ke, function() {
              return nt(e, t, r)
            })
          },
          set: function(e, n, r) {
            var i, o = Be(e),
              a = !g.scrollboxSize() && "absolute" === o.position,
              s = (a || r) && "border-box" === w.css(e, "boxSizing", !1, o),
              u = r ? tt(e, t, r, s, o) : 0;
            return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - tt(e, t, "border", !1, o) - .5)), u && (i = ne.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), et(0, n, u)
          }
        }
      }), w.cssHooks.marginLeft = Ue(g.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(ze(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
          marginLeft: 0
        }, function() {
          return e.getBoundingClientRect().left
        })) + "px"
      }), w.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function(e, t) {
        w.cssHooks[e + t] = {
          expand: function(n) {
            for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + re[r] + t] = o[r] || o[r - 2] || o[0];
            return i
          }
        }, "margin" !== e && (w.cssHooks[e + t].set = et)
      }), w.fn.extend({
        css: function(e, t) {
          return _(this, function(e, t, n) {
            var r, i, o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Be(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
              return o
            }
            return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
          }, e, t, arguments.length > 1)
        }
      }), w.Tween = rt, rt.prototype = {
        constructor: rt,
        init: function(e, t, n, r, i, o) {
          this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
        },
        cur: function() {
          var e = rt.propHooks[this.prop];
          return e && e.get ? e.get(this) : rt.propHooks._default.get(this)
        },
        run: function(e) {
          var t, n = rt.propHooks[this.prop];
          return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rt.propHooks._default.set(this), this
        }
      }, rt.prototype.init.prototype = rt.prototype, rt.propHooks = {
        _default: {
          get: function(e) {
            var t;
            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
          },
          set: function(e) {
            w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
          }
        }
      }, rt.propHooks.scrollTop = rt.propHooks.scrollLeft = {
        set: function(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
      }, w.easing = {
        linear: function(e) {
          return e
        },
        swing: function(e) {
          return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
      }, w.fx = rt.prototype.init, w.fx.step = {};
      var it, ot, at = /^(?:toggle|show|hide)$/,
        st = /queueHooks$/;

      function ut() {
        ot && (!1 === i.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(ut) : t.setTimeout(ut, w.fx.interval), w.fx.tick())
      }

      function lt() {
        return t.setTimeout(function() {
          it = void 0
        }), it = Date.now()
      }

      function ct(e, t) {
        var n, r = 0,
          i = {
            height: e
          };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = re[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
      }

      function ft(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
          if (r = i[o].call(n, t, e)) return r
      }

      function pt(e, t, n) {
        var r, i, o = 0,
          a = pt.prefilters.length,
          s = w.Deferred().always(function() {
            delete u.elem
          }),
          u = function() {
            if (i) return !1;
            for (var t = it || lt(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
            return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
          },
          l = s.promise({
            elem: e,
            props: w.extend({}, t),
            opts: w.extend(!0, {
              specialEasing: {},
              easing: w.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: it || lt(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
              var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
              return l.tweens.push(r), r
            },
            stop: function(t) {
              var n = 0,
                r = t ? l.tweens.length : 0;
              if (i) return this;
              for (i = !0; n < r; n++) l.tweens[n].run(1);
              return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
            }
          }),
          c = l.props;
        for (! function(e, t) {
            var n, r, i, o, a;
            for (n in e)
              if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a)
                for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
              else t[r] = i
          }(c, l.opts.specialEasing); o < a; o++)
          if (r = pt.prefilters[o].call(l, e, c, l.opts)) return v(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return w.map(c, ft, l), v(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
          elem: e,
          anim: l,
          queue: l.opts.queue
        })), l
      }
      w.Animation = w.extend(pt, {
          tweeners: {
            "*": [function(e, t) {
              var n = this.createTween(e, t);
              return le(n.elem, e, ne.exec(t), n), n
            }]
          },
          tweener: function(e, t) {
            v(e) ? (t = e, e = ["*"]) : e = e.match(R);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
          },
          prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
              p = this,
              d = {},
              h = e.style,
              g = e.nodeType && se(e),
              v = Q.get(e, "fxshow");
            for (r in n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                a.unqueued || s()
              }), a.unqueued++, p.always(function() {
                p.always(function() {
                  a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
                })
              })), t)
              if (i = t[r], at.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                  if ("show" !== i || !v || void 0 === v[r]) continue;
                  g = !0
                }
                d[r] = v && v[r] || w.style(e, r)
              } if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d))
              for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (pe([e], !0), l = e.style.display || l, c = w.css(e, "display"), pe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function() {
                  h.display = l
                }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                  h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
                display: l
              }), o && (v.hidden = !g), g && pe([e], !0), p.done(function() {
                for (r in g || pe([e]), Q.remove(e, "fxshow"), d) w.style(e, r, d[r])
              })), u = ft(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
          }],
          prefilter: function(e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
          }
        }), w.speed = function(e, t, n) {
          var r = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || v(e) && e,
            duration: e,
            easing: n && t || t && !v(t) && t
          };
          return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            v(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
          }, r
        }, w.fn.extend({
          fadeTo: function(e, t, n, r) {
            return this.filter(se).css("opacity", 0).show().end().animate({
              opacity: t
            }, e, n, r)
          },
          animate: function(e, t, n, r) {
            var i = w.isEmptyObject(e),
              o = w.speed(t, n, r),
              a = function() {
                var t = pt(this, w.extend({}, e), o);
                (i || Q.get(this, "finish")) && t.stop(!0)
              };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
          },
          stop: function(e, t, n) {
            var r = function(e) {
              var t = e.stop;
              delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
              var t = !0,
                i = null != e && e + "queueHooks",
                o = w.timers,
                a = Q.get(this);
              if (i) a[i] && a[i].stop && r(a[i]);
              else
                for (i in a) a[i] && a[i].stop && st.test(i) && r(a[i]);
              for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
              !t && n || w.dequeue(this, e)
            })
          },
          finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
              var t, n = Q.get(this),
                r = n[e + "queue"],
                i = n[e + "queueHooks"],
                o = w.timers,
                a = r ? r.length : 0;
              for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
              for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
              delete n.finish
            })
          }
        }), w.each(["toggle", "show", "hide"], function(e, t) {
          var n = w.fn[t];
          w.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ct(t, !0), e, r, i)
          }
        }), w.each({
          slideDown: ct("show"),
          slideUp: ct("hide"),
          slideToggle: ct("toggle"),
          fadeIn: {
            opacity: "show"
          },
          fadeOut: {
            opacity: "hide"
          },
          fadeToggle: {
            opacity: "toggle"
          }
        }, function(e, t) {
          w.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
          }
        }), w.timers = [], w.fx.tick = function() {
          var e, t = 0,
            n = w.timers;
          for (it = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || w.fx.stop(), it = void 0
        }, w.fx.timer = function(e) {
          w.timers.push(e), w.fx.start()
        }, w.fx.interval = 13, w.fx.start = function() {
          ot || (ot = !0, ut())
        }, w.fx.stop = function() {
          ot = null
        }, w.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
        }, w.fn.delay = function(e, n) {
          return e = w.fx && w.fx.speeds[e] || e, n = n || "fx", this.queue(n, function(n, r) {
            var i = t.setTimeout(n, e);
            r.stop = function() {
              t.clearTimeout(i)
            }
          })
        },
        function() {
          var e = i.createElement("input"),
            t = i.createElement("select").appendChild(i.createElement("option"));
          e.type = "checkbox", g.checkOn = "" !== e.value, g.optSelected = t.selected, (e = i.createElement("input")).value = "t", e.type = "radio", g.radioValue = "t" === e.value
        }();
      var dt, ht = w.expr.attrHandle;
      w.fn.extend({
        attr: function(e, t) {
          return _(this, w.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
          return this.each(function() {
            w.removeAttr(this, e)
          })
        }
      }), w.extend({
        attr: function(e, t, n) {
          var r, i, o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
          type: {
            set: function(e, t) {
              if (!g.radioValue && "radio" === t && A(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t
              }
            }
          }
        },
        removeAttr: function(e, t) {
          var n, r = 0,
            i = t && t.match(R);
          if (i && 1 === e.nodeType)
            for (; n = i[r++];) e.removeAttribute(n)
        }
      }), dt = {
        set: function(e, t, n) {
          return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
      }, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ht[t] || w.find.attr;
        ht[t] = function(e, t, r) {
          var i, o, a = t.toLowerCase();
          return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i
        }
      });
      var gt = /^(?:input|select|textarea|button)$/i,
        vt = /^(?:a|area)$/i;

      function yt(e) {
        return (e.match(R) || []).join(" ")
      }

      function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
      }

      function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
      }
      w.fn.extend({
        prop: function(e, t) {
          return _(this, w.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
          return this.each(function() {
            delete this[w.propFix[e] || e]
          })
        }
      }), w.extend({
        prop: function(e, t, n) {
          var r, i, o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
          tabIndex: {
            get: function(e) {
              var t = w.find.attr(e, "tabindex");
              return t ? parseInt(t, 10) : gt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
            }
          }
        },
        propFix: {
          for: "htmlFor",
          class: "className"
        }
      }), g.optSelected || (w.propHooks.selected = {
        get: function(e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
      }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        w.propFix[this.toLowerCase()] = this
      }), w.fn.extend({
        addClass: function(e) {
          var t, n, r, i, o, a, s, u = 0;
          if (v(e)) return this.each(function(t) {
            w(this).addClass(e.call(this, t, mt(this)))
          });
          if ((t = xt(e)).length)
            for (; n = this[u++];)
              if (i = mt(n), r = 1 === n.nodeType && " " + yt(i) + " ") {
                for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (s = yt(r)) && n.setAttribute("class", s)
              } return this
        },
        removeClass: function(e) {
          var t, n, r, i, o, a, s, u = 0;
          if (v(e)) return this.each(function(t) {
            w(this).removeClass(e.call(this, t, mt(this)))
          });
          if (!arguments.length) return this.attr("class", "");
          if ((t = xt(e)).length)
            for (; n = this[u++];)
              if (i = mt(n), r = 1 === n.nodeType && " " + yt(i) + " ") {
                for (a = 0; o = t[a++];)
                  for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                i !== (s = yt(r)) && n.setAttribute("class", s)
              } return this
        },
        toggleClass: function(e, t) {
          var n = typeof e,
            r = "string" === n || Array.isArray(e);
          return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each(function(n) {
            w(this).toggleClass(e.call(this, n, mt(this), t), t)
          }) : this.each(function() {
            var t, i, o, a;
            if (r)
              for (i = 0, o = w(this), a = xt(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
            else void 0 !== e && "boolean" !== n || ((t = mt(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""))
          })
        },
        hasClass: function(e) {
          var t, n, r = 0;
          for (t = " " + e + " "; n = this[r++];)
            if (1 === n.nodeType && (" " + yt(mt(n)) + " ").indexOf(t) > -1) return !0;
          return !1
        }
      });
      var bt = /\r/g;
      w.fn.extend({
        val: function(e) {
          var t, n, r, i = this[0];
          return arguments.length ? (r = v(e), this.each(function(n) {
            var i;
            1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function(e) {
              return null == e ? "" : e + ""
            })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
          })) : i ? (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(bt, "") : null == n ? "" : n : void 0
        }
      }), w.extend({
        valHooks: {
          option: {
            get: function(e) {
              var t = w.find.attr(e, "value");
              return null != t ? t : yt(w.text(e))
            }
          },
          select: {
            get: function(e) {
              var t, n, r, i = e.options,
                o = e.selectedIndex,
                a = "select-one" === e.type,
                s = a ? null : [],
                u = a ? o + 1 : i.length;
              for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                  if (t = w(n).val(), a) return t;
                  s.push(t)
                } return s
            },
            set: function(e, t) {
              for (var n, r, i = e.options, o = w.makeArray(t), a = i.length; a--;)((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
              return n || (e.selectedIndex = -1), o
            }
          }
        }
      }), w.each(["radio", "checkbox"], function() {
        w.valHooks[this] = {
          set: function(e, t) {
            if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
          }
        }, g.checkOn || (w.valHooks[this].get = function(e) {
          return null === e.getAttribute("value") ? "on" : e.value
        })
      }), g.focusin = "onfocusin" in t;
      var wt = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function(e) {
          e.stopPropagation()
        };
      w.extend(w.event, {
        trigger: function(e, n, r, o) {
          var a, s, u, l, c, f, d, h, g = [r || i],
            m = p.call(e, "type") ? e.type : e,
            x = p.call(e, "namespace") ? e.namespace.split(".") : [];
          if (s = h = u = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (x = m.split("."), m = x.shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, (e = e[w.expando] ? e : new w.Event(m, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = x.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : w.makeArray(n, [e]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(r, n))) {
            if (!o && !d.noBubble && !y(r)) {
              for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) g.push(s), u = s;
              u === (r.ownerDocument || i) && g.push(u.defaultView || u.parentWindow || t)
            }
            for (a = 0;
              (s = g[a++]) && !e.isPropagationStopped();) h = s, e.type = a > 1 ? l : d.bindType || m, (f = (Q.get(s, "events") || {})[e.type] && Q.get(s, "handle")) && f.apply(s, n), (f = c && s[c]) && f.apply && G(s) && (e.result = f.apply(s, n), !1 === e.result && e.preventDefault());
            return e.type = m, o || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(g.pop(), n) || !G(r) || c && v(r[m]) && !y(r) && ((u = r[c]) && (r[c] = null), w.event.triggered = m, e.isPropagationStopped() && h.addEventListener(m, Tt), r[m](), e.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (r[c] = u)), e.result
          }
        },
        simulate: function(e, t, n) {
          var r = w.extend(new w.Event, n, {
            type: e,
            isSimulated: !0
          });
          w.event.trigger(r, null, t)
        }
      }), w.fn.extend({
        trigger: function(e, t) {
          return this.each(function() {
            w.event.trigger(e, t, this)
          })
        },
        triggerHandler: function(e, t) {
          var n = this[0];
          if (n) return w.event.trigger(e, t, n, !0)
        }
      }), g.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
      }, function(e, t) {
        var n = function(e) {
          w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
          setup: function() {
            var r = this.ownerDocument || this,
              i = Q.access(r, t);
            i || r.addEventListener(e, n, !0), Q.access(r, t, (i || 0) + 1)
          },
          teardown: function() {
            var r = this.ownerDocument || this,
              i = Q.access(r, t) - 1;
            i ? Q.access(r, t, i) : (r.removeEventListener(e, n, !0), Q.remove(r, t))
          }
        }
      });
      var Ct = t.location,
        Et = Date.now(),
        kt = /\?/;
      w.parseXML = function(e) {
        var n;
        if (!e || "string" != typeof e) return null;
        try {
          n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (r) {
          n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + e), n
      };
      var St = /\[\]$/,
        Nt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Dt = /^(?:input|select|textarea|keygen)/i;

      function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t)) w.each(t, function(t, i) {
          n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== b(t)) r(e, t);
        else
          for (i in t) jt(e + "[" + i + "]", t[i], n, r)
      }
      w.param = function(e, t) {
        var n, r = [],
          i = function(e, t) {
            var n = v(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
          };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function() {
          i(this.name, this.value)
        });
        else
          for (n in e) jt(n, e[n], t, i);
        return r.join("&")
      }, w.fn.extend({
        serialize: function() {
          return w.param(this.serializeArray())
        },
        serializeArray: function() {
          return this.map(function() {
            var e = w.prop(this, "elements");
            return e ? w.makeArray(e) : this
          }).filter(function() {
            var e = this.type;
            return this.name && !w(this).is(":disabled") && Dt.test(this.nodeName) && !At.test(e) && (this.checked || !de.test(e))
          }).map(function(e, t) {
            var n = w(this).val();
            return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
              return {
                name: t.name,
                value: e.replace(Nt, "\r\n")
              }
            }) : {
              name: t.name,
              value: n.replace(Nt, "\r\n")
            }
          }).get()
        }
      });
      var qt = /%20/g,
        Lt = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        Mt = {},
        It = {},
        Wt = "*/".concat("*"),
        $t = i.createElement("a");

      function Ft(e) {
        return function(t, n) {
          "string" != typeof t && (n = t, t = "*");
          var r, i = 0,
            o = t.toLowerCase().match(R) || [];
          if (v(n))
            for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
      }

      function Bt(e, t, n, r) {
        var i = {},
          o = e === It;

        function a(s) {
          var u;
          return i[s] = !0, w.each(e[s] || [], function(e, s) {
            var l = s(t, n, r);
            return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
          }), u
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
      }

      function _t(e, t) {
        var n, r, i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e
      }
      $t.href = Ct.href, w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: Ct.href,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Wt,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": w.parseXML
          },
          flatOptions: {
            url: !0,
            context: !0
          }
        },
        ajaxSetup: function(e, t) {
          return t ? _t(_t(e, w.ajaxSettings), t) : _t(w.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Mt),
        ajaxTransport: Ft(It),
        ajax: function(e, n) {
          "object" == typeof e && (n = e, e = void 0), n = n || {};
          var r, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n),
            g = h.context || h,
            v = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
            y = w.Deferred(),
            m = w.Callbacks("once memory"),
            x = h.statusCode || {},
            b = {},
            T = {},
            C = "canceled",
            E = {
              readyState: 0,
              getResponseHeader: function(e) {
                var t;
                if (c) {
                  if (!s)
                    for (s = {}; t = Ot.exec(a);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                  t = s[e.toLowerCase() + " "]
                }
                return null == t ? null : t.join(", ")
              },
              getAllResponseHeaders: function() {
                return c ? a : null
              },
              setRequestHeader: function(e, t) {
                return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
              },
              overrideMimeType: function(e) {
                return null == c && (h.mimeType = e), this
              },
              statusCode: function(e) {
                var t;
                if (e)
                  if (c) E.always(e[E.status]);
                  else
                    for (t in e) x[t] = [x[t], e[t]];
                return this
              },
              abort: function(e) {
                var t = e || C;
                return r && r.abort(t), k(0, t), this
              }
            };
          if (y.promise(E), h.url = ((e || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(R) || [""], null == h.crossDomain) {
            l = i.createElement("a");
            try {
              l.href = h.url, l.href = l.href, h.crossDomain = $t.protocol + "//" + $t.host != l.protocol + "//" + l.host
            } catch (S) {
              h.crossDomain = !0
            }
          }
          if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), Bt(Mt, h, n, E), c) return E;
          for (p in (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Pt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : h.accepts["*"]), h.headers) E.setRequestHeader(p, h.headers[p]);
          if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
          if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), r = Bt(It, h, n, E)) {
            if (E.readyState = 1, f && v.trigger("ajaxSend", [E, h]), c) return E;
            h.async && h.timeout > 0 && (u = t.setTimeout(function() {
              E.abort("timeout")
            }, h.timeout));
            try {
              c = !1, r.send(b, k)
            } catch (S) {
              if (c) throw S;
              k(-1, S)
            }
          } else k(-1, "No Transport");

          function k(e, n, i, s) {
            var l, p, d, b, T, C = n;
            c || (c = !0, u && t.clearTimeout(u), r = void 0, a = s || "", E.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, i && (b = function(e, t, n) {
              for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
              if (r)
                for (i in s)
                  if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                  } if (u[0] in n) o = u[0];
              else {
                for (i in n) {
                  if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                  }
                  a || (a = i)
                }
                o = o || a
              }
              if (o) return o !== u[0] && u.unshift(o), n[o]
            }(h, E, i)), b = function(e, t, n, r) {
              var i, o, a, s, u, l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              for (o = c.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                if (!(a = l[u + " " + o] || l["* " + o]))
                  for (i in l)
                    if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                      !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                      break
                    } if (!0 !== a)
                  if (a && e.throws) t = a(t);
                  else try {
                    t = a(t)
                  } catch (S) {
                    return {
                      state: "parsererror",
                      error: a ? S : "No conversion from " + u + " to " + o
                    }
                  }
              }
              return {
                state: "success",
                data: t
              }
            }(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === e || "HEAD" === h.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !e && C || (C = "error", e < 0 && (e = 0))), E.status = e, E.statusText = (n || C) + "", l ? y.resolveWith(g, [p, C, E]) : y.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (v.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")))
          }
          return E
        },
        getJSON: function(e, t, n) {
          return w.get(e, t, n, "json")
        },
        getScript: function(e, t) {
          return w.get(e, void 0, t, "script")
        }
      }), w.each(["get", "post"], function(e, t) {
        w[t] = function(e, n, r, i) {
          return v(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
            url: e,
            type: t,
            dataType: i,
            data: n,
            success: r
          }, w.isPlainObject(e) && e))
        }
      }), w._evalUrl = function(e, t) {
        return w.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: {
            "text script": function() {}
          },
          dataFilter: function(e) {
            w.globalEval(e, t)
          }
        })
      }, w.fn.extend({
        wrapAll: function(e) {
          var t;
          return this[0] && (v(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
            for (var e = this; e.firstElementChild;) e = e.firstElementChild;
            return e
          }).append(this)), this
        },
        wrapInner: function(e) {
          return v(e) ? this.each(function(t) {
            w(this).wrapInner(e.call(this, t))
          }) : this.each(function() {
            var t = w(this),
              n = t.contents();
            n.length ? n.wrapAll(e) : t.append(e)
          })
        },
        wrap: function(e) {
          var t = v(e);
          return this.each(function(n) {
            w(this).wrapAll(t ? e.call(this, n) : e)
          })
        },
        unwrap: function(e) {
          return this.parent(e).not("body").each(function() {
            w(this).replaceWith(this.childNodes)
          }), this
        }
      }), w.expr.pseudos.hidden = function(e) {
        return !w.expr.pseudos.visible(e)
      }, w.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
      }, w.ajaxSettings.xhr = function() {
        try {
          return new t.XMLHttpRequest
        } catch (e) {}
      };
      var zt = {
          0: 200,
          1223: 204
        },
        Ut = w.ajaxSettings.xhr();
      g.cors = !!Ut && "withCredentials" in Ut, g.ajax = Ut = !!Ut, w.ajaxTransport(function(e) {
        var n, r;
        if (g.cors || Ut && !e.crossDomain) return {
          send: function(i, o) {
            var a, s = e.xhr();
            if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
              for (a in e.xhrFields) s[a] = e.xhrFields[a];
            for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
            n = function(e) {
              return function() {
                n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(zt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                  binary: s.response
                } : {
                  text: s.responseText
                }, s.getAllResponseHeaders()))
              }
            }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
              4 === s.readyState && t.setTimeout(function() {
                n && r()
              })
            }, n = n("abort");
            try {
              s.send(e.hasContent && e.data || null)
            } catch (u) {
              if (n) throw u
            }
          },
          abort: function() {
            n && n()
          }
        }
      }), w.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
      }), w.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function(e) {
            return w.globalEval(e), e
          }
        }
      }), w.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
      }), w.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
          send: function(r, o) {
            t = w("<script>").attr(e.scriptAttrs || {}).prop({
              charset: e.scriptCharset,
              src: e.url
            }).on("load error", n = function(e) {
              t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
            }), i.head.appendChild(t[0])
          },
          abort: function() {
            n && n()
          }
        }
      });
      var Xt, Vt = [],
        Gt = /(=)\?(?=&|$)|\?\?/;
      w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var e = Vt.pop() || w.expando + "_" + Et++;
          return this[e] = !0, e
        }
      }), w.ajaxPrefilter("json jsonp", function(e, n, r) {
        var i, o, a, s = !1 !== e.jsonp && (Gt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Gt, "$1" + i) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
          return a || w.error(i + " was not called"), a[0]
        }, e.dataTypes[0] = "json", o = t[i], t[i] = function() {
          a = arguments
        }, r.always(function() {
          void 0 === o ? w(t).removeProp(i) : t[i] = o, e[i] && (e.jsonpCallback = n.jsonpCallback, Vt.push(i)), a && v(o) && o(a[0]), a = o = void 0
        }), "script"
      }), g.createHTMLDocument = ((Xt = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Xt.childNodes.length), w.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((r = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(r)) : t = i), a = !n && [], (o = D.exec(e)) ? [t.createElement(o[1])] : (o = Te([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes)));
        var r, o, a
      }, w.fn.load = function(e, t, n) {
        var r, i, o, a = this,
          s = e.indexOf(" ");
        return s > -1 && (r = yt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({
          url: e,
          type: i || "GET",
          dataType: "html",
          data: t
        }).done(function(e) {
          o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
          a.each(function() {
            n.apply(this, o || [e.responseText, t, e])
          })
        }), this
      }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        w.fn[t] = function(e) {
          return this.on(t, e)
        }
      }), w.expr.pseudos.animated = function(e) {
        return w.grep(w.timers, function(t) {
          return e === t.elem
        }).length
      }, w.offset = {
        setOffset: function(e, t, n) {
          var r, i, o, a, s, u, l = w.css(e, "position"),
            c = w(e),
            f = {};
          "static" === l && (e.style.position = "relative"), s = c.offset(), o = w.css(e, "top"), u = w.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), v(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
      }, w.fn.extend({
        offset: function(e) {
          if (arguments.length) return void 0 === e ? this : this.each(function(t) {
            w.offset.setOffset(this, e, t)
          });
          var t, n, r = this[0];
          return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
            top: t.top + n.pageYOffset,
            left: t.left + n.pageXOffset
          }) : {
            top: 0,
            left: 0
          } : void 0
        },
        position: function() {
          if (this[0]) {
            var e, t, n, r = this[0],
              i = {
                top: 0,
                left: 0
              };
            if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
            else {
              for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
              e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
            }
            return {
              top: t.top - i.top - w.css(r, "marginTop", !0),
              left: t.left - i.left - w.css(r, "marginLeft", !0)
            }
          }
        },
        offsetParent: function() {
          return this.map(function() {
            for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
            return e || ie
          })
        }
      }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
      }, function(e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function(r) {
          return _(this, function(e, r, i) {
            var o;
            if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
            o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
          }, e, r, arguments.length)
        }
      }), w.each(["top", "left"], function(e, t) {
        w.cssHooks[t] = Ue(g.pixelPosition, function(e, n) {
          if (n) return n = ze(e, t), Fe.test(n) ? w(e).position()[t] + "px" : n
        })
      }), w.each({
        Height: "height",
        Width: "width"
      }, function(e, t) {
        w.each({
          padding: "inner" + e,
          content: t,
          "": "outer" + e
        }, function(n, r) {
          w.fn[r] = function(i, o) {
            var a = arguments.length && (n || "boolean" != typeof i),
              s = n || (!0 === i || !0 === o ? "margin" : "border");
            return _(this, function(t, n, i) {
              var o;
              return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
            }, t, a ? i : void 0, a)
          }
        })
      }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        w.fn[t] = function(e, n) {
          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
      }), w.fn.extend({
        hover: function(e, t) {
          return this.mouseenter(e).mouseleave(t || e)
        }
      }), w.fn.extend({
        bind: function(e, t, n) {
          return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
          return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
          return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
      }), w.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = a.call(arguments, 2), (i = function() {
          return e.apply(t || this, r.concat(a.call(arguments)))
        }).guid = e.guid = e.guid || w.guid++, i
      }, w.holdReady = function(e) {
        e ? w.readyWait++ : w.ready(!0)
      }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = A, w.isFunction = v, w.isWindow = y, w.camelCase = V, w.type = b, w.now = Date.now, w.isNumeric = function(e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
      }, "function" == typeof e && e.amd && e("jquery", [], function() {
        return w
      });
      var Yt = t.jQuery,
        Qt = t.$;
      return w.noConflict = function(e) {
        return t.$ === w && (t.$ = Qt), e && t.jQuery === w && (t.jQuery = Yt), w
      }, n || (t.jQuery = t.$ = w), w
    });
  }, {
    "process": "FT5O"
  }],
  "AX6u": [function(require, module, exports) {
    var define;
    var t;
    ! function(n, i) {
      "object" == typeof exports ? module.exports = exports = i() : "function" == typeof t && t.amd ? t([], i) : n.CryptoJS = i()
    }(this, function() {
      var t = t || function(t, n) {
        var i = Object.create || function() {
            function t() {}
            return function(n) {
              var i;
              return t.prototype = n, i = new t, t.prototype = null, i
            }
          }(),
          r = {},
          e = r.lib = {},
          o = e.Base = {
            extend: function(t) {
              var n = i(this);
              return t && n.mixIn(t), n.hasOwnProperty("init") && this.init !== n.init || (n.init = function() {
                n.$super.init.apply(this, arguments)
              }), n.init.prototype = n, n.$super = this, n
            },
            create: function() {
              var t = this.extend();
              return t.init.apply(t, arguments), t
            },
            init: function() {},
            mixIn: function(t) {
              for (var n in t) t.hasOwnProperty(n) && (this[n] = t[n]);
              t.hasOwnProperty("toString") && (this.toString = t.toString)
            },
            clone: function() {
              return this.init.prototype.extend(this)
            }
          },
          s = e.WordArray = o.extend({
            init: function(t, n) {
              t = this.words = t || [], this.sigBytes = null != n ? n : 4 * t.length
            },
            toString: function(t) {
              return (t || c).stringify(this)
            },
            concat: function(t) {
              var n = this.words,
                i = t.words,
                r = this.sigBytes,
                e = t.sigBytes;
              if (this.clamp(), r % 4)
                for (var o = 0; o < e; o++) {
                  var s = i[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                  n[r + o >>> 2] |= s << 24 - (r + o) % 4 * 8
                } else
                  for (o = 0; o < e; o += 4) n[r + o >>> 2] = i[o >>> 2];
              return this.sigBytes += e, this
            },
            clamp: function() {
              var n = this.words,
                i = this.sigBytes;
              n[i >>> 2] &= 4294967295 << 32 - i % 4 * 8, n.length = t.ceil(i / 4)
            },
            clone: function() {
              var t = o.clone.call(this);
              return t.words = this.words.slice(0), t
            },
            random: function(n) {
              for (var i, r = [], e = function(n) {
                  n = n;
                  var i = 987654321,
                    r = 4294967295;
                  return function() {
                    var e = ((i = 36969 * (65535 & i) + (i >> 16) & r) << 16) + (n = 18e3 * (65535 & n) + (n >> 16) & r) & r;
                    return e /= 4294967296, (e += .5) * (t.random() > .5 ? 1 : -1)
                  }
                }, o = 0; o < n; o += 4) {
                var a = e(4294967296 * (i || t.random()));
                i = 987654071 * a(), r.push(4294967296 * a() | 0)
              }
              return new s.init(r, n)
            }
          }),
          a = r.enc = {},
          c = a.Hex = {
            stringify: function(t) {
              for (var n = t.words, i = t.sigBytes, r = [], e = 0; e < i; e++) {
                var o = n[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                r.push((o >>> 4).toString(16)), r.push((15 & o).toString(16))
              }
              return r.join("")
            },
            parse: function(t) {
              for (var n = t.length, i = [], r = 0; r < n; r += 2) i[r >>> 3] |= parseInt(t.substr(r, 2), 16) << 24 - r % 8 * 4;
              return new s.init(i, n / 2)
            }
          },
          u = a.Latin1 = {
            stringify: function(t) {
              for (var n = t.words, i = t.sigBytes, r = [], e = 0; e < i; e++) {
                var o = n[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                r.push(String.fromCharCode(o))
              }
              return r.join("")
            },
            parse: function(t) {
              for (var n = t.length, i = [], r = 0; r < n; r++) i[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8;
              return new s.init(i, n)
            }
          },
          f = a.Utf8 = {
            stringify: function(t) {
              try {
                return decodeURIComponent(escape(u.stringify(t)))
              } catch (n) {
                throw new Error("Malformed UTF-8 data")
              }
            },
            parse: function(t) {
              return u.parse(unescape(encodeURIComponent(t)))
            }
          },
          h = e.BufferedBlockAlgorithm = o.extend({
            reset: function() {
              this._data = new s.init, this._nDataBytes = 0
            },
            _append: function(t) {
              "string" == typeof t && (t = f.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
            },
            _process: function(n) {
              var i = this._data,
                r = i.words,
                e = i.sigBytes,
                o = this.blockSize,
                a = e / (4 * o),
                c = (a = n ? t.ceil(a) : t.max((0 | a) - this._minBufferSize, 0)) * o,
                u = t.min(4 * c, e);
              if (c) {
                for (var f = 0; f < c; f += o) this._doProcessBlock(r, f);
                var h = r.splice(0, c);
                i.sigBytes -= u
              }
              return new s.init(h, u)
            },
            clone: function() {
              var t = o.clone.call(this);
              return t._data = this._data.clone(), t
            },
            _minBufferSize: 0
          }),
          p = (e.Hasher = h.extend({
            cfg: o.extend(),
            init: function(t) {
              this.cfg = this.cfg.extend(t), this.reset()
            },
            reset: function() {
              h.reset.call(this), this._doReset()
            },
            update: function(t) {
              return this._append(t), this._process(), this
            },
            finalize: function(t) {
              return t && this._append(t), this._doFinalize()
            },
            blockSize: 16,
            _createHelper: function(t) {
              return function(n, i) {
                return new t.init(i).finalize(n)
              }
            },
            _createHmacHelper: function(t) {
              return function(n, i) {
                return new p.HMAC.init(t, i).finalize(n)
              }
            }
          }), r.algo = {});
        return r
      }(Math);
      return t
    });
  }, {}],
  "RklT": [function(require, module, exports) {
    var define;
    var r;
    ! function(t, n) {
      "object" == typeof exports ? module.exports = exports = n(require("./core")) : "function" == typeof r && r.amd ? r(["./core"], n) : n(t.CryptoJS)
    }(this, function(r) {
      return function(t) {
        var n = r,
          e = n.lib,
          o = e.WordArray,
          a = e.Hasher,
          s = n.algo,
          i = [];
        ! function() {
          for (var r = 0; r < 64; r++) i[r] = 4294967296 * t.abs(t.sin(r + 1)) | 0
        }();
        var c = s.MD5 = a.extend({
          _doReset: function() {
            this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878])
          },
          _doProcessBlock: function(r, t) {
            for (var n = 0; n < 16; n++) {
              var e = t + n,
                o = r[e];
              r[e] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8)
            }
            var a = this._hash.words,
              s = r[t + 0],
              c = r[t + 1],
              l = r[t + 2],
              _ = r[t + 3],
              d = r[t + 4],
              p = r[t + 5],
              y = r[t + 6],
              D = r[t + 7],
              H = r[t + 8],
              M = r[t + 9],
              g = r[t + 10],
              m = r[t + 11],
              w = r[t + 12],
              x = r[t + 13],
              B = r[t + 14],
              b = r[t + 15],
              j = a[0],
              k = a[1],
              q = a[2],
              z = a[3];
            j = h(j, k, q, z, s, 7, i[0]), z = h(z, j, k, q, c, 12, i[1]), q = h(q, z, j, k, l, 17, i[2]), k = h(k, q, z, j, _, 22, i[3]), j = h(j, k, q, z, d, 7, i[4]), z = h(z, j, k, q, p, 12, i[5]), q = h(q, z, j, k, y, 17, i[6]), k = h(k, q, z, j, D, 22, i[7]), j = h(j, k, q, z, H, 7, i[8]), z = h(z, j, k, q, M, 12, i[9]), q = h(q, z, j, k, g, 17, i[10]), k = h(k, q, z, j, m, 22, i[11]), j = h(j, k, q, z, w, 7, i[12]), z = h(z, j, k, q, x, 12, i[13]), q = h(q, z, j, k, B, 17, i[14]), j = u(j, k = h(k, q, z, j, b, 22, i[15]), q, z, c, 5, i[16]), z = u(z, j, k, q, y, 9, i[17]), q = u(q, z, j, k, m, 14, i[18]), k = u(k, q, z, j, s, 20, i[19]), j = u(j, k, q, z, p, 5, i[20]), z = u(z, j, k, q, g, 9, i[21]), q = u(q, z, j, k, b, 14, i[22]), k = u(k, q, z, j, d, 20, i[23]), j = u(j, k, q, z, M, 5, i[24]), z = u(z, j, k, q, B, 9, i[25]), q = u(q, z, j, k, _, 14, i[26]), k = u(k, q, z, j, H, 20, i[27]), j = u(j, k, q, z, x, 5, i[28]), z = u(z, j, k, q, l, 9, i[29]), q = u(q, z, j, k, D, 14, i[30]), j = f(j, k = u(k, q, z, j, w, 20, i[31]), q, z, p, 4, i[32]), z = f(z, j, k, q, H, 11, i[33]), q = f(q, z, j, k, m, 16, i[34]), k = f(k, q, z, j, B, 23, i[35]), j = f(j, k, q, z, c, 4, i[36]), z = f(z, j, k, q, d, 11, i[37]), q = f(q, z, j, k, D, 16, i[38]), k = f(k, q, z, j, g, 23, i[39]), j = f(j, k, q, z, x, 4, i[40]), z = f(z, j, k, q, s, 11, i[41]), q = f(q, z, j, k, _, 16, i[42]), k = f(k, q, z, j, y, 23, i[43]), j = f(j, k, q, z, M, 4, i[44]), z = f(z, j, k, q, w, 11, i[45]), q = f(q, z, j, k, b, 16, i[46]), j = v(j, k = f(k, q, z, j, l, 23, i[47]), q, z, s, 6, i[48]), z = v(z, j, k, q, D, 10, i[49]), q = v(q, z, j, k, B, 15, i[50]), k = v(k, q, z, j, p, 21, i[51]), j = v(j, k, q, z, w, 6, i[52]), z = v(z, j, k, q, _, 10, i[53]), q = v(q, z, j, k, g, 15, i[54]), k = v(k, q, z, j, c, 21, i[55]), j = v(j, k, q, z, H, 6, i[56]), z = v(z, j, k, q, b, 10, i[57]), q = v(q, z, j, k, y, 15, i[58]), k = v(k, q, z, j, x, 21, i[59]), j = v(j, k, q, z, d, 6, i[60]), z = v(z, j, k, q, m, 10, i[61]), q = v(q, z, j, k, l, 15, i[62]), k = v(k, q, z, j, M, 21, i[63]), a[0] = a[0] + j | 0, a[1] = a[1] + k | 0, a[2] = a[2] + q | 0, a[3] = a[3] + z | 0
          },
          _doFinalize: function() {
            var r = this._data,
              n = r.words,
              e = 8 * this._nDataBytes,
              o = 8 * r.sigBytes;
            n[o >>> 5] |= 128 << 24 - o % 32;
            var a = t.floor(e / 4294967296),
              s = e;
            n[15 + (o + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), n[14 + (o + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), r.sigBytes = 4 * (n.length + 1), this._process();
            for (var i = this._hash, c = i.words, h = 0; h < 4; h++) {
              var u = c[h];
              c[h] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8)
            }
            return i
          },
          clone: function() {
            var r = a.clone.call(this);
            return r._hash = this._hash.clone(), r
          }
        });

        function h(r, t, n, e, o, a, s) {
          var i = r + (t & n | ~t & e) + o + s;
          return (i << a | i >>> 32 - a) + t
        }

        function u(r, t, n, e, o, a, s) {
          var i = r + (t & e | n & ~e) + o + s;
          return (i << a | i >>> 32 - a) + t
        }

        function f(r, t, n, e, o, a, s) {
          var i = r + (t ^ n ^ e) + o + s;
          return (i << a | i >>> 32 - a) + t
        }

        function v(r, t, n, e, o, a, s) {
          var i = r + (n ^ (t | ~e)) + o + s;
          return (i << a | i >>> 32 - a) + t
        }
        n.MD5 = a._createHelper(c), n.HmacMD5 = a._createHmacHelper(c)
      }(Math), r.MD5
    });
  }, {
    "./core": "AX6u"
  }],
  "pQse": [function(require, module, exports) {
    var define;
    var global = arguments[3];
    var e, t = arguments[3];
    ! function(t, n) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof e && e.amd ? e(n) : t.moment = n()
    }(this, function() {
      "use strict";
      var e, t;

      function n() {
        return e.apply(null, arguments)
      }

      function s(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
      }

      function i(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e)
      }

      function r(e) {
        return void 0 === e
      }

      function a(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
      }

      function o(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
      }

      function u(e, t) {
        var n, s = [];
        for (n = 0; n < e.length; ++n) s.push(t(e[n], n));
        return s
      }

      function l(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }

      function h(e, t) {
        for (var n in t) l(t, n) && (e[n] = t[n]);
        return l(t, "toString") && (e.toString = t.toString), l(t, "valueOf") && (e.valueOf = t.valueOf), e
      }

      function d(e, t, n, s) {
        return bt(e, t, n, s, !0).utc()
      }

      function c(e) {
        return null == e._pf && (e._pf = {
          empty: !1,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: !1,
          invalidMonth: null,
          invalidFormat: !1,
          userInvalidated: !1,
          iso: !1,
          parsedDateParts: [],
          meridiem: null,
          rfc2822: !1,
          weekdayMismatch: !1
        }), e._pf
      }

      function f(e) {
        if (null == e._isValid) {
          var n = c(e),
            s = t.call(n.parsedDateParts, function(e) {
              return null != e
            }),
            i = !isNaN(e._d.getTime()) && n.overflow < 0 && !n.empty && !n.invalidMonth && !n.invalidWeekday && !n.weekdayMismatch && !n.nullInput && !n.invalidFormat && !n.userInvalidated && (!n.meridiem || n.meridiem && s);
          if (e._strict && (i = i && 0 === n.charsLeftOver && 0 === n.unusedTokens.length && void 0 === n.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return i;
          e._isValid = i
        }
        return e._isValid
      }

      function m(e) {
        var t = d(NaN);
        return null != e ? h(c(t), e) : c(t).userInvalidated = !0, t
      }
      t = Array.prototype.some ? Array.prototype.some : function(e) {
        for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++)
          if (s in t && e.call(this, t[s], s, t)) return !0;
        return !1
      };
      var _ = n.momentProperties = [];

      function y(e, t) {
        var n, s, i;
        if (r(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), r(t._i) || (e._i = t._i), r(t._f) || (e._f = t._f), r(t._l) || (e._l = t._l), r(t._strict) || (e._strict = t._strict), r(t._tzm) || (e._tzm = t._tzm), r(t._isUTC) || (e._isUTC = t._isUTC), r(t._offset) || (e._offset = t._offset), r(t._pf) || (e._pf = c(t)), r(t._locale) || (e._locale = t._locale), _.length > 0)
          for (n = 0; n < _.length; n++) r(i = t[s = _[n]]) || (e[s] = i);
        return e
      }
      var g = !1;

      function v(e) {
        y(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === g && (g = !0, n.updateOffset(this), g = !1)
      }

      function p(e) {
        return e instanceof v || null != e && null != e._isAMomentObject
      }

      function w(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
      }

      function M(e) {
        var t = +e,
          n = 0;
        return 0 !== t && isFinite(t) && (n = w(t)), n
      }

      function k(e, t, n) {
        var s, i = Math.min(e.length, t.length),
          r = Math.abs(e.length - t.length),
          a = 0;
        for (s = 0; s < i; s++)(n && e[s] !== t[s] || !n && M(e[s]) !== M(t[s])) && a++;
        return a + r
      }

      function S(e) {
        !1 === n.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
      }

      function D(e, t) {
        var s = !0;
        return h(function() {
          if (null != n.deprecationHandler && n.deprecationHandler(null, e), s) {
            for (var i, r = [], a = 0; a < arguments.length; a++) {
              if (i = "", "object" == typeof arguments[a]) {
                for (var o in i += "\n[" + a + "] ", arguments[0]) i += o + ": " + arguments[0][o] + ", ";
                i = i.slice(0, -2)
              } else i = arguments[a];
              r.push(i)
            }
            S(e + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack), s = !1
          }
          return t.apply(this, arguments)
        }, t)
      }
      var Y, O = {};

      function T(e, t) {
        null != n.deprecationHandler && n.deprecationHandler(e, t), O[e] || (S(t), O[e] = !0)
      }

      function b(e) {
        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
      }

      function x(e, t) {
        var n, s = h({}, e);
        for (n in t) l(t, n) && (i(e[n]) && i(t[n]) ? (s[n] = {}, h(s[n], e[n]), h(s[n], t[n])) : null != t[n] ? s[n] = t[n] : delete s[n]);
        for (n in e) l(e, n) && !l(t, n) && i(e[n]) && (s[n] = h({}, s[n]));
        return s
      }

      function P(e) {
        null != e && this.set(e)
      }
      n.suppressDeprecationWarnings = !1, n.deprecationHandler = null, Y = Object.keys ? Object.keys : function(e) {
        var t, n = [];
        for (t in e) l(e, t) && n.push(t);
        return n
      };
      var W = {};

      function C(e, t) {
        var n = e.toLowerCase();
        W[n] = W[n + "s"] = W[t] = e
      }

      function H(e) {
        return "string" == typeof e ? W[e] || W[e.toLowerCase()] : void 0
      }

      function R(e) {
        var t, n, s = {};
        for (n in e) l(e, n) && (t = H(n)) && (s[t] = e[n]);
        return s
      }
      var U = {};

      function F(e, t) {
        U[e] = t
      }

      function L(e, t, n) {
        var s = "" + Math.abs(e),
          i = t - s.length;
        return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + s
      }
      var N = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        G = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        V = {},
        E = {};

      function I(e, t, n, s) {
        var i = s;
        "string" == typeof s && (i = function() {
          return this[s]()
        }), e && (E[e] = i), t && (E[t[0]] = function() {
          return L(i.apply(this, arguments), t[1], t[2])
        }), n && (E[n] = function() {
          return this.localeData().ordinal(i.apply(this, arguments), e)
        })
      }

      function A(e, t) {
        return e.isValid() ? (t = j(t, e.localeData()), V[t] = V[t] || function(e) {
          var t, n, s, i = e.match(N);
          for (t = 0, n = i.length; t < n; t++) E[i[t]] ? i[t] = E[i[t]] : i[t] = (s = i[t]).match(/\[[\s\S]/) ? s.replace(/^\[|\]$/g, "") : s.replace(/\\/g, "");
          return function(t) {
            var s, r = "";
            for (s = 0; s < n; s++) r += b(i[s]) ? i[s].call(t, e) : i[s];
            return r
          }
        }(t), V[t](e)) : e.localeData().invalidDate()
      }

      function j(e, t) {
        var n = 5;

        function s(e) {
          return t.longDateFormat(e) || e
        }
        for (G.lastIndex = 0; n >= 0 && G.test(e);) e = e.replace(G, s), G.lastIndex = 0, n -= 1;
        return e
      }
      var Z = /\d/,
        z = /\d\d/,
        $ = /\d{3}/,
        q = /\d{4}/,
        J = /[+-]?\d{6}/,
        B = /\d\d?/,
        Q = /\d\d\d\d?/,
        X = /\d\d\d\d\d\d?/,
        K = /\d{1,3}/,
        ee = /\d{1,4}/,
        te = /[+-]?\d{1,6}/,
        ne = /\d+/,
        se = /[+-]?\d+/,
        ie = /Z|[+-]\d\d:?\d\d/gi,
        re = /Z|[+-]\d\d(?::?\d\d)?/gi,
        ae = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        oe = {};

      function ue(e, t, n) {
        oe[e] = b(t) ? t : function(e, s) {
          return e && n ? n : t
        }
      }

      function le(e, t) {
        return l(oe, e) ? oe[e](t._strict, t._locale) : new RegExp(he(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, s, i) {
          return t || n || s || i
        })))
      }

      function he(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
      }
      var de = {};

      function ce(e, t) {
        var n, s = t;
        for ("string" == typeof e && (e = [e]), a(t) && (s = function(e, n) {
            n[t] = M(e)
          }), n = 0; n < e.length; n++) de[e[n]] = s
      }

      function fe(e, t) {
        ce(e, function(e, n, s, i) {
          s._w = s._w || {}, t(e, s._w, s, i)
        })
      }

      function me(e, t, n) {
        null != t && l(de, e) && de[e](t, n._a, n, e)
      }
      var _e = 0,
        ye = 1,
        ge = 2,
        ve = 3,
        pe = 4,
        we = 5,
        Me = 6,
        ke = 7,
        Se = 8;

      function De(e) {
        return Ye(e) ? 366 : 365
      }

      function Ye(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
      }
      I("Y", 0, 0, function() {
        var e = this.year();
        return e <= 9999 ? "" + e : "+" + e
      }), I(0, ["YY", 2], 0, function() {
        return this.year() % 100
      }), I(0, ["YYYY", 4], 0, "year"), I(0, ["YYYYY", 5], 0, "year"), I(0, ["YYYYYY", 6, !0], 0, "year"), C("year", "y"), F("year", 1), ue("Y", se), ue("YY", B, z), ue("YYYY", ee, q), ue("YYYYY", te, J), ue("YYYYYY", te, J), ce(["YYYYY", "YYYYYY"], _e), ce("YYYY", function(e, t) {
        t[_e] = 2 === e.length ? n.parseTwoDigitYear(e) : M(e)
      }), ce("YY", function(e, t) {
        t[_e] = n.parseTwoDigitYear(e)
      }), ce("Y", function(e, t) {
        t[_e] = parseInt(e, 10)
      }), n.parseTwoDigitYear = function(e) {
        return M(e) + (M(e) > 68 ? 1900 : 2e3)
      };
      var Oe, Te = be("FullYear", !0);

      function be(e, t) {
        return function(s) {
          return null != s ? (Pe(this, e, s), n.updateOffset(this, t), this) : xe(this, e)
        }
      }

      function xe(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
      }

      function Pe(e, t, n) {
        e.isValid() && !isNaN(n) && ("FullYear" === t && Ye(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), We(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
      }

      function We(e, t) {
        if (isNaN(e) || isNaN(t)) return NaN;
        var n, s = (t % (n = 12) + n) % n;
        return e += (t - s) / 12, 1 === s ? Ye(e) ? 29 : 28 : 31 - s % 7 % 2
      }
      Oe = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
        var t;
        for (t = 0; t < this.length; ++t)
          if (this[t] === e) return t;
        return -1
      }, I("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
      }), I("MMM", 0, 0, function(e) {
        return this.localeData().monthsShort(this, e)
      }), I("MMMM", 0, 0, function(e) {
        return this.localeData().months(this, e)
      }), C("month", "M"), F("month", 8), ue("M", B), ue("MM", B, z), ue("MMM", function(e, t) {
        return t.monthsShortRegex(e)
      }), ue("MMMM", function(e, t) {
        return t.monthsRegex(e)
      }), ce(["M", "MM"], function(e, t) {
        t[ye] = M(e) - 1
      }), ce(["MMM", "MMMM"], function(e, t, n, s) {
        var i = n._locale.monthsParse(e, s, n._strict);
        null != i ? t[ye] = i : c(n).invalidMonth = e
      });
      var Ce = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        He = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
      var Re = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

      function Ue(e, t) {
        var n;
        if (!e.isValid()) return e;
        if ("string" == typeof t)
          if (/^\d+$/.test(t)) t = M(t);
          else if (!a(t = e.localeData().monthsParse(t))) return e;
        return n = Math.min(e.date(), We(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
      }

      function Fe(e) {
        return null != e ? (Ue(this, e), n.updateOffset(this, !0), this) : xe(this, "Month")
      }
      var Le = ae;
      var Ne = ae;

      function Ge() {
        function e(e, t) {
          return t.length - e.length
        }
        var t, n, s = [],
          i = [],
          r = [];
        for (t = 0; t < 12; t++) n = d([2e3, t]), s.push(this.monthsShort(n, "")), i.push(this.months(n, "")), r.push(this.months(n, "")), r.push(this.monthsShort(n, ""));
        for (s.sort(e), i.sort(e), r.sort(e), t = 0; t < 12; t++) s[t] = he(s[t]), i[t] = he(i[t]);
        for (t = 0; t < 24; t++) r[t] = he(r[t]);
        this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
      }

      function Ve(e) {
        var t;
        if (e < 100 && e >= 0) {
          var n = Array.prototype.slice.call(arguments);
          n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)
        } else t = new Date(Date.UTC.apply(null, arguments));
        return t
      }

      function Ee(e, t, n) {
        var s = 7 + t - n;
        return -((7 + Ve(e, 0, s).getUTCDay() - t) % 7) + s - 1
      }

      function Ie(e, t, n, s, i) {
        var r, a, o = 1 + 7 * (t - 1) + (7 + n - s) % 7 + Ee(e, s, i);
        return o <= 0 ? a = De(r = e - 1) + o : o > De(e) ? (r = e + 1, a = o - De(e)) : (r = e, a = o), {
          year: r,
          dayOfYear: a
        }
      }

      function Ae(e, t, n) {
        var s, i, r = Ee(e.year(), t, n),
          a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
        return a < 1 ? s = a + je(i = e.year() - 1, t, n) : a > je(e.year(), t, n) ? (s = a - je(e.year(), t, n), i = e.year() + 1) : (i = e.year(), s = a), {
          week: s,
          year: i
        }
      }

      function je(e, t, n) {
        var s = Ee(e, t, n),
          i = Ee(e + 1, t, n);
        return (De(e) - s + i) / 7
      }
      I("w", ["ww", 2], "wo", "week"), I("W", ["WW", 2], "Wo", "isoWeek"), C("week", "w"), C("isoWeek", "W"), F("week", 5), F("isoWeek", 5), ue("w", B), ue("ww", B, z), ue("W", B), ue("WW", B, z), fe(["w", "ww", "W", "WW"], function(e, t, n, s) {
        t[s.substr(0, 1)] = M(e)
      });

      function Ze(e, t) {
        return e.slice(t, 7).concat(e.slice(0, t))
      }
      I("d", 0, "do", "day"), I("dd", 0, 0, function(e) {
        return this.localeData().weekdaysMin(this, e)
      }), I("ddd", 0, 0, function(e) {
        return this.localeData().weekdaysShort(this, e)
      }), I("dddd", 0, 0, function(e) {
        return this.localeData().weekdays(this, e)
      }), I("e", 0, 0, "weekday"), I("E", 0, 0, "isoWeekday"), C("day", "d"), C("weekday", "e"), C("isoWeekday", "E"), F("day", 11), F("weekday", 11), F("isoWeekday", 11), ue("d", B), ue("e", B), ue("E", B), ue("dd", function(e, t) {
        return t.weekdaysMinRegex(e)
      }), ue("ddd", function(e, t) {
        return t.weekdaysShortRegex(e)
      }), ue("dddd", function(e, t) {
        return t.weekdaysRegex(e)
      }), fe(["dd", "ddd", "dddd"], function(e, t, n, s) {
        var i = n._locale.weekdaysParse(e, s, n._strict);
        null != i ? t.d = i : c(n).invalidWeekday = e
      }), fe(["d", "e", "E"], function(e, t, n, s) {
        t[s] = M(e)
      });
      var ze = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
      var $e = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
      var qe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
      var Je = ae;
      var Be = ae;
      var Qe = ae;

      function Xe() {
        function e(e, t) {
          return t.length - e.length
        }
        var t, n, s, i, r, a = [],
          o = [],
          u = [],
          l = [];
        for (t = 0; t < 7; t++) n = d([2e3, 1]).day(t), s = this.weekdaysMin(n, ""), i = this.weekdaysShort(n, ""), r = this.weekdays(n, ""), a.push(s), o.push(i), u.push(r), l.push(s), l.push(i), l.push(r);
        for (a.sort(e), o.sort(e), u.sort(e), l.sort(e), t = 0; t < 7; t++) o[t] = he(o[t]), u[t] = he(u[t]), l[t] = he(l[t]);
        this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
      }

      function Ke() {
        return this.hours() % 12 || 12
      }

      function et(e, t) {
        I(e, 0, 0, function() {
          return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
      }

      function tt(e, t) {
        return t._meridiemParse
      }
      I("H", ["HH", 2], 0, "hour"), I("h", ["hh", 2], 0, Ke), I("k", ["kk", 2], 0, function() {
        return this.hours() || 24
      }), I("hmm", 0, 0, function() {
        return "" + Ke.apply(this) + L(this.minutes(), 2)
      }), I("hmmss", 0, 0, function() {
        return "" + Ke.apply(this) + L(this.minutes(), 2) + L(this.seconds(), 2)
      }), I("Hmm", 0, 0, function() {
        return "" + this.hours() + L(this.minutes(), 2)
      }), I("Hmmss", 0, 0, function() {
        return "" + this.hours() + L(this.minutes(), 2) + L(this.seconds(), 2)
      }), et("a", !0), et("A", !1), C("hour", "h"), F("hour", 13), ue("a", tt), ue("A", tt), ue("H", B), ue("h", B), ue("k", B), ue("HH", B, z), ue("hh", B, z), ue("kk", B, z), ue("hmm", Q), ue("hmmss", X), ue("Hmm", Q), ue("Hmmss", X), ce(["H", "HH"], ve), ce(["k", "kk"], function(e, t, n) {
        var s = M(e);
        t[ve] = 24 === s ? 0 : s
      }), ce(["a", "A"], function(e, t, n) {
        n._isPm = n._locale.isPM(e), n._meridiem = e
      }), ce(["h", "hh"], function(e, t, n) {
        t[ve] = M(e), c(n).bigHour = !0
      }), ce("hmm", function(e, t, n) {
        var s = e.length - 2;
        t[ve] = M(e.substr(0, s)), t[pe] = M(e.substr(s)), c(n).bigHour = !0
      }), ce("hmmss", function(e, t, n) {
        var s = e.length - 4,
          i = e.length - 2;
        t[ve] = M(e.substr(0, s)), t[pe] = M(e.substr(s, 2)), t[we] = M(e.substr(i)), c(n).bigHour = !0
      }), ce("Hmm", function(e, t, n) {
        var s = e.length - 2;
        t[ve] = M(e.substr(0, s)), t[pe] = M(e.substr(s))
      }), ce("Hmmss", function(e, t, n) {
        var s = e.length - 4,
          i = e.length - 2;
        t[ve] = M(e.substr(0, s)), t[pe] = M(e.substr(s, 2)), t[we] = M(e.substr(i))
      });
      var nt, st = be("Hours", !0),
        it = {
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
          },
          longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
          },
          invalidDate: "Invalid date",
          ordinal: "%d",
          dayOfMonthOrdinalParse: /\d{1,2}/,
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
          },
          months: He,
          monthsShort: Re,
          week: {
            dow: 0,
            doy: 6
          },
          weekdays: ze,
          weekdaysMin: qe,
          weekdaysShort: $e,
          meridiemParse: /[ap]\.?m?\.?/i
        },
        rt = {},
        at = {};

      function ot(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
      }

      function ut(e) {
        var t = null;
        if (!rt[e] && "undefined" != typeof module && module && module.exports) try {
          t = nt._abbr, require("./locale/" + e), lt(t)
        } catch (n) {}
        return rt[e]
      }

      function lt(e, t) {
        var n;
        return e && ((n = r(t) ? dt(e) : ht(e, t)) ? nt = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), nt._abbr
      }

      function ht(e, t) {
        if (null !== t) {
          var n, s = it;
          if (t.abbr = e, null != rt[e]) T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), s = rt[e]._config;
          else if (null != t.parentLocale)
            if (null != rt[t.parentLocale]) s = rt[t.parentLocale]._config;
            else {
              if (null == (n = ut(t.parentLocale))) return at[t.parentLocale] || (at[t.parentLocale] = []), at[t.parentLocale].push({
                name: e,
                config: t
              }), null;
              s = n._config
            } return rt[e] = new P(x(s, t)), at[e] && at[e].forEach(function(e) {
            ht(e.name, e.config)
          }), lt(e), rt[e]
        }
        return delete rt[e], null
      }

      function dt(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return nt;
        if (!s(e)) {
          if (t = ut(e)) return t;
          e = [e]
        }
        return function(e) {
          for (var t, n, s, i, r = 0; r < e.length;) {
            for (t = (i = ot(e[r]).split("-")).length, n = (n = ot(e[r + 1])) ? n.split("-") : null; t > 0;) {
              if (s = ut(i.slice(0, t).join("-"))) return s;
              if (n && n.length >= t && k(i, n, !0) >= t - 1) break;
              t--
            }
            r++
          }
          return nt
        }(e)
      }

      function ct(e) {
        var t, n = e._a;
        return n && -2 === c(e).overflow && (t = n[ye] < 0 || n[ye] > 11 ? ye : n[ge] < 1 || n[ge] > We(n[_e], n[ye]) ? ge : n[ve] < 0 || n[ve] > 24 || 24 === n[ve] && (0 !== n[pe] || 0 !== n[we] || 0 !== n[Me]) ? ve : n[pe] < 0 || n[pe] > 59 ? pe : n[we] < 0 || n[we] > 59 ? we : n[Me] < 0 || n[Me] > 999 ? Me : -1, c(e)._overflowDayOfYear && (t < _e || t > ge) && (t = ge), c(e)._overflowWeeks && -1 === t && (t = ke), c(e)._overflowWeekday && -1 === t && (t = Se), c(e).overflow = t), e
      }

      function ft(e, t, n) {
        return null != e ? e : null != t ? t : n
      }

      function mt(e) {
        var t, s, i, r, a, o = [];
        if (!e._d) {
          for (i = function(e) {
              var t = new Date(n.now());
              return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
            }(e), e._w && null == e._a[ge] && null == e._a[ye] && function(e) {
              var t, n, s, i, r, a, o, u;
              if (null != (t = e._w).GG || null != t.W || null != t.E) r = 1, a = 4, n = ft(t.GG, e._a[_e], Ae(xt(), 1, 4).year), s = ft(t.W, 1), ((i = ft(t.E, 1)) < 1 || i > 7) && (u = !0);
              else {
                r = e._locale._week.dow, a = e._locale._week.doy;
                var l = Ae(xt(), r, a);
                n = ft(t.gg, e._a[_e], l.year), s = ft(t.w, l.week), null != t.d ? ((i = t.d) < 0 || i > 6) && (u = !0) : null != t.e ? (i = t.e + r, (t.e < 0 || t.e > 6) && (u = !0)) : i = r
              }
              s < 1 || s > je(n, r, a) ? c(e)._overflowWeeks = !0 : null != u ? c(e)._overflowWeekday = !0 : (o = Ie(n, s, i, r, a), e._a[_e] = o.year, e._dayOfYear = o.dayOfYear)
            }(e), null != e._dayOfYear && (a = ft(e._a[_e], i[_e]), (e._dayOfYear > De(a) || 0 === e._dayOfYear) && (c(e)._overflowDayOfYear = !0), s = Ve(a, 0, e._dayOfYear), e._a[ye] = s.getUTCMonth(), e._a[ge] = s.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = o[t] = i[t];
          for (; t < 7; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
          24 === e._a[ve] && 0 === e._a[pe] && 0 === e._a[we] && 0 === e._a[Me] && (e._nextDay = !0, e._a[ve] = 0), e._d = (e._useUTC ? Ve : function(e, t, n, s, i, r, a) {
            var o;
            return e < 100 && e >= 0 ? (o = new Date(e + 400, t, n, s, i, r, a), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, n, s, i, r, a), o
          }).apply(null, o), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ve] = 24), e._w && void 0 !== e._w.d && e._w.d !== r && (c(e).weekdayMismatch = !0)
        }
      }
      var _t = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        yt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        gt = /Z|[+-]\d\d(?::?\d\d)?/,
        vt = [
          ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
          ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
          ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
          ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
          ["YYYY-DDD", /\d{4}-\d{3}/],
          ["YYYY-MM", /\d{4}-\d\d/, !1],
          ["YYYYYYMMDD", /[+-]\d{10}/],
          ["YYYYMMDD", /\d{8}/],
          ["GGGG[W]WWE", /\d{4}W\d{3}/],
          ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
          ["YYYYDDD", /\d{7}/]
        ],
        pt = [
          ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
          ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
          ["HH:mm:ss", /\d\d:\d\d:\d\d/],
          ["HH:mm", /\d\d:\d\d/],
          ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
          ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
          ["HHmmss", /\d\d\d\d\d\d/],
          ["HHmm", /\d\d\d\d/],
          ["HH", /\d\d/]
        ],
        wt = /^\/?Date\((\-?\d+)/i;

      function Mt(e) {
        var t, n, s, i, r, a, o = e._i,
          u = _t.exec(o) || yt.exec(o);
        if (u) {
          for (c(e).iso = !0, t = 0, n = vt.length; t < n; t++)
            if (vt[t][1].exec(u[1])) {
              i = vt[t][0], s = !1 !== vt[t][2];
              break
            } if (null == i) return void(e._isValid = !1);
          if (u[3]) {
            for (t = 0, n = pt.length; t < n; t++)
              if (pt[t][1].exec(u[3])) {
                r = (u[2] || " ") + pt[t][0];
                break
              } if (null == r) return void(e._isValid = !1)
          }
          if (!s && null != r) return void(e._isValid = !1);
          if (u[4]) {
            if (!gt.exec(u[4])) return void(e._isValid = !1);
            a = "Z"
          }
          e._f = i + (r || "") + (a || ""), Ot(e)
        } else e._isValid = !1
      }
      var kt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

      function St(e) {
        var t = parseInt(e, 10);
        return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
      }
      var Dt = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
      };

      function Yt(e) {
        var t, n, s, i, r, a, o, u = kt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
        if (u) {
          var l = (t = u[4], n = u[3], s = u[2], i = u[5], r = u[6], a = u[7], o = [St(t), Re.indexOf(n), parseInt(s, 10), parseInt(i, 10), parseInt(r, 10)], a && o.push(parseInt(a, 10)), o);
          if (! function(e, t, n) {
              return !e || $e.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() || (c(n).weekdayMismatch = !0, n._isValid = !1, !1)
            }(u[1], l, e)) return;
          e._a = l, e._tzm = function(e, t, n) {
            if (e) return Dt[e];
            if (t) return 0;
            var s = parseInt(n, 10),
              i = s % 100;
            return (s - i) / 100 * 60 + i
          }(u[8], u[9], u[10]), e._d = Ve.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), c(e).rfc2822 = !0
        } else e._isValid = !1
      }

      function Ot(e) {
        if (e._f !== n.ISO_8601)
          if (e._f !== n.RFC_2822) {
            e._a = [], c(e).empty = !0;
            var t, s, i, r, a, o = "" + e._i,
              u = o.length,
              l = 0;
            for (i = j(e._f, e._locale).match(N) || [], t = 0; t < i.length; t++) r = i[t], (s = (o.match(le(r, e)) || [])[0]) && ((a = o.substr(0, o.indexOf(s))).length > 0 && c(e).unusedInput.push(a), o = o.slice(o.indexOf(s) + s.length), l += s.length), E[r] ? (s ? c(e).empty = !1 : c(e).unusedTokens.push(r), me(r, s, e)) : e._strict && !s && c(e).unusedTokens.push(r);
            c(e).charsLeftOver = u - l, o.length > 0 && c(e).unusedInput.push(o), e._a[ve] <= 12 && !0 === c(e).bigHour && e._a[ve] > 0 && (c(e).bigHour = void 0), c(e).parsedDateParts = e._a.slice(0), c(e).meridiem = e._meridiem, e._a[ve] = function(e, t, n) {
              var s;
              if (null == n) return t;
              return null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((s = e.isPM(n)) && t < 12 && (t += 12), s || 12 !== t || (t = 0), t) : t
            }(e._locale, e._a[ve], e._meridiem), mt(e), ct(e)
          } else Yt(e);
        else Mt(e)
      }

      function Tt(e) {
        var t = e._i,
          l = e._f;
        return e._locale = e._locale || dt(e._l), null === t || void 0 === l && "" === t ? m({
          nullInput: !0
        }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), p(t) ? new v(ct(t)) : (o(t) ? e._d = t : s(l) ? function(e) {
          var t, n, s, i, r;
          if (0 === e._f.length) return c(e).invalidFormat = !0, void(e._d = new Date(NaN));
          for (i = 0; i < e._f.length; i++) r = 0, t = y({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], Ot(t), f(t) && (r += c(t).charsLeftOver, r += 10 * c(t).unusedTokens.length, c(t).score = r, (null == s || r < s) && (s = r, n = t));
          h(e, n || t)
        }(e) : l ? Ot(e) : function(e) {
          var t = e._i;
          r(t) ? e._d = new Date(n.now()) : o(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function(e) {
            var t = wt.exec(e._i);
            null === t ? (Mt(e), !1 === e._isValid && (delete e._isValid, Yt(e), !1 === e._isValid && (delete e._isValid, n.createFromInputFallback(e)))) : e._d = new Date(+t[1])
          }(e) : s(t) ? (e._a = u(t.slice(0), function(e) {
            return parseInt(e, 10)
          }), mt(e)) : i(t) ? function(e) {
            if (!e._d) {
              var t = R(e._i);
              e._a = u([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                return e && parseInt(e, 10)
              }), mt(e)
            }
          }(e) : a(t) ? e._d = new Date(t) : n.createFromInputFallback(e)
        }(e), f(e) || (e._d = null), e))
      }

      function bt(e, t, n, r, a) {
        var o, u = {};
        return !0 !== n && !1 !== n || (r = n, n = void 0), (i(e) && function(e) {
          if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
          var t;
          for (t in e)
            if (e.hasOwnProperty(t)) return !1;
          return !0
        }(e) || s(e) && 0 === e.length) && (e = void 0), u._isAMomentObject = !0, u._useUTC = u._isUTC = a, u._l = n, u._i = e, u._f = t, u._strict = r, (o = new v(ct(Tt(u))))._nextDay && (o.add(1, "d"), o._nextDay = void 0), o
      }

      function xt(e, t, n, s) {
        return bt(e, t, n, s, !1)
      }
      n.createFromInputFallback = D("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
      }), n.ISO_8601 = function() {}, n.RFC_2822 = function() {};
      var Pt = D("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
          var e = xt.apply(null, arguments);
          return this.isValid() && e.isValid() ? e < this ? this : e : m()
        }),
        Wt = D("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
          var e = xt.apply(null, arguments);
          return this.isValid() && e.isValid() ? e > this ? this : e : m()
        });

      function Ct(e, t) {
        var n, i;
        if (1 === t.length && s(t[0]) && (t = t[0]), !t.length) return xt();
        for (n = t[0], i = 1; i < t.length; ++i) t[i].isValid() && !t[i][e](n) || (n = t[i]);
        return n
      }
      var Ht = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

      function Rt(e) {
        var t = R(e),
          n = t.year || 0,
          s = t.quarter || 0,
          i = t.month || 0,
          r = t.week || t.isoWeek || 0,
          a = t.day || 0,
          o = t.hour || 0,
          u = t.minute || 0,
          l = t.second || 0,
          h = t.millisecond || 0;
        this._isValid = function(e) {
          for (var t in e)
            if (-1 === Oe.call(Ht, t) || null != e[t] && isNaN(e[t])) return !1;
          for (var n = !1, s = 0; s < Ht.length; ++s)
            if (e[Ht[s]]) {
              if (n) return !1;
              parseFloat(e[Ht[s]]) !== M(e[Ht[s]]) && (n = !0)
            } return !0
        }(t), this._milliseconds = +h + 1e3 * l + 6e4 * u + 1e3 * o * 60 * 60, this._days = +a + 7 * r, this._months = +i + 3 * s + 12 * n, this._data = {}, this._locale = dt(), this._bubble()
      }

      function Ut(e) {
        return e instanceof Rt
      }

      function Ft(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
      }

      function Lt(e, t) {
        I(e, 0, 0, function() {
          var e = this.utcOffset(),
            n = "+";
          return e < 0 && (e = -e, n = "-"), n + L(~~(e / 60), 2) + t + L(~~e % 60, 2)
        })
      }
      Lt("Z", ":"), Lt("ZZ", ""), ue("Z", re), ue("ZZ", re), ce(["Z", "ZZ"], function(e, t, n) {
        n._useUTC = !0, n._tzm = Gt(re, e)
      });
      var Nt = /([\+\-]|\d\d)/gi;

      function Gt(e, t) {
        var n = (t || "").match(e);
        if (null === n) return null;
        var s = ((n[n.length - 1] || []) + "").match(Nt) || ["-", 0, 0],
          i = 60 * s[1] + M(s[2]);
        return 0 === i ? 0 : "+" === s[0] ? i : -i
      }

      function Vt(e, t) {
        var s, i;
        return t._isUTC ? (s = t.clone(), i = (p(e) || o(e) ? e.valueOf() : xt(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + i), n.updateOffset(s, !1), s) : xt(e).local()
      }

      function Et(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
      }

      function It() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset)
      }
      n.updateOffset = function() {};
      var At = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        jt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

      function Zt(e, t) {
        var n, s, i, r = e,
          o = null;
        return Ut(e) ? r = {
          ms: e._milliseconds,
          d: e._days,
          M: e._months
        } : a(e) ? (r = {}, t ? r[t] = e : r.milliseconds = e) : (o = At.exec(e)) ? (n = "-" === o[1] ? -1 : 1, r = {
          y: 0,
          d: M(o[ge]) * n,
          h: M(o[ve]) * n,
          m: M(o[pe]) * n,
          s: M(o[we]) * n,
          ms: M(Ft(1e3 * o[Me])) * n
        }) : (o = jt.exec(e)) ? (n = "-" === o[1] ? -1 : 1, r = {
          y: zt(o[2], n),
          M: zt(o[3], n),
          w: zt(o[4], n),
          d: zt(o[5], n),
          h: zt(o[6], n),
          m: zt(o[7], n),
          s: zt(o[8], n)
        }) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (i = function(e, t) {
          var n;
          if (!e.isValid() || !t.isValid()) return {
            milliseconds: 0,
            months: 0
          };
          t = Vt(t, e), e.isBefore(t) ? n = $t(e, t) : ((n = $t(t, e)).milliseconds = -n.milliseconds, n.months = -n.months);
          return n
        }(xt(r.from), xt(r.to)), (r = {}).ms = i.milliseconds, r.M = i.months), s = new Rt(r), Ut(e) && l(e, "_locale") && (s._locale = e._locale), s
      }

      function zt(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t
      }

      function $t(e, t) {
        var n = {};
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
      }

      function qt(e, t) {
        return function(n, s) {
          var i;
          return null === s || isNaN(+s) || (T(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = n, n = s, s = i), Jt(this, Zt(n = "string" == typeof n ? +n : n, s), e), this
        }
      }

      function Jt(e, t, s, i) {
        var r = t._milliseconds,
          a = Ft(t._days),
          o = Ft(t._months);
        e.isValid() && (i = null == i || i, o && Ue(e, xe(e, "Month") + o * s), a && Pe(e, "Date", xe(e, "Date") + a * s), r && e._d.setTime(e._d.valueOf() + r * s), i && n.updateOffset(e, a || o))
      }
      Zt.fn = Rt.prototype, Zt.invalid = function() {
        return Zt(NaN)
      };
      var Bt = qt(1, "add"),
        Qt = qt(-1, "subtract");

      function Xt(e, t) {
        var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
          s = e.clone().add(n, "months");
        return -(n + (t - s < 0 ? (t - s) / (s - e.clone().add(n - 1, "months")) : (t - s) / (e.clone().add(n + 1, "months") - s))) || 0
      }

      function Kt(e) {
        var t;
        return void 0 === e ? this._locale._abbr : (null != (t = dt(e)) && (this._locale = t), this)
      }
      n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
      var en = D("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
        return void 0 === e ? this.localeData() : this.locale(e)
      });

      function tn() {
        return this._locale
      }
      var nn = 1e3,
        sn = 60 * nn,
        rn = 60 * sn,
        an = 3506328 * rn;

      function on(e, t) {
        return (e % t + t) % t
      }

      function un(e, t, n) {
        return e < 100 && e >= 0 ? new Date(e + 400, t, n) - an : new Date(e, t, n).valueOf()
      }

      function ln(e, t, n) {
        return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - an : Date.UTC(e, t, n)
      }

      function hn(e, t) {
        I(0, [e, e.length], 0, t)
      }

      function dn(e, t, n, s, i) {
        var r;
        return null == e ? Ae(this, s, i).year : (t > (r = je(e, s, i)) && (t = r), function(e, t, n, s, i) {
          var r = Ie(e, t, n, s, i),
            a = Ve(r.year, 0, r.dayOfYear);
          return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this
        }.call(this, e, t, n, s, i))
      }
      I(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
      }), I(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
      }), hn("gggg", "weekYear"), hn("ggggg", "weekYear"), hn("GGGG", "isoWeekYear"), hn("GGGGG", "isoWeekYear"), C("weekYear", "gg"), C("isoWeekYear", "GG"), F("weekYear", 1), F("isoWeekYear", 1), ue("G", se), ue("g", se), ue("GG", B, z), ue("gg", B, z), ue("GGGG", ee, q), ue("gggg", ee, q), ue("GGGGG", te, J), ue("ggggg", te, J), fe(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, s) {
        t[s.substr(0, 2)] = M(e)
      }), fe(["gg", "GG"], function(e, t, s, i) {
        t[i] = n.parseTwoDigitYear(e)
      }), I("Q", 0, "Qo", "quarter"), C("quarter", "Q"), F("quarter", 7), ue("Q", Z), ce("Q", function(e, t) {
        t[ye] = 3 * (M(e) - 1)
      }), I("D", ["DD", 2], "Do", "date"), C("date", "D"), F("date", 9), ue("D", B), ue("DD", B, z), ue("Do", function(e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
      }), ce(["D", "DD"], ge), ce("Do", function(e, t) {
        t[ge] = M(e.match(B)[0])
      });
      var cn = be("Date", !0);
      I("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), C("dayOfYear", "DDD"), F("dayOfYear", 4), ue("DDD", K), ue("DDDD", $), ce(["DDD", "DDDD"], function(e, t, n) {
        n._dayOfYear = M(e)
      }), I("m", ["mm", 2], 0, "minute"), C("minute", "m"), F("minute", 14), ue("m", B), ue("mm", B, z), ce(["m", "mm"], pe);
      var fn = be("Minutes", !1);
      I("s", ["ss", 2], 0, "second"), C("second", "s"), F("second", 15), ue("s", B), ue("ss", B, z), ce(["s", "ss"], we);
      var mn, _n = be("Seconds", !1);
      for (I("S", 0, 0, function() {
          return ~~(this.millisecond() / 100)
        }), I(0, ["SS", 2], 0, function() {
          return ~~(this.millisecond() / 10)
        }), I(0, ["SSS", 3], 0, "millisecond"), I(0, ["SSSS", 4], 0, function() {
          return 10 * this.millisecond()
        }), I(0, ["SSSSS", 5], 0, function() {
          return 100 * this.millisecond()
        }), I(0, ["SSSSSS", 6], 0, function() {
          return 1e3 * this.millisecond()
        }), I(0, ["SSSSSSS", 7], 0, function() {
          return 1e4 * this.millisecond()
        }), I(0, ["SSSSSSSS", 8], 0, function() {
          return 1e5 * this.millisecond()
        }), I(0, ["SSSSSSSSS", 9], 0, function() {
          return 1e6 * this.millisecond()
        }), C("millisecond", "ms"), F("millisecond", 16), ue("S", K, Z), ue("SS", K, z), ue("SSS", K, $), mn = "SSSS"; mn.length <= 9; mn += "S") ue(mn, ne);

      function yn(e, t) {
        t[Me] = M(1e3 * ("0." + e))
      }
      for (mn = "S"; mn.length <= 9; mn += "S") ce(mn, yn);
      var gn = be("Milliseconds", !1);
      I("z", 0, 0, "zoneAbbr"), I("zz", 0, 0, "zoneName");
      var vn = v.prototype;

      function pn(e) {
        return e
      }
      vn.add = Bt, vn.calendar = function(e, t) {
        var s = e || xt(),
          i = Vt(s, this).startOf("day"),
          r = n.calendarFormat(this, i) || "sameElse",
          a = t && (b(t[r]) ? t[r].call(this, s) : t[r]);
        return this.format(a || this.localeData().calendar(r, this, xt(s)))
      }, vn.clone = function() {
        return new v(this)
      }, vn.diff = function(e, t, n) {
        var s, i, r;
        if (!this.isValid()) return NaN;
        if (!(s = Vt(e, this)).isValid()) return NaN;
        switch (i = 6e4 * (s.utcOffset() - this.utcOffset()), t = H(t)) {
          case "year":
            r = Xt(this, s) / 12;
            break;
          case "month":
            r = Xt(this, s);
            break;
          case "quarter":
            r = Xt(this, s) / 3;
            break;
          case "second":
            r = (this - s) / 1e3;
            break;
          case "minute":
            r = (this - s) / 6e4;
            break;
          case "hour":
            r = (this - s) / 36e5;
            break;
          case "day":
            r = (this - s - i) / 864e5;
            break;
          case "week":
            r = (this - s - i) / 6048e5;
            break;
          default:
            r = this - s
        }
        return n ? r : w(r)
      }, vn.endOf = function(e) {
        var t;
        if (void 0 === (e = H(e)) || "millisecond" === e || !this.isValid()) return this;
        var s = this._isUTC ? ln : un;
        switch (e) {
          case "year":
            t = s(this.year() + 1, 0, 1) - 1;
            break;
          case "quarter":
            t = s(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
            break;
          case "month":
            t = s(this.year(), this.month() + 1, 1) - 1;
            break;
          case "week":
            t = s(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
            break;
          case "isoWeek":
            t = s(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
            break;
          case "day":
          case "date":
            t = s(this.year(), this.month(), this.date() + 1) - 1;
            break;
          case "hour":
            t = this._d.valueOf(), t += rn - on(t + (this._isUTC ? 0 : this.utcOffset() * sn), rn) - 1;
            break;
          case "minute":
            t = this._d.valueOf(), t += sn - on(t, sn) - 1;
            break;
          case "second":
            t = this._d.valueOf(), t += nn - on(t, nn) - 1
        }
        return this._d.setTime(t), n.updateOffset(this, !0), this
      }, vn.format = function(e) {
        e || (e = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
        var t = A(this, e);
        return this.localeData().postformat(t)
      }, vn.from = function(e, t) {
        return this.isValid() && (p(e) && e.isValid() || xt(e).isValid()) ? Zt({
          to: this,
          from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
      }, vn.fromNow = function(e) {
        return this.from(xt(), e)
      }, vn.to = function(e, t) {
        return this.isValid() && (p(e) && e.isValid() || xt(e).isValid()) ? Zt({
          from: this,
          to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
      }, vn.toNow = function(e) {
        return this.to(xt(), e)
      }, vn.get = function(e) {
        return b(this[e = H(e)]) ? this[e]() : this
      }, vn.invalidAt = function() {
        return c(this).overflow
      }, vn.isAfter = function(e, t) {
        var n = p(e) ? e : xt(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = H(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
      }, vn.isBefore = function(e, t) {
        var n = p(e) ? e : xt(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = H(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
      }, vn.isBetween = function(e, t, n, s) {
        var i = p(e) ? e : xt(e),
          r = p(t) ? t : xt(t);
        return !!(this.isValid() && i.isValid() && r.isValid()) && ("(" === (s = s || "()")[0] ? this.isAfter(i, n) : !this.isBefore(i, n)) && (")" === s[1] ? this.isBefore(r, n) : !this.isAfter(r, n))
      }, vn.isSame = function(e, t) {
        var n, s = p(e) ? e : xt(e);
        return !(!this.isValid() || !s.isValid()) && ("millisecond" === (t = H(t) || "millisecond") ? this.valueOf() === s.valueOf() : (n = s.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
      }, vn.isSameOrAfter = function(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t)
      }, vn.isSameOrBefore = function(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t)
      }, vn.isValid = function() {
        return f(this)
      }, vn.lang = en, vn.locale = Kt, vn.localeData = tn, vn.max = Wt, vn.min = Pt, vn.parsingFlags = function() {
        return h({}, c(this))
      }, vn.set = function(e, t) {
        if ("object" == typeof e)
          for (var n = function(e) {
              var t = [];
              for (var n in e) t.push({
                unit: n,
                priority: U[n]
              });
              return t.sort(function(e, t) {
                return e.priority - t.priority
              }), t
            }(e = R(e)), s = 0; s < n.length; s++) this[n[s].unit](e[n[s].unit]);
        else if (b(this[e = H(e)])) return this[e](t);
        return this
      }, vn.startOf = function(e) {
        var t;
        if (void 0 === (e = H(e)) || "millisecond" === e || !this.isValid()) return this;
        var s = this._isUTC ? ln : un;
        switch (e) {
          case "year":
            t = s(this.year(), 0, 1);
            break;
          case "quarter":
            t = s(this.year(), this.month() - this.month() % 3, 1);
            break;
          case "month":
            t = s(this.year(), this.month(), 1);
            break;
          case "week":
            t = s(this.year(), this.month(), this.date() - this.weekday());
            break;
          case "isoWeek":
            t = s(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
            break;
          case "day":
          case "date":
            t = s(this.year(), this.month(), this.date());
            break;
          case "hour":
            t = this._d.valueOf(), t -= on(t + (this._isUTC ? 0 : this.utcOffset() * sn), rn);
            break;
          case "minute":
            t = this._d.valueOf(), t -= on(t, sn);
            break;
          case "second":
            t = this._d.valueOf(), t -= on(t, nn)
        }
        return this._d.setTime(t), n.updateOffset(this, !0), this
      }, vn.subtract = Qt, vn.toArray = function() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
      }, vn.toObject = function() {
        var e = this;
        return {
          years: e.year(),
          months: e.month(),
          date: e.date(),
          hours: e.hours(),
          minutes: e.minutes(),
          seconds: e.seconds(),
          milliseconds: e.milliseconds()
        }
      }, vn.toDate = function() {
        return new Date(this.valueOf())
      }, vn.toISOString = function(e) {
        if (!this.isValid()) return null;
        var t = !0 !== e,
          n = t ? this.clone().utc() : this;
        return n.year() < 0 || n.year() > 9999 ? A(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : b(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", A(n, "Z")) : A(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
      }, vn.inspect = function() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var e = "moment",
          t = "";
        this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
        var n = "[" + e + '("]',
          s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
          i = t + '[")]';
        return this.format(n + s + "-MM-DD[T]HH:mm:ss.SSS" + i)
      }, vn.toJSON = function() {
        return this.isValid() ? this.toISOString() : null
      }, vn.toString = function() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
      }, vn.unix = function() {
        return Math.floor(this.valueOf() / 1e3)
      }, vn.valueOf = function() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
      }, vn.creationData = function() {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict
        }
      }, vn.year = Te, vn.isLeapYear = function() {
        return Ye(this.year())
      }, vn.weekYear = function(e) {
        return dn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
      }, vn.isoWeekYear = function(e) {
        return dn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
      }, vn.quarter = vn.quarters = function(e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
      }, vn.month = Fe, vn.daysInMonth = function() {
        return We(this.year(), this.month())
      }, vn.week = vn.weeks = function(e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d")
      }, vn.isoWeek = vn.isoWeeks = function(e) {
        var t = Ae(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d")
      }, vn.weeksInYear = function() {
        var e = this.localeData()._week;
        return je(this.year(), e.dow, e.doy)
      }, vn.isoWeeksInYear = function() {
        return je(this.year(), 1, 4)
      }, vn.date = cn, vn.day = vn.days = function(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (e = function(e, t) {
          return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
        }(e, this.localeData()), this.add(e - t, "d")) : t
      }, vn.weekday = function(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, "d")
      }, vn.isoWeekday = function(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        if (null != e) {
          var t = function(e, t) {
            return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
          }(e, this.localeData());
          return this.day(this.day() % 7 ? t : t - 7)
        }
        return this.day() || 7
      }, vn.dayOfYear = function(e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add(e - t, "d")
      }, vn.hour = vn.hours = st, vn.minute = vn.minutes = fn, vn.second = vn.seconds = _n, vn.millisecond = vn.milliseconds = gn, vn.utcOffset = function(e, t, s) {
        var i, r = this._offset || 0;
        if (!this.isValid()) return null != e ? this : NaN;
        if (null != e) {
          if ("string" == typeof e) {
            if (null === (e = Gt(re, e))) return this
          } else Math.abs(e) < 16 && !s && (e *= 60);
          return !this._isUTC && t && (i = Et(this)), this._offset = e, this._isUTC = !0, null != i && this.add(i, "m"), r !== e && (!t || this._changeInProgress ? Jt(this, Zt(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)), this
        }
        return this._isUTC ? r : Et(this)
      }, vn.utc = function(e) {
        return this.utcOffset(0, e)
      }, vn.local = function(e) {
        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Et(this), "m")), this
      }, vn.parseZone = function() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
          var e = Gt(ie, this._i);
          null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
        }
        return this
      }, vn.hasAlignedHourOffset = function(e) {
        return !!this.isValid() && (e = e ? xt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
      }, vn.isDST = function() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
      }, vn.isLocal = function() {
        return !!this.isValid() && !this._isUTC
      }, vn.isUtcOffset = function() {
        return !!this.isValid() && this._isUTC
      }, vn.isUtc = It, vn.isUTC = It, vn.zoneAbbr = function() {
        return this._isUTC ? "UTC" : ""
      }, vn.zoneName = function() {
        return this._isUTC ? "Coordinated Universal Time" : ""
      }, vn.dates = D("dates accessor is deprecated. Use date instead.", cn), vn.months = D("months accessor is deprecated. Use month instead", Fe), vn.years = D("years accessor is deprecated. Use year instead", Te), vn.zone = D("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
        return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
      }), vn.isDSTShifted = D("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
        if (!r(this._isDSTShifted)) return this._isDSTShifted;
        var e = {};
        if (y(e, this), (e = Tt(e))._a) {
          var t = e._isUTC ? d(e._a) : xt(e._a);
          this._isDSTShifted = this.isValid() && k(e._a, t.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
      });
      var wn = P.prototype;

      function Mn(e, t, n, s) {
        var i = dt(),
          r = d().set(s, t);
        return i[n](r, e)
      }

      function kn(e, t, n) {
        if (a(e) && (t = e, e = void 0), e = e || "", null != t) return Mn(e, t, n, "month");
        var s, i = [];
        for (s = 0; s < 12; s++) i[s] = Mn(e, s, n, "month");
        return i
      }

      function Sn(e, t, n, s) {
        "boolean" == typeof e ? (a(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, a(t) && (n = t, t = void 0), t = t || "");
        var i, r = dt(),
          o = e ? r._week.dow : 0;
        if (null != n) return Mn(t, (n + o) % 7, s, "day");
        var u = [];
        for (i = 0; i < 7; i++) u[i] = Mn(t, (i + o) % 7, s, "day");
        return u
      }
      wn.calendar = function(e, t, n) {
        var s = this._calendar[e] || this._calendar.sameElse;
        return b(s) ? s.call(t, n) : s
      }, wn.longDateFormat = function(e) {
        var t = this._longDateFormat[e],
          n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
          return e.slice(1)
        }), this._longDateFormat[e])
      }, wn.invalidDate = function() {
        return this._invalidDate
      }, wn.ordinal = function(e) {
        return this._ordinal.replace("%d", e)
      }, wn.preparse = pn, wn.postformat = pn, wn.relativeTime = function(e, t, n, s) {
        var i = this._relativeTime[n];
        return b(i) ? i(e, t, n, s) : i.replace(/%d/i, e)
      }, wn.pastFuture = function(e, t) {
        var n = this._relativeTime[e > 0 ? "future" : "past"];
        return b(n) ? n(t) : n.replace(/%s/i, t)
      }, wn.set = function(e) {
        var t, n;
        for (n in e) b(t = e[n]) ? this[n] = t : this["_" + n] = t;
        this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
      }, wn.months = function(e, t) {
        return e ? s(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ce).test(t) ? "format" : "standalone"][e.month()] : s(this._months) ? this._months : this._months.standalone
      }, wn.monthsShort = function(e, t) {
        return e ? s(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ce.test(t) ? "format" : "standalone"][e.month()] : s(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
      }, wn.monthsParse = function(e, t, n) {
        var s, i, r;
        if (this._monthsParseExact) return function(e, t, n) {
          var s, i, r, a = e.toLocaleLowerCase();
          if (!this._monthsParse)
            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s) r = d([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase();
          return n ? "MMM" === t ? -1 !== (i = Oe.call(this._shortMonthsParse, a)) ? i : null : -1 !== (i = Oe.call(this._longMonthsParse, a)) ? i : null : "MMM" === t ? -1 !== (i = Oe.call(this._shortMonthsParse, a)) ? i : -1 !== (i = Oe.call(this._longMonthsParse, a)) ? i : null : -1 !== (i = Oe.call(this._longMonthsParse, a)) ? i : -1 !== (i = Oe.call(this._shortMonthsParse, a)) ? i : null
        }.call(this, e, t, n);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
          if (i = d([2e3, s]), n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[s] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[s] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[s].test(e)) return s;
          if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s;
          if (!n && this._monthsParse[s].test(e)) return s
        }
      }, wn.monthsRegex = function(e) {
        return this._monthsParseExact ? (l(this, "_monthsRegex") || Ge.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = Ne), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
      }, wn.monthsShortRegex = function(e) {
        return this._monthsParseExact ? (l(this, "_monthsRegex") || Ge.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = Le), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
      }, wn.week = function(e) {
        return Ae(e, this._week.dow, this._week.doy).week
      }, wn.firstDayOfYear = function() {
        return this._week.doy
      }, wn.firstDayOfWeek = function() {
        return this._week.dow
      }, wn.weekdays = function(e, t) {
        var n = s(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
        return !0 === e ? Ze(n, this._week.dow) : e ? n[e.day()] : n
      }, wn.weekdaysMin = function(e) {
        return !0 === e ? Ze(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
      }, wn.weekdaysShort = function(e) {
        return !0 === e ? Ze(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
      }, wn.weekdaysParse = function(e, t, n) {
        var s, i, r;
        if (this._weekdaysParseExact) return function(e, t, n) {
          var s, i, r, a = e.toLocaleLowerCase();
          if (!this._weekdaysParse)
            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s) r = d([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase();
          return n ? "dddd" === t ? -1 !== (i = Oe.call(this._weekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = Oe.call(this._shortWeekdaysParse, a)) ? i : null : -1 !== (i = Oe.call(this._minWeekdaysParse, a)) ? i : null : "dddd" === t ? -1 !== (i = Oe.call(this._weekdaysParse, a)) ? i : -1 !== (i = Oe.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = Oe.call(this._minWeekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = Oe.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = Oe.call(this._weekdaysParse, a)) ? i : -1 !== (i = Oe.call(this._minWeekdaysParse, a)) ? i : null : -1 !== (i = Oe.call(this._minWeekdaysParse, a)) ? i : -1 !== (i = Oe.call(this._weekdaysParse, a)) ? i : -1 !== (i = Oe.call(this._shortWeekdaysParse, a)) ? i : null
        }.call(this, e, t, n);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
          if (i = d([2e3, 1]).day(s), n && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[s] || (r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[s] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[s].test(e)) return s;
          if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e)) return s;
          if (n && "dd" === t && this._minWeekdaysParse[s].test(e)) return s;
          if (!n && this._weekdaysParse[s].test(e)) return s
        }
      }, wn.weekdaysRegex = function(e) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Xe.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = Je), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
      }, wn.weekdaysShortRegex = function(e) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Xe.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Be), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
      }, wn.weekdaysMinRegex = function(e) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Xe.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Qe), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
      }, wn.isPM = function(e) {
        return "p" === (e + "").toLowerCase().charAt(0)
      }, wn.meridiem = function(e, t, n) {
        return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
      }, lt("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
          var t = e % 10;
          return e + (1 === M(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        }
      }), n.lang = D("moment.lang is deprecated. Use moment.locale instead.", lt), n.langData = D("moment.langData is deprecated. Use moment.localeData instead.", dt);
      var Dn = Math.abs;

      function Yn(e, t, n, s) {
        var i = Zt(t, n);
        return e._milliseconds += s * i._milliseconds, e._days += s * i._days, e._months += s * i._months, e._bubble()
      }

      function On(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e)
      }

      function Tn(e) {
        return 4800 * e / 146097
      }

      function bn(e) {
        return 146097 * e / 4800
      }

      function xn(e) {
        return function() {
          return this.as(e)
        }
      }
      var Pn = xn("ms"),
        Wn = xn("s"),
        Cn = xn("m"),
        Hn = xn("h"),
        Rn = xn("d"),
        Un = xn("w"),
        Fn = xn("M"),
        Ln = xn("Q"),
        Nn = xn("y");

      function Gn(e) {
        return function() {
          return this.isValid() ? this._data[e] : NaN
        }
      }
      var Vn = Gn("milliseconds"),
        En = Gn("seconds"),
        In = Gn("minutes"),
        An = Gn("hours"),
        jn = Gn("days"),
        Zn = Gn("months"),
        zn = Gn("years");
      var $n = Math.round,
        qn = {
          ss: 44,
          s: 45,
          m: 45,
          h: 22,
          d: 26,
          M: 11
        };
      var Jn = Math.abs;

      function Bn(e) {
        return (e > 0) - (e < 0) || +e
      }

      function Qn() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e, t, n = Jn(this._milliseconds) / 1e3,
          s = Jn(this._days),
          i = Jn(this._months);
        e = w(n / 60), t = w(e / 60), n %= 60, e %= 60;
        var r = w(i / 12),
          a = i %= 12,
          o = s,
          u = t,
          l = e,
          h = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
          d = this.asSeconds();
        if (!d) return "P0D";
        var c = d < 0 ? "-" : "",
          f = Bn(this._months) !== Bn(d) ? "-" : "",
          m = Bn(this._days) !== Bn(d) ? "-" : "",
          _ = Bn(this._milliseconds) !== Bn(d) ? "-" : "";
        return c + "P" + (r ? f + r + "Y" : "") + (a ? f + a + "M" : "") + (o ? m + o + "D" : "") + (u || l || h ? "T" : "") + (u ? _ + u + "H" : "") + (l ? _ + l + "M" : "") + (h ? _ + h + "S" : "")
      }
      var Xn = Rt.prototype;
      return Xn.isValid = function() {
        return this._isValid
      }, Xn.abs = function() {
        var e = this._data;
        return this._milliseconds = Dn(this._milliseconds), this._days = Dn(this._days), this._months = Dn(this._months), e.milliseconds = Dn(e.milliseconds), e.seconds = Dn(e.seconds), e.minutes = Dn(e.minutes), e.hours = Dn(e.hours), e.months = Dn(e.months), e.years = Dn(e.years), this
      }, Xn.add = function(e, t) {
        return Yn(this, e, t, 1)
      }, Xn.subtract = function(e, t) {
        return Yn(this, e, t, -1)
      }, Xn.as = function(e) {
        if (!this.isValid()) return NaN;
        var t, n, s = this._milliseconds;
        if ("month" === (e = H(e)) || "quarter" === e || "year" === e) switch (t = this._days + s / 864e5, n = this._months + Tn(t), e) {
          case "month":
            return n;
          case "quarter":
            return n / 3;
          case "year":
            return n / 12
        } else switch (t = this._days + Math.round(bn(this._months)), e) {
          case "week":
            return t / 7 + s / 6048e5;
          case "day":
            return t + s / 864e5;
          case "hour":
            return 24 * t + s / 36e5;
          case "minute":
            return 1440 * t + s / 6e4;
          case "second":
            return 86400 * t + s / 1e3;
          case "millisecond":
            return Math.floor(864e5 * t) + s;
          default:
            throw new Error("Unknown unit " + e)
        }
      }, Xn.asMilliseconds = Pn, Xn.asSeconds = Wn, Xn.asMinutes = Cn, Xn.asHours = Hn, Xn.asDays = Rn, Xn.asWeeks = Un, Xn.asMonths = Fn, Xn.asQuarters = Ln, Xn.asYears = Nn, Xn.valueOf = function() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * M(this._months / 12) : NaN
      }, Xn._bubble = function() {
        var e, t, n, s, i, r = this._milliseconds,
          a = this._days,
          o = this._months,
          u = this._data;
        return r >= 0 && a >= 0 && o >= 0 || r <= 0 && a <= 0 && o <= 0 || (r += 864e5 * On(bn(o) + a), a = 0, o = 0), u.milliseconds = r % 1e3, e = w(r / 1e3), u.seconds = e % 60, t = w(e / 60), u.minutes = t % 60, n = w(t / 60), u.hours = n % 24, a += w(n / 24), o += i = w(Tn(a)), a -= On(bn(i)), s = w(o / 12), o %= 12, u.days = a, u.months = o, u.years = s, this
      }, Xn.clone = function() {
        return Zt(this)
      }, Xn.get = function(e) {
        return e = H(e), this.isValid() ? this[e + "s"]() : NaN
      }, Xn.milliseconds = Vn, Xn.seconds = En, Xn.minutes = In, Xn.hours = An, Xn.days = jn, Xn.weeks = function() {
        return w(this.days() / 7)
      }, Xn.months = Zn, Xn.years = zn, Xn.humanize = function(e) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var t = this.localeData(),
          n = function(e, t, n) {
            var s = Zt(e).abs(),
              i = $n(s.as("s")),
              r = $n(s.as("m")),
              a = $n(s.as("h")),
              o = $n(s.as("d")),
              u = $n(s.as("M")),
              l = $n(s.as("y")),
              h = i <= qn.ss && ["s", i] || i < qn.s && ["ss", i] || r <= 1 && ["m"] || r < qn.m && ["mm", r] || a <= 1 && ["h"] || a < qn.h && ["hh", a] || o <= 1 && ["d"] || o < qn.d && ["dd", o] || u <= 1 && ["M"] || u < qn.M && ["MM", u] || l <= 1 && ["y"] || ["yy", l];
            return h[2] = t, h[3] = +e > 0, h[4] = n,
              function(e, t, n, s, i) {
                return i.relativeTime(t || 1, !!n, e, s)
              }.apply(null, h)
          }(this, !e, t);
        return e && (n = t.pastFuture(+this, n)), t.postformat(n)
      }, Xn.toISOString = Qn, Xn.toString = Qn, Xn.toJSON = Qn, Xn.locale = Kt, Xn.localeData = tn, Xn.toIsoString = D("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Qn), Xn.lang = en, I("X", 0, 0, "unix"), I("x", 0, 0, "valueOf"), ue("x", se), ue("X", /[+-]?\d+(\.\d{1,3})?/), ce("X", function(e, t, n) {
        n._d = new Date(1e3 * parseFloat(e, 10))
      }), ce("x", function(e, t, n) {
        n._d = new Date(M(e))
      }), n.version = "2.24.0", e = xt, n.fn = vn, n.min = function() {
        return Ct("isBefore", [].slice.call(arguments, 0))
      }, n.max = function() {
        return Ct("isAfter", [].slice.call(arguments, 0))
      }, n.now = function() {
        return Date.now ? Date.now() : +new Date
      }, n.utc = d, n.unix = function(e) {
        return xt(1e3 * e)
      }, n.months = function(e, t) {
        return kn(e, t, "months")
      }, n.isDate = o, n.locale = lt, n.invalid = m, n.duration = Zt, n.isMoment = p, n.weekdays = function(e, t, n) {
        return Sn(e, t, n, "weekdays")
      }, n.parseZone = function() {
        return xt.apply(null, arguments).parseZone()
      }, n.localeData = dt, n.isDuration = Ut, n.monthsShort = function(e, t) {
        return kn(e, t, "monthsShort")
      }, n.weekdaysMin = function(e, t, n) {
        return Sn(e, t, n, "weekdaysMin")
      }, n.defineLocale = ht, n.updateLocale = function(e, t) {
        if (null != t) {
          var n, s, i = it;
          null != (s = ut(e)) && (i = s._config), (n = new P(t = x(i, t))).parentLocale = rt[e], rt[e] = n, lt(e)
        } else null != rt[e] && (null != rt[e].parentLocale ? rt[e] = rt[e].parentLocale : null != rt[e] && delete rt[e]);
        return rt[e]
      }, n.locales = function() {
        return Y(rt)
      }, n.weekdaysShort = function(e, t, n) {
        return Sn(e, t, n, "weekdaysShort")
      }, n.normalizeUnits = H, n.relativeTimeRounding = function(e) {
        return void 0 === e ? $n : "function" == typeof e && ($n = e, !0)
      }, n.relativeTimeThreshold = function(e, t) {
        return void 0 !== qn[e] && (void 0 === t ? qn[e] : (qn[e] = t, "s" === e && (qn.ss = t - 1), !0))
      }, n.calendarFormat = function(e, t) {
        var n = e.diff(t, "days", !0);
        return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
      }, n.prototype = vn, n.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
      }, n
    });
  }, {}],
  "fRxd": [function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.promptForUsername = o, exports.ChatList = exports.ChatForm = void 0;
    var t = r(require("jquery")),
      e = r(require("crypto-js/md5")),
      a = r(require("moment"));

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
      for (var a = 0; a < e.length; a++) {
        var r = e[a];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
      }
    }

    function i(t, e, a) {
      return e && s(t.prototype, e), a && s(t, a), t
    }

    function u(t) {
      var a = (0, e.default)(t);
      return "http://www.gravatar.com/avatar/".concat(a.toString())
    }

    function o() {
      return prompt("Enter a username").toLowerCase()
    }
    var f = function() {
      function e(a, r) {
        n(this, e), this.$form = (0, t.default)(a), this.$input = (0, t.default)(r)
      }
      return i(e, [{
        key: "init",
        value: function(t) {
          var e = this;
          this.$form.submit(function(a) {
            a.preventDefault();
            var r = e.$input.val();
            t(r), e.$input.val("")
          }), this.$form.find("button").on("click", function() {
            return e.$form.submit()
          })
        }
      }]), e
    }();
    exports.ChatForm = f;
    var l = function() {
      function e(a, r) {
        n(this, e), this.$list = (0, t.default)(a), this.username = r
      }
      return i(e, [{
        key: "drawMessage",
        value: function(e) {
          var r = e.user,
            n = e.timestamp,
            s = e.message,
            i = (0, t.default)("<li>", {
              class: "message-row"
            });
          this.username === r && i.addClass("me");
          var o = (0, t.default)("<p>");
          o.append((0, t.default)("<span>", {
            class: "message-username",
            text: r
          })), o.append((0, t.default)("<span>", {
            class: "timestamp",
            "data-time": n,
            text: (0, a.default)(n).fromNow()
          })), o.append((0, t.default)("<span>", {
            class: "message-message",
            text: s
          }));
          var f = (0, t.default)("<img>", {
            src: u(r),
            title: r
          });
          i.append(f), i.append(o), this.$list.append(i), i.get(0).scrollIntoView()
        }
      }, {
        key: "init",
        value: function() {
          this.timer = setInterval(function() {
            (0, t.default)("[data-time]").each(function(e, r) {
              var n = (0, t.default)(r),
                s = (new Date).setTime(n.attr("data-time")),
                i = (0, a.default)(s).fromNow();
              n.html(i)
            })
          }, 1e3)
        }
      }]), e
    }();
    exports.ChatList = l;
  }, {
    "jquery": "lwLq",
    "crypto-js/md5": "RklT",
    "moment": "pQse"
  }],
  "A2T1": [function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = s(require("./ws-client")),
      t = require("./storage"),
      a = require("./dom");

    function s(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function r(e, t) {
      for (var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
      }
    }

    function i(e, t, a) {
      return t && r(e.prototype, t), a && r(e, a), e
    }

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var o = '[data-chat="chat-form"]',
      u = '[data-chat="message-input"]',
      c = '[data-chat="message-list"]',
      l = new t.UserStore("x-chattrbox/u"),
      f = l.get();
    f || (f = (0, a.promptForUsername)(), l.set(f));
    var h = function t() {
        var s = this;
        n(this, t), this.chatForm = new a.ChatForm(o, u), this.chatList = new a.ChatList(c, f), e.default.init("ws://localhost:3001"), e.default.registerOpenHandler(function() {
          s.chatForm.init(function(t) {
            var a = new m({
              message: t
            });
            e.default.sendMessage(a.serialize())
          }), s.chatList.init()
        }), e.default.registerMessageHandler(function(e) {
          console.log(e);
          var t = new m(e);
          s.chatList.drawMessage(t.serialize())
        })
      },
      m = function() {
        function e(t) {
          var a = t.message,
            s = t.user,
            r = void 0 === s ? f : s,
            i = t.timestamp,
            o = void 0 === i ? (new Date).getTime() : i;
          n(this, e), this.message = a, this.user = r, this.timestamp = o
        }
        return i(e, [{
          key: "serialize",
          value: function() {
            return {
              user: this.user,
              message: this.message,
              timestamp: this.timestamp
            }
          }
        }]), e
      }(),
      d = h;
    exports.default = d;
  }, {
    "./ws-client": "mYIs",
    "./storage": "KZ7Y",
    "./dom": "fRxd"
  }],
  "epB2": [function(require, module, exports) {
    "use strict";
    var e = u(require("./app"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    new e.default;
  }, {
    "./app": "A2T1"
  }]
}, {}, ["epB2"], null)
//# sourceMappingURL=/main.js.map
