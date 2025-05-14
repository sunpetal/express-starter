(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === 'childList')
        for (const i of o.addedNodes) i.tagName === 'LINK' && i.rel === 'modulepreload' && s(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : r.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    );
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = n(r);
    fetch(r.href, o);
  }
})();
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Ks(e) {
  const t = Object.create(null);
  for (const n of e.split(',')) t[n] = 1;
  return (n) => n in t;
}
const re = {},
  Lt = [],
  Je = () => {},
  Pl = () => !1,
  $n = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  zs = (e) => e.startsWith('onUpdate:'),
  pe = Object.assign,
  Js = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Nl = Object.prototype.hasOwnProperty,
  Y = (e, t) => Nl.call(e, t),
  $ = Array.isArray,
  Mt = (e) => kn(e) === '[object Map]',
  Fo = (e) => kn(e) === '[object Set]',
  q = (e) => typeof e == 'function',
  ae = (e) => typeof e == 'string',
  ht = (e) => typeof e == 'symbol',
  le = (e) => e !== null && typeof e == 'object',
  Io = (e) => (le(e) || q(e)) && q(e.then) && q(e.catch),
  Lo = Object.prototype.toString,
  kn = (e) => Lo.call(e),
  Fl = (e) => kn(e).slice(8, -1),
  Mo = (e) => kn(e) === '[object Object]',
  Gs = (e) => ae(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Gt = Ks(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  qn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Il = /-(\w)/g,
  Me = qn((e) => e.replace(Il, (t, n) => (n ? n.toUpperCase() : ''))),
  Ll = /\B([A-Z])/g,
  Ct = qn((e) => e.replace(Ll, '-$1').toLowerCase()),
  Vn = qn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  is = qn((e) => (e ? `on${Vn(e)}` : '')),
  dt = (e, t) => !Object.is(e, t),
  ls = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  Do = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: s, value: n });
  },
  Ml = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let vr;
const Wn = () =>
  vr ||
  (vr =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {});
function Xs(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = ae(s) ? Bl(s) : Xs(s);
      if (r) for (const o in r) t[o] = r[o];
    }
    return t;
  } else if (ae(e) || le(e)) return e;
}
const Dl = /;(?![^(]*\))/g,
  jl = /:([^]+)/,
  Ul = /\/\*[^]*?\*\//g;
function Bl(e) {
  const t = {};
  return (
    e
      .replace(Ul, '')
      .split(Dl)
      .forEach((n) => {
        if (n) {
          const s = n.split(jl);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function Qs(e) {
  let t = '';
  if (ae(e)) t = e;
  else if ($(e))
    for (let n = 0; n < e.length; n++) {
      const s = Qs(e[n]);
      s && (t += s + ' ');
    }
  else if (le(e)) for (const n in e) e[n] && (t += n + ' ');
  return t.trim();
}
const Hl = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  $l = Ks(Hl);
function jo(e) {
  return !!e || e === '';
}
const Uo = (e) => !!(e && e.__v_isRef === !0),
  Bo = (e) =>
    ae(e)
      ? e
      : e == null
        ? ''
        : $(e) || (le(e) && (e.toString === Lo || !q(e.toString)))
          ? Uo(e)
            ? Bo(e.value)
            : JSON.stringify(e, Ho, 2)
          : String(e),
  Ho = (e, t) =>
    Uo(t)
      ? Ho(e, t.value)
      : Mt(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, r], o) => ((n[cs(s, o) + ' =>'] = r), n),
              {}
            ),
          }
        : Fo(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => cs(n)) }
          : ht(t)
            ? cs(t)
            : le(t) && !$(t) && !Mo(t)
              ? String(t)
              : t,
  cs = (e, t = '') => {
    var n;
    return ht(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let ye;
class $o {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = ye),
      !t && ye && (this.index = (ye.scopes || (ye.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = ye;
      try {
        return (ye = this), t();
      } finally {
        ye = n;
      }
    }
  }
  on() {
    ye = this;
  }
  off() {
    ye = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function ko(e) {
  return new $o(e);
}
function qo() {
  return ye;
}
function kl(e, t = !1) {
  ye && ye.cleanups.push(e);
}
let se;
const us = new WeakSet();
class Vo {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      ye && ye.active && ye.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && ((this.flags &= -65), us.has(this) && (us.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Ko(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), xr(this), zo(this);
    const t = se,
      n = De;
    (se = this), (De = !0);
    try {
      return this.fn();
    } finally {
      Jo(this), (se = t), (De = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) er(t);
      (this.deps = this.depsTail = void 0),
        xr(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64 ? us.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    vs(this) && this.run();
  }
  get dirty() {
    return vs(this);
  }
}
let Wo = 0,
  Xt,
  Qt;
function Ko(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = Qt), (Qt = e);
    return;
  }
  (e.next = Xt), (Xt = e);
}
function Ys() {
  Wo++;
}
function Zs() {
  if (--Wo > 0) return;
  if (Qt) {
    let t = Qt;
    for (Qt = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; Xt; ) {
    let t = Xt;
    for (Xt = void 0; t; ) {
      const n = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function zo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1), (t.prevActiveLink = t.dep.activeLink), (t.dep.activeLink = t);
}
function Jo(e) {
  let t,
    n = e.depsTail,
    s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), er(s), ql(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = r);
  }
  (e.deps = t), (e.depsTail = n);
}
function vs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Go(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function Go(e) {
  if ((e.flags & 4 && !(e.flags & 16)) || ((e.flags &= -17), e.globalVersion === on)) return;
  e.globalVersion = on;
  const t = e.dep;
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !vs(e))) {
    e.flags &= -3;
    return;
  }
  const n = se,
    s = De;
  (se = e), (De = !0);
  try {
    zo(e);
    const r = e.fn(e._value);
    (t.version === 0 || dt(r, e._value)) && ((e._value = r), t.version++);
  } catch (r) {
    throw (t.version++, r);
  } finally {
    (se = n), (De = s), Jo(e), (e.flags &= -3);
  }
}
function er(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (
    (s && ((s.nextSub = r), (e.prevSub = void 0)),
    r && ((r.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep) er(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ql(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)), n && ((n.prevDep = t), (e.nextDep = void 0));
}
let De = !0;
const Xo = [];
function pt() {
  Xo.push(De), (De = !1);
}
function mt() {
  const e = Xo.pop();
  De = e === void 0 ? !0 : e;
}
function xr(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = se;
    se = void 0;
    try {
      t();
    } finally {
      se = n;
    }
  }
}
let on = 0;
class Vl {
  constructor(t, n) {
    (this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0);
  }
}
class tr {
  constructor(t) {
    (this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0);
  }
  track(t) {
    if (!se || !De || se === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== se)
      (n = this.activeLink = new Vl(se, this)),
        se.deps
          ? ((n.prevDep = se.depsTail), (se.depsTail.nextDep = n), (se.depsTail = n))
          : (se.deps = se.depsTail = n),
        Qo(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep;
      (s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = se.depsTail),
        (n.nextDep = void 0),
        (se.depsTail.nextDep = n),
        (se.depsTail = n),
        se.deps === n && (se.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, on++, this.notify(t);
  }
  notify(t) {
    Ys();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      Zs();
    }
  }
}
function Qo(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep) Qo(s);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const Nn = new WeakMap(),
  Et = Symbol(''),
  xs = Symbol(''),
  ln = Symbol('');
function de(e, t, n) {
  if (De && se) {
    let s = Nn.get(e);
    s || Nn.set(e, (s = new Map()));
    let r = s.get(n);
    r || (s.set(n, (r = new tr())), (r.map = s), (r.key = n)), r.track();
  }
}
function tt(e, t, n, s, r, o) {
  const i = Nn.get(e);
  if (!i) {
    on++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if ((Ys(), t === 'clear')) i.forEach(l);
  else {
    const c = $(e),
      a = c && Gs(n);
    if (c && n === 'length') {
      const u = Number(s);
      i.forEach((f, p) => {
        (p === 'length' || p === ln || (!ht(p) && p >= u)) && l(f);
      });
    } else
      switch (((n !== void 0 || i.has(void 0)) && l(i.get(n)), a && l(i.get(ln)), t)) {
        case 'add':
          c ? a && l(i.get('length')) : (l(i.get(Et)), Mt(e) && l(i.get(xs)));
          break;
        case 'delete':
          c || (l(i.get(Et)), Mt(e) && l(i.get(xs)));
          break;
        case 'set':
          Mt(e) && l(i.get(Et));
          break;
      }
  }
  Zs();
}
function Wl(e, t) {
  const n = Nn.get(e);
  return n && n.get(t);
}
function Pt(e) {
  const t = G(e);
  return t === e ? t : (de(t, 'iterate', ln), je(e) ? t : t.map(be));
}
function nr(e) {
  return de((e = G(e)), 'iterate', ln), e;
}
const Kl = {
  __proto__: null,
  [Symbol.iterator]() {
    return as(this, Symbol.iterator, be);
  },
  concat(...e) {
    return Pt(this).concat(...e.map((t) => ($(t) ? Pt(t) : t)));
  },
  entries() {
    return as(this, 'entries', (e) => ((e[1] = be(e[1])), e));
  },
  every(e, t) {
    return Ye(this, 'every', e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ye(this, 'filter', e, t, (n) => n.map(be), arguments);
  },
  find(e, t) {
    return Ye(this, 'find', e, t, be, arguments);
  },
  findIndex(e, t) {
    return Ye(this, 'findIndex', e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ye(this, 'findLast', e, t, be, arguments);
  },
  findLastIndex(e, t) {
    return Ye(this, 'findLastIndex', e, t, void 0, arguments);
  },
  forEach(e, t) {
    return Ye(this, 'forEach', e, t, void 0, arguments);
  },
  includes(...e) {
    return fs(this, 'includes', e);
  },
  indexOf(...e) {
    return fs(this, 'indexOf', e);
  },
  join(e) {
    return Pt(this).join(e);
  },
  lastIndexOf(...e) {
    return fs(this, 'lastIndexOf', e);
  },
  map(e, t) {
    return Ye(this, 'map', e, t, void 0, arguments);
  },
  pop() {
    return Vt(this, 'pop');
  },
  push(...e) {
    return Vt(this, 'push', e);
  },
  reduce(e, ...t) {
    return Or(this, 'reduce', e, t);
  },
  reduceRight(e, ...t) {
    return Or(this, 'reduceRight', e, t);
  },
  shift() {
    return Vt(this, 'shift');
  },
  some(e, t) {
    return Ye(this, 'some', e, t, void 0, arguments);
  },
  splice(...e) {
    return Vt(this, 'splice', e);
  },
  toReversed() {
    return Pt(this).toReversed();
  },
  toSorted(e) {
    return Pt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Pt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Vt(this, 'unshift', e);
  },
  values() {
    return as(this, 'values', be);
  },
};
function as(e, t, n) {
  const s = nr(e),
    r = s[t]();
  return (
    s !== e &&
      !je(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const o = r._next();
        return o.value && (o.value = n(o.value)), o;
      })),
    r
  );
}
const zl = Array.prototype;
function Ye(e, t, n, s, r, o) {
  const i = nr(e),
    l = i !== e && !je(e),
    c = i[t];
  if (c !== zl[t]) {
    const f = c.apply(e, o);
    return l ? be(f) : f;
  }
  let a = n;
  i !== e &&
    (l
      ? (a = function (f, p) {
          return n.call(this, be(f), p, e);
        })
      : n.length > 2 &&
        (a = function (f, p) {
          return n.call(this, f, p, e);
        }));
  const u = c.call(i, a, s);
  return l && r ? r(u) : u;
}
function Or(e, t, n, s) {
  const r = nr(e);
  let o = n;
  return (
    r !== e &&
      (je(e)
        ? n.length > 3 &&
          (o = function (i, l, c) {
            return n.call(this, i, l, c, e);
          })
        : (o = function (i, l, c) {
            return n.call(this, i, be(l), c, e);
          })),
    r[t](o, ...s)
  );
}
function fs(e, t, n) {
  const s = G(e);
  de(s, 'iterate', ln);
  const r = s[t](...n);
  return (r === -1 || r === !1) && or(n[0]) ? ((n[0] = G(n[0])), s[t](...n)) : r;
}
function Vt(e, t, n = []) {
  pt(), Ys();
  const s = G(e)[t].apply(e, n);
  return Zs(), mt(), s;
}
const Jl = Ks('__proto__,__v_isRef,__isVue'),
  Yo = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(ht)
  );
function Gl(e) {
  ht(e) || (e = String(e));
  const t = G(this);
  return de(t, 'has', e), t.hasOwnProperty(e);
}
class Zo {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, s) {
    if (n === '__v_skip') return t.__v_skip;
    const r = this._isReadonly,
      o = this._isShallow;
    if (n === '__v_isReactive') return !r;
    if (n === '__v_isReadonly') return r;
    if (n === '__v_isShallow') return o;
    if (n === '__v_raw')
      return s === (r ? (o ? oc : si) : o ? ni : ti).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0;
    const i = $(t);
    if (!r) {
      let c;
      if (i && (c = Kl[n])) return c;
      if (n === 'hasOwnProperty') return Gl;
    }
    const l = Reflect.get(t, n, ce(t) ? t : s);
    return (ht(n) ? Yo.has(n) : Jl(n)) || (r || de(t, 'get', n), o)
      ? l
      : ce(l)
        ? i && Gs(n)
          ? l
          : l.value
        : le(l)
          ? r
            ? oi(l)
            : mn(l)
          : l;
  }
}
class ei extends Zo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let o = t[n];
    if (!this._isShallow) {
      const c = xt(o);
      if ((!je(s) && !xt(s) && ((o = G(o)), (s = G(s))), !$(t) && ce(o) && !ce(s)))
        return c ? !1 : ((o.value = s), !0);
    }
    const i = $(t) && Gs(n) ? Number(n) < t.length : Y(t, n),
      l = Reflect.set(t, n, s, ce(t) ? t : r);
    return t === G(r) && (i ? dt(s, o) && tt(t, 'set', n, s) : tt(t, 'add', n, s)), l;
  }
  deleteProperty(t, n) {
    const s = Y(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && tt(t, 'delete', n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!ht(n) || !Yo.has(n)) && de(t, 'has', n), s;
  }
  ownKeys(t) {
    return de(t, 'iterate', $(t) ? 'length' : Et), Reflect.ownKeys(t);
  }
}
class Xl extends Zo {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Ql = new ei(),
  Yl = new Xl(),
  Zl = new ei(!0);
const Os = (e) => e,
  En = (e) => Reflect.getPrototypeOf(e);
function ec(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      o = G(r),
      i = Mt(o),
      l = e === 'entries' || (e === Symbol.iterator && i),
      c = e === 'keys' && i,
      a = r[e](...s),
      u = n ? Os : t ? Cs : be;
    return (
      !t && de(o, 'iterate', c ? xs : Et),
      {
        next() {
          const { value: f, done: p } = a.next();
          return p ? { value: f, done: p } : { value: l ? [u(f[0]), u(f[1])] : u(f), done: p };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Sn(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this;
  };
}
function tc(e, t) {
  const n = {
    get(r) {
      const o = this.__v_raw,
        i = G(o),
        l = G(r);
      e || (dt(r, l) && de(i, 'get', r), de(i, 'get', l));
      const { has: c } = En(i),
        a = t ? Os : e ? Cs : be;
      if (c.call(i, r)) return a(o.get(r));
      if (c.call(i, l)) return a(o.get(l));
      o !== i && o.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && de(G(r), 'iterate', Et), Reflect.get(r, 'size', r);
    },
    has(r) {
      const o = this.__v_raw,
        i = G(o),
        l = G(r);
      return (
        e || (dt(r, l) && de(i, 'has', r), de(i, 'has', l)),
        r === l ? o.has(r) : o.has(r) || o.has(l)
      );
    },
    forEach(r, o) {
      const i = this,
        l = i.__v_raw,
        c = G(l),
        a = t ? Os : e ? Cs : be;
      return !e && de(c, 'iterate', Et), l.forEach((u, f) => r.call(o, a(u), a(f), i));
    },
  };
  return (
    pe(
      n,
      e
        ? { add: Sn('add'), set: Sn('set'), delete: Sn('delete'), clear: Sn('clear') }
        : {
            add(r) {
              !t && !je(r) && !xt(r) && (r = G(r));
              const o = G(this);
              return En(o).has.call(o, r) || (o.add(r), tt(o, 'add', r, r)), this;
            },
            set(r, o) {
              !t && !je(o) && !xt(o) && (o = G(o));
              const i = G(this),
                { has: l, get: c } = En(i);
              let a = l.call(i, r);
              a || ((r = G(r)), (a = l.call(i, r)));
              const u = c.call(i, r);
              return i.set(r, o), a ? dt(o, u) && tt(i, 'set', r, o) : tt(i, 'add', r, o), this;
            },
            delete(r) {
              const o = G(this),
                { has: i, get: l } = En(o);
              let c = i.call(o, r);
              c || ((r = G(r)), (c = i.call(o, r))), l && l.call(o, r);
              const a = o.delete(r);
              return c && tt(o, 'delete', r, void 0), a;
            },
            clear() {
              const r = G(this),
                o = r.size !== 0,
                i = r.clear();
              return o && tt(r, 'clear', void 0, void 0), i;
            },
          }
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      n[r] = ec(r, e, t);
    }),
    n
  );
}
function sr(e, t) {
  const n = tc(e, t);
  return (s, r, o) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
        ? e
        : r === '__v_raw'
          ? s
          : Reflect.get(Y(n, r) && r in s ? n : s, r, o);
}
const nc = { get: sr(!1, !1) },
  sc = { get: sr(!1, !0) },
  rc = { get: sr(!0, !1) };
const ti = new WeakMap(),
  ni = new WeakMap(),
  si = new WeakMap(),
  oc = new WeakMap();
function ic(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1;
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2;
    default:
      return 0;
  }
}
function lc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ic(Fl(e));
}
function mn(e) {
  return xt(e) ? e : rr(e, !1, Ql, nc, ti);
}
function ri(e) {
  return rr(e, !1, Zl, sc, ni);
}
function oi(e) {
  return rr(e, !0, Yl, rc, si);
}
function rr(e, t, n, s, r) {
  if (!le(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = r.get(e);
  if (o) return o;
  const i = lc(e);
  if (i === 0) return e;
  const l = new Proxy(e, i === 2 ? s : n);
  return r.set(e, l), l;
}
function St(e) {
  return xt(e) ? St(e.__v_raw) : !!(e && e.__v_isReactive);
}
function xt(e) {
  return !!(e && e.__v_isReadonly);
}
function je(e) {
  return !!(e && e.__v_isShallow);
}
function or(e) {
  return e ? !!e.__v_raw : !1;
}
function G(e) {
  const t = e && e.__v_raw;
  return t ? G(t) : e;
}
function ir(e) {
  return !Y(e, '__v_skip') && Object.isExtensible(e) && Do(e, '__v_skip', !0), e;
}
const be = (e) => (le(e) ? mn(e) : e),
  Cs = (e) => (le(e) ? oi(e) : e);
function ce(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Kn(e) {
  return ii(e, !1);
}
function cc(e) {
  return ii(e, !0);
}
function ii(e, t) {
  return ce(e) ? e : new uc(e, t);
}
class uc {
  constructor(t, n) {
    (this.dep = new tr()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : G(t)),
      (this._value = n ? t : be(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || je(t) || xt(t);
    (t = s ? t : G(t)),
      dt(t, n) && ((this._rawValue = t), (this._value = s ? t : be(t)), this.dep.trigger());
  }
}
function Dt(e) {
  return ce(e) ? e.value : e;
}
const ac = {
  get: (e, t, n) => (t === '__v_raw' ? e : Dt(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const r = e[t];
    return ce(r) && !ce(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function li(e) {
  return St(e) ? e : new Proxy(e, ac);
}
function fc(e) {
  const t = $(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = hc(e, n);
  return t;
}
class dc {
  constructor(t, n, s) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = s),
      (this.__v_isRef = !0),
      (this._value = void 0);
  }
  get value() {
    const t = this._object[this._key];
    return (this._value = t === void 0 ? this._defaultValue : t);
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Wl(G(this._object), this._key);
  }
}
function hc(e, t, n) {
  const s = e[t];
  return ce(s) ? s : new dc(e, t, n);
}
class pc {
  constructor(t, n, s) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new tr(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = on - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && se !== this)) return Ko(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Go(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function mc(e, t, n = !1) {
  let s, r;
  return q(e) ? (s = e) : ((s = e.get), (r = e.set)), new pc(s, r, n);
}
const Rn = {},
  Fn = new WeakMap();
let _t;
function gc(e, t = !1, n = _t) {
  if (n) {
    let s = Fn.get(n);
    s || Fn.set(n, (s = [])), s.push(e);
  }
}
function yc(e, t, n = re) {
  const { immediate: s, deep: r, once: o, scheduler: i, augmentJob: l, call: c } = n,
    a = (I) => (r ? I : je(I) || r === !1 || r === 0 ? ft(I, 1) : ft(I));
  let u,
    f,
    p,
    m,
    b = !1,
    S = !1;
  if (
    (ce(e)
      ? ((f = () => e.value), (b = je(e)))
      : St(e)
        ? ((f = () => a(e)), (b = !0))
        : $(e)
          ? ((S = !0),
            (b = e.some((I) => St(I) || je(I))),
            (f = () =>
              e.map((I) => {
                if (ce(I)) return I.value;
                if (St(I)) return a(I);
                if (q(I)) return c ? c(I, 2) : I();
              })))
          : q(e)
            ? t
              ? (f = c ? () => c(e, 2) : e)
              : (f = () => {
                  if (p) {
                    pt();
                    try {
                      p();
                    } finally {
                      mt();
                    }
                  }
                  const I = _t;
                  _t = u;
                  try {
                    return c ? c(e, 3, [m]) : e(m);
                  } finally {
                    _t = I;
                  }
                })
            : (f = Je),
    t && r)
  ) {
    const I = f,
      j = r === !0 ? 1 / 0 : r;
    f = () => ft(I(), j);
  }
  const v = qo(),
    T = () => {
      u.stop(), v && v.active && Js(v.effects, u);
    };
  if (o && t) {
    const I = t;
    t = (...j) => {
      I(...j), T();
    };
  }
  let A = S ? new Array(e.length).fill(Rn) : Rn;
  const N = (I) => {
    if (!(!(u.flags & 1) || (!u.dirty && !I)))
      if (t) {
        const j = u.run();
        if (r || b || (S ? j.some((ee, z) => dt(ee, A[z])) : dt(j, A))) {
          p && p();
          const ee = _t;
          _t = u;
          try {
            const z = [j, A === Rn ? void 0 : S && A[0] === Rn ? [] : A, m];
            c ? c(t, 3, z) : t(...z), (A = j);
          } finally {
            _t = ee;
          }
        }
      } else u.run();
  };
  return (
    l && l(N),
    (u = new Vo(f)),
    (u.scheduler = i ? () => i(N, !1) : N),
    (m = (I) => gc(I, !1, u)),
    (p = u.onStop =
      () => {
        const I = Fn.get(u);
        if (I) {
          if (c) c(I, 4);
          else for (const j of I) j();
          Fn.delete(u);
        }
      }),
    t ? (s ? N(!0) : (A = u.run())) : i ? i(N.bind(null, !0), !0) : u.run(),
    (T.pause = u.pause.bind(u)),
    (T.resume = u.resume.bind(u)),
    (T.stop = T),
    T
  );
}
function ft(e, t = 1 / 0, n) {
  if (t <= 0 || !le(e) || e.__v_skip || ((n = n || new Set()), n.has(e))) return e;
  if ((n.add(e), t--, ce(e))) ft(e.value, t, n);
  else if ($(e)) for (let s = 0; s < e.length; s++) ft(e[s], t, n);
  else if (Fo(e) || Mt(e))
    e.forEach((s) => {
      ft(s, t, n);
    });
  else if (Mo(e)) {
    for (const s in e) ft(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && ft(e[s], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function gn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    zn(r, t, n);
  }
}
function Xe(e, t, n, s) {
  if (q(e)) {
    const r = gn(e, t, n, s);
    return (
      r &&
        Io(r) &&
        r.catch((o) => {
          zn(o, t, n);
        }),
      r
    );
  }
  if ($(e)) {
    const r = [];
    for (let o = 0; o < e.length; o++) r.push(Xe(e[o], t, n, s));
    return r;
  }
}
function zn(e, t, n, s = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: o, throwUnhandledErrorInProduction: i } = (t && t.appContext.config) || re;
  if (t) {
    let l = t.parent;
    const c = t.proxy,
      a = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let f = 0; f < u.length; f++) if (u[f](e, c, a) === !1) return;
      }
      l = l.parent;
    }
    if (o) {
      pt(), gn(o, null, 10, [e, c, a]), mt();
      return;
    }
  }
  bc(e, n, r, s, i);
}
function bc(e, t, n, s = !0, r = !1) {
  if (r) throw e;
  console.error(e);
}
const _e = [];
let Ke = -1;
const jt = [];
let ct = null,
  Ft = 0;
const ci = Promise.resolve();
let In = null;
function lr(e) {
  const t = In || ci;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function _c(e) {
  let t = Ke + 1,
    n = _e.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = _e[s],
      o = cn(r);
    o < e || (o === e && r.flags & 2) ? (t = s + 1) : (n = s);
  }
  return t;
}
function cr(e) {
  if (!(e.flags & 1)) {
    const t = cn(e),
      n = _e[_e.length - 1];
    !n || (!(e.flags & 2) && t >= cn(n)) ? _e.push(e) : _e.splice(_c(t), 0, e),
      (e.flags |= 1),
      ui();
  }
}
function ui() {
  In || (In = ci.then(fi));
}
function wc(e) {
  $(e)
    ? jt.push(...e)
    : ct && e.id === -1
      ? ct.splice(Ft + 1, 0, e)
      : e.flags & 1 || (jt.push(e), (e.flags |= 1)),
    ui();
}
function Cr(e, t, n = Ke + 1) {
  for (; n < _e.length; n++) {
    const s = _e[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue;
      _e.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ai(e) {
  if (jt.length) {
    const t = [...new Set(jt)].sort((n, s) => cn(n) - cn(s));
    if (((jt.length = 0), ct)) {
      ct.push(...t);
      return;
    }
    for (ct = t, Ft = 0; Ft < ct.length; Ft++) {
      const n = ct[Ft];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (ct = null), (Ft = 0);
  }
}
const cn = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function fi(e) {
  try {
    for (Ke = 0; Ke < _e.length; Ke++) {
      const t = _e[Ke];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2), gn(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ke < _e.length; Ke++) {
      const t = _e[Ke];
      t && (t.flags &= -2);
    }
    (Ke = -1), (_e.length = 0), ai(), (In = null), (_e.length || jt.length) && fi();
  }
}
let Le = null,
  di = null;
function Ln(e) {
  const t = Le;
  return (Le = e), (di = (e && e.type.__scopeId) || null), t;
}
function As(e, t = Le, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && Ur(-1);
    const o = Ln(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Ln(o), s._d && Ur(1);
    }
    return i;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function yt(e, t, n, s) {
  const r = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    o && (l.oldValue = o[i].value);
    let c = l.dir[s];
    c && (pt(), Xe(c, n, 8, [e.el, l, e, t]), mt());
  }
}
const Ec = Symbol('_vte'),
  Sc = (e) => e.__isTeleport;
function ur(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), ur(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
/*! #__NO_SIDE_EFFECTS__ */ function ar(e, t) {
  return q(e) ? pe({ name: e.name }, t, { setup: e }) : e;
}
function hi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0];
}
function Mn(e, t, n, s, r = !1) {
  if ($(e)) {
    e.forEach((b, S) => Mn(b, t && ($(t) ? t[S] : t), n, s, r));
    return;
  }
  if (Yt(s) && !r) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      Mn(e, t, n, s.component.subTree);
    return;
  }
  const o = s.shapeFlag & 4 ? mr(s.component) : s.el,
    i = r ? null : o,
    { i: l, r: c } = e,
    a = t && t.r,
    u = l.refs === re ? (l.refs = {}) : l.refs,
    f = l.setupState,
    p = G(f),
    m = f === re ? () => !1 : (b) => Y(p, b);
  if (
    (a != null &&
      a !== c &&
      (ae(a) ? ((u[a] = null), m(a) && (f[a] = null)) : ce(a) && (a.value = null)),
    q(c))
  )
    gn(c, l, 12, [i, u]);
  else {
    const b = ae(c),
      S = ce(c);
    if (b || S) {
      const v = () => {
        if (e.f) {
          const T = b ? (m(c) ? f[c] : u[c]) : c.value;
          r
            ? $(T) && Js(T, o)
            : $(T)
              ? T.includes(o) || T.push(o)
              : b
                ? ((u[c] = [o]), m(c) && (f[c] = u[c]))
                : ((c.value = [o]), e.k && (u[e.k] = c.value));
        } else b ? ((u[c] = i), m(c) && (f[c] = i)) : S && ((c.value = i), e.k && (u[e.k] = i));
      };
      i ? ((v.id = -1), Te(v, n)) : v();
    }
  }
}
Wn().requestIdleCallback;
Wn().cancelIdleCallback;
const Yt = (e) => !!e.type.__asyncLoader,
  pi = (e) => e.type.__isKeepAlive;
function Rc(e, t) {
  mi(e, 'a', t);
}
function vc(e, t) {
  mi(e, 'da', t);
}
function mi(e, t, n = fe) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((Jn(t, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent; ) pi(r.parent.vnode) && xc(s, t, n, r), (r = r.parent);
  }
}
function xc(e, t, n, s) {
  const r = Jn(t, e, s, !0);
  gi(() => {
    Js(s[t], r);
  }, n);
}
function Jn(e, t, n = fe, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          pt();
          const l = yn(n),
            c = Xe(t, n, e, i);
          return l(), mt(), c;
        });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const st =
    (e) =>
    (t, n = fe) => {
      (!fn || e === 'sp') && Jn(e, (...s) => t(...s), n);
    },
  Oc = st('bm'),
  Cc = st('m'),
  Ac = st('bu'),
  Tc = st('u'),
  Pc = st('bum'),
  gi = st('um'),
  Nc = st('sp'),
  Fc = st('rtg'),
  Ic = st('rtc');
function Lc(e, t = fe) {
  Jn('ec', e, t);
}
const Mc = 'components';
function Ar(e, t) {
  return jc(Mc, e, !0, t) || e;
}
const Dc = Symbol.for('v-ndc');
function jc(e, t, n = !0, s = !1) {
  const r = Le || fe;
  if (r) {
    const o = r.type;
    {
      const l = xu(o, !1);
      if (l && (l === t || l === Me(t) || l === Vn(Me(t)))) return o;
    }
    const i = Tr(r[e] || o[e], t) || Tr(r.appContext[e], t);
    return !i && s ? o : i;
  }
}
function Tr(e, t) {
  return e && (e[t] || e[Me(t)] || e[Vn(Me(t))]);
}
const Ts = (e) => (e ? (Di(e) ? mr(e) : Ts(e.parent)) : null),
  Zt = pe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ts(e.parent),
    $root: (e) => Ts(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => bi(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        cr(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = lr.bind(e.proxy)),
    $watch: (e) => ou.bind(e),
  }),
  ds = (e, t) => e !== re && !e.__isScriptSetup && Y(e, t),
  Uc = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0;
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: o,
        accessCache: i,
        type: l,
        appContext: c,
      } = e;
      let a;
      if (t[0] !== '$') {
        const m = i[t];
        if (m !== void 0)
          switch (m) {
            case 1:
              return s[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (ds(s, t)) return (i[t] = 1), s[t];
          if (r !== re && Y(r, t)) return (i[t] = 2), r[t];
          if ((a = e.propsOptions[0]) && Y(a, t)) return (i[t] = 3), o[t];
          if (n !== re && Y(n, t)) return (i[t] = 4), n[t];
          Ps && (i[t] = 0);
        }
      }
      const u = Zt[t];
      let f, p;
      if (u) return t === '$attrs' && de(e.attrs, 'get', ''), u(e);
      if ((f = l.__cssModules) && (f = f[t])) return f;
      if (n !== re && Y(n, t)) return (i[t] = 4), n[t];
      if (((p = c.config.globalProperties), Y(p, t))) return p[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: o } = e;
      return ds(r, t)
        ? ((r[t] = n), !0)
        : s !== re && Y(s, t)
          ? ((s[t] = n), !0)
          : Y(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((o[t] = n), !0);
    },
    has(
      { _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o } },
      i
    ) {
      let l;
      return (
        !!n[i] ||
        (e !== re && Y(e, i)) ||
        ds(t, i) ||
        ((l = o[0]) && Y(l, i)) ||
        Y(s, i) ||
        Y(Zt, i) ||
        Y(r.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : Y(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function Pr(e) {
  return $(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let Ps = !0;
function Bc(e) {
  const t = bi(e),
    n = e.proxy,
    s = e.ctx;
  (Ps = !1), t.beforeCreate && Nr(t.beforeCreate, e, 'bc');
  const {
    data: r,
    computed: o,
    methods: i,
    watch: l,
    provide: c,
    inject: a,
    created: u,
    beforeMount: f,
    mounted: p,
    beforeUpdate: m,
    updated: b,
    activated: S,
    deactivated: v,
    beforeDestroy: T,
    beforeUnmount: A,
    destroyed: N,
    unmounted: I,
    render: j,
    renderTracked: ee,
    renderTriggered: z,
    errorCaptured: V,
    serverPrefetch: K,
    expose: ie,
    inheritAttrs: me,
    components: Oe,
    directives: we,
    filters: gt,
  } = t;
  if ((a && Hc(a, s, null), i))
    for (const W in i) {
      const X = i[W];
      q(X) && (s[W] = X.bind(n));
    }
  if (r) {
    const W = r.call(n, n);
    le(W) && (e.data = mn(W));
  }
  if (((Ps = !0), o))
    for (const W in o) {
      const X = o[W],
        Qe = q(X) ? X.bind(n, n) : q(X.get) ? X.get.bind(n, n) : Je,
        ot = !q(X) && q(X.set) ? X.set.bind(n) : Je,
        He = Ie({ get: Qe, set: ot });
      Object.defineProperty(s, W, {
        enumerable: !0,
        configurable: !0,
        get: () => He.value,
        set: (Ee) => (He.value = Ee),
      });
    }
  if (l) for (const W in l) yi(l[W], s, n, W);
  if (c) {
    const W = q(c) ? c.call(n) : c;
    Reflect.ownKeys(W).forEach((X) => {
      vn(X, W[X]);
    });
  }
  u && Nr(u, e, 'c');
  function oe(W, X) {
    $(X) ? X.forEach((Qe) => W(Qe.bind(n))) : X && W(X.bind(n));
  }
  if (
    (oe(Oc, f),
    oe(Cc, p),
    oe(Ac, m),
    oe(Tc, b),
    oe(Rc, S),
    oe(vc, v),
    oe(Lc, V),
    oe(Ic, ee),
    oe(Fc, z),
    oe(Pc, A),
    oe(gi, I),
    oe(Nc, K),
    $(ie))
  )
    if (ie.length) {
      const W = e.exposed || (e.exposed = {});
      ie.forEach((X) => {
        Object.defineProperty(W, X, { get: () => n[X], set: (Qe) => (n[X] = Qe) });
      });
    } else e.exposed || (e.exposed = {});
  j && e.render === Je && (e.render = j),
    me != null && (e.inheritAttrs = me),
    Oe && (e.components = Oe),
    we && (e.directives = we),
    K && hi(e);
}
function Hc(e, t, n = Je) {
  $(e) && (e = Ns(e));
  for (const s in e) {
    const r = e[s];
    let o;
    le(r)
      ? 'default' in r
        ? (o = Ge(r.from || s, r.default, !0))
        : (o = Ge(r.from || s))
      : (o = Ge(r)),
      ce(o)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i),
          })
        : (t[s] = o);
  }
}
function Nr(e, t, n) {
  Xe($(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function yi(e, t, n, s) {
  let r = s.includes('.') ? Fi(n, s) : () => n[s];
  if (ae(e)) {
    const o = t[e];
    q(o) && en(r, o);
  } else if (q(e)) en(r, e.bind(n));
  else if (le(e))
    if ($(e)) e.forEach((o) => yi(o, t, n, s));
    else {
      const o = q(e.handler) ? e.handler.bind(n) : t[e.handler];
      q(o) && en(r, o, e);
    }
}
function bi(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    l = o.get(t);
  let c;
  return (
    l
      ? (c = l)
      : !r.length && !n && !s
        ? (c = t)
        : ((c = {}), r.length && r.forEach((a) => Dn(c, a, i, !0)), Dn(c, t, i)),
    le(t) && o.set(t, c),
    c
  );
}
function Dn(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && Dn(e, o, n, !0), r && r.forEach((i) => Dn(e, i, n, !0));
  for (const i in t)
    if (!(s && i === 'expose')) {
      const l = $c[i] || (n && n[i]);
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const $c = {
  data: Fr,
  props: Ir,
  emits: Ir,
  methods: Jt,
  computed: Jt,
  beforeCreate: ge,
  created: ge,
  beforeMount: ge,
  mounted: ge,
  beforeUpdate: ge,
  updated: ge,
  beforeDestroy: ge,
  beforeUnmount: ge,
  destroyed: ge,
  unmounted: ge,
  activated: ge,
  deactivated: ge,
  errorCaptured: ge,
  serverPrefetch: ge,
  components: Jt,
  directives: Jt,
  watch: qc,
  provide: Fr,
  inject: kc,
};
function Fr(e, t) {
  return t
    ? e
      ? function () {
          return pe(q(e) ? e.call(this, this) : e, q(t) ? t.call(this, this) : t);
        }
      : t
    : e;
}
function kc(e, t) {
  return Jt(Ns(e), Ns(t));
}
function Ns(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ge(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Jt(e, t) {
  return e ? pe(Object.create(null), e, t) : t;
}
function Ir(e, t) {
  return e
    ? $(e) && $(t)
      ? [...new Set([...e, ...t])]
      : pe(Object.create(null), Pr(e), Pr(t ?? {}))
    : t;
}
function qc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = pe(Object.create(null), e);
  for (const s in t) n[s] = ge(e[s], t[s]);
  return n;
}
function _i() {
  return {
    app: null,
    config: {
      isNativeTag: Pl,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Vc = 0;
function Wc(e, t) {
  return function (s, r = null) {
    q(s) || (s = pe({}, s)), r != null && !le(r) && (r = null);
    const o = _i(),
      i = new WeakSet(),
      l = [];
    let c = !1;
    const a = (o.app = {
      _uid: Vc++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Cu,
      get config() {
        return o.config;
      },
      set config(u) {},
      use(u, ...f) {
        return (
          i.has(u) ||
            (u && q(u.install) ? (i.add(u), u.install(a, ...f)) : q(u) && (i.add(u), u(a, ...f))),
          a
        );
      },
      mixin(u) {
        return o.mixins.includes(u) || o.mixins.push(u), a;
      },
      component(u, f) {
        return f ? ((o.components[u] = f), a) : o.components[u];
      },
      directive(u, f) {
        return f ? ((o.directives[u] = f), a) : o.directives[u];
      },
      mount(u, f, p) {
        if (!c) {
          const m = a._ceVNode || Re(s, r);
          return (
            (m.appContext = o),
            p === !0 ? (p = 'svg') : p === !1 && (p = void 0),
            e(m, u, p),
            (c = !0),
            (a._container = u),
            (u.__vue_app__ = a),
            mr(m.component)
          );
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        c && (Xe(l, a._instance, 16), e(null, a._container), delete a._container.__vue_app__);
      },
      provide(u, f) {
        return (o.provides[u] = f), a;
      },
      runWithContext(u) {
        const f = Rt;
        Rt = a;
        try {
          return u();
        } finally {
          Rt = f;
        }
      },
    });
    return a;
  };
}
let Rt = null;
function vn(e, t) {
  if (fe) {
    let n = fe.provides;
    const s = fe.parent && fe.parent.provides;
    s === n && (n = fe.provides = Object.create(s)), (n[e] = t);
  }
}
function Ge(e, t, n = !1) {
  const s = fe || Le;
  if (s || Rt) {
    const r = Rt
      ? Rt._context.provides
      : s
        ? s.parent == null
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && q(t) ? t.call(s && s.proxy) : t;
  }
}
function Kc() {
  return !!(fe || Le || Rt);
}
const wi = {},
  Ei = () => Object.create(wi),
  Si = (e) => Object.getPrototypeOf(e) === wi;
function zc(e, t, n, s = !1) {
  const r = {},
    o = Ei();
  (e.propsDefaults = Object.create(null)), Ri(e, t, r, o);
  for (const i in e.propsOptions[0]) i in r || (r[i] = void 0);
  n ? (e.props = s ? r : ri(r)) : e.type.props ? (e.props = r) : (e.props = o), (e.attrs = o);
}
function Jc(e, t, n, s) {
  const {
      props: r,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    l = G(r),
    [c] = e.propsOptions;
  let a = !1;
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let p = u[f];
        if (Gn(e.emitsOptions, p)) continue;
        const m = t[p];
        if (c)
          if (Y(o, p)) m !== o[p] && ((o[p] = m), (a = !0));
          else {
            const b = Me(p);
            r[b] = Fs(c, l, b, m, e, !1);
          }
        else m !== o[p] && ((o[p] = m), (a = !0));
      }
    }
  } else {
    Ri(e, t, r, o) && (a = !0);
    let u;
    for (const f in l)
      (!t || (!Y(t, f) && ((u = Ct(f)) === f || !Y(t, u)))) &&
        (c
          ? n && (n[f] !== void 0 || n[u] !== void 0) && (r[f] = Fs(c, l, f, void 0, e, !0))
          : delete r[f]);
    if (o !== l) for (const f in o) (!t || !Y(t, f)) && (delete o[f], (a = !0));
  }
  a && tt(e.attrs, 'set', '');
}
function Ri(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1,
    l;
  if (t)
    for (let c in t) {
      if (Gt(c)) continue;
      const a = t[c];
      let u;
      r && Y(r, (u = Me(c)))
        ? !o || !o.includes(u)
          ? (n[u] = a)
          : ((l || (l = {}))[u] = a)
        : Gn(e.emitsOptions, c) || ((!(c in s) || a !== s[c]) && ((s[c] = a), (i = !0)));
    }
  if (o) {
    const c = G(n),
      a = l || re;
    for (let u = 0; u < o.length; u++) {
      const f = o[u];
      n[f] = Fs(r, c, f, a[f], e, !Y(a, f));
    }
  }
  return i;
}
function Fs(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const l = Y(i, 'default');
    if (l && s === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && q(c)) {
        const { propsDefaults: a } = r;
        if (n in a) s = a[n];
        else {
          const u = yn(r);
          (s = a[n] = c.call(null, t)), u();
        }
      } else s = c;
      r.ce && r.ce._setProp(n, s);
    }
    i[0] && (o && !l ? (s = !1) : i[1] && (s === '' || s === Ct(n)) && (s = !0));
  }
  return s;
}
const Gc = new WeakMap();
function vi(e, t, n = !1) {
  const s = n ? Gc : t.propsCache,
    r = s.get(e);
  if (r) return r;
  const o = e.props,
    i = {},
    l = [];
  let c = !1;
  if (!q(e)) {
    const u = (f) => {
      c = !0;
      const [p, m] = vi(f, t, !0);
      pe(i, p), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  if (!o && !c) return le(e) && s.set(e, Lt), Lt;
  if ($(o))
    for (let u = 0; u < o.length; u++) {
      const f = Me(o[u]);
      Lr(f) && (i[f] = re);
    }
  else if (o)
    for (const u in o) {
      const f = Me(u);
      if (Lr(f)) {
        const p = o[u],
          m = (i[f] = $(p) || q(p) ? { type: p } : pe({}, p)),
          b = m.type;
        let S = !1,
          v = !0;
        if ($(b))
          for (let T = 0; T < b.length; ++T) {
            const A = b[T],
              N = q(A) && A.name;
            if (N === 'Boolean') {
              S = !0;
              break;
            } else N === 'String' && (v = !1);
          }
        else S = q(b) && b.name === 'Boolean';
        (m[0] = S), (m[1] = v), (S || Y(m, 'default')) && l.push(f);
      }
    }
  const a = [i, l];
  return le(e) && s.set(e, a), a;
}
function Lr(e) {
  return e[0] !== '$' && !Gt(e);
}
const xi = (e) => e[0] === '_' || e === '$stable',
  fr = (e) => ($(e) ? e.map(ze) : [ze(e)]),
  Xc = (e, t, n) => {
    if (t._n) return t;
    const s = As((...r) => fr(t(...r)), n);
    return (s._c = !1), s;
  },
  Oi = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (xi(r)) continue;
      const o = e[r];
      if (q(o)) t[r] = Xc(r, o, s);
      else if (o != null) {
        const i = fr(o);
        t[r] = () => i;
      }
    }
  },
  Ci = (e, t) => {
    const n = fr(t);
    e.slots.default = () => n;
  },
  Ai = (e, t, n) => {
    for (const s in t) (n || s !== '_') && (e[s] = t[s]);
  },
  Qc = (e, t, n) => {
    const s = (e.slots = Ei());
    if (e.vnode.shapeFlag & 32) {
      const r = t._;
      r ? (Ai(s, t, n), n && Do(s, '_', r, !0)) : Oi(t, s);
    } else t && Ci(e, t);
  },
  Yc = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let o = !0,
      i = re;
    if (s.shapeFlag & 32) {
      const l = t._;
      l ? (n && l === 1 ? (o = !1) : Ai(r, t, n)) : ((o = !t.$stable), Oi(t, r)), (i = t);
    } else t && (Ci(e, t), (i = { default: 1 }));
    if (o) for (const l in r) !xi(l) && i[l] == null && delete r[l];
  },
  Te = du;
function Zc(e) {
  return eu(e);
}
function eu(e, t) {
  const n = Wn();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: o,
      createElement: i,
      createText: l,
      createComment: c,
      setText: a,
      setElementText: u,
      parentNode: f,
      nextSibling: p,
      setScopeId: m = Je,
      insertStaticContent: b,
    } = e,
    S = (d, h, g, _ = null, R = null, E = null, P = void 0, C = null, O = !!h.dynamicChildren) => {
      if (d === h) return;
      d && !Wt(d, h) && ((_ = w(d)), Ee(d, R, E, !0), (d = null)),
        h.patchFlag === -2 && ((O = !1), (h.dynamicChildren = null));
      const { type: x, ref: B, shapeFlag: L } = h;
      switch (x) {
        case Xn:
          v(d, h, g, _);
          break;
        case un:
          T(d, h, g, _);
          break;
        case ps:
          d == null && A(h, g, _, P);
          break;
        case Fe:
          Oe(d, h, g, _, R, E, P, C, O);
          break;
        default:
          L & 1
            ? j(d, h, g, _, R, E, P, C, O)
            : L & 6
              ? we(d, h, g, _, R, E, P, C, O)
              : (L & 64 || L & 128) && x.process(d, h, g, _, R, E, P, C, O, D);
      }
      B != null && R && Mn(B, d && d.ref, E, h || d, !h);
    },
    v = (d, h, g, _) => {
      if (d == null) s((h.el = l(h.children)), g, _);
      else {
        const R = (h.el = d.el);
        h.children !== d.children && a(R, h.children);
      }
    },
    T = (d, h, g, _) => {
      d == null ? s((h.el = c(h.children || '')), g, _) : (h.el = d.el);
    },
    A = (d, h, g, _) => {
      [d.el, d.anchor] = b(d.children, h, g, _, d.el, d.anchor);
    },
    N = ({ el: d, anchor: h }, g, _) => {
      let R;
      for (; d && d !== h; ) (R = p(d)), s(d, g, _), (d = R);
      s(h, g, _);
    },
    I = ({ el: d, anchor: h }) => {
      let g;
      for (; d && d !== h; ) (g = p(d)), r(d), (d = g);
      r(h);
    },
    j = (d, h, g, _, R, E, P, C, O) => {
      h.type === 'svg' ? (P = 'svg') : h.type === 'math' && (P = 'mathml'),
        d == null ? ee(h, g, _, R, E, P, C, O) : K(d, h, R, E, P, C, O);
    },
    ee = (d, h, g, _, R, E, P, C) => {
      let O, x;
      const { props: B, shapeFlag: L, transition: U, dirs: H } = d;
      if (
        ((O = d.el = i(d.type, E, B && B.is, B)),
        L & 8 ? u(O, d.children) : L & 16 && V(d.children, O, null, _, R, hs(d, E), P, C),
        H && yt(d, null, _, 'created'),
        z(O, d, d.scopeId, P, _),
        B)
      ) {
        for (const ne in B) ne !== 'value' && !Gt(ne) && o(O, ne, null, B[ne], E, _);
        'value' in B && o(O, 'value', null, B.value, E), (x = B.onVnodeBeforeMount) && Ve(x, _, d);
      }
      H && yt(d, null, _, 'beforeMount');
      const J = tu(R, U);
      J && U.beforeEnter(O),
        s(O, h, g),
        ((x = B && B.onVnodeMounted) || J || H) &&
          Te(() => {
            x && Ve(x, _, d), J && U.enter(O), H && yt(d, null, _, 'mounted');
          }, R);
    },
    z = (d, h, g, _, R) => {
      if ((g && m(d, g), _)) for (let E = 0; E < _.length; E++) m(d, _[E]);
      if (R) {
        let E = R.subTree;
        if (h === E || (Li(E.type) && (E.ssContent === h || E.ssFallback === h))) {
          const P = R.vnode;
          z(d, P, P.scopeId, P.slotScopeIds, R.parent);
        }
      }
    },
    V = (d, h, g, _, R, E, P, C, O = 0) => {
      for (let x = O; x < d.length; x++) {
        const B = (d[x] = C ? ut(d[x]) : ze(d[x]));
        S(null, B, h, g, _, R, E, P, C);
      }
    },
    K = (d, h, g, _, R, E, P) => {
      const C = (h.el = d.el);
      let { patchFlag: O, dynamicChildren: x, dirs: B } = h;
      O |= d.patchFlag & 16;
      const L = d.props || re,
        U = h.props || re;
      let H;
      if (
        (g && bt(g, !1),
        (H = U.onVnodeBeforeUpdate) && Ve(H, g, h, d),
        B && yt(h, d, g, 'beforeUpdate'),
        g && bt(g, !0),
        ((L.innerHTML && U.innerHTML == null) || (L.textContent && U.textContent == null)) &&
          u(C, ''),
        x
          ? ie(d.dynamicChildren, x, C, g, _, hs(h, R), E)
          : P || X(d, h, C, null, g, _, hs(h, R), E, !1),
        O > 0)
      ) {
        if (O & 16) me(C, L, U, g, R);
        else if (
          (O & 2 && L.class !== U.class && o(C, 'class', null, U.class, R),
          O & 4 && o(C, 'style', L.style, U.style, R),
          O & 8)
        ) {
          const J = h.dynamicProps;
          for (let ne = 0; ne < J.length; ne++) {
            const Z = J[ne],
              Ce = L[Z],
              Se = U[Z];
            (Se !== Ce || Z === 'value') && o(C, Z, Ce, Se, R, g);
          }
        }
        O & 1 && d.children !== h.children && u(C, h.children);
      } else !P && x == null && me(C, L, U, g, R);
      ((H = U.onVnodeUpdated) || B) &&
        Te(() => {
          H && Ve(H, g, h, d), B && yt(h, d, g, 'updated');
        }, _);
    },
    ie = (d, h, g, _, R, E, P) => {
      for (let C = 0; C < h.length; C++) {
        const O = d[C],
          x = h[C],
          B = O.el && (O.type === Fe || !Wt(O, x) || O.shapeFlag & 70) ? f(O.el) : g;
        S(O, x, B, null, _, R, E, P, !0);
      }
    },
    me = (d, h, g, _, R) => {
      if (h !== g) {
        if (h !== re) for (const E in h) !Gt(E) && !(E in g) && o(d, E, h[E], null, R, _);
        for (const E in g) {
          if (Gt(E)) continue;
          const P = g[E],
            C = h[E];
          P !== C && E !== 'value' && o(d, E, C, P, R, _);
        }
        'value' in g && o(d, 'value', h.value, g.value, R);
      }
    },
    Oe = (d, h, g, _, R, E, P, C, O) => {
      const x = (h.el = d ? d.el : l('')),
        B = (h.anchor = d ? d.anchor : l(''));
      let { patchFlag: L, dynamicChildren: U, slotScopeIds: H } = h;
      H && (C = C ? C.concat(H) : H),
        d == null
          ? (s(x, g, _), s(B, g, _), V(h.children || [], g, B, R, E, P, C, O))
          : L > 0 && L & 64 && U && d.dynamicChildren
            ? (ie(d.dynamicChildren, U, g, R, E, P, C),
              (h.key != null || (R && h === R.subTree)) && Ti(d, h, !0))
            : X(d, h, g, B, R, E, P, C, O);
    },
    we = (d, h, g, _, R, E, P, C, O) => {
      (h.slotScopeIds = C),
        d == null
          ? h.shapeFlag & 512
            ? R.ctx.activate(h, g, _, P, O)
            : gt(h, g, _, R, E, P, O)
          : rt(d, h, O);
    },
    gt = (d, h, g, _, R, E, P) => {
      const C = (d.component = wu(d, _, R));
      if ((pi(d) && (C.ctx.renderer = D), Eu(C, !1, P), C.asyncDep)) {
        if ((R && R.registerDep(C, oe, P), !d.el)) {
          const O = (C.subTree = Re(un));
          T(null, O, h, g);
        }
      } else oe(C, d, h, g, R, E, P);
    },
    rt = (d, h, g) => {
      const _ = (h.component = d.component);
      if (au(d, h, g))
        if (_.asyncDep && !_.asyncResolved) {
          W(_, h, g);
          return;
        } else (_.next = h), _.update();
      else (h.el = d.el), (_.vnode = h);
    },
    oe = (d, h, g, _, R, E, P) => {
      const C = () => {
        if (d.isMounted) {
          let { next: L, bu: U, u: H, parent: J, vnode: ne } = d;
          {
            const ke = Pi(d);
            if (ke) {
              L && ((L.el = ne.el), W(d, L, P)),
                ke.asyncDep.then(() => {
                  d.isUnmounted || C();
                });
              return;
            }
          }
          let Z = L,
            Ce;
          bt(d, !1),
            L ? ((L.el = ne.el), W(d, L, P)) : (L = ne),
            U && ls(U),
            (Ce = L.props && L.props.onVnodeBeforeUpdate) && Ve(Ce, J, L, ne),
            bt(d, !0);
          const Se = Dr(d),
            $e = d.subTree;
          (d.subTree = Se),
            S($e, Se, f($e.el), w($e), d, R, E),
            (L.el = Se.el),
            Z === null && fu(d, Se.el),
            H && Te(H, R),
            (Ce = L.props && L.props.onVnodeUpdated) && Te(() => Ve(Ce, J, L, ne), R);
        } else {
          let L;
          const { el: U, props: H } = h,
            { bm: J, m: ne, parent: Z, root: Ce, type: Se } = d,
            $e = Yt(h);
          bt(d, !1), J && ls(J), !$e && (L = H && H.onVnodeBeforeMount) && Ve(L, Z, h), bt(d, !0);
          {
            Ce.ce && Ce.ce._injectChildStyle(Se);
            const ke = (d.subTree = Dr(d));
            S(null, ke, g, _, d, R, E), (h.el = ke.el);
          }
          if ((ne && Te(ne, R), !$e && (L = H && H.onVnodeMounted))) {
            const ke = h;
            Te(() => Ve(L, Z, ke), R);
          }
          (h.shapeFlag & 256 || (Z && Yt(Z.vnode) && Z.vnode.shapeFlag & 256)) && d.a && Te(d.a, R),
            (d.isMounted = !0),
            (h = g = _ = null);
        }
      };
      d.scope.on();
      const O = (d.effect = new Vo(C));
      d.scope.off();
      const x = (d.update = O.run.bind(O)),
        B = (d.job = O.runIfDirty.bind(O));
      (B.i = d), (B.id = d.uid), (O.scheduler = () => cr(B)), bt(d, !0), x();
    },
    W = (d, h, g) => {
      h.component = d;
      const _ = d.vnode.props;
      (d.vnode = h), (d.next = null), Jc(d, h.props, _, g), Yc(d, h.children, g), pt(), Cr(d), mt();
    },
    X = (d, h, g, _, R, E, P, C, O = !1) => {
      const x = d && d.children,
        B = d ? d.shapeFlag : 0,
        L = h.children,
        { patchFlag: U, shapeFlag: H } = h;
      if (U > 0) {
        if (U & 128) {
          ot(x, L, g, _, R, E, P, C, O);
          return;
        } else if (U & 256) {
          Qe(x, L, g, _, R, E, P, C, O);
          return;
        }
      }
      H & 8
        ? (B & 16 && Ne(x, R, E), L !== x && u(g, L))
        : B & 16
          ? H & 16
            ? ot(x, L, g, _, R, E, P, C, O)
            : Ne(x, R, E, !0)
          : (B & 8 && u(g, ''), H & 16 && V(L, g, _, R, E, P, C, O));
    },
    Qe = (d, h, g, _, R, E, P, C, O) => {
      (d = d || Lt), (h = h || Lt);
      const x = d.length,
        B = h.length,
        L = Math.min(x, B);
      let U;
      for (U = 0; U < L; U++) {
        const H = (h[U] = O ? ut(h[U]) : ze(h[U]));
        S(d[U], H, g, null, R, E, P, C, O);
      }
      x > B ? Ne(d, R, E, !0, !1, L) : V(h, g, _, R, E, P, C, O, L);
    },
    ot = (d, h, g, _, R, E, P, C, O) => {
      let x = 0;
      const B = h.length;
      let L = d.length - 1,
        U = B - 1;
      for (; x <= L && x <= U; ) {
        const H = d[x],
          J = (h[x] = O ? ut(h[x]) : ze(h[x]));
        if (Wt(H, J)) S(H, J, g, null, R, E, P, C, O);
        else break;
        x++;
      }
      for (; x <= L && x <= U; ) {
        const H = d[L],
          J = (h[U] = O ? ut(h[U]) : ze(h[U]));
        if (Wt(H, J)) S(H, J, g, null, R, E, P, C, O);
        else break;
        L--, U--;
      }
      if (x > L) {
        if (x <= U) {
          const H = U + 1,
            J = H < B ? h[H].el : _;
          for (; x <= U; ) S(null, (h[x] = O ? ut(h[x]) : ze(h[x])), g, J, R, E, P, C, O), x++;
        }
      } else if (x > U) for (; x <= L; ) Ee(d[x], R, E, !0), x++;
      else {
        const H = x,
          J = x,
          ne = new Map();
        for (x = J; x <= U; x++) {
          const Ae = (h[x] = O ? ut(h[x]) : ze(h[x]));
          Ae.key != null && ne.set(Ae.key, x);
        }
        let Z,
          Ce = 0;
        const Se = U - J + 1;
        let $e = !1,
          ke = 0;
        const qt = new Array(Se);
        for (x = 0; x < Se; x++) qt[x] = 0;
        for (x = H; x <= L; x++) {
          const Ae = d[x];
          if (Ce >= Se) {
            Ee(Ae, R, E, !0);
            continue;
          }
          let qe;
          if (Ae.key != null) qe = ne.get(Ae.key);
          else
            for (Z = J; Z <= U; Z++)
              if (qt[Z - J] === 0 && Wt(Ae, h[Z])) {
                qe = Z;
                break;
              }
          qe === void 0
            ? Ee(Ae, R, E, !0)
            : ((qt[qe - J] = x + 1),
              qe >= ke ? (ke = qe) : ($e = !0),
              S(Ae, h[qe], g, null, R, E, P, C, O),
              Ce++);
        }
        const Sr = $e ? nu(qt) : Lt;
        for (Z = Sr.length - 1, x = Se - 1; x >= 0; x--) {
          const Ae = J + x,
            qe = h[Ae],
            Rr = Ae + 1 < B ? h[Ae + 1].el : _;
          qt[x] === 0
            ? S(null, qe, g, Rr, R, E, P, C, O)
            : $e && (Z < 0 || x !== Sr[Z] ? He(qe, g, Rr, 2) : Z--);
        }
      }
    },
    He = (d, h, g, _, R = null) => {
      const { el: E, type: P, transition: C, children: O, shapeFlag: x } = d;
      if (x & 6) {
        He(d.component.subTree, h, g, _);
        return;
      }
      if (x & 128) {
        d.suspense.move(h, g, _);
        return;
      }
      if (x & 64) {
        P.move(d, h, g, D);
        return;
      }
      if (P === Fe) {
        s(E, h, g);
        for (let L = 0; L < O.length; L++) He(O[L], h, g, _);
        s(d.anchor, h, g);
        return;
      }
      if (P === ps) {
        N(d, h, g);
        return;
      }
      if (_ !== 2 && x & 1 && C)
        if (_ === 0) C.beforeEnter(E), s(E, h, g), Te(() => C.enter(E), R);
        else {
          const { leave: L, delayLeave: U, afterLeave: H } = C,
            J = () => s(E, h, g),
            ne = () => {
              L(E, () => {
                J(), H && H();
              });
            };
          U ? U(E, J, ne) : ne();
        }
      else s(E, h, g);
    },
    Ee = (d, h, g, _ = !1, R = !1) => {
      const {
        type: E,
        props: P,
        ref: C,
        children: O,
        dynamicChildren: x,
        shapeFlag: B,
        patchFlag: L,
        dirs: U,
        cacheIndex: H,
      } = d;
      if (
        (L === -2 && (R = !1),
        C != null && Mn(C, null, g, d, !0),
        H != null && (h.renderCache[H] = void 0),
        B & 256)
      ) {
        h.ctx.deactivate(d);
        return;
      }
      const J = B & 1 && U,
        ne = !Yt(d);
      let Z;
      if ((ne && (Z = P && P.onVnodeBeforeUnmount) && Ve(Z, h, d), B & 6)) wn(d.component, g, _);
      else {
        if (B & 128) {
          d.suspense.unmount(g, _);
          return;
        }
        J && yt(d, null, h, 'beforeUnmount'),
          B & 64
            ? d.type.remove(d, h, g, D, _)
            : x && !x.hasOnce && (E !== Fe || (L > 0 && L & 64))
              ? Ne(x, h, g, !1, !0)
              : ((E === Fe && L & 384) || (!R && B & 16)) && Ne(O, h, g),
          _ && At(d);
      }
      ((ne && (Z = P && P.onVnodeUnmounted)) || J) &&
        Te(() => {
          Z && Ve(Z, h, d), J && yt(d, null, h, 'unmounted');
        }, g);
    },
    At = (d) => {
      const { type: h, el: g, anchor: _, transition: R } = d;
      if (h === Fe) {
        Tt(g, _);
        return;
      }
      if (h === ps) {
        I(d);
        return;
      }
      const E = () => {
        r(g), R && !R.persisted && R.afterLeave && R.afterLeave();
      };
      if (d.shapeFlag & 1 && R && !R.persisted) {
        const { leave: P, delayLeave: C } = R,
          O = () => P(g, E);
        C ? C(d.el, E, O) : O();
      } else E();
    },
    Tt = (d, h) => {
      let g;
      for (; d !== h; ) (g = p(d)), r(d), (d = g);
      r(h);
    },
    wn = (d, h, g) => {
      const { bum: _, scope: R, job: E, subTree: P, um: C, m: O, a: x } = d;
      Mr(O),
        Mr(x),
        _ && ls(_),
        R.stop(),
        E && ((E.flags |= 8), Ee(P, d, h, g)),
        C && Te(C, h),
        Te(() => {
          d.isUnmounted = !0;
        }, h),
        h &&
          h.pendingBranch &&
          !h.isUnmounted &&
          d.asyncDep &&
          !d.asyncResolved &&
          d.suspenseId === h.pendingId &&
          (h.deps--, h.deps === 0 && h.resolve());
    },
    Ne = (d, h, g, _ = !1, R = !1, E = 0) => {
      for (let P = E; P < d.length; P++) Ee(d[P], h, g, _, R);
    },
    w = (d) => {
      if (d.shapeFlag & 6) return w(d.component.subTree);
      if (d.shapeFlag & 128) return d.suspense.next();
      const h = p(d.anchor || d.el),
        g = h && h[Ec];
      return g ? p(g) : h;
    };
  let M = !1;
  const F = (d, h, g) => {
      d == null
        ? h._vnode && Ee(h._vnode, null, null, !0)
        : S(h._vnode || null, d, h, null, null, null, g),
        (h._vnode = d),
        M || ((M = !0), Cr(), ai(), (M = !1));
    },
    D = { p: S, um: Ee, m: He, r: At, mt: gt, mc: V, pc: X, pbc: ie, n: w, o: e };
  return { render: F, hydrate: void 0, createApp: Wc(F) };
}
function hs({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
    ? void 0
    : n;
}
function bt({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function tu(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Ti(e, t, n = !1) {
  const s = e.children,
    r = t.children;
  if ($(s) && $(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let l = r[o];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) && ((l = r[o] = ut(r[o])), (l.el = i.el)),
        !n && l.patchFlag !== -2 && Ti(i, l)),
        l.type === Xn && (l.el = i.el);
    }
}
function nu(e) {
  const t = e.slice(),
    n = [0];
  let s, r, o, i, l;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const a = e[s];
    if (a !== 0) {
      if (((r = n[n.length - 1]), e[r] < a)) {
        (t[s] = r), n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        (l = (o + i) >> 1), e[n[l]] < a ? (o = l + 1) : (i = l);
      a < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), (n[o] = s));
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i]);
  return n;
}
function Pi(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Pi(t);
}
function Mr(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const su = Symbol.for('v-scx'),
  ru = () => Ge(su);
function en(e, t, n) {
  return Ni(e, t, n);
}
function Ni(e, t, n = re) {
  const { immediate: s, deep: r, flush: o, once: i } = n,
    l = pe({}, n),
    c = (t && s) || (!t && o !== 'post');
  let a;
  if (fn) {
    if (o === 'sync') {
      const m = ru();
      a = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!c) {
      const m = () => {};
      return (m.stop = Je), (m.resume = Je), (m.pause = Je), m;
    }
  }
  const u = fe;
  l.call = (m, b, S) => Xe(m, u, b, S);
  let f = !1;
  o === 'post'
    ? (l.scheduler = (m) => {
        Te(m, u && u.suspense);
      })
    : o !== 'sync' &&
      ((f = !0),
      (l.scheduler = (m, b) => {
        b ? m() : cr(m);
      })),
    (l.augmentJob = (m) => {
      t && (m.flags |= 4), f && ((m.flags |= 2), u && ((m.id = u.uid), (m.i = u)));
    });
  const p = yc(e, t, l);
  return fn && (a ? a.push(p) : c && p()), p;
}
function ou(e, t, n) {
  const s = this.proxy,
    r = ae(e) ? (e.includes('.') ? Fi(s, e) : () => s[e]) : e.bind(s, s);
  let o;
  q(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = yn(this),
    l = Ni(r, o.bind(s), n);
  return i(), l;
}
function Fi(e, t) {
  const n = t.split('.');
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
const iu = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${Me(t)}Modifiers`] || e[`${Ct(t)}Modifiers`];
function lu(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || re;
  let r = n;
  const o = t.startsWith('update:'),
    i = o && iu(s, t.slice(7));
  i && (i.trim && (r = n.map((u) => (ae(u) ? u.trim() : u))), i.number && (r = n.map(Ml)));
  let l,
    c = s[(l = is(t))] || s[(l = is(Me(t)))];
  !c && o && (c = s[(l = is(Ct(t)))]), c && Xe(c, e, 6, r);
  const a = s[l + 'Once'];
  if (a) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), Xe(a, e, 6, r);
  }
}
function Ii(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e);
  if (r !== void 0) return r;
  const o = e.emits;
  let i = {},
    l = !1;
  if (!q(e)) {
    const c = (a) => {
      const u = Ii(a, t, !0);
      u && ((l = !0), pe(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  return !o && !l
    ? (le(e) && s.set(e, null), null)
    : ($(o) ? o.forEach((c) => (i[c] = null)) : pe(i, o), le(e) && s.set(e, i), i);
}
function Gn(e, t) {
  return !e || !$n(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      Y(e, t[0].toLowerCase() + t.slice(1)) || Y(e, Ct(t)) || Y(e, t));
}
function Dr(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: r,
      propsOptions: [o],
      slots: i,
      attrs: l,
      emit: c,
      render: a,
      renderCache: u,
      props: f,
      data: p,
      setupState: m,
      ctx: b,
      inheritAttrs: S,
    } = e,
    v = Ln(e);
  let T, A;
  try {
    if (n.shapeFlag & 4) {
      const I = r || s,
        j = I;
      (T = ze(a.call(j, I, u, f, m, p, b))), (A = l);
    } else {
      const I = t;
      (T = ze(I.length > 1 ? I(f, { attrs: l, slots: i, emit: c }) : I(f, null))),
        (A = t.props ? l : cu(l));
    }
  } catch (I) {
    (tn.length = 0), zn(I, e, 1), (T = Re(un));
  }
  let N = T;
  if (A && S !== !1) {
    const I = Object.keys(A),
      { shapeFlag: j } = N;
    I.length && j & 7 && (o && I.some(zs) && (A = uu(A, o)), (N = Ut(N, A, !1, !0)));
  }
  return (
    n.dirs && ((N = Ut(N, null, !1, !0)), (N.dirs = N.dirs ? N.dirs.concat(n.dirs) : n.dirs)),
    n.transition && ur(N, n.transition),
    (T = N),
    Ln(v),
    T
  );
}
const cu = (e) => {
    let t;
    for (const n in e) (n === 'class' || n === 'style' || $n(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  uu = (e, t) => {
    const n = {};
    for (const s in e) (!zs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function au(e, t, n) {
  const { props: s, children: r, component: o } = e,
    { props: i, children: l, patchFlag: c } = t,
    a = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return s ? jr(s, i, a) : !!i;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const p = u[f];
        if (i[p] !== s[p] && !Gn(a, p)) return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? (i ? jr(s, i, a) : !0) : !!i;
  return !1;
}
function jr(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !Gn(n, o)) return !0;
  }
  return !1;
}
function fu({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const Li = (e) => e.__isSuspense;
function du(e, t) {
  t && t.pendingBranch ? ($(e) ? t.effects.push(...e) : t.effects.push(e)) : wc(e);
}
const Fe = Symbol.for('v-fgt'),
  Xn = Symbol.for('v-txt'),
  un = Symbol.for('v-cmt'),
  ps = Symbol.for('v-stc'),
  tn = [];
let Pe = null;
function dr(e = !1) {
  tn.push((Pe = e ? null : []));
}
function hu() {
  tn.pop(), (Pe = tn[tn.length - 1] || null);
}
let an = 1;
function Ur(e, t = !1) {
  (an += e), e < 0 && Pe && t && (Pe.hasOnce = !0);
}
function pu(e) {
  return (e.dynamicChildren = an > 0 ? Pe || Lt : null), hu(), an > 0 && Pe && Pe.push(e), e;
}
function hr(e, t, n, s, r, o) {
  return pu(nt(e, t, n, s, r, o, !0));
}
function jn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Wt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Mi = ({ key: e }) => e ?? null,
  xn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (ae(e) || ce(e) || q(e) ? { i: Le, r: e, k: t, f: !!n } : e) : null
  );
function nt(e, t = null, n = null, s = 0, r = null, o = e === Fe ? 0 : 1, i = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Mi(t),
    ref: t && xn(t),
    scopeId: di,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Le,
  };
  return (
    l ? (pr(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= ae(n) ? 8 : 16),
    an > 0 && !i && Pe && (c.patchFlag > 0 || o & 6) && c.patchFlag !== 32 && Pe.push(c),
    c
  );
}
const Re = mu;
function mu(e, t = null, n = null, s = 0, r = null, o = !1) {
  if (((!e || e === Dc) && (e = un), jn(e))) {
    const l = Ut(e, t, !0);
    return (
      n && pr(l, n),
      an > 0 && !o && Pe && (l.shapeFlag & 6 ? (Pe[Pe.indexOf(e)] = l) : Pe.push(l)),
      (l.patchFlag = -2),
      l
    );
  }
  if ((Ou(e) && (e = e.__vccOpts), t)) {
    t = gu(t);
    let { class: l, style: c } = t;
    l && !ae(l) && (t.class = Qs(l)),
      le(c) && (or(c) && !$(c) && (c = pe({}, c)), (t.style = Xs(c)));
  }
  const i = ae(e) ? 1 : Li(e) ? 128 : Sc(e) ? 64 : le(e) ? 4 : q(e) ? 2 : 0;
  return nt(e, t, n, s, r, i, o, !0);
}
function gu(e) {
  return e ? (or(e) || Si(e) ? pe({}, e) : e) : null;
}
function Ut(e, t, n = !1, s = !1) {
  const { props: r, ref: o, patchFlag: i, children: l, transition: c } = e,
    a = t ? yu(r || {}, t) : r,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: a,
      key: a && Mi(a),
      ref: t && t.ref ? (n && o ? ($(o) ? o.concat(xn(t)) : [o, xn(t)]) : xn(t)) : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Fe ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Ut(e.ssContent),
      ssFallback: e.ssFallback && Ut(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return c && s && ur(u, c.clone(u)), u;
}
function On(e = ' ', t = 0) {
  return Re(Xn, null, e, t);
}
function ze(e) {
  return e == null || typeof e == 'boolean'
    ? Re(un)
    : $(e)
      ? Re(Fe, null, e.slice())
      : jn(e)
        ? ut(e)
        : Re(Xn, null, String(e));
}
function ut(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Ut(e);
}
function pr(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if ($(t)) n = 16;
  else if (typeof t == 'object')
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), pr(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Si(t)
        ? (t._ctx = Le)
        : r === 3 && Le && (Le.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    q(t)
      ? ((t = { default: t, _ctx: Le }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [On(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function yu(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === 'class') t.class !== s.class && (t.class = Qs([t.class, s.class]));
      else if (r === 'style') t.style = Xs([t.style, s.style]);
      else if ($n(r)) {
        const o = t[r],
          i = s[r];
        i && o !== i && !($(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else r !== '' && (t[r] = s[r]);
  }
  return t;
}
function Ve(e, t, n, s = null) {
  Xe(e, t, 7, [n, s]);
}
const bu = _i();
let _u = 0;
function wu(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || bu,
    o = {
      uid: _u++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new $o(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: vi(s, r),
      emitsOptions: Ii(s, r),
      emit: null,
      emitted: null,
      propsDefaults: re,
      inheritAttrs: s.inheritAttrs,
      ctx: re,
      data: re,
      props: re,
      attrs: re,
      slots: re,
      refs: re,
      setupState: re,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }), (o.root = t ? t.root : o), (o.emit = lu.bind(null, o)), e.ce && e.ce(o), o
  );
}
let fe = null,
  Un,
  Is;
{
  const e = Wn(),
    t = (n, s) => {
      let r;
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (o) => {
          r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
        }
      );
    };
  (Un = t('__VUE_INSTANCE_SETTERS__', (n) => (fe = n))),
    (Is = t('__VUE_SSR_SETTERS__', (n) => (fn = n)));
}
const yn = (e) => {
    const t = fe;
    return (
      Un(e),
      e.scope.on(),
      () => {
        e.scope.off(), Un(t);
      }
    );
  },
  Br = () => {
    fe && fe.scope.off(), Un(null);
  };
function Di(e) {
  return e.vnode.shapeFlag & 4;
}
let fn = !1;
function Eu(e, t = !1, n = !1) {
  t && Is(t);
  const { props: s, children: r } = e.vnode,
    o = Di(e);
  zc(e, s, o, t), Qc(e, r, n);
  const i = o ? Su(e, t) : void 0;
  return t && Is(!1), i;
}
function Su(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Uc));
  const { setup: s } = n;
  if (s) {
    pt();
    const r = (e.setupContext = s.length > 1 ? vu(e) : null),
      o = yn(e),
      i = gn(s, e, 0, [e.props, r]),
      l = Io(i);
    if ((mt(), o(), (l || e.sp) && !Yt(e) && hi(e), l)) {
      if ((i.then(Br, Br), t))
        return i
          .then((c) => {
            Hr(e, c);
          })
          .catch((c) => {
            zn(c, e, 0);
          });
      e.asyncDep = i;
    } else Hr(e, i);
  } else ji(e);
}
function Hr(e, t, n) {
  q(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : le(t) && (e.setupState = li(t)),
    ji(e);
}
function ji(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Je);
  {
    const r = yn(e);
    pt();
    try {
      Bc(e);
    } finally {
      mt(), r();
    }
  }
}
const Ru = {
  get(e, t) {
    return de(e, 'get', ''), e[t];
  },
};
function vu(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, Ru), slots: e.slots, emit: e.emit, expose: t };
}
function mr(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(li(ir(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in Zt) return Zt[n](e);
          },
          has(t, n) {
            return n in t || n in Zt;
          },
        }))
    : e.proxy;
}
function xu(e, t = !0) {
  return q(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Ou(e) {
  return q(e) && '__vccOpts' in e;
}
const Ie = (e, t) => mc(e, t, fn);
function Ui(e, t, n) {
  const s = arguments.length;
  return s === 2
    ? le(t) && !$(t)
      ? jn(t)
        ? Re(e, null, [t])
        : Re(e, t)
      : Re(e, null, t)
    : (s > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : s === 3 && jn(n) && (n = [n]),
      Re(e, t, n));
}
const Cu = '3.5.13';
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ls;
const $r = typeof window < 'u' && window.trustedTypes;
if ($r)
  try {
    Ls = $r.createPolicy('vue', { createHTML: (e) => e });
  } catch {}
const Bi = Ls ? (e) => Ls.createHTML(e) : (e) => e,
  Au = 'http://www.w3.org/2000/svg',
  Tu = 'http://www.w3.org/1998/Math/MathML',
  et = typeof document < 'u' ? document : null,
  kr = et && et.createElement('template'),
  Pu = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const r =
        t === 'svg'
          ? et.createElementNS(Au, e)
          : t === 'mathml'
            ? et.createElementNS(Tu, e)
            : n
              ? et.createElement(e, { is: n })
              : et.createElement(e);
      return e === 'select' && s && s.multiple != null && r.setAttribute('multiple', s.multiple), r;
    },
    createText: (e) => et.createTextNode(e),
    createComment: (e) => et.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => et.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '');
    },
    insertStaticContent(e, t, n, s, r, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (r && (r === o || r.nextSibling))
        for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling)); );
      else {
        kr.innerHTML = Bi(
          s === 'svg' ? `<svg>${e}</svg>` : s === 'mathml' ? `<math>${e}</math>` : e
        );
        const l = kr.content;
        if (s === 'svg' || s === 'mathml') {
          const c = l.firstChild;
          for (; c.firstChild; ) l.appendChild(c.firstChild);
          l.removeChild(c);
        }
        t.insertBefore(l, n);
      }
      return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
    },
  },
  Nu = Symbol('_vtc');
function Fu(e, t, n) {
  const s = e[Nu];
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t);
}
const qr = Symbol('_vod'),
  Iu = Symbol('_vsh'),
  Lu = Symbol(''),
  Mu = /(^|;)\s*display\s*:/;
function Du(e, t, n) {
  const s = e.style,
    r = ae(n);
  let o = !1;
  if (n && !r) {
    if (t)
      if (ae(t))
        for (const i of t.split(';')) {
          const l = i.slice(0, i.indexOf(':')).trim();
          n[l] == null && Cn(s, l, '');
        }
      else for (const i in t) n[i] == null && Cn(s, i, '');
    for (const i in n) i === 'display' && (o = !0), Cn(s, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = s[Lu];
      i && (n += ';' + i), (s.cssText = n), (o = Mu.test(n));
    }
  } else t && e.removeAttribute('style');
  qr in e && ((e[qr] = o ? s.display : ''), e[Iu] && (s.display = 'none'));
}
const Vr = /\s*!important$/;
function Cn(e, t, n) {
  if ($(n)) n.forEach((s) => Cn(e, t, s));
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n);
  else {
    const s = ju(e, t);
    Vr.test(n) ? e.setProperty(Ct(s), n.replace(Vr, ''), 'important') : (e[s] = n);
  }
}
const Wr = ['Webkit', 'Moz', 'ms'],
  ms = {};
function ju(e, t) {
  const n = ms[t];
  if (n) return n;
  let s = Me(t);
  if (s !== 'filter' && s in e) return (ms[t] = s);
  s = Vn(s);
  for (let r = 0; r < Wr.length; r++) {
    const o = Wr[r] + s;
    if (o in e) return (ms[t] = o);
  }
  return t;
}
const Kr = 'http://www.w3.org/1999/xlink';
function zr(e, t, n, s, r, o = $l(t)) {
  s && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(Kr, t.slice(6, t.length))
      : e.setAttributeNS(Kr, t, n)
    : n == null || (o && !jo(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? '' : ht(n) ? String(n) : n);
}
function Jr(e, t, n, s, r) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? Bi(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === 'value' && o !== 'PROGRESS' && !o.includes('-')) {
    const l = o === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      c = n == null ? (e.type === 'checkbox' ? 'on' : '') : String(n);
    (l !== c || !('_value' in e)) && (e.value = c),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let i = !1;
  if (n === '' || n == null) {
    const l = typeof e[t];
    l === 'boolean'
      ? (n = jo(n))
      : n == null && l === 'string'
        ? ((n = ''), (i = !0))
        : l === 'number' && ((n = 0), (i = !0));
  }
  try {
    e[t] = n;
  } catch {}
  i && e.removeAttribute(r || t);
}
function Uu(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Bu(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Gr = Symbol('_vei');
function Hu(e, t, n, s, r = null) {
  const o = e[Gr] || (e[Gr] = {}),
    i = o[t];
  if (s && i) i.value = s;
  else {
    const [l, c] = $u(t);
    if (s) {
      const a = (o[t] = Vu(s, r));
      Uu(e, l, a, c);
    } else i && (Bu(e, l, i, c), (o[t] = void 0));
  }
}
const Xr = /(?:Once|Passive|Capture)$/;
function $u(e) {
  let t;
  if (Xr.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(Xr)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ':' ? e.slice(3) : Ct(e.slice(2)), t];
}
let gs = 0;
const ku = Promise.resolve(),
  qu = () => gs || (ku.then(() => (gs = 0)), (gs = Date.now()));
function Vu(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    Xe(Wu(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = qu()), n;
}
function Wu(e, t) {
  if ($(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    );
  } else return t;
}
const Qr = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Ku = (e, t, n, s, r, o) => {
    const i = r === 'svg';
    t === 'class'
      ? Fu(e, s, i)
      : t === 'style'
        ? Du(e, n, s)
        : $n(t)
          ? zs(t) || Hu(e, t, n, s, o)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : zu(e, t, s, i)
              )
            ? (Jr(e, t, s),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                zr(e, t, s, i, o, t !== 'value'))
            : e._isVueCE && (/[A-Z]/.test(t) || !ae(s))
              ? Jr(e, Me(t), s, o, t)
              : (t === 'true-value'
                  ? (e._trueValue = s)
                  : t === 'false-value' && (e._falseValue = s),
                zr(e, t, s, i));
  };
function zu(e, t, n, s) {
  if (s) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && Qr(t) && q(n)));
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1;
  if (t === 'width' || t === 'height') {
    const r = e.tagName;
    if (r === 'IMG' || r === 'VIDEO' || r === 'CANVAS' || r === 'SOURCE') return !1;
  }
  return Qr(t) && ae(n) ? !1 : t in e;
}
const Ju = pe({ patchProp: Ku }, Pu);
let Yr;
function Gu() {
  return Yr || (Yr = Zc(Ju));
}
const Xu = (...e) => {
  const t = Gu().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const r = Yu(s);
      if (!r) return;
      const o = t._component;
      !q(o) && !o.render && !o.template && (o.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = '');
      const i = n(r, !1, Qu(r));
      return (
        r instanceof Element && (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')), i
      );
    }),
    t
  );
};
function Qu(e) {
  if (e instanceof SVGElement) return 'svg';
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml';
}
function Yu(e) {
  return ae(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */ let Hi;
const Qn = (e) => (Hi = e),
  $i = Symbol();
function Ms(e) {
  return (
    e &&
    typeof e == 'object' &&
    Object.prototype.toString.call(e) === '[object Object]' &&
    typeof e.toJSON != 'function'
  );
}
var nn;
(function (e) {
  (e.direct = 'direct'), (e.patchObject = 'patch object'), (e.patchFunction = 'patch function');
})(nn || (nn = {}));
function Zu() {
  const e = ko(!0),
    t = e.run(() => Kn({}));
  let n = [],
    s = [];
  const r = ir({
    install(o) {
      Qn(r),
        (r._a = o),
        o.provide($i, r),
        (o.config.globalProperties.$pinia = r),
        s.forEach((i) => n.push(i)),
        (s = []);
    },
    use(o) {
      return this._a ? n.push(o) : s.push(o), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return r;
}
const ki = () => {};
function Zr(e, t, n, s = ki) {
  e.push(t);
  const r = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), s());
  };
  return !n && qo() && kl(r), r;
}
function Nt(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const ea = (e) => e(),
  eo = Symbol(),
  ys = Symbol();
function Ds(e, t) {
  e instanceof Map && t instanceof Map
    ? t.forEach((n, s) => e.set(s, n))
    : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const s = t[n],
      r = e[n];
    Ms(r) && Ms(s) && e.hasOwnProperty(n) && !ce(s) && !St(s) ? (e[n] = Ds(r, s)) : (e[n] = s);
  }
  return e;
}
const ta = Symbol();
function na(e) {
  return !Ms(e) || !Object.prototype.hasOwnProperty.call(e, ta);
}
const { assign: lt } = Object;
function sa(e) {
  return !!(ce(e) && e.effect);
}
function ra(e, t, n, s) {
  const { state: r, actions: o, getters: i } = t,
    l = n.state.value[e];
  let c;
  function a() {
    l || (n.state.value[e] = r ? r() : {});
    const u = fc(n.state.value[e]);
    return lt(
      u,
      o,
      Object.keys(i || {}).reduce(
        (f, p) => (
          (f[p] = ir(
            Ie(() => {
              Qn(n);
              const m = n._s.get(e);
              return i[p].call(m, m);
            })
          )),
          f
        ),
        {}
      )
    );
  }
  return (c = qi(e, a, t, n, s, !0)), c;
}
function qi(e, t, n = {}, s, r, o) {
  let i;
  const l = lt({ actions: {} }, n),
    c = { deep: !0 };
  let a,
    u,
    f = [],
    p = [],
    m;
  const b = s.state.value[e];
  !o && !b && (s.state.value[e] = {}), Kn({});
  let S;
  function v(V) {
    let K;
    (a = u = !1),
      typeof V == 'function'
        ? (V(s.state.value[e]), (K = { type: nn.patchFunction, storeId: e, events: m }))
        : (Ds(s.state.value[e], V),
          (K = { type: nn.patchObject, payload: V, storeId: e, events: m }));
    const ie = (S = Symbol());
    lr().then(() => {
      S === ie && (a = !0);
    }),
      (u = !0),
      Nt(f, K, s.state.value[e]);
  }
  const T = o
    ? function () {
        const { state: K } = n,
          ie = K ? K() : {};
        this.$patch((me) => {
          lt(me, ie);
        });
      }
    : ki;
  function A() {
    i.stop(), (f = []), (p = []), s._s.delete(e);
  }
  const N = (V, K = '') => {
      if (eo in V) return (V[ys] = K), V;
      const ie = function () {
        Qn(s);
        const me = Array.from(arguments),
          Oe = [],
          we = [];
        function gt(W) {
          Oe.push(W);
        }
        function rt(W) {
          we.push(W);
        }
        Nt(p, { args: me, name: ie[ys], store: j, after: gt, onError: rt });
        let oe;
        try {
          oe = V.apply(this && this.$id === e ? this : j, me);
        } catch (W) {
          throw (Nt(we, W), W);
        }
        return oe instanceof Promise
          ? oe.then((W) => (Nt(Oe, W), W)).catch((W) => (Nt(we, W), Promise.reject(W)))
          : (Nt(Oe, oe), oe);
      };
      return (ie[eo] = !0), (ie[ys] = K), ie;
    },
    I = {
      _p: s,
      $id: e,
      $onAction: Zr.bind(null, p),
      $patch: v,
      $reset: T,
      $subscribe(V, K = {}) {
        const ie = Zr(f, V, K.detached, () => me()),
          me = i.run(() =>
            en(
              () => s.state.value[e],
              (Oe) => {
                (K.flush === 'sync' ? u : a) && V({ storeId: e, type: nn.direct, events: m }, Oe);
              },
              lt({}, c, K)
            )
          );
        return ie;
      },
      $dispose: A,
    },
    j = mn(I);
  s._s.set(e, j);
  const z = ((s._a && s._a.runWithContext) || ea)(() =>
    s._e.run(() => (i = ko()).run(() => t({ action: N })))
  );
  for (const V in z) {
    const K = z[V];
    if ((ce(K) && !sa(K)) || St(K))
      o || (b && na(K) && (ce(K) ? (K.value = b[V]) : Ds(K, b[V])), (s.state.value[e][V] = K));
    else if (typeof K == 'function') {
      const ie = N(K, V);
      (z[V] = ie), (l.actions[V] = K);
    }
  }
  return (
    lt(j, z),
    lt(G(j), z),
    Object.defineProperty(j, '$state', {
      get: () => s.state.value[e],
      set: (V) => {
        v((K) => {
          lt(K, V);
        });
      },
    }),
    s._p.forEach((V) => {
      lt(
        j,
        i.run(() => V({ store: j, app: s._a, pinia: s, options: l }))
      );
    }),
    b && o && n.hydrate && n.hydrate(j.$state, b),
    (a = !0),
    (u = !0),
    j
  );
}
/*! #__NO_SIDE_EFFECTS__ */ function oa(e, t, n) {
  let s;
  const r = typeof t == 'function';
  s = r ? n : t;
  function o(i, l) {
    const c = Kc();
    return (
      (i = i || (c ? Ge($i, null) : null)),
      i && Qn(i),
      (i = Hi),
      i._s.has(e) || (r ? qi(e, t, s, i) : ra(e, s, i)),
      i._s.get(e)
    );
  }
  return (o.$id = e), o;
}
const Vi = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, r] of t) n[s] = r;
    return n;
  },
  ia = {};
function la(e, t) {
  const n = Ar('router-link'),
    s = Ar('router-view');
  return (
    dr(),
    hr(
      Fe,
      null,
      [
        nt('nav', null, [
          Re(n, { to: '/' }, { default: As(() => t[0] || (t[0] = [On('Home')])), _: 1 }),
          t[2] || (t[2] = On(' | ')),
          Re(n, { to: '/about' }, { default: As(() => t[1] || (t[1] = [On('About')])), _: 1 }),
        ]),
        t[3] || (t[3] = nt('h1', { class: 'text-3xl font-bold underline' }, 'Hello world!', -1)),
        Re(s),
      ],
      64
    )
  );
}
const ca = Vi(ia, [['render', la]]);
/*!
 * vue-router v4.5.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */ const It = typeof document < 'u';
function Wi(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e;
}
function ua(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module' || (e.default && Wi(e.default));
}
const Q = Object.assign;
function bs(e, t) {
  const n = {};
  for (const s in t) {
    const r = t[s];
    n[s] = Ue(r) ? r.map(e) : e(r);
  }
  return n;
}
const sn = () => {},
  Ue = Array.isArray,
  Ki = /#/g,
  aa = /&/g,
  fa = /\//g,
  da = /=/g,
  ha = /\?/g,
  zi = /\+/g,
  pa = /%5B/g,
  ma = /%5D/g,
  Ji = /%5E/g,
  ga = /%60/g,
  Gi = /%7B/g,
  ya = /%7C/g,
  Xi = /%7D/g,
  ba = /%20/g;
function gr(e) {
  return encodeURI('' + e)
    .replace(ya, '|')
    .replace(pa, '[')
    .replace(ma, ']');
}
function _a(e) {
  return gr(e).replace(Gi, '{').replace(Xi, '}').replace(Ji, '^');
}
function js(e) {
  return gr(e)
    .replace(zi, '%2B')
    .replace(ba, '+')
    .replace(Ki, '%23')
    .replace(aa, '%26')
    .replace(ga, '`')
    .replace(Gi, '{')
    .replace(Xi, '}')
    .replace(Ji, '^');
}
function wa(e) {
  return js(e).replace(da, '%3D');
}
function Ea(e) {
  return gr(e).replace(Ki, '%23').replace(ha, '%3F');
}
function Sa(e) {
  return e == null ? '' : Ea(e).replace(fa, '%2F');
}
function dn(e) {
  try {
    return decodeURIComponent('' + e);
  } catch {}
  return '' + e;
}
const Ra = /\/$/,
  va = (e) => e.replace(Ra, '');
function _s(e, t, n = '/') {
  let s,
    r = {},
    o = '',
    i = '';
  const l = t.indexOf('#');
  let c = t.indexOf('?');
  return (
    l < c && l >= 0 && (c = -1),
    c > -1 && ((s = t.slice(0, c)), (o = t.slice(c + 1, l > -1 ? l : t.length)), (r = e(o))),
    l > -1 && ((s = s || t.slice(0, l)), (i = t.slice(l, t.length))),
    (s = Aa(s ?? t, n)),
    { fullPath: s + (o && '?') + o + i, path: s, query: r, hash: dn(i) }
  );
}
function xa(e, t) {
  const n = t.query ? e(t.query) : '';
  return t.path + (n && '?') + n + (t.hash || '');
}
function to(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/';
}
function Oa(e, t, n) {
  const s = t.matched.length - 1,
    r = n.matched.length - 1;
  return (
    s > -1 &&
    s === r &&
    Bt(t.matched[s], n.matched[r]) &&
    Qi(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Bt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Qi(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!Ca(e[n], t[n])) return !1;
  return !0;
}
function Ca(e, t) {
  return Ue(e) ? no(e, t) : Ue(t) ? no(t, e) : e === t;
}
function no(e, t) {
  return Ue(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t;
}
function Aa(e, t) {
  if (e.startsWith('/')) return e;
  if (!e) return t;
  const n = t.split('/'),
    s = e.split('/'),
    r = s[s.length - 1];
  (r === '..' || r === '.') && s.push('');
  let o = n.length - 1,
    i,
    l;
  for (i = 0; i < s.length; i++)
    if (((l = s[i]), l !== '.'))
      if (l === '..') o > 1 && o--;
      else break;
  return n.slice(0, o).join('/') + '/' + s.slice(i).join('/');
}
const it = {
  path: '/',
  name: void 0,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: void 0,
};
var hn;
(function (e) {
  (e.pop = 'pop'), (e.push = 'push');
})(hn || (hn = {}));
var rn;
(function (e) {
  (e.back = 'back'), (e.forward = 'forward'), (e.unknown = '');
})(rn || (rn = {}));
function Ta(e) {
  if (!e)
    if (It) {
      const t = document.querySelector('base');
      (e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, ''));
    } else e = '/';
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), va(e);
}
const Pa = /^[^#]+#/;
function Na(e, t) {
  return e.replace(Pa, '#') + t;
}
function Fa(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0),
  };
}
const Yn = () => ({ left: window.scrollX, top: window.scrollY });
function Ia(e) {
  let t;
  if ('el' in e) {
    const n = e.el,
      s = typeof n == 'string' && n.startsWith('#'),
      r =
        typeof n == 'string'
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!r) return;
    t = Fa(r, e);
  } else t = e;
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      );
}
function so(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Us = new Map();
function La(e, t) {
  Us.set(e, t);
}
function Ma(e) {
  const t = Us.get(e);
  return Us.delete(e), t;
}
let Da = () => location.protocol + '//' + location.host;
function Yi(e, t) {
  const { pathname: n, search: s, hash: r } = t,
    o = e.indexOf('#');
  if (o > -1) {
    let l = r.includes(e.slice(o)) ? e.slice(o).length : 1,
      c = r.slice(l);
    return c[0] !== '/' && (c = '/' + c), to(c, '');
  }
  return to(n, e) + s + r;
}
function ja(e, t, n, s) {
  let r = [],
    o = [],
    i = null;
  const l = ({ state: p }) => {
    const m = Yi(e, location),
      b = n.value,
      S = t.value;
    let v = 0;
    if (p) {
      if (((n.value = m), (t.value = p), i && i === b)) {
        i = null;
        return;
      }
      v = S ? p.position - S.position : 0;
    } else s(m);
    r.forEach((T) => {
      T(n.value, b, {
        delta: v,
        type: hn.pop,
        direction: v ? (v > 0 ? rn.forward : rn.back) : rn.unknown,
      });
    });
  };
  function c() {
    i = n.value;
  }
  function a(p) {
    r.push(p);
    const m = () => {
      const b = r.indexOf(p);
      b > -1 && r.splice(b, 1);
    };
    return o.push(m), m;
  }
  function u() {
    const { history: p } = window;
    p.state && p.replaceState(Q({}, p.state, { scroll: Yn() }), '');
  }
  function f() {
    for (const p of o) p();
    (o = []),
      window.removeEventListener('popstate', l),
      window.removeEventListener('beforeunload', u);
  }
  return (
    window.addEventListener('popstate', l),
    window.addEventListener('beforeunload', u, { passive: !0 }),
    { pauseListeners: c, listen: a, destroy: f }
  );
}
function ro(e, t, n, s = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: r ? Yn() : null,
  };
}
function Ua(e) {
  const { history: t, location: n } = window,
    s = { value: Yi(e, n) },
    r = { value: t.state };
  r.value ||
    o(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function o(c, a, u) {
    const f = e.indexOf('#'),
      p = f > -1 ? (n.host && document.querySelector('base') ? e : e.slice(f)) + c : Da() + e + c;
    try {
      t[u ? 'replaceState' : 'pushState'](a, '', p), (r.value = a);
    } catch (m) {
      console.error(m), n[u ? 'replace' : 'assign'](p);
    }
  }
  function i(c, a) {
    const u = Q({}, t.state, ro(r.value.back, c, r.value.forward, !0), a, {
      position: r.value.position,
    });
    o(c, u, !0), (s.value = c);
  }
  function l(c, a) {
    const u = Q({}, r.value, t.state, { forward: c, scroll: Yn() });
    o(u.current, u, !0);
    const f = Q({}, ro(s.value, c, null), { position: u.position + 1 }, a);
    o(c, f, !1), (s.value = c);
  }
  return { location: s, state: r, push: l, replace: i };
}
function Ba(e) {
  e = Ta(e);
  const t = Ua(e),
    n = ja(e, t.state, t.location, t.replace);
  function s(o, i = !0) {
    i || n.pauseListeners(), history.go(o);
  }
  const r = Q({ location: '', base: e, go: s, createHref: Na.bind(null, e) }, t, n);
  return (
    Object.defineProperty(r, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(r, 'state', { enumerable: !0, get: () => t.state.value }),
    r
  );
}
function Ha(e) {
  return typeof e == 'string' || (e && typeof e == 'object');
}
function Zi(e) {
  return typeof e == 'string' || typeof e == 'symbol';
}
const el = Symbol('');
var oo;
(function (e) {
  (e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated');
})(oo || (oo = {}));
function Ht(e, t) {
  return Q(new Error(), { type: e, [el]: !0 }, t);
}
function Ze(e, t) {
  return e instanceof Error && el in e && (t == null || !!(e.type & t));
}
const io = '[^/]+?',
  $a = { sensitive: !1, strict: !1, start: !0, end: !0 },
  ka = /[.+*?^${}()[\]/\\]/g;
function qa(e, t) {
  const n = Q({}, $a, t),
    s = [];
  let r = n.start ? '^' : '';
  const o = [];
  for (const a of e) {
    const u = a.length ? [] : [90];
    n.strict && !a.length && (r += '/');
    for (let f = 0; f < a.length; f++) {
      const p = a[f];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (p.type === 0) f || (r += '/'), (r += p.value.replace(ka, '\\$&')), (m += 40);
      else if (p.type === 1) {
        const { value: b, repeatable: S, optional: v, regexp: T } = p;
        o.push({ name: b, repeatable: S, optional: v });
        const A = T || io;
        if (A !== io) {
          m += 10;
          try {
            new RegExp(`(${A})`);
          } catch (I) {
            throw new Error(`Invalid custom RegExp for param "${b}" (${A}): ` + I.message);
          }
        }
        let N = S ? `((?:${A})(?:/(?:${A}))*)` : `(${A})`;
        f || (N = v && a.length < 2 ? `(?:/${N})` : '/' + N),
          v && (N += '?'),
          (r += N),
          (m += 20),
          v && (m += -8),
          S && (m += -20),
          A === '.*' && (m += -50);
      }
      u.push(m);
    }
    s.push(u);
  }
  if (n.strict && n.end) {
    const a = s.length - 1;
    s[a][s[a].length - 1] += 0.7000000000000001;
  }
  n.strict || (r += '/?'), n.end ? (r += '$') : n.strict && !r.endsWith('/') && (r += '(?:/|$)');
  const i = new RegExp(r, n.sensitive ? '' : 'i');
  function l(a) {
    const u = a.match(i),
      f = {};
    if (!u) return null;
    for (let p = 1; p < u.length; p++) {
      const m = u[p] || '',
        b = o[p - 1];
      f[b.name] = m && b.repeatable ? m.split('/') : m;
    }
    return f;
  }
  function c(a) {
    let u = '',
      f = !1;
    for (const p of e) {
      (!f || !u.endsWith('/')) && (u += '/'), (f = !1);
      for (const m of p)
        if (m.type === 0) u += m.value;
        else if (m.type === 1) {
          const { value: b, repeatable: S, optional: v } = m,
            T = b in a ? a[b] : '';
          if (Ue(T) && !S)
            throw new Error(
              `Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`
            );
          const A = Ue(T) ? T.join('/') : T;
          if (!A)
            if (v) p.length < 2 && (u.endsWith('/') ? (u = u.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${b}"`);
          u += A;
        }
    }
    return u || '/';
  }
  return { re: i, score: s, keys: o, parse: l, stringify: c };
}
function Va(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n];
    if (s) return s;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === 80
        ? 1
        : -1
      : 0;
}
function tl(e, t) {
  let n = 0;
  const s = e.score,
    r = t.score;
  for (; n < s.length && n < r.length; ) {
    const o = Va(s[n], r[n]);
    if (o) return o;
    n++;
  }
  if (Math.abs(r.length - s.length) === 1) {
    if (lo(s)) return 1;
    if (lo(r)) return -1;
  }
  return r.length - s.length;
}
function lo(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Wa = { type: 0, value: '' },
  Ka = /[a-zA-Z0-9_]/;
function za(e) {
  if (!e) return [[]];
  if (e === '/') return [[Wa]];
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${a}": ${m}`);
  }
  let n = 0,
    s = n;
  const r = [];
  let o;
  function i() {
    o && r.push(o), (o = []);
  }
  let l = 0,
    c,
    a = '',
    u = '';
  function f() {
    a &&
      (n === 0
        ? o.push({ type: 0, value: a })
        : n === 1 || n === 2 || n === 3
          ? (o.length > 1 &&
              (c === '*' || c === '+') &&
              t(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`),
            o.push({
              type: 1,
              value: a,
              regexp: u,
              repeatable: c === '*' || c === '+',
              optional: c === '*' || c === '?',
            }))
          : t('Invalid state to consume buffer'),
      (a = ''));
  }
  function p() {
    a += c;
  }
  for (; l < e.length; ) {
    if (((c = e[l++]), c === '\\' && n !== 2)) {
      (s = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        c === '/' ? (a && f(), i()) : c === ':' ? (f(), (n = 1)) : p();
        break;
      case 4:
        p(), (n = s);
        break;
      case 1:
        c === '('
          ? (n = 2)
          : Ka.test(c)
            ? p()
            : (f(), (n = 0), c !== '*' && c !== '?' && c !== '+' && l--);
        break;
      case 2:
        c === ')' ? (u[u.length - 1] == '\\' ? (u = u.slice(0, -1) + c) : (n = 3)) : (u += c);
        break;
      case 3:
        f(), (n = 0), c !== '*' && c !== '?' && c !== '+' && l--, (u = '');
        break;
      default:
        t('Unknown state');
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${a}"`), f(), i(), r;
}
function Ja(e, t, n) {
  const s = qa(za(e.path), n),
    r = Q(s, { record: e, parent: t, children: [], alias: [] });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function Ga(e, t) {
  const n = [],
    s = new Map();
  t = fo({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(f) {
    return s.get(f);
  }
  function o(f, p, m) {
    const b = !m,
      S = uo(f);
    S.aliasOf = m && m.record;
    const v = fo(t, f),
      T = [S];
    if ('alias' in f) {
      const I = typeof f.alias == 'string' ? [f.alias] : f.alias;
      for (const j of I)
        T.push(
          uo(
            Q({}, S, {
              components: m ? m.record.components : S.components,
              path: j,
              aliasOf: m ? m.record : S,
            })
          )
        );
    }
    let A, N;
    for (const I of T) {
      const { path: j } = I;
      if (p && j[0] !== '/') {
        const ee = p.record.path,
          z = ee[ee.length - 1] === '/' ? '' : '/';
        I.path = p.record.path + (j && z + j);
      }
      if (
        ((A = Ja(I, p, v)),
        m
          ? m.alias.push(A)
          : ((N = N || A), N !== A && N.alias.push(A), b && f.name && !ao(A) && i(f.name)),
        nl(A) && c(A),
        S.children)
      ) {
        const ee = S.children;
        for (let z = 0; z < ee.length; z++) o(ee[z], A, m && m.children[z]);
      }
      m = m || A;
    }
    return N
      ? () => {
          i(N);
        }
      : sn;
  }
  function i(f) {
    if (Zi(f)) {
      const p = s.get(f);
      p && (s.delete(f), n.splice(n.indexOf(p), 1), p.children.forEach(i), p.alias.forEach(i));
    } else {
      const p = n.indexOf(f);
      p > -1 &&
        (n.splice(p, 1),
        f.record.name && s.delete(f.record.name),
        f.children.forEach(i),
        f.alias.forEach(i));
    }
  }
  function l() {
    return n;
  }
  function c(f) {
    const p = Ya(f, n);
    n.splice(p, 0, f), f.record.name && !ao(f) && s.set(f.record.name, f);
  }
  function a(f, p) {
    let m,
      b = {},
      S,
      v;
    if ('name' in f && f.name) {
      if (((m = s.get(f.name)), !m)) throw Ht(1, { location: f });
      (v = m.record.name),
        (b = Q(
          co(
            p.params,
            m.keys
              .filter((N) => !N.optional)
              .concat(m.parent ? m.parent.keys.filter((N) => N.optional) : [])
              .map((N) => N.name)
          ),
          f.params &&
            co(
              f.params,
              m.keys.map((N) => N.name)
            )
        )),
        (S = m.stringify(b));
    } else if (f.path != null)
      (S = f.path), (m = n.find((N) => N.re.test(S))), m && ((b = m.parse(S)), (v = m.record.name));
    else {
      if (((m = p.name ? s.get(p.name) : n.find((N) => N.re.test(p.path))), !m))
        throw Ht(1, { location: f, currentLocation: p });
      (v = m.record.name), (b = Q({}, p.params, f.params)), (S = m.stringify(b));
    }
    const T = [];
    let A = m;
    for (; A; ) T.unshift(A.record), (A = A.parent);
    return { name: v, path: S, params: b, matched: T, meta: Qa(T) };
  }
  e.forEach((f) => o(f));
  function u() {
    (n.length = 0), s.clear();
  }
  return {
    addRoute: o,
    resolve: a,
    removeRoute: i,
    clearRoutes: u,
    getRoutes: l,
    getRecordMatcher: r,
  };
}
function co(e, t) {
  const n = {};
  for (const s of t) s in e && (n[s] = e[s]);
  return n;
}
function uo(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: Xa(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component },
  };
  return Object.defineProperty(t, 'mods', { value: {} }), t;
}
function Xa(e) {
  const t = {},
    n = e.props || !1;
  if ('component' in e) t.default = n;
  else for (const s in e.components) t[s] = typeof n == 'object' ? n[s] : n;
  return t;
}
function ao(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Qa(e) {
  return e.reduce((t, n) => Q(t, n.meta), {});
}
function fo(e, t) {
  const n = {};
  for (const s in e) n[s] = s in t ? t[s] : e[s];
  return n;
}
function Ya(e, t) {
  let n = 0,
    s = t.length;
  for (; n !== s; ) {
    const o = (n + s) >> 1;
    tl(e, t[o]) < 0 ? (s = o) : (n = o + 1);
  }
  const r = Za(e);
  return r && (s = t.lastIndexOf(r, s - 1)), s;
}
function Za(e) {
  let t = e;
  for (; (t = t.parent); ) if (nl(t) && tl(e, t) === 0) return t;
}
function nl({ record: e }) {
  return !!(e.name || (e.components && Object.keys(e.components).length) || e.redirect);
}
function ef(e) {
  const t = {};
  if (e === '' || e === '?') return t;
  const s = (e[0] === '?' ? e.slice(1) : e).split('&');
  for (let r = 0; r < s.length; ++r) {
    const o = s[r].replace(zi, ' '),
      i = o.indexOf('='),
      l = dn(i < 0 ? o : o.slice(0, i)),
      c = i < 0 ? null : dn(o.slice(i + 1));
    if (l in t) {
      let a = t[l];
      Ue(a) || (a = t[l] = [a]), a.push(c);
    } else t[l] = c;
  }
  return t;
}
function ho(e) {
  let t = '';
  for (let n in e) {
    const s = e[n];
    if (((n = wa(n)), s == null)) {
      s !== void 0 && (t += (t.length ? '&' : '') + n);
      continue;
    }
    (Ue(s) ? s.map((o) => o && js(o)) : [s && js(s)]).forEach((o) => {
      o !== void 0 && ((t += (t.length ? '&' : '') + n), o != null && (t += '=' + o));
    });
  }
  return t;
}
function tf(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 &&
      (t[n] = Ue(s) ? s.map((r) => (r == null ? null : '' + r)) : s == null ? s : '' + s);
  }
  return t;
}
const nf = Symbol(''),
  po = Symbol(''),
  yr = Symbol(''),
  sl = Symbol(''),
  Bs = Symbol('');
function Kt() {
  let e = [];
  function t(s) {
    return (
      e.push(s),
      () => {
        const r = e.indexOf(s);
        r > -1 && e.splice(r, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function at(e, t, n, s, r, o = (i) => i()) {
  const i = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || []);
  return () =>
    new Promise((l, c) => {
      const a = (p) => {
          p === !1
            ? c(Ht(4, { from: n, to: t }))
            : p instanceof Error
              ? c(p)
              : Ha(p)
                ? c(Ht(2, { from: t, to: p }))
                : (i && s.enterCallbacks[r] === i && typeof p == 'function' && i.push(p), l());
        },
        u = o(() => e.call(s && s.instances[r], t, n, a));
      let f = Promise.resolve(u);
      e.length < 3 && (f = f.then(a)), f.catch((p) => c(p));
    });
}
function ws(e, t, n, s, r = (o) => o()) {
  const o = [];
  for (const i of e)
    for (const l in i.components) {
      let c = i.components[l];
      if (!(t !== 'beforeRouteEnter' && !i.instances[l]))
        if (Wi(c)) {
          const u = (c.__vccOpts || c)[t];
          u && o.push(at(u, n, s, i, l, r));
        } else {
          let a = c();
          o.push(() =>
            a.then((u) => {
              if (!u) throw new Error(`Couldn't resolve component "${l}" at "${i.path}"`);
              const f = ua(u) ? u.default : u;
              (i.mods[l] = u), (i.components[l] = f);
              const m = (f.__vccOpts || f)[t];
              return m && at(m, n, s, i, l, r)();
            })
          );
        }
    }
  return o;
}
function mo(e) {
  const t = Ge(yr),
    n = Ge(sl),
    s = Ie(() => {
      const c = Dt(e.to);
      return t.resolve(c);
    }),
    r = Ie(() => {
      const { matched: c } = s.value,
        { length: a } = c,
        u = c[a - 1],
        f = n.matched;
      if (!u || !f.length) return -1;
      const p = f.findIndex(Bt.bind(null, u));
      if (p > -1) return p;
      const m = go(c[a - 2]);
      return a > 1 && go(u) === m && f[f.length - 1].path !== m
        ? f.findIndex(Bt.bind(null, c[a - 2]))
        : p;
    }),
    o = Ie(() => r.value > -1 && cf(n.params, s.value.params)),
    i = Ie(() => r.value > -1 && r.value === n.matched.length - 1 && Qi(n.params, s.value.params));
  function l(c = {}) {
    if (lf(c)) {
      const a = t[Dt(e.replace) ? 'replace' : 'push'](Dt(e.to)).catch(sn);
      return (
        e.viewTransition &&
          typeof document < 'u' &&
          'startViewTransition' in document &&
          document.startViewTransition(() => a),
        a
      );
    }
    return Promise.resolve();
  }
  return { route: s, href: Ie(() => s.value.href), isActive: o, isExactActive: i, navigate: l };
}
function sf(e) {
  return e.length === 1 ? e[0] : e;
}
const rf = ar({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
      viewTransition: Boolean,
    },
    useLink: mo,
    setup(e, { slots: t }) {
      const n = mn(mo(e)),
        { options: s } = Ge(yr),
        r = Ie(() => ({
          [yo(e.activeClass, s.linkActiveClass, 'router-link-active')]: n.isActive,
          [yo(e.exactActiveClass, s.linkExactActiveClass, 'router-link-exact-active')]:
            n.isExactActive,
        }));
      return () => {
        const o = t.default && sf(t.default(n));
        return e.custom
          ? o
          : Ui(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value,
              },
              o
            );
      };
    },
  }),
  of = rf;
function lf(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target');
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function cf(e, t) {
  for (const n in t) {
    const s = t[n],
      r = e[n];
    if (typeof s == 'string') {
      if (s !== r) return !1;
    } else if (!Ue(r) || r.length !== s.length || s.some((o, i) => o !== r[i])) return !1;
  }
  return !0;
}
function go(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
const yo = (e, t, n) => e ?? t ?? n,
  uf = ar({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = Ge(Bs),
        r = Ie(() => e.route || s.value),
        o = Ge(po, 0),
        i = Ie(() => {
          let a = Dt(o);
          const { matched: u } = r.value;
          let f;
          for (; (f = u[a]) && !f.components; ) a++;
          return a;
        }),
        l = Ie(() => r.value.matched[i.value]);
      vn(
        po,
        Ie(() => i.value + 1)
      ),
        vn(nf, l),
        vn(Bs, r);
      const c = Kn();
      return (
        en(
          () => [c.value, l.value, e.name],
          ([a, u, f], [p, m, b]) => {
            u &&
              ((u.instances[f] = a),
              m &&
                m !== u &&
                a &&
                a === p &&
                (u.leaveGuards.size || (u.leaveGuards = m.leaveGuards),
                u.updateGuards.size || (u.updateGuards = m.updateGuards))),
              a && u && (!m || !Bt(u, m) || !p) && (u.enterCallbacks[f] || []).forEach((S) => S(a));
          },
          { flush: 'post' }
        ),
        () => {
          const a = r.value,
            u = e.name,
            f = l.value,
            p = f && f.components[u];
          if (!p) return bo(n.default, { Component: p, route: a });
          const m = f.props[u],
            b = m ? (m === !0 ? a.params : typeof m == 'function' ? m(a) : m) : null,
            v = Ui(
              p,
              Q({}, b, t, {
                onVnodeUnmounted: (T) => {
                  T.component.isUnmounted && (f.instances[u] = null);
                },
                ref: c,
              })
            );
          return bo(n.default, { Component: v, route: a }) || v;
        }
      );
    },
  });
function bo(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const af = uf;
function ff(e) {
  const t = Ga(e.routes, e),
    n = e.parseQuery || ef,
    s = e.stringifyQuery || ho,
    r = e.history,
    o = Kt(),
    i = Kt(),
    l = Kt(),
    c = cc(it);
  let a = it;
  It &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual');
  const u = bs.bind(null, (w) => '' + w),
    f = bs.bind(null, Sa),
    p = bs.bind(null, dn);
  function m(w, M) {
    let F, D;
    return Zi(w) ? ((F = t.getRecordMatcher(w)), (D = M)) : (D = w), t.addRoute(D, F);
  }
  function b(w) {
    const M = t.getRecordMatcher(w);
    M && t.removeRoute(M);
  }
  function S() {
    return t.getRoutes().map((w) => w.record);
  }
  function v(w) {
    return !!t.getRecordMatcher(w);
  }
  function T(w, M) {
    if (((M = Q({}, M || c.value)), typeof w == 'string')) {
      const g = _s(n, w, M.path),
        _ = t.resolve({ path: g.path }, M),
        R = r.createHref(g.fullPath);
      return Q(g, _, { params: p(_.params), hash: dn(g.hash), redirectedFrom: void 0, href: R });
    }
    let F;
    if (w.path != null) F = Q({}, w, { path: _s(n, w.path, M.path).path });
    else {
      const g = Q({}, w.params);
      for (const _ in g) g[_] == null && delete g[_];
      (F = Q({}, w, { params: f(g) })), (M.params = f(M.params));
    }
    const D = t.resolve(F, M),
      te = w.hash || '';
    D.params = u(p(D.params));
    const d = xa(s, Q({}, w, { hash: _a(te), path: D.path })),
      h = r.createHref(d);
    return Q({ fullPath: d, hash: te, query: s === ho ? tf(w.query) : w.query || {} }, D, {
      redirectedFrom: void 0,
      href: h,
    });
  }
  function A(w) {
    return typeof w == 'string' ? _s(n, w, c.value.path) : Q({}, w);
  }
  function N(w, M) {
    if (a !== w) return Ht(8, { from: M, to: w });
  }
  function I(w) {
    return z(w);
  }
  function j(w) {
    return I(Q(A(w), { replace: !0 }));
  }
  function ee(w) {
    const M = w.matched[w.matched.length - 1];
    if (M && M.redirect) {
      const { redirect: F } = M;
      let D = typeof F == 'function' ? F(w) : F;
      return (
        typeof D == 'string' &&
          ((D = D.includes('?') || D.includes('#') ? (D = A(D)) : { path: D }), (D.params = {})),
        Q({ query: w.query, hash: w.hash, params: D.path != null ? {} : w.params }, D)
      );
    }
  }
  function z(w, M) {
    const F = (a = T(w)),
      D = c.value,
      te = w.state,
      d = w.force,
      h = w.replace === !0,
      g = ee(F);
    if (g)
      return z(
        Q(A(g), { state: typeof g == 'object' ? Q({}, te, g.state) : te, force: d, replace: h }),
        M || F
      );
    const _ = F;
    _.redirectedFrom = M;
    let R;
    return (
      !d && Oa(s, D, F) && ((R = Ht(16, { to: _, from: D })), He(D, D, !0, !1)),
      (R ? Promise.resolve(R) : ie(_, D))
        .catch((E) => (Ze(E) ? (Ze(E, 2) ? E : ot(E)) : X(E, _, D)))
        .then((E) => {
          if (E) {
            if (Ze(E, 2))
              return z(
                Q({ replace: h }, A(E.to), {
                  state: typeof E.to == 'object' ? Q({}, te, E.to.state) : te,
                  force: d,
                }),
                M || _
              );
          } else E = Oe(_, D, !0, h, te);
          return me(_, D, E), E;
        })
    );
  }
  function V(w, M) {
    const F = N(w, M);
    return F ? Promise.reject(F) : Promise.resolve();
  }
  function K(w) {
    const M = Tt.values().next().value;
    return M && typeof M.runWithContext == 'function' ? M.runWithContext(w) : w();
  }
  function ie(w, M) {
    let F;
    const [D, te, d] = df(w, M);
    F = ws(D.reverse(), 'beforeRouteLeave', w, M);
    for (const g of D)
      g.leaveGuards.forEach((_) => {
        F.push(at(_, w, M));
      });
    const h = V.bind(null, w, M);
    return (
      F.push(h),
      Ne(F)
        .then(() => {
          F = [];
          for (const g of o.list()) F.push(at(g, w, M));
          return F.push(h), Ne(F);
        })
        .then(() => {
          F = ws(te, 'beforeRouteUpdate', w, M);
          for (const g of te)
            g.updateGuards.forEach((_) => {
              F.push(at(_, w, M));
            });
          return F.push(h), Ne(F);
        })
        .then(() => {
          F = [];
          for (const g of d)
            if (g.beforeEnter)
              if (Ue(g.beforeEnter)) for (const _ of g.beforeEnter) F.push(at(_, w, M));
              else F.push(at(g.beforeEnter, w, M));
          return F.push(h), Ne(F);
        })
        .then(
          () => (
            w.matched.forEach((g) => (g.enterCallbacks = {})),
            (F = ws(d, 'beforeRouteEnter', w, M, K)),
            F.push(h),
            Ne(F)
          )
        )
        .then(() => {
          F = [];
          for (const g of i.list()) F.push(at(g, w, M));
          return F.push(h), Ne(F);
        })
        .catch((g) => (Ze(g, 8) ? g : Promise.reject(g)))
    );
  }
  function me(w, M, F) {
    l.list().forEach((D) => K(() => D(w, M, F)));
  }
  function Oe(w, M, F, D, te) {
    const d = N(w, M);
    if (d) return d;
    const h = M === it,
      g = It ? history.state : {};
    F &&
      (D || h
        ? r.replace(w.fullPath, Q({ scroll: h && g && g.scroll }, te))
        : r.push(w.fullPath, te)),
      (c.value = w),
      He(w, M, F, h),
      ot();
  }
  let we;
  function gt() {
    we ||
      (we = r.listen((w, M, F) => {
        if (!wn.listening) return;
        const D = T(w),
          te = ee(D);
        if (te) {
          z(Q(te, { replace: !0, force: !0 }), D).catch(sn);
          return;
        }
        a = D;
        const d = c.value;
        It && La(so(d.fullPath, F.delta), Yn()),
          ie(D, d)
            .catch((h) =>
              Ze(h, 12)
                ? h
                : Ze(h, 2)
                  ? (z(Q(A(h.to), { force: !0 }), D)
                      .then((g) => {
                        Ze(g, 20) && !F.delta && F.type === hn.pop && r.go(-1, !1);
                      })
                      .catch(sn),
                    Promise.reject())
                  : (F.delta && r.go(-F.delta, !1), X(h, D, d))
            )
            .then((h) => {
              (h = h || Oe(D, d, !1)),
                h &&
                  (F.delta && !Ze(h, 8)
                    ? r.go(-F.delta, !1)
                    : F.type === hn.pop && Ze(h, 20) && r.go(-1, !1)),
                me(D, d, h);
            })
            .catch(sn);
      }));
  }
  let rt = Kt(),
    oe = Kt(),
    W;
  function X(w, M, F) {
    ot(w);
    const D = oe.list();
    return D.length ? D.forEach((te) => te(w, M, F)) : console.error(w), Promise.reject(w);
  }
  function Qe() {
    return W && c.value !== it
      ? Promise.resolve()
      : new Promise((w, M) => {
          rt.add([w, M]);
        });
  }
  function ot(w) {
    return W || ((W = !w), gt(), rt.list().forEach(([M, F]) => (w ? F(w) : M())), rt.reset()), w;
  }
  function He(w, M, F, D) {
    const { scrollBehavior: te } = e;
    if (!It || !te) return Promise.resolve();
    const d =
      (!F && Ma(so(w.fullPath, 0))) || ((D || !F) && history.state && history.state.scroll) || null;
    return lr()
      .then(() => te(w, M, d))
      .then((h) => h && Ia(h))
      .catch((h) => X(h, w, M));
  }
  const Ee = (w) => r.go(w);
  let At;
  const Tt = new Set(),
    wn = {
      currentRoute: c,
      listening: !0,
      addRoute: m,
      removeRoute: b,
      clearRoutes: t.clearRoutes,
      hasRoute: v,
      getRoutes: S,
      resolve: T,
      options: e,
      push: I,
      replace: j,
      go: Ee,
      back: () => Ee(-1),
      forward: () => Ee(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: l.add,
      onError: oe.add,
      isReady: Qe,
      install(w) {
        const M = this;
        w.component('RouterLink', of),
          w.component('RouterView', af),
          (w.config.globalProperties.$router = M),
          Object.defineProperty(w.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => Dt(c),
          }),
          It && !At && c.value === it && ((At = !0), I(r.location).catch((te) => {}));
        const F = {};
        for (const te in it)
          Object.defineProperty(F, te, { get: () => c.value[te], enumerable: !0 });
        w.provide(yr, M), w.provide(sl, ri(F)), w.provide(Bs, c);
        const D = w.unmount;
        Tt.add(w),
          (w.unmount = function () {
            Tt.delete(w),
              Tt.size < 1 &&
                ((a = it), we && we(), (we = null), (c.value = it), (At = !1), (W = !1)),
              D();
          });
      },
    };
  function Ne(w) {
    return w.reduce((M, F) => M.then(() => K(F)), Promise.resolve());
  }
  return wn;
}
function df(e, t) {
  const n = [],
    s = [],
    r = [],
    o = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < o; i++) {
    const l = t.matched[i];
    l && (e.matched.find((a) => Bt(a, l)) ? s.push(l) : n.push(l));
    const c = e.matched[i];
    c && (t.matched.find((a) => Bt(a, c)) || r.push(c));
  }
  return [n, s, r];
}
const hf = oa('welcome', {
  state: () => ({ welcome: 'Hello from Pinia store!' }),
  actions: {
    setWelcome(e) {
      this.welcome = e;
    },
  },
});
function rl(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: pf } = Object.prototype,
  { getPrototypeOf: br } = Object,
  { iterator: Zn, toStringTag: ol } = Symbol,
  es = ((e) => (t) => {
    const n = pf.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Be = (e) => ((e = e.toLowerCase()), (t) => es(t) === e),
  ts = (e) => (t) => typeof t === e,
  { isArray: $t } = Array,
  pn = ts('undefined');
function mf(e) {
  return (
    e !== null &&
    !pn(e) &&
    e.constructor !== null &&
    !pn(e.constructor) &&
    ve(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const il = Be('ArrayBuffer');
function gf(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && il(e.buffer)),
    t
  );
}
const yf = ts('string'),
  ve = ts('function'),
  ll = ts('number'),
  ns = (e) => e !== null && typeof e == 'object',
  bf = (e) => e === !0 || e === !1,
  An = (e) => {
    if (es(e) !== 'object') return !1;
    const t = br(e);
    return (
      (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
      !(ol in e) &&
      !(Zn in e)
    );
  },
  _f = Be('Date'),
  wf = Be('File'),
  Ef = Be('Blob'),
  Sf = Be('FileList'),
  Rf = (e) => ns(e) && ve(e.pipe),
  vf = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (ve(e.append) &&
          ((t = es(e)) === 'formdata' ||
            (t === 'object' && ve(e.toString) && e.toString() === '[object FormData]'))))
    );
  },
  xf = Be('URLSearchParams'),
  [Of, Cf, Af, Tf] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(Be),
  Pf = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));
function bn(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let s, r;
  if ((typeof e != 'object' && (e = [e]), $t(e)))
    for (s = 0, r = e.length; s < r; s++) t.call(null, e[s], s, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let l;
    for (s = 0; s < i; s++) (l = o[s]), t.call(null, e[l], l, e);
  }
}
function cl(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let s = n.length,
    r;
  for (; s-- > 0; ) if (((r = n[s]), t === r.toLowerCase())) return r;
  return null;
}
const wt =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  ul = (e) => !pn(e) && e !== wt;
function Hs() {
  const { caseless: e } = (ul(this) && this) || {},
    t = {},
    n = (s, r) => {
      const o = (e && cl(t, r)) || r;
      An(t[o]) && An(s)
        ? (t[o] = Hs(t[o], s))
        : An(s)
          ? (t[o] = Hs({}, s))
          : $t(s)
            ? (t[o] = s.slice())
            : (t[o] = s);
    };
  for (let s = 0, r = arguments.length; s < r; s++) arguments[s] && bn(arguments[s], n);
  return t;
}
const Nf = (e, t, n, { allOwnKeys: s } = {}) => (
    bn(
      t,
      (r, o) => {
        n && ve(r) ? (e[o] = rl(r, n)) : (e[o] = r);
      },
      { allOwnKeys: s }
    ),
    e
  ),
  Ff = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  If = (e, t, n, s) => {
    (e.prototype = Object.create(t.prototype, s)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Lf = (e, t, n, s) => {
    let r, o, i;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (r = Object.getOwnPropertyNames(e), o = r.length; o-- > 0; )
        (i = r[o]), (!s || s(i, e, t)) && !l[i] && ((t[i] = e[i]), (l[i] = !0));
      e = n !== !1 && br(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Mf = (e, t, n) => {
    (e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length);
    const s = e.indexOf(t, n);
    return s !== -1 && s === n;
  },
  Df = (e) => {
    if (!e) return null;
    if ($t(e)) return e;
    let t = e.length;
    if (!ll(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  jf = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && br(Uint8Array)),
  Uf = (e, t) => {
    const s = (e && e[Zn]).call(e);
    let r;
    for (; (r = s.next()) && !r.done; ) {
      const o = r.value;
      t.call(e, o[0], o[1]);
    }
  },
  Bf = (e, t) => {
    let n;
    const s = [];
    for (; (n = e.exec(t)) !== null; ) s.push(n);
    return s;
  },
  Hf = Be('HTMLFormElement'),
  $f = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, s, r) {
      return s.toUpperCase() + r;
    }),
  _o = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  kf = Be('RegExp'),
  al = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      s = {};
    bn(n, (r, o) => {
      let i;
      (i = t(r, o, e)) !== !1 && (s[o] = i || r);
    }),
      Object.defineProperties(e, s);
  },
  qf = (e) => {
    al(e, (t, n) => {
      if (ve(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1) return !1;
      const s = e[n];
      if (ve(s)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  Vf = (e, t) => {
    const n = {},
      s = (r) => {
        r.forEach((o) => {
          n[o] = !0;
        });
      };
    return $t(e) ? s(e) : s(String(e).split(t)), n;
  },
  Wf = () => {},
  Kf = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function zf(e) {
  return !!(e && ve(e.append) && e[ol] === 'FormData' && e[Zn]);
}
const Jf = (e) => {
    const t = new Array(10),
      n = (s, r) => {
        if (ns(s)) {
          if (t.indexOf(s) >= 0) return;
          if (!('toJSON' in s)) {
            t[r] = s;
            const o = $t(s) ? [] : {};
            return (
              bn(s, (i, l) => {
                const c = n(i, r + 1);
                !pn(c) && (o[l] = c);
              }),
              (t[r] = void 0),
              o
            );
          }
        }
        return s;
      };
    return n(e, 0);
  },
  Gf = Be('AsyncFunction'),
  Xf = (e) => e && (ns(e) || ve(e)) && ve(e.then) && ve(e.catch),
  fl = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((n, s) => (
            wt.addEventListener(
              'message',
              ({ source: r, data: o }) => {
                r === wt && o === n && s.length && s.shift()();
              },
              !1
            ),
            (r) => {
              s.push(r), wt.postMessage(n, '*');
            }
          ))(`axios@${Math.random()}`, [])
        : (n) => setTimeout(n))(typeof setImmediate == 'function', ve(wt.postMessage)),
  Qf =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(wt)
      : (typeof process < 'u' && process.nextTick) || fl,
  Yf = (e) => e != null && ve(e[Zn]),
  y = {
    isArray: $t,
    isArrayBuffer: il,
    isBuffer: mf,
    isFormData: vf,
    isArrayBufferView: gf,
    isString: yf,
    isNumber: ll,
    isBoolean: bf,
    isObject: ns,
    isPlainObject: An,
    isReadableStream: Of,
    isRequest: Cf,
    isResponse: Af,
    isHeaders: Tf,
    isUndefined: pn,
    isDate: _f,
    isFile: wf,
    isBlob: Ef,
    isRegExp: kf,
    isFunction: ve,
    isStream: Rf,
    isURLSearchParams: xf,
    isTypedArray: jf,
    isFileList: Sf,
    forEach: bn,
    merge: Hs,
    extend: Nf,
    trim: Pf,
    stripBOM: Ff,
    inherits: If,
    toFlatObject: Lf,
    kindOf: es,
    kindOfTest: Be,
    endsWith: Mf,
    toArray: Df,
    forEachEntry: Uf,
    matchAll: Bf,
    isHTMLForm: Hf,
    hasOwnProperty: _o,
    hasOwnProp: _o,
    reduceDescriptors: al,
    freezeMethods: qf,
    toObjectSet: Vf,
    toCamelCase: $f,
    noop: Wf,
    toFiniteNumber: Kf,
    findKey: cl,
    global: wt,
    isContextDefined: ul,
    isSpecCompliantForm: zf,
    toJSONObject: Jf,
    isAsyncFn: Gf,
    isThenable: Xf,
    setImmediate: fl,
    asap: Qf,
    isIterable: Yf,
  };
function k(e, t, n, s, r) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    s && (this.request = s),
    r && ((this.response = r), (this.status = r.status ? r.status : null));
}
y.inherits(k, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: y.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const dl = k.prototype,
  hl = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  hl[e] = { value: e };
});
Object.defineProperties(k, hl);
Object.defineProperty(dl, 'isAxiosError', { value: !0 });
k.from = (e, t, n, s, r, o) => {
  const i = Object.create(dl);
  return (
    y.toFlatObject(
      e,
      i,
      function (c) {
        return c !== Error.prototype;
      },
      (l) => l !== 'isAxiosError'
    ),
    k.call(i, e.message, t, n, s, r),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
const Zf = null;
function $s(e) {
  return y.isPlainObject(e) || y.isArray(e);
}
function pl(e) {
  return y.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function wo(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (r, o) {
          return (r = pl(r)), !n && o ? '[' + r + ']' : r;
        })
        .join(n ? '.' : '')
    : t;
}
function ed(e) {
  return y.isArray(e) && !e.some($s);
}
const td = y.toFlatObject(y, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function ss(e, t, n) {
  if (!y.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (n = y.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (S, v) {
      return !y.isUndefined(v[S]);
    }));
  const s = n.metaTokens,
    r = n.visitor || u,
    o = n.dots,
    i = n.indexes,
    c = (n.Blob || (typeof Blob < 'u' && Blob)) && y.isSpecCompliantForm(t);
  if (!y.isFunction(r)) throw new TypeError('visitor must be a function');
  function a(b) {
    if (b === null) return '';
    if (y.isDate(b)) return b.toISOString();
    if (!c && y.isBlob(b)) throw new k('Blob is not supported. Use a Buffer instead.');
    return y.isArrayBuffer(b) || y.isTypedArray(b)
      ? c && typeof Blob == 'function'
        ? new Blob([b])
        : Buffer.from(b)
      : b;
  }
  function u(b, S, v) {
    let T = b;
    if (b && !v && typeof b == 'object') {
      if (y.endsWith(S, '{}')) (S = s ? S : S.slice(0, -2)), (b = JSON.stringify(b));
      else if (
        (y.isArray(b) && ed(b)) ||
        ((y.isFileList(b) || y.endsWith(S, '[]')) && (T = y.toArray(b)))
      )
        return (
          (S = pl(S)),
          T.forEach(function (N, I) {
            !(y.isUndefined(N) || N === null) &&
              t.append(i === !0 ? wo([S], I, o) : i === null ? S : S + '[]', a(N));
          }),
          !1
        );
    }
    return $s(b) ? !0 : (t.append(wo(v, S, o), a(b)), !1);
  }
  const f = [],
    p = Object.assign(td, { defaultVisitor: u, convertValue: a, isVisitable: $s });
  function m(b, S) {
    if (!y.isUndefined(b)) {
      if (f.indexOf(b) !== -1) throw Error('Circular reference detected in ' + S.join('.'));
      f.push(b),
        y.forEach(b, function (T, A) {
          (!(y.isUndefined(T) || T === null) &&
            r.call(t, T, y.isString(A) ? A.trim() : A, S, p)) === !0 && m(T, S ? S.concat(A) : [A]);
        }),
        f.pop();
    }
  }
  if (!y.isObject(e)) throw new TypeError('data must be an object');
  return m(e), t;
}
function Eo(e) {
  const t = { '!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+', '%00': '\0' };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (s) {
    return t[s];
  });
}
function _r(e, t) {
  (this._pairs = []), e && ss(e, this, t);
}
const ml = _r.prototype;
ml.append = function (t, n) {
  this._pairs.push([t, n]);
};
ml.toString = function (t) {
  const n = t
    ? function (s) {
        return t.call(this, s, Eo);
      }
    : Eo;
  return this._pairs
    .map(function (r) {
      return n(r[0]) + '=' + n(r[1]);
    }, '')
    .join('&');
};
function nd(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function gl(e, t, n) {
  if (!t) return e;
  const s = (n && n.encode) || nd;
  y.isFunction(n) && (n = { serialize: n });
  const r = n && n.serialize;
  let o;
  if (
    (r ? (o = r(t, n)) : (o = y.isURLSearchParams(t) ? t.toString() : new _r(t, n).toString(s)), o)
  ) {
    const i = e.indexOf('#');
    i !== -1 && (e = e.slice(0, i)), (e += (e.indexOf('?') === -1 ? '?' : '&') + o);
  }
  return e;
}
class So {
  constructor() {
    this.handlers = [];
  }
  use(t, n, s) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    y.forEach(this.handlers, function (s) {
      s !== null && t(s);
    });
  }
}
const yl = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  sd = typeof URLSearchParams < 'u' ? URLSearchParams : _r,
  rd = typeof FormData < 'u' ? FormData : null,
  od = typeof Blob < 'u' ? Blob : null,
  id = {
    isBrowser: !0,
    classes: { URLSearchParams: sd, FormData: rd, Blob: od },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  wr = typeof window < 'u' && typeof document < 'u',
  ks = (typeof navigator == 'object' && navigator) || void 0,
  ld = wr && (!ks || ['ReactNative', 'NativeScript', 'NS'].indexOf(ks.product) < 0),
  cd =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  ud = (wr && window.location.href) || 'http://localhost',
  ad = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: wr,
        hasStandardBrowserEnv: ld,
        hasStandardBrowserWebWorkerEnv: cd,
        navigator: ks,
        origin: ud,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  he = { ...ad, ...id };
function fd(e, t) {
  return ss(
    e,
    new he.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, s, r, o) {
          return he.isNode && y.isBuffer(n)
            ? (this.append(s, n.toString('base64')), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function dd(e) {
  return y.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === '[]' ? '' : t[1] || t[0]));
}
function hd(e) {
  const t = {},
    n = Object.keys(e);
  let s;
  const r = n.length;
  let o;
  for (s = 0; s < r; s++) (o = n[s]), (t[o] = e[o]);
  return t;
}
function bl(e) {
  function t(n, s, r, o) {
    let i = n[o++];
    if (i === '__proto__') return !0;
    const l = Number.isFinite(+i),
      c = o >= n.length;
    return (
      (i = !i && y.isArray(r) ? r.length : i),
      c
        ? (y.hasOwnProp(r, i) ? (r[i] = [r[i], s]) : (r[i] = s), !l)
        : ((!r[i] || !y.isObject(r[i])) && (r[i] = []),
          t(n, s, r[i], o) && y.isArray(r[i]) && (r[i] = hd(r[i])),
          !l)
    );
  }
  if (y.isFormData(e) && y.isFunction(e.entries)) {
    const n = {};
    return (
      y.forEachEntry(e, (s, r) => {
        t(dd(s), r, n, 0);
      }),
      n
    );
  }
  return null;
}
function pd(e, t, n) {
  if (y.isString(e))
    try {
      return (t || JSON.parse)(e), y.trim(e);
    } catch (s) {
      if (s.name !== 'SyntaxError') throw s;
    }
  return (n || JSON.stringify)(e);
}
const _n = {
  transitional: yl,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (t, n) {
      const s = n.getContentType() || '',
        r = s.indexOf('application/json') > -1,
        o = y.isObject(t);
      if ((o && y.isHTMLForm(t) && (t = new FormData(t)), y.isFormData(t)))
        return r ? JSON.stringify(bl(t)) : t;
      if (
        y.isArrayBuffer(t) ||
        y.isBuffer(t) ||
        y.isStream(t) ||
        y.isFile(t) ||
        y.isBlob(t) ||
        y.isReadableStream(t)
      )
        return t;
      if (y.isArrayBufferView(t)) return t.buffer;
      if (y.isURLSearchParams(t))
        return (
          n.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), t.toString()
        );
      let l;
      if (o) {
        if (s.indexOf('application/x-www-form-urlencoded') > -1)
          return fd(t, this.formSerializer).toString();
        if ((l = y.isFileList(t)) || s.indexOf('multipart/form-data') > -1) {
          const c = this.env && this.env.FormData;
          return ss(l ? { 'files[]': t } : t, c && new c(), this.formSerializer);
        }
      }
      return o || r ? (n.setContentType('application/json', !1), pd(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || _n.transitional,
        s = n && n.forcedJSONParsing,
        r = this.responseType === 'json';
      if (y.isResponse(t) || y.isReadableStream(t)) return t;
      if (t && y.isString(t) && ((s && !this.responseType) || r)) {
        const i = !(n && n.silentJSONParsing) && r;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (i)
            throw l.name === 'SyntaxError'
              ? k.from(l, k.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: he.classes.FormData, Blob: he.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: 'application/json, text/plain, */*', 'Content-Type': void 0 } },
};
y.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  _n.headers[e] = {};
});
const md = y.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  gd = (e) => {
    const t = {};
    let n, s, r;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (r = i.indexOf(':')),
              (n = i.substring(0, r).trim().toLowerCase()),
              (s = i.substring(r + 1).trim()),
              !(!n || (t[n] && md[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(s)
                    : (t[n] = [s])
                  : (t[n] = t[n] ? t[n] + ', ' + s : s));
          }),
      t
    );
  },
  Ro = Symbol('internals');
function zt(e) {
  return e && String(e).trim().toLowerCase();
}
function Tn(e) {
  return e === !1 || e == null ? e : y.isArray(e) ? e.map(Tn) : String(e);
}
function yd(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; (s = n.exec(e)); ) t[s[1]] = s[2];
  return t;
}
const bd = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Es(e, t, n, s, r) {
  if (y.isFunction(s)) return s.call(this, t, n);
  if ((r && (t = n), !!y.isString(t))) {
    if (y.isString(s)) return t.indexOf(s) !== -1;
    if (y.isRegExp(s)) return s.test(t);
  }
}
function _d(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s);
}
function wd(e, t) {
  const n = y.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((s) => {
    Object.defineProperty(e, s + n, {
      value: function (r, o, i) {
        return this[s].call(this, t, r, o, i);
      },
      configurable: !0,
    });
  });
}
let xe = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, s) {
    const r = this;
    function o(l, c, a) {
      const u = zt(c);
      if (!u) throw new Error('header name must be a non-empty string');
      const f = y.findKey(r, u);
      (!f || r[f] === void 0 || a === !0 || (a === void 0 && r[f] !== !1)) && (r[f || c] = Tn(l));
    }
    const i = (l, c) => y.forEach(l, (a, u) => o(a, u, c));
    if (y.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (y.isString(t) && (t = t.trim()) && !bd(t)) i(gd(t), n);
    else if (y.isObject(t) && y.isIterable(t)) {
      let l = {},
        c,
        a;
      for (const u of t) {
        if (!y.isArray(u)) throw TypeError('Object iterator must return a key-value pair');
        l[(a = u[0])] = (c = l[a]) ? (y.isArray(c) ? [...c, u[1]] : [c, u[1]]) : u[1];
      }
      i(l, n);
    } else t != null && o(n, t, s);
    return this;
  }
  get(t, n) {
    if (((t = zt(t)), t)) {
      const s = y.findKey(this, t);
      if (s) {
        const r = this[s];
        if (!n) return r;
        if (n === !0) return yd(r);
        if (y.isFunction(n)) return n.call(this, r, s);
        if (y.isRegExp(n)) return n.exec(r);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, n) {
    if (((t = zt(t)), t)) {
      const s = y.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!n || Es(this, this[s], s, n)));
    }
    return !1;
  }
  delete(t, n) {
    const s = this;
    let r = !1;
    function o(i) {
      if (((i = zt(i)), i)) {
        const l = y.findKey(s, i);
        l && (!n || Es(s, s[l], l, n)) && (delete s[l], (r = !0));
      }
    }
    return y.isArray(t) ? t.forEach(o) : o(t), r;
  }
  clear(t) {
    const n = Object.keys(this);
    let s = n.length,
      r = !1;
    for (; s--; ) {
      const o = n[s];
      (!t || Es(this, this[o], o, t, !0)) && (delete this[o], (r = !0));
    }
    return r;
  }
  normalize(t) {
    const n = this,
      s = {};
    return (
      y.forEach(this, (r, o) => {
        const i = y.findKey(s, o);
        if (i) {
          (n[i] = Tn(r)), delete n[o];
          return;
        }
        const l = t ? _d(o) : String(o).trim();
        l !== o && delete n[o], (n[l] = Tn(r)), (s[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      y.forEach(this, (s, r) => {
        s != null && s !== !1 && (n[r] = t && y.isArray(s) ? s.join(', ') : s);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`);
  }
  getSetCookie() {
    return this.get('set-cookie') || [];
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const s = new this(t);
    return n.forEach((r) => s.set(r)), s;
  }
  static accessor(t) {
    const s = (this[Ro] = this[Ro] = { accessors: {} }).accessors,
      r = this.prototype;
    function o(i) {
      const l = zt(i);
      s[l] || (wd(r, i), (s[l] = !0));
    }
    return y.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
xe.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
y.reduceDescriptors(xe.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(s) {
      this[n] = s;
    },
  };
});
y.freezeMethods(xe);
function Ss(e, t) {
  const n = this || _n,
    s = t || n,
    r = xe.from(s.headers);
  let o = s.data;
  return (
    y.forEach(e, function (l) {
      o = l.call(n, o, r.normalize(), t ? t.status : void 0);
    }),
    r.normalize(),
    o
  );
}
function _l(e) {
  return !!(e && e.__CANCEL__);
}
function kt(e, t, n) {
  k.call(this, e ?? 'canceled', k.ERR_CANCELED, t, n), (this.name = 'CanceledError');
}
y.inherits(kt, k, { __CANCEL__: !0 });
function wl(e, t, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status)
    ? e(n)
    : t(
        new k(
          'Request failed with status code ' + n.status,
          [k.ERR_BAD_REQUEST, k.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
          n.config,
          n.request,
          n
        )
      );
}
function Ed(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function Sd(e, t) {
  e = e || 10;
  const n = new Array(e),
    s = new Array(e);
  let r = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (c) {
      const a = Date.now(),
        u = s[o];
      i || (i = a), (n[r] = c), (s[r] = a);
      let f = o,
        p = 0;
      for (; f !== r; ) (p += n[f++]), (f = f % e);
      if (((r = (r + 1) % e), r === o && (o = (o + 1) % e), a - i < t)) return;
      const m = u && a - u;
      return m ? Math.round((p * 1e3) / m) : void 0;
    }
  );
}
function Rd(e, t) {
  let n = 0,
    s = 1e3 / t,
    r,
    o;
  const i = (a, u = Date.now()) => {
    (n = u), (r = null), o && (clearTimeout(o), (o = null)), e.apply(null, a);
  };
  return [
    (...a) => {
      const u = Date.now(),
        f = u - n;
      f >= s
        ? i(a, u)
        : ((r = a),
          o ||
            (o = setTimeout(() => {
              (o = null), i(r);
            }, s - f)));
    },
    () => r && i(r),
  ];
}
const Bn = (e, t, n = 3) => {
    let s = 0;
    const r = Sd(50, 250);
    return Rd((o) => {
      const i = o.loaded,
        l = o.lengthComputable ? o.total : void 0,
        c = i - s,
        a = r(c),
        u = i <= l;
      s = i;
      const f = {
        loaded: i,
        total: l,
        progress: l ? i / l : void 0,
        bytes: c,
        rate: a || void 0,
        estimated: a && l && u ? (l - i) / a : void 0,
        event: o,
        lengthComputable: l != null,
        [t ? 'download' : 'upload']: !0,
      };
      e(f);
    }, n);
  },
  vo = (e, t) => {
    const n = e != null;
    return [(s) => t[0]({ lengthComputable: n, total: e, loaded: s }), t[1]];
  },
  xo =
    (e) =>
    (...t) =>
      y.asap(() => e(...t)),
  vd = he.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, he.origin)),
        e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)
      ))(new URL(he.origin), he.navigator && /(msie|trident)/i.test(he.navigator.userAgent))
    : () => !0,
  xd = he.hasStandardBrowserEnv
    ? {
        write(e, t, n, s, r, o) {
          const i = [e + '=' + encodeURIComponent(t)];
          y.isNumber(n) && i.push('expires=' + new Date(n).toGMTString()),
            y.isString(s) && i.push('path=' + s),
            y.isString(r) && i.push('domain=' + r),
            o === !0 && i.push('secure'),
            (document.cookie = i.join('; '));
        },
        read(e) {
          const t = document.cookie.match(new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'));
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, '', Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Od(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Cd(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function El(e, t, n) {
  let s = !Od(t);
  return e && (s || n == !1) ? Cd(e, t) : t;
}
const Oo = (e) => (e instanceof xe ? { ...e } : e);
function Ot(e, t) {
  t = t || {};
  const n = {};
  function s(a, u, f, p) {
    return y.isPlainObject(a) && y.isPlainObject(u)
      ? y.merge.call({ caseless: p }, a, u)
      : y.isPlainObject(u)
        ? y.merge({}, u)
        : y.isArray(u)
          ? u.slice()
          : u;
  }
  function r(a, u, f, p) {
    if (y.isUndefined(u)) {
      if (!y.isUndefined(a)) return s(void 0, a, f, p);
    } else return s(a, u, f, p);
  }
  function o(a, u) {
    if (!y.isUndefined(u)) return s(void 0, u);
  }
  function i(a, u) {
    if (y.isUndefined(u)) {
      if (!y.isUndefined(a)) return s(void 0, a);
    } else return s(void 0, u);
  }
  function l(a, u, f) {
    if (f in t) return s(a, u);
    if (f in e) return s(void 0, a);
  }
  const c = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (a, u, f) => r(Oo(a), Oo(u), f, !0),
  };
  return (
    y.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
      const f = c[u] || r,
        p = f(e[u], t[u], u);
      (y.isUndefined(p) && f !== l) || (n[u] = p);
    }),
    n
  );
}
const Sl = (e) => {
    const t = Ot({}, e);
    let {
      data: n,
      withXSRFToken: s,
      xsrfHeaderName: r,
      xsrfCookieName: o,
      headers: i,
      auth: l,
    } = t;
    (t.headers = i = xe.from(i)),
      (t.url = gl(El(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer)),
      l &&
        i.set(
          'Authorization',
          'Basic ' +
            btoa(
              (l.username || '') +
                ':' +
                (l.password ? unescape(encodeURIComponent(l.password)) : '')
            )
        );
    let c;
    if (y.isFormData(n)) {
      if (he.hasStandardBrowserEnv || he.hasStandardBrowserWebWorkerEnv) i.setContentType(void 0);
      else if ((c = i.getContentType()) !== !1) {
        const [a, ...u] = c
          ? c
              .split(';')
              .map((f) => f.trim())
              .filter(Boolean)
          : [];
        i.setContentType([a || 'multipart/form-data', ...u].join('; '));
      }
    }
    if (
      he.hasStandardBrowserEnv &&
      (s && y.isFunction(s) && (s = s(t)), s || (s !== !1 && vd(t.url)))
    ) {
      const a = r && o && xd.read(o);
      a && i.set(r, a);
    }
    return t;
  },
  Ad = typeof XMLHttpRequest < 'u',
  Td =
    Ad &&
    function (e) {
      return new Promise(function (n, s) {
        const r = Sl(e);
        let o = r.data;
        const i = xe.from(r.headers).normalize();
        let { responseType: l, onUploadProgress: c, onDownloadProgress: a } = r,
          u,
          f,
          p,
          m,
          b;
        function S() {
          m && m(),
            b && b(),
            r.cancelToken && r.cancelToken.unsubscribe(u),
            r.signal && r.signal.removeEventListener('abort', u);
        }
        let v = new XMLHttpRequest();
        v.open(r.method.toUpperCase(), r.url, !0), (v.timeout = r.timeout);
        function T() {
          if (!v) return;
          const N = xe.from('getAllResponseHeaders' in v && v.getAllResponseHeaders()),
            j = {
              data: !l || l === 'text' || l === 'json' ? v.responseText : v.response,
              status: v.status,
              statusText: v.statusText,
              headers: N,
              config: e,
              request: v,
            };
          wl(
            function (z) {
              n(z), S();
            },
            function (z) {
              s(z), S();
            },
            j
          ),
            (v = null);
        }
        'onloadend' in v
          ? (v.onloadend = T)
          : (v.onreadystatechange = function () {
              !v ||
                v.readyState !== 4 ||
                (v.status === 0 && !(v.responseURL && v.responseURL.indexOf('file:') === 0)) ||
                setTimeout(T);
            }),
          (v.onabort = function () {
            v && (s(new k('Request aborted', k.ECONNABORTED, e, v)), (v = null));
          }),
          (v.onerror = function () {
            s(new k('Network Error', k.ERR_NETWORK, e, v)), (v = null);
          }),
          (v.ontimeout = function () {
            let I = r.timeout ? 'timeout of ' + r.timeout + 'ms exceeded' : 'timeout exceeded';
            const j = r.transitional || yl;
            r.timeoutErrorMessage && (I = r.timeoutErrorMessage),
              s(new k(I, j.clarifyTimeoutError ? k.ETIMEDOUT : k.ECONNABORTED, e, v)),
              (v = null);
          }),
          o === void 0 && i.setContentType(null),
          'setRequestHeader' in v &&
            y.forEach(i.toJSON(), function (I, j) {
              v.setRequestHeader(j, I);
            }),
          y.isUndefined(r.withCredentials) || (v.withCredentials = !!r.withCredentials),
          l && l !== 'json' && (v.responseType = r.responseType),
          a && (([p, b] = Bn(a, !0)), v.addEventListener('progress', p)),
          c &&
            v.upload &&
            (([f, m] = Bn(c)),
            v.upload.addEventListener('progress', f),
            v.upload.addEventListener('loadend', m)),
          (r.cancelToken || r.signal) &&
            ((u = (N) => {
              v && (s(!N || N.type ? new kt(null, e, v) : N), v.abort(), (v = null));
            }),
            r.cancelToken && r.cancelToken.subscribe(u),
            r.signal && (r.signal.aborted ? u() : r.signal.addEventListener('abort', u)));
        const A = Ed(r.url);
        if (A && he.protocols.indexOf(A) === -1) {
          s(new k('Unsupported protocol ' + A + ':', k.ERR_BAD_REQUEST, e));
          return;
        }
        v.send(o || null);
      });
    },
  Pd = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let s = new AbortController(),
        r;
      const o = function (a) {
        if (!r) {
          (r = !0), l();
          const u = a instanceof Error ? a : this.reason;
          s.abort(u instanceof k ? u : new kt(u instanceof Error ? u.message : u));
        }
      };
      let i =
        t &&
        setTimeout(() => {
          (i = null), o(new k(`timeout ${t} of ms exceeded`, k.ETIMEDOUT));
        }, t);
      const l = () => {
        e &&
          (i && clearTimeout(i),
          (i = null),
          e.forEach((a) => {
            a.unsubscribe ? a.unsubscribe(o) : a.removeEventListener('abort', o);
          }),
          (e = null));
      };
      e.forEach((a) => a.addEventListener('abort', o));
      const { signal: c } = s;
      return (c.unsubscribe = () => y.asap(l)), c;
    }
  },
  Nd = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let s = 0,
      r;
    for (; s < n; ) (r = s + t), yield e.slice(s, r), (s = r);
  },
  Fd = async function* (e, t) {
    for await (const n of Id(e)) yield* Nd(n, t);
  },
  Id = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: s } = await t.read();
        if (n) break;
        yield s;
      }
    } finally {
      await t.cancel();
    }
  },
  Co = (e, t, n, s) => {
    const r = Fd(e, t);
    let o = 0,
      i,
      l = (c) => {
        i || ((i = !0), s && s(c));
      };
    return new ReadableStream(
      {
        async pull(c) {
          try {
            const { done: a, value: u } = await r.next();
            if (a) {
              l(), c.close();
              return;
            }
            let f = u.byteLength;
            if (n) {
              let p = (o += f);
              n(p);
            }
            c.enqueue(new Uint8Array(u));
          } catch (a) {
            throw (l(a), a);
          }
        },
        cancel(c) {
          return l(c), r.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  rs = typeof fetch == 'function' && typeof Request == 'function' && typeof Response == 'function',
  Rl = rs && typeof ReadableStream == 'function',
  Ld =
    rs &&
    (typeof TextEncoder == 'function'
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  vl = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  Md =
    Rl &&
    vl(() => {
      let e = !1;
      const t = new Request(he.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (e = !0), 'half';
        },
      }).headers.has('Content-Type');
      return e && !t;
    }),
  Ao = 64 * 1024,
  qs = Rl && vl(() => y.isReadableStream(new Response('').body)),
  Hn = { stream: qs && ((e) => e.body) };
rs &&
  ((e) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((t) => {
      !Hn[t] &&
        (Hn[t] = y.isFunction(e[t])
          ? (n) => n[t]()
          : (n, s) => {
              throw new k(`Response type '${t}' is not supported`, k.ERR_NOT_SUPPORT, s);
            });
    });
  })(new Response());
const Dd = async (e) => {
    if (e == null) return 0;
    if (y.isBlob(e)) return e.size;
    if (y.isSpecCompliantForm(e))
      return (await new Request(he.origin, { method: 'POST', body: e }).arrayBuffer()).byteLength;
    if (y.isArrayBufferView(e) || y.isArrayBuffer(e)) return e.byteLength;
    if ((y.isURLSearchParams(e) && (e = e + ''), y.isString(e))) return (await Ld(e)).byteLength;
  },
  jd = async (e, t) => {
    const n = y.toFiniteNumber(e.getContentLength());
    return n ?? Dd(t);
  },
  Ud =
    rs &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: s,
        signal: r,
        cancelToken: o,
        timeout: i,
        onDownloadProgress: l,
        onUploadProgress: c,
        responseType: a,
        headers: u,
        withCredentials: f = 'same-origin',
        fetchOptions: p,
      } = Sl(e);
      a = a ? (a + '').toLowerCase() : 'text';
      let m = Pd([r, o && o.toAbortSignal()], i),
        b;
      const S =
        m &&
        m.unsubscribe &&
        (() => {
          m.unsubscribe();
        });
      let v;
      try {
        if (c && Md && n !== 'get' && n !== 'head' && (v = await jd(u, s)) !== 0) {
          let j = new Request(t, { method: 'POST', body: s, duplex: 'half' }),
            ee;
          if (
            (y.isFormData(s) && (ee = j.headers.get('content-type')) && u.setContentType(ee),
            j.body)
          ) {
            const [z, V] = vo(v, Bn(xo(c)));
            s = Co(j.body, Ao, z, V);
          }
        }
        y.isString(f) || (f = f ? 'include' : 'omit');
        const T = 'credentials' in Request.prototype;
        b = new Request(t, {
          ...p,
          signal: m,
          method: n.toUpperCase(),
          headers: u.normalize().toJSON(),
          body: s,
          duplex: 'half',
          credentials: T ? f : void 0,
        });
        let A = await fetch(b);
        const N = qs && (a === 'stream' || a === 'response');
        if (qs && (l || (N && S))) {
          const j = {};
          ['status', 'statusText', 'headers'].forEach((K) => {
            j[K] = A[K];
          });
          const ee = y.toFiniteNumber(A.headers.get('content-length')),
            [z, V] = (l && vo(ee, Bn(xo(l), !0))) || [];
          A = new Response(
            Co(A.body, Ao, z, () => {
              V && V(), S && S();
            }),
            j
          );
        }
        a = a || 'text';
        let I = await Hn[y.findKey(Hn, a) || 'text'](A, e);
        return (
          !N && S && S(),
          await new Promise((j, ee) => {
            wl(j, ee, {
              data: I,
              headers: xe.from(A.headers),
              status: A.status,
              statusText: A.statusText,
              config: e,
              request: b,
            });
          })
        );
      } catch (T) {
        throw (
          (S && S(),
          T && T.name === 'TypeError' && /Load failed|fetch/i.test(T.message)
            ? Object.assign(new k('Network Error', k.ERR_NETWORK, e, b), { cause: T.cause || T })
            : k.from(T, T && T.code, e, b))
        );
      }
    }),
  Vs = { http: Zf, xhr: Td, fetch: Ud };
y.forEach(Vs, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const To = (e) => `- ${e}`,
  Bd = (e) => y.isFunction(e) || e === null || e === !1,
  xl = {
    getAdapter: (e) => {
      e = y.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, s;
      const r = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let i;
        if (((s = n), !Bd(n) && ((s = Vs[(i = String(n)).toLowerCase()]), s === void 0)))
          throw new k(`Unknown adapter '${i}'`);
        if (s) break;
        r[i || '#' + o] = s;
      }
      if (!s) {
        const o = Object.entries(r).map(
          ([l, c]) =>
            `adapter ${l} ` +
            (c === !1 ? 'is not supported by the environment' : 'is not available in the build')
        );
        let i = t
          ? o.length > 1
            ? `since :
` +
              o.map(To).join(`
`)
            : ' ' + To(o[0])
          : 'as no adapter specified';
        throw new k('There is no suitable adapter to dispatch the request ' + i, 'ERR_NOT_SUPPORT');
      }
      return s;
    },
    adapters: Vs,
  };
function Rs(e) {
  if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted))
    throw new kt(null, e);
}
function Po(e) {
  return (
    Rs(e),
    (e.headers = xe.from(e.headers)),
    (e.data = Ss.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    xl
      .getAdapter(e.adapter || _n.adapter)(e)
      .then(
        function (s) {
          return (
            Rs(e),
            (s.data = Ss.call(e, e.transformResponse, s)),
            (s.headers = xe.from(s.headers)),
            s
          );
        },
        function (s) {
          return (
            _l(s) ||
              (Rs(e),
              s &&
                s.response &&
                ((s.response.data = Ss.call(e, e.transformResponse, s.response)),
                (s.response.headers = xe.from(s.response.headers)))),
            Promise.reject(s)
          );
        }
      )
  );
}
const Ol = '1.9.0',
  os = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
  os[e] = function (s) {
    return typeof s === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
  };
});
const No = {};
os.transitional = function (t, n, s) {
  function r(o, i) {
    return '[Axios v' + Ol + "] Transitional option '" + o + "'" + i + (s ? '. ' + s : '');
  }
  return (o, i, l) => {
    if (t === !1) throw new k(r(i, ' has been removed' + (n ? ' in ' + n : '')), k.ERR_DEPRECATED);
    return (
      n &&
        !No[i] &&
        ((No[i] = !0),
        console.warn(
          r(i, ' has been deprecated since v' + n + ' and will be removed in the near future')
        )),
      t ? t(o, i, l) : !0
    );
  };
};
os.spelling = function (t) {
  return (n, s) => (console.warn(`${s} is likely a misspelling of ${t}`), !0);
};
function Hd(e, t, n) {
  if (typeof e != 'object') throw new k('options must be an object', k.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let r = s.length;
  for (; r-- > 0; ) {
    const o = s[r],
      i = t[o];
    if (i) {
      const l = e[o],
        c = l === void 0 || i(l, o, e);
      if (c !== !0) throw new k('option ' + o + ' must be ' + c, k.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new k('Unknown option ' + o, k.ERR_BAD_OPTION);
  }
}
const Pn = { assertOptions: Hd, validators: os },
  We = Pn.validators;
let vt = class {
  constructor(t) {
    (this.defaults = t || {}), (this.interceptors = { request: new So(), response: new So() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (s) {
      if (s instanceof Error) {
        let r = {};
        Error.captureStackTrace ? Error.captureStackTrace(r) : (r = new Error());
        const o = r.stack ? r.stack.replace(/^.+\n/, '') : '';
        try {
          s.stack
            ? o &&
              !String(s.stack).endsWith(o.replace(/^.+\n.+\n/, '')) &&
              (s.stack +=
                `
` + o)
            : (s.stack = o);
        } catch {}
      }
      throw s;
    }
  }
  _request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}), (n = Ot(this.defaults, n));
    const { transitional: s, paramsSerializer: r, headers: o } = n;
    s !== void 0 &&
      Pn.assertOptions(
        s,
        {
          silentJSONParsing: We.transitional(We.boolean),
          forcedJSONParsing: We.transitional(We.boolean),
          clarifyTimeoutError: We.transitional(We.boolean),
        },
        !1
      ),
      r != null &&
        (y.isFunction(r)
          ? (n.paramsSerializer = { serialize: r })
          : Pn.assertOptions(r, { encode: We.function, serialize: We.function }, !0)),
      n.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (n.allowAbsoluteUrls = !0)),
      Pn.assertOptions(
        n,
        { baseUrl: We.spelling('baseURL'), withXsrfToken: We.spelling('withXSRFToken') },
        !0
      ),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase());
    let i = o && y.merge(o.common, o[n.method]);
    o &&
      y.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (b) => {
        delete o[b];
      }),
      (n.headers = xe.concat(i, o));
    const l = [];
    let c = !0;
    this.interceptors.request.forEach(function (S) {
      (typeof S.runWhen == 'function' && S.runWhen(n) === !1) ||
        ((c = c && S.synchronous), l.unshift(S.fulfilled, S.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function (S) {
      a.push(S.fulfilled, S.rejected);
    });
    let u,
      f = 0,
      p;
    if (!c) {
      const b = [Po.bind(this), void 0];
      for (b.unshift.apply(b, l), b.push.apply(b, a), p = b.length, u = Promise.resolve(n); f < p; )
        u = u.then(b[f++], b[f++]);
      return u;
    }
    p = l.length;
    let m = n;
    for (f = 0; f < p; ) {
      const b = l[f++],
        S = l[f++];
      try {
        m = b(m);
      } catch (v) {
        S.call(this, v);
        break;
      }
    }
    try {
      u = Po.call(this, m);
    } catch (b) {
      return Promise.reject(b);
    }
    for (f = 0, p = a.length; f < p; ) u = u.then(a[f++], a[f++]);
    return u;
  }
  getUri(t) {
    t = Ot(this.defaults, t);
    const n = El(t.baseURL, t.url, t.allowAbsoluteUrls);
    return gl(n, t.params, t.paramsSerializer);
  }
};
y.forEach(['delete', 'get', 'head', 'options'], function (t) {
  vt.prototype[t] = function (n, s) {
    return this.request(Ot(s || {}, { method: t, url: n, data: (s || {}).data }));
  };
});
y.forEach(['post', 'put', 'patch'], function (t) {
  function n(s) {
    return function (o, i, l) {
      return this.request(
        Ot(l || {}, {
          method: t,
          headers: s ? { 'Content-Type': 'multipart/form-data' } : {},
          url: o,
          data: i,
        })
      );
    };
  }
  (vt.prototype[t] = n()), (vt.prototype[t + 'Form'] = n(!0));
});
let $d = class Cl {
  constructor(t) {
    if (typeof t != 'function') throw new TypeError('executor must be a function.');
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const s = this;
    this.promise.then((r) => {
      if (!s._listeners) return;
      let o = s._listeners.length;
      for (; o-- > 0; ) s._listeners[o](r);
      s._listeners = null;
    }),
      (this.promise.then = (r) => {
        let o;
        const i = new Promise((l) => {
          s.subscribe(l), (o = l);
        }).then(r);
        return (
          (i.cancel = function () {
            s.unsubscribe(o);
          }),
          i
        );
      }),
      t(function (o, i, l) {
        s.reason || ((s.reason = new kt(o, i, l)), n(s.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (s) => {
        t.abort(s);
      };
    return this.subscribe(n), (t.signal.unsubscribe = () => this.unsubscribe(n)), t.signal;
  }
  static source() {
    let t;
    return {
      token: new Cl(function (r) {
        t = r;
      }),
      cancel: t,
    };
  }
};
function kd(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function qd(e) {
  return y.isObject(e) && e.isAxiosError === !0;
}
const Ws = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Ws).forEach(([e, t]) => {
  Ws[t] = e;
});
function Al(e) {
  const t = new vt(e),
    n = rl(vt.prototype.request, t);
  return (
    y.extend(n, vt.prototype, t, { allOwnKeys: !0 }),
    y.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (r) {
      return Al(Ot(e, r));
    }),
    n
  );
}
const ue = Al(_n);
ue.Axios = vt;
ue.CanceledError = kt;
ue.CancelToken = $d;
ue.isCancel = _l;
ue.VERSION = Ol;
ue.toFormData = ss;
ue.AxiosError = k;
ue.Cancel = ue.CanceledError;
ue.all = function (t) {
  return Promise.all(t);
};
ue.spread = kd;
ue.isAxiosError = qd;
ue.mergeConfig = Ot;
ue.AxiosHeaders = xe;
ue.formToJSON = (e) => bl(y.isHTMLForm(e) ? new FormData(e) : e);
ue.getAdapter = xl.getAdapter;
ue.HttpStatusCode = Ws;
ue.default = ue;
const {
    Axios: Yd,
    AxiosError: Zd,
    CanceledError: eh,
    isCancel: th,
    CancelToken: nh,
    VERSION: sh,
    all: rh,
    Cancel: oh,
    isAxiosError: ih,
    spread: lh,
    toFormData: ch,
    AxiosHeaders: uh,
    HttpStatusCode: ah,
    formToJSON: fh,
    getAdapter: dh,
    mergeConfig: hh,
  } = ue,
  Tl = ue.create({
    baseURL: 'http://localhost:3001/api',
    headers: { 'Content-Type': 'application/json' },
  });
Tl.interceptors.response.use(
  (e) => e,
  (e) => Promise.reject(e)
);
const Vd = ar({
    __name: 'HomeView',
    setup(e) {
      const t = hf(),
        n = Kn(t.welcome);
      async function s() {
        try {
          const { data: r } = await Tl.get('/');
          (n.value = r.message), t.setWelcome(r.message);
        } catch {
          n.value = 'Error fetching data';
        }
      }
      return (r, o) => (
        dr(),
        hr(
          Fe,
          null,
          [
            o[0] || (o[0] = nt('h1', null, 'Home', -1)),
            nt('p', null, Bo(n.value), 1),
            nt('button', { onClick: s }, 'Fetch from Server'),
          ],
          64
        )
      );
    },
  }),
  Wd = {};
function Kd(e, t) {
  return (
    dr(),
    hr(
      Fe,
      null,
      [
        t[0] || (t[0] = nt('h1', null, 'About', -1)),
        t[1] || (t[1] = nt('p', null, 'This is the about page.', -1)),
      ],
      64
    )
  );
}
const zd = Vi(Wd, [['render', Kd]]),
  Jd = [
    { path: '/', name: 'home', component: Vd },
    { path: '/about', name: 'about', component: zd },
  ],
  Gd = ff({ history: Ba('/'), routes: Jd }),
  Er = Xu(ca);
Er.use(Zu());
Er.use(Gd);
Er.mount('#app');
