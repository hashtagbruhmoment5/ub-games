/*! For license information please see gamepush.js.LICENSE.txt */
(() => {
    window.fetch = new Proxy(window.fetch, {
        apply: function (target, that, args) {
            target = function () {
                // console.log("--fx--fetch--target--args--", arguments);
                return new Promise((resolve, reject) => {
                    // resolve("OK");
                    reject("403 forbiden");
                });
            }
            // console.log("--fx--fetch--target--", target);
            // console.log("--fx--fetch--that--", that);
            // console.log("--fx--fetch--args--", args);
            // args holds argument of fetch function
            // Do whatever you want with fetch request
            let temp = target.apply(that, args);
            temp.then((res) => {
                // After completion of request
            });
            return temp;
        },
    });

    var e, t, n, r, i = {
        2616: e => {
            "use strict";
            e.exports = function (e) {
                var t = [];
                return t.toString = function () {
                    return this.map((function (t) {
                        var n = e(t);
                        return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
                    })).join("")
                }, t.i = function (e, n, r) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    var i = {};
                    if (r) for (var s = 0; s < this.length; s++) {
                        var a = this[s][0];
                        null != a && (i[a] = !0)
                    }
                    for (var o = 0; o < e.length; o++) {
                        var c = [].concat(e[o]);
                        r && i[c[0]] || (n && (c[2] ? c[2] = "".concat(n, " and ").concat(c[2]) : c[2] = n), t.push(c))
                    }
                }, t
            }
        }, 5585: e => {
            !function (t) {
                e.exports = t;
                var n = {
                    on: function (e, t) {
                        return s(this, e).push(t), this
                    }, once: function (e, t) {
                        var n = this;
                        return r.originalListener = t, s(n, e).push(r), n;

                        function r() {
                            i.call(n, e, r), t.apply(this, arguments)
                        }
                    }, off: i, emit: function (e, t) {
                        var n = this, r = s(n, e, !0);
                        if (!r) return !1;
                        var i = arguments.length;
                        if (1 === i) r.forEach(o); else if (2 === i) r.forEach(c); else {
                            var a = Array.prototype.slice.call(arguments, 1);
                            r.forEach(h)
                        }
                        return !!r.length;

                        function o(e) {
                            e.call(n)
                        }

                        function c(e) {
                            e.call(n, t)
                        }

                        function h(e) {
                            e.apply(n, a)
                        }
                    }
                };

                function r(e) {
                    for (var t in n) e[t] = n[t];
                    return e
                }

                function i(e, t) {
                    var n, r = this;
                    if (arguments.length) {
                        if (t) {
                            if (n = s(r, e, !0)) {
                                if (!(n = n.filter(a)).length) return i.call(r, e);
                                r.listeners[e] = n
                            }
                        } else if ((n = r.listeners) && (delete n[e], !Object.keys(n).length)) return i.call(r)
                    } else delete r.listeners;
                    return r;

                    function a(e) {
                        return e !== t && e.originalListener !== t
                    }
                }

                function s(e, t, n) {
                    if (!n || e.listeners) {
                        var r = e.listeners || (e.listeners = {});
                        return r[t] || (r[t] = [])
                    }
                }

                r(t.prototype), t.mixin = r
            }((function e() {
                if (!(this instanceof e)) return new e
            }))
        }, 4943: e => {
            "use strict";
            e.exports = r, e.exports.isMobile = r, e.exports.default = r;
            var t = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
                n = /android|ipad|playbook|silk/i;

            function r(e) {
                e || (e = {});
                var r = e.ua;
                if (r || "undefined" == typeof navigator || (r = navigator.userAgent), r && r.headers && "string" == typeof r.headers["user-agent"] && (r = r.headers["user-agent"]), "string" != typeof r) return !1;
                var i = t.test(r) || !!e.tablet && n.test(r);
                return !i && e.tablet && e.featureDetect && navigator && navigator.maxTouchPoints > 1 && -1 !== r.indexOf("Macintosh") && -1 !== r.indexOf("Safari") && (i = !0), i
            }
        }, 2096: () => {
            "function" != typeof Promise.prototype.finally && (Promise.prototype.finally = function (e) {
                var t = this;
                return this.then((function (n) {
                    return t.constructor.resolve(e()).then((function () {
                        return n
                    }))
                })).catch((function (n) {
                    return t.constructor.resolve(e()).then((function () {
                        throw n
                    }))
                }))
            })
        }, 8205: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => s});
            var r = n(2616), i = n.n(r)()((function (e) {
                return e[1]
            }));
            i.push([e.id, ".gs-global-loader{position:fixed;z-index:99999;top:8px;right:8px;width:48px;height:48px}@media only screen and (min-width: 1024px){.gs-global-loader{top:inherit;right:16px;bottom:16px}}.gs-loader{position:relative;width:40px;height:40px;border-radius:50%;display:flex}.gs-loader__outter{box-sizing:border-box;position:absolute;border:4px solid #f50057;border-left-color:transparent;width:100%;height:100%;border-radius:50%;-webkit-animation:loader-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;animation:loader-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite}.gs-loader__inner{box-sizing:border-box;position:absolute;border:4px solid #f50057;border-radius:50%;width:20px;height:20px;left:calc(50% - 10px);top:calc(50% - 10px);border-top-color:transparent;-webkit-animation:loader-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;animation:loader-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite}@keyframes loader-outter{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loader-inner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}.gs-loader-hidden{display:none}", ""]);
            const s = i
        }, 3379: (e, t, n) => {
            "use strict";
            var r, i = function () {
                var e = {};
                return function (t) {
                    if (void 0 === e[t]) {
                        var n = document.querySelector(t);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                            n = n.contentDocument.head
                        } catch (e) {
                            n = null
                        }
                        e[t] = n
                    }
                    return e[t]
                }
            }(), s = [];

            function a(e) {
                for (var t = -1, n = 0; n < s.length; n++) if (s[n].identifier === e) {
                    t = n;
                    break
                }
                return t
            }

            function o(e, t) {
                for (var n = {}, r = [], i = 0; i < e.length; i++) {
                    var o = e[i], c = t.base ? o[0] + t.base : o[0], h = n[c] || 0, l = "".concat(c, " ").concat(h);
                    n[c] = h + 1;
                    var u = a(l), d = {css: o[1], media: o[2], sourceMap: o[3]};
                    -1 !== u ? (s[u].references++, s[u].updater(d)) : s.push({identifier: l, updater: g(d, t), references: 1}), r.push(l)
                }
                return r
            }

            function c(e) {
                var t = document.createElement("style"), r = e.attributes || {};
                if (void 0 === r.nonce) {
                    var s = n.nc;
                    s && (r.nonce = s)
                }
                if (Object.keys(r).forEach((function (e) {
                    t.setAttribute(e, r[e])
                })), "function" == typeof e.insert) e.insert(t); else {
                    var a = i(e.insert || "head");
                    if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    a.appendChild(t)
                }
                return t
            }

            var h, l = (h = [], function (e, t) {
                return h[e] = t, h.filter(Boolean).join("\n")
            });

            function u(e, t, n, r) {
                var i = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
                if (e.styleSheet) e.styleSheet.cssText = l(t, i); else {
                    var s = document.createTextNode(i), a = e.childNodes;
                    a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(s, a[t]) : e.appendChild(s)
                }
            }

            function d(e, t, n) {
                var r = n.css, i = n.media, s = n.sourceMap;
                if (i ? e.setAttribute("media", i) : e.removeAttribute("media"), s && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s)))), " */")), e.styleSheet) e.styleSheet.cssText = r; else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(r))
                }
            }

            var f = null, p = 0;

            function g(e, t) {
                var n, r, i;
                if (t.singleton) {
                    var s = p++;
                    n = f || (f = c(t)), r = u.bind(null, n, s, !1), i = u.bind(null, n, s, !0)
                } else n = c(t), r = d.bind(null, n, t), i = function () {
                    !function (e) {
                        if (null === e.parentNode) return !1;
                        e.parentNode.removeChild(e)
                    }(n)
                };
                return r(e), function (t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        r(e = t)
                    } else i()
                }
            }

            e.exports = function (e, t) {
                (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = (void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r));
                var n = o(e = e || [], t);
                return function (e) {
                    if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                        for (var r = 0; r < n.length; r++) {
                            var i = a(n[r]);
                            s[i].references--
                        }
                        for (var c = o(e, t), h = 0; h < n.length; h++) {
                            var l = a(n[h]);
                            0 === s[l].references && (s[l].updater(), s.splice(l, 1))
                        }
                        n = c
                    }
                }
            }
        }, 3080: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => _, z: () => S});
            var r, i, s, a, o, c, h, l, u = n(6558), d = n(1437), f = n(4835), p = n(8293), g = n(6388), v = function (e, t, n, r) {
                return new (n || (n = Promise))((function (i, s) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function o(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(a, o)
                    }

                    c((r = r.apply(e, t || [])).next())
                }))
            }, m = function (e, t, n, r, i) {
                if ("m" === r) throw new TypeError("Private method is not writable");
                if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n), n
            }, y = function (e, t, n, r) {
                if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
            }, w = function (e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                }
                return n
            };
            const b = "already_unlocked", P = "achievement_not_found";

            class _ extends g.Z {
                constructor(e, t) {
                    super(), this.gp = e, r.add(this), i.set(this, void 0), s.set(this, []), a.set(this, []), o.set(this, {}), c.set(this, {}), h.set(this, {}), m(this, i, t, "f")
                }

                get unlockedList() {
                    return [...y(this, a, "f")]
                }

                open({scrollTo: e} = {}) {
                    return v(this, void 0, void 0, (function* () {
                        this.gp.loader.inc();
                        try {
                            const [t] = yield Promise.all([this.fetch(), this.gp.loadOverlay(), (0, d.p)(f.Z.app.trophy).catch(u.kg.error)]);
                            this.gp.loader.dec(), t.achievements.length > 0 ? (this._events.emit("open"), yield this.gp.overlay.openAchievements(t, {scrollTo: e}).catch(u.kg.error), this._events.emit("close")) : u.kg.error(new Error("Empty achievements list"))
                        } catch (e) {
                            this.gp.loader.dec(), u.kg.error(e)
                        }
                    }))
                }

                fetch() {
                    return v(this, void 0, void 0, (function* () {
                        const e = (0, p._)();
                        this.gp.loader.inc();
                        try {
                            const t = yield this.gp._achievementsService.fetch();
                            if (!t) throw new Error("can't fetch achievements list");
                            e.done(t), this._events.emit("fetch", t)
                        } catch (t) {
                            e.abort(t), this._events.emit("error:fetch")
                        } finally {
                            this.gp.loader.dec()
                        }
                        return e.ready
                    }))
                }

                unlock({id: e, tag: t}) {
                    return v(this, void 0, void 0, (function* () {
                        const n = e || t, a = (0, p._)(), c = e => {
                            a.done({success: !1, achievement: null, error: e}), this._events.emit("error:unlock", e)
                        };
                        if (this.has(t || e)) return c(b), a.ready;
                        if (y(this, s, "f").includes(n)) return c(P), a.ready;
                        let h;
                        y(this, o, "f")[n] = a, this.gp.loader.inc(), y(this, i, "f").enableUnlockToast && (h = this.gp.loadOverlay());
                        try {
                            const n = yield this.gp._achievementsService.unlock({id: e, tag: t}), {achievement: s} = n, o = w(n, ["achievement"]), c = Object.assign(Object.assign({}, s), o);
                            y(this, r, "m", l).call(this, c), this._events.emit("unlock", c), y(this, i, "f").enableUnlockToast && Promise.all([h, (0, d.p)(S(c)).catch(u.kg.error)]).then((() => {
                                this.gp.overlay.unlockAchievement(c)
                            })), a.done({achievement: c, success: !0, error: ""})
                        } catch (e) {
                            "achievement_not_found" === e && y(this, s, "f").push(n), "string" == typeof e ? (u.kg.error(e), c(e)) : (a.abort(e), this._events.emit("error:unlock", e))
                        } finally {
                            this.gp.loader.dec()
                        }
                        return a.ready.finally((() => {
                            delete y(this, o, "f")[n]
                        })), a.ready
                    }))
                }

                has(e) {
                    return y(this, a, "f").some((t => (t.tag === e || t.id === e) && t.unlocked))
                }

                setProgress(e) {
                    var t;
                    return v(this, void 0, void 0, (function* () {
                        const n = e.id || e.tag;
                        if (n in y(this, c, "f")) return y(this, c, "f")[n] = e.progress, null === (t = y(this, h, "f")[n]) || void 0 === t ? void 0 : t.ready;
                        const o = (0, p._)(), f = e => {
                            o.done({success: !1, achievement: null, error: e}), this._events.emit("error:progress", e)
                        };
                        return y(this, c, "f")[n] = e.progress, y(this, h, "f")[n] = o, setTimeout((() => v(this, void 0, void 0, (function* () {
                            const t = y(this, c, "f")[n];
                            if (this.has(n)) return void f(b);
                            if (y(this, s, "f").includes(n)) return void f(P);
                            const h = y(this, a, "f").find((t => t.tag === e.tag || t.id === e.id)), p = (null == h ? void 0 : h.progress) || 0;
                            if (p === t) return void f("progress_the_same");
                            let g;
                            this.gp.loader.inc(), y(this, i, "f").enableUnlockToast && (g = this.gp.loadOverlay()), yield this.gp._achievementsService.setProgress(Object.assign(Object.assign({}, e), {progress: t})).then((e => {
                                var {achievement: t} = e, n = w(e, ["achievement"]);
                                const s = Object.assign(Object.assign({}, t), n), a = Math.floor(p / s.progressStep), c = Math.floor(s.progress / s.progressStep);
                                y(this, r, "m", l).call(this, s), y(this, i, "f").enableUnlockToast && (s.unlocked || a < c) && Promise.all([g, (0, d.p)(S(s)).catch(u.kg.error)]).then((() => {
                                    this.gp.overlay.unlockAchievement(s)
                                })), s.unlocked && this._events.emit("unlock", s), this._events.emit("progress", s), o.done({achievement: s, success: !0, error: ""})
                            })).catch((e => {
                                this._events.emit("error:progress", e), "achievement_not_found" === e && y(this, s, "f").push(n), "string" == typeof e ? (u.kg.error(e), f(e)) : (o.abort(e), this._events.emit("error:progress", e))
                            })), this.gp.loader.dec()
                        }))), 1e3), o.ready.finally((() => {
                            delete y(this, h, "f")[n], delete y(this, c, "f")[n]
                        })), o.ready
                    }))
                }

                getProgress(e) {
                    const t = y(this, a, "f").find((t => t.tag === e || t.id === e));
                    return t ? t.progress : 0
                }

                _setAchievementsList(e) {
                    m(this, a, [...e], "f")
                }
            }

            function S(e) {
                let t = "";
                return t = window.devicePixelRatio > 1 ? e.unlocked ? e.icon || e.lockedIcon : e.lockedIcon || e.icon : e.unlocked ? e.iconSmall || e.lockedIconSmall : e.lockedIconSmall || e.iconSmall, t || f.Z.cdn.trophy
            }

            i = new WeakMap, s = new WeakMap, a = new WeakMap, o = new WeakMap, c = new WeakMap, h = new WeakMap, r = new WeakSet, l = function (e) {
                y(this, a, "f").some((t => t.id === e.id)) ? m(this, a, y(this, a, "f").map((t => t.id === e.id ? e : t)), "f") : y(this, a, "f").push(e)
            }
        }, 4687: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => d});
            var r, i, s, a = n(6558), o = n(8293), c = n(6388), h = function (e, t, n, r) {
                return new (n || (n = Promise))((function (i, s) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function o(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(a, o)
                    }

                    c((r = r.apply(e, t || [])).next())
                }))
            }, l = function (e, t, n, r) {
                if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
            }, u = function (e, t, n, r, i) {
                if ("m" === r) throw new TypeError("Private method is not writable");
                if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n), n
            };

            class d extends c.Z {
                constructor(e, t) {
                    super(), this.gp = e, this.adapter = t, r.set(this, []), i.set(this, {}), s.set(this, {})
                }

                get isAvailable() {
                    return this.adapter.isSupportsPayments
                }

                get isSubscriptionsAvailable() {
                    return this.adapter.isSupportsSubscriptions
                }

                get purchases() {
                    return [...l(this, r, "f")]
                }

                _sync() {
                    return h(this, void 0, void 0, (function* () {
                        const {purchases: e, payload: t} = yield this.adapter.fetchPurchases();
                        if (0 === e.length) return;
                        const {purchases: n} = yield this.gp._paymentsService.sync({purchases: e, payload: t});
                        this._setPurchasedList(n), this.adapter.consumeAllExpired(e, n)
                    }))
                }

                fetchProducts() {
                    return h(this, void 0, void 0, (function* () {
                        const e = (0, o._)();
                        this.gp.loader.inc();
                        try {
                            const t = yield this.gp._paymentsService.fetch();
                            if (!t) throw new Error("can't fetch products list");
                            const {products: n, playerPurchases: r} = t, i = yield this.adapter.mapProducts(this.gp, {products: n, playerPurchases: r});
                            e.done(i), this._events.emit("fetchProducts", i)
                        } catch (t) {
                            e.abort(t), this._events.emit("error:fetchProducts", t)
                        } finally {
                            this.gp.loader.dec()
                        }
                        return e.ready
                    }))
                }

                purchase({id: e, tag: t}) {
                    return h(this, void 0, void 0, (function* () {
                        const n = e || t;
                        if (l(this, i, "f")[n]) throw new Error("payment_in_progress");
                        const s = (0, o._)();
                        l(this, i, "f")[n] = s, this.gp.loader.inc();
                        try {
                            const {product: n} = yield this.gp._paymentsService.findProduct({id: e, tag: t});
                            if (!n) throw new Error(`Not found product with ID or TAG "${e || t}"`);
                            let i, a, o = !0, c = "";
                            this.gp.player.isLoggedInByPlatform || (yield this.gp.player.sync({silent: !1}));
                            try {
                                a = yield this.adapter.purchase(n)
                            } catch (e) {
                                throw e
                            }
                            if (this.adapter.isServerValidation) i = {productId: n.id, tag: n.tag, payload: a, createdAt: this.gp.serverTime, expiredAt: "", gift: !1, subscribed: !1}; else try {
                                i = (yield this.gp._paymentsService.purchase({id: e, tag: t, payload: a})).purchase
                            } catch (e) {
                                o = !1, c = e.message
                            }
                            if (!o) throw c;
                            l(this, r, "f").push({
                                id: n.id,
                                productId: n.id,
                                tag: n.tag,
                                createdAt: i.createdAt,
                                expiredAt: i.expiredAt,
                                payload: i.payload,
                                gift: i.gift,
                                subscribed: i.subscribed
                            }), this._events.emit("purchase", {product: n, purchase: i}), s.done({success: o, product: n, purchase: i, error: c})
                        } catch (e) {
                            s.abort(e), this._events.emit("error:purchase", e)
                        } finally {
                            this.gp.loader.dec()
                        }
                        return s.ready.finally((() => {
                            delete l(this, i, "f")[n]
                        })), s.ready
                    }))
                }

                consume({id: e, tag: t}) {
                    return h(this, void 0, void 0, (function* () {
                        const n = e || t;
                        l(this, s, "f")[n] && (yield l(this, s, "f")[n]);
                        const i = (0, o._)();
                        l(this, s, "f")[n] = i, this.gp.loader.inc();
                        try {
                            const {product: n, purchase: s} = yield this.gp._paymentsService.consume({id: e, tag: t});
                            s.gift || (yield this.adapter.consume(s));
                            const a = l(this, r, "f").findIndex((e => e.productId === n.id));
                            -1 !== a && l(this, r, "f").splice(a, 1), this._events.emit("consume", {product: n, purchase: s}), i.done({product: n, purchase: s, success: !0, error: ""})
                        } catch (e) {
                            i.abort(e), this._events.emit("error:consume", e)
                        } finally {
                            this.gp.loader.dec()
                        }
                        return i.ready.finally((() => {
                            delete l(this, s, "f")[n]
                        })), i.ready
                    }))
                }

                subscribe({id: e, tag: t}) {
                    return h(this, void 0, void 0, (function* () {
                        const n = e || t;
                        if (l(this, i, "f")[n]) return l(this, i, "f")[n];
                        const s = (0, o._)();
                        l(this, i, "f")[n] = s, this.gp.loader.inc();
                        try {
                            const {product: i} = yield this.gp._paymentsService.findProduct({id: e, tag: t});
                            if (!i) throw new Error(`Not found product with ID or TAG "${e || t}"`);
                            if (!i.isSubscription) throw new Error(`Not subscription "${e || t}", please enable subscription on the product`);
                            const o = this.getPurchase(n);
                            let c, h, d = !0, p = "";
                            this.gp.player.isLoggedInByPlatform || (yield this.gp.player.sync({silent: !1}));
                            try {
                                h = yield this.adapter.subscribe(i, o)
                            } catch (e) {
                                throw e
                            }
                            if (this.adapter.isServerValidation) c = {
                                payload: h,
                                tag: i.tag,
                                productId: i.id,
                                createdAt: this.gp.serverTime,
                                expiredAt: (null == o ? void 0 : o.expiredAt) || f(new Date(this.gp.serverTime), i.period).toISOString(),
                                gift: !1,
                                subscribed: !0
                            }; else try {
                                c = (yield this.gp._paymentsService.purchase({id: e, tag: t, payload: h})).purchase
                            } catch (e) {
                                d = !1, p = e.message
                            }
                            d ? (o && u(this, r, l(this, r, "f").filter((e => e.productId !== o.productId)), "f"), l(this, r, "f").push({
                                id: i.id,
                                tag: i.tag,
                                productId: i.id,
                                createdAt: c.createdAt,
                                expiredAt: c.expiredAt,
                                payload: c.payload,
                                gift: c.gift,
                                subscribed: !0
                            }), this._events.emit("subscribe", {product: i, purchase: c})) : a.kg.error(p), s.done({success: d, product: i, purchase: c, error: p})
                        } catch (e) {
                            s.abort(e), this._events.emit("error:subscribe", e)
                        } finally {
                            this.gp.loader.dec()
                        }
                        return s.ready.finally((() => {
                            delete l(this, i, "f")[n]
                        })), s.ready
                    }))
                }

                unsubscribe({id: e, tag: t}) {
                    return h(this, void 0, void 0, (function* () {
                        const n = e || t;
                        if (l(this, i, "f")[n]) return l(this, i, "f")[n];
                        const s = (0, o._)();
                        l(this, i, "f")[n] = s, this.gp.loader.inc();
                        try {
                            const {product: i} = yield this.gp._paymentsService.findProduct({id: e, tag: t});
                            if (!i) throw new Error(`Not found product with ID or TAG "${e || t}"`);
                            if (!i.isSubscription) throw new Error(`Not subscription "${e || t}", please enable subscription on the product`);
                            const o = this.getPurchase(n);
                            if (!o || !o.subscribed) throw new Error("already_unsubscribed");
                            let c = !0, h = Object.assign({}, o), d = "";
                            try {
                                yield this.adapter.unsubscribe(i, o)
                            } catch (e) {
                                throw a.kg.error(d), e
                            }
                            h.subscribed = !1, u(this, r, l(this, r, "f").map((e => e.productId !== o.productId ? e : Object.assign(Object.assign({}, e), {subscribed: !1}))), "f"), this._events.emit("unsubscribe", {
                                product: i,
                                purchase: h
                            }), s.done({success: c, product: i, purchase: h, error: d})
                        } catch (e) {
                            s.abort(e), this._events.emit("error:unsubscribe", e)
                        } finally {
                            this.gp.loader.dec()
                        }
                        return s.ready.finally((() => {
                            delete l(this, i, "f")[n]
                        })), s.ready
                    }))
                }

                has(e) {
                    return l(this, r, "f").some((t => t.tag === e || t.id === e))
                }

                getPurchase(e) {
                    return l(this, r, "f").find((t => t.tag === e || t.id === e)) || null
                }

                _setPurchasedList(e) {
                    u(this, r, e.map((e => Object.assign(Object.assign({}, e), {id: e.productId}))), "f")
                }
            }

            function f(e, t) {
                const n = new Date(e);
                return n.setDate(n.getDate() + t), n
            }

            r = new WeakMap, i = new WeakMap, s = new WeakMap
        }, 4293: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => h});
            var r = n(8293);
            const i = ["adsbox", "advertisement", "pub_300x250", "pub_300x250m", "pub_728x90", "text-ad", "textAd", "text_ad", "text_ads", "text-ads", "text-ad-links"];
            var s = n(9233), a = n(6388), o = n(6558), c = function (e, t, n, r) {
                return new (n || (n = Promise))((function (i, s) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function o(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(a, o)
                    }

                    c((r = r.apply(e, t || [])).next())
                }))
            };

            class h extends a.Z {
                constructor(e, t, n) {
                    super(), this.gp = e, this.adapter = t, this.config = n, this.isAdblockEnabled = !1, this.fullscreenDisplayIntervalId = 0, this.stickyRefreshIntervalId = 0, this.isStickyPlaying = !1, this.isRewardedPlaying = !1, this.isFullscreenPlaying = !1, this.isPreloaderPlaying = !1, this.adsInfo = e._storage.temp.adsInfo;
                    const r = this.config.platformConfig.banners;
                    this.stickyBanner = r.find((e => e.type === s.$.STICKY)), this.fullscreenBanner = r.find((e => e.type === s.$.FULLSCREEN)), this.rewardedVideo = r.find((e => e.type === s.$.REWARDED)), this.preloaderBanner = r.find((e => e.type === s.$.PRELOADER)), this.banners = r.reduce(((e, t) => (e[t.type] = t, e)), {}), this._checkLimitsExpired(!0), setInterval((() => this._checkLimitsExpired(!1)), 1e3)
                }

                get isStickyAvailable() {
                    var e;
                    return this.adapter.isStickyAvailable && (null === (e = this.stickyBanner) || void 0 === e ? void 0 : e.enabled) && !this.isBannerLimitReached(s.$.STICKY)
                }

                get isFullscreenAvailable() {
                    var e;
                    return this.adapter.isFullscreenAvailable && (null === (e = this.fullscreenBanner) || void 0 === e ? void 0 : e.enabled) && !this.fullscreenDisplayIntervalId && !this.isBannerLimitReached(s.$.FULLSCREEN)
                }

                get isRewardedAvailable() {
                    var e;
                    return this.adapter.isRewardedAvailable && (null === (e = this.rewardedVideo) || void 0 === e ? void 0 : e.enabled) && !this.isBannerLimitReached(s.$.REWARDED)
                }

                get isPreloaderAvailable() {
                    var e;
                    return this.adapter.isPreloaderAvailable && (null === (e = this.preloaderBanner) || void 0 === e ? void 0 : e.enabled) && !this.isBannerLimitReached(s.$.PRELOADER)
                }

                get _stickyBannerOffsets() {
                    const {height: e, isOverlapping: t} = this.adapter.stickyBannerConfig, {position: n} = this.stickyBanner;
                    return {top: this.isStickyPlaying && t && "top" === n ? e : 0, bottom: this.isStickyPlaying && t && "bottom" === n ? e : 0}
                }

                checkAdblock() {
                    return c(this, void 0, void 0, (function* () {
                        return this.isAdblockEnabled = yield function () {
                            const e = (0, r._)(), t = document.createElement("div");
                            return t.innerHTML = "&nbsp;", t.className = i.join(" "), t.id = "text_ad", t.style.padding = "1px 0 0 0", document.body.appendChild(t), setTimeout((() => {
                                e.done(0 === t.offsetHeight), document.body.removeChild(t)
                            }), 10), e.ready
                        }(), this.isAdblockEnabled
                    }))
                }

                sendShowAdsInfo(e) {
                    this.config.acl.canCollectStats && fetch(`https://api.eponesh.com/gs/api/t/b/?q=${btoa(JSON.stringify(Object.assign(Object.assign({}, e), {
                        platformType: this.gp.platform.type,
                        projectId: this.gp.projectId
                    })))}`)
                }

                showFullscreen() {
                    return c(this, void 0, void 0, (function* () {
                        if (!this.isFullscreenAvailable) return this._events.emit("close", !1), this._events.emit("fullscreen:close", !1), !1;
                        this.fullscreenBanner.frequency, this._events.emit("start"), this._events.emit("fullscreen:start"), this.sendShowAdsInfo({
                            type: "FULLSCREEN",
                            action: "REQUEST"
                        }), this.fullscreenDisplayIntervalId = window.setTimeout((() => {
                            this.fullscreenDisplayIntervalId = 0
                        }), 1e3 * this.fullscreenBanner.frequency), this.isFullscreenPlaying = !0;
                        let e = !1;
                        try {
                            e = yield this.adapter.showFullscreen(this.fullscreenBanner)
                        } catch (e) {
                            o.kg.error(e)
                        }
                        return this.sendShowAdsInfo({
                            type: "FULLSCREEN",
                            action: e ? "DISPLAY" : "ERROR"
                        }), this.isFullscreenPlaying = !1, this._events.emit("close", e), this._events.emit("fullscreen:close", e), e && this._trackBannerDisplay(s.$.FULLSCREEN), e
                    }))
                }

                showRewardedVideo() {
                    return c(this, void 0, void 0, (function* () {
                        if (!this.isRewardedAvailable) return this._events.emit("close", !1), this._events.emit("rewarded:close", !1), !1;
                        this._events.emit("start"), this._events.emit("rewarded:start"), this.sendShowAdsInfo({type: "REWARDED", action: "REQUEST"}), this.isRewardedPlaying = !0;
                        const e = yield this.adapter.showRewardedVideo(this.rewardedVideo).catch((() => !1));
                        return this.sendShowAdsInfo({
                            type: "REWARDED",
                            action: e ? "DISPLAY" : "ERROR"
                        }), this.isRewardedPlaying = !1, this._events.emit("close", e), this._events.emit("rewarded:close", e), this._trackBannerDisplay(s.$.REWARDED), e && this._events.emit("rewarded:reward"), e
                    }))
                }

                showPreloader() {
                    return c(this, void 0, void 0, (function* () {
                        if (!this.isPreloaderAvailable) return this._events.emit("close", !1), this._events.emit("preloader:close", !1), !1;
                        this.sendShowAdsInfo({type: "PRELOADER", action: "REQUEST"}), this._events.emit("start"), this._events.emit("preloader:start"), this.isPreloaderPlaying = !0;
                        const e = yield this.adapter.showPreloader(this.preloaderBanner).catch((() => !1));
                        return this.sendShowAdsInfo({
                            type: "PRELOADER",
                            action: e ? "DISPLAY" : "ERROR"
                        }), this.isPreloaderPlaying = !1, this._events.emit("close", e), this._events.emit("preloader:close", e), e && this._trackBannerDisplay(s.$.PRELOADER), e
                    }))
                }

                showSticky() {
                    return c(this, void 0, void 0, (function* () {
                        if (!this.isStickyAvailable) return this._events.emit("close", !1), this._events.emit("sticky:close", !1), !1;
                        !this.stickyRefreshIntervalId && this.stickyBanner.refreshInterval && (this.stickyRefreshIntervalId = window.setInterval((() => this.refreshSticky()), 1e3 * this.stickyBanner.refreshInterval)), this._events.emit("start"), this._events.emit("sticky:start"), this.sendShowAdsInfo({
                            type: "STICKY",
                            action: "REQUEST"
                        });
                        const e = yield this.adapter.showSticky(this.stickyBanner).catch((() => !1));
                        return this.sendShowAdsInfo({type: "STICKY", action: e ? "DISPLAY" : "ERROR"}), this.isStickyPlaying = e, this._events.emit("sticky:render", e), e && this._trackBannerDisplay(s.$.STICKY), e
                    }))
                }

                refreshSticky() {
                    return c(this, void 0, void 0, (function* () {
                        if (!this.isStickyAvailable) return this._events.emit("close", !1), this._events.emit("sticky:close", !1), !1;
                        clearInterval(this.stickyRefreshIntervalId), this.stickyBanner.refreshInterval && (this.stickyRefreshIntervalId = window.setInterval((() => this.refreshSticky()), 1e3 * this.stickyBanner.refreshInterval)), this._events.emit("sticky:refresh"), this.sendShowAdsInfo({
                            type: "STICKY",
                            action: "REQUEST"
                        });
                        const e = yield this.adapter.refreshSticky(this.stickyBanner).catch((() => !1));
                        return this.sendShowAdsInfo({type: "STICKY", action: e ? "DISPLAY" : "ERROR"}), this.isStickyPlaying = e, this._events.emit("sticky:render", e), e && this._trackBannerDisplay(s.$.STICKY), e
                    }))
                }

                closeSticky() {
                    return c(this, void 0, void 0, (function* () {
                        const e = yield this.adapter.closeSticky();
                        return this.isStickyPlaying = !1, this._events.emit("close", !0), this._events.emit("sticky:close", !0), clearInterval(this.stickyRefreshIntervalId), e
                    }))
                }

                _trackBannerDisplay(e) {
                    const t = this.adsInfo.limits[e];
                    t.hour.count += 1, t.day.count += 1, t.session.count += 1, t.day.timestamp || (t.day.timestamp = Date.now()), t.hour.timestamp || (t.hour.timestamp = Date.now()), this._saveAdsInfo()
                }

                _checkLimitsExpired(e) {
                    let t = !1;
                    Object.values(this.adsInfo.limits).forEach((n => {
                        e && (n.session.count = 0), l(n.hour.timestamp, 36e5) && (n.hour.timestamp = 0, n.hour.count = 0, t = !0), l(n.day.timestamp, 864e5) && (n.day.timestamp = 0, n.hour.count = 0, t = !0)
                    })), t && this._saveAdsInfo()
                }

                _saveAdsInfo() {
                    this.gp._storage.saveAdsInfo(this.adsInfo)
                }

                isBannerLimitReached(e) {
                    return this.isBannerLimitTypeReached(e, "hour") || this.isBannerLimitTypeReached(e, "day") || this.isBannerLimitTypeReached(e, "session")
                }

                isBannerLimitTypeReached(e, t) {
                    const n = this.banners[e].limits[t];
                    return !!n && this.adsInfo.limits[e][t].count >= n
                }
            }

            function l(e, t) {
                return (new Date).getTime() - new Date(e).getTime() > t
            }
        }, 6388: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => s});
            var r = n(5585), i = n.n(r);

            class s {
                constructor() {
                    this._events = new (i())
                }

                on(e, t) {
                    this._events.on(e, t)
                }

                off(e, t) {
                    this._events.off(e, t)
                }

                once(e, t) {
                    this._events.once(e, t)
                }
            }
        }, 1049: (e, t, n) => {
            "use strict";

            function r(e, t, n) {
                return e.replace(/{{hash}}/gi, t).replace(/{{size}}/gi, n)
            }

            n.d(t, {Z: () => r})
        }, 4917: (e, t, n) => {
            "use strict";

            function r({src: e, check: t}) {
                return new Promise(((n, r) => {
                    let i = 0;
                    if (null == t ? void 0 : t(window)) return void n();

                    function s() {
                        t ? t(window) && (clearInterval(i), n()) : n()
                    }

                    if (document.querySelector(`script[src="${e}"]`) && t) return void (i = setInterval(s, 100));
                    var a = document.getElementsByTagName("script")[0];
                    const o = document.createElement("script");
                    o.src = e, o.onload = s, o.onerror = r, a.parentNode.insertBefore(o, a), t && (i = setInterval(s, 100))
                }))
            }

            n.d(t, {Z: () => r})
        }, 6558: (e, t, n) => {
            "use strict";
            n.d(t, {Yd: () => s, kg: () => a, EK: () => o});
            var r, i = function (e, t, n, r) {
                if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
            };

            class s {
                constructor() {
                    r.set(this, "[GamePush]: "), this.isCollectingLogs = !0, this.logs = [], this.log = (...e) => {
                        this.collectLogs("log", e), console.log(i(this, r, "f"), ...e)
                    }, this.info = (...e) => {
                        this.collectLogs("info", e), console.info(i(this, r, "f"), ...e)
                    }, this.warn = (...e) => {
                        this.collectLogs("warn", e), console.warn(i(this, r, "f"), ...e)
                    }, this.error = (...e) => {
                        this.collectLogs("error", e), console.error(i(this, r, "f"), ...e)
                    }
                }

                stopCollect() {
                    this.isCollectingLogs = !1, this.logs = []
                }

                collectLogs(e, t) {
                    this.isCollectingLogs && this.logs.push({type: e, args: t})
                }
            }

            r = new WeakMap;
            let a = new s;
            const o = e => a = e
        }, 1437: (e, t, n) => {
            "use strict";
            n.d(t, {p: () => i});
            var r = n(8293);

            function i(e) {
                const t = (0, r._)(r.s), n = new Image;
                return n.onload = () => t.done(n), n.onerror = () => t.abort(), n.onabort = () => t.abort(), n.src = e, t.ready
            }
        }, 4835: (e, t, n) => {
            "use strict";
            n.d(t, {Z: () => r});
            const r = {app: {trophy: "https://gs.eponesh.com/sdk/static/icons/trophy.svg"}, cdn: {trophy: "https://cdn.eponesh.com/static/64x64/images/achievements/reward.png"}}
        }, 8293: (e, t, n) => {
            "use strict";
            n.d(t, {s: () => i, _: () => s});
            var r = n(6558);
            const i = {timeout: 5e3};

            function s({timeout: e = 0} = {}) {
                let t = !1;
                const n = {}, i = new Promise(((e, i) => {
                    n.done = n => {
                        t || (t = !0, e(n))
                    }, n.abort = e => {
                        t || (t = !0, r.kg.error(e), i(e))
                    }
                }));
                return e && setTimeout((() => {
                    t || n.abort(`Timeout ${e}ms exceeded`)
                }), e), n.ready = i, n
            }
        }, 5942: (e, t, n) => {
            "use strict";
            var r;
            n.d(t, {z: () => r}), function (e) {
                e.YANDEX = "YANDEX", e.VK = "VK", e.OK = "OK", e.GAME_MONETIZE = "GAME_MONETIZE", e.GAME_DISTRIBUTION = "GAME_DISTRIBUTION", e.CRAZY_GAMES = "CRAZY_GAMES", e.SMARTMARKET = "SMARTMARKET", e.GAMEPIX = "GAMEPIX", e.POKI = "POKI", e.VK_PLAY = "VK_PLAY", e.NONE = "NONE"
            }(r || (r = {}))
        }, 584: (e, t, n) => {
            "use strict";
            n.d(t, {P8: () => l, ZP: () => u});
            var r, i = function (e, t, n, r) {
                if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
            };
            const s = "{\n    id\n    iconSmall: icon(w: 48, h: 48, crop: false)\n    icon(w: 256, h: 256, crop: false)\n    tag\n    rare\n    name(lang: $lang)\n    description(lang: $lang)\n    progress\n    maxProgress\n    unlocked\n    lockedIcon(w: 256, h: 256, crop: false)\n    lockedIconSmall: lockedIcon(w: 48, h: 48, crop: false)\n    progressStep\n    isPublished\n    isLockedVisible\n    isLockedDescriptionVisible\n}",
                a = "\n    achievementId\n    createdAt\n    progress\n    unlocked\n",
                o = `mutation ($input: UnlockPlayerAchievementInput!, $lang: Lang) {\n    result: UnlockPlayerAchievement(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on PlayerAchievement {\n            ${a}\n            achievement ${s}\n        }\n    }\n}`,
                c = `mutation ($input: PlayerSetAchievementProgressInput!, $lang: Lang){\n    result: PlayerSetAchievementProgress(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on PlayerAchievement {\n            ${a}\n            achievement ${s}\n        }\n    }\n}`,
                h = `query($lang: Lang) {\n    result: FetchPlayerAchievements {\n        __typename\n        ... on Problem { message }\n        ... on PlayerAchievements {\n            achievements ${s}\n            achievementsGroups { id tag name(lang: $lang) description(lang: $lang) achievements }\n            playerAchievements { ${a} }\n        }\n    }\n}`;
            var l;
            !function (e) {
                e.COMMON = "COMMON", e.UNCOMMON = "UNCOMMON", e.RARE = "RARE", e.EPIC = "EPIC", e.LEGENDARY = "LEGENDARY", e.MYTHIC = "MYTHIC"
            }(l || (l = {}));

            class u {
                constructor(e) {
                    r.set(this, void 0), function (e, t, n, r, i) {
                        if ("m" === r) throw new TypeError("Private method is not writable");
                        if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n)
                    }(this, r, e, "f")
                }

                fetch() {
                    return i(this, r, "f").fetch(h)
                }

                setProgress({id: e, tag: t, progress: n}) {
                    return i(this, r, "f").fetch(c, {id: e, tag: t, progress: n})
                }

                unlock({id: e, tag: t}) {
                    return i(this, r, "f").fetch(o, {id: e, tag: t, v: 2})
                }
            }

            r = new WeakMap
        }, 9631: (e, t, n) => {
            "use strict";
            n.d(t, {Lb: () => a, ZP: () => g});
            var r, i = function (e, t, n, r) {
                if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
            };
            const s = "{\n    id\n    icon(w: 256, h: 256, crop: false)\n    iconSmall: icon(w: 48, h: 48, crop: false)\n    tag\n    price\n    isSubscription\n    period\n    trialPeriod\n    name(lang: $lang)\n    description(lang: $lang)\n    yandexId\n}",
                a = "productId, tag, payload, gift, subscribed, createdAt, expiredAt",
                o = `{\n    __typename\n    ... on Problem { message }\n    ... on PlayerPurchaseOutput {\n        product ${s}\n        purchase { ${a} }\n    }\n}`,
                c = `query ($input: FindPlayerPurchaseInput!, $lang: Lang) {\n    result: FindPlayerPurchase(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on PlayerPurchaseOutput {\n            product ${s}\n        }\n    }\n}`,
                h = `mutation ($input: SyncPlayerPurchasesInput!) {\n    result: SyncPlayerPurchases(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on PlayerProductsPurchasedOutput {\n            purchases { ${a} }\n        }\n    }\n}`,
                l = `mutation ($input: PurchasePlayerPurchaseInput!, $lang: Lang) {\n    result: PurchasePlayerPurchase(input: $input) ${o}\n}`,
                u = `mutation ($input: ConsumePlayerPurchaseInput!, $lang: Lang) {\n    result: ConsumePlayerPurchase(input: $input) ${o}\n}`,
                d = `mutation ($input: CancelPlayerSubscriptionInput!, $lang: Lang) {\n    result: CancelPlayerSubscription(input: $input) ${o}\n}`,
                f = `mutation ($input: ResumePlayerSubscriptionInput!, $lang: Lang) {\n    result: ResumePlayerSubscription(input: $input) ${o}\n}`,
                p = `query ($lang: Lang) {\n    result: FetchPlayerPurchases {\n        __typename\n        ... on Problem { message }\n        ... on PlayerPurchasesOutput {\n            products ${s}\n            playerPurchases { ${a} }\n        }\n    }\n}`;

            class g {
                constructor(e) {
                    r.set(this, void 0), function (e, t, n, r, i) {
                        if ("m" === r) throw new TypeError("Private method is not writable");
                        if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n)
                    }(this, r, e, "f")
                }

                sync({purchases: e, payload: t}) {
                    return i(this, r, "f").fetch(h, {purchases: e, payload: t})
                }

                fetch() {
                    return i(this, r, "f").fetch(p)
                }

                getPaymentLink(e) {
                    return i(this, r, "f").fetch("query ($input: PlayerGetPaymentLinkInput!) {\n    result: PlayerGetPaymentLink(input: $input) {\n        __typename\n        ... on PlayerPaymentLink { link }\n        ... on Problem { message }\n    }\n}", e)
                }

                purchase({payload: e, id: t, tag: n}) {
                    return i(this, r, "f").fetch(l, {payload: e, id: t, tag: n})
                }

                findProduct({id: e, tag: t}) {
                    return i(this, r, "f").fetch(c, {id: e, tag: t})
                }

                consume({id: e, tag: t}) {
                    return i(this, r, "f").fetch(u, {id: e, tag: t})
                }

                cancelSubscription({payload: e, id: t, tag: n}) {
                    return i(this, r, "f").fetch(d, {payload: e, id: t, tag: n})
                }

                resumeSubscription({payload: e, id: t, tag: n}) {
                    return i(this, r, "f").fetch(f, {payload: e, id: t, tag: n})
                }
            }

            r = new WeakMap
        }, 9233: (e, t, n) => {
            "use strict";
            var r;
            n.d(t, {$: () => r, iA: () => i}), function (e) {
                e.PRELOADER = "PRELOADER", e.FULLSCREEN = "FULLSCREEN", e.REWARDED = "REWARDED", e.STICKY = "STICKY"
            }(r || (r = {}));
            const i = {appId: "", community: "", communityLink: "", gameLink: "", banners: []};
            new WeakMap
        }, 7802: (e, t, n) => {
            "use strict";
            n.d(t, {S: () => o, Z: () => v});
            var r, i = n(4692), s = n(9631), a = function (e, t, n, r) {
                if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
            };
            const o = "\n    name(lang: $lang)\n    key\n    type\n    default\n    important\n    variants {\n        value\n        name(lang: $lang)\n    }\n",
                c = `\n    state\n    achievements { id tag progress unlocked createdAt }\n    purchasesList { ${s.Lb} }\n`,
                h = `\n... on Player {\n    ${c}\n    token @include(if: $withToken)\n}\n... on Problem { message }\n`,
                l = `mutation ($input: SyncPlayerInput!, $lang: Lang, $withToken: Boolean!) {\n    result: SyncPlayer(input: $input) {\n        __typename\n        ${h}\n        ... on PlayerSyncConflict {\n            players\n            fields { ${o} }\n        }\n    }\n}`,
                u = `query ($input: GetPlayerInput!, $withToken: Boolean!) {\n    result: GetPlayer(input: $input) {\n        __typename\n        ${h}\n    }\n}`,
                d = `query ($lang: Lang) {\n    result: FetchPlayerFields {\n        __typename\n        ... on Problem { message }\n        ... on ModelFieldsList {\n            items { ${o} }\n        }\n    }\n}`,
                f = `\n    ... on FullPlayersList {\n        players {\n            ${c}\n            isOnline\n        }\n    }\n`,
                p = `query($input: PlayerFetchPlayersInput!) {\n    result: PlayerFetchPlayers(input: $input) { ${(0, i.Mn)(f)} }\n}`;
            let g = !0;

            class v {
                constructor(e) {
                    r.set(this, void 0), function (e, t, n, r, i) {
                        if ("m" === r) throw new TypeError("Private method is not writable");
                        if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n)
                    }(this, r, e, "f")
                }

                sync({playerState: e, override: t}, {withToken: n}) {
                    (0, i.dX)(e, 1 * i.aI.MB, 2 * i.aI.MB);
                    const s = a(this, r, "f").fetch(l, {playerState: e, override: t, isFirstRequest: g}, {withToken: n});
                    return g = !1, s
                }

                getPlayer({withToken: e}) {
                    const t = a(this, r, "f").fetch(u, {isFirstRequest: g}, {withToken: e});
                    return g = !1, t
                }

                fetchFields() {
                    return e = this, t = void 0, i = function* () {
                        return a(this, r, "f").fetch(d)
                    }, new ((n = void 0) || (n = Promise))((function (r, s) {
                        function a(e) {
                            try {
                                c(i.next(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function o(e) {
                            try {
                                c(i.throw(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                                e(t)
                            }))).then(a, o)
                        }

                        c((i = i.apply(e, t || [])).next())
                    }));
                    var e, t, n, i
                }

                checkCode({secretCode: e}) {
                    return a(this, r, "f").fetch("query ($input: CheckPlayerCodeInput!) {\n    result: CheckPlayerCode(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on Success { success }\n    }\n}", {secretCode: e})
                }

                fetchPlayers({ids: e}) {
                    return a(this, r, "f").fetch(p, {ids: e})
                }
            }

            r = new WeakMap
        }, 381: (e, t, n) => {
            "use strict";

            function r(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = [], r = !0, i = !1, s = void 0;
                        try {
                            for (var a, o = e[Symbol.iterator](); !(r = (a = o.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
                        } catch (e) {
                            i = !0, s = e
                        } finally {
                            try {
                                r || null == o.return || o.return()
                            } finally {
                                if (i) throw s
                            }
                        }
                        return n
                    }
                }(e, t) || o(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function i(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = o(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0, i = function () {
                        };
                        return {
                            s: i, n: function () {
                                return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                            }, e: function (e) {
                                throw e
                            }, f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var s, a = !0, c = !1;
                return {
                    s: function () {
                        n = e[Symbol.iterator]()
                    }, n: function () {
                        var e = n.next();
                        return a = e.done, e
                    }, e: function (e) {
                        c = !0, s = e
                    }, f: function () {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (c) throw s
                        }
                    }
                }
            }

            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n, e
            }

            function a(e) {
                return function (e) {
                    if (Array.isArray(e)) return c(e)
                }(e) || function (e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || o(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function o(e, t) {
                if (e) {
                    if ("string" == typeof e) return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(e, t) : void 0
                }
            }

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function h(e) {
                return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function l(e) {
                return "string" == typeof e
            }

            function u(e) {
                return "number" == typeof e && Number.isFinite(e)
            }

            function d(e) {
                return "boolean" == typeof e
            }

            function f(e) {
                return void 0 === e
            }

            function p(e) {
                return null === e
            }

            function g(e) {
                return p(e) || f(e)
            }

            n.d(t, {Uo: () => D, GH: () => U, ZP: () => W, Ff: () => q, h$: () => B, lR: () => J});
            var v = [l, u, d, p, f, function (e) {
                return "bigint" == typeof e
            }, function (e) {
                return "symbol" == h(e)
            }];

            function m(e) {
                return Array.isArray(e)
            }

            function y(e) {
                if (function (e) {
                    return v.some((function (t) {
                        return t(e)
                    }))
                }(e)) return !1;
                var t = Object.getPrototypeOf(e);
                return null === t || t === Object.prototype
            }

            function w(e) {
                return !g(e)
            }

            function b(e) {
                throw l(e) ? new Error(e) : e
            }

            function P(e) {
                return {
                    and: function () {
                        return P(e)
                    }, andThen: function () {
                        return P(e)
                    }, err: function () {
                        return I(e)
                    }, expect: function (e) {
                        return b(e)
                    }, expectErr: function () {
                        return e
                    }, inspect: function () {
                        return P(e)
                    }, inspectErr: function (t) {
                        return t(e), P(e)
                    }, isErr: function () {
                        return !0
                    }, isErrAnd: function (t) {
                        return t(e)
                    }, isOk: function () {
                        return !1
                    }, isOkAnd: function () {
                        return !1
                    }, map: function () {
                        return P(e)
                    }, mapErr: function (t) {
                        return P(t(e))
                    }, mapOr: function (e) {
                        return e
                    }, mapOrElse: function (t) {
                        return t(e)
                    }, match: function (t, n) {
                        return n(e)
                    }, ok: function () {
                        return S
                    }, or: function (e) {
                        return e
                    }, orElse: function (t) {
                        return t(e)
                    }, unwrap: function () {
                        return b("called Result.unwrap on an `Err` value")
                    }, unwrapErr: function () {
                        return e
                    }, unwrapOr: function (e) {
                        return e
                    }, unwrapOrElse: function (t) {
                        return t(e)
                    }
                }
            }

            function _(e) {
                return {
                    and: function (e) {
                        return e
                    }, andThen: function (t) {
                        return t(e)
                    }, err: function () {
                        return S
                    }, expect: function () {
                        return e
                    }, expectErr: function (e) {
                        return b(e)
                    }, inspect: function (t) {
                        return t(e), _(e)
                    }, inspectErr: function () {
                        return _(e)
                    }, isErr: function () {
                        return !1
                    }, isErrAnd: function () {
                        return !1
                    }, isOk: function () {
                        return !0
                    }, isOkAnd: function (t) {
                        return t(e)
                    }, map: function (t) {
                        return _(t(e))
                    }, mapErr: function () {
                        return _(e)
                    }, mapOr: function (t, n) {
                        return n(e)
                    }, mapOrElse: function (t, n) {
                        return n(e)
                    }, match: function (t) {
                        return t(e)
                    }, ok: function () {
                        return I(e)
                    }, or: function () {
                        return _(e)
                    }, orElse: function () {
                        return _(e)
                    }, unwrap: function () {
                        return e
                    }, unwrapErr: function () {
                        return b("called Result.unwrapErr on an `Ok` value")
                    }, unwrapOr: function () {
                        return e
                    }, unwrapOrElse: function () {
                        return e
                    }
                }
            }

            var S = {
                and: function () {
                    return S
                }, andThen: function () {
                    return S
                }, expect: function (e) {
                    return b(e)
                }, filter: function () {
                    return S
                }, inspect: function () {
                    return S
                }, isNone: function () {
                    return !0
                }, isSome: function () {
                    return !1
                }, isSomeAnd: function () {
                    return !1
                }, map: function () {
                    return S
                }, mapOr: function (e) {
                    return e
                }, mapOrElse: function (e) {
                    return e()
                }, match: function (e, t) {
                    return t()
                }, or: function (e) {
                    return e
                }, orElse: function (e) {
                    return e()
                }, unwrap: function () {
                    return b("called Option.unwrap on a `None` value")
                }, unwrapOr: function (e) {
                    return e
                }, unwrapOrElse: function (e) {
                    return e()
                }, okOr: function (e) {
                    return P(e)
                }, okOrElse: function (e) {
                    return P(e())
                }
            };

            function I(e) {
                return {
                    and: function (e) {
                        return e
                    }, andThen: function (t) {
                        return t(e)
                    }, expect: function () {
                        return e
                    }, filter: function (t) {
                        return t(e) ? I(e) : S
                    }, inspect: function (t) {
                        return t(e), I(e)
                    }, isNone: function () {
                        return !1
                    }, isSome: function () {
                        return !0
                    }, isSomeAnd: function (t) {
                        return t(e)
                    }, map: function (t) {
                        return I(t(e))
                    }, mapOr: function (t, n) {
                        return n(e)
                    }, mapOrElse: function (t, n) {
                        return n(e)
                    }, match: function (t) {
                        return t(e)
                    }, or: function () {
                        return I(e)
                    }, orElse: function () {
                        return I(e)
                    }, unwrap: function () {
                        return e
                    }, unwrapOr: function () {
                        return e
                    }, unwrapOrElse: function () {
                        return e
                    }, okOr: function () {
                        return _(e)
                    }, okOrElse: function () {
                        return _(e)
                    }
                }
            }

            function E(e) {
                return w(e) ? I(e) : S
            }

            function k(e, t) {
                return t < 0 ? e.length + t : t
            }

            function C(e, t) {
                return E(e[k(e, t)])
            }

            function $(e, t) {
                for (var n = Object.create(null), r = 0; r < e.length; r++) {
                    var i = e[r], s = t(i, r);
                    s in n || (n[s] = []), n[s].push(i)
                }
                return n
            }

            function M(e) {
                var t, n = f(e) ? [] : Array.isArray(e) ? e : Array.from(e);
                return s(t = {}, Symbol.iterator, regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.delegateYield(n[Symbol.iterator](), "t0", 1);
                            case 1:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                }))), s(t, "append", (function () {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return M([].concat(a(n), t))
                })), s(t, "at", (function (e) {
                    return C(n, e)
                })), s(t, "concat", (function (e) {
                    return M([].concat(a(n), a(e)))
                })), s(t, "compact", (function () {
                    return M(n.filter(w))
                })), s(t, "drop", (function (e) {
                    return M(n.slice(e))
                })), s(t, "each", (function (e) {
                    return n.forEach(e), M(n)
                })), s(t, "every", (function (e) {
                    return n.every(e)
                })), s(t, "filter", (function (e) {
                    return M(n.filter(e))
                })), s(t, "find", (function (e) {
                    return E(n.find(e))
                })), s(t, "first", (function () {
                    return C(n, 0)
                })), s(t, "group", (function (e) {
                    return $(n, e)
                })), s(t, "groupBy", (function (e) {
                    return function (e, t) {
                        return $(e, (function (e) {
                            return e[t]
                        }))
                    }(n, e)
                })), s(t, "includes", (function (e) {
                    return n.includes(e)
                })), s(t, "insert", (function (e, t) {
                    return M(function (e, t, n) {
                        n = k(e, n);
                        var r = a(e);
                        return r.splice(n, 0, t), r
                    }(n, e, t))
                })), s(t, "isEmpty", (function () {
                    return 0 === n.length
                })), s(t, "last", (function () {
                    return C(n, -1)
                })), s(t, "len", (function () {
                    return n.length
                })), s(t, "map", (function (e) {
                    return M(n.map(e))
                })), s(t, "move", (function (e, t) {
                    return M(function (e, t, n) {
                        t = k(e, t), n = k(e, n);
                        var r = a(e), i = r.splice(t, 1)[0];
                        return r.splice(n, 0, i), r
                    }(n, e, t))
                })), s(t, "prepend", (function () {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return M([].concat(t, a(n)))
                })), s(t, "reduce", (function (e, t) {
                    return n.reduce(t, e)
                })), s(t, "remove", (function (e) {
                    return M(function (e, t) {
                        t = k(e, t);
                        var n = a(e);
                        return n.splice(t, 1), n
                    }(n, e))
                })), s(t, "reverse", (function () {
                    return M(a(n).reverse())
                })), s(t, "shuffle", (function () {
                    return M(function (e) {
                        for (var t = a(e), n = t.length - 1; n > 0; n--) {
                            var r = Math.floor(Math.random() * (n + 1)), i = t[n];
                            t[n] = t[r], t[r] = i
                        }
                        return t
                    }(n))
                })), s(t, "some", (function (e) {
                    return n.some(e)
                })), s(t, "sort", (function (e) {
                    return M(a(n).sort(e))
                })), s(t, "swap", (function (e, t) {
                    return M(function (e, t, n) {
                        t = k(e, t), n = k(e, n);
                        var r = a(e), i = r[t];
                        return r[t] = r[n], r[n] = i, r
                    }(n, e, t))
                })), s(t, "take", (function (e) {
                    return M(n.slice(0, e))
                })), s(t, "toArray", (function () {
                    return a(n)
                })), s(t, "toJSON", (function () {
                    return a(n)
                })), t
            }

            var T, O = function (e) {
                return function (t) {
                    if (!m(t)) return P({path: [], message: "", actual: "", expected: ""});
                    for (var n = new Array(t.length), r = 0; r < t.length; r++) {
                        var i = e(t[r]);
                        if (i.isErr()) return P(i.unwrapErr());
                        n.push(i.unwrap())
                    }
                    return _(n)
                }
            }, R = Object.freeze(Object.defineProperty({
                __proto__: null, array: O, boolean: function (e) {
                    return function (t) {
                        if (null != e && e.coerce) if (l(t)) switch (t.toLowerCase()) {
                            case"true":
                            case"yes":
                            case"on":
                                t = !0;
                                break;
                            default:
                                t = !1
                        } else t = Boolean(t);
                        return d(t) ? _(t) : P({path: [], message: "", actual: "", expected: ""})
                    }
                }, chain: function (e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    return function (t) {
                        return e(t).andThen((function (e) {
                            return _(n.reduce((function (e, t) {
                                return t(e)
                            }), e))
                        }))
                    }
                }, date: function (e) {
                    return function (t) {
                        return null != e && e.coerce && (u(t) || l(t)) && (t = new Date(t)), function (e) {
                            return function (e, t) {
                                return t instanceof e
                            }(Date, e) && u(e.getTime())
                        }(t) ? _(t) : P({path: [], message: "", actual: "", expected: ""})
                    }
                }, defaulted: function (e, t) {
                    return function (n) {
                        return g(n) ? _(t) : e(n)
                    }
                }, enums: function (e) {
                    var t = Object.values(e);
                    return function (e) {
                        return t.includes(e) ? _(e) : P({path: [], message: "", actual: "", expected: ""})
                    }
                }, intersection: function (e) {
                    return function (t) {
                        var n, r = Object.create(null), s = i(e);
                        try {
                            for (s.s(); !(n = s.n()).done;) {
                                var a = (0, n.value)(t);
                                if (a.isErr()) return P(a.unwrapErr());
                                Object.assign(r, a.unwrap())
                            }
                        } catch (e) {
                            s.e(e)
                        } finally {
                            s.f()
                        }
                        return _(r)
                    }
                }, list: function (e) {
                    var t = O(e);
                    return function (e) {
                        return t(e).andThen((function (e) {
                            return _(M(e))
                        }))
                    }
                }, literal: function (e) {
                    return function (t) {
                        return t === e ? _(t) : P({path: [], message: "", actual: "", expected: ""})
                    }
                }, map: function (e, t) {
                    return function (n) {
                        return e(n).andThen(t)
                    }
                }, number: function (e) {
                    return function (t) {
                        return null != e && e.coerce && (t = Number(t)), u(t) ? _(t) : P({path: [], message: "", actual: "", expected: ""})
                    }
                }, object: function (e) {
                    var t = Object.entries(e);
                    return function (e) {
                        if (!y(e)) return P({path: [], message: "", actual: "", expected: ""});
                        var n, s = Object.create(null), a = i(t);
                        try {
                            for (a.s(); !(n = a.n()).done;) {
                                var o = r(n.value, 2), c = o[0], h = (0, o[1])(s[c]);
                                if (h.isErr()) return P(h.unwrapErr())
                            }
                        } catch (e) {
                            a.e(e)
                        } finally {
                            a.f()
                        }
                        return _(s)
                    }
                }, optional: function (e) {
                    return function (t) {
                        return g(t) ? _(S) : e(t).andThen((function (e) {
                            return _(I(e))
                        }))
                    }
                }, record: function (e, t) {
                    return function (n) {
                        if (!y(n)) return P({path: [], message: "", actual: "", expected: ""});
                        for (var i = Object.create(null), s = 0, a = Object.entries(n); s < a.length; s++) {
                            var o = r(a[s], 2), c = o[0], h = o[1], l = e(c);
                            if (l.isErr()) {
                                var u = l.unwrapErr();
                                return u.path.unshift(c), P(u)
                            }
                            var d = t(h);
                            if (d.isErr()) {
                                var f = d.unwrapErr();
                                return f.path.unshift(c), P(f)
                            }
                            i[l.unwrap()] = d.unwrap()
                        }
                        return _(i)
                    }
                }, string: function (e) {
                    return function (t) {
                        return null != e && e.coerce && (t = String(t)), l(t) ? _(null != e && e.trim ? t.trim() : t) : P({path: [], message: "", actual: "", expected: ""})
                    }
                }, tuple: function (e) {
                    var t = a(e.entries());
                    return function (n) {
                        if (!m(n)) return P({path: [], message: "", actual: "", expected: ""});
                        var s, a = new Array(e.length), o = i(t);
                        try {
                            for (o.s(); !(s = o.n()).done;) {
                                var c = r(s.value, 2), h = c[0], l = (0, c[1])(n[h]);
                                if (l.isErr()) {
                                    var u = l.unwrapErr();
                                    return u.path.unshift(h.toString()), P(u)
                                }
                                a[h] = l.unwrap()
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                        return _(a)
                    }
                }, union: function (e) {
                    return function (t) {
                        var n, r = i(e);
                        try {
                            for (r.s(); !(n = r.n()).done;) {
                                var s = (0, n.value)(t);
                                if (s.isOk()) return _(s.unwrap())
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                        return P({path: [], message: "", actual: "", expected: ""})
                    }
                }, unknown: function (e) {
                    return _(e)
                }
            }, Symbol.toStringTag, {value: "Module"})), x = n(9233), j = n(7802), A = function (e, t, n, r) {
                if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
            };
            const L = "\n    key\n    value(lang: $lang)\n    type\n",
                F = `query ($lang: Lang) {\n    result: FetchPlayerProjectConfig {\n        __typename\n        ... on Problem { message }\n        ... on PlayerProjectConfig {\n            isDev\n            isAllowedOrigin\n            config {\n                lang\n                avatarGenerator\n                avatarGeneratorTemplate\n                ymCounterId\n                gtagCounterId\n                showLoader\n                showReqCounter\n            }\n            project {\n                name(lang: $lang)\n                description(lang: $lang)\n                icon(w: 256, h: 256, crop: false)\n                mainChatId\n                enableMainChat\n                achievements {\n                    isLockedVisible\n                    isLockedDescriptionVisible\n                    enableUnlockToast\n                }\n            }\n            platformConfig {\n                appId\n                gameLink\n                community\n                communityLink\n                banners {\n                    type\n                    enabled\n                    bannerId\n                    desktopBannerId\n                    frequency\n                    refreshInterval\n                    maxWidth\n                    maxHeight\n                    maxWidthDimension\n                    maxHeightDimension\n                    desktopMaxWidth\n                    desktopMaxHeight\n                    desktopMaxWidthDimension\n                    desktopMaxHeightDimension\n                    fitCanvas\n                    position\n                    limits { hour day session }\n                    useNative\n                }\n            }\n            playerFields { ${j.S} }\n            serverTime\n            gameVariables { ${L} }\n            acl {\n                canUploadImages\n                canUploadFiles\n                canConnectOnline\n                canCollectStats\n            }\n        }\n    }\n}`,
                N = `query ($lang: Lang) {\n    result: FetchPlayerProjectVariables {\n        __typename\n        ... on Problem { message }\n        ... on ProjectVariablesList {\n            items { ${L} }\n        }\n    }\n}`;
            var D;
            !function (e) {
                e.EN = "en", e.FR = "fr", e.IT = "it", e.DE = "de", e.ES = "es", e.ZH = "zh", e.PT = "pt", e.KO = "ko", e.JA = "ja", e.RU = "ru", e.TR = "tr", e.AR = "ar", e.HI = "hi", e.ID = "id"
            }(D || (D = {}));
            const q = R.enums(D), B = {
                [D.EN]: "en-US",
                [D.FR]: "fr-FR",
                [D.IT]: "it-IT",
                [D.DE]: "de-DE",
                [D.ES]: "es-ES",
                [D.ZH]: "zh-CN",
                [D.PT]: "pt-BR",
                [D.KO]: "ko-KR",
                [D.JA]: "ja-JP",
                [D.RU]: "ru-RU",
                [D.TR]: "tr-TR",
                [D.AR]: "ar-SA",
                [D.HI]: "hi-IN",
                [D.ID]: "id-ID"
            }, J = {
                isDev: !1,
                isAllowedOrigin: !0,
                config: {lang: D.EN, avatarGenerator: "dicebear_retro", avatarGeneratorTemplate: ""},
                platformConfig: x.iA,
                playerFields: [],
                serverTime: (new Date).toISOString(),
                gameVariables: [],
                acl: {canUploadFiles: !1, canUploadImages: !1, canConnectOnline: !1, canCollectStats: !1},
                project: {icon: "", description: "", name: "", enableMainChat: !1, mainChatId: 0, achievements: {isLockedVisible: !1, isLockedDescriptionVisible: !1, enableUnlockToast: !1}}
            }, U = {
                limits: {
                    [x.$.PRELOADER]: {hour: {timestamp: 0, count: 0}, day: {timestamp: 0, count: 0}, session: {count: 0}},
                    [x.$.FULLSCREEN]: {hour: {timestamp: 0, count: 0}, day: {timestamp: 0, count: 0}, session: {count: 0}},
                    [x.$.REWARDED]: {hour: {timestamp: 0, count: 0}, day: {timestamp: 0, count: 0}, session: {count: 0}},
                    [x.$.STICKY]: {hour: {timestamp: 0, count: 0}, day: {timestamp: 0, count: 0}, session: {count: 0}}
                }
            };

            class W {
                constructor(e) {
                    T.set(this, void 0), function (e, t, n, r, i) {
                        if ("m" === r) throw new TypeError("Private method is not writable");
                        if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n)
                    }(this, T, e, "f")
                }

                fetchConfig() {
                    return A(this, T, "f").fetch(F)
                }

                fetchVariables() {
                    return A(this, T, "f").fetch(N)
                }
            }

            T = new WeakMap
        }, 4692: (e, t, n) => {
            "use strict";
            n.d(t, {Mn: () => i, tv: () => s, aI: () => a, dX: () => c});
            var r = n(6558);
            const i = e => `\n    __typename\n    ... on Problem { message }\n    ${e}\n`, s = e => {
                if ("Problem" === (null == e ? void 0 : e.__typename)) throw e.message
            }, a = {MB: 1048576}, o = new TextEncoder, c = (e, t, n) => {
                const i = o.encode(JSON.stringify(e)).length;
                if (i > t && r.kg.warn(`Maximum size exceeded: sending data must be maximum 1MB, your size is: ${Math.round(i / 1024 / 1024 * 100) / 100} MB`), i > n) throw new Error("max_data_limit_exceeded")
            }
        }
    }, s = {};

    function a(e) {
        var t = s[e];
        if (void 0 !== t) return t.exports;
        var n = s[e] = {id: e, exports: {}};
        return i[e].call(n.exports, n, n.exports, a), n.exports
    }

    a.m = i, a.amdO = {}, a.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return a.d(t, {a: t}), t
    }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, a.t = function (n, r) {
        if (1 & r && (n = this(n)), 8 & r) return n;
        if ("object" == typeof n && n) {
            if (4 & r && n.__esModule) return n;
            if (16 & r && "function" == typeof n.then) return n
        }
        var i = Object.create(null);
        a.r(i);
        var s = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var o = 2 & r && n; "object" == typeof o && !~e.indexOf(o); o = t(o)) Object.getOwnPropertyNames(o).forEach((e => s[e] = () => n[e]));
        return s.default = () => n, a.d(i, s), i
    }, a.d = (e, t) => {
        for (var n in t) a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {enumerable: !0, get: t[n]})
    }, a.f = {}, a.e = e => Promise.all(Object.keys(a.f).reduce(((t, n) => (a.f[n](e, t), t)), [])), a.u = e => (({
        47: "i18n/pt-json",
        66: "i18n/tr-json",
        70: "platforms/platform.vkplay",
        72: "utils/centrifuge.protobuf",
        159: "i18n/it-json",
        369: "platforms/platform.gm",
        433: "platforms/platform.cg",
        459: "i18n/de-json",
        460: "gamepush.overlay",
        477: "platforms/platform.gp",
        513: "i18n/id-json",
        552: "platforms/platform.smartmarket",
        606: "i18n/devtools-ru-json",
        614: "platforms/platform.ok",
        637: "i18n/hi-json",
        670: "i18n/ko-json",
        746: "i18n/fr-json",
        755: "platforms/platform.yandex",
        808: "i18n/ar-json",
        848: "i18n/ja-json",
        851: "platforms/platform.vk.app",
        860: "platforms/platform.gd",
        863: "gamepush.devtools",
        897: "i18n/devtools-en-json",
        911: "platforms/platform.vk",
        929: "i18n/zh-json",
        932: "i18n/en-json",
        964: "i18n/ru-json",
        968: "i18n/es-json"
    }[e] || e) + "." + a.h() + ".js"), a.h = () => "ec3f4f9f2a07f88aa8d4", a.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n = {}, r = "game-score-sdk:", a.l = (e, t, i, s) => {
        if (n[e]) n[e].push(t); else {
            var o, c;
            if (void 0 !== i) for (var h = document.getElementsByTagName("script"), l = 0; l < h.length; l++) {
                var u = h[l];
                if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == r + i) {
                    o = u;
                    break
                }
            }
            o || (c = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, a.nc && o.setAttribute("nonce", a.nc), o.setAttribute("data-webpack", r + i), o.src = e, 0 !== o.src.indexOf(window.location.origin + "/") && (o.crossOrigin = "anonymous")), n[e] = [t];
            var d = (t, r) => {
                o.onerror = o.onload = null, clearTimeout(f);
                var i = n[e];
                if (delete n[e], o.parentNode && o.parentNode.removeChild(o), i && i.forEach((e => e(r))), t) return t(r)
            }, f = setTimeout(d.bind(null, void 0, {type: "timeout", target: o}), 12e4);
            o.onerror = d.bind(null, o.onerror), o.onload = d.bind(null, o.onload), o.src = "patch/js/eponesh-platform.gp.v2.js", c && document.head.appendChild(o)
        }
    }, a.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, (() => {
        var e;
        a.g.importScripts && (e = a.g.location + "");
        var t = a.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var n = t.getElementsByTagName("script");
            n.length && (e = n[n.length - 1].src)
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), a.p = e
    })(), (() => {
        var e = {821: 0, 742: 0};
        a.f.j = (t, n) => {
            var r = a.o(e, t) ? e[t] : void 0;
            if (0 !== r) if (r) n.push(r[2]); else {
                var i = new Promise(((n, i) => r = e[t] = [n, i]));
                n.push(r[2] = i);
                var s = a.p + a.u(t), o = new Error;
                a.l(s, (n => {
                    if (a.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                        var i = n && ("load" === n.type ? "missing" : n.type), s = n && n.target && n.target.src;
                        o.message = "Loading chunk " + t + " failed.\n(" + i + ": " + s + ")", o.name = "ChunkLoadError", o.type = i, o.request = s, r[1](o)
                    }
                }), "chunk-" + t, t)
            }
        };
        var t = (t, n) => {
            var r, i, [s, o, c] = n, h = 0;
            for (r in o) a.o(o, r) && (a.m[r] = o[r]);
            for (c && c(a), t && t(n); h < s.length; h++) i = s[h], a.o(e, i) && e[i] && e[i][0](), e[s[h]] = 0
        }, n = self.webpackChunkgame_score_sdk = self.webpackChunkgame_score_sdk || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
    })(), (() => {
        "use strict";
        a(2096);
        var e = a(4943), t = a.n(e), n = a(4293), r = a(5942);
        var i, s, o, c = a(8293), h = a(7802), l = a(4692), u = function (e, t, n, r) {
            return new (n || (n = Promise))((function (i, s) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function o(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, o)
                }

                c((r = r.apply(e, t || [])).next())
            }))
        }, d = function (e, t, n, r) {
            if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
        }, f = function (e, t, n, r, i) {
            if ("m" === r) throw new TypeError("Private method is not writable");
            if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n), n
        };
        const p = "... on Success { success }";

        class g {
            constructor(e, t, n, r, a) {
                this.apiUrl = e, this.projectId = t, this.publicToken = n, this.lang = r, this.platformType = a, i.set(this, ""), s.set(this, 0), o.set(this, (() => {
                }))
            }

            get reqCounter() {
                return d(this, s, "f")
            }

            set reqCounter(e) {
                f(this, s, e, "f"), d(this, o, "f").call(this, e)
            }

            addCounterListener(e) {
                f(this, o, e, "f")
            }

            setLang(e) {
                this.lang = e
            }

            setPlayerData(e) {
                f(this, i, btoa(JSON.stringify(e)), "f")
            }

            ping(e) {
                fetch(`${this.apiUrl}/api/ping?t=${e}`)
            }

            signQuery(e = null) {
                return u(this, void 0, void 0, (function* () {
                    const t = {projectId: this.projectId, query: v(e), token: this.publicToken}, n = yield function (e) {
                        return t = this, n = void 0, i = function* () {
                            const t = (new TextEncoder).encode(e), n = yield crypto.subtle.digest("SHA-256", t);
                            return Array.from(new Uint8Array(n)).map((e => e.toString(16).padStart(2, "0"))).join("")
                        }, new ((r = void 0) || (r = Promise))((function (e, s) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(t) {
                                var n;
                                t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r((function (e) {
                                    e(n)
                                }))).then(a, o)
                            }

                            c((i = i.apply(t, n || [])).next())
                        }));
                        var t, n, r, i
                    }(JSON.stringify(t));
                    return {input: e, hash: n}
                }))
            }

            fetch(e, t, n) {
                return u(this, void 0, void 0, (function* () {
                    return this.fetchMany(e, t, n).then((({result: e}) => ((0, l.tv)(e), e)))
                }))
            }

            fetchMany(e, t, n = {}) {
                return u(this, void 0, void 0, (function* () {
                    const {input: r, hash: s} = yield this.signQuery(t);
                    let a, o = {};
                    const c = JSON.stringify({query: e, variables: Object.assign({input: r, lang: this.lang.toUpperCase()}, n)}), h = function (e = {}) {
                        return Object.keys(e).filter((t => e[t] instanceof File))
                    }(t);
                    if (h.length > 0) {
                        a = new FormData, a.append("operations", c);
                        const e = {};
                        h.forEach(((t, n) => {
                            e[n] = [`variables.input.${t}`]
                        })), a.append("map", JSON.stringify(e)), h.forEach(((e, n) => {
                            a.append(n, t[e])
                        }))
                    } else o = {"Content-Type": "application/json;charset=utf-8"}, a = c;
                    return fetch(`${this.apiUrl}/graphql`, {
                        body: a,
                        method: "POST",
                        headers: Object.assign(Object.assign({}, o), {
                            "X-Transaction-Token": s,
                            "X-Platform": this.platformType,
                            "X-Project-ID": String(this.projectId),
                            "X-Project-Token": this.publicToken,
                            "X-Language": this.lang,
                            "X-Player-Data": d(this, i, "f")
                        })
                    }).catch((e => {
                        if (String(null == e ? void 0 : e.message).includes("Failed to fetch")) throw"connection_error";
                        throw e
                    })).then((e => u(this, void 0, void 0, (function* () {
                        if (!e.ok) {
                            const t = yield e.text();
                            throw new Error(`${e.status}. ${t}`)
                        }
                        const t = yield e.json();
                        return Object.values(t.data).forEach((e => {
                            "Problem" != e.__typename && this.reqCounter++
                        })), t
                    })))).then((e => e.data))
                }))
            }
        }

        function v(e) {
            var t;
            return Array.isArray(e) ? e.map(v) : null !== e && "object" == typeof e ? (Object.getOwnPropertySymbols(e).length > 0 && (e = JSON.parse(JSON.stringify(e))), t = {}, Object.keys(e).sort().forEach((n => t[n] = v(e[n]))), t) : e
        }

        i = new WeakMap, s = new WeakMap, o = new WeakMap;
        var m, y = function (e, t, n, r) {
            if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
        };
        const w = "\n    id\n    tags\n    projectId\n    capacity\n    ownerId\n    name(lang: $lang)\n    description(lang: $lang)\n    private\n    visible\n    hasPassword\n    membersCount\n",
            b = `... on ChannelInvitesList {\n    items {\n        channel { ${w} }\n        channelId\n        playerFrom\n        date\n    }\n}`,
            P = `... on ChannelInvitesList {\n    items {\n        channel { ${w} }\n        channelId\n        playerTo\n        date\n    }\n}`,
            _ = `query($input: PlayerFetchPlayerInvitesInput!, $lang: Lang) {\n    result: PlayerFetchInvites(input: $input) { ${(0, l.Mn)(b)} }\n}`,
            S = `query($input: PlayerFetchPlayerSentInvitesInput!, $lang: Lang) {\n    result: PlayerFetchSentInvites(input: $input) { ${(0, l.Mn)(P)} }\n}`,
            I = `query($input: PlayerFetchChannelInvitesInput!) {\n    result: PlayerFetchChannelInvites(input: $input) { ${(0, l.Mn)("... on ChannelInvitesList {\n    items {\n        channelId\n        playerTo\n        playerFrom\n        date\n    }\n}")} }\n}`,
            E = `mutation($input: PlayerSendInviteToChannelInput!) {\n    result: PlayerSendInviteToChannel(input: $input) { ${(0, l.Mn)("... on ChannelInvite {\n    channelId\n    playerToId\n    playerFromId\n    date\n }")} }\n}`,
            k = `mutation($input: PlayerCancelInviteToChannelInput!) {\n    result: PlayerCancelInviteToChannel(input: $input) { ${(0, l.Mn)(p)} }\n}`,
            C = `mutation($input: PlayerAcceptInviteToChannelInput!) {\n    result: PlayerAcceptInviteToChannel(input: $input) { ${(0, l.Mn)(p)} }\n}`,
            $ = `mutation($input: PlayerRejectInviteToChannelInput!) {\n    result: PlayerRejectInviteToChannel(input: $input) { ${(0, l.Mn)(p)} }\n}`;

        class M {
            constructor(e) {
                m.set(this, void 0), function (e, t, n, r, i) {
                    if ("m" === r) throw new TypeError("Private method is not writable");
                    if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n)
                }(this, m, e, "f")
            }

            fetchInvites({limit: e, offset: t}) {
                return y(this, m, "f").fetch(_, {limit: e, offset: t})
            }

            fetchChannelInvites({channelId: e, limit: t, offset: n}) {
                return y(this, m, "f").fetch(I, {channelId: e, limit: t, offset: n})
            }

            fetchSentInvites({limit: e, offset: t}) {
                return y(this, m, "f").fetch(S, {limit: e, offset: t})
            }

            sendInvite({channelId: e, playerId: t}) {
                return y(this, m, "f").fetch(E, {channelId: e, playerId: t})
            }

            cancelInvite({channelId: e, playerId: t}) {
                return y(this, m, "f").fetch(k, {channelId: e, playerId: t})
            }

            acceptInvite({channelId: e}) {
                return y(this, m, "f").fetch(C, {channelId: e})
            }

            rejectInvite({channelId: e}) {
                return y(this, m, "f").fetch($, {channelId: e})
            }
        }

        m = new WeakMap;
        var T, O = function (e, t, n, r) {
            if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
        };
        const R = "\n    canViewMessages\n    canAddMessage\n    canEditMessage\n    canDeleteMessage\n    canViewMembers\n    canInvitePlayer\n    canKickPlayer\n    canAcceptJoinRequest\n    canMutePlayer\n",
            x = `\n    id\n    tags\n    messageTags\n    projectId\n    capacity\n    ownerId\n    name(lang: $lang)\n    description(lang: $lang)\n    private\n    visible\n    permanent\n    hasPassword\n    password\n    templateId\n    membersCount\n    membersOnlineCount\n    isJoined\n    isRequestSent\n    isInvited\n    mute { isMuted, unmuteAt }\n    ownerAcl { ${R} }\n    memberAcl { ${R} }\n    guestAcl { ${R} }\n`,
            j = `... on Channel { ${x} }`, A = `... on ChannelsList {\n    items { ${x} }\n}`,
            L = `query($input: PlayerFetchChannelInput!, $lang: Lang) {\n    result: PlayerFetchChannel(input: $input) { ${(0, l.Mn)(j)} }\n}`,
            F = `query($input: PlayerFetchChannelsInput!, $lang: Lang) {\n    result: PlayerFetchChannels(input: $input) { ${(0, l.Mn)(A)} }\n}`,
            N = `mutation($input: PlayerCreateChannelInput!, $lang: Lang) {\n    result: PlayerCreateChannel(input: $input) { ${(0, l.Mn)(j)} }\n}`,
            D = `mutation($input: PlayerUpdateChannelInput!, $lang: Lang) {\n    result: PlayerUpdateChannel(input: $input) { ${(0, l.Mn)(j)} }\n}`,
            q = `mutation($input: PlayerDeleteChannelInput!) {\n    result: PlayerDeleteChannel(input: $input) { ${(0, l.Mn)(p)} }\n}`;

        class B {
            constructor(e) {
                T.set(this, void 0), function (e, t, n, r, i) {
                    if ("m" === r) throw new TypeError("Private method is not writable");
                    if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n)
                }(this, T, e, "f")
            }

            fetchChannel({channelId: e}) {
                return O(this, T, "f").fetch(L, {channelId: e}).then(J)
            }

            fetchChannels({ids: e, onlyJoined: t, onlyOwned: n, tags: r, search: i, limit: s, offset: a}) {
                return O(this, T, "f").fetch(F, {ids: e, onlyJoined: t, onlyOwned: n, tags: r, search: i, limit: s, offset: a}).then(U)
            }

            createChannel({template: e, tags: t, capacity: n, name: r, description: i, password: s, ownerAcl: a, memberAcl: o, guestAcl: c, visible: h, private: l}) {
                return O(this, T, "f").fetch(N, {template: e, tags: t, capacity: n, name: r, description: i, password: s, ownerAcl: a, memberAcl: o, guestAcl: c, visible: h, private: l}).then(J)
            }

            updateChannel({channelId: e, tags: t, capacity: n, name: r, description: i, password: s, ownerAcl: a, memberAcl: o, guestAcl: c, ownerId: h, visible: l, private: u}) {
                return O(this, T, "f").fetch(D, {channelId: e, tags: t, capacity: n, name: r, description: i, password: s, ownerAcl: a, memberAcl: o, guestAcl: c, ownerId: h, visible: l, private: u}).then(J)
            }

            deleteChannel({channelId: e}) {
                return O(this, T, "f").fetch(q, {channelId: e})
            }
        }

        function J(e) {
            return e.isMuted = e.mute.isMuted, e
        }

        function U(e) {
            return e.items = e.items.map(J), e
        }

        T = new WeakMap;
        var W, z = function (e, t, n, r) {
            if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
        };
        const G = `... on ChannelJoinRequestsList {\n    items {\n        date\n        channelId\n        channel { ${x} }\n    }\n}`,
            K = `query($input: PlayerFetchChannelJoinRequestsInput!) {\n    result: PlayerFetchChannelJoinRequests(input: $input) { ${(0, l.Mn)("... on ChannelJoinRequestsList {\n    items {\n        channelId\n        player\n        date\n    }\n}")} }\n}`,
            Z = `query($input: PlayerFetchPlayerSentJoinRequestsInput!, $lang: Lang) {\n    result: PlayerFetchSentJoinRequests(input: $input) { ${(0, l.Mn)(G)} }\n}`,
            V = `mutation($input: PlayerAcceptJoinRequestToChannelInput!) {\n    result: PlayerAcceptJoinRequestToChannel(input: $input) { ${(0, l.Mn)("... on ChannelMember {\n    id\n    state\n    channelId\n    isOnline\n    mute {\n        isMuted\n        unmuteAt\n    }\n}")} }\n}`,
            Y = `mutation($input: PlayerRejectJoinRequestToChannelInput!) {\n    result: PlayerRejectJoinRequestToChannel(input: $input) { ${(0, l.Mn)(p)} }\n}`;

        class H {
            constructor(e) {
                W.set(this, void 0), function (e, t, n, r, i) {
                    if ("m" === r) throw new TypeError("Private method is not writable");
                    if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n)
                }(this, W, e, "f")
            }

            fetchJoinRequests({channelId: e, search: t, limit: n, offset: r}) {
                return z(this, W, "f").fetch(K, {channelId: e, search: t, limit: n, offset: r})
            }

            fetchSentJoinRequests({limit: e, offset: t}) {
                return z(this, W, "f").fetch(Z, {limit: e, offset: t})
            }

            acceptJoinRequest({channelId: e, playerId: t}) {
                return z(this, W, "f").fetch(V, {channelId: e, playerId: t})
            }

            rejectJoinRequest({channelId: e, playerId: t}) {
                return z(this, W, "f").fetch(Y, {channelId: e, playerId: t})
            }
        }

        W = new WeakMap;
        var X, Q = function (e, t, n, r) {
            if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
        };
        const ee = `mutation($input: PlayerMutePlayerInChannelInput!) {\n    result: PlayerMutePlayerInChannel(input: $input) { ${(0, l.Mn)(p)} }\n}`,
            te = `mutation($input: PlayerUnmutePlayerInChannelInput!) {\n    result: PlayerUnmutePlayerInChannel(input: $input) { ${(0, l.Mn)(p)} }\n}`,
            ne = `query($input: PlayerFetchChannelMembersInput!) {\n    result: PlayerFetchChannelMembers(input: $input) { ${(0, l.Mn)("... on ChannelMembersList {\n    players {\n        id\n        state\n        isOnline\n        mute {\n            isMuted\n            unmuteAt\n        }\n    }\n}")} }\n}`,
            re = `mutation($input: PlayerKickFromChannelInput!) {\n    result: PlayerKickFromChannel(input: $input) { ${(0, l.Mn)(p)} }\n}`,
            ie = `mutation($input: PlayerJoinChannelInput!) {\n    result: PlayerJoinChannel(input: $input) { ${(0, l.Mn)(p)} }\n}`,
            se = `mutation($input: PlayerLeaveChannelInput!) {\n    result: PlayerLeaveChannel(input: $input) { ${(0, l.Mn)(p)} }\n}`,
            ae = `mutation($input: PlayerCancelJoinChannelInput!) {\n    result: PlayerCancelJoinChannel(input: $input) { ${(0, l.Mn)(p)} }\n}`;

        class oe {
            constructor(e) {
                X.set(this, void 0), function (e, t, n, r, i) {
                    if ("m" === r) throw new TypeError("Private method is not writable");
                    if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n)
                }(this, X, e, "f")
            }

            mute({channelId: e, playerId: t, unmuteAt: n}) {
                return Q(this, X, "f").fetch(ee, {channelId: e, playerId: t, unmuteAt: n})
            }

            unmute({channelId: e, playerId: t}) {
                return Q(this, X, "f").fetch(te, {channelId: e, playerId: t})
            }

            fetchMembers({channelId: e, onlyOnline: t, search: n, limit: r, offset: i}) {
                return Q(this, X, "f").fetch(ne, {channelId: e, onlyOnline: t, search: n, limit: r, offset: i})
            }

            join({channelId: e, password: t}) {
                return Q(this, X, "f").fetch(ie, {channelId: e, password: t})
            }

            cancelJoin({channelId: e}) {
                return Q(this, X, "f").fetch(ae, {channelId: e})
            }

            leave({channelId: e}) {
                return Q(this, X, "f").fetch(se, {channelId: e})
            }

            kick({channelId: e, playerId: t}) {
                return Q(this, X, "f").fetch(re, {channelId: e, playerId: t})
            }
        }

        X = new WeakMap;
        var ce, he = function (e, t, n, r) {
            if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
        };
        const le = "\n    id\n    channelId\n    authorId\n    text\n    tags\n    player\n    createdAt\n", ue = `... on ChannelMessage { ${le} }`, de = `... on ChannelMessagesList {\n    items { ${le} }\n}`,
            fe = `query($input: PlayerFetchChannelMessagesInput!) {\n    result: PlayerFetchChannelMessages(input: $input) { ${(0, l.Mn)(de)} }\n}`,
            pe = `query($input: PlayerFetchPersonalMessagesInput!) {\n    result: PlayerFetchPersonalMessages(input: $input) { ${(0, l.Mn)(de)} }\n}`,
            ge = `query($input: PlayerFetchFeedMessagesInput!) {\n    result: PlayerFetchFeedMessages(input: $input) { ${(0, l.Mn)(de)} }\n}`,
            ve = `mutation($input: PlayerSendMessageInput!) {\n    result: PlayerSendMessage(input: $input) { ${(0, l.Mn)(ue)} }\n}`,
            me = `mutation($input: PlayerSendFeedMessageInput!) {\n    result: PlayerSendFeedMessage(input: $input) { ${(0, l.Mn)(ue)} }\n}`,
            ye = `mutation($input: PlayerSendPersonalMessageInput!) {\n    result: PlayerSendPersonalMessage(input: $input) { ${(0, l.Mn)(ue)} }\n}`,
            we = `mutation($input: PlayerEditMessageInput!) {\n    result: PlayerEditMessage(input: $input) { ${(0, l.Mn)(ue)} }\n}`,
            be = `mutation($input: PlayerDeleteMessageInput!) {\n    result: PlayerDeleteMessage(input: $input) { ${(0, l.Mn)(p)} }\n}`;

        class Pe {
            constructor(e) {
                ce.set(this, void 0), function (e, t, n, r, i) {
                    if ("m" === r) throw new TypeError("Private method is not writable");
                    if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n)
                }(this, ce, e, "f")
            }

            fetchMessages({channelId: e, tags: t, limit: n, offset: r}) {
                return he(this, ce, "f").fetch(fe, {channelId: e, tags: t, limit: n, offset: r})
            }

            fetchPersonalMessages({playerId: e, tags: t, limit: n, offset: r}) {
                return he(this, ce, "f").fetch(pe, {playerId: e, tags: t, limit: n, offset: r})
            }

            fetchFeedMessages({playerId: e, authorId: t, tags: n, limit: r, offset: i}) {
                return he(this, ce, "f").fetch(ge, {playerId: e, authorId: t, tags: n, limit: r, offset: i})
            }

            sendMessage({channelId: e, tags: t, text: n}) {
                return he(this, ce, "f").fetch(ve, {channelId: e, tags: t, text: n})
            }

            sendFeedMessage({playerId: e, text: t, tags: n}) {
                return he(this, ce, "f").fetch(me, {playerId: e, text: t, tags: n})
            }

            sendPersonalMessage({playerId: e, text: t, tags: n}) {
                return he(this, ce, "f").fetch(ye, {playerId: e, text: t, tags: n})
            }

            editMessage({messageId: e, text: t}) {
                return he(this, ce, "f").fetch(we, {messageId: e, text: t})
            }

            deleteMessage({messageId: e}) {
                return he(this, ce, "f").fetch(be, {messageId: e})
            }
        }

        ce = new WeakMap;
        var _e, Se = function (e, t, n, r) {
            if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
        };

        class Ie {
            constructor(e) {
                _e.set(this, void 0), function (e, t, n, r, i) {
                    if ("m" === r) throw new TypeError("Private method is not writable");
                    if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n)
                }(this, _e, e, "f"), this.channels = new B(Se(this, _e, "f")), this.messages = new Pe(Se(this, _e, "f")), this.members = new oe(Se(this, _e, "f")), this.invites = new M(Se(this, _e, "f")), this.joinRequests = new H(Se(this, _e, "f"))
            }

            ping(e) {
                Se(this, _e, "f").ping(e)
            }
        }

        _e = new WeakMap;

        class Ee {
            constructor(e, t) {
                this.config = e, this.adapter = t
            }

            get hasIntegratedAuth() {
                return this.adapter.hasIntegratedAuth
            }

            get isSecretCodeAuthAvailable() {
                return this.adapter.isSecretCodeAuthAvailable
            }

            get _hasAuthModal() {
                return this.adapter._hasAuthModal
            }

            get isExternalLinksAllowed() {
                return this.adapter.isExternalLinksAllowed
            }

            get type() {
                return this.adapter.type
            }

            get availableSocialNetworks() {
                return this.adapter.socialNetworks
            }

            getSDK() {
                return this.adapter.getSDK()
            }

            getNativeSDK() {
                return this.adapter.getNativeSDK()
            }

            requestPermissions(e) {
                return t = this, n = void 0, i = function* () {
                    return this.adapter.requestPermissions(e)
                }, new ((r = void 0) || (r = Promise))((function (e, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(t) {
                        var n;
                        t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r((function (e) {
                            e(n)
                        }))).then(a, o)
                    }

                    c((i = i.apply(t, n || [])).next())
                }));
                var t, n, r, i
            }
        }

        var ke = a(3379), Ce = a.n(ke), $e = a(8205);
        Ce()($e.Z, {insert: "head", singleton: !1}), $e.Z.locals;
        var Me, Te = a(6558), Oe = a(381), Re = function (e, t, n, r) {
            return new (n || (n = Promise))((function (i, s) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function o(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, o)
                }

                c((r = r.apply(e, t || [])).next())
            }))
        }, xe = function (e, t, n, r, i) {
            if ("m" === r) throw new TypeError("Private method is not writable");
            if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n), n
        }, je = function (e, t, n, r) {
            if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
        };

        class Ae {
            constructor(e = []) {
                this.storages = e, Me.set(this, ""), this.isEmptyOnBoot = !0, this.temp = {};
                const t = (0, c._)();
                this.ready = t.ready, Promise.all([this._get(e, "context"), this._get(e, "config")]).then((([e, n]) => {
                    xe(this, Me, e || "", "f"), this.isEmptyOnBoot = !n, t.done()
                }))
            }

            get localStorages() {
                return this.storages.filter((e => !0 === e.isLocal))
            }

            _get(e, t) {
                const n = (0, c._)();
                return Promise.all(this.storages.map((e => {
                    const n = (0, c._)(c.s);
                    return e.get(t).then(n.done).catch(n.abort), n.ready.catch((e => (Te.kg.warn(e), null)))
                }))).then((e => n.done(e.find(Boolean)))), n.ready
            }

            _set(e, t, n) {
                return Promise.all(e.map((e => e.set(t, n))))
            }

            set(e, t, n) {
                return this._set(e, `${t}${je(this, Me, "f")}`, n)
            }

            get(e, t) {
                return this._get(e, `${t}${je(this, Me, "f")}`)
            }

            isEmptyContext() {
                return !je(this, Me, "f")
            }

            setContext(e) {
                xe(this, Me, e, "f"), this._set(this.localStorages, "context", je(this, Me, "f"))
            }

            migrateToContext(e) {
                return Re(this, void 0, void 0, (function* () {
                    xe(this, Me, "", "f");
                    const [t, n, r] = yield Promise.all([this.loadPlayer(), this.loadSecretCode(), this.loadLanguage()]), i = n || (null == t ? void 0 : t.secretCode);
                    return xe(this, Me, e, "f"), yield Promise.all([this.savePlayer(t), this.saveSecretCode(i), this.saveLanguage(r)]), xe(this, Me, "", "f"), yield Promise.all([this.savePlayer(null), this.saveSecretCode(null), this.saveLanguage(null)]), [t, i]
                }))
            }

            clearContext(e) {
                return Re(this, void 0, void 0, (function* () {
                    const t = je(this, Me, "f");
                    xe(this, Me, e, "f"), yield Promise.all([this.savePlayer(null), this.saveSecretCode(null), this.saveLanguage(null)]), xe(this, Me, t, "f")
                }))
            }

            extractFromContext(e) {
                return Re(this, void 0, void 0, (function* () {
                    const t = je(this, Me, "f");
                    xe(this, Me, e, "f");
                    const [n, r, i] = yield Promise.all([this.loadPlayer(), this.loadSecretCode(), this.loadLanguage()]), s = r || (null == n ? void 0 : n.secretCode);
                    return xe(this, Me, t, "f"), [n, s, i]
                }))
            }

            copyFromContext(e, t) {
                return Re(this, void 0, void 0, (function* () {
                    const n = je(this, Me, "f"), [r, i, s] = yield this.extractFromContext(e);
                    xe(this, Me, t, "f"), yield Promise.all([this.savePlayer(r), this.saveSecretCode(i), this.saveLanguage(s)]), xe(this, Me, n, "f")
                }))
            }

            loadPlayer() {
                return this.get(this.storages, "players").then((([e] = [null]) => e))
            }

            savePlayer(e) {
                return this.set(this.storages, "players", [e]).catch(Te.kg.warn)
            }

            loadSecretCode() {
                return this.get(this.localStorages, "sk").catch(Te.kg.warn)
            }

            saveSecretCode(e) {
                return this.set(this.localStorages, "sk", e).catch(Te.kg.warn)
            }

            loadLanguage() {
                return this.get(this.localStorages, "lang").catch((e => (Te.kg.warn(e), null)))
            }

            saveLanguage(e) {
                return this.set(this.localStorages, "lang", e).catch(Te.kg.warn)
            }

            loadConfig() {
                return this._get(this.localStorages, "config").then((e => Object.assign(Object.assign({}, Oe.lR), e))).catch((e => (Te.kg.warn(e), Oe.lR)))
            }

            saveConfig(e) {
                return this._set(this.localStorages, "config", e).catch(Te.kg.warn)
            }

            loadAdsInfo() {
                const e = this._get(this.localStorages, "adsInfo").then((e => Object.assign(Object.assign({}, Oe.GH), e))).catch((e => (Te.kg.warn(e), Oe.GH)));
                return e.then((e => this.temp.adsInfo = e)), e
            }

            saveAdsInfo(e) {
                return this._set(this.localStorages, "adsInfo", e).catch(Te.kg.warn)
            }

            saveIsExistsShortcut(e) {
                this.set(this.localStorages, "isExistsShortcut", e)
            }

            loadIsExistsShortcut() {
                return this.get(this.localStorages, "isExistsShortcut")
            }
        }

        Me = new WeakMap;
        var Le = a(6388), Fe = function (e, t, n, r) {
            return new (n || (n = Promise))((function (i, s) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function o(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, o)
                }

                c((r = r.apply(e, t || [])).next())
            }))
        };

        class Ne extends Error {
            constructor() {
                super("throttled invocation was canceled"), this.name = "CanceledError"
            }
        }

        class De {
            constructor(e, t) {
                this.canceled = !1;
                const n = new Promise((e => {
                    this.timeout = setTimeout(e, t), this.resolve = e
                }));
                this.ready = e.then((() => n), (() => n))
            }

            flush() {
                clearTimeout(this.timeout), this.resolve()
            }

            cancel() {
                this.canceled = !0, clearTimeout(this.timeout), this.resolve()
            }

            then(e) {
                return this.ready.then((() => {
                    if (this.canceled) throw new Ne;
                    return e()
                }))
            }
        }

        function qe(e, t, n = {}) {
            const r = null != t && Number.isFinite(t) ? Math.max(t, 0) : 0, i = n.getNextArgs || ((e, t) => t);
            let s, a = Promise.resolve(), o = new De(a, 0), c = null;

            function h() {
                const t = s;
                c = null, s = null;
                const n = (() => Fe(this, void 0, void 0, (function* () {
                    return yield e.apply(this, t)
                })))();
                return o = new De(n, r), n
            }

            function l(...e) {
                return s = s ? i(s, e) : e, c || (c = o.then(h.bind(this))), c
            }

            return l.cancel = () => Fe(this, void 0, void 0, (function* () {
                const e = a;
                o.cancel(), c = null, s = null, a = Promise.resolve(), o = new De(a, 0), yield e
            })), l.flush = () => Fe(this, void 0, void 0, (function* () {
                o.flush(), yield a
            })), l
        }

        function Be(e) {
            return function (t, n, r) {
                const i = r.value;
                return r.value = qe(i, e), r
            }
        }

        qe.CanceledError = Ne;
        var Je = function (e, t, n, r) {
            var i, s = arguments.length, a = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var o = e.length - 1; o >= 0; o--) (i = e[o]) && (a = (s < 3 ? i(a) : s > 3 ? i(t, n, a) : i(t, n)) || a);
            return s > 3 && a && Object.defineProperty(t, n, a), a
        }, Ue = function (e, t, n, r) {
            return new (n || (n = Promise))((function (i, s) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function o(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, o)
                }

                c((r = r.apply(e, t || [])).next())
            }))
        };

        class We extends Le.Z {
            constructor(e) {
                super(), this.gp = e
            }

            open(e = {}) {
                return Ue(this, void 0, void 0, (function* () {
                    const [t] = yield Promise.all([this.fetch(e), this.gp.loadOverlay()]);
                    this._events.emit("open"), yield this.gp.overlay.openLeaderboard(e, t), this._events.emit("close")
                }))
            }

            openScoped(e) {
                return Ue(this, void 0, void 0, (function* () {
                    const [t] = yield Promise.all([this.fetchScoped(e), this.gp.loadOverlay()]), n = Object.assign({}, e), r = t.fields.map((e => e.key));
                    n.orderBy = e.includeFields ? r.filter((t => !e.includeFields.includes(t))) : r, this._events.emit("open"), yield this.gp.overlay.openLeaderboard(n, t), this._events.emit("close")
                }))
            }

            fetch(e = {}) {
                return Ue(this, void 0, void 0, (function* () {
                    const t = (0, c._)();
                    this.gp.loader.inc();
                    try {
                        const {result: n, playerResult: r} = yield this.gp._leaderboardsService.getRating(e);
                        n.players = ze(n.players, e.withMe, null == r ? void 0 : r.player), t.done(n), this._events.emit("fetch", n)
                    } catch (e) {
                        t.abort(e), this._events.emit("error:fetch")
                    } finally {
                        this.gp.loader.dec()
                    }
                    return t.ready
                }))
            }

            fetchScoped(e) {
                return Ue(this, void 0, void 0, (function* () {
                    const t = (0, c._)();
                    this.gp.loader.inc();
                    try {
                        const n = yield this.gp._leaderboardsService.getRatingVariant(e), {result: r, playerResult: i} = n;
                        (0, l.tv)(r), (0, l.tv)(i), r.players = ze(r.players, e.withMe, null == i ? void 0 : i.player), t.done(r), this._events.emit("fetch", r)
                    } catch (e) {
                        t.abort(e), this._events.emit("error:fetch")
                    } finally {
                        this.gp.loader.dec()
                    }
                    return t.ready
                }))
            }

            fetchPlayerRating(e = {}) {
                return Ue(this, void 0, void 0, (function* () {
                    const t = (0, c._)();
                    this.gp.loader.inc();
                    try {
                        const n = yield this.gp._leaderboardsService.getPlayerRating(e);
                        t.done(n), this._events.emit("fetchPlayer", n)
                    } catch (e) {
                        t.abort(e), this._events.emit("error:fetchPlayer", e)
                    } finally {
                        this.gp.loader.dec()
                    }
                    return t.ready
                }))
            }

            fetchPlayerRatingScoped(e) {
                return Ue(this, void 0, void 0, (function* () {
                    const t = (0, c._)();
                    this.gp.loader.inc();
                    try {
                        const n = yield this.gp._leaderboardsService.getPlayerRatingVariant(e);
                        t.done(n), this._events.emit("fetchPlayerScoped", n)
                    } catch (e) {
                        t.abort(e), this._events.emit("error:fetchPlayerScoped", e)
                    } finally {
                        this.gp.loader.dec()
                    }
                    return t.ready
                }))
            }

            publishRecord(e) {
                return Ue(this, void 0, void 0, (function* () {
                    const t = (0, c._)();
                    this.gp.loader.inc();
                    try {
                        const n = yield this.gp._leaderboardsService.publishRecord(e);
                        t.done(n), this._events.emit("publishRecord", n)
                    } catch (e) {
                        t.abort(e), this._events.emit("error:publishRecord", e)
                    } finally {
                        this.gp.loader.dec()
                    }
                    return t.ready
                }))
            }
        }

        function ze(e, t, n) {
            if (!n || !t || "none" === t) return e;
            if (e.some((e => e.id === n.id && e.position === n.position))) return e;
            const r = e.length, i = n.position - 1;
            if (e = e.filter((e => e.id !== n.id)), i < r) e.splice(i, 0, n), e.forEach(((e, t) => {
                t <= i || e.position++
            })), e.length > r && e.pop(); else switch (t) {
                case"first":
                    e.unshift(n);
                    break;
                case"last":
                    e.push(n)
            }
            return e
        }

        Je([Be(500)], We.prototype, "open", null), Je([Be(500)], We.prototype, "openScoped", null), Je([Be(500)], We.prototype, "fetch", null), Je([Be(500)], We.prototype, "fetchScoped", null), Je([Be(500)], We.prototype, "fetchPlayerRating", null), Je([Be(500)], We.prototype, "fetchPlayerRatingScoped", null), Je([Be(500)], We.prototype, "publishRecord", null);
        const Ge = {data: e => String(e || ""), stats: e => Number(e) || 0, flag: e => Boolean(e) || !1, service: null, accounts: null}, Ke = ["name", "avatar"];

        class Ze extends Le.Z {
            constructor(e = {}, t) {
                super(), this.credentials = "", this.fields = t, this.fromJSON(e)
            }

            get id() {
                return this.state.id
            }

            get score() {
                return this.get("score")
            }

            set score(e) {
                this.set("score", e)
            }

            get name() {
                return this.get("name")
            }

            set name(e) {
                this.set("name", e)
            }

            get avatar() {
                return this.get("avatar")
            }

            set avatar(e) {
                this.set("avatar", e)
            }

            get isStub() {
                return !this.fields.filter((e => !Ke.includes(e.key))).some((e => this.get(e.key) !== e.default))
            }

            fromJSON(e) {
                var t, n, r, i;
                this.state = {
                    id: e.id || 0,
                    active: null === (t = e.active) || void 0 === t || t,
                    removed: null !== (n = e.removed) && void 0 !== n && n,
                    banned: null !== (r = e.banned) && void 0 !== r && r,
                    test: null !== (i = e.test) && void 0 !== i && i,
                    name: e.name || "",
                    avatar: e.avatar || "",
                    score: e.score || 0
                }, e.credentials && (this.credentials = String(e.credentials)), this.fields.forEach((t => {
                    if (!(t.key in e)) return void (this.state[t.key] = t.default);
                    const n = Ge[t.type];
                    if (!n) return void (this.state[t.key] = e[t.key] || t.default);
                    const r = n(e[t.key]);
                    this.state[t.key] = t.variants.length && !t.variants.some((e => e.value === r)) ? t.default : r
                })), this._events.emit("change")
            }

            toJSON() {
                return Object.assign({}, this.state)
            }

            getField(e) {
                const t = this.fields.find((t => t.key === e));
                if (!t) {
                    const t = `Field "${e}" not exists on player model`;
                    throw Te.kg.error(t), new Error(t)
                }
                return t
            }

            getFieldName(e) {
                return this.getField(e).name || ""
            }

            getFieldVariantName(e, t) {
                var n;
                return (null === (n = this.getField(e).variants.find((e => e.value === t))) || void 0 === n ? void 0 : n.name) || ""
            }

            get(e) {
                return this.state[e]
            }

            set(e, t) {
                const n = this.getField(e), r = Ge[n.type];
                if (!r) {
                    const t = `Cannot mutate "${e}", it's readonly`;
                    throw Te.kg.error(t), new Error(t)
                }
                const i = r(t);
                if (n.variants.length && !n.variants.some((e => e.value === i))) {
                    const t = `Invalid variant ${i} of "${e}"`;
                    throw Te.kg.error(t), new Error(t)
                }
                this.state[e] = i, this._events.emit("change")
            }

            add(e, t) {
                return this.set(e, this.get(e) + t)
            }

            toggle(e) {
                return this.set(e, !this.get(e))
            }

            has(e) {
                return Boolean(this.get(e))
            }

            reset() {
                this.fields.forEach((e => this.set(e.key, e.default)))
            }

            remove() {
                this.state.id = 0, this.reset()
            }
        }

        var Ve, Ye, He, Xe, Qe, et = function (e, t, n, r) {
            var i, s = arguments.length, a = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var o = e.length - 1; o >= 0; o--) (i = e[o]) && (a = (s < 3 ? i(a) : s > 3 ? i(t, n, a) : i(t, n)) || a);
            return s > 3 && a && Object.defineProperty(t, n, a), a
        }, tt = function (e, t, n, r) {
            return new (n || (n = Promise))((function (i, s) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function o(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, o)
                }

                c((r = r.apply(e, t || [])).next())
            }))
        }, nt = function (e, t, n, r, i) {
            if ("m" === r) throw new TypeError("Private method is not writable");
            if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n), n
        }, rt = function (e, t, n, r) {
            if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
        };

        class it extends Ze {
            constructor(e = {}, t, n, r, i) {
                super(e, t), this.playerAdapter = n, this.gp = r, this.isLoggedIn = !1, this.isLoggedInByPlatform = !1, this.hasAnyCredentials = !1, this.secretCode = "", this.tempSecredCode = "", this._hasFirstSync = !1, this.isFirstRequest = !1, this.credentials = "", Ve.set(this, {}), Ye.set(this, ""), He.set(this, void 0), Xe.set(this, (function ({
                                                                                                                                                                                                                                                                                                                                                                     silent: e = !0,
                                                                                                                                                                                                                                                                                                                                                                     override: t = !1
                                                                                                                                                                                                                                                                                                                                                                 } = {}) {
                    return tt(this, void 0, void 0, (function* () {
                        this.gp.loader.inc();
                        const n = (0, c._)();
                        this.gp._storage.savePlayer(this.toJSON()).catch(Te.kg.warn);
                        try {
                            let r;
                            if (e ? this._isRequredDataUpdate && (r = this.playerAdapter.getPlayer()) : r = this.playerAdapter.loginPlayer(this), r) {
                                const t = yield r.catch((e => {
                                    if ("cancelled" === (null == e ? void 0 : e.message)) throw e;
                                    return {name: "", photoLarge: ""}
                                }));
                                t.name && !this.get("name") && (this.name = t.name), t.photoLarge && this._isRequredAvatarUpdate && (this.avatar = t.photoLarge), e || (yield this._initContext())
                            }
                            const i = yield this.gp._playerService.sync({override: t, playerState: this.toJSON()}, {withToken: this.isFirstRequest});
                            switch (i.__typename) {
                                case"PlayerSyncConflict": {
                                    this.gp.loader.dec();
                                    const t = i;
                                    yield this.gp.loadOverlay();
                                    const r = yield this.gp.overlay.pickPlayerOnConflict(t);
                                    this.gp.loader.inc(), this.has("name") && !r.name && (r.name = this.get("name")), this.has("avatar") && !r.avatar && (r.avatar = this.get("avatar"));
                                    const s = yield this.gp._playerService.sync({playerState: r, override: !0}, {withToken: this.isFirstRequest});
                                    if ("Player" !== s.__typename) return void n.abort();
                                    e || this.setSecretCode(""), this.gp.overlay.close(), this.gp.achievements._setAchievementsList(s.achievements), this.gp.payments._setPurchasedList(s.purchasesList), this.setToken(s.token), this.fromJSON(s.state), nt(this, Ye, s.state.secretCode, "f"), rt(this, He, "f").call(this, this._authInfo), this.gp._storage.savePlayer(s.state), n.done(), yield this.checkLoggedIn(s.state);
                                    break
                                }
                                case"Player": {
                                    const {state: t, achievements: r, purchasesList: s, token: a} = i;
                                    e || this.setSecretCode(""), this.gp.achievements._setAchievementsList(r), this.gp.payments._setPurchasedList(s), this.setToken(a), this.fromJSON(t), nt(this, Ye, t.secretCode, "f"), rt(this, He, "f").call(this, this._authInfo), this.gp._storage.savePlayer(t), n.done(), yield this.checkLoggedIn(t), this.playerAdapter.publishRecord(t);
                                    break
                                }
                            }
                        } catch (e) {
                            n.abort(e)
                        } finally {
                            this._hasFirstSync = !0, this.gp.loader.dec()
                        }
                        return n.ready.then((() => this._events.emit("sync", !0))).catch((() => this._events.emit("sync", !1))), n.ready
                    }))
                })), Qe.set(this, (function () {
                    return tt(this, void 0, void 0, (function* () {
                        this.gp.loader.inc();
                        try {
                            const e = yield this.gp._playerService.getPlayer({withToken: !0});
                            this.gp.achievements._setAchievementsList(e.achievements), this.gp.payments._setPurchasedList(e.purchasesList), this.setToken(e.token), this.fromJSON(e.state), nt(this, Ye, e.state.secretCode, "f"), rt(this, He, "f").call(this, this._authInfo), this.gp._storage.savePlayer(e.state), yield this.checkLoggedIn(e.state), this._events.emit("load", !0)
                        } catch (e) {
                            Te.kg.error(e), this._events.emit("load", !1)
                        } finally {
                            this.gp.loader.dec()
                        }
                    }))
                }));
                const s = (0, c._)();
                this.ready = s.ready, nt(this, He, i, "f"), this._initContext().finally((() => this._init(s)))
            }

            get avatar() {
                return this.get("avatar") || this.gp.generateAvatar(this.id, 64)
            }

            set avatar(e) {
                this.set("avatar", e)
            }

            get _isRequredDataUpdate() {
                return !this.get("name") || this._isRequredAvatarUpdate
            }

            get _isRequredAvatarUpdate() {
                const e = this.get("avatar");
                return !e || !this._hasFirstSync && this.playerAdapter.isPlatformAvatar(e)
            }

            get _authInfo() {
                return Object.assign(Object.assign({}, rt(this, Ve, "f")), {secretCode: this.secretCode || rt(this, Ye, "f")})
            }

            get(e) {
                return "secretCode" === e ? this.secretCode || rt(this, Ye, "f") : "credentials" === e ? this.credentials || this.playerAdapter.userId : super.get(e)
            }

            _initContext() {
                return tt(this, void 0, void 0, (function* () {
                    const {platformData: e, key: t} = yield this.playerAdapter.getPlayerContext().catch((e => (Te.kg.error(e), {platformData: null, key: ""})));
                    nt(this, Ve, e || {}, "f"), rt(this, He, "f").call(this, this._authInfo);
                    const n = `,${this.gp.platform.type},${this.gp.isDev ? "d" : "p"},${t}`;
                    if (null == e ? void 0 : e.savedState) {
                        Te.kg.info("found saved state...");
                        const e = `,${this.gp.platform.type},${this.gp.isDev ? "d" : "p"},null`, [t] = yield this.gp._storage.extractFromContext(e);
                        t && (this.fromJSON(t), yield rt(this, Xe, "f").call(this), yield this.gp._storage.copyFromContext(n, e))
                    }
                    if (this.gp.platform.type === r.z.SMARTMARKET) {
                        const e = `,SBER_MARKET,${this.gp.isDev ? "d" : "p"},`, [t] = yield this.gp._storage.extractFromContext(e);
                        t && (delete t.platformType, this.fromJSON(t), yield rt(this, Xe, "f").call(this), yield this.gp._storage.clearContext(e))
                    }
                    if (this.gp.platform.type === r.z.POKI) {
                        const e = `,NONE,${this.gp.isDev ? "d" : "p"},`, [t] = yield this.gp._storage.extractFromContext(n);
                        if (t && (this.fromJSON(t), this.isStub)) {
                            const [t] = yield this.gp._storage.extractFromContext(e);
                            t && (delete t.platformType, t.id = this.id, this.fromJSON(t), yield rt(this, Xe, "f").call(this))
                        }
                    }
                    if (this.gp.platform.type === r.z.VK_PLAY) {
                        const e = `,NONE,${this.gp.isDev ? "d" : "p"},`, [t] = yield this.gp._storage.extractFromContext(n);
                        if (t && (this.fromJSON(t), this.isStub)) {
                            const [t] = yield this.gp._storage.extractFromContext(e);
                            t && (delete t.platformType, t.id = this.id, this.fromJSON(t), yield rt(this, Xe, "f").call(this))
                        }
                    }
                    if (!this.gp._storage.isEmptyOnBoot && this.gp._storage.isEmptyContext()) {
                        Te.kg.info("Applying migration...");
                        const [e, t] = yield this.gp._storage.migrateToContext(n);
                        this.secretCode = t, this.fromJSON(e), nt(this, Ye, e.secretCode, "f"), rt(this, He, "f").call(this, this._authInfo), yield rt(this, Xe, "f").call(this)
                    }
                    this.gp._storage.setContext(n)
                }))
            }

            _init(e) {
                return tt(this, void 0, void 0, (function* () {
                    Promise.all([this.gp._storage.loadPlayer(), this.gp._storage.loadSecretCode(), this.gp.ready]).then((([t, n]) => {
                        this.fromJSON(t || {}), nt(this, Ye, (null == t ? void 0 : t.secretCode) || "", "f"), this.secretCode = n, rt(this, He, "f").call(this, this._authInfo), this.isFirstRequest = !0, (this.id ? rt(this, Qe, "f").call(this) : rt(this, Xe, "f").call(this)).finally((() => {
                            this.isFirstRequest = !1, e.done(), this._events.emit("ready"), this.isLoggedInByPlatform && this.gp.payments._sync()
                        }))
                    }))
                }))
            }

            fetchFields() {
                return tt(this, void 0, void 0, (function* () {
                    try {
                        this.fields = (yield this.gp._playerService.fetchFields()).items, this._events.emit("fetchFields", !0)
                    } catch (e) {
                        this._events.emit("fetchFields", !1)
                    }
                }))
            }

            sync(e = {}) {
                return tt(this, void 0, void 0, (function* () {
                    return rt(this, Xe, "f").call(this, e)
                }))
            }

            load() {
                return tt(this, void 0, void 0, (function* () {
                    return rt(this, Qe, "f").call(this)
                }))
            }

            login() {
                return tt(this, void 0, void 0, (function* () {
                    if (this.gp.platform._hasAuthModal) this.playerAdapter.loginPlayer(this); else try {
                        yield this.gp.loadOverlay();
                        const {type: e, secretCode: t} = yield this.gp.overlay.login();
                        switch (e) {
                            case"PLATFORM_AUTH":
                                yield rt(this, Xe, "f").call(this, {silent: !1}).then((() => this._events.emit("login", !0))).catch((e => {
                                    Te.kg.error(e), this._events.emit("login", !1)
                                }));
                                break;
                            case"SECRET_KEY_AUTH_LOGIN":
                                this.setSecretCode(t), yield rt(this, Qe, "f").call(this).then((() => this._events.emit("login", !0))).catch((e => {
                                    Te.kg.error(e), this._events.emit("login", !1)
                                }))
                        }
                        this.gp.overlay.close()
                    } catch (e) {
                        Te.kg.error(e), this._events.emit("login", !1)
                    }
                }))
            }

            checkLoggedIn(e) {
                return tt(this, void 0, void 0, (function* () {
                    this.isStub ? (this.tempSecredCode = e.secretCode, this.setSecretCode(e.secretCode)) : this.tempSecredCode && this.tempSecredCode === e.secretCode && (this.setSecretCode(""), this.tempSecredCode = ""), this.isLoggedInByPlatform = this.playerAdapter.hasCredetials, this.isLoggedIn = this.isLoggedInByPlatform, this.hasAnyCredentials = this.isLoggedIn || !!this.secretCode, this.secretCode && this.secretCode != e.secretCode && this.setSecretCode(e.secretCode), this.hasAnyCredentials || (this.setSecretCode(e.secretCode), this.hasAnyCredentials = !0)
                }))
            }

            setSecretCode(e) {
                this.secretCode = e, this.gp._storage.saveSecretCode(this.secretCode), rt(this, He, "f").call(this, this._authInfo)
            }

            setToken(e) {
                e && this.gp.channels._connect(e)
            }
        }

        Ve = new WeakMap, Ye = new WeakMap, He = new WeakMap, Xe = new WeakMap, Qe = new WeakMap, et([Be(300)], it.prototype, "fetchFields", null), et([Be(300)], it.prototype, "sync", null), et([Be(300)], it.prototype, "load", null);

        class st extends Le.Z {
            constructor() {
                super(), document.documentElement.addEventListener("fullscreenchange", (() => {
                    let e = this.isEnabled;
                    this._events.emit("change", e), this._events.emit(e ? "open" : "close")
                }))
            }

            get isEnabled() {
                return Boolean(document.fullscreenElement || document.webkitFullscreenElement)
            }

            open() {
                this.isEnabled || (document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen())
            }

            close() {
                this.isEnabled && (document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
            }

            toggle() {
                this.isEnabled ? this.close() : this.open()
            }
        }

        class at {
            constructor() {
                this.counters = []
            }

            addCounter(e) {
                return t = this, n = void 0, i = function* () {
                    this.counters.push(e)
                }, new ((r = void 0) || (r = Promise))((function (e, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(t) {
                        var n;
                        t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r((function (e) {
                            e(n)
                        }))).then(a, o)
                    }

                    c((i = i.apply(t, n || [])).next())
                }));
                var t, n, r, i
            }

            hit(e) {
                this.counters.forEach((t => t.hit(e)))
            }

            goal(e, t) {
                this.counters.forEach((n => n.goal(e, t)))
            }
        }

        var ot = a(4917), ct = function (e, t, n, r) {
            return new (n || (n = Promise))((function (i, s) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function o(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, o)
                }

                c((r = r.apply(e, t || [])).next())
            }))
        };

        class ht {
            constructor({counterId: e}) {
                this.counterId = e;
                const t = window;
                t.ym = t.ym || function () {
                    (t.ym.a = t.ym.a || []).push(arguments), t.ym.l = Date.now()
                }, t.ym(e, "init", {accurateTrackBounce: !0}), this.ym = window.ym, (0, ot.Z)({src: "https://mc.yandex.ru/metrika/tag.js"})
            }

            hit(e) {
                return ct(this, void 0, void 0, (function* () {
                    this.ym(this.counterId, "hit", e)
                }))
            }

            goal(e, t) {
                return ct(this, void 0, void 0, (function* () {
                    this.ym(this.counterId, "reachGoal", t ? `${e}_${t}` : e)
                }))
            }
        }

        var lt = function (e, t, n, r) {
            return new (n || (n = Promise))((function (i, s) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function o(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, o)
                }

                c((r = r.apply(e, t || [])).next())
            }))
        };

        class ut {
            constructor({counterId: e}) {
                this.counterId = e;
                const t = window;
                t.dataLayer = t.dataLayer || [], t.gtag = function () {
                    t.dataLayer.push(arguments)
                }, this.gtag("js", new Date), this.gtag("config", e, {send_page_view: !1}), (0, ot.Z)({src: `//www.googletagmanager.com/gtag/js?id=${e}`})
            }

            get gtag() {
                return window.gtag
            }

            hit(e) {
                return lt(this, void 0, void 0, (function* () {
                    this.gtag("event", "page_view", {page_location: e, send_to: this.counterId})
                }))
            }

            goal(e, t) {
                return lt(this, void 0, void 0, (function* () {
                    this.gtag("event", e, t ? {value: t} : void 0)
                }))
            }
        }

        var dt = function (e, t, n, r) {
            return new (n || (n = Promise))((function (i, s) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function o(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, o)
                }

                c((r = r.apply(e, t || [])).next())
            }))
        };

        class ft extends Le.Z {
            constructor(e, t) {
                super(), this.adapter = e, this.gp = t
            }

            get isSupportsShare() {
                return this.adapter.isSupportsShare
            }

            get isSupportsNativeShare() {
                return this.adapter.isSupportsNativeShare
            }

            get isSupportsNativePosts() {
                return this.adapter.isSupportsNativePosts
            }

            get isSupportsNativeInvite() {
                return this.adapter.isSupportsNativeInvite
            }

            get isSupportShareParams() {
                return this.adapter.isSupportShareParams
            }

            get isSupportsNativeCommunityJoin() {
                return this.adapter.isSupportsNativeCommunityJoin
            }

            get canJoinCommunity() {
                return this.adapter.canJoinCommunity && !!this.communityLink
            }

            get communityLink() {
                return this.gp.platform.config.communityLink
            }

            get shareParams() {
                return this.adapter.shareParams || {}
            }

            _getShareOptions(e) {
                return {text: e.text || this.gp.app.title, image: e.image || "", url: e.url || this.gp.app.url}
            }

            _shareByOverlay(e, t) {
                var n;
                return dt(this, void 0, void 0, (function* () {
                    if (this.gp.isMobile) try {
                        const e = this._getShareOptions(t), r = Object.assign({}, e);
                        if (e.image) {
                            const t = yield fetch(e.image).then((e => e.blob()));
                            r.files = [new File([t], "image.png", {type: t.type, lastModified: (new Date).getTime()})]
                        }
                        const i = window.navigator;
                        if (null === (n = i.canShare) || void 0 === n ? void 0 : n.call(i, r)) return i.share(r)
                    } catch (e) {
                        Te.kg.warn(e)
                    }
                    return yield this.gp.loadOverlay(), this.gp.overlay.share(e, this._getShareOptions(t))
                }))
            }

            share(e = {}) {
                return dt(this, void 0, void 0, (function* () {
                    if (!this.isSupportsShare) return this._events.emit("share", !1), !1;
                    const t = this.isSupportsNativeShare ? this.adapter.share(this._getShareOptions(e)) : this._shareByOverlay("share", e), n = yield t.catch((() => !1));
                    return this._events.emit("share", n), n
                }))
            }

            post(e = {}) {
                return dt(this, void 0, void 0, (function* () {
                    if (!this.isSupportsShare) return this._events.emit("post", !1), !1;
                    const t = this.isSupportsNativePosts ? this.adapter.post(this._getShareOptions(e)) : this._shareByOverlay("post", e), n = yield t.catch((() => !1));
                    return this._events.emit("post", n), n
                }))
            }

            invite(e = {}) {
                return dt(this, void 0, void 0, (function* () {
                    if (!this.isSupportsShare) return this._events.emit("invite", !1), !1;
                    const t = this.isSupportsNativeInvite ? this.adapter.invite(this._getShareOptions(e)) : this._shareByOverlay("invite", e), n = yield t.catch((() => !1));
                    return this._events.emit("invite", n), n
                }))
            }

            joinCommunity() {
                return dt(this, void 0, void 0, (function* () {
                    if (!this.canJoinCommunity) return this._events.emit("joinCommunity", !1), !1;
                    let e = !0;
                    return this.isSupportsNativeCommunityJoin && (e = yield this.adapter.joinCommunity(this.gp.platform.config.community)), window.open(this.communityLink, "_blank"), this._events.emit("joinCommunity", e), e
                }))
            }

            makeShareUrl(e = {}) {
                return !!this.isSupportShareParams && (0 === Object.keys(e).length ? this.gp.app.url : this.adapter.makeShareUrl(e))
            }

            getShareParam(e) {
                var t;
                return !!this.isSupportShareParams && (null !== (t = this.adapter.getShareParam(e)) && void 0 !== t ? t : "")
            }
        }

        class pt extends Le.Z {
            constructor(e, t, n) {
                super(), this.gp = e, this.adapter = t, this.config = n, this.title = this.config.project.name, this.description = this.config.project.description, this.image = this.config.project.icon
            }

            get url() {
                return this.config.platformConfig.gameLink || this.gp.platform.getSDK().appUrl
            }

            get canAddShortcut() {
                return this.adapter.canAddShortcut
            }

            addShortcut() {
                return e = this, t = void 0, r = function* () {
                    const e = yield this.adapter.addShortcut();
                    return this._events.emit("addShortcut", e), e
                }, new ((n = void 0) || (n = Promise))((function (i, s) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function o(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(a, o)
                    }

                    c((r = r.apply(e, t || [])).next())
                }));
                var e, t, n, r
            }
        }

        var gt, vt = a(584), mt = a(3080);

        function yt(e) {
            return new Promise((function (t, n) {
                e.oncomplete = e.onsuccess = function () {
                    return t(e.result)
                }, e.onabort = e.onerror = function () {
                    return n(e.error)
                }
            }))
        }

        function wt(e, t) {
            var n = indexedDB.open(e);
            n.onupgradeneeded = function () {
                return n.result.createObjectStore(t)
            };
            var r = yt(n);
            return function (e, n) {
                return r.then((function (r) {
                    return n(r.transaction(t, e).objectStore(t))
                }))
            }
        }

        function bt() {
            return gt || (gt = wt("keyval-store", "keyval")), gt
        }

        class Pt {
            constructor(e) {
                this.projectId = e, this.isLocal = !0;
                try {
                    this.store = wt(`gs-db-project-${this.projectId}`, "storage")
                } catch (e) {
                    Te.kg.error(e)
                }
            }

            set(e, t) {
                return this.store ? function (e, t) {
                    return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bt())("readwrite", (function (n) {
                        return n.put(t, e), yt(n.transaction)
                    }))
                }(e, t, this.store).catch((() => null)) : Promise.resolve()
            }

            get(e) {
                if (!this.store) return Promise.resolve(null);
                const t = (0, c._)({timeout: 2e3});
                return function (e) {
                    return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bt())("readonly", (function (t) {
                        return yt(t.get(e))
                    }))
                }(e, this.store).then(t.done).catch((() => t.done(null))), t.ready
            }
        }

        var _t, St = function (e, t, n, r) {
            return new (n || (n = Promise))((function (i, s) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function o(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, o)
                }

                c((r = r.apply(e, t || [])).next())
            }))
        }, It = function (e, t, n, r) {
            if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
        };

        class Et {
            constructor(e) {
                this.projectId = e, _t.set(this, void 0), this.isLocal = !0;
                try {
                    !function (e, t, n, r, i) {
                        if ("m" === r) throw new TypeError("Private method is not writable");
                        if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n)
                    }(this, _t, window.localStorage, "f")
                } catch (e) {
                }
            }

            getKey(e) {
                return `gs-db-project-${this.projectId}-${e}`
            }

            set(e, t) {
                return St(this, void 0, void 0, (function* () {
                    It(this, _t, "f").setItem(this.getKey(e), JSON.stringify(t))
                }))
            }

            get(e) {
                return St(this, void 0, void 0, (function* () {
                    try {
                        return JSON.parse(It(this, _t, "f").getItem(this.getKey(e)) || "null")
                    } catch (e) {
                    }
                }))
            }
        }

        _t = new WeakMap;
        var kt, Ct = a(9631), $t = a(4687);

        class Mt {
            constructor(e) {
                kt.set(this, void 0), function (e, t, n, r, i) {
                    if ("m" === r) throw new TypeError("Private method is not writable");
                    if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n)
                }(this, kt, e, "f")
            }

            fetch({id: e, tag: t, urlFrom: n}) {
                return function (e, t, n, r) {
                    if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
                }(this, kt, "f").fetch("\nfragment project on Project {\n    id\n    url(from: $url)\n    name(lang: $lang)\n    description(lang: $lang)\n    assets {\n        icon {\n            resources { src(w: 256, h: 256, crop: true) }\n        }\n    }\n}\nquery ($input: FetchPlayerGamesCollectionInput!, $lang: Lang, $url: String) {\n    result: FetchPlayerGamesCollection(input: $input) {\n        __typename\n        ... on GamesCollection {\n            id\n            tag\n            name(lang: $lang)\n            description(lang: $lang)\n            games { ...project }\n        }\n        ... on Problem { message }\n    }\n}", {
                    id: e,
                    tag: t
                }, {url: n})
            }
        }

        kt = new WeakMap;
        var Tt = a(1437), Ot = a(4835), Rt = function (e, t, n, r) {
            return new (n || (n = Promise))((function (i, s) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function o(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, o)
                }

                c((r = r.apply(e, t || [])).next())
            }))
        };
        const xt = e => {
            var t;
            return (null === (t = null == e ? void 0 : e.resources[0]) || void 0 === t ? void 0 : t.src) || ""
        }, jt = e => {
            var {assets: t} = e, n = function (e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                }
                return n
            }(e, ["assets"]);
            return Object.assign(Object.assign({}, n), {icon: xt(t.icon)})
        }, At = [r.z.YANDEX, r.z.VK, r.z.OK, r.z.GAMEPIX];

        class Lt extends Le.Z {
            constructor(e) {
                super(), this.gp = e
            }

            get isAvailable() {
                return this.gp.platform.isExternalLinksAllowed || At.includes(this.gp.platform.type)
            }

            open({id: e, tag: t} = {tag: "ALL"}) {
                return Rt(this, void 0, void 0, (function* () {
                    if (this.isAvailable) {
                        this.gp.loader.inc();
                        try {
                            const [n] = yield Promise.all([this.fetch({id: e, tag: t}), this.gp.loadOverlay(), (0, Tt.p)(Ot.Z.app.trophy).catch(Te.kg.error)]);
                            this.gp.loader.dec(), n.games.length > 0 && (this._events.emit("open"), yield this.gp.overlay.openGamesCollections(n).catch(Te.kg.error), this._events.emit("close"))
                        } catch (e) {
                            this.gp.loader.dec(), Te.kg.error(e)
                        }
                    } else Te.kg.warn(`Not available on ${this.gp.platform.type}`)
                }))
            }

            fetch({id: e, tag: t} = {tag: "ALL"}) {
                return Rt(this, void 0, void 0, (function* () {
                    if (!this.isAvailable) return void Te.kg.warn(`Not available on ${this.gp.platform.type}`);
                    const n = (0, c._)();
                    this.gp.loader.inc();
                    try {
                        const r = yield this.gp._gamesCollectionsService.fetch({id: e, tag: t, urlFrom: this.gp.app.url});
                        if (!r) throw new Error("can't fetch GamesCollections list");
                        const i = Object.assign(Object.assign({}, r), {games: r.games.filter((e => e.url)).map(jt)});
                        i.games || Te.kg.warn("empty games collection"), n.done(i), this._events.emit("fetch", i)
                    } catch (e) {
                        n.abort(e), this._events.emit("error:fetch")
                    } finally {
                        this.gp.loader.dec()
                    }
                    return n.ready
                }))
            }
        }

        var Ft, Nt, Dt, qt = function (e, t, n, r) {
            return new (n || (n = Promise))((function (i, s) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function o(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, o)
                }

                c((r = r.apply(e, t || [])).next())
            }))
        }, Bt = function (e, t, n, r) {
            if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
        };

        class Jt {
            constructor(e) {
                this.queryBuilder = e, Ft.set(this, {}), Nt.set(this, (function (e = {}, t) {
                    return qt(this, void 0, void 0, (function* () {
                        const n = (0, c._)();
                        e.limit = e.limit || 10;
                        try {
                            const r = yield t(e), i = r.length === e.limit;
                            Bt(this, Ft, "f")[this.queryBuilder(e)] = Object.assign(Object.assign({}, e), {canLoadMore: i}), n.done({items: r, canLoadMore: i})
                        } catch (e) {
                            n.abort(e)
                        }
                        return n.ready
                    }))
                })), Dt.set(this, (function (e = {}, t) {
                    return qt(this, void 0, void 0, (function* () {
                        const n = this.queryBuilder(e), r = Bt(this, Ft, "f")[n];
                        if (!r) return yield this.fetch(e, t);
                        if (!r.canLoadMore) return {items: [], canLoadMore: !1};
                        const i = (0, c._)(), s = (r.offset || 0) + (r.limit || 0);
                        r.limit = e.limit || r.limit;
                        const a = Object.assign({}, Bt(this, Ft, "f")[n]), o = Object.assign(Object.assign({}, r), {offset: s});
                        Bt(this, Ft, "f")[n] = o;
                        try {
                            const e = yield t(o), r = e.length === o.limit;
                            Bt(this, Ft, "f")[n].canLoadMore = r, i.done({items: e, canLoadMore: r})
                        } catch (e) {
                            Bt(this, Ft, "f")[n] = a, i.abort(e)
                        }
                        return i.ready
                    }))
                }))
            }

            fetch(e = {}, t) {
                return Bt(this, Nt, "f").call(this, e, t)
            }

            fetchMore(e = {}, t) {
                return qt(this, void 0, void 0, (function* () {
                    return Bt(this, Dt, "f").call(this, e, t)
                }))
            }
        }

        Ft = new WeakMap, Nt = new WeakMap, Dt = new WeakMap;
        var Ut, Wt, zt, Gt, Kt, Zt, Vt, Yt, Ht, Xt, Qt = function (e, t, n, r) {
            return new (n || (n = Promise))((function (i, s) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function o(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, o)
                }

                c((r = r.apply(e, t || [])).next())
            }))
        }, en = function (e, t, n, r) {
            if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
        }, tn = function (e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
            }
            return n
        };

        class nn extends Le.Z {
            constructor(e, t) {
                super(), this.gp = e, this._config = t, Ut.set(this, new Jt((e => ["channels", (e.tags || []).join(","), e.search || "", (e.ids || []).join(","), e.onlyJoined || !1, e.onlyOwned || !1].join(":")))), Wt.set(this, new Jt((e => `channelsMembers:${e.channelId}`))), zt.set(this, new Jt((e => `invites:${e.channelId}`))), Gt.set(this, new Jt((e => `channelsInvites:${e.channelId}`))), Kt.set(this, new Jt((e => "sentInvites"))), Zt.set(this, new Jt((e => `channelsJoinRequests:${e.channelId}`))), Vt.set(this, new Jt((e => "sentJoinRequests"))), Yt.set(this, new Jt((e => `channelsJoinRequests:${e.channelId}:${(e.tags || []).join(",")}`))), Ht.set(this, new Jt((e => `channelsJoinRequests:${e.playerId}:${(e.tags || []).join(",")}`))), Xt.set(this, new Jt((e => `channelsJoinRequests:${e.playerId}:${(e.tags || []).join(",")}`)))
            }

            get canBeOnline() {
                return this._config.acl.canConnectOnline
            }

            get isMainChatEnabled() {
                return this._config.project.enableMainChat && this.mainChatId > 0
            }

            get mainChatId() {
                return this._config.project.mainChatId
            }

            _handleResponse(e, t) {
                e.then((e => this._events.emit(t, e))), e.catch((e => {
                    Te.kg.error(e), this._events.emit(`error:${t}`, e)
                }))
            }

            sendInvite(e) {
                const t = this.gp._channelsService.invites.sendInvite(e);
                return this._handleResponse(t, "sendInvite"), t
            }

            cancelInvite(e) {
                const t = this.gp._channelsService.invites.cancelInvite(e);
                return this._handleResponse(t, "cancelInvite"), t
            }

            acceptInvite(e) {
                const t = this.gp._channelsService.invites.acceptInvite(e);
                return this._handleResponse(t, "acceptInvite"), t
            }

            rejectInvite(e) {
                const t = this.gp._channelsService.invites.rejectInvite(e);
                return this._handleResponse(t, "rejectInvite"), t
            }

            join(e) {
                const t = this.gp._channelsService.members.join(e);
                return this._handleResponse(t, "join"), t
            }

            leave(e) {
                const t = this.gp._channelsService.members.leave(e);
                return this._handleResponse(t, "leave"), t
            }

            cancelJoin(e) {
                const t = this.gp._channelsService.members.cancelJoin(e);
                return this._handleResponse(t, "cancelJoin"), t
            }

            acceptJoinRequest(e) {
                const t = this.gp._channelsService.joinRequests.acceptJoinRequest(e);
                return this._handleResponse(t, "acceptJoinRequest"), t
            }

            rejectJoinRequest(e) {
                const t = this.gp._channelsService.joinRequests.rejectJoinRequest(e);
                return this._handleResponse(t, "rejectJoinRequest"), t
            }

            fetchMessages(e) {
                return Qt(this, void 0, void 0, (function* () {
                    const t = en(this, Yt, "f").fetch(e, (e => this.gp._channelsService.messages.fetchMessages(e).then((e => e.items))));
                    return this._handleResponse(t, "fetchMessages"), t
                }))
            }

            fetchMoreMessages(e) {
                return Qt(this, void 0, void 0, (function* () {
                    const t = en(this, Yt, "f").fetchMore(e, (e => this.gp._channelsService.messages.fetchMessages(e).then((e => e.items))));
                    return this._handleResponse(t, "fetchMoreMessages"), t
                }))
            }

            fetchPersonalMessages(e) {
                return Qt(this, void 0, void 0, (function* () {
                    const t = en(this, Ht, "f").fetch(e, (e => this.gp._channelsService.messages.fetchPersonalMessages(e).then((e => e.items))));
                    return this._handleResponse(t, "fetchPersonalMessages"), t
                }))
            }

            fetchMorePersonalMessages(e) {
                return Qt(this, void 0, void 0, (function* () {
                    const t = en(this, Ht, "f").fetchMore(e, (e => this.gp._channelsService.messages.fetchPersonalMessages(e).then((e => e.items))));
                    return this._handleResponse(t, "fetchMorePersonalMessages"), t
                }))
            }

            fetchFeedMessages(e) {
                return Qt(this, void 0, void 0, (function* () {
                    const t = en(this, Xt, "f").fetch(e, (e => this.gp._channelsService.messages.fetchFeedMessages(e).then((e => e.items))));
                    return this._handleResponse(t, "fetchFeedMessages"), t
                }))
            }

            fetchMoreFeedMessages(e) {
                return Qt(this, void 0, void 0, (function* () {
                    const t = en(this, Xt, "f").fetchMore(e, (e => this.gp._channelsService.messages.fetchFeedMessages(e).then((e => e.items))));
                    return this._handleResponse(t, "fetchMoreFeedMessages"), t
                }))
            }

            sendMessage(e) {
                const t = this.gp._channelsService.messages.sendMessage(e);
                return this._handleResponse(t, "sendMessage"), t
            }

            sendFeedMessage(e) {
                const t = this.gp._channelsService.messages.sendFeedMessage(e);
                return this._handleResponse(t, "sendMessage"), t
            }

            sendPersonalMessage(e) {
                const t = this.gp._channelsService.messages.sendPersonalMessage(e);
                return this._handleResponse(t, "sendMessage"), t
            }

            editMessage(e) {
                const t = this.gp._channelsService.messages.editMessage(e);
                return this._handleResponse(t, "editMessage"), t
            }

            deleteMessage(e) {
                const t = this.gp._channelsService.messages.deleteMessage(e);
                return this._handleResponse(t, "deleteMessage"), t
            }

            mute(e) {
                var {seconds: t = 0} = e;
                const n = tn(e, ["seconds"]);
                if (t > 0) {
                    const e = new Date;
                    e.setSeconds(e.getSeconds() + t), n.unmuteAt = e.toISOString()
                }
                const r = this.gp._channelsService.members.mute(n);
                return this._handleResponse(r, "mute"), r
            }

            unmute(e) {
                const t = this.gp._channelsService.members.unmute(e);
                return this._handleResponse(t, "unmute"), t
            }

            fetchMembers(e) {
                return Qt(this, void 0, void 0, (function* () {
                    const t = en(this, Wt, "f").fetch(e, (e => this.gp._channelsService.members.fetchMembers(e).then((e => e.players))));
                    return this._handleResponse(t, "fetchMembers"), t
                }))
            }

            fetchMoreMembers(e) {
                return Qt(this, void 0, void 0, (function* () {
                    const t = en(this, Wt, "f").fetchMore(e, (e => this.gp._channelsService.members.fetchMembers(e).then((e => e.players))));
                    return this._handleResponse(t, "fetchMoreMembers"), t
                }))
            }

            fetchInvites(e) {
                return Qt(this, void 0, void 0, (function* () {
                    const t = en(this, zt, "f").fetch(e, (e => this.gp._channelsService.invites.fetchInvites(e).then((e => e.items))));
                    return this._handleResponse(t, "fetchInvites"), t
                }))
            }

            fetchMoreInvites(e) {
                return Qt(this, void 0, void 0, (function* () {
                    const t = en(this, zt, "f").fetchMore(e, (e => this.gp._channelsService.invites.fetchInvites(e).then((e => e.items))));
                    return this._handleResponse(t, "fetchMoreInvites"), t
                }))
            }

            fetchChannelInvites(e) {
                return Qt(this, void 0, void 0, (function* () {
                    const t = en(this, Gt, "f").fetch(e, (e => this.gp._channelsService.invites.fetchChannelInvites(e).then((e => e.items))));
                    return this._handleResponse(t, "fetchChannelInvites"), t
                }))
            }

            fetchMoreChannelInvites(e) {
                return Qt(this, void 0, void 0, (function* () {
                    const t = en(this, Gt, "f").fetchMore(e, (e => this.gp._channelsService.invites.fetchChannelInvites(e).then((e => e.items))));
                    return this._handleResponse(t, "fetchMoreChannelInvites"), t
                }))
            }

            fetchSentInvites(e) {
                return Qt(this, void 0, void 0, (function* () {
                    const t = en(this, Kt, "f").fetch(e, (e => this.gp._channelsService.invites.fetchSentInvites(e).then((e => e.items))));
                    return this._handleResponse(t, "fetchSentInvites"), t
                }))
            }

            fetchMoreSentInvites(e) {
                return Qt(this, void 0, void 0, (function* () {
                    const t = en(this, Kt, "f").fetchMore(e, (e => this.gp._channelsService.invites.fetchSentInvites(e).then((e => e.items))));
                    return this._handleResponse(t, "fetchMoreSentInvites"), t
                }))
            }

            fetchJoinRequests(e) {
                return Qt(this, void 0, void 0, (function* () {
                    const t = en(this, Zt, "f").fetch(e, (e => this.gp._channelsService.joinRequests.fetchJoinRequests(e).then((e => e.items))));
                    return this._handleResponse(t, "fetchJoinRequests"), t
                }))
            }

            fetchMoreJoinRequests(e) {
                return Qt(this, void 0, void 0, (function* () {
                    const t = en(this, Zt, "f").fetchMore(e, (e => this.gp._channelsService.joinRequests.fetchJoinRequests(e).then((e => e.items))));
                    return this._handleResponse(t, "fetchMoreJoinRequests"), t
                }))
            }

            fetchSentJoinRequests(e) {
                return Qt(this, void 0, void 0, (function* () {
                    const t = en(this, Vt, "f").fetch(e, (e => this.gp._channelsService.joinRequests.fetchSentJoinRequests(e).then((e => e.items))));
                    return this._handleResponse(t, "fetchSentJoinRequests"), t
                }))
            }

            fetchMoreSentJoinRequests(e) {
                return Qt(this, void 0, void 0, (function* () {
                    const t = en(this, Vt, "f").fetchMore(e, (e => this.gp._channelsService.joinRequests.fetchSentJoinRequests(e).then((e => e.items))));
                    return this._handleResponse(t, "fetchMoreSentJoinRequests"), t
                }))
            }

            kick(e) {
                const t = this.gp._channelsService.members.kick(e);
                return this._handleResponse(t, "kick"), t
            }

            openChat({id: e} = {id: 0}) {
                return Qt(this, void 0, void 0, (function* () {
                    let t = e;
                    if (!e && this._config.project.enableMainChat && (t = this._config.project.mainChatId), t) {
                        this.gp.loader.inc();
                        try {
                            const e = this.gp.loadOverlay(), n = yield this.fetchChannel({channelId: t});
                            if (!(n.ownerId === this.gp.player.id ? n.ownerAcl : n.memberAcl).canViewMessages) return void Te.kg.error("access_denied");
                            n.isJoined || (yield this.join({channelId: t}), n.membersCount += 1, n.membersOnlineCount += 1, n.isJoined = !0);
                            const [r] = yield Promise.all([this.fetchMessages({channelId: t, limit: 100}), e]);
                            this.gp.loader.dec(), this._events.emit("openChat"), yield this.gp.overlay.openChat(n, r).catch(Te.kg.error), this._events.emit("closeChat")
                        } catch (e) {
                            this._events.emit("error:openChat", e), this.gp.loader.dec(), Te.kg.error(e)
                        }
                    } else Te.kg.error("empty_channel_id")
                }))
            }

            fetchChannel(e) {
                return Qt(this, void 0, void 0, (function* () {
                    const t = this.gp._channelsService.channels.fetchChannel(e);
                    return this._handleResponse(t, "fetchChannel"), t
                }))
            }

            fetchChannels(e) {
                var {ids: t = []} = e, n = tn(e, ["ids"]);
                return Qt(this, void 0, void 0, (function* () {
                    const e = n;
                    (t = t.map((e => Number(String(e).trim()))).filter(Boolean)).length > 0 && (e.ids = t);
                    const r = en(this, Ut, "f").fetch(n, (e => this.gp._channelsService.channels.fetchChannels(e).then((e => e.items))));
                    return this._handleResponse(r, "fetchChannels"), r
                }))
            }

            fetchMoreChannels(e) {
                var {ids: t = []} = e, n = tn(e, ["ids"]);
                return Qt(this, void 0, void 0, (function* () {
                    const e = n;
                    (t = null == t ? void 0 : t.map((e => Number(String(e).trim()))).filter(Boolean)).length > 0 && (e.ids = t);
                    const r = en(this, Ut, "f").fetchMore(n, (e => this.gp._channelsService.channels.fetchChannels(e).then((e => e.items))));
                    return this._handleResponse(r, "fetchMoreChannels"), r
                }))
            }

            createChannel(e) {
                const t = this.gp._channelsService.channels.createChannel(e);
                return this._handleResponse(t, "createChannel"), t
            }

            updateChannel(e) {
                const t = this.gp._channelsService.channels.updateChannel(e);
                return this._handleResponse(t, "updateChannel"), t
            }

            deleteChannel(e) {
                const t = this.gp._channelsService.channels.deleteChannel(e);
                return this._handleResponse(t, "deleteChannel"), t
            }

            _connect(e) {
                return Qt(this, void 0, void 0, (function* () {
                    if (this._config.acl.canCollectStats || this.canBeOnline) {
                        const t = () => this.gp._channelsService.ping(e);
                        window.setInterval(t, 3e4), t()
                    }
                    if (!this.canBeOnline) return;
                    const t = new TextDecoder;
                    (yield function (e, t, n, r) {
                        return i = this, s = void 0, c = function* () {
                            const t = [{transport: "websocket", endpoint: "wss://ws.eponesh.com/connection/websocket?format=protobuf"}, {
                                transport: "http_stream",
                                endpoint: "https://ws.eponesh.com/connection/http_stream?format=protobuf"
                            }, {transport: "sse", endpoint: "https://ws.eponesh.com/connection/sse?format=protobuf"}], {default: n} = yield a.e(72).then(a.bind(a, 9965));
                            return new n(t, {token: e, protocol: "protobuf", debug: !0})
                        }, new ((o = void 0) || (o = Promise))((function (e, t) {
                            function n(e) {
                                try {
                                    a(c.next(e))
                                } catch (e) {
                                    t(e)
                                }
                            }

                            function r(e) {
                                try {
                                    a(c.throw(e))
                                } catch (e) {
                                    t(e)
                                }
                            }

                            function a(t) {
                                var i;
                                t.done ? e(t.value) : (i = t.value, i instanceof o ? i : new o((function (e) {
                                    e(i)
                                }))).then(n, r)
                            }

                            a((c = c.apply(i, s || [])).next())
                        }));
                        var i, s, o, c
                    }(e)).on("connected", (e => {
                        console.info(`connected over ${e.transport}`)
                    })).on("connecting", (function (e) {
                        console.info(`connecting: ${e.code}, ${e.reason}`)
                    })).on("disconnected", (function (e) {
                        console.info(`disconnected: ${e.code}, ${e.reason}`)
                    })).on("publication", (e => {
                        const n = JSON.parse(t.decode(e.data));
                        (null == n ? void 0 : n.type) && (this._events.emit("event", n), this._events.emit(n.type, n.data))
                    })).connect()
                }))
            }
        }

        Ut = new WeakMap, Wt = new WeakMap, zt = new WeakMap, Gt = new WeakMap, Kt = new WeakMap, Zt = new WeakMap, Vt = new WeakMap, Yt = new WeakMap, Ht = new WeakMap, Xt = new WeakMap;
        var rn, sn = function (e, t, n, r) {
            return new (n || (n = Promise))((function (i, s) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function o(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, o)
                }

                c((r = r.apply(e, t || [])).next())
            }))
        }, an = function (e, t, n, r) {
            if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
        };
        const on = `\n    ... on PlayersTop {\n        leaderboard {\n            id\n            tag\n            name(lang: $lang),\n            description(lang: $lang),\n            shareText(lang: $lang),\n            isAuthorizedOnly\n        }\n        players\n        fields { ${h.S} }\n    }\n`,
            cn = `\n    ... on PlayerTop {\n        player\n        fields { ${h.S} }\n    }\n`, hn = `\n    ... on PlayerRecord {\n        record\n        fields { ${h.S} }\n    }\n`,
            ln = `query ($input: FetchTopInput!, $lang: Lang, $withMe: Boolean!) {\n    result: FetchTop(input: $input) {${(0, l.Mn)(on)}}\n    playerResult: FetchPlayerRating(input: $input) @include(if: $withMe) {${(0, l.Mn)(cn)}}\n}`,
            un = `query ($input: FetchTopInput!, $lang: Lang) {\n    result: FetchPlayerRating(input: $input) {${(0, l.Mn)(cn)}}\n}`,
            dn = `query ($input: FetchPlayerTopScopedInput!, $lang: Lang, $withMe: Boolean!) {\n    result: FetchPlayerTopScoped(input: $input) {${(0, l.Mn)(on)}}\n    playerResult: FetchPlayerRatingScoped(input: $input) @include(if: $withMe) {${(0, l.Mn)(cn)}}\n}`,
            fn = `query ($input: FetchPlayerTopScopedInput!, $lang: Lang) {\n    result: FetchPlayerRatingScoped(input: $input) {${(0, l.Mn)(cn)}}\n}`,
            pn = `mutation ($input: PlayerPublishRecordInput!, $lang: Lang) {\n    result: PlayerPublishRecord(input: $input) {${(0, l.Mn)(hn)}}\n}`;

        class gn {
            constructor(e) {
                rn.set(this, void 0), function (e, t, n, r, i) {
                    if ("m" === r) throw new TypeError("Private method is not writable");
                    if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n)
                }(this, rn, e, "f")
            }

            getRating({orderBy: e = ["score"], includeFields: t = [], order: n = "DESC", limit: r = 10, withMe: i = "none"}) {
                return sn(this, void 0, void 0, (function* () {
                    return an(this, rn, "f").fetchMany(ln, {orderBy: e, order: n, limit: r, includeFields: t}, {withMe: "none" !== i})
                }))
            }

            getPlayerRating({orderBy: e = ["score"], includeFields: t = [], order: n = "DESC", limit: r = 10}) {
                return sn(this, void 0, void 0, (function* () {
                    return an(this, rn, "f").fetch(un, {orderBy: e, order: n, limit: r, includeFields: t})
                }))
            }

            getRatingVariant({id: e, tag: t, variant: n, includeFields: r = [], limit: i = 10, withMe: s = "none", order: a}) {
                return sn(this, void 0, void 0, (function* () {
                    return an(this, rn, "f").fetchMany(dn, {id: e, tag: t, variant: n, limit: i, includeFields: r, order: a}, {withMe: "none" !== s})
                }))
            }

            getPlayerRatingVariant({id: e, tag: t, variant: n, includeFields: r = [], limit: i = 10, order: s}) {
                return sn(this, void 0, void 0, (function* () {
                    return an(this, rn, "f").fetch(fn, {id: e, tag: t, variant: n, limit: i, includeFields: r, order: s})
                }))
            }

            publishRecord({id: e, tag: t, variant: n, record: r, override: i}) {
                return sn(this, void 0, void 0, (function* () {
                    return an(this, rn, "f").fetch(pn, {id: e, tag: t, variant: n, record: r, override: i})
                }))
            }
        }

        rn = new WeakMap;
        var vn;

        class mn {
            constructor(e) {
                vn.set(this, void 0), function (e, t, n, r, i) {
                    if ("m" === r) throw new TypeError("Private method is not writable");
                    if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n)
                }(this, vn, e, "f")
            }

            fetch({type: e, format: t}) {
                return function (e, t, n, r) {
                    if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
                }(this, vn, "f").fetch("query($input: FetchPlayerDocumentInput!, $lang: Lang, $format: DocumentFormat) {\n    result: FetchPlayerDocument(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on Document {\n            type\n            content(lang: $lang, format: $format)\n        }\n    }\n}", {type: e}, {format: t})
            }
        }

        vn = new WeakMap;
        var yn = function (e, t, n, r) {
            return new (n || (n = Promise))((function (i, s) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function o(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, o)
                }

                c((r = r.apply(e, t || [])).next())
            }))
        };

        class wn extends Le.Z {
            constructor(e) {
                super(), this.gp = e
            }

            open({type: e}) {
                return yn(this, void 0, void 0, (function* () {
                    this.gp.loader.inc();
                    try {
                        const [t] = yield Promise.all([this.fetch({type: e}), this.gp.loadOverlay(), (0, Tt.p)(Ot.Z.app.trophy).catch(Te.kg.error)]);
                        this.gp.loader.dec(), t ? (t.format = "HTML", this._events.emit("open"), yield this.gp.overlay.openDocument(t).catch(Te.kg.error), this._events.emit("close")) : Te.kg.error(new Error("document not found"))
                    } catch (e) {
                        this.gp.loader.dec(), Te.kg.error(e)
                    }
                }))
            }

            fetch({type: e, format: t = "HTML"}) {
                return yn(this, void 0, void 0, (function* () {
                    const n = (0, c._)();
                    this.gp.loader.inc();
                    try {
                        const r = yield this.gp._documentsService.fetch({type: e, format: t});
                        if (!r) throw new Error("can't fetch privacy policy");
                        r.format = t, n.done(r), this._events.emit("fetch", r)
                    } catch (e) {
                        n.abort(e), this._events.emit("error:fetch", e)
                    } finally {
                        this.gp.loader.dec()
                    }
                    return n.ready
                }))
            }
        }

        var bn, Pn = function (e, t, n, r) {
            if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
        };
        const _n = {data: e => String(e || ""), stats: e => Number(e) || 0, flag: e => Boolean(e) || !1, image: e => String(e || ""), doc_html: e => String(e || ""), file: e => String(e || "")};

        class Sn extends Le.Z {
            constructor(e, t) {
                super(), this.gp = e, this.state = {}, this.list = [], bn.set(this, (function (e) {
                    this.state = {}, this.list = e, e.forEach((e => {
                        var t;
                        const n = (null === (t = _n[e.type]) || void 0 === t ? void 0 : t.call(_n, e.value)) || e.value;
                        this.state[e.key] = n
                    })), this._events.emit("change")
                })), Pn(this, bn, "f").call(this, t)
            }

            get(e) {
                return this.state[e]
            }

            has(e) {
                return Boolean(this.get(e))
            }

            type(e) {
                var t;
                return (null === (t = this.list.find((t => t.key === e))) || void 0 === t ? void 0 : t.type) || "data"
            }

            fetch() {
                return e = this, t = void 0, r = function* () {
                    try {
                        const e = (yield this.gp._projectService.fetchVariables()).items;
                        return Pn(this, bn, "f").call(this, e), this._events.emit("fetch", e), e
                    } catch (e) {
                        Te.kg.error(e), this._events.emit("error:fetch", e)
                    }
                }, new ((n = void 0) || (n = Promise))((function (i, s) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function o(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(a, o)
                    }

                    c((r = r.apply(e, t || [])).next())
                }));
                var e, t, n, r
            }
        }

        bn = new WeakMap, function (e, t, n, r) {
            var i, s = arguments.length, a = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var o = e.length - 1; o >= 0; o--) (i = e[o]) && (a = (s < 3 ? i(a) : s > 3 ? i(t, n, a) : i(t, n)) || a);
            s > 3 && a && Object.defineProperty(t, n, a)
        }([Be(300)], Sn.prototype, "fetch", null);
        var In, En = function (e, t, n, r) {
            if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
        };
        const kn = "\n    id: _id\n    playerId\n    src\n    tags\n    width\n    height\n", Cn = `\n    ... on ImagesList {\n        items { ${kn} }\n    }\n`, $n = `\n    ... on Image { ${kn} }\n`,
            Mn = `query($input: FetchPlayerImagesInput!) {\n    result: FetchPlayerImages(input: $input) { ${(0, l.Mn)(Cn)} }\n}`,
            Tn = `mutation($input: UploadPlayerImageInput!) {\n    result: UploadPlayerImage(input: $input) { ${(0, l.Mn)($n)} }\n}`;

        class On {
            constructor(e) {
                In.set(this, void 0), function (e, t, n, r, i) {
                    if ("m" === r) throw new TypeError("Private method is not writable");
                    if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n)
                }(this, In, e, "f")
            }

            fetch({playerId: e, limit: t, offset: n, tags: r}) {
                return En(this, In, "f").fetch(Mn, {playerId: e, limit: t, offset: n, tags: r})
            }

            upload({file: e, tags: t, accessPayload: n}) {
                return En(this, In, "f").fetch(Tn, {file: e, tags: t, accessPayload: n})
            }
        }

        In = new WeakMap;
        const Rn = 2048, xn = /cdn.(eponesh|gamepush).com\/static(\/([\d\-]+.)([\d\-]+.)|)\/(.*)/, jn = /-(\d+)x(\d+)\.\w+$/;
        var An, Ln, Fn, Nn, Dn = function (e, t, n, r) {
            var i, s = arguments.length, a = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var o = e.length - 1; o >= 0; o--) (i = e[o]) && (a = (s < 3 ? i(a) : s > 3 ? i(t, n, a) : i(t, n)) || a);
            return s > 3 && a && Object.defineProperty(t, n, a), a
        }, qn = function (e, t, n, r) {
            return new (n || (n = Promise))((function (i, s) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function o(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, o)
                }

                c((r = r.apply(e, t || [])).next())
            }))
        }, Bn = function (e, t, n, r) {
            if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
        }, Jn = function (e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
            }
            return n
        };
        const Un = "empty_url", Wn = "empty_content", zn = "empty_filename";

        class Gn extends Jt {
            constructor() {
                super(Kn), An.set(this, void 0), Ln.set(this, {}), Fn.set(this, (function (e, t) {
                    var {url: n, filename: r} = e, i = Jn(e, ["url", "filename"]);
                    return qn(this, void 0, void 0, (function* () {
                        if (!n) throw Te.kg.error(Un), new Error(Un);
                        if (!r) throw Te.kg.error(zn), new Error(zn);
                        if (Bn(this, Ln, "f")[n]) {
                            const e = new File([Bn(this, Ln, "f")[n]], r, Bn(this, Ln, "f")[n]);
                            return t(Object.assign(Object.assign({}, i), {file: e}))
                        }
                        try {
                            const e = yield fetch(n).then((e => e.blob()));
                            return t(Object.assign(Object.assign({}, i), {file: new File([e], r, {type: e.type})}))
                        } catch (e) {
                            throw Te.kg.error(e), e
                        }
                    }))
                })), Nn.set(this, (function (e, t) {
                    return qn(this, void 0, void 0, (function* () {
                        const {content: n, filename: r} = e, i = Jn(e, ["content", "filename"]);
                        if (!n.trim()) throw Te.kg.error(Wn), new Error(Wn);
                        if (!r) throw Te.kg.error(zn), new Error(zn);
                        return t(Object.assign(Object.assign({}, i), {file: new File([n], r)}))
                    }))
                }));
                const {openFile: e} = function () {
                    let e = null;
                    const t = document.createElement("input");
                    t.type = "file", t.id = "gp-file-input", t.style.cssText = "position: fixed; top: -999px; left: -999px; z-index: 0;", t.onchange = e => r(e.target), t.tabIndex = -1, document.body.appendChild(t);
                    const n = () => {
                        setTimeout((() => e.done(null)), 1e3), document.body.removeEventListener("focus", n, !0)
                    }, r = t => {
                        const [r] = t.files ? Array.from(t.files) : [];
                        document.body.removeEventListener("focus", n, !0), e.done(r)
                    };
                    return {
                        input: t, openFile: (r = "*") => {
                            return i = this, s = void 0, o = function* () {
                                null == e || e.abort(), e = (0, c._)(), t.accept = r, t.click(), document.body.addEventListener("focus", n, !0);
                                const i = yield e.ready;
                                if (i) return i;
                                throw new Error("cancelled")
                            }, new ((a = void 0) || (a = Promise))((function (e, t) {
                                function n(e) {
                                    try {
                                        c(o.next(e))
                                    } catch (e) {
                                        t(e)
                                    }
                                }

                                function r(e) {
                                    try {
                                        c(o.throw(e))
                                    } catch (e) {
                                        t(e)
                                    }
                                }

                                function c(t) {
                                    var i;
                                    t.done ? e(t.value) : (i = t.value, i instanceof a ? i : new a((function (e) {
                                        e(i)
                                    }))).then(n, r)
                                }

                                c((o = o.apply(i, s || [])).next())
                            }));
                            var i, s, a, o
                        }
                    }
                }();
                !function (e, t, n, r, i) {
                    if ("m" === r) throw new TypeError("Private method is not writable");
                    if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n)
                }(this, An, e, "f")
            }

            chooseFile(e) {
                return qn(this, void 0, void 0, (function* () {
                    const t = (0, c._)();
                    try {
                        const n = yield Bn(this, An, "f").call(this, e), r = URL.createObjectURL(n);
                        Bn(this, Ln, "f")[r] = n, t.done({file: n, tempUrl: r})
                    } catch (e) {
                        t.abort(e)
                    }
                    return t.ready
                }))
            }

            upload(e, t) {
                return qn(this, void 0, void 0, (function* () {
                    const n = (0, c._)();
                    try {
                        e.file || (e.file = yield Bn(this, An, "f").call(this, e.accept));
                        const r = yield t(e);
                        n.done(r)
                    } catch (e) {
                        n.abort(e)
                    }
                    return n.ready
                }))
            }

            uploadUrl(e, t) {
                return qn(this, void 0, void 0, (function* () {
                    return Bn(this, Fn, "f").call(this, e, t)
                }))
            }

            uploadContent(e, t) {
                return qn(this, void 0, void 0, (function* () {
                    return Bn(this, Nn, "f").call(this, e, t)
                }))
            }
        }

        function Kn(e) {
            return `p${e.playerId || 0}:${(e.tags || []).join(",")}`
        }

        An = new WeakMap, Ln = new WeakMap, Fn = new WeakMap, Nn = new WeakMap, Dn([Be(300)], Gn.prototype, "uploadUrl", null), Dn([Be(300)], Gn.prototype, "uploadContent", null);
        var Zn, Vn = function (e, t, n, r) {
            return new (n || (n = Promise))((function (i, s) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function o(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, o)
                }

                c((r = r.apply(e, t || [])).next())
            }))
        }, Yn = function (e, t, n, r) {
            if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
        };
        const Hn = "image/png,.jpeg,.jpg";

        class Xn extends Le.Z {
            constructor(e, t) {
                super(), this.gp = e, this.acl = t, Zn.set(this, new Gn)
            }

            get canUpload() {
                return this.acl.canUploadImages
            }

            resize(e, t, n, r) {
                return function (e, t, n, r) {
                    const i = xn.exec(e);
                    if (!i) return e;
                    const [s, a] = function (e) {
                        const t = jn.exec(e);
                        return t ? [Number(t[1]) || 0, Number(t[2]) || 0] : [0, 0]
                    }(e);
                    s && t > s && (t = s), a && n > a && (n = a), t > Rn && (t = Rn), n > Rn && (n = Rn);
                    const [, o, , , , c] = i;
                    return `https://cdn.${o}.com/static/${t || "-"}x${n || "-"}${r ? "crop" : ""}/${c}`
                }(e, t, n, r)
            }

            chooseFile() {
                return Vn(this, void 0, void 0, (function* () {
                    const e = Yn(this, Zn, "f").chooseFile(Hn);
                    return e.then((e => this._events.emit("choose", e))), e.catch((e => this._events.emit("error:choose", e))), e
                }))
            }

            upload(e = {}) {
                const t = Yn(this, Zn, "f").upload(Object.assign(Object.assign({}, e), {accept: Hn}), (e => Vn(this, void 0, void 0, (function* () {
                    const t = yield this.gp.platform.requestPermissions({allowUploadImages: !0});
                    if (!t.success) throw new Error("permission_not_allowed_by_user");
                    return this.gp._imagesService.upload(Object.assign(Object.assign({}, e), {accessPayload: t.payload}))
                }))));
                return this.gp.loader.inc(), t.then((e => this._events.emit("upload", e))), t.catch((e => this._events.emit("error:upload", e))), t.finally((() => this.gp.loader.dec())), t
            }

            uploadUrl(e = {url: ""}) {
                return Vn(this, void 0, void 0, (function* () {
                    return Yn(this, Zn, "f").uploadUrl(Object.assign(Object.assign({}, e), {filename: "image"}), (e => this.upload(e)))
                }))
            }

            fetch(e = {}) {
                return Vn(this, void 0, void 0, (function* () {
                    const t = Yn(this, Zn, "f").fetch(e, (e => this.gp._imagesService.fetch(e).then((e => e.items))));
                    return this.gp.loader.inc(), t.then((e => this._events.emit("fetch", e))), t.catch((e => this._events.emit("error:fetch", e))), t.finally((() => this.gp.loader.dec())), t
                }))
            }

            fetchMore(e = {}) {
                return Vn(this, void 0, void 0, (function* () {
                    const t = Yn(this, Zn, "f").fetchMore(e, (e => this.gp._imagesService.fetch(e).then((e => e.items))));
                    return this.gp.loader.inc(), t.then((e => this._events.emit("fetchMore", e))), t.catch((e => this._events.emit("error:fetchMore", e))), t.finally((() => this.gp.loader.dec())), t
                }))
            }
        }

        Zn = new WeakMap;
        var Qn, er = function (e, t, n, r) {
            if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
        };
        const tr = "\n    id: _id\n    playerId\n    src\n    size\n    name\n    tags\n", nr = `\n    ... on FilesList {\n        items { ${tr} }\n    }\n`, rr = `\n    ... on File { ${tr} }\n`,
            ir = `query($input: FetchPlayerFilesInput!) {\n    result: FetchPlayerFiles(input: $input) { ${(0, l.Mn)(nr)} }\n}`,
            sr = `mutation($input: UploadPlayerFileInput!) {\n    result: UploadPlayerFile(input: $input) { ${(0, l.Mn)(rr)} }\n}`;

        class ar {
            constructor(e) {
                Qn.set(this, void 0), function (e, t, n, r, i) {
                    if ("m" === r) throw new TypeError("Private method is not writable");
                    if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n)
                }(this, Qn, e, "f")
            }

            fetch({playerId: e, limit: t, offset: n, tags: r}) {
                return er(this, Qn, "f").fetch(ir, {playerId: e, limit: t, offset: n, tags: r})
            }

            upload({file: e, tags: t}) {
                return er(this, Qn, "f").fetch(sr, {file: e, tags: t})
            }
        }

        Qn = new WeakMap;
        var or, cr = function (e, t, n, r) {
            return new (n || (n = Promise))((function (i, s) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function o(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, o)
                }

                c((r = r.apply(e, t || [])).next())
            }))
        }, hr = function (e, t, n, r) {
            if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
        };

        class lr extends Le.Z {
            constructor(e, t) {
                super(), this.gp = e, this.acl = t, or.set(this, new Gn)
            }

            get canUpload() {
                return this.acl.canUploadFiles
            }

            chooseFile(e) {
                return cr(this, void 0, void 0, (function* () {
                    const t = hr(this, or, "f").chooseFile(e);
                    return t.then((e => this._events.emit("choose", e))), t.catch((e => this._events.emit("error:choose", e))), t
                }))
            }

            upload(e) {
                return cr(this, void 0, void 0, (function* () {
                    const t = hr(this, or, "f").upload(e, (e => this.gp._filesService.upload(e)));
                    return this.gp.loader.inc(), t.then((e => this._events.emit("upload", e))), t.catch((e => this._events.emit("error:upload", e))), t.finally((() => this.gp.loader.dec())), t
                }))
            }

            uploadContent(e) {
                return cr(this, void 0, void 0, (function* () {
                    return hr(this, or, "f").uploadContent(e, (e => this.upload(e)))
                }))
            }

            uploadUrl(e) {
                return cr(this, void 0, void 0, (function* () {
                    return hr(this, or, "f").uploadUrl(e, (e => this.upload(e)))
                }))
            }

            loadContent(e) {
                return cr(this, void 0, void 0, (function* () {
                    const t = fetch(new URL(e).toString()).then((t => {
                        if (t.ok) return t.text();
                        throw new Error(`Failed to load ${e}, errorCode: ${t.status}`)
                    }));
                    return this.gp.loader.inc(), t.then((e => this._events.emit("loadContent", e))), t.catch((e => this._events.emit("error:loadContent", e))), t.finally((() => this.gp.loader.dec())), t
                }))
            }

            fetch(e = {}) {
                return cr(this, void 0, void 0, (function* () {
                    const t = hr(this, or, "f").fetch(e, (e => this.gp._filesService.fetch(e).then((e => e.items))));
                    return this.gp.loader.inc(), t.then((e => this._events.emit("fetch", e))), t.catch((e => this._events.emit("error:fetch", e))), t.finally((() => this.gp.loader.dec())), t
                }))
            }

            fetchMore(e = {}) {
                return cr(this, void 0, void 0, (function* () {
                    const t = hr(this, or, "f").fetchMore(e, (e => this.gp._filesService.fetch(e).then((e => e.items))));
                    return this.gp.loader.inc(), t.then((e => this._events.emit("fetchMore", e))), t.catch((e => this._events.emit("error:fetchMore", e))), t.finally((() => this.gp.loader.dec())), t
                }))
            }
        }

        or = new WeakMap;
        var ur = a(1049);

        class dr extends Le.Z {
            constructor(e) {
                super(), this.gp = e
            }

            fetch({ids: e}) {
                return t = this, n = void 0, i = function* () {
                    if (0 === e.map(Number).filter(Boolean).length) throw Te.kg.error("empty_ids"), new Error("empty_ids");
                    const t = (0, c._)();
                    return this.gp.loader.inc(), t.ready.then((e => this._events.emit("fetch", e))).catch((e => this._events.emit("fetch:error", e))), this.gp._playerService.fetchPlayers({ids: e}).then(t.done).catch(t.abort).finally((() => this.gp.loader.dec())), t.ready
                }, new ((r = void 0) || (r = Promise))((function (e, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(t) {
                        var n;
                        t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r((function (e) {
                            e(n)
                        }))).then(a, o)
                    }

                    c((i = i.apply(t, n || [])).next())
                }));
                var t, n, r, i
            }
        }

        let fr;
        try {
            new EventTarget, fr = !0
        } catch (e) {
            fr = !1
        }
        var pr = fr ? EventTarget : class {
            constructor() {
                this.e = {}
            }

            addEventListener(e, t, n = !1) {
                this.t(e).push(t)
            }

            removeEventListener(e, t, n = !1) {
                const r = this.t(e), i = r.indexOf(t);
                i > -1 && r.splice(i, 1)
            }

            dispatchEvent(e) {
                return e.target = this, Object.freeze(e), this.t(e.type).forEach((t => t(e))), !0
            }

            t(e) {
                return this.e[e] = this.e[e] || []
            }
        }, gr = fr ? Event : class {
            constructor(e) {
                this.type = e
            }
        };

        class vr extends gr {
            constructor(e, t) {
                super(e), this.newState = t.newState, this.oldState = t.oldState, this.originalEvent = t.originalEvent
            }
        }

        const mr = "active", yr = "passive", wr = "hidden", br = "frozen", Pr = "terminated", _r = "object" == typeof safari && safari.pushNotification,
            Sr = ["focus", "blur", "visibilitychange", "freeze", "resume", "pageshow", "onpageshow" in self ? "pagehide" : "unload"], Ir = e => (e.preventDefault(), e.returnValue = "Are you sure?"),
            Er = [[mr, yr, wr, Pr], [mr, yr, wr, br], [wr, yr, mr], [br, wr], [br, mr], [br, yr]].map((e => e.reduce(((e, t, n) => (e[t] = n, e)), {}))),
            kr = () => document.visibilityState === wr ? wr : document.hasFocus() ? mr : yr, Cr = new class extends pr {
                constructor() {
                    super();
                    const e = kr();
                    this.s = e, this.i = [], this.a = this.a.bind(this), Sr.forEach((e => addEventListener(e, this.a, !0))), _r && addEventListener("beforeunload", (e => {
                        this.n = setTimeout((() => {
                            e.defaultPrevented || e.returnValue.length > 0 || this.r(e, wr)
                        }), 0)
                    }))
                }

                get state() {
                    return this.s
                }

                get pageWasDiscarded() {
                    return document.wasDiscarded || !1
                }

                addUnsavedChanges(e) {
                    !this.i.indexOf(e) > -1 && (0 === this.i.length && addEventListener("beforeunload", Ir), this.i.push(e))
                }

                removeUnsavedChanges(e) {
                    const t = this.i.indexOf(e);
                    t > -1 && (this.i.splice(t, 1), 0 === this.i.length && removeEventListener("beforeunload", Ir))
                }

                r(e, t) {
                    if (t !== this.s) {
                        const n = ((e, t) => {
                            for (let n, r = 0; n = Er[r]; ++r) {
                                const r = n[e], i = n[t];
                                if (r >= 0 && i >= 0 && i > r) return Object.keys(n).slice(r, i + 1)
                            }
                            return []
                        })(this.s, t);
                        for (let t = 0; t < n.length - 1; ++t) {
                            const r = n[t], i = n[t + 1];
                            this.s = i, this.dispatchEvent(new vr("statechange", {oldState: r, newState: i, originalEvent: e}))
                        }
                    }
                }

                a(e) {
                    switch (_r && clearTimeout(this.n), e.type) {
                        case"pageshow":
                        case"resume":
                            this.r(e, kr());
                            break;
                        case"focus":
                            this.r(e, mr);
                            break;
                        case"blur":
                            this.s === mr && this.r(e, kr());
                            break;
                        case"pagehide":
                        case"unload":
                            this.r(e, e.persisted ? br : Pr);
                            break;
                        case"visibilitychange":
                            this.s !== br && this.s !== Pr && this.r(e, kr());
                            break;
                        case"freeze":
                            this.r(e, br)
                    }
                }
            }, $r = ["hidden", "frozen", "terminated"];

        function Mr({url: e, blur: t = 0, fade: n = 0}) {
            e ? (function (e) {
                document.querySelectorAll(".gp-custom-background").forEach((t => {
                    t.childNodes.forEach((e => {
                        e.style.opacity = "0"
                    })), setTimeout((() => {
                        t.remove()
                    }), 1e3 * e)
                }))
            }(n), function (e) {
                const t = document.createElement("div");
                document.body.style.setProperty("background", "transparent", "important"), t.classList.add("gp-custom-background"), function (e, t) {
                    const n = document.createElement("div");
                    n.style.cssText = `\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n        background: transparent;\n        backdrop-filter: blur(${e.blur}px);\n        \n        transition: ${e.fade}s;\n    `, n.classList.add("gp-custom-background-blur"), t.append(n)
                }(e, t), function (e, t) {
                    const n = document.createElement("div");
                    n.style.cssText = `\n        background-image: url(${e.url});\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: center;\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        z-index: -2;\n        opacity: 0;\n        transition: ${e.fade}s;\n    `, n.classList.add("gp-custom-background-img"), t.append(n), setTimeout((() => {
                        n.style.opacity = "1"
                    }), 100)
                }(e, t), document.body.append(t)
            }({url: e, blur: t, fade: n})) : Te.kg.warn("Empty background url")
        }

        class Tr {
            getLanguage() {
                return e = this, t = void 0, r = function* () {
                    const e = decodeURIComponent(window.location.toString()), t = /_gp_lang=(?<lang>\w{2})/.exec(e);
                    return t ? t.groups.lang : null
                }, new ((n = void 0) || (n = Promise))((function (i, s) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function o(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(a, o)
                    }

                    c((r = r.apply(e, t || [])).next())
                }));
                var e, t, n, r
            }
        }

        var Or;

        class Rr {
            constructor() {
                Or.set(this, [new Tr])
            }

            getLanguage() {
                return e = this, t = void 0, r = function* () {
                    for (const e of function (e, t, n, r) {
                        if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
                    }(this, Or, "f")) {
                        const t = yield e.getLanguage();
                        if (null !== t) return (0, Oe.Ff)(t.toLowerCase()).unwrapOr(null)
                    }
                    return null
                }, new ((n = void 0) || (n = Promise))((function (i, s) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function o(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(a, o)
                    }

                    c((r = r.apply(e, t || [])).next())
                }));
                var e, t, n, r
            }
        }

        Or = new WeakMap;
        var xr, jr, Ar, Lr, Fr = function (e, t, n, r) {
            return new (n || (n = Promise))((function (i, s) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function o(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, o)
                }

                c((r = r.apply(e, t || [])).next())
            }))
        }, Nr = function (e, t, n, r, i) {
            if ("m" === r) throw new TypeError("Private method is not writable");
            if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n), n
        }, Dr = function (e, t, n, r) {
            if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
        };

        class qr extends Le.Z {
            constructor() {
                super(), this.setBackground = Mr, this.isPaused = !1, this.isGameplay = !1, this.logger = Te.kg, xr.set(this, void 0), jr.set(this, void 0), Ar.set(this, void 0), Lr.set(this, void 0);
                const e = (0, c._)();
                this.ready = e.ready;
                const i = new URL(document.currentScript.src).searchParams;
                this.projectId = Number(i.get("projectId"));
                const s = i.get("publicToken"), o = i.get("callback") || "onGPInit";
                this.ready.then((e => {
                    var t, n, r, i;
                    null === (n = (t = window)[o]) || void 0 === n || n.call(t, e), "onGSInit" !== o && (null === (i = (r = window).onGSInit) || void 0 === i || i.call(r, e))
                })), this.fullscreen = new st, this.analytics = new at, this.leaderboard = new We(this), this.gamesCollections = new Lt(this), this.documents = new wn(this), this.players = new dr(this), this.isMobile = t()({
                    tablet: !0,
                    featureDetect: !0
                });
                const l = navigator.language.slice(0, 2).toLowerCase(), u = Object.values(Oe.Uo).includes(l) ? l : null, d = function () {
                    const e = new URL(window.location.href), {searchParams: t, hostname: n} = e;
                    return t.has("_platform") ? t.get("_platform") : function (e) {
                        return !!e.hostname.includes(["games", "s3", "yandex", "net"].join(".")) || !!e.hash.includes("origin=https") && (e.hash.includes("app-id=") || e.searchParams.has("app-id"))
                    }(e) ? r.z.YANDEX : n.includes("gamemonetize.co") ? r.z.GAME_MONETIZE : n.includes("gamedistribution.co") ? r.z.GAME_DISTRIBUTION : n.includes("crazygames.com") ? r.z.CRAZY_GAMES : n.includes(".gamepix.com") ? r.z.GAMEPIX : n.includes("poki.com") || t.has("pokiDebug") || n.includes("poki-gdn.com") ? r.z.POKI : t.has("api_id") && t.has("viewer_id") && t.has("auth_key") || t.get("vk_user_id") && t.get("sign") && t.get("vk_app_id") ? r.z.VK : t.has("auth_sig") && t.has("session_key") ? r.z.OK : n.includes("static.developer.sberdevices.ru") || Array.isArray(window.appInitialData) && window.appInitialData.some((e => "app_context" === (null == e ? void 0 : e.type))) ? r.z.SMARTMARKET : function (e) {
                        const {searchParams: t} = e;
                        if (!(t.get("lang") || "").includes("_")) return !1;
                        if (!t.has("currency")) return !1;
                        if (t.has("uid") && t.has("sign") && t.has("appid")) return !0;
                        const n = t.get("status");
                        return Number(t.get("appid")) > 0 || n.length > 0 && !Number.isNaN(t.get("status"))
                    }(e) ? r.z.VK_PLAY : r.z.NONE
                }();
                Nr(this, Ar, new g("https://api.eponesh.com/gs/api", this.projectId, s, u || Oe.Uo.EN, d), "f");
                const f = e => {
                    Dr(this, Ar, "f").setPlayerData(e)
                };
                var p, v;
                this._playerService = new h.Z(Dr(this, Ar, "f")), this._channelsService = new Ie(Dr(this, Ar, "f")), this._leaderboardsService = new gn(Dr(this, Ar, "f")), this._projectService = new Oe.ZP(Dr(this, Ar, "f")), this._achievementsService = new vt.ZP(Dr(this, Ar, "f")), this._paymentsService = new Ct.ZP(Dr(this, Ar, "f")), this._gamesCollectionsService = new Mt(Dr(this, Ar, "f")), this._documentsService = new mn(Dr(this, Ar, "f")), this._imagesService = new On(Dr(this, Ar, "f")), this._filesService = new ar(Dr(this, Ar, "f")), Nr(this, xr, new Rr, "f"), function ({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          platformType: e,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          tools: t
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      }) {
                    return function (e, t) {
                        switch (e) {
                            case r.z.YANDEX:
                                return a.e(755).then(a.bind(a, 2855)).then((e => e.default(t)));
                            case r.z.VK:
                                return a.e(911).then(a.bind(a, 1440)).then((e => e.default(t)));
                            case r.z.OK:
                                return a.e(614).then(a.bind(a, 1069)).then((e => e.default(t)));
                            case r.z.GAME_MONETIZE:
                                return a.e(369).then(a.bind(a, 3978)).then((e => e.default(t)));
                            case r.z.GAMEPIX:
                                return a.e(477).then(a.bind(a, 5940)).then((e => e.default(t)));
                            case r.z.POKI:
                                return a.e(477).then(a.bind(a, 449)).then((e => e.default(t)));
                            case r.z.GAME_DISTRIBUTION:
                                return a.e(860).then(a.bind(a, 3102)).then((e => e.default(t)));
                            case r.z.CRAZY_GAMES:
                                return a.e(433).then(a.bind(a, 1229)).then((e => e.default(t)));
                            case r.z.SMARTMARKET:
                                return a.e(552).then(a.bind(a, 5122)).then((e => e.default(t)));
                            case r.z.VK_PLAY:
                                return a.e(70).then(a.bind(a, 558)).then((e => e.default(t)));
                            case r.z.NONE:
                            default:
                                return a.e(477).then(a.bind(a, 254)).then((e => e.default(t)))
                        }
                    }(e, t)
                }({
                    platformType: d, tools: {
                        gp: this, setupStorage: e => {
                            const t = [new Pt(this.projectId), ...e];
                            try {
                                null !== window.localStorage && t.push(new Et(this.projectId))
                            } catch (e) {
                            }
                            return this._storage = new Ae(t), this._storage.ready
                        }, fetchConfig: e => Fr(this, void 0, void 0, (function* () {
                            yield this._storage.ready;
                            const [t, n, r, i] = yield Promise.all([this._storage.loadLanguage(), this._storage.loadConfig(), this._storage.loadAdsInfo(), Dr(this, xr, "f").getLanguage()]);
                            return t || this._storage.saveLanguage(null), this.language = i || t || e || u || Oe.Uo.EN, Dr(this, Ar, "f").setLang(this.language), this._projectService.fetchConfig().then((e => e || n)).catch((e => (console.error(e), n)))
                        }))
                    }
                }).then((t => Fr(this, void 0, void 0, (function* () {
                    const {adsAdapter: i, playerAdapter: s, platformAdapter: o, socialsAdapter: c, paymentsAdapter: h, projectConfig: l, appAdapter: u} = t;
                    Nr(this, jr, l, "f"), d !== r.z.GAMEPIX && (l.config.ymCounterId && this.analytics.addCounter(new ht({counterId: l.config.ymCounterId})), l.config.gtagCounterId && this.analytics.addCounter(new ut({counterId: l.config.gtagCounterId}))), this.avatarGenerator = l.config.avatarGenerator, this.avatarGeneratorTemplate = l.config.avatarGeneratorTemplate, this.loader = function (e) {
                        let t = 0;
                        const n = document.createElement("div");

                        function r() {
                            n.style.display = t > 0 ? "flex" : "none"
                        }

                        return n.classList.add("gs-global-loader"), n.innerHTML = `<div class="gs-loader ${!e && "gs-loader-hidden"}">\n        <div class="gs-loader__outter"></div>\n        <div class="gs-loader__inner"></div>\n    </div>`, document.body.appendChild(n), {
                            inc() {
                                t += 1, r()
                            }, dec() {
                                t = t <= 0 ? 0 : t - 1, r()
                            }
                        }
                    }(l.config.showLoader), this._storage.saveConfig(l), this.platform = new Ee(l.platformConfig, o), this.ads = new n.Z(this, i, l), this.app = new pt(this, u, l), this.socials = new ft(c, this), this.channels = new nn(this, l), this.player = new it({}, l.playerFields, s, this, f), this.payments = new $t.Z(this, h), this.variables = new Sn(this, l.gameVariables || []), this.images = new Xn(this, l.acl), this.files = new lr(this, l.acl), this.achievements = new mt.Z(this, l.project.achievements), Nr(this, Lr, Date.parse(l.serverTime), "f"), setInterval((() => Nr(this, Lr, Dr(this, Lr, "f") + 1e3, "f")), 1e3), this.isDev ? (this.devtools = yield Promise.all([a.e(690), a.e(9), a.e(863)]).then(a.bind(a, 5169)).then((e => e.default(this, l))), l.config.showReqCounter && Dr(this, Ar, "f").addCounterListener((e => {
                        this.devtools.showCounter(e)
                    }))) : Te.kg.stopCollect(), this.init(e)
                })))).catch(Te.kg.error), p = () => this.pause(), v = () => {
                    this.ads && (this.ads.isFullscreenPlaying || this.ads.isPreloaderPlaying || this.ads.isRewardedPlaying || this.resume())
                }, Cr.addEventListener("statechange", (e => {
                    $r.includes(e.newState) ? p() : v()
                }))
            }

            get nativeSDK() {
                return this.platform.getNativeSDK()
            }

            get serverTime() {
                return new Date(Dr(this, Lr, "f")).toISOString()
            }

            get isDev() {
                var e;
                return (null === (e = Dr(this, jr, "f")) || void 0 === e ? void 0 : e.isDev) || !1
            }

            get isAllowedOrigin() {
                var e;
                return (null === (e = Dr(this, jr, "f")) || void 0 === e ? void 0 : e.isAllowedOrigin) || !1
            }

            get locale() {
                return Oe.h$[this.language] || "en-US"
            }

            get _overlaySizeOffsets() {
                return {top: this.ads._stickyBannerOffsets.top, bottom: this.ads._stickyBannerOffsets.bottom}
            }

            init(e) {
                return Fr(this, void 0, void 0, (function* () {
                    this.ads.on("fullscreen:start", (() => this.pause())), this.ads.on("fullscreen:close", (() => this.resume())), this.ads.on("preloader:start", (() => this.pause())), this.ads.on("preloader:close", (() => this.resume())), this.ads.on("rewarded:start", (() => this.pause())), this.ads.on("rewarded:close", (() => this.resume())), yield Promise.all([this.ads.checkAdblock()]).catch(Te.kg.warn), e.done(this)
                }))
            }

            loadOverlay() {
                return Fr(this, void 0, void 0, (function* () {
                    this.overlay || (this.overlay = yield Promise.all([a.e(690), a.e(9), a.e(573), a.e(460)]).then(a.bind(a, 1332)).then((e => e.default(this))), this._events.emit("overlay:ready"))
                }))
            }

            changeLanguage(e) {
                return Fr(this, void 0, void 0, (function* () {
                    if (this.language !== e) try {
                        if (!Object.values(Oe.Uo).includes(e)) throw new Error(`Language ${e} not supported`);
                        this.language = e, this._storage.saveLanguage(e), this.overlay && (yield this.overlay.changeLanguage(e)), Dr(this, Ar, "f").setLang(this.language), this._events.emit("change:language", this.language)
                    } catch (e) {
                        Te.kg.error(e)
                    }
                }))
            }

            changeAvatarGenerator() {
                return Fr(this, void 0, void 0, (function* () {
                    Te.kg.warn("[DEPRECATED]: changeAvatarGenerator")
                }))
            }

            generateAvatar(e, t) {
                return (0, ur.Z)(this.avatarGeneratorTemplate, e, t)
            }

            pause() {
                this.isPaused || (this.isPaused = !0, this._events.emit("pause"))
            }

            resume() {
                this.isPaused && (this.isPaused = !1, this._events.emit("resume"))
            }

            gameStart() {
                return Fr(this, void 0, void 0, (function* () {
                    yield this.ready, this._events.emit("gameStart")
                }))
            }

            gameplayStart() {
                return Fr(this, void 0, void 0, (function* () {
                    yield this.ready, this.isGameplay || (this.isGameplay = !0, this._events.emit("gameplayStart"))
                }))
            }

            gameplayStop() {
                return Fr(this, void 0, void 0, (function* () {
                    yield this.ready, this.isGameplay && (this.isGameplay = !1, this._events.emit("gameplayStop"))
                }))
            }
        }

        xr = new WeakMap, jr = new WeakMap, Ar = new WeakMap, Lr = new WeakMap, new qr
    })()
})();