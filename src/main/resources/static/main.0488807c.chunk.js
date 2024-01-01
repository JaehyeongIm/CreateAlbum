(this["webpackJsonpt2-client"] = this["webpackJsonpt2-client"] || []).push([[0], {
    101: function (e, t, n) {
        "use strict";

        function a(e, t, n, a, i, r, s, o) {
            n = void 0 === n ? 0 : n, a = void 0 === a ? 0 : a, i = void 0 === i ? e.canvas.width : i, r = void 0 === r ? e.canvas.height : r;
            var c = s = void 0 === s ? .5 : s, l = o = void 0 === o ? .5 : o;
            c < 0 && (c = 0), l < 0 && (l = 0), c > 1 && (c = 1), l > 1 && (l = 1);
            var d, u, h, p, b = t.width, m = t.height, g = Math.min(i / b, r / m), j = b * g, f = m * g, v = 1;
            j < i && (v = i / j), Math.abs(v - 1) < 1e-14 && f < r && (v = r / f), (d = (b - (h = b / ((j *= v) / i))) * s) < 0 && (d = 0), (u = (m - (p = m / ((f *= v) / r))) * o) < 0 && (u = 0), h > b && (h = b), p > m && (p = m), e.drawImage(t, d, u, h, p, n, a, i, r)
        }

        function i(e, t, n, a, i, r) {
            var s = t.width * (r / t.height), o = (i - s) / 2;
            e.drawImage(t, n + o, a, s, r)
        }

        n.d(t, "b", (function () {
            return a
        })), n.d(t, "a", (function () {
            return i
        }))
    }, 12: function (e, t, n) {
        "use strict";
        (function (e) {
            var a = n(73), i = n(34), r = n(35), s = n(37), o = n(36), c = n(29), l = n(99), d = n.n(l), u = n(159),
                h = n(8), p = n(75), b = n(81), m = n(14), g = "CHANGE_EVENT",
                j = new p.c({id: 0, src: "", title: "", playcount: ""}), f = new p.c({
                    cards: Array.apply(null, Array(144)),
                    background: "#000",
                    bigAlbums: !1,
                    fontFamily: "monospace",
                    shadowed: !1,
                    titled: !1,
                    numbered: !1,
                    playcounts: !1,
                    size_: 42,
                    padding: 2,
                    rows: 0,
                    columns: 0,
                    mode: "music"
                }), v = new p.c({charts: {cards: "Untitled Chart"}, chosen: "cards"}),
                O = Object(p.b)({chart: new f, options: new v}), x = function (t) {
                    Object(s.a)(a, t);
                    var n = Object(o.a)(a);

                    function a() {
                        return Object(i.a)(this, a), n.apply(this, arguments)
                    }

                    return Object(r.a)(a, [{
                        key: "addChangeListener", value: function (e) {
                            this.on(g, e), this.on(g, this.saveAll)
                        }
                    }, {
                        key: "removeChangeListener", value: function (e) {
                            this.removeAllListeners(g, e)
                        }
                    }, {
                        key: "saveAll", value: function () {
                            var t = y.get("chart").toJSON(), n = y.get("options").toJSON(), a = Object(m.c)(t),
                                i = Object(u.deflateSync)(new e(JSON.stringify(t.cards.map((function (e) {
                                    return {src: e.src, title: e.title, playcount: e.playcount}
                                }))))).toString("base64"), r = Object(m.e)(n.chosen, "cards"),
                                s = Object(m.e)(n.chosen, "custom"), o = Object(m.e)(n.chosen, "background"),
                                c = Object(m.e)(n.chosen, "size"), l = Object(m.e)(n.chosen, "titled"),
                                d = Object(m.e)(n.chosen, "numbered");
                            localStorage.setItem(r, JSON.stringify(i)), localStorage.setItem(s, JSON.stringify(a)), localStorage.setItem(o, t.background), localStorage.setItem(c, t.size_), localStorage.setItem(l, t.titled), localStorage.setItem(d, t.numbered), localStorage.setItem("options", JSON.stringify(n))
                        }
                    }, {
                        key: "get", value: function (e) {
                            return O.get(e)
                        }
                    }, {
                        key: "getIn", value: function (e, t) {
                            return O.getIn(e, t)
                        }
                    }, {
                        key: "set", value: function (e, t, n) {
                            return O = O.set(e, t), !1 !== n && y.emit(g), O
                        }
                    }, {
                        key: "setIn", value: function (e, t, n) {
                            return O = O.setIn(e, t), !1 !== n && y.emit(g), O
                        }
                    }, {
                        key: "mergeIn", value: function (e, t, n) {
                            return O = O.mergeIn(e, t), !1 !== n && y.emit(g), O
                        }
                    }, {
                        key: "updateIn", value: function (e, t, n) {
                            return O = O.updateIn(e, t), !1 !== n && y.emit(g), O
                        }
                    }, {
                        key: "getStore", value: function () {
                            return O
                        }
                    }]), a
                }(d.a), y = new x;
            c.a.register((function (t) {
                var n = t.action, i = O.getIn(["chart", "cards"]);
                switch (t.action.actionType) {
                    case h.a.MOVE_CARDS:
                        y.setIn(["chart", "cards"], i.delete(n.dragIndex).insert(n.hoverIndex, n.dragCard));
                        break;
                    case h.a.SET_ART:
                        y.mergeIn(["chart", "cards", n.hoverIndex], {
                            src: n.dragCard.src,
                            title: n.dragCard.title,
                            playcount: n.dragCard.playcount
                        });
                        break;
                    case h.a.SET_BACKGROUND:
                        y.setIn(["chart", "background"], Object(b.isUri)(n.background) ? 'url("'.concat(n.background, '")') : n.background);
                        break;
                    case h.a.SET_SIZE:
                        y.setIn(["chart", "size_"], parseInt(n.size) || 42);
                        break;
                    case h.a.SET_TITLED:
                        y.setIn(["chart", "titled"], n.titled);
                        break;
                    case h.a.SET_NUMBERED:
                        y.setIn(["chart", "numbered"], n.numbered);
                        break;
                    case h.a.SET_MODE:
                        y.setIn(["chart", "mode"], n.mode);
                        break;
                    case h.a.SET_CHART:
                        var r;
                        try {
                            r = JSON.parse(localStorage.getItem(Object(m.e)(n.chosen, "custom")) || "{}")
                        } catch (C) {
                            r = {}
                        }
                        y.set("chart", new f({
                            size_: parseInt(localStorage.getItem(Object(m.e)(n.chosen, "size"))) || 42,
                            background: localStorage.getItem(Object(m.e)(n.chosen, "background")) || "#000",
                            titled: "true" === localStorage.getItem(Object(m.e)(n.chosen, "titled")),
                            numbered: "true" === localStorage.getItem(Object(m.e)(n.chosen, "numbered")),
                            shadowed: void 0 !== r.shadowed && r.shadowed,
                            playcounts: void 0 !== r.playcounts && r.playcounts,
                            fontFamily: void 0 !== r.fontFamily ? r.fontFamily : "monospace",
                            bigAlbums: void 0 !== r.bigAlbums && r.bigAlbums,
                            padding: void 0 !== r.padding ? parseInt(r.padding) : 2,
                            rows: r.rows || 3,
                            columns: r.columns || 3,
                            mode: void 0 !== r.mode ? r.mode : "music"
                        }), !1);
                        try {
                            for (var s = Object(u.inflateSync)(new e(localStorage.getItem(Object(m.e)(n.chosen, "cards")), "base64")).toString(); 0 == s.slice(-1).charCodeAt(0);) s = s.slice(0, -1);
                            var o = JSON.parse(s);
                            y.setIn(["chart", "cards"], Object(p.a)(o.concat(Array.apply(null, Array(144 - o.length))).map((function (e, t) {
                                return new j(e instanceof Object ? {
                                    id: t,
                                    src: e.src,
                                    title: e.title,
                                    playcount: e.playcount
                                } : {id: t, src: e, title: ""})
                            }))), !1)
                        } catch (C) {
                            console.warn("Caught error while trying to set cards", C), y.setIn(["chart", "cards"], Object(p.a)(Array.apply(null, Array(144)).map((function (e, t) {
                                return new j({id: t})
                            }))), !1)
                        }
                        y.setIn(["options", "chosen"], n.chosen);
                        break;
                    case h.a.SET_OPTIONS:
                        y.set("options", new v(n.options));
                        break;
                    case h.a.RESET:
                        y = new x;
                    case h.a.DELETE_CHART:
                        y.updateIn(["options", "charts"], (function (e) {
                            return Object(m.d)(e, [n.chosen])
                        }), !1);
                        var c = y.getIn(["options", "chosen"]), l = Object(m.e)(c, "cards"),
                            d = Object(m.e)(c, "custom"), g = Object(m.e)(c, "background"), w = Object(m.e)(c, "size"),
                            k = Object(m.e)(c, "titled"), S = Object(m.e)(c, "numbered"), T = Object(m.e)(c, "lastfm");
                        localStorage.removeItem(l), localStorage.removeItem(d), localStorage.removeItem(g), localStorage.removeItem(w), localStorage.removeItem(k), localStorage.removeItem(S), localStorage.removeItem(T);
                        break;
                    case h.a.RENAME_CHART:
                        y.updateIn(["options", "charts"], (function (e) {
                            return Object.assign({}, Object.assign(e, Object(a.a)({}, n.chosen, n.name)))
                        }));
                        break;
                    default:
                        return !0
                }
            })), t.a = y
        }).call(this, n(62).Buffer)
    }, 14: function (e, t, n) {
        "use strict";
        n.d(t, "d", (function () {
            return i
        })), n.d(t, "e", (function () {
            return r
        })), n.d(t, "c", (function () {
            return s
        })), n.d(t, "g", (function () {
            return o
        })), n.d(t, "b", (function () {
            return c
        })), n.d(t, "f", (function () {
            return l
        })), n.d(t, "a", (function () {
            return u
        }));
        var a = n(8);

        function i(e, t) {
            var n = Object.assign({}, e);
            return t.forEach((function (e) {
                delete n[e]
            })), n
        }

        function r(e, t) {
            return e === a.a.DEFAULT_CHART_NAME && "lastfm" !== t ? t : "".concat(e, "-").concat(t)
        }

        function s(e) {
            return {
                shadowed: e.shadowed,
                padding: e.padding,
                background: e.background,
                fontFamily: e.fontFamily,
                bigAlbums: e.bigAlbums,
                rows: e.rows,
                columns: e.columns,
                mode: e.mode,
                playcounts: e.playcounts
            }
        }

        function o(e) {
            var t = "\u28fe\u28fd\u28fb\u28bf\u287f\u28df\u28ef\u28f7", n = document.createElement("pre");
            n.id = "spinner";
            var a = 0;
            return setInterval((function () {
                n.innerHTML = t[a], a = (a + 1) % t.length
            }), e), n
        }

        function c(e, t, n) {
            var a;
            return function () {
                var i = this, r = arguments, s = function () {
                    a = null, n || e.apply(i, r)
                }, o = n && !a;
                clearTimeout(a), a = setTimeout(s, t), o && e.apply(i, r)
            }
        }

        function l(e, t, n) {
            e.style["webkit" + t] = n, e.style["moz" + t] = n, e.style["ms" + t] = n, e.style["o" + t] = n, e.style[t] = n
        }

        var d = function (e, t, n, a, i, r, s, o) {
            if (!e) {
                var c;
                if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
                    var l = [n, a, i, r, s, o], d = 0;
                    c = new Error("Invariant Violation: " + t.replace(/%s/g, (function () {
                        return l[d++]
                    })))
                }
                throw c.framesToPop = 1, c
            }
        };
        var u = function () {
            function e() {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._callbacks = {}, this._isDispatching = !1, this._isHandled = {}, this._isPending = {}, this._lastID = 1
            }

            return e.prototype.register = function (e) {
                var t = "ID_" + this._lastID++;
                return this._callbacks[t] = e, t
            }, e.prototype.unregister = function (e) {
                this._callbacks[e] || d(!1), delete this._callbacks[e]
            }, e.prototype.waitFor = function (e) {
                this._isDispatching || d(!1);
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    this._isPending[n] ? this._isHandled[n] || d(!1) : (this._callbacks[n] || d(!1), this._invokeCallback(n))
                }
            }, e.prototype.dispatch = function (e) {
                this._isDispatching && d(!1), this._startDispatching(e);
                try {
                    for (var t in this._callbacks) this._isPending[t] || this._invokeCallback(t)
                } finally {
                    this._stopDispatching()
                }
            }, e.prototype.isDispatching = function () {
                return this._isDispatching
            }, e.prototype._invokeCallback = function (e) {
                this._isPending[e] = !0, this._callbacks[e](this._pendingPayload), this._isHandled[e] = !0
            }, e.prototype._startDispatching = function (e) {
                for (var t in this._callbacks) this._isPending[t] = !1, this._isHandled[t] = !1;
                this._pendingPayload = e, this._isDispatching = !0
            }, e.prototype._stopDispatching = function () {
                delete this._pendingPayload, this._isDispatching = !1
            }, e
        }()
    }, 253: function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", (function () {
                return m
            }));
            var a = n(83), i = n.n(a), r = n(255), s = n(125), o = n(8), c = n(101), l = n(81), d = n(65), u = n.n(d),
                h = 30, p = "default", b = "https://nzq77gquwubuuxlrzao6fxgziq0dpkdc.lambda-url.us-west-2.on.aws/";

            function m(e, t, n, a, i) {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = Object(s.a)(i.a.mark((function t(n, a, s, d, g) {
                    var f, v, O, x, y, w, k, S, T, C, I, E, A, _, D, R, M, z, N, L, P, U, B, F, H, J, G, W, K, V, q, X,
                        Y, Z, Q, $, ee, te, ne, ae, ie, re, se, oe, ce, le, de, ue, he, pe, be, me, ge, je, fe, ve, Oe,
                        xe, ye, we, ke, Se, Te, Ce, Ie, Ee, Ae;
                    return i.a.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                if (a = a || 2, t.prev = 1, (f = document.createElement("canvas")).width = s, f.height = d, v = f.getContext("2d"), void 0 !== n.cards && null !== n.cards) {
                                    t.next = 9;
                                    break
                                }
                                return alert("Error: no cards!"), t.abrupt("return");
                            case 9:
                                for (v.scale(a, a), v.antialias = p, O = n.cards, x = n.custom, y = x.shadowed, w = x.playcounts, k = x.padding, S = x.rows, T = x.columns, C = x.fontFamily, I = x.mode, E = "true" === n.titled, A = "true" === n.numbered, _ = parseInt(n.size, 10), D = 25 === _, R = o.a.CHART_FORMATS, M = R[_], D && (M = (M = Array.apply(void 0, Object(r.a)(Array(S + 1)))).map((function (e, t) {
                                    return {index: t * T, size: 150, align: "center"}
                                }))), z = [], N = 0, L = 0; L < O.length; L++) P = M[N], U = M[N + 1], P.index === L && void 0 !== U && (B = U.index - P.index, z.push({
                                    cards: O.slice(P.index, P.index + B),
                                    size: P.size,
                                    align: P.align,
                                    index: P.index
                                }), N++);
                                for (0, F = [], H = 0; H < z.length; H++) for (J = z[H], G = function (t) {
                                    var n = J.cards[t];
                                    F.push(new Promise((function (t, a) {
                                        "string" === typeof n.src && "" !== n.src ? u.a.get(n.src.replace(/^http:\/\//i, "https://"), {
                                            responseType: "arraybuffer",
                                            timeout: 3e4
                                        }).then((function (a) {
                                            if (void 0 === a.data || null === a.data) console.error("Card image response was undefined or null. Skipping."); else {
                                                var i = e.from(a.data, "binary").toString("base64"),
                                                    r = a.headers["content-type"] || a.headers["Content-Type"];
                                                n.src = "data:".concat(r, ";base64,").concat(i)
                                            }
                                            t()
                                        })).catch((function (a) {
                                            console.log(a), a.response && 404 === a.response.status ? (n.src = null, t()) : u.a.get(b + encodeURIComponent(n.src), {
                                                responseType: "arraybuffer",
                                                timeout: 3e4
                                            }).then((function (a) {
                                                if (void 0 === a.data || null === a.data) console.error("Card image response was undefined or null. Skipping."); else {
                                                    var i = e.from(a.data, "binary").toString("base64"),
                                                        r = a.headers["content-type"] || a.headers["Content-Type"];
                                                    n.src = "data:".concat(r, ";base64,").concat(i)
                                                }
                                                t()
                                            })).catch((function (e) {
                                                console.error(e), n.src = null, t()
                                            }))
                                        })) : t()
                                    })))
                                }, W = 0; W < J.cards.length; W++) G(W);
                                return t.next = 35, Promise.all(F);
                            case 35:
                                K = [], V = z.reduce((function (e, t) {
                                    var n = k + t.size;
                                    return 10 === t.cards.length && 48 !== t.index || _ < 42 ? n += 1 * k : n += 3 * k, e + n
                                }), 0), q = z.reduce((function (e, t) {
                                    var n = k + t.size + k, a = t.cards.length * n;
                                    return Math.max(a, e)
                                }), 0), X = h, Y = 0;
                            case 40:
                                if (!(Y < z.length)) {
                                    t.next = 54;
                                    break
                                }
                                if (Z = z[Y], Q = Z.size, $ = Z.cards, void 0 !== Q && void 0 !== $) {
                                    t.next = 46;
                                    break
                                }
                                return t.abrupt("break", 54);
                            case 46:
                                for (ee = k + Q + k, X += k, te = 0; te < $.length; te++) ne = $[te], ae = 0, "center" === Z.align ? ae = h + (q - ee * $.length) / 2 + te * ee : (ie = (q - ee) / ($.length - 1) - Q, ae = h + (te * ie + te * Q)), "string" === typeof ne.src && "" !== ne.src && function () {
                                    var e = new Image;
                                    e.src = ne.src, "movies" === I && (v.fillStyle = "rgba(0, 0, 0, 0)", v.fillRect(ae, X, Q, Q));
                                    var t = ("movies" === I ? c.a : c.b).bind(null, v, e, ae, X, Q, Q, "movies" === I ? void 0 : .5, "movies" === I ? void 0 : .5);
                                    K.push(new Promise((function (n) {
                                        e.onload = function () {
                                            t(), n()
                                        }, setTimeout((function () {
                                            n()
                                        }), 3e3)
                                    }))), y && (v.globalCompositeOperation = "destination-over", v.shadowOffsetX = 2, v.shadowOffsetY = 2, v.shadowBlur = 7, v.shadowColor = "rgba(0, 0, 0, .4)", v.fillRect(ae, X, Q, Q), v.globalCompositeOperation = "source-over", v.shadowOffsetX = 0, v.shadowOffsetY = 0, v.shadowBlur = 0, v.shadowColor = "rgba(0, 0, 0, 0)")
                                }();
                                void 0 !== Z.size && (X += Z.size), 10 === Z.cards.length && 48 !== Z.index || _ < 42 ? X += 1 * k : X += 3 * k;
                            case 51:
                                Y++, t.next = 40;
                                break;
                            case 54:
                                return t.next = 56, Promise.all(K);
                            case 56:
                                if (se = 1.1 * (re = 13), -1 !== ["Proxima Nova"].indexOf(C) && (se = 1 * re), z.length > 7 && (se = 1 * (re = 11)), oe = [0], 15, v.font = "".concat(re, "px ").concat(C), v.fillStyle = "white", ce = 26, le = 0, E) for (de = z[0].size, ue = 0; ue < z.length; ue++) for (he = z[ue], (de !== he.size || D && ue > 0) && (ce += 2 * se), de = he.size, pe = 0; pe < he.cards.length; pe++) be = he.cards[pe], le += 1, be.title && (me = be.title, A && (me = le + ". " + me), w && "string" === typeof be.playcount && be.playcount.length > 0 && (me += " " + ("1" === be.playcount ? "[1 play]" : "[".concat(be.playcount, " plays]"))), ge = h + q + 15, ce += se, oe.push(v.measureText(me).width), y && (v.shadowOffsetX = 1, v.shadowOffsetY = 1, v.shadowBlur = 3, v.shadowColor = "rgba(0, 0, 0, .9)"), v.fillText(me, ge, ce, 1e11));
                                if (je = h + q + h, E && (fe = Math.max.apply(null, oe), je += 15 + fe), ve = h + Math.max(V, ce) + h, ve *= a, !((je *= a) > s || ve > d)) {
                                    t.next = 76;
                                    break
                                }
                                if (2 !== a) {
                                    t.next = 76;
                                    break
                                }
                                return confirm("Maximum canvas size exceeded. Try again at a lower resolution?") ? m(n, 1, s, d, g) : g(), t.abrupt("return");
                            case 76:
                                if (Oe = v.getImageData(0, 0, je, ve), (xe = document.createElement("canvas")).width = je, xe.height = ve, (ye = xe.getContext("2d")).putImageData(Oe, 0, 0), ye.antialias = p, ye.globalCompositeOperation = "destination-over", we = n.background.substring(5, n.background.length - 2), !Object(l.isUri)(we)) {
                                    t.next = 128;
                                    break
                                }
                                return ke = new Image, t.prev = 87, t.next = 90, u.a.get(we.replace(/^http:\/\//i, "https://"), {
                                    responseType: "arraybuffer",
                                    timeout: 3e4
                                });
                            case 90:
                                if (void 0 !== (Se = t.sent).data && null !== Se.data) {
                                    t.next = 95;
                                    break
                                }
                                throw new Error("bg img url gave null response");
                            case 95:
                                Te = e.from(Se.data, "binary").toString("base64"), Ce = Se.headers["content-type"] || Se.headers["Content-Type"], ke.src = "data:".concat(Ce, ";base64,").concat(Te);
                            case 98:
                                ke.onload = function () {
                                    Object(c.b)(ye, ke), j(xe, n, a, s, d, g)
                                }, t.next = 126;
                                break;
                            case 101:
                                if (t.prev = 101, t.t0 = t.catch(87), !t.t0.response || 404 !== t.t0.response.status) {
                                    t.next = 108;
                                    break
                                }
                                alert("Background image URL responded with Not Found (404). Rendering anyway without background..."), j(xe, n, a, s, d, g), t.next = 126;
                                break;
                            case 108:
                                return t.prev = 108, t.next = 111, u.a.get(b + encodeURIComponent(we), {
                                    responseType: "arraybuffer",
                                    timeout: 3e4
                                });
                            case 111:
                                if (void 0 !== (Ie = t.sent).data && null !== Ie.data) {
                                    t.next = 116;
                                    break
                                }
                                throw new Error("bg img url gave null response");
                            case 116:
                                Ee = e.from(Ie.data, "binary").toString("base64"), Ae = Ie.headers["content-type"] || Ie.headers["Content-Type"], ke.src = "data:".concat(Ae, ";base64,").concat(Ee), ke.onload = function () {
                                    Object(c.b)(ye, ke), j(xe, n, a, s, d, g)
                                };
                            case 120:
                                t.next = 126;
                                break;
                            case 122:
                                t.prev = 122, t.t1 = t.catch(108), alert("Couldn't load background image (" + t.t1.message + "). Rendering anyway without background..."), j(xe, n, a, s, d, g);
                            case 126:
                                t.next = 131;
                                break;
                            case 128:
                                ye.fillStyle = n.background, ye.fillRect(0, 0, je, ve), j(xe, n, a, s, d, g);
                            case 131:
                                t.next = 136;
                                break;
                            case 133:
                                t.prev = 133, t.t2 = t.catch(1), alert(t.t2.message || t.t2);
                            case 136:
                            case"end":
                                return t.stop()
                        }
                    }), t, null, [[1, 133], [87, 101], [108, 122]])
                })))).apply(this, arguments)
            }

            function j(e, t, n, a, i, r) {
                var s = document.createElement("a");
                s.download = "topsters2." + t.format, e.toBlob((function (e) {
                    null !== e ? (s.href = URL.createObjectURL(e), s.click(), r()) : 2 === n ? confirm("Maximum canvas size exceeded. Try again at a lower resolution?") ? m(t, 1, a, i, r) : r() : (alert("Error: An unknown error occurred. This browser's maximum canvas size was possibly exceeded."), r())
                }), "jpg" === t.format ? "image/jpeg" : "image/png")
            }
        }).call(this, n(62).Buffer)
    }, 29: function (e, t, n) {
        "use strict";
        var a = n(34), i = n(35), r = n(37), s = n(36), o = function (e) {
            Object(r.a)(n, e);
            var t = Object(s.a)(n);

            function n() {
                return Object(a.a)(this, n), t.apply(this, arguments)
            }

            return Object(i.a)(n, [{
                key: "handleAction", value: function (e) {
                    this.dispatch({source: "VIEW_ACTION", action: e})
                }
            }]), n
        }(n(14).a);
        t.a = new o
    }, 495: function (e, t) {
    }, 497: function (e, t) {
    }, 542: function (e, t, n) {
    }, 543: function (e, t, n) {
        "use strict";
        n.r(t);
        var a = n(0), i = (n(259), n(309), n(3)), r = n.n(i), s = n(124), o = n.n(s), c = n(12), l = n(34), d = n(35),
            u = n(46), h = n(37), p = n(36), b = n(19), m = n(63), g = n.n(m), j = n(130), f = n(74), v = n(254),
            O = n(8), x = n(83), y = n.n(x), w = n(125), k = n(73), S = n(546), T = "art", C = "card",
            I = function (e) {
                Object(h.a)(n, e);
                var t = Object(p.a)(n);

                function n(e) {
                    var a;
                    return Object(l.a)(this, n), (a = t.call(this, e)).state = {loaded: !1}, a.shouldComponentUpdate = g.a.shouldComponentUpdate.bind(Object(u.a)(a)), a
                }

                return Object(d.a)(n, [{
                    key: "render", value: function () {
                        var e = this.props, t = e.src, n = e.id, i = (e.isDragging, e.connectDragSource),
                            r = {backgroundImage: 'url("'.concat(t, '")'), width: "130px", height: "130px"};
                        return i(Object(a.jsx)("div", {
                            className: "art",
                            children: -1 === n ? Object(a.jsx)("div", {
                                className: "transparency",
                                style: {height: 130, width: 130}
                            }) : Object(a.jsx)("div", {className: "inner", style: r})
                        }, "art-".concat(n)), {dropEffect: "copy", captureDraggingState: !0})
                    }
                }]), n
            }(i.Component), E = Object(S.a)(T, {
                beginDrag: function (e, t, n) {
                    return {id: e.id, src: e.card.src, title: e.card.title}
                }
            }, (function (e, t) {
                return {connectDragSource: e.dragSource(), isDragging: t.isDragging()}
            }))(I), A = n(81), _ = n(29);

        function D(e, t) {
            _.a.handleAction({actionType: O.a.SET_ART, dragCard: e, hoverIndex: t})
        }

        function R(e) {
            _.a.handleAction({actionType: O.a.SET_SIZE, size: e})
        }

        function M(e, t) {
            _.a.handleAction({actionType: O.a.RENAME_CHART, chosen: e, name: t})
        }

        function z(e) {
            _.a.handleAction({actionType: O.a.SET_CHART, chosen: e})
        }

        var N = n(252), L = n.n(N), P = n(65), U = n.n(P), B = function (e) {
            Object(h.a)(n, e);
            var t = Object(p.a)(n);

            function n(e) {
                var a;
                return Object(l.a)(this, n), (a = t.call(this, e)).state = {value: a.props.value}, a.shouldComponentUpdate = g.a.shouldComponentUpdate.bind(Object(u.a)(a)), a
            }

            return Object(d.a)(n, [{
                key: "handleChange", value: function (e) {
                    this.setState({value: e.target.value}), e.target.value = parseInt(e.target.value), this.props.handler && this.props.handler(e)
                }
            }, {
                key: "render", value: function () {
                    return Object(a.jsxs)("span", {
                        className: "infinity",
                        children: [Object(a.jsx)("input", {
                            type: "range",
                            min: this.props.min,
                            max: this.props.max,
                            value: this.state.value,
                            onChange: this.handleChange.bind(this),
                            onInput: this.handleChange.bind(this)
                        }), Object(a.jsxs)("span", {children: [" ", this.state.value]})]
                    })
                }
            }]), n
        }(i.Component), F = {username: "", importAction: "create", period: "7day"}, H = function (e) {
            Object(h.a)(n, e);
            var t = Object(p.a)(n);

            function n(e) {
                var a;
                return Object(l.a)(this, n), (a = t.call(this, e)).debouncedSearch = L()((function (e) {
                    return a.search(document.getElementById("search-bar").value)
                }), 1e3, {leading: !0}), a.state = {
                    ad: null,
                    arts: [],
                    showOptions: !1,
                    modal: null,
                    importing: !1
                }, a.shouldComponentUpdate = g.a.shouldComponentUpdate.bind(Object(u.a)(a)), a
            }

            return Object(d.a)(n, [{
                key: "search", value: function (e) {
                    var t = this;
                    e && (Object(A.isUri)(e) ? this.setState({
                        arts: [{
                            id: Math.random(),
                            src: e,
                            title: ""
                        }]
                    }) : 0 === e.lastIndexOf("king crimson", 0) || 0 === e.lastIndexOf("in the court", 0) || 0 === e.lastIndexOf("court of the", 0) ? this.setState({
                        arts: [{
                            id: Math.random(),
                            src: "https://www.neverendingchartrendering.org/itcotck.jpg",
                            title: "King Crimson - In the Court of the Crimson King"
                        }]
                    }) : (this.setState({arts: []}), U.a.get("".concat(this.getQueryPath(), "/").concat(encodeURIComponent(e))).then((function (e) {
                        t.setState({
                            arts: e.data.map((function (e, t) {
                                return {id: t + 1, src: e.src || "", title: e.title || ""}
                            }))
                        })
                    }))))
                }
            }, {
                key: "componentDidMount", value: function () {
                    document.onkeydown = function (e) {
                        "Escape" === e.code ? this.closeModal() : "lastfm" !== this.state.modal || 13 !== e.keyCode || this.state.importing || this.handleImportLastfm()
                    }.bind(this)
                }
            }, {
                key: "handleSubmit", value: function (e) {
                    e.preventDefault(), this.debouncedSearch()
                }
            }, {
                key: "handleKeyup", value: function (e) {
                    e.preventDefault(), 13 === e.keyCode && this.search(e.target.value)
                }
            }, {
                key: "handleChange", value: function (e) {
                    this.setState({arts: []})
                }
            }, {
                key: "handleToggleNumbered", value: function (e) {
                    var t;
                    t = !c.a.getIn(["chart", "numbered"]), _.a.handleAction({actionType: O.a.SET_NUMBERED, numbered: t})
                }
            }, {
                key: "handleToggleTitled", value: function (e) {
                    var t;
                    t = !c.a.getIn(["chart", "titled"]), _.a.handleAction({actionType: O.a.SET_TITLED, titled: t})
                }
            }, {
                key: "handleToggleShadow", value: function (e) {
                    c.a.setIn(["chart", "shadowed"], !c.a.getIn(["chart", "shadowed"]))
                }
            }, {
                key: "handleTogglePlaycounts", value: function (e) {
                    c.a.setIn(["chart", "playcounts"], !c.a.getIn(["chart", "playcounts"]))
                }
            }, {
                key: "handleToggleBigAlbums", value: function (e) {
                    c.a.setIn(["chart", "bigAlbums"], !c.a.getIn(["chart", "bigAlbums"]))
                }
            }, {
                key: "handleChangeBackground", value: function (e) {
                    var t;
                    t = e.target.value, _.a.handleAction({actionType: O.a.SET_BACKGROUND, background: t})
                }
            }, {
                key: "handleSetSize", value: function (e) {
                    R(e.target.value)
                }
            }, {
                key: "handleSetFont", value: function (e) {
                    var t = e.target.value;
                    c.a.setIn(["chart", "fontFamily"], t)
                }
            }, {
                key: "handleChooseChart", value: function (e) {
                    z(e.target.value)
                }
            }, {
                key: "handleSetMode", value: function (e) {
                    var t;
                    this.setState({arts: []}), t = e.target.value, _.a.handleAction({actionType: O.a.SET_MODE, mode: t})
                }
            }, {
                key: "handleRenameChart", value: function (e) {
                    var t = prompt("Rename your chart:", this.props.charts[this.props.chosen]);
                    null !== t && (t.length < 1 ? alert("Error: name cannot be blank") : M(this.props.chosen, t))
                }
            }, {
                key: "handleAddNewChart", value: function (e) {
                    var t = prompt("Name your new chart:");
                    null !== t && (t.length < 1 ? alert("Error: name cannot be blank") : (c.a.updateIn(["options", "charts"], (function (e) {
                        return Object.assign(e, Object(k.a)({}, "".concat(t, "-cards"), t))
                    })), z("".concat(t, "-cards"))))
                }
            }, {
                key: "handleDeleteChart", value: function (e) {
                    Object.keys(c.a.getIn(["options", "charts"])).length > 1 && confirm("Are you sure you want to delete this chart?") && confirm("Really? There's no going back!") && (!function (e) {
                        _.a.handleAction({actionType: O.a.DELETE_CHART, chosen: e})
                    }(this.props.chosen), z(Object.keys(c.a.getIn(["options", "charts"]))[0]))
                }
            }, {
                key: "closeModal", value: function () {
                    this.setState((function (e) {
                        return Object(b.a)(Object(b.a)({}, e), {}, {modal: null, lastfm: F})
                    }))
                }
            }, {
                key: "openLastfmImportModal", value: function () {
                    var e = JSON.parse(localStorage.getItem("".concat(this.props.chosen, "-lastfm")));
                    this.setState({
                        modal: "lastfm",
                        lastfm: Object(b.a)(Object(b.a)({}, F), e)
                    }), setTimeout((function () {
                        document.getElementById("lastfm-username-field").focus()
                    }))
                }
            }, {
                key: "handleImportLastfm", value: function () {
                    var e = Object(w.a)(y.a.mark((function e() {
                        var t, n, a, i, r, s, o, l, d, u, h, p;
                        return y.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = this.state.lastfm.username, n = this.state.lastfm.period, this.setState({importing: !0}), null === t || null === n) {
                                        e.next = 26;
                                        break
                                    }
                                    if (!(t.length < 1)) {
                                        e.next = 8;
                                        break
                                    }
                                    return alert("Error: username cannot be blank"), this.setState({importing: !1}), e.abrupt("return");
                                case 8:
                                    if ("update" !== this.state.lastfm.importAction || confirm("The albums in the active chart will be replaced by ".concat(t, "'s scrobbles. Proceed?"))) {
                                        e.next = 11;
                                        break
                                    }
                                    return this.setState({importing: !1}), e.abrupt("return");
                                case 11:
                                    return e.prev = 11, e.next = 14, U.a.get("".concat("https://3g5e43is58.execute-api.us-west-2.amazonaws.com/prod", "/lastfm_import/").concat(encodeURIComponent(t), "/").concat(n));
                                case 14:
                                    a = e.sent, i = a.data.filter((function (e) {
                                        return Boolean(e.src)
                                    })), r = "create" === this.state.lastfm.importAction, i.length > 0 ? (s = new Date, o = Math.floor(s.getTime() / 1e3), l = "".concat(t, "-").concat(o), d = "Last.fm ".concat(r ? "" : "updated ").concat(s.toLocaleDateString(), " ").concat(s.toLocaleString([], {
                                        hour: "numeric",
                                        minute: "numeric",
                                        second: "numeric"
                                    })), r ? (u = "".concat(l, "-cards"), c.a.updateIn(["options", "charts"], (function (e) {
                                        return Object.assign(e, Object(k.a)({}, u, d))
                                    })), z(u), i.length > 42 ? h = 100 : i.length > 40 ? h = 42 : i.length > 25 ? h = 40 : (h = 25, p = Math.ceil(Math.sqrt(i.length)), c.a.setIn(["chart", "rows"], p), c.a.setIn(["chart", "columns"], p)), R(h), localStorage.setItem("".concat(u, "-lastfm"), JSON.stringify(this.state.lastfm))) : (M(this.props.chosen, d), localStorage.setItem("".concat(this.props.chosen, "-lastfm"), JSON.stringify(this.state.lastfm))), c.a.getIn(["chart", "cards"]).forEach((function (e, t) {
                                        D({id: t, src: "", title: ""}, t)
                                    })), i.forEach((function (e, t) {
                                        D(e, t)
                                    })), this.closeModal()) : alert("Error: No scrobbles in this time period."), e.next = 23;
                                    break;
                                case 20:
                                    e.prev = 20, e.t0 = e.catch(11), e.t0.response && 404 === e.t0.response.status ? alert("Error: User does not exist") : alert(e.t0.message || String(e.t0));
                                case 23:
                                    return e.prev = 23, this.setState({importing: !1}), e.finish(23);
                                case 26:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[11, 20, 23, 26]])
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getQueryPath", value: function () {
                    return "movies" === this.props.mode ? "https://p43omkjvta64lswvufobsvtvhy0cbhxd.lambda-url.us-west-2.on.aws" : "https://6rnvbtu7f4yvoxyvz46wskxyjq0npxfv.lambda-url.us-west-2.on.aws"
                }
            }, {
                key: "handleSetPadding", value: function (e) {
                    c.a.setIn(["chart", "padding"], parseInt(e.target.value))
                }
            }, {
                key: "handleSetRows", value: function (e) {
                    c.a.setIn(["chart", "rows"], parseInt(e.target.value))
                }
            }, {
                key: "handleSetColumns", value: function (e) {
                    c.a.setIn(["chart", "columns"], parseInt(e.target.value))
                }
            }, {
                key: "handleToggleOptions", value: function (e) {
                    this.setState({showOptions: !this.state.showOptions})
                }
            }, {
                key: "handleExport", value: function (e) {
                    e.preventDefault();
                    for (var t = {}, n = 0; n < localStorage.length; n++) {
                        t[localStorage.key(n)] = localStorage.getItem(localStorage.key(n))
                    }
                    var a, i = document.createElement("a");
                    i.href = URL.createObjectURL(new Blob([(a = JSON.stringify([t]), btoa(a).split("").map((function (e) {
                        return String.fromCharCode(e.charCodeAt(0) + 17)
                    })).join(""))], {type: "text/plain"})), i.download = "topsters2.".concat((new Date).toISOString().substring(0, 19), ".json"), i.click()
                }
            }, {
                key: "handleImport", value: function (e) {
                    e.preventDefault();
                    var t = document.createElement("input");
                    t.onchange = function () {
                        var e = new FileReader;
                        e.onload = function () {
                            var e, t;
                            try {
                                JSON.parse(this.result), e = !0
                            } catch (s) {
                                e = !1
                            }
                            try {
                                var n = JSON.parse(e ? this.result : (t = this.result, atob(t.split("").map((function (e) {
                                        return String.fromCharCode(e.charCodeAt(0) - 17)
                                    })).join(""))))[0], a = JSON.parse(n.options),
                                    i = "ERASE CHARTS AND IMPORT THE FOLLOWING CHARTS?\n";
                                if (Object.keys(a.charts).forEach((function (e, t) {
                                    return i += "\n".concat(t + 1, ". ").concat(a.charts[e])
                                })), confirm(i)) {
                                    for (var r in localStorage.clear(), n) localStorage.setItem(r, n[r]);
                                    document.location.reload()
                                }
                            } catch (s) {
                                alert(s.message)
                            }
                        }, e.readAsText(this.files[0])
                    }, t.type = "file", t.click()
                }
            }, {
                key: "render", value: function () {
                    var e, t = this, n = this.state.arts, i = [Object(a.jsxs)("label", {
                        children: ["Rows:", " ", Object(a.jsx)(B, {
                            min: 1,
                            max: 12,
                            handler: this.handleSetRows,
                            value: this.props.rows
                        }, "slider-1-".concat(this.props.chosen))]
                    }, "slider-part-1"), Object(a.jsx)("br", {}, "slider-part-2"), Object(a.jsxs)("label", {
                        children: ["Columns:", " ", Object(a.jsx)(B, {
                            min: 1,
                            max: 12,
                            handler: this.handleSetColumns,
                            value: this.props.columns
                        }, "slider-2-".concat(this.props.chosen))]
                    }, "slider-part-3"), Object(a.jsx)("br", {}, "slider-part-4")];
                    e = "movies" === this.props.mode ? "Movie title or URL" : "Album, artist, or URL";
                    var r = Object(a.jsxs)("div", {
                        children: [Object(a.jsxs)("label", {
                            children: ["Size:", " ", Object(a.jsxs)("select", {
                                value: this.props.size,
                                onChange: this.handleSetSize.bind(this),
                                children: [Object(a.jsx)("option", {
                                    value: "25",
                                    children: "Collage"
                                }), Object(a.jsx)("option", {
                                    value: "40",
                                    children: "Top 40"
                                }), Object(a.jsx)("option", {
                                    value: "42",
                                    children: "Top 42"
                                }), Object(a.jsx)("option", {value: "100", children: "Top 100"})]
                            })]
                        }), Object(a.jsx)("br", {}), 25 === this.props.size ? i : null, Object(a.jsxs)("label", {
                            id: "titled",
                            children: [Object(a.jsx)("input", {
                                type: "checkbox",
                                onChange: this.handleToggleTitled.bind(this),
                                checked: this.props.titled
                            }), " ", "album titles"]
                        }), " ", Object(a.jsx)("br", {}), "\u23bf", Object(a.jsxs)("label", {
                            id: "numbered",
                            children: [Object(a.jsx)("input", {
                                type: "checkbox",
                                checked: this.props.numbered,
                                onChange: this.handleToggleNumbered.bind(this),
                                disabled: !this.props.titled
                            }), " ", "numbered"]
                        }), Object(a.jsx)("br", {}), "\u23bf", Object(a.jsxs)("label", {
                            id: "playcounts",
                            children: [Object(a.jsx)("input", {
                                type: "checkbox",
                                onChange: this.handleTogglePlaycounts.bind(this),
                                checked: this.props.playcounts,
                                disabled: !this.props.titled
                            }), " ", "playcounts (", Object(a.jsx)("img", {
                                src: "/lastfm.png",
                                height: "10",
                                alt: "Import Last.fm"
                            }), " ", "only)"]
                        }), Object(a.jsx)("br", {}), Object(a.jsxs)("label", {
                            id: "shadowed",
                            children: [Object(a.jsx)("input", {
                                type: "checkbox",
                                onChange: this.handleToggleShadow.bind(this),
                                checked: this.props.shadowed
                            }), " ", "shadows"]
                        }), Object(a.jsx)("br", {}), Object(a.jsxs)("label", {
                            children: ["Background:", " ", Object(a.jsx)("input", {
                                type: "search",
                                style: {width: "90px"},
                                placeholder: "#HEX color or image URL",
                                value: this.props.background || "",
                                onChange: this.handleChangeBackground.bind(this)
                            }), " ", "\u2b3f URL/HEX"]
                        }), Object(a.jsx)("br", {}), Object(a.jsxs)("label", {
                            children: ["Font:\xa0", Object(a.jsx)("input", {
                                list: "fonts",
                                value: this.props.fontFamily,
                                onChange: this.handleSetFont.bind(this)
                            }), Object(a.jsxs)("datalist", {
                                id: "fonts",
                                children: [Object(a.jsx)("option", {value: "monospace"}), Object(a.jsx)("option", {value: "serif"}), Object(a.jsx)("option", {value: "sans-serif"}), Object(a.jsx)("option", {value: "Arial"}), Object(a.jsx)("option", {value: "Arial Black"}), Object(a.jsx)("option", {value: "Verdana"}), Object(a.jsx)("option", {value: "Tahoma"}), Object(a.jsx)("option", {value: "Trebuchet MS"}), Object(a.jsx)("option", {value: "Impact"}), Object(a.jsx)("option", {value: "Times New Roman"}), Object(a.jsx)("option", {value: "Didot"}), Object(a.jsx)("option", {value: "Georgia"}), Object(a.jsx)("option", {value: "American Typewriter"}), Object(a.jsx)("option", {value: "Andale Mono"}), Object(a.jsx)("option", {value: "Courier"}), Object(a.jsx)("option", {value: "Lucida Console"}), Object(a.jsx)("option", {value: "Monaco"}), Object(a.jsx)("option", {value: "Bradley Hand"}), Object(a.jsx)("option", {value: "Brush Script MT"}), Object(a.jsx)("option", {value: "Luminari"}), Object(a.jsx)("option", {value: "Comic Sans MS"})]
                            })]
                        }), Object(a.jsx)("br", {}), Object(a.jsxs)("label", {
                            children: ["Padding:", " ", Object(a.jsx)(B, {
                                handler: this.handleSetPadding.bind(this),
                                value: this.props.padding,
                                min: 0,
                                max: 20
                            }, "slider-3-".concat(this.props.chosen))]
                        }), Object(a.jsx)("br", {}), Object(a.jsx)("br", {}), Object(a.jsx)("button", {
                            onClick: this.handleExport.bind(this),
                            children: "Export Backup"
                        }), Object(a.jsx)("button", {
                            onClick: this.handleImport.bind(this),
                            children: "Import Backup"
                        }), Object(a.jsx)("br", {})]
                    });
                    return Object(a.jsxs)(a.Fragment, {
                        children: [Object(a.jsx)("div", {
                            id: "fixed", children: Object(a.jsxs)("div", {
                                id: "fixed-inner", children: [Object(a.jsx)("div", {
                                    id: "customizations-container", children: Object(a.jsx)("div", {
                                        children: Object(a.jsxs)("div", {
                                            id: "customizations",
                                            children: [Object(a.jsxs)("label", {
                                                id: "chooser",
                                                style: {lineHeight: 2},
                                                children: [Object(a.jsx)("select", {
                                                    value: this.props.chosen,
                                                    onChange: this.handleChooseChart.bind(this),
                                                    children: Object.keys(this.props.charts).sort().map((function (e, n) {
                                                        return Object(a.jsx)("option", {
                                                            value: e,
                                                            children: t.props.charts[e]
                                                        }, "chart-choice-".concat(e))
                                                    }))
                                                }), " \u2b3f Active chart"]
                                            }), Object(a.jsx)("br", {}), Object(a.jsx)("button", {
                                                onClick: this.handleAddNewChart.bind(this),
                                                children: "New"
                                            }), Object(a.jsx)("button", {
                                                onClick: this.handleRenameChart.bind(this),
                                                children: "Rename"
                                            }), Object(a.jsx)("button", {
                                                onClick: this.handleDeleteChart.bind(this),
                                                children: "Delete"
                                            }), Object(a.jsx)("br", {}), Object(a.jsxs)("button", {
                                                id: "lastfm-button",
                                                onClick: this.openLastfmImportModal.bind(this),
                                                children: ["Import", " ", Object(a.jsx)("img", {
                                                    src: "/lastfm.png",
                                                    height: "10",
                                                    width: "39.5",
                                                    alt: "Import Last.fm"
                                                })]
                                            }), Object(a.jsx)("br", {}), Object(a.jsx)("button", {
                                                onClick: this.handleToggleOptions.bind(this),
                                                style: {marginTop: ".3em", marginBottom: ".3em"},
                                                children: this.state.showOptions ? "Hide Options" : "Show Options"
                                            }), this.state.showOptions ? r : null]
                                        })
                                    })
                                }), Object(a.jsx)("div", {
                                    id: "search-container",
                                    children: Object(a.jsxs)("div", {
                                        children: [Object(a.jsxs)("select", {
                                            onChange: this.handleSetMode.bind(this),
                                            value: this.props.mode,
                                            children: [Object(a.jsx)("option", {
                                                value: "music",
                                                children: "Music"
                                            }), Object(a.jsx)("option", {value: "movies", children: "Movies"})]
                                        }), "\xa0", Object(a.jsxs)("form", {
                                            id: "new-search-container",
                                            onSubmit: this.handleSubmit.bind(this),
                                            style: {display: "flex", padding: 0},
                                            children: [Object(a.jsx)("input", {
                                                id: "search-bar",
                                                type: "search",
                                                placeholder: e,
                                                onChange: this.handleChange.bind(this),
                                                style: {flexGrow: 1}
                                            }), Object(a.jsx)("input", {type: "submit", value: "Go"})]
                                        })]
                                    })
                                }), Object(a.jsx)("div", {
                                    id: "grow", children: Object(a.jsx)("div", {
                                        children: Object(a.jsx)("div", {
                                            id: "search",
                                            children: n.length > 0 ? n.concat([{
                                                id: -1,
                                                src: "",
                                                title: ""
                                            }]).map((function (e, t) {
                                                return e.src || -1 === e.id ? Object(a.jsx)(E, {
                                                    index: t,
                                                    id: e.id,
                                                    src: e.src,
                                                    title: e.title,
                                                    card: e
                                                }, e.id) : null
                                            })) : Object(a.jsxs)("div", {
                                                children: [Object(a.jsxs)("div", {
                                                    style: {textAlign: "right"},
                                                    children: ["\u21e1 Search for", " ", "movies" === this.props.mode ? "movies" : "albums", " ", "here"]
                                                }), Object(a.jsxs)("div", {
                                                    style: {padding: "1em", paddingTop: "2em"},
                                                    children: [Object(a.jsx)("h3", {
                                                        style: {margin: 0},
                                                        children: "Welcome to Topsters 2.1 "
                                                    }), Object(a.jsx)("h4", {children: "Instructions:"}), Object(a.jsxs)("ol", {children: [Object(a.jsxs)("li", {children: ["Search for your favorite", " ", "movies" === this.props.mode ? "movies" : "albums and artists", "."]}), Object(a.jsxs)("li", {children: ["Drag", " ", "movies" === this.props.mode ? "movie" : "album", " ", "covers onto the chart."]}), Object(a.jsx)("li", {children: 'Click "Show Options" to customize.'}), Object(a.jsx)("li", {children: "Download your creation using the buttons in the top right corner."})]}), Object(a.jsxs)("p", {
                                                        children: [Object(a.jsx)("b", {children: "Charts are saved automatically."}), " But clearing browser data may result in chart loss. Back up your charts!", " ", Object(a.jsx)("a", {
                                                            href: "/about/#saving",
                                                            target: "_blank",
                                                            children: "More info."
                                                        })]
                                                    }), Object(a.jsxs)("p", {
                                                        children: [Object(a.jsxs)("b", {children: ["Can't find", " ", "movies" === this.props.mode ? "a movie" : "an album"]}), "? You can drag-and-drop images from, e.g., Google Images.", " ", Object(a.jsx)("a", {
                                                            href: "/about/#missing-albums",
                                                            target: "_blank",
                                                            children: "More info."
                                                        })]
                                                    }), Object(a.jsxs)("p", {
                                                        children: ["Need help?", " ", Object(a.jsx)("a", {
                                                            href: "/about/",
                                                            target: "_blank",
                                                            children: "Read the FAQ."
                                                        })]
                                                    }), Object(a.jsxs)("p", {
                                                        children: ["Data courtesty of ", Object(a.jsx)("a", {
                                                            href: "https://www.last.fm/home",
                                                            children: Object(a.jsx)("img", {
                                                                src: "/lastfm.png",
                                                                height: "10",
                                                                width: "39.5",
                                                                alt: "lastfm"
                                                            })
                                                        }), " and ", Object(a.jsx)("a", {
                                                            href: "https://www.themoviedb.org/",
                                                            alt: "tmdb",
                                                            children: "TMDB"
                                                        }), ". This website is not affiliated with last.fm or TMDB."]
                                                    })]
                                                })]
                                            })
                                        })
                                    })
                                })]
                            })
                        }), function () {
                            switch (t.state.modal) {
                                case"lastfm":
                                    return Object(a.jsxs)("div", {
                                        id: "shade-container",
                                        children: [Object(a.jsx)("div", {
                                            id: "shade",
                                            onClick: t.closeModal.bind(t)
                                        }), Object(a.jsxs)("div", {
                                            id: "lastfm-modal",
                                            children: [Object(a.jsx)("h2", {children: "Import Last.fm Scrobbles"}), Object(a.jsx)("table", {
                                                children: Object(a.jsx)("tbody", {
                                                    children: Object(a.jsxs)("tr", {
                                                        children: [Object(a.jsx)("td", {children: "Action:"}), Object(a.jsxs)("td", {
                                                            children: [Object(a.jsxs)("label", {
                                                                children: [Object(a.jsx)("input", {
                                                                    type: "radio",
                                                                    name: "importAction",
                                                                    value: "create",
                                                                    checked: "create" === t.state.lastfm.importAction,
                                                                    onChange: function () {
                                                                        return t.setState((function (e) {
                                                                            return Object(b.a)(Object(b.a)({}, e), {}, {lastfm: Object(b.a)(Object(b.a)({}, e.lastfm), {}, {importAction: "create"})})
                                                                        }))
                                                                    }
                                                                }), " ", "Make new chart"]
                                                            }), Object(a.jsx)("br", {}), Object(a.jsxs)("label", {
                                                                children: [Object(a.jsx)("input", {
                                                                    type: "radio",
                                                                    name: "importAction",
                                                                    value: "update",
                                                                    checked: "update" === t.state.lastfm.importAction,
                                                                    onChange: function () {
                                                                        return t.setState((function (e) {
                                                                            return Object(b.a)(Object(b.a)({}, e), {}, {lastfm: Object(b.a)(Object(b.a)({}, e.lastfm), {}, {importAction: "update"})})
                                                                        }))
                                                                    }
                                                                }), " ", "Update active chart"]
                                                            })]
                                                        })]
                                                    })
                                                })
                                            }), Object(a.jsx)("p", {
                                                className: "note",
                                                children: "create" === t.state.lastfm.importAction ? "A new chart containing your scrobbles will be added to the chart list. Old charts are unchanged." : "The albums of the active chart will be replaced by your scrobbles. Other charts are unchanged."
                                            }), Object(a.jsxs)("div", {
                                                children: [Object(a.jsx)("span", {children: "Username: "}), Object(a.jsx)("input", {
                                                    type: "text",
                                                    placeholder: "Your Last.fm Username",
                                                    id: "lastfm-username-field",
                                                    value: t.state.lastfm.username,
                                                    onChange: function (e) {
                                                        var n = e.target.value;
                                                        return t.setState((function (e) {
                                                            return Object(b.a)(Object(b.a)({}, e), {}, {lastfm: Object(b.a)(Object(b.a)({}, e.lastfm), {}, {username: n})})
                                                        }))
                                                    }
                                                })]
                                            }), Object(a.jsx)("br", {}), Object(a.jsxs)("div", {
                                                children: [Object(a.jsx)("span", {children: "Period: "}), Object(a.jsxs)("select", {
                                                    value: t.state.lastfm.period,
                                                    onChange: function (e) {
                                                        var n = e.target.value;
                                                        return t.setState((function (e) {
                                                            return Object(b.a)(Object(b.a)({}, e), {}, {lastfm: Object(b.a)(Object(b.a)({}, e.lastfm), {}, {period: n})})
                                                        }))
                                                    },
                                                    children: [Object(a.jsx)("option", {
                                                        value: "7day",
                                                        children: "Past 7 days"
                                                    }), Object(a.jsx)("option", {
                                                        value: "1month",
                                                        children: "Past month"
                                                    }), Object(a.jsx)("option", {
                                                        value: "3month",
                                                        children: "Past 3 months"
                                                    }), Object(a.jsx)("option", {
                                                        value: "6month",
                                                        children: "Past 6 months"
                                                    }), Object(a.jsx)("option", {
                                                        value: "12month",
                                                        children: "Past year"
                                                    }), Object(a.jsx)("option", {
                                                        value: "overall",
                                                        children: "All time"
                                                    })]
                                                })]
                                            }), Object(a.jsx)("br", {}), Object(a.jsxs)("div", {
                                                children: [Object(a.jsx)("button", {
                                                    onClick: t.handleImportLastfm.bind(t),
                                                    disabled: t.state.importing,
                                                    children: t.state.importing ? "Importing..." : "Import"
                                                }), " ", Object(a.jsx)("span", {
                                                    onClick: t.closeModal.bind(t),
                                                    className: "pointer",
                                                    children: "Cancel"
                                                })]
                                            })]
                                        })]
                                    });
                                default:
                                    return null
                            }
                        }()]
                    })
                }
            }]), n
        }(i.Component);
        var J = n(547), G = {
            drop: function (e, t, n) {
                var a = t.getItemType(), i = t.getItem();
                switch (a) {
                    case C:
                        return;
                    case f.b.URL:
                        i = {id: Math.random(), src: i.urls[0], title: ""};
                        break;
                    case f.b.FILE:
                        i = {
                            id: Math.random(),
                            src: window.mostRecentDataTransfer,
                            title: ""
                        }, window.mostRecentDataTransfer = ""
                }
                var r = e.src, s = e.index, o = e.title;
                i.src === r && i.title === o || D(i, s)
            }, hover: function (e, t, n) {
                if (t.getItemType() === C) {
                    var a = t.getItem(), i = e.index, r = a.index;
                    if (r === i) return;
                    setTimeout((function () {
                        !function (e, t, n) {
                            _.a.handleAction({actionType: O.a.MOVE_CARDS, dragIndex: e, hoverIndex: t, dragCard: n})
                        }(r, i, c.a.getIn(["chart", "cards", r]))
                    })), t.getItem().index = i
                }
            }
        };
        window.mostRecentDataTransfer = "";
        var W, K, V = function (e) {
                window.mostRecentDataTransfer = e.dataTransfer ? e.dataTransfer.getData("text/plain") : ""
            }, q = function (e) {
                Object(h.a)(n, e);
                var t = Object(p.a)(n);

                function n(e) {
                    return Object(l.a)(this, n), t.call(this, e)
                }

                return Object(d.a)(n, [{
                    key: "render", value: function () {
                        var e = this.props, t = (e.index, e.id, e.src), n = e.mode, i = (e.saveState, e.isDragging),
                            r = e.connectDragSource, s = e.connectDropTarget, o = (e.isOver, e.canDrop, e.padding),
                            c = e.chartSize, l = e.rowIndex, d = {
                                opacity: i ? 0 : 1,
                                padding: o,
                                paddingBottom: 10 === e.rowLength && 48 !== l || c < 42 ? o : 3 * o
                            }, u = {
                                backgroundImage: t ? 'url("'.concat(t, '")') : "white",
                                backgroundColor: "movies" === n && t ? "black" : null,
                                backgroundRepeat: "movies" === n ? "no-repeat" : null,
                                backgroundSize: "movies" === n ? "contain" : null
                            };
                        return r(s(Object(a.jsx)("div", {
                            className: "card ".concat(t ? "" : "white"),
                            style: d,
                            onDrop: V,
                            children: Object(a.jsx)("div", {className: "inner", style: u})
                        }, t)), {dropEffect: "move", captureDraggingState: !0})
                    }
                }]), n
            }(i.Component), X = Object(S.a)(C, {
                beginDrag: function (e, t, n) {
                    return {id: e.id, index: e.index, src: e.src}
                }, isDragging: function (e, t) {
                    return t.getItem().id === e.id
                }
            }, (function (e, t) {
                return {connectDragSource: e.dragSource(), isDragging: t.isDragging()}
            }))(Object(J.a)([C, T, f.b.URL, f.b.FILE], G, (function (e, t) {
                return {connectDropTarget: e.dropTarget(), isOver: t.isOver(), canDrop: t.canDrop()}
            }))(q)), Y = n(14), Z = n(253),
            Q = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), !!/iPad|iPhone|iPod/.test(navigator.platform) || navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform)),
            $ = navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform),
            ee = n(82), te = n(56), ne = {
                backends: [{id: "html5", backend: f.a, transition: j.b, preview: !1}, {
                    id: "touch",
                    backend: v.a,
                    options: {enableMouseEvents: !0},
                    preview: !0,
                    transition: j.c
                }]
            };

        function ae(e) {
            var t = e.chartScale, n = Object(ee.a)();
            return Object(a.jsx)(te.b, {
                generator: function (e) {
                    var i = e.itemType, r = e.item, s = e.style, o = i === T ? 130 : 150 * t,
                        c = Object(b.a)(Object(b.a)({}, s), {}, {
                            backgroundImage: 'url("'.concat(r.src, '")'),
                            width: o,
                            height: o,
                            backgroundSize: "cover",
                            backgroundColor: "#FFF",
                            opacity: .8,
                            zIndex: 1e3
                        });
                    return n ? Object(a.jsx)("div", {style: c}) : null
                }
            })
        }

        var ie, re = function (e) {
            Object(h.a)(n, e);
            var t = Object(p.a)(n);

            function n(e) {
                var a;
                return Object(l.a)(this, n), (a = t.call(this, e)).state = {store: c.a.getStore()}, a.shouldComponentUpdate = g.a.shouldComponentUpdate.bind(Object(u.a)(a)), a._onChange = a._onChange.bind(Object(u.a)(a)), c.a.removeChangeListener(a._onChange), c.a.addChangeListener(a._onChange), a
            }

            return Object(d.a)(n, [{
                key: "componentWillUnmount", value: function () {
                    c.a.removeChangeListener(this._onChange)
                }
            }, {
                key: "_onChange", value: function (e) {
                    this.setState({store: c.a.getStore()})
                }
            }, {
                key: "handleSetCardTitle", value: function (e) {
                    var t = e.target.value;
                    13 === e.keyCode && t && c.a.setIn(["chart", "cards", this, "title"], t)
                }
            }, {
                key: "handleMouseEnter", value: function () {
                    Array.prototype.forEach.call(document.querySelectorAll(".white"), (function (e) {
                        return e.style.opacity = .33
                    }))
                }
            }, {
                key: "handleMouseLeave", value: function () {
                    Array.prototype.forEach.call(document.querySelectorAll(".white"), (function (e) {
                        return e.style.opacity = 1
                    }))
                }
            }, {
                key: "transformChart", value: function () {
                    var e = window.matchMedia("only screen and (max-width: 667px) and (orientation: landscape)"),
                        t = window.matchMedia("only screen and (max-width: 667px) and (orientation: portrait)"),
                        n = (document.documentElement || document.body, (window.outerWidth - 15) / window.innerWidth),
                        a = window.innerWidth * n, i = window.innerHeight * n, r = .1 * window.outerWidth,
                        s = this.chartWrapper.getBoundingClientRect(), o = this.fixedDiv.getBoundingClientRect(),
                        c = a - (t.matches ? r : o.width), l = i - (t.matches ? o.height : 30),
                        d = c / (s.width / this.chartScale + (t.matches ? 0 : 100)),
                        u = l / (s.height / this.chartScale + 100),
                        h = Math.min(1.33, Math.max(.33, t.matches || e.matches ? d : Math.max(d, u)));
                    Object(Y.f)(this.chartWrapper, "transform", "scale(" + h + ")"), this.chartScale = h
                }
            }, {
                key: "componentDidMount", value: function () {
                    this.chartScale = 1, this.chartWrapper = document.getElementById("chart-wrapper"), this.fixedDiv = document.getElementById("fixed"), this.transformChart(), this.debouncedChartTransform = Object(Y.b)(this.transformChart, 100), window.onresize = function () {
                        this.debouncedChartTransform()
                    }.bind(this)
                }
            }, {
                key: "componentDidUpdate", value: function () {
                    this.transformChart()
                }
            }, {
                key: "render", value: function () {
                    var e = this, t = this.state.store, n = t.get("chart"), i = t.get("options"), s = n.get("cards"),
                        o = n.get("background"), c = n.get("size_"), l = n.get("titled"), d = n.get("numbered"),
                        u = n.get("bigAlbums"), h = n.get("fontFamily"), p = n.get("shadowed"), b = n.get("playcounts"),
                        m = n.get("padding"), g = n.get("mode"), f = i.get("chosen"), v = i.get("charts"),
                        x = Object(Y.c)(n.toJSON()), y = 25 === c, w = n.get("rows"), k = n.get("columns"),
                        S = function (e) {
                            var t = e.target.parentNode;
                            W = e.target, e.preventDefault(), function () {
                                var e = Object(Y.g)(100);
                                K = W.innerText.slice(), W.innerText = "Rendering...", W.disabled = !0, W.appendChild(e), !0
                            }();
                            var n = {};
                            Array.prototype.slice.call(t.getElementsByTagName("input")).forEach((function (e) {
                                "checkbox" === e.type ? n[e.name] = e.checked : n[e.name] = e.value
                            })), n.format = W.getAttribute("data-format"), n.custom = x, n.cards = s.toJSON().map((function (e) {
                                return {src: e.src, title: e.title, playcount: e.playcount}
                            }));
                            var a = 7e3, i = 4700;
                            return (Q || $) && (a = 4096, i = 4096), Object(Z.a)(n, 2, a, i, (function () {
                                W.innerText = K, W.disabled = !1, !1
                            })), !1
                        }, T = O.a.CHART_FORMATS[c];
                    y && (T = (T = Array.apply(null, Array(w + 1))).map((function (e, t) {
                        return {index: t++ * k, size: 150, align: "center"}
                    })));
                    var C = [], I = 0;

                    function E(e) {
                        return (e.size + 2 * m) * e.cards.size
                    }

                    s.forEach((function (e, t) {
                        var n = T[I], a = T[I + 1];
                        if (n.index === t && void 0 !== a) {
                            var i = a.index - n.index;
                            C.push({
                                cards: s.slice(n.index, n.index + i),
                                size: n.size,
                                align: n.align,
                                index: n.index
                            }), I++
                        }
                    }));
                    var A = C.reduce((function (e, t) {
                            return E(e) > E(t) ? e : t
                        })), _ = [u ? "bigAlbums" : "", p ? "shadowed" : ""].join(" "),
                        D = [p ? "shadowed-titles" : ""].join(" "), R = "sans-serif";
                    return "Inconsolata" === h ? R = "monospace" : "Comic Sans MS" === h ? R = "cursive" : "IM Fell DW Pica" === h ? R = "serif" : "Proxima Nova" === h && (R = "sans-serif"), Object(a.jsxs)(j.a, {
                        options: ne,
                        children: [Object(a.jsx)(ae, {chartScale: this.chartScale}), Object(a.jsx)("div", {
                            id: "buttons",
                            children: Object(a.jsxs)("form", {
                                onMouseEnter: this.handleMouseEnter,
                                onMouseLeave: this.handleMouseLeave,
                                children: [Object(a.jsxs)("label", {
                                    style: {display: "none"},
                                    children: ["(", Object(a.jsx)("input", {
                                        name: "compressed",
                                        type: "checkbox",
                                        defaultChecked: !0
                                    }), " ", "compress)", " "]
                                }), Object(a.jsx)("input", {
                                    name: "background",
                                    value: o,
                                    type: "hidden"
                                }), Object(a.jsx)("input", {
                                    name: "size",
                                    value: c,
                                    type: "hidden"
                                }), Object(a.jsx)("input", {
                                    name: "titled",
                                    value: l,
                                    type: "hidden"
                                }), Object(a.jsx)("input", {
                                    name: "numbered",
                                    value: d,
                                    type: "hidden"
                                }), Object(a.jsx)("input", {
                                    name: "mode",
                                    value: g,
                                    type: "hidden"
                                }), Object(a.jsx)("input", {
                                    name: "options",
                                    value: '{"charts":{"cards":"Untitled Chart"},"chosen":"cards"}',
                                    type: "hidden"
                                }), Object(a.jsx)("button", {
                                    "data-format": "png",
                                    onClick: S,
                                    type: "submit",
                                    children: "Download PNG"
                                }), Object(a.jsx)("span", {children: " "}), Object(a.jsx)("button", {
                                    "data-format": "jpg",
                                    onClick: S,
                                    type: "submit",
                                    children: "Download JPG"
                                })]
                            })
                        }), Object(a.jsxs)("div", {
                            id: "page",
                            children: [Object(a.jsx)(H, {
                                mode: g,
                                padding: m,
                                rows: w,
                                columns: k,
                                chosen: f,
                                charts: v,
                                titled: l,
                                numbered: d,
                                bigAlbums: u,
                                fontFamily: h,
                                shadowed: p,
                                playcounts: b,
                                size: c,
                                background: o
                            }), Object(a.jsxs)("div", {
                                id: "chart-wrapper",
                                className: "container-" + c,
                                style: {background: o, fontFamily: h + ", " + R, backgroundPosition: "center"},
                                children: [Object(a.jsx)("div", {
                                    id: "chart",
                                    className: _,
                                    style: {width: E(A)},
                                    children: C.map((function (e, t) {
                                        return Object(a.jsx)("div", {
                                            className: "card-row size-".concat(e.size, " align-").concat(e.align),
                                            children: e.cards.map((function (n, i) {
                                                return Object(a.jsxs)(r.a.Fragment, {
                                                    children: [0 !== i ? Object(a.jsx)("span", {
                                                        className: "zero",
                                                        children: " "
                                                    }, "spacer-".concat(n.id)) : null, Object(a.jsx)(X, {
                                                        mode: g,
                                                        padding: m,
                                                        chartSize: c,
                                                        rowIndex: e.index,
                                                        rowLength: e.cards.size,
                                                        index: e.index + i,
                                                        id: "card-".concat(n.id),
                                                        src: n.src,
                                                        title: n.title
                                                    }, "card-".concat(n.id))]
                                                }, "fragment-".concat(t, "-").concat(i))
                                            }))
                                        }, "row-".concat(t))
                                    }))
                                }), Object(a.jsx)("ul", {
                                    id: "titles",
                                    className: D,
                                    children: l ? s.slice(0, y ? w * k : c).map((function (t, n) {
                                        var i, s = y && n % k === 0 && n ? Object(a.jsx)("br", {}) : "";
                                        return t.title ? Object(a.jsxs)(r.a.Fragment, {children: [s, Object(a.jsxs)("li", {children: [d ? n + 1 + ". " : null, t.title, b && t.playcount ? "1" === t.playcount ? " [1 play]" : " [".concat(t.playcount, " plays]") : null]}, "title-".concat(t.id))]}, "title-fragment-".concat(n)) : (i = t.src ? Object(a.jsx)("input", {
                                            type: "text",
                                            placeholder: "movies" === g ? "movie title" : "artist - album",
                                            className: "custom-label",
                                            onKeyUp: e.handleSetCardTitle.bind(n)
                                        }) : "   ", Object(a.jsxs)(r.a.Fragment, {
                                            children: [s, Object(a.jsx)("li", {
                                                className: t.src ? "custom" : null,
                                                children: i
                                            }, "title-".concat(t.id))]
                                        }, "title-fragment-".concat(n)))
                                    })) : null
                                })]
                            })]
                        })]
                    })
                }
            }]), n
        }(i.Component);
        n(542);
        -1 !== window.location.hostname.indexOf("ngrok") || "localhost" === window.location.hostname || "https:" === window.location.protocol && "www" === window.location.host.split(".")[0] ? (ie = JSON.parse(localStorage.getItem("options")) || {}, _.a.handleAction({
            actionType: O.a.SET_OPTIONS,
            options: ie
        }), z(c.a.getIn(["options", "chosen"]) || "cards"), o.a.render(Object(a.jsx)(re, {}), document.getElementById("root"))) : window.location.replace("https://www.neverendingchartrendering.org/")
    }, 8: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return a
        }));
        var a = {
            MOVE_CARDS: "MOVE_CARDS",
            SET_ART: "SET_ART",
            SET_BACKGROUND: "SET_BACKGROUND",
            SET_SIZE: "SET_SIZE",
            SET_TITLED: "SET_TITLED",
            SET_NUMBERED: "SET_NUMBERED",
            SET_CHART: "SET_CHART",
            SET_OPTIONS: "SET_OPTIONS",
            SET_MODE: "SET_MODE",
            DELETE_CHART: "DELETE_CHART",
            RENAME_CHART: "RENAME_CHART",
            DEFAULT_CHART_NAME: "cards",
            RESET: "RESET",
            HIGH_RES_COUNT: {25: 0, 40: 0, 42: 0, 100: 0},
            CHART_FORMATS: {
                40: [{index: 0, size: 150, align: "justify"}, {
                    index: 5,
                    size: 125,
                    align: "center"
                }, {index: 11, size: 125, align: "center"}, {index: 17, size: 100, align: "center"}, {
                    index: 24,
                    size: 100,
                    align: "center"
                }, {index: 31, size: 75, align: "center"}, {index: 40}],
                42: [{index: 0, size: 150, align: "justify"}, {index: 5, size: 150, align: "justify"}, {
                    index: 10,
                    size: 125,
                    align: "justify"
                }, {index: 16, size: 125, align: "justify"}, {index: 22, size: 75, align: "justify"}, {
                    index: 32,
                    size: 75,
                    align: "justify"
                }, {index: 42}],
                100: [{index: 0, size: 150, align: "justify"}, {index: 5, size: 150, align: "justify"}, {
                    index: 10,
                    size: 125,
                    align: "justify"
                }, {index: 16, size: 125, align: "justify"}, {index: 22, size: 125, align: "justify"}, {
                    index: 28,
                    size: 75,
                    align: "justify"
                }, {index: 38, size: 75, align: "justify"}, {index: 48, size: 75, align: "justify"}, {
                    index: 58,
                    size: 50,
                    align: "justify"
                }, {index: 72, size: 50, align: "justify"}, {index: 86, size: 50, align: "justify"}, {index: 100}]
            }
        }
    }
}, [[543, 1, 2]]]);
//# sourceMappingURL=main.0488807c.chunk.js.map