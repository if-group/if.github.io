/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = e.document
          ? t(e, !0)
          : function (e) {
              if (!e.document)
                throw new Error("jQuery requires a window with a document");
              return t(e);
            })
      : t(e);
  })("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    var t = [],
      E = C.document,
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.concat,
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function (e) {
        return "function" == typeof e && "number" != typeof e.nodeType;
      },
      x = function (e) {
        return null != e && e === e.window;
      },
      c = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function b(e, t, n) {
      var r,
        i,
        o = (n = n || E).createElement("script");
      if (((o.text = e), t))
        for (r in c)
          (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
            o.setAttribute(r, i);
      n.head.appendChild(o).parentNode.removeChild(o);
    }
    function w(e) {
      return null == e
        ? e + ""
        : "object" == typeof e || "function" == typeof e
        ? n[o.call(e)] || "object"
        : typeof e;
    }
    var f = "3.4.1",
      k = function (e, t) {
        return new k.fn.init(e, t);
      },
      p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function d(e) {
      var t = !!e && "length" in e && e.length,
        n = w(e);
      return (
        !m(e) &&
        !x(e) &&
        ("array" === n ||
          0 === t ||
          ("number" == typeof t && 0 < t && t - 1 in e))
      );
    }
    (k.fn = k.prototype = {
      jquery: f,
      constructor: k,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
      },
      pushStack: function (e) {
        var t = k.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return k.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          k.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
      (k.extend = k.fn.extend = function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (k.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || k.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = k.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
      k.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isPlainObject: function (e) {
          var t, n;
          return (
            !(!e || "[object Object]" !== o.call(e)) &&
            (!(t = r(e)) ||
              ("function" ==
                typeof (n = v.call(t, "constructor") && t.constructor) &&
                a.call(n) === l))
          );
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        globalEval: function (e, t) {
          b(e, { nonce: t && t.nonce });
        },
        each: function (e, t) {
          var n,
            r = 0;
          if (d(e)) {
            for (n = e.length; r < n; r++)
              if (!1 === t.call(e[r], r, e[r])) break;
          } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
          return e;
        },
        trim: function (e) {
          return null == e ? "" : (e + "").replace(p, "");
        },
        makeArray: function (e, t) {
          var n = t || [];
          return (
            null != e &&
              (d(Object(e))
                ? k.merge(n, "string" == typeof e ? [e] : e)
                : u.call(n, e)),
            n
          );
        },
        inArray: function (e, t, n) {
          return null == t ? -1 : i.call(t, e, n);
        },
        merge: function (e, t) {
          for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
          return (e.length = i), e;
        },
        grep: function (e, t, n) {
          for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
            !t(e[i], i) !== a && r.push(e[i]);
          return r;
        },
        map: function (e, t, n) {
          var r,
            i,
            o = 0,
            a = [];
          if (d(e))
            for (r = e.length; o < r; o++)
              null != (i = t(e[o], o, n)) && a.push(i);
          else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
          return g.apply([], a);
        },
        guid: 1,
        support: y,
      }),
      "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]),
      k.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (e, t) {
          n["[object " + t + "]"] = t.toLowerCase();
        }
      );
    var h = (function (n) {
      var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        v,
        s,
        c,
        y,
        k = "sizzle" + 1 * new Date(),
        m = n.document,
        S = 0,
        r = 0,
        p = ue(),
        x = ue(),
        N = ue(),
        A = ue(),
        D = function (e, t) {
          return e === t && (l = !0), 0;
        },
        j = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function (e, t) {
          for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
          return -1;
        },
        R =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        W =
          "\\[" +
          M +
          "*(" +
          I +
          ")(?:" +
          M +
          "*([*^$|!~]?=)" +
          M +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          I +
          "))|)" +
          M +
          "*\\]",
        $ =
          ":(" +
          I +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          W +
          ")*)|.*)\\)|)",
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
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              M +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              M +
              "*(?:([+-]|)" +
              M +
              "*(\\d+)|))" +
              M +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + R + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              M +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              M +
              "*((?:-\\d)?\\d*)" +
              M +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ne = function (e, t, n) {
          var r = "0x" + t - 65536;
          return r != r || n
            ? t
            : r < 0
            ? String.fromCharCode(r + 65536)
            : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
        },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function (e, t) {
          return t
            ? "\0" === e
              ? "\ufffd"
              : e.slice(0, -1) +
                "\\" +
                e.charCodeAt(e.length - 1).toString(16) +
                " "
            : "\\" + e;
        },
        oe = function () {
          T();
        },
        ae = be(
          function (e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
          },
          { dir: "parentNode", next: "legend" }
        );
      try {
        H.apply((t = O.call(m.childNodes)), m.childNodes),
          t[m.childNodes.length].nodeType;
      } catch (e) {
        H = {
          apply: t.length
            ? function (e, t) {
                L.apply(e, O.call(t));
              }
            : function (e, t) {
                var n = e.length,
                  r = 0;
                while ((e[n++] = t[r++]));
                e.length = n - 1;
              },
        };
      }
      function se(t, e, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
        if (
          ((n = n || []),
          "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
        )
          return n;
        if (
          !r &&
          ((e ? e.ownerDocument || e : m) !== C && T(e), (e = e || C), E)
        ) {
          if (11 !== p && (u = Z.exec(t)))
            if ((i = u[1])) {
              if (9 === p) {
                if (!(a = e.getElementById(i))) return n;
                if (a.id === i) return n.push(a), n;
              } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
                return n.push(a), n;
            } else {
              if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
              if (
                (i = u[3]) &&
                d.getElementsByClassName &&
                e.getElementsByClassName
              )
                return H.apply(n, e.getElementsByClassName(i)), n;
            }
          if (
            d.qsa &&
            !A[t + " "] &&
            (!v || !v.test(t)) &&
            (1 !== p || "object" !== e.nodeName.toLowerCase())
          ) {
            if (((c = t), (f = e), 1 === p && U.test(t))) {
              (s = e.getAttribute("id"))
                ? (s = s.replace(re, ie))
                : e.setAttribute("id", (s = k)),
                (o = (l = h(t)).length);
              while (o--) l[o] = "#" + s + " " + xe(l[o]);
              (c = l.join(",")), (f = (ee.test(t) && ye(e.parentNode)) || e);
            }
            try {
              return H.apply(n, f.querySelectorAll(c)), n;
            } catch (e) {
              A(t, !0);
            } finally {
              s === k && e.removeAttribute("id");
            }
          }
        }
        return g(t.replace(B, "$1"), e, n, r);
      }
      function ue() {
        var r = [];
        return function e(t, n) {
          return (
            r.push(t + " ") > b.cacheLength && delete e[r.shift()],
            (e[t + " "] = n)
          );
        };
      }
      function le(e) {
        return (e[k] = !0), e;
      }
      function ce(e) {
        var t = C.createElement("fieldset");
        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function fe(e, t) {
        var n = e.split("|"),
          r = n.length;
        while (r--) b.attrHandle[n[r]] = t;
      }
      function pe(e, t) {
        var n = t && e,
          r =
            n &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            e.sourceIndex - t.sourceIndex;
        if (r) return r;
        if (n) while ((n = n.nextSibling)) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function de(t) {
        return function (e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t;
        };
      }
      function he(n) {
        return function (e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t || "button" === t) && e.type === n;
        };
      }
      function ge(t) {
        return function (e) {
          return "form" in e
            ? e.parentNode && !1 === e.disabled
              ? "label" in e
                ? "label" in e.parentNode
                  ? e.parentNode.disabled === t
                  : e.disabled === t
                : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
              : e.disabled === t
            : "label" in e && e.disabled === t;
        };
      }
      function ve(a) {
        return le(function (o) {
          return (
            (o = +o),
            le(function (e, t) {
              var n,
                r = a([], e.length, o),
                i = r.length;
              while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
            })
          );
        });
      }
      function ye(e) {
        return e && "undefined" != typeof e.getElementsByTagName && e;
      }
      for (e in ((d = se.support = {}),
      (i = se.isXML = function (e) {
        var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
      (T = se.setDocument = function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : m;
        return (
          r !== C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            m !== C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (d.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = k),
                !C.getElementsByName || !C.getElementsByName(k).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  k +
                  "'></a><select id='" +
                  k +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + k + "+*").length ||
                    v.push(".#.+[+~]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", $);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (D = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e === C || (e.ownerDocument === m && y(m, e))
                        ? -1
                        : t === C || (t.ownerDocument === m && y(m, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e === C
                      ? -1
                      : t === C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] === m
                    ? -1
                    : s[r] === m
                    ? 1
                    : 0;
                })),
          C
        );
      }),
      (se.matches = function (e, t) {
        return se(e, null, null, t);
      }),
      (se.matchesSelector = function (e, t) {
        if (
          ((e.ownerDocument || e) !== C && T(e),
          d.matchesSelector &&
            E &&
            !A[t + " "] &&
            (!s || !s.test(t)) &&
            (!v || !v.test(t)))
        )
          try {
            var n = c.call(e, t);
            if (
              n ||
              d.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return n;
          } catch (e) {
            A(t, !0);
          }
        return 0 < se(t, C, null, [e]).length;
      }),
      (se.contains = function (e, t) {
        return (e.ownerDocument || e) !== C && T(e), y(e, t);
      }),
      (se.attr = function (e, t) {
        (e.ownerDocument || e) !== C && T(e);
        var n = b.attrHandle[t.toLowerCase()],
          r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
        return void 0 !== r
          ? r
          : d.attributes || !E
          ? e.getAttribute(t)
          : (r = e.getAttributeNode(t)) && r.specified
          ? r.value
          : null;
      }),
      (se.escape = function (e) {
        return (e + "").replace(re, ie);
      }),
      (se.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (se.uniqueSort = function (e) {
        var t,
          n = [],
          r = 0,
          i = 0;
        if (
          ((l = !d.detectDuplicates),
          (u = !d.sortStable && e.slice(0)),
          e.sort(D),
          l)
        ) {
          while ((t = e[i++])) t === e[i] && (r = n.push(i));
          while (r--) e.splice(n[r], 1);
        }
        return (u = null), e;
      }),
      (o = se.getText = function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
      ((b = se.selectors = {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = p[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                p(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) &&
                        r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [S, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[k] || (a[k] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [S, d]),
                          a === e)
                        )
                          break;
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[k]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace(B, "$1"));
            return s[k]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
            );
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        b.pseudos[e] = de(e);
      for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
      function me() {}
      function xe(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r;
      }
      function be(s, e, t) {
        var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
        return e.first
          ? function (e, t, n) {
              while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
              return !1;
            }
          : function (e, t, n) {
              var r,
                i,
                o,
                a = [S, p];
              if (n) {
                while ((e = e[u]))
                  if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
              } else
                while ((e = e[u]))
                  if (1 === e.nodeType || f)
                    if (
                      ((i =
                        (o = e[k] || (e[k] = {}))[e.uniqueID] ||
                        (o[e.uniqueID] = {})),
                      l && l === e.nodeName.toLowerCase())
                    )
                      e = e[u] || e;
                    else {
                      if ((r = i[c]) && r[0] === S && r[1] === p)
                        return (a[2] = r[2]);
                      if (((i[c] = a)[2] = s(e, t, n))) return !0;
                    }
              return !1;
            };
      }
      function we(i) {
        return 1 < i.length
          ? function (e, t, n) {
              var r = i.length;
              while (r--) if (!i[r](e, t, n)) return !1;
              return !0;
            }
          : i[0];
      }
      function Te(e, t, n, r, i) {
        for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
          (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
        return a;
      }
      function Ce(d, h, g, v, y, e) {
        return (
          v && !v[k] && (v = Ce(v)),
          y && !y[k] && (y = Ce(y, e)),
          le(function (e, t, n, r) {
            var i,
              o,
              a,
              s = [],
              u = [],
              l = t.length,
              c =
                e ||
                (function (e, t, n) {
                  for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                  return n;
                })(h || "*", n.nodeType ? [n] : n, []),
              f = !d || (!e && h) ? c : Te(c, s, d, n, r),
              p = g ? (y || (e ? d : l || v) ? [] : t) : f;
            if ((g && g(f, p, n, r), v)) {
              (i = Te(p, u)), v(i, [], n, r), (o = i.length);
              while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
            }
            if (e) {
              if (y || d) {
                if (y) {
                  (i = []), (o = p.length);
                  while (o--) (a = p[o]) && i.push((f[o] = a));
                  y(null, (p = []), i, r);
                }
                o = p.length;
                while (o--)
                  (a = p[o]) &&
                    -1 < (i = y ? P(e, a) : s[o]) &&
                    (e[i] = !(t[i] = a));
              }
            } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
          })
        );
      }
      function Ee(e) {
        for (
          var i,
            t,
            n,
            r = e.length,
            o = b.relative[e[0].type],
            a = o || b.relative[" "],
            s = o ? 1 : 0,
            u = be(
              function (e) {
                return e === i;
              },
              a,
              !0
            ),
            l = be(
              function (e) {
                return -1 < P(i, e);
              },
              a,
              !0
            ),
            c = [
              function (e, t, n) {
                var r =
                  (!o && (n || t !== w)) ||
                  ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return (i = null), r;
              },
            ];
          s < r;
          s++
        )
          if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
          else {
            if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
              for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
              return Ce(
                1 < s && we(c),
                1 < s &&
                  xe(
                    e
                      .slice(0, s - 1)
                      .concat({ value: " " === e[s - 2].type ? "*" : "" })
                  ).replace(B, "$1"),
                t,
                s < n && Ee(e.slice(s, n)),
                n < r && Ee((e = e.slice(n))),
                n < r && xe(e)
              );
            }
            c.push(t);
          }
        return we(c);
      }
      return (
        (me.prototype = b.filters = b.pseudos),
        (b.setFilters = new me()),
        (h = se.tokenize = function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace(B, " ") }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
        (f = se.compile = function (e, t) {
          var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = N[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
            (a = N(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (x = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG("*", i)),
                  h = (S += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t === C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument === C || (T(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (S = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = y[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r);
                }
                return i && ((S = h), (w = p)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
        (g = se.select = function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t
            ),
            n
          );
        }),
        (d.sortStable = k.split("").sort(D).join("") === k),
        (d.detectDuplicates = !!l),
        T(),
        (d.sortDetached = ce(function (e) {
          return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
        })),
        ce(function (e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            "#" === e.firstChild.getAttribute("href")
          );
        }) ||
          fe("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (d.attributes &&
          ce(function (e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          fe("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
          }),
        ce(function (e) {
          return null == e.getAttribute("disabled");
        }) ||
          fe(R, function (e, t, n) {
            var r;
            if (!n)
              return !0 === e[t]
                ? t.toLowerCase()
                : (r = e.getAttributeNode(t)) && r.specified
                ? r.value
                : null;
          }),
        se
      );
    })(C);
    (k.find = h),
      (k.expr = h.selectors),
      (k.expr[":"] = k.expr.pseudos),
      (k.uniqueSort = k.unique = h.uniqueSort),
      (k.text = h.getText),
      (k.isXMLDoc = h.isXML),
      (k.contains = h.contains),
      (k.escapeSelector = h.escape);
    var T = function (e, t, n) {
        var r = [],
          i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
          if (1 === e.nodeType) {
            if (i && k(e).is(n)) break;
            r.push(e);
          }
        return r;
      },
      S = function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
      N = k.expr.match.needsContext;
    function A(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, n, r) {
      return m(n)
        ? k.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r;
          })
        : n.nodeType
        ? k.grep(e, function (e) {
            return (e === n) !== r;
          })
        : "string" != typeof n
        ? k.grep(e, function (e) {
            return -1 < i.call(n, e) !== r;
          })
        : k.filter(n, e, r);
    }
    (k.filter = function (e, t, n) {
      var r = t[0];
      return (
        n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType
          ? k.find.matchesSelector(r, e)
            ? [r]
            : []
          : k.find.matches(
              e,
              k.grep(t, function (e) {
                return 1 === e.nodeType;
              })
            )
      );
    }),
      k.fn.extend({
        find: function (e) {
          var t,
            n,
            r = this.length,
            i = this;
          if ("string" != typeof e)
            return this.pushStack(
              k(e).filter(function () {
                for (t = 0; t < r; t++) if (k.contains(i[t], this)) return !0;
              })
            );
          for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
          return 1 < r ? k.uniqueSort(n) : n;
        },
        filter: function (e) {
          return this.pushStack(j(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(j(this, e || [], !0));
        },
        is: function (e) {
          return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1)
            .length;
        },
      });
    var q,
      L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((k.fn.init = function (e, t, n) {
      var r, i;
      if (!e) return this;
      if (((n = n || q), "string" == typeof e)) {
        if (
          !(r =
            "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
              ? [null, e, null]
              : L.exec(e)) ||
          (!r[1] && t)
        )
          return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
          if (
            ((t = t instanceof k ? t[0] : t),
            k.merge(
              this,
              k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
            ),
            D.test(r[1]) && k.isPlainObject(t))
          )
            for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this;
        }
        return (
          (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
        );
      }
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : m(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(k)
        : k.makeArray(e, this);
    }).prototype = k.fn),
      (q = k(E));
    var H = /^(?:parents|prev(?:Until|All))/,
      O = { children: !0, contents: !0, next: !0, prev: !0 };
    function P(e, t) {
      while ((e = e[t]) && 1 !== e.nodeType);
      return e;
    }
    k.fn.extend({
      has: function (e) {
        var t = k(e, this),
          n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0;
        });
      },
      closest: function (e, t) {
        var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && k(e);
        if (!N.test(e))
          for (; r < i; r++)
            for (n = this[r]; n && n !== t; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (a
                  ? -1 < a.index(n)
                  : 1 === n.nodeType && k.find.matchesSelector(n, e))
              ) {
                o.push(n);
                break;
              }
        return this.pushStack(1 < o.length ? k.uniqueSort(o) : o);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? i.call(k(e), this[0])
            : i.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
      },
      addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      },
    }),
      k.each(
        {
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function (e) {
            return T(e, "parentNode");
          },
          parentsUntil: function (e, t, n) {
            return T(e, "parentNode", n);
          },
          next: function (e) {
            return P(e, "nextSibling");
          },
          prev: function (e) {
            return P(e, "previousSibling");
          },
          nextAll: function (e) {
            return T(e, "nextSibling");
          },
          prevAll: function (e) {
            return T(e, "previousSibling");
          },
          nextUntil: function (e, t, n) {
            return T(e, "nextSibling", n);
          },
          prevUntil: function (e, t, n) {
            return T(e, "previousSibling", n);
          },
          siblings: function (e) {
            return S((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return S(e.firstChild);
          },
          contents: function (e) {
            return "undefined" != typeof e.contentDocument
              ? e.contentDocument
              : (A(e, "template") && (e = e.content || e),
                k.merge([], e.childNodes));
          },
        },
        function (r, i) {
          k.fn[r] = function (e, t) {
            var n = k.map(this, i, e);
            return (
              "Until" !== r.slice(-5) && (t = e),
              t && "string" == typeof t && (n = k.filter(t, n)),
              1 < this.length &&
                (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()),
              this.pushStack(n)
            );
          };
        }
      );
    var R = /[^\x20\t\r\n\f]+/g;
    function M(e) {
      return e;
    }
    function I(e) {
      throw e;
    }
    function W(e, t, n, r) {
      var i;
      try {
        e && m((i = e.promise))
          ? i.call(e).done(t).fail(n)
          : e && m((i = e.then))
          ? i.call(e, t, n)
          : t.apply(void 0, [e].slice(r));
      } catch (e) {
        n.apply(void 0, [e]);
      }
    }
    (k.Callbacks = function (r) {
      var e, n;
      r =
        "string" == typeof r
          ? ((e = r),
            (n = {}),
            k.each(e.match(R) || [], function (e, t) {
              n[t] = !0;
            }),
            n)
          : k.extend({}, r);
      var i,
        t,
        o,
        a,
        s = [],
        u = [],
        l = -1,
        c = function () {
          for (a = a || r.once, o = i = !0; u.length; l = -1) {
            t = u.shift();
            while (++l < s.length)
              !1 === s[l].apply(t[0], t[1]) &&
                r.stopOnFalse &&
                ((l = s.length), (t = !1));
          }
          r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
        },
        f = {
          add: function () {
            return (
              s &&
                (t && !i && ((l = s.length - 1), u.push(t)),
                (function n(e) {
                  k.each(e, function (e, t) {
                    m(t)
                      ? (r.unique && f.has(t)) || s.push(t)
                      : t && t.length && "string" !== w(t) && n(t);
                  });
                })(arguments),
                t && !i && c()),
              this
            );
          },
          remove: function () {
            return (
              k.each(arguments, function (e, t) {
                var n;
                while (-1 < (n = k.inArray(t, s, n)))
                  s.splice(n, 1), n <= l && l--;
              }),
              this
            );
          },
          has: function (e) {
            return e ? -1 < k.inArray(e, s) : 0 < s.length;
          },
          empty: function () {
            return s && (s = []), this;
          },
          disable: function () {
            return (a = u = []), (s = t = ""), this;
          },
          disabled: function () {
            return !s;
          },
          lock: function () {
            return (a = u = []), t || i || (s = t = ""), this;
          },
          locked: function () {
            return !!a;
          },
          fireWith: function (e, t) {
            return (
              a ||
                ((t = [e, (t = t || []).slice ? t.slice() : t]),
                u.push(t),
                i || c()),
              this
            );
          },
          fire: function () {
            return f.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!o;
          },
        };
      return f;
    }),
      k.extend({
        Deferred: function (e) {
          var o = [
              [
                "notify",
                "progress",
                k.Callbacks("memory"),
                k.Callbacks("memory"),
                2,
              ],
              [
                "resolve",
                "done",
                k.Callbacks("once memory"),
                k.Callbacks("once memory"),
                0,
                "resolved",
              ],
              [
                "reject",
                "fail",
                k.Callbacks("once memory"),
                k.Callbacks("once memory"),
                1,
                "rejected",
              ],
            ],
            i = "pending",
            a = {
              state: function () {
                return i;
              },
              always: function () {
                return s.done(arguments).fail(arguments), this;
              },
              catch: function (e) {
                return a.then(null, e);
              },
              pipe: function () {
                var i = arguments;
                return k
                  .Deferred(function (r) {
                    k.each(o, function (e, t) {
                      var n = m(i[t[4]]) && i[t[4]];
                      s[t[1]](function () {
                        var e = n && n.apply(this, arguments);
                        e && m(e.promise)
                          ? e
                              .promise()
                              .progress(r.notify)
                              .done(r.resolve)
                              .fail(r.reject)
                          : r[t[0] + "With"](this, n ? [e] : arguments);
                      });
                    }),
                      (i = null);
                  })
                  .promise();
              },
              then: function (t, n, r) {
                var u = 0;
                function l(i, o, a, s) {
                  return function () {
                    var n = this,
                      r = arguments,
                      e = function () {
                        var e, t;
                        if (!(i < u)) {
                          if ((e = a.apply(n, r)) === o.promise())
                            throw new TypeError("Thenable self-resolution");
                          (t =
                            e &&
                            ("object" == typeof e || "function" == typeof e) &&
                            e.then),
                            m(t)
                              ? s
                                ? t.call(e, l(u, o, M, s), l(u, o, I, s))
                                : (u++,
                                  t.call(
                                    e,
                                    l(u, o, M, s),
                                    l(u, o, I, s),
                                    l(u, o, M, o.notifyWith)
                                  ))
                              : (a !== M && ((n = void 0), (r = [e])),
                                (s || o.resolveWith)(n, r));
                        }
                      },
                      t = s
                        ? e
                        : function () {
                            try {
                              e();
                            } catch (e) {
                              k.Deferred.exceptionHook &&
                                k.Deferred.exceptionHook(e, t.stackTrace),
                                u <= i + 1 &&
                                  (a !== I && ((n = void 0), (r = [e])),
                                  o.rejectWith(n, r));
                            }
                          };
                    i
                      ? t()
                      : (k.Deferred.getStackHook &&
                          (t.stackTrace = k.Deferred.getStackHook()),
                        C.setTimeout(t));
                  };
                }
                return k
                  .Deferred(function (e) {
                    o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)),
                      o[1][3].add(l(0, e, m(t) ? t : M)),
                      o[2][3].add(l(0, e, m(n) ? n : I));
                  })
                  .promise();
              },
              promise: function (e) {
                return null != e ? k.extend(e, a) : a;
              },
            },
            s = {};
          return (
            k.each(o, function (e, t) {
              var n = t[2],
                r = t[5];
              (a[t[1]] = n.add),
                r &&
                  n.add(
                    function () {
                      i = r;
                    },
                    o[3 - e][2].disable,
                    o[3 - e][3].disable,
                    o[0][2].lock,
                    o[0][3].lock
                  ),
                n.add(t[3].fire),
                (s[t[0]] = function () {
                  return (
                    s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                  );
                }),
                (s[t[0] + "With"] = n.fireWith);
            }),
            a.promise(s),
            e && e.call(s, s),
            s
          );
        },
        when: function (e) {
          var n = arguments.length,
            t = n,
            r = Array(t),
            i = s.call(arguments),
            o = k.Deferred(),
            a = function (t) {
              return function (e) {
                (r[t] = this),
                  (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                  --n || o.resolveWith(r, i);
              };
            };
          if (
            n <= 1 &&
            (W(e, o.done(a(t)).resolve, o.reject, !n),
            "pending" === o.state() || m(i[t] && i[t].then))
          )
            return o.then();
          while (t--) W(i[t], a(t), o.reject);
          return o.promise();
        },
      });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (k.Deferred.exceptionHook = function (e, t) {
      C.console &&
        C.console.warn &&
        e &&
        $.test(e.name) &&
        C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }),
      (k.readyException = function (e) {
        C.setTimeout(function () {
          throw e;
        });
      });
    var F = k.Deferred();
    function B() {
      E.removeEventListener("DOMContentLoaded", B),
        C.removeEventListener("load", B),
        k.ready();
    }
    (k.fn.ready = function (e) {
      return (
        F.then(e)["catch"](function (e) {
          k.readyException(e);
        }),
        this
      );
    }),
      k.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
          (!0 === e ? --k.readyWait : k.isReady) ||
            ((k.isReady = !0) !== e && 0 < --k.readyWait) ||
            F.resolveWith(E, [k]);
        },
      }),
      (k.ready.then = F.then),
      "complete" === E.readyState ||
      ("loading" !== E.readyState && !E.documentElement.doScroll)
        ? C.setTimeout(k.ready)
        : (E.addEventListener("DOMContentLoaded", B),
          C.addEventListener("load", B));
    var _ = function (e, t, n, r, i, o, a) {
        var s = 0,
          u = e.length,
          l = null == n;
        if ("object" === w(n))
          for (s in ((i = !0), n)) _(e, t, s, n[s], !0, o, a);
        else if (
          void 0 !== r &&
          ((i = !0),
          m(r) || (a = !0),
          l &&
            (a
              ? (t.call(e, r), (t = null))
              : ((l = t),
                (t = function (e, t, n) {
                  return l.call(k(e), n);
                }))),
          t)
        )
          for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
      },
      z = /^-ms-/,
      U = /-([a-z])/g;
    function X(e, t) {
      return t.toUpperCase();
    }
    function V(e) {
      return e.replace(z, "ms-").replace(U, X);
    }
    var G = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function Y() {
      this.expando = k.expando + Y.uid++;
    }
    (Y.uid = 1),
      (Y.prototype = {
        cache: function (e) {
          var t = e[this.expando];
          return (
            t ||
              ((t = {}),
              G(e) &&
                (e.nodeType
                  ? (e[this.expando] = t)
                  : Object.defineProperty(e, this.expando, {
                      value: t,
                      configurable: !0,
                    }))),
            t
          );
        },
        set: function (e, t, n) {
          var r,
            i = this.cache(e);
          if ("string" == typeof t) i[V(t)] = n;
          else for (r in t) i[V(r)] = t[r];
          return i;
        },
        get: function (e, t) {
          return void 0 === t
            ? this.cache(e)
            : e[this.expando] && e[this.expando][V(t)];
        },
        access: function (e, t, n) {
          return void 0 === t || (t && "string" == typeof t && void 0 === n)
            ? this.get(e, t)
            : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function (e, t) {
          var n,
            r = e[this.expando];
          if (void 0 !== r) {
            if (void 0 !== t) {
              n = (t = Array.isArray(t)
                ? t.map(V)
                : (t = V(t)) in r
                ? [t]
                : t.match(R) || []).length;
              while (n--) delete r[t[n]];
            }
            (void 0 === t || k.isEmptyObject(r)) &&
              (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
          }
        },
        hasData: function (e) {
          var t = e[this.expando];
          return void 0 !== t && !k.isEmptyObject(t);
        },
      });
    var Q = new Y(),
      J = new Y(),
      K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Z = /[A-Z]/g;
    function ee(e, t, n) {
      var r, i;
      if (void 0 === n && 1 === e.nodeType)
        if (
          ((r = "data-" + t.replace(Z, "-$&").toLowerCase()),
          "string" == typeof (n = e.getAttribute(r)))
        ) {
          try {
            n =
              "true" === (i = n) ||
              ("false" !== i &&
                ("null" === i
                  ? null
                  : i === +i + ""
                  ? +i
                  : K.test(i)
                  ? JSON.parse(i)
                  : i));
          } catch (e) {}
          J.set(e, t, n);
        } else n = void 0;
      return n;
    }
    k.extend({
      hasData: function (e) {
        return J.hasData(e) || Q.hasData(e);
      },
      data: function (e, t, n) {
        return J.access(e, t, n);
      },
      removeData: function (e, t) {
        J.remove(e, t);
      },
      _data: function (e, t, n) {
        return Q.access(e, t, n);
      },
      _removeData: function (e, t) {
        Q.remove(e, t);
      },
    }),
      k.fn.extend({
        data: function (n, e) {
          var t,
            r,
            i,
            o = this[0],
            a = o && o.attributes;
          if (void 0 === n) {
            if (
              this.length &&
              ((i = J.get(o)), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))
            ) {
              t = a.length;
              while (t--)
                a[t] &&
                  0 === (r = a[t].name).indexOf("data-") &&
                  ((r = V(r.slice(5))), ee(o, r, i[r]));
              Q.set(o, "hasDataAttrs", !0);
            }
            return i;
          }
          return "object" == typeof n
            ? this.each(function () {
                J.set(this, n);
              })
            : _(
                this,
                function (e) {
                  var t;
                  if (o && void 0 === e)
                    return void 0 !== (t = J.get(o, n))
                      ? t
                      : void 0 !== (t = ee(o, n))
                      ? t
                      : void 0;
                  this.each(function () {
                    J.set(this, n, e);
                  });
                },
                null,
                e,
                1 < arguments.length,
                null,
                !0
              );
        },
        removeData: function (e) {
          return this.each(function () {
            J.remove(this, e);
          });
        },
      }),
      k.extend({
        queue: function (e, t, n) {
          var r;
          if (e)
            return (
              (t = (t || "fx") + "queue"),
              (r = Q.get(e, t)),
              n &&
                (!r || Array.isArray(n)
                  ? (r = Q.access(e, t, k.makeArray(n)))
                  : r.push(n)),
              r || []
            );
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var n = k.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = k._queueHooks(e, t);
          "inprogress" === i && ((i = n.shift()), r--),
            i &&
              ("fx" === t && n.unshift("inprogress"),
              delete o.stop,
              i.call(
                e,
                function () {
                  k.dequeue(e, t);
                },
                o
              )),
            !r && o && o.empty.fire();
        },
        _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return (
            Q.get(e, n) ||
            Q.access(e, n, {
              empty: k.Callbacks("once memory").add(function () {
                Q.remove(e, [t + "queue", n]);
              }),
            })
          );
        },
      }),
      k.fn.extend({
        queue: function (t, n) {
          var e = 2;
          return (
            "string" != typeof t && ((n = t), (t = "fx"), e--),
            arguments.length < e
              ? k.queue(this[0], t)
              : void 0 === n
              ? this
              : this.each(function () {
                  var e = k.queue(this, t, n);
                  k._queueHooks(this, t),
                    "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            k.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, t) {
          var n,
            r = 1,
            i = k.Deferred(),
            o = this,
            a = this.length,
            s = function () {
              --r || i.resolveWith(o, [o]);
            };
          "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
          while (a--)
            (n = Q.get(o[a], e + "queueHooks")) &&
              n.empty &&
              (r++, n.empty.add(s));
          return s(), i.promise(t);
        },
      });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
      re = ["Top", "Right", "Bottom", "Left"],
      ie = E.documentElement,
      oe = function (e) {
        return k.contains(e.ownerDocument, e);
      },
      ae = { composed: !0 };
    ie.getRootNode &&
      (oe = function (e) {
        return (
          k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
        );
      });
    var se = function (e, t) {
        return (
          "none" === (e = t || e).style.display ||
          ("" === e.style.display && oe(e) && "none" === k.css(e, "display"))
        );
      },
      ue = function (e, t, n, r) {
        var i,
          o,
          a = {};
        for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
        for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
        return i;
      };
    function le(e, t, n, r) {
      var i,
        o,
        a = 20,
        s = r
          ? function () {
              return r.cur();
            }
          : function () {
              return k.css(e, t, "");
            },
        u = s(),
        l = (n && n[3]) || (k.cssNumber[t] ? "" : "px"),
        c =
          e.nodeType &&
          (k.cssNumber[t] || ("px" !== l && +u)) &&
          ne.exec(k.css(e, t));
      if (c && c[3] !== l) {
        (u /= 2), (l = l || c[3]), (c = +u || 1);
        while (a--)
          k.style(e, t, c + l),
            (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
            (c /= o);
        (c *= 2), k.style(e, t, c + l), (n = n || []);
      }
      return (
        n &&
          ((c = +c || +u || 0),
          (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
          r && ((r.unit = l), (r.start = c), (r.end = i))),
        i
      );
    }
    var ce = {};
    function fe(e, t) {
      for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
        (r = e[c]).style &&
          ((n = r.style.display),
          t
            ? ("none" === n &&
                ((l[c] = Q.get(r, "display") || null),
                l[c] || (r.style.display = "")),
              "" === r.style.display &&
                se(r) &&
                (l[c] =
                  ((u = a = o = void 0),
                  (a = (i = r).ownerDocument),
                  (s = i.nodeName),
                  (u = ce[s]) ||
                    ((o = a.body.appendChild(a.createElement(s))),
                    (u = k.css(o, "display")),
                    o.parentNode.removeChild(o),
                    "none" === u && (u = "block"),
                    (ce[s] = u)))))
            : "none" !== n && ((l[c] = "none"), Q.set(r, "display", n)));
      for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
      return e;
    }
    k.fn.extend({
      show: function () {
        return fe(this, !0);
      },
      hide: function () {
        return fe(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              se(this) ? k(this).show() : k(this).hide();
            });
      },
    });
    var pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
    function ve(e, t) {
      var n;
      return (
        (n =
          "undefined" != typeof e.getElementsByTagName
            ? e.getElementsByTagName(t || "*")
            : "undefined" != typeof e.querySelectorAll
            ? e.querySelectorAll(t || "*")
            : []),
        void 0 === t || (t && A(e, t)) ? k.merge([e], n) : n
      );
    }
    function ye(e, t) {
      for (var n = 0, r = e.length; n < r; n++)
        Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
    }
    (ge.optgroup = ge.option),
      (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
      (ge.th = ge.td);
    var me,
      xe,
      be = /<|&#?\w+;/;
    function we(e, t, n, r, i) {
      for (
        var o,
          a,
          s,
          u,
          l,
          c,
          f = t.createDocumentFragment(),
          p = [],
          d = 0,
          h = e.length;
        d < h;
        d++
      )
        if ((o = e[d]) || 0 === o)
          if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);
          else if (be.test(o)) {
            (a = a || f.appendChild(t.createElement("div"))),
              (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
              (u = ge[s] || ge._default),
              (a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2]),
              (c = u[0]);
            while (c--) a = a.lastChild;
            k.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
          } else p.push(t.createTextNode(o));
      (f.textContent = ""), (d = 0);
      while ((o = p[d++]))
        if (r && -1 < k.inArray(o, r)) i && i.push(o);
        else if (
          ((l = oe(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)
        ) {
          c = 0;
          while ((o = a[c++])) he.test(o.type || "") && n.push(o);
        }
      return f;
    }
    (me = E.createDocumentFragment().appendChild(E.createElement("div"))),
      (xe = E.createElement("input")).setAttribute("type", "radio"),
      xe.setAttribute("checked", "checked"),
      xe.setAttribute("name", "t"),
      me.appendChild(xe),
      (y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (me.innerHTML = "<textarea>x</textarea>"),
      (y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue);
    var Te = /^key/,
      Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ee = /^([^.]*)(?:\.(.+)|)/;
    function ke() {
      return !0;
    }
    function Se() {
      return !1;
    }
    function Ne(e, t) {
      return (
        (e ===
          (function () {
            try {
              return E.activeElement;
            } catch (e) {}
          })()) ==
        ("focus" === t)
      );
    }
    function Ae(e, t, n, r, i, o) {
      var a, s;
      if ("object" == typeof t) {
        for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
          Ae(e, s, n, r, t[s], o);
        return e;
      }
      if (
        (null == r && null == i
          ? ((i = n), (r = n = void 0))
          : null == i &&
            ("string" == typeof n
              ? ((i = r), (r = void 0))
              : ((i = r), (r = n), (n = void 0))),
        !1 === i)
      )
        i = Se;
      else if (!i) return e;
      return (
        1 === o &&
          ((a = i),
          ((i = function (e) {
            return k().off(e), a.apply(this, arguments);
          }).guid = a.guid || (a.guid = k.guid++))),
        e.each(function () {
          k.event.add(this, t, i, r, n);
        })
      );
    }
    function De(e, i, o) {
      o
        ? (Q.set(e, i, !1),
          k.event.add(e, i, {
            namespace: !1,
            handler: function (e) {
              var t,
                n,
                r = Q.get(this, i);
              if (1 & e.isTrigger && this[i]) {
                if (r.length)
                  (k.event.special[i] || {}).delegateType && e.stopPropagation();
                else if (
                  ((r = s.call(arguments)),
                  Q.set(this, i, r),
                  (t = o(this, i)),
                  this[i](),
                  r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : (n = {}),
                  r !== n)
                )
                  return (
                    e.stopImmediatePropagation(), e.preventDefault(), n.value
                  );
              } else
                r.length &&
                  (Q.set(this, i, {
                    value: k.event.trigger(
                      k.extend(r[0], k.Event.prototype),
                      r.slice(1),
                      this
                    ),
                  }),
                  e.stopImmediatePropagation());
            },
          }))
        : void 0 === Q.get(e, i) && k.event.add(e, i, ke);
    }
    (k.event = {
      global: {},
      add: function (t, e, n, r, i) {
        var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Q.get(t);
        if (v) {
          n.handler && ((n = (o = n).handler), (i = o.selector)),
            i && k.find.matchesSelector(ie, i),
            n.guid || (n.guid = k.guid++),
            (u = v.events) || (u = v.events = {}),
            (a = v.handle) ||
              (a = v.handle = function (e) {
                return "undefined" != typeof k && k.event.triggered !== e.type
                  ? k.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
            (l = (e = (e || "").match(R) || [""]).length);
          while (l--)
            (d = g = (s = Ee.exec(e[l]) || [])[1]),
              (h = (s[2] || "").split(".").sort()),
              d &&
                ((f = k.event.special[d] || {}),
                (d = (i ? f.delegateType : f.bindType) || d),
                (f = k.event.special[d] || {}),
                (c = k.extend(
                  {
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && k.expr.match.needsContext.test(i),
                    namespace: h.join("."),
                  },
                  o
                )),
                (p = u[d]) ||
                  (((p = u[d] = []).delegateCount = 0),
                  (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                    (t.addEventListener && t.addEventListener(d, a))),
                f.add &&
                  (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
                i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                (k.event.global[d] = !0));
        }
      },
      remove: function (e, t, n, r, i) {
        var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Q.hasData(e) && Q.get(e);
        if (v && (u = v.events)) {
          l = (t = (t || "").match(R) || [""]).length;
          while (l--)
            if (
              ((d = g = (s = Ee.exec(t[l]) || [])[1]),
              (h = (s[2] || "").split(".").sort()),
              d)
            ) {
              (f = k.event.special[d] || {}),
                (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
                (s =
                  s[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
                (a = o = p.length);
              while (o--)
                (c = p[o]),
                  (!i && g !== c.origType) ||
                    (n && n.guid !== c.guid) ||
                    (s && !s.test(c.namespace)) ||
                    (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                    (p.splice(o, 1),
                    c.selector && p.delegateCount--,
                    f.remove && f.remove.call(e, c));
              a &&
                !p.length &&
                ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                  k.removeEvent(e, d, v.handle),
                delete u[d]);
            } else for (d in u) k.event.remove(e, d + t[l], n, r, !0);
          k.isEmptyObject(u) && Q.remove(e, "handle events");
        }
      },
      dispatch: function (e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s = k.event.fix(e),
          u = new Array(arguments.length),
          l = (Q.get(this, "events") || {})[s.type] || [],
          c = k.event.special[s.type] || {};
        for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
        if (
          ((s.delegateTarget = this),
          !c.preDispatch || !1 !== c.preDispatch.call(this, s))
        ) {
          (a = k.event.handlers.call(this, s, l)), (t = 0);
          while ((i = a[t++]) && !s.isPropagationStopped()) {
            (s.currentTarget = i.elem), (n = 0);
            while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped())
              (s.rnamespace &&
                !1 !== o.namespace &&
                !s.rnamespace.test(o.namespace)) ||
                ((s.handleObj = o),
                (s.data = o.data),
                void 0 !==
                  (r = (
                    (k.event.special[o.origType] || {}).handle || o.handler
                  ).apply(i.elem, u)) &&
                  !1 === (s.result = r) &&
                  (s.preventDefault(), s.stopPropagation()));
          }
          return c.postDispatch && c.postDispatch.call(this, s), s.result;
        }
      },
      handlers: function (e, t) {
        var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
        if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
          for (; l !== this; l = l.parentNode || this)
            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
              for (o = [], a = {}, n = 0; n < u; n++)
                void 0 === a[(i = (r = t[n]).selector + " ")] &&
                  (a[i] = r.needsContext
                    ? -1 < k(i, this).index(l)
                    : k.find(i, this, null, [l]).length),
                  a[i] && o.push(r);
              o.length && s.push({ elem: l, handlers: o });
            }
        return (
          (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
        );
      },
      addProp: function (t, e) {
        Object.defineProperty(k.Event.prototype, t, {
          enumerable: !0,
          configurable: !0,
          get: m(e)
            ? function () {
                if (this.originalEvent) return e(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[t];
              },
          set: function (e) {
            Object.defineProperty(this, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: e,
            });
          },
        });
      },
      fix: function (e) {
        return e[k.expando] ? e : new k.Event(e);
      },
      special: {
        load: { noBubble: !0 },
        click: {
          setup: function (e) {
            var t = this || e;
            return (
              pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke),
              !1
            );
          },
          trigger: function (e) {
            var t = this || e;
            return (
              pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0
            );
          },
          _default: function (e) {
            var t = e.target;
            return (
              (pe.test(t.type) &&
                t.click &&
                A(t, "input") &&
                Q.get(t, "click")) ||
              A(t, "a")
            );
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
          },
        },
      },
    }),
      (k.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }),
      (k.Event = function (e, t) {
        if (!(this instanceof k.Event)) return new k.Event(e, t);
        e && e.type
          ? ((this.originalEvent = e),
            (this.type = e.type),
            (this.isDefaultPrevented =
              e.defaultPrevented ||
              (void 0 === e.defaultPrevented && !1 === e.returnValue)
                ? ke
                : Se),
            (this.target =
              e.target && 3 === e.target.nodeType
                ? e.target.parentNode
                : e.target),
            (this.currentTarget = e.currentTarget),
            (this.relatedTarget = e.relatedTarget))
          : (this.type = e),
          t && k.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || Date.now()),
          (this[k.expando] = !0);
      }),
      (k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = ke),
            e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = ke),
            e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = ke),
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      k.each(
        {
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
          which: function (e) {
            var t = e.button;
            return null == e.which && Te.test(e.type)
              ? null != e.charCode
                ? e.charCode
                : e.keyCode
              : !e.which && void 0 !== t && Ce.test(e.type)
              ? 1 & t
                ? 1
                : 2 & t
                ? 3
                : 4 & t
                ? 2
                : 0
              : e.which;
          },
        },
        k.event.addProp
      ),
      k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        k.event.special[e] = {
          setup: function () {
            return De(this, e, Ne), !1;
          },
          trigger: function () {
            return De(this, e), !0;
          },
          delegateType: t,
        };
      }),
      k.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (e, i) {
          k.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function (e) {
              var t,
                n = e.relatedTarget,
                r = e.handleObj;
              return (
                (n && (n === this || k.contains(this, n))) ||
                  ((e.type = r.origType),
                  (t = r.handler.apply(this, arguments)),
                  (e.type = i)),
                t
              );
            },
          };
        }
      ),
      k.fn.extend({
        on: function (e, t, n, r) {
          return Ae(this, e, t, n, r);
        },
        one: function (e, t, n, r) {
          return Ae(this, e, t, n, r, 1);
        },
        off: function (e, t, n) {
          var r, i;
          if (e && e.preventDefault && e.handleObj)
            return (
              (r = e.handleObj),
              k(e.delegateTarget).off(
                r.namespace ? r.origType + "." + r.namespace : r.origType,
                r.selector,
                r.handler
              ),
              this
            );
          if ("object" == typeof e) {
            for (i in e) this.off(i, t, e[i]);
            return this;
          }
          return (
            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
            !1 === n && (n = Se),
            this.each(function () {
              k.event.remove(this, e, n, t);
            })
          );
        },
      });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      qe = /<script|<style|<link/i,
      Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
      He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Oe(e, t) {
      return (
        (A(e, "table") &&
          A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
          k(e).children("tbody")[0]) ||
        e
      );
    }
    function Pe(e) {
      return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function Re(e) {
      return (
        "true/" === (e.type || "").slice(0, 5)
          ? (e.type = e.type.slice(5))
          : e.removeAttribute("type"),
        e
      );
    }
    function Me(e, t) {
      var n, r, i, o, a, s, u, l;
      if (1 === t.nodeType) {
        if (
          Q.hasData(e) &&
          ((o = Q.access(e)), (a = Q.set(t, o)), (l = o.events))
        )
          for (i in (delete a.handle, (a.events = {}), l))
            for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
        J.hasData(e) && ((s = J.access(e)), (u = k.extend({}, s)), J.set(t, u));
      }
    }
    function Ie(n, r, i, o) {
      r = g.apply([], r);
      var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
      if (h || (1 < f && "string" == typeof d && !y.checkClone && Le.test(d)))
        return n.each(function (e) {
          var t = n.eq(e);
          h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o);
        });
      if (
        f &&
        ((t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild),
        1 === e.childNodes.length && (e = t),
        t || o)
      ) {
        for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++)
          (u = e),
            c !== p &&
              ((u = k.clone(u, !0, !0)), s && k.merge(a, ve(u, "script"))),
            i.call(n[c], u, c);
        if (s)
          for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++)
            (u = a[c]),
              he.test(u.type || "") &&
                !Q.access(u, "globalEval") &&
                k.contains(l, u) &&
                (u.src && "module" !== (u.type || "").toLowerCase()
                  ? k._evalUrl &&
                    !u.noModule &&
                    k._evalUrl(u.src, {
                      nonce: u.nonce || u.getAttribute("nonce"),
                    })
                  : b(u.textContent.replace(He, ""), u, l));
      }
      return n;
    }
    function We(e, t, n) {
      for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
        n || 1 !== r.nodeType || k.cleanData(ve(r)),
          r.parentNode &&
            (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
      return e;
    }
    k.extend({
      htmlPrefilter: function (e) {
        return e.replace(je, "<$1></$2>");
      },
      clone: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = oe(e);
        if (
          !(
            y.noCloneChecked ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            k.isXMLDoc(e)
          )
        )
          for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
            (s = o[r]),
              (u = a[r]),
              void 0,
              "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
                ? (u.checked = s.checked)
                : ("input" !== l && "textarea" !== l) ||
                  (u.defaultValue = s.defaultValue);
        if (t)
          if (n)
            for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
              Me(o[r], a[r]);
          else Me(e, c);
        return (
          0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        );
      },
      cleanData: function (e) {
        for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
          if (G(n)) {
            if ((t = n[Q.expando])) {
              if (t.events)
                for (r in t.events)
                  i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
              n[Q.expando] = void 0;
            }
            n[J.expando] && (n[J.expando] = void 0);
          }
      },
    }),
      k.fn.extend({
        detach: function (e) {
          return We(this, e, !0);
        },
        remove: function (e) {
          return We(this, e);
        },
        text: function (e) {
          return _(
            this,
            function (e) {
              return void 0 === e
                ? k.text(this)
                : this.empty().each(function () {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      (this.textContent = e);
                  });
            },
            null,
            e,
            arguments.length
          );
        },
        append: function () {
          return Ie(this, arguments, function (e) {
            (1 !== this.nodeType &&
              11 !== this.nodeType &&
              9 !== this.nodeType) ||
              Oe(this, e).appendChild(e);
          });
        },
        prepend: function () {
          return Ie(this, arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = Oe(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return Ie(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return Ie(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++)
            1 === e.nodeType && (k.cleanData(ve(e, !1)), (e.textContent = ""));
          return this;
        },
        clone: function (e, t) {
          return (
            (e = null != e && e),
            (t = null == t ? e : t),
            this.map(function () {
              return k.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return _(
            this,
            function (e) {
              var t = this[0] || {},
                n = 0,
                r = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if (
                "string" == typeof e &&
                !qe.test(e) &&
                !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
              ) {
                e = k.htmlPrefilter(e);
                try {
                  for (; n < r; n++)
                    1 === (t = this[n] || {}).nodeType &&
                      (k.cleanData(ve(t, !1)), (t.innerHTML = e));
                  t = 0;
                } catch (e) {}
              }
              t && this.empty().append(e);
            },
            null,
            e,
            arguments.length
          );
        },
        replaceWith: function () {
          var n = [];
          return Ie(
            this,
            arguments,
            function (e) {
              var t = this.parentNode;
              k.inArray(this, n) < 0 &&
                (k.cleanData(ve(this)), t && t.replaceChild(e, this));
            },
            n
          );
        },
      }),
      k.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (e, a) {
          k.fn[e] = function (e) {
            for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++)
              (t = o === i ? this : this.clone(!0)),
                k(r[o])[a](t),
                u.apply(n, t.get());
            return this.pushStack(n);
          };
        }
      );
    var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
      Fe = function (e) {
        var t = e.ownerDocument.defaultView;
        return (t && t.opener) || (t = C), t.getComputedStyle(e);
      },
      Be = new RegExp(re.join("|"), "i");
    function _e(e, t, n) {
      var r,
        i,
        o,
        a,
        s = e.style;
      return (
        (n = n || Fe(e)) &&
          ("" !== (a = n.getPropertyValue(t) || n[t]) ||
            oe(e) ||
            (a = k.style(e, t)),
          !y.pixelBoxStyles() &&
            $e.test(a) &&
            Be.test(t) &&
            ((r = s.width),
            (i = s.minWidth),
            (o = s.maxWidth),
            (s.minWidth = s.maxWidth = s.width = a),
            (a = n.width),
            (s.width = r),
            (s.minWidth = i),
            (s.maxWidth = o))),
        void 0 !== a ? a + "" : a
      );
    }
    function ze(e, t) {
      return {
        get: function () {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get;
        },
      };
    }
    !(function () {
      function e() {
        if (u) {
          (s.style.cssText =
            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (u.style.cssText =
              "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            ie.appendChild(s).appendChild(u);
          var e = C.getComputedStyle(u);
          (n = "1%" !== e.top),
            (a = 12 === t(e.marginLeft)),
            (u.style.right = "60%"),
            (o = 36 === t(e.right)),
            (r = 36 === t(e.width)),
            (u.style.position = "absolute"),
            (i = 12 === t(u.offsetWidth / 3)),
            ie.removeChild(s),
            (u = null);
        }
      }
      function t(e) {
        return Math.round(parseFloat(e));
      }
      var n,
        r,
        i,
        o,
        a,
        s = E.createElement("div"),
        u = E.createElement("div");
      u.style &&
        ((u.style.backgroundClip = "content-box"),
        (u.cloneNode(!0).style.backgroundClip = ""),
        (y.clearCloneStyle = "content-box" === u.style.backgroundClip),
        k.extend(y, {
          boxSizingReliable: function () {
            return e(), r;
          },
          pixelBoxStyles: function () {
            return e(), o;
          },
          pixelPosition: function () {
            return e(), n;
          },
          reliableMarginLeft: function () {
            return e(), a;
          },
          scrollboxSize: function () {
            return e(), i;
          },
        }));
    })();
    var Ue = ["Webkit", "Moz", "ms"],
      Xe = E.createElement("div").style,
      Ve = {};
    function Ge(e) {
      var t = k.cssProps[e] || Ve[e];
      return (
        t ||
        (e in Xe
          ? e
          : (Ve[e] =
              (function (e) {
                var t = e[0].toUpperCase() + e.slice(1),
                  n = Ue.length;
                while (n--) if ((e = Ue[n] + t) in Xe) return e;
              })(e) || e))
      );
    }
    var Ye = /^(none|table(?!-c[ea]).+)/,
      Qe = /^--/,
      Je = { position: "absolute", visibility: "hidden", display: "block" },
      Ke = { letterSpacing: "0", fontWeight: "400" };
    function Ze(e, t, n) {
      var r = ne.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function et(e, t, n, r, i, o) {
      var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
      if (n === (r ? "border" : "content")) return 0;
      for (; a < 4; a += 2)
        "margin" === n && (u += k.css(e, n + re[a], !0, i)),
          r
            ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)),
              "margin" !== n &&
                (u -= k.css(e, "border" + re[a] + "Width", !0, i)))
            : ((u += k.css(e, "padding" + re[a], !0, i)),
              "padding" !== n
                ? (u += k.css(e, "border" + re[a] + "Width", !0, i))
                : (s += k.css(e, "border" + re[a] + "Width", !0, i)));
      return (
        !r &&
          0 <= o &&
          (u +=
            Math.max(
              0,
              Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
              )
            ) || 0),
        u
      );
    }
    function tt(e, t, n) {
      var r = Fe(e),
        i =
          (!y.boxSizingReliable() || n) &&
          "border-box" === k.css(e, "boxSizing", !1, r),
        o = i,
        a = _e(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);
      if ($e.test(a)) {
        if (!n) return a;
        a = "auto";
      }
      return (
        ((!y.boxSizingReliable() && i) ||
          "auto" === a ||
          (!parseFloat(a) && "inline" === k.css(e, "display", !1, r))) &&
          e.getClientRects().length &&
          ((i = "border-box" === k.css(e, "boxSizing", !1, r)),
          (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) +
          et(e, t, n || (i ? "border" : "content"), o, r, a) +
          "px"
      );
    }
    function nt(e, t, n, r, i) {
      return new nt.prototype.init(e, t, n, r, i);
    }
    k.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = _e(e, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
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
        zoom: !0,
      },
      cssProps: {},
      style: function (e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var i,
            o,
            a,
            s = V(t),
            u = Qe.test(t),
            l = e.style;
          if (
            (u || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]), void 0 === n)
          )
            return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
          "string" === (o = typeof n) &&
            (i = ne.exec(n)) &&
            i[1] &&
            ((n = le(e, t, i)), (o = "number")),
            null != n &&
              n == n &&
              ("number" !== o ||
                u ||
                (n += (i && i[3]) || (k.cssNumber[s] ? "" : "px")),
              y.clearCloneStyle ||
                "" !== n ||
                0 !== t.indexOf("background") ||
                (l[t] = "inherit"),
              (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                (u ? l.setProperty(t, n) : (l[t] = n)));
        }
      },
      css: function (e, t, n, r) {
        var i,
          o,
          a,
          s = V(t);
        return (
          Qe.test(t) || (t = Ge(s)),
          (a = k.cssHooks[t] || k.cssHooks[s]) &&
            "get" in a &&
            (i = a.get(e, !0, n)),
          void 0 === i && (i = _e(e, t, r)),
          "normal" === i && t in Ke && (i = Ke[t]),
          "" === n || n
            ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
            : i
        );
      },
    }),
      k.each(["height", "width"], function (e, u) {
        k.cssHooks[u] = {
          get: function (e, t, n) {
            if (t)
              return !Ye.test(k.css(e, "display")) ||
                (e.getClientRects().length && e.getBoundingClientRect().width)
                ? tt(e, u, n)
                : ue(e, Je, function () {
                    return tt(e, u, n);
                  });
          },
          set: function (e, t, n) {
            var r,
              i = Fe(e),
              o = !y.scrollboxSize() && "absolute" === i.position,
              a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
              s = n ? et(e, u, n, a, i) : 0;
            return (
              a &&
                o &&
                (s -= Math.ceil(
                  e["offset" + u[0].toUpperCase() + u.slice(1)] -
                    parseFloat(i[u]) -
                    et(e, u, "border", !1, i) -
                    0.5
                )),
              s &&
                (r = ne.exec(t)) &&
                "px" !== (r[3] || "px") &&
                ((e.style[u] = t), (t = k.css(e, u))),
              Ze(0, t, s)
            );
          },
        };
      }),
      (k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) {
        if (t)
          return (
            (parseFloat(_e(e, "marginLeft")) ||
              e.getBoundingClientRect().left -
                ue(e, { marginLeft: 0 }, function () {
                  return e.getBoundingClientRect().left;
                })) + "px"
          );
      })),
      k.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
        (k.cssHooks[i + o] = {
          expand: function (e) {
            for (
              var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
              t < 4;
              t++
            )
              n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
            return n;
          },
        }),
          "margin" !== i && (k.cssHooks[i + o].set = Ze);
      }),
      k.fn.extend({
        css: function (e, t) {
          return _(
            this,
            function (e, t, n) {
              var r,
                i,
                o = {},
                a = 0;
              if (Array.isArray(t)) {
                for (r = Fe(e), i = t.length; a < i; a++)
                  o[t[a]] = k.css(e, t[a], !1, r);
                return o;
              }
              return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
            },
            e,
            t,
            1 < arguments.length
          );
        },
      }),
      (((k.Tween = nt).prototype = {
        constructor: nt,
        init: function (e, t, n, r, i, o) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = i || k.easing._default),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = r),
            (this.unit = o || (k.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var e = nt.propHooks[this.prop];
          return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            n = nt.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = t = k.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
              : (this.pos = t = e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : nt.propHooks._default.set(this),
            this
          );
        },
      }).init.prototype = nt.prototype),
      ((nt.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return 1 !== e.elem.nodeType ||
              (null != e.elem[e.prop] && null == e.elem.style[e.prop])
              ? e.elem[e.prop]
              : (t = k.css(e.elem, e.prop, "")) && "auto" !== t
              ? t
              : 0;
          },
          set: function (e) {
            k.fx.step[e.prop]
              ? k.fx.step[e.prop](e)
              : 1 !== e.elem.nodeType ||
                (!k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)])
              ? (e.elem[e.prop] = e.now)
              : k.style(e.elem, e.prop, e.now + e.unit);
          },
        },
      }).scrollTop = nt.propHooks.scrollLeft = {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
      (k.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (k.fx = nt.prototype.init),
      (k.fx.step = {});
    var rt,
      it,
      ot,
      at,
      st = /^(?:toggle|show|hide)$/,
      ut = /queueHooks$/;
    function lt() {
      it &&
        (!1 === E.hidden && C.requestAnimationFrame
          ? C.requestAnimationFrame(lt)
          : C.setTimeout(lt, k.fx.interval),
        k.fx.tick());
    }
    function ct() {
      return (
        C.setTimeout(function () {
          rt = void 0;
        }),
        (rt = Date.now())
      );
    }
    function ft(e, t) {
      var n,
        r = 0,
        i = { height: e };
      for (t = t ? 1 : 0; r < 4; r += 2 - t)
        i["margin" + (n = re[r])] = i["padding" + n] = e;
      return t && (i.opacity = i.width = e), i;
    }
    function pt(e, t, n) {
      for (
        var r,
          i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]),
          o = 0,
          a = i.length;
        o < a;
        o++
      )
        if ((r = i[o].call(n, t, e))) return r;
    }
    function dt(o, e, t) {
      var n,
        a,
        r = 0,
        i = dt.prefilters.length,
        s = k.Deferred().always(function () {
          delete u.elem;
        }),
        u = function () {
          if (a) return !1;
          for (
            var e = rt || ct(),
              t = Math.max(0, l.startTime + l.duration - e),
              n = 1 - (t / l.duration || 0),
              r = 0,
              i = l.tweens.length;
            r < i;
            r++
          )
            l.tweens[r].run(n);
          return (
            s.notifyWith(o, [l, n, t]),
            n < 1 && i
              ? t
              : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
          );
        },
        l = s.promise({
          elem: o,
          props: k.extend({}, e),
          opts: k.extend(!0, { specialEasing: {}, easing: k.easing._default }, t),
          originalProperties: e,
          originalOptions: t,
          startTime: rt || ct(),
          duration: t.duration,
          tweens: [],
          createTween: function (e, t) {
            var n = k.Tween(
              o,
              l.opts,
              e,
              t,
              l.opts.specialEasing[e] || l.opts.easing
            );
            return l.tweens.push(n), n;
          },
          stop: function (e) {
            var t = 0,
              n = e ? l.tweens.length : 0;
            if (a) return this;
            for (a = !0; t < n; t++) l.tweens[t].run(1);
            return (
              e
                ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
                : s.rejectWith(o, [l, e]),
              this
            );
          },
        }),
        c = l.props;
      for (
        !(function (e, t) {
          var n, r, i, o, a;
          for (n in e)
            if (
              ((i = t[(r = V(n))]),
              (o = e[n]),
              Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
              n !== r && ((e[r] = o), delete e[n]),
              (a = k.cssHooks[r]) && ("expand" in a))
            )
              for (n in ((o = a.expand(o)), delete e[r], o))
                (n in e) || ((e[n] = o[n]), (t[n] = i));
            else t[r] = i;
        })(c, l.opts.specialEasing);
        r < i;
        r++
      )
        if ((n = dt.prefilters[r].call(l, o, c, l.opts)))
          return (
            m(n.stop) &&
              (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
            n
          );
      return (
        k.map(c, pt, l),
        m(l.opts.start) && l.opts.start.call(o, l),
        l
          .progress(l.opts.progress)
          .done(l.opts.done, l.opts.complete)
          .fail(l.opts.fail)
          .always(l.opts.always),
        k.fx.timer(k.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
        l
      );
    }
    (k.Animation = k.extend(dt, {
      tweeners: {
        "*": [
          function (e, t) {
            var n = this.createTween(e, t);
            return le(n.elem, e, ne.exec(t), n), n;
          },
        ],
      },
      tweener: function (e, t) {
        m(e) ? ((t = e), (e = ["*"])) : (e = e.match(R));
        for (var n, r = 0, i = e.length; r < i; r++)
          (n = e[r]),
            (dt.tweeners[n] = dt.tweeners[n] || []),
            dt.tweeners[n].unshift(t);
      },
      prefilters: [
        function (e, t, n) {
          var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && se(e),
            v = Q.get(e, "fxshow");
          for (r in (n.queue ||
            (null == (a = k._queueHooks(e, "fx")).unqueued &&
              ((a.unqueued = 0),
              (s = a.empty.fire),
              (a.empty.fire = function () {
                a.unqueued || s();
              })),
            a.unqueued++,
            p.always(function () {
              p.always(function () {
                a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
              });
            })),
          t))
            if (((i = t[r]), st.test(i))) {
              if (
                (delete t[r],
                (o = o || "toggle" === i),
                i === (g ? "hide" : "show"))
              ) {
                if ("show" !== i || !v || void 0 === v[r]) continue;
                g = !0;
              }
              d[r] = (v && v[r]) || k.style(e, r);
            }
          if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
            for (r in (f &&
              1 === e.nodeType &&
              ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
              null == (l = v && v.display) && (l = Q.get(e, "display")),
              "none" === (c = k.css(e, "display")) &&
                (l
                  ? (c = l)
                  : (fe([e], !0),
                    (l = e.style.display || l),
                    (c = k.css(e, "display")),
                    fe([e]))),
              ("inline" === c || ("inline-block" === c && null != l)) &&
                "none" === k.css(e, "float") &&
                (u ||
                  (p.done(function () {
                    h.display = l;
                  }),
                  null == l && ((c = h.display), (l = "none" === c ? "" : c))),
                (h.display = "inline-block"))),
            n.overflow &&
              ((h.overflow = "hidden"),
              p.always(function () {
                (h.overflow = n.overflow[0]),
                  (h.overflowX = n.overflow[1]),
                  (h.overflowY = n.overflow[2]);
              })),
            (u = !1),
            d))
              u ||
                (v
                  ? "hidden" in v && (g = v.hidden)
                  : (v = Q.access(e, "fxshow", { display: l })),
                o && (v.hidden = !g),
                g && fe([e], !0),
                p.done(function () {
                  for (r in (g || fe([e]), Q.remove(e, "fxshow"), d))
                    k.style(e, r, d[r]);
                })),
                (u = pt(g ? v[r] : 0, r, p)),
                r in v ||
                  ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
        },
      ],
      prefilter: function (e, t) {
        t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
      },
    })),
      (k.speed = function (e, t, n) {
        var r =
          e && "object" == typeof e
            ? k.extend({}, e)
            : {
                complete: n || (!n && t) || (m(e) && e),
                duration: e,
                easing: (n && t) || (t && !m(t) && t),
              };
        return (
          k.fx.off
            ? (r.duration = 0)
            : "number" != typeof r.duration &&
              (r.duration in k.fx.speeds
                ? (r.duration = k.fx.speeds[r.duration])
                : (r.duration = k.fx.speeds._default)),
          (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
          (r.old = r.complete),
          (r.complete = function () {
            m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
          }),
          r
        );
      }),
      k.fn.extend({
        fadeTo: function (e, t, n, r) {
          return this.filter(se)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, r);
        },
        animate: function (t, e, n, r) {
          var i = k.isEmptyObject(t),
            o = k.speed(e, n, r),
            a = function () {
              var e = dt(this, k.extend({}, t), o);
              (i || Q.get(this, "finish")) && e.stop(!0);
            };
          return (
            (a.finish = a),
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
          );
        },
        stop: function (i, e, o) {
          var a = function (e) {
            var t = e.stop;
            delete e.stop, t(o);
          };
          return (
            "string" != typeof i && ((o = e), (e = i), (i = void 0)),
            e && !1 !== i && this.queue(i || "fx", []),
            this.each(function () {
              var e = !0,
                t = null != i && i + "queueHooks",
                n = k.timers,
                r = Q.get(this);
              if (t) r[t] && r[t].stop && a(r[t]);
              else for (t in r) r[t] && r[t].stop && ut.test(t) && a(r[t]);
              for (t = n.length; t--; )
                n[t].elem !== this ||
                  (null != i && n[t].queue !== i) ||
                  (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
              (!e && o) || k.dequeue(this, i);
            })
          );
        },
        finish: function (a) {
          return (
            !1 !== a && (a = a || "fx"),
            this.each(function () {
              var e,
                t = Q.get(this),
                n = t[a + "queue"],
                r = t[a + "queueHooks"],
                i = k.timers,
                o = n ? n.length : 0;
              for (
                t.finish = !0,
                  k.queue(this, a, []),
                  r && r.stop && r.stop.call(this, !0),
                  e = i.length;
                e--;
  
              )
                i[e].elem === this &&
                  i[e].queue === a &&
                  (i[e].anim.stop(!0), i.splice(e, 1));
              for (e = 0; e < o; e++)
                n[e] && n[e].finish && n[e].finish.call(this);
              delete t.finish;
            })
          );
        },
      }),
      k.each(["toggle", "show", "hide"], function (e, r) {
        var i = k.fn[r];
        k.fn[r] = function (e, t, n) {
          return null == e || "boolean" == typeof e
            ? i.apply(this, arguments)
            : this.animate(ft(r, !0), e, t, n);
        };
      }),
      k.each(
        {
          slideDown: ft("show"),
          slideUp: ft("hide"),
          slideToggle: ft("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (e, r) {
          k.fn[e] = function (e, t, n) {
            return this.animate(r, e, t, n);
          };
        }
      ),
      (k.timers = []),
      (k.fx.tick = function () {
        var e,
          t = 0,
          n = k.timers;
        for (rt = Date.now(); t < n.length; t++)
          (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || k.fx.stop(), (rt = void 0);
      }),
      (k.fx.timer = function (e) {
        k.timers.push(e), k.fx.start();
      }),
      (k.fx.interval = 13),
      (k.fx.start = function () {
        it || ((it = !0), lt());
      }),
      (k.fx.stop = function () {
        it = null;
      }),
      (k.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (k.fn.delay = function (r, e) {
        return (
          (r = (k.fx && k.fx.speeds[r]) || r),
          (e = e || "fx"),
          this.queue(e, function (e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function () {
              C.clearTimeout(n);
            };
          })
        );
      }),
      (ot = E.createElement("input")),
      (at = E.createElement("select").appendChild(E.createElement("option"))),
      (ot.type = "checkbox"),
      (y.checkOn = "" !== ot.value),
      (y.optSelected = at.selected),
      ((ot = E.createElement("input")).value = "t"),
      (ot.type = "radio"),
      (y.radioValue = "t" === ot.value);
    var ht,
      gt = k.expr.attrHandle;
    k.fn.extend({
      attr: function (e, t) {
        return _(this, k.attr, e, t, 1 < arguments.length);
      },
      removeAttr: function (e) {
        return this.each(function () {
          k.removeAttr(this, e);
        });
      },
    }),
      k.extend({
        attr: function (e, t, n) {
          var r,
            i,
            o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return "undefined" == typeof e.getAttribute
              ? k.prop(e, t, n)
              : ((1 === o && k.isXMLDoc(e)) ||
                  (i =
                    k.attrHooks[t.toLowerCase()] ||
                    (k.expr.match.bool.test(t) ? ht : void 0)),
                void 0 !== n
                  ? null === n
                    ? void k.removeAttr(e, t)
                    : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e.setAttribute(t, n + ""), n)
                  : i && "get" in i && null !== (r = i.get(e, t))
                  ? r
                  : null == (r = k.find.attr(e, t))
                  ? void 0
                  : r);
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!y.radioValue && "radio" === t && A(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            },
          },
        },
        removeAttr: function (e, t) {
          var n,
            r = 0,
            i = t && t.match(R);
          if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
        },
      }),
      (ht = {
        set: function (e, t, n) {
          return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
        },
      }),
      k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = gt[t] || k.find.attr;
        gt[t] = function (e, t, n) {
          var r,
            i,
            o = t.toLowerCase();
          return (
            n ||
              ((i = gt[o]),
              (gt[o] = r),
              (r = null != a(e, t, n) ? o : null),
              (gt[o] = i)),
            r
          );
        };
      });
    var vt = /^(?:input|select|textarea|button)$/i,
      yt = /^(?:a|area)$/i;
    function mt(e) {
      return (e.match(R) || []).join(" ");
    }
    function xt(e) {
      return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function bt(e) {
      return Array.isArray(e) ? e : ("string" == typeof e && e.match(R)) || [];
    }
    k.fn.extend({
      prop: function (e, t) {
        return _(this, k.prop, e, t, 1 < arguments.length);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[k.propFix[e] || e];
        });
      },
    }),
      k.extend({
        prop: function (e, t, n) {
          var r,
            i,
            o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return (
              (1 === o && k.isXMLDoc(e)) ||
                ((t = k.propFix[t] || t), (i = k.propHooks[t])),
              void 0 !== n
                ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e[t] = n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : e[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = k.find.attr(e, "tabindex");
              return t
                ? parseInt(t, 10)
                : vt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      }),
      y.optSelected ||
        (k.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
          set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          },
        }),
      k.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          k.propFix[this.toLowerCase()] = this;
        }
      ),
      k.fn.extend({
        addClass: function (t) {
          var e,
            n,
            r,
            i,
            o,
            a,
            s,
            u = 0;
          if (m(t))
            return this.each(function (e) {
              k(this).addClass(t.call(this, e, xt(this)));
            });
          if ((e = bt(t)).length)
            while ((n = this[u++]))
              if (((i = xt(n)), (r = 1 === n.nodeType && " " + mt(i) + " "))) {
                a = 0;
                while ((o = e[a++]))
                  r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (s = mt(r)) && n.setAttribute("class", s);
              }
          return this;
        },
        removeClass: function (t) {
          var e,
            n,
            r,
            i,
            o,
            a,
            s,
            u = 0;
          if (m(t))
            return this.each(function (e) {
              k(this).removeClass(t.call(this, e, xt(this)));
            });
          if (!arguments.length) return this.attr("class", "");
          if ((e = bt(t)).length)
            while ((n = this[u++]))
              if (((i = xt(n)), (r = 1 === n.nodeType && " " + mt(i) + " "))) {
                a = 0;
                while ((o = e[a++]))
                  while (-1 < r.indexOf(" " + o + " "))
                    r = r.replace(" " + o + " ", " ");
                i !== (s = mt(r)) && n.setAttribute("class", s);
              }
          return this;
        },
        toggleClass: function (i, t) {
          var o = typeof i,
            a = "string" === o || Array.isArray(i);
          return "boolean" == typeof t && a
            ? t
              ? this.addClass(i)
              : this.removeClass(i)
            : m(i)
            ? this.each(function (e) {
                k(this).toggleClass(i.call(this, e, xt(this), t), t);
              })
            : this.each(function () {
                var e, t, n, r;
                if (a) {
                  (t = 0), (n = k(this)), (r = bt(i));
                  while ((e = r[t++]))
                    n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                } else (void 0 !== i && "boolean" !== o) || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""));
              });
        },
        hasClass: function (e) {
          var t,
            n,
            r = 0;
          t = " " + e + " ";
          while ((n = this[r++]))
            if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t))
              return !0;
          return !1;
        },
      });
    var wt = /\r/g;
    k.fn.extend({
      val: function (n) {
        var r,
          e,
          i,
          t = this[0];
        return arguments.length
          ? ((i = m(n)),
            this.each(function (e) {
              var t;
              1 === this.nodeType &&
                (null == (t = i ? n.call(this, e, k(this).val()) : n)
                  ? (t = "")
                  : "number" == typeof t
                  ? (t += "")
                  : Array.isArray(t) &&
                    (t = k.map(t, function (e) {
                      return null == e ? "" : e + "";
                    })),
                ((r =
                  k.valHooks[this.type] ||
                  k.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in r &&
                  void 0 !== r.set(this, t, "value")) ||
                  (this.value = t));
            }))
          : t
          ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) &&
            "get" in r &&
            void 0 !== (e = r.get(t, "value"))
            ? e
            : "string" == typeof (e = t.value)
            ? e.replace(wt, "")
            : null == e
            ? ""
            : e
          : void 0;
      },
    }),
      k.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = k.find.attr(e, "value");
              return null != t ? t : mt(k.text(e));
            },
          },
          select: {
            get: function (e) {
              var t,
                n,
                r,
                i = e.options,
                o = e.selectedIndex,
                a = "select-one" === e.type,
                s = a ? null : [],
                u = a ? o + 1 : i.length;
              for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                if (
                  ((n = i[r]).selected || r === o) &&
                  !n.disabled &&
                  (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
                ) {
                  if (((t = k(n).val()), a)) return t;
                  s.push(t);
                }
              return s;
            },
            set: function (e, t) {
              var n,
                r,
                i = e.options,
                o = k.makeArray(t),
                a = i.length;
              while (a--)
                ((r = i[a]).selected =
                  -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
              return n || (e.selectedIndex = -1), o;
            },
          },
        },
      }),
      k.each(["radio", "checkbox"], function () {
        (k.valHooks[this] = {
          set: function (e, t) {
            if (Array.isArray(t))
              return (e.checked = -1 < k.inArray(k(e).val(), t));
          },
        }),
          y.checkOn ||
            (k.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
      }),
      (y.focusin = "onfocusin" in C);
    var Tt = /^(?:focusinfocus|focusoutblur)$/,
      Ct = function (e) {
        e.stopPropagation();
      };
    k.extend(k.event, {
      trigger: function (e, t, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p = [n || E],
          d = v.call(e, "type") ? e.type : e,
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];
        if (
          ((o = f = a = n = n || E),
          3 !== n.nodeType &&
            8 !== n.nodeType &&
            !Tt.test(d + k.event.triggered) &&
            (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
            (u = d.indexOf(":") < 0 && "on" + d),
            ((e = e[k.expando]
              ? e
              : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
            (e.namespace = h.join(".")),
            (e.rnamespace = e.namespace
              ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (e.result = void 0),
            e.target || (e.target = n),
            (t = null == t ? [e] : k.makeArray(t, [e])),
            (c = k.event.special[d] || {}),
            r || !c.trigger || !1 !== c.trigger.apply(n, t)))
        ) {
          if (!r && !c.noBubble && !x(n)) {
            for (
              s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode);
              o;
              o = o.parentNode
            )
              p.push(o), (a = o);
            a === (n.ownerDocument || E) &&
              p.push(a.defaultView || a.parentWindow || C);
          }
          i = 0;
          while ((o = p[i++]) && !e.isPropagationStopped())
            (f = o),
              (e.type = 1 < i ? s : c.bindType || d),
              (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) &&
                l.apply(o, t),
              (l = u && o[u]) &&
                l.apply &&
                G(o) &&
                ((e.result = l.apply(o, t)),
                !1 === e.result && e.preventDefault());
          return (
            (e.type = d),
            r ||
              e.isDefaultPrevented() ||
              (c._default && !1 !== c._default.apply(p.pop(), t)) ||
              !G(n) ||
              (u &&
                m(n[d]) &&
                !x(n) &&
                ((a = n[u]) && (n[u] = null),
                (k.event.triggered = d),
                e.isPropagationStopped() && f.addEventListener(d, Ct),
                n[d](),
                e.isPropagationStopped() && f.removeEventListener(d, Ct),
                (k.event.triggered = void 0),
                a && (n[u] = a))),
            e.result
          );
        }
      },
      simulate: function (e, t, n) {
        var r = k.extend(new k.Event(), n, { type: e, isSimulated: !0 });
        k.event.trigger(r, null, t);
      },
    }),
      k.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            k.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          if (n) return k.event.trigger(e, t, n, !0);
        },
      }),
      y.focusin ||
        k.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
          var i = function (e) {
            k.event.simulate(r, e.target, k.event.fix(e));
          };
          k.event.special[r] = {
            setup: function () {
              var e = this.ownerDocument || this,
                t = Q.access(e, r);
              t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1);
            },
            teardown: function () {
              var e = this.ownerDocument || this,
                t = Q.access(e, r) - 1;
              t
                ? Q.access(e, r, t)
                : (e.removeEventListener(n, i, !0), Q.remove(e, r));
            },
          };
        });
    var Et = C.location,
      kt = Date.now(),
      St = /\?/;
    k.parseXML = function (e) {
      var t;
      if (!e || "string" != typeof e) return null;
      try {
        t = new C.DOMParser().parseFromString(e, "text/xml");
      } catch (e) {
        t = void 0;
      }
      return (
        (t && !t.getElementsByTagName("parsererror").length) ||
          k.error("Invalid XML: " + e),
        t
      );
    };
    var Nt = /\[\]$/,
      At = /\r?\n/g,
      Dt = /^(?:submit|button|image|reset|file)$/i,
      jt = /^(?:input|select|textarea|keygen)/i;
    function qt(n, e, r, i) {
      var t;
      if (Array.isArray(e))
        k.each(e, function (e, t) {
          r || Nt.test(n)
            ? i(n, t)
            : qt(
                n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
                t,
                r,
                i
              );
        });
      else if (r || "object" !== w(e)) i(n, e);
      else for (t in e) qt(n + "[" + t + "]", e[t], r, i);
    }
    (k.param = function (e, t) {
      var n,
        r = [],
        i = function (e, t) {
          var n = m(t) ? t() : t;
          r[r.length] =
            encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };
      if (null == e) return "";
      if (Array.isArray(e) || (e.jquery && !k.isPlainObject(e)))
        k.each(e, function () {
          i(this.name, this.value);
        });
      else for (n in e) qt(n, e[n], t, i);
      return r.join("&");
    }),
      k.fn.extend({
        serialize: function () {
          return k.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = k.prop(this, "elements");
            return e ? k.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !k(this).is(":disabled") &&
                jt.test(this.nodeName) &&
                !Dt.test(e) &&
                (this.checked || !pe.test(e))
              );
            })
            .map(function (e, t) {
              var n = k(this).val();
              return null == n
                ? null
                : Array.isArray(n)
                ? k.map(n, function (e) {
                    return { name: t.name, value: e.replace(At, "\r\n") };
                  })
                : { name: t.name, value: n.replace(At, "\r\n") };
            })
            .get();
        },
      });
    var Lt = /%20/g,
      Ht = /#.*$/,
      Ot = /([?&])_=[^&]*/,
      Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Rt = /^(?:GET|HEAD)$/,
      Mt = /^\/\//,
      It = {},
      Wt = {},
      $t = "*/".concat("*"),
      Ft = E.createElement("a");
    function Bt(o) {
      return function (e, t) {
        "string" != typeof e && ((t = e), (e = "*"));
        var n,
          r = 0,
          i = e.toLowerCase().match(R) || [];
        if (m(t))
          while ((n = i[r++]))
            "+" === n[0]
              ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
              : (o[n] = o[n] || []).push(t);
      };
    }
    function _t(t, i, o, a) {
      var s = {},
        u = t === Wt;
      function l(e) {
        var r;
        return (
          (s[e] = !0),
          k.each(t[e] || [], function (e, t) {
            var n = t(i, o, a);
            return "string" != typeof n || u || s[n]
              ? u
                ? !(r = n)
                : void 0
              : (i.dataTypes.unshift(n), l(n), !1);
          }),
          r
        );
      }
      return l(i.dataTypes[0]) || (!s["*"] && l("*"));
    }
    function zt(e, t) {
      var n,
        r,
        i = k.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      return r && k.extend(!0, e, r), e;
    }
    (Ft.href = Et.href),
      k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: Et.href,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Et.protocol
          ),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": $t,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": k.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
          return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e);
        },
        ajaxPrefilter: Bt(It),
        ajaxTransport: Bt(Wt),
        ajax: function (e, t) {
          "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
          var c,
            f,
            p,
            n,
            d,
            r,
            h,
            g,
            i,
            o,
            v = k.ajaxSetup({}, t),
            y = v.context || v,
            m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
            x = k.Deferred(),
            b = k.Callbacks("once memory"),
            w = v.statusCode || {},
            a = {},
            s = {},
            u = "canceled",
            T = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (h) {
                  if (!n) {
                    n = {};
                    while ((t = Pt.exec(p)))
                      n[t[1].toLowerCase() + " "] = (
                        n[t[1].toLowerCase() + " "] || []
                      ).concat(t[2]);
                  }
                  t = n[e.toLowerCase() + " "];
                }
                return null == t ? null : t.join(", ");
              },
              getAllResponseHeaders: function () {
                return h ? p : null;
              },
              setRequestHeader: function (e, t) {
                return (
                  null == h &&
                    ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                    (a[e] = t)),
                  this
                );
              },
              overrideMimeType: function (e) {
                return null == h && (v.mimeType = e), this;
              },
              statusCode: function (e) {
                var t;
                if (e)
                  if (h) T.always(e[T.status]);
                  else for (t in e) w[t] = [w[t], e[t]];
                return this;
              },
              abort: function (e) {
                var t = e || u;
                return c && c.abort(t), l(0, t), this;
              },
            };
          if (
            (x.promise(T),
            (v.url = ((e || v.url || Et.href) + "").replace(
              Mt,
              Et.protocol + "//"
            )),
            (v.type = t.method || t.type || v.method || v.type),
            (v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""]),
            null == v.crossDomain)
          ) {
            r = E.createElement("a");
            try {
              (r.href = v.url),
                (r.href = r.href),
                (v.crossDomain =
                  Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host);
            } catch (e) {
              v.crossDomain = !0;
            }
          }
          if (
            (v.data &&
              v.processData &&
              "string" != typeof v.data &&
              (v.data = k.param(v.data, v.traditional)),
            _t(It, v, t, T),
            h)
          )
            return T;
          for (i in ((g = k.event && v.global) &&
            0 == k.active++ &&
            k.event.trigger("ajaxStart"),
          (v.type = v.type.toUpperCase()),
          (v.hasContent = !Rt.test(v.type)),
          (f = v.url.replace(Ht, "")),
          v.hasContent
            ? v.data &&
              v.processData &&
              0 ===
                (v.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              (v.data = v.data.replace(Lt, "+"))
            : ((o = v.url.slice(f.length)),
              v.data &&
                (v.processData || "string" == typeof v.data) &&
                ((f += (St.test(f) ? "&" : "?") + v.data), delete v.data),
              !1 === v.cache &&
                ((f = f.replace(Ot, "$1")),
                (o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o)),
              (v.url = f + o)),
          v.ifModified &&
            (k.lastModified[f] &&
              T.setRequestHeader("If-Modified-Since", k.lastModified[f]),
            k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])),
          ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
            T.setRequestHeader("Content-Type", v.contentType),
          T.setRequestHeader(
            "Accept",
            v.dataTypes[0] && v.accepts[v.dataTypes[0]]
              ? v.accepts[v.dataTypes[0]] +
                  ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "")
              : v.accepts["*"]
          ),
          v.headers))
            T.setRequestHeader(i, v.headers[i]);
          if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
            return T.abort();
          if (
            ((u = "abort"),
            b.add(v.complete),
            T.done(v.success),
            T.fail(v.error),
            (c = _t(Wt, v, t, T)))
          ) {
            if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
              return T;
            v.async &&
              0 < v.timeout &&
              (d = C.setTimeout(function () {
                T.abort("timeout");
              }, v.timeout));
            try {
              (h = !1), c.send(a, l);
            } catch (e) {
              if (h) throw e;
              l(-1, e);
            }
          } else l(-1, "No Transport");
          function l(e, t, n, r) {
            var i,
              o,
              a,
              s,
              u,
              l = t;
            h ||
              ((h = !0),
              d && C.clearTimeout(d),
              (c = void 0),
              (p = r || ""),
              (T.readyState = 0 < e ? 4 : 0),
              (i = (200 <= e && e < 300) || 304 === e),
              n &&
                (s = (function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s = e.contents,
                    u = e.dataTypes;
                  while ("*" === u[0])
                    u.shift(),
                      void 0 === r &&
                        (r = e.mimeType || t.getResponseHeader("Content-Type"));
                  if (r)
                    for (i in s)
                      if (s[i] && s[i].test(r)) {
                        u.unshift(i);
                        break;
                      }
                  if (u[0] in n) o = u[0];
                  else {
                    for (i in n) {
                      if (!u[0] || e.converters[i + " " + u[0]]) {
                        o = i;
                        break;
                      }
                      a || (a = i);
                    }
                    o = o || a;
                  }
                  if (o) return o !== u[0] && u.unshift(o), n[o];
                })(v, T, n)),
              (s = (function (e, t, n, r) {
                var i,
                  o,
                  a,
                  s,
                  u,
                  l = {},
                  c = e.dataTypes.slice();
                if (c[1])
                  for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                o = c.shift();
                while (o)
                  if (
                    (e.responseFields[o] && (n[e.responseFields[o]] = t),
                    !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                    (u = o),
                    (o = c.shift()))
                  )
                    if ("*" === o) o = u;
                    else if ("*" !== u && u !== o) {
                      if (!(a = l[u + " " + o] || l["* " + o]))
                        for (i in l)
                          if (
                            (s = i.split(" "))[1] === o &&
                            (a = l[u + " " + s[0]] || l["* " + s[0]])
                          ) {
                            !0 === a
                              ? (a = l[i])
                              : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                            break;
                          }
                      if (!0 !== a)
                        if (a && e["throws"]) t = a(t);
                        else
                          try {
                            t = a(t);
                          } catch (e) {
                            return {
                              state: "parsererror",
                              error: a
                                ? e
                                : "No conversion from " + u + " to " + o,
                            };
                          }
                    }
                return { state: "success", data: t };
              })(v, s, T, i)),
              i
                ? (v.ifModified &&
                    ((u = T.getResponseHeader("Last-Modified")) &&
                      (k.lastModified[f] = u),
                    (u = T.getResponseHeader("etag")) && (k.etag[f] = u)),
                  204 === e || "HEAD" === v.type
                    ? (l = "nocontent")
                    : 304 === e
                    ? (l = "notmodified")
                    : ((l = s.state), (o = s.data), (i = !(a = s.error))))
                : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
              (T.status = e),
              (T.statusText = (t || l) + ""),
              i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
              T.statusCode(w),
              (w = void 0),
              g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
              b.fireWith(y, [T, l]),
              g &&
                (m.trigger("ajaxComplete", [T, v]),
                --k.active || k.event.trigger("ajaxStop")));
          }
          return T;
        },
        getJSON: function (e, t, n) {
          return k.get(e, t, n, "json");
        },
        getScript: function (e, t) {
          return k.get(e, void 0, t, "script");
        },
      }),
      k.each(["get", "post"], function (e, i) {
        k[i] = function (e, t, n, r) {
          return (
            m(t) && ((r = r || n), (n = t), (t = void 0)),
            k.ajax(
              k.extend(
                { url: e, type: i, dataType: r, data: t, success: n },
                k.isPlainObject(e) && e
              )
            )
          );
        };
      }),
      (k._evalUrl = function (e, t) {
        return k.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: { "text script": function () {} },
          dataFilter: function (e) {
            k.globalEval(e, t);
          },
        });
      }),
      k.fn.extend({
        wrapAll: function (e) {
          var t;
          return (
            this[0] &&
              (m(e) && (e = e.call(this[0])),
              (t = k(e, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  var e = this;
                  while (e.firstElementChild) e = e.firstElementChild;
                  return e;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function (n) {
          return m(n)
            ? this.each(function (e) {
                k(this).wrapInner(n.call(this, e));
              })
            : this.each(function () {
                var e = k(this),
                  t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n);
              });
        },
        wrap: function (t) {
          var n = m(t);
          return this.each(function (e) {
            k(this).wrapAll(n ? t.call(this, e) : t);
          });
        },
        unwrap: function (e) {
          return (
            this.parent(e)
              .not("body")
              .each(function () {
                k(this).replaceWith(this.childNodes);
              }),
            this
          );
        },
      }),
      (k.expr.pseudos.hidden = function (e) {
        return !k.expr.pseudos.visible(e);
      }),
      (k.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }),
      (k.ajaxSettings.xhr = function () {
        try {
          return new C.XMLHttpRequest();
        } catch (e) {}
      });
    var Ut = { 0: 200, 1223: 204 },
      Xt = k.ajaxSettings.xhr();
    (y.cors = !!Xt && "withCredentials" in Xt),
      (y.ajax = Xt = !!Xt),
      k.ajaxTransport(function (i) {
        var o, a;
        if (y.cors || (Xt && !i.crossDomain))
          return {
            send: function (e, t) {
              var n,
                r = i.xhr();
              if (
                (r.open(i.type, i.url, i.async, i.username, i.password),
                i.xhrFields)
              )
                for (n in i.xhrFields) r[n] = i.xhrFields[n];
              for (n in (i.mimeType &&
                r.overrideMimeType &&
                r.overrideMimeType(i.mimeType),
              i.crossDomain ||
                e["X-Requested-With"] ||
                (e["X-Requested-With"] = "XMLHttpRequest"),
              e))
                r.setRequestHeader(n, e[n]);
              (o = function (e) {
                return function () {
                  o &&
                    ((o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null),
                    "abort" === e
                      ? r.abort()
                      : "error" === e
                      ? "number" != typeof r.status
                        ? t(0, "error")
                        : t(r.status, r.statusText)
                      : t(
                          Ut[r.status] || r.status,
                          r.statusText,
                          "text" !== (r.responseType || "text") ||
                            "string" != typeof r.responseText
                            ? { binary: r.response }
                            : { text: r.responseText },
                          r.getAllResponseHeaders()
                        ));
                };
              }),
                (r.onload = o()),
                (a = r.onerror = r.ontimeout = o("error")),
                void 0 !== r.onabort
                  ? (r.onabort = a)
                  : (r.onreadystatechange = function () {
                      4 === r.readyState &&
                        C.setTimeout(function () {
                          o && a();
                        });
                    }),
                (o = o("abort"));
              try {
                r.send((i.hasContent && i.data) || null);
              } catch (e) {
                if (o) throw e;
              }
            },
            abort: function () {
              o && o();
            },
          };
      }),
      k.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }),
      k.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (e) {
            return k.globalEval(e), e;
          },
        },
      }),
      k.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }),
      k.ajaxTransport("script", function (n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
          return {
            send: function (e, t) {
              (r = k("<script>")
                .attr(n.scriptAttrs || {})
                .prop({ charset: n.scriptCharset, src: n.url })
                .on(
                  "load error",
                  (i = function (e) {
                    r.remove(),
                      (i = null),
                      e && t("error" === e.type ? 404 : 200, e.type);
                  })
                )),
                E.head.appendChild(r[0]);
            },
            abort: function () {
              i && i();
            },
          };
      });
    var Vt,
      Gt = [],
      Yt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = Gt.pop() || k.expando + "_" + kt++;
        return (this[e] = !0), e;
      },
    }),
      k.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r,
          i,
          o,
          a =
            !1 !== e.jsonp &&
            (Yt.test(e.url)
              ? "url"
              : "string" == typeof e.data &&
                0 ===
                  (e.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                Yt.test(e.data) &&
                "data");
        if (a || "jsonp" === e.dataTypes[0])
          return (
            (r = e.jsonpCallback = m(e.jsonpCallback)
              ? e.jsonpCallback()
              : e.jsonpCallback),
            a
              ? (e[a] = e[a].replace(Yt, "$1" + r))
              : !1 !== e.jsonp &&
                (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            (e.converters["script json"] = function () {
              return o || k.error(r + " was not called"), o[0];
            }),
            (e.dataTypes[0] = "json"),
            (i = C[r]),
            (C[r] = function () {
              o = arguments;
            }),
            n.always(function () {
              void 0 === i ? k(C).removeProp(r) : (C[r] = i),
                e[r] && ((e.jsonpCallback = t.jsonpCallback), Gt.push(r)),
                o && m(i) && i(o[0]),
                (o = i = void 0);
            }),
            "script"
          );
      }),
      (y.createHTMLDocument =
        (((Vt = E.implementation.createHTMLDocument("").body).innerHTML =
          "<form></form><form></form>"),
        2 === Vt.childNodes.length)),
      (k.parseHTML = function (e, t, n) {
        return "string" != typeof e
          ? []
          : ("boolean" == typeof t && ((n = t), (t = !1)),
            t ||
              (y.createHTMLDocument
                ? (((r = (t = E.implementation.createHTMLDocument(
                    ""
                  )).createElement("base")).href = E.location.href),
                  t.head.appendChild(r))
                : (t = E)),
            (o = !n && []),
            (i = D.exec(e))
              ? [t.createElement(i[1])]
              : ((i = we([e], t, o)),
                o && o.length && k(o).remove(),
                k.merge([], i.childNodes)));
        var r, i, o;
      }),
      (k.fn.load = function (e, t, n) {
        var r,
          i,
          o,
          a = this,
          s = e.indexOf(" ");
        return (
          -1 < s && ((r = mt(e.slice(s))), (e = e.slice(0, s))),
          m(t)
            ? ((n = t), (t = void 0))
            : t && "object" == typeof t && (i = "POST"),
          0 < a.length &&
            k
              .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
              .done(function (e) {
                (o = arguments),
                  a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
              })
              .always(
                n &&
                  function (e, t) {
                    a.each(function () {
                      n.apply(this, o || [e.responseText, t, e]);
                    });
                  }
              ),
          this
        );
      }),
      k.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (e, t) {
          k.fn[t] = function (e) {
            return this.on(t, e);
          };
        }
      ),
      (k.expr.pseudos.animated = function (t) {
        return k.grep(k.timers, function (e) {
          return t === e.elem;
        }).length;
      }),
      (k.offset = {
        setOffset: function (e, t, n) {
          var r,
            i,
            o,
            a,
            s,
            u,
            l = k.css(e, "position"),
            c = k(e),
            f = {};
          "static" === l && (e.style.position = "relative"),
            (s = c.offset()),
            (o = k.css(e, "top")),
            (u = k.css(e, "left")),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
              ? ((a = (r = c.position()).top), (i = r.left))
              : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
            m(t) && (t = t.call(e, n, k.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using" in t ? t.using.call(e, f) : c.css(f);
        },
      }),
      k.fn.extend({
        offset: function (t) {
          if (arguments.length)
            return void 0 === t
              ? this
              : this.each(function (e) {
                  k.offset.setOffset(this, t, e);
                });
          var e,
            n,
            r = this[0];
          return r
            ? r.getClientRects().length
              ? ((e = r.getBoundingClientRect()),
                (n = r.ownerDocument.defaultView),
                { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
              : { top: 0, left: 0 }
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var e,
              t,
              n,
              r = this[0],
              i = { top: 0, left: 0 };
            if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();
            else {
              (t = this.offset()),
                (n = r.ownerDocument),
                (e = r.offsetParent || n.documentElement);
              while (
                e &&
                (e === n.body || e === n.documentElement) &&
                "static" === k.css(e, "position")
              )
                e = e.parentNode;
              e &&
                e !== r &&
                1 === e.nodeType &&
                (((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0)),
                (i.left += k.css(e, "borderLeftWidth", !0)));
            }
            return {
              top: t.top - i.top - k.css(r, "marginTop", !0),
              left: t.left - i.left - k.css(r, "marginLeft", !0),
            };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            var e = this.offsetParent;
            while (e && "static" === k.css(e, "position")) e = e.offsetParent;
            return e || ie;
          });
        },
      }),
      k.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (t, i) {
          var o = "pageYOffset" === i;
          k.fn[t] = function (e) {
            return _(
              this,
              function (e, t, n) {
                var r;
                if (
                  (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                  void 0 === n)
                )
                  return r ? r[i] : e[t];
                r
                  ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                  : (e[t] = n);
              },
              t,
              e,
              arguments.length
            );
          };
        }
      ),
      k.each(["top", "left"], function (e, n) {
        k.cssHooks[n] = ze(y.pixelPosition, function (e, t) {
          if (t)
            return (t = _e(e, n)), $e.test(t) ? k(e).position()[n] + "px" : t;
        });
      }),
      k.each({ Height: "height", Width: "width" }, function (a, s) {
        k.each(
          { padding: "inner" + a, content: s, "": "outer" + a },
          function (r, o) {
            k.fn[o] = function (e, t) {
              var n = arguments.length && (r || "boolean" != typeof e),
                i = r || (!0 === e || !0 === t ? "margin" : "border");
              return _(
                this,
                function (e, t, n) {
                  var r;
                  return x(e)
                    ? 0 === o.indexOf("outer")
                      ? e["inner" + a]
                      : e.document.documentElement["client" + a]
                    : 9 === e.nodeType
                    ? ((r = e.documentElement),
                      Math.max(
                        e.body["scroll" + a],
                        r["scroll" + a],
                        e.body["offset" + a],
                        r["offset" + a],
                        r["client" + a]
                      ))
                    : void 0 === n
                    ? k.css(e, t, i)
                    : k.style(e, t, n, i);
                },
                s,
                n ? e : void 0,
                n
              );
            };
          }
        );
      }),
      k.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (e, n) {
          k.fn[n] = function (e, t) {
            return 0 < arguments.length
              ? this.on(n, null, e, t)
              : this.trigger(n);
          };
        }
      ),
      k.fn.extend({
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
      }),
      k.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, r) {
          return this.on(t, e, n, r);
        },
        undelegate: function (e, t, n) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", n);
        },
      }),
      (k.proxy = function (e, t) {
        var n, r, i;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
          return (
            (r = s.call(arguments, 2)),
            ((i = function () {
              return e.apply(t || this, r.concat(s.call(arguments)));
            }).guid = e.guid = e.guid || k.guid++),
            i
          );
      }),
      (k.holdReady = function (e) {
        e ? k.readyWait++ : k.ready(!0);
      }),
      (k.isArray = Array.isArray),
      (k.parseJSON = JSON.parse),
      (k.nodeName = A),
      (k.isFunction = m),
      (k.isWindow = x),
      (k.camelCase = V),
      (k.type = w),
      (k.now = Date.now),
      (k.isNumeric = function (e) {
        var t = k.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      }),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return k;
        });
    var Qt = C.jQuery,
      Jt = C.$;
    return (
      (k.noConflict = function (e) {
        return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k;
      }),
      e || (C.jQuery = C.$ = k),
      k
    );
  });
  
  /*
   Copyright (C) Federico Zivolo 2019
   Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
   */ (function (
    e,
    t
  ) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : (e.Popper = t());
  })(this, function () {
    "use strict";
    function e(e) {
      return e && "[object Function]" === {}.toString.call(e);
    }
    function t(e, t) {
      if (1 !== e.nodeType) return [];
      var o = e.ownerDocument.defaultView,
        n = o.getComputedStyle(e, null);
      return t ? n[t] : n;
    }
    function o(e) {
      return "HTML" === e.nodeName ? e : e.parentNode || e.host;
    }
    function n(e) {
      if (!e) return document.body;
      switch (e.nodeName) {
        case "HTML":
        case "BODY":
          return e.ownerDocument.body;
        case "#document":
          return e.body;
      }
      var i = t(e),
        r = i.overflow,
        p = i.overflowX,
        s = i.overflowY;
      return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e));
    }
    function i(e) {
      return e && e.referenceNode ? e.referenceNode : e;
    }
    function r(e) {
      return 11 === e ? re : 10 === e ? pe : re || pe;
    }
    function p(e) {
      if (!e) return document.documentElement;
      for (
        var o = r(10) ? document.body : null, n = e.offsetParent || null;
        n === o && e.nextElementSibling;
  
      )
        n = (e = e.nextElementSibling).offsetParent;
      var i = n && n.nodeName;
      return i && "BODY" !== i && "HTML" !== i
        ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
          "static" === t(n, "position")
          ? p(n)
          : n
        : e
        ? e.ownerDocument.documentElement
        : document.documentElement;
    }
    function s(e) {
      var t = e.nodeName;
      return "BODY" !== t && ("HTML" === t || p(e.firstElementChild) === e);
    }
    function d(e) {
      return null === e.parentNode ? e : d(e.parentNode);
    }
    function a(e, t) {
      if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
      var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        n = o ? e : t,
        i = o ? t : e,
        r = document.createRange();
      r.setStart(n, 0), r.setEnd(i, 0);
      var l = r.commonAncestorContainer;
      if ((e !== l && t !== l) || n.contains(i)) return s(l) ? l : p(l);
      var f = d(e);
      return f.host ? a(f.host, t) : a(e, d(t).host);
    }
    function l(e) {
      var t =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
        o = "top" === t ? "scrollTop" : "scrollLeft",
        n = e.nodeName;
      if ("BODY" === n || "HTML" === n) {
        var i = e.ownerDocument.documentElement,
          r = e.ownerDocument.scrollingElement || i;
        return r[o];
      }
      return e[o];
    }
    function f(e, t) {
      var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        n = l(t, "top"),
        i = l(t, "left"),
        r = o ? -1 : 1;
      return (
        (e.top += n * r),
        (e.bottom += n * r),
        (e.left += i * r),
        (e.right += i * r),
        e
      );
    }
    function m(e, t) {
      var o = "x" === t ? "Left" : "Top",
        n = "Left" == o ? "Right" : "Bottom";
      return (
        parseFloat(e["border" + o + "Width"], 10) +
        parseFloat(e["border" + n + "Width"], 10)
      );
    }
    function h(e, t, o, n) {
      return ee(
        t["offset" + e],
        t["scroll" + e],
        o["client" + e],
        o["offset" + e],
        o["scroll" + e],
        r(10)
          ? parseInt(o["offset" + e]) +
              parseInt(n["margin" + ("Height" === e ? "Top" : "Left")]) +
              parseInt(n["margin" + ("Height" === e ? "Bottom" : "Right")])
          : 0
      );
    }
    function c(e) {
      var t = e.body,
        o = e.documentElement,
        n = r(10) && getComputedStyle(o);
      return { height: h("Height", t, o, n), width: h("Width", t, o, n) };
    }
    function g(e) {
      return le({}, e, { right: e.left + e.width, bottom: e.top + e.height });
    }
    function u(e) {
      var o = {};
      try {
        if (r(10)) {
          o = e.getBoundingClientRect();
          var n = l(e, "top"),
            i = l(e, "left");
          (o.top += n), (o.left += i), (o.bottom += n), (o.right += i);
        } else o = e.getBoundingClientRect();
      } catch (t) {}
      var p = {
          left: o.left,
          top: o.top,
          width: o.right - o.left,
          height: o.bottom - o.top,
        },
        s = "HTML" === e.nodeName ? c(e.ownerDocument) : {},
        d = s.width || e.clientWidth || p.width,
        a = s.height || e.clientHeight || p.height,
        f = e.offsetWidth - d,
        h = e.offsetHeight - a;
      if (f || h) {
        var u = t(e);
        (f -= m(u, "x")), (h -= m(u, "y")), (p.width -= f), (p.height -= h);
      }
      return g(p);
    }
    function b(e, o) {
      var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        p = r(10),
        s = "HTML" === o.nodeName,
        d = u(e),
        a = u(o),
        l = n(e),
        m = t(o),
        h = parseFloat(m.borderTopWidth, 10),
        c = parseFloat(m.borderLeftWidth, 10);
      i && s && ((a.top = ee(a.top, 0)), (a.left = ee(a.left, 0)));
      var b = g({
        top: d.top - a.top - h,
        left: d.left - a.left - c,
        width: d.width,
        height: d.height,
      });
      if (((b.marginTop = 0), (b.marginLeft = 0), !p && s)) {
        var w = parseFloat(m.marginTop, 10),
          y = parseFloat(m.marginLeft, 10);
        (b.top -= h - w),
          (b.bottom -= h - w),
          (b.left -= c - y),
          (b.right -= c - y),
          (b.marginTop = w),
          (b.marginLeft = y);
      }
      return (
        (p && !i ? o.contains(l) : o === l && "BODY" !== l.nodeName) &&
          (b = f(b, o)),
        b
      );
    }
    function w(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        o = e.ownerDocument.documentElement,
        n = b(e, o),
        i = ee(o.clientWidth, window.innerWidth || 0),
        r = ee(o.clientHeight, window.innerHeight || 0),
        p = t ? 0 : l(o),
        s = t ? 0 : l(o, "left"),
        d = {
          top: p - n.top + n.marginTop,
          left: s - n.left + n.marginLeft,
          width: i,
          height: r,
        };
      return g(d);
    }
    function y(e) {
      var n = e.nodeName;
      if ("BODY" === n || "HTML" === n) return !1;
      if ("fixed" === t(e, "position")) return !0;
      var i = o(e);
      return !!i && y(i);
    }
    function E(e) {
      if (!e || !e.parentElement || r()) return document.documentElement;
      for (var o = e.parentElement; o && "none" === t(o, "transform"); )
        o = o.parentElement;
      return o || document.documentElement;
    }
    function v(e, t, r, p) {
      var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
        d = { top: 0, left: 0 },
        l = s ? E(e) : a(e, i(t));
      if ("viewport" === p) d = w(l, s);
      else {
        var f;
        "scrollParent" === p
          ? ((f = n(o(t))),
            "BODY" === f.nodeName && (f = e.ownerDocument.documentElement))
          : "window" === p
          ? (f = e.ownerDocument.documentElement)
          : (f = p);
        var m = b(f, l, s);
        if ("HTML" === f.nodeName && !y(l)) {
          var h = c(e.ownerDocument),
            g = h.height,
            u = h.width;
          (d.top += m.top - m.marginTop),
            (d.bottom = g + m.top),
            (d.left += m.left - m.marginLeft),
            (d.right = u + m.left);
        } else d = m;
      }
      r = r || 0;
      var v = "number" == typeof r;
      return (
        (d.left += v ? r : r.left || 0),
        (d.top += v ? r : r.top || 0),
        (d.right -= v ? r : r.right || 0),
        (d.bottom -= v ? r : r.bottom || 0),
        d
      );
    }
    function x(e) {
      var t = e.width,
        o = e.height;
      return t * o;
    }
    function O(e, t, o, n, i) {
      var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
      if (-1 === e.indexOf("auto")) return e;
      var p = v(o, n, r, i),
        s = {
          top: { width: p.width, height: t.top - p.top },
          right: { width: p.right - t.right, height: p.height },
          bottom: { width: p.width, height: p.bottom - t.bottom },
          left: { width: t.left - p.left, height: p.height },
        },
        d = Object.keys(s)
          .map(function (e) {
            return le({ key: e }, s[e], { area: x(s[e]) });
          })
          .sort(function (e, t) {
            return t.area - e.area;
          }),
        a = d.filter(function (e) {
          var t = e.width,
            n = e.height;
          return t >= o.clientWidth && n >= o.clientHeight;
        }),
        l = 0 < a.length ? a[0].key : d[0].key,
        f = e.split("-")[1];
      return l + (f ? "-" + f : "");
    }
    function L(e, t, o) {
      var n =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
        r = n ? E(t) : a(t, i(o));
      return b(o, r, n);
    }
    function S(e) {
      var t = e.ownerDocument.defaultView,
        o = t.getComputedStyle(e),
        n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0),
        i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0),
        r = { width: e.offsetWidth + i, height: e.offsetHeight + n };
      return r;
    }
    function T(e) {
      var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
      return e.replace(/left|right|bottom|top/g, function (e) {
        return t[e];
      });
    }
    function C(e, t, o) {
      o = o.split("-")[0];
      var n = S(e),
        i = { width: n.width, height: n.height },
        r = -1 !== ["right", "left"].indexOf(o),
        p = r ? "top" : "left",
        s = r ? "left" : "top",
        d = r ? "height" : "width",
        a = r ? "width" : "height";
      return (
        (i[p] = t[p] + t[d] / 2 - n[d] / 2),
        (i[s] = o === s ? t[s] - n[a] : t[T(s)]),
        i
      );
    }
    function D(e, t) {
      return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }
    function N(e, t, o) {
      if (Array.prototype.findIndex)
        return e.findIndex(function (e) {
          return e[t] === o;
        });
      var n = D(e, function (e) {
        return e[t] === o;
      });
      return e.indexOf(n);
    }
    function P(t, o, n) {
      var i = void 0 === n ? t : t.slice(0, N(t, "name", n));
      return (
        i.forEach(function (t) {
          t["function"] &&
            console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
          var n = t["function"] || t.fn;
          t.enabled &&
            e(n) &&
            ((o.offsets.popper = g(o.offsets.popper)),
            (o.offsets.reference = g(o.offsets.reference)),
            (o = n(o, t)));
        }),
        o
      );
    }
    function k() {
      if (!this.state.isDestroyed) {
        var e = {
          instance: this,
          styles: {},
          arrowStyles: {},
          attributes: {},
          flipped: !1,
          offsets: {},
        };
        (e.offsets.reference = L(
          this.state,
          this.popper,
          this.reference,
          this.options.positionFixed
        )),
          (e.placement = O(
            this.options.placement,
            e.offsets.reference,
            this.popper,
            this.reference,
            this.options.modifiers.flip.boundariesElement,
            this.options.modifiers.flip.padding
          )),
          (e.originalPlacement = e.placement),
          (e.positionFixed = this.options.positionFixed),
          (e.offsets.popper = C(this.popper, e.offsets.reference, e.placement)),
          (e.offsets.popper.position = this.options.positionFixed
            ? "fixed"
            : "absolute"),
          (e = P(this.modifiers, e)),
          this.state.isCreated
            ? this.options.onUpdate(e)
            : ((this.state.isCreated = !0), this.options.onCreate(e));
      }
    }
    function W(e, t) {
      return e.some(function (e) {
        var o = e.name,
          n = e.enabled;
        return n && o === t;
      });
    }
    function B(e) {
      for (
        var t = [!1, "ms", "Webkit", "Moz", "O"],
          o = e.charAt(0).toUpperCase() + e.slice(1),
          n = 0;
        n < t.length;
        n++
      ) {
        var i = t[n],
          r = i ? "" + i + o : e;
        if ("undefined" != typeof document.body.style[r]) return r;
      }
      return null;
    }
    function H() {
      return (
        (this.state.isDestroyed = !0),
        W(this.modifiers, "applyStyle") &&
          (this.popper.removeAttribute("x-placement"),
          (this.popper.style.position = ""),
          (this.popper.style.top = ""),
          (this.popper.style.left = ""),
          (this.popper.style.right = ""),
          (this.popper.style.bottom = ""),
          (this.popper.style.willChange = ""),
          (this.popper.style[B("transform")] = "")),
        this.disableEventListeners(),
        this.options.removeOnDestroy &&
          this.popper.parentNode.removeChild(this.popper),
        this
      );
    }
    function A(e) {
      var t = e.ownerDocument;
      return t ? t.defaultView : window;
    }
    function M(e, t, o, i) {
      var r = "BODY" === e.nodeName,
        p = r ? e.ownerDocument.defaultView : e;
      p.addEventListener(t, o, { passive: !0 }),
        r || M(n(p.parentNode), t, o, i),
        i.push(p);
    }
    function F(e, t, o, i) {
      (o.updateBound = i),
        A(e).addEventListener("resize", o.updateBound, { passive: !0 });
      var r = n(e);
      return (
        M(r, "scroll", o.updateBound, o.scrollParents),
        (o.scrollElement = r),
        (o.eventsEnabled = !0),
        o
      );
    }
    function I() {
      this.state.eventsEnabled ||
        (this.state = F(
          this.reference,
          this.options,
          this.state,
          this.scheduleUpdate
        ));
    }
    function R(e, t) {
      return (
        A(e).removeEventListener("resize", t.updateBound),
        t.scrollParents.forEach(function (e) {
          e.removeEventListener("scroll", t.updateBound);
        }),
        (t.updateBound = null),
        (t.scrollParents = []),
        (t.scrollElement = null),
        (t.eventsEnabled = !1),
        t
      );
    }
    function U() {
      this.state.eventsEnabled &&
        (cancelAnimationFrame(this.scheduleUpdate),
        (this.state = R(this.reference, this.state)));
    }
    function Y(e) {
      return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
    }
    function V(e, t) {
      Object.keys(t).forEach(function (o) {
        var n = "";
        -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(o) &&
          Y(t[o]) &&
          (n = "px"),
          (e.style[o] = t[o] + n);
      });
    }
    function j(e, t) {
      Object.keys(t).forEach(function (o) {
        var n = t[o];
        !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
      });
    }
    function q(e, t) {
      var o = e.offsets,
        n = o.popper,
        i = o.reference,
        r = $,
        p = function (e) {
          return e;
        },
        s = r(i.width),
        d = r(n.width),
        a = -1 !== ["left", "right"].indexOf(e.placement),
        l = -1 !== e.placement.indexOf("-"),
        f = t ? (a || l || s % 2 == d % 2 ? r : Z) : p,
        m = t ? r : p;
      return {
        left: f(1 == s % 2 && 1 == d % 2 && !l && t ? n.left - 1 : n.left),
        top: m(n.top),
        bottom: m(n.bottom),
        right: f(n.right),
      };
    }
    function K(e, t, o) {
      var n = D(e, function (e) {
          var o = e.name;
          return o === t;
        }),
        i =
          !!n &&
          e.some(function (e) {
            return e.name === o && e.enabled && e.order < n.order;
          });
      if (!i) {
        var r = "`" + t + "`";
        console.warn(
          "`" +
            o +
            "`" +
            " modifier is required by " +
            r +
            " modifier in order to work, be sure to include it before " +
            r +
            "!"
        );
      }
      return i;
    }
    function z(e) {
      return "end" === e ? "start" : "start" === e ? "end" : e;
    }
    function G(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        o = he.indexOf(e),
        n = he.slice(o + 1).concat(he.slice(0, o));
      return t ? n.reverse() : n;
    }
    function _(e, t, o, n) {
      var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        r = +i[1],
        p = i[2];
      if (!r) return e;
      if (0 === p.indexOf("%")) {
        var s;
        switch (p) {
          case "%p":
            s = o;
            break;
          case "%":
          case "%r":
          default:
            s = n;
        }
        var d = g(s);
        return (d[t] / 100) * r;
      }
      if ("vh" === p || "vw" === p) {
        var a;
        return (
          (a =
            "vh" === p
              ? ee(document.documentElement.clientHeight, window.innerHeight || 0)
              : ee(document.documentElement.clientWidth, window.innerWidth || 0)),
          (a / 100) * r
        );
      }
      return r;
    }
    function X(e, t, o, n) {
      var i = [0, 0],
        r = -1 !== ["right", "left"].indexOf(n),
        p = e.split(/(\+|\-)/).map(function (e) {
          return e.trim();
        }),
        s = p.indexOf(
          D(p, function (e) {
            return -1 !== e.search(/,|\s/);
          })
        );
      p[s] &&
        -1 === p[s].indexOf(",") &&
        console.warn(
          "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
        );
      var d = /\s*,\s*|\s+/,
        a =
          -1 === s
            ? [p]
            : [
                p.slice(0, s).concat([p[s].split(d)[0]]),
                [p[s].split(d)[1]].concat(p.slice(s + 1)),
              ];
      return (
        (a = a.map(function (e, n) {
          var i = (1 === n ? !r : r) ? "height" : "width",
            p = !1;
          return e
            .reduce(function (e, t) {
              return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t)
                ? ((e[e.length - 1] = t), (p = !0), e)
                : p
                ? ((e[e.length - 1] += t), (p = !1), e)
                : e.concat(t);
            }, [])
            .map(function (e) {
              return _(e, i, t, o);
            });
        })),
        a.forEach(function (e, t) {
          e.forEach(function (o, n) {
            Y(o) && (i[t] += o * ("-" === e[n - 1] ? -1 : 1));
          });
        }),
        i
      );
    }
    function J(e, t) {
      var o,
        n = t.offset,
        i = e.placement,
        r = e.offsets,
        p = r.popper,
        s = r.reference,
        d = i.split("-")[0];
      return (
        (o = Y(+n) ? [+n, 0] : X(n, p, s, d)),
        "left" === d
          ? ((p.top += o[0]), (p.left -= o[1]))
          : "right" === d
          ? ((p.top += o[0]), (p.left += o[1]))
          : "top" === d
          ? ((p.left += o[0]), (p.top -= o[1]))
          : "bottom" === d && ((p.left += o[0]), (p.top += o[1])),
        (e.popper = p),
        e
      );
    }
    var Q = Math.min,
      Z = Math.floor,
      $ = Math.round,
      ee = Math.max,
      te =
        "undefined" != typeof window &&
        "undefined" != typeof document &&
        "undefined" != typeof navigator,
      oe = (function () {
        for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
          if (te && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
        return 0;
      })(),
      ne = te && window.Promise,
      ie = ne
        ? function (e) {
            var t = !1;
            return function () {
              t ||
                ((t = !0),
                window.Promise.resolve().then(function () {
                  (t = !1), e();
                }));
            };
          }
        : function (e) {
            var t = !1;
            return function () {
              t ||
                ((t = !0),
                setTimeout(function () {
                  (t = !1), e();
                }, oe));
            };
          },
      re = te && !!(window.MSInputMethodContext && document.documentMode),
      pe = te && /MSIE 10/.test(navigator.userAgent),
      se = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      },
      de = (function () {
        function e(e, t) {
          for (var o, n = 0; n < t.length; n++)
            (o = t[n]),
              (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
        }
        return function (t, o, n) {
          return o && e(t.prototype, o), n && e(t, n), t;
        };
      })(),
      ae = function (e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      },
      le =
        Object.assign ||
        function (e) {
          for (var t, o = 1; o < arguments.length; o++)
            for (var n in ((t = arguments[o]), t))
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e;
        },
      fe = te && /Firefox/i.test(navigator.userAgent),
      me = [
        "auto-start",
        "auto",
        "auto-end",
        "top-start",
        "top",
        "top-end",
        "right-start",
        "right",
        "right-end",
        "bottom-end",
        "bottom",
        "bottom-start",
        "left-end",
        "left",
        "left-start",
      ],
      he = me.slice(3),
      ce = {
        FLIP: "flip",
        CLOCKWISE: "clockwise",
        COUNTERCLOCKWISE: "counterclockwise",
      },
      ge = (function () {
        function t(o, n) {
          var i = this,
            r =
              2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
          se(this, t),
            (this.scheduleUpdate = function () {
              return requestAnimationFrame(i.update);
            }),
            (this.update = ie(this.update.bind(this))),
            (this.options = le({}, t.Defaults, r)),
            (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
            (this.reference = o && o.jquery ? o[0] : o),
            (this.popper = n && n.jquery ? n[0] : n),
            (this.options.modifiers = {}),
            Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(
              function (e) {
                i.options.modifiers[e] = le(
                  {},
                  t.Defaults.modifiers[e] || {},
                  r.modifiers ? r.modifiers[e] : {}
                );
              }
            ),
            (this.modifiers = Object.keys(this.options.modifiers)
              .map(function (e) {
                return le({ name: e }, i.options.modifiers[e]);
              })
              .sort(function (e, t) {
                return e.order - t.order;
              })),
            this.modifiers.forEach(function (t) {
              t.enabled &&
                e(t.onLoad) &&
                t.onLoad(i.reference, i.popper, i.options, t, i.state);
            }),
            this.update();
          var p = this.options.eventsEnabled;
          p && this.enableEventListeners(), (this.state.eventsEnabled = p);
        }
        return (
          de(t, [
            {
              key: "update",
              value: function () {
                return k.call(this);
              },
            },
            {
              key: "destroy",
              value: function () {
                return H.call(this);
              },
            },
            {
              key: "enableEventListeners",
              value: function () {
                return I.call(this);
              },
            },
            {
              key: "disableEventListeners",
              value: function () {
                return U.call(this);
              },
            },
          ]),
          t
        );
      })();
    return (
      (ge.Utils = ("undefined" == typeof window ? global : window).PopperUtils),
      (ge.placements = me),
      (ge.Defaults = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () {},
        onUpdate: function () {},
        modifiers: {
          shift: {
            order: 100,
            enabled: !0,
            fn: function (e) {
              var t = e.placement,
                o = t.split("-")[0],
                n = t.split("-")[1];
              if (n) {
                var i = e.offsets,
                  r = i.reference,
                  p = i.popper,
                  s = -1 !== ["bottom", "top"].indexOf(o),
                  d = s ? "left" : "top",
                  a = s ? "width" : "height",
                  l = {
                    start: ae({}, d, r[d]),
                    end: ae({}, d, r[d] + r[a] - p[a]),
                  };
                e.offsets.popper = le({}, p, l[n]);
              }
              return e;
            },
          },
          offset: { order: 200, enabled: !0, fn: J, offset: 0 },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: function (e, t) {
              var o = t.boundariesElement || p(e.instance.popper);
              e.instance.reference === o && (o = p(o));
              var n = B("transform"),
                i = e.instance.popper.style,
                r = i.top,
                s = i.left,
                d = i[n];
              (i.top = ""), (i.left = ""), (i[n] = "");
              var a = v(
                e.instance.popper,
                e.instance.reference,
                t.padding,
                o,
                e.positionFixed
              );
              (i.top = r), (i.left = s), (i[n] = d), (t.boundaries = a);
              var l = t.priority,
                f = e.offsets.popper,
                m = {
                  primary: function (e) {
                    var o = f[e];
                    return (
                      f[e] < a[e] &&
                        !t.escapeWithReference &&
                        (o = ee(f[e], a[e])),
                      ae({}, e, o)
                    );
                  },
                  secondary: function (e) {
                    var o = "right" === e ? "left" : "top",
                      n = f[o];
                    return (
                      f[e] > a[e] &&
                        !t.escapeWithReference &&
                        (n = Q(
                          f[o],
                          a[e] - ("right" === e ? f.width : f.height)
                        )),
                      ae({}, o, n)
                    );
                  },
                };
              return (
                l.forEach(function (e) {
                  var t =
                    -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                  f = le({}, f, m[t](e));
                }),
                (e.offsets.popper = f),
                e
              );
            },
            priority: ["left", "right", "top", "bottom"],
            padding: 5,
            boundariesElement: "scrollParent",
          },
          keepTogether: {
            order: 400,
            enabled: !0,
            fn: function (e) {
              var t = e.offsets,
                o = t.popper,
                n = t.reference,
                i = e.placement.split("-")[0],
                r = Z,
                p = -1 !== ["top", "bottom"].indexOf(i),
                s = p ? "right" : "bottom",
                d = p ? "left" : "top",
                a = p ? "width" : "height";
              return (
                o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]),
                o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])),
                e
              );
            },
          },
          arrow: {
            order: 500,
            enabled: !0,
            fn: function (e, o) {
              var n;
              if (!K(e.instance.modifiers, "arrow", "keepTogether")) return e;
              var i = o.element;
              if ("string" == typeof i) {
                if (((i = e.instance.popper.querySelector(i)), !i)) return e;
              } else if (!e.instance.popper.contains(i))
                return (
                  console.warn(
                    "WARNING: `arrow.element` must be child of its popper element!"
                  ),
                  e
                );
              var r = e.placement.split("-")[0],
                p = e.offsets,
                s = p.popper,
                d = p.reference,
                a = -1 !== ["left", "right"].indexOf(r),
                l = a ? "height" : "width",
                f = a ? "Top" : "Left",
                m = f.toLowerCase(),
                h = a ? "left" : "top",
                c = a ? "bottom" : "right",
                u = S(i)[l];
              d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)),
                d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]),
                (e.offsets.popper = g(e.offsets.popper));
              var b = d[m] + d[l] / 2 - u / 2,
                w = t(e.instance.popper),
                y = parseFloat(w["margin" + f], 10),
                E = parseFloat(w["border" + f + "Width"], 10),
                v = b - e.offsets.popper[m] - y - E;
              return (
                (v = ee(Q(s[l] - u, v), 0)),
                (e.arrowElement = i),
                (e.offsets.arrow = ((n = {}), ae(n, m, $(v)), ae(n, h, ""), n)),
                e
              );
            },
            element: "[x-arrow]",
          },
          flip: {
            order: 600,
            enabled: !0,
            fn: function (e, t) {
              if (W(e.instance.modifiers, "inner")) return e;
              if (e.flipped && e.placement === e.originalPlacement) return e;
              var o = v(
                  e.instance.popper,
                  e.instance.reference,
                  t.padding,
                  t.boundariesElement,
                  e.positionFixed
                ),
                n = e.placement.split("-")[0],
                i = T(n),
                r = e.placement.split("-")[1] || "",
                p = [];
              switch (t.behavior) {
                case ce.FLIP:
                  p = [n, i];
                  break;
                case ce.CLOCKWISE:
                  p = G(n);
                  break;
                case ce.COUNTERCLOCKWISE:
                  p = G(n, !0);
                  break;
                default:
                  p = t.behavior;
              }
              return (
                p.forEach(function (s, d) {
                  if (n !== s || p.length === d + 1) return e;
                  (n = e.placement.split("-")[0]), (i = T(n));
                  var a = e.offsets.popper,
                    l = e.offsets.reference,
                    f = Z,
                    m =
                      ("left" === n && f(a.right) > f(l.left)) ||
                      ("right" === n && f(a.left) < f(l.right)) ||
                      ("top" === n && f(a.bottom) > f(l.top)) ||
                      ("bottom" === n && f(a.top) < f(l.bottom)),
                    h = f(a.left) < f(o.left),
                    c = f(a.right) > f(o.right),
                    g = f(a.top) < f(o.top),
                    u = f(a.bottom) > f(o.bottom),
                    b =
                      ("left" === n && h) ||
                      ("right" === n && c) ||
                      ("top" === n && g) ||
                      ("bottom" === n && u),
                    w = -1 !== ["top", "bottom"].indexOf(n),
                    y =
                      !!t.flipVariations &&
                      ((w && "start" === r && h) ||
                        (w && "end" === r && c) ||
                        (!w && "start" === r && g) ||
                        (!w && "end" === r && u)),
                    E =
                      !!t.flipVariationsByContent &&
                      ((w && "start" === r && c) ||
                        (w && "end" === r && h) ||
                        (!w && "start" === r && u) ||
                        (!w && "end" === r && g)),
                    v = y || E;
                  (m || b || v) &&
                    ((e.flipped = !0),
                    (m || b) && (n = p[d + 1]),
                    v && (r = z(r)),
                    (e.placement = n + (r ? "-" + r : "")),
                    (e.offsets.popper = le(
                      {},
                      e.offsets.popper,
                      C(e.instance.popper, e.offsets.reference, e.placement)
                    )),
                    (e = P(e.instance.modifiers, e, "flip")));
                }),
                e
              );
            },
            behavior: "flip",
            padding: 5,
            boundariesElement: "viewport",
            flipVariations: !1,
            flipVariationsByContent: !1,
          },
          inner: {
            order: 700,
            enabled: !1,
            fn: function (e) {
              var t = e.placement,
                o = t.split("-")[0],
                n = e.offsets,
                i = n.popper,
                r = n.reference,
                p = -1 !== ["left", "right"].indexOf(o),
                s = -1 === ["top", "left"].indexOf(o);
              return (
                (i[p ? "left" : "top"] =
                  r[o] - (s ? i[p ? "width" : "height"] : 0)),
                (e.placement = T(t)),
                (e.offsets.popper = g(i)),
                e
              );
            },
          },
          hide: {
            order: 800,
            enabled: !0,
            fn: function (e) {
              if (!K(e.instance.modifiers, "hide", "preventOverflow")) return e;
              var t = e.offsets.reference,
                o = D(e.instance.modifiers, function (e) {
                  return "preventOverflow" === e.name;
                }).boundaries;
              if (
                t.bottom < o.top ||
                t.left > o.right ||
                t.top > o.bottom ||
                t.right < o.left
              ) {
                if (!0 === e.hide) return e;
                (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
              } else {
                if (!1 === e.hide) return e;
                (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
              }
              return e;
            },
          },
          computeStyle: {
            order: 850,
            enabled: !0,
            fn: function (e, t) {
              var o = t.x,
                n = t.y,
                i = e.offsets.popper,
                r = D(e.instance.modifiers, function (e) {
                  return "applyStyle" === e.name;
                }).gpuAcceleration;
              void 0 !== r &&
                console.warn(
                  "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                );
              var s,
                d,
                a = void 0 === r ? t.gpuAcceleration : r,
                l = p(e.instance.popper),
                f = u(l),
                m = { position: i.position },
                h = q(e, 2 > window.devicePixelRatio || !fe),
                c = "bottom" === o ? "top" : "bottom",
                g = "right" === n ? "left" : "right",
                b = B("transform");
              if (
                ((d =
                  "bottom" == c
                    ? "HTML" === l.nodeName
                      ? -l.clientHeight + h.bottom
                      : -f.height + h.bottom
                    : h.top),
                (s =
                  "right" == g
                    ? "HTML" === l.nodeName
                      ? -l.clientWidth + h.right
                      : -f.width + h.right
                    : h.left),
                a && b)
              )
                (m[b] = "translate3d(" + s + "px, " + d + "px, 0)"),
                  (m[c] = 0),
                  (m[g] = 0),
                  (m.willChange = "transform");
              else {
                var w = "bottom" == c ? -1 : 1,
                  y = "right" == g ? -1 : 1;
                (m[c] = d * w), (m[g] = s * y), (m.willChange = c + ", " + g);
              }
              var E = { "x-placement": e.placement };
              return (
                (e.attributes = le({}, E, e.attributes)),
                (e.styles = le({}, m, e.styles)),
                (e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles)),
                e
              );
            },
            gpuAcceleration: !0,
            x: "bottom",
            y: "right",
          },
          applyStyle: {
            order: 900,
            enabled: !0,
            fn: function (e) {
              return (
                V(e.instance.popper, e.styles),
                j(e.instance.popper, e.attributes),
                e.arrowElement &&
                  Object.keys(e.arrowStyles).length &&
                  V(e.arrowElement, e.arrowStyles),
                e
              );
            },
            onLoad: function (e, t, o, n, i) {
              var r = L(i, t, e, o.positionFixed),
                p = O(
                  o.placement,
                  r,
                  t,
                  e,
                  o.modifiers.flip.boundariesElement,
                  o.modifiers.flip.padding
                );
              return (
                t.setAttribute("x-placement", p),
                V(t, { position: o.positionFixed ? "fixed" : "absolute" }),
                o
              );
            },
            gpuAcceleration: void 0,
          },
        },
      }),
      ge
    );
  });
  
  /*!
   * Bootstrap v4.4.1 (https://getbootstrap.com/)
   * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   */
  !(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? e(exports, require("jquery"), require("popper.js"))
      : "function" == typeof define && define.amd
      ? define(["exports", "jquery", "popper.js"], e)
      : e(((t = t || self).bootstrap = {}), t.jQuery, t.Popper);
  })(this, function (t, g, u) {
    "use strict";
    function i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    function s(t, e, n) {
      return e && i(t.prototype, e), n && i(t, n), t;
    }
    function e(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
          (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, i);
      }
      return n;
    }
    function l(o) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? e(Object(r), !0).forEach(function (t) {
              var e, n, i;
              (e = o),
                (i = r[(n = t)]),
                n in e
                  ? Object.defineProperty(e, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[n] = i);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r))
          : e(Object(r)).forEach(function (t) {
              Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t));
            });
      }
      return o;
    }
    (g = g && g.hasOwnProperty("default") ? g.default : g),
      (u = u && u.hasOwnProperty("default") ? u.default : u);
    var n = "transitionend";
    function o(t) {
      var e = this,
        n = !1;
      return (
        g(this).one(_.TRANSITION_END, function () {
          n = !0;
        }),
        setTimeout(function () {
          n || _.triggerTransitionEnd(e);
        }, t),
        this
      );
    }
    var _ = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function (t) {
        for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
        return t;
      },
      getSelectorFromElement: function (t) {
        var e = t.getAttribute("data-target");
        if (!e || "#" === e) {
          var n = t.getAttribute("href");
          e = n && "#" !== n ? n.trim() : "";
        }
        try {
          return document.querySelector(e) ? e : null;
        } catch (t) {
          return null;
        }
      },
      getTransitionDurationFromElement: function (t) {
        if (!t) return 0;
        var e = g(t).css("transition-duration"),
          n = g(t).css("transition-delay"),
          i = parseFloat(e),
          o = parseFloat(n);
        return i || o
          ? ((e = e.split(",")[0]),
            (n = n.split(",")[0]),
            1e3 * (parseFloat(e) + parseFloat(n)))
          : 0;
      },
      reflow: function (t) {
        return t.offsetHeight;
      },
      triggerTransitionEnd: function (t) {
        g(t).trigger(n);
      },
      supportsTransitionEnd: function () {
        return Boolean(n);
      },
      isElement: function (t) {
        return (t[0] || t).nodeType;
      },
      typeCheckConfig: function (t, e, n) {
        for (var i in n)
          if (Object.prototype.hasOwnProperty.call(n, i)) {
            var o = n[i],
              r = e[i],
              s =
                r && _.isElement(r)
                  ? "element"
                  : ((a = r),
                    {}.toString
                      .call(a)
                      .match(/\s([a-z]+)/i)[1]
                      .toLowerCase());
            if (!new RegExp(o).test(s))
              throw new Error(
                t.toUpperCase() +
                  ': Option "' +
                  i +
                  '" provided type "' +
                  s +
                  '" but expected type "' +
                  o +
                  '".'
              );
          }
        var a;
      },
      findShadowRoot: function (t) {
        if (!document.documentElement.attachShadow) return null;
        if ("function" != typeof t.getRootNode)
          return t instanceof ShadowRoot
            ? t
            : t.parentNode
            ? _.findShadowRoot(t.parentNode)
            : null;
        var e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      },
      jQueryDetection: function () {
        if ("undefined" == typeof g)
          throw new TypeError(
            "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
          );
        var t = g.fn.jquery.split(" ")[0].split(".");
        if (
          (t[0] < 2 && t[1] < 9) ||
          (1 === t[0] && 9 === t[1] && t[2] < 1) ||
          4 <= t[0]
        )
          throw new Error(
            "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
          );
      },
    };
    _.jQueryDetection(),
      (g.fn.emulateTransitionEnd = o),
      (g.event.special[_.TRANSITION_END] = {
        bindType: n,
        delegateType: n,
        handle: function (t) {
          if (g(t.target).is(this))
            return t.handleObj.handler.apply(this, arguments);
        },
      });
    var r = "alert",
      a = "bs.alert",
      c = "." + a,
      h = g.fn[r],
      f = {
        CLOSE: "close" + c,
        CLOSED: "closed" + c,
        CLICK_DATA_API: "click" + c + ".data-api",
      },
      d = "alert",
      m = "fade",
      p = "show",
      v = (function () {
        function i(t) {
          this._element = t;
        }
        var t = i.prototype;
        return (
          (t.close = function (t) {
            var e = this._element;
            t && (e = this._getRootElement(t)),
              this._triggerCloseEvent(e).isDefaultPrevented() ||
                this._removeElement(e);
          }),
          (t.dispose = function () {
            g.removeData(this._element, a), (this._element = null);
          }),
          (t._getRootElement = function (t) {
            var e = _.getSelectorFromElement(t),
              n = !1;
            return (
              e && (n = document.querySelector(e)),
              (n = n || g(t).closest("." + d)[0])
            );
          }),
          (t._triggerCloseEvent = function (t) {
            var e = g.Event(f.CLOSE);
            return g(t).trigger(e), e;
          }),
          (t._removeElement = function (e) {
            var n = this;
            if ((g(e).removeClass(p), g(e).hasClass(m))) {
              var t = _.getTransitionDurationFromElement(e);
              g(e)
                .one(_.TRANSITION_END, function (t) {
                  return n._destroyElement(e, t);
                })
                .emulateTransitionEnd(t);
            } else this._destroyElement(e);
          }),
          (t._destroyElement = function (t) {
            g(t).detach().trigger(f.CLOSED).remove();
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = g(this),
                e = t.data(a);
              e || ((e = new i(this)), t.data(a, e)), "close" === n && e[n](this);
            });
          }),
          (i._handleDismiss = function (e) {
            return function (t) {
              t && t.preventDefault(), e.close(this);
            };
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
          ]),
          i
        );
      })();
    g(document).on(
      f.CLICK_DATA_API,
      '[data-dismiss="alert"]',
      v._handleDismiss(new v())
    ),
      (g.fn[r] = v._jQueryInterface),
      (g.fn[r].Constructor = v),
      (g.fn[r].noConflict = function () {
        return (g.fn[r] = h), v._jQueryInterface;
      });
    var y = "button",
      E = "bs.button",
      C = "." + E,
      T = ".data-api",
      b = g.fn[y],
      S = "active",
      D = "btn",
      I = "focus",
      w = '[data-toggle^="button"]',
      A = '[data-toggle="buttons"]',
      N = '[data-toggle="button"]',
      O = '[data-toggle="buttons"] .btn',
      k = 'input:not([type="hidden"])',
      P = ".active",
      L = ".btn",
      j = {
        CLICK_DATA_API: "click" + C + T,
        FOCUS_BLUR_DATA_API: "focus" + C + T + " blur" + C + T,
        LOAD_DATA_API: "load" + C + T,
      },
      H = (function () {
        function n(t) {
          this._element = t;
        }
        var t = n.prototype;
        return (
          (t.toggle = function () {
            var t = !0,
              e = !0,
              n = g(this._element).closest(A)[0];
            if (n) {
              var i = this._element.querySelector(k);
              if (i) {
                if ("radio" === i.type)
                  if (i.checked && this._element.classList.contains(S)) t = !1;
                  else {
                    var o = n.querySelector(P);
                    o && g(o).removeClass(S);
                  }
                else
                  "checkbox" === i.type
                    ? "LABEL" === this._element.tagName &&
                      i.checked === this._element.classList.contains(S) &&
                      (t = !1)
                    : (t = !1);
                t &&
                  ((i.checked = !this._element.classList.contains(S)),
                  g(i).trigger("change")),
                  i.focus(),
                  (e = !1);
              }
            }
            this._element.hasAttribute("disabled") ||
              this._element.classList.contains("disabled") ||
              (e &&
                this._element.setAttribute(
                  "aria-pressed",
                  !this._element.classList.contains(S)
                ),
              t && g(this._element).toggleClass(S));
          }),
          (t.dispose = function () {
            g.removeData(this._element, E), (this._element = null);
          }),
          (n._jQueryInterface = function (e) {
            return this.each(function () {
              var t = g(this).data(E);
              t || ((t = new n(this)), g(this).data(E, t)),
                "toggle" === e && t[e]();
            });
          }),
          s(n, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
          ]),
          n
        );
      })();
    g(document)
      .on(j.CLICK_DATA_API, w, function (t) {
        var e = t.target;
        if (
          (g(e).hasClass(D) || (e = g(e).closest(L)[0]),
          !e || e.hasAttribute("disabled") || e.classList.contains("disabled"))
        )
          t.preventDefault();
        else {
          var n = e.querySelector(k);
          if (
            n &&
            (n.hasAttribute("disabled") || n.classList.contains("disabled"))
          )
            return void t.preventDefault();
          H._jQueryInterface.call(g(e), "toggle");
        }
      })
      .on(j.FOCUS_BLUR_DATA_API, w, function (t) {
        var e = g(t.target).closest(L)[0];
        g(e).toggleClass(I, /^focus(in)?$/.test(t.type));
      }),
      g(window).on(j.LOAD_DATA_API, function () {
        for (
          var t = [].slice.call(document.querySelectorAll(O)),
            e = 0,
            n = t.length;
          e < n;
          e++
        ) {
          var i = t[e],
            o = i.querySelector(k);
          o.checked || o.hasAttribute("checked")
            ? i.classList.add(S)
            : i.classList.remove(S);
        }
        for (
          var r = 0, s = (t = [].slice.call(document.querySelectorAll(N))).length;
          r < s;
          r++
        ) {
          var a = t[r];
          "true" === a.getAttribute("aria-pressed")
            ? a.classList.add(S)
            : a.classList.remove(S);
        }
      }),
      (g.fn[y] = H._jQueryInterface),
      (g.fn[y].Constructor = H),
      (g.fn[y].noConflict = function () {
        return (g.fn[y] = b), H._jQueryInterface;
      });
    var R = "carousel",
      x = "bs.carousel",
      F = "." + x,
      U = ".data-api",
      W = g.fn[R],
      q = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0,
      },
      M = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean",
      },
      K = "next",
      Q = "prev",
      B = "left",
      V = "right",
      Y = {
        SLIDE: "slide" + F,
        SLID: "slid" + F,
        KEYDOWN: "keydown" + F,
        MOUSEENTER: "mouseenter" + F,
        MOUSELEAVE: "mouseleave" + F,
        TOUCHSTART: "touchstart" + F,
        TOUCHMOVE: "touchmove" + F,
        TOUCHEND: "touchend" + F,
        POINTERDOWN: "pointerdown" + F,
        POINTERUP: "pointerup" + F,
        DRAG_START: "dragstart" + F,
        LOAD_DATA_API: "load" + F + U,
        CLICK_DATA_API: "click" + F + U,
      },
      z = "carousel",
      X = "active",
      $ = "slide",
      G = "carousel-item-right",
      J = "carousel-item-left",
      Z = "carousel-item-next",
      tt = "carousel-item-prev",
      et = "pointer-event",
      nt = ".active",
      it = ".active.carousel-item",
      ot = ".carousel-item",
      rt = ".carousel-item img",
      st = ".carousel-item-next, .carousel-item-prev",
      at = ".carousel-indicators",
      lt = "[data-slide], [data-slide-to]",
      ct = '[data-ride="carousel"]',
      ht = { TOUCH: "touch", PEN: "pen" },
      ut = (function () {
        function r(t, e) {
          (this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this.touchStartX = 0),
            (this.touchDeltaX = 0),
            (this._config = this._getConfig(e)),
            (this._element = t),
            (this._indicatorsElement = this._element.querySelector(at)),
            (this._touchSupported =
              "ontouchstart" in document.documentElement ||
              0 < navigator.maxTouchPoints),
            (this._pointerEvent = Boolean(
              window.PointerEvent || window.MSPointerEvent
            )),
            this._addEventListeners();
        }
        var t = r.prototype;
        return (
          (t.next = function () {
            this._isSliding || this._slide(K);
          }),
          (t.nextWhenVisible = function () {
            !document.hidden &&
              g(this._element).is(":visible") &&
              "hidden" !== g(this._element).css("visibility") &&
              this.next();
          }),
          (t.prev = function () {
            this._isSliding || this._slide(Q);
          }),
          (t.pause = function (t) {
            t || (this._isPaused = !0),
              this._element.querySelector(st) &&
                (_.triggerTransitionEnd(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null);
          }),
          (t.cycle = function (t) {
            t || (this._isPaused = !1),
              this._interval &&
                (clearInterval(this._interval), (this._interval = null)),
              this._config.interval &&
                !this._isPaused &&
                (this._interval = setInterval(
                  (document.visibilityState
                    ? this.nextWhenVisible
                    : this.next
                  ).bind(this),
                  this._config.interval
                ));
          }),
          (t.to = function (t) {
            var e = this;
            this._activeElement = this._element.querySelector(it);
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
              if (this._isSliding)
                g(this._element).one(Y.SLID, function () {
                  return e.to(t);
                });
              else {
                if (n === t) return this.pause(), void this.cycle();
                var i = n < t ? K : Q;
                this._slide(i, this._items[t]);
              }
          }),
          (t.dispose = function () {
            g(this._element).off(F),
              g.removeData(this._element, x),
              (this._items = null),
              (this._config = null),
              (this._element = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null);
          }),
          (t._getConfig = function (t) {
            return (t = l({}, q, {}, t)), _.typeCheckConfig(R, t, M), t;
          }),
          (t._handleSwipe = function () {
            var t = Math.abs(this.touchDeltaX);
            if (!(t <= 40)) {
              var e = t / this.touchDeltaX;
              (this.touchDeltaX = 0) < e && this.prev(), e < 0 && this.next();
            }
          }),
          (t._addEventListeners = function () {
            var e = this;
            this._config.keyboard &&
              g(this._element).on(Y.KEYDOWN, function (t) {
                return e._keydown(t);
              }),
              "hover" === this._config.pause &&
                g(this._element)
                  .on(Y.MOUSEENTER, function (t) {
                    return e.pause(t);
                  })
                  .on(Y.MOUSELEAVE, function (t) {
                    return e.cycle(t);
                  }),
              this._config.touch && this._addTouchEventListeners();
          }),
          (t._addTouchEventListeners = function () {
            var e = this;
            if (this._touchSupported) {
              var n = function (t) {
                  e._pointerEvent && ht[t.originalEvent.pointerType.toUpperCase()]
                    ? (e.touchStartX = t.originalEvent.clientX)
                    : e._pointerEvent ||
                      (e.touchStartX = t.originalEvent.touches[0].clientX);
                },
                i = function (t) {
                  e._pointerEvent &&
                    ht[t.originalEvent.pointerType.toUpperCase()] &&
                    (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX),
                    e._handleSwipe(),
                    "hover" === e._config.pause &&
                      (e.pause(),
                      e.touchTimeout && clearTimeout(e.touchTimeout),
                      (e.touchTimeout = setTimeout(function (t) {
                        return e.cycle(t);
                      }, 500 + e._config.interval)));
                };
              g(this._element.querySelectorAll(rt)).on(
                Y.DRAG_START,
                function (t) {
                  return t.preventDefault();
                }
              ),
                this._pointerEvent
                  ? (g(this._element).on(Y.POINTERDOWN, function (t) {
                      return n(t);
                    }),
                    g(this._element).on(Y.POINTERUP, function (t) {
                      return i(t);
                    }),
                    this._element.classList.add(et))
                  : (g(this._element).on(Y.TOUCHSTART, function (t) {
                      return n(t);
                    }),
                    g(this._element).on(Y.TOUCHMOVE, function (t) {
                      return (function (t) {
                        t.originalEvent.touches &&
                        1 < t.originalEvent.touches.length
                          ? (e.touchDeltaX = 0)
                          : (e.touchDeltaX =
                              t.originalEvent.touches[0].clientX - e.touchStartX);
                      })(t);
                    }),
                    g(this._element).on(Y.TOUCHEND, function (t) {
                      return i(t);
                    }));
            }
          }),
          (t._keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName))
              switch (t.which) {
                case 37:
                  t.preventDefault(), this.prev();
                  break;
                case 39:
                  t.preventDefault(), this.next();
              }
          }),
          (t._getItemIndex = function (t) {
            return (
              (this._items =
                t && t.parentNode
                  ? [].slice.call(t.parentNode.querySelectorAll(ot))
                  : []),
              this._items.indexOf(t)
            );
          }),
          (t._getItemByDirection = function (t, e) {
            var n = t === K,
              i = t === Q,
              o = this._getItemIndex(e),
              r = this._items.length - 1;
            if (((i && 0 === o) || (n && o === r)) && !this._config.wrap)
              return e;
            var s = (o + (t === Q ? -1 : 1)) % this._items.length;
            return -1 == s ? this._items[this._items.length - 1] : this._items[s];
          }),
          (t._triggerSlideEvent = function (t, e) {
            var n = this._getItemIndex(t),
              i = this._getItemIndex(this._element.querySelector(it)),
              o = g.Event(Y.SLIDE, {
                relatedTarget: t,
                direction: e,
                from: i,
                to: n,
              });
            return g(this._element).trigger(o), o;
          }),
          (t._setActiveIndicatorElement = function (t) {
            if (this._indicatorsElement) {
              var e = [].slice.call(this._indicatorsElement.querySelectorAll(nt));
              g(e).removeClass(X);
              var n = this._indicatorsElement.children[this._getItemIndex(t)];
              n && g(n).addClass(X);
            }
          }),
          (t._slide = function (t, e) {
            var n,
              i,
              o,
              r = this,
              s = this._element.querySelector(it),
              a = this._getItemIndex(s),
              l = e || (s && this._getItemByDirection(t, s)),
              c = this._getItemIndex(l),
              h = Boolean(this._interval);
            if (
              ((o = t === K ? ((n = J), (i = Z), B) : ((n = G), (i = tt), V)),
              l && g(l).hasClass(X))
            )
              this._isSliding = !1;
            else if (
              !this._triggerSlideEvent(l, o).isDefaultPrevented() &&
              s &&
              l
            ) {
              (this._isSliding = !0),
                h && this.pause(),
                this._setActiveIndicatorElement(l);
              var u = g.Event(Y.SLID, {
                relatedTarget: l,
                direction: o,
                from: a,
                to: c,
              });
              if (g(this._element).hasClass($)) {
                g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n);
                var f = parseInt(l.getAttribute("data-interval"), 10);
                f
                  ? ((this._config.defaultInterval =
                      this._config.defaultInterval || this._config.interval),
                    (this._config.interval = f))
                  : (this._config.interval =
                      this._config.defaultInterval || this._config.interval);
                var d = _.getTransitionDurationFromElement(s);
                g(s)
                  .one(_.TRANSITION_END, function () {
                    g(l)
                      .removeClass(n + " " + i)
                      .addClass(X),
                      g(s).removeClass(X + " " + i + " " + n),
                      (r._isSliding = !1),
                      setTimeout(function () {
                        return g(r._element).trigger(u);
                      }, 0);
                  })
                  .emulateTransitionEnd(d);
              } else
                g(s).removeClass(X),
                  g(l).addClass(X),
                  (this._isSliding = !1),
                  g(this._element).trigger(u);
              h && this.cycle();
            }
          }),
          (r._jQueryInterface = function (i) {
            return this.each(function () {
              var t = g(this).data(x),
                e = l({}, q, {}, g(this).data());
              "object" == typeof i && (e = l({}, e, {}, i));
              var n = "string" == typeof i ? i : e.slide;
              if (
                (t || ((t = new r(this, e)), g(this).data(x, t)),
                "number" == typeof i)
              )
                t.to(i);
              else if ("string" == typeof n) {
                if ("undefined" == typeof t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              } else e.interval && e.ride && (t.pause(), t.cycle());
            });
          }),
          (r._dataApiClickHandler = function (t) {
            var e = _.getSelectorFromElement(this);
            if (e) {
              var n = g(e)[0];
              if (n && g(n).hasClass(z)) {
                var i = l({}, g(n).data(), {}, g(this).data()),
                  o = this.getAttribute("data-slide-to");
                o && (i.interval = !1),
                  r._jQueryInterface.call(g(n), i),
                  o && g(n).data(x).to(o),
                  t.preventDefault();
              }
            }
          }),
          s(r, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return q;
              },
            },
          ]),
          r
        );
      })();
    g(document).on(Y.CLICK_DATA_API, lt, ut._dataApiClickHandler),
      g(window).on(Y.LOAD_DATA_API, function () {
        for (
          var t = [].slice.call(document.querySelectorAll(ct)),
            e = 0,
            n = t.length;
          e < n;
          e++
        ) {
          var i = g(t[e]);
          ut._jQueryInterface.call(i, i.data());
        }
      }),
      (g.fn[R] = ut._jQueryInterface),
      (g.fn[R].Constructor = ut),
      (g.fn[R].noConflict = function () {
        return (g.fn[R] = W), ut._jQueryInterface;
      });
    var ft = "collapse",
      dt = "bs.collapse",
      gt = "." + dt,
      _t = g.fn[ft],
      mt = { toggle: !0, parent: "" },
      pt = { toggle: "boolean", parent: "(string|element)" },
      vt = {
        SHOW: "show" + gt,
        SHOWN: "shown" + gt,
        HIDE: "hide" + gt,
        HIDDEN: "hidden" + gt,
        CLICK_DATA_API: "click" + gt + ".data-api",
      },
      yt = "show",
      Et = "collapse",
      Ct = "collapsing",
      Tt = "collapsed",
      bt = "width",
      St = "height",
      Dt = ".show, .collapsing",
      It = '[data-toggle="collapse"]',
      wt = (function () {
        function a(e, t) {
          (this._isTransitioning = !1),
            (this._element = e),
            (this._config = this._getConfig(t)),
            (this._triggerArray = [].slice.call(
              document.querySelectorAll(
                '[data-toggle="collapse"][href="#' +
                  e.id +
                  '"],[data-toggle="collapse"][data-target="#' +
                  e.id +
                  '"]'
              )
            ));
          for (
            var n = [].slice.call(document.querySelectorAll(It)),
              i = 0,
              o = n.length;
            i < o;
            i++
          ) {
            var r = n[i],
              s = _.getSelectorFromElement(r),
              a = [].slice
                .call(document.querySelectorAll(s))
                .filter(function (t) {
                  return t === e;
                });
            null !== s &&
              0 < a.length &&
              ((this._selector = s), this._triggerArray.push(r));
          }
          (this._parent = this._config.parent ? this._getParent() : null),
            this._config.parent ||
              this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle();
        }
        var t = a.prototype;
        return (
          (t.toggle = function () {
            g(this._element).hasClass(yt) ? this.hide() : this.show();
          }),
          (t.show = function () {
            var t,
              e,
              n = this;
            if (
              !this._isTransitioning &&
              !g(this._element).hasClass(yt) &&
              (this._parent &&
                0 ===
                  (t = [].slice
                    .call(this._parent.querySelectorAll(Dt))
                    .filter(function (t) {
                      return "string" == typeof n._config.parent
                        ? t.getAttribute("data-parent") === n._config.parent
                        : t.classList.contains(Et);
                    })).length &&
                (t = null),
              !(
                t &&
                (e = g(t).not(this._selector).data(dt)) &&
                e._isTransitioning
              ))
            ) {
              var i = g.Event(vt.SHOW);
              if ((g(this._element).trigger(i), !i.isDefaultPrevented())) {
                t &&
                  (a._jQueryInterface.call(g(t).not(this._selector), "hide"),
                  e || g(t).data(dt, null));
                var o = this._getDimension();
                g(this._element).removeClass(Et).addClass(Ct),
                  (this._element.style[o] = 0),
                  this._triggerArray.length &&
                    g(this._triggerArray)
                      .removeClass(Tt)
                      .attr("aria-expanded", !0),
                  this.setTransitioning(!0);
                var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                  s = _.getTransitionDurationFromElement(this._element);
                g(this._element)
                  .one(_.TRANSITION_END, function () {
                    g(n._element).removeClass(Ct).addClass(Et).addClass(yt),
                      (n._element.style[o] = ""),
                      n.setTransitioning(!1),
                      g(n._element).trigger(vt.SHOWN);
                  })
                  .emulateTransitionEnd(s),
                  (this._element.style[o] = this._element[r] + "px");
              }
            }
          }),
          (t.hide = function () {
            var t = this;
            if (!this._isTransitioning && g(this._element).hasClass(yt)) {
              var e = g.Event(vt.HIDE);
              if ((g(this._element).trigger(e), !e.isDefaultPrevented())) {
                var n = this._getDimension();
                (this._element.style[n] =
                  this._element.getBoundingClientRect()[n] + "px"),
                  _.reflow(this._element),
                  g(this._element).addClass(Ct).removeClass(Et).removeClass(yt);
                var i = this._triggerArray.length;
                if (0 < i)
                  for (var o = 0; o < i; o++) {
                    var r = this._triggerArray[o],
                      s = _.getSelectorFromElement(r);
                    if (null !== s)
                      g([].slice.call(document.querySelectorAll(s))).hasClass(
                        yt
                      ) || g(r).addClass(Tt).attr("aria-expanded", !1);
                  }
                this.setTransitioning(!0);
                this._element.style[n] = "";
                var a = _.getTransitionDurationFromElement(this._element);
                g(this._element)
                  .one(_.TRANSITION_END, function () {
                    t.setTransitioning(!1),
                      g(t._element)
                        .removeClass(Ct)
                        .addClass(Et)
                        .trigger(vt.HIDDEN);
                  })
                  .emulateTransitionEnd(a);
              }
            }
          }),
          (t.setTransitioning = function (t) {
            this._isTransitioning = t;
          }),
          (t.dispose = function () {
            g.removeData(this._element, dt),
              (this._config = null),
              (this._parent = null),
              (this._element = null),
              (this._triggerArray = null),
              (this._isTransitioning = null);
          }),
          (t._getConfig = function (t) {
            return (
              ((t = l({}, mt, {}, t)).toggle = Boolean(t.toggle)),
              _.typeCheckConfig(ft, t, pt),
              t
            );
          }),
          (t._getDimension = function () {
            return g(this._element).hasClass(bt) ? bt : St;
          }),
          (t._getParent = function () {
            var t,
              n = this;
            _.isElement(this._config.parent)
              ? ((t = this._config.parent),
                "undefined" != typeof this._config.parent.jquery &&
                  (t = this._config.parent[0]))
              : (t = document.querySelector(this._config.parent));
            var e =
                '[data-toggle="collapse"][data-parent="' +
                this._config.parent +
                '"]',
              i = [].slice.call(t.querySelectorAll(e));
            return (
              g(i).each(function (t, e) {
                n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
              }),
              t
            );
          }),
          (t._addAriaAndCollapsedClass = function (t, e) {
            var n = g(t).hasClass(yt);
            e.length && g(e).toggleClass(Tt, !n).attr("aria-expanded", n);
          }),
          (a._getTargetFromElement = function (t) {
            var e = _.getSelectorFromElement(t);
            return e ? document.querySelector(e) : null;
          }),
          (a._jQueryInterface = function (i) {
            return this.each(function () {
              var t = g(this),
                e = t.data(dt),
                n = l(
                  {},
                  mt,
                  {},
                  t.data(),
                  {},
                  "object" == typeof i && i ? i : {}
                );
              if (
                (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                e || ((e = new a(this, n)), t.data(dt, e)),
                "string" == typeof i)
              ) {
                if ("undefined" == typeof e[i])
                  throw new TypeError('No method named "' + i + '"');
                e[i]();
              }
            });
          }),
          s(a, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return mt;
              },
            },
          ]),
          a
        );
      })();
    g(document).on(vt.CLICK_DATA_API, It, function (t) {
      "A" === t.currentTarget.tagName && t.preventDefault();
      var n = g(this),
        e = _.getSelectorFromElement(this),
        i = [].slice.call(document.querySelectorAll(e));
      g(i).each(function () {
        var t = g(this),
          e = t.data(dt) ? "toggle" : n.data();
        wt._jQueryInterface.call(t, e);
      });
    }),
      (g.fn[ft] = wt._jQueryInterface),
      (g.fn[ft].Constructor = wt),
      (g.fn[ft].noConflict = function () {
        return (g.fn[ft] = _t), wt._jQueryInterface;
      });
    var At = "dropdown",
      Nt = "bs.dropdown",
      Ot = "." + Nt,
      kt = ".data-api",
      Pt = g.fn[At],
      Lt = new RegExp("38|40|27"),
      jt = {
        HIDE: "hide" + Ot,
        HIDDEN: "hidden" + Ot,
        SHOW: "show" + Ot,
        SHOWN: "shown" + Ot,
        CLICK: "click" + Ot,
        CLICK_DATA_API: "click" + Ot + kt,
        KEYDOWN_DATA_API: "keydown" + Ot + kt,
        KEYUP_DATA_API: "keyup" + Ot + kt,
      },
      Ht = "disabled",
      Rt = "show",
      xt = "dropup",
      Ft = "dropright",
      Ut = "dropleft",
      Wt = "dropdown-menu-right",
      qt = "position-static",
      Mt = '[data-toggle="dropdown"]',
      Kt = ".dropdown form",
      Qt = ".dropdown-menu",
      Bt = ".navbar-nav",
      Vt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
      Yt = "top-start",
      zt = "top-end",
      Xt = "bottom-start",
      $t = "bottom-end",
      Gt = "right-start",
      Jt = "left-start",
      Zt = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
      },
      te = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)",
      },
      ee = (function () {
        function c(t, e) {
          (this._element = t),
            (this._popper = null),
            (this._config = this._getConfig(e)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners();
        }
        var t = c.prototype;
        return (
          (t.toggle = function () {
            if (!this._element.disabled && !g(this._element).hasClass(Ht)) {
              var t = g(this._menu).hasClass(Rt);
              c._clearMenus(), t || this.show(!0);
            }
          }),
          (t.show = function (t) {
            if (
              (void 0 === t && (t = !1),
              !(
                this._element.disabled ||
                g(this._element).hasClass(Ht) ||
                g(this._menu).hasClass(Rt)
              ))
            ) {
              var e = { relatedTarget: this._element },
                n = g.Event(jt.SHOW, e),
                i = c._getParentFromElement(this._element);
              if ((g(i).trigger(n), !n.isDefaultPrevented())) {
                if (!this._inNavbar && t) {
                  if ("undefined" == typeof u)
                    throw new TypeError(
                      "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                    );
                  var o = this._element;
                  "parent" === this._config.reference
                    ? (o = i)
                    : _.isElement(this._config.reference) &&
                      ((o = this._config.reference),
                      "undefined" != typeof this._config.reference.jquery &&
                        (o = this._config.reference[0])),
                    "scrollParent" !== this._config.boundary && g(i).addClass(qt),
                    (this._popper = new u(
                      o,
                      this._menu,
                      this._getPopperConfig()
                    ));
                }
                "ontouchstart" in document.documentElement &&
                  0 === g(i).closest(Bt).length &&
                  g(document.body).children().on("mouseover", null, g.noop),
                  this._element.focus(),
                  this._element.setAttribute("aria-expanded", !0),
                  g(this._menu).toggleClass(Rt),
                  g(i).toggleClass(Rt).trigger(g.Event(jt.SHOWN, e));
              }
            }
          }),
          (t.hide = function () {
            if (
              !this._element.disabled &&
              !g(this._element).hasClass(Ht) &&
              g(this._menu).hasClass(Rt)
            ) {
              var t = { relatedTarget: this._element },
                e = g.Event(jt.HIDE, t),
                n = c._getParentFromElement(this._element);
              g(n).trigger(e),
                e.isDefaultPrevented() ||
                  (this._popper && this._popper.destroy(),
                  g(this._menu).toggleClass(Rt),
                  g(n).toggleClass(Rt).trigger(g.Event(jt.HIDDEN, t)));
            }
          }),
          (t.dispose = function () {
            g.removeData(this._element, Nt),
              g(this._element).off(Ot),
              (this._element = null),
              (this._menu = null) !== this._popper &&
                (this._popper.destroy(), (this._popper = null));
          }),
          (t.update = function () {
            (this._inNavbar = this._detectNavbar()),
              null !== this._popper && this._popper.scheduleUpdate();
          }),
          (t._addEventListeners = function () {
            var e = this;
            g(this._element).on(jt.CLICK, function (t) {
              t.preventDefault(), t.stopPropagation(), e.toggle();
            });
          }),
          (t._getConfig = function (t) {
            return (
              (t = l(
                {},
                this.constructor.Default,
                {},
                g(this._element).data(),
                {},
                t
              )),
              _.typeCheckConfig(At, t, this.constructor.DefaultType),
              t
            );
          }),
          (t._getMenuElement = function () {
            if (!this._menu) {
              var t = c._getParentFromElement(this._element);
              t && (this._menu = t.querySelector(Qt));
            }
            return this._menu;
          }),
          (t._getPlacement = function () {
            var t = g(this._element.parentNode),
              e = Xt;
            return (
              t.hasClass(xt)
                ? ((e = Yt), g(this._menu).hasClass(Wt) && (e = zt))
                : t.hasClass(Ft)
                ? (e = Gt)
                : t.hasClass(Ut)
                ? (e = Jt)
                : g(this._menu).hasClass(Wt) && (e = $t),
              e
            );
          }),
          (t._detectNavbar = function () {
            return 0 < g(this._element).closest(".navbar").length;
          }),
          (t._getOffset = function () {
            var e = this,
              t = {};
            return (
              "function" == typeof this._config.offset
                ? (t.fn = function (t) {
                    return (
                      (t.offsets = l(
                        {},
                        t.offsets,
                        {},
                        e._config.offset(t.offsets, e._element) || {}
                      )),
                      t
                    );
                  })
                : (t.offset = this._config.offset),
              t
            );
          }),
          (t._getPopperConfig = function () {
            var t = {
              placement: this._getPlacement(),
              modifiers: {
                offset: this._getOffset(),
                flip: { enabled: this._config.flip },
                preventOverflow: { boundariesElement: this._config.boundary },
              },
            };
            return (
              "static" === this._config.display &&
                (t.modifiers.applyStyle = { enabled: !1 }),
              l({}, t, {}, this._config.popperConfig)
            );
          }),
          (c._jQueryInterface = function (e) {
            return this.each(function () {
              var t = g(this).data(Nt);
              if (
                (t ||
                  ((t = new c(this, "object" == typeof e ? e : null)),
                  g(this).data(Nt, t)),
                "string" == typeof e)
              ) {
                if ("undefined" == typeof t[e])
                  throw new TypeError('No method named "' + e + '"');
                t[e]();
              }
            });
          }),
          (c._clearMenus = function (t) {
            if (!t || (3 !== t.which && ("keyup" !== t.type || 9 === t.which)))
              for (
                var e = [].slice.call(document.querySelectorAll(Mt)),
                  n = 0,
                  i = e.length;
                n < i;
                n++
              ) {
                var o = c._getParentFromElement(e[n]),
                  r = g(e[n]).data(Nt),
                  s = { relatedTarget: e[n] };
                if ((t && "click" === t.type && (s.clickEvent = t), r)) {
                  var a = r._menu;
                  if (
                    g(o).hasClass(Rt) &&
                    !(
                      t &&
                      (("click" === t.type &&
                        /input|textarea/i.test(t.target.tagName)) ||
                        ("keyup" === t.type && 9 === t.which)) &&
                      g.contains(o, t.target)
                    )
                  ) {
                    var l = g.Event(jt.HIDE, s);
                    g(o).trigger(l),
                      l.isDefaultPrevented() ||
                        ("ontouchstart" in document.documentElement &&
                          g(document.body)
                            .children()
                            .off("mouseover", null, g.noop),
                        e[n].setAttribute("aria-expanded", "false"),
                        r._popper && r._popper.destroy(),
                        g(a).removeClass(Rt),
                        g(o).removeClass(Rt).trigger(g.Event(jt.HIDDEN, s)));
                  }
                }
              }
          }),
          (c._getParentFromElement = function (t) {
            var e,
              n = _.getSelectorFromElement(t);
            return n && (e = document.querySelector(n)), e || t.parentNode;
          }),
          (c._dataApiKeydownHandler = function (t) {
            if (
              (/input|textarea/i.test(t.target.tagName)
                ? !(
                    32 === t.which ||
                    (27 !== t.which &&
                      ((40 !== t.which && 38 !== t.which) ||
                        g(t.target).closest(Qt).length))
                  )
                : Lt.test(t.which)) &&
              (t.preventDefault(),
              t.stopPropagation(),
              !this.disabled && !g(this).hasClass(Ht))
            ) {
              var e = c._getParentFromElement(this),
                n = g(e).hasClass(Rt);
              if (n || 27 !== t.which)
                if (n && (!n || (27 !== t.which && 32 !== t.which))) {
                  var i = [].slice
                    .call(e.querySelectorAll(Vt))
                    .filter(function (t) {
                      return g(t).is(":visible");
                    });
                  if (0 !== i.length) {
                    var o = i.indexOf(t.target);
                    38 === t.which && 0 < o && o--,
                      40 === t.which && o < i.length - 1 && o++,
                      o < 0 && (o = 0),
                      i[o].focus();
                  }
                } else {
                  if (27 === t.which) {
                    var r = e.querySelector(Mt);
                    g(r).trigger("focus");
                  }
                  g(this).trigger("click");
                }
            }
          }),
          s(c, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return Zt;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return te;
              },
            },
          ]),
          c
        );
      })();
    g(document)
      .on(jt.KEYDOWN_DATA_API, Mt, ee._dataApiKeydownHandler)
      .on(jt.KEYDOWN_DATA_API, Qt, ee._dataApiKeydownHandler)
      .on(jt.CLICK_DATA_API + " " + jt.KEYUP_DATA_API, ee._clearMenus)
      .on(jt.CLICK_DATA_API, Mt, function (t) {
        t.preventDefault(),
          t.stopPropagation(),
          ee._jQueryInterface.call(g(this), "toggle");
      })
      .on(jt.CLICK_DATA_API, Kt, function (t) {
        t.stopPropagation();
      }),
      (g.fn[At] = ee._jQueryInterface),
      (g.fn[At].Constructor = ee),
      (g.fn[At].noConflict = function () {
        return (g.fn[At] = Pt), ee._jQueryInterface;
      });
    var ne = "modal",
      ie = "bs.modal",
      oe = "." + ie,
      re = g.fn[ne],
      se = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
      ae = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean",
      },
      le = {
        HIDE: "hide" + oe,
        HIDE_PREVENTED: "hidePrevented" + oe,
        HIDDEN: "hidden" + oe,
        SHOW: "show" + oe,
        SHOWN: "shown" + oe,
        FOCUSIN: "focusin" + oe,
        RESIZE: "resize" + oe,
        CLICK_DISMISS: "click.dismiss" + oe,
        KEYDOWN_DISMISS: "keydown.dismiss" + oe,
        MOUSEUP_DISMISS: "mouseup.dismiss" + oe,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + oe,
        CLICK_DATA_API: "click" + oe + ".data-api",
      },
      ce = "modal-dialog-scrollable",
      he = "modal-scrollbar-measure",
      ue = "modal-backdrop",
      fe = "modal-open",
      de = "fade",
      ge = "show",
      _e = "modal-static",
      me = ".modal-dialog",
      pe = ".modal-body",
      ve = '[data-toggle="modal"]',
      ye = '[data-dismiss="modal"]',
      Ee = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      Ce = ".sticky-top",
      Te = (function () {
        function o(t, e) {
          (this._config = this._getConfig(e)),
            (this._element = t),
            (this._dialog = t.querySelector(me)),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._isTransitioning = !1),
            (this._scrollbarWidth = 0);
        }
        var t = o.prototype;
        return (
          (t.toggle = function (t) {
            return this._isShown ? this.hide() : this.show(t);
          }),
          (t.show = function (t) {
            var e = this;
            if (!this._isShown && !this._isTransitioning) {
              g(this._element).hasClass(de) && (this._isTransitioning = !0);
              var n = g.Event(le.SHOW, { relatedTarget: t });
              g(this._element).trigger(n),
                this._isShown ||
                  n.isDefaultPrevented() ||
                  ((this._isShown = !0),
                  this._checkScrollbar(),
                  this._setScrollbar(),
                  this._adjustDialog(),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  g(this._element).on(le.CLICK_DISMISS, ye, function (t) {
                    return e.hide(t);
                  }),
                  g(this._dialog).on(le.MOUSEDOWN_DISMISS, function () {
                    g(e._element).one(le.MOUSEUP_DISMISS, function (t) {
                      g(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
                    });
                  }),
                  this._showBackdrop(function () {
                    return e._showElement(t);
                  }));
            }
          }),
          (t.hide = function (t) {
            var e = this;
            if (
              (t && t.preventDefault(), this._isShown && !this._isTransitioning)
            ) {
              var n = g.Event(le.HIDE);
              if (
                (g(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented())
              ) {
                this._isShown = !1;
                var i = g(this._element).hasClass(de);
                if (
                  (i && (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  g(document).off(le.FOCUSIN),
                  g(this._element).removeClass(ge),
                  g(this._element).off(le.CLICK_DISMISS),
                  g(this._dialog).off(le.MOUSEDOWN_DISMISS),
                  i)
                ) {
                  var o = _.getTransitionDurationFromElement(this._element);
                  g(this._element)
                    .one(_.TRANSITION_END, function (t) {
                      return e._hideModal(t);
                    })
                    .emulateTransitionEnd(o);
                } else this._hideModal();
              }
            }
          }),
          (t.dispose = function () {
            [window, this._element, this._dialog].forEach(function (t) {
              return g(t).off(oe);
            }),
              g(document).off(le.FOCUSIN),
              g.removeData(this._element, ie),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._isTransitioning = null),
              (this._scrollbarWidth = null);
          }),
          (t.handleUpdate = function () {
            this._adjustDialog();
          }),
          (t._getConfig = function (t) {
            return (t = l({}, se, {}, t)), _.typeCheckConfig(ne, t, ae), t;
          }),
          (t._triggerBackdropTransition = function () {
            var t = this;
            if ("static" === this._config.backdrop) {
              var e = g.Event(le.HIDE_PREVENTED);
              if ((g(this._element).trigger(e), e.defaultPrevented)) return;
              this._element.classList.add(_e);
              var n = _.getTransitionDurationFromElement(this._element);
              g(this._element)
                .one(_.TRANSITION_END, function () {
                  t._element.classList.remove(_e);
                })
                .emulateTransitionEnd(n),
                this._element.focus();
            } else this.hide();
          }),
          (t._showElement = function (t) {
            var e = this,
              n = g(this._element).hasClass(de),
              i = this._dialog ? this._dialog.querySelector(pe) : null;
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = "block"),
              this._element.removeAttribute("aria-hidden"),
              this._element.setAttribute("aria-modal", !0),
              g(this._dialog).hasClass(ce) && i
                ? (i.scrollTop = 0)
                : (this._element.scrollTop = 0),
              n && _.reflow(this._element),
              g(this._element).addClass(ge),
              this._config.focus && this._enforceFocus();
            function o() {
              e._config.focus && e._element.focus(),
                (e._isTransitioning = !1),
                g(e._element).trigger(r);
            }
            var r = g.Event(le.SHOWN, { relatedTarget: t });
            if (n) {
              var s = _.getTransitionDurationFromElement(this._dialog);
              g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(s);
            } else o();
          }),
          (t._enforceFocus = function () {
            var e = this;
            g(document)
              .off(le.FOCUSIN)
              .on(le.FOCUSIN, function (t) {
                document !== t.target &&
                  e._element !== t.target &&
                  0 === g(e._element).has(t.target).length &&
                  e._element.focus();
              });
          }),
          (t._setEscapeEvent = function () {
            var e = this;
            this._isShown && this._config.keyboard
              ? g(this._element).on(le.KEYDOWN_DISMISS, function (t) {
                  27 === t.which && e._triggerBackdropTransition();
                })
              : this._isShown || g(this._element).off(le.KEYDOWN_DISMISS);
          }),
          (t._setResizeEvent = function () {
            var e = this;
            this._isShown
              ? g(window).on(le.RESIZE, function (t) {
                  return e.handleUpdate(t);
                })
              : g(window).off(le.RESIZE);
          }),
          (t._hideModal = function () {
            var t = this;
            (this._element.style.display = "none"),
              this._element.setAttribute("aria-hidden", !0),
              this._element.removeAttribute("aria-modal"),
              (this._isTransitioning = !1),
              this._showBackdrop(function () {
                g(document.body).removeClass(fe),
                  t._resetAdjustments(),
                  t._resetScrollbar(),
                  g(t._element).trigger(le.HIDDEN);
              });
          }),
          (t._removeBackdrop = function () {
            this._backdrop &&
              (g(this._backdrop).remove(), (this._backdrop = null));
          }),
          (t._showBackdrop = function (t) {
            var e = this,
              n = g(this._element).hasClass(de) ? de : "";
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement("div")),
                (this._backdrop.className = ue),
                n && this._backdrop.classList.add(n),
                g(this._backdrop).appendTo(document.body),
                g(this._element).on(le.CLICK_DISMISS, function (t) {
                  e._ignoreBackdropClick
                    ? (e._ignoreBackdropClick = !1)
                    : t.target === t.currentTarget &&
                      e._triggerBackdropTransition();
                }),
                n && _.reflow(this._backdrop),
                g(this._backdrop).addClass(ge),
                !t)
              )
                return;
              if (!n) return void t();
              var i = _.getTransitionDurationFromElement(this._backdrop);
              g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i);
            } else if (!this._isShown && this._backdrop) {
              g(this._backdrop).removeClass(ge);
              var o = function () {
                e._removeBackdrop(), t && t();
              };
              if (g(this._element).hasClass(de)) {
                var r = _.getTransitionDurationFromElement(this._backdrop);
                g(this._backdrop)
                  .one(_.TRANSITION_END, o)
                  .emulateTransitionEnd(r);
              } else o();
            } else t && t();
          }),
          (t._adjustDialog = function () {
            var t =
              this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing &&
              t &&
              (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
              this._isBodyOverflowing &&
                !t &&
                (this._element.style.paddingRight = this._scrollbarWidth + "px");
          }),
          (t._resetAdjustments = function () {
            (this._element.style.paddingLeft = ""),
              (this._element.style.paddingRight = "");
          }),
          (t._checkScrollbar = function () {
            var t = document.body.getBoundingClientRect();
            (this._isBodyOverflowing = t.left + t.right < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (t._setScrollbar = function () {
            var o = this;
            if (this._isBodyOverflowing) {
              var t = [].slice.call(document.querySelectorAll(Ee)),
                e = [].slice.call(document.querySelectorAll(Ce));
              g(t).each(function (t, e) {
                var n = e.style.paddingRight,
                  i = g(e).css("padding-right");
                g(e)
                  .data("padding-right", n)
                  .css("padding-right", parseFloat(i) + o._scrollbarWidth + "px");
              }),
                g(e).each(function (t, e) {
                  var n = e.style.marginRight,
                    i = g(e).css("margin-right");
                  g(e)
                    .data("margin-right", n)
                    .css(
                      "margin-right",
                      parseFloat(i) - o._scrollbarWidth + "px"
                    );
                });
              var n = document.body.style.paddingRight,
                i = g(document.body).css("padding-right");
              g(document.body)
                .data("padding-right", n)
                .css(
                  "padding-right",
                  parseFloat(i) + this._scrollbarWidth + "px"
                );
            }
            g(document.body).addClass(fe);
          }),
          (t._resetScrollbar = function () {
            var t = [].slice.call(document.querySelectorAll(Ee));
            g(t).each(function (t, e) {
              var n = g(e).data("padding-right");
              g(e).removeData("padding-right"), (e.style.paddingRight = n || "");
            });
            var e = [].slice.call(document.querySelectorAll("" + Ce));
            g(e).each(function (t, e) {
              var n = g(e).data("margin-right");
              "undefined" != typeof n &&
                g(e).css("margin-right", n).removeData("margin-right");
            });
            var n = g(document.body).data("padding-right");
            g(document.body).removeData("padding-right"),
              (document.body.style.paddingRight = n || "");
          }),
          (t._getScrollbarWidth = function () {
            var t = document.createElement("div");
            (t.className = he), document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e;
          }),
          (o._jQueryInterface = function (n, i) {
            return this.each(function () {
              var t = g(this).data(ie),
                e = l(
                  {},
                  se,
                  {},
                  g(this).data(),
                  {},
                  "object" == typeof n && n ? n : {}
                );
              if (
                (t || ((t = new o(this, e)), g(this).data(ie, t)),
                "string" == typeof n)
              ) {
                if ("undefined" == typeof t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n](i);
              } else e.show && t.show(i);
            });
          }),
          s(o, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return se;
              },
            },
          ]),
          o
        );
      })();
    g(document).on(le.CLICK_DATA_API, ve, function (t) {
      var e,
        n = this,
        i = _.getSelectorFromElement(this);
      i && (e = document.querySelector(i));
      var o = g(e).data(ie) ? "toggle" : l({}, g(e).data(), {}, g(this).data());
      ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
      var r = g(e).one(le.SHOW, function (t) {
        t.isDefaultPrevented() ||
          r.one(le.HIDDEN, function () {
            g(n).is(":visible") && n.focus();
          });
      });
      Te._jQueryInterface.call(g(e), o, this);
    }),
      (g.fn[ne] = Te._jQueryInterface),
      (g.fn[ne].Constructor = Te),
      (g.fn[ne].noConflict = function () {
        return (g.fn[ne] = re), Te._jQueryInterface;
      });
    var be = [
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ],
      Se = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      De = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      Ie = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    function we(t, r, e) {
      if (0 === t.length) return t;
      if (e && "function" == typeof e) return e(t);
      for (
        var n = new window.DOMParser().parseFromString(t, "text/html"),
          s = Object.keys(r),
          a = [].slice.call(n.body.querySelectorAll("*")),
          i = function (t) {
            var e = a[t],
              n = e.nodeName.toLowerCase();
            if (-1 === s.indexOf(e.nodeName.toLowerCase()))
              return e.parentNode.removeChild(e), "continue";
            var i = [].slice.call(e.attributes),
              o = [].concat(r["*"] || [], r[n] || []);
            i.forEach(function (t) {
              !(function (t, e) {
                var n = t.nodeName.toLowerCase();
                if (-1 !== e.indexOf(n))
                  return (
                    -1 === be.indexOf(n) ||
                    Boolean(t.nodeValue.match(De) || t.nodeValue.match(Ie))
                  );
                for (
                  var i = e.filter(function (t) {
                      return t instanceof RegExp;
                    }),
                    o = 0,
                    r = i.length;
                  o < r;
                  o++
                )
                  if (n.match(i[o])) return !0;
                return !1;
              })(t, o) && e.removeAttribute(t.nodeName);
            });
          },
          o = 0,
          l = a.length;
        o < l;
        o++
      )
        i(o);
      return n.body.innerHTML;
    }
    var Ae = "tooltip",
      Ne = "bs.tooltip",
      Oe = "." + Ne,
      ke = g.fn[Ae],
      Pe = "bs-tooltip",
      Le = new RegExp("(^|\\s)" + Pe + "\\S+", "g"),
      je = ["sanitize", "whiteList", "sanitizeFn"],
      He = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)",
      },
      Re = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left",
      },
      xe = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: Se,
        popperConfig: null,
      },
      Fe = "show",
      Ue = "out",
      We = {
        HIDE: "hide" + Oe,
        HIDDEN: "hidden" + Oe,
        SHOW: "show" + Oe,
        SHOWN: "shown" + Oe,
        INSERTED: "inserted" + Oe,
        CLICK: "click" + Oe,
        FOCUSIN: "focusin" + Oe,
        FOCUSOUT: "focusout" + Oe,
        MOUSEENTER: "mouseenter" + Oe,
        MOUSELEAVE: "mouseleave" + Oe,
      },
      qe = "fade",
      Me = "show",
      Ke = ".tooltip-inner",
      Qe = ".arrow",
      Be = "hover",
      Ve = "focus",
      Ye = "click",
      ze = "manual",
      Xe = (function () {
        function i(t, e) {
          if ("undefined" == typeof u)
            throw new TypeError(
              "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
            );
          (this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ""),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this.element = t),
            (this.config = this._getConfig(e)),
            (this.tip = null),
            this._setListeners();
        }
        var t = i.prototype;
        return (
          (t.enable = function () {
            this._isEnabled = !0;
          }),
          (t.disable = function () {
            this._isEnabled = !1;
          }),
          (t.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled;
          }),
          (t.toggle = function (t) {
            if (this._isEnabled)
              if (t) {
                var e = this.constructor.DATA_KEY,
                  n = g(t.currentTarget).data(e);
                n ||
                  ((n = new this.constructor(
                    t.currentTarget,
                    this._getDelegateConfig()
                  )),
                  g(t.currentTarget).data(e, n)),
                  (n._activeTrigger.click = !n._activeTrigger.click),
                  n._isWithActiveTrigger()
                    ? n._enter(null, n)
                    : n._leave(null, n);
              } else {
                if (g(this.getTipElement()).hasClass(Me))
                  return void this._leave(null, this);
                this._enter(null, this);
              }
          }),
          (t.dispose = function () {
            clearTimeout(this._timeout),
              g.removeData(this.element, this.constructor.DATA_KEY),
              g(this.element).off(this.constructor.EVENT_KEY),
              g(this.element)
                .closest(".modal")
                .off("hide.bs.modal", this._hideModalHandler),
              this.tip && g(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null),
              this._popper && this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null);
          }),
          (t.show = function () {
            var e = this;
            if ("none" === g(this.element).css("display"))
              throw new Error("Please use show on visible elements");
            var t = g.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              g(this.element).trigger(t);
              var n = _.findShadowRoot(this.element),
                i = g.contains(
                  null !== n ? n : this.element.ownerDocument.documentElement,
                  this.element
                );
              if (t.isDefaultPrevented() || !i) return;
              var o = this.getTipElement(),
                r = _.getUID(this.constructor.NAME);
              o.setAttribute("id", r),
                this.element.setAttribute("aria-describedby", r),
                this.setContent(),
                this.config.animation && g(o).addClass(qe);
              var s =
                  "function" == typeof this.config.placement
                    ? this.config.placement.call(this, o, this.element)
                    : this.config.placement,
                a = this._getAttachment(s);
              this.addAttachmentClass(a);
              var l = this._getContainer();
              g(o).data(this.constructor.DATA_KEY, this),
                g.contains(
                  this.element.ownerDocument.documentElement,
                  this.tip
                ) || g(o).appendTo(l),
                g(this.element).trigger(this.constructor.Event.INSERTED),
                (this._popper = new u(this.element, o, this._getPopperConfig(a))),
                g(o).addClass(Me),
                "ontouchstart" in document.documentElement &&
                  g(document.body).children().on("mouseover", null, g.noop);
              var c = function () {
                e.config.animation && e._fixTransition();
                var t = e._hoverState;
                (e._hoverState = null),
                  g(e.element).trigger(e.constructor.Event.SHOWN),
                  t === Ue && e._leave(null, e);
              };
              if (g(this.tip).hasClass(qe)) {
                var h = _.getTransitionDurationFromElement(this.tip);
                g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h);
              } else c();
            }
          }),
          (t.hide = function (t) {
            function e() {
              n._hoverState !== Fe && i.parentNode && i.parentNode.removeChild(i),
                n._cleanTipClass(),
                n.element.removeAttribute("aria-describedby"),
                g(n.element).trigger(n.constructor.Event.HIDDEN),
                null !== n._popper && n._popper.destroy(),
                t && t();
            }
            var n = this,
              i = this.getTipElement(),
              o = g.Event(this.constructor.Event.HIDE);
            if ((g(this.element).trigger(o), !o.isDefaultPrevented())) {
              if (
                (g(i).removeClass(Me),
                "ontouchstart" in document.documentElement &&
                  g(document.body).children().off("mouseover", null, g.noop),
                (this._activeTrigger[Ye] = !1),
                (this._activeTrigger[Ve] = !1),
                (this._activeTrigger[Be] = !1),
                g(this.tip).hasClass(qe))
              ) {
                var r = _.getTransitionDurationFromElement(i);
                g(i).one(_.TRANSITION_END, e).emulateTransitionEnd(r);
              } else e();
              this._hoverState = "";
            }
          }),
          (t.update = function () {
            null !== this._popper && this._popper.scheduleUpdate();
          }),
          (t.isWithContent = function () {
            return Boolean(this.getTitle());
          }),
          (t.addAttachmentClass = function (t) {
            g(this.getTipElement()).addClass(Pe + "-" + t);
          }),
          (t.getTipElement = function () {
            return (this.tip = this.tip || g(this.config.template)[0]), this.tip;
          }),
          (t.setContent = function () {
            var t = this.getTipElement();
            this.setElementContent(g(t.querySelectorAll(Ke)), this.getTitle()),
              g(t).removeClass(qe + " " + Me);
          }),
          (t.setElementContent = function (t, e) {
            "object" != typeof e || (!e.nodeType && !e.jquery)
              ? this.config.html
                ? (this.config.sanitize &&
                    (e = we(e, this.config.whiteList, this.config.sanitizeFn)),
                  t.html(e))
                : t.text(e)
              : this.config.html
              ? g(e).parent().is(t) || t.empty().append(e)
              : t.text(g(e).text());
          }),
          (t.getTitle = function () {
            var t = this.element.getAttribute("data-original-title");
            return (t =
              t ||
              ("function" == typeof this.config.title
                ? this.config.title.call(this.element)
                : this.config.title));
          }),
          (t._getPopperConfig = function (t) {
            var e = this;
            return l(
              {},
              {
                placement: t,
                modifiers: {
                  offset: this._getOffset(),
                  flip: { behavior: this.config.fallbackPlacement },
                  arrow: { element: Qe },
                  preventOverflow: { boundariesElement: this.config.boundary },
                },
                onCreate: function (t) {
                  t.originalPlacement !== t.placement &&
                    e._handlePopperPlacementChange(t);
                },
                onUpdate: function (t) {
                  return e._handlePopperPlacementChange(t);
                },
              },
              {},
              this.config.popperConfig
            );
          }),
          (t._getOffset = function () {
            var e = this,
              t = {};
            return (
              "function" == typeof this.config.offset
                ? (t.fn = function (t) {
                    return (
                      (t.offsets = l(
                        {},
                        t.offsets,
                        {},
                        e.config.offset(t.offsets, e.element) || {}
                      )),
                      t
                    );
                  })
                : (t.offset = this.config.offset),
              t
            );
          }),
          (t._getContainer = function () {
            return !1 === this.config.container
              ? document.body
              : _.isElement(this.config.container)
              ? g(this.config.container)
              : g(document).find(this.config.container);
          }),
          (t._getAttachment = function (t) {
            return Re[t.toUpperCase()];
          }),
          (t._setListeners = function () {
            var i = this;
            this.config.trigger.split(" ").forEach(function (t) {
              if ("click" === t)
                g(i.element).on(
                  i.constructor.Event.CLICK,
                  i.config.selector,
                  function (t) {
                    return i.toggle(t);
                  }
                );
              else if (t !== ze) {
                var e =
                    t === Be
                      ? i.constructor.Event.MOUSEENTER
                      : i.constructor.Event.FOCUSIN,
                  n =
                    t === Be
                      ? i.constructor.Event.MOUSELEAVE
                      : i.constructor.Event.FOCUSOUT;
                g(i.element)
                  .on(e, i.config.selector, function (t) {
                    return i._enter(t);
                  })
                  .on(n, i.config.selector, function (t) {
                    return i._leave(t);
                  });
              }
            }),
              (this._hideModalHandler = function () {
                i.element && i.hide();
              }),
              g(this.element)
                .closest(".modal")
                .on("hide.bs.modal", this._hideModalHandler),
              this.config.selector
                ? (this.config = l({}, this.config, {
                    trigger: "manual",
                    selector: "",
                  }))
                : this._fixTitle();
          }),
          (t._fixTitle = function () {
            var t = typeof this.element.getAttribute("data-original-title");
            (!this.element.getAttribute("title") && "string" == t) ||
              (this.element.setAttribute(
                "data-original-title",
                this.element.getAttribute("title") || ""
              ),
              this.element.setAttribute("title", ""));
          }),
          (t._enter = function (t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || g(t.currentTarget).data(n)) ||
              ((e = new this.constructor(
                t.currentTarget,
                this._getDelegateConfig()
              )),
              g(t.currentTarget).data(n, e)),
              t && (e._activeTrigger["focusin" === t.type ? Ve : Be] = !0),
              g(e.getTipElement()).hasClass(Me) || e._hoverState === Fe
                ? (e._hoverState = Fe)
                : (clearTimeout(e._timeout),
                  (e._hoverState = Fe),
                  e.config.delay && e.config.delay.show
                    ? (e._timeout = setTimeout(function () {
                        e._hoverState === Fe && e.show();
                      }, e.config.delay.show))
                    : e.show());
          }),
          (t._leave = function (t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || g(t.currentTarget).data(n)) ||
              ((e = new this.constructor(
                t.currentTarget,
                this._getDelegateConfig()
              )),
              g(t.currentTarget).data(n, e)),
              t && (e._activeTrigger["focusout" === t.type ? Ve : Be] = !1),
              e._isWithActiveTrigger() ||
                (clearTimeout(e._timeout),
                (e._hoverState = Ue),
                e.config.delay && e.config.delay.hide
                  ? (e._timeout = setTimeout(function () {
                      e._hoverState === Ue && e.hide();
                    }, e.config.delay.hide))
                  : e.hide());
          }),
          (t._isWithActiveTrigger = function () {
            for (var t in this._activeTrigger)
              if (this._activeTrigger[t]) return !0;
            return !1;
          }),
          (t._getConfig = function (t) {
            var e = g(this.element).data();
            return (
              Object.keys(e).forEach(function (t) {
                -1 !== je.indexOf(t) && delete e[t];
              }),
              "number" ==
                typeof (t = l(
                  {},
                  this.constructor.Default,
                  {},
                  e,
                  {},
                  "object" == typeof t && t ? t : {}
                )).delay && (t.delay = { show: t.delay, hide: t.delay }),
              "number" == typeof t.title && (t.title = t.title.toString()),
              "number" == typeof t.content && (t.content = t.content.toString()),
              _.typeCheckConfig(Ae, t, this.constructor.DefaultType),
              t.sanitize &&
                (t.template = we(t.template, t.whiteList, t.sanitizeFn)),
              t
            );
          }),
          (t._getDelegateConfig = function () {
            var t = {};
            if (this.config)
              for (var e in this.config)
                this.constructor.Default[e] !== this.config[e] &&
                  (t[e] = this.config[e]);
            return t;
          }),
          (t._cleanTipClass = function () {
            var t = g(this.getTipElement()),
              e = t.attr("class").match(Le);
            null !== e && e.length && t.removeClass(e.join(""));
          }),
          (t._handlePopperPlacementChange = function (t) {
            var e = t.instance;
            (this.tip = e.popper),
              this._cleanTipClass(),
              this.addAttachmentClass(this._getAttachment(t.placement));
          }),
          (t._fixTransition = function () {
            var t = this.getTipElement(),
              e = this.config.animation;
            null === t.getAttribute("x-placement") &&
              (g(t).removeClass(qe),
              (this.config.animation = !1),
              this.hide(),
              this.show(),
              (this.config.animation = e));
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = g(this).data(Ne),
                e = "object" == typeof n && n;
              if (
                (t || !/dispose|hide/.test(n)) &&
                (t || ((t = new i(this, e)), g(this).data(Ne, t)),
                "string" == typeof n)
              ) {
                if ("undefined" == typeof t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              }
            });
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return xe;
              },
            },
            {
              key: "NAME",
              get: function () {
                return Ae;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return Ne;
              },
            },
            {
              key: "Event",
              get: function () {
                return We;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return Oe;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return He;
              },
            },
          ]),
          i
        );
      })();
    (g.fn[Ae] = Xe._jQueryInterface),
      (g.fn[Ae].Constructor = Xe),
      (g.fn[Ae].noConflict = function () {
        return (g.fn[Ae] = ke), Xe._jQueryInterface;
      });
    var $e = "popover",
      Ge = "bs.popover",
      Je = "." + Ge,
      Ze = g.fn[$e],
      tn = "bs-popover",
      en = new RegExp("(^|\\s)" + tn + "\\S+", "g"),
      nn = l({}, Xe.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      }),
      on = l({}, Xe.DefaultType, { content: "(string|element|function)" }),
      rn = "fade",
      sn = "show",
      an = ".popover-header",
      ln = ".popover-body",
      cn = {
        HIDE: "hide" + Je,
        HIDDEN: "hidden" + Je,
        SHOW: "show" + Je,
        SHOWN: "shown" + Je,
        INSERTED: "inserted" + Je,
        CLICK: "click" + Je,
        FOCUSIN: "focusin" + Je,
        FOCUSOUT: "focusout" + Je,
        MOUSEENTER: "mouseenter" + Je,
        MOUSELEAVE: "mouseleave" + Je,
      },
      hn = (function (t) {
        function i() {
          return t.apply(this, arguments) || this;
        }
        !(function (t, e) {
          (t.prototype = Object.create(e.prototype)),
            ((t.prototype.constructor = t).__proto__ = e);
        })(i, t);
        var e = i.prototype;
        return (
          (e.isWithContent = function () {
            return this.getTitle() || this._getContent();
          }),
          (e.addAttachmentClass = function (t) {
            g(this.getTipElement()).addClass(tn + "-" + t);
          }),
          (e.getTipElement = function () {
            return (this.tip = this.tip || g(this.config.template)[0]), this.tip;
          }),
          (e.setContent = function () {
            var t = g(this.getTipElement());
            this.setElementContent(t.find(an), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this.element)),
              this.setElementContent(t.find(ln), e),
              t.removeClass(rn + " " + sn);
          }),
          (e._getContent = function () {
            return (
              this.element.getAttribute("data-content") || this.config.content
            );
          }),
          (e._cleanTipClass = function () {
            var t = g(this.getTipElement()),
              e = t.attr("class").match(en);
            null !== e && 0 < e.length && t.removeClass(e.join(""));
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = g(this).data(Ge),
                e = "object" == typeof n ? n : null;
              if (
                (t || !/dispose|hide/.test(n)) &&
                (t || ((t = new i(this, e)), g(this).data(Ge, t)),
                "string" == typeof n)
              ) {
                if ("undefined" == typeof t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              }
            });
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return nn;
              },
            },
            {
              key: "NAME",
              get: function () {
                return $e;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return Ge;
              },
            },
            {
              key: "Event",
              get: function () {
                return cn;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return Je;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return on;
              },
            },
          ]),
          i
        );
      })(Xe);
    (g.fn[$e] = hn._jQueryInterface),
      (g.fn[$e].Constructor = hn),
      (g.fn[$e].noConflict = function () {
        return (g.fn[$e] = Ze), hn._jQueryInterface;
      });
    var un = "scrollspy",
      fn = "bs.scrollspy",
      dn = "." + fn,
      gn = g.fn[un],
      _n = { offset: 10, method: "auto", target: "" },
      mn = { offset: "number", method: "string", target: "(string|element)" },
      pn = {
        ACTIVATE: "activate" + dn,
        SCROLL: "scroll" + dn,
        LOAD_DATA_API: "load" + dn + ".data-api",
      },
      vn = "dropdown-item",
      yn = "active",
      En = '[data-spy="scroll"]',
      Cn = ".nav, .list-group",
      Tn = ".nav-link",
      bn = ".nav-item",
      Sn = ".list-group-item",
      Dn = ".dropdown",
      In = ".dropdown-item",
      wn = ".dropdown-toggle",
      An = "offset",
      Nn = "position",
      On = (function () {
        function n(t, e) {
          var n = this;
          (this._element = t),
            (this._scrollElement = "BODY" === t.tagName ? window : t),
            (this._config = this._getConfig(e)),
            (this._selector =
              this._config.target +
              " " +
              Tn +
              "," +
              this._config.target +
              " " +
              Sn +
              "," +
              this._config.target +
              " " +
              In),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            g(this._scrollElement).on(pn.SCROLL, function (t) {
              return n._process(t);
            }),
            this.refresh(),
            this._process();
        }
        var t = n.prototype;
        return (
          (t.refresh = function () {
            var e = this,
              t = this._scrollElement === this._scrollElement.window ? An : Nn,
              o = "auto" === this._config.method ? t : this._config.method,
              r = o === Nn ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              [].slice
                .call(document.querySelectorAll(this._selector))
                .map(function (t) {
                  var e,
                    n = _.getSelectorFromElement(t);
                  if ((n && (e = document.querySelector(n)), e)) {
                    var i = e.getBoundingClientRect();
                    if (i.width || i.height) return [g(e)[o]().top + r, n];
                  }
                  return null;
                })
                .filter(function (t) {
                  return t;
                })
                .sort(function (t, e) {
                  return t[0] - e[0];
                })
                .forEach(function (t) {
                  e._offsets.push(t[0]), e._targets.push(t[1]);
                });
          }),
          (t.dispose = function () {
            g.removeData(this._element, fn),
              g(this._scrollElement).off(dn),
              (this._element = null),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (t._getConfig = function (t) {
            if (
              "string" !=
              typeof (t = l({}, _n, {}, "object" == typeof t && t ? t : {}))
                .target
            ) {
              var e = g(t.target).attr("id");
              e || ((e = _.getUID(un)), g(t.target).attr("id", e)),
                (t.target = "#" + e);
            }
            return _.typeCheckConfig(un, t, mn), t;
          }),
          (t._getScrollTop = function () {
            return this._scrollElement === window
              ? this._scrollElement.pageYOffset
              : this._scrollElement.scrollTop;
          }),
          (t._getScrollHeight = function () {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              )
            );
          }),
          (t._getOffsetHeight = function () {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (t._process = function () {
            var t = this._getScrollTop() + this._config.offset,
              e = this._getScrollHeight(),
              n = this._config.offset + e - this._getOffsetHeight();
            if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
              var i = this._targets[this._targets.length - 1];
              this._activeTarget !== i && this._activate(i);
            } else {
              if (
                this._activeTarget &&
                t < this._offsets[0] &&
                0 < this._offsets[0]
              )
                return (this._activeTarget = null), void this._clear();
              for (var o = this._offsets.length; o--; ) {
                this._activeTarget !== this._targets[o] &&
                  t >= this._offsets[o] &&
                  ("undefined" == typeof this._offsets[o + 1] ||
                    t < this._offsets[o + 1]) &&
                  this._activate(this._targets[o]);
              }
            }
          }),
          (t._activate = function (e) {
            (this._activeTarget = e), this._clear();
            var t = this._selector.split(",").map(function (t) {
                return (
                  t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                );
              }),
              n = g([].slice.call(document.querySelectorAll(t.join(","))));
            n.hasClass(vn)
              ? (n.closest(Dn).find(wn).addClass(yn), n.addClass(yn))
              : (n.addClass(yn),
                n
                  .parents(Cn)
                  .prev(Tn + ", " + Sn)
                  .addClass(yn),
                n.parents(Cn).prev(bn).children(Tn).addClass(yn)),
              g(this._scrollElement).trigger(pn.ACTIVATE, { relatedTarget: e });
          }),
          (t._clear = function () {
            [].slice
              .call(document.querySelectorAll(this._selector))
              .filter(function (t) {
                return t.classList.contains(yn);
              })
              .forEach(function (t) {
                return t.classList.remove(yn);
              });
          }),
          (n._jQueryInterface = function (e) {
            return this.each(function () {
              var t = g(this).data(fn);
              if (
                (t ||
                  ((t = new n(this, "object" == typeof e && e)),
                  g(this).data(fn, t)),
                "string" == typeof e)
              ) {
                if ("undefined" == typeof t[e])
                  throw new TypeError('No method named "' + e + '"');
                t[e]();
              }
            });
          }),
          s(n, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return _n;
              },
            },
          ]),
          n
        );
      })();
    g(window).on(pn.LOAD_DATA_API, function () {
      for (
        var t = [].slice.call(document.querySelectorAll(En)), e = t.length;
        e--;
  
      ) {
        var n = g(t[e]);
        On._jQueryInterface.call(n, n.data());
      }
    }),
      (g.fn[un] = On._jQueryInterface),
      (g.fn[un].Constructor = On),
      (g.fn[un].noConflict = function () {
        return (g.fn[un] = gn), On._jQueryInterface;
      });
    var kn = "bs.tab",
      Pn = "." + kn,
      Ln = g.fn.tab,
      jn = {
        HIDE: "hide" + Pn,
        HIDDEN: "hidden" + Pn,
        SHOW: "show" + Pn,
        SHOWN: "shown" + Pn,
        CLICK_DATA_API: "click" + Pn + ".data-api",
      },
      Hn = "dropdown-menu",
      Rn = "active",
      xn = "disabled",
      Fn = "fade",
      Un = "show",
      Wn = ".dropdown",
      qn = ".nav, .list-group",
      Mn = ".active",
      Kn = "> li > .active",
      Qn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      Bn = ".dropdown-toggle",
      Vn = "> .dropdown-menu .active",
      Yn = (function () {
        function i(t) {
          this._element = t;
        }
        var t = i.prototype;
        return (
          (t.show = function () {
            var n = this;
            if (
              !(
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                  g(this._element).hasClass(Rn)) ||
                g(this._element).hasClass(xn)
              )
            ) {
              var t,
                i,
                e = g(this._element).closest(qn)[0],
                o = _.getSelectorFromElement(this._element);
              if (e) {
                var r = "UL" === e.nodeName || "OL" === e.nodeName ? Kn : Mn;
                i = (i = g.makeArray(g(e).find(r)))[i.length - 1];
              }
              var s = g.Event(jn.HIDE, { relatedTarget: this._element }),
                a = g.Event(jn.SHOW, { relatedTarget: i });
              if (
                (i && g(i).trigger(s),
                g(this._element).trigger(a),
                !a.isDefaultPrevented() && !s.isDefaultPrevented())
              ) {
                o && (t = document.querySelector(o)),
                  this._activate(this._element, e);
                var l = function () {
                  var t = g.Event(jn.HIDDEN, { relatedTarget: n._element }),
                    e = g.Event(jn.SHOWN, { relatedTarget: i });
                  g(i).trigger(t), g(n._element).trigger(e);
                };
                t ? this._activate(t, t.parentNode, l) : l();
              }
            }
          }),
          (t.dispose = function () {
            g.removeData(this._element, kn), (this._element = null);
          }),
          (t._activate = function (t, e, n) {
            function i() {
              return o._transitionComplete(t, r, n);
            }
            var o = this,
              r = (!e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
                ? g(e).children(Mn)
                : g(e).find(Kn))[0],
              s = n && r && g(r).hasClass(Fn);
            if (r && s) {
              var a = _.getTransitionDurationFromElement(r);
              g(r)
                .removeClass(Un)
                .one(_.TRANSITION_END, i)
                .emulateTransitionEnd(a);
            } else i();
          }),
          (t._transitionComplete = function (t, e, n) {
            if (e) {
              g(e).removeClass(Rn);
              var i = g(e.parentNode).find(Vn)[0];
              i && g(i).removeClass(Rn),
                "tab" === e.getAttribute("role") &&
                  e.setAttribute("aria-selected", !1);
            }
            if (
              (g(t).addClass(Rn),
              "tab" === t.getAttribute("role") &&
                t.setAttribute("aria-selected", !0),
              _.reflow(t),
              t.classList.contains(Fn) && t.classList.add(Un),
              t.parentNode && g(t.parentNode).hasClass(Hn))
            ) {
              var o = g(t).closest(Wn)[0];
              if (o) {
                var r = [].slice.call(o.querySelectorAll(Bn));
                g(r).addClass(Rn);
              }
              t.setAttribute("aria-expanded", !0);
            }
            n && n();
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = g(this),
                e = t.data(kn);
              if (
                (e || ((e = new i(this)), t.data(kn, e)), "string" == typeof n)
              ) {
                if ("undefined" == typeof e[n])
                  throw new TypeError('No method named "' + n + '"');
                e[n]();
              }
            });
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
          ]),
          i
        );
      })();
    g(document).on(jn.CLICK_DATA_API, Qn, function (t) {
      t.preventDefault(), Yn._jQueryInterface.call(g(this), "show");
    }),
      (g.fn.tab = Yn._jQueryInterface),
      (g.fn.tab.Constructor = Yn),
      (g.fn.tab.noConflict = function () {
        return (g.fn.tab = Ln), Yn._jQueryInterface;
      });
    var zn = "toast",
      Xn = "bs.toast",
      $n = "." + Xn,
      Gn = g.fn[zn],
      Jn = {
        CLICK_DISMISS: "click.dismiss" + $n,
        HIDE: "hide" + $n,
        HIDDEN: "hidden" + $n,
        SHOW: "show" + $n,
        SHOWN: "shown" + $n,
      },
      Zn = "fade",
      ti = "hide",
      ei = "show",
      ni = "showing",
      ii = { animation: "boolean", autohide: "boolean", delay: "number" },
      oi = { animation: !0, autohide: !0, delay: 500 },
      ri = '[data-dismiss="toast"]',
      si = (function () {
        function i(t, e) {
          (this._element = t),
            (this._config = this._getConfig(e)),
            (this._timeout = null),
            this._setListeners();
        }
        var t = i.prototype;
        return (
          (t.show = function () {
            var t = this,
              e = g.Event(Jn.SHOW);
            if ((g(this._element).trigger(e), !e.isDefaultPrevented())) {
              this._config.animation && this._element.classList.add(Zn);
              var n = function () {
                t._element.classList.remove(ni),
                  t._element.classList.add(ei),
                  g(t._element).trigger(Jn.SHOWN),
                  t._config.autohide &&
                    (t._timeout = setTimeout(function () {
                      t.hide();
                    }, t._config.delay));
              };
              if (
                (this._element.classList.remove(ti),
                _.reflow(this._element),
                this._element.classList.add(ni),
                this._config.animation)
              ) {
                var i = _.getTransitionDurationFromElement(this._element);
                g(this._element).one(_.TRANSITION_END, n).emulateTransitionEnd(i);
              } else n();
            }
          }),
          (t.hide = function () {
            if (this._element.classList.contains(ei)) {
              var t = g.Event(Jn.HIDE);
              g(this._element).trigger(t),
                t.isDefaultPrevented() || this._close();
            }
          }),
          (t.dispose = function () {
            clearTimeout(this._timeout),
              (this._timeout = null),
              this._element.classList.contains(ei) &&
                this._element.classList.remove(ei),
              g(this._element).off(Jn.CLICK_DISMISS),
              g.removeData(this._element, Xn),
              (this._element = null),
              (this._config = null);
          }),
          (t._getConfig = function (t) {
            return (
              (t = l(
                {},
                oi,
                {},
                g(this._element).data(),
                {},
                "object" == typeof t && t ? t : {}
              )),
              _.typeCheckConfig(zn, t, this.constructor.DefaultType),
              t
            );
          }),
          (t._setListeners = function () {
            var t = this;
            g(this._element).on(Jn.CLICK_DISMISS, ri, function () {
              return t.hide();
            });
          }),
          (t._close = function () {
            function t() {
              e._element.classList.add(ti), g(e._element).trigger(Jn.HIDDEN);
            }
            var e = this;
            if ((this._element.classList.remove(ei), this._config.animation)) {
              var n = _.getTransitionDurationFromElement(this._element);
              g(this._element).one(_.TRANSITION_END, t).emulateTransitionEnd(n);
            } else t();
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = g(this),
                e = t.data(Xn);
              if (
                (e ||
                  ((e = new i(this, "object" == typeof n && n)), t.data(Xn, e)),
                "string" == typeof n)
              ) {
                if ("undefined" == typeof e[n])
                  throw new TypeError('No method named "' + n + '"');
                e[n](this);
              }
            });
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return ii;
              },
            },
            {
              key: "Default",
              get: function () {
                return oi;
              },
            },
          ]),
          i
        );
      })();
    (g.fn[zn] = si._jQueryInterface),
      (g.fn[zn].Constructor = si),
      (g.fn[zn].noConflict = function () {
        return (g.fn[zn] = Gn), si._jQueryInterface;
      }),
      (t.Alert = v),
      (t.Button = H),
      (t.Carousel = ut),
      (t.Collapse = wt),
      (t.Dropdown = ee),
      (t.Modal = Te),
      (t.Popover = hn),
      (t.Scrollspy = On),
      (t.Tab = Yn),
      (t.Toast = si),
      (t.Tooltip = Xe),
      (t.Util = _),
      Object.defineProperty(t, "__esModule", { value: !0 });
  });
  
  /*! Hammer.JS - v2.0.7 - 2016-04-22
   * http://hammerjs.github.io/
   *
   * Copyright (c) 2016 Jorik Tangelder;
   * Licensed under the MIT license */
  !(function (a, b, c, d) {
    "use strict";
    function e(a, b, c) {
      return setTimeout(j(a, c), b);
    }
    function f(a, b, c) {
      return Array.isArray(a) ? (g(a, c[b], c), !0) : !1;
    }
    function g(a, b, c) {
      var e;
      if (a)
        if (a.forEach) a.forEach(b, c);
        else if (a.length !== d)
          for (e = 0; e < a.length; ) b.call(c, a[e], e, a), e++;
        else for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a);
    }
    function h(b, c, d) {
      var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";
      return function () {
        var c = new Error("get-stack-trace"),
          d =
            c && c.stack
              ? c.stack
                  .replace(/^[^\(]+?[\n$]/gm, "")
                  .replace(/^\s+at\s+/gm, "")
                  .replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@")
              : "Unknown Stack Trace",
          f = a.console && (a.console.warn || a.console.log);
        return f && f.call(a.console, e, d), b.apply(this, arguments);
      };
    }
    function i(a, b, c) {
      var d,
        e = b.prototype;
      (d = a.prototype = Object.create(e)),
        (d.constructor = a),
        (d._super = e),
        c && la(d, c);
    }
    function j(a, b) {
      return function () {
        return a.apply(b, arguments);
      };
    }
    function k(a, b) {
      return typeof a == oa ? a.apply(b ? b[0] || d : d, b) : a;
    }
    function l(a, b) {
      return a === d ? b : a;
    }
    function m(a, b, c) {
      g(q(b), function (b) {
        a.addEventListener(b, c, !1);
      });
    }
    function n(a, b, c) {
      g(q(b), function (b) {
        a.removeEventListener(b, c, !1);
      });
    }
    function o(a, b) {
      for (; a; ) {
        if (a == b) return !0;
        a = a.parentNode;
      }
      return !1;
    }
    function p(a, b) {
      return a.indexOf(b) > -1;
    }
    function q(a) {
      return a.trim().split(/\s+/g);
    }
    function r(a, b, c) {
      if (a.indexOf && !c) return a.indexOf(b);
      for (var d = 0; d < a.length; ) {
        if ((c && a[d][c] == b) || (!c && a[d] === b)) return d;
        d++;
      }
      return -1;
    }
    function s(a) {
      return Array.prototype.slice.call(a, 0);
    }
    function t(a, b, c) {
      for (var d = [], e = [], f = 0; f < a.length; ) {
        var g = b ? a[f][b] : a[f];
        r(e, g) < 0 && d.push(a[f]), (e[f] = g), f++;
      }
      return (
        c &&
          (d = b
            ? d.sort(function (a, c) {
                return a[b] > c[b];
              })
            : d.sort()),
        d
      );
    }
    function u(a, b) {
      for (
        var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0;
        g < ma.length;
  
      ) {
        if (((c = ma[g]), (e = c ? c + f : b), e in a)) return e;
        g++;
      }
      return d;
    }
    function v() {
      return ua++;
    }
    function w(b) {
      var c = b.ownerDocument || b;
      return c.defaultView || c.parentWindow || a;
    }
    function x(a, b) {
      var c = this;
      (this.manager = a),
        (this.callback = b),
        (this.element = a.element),
        (this.target = a.options.inputTarget),
        (this.domHandler = function (b) {
          k(a.options.enable, [a]) && c.handler(b);
        }),
        this.init();
    }
    function y(a) {
      var b,
        c = a.options.inputClass;
      return new (b = c ? c : xa ? M : ya ? P : wa ? R : L)(a, z);
    }
    function z(a, b, c) {
      var d = c.pointers.length,
        e = c.changedPointers.length,
        f = b & Ea && d - e === 0,
        g = b & (Ga | Ha) && d - e === 0;
      (c.isFirst = !!f),
        (c.isFinal = !!g),
        f && (a.session = {}),
        (c.eventType = b),
        A(a, c),
        a.emit("hammer.input", c),
        a.recognize(c),
        (a.session.prevInput = c);
    }
    function A(a, b) {
      var c = a.session,
        d = b.pointers,
        e = d.length;
      c.firstInput || (c.firstInput = D(b)),
        e > 1 && !c.firstMultiple
          ? (c.firstMultiple = D(b))
          : 1 === e && (c.firstMultiple = !1);
      var f = c.firstInput,
        g = c.firstMultiple,
        h = g ? g.center : f.center,
        i = (b.center = E(d));
      (b.timeStamp = ra()),
        (b.deltaTime = b.timeStamp - f.timeStamp),
        (b.angle = I(h, i)),
        (b.distance = H(h, i)),
        B(c, b),
        (b.offsetDirection = G(b.deltaX, b.deltaY));
      var j = F(b.deltaTime, b.deltaX, b.deltaY);
      (b.overallVelocityX = j.x),
        (b.overallVelocityY = j.y),
        (b.overallVelocity = qa(j.x) > qa(j.y) ? j.x : j.y),
        (b.scale = g ? K(g.pointers, d) : 1),
        (b.rotation = g ? J(g.pointers, d) : 0),
        (b.maxPointers = c.prevInput
          ? b.pointers.length > c.prevInput.maxPointers
            ? b.pointers.length
            : c.prevInput.maxPointers
          : b.pointers.length),
        C(c, b);
      var k = a.element;
      o(b.srcEvent.target, k) && (k = b.srcEvent.target), (b.target = k);
    }
    function B(a, b) {
      var c = b.center,
        d = a.offsetDelta || {},
        e = a.prevDelta || {},
        f = a.prevInput || {};
      (b.eventType !== Ea && f.eventType !== Ga) ||
        ((e = a.prevDelta = { x: f.deltaX || 0, y: f.deltaY || 0 }),
        (d = a.offsetDelta = { x: c.x, y: c.y })),
        (b.deltaX = e.x + (c.x - d.x)),
        (b.deltaY = e.y + (c.y - d.y));
    }
    function C(a, b) {
      var c,
        e,
        f,
        g,
        h = a.lastInterval || b,
        i = b.timeStamp - h.timeStamp;
      if (b.eventType != Ha && (i > Da || h.velocity === d)) {
        var j = b.deltaX - h.deltaX,
          k = b.deltaY - h.deltaY,
          l = F(i, j, k);
        (e = l.x),
          (f = l.y),
          (c = qa(l.x) > qa(l.y) ? l.x : l.y),
          (g = G(j, k)),
          (a.lastInterval = b);
      } else
        (c = h.velocity), (e = h.velocityX), (f = h.velocityY), (g = h.direction);
      (b.velocity = c), (b.velocityX = e), (b.velocityY = f), (b.direction = g);
    }
    function D(a) {
      for (var b = [], c = 0; c < a.pointers.length; )
        (b[c] = {
          clientX: pa(a.pointers[c].clientX),
          clientY: pa(a.pointers[c].clientY),
        }),
          c++;
      return {
        timeStamp: ra(),
        pointers: b,
        center: E(b),
        deltaX: a.deltaX,
        deltaY: a.deltaY,
      };
    }
    function E(a) {
      var b = a.length;
      if (1 === b) return { x: pa(a[0].clientX), y: pa(a[0].clientY) };
      for (var c = 0, d = 0, e = 0; b > e; )
        (c += a[e].clientX), (d += a[e].clientY), e++;
      return { x: pa(c / b), y: pa(d / b) };
    }
    function F(a, b, c) {
      return { x: b / a || 0, y: c / a || 0 };
    }
    function G(a, b) {
      return a === b ? Ia : qa(a) >= qa(b) ? (0 > a ? Ja : Ka) : 0 > b ? La : Ma;
    }
    function H(a, b, c) {
      c || (c = Qa);
      var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];
      return Math.sqrt(d * d + e * e);
    }
    function I(a, b, c) {
      c || (c = Qa);
      var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];
      return (180 * Math.atan2(e, d)) / Math.PI;
    }
    function J(a, b) {
      return I(b[1], b[0], Ra) + I(a[1], a[0], Ra);
    }
    function K(a, b) {
      return H(b[0], b[1], Ra) / H(a[0], a[1], Ra);
    }
    function L() {
      (this.evEl = Ta),
        (this.evWin = Ua),
        (this.pressed = !1),
        x.apply(this, arguments);
    }
    function M() {
      (this.evEl = Xa),
        (this.evWin = Ya),
        x.apply(this, arguments),
        (this.store = this.manager.session.pointerEvents = []);
    }
    function N() {
      (this.evTarget = $a),
        (this.evWin = _a),
        (this.started = !1),
        x.apply(this, arguments);
    }
    function O(a, b) {
      var c = s(a.touches),
        d = s(a.changedTouches);
      return b & (Ga | Ha) && (c = t(c.concat(d), "identifier", !0)), [c, d];
    }
    function P() {
      (this.evTarget = bb), (this.targetIds = {}), x.apply(this, arguments);
    }
    function Q(a, b) {
      var c = s(a.touches),
        d = this.targetIds;
      if (b & (Ea | Fa) && 1 === c.length)
        return (d[c[0].identifier] = !0), [c, c];
      var e,
        f,
        g = s(a.changedTouches),
        h = [],
        i = this.target;
      if (
        ((f = c.filter(function (a) {
          return o(a.target, i);
        })),
        b === Ea)
      )
        for (e = 0; e < f.length; ) (d[f[e].identifier] = !0), e++;
      for (e = 0; e < g.length; )
        d[g[e].identifier] && h.push(g[e]),
          b & (Ga | Ha) && delete d[g[e].identifier],
          e++;
      return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0;
    }
    function R() {
      x.apply(this, arguments);
      var a = j(this.handler, this);
      (this.touch = new P(this.manager, a)),
        (this.mouse = new L(this.manager, a)),
        (this.primaryTouch = null),
        (this.lastTouches = []);
    }
    function S(a, b) {
      a & Ea
        ? ((this.primaryTouch = b.changedPointers[0].identifier), T.call(this, b))
        : a & (Ga | Ha) && T.call(this, b);
    }
    function T(a) {
      var b = a.changedPointers[0];
      if (b.identifier === this.primaryTouch) {
        var c = { x: b.clientX, y: b.clientY };
        this.lastTouches.push(c);
        var d = this.lastTouches,
          e = function () {
            var a = d.indexOf(c);
            a > -1 && d.splice(a, 1);
          };
        setTimeout(e, cb);
      }
    }
    function U(a) {
      for (
        var b = a.srcEvent.clientX, c = a.srcEvent.clientY, d = 0;
        d < this.lastTouches.length;
        d++
      ) {
        var e = this.lastTouches[d],
          f = Math.abs(b - e.x),
          g = Math.abs(c - e.y);
        if (db >= f && db >= g) return !0;
      }
      return !1;
    }
    function V(a, b) {
      (this.manager = a), this.set(b);
    }
    function W(a) {
      if (p(a, jb)) return jb;
      var b = p(a, kb),
        c = p(a, lb);
      return b && c ? jb : b || c ? (b ? kb : lb) : p(a, ib) ? ib : hb;
    }
    function X() {
      if (!fb) return !1;
      var b = {},
        c = a.CSS && a.CSS.supports;
      return (
        ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(
          function (d) {
            b[d] = c ? a.CSS.supports("touch-action", d) : !0;
          }
        ),
        b
      );
    }
    function Y(a) {
      (this.options = la({}, this.defaults, a || {})),
        (this.id = v()),
        (this.manager = null),
        (this.options.enable = l(this.options.enable, !0)),
        (this.state = nb),
        (this.simultaneous = {}),
        (this.requireFail = []);
    }
    function Z(a) {
      return a & sb
        ? "cancel"
        : a & qb
        ? "end"
        : a & pb
        ? "move"
        : a & ob
        ? "start"
        : "";
    }
    function $(a) {
      return a == Ma
        ? "down"
        : a == La
        ? "up"
        : a == Ja
        ? "left"
        : a == Ka
        ? "right"
        : "";
    }
    function _(a, b) {
      var c = b.manager;
      return c ? c.get(a) : a;
    }
    function aa() {
      Y.apply(this, arguments);
    }
    function ba() {
      aa.apply(this, arguments), (this.pX = null), (this.pY = null);
    }
    function ca() {
      aa.apply(this, arguments);
    }
    function da() {
      Y.apply(this, arguments), (this._timer = null), (this._input = null);
    }
    function ea() {
      aa.apply(this, arguments);
    }
    function fa() {
      aa.apply(this, arguments);
    }
    function ga() {
      Y.apply(this, arguments),
        (this.pTime = !1),
        (this.pCenter = !1),
        (this._timer = null),
        (this._input = null),
        (this.count = 0);
    }
    function ha(a, b) {
      return (
        (b = b || {}),
        (b.recognizers = l(b.recognizers, ha.defaults.preset)),
        new ia(a, b)
      );
    }
    function ia(a, b) {
      (this.options = la({}, ha.defaults, b || {})),
        (this.options.inputTarget = this.options.inputTarget || a),
        (this.handlers = {}),
        (this.session = {}),
        (this.recognizers = []),
        (this.oldCssProps = {}),
        (this.element = a),
        (this.input = y(this)),
        (this.touchAction = new V(this, this.options.touchAction)),
        ja(this, !0),
        g(
          this.options.recognizers,
          function (a) {
            var b = this.add(new a[0](a[1]));
            a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3]);
          },
          this
        );
    }
    function ja(a, b) {
      var c = a.element;
      if (c.style) {
        var d;
        g(a.options.cssProps, function (e, f) {
          (d = u(c.style, f)),
            b
              ? ((a.oldCssProps[d] = c.style[d]), (c.style[d] = e))
              : (c.style[d] = a.oldCssProps[d] || "");
        }),
          b || (a.oldCssProps = {});
      }
    }
    function ka(a, c) {
      var d = b.createEvent("Event");
      d.initEvent(a, !0, !0), (d.gesture = c), c.target.dispatchEvent(d);
    }
    var la,
      ma = ["", "webkit", "Moz", "MS", "ms", "o"],
      na = b.createElement("div"),
      oa = "function",
      pa = Math.round,
      qa = Math.abs,
      ra = Date.now;
    la =
      "function" != typeof Object.assign
        ? function (a) {
            if (a === d || null === a)
              throw new TypeError("Cannot convert undefined or null to object");
            for (var b = Object(a), c = 1; c < arguments.length; c++) {
              var e = arguments[c];
              if (e !== d && null !== e)
                for (var f in e) e.hasOwnProperty(f) && (b[f] = e[f]);
            }
            return b;
          }
        : Object.assign;
    var sa = h(
        function (a, b, c) {
          for (var e = Object.keys(b), f = 0; f < e.length; )
            (!c || (c && a[e[f]] === d)) && (a[e[f]] = b[e[f]]), f++;
          return a;
        },
        "extend",
        "Use `assign`."
      ),
      ta = h(
        function (a, b) {
          return sa(a, b, !0);
        },
        "merge",
        "Use `assign`."
      ),
      ua = 1,
      va = /mobile|tablet|ip(ad|hone|od)|android/i,
      wa = "ontouchstart" in a,
      xa = u(a, "PointerEvent") !== d,
      ya = wa && va.test(navigator.userAgent),
      za = "touch",
      Aa = "pen",
      Ba = "mouse",
      Ca = "kinect",
      Da = 25,
      Ea = 1,
      Fa = 2,
      Ga = 4,
      Ha = 8,
      Ia = 1,
      Ja = 2,
      Ka = 4,
      La = 8,
      Ma = 16,
      Na = Ja | Ka,
      Oa = La | Ma,
      Pa = Na | Oa,
      Qa = ["x", "y"],
      Ra = ["clientX", "clientY"];
    x.prototype = {
      handler: function () {},
      init: function () {
        this.evEl && m(this.element, this.evEl, this.domHandler),
          this.evTarget && m(this.target, this.evTarget, this.domHandler),
          this.evWin && m(w(this.element), this.evWin, this.domHandler);
      },
      destroy: function () {
        this.evEl && n(this.element, this.evEl, this.domHandler),
          this.evTarget && n(this.target, this.evTarget, this.domHandler),
          this.evWin && n(w(this.element), this.evWin, this.domHandler);
      },
    };
    var Sa = { mousedown: Ea, mousemove: Fa, mouseup: Ga },
      Ta = "mousedown",
      Ua = "mousemove mouseup";
    i(L, x, {
      handler: function (a) {
        var b = Sa[a.type];
        b & Ea && 0 === a.button && (this.pressed = !0),
          b & Fa && 1 !== a.which && (b = Ga),
          this.pressed &&
            (b & Ga && (this.pressed = !1),
            this.callback(this.manager, b, {
              pointers: [a],
              changedPointers: [a],
              pointerType: Ba,
              srcEvent: a,
            }));
      },
    });
    var Va = {
        pointerdown: Ea,
        pointermove: Fa,
        pointerup: Ga,
        pointercancel: Ha,
        pointerout: Ha,
      },
      Wa = { 2: za, 3: Aa, 4: Ba, 5: Ca },
      Xa = "pointerdown",
      Ya = "pointermove pointerup pointercancel";
    a.MSPointerEvent &&
      !a.PointerEvent &&
      ((Xa = "MSPointerDown"),
      (Ya = "MSPointerMove MSPointerUp MSPointerCancel")),
      i(M, x, {
        handler: function (a) {
          var b = this.store,
            c = !1,
            d = a.type.toLowerCase().replace("ms", ""),
            e = Va[d],
            f = Wa[a.pointerType] || a.pointerType,
            g = f == za,
            h = r(b, a.pointerId, "pointerId");
          e & Ea && (0 === a.button || g)
            ? 0 > h && (b.push(a), (h = b.length - 1))
            : e & (Ga | Ha) && (c = !0),
            0 > h ||
              ((b[h] = a),
              this.callback(this.manager, e, {
                pointers: b,
                changedPointers: [a],
                pointerType: f,
                srcEvent: a,
              }),
              c && b.splice(h, 1));
        },
      });
    var Za = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha },
      $a = "touchstart",
      _a = "touchstart touchmove touchend touchcancel";
    i(N, x, {
      handler: function (a) {
        var b = Za[a.type];
        if ((b === Ea && (this.started = !0), this.started)) {
          var c = O.call(this, a, b);
          b & (Ga | Ha) && c[0].length - c[1].length === 0 && (this.started = !1),
            this.callback(this.manager, b, {
              pointers: c[0],
              changedPointers: c[1],
              pointerType: za,
              srcEvent: a,
            });
        }
      },
    });
    var ab = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha },
      bb = "touchstart touchmove touchend touchcancel";
    i(P, x, {
      handler: function (a) {
        var b = ab[a.type],
          c = Q.call(this, a, b);
        c &&
          this.callback(this.manager, b, {
            pointers: c[0],
            changedPointers: c[1],
            pointerType: za,
            srcEvent: a,
          });
      },
    });
    var cb = 2500,
      db = 25;
    i(R, x, {
      handler: function (a, b, c) {
        var d = c.pointerType == za,
          e = c.pointerType == Ba;
        if (
          !(e && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)
        ) {
          if (d) S.call(this, b, c);
          else if (e && U.call(this, c)) return;
          this.callback(a, b, c);
        }
      },
      destroy: function () {
        this.touch.destroy(), this.mouse.destroy();
      },
    });
    var eb = u(na.style, "touchAction"),
      fb = eb !== d,
      gb = "compute",
      hb = "auto",
      ib = "manipulation",
      jb = "none",
      kb = "pan-x",
      lb = "pan-y",
      mb = X();
    V.prototype = {
      set: function (a) {
        a == gb && (a = this.compute()),
          fb &&
            this.manager.element.style &&
            mb[a] &&
            (this.manager.element.style[eb] = a),
          (this.actions = a.toLowerCase().trim());
      },
      update: function () {
        this.set(this.manager.options.touchAction);
      },
      compute: function () {
        var a = [];
        return (
          g(this.manager.recognizers, function (b) {
            k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()));
          }),
          W(a.join(" "))
        );
      },
      preventDefaults: function (a) {
        var b = a.srcEvent,
          c = a.offsetDirection;
        if (this.manager.session.prevented) return void b.preventDefault();
        var d = this.actions,
          e = p(d, jb) && !mb[jb],
          f = p(d, lb) && !mb[lb],
          g = p(d, kb) && !mb[kb];
        if (e) {
          var h = 1 === a.pointers.length,
            i = a.distance < 2,
            j = a.deltaTime < 250;
          if (h && i && j) return;
        }
        return g && f
          ? void 0
          : e || (f && c & Na) || (g && c & Oa)
          ? this.preventSrc(b)
          : void 0;
      },
      preventSrc: function (a) {
        (this.manager.session.prevented = !0), a.preventDefault();
      },
    };
    var nb = 1,
      ob = 2,
      pb = 4,
      qb = 8,
      rb = qb,
      sb = 16,
      tb = 32;
    (Y.prototype = {
      defaults: {},
      set: function (a) {
        return (
          la(this.options, a),
          this.manager && this.manager.touchAction.update(),
          this
        );
      },
      recognizeWith: function (a) {
        if (f(a, "recognizeWith", this)) return this;
        var b = this.simultaneous;
        return (
          (a = _(a, this)),
          b[a.id] || ((b[a.id] = a), a.recognizeWith(this)),
          this
        );
      },
      dropRecognizeWith: function (a) {
        return f(a, "dropRecognizeWith", this)
          ? this
          : ((a = _(a, this)), delete this.simultaneous[a.id], this);
      },
      requireFailure: function (a) {
        if (f(a, "requireFailure", this)) return this;
        var b = this.requireFail;
        return (
          (a = _(a, this)),
          -1 === r(b, a) && (b.push(a), a.requireFailure(this)),
          this
        );
      },
      dropRequireFailure: function (a) {
        if (f(a, "dropRequireFailure", this)) return this;
        a = _(a, this);
        var b = r(this.requireFail, a);
        return b > -1 && this.requireFail.splice(b, 1), this;
      },
      hasRequireFailures: function () {
        return this.requireFail.length > 0;
      },
      canRecognizeWith: function (a) {
        return !!this.simultaneous[a.id];
      },
      emit: function (a) {
        function b(b) {
          c.manager.emit(b, a);
        }
        var c = this,
          d = this.state;
        qb > d && b(c.options.event + Z(d)),
          b(c.options.event),
          a.additionalEvent && b(a.additionalEvent),
          d >= qb && b(c.options.event + Z(d));
      },
      tryEmit: function (a) {
        return this.canEmit() ? this.emit(a) : void (this.state = tb);
      },
      canEmit: function () {
        for (var a = 0; a < this.requireFail.length; ) {
          if (!(this.requireFail[a].state & (tb | nb))) return !1;
          a++;
        }
        return !0;
      },
      recognize: function (a) {
        var b = la({}, a);
        return k(this.options.enable, [this, b])
          ? (this.state & (rb | sb | tb) && (this.state = nb),
            (this.state = this.process(b)),
            void (this.state & (ob | pb | qb | sb) && this.tryEmit(b)))
          : (this.reset(), void (this.state = tb));
      },
      process: function (a) {},
      getTouchAction: function () {},
      reset: function () {},
    }),
      i(aa, Y, {
        defaults: { pointers: 1 },
        attrTest: function (a) {
          var b = this.options.pointers;
          return 0 === b || a.pointers.length === b;
        },
        process: function (a) {
          var b = this.state,
            c = a.eventType,
            d = b & (ob | pb),
            e = this.attrTest(a);
          return d && (c & Ha || !e)
            ? b | sb
            : d || e
            ? c & Ga
              ? b | qb
              : b & ob
              ? b | pb
              : ob
            : tb;
        },
      }),
      i(ba, aa, {
        defaults: { event: "pan", threshold: 10, pointers: 1, direction: Pa },
        getTouchAction: function () {
          var a = this.options.direction,
            b = [];
          return a & Na && b.push(lb), a & Oa && b.push(kb), b;
        },
        directionTest: function (a) {
          var b = this.options,
            c = !0,
            d = a.distance,
            e = a.direction,
            f = a.deltaX,
            g = a.deltaY;
          return (
            e & b.direction ||
              (b.direction & Na
                ? ((e = 0 === f ? Ia : 0 > f ? Ja : Ka),
                  (c = f != this.pX),
                  (d = Math.abs(a.deltaX)))
                : ((e = 0 === g ? Ia : 0 > g ? La : Ma),
                  (c = g != this.pY),
                  (d = Math.abs(a.deltaY)))),
            (a.direction = e),
            c && d > b.threshold && e & b.direction
          );
        },
        attrTest: function (a) {
          return (
            aa.prototype.attrTest.call(this, a) &&
            (this.state & ob || (!(this.state & ob) && this.directionTest(a)))
          );
        },
        emit: function (a) {
          (this.pX = a.deltaX), (this.pY = a.deltaY);
          var b = $(a.direction);
          b && (a.additionalEvent = this.options.event + b),
            this._super.emit.call(this, a);
        },
      }),
      i(ca, aa, {
        defaults: { event: "pinch", threshold: 0, pointers: 2 },
        getTouchAction: function () {
          return [jb];
        },
        attrTest: function (a) {
          return (
            this._super.attrTest.call(this, a) &&
            (Math.abs(a.scale - 1) > this.options.threshold || this.state & ob)
          );
        },
        emit: function (a) {
          if (1 !== a.scale) {
            var b = a.scale < 1 ? "in" : "out";
            a.additionalEvent = this.options.event + b;
          }
          this._super.emit.call(this, a);
        },
      }),
      i(da, Y, {
        defaults: { event: "press", pointers: 1, time: 251, threshold: 9 },
        getTouchAction: function () {
          return [hb];
        },
        process: function (a) {
          var b = this.options,
            c = a.pointers.length === b.pointers,
            d = a.distance < b.threshold,
            f = a.deltaTime > b.time;
          if (((this._input = a), !d || !c || (a.eventType & (Ga | Ha) && !f)))
            this.reset();
          else if (a.eventType & Ea)
            this.reset(),
              (this._timer = e(
                function () {
                  (this.state = rb), this.tryEmit();
                },
                b.time,
                this
              ));
          else if (a.eventType & Ga) return rb;
          return tb;
        },
        reset: function () {
          clearTimeout(this._timer);
        },
        emit: function (a) {
          this.state === rb &&
            (a && a.eventType & Ga
              ? this.manager.emit(this.options.event + "up", a)
              : ((this._input.timeStamp = ra()),
                this.manager.emit(this.options.event, this._input)));
        },
      }),
      i(ea, aa, {
        defaults: { event: "rotate", threshold: 0, pointers: 2 },
        getTouchAction: function () {
          return [jb];
        },
        attrTest: function (a) {
          return (
            this._super.attrTest.call(this, a) &&
            (Math.abs(a.rotation) > this.options.threshold || this.state & ob)
          );
        },
      }),
      i(fa, aa, {
        defaults: {
          event: "swipe",
          threshold: 10,
          velocity: 0.3,
          direction: Na | Oa,
          pointers: 1,
        },
        getTouchAction: function () {
          return ba.prototype.getTouchAction.call(this);
        },
        attrTest: function (a) {
          var b,
            c = this.options.direction;
          return (
            c & (Na | Oa)
              ? (b = a.overallVelocity)
              : c & Na
              ? (b = a.overallVelocityX)
              : c & Oa && (b = a.overallVelocityY),
            this._super.attrTest.call(this, a) &&
              c & a.offsetDirection &&
              a.distance > this.options.threshold &&
              a.maxPointers == this.options.pointers &&
              qa(b) > this.options.velocity &&
              a.eventType & Ga
          );
        },
        emit: function (a) {
          var b = $(a.offsetDirection);
          b && this.manager.emit(this.options.event + b, a),
            this.manager.emit(this.options.event, a);
        },
      }),
      i(ga, Y, {
        defaults: {
          event: "tap",
          pointers: 1,
          taps: 1,
          interval: 300,
          time: 250,
          threshold: 9,
          posThreshold: 10,
        },
        getTouchAction: function () {
          return [ib];
        },
        process: function (a) {
          var b = this.options,
            c = a.pointers.length === b.pointers,
            d = a.distance < b.threshold,
            f = a.deltaTime < b.time;
          if ((this.reset(), a.eventType & Ea && 0 === this.count))
            return this.failTimeout();
          if (d && f && c) {
            if (a.eventType != Ga) return this.failTimeout();
            var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
              h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;
            (this.pTime = a.timeStamp),
              (this.pCenter = a.center),
              h && g ? (this.count += 1) : (this.count = 1),
              (this._input = a);
            var i = this.count % b.taps;
            if (0 === i)
              return this.hasRequireFailures()
                ? ((this._timer = e(
                    function () {
                      (this.state = rb), this.tryEmit();
                    },
                    b.interval,
                    this
                  )),
                  ob)
                : rb;
          }
          return tb;
        },
        failTimeout: function () {
          return (
            (this._timer = e(
              function () {
                this.state = tb;
              },
              this.options.interval,
              this
            )),
            tb
          );
        },
        reset: function () {
          clearTimeout(this._timer);
        },
        emit: function () {
          this.state == rb &&
            ((this._input.tapCount = this.count),
            this.manager.emit(this.options.event, this._input));
        },
      }),
      (ha.VERSION = "2.0.7"),
      (ha.defaults = {
        domEvents: !1,
        touchAction: gb,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
          [ea, { enable: !1 }],
          [ca, { enable: !1 }, ["rotate"]],
          [fa, { direction: Na }],
          [ba, { direction: Na }, ["swipe"]],
          [ga],
          [ga, { event: "doubletap", taps: 2 }, ["tap"]],
          [da],
        ],
        cssProps: {
          userSelect: "none",
          touchSelect: "none",
          touchCallout: "none",
          contentZooming: "none",
          userDrag: "none",
          tapHighlightColor: "rgba(0,0,0,0)",
        },
      });
    var ub = 1,
      vb = 2;
    (ia.prototype = {
      set: function (a) {
        return (
          la(this.options, a),
          a.touchAction && this.touchAction.update(),
          a.inputTarget &&
            (this.input.destroy(),
            (this.input.target = a.inputTarget),
            this.input.init()),
          this
        );
      },
      stop: function (a) {
        this.session.stopped = a ? vb : ub;
      },
      recognize: function (a) {
        var b = this.session;
        if (!b.stopped) {
          this.touchAction.preventDefaults(a);
          var c,
            d = this.recognizers,
            e = b.curRecognizer;
          (!e || (e && e.state & rb)) && (e = b.curRecognizer = null);
          for (var f = 0; f < d.length; )
            (c = d[f]),
              b.stopped === vb || (e && c != e && !c.canRecognizeWith(e))
                ? c.reset()
                : c.recognize(a),
              !e && c.state & (ob | pb | qb) && (e = b.curRecognizer = c),
              f++;
        }
      },
      get: function (a) {
        if (a instanceof Y) return a;
        for (var b = this.recognizers, c = 0; c < b.length; c++)
          if (b[c].options.event == a) return b[c];
        return null;
      },
      add: function (a) {
        if (f(a, "add", this)) return this;
        var b = this.get(a.options.event);
        return (
          b && this.remove(b),
          this.recognizers.push(a),
          (a.manager = this),
          this.touchAction.update(),
          a
        );
      },
      remove: function (a) {
        if (f(a, "remove", this)) return this;
        if ((a = this.get(a))) {
          var b = this.recognizers,
            c = r(b, a);
          -1 !== c && (b.splice(c, 1), this.touchAction.update());
        }
        return this;
      },
      on: function (a, b) {
        if (a !== d && b !== d) {
          var c = this.handlers;
          return (
            g(q(a), function (a) {
              (c[a] = c[a] || []), c[a].push(b);
            }),
            this
          );
        }
      },
      off: function (a, b) {
        if (a !== d) {
          var c = this.handlers;
          return (
            g(q(a), function (a) {
              b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a];
            }),
            this
          );
        }
      },
      emit: function (a, b) {
        this.options.domEvents && ka(a, b);
        var c = this.handlers[a] && this.handlers[a].slice();
        if (c && c.length) {
          (b.type = a),
            (b.preventDefault = function () {
              b.srcEvent.preventDefault();
            });
          for (var d = 0; d < c.length; ) c[d](b), d++;
        }
      },
      destroy: function () {
        this.element && ja(this, !1),
          (this.handlers = {}),
          (this.session = {}),
          this.input.destroy(),
          (this.element = null);
      },
    }),
      la(ha, {
        INPUT_START: Ea,
        INPUT_MOVE: Fa,
        INPUT_END: Ga,
        INPUT_CANCEL: Ha,
        STATE_POSSIBLE: nb,
        STATE_BEGAN: ob,
        STATE_CHANGED: pb,
        STATE_ENDED: qb,
        STATE_RECOGNIZED: rb,
        STATE_CANCELLED: sb,
        STATE_FAILED: tb,
        DIRECTION_NONE: Ia,
        DIRECTION_LEFT: Ja,
        DIRECTION_RIGHT: Ka,
        DIRECTION_UP: La,
        DIRECTION_DOWN: Ma,
        DIRECTION_HORIZONTAL: Na,
        DIRECTION_VERTICAL: Oa,
        DIRECTION_ALL: Pa,
        Manager: ia,
        Input: x,
        TouchAction: V,
        TouchInput: P,
        MouseInput: L,
        PointerEventInput: M,
        TouchMouseInput: R,
        SingleTouchInput: N,
        Recognizer: Y,
        AttrRecognizer: aa,
        Tap: ga,
        Pan: ba,
        Swipe: fa,
        Pinch: ca,
        Rotate: ea,
        Press: da,
        on: m,
        off: n,
        each: g,
        merge: ta,
        extend: sa,
        assign: la,
        inherit: i,
        bindFn: j,
        prefixed: u,
      });
    var wb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};
    (wb.Hammer = ha),
      "function" == typeof define && define.amd
        ? define(function () {
            return ha;
          })
        : "undefined" != typeof module && module.exports
        ? (module.exports = ha)
        : (a[c] = ha);
  })(window, document, "Hammer");
  
  $(".accordion").on("hide.bs.collapse", function (o) {
    var a = $(o.target).prev(".accordion-header");
    if (0 < a.length) {
      var e = a.offset().top - 5;
      e < $(window).scrollTop() && $("html,body").animate({ scrollTop: e }, 500);
    }
  });
  $(function () {
    $(".custom-file-input").on("change", function () {
      var t = $(this).val().split("\\").slice(-1)[0];
      $(this).next(".custom-file-label").text(t);
    });
  });
  $(function () {
    var n = !1;
    $(".carousel").each(function () {
      var t = new Hammer(this);
      t.on("swipeleft swiperight release", function (e) {
        "swipeleft" === e.type && ((n = !0), $(t.element).carousel("next")),
          "swiperight" === e.type && ((n = !0), $(t.element).carousel("prev"));
      });
    }),
      $(document).on("click", function (e) {
        n && (e.stopPropagation(), e.preventDefault()), (n = !1);
      });
  });
  $(function () {
    $('[data-toggle="popover"]').popover();
  });
  !(function (e) {
    e('a[href*="#"]:not([href$="#"])').click(function () {
      if (
        location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        location.hostname === this.hostname &&
        void 0 === e(this).data("toggle") &&
        void 0 === e(this).data("slide")
      ) {
        var o = e(this.hash.replace(/(:|\.|\[|\]|,|=|\/)/g, "\\$1"));
        if (
          (o = (o.length && o) || e("[name=" + this.hash.slice(1) + "]")).length
        ) {
          var t = o.offset().top,
            l = e(".navbar-fixed-top");
          return (
            l.length && 0 !== t && (t -= l.outerHeight()),
            e("html,body").animate({ scrollTop: t }, 500),
            !1
          );
        }
      }
    }),
      e(".scroll-top").on("click", function () {
        e(this).blur();
      }),
      e(window).on("scroll", function () {
        300 < e(this).scrollTop()
          ? e(".scroll-top").addClass("scroll-top-visible")
          : e(".scroll-top").removeClass("scroll-top-visible");
      });
  })(jQuery);
  $(function () {
    function n(o) {
      $(".navbar-toggler").is(":hidden") &&
        !o.hasClass("open") &&
        (o.parent().parent().find("li").removeClass("show"),
        o.addClass("show"),
        o.find("> .dropdown-toggle").attr("aria-expanded", "true"),
        o.find("> .dropdown-menu").addClass("show"));
    }
    function e(o) {
      $(".navbar-toggler").is(":hidden") &&
        (o.removeClass("show"),
        o.find("> .dropdown-toggle").attr("aria-expanded", "false"),
        o.find("> .dropdown-menu").removeClass("show"));
    }
    $(".navbar-collapse")
      .on("show.bs.collapse", function () {
        $(".navbar-toggle").removeClass("collapsed");
      })
      .on("hide.bs.collapse", function () {
        $(".navbar-toggle").addClass("collapsed");
      }),
      $(document).on("pointerover", "li.dropdown-hover", function (o) {
        "mouse" === o.originalEvent.pointerType && n($(this));
      }),
      $(document).on("mouseenter", "li.dropdown-hover", function () {
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && n($(this));
      }),
      $(document).on("pointerleave", "li.dropdown-hover", function (o) {
        "mouse" === o.originalEvent.pointerType && e($(this));
      }),
      $(document).on("mouseleave", "li.dropdown-hover", function () {
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && e($(this));
      }),
      $(document).on("click", ".nav-link", function (o) {
        if (
          $(this).parent().hasClass("dropdown-hover") &&
          !$(this).parent().hasClass("show")
        )
          return (
            $(this).parent().parent().find(".dropdown-hover").removeClass("show"),
            $(this)
              .parent()
              .parent()
              .find(".dropdown-hover")
              .find("> .dropdown-toggle")
              .attr("aria-expanded", "false"),
            $(this)
              .parent()
              .parent()
              .find(".dropdown-hover")
              .find("> .dropdown-menu")
              .removeClass("show"),
            $(this).parent().addClass("show"),
            $(this)
              .parent()
              .find("> .dropdown-toggle")
              .attr("aria-expanded", "true"),
            $(this).parent().find("> .dropdown-menu").addClass("show"),
            o.stopImmediatePropagation(),
            o.preventDefault(),
            !1
          );
      });
  });
  (function (global, factory) {
    typeof exports === "object" && typeof module !== "undefined"
      ? (module.exports = factory())
      : typeof define === "function" && define.amd
      ? define(factory)
      : ((global = global || self), (global.Alpine = factory()));
  })(this, function () {
    "use strict";
  
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true,
        });
      } else {
        obj[key] = value;
      }
  
      return obj;
    }
  
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
  
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
  
      return keys;
    }
  
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
  
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          );
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            );
          });
        }
      }
  
      return target;
    }
  
    // Thanks @stimulus:
    // https://github.com/stimulusjs/stimulus/blob/master/packages/%40stimulus/core/src/application.ts
    function domReady() {
      return new Promise((resolve) => {
        if (document.readyState == "loading") {
          document.addEventListener("DOMContentLoaded", resolve);
        } else {
          resolve();
        }
      });
    }
    function arrayUnique(array) {
      return Array.from(new Set(array));
    }
    function isTesting() {
      return (
        navigator.userAgent.includes("Node.js") ||
        navigator.userAgent.includes("jsdom")
      );
    }
    function warnIfMalformedTemplate(el, directive) {
      if (el.tagName.toLowerCase() !== "template") {
        console.warn(
          `Alpine: [${directive}] directive should only be added to <template> tags. See https://github.com/alpinejs/alpine#${directive}`
        );
      } else if (el.content.childElementCount !== 1) {
        console.warn(
          `Alpine: <template> tag with [${directive}] encountered with multiple element roots. Make sure <template> only has a single child element.`
        );
      }
    }
    function kebabCase(subject) {
      return subject
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[_\s]/, "-")
        .toLowerCase();
    }
    function camelCase(subject) {
      return subject
        .toLowerCase()
        .replace(/-(\w)/g, (match, char) => char.toUpperCase());
    }
    function walk(el, callback) {
      if (callback(el) === false) return;
      let node = el.firstElementChild;
  
      while (node) {
        walk(node, callback);
        node = node.nextElementSibling;
      }
    }
    function debounce(func, wait) {
      var timeout;
      return function () {
        var context = this,
          args = arguments;
  
        var later = function later() {
          timeout = null;
          func.apply(context, args);
        };
  
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }
    function saferEval(expression, dataContext, additionalHelperVariables = {}) {
      if (typeof expression === "function") {
        return expression.call(dataContext);
      }
  
      return new Function(
        ["$data", ...Object.keys(additionalHelperVariables)],
        `var __alpine_result; with($data) { __alpine_result = ${expression} }; return __alpine_result`
      )(dataContext, ...Object.values(additionalHelperVariables));
    }
    function saferEvalNoReturn(
      expression,
      dataContext,
      additionalHelperVariables = {}
    ) {
      if (typeof expression === "function") {
        return Promise.resolve(
          expression.call(dataContext, additionalHelperVariables["$event"])
        );
      }
  
      let AsyncFunction = Function;
      /* MODERN-ONLY:START */
  
      AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
      /* MODERN-ONLY:END */
      // For the cases when users pass only a function reference to the caller: `x-on:click="foo"`
      // Where "foo" is a function. Also, we'll pass the function the event instance when we call it.
  
      if (Object.keys(dataContext).includes(expression)) {
        let methodReference = new Function(
          ["dataContext", ...Object.keys(additionalHelperVariables)],
          `with(dataContext) { return ${expression} }`
        )(dataContext, ...Object.values(additionalHelperVariables));
  
        if (typeof methodReference === "function") {
          return Promise.resolve(
            methodReference.call(dataContext, additionalHelperVariables["$event"])
          );
        } else {
          return Promise.resolve();
        }
      }
  
      return Promise.resolve(
        new AsyncFunction(
          ["dataContext", ...Object.keys(additionalHelperVariables)],
          `with(dataContext) { ${expression} }`
        )(dataContext, ...Object.values(additionalHelperVariables))
      );
    }
    const xAttrRE = /^x-(on|bind|data|text|html|model|if|for|show|cloak|transition|ref|spread)\b/;
    function isXAttr(attr) {
      const name = replaceAtAndColonWithStandardSyntax(attr.name);
      return xAttrRE.test(name);
    }
    function getXAttrs(el, component, type) {
      let directives = Array.from(el.attributes)
        .filter(isXAttr)
        .map(parseHtmlAttribute); // Get an object of directives from x-spread.
  
      let spreadDirective = directives.filter(
        (directive) => directive.type === "spread"
      )[0];
  
      if (spreadDirective) {
        let spreadObject = saferEval(spreadDirective.expression, component.$data); // Add x-spread directives to the pile of existing directives.
  
        directives = directives.concat(
          Object.entries(spreadObject).map(([name, value]) =>
            parseHtmlAttribute({
              name,
              value,
            })
          )
        );
      }
  
      if (type) return directives.filter((i) => i.type === type);
      return sortDirectives(directives);
    }
  
    function sortDirectives(directives) {
      let directiveOrder = ["bind", "model", "show", "catch-all"];
      return directives.sort((a, b) => {
        let typeA = directiveOrder.indexOf(a.type) === -1 ? "catch-all" : a.type;
        let typeB = directiveOrder.indexOf(b.type) === -1 ? "catch-all" : b.type;
        return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
      });
    }
  
    function parseHtmlAttribute({ name, value }) {
      const normalizedName = replaceAtAndColonWithStandardSyntax(name);
      const typeMatch = normalizedName.match(xAttrRE);
      const valueMatch = normalizedName.match(/:([a-zA-Z0-9\-:]+)/);
      const modifiers = normalizedName.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
      return {
        type: typeMatch ? typeMatch[1] : null,
        value: valueMatch ? valueMatch[1] : null,
        modifiers: modifiers.map((i) => i.replace(".", "")),
        expression: value,
      };
    }
    function isBooleanAttr(attrName) {
      // As per HTML spec table https://html.spec.whatwg.org/multipage/indices.html#attributes-3:boolean-attribute
      // Array roughly ordered by estimated usage
      const booleanAttributes = [
        "disabled",
        "checked",
        "required",
        "readonly",
        "hidden",
        "open",
        "selected",
        "autofocus",
        "itemscope",
        "multiple",
        "novalidate",
        "allowfullscreen",
        "allowpaymentrequest",
        "formnovalidate",
        "autoplay",
        "controls",
        "loop",
        "muted",
        "playsinline",
        "default",
        "ismap",
        "reversed",
        "async",
        "defer",
        "nomodule",
      ];
      return booleanAttributes.includes(attrName);
    }
    function replaceAtAndColonWithStandardSyntax(name) {
      if (name.startsWith("@")) {
        return name.replace("@", "x-on:");
      } else if (name.startsWith(":")) {
        return name.replace(":", "x-bind:");
      }
  
      return name;
    }
    function convertClassStringToArray(classList, filterFn = Boolean) {
      return classList.split(" ").filter(filterFn);
    }
    const TRANSITION_TYPE_IN = "in";
    const TRANSITION_TYPE_OUT = "out";
    function transitionIn(el, show, component, forceSkip = false) {
      // We don't want to transition on the initial page load.
      if (forceSkip) return show();
  
      if (el.__x_transition && el.__x_transition.type === TRANSITION_TYPE_IN) {
        // there is already a similar transition going on, this was probably triggered by
        // a change in a different property, let's just leave the previous one doing its job
        return;
      }
  
      const attrs = getXAttrs(el, component, "transition");
      const showAttr = getXAttrs(el, component, "show")[0]; // If this is triggered by a x-show.transition.
  
      if (showAttr && showAttr.modifiers.includes("transition")) {
        let modifiers = showAttr.modifiers; // If x-show.transition.out, we'll skip the "in" transition.
  
        if (modifiers.includes("out") && !modifiers.includes("in")) return show();
        const settingBothSidesOfTransition =
          modifiers.includes("in") && modifiers.includes("out"); // If x-show.transition.in...out... only use "in" related modifiers for this transition.
  
        modifiers = settingBothSidesOfTransition
          ? modifiers.filter((i, index) => index < modifiers.indexOf("out"))
          : modifiers;
        transitionHelperIn(el, modifiers, show); // Otherwise, we can assume x-transition:enter.
      } else if (
        attrs.some((attr) =>
          ["enter", "enter-start", "enter-end"].includes(attr.value)
        )
      ) {
        transitionClassesIn(el, component, attrs, show);
      } else {
        // If neither, just show that damn thing.
        show();
      }
    }
    function transitionOut(el, hide, component, forceSkip = false) {
      // We don't want to transition on the initial page load.
      if (forceSkip) return hide();
  
      if (el.__x_transition && el.__x_transition.type === TRANSITION_TYPE_OUT) {
        // there is already a similar transition going on, this was probably triggered by
        // a change in a different property, let's just leave the previous one doing its job
        return;
      }
  
      const attrs = getXAttrs(el, component, "transition");
      const showAttr = getXAttrs(el, component, "show")[0];
  
      if (showAttr && showAttr.modifiers.includes("transition")) {
        let modifiers = showAttr.modifiers;
        if (modifiers.includes("in") && !modifiers.includes("out")) return hide();
        const settingBothSidesOfTransition =
          modifiers.includes("in") && modifiers.includes("out");
        modifiers = settingBothSidesOfTransition
          ? modifiers.filter((i, index) => index > modifiers.indexOf("out"))
          : modifiers;
        transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hide);
      } else if (
        attrs.some((attr) =>
          ["leave", "leave-start", "leave-end"].includes(attr.value)
        )
      ) {
        transitionClassesOut(el, component, attrs, hide);
      } else {
        hide();
      }
    }
    function transitionHelperIn(el, modifiers, showCallback) {
      // Default values inspired by: https://material.io/design/motion/speed.html#duration
      const styleValues = {
        duration: modifierValue(modifiers, "duration", 150),
        origin: modifierValue(modifiers, "origin", "center"),
        first: {
          opacity: 0,
          scale: modifierValue(modifiers, "scale", 95),
        },
        second: {
          opacity: 1,
          scale: 100,
        },
      };
      transitionHelper(
        el,
        modifiers,
        showCallback,
        () => {},
        styleValues,
        TRANSITION_TYPE_IN
      );
    }
    function transitionHelperOut(
      el,
      modifiers,
      settingBothSidesOfTransition,
      hideCallback
    ) {
      // Make the "out" transition .5x slower than the "in". (Visually better)
      // HOWEVER, if they explicitly set a duration for the "out" transition,
      // use that.
      const duration = settingBothSidesOfTransition
        ? modifierValue(modifiers, "duration", 150)
        : modifierValue(modifiers, "duration", 150) / 2;
      const styleValues = {
        duration: duration,
        origin: modifierValue(modifiers, "origin", "center"),
        first: {
          opacity: 1,
          scale: 100,
        },
        second: {
          opacity: 0,
          scale: modifierValue(modifiers, "scale", 95),
        },
      };
      transitionHelper(
        el,
        modifiers,
        () => {},
        hideCallback,
        styleValues,
        TRANSITION_TYPE_OUT
      );
    }
  
    function modifierValue(modifiers, key, fallback) {
      // If the modifier isn't present, use the default.
      if (modifiers.indexOf(key) === -1) return fallback; // If it IS present, grab the value after it: x-show.transition.duration.500ms
  
      const rawValue = modifiers[modifiers.indexOf(key) + 1];
      if (!rawValue) return fallback;
  
      if (key === "scale") {
        // Check if the very next value is NOT a number and return the fallback.
        // If x-show.transition.scale, we'll use the default scale value.
        // That is how a user opts out of the opacity transition.
        if (!isNumeric(rawValue)) return fallback;
      }
  
      if (key === "duration") {
        // Support x-show.transition.duration.500ms && duration.500
        let match = rawValue.match(/([0-9]+)ms/);
        if (match) return match[1];
      }
  
      if (key === "origin") {
        // Support chaining origin directions: x-show.transition.top.right
        if (
          ["top", "right", "left", "center", "bottom"].includes(
            modifiers[modifiers.indexOf(key) + 2]
          )
        ) {
          return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
        }
      }
  
      return rawValue;
    }
  
    function transitionHelper(el, modifiers, hook1, hook2, styleValues, type) {
      // clear the previous transition if exists to avoid caching the wrong styles
      if (el.__x_transition) {
        cancelAnimationFrame(el.__x_transition.nextFrame);
        el.__x_transition.callback && el.__x_transition.callback();
      } // If the user set these style values, we'll put them back when we're done with them.
  
      const opacityCache = el.style.opacity;
      const transformCache = el.style.transform;
      const transformOriginCache = el.style.transformOrigin; // If no modifiers are present: x-show.transition, we'll default to both opacity and scale.
  
      const noModifiers =
        !modifiers.includes("opacity") && !modifiers.includes("scale");
      const transitionOpacity = noModifiers || modifiers.includes("opacity");
      const transitionScale = noModifiers || modifiers.includes("scale"); // These are the explicit stages of a transition (same stages for in and for out).
      // This way you can get a birds eye view of the hooks, and the differences
      // between them.
  
      const stages = {
        start() {
          if (transitionOpacity) el.style.opacity = styleValues.first.opacity;
          if (transitionScale)
            el.style.transform = `scale(${styleValues.first.scale / 100})`;
        },
  
        during() {
          if (transitionScale) el.style.transformOrigin = styleValues.origin;
          el.style.transitionProperty = [
            transitionOpacity ? `opacity` : ``,
            transitionScale ? `transform` : ``,
          ]
            .join(" ")
            .trim();
          el.style.transitionDuration = `${styleValues.duration / 1000}s`;
          el.style.transitionTimingFunction = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
        },
  
        show() {
          hook1();
        },
  
        end() {
          if (transitionOpacity) el.style.opacity = styleValues.second.opacity;
          if (transitionScale)
            el.style.transform = `scale(${styleValues.second.scale / 100})`;
        },
  
        hide() {
          hook2();
        },
  
        cleanup() {
          if (transitionOpacity) el.style.opacity = opacityCache;
          if (transitionScale) el.style.transform = transformCache;
          if (transitionScale) el.style.transformOrigin = transformOriginCache;
          el.style.transitionProperty = null;
          el.style.transitionDuration = null;
          el.style.transitionTimingFunction = null;
        },
      };
      transition(el, stages, type);
    }
    function transitionClassesIn(el, component, directives, showCallback) {
      let ensureStringExpression = (expression) => {
        return typeof expression === "function"
          ? component.evaluateReturnExpression(el, expression)
          : expression;
      };
  
      const enter = convertClassStringToArray(
        ensureStringExpression(
          (
            directives.find((i) => i.value === "enter") || {
              expression: "",
            }
          ).expression
        )
      );
      const enterStart = convertClassStringToArray(
        ensureStringExpression(
          (
            directives.find((i) => i.value === "enter-start") || {
              expression: "",
            }
          ).expression
        )
      );
      const enterEnd = convertClassStringToArray(
        ensureStringExpression(
          (
            directives.find((i) => i.value === "enter-end") || {
              expression: "",
            }
          ).expression
        )
      );
      transitionClasses(
        el,
        enter,
        enterStart,
        enterEnd,
        showCallback,
        () => {},
        TRANSITION_TYPE_IN
      );
    }
    function transitionClassesOut(el, component, directives, hideCallback) {
      const leave = convertClassStringToArray(
        (
          directives.find((i) => i.value === "leave") || {
            expression: "",
          }
        ).expression
      );
      const leaveStart = convertClassStringToArray(
        (
          directives.find((i) => i.value === "leave-start") || {
            expression: "",
          }
        ).expression
      );
      const leaveEnd = convertClassStringToArray(
        (
          directives.find((i) => i.value === "leave-end") || {
            expression: "",
          }
        ).expression
      );
      transitionClasses(
        el,
        leave,
        leaveStart,
        leaveEnd,
        () => {},
        hideCallback,
        TRANSITION_TYPE_OUT
      );
    }
    function transitionClasses(
      el,
      classesDuring,
      classesStart,
      classesEnd,
      hook1,
      hook2,
      type
    ) {
      // clear the previous transition if exists to avoid caching the wrong classes
      if (el.__x_transition) {
        cancelAnimationFrame(el.__x_transition.nextFrame);
        el.__x_transition.callback && el.__x_transition.callback();
      }
  
      const originalClasses = el.__x_original_classes || [];
      const stages = {
        start() {
          el.classList.add(...classesStart);
        },
  
        during() {
          el.classList.add(...classesDuring);
        },
  
        show() {
          hook1();
        },
  
        end() {
          // Don't remove classes that were in the original class attribute.
          el.classList.remove(
            ...classesStart.filter((i) => !originalClasses.includes(i))
          );
          el.classList.add(...classesEnd);
        },
  
        hide() {
          hook2();
        },
  
        cleanup() {
          el.classList.remove(
            ...classesDuring.filter((i) => !originalClasses.includes(i))
          );
          el.classList.remove(
            ...classesEnd.filter((i) => !originalClasses.includes(i))
          );
        },
      };
      transition(el, stages, type);
    }
    function transition(el, stages, type) {
      el.__x_transition = {
        // Set transition type so we can avoid clearing transition if the direction is the same
        type: type,
        // create a callback for the last stages of the transition so we can call it
        // from different point and early terminate it. Once will ensure that function
        // is only called one time.
        callback: once(() => {
          stages.hide(); // Adding an "isConnected" check, in case the callback
          // removed the element from the DOM.
  
          if (el.isConnected) {
            stages.cleanup();
          }
  
          delete el.__x_transition;
        }),
        // This store the next animation frame so we can cancel it
        nextFrame: null,
      };
      stages.start();
      stages.during();
      el.__x_transition.nextFrame = requestAnimationFrame(() => {
        // Note: Safari's transitionDuration property will list out comma separated transition durations
        // for every single transition property. Let's grab the first one and call it a day.
        let duration =
          Number(
            getComputedStyle(el)
              .transitionDuration.replace(/,.*/, "")
              .replace("s", "")
          ) * 1000;
  
        if (duration === 0) {
          duration =
            Number(getComputedStyle(el).animationDuration.replace("s", "")) *
            1000;
        }
  
        stages.show();
        el.__x_transition.nextFrame = requestAnimationFrame(() => {
          stages.end();
          setTimeout(el.__x_transition.callback, duration);
        });
      });
    }
    function isNumeric(subject) {
      return !isNaN(subject);
    } // Thanks @vuejs
    // https://github.com/vuejs/vue/blob/4de4649d9637262a9b007720b59f80ac72a5620c/src/shared/util.js
  
    function once(callback) {
      let called = false;
      return function () {
        if (!called) {
          called = true;
          callback.apply(this, arguments);
        }
      };
    }
  
    function handleForDirective(
      component,
      templateEl,
      expression,
      initialUpdate,
      extraVars
    ) {
      warnIfMalformedTemplate(templateEl, "x-for");
      let iteratorNames =
        typeof expression === "function"
          ? parseForExpression(
              component.evaluateReturnExpression(templateEl, expression)
            )
          : parseForExpression(expression);
      let items = evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(
        component,
        templateEl,
        iteratorNames,
        extraVars
      ); // As we walk the array, we'll also walk the DOM (updating/creating as we go).
  
      let currentEl = templateEl;
      items.forEach((item, index) => {
        let iterationScopeVariables = getIterationScopeVariables(
          iteratorNames,
          item,
          index,
          items,
          extraVars()
        );
        let currentKey = generateKeyForIteration(
          component,
          templateEl,
          index,
          iterationScopeVariables
        );
        let nextEl = lookAheadForMatchingKeyedElementAndMoveItIfFound(
          currentEl.nextElementSibling,
          currentKey
        ); // If we haven't found a matching key, insert the element at the current position.
  
        if (!nextEl) {
          nextEl = addElementInLoopAfterCurrentEl(templateEl, currentEl); // And transition it in if it's not the first page load.
  
          transitionIn(nextEl, () => {}, component, initialUpdate);
          nextEl.__x_for = iterationScopeVariables;
          component.initializeElements(nextEl, () => nextEl.__x_for); // Otherwise update the element we found.
        } else {
          // Temporarily remove the key indicator to allow the normal "updateElements" to work.
          delete nextEl.__x_for_key;
          nextEl.__x_for = iterationScopeVariables;
          component.updateElements(nextEl, () => nextEl.__x_for);
        }
  
        currentEl = nextEl;
        currentEl.__x_for_key = currentKey;
      });
      removeAnyLeftOverElementsFromPreviousUpdate(currentEl, component);
    } // This was taken from VueJS 2.* core. Thanks Vue!
  
    function parseForExpression(expression) {
      let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
      let stripParensRE = /^\(|\)$/g;
      let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
      let inMatch = expression.match(forAliasRE);
      if (!inMatch) return;
      let res = {};
      res.items = inMatch[2].trim();
      let item = inMatch[1].trim().replace(stripParensRE, "");
      let iteratorMatch = item.match(forIteratorRE);
  
      if (iteratorMatch) {
        res.item = item.replace(forIteratorRE, "").trim();
        res.index = iteratorMatch[1].trim();
  
        if (iteratorMatch[2]) {
          res.collection = iteratorMatch[2].trim();
        }
      } else {
        res.item = item;
      }
  
      return res;
    }
  
    function getIterationScopeVariables(
      iteratorNames,
      item,
      index,
      items,
      extraVars
    ) {
      // We must create a new object, so each iteration has a new scope
      let scopeVariables = extraVars ? _objectSpread2({}, extraVars) : {};
      scopeVariables[iteratorNames.item] = item;
      if (iteratorNames.index) scopeVariables[iteratorNames.index] = index;
      if (iteratorNames.collection)
        scopeVariables[iteratorNames.collection] = items;
      return scopeVariables;
    }
  
    function generateKeyForIteration(
      component,
      el,
      index,
      iterationScopeVariables
    ) {
      let bindKeyAttribute = getXAttrs(el, component, "bind").filter(
        (attr) => attr.value === "key"
      )[0]; // If the dev hasn't specified a key, just return the index of the iteration.
  
      if (!bindKeyAttribute) return index;
      return component.evaluateReturnExpression(
        el,
        bindKeyAttribute.expression,
        () => iterationScopeVariables
      );
    }
  
    function evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(
      component,
      el,
      iteratorNames,
      extraVars
    ) {
      let ifAttribute = getXAttrs(el, component, "if")[0];
  
      if (
        ifAttribute &&
        !component.evaluateReturnExpression(el, ifAttribute.expression)
      ) {
        return [];
      } // This adds support for the `i in n` syntax.
  
      if (isNumeric(iteratorNames.items)) {
        return Array.from(
          Array(parseInt(iteratorNames.items, 10)).keys(),
          (i) => i + 1
        );
      }
  
      return component.evaluateReturnExpression(
        el,
        iteratorNames.items,
        extraVars
      );
    }
  
    function addElementInLoopAfterCurrentEl(templateEl, currentEl) {
      let clone = document.importNode(templateEl.content, true);
      currentEl.parentElement.insertBefore(clone, currentEl.nextElementSibling);
      return currentEl.nextElementSibling;
    }
  
    function lookAheadForMatchingKeyedElementAndMoveItIfFound(
      nextEl,
      currentKey
    ) {
      if (!nextEl) return; // If the the key's DO match, no need to look ahead.
  
      if (nextEl.__x_for_key === currentKey) return nextEl; // If they don't, we'll look ahead for a match.
      // If we find it, we'll move it to the current position in the loop.
  
      let tmpNextEl = nextEl;
  
      while (tmpNextEl) {
        if (tmpNextEl.__x_for_key === currentKey) {
          return tmpNextEl.parentElement.insertBefore(tmpNextEl, nextEl);
        }
  
        tmpNextEl =
          tmpNextEl.nextElementSibling &&
          tmpNextEl.nextElementSibling.__x_for_key !== undefined
            ? tmpNextEl.nextElementSibling
            : false;
      }
    }
  
    function removeAnyLeftOverElementsFromPreviousUpdate(currentEl, component) {
      var nextElementFromOldLoop =
        currentEl.nextElementSibling &&
        currentEl.nextElementSibling.__x_for_key !== undefined
          ? currentEl.nextElementSibling
          : false;
  
      while (nextElementFromOldLoop) {
        let nextElementFromOldLoopImmutable = nextElementFromOldLoop;
        let nextSibling = nextElementFromOldLoop.nextElementSibling;
        transitionOut(
          nextElementFromOldLoop,
          () => {
            nextElementFromOldLoopImmutable.remove();
          },
          component
        );
        nextElementFromOldLoop =
          nextSibling && nextSibling.__x_for_key !== undefined
            ? nextSibling
            : false;
      }
    }
  
    function handleAttributeBindingDirective(
      component,
      el,
      attrName,
      expression,
      extraVars,
      attrType,
      modifiers
    ) {
      var value = component.evaluateReturnExpression(el, expression, extraVars);
  
      if (attrName === "value") {
        if (
          Alpine.ignoreFocusedForValueBinding &&
          document.activeElement.isSameNode(el)
        )
          return; // If nested model key is undefined, set the default value to empty string.
  
        if (value === undefined && expression.match(/\./)) {
          value = "";
        }
  
        if (el.type === "radio") {
          // Set radio value from x-bind:value, if no "value" attribute exists.
          // If there are any initial state values, radio will have a correct
          // "checked" value since x-bind:value is processed before x-model.
          if (el.attributes.value === undefined && attrType === "bind") {
            el.value = value;
          } else if (attrType !== "bind") {
            el.checked = el.value == value;
          }
        } else if (el.type === "checkbox") {
          // If we are explicitly binding a string to the :value, set the string,
          // If the value is a boolean, leave it alone, it will be set to "on"
          // automatically.
          if (typeof value === "string" && attrType === "bind") {
            el.value = value;
          } else if (attrType !== "bind") {
            if (Array.isArray(value)) {
              // I'm purposely not using Array.includes here because it's
              // strict, and because of Numeric/String mis-casting, I
              // want the "includes" to be "fuzzy".
              el.checked = value.some((val) => val == el.value);
            } else {
              el.checked = !!value;
            }
          }
        } else if (el.tagName === "SELECT") {
          updateSelect(el, value);
        } else {
          if (el.value === value) return;
          el.value = value;
        }
      } else if (attrName === "class") {
        if (Array.isArray(value)) {
          const originalClasses = el.__x_original_classes || [];
          el.setAttribute(
            "class",
            arrayUnique(originalClasses.concat(value)).join(" ")
          );
        } else if (typeof value === "object") {
          // Sorting the keys / class names by their boolean value will ensure that
          // anything that evaluates to `false` and needs to remove classes is run first.
          const keysSortedByBooleanValue = Object.keys(value).sort(
            (a, b) => value[a] - value[b]
          );
          keysSortedByBooleanValue.forEach((classNames) => {
            if (value[classNames]) {
              convertClassStringToArray(classNames).forEach((className) =>
                el.classList.add(className)
              );
            } else {
              convertClassStringToArray(classNames).forEach((className) =>
                el.classList.remove(className)
              );
            }
          });
        } else {
          const originalClasses = el.__x_original_classes || [];
          const newClasses = convertClassStringToArray(value);
          el.setAttribute(
            "class",
            arrayUnique(originalClasses.concat(newClasses)).join(" ")
          );
        }
      } else {
        attrName = modifiers.includes("camel") ? camelCase(attrName) : attrName; // If an attribute's bound value is null, undefined or false, remove the attribute
  
        if ([null, undefined, false].includes(value)) {
          el.removeAttribute(attrName);
        } else {
          isBooleanAttr(attrName)
            ? setIfChanged(el, attrName, attrName)
            : setIfChanged(el, attrName, value);
        }
      }
    }
  
    function setIfChanged(el, attrName, value) {
      if (el.getAttribute(attrName) != value) {
        el.setAttribute(attrName, value);
      }
    }
  
    function updateSelect(el, value) {
      const arrayWrappedValue = [].concat(value).map((value) => {
        return value + "";
      });
      Array.from(el.options).forEach((option) => {
        option.selected = arrayWrappedValue.includes(option.value || option.text);
      });
    }
  
    function handleTextDirective(el, output, expression) {
      // If nested model key is undefined, set the default value to empty string.
      if (output === undefined && expression.match(/\./)) {
        output = "";
      }
  
      el.textContent = output;
    }
  
    function handleHtmlDirective(component, el, expression, extraVars) {
      el.innerHTML = component.evaluateReturnExpression(
        el,
        expression,
        extraVars
      );
    }
  
    function handleShowDirective(
      component,
      el,
      value,
      modifiers,
      initialUpdate = false
    ) {
      const hide = () => {
        el.style.display = "none";
      };
  
      const show = () => {
        if (el.style.length === 1 && el.style.display === "none") {
          el.removeAttribute("style");
        } else {
          el.style.removeProperty("display");
        }
      };
  
      if (initialUpdate === true) {
        if (value) {
          show();
        } else {
          hide();
        }
  
        return;
      }
  
      const handle = (resolve) => {
        if (value) {
          if (el.style.display === "none" || el.__x_transition) {
            transitionIn(
              el,
              () => {
                show();
              },
              component
            );
          }
  
          resolve(() => {});
        } else {
          if (el.style.display !== "none") {
            transitionOut(
              el,
              () => {
                resolve(() => {
                  hide();
                });
              },
              component
            );
          } else {
            resolve(() => {});
          }
        }
      }; // The working of x-show is a bit complex because we need to
      // wait for any child transitions to finish before hiding
      // some element. Also, this has to be done recursively.
      // If x-show.immediate, foregoe the waiting.
  
      if (modifiers.includes("immediate")) {
        handle((finish) => finish());
        return;
      } // x-show is encountered during a DOM tree walk. If an element
      // we encounter is NOT a child of another x-show element we
      // can execute the previous x-show stack (if one exists).
  
      if (
        component.showDirectiveLastElement &&
        !component.showDirectiveLastElement.contains(el)
      ) {
        component.executeAndClearRemainingShowDirectiveStack();
      }
  
      component.showDirectiveStack.push(handle);
      component.showDirectiveLastElement = el;
    }
  
    function handleIfDirective(
      component,
      el,
      expressionResult,
      initialUpdate,
      extraVars
    ) {
      warnIfMalformedTemplate(el, "x-if");
      const elementHasAlreadyBeenAdded =
        el.nextElementSibling && el.nextElementSibling.__x_inserted_me === true;
  
      if (
        expressionResult &&
        (!elementHasAlreadyBeenAdded || el.__x_transition)
      ) {
        const clone = document.importNode(el.content, true);
        el.parentElement.insertBefore(clone, el.nextElementSibling);
        transitionIn(el.nextElementSibling, () => {}, component, initialUpdate);
        component.initializeElements(el.nextElementSibling, extraVars);
        el.nextElementSibling.__x_inserted_me = true;
      } else if (!expressionResult && elementHasAlreadyBeenAdded) {
        transitionOut(
          el.nextElementSibling,
          () => {
            el.nextElementSibling.remove();
          },
          component,
          initialUpdate
        );
      }
    }
  
    function registerListener(
      component,
      el,
      event,
      modifiers,
      expression,
      extraVars = {}
    ) {
      const options = {
        passive: modifiers.includes("passive"),
      };
  
      if (modifiers.includes("camel")) {
        event = camelCase(event);
      }
  
      if (modifiers.includes("away")) {
        let handler = (e) => {
          // Don't do anything if the click came from the element or within it.
          if (el.contains(e.target)) return; // Don't do anything if this element isn't currently visible.
  
          if (el.offsetWidth < 1 && el.offsetHeight < 1) return; // Now that we are sure the element is visible, AND the click
          // is from outside it, let's run the expression.
  
          runListenerHandler(component, expression, e, extraVars);
  
          if (modifiers.includes("once")) {
            document.removeEventListener(event, handler, options);
          }
        }; // Listen for this event at the root level.
  
        document.addEventListener(event, handler, options);
      } else {
        let listenerTarget = modifiers.includes("window")
          ? window
          : modifiers.includes("document")
          ? document
          : el;
  
        let handler = (e) => {
          // Remove this global event handler if the element that declared it
          // has been removed. It's now stale.
          if (listenerTarget === window || listenerTarget === document) {
            if (!document.body.contains(el)) {
              listenerTarget.removeEventListener(event, handler, options);
              return;
            }
          }
  
          if (isKeyEvent(event)) {
            if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
              return;
            }
          }
  
          if (modifiers.includes("prevent")) e.preventDefault();
          if (modifiers.includes("stop")) e.stopPropagation(); // If the .self modifier isn't present, or if it is present and
          // the target element matches the element we are registering the
          // event on, run the handler
  
          if (!modifiers.includes("self") || e.target === el) {
            const returnValue = runListenerHandler(
              component,
              expression,
              e,
              extraVars
            );
            returnValue.then((value) => {
              if (value === false) {
                e.preventDefault();
              } else {
                if (modifiers.includes("once")) {
                  listenerTarget.removeEventListener(event, handler, options);
                }
              }
            });
          }
        };
  
        if (modifiers.includes("debounce")) {
          let nextModifier =
            modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
          let wait = isNumeric(nextModifier.split("ms")[0])
            ? Number(nextModifier.split("ms")[0])
            : 250;
          handler = debounce(handler, wait);
        }
  
        listenerTarget.addEventListener(event, handler, options);
      }
    }
  
    function runListenerHandler(component, expression, e, extraVars) {
      return component.evaluateCommandExpression(e.target, expression, () => {
        return _objectSpread2(
          _objectSpread2({}, extraVars()),
          {},
          {
            $event: e,
          }
        );
      });
    }
  
    function isKeyEvent(event) {
      return ["keydown", "keyup"].includes(event);
    }
  
    function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
      let keyModifiers = modifiers.filter((i) => {
        return !["window", "document", "prevent", "stop"].includes(i);
      });
  
      if (keyModifiers.includes("debounce")) {
        let debounceIndex = keyModifiers.indexOf("debounce");
        keyModifiers.splice(
          debounceIndex,
          isNumeric(
            (keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]
          )
            ? 2
            : 1
        );
      } // If no modifier is specified, we'll call it a press.
  
      if (keyModifiers.length === 0) return false; // If one is passed, AND it matches the key pressed, we'll call it a press.
  
      if (keyModifiers.length === 1 && keyModifiers[0] === keyToModifier(e.key))
        return false; // The user is listening for key combinations.
  
      const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
      const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) =>
        keyModifiers.includes(modifier)
      );
      keyModifiers = keyModifiers.filter(
        (i) => !selectedSystemKeyModifiers.includes(i)
      );
  
      if (selectedSystemKeyModifiers.length > 0) {
        const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter(
          (modifier) => {
            // Alias "cmd" and "super" to "meta"
            if (modifier === "cmd" || modifier === "super") modifier = "meta";
            return e[`${modifier}Key`];
          }
        ); // If all the modifiers selected are pressed, ...
  
        if (
          activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length
        ) {
          // AND the remaining key is pressed as well. It's a press.
          if (keyModifiers[0] === keyToModifier(e.key)) return false;
        }
      } // We'll call it NOT a valid keypress.
  
      return true;
    }
  
    function keyToModifier(key) {
      switch (key) {
        case "/":
          return "slash";
  
        case " ":
        case "Spacebar":
          return "space";
  
        default:
          return key && kebabCase(key);
      }
    }
  
    function registerModelListener(
      component,
      el,
      modifiers,
      expression,
      extraVars
    ) {
      // If the element we are binding to is a select, a radio, or checkbox
      // we'll listen for the change event instead of the "input" event.
      var event =
        el.tagName.toLowerCase() === "select" ||
        ["checkbox", "radio"].includes(el.type) ||
        modifiers.includes("lazy")
          ? "change"
          : "input";
      const listenerExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
      registerListener(
        component,
        el,
        event,
        modifiers,
        listenerExpression,
        () => {
          return _objectSpread2(
            _objectSpread2({}, extraVars()),
            {},
            {
              rightSideOfExpression: generateModelAssignmentFunction(
                el,
                modifiers,
                expression
              ),
            }
          );
        }
      );
    }
  
    function generateModelAssignmentFunction(el, modifiers, expression) {
      if (el.type === "radio") {
        // Radio buttons only work properly when they share a name attribute.
        // People might assume we take care of that for them, because
        // they already set a shared "x-model" attribute.
        if (!el.hasAttribute("name")) el.setAttribute("name", expression);
      }
  
      return (event, currentValue) => {
        // Check for event.detail due to an issue where IE11 handles other events as a CustomEvent.
        if (event instanceof CustomEvent && event.detail) {
          return event.detail;
        } else if (el.type === "checkbox") {
          // If the data we are binding to is an array, toggle its value inside the array.
          if (Array.isArray(currentValue)) {
            const newValue = modifiers.includes("number")
              ? safeParseNumber(event.target.value)
              : event.target.value;
            return event.target.checked
              ? currentValue.concat([newValue])
              : currentValue.filter((i) => i !== newValue);
          } else {
            return event.target.checked;
          }
        } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
          return modifiers.includes("number")
            ? Array.from(event.target.selectedOptions).map((option) => {
                const rawValue = option.value || option.text;
                return safeParseNumber(rawValue);
              })
            : Array.from(event.target.selectedOptions).map((option) => {
                return option.value || option.text;
              });
        } else {
          const rawValue = event.target.value;
          return modifiers.includes("number")
            ? safeParseNumber(rawValue)
            : modifiers.includes("trim")
            ? rawValue.trim()
            : rawValue;
        }
      };
    }
  
    function safeParseNumber(rawValue) {
      const number = rawValue ? parseFloat(rawValue) : null;
      return isNumeric(number) ? number : rawValue;
    }
  
    /**
     * Copyright (C) 2017 salesforce.com, inc.
     */
    const { isArray } = Array;
    const {
      getPrototypeOf,
      create: ObjectCreate,
      defineProperty: ObjectDefineProperty,
      defineProperties: ObjectDefineProperties,
      isExtensible,
      getOwnPropertyDescriptor,
      getOwnPropertyNames,
      getOwnPropertySymbols,
      preventExtensions,
      hasOwnProperty,
    } = Object;
    const {
      push: ArrayPush,
      concat: ArrayConcat,
      map: ArrayMap,
    } = Array.prototype;
    function isUndefined(obj) {
      return obj === undefined;
    }
    function isFunction(obj) {
      return typeof obj === "function";
    }
    function isObject(obj) {
      return typeof obj === "object";
    }
    const proxyToValueMap = new WeakMap();
    function registerProxy(proxy, value) {
      proxyToValueMap.set(proxy, value);
    }
    const unwrap = (replicaOrAny) =>
      proxyToValueMap.get(replicaOrAny) || replicaOrAny;
  
    function wrapValue(membrane, value) {
      return membrane.valueIsObservable(value) ? membrane.getProxy(value) : value;
    }
    /**
     * Unwrap property descriptors will set value on original descriptor
     * We only need to unwrap if value is specified
     * @param descriptor external descrpitor provided to define new property on original value
     */
    function unwrapDescriptor(descriptor) {
      if (hasOwnProperty.call(descriptor, "value")) {
        descriptor.value = unwrap(descriptor.value);
      }
      return descriptor;
    }
    function lockShadowTarget(membrane, shadowTarget, originalTarget) {
      const targetKeys = ArrayConcat.call(
        getOwnPropertyNames(originalTarget),
        getOwnPropertySymbols(originalTarget)
      );
      targetKeys.forEach((key) => {
        let descriptor = getOwnPropertyDescriptor(originalTarget, key);
        // We do not need to wrap the descriptor if configurable
        // Because we can deal with wrapping it when user goes through
        // Get own property descriptor. There is also a chance that this descriptor
        // could change sometime in the future, so we can defer wrapping
        // until we need to
        if (!descriptor.configurable) {
          descriptor = wrapDescriptor(membrane, descriptor, wrapValue);
        }
        ObjectDefineProperty(shadowTarget, key, descriptor);
      });
      preventExtensions(shadowTarget);
    }
    class ReactiveProxyHandler {
      constructor(membrane, value) {
        this.originalTarget = value;
        this.membrane = membrane;
      }
      get(shadowTarget, key) {
        const { originalTarget, membrane } = this;
        const value = originalTarget[key];
        const { valueObserved } = membrane;
        valueObserved(originalTarget, key);
        return membrane.getProxy(value);
      }
      set(shadowTarget, key, value) {
        const {
          originalTarget,
          membrane: { valueMutated },
        } = this;
        const oldValue = originalTarget[key];
        if (oldValue !== value) {
          originalTarget[key] = value;
          valueMutated(originalTarget, key);
        } else if (key === "length" && isArray(originalTarget)) {
          // fix for issue #236: push will add the new index, and by the time length
          // is updated, the internal length is already equal to the new length value
          // therefore, the oldValue is equal to the value. This is the forking logic
          // to support this use case.
          valueMutated(originalTarget, key);
        }
        return true;
      }
      deleteProperty(shadowTarget, key) {
        const {
          originalTarget,
          membrane: { valueMutated },
        } = this;
        delete originalTarget[key];
        valueMutated(originalTarget, key);
        return true;
      }
      apply(shadowTarget, thisArg, argArray) {
        /* No op */
      }
      construct(target, argArray, newTarget) {
        /* No op */
      }
      has(shadowTarget, key) {
        const {
          originalTarget,
          membrane: { valueObserved },
        } = this;
        valueObserved(originalTarget, key);
        return key in originalTarget;
      }
      ownKeys(shadowTarget) {
        const { originalTarget } = this;
        return ArrayConcat.call(
          getOwnPropertyNames(originalTarget),
          getOwnPropertySymbols(originalTarget)
        );
      }
      isExtensible(shadowTarget) {
        const shadowIsExtensible = isExtensible(shadowTarget);
        if (!shadowIsExtensible) {
          return shadowIsExtensible;
        }
        const { originalTarget, membrane } = this;
        const targetIsExtensible = isExtensible(originalTarget);
        if (!targetIsExtensible) {
          lockShadowTarget(membrane, shadowTarget, originalTarget);
        }
        return targetIsExtensible;
      }
      setPrototypeOf(shadowTarget, prototype) {}
      getPrototypeOf(shadowTarget) {
        const { originalTarget } = this;
        return getPrototypeOf(originalTarget);
      }
      getOwnPropertyDescriptor(shadowTarget, key) {
        const { originalTarget, membrane } = this;
        const { valueObserved } = this.membrane;
        // keys looked up via hasOwnProperty need to be reactive
        valueObserved(originalTarget, key);
        let desc = getOwnPropertyDescriptor(originalTarget, key);
        if (isUndefined(desc)) {
          return desc;
        }
        const shadowDescriptor = getOwnPropertyDescriptor(shadowTarget, key);
        if (!isUndefined(shadowDescriptor)) {
          return shadowDescriptor;
        }
        // Note: by accessing the descriptor, the key is marked as observed
        // but access to the value, setter or getter (if available) cannot observe
        // mutations, just like regular methods, in which case we just do nothing.
        desc = wrapDescriptor(membrane, desc, wrapValue);
        if (!desc.configurable) {
          // If descriptor from original target is not configurable,
          // We must copy the wrapped descriptor over to the shadow target.
          // Otherwise, proxy will throw an invariant error.
          // This is our last chance to lock the value.
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
          ObjectDefineProperty(shadowTarget, key, desc);
        }
        return desc;
      }
      preventExtensions(shadowTarget) {
        const { originalTarget, membrane } = this;
        lockShadowTarget(membrane, shadowTarget, originalTarget);
        preventExtensions(originalTarget);
        return true;
      }
      defineProperty(shadowTarget, key, descriptor) {
        const { originalTarget, membrane } = this;
        const { valueMutated } = membrane;
        const { configurable } = descriptor;
        // We have to check for value in descriptor
        // because Object.freeze(proxy) calls this method
        // with only { configurable: false, writeable: false }
        // Additionally, method will only be called with writeable:false
        // if the descriptor has a value, as opposed to getter/setter
        // So we can just check if writable is present and then see if
        // value is present. This eliminates getter and setter descriptors
        if (
          hasOwnProperty.call(descriptor, "writable") &&
          !hasOwnProperty.call(descriptor, "value")
        ) {
          const originalDescriptor = getOwnPropertyDescriptor(
            originalTarget,
            key
          );
          descriptor.value = originalDescriptor.value;
        }
        ObjectDefineProperty(originalTarget, key, unwrapDescriptor(descriptor));
        if (configurable === false) {
          ObjectDefineProperty(
            shadowTarget,
            key,
            wrapDescriptor(membrane, descriptor, wrapValue)
          );
        }
        valueMutated(originalTarget, key);
        return true;
      }
    }
  
    function wrapReadOnlyValue(membrane, value) {
      return membrane.valueIsObservable(value)
        ? membrane.getReadOnlyProxy(value)
        : value;
    }
    class ReadOnlyHandler {
      constructor(membrane, value) {
        this.originalTarget = value;
        this.membrane = membrane;
      }
      get(shadowTarget, key) {
        const { membrane, originalTarget } = this;
        const value = originalTarget[key];
        const { valueObserved } = membrane;
        valueObserved(originalTarget, key);
        return membrane.getReadOnlyProxy(value);
      }
      set(shadowTarget, key, value) {
        return false;
      }
      deleteProperty(shadowTarget, key) {
        return false;
      }
      apply(shadowTarget, thisArg, argArray) {
        /* No op */
      }
      construct(target, argArray, newTarget) {
        /* No op */
      }
      has(shadowTarget, key) {
        const {
          originalTarget,
          membrane: { valueObserved },
        } = this;
        valueObserved(originalTarget, key);
        return key in originalTarget;
      }
      ownKeys(shadowTarget) {
        const { originalTarget } = this;
        return ArrayConcat.call(
          getOwnPropertyNames(originalTarget),
          getOwnPropertySymbols(originalTarget)
        );
      }
      setPrototypeOf(shadowTarget, prototype) {}
      getOwnPropertyDescriptor(shadowTarget, key) {
        const { originalTarget, membrane } = this;
        const { valueObserved } = membrane;
        // keys looked up via hasOwnProperty need to be reactive
        valueObserved(originalTarget, key);
        let desc = getOwnPropertyDescriptor(originalTarget, key);
        if (isUndefined(desc)) {
          return desc;
        }
        const shadowDescriptor = getOwnPropertyDescriptor(shadowTarget, key);
        if (!isUndefined(shadowDescriptor)) {
          return shadowDescriptor;
        }
        // Note: by accessing the descriptor, the key is marked as observed
        // but access to the value or getter (if available) cannot be observed,
        // just like regular methods, in which case we just do nothing.
        desc = wrapDescriptor(membrane, desc, wrapReadOnlyValue);
        if (hasOwnProperty.call(desc, "set")) {
          desc.set = undefined; // readOnly membrane does not allow setters
        }
        if (!desc.configurable) {
          // If descriptor from original target is not configurable,
          // We must copy the wrapped descriptor over to the shadow target.
          // Otherwise, proxy will throw an invariant error.
          // This is our last chance to lock the value.
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
          ObjectDefineProperty(shadowTarget, key, desc);
        }
        return desc;
      }
      preventExtensions(shadowTarget) {
        return false;
      }
      defineProperty(shadowTarget, key, descriptor) {
        return false;
      }
    }
    function createShadowTarget(value) {
      let shadowTarget = undefined;
      if (isArray(value)) {
        shadowTarget = [];
      } else if (isObject(value)) {
        shadowTarget = {};
      }
      return shadowTarget;
    }
    const ObjectDotPrototype = Object.prototype;
    function defaultValueIsObservable(value) {
      // intentionally checking for null
      if (value === null) {
        return false;
      }
      // treat all non-object types, including undefined, as non-observable values
      if (typeof value !== "object") {
        return false;
      }
      if (isArray(value)) {
        return true;
      }
      const proto = getPrototypeOf(value);
      return (
        proto === ObjectDotPrototype ||
        proto === null ||
        getPrototypeOf(proto) === null
      );
    }
    const defaultValueObserved = (obj, key) => {
      /* do nothing */
    };
    const defaultValueMutated = (obj, key) => {
      /* do nothing */
    };
    const defaultValueDistortion = (value) => value;
    function wrapDescriptor(membrane, descriptor, getValue) {
      const { set, get } = descriptor;
      if (hasOwnProperty.call(descriptor, "value")) {
        descriptor.value = getValue(membrane, descriptor.value);
      } else {
        if (!isUndefined(get)) {
          descriptor.get = function () {
            // invoking the original getter with the original target
            return getValue(membrane, get.call(unwrap(this)));
          };
        }
        if (!isUndefined(set)) {
          descriptor.set = function (value) {
            // At this point we don't have a clear indication of whether
            // or not a valid mutation will occur, we don't have the key,
            // and we are not sure why and how they are invoking this setter.
            // Nevertheless we preserve the original semantics by invoking the
            // original setter with the original target and the unwrapped value
            set.call(unwrap(this), membrane.unwrapProxy(value));
          };
        }
      }
      return descriptor;
    }
    class ReactiveMembrane {
      constructor(options) {
        this.valueDistortion = defaultValueDistortion;
        this.valueMutated = defaultValueMutated;
        this.valueObserved = defaultValueObserved;
        this.valueIsObservable = defaultValueIsObservable;
        this.objectGraph = new WeakMap();
        if (!isUndefined(options)) {
          const {
            valueDistortion,
            valueMutated,
            valueObserved,
            valueIsObservable,
          } = options;
          this.valueDistortion = isFunction(valueDistortion)
            ? valueDistortion
            : defaultValueDistortion;
          this.valueMutated = isFunction(valueMutated)
            ? valueMutated
            : defaultValueMutated;
          this.valueObserved = isFunction(valueObserved)
            ? valueObserved
            : defaultValueObserved;
          this.valueIsObservable = isFunction(valueIsObservable)
            ? valueIsObservable
            : defaultValueIsObservable;
        }
      }
      getProxy(value) {
        const unwrappedValue = unwrap(value);
        const distorted = this.valueDistortion(unwrappedValue);
        if (this.valueIsObservable(distorted)) {
          const o = this.getReactiveState(unwrappedValue, distorted);
          // when trying to extract the writable version of a readonly
          // we return the readonly.
          return o.readOnly === value ? value : o.reactive;
        }
        return distorted;
      }
      getReadOnlyProxy(value) {
        value = unwrap(value);
        const distorted = this.valueDistortion(value);
        if (this.valueIsObservable(distorted)) {
          return this.getReactiveState(value, distorted).readOnly;
        }
        return distorted;
      }
      unwrapProxy(p) {
        return unwrap(p);
      }
      getReactiveState(value, distortedValue) {
        const { objectGraph } = this;
        let reactiveState = objectGraph.get(distortedValue);
        if (reactiveState) {
          return reactiveState;
        }
        const membrane = this;
        reactiveState = {
          get reactive() {
            const reactiveHandler = new ReactiveProxyHandler(
              membrane,
              distortedValue
            );
            // caching the reactive proxy after the first time it is accessed
            const proxy = new Proxy(
              createShadowTarget(distortedValue),
              reactiveHandler
            );
            registerProxy(proxy, value);
            ObjectDefineProperty(this, "reactive", { value: proxy });
            return proxy;
          },
          get readOnly() {
            const readOnlyHandler = new ReadOnlyHandler(membrane, distortedValue);
            // caching the readOnly proxy after the first time it is accessed
            const proxy = new Proxy(
              createShadowTarget(distortedValue),
              readOnlyHandler
            );
            registerProxy(proxy, value);
            ObjectDefineProperty(this, "readOnly", { value: proxy });
            return proxy;
          },
        };
        objectGraph.set(distortedValue, reactiveState);
        return reactiveState;
      }
    }
    /** version: 0.26.0 */
  
    function wrap(data, mutationCallback) {
      let membrane = new ReactiveMembrane({
        valueMutated(target, key) {
          mutationCallback(target, key);
        },
      });
      return {
        data: membrane.getProxy(data),
        membrane: membrane,
      };
    }
    function unwrap$1(membrane, observable) {
      let unwrappedData = membrane.unwrapProxy(observable);
      let copy = {};
      Object.keys(unwrappedData).forEach((key) => {
        if (["$el", "$refs", "$nextTick", "$watch"].includes(key)) return;
        copy[key] = unwrappedData[key];
      });
      return copy;
    }
  
    class Component {
      constructor(el, componentForClone = null) {
        this.$el = el;
        const dataAttr = this.$el.getAttribute("x-data");
        const dataExpression = dataAttr === "" ? "{}" : dataAttr;
        const initExpression = this.$el.getAttribute("x-init");
        let dataExtras = {
          $el: this.$el,
        };
        let canonicalComponentElementReference = componentForClone
          ? componentForClone.$el
          : this.$el;
        Object.entries(Alpine.magicProperties).forEach(([name, callback]) => {
          Object.defineProperty(dataExtras, `$${name}`, {
            get: function get() {
              return callback(canonicalComponentElementReference);
            },
          });
        });
        this.unobservedData = componentForClone
          ? componentForClone.getUnobservedData()
          : saferEval(dataExpression, dataExtras);
        // Construct a Proxy-based observable. This will be used to handle reactivity.
  
        let { membrane, data } = this.wrapDataInObservable(this.unobservedData);
        this.$data = data;
        this.membrane = membrane; // After making user-supplied data methods reactive, we can now add
        // our magic properties to the original data for access.
  
        this.unobservedData.$el = this.$el;
        this.unobservedData.$refs = this.getRefsProxy();
        this.nextTickStack = [];
  
        this.unobservedData.$nextTick = (callback) => {
          this.nextTickStack.push(callback);
        };
  
        this.watchers = {};
  
        this.unobservedData.$watch = (property, callback) => {
          if (!this.watchers[property]) this.watchers[property] = [];
          this.watchers[property].push(callback);
        }; // Register custom magic properties.
  
        Object.entries(Alpine.magicProperties).forEach(([name, callback]) => {
          Object.defineProperty(this.unobservedData, `$${name}`, {
            get: function get() {
              return callback(canonicalComponentElementReference);
            },
          });
        });
        this.showDirectiveStack = [];
        this.showDirectiveLastElement;
        componentForClone ||
          Alpine.onBeforeComponentInitializeds.forEach((callback) =>
            callback(this)
          );
        var initReturnedCallback; // If x-init is present AND we aren't cloning (skip x-init on clone)
  
        if (initExpression && !componentForClone) {
          // We want to allow data manipulation, but not trigger DOM updates just yet.
          // We haven't even initialized the elements with their Alpine bindings. I mean c'mon.
          this.pauseReactivity = true;
          initReturnedCallback = this.evaluateReturnExpression(
            this.$el,
            initExpression
          );
          this.pauseReactivity = false;
        } // Register all our listeners and set all our attribute bindings.
  
        this.initializeElements(this.$el); // Use mutation observer to detect new elements being added within this component at run-time.
        // Alpine's just so darn flexible amirite?
  
        this.listenForNewElementsToInitialize();
  
        if (typeof initReturnedCallback === "function") {
          // Run the callback returned from the "x-init" hook to allow the user to do stuff after
          // Alpine's got it's grubby little paws all over everything.
          initReturnedCallback.call(this.$data);
        }
  
        componentForClone ||
          setTimeout(() => {
            Alpine.onComponentInitializeds.forEach((callback) => callback(this));
          }, 0);
      }
  
      getUnobservedData() {
        return unwrap$1(this.membrane, this.$data);
      }
  
      wrapDataInObservable(data) {
        var self = this;
        let updateDom = debounce(function () {
          self.updateElements(self.$el);
        }, 0);
        return wrap(data, (target, key) => {
          if (self.watchers[key]) {
            // If there's a watcher for this specific key, run it.
            self.watchers[key].forEach((callback) => callback(target[key]));
          } else if (Array.isArray(target)) {
            // Arrays are special cases, if any of the items change, we consider the array as mutated.
            Object.keys(self.watchers).forEach((fullDotNotationKey) => {
              let dotNotationParts = fullDotNotationKey.split("."); // Ignore length mutations since they would result in duplicate calls.
              // For example, when calling push, we would get a mutation for the item's key
              // and a second mutation for the length property.
  
              if (key === "length") return;
              dotNotationParts.reduce((comparisonData, part) => {
                if (Object.is(target, comparisonData[part])) {
                  self.watchers[fullDotNotationKey].forEach((callback) =>
                    callback(target)
                  );
                }
  
                return comparisonData[part];
              }, self.getUnobservedData());
            });
          } else {
            // Let's walk through the watchers with "dot-notation" (foo.bar) and see
            // if this mutation fits any of them.
            Object.keys(self.watchers)
              .filter((i) => i.includes("."))
              .forEach((fullDotNotationKey) => {
                let dotNotationParts = fullDotNotationKey.split("."); // If this dot-notation watcher's last "part" doesn't match the current
                // key, then skip it early for performance reasons.
  
                if (key !== dotNotationParts[dotNotationParts.length - 1]) return; // Now, walk through the dot-notation "parts" recursively to find
                // a match, and call the watcher if one's found.
  
                dotNotationParts.reduce((comparisonData, part) => {
                  if (Object.is(target, comparisonData)) {
                    // Run the watchers.
                    self.watchers[fullDotNotationKey].forEach((callback) =>
                      callback(target[key])
                    );
                  }
  
                  return comparisonData[part];
                }, self.getUnobservedData());
              });
          } // Don't react to data changes for cases like the `x-created` hook.
  
          if (self.pauseReactivity) return;
          updateDom();
        });
      }
  
      walkAndSkipNestedComponents(
        el,
        callback,
        initializeComponentCallback = () => {}
      ) {
        walk(el, (el) => {
          // We've hit a component.
          if (el.hasAttribute("x-data")) {
            // If it's not the current one.
            if (!el.isSameNode(this.$el)) {
              // Initialize it if it's not.
              if (!el.__x) initializeComponentCallback(el); // Now we'll let that sub-component deal with itself.
  
              return false;
            }
          }
  
          return callback(el);
        });
      }
  
      initializeElements(rootEl, extraVars = () => {}) {
        this.walkAndSkipNestedComponents(
          rootEl,
          (el) => {
            // Don't touch spawns from for loop
            if (el.__x_for_key !== undefined) return false; // Don't touch spawns from if directives
  
            if (el.__x_inserted_me !== undefined) return false;
            this.initializeElement(el, extraVars);
          },
          (el) => {
            el.__x = new Component(el);
          }
        );
        this.executeAndClearRemainingShowDirectiveStack();
        this.executeAndClearNextTickStack(rootEl);
      }
  
      initializeElement(el, extraVars) {
        // To support class attribute merging, we have to know what the element's
        // original class attribute looked like for reference.
        if (el.hasAttribute("class") && getXAttrs(el, this).length > 0) {
          el.__x_original_classes = convertClassStringToArray(
            el.getAttribute("class")
          );
        }
  
        this.registerListeners(el, extraVars);
        this.resolveBoundAttributes(el, true, extraVars);
      }
  
      updateElements(rootEl, extraVars = () => {}) {
        this.walkAndSkipNestedComponents(
          rootEl,
          (el) => {
            // Don't touch spawns from for loop (and check if the root is actually a for loop in a parent, don't skip it.)
            if (el.__x_for_key !== undefined && !el.isSameNode(this.$el))
              return false;
            this.updateElement(el, extraVars);
          },
          (el) => {
            el.__x = new Component(el);
          }
        );
        this.executeAndClearRemainingShowDirectiveStack();
        this.executeAndClearNextTickStack(rootEl);
      }
  
      executeAndClearNextTickStack(el) {
        // Skip spawns from alpine directives
        if (el === this.$el && this.nextTickStack.length > 0) {
          // We run the tick stack after the next frame to allow any
          // running transitions to pass the initial show stage.
          requestAnimationFrame(() => {
            while (this.nextTickStack.length > 0) {
              this.nextTickStack.shift()();
            }
          });
        }
      }
  
      executeAndClearRemainingShowDirectiveStack() {
        // The goal here is to start all the x-show transitions
        // and build a nested promise chain so that elements
        // only hide when the children are finished hiding.
        this.showDirectiveStack
          .reverse()
          .map((thing) => {
            return new Promise((resolve) => {
              thing((finish) => {
                resolve(finish);
              });
            });
          })
          .reduce(
            (nestedPromise, promise) => {
              return nestedPromise.then(() => {
                return promise.then((finish) => finish());
              });
            },
            Promise.resolve(() => {})
          ); // We've processed the handler stack. let's clear it.
  
        this.showDirectiveStack = [];
        this.showDirectiveLastElement = undefined;
      }
  
      updateElement(el, extraVars) {
        this.resolveBoundAttributes(el, false, extraVars);
      }
  
      registerListeners(el, extraVars) {
        getXAttrs(el, this).forEach(({ type, value, modifiers, expression }) => {
          switch (type) {
            case "on":
              registerListener(this, el, value, modifiers, expression, extraVars);
              break;
  
            case "model":
              registerModelListener(this, el, modifiers, expression, extraVars);
              break;
          }
        });
      }
  
      resolveBoundAttributes(el, initialUpdate = false, extraVars) {
        let attrs = getXAttrs(el, this);
        attrs.forEach(({ type, value, modifiers, expression }) => {
          switch (type) {
            case "model":
              handleAttributeBindingDirective(
                this,
                el,
                "value",
                expression,
                extraVars,
                type,
                modifiers
              );
              break;
  
            case "bind":
              // The :key binding on an x-for is special, ignore it.
              if (el.tagName.toLowerCase() === "template" && value === "key")
                return;
              handleAttributeBindingDirective(
                this,
                el,
                value,
                expression,
                extraVars,
                type,
                modifiers
              );
              break;
  
            case "text":
              var output = this.evaluateReturnExpression(
                el,
                expression,
                extraVars
              );
              handleTextDirective(el, output, expression);
              break;
  
            case "html":
              handleHtmlDirective(this, el, expression, extraVars);
              break;
  
            case "show":
              var output = this.evaluateReturnExpression(
                el,
                expression,
                extraVars
              );
              handleShowDirective(this, el, output, modifiers, initialUpdate);
              break;
  
            case "if":
              // If this element also has x-for on it, don't process x-if.
              // We will let the "x-for" directive handle the "if"ing.
              if (attrs.some((i) => i.type === "for")) return;
              var output = this.evaluateReturnExpression(
                el,
                expression,
                extraVars
              );
              handleIfDirective(this, el, output, initialUpdate, extraVars);
              break;
  
            case "for":
              handleForDirective(this, el, expression, initialUpdate, extraVars);
              break;
  
            case "cloak":
              el.removeAttribute("x-cloak");
              break;
          }
        });
      }
  
      evaluateReturnExpression(el, expression, extraVars = () => {}) {
        return saferEval(
          expression,
          this.$data,
          _objectSpread2(
            _objectSpread2({}, extraVars()),
            {},
            {
              $dispatch: this.getDispatchFunction(el),
            }
          )
        );
      }
  
      evaluateCommandExpression(el, expression, extraVars = () => {}) {
        return saferEvalNoReturn(
          expression,
          this.$data,
          _objectSpread2(
            _objectSpread2({}, extraVars()),
            {},
            {
              $dispatch: this.getDispatchFunction(el),
            }
          )
        );
      }
  
      getDispatchFunction(el) {
        return (event, detail = {}) => {
          el.dispatchEvent(
            new CustomEvent(event, {
              detail,
              bubbles: true,
            })
          );
        };
      }
  
      listenForNewElementsToInitialize() {
        const targetNode = this.$el;
        const observerOptions = {
          childList: true,
          attributes: true,
          subtree: true,
        };
        const observer = new MutationObserver((mutations) => {
          for (let i = 0; i < mutations.length; i++) {
            // Filter out mutations triggered from child components.
            const closestParentComponent = mutations[i].target.closest(
              "[x-data]"
            );
            if (
              !(
                closestParentComponent &&
                closestParentComponent.isSameNode(this.$el)
              )
            )
              continue;
  
            if (
              mutations[i].type === "attributes" &&
              mutations[i].attributeName === "x-data"
            ) {
              const rawData = saferEval(
                mutations[i].target.getAttribute("x-data") || "{}",
                {
                  $el: this.$el,
                }
              );
              Object.keys(rawData).forEach((key) => {
                if (this.$data[key] !== rawData[key]) {
                  this.$data[key] = rawData[key];
                }
              });
            }
  
            if (mutations[i].addedNodes.length > 0) {
              mutations[i].addedNodes.forEach((node) => {
                if (node.nodeType !== 1 || node.__x_inserted_me) return;
  
                if (node.matches("[x-data]") && !node.__x) {
                  node.__x = new Component(node);
                  return;
                }
  
                this.initializeElements(node);
              });
            }
          }
        });
        observer.observe(targetNode, observerOptions);
      }
  
      getRefsProxy() {
        var self = this;
        var refObj = {};
        // One of the goals of this is to not hold elements in memory, but rather re-evaluate
        // the DOM when the system needs something from it. This way, the framework is flexible and
        // friendly to outside DOM changes from libraries like Vue/Livewire.
        // For this reason, I'm using an "on-demand" proxy to fake a "$refs" object.
  
        return new Proxy(refObj, {
          get(object, property) {
            if (property === "$isAlpineProxy") return true;
            var ref; // We can't just query the DOM because it's hard to filter out refs in
            // nested components.
  
            self.walkAndSkipNestedComponents(self.$el, (el) => {
              if (
                el.hasAttribute("x-ref") &&
                el.getAttribute("x-ref") === property
              ) {
                ref = el;
              }
            });
            return ref;
          },
        });
      }
    }
  
    const Alpine = {
      version: "2.7.0",
      pauseMutationObserver: false,
      magicProperties: {},
      onComponentInitializeds: [],
      onBeforeComponentInitializeds: [],
      ignoreFocusedForValueBinding: false,
      start: async function start() {
        if (!isTesting()) {
          await domReady();
        }
  
        this.discoverComponents((el) => {
          this.initializeComponent(el);
        }); // It's easier and more performant to just support Turbolinks than listen
        // to MutationObserver mutations at the document level.
  
        document.addEventListener("turbolinks:load", () => {
          this.discoverUninitializedComponents((el) => {
            this.initializeComponent(el);
          });
        });
        this.listenForNewUninitializedComponentsAtRunTime((el) => {
          this.initializeComponent(el);
        });
      },
      discoverComponents: function discoverComponents(callback) {
        const rootEls = document.querySelectorAll("[x-data]");
        rootEls.forEach((rootEl) => {
          callback(rootEl);
        });
      },
      discoverUninitializedComponents: function discoverUninitializedComponents(
        callback,
        el = null
      ) {
        const rootEls = (el || document).querySelectorAll("[x-data]");
        Array.from(rootEls)
          .filter((el) => el.__x === undefined)
          .forEach((rootEl) => {
            callback(rootEl);
          });
      },
      listenForNewUninitializedComponentsAtRunTime: function listenForNewUninitializedComponentsAtRunTime(
        callback
      ) {
        const targetNode = document.querySelector("body");
        const observerOptions = {
          childList: true,
          attributes: true,
          subtree: true,
        };
        const observer = new MutationObserver((mutations) => {
          if (this.pauseMutationObserver) return;
  
          for (let i = 0; i < mutations.length; i++) {
            if (mutations[i].addedNodes.length > 0) {
              mutations[i].addedNodes.forEach((node) => {
                // Discard non-element nodes (like line-breaks)
                if (node.nodeType !== 1) return; // Discard any changes happening within an existing component.
                // They will take care of themselves.
  
                if (node.parentElement && node.parentElement.closest("[x-data]"))
                  return;
                this.discoverUninitializedComponents((el) => {
                  this.initializeComponent(el);
                }, node.parentElement);
              });
            }
          }
        });
        observer.observe(targetNode, observerOptions);
      },
      initializeComponent: function initializeComponent(el) {
        if (!el.__x) {
          // Wrap in a try/catch so that we don't prevent other components
          // from initializing when one component contains an error.
          try {
            el.__x = new Component(el);
          } catch (error) {
            setTimeout(() => {
              throw error;
            }, 0);
          }
        }
      },
      clone: function clone(component, newEl) {
        if (!newEl.__x) {
          newEl.__x = new Component(newEl, component);
        }
      },
      addMagicProperty: function addMagicProperty(name, callback) {
        this.magicProperties[name] = callback;
      },
      onComponentInitialized: function onComponentInitialized(callback) {
        this.onComponentInitializeds.push(callback);
      },
      onBeforeComponentInitialized: function onBeforeComponentInitialized(
        callback
      ) {
        this.onBeforeComponentInitializeds.push(callback);
      },
    };
  
    if (!isTesting()) {
      window.Alpine = Alpine;
  
      if (window.deferLoadingAlpine) {
        window.deferLoadingAlpine(function () {
          window.Alpine.start();
        });
      } else {
        window.Alpine.start();
      }
    }
  
    return Alpine;
  });
  
  // ==================================================
  // fancyBox v3.5.7
  //
  // Licensed GPLv3 for open source use
  // or fancyBox Commercial License for commercial use
  //
  // http://fancyapps.com/fancybox/
  // Copyright 2019 fancyApps
  //
  // ==================================================
  !(function (t, e, n, o) {
    "use strict";
    function i(t, e) {
      var o,
        i,
        a,
        s = [],
        r = 0;
      (t && t.isDefaultPrevented()) ||
        (t.preventDefault(),
        (e = e || {}),
        t && t.data && (e = h(t.data.options, e)),
        (o = e.$target || n(t.currentTarget).trigger("blur")),
        ((a = n.fancybox.getInstance()) && a.$trigger && a.$trigger.is(o)) ||
          (e.selector
            ? (s = n(e.selector))
            : ((i = o.attr("data-fancybox") || ""),
              i
                ? ((s = t.data ? t.data.items : []),
                  (s = s.length
                    ? s.filter('[data-fancybox="' + i + '"]')
                    : n('[data-fancybox="' + i + '"]')))
                : (s = [o])),
          (r = n(s).index(o)),
          r < 0 && (r = 0),
          (a = n.fancybox.open(s, e, r)),
          (a.$trigger = o)));
    }
    if (((t.console = t.console || { info: function (t) {} }), n)) {
      if (n.fn.fancybox) return void console.info("fancyBox already initialized");
      var a = {
          closeExisting: !1,
          loop: !1,
          gutter: 50,
          keyboard: !0,
          preventCaptionOverlap: !0,
          arrows: !0,
          infobar: !0,
          smallBtn: "auto",
          toolbar: "auto",
          buttons: ["zoom", "slideShow", "thumbs", "close"],
          idleTime: 3,
          protect: !1,
          modal: !1,
          image: { preload: !1 },
          ajax: { settings: { data: { fancybox: !0 } } },
          iframe: {
            tpl:
              '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
            preload: !0,
            css: {},
            attr: { scrolling: "auto" },
          },
          video: {
            tpl:
              '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
            format: "",
            autoStart: !0,
          },
          defaultType: "image",
          animationEffect: "zoom",
          animationDuration: 366,
          zoomOpacity: "auto",
          transitionEffect: "fade",
          transitionDuration: 366,
          slideClass: "",
          baseClass: "",
          baseTpl:
            '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
          spinnerTpl: '<div class="fancybox-loading"></div>',
          errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
          btnTpl: {
            download:
              '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
            zoom:
              '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
            close:
              '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
            arrowLeft:
              '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
            arrowRight:
              '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
            smallBtn:
              '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>',
          },
          parentEl: "body",
          hideScrollbar: !0,
          autoFocus: !0,
          backFocus: !0,
          trapFocus: !0,
          fullScreen: { autoStart: !1 },
          touch: { vertical: !0, momentum: !0 },
          hash: null,
          media: {},
          slideShow: { autoStart: !1, speed: 3e3 },
          thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y",
          },
          wheel: "auto",
          onInit: n.noop,
          beforeLoad: n.noop,
          afterLoad: n.noop,
          beforeShow: n.noop,
          afterShow: n.noop,
          beforeClose: n.noop,
          afterClose: n.noop,
          onActivate: n.noop,
          onDeactivate: n.noop,
          clickContent: function (t, e) {
            return "image" === t.type && "zoom";
          },
          clickSlide: "close",
          clickOutside: "close",
          dblclickContent: !1,
          dblclickSlide: !1,
          dblclickOutside: !1,
          mobile: {
            preventCaptionOverlap: !1,
            idleTime: !1,
            clickContent: function (t, e) {
              return "image" === t.type && "toggleControls";
            },
            clickSlide: function (t, e) {
              return "image" === t.type ? "toggleControls" : "close";
            },
            dblclickContent: function (t, e) {
              return "image" === t.type && "zoom";
            },
            dblclickSlide: function (t, e) {
              return "image" === t.type && "zoom";
            },
          },
          lang: "en",
          i18n: {
            en: {
              CLOSE: "Close",
              NEXT: "Next",
              PREV: "Previous",
              ERROR:
                "The requested content cannot be loaded. <br/> Please try again later.",
              PLAY_START: "Start slideshow",
              PLAY_STOP: "Pause slideshow",
              FULL_SCREEN: "Full screen",
              THUMBS: "Thumbnails",
              DOWNLOAD: "Download",
              SHARE: "Share",
              ZOOM: "Zoom",
            },
            de: {
              CLOSE: "Schlie&szlig;en",
              NEXT: "Weiter",
              PREV: "Zur&uuml;ck",
              ERROR:
                "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
              PLAY_START: "Diaschau starten",
              PLAY_STOP: "Diaschau beenden",
              FULL_SCREEN: "Vollbild",
              THUMBS: "Vorschaubilder",
              DOWNLOAD: "Herunterladen",
              SHARE: "Teilen",
              ZOOM: "Vergr&ouml;&szlig;ern",
            },
          },
        },
        s = n(t),
        r = n(e),
        c = 0,
        l = function (t) {
          return t && t.hasOwnProperty && t instanceof n;
        },
        d = (function () {
          return (
            t.requestAnimationFrame ||
            t.webkitRequestAnimationFrame ||
            t.mozRequestAnimationFrame ||
            t.oRequestAnimationFrame ||
            function (e) {
              return t.setTimeout(e, 1e3 / 60);
            }
          );
        })(),
        u = (function () {
          return (
            t.cancelAnimationFrame ||
            t.webkitCancelAnimationFrame ||
            t.mozCancelAnimationFrame ||
            t.oCancelAnimationFrame ||
            function (e) {
              t.clearTimeout(e);
            }
          );
        })(),
        f = (function () {
          var t,
            n = e.createElement("fakeelement"),
            o = {
              transition: "transitionend",
              OTransition: "oTransitionEnd",
              MozTransition: "transitionend",
              WebkitTransition: "webkitTransitionEnd",
            };
          for (t in o) if (void 0 !== n.style[t]) return o[t];
          return "transitionend";
        })(),
        p = function (t) {
          return t && t.length && t[0].offsetHeight;
        },
        h = function (t, e) {
          var o = n.extend(!0, {}, t, e);
          return (
            n.each(e, function (t, e) {
              n.isArray(e) && (o[t] = e);
            }),
            o
          );
        },
        g = function (t) {
          var o, i;
          return (
            !(!t || t.ownerDocument !== e) &&
            (n(".fancybox-container").css("pointer-events", "none"),
            (o = {
              x: t.getBoundingClientRect().left + t.offsetWidth / 2,
              y: t.getBoundingClientRect().top + t.offsetHeight / 2,
            }),
            (i = e.elementFromPoint(o.x, o.y) === t),
            n(".fancybox-container").css("pointer-events", ""),
            i)
          );
        },
        b = function (t, e, o) {
          var i = this;
          (i.opts = h({ index: o }, n.fancybox.defaults)),
            n.isPlainObject(e) && (i.opts = h(i.opts, e)),
            n.fancybox.isMobile && (i.opts = h(i.opts, i.opts.mobile)),
            (i.id = i.opts.id || ++c),
            (i.currIndex = parseInt(i.opts.index, 10) || 0),
            (i.prevIndex = null),
            (i.prevPos = null),
            (i.currPos = 0),
            (i.firstRun = !0),
            (i.group = []),
            (i.slides = {}),
            i.addContent(t),
            i.group.length && i.init();
        };
      n.extend(b.prototype, {
        init: function () {
          var o,
            i,
            a = this,
            s = a.group[a.currIndex],
            r = s.opts;
          r.closeExisting && n.fancybox.close(!0),
            n("body").addClass("fancybox-active"),
            !n.fancybox.getInstance() &&
              !1 !== r.hideScrollbar &&
              !n.fancybox.isMobile &&
              e.body.scrollHeight > t.innerHeight &&
              (n("head").append(
                '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
                  (t.innerWidth - e.documentElement.clientWidth) +
                  "px;}</style>"
              ),
              n("body").addClass("compensate-for-scrollbar")),
            (i = ""),
            n.each(r.buttons, function (t, e) {
              i += r.btnTpl[e] || "";
            }),
            (o = n(
              a.translate(
                a,
                r.baseTpl
                  .replace("{{buttons}}", i)
                  .replace("{{arrows}}", r.btnTpl.arrowLeft + r.btnTpl.arrowRight)
              )
            )
              .attr("id", "fancybox-container-" + a.id)
              .addClass(r.baseClass)
              .data("FancyBox", a)
              .appendTo(r.parentEl)),
            (a.$refs = { container: o }),
            [
              "bg",
              "inner",
              "infobar",
              "toolbar",
              "stage",
              "caption",
              "navigation",
            ].forEach(function (t) {
              a.$refs[t] = o.find(".fancybox-" + t);
            }),
            a.trigger("onInit"),
            a.activate(),
            a.jumpTo(a.currIndex);
        },
        translate: function (t, e) {
          var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
          return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
            return void 0 === n[e] ? t : n[e];
          });
        },
        addContent: function (t) {
          var e,
            o = this,
            i = n.makeArray(t);
          n.each(i, function (t, e) {
            var i,
              a,
              s,
              r,
              c,
              l = {},
              d = {};
            n.isPlainObject(e)
              ? ((l = e), (d = e.opts || e))
              : "object" === n.type(e) && n(e).length
              ? ((i = n(e)),
                (d = i.data() || {}),
                (d = n.extend(!0, {}, d, d.options)),
                (d.$orig = i),
                (l.src = o.opts.src || d.src || i.attr("href")),
                l.type || l.src || ((l.type = "inline"), (l.src = e)))
              : (l = { type: "html", src: e + "" }),
              (l.opts = n.extend(!0, {}, o.opts, d)),
              n.isArray(d.buttons) && (l.opts.buttons = d.buttons),
              n.fancybox.isMobile &&
                l.opts.mobile &&
                (l.opts = h(l.opts, l.opts.mobile)),
              (a = l.type || l.opts.type),
              (r = l.src || ""),
              !a &&
                r &&
                ((s = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                  ? ((a = "video"),
                    l.opts.video.format ||
                      (l.opts.video.format =
                        "video/" + ("ogv" === s[1] ? "ogg" : s[1])))
                  : r.match(
                      /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                    )
                  ? (a = "image")
                  : r.match(/\.(pdf)((\?|#).*)?$/i)
                  ? ((a = "iframe"),
                    (l = n.extend(!0, l, {
                      contentType: "pdf",
                      opts: { iframe: { preload: !1 } },
                    })))
                  : "#" === r.charAt(0) && (a = "inline")),
              a ? (l.type = a) : o.trigger("objectNeedsType", l),
              l.contentType ||
                (l.contentType =
                  n.inArray(l.type, ["html", "inline", "ajax"]) > -1
                    ? "html"
                    : l.type),
              (l.index = o.group.length),
              "auto" == l.opts.smallBtn &&
                (l.opts.smallBtn =
                  n.inArray(l.type, ["html", "inline", "ajax"]) > -1),
              "auto" === l.opts.toolbar && (l.opts.toolbar = !l.opts.smallBtn),
              (l.$thumb = l.opts.$thumb || null),
              l.opts.$trigger &&
                l.index === o.opts.index &&
                ((l.$thumb = l.opts.$trigger.find("img:first")),
                l.$thumb.length && (l.opts.$orig = l.opts.$trigger)),
              (l.$thumb && l.$thumb.length) ||
                !l.opts.$orig ||
                (l.$thumb = l.opts.$orig.find("img:first")),
              l.$thumb && !l.$thumb.length && (l.$thumb = null),
              (l.thumb = l.opts.thumb || (l.$thumb ? l.$thumb[0].src : null)),
              "function" === n.type(l.opts.caption) &&
                (l.opts.caption = l.opts.caption.apply(e, [o, l])),
              "function" === n.type(o.opts.caption) &&
                (l.opts.caption = o.opts.caption.apply(e, [o, l])),
              l.opts.caption instanceof n ||
                (l.opts.caption =
                  void 0 === l.opts.caption ? "" : l.opts.caption + ""),
              "ajax" === l.type &&
                ((c = r.split(/\s+/, 2)),
                c.length > 1 &&
                  ((l.src = c.shift()), (l.opts.filter = c.shift()))),
              l.opts.modal &&
                (l.opts = n.extend(!0, l.opts, {
                  trapFocus: !0,
                  infobar: 0,
                  toolbar: 0,
                  smallBtn: 0,
                  keyboard: 0,
                  slideShow: 0,
                  fullScreen: 0,
                  thumbs: 0,
                  touch: 0,
                  clickContent: !1,
                  clickSlide: !1,
                  clickOutside: !1,
                  dblclickContent: !1,
                  dblclickSlide: !1,
                  dblclickOutside: !1,
                })),
              o.group.push(l);
          }),
            Object.keys(o.slides).length &&
              (o.updateControls(),
              (e = o.Thumbs) && e.isActive && (e.create(), e.focus()));
        },
        addEvents: function () {
          var e = this;
          e.removeEvents(),
            e.$refs.container
              .on("click.fb-close", "[data-fancybox-close]", function (t) {
                t.stopPropagation(), t.preventDefault(), e.close(t);
              })
              .on(
                "touchstart.fb-prev click.fb-prev",
                "[data-fancybox-prev]",
                function (t) {
                  t.stopPropagation(), t.preventDefault(), e.previous();
                }
              )
              .on(
                "touchstart.fb-next click.fb-next",
                "[data-fancybox-next]",
                function (t) {
                  t.stopPropagation(), t.preventDefault(), e.next();
                }
              )
              .on("click.fb", "[data-fancybox-zoom]", function (t) {
                e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
              }),
            s.on("orientationchange.fb resize.fb", function (t) {
              t && t.originalEvent && "resize" === t.originalEvent.type
                ? (e.requestId && u(e.requestId),
                  (e.requestId = d(function () {
                    e.update(t);
                  })))
                : (e.current &&
                    "iframe" === e.current.type &&
                    e.$refs.stage.hide(),
                  setTimeout(
                    function () {
                      e.$refs.stage.show(), e.update(t);
                    },
                    n.fancybox.isMobile ? 600 : 250
                  ));
            }),
            r.on("keydown.fb", function (t) {
              var o = n.fancybox ? n.fancybox.getInstance() : null,
                i = o.current,
                a = t.keyCode || t.which;
              if (9 == a) return void (i.opts.trapFocus && e.focus(t));
              if (
                !(
                  !i.opts.keyboard ||
                  t.ctrlKey ||
                  t.altKey ||
                  t.shiftKey ||
                  n(t.target).is("input,textarea,video,audio,select")
                )
              )
                return 8 === a || 27 === a
                  ? (t.preventDefault(), void e.close(t))
                  : 37 === a || 38 === a
                  ? (t.preventDefault(), void e.previous())
                  : 39 === a || 40 === a
                  ? (t.preventDefault(), void e.next())
                  : void e.trigger("afterKeydown", t, a);
            }),
            e.group[e.currIndex].opts.idleTime &&
              ((e.idleSecondsCounter = 0),
              r.on(
                "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
                function (t) {
                  (e.idleSecondsCounter = 0),
                    e.isIdle && e.showControls(),
                    (e.isIdle = !1);
                }
              ),
              (e.idleInterval = t.setInterval(function () {
                ++e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime &&
                  !e.isDragging &&
                  ((e.isIdle = !0), (e.idleSecondsCounter = 0), e.hideControls());
              }, 1e3)));
        },
        removeEvents: function () {
          var e = this;
          s.off("orientationchange.fb resize.fb"),
            r.off("keydown.fb .fb-idle"),
            this.$refs.container.off(".fb-close .fb-prev .fb-next"),
            e.idleInterval &&
              (t.clearInterval(e.idleInterval), (e.idleInterval = null));
        },
        previous: function (t) {
          return this.jumpTo(this.currPos - 1, t);
        },
        next: function (t) {
          return this.jumpTo(this.currPos + 1, t);
        },
        jumpTo: function (t, e) {
          var o,
            i,
            a,
            s,
            r,
            c,
            l,
            d,
            u,
            f = this,
            h = f.group.length;
          if (!(f.isDragging || f.isClosing || (f.isAnimating && f.firstRun))) {
            if (
              ((t = parseInt(t, 10)),
              !(a = f.current ? f.current.opts.loop : f.opts.loop) &&
                (t < 0 || t >= h))
            )
              return !1;
            if (
              ((o = f.firstRun = !Object.keys(f.slides).length),
              (r = f.current),
              (f.prevIndex = f.currIndex),
              (f.prevPos = f.currPos),
              (s = f.createSlide(t)),
              h > 1 &&
                ((a || s.index < h - 1) && f.createSlide(t + 1),
                (a || s.index > 0) && f.createSlide(t - 1)),
              (f.current = s),
              (f.currIndex = s.index),
              (f.currPos = s.pos),
              f.trigger("beforeShow", o),
              f.updateControls(),
              (s.forcedDuration = void 0),
              n.isNumeric(e)
                ? (s.forcedDuration = e)
                : (e = s.opts[o ? "animationDuration" : "transitionDuration"]),
              (e = parseInt(e, 10)),
              (i = f.isMoved(s)),
              s.$slide.addClass("fancybox-slide--current"),
              o)
            )
              return (
                s.opts.animationEffect &&
                  e &&
                  f.$refs.container.css("transition-duration", e + "ms"),
                f.$refs.container.addClass("fancybox-is-open").trigger("focus"),
                f.loadSlide(s),
                void f.preload("image")
              );
            (c = n.fancybox.getTranslate(r.$slide)),
              (l = n.fancybox.getTranslate(f.$refs.stage)),
              n.each(f.slides, function (t, e) {
                n.fancybox.stop(e.$slide, !0);
              }),
              r.pos !== s.pos && (r.isComplete = !1),
              r.$slide.removeClass(
                "fancybox-slide--complete fancybox-slide--current"
              ),
              i
                ? ((u = c.left - (r.pos * c.width + r.pos * r.opts.gutter)),
                  n.each(f.slides, function (t, o) {
                    o.$slide
                      .removeClass("fancybox-animated")
                      .removeClass(function (t, e) {
                        return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(
                          " "
                        );
                      });
                    var i = o.pos * c.width + o.pos * o.opts.gutter;
                    n.fancybox.setTranslate(o.$slide, {
                      top: 0,
                      left: i - l.left + u,
                    }),
                      o.pos !== s.pos &&
                        o.$slide.addClass(
                          "fancybox-slide--" +
                            (o.pos > s.pos ? "next" : "previous")
                        ),
                      p(o.$slide),
                      n.fancybox.animate(
                        o.$slide,
                        {
                          top: 0,
                          left:
                            (o.pos - s.pos) * c.width +
                            (o.pos - s.pos) * o.opts.gutter,
                        },
                        e,
                        function () {
                          o.$slide
                            .css({ transform: "", opacity: "" })
                            .removeClass(
                              "fancybox-slide--next fancybox-slide--previous"
                            ),
                            o.pos === f.currPos && f.complete();
                        }
                      );
                  }))
                : e &&
                  s.opts.transitionEffect &&
                  ((d =
                    "fancybox-animated fancybox-fx-" + s.opts.transitionEffect),
                  r.$slide.addClass(
                    "fancybox-slide--" + (r.pos > s.pos ? "next" : "previous")
                  ),
                  n.fancybox.animate(
                    r.$slide,
                    d,
                    e,
                    function () {
                      r.$slide
                        .removeClass(d)
                        .removeClass(
                          "fancybox-slide--next fancybox-slide--previous"
                        );
                    },
                    !1
                  )),
              s.isLoaded ? f.revealContent(s) : f.loadSlide(s),
              f.preload("image");
          }
        },
        createSlide: function (t) {
          var e,
            o,
            i = this;
          return (
            (o = t % i.group.length),
            (o = o < 0 ? i.group.length + o : o),
            !i.slides[t] &&
              i.group[o] &&
              ((e = n('<div class="fancybox-slide"></div>').appendTo(
                i.$refs.stage
              )),
              (i.slides[t] = n.extend(!0, {}, i.group[o], {
                pos: t,
                $slide: e,
                isLoaded: !1,
              })),
              i.updateSlide(i.slides[t])),
            i.slides[t]
          );
        },
        scaleToActual: function (t, e, o) {
          var i,
            a,
            s,
            r,
            c,
            l = this,
            d = l.current,
            u = d.$content,
            f = n.fancybox.getTranslate(d.$slide).width,
            p = n.fancybox.getTranslate(d.$slide).height,
            h = d.width,
            g = d.height;
          l.isAnimating ||
            l.isMoved() ||
            !u ||
            "image" != d.type ||
            !d.isLoaded ||
            d.hasError ||
            ((l.isAnimating = !0),
            n.fancybox.stop(u),
            (t = void 0 === t ? 0.5 * f : t),
            (e = void 0 === e ? 0.5 * p : e),
            (i = n.fancybox.getTranslate(u)),
            (i.top -= n.fancybox.getTranslate(d.$slide).top),
            (i.left -= n.fancybox.getTranslate(d.$slide).left),
            (r = h / i.width),
            (c = g / i.height),
            (a = 0.5 * f - 0.5 * h),
            (s = 0.5 * p - 0.5 * g),
            h > f &&
              ((a = i.left * r - (t * r - t)),
              a > 0 && (a = 0),
              a < f - h && (a = f - h)),
            g > p &&
              ((s = i.top * c - (e * c - e)),
              s > 0 && (s = 0),
              s < p - g && (s = p - g)),
            l.updateCursor(h, g),
            n.fancybox.animate(
              u,
              { top: s, left: a, scaleX: r, scaleY: c },
              o || 366,
              function () {
                l.isAnimating = !1;
              }
            ),
            l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop());
        },
        scaleToFit: function (t) {
          var e,
            o = this,
            i = o.current,
            a = i.$content;
          o.isAnimating ||
            o.isMoved() ||
            !a ||
            "image" != i.type ||
            !i.isLoaded ||
            i.hasError ||
            ((o.isAnimating = !0),
            n.fancybox.stop(a),
            (e = o.getFitPos(i)),
            o.updateCursor(e.width, e.height),
            n.fancybox.animate(
              a,
              {
                top: e.top,
                left: e.left,
                scaleX: e.width / a.width(),
                scaleY: e.height / a.height(),
              },
              t || 366,
              function () {
                o.isAnimating = !1;
              }
            ));
        },
        getFitPos: function (t) {
          var e,
            o,
            i,
            a,
            s = this,
            r = t.$content,
            c = t.$slide,
            l = t.width || t.opts.width,
            d = t.height || t.opts.height,
            u = {};
          return (
            !!(t.isLoaded && r && r.length) &&
            ((e = n.fancybox.getTranslate(s.$refs.stage).width),
            (o = n.fancybox.getTranslate(s.$refs.stage).height),
            (e -=
              parseFloat(c.css("paddingLeft")) +
              parseFloat(c.css("paddingRight")) +
              parseFloat(r.css("marginLeft")) +
              parseFloat(r.css("marginRight"))),
            (o -=
              parseFloat(c.css("paddingTop")) +
              parseFloat(c.css("paddingBottom")) +
              parseFloat(r.css("marginTop")) +
              parseFloat(r.css("marginBottom"))),
            (l && d) || ((l = e), (d = o)),
            (i = Math.min(1, e / l, o / d)),
            (l *= i),
            (d *= i),
            l > e - 0.5 && (l = e),
            d > o - 0.5 && (d = o),
            "image" === t.type
              ? ((u.top =
                  Math.floor(0.5 * (o - d)) + parseFloat(c.css("paddingTop"))),
                (u.left =
                  Math.floor(0.5 * (e - l)) + parseFloat(c.css("paddingLeft"))))
              : "video" === t.contentType &&
                ((a =
                  t.opts.width && t.opts.height ? l / d : t.opts.ratio || 16 / 9),
                d > l / a ? (d = l / a) : l > d * a && (l = d * a)),
            (u.width = l),
            (u.height = d),
            u)
          );
        },
        update: function (t) {
          var e = this;
          n.each(e.slides, function (n, o) {
            e.updateSlide(o, t);
          });
        },
        updateSlide: function (t, e) {
          var o = this,
            i = t && t.$content,
            a = t.width || t.opts.width,
            s = t.height || t.opts.height,
            r = t.$slide;
          o.adjustCaption(t),
            i &&
              (a || s || "video" === t.contentType) &&
              !t.hasError &&
              (n.fancybox.stop(i),
              n.fancybox.setTranslate(i, o.getFitPos(t)),
              t.pos === o.currPos && ((o.isAnimating = !1), o.updateCursor())),
            o.adjustLayout(t),
            r.length &&
              (r.trigger("refresh"),
              t.pos === o.currPos &&
                o.$refs.toolbar
                  .add(o.$refs.navigation.find(".fancybox-button--arrow_right"))
                  .toggleClass(
                    "compensate-for-scrollbar",
                    r.get(0).scrollHeight > r.get(0).clientHeight
                  )),
            o.trigger("onUpdate", t, e);
        },
        centerSlide: function (t) {
          var e = this,
            o = e.current,
            i = o.$slide;
          !e.isClosing &&
            o &&
            (i.siblings().css({ transform: "", opacity: "" }),
            i
              .parent()
              .children()
              .removeClass("fancybox-slide--previous fancybox-slide--next"),
            n.fancybox.animate(
              i,
              { top: 0, left: 0, opacity: 1 },
              void 0 === t ? 0 : t,
              function () {
                i.css({ transform: "", opacity: "" }),
                  o.isComplete || e.complete();
              },
              !1
            ));
        },
        isMoved: function (t) {
          var e,
            o,
            i = t || this.current;
          return (
            !!i &&
            ((o = n.fancybox.getTranslate(this.$refs.stage)),
            (e = n.fancybox.getTranslate(i.$slide)),
            !i.$slide.hasClass("fancybox-animated") &&
              (Math.abs(e.top - o.top) > 0.5 || Math.abs(e.left - o.left) > 0.5))
          );
        },
        updateCursor: function (t, e) {
          var o,
            i,
            a = this,
            s = a.current,
            r = a.$refs.container;
          s &&
            !a.isClosing &&
            a.Guestures &&
            (r.removeClass(
              "fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"
            ),
            (o = a.canPan(t, e)),
            (i = !!o || a.isZoomable()),
            r.toggleClass("fancybox-is-zoomable", i),
            n("[data-fancybox-zoom]").prop("disabled", !i),
            o
              ? r.addClass("fancybox-can-pan")
              : i &&
                ("zoom" === s.opts.clickContent ||
                  (n.isFunction(s.opts.clickContent) &&
                    "zoom" == s.opts.clickContent(s)))
              ? r.addClass("fancybox-can-zoomIn")
              : s.opts.touch &&
                (s.opts.touch.vertical || a.group.length > 1) &&
                "video" !== s.contentType &&
                r.addClass("fancybox-can-swipe"));
        },
        isZoomable: function () {
          var t,
            e = this,
            n = e.current;
          if (n && !e.isClosing && "image" === n.type && !n.hasError) {
            if (!n.isLoaded) return !0;
            if (
              (t = e.getFitPos(n)) &&
              (n.width > t.width || n.height > t.height)
            )
              return !0;
          }
          return !1;
        },
        isScaledDown: function (t, e) {
          var o = this,
            i = !1,
            a = o.current,
            s = a.$content;
          return (
            void 0 !== t && void 0 !== e
              ? (i = t < a.width && e < a.height)
              : s &&
                ((i = n.fancybox.getTranslate(s)),
                (i = i.width < a.width && i.height < a.height)),
            i
          );
        },
        canPan: function (t, e) {
          var o = this,
            i = o.current,
            a = null,
            s = !1;
          return (
            "image" === i.type &&
              (i.isComplete || (t && e)) &&
              !i.hasError &&
              ((s = o.getFitPos(i)),
              void 0 !== t && void 0 !== e
                ? (a = { width: t, height: e })
                : i.isComplete && (a = n.fancybox.getTranslate(i.$content)),
              a &&
                s &&
                (s =
                  Math.abs(a.width - s.width) > 1.5 ||
                  Math.abs(a.height - s.height) > 1.5)),
            s
          );
        },
        loadSlide: function (t) {
          var e,
            o,
            i,
            a = this;
          if (!t.isLoading && !t.isLoaded) {
            if (((t.isLoading = !0), !1 === a.trigger("beforeLoad", t)))
              return (t.isLoading = !1), !1;
            switch (
              ((e = t.type),
              (o = t.$slide),
              o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),
              e)
            ) {
              case "image":
                a.setImage(t);
                break;
              case "iframe":
                a.setIframe(t);
                break;
              case "html":
                a.setContent(t, t.src || t.content);
                break;
              case "video":
                a.setContent(
                  t,
                  t.opts.video.tpl
                    .replace(/\{\{src\}\}/gi, t.src)
                    .replace(
                      "{{format}}",
                      t.opts.videoFormat || t.opts.video.format || ""
                    )
                    .replace("{{poster}}", t.thumb || "")
                );
                break;
              case "inline":
                n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
                break;
              case "ajax":
                a.showLoading(t),
                  (i = n.ajax(
                    n.extend({}, t.opts.ajax.settings, {
                      url: t.src,
                      success: function (e, n) {
                        "success" === n && a.setContent(t, e);
                      },
                      error: function (e, n) {
                        e && "abort" !== n && a.setError(t);
                      },
                    })
                  )),
                  o.one("onReset", function () {
                    i.abort();
                  });
                break;
              default:
                a.setError(t);
            }
            return !0;
          }
        },
        setImage: function (t) {
          var o,
            i = this;
          setTimeout(function () {
            var e = t.$image;
            i.isClosing ||
              !t.isLoading ||
              (e && e.length && e[0].complete) ||
              t.hasError ||
              i.showLoading(t);
          }, 50),
            i.checkSrcset(t),
            (t.$content = n('<div class="fancybox-content"></div>')
              .addClass("fancybox-is-hidden")
              .appendTo(t.$slide.addClass("fancybox-slide--image"))),
            !1 !== t.opts.preload &&
              t.opts.width &&
              t.opts.height &&
              t.thumb &&
              ((t.width = t.opts.width),
              (t.height = t.opts.height),
              (o = e.createElement("img")),
              (o.onerror = function () {
                n(this).remove(), (t.$ghost = null);
              }),
              (o.onload = function () {
                i.afterLoad(t);
              }),
              (t.$ghost = n(o)
                .addClass("fancybox-image")
                .appendTo(t.$content)
                .attr("src", t.thumb))),
            i.setBigImage(t);
        },
        checkSrcset: function (e) {
          var n,
            o,
            i,
            a,
            s = e.opts.srcset || e.opts.image.srcset;
          if (s) {
            (i = t.devicePixelRatio || 1),
              (a = t.innerWidth * i),
              (o = s.split(",").map(function (t) {
                var e = {};
                return (
                  t
                    .trim()
                    .split(/\s+/)
                    .forEach(function (t, n) {
                      var o = parseInt(t.substring(0, t.length - 1), 10);
                      if (0 === n) return (e.url = t);
                      o && ((e.value = o), (e.postfix = t[t.length - 1]));
                    }),
                  e
                );
              })),
              o.sort(function (t, e) {
                return t.value - e.value;
              });
            for (var r = 0; r < o.length; r++) {
              var c = o[r];
              if (
                ("w" === c.postfix && c.value >= a) ||
                ("x" === c.postfix && c.value >= i)
              ) {
                n = c;
                break;
              }
            }
            !n && o.length && (n = o[o.length - 1]),
              n &&
                ((e.src = n.url),
                e.width &&
                  e.height &&
                  "w" == n.postfix &&
                  ((e.height = (e.width / e.height) * n.value),
                  (e.width = n.value)),
                (e.opts.srcset = s));
          }
        },
        setBigImage: function (t) {
          var o = this,
            i = e.createElement("img"),
            a = n(i);
          (t.$image = a
            .one("error", function () {
              o.setError(t);
            })
            .one("load", function () {
              var e;
              t.$ghost ||
                (o.resolveImageSlideSize(
                  t,
                  this.naturalWidth,
                  this.naturalHeight
                ),
                o.afterLoad(t)),
                o.isClosing ||
                  (t.opts.srcset &&
                    ((e = t.opts.sizes),
                    (e && "auto" !== e) ||
                      (e =
                        (t.width / t.height > 1 && s.width() / s.height() > 1
                          ? "100"
                          : Math.round((t.width / t.height) * 100)) + "vw"),
                    a.attr("sizes", e).attr("srcset", t.opts.srcset)),
                  t.$ghost &&
                    setTimeout(function () {
                      t.$ghost && !o.isClosing && t.$ghost.hide();
                    }, Math.min(300, Math.max(1e3, t.height / 1600))),
                  o.hideLoading(t));
            })
            .addClass("fancybox-image")
            .attr("src", t.src)
            .appendTo(t.$content)),
            (i.complete || "complete" == i.readyState) &&
            a.naturalWidth &&
            a.naturalHeight
              ? a.trigger("load")
              : i.error && a.trigger("error");
        },
        resolveImageSlideSize: function (t, e, n) {
          var o = parseInt(t.opts.width, 10),
            i = parseInt(t.opts.height, 10);
          (t.width = e),
            (t.height = n),
            o > 0 && ((t.width = o), (t.height = Math.floor((o * n) / e))),
            i > 0 && ((t.width = Math.floor((i * e) / n)), (t.height = i));
        },
        setIframe: function (t) {
          var e,
            o = this,
            i = t.opts.iframe,
            a = t.$slide;
          (t.$content = n(
            '<div class="fancybox-content' +
              (i.preload ? " fancybox-is-hidden" : "") +
              '"></div>'
          )
            .css(i.css)
            .appendTo(a)),
            a.addClass("fancybox-slide--" + t.contentType),
            (t.$iframe = e = n(i.tpl.replace(/\{rnd\}/g, new Date().getTime()))
              .attr(i.attr)
              .appendTo(t.$content)),
            i.preload
              ? (o.showLoading(t),
                e.on("load.fb error.fb", function (e) {
                  (this.isReady = 1), t.$slide.trigger("refresh"), o.afterLoad(t);
                }),
                a.on("refresh.fb", function () {
                  var n,
                    o,
                    s = t.$content,
                    r = i.css.width,
                    c = i.css.height;
                  if (1 === e[0].isReady) {
                    try {
                      (n = e.contents()), (o = n.find("body"));
                    } catch (t) {}
                    o &&
                      o.length &&
                      o.children().length &&
                      (a.css("overflow", "visible"),
                      s.css({
                        width: "100%",
                        "max-width": "100%",
                        height: "9999px",
                      }),
                      void 0 === r &&
                        (r = Math.ceil(
                          Math.max(o[0].clientWidth, o.outerWidth(!0))
                        )),
                      s.css("width", r || "").css("max-width", ""),
                      void 0 === c &&
                        (c = Math.ceil(
                          Math.max(o[0].clientHeight, o.outerHeight(!0))
                        )),
                      s.css("height", c || ""),
                      a.css("overflow", "auto")),
                      s.removeClass("fancybox-is-hidden");
                  }
                }))
              : o.afterLoad(t),
            e.attr("src", t.src),
            a.one("onReset", function () {
              try {
                n(this)
                  .find("iframe")
                  .hide()
                  .unbind()
                  .attr("src", "//about:blank");
              } catch (t) {}
              n(this).off("refresh.fb").empty(),
                (t.isLoaded = !1),
                (t.isRevealed = !1);
            });
        },
        setContent: function (t, e) {
          var o = this;
          o.isClosing ||
            (o.hideLoading(t),
            t.$content && n.fancybox.stop(t.$content),
            t.$slide.empty(),
            l(e) && e.parent().length
              ? ((e.hasClass("fancybox-content") ||
                  e.parent().hasClass("fancybox-content")) &&
                  e.parents(".fancybox-slide").trigger("onReset"),
                (t.$placeholder = n("<div>").hide().insertAfter(e)),
                e.css("display", "inline-block"))
              : t.hasError ||
                ("string" === n.type(e) &&
                  (e = n("<div>").append(n.trim(e)).contents()),
                t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))),
            t.$slide.one("onReset", function () {
              n(this).find("video,audio").trigger("pause"),
                t.$placeholder &&
                  (t.$placeholder
                    .after(e.removeClass("fancybox-content").hide())
                    .remove(),
                  (t.$placeholder = null)),
                t.$smallBtn && (t.$smallBtn.remove(), (t.$smallBtn = null)),
                t.hasError ||
                  (n(this).empty(), (t.isLoaded = !1), (t.isRevealed = !1));
            }),
            n(e).appendTo(t.$slide),
            n(e).is("video,audio") &&
              (n(e).addClass("fancybox-video"),
              n(e).wrap("<div></div>"),
              (t.contentType = "video"),
              (t.opts.width = t.opts.width || n(e).attr("width")),
              (t.opts.height = t.opts.height || n(e).attr("height"))),
            (t.$content = t.$slide
              .children()
              .filter("div,form,main,video,audio,article,.fancybox-content")
              .first()),
            t.$content.siblings().hide(),
            t.$content.length ||
              (t.$content = t.$slide.wrapInner("<div></div>").children().first()),
            t.$content.addClass("fancybox-content"),
            t.$slide.addClass("fancybox-slide--" + t.contentType),
            o.afterLoad(t));
        },
        setError: function (t) {
          (t.hasError = !0),
            t.$slide
              .trigger("onReset")
              .removeClass("fancybox-slide--" + t.contentType)
              .addClass("fancybox-slide--error"),
            (t.contentType = "html"),
            this.setContent(t, this.translate(t, t.opts.errorTpl)),
            t.pos === this.currPos && (this.isAnimating = !1);
        },
        showLoading: function (t) {
          var e = this;
          (t = t || e.current) &&
            !t.$spinner &&
            (t.$spinner = n(e.translate(e, e.opts.spinnerTpl))
              .appendTo(t.$slide)
              .hide()
              .fadeIn("fast"));
        },
        hideLoading: function (t) {
          var e = this;
          (t = t || e.current) &&
            t.$spinner &&
            (t.$spinner.stop().remove(), delete t.$spinner);
        },
        afterLoad: function (t) {
          var e = this;
          e.isClosing ||
            ((t.isLoading = !1),
            (t.isLoaded = !0),
            e.trigger("afterLoad", t),
            e.hideLoading(t),
            !t.opts.smallBtn ||
              (t.$smallBtn && t.$smallBtn.length) ||
              (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(
                t.$content
              )),
            t.opts.protect &&
              t.$content &&
              !t.hasError &&
              (t.$content.on("contextmenu.fb", function (t) {
                return 2 == t.button && t.preventDefault(), !0;
              }),
              "image" === t.type &&
                n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),
            e.adjustCaption(t),
            e.adjustLayout(t),
            t.pos === e.currPos && e.updateCursor(),
            e.revealContent(t));
        },
        adjustCaption: function (t) {
          var e,
            n = this,
            o = t || n.current,
            i = o.opts.caption,
            a = o.opts.preventCaptionOverlap,
            s = n.$refs.caption,
            r = !1;
          s.toggleClass("fancybox-caption--separate", a),
            a &&
              i &&
              i.length &&
              (o.pos !== n.currPos
                ? ((e = s.clone().appendTo(s.parent())),
                  e.children().eq(0).empty().html(i),
                  (r = e.outerHeight(!0)),
                  e.empty().remove())
                : n.$caption && (r = n.$caption.outerHeight(!0)),
              o.$slide.css("padding-bottom", r || ""));
        },
        adjustLayout: function (t) {
          var e,
            n,
            o,
            i,
            a = this,
            s = t || a.current;
          s.isLoaded &&
            !0 !== s.opts.disableLayoutFix &&
            (s.$content.css("margin-bottom", ""),
            s.$content.outerHeight() > s.$slide.height() + 0.5 &&
              ((o = s.$slide[0].style["padding-bottom"]),
              (i = s.$slide.css("padding-bottom")),
              parseFloat(i) > 0 &&
                ((e = s.$slide[0].scrollHeight),
                s.$slide.css("padding-bottom", 0),
                Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = i),
                s.$slide.css("padding-bottom", o))),
            s.$content.css("margin-bottom", n));
        },
        revealContent: function (t) {
          var e,
            o,
            i,
            a,
            s = this,
            r = t.$slide,
            c = !1,
            l = !1,
            d = s.isMoved(t),
            u = t.isRevealed;
          return (
            (t.isRevealed = !0),
            (e = t.opts[s.firstRun ? "animationEffect" : "transitionEffect"]),
            (i = t.opts[s.firstRun ? "animationDuration" : "transitionDuration"]),
            (i = parseInt(
              void 0 === t.forcedDuration ? i : t.forcedDuration,
              10
            )),
            (!d && t.pos === s.currPos && i) || (e = !1),
            "zoom" === e &&
              (t.pos === s.currPos &&
              i &&
              "image" === t.type &&
              !t.hasError &&
              (l = s.getThumbPos(t))
                ? (c = s.getFitPos(t))
                : (e = "fade")),
            "zoom" === e
              ? ((s.isAnimating = !0),
                (c.scaleX = c.width / l.width),
                (c.scaleY = c.height / l.height),
                (a = t.opts.zoomOpacity),
                "auto" == a &&
                  (a = Math.abs(t.width / t.height - l.width / l.height) > 0.1),
                a && ((l.opacity = 0.1), (c.opacity = 1)),
                n.fancybox.setTranslate(
                  t.$content.removeClass("fancybox-is-hidden"),
                  l
                ),
                p(t.$content),
                void n.fancybox.animate(t.$content, c, i, function () {
                  (s.isAnimating = !1), s.complete();
                }))
              : (s.updateSlide(t),
                e
                  ? (n.fancybox.stop(r),
                    (o =
                      "fancybox-slide--" +
                      (t.pos >= s.prevPos ? "next" : "previous") +
                      " fancybox-animated fancybox-fx-" +
                      e),
                    r.addClass(o).removeClass("fancybox-slide--current"),
                    t.$content.removeClass("fancybox-is-hidden"),
                    p(r),
                    "image" !== t.type && t.$content.hide().show(0),
                    void n.fancybox.animate(
                      r,
                      "fancybox-slide--current",
                      i,
                      function () {
                        r.removeClass(o).css({ transform: "", opacity: "" }),
                          t.pos === s.currPos && s.complete();
                      },
                      !0
                    ))
                  : (t.$content.removeClass("fancybox-is-hidden"),
                    u ||
                      !d ||
                      "image" !== t.type ||
                      t.hasError ||
                      t.$content.hide().fadeIn("fast"),
                    void (t.pos === s.currPos && s.complete())))
          );
        },
        getThumbPos: function (t) {
          var e,
            o,
            i,
            a,
            s,
            r = !1,
            c = t.$thumb;
          return (
            !(!c || !g(c[0])) &&
            ((e = n.fancybox.getTranslate(c)),
            (o = parseFloat(c.css("border-top-width") || 0)),
            (i = parseFloat(c.css("border-right-width") || 0)),
            (a = parseFloat(c.css("border-bottom-width") || 0)),
            (s = parseFloat(c.css("border-left-width") || 0)),
            (r = {
              top: e.top + o,
              left: e.left + s,
              width: e.width - i - s,
              height: e.height - o - a,
              scaleX: 1,
              scaleY: 1,
            }),
            e.width > 0 && e.height > 0 && r)
          );
        },
        complete: function () {
          var t,
            e = this,
            o = e.current,
            i = {};
          !e.isMoved() &&
            o.isLoaded &&
            (o.isComplete ||
              ((o.isComplete = !0),
              o.$slide.siblings().trigger("onReset"),
              e.preload("inline"),
              p(o.$slide),
              o.$slide.addClass("fancybox-slide--complete"),
              n.each(e.slides, function (t, o) {
                o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1
                  ? (i[o.pos] = o)
                  : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove());
              }),
              (e.slides = i)),
            (e.isAnimating = !1),
            e.updateCursor(),
            e.trigger("afterShow"),
            o.opts.video.autoStart &&
              o.$slide
                .find("video,audio")
                .filter(":visible:first")
                .trigger("play")
                .one("ended", function () {
                  Document.exitFullscreen
                    ? Document.exitFullscreen()
                    : this.webkitExitFullscreen && this.webkitExitFullscreen(),
                    e.next();
                }),
            o.opts.autoFocus &&
              "html" === o.contentType &&
              ((t = o.$content.find("input[autofocus]:enabled:visible:first")),
              t.length ? t.trigger("focus") : e.focus(null, !0)),
            o.$slide.scrollTop(0).scrollLeft(0));
        },
        preload: function (t) {
          var e,
            n,
            o = this;
          o.group.length < 2 ||
            ((n = o.slides[o.currPos + 1]),
            (e = o.slides[o.currPos - 1]),
            e && e.type === t && o.loadSlide(e),
            n && n.type === t && o.loadSlide(n));
        },
        focus: function (t, o) {
          var i,
            a,
            s = this,
            r = [
              "a[href]",
              "area[href]",
              'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
              "select:not([disabled]):not([aria-hidden])",
              "textarea:not([disabled]):not([aria-hidden])",
              "button:not([disabled]):not([aria-hidden])",
              "iframe",
              "object",
              "embed",
              "video",
              "audio",
              "[contenteditable]",
              '[tabindex]:not([tabindex^="-"])',
            ].join(",");
          s.isClosing ||
            ((i =
              !t && s.current && s.current.isComplete
                ? s.current.$slide.find(
                    "*:visible" + (o ? ":not(.fancybox-close-small)" : "")
                  )
                : s.$refs.container.find("*:visible")),
            (i = i.filter(r).filter(function () {
              return (
                "hidden" !== n(this).css("visibility") &&
                !n(this).hasClass("disabled")
              );
            })),
            i.length
              ? ((a = i.index(e.activeElement)),
                t && t.shiftKey
                  ? (a < 0 || 0 == a) &&
                    (t.preventDefault(), i.eq(i.length - 1).trigger("focus"))
                  : (a < 0 || a == i.length - 1) &&
                    (t && t.preventDefault(), i.eq(0).trigger("focus")))
              : s.$refs.container.trigger("focus"));
        },
        activate: function () {
          var t = this;
          n(".fancybox-container").each(function () {
            var e = n(this).data("FancyBox");
            e &&
              e.id !== t.id &&
              !e.isClosing &&
              (e.trigger("onDeactivate"), e.removeEvents(), (e.isVisible = !1));
          }),
            (t.isVisible = !0),
            (t.current || t.isIdle) && (t.update(), t.updateControls()),
            t.trigger("onActivate"),
            t.addEvents();
        },
        close: function (t, e) {
          var o,
            i,
            a,
            s,
            r,
            c,
            l,
            u = this,
            f = u.current,
            h = function () {
              u.cleanUp(t);
            };
          return (
            !u.isClosing &&
            ((u.isClosing = !0),
            !1 === u.trigger("beforeClose", t)
              ? ((u.isClosing = !1),
                d(function () {
                  u.update();
                }),
                !1)
              : (u.removeEvents(),
                (a = f.$content),
                (o = f.opts.animationEffect),
                (i = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0),
                f.$slide.removeClass(
                  "fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"
                ),
                !0 !== t ? n.fancybox.stop(f.$slide) : (o = !1),
                f.$slide.siblings().trigger("onReset").remove(),
                i &&
                  u.$refs.container
                    .removeClass("fancybox-is-open")
                    .addClass("fancybox-is-closing")
                    .css("transition-duration", i + "ms"),
                u.hideLoading(f),
                u.hideControls(!0),
                u.updateCursor(),
                "zoom" !== o ||
                  (a &&
                    i &&
                    "image" === f.type &&
                    !u.isMoved() &&
                    !f.hasError &&
                    (l = u.getThumbPos(f))) ||
                  (o = "fade"),
                "zoom" === o
                  ? (n.fancybox.stop(a),
                    (s = n.fancybox.getTranslate(a)),
                    (c = {
                      top: s.top,
                      left: s.left,
                      scaleX: s.width / l.width,
                      scaleY: s.height / l.height,
                      width: l.width,
                      height: l.height,
                    }),
                    (r = f.opts.zoomOpacity),
                    "auto" == r &&
                      (r =
                        Math.abs(f.width / f.height - l.width / l.height) > 0.1),
                    r && (l.opacity = 0),
                    n.fancybox.setTranslate(a, c),
                    p(a),
                    n.fancybox.animate(a, l, i, h),
                    !0)
                  : (o && i
                      ? n.fancybox.animate(
                          f.$slide
                            .addClass("fancybox-slide--previous")
                            .removeClass("fancybox-slide--current"),
                          "fancybox-animated fancybox-fx-" + o,
                          i,
                          h
                        )
                      : !0 === t
                      ? setTimeout(h, i)
                      : h(),
                    !0)))
          );
        },
        cleanUp: function (e) {
          var o,
            i,
            a,
            s = this,
            r = s.current.opts.$orig;
          s.current.$slide.trigger("onReset"),
            s.$refs.container.empty().remove(),
            s.trigger("afterClose", e),
            s.current.opts.backFocus &&
              ((r && r.length && r.is(":visible")) || (r = s.$trigger),
              r &&
                r.length &&
                ((i = t.scrollX),
                (a = t.scrollY),
                r.trigger("focus"),
                n("html, body").scrollTop(a).scrollLeft(i))),
            (s.current = null),
            (o = n.fancybox.getInstance()),
            o
              ? o.activate()
              : (n("body").removeClass(
                  "fancybox-active compensate-for-scrollbar"
                ),
                n("#fancybox-style-noscroll").remove());
        },
        trigger: function (t, e) {
          var o,
            i = Array.prototype.slice.call(arguments, 1),
            a = this,
            s = e && e.opts ? e : a.current;
          if (
            (s ? i.unshift(s) : (s = a),
            i.unshift(a),
            n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)),
            !1 === o)
          )
            return o;
          "afterClose" !== t && a.$refs
            ? a.$refs.container.trigger(t + ".fb", i)
            : r.trigger(t + ".fb", i);
        },
        updateControls: function () {
          var t = this,
            o = t.current,
            i = o.index,
            a = t.$refs.container,
            s = t.$refs.caption,
            r = o.opts.caption;
          o.$slide.trigger("refresh"),
            r && r.length
              ? ((t.$caption = s), s.children().eq(0).html(r))
              : (t.$caption = null),
            t.hasHiddenControls || t.isIdle || t.showControls(),
            a.find("[data-fancybox-count]").html(t.group.length),
            a.find("[data-fancybox-index]").html(i + 1),
            a
              .find("[data-fancybox-prev]")
              .prop("disabled", !o.opts.loop && i <= 0),
            a
              .find("[data-fancybox-next]")
              .prop("disabled", !o.opts.loop && i >= t.group.length - 1),
            "image" === o.type
              ? a
                  .find("[data-fancybox-zoom]")
                  .show()
                  .end()
                  .find("[data-fancybox-download]")
                  .attr("href", o.opts.image.src || o.src)
                  .show()
              : o.opts.toolbar &&
                a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),
            n(e.activeElement).is(":hidden,[disabled]") &&
              t.$refs.container.trigger("focus");
        },
        hideControls: function (t) {
          var e = this,
            n = ["infobar", "toolbar", "nav"];
          (!t && e.current.opts.preventCaptionOverlap) || n.push("caption"),
            this.$refs.container.removeClass(
              n
                .map(function (t) {
                  return "fancybox-show-" + t;
                })
                .join(" ")
            ),
            (this.hasHiddenControls = !0);
        },
        showControls: function () {
          var t = this,
            e = t.current ? t.current.opts : t.opts,
            n = t.$refs.container;
          (t.hasHiddenControls = !1),
            (t.idleSecondsCounter = 0),
            n
              .toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons))
              .toggleClass(
                "fancybox-show-infobar",
                !!(e.infobar && t.group.length > 1)
              )
              .toggleClass("fancybox-show-caption", !!t.$caption)
              .toggleClass(
                "fancybox-show-nav",
                !!(e.arrows && t.group.length > 1)
              )
              .toggleClass("fancybox-is-modal", !!e.modal);
        },
        toggleControls: function () {
          this.hasHiddenControls ? this.showControls() : this.hideControls();
        },
      }),
        (n.fancybox = {
          version: "3.5.7",
          defaults: a,
          getInstance: function (t) {
            var e = n(
                '.fancybox-container:not(".fancybox-is-closing"):last'
              ).data("FancyBox"),
              o = Array.prototype.slice.call(arguments, 1);
            return (
              e instanceof b &&
              ("string" === n.type(t)
                ? e[t].apply(e, o)
                : "function" === n.type(t) && t.apply(e, o),
              e)
            );
          },
          open: function (t, e, n) {
            return new b(t, e, n);
          },
          close: function (t) {
            var e = this.getInstance();
            e && (e.close(), !0 === t && this.close(t));
          },
          destroy: function () {
            this.close(!0), r.add("body").off("click.fb-start", "**");
          },
          isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ),
          use3d: (function () {
            var n = e.createElement("div");
            return (
              t.getComputedStyle &&
              t.getComputedStyle(n) &&
              t.getComputedStyle(n).getPropertyValue("transform") &&
              !(e.documentMode && e.documentMode < 11)
            );
          })(),
          getTranslate: function (t) {
            var e;
            return (
              !(!t || !t.length) &&
              ((e = t[0].getBoundingClientRect()),
              {
                top: e.top || 0,
                left: e.left || 0,
                width: e.width,
                height: e.height,
                opacity: parseFloat(t.css("opacity")),
              })
            );
          },
          setTranslate: function (t, e) {
            var n = "",
              o = {};
            if (t && e)
              return (
                (void 0 === e.left && void 0 === e.top) ||
                  ((n =
                    (void 0 === e.left ? t.position().left : e.left) +
                    "px, " +
                    (void 0 === e.top ? t.position().top : e.top) +
                    "px"),
                  (n = this.use3d
                    ? "translate3d(" + n + ", 0px)"
                    : "translate(" + n + ")")),
                void 0 !== e.scaleX && void 0 !== e.scaleY
                  ? (n += " scale(" + e.scaleX + ", " + e.scaleY + ")")
                  : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"),
                n.length && (o.transform = n),
                void 0 !== e.opacity && (o.opacity = e.opacity),
                void 0 !== e.width && (o.width = e.width),
                void 0 !== e.height && (o.height = e.height),
                t.css(o)
              );
          },
          animate: function (t, e, o, i, a) {
            var s,
              r = this;
            n.isFunction(o) && ((i = o), (o = null)),
              r.stop(t),
              (s = r.getTranslate(t)),
              t.on(f, function (c) {
                (!c ||
                  !c.originalEvent ||
                  (t.is(c.originalEvent.target) &&
                    "z-index" != c.originalEvent.propertyName)) &&
                  (r.stop(t),
                  n.isNumeric(o) && t.css("transition-duration", ""),
                  n.isPlainObject(e)
                    ? void 0 !== e.scaleX &&
                      void 0 !== e.scaleY &&
                      r.setTranslate(t, {
                        top: e.top,
                        left: e.left,
                        width: s.width * e.scaleX,
                        height: s.height * e.scaleY,
                        scaleX: 1,
                        scaleY: 1,
                      })
                    : !0 !== a && t.removeClass(e),
                  n.isFunction(i) && i(c));
              }),
              n.isNumeric(o) && t.css("transition-duration", o + "ms"),
              n.isPlainObject(e)
                ? (void 0 !== e.scaleX &&
                    void 0 !== e.scaleY &&
                    (delete e.width,
                    delete e.height,
                    t.parent().hasClass("fancybox-slide--image") &&
                      t.parent().addClass("fancybox-is-scaling")),
                  n.fancybox.setTranslate(t, e))
                : t.addClass(e),
              t.data(
                "timer",
                setTimeout(function () {
                  t.trigger(f);
                }, o + 33)
              );
          },
          stop: function (t, e) {
            t &&
              t.length &&
              (clearTimeout(t.data("timer")),
              e && t.trigger(f),
              t.off(f).css("transition-duration", ""),
              t.parent().removeClass("fancybox-is-scaling"));
          },
        }),
        (n.fn.fancybox = function (t) {
          var e;
          return (
            (t = t || {}),
            (e = t.selector || !1),
            e
              ? n("body")
                  .off("click.fb-start", e)
                  .on("click.fb-start", e, { options: t }, i)
              : this.off("click.fb-start").on(
                  "click.fb-start",
                  { items: this, options: t },
                  i
                ),
            this
          );
        }),
        r.on("click.fb-start", "[data-fancybox]", i),
        r.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
          n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]')
            .eq(n(this).attr("data-fancybox-index") || 0)
            .trigger("click.fb-start", { $trigger: n(this) });
        }),
        (function () {
          var t = null;
          r.on("mousedown mouseup focus blur", ".fancybox-button", function (e) {
            switch (e.type) {
              case "mousedown":
                t = n(this);
                break;
              case "mouseup":
                t = null;
                break;
              case "focusin":
                n(".fancybox-button").removeClass("fancybox-focus"),
                  n(this).is(t) ||
                    n(this).is("[disabled]") ||
                    n(this).addClass("fancybox-focus");
                break;
              case "focusout":
                n(".fancybox-button").removeClass("fancybox-focus");
            }
          });
        })();
    }
  })(window, document, jQuery),
    (function (t) {
      "use strict";
      var e = {
          youtube: {
            matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params: {
              autoplay: 1,
              autohide: 1,
              fs: 1,
              rel: 0,
              hd: 1,
              wmode: "transparent",
              enablejsapi: 1,
              html5: 1,
            },
            paramPlace: 8,
            type: "iframe",
            url: "https://www.youtube-nocookie.com/embed/$4",
            thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg",
          },
          vimeo: {
            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params: {
              autoplay: 1,
              hd: 1,
              show_title: 1,
              show_byline: 1,
              show_portrait: 0,
              fullscreen: 1,
            },
            paramPlace: 3,
            type: "iframe",
            url: "//player.vimeo.com/video/$2",
          },
          instagram: {
            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type: "image",
            url: "//$1/p/$2/media/?size=l",
          },
          gmap_place: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
            type: "iframe",
            url: function (t) {
              return (
                "//maps.google." +
                t[2] +
                "/?ll=" +
                (t[9]
                  ? t[9] +
                    "&z=" +
                    Math.floor(t[10]) +
                    (t[12] ? t[12].replace(/^\//, "&") : "")
                  : t[12] + ""
                ).replace(/\?/, "&") +
                "&output=" +
                (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
              );
            },
          },
          gmap_search: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
            type: "iframe",
            url: function (t) {
              return (
                "//maps.google." +
                t[2] +
                "/maps?q=" +
                t[5].replace("query=", "q=").replace("api=1", "") +
                "&output=embed"
              );
            },
          },
        },
        n = function (e, n, o) {
          if (e)
            return (
              (o = o || ""),
              "object" === t.type(o) && (o = t.param(o, !0)),
              t.each(n, function (t, n) {
                e = e.replace("$" + t, n || "");
              }),
              o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o),
              e
            );
        };
      t(document).on("objectNeedsType.fb", function (o, i, a) {
        var s,
          r,
          c,
          l,
          d,
          u,
          f,
          p = a.src || "",
          h = !1;
        (s = t.extend(!0, {}, e, a.opts.media)),
          t.each(s, function (e, o) {
            if ((c = p.match(o.matcher))) {
              if (
                ((h = o.type), (f = e), (u = {}), o.paramPlace && c[o.paramPlace])
              ) {
                (d = c[o.paramPlace]),
                  "?" == d[0] && (d = d.substring(1)),
                  (d = d.split("&"));
                for (var i = 0; i < d.length; ++i) {
                  var s = d[i].split("=", 2);
                  2 == s.length &&
                    (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")));
                }
              }
              return (
                (l = t.extend(!0, {}, o.params, a.opts[e], u)),
                (p =
                  "function" === t.type(o.url)
                    ? o.url.call(this, c, l, a)
                    : n(o.url, c, l)),
                (r =
                  "function" === t.type(o.thumb)
                    ? o.thumb.call(this, c, l, a)
                    : n(o.thumb, c)),
                "youtube" === e
                  ? (p = p.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, o) {
                      return (
                        "&start=" +
                        ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
                      );
                    }))
                  : "vimeo" === e && (p = p.replace("&%23", "#")),
                !1
              );
            }
          }),
          h
            ? (a.opts.thumb ||
                (a.opts.$thumb && a.opts.$thumb.length) ||
                (a.opts.thumb = r),
              "iframe" === h &&
                (a.opts = t.extend(!0, a.opts, {
                  iframe: { preload: !1, attr: { scrolling: "no" } },
                })),
              t.extend(a, {
                type: h,
                src: p,
                origSrc: a.src,
                contentSource: f,
                contentType:
                  "image" === h
                    ? "image"
                    : "gmap_place" == f || "gmap_search" == f
                    ? "map"
                    : "video",
              }))
            : p && (a.type = a.opts.defaultType);
      });
      var o = {
        youtube: {
          src: "https://www.youtube.com/iframe_api",
          class: "YT",
          loading: !1,
          loaded: !1,
        },
        vimeo: {
          src: "https://player.vimeo.com/api/player.js",
          class: "Vimeo",
          loading: !1,
          loaded: !1,
        },
        load: function (t) {
          var e,
            n = this;
          if (this[t].loaded)
            return void setTimeout(function () {
              n.done(t);
            });
          this[t].loading ||
            ((this[t].loading = !0),
            (e = document.createElement("script")),
            (e.type = "text/javascript"),
            (e.src = this[t].src),
            "youtube" === t
              ? (window.onYouTubeIframeAPIReady = function () {
                  (n[t].loaded = !0), n.done(t);
                })
              : (e.onload = function () {
                  (n[t].loaded = !0), n.done(t);
                }),
            document.body.appendChild(e));
        },
        done: function (e) {
          var n, o, i;
          "youtube" === e && delete window.onYouTubeIframeAPIReady,
            (n = t.fancybox.getInstance()) &&
              ((o = n.current.$content.find("iframe")),
              "youtube" === e && void 0 !== YT && YT
                ? (i = new YT.Player(o.attr("id"), {
                    events: {
                      onStateChange: function (t) {
                        0 == t.data && n.next();
                      },
                    },
                  }))
                : "vimeo" === e &&
                  void 0 !== Vimeo &&
                  Vimeo &&
                  ((i = new Vimeo.Player(o)),
                  i.on("ended", function () {
                    n.next();
                  })));
        },
      };
      t(document).on({
        "afterShow.fb": function (t, e, n) {
          e.group.length > 1 &&
            ("youtube" === n.contentSource || "vimeo" === n.contentSource) &&
            o.load(n.contentSource);
        },
      });
    })(jQuery),
    (function (t, e, n) {
      "use strict";
      var o = (function () {
          return (
            t.requestAnimationFrame ||
            t.webkitRequestAnimationFrame ||
            t.mozRequestAnimationFrame ||
            t.oRequestAnimationFrame ||
            function (e) {
              return t.setTimeout(e, 1e3 / 60);
            }
          );
        })(),
        i = (function () {
          return (
            t.cancelAnimationFrame ||
            t.webkitCancelAnimationFrame ||
            t.mozCancelAnimationFrame ||
            t.oCancelAnimationFrame ||
            function (e) {
              t.clearTimeout(e);
            }
          );
        })(),
        a = function (e) {
          var n = [];
          (e = e.originalEvent || e || t.e),
            (e =
              e.touches && e.touches.length
                ? e.touches
                : e.changedTouches && e.changedTouches.length
                ? e.changedTouches
                : [e]);
          for (var o in e)
            e[o].pageX
              ? n.push({ x: e[o].pageX, y: e[o].pageY })
              : e[o].clientX && n.push({ x: e[o].clientX, y: e[o].clientY });
          return n;
        },
        s = function (t, e, n) {
          return e && t
            ? "x" === n
              ? t.x - e.x
              : "y" === n
              ? t.y - e.y
              : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
            : 0;
        },
        r = function (t) {
          if (
            t.is(
              'a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe'
            ) ||
            n.isFunction(t.get(0).onclick) ||
            t.data("selectable")
          )
            return !0;
          for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
            if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
          return !1;
        },
        c = function (e) {
          var n = t.getComputedStyle(e)["overflow-y"],
            o = t.getComputedStyle(e)["overflow-x"],
            i =
              ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
            a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
          return i || a;
        },
        l = function (t) {
          for (var e = !1; ; ) {
            if ((e = c(t.get(0)))) break;
            if (
              ((t = t.parent()),
              !t.length || t.hasClass("fancybox-stage") || t.is("body"))
            )
              break;
          }
          return e;
        },
        d = function (t) {
          var e = this;
          (e.instance = t),
            (e.$bg = t.$refs.bg),
            (e.$stage = t.$refs.stage),
            (e.$container = t.$refs.container),
            e.destroy(),
            e.$container.on(
              "touchstart.fb.touch mousedown.fb.touch",
              n.proxy(e, "ontouchstart")
            );
        };
      (d.prototype.destroy = function () {
        var t = this;
        t.$container.off(".fb.touch"),
          n(e).off(".fb.touch"),
          t.requestId && (i(t.requestId), (t.requestId = null)),
          t.tapped && (clearTimeout(t.tapped), (t.tapped = null));
      }),
        (d.prototype.ontouchstart = function (o) {
          var i = this,
            c = n(o.target),
            d = i.instance,
            u = d.current,
            f = u.$slide,
            p = u.$content,
            h = "touchstart" == o.type;
          if (
            (h && i.$container.off("mousedown.fb.touch"),
            (!o.originalEvent || 2 != o.originalEvent.button) &&
              f.length &&
              c.length &&
              !r(c) &&
              !r(c.parent()) &&
              (c.is("img") ||
                !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left)))
          ) {
            if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated"))
              return o.stopPropagation(), void o.preventDefault();
            (i.realPoints = i.startPoints = a(o)),
              i.startPoints.length &&
                (u.touch && o.stopPropagation(),
                (i.startEvent = o),
                (i.canTap = !0),
                (i.$target = c),
                (i.$content = p),
                (i.opts = u.opts.touch),
                (i.isPanning = !1),
                (i.isSwiping = !1),
                (i.isZooming = !1),
                (i.isScrolling = !1),
                (i.canPan = d.canPan()),
                (i.startTime = new Date().getTime()),
                (i.distanceX = i.distanceY = i.distance = 0),
                (i.canvasWidth = Math.round(f[0].clientWidth)),
                (i.canvasHeight = Math.round(f[0].clientHeight)),
                (i.contentLastPos = null),
                (i.contentStartPos = n.fancybox.getTranslate(i.$content) || {
                  top: 0,
                  left: 0,
                }),
                (i.sliderStartPos = n.fancybox.getTranslate(f)),
                (i.stagePos = n.fancybox.getTranslate(d.$refs.stage)),
                (i.sliderStartPos.top -= i.stagePos.top),
                (i.sliderStartPos.left -= i.stagePos.left),
                (i.contentStartPos.top -= i.stagePos.top),
                (i.contentStartPos.left -= i.stagePos.left),
                n(e)
                  .off(".fb.touch")
                  .on(
                    h
                      ? "touchend.fb.touch touchcancel.fb.touch"
                      : "mouseup.fb.touch mouseleave.fb.touch",
                    n.proxy(i, "ontouchend")
                  )
                  .on(
                    h ? "touchmove.fb.touch" : "mousemove.fb.touch",
                    n.proxy(i, "ontouchmove")
                  ),
                n.fancybox.isMobile &&
                  e.addEventListener("scroll", i.onscroll, !0),
                (((i.opts || i.canPan) &&
                  (c.is(i.$stage) || i.$stage.find(c).length)) ||
                  (c.is(".fancybox-image") && o.preventDefault(),
                  n.fancybox.isMobile &&
                    c.parents(".fancybox-caption").length)) &&
                  ((i.isScrollable = l(c) || l(c.parent())),
                  (n.fancybox.isMobile && i.isScrollable) || o.preventDefault(),
                  (1 === i.startPoints.length || u.hasError) &&
                    (i.canPan
                      ? (n.fancybox.stop(i.$content), (i.isPanning = !0))
                      : (i.isSwiping = !0),
                    i.$container.addClass("fancybox-is-grabbing")),
                  2 === i.startPoints.length &&
                    "image" === u.type &&
                    (u.isLoaded || u.$ghost) &&
                    ((i.canTap = !1),
                    (i.isSwiping = !1),
                    (i.isPanning = !1),
                    (i.isZooming = !0),
                    n.fancybox.stop(i.$content),
                    (i.centerPointStartX =
                      0.5 * (i.startPoints[0].x + i.startPoints[1].x) -
                      n(t).scrollLeft()),
                    (i.centerPointStartY =
                      0.5 * (i.startPoints[0].y + i.startPoints[1].y) -
                      n(t).scrollTop()),
                    (i.percentageOfImageAtPinchPointX =
                      (i.centerPointStartX - i.contentStartPos.left) /
                      i.contentStartPos.width),
                    (i.percentageOfImageAtPinchPointY =
                      (i.centerPointStartY - i.contentStartPos.top) /
                      i.contentStartPos.height),
                    (i.startDistanceBetweenFingers = s(
                      i.startPoints[0],
                      i.startPoints[1]
                    )))));
          }
        }),
        (d.prototype.onscroll = function (t) {
          var n = this;
          (n.isScrolling = !0), e.removeEventListener("scroll", n.onscroll, !0);
        }),
        (d.prototype.ontouchmove = function (t) {
          var e = this;
          return void 0 !== t.originalEvent.buttons &&
            0 === t.originalEvent.buttons
            ? void e.ontouchend(t)
            : e.isScrolling
            ? void (e.canTap = !1)
            : ((e.newPoints = a(t)),
              void (
                (e.opts || e.canPan) &&
                e.newPoints.length &&
                e.newPoints.length &&
                ((e.isSwiping && !0 === e.isSwiping) || t.preventDefault(),
                (e.distanceX = s(e.newPoints[0], e.startPoints[0], "x")),
                (e.distanceY = s(e.newPoints[0], e.startPoints[0], "y")),
                (e.distance = s(e.newPoints[0], e.startPoints[0])),
                e.distance > 0 &&
                  (e.isSwiping
                    ? e.onSwipe(t)
                    : e.isPanning
                    ? e.onPan()
                    : e.isZooming && e.onZoom()))
              ));
        }),
        (d.prototype.onSwipe = function (e) {
          var a,
            s = this,
            r = s.instance,
            c = s.isSwiping,
            l = s.sliderStartPos.left || 0;
          if (!0 !== c)
            "x" == c &&
              (s.distanceX > 0 &&
              (s.instance.group.length < 2 ||
                (0 === s.instance.current.index && !s.instance.current.opts.loop))
                ? (l += Math.pow(s.distanceX, 0.8))
                : s.distanceX < 0 &&
                  (s.instance.group.length < 2 ||
                    (s.instance.current.index === s.instance.group.length - 1 &&
                      !s.instance.current.opts.loop))
                ? (l -= Math.pow(-s.distanceX, 0.8))
                : (l += s.distanceX)),
              (s.sliderLastPos = {
                top: "x" == c ? 0 : s.sliderStartPos.top + s.distanceY,
                left: l,
              }),
              s.requestId && (i(s.requestId), (s.requestId = null)),
              (s.requestId = o(function () {
                s.sliderLastPos &&
                  (n.each(s.instance.slides, function (t, e) {
                    var o = e.pos - s.instance.currPos;
                    n.fancybox.setTranslate(e.$slide, {
                      top: s.sliderLastPos.top,
                      left:
                        s.sliderLastPos.left +
                        o * s.canvasWidth +
                        o * e.opts.gutter,
                    });
                  }),
                  s.$container.addClass("fancybox-is-sliding"));
              }));
          else if (Math.abs(s.distance) > 10) {
            if (
              ((s.canTap = !1),
              r.group.length < 2 && s.opts.vertical
                ? (s.isSwiping = "y")
                : r.isDragging ||
                  !1 === s.opts.vertical ||
                  ("auto" === s.opts.vertical && n(t).width() > 800)
                ? (s.isSwiping = "x")
                : ((a = Math.abs(
                    (180 * Math.atan2(s.distanceY, s.distanceX)) / Math.PI
                  )),
                  (s.isSwiping = a > 45 && a < 135 ? "y" : "x")),
              "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable)
            )
              return void (s.isScrolling = !0);
            (r.isDragging = s.isSwiping),
              (s.startPoints = s.newPoints),
              n.each(r.slides, function (t, e) {
                var o, i;
                n.fancybox.stop(e.$slide),
                  (o = n.fancybox.getTranslate(e.$slide)),
                  (i = n.fancybox.getTranslate(r.$refs.stage)),
                  e.$slide
                    .css({
                      transform: "",
                      opacity: "",
                      "transition-duration": "",
                    })
                    .removeClass("fancybox-animated")
                    .removeClass(function (t, e) {
                      return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                    }),
                  e.pos === r.current.pos &&
                    ((s.sliderStartPos.top = o.top - i.top),
                    (s.sliderStartPos.left = o.left - i.left)),
                  n.fancybox.setTranslate(e.$slide, {
                    top: o.top - i.top,
                    left: o.left - i.left,
                  });
              }),
              r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop();
          }
        }),
        (d.prototype.onPan = function () {
          var t = this;
          if (s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5))
            return void (t.startPoints = t.newPoints);
          (t.canTap = !1),
            (t.contentLastPos = t.limitMovement()),
            t.requestId && i(t.requestId),
            (t.requestId = o(function () {
              n.fancybox.setTranslate(t.$content, t.contentLastPos);
            }));
        }),
        (d.prototype.limitMovement = function () {
          var t,
            e,
            n,
            o,
            i,
            a,
            s = this,
            r = s.canvasWidth,
            c = s.canvasHeight,
            l = s.distanceX,
            d = s.distanceY,
            u = s.contentStartPos,
            f = u.left,
            p = u.top,
            h = u.width,
            g = u.height;
          return (
            (i = h > r ? f + l : f),
            (a = p + d),
            (t = Math.max(0, 0.5 * r - 0.5 * h)),
            (e = Math.max(0, 0.5 * c - 0.5 * g)),
            (n = Math.min(r - h, 0.5 * r - 0.5 * h)),
            (o = Math.min(c - g, 0.5 * c - 0.5 * g)),
            l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, 0.8) || 0),
            l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, 0.8) || 0),
            d > 0 && a > e && (a = e - 1 + Math.pow(-e + p + d, 0.8) || 0),
            d < 0 && a < o && (a = o + 1 - Math.pow(o - p - d, 0.8) || 0),
            { top: a, left: i }
          );
        }),
        (d.prototype.limitPosition = function (t, e, n, o) {
          var i = this,
            a = i.canvasWidth,
            s = i.canvasHeight;
          return (
            n > a
              ? ((t = t > 0 ? 0 : t), (t = t < a - n ? a - n : t))
              : (t = Math.max(0, a / 2 - n / 2)),
            o > s
              ? ((e = e > 0 ? 0 : e), (e = e < s - o ? s - o : e))
              : (e = Math.max(0, s / 2 - o / 2)),
            { top: e, left: t }
          );
        }),
        (d.prototype.onZoom = function () {
          var e = this,
            a = e.contentStartPos,
            r = a.width,
            c = a.height,
            l = a.left,
            d = a.top,
            u = s(e.newPoints[0], e.newPoints[1]),
            f = u / e.startDistanceBetweenFingers,
            p = Math.floor(r * f),
            h = Math.floor(c * f),
            g = (r - p) * e.percentageOfImageAtPinchPointX,
            b = (c - h) * e.percentageOfImageAtPinchPointY,
            m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
            v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
            y = m - e.centerPointStartX,
            x = v - e.centerPointStartY,
            w = l + (g + y),
            $ = d + (b + x),
            S = { top: $, left: w, scaleX: f, scaleY: f };
          (e.canTap = !1),
            (e.newWidth = p),
            (e.newHeight = h),
            (e.contentLastPos = S),
            e.requestId && i(e.requestId),
            (e.requestId = o(function () {
              n.fancybox.setTranslate(e.$content, e.contentLastPos);
            }));
        }),
        (d.prototype.ontouchend = function (t) {
          var o = this,
            s = o.isSwiping,
            r = o.isPanning,
            c = o.isZooming,
            l = o.isScrolling;
          if (
            ((o.endPoints = a(t)),
            (o.dMs = Math.max(new Date().getTime() - o.startTime, 1)),
            o.$container.removeClass("fancybox-is-grabbing"),
            n(e).off(".fb.touch"),
            e.removeEventListener("scroll", o.onscroll, !0),
            o.requestId && (i(o.requestId), (o.requestId = null)),
            (o.isSwiping = !1),
            (o.isPanning = !1),
            (o.isZooming = !1),
            (o.isScrolling = !1),
            (o.instance.isDragging = !1),
            o.canTap)
          )
            return o.onTap(t);
          (o.speed = 100),
            (o.velocityX = (o.distanceX / o.dMs) * 0.5),
            (o.velocityY = (o.distanceY / o.dMs) * 0.5),
            r ? o.endPanning() : c ? o.endZooming() : o.endSwiping(s, l);
        }),
        (d.prototype.endSwiping = function (t, e) {
          var o = this,
            i = !1,
            a = o.instance.group.length,
            s = Math.abs(o.distanceX),
            r = "x" == t && a > 1 && ((o.dMs > 130 && s > 10) || s > 50);
          (o.sliderLastPos = null),
            "y" == t && !e && Math.abs(o.distanceY) > 50
              ? (n.fancybox.animate(
                  o.instance.current.$slide,
                  {
                    top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
                    opacity: 0,
                  },
                  200
                ),
                (i = o.instance.close(!0, 250)))
              : r && o.distanceX > 0
              ? (i = o.instance.previous(300))
              : r && o.distanceX < 0 && (i = o.instance.next(300)),
            !1 !== i || ("x" != t && "y" != t) || o.instance.centerSlide(200),
            o.$container.removeClass("fancybox-is-sliding");
        }),
        (d.prototype.endPanning = function () {
          var t,
            e,
            o,
            i = this;
          i.contentLastPos &&
            (!1 === i.opts.momentum || i.dMs > 350
              ? ((t = i.contentLastPos.left), (e = i.contentLastPos.top))
              : ((t = i.contentLastPos.left + 500 * i.velocityX),
                (e = i.contentLastPos.top + 500 * i.velocityY)),
            (o = i.limitPosition(
              t,
              e,
              i.contentStartPos.width,
              i.contentStartPos.height
            )),
            (o.width = i.contentStartPos.width),
            (o.height = i.contentStartPos.height),
            n.fancybox.animate(i.$content, o, 366));
        }),
        (d.prototype.endZooming = function () {
          var t,
            e,
            o,
            i,
            a = this,
            s = a.instance.current,
            r = a.newWidth,
            c = a.newHeight;
          a.contentLastPos &&
            ((t = a.contentLastPos.left),
            (e = a.contentLastPos.top),
            (i = { top: e, left: t, width: r, height: c, scaleX: 1, scaleY: 1 }),
            n.fancybox.setTranslate(a.$content, i),
            r < a.canvasWidth && c < a.canvasHeight
              ? a.instance.scaleToFit(150)
              : r > s.width || c > s.height
              ? a.instance.scaleToActual(
                  a.centerPointStartX,
                  a.centerPointStartY,
                  150
                )
              : ((o = a.limitPosition(t, e, r, c)),
                n.fancybox.animate(a.$content, o, 150)));
        }),
        (d.prototype.onTap = function (e) {
          var o,
            i = this,
            s = n(e.target),
            r = i.instance,
            c = r.current,
            l = (e && a(e)) || i.startPoints,
            d = l[0] ? l[0].x - n(t).scrollLeft() - i.stagePos.left : 0,
            u = l[0] ? l[0].y - n(t).scrollTop() - i.stagePos.top : 0,
            f = function (t) {
              var o = c.opts[t];
              if ((n.isFunction(o) && (o = o.apply(r, [c, e])), o))
                switch (o) {
                  case "close":
                    r.close(i.startEvent);
                    break;
                  case "toggleControls":
                    r.toggleControls();
                    break;
                  case "next":
                    r.next();
                    break;
                  case "nextOrClose":
                    r.group.length > 1 ? r.next() : r.close(i.startEvent);
                    break;
                  case "zoom":
                    "image" == c.type &&
                      (c.isLoaded || c.$ghost) &&
                      (r.canPan()
                        ? r.scaleToFit()
                        : r.isScaledDown()
                        ? r.scaleToActual(d, u)
                        : r.group.length < 2 && r.close(i.startEvent));
                }
            };
          if (
            (!e.originalEvent || 2 != e.originalEvent.button) &&
            (s.is("img") || !(d > s[0].clientWidth + s.offset().left))
          ) {
            if (
              s.is(
                ".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"
              )
            )
              o = "Outside";
            else if (s.is(".fancybox-slide")) o = "Slide";
            else {
              if (
                !r.current.$content ||
                !r.current.$content.find(s).addBack().filter(s).length
              )
                return;
              o = "Content";
            }
            if (i.tapped) {
              if (
                (clearTimeout(i.tapped),
                (i.tapped = null),
                Math.abs(d - i.tapX) > 50 || Math.abs(u - i.tapY) > 50)
              )
                return this;
              f("dblclick" + o);
            } else
              (i.tapX = d),
                (i.tapY = u),
                c.opts["dblclick" + o] &&
                c.opts["dblclick" + o] !== c.opts["click" + o]
                  ? (i.tapped = setTimeout(function () {
                      (i.tapped = null), r.isAnimating || f("click" + o);
                    }, 500))
                  : f("click" + o);
            return this;
          }
        }),
        n(e)
          .on("onActivate.fb", function (t, e) {
            e && !e.Guestures && (e.Guestures = new d(e));
          })
          .on("beforeClose.fb", function (t, e) {
            e && e.Guestures && e.Guestures.destroy();
          });
    })(window, document, jQuery),
    (function (t, e) {
      "use strict";
      e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
          slideShow:
            '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>',
        },
        slideShow: { autoStart: !1, speed: 3e3, progress: !0 },
      });
      var n = function (t) {
        (this.instance = t), this.init();
      };
      e.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function () {
          var t = this,
            n = t.instance,
            o = n.group[n.currIndex].opts.slideShow;
          (t.$button = n.$refs.toolbar
            .find("[data-fancybox-play]")
            .on("click", function () {
              t.toggle();
            })),
            n.group.length < 2 || !o
              ? t.$button.hide()
              : o.progress &&
                (t.$progress = e(
                  '<div class="fancybox-progress"></div>'
                ).appendTo(n.$refs.inner));
        },
        set: function (t) {
          var n = this,
            o = n.instance,
            i = o.current;
          i && (!0 === t || i.opts.loop || o.currIndex < o.group.length - 1)
            ? n.isActive &&
              "video" !== i.contentType &&
              (n.$progress &&
                e.fancybox.animate(
                  n.$progress.show(),
                  { scaleX: 1 },
                  i.opts.slideShow.speed
                ),
              (n.timer = setTimeout(function () {
                o.current.opts.loop || o.current.index != o.group.length - 1
                  ? o.next()
                  : o.jumpTo(0);
              }, i.opts.slideShow.speed)))
            : (n.stop(), (o.idleSecondsCounter = 0), o.showControls());
        },
        clear: function () {
          var t = this;
          clearTimeout(t.timer),
            (t.timer = null),
            t.$progress && t.$progress.removeAttr("style").hide();
        },
        start: function () {
          var t = this,
            e = t.instance.current;
          e &&
            (t.$button
              .attr(
                "title",
                (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP
              )
              .removeClass("fancybox-button--play")
              .addClass("fancybox-button--pause"),
            (t.isActive = !0),
            e.isComplete && t.set(!0),
            t.instance.trigger("onSlideShowChange", !0));
        },
        stop: function () {
          var t = this,
            e = t.instance.current;
          t.clear(),
            t.$button
              .attr(
                "title",
                (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START
              )
              .removeClass("fancybox-button--pause")
              .addClass("fancybox-button--play"),
            (t.isActive = !1),
            t.instance.trigger("onSlideShowChange", !1),
            t.$progress && t.$progress.removeAttr("style").hide();
        },
        toggle: function () {
          var t = this;
          t.isActive ? t.stop() : t.start();
        },
      }),
        e(t).on({
          "onInit.fb": function (t, e) {
            e && !e.SlideShow && (e.SlideShow = new n(e));
          },
          "beforeShow.fb": function (t, e, n, o) {
            var i = e && e.SlideShow;
            o
              ? i && n.opts.slideShow.autoStart && i.start()
              : i && i.isActive && i.clear();
          },
          "afterShow.fb": function (t, e, n) {
            var o = e && e.SlideShow;
            o && o.isActive && o.set();
          },
          "afterKeydown.fb": function (n, o, i, a, s) {
            var r = o && o.SlideShow;
            !r ||
              !i.opts.slideShow ||
              (80 !== s && 32 !== s) ||
              e(t.activeElement).is("button,a,input") ||
              (a.preventDefault(), r.toggle());
          },
          "beforeClose.fb onDeactivate.fb": function (t, e) {
            var n = e && e.SlideShow;
            n && n.stop();
          },
        }),
        e(t).on("visibilitychange", function () {
          var n = e.fancybox.getInstance(),
            o = n && n.SlideShow;
          o && o.isActive && (t.hidden ? o.clear() : o.set());
        });
    })(document, jQuery),
    (function (t, e) {
      "use strict";
      var n = (function () {
        for (
          var e = [
              [
                "requestFullscreen",
                "exitFullscreen",
                "fullscreenElement",
                "fullscreenEnabled",
                "fullscreenchange",
                "fullscreenerror",
              ],
              [
                "webkitRequestFullscreen",
                "webkitExitFullscreen",
                "webkitFullscreenElement",
                "webkitFullscreenEnabled",
                "webkitfullscreenchange",
                "webkitfullscreenerror",
              ],
              [
                "webkitRequestFullScreen",
                "webkitCancelFullScreen",
                "webkitCurrentFullScreenElement",
                "webkitCancelFullScreen",
                "webkitfullscreenchange",
                "webkitfullscreenerror",
              ],
              [
                "mozRequestFullScreen",
                "mozCancelFullScreen",
                "mozFullScreenElement",
                "mozFullScreenEnabled",
                "mozfullscreenchange",
                "mozfullscreenerror",
              ],
              [
                "msRequestFullscreen",
                "msExitFullscreen",
                "msFullscreenElement",
                "msFullscreenEnabled",
                "MSFullscreenChange",
                "MSFullscreenError",
              ],
            ],
            n = {},
            o = 0;
          o < e.length;
          o++
        ) {
          var i = e[o];
          if (i && i[1] in t) {
            for (var a = 0; a < i.length; a++) n[e[0][a]] = i[a];
            return n;
          }
        }
        return !1;
      })();
      if (n) {
        var o = {
          request: function (e) {
            (e = e || t.documentElement),
              e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
          },
          exit: function () {
            t[n.exitFullscreen]();
          },
          toggle: function (e) {
            (e = e || t.documentElement),
              this.isFullscreen() ? this.exit() : this.request(e);
          },
          isFullscreen: function () {
            return Boolean(t[n.fullscreenElement]);
          },
          enabled: function () {
            return Boolean(t[n.fullscreenEnabled]);
          },
        };
        e.extend(!0, e.fancybox.defaults, {
          btnTpl: {
            fullScreen:
              '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>',
          },
          fullScreen: { autoStart: !1 },
        }),
          e(t).on(n.fullscreenchange, function () {
            var t = o.isFullscreen(),
              n = e.fancybox.getInstance();
            n &&
              (n.current &&
                "image" === n.current.type &&
                n.isAnimating &&
                ((n.isAnimating = !1),
                n.update(!0, !0, 0),
                n.isComplete || n.complete()),
              n.trigger("onFullscreenChange", t),
              n.$refs.container.toggleClass("fancybox-is-fullscreen", t),
              n.$refs.toolbar
                .find("[data-fancybox-fullscreen]")
                .toggleClass("fancybox-button--fsenter", !t)
                .toggleClass("fancybox-button--fsexit", t));
          });
      }
      e(t).on({
        "onInit.fb": function (t, e) {
          var i;
          if (!n)
            return void e.$refs.toolbar
              .find("[data-fancybox-fullscreen]")
              .remove();
          e && e.group[e.currIndex].opts.fullScreen
            ? ((i = e.$refs.container),
              i.on(
                "click.fb-fullscreen",
                "[data-fancybox-fullscreen]",
                function (t) {
                  t.stopPropagation(), t.preventDefault(), o.toggle();
                }
              ),
              e.opts.fullScreen &&
                !0 === e.opts.fullScreen.autoStart &&
                o.request(),
              (e.FullScreen = o))
            : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
        },
        "afterKeydown.fb": function (t, e, n, o, i) {
          e &&
            e.FullScreen &&
            70 === i &&
            (o.preventDefault(), e.FullScreen.toggle());
        },
        "beforeClose.fb": function (t, e) {
          e &&
            e.FullScreen &&
            e.$refs.container.hasClass("fancybox-is-fullscreen") &&
            o.exit();
        },
      });
    })(document, jQuery),
    (function (t, e) {
      "use strict";
      var n = "fancybox-thumbs";
      e.fancybox.defaults = e.extend(
        !0,
        {
          btnTpl: {
            thumbs:
              '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>',
          },
          thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y",
          },
        },
        e.fancybox.defaults
      );
      var o = function (t) {
        this.init(t);
      };
      e.extend(o.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function (t) {
          var e = this,
            n = t.group,
            o = 0;
          (e.instance = t),
            (e.opts = n[t.currIndex].opts.thumbs),
            (t.Thumbs = e),
            (e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"));
          for (
            var i = 0, a = n.length;
            i < a && (n[i].thumb && o++, !(o > 1));
            i++
          );
          o > 1 && e.opts
            ? (e.$button.removeAttr("style").on("click", function () {
                e.toggle();
              }),
              (e.isActive = !0))
            : e.$button.hide();
        },
        create: function () {
          var t,
            o = this,
            i = o.instance,
            a = o.opts.parentEl,
            s = [];
          o.$grid ||
            ((o.$grid = e(
              '<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>'
            ).appendTo(i.$refs.container.find(a).addBack().filter(a))),
            o.$grid.on("click", "a", function () {
              i.jumpTo(e(this).attr("data-index"));
            })),
            o.$list ||
              (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)),
            e.each(i.group, function (e, n) {
              (t = n.thumb),
                t || "image" !== n.type || (t = n.src),
                s.push(
                  '<a href="javascript:;" tabindex="0" data-index="' +
                    e +
                    '"' +
                    (t && t.length
                      ? ' style="background-image:url(' + t + ')"'
                      : 'class="fancybox-thumbs-missing"') +
                    "></a>"
                );
            }),
            (o.$list[0].innerHTML = s.join("")),
            "x" === o.opts.axis &&
              o.$list.width(
                parseInt(o.$grid.css("padding-right"), 10) +
                  i.group.length * o.$list.children().eq(0).outerWidth(!0)
              );
        },
        focus: function (t) {
          var e,
            n,
            o = this,
            i = o.$list,
            a = o.$grid;
          o.instance.current &&
            ((e = i
              .children()
              .removeClass("fancybox-thumbs-active")
              .filter('[data-index="' + o.instance.current.index + '"]')
              .addClass("fancybox-thumbs-active")),
            (n = e.position()),
            "y" === o.opts.axis &&
            (n.top < 0 || n.top > i.height() - e.outerHeight())
              ? i.stop().animate({ scrollTop: i.scrollTop() + n.top }, t)
              : "x" === o.opts.axis &&
                (n.left < a.scrollLeft() ||
                  n.left > a.scrollLeft() + (a.width() - e.outerWidth())) &&
                i.parent().stop().animate({ scrollLeft: n.left }, t));
        },
        update: function () {
          var t = this;
          t.instance.$refs.container.toggleClass(
            "fancybox-show-thumbs",
            this.isVisible
          ),
            t.isVisible
              ? (t.$grid || t.create(),
                t.instance.trigger("onThumbsShow"),
                t.focus(0))
              : t.$grid && t.instance.trigger("onThumbsHide"),
            t.instance.update();
        },
        hide: function () {
          (this.isVisible = !1), this.update();
        },
        show: function () {
          (this.isVisible = !0), this.update();
        },
        toggle: function () {
          (this.isVisible = !this.isVisible), this.update();
        },
      }),
        e(t).on({
          "onInit.fb": function (t, e) {
            var n;
            e &&
              !e.Thumbs &&
              ((n = new o(e)), n.isActive && !0 === n.opts.autoStart && n.show());
          },
          "beforeShow.fb": function (t, e, n, o) {
            var i = e && e.Thumbs;
            i && i.isVisible && i.focus(o ? 0 : 250);
          },
          "afterKeydown.fb": function (t, e, n, o, i) {
            var a = e && e.Thumbs;
            a && a.isActive && 71 === i && (o.preventDefault(), a.toggle());
          },
          "beforeClose.fb": function (t, e) {
            var n = e && e.Thumbs;
            n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide();
          },
        });
    })(document, jQuery),
    (function (t, e) {
      "use strict";
      function n(t) {
        var e = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
          "/": "&#x2F;",
          "`": "&#x60;",
          "=": "&#x3D;",
        };
        return String(t).replace(/[&<>"'`=\/]/g, function (t) {
          return e[t];
        });
      }
      e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
          share:
            '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>',
        },
        share: {
          url: function (t, e) {
            return (
              (!t.currentHash &&
                "inline" !== e.type &&
                "html" !== e.type &&
                (e.origSrc || e.src)) ||
              window.location
            );
          },
          tpl:
            '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>',
        },
      }),
        e(t).on("click", "[data-fancybox-share]", function () {
          var t,
            o,
            i = e.fancybox.getInstance(),
            a = i.current || null;
          a &&
            ("function" === e.type(a.opts.share.url) &&
              (t = a.opts.share.url.apply(a, [i, a])),
            (o = a.opts.share.tpl
              .replace(
                /\{\{media\}\}/g,
                "image" === a.type ? encodeURIComponent(a.src) : ""
              )
              .replace(/\{\{url\}\}/g, encodeURIComponent(t))
              .replace(/\{\{url_raw\}\}/g, n(t))
              .replace(
                /\{\{descr\}\}/g,
                i.$caption ? encodeURIComponent(i.$caption.text()) : ""
              )),
            e.fancybox.open({
              src: i.translate(i, o),
              type: "html",
              opts: {
                touch: !1,
                animationEffect: !1,
                afterLoad: function (t, e) {
                  i.$refs.container.one("beforeClose.fb", function () {
                    t.close(null, 0);
                  }),
                    e.$content.find(".fancybox-share__button").click(function () {
                      return (
                        window.open(this.href, "Share", "width=550, height=450"),
                        !1
                      );
                    });
                },
                mobile: { autoFocus: !1 },
              },
            }));
        });
    })(document, jQuery),
    (function (t, e, n) {
      "use strict";
      function o() {
        var e = t.location.hash.substr(1),
          n = e.split("-"),
          o =
            n.length > 1 && /^\+?\d+$/.test(n[n.length - 1])
              ? parseInt(n.pop(-1), 10) || 1
              : 1,
          i = n.join("-");
        return { hash: e, index: o < 1 ? 1 : o, gallery: i };
      }
      function i(t) {
        "" !== t.gallery &&
          n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']")
            .eq(t.index - 1)
            .focus()
            .trigger("click.fb-start");
      }
      function a(t) {
        var e, n;
        return (
          !!t &&
          ((e = t.current ? t.current.opts : t.opts),
          "" !==
            (n =
              e.hash ||
              (e.$orig
                ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger")
                : "")) && n)
        );
      }
      n.escapeSelector ||
        (n.escapeSelector = function (t) {
          return (t + "").replace(
            /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
            function (t, e) {
              return e
                ? "\0" === t
                  ? "�"
                  : t.slice(0, -1) +
                    "\\" +
                    t.charCodeAt(t.length - 1).toString(16) +
                    " "
                : "\\" + t;
            }
          );
        }),
        n(function () {
          !1 !== n.fancybox.defaults.hash &&
            (n(e).on({
              "onInit.fb": function (t, e) {
                var n, i;
                !1 !== e.group[e.currIndex].opts.hash &&
                  ((n = o()),
                  (i = a(e)) &&
                    n.gallery &&
                    i == n.gallery &&
                    (e.currIndex = n.index - 1));
              },
              "beforeShow.fb": function (n, o, i, s) {
                var r;
                i &&
                  !1 !== i.opts.hash &&
                  (r = a(o)) &&
                  ((o.currentHash =
                    r + (o.group.length > 1 ? "-" + (i.index + 1) : "")),
                  t.location.hash !== "#" + o.currentHash &&
                    (s && !o.origHash && (o.origHash = t.location.hash),
                    o.hashTimer && clearTimeout(o.hashTimer),
                    (o.hashTimer = setTimeout(function () {
                      "replaceState" in t.history
                        ? (t.history[s ? "pushState" : "replaceState"](
                            {},
                            e.title,
                            t.location.pathname +
                              t.location.search +
                              "#" +
                              o.currentHash
                          ),
                          s && (o.hasCreatedHistory = !0))
                        : (t.location.hash = o.currentHash),
                        (o.hashTimer = null);
                    }, 300))));
              },
              "beforeClose.fb": function (n, o, i) {
                i &&
                  !1 !== i.opts.hash &&
                  (clearTimeout(o.hashTimer),
                  o.currentHash && o.hasCreatedHistory
                    ? t.history.back()
                    : o.currentHash &&
                      ("replaceState" in t.history
                        ? t.history.replaceState(
                            {},
                            e.title,
                            t.location.pathname +
                              t.location.search +
                              (o.origHash || "")
                          )
                        : (t.location.hash = o.origHash)),
                  (o.currentHash = null));
              },
            }),
            n(t).on("hashchange.fb", function () {
              var t = o(),
                e = null;
              n.each(n(".fancybox-container").get().reverse(), function (t, o) {
                var i = n(o).data("FancyBox");
                if (i && i.currentHash) return (e = i), !1;
              }),
                e
                  ? e.currentHash === t.gallery + "-" + t.index ||
                    (1 === t.index && e.currentHash == t.gallery) ||
                    ((e.currentHash = null), e.close())
                  : "" !== t.gallery && i(t);
            }),
            setTimeout(function () {
              n.fancybox.getInstance() || i(o());
            }, 50));
        });
    })(window, document, jQuery),
    (function (t, e) {
      "use strict";
      var n = new Date().getTime();
      e(t).on({
        "onInit.fb": function (t, e, o) {
          e.$refs.stage.on(
            "mousewheel DOMMouseScroll wheel MozMousePixelScroll",
            function (t) {
              var o = e.current,
                i = new Date().getTime();
              e.group.length < 2 ||
                !1 === o.opts.wheel ||
                ("auto" === o.opts.wheel && "image" !== o.type) ||
                (t.preventDefault(),
                t.stopPropagation(),
                o.$slide.hasClass("fancybox-animated") ||
                  ((t = t.originalEvent || t),
                  i - n < 250 ||
                    ((n = i),
                    e[
                      (-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0
                        ? "next"
                        : "previous"
                    ]())));
            }
          );
        },
      });
    })(document, jQuery);
  /*! Select2 4.1.0-beta.1 | https://github.com/select2/select2/blob/master/LICENSE.md */
  !(function (n) {
    "function" == typeof define && define.amd
      ? define(["jquery"], n)
      : "object" == typeof module && module.exports
      ? (module.exports = function (e, t) {
          return (
            void 0 === t &&
              (t =
                "undefined" != typeof window
                  ? require("jquery")
                  : require("jquery")(e)),
            n(t),
            t
          );
        })
      : n(jQuery);
  })(function (u) {
    var e = (function () {
        if (u && u.fn && u.fn.select2 && u.fn.select2.amd)
          var e = u.fn.select2.amd;
        var t, n, i, h, s, o, f, g, m, v, y, _, r, a, b;
        function w(e, t) {
          return r.call(e, t);
        }
        function l(e, t) {
          var n,
            i,
            r,
            s,
            o,
            a,
            l,
            c,
            u,
            d,
            p,
            h = t && t.split("/"),
            f = y.map,
            g = (f && f["*"]) || {};
          if (e) {
            for (
              o = (e = e.split("/")).length - 1,
                y.nodeIdCompat && b.test(e[o]) && (e[o] = e[o].replace(b, "")),
                "." === e[0].charAt(0) &&
                  h &&
                  (e = h.slice(0, h.length - 1).concat(e)),
                u = 0;
              u < e.length;
              u++
            )
              if ("." === (p = e[u])) e.splice(u, 1), (u -= 1);
              else if (".." === p) {
                if (0 === u || (1 === u && ".." === e[2]) || ".." === e[u - 1])
                  continue;
                0 < u && (e.splice(u - 1, 2), (u -= 2));
              }
            e = e.join("/");
          }
          if ((h || g) && f) {
            for (u = (n = e.split("/")).length; 0 < u; u -= 1) {
              if (((i = n.slice(0, u).join("/")), h))
                for (d = h.length; 0 < d; d -= 1)
                  if ((r = (r = f[h.slice(0, d).join("/")]) && r[i])) {
                    (s = r), (a = u);
                    break;
                  }
              if (s) break;
              !l && g && g[i] && ((l = g[i]), (c = u));
            }
            !s && l && ((s = l), (a = c)),
              s && (n.splice(0, a, s), (e = n.join("/")));
          }
          return e;
        }
        function x(t, n) {
          return function () {
            var e = a.call(arguments, 0);
            return (
              "string" != typeof e[0] && 1 === e.length && e.push(null),
              o.apply(h, e.concat([t, n]))
            );
          };
        }
        function A(t) {
          return function (e) {
            m[t] = e;
          };
        }
        function D(e) {
          if (w(v, e)) {
            var t = v[e];
            delete v[e], (_[e] = !0), s.apply(h, t);
          }
          if (!w(m, e) && !w(_, e)) throw new Error("No " + e);
          return m[e];
        }
        function c(e) {
          var t,
            n = e ? e.indexOf("!") : -1;
          return (
            -1 < n &&
              ((t = e.substring(0, n)), (e = e.substring(n + 1, e.length))),
            [t, e]
          );
        }
        function S(e) {
          return e ? c(e) : [];
        }
        return (
          (e && e.requirejs) ||
            (e ? (n = e) : (e = {}),
            (m = {}),
            (v = {}),
            (y = {}),
            (_ = {}),
            (r = Object.prototype.hasOwnProperty),
            (a = [].slice),
            (b = /\.js$/),
            (f = function (e, t) {
              var n,
                i = c(e),
                r = i[0],
                s = t[1];
              return (
                (e = i[1]),
                r && (n = D((r = l(r, s)))),
                r
                  ? (e =
                      n && n.normalize
                        ? n.normalize(
                            e,
                            (function (t) {
                              return function (e) {
                                return l(e, t);
                              };
                            })(s)
                          )
                        : l(e, s))
                  : ((r = (i = c((e = l(e, s))))[0]),
                    (e = i[1]),
                    r && (n = D(r))),
                { f: r ? r + "!" + e : e, n: e, pr: r, p: n }
              );
            }),
            (g = {
              require: function (e) {
                return x(e);
              },
              exports: function (e) {
                var t = m[e];
                return void 0 !== t ? t : (m[e] = {});
              },
              module: function (e) {
                return {
                  id: e,
                  uri: "",
                  exports: m[e],
                  config: (function (e) {
                    return function () {
                      return (y && y.config && y.config[e]) || {};
                    };
                  })(e),
                };
              },
            }),
            (s = function (e, t, n, i) {
              var r,
                s,
                o,
                a,
                l,
                c,
                u,
                d = [],
                p = typeof n;
              if (((c = S((i = i || e))), "undefined" == p || "function" == p)) {
                for (
                  t =
                    !t.length && n.length ? ["require", "exports", "module"] : t,
                    l = 0;
                  l < t.length;
                  l += 1
                )
                  if ("require" === (s = (a = f(t[l], c)).f)) d[l] = g.require(e);
                  else if ("exports" === s) (d[l] = g.exports(e)), (u = !0);
                  else if ("module" === s) r = d[l] = g.module(e);
                  else if (w(m, s) || w(v, s) || w(_, s)) d[l] = D(s);
                  else {
                    if (!a.p) throw new Error(e + " missing " + s);
                    a.p.load(a.n, x(i, !0), A(s), {}), (d[l] = m[s]);
                  }
                (o = n ? n.apply(m[e], d) : void 0),
                  e &&
                    (r && r.exports !== h && r.exports !== m[e]
                      ? (m[e] = r.exports)
                      : (o === h && u) || (m[e] = o));
              } else e && (m[e] = n);
            }),
            (t = n = o = function (e, t, n, i, r) {
              if ("string" == typeof e) return g[e] ? g[e](t) : D(f(e, S(t)).f);
              if (!e.splice) {
                if (((y = e).deps && o(y.deps, y.callback), !t)) return;
                t.splice ? ((e = t), (t = n), (n = null)) : (e = h);
              }
              return (
                (t = t || function () {}),
                "function" == typeof n && ((n = i), (i = r)),
                i
                  ? s(h, e, t, n)
                  : setTimeout(function () {
                      s(h, e, t, n);
                    }, 4),
                o
              );
            }),
            (o.config = function (e) {
              return o(e);
            }),
            (t._defined = m),
            ((i = function (e, t, n) {
              if ("string" != typeof e)
                throw new Error(
                  "See almond README: incorrect module build, no module name"
                );
              t.splice || ((n = t), (t = [])),
                w(m, e) || w(v, e) || (v[e] = [e, t, n]);
            }).amd = { jQuery: !0 }),
            (e.requirejs = t),
            (e.require = n),
            (e.define = i)),
          e.define("almond", function () {}),
          e.define("jquery", [], function () {
            var e = u || $;
            return (
              null == e &&
                console &&
                console.error &&
                console.error(
                  "Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."
                ),
              e
            );
          }),
          e.define("select2/utils", ["jquery"], function (s) {
            var r = {};
            function u(e) {
              var t = e.prototype,
                n = [];
              for (var i in t) {
                "function" == typeof t[i] && "constructor" !== i && n.push(i);
              }
              return n;
            }
            (r.Extend = function (e, t) {
              var n = {}.hasOwnProperty;
              function i() {
                this.constructor = e;
              }
              for (var r in t) n.call(t, r) && (e[r] = t[r]);
              return (
                (i.prototype = t.prototype),
                (e.prototype = new i()),
                (e.__super__ = t.prototype),
                e
              );
            }),
              (r.Decorate = function (i, r) {
                var e = u(r),
                  t = u(i);
                function s() {
                  var e = Array.prototype.unshift,
                    t = r.prototype.constructor.length,
                    n = i.prototype.constructor;
                  0 < t &&
                    (e.call(arguments, i.prototype.constructor),
                    (n = r.prototype.constructor)),
                    n.apply(this, arguments);
                }
                (r.displayName = i.displayName),
                  (s.prototype = new (function () {
                    this.constructor = s;
                  })());
                for (var n = 0; n < t.length; n++) {
                  var o = t[n];
                  s.prototype[o] = i.prototype[o];
                }
                function a(e) {
                  var t = function () {};
                  e in s.prototype && (t = s.prototype[e]);
                  var n = r.prototype[e];
                  return function () {
                    return (
                      Array.prototype.unshift.call(arguments, t),
                      n.apply(this, arguments)
                    );
                  };
                }
                for (var l = 0; l < e.length; l++) {
                  var c = e[l];
                  s.prototype[c] = a(c);
                }
                return s;
              });
            function e() {
              this.listeners = {};
            }
            (e.prototype.on = function (e, t) {
              (this.listeners = this.listeners || {}),
                e in this.listeners
                  ? this.listeners[e].push(t)
                  : (this.listeners[e] = [t]);
            }),
              (e.prototype.trigger = function (e) {
                var t = Array.prototype.slice,
                  n = t.call(arguments, 1);
                (this.listeners = this.listeners || {}),
                  null == n && (n = []),
                  0 === n.length && n.push({}),
                  (n[0]._type = e) in this.listeners &&
                    this.invoke(this.listeners[e], t.call(arguments, 1)),
                  "*" in this.listeners &&
                    this.invoke(this.listeners["*"], arguments);
              }),
              (e.prototype.invoke = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++) e[n].apply(this, t);
              }),
              (r.Observable = e),
              (r.generateChars = function (e) {
                for (var t = "", n = 0; n < e; n++) {
                  t += Math.floor(36 * Math.random()).toString(36);
                }
                return t;
              }),
              (r.bind = function (e, t) {
                return function () {
                  e.apply(t, arguments);
                };
              }),
              (r._convertData = function (e) {
                for (var t in e) {
                  var n = t.split("-"),
                    i = e;
                  if (1 !== n.length) {
                    for (var r = 0; r < n.length; r++) {
                      var s = n[r];
                      (s = s.substring(0, 1).toLowerCase() + s.substring(1)) in
                        i || (i[s] = {}),
                        r == n.length - 1 && (i[s] = e[t]),
                        (i = i[s]);
                    }
                    delete e[t];
                  }
                }
                return e;
              }),
              (r.hasScroll = function (e, t) {
                var n = s(t),
                  i = t.style.overflowX,
                  r = t.style.overflowY;
                return (
                  (i !== r || ("hidden" !== r && "visible" !== r)) &&
                  ("scroll" === i ||
                    "scroll" === r ||
                    n.innerHeight() < t.scrollHeight ||
                    n.innerWidth() < t.scrollWidth)
                );
              }),
              (r.escapeMarkup = function (e) {
                var t = {
                  "\\": "&#92;",
                  "&": "&amp;",
                  "<": "&lt;",
                  ">": "&gt;",
                  '"': "&quot;",
                  "'": "&#39;",
                  "/": "&#47;",
                };
                return "string" != typeof e
                  ? e
                  : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                      return t[e];
                    });
              }),
              (r.__cache = {});
            var n = 0;
            return (
              (r.GetUniqueElementId = function (e) {
                var t = e.getAttribute("data-select2-id");
                return (
                  null != t ||
                    ((t = e.id
                      ? "select2-data-" + e.id
                      : "select2-data-" +
                        (++n).toString() +
                        "-" +
                        r.generateChars(4)),
                    e.setAttribute("data-select2-id", t)),
                  t
                );
              }),
              (r.StoreData = function (e, t, n) {
                var i = r.GetUniqueElementId(e);
                r.__cache[i] || (r.__cache[i] = {}), (r.__cache[i][t] = n);
              }),
              (r.GetData = function (e, t) {
                var n = r.GetUniqueElementId(e);
                return t
                  ? r.__cache[n] && null != r.__cache[n][t]
                    ? r.__cache[n][t]
                    : s(e).data(t)
                  : r.__cache[n];
              }),
              (r.RemoveData = function (e) {
                var t = r.GetUniqueElementId(e);
                null != r.__cache[t] && delete r.__cache[t],
                  e.removeAttribute("data-select2-id");
              }),
              (r.copyNonInternalCssClasses = function (e, t) {
                var n = e.getAttribute("class").trim().split(/\s+/);
                n = n.filter(function (e) {
                  return 0 === e.indexOf("select2-");
                });
                var i = t.getAttribute("class").trim().split(/\s+/);
                i = i.filter(function (e) {
                  return 0 !== e.indexOf("select2-");
                });
                var r = n.concat(i);
                e.setAttribute("class", r.join(" "));
              }),
              r
            );
          }),
          e.define("select2/results", ["jquery", "./utils"], function (h, f) {
            function i(e, t, n) {
              (this.$element = e),
                (this.data = n),
                (this.options = t),
                i.__super__.constructor.call(this);
            }
            return (
              f.Extend(i, f.Observable),
              (i.prototype.render = function () {
                var e = h(
                  '<ul class="select2-results__options" role="listbox"></ul>'
                );
                return (
                  this.options.get("multiple") &&
                    e.attr("aria-multiselectable", "true"),
                  (this.$results = e)
                );
              }),
              (i.prototype.clear = function () {
                this.$results.empty();
              }),
              (i.prototype.displayMessage = function (e) {
                var t = this.options.get("escapeMarkup");
                this.clear(), this.hideLoading();
                var n = h(
                    '<li role="alert" aria-live="assertive" class="select2-results__option"></li>'
                  ),
                  i = this.options.get("translations").get(e.message);
                n.append(t(i(e.args))),
                  (n[0].className += " select2-results__message"),
                  this.$results.append(n);
              }),
              (i.prototype.hideMessages = function () {
                this.$results.find(".select2-results__message").remove();
              }),
              (i.prototype.append = function (e) {
                this.hideLoading();
                var t = [];
                if (null != e.results && 0 !== e.results.length) {
                  e.results = this.sort(e.results);
                  for (var n = 0; n < e.results.length; n++) {
                    var i = e.results[n],
                      r = this.option(i);
                    t.push(r);
                  }
                  this.$results.append(t);
                } else
                  0 === this.$results.children().length &&
                    this.trigger("results:message", { message: "noResults" });
              }),
              (i.prototype.position = function (e, t) {
                t.find(".select2-results").append(e);
              }),
              (i.prototype.sort = function (e) {
                return this.options.get("sorter")(e);
              }),
              (i.prototype.highlightFirstItem = function () {
                var e = this.$results.find(
                    ".select2-results__option--selectable"
                  ),
                  t = e.filter(".select2-results__option--selected");
                0 < t.length
                  ? t.first().trigger("mouseenter")
                  : e.first().trigger("mouseenter"),
                  this.ensureHighlightVisible();
              }),
              (i.prototype.setClasses = function () {
                var t = this;
                this.data.current(function (e) {
                  var i = e.map(function (e) {
                    return e.id.toString();
                  });
                  t.$results
                    .find(".select2-results__option--selectable")
                    .each(function () {
                      var e = h(this),
                        t = f.GetData(this, "data"),
                        n = "" + t.id;
                      (null != t.element && t.element.selected) ||
                      (null == t.element && -1 < i.indexOf(n))
                        ? (this.classList.add(
                            "select2-results__option--selected"
                          ),
                          e.attr("aria-selected", "true"))
                        : (this.classList.remove(
                            "select2-results__option--selected"
                          ),
                          e.attr("aria-selected", "false"));
                    });
                });
              }),
              (i.prototype.showLoading = function (e) {
                this.hideLoading();
                var t = {
                    disabled: !0,
                    loading: !0,
                    text: this.options.get("translations").get("searching")(e),
                  },
                  n = this.option(t);
                (n.className += " loading-results"), this.$results.prepend(n);
              }),
              (i.prototype.hideLoading = function () {
                this.$results.find(".loading-results").remove();
              }),
              (i.prototype.option = function (e) {
                var t = document.createElement("li");
                t.classList.add("select2-results__option"),
                  t.classList.add("select2-results__option--selectable");
                var n = { role: "option" },
                  i =
                    window.Element.prototype.matches ||
                    window.Element.prototype.msMatchesSelector ||
                    window.Element.prototype.webkitMatchesSelector;
                for (var r in (((null != e.element &&
                  i.call(e.element, ":disabled")) ||
                  (null == e.element && e.disabled)) &&
                  ((n["aria-disabled"] = "true"),
                  t.classList.remove("select2-results__option--selectable"),
                  t.classList.add("select2-results__option--disabled")),
                null == e.id &&
                  t.classList.remove("select2-results__option--selectable"),
                null != e._resultId && (t.id = e._resultId),
                e.title && (t.title = e.title),
                e.children &&
                  ((n.role = "group"),
                  (n["aria-label"] = e.text),
                  t.classList.remove("select2-results__option--selectable"),
                  t.classList.add("select2-results__option--group")),
                n)) {
                  var s = n[r];
                  t.setAttribute(r, s);
                }
                if (e.children) {
                  var o = h(t),
                    a = document.createElement("strong");
                  (a.className = "select2-results__group"), this.template(e, a);
                  for (var l = [], c = 0; c < e.children.length; c++) {
                    var u = e.children[c],
                      d = this.option(u);
                    l.push(d);
                  }
                  var p = h("<ul></ul>", {
                    class:
                      "select2-results__options select2-results__options--nested",
                  });
                  p.append(l), o.append(a), o.append(p);
                } else this.template(e, t);
                return f.StoreData(t, "data", e), t;
              }),
              (i.prototype.bind = function (t, e) {
                var l = this,
                  n = t.id + "-results";
                this.$results.attr("id", n),
                  t.on("results:all", function (e) {
                    l.clear(),
                      l.append(e.data),
                      t.isOpen() && (l.setClasses(), l.highlightFirstItem());
                  }),
                  t.on("results:append", function (e) {
                    l.append(e.data), t.isOpen() && l.setClasses();
                  }),
                  t.on("query", function (e) {
                    l.hideMessages(), l.showLoading(e);
                  }),
                  t.on("select", function () {
                    t.isOpen() &&
                      (l.setClasses(),
                      l.options.get("scrollAfterSelect") &&
                        l.highlightFirstItem());
                  }),
                  t.on("unselect", function () {
                    t.isOpen() &&
                      (l.setClasses(),
                      l.options.get("scrollAfterSelect") &&
                        l.highlightFirstItem());
                  }),
                  t.on("open", function () {
                    l.$results.attr("aria-expanded", "true"),
                      l.$results.attr("aria-hidden", "false"),
                      l.setClasses(),
                      l.ensureHighlightVisible();
                  }),
                  t.on("close", function () {
                    l.$results.attr("aria-expanded", "false"),
                      l.$results.attr("aria-hidden", "true"),
                      l.$results.removeAttr("aria-activedescendant");
                  }),
                  t.on("results:toggle", function () {
                    var e = l.getHighlightedResults();
                    0 !== e.length && e.trigger("mouseup");
                  }),
                  t.on("results:select", function () {
                    var e = l.getHighlightedResults();
                    if (0 !== e.length) {
                      var t = f.GetData(e[0], "data");
                      e.hasClass("select2-results__option--selected")
                        ? l.trigger("close", {})
                        : l.trigger("select", { data: t });
                    }
                  }),
                  t.on("results:previous", function () {
                    var e = l.getHighlightedResults(),
                      t = l.$results.find(".select2-results__option--selectable"),
                      n = t.index(e);
                    if (!(n <= 0)) {
                      var i = n - 1;
                      0 === e.length && (i = 0);
                      var r = t.eq(i);
                      r.trigger("mouseenter");
                      var s = l.$results.offset().top,
                        o = r.offset().top,
                        a = l.$results.scrollTop() + (o - s);
                      0 === i
                        ? l.$results.scrollTop(0)
                        : o - s < 0 && l.$results.scrollTop(a);
                    }
                  }),
                  t.on("results:next", function () {
                    var e = l.getHighlightedResults(),
                      t = l.$results.find(".select2-results__option--selectable"),
                      n = t.index(e) + 1;
                    if (!(n >= t.length)) {
                      var i = t.eq(n);
                      i.trigger("mouseenter");
                      var r =
                          l.$results.offset().top + l.$results.outerHeight(!1),
                        s = i.offset().top + i.outerHeight(!1),
                        o = l.$results.scrollTop() + s - r;
                      0 === n
                        ? l.$results.scrollTop(0)
                        : r < s && l.$results.scrollTop(o);
                    }
                  }),
                  t.on("results:focus", function (e) {
                    e.element[0].classList.add(
                      "select2-results__option--highlighted"
                    ),
                      e.element[0].setAttribute("aria-selected", "true");
                  }),
                  t.on("results:message", function (e) {
                    l.displayMessage(e);
                  }),
                  h.fn.mousewheel &&
                    this.$results.on("mousewheel", function (e) {
                      var t = l.$results.scrollTop(),
                        n = l.$results.get(0).scrollHeight - t + e.deltaY,
                        i = 0 < e.deltaY && t - e.deltaY <= 0,
                        r = e.deltaY < 0 && n <= l.$results.height();
                      i
                        ? (l.$results.scrollTop(0),
                          e.preventDefault(),
                          e.stopPropagation())
                        : r &&
                          (l.$results.scrollTop(
                            l.$results.get(0).scrollHeight - l.$results.height()
                          ),
                          e.preventDefault(),
                          e.stopPropagation());
                    }),
                  this.$results.on(
                    "mouseup",
                    ".select2-results__option--selectable",
                    function (e) {
                      var t = h(this),
                        n = f.GetData(this, "data");
                      t.hasClass("select2-results__option--selected")
                        ? l.options.get("multiple")
                          ? l.trigger("unselect", { originalEvent: e, data: n })
                          : l.trigger("close", {})
                        : l.trigger("select", { originalEvent: e, data: n });
                    }
                  ),
                  this.$results.on(
                    "mouseenter",
                    ".select2-results__option--selectable",
                    function (e) {
                      var t = f.GetData(this, "data");
                      l
                        .getHighlightedResults()
                        .removeClass("select2-results__option--highlighted")
                        .attr("aria-selected", "false"),
                        l.trigger("results:focus", { data: t, element: h(this) });
                    }
                  );
              }),
              (i.prototype.getHighlightedResults = function () {
                return this.$results.find(
                  ".select2-results__option--highlighted"
                );
              }),
              (i.prototype.destroy = function () {
                this.$results.remove();
              }),
              (i.prototype.ensureHighlightVisible = function () {
                var e = this.getHighlightedResults();
                if (0 !== e.length) {
                  var t = this.$results
                      .find(".select2-results__option--selectable")
                      .index(e),
                    n = this.$results.offset().top,
                    i = e.offset().top,
                    r = this.$results.scrollTop() + (i - n),
                    s = i - n;
                  (r -= 2 * e.outerHeight(!1)),
                    t <= 2
                      ? this.$results.scrollTop(0)
                      : (s > this.$results.outerHeight() || s < 0) &&
                        this.$results.scrollTop(r);
                }
              }),
              (i.prototype.template = function (e, t) {
                var n = this.options.get("templateResult"),
                  i = this.options.get("escapeMarkup"),
                  r = n(e, t);
                null == r
                  ? (t.style.display = "none")
                  : "string" == typeof r
                  ? (t.innerHTML = i(r))
                  : h(t).append(r);
              }),
              i
            );
          }),
          e.define("select2/keys", [], function () {
            return {
              BACKSPACE: 8,
              TAB: 9,
              ENTER: 13,
              SHIFT: 16,
              CTRL: 17,
              ALT: 18,
              ESC: 27,
              SPACE: 32,
              PAGE_UP: 33,
              PAGE_DOWN: 34,
              END: 35,
              HOME: 36,
              LEFT: 37,
              UP: 38,
              RIGHT: 39,
              DOWN: 40,
              DELETE: 46,
            };
          }),
          e.define(
            "select2/selection/base",
            ["jquery", "../utils", "../keys"],
            function (n, i, r) {
              function s(e, t) {
                (this.$element = e),
                  (this.options = t),
                  s.__super__.constructor.call(this);
              }
              return (
                i.Extend(s, i.Observable),
                (s.prototype.render = function () {
                  var e = n(
                    '<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'
                  );
                  return (
                    (this._tabindex = 0),
                    null != i.GetData(this.$element[0], "old-tabindex")
                      ? (this._tabindex = i.GetData(
                          this.$element[0],
                          "old-tabindex"
                        ))
                      : null != this.$element.attr("tabindex") &&
                        (this._tabindex = this.$element.attr("tabindex")),
                    e.attr("title", this.$element.attr("title")),
                    e.attr("tabindex", this._tabindex),
                    e.attr("aria-disabled", "false"),
                    (this.$selection = e)
                  );
                }),
                (s.prototype.bind = function (e, t) {
                  var n = this,
                    i = e.id + "-results";
                  (this.container = e),
                    this.$selection.on("focus", function (e) {
                      n.trigger("focus", e);
                    }),
                    this.$selection.on("blur", function (e) {
                      n._handleBlur(e);
                    }),
                    this.$selection.on("keydown", function (e) {
                      n.trigger("keypress", e),
                        e.which === r.SPACE && e.preventDefault();
                    }),
                    e.on("results:focus", function (e) {
                      n.$selection.attr(
                        "aria-activedescendant",
                        e.data._resultId
                      );
                    }),
                    e.on("selection:update", function (e) {
                      n.update(e.data);
                    }),
                    e.on("open", function () {
                      n.$selection.attr("aria-expanded", "true"),
                        n.$selection.attr("aria-owns", i),
                        n._attachCloseHandler(e);
                    }),
                    e.on("close", function () {
                      n.$selection.attr("aria-expanded", "false"),
                        n.$selection.removeAttr("aria-activedescendant"),
                        n.$selection.removeAttr("aria-owns"),
                        n.$selection.trigger("focus"),
                        n._detachCloseHandler(e);
                    }),
                    e.on("enable", function () {
                      n.$selection.attr("tabindex", n._tabindex),
                        n.$selection.attr("aria-disabled", "false");
                    }),
                    e.on("disable", function () {
                      n.$selection.attr("tabindex", "-1"),
                        n.$selection.attr("aria-disabled", "true");
                    });
                }),
                (s.prototype._handleBlur = function (e) {
                  var t = this;
                  window.setTimeout(function () {
                    document.activeElement == t.$selection[0] ||
                      n.contains(t.$selection[0], document.activeElement) ||
                      t.trigger("blur", e);
                  }, 1);
                }),
                (s.prototype._attachCloseHandler = function (e) {
                  n(document.body).on("mousedown.select2." + e.id, function (e) {
                    var t = n(e.target).closest(".select2");
                    n(".select2.select2-container--open").each(function () {
                      this != t[0] && i.GetData(this, "element").select2("close");
                    });
                  });
                }),
                (s.prototype._detachCloseHandler = function (e) {
                  n(document.body).off("mousedown.select2." + e.id);
                }),
                (s.prototype.position = function (e, t) {
                  t.find(".selection").append(e);
                }),
                (s.prototype.destroy = function () {
                  this._detachCloseHandler(this.container);
                }),
                (s.prototype.update = function (e) {
                  throw new Error(
                    "The `update` method must be defined in child classes."
                  );
                }),
                (s.prototype.isEnabled = function () {
                  return !this.isDisabled();
                }),
                (s.prototype.isDisabled = function () {
                  return this.options.get("disabled");
                }),
                s
              );
            }
          ),
          e.define(
            "select2/selection/single",
            ["jquery", "./base", "../utils", "../keys"],
            function (e, t, n, i) {
              function r() {
                r.__super__.constructor.apply(this, arguments);
              }
              return (
                n.Extend(r, t),
                (r.prototype.render = function () {
                  var e = r.__super__.render.call(this);
                  return (
                    e[0].classList.add("select2-selection--single"),
                    e.html(
                      '<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'
                    ),
                    e
                  );
                }),
                (r.prototype.bind = function (t, e) {
                  var n = this;
                  r.__super__.bind.apply(this, arguments);
                  var i = t.id + "-container";
                  this.$selection
                    .find(".select2-selection__rendered")
                    .attr("id", i)
                    .attr("role", "textbox")
                    .attr("aria-readonly", "true"),
                    this.$selection.attr("aria-labelledby", i),
                    this.$selection.on("mousedown", function (e) {
                      1 === e.which && n.trigger("toggle", { originalEvent: e });
                    }),
                    this.$selection.on("focus", function (e) {}),
                    this.$selection.on("blur", function (e) {}),
                    t.on("focus", function (e) {
                      t.isOpen() || n.$selection.trigger("focus");
                    });
                }),
                (r.prototype.clear = function () {
                  var e = this.$selection.find(".select2-selection__rendered");
                  e.empty(), e.removeAttr("title");
                }),
                (r.prototype.display = function (e, t) {
                  var n = this.options.get("templateSelection");
                  return this.options.get("escapeMarkup")(n(e, t));
                }),
                (r.prototype.selectionContainer = function () {
                  return e("<span></span>");
                }),
                (r.prototype.update = function (e) {
                  if (0 !== e.length) {
                    var t = e[0],
                      n = this.$selection.find(".select2-selection__rendered"),
                      i = this.display(t, n);
                    n.empty().append(i);
                    var r = t.title || t.text;
                    r ? n.attr("title", r) : n.removeAttr("title");
                  } else this.clear();
                }),
                r
              );
            }
          ),
          e.define(
            "select2/selection/multiple",
            ["jquery", "./base", "../utils"],
            function (r, e, d) {
              function s(e, t) {
                s.__super__.constructor.apply(this, arguments);
              }
              return (
                d.Extend(s, e),
                (s.prototype.render = function () {
                  var e = s.__super__.render.call(this);
                  return (
                    e[0].classList.add("select2-selection--multiple"),
                    e.html('<ul class="select2-selection__rendered"></ul>'),
                    e
                  );
                }),
                (s.prototype.bind = function (e, t) {
                  var i = this;
                  s.__super__.bind.apply(this, arguments);
                  var n = e.id + "-container";
                  this.$selection
                    .find(".select2-selection__rendered")
                    .attr("id", n),
                    this.$selection.on("click", function (e) {
                      i.trigger("toggle", { originalEvent: e });
                    }),
                    this.$selection.on(
                      "click",
                      ".select2-selection__choice__remove",
                      function (e) {
                        if (!i.isDisabled()) {
                          var t = r(this).parent(),
                            n = d.GetData(t[0], "data");
                          i.trigger("unselect", { originalEvent: e, data: n });
                        }
                      }
                    ),
                    this.$selection.on(
                      "keydown",
                      ".select2-selection__choice__remove",
                      function (e) {
                        i.isDisabled() || e.stopPropagation();
                      }
                    );
                }),
                (s.prototype.clear = function () {
                  var e = this.$selection.find(".select2-selection__rendered");
                  e.empty(), e.removeAttr("title");
                }),
                (s.prototype.display = function (e, t) {
                  var n = this.options.get("templateSelection");
                  return this.options.get("escapeMarkup")(n(e, t));
                }),
                (s.prototype.selectionContainer = function () {
                  return r(
                    '<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>'
                  );
                }),
                (s.prototype.update = function (e) {
                  if ((this.clear(), 0 !== e.length)) {
                    for (
                      var t = [],
                        n =
                          this.$selection
                            .find(".select2-selection__rendered")
                            .attr("id") + "-choice-",
                        i = 0;
                      i < e.length;
                      i++
                    ) {
                      var r = e[i],
                        s = this.selectionContainer(),
                        o = this.display(r, s),
                        a = n + d.generateChars(4) + "-";
                      r.id ? (a += r.id) : (a += d.generateChars(4)),
                        s
                          .find(".select2-selection__choice__display")
                          .append(o)
                          .attr("id", a);
                      var l = r.title || r.text;
                      l && s.attr("title", l);
                      var c = this.options.get("translations").get("removeItem"),
                        u = s.find(".select2-selection__choice__remove");
                      u.attr("title", c()),
                        u.attr("aria-label", c()),
                        u.attr("aria-describedby", a),
                        d.StoreData(s[0], "data", r),
                        t.push(s);
                    }
                    this.$selection
                      .find(".select2-selection__rendered")
                      .append(t);
                  }
                }),
                s
              );
            }
          ),
          e.define("select2/selection/placeholder", [], function () {
            function e(e, t, n) {
              (this.placeholder = this.normalizePlaceholder(
                n.get("placeholder")
              )),
                e.call(this, t, n);
            }
            return (
              (e.prototype.normalizePlaceholder = function (e, t) {
                return "string" == typeof t && (t = { id: "", text: t }), t;
              }),
              (e.prototype.createPlaceholder = function (e, t) {
                var n = this.selectionContainer();
                return (
                  n.html(this.display(t)),
                  n[0].classList.add("select2-selection__placeholder"),
                  n[0].classList.remove("select2-selection__choice"),
                  n
                );
              }),
              (e.prototype.update = function (e, t) {
                var n = 1 == t.length && t[0].id != this.placeholder.id;
                if (1 < t.length || n) return e.call(this, t);
                this.clear();
                var i = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(i);
              }),
              e
            );
          }),
          e.define(
            "select2/selection/allowClear",
            ["jquery", "../keys", "../utils"],
            function (s, i, a) {
              function e() {}
              return (
                (e.prototype.bind = function (e, t, n) {
                  var i = this;
                  e.call(this, t, n),
                    null == this.placeholder &&
                      this.options.get("debug") &&
                      window.console &&
                      console.error &&
                      console.error(
                        "Select2: The `allowClear` option should be used in combination with the `placeholder` option."
                      ),
                    this.$selection.on(
                      "mousedown",
                      ".select2-selection__clear",
                      function (e) {
                        i._handleClear(e);
                      }
                    ),
                    t.on("keypress", function (e) {
                      i._handleKeyboardClear(e, t);
                    });
                }),
                (e.prototype._handleClear = function (e, t) {
                  if (!this.isDisabled()) {
                    var n = this.$selection.find(".select2-selection__clear");
                    if (0 !== n.length) {
                      t.stopPropagation();
                      var i = a.GetData(n[0], "data"),
                        r = this.$element.val();
                      this.$element.val(this.placeholder.id);
                      var s = { data: i };
                      if ((this.trigger("clear", s), s.prevented))
                        this.$element.val(r);
                      else {
                        for (var o = 0; o < i.length; o++)
                          if (
                            ((s = { data: i[o] }),
                            this.trigger("unselect", s),
                            s.prevented)
                          )
                            return void this.$element.val(r);
                        this.$element.trigger("input").trigger("change"),
                          this.trigger("toggle", {});
                      }
                    }
                  }
                }),
                (e.prototype._handleKeyboardClear = function (e, t, n) {
                  n.isOpen() ||
                    (t.which != i.DELETE && t.which != i.BACKSPACE) ||
                    this._handleClear(t);
                }),
                (e.prototype.update = function (e, t) {
                  if (
                    (e.call(this, t),
                    this.$selection.find(".select2-selection__clear").remove(),
                    !(
                      0 <
                        this.$selection.find(".select2-selection__placeholder")
                          .length || 0 === t.length
                    ))
                  ) {
                    var n = this.$selection
                        .find(".select2-selection__rendered")
                        .attr("id"),
                      i = this.options.get("translations").get("removeAllItems"),
                      r = s(
                        '<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>'
                      );
                    r.attr("title", i()),
                      r.attr("aria-label", i()),
                      r.attr("aria-describedby", n),
                      a.StoreData(r[0], "data", t),
                      this.$selection.prepend(r);
                  }
                }),
                e
              );
            }
          ),
          e.define(
            "select2/selection/search",
            ["jquery", "../utils", "../keys"],
            function (i, l, c) {
              function e(e, t, n) {
                e.call(this, t, n);
              }
              return (
                (e.prototype.render = function (e) {
                  var t = i(
                    '<span class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>'
                  );
                  (this.$searchContainer = t),
                    (this.$search = t.find("input")),
                    this.$search.prop(
                      "autocomplete",
                      this.options.get("autocomplete")
                    );
                  var n = e.call(this);
                  return (
                    this._transferTabIndex(), n.append(this.$searchContainer), n
                  );
                }),
                (e.prototype.bind = function (e, t, n) {
                  var i = this,
                    r = t.id + "-results",
                    s = t.id + "-container";
                  e.call(this, t, n),
                    i.$search.attr("aria-describedby", s),
                    t.on("open", function () {
                      i.$search.attr("aria-controls", r),
                        i.$search.trigger("focus");
                    }),
                    t.on("close", function () {
                      i.$search.val(""),
                        i.resizeSearch(),
                        i.$search.removeAttr("aria-controls"),
                        i.$search.removeAttr("aria-activedescendant"),
                        i.$search.trigger("focus");
                    }),
                    t.on("enable", function () {
                      i.$search.prop("disabled", !1), i._transferTabIndex();
                    }),
                    t.on("disable", function () {
                      i.$search.prop("disabled", !0);
                    }),
                    t.on("focus", function (e) {
                      i.$search.trigger("focus");
                    }),
                    t.on("results:focus", function (e) {
                      e.data._resultId
                        ? i.$search.attr(
                            "aria-activedescendant",
                            e.data._resultId
                          )
                        : i.$search.removeAttr("aria-activedescendant");
                    }),
                    this.$selection.on(
                      "focusin",
                      ".select2-search--inline",
                      function (e) {
                        i.trigger("focus", e);
                      }
                    ),
                    this.$selection.on(
                      "focusout",
                      ".select2-search--inline",
                      function (e) {
                        i._handleBlur(e);
                      }
                    ),
                    this.$selection.on(
                      "keydown",
                      ".select2-search--inline",
                      function (e) {
                        if (
                          (e.stopPropagation(),
                          i.trigger("keypress", e),
                          (i._keyUpPrevented = e.isDefaultPrevented()),
                          e.which === c.BACKSPACE && "" === i.$search.val())
                        ) {
                          var t = i.$selection
                            .find(".select2-selection__choice")
                            .last();
                          if (0 < t.length) {
                            var n = l.GetData(t[0], "data");
                            i.searchRemoveChoice(n), e.preventDefault();
                          }
                        }
                      }
                    ),
                    this.$selection.on(
                      "click",
                      ".select2-search--inline",
                      function (e) {
                        i.$search.val() && e.stopPropagation();
                      }
                    );
                  var o = document.documentMode,
                    a = o && o <= 11;
                  this.$selection.on(
                    "input.searchcheck",
                    ".select2-search--inline",
                    function (e) {
                      a
                        ? i.$selection.off("input.search input.searchcheck")
                        : i.$selection.off("keyup.search");
                    }
                  ),
                    this.$selection.on(
                      "keyup.search input.search",
                      ".select2-search--inline",
                      function (e) {
                        if (a && "input" === e.type)
                          i.$selection.off("input.search input.searchcheck");
                        else {
                          var t = e.which;
                          t != c.SHIFT &&
                            t != c.CTRL &&
                            t != c.ALT &&
                            t != c.TAB &&
                            i.handleSearch(e);
                        }
                      }
                    );
                }),
                (e.prototype._transferTabIndex = function (e) {
                  this.$search.attr("tabindex", this.$selection.attr("tabindex")),
                    this.$selection.attr("tabindex", "-1");
                }),
                (e.prototype.createPlaceholder = function (e, t) {
                  this.$search.attr("placeholder", t.text);
                }),
                (e.prototype.update = function (e, t) {
                  var n = this.$search[0] == document.activeElement;
                  this.$search.attr("placeholder", ""),
                    e.call(this, t),
                    this.resizeSearch(),
                    n && this.$search.trigger("focus");
                }),
                (e.prototype.handleSearch = function () {
                  if ((this.resizeSearch(), !this._keyUpPrevented)) {
                    var e = this.$search.val();
                    this.trigger("query", { term: e });
                  }
                  this._keyUpPrevented = !1;
                }),
                (e.prototype.searchRemoveChoice = function (e, t) {
                  this.trigger("unselect", { data: t }),
                    this.$search.val(t.text),
                    this.handleSearch();
                }),
                (e.prototype.resizeSearch = function () {
                  this.$search.css("width", "25px");
                  var e = "100%";
                  "" === this.$search.attr("placeholder") &&
                    (e = 0.75 * (this.$search.val().length + 1) + "em");
                  this.$search.css("width", e);
                }),
                e
              );
            }
          ),
          e.define("select2/selection/selectionCss", ["../utils"], function (i) {
            function e() {}
            return (
              (e.prototype.render = function (e) {
                var t = e.call(this),
                  n = this.options.get("selectionCssClass") || "";
                return (
                  -1 !== n.indexOf(":all:") &&
                    ((n = n.replace(":all:", "")),
                    i.copyNonInternalCssClasses(t[0], this.$element[0])),
                  t.addClass(n),
                  t
                );
              }),
              e
            );
          }),
          e.define("select2/selection/eventRelay", ["jquery"], function (o) {
            function e() {}
            return (
              (e.prototype.bind = function (e, t, n) {
                var i = this,
                  r = [
                    "open",
                    "opening",
                    "close",
                    "closing",
                    "select",
                    "selecting",
                    "unselect",
                    "unselecting",
                    "clear",
                    "clearing",
                  ],
                  s = [
                    "opening",
                    "closing",
                    "selecting",
                    "unselecting",
                    "clearing",
                  ];
                e.call(this, t, n),
                  t.on("*", function (e, t) {
                    if (-1 !== r.indexOf(e)) {
                      t = t || {};
                      var n = o.Event("select2:" + e, { params: t });
                      i.$element.trigger(n),
                        -1 !== s.indexOf(e) &&
                          (t.prevented = n.isDefaultPrevented());
                    }
                  });
              }),
              e
            );
          }),
          e.define("select2/translation", ["jquery", "require"], function (t, n) {
            function i(e) {
              this.dict = e || {};
            }
            return (
              (i.prototype.all = function () {
                return this.dict;
              }),
              (i.prototype.get = function (e) {
                return this.dict[e];
              }),
              (i.prototype.extend = function (e) {
                this.dict = t.extend({}, e.all(), this.dict);
              }),
              (i._cache = {}),
              (i.loadPath = function (e) {
                if (!(e in i._cache)) {
                  var t = n(e);
                  i._cache[e] = t;
                }
                return new i(i._cache[e]);
              }),
              i
            );
          }),
          e.define("select2/diacritics", [], function () {
            return {
              "Ⓐ": "A",
              Ａ: "A",
              À: "A",
              Á: "A",
              Â: "A",
              Ầ: "A",
              Ấ: "A",
              Ẫ: "A",
              Ẩ: "A",
              Ã: "A",
              Ā: "A",
              Ă: "A",
              Ằ: "A",
              Ắ: "A",
              Ẵ: "A",
              Ẳ: "A",
              Ȧ: "A",
              Ǡ: "A",
              Ä: "A",
              Ǟ: "A",
              Ả: "A",
              Å: "A",
              Ǻ: "A",
              Ǎ: "A",
              Ȁ: "A",
              Ȃ: "A",
              Ạ: "A",
              Ậ: "A",
              Ặ: "A",
              Ḁ: "A",
              Ą: "A",
              Ⱥ: "A",
              Ɐ: "A",
              Ꜳ: "AA",
              Æ: "AE",
              Ǽ: "AE",
              Ǣ: "AE",
              Ꜵ: "AO",
              Ꜷ: "AU",
              Ꜹ: "AV",
              Ꜻ: "AV",
              Ꜽ: "AY",
              "Ⓑ": "B",
              Ｂ: "B",
              Ḃ: "B",
              Ḅ: "B",
              Ḇ: "B",
              Ƀ: "B",
              Ƃ: "B",
              Ɓ: "B",
              "Ⓒ": "C",
              Ｃ: "C",
              Ć: "C",
              Ĉ: "C",
              Ċ: "C",
              Č: "C",
              Ç: "C",
              Ḉ: "C",
              Ƈ: "C",
              Ȼ: "C",
              Ꜿ: "C",
              "Ⓓ": "D",
              Ｄ: "D",
              Ḋ: "D",
              Ď: "D",
              Ḍ: "D",
              Ḑ: "D",
              Ḓ: "D",
              Ḏ: "D",
              Đ: "D",
              Ƌ: "D",
              Ɗ: "D",
              Ɖ: "D",
              Ꝺ: "D",
              Ǳ: "DZ",
              Ǆ: "DZ",
              ǲ: "Dz",
              ǅ: "Dz",
              "Ⓔ": "E",
              Ｅ: "E",
              È: "E",
              É: "E",
              Ê: "E",
              Ề: "E",
              Ế: "E",
              Ễ: "E",
              Ể: "E",
              Ẽ: "E",
              Ē: "E",
              Ḕ: "E",
              Ḗ: "E",
              Ĕ: "E",
              Ė: "E",
              Ë: "E",
              Ẻ: "E",
              Ě: "E",
              Ȅ: "E",
              Ȇ: "E",
              Ẹ: "E",
              Ệ: "E",
              Ȩ: "E",
              Ḝ: "E",
              Ę: "E",
              Ḙ: "E",
              Ḛ: "E",
              Ɛ: "E",
              Ǝ: "E",
              "Ⓕ": "F",
              Ｆ: "F",
              Ḟ: "F",
              Ƒ: "F",
              Ꝼ: "F",
              "Ⓖ": "G",
              Ｇ: "G",
              Ǵ: "G",
              Ĝ: "G",
              Ḡ: "G",
              Ğ: "G",
              Ġ: "G",
              Ǧ: "G",
              Ģ: "G",
              Ǥ: "G",
              Ɠ: "G",
              Ꞡ: "G",
              Ᵹ: "G",
              Ꝿ: "G",
              "Ⓗ": "H",
              Ｈ: "H",
              Ĥ: "H",
              Ḣ: "H",
              Ḧ: "H",
              Ȟ: "H",
              Ḥ: "H",
              Ḩ: "H",
              Ḫ: "H",
              Ħ: "H",
              Ⱨ: "H",
              Ⱶ: "H",
              Ɥ: "H",
              "Ⓘ": "I",
              Ｉ: "I",
              Ì: "I",
              Í: "I",
              Î: "I",
              Ĩ: "I",
              Ī: "I",
              Ĭ: "I",
              İ: "I",
              Ï: "I",
              Ḯ: "I",
              Ỉ: "I",
              Ǐ: "I",
              Ȉ: "I",
              Ȋ: "I",
              Ị: "I",
              Į: "I",
              Ḭ: "I",
              Ɨ: "I",
              "Ⓙ": "J",
              Ｊ: "J",
              Ĵ: "J",
              Ɉ: "J",
              "Ⓚ": "K",
              Ｋ: "K",
              Ḱ: "K",
              Ǩ: "K",
              Ḳ: "K",
              Ķ: "K",
              Ḵ: "K",
              Ƙ: "K",
              Ⱪ: "K",
              Ꝁ: "K",
              Ꝃ: "K",
              Ꝅ: "K",
              Ꞣ: "K",
              "Ⓛ": "L",
              Ｌ: "L",
              Ŀ: "L",
              Ĺ: "L",
              Ľ: "L",
              Ḷ: "L",
              Ḹ: "L",
              Ļ: "L",
              Ḽ: "L",
              Ḻ: "L",
              Ł: "L",
              Ƚ: "L",
              Ɫ: "L",
              Ⱡ: "L",
              Ꝉ: "L",
              Ꝇ: "L",
              Ꞁ: "L",
              Ǉ: "LJ",
              ǈ: "Lj",
              "Ⓜ": "M",
              Ｍ: "M",
              Ḿ: "M",
              Ṁ: "M",
              Ṃ: "M",
              Ɱ: "M",
              Ɯ: "M",
              "Ⓝ": "N",
              Ｎ: "N",
              Ǹ: "N",
              Ń: "N",
              Ñ: "N",
              Ṅ: "N",
              Ň: "N",
              Ṇ: "N",
              Ņ: "N",
              Ṋ: "N",
              Ṉ: "N",
              Ƞ: "N",
              Ɲ: "N",
              Ꞑ: "N",
              Ꞥ: "N",
              Ǌ: "NJ",
              ǋ: "Nj",
              "Ⓞ": "O",
              Ｏ: "O",
              Ò: "O",
              Ó: "O",
              Ô: "O",
              Ồ: "O",
              Ố: "O",
              Ỗ: "O",
              Ổ: "O",
              Õ: "O",
              Ṍ: "O",
              Ȭ: "O",
              Ṏ: "O",
              Ō: "O",
              Ṑ: "O",
              Ṓ: "O",
              Ŏ: "O",
              Ȯ: "O",
              Ȱ: "O",
              Ö: "O",
              Ȫ: "O",
              Ỏ: "O",
              Ő: "O",
              Ǒ: "O",
              Ȍ: "O",
              Ȏ: "O",
              Ơ: "O",
              Ờ: "O",
              Ớ: "O",
              Ỡ: "O",
              Ở: "O",
              Ợ: "O",
              Ọ: "O",
              Ộ: "O",
              Ǫ: "O",
              Ǭ: "O",
              Ø: "O",
              Ǿ: "O",
              Ɔ: "O",
              Ɵ: "O",
              Ꝋ: "O",
              Ꝍ: "O",
              Œ: "OE",
              Ƣ: "OI",
              Ꝏ: "OO",
              Ȣ: "OU",
              "Ⓟ": "P",
              Ｐ: "P",
              Ṕ: "P",
              Ṗ: "P",
              Ƥ: "P",
              Ᵽ: "P",
              Ꝑ: "P",
              Ꝓ: "P",
              Ꝕ: "P",
              "Ⓠ": "Q",
              Ｑ: "Q",
              Ꝗ: "Q",
              Ꝙ: "Q",
              Ɋ: "Q",
              "Ⓡ": "R",
              Ｒ: "R",
              Ŕ: "R",
              Ṙ: "R",
              Ř: "R",
              Ȑ: "R",
              Ȓ: "R",
              Ṛ: "R",
              Ṝ: "R",
              Ŗ: "R",
              Ṟ: "R",
              Ɍ: "R",
              Ɽ: "R",
              Ꝛ: "R",
              Ꞧ: "R",
              Ꞃ: "R",
              "Ⓢ": "S",
              Ｓ: "S",
              ẞ: "S",
              Ś: "S",
              Ṥ: "S",
              Ŝ: "S",
              Ṡ: "S",
              Š: "S",
              Ṧ: "S",
              Ṣ: "S",
              Ṩ: "S",
              Ș: "S",
              Ş: "S",
              Ȿ: "S",
              Ꞩ: "S",
              Ꞅ: "S",
              "Ⓣ": "T",
              Ｔ: "T",
              Ṫ: "T",
              Ť: "T",
              Ṭ: "T",
              Ț: "T",
              Ţ: "T",
              Ṱ: "T",
              Ṯ: "T",
              Ŧ: "T",
              Ƭ: "T",
              Ʈ: "T",
              Ⱦ: "T",
              Ꞇ: "T",
              Ꜩ: "TZ",
              "Ⓤ": "U",
              Ｕ: "U",
              Ù: "U",
              Ú: "U",
              Û: "U",
              Ũ: "U",
              Ṹ: "U",
              Ū: "U",
              Ṻ: "U",
              Ŭ: "U",
              Ü: "U",
              Ǜ: "U",
              Ǘ: "U",
              Ǖ: "U",
              Ǚ: "U",
              Ủ: "U",
              Ů: "U",
              Ű: "U",
              Ǔ: "U",
              Ȕ: "U",
              Ȗ: "U",
              Ư: "U",
              Ừ: "U",
              Ứ: "U",
              Ữ: "U",
              Ử: "U",
              Ự: "U",
              Ụ: "U",
              Ṳ: "U",
              Ų: "U",
              Ṷ: "U",
              Ṵ: "U",
              Ʉ: "U",
              "Ⓥ": "V",
              Ｖ: "V",
              Ṽ: "V",
              Ṿ: "V",
              Ʋ: "V",
              Ꝟ: "V",
              Ʌ: "V",
              Ꝡ: "VY",
              "Ⓦ": "W",
              Ｗ: "W",
              Ẁ: "W",
              Ẃ: "W",
              Ŵ: "W",
              Ẇ: "W",
              Ẅ: "W",
              Ẉ: "W",
              Ⱳ: "W",
              "Ⓧ": "X",
              Ｘ: "X",
              Ẋ: "X",
              Ẍ: "X",
              "Ⓨ": "Y",
              Ｙ: "Y",
              Ỳ: "Y",
              Ý: "Y",
              Ŷ: "Y",
              Ỹ: "Y",
              Ȳ: "Y",
              Ẏ: "Y",
              Ÿ: "Y",
              Ỷ: "Y",
              Ỵ: "Y",
              Ƴ: "Y",
              Ɏ: "Y",
              Ỿ: "Y",
              "Ⓩ": "Z",
              Ｚ: "Z",
              Ź: "Z",
              Ẑ: "Z",
              Ż: "Z",
              Ž: "Z",
              Ẓ: "Z",
              Ẕ: "Z",
              Ƶ: "Z",
              Ȥ: "Z",
              Ɀ: "Z",
              Ⱬ: "Z",
              Ꝣ: "Z",
              "ⓐ": "a",
              ａ: "a",
              ẚ: "a",
              à: "a",
              á: "a",
              â: "a",
              ầ: "a",
              ấ: "a",
              ẫ: "a",
              ẩ: "a",
              ã: "a",
              ā: "a",
              ă: "a",
              ằ: "a",
              ắ: "a",
              ẵ: "a",
              ẳ: "a",
              ȧ: "a",
              ǡ: "a",
              ä: "a",
              ǟ: "a",
              ả: "a",
              å: "a",
              ǻ: "a",
              ǎ: "a",
              ȁ: "a",
              ȃ: "a",
              ạ: "a",
              ậ: "a",
              ặ: "a",
              ḁ: "a",
              ą: "a",
              ⱥ: "a",
              ɐ: "a",
              ꜳ: "aa",
              æ: "ae",
              ǽ: "ae",
              ǣ: "ae",
              ꜵ: "ao",
              ꜷ: "au",
              ꜹ: "av",
              ꜻ: "av",
              ꜽ: "ay",
              "ⓑ": "b",
              ｂ: "b",
              ḃ: "b",
              ḅ: "b",
              ḇ: "b",
              ƀ: "b",
              ƃ: "b",
              ɓ: "b",
              "ⓒ": "c",
              ｃ: "c",
              ć: "c",
              ĉ: "c",
              ċ: "c",
              č: "c",
              ç: "c",
              ḉ: "c",
              ƈ: "c",
              ȼ: "c",
              ꜿ: "c",
              ↄ: "c",
              "ⓓ": "d",
              ｄ: "d",
              ḋ: "d",
              ď: "d",
              ḍ: "d",
              ḑ: "d",
              ḓ: "d",
              ḏ: "d",
              đ: "d",
              ƌ: "d",
              ɖ: "d",
              ɗ: "d",
              ꝺ: "d",
              ǳ: "dz",
              ǆ: "dz",
              "ⓔ": "e",
              ｅ: "e",
              è: "e",
              é: "e",
              ê: "e",
              ề: "e",
              ế: "e",
              ễ: "e",
              ể: "e",
              ẽ: "e",
              ē: "e",
              ḕ: "e",
              ḗ: "e",
              ĕ: "e",
              ė: "e",
              ë: "e",
              ẻ: "e",
              ě: "e",
              ȅ: "e",
              ȇ: "e",
              ẹ: "e",
              ệ: "e",
              ȩ: "e",
              ḝ: "e",
              ę: "e",
              ḙ: "e",
              ḛ: "e",
              ɇ: "e",
              ɛ: "e",
              ǝ: "e",
              "ⓕ": "f",
              ｆ: "f",
              ḟ: "f",
              ƒ: "f",
              ꝼ: "f",
              "ⓖ": "g",
              ｇ: "g",
              ǵ: "g",
              ĝ: "g",
              ḡ: "g",
              ğ: "g",
              ġ: "g",
              ǧ: "g",
              ģ: "g",
              ǥ: "g",
              ɠ: "g",
              ꞡ: "g",
              ᵹ: "g",
              ꝿ: "g",
              "ⓗ": "h",
              ｈ: "h",
              ĥ: "h",
              ḣ: "h",
              ḧ: "h",
              ȟ: "h",
              ḥ: "h",
              ḩ: "h",
              ḫ: "h",
              ẖ: "h",
              ħ: "h",
              ⱨ: "h",
              ⱶ: "h",
              ɥ: "h",
              ƕ: "hv",
              "ⓘ": "i",
              ｉ: "i",
              ì: "i",
              í: "i",
              î: "i",
              ĩ: "i",
              ī: "i",
              ĭ: "i",
              ï: "i",
              ḯ: "i",
              ỉ: "i",
              ǐ: "i",
              ȉ: "i",
              ȋ: "i",
              ị: "i",
              į: "i",
              ḭ: "i",
              ɨ: "i",
              ı: "i",
              "ⓙ": "j",
              ｊ: "j",
              ĵ: "j",
              ǰ: "j",
              ɉ: "j",
              "ⓚ": "k",
              ｋ: "k",
              ḱ: "k",
              ǩ: "k",
              ḳ: "k",
              ķ: "k",
              ḵ: "k",
              ƙ: "k",
              ⱪ: "k",
              ꝁ: "k",
              ꝃ: "k",
              ꝅ: "k",
              ꞣ: "k",
              "ⓛ": "l",
              ｌ: "l",
              ŀ: "l",
              ĺ: "l",
              ľ: "l",
              ḷ: "l",
              ḹ: "l",
              ļ: "l",
              ḽ: "l",
              ḻ: "l",
              ſ: "l",
              ł: "l",
              ƚ: "l",
              ɫ: "l",
              ⱡ: "l",
              ꝉ: "l",
              ꞁ: "l",
              ꝇ: "l",
              ǉ: "lj",
              "ⓜ": "m",
              ｍ: "m",
              ḿ: "m",
              ṁ: "m",
              ṃ: "m",
              ɱ: "m",
              ɯ: "m",
              "ⓝ": "n",
              ｎ: "n",
              ǹ: "n",
              ń: "n",
              ñ: "n",
              ṅ: "n",
              ň: "n",
              ṇ: "n",
              ņ: "n",
              ṋ: "n",
              ṉ: "n",
              ƞ: "n",
              ɲ: "n",
              ŉ: "n",
              ꞑ: "n",
              ꞥ: "n",
              ǌ: "nj",
              "ⓞ": "o",
              ｏ: "o",
              ò: "o",
              ó: "o",
              ô: "o",
              ồ: "o",
              ố: "o",
              ỗ: "o",
              ổ: "o",
              õ: "o",
              ṍ: "o",
              ȭ: "o",
              ṏ: "o",
              ō: "o",
              ṑ: "o",
              ṓ: "o",
              ŏ: "o",
              ȯ: "o",
              ȱ: "o",
              ö: "o",
              ȫ: "o",
              ỏ: "o",
              ő: "o",
              ǒ: "o",
              ȍ: "o",
              ȏ: "o",
              ơ: "o",
              ờ: "o",
              ớ: "o",
              ỡ: "o",
              ở: "o",
              ợ: "o",
              ọ: "o",
              ộ: "o",
              ǫ: "o",
              ǭ: "o",
              ø: "o",
              ǿ: "o",
              ɔ: "o",
              ꝋ: "o",
              ꝍ: "o",
              ɵ: "o",
              œ: "oe",
              ƣ: "oi",
              ȣ: "ou",
              ꝏ: "oo",
              "ⓟ": "p",
              ｐ: "p",
              ṕ: "p",
              ṗ: "p",
              ƥ: "p",
              ᵽ: "p",
              ꝑ: "p",
              ꝓ: "p",
              ꝕ: "p",
              "ⓠ": "q",
              ｑ: "q",
              ɋ: "q",
              ꝗ: "q",
              ꝙ: "q",
              "ⓡ": "r",
              ｒ: "r",
              ŕ: "r",
              ṙ: "r",
              ř: "r",
              ȑ: "r",
              ȓ: "r",
              ṛ: "r",
              ṝ: "r",
              ŗ: "r",
              ṟ: "r",
              ɍ: "r",
              ɽ: "r",
              ꝛ: "r",
              ꞧ: "r",
              ꞃ: "r",
              "ⓢ": "s",
              ｓ: "s",
              ß: "s",
              ś: "s",
              ṥ: "s",
              ŝ: "s",
              ṡ: "s",
              š: "s",
              ṧ: "s",
              ṣ: "s",
              ṩ: "s",
              ș: "s",
              ş: "s",
              ȿ: "s",
              ꞩ: "s",
              ꞅ: "s",
              ẛ: "s",
              "ⓣ": "t",
              ｔ: "t",
              ṫ: "t",
              ẗ: "t",
              ť: "t",
              ṭ: "t",
              ț: "t",
              ţ: "t",
              ṱ: "t",
              ṯ: "t",
              ŧ: "t",
              ƭ: "t",
              ʈ: "t",
              ⱦ: "t",
              ꞇ: "t",
              ꜩ: "tz",
              "ⓤ": "u",
              ｕ: "u",
              ù: "u",
              ú: "u",
              û: "u",
              ũ: "u",
              ṹ: "u",
              ū: "u",
              ṻ: "u",
              ŭ: "u",
              ü: "u",
              ǜ: "u",
              ǘ: "u",
              ǖ: "u",
              ǚ: "u",
              ủ: "u",
              ů: "u",
              ű: "u",
              ǔ: "u",
              ȕ: "u",
              ȗ: "u",
              ư: "u",
              ừ: "u",
              ứ: "u",
              ữ: "u",
              ử: "u",
              ự: "u",
              ụ: "u",
              ṳ: "u",
              ų: "u",
              ṷ: "u",
              ṵ: "u",
              ʉ: "u",
              "ⓥ": "v",
              ｖ: "v",
              ṽ: "v",
              ṿ: "v",
              ʋ: "v",
              ꝟ: "v",
              ʌ: "v",
              ꝡ: "vy",
              "ⓦ": "w",
              ｗ: "w",
              ẁ: "w",
              ẃ: "w",
              ŵ: "w",
              ẇ: "w",
              ẅ: "w",
              ẘ: "w",
              ẉ: "w",
              ⱳ: "w",
              "ⓧ": "x",
              ｘ: "x",
              ẋ: "x",
              ẍ: "x",
              "ⓨ": "y",
              ｙ: "y",
              ỳ: "y",
              ý: "y",
              ŷ: "y",
              ỹ: "y",
              ȳ: "y",
              ẏ: "y",
              ÿ: "y",
              ỷ: "y",
              ẙ: "y",
              ỵ: "y",
              ƴ: "y",
              ɏ: "y",
              ỿ: "y",
              "ⓩ": "z",
              ｚ: "z",
              ź: "z",
              ẑ: "z",
              ż: "z",
              ž: "z",
              ẓ: "z",
              ẕ: "z",
              ƶ: "z",
              ȥ: "z",
              ɀ: "z",
              ⱬ: "z",
              ꝣ: "z",
              Ά: "Α",
              Έ: "Ε",
              Ή: "Η",
              Ί: "Ι",
              Ϊ: "Ι",
              Ό: "Ο",
              Ύ: "Υ",
              Ϋ: "Υ",
              Ώ: "Ω",
              ά: "α",
              έ: "ε",
              ή: "η",
              ί: "ι",
              ϊ: "ι",
              ΐ: "ι",
              ό: "ο",
              ύ: "υ",
              ϋ: "υ",
              ΰ: "υ",
              ώ: "ω",
              ς: "σ",
              "’": "'",
            };
          }),
          e.define("select2/data/base", ["../utils"], function (i) {
            function n(e, t) {
              n.__super__.constructor.call(this);
            }
            return (
              i.Extend(n, i.Observable),
              (n.prototype.current = function (e) {
                throw new Error(
                  "The `current` method must be defined in child classes."
                );
              }),
              (n.prototype.query = function (e, t) {
                throw new Error(
                  "The `query` method must be defined in child classes."
                );
              }),
              (n.prototype.bind = function (e, t) {}),
              (n.prototype.destroy = function () {}),
              (n.prototype.generateResultId = function (e, t) {
                var n = e.id + "-result-";
                return (
                  (n += i.generateChars(4)),
                  null != t.id
                    ? (n += "-" + t.id.toString())
                    : (n += "-" + i.generateChars(4)),
                  n
                );
              }),
              n
            );
          }),
          e.define(
            "select2/data/select",
            ["./base", "../utils", "jquery"],
            function (e, l, c) {
              function n(e, t) {
                (this.$element = e),
                  (this.options = t),
                  n.__super__.constructor.call(this);
              }
              return (
                l.Extend(n, e),
                (n.prototype.current = function (e) {
                  var t = this;
                  e(
                    Array.prototype.map.call(
                      this.$element[0].querySelectorAll(":checked"),
                      function (e) {
                        return t.item(c(e));
                      }
                    )
                  );
                }),
                (n.prototype.select = function (r) {
                  var s = this;
                  if (
                    ((r.selected = !0),
                    null != r.element &&
                      "option" === r.element.tagName.toLowerCase())
                  )
                    return (
                      (r.element.selected = !0),
                      void this.$element.trigger("input").trigger("change")
                    );
                  if (this.$element.prop("multiple"))
                    this.current(function (e) {
                      var t = [];
                      (r = [r]).push.apply(r, e);
                      for (var n = 0; n < r.length; n++) {
                        var i = r[n].id;
                        -1 === t.indexOf(i) && t.push(i);
                      }
                      s.$element.val(t),
                        s.$element.trigger("input").trigger("change");
                    });
                  else {
                    var e = r.id;
                    this.$element.val(e),
                      this.$element.trigger("input").trigger("change");
                  }
                }),
                (n.prototype.unselect = function (r) {
                  var s = this;
                  if (this.$element.prop("multiple")) {
                    if (
                      ((r.selected = !1),
                      null != r.element &&
                        "option" === r.element.tagName.toLowerCase())
                    )
                      return (
                        (r.element.selected = !1),
                        void this.$element.trigger("input").trigger("change")
                      );
                    this.current(function (e) {
                      for (var t = [], n = 0; n < e.length; n++) {
                        var i = e[n].id;
                        i !== r.id && -1 === t.indexOf(i) && t.push(i);
                      }
                      s.$element.val(t),
                        s.$element.trigger("input").trigger("change");
                    });
                  }
                }),
                (n.prototype.bind = function (e, t) {
                  var n = this;
                  (this.container = e).on("select", function (e) {
                    n.select(e.data);
                  }),
                    e.on("unselect", function (e) {
                      n.unselect(e.data);
                    });
                }),
                (n.prototype.destroy = function () {
                  this.$element.find("*").each(function () {
                    l.RemoveData(this);
                  });
                }),
                (n.prototype.query = function (i, e) {
                  var r = [],
                    s = this;
                  this.$element.children().each(function () {
                    if (
                      "option" === this.tagName.toLowerCase() ||
                      "optgroup" === this.tagName.toLowerCase()
                    ) {
                      var e = c(this),
                        t = s.item(e),
                        n = s.matches(i, t);
                      null !== n && r.push(n);
                    }
                  }),
                    e({ results: r });
                }),
                (n.prototype.addOptions = function (e) {
                  this.$element.append(e);
                }),
                (n.prototype.option = function (e) {
                  var t;
                  e.children
                    ? ((t = document.createElement("optgroup")).label = e.text)
                    : void 0 !==
                      (t = document.createElement("option")).textContent
                    ? (t.textContent = e.text)
                    : (t.innerText = e.text),
                    void 0 !== e.id && (t.value = e.id),
                    e.disabled && (t.disabled = !0),
                    e.selected && (t.selected = !0),
                    e.title && (t.title = e.title);
                  var n = this._normalizeItem(e);
                  return (n.element = t), l.StoreData(t, "data", n), c(t);
                }),
                (n.prototype.item = function (e) {
                  var t = {};
                  if (null != (t = l.GetData(e[0], "data"))) return t;
                  var n = e[0];
                  if ("option" === n.tagName.toLowerCase())
                    t = {
                      id: e.val(),
                      text: e.text(),
                      disabled: e.prop("disabled"),
                      selected: e.prop("selected"),
                      title: e.prop("title"),
                    };
                  else if ("optgroup" === n.tagName.toLowerCase()) {
                    t = {
                      text: e.prop("label"),
                      children: [],
                      title: e.prop("title"),
                    };
                    for (
                      var i = e.children("option"), r = [], s = 0;
                      s < i.length;
                      s++
                    ) {
                      var o = c(i[s]),
                        a = this.item(o);
                      r.push(a);
                    }
                    t.children = r;
                  }
                  return (
                    ((t = this._normalizeItem(t)).element = e[0]),
                    l.StoreData(e[0], "data", t),
                    t
                  );
                }),
                (n.prototype._normalizeItem = function (e) {
                  e !== Object(e) && (e = { id: e, text: e });
                  return (
                    null != (e = c.extend({}, { text: "" }, e)).id &&
                      (e.id = e.id.toString()),
                    null != e.text && (e.text = e.text.toString()),
                    null == e._resultId &&
                      e.id &&
                      null != this.container &&
                      (e._resultId = this.generateResultId(this.container, e)),
                    c.extend({}, { selected: !1, disabled: !1 }, e)
                  );
                }),
                (n.prototype.matches = function (e, t) {
                  return this.options.get("matcher")(e, t);
                }),
                n
              );
            }
          ),
          e.define(
            "select2/data/array",
            ["./select", "../utils", "jquery"],
            function (e, t, f) {
              function i(e, t) {
                (this._dataToConvert = t.get("data") || []),
                  i.__super__.constructor.call(this, e, t);
              }
              return (
                t.Extend(i, e),
                (i.prototype.bind = function (e, t) {
                  i.__super__.bind.call(this, e, t),
                    this.addOptions(this.convertToOptions(this._dataToConvert));
                }),
                (i.prototype.select = function (n) {
                  var e = this.$element.find("option").filter(function (e, t) {
                    return t.value == n.id.toString();
                  });
                  0 === e.length && ((e = this.option(n)), this.addOptions(e)),
                    i.__super__.select.call(this, n);
                }),
                (i.prototype.convertToOptions = function (e) {
                  var t = this,
                    n = this.$element.find("option"),
                    i = n
                      .map(function () {
                        return t.item(f(this)).id;
                      })
                      .get(),
                    r = [];
                  function s(e) {
                    return function () {
                      return f(this).val() == e.id;
                    };
                  }
                  for (var o = 0; o < e.length; o++) {
                    var a = this._normalizeItem(e[o]);
                    if (0 <= i.indexOf(a.id)) {
                      var l = n.filter(s(a)),
                        c = this.item(l),
                        u = f.extend(!0, {}, a, c),
                        d = this.option(u);
                      l.replaceWith(d);
                    } else {
                      var p = this.option(a);
                      if (a.children) {
                        var h = this.convertToOptions(a.children);
                        p.append(h);
                      }
                      r.push(p);
                    }
                  }
                  return r;
                }),
                i
              );
            }
          ),
          e.define(
            "select2/data/ajax",
            ["./array", "../utils", "jquery"],
            function (e, t, s) {
              function n(e, t) {
                (this.ajaxOptions = this._applyDefaults(t.get("ajax"))),
                  null != this.ajaxOptions.processResults &&
                    (this.processResults = this.ajaxOptions.processResults),
                  n.__super__.constructor.call(this, e, t);
              }
              return (
                t.Extend(n, e),
                (n.prototype._applyDefaults = function (e) {
                  var t = {
                    data: function (e) {
                      return s.extend({}, e, { q: e.term });
                    },
                    transport: function (e, t, n) {
                      var i = s.ajax(e);
                      return i.then(t), i.fail(n), i;
                    },
                  };
                  return s.extend({}, t, e, !0);
                }),
                (n.prototype.processResults = function (e) {
                  return e;
                }),
                (n.prototype.query = function (n, i) {
                  var r = this;
                  null != this._request &&
                    (s.isFunction(this._request.abort) && this._request.abort(),
                    (this._request = null));
                  var t = s.extend({ type: "GET" }, this.ajaxOptions);
                  function e() {
                    var e = t.transport(
                      t,
                      function (e) {
                        var t = r.processResults(e, n);
                        r.options.get("debug") &&
                          window.console &&
                          console.error &&
                          ((t && t.results && Array.isArray(t.results)) ||
                            console.error(
                              "Select2: The AJAX results did not return an array in the `results` key of the response."
                            )),
                          i(t);
                      },
                      function () {
                        ("status" in e && (0 === e.status || "0" === e.status)) ||
                          r.trigger("results:message", {
                            message: "errorLoading",
                          });
                      }
                    );
                    r._request = e;
                  }
                  "function" == typeof t.url &&
                    (t.url = t.url.call(this.$element, n)),
                    "function" == typeof t.data &&
                      (t.data = t.data.call(this.$element, n)),
                    this.ajaxOptions.delay && null != n.term
                      ? (this._queryTimeout &&
                          window.clearTimeout(this._queryTimeout),
                        (this._queryTimeout = window.setTimeout(
                          e,
                          this.ajaxOptions.delay
                        )))
                      : e();
                }),
                n
              );
            }
          ),
          e.define("select2/data/tags", ["jquery"], function (t) {
            function e(e, t, n) {
              var i = n.get("tags"),
                r = n.get("createTag");
              void 0 !== r && (this.createTag = r);
              var s = n.get("insertTag");
              if (
                (void 0 !== s && (this.insertTag = s),
                e.call(this, t, n),
                Array.isArray(i))
              )
                for (var o = 0; o < i.length; o++) {
                  var a = i[o],
                    l = this._normalizeItem(a),
                    c = this.option(l);
                  this.$element.append(c);
                }
            }
            return (
              (e.prototype.query = function (e, c, u) {
                var d = this;
                this._removeOldTags(),
                  null != c.term && null == c.page
                    ? e.call(this, c, function e(t, n) {
                        for (var i = t.results, r = 0; r < i.length; r++) {
                          var s = i[r],
                            o =
                              null != s.children &&
                              !e({ results: s.children }, !0);
                          if (
                            (s.text || "").toUpperCase() ===
                              (c.term || "").toUpperCase() ||
                            o
                          )
                            return !n && ((t.data = i), void u(t));
                        }
                        if (n) return !0;
                        var a = d.createTag(c);
                        if (null != a) {
                          var l = d.option(a);
                          l.attr("data-select2-tag", !0),
                            d.addOptions([l]),
                            d.insertTag(i, a);
                        }
                        (t.results = i), u(t);
                      })
                    : e.call(this, c, u);
              }),
              (e.prototype.createTag = function (e, t) {
                if (null == t.term) return null;
                var n = t.term.trim();
                return "" === n ? null : { id: n, text: n };
              }),
              (e.prototype.insertTag = function (e, t, n) {
                t.unshift(n);
              }),
              (e.prototype._removeOldTags = function (e) {
                this.$element.find("option[data-select2-tag]").each(function () {
                  this.selected || t(this).remove();
                });
              }),
              e
            );
          }),
          e.define("select2/data/tokenizer", ["jquery"], function (d) {
            function e(e, t, n) {
              var i = n.get("tokenizer");
              void 0 !== i && (this.tokenizer = i), e.call(this, t, n);
            }
            return (
              (e.prototype.bind = function (e, t, n) {
                e.call(this, t, n),
                  (this.$search =
                    t.dropdown.$search ||
                    t.selection.$search ||
                    n.find(".select2-search__field"));
              }),
              (e.prototype.query = function (e, t, n) {
                var i = this;
                t.term = t.term || "";
                var r = this.tokenizer(t, this.options, function (e) {
                  var t = i._normalizeItem(e);
                  if (
                    !i.$element.find("option").filter(function () {
                      return d(this).val() === t.id;
                    }).length
                  ) {
                    var n = i.option(t);
                    n.attr("data-select2-tag", !0),
                      i._removeOldTags(),
                      i.addOptions([n]);
                  }
                  !(function (e) {
                    i.trigger("select", { data: e });
                  })(t);
                });
                r.term !== t.term &&
                  (this.$search.length &&
                    (this.$search.val(r.term), this.$search.trigger("focus")),
                  (t.term = r.term)),
                  e.call(this, t, n);
              }),
              (e.prototype.tokenizer = function (e, t, n, i) {
                for (
                  var r = n.get("tokenSeparators") || [],
                    s = t.term,
                    o = 0,
                    a =
                      this.createTag ||
                      function (e) {
                        return { id: e.term, text: e.term };
                      };
                  o < s.length;
  
                ) {
                  var l = s[o];
                  if (-1 !== r.indexOf(l)) {
                    var c = s.substr(0, o),
                      u = a(d.extend({}, t, { term: c }));
                    null != u
                      ? (i(u), (s = s.substr(o + 1) || ""), (o = 0))
                      : o++;
                  } else o++;
                }
                return { term: s };
              }),
              e
            );
          }),
          e.define("select2/data/minimumInputLength", [], function () {
            function e(e, t, n) {
              (this.minimumInputLength = n.get("minimumInputLength")),
                e.call(this, t, n);
            }
            return (
              (e.prototype.query = function (e, t, n) {
                (t.term = t.term || ""),
                  t.term.length < this.minimumInputLength
                    ? this.trigger("results:message", {
                        message: "inputTooShort",
                        args: {
                          minimum: this.minimumInputLength,
                          input: t.term,
                          params: t,
                        },
                      })
                    : e.call(this, t, n);
              }),
              e
            );
          }),
          e.define("select2/data/maximumInputLength", [], function () {
            function e(e, t, n) {
              (this.maximumInputLength = n.get("maximumInputLength")),
                e.call(this, t, n);
            }
            return (
              (e.prototype.query = function (e, t, n) {
                (t.term = t.term || ""),
                  0 < this.maximumInputLength &&
                  t.term.length > this.maximumInputLength
                    ? this.trigger("results:message", {
                        message: "inputTooLong",
                        args: {
                          maximum: this.maximumInputLength,
                          input: t.term,
                          params: t,
                        },
                      })
                    : e.call(this, t, n);
              }),
              e
            );
          }),
          e.define("select2/data/maximumSelectionLength", [], function () {
            function e(e, t, n) {
              (this.maximumSelectionLength = n.get("maximumSelectionLength")),
                e.call(this, t, n);
            }
            return (
              (e.prototype.bind = function (e, t, n) {
                var i = this;
                e.call(this, t, n),
                  t.on("select", function () {
                    i._checkIfMaximumSelected();
                  });
              }),
              (e.prototype.query = function (e, t, n) {
                var i = this;
                this._checkIfMaximumSelected(function () {
                  e.call(i, t, n);
                });
              }),
              (e.prototype._checkIfMaximumSelected = function (e, n) {
                var i = this;
                this.current(function (e) {
                  var t = null != e ? e.length : 0;
                  0 < i.maximumSelectionLength && t >= i.maximumSelectionLength
                    ? i.trigger("results:message", {
                        message: "maximumSelected",
                        args: { maximum: i.maximumSelectionLength },
                      })
                    : n && n();
                });
              }),
              e
            );
          }),
          e.define("select2/dropdown", ["jquery", "./utils"], function (t, e) {
            function n(e, t) {
              (this.$element = e),
                (this.options = t),
                n.__super__.constructor.call(this);
            }
            return (
              e.Extend(n, e.Observable),
              (n.prototype.render = function () {
                var e = t(
                  '<span class="select2-dropdown"><span class="select2-results"></span></span>'
                );
                return (
                  e.attr("dir", this.options.get("dir")), (this.$dropdown = e)
                );
              }),
              (n.prototype.bind = function () {}),
              (n.prototype.position = function (e, t) {}),
              (n.prototype.destroy = function () {
                this.$dropdown.remove();
              }),
              n
            );
          }),
          e.define("select2/dropdown/search", ["jquery"], function (s) {
            function e() {}
            return (
              (e.prototype.render = function (e) {
                var t = e.call(this),
                  n = s(
                    '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>'
                  );
                return (
                  (this.$searchContainer = n),
                  (this.$search = n.find("input")),
                  this.$search.prop(
                    "autocomplete",
                    this.options.get("autocomplete")
                  ),
                  t.prepend(n),
                  t
                );
              }),
              (e.prototype.bind = function (e, t, n) {
                var i = this,
                  r = t.id + "-results";
                e.call(this, t, n),
                  this.$search.on("keydown", function (e) {
                    i.trigger("keypress", e),
                      (i._keyUpPrevented = e.isDefaultPrevented());
                  }),
                  this.$search.on("input", function (e) {
                    s(this).off("keyup");
                  }),
                  this.$search.on("keyup input", function (e) {
                    i.handleSearch(e);
                  }),
                  t.on("open", function () {
                    i.$search.attr("tabindex", 0),
                      i.$search.attr("aria-controls", r),
                      i.$search.trigger("focus"),
                      window.setTimeout(function () {
                        i.$search.trigger("focus");
                      }, 0);
                  }),
                  t.on("close", function () {
                    i.$search.attr("tabindex", -1),
                      i.$search.removeAttr("aria-controls"),
                      i.$search.removeAttr("aria-activedescendant"),
                      i.$search.val(""),
                      i.$search.trigger("blur");
                  }),
                  t.on("focus", function () {
                    t.isOpen() || i.$search.trigger("focus");
                  }),
                  t.on("results:all", function (e) {
                    (null != e.query.term && "" !== e.query.term) ||
                      (i.showSearch(e)
                        ? i.$searchContainer[0].classList.remove(
                            "select2-search--hide"
                          )
                        : i.$searchContainer[0].classList.add(
                            "select2-search--hide"
                          ));
                  }),
                  t.on("results:focus", function (e) {
                    e.data._resultId
                      ? i.$search.attr("aria-activedescendant", e.data._resultId)
                      : i.$search.removeAttr("aria-activedescendant");
                  });
              }),
              (e.prototype.handleSearch = function (e) {
                if (!this._keyUpPrevented) {
                  var t = this.$search.val();
                  this.trigger("query", { term: t });
                }
                this._keyUpPrevented = !1;
              }),
              (e.prototype.showSearch = function (e, t) {
                return !0;
              }),
              e
            );
          }),
          e.define("select2/dropdown/hidePlaceholder", [], function () {
            function e(e, t, n, i) {
              (this.placeholder = this.normalizePlaceholder(
                n.get("placeholder")
              )),
                e.call(this, t, n, i);
            }
            return (
              (e.prototype.append = function (e, t) {
                (t.results = this.removePlaceholder(t.results)), e.call(this, t);
              }),
              (e.prototype.normalizePlaceholder = function (e, t) {
                return "string" == typeof t && (t = { id: "", text: t }), t;
              }),
              (e.prototype.removePlaceholder = function (e, t) {
                for (var n = t.slice(0), i = t.length - 1; 0 <= i; i--) {
                  var r = t[i];
                  this.placeholder.id === r.id && n.splice(i, 1);
                }
                return n;
              }),
              e
            );
          }),
          e.define("select2/dropdown/infiniteScroll", ["jquery"], function (n) {
            function e(e, t, n, i) {
              (this.lastParams = {}),
                e.call(this, t, n, i),
                (this.$loadingMore = this.createLoadingMore()),
                (this.loading = !1);
            }
            return (
              (e.prototype.append = function (e, t) {
                this.$loadingMore.remove(),
                  (this.loading = !1),
                  e.call(this, t),
                  this.showLoadingMore(t) &&
                    (this.$results.append(this.$loadingMore),
                    this.loadMoreIfNeeded());
              }),
              (e.prototype.bind = function (e, t, n) {
                var i = this;
                e.call(this, t, n),
                  t.on("query", function (e) {
                    (i.lastParams = e), (i.loading = !0);
                  }),
                  t.on("query:append", function (e) {
                    (i.lastParams = e), (i.loading = !0);
                  }),
                  this.$results.on("scroll", this.loadMoreIfNeeded.bind(this));
              }),
              (e.prototype.loadMoreIfNeeded = function () {
                var e = n.contains(
                  document.documentElement,
                  this.$loadingMore[0]
                );
                if (!this.loading && e) {
                  var t =
                    this.$results.offset().top + this.$results.outerHeight(!1);
                  this.$loadingMore.offset().top +
                    this.$loadingMore.outerHeight(!1) <=
                    t + 50 && this.loadMore();
                }
              }),
              (e.prototype.loadMore = function () {
                this.loading = !0;
                var e = n.extend({}, { page: 1 }, this.lastParams);
                e.page++, this.trigger("query:append", e);
              }),
              (e.prototype.showLoadingMore = function (e, t) {
                return t.pagination && t.pagination.more;
              }),
              (e.prototype.createLoadingMore = function () {
                var e = n(
                    '<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'
                  ),
                  t = this.options.get("translations").get("loadingMore");
                return e.html(t(this.lastParams)), e;
              }),
              e
            );
          }),
          e.define(
            "select2/dropdown/attachBody",
            ["jquery", "../utils"],
            function (f, a) {
              function e(e, t, n) {
                (this.$dropdownParent = f(
                  n.get("dropdownParent") || document.body
                )),
                  e.call(this, t, n);
              }
              return (
                (e.prototype.bind = function (e, t, n) {
                  var i = this;
                  e.call(this, t, n),
                    t.on("open", function () {
                      i._showDropdown(),
                        i._attachPositioningHandler(t),
                        i._bindContainerResultHandlers(t);
                    }),
                    t.on("close", function () {
                      i._hideDropdown(), i._detachPositioningHandler(t);
                    }),
                    this.$dropdownContainer.on("mousedown", function (e) {
                      e.stopPropagation();
                    });
                }),
                (e.prototype.destroy = function (e) {
                  e.call(this), this.$dropdownContainer.remove();
                }),
                (e.prototype.position = function (e, t, n) {
                  t.attr("class", n.attr("class")),
                    t[0].classList.remove("select2"),
                    t[0].classList.add("select2-container--open"),
                    t.css({ position: "absolute", top: -999999 }),
                    (this.$container = n);
                }),
                (e.prototype.render = function (e) {
                  var t = f("<span></span>"),
                    n = e.call(this);
                  return t.append(n), (this.$dropdownContainer = t);
                }),
                (e.prototype._hideDropdown = function (e) {
                  this.$dropdownContainer.detach();
                }),
                (e.prototype._bindContainerResultHandlers = function (e, t) {
                  if (!this._containerResultsHandlersBound) {
                    var n = this;
                    t.on("results:all", function () {
                      n._positionDropdown(), n._resizeDropdown();
                    }),
                      t.on("results:append", function () {
                        n._positionDropdown(), n._resizeDropdown();
                      }),
                      t.on("results:message", function () {
                        n._positionDropdown(), n._resizeDropdown();
                      }),
                      t.on("select", function () {
                        n._positionDropdown(), n._resizeDropdown();
                      }),
                      t.on("unselect", function () {
                        n._positionDropdown(), n._resizeDropdown();
                      }),
                      (this._containerResultsHandlersBound = !0);
                  }
                }),
                (e.prototype._attachPositioningHandler = function (e, t) {
                  var n = this,
                    i = "scroll.select2." + t.id,
                    r = "resize.select2." + t.id,
                    s = "orientationchange.select2." + t.id,
                    o = this.$container.parents().filter(a.hasScroll);
                  o.each(function () {
                    a.StoreData(this, "select2-scroll-position", {
                      x: f(this).scrollLeft(),
                      y: f(this).scrollTop(),
                    });
                  }),
                    o.on(i, function (e) {
                      var t = a.GetData(this, "select2-scroll-position");
                      f(this).scrollTop(t.y);
                    }),
                    f(window).on(i + " " + r + " " + s, function (e) {
                      n._positionDropdown(), n._resizeDropdown();
                    });
                }),
                (e.prototype._detachPositioningHandler = function (e, t) {
                  var n = "scroll.select2." + t.id,
                    i = "resize.select2." + t.id,
                    r = "orientationchange.select2." + t.id;
                  this.$container.parents().filter(a.hasScroll).off(n),
                    f(window).off(n + " " + i + " " + r);
                }),
                (e.prototype._positionDropdown = function () {
                  var e = f(window),
                    t = this.$dropdown[0].classList.contains(
                      "select2-dropdown--above"
                    ),
                    n = this.$dropdown[0].classList.contains(
                      "select2-dropdown--below"
                    ),
                    i = null,
                    r = this.$container.offset();
                  r.bottom = r.top + this.$container.outerHeight(!1);
                  var s = { height: this.$container.outerHeight(!1) };
                  (s.top = r.top), (s.bottom = r.top + s.height);
                  var o = this.$dropdown.outerHeight(!1),
                    a = e.scrollTop(),
                    l = e.scrollTop() + e.height(),
                    c = a < r.top - o,
                    u = l > r.bottom + o,
                    d = { left: r.left, top: s.bottom },
                    p = this.$dropdownParent;
                  "static" === p.css("position") && (p = p.offsetParent());
                  var h = { top: 0, left: 0 };
                  (f.contains(document.body, p[0]) || p[0].isConnected) &&
                    (h = p.offset()),
                    (d.top -= h.top),
                    (d.left -= h.left),
                    t || n || (i = "below"),
                    u || !c || t ? !c && u && t && (i = "below") : (i = "above"),
                    ("above" == i || (t && "below" !== i)) &&
                      (d.top = s.top - h.top - o),
                    null != i &&
                      (this.$dropdown[0].classList.remove(
                        "select2-dropdown--below"
                      ),
                      this.$dropdown[0].classList.remove(
                        "select2-dropdown--above"
                      ),
                      this.$dropdown[0].classList.add("select2-dropdown--" + i),
                      this.$container[0].classList.remove(
                        "select2-container--below"
                      ),
                      this.$container[0].classList.remove(
                        "select2-container--above"
                      ),
                      this.$container[0].classList.add(
                        "select2-container--" + i
                      )),
                    this.$dropdownContainer.css(d);
                }),
                (e.prototype._resizeDropdown = function () {
                  var e = { width: this.$container.outerWidth(!1) + "px" };
                  this.options.get("dropdownAutoWidth") &&
                    ((e.minWidth = e.width),
                    (e.position = "relative"),
                    (e.width = "auto")),
                    this.$dropdown.css(e);
                }),
                (e.prototype._showDropdown = function (e) {
                  this.$dropdownContainer.appendTo(this.$dropdownParent),
                    this._positionDropdown(),
                    this._resizeDropdown();
                }),
                e
              );
            }
          ),
          e.define("select2/dropdown/minimumResultsForSearch", [], function () {
            function e(e, t, n, i) {
              (this.minimumResultsForSearch = n.get("minimumResultsForSearch")),
                this.minimumResultsForSearch < 0 &&
                  (this.minimumResultsForSearch = 1 / 0),
                e.call(this, t, n, i);
            }
            return (
              (e.prototype.showSearch = function (e, t) {
                return (
                  !(
                    (function e(t) {
                      for (var n = 0, i = 0; i < t.length; i++) {
                        var r = t[i];
                        r.children ? (n += e(r.children)) : n++;
                      }
                      return n;
                    })(t.data.results) < this.minimumResultsForSearch
                  ) && e.call(this, t)
                );
              }),
              e
            );
          }),
          e.define("select2/dropdown/selectOnClose", ["../utils"], function (s) {
            function e() {}
            return (
              (e.prototype.bind = function (e, t, n) {
                var i = this;
                e.call(this, t, n),
                  t.on("close", function (e) {
                    i._handleSelectOnClose(e);
                  });
              }),
              (e.prototype._handleSelectOnClose = function (e, t) {
                if (t && null != t.originalSelect2Event) {
                  var n = t.originalSelect2Event;
                  if ("select" === n._type || "unselect" === n._type) return;
                }
                var i = this.getHighlightedResults();
                if (!(i.length < 1)) {
                  var r = s.GetData(i[0], "data");
                  (null != r.element && r.element.selected) ||
                    (null == r.element && r.selected) ||
                    this.trigger("select", { data: r });
                }
              }),
              e
            );
          }),
          e.define("select2/dropdown/closeOnSelect", [], function () {
            function e() {}
            return (
              (e.prototype.bind = function (e, t, n) {
                var i = this;
                e.call(this, t, n),
                  t.on("select", function (e) {
                    i._selectTriggered(e);
                  }),
                  t.on("unselect", function (e) {
                    i._selectTriggered(e);
                  });
              }),
              (e.prototype._selectTriggered = function (e, t) {
                var n = t.originalEvent;
                (n && (n.ctrlKey || n.metaKey)) ||
                  this.trigger("close", {
                    originalEvent: n,
                    originalSelect2Event: t,
                  });
              }),
              e
            );
          }),
          e.define("select2/dropdown/dropdownCss", ["../utils"], function (i) {
            function e() {}
            return (
              (e.prototype.render = function (e) {
                var t = e.call(this),
                  n = this.options.get("dropdownCssClass") || "";
                return (
                  -1 !== n.indexOf(":all:") &&
                    ((n = n.replace(":all:", "")),
                    i.copyNonInternalCssClasses(t[0], this.$element[0])),
                  t.addClass(n),
                  t
                );
              }),
              e
            );
          }),
          e.define("select2/i18n/en", [], function () {
            return {
              errorLoading: function () {
                return "The results could not be loaded.";
              },
              inputTooLong: function (e) {
                var t = e.input.length - e.maximum,
                  n = "Please delete " + t + " character";
                return 1 != t && (n += "s"), n;
              },
              inputTooShort: function (e) {
                return (
                  "Please enter " +
                  (e.minimum - e.input.length) +
                  " or more characters"
                );
              },
              loadingMore: function () {
                return "Loading more results…";
              },
              maximumSelected: function (e) {
                var t = "You can only select " + e.maximum + " item";
                return 1 != e.maximum && (t += "s"), t;
              },
              noResults: function () {
                return "No results found";
              },
              searching: function () {
                return "Searching…";
              },
              removeAllItems: function () {
                return "Remove all items";
              },
              removeItem: function () {
                return "Remove item";
              },
            };
          }),
          e.define(
            "select2/defaults",
            [
              "jquery",
              "./results",
              "./selection/single",
              "./selection/multiple",
              "./selection/placeholder",
              "./selection/allowClear",
              "./selection/search",
              "./selection/selectionCss",
              "./selection/eventRelay",
              "./utils",
              "./translation",
              "./diacritics",
              "./data/select",
              "./data/array",
              "./data/ajax",
              "./data/tags",
              "./data/tokenizer",
              "./data/minimumInputLength",
              "./data/maximumInputLength",
              "./data/maximumSelectionLength",
              "./dropdown",
              "./dropdown/search",
              "./dropdown/hidePlaceholder",
              "./dropdown/infiniteScroll",
              "./dropdown/attachBody",
              "./dropdown/minimumResultsForSearch",
              "./dropdown/selectOnClose",
              "./dropdown/closeOnSelect",
              "./dropdown/dropdownCss",
              "./i18n/en",
            ],
            function (
              l,
              s,
              o,
              a,
              c,
              u,
              d,
              p,
              h,
              f,
              g,
              t,
              m,
              v,
              y,
              _,
              b,
              $,
              w,
              x,
              A,
              D,
              S,
              E,
              O,
              C,
              L,
              T,
              q,
              e
            ) {
              function n() {
                this.reset();
              }
              return (
                (n.prototype.apply = function (e) {
                  if (
                    (null ==
                      (e = l.extend(!0, {}, this.defaults, e)).dataAdapter &&
                      (null != e.ajax
                        ? (e.dataAdapter = y)
                        : null != e.data
                        ? (e.dataAdapter = v)
                        : (e.dataAdapter = m),
                      0 < e.minimumInputLength &&
                        (e.dataAdapter = f.Decorate(e.dataAdapter, $)),
                      0 < e.maximumInputLength &&
                        (e.dataAdapter = f.Decorate(e.dataAdapter, w)),
                      0 < e.maximumSelectionLength &&
                        (e.dataAdapter = f.Decorate(e.dataAdapter, x)),
                      e.tags && (e.dataAdapter = f.Decorate(e.dataAdapter, _)),
                      (null == e.tokenSeparators && null == e.tokenizer) ||
                        (e.dataAdapter = f.Decorate(e.dataAdapter, b))),
                    null == e.resultsAdapter &&
                      ((e.resultsAdapter = s),
                      null != e.ajax &&
                        (e.resultsAdapter = f.Decorate(e.resultsAdapter, E)),
                      null != e.placeholder &&
                        (e.resultsAdapter = f.Decorate(e.resultsAdapter, S)),
                      e.selectOnClose &&
                        (e.resultsAdapter = f.Decorate(e.resultsAdapter, L))),
                    null == e.dropdownAdapter)
                  ) {
                    if (e.multiple) e.dropdownAdapter = A;
                    else {
                      var t = f.Decorate(A, D);
                      e.dropdownAdapter = t;
                    }
                    0 !== e.minimumResultsForSearch &&
                      (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, C)),
                      e.closeOnSelect &&
                        (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, T)),
                      null != e.dropdownCssClass &&
                        (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, q)),
                      (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, O));
                  }
                  null == e.selectionAdapter &&
                    (e.multiple
                      ? (e.selectionAdapter = a)
                      : (e.selectionAdapter = o),
                    null != e.placeholder &&
                      (e.selectionAdapter = f.Decorate(e.selectionAdapter, c)),
                    e.allowClear &&
                      (e.selectionAdapter = f.Decorate(e.selectionAdapter, u)),
                    e.multiple &&
                      (e.selectionAdapter = f.Decorate(e.selectionAdapter, d)),
                    null != e.selectionCssClass &&
                      (e.selectionAdapter = f.Decorate(e.selectionAdapter, p)),
                    (e.selectionAdapter = f.Decorate(e.selectionAdapter, h))),
                    (e.language = this._resolveLanguage(e.language)),
                    e.language.push("en");
                  for (var n = [], i = 0; i < e.language.length; i++) {
                    var r = e.language[i];
                    -1 === n.indexOf(r) && n.push(r);
                  }
                  return (
                    (e.language = n),
                    (e.translations = this._processTranslations(
                      e.language,
                      e.debug
                    )),
                    e
                  );
                }),
                (n.prototype.reset = function () {
                  function a(e) {
                    return e.replace(/[^\u0000-\u007E]/g, function (e) {
                      return t[e] || e;
                    });
                  }
                  this.defaults = {
                    amdLanguageBase: "./i18n/",
                    autocomplete: "off",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: f.escapeMarkup,
                    language: {},
                    matcher: function e(t, n) {
                      if (null == t.term || "" === t.term.trim()) return n;
                      if (n.children && 0 < n.children.length) {
                        for (
                          var i = l.extend(!0, {}, n), r = n.children.length - 1;
                          0 <= r;
                          r--
                        )
                          null == e(t, n.children[r]) && i.children.splice(r, 1);
                        return 0 < i.children.length ? i : e(t, i);
                      }
                      var s = a(n.text).toUpperCase(),
                        o = a(t.term).toUpperCase();
                      return -1 < s.indexOf(o) ? n : null;
                    },
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    scrollAfterSelect: !1,
                    sorter: function (e) {
                      return e;
                    },
                    templateResult: function (e) {
                      return e.text;
                    },
                    templateSelection: function (e) {
                      return e.text;
                    },
                    theme: "default",
                    width: "resolve",
                  };
                }),
                (n.prototype.applyFromElement = function (e, t) {
                  var n = e.language,
                    i = this.defaults.language,
                    r = t.prop("lang"),
                    s = t.closest("[lang]").prop("lang"),
                    o = Array.prototype.concat.call(
                      this._resolveLanguage(r),
                      this._resolveLanguage(n),
                      this._resolveLanguage(i),
                      this._resolveLanguage(s)
                    );
                  return (e.language = o), e;
                }),
                (n.prototype._resolveLanguage = function (e) {
                  if (!e) return [];
                  if (l.isEmptyObject(e)) return [];
                  if (l.isPlainObject(e)) return [e];
                  var t;
                  t = Array.isArray(e) ? e : [e];
                  for (var n = [], i = 0; i < t.length; i++)
                    if (
                      (n.push(t[i]),
                      "string" == typeof t[i] && 0 < t[i].indexOf("-"))
                    ) {
                      var r = t[i].split("-")[0];
                      n.push(r);
                    }
                  return n;
                }),
                (n.prototype._processTranslations = function (e, t) {
                  for (var n = new g(), i = 0; i < e.length; i++) {
                    var r = new g(),
                      s = e[i];
                    if ("string" == typeof s)
                      try {
                        r = g.loadPath(s);
                      } catch (e) {
                        try {
                          (s = this.defaults.amdLanguageBase + s),
                            (r = g.loadPath(s));
                        } catch (e) {
                          t &&
                            window.console &&
                            console.warn &&
                            console.warn(
                              'Select2: The language file for "' +
                                s +
                                '" could not be automatically loaded. A fallback will be used instead.'
                            );
                        }
                      }
                    else r = l.isPlainObject(s) ? new g(s) : s;
                    n.extend(r);
                  }
                  return n;
                }),
                (n.prototype.set = function (e, t) {
                  var n = {};
                  n[l.camelCase(e)] = t;
                  var i = f._convertData(n);
                  l.extend(!0, this.defaults, i);
                }),
                new n()
              );
            }
          ),
          e.define(
            "select2/options",
            ["jquery", "./defaults", "./utils"],
            function (d, n, p) {
              function e(e, t) {
                (this.options = e),
                  null != t && this.fromElement(t),
                  null != t &&
                    (this.options = n.applyFromElement(this.options, t)),
                  (this.options = n.apply(this.options));
              }
              return (
                (e.prototype.fromElement = function (e) {
                  var t = ["select2"];
                  null == this.options.multiple &&
                    (this.options.multiple = e.prop("multiple")),
                    null == this.options.disabled &&
                      (this.options.disabled = e.prop("disabled")),
                    null == this.options.autocomplete &&
                      e.prop("autocomplete") &&
                      (this.options.autocomplete = e.prop("autocomplete")),
                    null == this.options.dir &&
                      (e.prop("dir")
                        ? (this.options.dir = e.prop("dir"))
                        : e.closest("[dir]").prop("dir")
                        ? (this.options.dir = e.closest("[dir]").prop("dir"))
                        : (this.options.dir = "ltr")),
                    e.prop("disabled", this.options.disabled),
                    e.prop("multiple", this.options.multiple),
                    p.GetData(e[0], "select2Tags") &&
                      (this.options.debug &&
                        window.console &&
                        console.warn &&
                        console.warn(
                          'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'
                        ),
                      p.StoreData(e[0], "data", p.GetData(e[0], "select2Tags")),
                      p.StoreData(e[0], "tags", !0)),
                    p.GetData(e[0], "ajaxUrl") &&
                      (this.options.debug &&
                        window.console &&
                        console.warn &&
                        console.warn(
                          "Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."
                        ),
                      e.attr("ajax--url", p.GetData(e[0], "ajaxUrl")),
                      p.StoreData(e[0], "ajax-Url", p.GetData(e[0], "ajaxUrl")));
                  var n = {};
                  function i(e, t) {
                    return t.toUpperCase();
                  }
                  for (var r = 0; r < e[0].attributes.length; r++) {
                    var s = e[0].attributes[r].name,
                      o = "data-";
                    if (s.substr(0, o.length) == o) {
                      var a = s.substring(o.length),
                        l = p.GetData(e[0], a);
                      n[a.replace(/-([a-z])/g, i)] = l;
                    }
                  }
                  d.fn.jquery &&
                    "1." == d.fn.jquery.substr(0, 2) &&
                    e[0].dataset &&
                    (n = d.extend(!0, {}, e[0].dataset, n));
                  var c = d.extend(!0, {}, p.GetData(e[0]), n);
                  for (var u in (c = p._convertData(c)))
                    -1 < t.indexOf(u) ||
                      (d.isPlainObject(this.options[u])
                        ? d.extend(this.options[u], c[u])
                        : (this.options[u] = c[u]));
                  return this;
                }),
                (e.prototype.get = function (e) {
                  return this.options[e];
                }),
                (e.prototype.set = function (e, t) {
                  this.options[e] = t;
                }),
                e
              );
            }
          ),
          e.define(
            "select2/core",
            ["jquery", "./options", "./utils", "./keys"],
            function (t, c, u, i) {
              var d = function (e, t) {
                null != u.GetData(e[0], "select2") &&
                  u.GetData(e[0], "select2").destroy(),
                  (this.$element = e),
                  (this.id = this._generateId(e)),
                  (t = t || {}),
                  (this.options = new c(t, e)),
                  d.__super__.constructor.call(this);
                var n = e.attr("tabindex") || 0;
                u.StoreData(e[0], "old-tabindex", n), e.attr("tabindex", "-1");
                var i = this.options.get("dataAdapter");
                this.dataAdapter = new i(e, this.options);
                var r = this.render();
                this._placeContainer(r);
                var s = this.options.get("selectionAdapter");
                (this.selection = new s(e, this.options)),
                  (this.$selection = this.selection.render()),
                  this.selection.position(this.$selection, r);
                var o = this.options.get("dropdownAdapter");
                (this.dropdown = new o(e, this.options)),
                  (this.$dropdown = this.dropdown.render()),
                  this.dropdown.position(this.$dropdown, r);
                var a = this.options.get("resultsAdapter");
                (this.results = new a(e, this.options, this.dataAdapter)),
                  (this.$results = this.results.render()),
                  this.results.position(this.$results, this.$dropdown);
                var l = this;
                this._bindAdapters(),
                  this._registerDomEvents(),
                  this._registerDataEvents(),
                  this._registerSelectionEvents(),
                  this._registerDropdownEvents(),
                  this._registerResultsEvents(),
                  this._registerEvents(),
                  this.dataAdapter.current(function (e) {
                    l.trigger("selection:update", { data: e });
                  }),
                  e[0].classList.add("select2-hidden-accessible"),
                  e.attr("aria-hidden", "true"),
                  this._syncAttributes(),
                  u.StoreData(e[0], "select2", this),
                  e.data("select2", this);
              };
              return (
                u.Extend(d, u.Observable),
                (d.prototype._generateId = function (e) {
                  return (
                    "select2-" +
                    (null != e.attr("id")
                      ? e.attr("id")
                      : null != e.attr("name")
                      ? e.attr("name") + "-" + u.generateChars(2)
                      : u.generateChars(4)
                    ).replace(/(:|\.|\[|\]|,)/g, "")
                  );
                }),
                (d.prototype._placeContainer = function (e) {
                  e.insertAfter(this.$element);
                  var t = this._resolveWidth(
                    this.$element,
                    this.options.get("width")
                  );
                  null != t && e.css("width", t);
                }),
                (d.prototype._resolveWidth = function (e, t) {
                  var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                  if ("resolve" == t) {
                    var i = this._resolveWidth(e, "style");
                    return null != i ? i : this._resolveWidth(e, "element");
                  }
                  if ("element" == t) {
                    var r = e.outerWidth(!1);
                    return r <= 0 ? "auto" : r + "px";
                  }
                  if ("style" != t)
                    return "computedstyle" != t
                      ? t
                      : window.getComputedStyle(e[0]).width;
                  var s = e.attr("style");
                  if ("string" != typeof s) return null;
                  for (var o = s.split(";"), a = 0, l = o.length; a < l; a += 1) {
                    var c = o[a].replace(/\s/g, "").match(n);
                    if (null !== c && 1 <= c.length) return c[1];
                  }
                  return null;
                }),
                (d.prototype._bindAdapters = function () {
                  this.dataAdapter.bind(this, this.$container),
                    this.selection.bind(this, this.$container),
                    this.dropdown.bind(this, this.$container),
                    this.results.bind(this, this.$container);
                }),
                (d.prototype._registerDomEvents = function () {
                  var t = this;
                  this.$element.on("change.select2", function () {
                    t.dataAdapter.current(function (e) {
                      t.trigger("selection:update", { data: e });
                    });
                  }),
                    this.$element.on("focus.select2", function (e) {
                      t.trigger("focus", e);
                    }),
                    (this._syncA = u.bind(this._syncAttributes, this)),
                    (this._syncS = u.bind(this._syncSubtree, this)),
                    (this._observer = new window.MutationObserver(function (e) {
                      t._syncA(), t._syncS(e);
                    })),
                    this._observer.observe(this.$element[0], {
                      attributes: !0,
                      childList: !0,
                      subtree: !1,
                    });
                }),
                (d.prototype._registerDataEvents = function () {
                  var n = this;
                  this.dataAdapter.on("*", function (e, t) {
                    n.trigger(e, t);
                  });
                }),
                (d.prototype._registerSelectionEvents = function () {
                  var n = this,
                    i = ["toggle", "focus"];
                  this.selection.on("toggle", function () {
                    n.toggleDropdown();
                  }),
                    this.selection.on("focus", function (e) {
                      n.focus(e);
                    }),
                    this.selection.on("*", function (e, t) {
                      -1 === i.indexOf(e) && n.trigger(e, t);
                    });
                }),
                (d.prototype._registerDropdownEvents = function () {
                  var n = this;
                  this.dropdown.on("*", function (e, t) {
                    n.trigger(e, t);
                  });
                }),
                (d.prototype._registerResultsEvents = function () {
                  var n = this;
                  this.results.on("*", function (e, t) {
                    n.trigger(e, t);
                  });
                }),
                (d.prototype._registerEvents = function () {
                  var n = this;
                  this.on("open", function () {
                    n.$container[0].classList.add("select2-container--open");
                  }),
                    this.on("close", function () {
                      n.$container[0].classList.remove("select2-container--open");
                    }),
                    this.on("enable", function () {
                      n.$container[0].classList.remove(
                        "select2-container--disabled"
                      );
                    }),
                    this.on("disable", function () {
                      n.$container[0].classList.add(
                        "select2-container--disabled"
                      );
                    }),
                    this.on("blur", function () {
                      n.$container[0].classList.remove(
                        "select2-container--focus"
                      );
                    }),
                    this.on("query", function (t) {
                      n.isOpen() || n.trigger("open", {}),
                        this.dataAdapter.query(t, function (e) {
                          n.trigger("results:all", { data: e, query: t });
                        });
                    }),
                    this.on("query:append", function (t) {
                      this.dataAdapter.query(t, function (e) {
                        n.trigger("results:append", { data: e, query: t });
                      });
                    }),
                    this.on("keypress", function (e) {
                      var t = e.which;
                      n.isOpen()
                        ? t === i.ESC || t === i.TAB || (t === i.UP && e.altKey)
                          ? (n.close(e), e.preventDefault())
                          : t === i.ENTER
                          ? (n.trigger("results:select", {}), e.preventDefault())
                          : t === i.SPACE && e.ctrlKey
                          ? (n.trigger("results:toggle", {}), e.preventDefault())
                          : t === i.UP
                          ? (n.trigger("results:previous", {}),
                            e.preventDefault())
                          : t === i.DOWN &&
                            (n.trigger("results:next", {}), e.preventDefault())
                        : (t === i.ENTER ||
                            t === i.SPACE ||
                            (t === i.DOWN && e.altKey)) &&
                          (n.open(), e.preventDefault());
                    });
                }),
                (d.prototype._syncAttributes = function () {
                  this.options.set("disabled", this.$element.prop("disabled")),
                    this.isDisabled()
                      ? (this.isOpen() && this.close(),
                        this.trigger("disable", {}))
                      : this.trigger("enable", {});
                }),
                (d.prototype._isChangeMutation = function (e) {
                  var t = this;
                  if (e.addedNodes && 0 < e.addedNodes.length)
                    for (var n = 0; n < e.addedNodes.length; n++) {
                      if (e.addedNodes[n].selected) return !0;
                    }
                  else {
                    if (e.removedNodes && 0 < e.removedNodes.length) return !0;
                    if (Array.isArray(e))
                      return e.some(function (e) {
                        return t._isChangeMutation(e);
                      });
                  }
                  return !1;
                }),
                (d.prototype._syncSubtree = function (e) {
                  var t = this._isChangeMutation(e),
                    n = this;
                  t &&
                    this.dataAdapter.current(function (e) {
                      n.trigger("selection:update", { data: e });
                    });
                }),
                (d.prototype.trigger = function (e, t) {
                  var n = d.__super__.trigger,
                    i = {
                      open: "opening",
                      close: "closing",
                      select: "selecting",
                      unselect: "unselecting",
                      clear: "clearing",
                    };
                  if ((void 0 === t && (t = {}), e in i)) {
                    var r = i[e],
                      s = { prevented: !1, name: e, args: t };
                    if ((n.call(this, r, s), s.prevented))
                      return void (t.prevented = !0);
                  }
                  n.call(this, e, t);
                }),
                (d.prototype.toggleDropdown = function () {
                  this.isDisabled() ||
                    (this.isOpen() ? this.close() : this.open());
                }),
                (d.prototype.open = function () {
                  this.isOpen() || this.isDisabled() || this.trigger("query", {});
                }),
                (d.prototype.close = function (e) {
                  this.isOpen() && this.trigger("close", { originalEvent: e });
                }),
                (d.prototype.isEnabled = function () {
                  return !this.isDisabled();
                }),
                (d.prototype.isDisabled = function () {
                  return this.options.get("disabled");
                }),
                (d.prototype.isOpen = function () {
                  return this.$container[0].classList.contains(
                    "select2-container--open"
                  );
                }),
                (d.prototype.hasFocus = function () {
                  return this.$container[0].classList.contains(
                    "select2-container--focus"
                  );
                }),
                (d.prototype.focus = function (e) {
                  this.hasFocus() ||
                    (this.$container[0].classList.add("select2-container--focus"),
                    this.trigger("focus", {}));
                }),
                (d.prototype.enable = function (e) {
                  this.options.get("debug") &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      'Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'
                    ),
                    (null != e && 0 !== e.length) || (e = [!0]);
                  var t = !e[0];
                  this.$element.prop("disabled", t);
                }),
                (d.prototype.data = function () {
                  this.options.get("debug") &&
                    0 < arguments.length &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      'Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'
                    );
                  var t = [];
                  return (
                    this.dataAdapter.current(function (e) {
                      t = e;
                    }),
                    t
                  );
                }),
                (d.prototype.val = function (e) {
                  if (
                    (this.options.get("debug") &&
                      window.console &&
                      console.warn &&
                      console.warn(
                        'Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'
                      ),
                    null == e || 0 === e.length)
                  )
                    return this.$element.val();
                  var t = e[0];
                  Array.isArray(t) &&
                    (t = t.map(function (e) {
                      return e.toString();
                    })),
                    this.$element.val(t).trigger("input").trigger("change");
                }),
                (d.prototype.destroy = function () {
                  this.$container.remove(),
                    this._observer.disconnect(),
                    (this._observer = null),
                    (this._syncA = null),
                    (this._syncS = null),
                    this.$element.off(".select2"),
                    this.$element.attr(
                      "tabindex",
                      u.GetData(this.$element[0], "old-tabindex")
                    ),
                    this.$element[0].classList.remove(
                      "select2-hidden-accessible"
                    ),
                    this.$element.attr("aria-hidden", "false"),
                    u.RemoveData(this.$element[0]),
                    this.$element.removeData("select2"),
                    this.dataAdapter.destroy(),
                    this.selection.destroy(),
                    this.dropdown.destroy(),
                    this.results.destroy(),
                    (this.dataAdapter = null),
                    (this.selection = null),
                    (this.dropdown = null),
                    (this.results = null);
                }),
                (d.prototype.render = function () {
                  var e = t(
                    '<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'
                  );
                  return (
                    e.attr("dir", this.options.get("dir")),
                    (this.$container = e),
                    this.$container[0].classList.add(
                      "select2-container--" + this.options.get("theme")
                    ),
                    u.StoreData(e[0], "element", this.$element),
                    e
                  );
                }),
                d
              );
            }
          ),
          e.define("jquery-mousewheel", ["jquery"], function (e) {
            return e;
          }),
          e.define(
            "jquery.select2",
            [
              "jquery",
              "jquery-mousewheel",
              "./select2/core",
              "./select2/defaults",
              "./select2/utils",
            ],
            function (r, e, s, t, o) {
              if (null == r.fn.select2) {
                var a = ["open", "close", "destroy"];
                r.fn.select2 = function (t) {
                  if ("object" == typeof (t = t || {}))
                    return (
                      this.each(function () {
                        var e = r.extend(!0, {}, t);
                        new s(r(this), e);
                      }),
                      this
                    );
                  if ("string" != typeof t)
                    throw new Error("Invalid arguments for Select2: " + t);
                  var n,
                    i = Array.prototype.slice.call(arguments, 1);
                  return (
                    this.each(function () {
                      var e = o.GetData(this, "select2");
                      null == e &&
                        window.console &&
                        console.error &&
                        console.error(
                          "The select2('" +
                            t +
                            "') method was called on an element that is not using Select2."
                        ),
                        (n = e[t].apply(e, i));
                    }),
                    -1 < a.indexOf(t) ? this : n
                  );
                };
              }
              return (
                null == r.fn.select2.defaults && (r.fn.select2.defaults = t), s
              );
            }
          ),
          { define: e.define, require: e.require }
        );
      })(),
      t = e.require("jquery.select2");
    return (u.fn.select2.amd = e), t;
  });
  