(function () {
  /*

    Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   
   Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   
    Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */
  'use strict';
  var J =
      'undefined' != typeof window && window === this
        ? this
        : 'undefined' != typeof global && null != global
        ? global
        : this,
    Aa =
      'function' == typeof Object.defineProperties
        ? Object.defineProperty
        : function (g, q, N) {
            g != Array.prototype && g != Object.prototype && (g[q] = N.value);
          };
  function sb() {
    sb = function () {};
    J.Symbol || (J.Symbol = tb);
  }
  var tb = (function () {
    var g = 0;
    return function (q) {
      return 'jscomp_symbol_' + (q || '') + g++;
    };
  })();
  function dd() {
    sb();
    var g = J.Symbol.iterator;
    g || (g = J.Symbol.iterator = J.Symbol('iterator'));
    'function' != typeof Array.prototype[g] &&
      Aa(Array.prototype, g, {
        configurable: !0,
        writable: !0,
        value: function () {
          return ed(this);
        },
      });
    dd = function () {};
  }
  function ed(g) {
    var q = 0;
    return fd(function () {
      return q < g.length ? { done: !1, value: g[q++] } : { done: !0 };
    });
  }
  function fd(g) {
    dd();
    g = { next: g };
    g[J.Symbol.iterator] = function () {
      return this;
    };
    return g;
  }
  function gd(g) {
    dd();
    var q = g[Symbol.iterator];
    return q ? q.call(g) : ed(g);
  }
  function hd(g) {
    for (var q, N = []; !(q = g.next()).done; ) N.push(q.value);
    return N;
  }
  (function () {
    function g() {
      var a = this;
      this.m = {};
      this.g = document.documentElement;
      var b = new Ba();
      b.rules = [];
      this.h = v.set(this.g, new v(b));
      this.i = !1;
      this.b = this.a = null;
      ub(function () {
        a.c();
      });
    }
    function q() {
      this.customStyles = [];
      this.enqueued = !1;
    }
    function N() {}
    function ha(a) {
      this.cache = {};
      this.c = void 0 === a ? 100 : a;
    }
    function n() {}
    function v(a, b, c, d, e) {
      this.D = a || null;
      this.b = b || null;
      this.la = c || [];
      this.N = null;
      this.V = e || '';
      this.a = this.A = this.J = null;
    }
    function u() {}
    function Ba() {
      this.end = this.start = 0;
      this.rules = this.parent = this.previous = null;
      this.cssText = this.parsedCssText = '';
      this.atRule = !1;
      this.type = 0;
      this.parsedSelector = this.selector = this.keyframesName = '';
    }
    function id(a) {
      function b(b, c) {
        Object.defineProperty(b, 'innerHTML', {
          enumerable: c.enumerable,
          configurable: !0,
          get: c.get,
          set: function (b) {
            var d = this,
              e = void 0;
            t(this) &&
              ((e = []),
              O(this, function (a) {
                a !== d && e.push(a);
              }));
            c.set.call(this, b);
            if (e)
              for (var f = 0; f < e.length; f++) {
                var k = e[f];
                1 === k.__CE_state && a.disconnectedCallback(k);
              }
            this.ownerDocument.__CE_hasRegistry ? a.f(this) : a.l(this);
            return b;
          },
        });
      }
      function c(b, c) {
        x(b, 'insertAdjacentElement', function (b, d) {
          var e = t(d);
          b = c.call(this, b, d);
          e && a.a(d);
          t(b) && a.b(d);
          return b;
        });
      }
      vb &&
        x(Element.prototype, 'attachShadow', function (a) {
          return (this.__CE_shadowRoot = a = vb.call(this, a));
        });
      if (Ca && Ca.get) b(Element.prototype, Ca);
      else if (Da && Da.get) b(HTMLElement.prototype, Da);
      else {
        var d = Ea.call(document, 'div');
        a.s(function (a) {
          b(a, {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return wb.call(this, !0).innerHTML;
            },
            set: function (a) {
              var b = 'template' === this.localName ? this.content : this;
              for (d.innerHTML = a; 0 < b.childNodes.length; )
                Fa.call(b, b.childNodes[0]);
              for (; 0 < d.childNodes.length; ) ia.call(b, d.childNodes[0]);
            },
          });
        });
      }
      x(Element.prototype, 'setAttribute', function (b, c) {
        if (1 !== this.__CE_state) return xb.call(this, b, c);
        var d = Ga.call(this, b);
        xb.call(this, b, c);
        c = Ga.call(this, b);
        a.attributeChangedCallback(this, b, d, c, null);
      });
      x(Element.prototype, 'setAttributeNS', function (b, c, d) {
        if (1 !== this.__CE_state) return yb.call(this, b, c, d);
        var e = ja.call(this, b, c);
        yb.call(this, b, c, d);
        d = ja.call(this, b, c);
        a.attributeChangedCallback(this, c, e, d, b);
      });
      x(Element.prototype, 'removeAttribute', function (b) {
        if (1 !== this.__CE_state) return zb.call(this, b);
        var c = Ga.call(this, b);
        zb.call(this, b);
        null !== c && a.attributeChangedCallback(this, b, c, null, null);
      });
      x(Element.prototype, 'removeAttributeNS', function (b, c) {
        if (1 !== this.__CE_state) return Ab.call(this, b, c);
        var d = ja.call(this, b, c);
        Ab.call(this, b, c);
        var e = ja.call(this, b, c);
        d !== e && a.attributeChangedCallback(this, c, d, e, b);
      });
      Bb
        ? c(HTMLElement.prototype, Bb)
        : Cb
        ? c(Element.prototype, Cb)
        : console.warn(
            'Custom Elements: `Element#insertAdjacentElement` was not patched.'
          );
      Ha(a, Element.prototype, { Z: jd, append: kd });
      ld(a, { ja: md, Wa: nd, replaceWith: od, remove: pd });
    }
    function ld(a, b) {
      var c = Element.prototype;
      function d(b) {
        return function (c) {
          for (var d = [], e = 0; e < arguments.length; ++e)
            d[e - 0] = arguments[e];
          e = [];
          for (var f = [], g = 0; g < d.length; g++) {
            var m = d[g];
            m instanceof Element && t(m) && f.push(m);
            if (m instanceof DocumentFragment)
              for (m = m.firstChild; m; m = m.nextSibling) e.push(m);
            else e.push(m);
          }
          b.apply(this, d);
          for (d = 0; d < f.length; d++) a.a(f[d]);
          if (t(this))
            for (d = 0; d < e.length; d++)
              (f = e[d]), f instanceof Element && a.b(f);
        };
      }
      void 0 !== b.ja && (c.before = d(b.ja));
      void 0 !== b.ja && (c.after = d(b.Wa));
      void 0 !== b.replaceWith &&
        x(c, 'replaceWith', function (c) {
          for (var d = [], e = 0; e < arguments.length; ++e)
            d[e - 0] = arguments[e];
          e = [];
          for (var h = [], w = 0; w < d.length; w++) {
            var g = d[w];
            g instanceof Element && t(g) && h.push(g);
            if (g instanceof DocumentFragment)
              for (g = g.firstChild; g; g = g.nextSibling) e.push(g);
            else e.push(g);
          }
          w = t(this);
          b.replaceWith.apply(this, d);
          for (d = 0; d < h.length; d++) a.a(h[d]);
          if (w)
            for (a.a(this), d = 0; d < e.length; d++)
              (h = e[d]), h instanceof Element && a.b(h);
        });
      void 0 !== b.remove &&
        x(c, 'remove', function () {
          var c = t(this);
          b.remove.call(this);
          c && a.a(this);
        });
    }
    function qd(a) {
      function b(b, d) {
        Object.defineProperty(b, 'textContent', {
          enumerable: d.enumerable,
          configurable: !0,
          get: d.get,
          set: function (b) {
            if (this.nodeType === Node.TEXT_NODE) d.set.call(this, b);
            else {
              var c = void 0;
              if (this.firstChild) {
                var e = this.childNodes,
                  h = e.length;
                if (0 < h && t(this)) {
                  c = Array(h);
                  for (var w = 0; w < h; w++) c[w] = e[w];
                }
              }
              d.set.call(this, b);
              if (c) for (b = 0; b < c.length; b++) a.a(c[b]);
            }
          },
        });
      }
      x(Node.prototype, 'insertBefore', function (b, d) {
        if (b instanceof DocumentFragment) {
          var c = Array.prototype.slice.apply(b.childNodes);
          b = Db.call(this, b, d);
          if (t(this)) for (d = 0; d < c.length; d++) a.b(c[d]);
          return b;
        }
        c = t(b);
        d = Db.call(this, b, d);
        c && a.a(b);
        t(this) && a.b(b);
        return d;
      });
      x(Node.prototype, 'appendChild', function (b) {
        if (b instanceof DocumentFragment) {
          var c = Array.prototype.slice.apply(b.childNodes);
          b = ia.call(this, b);
          if (t(this)) for (var e = 0; e < c.length; e++) a.b(c[e]);
          return b;
        }
        c = t(b);
        e = ia.call(this, b);
        c && a.a(b);
        t(this) && a.b(b);
        return e;
      });
      x(Node.prototype, 'cloneNode', function (b) {
        b = wb.call(this, b);
        this.ownerDocument.__CE_hasRegistry ? a.f(b) : a.l(b);
        return b;
      });
      x(Node.prototype, 'removeChild', function (b) {
        var c = t(b),
          e = Fa.call(this, b);
        c && a.a(b);
        return e;
      });
      x(Node.prototype, 'replaceChild', function (b, d) {
        if (b instanceof DocumentFragment) {
          var c = Array.prototype.slice.apply(b.childNodes);
          b = Eb.call(this, b, d);
          if (t(this)) for (a.a(d), d = 0; d < c.length; d++) a.b(c[d]);
          return b;
        }
        c = t(b);
        var f = Eb.call(this, b, d),
          k = t(this);
        k && a.a(d);
        c && a.a(b);
        k && a.b(b);
        return f;
      });
      Ia && Ia.get
        ? b(Node.prototype, Ia)
        : a.s(function (a) {
            b(a, {
              enumerable: !0,
              configurable: !0,
              get: function () {
                for (var a = [], b = 0; b < this.childNodes.length; b++)
                  a.push(this.childNodes[b].textContent);
                return a.join('');
              },
              set: function (a) {
                for (; this.firstChild; ) Fa.call(this, this.firstChild);
                ia.call(this, document.createTextNode(a));
              },
            });
          });
    }
    function rd(a) {
      x(Document.prototype, 'createElement', function (b) {
        if (this.__CE_hasRegistry) {
          var c = a.c(b);
          if (c) return new c.constructor();
        }
        b = Ea.call(this, b);
        a.g(b);
        return b;
      });
      x(Document.prototype, 'importNode', function (b, c) {
        b = sd.call(this, b, c);
        this.__CE_hasRegistry ? a.f(b) : a.l(b);
        return b;
      });
      x(Document.prototype, 'createElementNS', function (b, c) {
        if (
          this.__CE_hasRegistry &&
          (null === b || 'http://www.w3.org/1999/xhtml' === b)
        ) {
          var d = a.c(c);
          if (d) return new d.constructor();
        }
        b = td.call(this, b, c);
        a.g(b);
        return b;
      });
      Ha(a, Document.prototype, { Z: ud, append: vd });
    }
    function Ha(a, b, c) {
      function d(b) {
        return function (c) {
          for (var d = [], e = 0; e < arguments.length; ++e)
            d[e - 0] = arguments[e];
          e = [];
          for (var f = [], g = 0; g < d.length; g++) {
            var m = d[g];
            m instanceof Element && t(m) && f.push(m);
            if (m instanceof DocumentFragment)
              for (m = m.firstChild; m; m = m.nextSibling) e.push(m);
            else e.push(m);
          }
          b.apply(this, d);
          for (d = 0; d < f.length; d++) a.a(f[d]);
          if (t(this))
            for (d = 0; d < e.length; d++)
              (f = e[d]), f instanceof Element && a.b(f);
        };
      }
      void 0 !== c.Z && (b.prepend = d(c.Z));
      void 0 !== c.append && (b.append = d(c.append));
    }
    function wd(a) {
      window.HTMLElement = (function () {
        function b() {
          var b = this.constructor,
            d = a.w(b);
          if (!d)
            throw Error(
              'The custom element being constructed was not registered with `customElements`.'
            );
          var e = d.constructionStack;
          if (0 === e.length)
            return (
              (e = Ea.call(document, d.localName)),
              Object.setPrototypeOf(e, b.prototype),
              (e.__CE_state = 1),
              (e.__CE_definition = d),
              a.g(e),
              e
            );
          d = e.length - 1;
          var f = e[d];
          if (f === Fb)
            throw Error(
              'The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.'
            );
          e[d] = Fb;
          Object.setPrototypeOf(f, b.prototype);
          a.g(f);
          return f;
        }
        b.prototype = xd.prototype;
        return b;
      })();
    }
    function y(a) {
      this.c = !1;
      this.a = a;
      this.h = new Map();
      this.f = function (a) {
        return a();
      };
      this.b = !1;
      this.g = [];
      this.i = new Ja(a, document);
    }
    function Gb() {
      var a = this;
      this.b = this.a = void 0;
      this.f = new Promise(function (b) {
        a.b = b;
        a.a && b(a.a);
      });
    }
    function Ja(a, b) {
      this.b = a;
      this.a = b;
      this.M = void 0;
      this.b.f(this.a);
      'loading' === this.a.readyState &&
        ((this.M = new MutationObserver(this.f.bind(this))),
        this.M.observe(this.a, { childList: !0, subtree: !0 }));
    }
    function B() {
      this.o = new Map();
      this.m = new Map();
      this.j = [];
      this.h = !1;
    }
    function l(a, b, c) {
      if (a !== Hb) throw new TypeError('Illegal constructor');
      a = document.createDocumentFragment();
      a.__proto__ = l.prototype;
      a.F(b, c);
      return a;
    }
    function ka(a) {
      if (!a.__shady || void 0 === a.__shady.firstChild) {
        a.__shady = a.__shady || {};
        a.__shady.firstChild = Ka(a);
        a.__shady.lastChild = La(a);
        Ib(a);
        for (
          var b = (a.__shady.childNodes = S(a)), c = 0, d;
          c < b.length && (d = b[c]);
          c++
        )
          (d.__shady = d.__shady || {}),
            (d.__shady.parentNode = a),
            (d.__shady.nextSibling = b[c + 1] || null),
            (d.__shady.previousSibling = b[c - 1] || null),
            Jb(d);
      }
    }
    function yd(a) {
      var b = a && a.M;
      b && (b.X.delete(a.Ra), b.X.size || (a.Sa.__shady.T = null));
    }
    function zd(a, b) {
      a.__shady = a.__shady || {};
      a.__shady.T || (a.__shady.T = new la());
      a.__shady.T.X.add(b);
      var c = a.__shady.T;
      return {
        Ra: b,
        M: c,
        Sa: a,
        takeRecords: function () {
          return c.takeRecords();
        },
      };
    }
    function la() {
      this.a = !1;
      this.addedNodes = [];
      this.removedNodes = [];
      this.X = new Set();
    }
    function T(a) {
      return a.__shady && void 0 !== a.__shady.firstChild;
    }
    function G(a) {
      return 'ShadyRoot' === a.Ma;
    }
    function Z(a) {
      a = a.getRootNode();
      if (G(a)) return a;
    }
    function Ma(a, b) {
      if (a && b)
        for (
          var c = Object.getOwnPropertyNames(b), d = 0, e;
          d < c.length && (e = c[d]);
          d++
        ) {
          var f = Object.getOwnPropertyDescriptor(b, e);
          f && Object.defineProperty(a, e, f);
        }
    }
    function Na(a, b) {
      for (var c = [], d = 1; d < arguments.length; ++d)
        c[d - 1] = arguments[d];
      for (d = 0; d < c.length; d++) Ma(a, c[d]);
      return a;
    }
    function Ad(a, b) {
      for (var c in b) a[c] = b[c];
    }
    function Kb(a) {
      Oa.push(a);
      Pa.textContent = Lb++;
    }
    function Mb(a, b) {
      for (; b; ) {
        if (b == a) return !0;
        b = b.parentNode;
      }
      return !1;
    }
    function Nb(a) {
      Qa || ((Qa = !0), Kb(ma));
      aa.push(a);
    }
    function ma() {
      Qa = !1;
      for (var a = !!aa.length; aa.length; ) aa.shift()();
      return a;
    }
    function Bd(a, b) {
      var c = b.getRootNode();
      return a
        .map(function (a) {
          var b = c === a.target.getRootNode();
          if (b && a.addedNodes) {
            if (
              ((b = Array.from(a.addedNodes).filter(function (a) {
                return c === a.getRootNode();
              })),
              b.length)
            )
              return (
                (a = Object.create(a)),
                Object.defineProperty(a, 'addedNodes', {
                  value: b,
                  configurable: !0,
                }),
                a
              );
          } else if (b) return a;
        })
        .filter(function (a) {
          return a;
        });
    }
    function Ob(a) {
      switch (a) {
        case '&':
          return '&amp;';
        case '<':
          return '&lt;';
        case '>':
          return '&gt;';
        case '"':
          return '&quot;';
        case '\u00a0':
          return '&nbsp;';
      }
    }
    function Pb(a) {
      for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0;
      return b;
    }
    function Ra(a, b) {
      'template' === a.localName && (a = a.content);
      for (
        var c = '', d = b ? b(a) : a.childNodes, e = 0, f = d.length, k;
        e < f && (k = d[e]);
        e++
      ) {
        a: {
          var h = k;
          var w = a;
          var g = b;
          switch (h.nodeType) {
            case Node.ELEMENT_NODE:
              for (
                var m = h.localName, l = '<' + m, q = h.attributes, n = 0;
                (w = q[n]);
                n++
              )
                l += ' ' + w.name + '="' + w.value.replace(Cd, Ob) + '"';
              l += '>';
              h = Dd[m] ? l : l + Ra(h, g) + '</' + m + '>';
              break a;
            case Node.TEXT_NODE:
              h = h.data;
              h = w && Ed[w.localName] ? h : h.replace(Fd, Ob);
              break a;
            case Node.COMMENT_NODE:
              h = '\x3c!--' + h.data + '--\x3e';
              break a;
            default:
              throw (window.console.error(h), Error('not implemented'));
          }
        }
        c += h;
      }
      return c;
    }
    function U(a) {
      C.currentNode = a;
      return C.parentNode();
    }
    function Ka(a) {
      C.currentNode = a;
      return C.firstChild();
    }
    function La(a) {
      C.currentNode = a;
      return C.lastChild();
    }
    function Qb(a) {
      C.currentNode = a;
      return C.previousSibling();
    }
    function Rb(a) {
      C.currentNode = a;
      return C.nextSibling();
    }
    function S(a) {
      var b = [];
      C.currentNode = a;
      for (a = C.firstChild(); a; ) b.push(a), (a = C.nextSibling());
      return b;
    }
    function Sb(a) {
      D.currentNode = a;
      return D.parentNode();
    }
    function Tb(a) {
      D.currentNode = a;
      return D.firstChild();
    }
    function Ub(a) {
      D.currentNode = a;
      return D.lastChild();
    }
    function Vb(a) {
      D.currentNode = a;
      return D.previousSibling();
    }
    function Wb(a) {
      D.currentNode = a;
      return D.nextSibling();
    }
    function Xb(a) {
      var b = [];
      D.currentNode = a;
      for (a = D.firstChild(); a; ) b.push(a), (a = D.nextSibling());
      return b;
    }
    function Yb(a) {
      return Ra(a, function (a) {
        return S(a);
      });
    }
    function Zb(a) {
      switch (a.nodeType) {
        case Node.ELEMENT_NODE:
        case Node.DOCUMENT_FRAGMENT_NODE:
          a = document.createTreeWalker(a, NodeFilter.SHOW_TEXT, null, !1);
          for (var b = '', c; (c = a.nextNode()); ) b += c.nodeValue;
          return b;
        default:
          return a.nodeValue;
      }
    }
    function K(a, b, c) {
      for (var d in b) {
        var e = Object.getOwnPropertyDescriptor(a, d);
        (e && e.configurable) || (!e && c)
          ? Object.defineProperty(a, d, b[d])
          : c && console.warn('Could not define', d, 'on', a);
      }
    }
    function P(a) {
      K(a, $b);
      K(a, Sa);
      K(a, Ta);
    }
    function ac(a, b, c) {
      Jb(a);
      c = c || null;
      a.__shady = a.__shady || {};
      b.__shady = b.__shady || {};
      c && (c.__shady = c.__shady || {});
      a.__shady.previousSibling = c ? c.__shady.previousSibling : b.lastChild;
      var d = a.__shady.previousSibling;
      d && d.__shady && (d.__shady.nextSibling = a);
      (d = a.__shady.nextSibling = c) &&
        d.__shady &&
        (d.__shady.previousSibling = a);
      a.__shady.parentNode = b;
      c
        ? c === b.__shady.firstChild && (b.__shady.firstChild = a)
        : ((b.__shady.lastChild = a),
          b.__shady.firstChild || (b.__shady.firstChild = a));
      b.__shady.childNodes = null;
    }
    function Ua(a, b, c) {
      if (b === a)
        throw Error(
          "Failed to execute 'appendChild' on 'Node': The new child element contains the parent."
        );
      if (c) {
        var d = c.__shady && c.__shady.parentNode;
        if ((void 0 !== d && d !== a) || (void 0 === d && U(c) !== a))
          throw Error(
            "Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node."
          );
      }
      if (c === b) return b;
      b.parentNode && Va(b.parentNode, b);
      d = Z(a);
      var e;
      if ((e = d))
        a: {
          if (!b.__noInsertionPoint) {
            var f;
            'slot' === b.localName
              ? (f = [b])
              : b.querySelectorAll && (f = b.querySelectorAll('slot'));
            if (f && f.length) {
              e = f;
              break a;
            }
          }
          e = void 0;
        }
      (f = e) && d.Qa(f);
      d && ('slot' === a.localName || f) && d.L();
      if (T(a)) {
        d = c;
        Ib(a);
        a.__shady = a.__shady || {};
        void 0 !== a.__shady.firstChild && (a.__shady.childNodes = null);
        if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
          f = b.childNodes;
          for (e = 0; e < f.length; e++) ac(f[e], a, d);
          b.__shady = b.__shady || {};
          d = void 0 !== b.__shady.firstChild ? null : void 0;
          b.__shady.firstChild = b.__shady.lastChild = d;
          b.__shady.childNodes = d;
        } else ac(b, a, d);
        if (Wa(a)) {
          a.__shady.root.L();
          var k = !0;
        } else a.__shady.root && (k = !0);
      }
      k ||
        ((k = G(a) ? a.host : a),
        c ? ((c = bc(c)), Xa.call(k, b, c)) : cc.call(k, b));
      dc(a, b);
      return b;
    }
    function Va(a, b) {
      if (b.parentNode !== a)
        throw Error('The node to be removed is not a child of this node: ' + b);
      var c = Z(b);
      if (T(a)) {
        b.__shady = b.__shady || {};
        a.__shady = a.__shady || {};
        b === a.__shady.firstChild &&
          (a.__shady.firstChild = b.__shady.nextSibling);
        b === a.__shady.lastChild &&
          (a.__shady.lastChild = b.__shady.previousSibling);
        var d = b.__shady.previousSibling;
        var e = b.__shady.nextSibling;
        d && ((d.__shady = d.__shady || {}), (d.__shady.nextSibling = e));
        e && ((e.__shady = e.__shady || {}), (e.__shady.previousSibling = d));
        b.__shady.parentNode =
          b.__shady.previousSibling =
          b.__shady.nextSibling =
            void 0;
        void 0 !== a.__shady.childNodes && (a.__shady.childNodes = null);
        if (Wa(a)) {
          a.__shady.root.L();
          var f = !0;
        }
      }
      ec(b);
      c &&
        ((e = a && 'slot' === a.localName) && (f = !0),
        ((d = c.Ta(b)) || e) && c.L());
      f ||
        ((f = G(a) ? a.host : a),
        ((!a.__shady.root && 'slot' !== b.localName) || f === U(b)) &&
          ba.call(f, b));
      dc(a, null, b);
      return b;
    }
    function ec(a) {
      if (a.__shady && void 0 !== a.__shady.ma)
        for (
          var b = a.childNodes, c = 0, d = b.length, e;
          c < d && (e = b[c]);
          c++
        )
          ec(e);
      a.__shady && (a.__shady.ma = void 0);
    }
    function bc(a) {
      var b = a;
      a &&
        'slot' === a.localName &&
        (b =
          (b = a.__shady && a.__shady.R) && b.length
            ? b[0]
            : bc(a.nextSibling));
      return b;
    }
    function Wa(a) {
      return (a = a && a.__shady && a.__shady.root) && a.ta();
    }
    function fc(a, b) {
      'slot' === b
        ? ((a = a.parentNode), Wa(a) && a.__shady.root.L())
        : 'slot' === a.localName &&
          'name' === b &&
          (b = Z(a)) &&
          (b.Va(a), b.L());
    }
    function dc(a, b, c) {
      if ((a = a.__shady && a.__shady.T))
        b && a.addedNodes.push(b), c && a.removedNodes.push(c), a.hb();
    }
    function gc(a) {
      if (a && a.nodeType) {
        a.__shady = a.__shady || {};
        var b = a.__shady.ma;
        void 0 === b &&
          (G(a) ? (b = a) : (b = (b = a.parentNode) ? gc(b) : a),
          ca.call(document.documentElement, a) && (a.__shady.ma = b));
        return b;
      }
    }
    function na(a, b, c) {
      var d = [];
      hc(a.childNodes, b, c, d);
      return d;
    }
    function hc(a, b, c, d) {
      for (var e = 0, f = a.length, k; e < f && (k = a[e]); e++) {
        var h;
        if ((h = k.nodeType === Node.ELEMENT_NODE)) {
          h = k;
          var w = b,
            g = c,
            m = d,
            l = w(h);
          l && m.push(h);
          g && g(l) ? (h = l) : (hc(h.childNodes, w, g, m), (h = void 0));
        }
        if (h) break;
      }
    }
    function ic(a) {
      a = a.getRootNode();
      G(a) && a.va();
    }
    function jc(a, b, c) {
      oa || (oa = window.ShadyCSS && window.ShadyCSS.ScopingShim);
      oa && 'class' === b
        ? oa.setElementClass(a, c)
        : (kc.call(a, b, c), fc(a, b));
    }
    function lc(a, b) {
      if (a.ownerDocument !== document) return Ya.call(document, a, b);
      var c = Ya.call(document, a, !1);
      if (b) {
        a = a.childNodes;
        b = 0;
        for (var d; b < a.length; b++) (d = lc(a[b], !0)), c.appendChild(d);
      }
      return c;
    }
    function Za(a, b) {
      var c = [],
        d = a;
      for (a = a === window ? window : a.getRootNode(); d; )
        c.push(d),
          (d = d.assignedSlot
            ? d.assignedSlot
            : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE &&
              d.host &&
              (b || d !== a)
            ? d.host
            : d.parentNode);
      c[c.length - 1] === document && c.push(window);
      return c;
    }
    function mc(a, b) {
      if (!G) return a;
      a = Za(a, !0);
      for (var c = 0, d, e, f, k; c < b.length; c++)
        if (
          ((d = b[c]),
          (f = d === window ? window : d.getRootNode()),
          f !== e && ((k = a.indexOf(f)), (e = f)),
          !G(f) || -1 < k)
        )
          return d;
    }
    function $a(a) {
      function b(b, d) {
        b = new a(b, d);
        b.ea = d && !!d.composed;
        return b;
      }
      Ad(b, a);
      b.prototype = a.prototype;
      return b;
    }
    function nc(a, b, c) {
      if ((c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c]))
        for (
          var d = 0, e;
          (e = c[d]) && a.target !== a.relatedTarget && (e.call(b, a), !a.Ka);
          d++
        );
    }
    function Gd(a) {
      var b = a.composedPath();
      Object.defineProperty(a, 'currentTarget', {
        get: function () {
          return d;
        },
        configurable: !0,
      });
      for (var c = b.length - 1; 0 <= c; c--) {
        var d = b[c];
        nc(a, d, 'capture');
        if (a.fa) return;
      }
      Object.defineProperty(a, 'eventPhase', {
        get: function () {
          return Event.AT_TARGET;
        },
      });
      var e;
      for (c = 0; c < b.length; c++) {
        d = b[c];
        var f = d.__shady && d.__shady.root;
        if (0 === c || (f && f === e))
          if ((nc(a, d, 'bubble'), d !== window && (e = d.getRootNode()), a.fa))
            break;
      }
    }
    function oc(a, b, c, d, e, f) {
      for (var k = 0; k < a.length; k++) {
        var h = a[k],
          w = h.type,
          g = h.capture,
          m = h.once,
          l = h.passive;
        if (b === h.node && c === w && d === g && e === m && f === l) return k;
      }
      return -1;
    }
    function pc(a, b, c) {
      if (b) {
        if ('object' === typeof c) {
          var d = !!c.capture;
          var e = !!c.once;
          var f = !!c.passive;
        } else (d = !!c), (f = e = !1);
        var k = (c && c.ga) || this,
          h = b[da];
        if (h) {
          if (-1 < oc(h, k, a, d, e, f)) return;
        } else b[da] = [];
        h = function (d) {
          e && this.removeEventListener(a, b, c);
          d.__target || qc(d);
          if (k !== this) {
            var f = Object.getOwnPropertyDescriptor(d, 'currentTarget');
            Object.defineProperty(d, 'currentTarget', {
              get: function () {
                return k;
              },
              configurable: !0,
            });
          }
          if (d.composed || -1 < d.composedPath().indexOf(k))
            if (d.target === d.relatedTarget)
              d.eventPhase === Event.BUBBLING_PHASE &&
                d.stopImmediatePropagation();
            else if (
              d.eventPhase === Event.CAPTURING_PHASE ||
              d.bubbles ||
              d.target === k
            ) {
              var h =
                'object' === typeof b && b.handleEvent
                  ? b.handleEvent(d)
                  : b.call(k, d);
              k !== this &&
                (f
                  ? (Object.defineProperty(d, 'currentTarget', f), (f = null))
                  : delete d.currentTarget);
              return h;
            }
        };
        b[da].push({
          node: this,
          type: a,
          capture: d,
          once: e,
          passive: f,
          lb: h,
        });
        ab[a]
          ? ((this.__handlers = this.__handlers || {}),
            (this.__handlers[a] = this.__handlers[a] || {
              capture: [],
              bubble: [],
            }),
            this.__handlers[a][d ? 'capture' : 'bubble'].push(h))
          : (this instanceof Window ? rc : sc).call(this, a, h, c);
      }
    }
    function tc(a, b, c) {
      if (b) {
        if ('object' === typeof c) {
          var d = !!c.capture;
          var e = !!c.once;
          var f = !!c.passive;
        } else (d = !!c), (f = e = !1);
        var k = (c && c.ga) || this,
          h = void 0;
        var g = null;
        try {
          g = b[da];
        } catch (r) {}
        g &&
          ((e = oc(g, k, a, d, e, f)),
          -1 < e && ((h = g.splice(e, 1)[0].lb), g.length || (b[da] = void 0)));
        (this instanceof Window ? uc : vc).call(this, a, h || b, c);
        h &&
          ab[a] &&
          this.__handlers &&
          this.__handlers[a] &&
          ((a = this.__handlers[a][d ? 'capture' : 'bubble']),
          (h = a.indexOf(h)),
          -1 < h && a.splice(h, 1));
      }
    }
    function Hd() {
      for (var a in ab)
        window.addEventListener(
          a,
          function (a) {
            a.__target || (qc(a), Gd(a));
          },
          !0
        );
    }
    function qc(a) {
      a.__target = a.target;
      a.ra = a.relatedTarget;
      if (E.S) {
        var b = wc,
          c = Object.getPrototypeOf(a);
        if (!c.hasOwnProperty('__patchProto')) {
          var d = Object.create(c);
          d.nb = c;
          Ma(d, b);
          c.__patchProto = d;
        }
        a.__proto__ = c.__patchProto;
      } else Ma(a, wc);
    }
    function ea(a, b) {
      return { index: a, U: [], W: b };
    }
    function Id(a, b, c, d) {
      var e = 0,
        f = 0,
        k = 0,
        h = 0,
        g = Math.min(b - e, d - f);
      if (0 == e && 0 == f)
        a: {
          for (k = 0; k < g; k++) if (a[k] !== c[k]) break a;
          k = g;
        }
      if (b == a.length && d == c.length) {
        h = a.length;
        for (var r = c.length, m = 0; m < g - k && Jd(a[--h], c[--r]); ) m++;
        h = m;
      }
      e += k;
      f += k;
      b -= h;
      d -= h;
      if (0 == b - e && 0 == d - f) return [];
      if (e == b) {
        for (b = ea(e, 0); f < d; ) b.U.push(c[f++]);
        return [b];
      }
      if (f == d) return [ea(e, b - e)];
      g = e;
      k = f;
      d = d - k + 1;
      h = b - g + 1;
      b = Array(d);
      for (r = 0; r < d; r++) (b[r] = Array(h)), (b[r][0] = r);
      for (r = 0; r < h; r++) b[0][r] = r;
      for (r = 1; r < d; r++)
        for (m = 1; m < h; m++)
          if (a[g + m - 1] === c[k + r - 1]) b[r][m] = b[r - 1][m - 1];
          else {
            var l = b[r - 1][m] + 1,
              n = b[r][m - 1] + 1;
            b[r][m] = l < n ? l : n;
          }
      g = b.length - 1;
      k = b[0].length - 1;
      d = b[g][k];
      for (a = []; 0 < g || 0 < k; )
        0 == g
          ? (a.push(2), k--)
          : 0 == k
          ? (a.push(3), g--)
          : ((h = b[g - 1][k - 1]),
            (r = b[g - 1][k]),
            (m = b[g][k - 1]),
            (l = r < m ? (r < h ? r : h) : m < h ? m : h),
            l == h
              ? (h == d ? a.push(0) : (a.push(1), (d = h)), g--, k--)
              : l == r
              ? (a.push(3), g--, (d = r))
              : (a.push(2), k--, (d = m)));
      a.reverse();
      b = void 0;
      g = [];
      for (k = 0; k < a.length; k++)
        switch (a[k]) {
          case 0:
            b && (g.push(b), (b = void 0));
            e++;
            f++;
            break;
          case 1:
            b || (b = ea(e, 0));
            b.W++;
            e++;
            b.U.push(c[f]);
            f++;
            break;
          case 2:
            b || (b = ea(e, 0));
            b.W++;
            e++;
            break;
          case 3:
            b || (b = ea(e, 0)), b.U.push(c[f]), f++;
        }
      b && g.push(b);
      return g;
    }
    function Jd(a, b) {
      return a === b;
    }
    function xc(a) {
      var b = [];
      do b.unshift(a);
      while ((a = a.parentNode));
      return b;
    }
    function yc(a) {
      ic(a);
      return (a.__shady && a.__shady.assignedSlot) || null;
    }
    function L(a, b) {
      for (var c = Object.getOwnPropertyNames(b), d = 0; d < c.length; d++) {
        var e = c[d],
          f = Object.getOwnPropertyDescriptor(b, e);
        f.value ? (a[e] = f.value) : Object.defineProperty(a, e, f);
      }
    }
    function Kd() {
      var a =
        (window.customElements && window.customElements.nativeHTMLElement) ||
        HTMLElement;
      L(window.Node.prototype, Ld);
      L(window.Window.prototype, Md);
      L(window.Text.prototype, Nd);
      L(window.DocumentFragment.prototype, bb);
      L(window.Element.prototype, zc);
      L(window.Document.prototype, Ac);
      window.HTMLSlotElement && L(window.HTMLSlotElement.prototype, Bc);
      L(a.prototype, Od);
      E.S &&
        (P(window.Node.prototype),
        P(window.Text.prototype),
        P(window.DocumentFragment.prototype),
        P(window.Element.prototype),
        P(a.prototype),
        P(window.Document.prototype),
        window.HTMLSlotElement && P(window.HTMLSlotElement.prototype));
    }
    function Cc(a) {
      var b = Pd.has(a);
      a = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);
      return !b && a;
    }
    function t(a) {
      var b = a.isConnected;
      if (void 0 !== b) return b;
      for (; a && !(a.__CE_isImportDocument || a instanceof Document); )
        a =
          a.parentNode ||
          (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);
      return !(!a || !(a.__CE_isImportDocument || a instanceof Document));
    }
    function cb(a, b) {
      for (; b && b !== a && !b.nextSibling; ) b = b.parentNode;
      return b && b !== a ? b.nextSibling : null;
    }
    function O(a, b, c) {
      c = c ? c : new Set();
      for (var d = a; d; ) {
        if (d.nodeType === Node.ELEMENT_NODE) {
          var e = d;
          b(e);
          var f = e.localName;
          if ('link' === f && 'import' === e.getAttribute('rel')) {
            d = e.import;
            if (d instanceof Node && !c.has(d))
              for (c.add(d), d = d.firstChild; d; d = d.nextSibling) O(d, b, c);
            d = cb(a, e);
            continue;
          } else if ('template' === f) {
            d = cb(a, e);
            continue;
          }
          if ((e = e.__CE_shadowRoot))
            for (e = e.firstChild; e; e = e.nextSibling) O(e, b, c);
        }
        d = d.firstChild ? d.firstChild : cb(a, d);
      }
    }
    function x(a, b, c) {
      a[b] = c;
    }
    function db(a) {
      a = a.replace(F.Ya, '').replace(F.port, '');
      var b = Dc,
        c = a,
        d = new Ba();
      d.start = 0;
      d.end = c.length;
      for (var e = d, f = 0, k = c.length; f < k; f++)
        if ('{' === c[f]) {
          e.rules || (e.rules = []);
          var h = e,
            g = h.rules[h.rules.length - 1] || null;
          e = new Ba();
          e.start = f + 1;
          e.parent = h;
          e.previous = g;
          h.rules.push(e);
        } else '}' === c[f] && ((e.end = f + 1), (e = e.parent || d));
      return b(d, a);
    }
    function Dc(a, b) {
      var c = b.substring(a.start, a.end - 1);
      a.parsedCssText = a.cssText = c.trim();
      a.parent &&
        ((c = b.substring(
          a.previous ? a.previous.end : a.parent.start,
          a.start - 1
        )),
        (c = Qd(c)),
        (c = c.replace(F.Ba, ' ')),
        (c = c.substring(c.lastIndexOf(';') + 1)),
        (c = a.parsedSelector = a.selector = c.trim()),
        (a.atRule = 0 === c.indexOf('@')),
        a.atRule
          ? 0 === c.indexOf('@media')
            ? (a.type = I.MEDIA_RULE)
            : c.match(F.cb) &&
              ((a.type = I.da),
              (a.keyframesName = a.selector.split(F.Ba).pop()))
          : (a.type = 0 === c.indexOf('--') ? I.na : I.STYLE_RULE));
      if ((c = a.rules))
        for (var d = 0, e = c.length, f; d < e && (f = c[d]); d++) Dc(f, b);
      return a;
    }
    function Qd(a) {
      return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (a, c) {
        a = c;
        for (c = 6 - a.length; c--; ) a = '0' + a;
        return '\\' + a;
      });
    }
    function Ec(a, b, c) {
      c = void 0 === c ? '' : c;
      var d = '';
      if (a.cssText || a.rules) {
        var e = a.rules,
          f;
        if ((f = e))
          (f = e[0]),
            (f = !(f && f.selector && 0 === f.selector.indexOf('--')));
        if (f) {
          f = 0;
          for (var k = e.length, h; f < k && (h = e[f]); f++) d = Ec(h, b, d);
        } else
          b
            ? (b = a.cssText)
            : ((b = a.cssText),
              (b = b.replace(F.wa, '').replace(F.Aa, '')),
              (b = b.replace(F.eb, '').replace(F.jb, ''))),
            (d = b.trim()) && (d = '  ' + d + '\n');
      }
      d &&
        (a.selector && (c += a.selector + ' {\n'),
        (c += d),
        a.selector && (c += '}\n\n'));
      return c;
    }
    function Fc(a) {
      A =
        a && a.shimcssproperties
          ? !1
          : z ||
            !(
              navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) ||
              !window.CSS ||
              !CSS.supports ||
              !CSS.supports('box-shadow', '0 0 0 var(--foo)')
            );
    }
    function V(a, b) {
      if (!a) return '';
      'string' === typeof a && (a = db(a));
      b && W(a, b);
      return Ec(a, A);
    }
    function pa(a) {
      !a.__cssRules && a.textContent && (a.__cssRules = db(a.textContent));
      return a.__cssRules || null;
    }
    function Gc(a) {
      return !!a.parent && a.parent.type === I.da;
    }
    function W(a, b, c, d) {
      if (a) {
        var e = !1,
          f = a.type;
        if (d && f === I.MEDIA_RULE) {
          var k = a.selector.match(Rd);
          k && (window.matchMedia(k[1]).matches || (e = !0));
        }
        f === I.STYLE_RULE
          ? b(a)
          : c && f === I.da
          ? c(a)
          : f === I.na && (e = !0);
        if ((a = a.rules) && !e) {
          e = 0;
          f = a.length;
          for (var h; e < f && (h = a[e]); e++) W(h, b, c, d);
        }
      }
    }
    function eb(a, b, c, d) {
      var e = document.createElement('style');
      b && e.setAttribute('scope', b);
      e.textContent = a;
      Hc(e, c, d);
      return e;
    }
    function Hc(a, b, c) {
      b = b || document.head;
      b.insertBefore(a, (c && c.nextSibling) || b.firstChild);
      Q
        ? a.compareDocumentPosition(Q) === Node.DOCUMENT_POSITION_PRECEDING &&
          (Q = a)
        : (Q = a);
    }
    function Ic(a, b) {
      var c = a.indexOf('var(');
      if (-1 === c) return b(a, '', '', '');
      a: {
        var d = 0;
        var e = c + 3;
        for (var f = a.length; e < f; e++)
          if ('(' === a[e]) d++;
          else if (')' === a[e] && 0 === --d) break a;
        e = -1;
      }
      d = a.substring(c + 4, e);
      c = a.substring(0, c);
      a = Ic(a.substring(e + 1), b);
      e = d.indexOf(',');
      return -1 === e
        ? b(c, d.trim(), '', a)
        : b(c, d.substring(0, e).trim(), d.substring(e + 1).trim(), a);
    }
    function qa(a, b) {
      z
        ? a.setAttribute('class', b)
        : window.ShadyDOM.nativeMethods.setAttribute.call(a, 'class', b);
    }
    function R(a) {
      var b = a.localName,
        c = '';
      b
        ? -1 < b.indexOf('-') ||
          ((c = b), (b = (a.getAttribute && a.getAttribute('is')) || ''))
        : ((b = a.is), (c = a.extends));
      return { is: b, V: c };
    }
    function Jc(a) {
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (c.target !== document.documentElement && c.target !== document.head)
          for (var d = 0; d < c.addedNodes.length; d++) {
            var e = c.addedNodes[d];
            if (e.nodeType === Node.ELEMENT_NODE) {
              var f = e.getRootNode();
              var k = e;
              var h = [];
              k.classList
                ? (h = Array.from(k.classList))
                : k instanceof window.SVGElement &&
                  k.hasAttribute('class') &&
                  (h = k.getAttribute('class').split(/\s+/));
              k = h;
              h = k.indexOf(p.a);
              if ((k = -1 < h ? k[h + 1] : '') && f === e.ownerDocument)
                p.b(e, k, !0);
              else if (
                f.nodeType === Node.DOCUMENT_FRAGMENT_NODE &&
                (f = f.host)
              )
                if (((f = R(f).is), k === f))
                  for (
                    e = window.ShadyDOM.nativeMethods.querySelectorAll.call(
                      e,
                      ':not(.' + p.a + ')'
                    ),
                      f = 0;
                    f < e.length;
                    f++
                  )
                    p.h(e[f], k);
                else k && p.b(e, k, !0), p.b(e, f);
            }
          }
      }
    }
    function Sd(a) {
      if ((a = ra[a]))
        (a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0),
          (a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0),
          (a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1);
    }
    function Kc(a) {
      return a._applyShimCurrentVersion === a._applyShimNextVersion;
    }
    function Td(a) {
      a._applyShimValidatingVersion = a._applyShimNextVersion;
      a.b ||
        ((a.b = !0),
        Ud.then(function () {
          a._applyShimCurrentVersion = a._applyShimNextVersion;
          a.b = !1;
        }));
    }
    function ub(a) {
      requestAnimationFrame(function () {
        Lc
          ? Lc(a)
          : (fb ||
              ((fb = new Promise(function (a) {
                gb = a;
              })),
              'complete' === document.readyState
                ? gb()
                : document.addEventListener('readystatechange', function () {
                    'complete' === document.readyState && gb();
                  })),
            fb.then(function () {
              a && a();
            }));
      });
    }
    (function (a) {
      function b(a, b) {
        if ('function' === typeof window.CustomEvent)
          return new CustomEvent(a, b);
        var c = document.createEvent('CustomEvent');
        c.initCustomEvent(a, !!b.bubbles, !!b.cancelable, b.detail);
        return c;
      }
      function c(a) {
        if (m) return a.ownerDocument !== document ? a.ownerDocument : null;
        var b = a.__importDoc;
        if (!b && a.parentNode) {
          b = a.parentNode;
          if ('function' === typeof b.closest)
            b = b.closest('link[rel=import]');
          else for (; !h(b) && (b = b.parentNode); );
          a.__importDoc = b;
        }
        return b;
      }
      function d(a) {
        var b = document.querySelectorAll(
            'link[rel=import]:not([import-dependency])'
          ),
          c = b.length;
        c
          ? l(b, function (b) {
              return k(b, function () {
                0 === --c && a();
              });
            })
          : a();
      }
      function e(a) {
        function b() {
          'loading' !== document.readyState &&
            document.body &&
            (document.removeEventListener('readystatechange', b), a());
        }
        document.addEventListener('readystatechange', b);
        b();
      }
      function f(a) {
        e(function () {
          return d(function () {
            return a && a();
          });
        });
      }
      function k(a, b) {
        if (a.__loaded) b && b();
        else if (
          ('script' === a.localName && !a.src) ||
          ('style' === a.localName && !a.firstChild)
        )
          (a.__loaded = !0), b && b();
        else {
          var c = function (d) {
            a.removeEventListener(d.type, c);
            a.__loaded = !0;
            b && b();
          };
          a.addEventListener('load', c);
          (z && 'style' === a.localName) || a.addEventListener('error', c);
        }
      }
      function h(a) {
        return (
          a.nodeType === Node.ELEMENT_NODE &&
          'link' === a.localName &&
          'import' === a.rel
        );
      }
      function g() {
        var a = this;
        this.a = {};
        this.b = 0;
        this.f = new MutationObserver(function (b) {
          return a.l(b);
        });
        this.f.observe(document.head, { childList: !0, subtree: !0 });
        this.c(document);
      }
      function l(a, b, c) {
        var d = a ? a.length : 0,
          e = c ? -1 : 1;
        for (c = c ? d - 1 : 0; c < d && 0 <= c; c += e) b(a[c], c);
      }
      var m = 'import' in document.createElement('link'),
        n = null;
      !1 === 'currentScript' in document &&
        Object.defineProperty(document, 'currentScript', {
          get: function () {
            return (
              n ||
              ('complete' !== document.readyState
                ? document.scripts[document.scripts.length - 1]
                : null)
            );
          },
          configurable: !0,
        });
      var q = /(url\()([^)]*)(\))/g,
        t = /(@import[\s]+(?!url\())([^;]*)(;)/g,
        u = /(<link[^>]*)(rel=['|"]?stylesheet['|"]?[^>]*>)/g,
        p = {
          Za: function (a, b) {
            a.href && a.setAttribute('href', p.$(a.getAttribute('href'), b));
            a.src && a.setAttribute('src', p.$(a.getAttribute('src'), b));
            if ('style' === a.localName) {
              var c = p.Ca(a.textContent, b, q);
              a.textContent = p.Ca(c, b, t);
            }
          },
          Ca: function (a, b, c) {
            return a.replace(c, function (a, c, d, e) {
              a = d.replace(/["']/g, '');
              b && (a = p.$(a, b));
              return c + "'" + a + "'" + e;
            });
          },
          $: function (a, b) {
            if (void 0 === p.ha) {
              p.ha = !1;
              try {
                var c = new URL('b', 'http://a');
                c.pathname = 'c%20d';
                p.ha = 'http://a/c%20d' === c.href;
              } catch (se) {}
            }
            if (p.ha) return new URL(a, b).href;
            c = p.Pa;
            c ||
              ((c = document.implementation.createHTMLDocument('temp')),
              (p.Pa = c),
              (c.pa = c.createElement('base')),
              c.head.appendChild(c.pa),
              (c.oa = c.createElement('a')));
            c.pa.href = b;
            c.oa.href = a;
            return c.oa.href || a;
          },
        },
        v = {
          async: !0,
          load: function (a, b, c) {
            if (a)
              if (a.match(/^data:/)) {
                a = a.split(',');
                var d = a[1];
                d =
                  -1 < a[0].indexOf(';base64')
                    ? atob(d)
                    : decodeURIComponent(d);
                b(d);
              } else {
                var e = new XMLHttpRequest();
                e.open('GET', a, v.async);
                e.onload = function () {
                  var a = e.responseURL || e.getResponseHeader('Location');
                  a &&
                    0 === a.indexOf('/') &&
                    (a =
                      (location.origin ||
                        location.protocol + '//' + location.host) + a);
                  var d = e.response || e.responseText;
                  304 === e.status ||
                  0 === e.status ||
                  (200 <= e.status && 300 > e.status)
                    ? b(d, a)
                    : c(d);
                };
                e.send();
              }
            else c('error: href must be specified');
          },
        },
        z =
          /Trident/.test(navigator.userAgent) ||
          /Edge\/\d./i.test(navigator.userAgent);
      g.prototype.c = function (a) {
        var b = this;
        a = a.querySelectorAll('link[rel=import]');
        l(a, function (a) {
          return b.h(a);
        });
      };
      g.prototype.h = function (a) {
        var b = this,
          c = a.href;
        if (void 0 !== this.a[c]) {
          var d = this.a[c];
          d && d.__loaded && ((a.import = d), this.g(a));
        } else
          this.b++,
            (this.a[c] = 'pending'),
            v.load(
              c,
              function (a, d) {
                a = b.m(a, d || c);
                b.a[c] = a;
                b.b--;
                b.c(a);
                b.i();
              },
              function () {
                b.a[c] = null;
                b.b--;
                b.i();
              }
            );
      };
      g.prototype.m = function (a, b) {
        if (!a) return document.createDocumentFragment();
        z &&
          (a = a.replace(u, function (a, b, c) {
            return -1 === a.indexOf('type=')
              ? b + ' type=import-disable ' + c
              : a;
          }));
        var c = document.createElement('template');
        c.innerHTML = a;
        if (c.content) a = c.content;
        else
          for (a = document.createDocumentFragment(); c.firstChild; )
            a.appendChild(c.firstChild);
        if ((c = a.querySelector('base')))
          (b = p.$(c.getAttribute('href'), b)), c.removeAttribute('href');
        c = a.querySelectorAll(
          'link[rel=import], link[rel=stylesheet][href][type=import-disable],\n    style:not([type]), link[rel=stylesheet][href]:not([type]),\n    script:not([type]), script[type="application/javascript"],\n    script[type="text/javascript"]'
        );
        var d = 0;
        l(c, function (a) {
          k(a);
          p.Za(a, b);
          a.setAttribute('import-dependency', '');
          'script' === a.localName &&
            !a.src &&
            a.textContent &&
            (a.setAttribute(
              'src',
              'data:text/javascript;charset=utf-8,' +
                encodeURIComponent(
                  a.textContent +
                    ('\n//# sourceURL=' + b + (d ? '-' + d : '') + '.js\n')
                )
            ),
            (a.textContent = ''),
            d++);
        });
        return a;
      };
      g.prototype.i = function () {
        var a = this;
        if (!this.b) {
          this.f.disconnect();
          this.flatten(document);
          var b = !1,
            c = !1,
            d = function () {
              c &&
                b &&
                (a.c(document),
                a.b ||
                  (a.f.observe(document.head, { childList: !0, subtree: !0 }),
                  a.j()));
            };
          this.s(function () {
            c = !0;
            d();
          });
          this.o(function () {
            b = !0;
            d();
          });
        }
      };
      g.prototype.flatten = function (a) {
        var b = this;
        a = a.querySelectorAll('link[rel=import]');
        l(a, function (a) {
          var c = b.a[a.href];
          (a.import = c) &&
            c.nodeType === Node.DOCUMENT_FRAGMENT_NODE &&
            ((b.a[a.href] = a),
            (a.readyState = 'loading'),
            (a.import = a),
            b.flatten(c),
            a.appendChild(c));
        });
      };
      g.prototype.o = function (a) {
        function b(e) {
          if (e < d) {
            var f = c[e],
              g = document.createElement('script');
            f.removeAttribute('import-dependency');
            l(f.attributes, function (a) {
              return g.setAttribute(a.name, a.value);
            });
            n = g;
            f.parentNode.replaceChild(g, f);
            k(g, function () {
              n = null;
              b(e + 1);
            });
          } else a();
        }
        var c = document.querySelectorAll('script[import-dependency]'),
          d = c.length;
        b(0);
      };
      g.prototype.s = function (a) {
        var b = document.querySelectorAll(
            'style[import-dependency],\n    link[rel=stylesheet][import-dependency]'
          ),
          d = b.length;
        if (d) {
          var e =
            z &&
            !!document.querySelector(
              'link[rel=stylesheet][href][type=import-disable]'
            );
          l(b, function (b) {
            k(b, function () {
              b.removeAttribute('import-dependency');
              0 === --d && a();
            });
            if (e && b.parentNode !== document.head) {
              var f = document.createElement(b.localName);
              f.__appliedElement = b;
              f.setAttribute('type', 'import-placeholder');
              b.parentNode.insertBefore(f, b.nextSibling);
              for (f = c(b); f && c(f); ) f = c(f);
              f.parentNode !== document.head && (f = null);
              document.head.insertBefore(b, f);
              b.removeAttribute('type');
            }
          });
        } else a();
      };
      g.prototype.j = function () {
        var a = this,
          b = document.querySelectorAll('link[rel=import]');
        l(
          b,
          function (b) {
            return a.g(b);
          },
          !0
        );
      };
      g.prototype.g = function (a) {
        a.__loaded ||
          ((a.__loaded = !0),
          a.import && (a.import.readyState = 'complete'),
          a.dispatchEvent(
            b(a.import ? 'load' : 'error', {
              bubbles: !1,
              cancelable: !1,
              detail: void 0,
            })
          ));
      };
      g.prototype.l = function (a) {
        var b = this;
        l(a, function (a) {
          return l(a.addedNodes, function (a) {
            a && a.nodeType === Node.ELEMENT_NODE && (h(a) ? b.h(a) : b.c(a));
          });
        });
      };
      if (m) {
        var x = document.querySelectorAll('link[rel=import]');
        l(x, function (a) {
          (a.import && 'loading' === a.import.readyState) || (a.__loaded = !0);
        });
        x = function (a) {
          a = a.target;
          h(a) && (a.__loaded = !0);
        };
        document.addEventListener('load', x, !0);
        document.addEventListener('error', x, !0);
      } else {
        var y = Object.getOwnPropertyDescriptor(Node.prototype, 'baseURI');
        Object.defineProperty(
          (!y || y.configurable ? Node : Element).prototype,
          'baseURI',
          {
            get: function () {
              var a = h(this) ? this : c(this);
              return a
                ? a.href
                : y && y.get
                ? y.get.call(this)
                : (document.querySelector('base') || window.location).href;
            },
            configurable: !0,
            enumerable: !0,
          }
        );
        e(function () {
          return new g();
        });
      }
      f(function () {
        return document.dispatchEvent(
          b('HTMLImportsLoaded', {
            cancelable: !0,
            bubbles: !0,
            detail: void 0,
          })
        );
      });
      a.useNative = m;
      a.whenReady = f;
      a.importForElement = c;
    })((window.HTMLImports = window.HTMLImports || {}));
    var E = window.ShadyDOM || {};
    E.$a = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
    var hb = Object.getOwnPropertyDescriptor(Node.prototype, 'firstChild');
    E.S = !!(hb && hb.configurable && hb.get);
    E.za = E.force || !E.$a;
    var X = Element.prototype,
      Mc =
        X.matches ||
        X.matchesSelector ||
        X.mozMatchesSelector ||
        X.msMatchesSelector ||
        X.oMatchesSelector ||
        X.webkitMatchesSelector,
      Pa = document.createTextNode(''),
      Lb = 0,
      Oa = [];
    new MutationObserver(function () {
      for (; Oa.length; )
        try {
          Oa.shift()();
        } catch (a) {
          throw ((Pa.textContent = Lb++), a);
        }
    }).observe(Pa, { characterData: !0 });
    var Vd = !!document.contains,
      aa = [],
      Qa;
    ma.list = aa;
    la.prototype.hb = function () {
      var a = this;
      this.a ||
        ((this.a = !0),
        Kb(function () {
          a.b();
        }));
    };
    la.prototype.b = function () {
      if (this.a) {
        this.a = !1;
        var a = this.takeRecords();
        a.length &&
          this.X.forEach(function (b) {
            b(a);
          });
      }
    };
    la.prototype.takeRecords = function () {
      if (this.addedNodes.length || this.removedNodes.length) {
        var a = [
          { addedNodes: this.addedNodes, removedNodes: this.removedNodes },
        ];
        this.addedNodes = [];
        this.removedNodes = [];
        return a;
      }
      return [];
    };
    var cc = Element.prototype.appendChild,
      Xa = Element.prototype.insertBefore,
      ba = Element.prototype.removeChild,
      kc = Element.prototype.setAttribute,
      Nc = Element.prototype.removeAttribute,
      ib = Element.prototype.cloneNode,
      Ya = Document.prototype.importNode,
      sc = Element.prototype.addEventListener,
      vc = Element.prototype.removeEventListener,
      rc = Window.prototype.addEventListener,
      uc = Window.prototype.removeEventListener,
      jb = Element.prototype.dispatchEvent,
      ca = Node.prototype.contains || HTMLElement.prototype.contains,
      Wd = Object.freeze({
        appendChild: cc,
        insertBefore: Xa,
        removeChild: ba,
        setAttribute: kc,
        removeAttribute: Nc,
        cloneNode: ib,
        importNode: Ya,
        addEventListener: sc,
        removeEventListener: vc,
        rb: rc,
        sb: uc,
        dispatchEvent: jb,
        querySelector: Element.prototype.querySelector,
        querySelectorAll: Element.prototype.querySelectorAll,
        contains: ca,
      }),
      Cd = /[&\u00A0"]/g,
      Fd = /[&\u00A0<>]/g,
      Dd = Pb(
        'area base br col command embed hr img input keygen link meta param source track wbr'.split(
          ' '
        )
      ),
      Ed = Pb(
        'style script xmp iframe noembed noframes plaintext noscript'.split(' ')
      ),
      C = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
      D = document.createTreeWalker(
        document,
        NodeFilter.SHOW_ELEMENT,
        null,
        !1
      ),
      Xd = Object.freeze({
        parentNode: U,
        firstChild: Ka,
        lastChild: La,
        previousSibling: Qb,
        nextSibling: Rb,
        childNodes: S,
        parentElement: Sb,
        firstElementChild: Tb,
        lastElementChild: Ub,
        previousElementSibling: Vb,
        nextElementSibling: Wb,
        children: Xb,
        innerHTML: Yb,
        textContent: Zb,
      }),
      kb =
        Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML') ||
        Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'innerHTML'),
      sa = document.implementation
        .createHTMLDocument('inert')
        .createElement('div'),
      lb = Object.getOwnPropertyDescriptor(Document.prototype, 'activeElement'),
      $b = {
        parentElement: {
          get: function () {
            var a = this.__shady && this.__shady.parentNode;
            a && a.nodeType !== Node.ELEMENT_NODE && (a = null);
            return void 0 !== a ? a : Sb(this);
          },
          configurable: !0,
        },
        parentNode: {
          get: function () {
            var a = this.__shady && this.__shady.parentNode;
            return void 0 !== a ? a : U(this);
          },
          configurable: !0,
        },
        nextSibling: {
          get: function () {
            var a = this.__shady && this.__shady.nextSibling;
            return void 0 !== a ? a : Rb(this);
          },
          configurable: !0,
        },
        previousSibling: {
          get: function () {
            var a = this.__shady && this.__shady.previousSibling;
            return void 0 !== a ? a : Qb(this);
          },
          configurable: !0,
        },
        className: {
          get: function () {
            return this.getAttribute('class') || '';
          },
          set: function (a) {
            this.setAttribute('class', a);
          },
          configurable: !0,
        },
        nextElementSibling: {
          get: function () {
            if (this.__shady && void 0 !== this.__shady.nextSibling) {
              for (
                var a = this.nextSibling;
                a && a.nodeType !== Node.ELEMENT_NODE;

              )
                a = a.nextSibling;
              return a;
            }
            return Wb(this);
          },
          configurable: !0,
        },
        previousElementSibling: {
          get: function () {
            if (this.__shady && void 0 !== this.__shady.previousSibling) {
              for (
                var a = this.previousSibling;
                a && a.nodeType !== Node.ELEMENT_NODE;

              )
                a = a.previousSibling;
              return a;
            }
            return Vb(this);
          },
          configurable: !0,
        },
      },
      Sa = {
        childNodes: {
          get: function () {
            if (T(this)) {
              if (!this.__shady.childNodes) {
                this.__shady.childNodes = [];
                for (var a = this.firstChild; a; a = a.nextSibling)
                  this.__shady.childNodes.push(a);
              }
              var b = this.__shady.childNodes;
            } else b = S(this);
            b.item = function (a) {
              return b[a];
            };
            return b;
          },
          configurable: !0,
        },
        childElementCount: {
          get: function () {
            return this.children.length;
          },
          configurable: !0,
        },
        firstChild: {
          get: function () {
            var a = this.__shady && this.__shady.firstChild;
            return void 0 !== a ? a : Ka(this);
          },
          configurable: !0,
        },
        lastChild: {
          get: function () {
            var a = this.__shady && this.__shady.lastChild;
            return void 0 !== a ? a : La(this);
          },
          configurable: !0,
        },
        textContent: {
          get: function () {
            if (T(this)) {
              for (var a = [], b = 0, c = this.childNodes, d; (d = c[b]); b++)
                d.nodeType !== Node.COMMENT_NODE && a.push(d.textContent);
              return a.join('');
            }
            return Zb(this);
          },
          set: function (a) {
            switch (this.nodeType) {
              case Node.ELEMENT_NODE:
              case Node.DOCUMENT_FRAGMENT_NODE:
                for (; this.firstChild; ) this.removeChild(this.firstChild);
                (0 < a.length || this.nodeType === Node.ELEMENT_NODE) &&
                  this.appendChild(document.createTextNode(a));
                break;
              default:
                this.nodeValue = a;
            }
          },
          configurable: !0,
        },
        firstElementChild: {
          get: function () {
            if (this.__shady && void 0 !== this.__shady.firstChild) {
              for (
                var a = this.firstChild;
                a && a.nodeType !== Node.ELEMENT_NODE;

              )
                a = a.nextSibling;
              return a;
            }
            return Tb(this);
          },
          configurable: !0,
        },
        lastElementChild: {
          get: function () {
            if (this.__shady && void 0 !== this.__shady.lastChild) {
              for (
                var a = this.lastChild;
                a && a.nodeType !== Node.ELEMENT_NODE;

              )
                a = a.previousSibling;
              return a;
            }
            return Ub(this);
          },
          configurable: !0,
        },
        children: {
          get: function () {
            var a;
            T(this)
              ? (a = Array.prototype.filter.call(this.childNodes, function (a) {
                  return a.nodeType === Node.ELEMENT_NODE;
                }))
              : (a = Xb(this));
            a.item = function (b) {
              return a[b];
            };
            return a;
          },
          configurable: !0,
        },
        innerHTML: {
          get: function () {
            var a = 'template' === this.localName ? this.content : this;
            return T(this) ? Ra(a) : Yb(a);
          },
          set: function (a) {
            for (
              var b = 'template' === this.localName ? this.content : this;
              b.firstChild;

            )
              b.removeChild(b.firstChild);
            for (
              kb && kb.set ? kb.set.call(sa, a) : (sa.innerHTML = a);
              sa.firstChild;

            )
              b.appendChild(sa.firstChild);
          },
          configurable: !0,
        },
      },
      Oc = {
        shadowRoot: {
          get: function () {
            return (this.__shady && this.__shady.fb) || null;
          },
          configurable: !0,
        },
      },
      Ta = {
        activeElement: {
          get: function () {
            var a =
              lb && lb.get
                ? lb.get.call(document)
                : E.S
                ? void 0
                : document.activeElement;
            if (a && a.nodeType) {
              var b = !!G(this);
              if (
                this === document ||
                (b && this.host !== a && ca.call(this.host, a))
              ) {
                for (b = Z(a); b && b !== this; ) (a = b.host), (b = Z(a));
                a = this === document ? (b ? null : a) : b === this ? a : null;
              } else a = null;
            } else a = null;
            return a;
          },
          set: function () {},
          configurable: !0,
        },
      },
      Jb = E.S
        ? function () {}
        : function (a) {
            (a.__shady && a.__shady.Na) ||
              ((a.__shady = a.__shady || {}),
              (a.__shady.Na = !0),
              K(a, $b, !0));
          },
      Ib = E.S
        ? function () {}
        : function (a) {
            (a.__shady && a.__shady.La) ||
              ((a.__shady = a.__shady || {}),
              (a.__shady.La = !0),
              K(a, Sa, !0),
              K(a, Oc, !0));
          },
      oa = null,
      da = '__eventWrappers' + Date.now(),
      Yd = {
        blur: !0,
        focus: !0,
        focusin: !0,
        focusout: !0,
        click: !0,
        dblclick: !0,
        mousedown: !0,
        mouseenter: !0,
        mouseleave: !0,
        mousemove: !0,
        mouseout: !0,
        mouseover: !0,
        mouseup: !0,
        wheel: !0,
        beforeinput: !0,
        input: !0,
        keydown: !0,
        keyup: !0,
        compositionstart: !0,
        compositionupdate: !0,
        compositionend: !0,
        touchstart: !0,
        touchend: !0,
        touchmove: !0,
        touchcancel: !0,
        pointerover: !0,
        pointerenter: !0,
        pointerdown: !0,
        pointermove: !0,
        pointerup: !0,
        pointercancel: !0,
        pointerout: !0,
        pointerleave: !0,
        gotpointercapture: !0,
        lostpointercapture: !0,
        dragstart: !0,
        drag: !0,
        dragenter: !0,
        dragleave: !0,
        dragover: !0,
        drop: !0,
        dragend: !0,
        DOMActivate: !0,
        DOMFocusIn: !0,
        DOMFocusOut: !0,
        keypress: !0,
      },
      wc = {
        get composed() {
          !1 !== this.isTrusted &&
            void 0 === this.ea &&
            (this.ea = Yd[this.type]);
          return this.ea || !1;
        },
        composedPath: function () {
          this.qa || (this.qa = Za(this.__target, this.composed));
          return this.qa;
        },
        get target() {
          return mc(this.currentTarget, this.composedPath());
        },
        get relatedTarget() {
          if (!this.ra) return null;
          this.sa || (this.sa = Za(this.ra, !0));
          return mc(this.currentTarget, this.sa);
        },
        stopPropagation: function () {
          Event.prototype.stopPropagation.call(this);
          this.fa = !0;
        },
        stopImmediatePropagation: function () {
          Event.prototype.stopImmediatePropagation.call(this);
          this.fa = this.Ka = !0;
        },
      },
      ab = { focus: !0, blur: !0 },
      Zd = $a(window.Event),
      $d = $a(window.CustomEvent),
      ae = $a(window.MouseEvent),
      Hb = {};
    l.prototype = Object.create(DocumentFragment.prototype);
    l.prototype.F = function (a, b) {
      this.Ma = 'ShadyRoot';
      ka(a);
      ka(this);
      this.host = a;
      this.H = b && b.mode;
      a.__shady = a.__shady || {};
      a.__shady.root = this;
      a.__shady.fb = 'closed' !== this.H ? this : null;
      this.P = !1;
      this.b = [];
      this.a = {};
      this.c = [];
      b = S(a);
      for (var c = 0, d = b.length; c < d; c++) ba.call(a, b[c]);
    };
    l.prototype.L = function () {
      var a = this;
      this.P ||
        ((this.P = !0),
        Nb(function () {
          return a.va();
        }));
    };
    l.prototype.K = function () {
      for (var a = this, b = this; b; ) b.P && (a = b), (b = b.Ua());
      return a;
    };
    l.prototype.Ua = function () {
      var a = this.host.getRootNode();
      if (G(a))
        for (var b = this.host.childNodes, c = 0, d; c < b.length; c++)
          if (((d = b[c]), this.j(d))) return a;
    };
    l.prototype.va = function () {
      this.P && this.K()._renderRoot();
    };
    l.prototype._renderRoot = function () {
      this.P = !1;
      this.B();
      this.s();
    };
    l.prototype.B = function () {
      this.f();
      for (var a = 0, b; a < this.b.length; a++) (b = this.b[a]), this.o(b);
      for (b = this.host.firstChild; b; b = b.nextSibling) this.h(b);
      for (a = 0; a < this.b.length; a++) {
        b = this.b[a];
        if (!b.__shady.assignedNodes.length)
          for (var c = b.firstChild; c; c = c.nextSibling) this.h(c, b);
        c = b.parentNode;
        (c = c.__shady && c.__shady.root) && c.ta() && c._renderRoot();
        this.g(b.__shady.R, b.__shady.assignedNodes);
        if ((c = b.__shady.ua)) {
          for (var d = 0; d < c.length; d++) c[d].__shady.ia = null;
          b.__shady.ua = null;
          c.length > b.__shady.assignedNodes.length && (b.__shady.ka = !0);
        }
        b.__shady.ka && ((b.__shady.ka = !1), this.i(b));
      }
    };
    l.prototype.h = function (a, b) {
      a.__shady = a.__shady || {};
      var c = a.__shady.ia;
      a.__shady.ia = null;
      b || (b = (b = this.a[a.slot || '__catchall']) && b[0]);
      b
        ? (b.__shady.assignedNodes.push(a), (a.__shady.assignedSlot = b))
        : (a.__shady.assignedSlot = void 0);
      c !== a.__shady.assignedSlot &&
        a.__shady.assignedSlot &&
        (a.__shady.assignedSlot.__shady.ka = !0);
    };
    l.prototype.o = function (a) {
      var b = a.__shady.assignedNodes;
      a.__shady.assignedNodes = [];
      a.__shady.R = [];
      if ((a.__shady.ua = b))
        for (var c = 0; c < b.length; c++) {
          var d = b[c];
          d.__shady.ia = d.__shady.assignedSlot;
          d.__shady.assignedSlot === a && (d.__shady.assignedSlot = null);
        }
    };
    l.prototype.g = function (a, b) {
      for (var c = 0, d; c < b.length && (d = b[c]); c++)
        'slot' == d.localName
          ? this.g(a, d.__shady.assignedNodes)
          : a.push(b[c]);
    };
    l.prototype.i = function (a) {
      jb.call(a, new Event('slotchange'));
      a.__shady.assignedSlot && this.i(a.__shady.assignedSlot);
    };
    l.prototype.s = function () {
      for (var a = this.b, b = [], c = 0; c < a.length; c++) {
        var d = a[c].parentNode;
        (d.__shady && d.__shady.root) || !(0 > b.indexOf(d)) || b.push(d);
      }
      for (a = 0; a < b.length; a++)
        (c = b[a]), this.O(c === this ? this.host : c, this.w(c));
    };
    l.prototype.w = function (a) {
      var b = [];
      a = a.childNodes;
      for (var c = 0; c < a.length; c++) {
        var d = a[c];
        if (this.j(d)) {
          d = d.__shady.R;
          for (var e = 0; e < d.length; e++) b.push(d[e]);
        } else b.push(d);
      }
      return b;
    };
    l.prototype.j = function (a) {
      return 'slot' == a.localName;
    };
    l.prototype.O = function (a, b) {
      for (
        var c = S(a), d = Id(b, b.length, c, c.length), e = 0, f = 0, k;
        e < d.length && (k = d[e]);
        e++
      ) {
        for (var g = 0, l; g < k.U.length && (l = k.U[g]); g++)
          U(l) === a && ba.call(a, l), c.splice(k.index + f, 1);
        f -= k.W;
      }
      for (e = 0; e < d.length && (k = d[e]); e++)
        for (f = c[k.index], g = k.index; g < k.index + k.W; g++)
          (l = b[g]), Xa.call(a, l, f), c.splice(g, 0, l);
    };
    l.prototype.Qa = function (a) {
      this.c.push.apply(this.c, [].concat(a instanceof Array ? a : hd(gd(a))));
    };
    l.prototype.f = function () {
      this.c.length && (this.G(this.c), (this.c = []));
    };
    l.prototype.G = function (a) {
      for (var b, c = 0; c < a.length; c++) {
        var d = a[c];
        d.__shady = d.__shady || {};
        ka(d);
        ka(d.parentNode);
        var e = this.l(d);
        this.a[e]
          ? ((b = b || {}), (b[e] = !0), this.a[e].push(d))
          : (this.a[e] = [d]);
        this.b.push(d);
      }
      if (b) for (var f in b) this.a[f] = this.m(this.a[f]);
    };
    l.prototype.l = function (a) {
      var b = a.name || a.getAttribute('name') || '__catchall';
      return (a.Oa = b);
    };
    l.prototype.m = function (a) {
      return a.sort(function (a, c) {
        a = xc(a);
        for (var b = xc(c), e = 0; e < a.length; e++) {
          c = a[e];
          var f = b[e];
          if (c !== f)
            return (
              (a = Array.from(c.parentNode.childNodes)),
              a.indexOf(c) - a.indexOf(f)
            );
        }
      });
    };
    l.prototype.Ta = function (a) {
      this.f();
      var b = this.a,
        c;
      for (c in b)
        for (var d = b[c], e = 0; e < d.length; e++) {
          var f = d[e];
          if (Mb(a, f)) {
            d.splice(e, 1);
            var k = this.b.indexOf(f);
            0 <= k && this.b.splice(k, 1);
            e--;
            this.I(f);
            k = !0;
          }
        }
      return k;
    };
    l.prototype.Va = function (a) {
      var b = a.Oa,
        c = this.l(a);
      if (c !== b) {
        b = this.a[b];
        var d = b.indexOf(a);
        0 <= d && b.splice(d, 1);
        b = this.a[c] || (this.a[c] = []);
        b.push(a);
        1 < b.length && (this.a[c] = this.m(b));
      }
    };
    l.prototype.I = function (a) {
      if ((a = a.__shady.R))
        for (var b = 0; b < a.length; b++) {
          var c = a[b],
            d = U(c);
          d && ba.call(d, c);
        }
    };
    l.prototype.ta = function () {
      this.f();
      return !!this.b.length;
    };
    l.prototype.addEventListener = function (a, b, c) {
      'object' !== typeof c && (c = { capture: !!c });
      c.ga = this;
      this.host.addEventListener(a, b, c);
    };
    l.prototype.removeEventListener = function (a, b, c) {
      'object' !== typeof c && (c = { capture: !!c });
      c.ga = this;
      this.host.removeEventListener(a, b, c);
    };
    l.prototype.getElementById = function (a) {
      return (
        na(
          this,
          function (b) {
            return b.id == a;
          },
          function (a) {
            return !!a;
          }
        )[0] || null
      );
    };
    (function (a) {
      K(a, Sa, !0);
      K(a, Ta, !0);
    })(l.prototype);
    var Md = {
        addEventListener: pc.bind(window),
        removeEventListener: tc.bind(window),
      },
      Ld = {
        addEventListener: pc,
        removeEventListener: tc,
        appendChild: function (a) {
          return Ua(this, a);
        },
        insertBefore: function (a, b) {
          return Ua(this, a, b);
        },
        removeChild: function (a) {
          return Va(this, a);
        },
        replaceChild: function (a, b) {
          Ua(this, a, b);
          Va(this, b);
          return a;
        },
        cloneNode: function (a) {
          if ('template' == this.localName) var b = ib.call(this, a);
          else if (((b = ib.call(this, !1)), a)) {
            a = this.childNodes;
            for (var c = 0, d; c < a.length; c++)
              (d = a[c].cloneNode(!0)), b.appendChild(d);
          }
          return b;
        },
        getRootNode: function () {
          return gc(this);
        },
        contains: function (a) {
          return Mb(this, a);
        },
        get isConnected() {
          var a = this.ownerDocument;
          if (
            (Vd && ca.call(a, this)) ||
            (a.documentElement && ca.call(a.documentElement, this))
          )
            return !0;
          for (a = this; a && !(a instanceof Document); )
            a = a.parentNode || (a instanceof l ? a.host : void 0);
          return !!(a && a instanceof Document);
        },
        dispatchEvent: function (a) {
          ma();
          return jb.call(this, a);
        },
      },
      Nd = {
        get assignedSlot() {
          return yc(this);
        },
      },
      bb = {
        querySelector: function (a) {
          return (
            na(
              this,
              function (b) {
                return Mc.call(b, a);
              },
              function (a) {
                return !!a;
              }
            )[0] || null
          );
        },
        querySelectorAll: function (a) {
          return na(this, function (b) {
            return Mc.call(b, a);
          });
        },
      },
      Bc = {
        assignedNodes: function (a) {
          if ('slot' === this.localName)
            return (
              ic(this),
              this.__shady
                ? (a && a.flatten
                    ? this.__shady.R
                    : this.__shady.assignedNodes) || []
                : []
            );
        },
      },
      zc = Na(
        {
          setAttribute: function (a, b) {
            jc(this, a, b);
          },
          removeAttribute: function (a) {
            Nc.call(this, a);
            fc(this, a);
          },
          attachShadow: function (a) {
            if (!this) throw 'Must provide a host.';
            if (!a) throw 'Not enough arguments.';
            return new l(Hb, this, a);
          },
          get slot() {
            return this.getAttribute('slot');
          },
          set slot(a) {
            jc(this, 'slot', a);
          },
          get assignedSlot() {
            return yc(this);
          },
        },
        bb,
        Bc
      );
    Object.defineProperties(zc, Oc);
    var Ac = Na(
      {
        importNode: function (a, b) {
          return lc(a, b);
        },
        getElementById: function (a) {
          return (
            na(
              this,
              function (b) {
                return b.id == a;
              },
              function (a) {
                return !!a;
              }
            )[0] || null
          );
        },
      },
      bb
    );
    Object.defineProperties(Ac, { _activeElement: Ta.activeElement });
    var be = HTMLElement.prototype.blur,
      Od = Na({
        blur: function () {
          var a = this.__shady && this.__shady.root;
          (a = a && a.activeElement) ? a.blur() : be.call(this);
        },
      });
    E.za &&
      ((window.ShadyDOM = {
        inUse: E.za,
        patch: function (a) {
          return a;
        },
        isShadyRoot: G,
        enqueue: Nb,
        flush: ma,
        settings: E,
        filterMutations: Bd,
        observeChildren: zd,
        unobserveChildren: yd,
        nativeMethods: Wd,
        nativeTree: Xd,
      }),
      (window.Event = Zd),
      (window.CustomEvent = $d),
      (window.MouseEvent = ae),
      Hd(),
      Kd(),
      (window.ShadowRoot = l));
    var Pd = new Set(
      'annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph'.split(
        ' '
      )
    );
    B.prototype.B = function (a, b) {
      this.o.set(a, b);
      this.m.set(b.constructor, b);
    };
    B.prototype.c = function (a) {
      return this.o.get(a);
    };
    B.prototype.w = function (a) {
      return this.m.get(a);
    };
    B.prototype.s = function (a) {
      this.h = !0;
      this.j.push(a);
    };
    B.prototype.l = function (a) {
      var b = this;
      this.h &&
        O(a, function (a) {
          return b.g(a);
        });
    };
    B.prototype.g = function (a) {
      if (this.h && !a.__CE_patched) {
        a.__CE_patched = !0;
        for (var b = 0; b < this.j.length; b++) this.j[b](a);
      }
    };
    B.prototype.b = function (a) {
      var b = [];
      O(a, function (a) {
        return b.push(a);
      });
      for (a = 0; a < b.length; a++) {
        var c = b[a];
        1 === c.__CE_state ? this.connectedCallback(c) : this.i(c);
      }
    };
    B.prototype.a = function (a) {
      var b = [];
      O(a, function (a) {
        return b.push(a);
      });
      for (a = 0; a < b.length; a++) {
        var c = b[a];
        1 === c.__CE_state && this.disconnectedCallback(c);
      }
    };
    B.prototype.f = function (a, b) {
      var c = this;
      b = b ? b : {};
      var d = b.kb || new Set(),
        e =
          b.Da ||
          function (a) {
            return c.i(a);
          },
        f = [];
      O(
        a,
        function (a) {
          if ('link' === a.localName && 'import' === a.getAttribute('rel')) {
            var b = a.import;
            b instanceof Node && 'complete' === b.readyState
              ? ((b.__CE_isImportDocument = !0), (b.__CE_hasRegistry = !0))
              : a.addEventListener('load', function () {
                  var b = a.import;
                  if (!b.__CE_documentLoadHandled) {
                    b.__CE_documentLoadHandled = !0;
                    b.__CE_isImportDocument = !0;
                    b.__CE_hasRegistry = !0;
                    var f = new Set(d);
                    f.delete(b);
                    c.f(b, { kb: f, Da: e });
                  }
                });
          } else f.push(a);
        },
        d
      );
      if (this.h) for (a = 0; a < f.length; a++) this.g(f[a]);
      for (a = 0; a < f.length; a++) e(f[a]);
    };
    B.prototype.i = function (a) {
      if (void 0 === a.__CE_state) {
        var b = this.c(a.localName);
        if (b) {
          b.constructionStack.push(a);
          var c = b.constructor;
          try {
            try {
              if (new c() !== a)
                throw Error(
                  'The custom element constructor did not produce the element being upgraded.'
                );
            } finally {
              b.constructionStack.pop();
            }
          } catch (f) {
            throw ((a.__CE_state = 2), f);
          }
          a.__CE_state = 1;
          a.__CE_definition = b;
          if (b.attributeChangedCallback)
            for (b = b.observedAttributes, c = 0; c < b.length; c++) {
              var d = b[c],
                e = a.getAttribute(d);
              null !== e && this.attributeChangedCallback(a, d, null, e, null);
            }
          t(a) && this.connectedCallback(a);
        }
      }
    };
    B.prototype.connectedCallback = function (a) {
      var b = a.__CE_definition;
      b.connectedCallback && b.connectedCallback.call(a);
    };
    B.prototype.disconnectedCallback = function (a) {
      var b = a.__CE_definition;
      b.disconnectedCallback && b.disconnectedCallback.call(a);
    };
    B.prototype.attributeChangedCallback = function (a, b, c, d, e) {
      var f = a.__CE_definition;
      f.attributeChangedCallback &&
        -1 < f.observedAttributes.indexOf(b) &&
        f.attributeChangedCallback.call(a, b, c, d, e);
    };
    Ja.prototype.c = function () {
      this.M && this.M.disconnect();
    };
    Ja.prototype.f = function (a) {
      var b = this.a.readyState;
      ('interactive' !== b && 'complete' !== b) || this.c();
      for (b = 0; b < a.length; b++)
        for (var c = a[b].addedNodes, d = 0; d < c.length; d++) this.b.f(c[d]);
    };
    Gb.prototype.c = function () {
      if (this.a) throw Error('Already resolved.');
      this.a = void 0;
      this.b && this.b(void 0);
    };
    y.prototype.define = function (a, b) {
      var c = this;
      if (!(b instanceof Function))
        throw new TypeError('Custom element constructors must be functions.');
      if (!Cc(a))
        throw new SyntaxError("The element name '" + a + "' is not valid.");
      if (this.a.c(a))
        throw Error(
          "A custom element with name '" + a + "' has already been defined."
        );
      if (this.c) throw Error('A custom element is already being defined.');
      this.c = !0;
      try {
        var d = function (a) {
            var b = e[a];
            if (void 0 !== b && !(b instanceof Function))
              throw Error("The '" + a + "' callback must be a function.");
            return b;
          },
          e = b.prototype;
        if (!(e instanceof Object))
          throw new TypeError(
            "The custom element constructor's prototype is not an object."
          );
        var f = d('connectedCallback');
        var g = d('disconnectedCallback');
        var h = d('adoptedCallback');
        var l = d('attributeChangedCallback');
        var n = b.observedAttributes || [];
      } catch (m) {
        return;
      } finally {
        this.c = !1;
      }
      b = {
        localName: a,
        constructor: b,
        connectedCallback: f,
        disconnectedCallback: g,
        adoptedCallback: h,
        attributeChangedCallback: l,
        observedAttributes: n,
        constructionStack: [],
      };
      this.a.B(a, b);
      this.g.push(b);
      this.b ||
        ((this.b = !0),
        this.f(function () {
          return c.j();
        }));
    };
    y.prototype.j = function () {
      var a = this;
      if (!1 !== this.b) {
        this.b = !1;
        for (var b = this.g, c = [], d = new Map(), e = 0; e < b.length; e++)
          d.set(b[e].localName, []);
        this.a.f(document, {
          Da: function (b) {
            if (void 0 === b.__CE_state) {
              var e = b.localName,
                f = d.get(e);
              f ? f.push(b) : a.a.c(e) && c.push(b);
            }
          },
        });
        for (e = 0; e < c.length; e++) this.a.i(c[e]);
        for (; 0 < b.length; ) {
          var f = b.shift();
          e = f.localName;
          f = d.get(f.localName);
          for (var g = 0; g < f.length; g++) this.a.i(f[g]);
          (e = this.h.get(e)) && e.c();
        }
      }
    };
    y.prototype.get = function (a) {
      if ((a = this.a.c(a))) return a.constructor;
    };
    y.prototype.whenDefined = function (a) {
      if (!Cc(a))
        return Promise.reject(
          new SyntaxError("'" + a + "' is not a valid custom element name.")
        );
      var b = this.h.get(a);
      if (b) return b.f;
      b = new Gb();
      this.h.set(a, b);
      this.a.c(a) &&
        !this.g.some(function (b) {
          return b.localName === a;
        }) &&
        b.c();
      return b.f;
    };
    y.prototype.l = function (a) {
      this.i.c();
      var b = this.f;
      this.f = function (c) {
        return a(function () {
          return b(c);
        });
      };
    };
    window.CustomElementRegistry = y;
    y.prototype.define = y.prototype.define;
    y.prototype.get = y.prototype.get;
    y.prototype.whenDefined = y.prototype.whenDefined;
    y.prototype.polyfillWrapFlushCallback = y.prototype.l;
    var Ea = window.Document.prototype.createElement,
      td = window.Document.prototype.createElementNS,
      sd = window.Document.prototype.importNode,
      ud = window.Document.prototype.prepend,
      vd = window.Document.prototype.append,
      ce = window.DocumentFragment.prototype.prepend,
      de = window.DocumentFragment.prototype.append,
      wb = window.Node.prototype.cloneNode,
      ia = window.Node.prototype.appendChild,
      Db = window.Node.prototype.insertBefore,
      Fa = window.Node.prototype.removeChild,
      Eb = window.Node.prototype.replaceChild,
      Ia = Object.getOwnPropertyDescriptor(
        window.Node.prototype,
        'textContent'
      ),
      vb = window.Element.prototype.attachShadow,
      Ca = Object.getOwnPropertyDescriptor(
        window.Element.prototype,
        'innerHTML'
      ),
      Ga = window.Element.prototype.getAttribute,
      xb = window.Element.prototype.setAttribute,
      zb = window.Element.prototype.removeAttribute,
      ja = window.Element.prototype.getAttributeNS,
      yb = window.Element.prototype.setAttributeNS,
      Ab = window.Element.prototype.removeAttributeNS,
      Cb = window.Element.prototype.insertAdjacentElement,
      jd = window.Element.prototype.prepend,
      kd = window.Element.prototype.append,
      md = window.Element.prototype.before,
      nd = window.Element.prototype.after,
      od = window.Element.prototype.replaceWith,
      pd = window.Element.prototype.remove,
      xd = window.HTMLElement,
      Da = Object.getOwnPropertyDescriptor(
        window.HTMLElement.prototype,
        'innerHTML'
      ),
      Bb = window.HTMLElement.prototype.insertAdjacentElement,
      Fb = new (function () {})(),
      ta = window.customElements;
    if (
      !ta ||
      ta.forcePolyfill ||
      'function' != typeof ta.define ||
      'function' != typeof ta.get
    ) {
      var Y = new B();
      wd(Y);
      rd(Y);
      Ha(Y, DocumentFragment.prototype, { Z: ce, append: de });
      qd(Y);
      id(Y);
      document.__CE_hasRegistry = !0;
      var ee = new y(Y);
      Object.defineProperty(window, 'customElements', {
        configurable: !0,
        enumerable: !0,
        value: ee,
      });
    }
    var I = { STYLE_RULE: 1, da: 7, MEDIA_RULE: 4, na: 1e3 },
      F = {
        Ya: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
        port: /@import[^;]*;/gim,
        wa: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
        Aa: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
        eb: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
        jb: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
        cb: /^@[^\s]*keyframes/,
        Ba: /\s+/g,
      },
      z = !(window.ShadyDOM && window.ShadyDOM.inUse);
    if (window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss)
      var A = window.ShadyCSS.nativeCss;
    else
      window.ShadyCSS
        ? (Fc(window.ShadyCSS), (window.ShadyCSS = void 0))
        : Fc(window.WebComponents && window.WebComponents.flags);
    var ua =
        /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
      va = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
      fe = /(--[\w-]+)\s*([:,;)]|$)/gi,
      ge = /(animation\s*:)|(animation-name\s*:)/,
      Rd = /@media\s(.*)/,
      he = /\{[^}]*\}/g,
      Q = null;
    u.prototype.b = function (a, b, c) {
      a.__styleScoped ? (a.__styleScoped = null) : this.j(a, b || '', c);
    };
    u.prototype.j = function (a, b, c) {
      a.nodeType === Node.ELEMENT_NODE && this.h(a, b, c);
      if (
        (a =
          'template' === a.localName
            ? (a.content || a.ob).childNodes
            : a.children || a.childNodes)
      )
        for (var d = 0; d < a.length; d++) this.j(a[d], b, c);
    };
    u.prototype.h = function (a, b, c) {
      if (b)
        if (a.classList)
          c
            ? (a.classList.remove('style-scope'), a.classList.remove(b))
            : (a.classList.add('style-scope'), a.classList.add(b));
        else if (a.getAttribute) {
          var d = a.getAttribute(ie);
          c
            ? d && ((b = d.replace('style-scope', '').replace(b, '')), qa(a, b))
            : qa(a, (d ? d + ' ' : '') + 'style-scope ' + b);
        }
    };
    u.prototype.c = function (a, b, c) {
      var d = a.__cssBuild;
      z || 'shady' === d
        ? (b = V(b, c))
        : ((a = R(a)), (b = this.G(b, a.is, a.V, c) + '\n\n'));
      return b.trim();
    };
    u.prototype.G = function (a, b, c, d) {
      var e = this.f(b, c);
      b = this.i(b);
      var f = this;
      return V(a, function (a) {
        a.c || (f.I(a, b, e), (a.c = !0));
        d && d(a, b, e);
      });
    };
    u.prototype.i = function (a) {
      return a ? je + a : '';
    };
    u.prototype.f = function (a, b) {
      return b ? '[is=' + a + ']' : a;
    };
    u.prototype.I = function (a, b, c) {
      this.l(a, this.g, b, c);
    };
    u.prototype.l = function (a, b, c, d) {
      a.selector = a.v = this.m(a, b, c, d);
    };
    u.prototype.m = function (a, b, c, d) {
      var e = a.selector.split(Pc);
      if (!Gc(a)) {
        a = 0;
        for (var f = e.length, g; a < f && (g = e[a]); a++)
          e[a] = b.call(this, g, c, d);
      }
      return e.join(Pc);
    };
    u.prototype.s = function (a) {
      return a.replace(mb, function (a, c, d) {
        -1 < d.indexOf('+')
          ? (d = d.replace(/\+/g, '___'))
          : -1 < d.indexOf('___') && (d = d.replace(/___/g, '+'));
        return ':' + c + '(' + d + ')';
      });
    };
    u.prototype.g = function (a, b, c) {
      var d = this,
        e = !1;
      a = a.trim();
      var f = mb.test(a);
      f &&
        ((a = a.replace(mb, function (a, b, c) {
          return ':' + b + '(' + c.replace(/\s/g, '') + ')';
        })),
        (a = this.s(a)));
      a = a.replace(ke, nb + ' $1');
      a = a.replace(le, function (a, f, g) {
        e ||
          ((a = d.B(g, f, b, c)), (e = e || a.stop), (f = a.Xa), (g = a.value));
        return f + g;
      });
      f && (a = this.s(a));
      return a;
    };
    u.prototype.B = function (a, b, c, d) {
      var e = a.indexOf(ob);
      0 <= a.indexOf(nb)
        ? (a = this.F(a, d))
        : 0 !== e && (a = c ? this.o(a, c) : a);
      c = !1;
      0 <= e && ((b = ''), (c = !0));
      if (c) {
        var f = !0;
        c &&
          (a = a.replace(me, function (a, b) {
            return ' > ' + b;
          }));
      }
      a = a.replace(ne, function (a, b, c) {
        return '[dir="' + c + '"] ' + b + ', ' + b + '[dir="' + c + '"]';
      });
      return { value: a, Xa: b, stop: f };
    };
    u.prototype.o = function (a, b) {
      a = a.split(Qc);
      a[0] += b;
      return a.join(Qc);
    };
    u.prototype.F = function (a, b) {
      var c = a.match(Rc);
      return (c = (c && c[2].trim()) || '')
        ? c[0].match(Sc)
          ? a.replace(Rc, function (a, c, f) {
              return b + f;
            })
          : c.split(Sc)[0] === b
          ? c
          : oe
        : a.replace(nb, b);
    };
    u.prototype.H = function (a) {
      a.selector = a.parsedSelector;
      this.w(a);
      this.l(a, this.K);
    };
    u.prototype.w = function (a) {
      a.selector === pe && (a.selector = 'html');
    };
    u.prototype.K = function (a) {
      return a.match(ob) ? this.g(a, Tc) : this.o(a.trim(), Tc);
    };
    J.Object.defineProperties(u.prototype, {
      a: {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return 'style-scope';
        },
      },
    });
    var mb = /:(nth[-\w]+)\(([^)]+)\)/,
      Tc = ':not(.style-scope)',
      Pc = ',',
      le = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,
      Sc = /[[.:#*]/,
      nb = ':host',
      pe = ':root',
      ob = '::slotted',
      ke = new RegExp('^(' + ob + ')'),
      Rc = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
      me = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
      ne = /(.*):dir\((?:(ltr|rtl))\)/,
      je = '.',
      Qc = ':',
      ie = 'class',
      oe = 'should_not_match',
      p = new u();
    v.get = function (a) {
      return a ? a.__styleInfo : null;
    };
    v.set = function (a, b) {
      return (a.__styleInfo = b);
    };
    v.prototype.c = function () {
      return this.D;
    };
    v.prototype._getStyleRules = v.prototype.c;
    var Uc = (function (a) {
        return (
          a.matches ||
          a.matchesSelector ||
          a.mozMatchesSelector ||
          a.msMatchesSelector ||
          a.oMatchesSelector ||
          a.webkitMatchesSelector
        );
      })(window.Element.prototype),
      qe = navigator.userAgent.match('Trident');
    n.prototype.H = function (a) {
      var b = this,
        c = {},
        d = [],
        e = 0;
      W(
        a,
        function (a) {
          b.c(a);
          a.index = e++;
          b.G(a.u.cssText, c);
        },
        function (a) {
          d.push(a);
        }
      );
      a.b = d;
      a = [];
      for (var f in c) a.push(f);
      return a;
    };
    n.prototype.c = function (a) {
      if (!a.u) {
        var b = {},
          c = {};
        this.b(a, c) && ((b.C = c), (a.rules = null));
        b.cssText = this.F(a);
        a.u = b;
      }
    };
    n.prototype.b = function (a, b) {
      var c = a.u;
      if (c) {
        if (c.C) return Object.assign(b, c.C), !0;
      } else {
        c = a.parsedCssText;
        for (var d; (a = ua.exec(c)); ) {
          d = (a[2] || a[3]).trim();
          if ('inherit' !== d || 'unset' !== d) b[a[1].trim()] = d;
          d = !0;
        }
        return d;
      }
    };
    n.prototype.F = function (a) {
      return this.K(a.parsedCssText);
    };
    n.prototype.K = function (a) {
      return a.replace(he, '').replace(ua, '');
    };
    n.prototype.G = function (a, b) {
      for (var c; (c = fe.exec(a)); ) {
        var d = c[1];
        ':' !== c[2] && (b[d] = !0);
      }
    };
    n.prototype.aa = function (a) {
      for (var b = Object.getOwnPropertyNames(a), c = 0, d; c < b.length; c++)
        (d = b[c]), (a[d] = this.a(a[d], a));
    };
    n.prototype.a = function (a, b) {
      if (a)
        if (0 <= a.indexOf(';')) a = this.f(a, b);
        else {
          var c = this;
          a = Ic(a, function (a, e, f, g) {
            if (!e) return a + g;
            (e = c.a(b[e], b)) && 'initial' !== e
              ? 'apply-shim-inherit' === e && (e = 'inherit')
              : (e = c.a(b[f] || f, b) || f);
            return a + (e || '') + g;
          });
        }
      return (a && a.trim()) || '';
    };
    n.prototype.f = function (a, b) {
      a = a.split(';');
      for (var c = 0, d, e; c < a.length; c++)
        if ((d = a[c])) {
          va.lastIndex = 0;
          if ((e = va.exec(d))) d = this.a(b[e[1]], b);
          else if (((e = d.indexOf(':')), -1 !== e)) {
            var f = d.substring(e);
            f = f.trim();
            f = this.a(f, b) || f;
            d = d.substring(0, e) + f;
          }
          a[c] =
            d && d.lastIndexOf(';') === d.length - 1 ? d.slice(0, -1) : d || '';
        }
      return a.join(';');
    };
    n.prototype.B = function (a, b) {
      var c = '';
      a.u || this.c(a);
      a.u.cssText && (c = this.f(a.u.cssText, b));
      a.cssText = c;
    };
    n.prototype.w = function (a, b) {
      var c = a.cssText,
        d = a.cssText;
      null == a.ya && (a.ya = ge.test(c));
      if (a.ya)
        if (null == a.Y) {
          a.Y = [];
          for (var e in b)
            (d = b[e]), (d = d(c)), c !== d && ((c = d), a.Y.push(e));
        } else {
          for (e = 0; e < a.Y.length; ++e) (d = b[a.Y[e]]), (c = d(c));
          d = c;
        }
      a.cssText = d;
    };
    n.prototype.O = function (a, b) {
      var c = {},
        d = this,
        e = [];
      W(
        a,
        function (a) {
          a.u || d.c(a);
          var f = a.v || a.parsedSelector;
          b &&
            a.u.C &&
            f &&
            Uc.call(b, f) &&
            (d.b(a, c),
            (a = a.index),
            (f = parseInt(a / 32, 10)),
            (e[f] = (e[f] || 0) | (1 << a % 32)));
        },
        null,
        !0
      );
      return { C: c, key: e };
    };
    n.prototype.ca = function (a, b, c, d) {
      b.u || this.c(b);
      if (b.u.C) {
        var e = R(a);
        a = e.is;
        e = e.V;
        e = a ? p.f(a, e) : 'html';
        var f = b.parsedSelector,
          g = ':host > *' === f || 'html' === f,
          h = 0 === f.indexOf(':host') && !g;
        'shady' === c &&
          ((g = f === e + ' > *.' + e || -1 !== f.indexOf('html')),
          (h = !g && 0 === f.indexOf(e)));
        'shadow' === c &&
          ((g = ':host > *' === f || 'html' === f), (h = h && !g));
        if (g || h)
          (c = e),
            h && (z && !b.v && (b.v = p.m(b, p.g, p.i(a), e)), (c = b.v || e)),
            d({ ib: c, bb: h, qb: g });
      }
    };
    n.prototype.I = function (a, b) {
      var c = {},
        d = {},
        e = this,
        f = b && b.__cssBuild;
      W(
        b,
        function (b) {
          e.ca(a, b, f, function (f) {
            Uc.call(a.pb || a, f.ib) && (f.bb ? e.b(b, c) : e.b(b, d));
          });
        },
        null,
        !0
      );
      return { gb: d, ab: c };
    };
    n.prototype.ba = function (a, b, c) {
      var d = this,
        e = R(a),
        f = p.f(e.is, e.V),
        g = new RegExp(
          '(?:^|[^.#[:])' +
            (a.extends ? '\\' + f.slice(0, -1) + '\\]' : f) +
            '($|[.:[\\s>+~])'
        );
      e = v.get(a).D;
      var h = this.h(e, c);
      return p.c(a, e, function (a) {
        d.B(a, b);
        z || Gc(a) || !a.cssText || (d.w(a, h), d.l(a, g, f, c));
      });
    };
    n.prototype.h = function (a, b) {
      a = a.b;
      var c = {};
      if (!z && a)
        for (var d = 0, e = a[d]; d < a.length; e = a[++d])
          this.j(e, b), (c[e.keyframesName] = this.i(e));
      return c;
    };
    n.prototype.i = function (a) {
      return function (b) {
        return b.replace(a.f, a.a);
      };
    };
    n.prototype.j = function (a, b) {
      a.f = new RegExp(a.keyframesName, 'g');
      a.a = a.keyframesName + '-' + b;
      a.v = a.v || a.selector;
      a.selector = a.v.replace(a.keyframesName, a.a);
    };
    n.prototype.l = function (a, b, c, d) {
      a.v = a.v || a.selector;
      d = '.' + d;
      for (
        var e = a.v.split(','), f = 0, g = e.length, h;
        f < g && (h = e[f]);
        f++
      )
        e[f] = h.match(b) ? h.replace(c, d) : d + ' ' + h;
      a.selector = e.join(',');
    };
    n.prototype.o = function (a, b, c) {
      var d = a.getAttribute('class') || '',
        e = d;
      c &&
        (e = d.replace(new RegExp('\\s*x-scope\\s*' + c + '\\s*', 'g'), ' '));
      e += (e ? ' ' : '') + 'x-scope ' + b;
      d !== e && qa(a, e);
    };
    n.prototype.s = function (a, b, c, d) {
      b = d ? d.textContent || '' : this.ba(a, b, c);
      var e = v.get(a),
        f = e.a;
      f &&
        !z &&
        f !== d &&
        (f._useCount--,
        0 >= f._useCount && f.parentNode && f.parentNode.removeChild(f));
      z
        ? e.a
          ? ((e.a.textContent = b), (d = e.a))
          : b && (d = eb(b, c, a.shadowRoot, e.b))
        : d
        ? d.parentNode ||
          (qe && -1 < b.indexOf('@media') && (d.textContent = b),
          Hc(d, null, e.b))
        : b && (d = eb(b, c, null, e.b));
      d &&
        ((d._useCount = d._useCount || 0),
        e.a != d && d._useCount++,
        (e.a = d));
      return d;
    };
    n.prototype.m = function (a, b) {
      var c = pa(a),
        d = this;
      a.textContent = V(c, function (a) {
        var c = (a.cssText = a.parsedCssText);
        a.u &&
          a.u.cssText &&
          ((c = c.replace(F.wa, '').replace(F.Aa, '')),
          (a.cssText = d.f(c, b)));
      });
    };
    J.Object.defineProperties(n.prototype, {
      g: {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return 'x-scope';
        },
      },
    });
    var M = new n(),
      pb = {},
      wa = window.customElements;
    if (wa && !z) {
      var re = wa.define;
      wa.define = function (a, b, c) {
        var d = document.createComment(' Shady DOM styles for ' + a + ' '),
          e = document.head;
        e.insertBefore(d, (Q ? Q.nextSibling : null) || e.firstChild);
        Q = d;
        pb[a] = d;
        return re.call(wa, a, b, c);
      };
    }
    ha.prototype.a = function (a, b, c) {
      for (var d = 0; d < c.length; d++) {
        var e = c[d];
        if (a.C[e] !== b[e]) return !1;
      }
      return !0;
    };
    ha.prototype.b = function (a, b, c, d) {
      var e = this.cache[a] || [];
      e.push({ C: b, styleElement: c, A: d });
      e.length > this.c && e.shift();
      this.cache[a] = e;
    };
    ha.prototype.fetch = function (a, b, c) {
      if ((a = this.cache[a]))
        for (var d = a.length - 1; 0 <= d; d--) {
          var e = a[d];
          if (this.a(e, b, c)) return e;
        }
    };
    if (!z) {
      var Vc = new MutationObserver(Jc),
        Wc = function (a) {
          Vc.observe(a, { childList: !0, subtree: !0 });
        };
      if (
        window.customElements &&
        !window.customElements.polyfillWrapFlushCallback
      )
        Wc(document);
      else {
        var qb = function () {
          Wc(document.body);
        };
        window.HTMLImports
          ? window.HTMLImports.whenReady(qb)
          : requestAnimationFrame(function () {
              if ('loading' === document.readyState) {
                var a = function () {
                  qb();
                  document.removeEventListener('readystatechange', a);
                };
                document.addEventListener('readystatechange', a);
              } else qb();
            });
      }
      N = function () {
        Jc(Vc.takeRecords());
      };
    }
    var ra = {},
      Ud = Promise.resolve(),
      fb = null,
      Lc = (window.HTMLImports && window.HTMLImports.whenReady) || null,
      gb,
      xa = null,
      fa = null;
    q.prototype.xa = function () {
      !this.enqueued && fa && ((this.enqueued = !0), ub(fa));
    };
    q.prototype.b = function (a) {
      a.__seenByShadyCSS ||
        ((a.__seenByShadyCSS = !0), this.customStyles.push(a), this.xa());
    };
    q.prototype.a = function (a) {
      return a.__shadyCSSCachedStyle
        ? a.__shadyCSSCachedStyle
        : a.getStyle
        ? a.getStyle()
        : a;
    };
    q.prototype.c = function () {
      for (var a = this.customStyles, b = 0; b < a.length; b++) {
        var c = a[b];
        if (!c.__shadyCSSCachedStyle) {
          var d = this.a(c);
          d &&
            ((d = d.__appliedElement || d),
            xa && xa(d),
            (c.__shadyCSSCachedStyle = d));
        }
      }
      return a;
    };
    q.prototype.addCustomStyle = q.prototype.b;
    q.prototype.getStyleForCustomStyle = q.prototype.a;
    q.prototype.processStyles = q.prototype.c;
    Object.defineProperties(q.prototype, {
      transformCallback: {
        get: function () {
          return xa;
        },
        set: function (a) {
          xa = a;
        },
      },
      validateCallback: {
        get: function () {
          return fa;
        },
        set: function (a) {
          var b = !1;
          fa || (b = !0);
          fa = a;
          b && this.xa();
        },
      },
    });
    var Xc = new ha();
    g.prototype.w = function () {
      N();
    };
    g.prototype.I = function (a) {
      var b = (this.m[a] = (this.m[a] || 0) + 1);
      return a + '-' + b;
    };
    g.prototype.Ha = function (a) {
      return pa(a);
    };
    g.prototype.Ja = function (a) {
      return V(a);
    };
    g.prototype.H = function (a) {
      a = a.content.querySelectorAll('style');
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c];
        b.push(d.textContent);
        d.parentNode.removeChild(d);
      }
      return b.join('').trim();
    };
    g.prototype.aa = function (a) {
      return (a = a.content.querySelector('style'))
        ? a.getAttribute('css-build') || ''
        : '';
    };
    g.prototype.prepareTemplate = function (a, b, c) {
      if (!a.f) {
        a.f = !0;
        a.name = b;
        a.extends = c;
        ra[b] = a;
        var d = this.aa(a),
          e = this.H(a);
        c = { is: b, extends: c, mb: d };
        z || p.b(a.content, b);
        this.c();
        var f = va.test(e) || ua.test(e);
        va.lastIndex = 0;
        ua.lastIndex = 0;
        e = db(e);
        f && A && this.a && this.a.transformRules(e, b);
        a._styleAst = e;
        a.g = d;
        d = [];
        A || (d = M.H(a._styleAst));
        if (!d.length || A)
          (b = this.O(c, a._styleAst, z ? a.content : null, pb[b])), (a.a = b);
        a.c = d;
      }
    };
    g.prototype.O = function (a, b, c, d) {
      b = p.c(a, b);
      if (b.length) return eb(b, a.is, c, d);
    };
    g.prototype.ca = function (a) {
      var b = R(a),
        c = b.is;
      b = b.V;
      var d = pb[c];
      c = ra[c];
      if (c) {
        var e = c._styleAst;
        var f = c.c;
      }
      return v.set(a, new v(e, d, f, 0, b));
    };
    g.prototype.F = function () {
      !this.a &&
        window.ShadyCSS &&
        window.ShadyCSS.ApplyShim &&
        ((this.a = window.ShadyCSS.ApplyShim), (this.a.invalidCallback = Sd));
    };
    g.prototype.G = function () {
      var a = this;
      !this.b &&
        window.ShadyCSS &&
        window.ShadyCSS.CustomStyleInterface &&
        ((this.b = window.ShadyCSS.CustomStyleInterface),
        (this.b.transformCallback = function (b) {
          a.s(b);
        }),
        (this.b.validateCallback = function () {
          requestAnimationFrame(function () {
            (a.b.enqueued || a.i) && a.f();
          });
        }));
    };
    g.prototype.c = function () {
      this.F();
      this.G();
    };
    g.prototype.f = function () {
      this.c();
      if (this.b) {
        var a = this.b.processStyles();
        this.b.enqueued &&
          (A ? this.Fa(a) : (this.o(this.g, this.h), this.B(a)),
          (this.b.enqueued = !1),
          this.i && !A && this.styleDocument());
      }
    };
    g.prototype.styleElement = function (a, b) {
      var c = R(a).is,
        d = v.get(a);
      d || (d = this.ca(a));
      this.j(a) || (this.i = !0);
      b && ((d.N = d.N || {}), Object.assign(d.N, b));
      if (A) {
        if (d.N) {
          b = d.N;
          for (var e in b)
            null === e
              ? a.style.removeProperty(e)
              : a.style.setProperty(e, b[e]);
        }
        if (((e = ra[c]) || this.j(a)) && e && e.a && !Kc(e)) {
          if (
            Kc(e) ||
            e._applyShimValidatingVersion !== e._applyShimNextVersion
          )
            this.c(),
              this.a && this.a.transformRules(e._styleAst, c),
              (e.a.textContent = p.c(a, d.D)),
              Td(e);
          z &&
            (c = a.shadowRoot) &&
            (c.querySelector('style').textContent = p.c(a, d.D));
          d.D = e._styleAst;
        }
      } else this.o(a, d), d.la && d.la.length && this.K(a, d);
    };
    g.prototype.l = function (a) {
      return (a = a.getRootNode().host) ? (v.get(a) ? a : this.l(a)) : this.g;
    };
    g.prototype.j = function (a) {
      return a === this.g;
    };
    g.prototype.K = function (a, b) {
      var c = R(a).is,
        d = Xc.fetch(c, b.J, b.la),
        e = d ? d.styleElement : null,
        f = b.A;
      b.A = (d && d.A) || this.I(c);
      e = M.s(a, b.J, b.A, e);
      z || M.o(a, b.A, f);
      d || Xc.b(c, b.J, e, b.A);
    };
    g.prototype.o = function (a, b) {
      var c = this.l(a),
        d = v.get(c);
      c = Object.create(d.J || null);
      var e = M.I(a, b.D);
      a = M.O(d.D, a).C;
      Object.assign(c, e.ab, a, e.gb);
      this.ba(c, b.N);
      M.aa(c);
      b.J = c;
    };
    g.prototype.ba = function (a, b) {
      for (var c in b) {
        var d = b[c];
        if (d || 0 === d) a[c] = d;
      }
    };
    g.prototype.styleDocument = function (a) {
      this.styleSubtree(this.g, a);
    };
    g.prototype.styleSubtree = function (a, b) {
      var c = a.shadowRoot;
      (c || this.j(a)) && this.styleElement(a, b);
      if ((b = c && (c.children || c.childNodes)))
        for (a = 0; a < b.length; a++) this.styleSubtree(b[a]);
      else if ((a = a.children || a.childNodes))
        for (b = 0; b < a.length; b++) this.styleSubtree(a[b]);
    };
    g.prototype.Fa = function (a) {
      for (var b = 0; b < a.length; b++) {
        var c = this.b.getStyleForCustomStyle(a[b]);
        c && this.Ea(c);
      }
    };
    g.prototype.B = function (a) {
      for (var b = 0; b < a.length; b++) {
        var c = this.b.getStyleForCustomStyle(a[b]);
        c && M.m(c, this.h.J);
      }
    };
    g.prototype.s = function (a) {
      var b = this,
        c = pa(a);
      W(c, function (a) {
        z ? p.w(a) : p.H(a);
        A && (b.c(), b.a && b.a.transformRule(a));
      });
      A ? (a.textContent = V(c)) : this.h.D.rules.push(c);
    };
    g.prototype.Ea = function (a) {
      if (A && this.a) {
        var b = pa(a);
        this.c();
        this.a.transformRules(b);
        a.textContent = V(b);
      }
    };
    g.prototype.getComputedStyleValue = function (a, b) {
      var c;
      A || (c = (v.get(a) || v.get(this.l(a))).J[b]);
      return (c = c || window.getComputedStyle(a).getPropertyValue(b))
        ? c.trim()
        : '';
    };
    g.prototype.Ia = function (a, b) {
      var c = a.getRootNode();
      b = b ? b.split(/\s/) : [];
      c = c.host && c.host.localName;
      if (!c) {
        var d = a.getAttribute('class');
        if (d) {
          d = d.split(/\s/);
          for (var e = 0; e < d.length; e++)
            if (d[e] === p.a) {
              c = d[e + 1];
              break;
            }
        }
      }
      c && b.push(p.a, c);
      A || ((c = v.get(a)) && c.A && b.push(M.g, c.A));
      qa(a, b.join(' '));
    };
    g.prototype.Ga = function (a) {
      return v.get(a);
    };
    g.prototype.flush = g.prototype.w;
    g.prototype.prepareTemplate = g.prototype.prepareTemplate;
    g.prototype.styleElement = g.prototype.styleElement;
    g.prototype.styleDocument = g.prototype.styleDocument;
    g.prototype.styleSubtree = g.prototype.styleSubtree;
    g.prototype.getComputedStyleValue = g.prototype.getComputedStyleValue;
    g.prototype.setElementClass = g.prototype.Ia;
    g.prototype._styleInfoForNode = g.prototype.Ga;
    g.prototype.transformCustomStyleForDocument = g.prototype.s;
    g.prototype.getStyleAst = g.prototype.Ha;
    g.prototype.styleAstToString = g.prototype.Ja;
    g.prototype.flushCustomStyles = g.prototype.f;
    Object.defineProperties(g.prototype, {
      nativeShadow: {
        get: function () {
          return z;
        },
      },
      nativeCss: {
        get: function () {
          return A;
        },
      },
    });
    var H = new g();
    if (window.ShadyCSS) {
      var Yc = window.ShadyCSS.ApplyShim;
      var Zc = window.ShadyCSS.CustomStyleInterface;
    }
    window.ShadyCSS = {
      ScopingShim: H,
      prepareTemplate: function (a, b, c) {
        H.f();
        H.prepareTemplate(a, b, c);
      },
      styleSubtree: function (a, b) {
        H.f();
        H.styleSubtree(a, b);
      },
      styleElement: function (a) {
        H.f();
        H.styleElement(a);
      },
      styleDocument: function (a) {
        H.f();
        H.styleDocument(a);
      },
      getComputedStyleValue: function (a, b) {
        return H.getComputedStyleValue(a, b);
      },
      nativeCss: A,
      nativeShadow: z,
    };
    Yc && (window.ShadyCSS.ApplyShim = Yc);
    Zc && (window.ShadyCSS.CustomStyleInterface = Zc);
    var rb = window.customElements,
      ya = window.HTMLImports;
    window.WebComponents = window.WebComponents || {};
    if (rb && rb.polyfillWrapFlushCallback) {
      var za,
        $c = function () {
          if (za) {
            var a = za;
            za = null;
            a();
            return !0;
          }
        },
        ad = ya.whenReady;
      rb.polyfillWrapFlushCallback(function (a) {
        za = a;
        ad($c);
      });
      ya.whenReady = function (a) {
        ad(function () {
          $c() ? ya.whenReady(a) : a();
        });
      };
    }
    ya.whenReady(function () {
      requestAnimationFrame(function () {
        window.WebComponents.ready = !0;
        document.dispatchEvent(
          new CustomEvent('WebComponentsReady', { bubbles: !0 })
        );
      });
    });
    var bd = document.createElement('style');
    bd.textContent =
      'body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n';
    var cd = document.querySelector('head');
    cd.insertBefore(bd, cd.firstChild);
  })();
}).call(this);

//# sourceMappingURL=webcomponents-hi-sd-ce.js.map
