(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    "/Cao": function (e, t, n) {
      const r = n("8VYC");
      const o = n("Yvos");
      const i = n("HiSk");
      e.exports = l;
      let a;
      const s = /\n/g;
      const c = /\\n/g;
      function u() {}
      function l(e) {
        r.call(this, e),
          (this.query = this.query || {}),
          a || (a = i.___eio = i.___eio || []),
          (this.index = a.length);
        const t = this;
        a.push(e => {
          t.onData(e);
        }),
          (this.query.j = this.index),
          "function" === typeof addEventListener &&
            addEventListener(
              "beforeunload",
              () => {
                t.script && (t.script.onerror = u);
              },
              !1
            );
      }
      o(l, r),
        (l.prototype.supportsBinary = !1),
        (l.prototype.doClose = function () {
          this.script &&
            (this.script.parentNode.removeChild(this.script),
            (this.script = null)),
            this.form &&
              (this.form.parentNode.removeChild(this.form),
              (this.form = null),
              (this.iframe = null)),
            r.prototype.doClose.call(this);
        }),
        (l.prototype.doPoll = function () {
        const e = this;
        const t = document.createElement("script");
        this.script &&
          (this.script.parentNode.removeChild(this.script),
          (this.script = null)),
          (t.async = !0),
          (t.src = this.uri()),
          (t.onerror = t => {
            e.onError("jsonp poll error", t);
          });
        const n = document.getElementsByTagName("script")[0];
        n
          ? n.parentNode.insertBefore(t, n)
          : (document.head || document.body).appendChild(t),
          (this.script = t),
          "undefined" !== typeof navigator &&
            /gecko/i.test(navigator.userAgent) &&
            setTimeout(() => {
              const e = document.createElement("iframe");
              document.body.appendChild(e), document.body.removeChild(e);
            }, 100);
      }),
        (l.prototype.doWrite = function (e, t) {
          const n = this;
          if (!this.form) {
            var r;
            const o = document.createElement("form");
            const i = document.createElement("textarea");
            const a = (this.iframeId = `eio_iframe_${this.index}`);
            (o.className = "socketio"),
              (o.style.position = "absolute"),
              (o.style.top = "-1000px"),
              (o.style.left = "-1000px"),
              (o.target = a),
              (o.method = "POST"),
              o.setAttribute("accept-charset", "utf-8"),
              (i.name = "d"),
              o.appendChild(i),
              document.body.appendChild(o),
              (this.form = o),
              (this.area = i);
          }
          function u() {
            l(), t();
          }
          function l() {
            if (n.iframe)
              try {
                n.form.removeChild(n.iframe);
              } catch (t) {
                n.onError("jsonp polling iframe removal error", t);
              }
            try {
              const e = `<iframe src="javascript:0" name="${n.iframeId}">`;
              r = document.createElement(e);
            } catch (t) {
              ((r = document.createElement("iframe")).name = n.iframeId),
                (r.src = "javascript:0");
            }
            (r.id = n.iframeId), n.form.appendChild(r), (n.iframe = r);
          }
          (this.form.action = this.uri()),
            l(),
            (e = e.replace(c, "\\\n")),
            (this.area.value = e.replace(s, "\\n"));
          try {
            this.form.submit();
          } catch (A) {}
          this.iframe.attachEvent
            ? (this.iframe.onreadystatechange = () => {
                "complete" === n.iframe.readyState && u();
              })
            : (this.iframe.onload = u);
        });
    },
    "1dJL": function (e, t, n) {
      "use strict";

      const r =
                (this && this.__awaiter) ||
                ((e, t, n, r) => {
                  return new (n || (n = Promise))((o, i) => {
                    function a(e) {
                      try {
                        c(r.next(e));
                      } catch (t) {
                        i(t);
                      }
                    }
                    function s(e) {
                      try {
                        c(r.throw(e));
                      } catch (t) {
                        i(t);
                      }
                    }
                    function c({done, value}) {
                      let t;
                      done
                        ? o(value)
                        : ((t = value),
                          t instanceof n
                            ? t
                            : new n(e => {
                                e(t);
                              })).then(a, s);
                    }
                    c((r = r.apply(e, t || [])).next());
                  });
                });

      const o =
        (this && this.__generator) ||
        ((e, t) => {
          let n;
          let r;
          let o;
          let i;

          let a = {
            label: 0,
            sent() {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };

          return (
            (i = { next: s(0), throw: s(1), return: s(2) }),
            "function" === typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function s(i) {
            return s => {
              return (i => {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (s) {
                    (i = [6, s]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, s]);
            };
          }
        });

      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Channel = void 0);
      const i = n("5/z4");

      const a = function({id, send, onUnrecoverableError}) {
        const t = this;
        const n = id;
        const a = send;
        const s = onUnrecoverableError;
        (this.onCommand = e => {
          if ("closed" === t.status) {
            const n = new Error(
              "Trying to listen to commands on a closed channel"
            );
            throw (t.onUnrecoverableError(n), n);
          }
          return t.onCommandListeners.push(e),
          () => {
            t.onCommandListeners = t.onCommandListeners.filter(t => {
              return t !== e;
            });
          }
        ;
        }),
          (this.send = e => {
            if ("closed" === t.status) {
              var n = new Error("Calling send on closed channel");
              throw (t.onUnrecoverableError(n), n);
            }
            if ("closing" === t.status)
              throw (
                ((n = new Error(
                  "Cannot send any more commands after a close request"
                )),
                t.onUnrecoverableError(n),
                n)
              );
            (e.channel = t.id), t.sendToContainer(i.api.Command.create(e));
          }),
          (this.request = e => {
            return r(t, void 0, void 0, function () {
              let t;
              const n = this;
              return o(this, r => {
                return (t = Number(
                  Math.random().toString().split(".")[1]
                ).toString(36)),
                (e.ref = t),
                [
                  2,
                  new Promise((r, o) => {
                    n.requestMap[t] = r;
                    try {
                      n.send(e);
                    } catch (i) {
                      delete n.requestMap[t], o(i);
                    }
                  }),
                ]
              ;
              });
            });
          }),
          (this.handleCommand = e => {
            t.onCommandListeners.forEach(t => {
              return t(e);
            }),
              e.ref &&
                t.requestMap[e.ref] &&
                (t.requestMap[e.ref](e), delete t.requestMap[e.ref]);
          }),
          (this.handleClose = e => {
            Object.keys(t.requestMap).forEach(n => {
              const r = i.api.Command.fromObject({});
              (r.channelClosed = e),
                t.requestMap[n](r),
                delete t.requestMap[n];
            }),
              (t.status = "closed"),
              (t.onCommandListeners = []);
          }),
          (this.id = n),
          (this.sendToContainer = a),
          (this.onUnrecoverableError = s),
          (this.status = "open"),
          (this.requestMap = {}),
          (this.onCommandListeners = []);
      };

      t.Channel = a;
    },
    "1vQi": function (e, t) {
      const n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

      const r = [
        "source",
        "protocol",
        "authority",
        "userInfo",
        "user",
        "password",
        "host",
        "port",
        "relative",
        "path",
        "directory",
        "file",
        "query",
        "anchor",
      ];

      e.exports = e => {
        const t = e;
        const o = e.indexOf("[");
        const i = e.indexOf("]");
        -1 != o &&
          -1 != i &&
          (e =
            e.substring(0, o) +
            e.substring(o, i).replace(/:/g, ";") +
            e.substring(i, e.length));
        for (var a = n.exec(e || ""), s = {}, c = 14; c--; )
          s[r[c]] = a[c] || "";
        return -1 != o &&
          -1 != i &&
          ((s.source = t),
          (s.host = s.host
            .substring(1, s.host.length - 1)
            .replace(/;/g, ":")),
          (s.authority = s.authority
            .replace("[", "")
            .replace("]", "")
            .replace(/;/g, ":")),
          (s.ipv6uri = !0)),
        (s.pathNames = ((e, t) => {
          const n = t.replace(/\/{2,9}/g, "/").split("/");
          ("/" != t.substr(0, 1) && 0 !== t.length) || n.splice(0, 1);
          "/" == t.substr(t.length - 1, 1) && n.splice(n.length - 1, 1);
          return n;
        })(0, s.path)),
        (s.queryKey = ((e, t) => {
          const n = {};
          return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, (e, t, r) => {
            t && (n[t] = r);
          }),
          n
        ;
        })(0, s.query)),
        s;
      };
    },
    21: function (e, t) {},
    "4A0d": function (e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return l;
      });
      const r = n("eVuF");
      const o = n.n(r);
      const i = n("doui");
      const a = n("q1tI");
      const s = n("qzUi");
      const c = n("IUvJ");
      const u = n("koLh");
      function l() {
        const e = a.useState(null);
        const t = Object(i.a)(e, 2);
        const n = t[0];
        const r = t[1];
        const l = a.useState(null);
        const A = Object(i.a)(l, 2);
        const h = A[0];
        const p = A[1];
        a.useEffect(
          () => {
            let e = !1;
            return o.a.all([Object(c.a)(), Object(s.a)()]).then(t => {
              const n = Object(i.a)(t, 1)[0];
              e || r(n);
            }),
            () => {
              e = !0;
            };
          },
          [r]
        );
        const f = a.useState(null);
        const d = Object(i.a)(f, 2);
        const b = d[0];
        const y = d[1];

        const g = Object(u.a)(
          ({width, height}) => {
            return p(
              width && height
                ? { width: width, height: height }
                : null
            );
          },
          { type: "throttle", wait: 100 }
        );

        a.useEffect(
          () => {
            return g(b);
          },
          [b, g]
        );
        const v = a.useState(null);
        const m = Object(i.a)(v, 2);
        const C = m[0];
        const w = m[1];
        return a.useEffect(
          () => {
            C && h && C.fit();
          },
          [h, C]
        ),
        a.useLayoutEffect(
          () => {
            if (b && n) {
              const e = n.xterm;
              const t = n.fitAddon;
              const r = n.searchAddon;
              const o = [];
              return e.open(b),
              o.push(() => {
                return e.dispose();
              }),
              w({
                onKey: e.onKey.bind(e),
                onData: e.onData.bind(e),
                onResize: e.onResize.bind(e),
                write: e.write.bind(e),
                fit() {
                  const e = b.getBoundingClientRect();
                  const n = e.width;
                  const r = e.height;
                  n > 0 && r > 0 && t.fit();
                },
                focus() {
                  return e.focus();
                },
                clear() {
                  return e.clear();
                },
                findPrevious(e) {
                  return r.findPrevious(e);
                },
                findNext(e) {
                  return r.findNext(e);
                },
                getSize() {
                  return { cols: e.cols, rows: e.rows };
                },
              }),
              () => {
                o.forEach(e => {
                  return e();
                });
              };
            }
          },
          [b, n]
        ),
        [C, y];
      }
    },
    "5FiH": function (e, t) {
      !(e => {
        "use strict";
        (t.encode = t => {
          let n;
          const r = new Uint8Array(t);
          const o = r.length;
          let i = "";
          for (n = 0; n < o; n += 3)
            (i += e[r[n] >> 2]),
              (i += e[((3 & r[n]) << 4) | (r[n + 1] >> 4)]),
              (i += e[((15 & r[n + 1]) << 2) | (r[n + 2] >> 6)]),
              (i += e[63 & r[n + 2]]);
          return o % 3 === 2
            ? (i = `${i.substring(0, i.length - 1)}=`)
            : o % 3 === 1 && (i = `${i.substring(0, i.length - 2)}==`),
          i
        ;
        }),
          (t.decode = t => {
          let n;
          let r;
          let o;
          let i;
          let a;
          let s = 0.75 * t.length;
          const c = t.length;
          let u = 0;
          "=" === t[t.length - 1] && (s--, "=" === t[t.length - 2] && s--);
          const l = new ArrayBuffer(s);
          const A = new Uint8Array(l);
          for (n = 0; n < c; n += 4)
            (r = e.indexOf(t[n])),
              (o = e.indexOf(t[n + 1])),
              (i = e.indexOf(t[n + 2])),
              (a = e.indexOf(t[n + 3])),
              (A[u++] = (r << 2) | (o >> 4)),
              (A[u++] = ((15 & o) << 4) | (i >> 2)),
              (A[u++] = ((3 & i) << 6) | (63 & a));
          return l;
        });
      })("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
    },
    "6bXu": function (e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return i;
      }),
        n.d(t, "b", () => {
          return a;
        });
      const r = "production";
      const o = "__ENABLE_ALL_SERVICES";
      function i() {
        return "test" === r || window[o];
      }
      function a() {
        window[o] = !0;
      }
    },
    "8VYC": function (e, t, n) {
      const r = n("O9h/");
      const o = n("r8CS");
      const i = n("E+TZ");
      const a = n("Yvos");
      const s = n("Aplp");
      const c = n("EuBs")("engine.io-client:polling");
      e.exports = l;
      const u = null != new (n("rx/v"))({ xdomain: !1 }).responseType;
      function l(e) {
        const t = e && e.forceBase64;
        (u && !t) || (this.supportsBinary = !1), r.call(this, e);
      }
      a(l, r),
        (l.prototype.name = "polling"),
        (l.prototype.doOpen = function () {
          this.poll();
        }),
        (l.prototype.pause = function (e) {
          const t = this;
          function n() {
            c("paused"), (t.readyState = "paused"), e();
          }
          if (((this.readyState = "pausing"), this.polling || !this.writable)) {
            let r = 0;
            this.polling &&
              (c("we are currently polling - waiting to pause"),
              r++,
              this.once("pollComplete", () => {
                c("pre-pause polling complete"), --r || n();
              })),
              this.writable ||
                (c("we are currently writing - waiting to pause"),
                r++,
                this.once("drain", () => {
                  c("pre-pause writing complete"), --r || n();
                }));
          } else n();
        }),
        (l.prototype.poll = function () {
          c("polling"), (this.polling = !0), this.doPoll(), this.emit("poll");
        }),
        (l.prototype.onData = function (e) {
          const t = this;
          c("polling got data %s", e);
          i.decodePayload(e, this.socket.binaryType, (e, n, r) => {
            if (
              ("opening" === t.readyState && "open" === e.type && t.onOpen(),
              "close" === e.type)
            )
              return t.onClose(), !1;
            t.onPacket(e);
          }),
            "closed" !== this.readyState &&
              ((this.polling = !1),
              this.emit("pollComplete"),
              "open" === this.readyState
                ? this.poll()
                : c('ignoring poll - transport state "%s"', this.readyState));
        }),
        (l.prototype.doClose = function () {
          const e = this;
          function t() {
            c("writing close packet"), e.write([{ type: "close" }]);
          }
          "open" === this.readyState
            ? (c("transport open - closing"), t())
            : (c("transport not open - deferring close"), this.once("open", t));
        }),
        (l.prototype.write = function (e) {
          const t = this;
          this.writable = !1;
          const n = () => {
            (t.writable = !0), t.emit("drain");
          };
          i.encodePayload(e, this.supportsBinary, e => {
            t.doWrite(e, n);
          });
        }),
        (l.prototype.uri = function () {
        let e = this.query || {};
        const t = this.secure ? "https" : "http";
        let n = "";
        return !1 !== this.timestampRequests && (e[this.timestampParam] = s()),
        this.supportsBinary || e.sid || (e.b64 = 1),
        (e = o.encode(e)),
        this.port &&
          (("https" === t && 443 !== Number(this.port)) ||
            ("http" === t && 80 !== Number(this.port))) &&
          (n = `:${this.port}`),
        e.length && (e = `?${e}`),
        `${t}://${this.hostname.includes(":")
    ? `[${this.hostname}]`
    : this.hostname}${n}${this.path}${e}`;
      });
    },
    AJXi(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getConnectionStr = t.getWebSocketClass = t.getNextRetryDelay = void 0);
      const r = n("CxY0");
      const o = 1.7;
      const i = 15e3;
      function a(e) {
        return (
          ("object" === typeof e || "function" === typeof e) &&
          !!e &&
          "OPEN" in e &&
          1 === e.OPEN
        );
      }
      (t.getNextRetryDelay = e => {
        const t = Math.floor(500 * Math.random());
        const n = 1e3 * o ** e;
        return Math.min(n, i) + t;
      }),
        (t.getWebSocketClass = e => {
          if (e) {
            if (!a(e))
              throw new Error(
                "Passed in WebSocket does not look like a standard WebSocket"
              );
            return e;
          }
          if ("undefined" !== typeof WebSocket) {
            if (!a(WebSocket))
              throw new Error(
                "Global WebSocket does not look like a standard WebSocket"
              );
            return WebSocket;
          }
          throw new Error(
            "Please pass in a WebSocket class or add it to global"
          );
        }),
        (t.getConnectionStr = ({gurl, token}, t) => {
          const n = r.parse(gurl);
          return t
            ? ((n.hostname = "gp-v2.herokuapp.com"),
              (n.host = "gp-v2.herokuapp.com"),
              (n.pathname =
                `/wsv2/${token}/${encodeURIComponent(gurl)}`))
            : (n.pathname = `/wsv2/${token}`),
          r.format(n);
        });
    },
    BQO9(e, t) {
      e.exports =
        "data:application/font-woff;base64,d09GRgABAAAAAAPUAA4AAAAABaQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAADuAAAABwAAAAchB3b2kdERUYAAAOUAAAAJAAAACYAKQAqT1MvMgAAAawAAAA5AAAAYENBXFNjbWFwAAAB+AAAAD4AAAFCAA/yUmN2dCAAAAI4AAAABAAAAAQAIgKIZ2FzcAAAA4wAAAAIAAAACAAAAAFnbHlmAAACSAAAAHwAAACIpDV7CWhlYWQAAAFEAAAAMQAAADYPsR5/aGhlYQAAAXgAAAAYAAAAJAYBBAVobXR4AAAB6AAAABAAAAAQDAAAomxvY2EAAAI8AAAACgAAAAoAbgBUbWF4cAAAAZAAAAAaAAAAIAAIADxuYW1lAAACxAAAAKgAAAFuIGxtGnBvc3QAAANsAAAAHgAAADKwqUy9eJxjYGQAg75rH9bE89t8ZeBmAfOvm9l/AdPWs54wKDEwMDEwrQJyOYAMIAAARtIKWgAAAHicY2BkYGBhAAEIycTAwMiAClgAAWwAEXicY2BkYGBgYeBhYGYAASYGBNADEQADJABFAAB4nGNgZmFgnMDAysDA1MDMAAQNEJoJiBkZ0ACjABInIM01hcHh3fJ3y1nAfBaoGiQlCgyMAFRaBy8AAAAEAAAiAAAAAAQAAAAEAACAeJxjYGBgZoBgGQZGBhCwAfIYwXwWBgUgzQKEQP675f//Q0jBGKhKBkY2BhiTgZEJSDAxoAJGhmEPAP2eCE8AAAAiAogAAAAqACoAKgBEAAB4nGNgYlBiYGA0YlrFwMzAzqC3kZFB32YTOwvDW6ONbKx3bDYxMwGZDBuZQcKsIOFN7GyMf2w2MYLEjQUVBdWNBZWVGAXenTnDtOpvmBJTGgPQpAYGBiYGJgewmdxA80WNTVmBmBmIGR0O/Gs4cOAAI4iAUAwMDAARHSJHeJyNzU0KgzAUBOCJRqE/dFkK3WTnolT0FL1A6QUki4AkEl30GD1Az9BVD9hRX6HQjcbAl5dhAmCHFxS+XyJW2OAoHmcncYotLmLNTCvO6Ic4p99MKr2S1tkKe2p2wlWIUxxwFmtmruKMvotz+jlWRVh0fNZh4G4Q4NFzbLvWDa4Jnof19P8mzX/WSHhJ4Y2ZyKmbbg1qlKg4trF3wZu6rBb1fACKDTLseJxjYGJABowM6IAFLMrEyMRempfp6upoDgAL4gJjAAAAAQAB//8AAHicY2BkYGDgAWIxBjkGJgZGBmYgZGRgAYowATEjBAMACK0AVAAAAAEAAAAA1awBAQAAAADXNj/0AAAAANc7muQ=";
    },
    "E+TZ": function (e, t, n) {
      let r;
      const o = n("WDr1");
      const i = n("WLGk");
      const a = n("ypnn");
      const s = n("zMFY");
      const c = n("X6w4");
      "undefined" !== typeof ArrayBuffer && (r = n("5FiH"));

      const u =
                "undefined" !== typeof navigator &&
                /Android/i.test(navigator.userAgent);

      const l =
        "undefined" !== typeof navigator &&
        /PhantomJS/i.test(navigator.userAgent);

      const A = u || l;
      t.protocol = 3;

      const h = (t.packets = {
                open: 0,
                close: 1,
                ping: 2,
                pong: 3,
                message: 4,
                upgrade: 5,
                noop: 6,
              });

      const p = o(h);
      const f = { type: "error", data: "parser error" };
      const d = n("Qz/J");
      function b(e, t, n) {
        for (
          let r = new Array(e.length),
              o = s(e.length, n),
              i = (e, n, o) => {
                t(n, (t, n) => {
                  (r[e] = n), o(t, r);
                });
              },
              a = 0;
          a < e.length;
          a++
        )
          i(a, e[a], o);
      }
      (t.encodePacket = (e, n, r, o) => {
        "function" === typeof n && ((o = n), (n = !1)),
          "function" === typeof r && ((o = r), (r = null));
        const i = void 0 === e.data ? void 0 : e.data.buffer || e.data;
        if ("undefined" !== typeof ArrayBuffer && i instanceof ArrayBuffer)
          return ((e, n, r) => {
            if (!n) return t.encodeBase64Packet(e, r);
            const o = e.data;
            const i = new Uint8Array(o);
            const a = new Uint8Array(1 + o.byteLength);
            a[0] = h[e.type];
            for (let s = 0; s < i.length; s++) a[s + 1] = i[s];
            return r(a.buffer);
          })(e, n, o);
        if ("undefined" !== typeof d && i instanceof d)
          return ((e, n, r) => {
            if (!n) return t.encodeBase64Packet(e, r);
            if (A)
              return ((e, n, r) => {
                if (!n) return t.encodeBase64Packet(e, r);
                const o = new FileReader();
                return (o.onload = () => {
                  t.encodePacket({ type: e.type, data: o.result }, n, !0, r);
                }),
                o.readAsArrayBuffer(e.data)
              ;
              })(e, n, r);
            const o = new Uint8Array(1);
            o[0] = h[e.type];
            const i = new d([o.buffer, e.data]);
            return r(i);
          })(e, n, o);
        if (i && i.base64)
          return (({type, data}, n) => {
            const r = `b${t.packets[type]}${data.data}`;
            return n(r);
          })(e, o);
        let a = h[e.type];
        return void 0 !== e.data &&
          (a += r
            ? c.encode(String(e.data), { strict: !1 })
            : String(e.data)),
        o(`${a}`)
      ;
      }),
        (t.encodeBase64Packet = ({type, data}, n) => {
        let r;
        let o = `b${t.packets[type]}`;
        if ("undefined" !== typeof d && data instanceof d) {
          const i = new FileReader();
          return (i.onload = () => {
            const e = i.result.split(",")[1];
            n(o + e);
          }),
          i.readAsDataURL(data);
        }
        try {
          r = String.fromCharCode.apply(null, new Uint8Array(data));
        } catch (u) {
          for (
            var a = new Uint8Array(data), s = new Array(a.length), c = 0;
            c < a.length;
            c++
          )
            s[c] = a[c];
          r = String.fromCharCode.apply(null, s);
        }
        return (o += btoa(r)), n(o);
      }),
        (t.decodePacket = (e, n, r) => {
          if (void 0 === e) return f;
          if ("string" === typeof e) {
            if ("b" === e.charAt(0))
              return t.decodeBase64Packet(e.substr(1), n);
            if (
              r &&
              !1 ===
                (e = (e => {
                  try {
                    e = c.decode(e, { strict: !1 });
                  } catch (t) {
                    return !1;
                  }
                  return e;
                })(e))
            )
              return f;
            var o = e.charAt(0);
            return Number(o) == o && p[o]
              ? e.length > 1
                ? { type: p[o], data: e.substring(1) }
                : { type: p[o] }
              : f;
          }
          o = new Uint8Array(e)[0];
          let i = a(e, 1);
          return d && "blob" === n && (i = new d([i])), { type: p[o], data: i };
        }),
        (t.decodeBase64Packet = (e, t) => {
          const n = p[e.charAt(0)];
          if (!r) return { type: n, data: { base64: !0, data: e.substr(1) } };
          let o = r.decode(e.substr(1));
          return "blob" === t && d && (o = new d([o])), { type: n, data: o };
        }),
        (t.encodePayload = (e, n, r) => {
          "function" === typeof n && ((r = n), (n = null));
          const o = i(e);
          if (n && o)
            return d && !A
              ? t.encodePayloadAsBlob(e, r)
              : t.encodePayloadAsArrayBuffer(e, r);
          if (!e.length) return r("0:");
          b(
            e,
            (e, r) => {
              t.encodePacket(e, !!o && n, !1, e => {
                r(null, (e => {
                  return `${e.length}:${e}`;
                })(e));
              });
            },
            (e, t) => {
              return r(t.join(""));
            }
          );
        }),
        (t.decodePayload = (e, n, r) => {
          if ("string" !== typeof e) return t.decodePayloadAsBinary(e, n, r);
          let o;
          if (("function" === typeof n && ((r = n), (n = null)), "" === e))
            return r(f, 0, 1);
          for (var i, a, s = "", c = 0, u = e.length; c < u; c++) {
            const l = e.charAt(c);
            if (":" === l) {
              if ("" === s || s != (i = Number(s))) return r(f, 0, 1);
              if (s != (a = e.substr(c + 1, i)).length) return r(f, 0, 1);
              if (a.length) {
                if (
                  ((o = t.decodePacket(a, n, !1)),
                  f.type === o.type && f.data === o.data)
                )
                  return r(f, 0, 1);
                if (!1 === r(o, c + i, u)) return;
              }
              (c += i), (s = "");
            } else s += l;
          }
          return "" !== s ? r(f, 0, 1) : void 0;
        }),
        (t.encodePayloadAsArrayBuffer = (e, n) => {
          if (!e.length) return n(new ArrayBuffer(0));
          b(
            e,
            (e, n) => {
              t.encodePacket(e, !0, !0, e => {
                return n(null, e);
              });
            },
            (e, t) => {
              const r = t.reduce((e, t) => {
                  let n;
                  return (
                    e +
                    (n =
                      "string" === typeof t
                        ? t.length
                        : t.byteLength).toString().length +
                    n +
                    2
                  );
                }, 0);

              const o = new Uint8Array(r);
              let i = 0;
              return t.forEach(e => {
                const t = "string" === typeof e;
                let n = e;
                if (t) {
                  for (
                    var r = new Uint8Array(e.length), a = 0;
                    a < e.length;
                    a++
                  )
                    r[a] = e.charCodeAt(a);
                  n = r.buffer;
                }
                o[i++] = t ? 0 : 1;
                const s = n.byteLength.toString();
                for (a = 0; a < s.length; a++) o[i++] = parseInt(s[a]);
                o[i++] = 255;
                for (r = new Uint8Array(n), a = 0; a < r.length; a++)
                  o[i++] = r[a];
              }),
              n(o.buffer);
            }
          );
        }),
        (t.encodePayloadAsBlob = (e, n) => {
          b(
            e,
            (e, n) => {
              t.encodePacket(e, !0, !0, e => {
                const t = new Uint8Array(1);
                if (((t[0] = 1), "string" === typeof e)) {
                  for (
                    var r = new Uint8Array(e.length), o = 0;
                    o < e.length;
                    o++
                  )
                    r[o] = e.charCodeAt(o);
                  (e = r.buffer), (t[0] = 0);
                }

                const i = (e instanceof ArrayBuffer
                          ? e.byteLength
                          : e.size
                        ).toString();

                const a = new Uint8Array(i.length + 1);
                for (o = 0; o < i.length; o++) a[o] = parseInt(i[o]);
                if (((a[i.length] = 255), d)) {
                  const s = new d([t.buffer, a.buffer, e]);
                  n(null, s);
                }
              });
            },
            (e, t) => {
              return n(new d(t));
            }
          );
        }),
        (t.decodePayloadAsBinary = (e, n, r) => {
          "function" === typeof n && ((r = n), (n = null));
          for (var o = e, i = []; o.byteLength > 0; ) {
            for (
              var s = new Uint8Array(o), c = 0 === s[0], u = "", l = 1;
              255 !== s[l];
              l++
            ) {
              if (u.length > 310) return r(f, 0, 1);
              u += s[l];
            }
            (o = a(o, 2 + u.length)), (u = parseInt(u));
            let A = a(o, 0, u);
            if (c)
              try {
                A = String.fromCharCode.apply(null, new Uint8Array(A));
              } catch (d) {
                const h = new Uint8Array(A);
                A = "";
                for (l = 0; l < h.length; l++) A += String.fromCharCode(h[l]);
              }
            i.push(A), (o = a(o, u));
          }
          const p = i.length;
          i.forEach((e, o) => {
            r(t.decodePacket(e, n, !0), o, p);
          });
        });
    },
    Emkz(e, t, n) {
      "use strict";
      let r =
        (this && this.__assign) ||
        function(...args) {
          return (r =
            Object.assign ||
            function (e) {
              for (let t, n = 1, r = arguments.length; n < r; n++)
                for (const o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, args);
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.EIOCompat = t.splitHref = void 0);
      const o = n("GVdP");
      const i = n("CxY0");
      function a(e) {
        const t = i.parse(e);
        const n = t.protocol;
        const r = t.slashes;
        const o = t.auth;
        const a = t.host;
        const s = t.pathname;
        return {
          uri: i.format({
            protocol: n,
            slashes: r,
            auth: o,
            host: a,
            query: { ordered: "1" },
          }),
          path: null != s ? s : "/",
        };
      }
      t.splitHref = a;
      const s = 4;

      const c = new Map([
        ["opening", 0],
        ["open", 1],
        ["closing", 2],
        ["closed", 3],
      ]);

      function u(e) {
        return "undefined" !== typeof window
          ? new MessageEvent("message", { data: e })
          : { type: "message", data: e };
      }
      function l(e, t) {
        return "undefined" !== typeof window
          ? new Event(e, t)
          : r({ type: e }, t);
      }
      const A = (() => {
        function e(e, t) {
          const n = this;
          if (
            ((this.CLOSED = 3),
            (this.CLOSING = 2),
            (this.OPEN = 1),
            (this.CONNECTING = 0),
            t)
          )
            throw new Error("Passing protocols is not implemented");
          const i = a(e);
          const c = i.uri;
          const A = i.path;
          (this.onopen = null),
            (this.onclose = null),
            (this.onmessage = null),
            (this.onerror = null),
            (this.eioSocket = o(c, { path: A, transports: ["polling"] })),
            (this.url = e),
            (this.extensions = ""),
            (this.protocol = ""),
            (this.bufferedAmount = 0),
            (this.readyState = 0),
            (this.incomingSequence = 0),
            (this.outOfOrderQueue = {}),
            (this.outgoingSequence = 0),
            this.setReadyState(),
            this.eioSocket.on("open", () => {
              if ((n.setReadyState(), null != n.onopen)) {
                const e = l("open");
                n.onopen.call(n, e);
              }
            }),
            this.eioSocket.on("close", e => {
              if ((n.setReadyState(), null != n.onclose)) {
                const t =
                  ((o = { reason: e, code: 1001, wasClean: !1 }),
                  "undefined" !== typeof window
                    ? new CloseEvent("close", o)
                    : r({ type: "close" }, o));
                n.onclose.call(n, t);
              }
              var o;
            }),
            this.eioSocket.on("message", e => {
              if ((n.setReadyState(), null != n.onmessage)) {
                if ("string" === typeof e)
                  throw new Error("expected data to be ArrayBuffer not string");
                const t = new DataView(e).getUint32(0);
                const r = e.slice(s);
                if (n.incomingSequence === t) {
                  n.incomingSequence = t + 1;
                  const o = u(r);
                  const i = n.onmessage.bind(n);
                  i(o);
                  const a = Object.keys(n.outOfOrderQueue);
                  a.length > 0 &&
                    (a.sort().forEach(e => {
                      i(u(n.outOfOrderQueue[+e])),
                        (n.incomingSequence = +e + 1);
                    }),
                    (n.outOfOrderQueue = {}));
                } else n.outOfOrderQueue[t] = r;
              }
            }),
            this.eioSocket.on("error", () => {
              if ((n.setReadyState(), null != n.onerror)) {
                const e = l("error");
                n.onerror.call(n, e);
              }
            });
        }
        return (e.prototype.setReadyState = function () {
          this.readyState = c.get(this.eioSocket.readyState);
        }),
        (e.prototype.send = function (e) {
          const t = new ArrayBuffer(s + e.byteLength);
          new Uint8Array(t).set(new Uint8Array(e), s),
            new DataView(t).setUint32(0, this.outgoingSequence),
            (this.outgoingSequence += 1),
            this.eioSocket.send(t),
            this.setReadyState();
        }),
        (e.prototype.close = function () {
          (this.onmessage = null),
            this.eioSocket.close(),
            this.setReadyState();
        }),
        (e.prototype.addEventListener = () => {
          throw new Error(
            "Not Implemented, please use onmessage, onopen, onerror, or onclose"
          );
        }),
        (e.prototype.removeEventListener = () => {
          throw new Error("Not Implemented");
        }),
        (e.prototype.dispatchEvent = () => {
          throw new Error("Not Implemented");
        }),
        Object.defineProperty(e.prototype, "binaryType", {
          get() {
            return this.eioSocket.binaryType || "blob";
          },
          set(e) {
            this.eioSocket.binaryType = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.CLOSED = 3),
        (e.CLOSING = 2),
        (e.OPEN = 1),
        (e.CONNECTING = 0),
        e;
      })();
      t.EIOCompat = A;
    },
    EuBs(e, t, n) {
      ((r => {
        function o() {
          let e;
          try {
            e = t.storage.debug;
          } catch (n) {}
          return (
            !e && "undefined" !== typeof r && "env" in r && (e = r.env.DEBUG), e
          );
        }
        ((t = e.exports = n("m+yM")).log = (...args) => {
          return "object" === typeof console &&
          console.log &&
          Function.prototype.apply.call(console.log, console, args);
        }),
          (t.formatArgs = function (e) {
          const n = this.useColors;
          if (
            ((e[0] =
              `${(n ? "%c" : "") +
this.namespace +
(n ? " %c" : " ") +
e[0] +
(n ? "%c " : " ")}+${t.humanize(this.diff)}`),
            !n)
          )
            return;
          const r = `color: ${this.color}`;
          e.splice(1, 0, r, "color: inherit");
          let o = 0;
          let i = 0;
          e[0].replace(/%[a-zA-Z%]/g, e => {
            "%%" !== e && (o++, "%c" === e && (i = o));
          }),
            e.splice(i, 0, r);
        }),
          (t.save = e => {
            try {
              null == e ? t.storage.removeItem("debug") : (t.storage.debug = e);
            } catch (n) {}
          }),
          (t.load = o),
          (t.useColors = () => {
            if (
              "undefined" !== typeof window &&
              window.process &&
              "renderer" === window.process.type
            )
              return !0;
            if (
              "undefined" !== typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
            )
              return !1;
            return (
              ("undefined" !== typeof document &&
                document.documentElement &&
                document.documentElement.style &&
                document.documentElement.style.WebkitAppearance) ||
              ("undefined" !== typeof window &&
                window.console &&
                (window.console.firebug ||
                  (window.console.exception && window.console.table))) ||
              ("undefined" !== typeof navigator &&
                navigator.userAgent &&
                navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                parseInt(RegExp.$1, 10) >= 31) ||
              ("undefined" !== typeof navigator &&
                navigator.userAgent &&
                navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
            );
          }),
          (t.storage =
            "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : (() => {
                  try {
                    return window.localStorage;
                  } catch (e) {}
                })()),
          (t.colors = [
            "#0000CC",
            "#0000FF",
            "#0033CC",
            "#0033FF",
            "#0066CC",
            "#0066FF",
            "#0099CC",
            "#0099FF",
            "#00CC00",
            "#00CC33",
            "#00CC66",
            "#00CC99",
            "#00CCCC",
            "#00CCFF",
            "#3300CC",
            "#3300FF",
            "#3333CC",
            "#3333FF",
            "#3366CC",
            "#3366FF",
            "#3399CC",
            "#3399FF",
            "#33CC00",
            "#33CC33",
            "#33CC66",
            "#33CC99",
            "#33CCCC",
            "#33CCFF",
            "#6600CC",
            "#6600FF",
            "#6633CC",
            "#6633FF",
            "#66CC00",
            "#66CC33",
            "#9900CC",
            "#9900FF",
            "#9933CC",
            "#9933FF",
            "#99CC00",
            "#99CC33",
            "#CC0000",
            "#CC0033",
            "#CC0066",
            "#CC0099",
            "#CC00CC",
            "#CC00FF",
            "#CC3300",
            "#CC3333",
            "#CC3366",
            "#CC3399",
            "#CC33CC",
            "#CC33FF",
            "#CC6600",
            "#CC6633",
            "#CC9900",
            "#CC9933",
            "#CCCC00",
            "#CCCC33",
            "#FF0000",
            "#FF0033",
            "#FF0066",
            "#FF0099",
            "#FF00CC",
            "#FF00FF",
            "#FF3300",
            "#FF3333",
            "#FF3366",
            "#FF3399",
            "#FF33CC",
            "#FF33FF",
            "#FF6600",
            "#FF6633",
            "#FF9900",
            "#FF9933",
            "#FFCC00",
            "#FFCC33",
          ]),
          (t.formatters.j = e => {
            try {
              return JSON.stringify(e);
            } catch (t) {
              return `[UnexpectedJSONParseError]: ${t.message}`;
            }
          }),
          t.enable(o());
      }).call(this, n("8oxB")));
    },
    "Fz/E": function (e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return o;
      });
      const r = n("+qE3");
      function o() {
        return new r.EventEmitter();
      }
    },
    GVdP(e, t, n) {
      (e.exports = n("Gknm")), (e.exports.parser = n("E+TZ"));
    },
    Gknm(e, t, n) {
      const r = n("KPuF");
      const o = n("gnSh");
      const i = n("EuBs")("engine.io-client:socket");
      const a = n("7jRU");
      const s = n("E+TZ");
      const c = n("1vQi");
      const u = n("r8CS");
      function l(e, t) {
        if (!(this instanceof l)) return new l(e, t);
        (t = t || {}),
          e && "object" === typeof e && ((t = e), (e = null)),
          e
            ? ((e = c(e)),
              (t.hostname = e.host),
              (t.secure = "https" === e.protocol || "wss" === e.protocol),
              (t.port = e.port),
              e.query && (t.query = e.query))
            : t.host && (t.hostname = c(t.host).host),
          (this.secure =
            null != t.secure
              ? t.secure
              : "undefined" !== typeof location &&
                "https:" === location.protocol),
          t.hostname && !t.port && (t.port = this.secure ? "443" : "80"),
          (this.agent = t.agent || !1),
          (this.hostname =
            t.hostname ||
            ("undefined" !== typeof location
              ? location.hostname
              : "localhost")),
          (this.port =
            t.port ||
            ("undefined" !== typeof location && location.port
              ? location.port
              : this.secure
              ? 443
              : 80)),
          (this.query = t.query || {}),
          "string" === typeof this.query && (this.query = u.decode(this.query)),
          (this.upgrade = !1 !== t.upgrade),
          (this.path = `${(t.path || "/engine.io").replace(/\/$/, "")}/`),
          (this.forceJSONP = !!t.forceJSONP),
          (this.jsonp = !1 !== t.jsonp),
          (this.forceBase64 = !!t.forceBase64),
          (this.enablesXDR = !!t.enablesXDR),
          (this.withCredentials = !1 !== t.withCredentials),
          (this.timestampParam = t.timestampParam || "t"),
          (this.timestampRequests = t.timestampRequests),
          (this.transports = t.transports || ["polling", "websocket"]),
          (this.transportOptions = t.transportOptions || {}),
          (this.readyState = ""),
          (this.writeBuffer = []),
          (this.prevBufferLen = 0),
          (this.policyPort = t.policyPort || 843),
          (this.rememberUpgrade = t.rememberUpgrade || !1),
          (this.binaryType = null),
          (this.onlyBinaryUpgrades = t.onlyBinaryUpgrades),
          (this.perMessageDeflate =
            !1 !== t.perMessageDeflate && (t.perMessageDeflate || {})),
          !0 === this.perMessageDeflate && (this.perMessageDeflate = {}),
          this.perMessageDeflate &&
            null == this.perMessageDeflate.threshold &&
            (this.perMessageDeflate.threshold = 1024),
          (this.pfx = t.pfx || null),
          (this.key = t.key || null),
          (this.passphrase = t.passphrase || null),
          (this.cert = t.cert || null),
          (this.ca = t.ca || null),
          (this.ciphers = t.ciphers || null),
          (this.rejectUnauthorized =
            void 0 === t.rejectUnauthorized || t.rejectUnauthorized),
          (this.forceNode = !!t.forceNode),
          (this.isReactNative =
            "undefined" !== typeof navigator &&
            "string" === typeof navigator.product &&
            "reactnative" === navigator.product.toLowerCase()),
          ("undefined" === typeof self || this.isReactNative) &&
            (t.extraHeaders &&
              Object.keys(t.extraHeaders).length > 0 &&
              (this.extraHeaders = t.extraHeaders),
            t.localAddress && (this.localAddress = t.localAddress)),
          (this.id = null),
          (this.upgrades = null),
          (this.pingInterval = null),
          (this.pingTimeout = null),
          (this.pingIntervalTimer = null),
          (this.pingTimeoutTimer = null),
          this.open();
      }
      (e.exports = l),
        (l.priorWebsocketSuccess = !1),
        o(l.prototype),
        (l.protocol = s.protocol),
        (l.Socket = l),
        (l.Transport = n("O9h/")),
        (l.transports = n("KPuF")),
        (l.parser = n("E+TZ")),
        (l.prototype.createTransport = function (e) {
          i('creating transport "%s"', e);
          const t = (e => {
            const t = {};
            for (const n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            return t;
          })(this.query);
          (t.EIO = s.protocol), (t.transport = e);
          const n = this.transportOptions[e] || {};
          return (
            this.id && (t.sid = this.id),
            new r[e]({
              query: t,
              socket: this,
              agent: n.agent || this.agent,
              hostname: n.hostname || this.hostname,
              port: n.port || this.port,
              secure: n.secure || this.secure,
              path: n.path || this.path,
              forceJSONP: n.forceJSONP || this.forceJSONP,
              jsonp: n.jsonp || this.jsonp,
              forceBase64: n.forceBase64 || this.forceBase64,
              enablesXDR: n.enablesXDR || this.enablesXDR,
              withCredentials: n.withCredentials || this.withCredentials,
              timestampRequests: n.timestampRequests || this.timestampRequests,
              timestampParam: n.timestampParam || this.timestampParam,
              policyPort: n.policyPort || this.policyPort,
              pfx: n.pfx || this.pfx,
              key: n.key || this.key,
              passphrase: n.passphrase || this.passphrase,
              cert: n.cert || this.cert,
              ca: n.ca || this.ca,
              ciphers: n.ciphers || this.ciphers,
              rejectUnauthorized:
                n.rejectUnauthorized || this.rejectUnauthorized,
              perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate,
              extraHeaders: n.extraHeaders || this.extraHeaders,
              forceNode: n.forceNode || this.forceNode,
              localAddress: n.localAddress || this.localAddress,
              requestTimeout: n.requestTimeout || this.requestTimeout,
              protocols: n.protocols || void 0,
              isReactNative: this.isReactNative,
            })
          );
        }),
        (l.prototype.open = function () {
          let e;
          if (
            this.rememberUpgrade &&
            l.priorWebsocketSuccess &&
            this.transports.includes("websocket")
          )
            e = "websocket";
          else {
            if (0 === this.transports.length) {
              const t = this;
              return void setTimeout(() => {
                t.emit("error", "No transports available");
              }, 0);
            }
            e = this.transports[0];
          }
          this.readyState = "opening";
          try {
            e = this.createTransport(e);
          } catch (n) {
            return this.transports.shift(), void this.open();
          }
          e.open(), this.setTransport(e);
        }),
        (l.prototype.setTransport = function (e) {
          i("setting transport %s", e.name);
          const t = this;
          this.transport &&
            (i("clearing existing transport %s", this.transport.name),
            this.transport.removeAllListeners()),
            (this.transport = e),
            e
              .on("drain", () => {
                t.onDrain();
              })
              .on("packet", e => {
                t.onPacket(e);
              })
              .on("error", e => {
                t.onError(e);
              })
              .on("close", () => {
                t.onClose("transport close");
              });
        }),
        (l.prototype.probe = function (e) {
        i('probing transport "%s"', e);
        let t = this.createTransport(e, { probe: 1 });
        let n = !1;
        const r = this;
        function o() {
          if (r.onlyBinaryUpgrades) {
            const o = !this.supportsBinary && r.transport.supportsBinary;
            n = n || o;
          }
          n ||
            (i('probe transport "%s" opened', e),
            t.send([{ type: "ping", data: "probe" }]),
            t.once("packet", ({type, data}) => {
              if (!n)
                if ("pong" === type && "probe" === data) {
                  if (
                    (i('probe transport "%s" pong', e),
                    (r.upgrading = !0),
                    r.emit("upgrading", t),
                    !t)
                  )
                    return;
                  (l.priorWebsocketSuccess = "websocket" === t.name),
                    i('pausing current transport "%s"', r.transport.name),
                    r.transport.pause(() => {
                      n ||
                        ("closed" !== r.readyState &&
                          (i("changing transport and sending upgrade packet"),
                          h(),
                          r.setTransport(t),
                          t.send([{ type: "upgrade" }]),
                          r.emit("upgrade", t),
                          (t = null),
                          (r.upgrading = !1),
                          r.flush()));
                    });
                } else {
                  i('probe transport "%s" failed', e);
                  const a = new Error("probe error");
                  (a.transport = t.name), r.emit("upgradeError", a);
                }
            }));
        }
        function a() {
          n || ((n = !0), h(), t.close(), (t = null));
        }
        function s(n) {
          const o = new Error(`probe error: ${n}`);
          (o.transport = t.name),
            a(),
            i('probe transport "%s" failed because of error: %s', e, n),
            r.emit("upgradeError", o);
        }
        function c() {
          s("transport closed");
        }
        function u() {
          s("socket closed");
        }
        function A({name}) {
          t &&
            name !== t.name &&
            (i('"%s" works - aborting "%s"', name, t.name), a());
        }
        function h() {
          t.removeListener("open", o),
            t.removeListener("error", s),
            t.removeListener("close", c),
            r.removeListener("close", u),
            r.removeListener("upgrading", A);
        }
        (l.priorWebsocketSuccess = !1),
          t.once("open", o),
          t.once("error", s),
          t.once("close", c),
          this.once("close", u),
          this.once("upgrading", A),
          t.open();
      }),
        (l.prototype.onOpen = function () {
          if (
            (i("socket open"),
            (this.readyState = "open"),
            (l.priorWebsocketSuccess = "websocket" === this.transport.name),
            this.emit("open"),
            this.flush(),
            "open" === this.readyState && this.upgrade && this.transport.pause)
          ) {
            i("starting upgrade probes");
            for (let e = 0, t = this.upgrades.length; e < t; e++)
              this.probe(this.upgrades[e]);
          }
        }),
        (l.prototype.onPacket = function (e) {
          if (
            "opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState
          )
            switch (
              (i('socket receive: type "%s", data "%s"', e.type, e.data),
              this.emit("packet", e),
              this.emit("heartbeat"),
              e.type)
            ) {
              case "open":
                this.onHandshake(JSON.parse(e.data));
                break;
              case "pong":
                this.setPing(), this.emit("pong");
                break;
              case "error":
                const t = new Error("server error");
                (t.code = e.data), this.onError(t);
                break;
              case "message":
                this.emit("data", e.data), this.emit("message", e.data);
            }
          else
            i('packet received with socket readyState "%s"', this.readyState);
        }),
        (l.prototype.onHandshake = function (e) {
          this.emit("handshake", e),
            (this.id = e.sid),
            (this.transport.query.sid = e.sid),
            (this.upgrades = this.filterUpgrades(e.upgrades)),
            (this.pingInterval = e.pingInterval),
            (this.pingTimeout = e.pingTimeout),
            this.onOpen(),
            "closed" !== this.readyState &&
              (this.setPing(),
              this.removeListener("heartbeat", this.onHeartbeat),
              this.on("heartbeat", this.onHeartbeat));
        }),
        (l.prototype.onHeartbeat = function (e) {
          clearTimeout(this.pingTimeoutTimer);
          const t = this;
          t.pingTimeoutTimer = setTimeout(() => {
            "closed" !== t.readyState && t.onClose("ping timeout");
          }, e || t.pingInterval + t.pingTimeout);
        }),
        (l.prototype.setPing = function () {
          const e = this;
          clearTimeout(e.pingIntervalTimer),
            (e.pingIntervalTimer = setTimeout(() => {
              i(
                "writing ping packet - expecting pong within %sms",
                e.pingTimeout
              ),
                e.ping(),
                e.onHeartbeat(e.pingTimeout);
            }, e.pingInterval));
        }),
        (l.prototype.ping = function () {
          const e = this;
          this.sendPacket("ping", () => {
            e.emit("ping");
          });
        }),
        (l.prototype.onDrain = function () {
          this.writeBuffer.splice(0, this.prevBufferLen),
            (this.prevBufferLen = 0),
            0 === this.writeBuffer.length ? this.emit("drain") : this.flush();
        }),
        (l.prototype.flush = function () {
          "closed" !== this.readyState &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length &&
            (i("flushing %d packets in socket", this.writeBuffer.length),
            this.transport.send(this.writeBuffer),
            (this.prevBufferLen = this.writeBuffer.length),
            this.emit("flush"));
        }),
        (l.prototype.write = l.prototype.send = function (e, t, n) {
          return this.sendPacket("message", e, t, n), this;
        }),
        (l.prototype.sendPacket = function (e, t, n, r) {
          if (
            ("function" === typeof t && ((r = t), (t = void 0)),
            "function" === typeof n && ((r = n), (n = null)),
            "closing" !== this.readyState && "closed" !== this.readyState)
          ) {
            (n = n || {}).compress = !1 !== n.compress;
            const o = { type: e, data: t, options: n };
            this.emit("packetCreate", o),
              this.writeBuffer.push(o),
              r && this.once("flush", r),
              this.flush();
          }
        }),
        (l.prototype.close = function () {
          if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            var e = this;
            this.writeBuffer.length
              ? this.once("drain", function () {
                  this.upgrading ? r() : t();
                })
              : this.upgrading
              ? r()
              : t();
          }
          function t() {
            e.onClose("forced close"),
              i("socket closing - telling transport to close"),
              e.transport.close();
          }
          function n() {
            e.removeListener("upgrade", n),
              e.removeListener("upgradeError", n),
              t();
          }
          function r() {
            e.once("upgrade", n), e.once("upgradeError", n);
          }
          return this;
        }),
        (l.prototype.onError = function (e) {
          i("socket error %j", e),
            (l.priorWebsocketSuccess = !1),
            this.emit("error", e),
            this.onClose("transport error", e);
        }),
        (l.prototype.onClose = function (e, t) {
          if (
            "opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState
          ) {
            i('socket close with reason: "%s"', e);
            clearTimeout(this.pingIntervalTimer),
              clearTimeout(this.pingTimeoutTimer),
              this.transport.removeAllListeners("close"),
              this.transport.close(),
              this.transport.removeAllListeners(),
              (this.readyState = "closed"),
              (this.id = null),
              this.emit("close", e, t),
              (this.writeBuffer = []),
              (this.prevBufferLen = 0);
          }
        }),
        (l.prototype.filterUpgrades = function (e) {
          for (var t = [], n = 0, r = e.length; n < r; n++)
            ~a(this.transports, e[n]) && t.push(e[n]);
          return t;
        });
    },
    HADy(e, t, n) {
      "use strict";
      let r;
      let o;
      n.d(t, "a", () => {
        return r;
      }), n.d(t, "b", () => {
        return o;
      }), (e => {
        (e.STATE_CHANGE = "STATE_CHANGE"), (e.OUTPUT = "OUTPUT");
      })(r || (r = {})), (e => {
        (e.OFFLINE = "OFFLINE"),
          (e.IDLE = "IDLE"),
          (e.RUNNING = "RUNNING"),
          (e.STOPPING = "STOPPING");
      })(o || (o = {}));
    },
    HiSk(e, t) {
      e.exports =
        "undefined" !== typeof self
          ? self
          : "undefined" !== typeof window
          ? window
          : Function("return this")();
    },
    IUvJ(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return u;
      });
      const r = n("ln6h");
      const o = n.n(r);
      const i = n("eVuF");
      const a = n.n(i);
      const s = n("doui");

      const c = {
        cursorBlink: !1,
        scrollback: 1e3,
        tabStopWidth: 4,
        fontFamily:
          'Monaco, "Ubuntu Mono", "Courier New", Courier, replit-icons, monospace',
        fontSize: 14,
        lineHeight: 1,
        bellStyle: "sound",
        drawBoldTextInBrightColors: !1,
        theme: {
          background: n("n5mk").a.color.brand.darkBlue,
          red: "#FF0066",
          green: "#66FF00",
          yellow: "#FF6600",
          brightYellow: "#FFCC00",
        },
      };

      function u() {
        let e;
        let t;
        let r;
        let i;
        let u;
        let l;
        let A;
        let h;
        let p;
        let f;
        return o.a.async(d => {
          for (;;)
            switch ((d.prev = d.next)) {
              case 0:
                return (d.next = 2),
                o.a.awrap(
                  a.a.all([
                    n
                      .e(326)
                      .then(n.t.bind(null, "/POA", 7))
                      .then(e => {
                        return e;
                      }),
                    n
                      .e(323)
                      .then(n.t.bind(null, "R9As", 7))
                      .then(e => {
                        return e;
                      }),
                    n
                      .e(324)
                      .then(n.t.bind(null, "0fl0", 7))
                      .then(e => {
                        return e;
                      }),
                    n
                      .e(325)
                      .then(n.t.bind(null, "QIth", 7))
                      .then(e => {
                        return e;
                      }),
                  ])
                )
              ;
              case 2:
                return (
                  (e = d.sent),
                  (t = Object(s.a)(e, 4)),
                  (r = t[0].Terminal),
                  (i = t[1].FitAddon),
                  (u = t[2].SearchAddon),
                  (l = t[3].WebLinksAddon),
                  (A = new r(c)),
                  (h = new i()),
                  A.loadAddon(h),
                  (p = new l()),
                  A.loadAddon(p),
                  (f = new u()),
                  A.loadAddon(f),
                  d.abrupt("return", { xterm: A, fitAddon: h, searchAddon: f })
                );
              case 16:
              case "end":
                return d.stop();
            }
        });
      }
    },
    KPuF(e, t, n) {
      const r = n("rx/v");
      const o = n("cK9Y");
      const i = n("/Cao");
      const a = n("u0Ev");
      (t.polling = e => {
        let t = !1;
        let n = !1;
        const a = !1 !== e.jsonp;
        if ("undefined" !== typeof location) {
          const s = "https:" === location.protocol;
          let c = location.port;
          c || (c = s ? 443 : 80),
            (t = e.hostname !== location.hostname || c !== e.port),
            (n = e.secure !== s);
        }
        if (
          ((e.xdomain = t),
          (e.xscheme = n),
          "open" in new r(e) && !e.forceJSONP)
        )
          return new o(e);
        if (!a) throw new Error("JSONP disabled");
        return new i(e);
      }),
        (t.websocket = a);
    },
    "O9h/": function (e, t, n) {
      const r = n("E+TZ");
      const o = n("gnSh");
      function i(e) {
        (this.path = e.path),
          (this.hostname = e.hostname),
          (this.port = e.port),
          (this.secure = e.secure),
          (this.query = e.query),
          (this.timestampParam = e.timestampParam),
          (this.timestampRequests = e.timestampRequests),
          (this.readyState = ""),
          (this.agent = e.agent || !1),
          (this.socket = e.socket),
          (this.enablesXDR = e.enablesXDR),
          (this.withCredentials = e.withCredentials),
          (this.pfx = e.pfx),
          (this.key = e.key),
          (this.passphrase = e.passphrase),
          (this.cert = e.cert),
          (this.ca = e.ca),
          (this.ciphers = e.ciphers),
          (this.rejectUnauthorized = e.rejectUnauthorized),
          (this.forceNode = e.forceNode),
          (this.isReactNative = e.isReactNative),
          (this.extraHeaders = e.extraHeaders),
          (this.localAddress = e.localAddress);
      }
      (e.exports = i),
        o(i.prototype),
        (i.prototype.onError = function (e, t) {
          const n = new Error(e);
          return (
            (n.type = "TransportError"),
            (n.description = t),
            this.emit("error", n),
            this
          );
        }),
        (i.prototype.open = function () {
          return (
            ("closed" !== this.readyState && "" !== this.readyState) ||
              ((this.readyState = "opening"), this.doOpen()),
            this
          );
        }),
        (i.prototype.close = function () {
          return (
            ("opening" !== this.readyState && "open" !== this.readyState) ||
              (this.doClose(), this.onClose()),
            this
          );
        }),
        (i.prototype.send = function (e) {
          if ("open" !== this.readyState) throw new Error("Transport not open");
          this.write(e);
        }),
        (i.prototype.onOpen = function () {
          (this.readyState = "open"), (this.writable = !0), this.emit("open");
        }),
        (i.prototype.onData = function (e) {
          const t = r.decodePacket(e, this.socket.binaryType);
          this.onPacket(t);
        }),
        (i.prototype.onPacket = function (e) {
          this.emit("packet", e);
        }),
        (i.prototype.onClose = function () {
          (this.readyState = "closed"), this.emit("close");
        });
    },
    P2Oe(e, t, n) {
      "use strict";
      ((e => {
        n.d(t, "d", () => {
          return h;
        }),
          n.d(t, "c", () => {
            return p;
          }),
          n.d(t, "a", () => {
            return f;
          }),
          n.d(t, "b", () => {
            return d;
          }),
          n.d(t, "e", () => {
            return b;
          });
        const r = n("ln6h");
        const o = n.n(r);
        const i = n("eVuF");
        const a = n.n(i);
        const s = n("0gYX");
        const c = n.n(s);
        const u = n("dI/k");
        const l = n("5/z4");
        const A = "repl.co";
        function h(t) {
          const n = t.split(".");
          if (4 !== n.length)
            throw new Error(`Invalid token: should have exactly 4 parts: ${t}`);
          for (
            var r = n[2].replace(/-/g, "+").replace(/_/g, "/");
            r.length % 4;

          )
            r += "=";
          const o = window.atob(r);
          if (o.length < 64)
            throw new Error(
              `Invalid token: signed part is too short: ${o.length}`
            );
          const i = o.substring(0, o.length - 64);
          try {
            return l.api.ReplToken.decode(new e(i, "base64"));
          } catch (a) {
            return JSON.parse(window.atob(i));
          }
        }
        function p(e) {
          const t = h(e).repl;
          const n = t.user;
          const r = t.slug;
          return A.includes("lvh.me:8080")
            ? "ws://".concat(r, "--").concat(n, ".").concat(A)
            : "wss://".concat(r, "--").concat(n, ".").concat(A);
        }
        function f({language, files}) {
          const t = language;
          const n = files;
          return n.includes(".replit")
            ? { name: "shellrunner", service: "shellrun" }
            : c.a.usesInterpreter(t)
            ? { name: "interper", service: "interp2" }
            : ((e, t) => {
                return !0 === c.a.usesRunProject(e) &&
                (!1 === c.a.usesEval(e) ||
                  t.filter(t => {
                    return Object(u.b)(t) === c.a.get(e).ext;
                  }).length > 1);
              })(t, n) ? { name: "shellrunner", service: "shellrun" } : { name: "evaler", service: "eval" };
        }
        function d(e) {
          return "interper" === e
            ? { name: "interper", service: "interp2" }
            : "shellrunner" === e
            ? { name: "shellrunner", service: "shellrun" }
            : { name: "evaler", service: "eval" };
        }
        function b(e, t) {
          return o.a.async(n => {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return n.abrupt(
                    "return",
                    new a.a(n => {
                      e.on("command", function r(o) {
                        t(o) && (e.off("command", r), n(o));
                      });
                    })
                  );
                case 1:
                case "end":
                  return n.stop();
              }
          });
        }
      }).call(this, n("HDXh").Buffer));
    },
    "Qz/J": function (e, t) {
      const n =
                "undefined" !== typeof n
                  ? n
                  : "undefined" !== typeof WebKitBlobBuilder
                  ? WebKitBlobBuilder
                  : "undefined" !== typeof MSBlobBuilder
                  ? MSBlobBuilder
                  : "undefined" !== typeof MozBlobBuilder && MozBlobBuilder;

      const r = (() => {
        try {
          return 2 === new Blob(["hi"]).size;
        } catch (e) {
          return !1;
        }
      })();

      const o =
        r && (() => {
          try {
            return 2 === new Blob([new Uint8Array([1, 2])]).size;
          } catch (e) {
            return !1;
          }
        })();

      const i = n && n.prototype.append && n.prototype.getBlob;
      function a(e) {
        return e.map(e => {
          if (e.buffer instanceof ArrayBuffer) {
            let t = e.buffer;
            if (e.byteLength !== t.byteLength) {
              const n = new Uint8Array(e.byteLength);
              n.set(new Uint8Array(t, e.byteOffset, e.byteLength)),
                (t = n.buffer);
            }
            return t;
          }
          return e;
        });
      }
      function s(e, t = {}) {
        const r = new n();
        return a(e).forEach(e => {
          r.append(e);
        }),
        t.type ? r.getBlob(t.type) : r.getBlob()
      ;
      }
      function c(e, t) {
        return new Blob(a(e), t || {});
      }
      "undefined" !== typeof Blob &&
        ((s.prototype = Blob.prototype), (c.prototype = Blob.prototype)),
        (e.exports = r ? (o ? Blob : c) : i ? s : void 0);
    },
    WDr1(e, t) {
      e.exports =
        Object.keys ||
        (e => {
          const t = [];
          const n = Object.prototype.hasOwnProperty;
          for (const r in e) n.call(e, r) && t.push(r);
          return t;
        });
    },
    WK0V(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), n("dy/U");
      const r = n("eTwx");
      Object.defineProperty(t, "Client", {
        enumerable: !0,
        get() {
          return r.Client;
        },
      });
      const o = n("1dJL");
      Object.defineProperty(t, "Channel", {
        enumerable: !0,
        get() {
          return o.Channel;
        },
      });
      const i = n("yLpU");
      Object.defineProperty(t, "FetchConnectionMetadataError", {
        enumerable: !0,
        get() {
          return i.FetchConnectionMetadataError;
        },
      }),
        Object.defineProperty(t, "ConnectionState", {
          enumerable: !0,
          get() {
            return i.ConnectionState;
          },
        });
    },
    X6w4(e, t) {
      let n;
      let r;
      let o;
      const i = String.fromCharCode;
      function a(e) {
        for (var t, n, r = [], o = 0, i = e.length; o < i; )
          (t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < i
            ? 56320 == (64512 & (n = e.charCodeAt(o++)))
              ? r.push(((1023 & t) << 10) + (1023 & n) + 65536)
              : (r.push(t), o--)
            : r.push(t);
        return r;
      }
      function s(e, t) {
        if (e >= 55296 && e <= 57343) {
          if (t)
            throw Error(
              `Lone surrogate U+${e.toString(16).toUpperCase()} is not a scalar value`
            );
          return !1;
        }
        return !0;
      }
      function c(e, t) {
        return i(((e >> t) & 63) | 128);
      }
      function u(e, t) {
        if (0 == (4294967168 & e)) return i(e);
        let n = "";
        return (
          0 == (4294965248 & e)
            ? (n = i(((e >> 6) & 31) | 192))
            : 0 == (4294901760 & e)
            ? (s(e, t) || (e = 65533),
              (n = i(((e >> 12) & 15) | 224)),
              (n += c(e, 6)))
            : 0 == (4292870144 & e) &&
              ((n = i(((e >> 18) & 7) | 240)), (n += c(e, 12)), (n += c(e, 6))),
          (n += i((63 & e) | 128))
        );
      }
      function l() {
        if (o >= r) throw Error("Invalid byte index");
        const e = 255 & n[o];
        if ((o++, 128 == (192 & e))) return 63 & e;
        throw Error("Invalid continuation byte");
      }
      function A(e) {
        let t;
        let i;
        if (o > r) throw Error("Invalid byte index");
        if (o == r) return !1;
        if (((t = 255 & n[o]), o++, 0 == (128 & t))) return t;
        if (192 == (224 & t)) {
          if ((i = ((31 & t) << 6) | l()) >= 128) return i;
          throw Error("Invalid continuation byte");
        }
        if (224 == (240 & t)) {
          if ((i = ((15 & t) << 12) | (l() << 6) | l()) >= 2048)
            return s(i, e) ? i : 65533;
          throw Error("Invalid continuation byte");
        }
        if (
          240 == (248 & t) &&
          (i = ((7 & t) << 18) | (l() << 12) | (l() << 6) | l()) >= 65536 &&
          i <= 1114111
        )
          return i;
        throw Error("Invalid UTF-8 detected");
      }
      e.exports = {
        version: "2.1.2",
        encode(e, t) {
          for (
            var n = !1 !== (t = t || {}).strict,
              r = a(e),
              o = r.length,
              i = -1,
              s = "";
            ++i < o;

          )
            s += u(r[i], n);
          return s;
        },
        decode(e, t) {
          const s = !1 !== (t = t || {}).strict;
          (n = a(e)), (r = n.length), (o = 0);
          for (var c, u = []; !1 !== (c = A(s)); ) u.push(c);
          return (e => {
            for (var t, n = e.length, r = -1, o = ""; ++r < n; )
              (t = e[r]) > 65535 &&
                ((o += i((((t -= 65536) >>> 10) & 1023) | 55296)),
                (t = 56320 | (1023 & t))),
                (o += i(t));
            return o;
          })(u);
        },
      };
    },
    X8yK(e, t, n) {
      "use strict";
      t.a = {
        brand: { darkBlue: "#0D101E", lightBlue: "#68CDEE", gray: "#6D7D84" },
        main: {
          green: {
            dark: "#0A6640",
            default: "#0F9960",
            light: "#3DCC91",
            25: "rgba(15,153,96,0.25)",
            15: "rgba(15,153,96,0.15)",
          },
          red: {
            dark: "#A82A2A",
            default: "#DB3737",
            light: "#FF7373",
            25: "rgba(219, 55, 55, 0.25)",
            15: "rgba(219, 55, 55, 0.15)",
          },
          blue: {
            dark: "#0068AD",
            default: "#0097FB",
            light: "#73C4FA",
            25: "rgba(0, 151, 251, 0.25)",
            15: "rgba(0, 151, 251, 0.15)",
          },
          orange: {
            dark: "#A14809",
            default: "#E16D1A",
            light: "#FC9C58",
            25: "rgba(225, 109, 26, 0.25)",
            15: "rgba(225, 109, 26, 0.15)",
          },
          purple: {
            dark: "#6213B1",
            default: "#9D43F7",
            light: "#BF80FF",
            25: "rgba(98, 19, 177, 0.25)",
            15: "rgba(98, 19, 177, 0.15)",
          },
          gold: {
            dark: "#A67908",
            default: "#D99E0B",
            light: "#FFC940",
            25: "rgba(217, 158, 11, 0.25)",
            15: "rgba(217, 158, 11, 0.15)",
          },
        },
        neutrals: {
          black: "#21242C",
          white: "#FFFFFF",
          offWhite: "#F7F8FA",
          black64: "rgba(33, 36, 44, 0.64)",
          black50: "rgba(33, 36, 44, 0.50)",
          black16: "rgba(33, 36, 44, 0.16)",
          black8: "rgba(33, 36, 44, 0.08)",
          white64: "rgba(255, 255, 255, 0.64)",
          white50: "rgba(255, 255, 255, 0.50)",
          white16: "rgba(255, 255, 255, 0.16)",
          white8: "rgba(255, 255, 255, 0.08)",
        },
        multiplayer: {
          green: "#1BC47D",
          red: "#EF5533",
          blue: "#18A0FB",
          gold: "#FFC700",
          purple: "#907CFF",
          teal: "#00B5CE",
          pink: "#EE46D3",
        },
        languages: {
          java: "#b07219",
          scheme: "#1e4aec",
          clojure: "#db5855",
          haskell: "#5e5086",
          lua: "#000080",
          ruby: "#701516",
          python: "#3572A5",
          go: "#00ADD8",
          cpp: "#f34b7d",
          c: "#555555",
          "c#": "#178600",
          "f#": "#b845fc",
          rust: "#dea584",
          swift: "#ffac45",
          r: "#198CE7",
          bash: "#000000",
          crystal: "#000100",
          julia: "#a270ba",
          elixir: "#6e4a7e",
          nim: "#37775b",
          dart: "#00B4AB",
          erlang: "#B83998",
          typescript: "#2b7489",
          elisp: "#c065db",
          sql: "#e34c26",
          php: "#4F5D95",
          html: "#e34c26",
          css: "#563d7c",
          javascript: "#f1e05a",
        },
      };
    },
    cK9Y(e, t, n) {
      const r = n("rx/v");
      const o = n("8VYC");
      const i = n("gnSh");
      const a = n("Yvos");
      const s = n("EuBs")("engine.io-client:polling-xhr");
      const c = n("HiSk");
      function u() {}
      function l(e) {
        if (
          (o.call(this, e),
          (this.requestTimeout = e.requestTimeout),
          (this.extraHeaders = e.extraHeaders),
          "undefined" !== typeof location)
        ) {
          const t = "https:" === location.protocol;
          let n = location.port;
          n || (n = t ? 443 : 80),
            (this.xd =
              ("undefined" !== typeof location &&
                e.hostname !== location.hostname) ||
              n !== e.port),
            (this.xs = e.secure !== t);
        }
      }
      function A(e) {
        (this.method = e.method || "GET"),
          (this.uri = e.uri),
          (this.xd = !!e.xd),
          (this.xs = !!e.xs),
          (this.async = !1 !== e.async),
          (this.data = void 0 !== e.data ? e.data : null),
          (this.agent = e.agent),
          (this.isBinary = e.isBinary),
          (this.supportsBinary = e.supportsBinary),
          (this.enablesXDR = e.enablesXDR),
          (this.withCredentials = e.withCredentials),
          (this.requestTimeout = e.requestTimeout),
          (this.pfx = e.pfx),
          (this.key = e.key),
          (this.passphrase = e.passphrase),
          (this.cert = e.cert),
          (this.ca = e.ca),
          (this.ciphers = e.ciphers),
          (this.rejectUnauthorized = e.rejectUnauthorized),
          (this.extraHeaders = e.extraHeaders),
          this.create();
      }
      if (
        ((e.exports = l),
        (e.exports.Request = A),
        a(l, o),
        (l.prototype.supportsBinary = !0),
        (l.prototype.request = function (e) {
          return (
            ((e = e || {}).uri = this.uri()),
            (e.xd = this.xd),
            (e.xs = this.xs),
            (e.agent = this.agent || !1),
            (e.supportsBinary = this.supportsBinary),
            (e.enablesXDR = this.enablesXDR),
            (e.withCredentials = this.withCredentials),
            (e.pfx = this.pfx),
            (e.key = this.key),
            (e.passphrase = this.passphrase),
            (e.cert = this.cert),
            (e.ca = this.ca),
            (e.ciphers = this.ciphers),
            (e.rejectUnauthorized = this.rejectUnauthorized),
            (e.requestTimeout = this.requestTimeout),
            (e.extraHeaders = this.extraHeaders),
            new A(e)
          );
        }),
        (l.prototype.doWrite = function (e, t) {
        const n = "string" !== typeof e && void 0 !== e;
        const r = this.request({ method: "POST", data: e, isBinary: n });
        const o = this;
        r.on("success", t),
          r.on("error", e => {
            o.onError("xhr post error", e);
          }),
          (this.sendXhr = r);
      }),
        (l.prototype.doPoll = function () {
        s("xhr poll");
        const e = this.request();
        const t = this;
        e.on("data", e => {
          t.onData(e);
        }),
          e.on("error", e => {
            t.onError("xhr poll error", e);
          }),
          (this.pollXhr = e);
      }),
        i(A.prototype),
        (A.prototype.create = function () {
        const e = {
          agent: this.agent,
          xdomain: this.xd,
          xscheme: this.xs,
          enablesXDR: this.enablesXDR,
        };
        (e.pfx = this.pfx),
          (e.key = this.key),
          (e.passphrase = this.passphrase),
          (e.cert = this.cert),
          (e.ca = this.ca),
          (e.ciphers = this.ciphers),
          (e.rejectUnauthorized = this.rejectUnauthorized);
        const t = (this.xhr = new r(e));
        const n = this;
        try {
          s("xhr open %s: %s", this.method, this.uri),
            t.open(this.method, this.uri, this.async);
          try {
            if (this.extraHeaders)
              for (const o in (t.setDisableHeaderCheck &&
                t.setDisableHeaderCheck(!0),
              this.extraHeaders))
                this.extraHeaders.hasOwnProperty(o) &&
                  t.setRequestHeader(o, this.extraHeaders[o]);
          } catch (i) {}
          if ("POST" === this.method)
            try {
              this.isBinary
                ? t.setRequestHeader(
                    "Content-type",
                    "application/octet-stream"
                  )
                : t.setRequestHeader(
                    "Content-type",
                    "text/plain;charset=UTF-8"
                  );
            } catch (i) {}
          try {
            t.setRequestHeader("Accept", "*/*");
          } catch (i) {}
          "withCredentials" in t &&
            (t.withCredentials = this.withCredentials),
            this.requestTimeout && (t.timeout = this.requestTimeout),
            this.hasXDR()
              ? ((t.onload = () => {
                  n.onLoad();
                }),
                (t.onerror = () => {
                  n.onError(t.responseText);
                }))
              : (t.onreadystatechange = () => {
                  if (2 === t.readyState)
                    try {
                      const e = t.getResponseHeader("Content-Type");
                      ((n.supportsBinary &&
                        "application/octet-stream" === e) ||
                        "application/octet-stream; charset=UTF-8" === e) &&
                        (t.responseType = "arraybuffer");
                    } catch (i) {}
                  4 === t.readyState &&
                    (200 === t.status || 1223 === t.status
                      ? n.onLoad()
                      : setTimeout(() => {
                          n.onError(
                            "number" === typeof t.status ? t.status : 0
                          );
                        }, 0));
                }),
            s("xhr data %s", this.data),
            t.send(this.data);
        } catch (i) {
          return void setTimeout(() => {
            n.onError(i);
          }, 0);
        }
        "undefined" !== typeof document &&
          ((this.index = A.requestsCount++), (A.requests[this.index] = this));
      }),
        (A.prototype.onSuccess = function () {
          this.emit("success"), this.cleanup();
        }),
        (A.prototype.onData = function (e) {
          this.emit("data", e), this.onSuccess();
        }),
        (A.prototype.onError = function (e) {
          this.emit("error", e), this.cleanup(!0);
        }),
        (A.prototype.cleanup = function (e) {
          if ("undefined" !== typeof this.xhr && null !== this.xhr) {
            if (
              (this.hasXDR()
                ? (this.xhr.onload = this.xhr.onerror = u)
                : (this.xhr.onreadystatechange = u),
              e)
            )
              try {
                this.xhr.abort();
              } catch (t) {}
            "undefined" !== typeof document && delete A.requests[this.index],
              (this.xhr = null);
          }
        }),
        (A.prototype.onLoad = function () {
          let e;
          try {
            let t;
            try {
              t = this.xhr.getResponseHeader("Content-Type");
            } catch (n) {}
            e =
              (("application/octet-stream" === t ||
                "application/octet-stream; charset=UTF-8" === t) &&
                this.xhr.response) ||
              this.xhr.responseText;
          } catch (n) {
            this.onError(n);
          }
          null != e && this.onData(e);
        }),
        (A.prototype.hasXDR = function () {
          return (
            "undefined" !== typeof XDomainRequest && !this.xs && this.enablesXDR
          );
        }),
        (A.prototype.abort = function () {
          this.cleanup();
        }),
        (A.requestsCount = 0),
        (A.requests = {}),
        "undefined" !== typeof document)
      )
        if ("function" === typeof attachEvent) attachEvent("onunload", h);
        else if ("function" === typeof addEventListener) {
          addEventListener("onpagehide" in c ? "pagehide" : "unload", h, !1);
        }
      function h() {
        for (const e in A.requests)
          A.requests.hasOwnProperty(e) && A.requests[e].abort();
      }
    },
    dDrW(e, t) {
      e.exports =
        "data:application/x-font-ttf;base64,AAEAAAAOAIAAAwBgRkZUTYQd29oAAAWIAAAAHEdERUYAKQAqAAAFYAAAACZPUy8yQ0FcUwAAAWgAAABgY21hcAAP8lIAAAHYAAABQmN2dCAAIgKIAAADHAAAAARnYXNwAAAAAQAABVgAAAAIZ2x5ZqQ1ewkAAAMsAAAAiGhlYWQPsR5/AAAA7AAAADZoaGVhBgEEBQAAASQAAAAkaG10eAwAAKIAAAHIAAAAEGxvY2EAbgBUAAADIAAAAAptYXhwAAgAPAAAAUgAAAAgbmFtZSBsbRoAAAO0AAABbnBvc3SwqUy9AAAFJAAAADIAAQAAAAAAAI7W8KxfDzz1AAsEAAAAAADXNj/0AAAAANc7muQAIgAAAgACqgAAAAgAAgAAAAAAAAABAAAEAAAAAAAEAAAAAAACAAABAAAAAAAAAAAAAAAAAAAABAABAAAABAAMAAMAAAAAAAIAAAAAAAAAAAAAAC4AAAAAAAMEAAGQAAUAAAKAAwAAAACAAoADAAAAAgAAAAEAAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAFBmRWQAQO6n7qcEAAAAAAAEAAAAAAAAAQAAAAAAAAAAAAAAIAABBAAAIgAAAAAEAAAABAAAgAAAAAMAAAADAAAAHAABAAAAAAA8AAMAAQAAABwABAAgAAAABAAEAAEAAO6n//8AAO6n//8RXAABAAAAAAAAAQYAAAEAAAAAAAAAAQIAAAACAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiAogAAAAqACoAKgBEAAAAAgAiAAABMgKqAAMABwAusQEALzyyBwQA7TKxBgXcPLIDAgDtMgCxAwAvPLIFBADtMrIHBgH8PLIBAgDtMjMRIREnMxEjIgEQ7szMAqr9ViICZgAAAwCAAAACAAJAAAMABwALAAABFTM1BRUzNQMVMzUBQMD+gMDAwAGAwMDAwMABgMDAAAAAAAAADgCuAAEAAAAAAAAAAAACAAEAAAAAAAEACwAbAAEAAAAAAAIAAQArAAEAAAAAAAMADABHAAEAAAAAAAQACwBsAAEAAAAAAAUACwCQAAEAAAAAAAYACwC0AAMAAQQJAAAAAAAAAAMAAQQJAAEAFgADAAMAAQQJAAIAAgAnAAMAAQQJAAMAGAAtAAMAAQQJAAQAFgBUAAMAAQQJAAUAFgB4AAMAAQQJAAYAFgCcAAAAAHIAZQBwAGwAaQB0AGkAYwBvAG4AcwAAcmVwbGl0aWNvbnMAAAoAAAoAAHIAZQBwAGwAaQB0ACAAaQBjAG8AbgBzAAByZXBsaXQgaWNvbnMAAHIAZQBwAGwAaQB0AGkAYwBvAG4AcwAAcmVwbGl0aWNvbnMAAFYAZQByAHMAaQBvAG4AIAAxAC4AMAAAVmVyc2lvbiAxLjAAAHIAZQBwAGwAaQB0AGkAYwBvAG4AcwAAcmVwbGl0aWNvbnMAAAAAAgAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAEAAAAAQACAQIHdW5pRUVBNwAAAAEAAf//AAAAAQAAAAwAAAAWAB4AAgABAAMAAwABAAQAAAACAAAAAQAAAAEAAAAAAAAAAQAAAADVrAEBAAAAANc2P/QAAAAA1zua5A==";
    },
    "dy/U": function (e, t, n) {
      ((r => {
        let o;
        let i;
        void 0 ===
          (i =
            "function" ===
            typeof (o = () => {
              "use strict";

              class e {
                constructor(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }

                static exports(e, t, r) {
                  let o = !0;
                  let i = !0;
                  if ("function" != typeof e) throw new TypeError(n);
                  return (
                    g(r) &&
                      ((o = "leading" in r ? !!r.leading : o),
                      (i = "trailing" in r ? !!r.trailing : i)),
                    y(e, t, { leading: o, maxWait: t, trailing: i })
                  );
                }

                static exports({xdomain, xscheme, enablesXDR}) {
                  const t = xdomain;
                  const n = xscheme;
                  const i = enablesXDR;
                  try {
                    if ("undefined" !== typeof XMLHttpRequest && (!t || r))
                      return new XMLHttpRequest();
                  } catch (a) {}
                  try {
                    if ("undefined" !== typeof XDomainRequest && !n && i)
                      return new XDomainRequest();
                  } catch (a) {}
                  if (!t)
                    try {
                      return new (o[["Active"].concat("Object").join("X")])(
                        "Microsoft.XMLHTTP"
                      );
                    } catch (a) {}
                }
              }

              function t(e, t) {
                t.forEach(r => {
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                });
              }
              function n(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              }
              function o(e) {
                return (o = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : e => {
                      return e.__proto__ || Object.getPrototypeOf(e);
                    })(e);
              }
              function i(e, t) {
                return (i =
                  Object.setPrototypeOf ||
                  ((e, t) => {
                    return (e.__proto__ = t), e;
                  }))(e, t);
              }
              function a(e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              }
              function s(e, t) {
                return !t || ("object" !== typeof t && "function" !== typeof t)
                  ? a(e)
                  : t;
              }
              function c(e) {
                const t = (() => {
                  if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                  if (Reflect.construct.sham) return !1;
                  if ("function" === typeof Proxy) return !0;
                  try {
                    return Date.prototype.toString.call(
                      Reflect.construct(Date, [], () => {})
                    ),
                    !0
                  ;
                  } catch (e) {
                    return !1;
                  }
                })();
                return function(...args) {
                  let n;
                  const r = o(e);
                  if (t) {
                    const i = o(this).constructor;
                    n = Reflect.construct(r, args, i);
                  } else n = r.apply(this, args);
                  return s(this, n);
                };
              }
              function u(e, t, n) {
                return (u =
                  "undefined" !== typeof Reflect && Reflect.get
                    ? Reflect.get
                    : (e, t, n) => {
                        const r = ((e, t) => {
                          for (
                            ;
                            !Object.prototype.hasOwnProperty.call(e, t) &&
                            null !== (e = o(e));

                          );
                          return e;
                        })(e, t);
                        if (r) {
                          const i = Object.getOwnPropertyDescriptor(r, t);
                          return i.get ? i.get.call(n) : i.value;
                        }
                      })(e, t, n || e);
              }

              const l = (() => {
                        function t() {
                          e(this, t),
                            Object.defineProperty(this, "listeners", {
                              value: {},
                              writable: !0,
                              configurable: !0,
                            });
                        }
                        return n(t, [
                          {
                            key: "addEventListener",
                            value(e, t, n) {
                              e in this.listeners || (this.listeners[e] = []),
                                this.listeners[e].push({ callback: t, options: n });
                            },
                          },
                          {
                            key: "removeEventListener",
                            value(e, t) {
                              if (e in this.listeners)
                                for (
                                  let n = this.listeners[e], r = 0, o = n.length;
                                  r < o;
                                  r++
                                )
                                  if (n[r].callback === t)
                                    return void n.splice(r, 1);
                            },
                          },
                          {
                            key: "dispatchEvent",
                            value(e) {
                              if (e.type in this.listeners) {
                                for (
                                  let t = this.listeners[e.type].slice(), n = 0, r = t.length;
                                  n < r;
                                  n++
                                ) {
                                  const o = t[n];
                                  try {
                                    o.callback.call(this, e);
                                  } catch (i) {
                                    Promise.resolve().then(() => {
                                      throw i;
                                    });
                                  }
                                  o.options &&
                                    o.options.once &&
                                    this.removeEventListener(e.type, o.callback);
                                }
                                return !e.defaultPrevented;
                              }
                            },
                          },
                        ]),
                        t;
                      })();

              const A = (t => {
                !((e, t) => {
                  if ("function" !== typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    t && i(e, t);
                })(s, t);
                const r = c(s);
                function s() {
                  let t;
                  return (
                    e(this, s),
                    (t = r.call(this)).listeners || l.call(a(t)),
                    Object.defineProperty(a(t), "aborted", {
                      value: !1,
                      writable: !0,
                      configurable: !0,
                    }),
                    Object.defineProperty(a(t), "onabort", {
                      value: null,
                      writable: !0,
                      configurable: !0,
                    }),
                    t
                  );
                }
                return n(s, [
                  {
                    key: "toString",
                    value() {
                      return "[object AbortSignal]";
                    },
                  },
                  {
                    key: "dispatchEvent",
                    value(e) {
                      "abort" === e.type &&
                        ((this.aborted = !0),
                        "function" === typeof this.onabort &&
                          this.onabort.call(this, e)),
                        u(o(s.prototype), "dispatchEvent", this).call(
                          this,
                          e
                        );
                    },
                  },
                ]),
                s
              ;
              })(l);

              const h = (() => {
                function t() {
                  e(this, t),
                    Object.defineProperty(this, "signal", {
                      value: new A(),
                      writable: !0,
                      configurable: !0,
                    });
                }
                return n(t, [
                  {
                    key: "abort",
                    value() {
                      let e;
                      try {
                        e = new Event("abort");
                      } catch (t) {
                        "undefined" !== typeof document
                          ? document.createEvent
                            ? (e = document.createEvent("Event")).initEvent(
                                "abort",
                                !1,
                                !1
                              )
                            : ((e = document.createEventObject()).type =
                                "abort")
                          : (e = {
                              type: "abort",
                              bubbles: !1,
                              cancelable: !1,
                            });
                      }
                      this.signal.dispatchEvent(e);
                    },
                  },
                  {
                    key: "toString",
                    value() {
                      return "[object AbortController]";
                    },
                  },
                ]),
                t;
              })();

              "undefined" !== typeof Symbol &&
                Symbol.toStringTag &&
                ((h.prototype[Symbol.toStringTag] = "AbortController"),
                (A.prototype[Symbol.toStringTag] = "AbortSignal")), (e => {
                (e => {
                  return e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL
                    ? (console.log(
                        "__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"
                      ),
                      !0)
                    : ("function" === typeof e.Request &&
                        !e.Request.prototype.hasOwnProperty("signal")) ||
                        !e.AbortController;
                })(e) && (e.AbortController = h, e.AbortSignal = A);
              })("undefined" !== typeof self ? self : r);
            })
              ? o.call(t, n, t, e)
              : o) || (e.exports = i);
      }).call(this, n("yLpj")));
    },
    eTwx(e, t, n) {
      "use strict";

      let r =
          (this && this.__assign) ||
          function(...args) {
            return (r =
              Object.assign ||
              function (e) {
                for (let t, n = 1, r = arguments.length; n < r; n++)
                  for (const o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }).apply(this, args);
          };

      const o =
        (this && this.__awaiter) ||
        ((e, t, n, r) => {
          return new (n || (n = Promise))((o, i) => {
            function a(e) {
              try {
                c(r.next(e));
              } catch (t) {
                i(t);
              }
            }
            function s(e) {
              try {
                c(r.throw(e));
              } catch (t) {
                i(t);
              }
            }
            function c({done, value}) {
              let t;
              done
                ? o(value)
                : ((t = value),
                  t instanceof n
                    ? t
                    : new n(e => {
                        e(t);
                      })).then(a, s);
            }
            c((r = r.apply(e, t || [])).next());
          });
        });

      const i =
        (this && this.__generator) ||
        ((e, t) => {
          let n;
          let r;
          let o;
          let i;

          let a = {
            label: 0,
            sent() {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };

          return (
            (i = { next: s(0), throw: s(1), return: s(2) }),
            "function" === typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function s(i) {
            return s => {
              return (i => {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (s) {
                    (i = [6, s]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, s]);
            };
          }
        });

      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Client = void 0);
      let a;
      const s = n("5/z4");
      const c = n("1dJL");
      const u = n("AJXi");
      const l = n("Emkz");
      const A = n("yLpU");
      !(e => {
        (e.Intentional = "Intentional"),
          (e.Disconnected = "Disconnected"),
          (e.Error = "Error");
      })(a || (a = {}));
      const h = { secure: !0, host: "eval.global.replit.com", port: "443" };

      const p = function () {
        const e = this;
        (this.open = (t, n) => {
          if (e.chan0Cb) {
            var a = new Error(
              "You must call `close` before opening the client again"
            );
            throw (e.onUnrecoverableError(a), a);
          }
          let s = t.fetchConnectionMetadata;
          if (!s || "function" !== typeof s) {
            const c = t.fetchToken;
            if (!c || "function" !== typeof c)
              throw (
                ((a = new Error(
                  "You must provide a fetchConnectionMetadata/fetchToken function"
                )),
                e.onUnrecoverableError(a),
                a)
              );
            const u = t.urlOptions || h;
            const l = u.secure;
            const p = u.host;
            const f = u.port;
            s = t => {
              return o(e, void 0, void 0, function () {
                let e;
                let n;
                return i(this, r => {
                  switch (r.label) {
                    case 0:
                      return r.trys.push([0, 2, , 3]), [4, c(t)];
                    case 1:
                      return (e = r.sent()),
                      (n = e.token),
                      e.aborted || !n
                        ? [
                            2,
                            {
                              error: A.FetchConnectionMetadataError.Aborted,
                            },
                          ]
                        : [
                            2,
                            {
                              token: n,
                              gurl:
                                `ws${l ? "s" : ""}://${p}:${f}`,
                              conmanURL:
                                `http${l ? "s" : ""}://${p}:${f}`,
                              error: null,
                            },
                          ]
                    ;
                    case 2:
                      return [2, { error: r.sent() }];
                    case 3:
                      return [2];
                  }
                });
              });
            };
          }
          if (e.destroyed)
            throw (
              ((a = new Error(
                "Client has been destroyed and cannot be re-used"
              )),
              e.onUnrecoverableError(a),
              a)
            );
          (e.connectOptions = r(
            { fetchConnectionMetadata: s, timeout: 1e4 },
            t
          )),
            e.debug({
              type: "breadcrumb",
              message: "open",
              data: { polling: !1 },
            }),
            (e.chan0Cb = n),
            e.connect({ tryCount: 0, websocketFailureCount: 0 });
        }),
          (this.openChannel = (t, n) => {
            if (
              t.name &&
              e.channelRequests.some(({options}) => {
                return options.name === t.name;
              })
            ) {
              var r = new Error(
                `Channel with name ${t.name} already opened`
              );
              throw (e.onUnrecoverableError(r), r);
            }
            if (e.destroyed)
              throw (
                ((r = new Error("Client has been destroyed and is unusable")),
                e.onUnrecoverableError(r),
                r)
              );
            const o = {
              options: t,
              openChannelCb: n,
              isOpen: !1,
              channelId: null,
              cleanupCb: null,
              closeRequested: !1,
            };
            e.channelRequests.push(o),
              e.connectionState === A.ConnectionState.CONNECTED &&
                e.requestOpenChannel(o);
            let i = !1;
            return () => {
              i ||
                ((i = !0),
                (o.closeRequested = !0),
                o.isOpen
                  ? e.requestCloseChannel(o)
                  : (e.channelRequests = e.channelRequests.filter(e => {
                      return e !== o;
                    })));
            };
          }),
          (this.requestOpenChannel = t => {
          const n = t.options;
          const r = t.openChannelCb;
          if (e.connectOptions) {
            const o = n.skip;
            if (!o || !o(e.connectOptions.context)) {
              let i = n.action;
              if (
                (i ||
                  (i =
                    null == n.name
                      ? s.api.OpenChannel.Action.CREATE
                      : s.api.OpenChannel.Action.ATTACH_OR_CREATE),
                t.channelId)
              )
                e.onUnrecoverableError(new Error("Unexpected channelId"));
              else {
                const a =
                  "string" === typeof n.service
                    ? n.service
                    : n.service(e.connectOptions.context);
                e.debug({
                  type: "breadcrumb",
                  message: "handleOpenChannel",
                  data: { name: n.name, service: a, action: i },
                });
                const u = e.getChannel(0);

                const l = Number(
                  Math.random().toString().split(".")[1]
                ).toString(36);

                u.send({
                  ref: l,
                  openChan: { name: n.name, service: a, action: i },
                });
                const A = u.onCommand(({ref, openChanRes}) => {
                  if (l === ref)
                    if ((A(), null != openChanRes)) {
                      const o = openChanRes;
                      const i = o.id;
                      const a = o.state;
                      const u = o.error;
                      if (
                        (e.debug({
                          type: "breadcrumb",
                          message: "openChanres",
                        }),
                        e.connectOptions)
                      )
                        if (a !== s.api.OpenChannelRes.State.ERROR)
                          if (
                            "number" === typeof i &&
                            "number" === typeof a
                          ) {
                            const h = new c.Channel({
                              id: i,
                              onUnrecoverableError: e.onUnrecoverableError,
                              send: e.send,
                            });
                            (e.channels[i] = h),
                              (t.channelId = i),
                              (t.isOpen = !0);
                            const p = t.closeRequested;
                            (t.cleanupCb = r({
                              channel: h,
                              error: null,
                              context: e.connectOptions.context,
                            })),
                              p && e.requestCloseChannel(t);
                          } else
                            e.onUnrecoverableError(
                              new Error("Expected state and channel id")
                            );
                        else
                          e.onUnrecoverableError(
                            new Error(
                              `Channel open resulted with an error: ${u || "with no message"}`
                            )
                          );
                      else
                        e.onUnrecoverableError(
                          new Error("Expected connectionOptions")
                        );
                    } else
                      e.onUnrecoverableError(
                        new Error("Expected openChanRes on command")
                      );
                });
              }
            }
          } else
            e.onUnrecoverableError(new Error("Expected connectionOptions"));
        }),
          (this.requestCloseChannel = t => {
            return o(e, void 0, void 0, function () {
              let e;
              let n;
              let r;
              let o;
              let a;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    return t.isOpen
                      ? ((e = t.channelId),
                        ((n = this.getChannel(t.channelId)).status =
                          "closing"),
                        (r = this.getChannel(0))
                          ? (this.debug({
                              type: "breadcrumb",
                              message: "requestChannelClose",
                              data: {
                                id: e,
                                name: t.options.name,
                                service: t.options.service,
                              },
                            }),
                            [
                              4,
                              r.request({
                                closeChan: {
                                  action: s.api.CloseChannel.Action.TRY_CLOSE,
                                  id: t.channelId,
                                },
                              }),
                            ])
                          : (this.onUnrecoverableError(
                              new Error(
                                "Tried to request a channel close but there was no chan0"
                              )
                            ),
                            [2]))
                      : (this.onUnrecoverableError(
                          new Error(
                            "Tried to request a channel close before opening"
                          )
                        ),
                        [2]);
                  case 1:
                    if ((o = i.sent()).channelClosed)
                      this.debug({
                        type: "breadcrumb",
                        message: "requestChannelClose:chan0Closed",
                        data: {
                          id: e,
                          name: t.options.name,
                          service: t.options.service,
                        },
                      });
                    else {
                      if (null == o.closeChanRes)
                        return (
                          this.onUnrecoverableError(
                            new Error("Expected closeChanRes")
                          ),
                          [2]
                        );
                      if (null == (a = o.closeChanRes.id))
                        return this.onUnrecoverableError(
                          new Error(`Expected id, got ${a}`)
                        ),
                        [2]
                      ;
                      if (a !== e)
                        return this.onUnrecoverableError(
                          new Error(
                            `Expected id from closeChanRes to be ${e} got ${a}`
                          )
                        ),
                        [2]
                      ;
                      this.debug({
                        type: "breadcrumb",
                        message: "requestChannelClose:closeChanRes",
                        data: {
                          id: e,
                          name: t.options.name,
                          service: t.options.service,
                          closeStatus: o.closeChanRes.status,
                        },
                      });
                    }
                    return (this.channelRequests = this.channelRequests.filter(
                      e => {
                        return e !== t;
                      }
                    )),
                    delete this.channels[e],
                    n.handleClose({
                      initiator: "channel",
                      willReconnect: !1,
                    }),
                    t.cleanupCb &&
                      t.cleanupCb({
                        initiator: "channel",
                        willReconnect: !1,
                      }),
                    [2]
                  ;
                }
              });
            });
          }),
          (this.close = () => {
            if (
              (e.debug({ type: "breadcrumb", message: "user close" }),
              !e.chan0Cb || !e.connectOptions)
            ) {
              const t = new Error("Must call client.open before closing");
              throw (e.onUnrecoverableError(t), t);
            }
            e.fetchTokenAbortController &&
              (e.fetchTokenAbortController.abort(),
              (e.fetchTokenAbortController = null)),
              e.handleClose({ closeReason: a.Intentional });
          }),
          (this.destroy = () => {
            (e.destroyed = !0),
              e.debug({ type: "breadcrumb", message: "destroy" }),
              e.connectionState !== A.ConnectionState.DISCONNECTED &&
                e.close(),
              (e.debug = () => {}),
              (e.userUnrecoverableErrorHandler = null),
              (e.channelRequests = []),
              (e.destroyed = !0);
          }),
          (this.getChannel = t => {
            const n = e.channels[t];
            if (!n) {
              const r = new Error(`No channel with number ${t}`);
              throw (e.onUnrecoverableError(r), r);
            }
            return n;
          }),
          (this.setDebugFunc = t => {
            e.debug = t;
          }),
          (this.setUnrecoverableErrorHandler = t => {
            e.userUnrecoverableErrorHandler = t;
          }),
          (this.getConnectionMetadata = () => {
            return e.connectionMetadata;
          }),
          (this.connect = ({tryCount, websocketFailureCount}) => {
          const n = tryCount;
          const r = websocketFailureCount;
          return o(e, void 0, void 0, function () {
            let e;
            let t;
            let o;
            let a;
            let h;
            let p;
            let f;
            let d;
            let b;
            let y;
            let g;
            let v;
            let m;
            let C;
            let w;
            let E;
            let O;
            let k;
            const S = this;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  if (
                    (this.debug({
                      type: "breadcrumb",
                      message: "connecting",
                      data: {
                        connectionState: this.connectionState,
                        connectTries: n,
                        websocketFailureCount: r,
                        readyState: this.ws ? this.ws.readyState : void 0,
                        chan0CbExists: Boolean(this.chan0Cb),
                      },
                    }),
                    this.connectionState !== A.ConnectionState.DISCONNECTED)
                  )
                    throw (
                      ((e = new Error(
                        "Client must be disconnected to connect"
                      )),
                      this.onUnrecoverableError(e),
                      e)
                    );
                  if (this.ws)
                    throw (
                      ((e = new Error(
                        "Unexpected existing websocket instance"
                      )),
                      this.onUnrecoverableError(e),
                      e)
                    );
                  if (!this.connectOptions)
                    throw (
                      ((e = new Error("Expected connectionOptions")),
                      this.onUnrecoverableError(e),
                      e)
                    );
                  if (!this.chan0Cb)
                    return (
                      this.onUnrecoverableError(
                        new Error("Expected chan0Cb")
                      ),
                      [2]
                    );
                  if (this.chan0CleanupCb)
                    return (
                      this.onUnrecoverableError(
                        new Error(
                          "Unexpected chan0CleanupCb, are you sure you closed"
                        )
                      ),
                      [2]
                    );
                  if (
                    this.channelRequests.some(({isOpen}) => {
                      return isOpen;
                    })
                  )
                    return (
                      this.onUnrecoverableError(
                        new Error(
                          "All channels should be closed when we connect"
                        )
                      ),
                      [2]
                    );
                  if (Object.keys(this.channels).length)
                    return (
                      this.onUnrecoverableError(
                        new Error(
                          "Found an an unexpected existing channels"
                        )
                      ),
                      [2]
                    );
                  if (
                    ((this.connectionState = A.ConnectionState.CONNECTING),
                    (t = new c.Channel({
                      id: 0,
                      onUnrecoverableError: this.onUnrecoverableError,
                      send: this.send,
                    })),
                    (this.channels[0] = t),
                    this.fetchTokenAbortController)
                  )
                    return (
                      this.onUnrecoverableError(
                        new Error(
                          "Expected fetchTokenAbortController to be null"
                        )
                      ),
                      [2]
                    );
                  (o = new AbortController()),
                    (this.fetchTokenAbortController = o),
                    (i.label = 1);
                case 1:
                  return (
                    i.trys.push([1, 3, , 4]),
                    [
                      4,
                      this.connectOptions.fetchConnectionMetadata(o.signal),
                    ]
                  );
                case 2:
                  return (a = i.sent()), [3, 4];
                case 3:
                  return (h = i.sent()), this.onUnrecoverableError(h), [2];
                case 4:
                  return (this.fetchTokenAbortController = null),
                  (f =
                    (p = a).error ===
                    A.FetchConnectionMetadataError.Aborted),
                  o.signal.aborted !== f
                    ? o.signal.aborted
                      ? (this.onUnrecoverableError(
                          new Error(
                            "Expected abort returned from fetchConnectionMetadata to be truthy when the controller aborts"
                          )
                        ),
                        [2])
                      : (this.onUnrecoverableError(
                          new Error(
                            "Abort should only be truthy returned when the abort signal is triggered"
                          )
                        ),
                        [2])
                    : p.error === A.FetchConnectionMetadataError.Aborted
                    ? [2]
                    : p.error === A.FetchConnectionMetadataError.Retriable
                    ? (this.retryConnect({
                        tryCount: n + 1,
                        websocketFailureCount: r,
                        chan0: t,
                        error: new Error("Retriable error"),
                      }),
                      [2])
                    : this.connectionState !==
                      A.ConnectionState.CONNECTING
                    ? (this.onUnrecoverableError(
                        new Error("Client was closed before connecting")
                      ),
                      [2])
                    : p.error
                    ? (this.onUnrecoverableError(p.error), [2])
                    : (3 === r &&
                        this.debug({
                          type: "breadcrumb",
                          message: "polling fallback",
                        }),
                      (b = (d = r >= 3)
                        ? l.EIOCompat
                        : u.getWebSocketClass(
                            this.connectOptions.WebSocketClass
                          )),
                      (y = u.getConnectionStr(p, d)),
                      ((g = new b(y)).binaryType = "arraybuffer"),
                      (g.onmessage = this.onSocketMessage),
                      (this.ws = g),
                      (this.connectionMetadata = p),
                      (v = null),
                      (g.onerror = () => {
                        v
                          ? v(new Error("WebSocket errored"))
                          : S.onUnrecoverableError(
                              new Error(
                                "Got websocket error but no `onFailed` cb"
                              )
                            );
                      }),
                      (g.onclose = () => {
                        v
                          ? v(
                              new Error(
                                "WebSocket closed before we got READY"
                              )
                            )
                          : S.onUnrecoverableError(
                              new Error(
                                "Got websocket closure but no `onFailed` cb"
                              )
                            );
                      }),
                      (m = () => {}),
                      (C = () => {}),
                      null !== (w = this.connectOptions.timeout) &&
                        ((C = () => {
                          S.debug({
                            type: "breadcrumb",
                            message: "cancel timeout",
                          }),
                            clearTimeout(E);
                        }),
                        (m = () => {
                          S.debug({
                            type: "breadcrumb",
                            message: "reset timeout",
                          }),
                            clearTimeout(E),
                            (E = setTimeout(() => {
                              S.debug({
                                type: "breadcrumb",
                                message: "connect timeout",
                              }),
                                v
                                  ? v(new Error("timeout"))
                                  : S.onUnrecoverableError(
                                      new Error(
                                        "Connecting timed out but there was no `onFailed` cb"
                                      )
                                    );
                            }, w));
                        })()),
                      (O = !1),
                      (k = t.onCommand(({containerState}) => {
                        if (((O = !0), m(), null != containerState))
                          if (null != containerState.state) {
                            const n = containerState.state;
                            S.debug({
                              type: "breadcrumb",
                              message: "containerState",
                              data: n,
                            });
                            const r = s.api.ContainerState.State;
                            switch (n) {
                              case r.READY:
                                if ((k(), C(), !S.connectOptions))
                                  return void S.onUnrecoverableError(
                                    new Error(
                                      "Expected connectionOptions"
                                    )
                                  );
                                if (!t)
                                  return void S.onUnrecoverableError(
                                    new Error(
                                      "Expected chan0 to be truthy"
                                    )
                                  );
                                if (!S.chan0Cb)
                                  return void S.onUnrecoverableError(
                                    new Error(
                                      "Expected chan0Cb to be truthy"
                                    )
                                  );
                                S.handleConnect();
                                const o = S.close;
                                (S.close = () => {
                                  return setTimeout(() => {
                                    o();
                                  }, 0);
                                }),
                                  (S.chan0CleanupCb = S.chan0Cb({
                                    channel: t,
                                    error: null,
                                    context: S.connectOptions.context,
                                  })),
                                  (S.close = o);
                                break;
                              case r.SLEEP:
                                if (!v)
                                  return void S.onUnrecoverableError(
                                    new Error(
                                      "Got SLEEP but there was no `onFailed` cb"
                                    )
                                  );
                                v(
                                  new Error(
                                    "Got SLEEP as container state"
                                  )
                                );
                            }
                          } else
                            S.onUnrecoverableError(
                              new Error(
                                "Got containterState but state was not defined"
                              )
                            );
                      })),
                      (v = e => {
                        (v = null),
                          S.cleanupSocket(),
                          C(),
                          k(),
                          S.retryConnect({
                            tryCount: n + 1,
                            websocketFailureCount: O ? 0 : r + 1,
                            chan0: t,
                            error: e,
                          });
                      }),
                      [2]);
              }
            });
          });
        }),
          (this.retryConnect = ({tryCount, websocketFailureCount, chan0, error}) => {
          const n = tryCount;
          const r = websocketFailureCount;
          const o = chan0;
          const i = error;
          e.retryTimeoutId
            ? e.onUnrecoverableError(
                new Error("unexpected existing retryTimeoutId")
              )
            : e.chan0Cb &&
              (e.retryTimeoutId = setTimeout(() => {
                e.chan0Cb
                  ? ((e.retryTimeoutId = null),
                    e.debug({
                      type: "breadcrumb",
                      message: "retrying",
                      data: {
                        connectionState: e.connectionState,
                        connectTries: n,
                        websocketFailureCount: r,
                        error: i,
                        wsReadyState: e.ws ? e.ws.readyState : void 0,
                      },
                    }),
                    o.handleClose({
                      initiator: "client",
                      willReconnect: !0,
                    }),
                    delete e.channels[0],
                    (e.connectionState = A.ConnectionState.DISCONNECTED),
                    e.connect({ tryCount: n, websocketFailureCount: r }))
                  : e.onUnrecoverableError(
                      new Error(
                        "Scheduled retry is called after we closed?"
                      )
                    );
              }, u.getNextRetryDelay(n)));
        }),
          (this.send = t => {
          e.debug({ type: "log", log: { direction: "out", cmd: t } });
          const n = s.api.Command.encode(t).finish();
          const r = n.buffer.slice(n.byteOffset, n.byteOffset + n.length);
          null != e.ws
            ? e.ws.send(r)
            : e.onUnrecoverableError(
                new Error("Calling send on a closed client")
              );
        }),
          (this.onSocketMessage = ({data}) => {
          const n = data;
          const r = new Uint8Array(n);
          const o = s.api.Command.decode(r);
          e.debug({ type: "log", log: { direction: "in", cmd: o } }),
            e.getChannel(o.channel).handleCommand(o);
        }),
          (this.handleConnect = () => {
            if (
              ((e.connectionState = A.ConnectionState.CONNECTED),
              e.debug({ type: "breadcrumb", message: "connected!" }),
              e.ws)
            ) {
              const t = t => {
                e.connectionState !== A.ConnectionState.DISCONNECTED
                  ? (e.debug({
                      type: "breadcrumb",
                      message: "wsclose",
                      data: { event: t },
                    }),
                    e.handleClose({
                      closeReason: a.Disconnected,
                      wsEvent: t,
                    }))
                  : e.onUnrecoverableError(
                      new Error(
                        "Got a close event on socket but client is in disconnected state"
                      )
                    );
              };
              (e.ws.onclose = t),
                (e.ws.onerror = t),
                e.channelRequests.forEach(t => {
                  e.requestOpenChannel(t);
                });
            } else
              e.onUnrecoverableError(
                new Error("Expected Websocket instance")
              );
          }),
          (this.handleClose = ({closeReason}) => {
            if (closeReason !== a.Error) {
              if (e.connectionState === A.ConnectionState.DISCONNECTED)
                return void e.onUnrecoverableError(
                  new Error(
                    "handleClose is called but client already disconnected"
                  )
                );
              if (e.ws && e.fetchTokenAbortController)
                return void e.onUnrecoverableError(
                  new Error(
                    "fetchTokenAbortController and websocket exist simultaneously"
                  )
                );
            }
            e.cleanupSocket(),
              e.retryTimeoutId && clearTimeout(e.retryTimeoutId);
            const n = closeReason === a.Disconnected;
            if (
              (e.channelRequests.forEach(r => {
                const o = n && !r.closeRequested;
                if (r.isOpen)
                  e
                    .getChannel(r.channelId)
                    .handleClose({ initiator: "client", willReconnect: o }),
                    delete e.channels[r.channelId];
                else if (!o)
                  if (e.connectOptions)
                    r.openChannelCb({
                      channel: null,
                      error: new Error("Failed to open"),
                      context: e.connectOptions.context,
                    });
                  else if (closeReason !== a.Error)
                    return void e.onUnrecoverableError(
                      new Error("Expected connectionOptions")
                    );
                const i = r.cleanupCb;
                (r.channelId = null),
                  (r.isOpen = !1),
                  (r.cleanupCb = null),
                  (r.closeRequested = !1),
                  i && i({ initiator: "client", willReconnect: o });
              }),
              e.channels[0] &&
                (e.channels[0].handleClose({
                  initiator: "client",
                  willReconnect: n,
                }),
                delete e.channels[0]),
              0 === Object.keys(e.channels).length ||
                ((e.channels = {}), closeReason === a.Error))
            ) {
              if (e.chan0CleanupCb)
                e.chan0CleanupCb({ initiator: "client", willReconnect: n }),
                  (e.chan0CleanupCb = null);
              else if (!n)
                if (e.chan0Cb && e.connectOptions)
                  e.chan0Cb({
                    channel: null,
                    error: new Error("Failed to open"),
                    context: e.connectOptions.context,
                  });
                else if (closeReason !== a.Error)
                  return void e.onUnrecoverableError(
                    new Error(
                      "open should have been called before `handleClose`"
                    )
                  );
              if (((e.connectionState = A.ConnectionState.DISCONNECTED), !n))
                return (e.chan0Cb = null), void (e.connectOptions = null);
              e.debug({ type: "breadcrumb", message: "reconnecting" }),
                e.connect({ tryCount: 0, websocketFailureCount: 0 });
            } else
              e.onUnrecoverableError(
                new Error(
                  "channels object should be empty after channelRequests and chan0 cleanup"
                )
              );
          }),
          (this.cleanupSocket = () => {
            const t = e.ws;
            e.debug({
              type: "breadcrumb",
              message: "cleanupSocket",
              data: {
                hasWs: Boolean(t),
                readyState: t ? t.readyState : null,
                connectionState: e.connectionState,
              },
            }),
              t &&
                ((e.ws = null),
                (e.connectionMetadata = null),
                (t.onmessage = null),
                (t.onclose = null),
                (t.onerror = () => {}),
                (0 !== t.readyState && 1 !== t.readyState) ||
                  (e.debug({ type: "breadcrumb", message: "wsclose" }),
                  t.close()));
          }),
          (this.onUnrecoverableError = t => {
            if (
              (e.debug({
                type: "breadcrumb",
                message: "unrecoverable error",
                data: { message: t.message },
              }),
              e.connectionState !== A.ConnectionState.DISCONNECTED)
            )
              try {
                e.handleClose({ closeReason: a.Error, error: t });
              } catch (n) {
                console.error(
                  "handleClose errored during unrecoverable error"
                ),
                  console.error(n);
              }
            if (!e.userUnrecoverableErrorHandler)
              throw (
                (console.error(
                  "Please supply your own unrecoverable error handling function"
                ),
                t)
              );
            e.userUnrecoverableErrorHandler(t);
          }),
          (this.ws = null),
          (this.channels = {}),
          (this.connectOptions = null),
          (this.chan0Cb = null),
          (this.chan0CleanupCb = null),
          (this.connectionState = A.ConnectionState.DISCONNECTED),
          (this.debug = () => {}),
          (this.userUnrecoverableErrorHandler = null),
          (this.channelRequests = []),
          (this.retryTimeoutId = null),
          (this.fetchTokenAbortController = null),
          (this.destroyed = !1),
          (this.connectionMetadata = null),
          this.debug({ type: "breadcrumb", message: "constructor" });
      };

      t.Client = p;
    },
    fA4Q(e, t, n) {
      "use strict";
      const r = n("hfKm");
      const o = n.n(r);
      const i = n("2Eek");
      const a = n.n(i);
      const s = n("XoMD");
      const c = n.n(s);
      const u = n("Jo+v");
      const l = n.n(u);
      const A = n("4mXO");
      const h = n.n(A);
      const p = n("pLtp");
      const f = n.n(p);
      const d = n("ln6h");
      const b = n.n(d);
      const y = n("vYYK");
      const g = n("qNsG");
      const v = n("WK0V");
      const m = n("zgDP");
      const C = n("eVuF");
      const w = n.n(C);
      function E({client, args, env}) {
        let t;
        let n;
        let r;
        return b.a.async(o => {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                return (t = client),
                (n = args),
                (r = env),
                o.abrupt(
                  "return",
                  new w.a(e => {
                    const o = t.openChannel({ service: "exec" }, ({error, channel}) => {
                      const i = error;
                      const a = channel;
                      if (i) e({ error: i.message, output: null });
                      else {
                        if (!a) throw new Error("Expected channel");
                        let s = "";
                        a.onCommand(({output}) => {
                          output && (s += output);
                        }),
                          a
                            .request({ exec: { args: n, env: r } })
                            .then(({channelClosed, error}) => {
                              channelClosed
                                ? e({
                                    error: "Channel closed",
                                    output: s || null,
                                  })
                                : ("open" === a.status && o(),
                                  error
                                    ? e({ error: error, output: s || null })
                                    : e({ output: s, error: null }));
                            });
                      }
                    });
                  })
                );
              case 2:
              case "end":
                return o.stop();
            }
        });
      }
      let O;
      const k = n("JxgA");
      const S = n("TjQ3");
      function x(e, t) {
        const n = f()(e);
        if (h.a) {
          let r = h()(e);
          t &&
            (r = r.filter(t => {
              return l()(e, t).enumerable;
            })),
            n.push(...r);
        }
        return n;
      }
      function B(e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? x(Object(n), !0).forEach(t => {
                Object(y.a)(e, t, n[t]);
              })
            : c.a
            ? a()(e, c()(n))
            : x(Object(n)).forEach(t => {
                o()(e, t, l()(n, t));
              });
        }
        return e;
      }
      function T(e) {
        let t;
        let n;
        let r;
        let o;
        let i;
        let a;
        let s;
        let c;
        return b.a.async(
          u => {
            for (;;)
              switch ((u.prev = u.next)) {
                case 0:
                  if (
                    ((t = e.replId),
                    (n = e.isVnc),
                    (r = e.canWrite),
                    (o = e.isLoggedIn),
                    (i = e.overrideClusterMetadata),
                    (a = e => {
                      Object(m.track)(m.events.GOVAL_CONNECTION_FAILED, {
                        error: (e && e.message) || "unidentified failure",
                        host: window.location.hostname,
                        replId: t,
                        reason: "captcha",
                        context: "services",
                      });
                    }),
                    (s = {
                      url: "/data/repls/".concat(t, "/get_connection_metadata"),
                      overrideClusterMetadata: i,
                      clientVersion: "2aa1756",
                      hCaptchaSiteKey: k.a,
                      flags: {},
                    }),
                    !o)
                  ) {
                    u.next = 5;
                    break;
                  }
                  return u.abrupt("return", Object(S.a)(s));
                case 5:
                  return (u.prev = 5), (u.next = 8), b.a.awrap(Object(k.b)());
                case 8:
                  return (
                    (c = u.sent),
                    u.abrupt("return", Object(S.a)(B({}, s, { captcha: c })))
                  );
                case 12:
                  return (
                    (u.prev = 12),
                    (u.t0 = u.catch(5)),
                    a(u.t0),
                    u.abrupt(
                      "return",
                      T({
                        replId: t,
                        isVnc: n,
                        canWrite: r,
                        overrideClusterMetadata: i,
                      })
                    )
                  );
                case 16:
                case "end":
                  return u.stop();
              }
          },
          null,
          null,
          [[5, 12]]
        );
      }
      !(e => {
        (e.CONNECTING = "CONNECTING"),
          (e.CONNECTED = "CONNECTED"),
          (e.DISCONNECTED = "DISCONNECTED");
      })(O || (O = {}));
      const N = n("Fz/E");
      const F = n("P2Oe");
      const R = n("zV7b");
      function D(e, t) {
        const n = f()(e);
        if (h.a) {
          let r = h()(e);
          t &&
            (r = r.filter(t => {
              return l()(e, t).enumerable;
            })),
            n.push(...r);
        }
        return n;
      }
      function I(e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? D(Object(n), !0).forEach(t => {
                Object(y.a)(e, t, n[t]);
              })
            : c.a
            ? a()(e, c()(n))
            : D(Object(n)).forEach(t => {
                o()(e, t, l()(n, t));
              });
        }
        return e;
      }
      n.d(t, "b", () => {
        return M;
      }),
        n.d(t, "a", () => {
          return O;
        });
      let U;
      const P = 5900;
      function M({onUnrecoverableError}) {
        const t = onUnrecoverableError;
        const n = Object(N.a)();
        let r = null;
        let o = O.DISCONNECTED;

        const i = e => {
          o !== e && ((o = e), n.emit(U.CONNECTION_STATE_CHANGE, o));
        };

        const a = new v.Client();
        let s = null;
        a.setUnrecoverableErrorHandler(t);
        const c = window.location.search.includes("debug=1");
        return c &&
          a.setDebugFunc(({type, log}) => {
            "log" === type &&
              console.log(
                "in" === log.direction ? "--\x3e" : "<--",
                log.cmd
              );
          }),
        {
          onPortOpened(e) {
            return n.on(U.PORT_OPEN, e),
            () => {
              n.removeListener(U.PORT_OPEN, e);
            }
          ;
          },
          onConnectionStateChanged(e) {
            return n.on(U.CONNECTION_STATE_CHANGE, e),
            () => {
              n.removeListener(U.CONNECTION_STATE_CHANGE, e);
            }
          ;
          },
          connect(e) {
            const t = e.repl;
            const u = e.currentUser;
            const l = e.overrideClusterMetadata;
            const A = e.customConnectionMetadata;
            const h = e.fetchConnectionMetadataExtras;

            const p = Object(g.a)(e, [
              "repl",
              "currentUser",
              "overrideClusterMetadata",
              "customConnectionMetadata",
              "fetchConnectionMetadataExtras",
            ]);

            (r = t), o !== O.DISCONNECTED && a.close();
            const f = Boolean(u);
            let d = null;

            const y = {
              context: { repl: t, currentUser: u },
              fetchConnectionMetadata({aborted}) {
                let n;
                let r;
                return b.a.async(
                  o => {
                    for (;;)
                      switch ((o.prev = o.next)) {
                        case 0:
                          return (o.next = 2), b.a.awrap(Object(R.a)());
                        case 2:
                          if (!aborted) {
                            o.next = 4;
                            break;
                          }
                          return o.abrupt("return", {
                            error: v.FetchConnectionMetadataError.Aborted,
                          });
                        case 4:
                          if (l || !A || d === A.token) {
                            o.next = 8;
                            break;
                          }
                          return (
                            (s = A),
                            (d = A.token),
                            o.abrupt("return", I({}, A, { error: null }))
                          );
                        case 8:
                          if (((o.prev = 8), !p.fetchConnectionMetadata)) {
                            o.next = 15;
                            break;
                          }
                          return (
                            (o.next = 12),
                            b.a.awrap(p.fetchConnectionMetadata())
                          );
                        case 12:
                          (n = o.sent), (o.next = 18);
                          break;
                        case 15:
                          return (
                            (o.next = 17),
                            b.a.awrap(
                              T(
                                I(
                                  {
                                    replId: t.id,
                                    isVnc: Boolean(t.config.isVnc),
                                    canWrite: Boolean(
                                      null ===
                                        (r = t.currentUserPermissions) ||
                                        void 0 === r
                                        ? void 0
                                        : r.containerWrite
                                    ),
                                    isLoggedIn: f,
                                    overrideClusterMetadata: l,
                                    currentUser: u,
                                  },
                                  h
                                )
                              )
                            )
                          );
                        case 17:
                          n = o.sent;
                        case 18:
                          o.next = 27;
                          break;
                        case 20:
                          (o.prev = 20),
                            (o.t0 = o.catch(8)),
                            (o.t1 = (o.t0 && o.t0.statusCode) || 500),
                            (o.next =
                              408 === o.t1
                                ? 25
                                : 409 === o.t1
                                ? 25
                                : 429 === o.t1
                                ? 25
                                : 502 === o.t1
                                ? 25
                                : 503 === o.t1
                                ? 25
                                : 504 === o.t1
                                ? 25
                                : 26);
                          break;
                        case 25:
                          return o.abrupt("return", {
                            error: v.FetchConnectionMetadataError.Retriable,
                          });
                        case 26:
                          throw o.t0;
                        case 27:
                          if (!aborted) {
                            o.next = 29;
                            break;
                          }
                          return o.abrupt("return", {
                            error: v.FetchConnectionMetadataError.Aborted,
                          });
                        case 29:
                          return (
                            (s = n),
                            c && console.log("connecting", n),
                            o.abrupt("return", I({}, n, { error: null }))
                          );
                        case 32:
                        case "end":
                          return o.stop();
                      }
                  },
                  null,
                  null,
                  [[8, 20]]
                );
              },
            };

            let C = window.performance.now();
            let w = 0;
            a.open(y, ({channel, error}) => {
              const r = channel;
              if (error) return i(O.DISCONNECTED), () => {};
              if (!r) throw new Error("Expected channel");
              c && console.log("connected", { replId: t.id });
              const o = r.onCommand(({body, portOpen}) => {
                switch (body) {
                  case "portOpen":
                    if (!portOpen)
                      throw new Error(
                        "portOpen only handles portOpen commands"
                      );
                    const t = portOpen.port || 0;
                    if (5901 === t) return;
                    n.emit(U.PORT_OPEN, {
                      port: t,
                      isVnc: t === P,
                      forwarded: Boolean(portOpen.forwarded),
                    });
                }
              });
              window.v6ws = a.ws;
              const u = t.id;
              const l = t.language;
              return Object(m.track)(m.events.CONTAINER_SERVICE_CONNECTED, {
                time: window.performance.now() - C,
                reconnect: w,
                replId: u,
                language: l,
              }),
              i(O.CONNECTED),
              e => {
                if (
                  (o(), (s = null), "willReconnect" in e && e.willReconnect)
                )
                  return (
                    (C = window.performance.now()),
                    w++,
                    void i(O.CONNECTING)
                  );
                i(O.DISCONNECTED);
              }
            ;
            }),
              i(O.CONNECTING);
          },
          openChannel(e, t) {
            let n = window.performance.now();
            let o = 0;
            const i = e.name;
            const s = e.service;
            return a.openChannel(e, e => {
              let a;
              let c;
              let u;
              Object(m.track)(m.events.OPEN_CHANNEL_CALLBACK_CALLED, {
                timeToOpen: window.performance.now() - n,
                replId: null === (a = r) || void 0 === a ? void 0 : a.id,
                language:
                  null === (c = r) || void 0 === c ? void 0 : c.language,
                slug: null === (u = r) || void 0 === u ? void 0 : u.slug,
                error: e.error,
                reconnect: o,
                name: i,
                service: s,
              });
              const l = t(e);
              return e => {
                l && l(e), (n = window.performance.now()), o++;
              };
            });
          },
          getConnectionState() {
            return o;
          },
          exec(...args) {
            let e;
            let t;
            let n;
            const r = args;
            return b.a.async(o => {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    for (e = r.length, t = new Array(e), n = 0; n < e; n++)
                      t[n] = r[n];
                    return o.abrupt("return", E({ client: a, args: t }));
                  case 2:
                  case "end":
                    return o.stop();
                }
            });
          },
          execWithEnv(e) {
            let t;
            let n;
            let r;
            const o = arguments;
            return b.a.async(i => {
              for (;;)
                switch ((i.prev = i.next)) {
                  case 0:
                    for (
                      t = o.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
                      r < t;
                      r++
                    )
                      n[r - 1] = o[r];
                    return i.abrupt(
                      "return",
                      E({ client: a, args: n, env: e })
                    );
                  case 2:
                  case "end":
                    return i.stop();
                }
            });
          },
          close() {
            (r = null), o !== O.DISCONNECTED && a.close();
          },
          destroy() {
            (r = null), a.destroy(), n.removeAllListeners();
          },
          client() {
            return a;
          },
          getConnectionMetadata() {
            return s;
          },
          getRepl() {
            return r;
          },
          getVncUrl() {
            if (!s || o !== O.CONNECTED)
              throw new Error(
                "Cannot get vnc url when container is not connected"
              );
            return Object(F.c)(s.token);
          },
        };
      }
      !(e => {
        (e.CONNECTION_STATE_CHANGE = "CONNECTION_STATE_CHANGE"),
          (e.PORT_OPEN = "PORT_OPEN");
      })(U || (U = {}));
    },
    gnSh(e, t, n) {
      function r(e) {
        if (e)
          return (e => {
            for (const t in r.prototype) e[t] = r.prototype[t];
            return e;
          })(e);
      }
      (e.exports = r),
        (r.prototype.on = r.prototype.addEventListener = function (e, t) {
          return (this._callbacks = this._callbacks || {}),
          (this._callbacks[`$${e}`] = this._callbacks[`$${e}`] || []).push(t),
          this
        ;
        }),
        (r.prototype.once = function (e, t) {
          function n(...args) {
            this.off(e, n), t.apply(this, args);
          }
          return (n.fn = t), this.on(e, n), this;
        }),
        (r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (
          e,
          t
        ) {
        if (
          ((this._callbacks = this._callbacks || {}), 0 == arguments.length)
        )
          return (this._callbacks = {}), this;
        let n;
        const r = this._callbacks[`$${e}`];
        if (!r) return this;
        if (1 == arguments.length)
          return delete this._callbacks[`$${e}`], this;
        for (let o = 0; o < r.length; o++)
          if ((n = r[o]) === t || n.fn === t) {
            r.splice(o, 1);
            break;
          }
        return 0 === r.length && delete this._callbacks[`$${e}`], this;
      }),
        (r.prototype.emit = function (e) {
          this._callbacks = this._callbacks || {};
          for (
            var t = new Array(arguments.length - 1),
              n = this._callbacks[`$${e}`],
              r = 1;
            r < arguments.length;
            r++
          )
            t[r - 1] = arguments[r];
          if (n) {
            r = 0;
            for (const o = (n = n.slice(0)).length; r < o; ++r)
              n[r].apply(this, t);
          }
          return this;
        }),
        (r.prototype.listeners = function (e) {
          return (this._callbacks = this._callbacks || {}),
          this._callbacks[`$${e}`] || []
        ;
        }),
        (r.prototype.hasListeners = function (e) {
          return !!this.listeners(e).length;
        });
    },
    "hKI/": function (e, t, n) {
      ((t => {
        const n = "Expected a function";
        const r = NaN;
        const o = "[object Symbol]";
        const i = /^\s+|\s+$/g;
        const a = /^[-+]0x[0-9a-f]+$/i;
        const s = /^0b[01]+$/i;
        const c = /^0o[0-7]+$/i;
        const u = parseInt;
        const l = "object" == typeof t && t && t.Object === Object && t;
        const A = "object" == typeof self && self && self.Object === Object && self;
        const h = l || A || Function("return this")();
        const p = Object.prototype.toString;
        const f = Math.max;
        const d = Math.min;

        const b = () => {
          return h.Date.now();
        };

        function y(e, t, r) {
          let o;
          let i;
          let a;
          let s;
          let c;
          let u;
          let l = 0;
          let A = !1;
          let h = !1;
          let p = !0;
          if ("function" != typeof e) throw new TypeError(n);
          function y(t) {
            const n = o;
            const r = i;
            return (o = i = void 0), (l = t), (s = e.apply(r, n));
          }
          function m(e) {
            const n = e - u;
            return void 0 === u || n >= t || n < 0 || (h && e - l >= a);
          }
          function C() {
            const e = b();
            if (m(e)) return w(e);
            c = setTimeout(C, (e => {
              const n = t - (e - u);
              return h ? d(n, a - (e - l)) : n;
            })(e));
          }
          function w(e) {
            return (c = void 0), p && o ? y(e) : ((o = i = void 0), s);
          }
          function E(...args) {
            const e = b();
            const n = m(e);
            if (((o = args), (i = this), (u = e), n)) {
              if (void 0 === c)
                return (e => {
                  return (l = e), (c = setTimeout(C, t)), A ? y(e) : s;
                })(u);
              if (h) return (c = setTimeout(C, t)), y(u);
            }
            return void 0 === c && (c = setTimeout(C, t)), s;
          }
          return (t = v(t) || 0),
          g(r) &&
            ((A = !!r.leading),
            (a = (h = "maxWait" in r) ? f(v(r.maxWait) || 0, t) : a),
            (p = "trailing" in r ? !!r.trailing : p)),
          (E.cancel = () => {
            void 0 !== c && clearTimeout(c),
              (l = 0),
              (o = u = i = c = void 0);
          }),
          (E.flush = () => {
            return void 0 === c ? s : w(b());
          }),
          E
        ;
        }
        function g(e) {
          const t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function v(e) {
          if ("number" == typeof e) return e;
          if ((e => {
            return "symbol" == typeof e ||
            ((e => {
              return !!e && "object" == typeof e;
            })(e) && p.call(e) == o);
          })(e))
            return r;
          if (g(e)) {
            const t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = g(t) ? `${t}` : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(i, "");
          const n = s.test(e);
          return n || c.test(e) ? u(e.slice(2), n ? 2 : 8) : a.test(e) ? r : +e;
        }
      }).call(this, n("yLpj")));
    },
    koLh(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return A;
      });
      const r = n("doui");
      const o = n("q1tI");
      const i = n.n(o);
      const a = n("hKI/");
      const s = n.n(a);
      const c = n("9/5/");
      const u = n.n(c);
      const l = n("7njZ");
      function A(e, t) {
        const n = Object(l.a)();
        const o = i.a.useRef(e);
        o.current = e;
        const a = t || {};
        const c = a.type;
        const A = a.wait;

        const h = i.a.useMemo(
          () => {
            return c
              ? ("debounce" === c ? u.a : s.a)(e => {
                  n.current && o.current(e);
                }, A)
              : e => {
                  n.current && o.current(e);
                };
          },
          [c, A]
        );

        const p = i.a.useRef(h);
        p.current = h;
        const f = i.a.useState(null);
        const d = Object(r.a)(f, 2);
        const b = d[0];
        const y = d[1];

        const g = i.a.useCallback(
          e => {
            y(e);
          },
          [y]
        );

        const v = i.a.useRef(null);
        const m = i.a.useRef({ width: void 0, height: void 0 });
        return i.a.useEffect(() => {
          const e = new window.ResizeObserver(e => {
            const t = e[0];
            if (t) {
              const r = Math.round(t.contentRect.width);
              const o = Math.round(t.contentRect.height);
              (m.current.width === r && m.current.height === o) ||
                window.requestAnimationFrame(() => {
                  n.current && p.current({ width: r, height: o });
                });
            }
          });
          return (v.current = e),
          () => {
            e.disconnect(), (v.current = null);
          }
        ;
        }, []),
        i.a.useEffect(
          () => {
            if (v.current && b)
              return v.current.observe(b),
              () => {
                v.current && v.current.unobserve(b),
                  "cancel" in p.current && p.current.cancel();
              }
            ;
          },
          [b]
        ),
        g;
      }
    },
    "m+yM": function (e, t, n) {
      function r(e) {
        let n;
        function r(...args) {
          if (r.enabled) {
            const e = r;
            const o = +new Date();
            const i = o - (n || o);
            (e.diff = i), (e.prev = n), (e.curr = o), (n = o);
            for (var a = new Array(args.length), s = 0; s < a.length; s++)
              a[s] = args[s];
            (a[0] = t.coerce(a[0])),
              "string" !== typeof a[0] && a.unshift("%O");
            let c = 0;
            (a[0] = a[0].replace(/%([a-zA-Z%])/g, (n, r) => {
              if ("%%" === n) return n;
              c++;
              const o = t.formatters[r];
              if ("function" === typeof o) {
                const i = a[c];
                (n = o.call(e, i)), a.splice(c, 1), c--;
              }
              return n;
            })),
              t.formatArgs.call(e, a),
              (r.log || t.log || console.log.bind(console)).apply(e, a);
          }
        }
        return (r.namespace = e),
        (r.enabled = t.enabled(e)),
        (r.useColors = t.useColors()),
        (r.color = (e => {
          let n;
          let r = 0;
          for (n in e) (r = (r << 5) - r + e.charCodeAt(n)), (r |= 0);
          return t.colors[Math.abs(r) % t.colors.length];
        })(e)),
        (r.destroy = o),
        "function" === typeof t.init && t.init(r),
        t.instances.push(r),
        r;
      }
      function o() {
        const e = t.instances.indexOf(this);
        return -1 !== e && (t.instances.splice(e, 1), !0);
      }
      ((t = e.exports = r.debug = r.default = r).coerce = e => {
        return e instanceof Error ? e.stack || e.message : e;
      }),
        (t.disable = () => {
          t.enable("");
        }),
        (t.enable = e => {
        let n;
        t.save(e), (t.names = []), (t.skips = []);
        const r = ("string" === typeof e ? e : "").split(/[\s,]+/);
        const o = r.length;
        for (n = 0; n < o; n++)
          r[n] &&
            ("-" === (e = r[n].replace(/\*/g, ".*?"))[0]
              ? t.skips.push(new RegExp(`^${e.substr(1)}$`))
              : t.names.push(new RegExp(`^${e}$`)));
        for (n = 0; n < t.instances.length; n++) {
          const i = t.instances[n];
          i.enabled = t.enabled(i.namespace);
        }
      }),
        (t.enabled = e => {
        if ("*" === e[e.length - 1]) return !0;
        let n;
        let r;
        for (n = 0, r = t.skips.length; n < r; n++)
          if (t.skips[n].test(e)) return !1;
        for (n = 0, r = t.names.length; n < r; n++)
          if (t.names[n].test(e)) return !0;
        return !1;
      }),
        (t.humanize = n("FGiv")),
        (t.instances = []),
        (t.names = []),
        (t.skips = []),
        (t.formatters = {});
    },
    qzUi(e, t, n) {
      "use strict";
      n.d(t, "b", () => {
        return l;
      }),
        n.d(t, "a", () => {
          return A;
        });
      const r = n("ln6h");
      const o = n.n(r);
      const i = n("eVuF");
      const a = n.n(i);
      const s = n("doui");
      const c = n("g7Gn");
      const u = n("IUvJ");
      function l() {
        let e;
        let t;
        let n;
        let r;
        let i;
        let c;
        return o.a.async(l => {
          for (;;)
            switch ((l.prev = l.next)) {
              case 0:
                return (l.next = 2), o.a.awrap(a.a.all([Object(u.a)(), A()]));
              case 2:
                return (e = l.sent),
                (t = Object(s.a)(e, 1)),
                (n = t[0]),
                (r = n.xterm),
                (i = n.fitAddon),
                (c = n.searchAddon),
                (r.fit = () => {
                  return i.fit();
                }),
                (r.searchAddon = c),
                l.abrupt("return", r)
              ;
              case 11:
              case "end":
                return l.stop();
            }
        });
      }
      function A() {
        return o.a.async(e => {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return p(),
                e.abrupt(
                  "return",
                  f().catch(e => {
                    c.c(e);
                  })
                )
              ;
              case 2:
              case "end":
                return e.stop();
            }
        });
      }
      const h = "replit-icons-font";
      function p() {
        if (!document.getElementById(h)) {
          const e = n("BQO9");
          const t = n("dDrW");
          const r = document.createElement("style");
          (r.id = h),
            (r.type = "text/css"),
            r.appendChild(
              document.createTextNode(
                "\n@font-face {\n  font-family: 'replit-icons';\n  font-style: normal;\n  font-weight: normal;\n  font-stretch: normal;\n  src: url("
                  .concat(e, ") format('woff'),\n    url(")
                  .concat(t, ") format('truetype');\n}")
              )
            ),
            document.head.appendChild(r);
        }
      }
      function f() {
        let e;
        let t;
        let n;
        let r;
        let i;
        return o.a.async(o => {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                if (
                  ((e = "normal normal 100px replit-icons"),
                  !(t = document.fonts))
                ) {
                  o.next = 6;
                  break;
                }
                if (!t.check(e)) {
                  o.next = 5;
                  break;
                }
                return o.abrupt("return");
              case 5:
                return o.abrupt(
                  "return",
                  new a.a((n, r) => {
                    let o = !1;

                    const i = setTimeout(() => {
                      (o = !0), r(new Error("Font loading timed out"));
                    }, 3e3);

                    t.load(e, String.fromCharCode(61095))
                      .then(() => {
                        o ||
                          (clearTimeout(i),
                          t.check(e)
                            ? n()
                            : r(
                                new Error(
                                  "document.font.load resolved without loading"
                                )
                              ));
                      })
                      .catch(e => {
                        o || (clearTimeout(i), r(e));
                      });
                  })
                );
              case 6:
                if (
                  (((n = document.createElement(
                    "span"
                  )).innerText = String.fromCharCode(61095)),
                  (n.style.font = "normal normal 100px sans-serif"),
                  (n.style.position = "absolute"),
                  (n.style.left = "-9999px"),
                  (n.style.top = "-9999px"),
                  document.body.appendChild(n),
                  (r = n.offsetWidth),
                  (n.style.font = e),
                  !(i = () => {
                    return r !== n.offsetWidth;
                  })())
                ) {
                  o.next = 18;
                  break;
                }
                return o.abrupt("return");
              case 18:
                return o.abrupt(
                  "return",
                  new a.a((e, t) => {
                    const r = setInterval(() => {
                              i() &&
                                (clearInterval(r),
                                clearTimeout(o),
                                document.body.removeChild(n),
                                e());
                            }, 50);

                    const o = setTimeout(() => {
                      clearInterval(r),
                        document.body.removeChild(n),
                        i() ? e() : t(new Error("Font loading timed out"));
                    }, 3e3);
                  })
                );
              case 19:
              case "end":
                return o.stop();
            }
        });
      }
    },
    r8CS(e, t) {
      (t.encode = e => {
        let t = "";
        for (const n in e)
          e.hasOwnProperty(n) &&
            (t.length && (t += "&"),
            (t += `${encodeURIComponent(n)}=${encodeURIComponent(e[n])}`));
        return t;
      }),
        (t.decode = e => {
          for (var t = {}, n = e.split("&"), r = 0, o = n.length; r < o; r++) {
            const i = n[r].split("=");
            t[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
          }
          return t;
        });
    },
    "rx/v": function (e, t, n) {
      const r = n("yeub");
      const o = n("HiSk");
    },
    u0Ev(e, t, n) {
      ((t => {
        let r;
        let o;
        const i = n("O9h/");
        const a = n("E+TZ");
        const s = n("r8CS");
        const c = n("Yvos");
        const u = n("Aplp");
        const l = n("EuBs")("engine.io-client:websocket");
        if (
          ("undefined" !== typeof WebSocket
            ? (r = WebSocket)
            : "undefined" !== typeof self &&
              (r = self.WebSocket || self.MozWebSocket),
          "undefined" === typeof window)
        )
          try {
            o = n(21);
          } catch (p) {}
        let A = r || o;
        function h(e) {
          e && e.forceBase64 && (this.supportsBinary = !1),
            (this.perMessageDeflate = e.perMessageDeflate),
            (this.usingBrowserWebSocket = r && !e.forceNode),
            (this.protocols = e.protocols),
            this.usingBrowserWebSocket || (A = o),
            i.call(this, e);
        }
        (e.exports = h),
          c(h, i),
          (h.prototype.name = "websocket"),
          (h.prototype.supportsBinary = !0),
          (h.prototype.doOpen = function () {
            if (this.check()) {
              const e = this.uri();
              const t = this.protocols;
              const n = {};
              this.isReactNative ||
                ((n.agent = this.agent),
                (n.perMessageDeflate = this.perMessageDeflate),
                (n.pfx = this.pfx),
                (n.key = this.key),
                (n.passphrase = this.passphrase),
                (n.cert = this.cert),
                (n.ca = this.ca),
                (n.ciphers = this.ciphers),
                (n.rejectUnauthorized = this.rejectUnauthorized)),
                this.extraHeaders && (n.headers = this.extraHeaders),
                this.localAddress && (n.localAddress = this.localAddress);
              try {
                this.ws =
                  this.usingBrowserWebSocket && !this.isReactNative
                    ? t
                      ? new A(e, t)
                      : new A(e)
                    : new A(e, t, n);
              } catch (r) {
                return this.emit("error", r);
              }
              void 0 === this.ws.binaryType && (this.supportsBinary = !1),
                this.ws.supports && this.ws.supports.binary
                  ? ((this.supportsBinary = !0),
                    (this.ws.binaryType = "nodebuffer"))
                  : (this.ws.binaryType = "arraybuffer"),
                this.addEventListeners();
            }
          }),
          (h.prototype.addEventListeners = function () {
            const e = this;
            (this.ws.onopen = () => {
              e.onOpen();
            }),
              (this.ws.onclose = () => {
                e.onClose();
              }),
              (this.ws.onmessage = ({data}) => {
                e.onData(data);
              }),
              (this.ws.onerror = t => {
                e.onError("websocket error", t);
              });
          }),
          (h.prototype.write = function (e) {
            const n = this;
            this.writable = !1;
            for (let r = e.length, o = 0, i = r; o < i; o++)
              !(e => {
                a.encodePacket(e, n.supportsBinary, o => {
                  if (!n.usingBrowserWebSocket) {
                    var i = {};
                    if (
                      (e.options && (i.compress = e.options.compress),
                      n.perMessageDeflate)
                    )
                      ("string" === typeof o ? t.byteLength(o) : o.length) <
                        n.perMessageDeflate.threshold && (i.compress = !1);
                  }
                  try {
                    n.usingBrowserWebSocket ? n.ws.send(o) : n.ws.send(o, i);
                  } catch (p) {
                    l("websocket closed before onclose event");
                  }
                  --r || s();
                });
              })(e[o]);
            function s() {
              n.emit("flush"),
                setTimeout(() => {
                  (n.writable = !0), n.emit("drain");
                }, 0);
            }
          }),
          (h.prototype.onClose = function () {
            i.prototype.onClose.call(this);
          }),
          (h.prototype.doClose = function () {
            "undefined" !== typeof this.ws && this.ws.close();
          }),
          (h.prototype.uri = function () {
          let e = this.query || {};
          const t = this.secure ? "wss" : "ws";
          let n = "";
          return this.port &&
            (("wss" === t && 443 !== Number(this.port)) ||
              ("ws" === t && 80 !== Number(this.port))) &&
            (n = `:${this.port}`),
          this.timestampRequests && (e[this.timestampParam] = u()),
          this.supportsBinary || (e.b64 = 1),
          (e = s.encode(e)).length && (e = `?${e}`),
          `${t}://${this.hostname.includes(":")
    ? `[${this.hostname}]`
    : this.hostname}${n}${this.path}${e}`;
        }),
          (h.prototype.check = function () {
            return (
              !!A && !("__initialize" in A && this.name === h.prototype.name)
            );
          });
      }).call(this, n("HDXh").Buffer));
    },
    yLpU(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), t.FetchConnectionMetadataError = t.ConnectionState = void 0, (e => {
        (e[(e.CONNECTING = 0)] = "CONNECTING"),
          (e[(e.CONNECTED = 1)] = "CONNECTED"),
          (e[(e.DISCONNECTED = 2)] = "DISCONNECTED");
      })(t.ConnectionState || (t.ConnectionState = {})), (e => {
        (e.Aborted = "Aborted"), (e.Retriable = "Retriable");
      })(t.FetchConnectionMetadataError ||
        (t.FetchConnectionMetadataError = {}));
    },
    zV7b(e, t, n) {
      "use strict";
      n.d(t, "a", () => {
        return s;
      });
      const r = n("ln6h");
      const o = n.n(r);
      const i = n("eVuF");
      const a = n.n(i);
      function s() {
        return o.a.async(e => {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if ("undefined" !== typeof document) {
                  e.next = 2;
                  break;
                }
                return e.abrupt("return");
              case 2:
                if (document.hidden) {
                  e.next = 4;
                  break;
                }
                return e.abrupt("return");
              case 4:
                return e.abrupt(
                  "return",
                  new a.a(e => {
                    document.addEventListener("visibilitychange", function t() {
                      document.hidden ||
                        (document.removeEventListener("visibilitychange", t),
                        e());
                    });
                  })
                );
              case 5:
              case "end":
                return e.stop();
            }
        });
      }
    },
  },
]);
//# sourceMappingURL=033c4de1fc8b3a0091e28c93140b5893854fa009.c5a182ecbfb2bea05526.js.map
