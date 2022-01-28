(() => {
  "use strict";
  var e,
    t,
    r,
    n,
    a,
    l = {
      3622: (e, t, r) => {
        var n = r(7294),
          a = r(3935),
          l = r(9711),
          o = r(6974);
        function i() {
          var e = "fw6 no-underline near-black ph2 dim f4";
          return n.createElement(
            "nav",
            {
              className: "pa3 fixed top-0 left-0 right-0 w-100 bg-white",
              style: { zIndex: 100 },
            },
            n.createElement(
              l.OL,
              {
                to: "/",
                className: function (t) {
                  return t.isActive ? "".concat(e, " dark-red") : e;
                },
              },
              "Popular"
            ),
            n.createElement(
              l.OL,
              {
                to: "/battle",
                className: function (t) {
                  return t.isActive ? "".concat(e, " dark-red") : e;
                },
              },
              "Battle"
            )
          );
        }
        var u = n.lazy(function () {
            return Promise.all([r.e(270), r.e(906), r.e(216), r.e(702)]).then(
              r.bind(r, 8655)
            );
          }),
          c = n.lazy(function () {
            return Promise.all([r.e(270), r.e(906), r.e(216), r.e(125)]).then(
              r.bind(r, 5910)
            );
          }),
          s = n.lazy(function () {
            return Promise.all([r.e(270), r.e(906), r.e(216), r.e(359)]).then(
              r.bind(r, 8057)
            );
          }),
          d = n.lazy(function () {
            return Promise.all([r.e(906), r.e(216), r.e(388)]).then(
              r.bind(r, 268)
            );
          });
        function f() {
          var e = n.createElement(n.Fragment, null, "..."),
            t = [
              {
                path: "/",
                element: n.createElement(
                  n.Suspense,
                  { fallback: e },
                  n.createElement(u, null)
                ),
              },
              {
                path: "/battle",
                element: n.createElement(
                  n.Suspense,
                  { fallback: e },
                  n.createElement(c, null)
                ),
              },
              {
                path: "/result",
                element: n.createElement(
                  n.Suspense,
                  { fallback: e },
                  n.createElement(s, null)
                ),
              },
              {
                path: "*",
                element: n.createElement(
                  n.Suspense,
                  { fallback: e },
                  n.createElement(d, null)
                ),
              },
            ],
            r = (0, o.V$)(t);
          return n.createElement(n.Fragment, null, n.createElement(i, null), r);
        }
        r(4781);
        a.render(
          n.createElement(l.UT, null, n.createElement(f, null)),
          document.getElementById("app")
        );
      },
    },
    o = {};
  function i(e) {
    var t = o[e];
    if (void 0 !== t) return t.exports;
    var r = (o[e] = { exports: {} });
    return l[e](r, r.exports, i), r.exports;
  }
  (i.m = l),
    (e = []),
    (i.O = (t, r, n, a) => {
      if (!r) {
        var l = 1 / 0;
        for (s = 0; s < e.length; s++) {
          for (var [r, n, a] = e[s], o = !0, u = 0; u < r.length; u++)
            (!1 & a || l >= a) && Object.keys(i.O).every((e) => i.O[e](r[u]))
              ? r.splice(u--, 1)
              : ((o = !1), a < l && (l = a));
          if (o) {
            e.splice(s--, 1);
            var c = n();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      a = a || 0;
      for (var s = e.length; s > 0 && e[s - 1][2] > a; s--) e[s] = e[s - 1];
      e[s] = [r, n, a];
    }),
    (i.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return i.d(t, { a: t }), t;
    }),
    (i.d = (e, t) => {
      for (var r in t)
        i.o(t, r) &&
          !i.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (i.f = {}),
    (i.e = (e) =>
      Promise.all(Object.keys(i.f).reduce((t, r) => (i.f[r](e, t), t), []))),
    (i.u = (e) =>
      "js/" +
      { 125: "Battle", 359: "Result", 388: "NoFound", 702: "Popular" }[e] +
      "." +
      { 125: "bd7098d8", 359: "c4d1542d", 388: "d3c8bf77", 702: "cfd139ac" }[
        e
      ] +
      ".js"),
    (i.miniCssF = (e) => "css/Battle.c6ce2b3b.css"),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (t = {}),
    (r = "react-enginerring-train:"),
    (i.l = (e, n, a, l) => {
      if (t[e]) t[e].push(n);
      else {
        var o, u;
        if (void 0 !== a)
          for (
            var c = document.getElementsByTagName("script"), s = 0;
            s < c.length;
            s++
          ) {
            var d = c[s];
            if (
              d.getAttribute("src") == e ||
              d.getAttribute("data-webpack") == r + a
            ) {
              o = d;
              break;
            }
          }
        o ||
          ((u = !0),
          ((o = document.createElement("script")).charset = "utf-8"),
          (o.timeout = 120),
          i.nc && o.setAttribute("nonce", i.nc),
          o.setAttribute("data-webpack", r + a),
          (o.src = e)),
          (t[e] = [n]);
        var f = (r, n) => {
            (o.onerror = o.onload = null), clearTimeout(m);
            var a = t[e];
            if (
              (delete t[e],
              o.parentNode && o.parentNode.removeChild(o),
              a && a.forEach((e) => e(n)),
              r)
            )
              return r(n);
          },
          m = setTimeout(
            f.bind(null, void 0, { type: "timeout", target: o }),
            12e4
          );
        (o.onerror = f.bind(null, o.onerror)),
          (o.onload = f.bind(null, o.onload)),
          u && document.head.appendChild(o);
      }
    }),
    (i.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.p = "/react-enginerring-train/"),
    (n = (e) =>
      new Promise((t, r) => {
        var n = i.miniCssF(e),
          a = i.p + n;
        if (
          ((e, t) => {
            for (
              var r = document.getElementsByTagName("link"), n = 0;
              n < r.length;
              n++
            ) {
              var a =
                (o = r[n]).getAttribute("data-href") || o.getAttribute("href");
              if ("stylesheet" === o.rel && (a === e || a === t)) return o;
            }
            var l = document.getElementsByTagName("style");
            for (n = 0; n < l.length; n++) {
              var o;
              if ((a = (o = l[n]).getAttribute("data-href")) === e || a === t)
                return o;
            }
          })(n, a)
        )
          return t();
        ((e, t, r, n) => {
          var a = document.createElement("link");
          (a.rel = "stylesheet"),
            (a.type = "text/css"),
            (a.onerror = a.onload =
              (l) => {
                if (((a.onerror = a.onload = null), "load" === l.type)) r();
                else {
                  var o = l && ("load" === l.type ? "missing" : l.type),
                    i = (l && l.target && l.target.href) || t,
                    u = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + i + ")"
                    );
                  (u.code = "CSS_CHUNK_LOAD_FAILED"),
                    (u.type = o),
                    (u.request = i),
                    a.parentNode.removeChild(a),
                    n(u);
                }
              }),
            (a.href = t),
            document.head.appendChild(a);
        })(e, a, t, r);
      })),
    (a = { 179: 0 }),
    (i.f.miniCss = (e, t) => {
      a[e]
        ? t.push(a[e])
        : 0 !== a[e] &&
          { 125: 1 }[e] &&
          t.push(
            (a[e] = n(e).then(
              () => {
                a[e] = 0;
              },
              (t) => {
                throw (delete a[e], t);
              }
            ))
          );
    }),
    (() => {
      var e = { 179: 0 };
      (i.f.j = (t, r) => {
        var n = i.o(e, t) ? e[t] : void 0;
        if (0 !== n)
          if (n) r.push(n[2]);
          else {
            var a = new Promise((r, a) => (n = e[t] = [r, a]));
            r.push((n[2] = a));
            var l = i.p + i.u(t),
              o = new Error();
            i.l(
              l,
              (r) => {
                if (i.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var a = r && ("load" === r.type ? "missing" : r.type),
                    l = r && r.target && r.target.src;
                  (o.message =
                    "Loading chunk " + t + " failed.\n(" + a + ": " + l + ")"),
                    (o.name = "ChunkLoadError"),
                    (o.type = a),
                    (o.request = l),
                    n[1](o);
                }
              },
              "chunk-" + t,
              t
            );
          }
      }),
        (i.O.j = (t) => 0 === e[t]);
      var t = (t, r) => {
          var n,
            a,
            [l, o, u] = r,
            c = 0;
          if (l.some((t) => 0 !== e[t])) {
            for (n in o) i.o(o, n) && (i.m[n] = o[n]);
            if (u) var s = u(i);
          }
          for (t && t(r); c < l.length; c++)
            (a = l[c]), i.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return i.O(s);
        },
        r = (self.webpackChunkreact_enginerring_train =
          self.webpackChunkreact_enginerring_train || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var u = i.O(void 0, [270, 906, 216], () => i(3622));
  u = i.O(u);
})();
//# sourceMappingURL=main.b6cb1a16.js.map
