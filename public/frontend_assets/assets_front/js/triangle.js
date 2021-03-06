﻿! function(a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    "use strict";
    var c = [],
        d = a.document,
        e = Object.getPrototypeOf,
        f = c.slice,
        g = c.concat,
        h = c.push,
        i = c.indexOf,
        j = {},
        k = j.toString,
        l = j.hasOwnProperty,
        m = l.toString,
        n = m.call(Object),
        o = {};

    function p(a, b) {
        b = b || d;
        var c = b.createElement("script");
        c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
    }
    var q = "3.1.1",
        r = function(a, b) {
            return new r.fn.init(a, b)
        },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        t = /^-ms-/,
        u = /-([a-z])/g,
        v = function(a, b) {
            return b.toUpperCase()
        };
    r.fn = r.prototype = {
        jquery: q,
        constructor: r,
        length: 0,
        toArray: function() {
            return f.call(this)
        },
        get: function(a) {
            return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a]
        },
        pushStack: function(a) {
            var b = r.merge(this.constructor(), a);
            return b.prevObject = this, b
        },
        each: function(a) {
            return r.each(this, a)
        },
        map: function(a) {
            return this.pushStack(r.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(f.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: h,
        sort: c.sort,
        splice: c.splice
    }, r.extend = r.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, r.extend({
        expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === r.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = r.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
        },
        isPlainObject: function(a) {
            var b, c;
            return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n))
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            p(a)
        },
        camelCase: function(a) {
            return a.replace(t, "ms-").replace(u, v)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (w(a)) {
                for (c = a.length; d < c; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break; return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(s, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : i.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, f = 0,
                h = [];
            if (w(a))
                for (d = a.length; f < d; f++) e = b(a[f], f, c), null != e && h.push(e);
            else
                for (f in a) e = b(a[f], f, c), null != e && h.push(e);
            return g.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(f.call(arguments)))
            }, e.guid = a.guid = a.guid || r.guid++, e
        },
        now: Date.now,
        support: o
    }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        j["[object " + b + "]"] = b.toLowerCase()
    });

    function w(a) {
        var b = !!a && "length" in a && a.length,
            c = r.type(a);
        return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }
    var x = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
            N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            O = new RegExp(K + "+", "g"),
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(N),
            U = new RegExp("^" + L + "$"),
            V = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + N),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
            },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            aa = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ca = function(a, b) {
                return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
            },
            da = function() {
                m()
            },
            ea = ta(function(a) {
                return a.disabled === !0 && ("form" in a || "label" in a)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType
        } catch (fa) {
            G = {
                apply: D.length ? function(a, b) {
                    F.apply(a, H.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s = b && b.ownerDocument,
                w = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== w && (l = Z.exec(a)))
                    if (f = l[1]) {
                        if (9 === w) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w) s = b, r = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca): b.setAttribute("id", k = u), o = g(a), h = o.length;
                        while (h--) o[h] = "#" + k + " " + sa(o[h]);
                        r = o.join(","), s = $.test(a) && qa(b.parentNode) || b
                    }
                    if (r) try {
                        return G.apply(d, s.querySelectorAll(r)), d
                    } catch (x) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(P, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("fieldset");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return function(b) {
                return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a
            }
        }

        function pa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = ga.support = {}, f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.filter.ID = function(a) {
                var b = a.replace(_, aa);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }, d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }) : (d.filter.ID = function(a) {
                var b = a.replace(_, aa);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }, d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c, d, e, f = b.getElementById(a);
                    if (f) {
                        if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
                        e = b.getElementsByName(a), d = 0;
                        while (f = e[d++])
                            if (c = f.getAttributeNode("id"), c && c.value === a) return [f]
                    }
                    return []
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a)
            }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function(a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, ga.matches = function(a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.escape = function(a) {
            return (a + "").replace(ba, ca)
        }, ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: V,
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
                ATTR: function(a) {
                    return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(_, aa).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = I(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(P, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0
                    }
                }),
                contains: ia(function(a) {
                    return a = a.replace(_, aa),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ia(function(a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: oa(!1),
                disabled: oa(!0),
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return X.test(a.nodeName)
                },
                input: function(a) {
                    return W.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: pa(function() {
                    return [0]
                }),
                last: pa(function(a, b) {
                    return [b - 1]
                }),
                eq: pa(function(a, b, c) {
                    return [c < 0 ? c + b : c]
                }),
                even: pa(function(a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a
                }),
                odd: pa(function(a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a
                }),
                lt: pa(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: pa(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = ma(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = na(b);

        function ra() {}
        ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };

        function sa(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d
        }

        function ta(a, b, c) {
            var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = x++;
            return b.first ? function(b, c, e) {
                while (b = b[d])
                    if (1 === b.nodeType || g) return a(b, c, e);
                return !1
            } : function(b, c, i) {
                var j, k, l, m = [w, h];
                if (i) {
                    while (b = b[d])
                        if ((1 === b.nodeType || g) && a(b, c, i)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || g)
                            if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                            else {
                                if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];
                                if (k[f] = m, m[2] = a(b, c, i)) return !0
                            } return !1
            }
        }

        function ua(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function va(a, b, c) {
            for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
            return c
        }

        function wa(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || va(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : wa(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = wa(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
            })
        }

        function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function(a) {
                    return a === b
                }, h, !0), l = ta(function(a) {
                    return I(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; i < f; i++)
                if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; e < f; e++)
                            if (d.relative[a[e].type]) break;
                        return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a))
                    }
                    m.push(c)
                }
            return ua(m)
        }

        function za(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = E.call(i));
                            u = wa(u)
                        }
                        G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ia(f) : f
        }
        return h = ga.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, za(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function(a, b, c, e) {
            var f, i, j, k, l, m = "function" == typeof a && a,
                n = !e && g(a = m.selector || a);
            if (c = c || [], 1 === n.length) {
                if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;
                    m && (b = b.parentNode), a = a.slice(i.shift().value.length)
                }
                f = V.needsContext.test(a) ? 0 : i.length;
                while (f--) {
                    if (j = i[f], d.relative[k = j.type]) break;
                    if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
                        if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;
                        break
                    }
                }
            }
            return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("fieldset"))
        }), ja(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function(a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
        }), ja(function(a) {
            return null == a.getAttribute("disabled")
        }) || ka(J, function(a, b, c) {
            var d;
            if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
    var y = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && r(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        z = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        A = r.expr.match.needsContext,
        B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        C = /^.[^:#\[\.,]*$/;

    function D(a, b, c) {
        return r.isFunction(b) ? r.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        }) : b.nodeType ? r.grep(a, function(a) {
            return a === b !== c
        }) : "string" != typeof b ? r.grep(a, function(a) {
            return i.call(b, a) > -1 !== c
        }) : C.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function(a) {
            return i.call(b, a) > -1 !== c && 1 === a.nodeType
        }))
    }
    r.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, r.fn.extend({
        find: function(a) {
            var b, c, d = this.length,
                e = this;
            if ("string" != typeof a) return this.pushStack(r(a).filter(function() {
                for (b = 0; b < d; b++)
                    if (r.contains(e[b], this)) return !0
            }));
            for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
            return d > 1 ? r.uniqueSort(c) : c
        },
        filter: function(a) {
            return this.pushStack(D(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(D(this, a || [], !0))
        },
        is: function(a) {
            return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length
        }
    });
    var E, F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        G = r.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || E, "string" == typeof a) {
                if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b))
                        for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this
            }
            return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
        };
    G.prototype = r.fn, E = r(d);
    var H = /^(?:parents|prev(?:Until|All))/,
        I = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    r.fn.extend({
        has: function(a) {
            var b = r(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; a < c; a++)
                    if (r.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            var c, d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && r(a);
            if (!A.test(a))
                for (; d < e; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
            return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    
    var K = /[^\x20\t\r\n\f]+/g;

    function L(a) {
        var b = {};
        return r.each(a.match(K) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    r.Callbacks = function(a) {
        a = "string" == typeof a ? L(a) : r.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        r.each(b, function(b, c) {
                            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return r.each(arguments, function(a, b) {
                        var c;
                        while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h--
                    }), this
                },
                has: function(a) {
                    return a ? r.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = g = [], c || b || (f = c = ""), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    };

    function M(a) {
        return a
    }

    function N(a) {
        throw a
    }

    function O(a, b, c) {
        var d;
        try {
            a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a)
        } catch (a) {
            c.call(void 0, a)
        }
    }
    r.extend({
        Deferred: function(b) {
            var c = [
                    ["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2],
                    ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]
                ],
                d = "pending",
                e = {
                    state: function() {
                        return d
                    },
                    always: function() {
                        return f.done(arguments).fail(arguments), this
                    },
                    "catch": function(a) {
                        return e.then(null, a)
                    },
                    pipe: function() {
                        var a = arguments;
                        return r.Deferred(function(b) {
                            r.each(c, function(c, d) {
                                var e = r.isFunction(a[d[4]]) && a[d[4]];
                                f[d[1]](function() {
                                    var a = e && e.apply(this, arguments);
                                    a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    then: function(b, d, e) {
                        var f = 0;

                        function g(b, c, d, e) {
                            return function() {
                                var h = this,
                                    i = arguments,
                                    j = function() {
                                        var a, j;
                                        if (!(b < f)) {
                                            if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                            j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
                                        }
                                    },
                                    k = e ? j : function() {
                                        try {
                                            j()
                                        } catch (a) {
                                            r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i))
                                        }
                                    };
                                b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k))
                            }
                        }
                        return r.Deferred(function(a) {
                            c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N))
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? r.extend(a, e) : e
                    }
                },
                f = {};
            return r.each(c, function(a, b) {
                var g = b[2],
                    h = b[5];
                e[b[1]] = g.add, h && g.add(function() {
                    d = h
                }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
                }, f[b[0] + "With"] = g.fireWith
            }), e.promise(f), b && b.call(f, f), f
        },
        when: function(a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = f.call(arguments),
                g = r.Deferred(),
                h = function(a) {
                    return function(c) {
                        d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e)
                    }
                };
            if (b <= 1 && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();
            while (c--) O(e[c], h(c), g.reject);
            return g.promise()
        }
    });
    var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r.Deferred.exceptionHook = function(b, c) {
        a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
    }, r.readyException = function(b) {
        a.setTimeout(function() {
            throw b
        })
    };
    var Q = r.Deferred();
    r.fn.ready = function(a) {
        return Q.then(a)["catch"](function(a) {
            r.readyException(a)
        }), this
    }, r.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? r.readyWait++ : r.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]))
        }
    }), r.ready.then = Q.then;

    function R() {
        d.removeEventListener("DOMContentLoaded", R), a.removeEventListener("load", R), r.ready()
    }
    "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));
    var S = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === r.type(c)) {
                e = !0;
                for (h in c) S(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(r(a), c)
                })), b))
                for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        T = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };

    function U() {
        this.expando = r.expando + U.uid++
    }
    U.uid = 1, U.prototype = {
        cache: function(a) {
            var b = a[this.expando];
            return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[r.camelCase(b)] = c;
            else
                for (d in b) e[r.camelCase(d)] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)]
        },
        access: function(a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b) {
                    r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length;
                    while (c--) delete d[b[c]]
                }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !r.isEmptyObject(b)
        }
    };
    var V = new U,
        W = new U,
        X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Y = /[A-Z]/g;

    function Z(a) {
        return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : X.test(a) ? JSON.parse(a) : a)
    }

    
    var _ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        aa = new RegExp("^(?:([+-])=|)(" + _ + ")([a-z%]*)$", "i"),
        ba = ["Top", "Right", "Bottom", "Left"],
        ca = function(a, b) {
            return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display")
        },
        da = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        };


    ! function() {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var qa = d.documentElement,
        ra = /^key/,
        sa = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ta = /^([^.]*)(?:\.(.+)|)/;

    function ua() {
        return !0
    }

    function va() {
        return !1
    }


    r.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = V.get(a);
            if (q) {
                c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(qa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                    return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(K) || [""], j = b.length;
                while (j--) h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && r.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = V.hasData(a) && V.get(a);
            if (q && (i = q.events)) {
                b = (b || "").match(K) || [""], j = b.length;
                while (j--)
                    if (h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) r.event.remove(a, n + b[j], c, d, !0);
                r.isEmptyObject(i) && V.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            var b = r.event.fix(a),
                c, d, e, f, g, h, i = new Array(arguments.length),
                j = (V.get(this, "events") || {})[b.type] || [],
                k = r.event.special[b.type] || {};
            for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
            if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
                h = r.event.handlers.call(this, b, j), c = 0;
                while ((f = h[c++]) && !b.isPropagationStopped()) {
                    b.currentTarget = f.elem, d = 0;
                    while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, b), b.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g, h = [],
                i = b.delegateCount,
                j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1))
                for (; j !== this; j = j.parentNode || this)
                    if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                        for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
                        f.length && h.push({
                            elem: j,
                            handlers: f
                        })
                    }
            return j = this, i < b.length && h.push({
                elem: j,
                handlers: b.slice(i)
            }), h
        },
        addProp: function(a, b) {
            Object.defineProperty(r.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: r.isFunction(b) ? function() {
                    if (this.originalEvent) return b(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[a]
                },
                set: function(b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
            })
        },
        fix: function(a) {
            return a[r.expando] ? a : new r.Event(a)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== wa() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === wa() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && r.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(a) {
                    return r.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, r.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, r.Event = function(a, b) {
        return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ua : va, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void(this[r.expando] = !0)) : new r.Event(a, b)
    }, r.Event.prototype = {
        constructor: r.Event,
        isDefaultPrevented: va,
        isPropagationStopped: va,
        isImmediatePropagationStopped: va,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ua, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ua, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ua, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, r.each({
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
        "char": !0,
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
        which: function(a) {
            var b = a.button;
            return null == a.which && ra.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && sa.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
        }
    }, r.event.addProp), r.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        r.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), r.fn.extend({
        on: function(a, b, c, d) {
            return xa(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return xa(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = va), this.each(function() {
                r.event.remove(this, a, c, b)
            })
        }
    });


    r.extend({
        htmlPrefilter: function(a) {
            return a.replace(ya, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = r.contains(a.ownerDocument, a);
            if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))
                for (g = ma(h), f = ma(a), d = 0, e = f.length; d < e; d++) Ha(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || ma(a), g = g || ma(h), d = 0, e = f.length; d < e; d++) Ga(f[d], g[d]);
                else Ga(a, h);
            return g = ma(h, "script"), g.length > 0 && na(g, !i && ma(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (T(c)) {
                    if (b = c[V.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                        c[V.expando] = void 0
                    }
                    c[W.expando] && (c[W.expando] = void 0)
                }
        }
    }), r.fn.extend({
        detach: function(a) {
            return Ja(this, a, !0)
        },
        remove: function(a) {
            return Ja(this, a)
        },
        text: function(a) {
            return S(this, function(a) {
                return void 0 === a ? r.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return Ia(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Da(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ia(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Da(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ia(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ia(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(ma(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function() {
                return r.clone(this, a, b)
            })
        },
        html: function(a) {
            return S(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !za.test(a) && !la[(ja.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);
                    try {
                        for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(ma(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ia(this, arguments, function(b) {
                var c = this.parentNode;
                r.inArray(this, a) < 0 && (r.cleanData(ma(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), r.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        r.fn[a] = function(a) {
            for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Ka = /^margin/,
        La = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"),
        Ma = function(b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        };
    ! function() {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", qa.appendChild(h);
                var b = a.getComputedStyle(i);
                c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, qa.removeChild(h), i = null
            }
        }
        var c, e, f, g, h = d.createElement("div"),
            i = d.createElement("div");
        i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, {
            pixelPosition: function() {
                return b(), c
            },
            boxSizingReliable: function() {
                return b(), e
            },
            pixelMarginRight: function() {
                return b(), f
            },
            reliableMarginLeft: function() {
                return b(), g
            }
        }))
    }();

    function Na(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ma(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && La.test(g) && Ka.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function Oa(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Pa = /^(none|table(?!-c[ea]).+)/,
        Qa = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ra = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Sa = ["Webkit", "Moz", "ms"],
        Ta = d.createElement("div").style;

    function Ua(a) {
        if (a in Ta) return a;
        var b = a[0].toUpperCase() + a.slice(1),
            c = Sa.length;
        while (c--)
            if (a = Sa[c] + b, a in Ta) return a
    }

    function Va(a, b, c) {
        var d = aa.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function Wa(a, b, c, d, e) {
        var f, g = 0;
        for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + ba[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ba[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ba[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ba[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ba[f] + "Width", !0, e)));
        return g
    }

    function Xa(a, b, c) {
        var d, e = !0,
            f = Ma(a),
            g = "border-box" === r.css(a, "boxSizing", !1, f);
        if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d) {
            if (d = Na(a, b, f), (d < 0 || null == d) && (d = a.style[b]), La.test(d)) return d;
            e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0
        }
        return d + Wa(a, b, c || (g ? "border" : "content"), e, f) + "px"
    }
    r.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Na(a, "opacity");
                        return "" === c ? "1" : c
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
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = r.camelCase(b),
                    i = a.style;
                return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = aa.exec(c)) && e[1] && (c = ea(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = r.camelCase(b);
            return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Na(a, b, d)), "normal" === e && b in Ra && (e = Ra[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), r.each(["height", "width"], function(a, b) {
        r.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) return !Pa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Xa(a, b, d) : da(a, Qa, function() {
                    return Xa(a, b, d)
                })
            },
            set: function(a, c, d) {
                var e, f = d && Ma(a),
                    g = d && Wa(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
                return g && (e = aa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Va(a, c, g)
            }
        }
    }), r.cssHooks.marginLeft = Oa(o.reliableMarginLeft, function(a, b) {
        if (b) return (parseFloat(Na(a, "marginLeft")) || a.getBoundingClientRect().left - da(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px"
    }), r.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        r.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + ba[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Ka.test(a) || (r.cssHooks[a + b].set = Va)
    }), r.fn.extend({
        css: function(a, b) {
            return S(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (r.isArray(b)) {
                    for (d = Ma(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
            }, a, b, arguments.length > 1)
        }
    });

    function Ya(a, b, c, d, e) {
        return new Ya.prototype.init(a, b, c, d, e)
    }
    r.Tween = Ya, Ya.prototype = {
        constructor: Ya,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Ya.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ya.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Ya.propHooks[this.prop];
            return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ya.propHooks._default.set(this), this
        }
    }, Ya.prototype.init.prototype = Ya.prototype, Ya.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, Ya.propHooks.scrollTop = Ya.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, r.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, r.fx = Ya.prototype.init, r.fx.step = {};
    var Za, $a, _a = /^(?:toggle|show|hide)$/,
        ab = /queueHooks$/;

    function bb() {
        $a && (a.requestAnimationFrame(bb), r.fx.tick())
    }

    function cb() {
        return a.setTimeout(function() {
            Za = void 0
        }), Za = r.now()
    }

    function db(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; d < 4; d += 2 - b) c = ba[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function eb(a, b, c) {
        for (var d, e = (hb.tweeners[b] || []).concat(hb.tweeners["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function fb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            p = a.nodeType && ca(a),
            q = V.get(a, "fxshow");
        c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function() {
            g.unqueued || h()
        }), g.unqueued++, m.always(function() {
            m.always(function() {
                g.unqueued--, r.queue(a, "fx").length || g.empty.fire()
            })
        }));
        for (d in b)
            if (e = b[d], _a.test(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                n[d] = q && q[d] || r.style(a, d)
            }
        if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ha([a], !0), j = a.style.display || j, k = r.css(a, "display"), ha([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function() {
                o.display = j
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function() {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
            })), i = !1;
            for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", {
                display: j
            }), f && (q.hidden = !p), p && ha([a], !0), m.done(function() {
                p || ha([a]), V.remove(a, "fxshow");
                for (d in n) r.style(a, d, n[d])
            })), i = eb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0))
        }
    }

    function gb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function hb(a, b, c) {
        var d, e, f = 0,
            g = hb.prefilters.length,
            h = r.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Za || cb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: r.extend({}, b),
                opts: r.extend(!0, {
                    specialEasing: {},
                    easing: r.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Za || cb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (gb(k, j.opts.specialEasing); f < g; f++)
            if (d = hb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
        return r.map(k, eb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    r.Animation = r.extend(hb, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return ea(c.elem, a, aa.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K);
                for (var c, d = 0, e = a.length; d < e; d++) c = a[d], hb.tweeners[c] = hb.tweeners[c] || [], hb.tweeners[c].unshift(b)
            },
            prefilters: [fb],
            prefilter: function(a, b) {
                b ? hb.prefilters.unshift(a) : hb.prefilters.push(a)
            }
        }), r.speed = function(a, b, c) {
            var e = a && "object" == typeof a ? r.extend({}, a) : {
                complete: c || !c && b || r.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !r.isFunction(b) && b
            };
            return r.fx.off || d.hidden ? e.duration = 0 : "number" != typeof e.duration && (e.duration in r.fx.speeds ? e.duration = r.fx.speeds[e.duration] : e.duration = r.fx.speeds._default), null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function() {
                r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue)
            }, e
        }, r.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(ca).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = r.isEmptyObject(a),
                    f = r.speed(b, c, d),
                    g = function() {
                        var b = hb(this, r.extend({}, a), f);
                        (e || V.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = r.timers,
                        g = V.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || r.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = V.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = r.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), r.each(["toggle", "show", "hide"], function(a, b) {
            var c = r.fn[b];
            r.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(db(b, !0), a, d, e)
            }
        }), r.each({
            slideDown: db("show"),
            slideUp: db("hide"),
            slideToggle: db("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            r.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), r.timers = [], r.fx.tick = function() {
            var a, b = 0,
                c = r.timers;
            for (Za = r.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || r.fx.stop(), Za = void 0
        }, r.fx.timer = function(a) {
            r.timers.push(a), a() ? r.fx.start() : r.timers.pop()
        }, r.fx.interval = 13, r.fx.start = function() {
            $a || ($a = a.requestAnimationFrame ? a.requestAnimationFrame(bb) : a.setInterval(r.fx.tick, r.fx.interval))
        }, r.fx.stop = function() {
            a.cancelAnimationFrame ? a.cancelAnimationFrame($a) : a.clearInterval($a), $a = null
        }, r.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, r.fn.delay = function(b, c) {
            return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value
        }();
    var ib, jb = r.expr.attrHandle;
    r.fn.extend({
        attr: function(a, b) {
            return S(this, r.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                r.removeAttr(this, a)
            })
        }
    }), r.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? ib : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d = 0,
                e = b && b.match(K);
            if (e && 1 === a.nodeType)
                while (c = e[d++]) a.removeAttribute(c)
        }
    }), ib = {
        set: function(a, b, c) {
            return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, r.each(r.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = jb[b] || r.find.attr;
        jb[b] = function(a, b, d) {
            var e, f, g = b.toLowerCase();
            return d || (f = jb[g], jb[g] = e, e = null != c(a, b, d) ? g : null, jb[g] = f), e
        }
    });
    var kb = /^(?:input|select|textarea|button)$/i,
        lb = /^(?:a|area)$/i;
    r.fn.extend({
        prop: function(a, b) {
            return S(this, r.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[r.propFix[a] || a]
            })
        }
    }), r.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = r.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : kb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), o.optSelected || (r.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        r.propFix[this.toLowerCase()] = this
    });

    function mb(a) {
        var b = a.match(K) || [];
        return b.join(" ")
    }

    function nb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    r.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) {
                r(this).addClass(a.call(this, b, nb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(K) || [];
                while (c = this[i++])
                    if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = mb(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) {
                r(this).removeClass(a.call(this, b, nb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(K) || [];
                while (c = this[i++])
                    if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = mb(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function(c) {
                r(this).toggleClass(a.call(this, c, nb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = r(this), f = a.match(K) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = nb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + mb(nb(c)) + " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var ob = /\r/g;
    r.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = r.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ob, "") : null == c ? "" : c)
            }
        }
    }), r.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = r.find.attr(a, "value");
                    return null != b ? b : mb(r.text(a))
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e = a.options,
                        f = a.selectedIndex,
                        g = "select-one" === a.type,
                        h = g ? null : [],
                        i = g ? f + 1 : e.length;
                    for (d = f < 0 ? i : g ? f : 0; d < i; d++)
                        if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
                            if (b = r(c).val(), g) return b;
                            h.push(b)
                        }
                    return h
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = r.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), r.each(["radio", "checkbox"], function() {
        r.valHooks[this] = {
            set: function(a, b) {
                if (r.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1
            }
        }, o.checkOn || (r.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var pb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, k, m, n, o = [e || d],
                p = l.call(b, "type") ? b.type : b,
                q = l.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;
                    i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result
            }
        },
        simulate: function(a, b, c) {
            var d = r.extend(new r.Event, c, {
                type: a,
                isSimulated: !0
            });
            r.event.trigger(d, null, b)
        }
    }), r.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                r.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) return r.event.trigger(a, b, c, !0)
        }
    }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
        r.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), r.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), o.focusin = "onfocusin" in a, o.focusin || r.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            r.event.simulate(b, a.target, r.event.fix(a))
        };
        r.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = V.access(d, b);
                e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = V.access(d, b) - 1;
                e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b))
            }
        }
    });
    var qb = a.location,
        rb = r.now(),
        sb = /\?/;
    r.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c
    };
    var tb = /\[\]$/,
        ub = /\r?\n/g,
        vb = /^(?:submit|button|image|reset|file)$/i,
        wb = /^(?:input|select|textarea|keygen)/i;

    function xb(a, b, c, d) {
        var e;
        if (r.isArray(b)) r.each(b, function(b, e) {
            c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== r.type(b)) d(a, b);
        else
            for (e in b) xb(a + "[" + e + "]", b[e], c, d)
    }
    r.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                var c = r.isFunction(b) ? b() : b;
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
            };
        if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) xb(c, a[c], b, e);
        return d.join("&")
    }, r.fn.extend({
        serialize: function() {
            return r.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = r.prop(this, "elements");
                return a ? r.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ia.test(a))
            }).map(function(a, b) {
                var c = r(this).val();
                return null == c ? null : r.isArray(c) ? r.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(ub, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(ub, "\r\n")
                }
            }).get()
        }
    });
    var yb = /%20/g,
        zb = /#.*$/,
        Ab = /([?&])_=[^&]*/,
        Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Db = /^(?:GET|HEAD)$/,
        Eb = /^\/\//,
        Fb = {},
        Gb = {},
        Hb = "*/".concat("*"),
        Ib = d.createElement("a");
    Ib.href = qb.href;

    function Jb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(K) || [];
            if (r.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }


    function Lb(a, b) {
        var c, d, e = r.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && r.extend(!0, a, d), a
    }




    r.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: qb.href,
            type: "GET",
            isLocal: Cb.test(qb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Hb,
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
                "text xml": r.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a)
        },
        ajaxPrefilter: Jb(Fb),
        ajaxTransport: Jb(Gb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
                s = r.Deferred(),
                t = r.Callbacks("once memory"),
                u = o.statusCode || {},
                v = {},
                w = {},
                x = "canceled",
                y = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (k) {
                            if (!h) {
                                h = {};
                                while (b = Bb.exec(g)) h[b[1].toLowerCase()] = b[2]
                            }
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return k ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return null == k && (o.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (k) y.always(a[y.status]);
                            else
                                for (b in a) u[b] = [u[b], a[b]];
                        return this
                    },
                    abort: function(a) {
                        var b = a || x;
                        return e && e.abort(b), A(0, b), this
                    }
                };
            if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host
                } catch (z) {
                    o.crossDomain = !0
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k) return y;
            l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, "$1"), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]);
            for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();
            if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;
                o.async && o.timeout > 0 && (i = a.setTimeout(function() {
                    y.abort("timeout")
                }, o.timeout));
                try {
                    k = !1, e.send(v, A)
                } catch (z) {
                    if (k) throw z;
                    A(-1, z)
                }
            } else A(-1, "No Transport");

            function A(b, c, d, h) {
                var j, m, n, v, w, x = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")))
            }
            return y
        },
        getJSON: function(a, b, c) {
            return r.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return r.get(a, void 0, b, "script")
        }
    }), r.each(["get", "post"], function(a, b) {
        r[b] = function(a, c, d, e) {
            return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, r.isPlainObject(a) && a))
        }
    }), r._evalUrl = function(a) {
        return r.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, r.fn.extend({
        wrapAll: function(a) {
            var b;
            return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this
        },
        wrapInner: function(a) {
            return r.isFunction(a) ? this.each(function(b) {
                r(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = r(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = r.isFunction(a);
            return this.each(function(c) {
                r(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function(a) {
            return this.parent(a).not("body").each(function() {
                r(this).replaceWith(this.childNodes)
            }), this
        }
    }), r.expr.pseudos.hidden = function(a) {
        return !r.expr.pseudos.visible(a)
    }, r.expr.pseudos.visible = function(a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    }, r.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    };
    var Ob = {
            0: 200,
            1223: 204
        },
        Pb = r.ajaxSettings.xhr();
    o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function(b) {
        var c, d;
        if (o.cors || Pb && !b.crossDomain) return {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c) throw i
                }
            },
            abort: function() {
                c && c()
            }
        }
    }), r.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1)
    }), r.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return r.globalEval(a), a
            }
        }
    }), r.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), r.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = r("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                    }), d.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Qb = [],
        Rb = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Qb.pop() || r.expando + "_" + rb++;
            return this[a] = !0, a
        }
    }), r.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || r.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0
        }), "script"
    }), o.createHTMLDocument = function() {
        var a = d.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
    }(), r.parseHTML = function(a, b, c) {
        if ("string" != typeof a) return [];
        "boolean" == typeof b && (c = b, b = !1);
        var e, f, g;
        return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = pa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes))
    }, r.fn.load = function(a, b, c) {
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = mb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        r.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), r.expr.pseudos.animated = function(a) {
        return r.grep(r.timers, function(b) {
            return a === b.elem
        }).length
    };

    function Sb(a) {
        return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    r.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = r.css(a, "position"),
                l = r(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, r.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                r.offset.setOffset(this, a, b)
            });
            var b, c, d, e, f = this[0];
            if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, {
                top: d.top + c.pageYOffset - b.clientTop,
                left: d.left + c.pageXOffset - b.clientLeft
            }) : d) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = {
                    top: d.top + r.css(a[0], "borderTopWidth", !0),
                    left: d.left + r.css(a[0], "borderLeftWidth", !0)
                }), {
                    top: b.top - d.top - r.css(c, "marginTop", !0),
                    left: b.left - d.left - r.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && "static" === r.css(a, "position")) a = a.offsetParent;
                return a || qa
            })
        }
    }), r.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function(d) {
            return S(this, function(a, d, e) {
                var f = Sb(a);
                return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), r.each(["top", "left"], function(a, b) {
        r.cssHooks[b] = Oa(o.pixelPosition, function(a, c) {
            if (c) return c = Na(a, b), La.test(c) ? r(a).position()[b] + "px" : c
        })
    }), r.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        r.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            r.fn[d] = function(e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (e === !0 || f === !0 ? "margin" : "border");
                return S(this, function(b, c, e) {
                    var f;
                    return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h)
                }, b, g ? e : void 0, g)
            }
        })
    }), r.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), r.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return r
    });
    var Tb = a.jQuery,
        Ub = a.$;
    return r.noConflict = function(b) {
        return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r
    }, b || (a.jQuery = a.$ = r), r
});;;;

var paper = function(t, e) {
    t = t || require("./node/self.js");
    var i = t.window,
        n = t.document,
        r = new function() {
            function t(t, e, r, s, a) {
                function u(n, u) {
                    u = u || (u = o(e, n)) && (u.get ? u : u.value), "string" == typeof u && "#" === u[0] && (u = t[u.substring(1)] || u);
                    var c, f = "function" == typeof u,
                        d = u,
                        _ = a || f && !u.base ? u && u.get ? n in t : t[n] : null;
                    a && _ || (f && _ && (u.base = _), f && s !== !1 && (c = n.match(/^([gs]et|is)(([A-Z])(.*))$/)) && (l[c[3].toLowerCase() + c[4]] = c[2]), d && !f && d.get && "function" == typeof d.get && i.isPlainObject(d) || (d = {
                        value: d,
                        writable: !0
                    }), (o(t, n) || {
                        configurable: !0
                    }).configurable && (d.configurable = !0, d.enumerable = null != r ? r : !c), h(t, n, d))
                }
                var l = {};
                if (e) {
                    for (var c in e) e.hasOwnProperty(c) && !n.test(c) && u(c);
                    for (var c in l) {
                        var f = l[c],
                            d = t["set" + f],
                            _ = t["get" + f] || d && t["is" + f];
                        !_ || s !== !0 && 0 !== _.length || u(c, {
                            get: _,
                            set: d
                        })
                    }
                }
                return t
            }

            function i() {
                for (var t = 0, e = arguments.length; t < e; t++) {
                    var i = arguments[t];
                    i && c(this, i)
                }
                return this
            }
            var n = /^(statics|enumerable|beans|preserve)$/,
                r = [],
                s = r.slice,
                a = Object.create,
                o = Object.getOwnPropertyDescriptor,
                h = Object.defineProperty,
                u = r.forEach || function(t, e) {
                    for (var i = 0, n = this.length; i < n; i++) t.call(e, this[i], i, this)
                },
                l = function(t, e) {
                    for (var i in this) this.hasOwnProperty(i) && t.call(e, this[i], i, this)
                },
                c = Object.assign || function(t) {
                    for (var e = 1, i = arguments.length; e < i; e++) {
                        var n = arguments[e];
                        for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
                    }
                    return t
                },
                f = function(t, e, i) {
                    if (t) {
                        var n = o(t, "length");
                        (n && "number" == typeof n.value ? u : l).call(t, e, i = i || t)
                    }
                    return i
                };
            return t(i, {
                inject: function(e) {
                    if (e) {
                        var i = e.statics === !0 ? e : e.statics,
                            n = e.beans,
                            r = e.preserve;
                        i !== e && t(this.prototype, e, e.enumerable, n, r), t(this, i, null, n, r)
                    }
                    for (var s = 1, a = arguments.length; s < a; s++) this.inject(arguments[s]);
                    return this
                },
                extend: function() {
                    for (var e, i, n, r = this, s = 0, o = arguments.length; s < o && (!e || !i); s++) n = arguments[s], e = e || n.initialize, i = i || n.prototype;
                    return e = e || function() {
                        r.apply(this, arguments)
                    }, i = e.prototype = i || a(this.prototype), h(i, "constructor", {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }), t(e, this), arguments.length && this.inject.apply(e, arguments), e.base = r, e
                }
            }).inject({
                enumerable: !1,
                initialize: i,
                set: i,
                inject: function() {
                    for (var e = 0, i = arguments.length; e < i; e++) {
                        var n = arguments[e];
                        n && t(this, n, n.enumerable, n.beans, n.preserve)
                    }
                    return this
                },
                extend: function() {
                    var t = a(this);
                    return t.inject.apply(t, arguments)
                },
                each: function(t, e) {
                    return f(this, t, e)
                },
                clone: function() {
                    return new this.constructor(this)
                },
                statics: {
                    set: c,
                    each: f,
                    create: a,
                    define: h,
                    describe: o,
                    clone: function(t) {
                        return c(new t.constructor, t)
                    },
                    isPlainObject: function(t) {
                        var e = null != t && t.constructor;
                        return e && (e === Object || e === i || "Object" === e.name)
                    },
                    pick: function(t, i) {
                        return t !== e ? t : i
                    },
                    slice: function(t, e, i) {
                        return s.call(t, e, i)
                    }
                }
            })
        };
    "undefined" != typeof module && (module.exports = r), r.inject({
        enumerable: !1,
        toString: function() {
            return null != this._id ? (this._class || "Object") + (this._name ? " '" + this._name + "'" : " @" + this._id) : "{ " + r.each(this, function(t, e) {
                if (!/^_/.test(e)) {
                    var i = typeof t;
                    this.push(e + ": " + ("number" === i ? h.instance.number(t) : "string" === i ? "'" + t + "'" : t))
                }
            }, []).join(", ") + " }"
        },
        getClassName: function() {
            return this._class || ""
        },
        importJSON: function(t) {
            return r.importJSON(t, this)
        },
        exportJSON: function(t) {
            return r.exportJSON(this, t)
        },
        toJSON: function() {
            return r.serialize(this)
        },
        set: function(t, e) {
            return t && r.filter(this, t, e, this._prioritize), this
        }
    }, {
        beans: !1,
        statics: {
            exports: {},
            extend: function nt() {
                var t = nt.base.apply(this, arguments),
                    e = t.prototype._class;
                return e && !r.exports[e] && (r.exports[e] = t), t
            },
            equals: function(t, e) {
                if (t === e) return !0;
                if (t && t.equals) return t.equals(e);
                if (e && e.equals) return e.equals(t);
                if (t && e && "object" == typeof t && "object" == typeof e) {
                    if (Array.isArray(t) && Array.isArray(e)) {
                        var i = t.length;
                        if (i !== e.length) return !1;
                        for (; i--;)
                            if (!r.equals(t[i], e[i])) return !1
                    } else {
                        var n = Object.keys(t),
                            i = n.length;
                        if (i !== Object.keys(e).length) return !1;
                        for (; i--;) {
                            var s = n[i];
                            if (!e.hasOwnProperty(s) || !r.equals(t[s], e[s])) return !1
                        }
                    }
                    return !0
                }
                return !1
            },
            read: function(t, i, n, s) {
                if (this === r) {
                    var a = this.peek(t, i);
                    return t.__index++, a
                }
                var o = this.prototype,
                    h = o._readIndex,
                    u = i || h && t.__index || 0,
                    l = t.length,
                    c = t[u];
                if (s = s || l - u, c instanceof this || n && n.readNull && null == c && s <= 1) return h && (t.__index = u + 1), c && n && n.clone ? c.clone() : c;
                if (c = r.create(o), h && (c.__read = !0), c = c.initialize.apply(c, u > 0 || u + s < l ? r.slice(t, u, u + s) : t) || c, h) {
                    t.__index = u + c.__read;
                    var f = c.__filtered;
                    f && (t.__filtered = f, c.__filtered = e), c.__read = e
                }
                return c
            },
            peek: function(t, e) {
                return t[t.__index = e || t.__index || 0]
            },
            remain: function(t) {
                return t.length - (t.__index || 0)
            },
            readList: function(t, e, i, n) {
                for (var r, s = [], a = e || 0, o = n ? a + n : t.length, h = a; h < o; h++) s.push(Array.isArray(r = t[h]) ? this.read(r, 0, i) : this.read(t, h, i, 1));
                return s
            },
            readNamed: function(t, i, n, s, a) {
                var o = this.getNamed(t, i),
                    h = o !== e;
                if (h) {
                    var u = t.__filtered;
                    u || (u = t.__filtered = r.create(t[0]), u.__unfiltered = t[0]), u[i] = e
                }
                var l = h ? [o] : t,
                    c = this.read(l, n, s, a);
                return c
            },
            getNamed: function(t, i) {
                var n = t[0];
                if (t._hasObject === e && (t._hasObject = 1 === t.length && r.isPlainObject(n)), t._hasObject) return i ? n[i] : t.__filtered || n
            },
            hasNamed: function(t, e) {
                return !!this.getNamed(t, e)
            },
            filter: function(t, i, n, r) {
                function s(r) {
                    if (!(n && r in n || a && r in a)) {
                        var s = i[r];
                        s !== e && (t[r] = s)
                    }
                }
                var a;
                if (r) {
                    for (var o, h = {}, u = 0, l = r.length; u < l; u++)(o = r[u]) in i && (s(o), h[o] = !0);
                    a = h
                }
                return Object.keys(i.__unfiltered || i).forEach(s), t
            },
            isPlainValue: function(t, e) {
                return r.isPlainObject(t) || Array.isArray(t) || e && "string" == typeof t
            },
            serialize: function(t, e, i, n) {
                e = e || {};
                var s, a = !n;
                if (a && (e.formatter = new h(e.precision), n = {
                        length: 0,
                        definitions: {},
                        references: {},
                        add: function(t, e) {
                            var i = "#" + t._id,
                                n = this.references[i];
                            if (!n) {
                                this.length++;
                                var r = e.call(t),
                                    s = t._class;
                                s && r[0] !== s && r.unshift(s), this.definitions[i] = r, n = this.references[i] = [i]
                            }
                            return n
                        }
                    }), t && t._serialize) {
                    s = t._serialize(e, n);
                    var o = t._class;
                    !o || t._compactSerialize || !a && i || s[0] === o || s.unshift(o)
                } else if (Array.isArray(t)) {
                    s = [];
                    for (var u = 0, l = t.length; u < l; u++) s[u] = r.serialize(t[u], e, i, n)
                } else if (r.isPlainObject(t)) {
                    s = {};
                    for (var c = Object.keys(t), u = 0, l = c.length; u < l; u++) {
                        var f = c[u];
                        s[f] = r.serialize(t[f], e, i, n)
                    }
                } else s = "number" == typeof t ? e.formatter.number(t, e.precision) : t;
                return a && n.length > 0 ? [
                    ["dictionary", n.definitions], s
                ] : s
            },
            deserialize: function(t, e, i, n, s) {
                var a = t,
                    o = !i,
                    h = o && t && t.length && "dictionary" === t[0][0];
                if (i = i || {}, Array.isArray(t)) {
                    var u = t[0],
                        l = "dictionary" === u;
                    if (1 == t.length && /^#/.test(u)) return i.dictionary[u];
                    u = r.exports[u], a = [];
                    for (var c = u ? 1 : 0, f = t.length; c < f; c++) a.push(r.deserialize(t[c], e, i, l, h));
                    if (u) {
                        var d = a;
                        e ? a = e(u, d, o || s) : (a = r.create(u.prototype), u.apply(a, d))
                    }
                } else if (r.isPlainObject(t)) {
                    a = {}, n && (i.dictionary = a);
                    for (var _ in t) a[_] = r.deserialize(t[_], e, i)
                }
                return h ? a[1] : a
            },
            exportJSON: function(t, e) {
                var i = r.serialize(t, e);
                return e && 0 == e.asString ? i : JSON.stringify(i)
            },
            importJSON: function(t, e) {
                return r.deserialize("string" == typeof t ? JSON.parse(t) : t, function(t, i, n) {
                    var s = n && e && e.constructor === t,
                        a = s ? e : r.create(t.prototype);
                    if (1 === i.length && a instanceof w && (s || !(a instanceof b))) {
                        var o = i[0];
                        r.isPlainObject(o) && (o.insert = !1)
                    }
                    return (s ? a.set : t).apply(a, i), s && (e = null), a
                })
            },
            splice: function(t, i, n, r) {
                var s = i && i.length,
                    a = n === e;
                n = a ? t.length : n, n > t.length && (n = t.length);
                for (var o = 0; o < s; o++) i[o]._index = n + o;
                if (a) return t.push.apply(t, i), [];
                var h = [n, r];
                i && h.push.apply(h, i);
                for (var u = t.splice.apply(t, h), o = 0, l = u.length; o < l; o++) u[o]._index = e;
                for (var o = n + s, l = t.length; o < l; o++) t[o]._index = o;
                return u
            },
            capitalize: function(t) {
                return t.replace(/\b[a-z]/g, function(t) {
                    return t.toUpperCase()
                })
            },
            camelize: function(t) {
                return t.replace(/-(.)/g, function(t, e) {
                    return e.toUpperCase()
                })
            },
            hyphenate: function(t) {
                return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
            }
        }
    });
    var s = {
            on: function(t, e) {
                if ("string" != typeof t) r.each(t, function(t, e) {
                    this.on(e, t)
                }, this);
                else {
                    var i = this._eventTypes,
                        n = i && i[t],
                        s = this._callbacks = this._callbacks || {};
                    s = s[t] = s[t] || [], s.indexOf(e) === -1 && (s.push(e), n && n.install && 1 === s.length && n.install.call(this, t))
                }
                return this
            },
            off: function(t, e) {
                if ("string" != typeof t) return void r.each(t, function(t, e) {
                    this.off(e, t)
                }, this);
                var i, n = this._eventTypes,
                    s = n && n[t],
                    a = this._callbacks && this._callbacks[t];
                return a && (!e || (i = a.indexOf(e)) !== -1 && 1 === a.length ? (s && s.uninstall && s.uninstall.call(this, t), delete this._callbacks[t]) : i !== -1 && a.splice(i, 1)), this
            },
            once: function(t, e) {
                return this.on(t, function() {
                    e.apply(this, arguments), this.off(t, e)
                })
            },
            emit: function(t, e) {
                var i = this._callbacks && this._callbacks[t];
                if (!i) return !1;
                var n = r.slice(arguments, 1),
                    s = e && e.target && !e.currentTarget;
                i = i.slice(), s && (e.currentTarget = this);
                for (var a = 0, o = i.length; a < o; a++)
                    if (0 == i[a].apply(this, n)) {
                        e && e.stop && e.stop();
                        break
                    }
                return s && delete e.currentTarget, !0
            },
            responds: function(t) {
                return !(!this._callbacks || !this._callbacks[t])
            },
            attach: "#on",
            detach: "#off",
            fire: "#emit",
            _installEvents: function(t) {
                var e = this._eventTypes,
                    i = this._callbacks,
                    n = t ? "install" : "uninstall";
                if (e)
                    for (var r in i)
                        if (i[r].length > 0) {
                            var s = e[r],
                                a = s && s[n];
                            a && a.call(this, r)
                        }
            },
            statics: {
                inject: function rt(t) {
                    var e = t._events;
                    if (e) {
                        var i = {};
                        r.each(e, function(e, n) {
                            var s = "string" == typeof e,
                                a = s ? e : n,
                                o = r.capitalize(a),
                                h = a.substring(2).toLowerCase();
                            i[h] = s ? {} : e, a = "_" + a, t["get" + o] = function() {
                                return this[a]
                            }, t["set" + o] = function(t) {
                                var e = this[a];
                                e && this.off(h, e), t && this.on(h, t), this[a] = t
                            }
                        }), t._eventTypes = i
                    }
                    return rt.base.apply(this, arguments)
                }
            }
        },
        a = r.extend({
            _class: "PaperScope",
            initialize: function st() {
                paper = this, this.settings = new r({
                    applyMatrix: !0,
                    insertItems: !0,
                    handleSize: 4,
                    hitTolerance: 0
                }), this.project = null, this.projects = [], this.tools = [], this._id = st._id++, st._scopes[this._id] = this;
                var e = st.prototype;
                if (!this.support) {
                    var i = Q.getContext(1, 1) || {};
                    e.support = {
                        nativeDash: "setLineDash" in i || "mozDash" in i,
                        nativeBlendModes: tt.nativeModes
                    }, Q.release(i)
                }
                if (!this.agent) {
                    var n = t.navigator.userAgent.toLowerCase(),
                        s = (/(darwin|win|mac|linux|freebsd|sunos)/.exec(n) || [])[0],
                        a = "darwin" === s ? "mac" : s,
                        o = e.agent = e.browser = {
                            platform: a
                        };
                    a && (o[a] = !0), n.replace(/(opera|chrome|safari|webkit|firefox|msie|trident|atom|node)\/?\s*([.\d]+)(?:.*version\/([.\d]+))?(?:.*rv\:v?([.\d]+))?/g, function(t, e, i, n, r) {
                        if (!o.chrome) {
                            var s = "opera" === e ? n : /^(node|trident)$/.test(e) ? r : i;
                            o.version = s, o.versionNumber = parseFloat(s), e = "trident" === e ? "msie" : e, o.name = e, o[e] = !0
                        }
                    }), o.chrome && delete o.webkit, o.atom && delete o.chrome
                }
            },
            version: "0.11.4",
            getView: function() {
                var t = this.project;
                return t && t._view
            },
            getPaper: function() {
                return this
            },
            execute: function(t, e) {
                paper.PaperScript.execute(t, this, e), U.updateFocus()
            },
            install: function(t) {
                var e = this;
                r.each(["project", "view", "tool"], function(i) {
                    r.define(t, i, {
                        configurable: !0,
                        get: function() {
                            return e[i]
                        }
                    })
                });
                for (var i in this) !/^_/.test(i) && this[i] && (t[i] = this[i])
            },
            setup: function(t) {
                return paper = this, this.project = new y(t), this
            },
            createCanvas: function(t, e) {
                return Q.getCanvas(t, e)
            },
            activate: function() {
                paper = this
            },
            clear: function() {
                for (var t = this.projects, e = this.tools, i = t.length - 1; i >= 0; i--) t[i].remove();
                for (var i = e.length - 1; i >= 0; i--) e[i].remove()
            },
            remove: function() {
                this.clear(), delete a._scopes[this._id]
            },
            statics: new function() {
                function t(t) {
                    return t += "Attribute",
                        function(e, i) {
                            return e[t](i) || e[t]("data-paper-" + i)
                        }
                }
                return {
                    _scopes: {},
                    _id: 0,
                    get: function(t) {
                        return this._scopes[t] || null
                    },
                    getAttribute: t("get"),
                    hasAttribute: t("has")
                }
            }
        }),
        o = r.extend(s, {
            initialize: function(t) {
                this._scope = paper, this._index = this._scope[this._list].push(this) - 1, !t && this._scope[this._reference] || this.activate()
            },
            activate: function() {
                if (!this._scope) return !1;
                var t = this._scope[this._reference];
                return t && t !== this && t.emit("deactivate"), this._scope[this._reference] = this, this.emit("activate", t), !0
            },
            isActive: function() {
                return this._scope[this._reference] === this
            },
            remove: function() {
                return null != this._index && (r.splice(this._scope[this._list], null, this._index, 1), this._scope[this._reference] == this && (this._scope[this._reference] = null), this._scope = null, !0)
            },
            getView: function() {
                return this._scope.getView()
            }
        }),
        h = r.extend({
            initialize: function(t) {
                this.precision = r.pick(t, 5), this.multiplier = Math.pow(10, this.precision)
            },
            number: function(t) {
                return this.precision < 16 ? Math.round(t * this.multiplier) / this.multiplier : t
            },
            pair: function(t, e, i) {
                return this.number(t) + (i || ",") + this.number(e)
            },
            point: function(t, e) {
                return this.number(t.x) + (e || ",") + this.number(t.y)
            },
            size: function(t, e) {
                return this.number(t.width) + (e || ",") + this.number(t.height)
            },
            rectangle: function(t, e) {
                return this.point(t, e) + (e || ",") + this.size(t, e)
            }
        });
    h.instance = new h;
    var u = new function() {
            function t(t, e, i) {
                return t < e ? e : t > i ? i : t
            }

            function e(t, e, i) {
                function n(t) {
                    var e = 134217729 * t,
                        i = t - e,
                        n = i + e,
                        r = t - n;
                    return [n, r]
                }
                var r = e * e - t * i,
                    a = e * e + t * i;
                if (3 * s(r) < a) {
                    var o = n(t),
                        h = n(e),
                        u = n(i),
                        l = e * e,
                        c = h[0] * h[0] - l + 2 * h[0] * h[1] + h[1] * h[1],
                        f = t * i,
                        d = o[0] * u[0] - f + o[0] * u[1] + o[1] * u[0] + o[1] * u[1];
                    r = l - f + (c - d)
                }
                return r
            }

            function i() {
                var t = Math.max.apply(Math, arguments);
                return t && (t < 1e-8 || t > 1e8) ? o(2, -Math.round(h(t))) : 0
            }
            var n = [
                    [.5773502691896257],
                    [0, .7745966692414834],
                    [.33998104358485626, .8611363115940526],
                    [0, .5384693101056831, .906179845938664],
                    [.2386191860831969, .6612093864662645, .932469514203152],
                    [0, .4058451513773972, .7415311855993945, .9491079123427585],
                    [.1834346424956498, .525532409916329, .7966664774136267, .9602898564975363],
                    [0, .3242534234038089, .6133714327005904, .8360311073266358, .9681602395076261],
                    [.14887433898163122, .4333953941292472, .6794095682990244, .8650633666889845, .9739065285171717],
                    [0, .26954315595234496, .5190961292068118, .7301520055740494, .8870625997680953, .978228658146057],
                    [.1252334085114689, .3678314989981802, .5873179542866175, .7699026741943047, .9041172563704749, .9815606342467192],
                    [0, .2304583159551348, .44849275103644687, .6423493394403402, .8015780907333099, .9175983992229779, .9841830547185881],
                    [.10805494870734367, .31911236892788974, .5152486363581541, .6872929048116855, .827201315069765, .9284348836635735, .9862838086968123],
                    [0, .20119409399743451, .3941513470775634, .5709721726085388, .7244177313601701, .8482065834104272, .937273392400706, .9879925180204854],
                    [.09501250983763744, .2816035507792589, .45801677765722737, .6178762444026438, .755404408355003, .8656312023878318, .9445750230732326, .9894009349916499]
                ],
                r = [
                    [1],
                    [.8888888888888888, .5555555555555556],
                    [.6521451548625461, .34785484513745385],
                    [.5688888888888889, .47862867049936647, .23692688505618908],
                    [.46791393457269104, .3607615730481386, .17132449237917036],
                    [.4179591836734694, .3818300505051189, .27970539148927664, .1294849661688697],
                    [.362683783378362, .31370664587788727, .22238103445337448, .10122853629037626],
                    [.3302393550012598, .31234707704000286, .26061069640293544, .1806481606948574, .08127438836157441],
                    [.29552422471475287, .26926671930999635, .21908636251598204, .1494513491505806, .06667134430868814],
                    [.2729250867779006, .26280454451024665, .23319376459199048, .18629021092773426, .1255803694649046, .05566856711617366],
                    [.24914704581340277, .2334925365383548, .20316742672306592, .16007832854334622, .10693932599531843, .04717533638651183],
                    [.2325515532308739, .22628318026289723, .2078160475368885, .17814598076194574, .13887351021978725, .09212149983772845, .04048400476531588],
                    [.2152638534631578, .2051984637212956, .18553839747793782, .15720316715819355, .12151857068790319, .08015808715976021, .03511946033175186],
                    [.2025782419255613, .19843148532711158, .1861610000155622, .16626920581699392, .13957067792615432, .10715922046717194, .07036604748810812, .03075324199611727],
                    [.1894506104550685, .18260341504492358, .16915651939500254, .14959598881657674, .12462897125553388, .09515851168249279, .062253523938647894, .027152459411754096]
                ],
                s = Math.abs,
                a = Math.sqrt,
                o = Math.pow,
                h = Math.log2 || function(t) {
                    return Math.log(t) * Math.LOG2E
                },
                l = 1e-12,
                c = 1.12e-16;
            return {
                EPSILON: l,
                MACHINE_EPSILON: c,
                CURVETIME_EPSILON: 1e-8,
                GEOMETRIC_EPSILON: 1e-7,
                TRIGONOMETRIC_EPSILON: 1e-8,
                KAPPA: 4 * (a(2) - 1) / 3,
                isZero: function(t) {
                    return t >= -l && t <= l
                },
                clamp: t,
                integrate: function(t, e, i, s) {
                    for (var a = n[s - 2], o = r[s - 2], h = .5 * (i - e), u = h + e, l = 0, c = s + 1 >> 1, f = 1 & s ? o[l++] * t(u) : 0; l < c;) {
                        var d = h * a[l];
                        f += o[l++] * (t(u + d) + t(u - d))
                    }
                    return h * f
                },
                findRoot: function(e, i, n, r, a, o, h) {
                    for (var u = 0; u < o; u++) {
                        var l = e(n),
                            c = l / i(n),
                            f = n - c;
                        if (s(c) < h) {
                            n = f;
                            break
                        }
                        l > 0 ? (a = n, n = f <= r ? .5 * (r + a) : f) : (r = n, n = f >= a ? .5 * (r + a) : f)
                    }
                    return t(n, r, a)
                },
                solveQuadratic: function(n, r, o, h, u, f) {
                    var d, _ = 1 / 0;
                    if (s(n) < l) {
                        if (s(r) < l) return s(o) < l ? -1 : 0;
                        d = -o / r
                    } else {
                        r *= -.5;
                        var g = e(n, r, o);
                        if (g && s(g) < c) {
                            var v = i(s(n), s(r), s(o));
                            v && (n *= v, r *= v, o *= v, g = e(n, r, o))
                        }
                        if (g >= -c) {
                            var p = g < 0 ? 0 : a(g),
                                m = r + (r < 0 ? -p : p);
                            0 === m ? (d = o / n, _ = -d) : (d = m / n, _ = o / m)
                        }
                    }
                    var y = 0,
                        w = null == u,
                        x = u - l,
                        b = f + l;
                    return isFinite(d) && (w || d > x && d < b) && (h[y++] = w ? d : t(d, u, f)), _ !== d && isFinite(_) && (w || _ > x && _ < b) && (h[y++] = w ? _ : t(_, u, f)), y
                },
                solveCubic: function(e, n, r, h, f, d, _) {
                    function g(t) {
                        v = t;
                        var i = e * v;
                        p = i + n, m = p * v + r, y = (i + p) * v + m, w = m * v + h
                    }
                    var v, p, m, y, w, x = i(s(e), s(n), s(r), s(h));
                    if (x && (e *= x, n *= x, r *= x, h *= x), s(e) < l) e = n, p = r, m = h, v = 1 / 0;
                    else if (s(h) < l) p = n, m = r, v = 0;
                    else {
                        g(-(n / e) / 3);
                        var b = w / e,
                            C = o(s(b), 1 / 3),
                            S = b < 0 ? -1 : 1,
                            P = -y / e,
                            I = P > 0 ? 1.324717957244746 * Math.max(C, a(P)) : C,
                            M = v - S * I;
                        if (M !== v) {
                            do g(M), M = 0 === y ? v : v - w / y / (1 + c); while (S * M > S * v);
                            s(e) * v * v > s(h / v) && (m = -h / v, p = (m - r) / v)
                        }
                    }
                    var T = u.solveQuadratic(e, p, m, f, d, _),
                        z = null == d;
                    return isFinite(v) && (0 === T || T > 0 && v !== f[0] && v !== f[1]) && (z || v > d - l && v < _ + l) && (f[T++] = z ? v : t(v, d, _)), T
                }
            }
        },
        l = {
            _id: 1,
            _pools: {},
            get: function(t) {
                if (t) {
                    var e = this._pools[t];
                    return e || (e = this._pools[t] = {
                        _id: 1
                    }), e._id++
                }
                return this._id++
            }
        },
        c = r.extend({
            _class: "Point",
            _readIndex: !0,
            initialize: function(t, e) {
                var i = typeof t,
                    n = this.__read,
                    r = 0;
                if ("number" === i) {
                    var s = "number" == typeof e;
                    this._set(t, s ? e : t), n && (r = s ? 2 : 1)
                } else if ("undefined" === i || null === t) this._set(0, 0), n && (r = null === t ? 1 : 0);
                else {
                    var a = "string" === i ? t.split(/[\s,]+/) || [] : t;
                    r = 1, Array.isArray(a) ? this._set(+a[0], +(a.length > 1 ? a[1] : a[0])) : "x" in a ? this._set(a.x || 0, a.y || 0) : "width" in a ? this._set(a.width || 0, a.height || 0) : "angle" in a ? (this._set(a.length || 0, 0), this.setAngle(a.angle || 0)) : (this._set(0, 0), r = 0)
                }
                return n && (this.__read = r), this
            },
            set: "#initialize",
            _set: function(t, e) {
                return this.x = t, this.y = e, this
            },
            equals: function(t) {
                return this === t || t && (this.x === t.x && this.y === t.y || Array.isArray(t) && this.x === t[0] && this.y === t[1]) || !1
            },
            clone: function() {
                return new c(this.x, this.y)
            },
            toString: function() {
                var t = h.instance;
                return "{ x: " + t.number(this.x) + ", y: " + t.number(this.y) + " }"
            },
            _serialize: function(t) {
                var e = t.formatter;
                return [e.number(this.x), e.number(this.y)]
            },
            getLength: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            },
            setLength: function(t) {
                if (this.isZero()) {
                    var e = this._angle || 0;
                    this._set(Math.cos(e) * t, Math.sin(e) * t)
                } else {
                    var i = t / this.getLength();
                    u.isZero(i) && this.getAngle(), this._set(this.x * i, this.y * i)
                }
            },
            getAngle: function() {
                return 180 * this.getAngleInRadians.apply(this, arguments) / Math.PI
            },
            setAngle: function(t) {
                this.setAngleInRadians.call(this, t * Math.PI / 180)
            },
            getAngleInDegrees: "#getAngle",
            setAngleInDegrees: "#setAngle",
            getAngleInRadians: function() {
                if (arguments.length) {
                    var t = c.read(arguments),
                        e = this.getLength() * t.getLength();
                    if (u.isZero(e)) return NaN;
                    var i = this.dot(t) / e;
                    return Math.acos(i < -1 ? -1 : i > 1 ? 1 : i)
                }
                return this.isZero() ? this._angle || 0 : this._angle = Math.atan2(this.y, this.x)
            },
            setAngleInRadians: function(t) {
                if (this._angle = t, !this.isZero()) {
                    var e = this.getLength();
                    this._set(Math.cos(t) * e, Math.sin(t) * e)
                }
            },
            getQuadrant: function() {
                return this.x >= 0 ? this.y >= 0 ? 1 : 4 : this.y >= 0 ? 2 : 3
            }
        }, {
            beans: !1,
            getDirectedAngle: function() {
                var t = c.read(arguments);
                return 180 * Math.atan2(this.cross(t), this.dot(t)) / Math.PI
            },
            getDistance: function() {
                var t = c.read(arguments),
                    e = t.x - this.x,
                    i = t.y - this.y,
                    n = e * e + i * i,
                    s = r.read(arguments);
                return s ? n : Math.sqrt(n)
            },
            normalize: function(t) {
                t === e && (t = 1);
                var i = this.getLength(),
                    n = 0 !== i ? t / i : 0,
                    r = new c(this.x * n, this.y * n);
                return n >= 0 && (r._angle = this._angle), r
            },
            rotate: function(t, e) {
                if (0 === t) return this.clone();
                t = t * Math.PI / 180;
                var i = e ? this.subtract(e) : this,
                    n = Math.sin(t),
                    r = Math.cos(t);
                return i = new c(i.x * r - i.y * n, i.x * n + i.y * r), e ? i.add(e) : i
            },
            transform: function(t) {
                return t ? t._transformPoint(this) : this
            },
            add: function() {
                var t = c.read(arguments);
                return new c(this.x + t.x, this.y + t.y)
            },
            subtract: function() {
                var t = c.read(arguments);
                return new c(this.x - t.x, this.y - t.y)
            },
            multiply: function() {
                var t = c.read(arguments);
                return new c(this.x * t.x, this.y * t.y)
            },
            divide: function() {
                var t = c.read(arguments);
                return new c(this.x / t.x, this.y / t.y)
            },
            modulo: function() {
                var t = c.read(arguments);
                return new c(this.x % t.x, this.y % t.y)
            },
            negate: function() {
                return new c((-this.x), (-this.y))
            },
            isInside: function() {
                return g.read(arguments).contains(this)
            },
            isClose: function() {
                var t = c.read(arguments),
                    e = r.read(arguments);
                return this.getDistance(t) <= e
            },
            isCollinear: function() {
                var t = c.read(arguments);
                return c.isCollinear(this.x, this.y, t.x, t.y)
            },
            isColinear: "#isCollinear",
            isOrthogonal: function() {
                var t = c.read(arguments);
                return c.isOrthogonal(this.x, this.y, t.x, t.y)
            },
            isZero: function() {
                var t = u.isZero;
                return t(this.x) && t(this.y)
            },
            isNaN: function() {
                return isNaN(this.x) || isNaN(this.y)
            },
            isInQuadrant: function(t) {
                return this.x * (t > 1 && t < 4 ? -1 : 1) >= 0 && this.y * (t > 2 ? -1 : 1) >= 0
            },
            dot: function() {
                var t = c.read(arguments);
                return this.x * t.x + this.y * t.y
            },
            cross: function() {
                var t = c.read(arguments);
                return this.x * t.y - this.y * t.x
            },
            project: function() {
                var t = c.read(arguments),
                    e = t.isZero() ? 0 : this.dot(t) / t.dot(t);
                return new c(t.x * e, t.y * e)
            },
            statics: {
                min: function() {
                    var t = c.read(arguments),
                        e = c.read(arguments);
                    return new c(Math.min(t.x, e.x), Math.min(t.y, e.y))
                },
                max: function() {
                    var t = c.read(arguments),
                        e = c.read(arguments);
                    return new c(Math.max(t.x, e.x), Math.max(t.y, e.y))
                },
                random: function() {
                    return new c(Math.random(), Math.random())
                },
                isCollinear: function(t, e, i, n) {
                    return Math.abs(t * n - e * i) <= 1e-8 * Math.sqrt((t * t + e * e) * (i * i + n * n))
                },
                isOrthogonal: function(t, e, i, n) {
                    return Math.abs(t * i + e * n) <= 1e-8 * Math.sqrt((t * t + e * e) * (i * i + n * n))
                }
            }
        }, r.each(["round", "ceil", "floor", "abs"], function(t) {
            var e = Math[t];
            this[t] = function() {
                return new c(e(this.x), e(this.y))
            }
        }, {})),
        f = c.extend({
            initialize: function(t, e, i, n) {
                this._x = t, this._y = e, this._owner = i, this._setter = n
            },
            _set: function(t, e, i) {
                return this._x = t, this._y = e, i || this._owner[this._setter](this), this
            },
            getX: function() {
                return this._x
            },
            setX: function(t) {
                this._x = t, this._owner[this._setter](this)
            },
            getY: function() {
                return this._y
            },
            setY: function(t) {
                this._y = t, this._owner[this._setter](this)
            },
            isSelected: function() {
                return !!(this._owner._selection & this._getSelection())
            },
            setSelected: function(t) {
                this._owner._changeSelection(this._getSelection(), t)
            },
            _getSelection: function() {
                return "setPosition" === this._setter ? 4 : 0
            }
        }),
        d = r.extend({
            _class: "Size",
            _readIndex: !0,
            initialize: function(t, e) {
                var i = typeof t,
                    n = this.__read,
                    r = 0;
                if ("number" === i) {
                    var s = "number" == typeof e;
                    this._set(t, s ? e : t), n && (r = s ? 2 : 1)
                } else if ("undefined" === i || null === t) this._set(0, 0), n && (r = null === t ? 1 : 0);
                else {
                    var a = "string" === i ? t.split(/[\s,]+/) || [] : t;
                    r = 1, Array.isArray(a) ? this._set(+a[0], +(a.length > 1 ? a[1] : a[0])) : "width" in a ? this._set(a.width || 0, a.height || 0) : "x" in a ? this._set(a.x || 0, a.y || 0) : (this._set(0, 0), r = 0)
                }
                return n && (this.__read = r), this
            },
            set: "#initialize",
            _set: function(t, e) {
                return this.width = t, this.height = e, this
            },
            equals: function(t) {
                return t === this || t && (this.width === t.width && this.height === t.height || Array.isArray(t) && this.width === t[0] && this.height === t[1]) || !1
            },
            clone: function() {
                return new d(this.width, this.height)
            },
            toString: function() {
                var t = h.instance;
                return "{ width: " + t.number(this.width) + ", height: " + t.number(this.height) + " }"
            },
            _serialize: function(t) {
                var e = t.formatter;
                return [e.number(this.width), e.number(this.height)]
            },
            add: function() {
                var t = d.read(arguments);
                return new d(this.width + t.width, this.height + t.height)
            },
            subtract: function() {
                var t = d.read(arguments);
                return new d(this.width - t.width, this.height - t.height)
            },
            multiply: function() {
                var t = d.read(arguments);
                return new d(this.width * t.width, this.height * t.height)
            },
            divide: function() {
                var t = d.read(arguments);
                return new d(this.width / t.width, this.height / t.height)
            },
            modulo: function() {
                var t = d.read(arguments);
                return new d(this.width % t.width, this.height % t.height)
            },
            negate: function() {
                return new d((-this.width), (-this.height))
            },
            isZero: function() {
                var t = u.isZero;
                return t(this.width) && t(this.height)
            },
            isNaN: function() {
                return isNaN(this.width) || isNaN(this.height)
            },
            statics: {
                min: function(t, e) {
                    return new d(Math.min(t.width, e.width), Math.min(t.height, e.height))
                },
                max: function(t, e) {
                    return new d(Math.max(t.width, e.width), Math.max(t.height, e.height))
                },
                random: function() {
                    return new d(Math.random(), Math.random())
                }
            }
        }, r.each(["round", "ceil", "floor", "abs"], function(t) {
            var e = Math[t];
            this[t] = function() {
                return new d(e(this.width), e(this.height))
            }
        }, {})),
        _ = d.extend({
            initialize: function(t, e, i, n) {
                this._width = t, this._height = e, this._owner = i, this._setter = n
            },
            _set: function(t, e, i) {
                return this._width = t, this._height = e, i || this._owner[this._setter](this), this
            },
            getWidth: function() {
                return this._width
            },
            setWidth: function(t) {
                this._width = t, this._owner[this._setter](this)
            },
            getHeight: function() {
                return this._height
            },
            setHeight: function(t) {
                this._height = t, this._owner[this._setter](this)
            }
        }),
        g = r.extend({
            _class: "Rectangle",
            _readIndex: !0,
            beans: !0,
            initialize: function(t, i, n, s) {
                var a, o = typeof t;
                if ("number" === o ? (this._set(t, i, n, s), a = 4) : "undefined" === o || null === t ? (this._set(0, 0, 0, 0), a = null === t ? 1 : 0) : 1 === arguments.length && (Array.isArray(t) ? (this._set.apply(this, t), a = 1) : t.x !== e || t.width !== e ? (this._set(t.x || 0, t.y || 0, t.width || 0, t.height || 0), a = 1) : t.from === e && t.to === e && (this._set(0, 0, 0, 0), r.filter(this, t), a = 1)), a === e) {
                    var h, u, l = c.readNamed(arguments, "from"),
                        f = r.peek(arguments),
                        _ = l.x,
                        g = l.y;
                    if (f && f.x !== e || r.hasNamed(arguments, "to")) {
                        var v = c.readNamed(arguments, "to");
                        h = v.x - _, u = v.y - g, h < 0 && (_ = v.x, h = -h), u < 0 && (g = v.y, u = -u)
                    } else {
                        var p = d.read(arguments);
                        h = p.width, u = p.height
                    }
                    this._set(_, g, h, u), a = arguments.__index;
                    var m = arguments.__filtered;
                    m && (this.__filtered = m)
                }
                return this.__read && (this.__read = a), this
            },
            set: "#initialize",
            _set: function(t, e, i, n) {
                return this.x = t, this.y = e, this.width = i, this.height = n, this
            },
            clone: function() {
                return new g(this.x, this.y, this.width, this.height)
            },
            equals: function(t) {
                var e = r.isPlainValue(t) ? g.read(arguments) : t;
                return e === this || e && this.x === e.x && this.y === e.y && this.width === e.width && this.height === e.height || !1
            },
            toString: function() {
                var t = h.instance;
                return "{ x: " + t.number(this.x) + ", y: " + t.number(this.y) + ", width: " + t.number(this.width) + ", height: " + t.number(this.height) + " }"
            },
            _serialize: function(t) {
                var e = t.formatter;
                return [e.number(this.x), e.number(this.y), e.number(this.width), e.number(this.height)]
            },
            getPoint: function(t) {
                var e = t ? c : f;
                return new e(this.x, this.y, this, "setPoint")
            },
            setPoint: function() {
                var t = c.read(arguments);
                this.x = t.x, this.y = t.y
            },
            getSize: function(t) {
                var e = t ? d : _;
                return new e(this.width, this.height, this, "setSize")
            },
            _fw: 1,
            _fh: 1,
            setSize: function() {
                var t = d.read(arguments),
                    e = this._sx,
                    i = this._sy,
                    n = t.width,
                    r = t.height;
                e && (this.x += (this.width - n) * e), i && (this.y += (this.height - r) * i), this.width = n, this.height = r, this._fw = this._fh = 1
            },
            getLeft: function() {
                return this.x
            },
            setLeft: function(t) {
                if (!this._fw) {
                    var e = t - this.x;
                    this.width -= .5 === this._sx ? 2 * e : e
                }
                this.x = t, this._sx = this._fw = 0
            },
            getTop: function() {
                return this.y
            },
            setTop: function(t) {
                if (!this._fh) {
                    var e = t - this.y;
                    this.height -= .5 === this._sy ? 2 * e : e
                }
                this.y = t, this._sy = this._fh = 0
            },
            getRight: function() {
                return this.x + this.width
            },
            setRight: function(t) {
                if (!this._fw) {
                    var e = t - this.x;
                    this.width = .5 === this._sx ? 2 * e : e
                }
                this.x = t - this.width, this._sx = 1, this._fw = 0
            },
            getBottom: function() {
                return this.y + this.height
            },
            setBottom: function(t) {
                if (!this._fh) {
                    var e = t - this.y;
                    this.height = .5 === this._sy ? 2 * e : e
                }
                this.y = t - this.height, this._sy = 1, this._fh = 0
            },
            getCenterX: function() {
                return this.x + this.width / 2
            },
            setCenterX: function(t) {
                this._fw || .5 === this._sx ? this.x = t - this.width / 2 : (this._sx && (this.x += 2 * (t - this.x) * this._sx), this.width = 2 * (t - this.x)), this._sx = .5, this._fw = 0
            },
            getCenterY: function() {
                return this.y + this.height / 2
            },
            setCenterY: function(t) {
                this._fh || .5 === this._sy ? this.y = t - this.height / 2 : (this._sy && (this.y += 2 * (t - this.y) * this._sy), this.height = 2 * (t - this.y)), this._sy = .5, this._fh = 0
            },
            getCenter: function(t) {
                var e = t ? c : f;
                return new e(this.getCenterX(), this.getCenterY(), this, "setCenter")
            },
            setCenter: function() {
                var t = c.read(arguments);
                return this.setCenterX(t.x), this.setCenterY(t.y), this
            },
            getArea: function() {
                return this.width * this.height
            },
            isEmpty: function() {
                return 0 === this.width || 0 === this.height
            },
            contains: function(t) {
                return t && t.width !== e || 4 === (Array.isArray(t) ? t : arguments).length ? this._containsRectangle(g.read(arguments)) : this._containsPoint(c.read(arguments))
            },
            _containsPoint: function(t) {
                var e = t.x,
                    i = t.y;
                return e >= this.x && i >= this.y && e <= this.x + this.width && i <= this.y + this.height
            },
            _containsRectangle: function(t) {
                var e = t.x,
                    i = t.y;
                return e >= this.x && i >= this.y && e + t.width <= this.x + this.width && i + t.height <= this.y + this.height
            },
            intersects: function() {
                var t = g.read(arguments),
                    e = r.read(arguments) || 0;
                return t.x + t.width > this.x - e && t.y + t.height > this.y - e && t.x < this.x + this.width + e && t.y < this.y + this.height + e
            },
            intersect: function() {
                var t = g.read(arguments),
                    e = Math.max(this.x, t.x),
                    i = Math.max(this.y, t.y),
                    n = Math.min(this.x + this.width, t.x + t.width),
                    r = Math.min(this.y + this.height, t.y + t.height);
                return new g(e, i, n - e, r - i)
            },
            unite: function() {
                var t = g.read(arguments),
                    e = Math.min(this.x, t.x),
                    i = Math.min(this.y, t.y),
                    n = Math.max(this.x + this.width, t.x + t.width),
                    r = Math.max(this.y + this.height, t.y + t.height);
                return new g(e, i, n - e, r - i)
            },
            include: function() {
                var t = c.read(arguments),
                    e = Math.min(this.x, t.x),
                    i = Math.min(this.y, t.y),
                    n = Math.max(this.x + this.width, t.x),
                    r = Math.max(this.y + this.height, t.y);
                return new g(e, i, n - e, r - i)
            },
            expand: function() {
                var t = d.read(arguments),
                    e = t.width,
                    i = t.height;
                return new g(this.x - e / 2, this.y - i / 2, this.width + e, this.height + i)
            },
            scale: function(t, i) {
                return this.expand(this.width * t - this.width, this.height * (i === e ? t : i) - this.height)
            }
        }, r.each([
            ["Top", "Left"],
            ["Top", "Right"],
            ["Bottom", "Left"],
            ["Bottom", "Right"],
            ["Left", "Center"],
            ["Top", "Center"],
            ["Right", "Center"],
            ["Bottom", "Center"]
        ], function(t, e) {
            var i = t.join(""),
                n = /^[RL]/.test(i);
            e >= 4 && (t[1] += n ? "Y" : "X");
            var r = t[n ? 0 : 1],
                s = t[n ? 1 : 0],
                a = "get" + r,
                o = "get" + s,
                h = "set" + r,
                u = "set" + s,
                l = "get" + i,
                d = "set" + i;
            this[l] = function(t) {
                var e = t ? c : f;
                return new e(this[a](), this[o](), this, d)
            }, this[d] = function() {
                var t = c.read(arguments);
                this[h](t.x), this[u](t.y)
            }
        }, {
            beans: !0
        })),
        v = g.extend({
            initialize: function(t, e, i, n, r, s) {
                this._set(t, e, i, n, !0), this._owner = r, this._setter = s
            },
            _set: function(t, e, i, n, r) {
                return this._x = t, this._y = e, this._width = i, this._height = n, r || this._owner[this._setter](this), this
            }
        }, new function() {
            var t = g.prototype;
            return r.each(["x", "y", "width", "height"], function(t) {
                var e = r.capitalize(t),
                    i = "_" + t;
                this["get" + e] = function() {
                    return this[i]
                }, this["set" + e] = function(t) {
                    this[i] = t, this._dontNotify || this._owner[this._setter](this)
                }
            }, r.each(["Point", "Size", "Center", "Left", "Top", "Right", "Bottom", "CenterX", "CenterY", "TopLeft", "TopRight", "BottomLeft", "BottomRight", "LeftCenter", "TopCenter", "RightCenter", "BottomCenter"], function(e) {
                var i = "set" + e;
                this[i] = function() {
                    this._dontNotify = !0, t[i].apply(this, arguments), this._dontNotify = !1, this._owner[this._setter](this)
                }
            }, {
                isSelected: function() {
                    return !!(2 & this._owner._selection)
                },
                setSelected: function(t) {
                    var e = this._owner;
                    e._changeSelection && e._changeSelection(2, t)
                }
            }))
        }),
        p = r.extend({
            _class: "Matrix",
            initialize: function at(t, e) {
                var i = arguments.length,
                    n = !0;
                if (i >= 6 ? this._set.apply(this, arguments) : 1 === i || 2 === i ? t instanceof at ? this._set(t._a, t._b, t._c, t._d, t._tx, t._ty, e) : Array.isArray(t) ? this._set.apply(this, e ? t.concat([e]) : t) : n = !1 : i ? n = !1 : this.reset(), !n) throw new Error("Unsupported matrix parameters");
                return this
            },
            set: "#initialize",
            _set: function(t, e, i, n, r, s, a) {
                return this._a = t, this._b = e, this._c = i, this._d = n, this._tx = r, this._ty = s, a || this._changed(), this
            },
            _serialize: function(t, e) {
                return r.serialize(this.getValues(), t, !0, e)
            },
            _changed: function() {
                var t = this._owner;
                t && (t._applyMatrix ? t.transform(null, !0) : t._changed(9))
            },
            clone: function() {
                return new p(this._a, this._b, this._c, this._d, this._tx, this._ty)
            },
            equals: function(t) {
                return t === this || t && this._a === t._a && this._b === t._b && this._c === t._c && this._d === t._d && this._tx === t._tx && this._ty === t._ty
            },
            toString: function() {
                var t = h.instance;
                return "[[" + [t.number(this._a), t.number(this._c), t.number(this._tx)].join(", ") + "], [" + [t.number(this._b), t.number(this._d), t.number(this._ty)].join(", ") + "]]"
            },
            reset: function(t) {
                return this._a = this._d = 1, this._b = this._c = this._tx = this._ty = 0, t || this._changed(), this
            },
            apply: function(t, e) {
                var i = this._owner;
                return !!i && (i.transform(null, !0, r.pick(t, !0), e), this.isIdentity())
            },
            translate: function() {
                var t = c.read(arguments),
                    e = t.x,
                    i = t.y;
                return this._tx += e * this._a + i * this._c, this._ty += e * this._b + i * this._d, this._changed(), this
            },
            scale: function() {
                var t = c.read(arguments),
                    e = c.read(arguments, 0, {
                        readNull: !0
                    });
                return e && this.translate(e), this._a *= t.x, this._b *= t.x, this._c *= t.y, this._d *= t.y, e && this.translate(e.negate()), this._changed(), this
            },
            rotate: function(t) {
                t *= Math.PI / 180;
                var e = c.read(arguments, 1),
                    i = e.x,
                    n = e.y,
                    r = Math.cos(t),
                    s = Math.sin(t),
                    a = i - i * r + n * s,
                    o = n - i * s - n * r,
                    h = this._a,
                    u = this._b,
                    l = this._c,
                    f = this._d;
                return this._a = r * h + s * l, this._b = r * u + s * f, this._c = -s * h + r * l, this._d = -s * u + r * f, this._tx += a * h + o * l, this._ty += a * u + o * f, this._changed(), this
            },
            shear: function() {
                var t = c.read(arguments),
                    e = c.read(arguments, 0, {
                        readNull: !0
                    });
                e && this.translate(e);
                var i = this._a,
                    n = this._b;
                return this._a += t.y * this._c, this._b += t.y * this._d, this._c += t.x * i, this._d += t.x * n, e && this.translate(e.negate()), this._changed(), this
            },
            skew: function() {
                var t = c.read(arguments),
                    e = c.read(arguments, 0, {
                        readNull: !0
                    }),
                    i = Math.PI / 180,
                    n = new c(Math.tan(t.x * i), Math.tan(t.y * i));
                return this.shear(n, e)
            },
            append: function(t, e) {
                if (t) {
                    var i = this._a,
                        n = this._b,
                        r = this._c,
                        s = this._d,
                        a = t._a,
                        o = t._c,
                        h = t._b,
                        u = t._d,
                        l = t._tx,
                        c = t._ty;
                    this._a = a * i + h * r, this._c = o * i + u * r, this._b = a * n + h * s, this._d = o * n + u * s, this._tx += l * i + c * r, this._ty += l * n + c * s, e || this._changed()
                }
                return this
            },
            prepend: function(t, e) {
                if (t) {
                    var i = this._a,
                        n = this._b,
                        r = this._c,
                        s = this._d,
                        a = this._tx,
                        o = this._ty,
                        h = t._a,
                        u = t._c,
                        l = t._b,
                        c = t._d,
                        f = t._tx,
                        d = t._ty;
                    this._a = h * i + u * n, this._c = h * r + u * s, this._b = l * i + c * n, this._d = l * r + c * s, this._tx = h * a + u * o + f, this._ty = l * a + c * o + d, e || this._changed()
                }
                return this
            },
            appended: function(t) {
                return this.clone().append(t)
            },
            prepended: function(t) {
                return this.clone().prepend(t)
            },
            invert: function() {
                var t = this._a,
                    e = this._b,
                    i = this._c,
                    n = this._d,
                    r = this._tx,
                    s = this._ty,
                    a = t * n - e * i,
                    o = null;
                return a && !isNaN(a) && isFinite(r) && isFinite(s) && (this._a = n / a, this._b = -e / a, this._c = -i / a, this._d = t / a, this._tx = (i * s - n * r) / a, this._ty = (e * r - t * s) / a, o = this), o
            },
            inverted: function() {
                return this.clone().invert()
            },
            concatenate: "#append",
            preConcatenate: "#prepend",
            chain: "#appended",
            _shiftless: function() {
                return new p(this._a, this._b, this._c, this._d, 0, 0)
            },
            _orNullIfIdentity: function() {
                return this.isIdentity() ? null : this
            },
            isIdentity: function() {
                return 1 === this._a && 0 === this._b && 0 === this._c && 1 === this._d && 0 === this._tx && 0 === this._ty
            },
            isInvertible: function() {
                var t = this._a * this._d - this._c * this._b;
                return t && !isNaN(t) && isFinite(this._tx) && isFinite(this._ty)
            },
            isSingular: function() {
                return !this.isInvertible()
            },
            transform: function(t, e, i) {
                return arguments.length < 3 ? this._transformPoint(c.read(arguments)) : this._transformCoordinates(t, e, i)
            },
            _transformPoint: function(t, e, i) {
                var n = t.x,
                    r = t.y;
                return e || (e = new c), e._set(n * this._a + r * this._c + this._tx, n * this._b + r * this._d + this._ty, i)
            },
            _transformCoordinates: function(t, e, i) {
                for (var n = 0, r = 2 * i; n < r; n += 2) {
                    var s = t[n],
                        a = t[n + 1];
                    e[n] = s * this._a + a * this._c + this._tx, e[n + 1] = s * this._b + a * this._d + this._ty
                }
                return e
            },
            _transformCorners: function(t) {
                var e = t.x,
                    i = t.y,
                    n = e + t.width,
                    r = i + t.height,
                    s = [e, i, n, i, n, r, e, r];
                return this._transformCoordinates(s, s, 4)
            },
            _transformBounds: function(t, e, i) {
                for (var n = this._transformCorners(t), r = n.slice(0, 2), s = r.slice(), a = 2; a < 8; a++) {
                    var o = n[a],
                        h = 1 & a;
                    o < r[h] ? r[h] = o : o > s[h] && (s[h] = o)
                }
                return e || (e = new g), e._set(r[0], r[1], s[0] - r[0], s[1] - r[1], i)
            },
            inverseTransform: function() {
                return this._inverseTransform(c.read(arguments))
            },
            _inverseTransform: function(t, e, i) {
                var n = this._a,
                    r = this._b,
                    s = this._c,
                    a = this._d,
                    o = this._tx,
                    h = this._ty,
                    u = n * a - r * s,
                    l = null;
                if (u && !isNaN(u) && isFinite(o) && isFinite(h)) {
                    var f = t.x - this._tx,
                        d = t.y - this._ty;
                    e || (e = new c), l = e._set((f * a - d * s) / u, (d * n - f * r) / u, i)
                }
                return l
            },
            decompose: function() {
                var t, e, i, n = this._a,
                    r = this._b,
                    s = this._c,
                    a = this._d,
                    o = n * a - r * s,
                    h = Math.sqrt,
                    u = Math.atan2,
                    l = 180 / Math.PI;
                if (0 !== n || 0 !== r) {
                    var f = h(n * n + r * r);
                    t = Math.acos(n / f) * (r > 0 ? 1 : -1), e = [f, o / f], i = [u(n * s + r * a, f * f), 0]
                } else if (0 !== s || 0 !== a) {
                    var d = h(s * s + a * a);
                    t = Math.asin(s / d) * (a > 0 ? 1 : -1), e = [o / d, d], i = [0, u(n * s + r * a, d * d)]
                } else t = 0, i = e = [0, 0];
                return {
                    translation: this.getTranslation(),
                    rotation: t * l,
                    scaling: new c(e),
                    skewing: new c(i[0] * l, i[1] * l)
                }
            },
            getValues: function() {
                return [this._a, this._b, this._c, this._d, this._tx, this._ty]
            },
            getTranslation: function() {
                return new c(this._tx, this._ty)
            },
            getScaling: function() {
                return (this.decompose() || {}).scaling
            },
            getRotation: function() {
                return (this.decompose() || {}).rotation
            },
            applyToContext: function(t) {
                this.isIdentity() || t.transform(this._a, this._b, this._c, this._d, this._tx, this._ty)
            }
        }, r.each(["a", "b", "c", "d", "tx", "ty"], function(t) {
            var e = r.capitalize(t),
                i = "_" + t;
            this["get" + e] = function() {
                return this[i]
            }, this["set" + e] = function(t) {
                this[i] = t, this._changed()
            }
        }, {})),
        m = r.extend({
            _class: "Line",
            initialize: function(t, e, i, n, r) {
                var s = !1;
                arguments.length >= 4 ? (this._px = t, this._py = e, this._vx = i, this._vy = n, s = r) : (this._px = t.x, this._py = t.y, this._vx = e.x, this._vy = e.y, s = i), s || (this._vx -= this._px, this._vy -= this._py)
            },
            getPoint: function() {
                return new c(this._px, this._py)
            },
            getVector: function() {
                return new c(this._vx, this._vy)
            },
            getLength: function() {
                return this.getVector().getLength()
            },
            intersect: function(t, e) {
                return m.intersect(this._px, this._py, this._vx, this._vy, t._px, t._py, t._vx, t._vy, !0, e)
            },
            getSide: function(t, e) {
                return m.getSide(this._px, this._py, this._vx, this._vy, t.x, t.y, !0, e)
            },
            getDistance: function(t) {
                return Math.abs(this.getSignedDistance(t))
            },
            getSignedDistance: function(t) {
                return m.getSignedDistance(this._px, this._py, this._vx, this._vy, t.x, t.y, !0)
            },
            isCollinear: function(t) {
                return c.isCollinear(this._vx, this._vy, t._vx, t._vy)
            },
            isOrthogonal: function(t) {
                return c.isOrthogonal(this._vx, this._vy, t._vx, t._vy)
            },
            statics: {
                intersect: function(t, e, i, n, r, s, a, o, h, l) {
                    h || (i -= t, n -= e, a -= r, o -= s);
                    var f = i * o - n * a;
                    if (!u.isZero(f)) {
                        var d = t - r,
                            _ = e - s,
                            g = (a * _ - o * d) / f,
                            v = (i * _ - n * d) / f,
                            p = 1e-12,
                            m = -p,
                            y = 1 + p;
                        if (l || m < g && g < y && m < v && v < y) return l || (g = g <= 0 ? 0 : g >= 1 ? 1 : g), new c(t + g * i, e + g * n)
                    }
                },
                getSide: function(t, e, i, n, r, s, a, o) {
                    a || (i -= t, n -= e);
                    var h = r - t,
                        l = s - e,
                        c = h * n - l * i;
                    return !o && u.isZero(c) && (c = (h * i + h * i) / (i * i + n * n), c >= 0 && c <= 1 && (c = 0)), c < 0 ? -1 : c > 0 ? 1 : 0
                },
                getSignedDistance: function(t, e, i, n, r, s, a) {
                    return a || (i -= t, n -= e), 0 === i ? n > 0 ? r - t : t - r : 0 === n ? i < 0 ? s - e : e - s : ((r - t) * n - (s - e) * i) / Math.sqrt(i * i + n * n)
                },
                getDistance: function(t, e, i, n, r, s, a) {
                    return Math.abs(m.getSignedDistance(t, e, i, n, r, s, a))
                }
            }
        }),
        y = o.extend({
            _class: "Project",
            _list: "projects",
            _reference: "project",
            _compactSerialize: !0,
            initialize: function(t) {
                o.call(this, !0), this._children = [], this._namedChildren = {}, this._activeLayer = null, this._currentStyle = new V(null, null, this), this._view = U.create(this, t || Q.getCanvas(1, 1)), this._selectionItems = {}, this._selectionCount = 0, this._updateVersion = 0
            },
            _serialize: function(t, e) {
                return r.serialize(this._children, t, !0, e)
            },
            _changed: function(t, e) {
                if (1 & t) {
                    var i = this._view;
                    i && (i._needsUpdate = !0, !i._requested && i._autoUpdate && i.requestUpdate())
                }
                var n = this._changes;
                if (n && e) {
                    var r = this._changesById,
                        s = e._id,
                        a = r[s];
                    a ? a.flags |= t : n.push(r[s] = {
                        item: e,
                        flags: t
                    })
                }
            },
            clear: function() {
                for (var t = this._children, e = t.length - 1; e >= 0; e--) t[e].remove()
            },
            isEmpty: function() {
                return !this._children.length
            },
            remove: function ot() {
                return !!ot.base.call(this) && (this._view && this._view.remove(), !0)
            },
            getView: function() {
                return this._view
            },
            getCurrentStyle: function() {
                return this._currentStyle
            },
            setCurrentStyle: function(t) {
                this._currentStyle.set(t)
            },
            getIndex: function() {
                return this._index
            },
            getOptions: function() {
                return this._scope.settings
            },
            getLayers: function() {
                return this._children
            },
            getActiveLayer: function() {
                return this._activeLayer || new b({
                    project: this,
                    insert: !0
                })
            },
            getSymbolDefinitions: function() {
                var t = [],
                    e = {};
                return this.getItems({
                    "class": P,
                    match: function(i) {
                        var n = i._definition,
                            r = n._id;
                        return e[r] || (e[r] = !0, t.push(n)), !1
                    }
                }), t
            },
            getSymbols: "getSymbolDefinitions",
            getSelectedItems: function() {
                var t = this._selectionItems,
                    e = [];
                for (var i in t) {
                    var n = t[i],
                        r = n._selection;
                    1 & r && n.isInserted() ? e.push(n) : r || this._updateSelection(n)
                }
                return e
            },
            _updateSelection: function(t) {
                var e = t._id,
                    i = this._selectionItems;
                t._selection ? i[e] !== t && (this._selectionCount++, i[e] = t) : i[e] === t && (this._selectionCount--, delete i[e])
            },
            selectAll: function() {
                for (var t = this._children, e = 0, i = t.length; e < i; e++) t[e].setFullySelected(!0)
            },
            deselectAll: function() {
                var t = this._selectionItems;
                for (var e in t) t[e].setFullySelected(!1)
            },
            addLayer: function(t) {
                return this.insertLayer(e, t)
            },
            insertLayer: function(t, e) {
                if (e instanceof b) {
                    e._remove(!1, !0), r.splice(this._children, [e], t, 0), e._setProject(this, !0);
                    var i = e._name;
                    i && e.setName(i), this._changes && e._changed(5), this._activeLayer || (this._activeLayer = e)
                } else e = null;
                return e
            },
            _insertItem: function(t, i, n) {
                return i = this.insertLayer(t, i) || (this._activeLayer || this._insertItem(e, new b(w.NO_INSERT), !0)).insertChild(t, i), n && i.activate && i.activate(), i
            },
            getItems: function(t) {
                return w._getItems(this, t)
            },
            getItem: function(t) {
                return w._getItems(this, t, null, null, !0)[0] || null
            },
            importJSON: function(t) {
                this.activate();
                var e = this._activeLayer;
                return r.importJSON(t, e && e.isEmpty() && e)
            },
            removeOn: function(t) {
                var e = this._removeSets;
                if (e) {
                    "mouseup" === t && (e.mousedrag = null);
                    var i = e[t];
                    if (i) {
                        for (var n in i) {
                            var r = i[n];
                            for (var s in e) {
                                var a = e[s];
                                a && a != i && delete a[r._id]
                            }
                            r.remove()
                        }
                        e[t] = null
                    }
                }
            },
            draw: function(t, e, i) {
                this._updateVersion++, t.save(), e.applyToContext(t);
                for (var n = this._children, s = new r({
                        offset: new c(0, 0),
                        pixelRatio: i,
                        viewMatrix: e.isIdentity() ? null : e,
                        matrices: [new p],
                        updateMatrix: !0
                    }), a = 0, o = n.length; a < o; a++) n[a].draw(t, s);
                if (t.restore(), this._selectionCount > 0) {
                    t.save(), t.strokeWidth = 1;
                    var h = this._selectionItems,
                        u = this._scope.settings.handleSize,
                        l = this._updateVersion;
                    for (var f in h) h[f]._drawSelection(t, e, u, h, l);
                    t.restore()
                }
            }
        }),
        w = r.extend(s, {
            statics: {
                extend: function ht(t) {
                    return t._serializeFields && (t._serializeFields = r.set({}, this.prototype._serializeFields, t._serializeFields)), ht.base.apply(this, arguments)
                },
                NO_INSERT: {
                    insert: !1
                }
            },
            _class: "Item",
            _name: null,
            _applyMatrix: !0,
            _canApplyMatrix: !0,
            _canScaleStroke: !1,
            _pivot: null,
            _visible: !0,
            _blendMode: "normal",
            _opacity: 1,
            _locked: !1,
            _guide: !1,
            _clipMask: !1,
            _selection: 0,
            _selectBounds: !0,
            _selectChildren: !1,
            _serializeFields: {
                name: null,
                applyMatrix: null,
                matrix: new p,
                pivot: null,
                visible: !0,
                blendMode: "normal",
                opacity: 1,
                locked: !1,
                guide: !1,
                clipMask: !1,
                selected: !1,
                data: {}
            },
            _prioritize: ["applyMatrix"]
        }, new function() {
            var t = ["onMouseDown", "onMouseUp", "onMouseDrag", "onClick", "onDoubleClick", "onMouseMove", "onMouseEnter", "onMouseLeave"];
            return r.each(t, function(t) {
                this._events[t] = {
                    install: function(t) {
                        this.getView()._countItemEvent(t, 1)
                    },
                    uninstall: function(t) {
                        this.getView()._countItemEvent(t, -1)
                    }
                }
            }, {
                _events: {
                    onFrame: {
                        install: function() {
                            this.getView()._animateItem(this, !0)
                        },
                        uninstall: function() {
                            this.getView()._animateItem(this, !1)
                        }
                    },
                    onLoad: {},
                    onError: {}
                },
                statics: {
                    _itemHandlers: t
                }
            })
        }, {
            initialize: function() {},
            _initialize: function(t, i) {
                var n = t && r.isPlainObject(t),
                    s = n && t.internal === !0,
                    a = this._matrix = new p,
                    o = n && t.project || paper.project,
                    h = paper.settings;
                return this._id = s ? null : l.get(), this._parent = this._index = null, this._applyMatrix = this._canApplyMatrix && h.applyMatrix, i && a.translate(i), a._owner = this, this._style = new V(o._currentStyle, this, o), s || n && 0 == t.insert || !h.insertItems && (!n || t.insert !== !0) ? this._setProject(o) : (n && t.parent || o)._insertItem(e, this, !0), n && t !== w.NO_INSERT && this.set(t, {
                    internal: !0,
                    insert: !0,
                    project: !0,
                    parent: !0
                }), n
            },
            _serialize: function(t, e) {
                function i(i) {
                    for (var a in i) {
                        var o = s[a];
                        r.equals(o, "leading" === a ? 1.2 * i.fontSize : i[a]) || (n[a] = r.serialize(o, t, "data" !== a, e))
                    }
                }
                var n = {},
                    s = this;
                return i(this._serializeFields), this instanceof x || i(this._style._defaults), [this._class, n]
            },
            _changed: function(t) {
                var i = this._symbol,
                    n = this._parent || i,
                    r = this._project;
                8 & t && (this._bounds = this._position = this._decomposed = this._globalMatrix = e), n && 40 & t && w._clearBoundsCache(n), 2 & t && w._clearBoundsCache(this), r && r._changed(t, this), i && i._changed(t)
            },
            getId: function() {
                return this._id
            },
            getName: function() {
                return this._name
            },
            setName: function(t) {
                if (this._name && this._removeNamed(), t === +t + "") throw new Error("Names consisting only of numbers are not supported.");
                var i = this._getOwner();
                if (t && i) {
                    var n = i._children,
                        r = i._namedChildren;
                    (r[t] = r[t] || []).push(this), t in n || (n[t] = this)
                }
                this._name = t || e, this._changed(128)
            },
            getStyle: function() {
                return this._style
            },
            setStyle: function(t) {
                this.getStyle().set(t)
            }
        }, r.each(["locked", "visible", "blendMode", "opacity", "guide"], function(t) {
            var e = r.capitalize(t),
                i = "_" + t,
                n = {
                    locked: 128,
                    visible: 137
                };
            this["get" + e] = function() {
                return this[i]
            }, this["set" + e] = function(e) {
                e != this[i] && (this[i] = e, this._changed(n[t] || 129))
            }
        }, {}), {
            beans: !0,
            getSelection: function() {
                return this._selection
            },
            setSelection: function(t) {
                if (t !== this._selection) {
                    this._selection = t;
                    var e = this._project;
                    e && (e._updateSelection(this), this._changed(129))
                }
            },
            _changeSelection: function(t, e) {
                var i = this._selection;
                this.setSelection(e ? i | t : i & ~t)
            },
            isSelected: function() {
                if (this._selectChildren)
                    for (var t = this._children, e = 0, i = t.length; e < i; e++)
                        if (t[e].isSelected()) return !0;
                return !!(1 & this._selection)
            },
            setSelected: function(t) {
                if (this._selectChildren)
                    for (var e = this._children, i = 0, n = e.length; i < n; i++) e[i].setSelected(t);
                this._changeSelection(1, t)
            },
            isFullySelected: function() {
                var t = this._children,
                    e = !!(1 & this._selection);
                if (t && e) {
                    for (var i = 0, n = t.length; i < n; i++)
                        if (!t[i].isFullySelected()) return !1;
                    return !0
                }
                return e
            },
            setFullySelected: function(t) {
                var e = this._children;
                if (e)
                    for (var i = 0, n = e.length; i < n; i++) e[i].setFullySelected(t);
                this._changeSelection(1, t)
            },
            isClipMask: function() {
                return this._clipMask
            },
            setClipMask: function(t) {
                this._clipMask != (t = !!t) && (this._clipMask = t, t && (this.setFillColor(null), this.setStrokeColor(null)), this._changed(129), this._parent && this._parent._changed(1024))
            },
            getData: function() {
                return this._data || (this._data = {}), this._data
            },
            setData: function(t) {
                this._data = t
            },
            getPosition: function(t) {
                var e = this._position,
                    i = t ? c : f;
                if (!e) {
                    var n = this._pivot;
                    e = this._position = n ? this._matrix._transformPoint(n) : this.getBounds().getCenter(!0)
                }
                return new i(e.x, e.y, this, "setPosition")
            },
            setPosition: function() {
                this.translate(c.read(arguments).subtract(this.getPosition(!0)))
            },
            getPivot: function() {
                var t = this._pivot;
                return t ? new f(t.x, t.y, this, "setPivot") : null
            },
            setPivot: function() {
                this._pivot = c.read(arguments, 0, {
                    clone: !0,
                    readNull: !0
                }), this._position = e
            }
        }, r.each({
            getStrokeBounds: {
                stroke: !0
            },
            getHandleBounds: {
                handle: !0
            },
            getInternalBounds: {
                internal: !0
            }
        }, function(t, e) {
            this[e] = function(e) {
                return this.getBounds(e, t)
            }
        }, {
            beans: !0,
            getBounds: function(t, e) {
                var i = e || t instanceof p,
                    n = r.set({}, i ? e : t, this._boundsOptions);
                n.stroke && !this.getStrokeScaling() || (n.cacheItem = this);
                var s = this._getCachedBounds(i && t, n).rect;
                return arguments.length ? s : new v(s.x, s.y, s.width, s.height, this, "setBounds")
            },
            setBounds: function() {
                var t = g.read(arguments),
                    e = this.getBounds(),
                    i = this._matrix,
                    n = new p,
                    r = t.getCenter();
                n.translate(r), t.width == e.width && t.height == e.height || (i.isInvertible() || (i.set(i._backup || (new p).translate(i.getTranslation())), e = this.getBounds()), n.scale(0 !== e.width ? t.width / e.width : 0, 0 !== e.height ? t.height / e.height : 0)), r = e.getCenter(), n.translate(-r.x, -r.y), this.transform(n)
            },
            _getBounds: function(t, e) {
                var i = this._children;
                return i && i.length ? (w._updateBoundsCache(this, e.cacheItem), w._getBounds(i, t, e)) : new g
            },
            _getBoundsCacheKey: function(t, e) {
                return [t.stroke ? 1 : 0, t.handle ? 1 : 0, e ? 1 : 0].join("")
            },
            _getCachedBounds: function(t, e, i) {
                t = t && t._orNullIfIdentity();
                var n = e.internal && !i,
                    r = e.cacheItem,
                    s = n ? null : this._matrix._orNullIfIdentity(),
                    a = r && (!t || t.equals(s)) && this._getBoundsCacheKey(e, n),
                    o = this._bounds;
                if (w._updateBoundsCache(this._parent || this._symbol, r), a && o && a in o) {
                    var h = o[a];
                    return {
                        rect: h.rect.clone(),
                        nonscaling: h.nonscaling
                    }
                }
                var u = this._getBounds(t || s, e),
                    l = u.rect || u,
                    c = this._style,
                    f = u.nonscaling || c.hasStroke() && !c.getStrokeScaling();
                if (a) {
                    o || (this._bounds = o = {});
                    var h = o[a] = {
                        rect: l.clone(),
                        nonscaling: f,
                        internal: n
                    }
                }
                return {
                    rect: l,
                    nonscaling: f
                }
            },
            _getStrokeMatrix: function(t, e) {
                var i = this.getStrokeScaling() ? null : e && e.internal ? this : this._parent || this._symbol && this._symbol._item,
                    n = i ? i.getViewMatrix().invert() : t;
                return n && n._shiftless()
            },
            statics: {
                _updateBoundsCache: function(t, e) {
                    if (t && e) {
                        var i = e._id,
                            n = t._boundsCache = t._boundsCache || {
                                ids: {},
                                list: []
                            };
                        n.ids[i] || (n.list.push(e), n.ids[i] = e)
                    }
                },
                _clearBoundsCache: function(t) {
                    var i = t._boundsCache;
                    if (i) {
                        t._bounds = t._position = t._boundsCache = e;
                        for (var n = 0, r = i.list, s = r.length; n < s; n++) {
                            var a = r[n];
                            a !== t && (a._bounds = a._position = e, a._boundsCache && w._clearBoundsCache(a))
                        }
                    }
                },
                _getBounds: function(t, e, i) {
                    var n = 1 / 0,
                        r = -n,
                        s = n,
                        a = r,
                        o = !1;
                    i = i || {};
                    for (var h = 0, u = t.length; h < u; h++) {
                        var l = t[h];
                        if (l._visible && !l.isEmpty()) {
                            var c = l._getCachedBounds(e && e.appended(l._matrix), i, !0),
                                f = c.rect;
                            n = Math.min(f.x, n), s = Math.min(f.y, s), r = Math.max(f.x + f.width, r), a = Math.max(f.y + f.height, a), c.nonscaling && (o = !0)
                        }
                    }
                    return {
                        rect: isFinite(n) ? new g(n, s, r - n, a - s) : new g,
                        nonscaling: o
                    }
                }
            }
        }), {
            beans: !0,
            _decompose: function() {
                return this._applyMatrix ? null : this._decomposed || (this._decomposed = this._matrix.decompose())
            },
            getRotation: function() {
                var t = this._decompose();
                return t ? t.rotation : 0
            },
            setRotation: function(t) {
                var e = this.getRotation();
                if (null != e && null != t) {
                    var i = this._decomposed;
                    this.rotate(t - e), i && (i.rotation = t, this._decomposed = i)
                }
            },
            getScaling: function() {
                var t = this._decompose(),
                    e = t && t.scaling;
                return new f(e ? e.x : 1, e ? e.y : 1, this, "setScaling")
            },
            setScaling: function() {
                var t = this.getScaling(),
                    e = c.read(arguments, 0, {
                        clone: !0,
                        readNull: !0
                    });
                if (t && e && !t.equals(e)) {
                    var i = this.getRotation(),
                        n = this._decomposed,
                        r = new p,
                        s = this.getPosition(!0);
                    r.translate(s), i && r.rotate(i), r.scale(e.x / t.x, e.y / t.y), i && r.rotate(-i), r.translate(s.negate()), this.transform(r), n && (n.scaling = e, this._decomposed = n)
                }
            },
            getMatrix: function() {
                return this._matrix
            },
            setMatrix: function() {
                var t = this._matrix;
                t.initialize.apply(t, arguments)
            },
            getGlobalMatrix: function(t) {
                var e = this._globalMatrix,
                    i = this._project._updateVersion;
                if (e && e._updateVersion !== i && (e = null), !e) {
                    e = this._globalMatrix = this._matrix.clone();
                    var n = this._parent;
                    n && e.prepend(n.getGlobalMatrix(!0)), e._updateVersion = i
                }
                return t ? e : e.clone()
            },
            getViewMatrix: function() {
                return this.getGlobalMatrix().prepend(this.getView()._matrix)
            },
            getApplyMatrix: function() {
                return this._applyMatrix
            },
            setApplyMatrix: function(t) {
                (this._applyMatrix = this._canApplyMatrix && !!t) && this.transform(null, !0)
            },
            getTransformContent: "#getApplyMatrix",
            setTransformContent: "#setApplyMatrix"
        }, {
            getProject: function() {
                return this._project
            },
            _setProject: function(t, e) {
                if (this._project !== t) {
                    this._project && this._installEvents(!1), this._project = t;
                    for (var i = this._children, n = 0, r = i && i.length; n < r; n++) i[n]._setProject(t);
                    e = !0
                }
                e && this._installEvents(!0)
            },
            getView: function() {
                return this._project._view
            },
            _installEvents: function ut(t) {
                ut.base.call(this, t);
                for (var e = this._children, i = 0, n = e && e.length; i < n; i++) e[i]._installEvents(t)
            },
            getLayer: function() {
                for (var t = this; t = t._parent;)
                    if (t instanceof b) return t;
                return null
            },
            getParent: function() {
                return this._parent
            },
            setParent: function(t) {
                return t.addChild(this)
            },
            _getOwner: "#getParent",
            getChildren: function() {
                return this._children
            },
            setChildren: function(t) {
                this.removeChildren(), this.addChildren(t)
            },
            getFirstChild: function() {
                return this._children && this._children[0] || null
            },
            getLastChild: function() {
                return this._children && this._children[this._children.length - 1] || null
            },
            getNextSibling: function() {
                var t = this._getOwner();
                return t && t._children[this._index + 1] || null
            },
            getPreviousSibling: function() {
                var t = this._getOwner();
                return t && t._children[this._index - 1] || null
            },
            getIndex: function() {
                return this._index
            },
            equals: function(t) {
                return t === this || t && this._class === t._class && this._style.equals(t._style) && this._matrix.equals(t._matrix) && this._locked === t._locked && this._visible === t._visible && this._blendMode === t._blendMode && this._opacity === t._opacity && this._clipMask === t._clipMask && this._guide === t._guide && this._equals(t) || !1
            },
            _equals: function(t) {
                return r.equals(this._children, t._children)
            },
            clone: function(t) {
                var i = new this.constructor(w.NO_INSERT),
                    n = this._children,
                    s = r.pick(t ? t.insert : e, t === e || t === !0),
                    a = r.pick(t ? t.deep : e, !0);
                n && i.copyAttributes(this), n && !a || i.copyContent(this), n || i.copyAttributes(this), s && i.insertAbove(this);
                var o = this._name,
                    h = this._parent;
                if (o && h) {
                    for (var n = h._children, u = o, l = 1; n[o];) o = u + " " + l++;
                    o !== u && i.setName(o)
                }
                return i
            },
            copyContent: function(t) {
                for (var e = t._children, i = 0, n = e && e.length; i < n; i++) this.addChild(e[i].clone(!1), !0)
            },
            copyAttributes: function(t, e) {
                this.setStyle(t._style);
                for (var i = ["_locked", "_visible", "_blendMode", "_opacity", "_clipMask", "_guide"], n = 0, s = i.length; n < s; n++) {
                    var a = i[n];
                    t.hasOwnProperty(a) && (this[a] = t[a])
                }
                e || this._matrix.set(t._matrix, !0), this.setApplyMatrix(t._applyMatrix), this.setPivot(t._pivot), this.setSelection(t._selection);
                var o = t._data,
                    h = t._name;
                this._data = o ? r.clone(o) : null, h && this.setName(h)
            },
            rasterize: function(t, i) {
                var n = this.getStrokeBounds(),
                    s = (t || this.getView().getResolution()) / 72,
                    a = n.getTopLeft().floor(),
                    o = n.getBottomRight().ceil(),
                    h = new d(o.subtract(a)),
                    u = new S(w.NO_INSERT);
                if (!h.isZero()) {
                    var l = Q.getCanvas(h.multiply(s)),
                        c = l.getContext("2d"),
                        f = (new p).scale(s).translate(a.negate());
                    c.save(), f.applyToContext(c), this.draw(c, new r({
                        matrices: [f]
                    })), c.restore(), u.setCanvas(l)
                }
                return u.transform((new p).translate(a.add(h.divide(2))).scale(1 / s)), (i === e || i) && u.insertAbove(this), u
            },
            contains: function() {
                return !!this._contains(this._matrix._inverseTransform(c.read(arguments)))
            },
            _contains: function(t) {
                var e = this._children;
                if (e) {
                    for (var i = e.length - 1; i >= 0; i--)
                        if (e[i].contains(t)) return !0;
                    return !1
                }
                return t.isInside(this.getInternalBounds())
            },
            isInside: function() {
                return g.read(arguments).contains(this.getBounds())
            },
            _asPathItem: function() {
                return new L.Rectangle({
                    rectangle: this.getInternalBounds(),
                    matrix: this._matrix,
                    insert: !1
                })
            },
            intersects: function(t, e) {
                return t instanceof w && this._asPathItem().getIntersections(t._asPathItem(), null, e, !0).length > 0
            }
        }, new function() {
            function t() {
                return this._hitTest(c.read(arguments), M.getOptions(arguments))
            }

            function e() {
                var t = c.read(arguments),
                    e = M.getOptions(arguments),
                    i = [];
                return this._hitTest(t, r.set({
                    all: i
                }, e)), i
            }

            function i(t, e, i, n) {
                var r = this._children;
                if (r)
                    for (var s = r.length - 1; s >= 0; s--) {
                        var a = r[s],
                            o = a !== n && a._hitTest(t, e, i);
                        if (o && !e.all) return o
                    }
                return null
            }
            return y.inject({
                hitTest: t,
                hitTestAll: e,
                _hitTest: i
            }), {
                hitTest: t,
                hitTestAll: e,
                _hitTestChildren: i
            }
        }, {
            _hitTest: function(t, e, i) {
                function n(t) {
                    return t && _ && !_(t) && (t = null), t && e.all && e.all.push(t), t
                }

                function s(e, i) {
                    var n = i ? l["get" + i]() : g.getPosition();
                    if (t.subtract(n).divide(u).length <= 1) return new M(e, g, {
                        name: i ? r.hyphenate(i) : e,
                        point: n
                    })
                }
                if (this._locked || !this._visible || this._guide && !e.guides || this.isEmpty()) return null;
                var a = this._matrix,
                    o = i ? i.appended(a) : this.getGlobalMatrix().prepend(this.getView()._matrix),
                    h = Math.max(e.tolerance, 1e-12),
                    u = e._tolerancePadding = new d(L._getStrokePadding(h, a._shiftless().invert()));
                if (t = a._inverseTransform(t), !t || !this._children && !this.getBounds({
                        internal: !0,
                        stroke: !0,
                        handle: !0
                    }).expand(u.multiply(2))._containsPoint(t)) return null;
                var l, c, f = !(e.guides && !this._guide || e.selected && !this.isSelected() || e.type && e.type !== r.hyphenate(this._class) || e["class"] && !(this instanceof e["class"])),
                    _ = e.match,
                    g = this,
                    v = e.position,
                    p = e.center,
                    m = e.bounds;
                if (f && this._parent && (v || p || m)) {
                    if ((p || m) && (l = this.getInternalBounds()), c = v && s("position") || p && s("center", "Center"), !c && m)
                        for (var y = ["TopLeft", "TopRight", "BottomLeft", "BottomRight", "LeftCenter", "TopCenter", "RightCenter", "BottomCenter"], w = 0; w < 8 && !c; w++) c = s("bounds", y[w]);
                    c = n(c)
                }
                return c || (c = this._hitTestChildren(t, e, o) || f && n(this._hitTestSelf(t, e, o, this.getStrokeScaling() ? null : o._shiftless().invert())) || null), c && c.point && (c.point = a.transform(c.point)), c
            },
            _hitTestSelf: function(t, e) {
                if (e.fill && this.hasFill() && this._contains(t)) return new M("fill", this)
            },
            matches: function(t, e) {
                function i(t, e) {
                    for (var n in t)
                        if (t.hasOwnProperty(n)) {
                            var s = t[n],
                                a = e[n];
                            if (r.isPlainObject(s) && r.isPlainObject(a)) {
                                if (!i(s, a)) return !1
                            } else if (!r.equals(s, a)) return !1
                        }
                    return !0
                }
                var n = typeof t;
                if ("object" === n) {
                    for (var s in t)
                        if (t.hasOwnProperty(s) && !this.matches(s, t[s])) return !1;
                    return !0
                }
                if ("function" === n) return t(this);
                if ("match" === t) return e(this);
                var a = /^(empty|editable)$/.test(t) ? this["is" + r.capitalize(t)]() : "type" === t ? r.hyphenate(this._class) : this[t];
                if ("class" === t) {
                    if ("function" == typeof e) return this instanceof e;
                    a = this._class
                }
                if ("function" == typeof e) return !!e(a);
                if (e) {
                    if (e.test) return e.test(a);
                    if (r.isPlainObject(e)) return i(e, a)
                }
                return r.equals(a, e)
            },
            getItems: function(t) {
                return w._getItems(this, t, this._matrix)
            },
            getItem: function(t) {
                return w._getItems(this, t, this._matrix, null, !0)[0] || null
            },
            statics: {
                _getItems: function lt(t, e, i, n, s) {
                    if (!n) {
                        var a = "object" == typeof e && e,
                            o = a && a.overlapping,
                            h = a && a.inside,
                            u = o || h,
                            l = u && g.read([u]);
                        n = {
                            items: [],
                            recursive: a && a.recursive !== !1,
                            inside: !!h,
                            overlapping: !!o,
                            rect: l,
                            path: o && new L.Rectangle({
                                rectangle: l,
                                insert: !1
                            })
                        }, a && (e = r.filter({}, e, {
                            recursive: !0,
                            inside: !0,
                            overlapping: !0
                        }))
                    }
                    var c = t._children,
                        f = n.items,
                        l = n.rect;
                    i = l && (i || new p);
                    for (var d = 0, _ = c && c.length; d < _; d++) {
                        var v = c[d],
                            m = i && i.appended(v._matrix),
                            y = !0;
                        if (l) {
                            var u = v.getBounds(m);
                            if (!l.intersects(u)) continue;
                            l.contains(u) || n.overlapping && (u.contains(l) || n.path.intersects(v, m)) || (y = !1)
                        }
                        if (y && v.matches(e) && (f.push(v), s)) break;
                        if (n.recursive !== !1 && lt(v, e, m, n, s), s && f.length > 0) break
                    }
                    return f
                }
            }
        }, {
            importJSON: function(t) {
                var e = r.importJSON(t, this);
                return e !== this ? this.addChild(e) : e
            },
            addChild: function(t) {
                return this.insertChild(e, t)
            },
            insertChild: function(t, e) {
                var i = e ? this.insertChildren(t, [e]) : null;
                return i && i[0]
            },
            addChildren: function(t) {
                return this.insertChildren(this._children.length, t)
            },
            insertChildren: function(t, e) {
                var i = this._children;
                if (i && e && e.length > 0) {
                    e = r.slice(e);
                    for (var n = {}, s = e.length - 1; s >= 0; s--) {
                        var a = e[s],
                            o = a && a._id;
                        !a || n[o] ? e.splice(s, 1) : (a._remove(!1, !0), n[o] = !0)
                    }
                    r.splice(i, e, t, 0);
                    for (var h = this._project, u = h._changes, s = 0, l = e.length; s < l; s++) {
                        var a = e[s],
                            c = a._name;
                        a._parent = this, a._setProject(h, !0), c && a.setName(c), u && a._changed(5)
                    }
                    this._changed(11)
                } else e = null;
                return e
            },
            _insertItem: "#insertChild",
            _insertAt: function(t, e) {
                var i = t && t._getOwner(),
                    n = t !== this && i ? this : null;
                return n && (n._remove(!1, !0), i._insertItem(t._index + e, n)), n
            },
            insertAbove: function(t) {
                return this._insertAt(t, 1)
            },
            insertBelow: function(t) {
                return this._insertAt(t, 0)
            },
            sendToBack: function() {
                var t = this._getOwner();
                return t ? t._insertItem(0, this) : null
            },
            bringToFront: function() {
                var t = this._getOwner();
                return t ? t._insertItem(e, this) : null
            },
            appendTop: "#addChild",
            appendBottom: function(t) {
                return this.insertChild(0, t)
            },
            moveAbove: "#insertAbove",
            moveBelow: "#insertBelow",
            addTo: function(t) {
                return t._insertItem(e, this)
            },
            copyTo: function(t) {
                return this.clone(!1).addTo(t)
            },
            reduce: function(t) {
                var e = this._children;
                if (e && 1 === e.length) {
                    var i = e[0].reduce(t);
                    return this._parent ? (i.insertAbove(this), this.remove()) : i.remove(), i
                }
                return this
            },
            _removeNamed: function() {
                var t = this._getOwner();
                if (t) {
                    var e = t._children,
                        i = t._namedChildren,
                        n = this._name,
                        r = i[n],
                        s = r ? r.indexOf(this) : -1;
                    s !== -1 && (e[n] == this && delete e[n], r.splice(s, 1), r.length ? e[n] = r[0] : delete i[n])
                }
            },
            _remove: function(t, e) {
                var i = this._getOwner(),
                    n = this._project,
                    s = this._index;
                return !!i && (this._name && this._removeNamed(), null != s && (n._activeLayer === this && (n._activeLayer = this.getNextSibling() || this.getPreviousSibling()), r.splice(i._children, null, s, 1)), this._installEvents(!1), t && n._changes && this._changed(5), e && i._changed(11, this), this._parent = null, !0)
            },
            remove: function() {
                return this._remove(!0, !0)
            },
            replaceWith: function(t) {
                var e = t && t.insertBelow(this);
                return e && this.remove(), e
            },
            removeChildren: function(t, e) {
                if (!this._children) return null;
                t = t || 0, e = r.pick(e, this._children.length);
                for (var i = r.splice(this._children, null, t, e - t), n = i.length - 1; n >= 0; n--) i[n]._remove(!0, !1);
                return i.length > 0 && this._changed(11), i
            },
            clear: "#removeChildren",
            reverseChildren: function() {
                if (this._children) {
                    this._children.reverse();
                    for (var t = 0, e = this._children.length; t < e; t++) this._children[t]._index = t;
                    this._changed(11)
                }
            },
            isEmpty: function() {
                var t = this._children;
                return !t || !t.length
            },
            isEditable: function() {
                for (var t = this; t;) {
                    if (!t._visible || t._locked) return !1;
                    t = t._parent
                }
                return !0
            },
            hasFill: function() {
                return this.getStyle().hasFill()
            },
            hasStroke: function() {
                return this.getStyle().hasStroke()
            },
            hasShadow: function() {
                return this.getStyle().hasShadow()
            },
            _getOrder: function(t) {
                function e(t) {
                    var e = [];
                    do e.unshift(t); while (t = t._parent);
                    return e
                }
                for (var i = e(this), n = e(t), r = 0, s = Math.min(i.length, n.length); r < s; r++)
                    if (i[r] != n[r]) return i[r]._index < n[r]._index ? 1 : -1;
                return 0
            },
            hasChildren: function() {
                return this._children && this._children.length > 0
            },
            isInserted: function() {
                return !!this._parent && this._parent.isInserted()
            },
            isAbove: function(t) {
                return this._getOrder(t) === -1
            },
            isBelow: function(t) {
                return 1 === this._getOrder(t)
            },
            isParent: function(t) {
                return this._parent === t
            },
            isChild: function(t) {
                return t && t._parent === this
            },
            isDescendant: function(t) {
                for (var e = this; e = e._parent;)
                    if (e === t) return !0;
                return !1
            },
            isAncestor: function(t) {
                return !!t && t.isDescendant(this)
            },
            isSibling: function(t) {
                return this._parent === t._parent
            },
            isGroupedWith: function(t) {
                for (var e = this._parent; e;) {
                    if (e._parent && /^(Group|Layer|CompoundPath)$/.test(e._class) && t.isDescendant(e)) return !0;
                    e = e._parent
                }
                return !1
            }
        }, r.each(["rotate", "scale", "shear", "skew"], function(t) {
            var e = "rotate" === t;
            this[t] = function() {
                var i = (e ? r : c).read(arguments),
                    n = c.read(arguments, 0, {
                        readNull: !0
                    });
                return this.transform((new p)[t](i, n || this.getPosition(!0)))
            }
        }, {
            translate: function() {
                var t = new p;
                return this.transform(t.translate.apply(t, arguments))
            },
            transform: function(t, e, i, n) {
                var r = this._matrix,
                    s = t && !t.isIdentity(),
                    a = (e || this._applyMatrix) && (!r.isIdentity() || s || e && i && this._children);
                if (!s && !a) return this;
                if (s) {
                    !t.isInvertible() && r.isInvertible() && (r._backup = r.getValues()), r.prepend(t, !0);
                    var o = this._style,
                        h = o.getFillColor(!0),
                        u = o.getStrokeColor(!0);
                    h && h.transform(t), u && u.transform(t)
                }
                if (a && (a = this._transformContent(r, i, n))) {
                    var l = this._pivot;
                    l && r._transformPoint(l, l, !0), r.reset(!0), n && this._canApplyMatrix && (this._applyMatrix = !0)
                }
                var c = this._bounds,
                    f = this._position;
                (s || a) && this._changed(9);
                var d = s && c && t.decompose();
                if (d && d.skewing.isZero() && d.rotation % 90 === 0) {
                    for (var _ in c) {
                        var g = c[_];
                        if (g.nonscaling) delete c[_];
                        else if (a || !g.internal) {
                            var v = g.rect;
                            t._transformBounds(v, v)
                        }
                    }
                    this._bounds = c;
                    var p = c[this._getBoundsCacheKey(this._boundsOptions || {})];
                    p && (this._position = p.rect.getCenter(!0))
                } else s && f && this._pivot && (this._position = t._transformPoint(f, f));
                return this
            },
            _transformContent: function(t, e, i) {
                var n = this._children;
                if (n) {
                    for (var r = 0, s = n.length; r < s; r++) n[r].transform(t, !0, e, i);
                    return !0
                }
            },
            globalToLocal: function() {
                return this.getGlobalMatrix(!0)._inverseTransform(c.read(arguments))
            },
            localToGlobal: function() {
                return this.getGlobalMatrix(!0)._transformPoint(c.read(arguments))
            },
            parentToLocal: function() {
                return this._matrix._inverseTransform(c.read(arguments))
            },
            localToParent: function() {
                return this._matrix._transformPoint(c.read(arguments))
            },
            fitBounds: function(t, e) {
                t = g.read(arguments);
                var i = this.getBounds(),
                    n = i.height / i.width,
                    r = t.height / t.width,
                    s = (e ? n > r : n < r) ? t.width / i.width : t.height / i.height,
                    a = new g(new c, new d(i.width * s, i.height * s));
                a.setCenter(t.getCenter()), this.setBounds(a)
            }
        }), {
            _setStyles: function(t, e, i) {
                var n = this._style,
                    r = this._matrix;
                if (n.hasFill() && (t.fillStyle = n.getFillColor().toCanvasStyle(t, r)), n.hasStroke()) {
                    t.strokeStyle = n.getStrokeColor().toCanvasStyle(t, r), t.lineWidth = n.getStrokeWidth();
                    var s = n.getStrokeJoin(),
                        a = n.getStrokeCap(),
                        o = n.getMiterLimit();
                    if (s && (t.lineJoin = s), a && (t.lineCap = a), o && (t.miterLimit = o), paper.support.nativeDash) {
                        var h = n.getDashArray(),
                            u = n.getDashOffset();
                        h && h.length && ("setLineDash" in t ? (t.setLineDash(h), t.lineDashOffset = u) : (t.mozDash = h, t.mozDashOffset = u))
                    }
                }
                if (n.hasShadow()) {
                    var l = e.pixelRatio || 1,
                        f = i._shiftless().prepend((new p).scale(l, l)),
                        d = f.transform(new c(n.getShadowBlur(), 0)),
                        _ = f.transform(this.getShadowOffset());
                    t.shadowColor = n.getShadowColor().toCanvasStyle(t), t.shadowBlur = d.getLength(), t.shadowOffsetX = _.x, t.shadowOffsetY = _.y
                }
            },
            draw: function(t, e, i) {
                var n = this._updateVersion = this._project._updateVersion;
                if (this._visible && 0 !== this._opacity) {
                    var r = e.matrices,
                        s = e.viewMatrix,
                        a = this._matrix,
                        o = r[r.length - 1].appended(a);
                    if (o.isInvertible()) {
                        s = s ? s.appended(o) : o, r.push(o), e.updateMatrix && (o._updateVersion = n, this._globalMatrix = o);
                        var h, u, l, c = this._blendMode,
                            f = this._opacity,
                            d = "normal" === c,
                            _ = tt.nativeModes[c],
                            g = d && 1 === f || e.dontStart || e.clip || (_ || d && f < 1) && this._canComposite(),
                            v = e.pixelRatio || 1;
                        if (!g) {
                            var p = this.getStrokeBounds(s);
                            if (!p.width || !p.height) return;
                            l = e.offset, u = e.offset = p.getTopLeft().floor(), h = t, t = Q.getContext(p.getSize().ceil().add(1).multiply(v)), 1 !== v && t.scale(v, v)
                        }
                        t.save();
                        var m = i ? i.appended(a) : this._canScaleStroke && !this.getStrokeScaling(!0) && s,
                            y = !g && e.clipItem,
                            w = !m || y;
                        if (g ? (t.globalAlpha = f, _ && (t.globalCompositeOperation = c)) : w && t.translate(-u.x, -u.y), w && (g ? a : s).applyToContext(t), y && e.clipItem.draw(t, e.extend({
                                clip: !0
                            })), m) {
                            t.setTransform(v, 0, 0, v, 0, 0);
                            var x = e.offset;
                            x && t.translate(-x.x, -x.y)
                        }
                        this._draw(t, e, s, m), t.restore(), r.pop(), e.clip && !e.dontFinish && t.clip(), g || (tt.process(c, t, h, f, u.subtract(l).multiply(v)), Q.release(t), e.offset = l)
                    }
                }
            },
            _isUpdated: function(t) {
                var e = this._parent;
                if (e instanceof N) return e._isUpdated(t);
                var i = this._updateVersion === t;
                return !i && e && e._visible && e._isUpdated(t) && (this._updateVersion = t, i = !0), i
            },
            _drawSelection: function(t, e, i, n, r) {
                var s = this._selection,
                    a = 1 & s,
                    o = 2 & s || a && this._selectBounds,
                    h = 4 & s;
                if (this._drawSelected || (a = !1), (a || o || h) && this._isUpdated(r)) {
                    var u, l = this.getSelectedColor(!0) || (u = this.getLayer()) && u.getSelectedColor(!0),
                        c = e.appended(this.getGlobalMatrix(!0)),
                        f = i / 2;
                    if (t.strokeStyle = t.fillStyle = l ? l.toCanvasStyle(t) : "#009dec", a && this._drawSelected(t, c, n), h) {
                        var d = this.getPosition(!0),
                            _ = d.x,
                            g = d.y;
                        t.beginPath(), t.arc(_, g, f, 0, 2 * Math.PI, !0), t.stroke();
                        for (var v = [
                                [0, -1],
                                [1, 0],
                                [0, 1],
                                [-1, 0]
                            ], p = f, m = i + 1, y = 0; y < 4; y++) {
                            var w = v[y],
                                x = w[0],
                                b = w[1];
                            t.moveTo(_ + x * p, g + b * p), t.lineTo(_ + x * m, g + b * m), t.stroke()
                        }
                    }
                    if (o) {
                        var C = c._transformCorners(this.getInternalBounds());
                        t.beginPath();
                        for (var y = 0; y < 8; y++) t[y ? "lineTo" : "moveTo"](C[y], C[++y]);
                        t.closePath(), t.stroke();
                        for (var y = 0; y < 8; y++) t.fillRect(C[y] - f, C[++y] - f, i, i)
                    }
                }
            },
            _canComposite: function() {
                return !1
            }
        }, r.each(["down", "drag", "up", "move"], function(t) {
            this["removeOn" + r.capitalize(t)] = function() {
                var e = {};
                return e[t] = !0, this.removeOn(e)
            }
        }, {
            removeOn: function(t) {
                for (var e in t)
                    if (t[e]) {
                        var i = "mouse" + e,
                            n = this._project,
                            r = n._removeSets = n._removeSets || {};
                        r[i] = r[i] || {}, r[i][this._id] = this
                    }
                return this
            }
        })),
        x = w.extend({
            _class: "Group",
            _selectBounds: !1,
            _selectChildren: !0,
            _serializeFields: {
                children: []
            },
            initialize: function(t) {
                this._children = [], this._namedChildren = {}, this._initialize(t) || this.addChildren(Array.isArray(t) ? t : arguments)
            },
            _changed: function ct(t) {
                ct.base.call(this, t), 1026 & t && (this._clipItem = e)
            },
            _getClipItem: function() {
                var t = this._clipItem;
                if (t === e) {
                    t = null;
                    for (var i = this._children, n = 0, r = i.length; n < r; n++)
                        if (i[n]._clipMask) {
                            t = i[n];
                            break
                        }
                    this._clipItem = t
                }
                return t
            },
            isClipped: function() {
                return !!this._getClipItem()
            },
            setClipped: function(t) {
                var e = this.getFirstChild();
                e && e.setClipMask(t)
            },
            _getBounds: function ft(t, e) {
                var i = this._getClipItem();
                return i ? i._getCachedBounds(t && t.appended(i._matrix), r.set({}, e, {
                    stroke: !1
                })) : ft.base.call(this, t, e)
            },
            _hitTestChildren: function dt(t, e, i) {
                var n = this._getClipItem();
                return (!n || n.contains(t)) && dt.base.call(this, t, e, i, n)
            },
            _draw: function(t, e) {
                var i = e.clip,
                    n = !i && this._getClipItem();
                e = e.extend({
                    clipItem: n,
                    clip: !1
                }), i ? (t.beginPath(), e.dontStart = e.dontFinish = !0) : n && n.draw(t, e.extend({
                    clip: !0
                }));
                for (var r = this._children, s = 0, a = r.length; s < a; s++) {
                    var o = r[s];
                    o !== n && o.draw(t, e)
                }
            }
        }),
        b = x.extend({
            _class: "Layer",
            initialize: function() {
                x.apply(this, arguments)
            },
            _getOwner: function() {
                return this._parent || null != this._index && this._project
            },
            isInserted: function _t() {
                return this._parent ? _t.base.call(this) : null != this._index
            },
            activate: function() {
                this._project._activeLayer = this
            },
            _hitTestSelf: function() {}
        }),
        C = w.extend({
            _class: "Shape",
            _applyMatrix: !1,
            _canApplyMatrix: !1,
            _canScaleStroke: !0,
            _serializeFields: {
                type: null,
                size: null,
                radius: null
            },
            initialize: function(t, e) {
                this._initialize(t, e)
            },
            _equals: function(t) {
                return this._type === t._type && this._size.equals(t._size) && r.equals(this._radius, t._radius)
            },
            copyContent: function(t) {
                this.setType(t._type), this.setSize(t._size), this.setRadius(t._radius)
            },
            getType: function() {
                return this._type
            },
            setType: function(t) {
                this._type = t
            },
            getShape: "#getType",
            setShape: "#setType",
            getSize: function() {
                var t = this._size;
                return new _(t.width, t.height, this, "setSize")
            },
            setSize: function() {
                var t = d.read(arguments);
                if (this._size) {
                    if (!this._size.equals(t)) {
                        var e = this._type,
                            i = t.width,
                            n = t.height;
                        "rectangle" === e ? this._radius.set(d.min(this._radius, t.divide(2))) : "circle" === e ? (i = n = (i + n) / 2, this._radius = i / 2) : "ellipse" === e && this._radius._set(i / 2, n / 2), this._size._set(i, n), this._changed(9)
                    }
                } else this._size = t.clone()
            },
            getRadius: function() {
                var t = this._radius;
                return "circle" === this._type ? t : new _(t.width, t.height, this, "setRadius")
            },
            setRadius: function(t) {
                var e = this._type;
                if ("circle" === e) {
                    if (t === this._radius) return;
                    var i = 2 * t;
                    this._radius = t, this._size._set(i, i)
                } else if (t = d.read(arguments), this._radius) {
                    if (this._radius.equals(t)) return;
                    if (this._radius.set(t), "rectangle" === e) {
                        var i = d.max(this._size, t.multiply(2));
                        this._size.set(i)
                    } else "ellipse" === e && this._size._set(2 * t.width, 2 * t.height)
                } else this._radius = t.clone();
                this._changed(9)
            },
            isEmpty: function() {
                return !1
            },
            toPath: function(t) {
                var i = new(L[r.capitalize(this._type)])({
                    center: new c,
                    size: this._size,
                    radius: this._radius,
                    insert: !1
                });
                return i.copyAttributes(this), paper.settings.applyMatrix && i.setApplyMatrix(!0), (t === e || t) && i.insertAbove(this), i
            },
            toShape: "#clone",
            _asPathItem: function() {
                return this.toPath(!1)
            },
            _draw: function(t, e, i, n) {
                var r = this._style,
                    s = r.hasFill(),
                    a = r.hasStroke(),
                    o = e.dontFinish || e.clip,
                    h = !n;
                if (s || a || o) {
                    var u = this._type,
                        l = this._radius,
                        c = "circle" === u;
                    if (e.dontStart || t.beginPath(), h && c) t.arc(0, 0, l, 0, 2 * Math.PI, !0);
                    else {
                        var f = c ? l : l.width,
                            d = c ? l : l.height,
                            _ = this._size,
                            g = _.width,
                            v = _.height;
                        if (h && "rectangle" === u && 0 === f && 0 === d) t.rect(-g / 2, -v / 2, g, v);
                        else {
                            var p = g / 2,
                                m = v / 2,
                                y = .44771525016920644,
                                w = f * y,
                                x = d * y,
                                b = [-p, -m + d, -p, -m + x, -p + w, -m, -p + f, -m, p - f, -m, p - w, -m, p, -m + x, p, -m + d, p, m - d, p, m - x, p - w, m, p - f, m, -p + f, m, -p + w, m, -p, m - x, -p, m - d];
                            n && n.transform(b, b, 32), t.moveTo(b[0], b[1]), t.bezierCurveTo(b[2], b[3], b[4], b[5], b[6], b[7]), p !== f && t.lineTo(b[8], b[9]), t.bezierCurveTo(b[10], b[11], b[12], b[13], b[14], b[15]), m !== d && t.lineTo(b[16], b[17]), t.bezierCurveTo(b[18], b[19], b[20], b[21], b[22], b[23]), p !== f && t.lineTo(b[24], b[25]), t.bezierCurveTo(b[26], b[27], b[28], b[29], b[30], b[31])
                        }
                    }
                    t.closePath()
                }
                o || !s && !a || (this._setStyles(t, e, i), s && (t.fill(r.getFillRule()), t.shadowColor = "rgba(0,0,0,0)"), a && t.stroke())
            },
            _canComposite: function() {
                return !(this.hasFill() && this.hasStroke())
            },
            _getBounds: function(t, e) {
                var i = new g(this._size).setCenter(0, 0),
                    n = this._style,
                    r = e.stroke && n.hasStroke() && n.getStrokeWidth();
                return t && (i = t._transformBounds(i)), r ? i.expand(L._getStrokePadding(r, this._getStrokeMatrix(t, e))) : i
            }
        }, new function() {
            function t(t, e, i) {
                var n = t._radius;
                if (!n.isZero())
                    for (var r = t._size.divide(2), s = 1; s <= 4; s++) {
                        var a = new c(s > 1 && s < 4 ? -1 : 1, s > 2 ? -1 : 1),
                            o = a.multiply(r),
                            h = o.subtract(a.multiply(n)),
                            u = new g(i ? o.add(a.multiply(i)) : o, h);
                        if (u.contains(e)) return {
                            point: h,
                            quadrant: s
                        }
                    }
            }

            function e(t, e, i, n) {
                var r = t.divide(e);
                return (!n || r.isInQuadrant(n)) && r.subtract(r.normalize()).multiply(e).divide(i).length <= 1
            }
            return {
                _contains: function i(e) {
                    if ("rectangle" === this._type) {
                        var n = t(this, e);
                        return n ? e.subtract(n.point).divide(this._radius).getLength() <= 1 : i.base.call(this, e)
                    }
                    return e.divide(this.size).getLength() <= .5
                },
                _hitTestSelf: function n(i, r, s, a) {
                    var o = !1,
                        h = this._style,
                        u = r.stroke && h.hasStroke(),
                        l = r.fill && h.hasFill();
                    if (u || l) {
                        var c = this._type,
                            f = this._radius,
                            d = u ? h.getStrokeWidth() / 2 : 0,
                            _ = r._tolerancePadding.add(L._getStrokePadding(d, !h.getStrokeScaling() && a));
                        if ("rectangle" === c) {
                            var v = _.multiply(2),
                                p = t(this, i, v);
                            if (p) o = e(i.subtract(p.point), f, _, p.quadrant);
                            else {
                                var m = new g(this._size).setCenter(0, 0),
                                    y = m.expand(v),
                                    w = m.expand(v.negate());
                                o = y._containsPoint(i) && !w._containsPoint(i)
                            }
                        } else o = e(i, f, _)
                    }
                    return o ? new M(u ? "stroke" : "fill", this) : n.base.apply(this, arguments)
                }
            }
        }, {
            statics: new function() {
                function t(t, e, i, n, s) {
                    var a = new C(r.getNamed(s), e);
                    return a._type = t, a._size = i, a._radius = n, a
                }
                return {
                    Circle: function() {
                        var e = c.readNamed(arguments, "center"),
                            i = r.readNamed(arguments, "radius");
                        return t("circle", e, new d(2 * i), i, arguments)
                    },
                    Rectangle: function() {
                        var e = g.readNamed(arguments, "rectangle"),
                            i = d.min(d.readNamed(arguments, "radius"), e.getSize(!0).divide(2));
                        return t("rectangle", e.getCenter(!0), e.getSize(!0), i, arguments)
                    },
                    Ellipse: function() {
                        var e = C._readEllipse(arguments),
                            i = e.radius;
                        return t("ellipse", e.center, i.multiply(2), i, arguments)
                    },
                    _readEllipse: function(t) {
                        var e, i;
                        if (r.hasNamed(t, "radius")) e = c.readNamed(t, "center"), i = d.readNamed(t, "radius");
                        else {
                            var n = g.readNamed(t, "rectangle");
                            e = n.getCenter(!0), i = n.getSize(!0).divide(2)
                        }
                        return {
                            center: e,
                            radius: i
                        }
                    }
                }
            }
        }),
        S = w.extend({
            _class: "Raster",
            _applyMatrix: !1,
            _canApplyMatrix: !1,
            _boundsOptions: {
                stroke: !1,
                handle: !1
            },
            _serializeFields: {
                crossOrigin: null,
                source: null
            },
            _prioritize: ["crossOrigin"],
            initialize: function(t, i) {
                if (!this._initialize(t, i !== e && c.read(arguments, 1))) {
                    var r = "string" == typeof t ? n.getElementById(t) : t;
                    r ? this.setImage(r) : this.setSource(t)
                }
                this._size || (this._size = new d, this._loaded = !1)
            },
            _equals: function(t) {
                return this.getSource() === t.getSource()
            },
            copyContent: function(t) {
                var e = t._image,
                    i = t._canvas;
                if (e) this._setImage(e);
                else if (i) {
                    var n = Q.getCanvas(t._size);
                    n.getContext("2d").drawImage(i, 0, 0), this._setImage(n)
                }
                this._crossOrigin = t._crossOrigin
            },
            getSize: function() {
                var t = this._size;
                return new _(t ? t.width : 0, t ? t.height : 0, this, "setSize")
            },
            setSize: function() {
                var t = d.read(arguments);
                if (!t.equals(this._size))
                    if (t.width > 0 && t.height > 0) {
                        var e = this.getElement();
                        this._setImage(Q.getCanvas(t)), e && this.getContext(!0).drawImage(e, 0, 0, t.width, t.height)
                    } else this._canvas && Q.release(this._canvas), this._size = t.clone()
            },
            getWidth: function() {
                return this._size ? this._size.width : 0
            },
            setWidth: function(t) {
                this.setSize(t, this.getHeight())
            },
            getHeight: function() {
                return this._size ? this._size.height : 0
            },
            setHeight: function(t) {
                this.setSize(this.getWidth(), t)
            },
            getLoaded: function() {
                return this._loaded
            },
            isEmpty: function() {
                var t = this._size;
                return !t || 0 === t.width && 0 === t.height
            },
            getResolution: function() {
                var t = this._matrix,
                    e = new c(0, 0).transform(t),
                    i = new c(1, 0).transform(t).subtract(e),
                    n = new c(0, 1).transform(t).subtract(e);
                return new d(72 / i.getLength(), 72 / n.getLength())
            },
            getPpi: "#getResolution",
            getImage: function() {
                return this._image
            },
            setImage: function(t) {
                function e(t) {
                    var e = i.getView(),
                        n = t && t.type || "load";
                    e && i.responds(n) && (paper = e._scope, i.emit(n, new G(t)))
                }
                var i = this;
                this._setImage(t), this._loaded ? setTimeout(e, 0) : t && Z.add(t, {
                    load: function(n) {
                        i._setImage(t), e(n)
                    },
                    error: e
                })
            },
            _setImage: function(t) {
                this._canvas && Q.release(this._canvas), t && t.getContext ? (this._image = null, this._canvas = t, this._loaded = !0) : (this._image = t, this._canvas = null, this._loaded = !!(t && t.src && t.complete)), this._size = new d(t ? t.naturalWidth || t.width : 0, t ? t.naturalHeight || t.height : 0), this._context = null, this._changed(521)
            },
            getCanvas: function() {
                if (!this._canvas) {
                    var t = Q.getContext(this._size);
                    try {
                        this._image && t.drawImage(this._image, 0, 0), this._canvas = t.canvas
                    } catch (e) {
                        Q.release(t)
                    }
                }
                return this._canvas
            },
            setCanvas: "#setImage",
            getContext: function(t) {
                return this._context || (this._context = this.getCanvas().getContext("2d")), t && (this._image = null, this._changed(513)), this._context
            },
            setContext: function(t) {
                this._context = t
            },
            getSource: function() {
                var t = this._image;
                return t && t.src || this.toDataURL()
            },
            setSource: function(e) {
                var i = new t.Image,
                    n = this._crossOrigin;
                n && (i.crossOrigin = n), i.src = e, this.setImage(i)
            },
            getCrossOrigin: function() {
                var t = this._image;
                return t && t.crossOrigin || this._crossOrigin || ""
            },
            setCrossOrigin: function(t) {
                this._crossOrigin = t;
                var e = this._image;
                e && (e.crossOrigin = t)
            },
            getElement: function() {
                return this._canvas || this._loaded && this._image
            }
        }, {
            beans: !1,
            getSubCanvas: function() {
                var t = g.read(arguments),
                    e = Q.getContext(t.getSize());
                return e.drawImage(this.getCanvas(), t.x, t.y, t.width, t.height, 0, 0, t.width, t.height), e.canvas
            },
            getSubRaster: function() {
                var t = g.read(arguments),
                    e = new S(w.NO_INSERT);
                return e._setImage(this.getSubCanvas(t)), e.translate(t.getCenter().subtract(this.getSize().divide(2))), e._matrix.prepend(this._matrix), e.insertAbove(this), e
            },
            toDataURL: function() {
                var t = this._image,
                    e = t && t.src;
                if (/^data:/.test(e)) return e;
                var i = this.getCanvas();
                return i ? i.toDataURL.apply(i, arguments) : null
            },
            drawImage: function(t) {
                var e = c.read(arguments, 1);
                this.getContext(!0).drawImage(t, e.x, e.y)
            },
            getAverageColor: function(t) {
                var e, i;
                if (t ? t instanceof A ? (i = t, e = t.getBounds()) : "object" == typeof t && ("width" in t ? e = new g(t) : "x" in t && (e = new g(t.x - .5, t.y - .5, 1, 1))) : e = this.getBounds(), !e) return null;
                var n = 32,
                    s = Math.min(e.width, n),
                    a = Math.min(e.height, n),
                    o = S._sampleContext;
                o ? o.clearRect(0, 0, n + 1, n + 1) : o = S._sampleContext = Q.getContext(new d(n)), o.save();
                var h = (new p).scale(s / e.width, a / e.height).translate(-e.x, -e.y);
                h.applyToContext(o), i && i.draw(o, new r({
                    clip: !0,
                    matrices: [h]
                })), this._matrix.applyToContext(o);
                var u = this.getElement(),
                    l = this._size;
                u && o.drawImage(u, -l.width / 2, -l.height / 2), o.restore();
                for (var c = o.getImageData(.5, .5, Math.ceil(s), Math.ceil(a)).data, f = [0, 0, 0], _ = 0, v = 0, m = c.length; v < m; v += 4) {
                    var y = c[v + 3];
                    _ += y, y /= 255, f[0] += c[v] * y, f[1] += c[v + 1] * y, f[2] += c[v + 2] * y
                }
                for (var v = 0; v < 3; v++) f[v] /= _;
                return _ ? F.read(f) : null
            },
            getPixel: function() {
                var t = c.read(arguments),
                    e = this.getContext().getImageData(t.x, t.y, 1, 1).data;
                return new F("rgb", [e[0] / 255, e[1] / 255, e[2] / 255], e[3] / 255)
            },
            setPixel: function() {
                var t = c.read(arguments),
                    e = F.read(arguments),
                    i = e._convert("rgb"),
                    n = e._alpha,
                    r = this.getContext(!0),
                    s = r.createImageData(1, 1),
                    a = s.data;
                a[0] = 255 * i[0], a[1] = 255 * i[1], a[2] = 255 * i[2], a[3] = null != n ? 255 * n : 255, r.putImageData(s, t.x, t.y)
            },
            createImageData: function() {
                var t = d.read(arguments);
                return this.getContext().createImageData(t.width, t.height)
            },
            getImageData: function() {
                var t = g.read(arguments);
                return t.isEmpty() && (t = new g(this._size)), this.getContext().getImageData(t.x, t.y, t.width, t.height)
            },
            setImageData: function(t) {
                var e = c.read(arguments, 1);
                this.getContext(!0).putImageData(t, e.x, e.y)
            },
            _getBounds: function(t, e) {
                var i = new g(this._size).setCenter(0, 0);
                return t ? t._transformBounds(i) : i
            },
            _hitTestSelf: function(t) {
                if (this._contains(t)) {
                    var e = this;
                    return new M("pixel", e, {
                        offset: t.add(e._size.divide(2)).round(),
                        color: {
                            get: function() {
                                return e.getPixel(this.offset)
                            }
                        }
                    })
                }
            },
            _draw: function(t) {
                var e = this.getElement();
                e && (t.globalAlpha = this._opacity, t.drawImage(e, -this._size.width / 2, -this._size.height / 2))
            },
            _canComposite: function() {
                return !0
            }
        }),
        P = w.extend({
            _class: "SymbolItem",
            _applyMatrix: !1,
            _canApplyMatrix: !1,
            _boundsOptions: {
                stroke: !0
            },
            _serializeFields: {
                symbol: null
            },
            initialize: function(t, i) {
                this._initialize(t, i !== e && c.read(arguments, 1)) || this.setDefinition(t instanceof I ? t : new I(t))
            },
            _equals: function(t) {
                return this._definition === t._definition
            },
            copyContent: function(t) {
                this.setDefinition(t._definition)
            },
            getDefinition: function() {
                return this._definition
            },
            setDefinition: function(t) {
                this._definition = t, this._changed(9)
            },
            getSymbol: "#getDefinition",
            setSymbol: "#setDefinition",
            isEmpty: function() {
                return this._definition._item.isEmpty()
            },
            _getBounds: function(t, e) {
                var i = this._definition._item;
                return i._getCachedBounds(i._matrix.prepended(t), e)
            },
            _hitTestSelf: function(t, e, i) {
                var n = this._definition._item._hitTest(t, e, i);
                return n && (n.item = this), n
            },
            _draw: function(t, e) {
                this._definition._item.draw(t, e)
            }
        }),
        I = r.extend({
            _class: "SymbolDefinition",
            initialize: function(t, e) {
                this._id = l.get(), this.project = paper.project, t && this.setItem(t, e)
            },
            _serialize: function(t, e) {
                return e.add(this, function() {
                    return r.serialize([this._class, this._item], t, !1, e)
                })
            },
            _changed: function(t) {
                8 & t && w._clearBoundsCache(this), 1 & t && this.project._changed(t)
            },
            getItem: function() {
                return this._item
            },
            setItem: function(t, e) {
                t._symbol && (t = t.clone()), this._item && (this._item._symbol = null), this._item = t, t.remove(), t.setSelected(!1), e || t.setPosition(new c), t._symbol = this, this._changed(9)
            },
            getDefinition: "#getItem",
            setDefinition: "#setItem",
            place: function(t) {
                return new P(this, t)
            },
            clone: function() {
                return new I(this._item.clone(!1))
            },
            equals: function(t) {
                return t === this || t && this._item.equals(t._item) || !1
            }
        }),
        M = r.extend({
            _class: "HitResult",
            initialize: function(t, e, i) {
                this.type = t, this.item = e, i && this.inject(i)
            },
            statics: {
                getOptions: function(t) {
                    var e = t && r.read(t);
                    return r.set({
                        type: null,
                        tolerance: paper.settings.hitTolerance,
                        fill: !e,
                        stroke: !e,
                        segments: !e,
                        handles: !1,
                        ends: !1,
                        position: !1,
                        center: !1,
                        bounds: !1,
                        guides: !1,
                        selected: !1
                    }, e)
                }
            }
        }),
        T = r.extend({
            _class: "Segment",
            beans: !0,
            _selection: 0,
            initialize: function(t, i, n, r, s, a) {
                var o, h, u, l, c = arguments.length;
                c > 0 && (null == t || "object" == typeof t ? 1 === c && t && "point" in t ? (o = t.point, h = t.handleIn, u = t.handleOut, l = t.selection) : (o = t, h = i, u = n, l = r) : (o = [t, i], h = n !== e ? [n, r] : null, u = s !== e ? [s, a] : null)), new z(o, this, "_point"), new z(h, this, "_handleIn"), new z(u, this, "_handleOut"), l && this.setSelection(l)
            },
            _serialize: function(t, e) {
                var i = this._point,
                    n = this._selection,
                    s = n || this.hasHandles() ? [i, this._handleIn, this._handleOut] : i;
                return n && s.push(n), r.serialize(s, t, !0, e)
            },
            _changed: function(t) {
                var e = this._path;
                if (e) {
                    var i, n = e._curves,
                        r = this._index;
                    n && (t && t !== this._point && t !== this._handleIn || !(i = r > 0 ? n[r - 1] : e._closed ? n[n.length - 1] : null) || i._changed(), t && t !== this._point && t !== this._handleOut || !(i = n[r]) || i._changed()), e._changed(25)
                }
            },
            getPoint: function() {
                return this._point
            },
            setPoint: function() {
                this._point.set(c.read(arguments))
            },
            getHandleIn: function() {
                return this._handleIn
            },
            setHandleIn: function() {
                this._handleIn.set(c.read(arguments))
            },
            getHandleOut: function() {
                return this._handleOut
            },
            setHandleOut: function() {
                this._handleOut.set(c.read(arguments))
            },
            hasHandles: function() {
                return !this._handleIn.isZero() || !this._handleOut.isZero()
            },
            isSmooth: function() {
                var t = this._handleIn,
                    e = this._handleOut;
                return !t.isZero() && !e.isZero() && t.isCollinear(e)
            },
            clearHandles: function() {
                this._handleIn._set(0, 0), this._handleOut._set(0, 0)
            },
            getSelection: function() {
                return this._selection
            },
            setSelection: function(t) {
                var e = this._selection,
                    i = this._path;
                this._selection = t = t || 0, i && t !== e && (i._updateSelection(this, e, t), i._changed(129))
            },
            _changeSelection: function(t, e) {
                var i = this._selection;
                this.setSelection(e ? i | t : i & ~t)
            },
            isSelected: function() {
                return !!(7 & this._selection)
            },
            setSelected: function(t) {
                this._changeSelection(7, t)
            },
            getIndex: function() {
                return this._index !== e ? this._index : null
            },
            getPath: function() {
                return this._path || null
            },
            getCurve: function() {
                var t = this._path,
                    e = this._index;
                return t ? (e > 0 && !t._closed && e === t._segments.length - 1 && e--, t.getCurves()[e] || null) : null
            },
            getLocation: function() {
                var t = this.getCurve();
                return t ? new O(t, this === t._segment1 ? 0 : 1) : null
            },
            getNext: function() {
                var t = this._path && this._path._segments;
                return t && (t[this._index + 1] || this._path._closed && t[0]) || null
            },
            smooth: function(t, i, n) {
                var r = t || {},
                    s = r.type,
                    a = r.factor,
                    o = this.getPrevious(),
                    h = this.getNext(),
                    u = (o || this)._point,
                    l = this._point,
                    f = (h || this)._point,
                    d = u.getDistance(l),
                    _ = l.getDistance(f);
                if (s && "catmull-rom" !== s) {
                    if ("geometric" !== s) throw new Error("Smoothing method '" + s + "' not supported.");
                    if (o && h) {
                        var g = u.subtract(f),
                            v = a === e ? .4 : a,
                            p = v * d / (d + _);
                        i || this.setHandleIn(g.multiply(p)), n || this.setHandleOut(g.multiply(p - v))
                    }
                } else {
                    var m = a === e ? .5 : a,
                        y = Math.pow(d, m),
                        w = y * y,
                        x = Math.pow(_, m),
                        b = x * x;
                    if (!i && o) {
                        var C = 2 * b + 3 * x * y + w,
                            S = 3 * x * (x + y);
                        this.setHandleIn(0 !== S ? new c((b * u._x + C * l._x - w * f._x) / S - l._x, (b * u._y + C * l._y - w * f._y) / S - l._y) : new c)
                    }
                    if (!n && h) {
                        var C = 2 * w + 3 * y * x + b,
                            S = 3 * y * (y + x);
                        this.setHandleOut(0 !== S ? new c((w * f._x + C * l._x - b * u._x) / S - l._x, (w * f._y + C * l._y - b * u._y) / S - l._y) : new c)
                    }
                }
            },
            getPrevious: function() {
                var t = this._path && this._path._segments;
                return t && (t[this._index - 1] || this._path._closed && t[t.length - 1]) || null
            },
            isFirst: function() {
                return !this._index
            },
            isLast: function() {
                var t = this._path;
                return t && this._index === t._segments.length - 1 || !1
            },
            reverse: function() {
                var t = this._handleIn,
                    e = this._handleOut,
                    i = t.clone();
                t.set(e), e.set(i)
            },
            reversed: function() {
                return new T(this._point, this._handleOut, this._handleIn)
            },
            remove: function() {
                return !!this._path && !!this._path.removeSegment(this._index)
            },
            clone: function() {
                return new T(this._point, this._handleIn, this._handleOut)
            },
            equals: function(t) {
                return t === this || t && this._class === t._class && this._point.equals(t._point) && this._handleIn.equals(t._handleIn) && this._handleOut.equals(t._handleOut) || !1
            },
            toString: function() {
                var t = ["point: " + this._point];
                return this._handleIn.isZero() || t.push("handleIn: " + this._handleIn), this._handleOut.isZero() || t.push("handleOut: " + this._handleOut), "{ " + t.join(", ") + " }"
            },
            transform: function(t) {
                this._transformCoordinates(t, new Array(6), !0), this._changed()
            },
            interpolate: function(t, e, i) {
                var n = 1 - i,
                    r = i,
                    s = t._point,
                    a = e._point,
                    o = t._handleIn,
                    h = e._handleIn,
                    u = e._handleOut,
                    l = t._handleOut;
                this._point._set(n * s._x + r * a._x, n * s._y + r * a._y, !0), this._handleIn._set(n * o._x + r * h._x, n * o._y + r * h._y, !0), this._handleOut._set(n * l._x + r * u._x, n * l._y + r * u._y, !0), this._changed()
            },
            _transformCoordinates: function(t, e, i) {
                var n = this._point,
                    r = i && this._handleIn.isZero() ? null : this._handleIn,
                    s = i && this._handleOut.isZero() ? null : this._handleOut,
                    a = n._x,
                    o = n._y,
                    h = 2;
                return e[0] = a, e[1] = o, r && (e[h++] = r._x + a, e[h++] = r._y + o), s && (e[h++] = s._x + a, e[h++] = s._y + o), t && (t._transformCoordinates(e, e, h / 2), a = e[0], o = e[1], i ? (n._x = a, n._y = o, h = 2, r && (r._x = e[h++] - a, r._y = e[h++] - o), s && (s._x = e[h++] - a, s._y = e[h++] - o)) : (r || (e[h++] = a, e[h++] = o), s || (e[h++] = a, e[h++] = o))), e
            }
        }),
        z = c.extend({
            initialize: function(t, i, n) {
                var r, s, a;
                if (t)
                    if ((r = t[0]) !== e) s = t[1];
                    else {
                        var o = t;
                        (r = o.x) === e && (o = c.read(arguments), r = o.x), s = o.y, a = o.selected
                    } else r = s = 0;
                this._x = r, this._y = s, this._owner = i, i[n] = this, a && this.setSelected(!0)
            },
            _set: function(t, e) {
                return this._x = t, this._y = e, this._owner._changed(this), this
            },
            getX: function() {
                return this._x
            },
            setX: function(t) {
                this._x = t, this._owner._changed(this)
            },
            getY: function() {
                return this._y
            },
            setY: function(t) {
                this._y = t, this._owner._changed(this)
            },
            isZero: function() {
                var t = u.isZero;
                return t(this._x) && t(this._y)
            },
            isSelected: function() {
                return !!(this._owner._selection & this._getSelection())
            },
            setSelected: function(t) {
                this._owner._changeSelection(this._getSelection(), t)
            },
            _getSelection: function() {
                var t = this._owner;
                return this === t._point ? 1 : this === t._handleIn ? 2 : this === t._handleOut ? 4 : 0
            }
        }),
        k = r.extend({
            _class: "Curve",
            beans: !0,
            initialize: function(t, e, i, n, r, s, a, o) {
                var h, u, l, c, f, d, _ = arguments.length;
                3 === _ ? (this._path = t, h = e, u = i) : _ ? 1 === _ ? "segment1" in t ? (h = new T(t.segment1), u = new T(t.segment2)) : "point1" in t ? (l = t.point1, f = t.handle1, d = t.handle2, c = t.point2) : Array.isArray(t) && (l = [t[0], t[1]], c = [t[6], t[7]], f = [t[2] - t[0], t[3] - t[1]], d = [t[4] - t[6], t[5] - t[7]]) : 2 === _ ? (h = new T(t), u = new T(e)) : 4 === _ ? (l = t, f = e, d = i, c = n) : 8 === _ && (l = [t, e], c = [a, o], f = [i - t, n - e], d = [r - a, s - o]) : (h = new T, u = new T), this._segment1 = h || new T(l, null, f), this._segment2 = u || new T(c, d, null)
            },
            _serialize: function(t, e) {
                return r.serialize(this.hasHandles() ? [this.getPoint1(), this.getHandle1(), this.getHandle2(), this.getPoint2()] : [this.getPoint1(), this.getPoint2()], t, !0, e)
            },
            _changed: function() {
                this._length = this._bounds = e
            },
            clone: function() {
                return new k(this._segment1, this._segment2)
            },
            toString: function() {
                var t = ["point1: " + this._segment1._point];
                return this._segment1._handleOut.isZero() || t.push("handle1: " + this._segment1._handleOut), this._segment2._handleIn.isZero() || t.push("handle2: " + this._segment2._handleIn), t.push("point2: " + this._segment2._point), "{ " + t.join(", ") + " }"
            },
            classify: function() {
                return k.classify(this.getValues())
            },
            remove: function() {
                var t = !1;
                if (this._path) {
                    var e = this._segment2,
                        i = e._handleOut;
                    t = e.remove(), t && this._segment1._handleOut.set(i)
                }
                return t
            },
            getPoint1: function() {
                return this._segment1._point
            },
            setPoint1: function() {
                this._segment1._point.set(c.read(arguments))
            },
            getPoint2: function() {
                return this._segment2._point
            },
            setPoint2: function() {
                this._segment2._point.set(c.read(arguments))
            },
            getHandle1: function() {
                return this._segment1._handleOut
            },
            setHandle1: function() {
                this._segment1._handleOut.set(c.read(arguments))
            },
            getHandle2: function() {
                return this._segment2._handleIn
            },
            setHandle2: function() {
                this._segment2._handleIn.set(c.read(arguments))
            },
            getSegment1: function() {
                return this._segment1
            },
            getSegment2: function() {
                return this._segment2
            },
            getPath: function() {
                return this._path
            },
            getIndex: function() {
                return this._segment1._index
            },
            getNext: function() {
                var t = this._path && this._path._curves;
                return t && (t[this._segment1._index + 1] || this._path._closed && t[0]) || null
            },
            getPrevious: function() {
                var t = this._path && this._path._curves;
                return t && (t[this._segment1._index - 1] || this._path._closed && t[t.length - 1]) || null
            },
            isFirst: function() {
                return !this._segment1._index
            },
            isLast: function() {
                var t = this._path;
                return t && this._segment1._index === t._curves.length - 1 || !1
            },
            isSelected: function() {
                return this.getPoint1().isSelected() && this.getHandle2().isSelected() && this.getHandle2().isSelected() && this.getPoint2().isSelected()
            },
            setSelected: function(t) {
                this.getPoint1().setSelected(t), this.getHandle1().setSelected(t), this.getHandle2().setSelected(t), this.getPoint2().setSelected(t)
            },
            getValues: function(t) {
                return k.getValues(this._segment1, this._segment2, t)
            },
            getPoints: function() {
                for (var t = this.getValues(), e = [], i = 0; i < 8; i += 2) e.push(new c(t[i], t[i + 1]));
                return e
            }
        }, {
            getLength: function() {
                return null == this._length && (this._length = k.getLength(this.getValues(), 0, 1)), this._length
            },
            getArea: function() {
                return k.getArea(this.getValues())
            },
            getLine: function() {
                return new m(this._segment1._point, this._segment2._point)
            },
            getPart: function(t, e) {
                return new k(k.getPart(this.getValues(), t, e))
            },
            getPartLength: function(t, e) {
                return k.getLength(this.getValues(), t, e)
            },
            divideAt: function(t) {
                return this.divideAtTime(t && t.curve === this ? t.time : this.getTimeAt(t))
            },
            divideAtTime: function(t, e) {
                var i = 1e-8,
                    n = 1 - i,
                    r = null;
                if (t >= i && t <= n) {
                    var s = k.subdivide(this.getValues(), t),
                        a = s[0],
                        o = s[1],
                        h = e || this.hasHandles(),
                        u = this._segment1,
                        l = this._segment2,
                        f = this._path;
                    h && (u._handleOut._set(a[2] - a[0], a[3] - a[1]), l._handleIn._set(o[4] - o[6], o[5] - o[7]));
                    var d = a[6],
                        _ = a[7],
                        g = new T(new c(d, _), h && new c(a[4] - d, a[5] - _), h && new c(o[2] - d, o[3] - _));
                    f ? (f.insert(u._index + 1, g), r = this.getNext()) : (this._segment2 = g, this._changed(), r = new k(g, l))
                }
                return r
            },
            splitAt: function(t) {
                var e = this._path;
                return e ? e.splitAt(t) : null
            },
            splitAtTime: function(t) {
                return this.splitAt(this.getLocationAtTime(t))
            },
            divide: function(t, i) {
                return this.divideAtTime(t === e ? .5 : i ? t : this.getTimeAt(t))
            },
            split: function(t, i) {
                return this.splitAtTime(t === e ? .5 : i ? t : this.getTimeAt(t))
            },
            reversed: function() {
                return new k(this._segment2.reversed(), this._segment1.reversed())
            },
            clearHandles: function() {
                this._segment1._handleOut._set(0, 0), this._segment2._handleIn._set(0, 0)
            },
            statics: {
                getValues: function(t, e, i, n) {
                    var r = t._point,
                        s = t._handleOut,
                        a = e._handleIn,
                        o = e._point,
                        h = r.x,
                        u = r.y,
                        l = o.x,
                        c = o.y,
                        f = n ? [h, u, h, u, l, c, l, c] : [h, u, h + s._x, u + s._y, l + a._x, c + a._y, l, c];
                    return i && i._transformCoordinates(f, f, 4), f
                },
                subdivide: function(t, i) {
                    var n = t[0],
                        r = t[1],
                        s = t[2],
                        a = t[3],
                        o = t[4],
                        h = t[5],
                        u = t[6],
                        l = t[7];
                    i === e && (i = .5);
                    var c = 1 - i,
                        f = c * n + i * s,
                        d = c * r + i * a,
                        _ = c * s + i * o,
                        g = c * a + i * h,
                        v = c * o + i * u,
                        p = c * h + i * l,
                        m = c * f + i * _,
                        y = c * d + i * g,
                        w = c * _ + i * v,
                        x = c * g + i * p,
                        b = c * m + i * w,
                        C = c * y + i * x;
                    return [
                        [n, r, f, d, m, y, b, C],
                        [b, C, w, x, v, p, u, l]
                    ]
                },
                getMonoCurves: function(t, e) {
                    var i = [],
                        n = e ? 0 : 1,
                        r = t[n + 0],
                        s = t[n + 2],
                        a = t[n + 4],
                        o = t[n + 6];
                    if (r >= s == s >= a && s >= a == a >= o || k.isStraight(t)) i.push(t);
                    else {
                        var h = 3 * (s - a) - r + o,
                            l = 2 * (r + a) - 4 * s,
                            c = s - r,
                            f = 1e-8,
                            d = 1 - f,
                            _ = [],
                            g = u.solveQuadratic(h, l, c, _, f, d);
                        if (g) {
                            _.sort();
                            var v = _[0],
                                p = k.subdivide(t, v);
                            i.push(p[0]), g > 1 && (v = (_[1] - v) / (1 - v), p = k.subdivide(p[1], v), i.push(p[0])), i.push(p[1])
                        } else i.push(t)
                    }
                    return i
                },
                solveCubic: function(t, e, i, n, r, s) {
                    var a = t[e],
                        o = t[e + 2],
                        h = t[e + 4],
                        l = t[e + 6],
                        c = 0;
                    if (!(a < i && l < i && o < i && h < i || a > i && l > i && o > i && h > i)) {
                        var f = 3 * (o - a),
                            d = 3 * (h - o) - f,
                            _ = l - a - f - d;
                        c = u.solveCubic(_, d, f, a - i, n, r, s)
                    }
                    return c
                },
                getTimeOf: function(t, e) {
                    var i = new c(t[0], t[1]),
                        n = new c(t[6], t[7]),
                        r = 1e-12,
                        s = 1e-7,
                        a = e.isClose(i, r) ? 0 : e.isClose(n, r) ? 1 : null;
                    if (null === a)
                        for (var o = [e.x, e.y], h = [], u = 0; u < 2; u++)
                            for (var l = k.solveCubic(t, u, o[u], h, 0, 1), f = 0; f < l; f++) {
                                var d = h[f];
                                if (e.isClose(k.getPoint(t, d), s)) return d
                            }
                    return e.isClose(i, s) ? 0 : e.isClose(n, s) ? 1 : null
                },
                getNearestTime: function(t, e) {
                    function i(i) {
                        if (i >= 0 && i <= 1) {
                            var n = e.getDistance(k.getPoint(t, i), !0);
                            if (n < d) return d = n, _ = i, !0
                        }
                    }
                    if (k.isStraight(t)) {
                        var n = t[0],
                            r = t[1],
                            s = t[6],
                            a = t[7],
                            o = s - n,
                            h = a - r,
                            u = o * o + h * h;
                        if (0 === u) return 0;
                        var l = ((e.x - n) * o + (e.y - r) * h) / u;
                        return l < 1e-12 ? 0 : l > .999999999999 ? 1 : k.getTimeOf(t, new c(n + l * o, r + l * h))
                    }
                    for (var f = 100, d = 1 / 0, _ = 0, g = 0; g <= f; g++) i(g / f);
                    for (var v = 1 / (2 * f); v > 1e-8;) i(_ - v) || i(_ + v) || (v /= 2);
                    return _
                },
                getPart: function(t, e, i) {
                    var n = e > i;
                    if (n) {
                        var r = e;
                        e = i, i = r
                    }
                    return e > 0 && (t = k.subdivide(t, e)[1]), i < 1 && (t = k.subdivide(t, (i - e) / (1 - e))[0]), n ? [t[6], t[7], t[4], t[5], t[2], t[3], t[0], t[1]] : t
                },
                isFlatEnough: function(t, e) {
                    var i = t[0],
                        n = t[1],
                        r = t[2],
                        s = t[3],
                        a = t[4],
                        o = t[5],
                        h = t[6],
                        u = t[7],
                        l = 3 * r - 2 * i - h,
                        c = 3 * s - 2 * n - u,
                        f = 3 * a - 2 * h - i,
                        d = 3 * o - 2 * u - n;
                    return Math.max(l * l, f * f) + Math.max(c * c, d * d) <= 16 * e * e
                },
                getArea: function(t) {
                    var e = t[0],
                        i = t[1],
                        n = t[2],
                        r = t[3],
                        s = t[4],
                        a = t[5],
                        o = t[6],
                        h = t[7];
                    return 3 * ((h - i) * (n + s) - (o - e) * (r + a) + r * (e - s) - n * (i - a) + h * (s + e / 3) - o * (a + i / 3)) / 20
                },
                getBounds: function(t) {
                    for (var e = t.slice(0, 2), i = e.slice(), n = [0, 0], r = 0; r < 2; r++) k._addBounds(t[r], t[r + 2], t[r + 4], t[r + 6], r, 0, e, i, n);
                    return new g(e[0], e[1], i[0] - e[0], i[1] - e[1])
                },
                _addBounds: function(t, e, i, n, r, s, a, o, h) {
                    function l(t, e) {
                        var i = t - e,
                            n = t + e;
                        i < a[r] && (a[r] = i), n > o[r] && (o[r] = n)
                    }
                    s /= 2;
                    var c = a[r] - s,
                        f = o[r] + s;
                    if (t < c || e < c || i < c || n < c || t > f || e > f || i > f || n > f)
                        if (e < t != e < n && i < t != i < n) l(t, s), l(n, s);
                        else {
                            var d = 3 * (e - i) - t + n,
                                _ = 2 * (t + i) - 4 * e,
                                g = e - t,
                                v = u.solveQuadratic(d, _, g, h),
                                p = 1e-8,
                                m = 1 - p;
                            l(n, 0);
                            for (var y = 0; y < v; y++) {
                                var w = h[y],
                                    x = 1 - w;
                                p <= w && w <= m && l(x * x * x * t + 3 * x * x * w * e + 3 * x * w * w * i + w * w * w * n, s)
                            }
                        }
                }
            }
        }, r.each(["getBounds", "getStrokeBounds", "getHandleBounds"], function(t) {
            this[t] = function() {
                this._bounds || (this._bounds = {});
                var e = this._bounds[t];
                return e || (e = this._bounds[t] = L[t]([this._segment1, this._segment2], !1, this._path)), e.clone()
            }
        }, {}), r.each({
            isStraight: function(t, e, i, n) {
                if (e.isZero() && i.isZero()) return !0;
                var r = n.subtract(t);
                if (r.isZero()) return !1;
                if (r.isCollinear(e) && r.isCollinear(i)) {
                    var s = new m(t, n),
                        a = 1e-7;
                    if (s.getDistance(t.add(e)) < a && s.getDistance(n.add(i)) < a) {
                        var o = r.dot(r),
                            h = r.dot(e) / o,
                            u = r.dot(i) / o;
                        return h >= 0 && h <= 1 && u <= 0 && u >= -1
                    }
                }
                return !1
            },
            isLinear: function(t, e, i, n) {
                var r = n.subtract(t).divide(3);
                return e.equals(r) && i.negate().equals(r)
            }
        }, function(t, e) {
            this[e] = function(e) {
                var i = this._segment1,
                    n = this._segment2;
                return t(i._point, i._handleOut, n._handleIn, n._point, e)
            }, this.statics[e] = function(e, i) {
                var n = e[0],
                    r = e[1],
                    s = e[6],
                    a = e[7];
                return t(new c(n, r), new c(e[2] - n, e[3] - r), new c(e[4] - s, e[5] - a), new c(s, a), i)
            }
        }, {
            statics: {},
            hasHandles: function() {
                return !this._segment1._handleOut.isZero() || !this._segment2._handleIn.isZero()
            },
            hasLength: function(t) {
                return (!this.getPoint1().equals(this.getPoint2()) || this.hasHandles()) && this.getLength() > (t || 0)
            },
            isCollinear: function(t) {
                return t && this.isStraight() && t.isStraight() && this.getLine().isCollinear(t.getLine())
            },
            isHorizontal: function() {
                return this.isStraight() && Math.abs(this.getTangentAtTime(.5).y) < 1e-8
            },
            isVertical: function() {
                return this.isStraight() && Math.abs(this.getTangentAtTime(.5).x) < 1e-8
            }
        }), {
            beans: !1,
            getLocationAt: function(t, e) {
                return this.getLocationAtTime(e ? t : this.getTimeAt(t))
            },
            getLocationAtTime: function(t) {
                return null != t && t >= 0 && t <= 1 ? new O(this, t) : null
            },
            getTimeAt: function(t, e) {
                return k.getTimeAt(this.getValues(), t, e)
            },
            getParameterAt: "#getTimeAt",
            getOffsetAtTime: function(t) {
                return this.getPartLength(0, t)
            },
            getLocationOf: function() {
                return this.getLocationAtTime(this.getTimeOf(c.read(arguments)))
            },
            getOffsetOf: function() {
                var t = this.getLocationOf.apply(this, arguments);
                return t ? t.getOffset() : null
            },
            getTimeOf: function() {
                return k.getTimeOf(this.getValues(), c.read(arguments))
            },
            getParameterOf: "#getTimeOf",
            getNearestLocation: function() {
                var t = c.read(arguments),
                    e = this.getValues(),
                    i = k.getNearestTime(e, t),
                    n = k.getPoint(e, i);
                return new O(this, i, n, null, t.getDistance(n))
            },
            getNearestPoint: function() {
                var t = this.getNearestLocation.apply(this, arguments);
                return t ? t.getPoint() : t
            }
        }, new function() {
            var t = ["getPoint", "getTangent", "getNormal", "getWeightedTangent", "getWeightedNormal", "getCurvature"];
            return r.each(t, function(t) {
                this[t + "At"] = function(e, i) {
                    var n = this.getValues();
                    return k[t](n, i ? e : k.getTimeAt(n, e))
                }, this[t + "AtTime"] = function(e) {
                    return k[t](this.getValues(), e)
                }
            }, {
                statics: {
                    _evaluateMethods: t
                }
            })
        }, new function() {
            function t(t) {
                var e = t[0],
                    i = t[1],
                    n = t[2],
                    r = t[3],
                    s = t[4],
                    a = t[5],
                    o = t[6],
                    h = t[7],
                    u = 9 * (n - s) + 3 * (o - e),
                    l = 6 * (e + s) - 12 * n,
                    c = 3 * (n - e),
                    f = 9 * (r - a) + 3 * (h - i),
                    d = 6 * (i + a) - 12 * r,
                    _ = 3 * (r - i);
                return function(t) {
                    var e = (u * t + l) * t + c,
                        i = (f * t + d) * t + _;
                    return Math.sqrt(e * e + i * i)
                }
            }

            function i(t, e) {
                return Math.max(2, Math.min(16, Math.ceil(32 * Math.abs(e - t))))
            }

            function n(t, e, i, n) {
                if (null == e || e < 0 || e > 1) return null;
                var r = t[0],
                    s = t[1],
                    a = t[2],
                    o = t[3],
                    h = t[4],
                    l = t[5],
                    f = t[6],
                    d = t[7],
                    _ = u.isZero;
                _(a - r) && _(o - s) && (a = r, o = s), _(h - f) && _(l - d) && (h = f, l = d);
                var g, v, p = 3 * (a - r),
                    m = 3 * (h - a) - p,
                    y = f - r - p - m,
                    w = 3 * (o - s),
                    x = 3 * (l - o) - w,
                    b = d - s - w - x;
                if (0 === i) g = 0 === e ? r : 1 === e ? f : ((y * e + m) * e + p) * e + r, v = 0 === e ? s : 1 === e ? d : ((b * e + x) * e + w) * e + s;
                else {
                    var C = 1e-8,
                        S = 1 - C;
                    if (e < C ? (g = p, v = w) : e > S ? (g = 3 * (f - h), v = 3 * (d - l)) : (g = (3 * y * e + 2 * m) * e + p, v = (3 * b * e + 2 * x) * e + w), n) {
                        0 === g && 0 === v && (e < C || e > S) && (g = h - a, v = l - o);
                        var P = Math.sqrt(g * g + v * v);
                        P && (g /= P, v /= P)
                    }
                    if (3 === i) {
                        var h = 6 * y * e + 2 * m,
                            l = 6 * b * e + 2 * x,
                            I = Math.pow(g * g + v * v, 1.5);
                        g = 0 !== I ? (g * l - v * h) / I : 0, v = 0
                    }
                }
                return 2 === i ? new c(v, (-g)) : new c(g, v)
            }
            return {
                statics: {
                    classify: function(t) {
                        function i(t, i, n) {
                            var r = i !== e,
                                s = r && i > 0 && i < 1,
                                a = r && n > 0 && n < 1;
                            return !r || (s || a) && ("loop" !== t || s && a) || (t = "arch", s = a = !1), {
                                type: t,
                                roots: s || a ? s && a ? i < n ? [i, n] : [n, i] : [s ? i : n] : null
                            }
                        }
                        var n = t[0],
                            r = t[1],
                            s = t[2],
                            a = t[3],
                            o = t[4],
                            h = t[5],
                            l = t[6],
                            c = t[7],
                            f = n * (c - h) + r * (o - l) + l * h - c * o,
                            d = s * (r - c) + a * (l - n) + n * c - r * l,
                            _ = o * (a - r) + h * (n - s) + s * r - a * n,
                            g = 3 * _,
                            v = g - d,
                            p = v - d + f,
                            m = Math.sqrt(p * p + v * v + g * g),
                            y = 0 !== m ? 1 / m : 0,
                            w = u.isZero,
                            x = "serpentine";
                        if (p *= y, v *= y, g *= y, w(p)) return w(v) ? i(w(g) ? "line" : "quadratic") : i(x, g / (3 * v));
                        var b = 3 * v * v - 4 * p * g;
                        if (w(b)) return i("cusp", v / (2 * p));
                        var C = b > 0 ? Math.sqrt(b / 3) : Math.sqrt(-b),
                            S = 2 * p;
                        return i(b > 0 ? x : "loop", (v + C) / S, (v - C) / S)
                    },
                    getLength: function(n, r, s, a) {
                        if (r === e && (r = 0), s === e && (s = 1), k.isStraight(n)) {
                            var o = n;
                            s < 1 && (o = k.subdivide(o, s)[0], r /= s), r > 0 && (o = k.subdivide(o, r)[1]);
                            var h = o[6] - o[0],
                                l = o[7] - o[1];
                            return Math.sqrt(h * h + l * l)
                        }
                        return u.integrate(a || t(n), r, s, i(r, s))
                    },
                    getTimeAt: function(n, r, s) {
                        function a(t) {
                            return p += u.integrate(d, s, t, i(s, t)), s = t, p - r
                        }
                        if (s === e && (s = r < 0 ? 1 : 0), 0 === r) return s;
                        var o = Math.abs,
                            h = 1e-12,
                            l = r > 0,
                            c = l ? s : 0,
                            f = l ? 1 : s,
                            d = t(n),
                            _ = k.getLength(n, c, f, d),
                            g = o(r) - _;
                        if (o(g) < h) return l ? f : c;
                        if (g > h) return null;
                        var v = r / _,
                            p = 0;
                        return u.findRoot(a, d, s + v, c, f, 32, 1e-12)
                    },
                    getPoint: function(t, e) {
                        return n(t, e, 0, !1)
                    },
                    getTangent: function(t, e) {
                        return n(t, e, 1, !0)
                    },
                    getWeightedTangent: function(t, e) {
                        return n(t, e, 1, !1)
                    },
                    getNormal: function(t, e) {
                        return n(t, e, 2, !0)
                    },
                    getWeightedNormal: function(t, e) {
                        return n(t, e, 2, !1)
                    },
                    getCurvature: function(t, e) {
                        return n(t, e, 3, !1).x
                    },
                    getPeaks: function(t) {
                        var e = t[0],
                            i = t[1],
                            n = t[2],
                            r = t[3],
                            s = t[4],
                            a = t[5],
                            o = t[6],
                            h = t[7],
                            l = -e + 3 * n - 3 * s + o,
                            c = 3 * e - 6 * n + 3 * s,
                            f = -3 * e + 3 * n,
                            d = -i + 3 * r - 3 * a + h,
                            _ = 3 * i - 6 * r + 3 * a,
                            g = -3 * i + 3 * r,
                            v = 1e-8,
                            p = 1 - v,
                            m = [];
                        return u.solveCubic(9 * (l * l + d * d), 9 * (l * c + _ * d), 2 * (c * c + _ * _) + 3 * (f * l + g * d), f * c + _ * g, m, v, p), m.sort()
                    }
                }
            }
        }, new function() {
            function t(t, e, i, n, r, s, a) {
                var o = !a && i.getPrevious() === r,
                    h = !a && i !== r && i.getNext() === r,
                    u = 1e-8,
                    l = 1 - u;
                if (null !== n && n >= (o ? u : 0) && n <= (h ? l : 1) && null !== s && s >= (h ? u : 0) && s <= (o ? l : 1)) {
                    var c = new O(i, n, null, a),
                        f = new O(r, s, null, a);
                    c._intersection = f, f._intersection = c, e && !e(c) || O.insert(t, c, !0)
                }
            }

            function e(r, s, a, o, h, u, l, c, f, d, _, g, v) {
                if (++f >= 4096 || ++c >= 40) return f;
                var p, y, w = 1e-9,
                    x = s[0],
                    b = s[1],
                    C = s[6],
                    S = s[7],
                    P = m.getSignedDistance,
                    I = P(x, b, C, S, s[2], s[3]),
                    M = P(x, b, C, S, s[4], s[5]),
                    T = I * M > 0 ? .75 : 4 / 9,
                    z = T * Math.min(0, I, M),
                    O = T * Math.max(0, I, M),
                    A = P(x, b, C, S, r[0], r[1]),
                    L = P(x, b, C, S, r[2], r[3]),
                    N = P(x, b, C, S, r[4], r[5]),
                    B = P(x, b, C, S, r[6], r[7]),
                    D = i(A, L, N, B),
                    j = D[0],
                    E = D[1];
                if (0 === I && 0 === M && 0 === A && 0 === L && 0 === N && 0 === B || null == (p = n(j, E, z, O)) || null == (y = n(j.reverse(), E.reverse(), z, O))) return f;
                var F = d + (_ - d) * p,
                    R = d + (_ - d) * y;
                if (Math.max(v - g, R - F) < w) {
                    var q = (F + R) / 2,
                        V = (g + v) / 2;
                    t(h, u, l ? o : a, l ? V : q, l ? a : o, l ? q : V)
                } else if (r = k.getPart(r, p, y), y - p > .8)
                    if (R - F > v - g) {
                        var H = k.subdivide(r, .5),
                            q = (F + R) / 2;
                        f = e(s, H[0], o, a, h, u, !l, c, f, g, v, F, q), f = e(s, H[1], o, a, h, u, !l, c, f, g, v, q, R)
                    } else {
                        var H = k.subdivide(s, .5),
                            V = (g + v) / 2;
                        f = e(H[0], r, o, a, h, u, !l, c, f, g, V, F, R), f = e(H[1], r, o, a, h, u, !l, c, f, V, v, F, R)
                    } else f = v - g >= w ? e(s, r, o, a, h, u, !l, c, f, g, v, F, R) : e(r, s, a, o, h, u, l, c, f, F, R, g, v);
                return f
            }

            function i(t, e, i, n) {
                var r, s = [0, t],
                    a = [1 / 3, e],
                    o = [2 / 3, i],
                    h = [1, n],
                    u = e - (2 * t + n) / 3,
                    l = i - (t + 2 * n) / 3;
                if (u * l < 0) r = [
                    [s, a, h],
                    [s, o, h]
                ];
                else {
                    var c = u / l;
                    r = [c >= 2 ? [s, a, h] : c <= .5 ? [s, o, h] : [s, a, o, h],
                        [s, h]
                    ]
                }
                return (u || l) < 0 ? r.reverse() : r
            }

            function n(t, e, i, n) {
                return t[0][1] < i ? r(t, !0, i) : e[0][1] > n ? r(e, !1, n) : t[0][0]
            }

            function r(t, e, i) {
                for (var n = t[0][0], r = t[0][1], s = 1, a = t.length; s < a; s++) {
                    var o = t[s][0],
                        h = t[s][1];
                    if (e ? h >= i : h <= i) return h === i ? o : n + (i - r) * (o - n) / (h - r);
                    n = o, r = h
                }
                return null
            }

            function s(t, e, i, n, r) {
                var s = u.isZero;
                if (s(n) && s(r)) {
                    var a = k.getTimeOf(t, new c(e, i));
                    return null === a ? [] : [a]
                }
                for (var o = Math.atan2(-r, n), h = Math.sin(o), l = Math.cos(o), f = [], d = [], _ = 0; _ < 8; _ += 2) {
                    var g = t[_] - e,
                        v = t[_ + 1] - i;
                    f.push(g * l - v * h, g * h + v * l)
                }
                return k.solveCubic(f, 1, 0, d, 0, 1), d
            }

            function a(e, i, n, r, a, o, h) {
                for (var u = i[0], l = i[1], c = i[6], f = i[7], d = s(e, u, l, c - u, f - l), _ = 0, g = d.length; _ < g; _++) {
                    var v = d[_],
                        p = k.getPoint(e, v),
                        m = k.getTimeOf(i, p);
                    null !== m && t(a, o, h ? r : n, h ? m : v, h ? n : r, h ? v : m)
                }
            }

            function o(e, i, n, r, s, a) {
                var o = m.intersect(e[0], e[1], e[6], e[7], i[0], i[1], i[6], i[7]);
                o && t(s, a, n, k.getTimeOf(e, o), r, k.getTimeOf(i, o))
            }

            function h(i, n, r, s, h, u) {
                var l = 1e-12,
                    f = Math.min,
                    _ = Math.max;
                if (_(i[0], i[2], i[4], i[6]) + l > f(n[0], n[2], n[4], n[6]) && f(i[0], i[2], i[4], i[6]) - l < _(n[0], n[2], n[4], n[6]) && _(i[1], i[3], i[5], i[7]) + l > f(n[1], n[3], n[5], n[7]) && f(i[1], i[3], i[5], i[7]) - l < _(n[1], n[3], n[5], n[7])) {
                    var g = d(i, n);
                    if (g)
                        for (var v = 0; v < 2; v++) {
                            var p = g[v];
                            t(h, u, r, p[0], s, p[1], !0)
                        } else {
                            var m = k.isStraight(i),
                                y = k.isStraight(n),
                                w = m && y,
                                x = m && !y,
                                b = h.length;
                            if ((w ? o : m || y ? a : e)(x ? n : i, x ? i : n, x ? s : r, x ? r : s, h, u, x, 0, 0, 0, 1, 0, 1), !w || h.length === b)
                                for (var v = 0; v < 4; v++) {
                                    var C = v >> 1,
                                        S = 1 & v,
                                        P = 6 * C,
                                        I = 6 * S,
                                        M = new c(i[P], i[P + 1]),
                                        T = new c(n[I], n[I + 1]);
                                    M.isClose(T, l) && t(h, u, r, C, s, S)
                                }
                        }
                }
                return h
            }

            function l(e, i, n, r) {
                var s = k.classify(e);
                if ("loop" === s.type) {
                    var a = s.roots;
                    t(n, r, i, a[0], i, a[1])
                }
                return n
            }

            function f(t, e, i, n, r, s) {
                var a = !e;
                a && (e = t);
                for (var o, u, c = t.length, f = e.length, d = [], _ = [], g = 0; g < f; g++) d[g] = e[g].getValues(r);
                for (var g = 0; g < c; g++) {
                    var v = t[g],
                        p = a ? d[g] : v.getValues(n),
                        m = v.getPath();
                    m !== u && (u = m, o = [], _.push(o)), a && l(p, v, o, i);
                    for (var y = a ? g + 1 : 0; y < f; y++) {
                        if (s && o.length) return o;
                        h(p, d[y], v, e[y], o, i)
                    }
                }
                o = [];
                for (var g = 0, w = _.length; g < w; g++) o.push.apply(o, _[g]);
                return o
            }

            function d(t, e) {
                function i(t) {
                    var e = t[6] - t[0],
                        i = t[7] - t[1];
                    return e * e + i * i
                }
                var n = Math.abs,
                    r = m.getDistance,
                    s = 1e-8,
                    a = 1e-7,
                    o = k.isStraight(t),
                    h = k.isStraight(e),
                    u = o && h,
                    l = i(t) < i(e),
                    f = l ? e : t,
                    d = l ? t : e,
                    _ = f[0],
                    g = f[1],
                    v = f[6] - _,
                    p = f[7] - g;
                if (r(_, g, v, p, d[0], d[1], !0) < a && r(_, g, v, p, d[6], d[7], !0) < a) !u && r(_, g, v, p, f[2], f[3], !0) < a && r(_, g, v, p, f[4], f[5], !0) < a && r(_, g, v, p, d[2], d[3], !0) < a && r(_, g, v, p, d[4], d[5], !0) < a && (o = h = u = !0);
                else if (u) return null;
                if (o ^ h) return null;
                for (var y = [t, e], w = [], x = 0; x < 4 && w.length < 2; x++) {
                    var b = 1 & x,
                        C = 1 ^ b,
                        S = x >> 1,
                        P = k.getTimeOf(y[b], new c(y[C][S ? 6 : 0], y[C][S ? 7 : 1]));
                    if (null != P) {
                        var I = b ? [S, P] : [P, S];
                        (!w.length || n(I[0] - w[0][0]) > s && n(I[1] - w[0][1]) > s) && w.push(I)
                    }
                    if (x > 2 && !w.length) break
                }
                if (2 !== w.length) w = null;
                else if (!u) {
                    var M = k.getPart(t, w[0][0], w[1][0]),
                        T = k.getPart(e, w[0][1], w[1][1]);
                    (n(T[2] - M[2]) > a || n(T[3] - M[3]) > a || n(T[4] - M[4]) > a || n(T[5] - M[5]) > a) && (w = null)
                }
                return w
            }
            return {
                getIntersections: function(t) {
                    var e = this.getValues(),
                        i = t && t !== this && t.getValues();
                    return i ? h(e, i, this, t, []) : l(e, this, [])
                },
                statics: {
                    getOverlaps: d,
                    getIntersections: f,
                    getCurveLineIntersections: s
                }
            }
        }),
        O = r.extend({
            _class: "CurveLocation",
            initialize: function(t, e, i, n, r) {
                if (e >= .99999999) {
                    var s = t.getNext();
                    s && (e = 0, t = s)
                }
                this._setCurve(t), this._time = e, this._point = i || t.getPointAtTime(e), this._overlap = n, this._distance = r, this._intersection = this._next = this._previous = null
            },
            _setCurve: function(t) {
                var e = t._path;
                this._path = e, this._version = e ? e._version : 0, this._curve = t, this._segment = null, this._segment1 = t._segment1, this._segment2 = t._segment2
            },
            _setSegment: function(t) {
                this._setCurve(t.getCurve()), this._segment = t, this._time = t === this._segment1 ? 0 : 1, this._point = t._point.clone()
            },
            getSegment: function() {
                var t = this._segment;
                if (!t) {
                    var e = this.getCurve(),
                        i = this.getTime();
                    0 === i ? t = e._segment1 : 1 === i ? t = e._segment2 : null != i && (t = e.getPartLength(0, i) < e.getPartLength(i, 1) ? e._segment1 : e._segment2), this._segment = t
                }
                return t
            },
            getCurve: function() {
                function t(t) {
                    var e = t && t.getCurve();
                    if (e && null != (i._time = e.getTimeOf(i._point))) return i._setCurve(e), e
                }
                var e = this._path,
                    i = this;
                return e && e._version !== this._version && (this._time = this._offset = this._curveOffset = this._curve = null), this._curve || t(this._segment) || t(this._segment1) || t(this._segment2.getPrevious())
            },
            getPath: function() {
                var t = this.getCurve();
                return t && t._path
            },
            getIndex: function() {
                var t = this.getCurve();
                return t && t.getIndex()
            },
            getTime: function() {
                var t = this.getCurve(),
                    e = this._time;
                return t && null == e ? this._time = t.getTimeOf(this._point) : e
            },
            getParameter: "#getTime",
            getPoint: function() {
                return this._point
            },
            getOffset: function() {
                var t = this._offset;
                if (null == t) {
                    t = 0;
                    var e = this.getPath(),
                        i = this.getIndex();
                    if (e && null != i)
                        for (var n = e.getCurves(), r = 0; r < i; r++) t += n[r].getLength();
                    this._offset = t += this.getCurveOffset()
                }
                return t
            },
            getCurveOffset: function() {
                var t = this._curveOffset;
                if (null == t) {
                    var e = this.getCurve(),
                        i = this.getTime();
                    this._curveOffset = t = null != i && e && e.getPartLength(0, i)
                }
                return t
            },
            getIntersection: function() {
                return this._intersection
            },
            getDistance: function() {
                return this._distance
            },
            divide: function() {
                var t = this.getCurve(),
                    e = t && t.divideAtTime(this.getTime());
                return e && this._setSegment(e._segment1), e
            },
            split: function() {
                var t = this.getCurve(),
                    e = t._path,
                    i = t && t.splitAtTime(this.getTime());
                return i && this._setSegment(e.getLastSegment()), i
            },
            equals: function(t, e) {
                var i = this === t;
                if (!i && t instanceof O) {
                    var n = this.getCurve(),
                        r = t.getCurve(),
                        s = n._path,
                        a = r._path;
                    if (s === a) {
                        var o = Math.abs,
                            h = 1e-7,
                            u = o(this.getOffset() - t.getOffset()),
                            l = !e && this._intersection,
                            c = !e && t._intersection;
                        i = (u < h || s && o(s.getLength() - u) < h) && (!l && !c || l && c && l.equals(c, !0))
                    }
                }
                return i
            },
            toString: function() {
                var t = [],
                    e = this.getPoint(),
                    i = h.instance;
                e && t.push("point: " + e);
                var n = this.getIndex();
                null != n && t.push("index: " + n);
                var r = this.getTime();
                return null != r && t.push("time: " + i.number(r)), null != this._distance && t.push("distance: " + i.number(this._distance)), "{ " + t.join(", ") + " }"
            },
            isTouching: function() {
                var t = this._intersection;
                if (t && this.getTangent().isCollinear(t.getTangent())) {
                    var e = this.getCurve(),
                        i = t.getCurve();
                    return !(e.isStraight() && i.isStraight() && e.getLine().intersect(i.getLine()))
                }
                return !1
            },
            isCrossing: function() {
                function t(t, e) {
                    var i = t.getValues(),
                        n = k.classify(i).roots || k.getPeaks(i),
                        r = n.length,
                        s = e && r > 1 ? n[r - 1] : r > 0 ? n[0] : .5;
                    d.push(k.getLength(i, e ? s : 0, e ? 1 : s) / 2)
                }

                function e(t, e, i) {
                    return e < i ? t > e && t < i : t > e || t < i
                }
                var i = this._intersection;
                if (!i) return !1;
                var n = this.getTime(),
                    r = i.getTime(),
                    s = 1e-8,
                    a = 1 - s,
                    o = n >= s && n <= a,
                    h = r >= s && r <= a;
                if (o && h) return !this.isTouching();
                var u = this.getCurve(),
                    l = n < s ? u.getPrevious() : u,
                    c = i.getCurve(),
                    f = r < s ? c.getPrevious() : c;
                if (n > a && (u = u.getNext()), r > a && (c = c.getNext()), !(l && u && f && c)) return !1;
                var d = [];
                o || (t(l, !0), t(u, !1)), h || (t(f, !0), t(c, !1));
                var _ = this.getPoint(),
                    g = Math.min.apply(Math, d),
                    v = o ? u.getTangentAtTime(n) : u.getPointAt(g).subtract(_),
                    p = o ? v.negate() : l.getPointAt(-g).subtract(_),
                    m = h ? c.getTangentAtTime(r) : c.getPointAt(g).subtract(_),
                    y = h ? m.negate() : f.getPointAt(-g).subtract(_),
                    w = p.getAngle(),
                    x = v.getAngle(),
                    b = y.getAngle(),
                    C = m.getAngle();
                return !!(o ? e(w, b, C) ^ e(x, b, C) && e(w, C, b) ^ e(x, C, b) : e(b, w, x) ^ e(C, w, x) && e(b, x, w) ^ e(C, x, w))
            },
            hasOverlap: function() {
                return !!this._overlap
            }
        }, r.each(k._evaluateMethods, function(t) {
            var e = t + "At";
            this[t] = function() {
                var t = this.getCurve(),
                    i = this.getTime();
                return null != i && t && t[e](i, !0)
            }
        }, {
            preserve: !0
        }), new function() {
            function t(t, e, i) {
                function n(i, n) {
                    for (var s = i + n; s >= -1 && s <= r; s += n) {
                        var a = t[(s % r + r) % r];
                        if (!e.getPoint().isClose(a.getPoint(), 1e-7)) break;
                        if (e.equals(a)) return a
                    }
                    return null
                }
                for (var r = t.length, s = 0, a = r - 1; s <= a;) {
                    var o, h = s + a >>> 1,
                        u = t[h];
                    if (i && (o = e.equals(u) ? u : n(h, -1) || n(h, 1))) return e._overlap && (o._overlap = o._intersection._overlap = !0), o;
                    var l = e.getPath(),
                        c = u.getPath(),
                        f = l !== c ? l._id - c._id : e.getIndex() + e.getTime() - (u.getIndex() + u.getTime());
                    f < 0 ? a = h - 1 : s = h + 1
                }
                return t.splice(s, 0, e), e
            }
            return {
                statics: {
                    insert: t,
                    expand: function(e) {
                        for (var i = e.slice(), n = e.length - 1; n >= 0; n--) t(i, e[n]._intersection, !1);
                        return i
                    }
                }
            }
        }),
        A = w.extend({
            _class: "PathItem",
            _selectBounds: !1,
            _canScaleStroke: !0,
            beans: !0,
            initialize: function() {},
            statics: {
                create: function(t) {
                    var e, i, n;
                    if (r.isPlainObject(t) ? (i = t.segments, e = t.pathData) : Array.isArray(t) ? i = t : "string" == typeof t && (e = t), i) {
                        var s = i[0];
                        n = s && Array.isArray(s[0])
                    } else e && (n = (e.match(/m/gi) || []).length > 1 || /z\s*\S+/i.test(e));
                    var a = n ? N : L;
                    return new a(t)
                }
            },
            _asPathItem: function() {
                return this
            },
            isClockwise: function() {
                return this.getArea() >= 0
            },
            setClockwise: function(t) {
                this.isClockwise() != (t = !!t) && this.reverse()
            },
            setPathData: function(t) {
                function e(t, e) {
                    var i = +n[t];
                    return o && (i += h[e]), i
                }

                function i(t) {
                    return new c(e(t, "x"), e(t + 1, "y"))
                }
                var n, r, s, a = t && t.match(/[mlhvcsqtaz][^mlhvcsqtaz]*/gi),
                    o = !1,
                    h = new c,
                    u = new c;
                this.clear();
                for (var l = 0, f = a && a.length; l < f; l++) {
                    var _ = a[l],
                        g = _[0],
                        v = g.toLowerCase();
                    n = _.match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g);
                    var p = n && n.length;
                    switch (o = g === v, "z" !== r || /[mz]/.test(v) || this.moveTo(h), v) {
                        case "m":
                        case "l":
                            for (var m = "m" === v, y = 0; y < p; y += 2) this[m ? "moveTo" : "lineTo"](h = i(y)), m && (u = h, m = !1);
                            s = h;
                            break;
                        case "h":
                        case "v":
                            var w = "h" === v ? "x" : "y";
                            h = h.clone();
                            for (var y = 0; y < p; y++) h[w] = e(y, w), this.lineTo(h);
                            s = h;
                            break;
                        case "c":
                            for (var y = 0; y < p; y += 6) this.cubicCurveTo(i(y), s = i(y + 2), h = i(y + 4));
                            break;
                        case "s":
                            for (var y = 0; y < p; y += 4) this.cubicCurveTo(/[cs]/.test(r) ? h.multiply(2).subtract(s) : h, s = i(y), h = i(y + 2)), r = v;
                            break;
                        case "q":
                            for (var y = 0; y < p; y += 4) this.quadraticCurveTo(s = i(y), h = i(y + 2));
                            break;
                        case "t":
                            for (var y = 0; y < p; y += 2) this.quadraticCurveTo(s = /[qt]/.test(r) ? h.multiply(2).subtract(s) : h, h = i(y)), r = v;
                            break;
                        case "a":
                            for (var y = 0; y < p; y += 7) this.arcTo(h = i(y + 5), new d((+n[y]), (+n[y + 1])), +n[y + 2], +n[y + 4], +n[y + 3]);
                            break;
                        case "z":
                            this.closePath(1e-12), h = u
                    }
                    r = v
                }
            },
            _canComposite: function() {
                return !(this.hasFill() && this.hasStroke())
            },
            _contains: function(t) {
                var e = t.isInside(this.getBounds({
                    internal: !0,
                    handle: !0
                })) ? this._getWinding(t) : {};
                return e.onPath || !!("evenodd" === this.getFillRule() ? 1 & e.windingL || 1 & e.windingR : e.winding)
            },
            getIntersections: function(t, e, i, n) {
                var r = this === t || !t,
                    s = this._matrix._orNullIfIdentity(),
                    a = r ? s : (i || t._matrix)._orNullIfIdentity();
                return r || this.getBounds(s).intersects(t.getBounds(a), 1e-12) ? k.getIntersections(this.getCurves(), !r && t.getCurves(), e, s, a, n) : []
            },
            getCrossings: function(t) {
                return this.getIntersections(t, function(t) {
                    return t.hasOverlap() || t.isCrossing()
                })
            },
            getNearestLocation: function() {
                for (var t = c.read(arguments), e = this.getCurves(), i = 1 / 0, n = null, r = 0, s = e.length; r < s; r++) {
                    var a = e[r].getNearestLocation(t);
                    a._distance < i && (i = a._distance, n = a)
                }
                return n
            },
            getNearestPoint: function() {
                var t = this.getNearestLocation.apply(this, arguments);
                return t ? t.getPoint() : t
            },
            interpolate: function(t, e, i) {
                var n = !this._children,
                    r = n ? "_segments" : "_children",
                    s = t[r],
                    a = e[r],
                    o = this[r];
                if (!s || !a || s.length !== a.length) throw new Error("Invalid operands in interpolate() call: " + t + ", " + e);
                var h = o.length,
                    u = a.length;
                if (h < u)
                    for (var l = n ? T : L, c = h; c < u; c++) this.add(new l);
                else h > u && this[n ? "removeSegments" : "removeChildren"](u, h);
                for (var c = 0; c < u; c++) o[c].interpolate(s[c], a[c], i);
                n && (this.setClosed(t._closed), this._changed(9))
            },
            compare: function(t) {
                var e = !1;
                if (t) {
                    var i = this._children || [this],
                        n = t._children ? t._children.slice() : [t],
                        r = i.length,
                        s = n.length,
                        a = [],
                        o = 0;
                    e = !0;
                    for (var h = r - 1; h >= 0 && e; h--) {
                        var u = i[h];
                        e = !1;
                        for (var l = s - 1; l >= 0 && !e; l--) u.compare(n[l]) && (a[l] || (a[l] = !0, o++), e = !0)
                    }
                    e = e && o === s
                }
                return e
            }
        }),
        L = A.extend({
            _class: "Path",
            _serializeFields: {
                segments: [],
                closed: !1
            },
            initialize: function(t) {
                this._closed = !1, this._segments = [], this._version = 0;
                var i = Array.isArray(t) ? "object" == typeof t[0] ? t : arguments : !t || t.size !== e || t.x === e && t.point === e ? null : arguments;
                i && i.length > 0 ? this.setSegments(i) : (this._curves = e, this._segmentSelection = 0, i || "string" != typeof t || (this.setPathData(t), t = null)), this._initialize(!i && t)
            },
            _equals: function(t) {
                return this._closed === t._closed && r.equals(this._segments, t._segments)
            },
            copyContent: function(t) {
                this.setSegments(t._segments), this._closed = t._closed
            },
            _changed: function gt(t) {
                if (gt.base.call(this, t), 8 & t) {
                    if (this._length = this._area = e, 16 & t) this._version++;
                    else if (this._curves)
                        for (var i = 0, n = this._curves.length; i < n; i++) this._curves[i]._changed()
                } else 32 & t && (this._bounds = e)
            },
            getStyle: function() {
                var t = this._parent;
                return (t instanceof N ? t : this)._style
            },
            getSegments: function() {
                return this._segments
            },
            setSegments: function(t) {
                var i = this.isFullySelected(),
                    n = t && t.length;
                if (this._segments.length = 0, this._segmentSelection = 0, this._curves = e, n) {
                    var r = t[n - 1];
                    "boolean" == typeof r && (this.setClosed(r), n--), this._add(T.readList(t, 0, {}, n))
                }
                i && this.setFullySelected(!0)
            },
            getFirstSegment: function() {
                return this._segments[0]
            },
            getLastSegment: function() {
                return this._segments[this._segments.length - 1]
            },
            getCurves: function() {
                var t = this._curves,
                    e = this._segments;
                if (!t) {
                    var i = this._countCurves();
                    t = this._curves = new Array(i);
                    for (var n = 0; n < i; n++) t[n] = new k(this, e[n], e[n + 1] || e[0])
                }
                return t
            },
            getFirstCurve: function() {
                return this.getCurves()[0]
            },
            getLastCurve: function() {
                var t = this.getCurves();
                return t[t.length - 1]
            },
            isClosed: function() {
                return this._closed
            },
            setClosed: function(t) {
                if (this._closed != (t = !!t)) {
                    if (this._closed = t, this._curves) {
                        var e = this._curves.length = this._countCurves();
                        t && (this._curves[e - 1] = new k(this, this._segments[e - 1], this._segments[0]))
                    }
                    this._changed(25)
                }
            }
        }, {
            beans: !0,
            getPathData: function(t, e) {
                function i(e, i) {
                    if (e._transformCoordinates(t, g), n = g[0], r = g[1], v) p.push("M" + _.pair(n, r)), v = !1;
                    else if (o = g[2], u = g[3], o === n && u === r && l === s && c === a) {
                        if (!i) {
                            var h = n - s,
                                f = r - a;
                            p.push(0 === h ? "v" + _.number(f) : 0 === f ? "h" + _.number(h) : "l" + _.pair(h, f))
                        }
                    } else p.push("c" + _.pair(l - s, c - a) + " " + _.pair(o - s, u - a) + " " + _.pair(n - s, r - a));
                    s = n, a = r, l = g[4], c = g[5]
                }
                var n, r, s, a, o, u, l, c, f = this._segments,
                    d = f.length,
                    _ = new h(e),
                    g = new Array(6),
                    v = !0,
                    p = [];
                if (!d) return "";
                for (var m = 0; m < d; m++) i(f[m]);
                return this._closed && d > 0 && (i(f[0], !0), p.push("z")), p.join("")
            },
            isEmpty: function() {
                return !this._segments.length
            },
            _transformContent: function(t) {
                for (var e = this._segments, i = new Array(6), n = 0, r = e.length; n < r; n++) e[n]._transformCoordinates(t, i, !0);
                return !0
            },
            _add: function(t, e) {
                for (var i = this._segments, n = this._curves, r = t.length, s = null == e, e = s ? i.length : e, a = 0; a < r; a++) {
                    var o = t[a];
                    o._path && (o = t[a] = o.clone()), o._path = this, o._index = e + a, o._selection && this._updateSelection(o, 0, o._selection)
                }
                if (s) i.push.apply(i, t);
                else {
                    i.splice.apply(i, [e, 0].concat(t));
                    for (var a = e + r, h = i.length; a < h; a++) i[a]._index = a
                }
                if (n) {
                    var u = this._countCurves(),
                        l = e > 0 && e + r - 1 === u ? e - 1 : e,
                        c = l,
                        f = Math.min(l + r, u);
                    t._curves && (n.splice.apply(n, [l, 0].concat(t._curves)), c += t._curves.length);
                    for (var a = c; a < f; a++) n.splice(a, 0, new k(this, null, null));
                    this._adjustCurves(l, f)
                }
                return this._changed(25), t
            },
            _adjustCurves: function(t, e) {
                for (var i, n = this._segments, r = this._curves, s = t; s < e; s++) i = r[s], i._path = this, i._segment1 = n[s], i._segment2 = n[s + 1] || n[0], i._changed();
                (i = r[this._closed && !t ? n.length - 1 : t - 1]) && (i._segment2 = n[t] || n[0], i._changed()), (i = r[e]) && (i._segment1 = n[e], i._changed())
            },
            _countCurves: function() {
                var t = this._segments.length;
                return !this._closed && t > 0 ? t - 1 : t
            },
            add: function(t) {
                return arguments.length > 1 && "number" != typeof t ? this._add(T.readList(arguments)) : this._add([T.read(arguments)])[0]
            },
            insert: function(t, e) {
                return arguments.length > 2 && "number" != typeof e ? this._add(T.readList(arguments, 1), t) : this._add([T.read(arguments, 1)], t)[0]
            },
            addSegment: function() {
                return this._add([T.read(arguments)])[0]
            },
            insertSegment: function(t) {
                return this._add([T.read(arguments, 1)], t)[0]
            },
            addSegments: function(t) {
                return this._add(T.readList(t))
            },
            insertSegments: function(t, e) {
                return this._add(T.readList(e), t)
            },
            removeSegment: function(t) {
                return this.removeSegments(t, t + 1)[0] || null
            },
            removeSegments: function(t, e, i) {
                t = t || 0, e = r.pick(e, this._segments.length);
                var n = this._segments,
                    s = this._curves,
                    a = n.length,
                    o = n.splice(t, e - t),
                    h = o.length;
                if (!h) return o;
                for (var u = 0; u < h; u++) {
                    var l = o[u];
                    l._selection && this._updateSelection(l, l._selection, 0), l._index = l._path = null
                }
                for (var u = t, c = n.length; u < c; u++) n[u]._index = u;
                if (s) {
                    for (var f = t > 0 && e === a + (this._closed ? 1 : 0) ? t - 1 : t, s = s.splice(f, h), u = s.length - 1; u >= 0; u--) s[u]._path = null;
                    i && (o._curves = s.slice(1)), this._adjustCurves(f, f)
                }
                return this._changed(25), o
            },
            clear: "#removeSegments",
            hasHandles: function() {
                for (var t = this._segments, e = 0, i = t.length; e < i; e++)
                    if (t[e].hasHandles()) return !0;
                return !1
            },
            clearHandles: function() {
                for (var t = this._segments, e = 0, i = t.length; e < i; e++) t[e].clearHandles()
            },
            getLength: function() {
                if (null == this._length) {
                    for (var t = this.getCurves(), e = 0, i = 0, n = t.length; i < n; i++) e += t[i].getLength();
                    this._length = e
                }
                return this._length
            },
            getArea: function() {
                var t = this._area;
                if (null == t) {
                    var e = this._segments,
                        i = this._closed;
                    t = 0;
                    for (var n = 0, r = e.length; n < r; n++) {
                        var s = n + 1 === r;
                        t += k.getArea(k.getValues(e[n], e[s ? 0 : n + 1], null, s && !i))
                    }
                    this._area = t
                }
                return t
            },
            isFullySelected: function() {
                var t = this._segments.length;
                return this.isSelected() && t > 0 && this._segmentSelection === 7 * t
            },
            setFullySelected: function(t) {
                t && this._selectSegments(!0), this.setSelected(t)
            },
            setSelection: function vt(t) {
                1 & t || this._selectSegments(!1), vt.base.call(this, t)
            },
            _selectSegments: function(t) {
                var e = this._segments,
                    i = e.length,
                    n = t ? 7 : 0;
                this._segmentSelection = n * i;
                for (var r = 0; r < i; r++) e[r]._selection = n
            },
            _updateSelection: function(t, e, i) {
                t._selection = i;
                var n = this._segmentSelection += i - e;
                n > 0 && this.setSelected(!0)
            },
            divideAt: function(t) {
                var e, i = this.getLocationAt(t);
                return i && (e = i.getCurve().divideAt(i.getCurveOffset())) ? e._segment1 : null
            },
            splitAt: function(t) {
                var e = this.getLocationAt(t),
                    i = e && e.index,
                    n = e && e.time,
                    r = 1e-8,
                    s = 1 - r;
                n > s && (i++, n = 0);
                var a = this.getCurves();
                if (i >= 0 && i < a.length) {
                    n >= r && a[i++].divideAtTime(n);
                    var o, h = this.removeSegments(i, this._segments.length, !0);
                    return this._closed ? (this.setClosed(!1), o = this) : (o = new L(w.NO_INSERT), o.insertAbove(this), o.copyAttributes(this)), o._add(h, 0), this.addSegment(h[0]), o
                }
                return null
            },
            split: function(t, i) {
                var n, r = i === e ? t : (n = this.getCurves()[t]) && n.getLocationAtTime(i);
                return null != r ? this.splitAt(r) : null
            },
            join: function(t, e) {
                var i = e || 0;
                if (t && t !== this) {
                    var n = t._segments,
                        r = this.getLastSegment(),
                        s = t.getLastSegment();
                    if (!s) return this;
                    r && r._point.isClose(s._point, i) && t.reverse();
                    var a = t.getFirstSegment();
                    if (r && r._point.isClose(a._point, i)) r.setHandleOut(a._handleOut), this._add(n.slice(1));
                    else {
                        var o = this.getFirstSegment();
                        o && o._point.isClose(a._point, i) && t.reverse(), s = t.getLastSegment(), o && o._point.isClose(s._point, i) ? (o.setHandleIn(s._handleIn), this._add(n.slice(0, n.length - 1), 0)) : this._add(n.slice())
                    }
                    t._closed && this._add([n[0]]), t.remove()
                }
                var h = this.getFirstSegment(),
                    u = this.getLastSegment();
                return h !== u && h._point.isClose(u._point, i) && (h.setHandleIn(u._handleIn), u.remove(), this.setClosed(!0)), this
            },
            reduce: function(t) {
                for (var e = this.getCurves(), i = t && t.simplify, n = i ? 1e-7 : 0, r = e.length - 1; r >= 0; r--) {
                    var s = e[r];
                    !s.hasHandles() && (!s.hasLength(n) || i && s.isCollinear(s.getNext())) && s.remove()
                }
                return this
            },
            reverse: function() {
                this._segments.reverse();
                for (var t = 0, e = this._segments.length; t < e; t++) {
                    var i = this._segments[t],
                        n = i._handleIn;
                    i._handleIn = i._handleOut, i._handleOut = n, i._index = t
                }
                this._curves = null, this._changed(9)
            },
            flatten: function(t) {
                for (var e = new B(this, t || .25, 256, (!0)), i = e.parts, n = i.length, r = [], s = 0; s < n; s++) r.push(new T(i[s].curve.slice(0, 2)));
                !this._closed && n > 0 && r.push(new T(i[n - 1].curve.slice(6))), this.setSegments(r)
            },
            simplify: function(t) {
                var e = new D(this).fit(t || 2.5);
                return e && this.setSegments(e), !!e
            },
            smooth: function(t) {
                function i(t, e) {
                    var i = t && t.index;
                    if (null != i) {
                        var r = t.path;
                        if (r && r !== n) throw new Error(t._class + " " + i + " of " + r + " is not part of " + n);
                        e && t instanceof k && i++
                    } else i = "number" == typeof t ? t : e;
                    return Math.min(i < 0 && h ? i % o : i < 0 ? i + o : i, o - 1)
                }
                var n = this,
                    r = t || {},
                    s = r.type || "asymmetric",
                    a = this._segments,
                    o = a.length,
                    h = this._closed,
                    u = h && r.from === e && r.to === e,
                    l = i(r.from, 0),
                    c = i(r.to, o - 1);
                if (l > c)
                    if (h) l -= o;
                    else {
                        var f = l;
                        l = c, c = f
                    }
                if (/^(?:asymmetric|continuous)$/.test(s)) {
                    var d = "asymmetric" === s,
                        _ = Math.min,
                        g = c - l + 1,
                        v = g - 1,
                        p = u ? _(g, 4) : 1,
                        m = p,
                        y = p,
                        w = [];
                    if (h || (m = _(1, l), y = _(1, o - c - 1)), v += m + y, v <= 1) return;
                    for (var x = 0, b = l - m; x <= v; x++, b++) w[x] = a[(b < 0 ? b + o : b) % o]._point;
                    for (var C = w[0]._x + 2 * w[1]._x, S = w[0]._y + 2 * w[1]._y, P = 2, I = v - 1, M = [C], T = [S], z = [P], O = [], A = [], x = 1; x < v; x++) {
                        var L = x < I,
                            N = L ? 1 : d ? 1 : 2,
                            B = L ? 4 : d ? 2 : 7,
                            D = L ? 4 : d ? 3 : 8,
                            j = L ? 2 : d ? 0 : 1,
                            E = N / P;
                        P = z[x] = B - E, C = M[x] = D * w[x]._x + j * w[x + 1]._x - E * C, S = T[x] = D * w[x]._y + j * w[x + 1]._y - E * S
                    }
                    O[I] = M[I] / z[I], A[I] = T[I] / z[I];
                    for (var x = v - 2; x >= 0; x--) O[x] = (M[x] - O[x + 1]) / z[x], A[x] = (T[x] - A[x + 1]) / z[x];
                    O[v] = (3 * w[v]._x - O[I]) / 2, A[v] = (3 * w[v]._y - A[I]) / 2;
                    for (var x = m, F = v - y, b = l; x <= F; x++, b++) {
                        var R = a[b < 0 ? b + o : b],
                            q = R._point,
                            V = O[x] - q._x,
                            H = A[x] - q._y;
                        (u || x < F) && R.setHandleOut(V, H), (u || x > m) && R.setHandleIn(-V, -H)
                    }
                } else
                    for (var x = l; x <= c; x++) a[x < 0 ? x + o : x].smooth(r, !u && x === l, !u && x === c)
            },
            toShape: function(t) {
                function i(t, e) {
                    var i = c[t],
                        n = i.getNext(),
                        r = c[e],
                        s = r.getNext();
                    return i._handleOut.isZero() && n._handleIn.isZero() && r._handleOut.isZero() && s._handleIn.isZero() && n._point.subtract(i._point).isCollinear(s._point.subtract(r._point))
                }

                function n(t) {
                    var e = c[t],
                        i = e.getPrevious(),
                        n = e.getNext();
                    return i._handleOut.isZero() && e._handleIn.isZero() && e._handleOut.isZero() && n._handleIn.isZero() && e._point.subtract(i._point).isOrthogonal(n._point.subtract(e._point))
                }

                function r(t) {
                    var e = c[t],
                        i = e.getNext(),
                        n = e._handleOut,
                        r = i._handleIn,
                        s = .5522847498307936;
                    if (n.isOrthogonal(r)) {
                        var a = e._point,
                            o = i._point,
                            h = new m(a, n, (!0)).intersect(new m(o, r, (!0)), !0);
                        return h && u.isZero(n.getLength() / h.subtract(a).getLength() - s) && u.isZero(r.getLength() / h.subtract(o).getLength() - s)
                    }
                    return !1
                }

                function s(t, e) {
                    return c[t]._point.getDistance(c[e]._point)
                }
                if (!this._closed) return null;
                var a, o, h, l, c = this._segments;
                if (!this.hasHandles() && 4 === c.length && i(0, 2) && i(1, 3) && n(1) ? (a = C.Rectangle, o = new d(s(0, 3), s(0, 1)), l = c[1]._point.add(c[2]._point).divide(2)) : 8 === c.length && r(0) && r(2) && r(4) && r(6) && i(1, 5) && i(3, 7) ? (a = C.Rectangle, o = new d(s(1, 6), s(0, 3)), h = o.subtract(new d(s(0, 7), s(1, 2))).divide(2), l = c[3]._point.add(c[4]._point).divide(2)) : 4 === c.length && r(0) && r(1) && r(2) && r(3) && (u.isZero(s(0, 2) - s(1, 3)) ? (a = C.Circle, h = s(0, 2) / 2) : (a = C.Ellipse, h = new d(s(2, 0) / 2, s(3, 1) / 2)), l = c[1]._point), a) {
                    var f = this.getPosition(!0),
                        _ = new a({
                            center: f,
                            size: o,
                            radius: h,
                            insert: !1
                        });
                    return _.copyAttributes(this, !0), _._matrix.prepend(this._matrix), _.rotate(l.subtract(f).getAngle() + 90), (t === e || t) && _.insertAbove(this), _
                }
                return null
            },
            toPath: "#clone",
            compare: function pt(t) {
                if (!t || t instanceof N) return pt.base.call(this, t);
                var e = this.getCurves(),
                    i = t.getCurves(),
                    n = e.length,
                    r = i.length;
                if (!n || !r) return n == r;
                for (var s, a, o = e[0].getValues(), h = [], u = 0, l = 0, c = 0; c < r; c++) {
                    var f = i[c].getValues();
                    h.push(f);
                    var d = k.getOverlaps(o, f);
                    if (d) {
                        s = !c && d[0][0] > 0 ? r - 1 : c, a = d[0][1];
                        break
                    }
                }
                for (var _, g = Math.abs, v = 1e-8, f = h[s]; o && f;) {
                    var d = k.getOverlaps(o, f);
                    if (d) {
                        var p = d[0][0];
                        if (g(p - l) < v) {
                            l = d[1][0], 1 === l && (o = ++u < n ? e[u].getValues() : null, l = 0);
                            var m = d[0][1];
                            if (g(m - a) < v) {
                                if (_ || (_ = [s, m]), a = d[1][1], 1 === a && (++s >= r && (s = 0), f = h[s] || i[s].getValues(), a = 0), !o) return _[0] === s && _[1] === a;
                                continue
                            }
                        }
                    }
                    break
                }
                return !1
            },
            _hitTestSelf: function(t, e, i, n) {
                function r(e, i) {
                    return t.subtract(e).divide(i).length <= 1
                }

                function s(t, i, n) {
                    if (!e.selected || i.isSelected()) {
                        var s = t._point;
                        if (i !== s && (i = i.add(s)), r(i, x)) return new M(n, g, {
                            segment: t,
                            point: i
                        })
                    }
                }

                function a(t, i) {
                    return (i || e.segments) && s(t, t._point, "segment") || !i && e.handles && (s(t, t._handleIn, "handle-in") || s(t, t._handleOut, "handle-out"))
                }

                function o(t) {
                    f.add(t)
                }

                function h(e) {
                    var i = y || e._index > 0 && e._index < m - 1;
                    if ("round" === (i ? u : l)) return r(e._point, x);
                    if (f = new L({
                            internal: !0,
                            closed: !0
                        }), i ? e.isSmooth() || L._addBevelJoin(e, u, P, c, null, n, o, !0) : "square" === l && L._addSquareCap(e, l, P, null, n, o, !0), !f.isEmpty()) {
                        var s;
                        return f.contains(t) || (s = f.getNearestLocation(t)) && r(s.getPoint(), w)
                    }
                }
                var u, l, c, f, d, _, g = this,
                    v = this.getStyle(),
                    p = this._segments,
                    m = p.length,
                    y = this._closed,
                    w = e._tolerancePadding,
                    x = w,
                    b = e.stroke && v.hasStroke(),
                    C = e.fill && v.hasFill(),
                    S = e.curves,
                    P = b ? v.getStrokeWidth() / 2 : C && e.tolerance > 0 || S ? 0 : null;
                if (null !== P && (P > 0 ? (u = v.getStrokeJoin(), l = v.getStrokeCap(), c = v.getMiterLimit(), x = x.add(L._getStrokePadding(P, n))) : u = l = "round"), !e.ends || e.segments || y) {
                    if (e.segments || e.handles)
                        for (var I = 0; I < m; I++)
                            if (_ = a(p[I])) return _
                } else if (_ = a(p[0], !0) || a(p[m - 1], !0)) return _;
                if (null !== P) {
                    if (d = this.getNearestLocation(t)) {
                        var T = d.getTime();
                        0 === T || 1 === T && m > 1 ? h(d.getSegment()) || (d = null) : r(d.getPoint(), x) || (d = null)
                    }
                    if (!d && "miter" === u && m > 1)
                        for (var I = 0; I < m; I++) {
                            var z = p[I];
                            if (t.getDistance(z._point) <= c * P && h(z)) {
                                d = z.getLocation();
                                break
                            }
                        }
                }
                return !d && C && this._contains(t) || d && !b && !S ? new M("fill", this) : d ? new M(b ? "stroke" : "curve", this, {
                    location: d,
                    point: d.getPoint()
                }) : null
            }
        }, r.each(k._evaluateMethods, function(t) {
            this[t + "At"] = function(e) {
                var i = this.getLocationAt(e);
                return i && i[t]()
            }
        }, {
            beans: !1,
            getLocationOf: function() {
                for (var t = c.read(arguments), e = this.getCurves(), i = 0, n = e.length; i < n; i++) {
                    var r = e[i].getLocationOf(t);
                    if (r) return r
                }
                return null
            },
            getOffsetOf: function() {
                var t = this.getLocationOf.apply(this, arguments);
                return t ? t.getOffset() : null
            },
            getLocationAt: function(t) {
                if ("number" == typeof t) {
                    for (var e = this.getCurves(), i = 0, n = 0, r = e.length; n < r; n++) {
                        var s = i,
                            a = e[n];
                        if (i += a.getLength(), i > t) return a.getLocationAt(t - s)
                    }
                    if (e.length > 0 && t <= this.getLength()) return new O(e[e.length - 1], 1)
                } else if (t && t.getPath && t.getPath() === this) return t;
                return null
            }
        }), new function() {
            function t(t, e, i, n) {
                function r(e) {
                    var i = h[e],
                        n = h[e + 1];
                    s == i && a == n || (t.beginPath(), t.moveTo(s, a), t.lineTo(i, n), t.stroke(), t.beginPath(), t.arc(i, n, o, 0, 2 * Math.PI, !0), t.fill())
                }
                for (var s, a, o = n / 2, h = new Array(6), u = 0, l = e.length; u < l; u++) {
                    var c = e[u],
                        f = c._selection;
                    if (c._transformCoordinates(i, h), s = h[0], a = h[1], 2 & f && r(2), 4 & f && r(4), t.fillRect(s - o, a - o, n, n), !(1 & f)) {
                        var d = t.fillStyle;
                        t.fillStyle = "#ffffff", t.fillRect(s - o + 1, a - o + 1, n - 2, n - 2), t.fillStyle = d
                    }
                }
            }

            function e(t, e, i) {
                function n(e) {
                    if (i) e._transformCoordinates(i, _), r = _[0], s = _[1];
                    else {
                        var n = e._point;
                        r = n._x, s = n._y
                    }
                    if (g) t.moveTo(r, s), g = !1;
                    else {
                        if (i) h = _[2], u = _[3];
                        else {
                            var f = e._handleIn;
                            h = r + f._x, u = s + f._y
                        }
                        h === r && u === s && l === a && c === o ? t.lineTo(r, s) : t.bezierCurveTo(l, c, h, u, r, s)
                    }
                    if (a = r, o = s, i) l = _[4], c = _[5];
                    else {
                        var f = e._handleOut;
                        l = a + f._x, c = o + f._y
                    }
                }
                for (var r, s, a, o, h, u, l, c, f = e._segments, d = f.length, _ = new Array(6), g = !0, v = 0; v < d; v++) n(f[v]);
                e._closed && d > 0 && n(f[0])
            }
            return {
                _draw: function(t, i, n, r) {
                    function s(t) {
                        return c[(t % f + f) % f]
                    }
                    var a = i.dontStart,
                        o = i.dontFinish || i.clip,
                        h = this.getStyle(),
                        u = h.hasFill(),
                        l = h.hasStroke(),
                        c = h.getDashArray(),
                        f = !paper.support.nativeDash && l && c && c.length;
                    if (a || t.beginPath(), (u || l && !f || o) && (e(t, this, r), this._closed && t.closePath()), !o && (u || l) && (this._setStyles(t, i, n), u && (t.fill(h.getFillRule()), t.shadowColor = "rgba(0,0,0,0)"), l)) {
                        if (f) {
                            a || t.beginPath();
                            var d, _ = new B(this, .25, 32, (!1), r),
                                g = _.length,
                                v = -h.getDashOffset(),
                                p = 0;
                            for (v %= g; v > 0;) v -= s(p--) + s(p--);
                            for (; v < g;) d = v + s(p++), (v > 0 || d > 0) && _.drawPart(t, Math.max(v, 0), Math.max(d, 0)), v = d + s(p++)
                        }
                        t.stroke()
                    }
                },
                _drawSelected: function(i, n) {
                    i.beginPath(), e(i, this, n), i.stroke(), t(i, this._segments, n, paper.settings.handleSize)
                }
            }
        }, new function() {
            function t(t) {
                var e = t._segments;
                if (!e.length) throw new Error("Use a moveTo() command first");
                return e[e.length - 1]
            }
            return {
                moveTo: function() {
                    var t = this._segments;
                    1 === t.length && this.removeSegment(0), t.length || this._add([new T(c.read(arguments))])
                },
                moveBy: function() {
                    throw new Error("moveBy() is unsupported on Path items.")
                },
                lineTo: function() {
                    this._add([new T(c.read(arguments))])
                },
                cubicCurveTo: function() {
                    var e = c.read(arguments),
                        i = c.read(arguments),
                        n = c.read(arguments),
                        r = t(this);
                    r.setHandleOut(e.subtract(r._point)), this._add([new T(n, i.subtract(n))])
                },
                quadraticCurveTo: function() {
                    var e = c.read(arguments),
                        i = c.read(arguments),
                        n = t(this)._point;
                    this.cubicCurveTo(e.add(n.subtract(e).multiply(1 / 3)), e.add(i.subtract(e).multiply(1 / 3)), i)
                },
                curveTo: function() {
                    var e = c.read(arguments),
                        i = c.read(arguments),
                        n = r.pick(r.read(arguments), .5),
                        s = 1 - n,
                        a = t(this)._point,
                        o = e.subtract(a.multiply(s * s)).subtract(i.multiply(n * n)).divide(2 * n * s);
                    if (o.isNaN()) throw new Error("Cannot put a curve through points with parameter = " + n);
                    this.quadraticCurveTo(o, i)
                },
                arcTo: function() {
                    var e, i, n, s, a, o = Math.abs,
                        h = Math.sqrt,
                        l = t(this),
                        f = l._point,
                        _ = c.read(arguments),
                        g = r.peek(arguments),
                        v = r.pick(g, !0);
                    if ("boolean" == typeof v) var y = f.add(_).divide(2),
                        e = y.add(y.subtract(f).rotate(v ? -90 : 90));
                    else if (r.remain(arguments) <= 2) e = _, _ = c.read(arguments);
                    else {
                        var w = d.read(arguments),
                            x = u.isZero;
                        if (x(w.width) || x(w.height)) return this.lineTo(_);
                        var b = r.read(arguments),
                            v = !!r.read(arguments),
                            C = !!r.read(arguments),
                            y = f.add(_).divide(2),
                            S = f.subtract(y).rotate(-b),
                            P = S.x,
                            I = S.y,
                            M = o(w.width),
                            z = o(w.height),
                            k = M * M,
                            O = z * z,
                            A = P * P,
                            L = I * I,
                            N = h(A / k + L / O);
                        if (N > 1 && (M *= N, z *= N, k = M * M, O = z * z), N = (k * O - k * L - O * A) / (k * L + O * A), o(N) < 1e-12 && (N = 0), N < 0) throw new Error("Cannot create an arc with the given arguments");
                        i = new c(M * I / z, -z * P / M).multiply((C === v ? -1 : 1) * h(N)).rotate(b).add(y), a = (new p).translate(i).rotate(b).scale(M, z), s = a._inverseTransform(f), n = s.getDirectedAngle(a._inverseTransform(_)), !v && n > 0 ? n -= 360 : v && n < 0 && (n += 360)
                    }
                    if (e) {
                        var B = new m(f.add(e).divide(2), e.subtract(f).rotate(90), (!0)),
                            D = new m(e.add(_).divide(2), _.subtract(e).rotate(90), (!0)),
                            j = new m(f, _),
                            E = j.getSide(e);
                        if (i = B.intersect(D, !0), !i) {
                            if (!E) return this.lineTo(_);
                            throw new Error("Cannot create an arc with the given arguments")
                        }
                        s = f.subtract(i), n = s.getDirectedAngle(_.subtract(i));
                        var F = j.getSide(i);
                        0 === F ? n = E * o(n) : E === F && (n += n < 0 ? 360 : -360)
                    }
                    for (var R = 1e-7, q = o(n), V = q >= 360 ? 4 : Math.ceil((q - R) / 90), H = n / V, Z = H * Math.PI / 360, U = 4 / 3 * Math.sin(Z) / (1 + Math.cos(Z)), W = [], G = 0; G <= V; G++) {
                        var S = _,
                            J = null;
                        if (G < V && (J = s.rotate(90).multiply(U), a ? (S = a._transformPoint(s), J = a._transformPoint(s.add(J)).subtract(S)) : S = i.add(s)), G) {
                            var $ = s.rotate(-90).multiply(U);
                            a && ($ = a._transformPoint(s.add($)).subtract(S)), W.push(new T(S, $, J))
                        } else l.setHandleOut(J);
                        s = s.rotate(H)
                    }
                    this._add(W)
                },
                lineBy: function() {
                    var e = c.read(arguments),
                        i = t(this)._point;
                    this.lineTo(i.add(e))
                },
                curveBy: function() {
                    var e = c.read(arguments),
                        i = c.read(arguments),
                        n = r.read(arguments),
                        s = t(this)._point;
                    this.curveTo(s.add(e), s.add(i), n)
                },
                cubicCurveBy: function() {
                    var e = c.read(arguments),
                        i = c.read(arguments),
                        n = c.read(arguments),
                        r = t(this)._point;
                    this.cubicCurveTo(r.add(e), r.add(i), r.add(n))
                },
                quadraticCurveBy: function() {
                    var e = c.read(arguments),
                        i = c.read(arguments),
                        n = t(this)._point;
                    this.quadraticCurveTo(n.add(e), n.add(i))
                },
                arcBy: function() {
                    var e = t(this)._point,
                        i = e.add(c.read(arguments)),
                        n = r.pick(r.peek(arguments), !0);
                    "boolean" == typeof n ? this.arcTo(i, n) : this.arcTo(i, e.add(c.read(arguments)))
                },
                closePath: function(t) {
                    this.setClosed(!0), this.join(this, t)
                }
            }
        }, {
            _getBounds: function(t, e) {
                var i = e.handle ? "getHandleBounds" : e.stroke ? "getStrokeBounds" : "getBounds";
                return L[i](this._segments, this._closed, this, t, e)
            },
            statics: {
                getBounds: function(t, e, i, n, r, s) {
                    function a(t) {
                        t._transformCoordinates(n, h);
                        for (var e = 0; e < 2; e++) k._addBounds(u[e], u[e + 4], h[e + 2], h[e], e, s ? s[e] : 0, l, c, f);
                        var i = u;
                        u = h, h = i
                    }
                    var o = t[0];
                    if (!o) return new g;
                    for (var h = new Array(6), u = o._transformCoordinates(n, new Array(6)), l = u.slice(0, 2), c = l.slice(), f = new Array(2), d = 1, _ = t.length; d < _; d++) a(t[d]);
                    return e && a(o), new g(l[0], l[1], c[0] - l[0], c[1] - l[1])
                },
                getStrokeBounds: function(t, e, i, n, r) {
                    function s(t) {
                        v = v.include(t)
                    }

                    function a(t) {
                        v = v.unite(x.setCenter(t._point.transform(n)))
                    }

                    function o(t, e) {
                        "round" === e || t.isSmooth() ? a(t) : L._addBevelJoin(t, e, p, w, n, f, s)
                    }

                    function h(t, e) {
                        "round" === e ? a(t) : L._addSquareCap(t, e, p, n, f, s)
                    }
                    var u = i.getStyle(),
                        l = u.hasStroke(),
                        c = u.getStrokeWidth(),
                        f = l && i._getStrokeMatrix(n, r),
                        _ = l && L._getStrokePadding(c, f),
                        v = L.getBounds(t, e, i, n, r, _);
                    if (!l) return v;
                    for (var p = c / 2, m = u.getStrokeJoin(), y = u.getStrokeCap(), w = u.getMiterLimit(), x = new g(new d(_)), b = t.length - (e ? 0 : 1), C = 1; C < b; C++) o(t[C], m);
                    return e ? o(t[0], m) : b > 0 && (h(t[0], y), h(t[t.length - 1], y)), v
                },
                _getStrokePadding: function(t, e) {
                    if (!e) return [t, t];
                    var i = new c(t, 0).transform(e),
                        n = new c(0, t).transform(e),
                        r = i.getAngleInRadians(),
                        s = i.getLength(),
                        a = n.getLength(),
                        o = Math.sin(r),
                        h = Math.cos(r),
                        u = Math.tan(r),
                        l = Math.atan2(a * u, s),
                        f = Math.atan2(a, u * s);
                    return [Math.abs(s * Math.cos(l) * h + a * Math.sin(l) * o), Math.abs(a * Math.sin(f) * h + s * Math.cos(f) * o)]
                },
                _addBevelJoin: function(t, e, i, n, r, s, a, o) {
                    var h = t.getCurve(),
                        u = h.getPrevious(),
                        l = h.getPoint1().transform(r),
                        f = u.getNormalAtTime(1).multiply(i).transform(s),
                        d = h.getNormalAtTime(0).multiply(i).transform(s);
                    if (f.getDirectedAngle(d) < 0 && (f = f.negate(), d = d.negate()), o && a(l), a(l.add(f)), "miter" === e) {
                        var _ = new m(l.add(f), new c((-f.y), f.x), (!0)).intersect(new m(l.add(d), new c((-d.y), d.x), (!0)), !0);
                        _ && l.getDistance(_) <= n * i && a(_)
                    }
                    a(l.add(d))
                },
                _addSquareCap: function(t, e, i, n, r, s, a) {
                    var o = t._point.transform(n),
                        h = t.getLocation(),
                        u = h.getNormal().multiply(0 === h.getTime() ? i : -i).transform(r);
                    "square" === e && (a && (s(o.subtract(u)), s(o.add(u))), o = o.add(u.rotate(-90))), s(o.add(u)), s(o.subtract(u))
                },
                getHandleBounds: function(t, e, i, n, r) {
                    var s, a, o = i.getStyle(),
                        h = r.stroke && o.hasStroke();
                    if (h) {
                        var u = i._getStrokeMatrix(n, r),
                            l = o.getStrokeWidth() / 2,
                            c = l;
                        "miter" === o.getStrokeJoin() && (c = l * o.getMiterLimit()), "square" === o.getStrokeCap() && (c = Math.max(c, l * Math.SQRT2)), s = L._getStrokePadding(l, u), a = L._getStrokePadding(c, u)
                    }
                    for (var f = new Array(6), d = 1 / 0, _ = -d, v = d, p = _, m = 0, y = t.length; m < y; m++) {
                        var w = t[m];
                        w._transformCoordinates(n, f);
                        for (var x = 0; x < 6; x += 2) {
                            var b = x ? s : a,
                                C = b ? b[0] : 0,
                                S = b ? b[1] : 0,
                                P = f[x],
                                I = f[x + 1],
                                M = P - C,
                                T = P + C,
                                z = I - S,
                                k = I + S;
                            M < d && (d = M), T > _ && (_ = T), z < v && (v = z), k > p && (p = k)
                        }
                    }
                    return new g(d, v, _ - d, p - v)
                }
            }
        });
    L.inject({
        statics: new function() {
            function t(t, e, i) {
                var n = r.getNamed(i),
                    s = new L(n && 0 == n.insert && w.NO_INSERT);
                return s._add(t), s._closed = e, s.set(n, {
                    insert: !0
                })
            }

            function e(e, i, r) {
                for (var s = new Array(4), a = 0; a < 4; a++) {
                    var o = n[a];
                    s[a] = new T(o._point.multiply(i).add(e), o._handleIn.multiply(i), o._handleOut.multiply(i))
                }
                return t(s, !0, r)
            }
            var i = .5522847498307936,
                n = [new T([-1, 0], [0, i], [0, -i]), new T([0, -1], [-i, 0], [i, 0]), new T([1, 0], [0, -i], [0, i]), new T([0, 1], [i, 0], [-i, 0])];
            return {
                Line: function() {
                    return t([new T(c.readNamed(arguments, "from")), new T(c.readNamed(arguments, "to"))], !1, arguments)
                },
                Circle: function() {
                    var t = c.readNamed(arguments, "center"),
                        i = r.readNamed(arguments, "radius");
                    return e(t, new d(i), arguments)
                },
                Rectangle: function() {
                    var e, n = g.readNamed(arguments, "rectangle"),
                        r = d.readNamed(arguments, "radius", 0, {
                            readNull: !0
                        }),
                        s = n.getBottomLeft(!0),
                        a = n.getTopLeft(!0),
                        o = n.getTopRight(!0),
                        h = n.getBottomRight(!0);
                    if (!r || r.isZero()) e = [new T(s), new T(a), new T(o), new T(h)];
                    else {
                        r = d.min(r, n.getSize(!0).divide(2));
                        var u = r.width,
                            l = r.height,
                            c = u * i,
                            f = l * i;
                        e = [new T(s.add(u, 0), null, [-c, 0]), new T(s.subtract(0, l), [0, f]), new T(a.add(0, l), null, [0, -f]), new T(a.add(u, 0), [-c, 0], null), new T(o.subtract(u, 0), null, [c, 0]), new T(o.add(0, l), [0, -f], null), new T(h.subtract(0, l), null, [0, f]), new T(h.subtract(u, 0), [c, 0])]
                    }
                    return t(e, !0, arguments)
                },
                RoundRectangle: "#Rectangle",
                Ellipse: function() {
                    var t = C._readEllipse(arguments);
                    return e(t.center, t.radius, arguments)
                },
                Oval: "#Ellipse",
                Arc: function() {
                    var t = c.readNamed(arguments, "from"),
                        e = c.readNamed(arguments, "through"),
                        i = c.readNamed(arguments, "to"),
                        n = r.getNamed(arguments),
                        s = new L(n && 0 == n.insert && w.NO_INSERT);
                    return s.moveTo(t), s.arcTo(e, i), s.set(n)
                },
                RegularPolygon: function() {
                    for (var e = c.readNamed(arguments, "center"), i = r.readNamed(arguments, "sides"), n = r.readNamed(arguments, "radius"), s = 360 / i, a = i % 3 === 0, o = new c(0, a ? -n : n), h = a ? -1 : .5, u = new Array(i), l = 0; l < i; l++) u[l] = new T(e.add(o.rotate((l + h) * s)));
                    return t(u, !0, arguments)
                },
                Star: function() {
                    for (var e = c.readNamed(arguments, "center"), i = 2 * r.readNamed(arguments, "points"), n = r.readNamed(arguments, "radius1"), s = r.readNamed(arguments, "radius2"), a = 360 / i, o = new c(0, (-1)), h = new Array(i), u = 0; u < i; u++) h[u] = new T(e.add(o.rotate(a * u).multiply(u % 2 ? s : n)));
                    return t(h, !0, arguments)
                }
            }
        }
    });
    var N = A.extend({
        _class: "CompoundPath",
        _serializeFields: {
            children: []
        },
        beans: !0,
        initialize: function(t) {
            this._children = [], this._namedChildren = {}, this._initialize(t) || ("string" == typeof t ? this.setPathData(t) : this.addChildren(Array.isArray(t) ? t : arguments))
        },
        insertChildren: function mt(t, e) {
            var i = e,
                n = i[0];
            n && "number" == typeof n[0] && (i = [i]);
            for (var s = e.length - 1; s >= 0; s--) {
                var a = i[s];
                i !== e || a instanceof L || (i = r.slice(i)), Array.isArray(a) ? i[s] = new L({
                    segments: a,
                    insert: !1
                }) : a instanceof N && (i.splice.apply(i, [s, 1].concat(a.removeChildren())), a.remove())
            }
            return mt.base.call(this, t, i)
        },
        reduce: function yt(t) {
            for (var e = this._children, i = e.length - 1; i >= 0; i--) {
                var n = e[i].reduce(t);
                n.isEmpty() && n.remove()
            }
            if (!e.length) {
                var n = new L(w.NO_INSERT);
                return n.copyAttributes(this), n.insertAbove(this), this.remove(), n
            }
            return yt.base.call(this)
        },
        isClosed: function() {
            for (var t = this._children, e = 0, i = t.length; e < i; e++)
                if (!t[e]._closed) return !1;
            return !0
        },
        setClosed: function(t) {
            for (var e = this._children, i = 0, n = e.length; i < n; i++) e[i].setClosed(t)
        },
        getFirstSegment: function() {
            var t = this.getFirstChild();
            return t && t.getFirstSegment()
        },
        getLastSegment: function() {
            var t = this.getLastChild();
            return t && t.getLastSegment()
        },
        getCurves: function() {
            for (var t = this._children, e = [], i = 0, n = t.length; i < n; i++) e.push.apply(e, t[i].getCurves());
            return e
        },
        getFirstCurve: function() {
            var t = this.getFirstChild();
            return t && t.getFirstCurve()
        },
        getLastCurve: function() {
            var t = this.getLastChild();
            return t && t.getLastCurve()
        },
        getArea: function() {
            for (var t = this._children, e = 0, i = 0, n = t.length; i < n; i++) e += t[i].getArea();
            return e
        },
        getLength: function() {
            for (var t = this._children, e = 0, i = 0, n = t.length; i < n; i++) e += t[i].getLength();
            return e
        },
        getPathData: function(t, e) {
            for (var i = this._children, n = [], r = 0, s = i.length; r < s; r++) {
                var a = i[r],
                    o = a._matrix;
                n.push(a.getPathData(t && !o.isIdentity() ? t.appended(o) : t, e))
            }
            return n.join("")
        },
        _hitTestChildren: function wt(t, e, i) {
            return wt.base.call(this, t, e["class"] === L || "path" === e.type ? e : r.set({}, e, {
                fill: !1
            }), i)
        },
        _draw: function(t, e, i, n) {
            var r = this._children;
            if (r.length) {
                e = e.extend({
                    dontStart: !0,
                    dontFinish: !0
                }), t.beginPath();
                for (var s = 0, a = r.length; s < a; s++) r[s].draw(t, e, n);
                if (!e.clip) {
                    this._setStyles(t, e, i);
                    var o = this._style;
                    o.hasFill() && (t.fill(o.getFillRule()), t.shadowColor = "rgba(0,0,0,0)"), o.hasStroke() && t.stroke()
                }
            }
        },
        _drawSelected: function(t, e, i) {
            for (var n = this._children, r = 0, s = n.length; r < s; r++) {
                var a = n[r],
                    o = a._matrix;
                i[a._id] || a._drawSelected(t, o.isIdentity() ? e : e.appended(o))
            }
        }
    }, new function() {
        function t(t, e) {
            var i = t._children;
            if (e && !i.length) throw new Error("Use a moveTo() command first");
            return i[i.length - 1]
        }
        return r.each(["lineTo", "cubicCurveTo", "quadraticCurveTo", "curveTo", "arcTo", "lineBy", "cubicCurveBy", "quadraticCurveBy", "curveBy", "arcBy"], function(e) {
            this[e] = function() {
                var i = t(this, !0);
                i[e].apply(i, arguments)
            }
        }, {
            moveTo: function() {
                var e = t(this),
                    i = e && e.isEmpty() ? e : new L(w.NO_INSERT);
                i !== e && this.addChild(i), i.moveTo.apply(i, arguments)
            },
            moveBy: function() {
                var e = t(this, !0),
                    i = e && e.getLastSegment(),
                    n = c.read(arguments);
                this.moveTo(i ? n.add(i._point) : n)
            },
            closePath: function(e) {
                t(this, !0).closePath(e)
            }
        })
    }, r.each(["reverse", "flatten", "simplify", "smooth"], function(t) {
        this[t] = function(e) {
            for (var i, n = this._children, r = 0, s = n.length; r < s; r++) i = n[r][t](e) || i;
            return i
        }
    }, {}));
    A.inject(new function() {
        function t(t, e) {
            var i = t.clone(!1).reduce({
                simplify: !0
            }).transform(null, !0, !0);
            return e ? i.resolveCrossings().reorient("nonzero" === i.getFillRule(), !0) : i
        }

        function h(t, e, i) {
            var n = t && t.length;
            if (n) {
                var s = r.each(t, function(t, e) {
                        this[t._id] = {
                            container: null,
                            winding: t.isClockwise() ? 1 : -1,
                            index: e
                        }
                    }, {}),
                    a = t.slice().sort(function(t, e) {
                        return v(e.getArea()) - v(t.getArea())
                    }),
                    o = a[0];
                null == i && (i = o.isClockwise());
                for (var h = 0; h < n; h++) {
                    for (var u = a[h], l = s[u._id], c = u.getInteriorPoint(), f = 0, d = h - 1; d >= 0; d--) {
                        var _ = a[d];
                        if (_.contains(c)) {
                            var g = s[_._id];
                            f = g.winding, l.winding += f, l.container = g.exclude ? g.container : _;
                            break
                        }
                    }
                    if (e(l.winding) === e(f)) l.exclude = !0, t[l.index] = null;
                    else {
                        var p = l.container;
                        u.setClockwise(p ? !p.isClockwise() : i)
                    }
                }
            }
            return t
        }

        function l(t, e, i) {
            function n(t) {
                return t._path._id + "." + t._segment1._index
            }
            for (var r, s, h, u = e && [], l = 1e-8, c = 1 - l, f = !1, d = i || [], _ = i && {}, g = (i && i.length) - 1; g >= 0; g--) {
                var v = i[g];
                v._path && (_[n(v)] = !0)
            }
            for (var g = t.length - 1; g >= 0; g--) {
                var p, m = t[g],
                    y = m._time,
                    w = y,
                    x = e && !e(m),
                    v = m._curve;
                if (v && (v !== s ? (f = !v.hasHandles() || _ && _[n(v)], r = [], h = null, s = v) : h >= l && (y /= h)), x) r && r.push(m);
                else {
                    if (e && u.unshift(m), h = w, y < l) p = v._segment1;
                    else if (y > c) p = v._segment2;
                    else {
                        var b = v.divideAtTime(y, !0);
                        f && d.push(v, b), p = b._segment1;
                        for (var C = r.length - 1; C >= 0; C--) {
                            var S = r[C];
                            S._time = (S._time - y) / (1 - y)
                        }
                    }
                    m._setSegment(p);
                    var P = p._intersection,
                        I = m._intersection;
                    if (P) {
                        a(P, I);
                        for (var M = P; M;) a(M._intersection, P), M = M._next
                    } else p._intersection = I
                }
            }
            return i || o(d), u || t
        }

        function c(t, e, i, n, r) {
            function s(s) {
                var a = s[l + 0],
                    h = s[l + 6];
                if (!(p < _(a, h) || p > g(a, h))) {
                    var f = s[u + 0],
                        v = s[u + 2],
                        m = s[u + 4],
                        b = s[u + 6];
                    if (a === h) return void((f < x && b > w || b < x && f > w) && (I = !0));
                    var C = p === a ? 0 : p === h ? 1 : w > g(f, v, m, b) || x < _(f, v, m, b) ? 1 : k.solveCubic(s, l, p, z, 0, 1) > 0 ? z[0] : 1,
                        M = 0 === C ? f : 1 === C ? b : k.getPoint(s, C)[i ? "y" : "x"],
                        O = a > h ? 1 : -1,
                        A = o[l] > o[l + 6] ? 1 : -1,
                        L = o[u + 6];
                    return p !== a ? (M < w ? S += O : M > x ? P += O : I = !0, M > d - y && M < d + y && (T /= 2)) : (O !== A ? f < w ? S += O : f > x && (P += O) : f != L && (L < x && M > x ? (P += O, I = !0) : L > w && M < w && (S += O, I = !0)), T = 0), o = s, !r && M > w && M < x && 0 === k.getTangent(s, C)[i ? "x" : "y"] && c(t, e, !i, n, !0)
                }
            }

            function a(t) {
                var e = t[l + 0],
                    n = t[l + 2],
                    r = t[l + 4],
                    a = t[l + 6];
                if (p <= g(e, n, r, a) && p >= _(e, n, r, a))
                    for (var o, h = t[u + 0], c = t[u + 2], f = t[u + 4], d = t[u + 6], v = w > g(h, c, f, d) || x < _(h, c, f, d) ? [t] : k.getMonoCurves(t, i), m = 0, y = v.length; m < y; m++)
                        if (o = s(v[m])) return o
            }
            for (var o, h, u = i ? 1 : 0, l = 1 ^ u, f = [t.x, t.y], d = f[u], p = f[l], m = 1e-9, y = 1e-6, w = d - m, x = d + m, b = 0, C = 0, S = 0, P = 0, I = !1, M = !1, T = 1, z = [], O = 0, A = e.length; O < A; O++) {
                var L, N = e[O],
                    B = N._path,
                    D = N.getValues();
                if (!(O && e[O - 1]._path === B || (o = null, B._closed || (h = k.getValues(B.getLastCurve().getSegment2(), N.getSegment1(), null, !n), h[l] !== h[l + 6] && (o = h)), o))) {
                    o = D;
                    for (var j = B.getLastCurve(); j && j !== N;) {
                        var E = j.getValues();
                        if (E[l] !== E[l + 6]) {
                            o = E;
                            break
                        }
                        j = j.getPrevious()
                    }
                }
                if (L = a(D)) return L;
                if (O + 1 === A || e[O + 1]._path !== B) {
                    if (h && (L = a(h))) return L;
                    !I || S || P || (S = P = B.isClockwise(n) ^ i ? 1 : -1), b += S, C += P, S = P = 0, I && (M = !0, I = !1), h = null
                }
            }
            return b = v(b), C = v(C), {
                winding: g(b, C),
                windingL: b,
                windingR: C,
                quality: T,
                onPath: M
            }
        }

        function f(t, e, i, n, r) {
            var s, a = [],
                o = t,
                h = 0;
            do {
                var l = t.getCurve(),
                    f = l.getLength();
                a.push({
                    segment: t,
                    curve: l,
                    length: f
                }), h += f, t = t.getNext()
            } while (t && !t._intersection && t !== o);
            for (var d = [.5, .25, .75], s = {
                    winding: 0,
                    quality: -1
                }, _ = 1e-8, g = 1 - _, p = 0; p < d.length && s.quality < .5; p++)
                for (var f = h * d[p], m = 0, y = a.length; m < y; m++) {
                    var w = a[m],
                        x = w.length;
                    if (f <= x) {
                        var l = w.curve,
                            b = l._path,
                            C = b._parent,
                            S = C instanceof N ? C : b,
                            P = u.clamp(l.getTimeAt(f), _, g),
                            I = l.getPointAtTime(P),
                            M = v(l.getTangentAtTime(P).y) < Math.SQRT1_2,
                            T = r.subtract && i && (S === e && i._getWinding(I, M, !0).winding || S === i && !e._getWinding(I, M, !0).winding) ? {
                                winding: 0,
                                quality: 1
                            } : c(I, n, M, !0);
                        T.quality > s.quality && (s = T);
                        break
                    }
                    f -= x
                }
            for (var m = a.length - 1; m >= 0; m--) a[m].segment._winding = s
        }

        function d(t, e) {
            function i(t) {
                var i;
                return !(!t || t._visited || e && (!e[(i = t._winding || {}).winding] || e.unite && 2 === i.winding && i.windingL && i.windingR))
            }

            function n(t) {
                if (t)
                    for (var e = 0, i = a.length; e < i; e++)
                        if (t === a[e]) return !0;
                return !1
            }

            function r(t) {
                for (var e = t._segments, i = 0, n = e.length; i < n; i++) e[i]._visited = !0
            }

            function s(t, e) {
                function r(r, s) {
                    for (; r && r !== s;) {
                        var o = r._segment,
                            u = o._path,
                            l = o.getNext() || u && u.getFirstSegment(),
                            c = l && l._intersection;
                        o !== t && (n(o) || n(l) || l && i(o) && (i(l) || c && i(c._segment))) && h.push(o), e && a.push(o), r = r._next
                    }
                }
                var s = t._intersection,
                    o = s,
                    h = [];
                if (e && (a = [t]), s) {
                    for (r(s); s && s._prev;) s = s._prev;
                    r(s, o)
                }
                return h
            }
            var a, o = [];
            t.sort(function(t, e) {
                var i = t._intersection,
                    n = e._intersection,
                    r = !(!i || !i._overlap),
                    s = !(!n || !n._overlap),
                    a = t._path,
                    o = e._path;
                return r ^ s ? r ? 1 : -1 : !i ^ !n ? i ? 1 : -1 : a !== o ? a._id - o._id : t._index - e._index
            });
            for (var h = 0, u = t.length; h < u; h++) {
                var l, c, f, d = t[h],
                    _ = i(d),
                    g = null,
                    v = !1,
                    p = !0,
                    m = [];
                if (_ && d._path._overlapsOnly) {
                    var y = d._path,
                        x = d._intersection._segment._path;
                    y.compare(x) && (y.getArea() && o.push(y.clone(!1)), r(y), r(x), _ = !1)
                }
                for (; _;) {
                    var b = !g,
                        C = s(d, b),
                        S = C.shift(),
                        v = !b && (n(d) || n(S)),
                        P = !v && S;
                    if (b && (g = new L(w.NO_INSERT), l = null), v) {
                        (d.isFirst() || d.isLast()) && (p = d._path._closed), d._visited = !0;
                        break
                    }
                    if (P && l && (m.push(l), l = null), l || (P && C.push(d), l = {
                            start: g._segments.length,
                            crossings: C,
                            visited: c = [],
                            handleIn: f
                        }), P && (d = S), !i(d)) {
                        g.removeSegments(l.start);
                        for (var I = 0, M = c.length; I < M; I++) c[I]._visited = !1;
                        c.length = 0;
                        do d = l && l.crossings.shift(), d || (l = m.pop(), l && (c = l.visited, f = l.handleIn)); while (l && !i(d));
                        if (!d) break
                    }
                    var z = d.getNext();
                    g.add(new T(d._point, f, z && d._handleOut)), d._visited = !0, c.push(d), d = z || d._path.getFirstSegment(), f = z && z._handleIn
                }
                v && (p && (g.getFirstSegment().setHandleIn(f), g.setClosed(p)), 0 !== g.getArea() && o.push(g))
            }
            return o
        }
        var _ = Math.min,
            g = Math.max,
            v = Math.abs,
            p = {
                unite: {
                    1: !0,
                    2: !0
                },
                intersect: {
                    2: !0
                },
                subtract: {
                    1: !0
                },
                exclude: {
                    1: !0,
                    "-1": !0
                }
            };
        return {
            _getWinding: function(t, e, i) {
                return c(t, this.getCurves(), e, i)
            },
            unite: function(t, e) {
                return n(this, t, "unite", e)
            },
            intersect: function(t, e) {
                return n(this, t, "intersect", e)
            },
            subtract: function(t, e) {
                return n(this, t, "subtract", e)
            },
            exclude: function(t, e) {
                return n(this, t, "exclude", e)
            },
            divide: function(t, e) {
                return e && (0 == e.trace || e.stroke) ? s(this, t, "divide") : i([this.subtract(t, e), this.intersect(t, e)], !0, this, t, e)
            },
            resolveCrossings: function() {
                function t(t) {
                    var e = t && t._intersection;
                    return e && e._overlap
                }
                var e = this._children,
                    i = e || [this],
                    n = !1,
                    s = !1,
                    a = this.getIntersections(null, function(t) {
                        return t.hasOverlap() && (n = !0) || t.isCrossing() && (s = !0)
                    }),
                    h = n && s && [];
                if (a = O.expand(a), n)
                    for (var u = l(a, function(t) {
                            return t.hasOverlap()
                        }, h), c = u.length - 1; c >= 0; c--) {
                        var f = u[c]._segment,
                            _ = f.getPrevious(),
                            g = f.getNext();
                        t(_) && t(g) && (f.remove(), _._handleOut._set(0, 0), g._handleIn._set(0, 0), _ === f || _.getCurve().hasLength() || (g._handleIn.set(_._handleIn), _.remove()))
                    }
                s && (l(a, n && function(t) {
                    var e = t.getCurve(),
                        i = t.getSegment(),
                        n = t._intersection,
                        r = n._curve,
                        s = n._segment;
                    return !!(e && r && e._path && r._path) || (i && (i._intersection = null), void(s && (s._intersection = null)))
                }, h), h && o(h), i = d(r.each(i, function(t) {
                    this.push.apply(this, t._segments)
                }, [])));
                var v, p = i.length;
                return p > 1 && e ? (i !== e && this.setChildren(i), v = this) : 1 !== p || e || (i[0] !== this && this.setSegments(i[0].removeSegments()), v = this), v || (v = new N(w.NO_INSERT), v.addChildren(i), v = v.reduce(), v.copyAttributes(this), this.replaceWith(v)), v
            },
            reorient: function(t, i) {
                var n = this._children;
                return n && n.length ? this.setChildren(h(this.removeChildren(), function(e) {
                    return !!(t ? e : 1 & e)
                }, i)) : i !== e && this.setClockwise(i), this
            },
            getInteriorPoint: function() {
                var t = this.getBounds(),
                    e = t.getCenter(!0);
                if (!this.contains(e)) {
                    for (var i = this.getCurves(), n = e.y, r = [], s = [], a = 0, o = i.length; a < o; a++) {
                        var h = i[a].getValues(),
                            u = h[1],
                            l = h[3],
                            c = h[5],
                            f = h[7];
                        if (n >= _(u, l, c, f) && n <= g(u, l, c, f))
                            for (var d = k.getMonoCurves(h), v = 0, p = d.length; v < p; v++) {
                                var m = d[v],
                                    y = m[1],
                                    w = m[7];
                                if (y !== w && (n >= y && n <= w || n >= w && n <= y)) {
                                    var x = n === y ? m[0] : n === w ? m[6] : 1 === k.solveCubic(m, 1, n, s, 0, 1) ? k.getPoint(m, s[0]).x : (m[0] + m[6]) / 2;
                                    r.push(x)
                                }
                            }
                    }
                    r.length > 1 && (r.sort(function(t, e) {
                        return t - e
                    }), e.x = (r[0] + r[1]) / 2)
                }
                return e
            }
        }
    });
    var B = r.extend({
            _class: "PathFlattener",
            initialize: function(t, e, i, n, r) {
                function s(t, e) {
                    var i = k.getValues(t, e, r);
                    h.push(i), a(i, t._index, 0, 1)
                }

                function a(t, i, r, s) {
                    if (!(s - r > c) || n && k.isStraight(t) || k.isFlatEnough(t, e || .25)) {
                        var o = t[6] - t[0],
                            h = t[7] - t[1],
                            f = Math.sqrt(o * o + h * h);
                        f > 0 && (l += f, u.push({
                            offset: l,
                            curve: t,
                            index: i,
                            time: s
                        }))
                    } else {
                        var d = k.subdivide(t, .5),
                            _ = (r + s) / 2;
                        a(d[0], i, r, _), a(d[1], i, _, s)
                    }
                }
                for (var o, h = [], u = [], l = 0, c = 1 / (i || 32), f = t._segments, d = f[0], _ = 1, g = f.length; _ < g; _++) o = f[_], s(d, o), d = o;
                t._closed && s(o, f[0]), this.curves = h, this.parts = u, this.length = l, this.index = 0
            },
            _get: function(t) {
                for (var e, i = this.parts, n = i.length, r = this.index; e = r, r && !(i[--r].offset < t););
                for (; e < n; e++) {
                    var s = i[e];
                    if (s.offset >= t) {
                        this.index = e;
                        var a = i[e - 1],
                            o = a && a.index === s.index ? a.time : 0,
                            h = a ? a.offset : 0;
                        return {
                            index: s.index,
                            time: o + (s.time - o) * (t - h) / (s.offset - h)
                        }
                    }
                }
                return {
                    index: i[n - 1].index,
                    time: 1
                }
            },
            drawPart: function(t, e, i) {
                for (var n = this._get(e), r = this._get(i), s = n.index, a = r.index; s <= a; s++) {
                    var o = k.getPart(this.curves[s], s === n.index ? n.time : 0, s === r.index ? r.time : 1);
                    s === n.index && t.moveTo(o[0], o[1]), t.bezierCurveTo.apply(t, o.slice(2))
                }
            }
        }, r.each(k._evaluateMethods, function(t) {
            this[t + "At"] = function(e) {
                var i = this._get(e);
                return k[t](this.curves[i.index], i.time)
            }
        }, {})),
        D = r.extend({
            initialize: function(t) {
                for (var e, i = this.points = [], n = t._segments, r = t._closed, s = 0, a = n.length; s < a; s++) {
                    var o = n[s].point;
                    e && e.equals(o) || i.push(e = o.clone())
                }
                r && (i.unshift(i[i.length - 1]), i.push(i[1])), this.closed = r
            },
            fit: function(t) {
                var e = this.points,
                    i = e.length,
                    n = null;
                return i > 0 && (n = [new T(e[0])], i > 1 && (this.fitCubic(n, t, 0, i - 1, e[1].subtract(e[0]), e[i - 2].subtract(e[i - 1])), this.closed && (n.shift(), n.pop()))), n
            },
            fitCubic: function(t, e, i, n, r, s) {
                var a = this.points;
                if (n - i === 1) {
                    var o = a[i],
                        h = a[n],
                        u = o.getDistance(h) / 3;
                    return void this.addCurve(t, [o, o.add(r.normalize(u)), h.add(s.normalize(u)), h])
                }
                for (var l, c = this.chordLengthParameterize(i, n), f = Math.max(e, e * e), d = !0, _ = 0; _ <= 4; _++) {
                    var g = this.generateBezier(i, n, c, r, s),
                        v = this.findMaxError(i, n, g, c);
                    if (v.error < e && d) return void this.addCurve(t, g);
                    if (l = v.index, v.error >= f) break;
                    d = this.reparameterize(i, n, c, g), f = v.error
                }
                var p = a[l - 1].subtract(a[l + 1]);
                this.fitCubic(t, e, i, l, r, p), this.fitCubic(t, e, l, n, p.negate(), s)
            },
            addCurve: function(t, e) {
                var i = t[t.length - 1];
                i.setHandleOut(e[1].subtract(e[0])), t.push(new T(e[3], e[2].subtract(e[3])))
            },
            generateBezier: function(t, e, i, n, r) {
                for (var s = 1e-12, a = Math.abs, o = this.points, h = o[t], u = o[e], l = [
                        [0, 0],
                        [0, 0]
                    ], c = [0, 0], f = 0, d = e - t + 1; f < d; f++) {
                    var _ = i[f],
                        g = 1 - _,
                        v = 3 * _ * g,
                        p = g * g * g,
                        m = v * g,
                        y = v * _,
                        w = _ * _ * _,
                        x = n.normalize(m),
                        b = r.normalize(y),
                        C = o[t + f].subtract(h.multiply(p + m)).subtract(u.multiply(y + w));
                    l[0][0] += x.dot(x), l[0][1] += x.dot(b), l[1][0] = l[0][1], l[1][1] += b.dot(b), c[0] += x.dot(C), c[1] += b.dot(C)
                }
                var S, P, I = l[0][0] * l[1][1] - l[1][0] * l[0][1];
                if (a(I) > s) {
                    var M = l[0][0] * c[1] - l[1][0] * c[0],
                        T = c[0] * l[1][1] - c[1] * l[0][1];
                    S = T / I, P = M / I
                } else {
                    var z = l[0][0] + l[0][1],
                        k = l[1][0] + l[1][1];
                    S = P = a(z) > s ? c[0] / z : a(k) > s ? c[1] / k : 0
                }
                var O, A, L = u.getDistance(h),
                    N = s * L;
                if (S < N || P < N) S = P = L / 3;
                else {
                    var B = u.subtract(h);
                    O = n.normalize(S), A = r.normalize(P), O.dot(B) - A.dot(B) > L * L && (S = P = L / 3, O = A = null)
                }
                return [h, h.add(O || n.normalize(S)), u.add(A || r.normalize(P)), u]
            },
            reparameterize: function(t, e, i, n) {
                for (var r = t; r <= e; r++) i[r - t] = this.findRoot(n, this.points[r], i[r - t]);
                for (var r = 1, s = i.length; r < s; r++)
                    if (i[r] <= i[r - 1]) return !1;
                return !0
            },
            findRoot: function(t, e, i) {
                for (var n = [], r = [], s = 0; s <= 2; s++) n[s] = t[s + 1].subtract(t[s]).multiply(3);
                for (var s = 0; s <= 1; s++) r[s] = n[s + 1].subtract(n[s]).multiply(2);
                var a = this.evaluate(3, t, i),
                    o = this.evaluate(2, n, i),
                    h = this.evaluate(1, r, i),
                    l = a.subtract(e),
                    c = o.dot(o) + l.dot(h);
                return u.isZero(c) ? i : i - l.dot(o) / c
            },
            evaluate: function(t, e, i) {
                for (var n = e.slice(), r = 1; r <= t; r++)
                    for (var s = 0; s <= t - r; s++) n[s] = n[s].multiply(1 - i).add(n[s + 1].multiply(i));
                return n[0]
            },
            chordLengthParameterize: function(t, e) {
                for (var i = [0], n = t + 1; n <= e; n++) i[n - t] = i[n - t - 1] + this.points[n].getDistance(this.points[n - 1]);
                for (var n = 1, r = e - t; n <= r; n++) i[n] /= i[r];
                return i
            },
            findMaxError: function(t, e, i, n) {
                for (var r = Math.floor((e - t + 1) / 2), s = 0, a = t + 1; a < e; a++) {
                    var o = this.evaluate(3, i, n[a - t]),
                        h = o.subtract(this.points[a]),
                        u = h.x * h.x + h.y * h.y;
                    u >= s && (s = u, r = a)
                }
                return {
                    error: s,
                    index: r
                }
            }
        }),
        j = w.extend({
            _class: "TextItem",
            _applyMatrix: !1,
            _canApplyMatrix: !1,
            _serializeFields: {
                content: null
            },
            _boundsOptions: {
                stroke: !1,
                handle: !1
            },
            initialize: function(t) {
                this._content = "", this._lines = [];
                var i = t && r.isPlainObject(t) && t.x === e && t.y === e;
                this._initialize(i && t, !i && c.read(arguments))
            },
            _equals: function(t) {
                return this._content === t._content
            },
            copyContent: function(t) {
                this.setContent(t._content)
            },
            getContent: function() {
                return this._content
            },
            setContent: function(t) {
                this._content = "" + t, this._lines = this._content.split(/\r\n|\n|\r/gm), this._changed(265)
            },
            isEmpty: function() {
                return !this._content
            },
            getCharacterStyle: "#getStyle",
            setCharacterStyle: "#setStyle",
            getParagraphStyle: "#getStyle",
            setParagraphStyle: "#setStyle"
        }),
        E = j.extend({
            _class: "PointText",
            initialize: function() {
                j.apply(this, arguments)
            },
            getPoint: function() {
                var t = this._matrix.getTranslation();
                return new f(t.x, t.y, this, "setPoint")
            },
            setPoint: function() {
                var t = c.read(arguments);
                this.translate(t.subtract(this._matrix.getTranslation()))
            },
            _draw: function(t, e, i) {
                if (this._content) {
                    this._setStyles(t, e, i);
                    var n = this._lines,
                        r = this._style,
                        s = r.hasFill(),
                        a = r.hasStroke(),
                        o = r.getLeading(),
                        h = t.shadowColor;
                    t.font = r.getFontStyle(), t.textAlign = r.getJustification();
                    for (var u = 0, l = n.length; u < l; u++) {
                        t.shadowColor = h;
                        var c = n[u];
                        s && (t.fillText(c, 0, 0), t.shadowColor = "rgba(0,0,0,0)"), a && t.strokeText(c, 0, 0), t.translate(0, o)
                    }
                }
            },
            _getBounds: function(t, e) {
                var i = this._style,
                    n = this._lines,
                    r = n.length,
                    s = i.getJustification(),
                    a = i.getLeading(),
                    o = this.getView().getTextWidth(i.getFontStyle(), n),
                    h = 0;
                "left" !== s && (h -= o / ("center" === s ? 2 : 1));
                var u = new g(h, r ? -.75 * a : 0, o, r * a);
                return t ? t._transformBounds(u, u) : u
            }
        }),
        F = r.extend(new function() {
            function t(t) {
                var n, r = t.match(/^#(\w{1,2})(\w{1,2})(\w{1,2})$/);
                if (r) {
                    n = [0, 0, 0];
                    for (var s = 0; s < 3; s++) {
                        var o = r[s + 1];
                        n[s] = parseInt(1 == o.length ? o + o : o, 16) / 255
                    }
                } else if (r = t.match(/^rgba?\((.*)\)$/)) {
                    n = r[1].split(",");
                    for (var s = 0, h = n.length; s < h; s++) {
                        var o = +n[s];
                        n[s] = s < 3 ? o / 255 : o
                    }
                } else if (i) {
                    var u = a[t];
                    if (!u) {
                        e || (e = Q.getContext(1, 1), e.globalCompositeOperation = "copy"), e.fillStyle = "rgba(0,0,0,0)", e.fillStyle = t, e.fillRect(0, 0, 1, 1);
                        var l = e.getImageData(0, 0, 1, 1).data;
                        u = a[t] = [l[0] / 255, l[1] / 255, l[2] / 255]
                    }
                    n = u.slice()
                } else n = [0, 0, 0];
                return n
            }
            var e, n = {
                    gray: ["gray"],
                    rgb: ["red", "green", "blue"],
                    hsb: ["hue", "saturation", "brightness"],
                    hsl: ["hue", "saturation", "lightness"],
                    gradient: ["gradient", "origin", "destination", "highlight"]
                },
                s = {},
                a = {},
                o = [
                    [0, 3, 1],
                    [2, 0, 1],
                    [1, 0, 3],
                    [1, 2, 0],
                    [3, 1, 0],
                    [0, 1, 2]
                ],
                u = {
                    "rgb-hsb": function(t, e, i) {
                        var n = Math.max(t, e, i),
                            r = Math.min(t, e, i),
                            s = n - r,
                            a = 0 === s ? 0 : 60 * (n == t ? (e - i) / s + (e < i ? 6 : 0) : n == e ? (i - t) / s + 2 : (t - e) / s + 4);
                        return [a, 0 === n ? 0 : s / n, n]
                    },
                    "hsb-rgb": function(t, e, i) {
                        t = (t / 60 % 6 + 6) % 6;
                        var n = Math.floor(t),
                            r = t - n,
                            n = o[n],
                            s = [i, i * (1 - e), i * (1 - e * r), i * (1 - e * (1 - r))];
                        return [s[n[0]], s[n[1]], s[n[2]]]
                    },
                    "rgb-hsl": function(t, e, i) {
                        var n = Math.max(t, e, i),
                            r = Math.min(t, e, i),
                            s = n - r,
                            a = 0 === s,
                            o = a ? 0 : 60 * (n == t ? (e - i) / s + (e < i ? 6 : 0) : n == e ? (i - t) / s + 2 : (t - e) / s + 4),
                            h = (n + r) / 2,
                            u = a ? 0 : h < .5 ? s / (n + r) : s / (2 - n - r);
                        return [o, u, h]
                    },
                    "hsl-rgb": function(t, e, i) {
                        if (t = (t / 360 % 1 + 1) % 1, 0 === e) return [i, i, i];
                        for (var n = [t + 1 / 3, t, t - 1 / 3], r = i < .5 ? i * (1 + e) : i + e - i * e, s = 2 * i - r, a = [], o = 0; o < 3; o++) {
                            var h = n[o];
                            h < 0 && (h += 1), h > 1 && (h -= 1), a[o] = 6 * h < 1 ? s + 6 * (r - s) * h : 2 * h < 1 ? r : 3 * h < 2 ? s + (r - s) * (2 / 3 - h) * 6 : s
                        }
                        return a
                    },
                    "rgb-gray": function(t, e, i) {
                        return [.2989 * t + .587 * e + .114 * i]
                    },
                    "gray-rgb": function(t) {
                        return [t, t, t]
                    },
                    "gray-hsb": function(t) {
                        return [0, 0, t]
                    },
                    "gray-hsl": function(t) {
                        return [0, 0, t]
                    },
                    "gradient-rgb": function() {
                        return []
                    },
                    "rgb-gradient": function() {
                        return []
                    }
                };
            return r.each(n, function(t, e) {
                s[e] = [], r.each(t, function(t, i) {
                    var a = r.capitalize(t),
                        o = /^(hue|saturation)$/.test(t),
                        h = s[e][i] = "gradient" === t ? function(t) {
                            var e = this._components[0];
                            return t = R.read(Array.isArray(t) ? t : arguments, 0, {
                                readNull: !0
                            }), e !== t && (e && e._removeOwner(this), t && t._addOwner(this)), t
                        } : "gradient" === e ? function() {
                            return c.read(arguments, 0, {
                                readNull: "highlight" === t,
                                clone: !0
                            })
                        } : function(t) {
                            return null == t || isNaN(t) ? 0 : t
                        };
                    this["get" + a] = function() {
                        return this._type === e || o && /^hs[bl]$/.test(this._type) ? this._components[i] : this._convert(e)[i]
                    }, this["set" + a] = function(t) {
                        this._type === e || o && /^hs[bl]$/.test(this._type) || (this._components = this._convert(e), this._properties = n[e], this._type = e), this._components[i] = h.call(this, t), this._changed()
                    }
                }, this)
            }, {
                _class: "Color",
                _readIndex: !0,
                initialize: function l(e) {
                    var i, a, o, h, u = arguments,
                        c = this.__read,
                        f = 0;
                    Array.isArray(e) && (u = e, e = u[0]);
                    var d = null != e && typeof e;
                    if ("string" === d && e in n && (i = e, e = u[1], Array.isArray(e) ? (a = e, o = u[2]) : (c && (f = 1), u = r.slice(u, 1), d = typeof e)), !a) {
                        if (h = "number" === d ? u : "object" === d && null != e.length ? e : null) {
                            i || (i = h.length >= 3 ? "rgb" : "gray");
                            var _ = n[i].length;
                            o = h[_], c && (f += h === arguments ? _ + (null != o ? 1 : 0) : 1), h.length > _ && (h = r.slice(h, 0, _))
                        } else if ("string" === d) i = "rgb", a = t(e), 4 === a.length && (o = a[3], a.length--);
                        else if ("object" === d)
                            if (e.constructor === l) {
                                if (i = e._type, a = e._components.slice(), o = e._alpha, "gradient" === i)
                                    for (var g = 1, v = a.length; g < v; g++) {
                                        var p = a[g];
                                        p && (a[g] = p.clone())
                                    }
                            } else if (e.constructor === R) i = "gradient", h = u;
                        else {
                            i = "hue" in e ? "lightness" in e ? "hsl" : "hsb" : "gradient" in e || "stops" in e || "radial" in e ? "gradient" : "gray" in e ? "gray" : "rgb";
                            var m = n[i],
                                y = s[i];
                            this._components = a = [];
                            for (var g = 0, v = m.length; g < v; g++) {
                                var w = e[m[g]];
                                null == w && !g && "gradient" === i && "stops" in e && (w = {
                                    stops: e.stops,
                                    radial: e.radial
                                }), w = y[g].call(this, w), null != w && (a[g] = w)
                            }
                            o = e.alpha
                        }
                        c && i && (f = 1)
                    }
                    if (this._type = i || "rgb", !a) {
                        this._components = a = [];
                        for (var y = s[this._type], g = 0, v = y.length; g < v; g++) {
                            var w = y[g].call(this, h && h[g]);
                            null != w && (a[g] = w)
                        }
                    }
                    return this._components = a, this._properties = n[this._type], this._alpha = o, c && (this.__read = f), this
                },
                set: "#initialize",
                _serialize: function(t, e) {
                    var i = this.getComponents();
                    return r.serialize(/^(gray|rgb)$/.test(this._type) ? i : [this._type].concat(i), t, !0, e)
                },
                _changed: function() {
                    this._canvasStyle = null, this._owner && this._owner._changed(65)
                },
                _convert: function(t) {
                    var e;
                    return this._type === t ? this._components.slice() : (e = u[this._type + "-" + t]) ? e.apply(this, this._components) : u["rgb-" + t].apply(this, u[this._type + "-rgb"].apply(this, this._components))
                },
                convert: function(t) {
                    return new F(t, this._convert(t), this._alpha)
                },
                getType: function() {
                    return this._type
                },
                setType: function(t) {
                    this._components = this._convert(t), this._properties = n[t], this._type = t
                },
                getComponents: function() {
                    var t = this._components.slice();
                    return null != this._alpha && t.push(this._alpha), t
                },
                getAlpha: function() {
                    return null != this._alpha ? this._alpha : 1
                },
                setAlpha: function(t) {
                    this._alpha = null == t ? null : Math.min(Math.max(t, 0), 1), this._changed()
                },
                hasAlpha: function() {
                    return null != this._alpha
                },
                equals: function(t) {
                    var e = r.isPlainValue(t, !0) ? F.read(arguments) : t;
                    return e === this || e && this._class === e._class && this._type === e._type && this.getAlpha() === e.getAlpha() && r.equals(this._components, e._components) || !1
                },
                toString: function() {
                    for (var t = this._properties, e = [], i = "gradient" === this._type, n = h.instance, r = 0, s = t.length; r < s; r++) {
                        var a = this._components[r];
                        null != a && e.push(t[r] + ": " + (i ? a : n.number(a)))
                    }
                    return null != this._alpha && e.push("alpha: " + n.number(this._alpha)), "{ " + e.join(", ") + " }"
                },
                toCSS: function(t) {
                    function e(t) {
                        return Math.round(255 * (t < 0 ? 0 : t > 1 ? 1 : t))
                    }
                    var i = this._convert("rgb"),
                        n = t || null == this._alpha ? 1 : this._alpha;
                    return i = [e(i[0]), e(i[1]), e(i[2])], n < 1 && i.push(n < 0 ? 0 : n), t ? "#" + ((1 << 24) + (i[0] << 16) + (i[1] << 8) + i[2]).toString(16).slice(1) : (4 == i.length ? "rgba(" : "rgb(") + i.join(",") + ")"
                },
                toCanvasStyle: function(t, e) {
                    if (this._canvasStyle) return this._canvasStyle;
                    if ("gradient" !== this._type) return this._canvasStyle = this.toCSS();
                    var i, n = this._components,
                        r = n[0],
                        s = r._stops,
                        a = n[1],
                        o = n[2],
                        h = n[3],
                        u = e && e.inverted();
                    if (u && (a = u._transformPoint(a), o = u._transformPoint(o), h && (h = u._transformPoint(h))), r._radial) {
                        var l = o.getDistance(a);
                        if (h) {
                            var c = h.subtract(a);
                            c.getLength() > l && (h = a.add(c.normalize(l - .1)))
                        }
                        var f = h || a;
                        i = t.createRadialGradient(f.x, f.y, 0, a.x, a.y, l)
                    } else i = t.createLinearGradient(a.x, a.y, o.x, o.y);
                    for (var d = 0, _ = s.length; d < _; d++) {
                        var g = s[d],
                            v = g._offset;
                        i.addColorStop(null == v ? d / (_ - 1) : v, g._color.toCanvasStyle())
                    }
                    return this._canvasStyle = i
                },
                transform: function(t) {
                    if ("gradient" === this._type) {
                        for (var e = this._components, i = 1, n = e.length; i < n; i++) {
                            var r = e[i];
                            t._transformPoint(r, r, !0)
                        }
                        this._changed()
                    }
                },
                statics: {
                    _types: n,
                    random: function() {
                        var t = Math.random;
                        return new F(t(), t(), t())
                    }
                }
            })
        }, new function() {
            var t = {
                add: function(t, e) {
                    return t + e
                },
                subtract: function(t, e) {
                    return t - e
                },
                multiply: function(t, e) {
                    return t * e
                },
                divide: function(t, e) {
                    return t / e
                }
            };
            return r.each(t, function(t, e) {
                this[e] = function(e) {
                    e = F.read(arguments);
                    for (var i = this._type, n = this._components, r = e._convert(i), s = 0, a = n.length; s < a; s++) r[s] = t(n[s], r[s]);
                    return new F(i, r, null != this._alpha ? t(this._alpha, e.getAlpha()) : null)
                }
            }, {})
        }),
        R = r.extend({
            _class: "Gradient",
            initialize: function(t, e) {
                this._id = l.get(), t && r.isPlainObject(t) && (this.set(t), t = e = null), null == this._stops && this.setStops(t || ["white", "black"]), null == this._radial && this.setRadial("string" == typeof e && "radial" === e || e || !1)
            },
            _serialize: function(t, e) {
                return e.add(this, function() {
                    return r.serialize([this._stops, this._radial], t, !0, e)
                })
            },
            _changed: function() {
                for (var t = 0, e = this._owners && this._owners.length; t < e; t++) this._owners[t]._changed()
            },
            _addOwner: function(t) {
                this._owners || (this._owners = []), this._owners.push(t)
            },
            _removeOwner: function(t) {
                var i = this._owners ? this._owners.indexOf(t) : -1;
                i != -1 && (this._owners.splice(i, 1), this._owners.length || (this._owners = e))
            },
            clone: function() {
                for (var t = [], e = 0, i = this._stops.length; e < i; e++) t[e] = this._stops[e].clone();
                return new R(t, this._radial)
            },
            getStops: function() {
                return this._stops
            },
            setStops: function(t) {
                if (t.length < 2) throw new Error("Gradient stop list needs to contain at least two stops.");
                var i = this._stops;
                if (i)
                    for (var n = 0, r = i.length; n < r; n++) i[n]._owner = e;
                i = this._stops = q.readList(t, 0, {
                    clone: !0
                });
                for (var n = 0, r = i.length; n < r; n++) i[n]._owner = this;
                this._changed()
            },
            getRadial: function() {
                return this._radial
            },
            setRadial: function(t) {
                this._radial = t, this._changed()
            },
            equals: function(t) {
                if (t === this) return !0;
                if (t && this._class === t._class) {
                    var e = this._stops,
                        i = t._stops,
                        n = e.length;
                    if (n === i.length) {
                        for (var r = 0; r < n; r++)
                            if (!e[r].equals(i[r])) return !1;
                        return !0
                    }
                }
                return !1
            }
        }),
        q = r.extend({
            _class: "GradientStop",
            initialize: function(t, i) {
                var n = t,
                    r = i;
                "object" == typeof t && i === e && (Array.isArray(t) && "number" != typeof t[0] ? (n = t[0], r = t[1]) : ("color" in t || "offset" in t || "rampPoint" in t) && (n = t.color, r = t.offset || t.rampPoint || 0)), this.setColor(n), this.setOffset(r)
            },
            clone: function() {
                return new q(this._color.clone(), this._offset)
            },
            _serialize: function(t, e) {
                var i = this._color,
                    n = this._offset;
                return r.serialize(null == n ? [i] : [i, n], t, !0, e)
            },
            _changed: function() {
                this._owner && this._owner._changed(65)
            },
            getOffset: function() {
                return this._offset
            },
            setOffset: function(t) {
                this._offset = t, this._changed()
            },
            getRampPoint: "#getOffset",
            setRampPoint: "#setOffset",
            getColor: function() {
                return this._color
            },
            setColor: function() {
                var t = F.read(arguments, 0, {
                    clone: !0
                });
                t && (t._owner = this), this._color = t, this._changed()
            },
            equals: function(t) {
                return t === this || t && this._class === t._class && this._color.equals(t._color) && this._offset == t._offset || !1
            }
        }),
        V = r.extend(new function() {
            var t = {
                    fillColor: null,
                    fillRule: "nonzero",
                    strokeColor: null,
                    strokeWidth: 1,
                    strokeCap: "butt",
                    strokeJoin: "miter",
                    strokeScaling: !0,
                    miterLimit: 10,
                    dashOffset: 0,
                    dashArray: [],
                    shadowColor: null,
                    shadowBlur: 0,
                    shadowOffset: new c,
                    selectedColor: null
                },
                i = r.set({}, t, {
                    fontFamily: "sans-serif",
                    fontWeight: "normal",
                    fontSize: 12,
                    leading: null,
                    justification: "left"
                }),
                n = r.set({}, i, {
                    fillColor: new F
                }),
                s = {
                    strokeWidth: 97,
                    strokeCap: 97,
                    strokeJoin: 97,
                    strokeScaling: 105,
                    miterLimit: 97,
                    fontFamily: 9,
                    fontWeight: 9,
                    fontSize: 9,
                    font: 9,
                    leading: 9,
                    justification: 9
                },
                a = {
                    beans: !0
                },
                o = {
                    _class: "Style",
                    beans: !0,
                    initialize: function(e, r, s) {
                        this._values = {}, this._owner = r, this._project = r && r._project || s || paper.project, this._defaults = !r || r instanceof x ? i : r instanceof j ? n : t, e && this.set(e)
                    }
                };
            return r.each(i, function(t, i) {
                var n = /Color$/.test(i),
                    h = "shadowOffset" === i,
                    u = r.capitalize(i),
                    l = s[i],
                    f = "set" + u,
                    d = "get" + u;
                o[f] = function(t) {
                    var r = this._owner,
                        s = r && r._children;
                    if (s && s.length > 0 && !(r instanceof N))
                        for (var a = 0, o = s.length; a < o; a++) s[a]._style[f](t);
                    else if (i in this._defaults) {
                        var h = this._values[i];
                        h !== t && (n && (h && h._owner !== e && (h._owner = e), t && t.constructor === F && (t._owner && (t = t.clone()), t._owner = r)), this._values[i] = t, r && r._changed(l || 65))
                    }
                }, o[d] = function(t) {
                    var s, a = this._owner,
                        o = a && a._children;
                    if (i in this._defaults && (!o || !o.length || t || a instanceof N)) {
                        var s = this._values[i];
                        if (s === e) s = this._defaults[i], s && s.clone && (s = s.clone());
                        else {
                            var u = n ? F : h ? c : null;
                            !u || s && s.constructor === u || (this._values[i] = s = u.read([s], 0, {
                                readNull: !0,
                                clone: !0
                            }), s && n && (s._owner = a))
                        }
                    } else if (o)
                        for (var l = 0, f = o.length; l < f; l++) {
                            var _ = o[l]._style[d]();
                            if (l) {
                                if (!r.equals(s, _)) return e
                            } else s = _
                        }
                    return s
                }, a[d] = function(t) {
                    return this._style[d](t)
                }, a[f] = function(t) {
                    this._style[f](t)
                }
            }), r.each({
                Font: "FontFamily",
                WindingRule: "FillRule"
            }, function(t, e) {
                var i = "get" + e,
                    n = "set" + e;
                o[i] = a[i] = "#get" + t, o[n] = a[n] = "#set" + t
            }), w.inject(a), o
        }, {
            set: function(t) {
                var e = t instanceof V,
                    i = e ? t._values : t;
                if (i)
                    for (var n in i)
                        if (n in this._defaults) {
                            var r = i[n];
                            this[n] = r && e && r.clone ? r.clone() : r
                        }
            },
            equals: function(t) {
                function i(t, i, n) {
                    var s = t._values,
                        a = i._values,
                        o = i._defaults;
                    for (var h in s) {
                        var u = s[h],
                            l = a[h];
                        if (!(n && h in a || r.equals(u, l === e ? o[h] : l))) return !1
                    }
                    return !0
                }
                return t === this || t && this._class === t._class && i(this, t) && i(t, this, !0) || !1
            },
            hasFill: function() {
                var t = this.getFillColor();
                return !!t && t.alpha > 0
            },
            hasStroke: function() {
                var t = this.getStrokeColor();
                return !!t && t.alpha > 0 && this.getStrokeWidth() > 0
            },
            hasShadow: function() {
                var t = this.getShadowColor();
                return !!t && t.alpha > 0 && (this.getShadowBlur() > 0 || !this.getShadowOffset().isZero())
            },
            getView: function() {
                return this._project._view
            },
            getFontStyle: function() {
                var t = this.getFontSize();
                return this.getFontWeight() + " " + t + (/[a-z]/i.test(t + "") ? " " : "px ") + this.getFontFamily()
            },
            getFont: "#getFontFamily",
            setFont: "#setFontFamily",
            getLeading: function xt() {
                var t = xt.base.call(this),
                    e = this.getFontSize();
                return /pt|em|%|px/.test(e) && (e = this.getView().getPixelSize(e)), null != t ? t : 1.2 * e
            }
        }),
        H = new function() {
            function t(t, e, i, n) {
                for (var r = ["", "webkit", "moz", "Moz", "ms", "o"], s = e[0].toUpperCase() + e.substring(1), a = 0; a < 6; a++) {
                    var o = r[a],
                        h = o ? o + s : e;
                    if (h in t) {
                        if (!i) return t[h];
                        t[h] = n;
                        break
                    }
                }
            }
            return {
                getStyles: function(t) {
                    var e = t && 9 !== t.nodeType ? t.ownerDocument : t,
                        i = e && e.defaultView;
                    return i && i.getComputedStyle(t, "")
                },
                getBounds: function(t, e) {
                    var i, n = t.ownerDocument,
                        r = n.body,
                        s = n.documentElement;
                    try {
                        i = t.getBoundingClientRect()
                    } catch (a) {
                        i = {
                            left: 0,
                            top: 0,
                            width: 0,
                            height: 0
                        }
                    }
                    var o = i.left - (s.clientLeft || r.clientLeft || 0),
                        h = i.top - (s.clientTop || r.clientTop || 0);
                    if (!e) {
                        var u = n.defaultView;
                        o += u.pageXOffset || s.scrollLeft || r.scrollLeft, h += u.pageYOffset || s.scrollTop || r.scrollTop
                    }
                    return new g(o, h, i.width, i.height)
                },
                getViewportBounds: function(t) {
                    var e = t.ownerDocument,
                        i = e.defaultView,
                        n = e.documentElement;
                    return new g(0, 0, i.innerWidth || n.clientWidth, i.innerHeight || n.clientHeight)
                },
                getOffset: function(t, e) {
                    return H.getBounds(t, e).getPoint()
                },
                getSize: function(t) {
                    return H.getBounds(t, !0).getSize()
                },
                isInvisible: function(t) {
                    return H.getSize(t).equals(new d(0, 0))
                },
                isInView: function(t) {
                    return !H.isInvisible(t) && H.getViewportBounds(t).intersects(H.getBounds(t, !0))
                },
                isInserted: function(t) {
                    return n.body.contains(t)
                },
                getPrefixed: function(e, i) {
                    return e && t(e, i)
                },
                setPrefixed: function(e, i, n) {
                    if ("object" == typeof i)
                        for (var r in i) t(e, r, !0, i[r]);
                    else t(e, i, !0, n)
                }
            }
        },
        Z = {
            add: function(t, e) {
                if (t)
                    for (var i in e)
                        for (var n = e[i], r = i.split(/[\s,]+/g), s = 0, a = r.length; s < a; s++) t.addEventListener(r[s], n, !1)
            },
            remove: function(t, e) {
                if (t)
                    for (var i in e)
                        for (var n = e[i], r = i.split(/[\s,]+/g), s = 0, a = r.length; s < a; s++) t.removeEventListener(r[s], n, !1)
            },
            getPoint: function(t) {
                var e = t.targetTouches ? t.targetTouches.length ? t.targetTouches[0] : t.changedTouches[0] : t;
                return new c(e.pageX || e.clientX + n.documentElement.scrollLeft, e.pageY || e.clientY + n.documentElement.scrollTop)
            },
            getTarget: function(t) {
                return t.target || t.srcElement
            },
            getRelatedTarget: function(t) {
                return t.relatedTarget || t.toElement
            },
            getOffset: function(t, e) {
                return Z.getPoint(t).subtract(H.getOffset(e || Z.getTarget(t)))
            }
        };
    Z.requestAnimationFrame = new function() {
        function t() {
            var e = s;
            s = [];
            for (var i = 0, a = e.length; i < a; i++) e[i]();
            r = n && s.length, r && n(t)
        }
        var e, n = H.getPrefixed(i, "requestAnimationFrame"),
            r = !1,
            s = [];
        return function(i) {
            s.push(i), n ? r || (n(t), r = !0) : e || (e = setInterval(t, 1e3 / 60))
        }
    };
    var U = r.extend(s, {
            _class: "View",
            initialize: function bt(t, e) {
                function r(t) {
                    return e[t] || parseInt(e.getAttribute(t), 10)
                }

                function s() {
                    var t = H.getSize(e);
                    return t.isNaN() || t.isZero() ? new d(r("width"), r("height")) : t
                }
                var o;
                if (i && e) {
                    this._id = e.getAttribute("id"), null == this._id && e.setAttribute("id", this._id = "view-" + bt._id++), Z.add(e, this._viewEvents);
                    var h = "none";
                    if (H.setPrefixed(e.style, {
                            userDrag: h,
                            userSelect: h,
                            touchCallout: h,
                            contentZooming: h,
                            tapHighlightColor: "rgba(0,0,0,0)"
                        }), a.hasAttribute(e, "resize")) {
                        var u = this;
                        Z.add(i, this._windowEvents = {
                            resize: function() {
                                u.setViewSize(s())
                            }
                        })
                    }
                    if (o = s(), a.hasAttribute(e, "stats") && "undefined" != typeof Stats) {
                        this._stats = new Stats;
                        var l = this._stats.domElement,
                            c = l.style,
                            f = H.getOffset(e);
                        c.position = "absolute", c.left = f.x + "px", c.top = f.y + "px", n.body.appendChild(l)
                    }
                } else o = new d(e), e = null;
                this._project = t, this._scope = t._scope, this._element = e, this._pixelRatio || (this._pixelRatio = i && i.devicePixelRatio || 1), this._setElementSize(o.width, o.height), this._viewSize = o, bt._views.push(this), bt._viewsById[this._id] = this, (this._matrix = new p)._owner = this, bt._focused || (bt._focused = this), this._frameItems = {}, this._frameItemCount = 0, this._itemEvents = {
                    "native": {},
                    virtual: {}
                }, this._autoUpdate = !paper.agent.node, this._needsUpdate = !1
            },
            remove: function() {
                if (!this._project) return !1;
                U._focused === this && (U._focused = null), U._views.splice(U._views.indexOf(this), 1), delete U._viewsById[this._id];
                var t = this._project;
                return t._view === this && (t._view = null), Z.remove(this._element, this._viewEvents), Z.remove(i, this._windowEvents), this._element = this._project = null, this.off("frame"), this._animate = !1, this._frameItems = {}, !0
            },
            _events: r.each(w._itemHandlers.concat(["onResize", "onKeyDown", "onKeyUp"]), function(t) {
                this[t] = {}
            }, {
                onFrame: {
                    install: function() {
                        this.play()
                    },
                    uninstall: function() {
                        this.pause()
                    }
                }
            }),
            _animate: !1,
            _time: 0,
            _count: 0,
            getAutoUpdate: function() {
                return this._autoUpdate
            },
            setAutoUpdate: function(t) {
                this._autoUpdate = t, t && this.requestUpdate()
            },
            update: function() {},
            draw: function() {
                this.update()
            },
            requestUpdate: function() {
                if (!this._requested) {
                    var t = this;
                    Z.requestAnimationFrame(function() {
                        if (t._requested = !1, t._animate) {
                            t.requestUpdate();
                            var e = t._element;
                            H.getPrefixed(n, "hidden") && "true" !== a.getAttribute(e, "keepalive") || !H.isInView(e) || t._handleFrame()
                        }
                        t._autoUpdate && t.update()
                    }), this._requested = !0
                }
            },
            play: function() {
                this._animate = !0, this.requestUpdate()
            },
            pause: function() {
                this._animate = !1
            },
            _handleFrame: function() {
                paper = this._scope;
                var t = Date.now() / 1e3,
                    e = this._last ? t - this._last : 0;
                this._last = t, this.emit("frame", new r({
                    delta: e,
                    time: this._time += e,
                    count: this._count++
                })), this._stats && this._stats.update()
            },
            _animateItem: function(t, e) {
                var i = this._frameItems;
                e ? (i[t._id] = {
                    item: t,
                    time: 0,
                    count: 0
                }, 1 === ++this._frameItemCount && this.on("frame", this._handleFrameItems)) : (delete i[t._id], 0 === --this._frameItemCount && this.off("frame", this._handleFrameItems))
            },
            _handleFrameItems: function(t) {
                for (var e in this._frameItems) {
                    var i = this._frameItems[e];
                    i.item.emit("frame", new r(t, {
                        time: i.time += t.delta,
                        count: i.count++
                    }))
                }
            },
            _changed: function() {
                this._project._changed(2049), this._bounds = this._decomposed = e
            },
            getElement: function() {
                return this._element
            },
            getPixelRatio: function() {
                return this._pixelRatio
            },
            getResolution: function() {
                return 72 * this._pixelRatio
            },
            getViewSize: function() {
                var t = this._viewSize;
                return new _(t.width, t.height, this, "setViewSize")
            },
            setViewSize: function() {
                var t = d.read(arguments),
                    e = t.subtract(this._viewSize);
                e.isZero() || (this._setElementSize(t.width, t.height), this._viewSize.set(t), this._changed(), this.emit("resize", {
                    size: t,
                    delta: e
                }), this._autoUpdate && this.update())
            },
            _setElementSize: function(t, e) {
                var i = this._element;
                i && (i.width !== t && (i.width = t), i.height !== e && (i.height = e))
            },
            getBounds: function() {
                return this._bounds || (this._bounds = this._matrix.inverted()._transformBounds(new g(new c, this._viewSize))), this._bounds
            },
            getSize: function() {
                return this.getBounds().getSize()
            },
            isVisible: function() {
                return H.isInView(this._element)
            },
            isInserted: function() {
                return H.isInserted(this._element)
            },
            getPixelSize: function(t) {
                var e, i = this._element;
                if (i) {
                    var r = i.parentNode,
                        s = n.createElement("div");
                    s.style.fontSize = t, r.appendChild(s), e = parseFloat(H.getStyles(s).fontSize), r.removeChild(s)
                } else e = parseFloat(e);
                return e
            },
            getTextWidth: function(t, e) {
                return 0
            }
        }, r.each(["rotate", "scale", "shear", "skew"], function(t) {
            var e = "rotate" === t;
            this[t] = function() {
                var i = (e ? r : c).read(arguments),
                    n = c.read(arguments, 0, {
                        readNull: !0
                    });
                return this.transform((new p)[t](i, n || this.getCenter(!0)))
            }
        }, {
            _decompose: function() {
                return this._decomposed || (this._decomposed = this._matrix.decompose())
            },
            translate: function() {
                var t = new p;
                return this.transform(t.translate.apply(t, arguments))
            },
            getCenter: function() {
                return this.getBounds().getCenter()
            },
            setCenter: function() {
                var t = c.read(arguments);
                this.translate(this.getCenter().subtract(t))
            },
            getZoom: function() {
                var t = this._decompose(),
                    e = t && t.scaling;
                return e ? (e.x + e.y) / 2 : 0
            },
            setZoom: function(t) {
                this.transform((new p).scale(t / this.getZoom(), this.getCenter()))
            },
            getRotation: function() {
                var t = this._decompose();
                return t && t.rotation
            },
            setRotation: function(t) {
                var e = this.getRotation();
                null != e && null != t && this.rotate(t - e)
            },
            getScaling: function() {
                var t = this._decompose(),
                    i = t && t.scaling;
                return i ? new f(i.x, i.y, this, "setScaling") : e
            },
            setScaling: function() {
                var t = this.getScaling(),
                    e = c.read(arguments, 0, {
                        clone: !0,
                        readNull: !0
                    });
                t && e && this.scale(e.x / t.x, e.y / t.y)
            },
            getMatrix: function() {
                return this._matrix
            },
            setMatrix: function() {
                var t = this._matrix;
                t.initialize.apply(t, arguments)
            },
            transform: function(t) {
                this._matrix.append(t)
            },
            scrollBy: function() {
                this.translate(c.read(arguments).negate())
            }
        }), {
            projectToView: function() {
                return this._matrix._transformPoint(c.read(arguments))
            },
            viewToProject: function() {
                return this._matrix._inverseTransform(c.read(arguments))
            },
            getEventPoint: function(t) {
                return this.viewToProject(Z.getOffset(t, this._element))
            }
        }, {
            statics: {
                _views: [],
                _viewsById: {},
                _id: 0,
                create: function(t, e) {
                    n && "string" == typeof e && (e = n.getElementById(e));
                    var r = i ? W : U;
                    return new r(t, e)
                }
            }
        }, new function() {
            function t(t) {
                var e = Z.getTarget(t);
                return e.getAttribute && U._viewsById[e.getAttribute("id")]
            }

            function e() {
                var t = U._focused;
                if (!t || !t.isVisible())
                    for (var e = 0, i = U._views.length; e < i; e++)
                        if ((t = U._views[e]).isVisible()) {
                            U._focused = h = t;
                            break
                        }
            }

            function r(t, e, i) {
                t._handleMouseEvent("mousemove", e, i)
            }

            function s(t, e, i, n, r, s, a) {
                function o(t, i) {
                    if (t.responds(i)) {
                        if (h || (h = new X(i, n, r, e || t, s ? r.subtract(s) : null)), t.emit(i, h) && (I = !0, h.prevented && (M = !0), h.stopped)) return u = !0
                    } else {
                        var a = T[i];
                        if (a) return o(t, a)
                    }
                }
                for (var h, u = !1; t && t !== a && !o(t, i);) t = t._parent;
                return u
            }

            function a(t, e, i, n, r, a) {
                return t._project.removeOn(i), M = I = !1, b && s(b, null, i, n, r, a) || e && e !== b && !e.isDescendant(b) && s(e, null, i, n, r, a, b) || s(t, b || e || t, i, n, r, a)
            }
            if (i) {
                var o, h, u, l, c, f = !1,
                    d = !1,
                    _ = i.navigator;
                _.pointerEnabled || _.msPointerEnabled ? (u = "pointerdown MSPointerDown", l = "pointermove MSPointerMove", c = "pointerup pointercancel MSPointerUp MSPointerCancel") : (u = "touchstart", l = "touchmove", c = "touchend touchcancel", "ontouchstart" in i && _.userAgent.match(/mobile|tablet|ip(ad|hone|od)|android|silk/i) || (u += " mousedown", l += " mousemove", c += " mouseup"));
                var g = {},
                    v = {
                        mouseout: function(t) {
                            var e = U._focused,
                                i = Z.getRelatedTarget(t);
                            if (e && (!i || "HTML" === i.nodeName)) {
                                var n = Z.getOffset(t, e._element),
                                    s = n.x,
                                    a = Math.abs,
                                    o = a(s),
                                    h = 1 << 25,
                                    u = o - h;
                                n.x = a(u) < o ? u * (s < 0 ? -1 : 1) : s, r(e, t, e.viewToProject(n))
                            }
                        },
                        scroll: e
                    };
                g[u] = function(e) {
                    var i = U._focused = t(e);
                    f || (f = !0, i._handleMouseEvent("mousedown", e))
                }, v[l] = function(i) {
                    var n = U._focused;
                    if (!d) {
                        var s = t(i);
                        s ? n !== s && (n && r(n, i), o || (o = n), n = U._focused = h = s) : h && h === n && (o && !o.isInserted() && (o = null), n = U._focused = o, o = null, e())
                    }
                    n && r(n, i)
                }, v[u] = function() {
                    d = !0
                }, v[c] = function(t) {
                    var e = U._focused;
                    e && f && e._handleMouseEvent("mouseup", t), d = f = !1
                }, Z.add(n, v), Z.add(i, {
                    load: e
                });
                var p, m, y, w, x, b, C, S, P, I = !1,
                    M = !1,
                    T = {
                        doubleclick: "click",
                        mousedrag: "mousemove"
                    },
                    z = !1,
                    k = {
                        mousedown: {
                            mousedown: 1,
                            mousedrag: 1,
                            click: 1,
                            doubleclick: 1
                        },
                        mouseup: {
                            mouseup: 1,
                            mousedrag: 1,
                            click: 1,
                            doubleclick: 1
                        },
                        mousemove: {
                            mousedrag: 1,
                            mousemove: 1,
                            mouseenter: 1,
                            mouseleave: 1
                        }
                    };
                return {
                    _viewEvents: g,
                    _handleMouseEvent: function(t, e, i) {
                        function n(t) {
                            return r.virtual[t] || l.responds(t) || u && u.responds(t)
                        }
                        var r = this._itemEvents,
                            o = r["native"][t],
                            h = "mousemove" === t,
                            u = this._scope.tool,
                            l = this;
                        h && f && n("mousedrag") && (t = "mousedrag"), i || (i = this.getEventPoint(e));
                        var c = this.getBounds().contains(i),
                            d = o && c && l._project.hitTest(i, {
                                tolerance: 0,
                                fill: !0,
                                stroke: !0
                            }),
                            _ = d && d.item || null,
                            g = !1,
                            v = {};
                        if (v[t.substr(5)] = !0, o && _ !== x && (x && s(x, null, "mouseleave", e, i), _ && s(_, null, "mouseenter", e, i), x = _), z ^ c && (s(this, null, c ? "mouseenter" : "mouseleave", e, i), p = c ? this : null, g = !0), !c && !v.drag || i.equals(y) || (a(this, _, h ? t : "mousemove", e, i, y), g = !0), z = c, v.down && c || v.up && m) {
                            if (a(this, _, t, e, i, m), v.down) {
                                if (P = _ === C && Date.now() - S < 300, w = C = _, !M && _) {
                                    for (var T = _; T && !T.responds("mousedrag");) T = T._parent;
                                    T && (b = _)
                                }
                                m = i
                            } else v.up && (M || _ !== w || (S = Date.now(), a(this, _, P ? "doubleclick" : "click", e, i, m), P = !1), w = b = null);
                            z = !1, g = !0
                        }
                        y = i, g && u && (I = u._handleMouseEvent(t, e, i, v) || I), (I && !v.move || v.down && n("mouseup")) && e.preventDefault()
                    },
                    _handleKeyEvent: function(t, e, i, n) {
                        function r(r) {
                            r.responds(t) && (paper = a, r.emit(t, s = s || new J(t, e, i, n)))
                        }
                        var s, a = this._scope,
                            o = a.tool;
                        this.isVisible() && (r(this), o && o.responds(t) && r(o))
                    },
                    _countItemEvent: function(t, e) {
                        var i = this._itemEvents,
                            n = i["native"],
                            r = i.virtual;
                        for (var s in k) n[s] = (n[s] || 0) + (k[s][t] || 0) * e;
                        r[t] = (r[t] || 0) + e
                    },
                    statics: {
                        updateFocus: e
                    }
                }
            }
        }),
        W = U.extend({
            _class: "CanvasView",
            initialize: function(t, e) {
                if (!(e instanceof i.HTMLCanvasElement)) {
                    var n = d.read(arguments, 1);
                    if (n.isZero()) throw new Error("Cannot create CanvasView with the provided argument: " + r.slice(arguments, 1));
                    e = Q.getCanvas(n)
                }
                var s = this._context = e.getContext("2d");
                if (s.save(), this._pixelRatio = 1, !/^off|false$/.test(a.getAttribute(e, "hidpi"))) {
                    var o = i.devicePixelRatio || 1,
                        h = H.getPrefixed(s, "backingStorePixelRatio") || 1;
                    this._pixelRatio = o / h
                }
                U.call(this, t, e), this._needsUpdate = !0
            },
            remove: function Ct() {
                return this._context.restore(), Ct.base.call(this)
            },
            _setElementSize: function St(t, e) {
                var i = this._pixelRatio;
                if (St.base.call(this, t * i, e * i), 1 !== i) {
                    var n = this._element,
                        r = this._context;
                    if (!a.hasAttribute(n, "resize")) {
                        var s = n.style;
                        s.width = t + "px", s.height = e + "px"
                    }
                    r.restore(), r.save(), r.scale(i, i)
                }
            },
            getPixelSize: function Pt(t) {
                var e, i = paper.agent;
                if (i && i.firefox) e = Pt.base.call(this, t);
                else {
                    var n = this._context,
                        r = n.font;
                    n.font = t + " serif", e = parseFloat(n.font), n.font = r
                }
                return e
            },
            getTextWidth: function(t, e) {
                var i = this._context,
                    n = i.font,
                    r = 0;
                i.font = t;
                for (var s = 0, a = e.length; s < a; s++) r = Math.max(r, i.measureText(e[s]).width);
                return i.font = n, r
            },
            update: function() {
                if (!this._needsUpdate) return !1;
                var t = this._project,
                    e = this._context,
                    i = this._viewSize;
                return e.clearRect(0, 0, i.width + 1, i.height + 1), t && t.draw(e, this._matrix, this._pixelRatio), this._needsUpdate = !1, !0
            }
        }),
        G = r.extend({
            _class: "Event",
            initialize: function(t) {
                this.event = t, this.type = t && t.type
            },
            prevented: !1,
            stopped: !1,
            preventDefault: function() {
                this.prevented = !0, this.event.preventDefault()
            },
            stopPropagation: function() {
                this.stopped = !0, this.event.stopPropagation()
            },
            stop: function() {
                this.stopPropagation(), this.preventDefault()
            },
            getTimeStamp: function() {
                return this.event.timeStamp
            },
            getModifiers: function() {
                return $.modifiers
            }
        }),
        J = G.extend({
            _class: "KeyEvent",
            initialize: function(t, e, i, n) {
                this.type = t, this.event = e, this.key = i, this.character = n
            },
            toString: function() {
                return "{ type: '" + this.type + "', key: '" + this.key + "', character: '" + this.character + "', modifiers: " + this.getModifiers() + " }"
            }
        }),
        $ = new function() {
            function t(t) {
                var e = t.key || t.keyIdentifier;
                return e = /^U\+/.test(e) ? String.fromCharCode(parseInt(e.substr(2), 16)) : /^Arrow[A-Z]/.test(e) ? e.substr(5) : "Unidentified" === e ? String.fromCharCode(t.keyCode) : e, o[e] || (e.length > 1 ? r.hyphenate(e) : e.toLowerCase())
            }

            function e(t, i, n, a) {
                var o, h = U._focused;
                if (u[i] = t, t ? l[i] = n : delete l[i], i.length > 1 && (o = r.camelize(i)) in c) {
                    c[o] = t;
                    var f = paper && paper.agent;
                    if ("meta" === o && f && f.mac)
                        if (t) s = {};
                        else {
                            for (var d in s) d in l && e(!1, d, s[d], a);
                            s = null
                        }
                } else t && s && (s[i] = n);
                h && h._handleKeyEvent(t ? "keydown" : "keyup", a, i, n)
            }
            var s, a, o = {
                    "\t": "tab",
                    " ": "space",
                    "\b": "backspace",
                    "\x7f": "delete",
                    Spacebar: "space",
                    Del: "delete",
                    Win: "meta",
                    Esc: "escape"
                },
                h = {
                    tab: "\t",
                    space: " ",
                    enter: "\r"
                },
                u = {},
                l = {},
                c = new r({
                    shift: !1,
                    control: !1,
                    alt: !1,
                    meta: !1,
                    capsLock: !1,
                    space: !1
                }).inject({
                    option: {
                        get: function() {
                            return this.alt
                        }
                    },
                    command: {
                        get: function() {
                            var t = paper && paper.agent;
                            return t && t.mac ? this.meta : this.control
                        }
                    }
                });
            return Z.add(n, {
                keydown: function(i) {
                    var n = t(i),
                        r = paper && paper.agent;
                    n.length > 1 || r && r.chrome && (i.altKey || r.mac && i.metaKey || !r.mac && i.ctrlKey) ? e(!0, n, h[n] || (n.length > 1 ? "" : n), i) : a = n
                },
                keypress: function(i) {
                    if (a) {
                        var n = t(i),
                            r = i.charCode,
                            s = r >= 32 ? String.fromCharCode(r) : n.length > 1 ? "" : n;
                        n !== a && (n = s.toLowerCase()), e(!0, n, s, i), a = null
                    }
                },
                keyup: function(i) {
                    var n = t(i);
                    n in l && e(!1, n, l[n], i)
                }
            }), Z.add(i, {
                blur: function(t) {
                    for (var i in l) e(!1, i, l[i], t)
                }
            }), {
                modifiers: c,
                isDown: function(t) {
                    return !!u[t]
                }
            }
        },
        X = G.extend({
            _class: "MouseEvent",
            initialize: function(t, e, i, n, r) {
                this.type = t, this.event = e, this.point = i, this.target = n, this.delta = r
            },
            toString: function() {
                return "{ type: '" + this.type + "', point: " + this.point + ", target: " + this.target + (this.delta ? ", delta: " + this.delta : "") + ", modifiers: " + this.getModifiers() + " }"
            }
        }),

        K = (o.extend({
            _class: "Tool",
            _list: "tools",
            _reference: "tool",
            _events: ["onMouseDown", "onMouseUp", "onMouseDrag", "onMouseMove", "onActivate", "onDeactivate", "onEditOptions", "onKeyDown", "onKeyUp"],
            initialize: function(t) {
                o.call(this), this._moveCount = -1, this._downCount = -1, this.set(t)
            },
            getMinDistance: function() {
                return this._minDistance
            },
            setMinDistance: function(t) {
                this._minDistance = t, null != t && null != this._maxDistance && t > this._maxDistance && (this._maxDistance = t)
            },
            getMaxDistance: function() {
                return this._maxDistance
            },
            setMaxDistance: function(t) {
                this._maxDistance = t, null != this._minDistance && null != t && t < this._minDistance && (this._minDistance = t)
            },
            getFixedDistance: function() {
                return this._minDistance == this._maxDistance ? this._minDistance : null
            },
            setFixedDistance: function(t) {
                this._minDistance = this._maxDistance = t
            },
            _handleMouseEvent: function(t, e, i, n) {
                function r(t, e) {
                    var r = i,
                        s = a ? c._point : c._downPoint || r;
                    if (a) {
                        if (c._moveCount && r.equals(s)) return !1;
                        if (s && (null != t || null != e)) {
                            var o = r.subtract(s),
                                h = o.getLength();
                            if (h < (t || 0)) return !1;
                            e && (r = s.add(o.normalize(Math.min(h, e))))
                        }
                        c._moveCount++
                    }
                    return c._point = r, c._lastPoint = s || r, n.down && (c._moveCount = -1, c._downPoint = r, c._downCount++), !0
                }

                function s() {
                    o && (l = c.emit(t, new Y(c, t, e)) || l)
                }
                paper = this._scope, n.drag && !this.responds(t) && (t = "mousemove");
                var a = n.move || n.drag,
                    o = this.responds(t),
                    h = this.minDistance,
                    u = this.maxDistance,
                    l = !1,
                    c = this;
                if (n.down) r(), s();
                else if (n.up) r(null, u), s();
                else if (o)
                    for (; r(h, u);) s();
                return l
            }
        }), {
            request: function(e) {
                var i = new t.XMLHttpRequest;
                return i.open((e.method || "get").toUpperCase(), e.url, r.pick(e.async, !0)), e.mimeType && i.overrideMimeType(e.mimeType), i.onload = function() {
                    var t = i.status;
                    0 === t || 200 === t ? e.onLoad && e.onLoad.call(i, i.responseText) : i.onerror()
                }, i.onerror = function() {
                    var t = i.status,
                        n = 'Could not load "' + e.url + '" (Status: ' + t + ")";
                    if (!e.onError) throw new Error(n);
                    e.onError(n, t)
                }, i.send(null)
            }
        }),
        Q = {
            canvases: [],
            getCanvas: function(t, e) {
                if (!i) return null;
                var r, s = !0;
                "object" == typeof t && (e = t.height, t = t.width), this.canvases.length ? r = this.canvases.pop() : (r = n.createElement("canvas"), s = !1);
                var a = r.getContext("2d");
                if (!a) throw new Error("Canvas " + r + " is unable to provide a 2D context.");
                return r.width === t && r.height === e ? s && a.clearRect(0, 0, t + 1, e + 1) : (r.width = t, r.height = e), a.save(), r
            },
            getContext: function(t, e) {
                var i = this.getCanvas(t, e);
                return i ? i.getContext("2d") : null
            },
            release: function(t) {
                var e = t && t.canvas ? t.canvas : t;
                e && e.getContext && (e.getContext("2d").restore(), this.canvases.push(e))
            }
        },
        tt = new function() {
            function t(t, e, i) {
                return .2989 * t + .587 * e + .114 * i
            }

            function e(e, i, n, r) {
                var s = r - t(e, i, n);
                d = e + s, _ = i + s, g = n + s;
                var r = t(d, _, g),
                    a = v(d, _, g),
                    o = p(d, _, g);
                if (a < 0) {
                    var h = r - a;
                    d = r + (d - r) * r / h, _ = r + (_ - r) * r / h, g = r + (g - r) * r / h
                }
                if (o > 255) {
                    var u = 255 - r,
                        l = o - r;
                    d = r + (d - r) * u / l, _ = r + (_ - r) * u / l, g = r + (g - r) * u / l
                }
            }

            function i(t, e, i) {
                return p(t, e, i) - v(t, e, i)
            }

            function n(t, e, i, n) {
                var r, s = [t, e, i],
                    a = p(t, e, i),
                    o = v(t, e, i);
                o = o === t ? 0 : o === e ? 1 : 2, a = a === t ? 0 : a === e ? 1 : 2, r = 0 === v(o, a) ? 1 === p(o, a) ? 2 : 1 : 0, s[a] > s[o] ? (s[r] = (s[r] - s[o]) * n / (s[a] - s[o]), s[a] = n) : s[r] = s[a] = 0, s[o] = 0, d = s[0], _ = s[1], g = s[2]
            }
            var s, a, o, h, u, l, c, f, d, _, g, v = Math.min,
                p = Math.max,
                m = Math.abs,
                y = {
                    multiply: function() {
                        d = u * s / 255, _ = l * a / 255, g = c * o / 255
                    },
                    screen: function() {
                        d = u + s - u * s / 255, _ = l + a - l * a / 255, g = c + o - c * o / 255
                    },
                    overlay: function() {
                        d = u < 128 ? 2 * u * s / 255 : 255 - 2 * (255 - u) * (255 - s) / 255, _ = l < 128 ? 2 * l * a / 255 : 255 - 2 * (255 - l) * (255 - a) / 255, g = c < 128 ? 2 * c * o / 255 : 255 - 2 * (255 - c) * (255 - o) / 255
                    },
                    "soft-light": function() {
                        var t = s * u / 255;
                        d = t + u * (255 - (255 - u) * (255 - s) / 255 - t) / 255, t = a * l / 255, _ = t + l * (255 - (255 - l) * (255 - a) / 255 - t) / 255, t = o * c / 255, g = t + c * (255 - (255 - c) * (255 - o) / 255 - t) / 255
                    },
                    "hard-light": function() {
                        d = s < 128 ? 2 * s * u / 255 : 255 - 2 * (255 - s) * (255 - u) / 255, _ = a < 128 ? 2 * a * l / 255 : 255 - 2 * (255 - a) * (255 - l) / 255, g = o < 128 ? 2 * o * c / 255 : 255 - 2 * (255 - o) * (255 - c) / 255
                    },
                    "color-dodge": function() {
                        d = 0 === u ? 0 : 255 === s ? 255 : v(255, 255 * u / (255 - s)), _ = 0 === l ? 0 : 255 === a ? 255 : v(255, 255 * l / (255 - a)), g = 0 === c ? 0 : 255 === o ? 255 : v(255, 255 * c / (255 - o))
                    },
                    "color-burn": function() {
                        d = 255 === u ? 255 : 0 === s ? 0 : p(0, 255 - 255 * (255 - u) / s), _ = 255 === l ? 255 : 0 === a ? 0 : p(0, 255 - 255 * (255 - l) / a), g = 255 === c ? 255 : 0 === o ? 0 : p(0, 255 - 255 * (255 - c) / o)
                    },
                    darken: function() {
                        d = u < s ? u : s, _ = l < a ? l : a, g = c < o ? c : o
                    },
                    lighten: function() {
                        d = u > s ? u : s, _ = l > a ? l : a, g = c > o ? c : o
                    },
                    difference: function() {
                        d = u - s, d < 0 && (d = -d), _ = l - a, _ < 0 && (_ = -_), g = c - o, g < 0 && (g = -g)
                    },
                    exclusion: function() {
                        d = u + s * (255 - u - u) / 255, _ = l + a * (255 - l - l) / 255, g = c + o * (255 - c - c) / 255
                    },
                    hue: function() {
                        n(s, a, o, i(u, l, c)), e(d, _, g, t(u, l, c))
                    },
                    saturation: function() {
                        n(u, l, c, i(s, a, o)), e(d, _, g, t(u, l, c))
                    },
                    luminosity: function() {
                        e(u, l, c, t(s, a, o))
                    },
                    color: function() {
                        e(s, a, o, t(u, l, c))
                    },
                    add: function() {
                        d = v(u + s, 255), _ = v(l + a, 255), g = v(c + o, 255)
                    },
                    subtract: function() {
                        d = p(u - s, 0), _ = p(l - a, 0), g = p(c - o, 0)
                    },
                    average: function() {
                        d = (u + s) / 2, _ = (l + a) / 2, g = (c + o) / 2
                    },
                    negation: function() {
                        d = 255 - m(255 - s - u), _ = 255 - m(255 - a - l), g = 255 - m(255 - o - c)
                    }
                },
                w = this.nativeModes = r.each(["source-over", "source-in", "source-out", "source-atop", "destination-over", "destination-in", "destination-out", "destination-atop", "lighter", "darker", "copy", "xor"], function(t) {
                    this[t] = !0
                }, {}),
                x = Q.getContext(1, 1);
            x && (r.each(y, function(t, e) {
                var i = "darken" === e,
                    n = !1;
                x.save();
                try {
                    x.fillStyle = i ? "#300" : "#a00", x.fillRect(0, 0, 1, 1), x.globalCompositeOperation = e, x.globalCompositeOperation === e && (x.fillStyle = i ? "#a00" : "#300", x.fillRect(0, 0, 1, 1), n = x.getImageData(0, 0, 1, 1).data[0] !== i ? 170 : 51)
                } catch (r) {}
                x.restore(), w[e] = n
            }), Q.release(x)), this.process = function(t, e, i, n, r) {
                var v = e.canvas,
                    p = "normal" === t;
                if (p || w[t]) i.save(), i.setTransform(1, 0, 0, 1, 0, 0), i.globalAlpha = n, p || (i.globalCompositeOperation = t), i.drawImage(v, r.x, r.y), i.restore();
                else {
                    var m = y[t];
                    if (!m) return;
                    for (var x = i.getImageData(r.x, r.y, v.width, v.height), b = x.data, C = e.getImageData(0, 0, v.width, v.height).data, S = 0, P = b.length; S < P; S += 4) {
                        s = C[S], u = b[S], a = C[S + 1], l = b[S + 1], o = C[S + 2], c = b[S + 2], h = C[S + 3], f = b[S + 3], m();
                        var I = h * n / 255,
                            M = 1 - I;
                        b[S] = I * d + M * u, b[S + 1] = I * _ + M * l, b[S + 2] = I * g + M * c, b[S + 3] = h * n + M * f
                    }
                    i.putImageData(x, r.x, r.y)
                }
            }
        },
        et = new function() {
            function t(t, e, s) {
                return i(n.createElementNS(r, t), e, s)
            }

            function e(t, e) {
                var i = o[e],
                    n = i ? t.getAttributeNS(i, e) : t.getAttribute(e);
                return "null" === n ? null : n
            }

            function i(t, e, i) {
                for (var n in e) {
                    var r = e[n],
                        s = o[n];
                    "number" == typeof r && i && (r = i.number(r)), s ? t.setAttributeNS(s, n, r) : t.setAttribute(n, r)
                }
                return t
            }
            var r = "http://www.w3.org/2000/svg",
                s = "http://www.w3.org/2000/xmlns",
                a = "http://www.w3.org/1999/xlink",
                o = {
                    href: a,
                    xlink: s,
                    xmlns: s + "/",
                    "xmlns:xlink": s + "/"
                };
            return {
                svg: r,
                xmlns: s,
                xlink: a,
                create: t,
                get: e,
                set: i
            }
        },
        it = r.each({
            fillColor: ["fill", "color"],
            fillRule: ["fill-rule", "string"],
            strokeColor: ["stroke", "color"],
            strokeWidth: ["stroke-width", "number"],
            strokeCap: ["stroke-linecap", "string"],
            strokeJoin: ["stroke-linejoin", "string"],
            strokeScaling: ["vector-effect", "lookup", {
                "true": "none",
                "false": "non-scaling-stroke"
            }, function(t, e) {
                return !e && (t instanceof A || t instanceof C || t instanceof j)
            }],
            miterLimit: ["stroke-miterlimit", "number"],
            dashArray: ["stroke-dasharray", "array"],
            dashOffset: ["stroke-dashoffset", "number"],
            fontFamily: ["font-family", "string"],
            fontWeight: ["font-weight", "string"],
            fontSize: ["font-size", "number"],
            justification: ["text-anchor", "lookup", {
                left: "start",
                center: "middle",
                right: "end"
            }],
            opacity: ["opacity", "number"],
            blendMode: ["mix-blend-mode", "style"]
        }, function(t, e) {
            var i = r.capitalize(e),
                n = t[2];
            this[e] = {
                type: t[1],
                property: e,
                attribute: t[0],
                toSVG: n,
                fromSVG: n && r.each(n, function(t, e) {
                    this[t] = e
                }, {}),
                exportFilter: t[3],
                get: "get" + i,
                set: "set" + i
            }
        }, {});
    return new function() {

    }, paper = new(a.inject(r.exports, {
        Base: r,
        Numerical: u,
        Key: $,
        DomEvent: Z,
        DomElement: H,
        document: n,
        window: i,
        Symbol: I,
        PlacedSymbol: P
    })), paper.agent.node && require("./node/extend.js")(paper), "function" == typeof define && define.amd ? define("paper", paper) : "object" == typeof module && module && (module.exports = paper), paper
}.call(this, "object" == typeof self ? self : null);;;;


TRIANGLE || (TRIANGLE = {});
var TRIANGLE = {
    init: function init(triangleElement) {
        var canvas = triangleElement.querySelector("canvas");
        params = {
            color: triangleElement.dataset.trianglecolor,
            cross: triangleElement.dataset.trianglecross,
            distance: triangleElement.dataset.triangledistance,
            start: triangleElement.dataset.trianglestart,
            end: triangleElement.dataset.triangleend
        };
        TRIANGLE.injectCSS(triangleElement, canvas);
        triangleElement.style.top = TRIANGLE.getCanvasPosition() + "px";
        paper.install(window);
        paper.setup(canvas);
        TRIANGLE.variables(triangleElement);
        TRIANGLE.generateQuadrantCoordinates();
        TRIANGLE.makeCross();
        TRIANGLE.makeQuadrants();
        TRIANGLE.makeTriangle();
        TRIANGLE.events(triangleElement);
        TRIANGLE.onPageScroll();
        view.draw();
        setTimeout(function() {
            triangleElement.style.transition = "transform 1s cubic-bezier(.17,.67,.5,1)";
        }, 100);
    },
    injectCSS: function injectCSS(div, canvas) {
        if (typeof Object.assign != 'function') {
            Object.defineProperty(Object, "assign", {
                value: function assign(target, varArgs) {
                    'use strict';
                    if (target == null) throw new TypeError('Cannot convert undefined or null to object');
                    var to = Object(target);
                    for (var index = 1; index < arguments.length; index++) {
                        var nextSource = arguments[index];
                        if (nextSource != null) {
                            for (var nextKey in nextSource) {
                                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) to[nextKey] = nextSource[nextKey];
                            }
                        }
                    }
                    return to;
                },
                writable: true,
                configurable: true
            });
        }
        divStyle = {
            width: "100%",
            height: "100vh",
            pointerEvents: "none",
            position: "absolute",
            zIndex: "7",
            top: 0,
            willChange: "transform"
        };
        canvasStyle = {
            position: "absolute",
            width: "100%",
            height: "120%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)"
        };
        Object.assign(div.style, divStyle);
        Object.assign(canvas.style, canvasStyle);
    },
    variables: function variables(triangle) {
        canvasWidth = view.size.width;
        canvasHeight = view.size.height;
        halfWidth = canvasWidth / 2;
        halfHeight = canvasHeight / 2;
        quadrants = [];
        quadrantPaths = [];
        crossPath = {};
        trianglePath = {};
        triangleElement = triangle;
        startElement = document.querySelector("[data-sectionid=\"" + params.start + "\"]");
        endElement = document.querySelector("[data-sectionid=\"" + params.end + "\"]");
        startElementInitialPos = TRIANGLE.getCoords(startElement).top;
        endElementInitialPos = TRIANGLE.getCoords(endElement).top;
    },
    events: function events(triangleElement) {
        var newPoint = [];
        trianglePath.segments.forEach(function(triangleVertice, verticeIndex) {
            var destination;
            do {
                destination = new Point.random().multiply(view.size);
            } while (!quadrantPaths[verticeIndex].contains(destination) || crossPath.contains(destination));
            newPoint.push(destination);
        });
        view.onFrame = function(event) {
            var vector = [];
            trianglePath.segments.forEach(function(triangleVertice, verticeIndex) {
                var verticePos = triangleVertice.point;
                vector.push(newPoint[verticeIndex].subtract(triangleVertice.point));
                verticePos.x += vector[verticeIndex].x / 90;
                verticePos.y += vector[verticeIndex].y / 90;
                if (vector[verticeIndex].length < 5) {
                    newPoint.length = 0;
                    trianglePath.segments.forEach(function(triangleVerticeNew, verticeIndexNew) {
                        var destination;
                        do {
                            destination = new Point.random().multiply(view.size);
                        } while (!quadrantPaths[verticeIndexNew].contains(destination) || crossPath.contains(destination) || !triangleVerticeNew.point.isClose(destination, params.distance));
                        newPoint.push(destination);
                    });
                }
            });
        };
        view.onMouseMove = TRIANGLE.onMouseMove;
        window.addEventListener('scroll', TRIANGLE.onPageScroll);
    },
    onMouseMove: function onMouseMove(event) {
        trianglePath.segments.forEach(function(triangleVertice) {
            var verticePos = triangleVertice.point;
            var currentPos = event.point;
            var vector = event.delta || {
                x: 0,
                y: 0
            };
            var lastPos = {
                x: currentPos.x - vector.x,
                y: currentPos.y - vector.y
            };
            var closing = verticePos.getDistance(lastPos) > verticePos.getDistance(currentPos);
            var friction = verticePos.getDistance(currentPos) / 20;
            if (verticePos.isClose(currentPos, 30)) {
                verticePos.x += vector.x / friction / 4;
                verticePos.y += vector.y / friction / 4;
            } else {
                verticePos.x += vector.x / friction;
                verticePos.y += vector.y / friction;
            }
        });
    },
    onPageScroll: function onPageScroll() {
        var startElementPos = startElement.getBoundingClientRect().top,
            endElementPos = endElement.getBoundingClientRect().top,
            windowHeight = window.innerHeight,
            isPartiallyVisible = startElementPos > 0 && startElementPos < windowHeight || endElementPos < 0,
            isFullyVisible = startElementPos <= 0 && endElementPos >= 0;
        if (isFullyVisible) triangleElement.style.transform = "translate3d(0," + (startElementInitialPos - startElementPos) + "px,0)";
        else if (isPartiallyVisible) {
            if (startElementPos > 0 && startElementPos < windowHeight) triangleElement.style.transform = "translate3d(0," + startElementInitialPos + "px,0)";
            if (endElementPos < 0) triangleElement.style.transform = "translate3d(0," + endElementInitialPos + "px,0)";
        } else triangleElement.style.transform = "translate3d(0," + startElementInitialPos + "px,0)";
    },
    generateQuadrantCoordinates: function generateQuadrantCoordinates() {
        quadrants.push({
            x1: 0,
            y1: 0,
            x2: halfWidth,
            y2: halfHeight
        });
        quadrants.push({
            x1: halfWidth,
            y1: 0,
            x2: canvasWidth * 2,
            y2: halfHeight
        });
        quadrants.push({
            x1: halfWidth,
            y1: halfHeight,
            x2: canvasWidth,
            y2: canvasHeight
        });
        quadrants.push({
            x1: 0,
            y1: halfHeight,
            x2: halfWidth,
            y2: canvasHeight
        });
        var indexToBeRemoved = Math.floor(Math.random() * 4);
        quadrants.splice(indexToBeRemoved, 1);
    },
    makeCross: function makeCross() {
        var verticalLine = new Rectangle(new Point(halfWidth - halfWidth * params.cross, 0), new Point(halfWidth + canvasWidth * params.cross / 2, canvasHeight));
        var horizontalLine = new Rectangle(new Point(0, halfHeight - halfHeight * params.cross), new Point(canvasWidth, halfHeight + canvasHeight * params.cross / 2));
        var verticalLinePath = new Path.Rectangle(verticalLine);
        var horizontalLinePath = new Path.Rectangle(horizontalLine);
        crossPath = new CompoundPath({
            children: [horizontalLinePath, verticalLinePath]
        });
    },
    makeQuadrants: function makeQuadrants() {
        quadrants.forEach(function(quadrant) {
            var quadrantElement = new Rectangle(new Point(quadrant.x1, quadrant.y1), new Point(quadrant.x2, quadrant.y2));
            var quadrantPath = new Path.Rectangle(quadrantElement);
            quadrantPaths.push(quadrantPath);
        });
    },
    makeTriangle: function makeTriangle() {
        var points = [];
        quadrantPaths.forEach(function(quadrant) {
            var coords;
            do {
                coords = new Point.random().multiply(view.size);
            } while (!quadrant.contains(coords) || crossPath.contains(coords));
            points.push(coords);
        });
        trianglePath = new Path({
            segments: [].concat(points),
            strokeColor: params.color,
            strokeWidth: .5,
            strokeCap: 'round',
            closed: true
        });
    },
    getCanvasPosition: function getCanvasPosition() {
        document.querySelector("[data-sectionid=\"" + params.start + "\"]").getBoundingClientRect().top - document.body.getBoundingClientRect().top;
    },
    getCoords: function getCoords(elem) {
        var box = elem.getBoundingClientRect();
        var body = document.body;
        var docEl = document.documentElement;
        var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
        var clientTop = docEl.clientTop || body.clientTop || 0;
        var clientLeft = docEl.clientLeft || body.clientLeft || 0;
        var top = box.top + scrollTop - clientTop;
        var left = box.left + scrollLeft - clientLeft;
        return {
            top: Math.round(top),
            left: Math.round(left)
        };
    },
    getRandomColor: function getRandomColor() {
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += '0123456789ABCDEF' [Math.floor(Math.random() * 16)];
        }
        return color;
    }
};
window.onload = function() {
    var triangles = document.querySelectorAll(".triangle");
    if (window.innerWidth > 768)
        for (var i = 0; i < triangles.length; i++) {
            TRIANGLE.init(triangles[i]);
        };
    window.addEventListener("resize", function() {
        if (window.innerWidth <= 1024) document.querySelector(".triangle").remove();
    })
};;;;