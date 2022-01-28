"use strict";
(self.webpackChunkreact_enginerring_train =
  self.webpackChunkreact_enginerring_train || []).push([
  [125],
  {
    6702: (e, t, r) => {
      r.d(t, { Z: () => u });
      var n,
        a = r(9669),
        l = r.n(a),
        c = r(5773),
        o = r(958),
        i = r(821),
        s = l().create({});
      s.interceptors.response.use(
        function (e) {
          return e.data;
        },
        function (e) {
          if (l().isCancel(e)) console.log("Request canceled", e);
          else if (!n) {
            var t =
              ((r = "Request failed"),
              e.response && e.response.data
                ? (r = e.response.data.message || r)
                : e.message && (r = e.message),
              r);
            n = c.Z.error({
              title: "Error",
              content: t,
              afterClose: function () {
                return (n = null);
              },
            });
          }
          var r;
          return Promise.reject(e);
        }
      );
      const u = {
        getList: function (e) {
          e = "all" !== e.toLowerCase() ? "+language:".concat(e) : "";
          return (0, o.ZP)(
            function (t) {
              return "https://api.github.com/search/repositories?q=stars:%3E1"
                .concat(
                  e,
                  "&sort=stars&order=desc&type=Repositories&per_page=30&page="
                )
                .concat(t + 1);
            },
            function (e) {
              return s.get(e);
            },
            { shouldRetryOnError: !1, revalidateFirstPage: !1 }
          );
        },
        getUser: function (e) {
          return s.get("https://api.github.com/users/".concat(e));
        },
        getUser2: function (e) {
          var t = e ? "https://api.github.com/users/".concat(e) : null;
          return (0, i.ZP)(
            t,
            function (e) {
              return s.get(e);
            },
            { shouldRetryOnError: !1, revalidateOnFocus: !1 }
          );
        },
      };
    },
    5910: (e, t, r) => {
      r.r(t), r.d(t, { default: () => P });
      var n = r(7294),
        a = r(9711),
        l = r(6974),
        c = r(2161),
        o = r(1635),
        i = r(1577),
        s = r(7625),
        u = r(1436);
      function m() {
        return n.createElement(
          "div",
          null,
          n.createElement("h2", { className: "tc" }, "Instructions"),
          n.createElement(
            c.Z,
            { justify: "center" },
            n.createElement(
              o.Z,
              {
                xs: { span: 16 },
                sm: { span: 8 },
                md: { span: 6 },
                lg: { span: 4 },
                xxl: 3,
              },
              n.createElement(
                "div",
                { className: "tc mb4" },
                n.createElement("p", { className: "fw6" }, "Enter Two Github"),
                n.createElement(
                  "div",
                  { className: "pa4 bg-light-gray mh3" },
                  n.createElement(s.G, {
                    icon: u.FVb,
                    size: "5x",
                    color: "#ffbf74",
                    fixedWidth: !0,
                  })
                )
              )
            ),
            n.createElement(
              o.Z,
              {
                xs: { span: 16 },
                sm: { span: 8 },
                md: { span: 6 },
                lg: { span: 4 },
                xxl: 3,
              },
              n.createElement(
                "div",
                { className: "tc mb4" },
                n.createElement("p", { className: "fw6" }, "Battle"),
                n.createElement(
                  "div",
                  { className: "pa4 bg-light-gray mh3" },
                  n.createElement(s.G, {
                    icon: u.gBe,
                    size: "5x",
                    color: "gray",
                    fixedWidth: !0,
                  })
                )
              )
            ),
            n.createElement(
              o.Z,
              {
                xs: { span: 16 },
                sm: { span: 8 },
                md: { span: 6 },
                lg: { span: 4 },
                xxl: 3,
              },
              n.createElement(
                "div",
                { className: "tc mb4" },
                n.createElement("p", { className: "fw6" }, "See The Winner"),
                n.createElement(
                  "div",
                  { className: "pa4 bg-light-gray mh3" },
                  n.createElement(s.G, {
                    icon: u.kWN,
                    size: "5x",
                    color: "rgb(244, 234, 42)",
                    fixedWidth: !0,
                  })
                )
              )
            )
          )
        );
      }
      var f = r(5697),
        p = r.n(f),
        g = r(8868),
        h = r(1382),
        y = r(4044),
        d = r(4649),
        b = r(6702);
      const E = "UXaxDgY_QMyFQhVFX_6k";
      function v(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null == r) return;
            var n,
              a,
              l = [],
              c = !0,
              o = !1;
            try {
              for (
                r = r.call(e);
                !(c = (n = r.next()).done) &&
                (l.push(n.value), !t || l.length !== t);
                c = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                c || null == r.return || r.return();
              } finally {
                if (o) throw a;
              }
            }
            return l;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return w(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return w(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function w(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function O(e) {
        var t = e.onChange,
          r = (function () {
            var e = v((0, n.useState)(!1), 2),
              t = e[0],
              r = e[1],
              a = v((0, n.useState)(null), 2),
              l = a[0],
              c = a[1],
              o = (0, n.useRef)({ error: null });
            return {
              player: l,
              isLoading: t,
              submit: function (e) {
                r(!0),
                  b.Z.getUser(e)
                    .then(function (e) {
                      c(e);
                    })
                    .catch(function (e) {
                      console.error(e),
                        c(null),
                        o.current.error && o.current.error(e);
                    })
                    .finally(function () {
                      r(!1);
                    });
              },
              onError: function (e) {
                return (o.current.error = e);
              },
              clearPlayer: function () {
                return c(null);
              },
            };
          })(),
          a = r.player,
          l = r.isLoading,
          c = r.submit,
          o = r.clearPlayer;
        (0, r.onError)(function () {
          o(), t(null);
        });
        var m = (0, d.TA)({
          initialValues: { name: "" },
          onSubmit: function (e) {
            var r = e.name.toLowerCase();
            c(r), t(r);
          },
        });
        return a
          ? n.createElement(
              "div",
              {
                className:
                  "br3 bg-light-gray flex items-center justify-between pa2",
              },
              n.createElement(
                "div",
                { className: "flex items-center" },
                n.createElement(g.Z, {
                  className: "br3",
                  src: a.avatar_url,
                  width: 48,
                  height: 48,
                  preview: !1,
                  placeholder: n.createElement(
                    "div",
                    { className: "flex items-center justify-center h-100" },
                    n.createElement(h.Z, null)
                  ),
                }),
                n.createElement(
                  "span",
                  { className: "ml2 fw6 f3 blue" },
                  a.login
                )
              ),
              n.createElement(
                "div",
                {
                  className: "pointer",
                  onClick: function () {
                    o(), m.setValues({ name: "" }), t(null);
                  },
                },
                n.createElement(s.G, { icon: u.nYk, color: "red", size: "2x" })
              )
            )
          : n.createElement(
              y.Z.Group,
              { compact: !0, size: "large" },
              n.createElement(y.Z, {
                name: "name",
                className: E,
                maxLength: 30,
                value: m.values.name,
                disabled: l,
                onChange: m.handleChange,
                placeholder: "github username",
              }),
              n.createElement(
                i.Z,
                {
                  size: "large",
                  type: "primary",
                  loading: l,
                  disabled: !m.values.name,
                  onClick: m.handleSubmit,
                },
                "Submit"
              )
            );
      }
      function x(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? x(Object(r), !0).forEach(function (t) {
                N(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : x(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function N(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function S(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null == r) return;
            var n,
              a,
              l = [],
              c = !0,
              o = !1;
            try {
              for (
                r = r.call(e);
                !(c = (n = r.next()).done) &&
                (l.push(n.value), !t || l.length !== t);
                c = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                c || null == r.return || r.return();
              } finally {
                if (o) throw a;
              }
            }
            return l;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return Z(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return Z(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Z(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function P() {
        var e = (0, l.s0)(),
          t = S((0, n.useState)({ p1: null, p2: null }), 2),
          r = t[0],
          s = t[1];
        return n.createElement(
          "div",
          { className: "battle pt4" },
          n.createElement(m, null),
          n.createElement(
            "div",
            { className: "pb4" },
            n.createElement("h2", { className: "tc mb3" }, "Players"),
            n.createElement(
              c.Z,
              { justify: "center" },
              n.createElement(
                o.Z,
                { xs: 20, md: 10 },
                n.createElement(
                  "div",
                  { className: "ph4 tc" },
                  n.createElement("h2", null, "Player One"),
                  n.createElement(O, {
                    onChange: function (e) {
                      return s(j(j({}, r), {}, { p1: e }));
                    },
                  })
                )
              ),
              n.createElement(
                o.Z,
                { xs: 20, md: 10 },
                n.createElement(
                  "div",
                  { className: "ph4 tc" },
                  n.createElement("h2", null, "Player Two"),
                  n.createElement(O, {
                    onChange: function (e) {
                      return s(j(j({}, r), {}, { p2: e }));
                    },
                  })
                )
              )
            ),
            r.p1 &&
              r.p2 &&
              n.createElement(
                c.Z,
                { justify: "center", className: "pv5" },
                n.createElement(
                  i.Z,
                  {
                    type: "primary",
                    size: "large",
                    onClick: function () {
                      e({
                        pathname: "/result",
                        search: "?".concat((0, a.fW)({ p1: r.p1, p2: r.p2 })),
                      });
                    },
                  },
                  "Battle"
                )
              )
          )
        );
      }
      O.propTypes = { onChange: p().func };
    },
  },
]);
//# sourceMappingURL=Battle.bd7098d8.js.map
