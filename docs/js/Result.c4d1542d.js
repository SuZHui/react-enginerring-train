"use strict";
(self.webpackChunkreact_enginerring_train =
  self.webpackChunkreact_enginerring_train || []).push([
  [359],
  {
    6702: (e, t, r) => {
      r.d(t, { Z: () => E });
      var n,
        A = r(9669),
        a = r.n(A),
        o = r(5773),
        l = r(958),
        i = r(821),
        s = a().create({});
      s.interceptors.response.use(
        function (e) {
          return e.data;
        },
        function (e) {
          if (a().isCancel(e)) console.log("Request canceled", e);
          else if (!n) {
            var t =
              ((r = "Request failed"),
              e.response && e.response.data
                ? (r = e.response.data.message || r)
                : e.message && (r = e.message),
              r);
            n = o.Z.error({
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
      const E = {
        getList: function (e) {
          e = "all" !== e.toLowerCase() ? "+language:".concat(e) : "";
          return (0, l.ZP)(
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
    8057: (e, t, r) => {
      r.r(t), r.d(t, { default: () => I });
      var n = r(7294),
        A = r(9711),
        a = r(6974),
        o = r(2161),
        l = r(1635),
        i = r(1577),
        s = r(6702);
      function E(e) {
        var t = s.Z.getUser2(e),
          r = t.data,
          n = t.error,
          A = t.isValidating;
        return {
          player: r,
          isLoading: A,
          isError: !!n || (!r && !A),
          refresh: t.mutate,
        };
      }
      var c = r(5697),
        g = r.n(c),
        u = r(8868),
        Q = r(1382),
        m = r(7625),
        f = r(1436);
      function d(e) {
        var t = e.status,
          r = e.avatar_url,
          A = e.location,
          a = e.following,
          o = e.followers,
          l = e.html_url,
          i = e.public_repos;
        return n.createElement(
          "a",
          {
            href: l,
            target: "_blank",
            className:
              "db br1 bg-light-gray mb4 pv4 shadow-hover no-underline color-inherit w-80 center",
            rel: "noreferrer",
          },
          n.createElement(
            "div",
            { className: "flex flex-column justify-center items-center" },
            n.createElement("h2", { className: "mb2 mt0" }, t),
            n.createElement(u.Z, {
              src: r,
              preview: !1,
              width: "120px",
              height: "120px",
              placeholder: n.createElement(
                "div",
                { className: "w-100 h-100 tc" },
                n.createElement(Q.Z, null)
              ),
              fallback:
                "data:image/png;base64,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",
            }),
            n.createElement(
              "h4",
              { className: "f4 mt3 mb1 red" },
              "Scores: ",
              i
            ),
            n.createElement(
              "div",
              { className: "ph4 tl w-100 f5" },
              n.createElement(
                "p",
                { className: "mv2 flex items-center", title: A },
                n.createElement(m.G, {
                  icon: f.$40,
                  color: "#ffbf74",
                  fixedWidth: !0,
                }),
                n.createElement(
                  "span",
                  { className: "ml2 flex-auto-l truncate" },
                  A
                )
              ),
              n.createElement(
                "p",
                { className: "mv2 flex items-center" },
                n.createElement(m.G, {
                  icon: f.FVb,
                  color: "#ffd701",
                  fixedWidth: !0,
                }),
                n.createElement("span", { className: "ml2" }, o)
              ),
              n.createElement(
                "p",
                { className: "mv2 flex items-center" },
                n.createElement(m.G, {
                  icon: f.FKd,
                  color: "#8dc6f3",
                  fixedWidth: !0,
                }),
                n.createElement("span", { className: "ml2" }, a)
              ),
              n.createElement(
                "p",
                { className: "mv2 flex items-center" },
                n.createElement(m.G, {
                  icon: f.dT$,
                  color: "#f18d95",
                  fixedWidth: !0,
                }),
                n.createElement("span", { className: "ml2" }, i)
              )
            )
          )
        );
      }
      (d.propTypes = {
        status: g().string,
        location: g().string,
        avatar_url: g().string.isRequired,
        following: g().number.isRequired,
        followers: g().number.isRequired,
        html_url: g().string.isRequired,
        public_repos: g().number.isRequired,
      }),
        (d.STATUS = { WIN: "Winner", LOSE: "Loser", TIE: "Tie" });
      var p = r(4277);
      function h(e) {
        var t = e.isLoading;
        return n.createElement(
          "div",
          { className: "pv6 tc" },
          t ? n.createElement(Q.Z, null) : n.createElement(p.Z, null)
        );
      }
      function B() {
        return (
          (B =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          B.apply(this, arguments)
        );
      }
      function N(e, t) {
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
              A,
              a = [],
              o = !0,
              l = !1;
            try {
              for (
                r = r.call(e);
                !(o = (n = r.next()).done) &&
                (a.push(n.value), !t || a.length !== t);
                o = !0
              );
            } catch (e) {
              (l = !0), (A = e);
            } finally {
              try {
                o || null == r.return || r.return();
              } finally {
                if (l) throw A;
              }
            }
            return a;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return y(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return y(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function I() {
        var e = N((0, A.lr)(), 1)[0],
          t = E(e.get("p1")),
          r = E(e.get("p2")),
          s = N(
            (0, n.useMemo)(
              function () {
                if (!t.player || !r.player) return [null, null];
                var e = Math.max(t.player.public_repos, r.player.public_repos),
                  n = [t.player.public_repos, r.player.public_repos];
                return n.every(function (t) {
                  return t === e;
                })
                  ? [d.STATUS.TIE, d.STATUS.TIE]
                  : n.map(function (t) {
                      return t === e ? d.STATUS.WIN : d.STATUS.LOSE;
                    });
              },
              [t, r]
            ),
            2
          ),
          c = s[0],
          g = s[1],
          u = (0, a.s0)();
        return n.createElement(
          "div",
          { className: "pt5 overflow-y-auto" },
          n.createElement(
            o.Z,
            { className: "mt4", justify: "center" },
            n.createElement(
              l.Z,
              { xs: 18, sm: 10, md: 8, lg: 6, xl: 6, xxl: 4 },
              t.isError || t.isLoading
                ? n.createElement(h, { isLoading: t.isLoading })
                : n.createElement(d, B({ status: c }, t.player))
            ),
            n.createElement(
              l.Z,
              {
                xs: 18,
                sm: { span: 10, offset: 2 },
                md: { span: 8, offset: 6 },
                lg: { span: 6, offset: 5 },
                xl: { span: 6, offset: 6 },
                xxl: { span: 4, offset: 4 },
              },
              r.isError || r.isLoading
                ? n.createElement(h, { isLoading: r.isLoading })
                : n.createElement(d, B({ status: g }, r.player))
            )
          ),
          n.createElement(
            o.Z,
            { justify: "center" },
            n.createElement(
              i.Z,
              {
                size: "large",
                onClick: function () {
                  u("/battle");
                },
                type: "primary",
              },
              "Reset"
            )
          )
        );
      }
      h.propTypes = { isLoading: g().bool.isRequired };
    },
  },
]);
//# sourceMappingURL=Result.c4d1542d.js.map
