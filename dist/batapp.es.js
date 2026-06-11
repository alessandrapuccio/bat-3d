import { jsx as be, Fragment as Bp, jsxs as Bn } from "https://esm.sh/react/jsx-runtime";
import * as Q from "https://esm.sh/react";
import pa, { useState as Zt, useRef as ci, useEffect as dr, useMemo as ha, useLayoutEffect as Gg, Suspense as Og } from "https://esm.sh/react";
import * as kg from "https://esm.sh/react-dom/client";
import Pg from "https://esm.sh/react-dom/client";
import * as Te from "https://esm.sh/three";
import { DoubleSide as Ru, Vector3 as Ke, Vector2 as $n, PerspectiveCamera as fi, OrthographicCamera as So, REVISION as Hg, TrianglesDrawMode as Ng, TriangleFanDrawMode as pu, TriangleStripDrawMode as yp, Mesh as es, IcosahedronGeometry as Ug, ShaderMaterial as ma, MOUSE as ri, TOUCH as oi, Spherical as Id, Quaternion as ia, Ray as zg, Plane as Jg, Loader as xu, LoaderUtils as Qi, FileLoader as eo, MeshPhysicalMaterial as pr, Color as no, SpotLight as jg, PointLight as Kg, DirectionalLight as Qg, Matrix4 as Zi, InstancedMesh as Xg, InstancedBufferAttribute as Yg, Object3D as Cp, TextureLoader as Wg, ImageBitmapLoader as Zg, BufferAttribute as Xi, InterleavedBuffer as Vg, InterleavedBufferAttribute as yo, LinearMipmapLinearFilter as Ep, NearestMipmapLinearFilter as qg, LinearMipmapNearestFilter as $g, NearestMipmapNearestFilter as eA, LinearFilter as Ot, NearestFilter as nA, RepeatWrapping as hu, MirroredRepeatWrapping as tA, ClampToEdgeWrapping as xr, PointsMaterial as rA, Material as Nl, LineBasicMaterial as oA, MeshStandardMaterial as Sp, MeshBasicMaterial as li, PropertyBinding as iA, BufferGeometry as Mp, SkinnedMesh as sA, LineSegments as aA, Line as lA, LineLoop as uA, Points as cA, Group as Ul, MathUtils as wp, Skeleton as fA, AnimationClip as dA, Bone as pA, InterpolateDiscrete as hA, InterpolateLinear as Ip, Texture as qr, VectorKeyframeTrack as Td, NumberKeyframeTrack as Fd, QuaternionKeyframeTrack as Rd, FrontSide as mA, Interpolant as gA, Box3 as ga, Sphere as _u, DataTextureLoader as Tp, HalfFloatType as kt, FloatType as _r, DataUtils as ui, RGBAFormat as Vi, RedFormat as AA, InstancedBufferGeometry as vA, Float32BufferAttribute as xd, InstancedInterleavedBuffer as mu, WireframeGeometry as bA, UniformsUtils as _d, UniformsLib as Dd, Vector4 as mi, Line3 as BA, Scene as Fp, PlaneGeometry as Rp, WebGLRenderTarget as xp, UVMapping as sa, WebGLRenderer as yA, DataTexture as CA, LinearSRGBColorSpace as gu, IntType as EA, ShortType as SA, ByteType as MA, UnsignedIntType as wA, UnsignedByteType as Au, LoadingManager as IA, LinearMipMapLinearFilter as Ld, SRGBColorSpace as TA, NoBlending as FA, CubeReflectionMapping as RA, EquirectangularReflectionMapping as xA, CubeTextureLoader as _A, WebGLCubeRenderTarget as DA } from "https://esm.sh/three";
function _p(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var zl = { exports: {} }, Jl = {}, jl = { exports: {} }, Kl = {};
var Gd;
function LA() {
  if (Gd) return Kl;
  Gd = 1;
  var a = pa;
  function t(A, B) {
    return A === B && (A !== 0 || 1 / A === 1 / B) || A !== A && B !== B;
  }
  var i = typeof Object.is == "function" ? Object.is : t, s = a.useState, l = a.useEffect, c = a.useLayoutEffect, d = a.useDebugValue;
  function h(A, B) {
    var C = B(), E = s({ inst: { value: C, getSnapshot: B } }), G = E[0].inst, x = E[1];
    return c(
      function() {
        G.value = C, G.getSnapshot = B, p(G) && x({ inst: G });
      },
      [A, C, B]
    ), l(
      function() {
        return p(G) && x({ inst: G }), A(function() {
          p(G) && x({ inst: G });
        });
      },
      [A]
    ), d(C), C;
  }
  function p(A) {
    var B = A.getSnapshot;
    A = A.value;
    try {
      var C = B();
      return !i(A, C);
    } catch {
      return !0;
    }
  }
  function g(A, B) {
    return B();
  }
  var v = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? g : h;
  return Kl.useSyncExternalStore = a.useSyncExternalStore !== void 0 ? a.useSyncExternalStore : v, Kl;
}
var Od;
function GA() {
  return Od || (Od = 1, jl.exports = LA()), jl.exports;
}
var kd;
function OA() {
  if (kd) return Jl;
  kd = 1;
  var a = pa, t = GA();
  function i(g, v) {
    return g === v && (g !== 0 || 1 / g === 1 / v) || g !== g && v !== v;
  }
  var s = typeof Object.is == "function" ? Object.is : i, l = t.useSyncExternalStore, c = a.useRef, d = a.useEffect, h = a.useMemo, p = a.useDebugValue;
  return Jl.useSyncExternalStoreWithSelector = function(g, v, A, B, C) {
    var E = c(null);
    if (E.current === null) {
      var G = { hasValue: !1, value: null };
      E.current = G;
    } else G = E.current;
    E = h(
      function() {
        function I(R) {
          if (!F) {
            if (F = !0, z = R, R = B(R), C !== void 0 && G.hasValue) {
              var re = G.value;
              if (C(re, R))
                return P = re;
            }
            return P = R;
          }
          if (re = P, s(z, R)) return re;
          var J = B(R);
          return C !== void 0 && C(re, J) ? (z = R, re) : (z = R, P = J);
        }
        var F = !1, z, P, j = A === void 0 ? null : A;
        return [
          function() {
            return I(v());
          },
          j === null ? void 0 : function() {
            return I(j());
          }
        ];
      },
      [v, A, B, C]
    );
    var x = l(g, E[0], E[1]);
    return d(
      function() {
        G.hasValue = !0, G.value = x;
      },
      [x]
    ), p(x), x;
  }, Jl;
}
var Pd;
function kA() {
  return Pd || (Pd = 1, zl.exports = OA()), zl.exports;
}
var PA = kA();
const HA = /* @__PURE__ */ _p(PA), Hd = (a) => {
  let t;
  const i = /* @__PURE__ */ new Set(), s = (g, v) => {
    const A = typeof g == "function" ? g(t) : g;
    if (!Object.is(A, t)) {
      const B = t;
      t = v ?? (typeof A != "object" || A === null) ? A : Object.assign({}, t, A), i.forEach((C) => C(t, B));
    }
  }, l = () => t, h = { setState: s, getState: l, getInitialState: () => p, subscribe: (g) => (i.add(g), () => i.delete(g)) }, p = t = a(s, l, h);
  return h;
}, NA = ((a) => a ? Hd(a) : Hd), { useSyncExternalStoreWithSelector: UA } = HA, zA = (a) => a;
function JA(a, t = zA, i) {
  const s = UA(
    a.subscribe,
    a.getState,
    a.getInitialState,
    t,
    i
  );
  return pa.useDebugValue(s), s;
}
const Nd = (a, t) => {
  const i = NA(a), s = (l, c = t) => JA(i, l, c);
  return Object.assign(s, i), s;
}, Dp = ((a, t) => a ? Nd(a, t) : Nd), jA = (a) => typeof a == "object" && typeof a.then == "function", Co = [];
function Lp(a, t, i = (s, l) => s === l) {
  if (a === t) return !0;
  if (!a || !t) return !1;
  const s = a.length;
  if (t.length !== s) return !1;
  for (let l = 0; l < s; l++) if (!i(a[l], t[l])) return !1;
  return !0;
}
function Gp(a, t = null, i = !1, s = {}) {
  t === null && (t = [a]);
  for (const c of Co)
    if (Lp(t, c.keys, c.equal)) {
      if (i) return;
      if (Object.prototype.hasOwnProperty.call(c, "error")) throw c.error;
      if (Object.prototype.hasOwnProperty.call(c, "response"))
        return s.lifespan && s.lifespan > 0 && (c.timeout && clearTimeout(c.timeout), c.timeout = setTimeout(c.remove, s.lifespan)), c.response;
      if (!i) throw c.promise;
    }
  const l = {
    keys: t,
    equal: s.equal,
    remove: () => {
      const c = Co.indexOf(l);
      c !== -1 && Co.splice(c, 1);
    },
    promise: (
      // Execute the promise
      (jA(a) ? a : a(...t)).then((c) => {
        l.response = c, s.lifespan && s.lifespan > 0 && (l.timeout = setTimeout(l.remove, s.lifespan));
      }).catch((c) => l.error = c)
    )
  };
  if (Co.push(l), !i) throw l.promise;
}
const KA = (a, t, i) => Gp(a, t, !1, i), QA = (a, t, i) => {
  Gp(a, t, !0, i);
}, XA = (a) => {
  if (a === void 0 || a.length === 0) Co.splice(0, Co.length);
  else {
    const t = Co.find((i) => Lp(a, i.keys, i.equal));
    t && t.remove();
  }
};
var Ql = { exports: {} }, Xl = {};
var Ud;
function YA() {
  return Ud || (Ud = 1, (function(a) {
    function t(_, q) {
      var de = _.length;
      _.push(q);
      e: for (; 0 < de; ) {
        var fe = de - 1 >>> 1, ce = _[fe];
        if (0 < l(ce, q))
          _[fe] = q, _[de] = ce, de = fe;
        else break e;
      }
    }
    function i(_) {
      return _.length === 0 ? null : _[0];
    }
    function s(_) {
      if (_.length === 0) return null;
      var q = _[0], de = _.pop();
      if (de !== q) {
        _[0] = de;
        e: for (var fe = 0, ce = _.length, Be = ce >>> 1; fe < Be; ) {
          var he = 2 * (fe + 1) - 1, Ce = _[he], Fe = he + 1, an = _[Fe];
          if (0 > l(Ce, de))
            Fe < ce && 0 > l(an, Ce) ? (_[fe] = an, _[Fe] = de, fe = Fe) : (_[fe] = Ce, _[he] = de, fe = he);
          else if (Fe < ce && 0 > l(an, de))
            _[fe] = an, _[Fe] = de, fe = Fe;
          else break e;
        }
      }
      return q;
    }
    function l(_, q) {
      var de = _.sortIndex - q.sortIndex;
      return de !== 0 ? de : _.id - q.id;
    }
    if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      a.unstable_now = function() {
        return c.now();
      };
    } else {
      var d = Date, h = d.now();
      a.unstable_now = function() {
        return d.now() - h;
      };
    }
    var p = [], g = [], v = 1, A = null, B = 3, C = !1, E = !1, G = !1, x = !1, I = typeof setTimeout == "function" ? setTimeout : null, F = typeof clearTimeout == "function" ? clearTimeout : null, z = typeof setImmediate < "u" ? setImmediate : null;
    function P(_) {
      for (var q = i(g); q !== null; ) {
        if (q.callback === null) s(g);
        else if (q.startTime <= _)
          s(g), q.sortIndex = q.expirationTime, t(p, q);
        else break;
        q = i(g);
      }
    }
    function j(_) {
      if (G = !1, P(_), !E)
        if (i(p) !== null)
          E = !0, R || (R = !0, ve());
        else {
          var q = i(g);
          q !== null && pe(j, q.startTime - _);
        }
    }
    var R = !1, re = -1, J = 5, O = -1;
    function K() {
      return x ? !0 : !(a.unstable_now() - O < J);
    }
    function ae() {
      if (x = !1, R) {
        var _ = a.unstable_now();
        O = _;
        var q = !0;
        try {
          e: {
            E = !1, G && (G = !1, F(re), re = -1), C = !0;
            var de = B;
            try {
              n: {
                for (P(_), A = i(p); A !== null && !(A.expirationTime > _ && K()); ) {
                  var fe = A.callback;
                  if (typeof fe == "function") {
                    A.callback = null, B = A.priorityLevel;
                    var ce = fe(
                      A.expirationTime <= _
                    );
                    if (_ = a.unstable_now(), typeof ce == "function") {
                      A.callback = ce, P(_), q = !0;
                      break n;
                    }
                    A === i(p) && s(p), P(_);
                  } else s(p);
                  A = i(p);
                }
                if (A !== null) q = !0;
                else {
                  var Be = i(g);
                  Be !== null && pe(
                    j,
                    Be.startTime - _
                  ), q = !1;
                }
              }
              break e;
            } finally {
              A = null, B = de, C = !1;
            }
            q = void 0;
          }
        } finally {
          q ? ve() : R = !1;
        }
      }
    }
    var ve;
    if (typeof z == "function")
      ve = function() {
        z(ae);
      };
    else if (typeof MessageChannel < "u") {
      var W = new MessageChannel(), le = W.port2;
      W.port1.onmessage = ae, ve = function() {
        le.postMessage(null);
      };
    } else
      ve = function() {
        I(ae, 0);
      };
    function pe(_, q) {
      re = I(function() {
        _(a.unstable_now());
      }, q);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(_) {
      _.callback = null;
    }, a.unstable_forceFrameRate = function(_) {
      0 > _ || 125 < _ ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : J = 0 < _ ? Math.floor(1e3 / _) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return B;
    }, a.unstable_next = function(_) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = B;
      }
      var de = B;
      B = q;
      try {
        return _();
      } finally {
        B = de;
      }
    }, a.unstable_requestPaint = function() {
      x = !0;
    }, a.unstable_runWithPriority = function(_, q) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var de = B;
      B = _;
      try {
        return q();
      } finally {
        B = de;
      }
    }, a.unstable_scheduleCallback = function(_, q, de) {
      var fe = a.unstable_now();
      switch (typeof de == "object" && de !== null ? (de = de.delay, de = typeof de == "number" && 0 < de ? fe + de : fe) : de = fe, _) {
        case 1:
          var ce = -1;
          break;
        case 2:
          ce = 250;
          break;
        case 5:
          ce = 1073741823;
          break;
        case 4:
          ce = 1e4;
          break;
        default:
          ce = 5e3;
      }
      return ce = de + ce, _ = {
        id: v++,
        callback: q,
        priorityLevel: _,
        startTime: de,
        expirationTime: ce,
        sortIndex: -1
      }, de > fe ? (_.sortIndex = de, t(g, _), i(p) === null && _ === i(g) && (G ? (F(re), re = -1) : G = !0, pe(j, de - fe))) : (_.sortIndex = ce, t(p, _), E || C || (E = !0, R || (R = !0, ve()))), _;
    }, a.unstable_shouldYield = K, a.unstable_wrapCallback = function(_) {
      var q = B;
      return function() {
        var de = B;
        B = q;
        try {
          return _.apply(this, arguments);
        } finally {
          B = de;
        }
      };
    };
  })(Xl)), Xl;
}
var zd;
function WA() {
  return zd || (zd = 1, Ql.exports = YA()), Ql.exports;
}
var vu = WA();
const ZA = /* @__PURE__ */ _p(vu);
function Du(a, t, i) {
  if (!a) return;
  if (i(a) === !0) return a;
  let s = t ? a.return : a.child;
  for (; s; ) {
    const l = Du(s, t, i);
    if (l) return l;
    s = t ? null : s.sibling;
  }
}
function Op(a) {
  try {
    return Object.defineProperties(a, {
      _currentRenderer: {
        get() {
          return null;
        },
        set() {
        }
      },
      _currentRenderer2: {
        get() {
          return null;
        },
        set() {
        }
      }
    });
  } catch {
    return a;
  }
}
const Lu = /* @__PURE__ */ Op(/* @__PURE__ */ Q.createContext(null));
class kp extends Q.Component {
  render() {
    return /* @__PURE__ */ Q.createElement(Lu.Provider, { value: this._reactInternals }, this.props.children);
  }
}
function Pp() {
  const a = Q.useContext(Lu);
  if (a === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const t = Q.useId();
  return Q.useMemo(() => {
    for (const i of [a, a?.alternate]) {
      if (!i) continue;
      const s = Du(i, !1, (l) => {
        let c = l.memoizedState;
        for (; c; ) {
          if (c.memoizedState === t) return !0;
          c = c.next;
        }
      });
      if (s) return s;
    }
  }, [a, t]);
}
const VA = /* @__PURE__ */ Symbol.for("react.context"), qA = (a) => a !== null && typeof a == "object" && "$$typeof" in a && a.$$typeof === VA;
function $A() {
  const a = Pp(), [t] = Q.useState(() => /* @__PURE__ */ new Map());
  t.clear();
  let i = a;
  for (; i; ) {
    const s = i.type;
    qA(s) && s !== Lu && !t.has(s) && t.set(s, Q.use(Op(s))), i = i.return;
  }
  return t;
}
function ev() {
  const a = $A();
  return Q.useMemo(
    () => Array.from(a.keys()).reduce(
      (t, i) => (s) => /* @__PURE__ */ Q.createElement(t, null, /* @__PURE__ */ Q.createElement(i.Provider, { ...s, value: a.get(i) })),
      (t) => /* @__PURE__ */ Q.createElement(kp, { ...t })
    ),
    [a]
  );
}
function Gu(a) {
  let t = a.root;
  for (; t.getState().previousRoot; ) t = t.getState().previousRoot;
  return t;
}
const Hp = (a) => a && a.isOrthographicCamera, nv = (a) => a && a.hasOwnProperty("current"), tv = (a) => a != null && (typeof a == "string" || typeof a == "number" || a.isColor), ns = /* @__PURE__ */ ((a, t) => typeof window < "u" && (((a = window.document) == null ? void 0 : a.createElement) || ((t = window.navigator) == null ? void 0 : t.product) === "ReactNative"))() ? Q.useLayoutEffect : Q.useEffect;
function Ou(a) {
  const t = Q.useRef(a);
  return ns(() => {
    t.current = a;
  }, [a]), t;
}
function rv() {
  const a = Pp(), t = ev();
  return Q.useMemo(() => ({
    children: i
  }) => {
    const l = !!Du(a, !0, (c) => c.type === Q.StrictMode) ? Q.StrictMode : Q.Fragment;
    return /* @__PURE__ */ be(l, {
      children: /* @__PURE__ */ be(t, {
        children: i
      })
    });
  }, [a, t]);
}
function ov({
  set: a
}) {
  return ns(() => (a(new Promise(() => null)), () => a(!1)), [a]), null;
}
const iv = /* @__PURE__ */ ((a) => (a = class extends Q.Component {
  constructor(...i) {
    super(...i), this.state = {
      error: !1
    };
  }
  componentDidCatch(i) {
    this.props.set(i);
  }
  render() {
    return this.state.error ? null : this.props.children;
  }
}, a.getDerivedStateFromError = () => ({
  error: !0
}), a))();
function Np(a) {
  var t;
  const i = typeof window < "u" ? (t = window.devicePixelRatio) != null ? t : 2 : 1;
  return Array.isArray(a) ? Math.min(Math.max(a[0], i), a[1]) : a;
}
function ii(a) {
  var t;
  return (t = a.__r3f) == null ? void 0 : t.root.getState();
}
const un = {
  obj: (a) => a === Object(a) && !un.arr(a) && typeof a != "function",
  fun: (a) => typeof a == "function",
  str: (a) => typeof a == "string",
  num: (a) => typeof a == "number",
  boo: (a) => typeof a == "boolean",
  und: (a) => a === void 0,
  nul: (a) => a === null,
  arr: (a) => Array.isArray(a),
  equ(a, t, {
    arrays: i = "shallow",
    objects: s = "reference",
    strict: l = !0
  } = {}) {
    if (typeof a != typeof t || !!a != !!t) return !1;
    if (un.str(a) || un.num(a) || un.boo(a)) return a === t;
    const c = un.obj(a);
    if (c && s === "reference") return a === t;
    const d = un.arr(a);
    if (d && i === "reference") return a === t;
    if ((d || c) && a === t) return !0;
    let h;
    for (h in a) if (!(h in t)) return !1;
    if (c && i === "shallow" && s === "shallow") {
      for (h in l ? t : a) if (!un.equ(a[h], t[h], {
        strict: l,
        objects: "reference"
      })) return !1;
    } else
      for (h in l ? t : a) if (a[h] !== t[h]) return !1;
    if (un.und(h)) {
      if (d && a.length === 0 && t.length === 0 || c && Object.keys(a).length === 0 && Object.keys(t).length === 0) return !0;
      if (a !== t) return !1;
    }
    return !0;
  }
};
function sv(a) {
  const t = {
    nodes: {},
    materials: {},
    meshes: {}
  };
  return a && a.traverse((i) => {
    i.name && (t.nodes[i.name] = i), i.material && !t.materials[i.material.name] && (t.materials[i.material.name] = i.material), i.isMesh && !t.meshes[i.name] && (t.meshes[i.name] = i);
  }), t;
}
function av(a) {
  a.type !== "Scene" && (a.dispose == null || a.dispose());
  for (const t in a) {
    const i = a[t];
    i?.type !== "Scene" && (i == null || i.dispose == null || i.dispose());
  }
}
const Up = ["children", "key", "ref"];
function lv(a) {
  const t = {};
  for (const i in a)
    Up.includes(i) || (t[i] = a[i]);
  return t;
}
function aa(a, t, i, s) {
  const l = a;
  let c = l?.__r3f;
  return c || (c = {
    root: t,
    type: i,
    parent: null,
    children: [],
    props: lv(s),
    object: l,
    eventCount: 0,
    handlers: {},
    isHidden: !1
  }, l && (l.__r3f = c)), c;
}
function qi(a, t) {
  if (!t.includes("-")) return {
    root: a,
    key: t,
    target: a[t]
  };
  if (t in a)
    return {
      root: a,
      key: t,
      target: a[t]
    };
  let i = a;
  const s = t.split("-");
  for (const l of s) {
    if (typeof i != "object" || i === null) {
      if (i !== void 0) {
        const c = s.slice(s.indexOf(l)).join("-");
        return {
          root: i,
          key: c,
          target: void 0
        };
      }
      return {
        root: a,
        key: t,
        target: void 0
      };
    }
    t = l, a = i, i = i[t];
  }
  return {
    root: a,
    key: t,
    target: i
  };
}
const Jd = /-\d+$/;
function la(a, t) {
  if (un.str(t.props.attach)) {
    if (Jd.test(t.props.attach)) {
      const l = t.props.attach.replace(Jd, ""), {
        root: c,
        key: d
      } = qi(a.object, l);
      Array.isArray(c[d]) || (c[d] = []);
    }
    const {
      root: i,
      key: s
    } = qi(a.object, t.props.attach);
    t.previousAttach = i[s], i[s] = t.object;
  } else un.fun(t.props.attach) && (t.previousAttach = t.props.attach(a.object, t.object));
}
function ua(a, t) {
  if (un.str(t.props.attach)) {
    const {
      root: i,
      key: s
    } = qi(a.object, t.props.attach), l = t.previousAttach;
    l === void 0 ? delete i[s] : i[s] = l;
  } else
    t.previousAttach == null || t.previousAttach(a.object, t.object);
  delete t.previousAttach;
}
const bu = [
  ...Up,
  // Instance props
  "args",
  "dispose",
  "attach",
  "object",
  "onUpdate",
  // Behavior flags
  "dispose"
], jd = /* @__PURE__ */ new Map();
function uv(a) {
  let t = jd.get(a.constructor);
  try {
    t || (t = new a.constructor(), jd.set(a.constructor, t));
  } catch {
  }
  return t;
}
function cv(a, t) {
  const i = {};
  for (const s in t)
    if (!bu.includes(s) && !un.equ(t[s], a.props[s])) {
      i[s] = t[s];
      for (const l in t)
        l.startsWith(`${s}-`) && (i[l] = t[l]);
    }
  for (const s in a.props) {
    if (bu.includes(s) || t.hasOwnProperty(s)) continue;
    const {
      root: l,
      key: c
    } = qi(a.object, s);
    if (l.constructor && l.constructor.length === 0) {
      const d = uv(l);
      un.und(d) || (i[c] = d[c]);
    } else
      i[c] = 0;
  }
  return i;
}
const fv = ["map", "emissiveMap", "sheenColorMap", "specularColorMap", "envMap"], dv = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;
function cr(a, t) {
  var i;
  const s = a.__r3f, l = s && Gu(s).getState(), c = s?.eventCount;
  for (const h in t) {
    let p = t[h];
    if (bu.includes(h)) continue;
    if (s && dv.test(h)) {
      typeof p == "function" ? s.handlers[h] = p : delete s.handlers[h], s.eventCount = Object.keys(s.handlers).length;
      continue;
    }
    if (p === void 0) continue;
    let {
      root: g,
      key: v,
      target: A
    } = qi(a, h);
    if (A === void 0 && (typeof g != "object" || g === null))
      throw Error(`R3F: Cannot set "${h}". Ensure it is an object before setting "${v}".`);
    if (A instanceof Te.Layers && p instanceof Te.Layers)
      A.mask = p.mask;
    else if (A instanceof Te.Color && tv(p))
      A.set(p);
    else if (A !== null && typeof A == "object" && typeof A.set == "function" && typeof A.copy == "function" && p != null && p.constructor && A.constructor === p.constructor)
      A.copy(p);
    else if (A !== null && typeof A == "object" && typeof A.set == "function" && Array.isArray(p))
      typeof A.fromArray == "function" ? A.fromArray(p) : A.set(...p);
    else if (A !== null && typeof A == "object" && typeof A.set == "function" && typeof p == "number")
      typeof A.setScalar == "function" ? A.setScalar(p) : A.set(p);
    else if (g instanceof Te.ShaderMaterial && v === "uniforms" && un.obj(p)) {
      un.obj(g.uniforms) || (g.uniforms = {});
      const B = g.uniforms, C = p;
      for (const E in C) {
        const G = C[E], x = B[E];
        x ? Object.assign(x, G) : B[E] = {
          ...G
        };
      }
    } else {
      var d;
      g[v] = p, l && !l.linear && fv.includes(v) && (d = g[v]) != null && d.isTexture && // sRGB textures must be RGBA8 since r137 https://github.com/mrdoob/three.js/pull/23129
      g[v].format === Te.RGBAFormat && g[v].type === Te.UnsignedByteType && (g[v].colorSpace = Te.SRGBColorSpace);
    }
  }
  if (s != null && s.parent && l != null && l.internal && (i = s.object) != null && i.isObject3D && c !== s.eventCount) {
    const h = s.object, p = l.internal.interaction.indexOf(h);
    p > -1 && l.internal.interaction.splice(p, 1), s.eventCount && h.raycast !== null && l.internal.interaction.push(h);
  }
  return s && s.props.attach === void 0 && (s.object.isBufferGeometry ? s.props.attach = "geometry" : s.object.isMaterial && (s.props.attach = "material")), s && gi(s), a;
}
function gi(a) {
  var t;
  if (!a.parent) return;
  a.props.onUpdate == null || a.props.onUpdate(a.object);
  const i = (t = a.root) == null || t.getState == null ? void 0 : t.getState();
  i && i.internal.frames === 0 && i.invalidate();
}
function zp(a, t) {
  a.manual || (Hp(a) ? (a.left = t.width / -2, a.right = t.width / 2, a.top = t.height / 2, a.bottom = t.height / -2) : a.aspect = t.width / t.height, a.updateProjectionMatrix());
}
const st = (a) => a?.isObject3D;
function Ki(a) {
  return (a.eventObject || a.object).uuid + "/" + a.index + a.instanceId;
}
function Jp(a, t, i, s) {
  const l = i.get(t);
  l && (i.delete(t), i.size === 0 && (a.delete(s), l.target.releasePointerCapture(s)));
}
function pv(a, t, i) {
  const {
    internal: s
  } = a.getState();
  for (let l = 0; l < s.interaction.length; l++)
    s.interaction[l] === t && (s.interaction[l] = i);
  for (let l = 0; l < s.initialHits.length; l++)
    s.initialHits[l] === t && (s.initialHits[l] = i);
  s.hovered.forEach((l, c) => {
    if (l.eventObject === t || l.object === t) {
      s.hovered.delete(c);
      const d = {
        ...l,
        eventObject: l.eventObject === t ? i : l.eventObject,
        object: l.object === t ? i : l.object
      };
      s.hovered.set(Ki(d), d);
    }
  }), s.capturedMap.forEach((l) => {
    const c = l.get(t);
    c && (l.delete(t), l.set(i, c));
  });
}
function hv(a, t) {
  const {
    internal: i
  } = a.getState();
  i.interaction = i.interaction.filter((s) => s !== t), i.initialHits = i.initialHits.filter((s) => s !== t), i.hovered.forEach((s, l) => {
    (s.eventObject === t || s.object === t) && i.hovered.delete(l);
  }), i.capturedMap.forEach((s, l) => {
    Jp(i.capturedMap, t, s, l);
  });
}
function mv(a) {
  function t(p) {
    const {
      internal: g
    } = a.getState(), v = p.offsetX - g.initialClick[0], A = p.offsetY - g.initialClick[1];
    return Math.round(Math.sqrt(v * v + A * A));
  }
  function i(p) {
    return p.filter((g) => ["Move", "Over", "Enter", "Out", "Leave"].some((v) => {
      var A;
      return (A = g.__r3f) == null ? void 0 : A.handlers["onPointer" + v];
    }));
  }
  function s(p, g) {
    const v = a.getState(), A = /* @__PURE__ */ new Set(), B = [], C = g ? g(v.internal.interaction) : v.internal.interaction;
    for (let I = 0; I < C.length; I++) {
      const F = ii(C[I]);
      F && (F.raycaster.camera = void 0);
    }
    v.previousRoot || v.events.compute == null || v.events.compute(p, v);
    function E(I) {
      const F = ii(I);
      if (!F || !F.events.enabled || F.raycaster.camera === null) return [];
      if (F.raycaster.camera === void 0) {
        var z;
        F.events.compute == null || F.events.compute(p, F, (z = F.previousRoot) == null ? void 0 : z.getState()), F.raycaster.camera === void 0 && (F.raycaster.camera = null);
      }
      return F.raycaster.camera ? F.raycaster.intersectObject(I, !0) : [];
    }
    let G = C.flatMap(E).sort((I, F) => {
      const z = ii(I.object), P = ii(F.object);
      return !z || !P ? I.distance - F.distance : P.events.priority - z.events.priority || I.distance - F.distance;
    }).filter((I) => {
      const F = Ki(I);
      return A.has(F) ? !1 : (A.add(F), !0);
    });
    v.events.filter && (G = v.events.filter(G, v));
    for (const I of G) {
      let F = I.object;
      for (; F; ) {
        var x;
        (x = F.__r3f) != null && x.eventCount && B.push({
          ...I,
          eventObject: F
        }), F = F.parent;
      }
    }
    if ("pointerId" in p && v.internal.capturedMap.has(p.pointerId))
      for (let I of v.internal.capturedMap.get(p.pointerId).values())
        A.has(Ki(I.intersection)) || B.push(I.intersection);
    return B;
  }
  function l(p, g, v, A) {
    if (p.length) {
      const B = {
        stopped: !1
      };
      for (const C of p) {
        let E = ii(C.object);
        if (E || C.object.traverseAncestors((G) => {
          const x = ii(G);
          if (x)
            return E = x, !1;
        }), E) {
          const {
            raycaster: G,
            pointer: x,
            camera: I,
            internal: F
          } = E, z = new Te.Vector3(x.x, x.y, 0).unproject(I), P = (O) => {
            var K, ae;
            return (K = (ae = F.capturedMap.get(O)) == null ? void 0 : ae.has(C.eventObject)) != null ? K : !1;
          }, j = (O) => {
            const K = {
              intersection: C,
              target: g.target
            };
            F.capturedMap.has(O) ? F.capturedMap.get(O).set(C.eventObject, K) : F.capturedMap.set(O, /* @__PURE__ */ new Map([[C.eventObject, K]])), g.target.setPointerCapture(O);
          }, R = (O) => {
            const K = F.capturedMap.get(O);
            K && Jp(F.capturedMap, C.eventObject, K, O);
          };
          let re = {};
          for (let O in g) {
            let K = g[O];
            typeof K != "function" && (re[O] = K);
          }
          let J = {
            ...C,
            ...re,
            pointer: x,
            intersections: p,
            stopped: B.stopped,
            delta: v,
            unprojectedPoint: z,
            ray: G.ray,
            camera: I,
            // Hijack stopPropagation, which just sets a flag
            stopPropagation() {
              const O = "pointerId" in g && F.capturedMap.get(g.pointerId);
              if (
                // ...if this pointer hasn't been captured
                (!O || // ... or if the hit object is capturing the pointer
                O.has(C.eventObject)) && (J.stopped = B.stopped = !0, F.hovered.size && Array.from(F.hovered.values()).find((K) => K.eventObject === C.eventObject))
              ) {
                const K = p.slice(0, p.indexOf(C));
                c([...K, C]);
              }
            },
            // there should be a distinction between target and currentTarget
            target: {
              hasPointerCapture: P,
              setPointerCapture: j,
              releasePointerCapture: R
            },
            currentTarget: {
              hasPointerCapture: P,
              setPointerCapture: j,
              releasePointerCapture: R
            },
            nativeEvent: g
          };
          if (A(J), B.stopped === !0) break;
        }
      }
    }
    return p;
  }
  function c(p) {
    const {
      internal: g
    } = a.getState();
    for (const v of g.hovered.values())
      if (!p.length || !p.find((A) => A.object === v.object && A.index === v.index && A.instanceId === v.instanceId)) {
        const B = v.eventObject.__r3f;
        if (g.hovered.delete(Ki(v)), B != null && B.eventCount) {
          const C = B.handlers, E = {
            ...v,
            intersections: p
          };
          C.onPointerOut == null || C.onPointerOut(E), C.onPointerLeave == null || C.onPointerLeave(E);
        }
      }
  }
  function d(p, g) {
    for (let v = 0; v < g.length; v++) {
      const A = g[v].__r3f;
      A == null || A.handlers.onPointerMissed == null || A.handlers.onPointerMissed(p);
    }
  }
  function h(p) {
    switch (p) {
      case "onPointerLeave":
      case "onPointerCancel":
        return () => c([]);
      case "onLostPointerCapture":
        return (g) => {
          const {
            internal: v
          } = a.getState();
          "pointerId" in g && v.capturedMap.has(g.pointerId) && requestAnimationFrame(() => {
            v.capturedMap.has(g.pointerId) && (v.capturedMap.delete(g.pointerId), c([]));
          });
        };
    }
    return function(v) {
      const {
        onPointerMissed: A,
        internal: B
      } = a.getState();
      B.lastEvent.current = v;
      const C = p === "onPointerMove", E = p === "onClick" || p === "onContextMenu" || p === "onDoubleClick", x = s(v, C ? i : void 0), I = E ? t(v) : 0;
      p === "onPointerDown" && (B.initialClick = [v.offsetX, v.offsetY], B.initialHits = x.map((z) => z.eventObject)), E && !x.length && I <= 2 && (d(v, B.interaction), A && A(v)), C && c(x);
      function F(z) {
        const P = z.eventObject, j = P.__r3f;
        if (!(j != null && j.eventCount)) return;
        const R = j.handlers;
        if (C) {
          if (R.onPointerOver || R.onPointerEnter || R.onPointerOut || R.onPointerLeave) {
            const re = Ki(z), J = B.hovered.get(re);
            J ? J.stopped && z.stopPropagation() : (B.hovered.set(re, z), R.onPointerOver == null || R.onPointerOver(z), R.onPointerEnter == null || R.onPointerEnter(z));
          }
          R.onPointerMove == null || R.onPointerMove(z);
        } else {
          const re = R[p];
          re ? (!E || B.initialHits.includes(P)) && (d(v, B.interaction.filter((J) => !B.initialHits.includes(J))), re(z)) : E && B.initialHits.includes(P) && d(v, B.interaction.filter((J) => !B.initialHits.includes(J)));
        }
      }
      l(x, v, I, F);
    };
  }
  return {
    handlePointer: h
  };
}
const Kd = (a) => !!(a != null && a.render), ku = /* @__PURE__ */ Q.createContext(null), gv = (a, t) => {
  const i = Dp((h, p) => {
    const g = new Te.Vector3(), v = new Te.Vector3(), A = new Te.Vector3();
    function B(I = p().camera, F = v, z = p().size) {
      const {
        width: P,
        height: j,
        top: R,
        left: re
      } = z, J = P / j;
      F.isVector3 ? A.copy(F) : A.set(...F);
      const O = I.getWorldPosition(g).distanceTo(A);
      if (Hp(I))
        return {
          width: P / I.zoom,
          height: j / I.zoom,
          top: R,
          left: re,
          factor: 1,
          distance: O,
          aspect: J
        };
      {
        const K = I.fov * Math.PI / 180, ae = 2 * Math.tan(K / 2) * O, ve = ae * (P / j);
        return {
          width: ve,
          height: ae,
          top: R,
          left: re,
          factor: P / ve,
          distance: O,
          aspect: J
        };
      }
    }
    let C;
    const E = (I) => h((F) => ({
      performance: {
        ...F.performance,
        current: I
      }
    })), G = new Te.Vector2();
    return {
      set: h,
      get: p,
      // Mock objects that have to be configured
      gl: null,
      camera: null,
      raycaster: null,
      events: {
        priority: 1,
        enabled: !0,
        connected: !1
      },
      scene: null,
      xr: null,
      invalidate: (I = 1) => a(p(), I),
      advance: (I, F) => t(I, F, p()),
      legacy: !1,
      linear: !1,
      flat: !1,
      controls: null,
      clock: new Te.Clock(),
      pointer: G,
      mouse: G,
      frameloop: "always",
      onPointerMissed: void 0,
      performance: {
        current: 1,
        min: 0.5,
        max: 1,
        debounce: 200,
        regress: () => {
          const I = p();
          C && clearTimeout(C), I.performance.current !== I.performance.min && E(I.performance.min), C = setTimeout(() => E(p().performance.max), I.performance.debounce);
        }
      },
      size: {
        width: 0,
        height: 0,
        top: 0,
        left: 0
      },
      viewport: {
        initialDpr: 0,
        dpr: 0,
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        aspect: 0,
        distance: 0,
        factor: 0,
        getCurrentViewport: B
      },
      setEvents: (I) => h((F) => ({
        ...F,
        events: {
          ...F.events,
          ...I
        }
      })),
      setSize: (I, F, z = 0, P = 0) => {
        const j = p().camera, R = {
          width: I,
          height: F,
          top: z,
          left: P
        };
        h((re) => ({
          size: R,
          viewport: {
            ...re.viewport,
            ...B(j, v, R)
          }
        }));
      },
      setDpr: (I) => h((F) => {
        const z = Np(I);
        return {
          viewport: {
            ...F.viewport,
            dpr: z,
            initialDpr: F.viewport.initialDpr || z
          }
        };
      }),
      setFrameloop: (I = "always") => {
        const F = p().clock;
        F.stop(), F.elapsedTime = 0, I !== "never" && (F.start(), F.elapsedTime = 0), h(() => ({
          frameloop: I
        }));
      },
      previousRoot: void 0,
      internal: {
        // Events
        interaction: [],
        hovered: /* @__PURE__ */ new Map(),
        subscribers: [],
        initialClick: [0, 0],
        initialHits: [],
        capturedMap: /* @__PURE__ */ new Map(),
        lastEvent: /* @__PURE__ */ Q.createRef(),
        // Updates
        active: !1,
        frames: 0,
        priority: 0,
        subscribe: (I, F, z) => {
          const P = p().internal;
          return P.priority = P.priority + (F > 0 ? 1 : 0), P.subscribers.push({
            ref: I,
            priority: F,
            store: z
          }), P.subscribers = P.subscribers.sort((j, R) => j.priority - R.priority), () => {
            const j = p().internal;
            j != null && j.subscribers && (j.priority = j.priority - (F > 0 ? 1 : 0), j.subscribers = j.subscribers.filter((R) => R.ref !== I));
          };
        }
      }
    };
  }), s = i.getState();
  let l = s.size, c = s.viewport.dpr, d = s.camera;
  return i.subscribe(() => {
    const {
      camera: h,
      size: p,
      viewport: g,
      gl: v,
      set: A
    } = i.getState();
    if (p.width !== l.width || p.height !== l.height || g.dpr !== c) {
      l = p, c = g.dpr, zp(h, p), g.dpr > 0 && v.setPixelRatio(g.dpr);
      const B = typeof HTMLCanvasElement < "u" && v.domElement instanceof HTMLCanvasElement;
      v.setSize(p.width, p.height, B);
    }
    h !== d && (d = h, A((B) => ({
      viewport: {
        ...B.viewport,
        ...B.viewport.getCurrentViewport(h)
      }
    })));
  }), i.subscribe((h) => a(h)), i;
};
function Pu() {
  const a = Q.useContext(ku);
  if (!a) throw new Error("R3F: Hooks can only be used within the Canvas component!");
  return a;
}
function et(a = (i) => i, t) {
  return Pu()(a, t);
}
function Aa(a, t = 0) {
  const i = Pu(), s = i.getState().internal.subscribe, l = Ou(a);
  return ns(() => s(l, t, i), [t, s, i]), null;
}
const Qd = /* @__PURE__ */ new WeakMap(), Av = (a) => {
  var t;
  return typeof a == "function" && (a == null || (t = a.prototype) == null ? void 0 : t.constructor) === a;
};
function jp(a, t) {
  return function(i, ...s) {
    let l;
    return Av(i) ? (l = Qd.get(i), l || (l = new i(), Qd.set(i, l))) : l = i, a && a(l), Promise.all(s.map((c) => new Promise((d, h) => l.load(c, (p) => {
      st(p?.scene) && Object.assign(p, sv(p.scene)), d(p);
    }, t, (p) => h(new Error(`Could not load ${c}: ${p?.message}`))))));
  };
}
function Lr(a, t, i, s) {
  const l = Array.isArray(t) ? t : [t], c = KA(jp(i, s), [a, ...l], {
    equal: un.equ
  });
  return Array.isArray(t) ? c : c[0];
}
Lr.preload = function(a, t, i) {
  const s = Array.isArray(t) ? t : [t];
  return QA(jp(i), [a, ...s]);
};
Lr.clear = function(a, t) {
  const i = Array.isArray(t) ? t : [t];
  return XA([a, ...i]);
};
const vv = 1, bv = 8, Bv = 32, yv = 2;
var Cv = {
  version: "9.6.1"
};
function Ev(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Xd = {
  exports: {}
}, Yd = {
  exports: {}
}, Wd;
function Sv() {
  return Wd || (Wd = 1, (function(a) {
    a.exports = function(t) {
      function i(e, n, r, o) {
        return new Nh(e, n, r, o);
      }
      function s() {
      }
      function l(e) {
        var n = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
          n += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var r = 2; r < arguments.length; r++) n += "&args[]=" + encodeURIComponent(arguments[r]);
        }
        return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      function c(e) {
        var n = e, r = e;
        if (e.alternate) for (; n.return; ) n = n.return;
        else {
          e = n;
          do
            n = e, (n.flags & 4098) !== 0 && (r = n.return), e = n.return;
          while (e);
        }
        return n.tag === 3 ? r : null;
      }
      function d(e) {
        if (c(e) !== e) throw Error(l(188));
      }
      function h(e) {
        var n = e.alternate;
        if (!n) {
          if (n = c(e), n === null) throw Error(l(188));
          return n !== e ? null : e;
        }
        for (var r = e, o = n; ; ) {
          var u = r.return;
          if (u === null) break;
          var f = u.alternate;
          if (f === null) {
            if (o = u.return, o !== null) {
              r = o;
              continue;
            }
            break;
          }
          if (u.child === f.child) {
            for (f = u.child; f; ) {
              if (f === r) return d(u), e;
              if (f === o) return d(u), n;
              f = f.sibling;
            }
            throw Error(l(188));
          }
          if (r.return !== o.return) r = u, o = f;
          else {
            for (var b = !1, S = u.child; S; ) {
              if (S === r) {
                b = !0, r = u, o = f;
                break;
              }
              if (S === o) {
                b = !0, o = u, r = f;
                break;
              }
              S = S.sibling;
            }
            if (!b) {
              for (S = f.child; S; ) {
                if (S === r) {
                  b = !0, r = f, o = u;
                  break;
                }
                if (S === o) {
                  b = !0, o = f, r = u;
                  break;
                }
                S = S.sibling;
              }
              if (!b) throw Error(l(189));
            }
          }
          if (r.alternate !== o) throw Error(l(190));
        }
        if (r.tag !== 3) throw Error(l(188));
        return r.stateNode.current === r ? e : n;
      }
      function p(e) {
        var n = e.tag;
        if (n === 5 || n === 26 || n === 27 || n === 6) return e;
        for (e = e.child; e !== null; ) {
          if (n = p(e), n !== null) return n;
          e = e.sibling;
        }
        return null;
      }
      function g(e) {
        var n = e.tag;
        if (n === 5 || n === 26 || n === 27 || n === 6) return e;
        for (e = e.child; e !== null; ) {
          if (e.tag !== 4 && (n = g(e), n !== null)) return n;
          e = e.sibling;
        }
        return null;
      }
      function v(e) {
        return e === null || typeof e != "object" ? null : (e = Qf && e[Qf] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      function A(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.$$typeof === Kh ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
          case ko:
            return "Fragment";
          case sl:
            return "Profiler";
          case jf:
            return "StrictMode";
          case ll:
            return "Suspense";
          case ul:
            return "SuspenseList";
          case fl:
            return "Activity";
        }
        if (typeof e == "object") switch (e.$$typeof) {
          case Oo:
            return "Portal";
          case kr:
            return e.displayName || "Context";
          case Kf:
            return (e._context.displayName || "Context") + ".Consumer";
          case al:
            var n = e.render;
            return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case cl:
            return n = e.displayName || null, n !== null ? n : A(e.type) || "Memo";
          case Pr:
            n = e._payload, e = e._init;
            try {
              return A(e(n));
            } catch {
            }
        }
        return null;
      }
      function B(e) {
        return {
          current: e
        };
      }
      function C(e) {
        0 > No || (e.current = Al[No], Al[No] = null, No--);
      }
      function E(e, n) {
        No++, Al[No] = e.current, e.current = n;
      }
      function G(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (bg(e) / Bg | 0) | 0;
      }
      function x(e) {
        var n = e & 42;
        if (n !== 0) return n;
        switch (e & -e) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
            return 64;
          case 128:
            return 128;
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
            return e & 261888;
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return e & 3932160;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return e & 62914560;
          case 67108864:
            return 67108864;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 0;
          default:
            return e;
        }
      }
      function I(e, n, r) {
        var o = e.pendingLanes;
        if (o === 0) return 0;
        var u = 0, f = e.suspendedLanes, b = e.pingedLanes;
        e = e.warmLanes;
        var S = o & 134217727;
        return S !== 0 ? (o = S & ~f, o !== 0 ? u = x(o) : (b &= S, b !== 0 ? u = x(b) : r || (r = S & ~e, r !== 0 && (u = x(r))))) : (S = o & ~f, S !== 0 ? u = x(S) : b !== 0 ? u = x(b) : r || (r = o & ~e, r !== 0 && (u = x(r)))), u === 0 ? 0 : n !== 0 && n !== u && (n & f) === 0 && (f = u & -u, r = n & -n, f >= r || f === 32 && (r & 4194048) !== 0) ? n : u;
      }
      function F(e, n) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
      }
      function z(e, n) {
        switch (e) {
          case 1:
          case 2:
          case 4:
          case 8:
          case 64:
            return n + 250;
          case 16:
          case 32:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return n + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return -1;
          case 67108864:
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function P() {
        var e = Ms;
        return Ms <<= 1, (Ms & 62914560) === 0 && (Ms = 4194304), e;
      }
      function j(e) {
        for (var n = [], r = 0; 31 > r; r++) n.push(e);
        return n;
      }
      function R(e, n) {
        e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
      }
      function re(e, n, r, o, u, f) {
        var b = e.pendingLanes;
        e.pendingLanes = r, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= r, e.entangledLanes &= r, e.errorRecoveryDisabledLanes &= r, e.shellSuspendCounter = 0;
        var S = e.entanglements, H = e.expirationTimes, X = e.hiddenUpdates;
        for (r = b & ~r; 0 < r; ) {
          var ue = 31 - Et(r), $ = 1 << ue;
          S[ue] = 0, H[ue] = -1;
          var me = X[ue];
          if (me !== null) for (X[ue] = null, ue = 0; ue < me.length; ue++) {
            var Le = me[ue];
            Le !== null && (Le.lane &= -536870913);
          }
          r &= ~$;
        }
        o !== 0 && J(e, o, 0), f !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(b & ~n));
      }
      function J(e, n, r) {
        e.pendingLanes |= n, e.suspendedLanes &= ~n;
        var o = 31 - Et(n);
        e.entangledLanes |= n, e.entanglements[o] = e.entanglements[o] | 1073741824 | r & 261930;
      }
      function O(e, n) {
        var r = e.entangledLanes |= n;
        for (e = e.entanglements; r; ) {
          var o = 31 - Et(r), u = 1 << o;
          u & n | e[o] & n && (e[o] |= n), r &= ~u;
        }
      }
      function K(e, n) {
        var r = n & -n;
        return r = (r & 42) !== 0 ? 1 : ae(r), (r & (e.suspendedLanes | n)) !== 0 ? 0 : r;
      }
      function ae(e) {
        switch (e) {
          case 2:
            e = 1;
            break;
          case 8:
            e = 4;
            break;
          case 32:
            e = 16;
            break;
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            e = 128;
            break;
          case 268435456:
            e = 134217728;
            break;
          default:
            e = 0;
        }
        return e;
      }
      function ve(e) {
        return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
      }
      function W(e) {
        if (typeof Mg == "function" && wg(e), St && typeof St.setStrictMode == "function") try {
          St.setStrictMode(Ri, e);
        } catch {
        }
      }
      function le(e, n) {
        return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
      }
      function pe(e) {
        if (Bl === void 0) try {
          throw Error();
        } catch (r) {
          var n = r.stack.trim().match(/\n( *(at )?)/);
          Bl = n && n[1] || "", vd = -1 < r.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < r.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
        return `
` + Bl + e + vd;
      }
      function _(e, n) {
        if (!e || yl) return "";
        yl = !0;
        var r = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          var o = {
            DetermineComponentFrameRoot: function() {
              try {
                if (n) {
                  var $ = function() {
                    throw Error();
                  };
                  if (Object.defineProperty($.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                      Reflect.construct($, []);
                    } catch (Le) {
                      var me = Le;
                    }
                    Reflect.construct(e, [], $);
                  } else {
                    try {
                      $.call();
                    } catch (Le) {
                      me = Le;
                    }
                    e.call($.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (Le) {
                    me = Le;
                  }
                  ($ = e()) && typeof $.catch == "function" && $.catch(function() {
                  });
                }
              } catch (Le) {
                if (Le && me && typeof Le.stack == "string") return [Le.stack, me.stack];
              }
              return [null, null];
            }
          };
          o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var u = Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot, "name");
          u && u.configurable && Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
            value: "DetermineComponentFrameRoot"
          });
          var f = o.DetermineComponentFrameRoot(), b = f[0], S = f[1];
          if (b && S) {
            var H = b.split(`
`), X = S.split(`
`);
            for (u = o = 0; o < H.length && !H[o].includes("DetermineComponentFrameRoot"); ) o++;
            for (; u < X.length && !X[u].includes("DetermineComponentFrameRoot"); ) u++;
            if (o === H.length || u === X.length) for (o = H.length - 1, u = X.length - 1; 1 <= o && 0 <= u && H[o] !== X[u]; ) u--;
            for (; 1 <= o && 0 <= u; o--, u--) if (H[o] !== X[u]) {
              if (o !== 1 || u !== 1) do
                if (o--, u--, 0 > u || H[o] !== X[u]) {
                  var ue = `
` + H[o].replace(" at new ", " at ");
                  return e.displayName && ue.includes("<anonymous>") && (ue = ue.replace("<anonymous>", e.displayName)), ue;
                }
              while (1 <= o && 0 <= u);
              break;
            }
          }
        } finally {
          yl = !1, Error.prepareStackTrace = r;
        }
        return (r = e ? e.displayName || e.name : "") ? pe(r) : "";
      }
      function q(e, n) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            return pe(e.type);
          case 16:
            return pe("Lazy");
          case 13:
            return e.child !== n && n !== null ? pe("Suspense Fallback") : pe("Suspense");
          case 19:
            return pe("SuspenseList");
          case 0:
          case 15:
            return _(e.type, !1);
          case 11:
            return _(e.type.render, !1);
          case 1:
            return _(e.type, !0);
          case 31:
            return pe("Activity");
          default:
            return "";
        }
      }
      function de(e) {
        try {
          var n = "", r = null;
          do
            n += q(e, r), r = e, e = e.return;
          while (e);
          return n;
        } catch (o) {
          return `
Error generating stack: ` + o.message + `
` + o.stack;
        }
      }
      function fe(e, n) {
        if (typeof e == "object" && e !== null) {
          var r = bd.get(e);
          return r !== void 0 ? r : (n = {
            value: e,
            source: n,
            stack: de(n)
          }, bd.set(e, n), n);
        }
        return {
          value: e,
          source: n,
          stack: de(n)
        };
      }
      function ce(e, n) {
        zo[Jo++] = xi, zo[Jo++] = Is, Is = e, xi = n;
      }
      function Be(e, n, r) {
        Rt[xt++] = sr, Rt[xt++] = ar, Rt[xt++] = Hr, Hr = e;
        var o = sr;
        e = ar;
        var u = 32 - Et(o) - 1;
        o &= ~(1 << u), r += 1;
        var f = 32 - Et(n) + u;
        if (30 < f) {
          var b = u - u % 5;
          f = (o & (1 << b) - 1).toString(32), o >>= b, u -= b, sr = 1 << 32 - Et(n) + u | r << u | o, ar = f + e;
        } else sr = 1 << f | r << u | o, ar = e;
      }
      function he(e) {
        e.return !== null && (ce(e, 1), Be(e, 1, 0));
      }
      function Ce(e) {
        for (; e === Is; ) Is = zo[--Jo], zo[Jo] = null, xi = zo[--Jo], zo[Jo] = null;
        for (; e === Hr; ) Hr = Rt[--xt], Rt[xt] = null, ar = Rt[--xt], Rt[xt] = null, sr = Rt[--xt], Rt[xt] = null;
      }
      function Fe(e, n) {
        Rt[xt++] = sr, Rt[xt++] = ar, Rt[xt++] = Hr, sr = n.id, ar = n.overflow, Hr = e;
      }
      function an(e, n) {
        E(Nr, n), E(_i, e), E(Jn, null), e = Yh(n), C(Jn), E(Jn, e);
      }
      function xe() {
        C(Jn), C(_i), C(Nr);
      }
      function Hn(e) {
        e.memoizedState !== null && E(Ts, e);
        var n = Jn.current, r = Wh(n, e.type);
        n !== r && (E(_i, e), E(Jn, r));
      }
      function dn(e) {
        _i.current === e && (C(Jn), C(_i)), Ts.current === e && (C(Ts), Er ? co._currentValue = Po : co._currentValue2 = Po);
      }
      function Yn(e) {
        var n = Error(l(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw tt(fe(n, e)), Cl;
      }
      function Cn(e, n) {
        if (!qn) throw Error(l(175));
        Wm(e.stateNode, e.type, e.memoizedProps, n, e) || Yn(e, !0);
      }
      function Ye(e) {
        for (jn = e.return; jn; ) switch (jn.tag) {
          case 5:
          case 31:
          case 13:
            _t = !1;
            return;
          case 27:
          case 3:
            _t = !0;
            return;
          default:
            jn = jn.return;
        }
      }
      function Rn(e) {
        if (!qn || e !== jn) return !1;
        if (!Xe) return Ye(e), Xe = !0, !1;
        var n = e.tag;
        if (Dn ? n !== 3 && n !== 27 && (n !== 5 || id(e.type) && !Cs(e.type, e.memoizedProps)) && mn && Yn(e) : n !== 3 && (n !== 5 || id(e.type) && !Cs(e.type, e.memoizedProps)) && mn && Yn(e), Ye(e), n === 13) {
          if (!qn) throw Error(l(316));
          if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
          mn = eg(e);
        } else if (n === 31) {
          if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
          mn = $m(e);
        } else mn = Dn && n === 27 ? Hm(e.type, mn) : jn ? od(e.stateNode) : null;
        return !0;
      }
      function pn() {
        qn && (mn = jn = null, Xe = !1);
      }
      function nt() {
        var e = Ur;
        return e !== null && (mt === null ? mt = e : mt.push.apply(mt, e), Ur = null), e;
      }
      function tt(e) {
        Ur === null ? Ur = [e] : Ur.push(e);
      }
      function at(e, n, r) {
        Er ? (E(Fs, n._currentValue), n._currentValue = r) : (E(Fs, n._currentValue2), n._currentValue2 = r);
      }
      function vn(e) {
        var n = Fs.current;
        Er ? e._currentValue = n : e._currentValue2 = n, C(Fs);
      }
      function Ht(e, n, r) {
        for (; e !== null; ) {
          var o = e.alternate;
          if ((e.childLanes & n) !== n ? (e.childLanes |= n, o !== null && (o.childLanes |= n)) : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n), e === r) break;
          e = e.return;
        }
      }
      function Ft(e, n, r, o) {
        var u = e.child;
        for (u !== null && (u.return = e); u !== null; ) {
          var f = u.dependencies;
          if (f !== null) {
            var b = u.child;
            f = f.firstContext;
            e: for (; f !== null; ) {
              var S = f;
              f = u;
              for (var H = 0; H < n.length; H++) if (S.context === n[H]) {
                f.lanes |= r, S = f.alternate, S !== null && (S.lanes |= r), Ht(f.return, r, e), o || (b = null);
                break e;
              }
              f = S.next;
            }
          } else if (u.tag === 18) {
            if (b = u.return, b === null) throw Error(l(341));
            b.lanes |= r, f = b.alternate, f !== null && (f.lanes |= r), Ht(b, r, e), b = null;
          } else b = u.child;
          if (b !== null) b.return = u;
          else for (b = u; b !== null; ) {
            if (b === e) {
              b = null;
              break;
            }
            if (u = b.sibling, u !== null) {
              u.return = b.return, b = u;
              break;
            }
            b = b.return;
          }
          u = b;
        }
      }
      function At(e, n, r, o) {
        e = null;
        for (var u = n, f = !1; u !== null; ) {
          if (!f) {
            if ((u.flags & 524288) !== 0) f = !0;
            else if ((u.flags & 262144) !== 0) break;
          }
          if (u.tag === 10) {
            var b = u.alternate;
            if (b === null) throw Error(l(387));
            if (b = b.memoizedProps, b !== null) {
              var S = u.type;
              Mt(u.pendingProps.value, b.value) || (e !== null ? e.push(S) : e = [S]);
            }
          } else if (u === Ts.current) {
            if (b = u.alternate, b === null) throw Error(l(387));
            b.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(co) : e = [co]);
          }
          u = u.return;
        }
        e !== null && Ft(n, e, r, o), n.flags |= 262144;
      }
      function Vt(e) {
        for (e = e.firstContext; e !== null; ) {
          var n = e.context;
          if (!Mt(Er ? n._currentValue : n._currentValue2, e.memoizedValue)) return !0;
          e = e.next;
        }
        return !1;
      }
      function lt(e) {
        fo = e, Mr = null, e = e.dependencies, e !== null && (e.firstContext = null);
      }
      function ln(e) {
        return qt(fo, e);
      }
      function ut(e, n) {
        return fo === null && lt(e), qt(e, n);
      }
      function qt(e, n) {
        var r = Er ? n._currentValue : n._currentValue2;
        if (n = {
          context: n,
          memoizedValue: r,
          next: null
        }, Mr === null) {
          if (e === null) throw Error(l(308));
          Mr = n, e.dependencies = {
            lanes: 0,
            firstContext: n
          }, e.flags |= 524288;
        } else Mr = Mr.next = n;
        return r;
      }
      function hr() {
        return {
          controller: new Tg(),
          data: /* @__PURE__ */ new Map(),
          refCount: 0
        };
      }
      function Gn(e) {
        e.refCount--, e.refCount === 0 && Fg(Rg, function() {
          e.controller.abort();
        });
      }
      function Nt() {
      }
      function Nn(e) {
        e !== jo && e.next === null && (jo === null ? Rs = jo = e : jo = jo.next = e), xs = !0, El || (El = !0, w());
      }
      function $t(e, n) {
        if (!Sl && xs) {
          Sl = !0;
          do
            for (var r = !1, o = Rs; o !== null; ) {
              if (e !== 0) {
                var u = o.pendingLanes;
                if (u === 0) var f = 0;
                else {
                  var b = o.suspendedLanes, S = o.pingedLanes;
                  f = (1 << 31 - Et(42 | e) + 1) - 1, f &= u & ~(b & ~S), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
                }
                f !== 0 && (r = !0, mr(o, f));
              } else f = je, f = I(o, o === sn ? f : 0, o.cancelPendingCommit !== null || o.timeoutHandle !== uo), (f & 3) === 0 || F(o, f) || (r = !0, mr(o, f));
              o = o.next;
            }
          while (r);
          Sl = !1;
        }
      }
      function to() {
        To();
      }
      function To() {
        xs = El = !1;
        var e = 0;
        po !== 0 && om() && (e = po);
        for (var n = pt(), r = null, o = Rs; o !== null; ) {
          var u = o.next, f = er(o, n);
          f === 0 ? (o.next = null, r === null ? Rs = u : r.next = u, u === null && (jo = r)) : (r = o, (e !== 0 || (f & 3) !== 0) && (xs = !0)), o = u;
        }
        Ln !== 0 && Ln !== 5 || $t(e), po !== 0 && (po = 0);
      }
      function er(e, n) {
        for (var r = e.suspendedLanes, o = e.pingedLanes, u = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
          var b = 31 - Et(f), S = 1 << b, H = u[b];
          H === -1 ? ((S & r) === 0 || (S & o) !== 0) && (u[b] = z(S, n)) : H <= n && (e.expiredLanes |= S), f &= ~S;
        }
        if (n = sn, r = je, r = I(e, e === n ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== uo), o = e.callbackNode, r === 0 || e === n && (nn === 2 || nn === 9) || e.cancelPendingCommit !== null) return o !== null && o !== null && vl(o), e.callbackNode = null, e.callbackPriority = 0;
        if ((r & 3) === 0 || F(e, r)) {
          if (n = r & -r, n === e.callbackPriority) return n;
          switch (o !== null && vl(o), ve(r)) {
            case 2:
            case 8:
              r = Eg;
              break;
            case 32:
              r = bl;
              break;
            case 268435456:
              r = Sg;
              break;
            default:
              r = bl;
          }
          return o = En.bind(null, e), r = ws(r, o), e.callbackPriority = n, e.callbackNode = r, n;
        }
        return o !== null && o !== null && vl(o), e.callbackPriority = 2, e.callbackNode = null, 2;
      }
      function En(e, n) {
        if (Ln !== 0 && Ln !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
        var r = e.callbackNode;
        if (wi() && e.callbackNode !== r) return null;
        var o = je;
        return o = I(e, e === sn ? o : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== uo), o === 0 ? null : (bf(e, o, n), er(e, pt()), e.callbackNode != null && e.callbackNode === r ? En.bind(null, e) : null);
      }
      function mr(e, n) {
        if (wi()) return null;
        bf(e, n, !0);
      }
      function w() {
        fm ? dm(function() {
          (Ne & 6) !== 0 ? ws(gd, to) : To();
        }) : ws(gd, to);
      }
      function Z() {
        if (po === 0) {
          var e = Ko;
          e === 0 && (e = Es, Es <<= 1, (Es & 261888) === 0 && (Es = 256)), po = e;
        }
        return po;
      }
      function ge(e, n) {
        if (Di === null) {
          var r = Di = [];
          Ml = 0, Ko = Z(), Qo = {
            status: "pending",
            value: void 0,
            then: function(o) {
              r.push(o);
            }
          };
        }
        return Ml++, n.then(Je, Je), n;
      }
      function Je() {
        if (--Ml === 0 && Di !== null) {
          Qo !== null && (Qo.status = "fulfilled");
          var e = Di;
          Di = null, Ko = 0, Qo = null;
          for (var n = 0; n < e.length; n++) (0, e[n])();
        }
      }
      function ne(e, n) {
        var r = [], o = {
          status: "pending",
          value: null,
          reason: null,
          then: function(u) {
            r.push(u);
          }
        };
        return e.then(function() {
          o.status = "fulfilled", o.value = n;
          for (var u = 0; u < r.length; u++) (0, r[u])(n);
        }, function(u) {
          for (o.status = "rejected", o.reason = u, u = 0; u < r.length; u++) (0, r[u])(void 0);
        }), o;
      }
      function xn() {
        var e = ho.current;
        return e !== null ? e : sn.pooledCache;
      }
      function rt(e, n) {
        n === null ? E(ho, ho.current) : E(ho, n.pool);
      }
      function Ai() {
        var e = xn();
        return e === null ? null : {
          parent: Er ? gn._currentValue : gn._currentValue2,
          pool: e
        };
      }
      function gr(e, n) {
        if (Mt(e, n)) return !0;
        if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
        var r = Object.keys(e), o = Object.keys(n);
        if (r.length !== o.length) return !1;
        for (o = 0; o < r.length; o++) {
          var u = r[o];
          if (!Ig.call(n, u) || !Mt(e[u], n[u])) return !1;
        }
        return !0;
      }
      function ct(e) {
        return e = e.status, e === "fulfilled" || e === "rejected";
      }
      function ft(e, n, r) {
        switch (r = e[r], r === void 0 ? e.push(n) : r !== n && (n.then(Nt, Nt), n = r), n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw e = n.reason, tr(e), e;
          default:
            if (typeof n.status == "string") n.then(Nt, Nt);
            else {
              if (e = sn, e !== null && 100 < e.shellSuspendCounter) throw Error(l(482));
              e = n, e.status = "pending", e.then(function(o) {
                if (n.status === "pending") {
                  var u = n;
                  u.status = "fulfilled", u.value = o;
                }
              }, function(o) {
                if (n.status === "pending") {
                  var u = n;
                  u.status = "rejected", u.reason = o;
                }
              });
            }
            switch (n.status) {
              case "fulfilled":
                return n.value;
              case "rejected":
                throw e = n.reason, tr(e), e;
            }
            throw mo = n, Xo;
        }
      }
      function ot(e) {
        try {
          var n = e._init;
          return n(e._payload);
        } catch (r) {
          throw r !== null && typeof r == "object" && typeof r.then == "function" ? (mo = r, Xo) : r;
        }
      }
      function nr() {
        if (mo === null) throw Error(l(459));
        var e = mo;
        return mo = null, e;
      }
      function tr(e) {
        if (e === Xo || e === _s) throw Error(l(483));
      }
      function Ut(e) {
        var n = Li;
        return Li += 1, Yo === null && (Yo = []), ft(Yo, e, n);
      }
      function ro(e, n) {
        n = n.props.ref, e.ref = n !== void 0 ? n : null;
      }
      function Fo(e, n) {
        throw n.$$typeof === Jh ? Error(l(525)) : (e = Object.prototype.toString.call(n), Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e)));
      }
      function oo(e) {
        function n(L, T) {
          if (e) {
            var k = L.deletions;
            k === null ? (L.deletions = [T], L.flags |= 16) : k.push(T);
          }
        }
        function r(L, T) {
          if (!e) return null;
          for (; T !== null; ) n(L, T), T = T.sibling;
          return null;
        }
        function o(L) {
          for (var T = /* @__PURE__ */ new Map(); L !== null; ) L.key !== null ? T.set(L.key, L) : T.set(L.index, L), L = L.sibling;
          return T;
        }
        function u(L, T) {
          return L = Cr(L, T), L.index = 0, L.sibling = null, L;
        }
        function f(L, T, k) {
          return L.index = k, e ? (k = L.alternate, k !== null ? (k = k.index, k < T ? (L.flags |= 67108866, T) : k) : (L.flags |= 67108866, T)) : (L.flags |= 1048576, T);
        }
        function b(L) {
          return e && L.alternate === null && (L.flags |= 67108866), L;
        }
        function S(L, T, k, ee) {
          return T === null || T.tag !== 6 ? (T = tl(k, L.mode, ee), T.return = L, T) : (T = u(T, k), T.return = L, T);
        }
        function H(L, T, k, ee) {
          var Me = k.type;
          return Me === ko ? ue(L, T, k.props.children, ee, k.key) : T !== null && (T.elementType === Me || typeof Me == "object" && Me !== null && Me.$$typeof === Pr && ot(Me) === T.type) ? (T = u(T, k.props), ro(T, k), T.return = L, T) : (T = bs(k.type, k.key, k.props, null, L.mode, ee), ro(T, k), T.return = L, T);
        }
        function X(L, T, k, ee) {
          return T === null || T.tag !== 4 || T.stateNode.containerInfo !== k.containerInfo || T.stateNode.implementation !== k.implementation ? (T = rl(k, L.mode, ee), T.return = L, T) : (T = u(T, k.children || []), T.return = L, T);
        }
        function ue(L, T, k, ee, Me) {
          return T === null || T.tag !== 7 ? (T = lo(k, L.mode, ee, Me), T.return = L, T) : (T = u(T, k), T.return = L, T);
        }
        function $(L, T, k) {
          if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint") return T = tl("" + T, L.mode, k), T.return = L, T;
          if (typeof T == "object" && T !== null) {
            switch (T.$$typeof) {
              case Bs:
                return k = bs(T.type, T.key, T.props, null, L.mode, k), ro(k, T), k.return = L, k;
              case Oo:
                return T = rl(T, L.mode, k), T.return = L, T;
              case Pr:
                return T = ot(T), $(L, T, k);
            }
            if (ys(T) || v(T)) return T = lo(T, L.mode, k, null), T.return = L, T;
            if (typeof T.then == "function") return $(L, Ut(T), k);
            if (T.$$typeof === kr) return $(L, ut(L, T), k);
            Fo(L, T);
          }
          return null;
        }
        function me(L, T, k, ee) {
          var Me = T !== null ? T.key : null;
          if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint") return Me !== null ? null : S(L, T, "" + k, ee);
          if (typeof k == "object" && k !== null) {
            switch (k.$$typeof) {
              case Bs:
                return k.key === Me ? H(L, T, k, ee) : null;
              case Oo:
                return k.key === Me ? X(L, T, k, ee) : null;
              case Pr:
                return k = ot(k), me(L, T, k, ee);
            }
            if (ys(k) || v(k)) return Me !== null ? null : ue(L, T, k, ee, null);
            if (typeof k.then == "function") return me(L, T, Ut(k), ee);
            if (k.$$typeof === kr) return me(L, T, ut(L, k), ee);
            Fo(L, k);
          }
          return null;
        }
        function Le(L, T, k, ee, Me) {
          if (typeof ee == "string" && ee !== "" || typeof ee == "number" || typeof ee == "bigint") return L = L.get(k) || null, S(T, L, "" + ee, Me);
          if (typeof ee == "object" && ee !== null) {
            switch (ee.$$typeof) {
              case Bs:
                return L = L.get(ee.key === null ? k : ee.key) || null, H(T, L, ee, Me);
              case Oo:
                return L = L.get(ee.key === null ? k : ee.key) || null, X(T, L, ee, Me);
              case Pr:
                return ee = ot(ee), Le(L, T, k, ee, Me);
            }
            if (ys(ee) || v(ee)) return L = L.get(k) || null, ue(T, L, ee, Me, null);
            if (typeof ee.then == "function") return Le(L, T, k, Ut(ee), Me);
            if (ee.$$typeof === kr) return Le(L, T, k, ut(T, ee), Me);
            Fo(T, ee);
          }
          return null;
        }
        function Fn(L, T, k, ee) {
          for (var Me = null, An = null, we = T, Ze = T = 0, Pn = null; we !== null && Ze < k.length; Ze++) {
            we.index > Ze ? (Pn = we, we = null) : Pn = we.sibling;
            var Ve = me(L, we, k[Ze], ee);
            if (Ve === null) {
              we === null && (we = Pn);
              break;
            }
            e && we && Ve.alternate === null && n(L, we), T = f(Ve, T, Ze), An === null ? Me = Ve : An.sibling = Ve, An = Ve, we = Pn;
          }
          if (Ze === k.length) return r(L, we), Xe && ce(L, Ze), Me;
          if (we === null) {
            for (; Ze < k.length; Ze++) we = $(L, k[Ze], ee), we !== null && (T = f(we, T, Ze), An === null ? Me = we : An.sibling = we, An = we);
            return Xe && ce(L, Ze), Me;
          }
          for (we = o(we); Ze < k.length; Ze++) Pn = Le(we, L, Ze, k[Ze], ee), Pn !== null && (e && Pn.alternate !== null && we.delete(Pn.key === null ? Ze : Pn.key), T = f(Pn, T, Ze), An === null ? Me = Pn : An.sibling = Pn, An = Pn);
          return e && we.forEach(function(Xr) {
            return n(L, Xr);
          }), Xe && ce(L, Ze), Me;
        }
        function Ui(L, T, k, ee) {
          if (k == null) throw Error(l(151));
          for (var Me = null, An = null, we = T, Ze = T = 0, Pn = null, Ve = k.next(); we !== null && !Ve.done; Ze++, Ve = k.next()) {
            we.index > Ze ? (Pn = we, we = null) : Pn = we.sibling;
            var Xr = me(L, we, Ve.value, ee);
            if (Xr === null) {
              we === null && (we = Pn);
              break;
            }
            e && we && Xr.alternate === null && n(L, we), T = f(Xr, T, Ze), An === null ? Me = Xr : An.sibling = Xr, An = Xr, we = Pn;
          }
          if (Ve.done) return r(L, we), Xe && ce(L, Ze), Me;
          if (we === null) {
            for (; !Ve.done; Ze++, Ve = k.next()) Ve = $(L, Ve.value, ee), Ve !== null && (T = f(Ve, T, Ze), An === null ? Me = Ve : An.sibling = Ve, An = Ve);
            return Xe && ce(L, Ze), Me;
          }
          for (we = o(we); !Ve.done; Ze++, Ve = k.next()) Ve = Le(we, L, Ze, Ve.value, ee), Ve !== null && (e && Ve.alternate !== null && we.delete(Ve.key === null ? Ze : Ve.key), T = f(Ve, T, Ze), An === null ? Me = Ve : An.sibling = Ve, An = Ve);
          return e && we.forEach(function(Lg) {
            return n(L, Lg);
          }), Xe && ce(L, Ze), Me;
        }
        function bo(L, T, k, ee) {
          if (typeof k == "object" && k !== null && k.type === ko && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
            switch (k.$$typeof) {
              case Bs:
                e: {
                  for (var Me = k.key; T !== null; ) {
                    if (T.key === Me) {
                      if (Me = k.type, Me === ko) {
                        if (T.tag === 7) {
                          r(L, T.sibling), ee = u(T, k.props.children), ee.return = L, L = ee;
                          break e;
                        }
                      } else if (T.elementType === Me || typeof Me == "object" && Me !== null && Me.$$typeof === Pr && ot(Me) === T.type) {
                        r(L, T.sibling), ee = u(T, k.props), ro(ee, k), ee.return = L, L = ee;
                        break e;
                      }
                      r(L, T);
                      break;
                    } else n(L, T);
                    T = T.sibling;
                  }
                  k.type === ko ? (ee = lo(k.props.children, L.mode, ee, k.key), ee.return = L, L = ee) : (ee = bs(k.type, k.key, k.props, null, L.mode, ee), ro(ee, k), ee.return = L, L = ee);
                }
                return b(L);
              case Oo:
                e: {
                  for (Me = k.key; T !== null; ) {
                    if (T.key === Me)
                      if (T.tag === 4 && T.stateNode.containerInfo === k.containerInfo && T.stateNode.implementation === k.implementation) {
                        r(L, T.sibling), ee = u(T, k.children || []), ee.return = L, L = ee;
                        break e;
                      } else {
                        r(L, T);
                        break;
                      }
                    else n(L, T);
                    T = T.sibling;
                  }
                  ee = rl(k, L.mode, ee), ee.return = L, L = ee;
                }
                return b(L);
              case Pr:
                return k = ot(k), bo(L, T, k, ee);
            }
            if (ys(k)) return Fn(L, T, k, ee);
            if (v(k)) {
              if (Me = v(k), typeof Me != "function") throw Error(l(150));
              return k = Me.call(k), Ui(L, T, k, ee);
            }
            if (typeof k.then == "function") return bo(L, T, Ut(k), ee);
            if (k.$$typeof === kr) return bo(L, T, ut(L, k), ee);
            Fo(L, k);
          }
          return typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint" ? (k = "" + k, T !== null && T.tag === 6 ? (r(L, T.sibling), ee = u(T, k), ee.return = L, L = ee) : (r(L, T), ee = tl(k, L.mode, ee), ee.return = L, L = ee), b(L)) : r(L, T);
        }
        return function(L, T, k, ee) {
          try {
            Li = 0;
            var Me = bo(L, T, k, ee);
            return Yo = null, Me;
          } catch (we) {
            if (we === Xo || we === _s) throw we;
            var An = i(29, we, null, L.mode);
            return An.lanes = ee, An.return = L, An;
          }
        };
      }
      function Ro() {
        for (var e = Wo, n = Il = Wo = 0; n < e; ) {
          var r = Dt[n];
          Dt[n++] = null;
          var o = Dt[n];
          Dt[n++] = null;
          var u = Dt[n];
          Dt[n++] = null;
          var f = Dt[n];
          if (Dt[n++] = null, o !== null && u !== null) {
            var b = o.pending;
            b === null ? u.next = u : (u.next = b.next, b.next = u), o.pending = u;
          }
          f !== 0 && vi(r, u, f);
        }
      }
      function rr(e, n, r, o) {
        Dt[Wo++] = e, Dt[Wo++] = n, Dt[Wo++] = r, Dt[Wo++] = o, Il |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
      }
      function Ar(e, n, r, o) {
        return rr(e, n, r, o), xo(e);
      }
      function _e(e, n) {
        return rr(e, null, null, n), xo(e);
      }
      function vi(e, n, r) {
        e.lanes |= r;
        var o = e.alternate;
        o !== null && (o.lanes |= r);
        for (var u = !1, f = e.return; f !== null; ) f.childLanes |= r, o = f.alternate, o !== null && (o.childLanes |= r), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & 1 || (u = !0)), e = f, f = f.return;
        return e.tag === 3 ? (f = e.stateNode, u && n !== null && (u = 31 - Et(r), e = f.hiddenUpdates, o = e[u], o === null ? e[u] = [n] : o.push(n), n.lane = r | 536870912), f) : null;
      }
      function xo(e) {
        if (50 < Ni) throw Ni = 0, Hl = null, Error(l(185));
        for (var n = e.return; n !== null; ) e = n, n = e.return;
        return e.tag === 3 ? e.stateNode : null;
      }
      function m(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: {
            pending: null,
            lanes: 0,
            hiddenCallbacks: null
          },
          callbacks: null
        };
      }
      function y(e, n) {
        e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null
        });
      }
      function M(e) {
        return {
          lane: e,
          tag: 0,
          payload: null,
          callback: null,
          next: null
        };
      }
      function D(e, n, r) {
        var o = e.updateQueue;
        if (o === null) return null;
        if (o = o.shared, (Ne & 2) !== 0) {
          var u = o.pending;
          return u === null ? n.next = n : (n.next = u.next, u.next = n), o.pending = n, n = xo(e), vi(e, null, r), n;
        }
        return rr(e, o, n, r), xo(e);
      }
      function N(e, n, r) {
        if (n = n.updateQueue, n !== null && (n = n.shared, (r & 4194048) !== 0)) {
          var o = n.lanes;
          o &= e.pendingLanes, r |= o, n.lanes = r, O(e, r);
        }
      }
      function U(e, n) {
        var r = e.updateQueue, o = e.alternate;
        if (o !== null && (o = o.updateQueue, r === o)) {
          var u = null, f = null;
          if (r = r.firstBaseUpdate, r !== null) {
            do {
              var b = {
                lane: r.lane,
                tag: r.tag,
                payload: r.payload,
                callback: null,
                next: null
              };
              f === null ? u = f = b : f = f.next = b, r = r.next;
            } while (r !== null);
            f === null ? u = f = n : f = f.next = n;
          } else u = f = n;
          r = {
            baseState: o.baseState,
            firstBaseUpdate: u,
            lastBaseUpdate: f,
            shared: o.shared,
            callbacks: o.callbacks
          }, e.updateQueue = r;
          return;
        }
        e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = n : e.next = n, r.lastBaseUpdate = n;
      }
      function V() {
        if (Tl) {
          var e = Qo;
          if (e !== null) throw e;
        }
      }
      function Y(e, n, r, o) {
        Tl = !1;
        var u = e.updateQueue;
        zr = !1;
        var f = u.firstBaseUpdate, b = u.lastBaseUpdate, S = u.shared.pending;
        if (S !== null) {
          u.shared.pending = null;
          var H = S, X = H.next;
          H.next = null, b === null ? f = X : b.next = X, b = H;
          var ue = e.alternate;
          ue !== null && (ue = ue.updateQueue, S = ue.lastBaseUpdate, S !== b && (S === null ? ue.firstBaseUpdate = X : S.next = X, ue.lastBaseUpdate = H));
        }
        if (f !== null) {
          var $ = u.baseState;
          b = 0, ue = X = H = null, S = f;
          do {
            var me = S.lane & -536870913, Le = me !== S.lane;
            if (Le ? (je & me) === me : (o & me) === me) {
              me !== 0 && me === Ko && (Tl = !0), ue !== null && (ue = ue.next = {
                lane: 0,
                tag: S.tag,
                payload: S.payload,
                callback: null,
                next: null
              });
              e: {
                var Fn = e, Ui = S;
                me = n;
                var bo = r;
                switch (Ui.tag) {
                  case 1:
                    if (Fn = Ui.payload, typeof Fn == "function") {
                      $ = Fn.call(bo, $, me);
                      break e;
                    }
                    $ = Fn;
                    break e;
                  case 3:
                    Fn.flags = Fn.flags & -65537 | 128;
                  case 0:
                    if (Fn = Ui.payload, me = typeof Fn == "function" ? Fn.call(bo, $, me) : Fn, me == null) break e;
                    $ = il({}, $, me);
                    break e;
                  case 2:
                    zr = !0;
                }
              }
              me = S.callback, me !== null && (e.flags |= 64, Le && (e.flags |= 8192), Le = u.callbacks, Le === null ? u.callbacks = [me] : Le.push(me));
            } else Le = {
              lane: me,
              tag: S.tag,
              payload: S.payload,
              callback: S.callback,
              next: null
            }, ue === null ? (X = ue = Le, H = $) : ue = ue.next = Le, b |= me;
            if (S = S.next, S === null) {
              if (S = u.shared.pending, S === null) break;
              Le = S, S = Le.next, Le.next = null, u.lastBaseUpdate = Le, u.shared.pending = null;
            }
          } while (!0);
          ue === null && (H = $), u.baseState = H, u.firstBaseUpdate = X, u.lastBaseUpdate = ue, f === null && (u.shared.lanes = 0), jr |= b, e.lanes = b, e.memoizedState = $;
        }
      }
      function ie(e, n) {
        if (typeof e != "function") throw Error(l(191, e));
        e.call(n);
      }
      function oe(e, n) {
        var r = e.callbacks;
        if (r !== null) for (e.callbacks = null, e = 0; e < r.length; e++) ie(r[e], n);
      }
      function se(e, n) {
        e = Tr, E(Ls, e), E(Zo, n), Tr = e | n.baseLanes;
      }
      function te() {
        E(Ls, Tr), E(Zo, Zo.current);
      }
      function on() {
        Tr = Ls.current, C(Zo), C(Ls);
      }
      function Ae(e) {
        var n = e.alternate;
        E(yn, yn.current & 1), E(wt, e), Xt === null && (n === null || Zo.current !== null || n.memoizedState !== null) && (Xt = e);
      }
      function ye(e) {
        E(yn, yn.current), E(wt, e), Xt === null && (Xt = e);
      }
      function Re(e) {
        e.tag === 22 ? (E(yn, yn.current), E(wt, e), Xt === null && (Xt = e)) : Ie();
      }
      function Ie() {
        E(yn, yn.current), E(wt, wt.current);
      }
      function ke(e) {
        C(wt), Xt === e && (Xt = null), C(yn);
      }
      function qe(e) {
        for (var n = e; n !== null; ) {
          if (n.tag === 13) {
            var r = n.memoizedState;
            if (r !== null && (r = r.dehydrated, r === null || hl(r) || ml(r))) return n;
          } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
            if ((n.flags & 128) !== 0) return n;
          } else if (n.child !== null) {
            n.child.return = n, n = n.child;
            continue;
          }
          if (n === e) break;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === e) return null;
            n = n.return;
          }
          n.sibling.return = n.return, n = n.sibling;
        }
        return null;
      }
      function Ge() {
        throw Error(l(321));
      }
      function _n(e, n) {
        if (n === null) return !1;
        for (var r = 0; r < n.length && r < e.length; r++) if (!Mt(e[r], n[r])) return !1;
        return !0;
      }
      function $e(e, n, r, o, u, f) {
        return wr = f, Oe = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Se.H = e === null || e.memoizedState === null ? Cd : Fl, Ao = !1, f = r(o, u), Ao = !1, Vo && (f = tn(n, r, o, u)), vt(e), f;
      }
      function vt(e) {
        Se.H = Oi;
        var n = rn !== null && rn.next !== null;
        if (wr = 0, Mn = rn = Oe = null, Gs = !1, Gi = 0, qo = null, n) throw Error(l(300));
        e === null || wn || (e = e.dependencies, e !== null && Vt(e) && (wn = !0));
      }
      function tn(e, n, r, o) {
        Oe = e;
        var u = 0;
        do {
          if (Vo && (qo = null), Gi = 0, Vo = !1, 25 <= u) throw Error(l(301));
          if (u += 1, Mn = rn = null, e.updateQueue != null) {
            var f = e.updateQueue;
            f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
          }
          Se.H = Ed, f = n(r, o);
        } while (Vo);
        return f;
      }
      function Sn() {
        var e = Se.H, n = e.useState()[0];
        return n = typeof n.then == "function" ? Qe(n) : n, e = e.useState()[0], (rn !== null ? rn.memoizedState : null) !== e && (Oe.flags |= 1024), n;
      }
      function bt() {
        var e = Os !== 0;
        return Os = 0, e;
      }
      function vr(e, n, r) {
        n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~r;
      }
      function Wn(e) {
        if (Gs) {
          for (e = e.memoizedState; e !== null; ) {
            var n = e.queue;
            n !== null && (n.pending = null), e = e.next;
          }
          Gs = !1;
        }
        wr = 0, Mn = rn = Oe = null, Vo = !1, Gi = Os = 0, qo = null;
      }
      function De() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return Mn === null ? Oe.memoizedState = Mn = e : Mn = Mn.next = e, Mn;
      }
      function Pe() {
        if (rn === null) {
          var e = Oe.alternate;
          e = e !== null ? e.memoizedState : null;
        } else e = rn.next;
        var n = Mn === null ? Oe.memoizedState : Mn.next;
        if (n !== null) Mn = n, rn = e;
        else {
          if (e === null) throw Oe.alternate === null ? Error(l(467)) : Error(l(310));
          rn = e, e = {
            memoizedState: rn.memoizedState,
            baseState: rn.baseState,
            baseQueue: rn.baseQueue,
            queue: rn.queue,
            next: null
          }, Mn === null ? Oe.memoizedState = Mn = e : Mn = Mn.next = e;
        }
        return Mn;
      }
      function en() {
        return {
          lastEffect: null,
          events: null,
          stores: null,
          memoCache: null
        };
      }
      function Qe(e) {
        var n = Gi;
        return Gi += 1, qo === null && (qo = []), e = ft(qo, e, n), n = Oe, (Mn === null ? n.memoizedState : Mn.next) === null && (n = n.alternate, Se.H = n === null || n.memoizedState === null ? Cd : Fl), e;
      }
      function Un(e) {
        if (e !== null && typeof e == "object") {
          if (typeof e.then == "function") return Qe(e);
          if (e.$$typeof === kr) return ln(e);
        }
        throw Error(l(438, String(e)));
      }
      function zt(e) {
        var n = null, r = Oe.updateQueue;
        if (r !== null && (n = r.memoCache), n == null) {
          var o = Oe.alternate;
          o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (n = {
            data: o.data.map(function(u) {
              return u.slice();
            }),
            index: 0
          })));
        }
        if (n == null && (n = {
          data: [],
          index: 0
        }), r === null && (r = en(), Oe.updateQueue = r), r.memoCache = n, r = n.data[n.index], r === void 0) for (r = n.data[n.index] = Array(e), o = 0; o < e; o++) r[o] = jh;
        return n.index++, r;
      }
      function hn(e, n) {
        return typeof n == "function" ? n(e) : n;
      }
      function Bt(e) {
        var n = Pe();
        return ya(n, rn, e);
      }
      function ya(e, n, r) {
        var o = e.queue;
        if (o === null) throw Error(l(311));
        o.lastRenderedReducer = r;
        var u = e.baseQueue, f = o.pending;
        if (f !== null) {
          if (u !== null) {
            var b = u.next;
            u.next = f.next, f.next = b;
          }
          n.baseQueue = u = f, o.pending = null;
        }
        if (f = e.baseState, u === null) e.memoizedState = f;
        else {
          n = u.next;
          var S = b = null, H = null, X = n, ue = !1;
          do {
            var $ = X.lane & -536870913;
            if ($ !== X.lane ? (je & $) === $ : (wr & $) === $) {
              var me = X.revertLane;
              if (me === 0) H !== null && (H = H.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: X.action,
                hasEagerState: X.hasEagerState,
                eagerState: X.eagerState,
                next: null
              }), $ === Ko && (ue = !0);
              else if ((wr & me) === me) {
                X = X.next, me === Ko && (ue = !0);
                continue;
              } else $ = {
                lane: 0,
                revertLane: X.revertLane,
                gesture: null,
                action: X.action,
                hasEagerState: X.hasEagerState,
                eagerState: X.eagerState,
                next: null
              }, H === null ? (S = H = $, b = f) : H = H.next = $, Oe.lanes |= me, jr |= me;
              $ = X.action, Ao && r(f, $), f = X.hasEagerState ? X.eagerState : r(f, $);
            } else me = {
              lane: $,
              revertLane: X.revertLane,
              gesture: X.gesture,
              action: X.action,
              hasEagerState: X.hasEagerState,
              eagerState: X.eagerState,
              next: null
            }, H === null ? (S = H = me, b = f) : H = H.next = me, Oe.lanes |= $, jr |= $;
            X = X.next;
          } while (X !== null && X !== n);
          if (H === null ? b = f : H.next = S, !Mt(f, e.memoizedState) && (wn = !0, ue && (r = Qo, r !== null))) throw r;
          e.memoizedState = f, e.baseState = b, e.baseQueue = H, o.lastRenderedState = f;
        }
        return u === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
      }
      function Ca(e) {
        var n = Pe(), r = n.queue;
        if (r === null) throw Error(l(311));
        r.lastRenderedReducer = e;
        var o = r.dispatch, u = r.pending, f = n.memoizedState;
        if (u !== null) {
          r.pending = null;
          var b = u = u.next;
          do
            f = e(f, b.action), b = b.next;
          while (b !== u);
          Mt(f, n.memoizedState) || (wn = !0), n.memoizedState = f, n.baseQueue === null && (n.baseState = f), r.lastRenderedState = f;
        }
        return [f, o];
      }
      function Vu(e, n, r) {
        var o = Oe, u = Pe(), f = Xe;
        if (f) {
          if (r === void 0) throw Error(l(407));
          r = r();
        } else r = n();
        var b = !Mt((rn || u).memoizedState, r);
        if (b && (u.memoizedState = r, wn = !0), u = u.queue, Ma(ec.bind(null, o, u, e), [e]), u.getSnapshot !== n || b || Mn !== null && Mn.memoizedState.tag & 1) {
          if (o.flags |= 2048, _o(9, {
            destroy: void 0
          }, $u.bind(null, o, u, r, n), null), sn === null) throw Error(l(349));
          f || (wr & 127) !== 0 || qu(o, n, r);
        }
        return r;
      }
      function qu(e, n, r) {
        e.flags |= 16384, e = {
          getSnapshot: n,
          value: r
        }, n = Oe.updateQueue, n === null ? (n = en(), Oe.updateQueue = n, n.stores = [e]) : (r = n.stores, r === null ? n.stores = [e] : r.push(e));
      }
      function $u(e, n, r, o) {
        n.value = r, n.getSnapshot = o, nc(n) && tc(e);
      }
      function ec(e, n, r) {
        return r(function() {
          nc(n) && tc(e);
        });
      }
      function nc(e) {
        var n = e.getSnapshot;
        e = e.value;
        try {
          var r = n();
          return !Mt(e, r);
        } catch {
          return !0;
        }
      }
      function tc(e) {
        var n = _e(e, 2);
        n !== null && dt(n, e, 2);
      }
      function Ea(e) {
        var n = De();
        if (typeof e == "function") {
          var r = e;
          if (e = r(), Ao) {
            W(!0);
            try {
              r();
            } finally {
              W(!1);
            }
          }
        }
        return n.memoizedState = n.baseState = e, n.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: hn,
          lastRenderedState: e
        }, n;
      }
      function rc(e, n, r, o) {
        return e.baseState = r, ya(e, rn, typeof o == "function" ? o : hn);
      }
      function Bh(e, n, r, o, u) {
        if (as(e)) throw Error(l(485));
        if (e = n.action, e !== null) {
          var f = {
            payload: u,
            action: e,
            next: null,
            isTransition: !0,
            status: "pending",
            value: null,
            reason: null,
            listeners: [],
            then: function(b) {
              f.listeners.push(b);
            }
          };
          Se.T !== null ? r(!0) : f.isTransition = !1, o(f), r = n.pending, r === null ? (f.next = n.pending = f, oc(n, f)) : (f.next = r.next, n.pending = r.next = f);
        }
      }
      function oc(e, n) {
        var r = n.action, o = n.payload, u = e.state;
        if (n.isTransition) {
          var f = Se.T, b = {};
          Se.T = b;
          try {
            var S = r(u, o), H = Se.S;
            H !== null && H(b, S), ic(e, n, S);
          } catch (X) {
            Sa(e, n, X);
          } finally {
            f !== null && b.types !== null && (f.types = b.types), Se.T = f;
          }
        } else try {
          f = r(u, o), ic(e, n, f);
        } catch (X) {
          Sa(e, n, X);
        }
      }
      function ic(e, n, r) {
        r !== null && typeof r == "object" && typeof r.then == "function" ? r.then(function(o) {
          sc(e, n, o);
        }, function(o) {
          return Sa(e, n, o);
        }) : sc(e, n, r);
      }
      function sc(e, n, r) {
        n.status = "fulfilled", n.value = r, ac(n), e.state = r, n = e.pending, n !== null && (r = n.next, r === n ? e.pending = null : (r = r.next, n.next = r, oc(e, r)));
      }
      function Sa(e, n, r) {
        var o = e.pending;
        if (e.pending = null, o !== null) {
          o = o.next;
          do
            n.status = "rejected", n.reason = r, ac(n), n = n.next;
          while (n !== o);
        }
        e.action = null;
      }
      function ac(e) {
        e = e.listeners;
        for (var n = 0; n < e.length; n++) (0, e[n])();
      }
      function lc(e, n) {
        return n;
      }
      function uc(e, n) {
        if (Xe) {
          var r = sn.formState;
          if (r !== null) {
            e: {
              var o = Oe;
              if (Xe) {
                if (mn) {
                  var u = km(mn, _t);
                  if (u) {
                    mn = od(u), o = Pm(u);
                    break e;
                  }
                }
                Yn(o);
              }
              o = !1;
            }
            o && (n = r[0]);
          }
        }
        r = De(), r.memoizedState = r.baseState = n, o = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: lc,
          lastRenderedState: n
        }, r.queue = o, r = Ic.bind(null, Oe, o), o.dispatch = r, o = Ea(!1);
        var f = Fa.bind(null, Oe, !1, o.queue);
        return o = De(), u = {
          state: n,
          dispatch: null,
          action: e,
          pending: null
        }, o.queue = u, r = Bh.bind(null, Oe, u, f, r), u.dispatch = r, o.memoizedState = e, [n, r, !1];
      }
      function cc(e) {
        var n = Pe();
        return fc(n, rn, e);
      }
      function fc(e, n, r) {
        if (n = ya(e, n, lc)[0], e = Bt(hn)[0], typeof n == "object" && n !== null && typeof n.then == "function") try {
          var o = Qe(n);
        } catch (b) {
          throw b === Xo ? _s : b;
        }
        else o = n;
        n = Pe();
        var u = n.queue, f = u.dispatch;
        return r !== n.memoizedState && (Oe.flags |= 2048, _o(9, {
          destroy: void 0
        }, yh.bind(null, u, r), null)), [o, f, e];
      }
      function yh(e, n) {
        e.action = n;
      }
      function dc(e) {
        var n = Pe(), r = rn;
        if (r !== null) return fc(n, r, e);
        Pe(), n = n.memoizedState, r = Pe();
        var o = r.queue.dispatch;
        return r.memoizedState = e, [n, o, !1];
      }
      function _o(e, n, r, o) {
        return e = {
          tag: e,
          create: r,
          deps: o,
          inst: n,
          next: null
        }, n = Oe.updateQueue, n === null && (n = en(), Oe.updateQueue = n), r = n.lastEffect, r === null ? n.lastEffect = e.next = e : (o = r.next, r.next = e, e.next = o, n.lastEffect = e), e;
      }
      function pc() {
        return Pe().memoizedState;
      }
      function is(e, n, r, o) {
        var u = De();
        Oe.flags |= e, u.memoizedState = _o(1 | n, {
          destroy: void 0
        }, r, o === void 0 ? null : o);
      }
      function ss(e, n, r, o) {
        var u = Pe();
        o = o === void 0 ? null : o;
        var f = u.memoizedState.inst;
        rn !== null && o !== null && _n(o, rn.memoizedState.deps) ? u.memoizedState = _o(n, f, r, o) : (Oe.flags |= e, u.memoizedState = _o(1 | n, f, r, o));
      }
      function hc(e, n) {
        is(8390656, 8, e, n);
      }
      function Ma(e, n) {
        ss(2048, 8, e, n);
      }
      function Ch(e) {
        Oe.flags |= 4;
        var n = Oe.updateQueue;
        if (n === null) n = en(), Oe.updateQueue = n, n.events = [e];
        else {
          var r = n.events;
          r === null ? n.events = [e] : r.push(e);
        }
      }
      function mc(e) {
        var n = Pe().memoizedState;
        return Ch({
          ref: n,
          nextImpl: e
        }), function() {
          if ((Ne & 2) !== 0) throw Error(l(440));
          return n.impl.apply(void 0, arguments);
        };
      }
      function gc(e, n) {
        return ss(4, 2, e, n);
      }
      function Ac(e, n) {
        return ss(4, 4, e, n);
      }
      function vc(e, n) {
        if (typeof n == "function") {
          e = e();
          var r = n(e);
          return function() {
            typeof r == "function" ? r() : n(null);
          };
        }
        if (n != null) return e = e(), n.current = e, function() {
          n.current = null;
        };
      }
      function bc(e, n, r) {
        r = r != null ? r.concat([e]) : null, ss(4, 4, vc.bind(null, n, e), r);
      }
      function wa() {
      }
      function Bc(e, n) {
        var r = Pe();
        n = n === void 0 ? null : n;
        var o = r.memoizedState;
        return n !== null && _n(n, o[1]) ? o[0] : (r.memoizedState = [e, n], e);
      }
      function yc(e, n) {
        var r = Pe();
        n = n === void 0 ? null : n;
        var o = r.memoizedState;
        if (n !== null && _n(n, o[1])) return o[0];
        if (o = e(), Ao) {
          W(!0);
          try {
            e();
          } finally {
            W(!1);
          }
        }
        return r.memoizedState = [o, n], o;
      }
      function Ia(e, n, r) {
        return r === void 0 || (wr & 1073741824) !== 0 && (je & 261930) === 0 ? e.memoizedState = n : (e.memoizedState = r, e = vf(), Oe.lanes |= e, jr |= e, r);
      }
      function Cc(e, n, r, o) {
        return Mt(r, n) ? r : Zo.current !== null ? (e = Ia(e, r, o), Mt(e, n) || (wn = !0), e) : (wr & 42) === 0 || (wr & 1073741824) !== 0 && (je & 261930) === 0 ? (wn = !0, e.memoizedState = r) : (e = vf(), Oe.lanes |= e, jr |= e, n);
      }
      function Ec(e, n, r, o, u) {
        var f = Sr();
        On(f !== 0 && 8 > f ? f : 8);
        var b = Se.T, S = {};
        Se.T = S, Fa(e, !1, n, r);
        try {
          var H = u(), X = Se.S;
          if (X !== null && X(S, H), H !== null && typeof H == "object" && typeof H.then == "function") {
            var ue = ne(H, o);
            bi(e, n, ue, yt(e));
          } else bi(e, n, o, yt(e));
        } catch ($) {
          bi(e, n, {
            then: function() {
            },
            status: "rejected",
            reason: $
          }, yt());
        } finally {
          On(f), b !== null && S.types !== null && (b.types = S.types), Se.T = b;
        }
      }
      function Sc(e) {
        var n = e.memoizedState;
        if (n !== null) return n;
        n = {
          memoizedState: Po,
          baseState: Po,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: hn,
            lastRenderedState: Po
          },
          next: null
        };
        var r = {};
        return n.next = {
          memoizedState: r,
          baseState: r,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: hn,
            lastRenderedState: r
          },
          next: null
        }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
      }
      function Ta() {
        return ln(co);
      }
      function Mc() {
        return Pe().memoizedState;
      }
      function wc() {
        return Pe().memoizedState;
      }
      function Eh(e) {
        for (var n = e.return; n !== null; ) {
          switch (n.tag) {
            case 24:
            case 3:
              var r = yt();
              e = M(r);
              var o = D(n, e, r);
              o !== null && (dt(o, n, r), N(o, n, r)), n = {
                cache: hr()
              }, e.payload = n;
              return;
          }
          n = n.return;
        }
      }
      function Sh(e, n, r) {
        var o = yt();
        r = {
          lane: o,
          revertLane: 0,
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, as(e) ? Tc(n, r) : (r = Ar(e, n, r, o), r !== null && (dt(r, e, o), Fc(r, n, o)));
      }
      function Ic(e, n, r) {
        var o = yt();
        bi(e, n, r, o);
      }
      function bi(e, n, r, o) {
        var u = {
          lane: o,
          revertLane: 0,
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null
        };
        if (as(e)) Tc(n, u);
        else {
          var f = e.alternate;
          if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = n.lastRenderedReducer, f !== null)) try {
            var b = n.lastRenderedState, S = f(b, r);
            if (u.hasEagerState = !0, u.eagerState = S, Mt(S, b)) return rr(e, n, u, 0), sn === null && Ro(), !1;
          } catch {
          }
          if (r = Ar(e, n, u, o), r !== null) return dt(r, e, o), Fc(r, n, o), !0;
        }
        return !1;
      }
      function Fa(e, n, r, o) {
        if (o = {
          lane: 2,
          revertLane: Z(),
          gesture: null,
          action: o,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, as(e)) {
          if (n) throw Error(l(479));
        } else n = Ar(e, r, o, 2), n !== null && dt(n, e, 2);
      }
      function as(e) {
        var n = e.alternate;
        return e === Oe || n !== null && n === Oe;
      }
      function Tc(e, n) {
        Vo = Gs = !0;
        var r = e.pending;
        r === null ? n.next = n : (n.next = r.next, r.next = n), e.pending = n;
      }
      function Fc(e, n, r) {
        if ((r & 4194048) !== 0) {
          var o = n.lanes;
          o &= e.pendingLanes, r |= o, n.lanes = r, O(e, r);
        }
      }
      function Ra(e, n, r, o) {
        n = e.memoizedState, r = r(o, n), r = r == null ? n : il({}, n, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
      }
      function Rc(e, n, r, o, u, f, b) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, f, b) : n.prototype && n.prototype.isPureReactComponent ? !gr(r, o) || !gr(u, f) : !0;
      }
      function xc(e, n, r, o) {
        e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(r, o), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(r, o), n.state !== e && Rl.enqueueReplaceState(n, n.state, null);
      }
      function io(e, n) {
        var r = n;
        if ("ref" in n) {
          r = {};
          for (var o in n) o !== "ref" && (r[o] = n[o]);
        }
        if (e = e.defaultProps) {
          r === n && (r = il({}, r));
          for (var u in e) r[u] === void 0 && (r[u] = e[u]);
        }
        return r;
      }
      function ls(e, n) {
        try {
          var r = e.onUncaughtError;
          r(n.value, {
            componentStack: n.stack
          });
        } catch (o) {
          setTimeout(function() {
            throw o;
          });
        }
      }
      function _c(e, n, r) {
        try {
          var o = e.onCaughtError;
          o(r.value, {
            componentStack: r.stack,
            errorBoundary: n.tag === 1 ? n.stateNode : null
          });
        } catch (u) {
          setTimeout(function() {
            throw u;
          });
        }
      }
      function xa(e, n, r) {
        return r = M(r), r.tag = 3, r.payload = {
          element: null
        }, r.callback = function() {
          ls(e, n);
        }, r;
      }
      function Dc(e) {
        return e = M(e), e.tag = 3, e;
      }
      function Lc(e, n, r, o) {
        var u = r.type.getDerivedStateFromError;
        if (typeof u == "function") {
          var f = o.value;
          e.payload = function() {
            return u(f);
          }, e.callback = function() {
            _c(n, r, o);
          };
        }
        var b = r.stateNode;
        b !== null && typeof b.componentDidCatch == "function" && (e.callback = function() {
          _c(n, r, o), typeof u != "function" && (Kr === null ? Kr = /* @__PURE__ */ new Set([this]) : Kr.add(this));
          var S = o.stack;
          this.componentDidCatch(o.value, {
            componentStack: S !== null ? S : ""
          });
        });
      }
      function Mh(e, n, r, o, u) {
        if (r.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
          if (n = r.alternate, n !== null && At(n, r, u, !0), r = wt.current, r !== null) {
            switch (r.tag) {
              case 31:
              case 13:
                return Xt === null ? As() : r.alternate === null && bn === 0 && (bn = 3), r.flags &= -257, r.flags |= 65536, r.lanes = u, o === Ds ? r.flags |= 16384 : (n = r.updateQueue, n === null ? r.updateQueue = /* @__PURE__ */ new Set([o]) : n.add(o), el(e, o, u)), !1;
              case 22:
                return r.flags |= 65536, o === Ds ? r.flags |= 16384 : (n = r.updateQueue, n === null ? (n = {
                  transitions: null,
                  markerInstances: null,
                  retryQueue: /* @__PURE__ */ new Set([o])
                }, r.updateQueue = n) : (r = n.retryQueue, r === null ? n.retryQueue = /* @__PURE__ */ new Set([o]) : r.add(o)), el(e, o, u)), !1;
            }
            throw Error(l(435, r.tag));
          }
          return el(e, o, u), As(), !1;
        }
        if (Xe) return n = wt.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = u, o !== Cl && (e = Error(l(422), {
          cause: o
        }), tt(fe(e, r)))) : (o !== Cl && (n = Error(l(423), {
          cause: o
        }), tt(fe(n, r))), e = e.current.alternate, e.flags |= 65536, u &= -u, e.lanes |= u, o = fe(o, r), u = xa(e.stateNode, o, u), U(e, u), bn !== 4 && (bn = 2)), !1;
        var f = Error(l(520), {
          cause: o
        });
        if (f = fe(f, r), Pi === null ? Pi = [f] : Pi.push(f), bn !== 4 && (bn = 2), n === null) return !0;
        o = fe(o, r), r = n;
        do {
          switch (r.tag) {
            case 3:
              return r.flags |= 65536, e = u & -u, r.lanes |= e, e = xa(r.stateNode, o, e), U(r, e), !1;
            case 1:
              if (n = r.type, f = r.stateNode, (r.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Kr === null || !Kr.has(f)))) return r.flags |= 65536, u &= -u, r.lanes |= u, u = Dc(u), Lc(u, e, r, o), U(r, u), !1;
          }
          r = r.return;
        } while (r !== null);
        return !1;
      }
      function zn(e, n, r, o) {
        n.child = e === null ? yd(n, null, r, o) : go(n, e.child, r, o);
      }
      function Gc(e, n, r, o, u) {
        r = r.render;
        var f = n.ref;
        if ("ref" in o) {
          var b = {};
          for (var S in o) S !== "ref" && (b[S] = o[S]);
        } else b = o;
        return lt(n), o = $e(e, n, r, b, f, u), S = bt(), e !== null && !wn ? (vr(e, n, u), br(e, n, u)) : (Xe && S && he(n), n.flags |= 1, zn(e, n, o, u), n.child);
      }
      function Oc(e, n, r, o, u) {
        if (e === null) {
          var f = r.type;
          return typeof f == "function" && !nl(f) && f.defaultProps === void 0 && r.compare === null ? (n.tag = 15, n.type = f, kc(e, n, f, o, u)) : (e = bs(r.type, null, o, n, n.mode, u), e.ref = n.ref, e.return = n, n.child = e);
        }
        if (f = e.child, !Pa(e, u)) {
          var b = f.memoizedProps;
          if (r = r.compare, r = r !== null ? r : gr, r(b, o) && e.ref === n.ref) return br(e, n, u);
        }
        return n.flags |= 1, e = Cr(f, o), e.ref = n.ref, e.return = n, n.child = e;
      }
      function kc(e, n, r, o, u) {
        if (e !== null) {
          var f = e.memoizedProps;
          if (gr(f, o) && e.ref === n.ref) if (wn = !1, n.pendingProps = o = f, Pa(e, u)) (e.flags & 131072) !== 0 && (wn = !0);
          else return n.lanes = e.lanes, br(e, n, u);
        }
        return _a(e, n, r, o, u);
      }
      function Pc(e, n, r, o) {
        var u = o.children, f = e !== null ? e.memoizedState : null;
        if (e === null && n.stateNode === null && (n.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null
        }), o.mode === "hidden") {
          if ((n.flags & 128) !== 0) {
            if (f = f !== null ? f.baseLanes | r : r, e !== null) {
              for (o = n.child = e.child, u = 0; o !== null; ) u = u | o.lanes | o.childLanes, o = o.sibling;
              o = u & ~f;
            } else o = 0, n.child = null;
            return Hc(e, n, f, r, o);
          }
          if ((r & 536870912) !== 0) n.memoizedState = {
            baseLanes: 0,
            cachePool: null
          }, e !== null && rt(n, f !== null ? f.cachePool : null), f !== null ? se(n, f) : te(), Re(n);
          else return o = n.lanes = 536870912, Hc(e, n, f !== null ? f.baseLanes | r : r, r, o);
        } else f !== null ? (rt(n, f.cachePool), se(n, f), Ie(), n.memoizedState = null) : (e !== null && rt(n, null), te(), Ie());
        return zn(e, n, u, r), n.child;
      }
      function Bi(e, n) {
        return e !== null && e.tag === 22 || n.stateNode !== null || (n.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null
        }), n.sibling;
      }
      function Hc(e, n, r, o, u) {
        var f = xn();
        return f = f === null ? null : {
          parent: Er ? gn._currentValue : gn._currentValue2,
          pool: f
        }, n.memoizedState = {
          baseLanes: r,
          cachePool: f
        }, e !== null && rt(n, null), te(), Re(n), e !== null && At(e, n, o, !0), n.childLanes = u, null;
      }
      function us(e, n) {
        return n = fs({
          mode: n.mode,
          children: n.children
        }, e.mode), n.ref = e.ref, e.child = n, n.return = e, n;
      }
      function Nc(e, n, r) {
        return go(n, e.child, null, r), e = us(n, n.pendingProps), e.flags |= 2, ke(n), n.memoizedState = null, e;
      }
      function wh(e, n, r) {
        var o = n.pendingProps, u = (n.flags & 128) !== 0;
        if (n.flags &= -129, e === null) {
          if (Xe) {
            if (o.mode === "hidden") return e = us(n, o), n.lanes = 536870912, Bi(null, e);
            if (ye(n), (e = mn) ? (e = Xm(e, _t), e !== null && (n.memoizedState = {
              dehydrated: e,
              treeContext: Hr !== null ? {
                id: sr,
                overflow: ar
              } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, r = Pf(e), r.return = n, n.child = r, jn = n, mn = null)) : e = null, e === null) throw Yn(n);
            return n.lanes = 536870912, null;
          }
          return us(n, o);
        }
        var f = e.memoizedState;
        if (f !== null) {
          var b = f.dehydrated;
          if (ye(n), u)
            if (n.flags & 256) n.flags &= -257, n = Nc(e, n, r);
            else if (n.memoizedState !== null) n.child = e.child, n.flags |= 128, n = null;
            else throw Error(l(558));
          else if (wn || At(e, n, r, !1), u = (r & e.childLanes) !== 0, wn || u) {
            if (o = sn, o !== null && (b = K(o, r), b !== 0 && b !== f.retryLane)) throw f.retryLane = b, _e(e, b), dt(o, e, b), xl;
            As(), n = Nc(e, n, r);
          } else e = f.treeContext, qn && (mn = zm(b), jn = n, Xe = !0, Ur = null, _t = !1, e !== null && Fe(n, e)), n = us(n, o), n.flags |= 4096;
          return n;
        }
        return e = Cr(e.child, {
          mode: o.mode,
          children: o.children
        }), e.ref = n.ref, n.child = e, e.return = n, e;
      }
      function cs(e, n) {
        var r = n.ref;
        if (r === null) e !== null && e.ref !== null && (n.flags |= 4194816);
        else {
          if (typeof r != "function" && typeof r != "object") throw Error(l(284));
          (e === null || e.ref !== r) && (n.flags |= 4194816);
        }
      }
      function _a(e, n, r, o, u) {
        return lt(n), r = $e(e, n, r, o, void 0, u), o = bt(), e !== null && !wn ? (vr(e, n, u), br(e, n, u)) : (Xe && o && he(n), n.flags |= 1, zn(e, n, r, u), n.child);
      }
      function Uc(e, n, r, o, u, f) {
        return lt(n), n.updateQueue = null, r = tn(n, o, r, u), vt(e), o = bt(), e !== null && !wn ? (vr(e, n, f), br(e, n, f)) : (Xe && o && he(n), n.flags |= 1, zn(e, n, r, f), n.child);
      }
      function zc(e, n, r, o, u) {
        if (lt(n), n.stateNode === null) {
          var f = Uo, b = r.contextType;
          typeof b == "object" && b !== null && (f = ln(b)), f = new r(o, f), n.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = Rl, n.stateNode = f, f._reactInternals = n, f = n.stateNode, f.props = o, f.state = n.memoizedState, f.refs = {}, m(n), b = r.contextType, f.context = typeof b == "object" && b !== null ? ln(b) : Uo, f.state = n.memoizedState, b = r.getDerivedStateFromProps, typeof b == "function" && (Ra(n, r, b, o), f.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (b = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), b !== f.state && Rl.enqueueReplaceState(f, f.state, null), Y(n, o, f, u), V(), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308), o = !0;
        } else if (e === null) {
          f = n.stateNode;
          var S = n.memoizedProps, H = io(r, S);
          f.props = H;
          var X = f.context, ue = r.contextType;
          b = Uo, typeof ue == "object" && ue !== null && (b = ln(ue));
          var $ = r.getDerivedStateFromProps;
          ue = typeof $ == "function" || typeof f.getSnapshotBeforeUpdate == "function", S = n.pendingProps !== S, ue || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (S || X !== b) && xc(n, f, o, b), zr = !1;
          var me = n.memoizedState;
          f.state = me, Y(n, o, f, u), V(), X = n.memoizedState, S || me !== X || zr ? (typeof $ == "function" && (Ra(n, r, $, o), X = n.memoizedState), (H = zr || Rc(n, r, H, o, me, X, b)) ? (ue || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = o, n.memoizedState = X), f.props = o, f.state = X, f.context = b, o = H) : (typeof f.componentDidMount == "function" && (n.flags |= 4194308), o = !1);
        } else {
          f = n.stateNode, y(e, n), b = n.memoizedProps, ue = io(r, b), f.props = ue, $ = n.pendingProps, me = f.context, X = r.contextType, H = Uo, typeof X == "object" && X !== null && (H = ln(X)), S = r.getDerivedStateFromProps, (X = typeof S == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (b !== $ || me !== H) && xc(n, f, o, H), zr = !1, me = n.memoizedState, f.state = me, Y(n, o, f, u), V();
          var Le = n.memoizedState;
          b !== $ || me !== Le || zr || e !== null && e.dependencies !== null && Vt(e.dependencies) ? (typeof S == "function" && (Ra(n, r, S, o), Le = n.memoizedState), (ue = zr || Rc(n, r, ue, o, me, Le, H) || e !== null && e.dependencies !== null && Vt(e.dependencies)) ? (X || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(o, Le, H), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(o, Le, H)), typeof f.componentDidUpdate == "function" && (n.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || b === e.memoizedProps && me === e.memoizedState || (n.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || b === e.memoizedProps && me === e.memoizedState || (n.flags |= 1024), n.memoizedProps = o, n.memoizedState = Le), f.props = o, f.state = Le, f.context = H, o = ue) : (typeof f.componentDidUpdate != "function" || b === e.memoizedProps && me === e.memoizedState || (n.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || b === e.memoizedProps && me === e.memoizedState || (n.flags |= 1024), o = !1);
        }
        return f = o, cs(e, n), o = (n.flags & 128) !== 0, f || o ? (f = n.stateNode, r = o && typeof r.getDerivedStateFromError != "function" ? null : f.render(), n.flags |= 1, e !== null && o ? (n.child = go(n, e.child, null, u), n.child = go(n, null, r, u)) : zn(e, n, r, u), n.memoizedState = f.state, e = n.child) : e = br(e, n, u), e;
      }
      function Jc(e, n, r, o) {
        return pn(), n.flags |= 256, zn(e, n, r, o), n.child;
      }
      function Da(e) {
        return {
          baseLanes: e,
          cachePool: Ai()
        };
      }
      function La(e, n, r) {
        return e = e !== null ? e.childLanes & ~r : 0, n && (e |= Tt), e;
      }
      function jc(e, n, r) {
        var o = n.pendingProps, u = !1, f = (n.flags & 128) !== 0, b;
        if ((b = f) || (b = e !== null && e.memoizedState === null ? !1 : (yn.current & 2) !== 0), b && (u = !0, n.flags &= -129), b = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
          if (Xe) {
            if (u ? Ae(n) : Ie(), (e = mn) ? (e = Ym(e, _t), e !== null && (n.memoizedState = {
              dehydrated: e,
              treeContext: Hr !== null ? {
                id: sr,
                overflow: ar
              } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, r = Pf(e), r.return = n, n.child = r, jn = n, mn = null)) : e = null, e === null) throw Yn(n);
            return ml(e) ? n.lanes = 32 : n.lanes = 536870912, null;
          }
          var S = o.children;
          return o = o.fallback, u ? (Ie(), u = n.mode, S = fs({
            mode: "hidden",
            children: S
          }, u), o = lo(o, u, r, null), S.return = n, o.return = n, S.sibling = o, n.child = S, o = n.child, o.memoizedState = Da(r), o.childLanes = La(e, b, r), n.memoizedState = _l, Bi(null, o)) : (Ae(n), Ga(n, S));
        }
        var H = e.memoizedState;
        if (H !== null && (S = H.dehydrated, S !== null)) {
          if (f) n.flags & 256 ? (Ae(n), n.flags &= -257, n = Oa(e, n, r)) : n.memoizedState !== null ? (Ie(), n.child = e.child, n.flags |= 128, n = null) : (Ie(), S = o.fallback, u = n.mode, o = fs({
            mode: "visible",
            children: o.children
          }, u), S = lo(S, u, r, null), S.flags |= 2, o.return = n, S.return = n, o.sibling = S, n.child = o, go(n, e.child, null, r), o = n.child, o.memoizedState = Da(r), o.childLanes = La(e, b, r), n.memoizedState = _l, n = Bi(null, o));
          else if (Ae(n), ml(S)) b = Gm(S).digest, o = Error(l(419)), o.stack = "", o.digest = b, tt({
            value: o,
            source: null,
            stack: null
          }), n = Oa(e, n, r);
          else if (wn || At(e, n, r, !1), b = (r & e.childLanes) !== 0, wn || b) {
            if (b = sn, b !== null && (o = K(b, r), o !== 0 && o !== H.retryLane)) throw H.retryLane = o, _e(e, o), dt(b, e, o), xl;
            hl(S) || As(), n = Oa(e, n, r);
          } else hl(S) ? (n.flags |= 192, n.child = e.child, n = null) : (e = H.treeContext, qn && (mn = Jm(S), jn = n, Xe = !0, Ur = null, _t = !1, e !== null && Fe(n, e)), n = Ga(n, o.children), n.flags |= 4096);
          return n;
        }
        return u ? (Ie(), S = o.fallback, u = n.mode, H = e.child, f = H.sibling, o = Cr(H, {
          mode: "hidden",
          children: o.children
        }), o.subtreeFlags = H.subtreeFlags & 65011712, f !== null ? S = Cr(f, S) : (S = lo(S, u, r, null), S.flags |= 2), S.return = n, o.return = n, o.sibling = S, n.child = o, Bi(null, o), o = n.child, S = e.child.memoizedState, S === null ? S = Da(r) : (u = S.cachePool, u !== null ? (H = Er ? gn._currentValue : gn._currentValue2, u = u.parent !== H ? {
          parent: H,
          pool: H
        } : u) : u = Ai(), S = {
          baseLanes: S.baseLanes | r,
          cachePool: u
        }), o.memoizedState = S, o.childLanes = La(e, b, r), n.memoizedState = _l, Bi(e.child, o)) : (Ae(n), r = e.child, e = r.sibling, r = Cr(r, {
          mode: "visible",
          children: o.children
        }), r.return = n, r.sibling = null, e !== null && (b = n.deletions, b === null ? (n.deletions = [e], n.flags |= 16) : b.push(e)), n.child = r, n.memoizedState = null, r);
      }
      function Ga(e, n) {
        return n = fs({
          mode: "visible",
          children: n
        }, e.mode), n.return = e, e.child = n;
      }
      function fs(e, n) {
        return e = i(22, e, null, n), e.lanes = 0, e;
      }
      function Oa(e, n, r) {
        return go(n, e.child, null, r), e = Ga(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
      }
      function Kc(e, n, r) {
        e.lanes |= n;
        var o = e.alternate;
        o !== null && (o.lanes |= n), Ht(e.return, n, r);
      }
      function ka(e, n, r, o, u, f) {
        var b = e.memoizedState;
        b === null ? e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: r,
          tailMode: u,
          treeForkCount: f
        } : (b.isBackwards = n, b.rendering = null, b.renderingStartTime = 0, b.last = o, b.tail = r, b.tailMode = u, b.treeForkCount = f);
      }
      function Qc(e, n, r) {
        var o = n.pendingProps, u = o.revealOrder, f = o.tail;
        o = o.children;
        var b = yn.current, S = (b & 2) !== 0;
        if (S ? (b = b & 1 | 2, n.flags |= 128) : b &= 1, E(yn, b), zn(e, n, o, r), o = Xe ? xi : 0, !S && e !== null && (e.flags & 128) !== 0) e: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Kc(e, r, n);
          else if (e.tag === 19) Kc(e, r, n);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n) break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
        switch (u) {
          case "forwards":
            for (r = n.child, u = null; r !== null; ) e = r.alternate, e !== null && qe(e) === null && (u = r), r = r.sibling;
            r = u, r === null ? (u = n.child, n.child = null) : (u = r.sibling, r.sibling = null), ka(n, !1, u, r, f, o);
            break;
          case "backwards":
          case "unstable_legacy-backwards":
            for (r = null, u = n.child, n.child = null; u !== null; ) {
              if (e = u.alternate, e !== null && qe(e) === null) {
                n.child = u;
                break;
              }
              e = u.sibling, u.sibling = r, r = u, u = e;
            }
            ka(n, !0, r, null, f, o);
            break;
          case "together":
            ka(n, !1, null, null, void 0, o);
            break;
          default:
            n.memoizedState = null;
        }
        return n.child;
      }
      function br(e, n, r) {
        if (e !== null && (n.dependencies = e.dependencies), jr |= n.lanes, (r & n.childLanes) === 0) if (e !== null) {
          if (At(e, n, r, !1), (r & n.childLanes) === 0) return null;
        } else return null;
        if (e !== null && n.child !== e.child) throw Error(l(153));
        if (n.child !== null) {
          for (e = n.child, r = Cr(e, e.pendingProps), n.child = r, r.return = n; e.sibling !== null; ) e = e.sibling, r = r.sibling = Cr(e, e.pendingProps), r.return = n;
          r.sibling = null;
        }
        return n.child;
      }
      function Pa(e, n) {
        return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Vt(e)));
      }
      function Ih(e, n, r) {
        switch (n.tag) {
          case 3:
            an(n, n.stateNode.containerInfo), at(n, gn, e.memoizedState.cache), pn();
            break;
          case 27:
          case 5:
            Hn(n);
            break;
          case 4:
            an(n, n.stateNode.containerInfo);
            break;
          case 10:
            at(n, n.type, n.memoizedProps.value);
            break;
          case 31:
            if (n.memoizedState !== null) return n.flags |= 128, ye(n), null;
            break;
          case 13:
            var o = n.memoizedState;
            if (o !== null) return o.dehydrated !== null ? (Ae(n), n.flags |= 128, null) : (r & n.child.childLanes) !== 0 ? jc(e, n, r) : (Ae(n), e = br(e, n, r), e !== null ? e.sibling : null);
            Ae(n);
            break;
          case 19:
            var u = (e.flags & 128) !== 0;
            if (o = (r & n.childLanes) !== 0, o || (At(e, n, r, !1), o = (r & n.childLanes) !== 0), u) {
              if (o) return Qc(e, n, r);
              n.flags |= 128;
            }
            if (u = n.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), E(yn, yn.current), o) break;
            return null;
          case 22:
            return n.lanes = 0, Pc(e, n, r, n.pendingProps);
          case 24:
            at(n, gn, e.memoizedState.cache);
        }
        return br(e, n, r);
      }
      function Xc(e, n, r) {
        if (e !== null)
          if (e.memoizedProps !== n.pendingProps) wn = !0;
          else {
            if (!Pa(e, r) && (n.flags & 128) === 0) return wn = !1, Ih(e, n, r);
            wn = (e.flags & 131072) !== 0;
          }
        else wn = !1, Xe && (n.flags & 1048576) !== 0 && Be(n, xi, n.index);
        switch (n.lanes = 0, n.tag) {
          case 16:
            e: {
              var o = n.pendingProps;
              if (e = ot(n.elementType), n.type = e, typeof e == "function") nl(e) ? (o = io(e, o), n.tag = 1, n = zc(null, n, e, o, r)) : (n.tag = 0, n = _a(null, n, e, o, r));
              else {
                if (e != null) {
                  var u = e.$$typeof;
                  if (u === al) {
                    n.tag = 11, n = Gc(null, n, e, o, r);
                    break e;
                  } else if (u === cl) {
                    n.tag = 14, n = Oc(null, n, e, o, r);
                    break e;
                  }
                }
                throw n = A(e) || e, Error(l(306, n, ""));
              }
            }
            return n;
          case 0:
            return _a(e, n, n.type, n.pendingProps, r);
          case 1:
            return o = n.type, u = io(o, n.pendingProps), zc(e, n, o, u, r);
          case 3:
            e: {
              if (an(n, n.stateNode.containerInfo), e === null) throw Error(l(387));
              var f = n.pendingProps;
              u = n.memoizedState, o = u.element, y(e, n), Y(n, f, null, r);
              var b = n.memoizedState;
              if (f = b.cache, at(n, gn, f), f !== u.cache && Ft(n, [gn], r, !0), V(), f = b.element, qn && u.isDehydrated)
                if (u = {
                  element: f,
                  isDehydrated: !1,
                  cache: b.cache
                }, n.updateQueue.baseState = u, n.memoizedState = u, n.flags & 256) {
                  n = Jc(e, n, f, r);
                  break e;
                } else if (f !== o) {
                  o = fe(Error(l(424)), n), tt(o), n = Jc(e, n, f, r);
                  break e;
                } else for (qn && (mn = Um(n.stateNode.containerInfo), jn = n, Xe = !0, Ur = null, _t = !0), r = yd(n, null, f, r), n.child = r; r; ) r.flags = r.flags & -3 | 4096, r = r.sibling;
              else {
                if (pn(), f === o) {
                  n = br(e, n, r);
                  break e;
                }
                zn(e, n, f, r);
              }
              n = n.child;
            }
            return n;
          case 26:
            if (Qt) return cs(e, n), e === null ? (r = ad(n.type, null, n.pendingProps, null)) ? n.memoizedState = r : Xe || (n.stateNode = hg(n.type, n.pendingProps, Nr.current, n)) : n.memoizedState = ad(n.type, e.memoizedProps, n.pendingProps, e.memoizedState), null;
          case 27:
            if (Dn) return Hn(n), e === null && Dn && Xe && (o = n.stateNode = pd(n.type, n.pendingProps, Nr.current, Jn.current, !1), jn = n, _t = !0, mn = jm(n.type, o, mn)), zn(e, n, n.pendingProps.children, r), cs(e, n), e === null && (n.flags |= 4194304), n.child;
          case 5:
            return e === null && Xe && (fg(n.type, n.pendingProps, Jn.current), (u = o = mn) && (o = Km(o, n.type, n.pendingProps, _t), o !== null ? (n.stateNode = o, jn = n, mn = Nm(o), _t = !1, u = !0) : u = !1), u || Yn(n)), Hn(n), u = n.type, f = n.pendingProps, b = e !== null ? e.memoizedProps : null, o = f.children, Cs(u, f) ? o = null : b !== null && Cs(u, b) && (n.flags |= 32), n.memoizedState !== null && (u = $e(e, n, Sn, null, null, r), Er ? co._currentValue = u : co._currentValue2 = u), cs(e, n), zn(e, n, o, r), n.child;
          case 6:
            return e === null && Xe && (dg(n.pendingProps, Jn.current), (e = r = mn) && (r = Qm(r, n.pendingProps, _t), r !== null ? (n.stateNode = r, jn = n, mn = null, e = !0) : e = !1), e || Yn(n)), null;
          case 13:
            return jc(e, n, r);
          case 4:
            return an(n, n.stateNode.containerInfo), o = n.pendingProps, e === null ? n.child = go(n, null, o, r) : zn(e, n, o, r), n.child;
          case 11:
            return Gc(e, n, n.type, n.pendingProps, r);
          case 7:
            return zn(e, n, n.pendingProps, r), n.child;
          case 8:
            return zn(e, n, n.pendingProps.children, r), n.child;
          case 12:
            return zn(e, n, n.pendingProps.children, r), n.child;
          case 10:
            return o = n.pendingProps, at(n, n.type, o.value), zn(e, n, o.children, r), n.child;
          case 9:
            return u = n.type._context, o = n.pendingProps.children, lt(n), u = ln(u), o = o(u), n.flags |= 1, zn(e, n, o, r), n.child;
          case 14:
            return Oc(e, n, n.type, n.pendingProps, r);
          case 15:
            return kc(e, n, n.type, n.pendingProps, r);
          case 19:
            return Qc(e, n, r);
          case 31:
            return wh(e, n, r);
          case 22:
            return Pc(e, n, r, n.pendingProps);
          case 24:
            return lt(n), o = ln(gn), e === null ? (u = xn(), u === null && (u = sn, f = hr(), u.pooledCache = f, f.refCount++, f !== null && (u.pooledCacheLanes |= r), u = f), n.memoizedState = {
              parent: o,
              cache: u
            }, m(n), at(n, gn, u)) : ((e.lanes & r) !== 0 && (y(e, n), Y(n, null, null, r), V()), u = e.memoizedState, f = n.memoizedState, u.parent !== o ? (u = {
              parent: o,
              cache: o
            }, n.memoizedState = u, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = u), at(n, gn, o)) : (o = f.cache, at(n, gn, o), o !== u.cache && Ft(n, [gn], r, !0))), zn(e, n, n.pendingProps.children, r), n.child;
          case 29:
            throw n.pendingProps;
        }
        throw Error(l(156, n.tag));
      }
      function Jt(e) {
        e.flags |= 4;
      }
      function ds(e) {
        ir && (e.flags |= 8);
      }
      function Yc(e, n) {
        if (e !== null && e.child === n.child) return !1;
        if ((n.flags & 16) !== 0) return !0;
        for (e = n.child; e !== null; ) {
          if ((e.flags & 8218) !== 0 || (e.subtreeFlags & 8218) !== 0) return !0;
          e = e.sibling;
        }
        return !1;
      }
      function Ha(e, n, r, o) {
        if (Vn) for (r = n.child; r !== null; ) {
          if (r.tag === 5 || r.tag === 6) dl(e, r.stateNode);
          else if (!(r.tag === 4 || Dn && r.tag === 27) && r.child !== null) {
            r.child.return = r, r = r.child;
            continue;
          }
          if (r === n) break;
          for (; r.sibling === null; ) {
            if (r.return === null || r.return === n) return;
            r = r.return;
          }
          r.sibling.return = r.return, r = r.sibling;
        }
        else if (ir) for (var u = n.child; u !== null; ) {
          if (u.tag === 5) {
            var f = u.stateNode;
            r && o && (f = td(f, u.type, u.memoizedProps)), dl(e, f);
          } else if (u.tag === 6) f = u.stateNode, r && o && (f = rd(f, u.memoizedProps)), dl(e, f);
          else if (u.tag !== 4) {
            if (u.tag === 22 && u.memoizedState !== null) f = u.child, f !== null && (f.return = u), Ha(e, u, !0, !0);
            else if (u.child !== null) {
              u.child.return = u, u = u.child;
              continue;
            }
          }
          if (u === n) break;
          for (; u.sibling === null; ) {
            if (u.return === null || u.return === n) return;
            u = u.return;
          }
          u.sibling.return = u.return, u = u.sibling;
        }
      }
      function Wc(e, n, r, o) {
        var u = !1;
        if (ir) for (var f = n.child; f !== null; ) {
          if (f.tag === 5) {
            var b = f.stateNode;
            r && o && (b = td(b, f.type, f.memoizedProps)), ed(e, b);
          } else if (f.tag === 6) b = f.stateNode, r && o && (b = rd(b, f.memoizedProps)), ed(e, b);
          else if (f.tag !== 4) {
            if (f.tag === 22 && f.memoizedState !== null) u = f.child, u !== null && (u.return = f), Wc(e, f, !0, !0), u = !0;
            else if (f.child !== null) {
              f.child.return = f, f = f.child;
              continue;
            }
          }
          if (f === n) break;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === n) return u;
            f = f.return;
          }
          f.sibling.return = f.return, f = f.sibling;
        }
        return u;
      }
      function Zc(e, n) {
        if (ir && Yc(e, n)) {
          e = n.stateNode;
          var r = e.containerInfo, o = $f();
          Wc(o, n, !1, !1), e.pendingChildren = o, Jt(n), Lm(r, o);
        }
      }
      function Na(e, n, r, o) {
        if (Vn) e.memoizedProps !== o && Jt(n);
        else if (ir) {
          var u = e.stateNode, f = e.memoizedProps;
          if ((e = Yc(e, n)) || f !== o) {
            var b = Jn.current;
            f = Dm(u, r, f, o, !e, null), f === u ? n.stateNode = u : (ds(n), Yf(f, r, o, b) && Jt(n), n.stateNode = f, e && Ha(f, n, !1, !1));
          } else n.stateNode = u;
        }
      }
      function Ua(e, n, r, o, u) {
        if ((e.mode & 32) !== 0 && (r === null ? sm(n, o) : am(n, r, o))) {
          if (e.flags |= 16777216, (u & 335544128) === u || pl(n, o)) if (Zf(e.stateNode, n, o)) e.flags |= 8192;
          else if (Ef()) e.flags |= 8192;
          else throw mo = Ds, wl;
        } else e.flags &= -16777217;
      }
      function Vc(e, n) {
        if (gg(n)) {
          if (e.flags |= 16777216, !dd(n)) if (Ef()) e.flags |= 8192;
          else throw mo = Ds, wl;
        } else e.flags &= -16777217;
      }
      function ps(e, n) {
        n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? P() : 536870912, e.lanes |= n, ni |= n);
      }
      function yi(e, n) {
        if (!Xe) switch (e.tailMode) {
          case "hidden":
            n = e.tail;
            for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? e.tail = null : r.sibling = null;
            break;
          case "collapsed":
            r = e.tail;
            for (var o = null; r !== null; ) r.alternate !== null && (o = r), r = r.sibling;
            o === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null;
        }
      }
      function cn(e) {
        var n = e.alternate !== null && e.alternate.child === e.child, r = 0, o = 0;
        if (n) for (var u = e.child; u !== null; ) r |= u.lanes | u.childLanes, o |= u.subtreeFlags & 65011712, o |= u.flags & 65011712, u.return = e, u = u.sibling;
        else for (u = e.child; u !== null; ) r |= u.lanes | u.childLanes, o |= u.subtreeFlags, o |= u.flags, u.return = e, u = u.sibling;
        return e.subtreeFlags |= o, e.childLanes = r, n;
      }
      function Th(e, n, r) {
        var o = n.pendingProps;
        switch (Ce(n), n.tag) {
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return cn(n), null;
          case 1:
            return cn(n), null;
          case 3:
            return r = n.stateNode, o = null, e !== null && (o = e.memoizedState.cache), n.memoizedState.cache !== o && (n.flags |= 2048), vn(gn), xe(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Rn(n) ? Jt(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, nt())), Zc(e, n), cn(n), null;
          case 26:
            if (Qt) {
              var u = n.type, f = n.memoizedState;
              return e === null ? (Jt(n), f !== null ? (cn(n), Vc(n, f)) : (cn(n), Ua(n, u, null, o, r))) : f ? f !== e.memoizedState ? (Jt(n), cn(n), Vc(n, f)) : (cn(n), n.flags &= -16777217) : (f = e.memoizedProps, Vn ? f !== o && Jt(n) : Na(e, n, u, o), cn(n), Ua(n, u, f, o, r)), null;
            }
          case 27:
            if (Dn) {
              if (dn(n), r = Nr.current, u = n.type, e !== null && n.stateNode != null) Vn ? e.memoizedProps !== o && Jt(n) : Na(e, n, u, o);
              else {
                if (!o) {
                  if (n.stateNode === null) throw Error(l(166));
                  return cn(n), null;
                }
                e = Jn.current, Rn(n) ? Cn(n, e) : (e = pd(u, o, r, e, !0), n.stateNode = e, Jt(n));
              }
              return cn(n), null;
            }
          case 5:
            if (dn(n), u = n.type, e !== null && n.stateNode != null) Na(e, n, u, o);
            else {
              if (!o) {
                if (n.stateNode === null) throw Error(l(166));
                return cn(n), null;
              }
              if (f = Jn.current, Rn(n)) Cn(n, f), ig(n.stateNode, u, o, f) && (n.flags |= 64);
              else {
                var b = qh(u, o, Nr.current, f, n);
                ds(n), Ha(b, n, !1, !1), n.stateNode = b, Yf(b, u, o, f) && Jt(n);
              }
            }
            return cn(n), Ua(n, n.type, e === null ? null : e.memoizedProps, n.pendingProps, r), null;
          case 6:
            if (e && n.stateNode != null) r = e.memoizedProps, Vn ? r !== o && Jt(n) : ir && (r !== o ? (e = Nr.current, r = Jn.current, ds(n), n.stateNode = Wf(o, e, r, n)) : n.stateNode = e.stateNode);
            else {
              if (typeof o != "string" && n.stateNode === null) throw Error(l(166));
              if (e = Nr.current, r = Jn.current, Rn(n)) {
                if (!qn) throw Error(l(176));
                if (e = n.stateNode, r = n.memoizedProps, o = null, u = jn, u !== null) switch (u.tag) {
                  case 27:
                  case 5:
                    o = u.memoizedProps;
                }
                Zm(e, r, n, o) || Yn(n, !0);
              } else ds(n), n.stateNode = Wf(o, e, r, n);
            }
            return cn(n), null;
          case 31:
            if (r = n.memoizedState, e === null || e.memoizedState !== null) {
              if (o = Rn(n), r !== null) {
                if (e === null) {
                  if (!o) throw Error(l(318));
                  if (!qn) throw Error(l(556));
                  if (e = n.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(557));
                  Vm(e, n);
                } else pn(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
                cn(n), e = !1;
              } else r = nt(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = r), e = !0;
              if (!e) return n.flags & 256 ? (ke(n), n) : (ke(n), null);
              if ((n.flags & 128) !== 0) throw Error(l(558));
            }
            return cn(n), null;
          case 13:
            if (o = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
              if (u = Rn(n), o !== null && o.dehydrated !== null) {
                if (e === null) {
                  if (!u) throw Error(l(318));
                  if (!qn) throw Error(l(344));
                  if (u = n.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(l(317));
                  qm(u, n);
                } else pn(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
                cn(n), u = !1;
              } else u = nt(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u), u = !0;
              if (!u) return n.flags & 256 ? (ke(n), n) : (ke(n), null);
            }
            return ke(n), (n.flags & 128) !== 0 ? (n.lanes = r, n) : (r = o !== null, e = e !== null && e.memoizedState !== null, r && (o = n.child, u = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (u = o.alternate.memoizedState.cachePool.pool), f = null, o.memoizedState !== null && o.memoizedState.cachePool !== null && (f = o.memoizedState.cachePool.pool), f !== u && (o.flags |= 2048)), r !== e && r && (n.child.flags |= 8192), ps(n, n.updateQueue), cn(n), null);
          case 4:
            return xe(), Zc(e, n), e === null && tm(n.stateNode.containerInfo), cn(n), null;
          case 10:
            return vn(n.type), cn(n), null;
          case 19:
            if (C(yn), o = n.memoizedState, o === null) return cn(n), null;
            if (u = (n.flags & 128) !== 0, f = o.rendering, f === null)
              if (u) yi(o, !1);
              else {
                if (bn !== 0 || e !== null && (e.flags & 128) !== 0) for (e = n.child; e !== null; ) {
                  if (f = qe(e), f !== null) {
                    for (n.flags |= 128, yi(o, !1), e = f.updateQueue, n.updateQueue = e, ps(n, e), n.subtreeFlags = 0, e = r, r = n.child; r !== null; ) kf(r, e), r = r.sibling;
                    return E(yn, yn.current & 1 | 2), Xe && ce(n, o.treeForkCount), n.child;
                  }
                  e = e.sibling;
                }
                o.tail !== null && pt() > Hi && (n.flags |= 128, u = !0, yi(o, !1), n.lanes = 4194304);
              }
            else {
              if (!u) if (e = qe(f), e !== null) {
                if (n.flags |= 128, u = !0, e = e.updateQueue, n.updateQueue = e, ps(n, e), yi(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !Xe) return cn(n), null;
              } else 2 * pt() - o.renderingStartTime > Hi && r !== 536870912 && (n.flags |= 128, u = !0, yi(o, !1), n.lanes = 4194304);
              o.isBackwards ? (f.sibling = n.child, n.child = f) : (e = o.last, e !== null ? e.sibling = f : n.child = f, o.last = f);
            }
            return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = pt(), e.sibling = null, r = yn.current, E(yn, u ? r & 1 | 2 : r & 1), Xe && ce(n, o.treeForkCount), e) : (cn(n), null);
          case 22:
          case 23:
            return ke(n), on(), o = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (n.flags |= 8192) : o && (n.flags |= 8192), o ? (r & 536870912) !== 0 && (n.flags & 128) === 0 && (cn(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : cn(n), r = n.updateQueue, r !== null && ps(n, r.retryQueue), r = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), o = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (o = n.memoizedState.cachePool.pool), o !== r && (n.flags |= 2048), e !== null && C(ho), null;
          case 24:
            return r = null, e !== null && (r = e.memoizedState.cache), n.memoizedState.cache !== r && (n.flags |= 2048), vn(gn), cn(n), null;
          case 25:
            return null;
          case 30:
            return null;
        }
        throw Error(l(156, n.tag));
      }
      function Fh(e, n) {
        switch (Ce(n), n.tag) {
          case 1:
            return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
          case 3:
            return vn(gn), xe(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
          case 26:
          case 27:
          case 5:
            return dn(n), null;
          case 31:
            if (n.memoizedState !== null) {
              if (ke(n), n.alternate === null) throw Error(l(340));
              pn();
            }
            return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
          case 13:
            if (ke(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
              if (n.alternate === null) throw Error(l(340));
              pn();
            }
            return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
          case 19:
            return C(yn), null;
          case 4:
            return xe(), null;
          case 10:
            return vn(n.type), null;
          case 22:
          case 23:
            return ke(n), on(), e !== null && C(ho), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
          case 24:
            return vn(gn), null;
          case 25:
            return null;
          default:
            return null;
        }
      }
      function qc(e, n) {
        switch (Ce(n), n.tag) {
          case 3:
            vn(gn), xe();
            break;
          case 26:
          case 27:
          case 5:
            dn(n);
            break;
          case 4:
            xe();
            break;
          case 31:
            n.memoizedState !== null && ke(n);
            break;
          case 13:
            ke(n);
            break;
          case 19:
            C(yn);
            break;
          case 10:
            vn(n.type);
            break;
          case 22:
          case 23:
            ke(n), on(), e !== null && C(ho);
            break;
          case 24:
            vn(gn);
        }
      }
      function Ci(e, n) {
        try {
          var r = n.updateQueue, o = r !== null ? r.lastEffect : null;
          if (o !== null) {
            var u = o.next;
            r = u;
            do {
              if ((r.tag & e) === e) {
                o = void 0;
                var f = r.create, b = r.inst;
                o = f(), b.destroy = o;
              }
              r = r.next;
            } while (r !== u);
          }
        } catch (S) {
          We(n, n.return, S);
        }
      }
      function Gr(e, n, r) {
        try {
          var o = n.updateQueue, u = o !== null ? o.lastEffect : null;
          if (u !== null) {
            var f = u.next;
            o = f;
            do {
              if ((o.tag & e) === e) {
                var b = o.inst, S = b.destroy;
                if (S !== void 0) {
                  b.destroy = void 0, u = n;
                  var H = r, X = S;
                  try {
                    X();
                  } catch (ue) {
                    We(u, H, ue);
                  }
                }
              }
              o = o.next;
            } while (o !== f);
          }
        } catch (ue) {
          We(n, n.return, ue);
        }
      }
      function $c(e) {
        var n = e.updateQueue;
        if (n !== null) {
          var r = e.stateNode;
          try {
            oe(n, r);
          } catch (o) {
            We(e, e.return, o);
          }
        }
      }
      function ef(e, n, r) {
        r.props = io(e.type, e.memoizedProps), r.state = e.memoizedState;
        try {
          r.componentWillUnmount();
        } catch (o) {
          We(e, n, o);
        }
      }
      function Ei(e, n) {
        try {
          var r = e.ref;
          if (r !== null) {
            switch (e.tag) {
              case 26:
              case 27:
              case 5:
                var o = Ii(e.stateNode);
                break;
              case 30:
                o = e.stateNode;
                break;
              default:
                o = e.stateNode;
            }
            typeof r == "function" ? e.refCleanup = r(o) : r.current = o;
          }
        } catch (u) {
          We(e, n, u);
        }
      }
      function or(e, n) {
        var r = e.ref, o = e.refCleanup;
        if (r !== null) if (typeof o == "function") try {
          o();
        } catch (u) {
          We(e, n, u);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
        else if (typeof r == "function") try {
          r(null);
        } catch (u) {
          We(e, n, u);
        }
        else r.current = null;
      }
      function nf(e) {
        var n = e.type, r = e.memoizedProps, o = e.stateNode;
        try {
          Cm(o, n, r, e);
        } catch (u) {
          We(e, e.return, u);
        }
      }
      function za(e, n, r) {
        try {
          Em(e.stateNode, e.type, r, n, e);
        } catch (o) {
          We(e, e.return, o);
        }
      }
      function tf(e) {
        return e.tag === 5 || e.tag === 3 || (Qt ? e.tag === 26 : !1) || (Dn ? e.tag === 27 && Ho(e.type) : !1) || e.tag === 4;
      }
      function Ja(e) {
        e: for (; ; ) {
          for (; e.sibling === null; ) {
            if (e.return === null || tf(e.return)) return null;
            e = e.return;
          }
          for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (Dn && e.tag === 27 && Ho(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child;
          }
          if (!(e.flags & 2)) return e.stateNode;
        }
      }
      function ja(e, n, r) {
        var o = e.tag;
        if (o === 5 || o === 6) e = e.stateNode, n ? Mm(r, e, n) : Bm(r, e);
        else if (o !== 4 && (Dn && o === 27 && Ho(e.type) && (r = e.stateNode, n = null), e = e.child, e !== null)) for (ja(e, n, r), e = e.sibling; e !== null; ) ja(e, n, r), e = e.sibling;
      }
      function hs(e, n, r) {
        var o = e.tag;
        if (o === 5 || o === 6) e = e.stateNode, n ? Sm(r, e, n) : bm(r, e);
        else if (o !== 4 && (Dn && o === 27 && Ho(e.type) && (r = e.stateNode), e = e.child, e !== null)) for (hs(e, n, r), e = e.sibling; e !== null; ) hs(e, n, r), e = e.sibling;
      }
      function rf(e, n, r) {
        e = e.containerInfo;
        try {
          nd(e, r);
        } catch (o) {
          We(n, n.return, o);
        }
      }
      function of(e) {
        var n = e.stateNode, r = e.memoizedProps;
        try {
          vg(e.type, r, n, e);
        } catch (o) {
          We(e, e.return, o);
        }
      }
      function Rh(e, n) {
        for (Zh(e.containerInfo), kn = n; kn !== null; ) if (e = kn, n = e.child, (e.subtreeFlags & 1028) !== 0 && n !== null) n.return = e, kn = n;
        else for (; kn !== null; ) {
          e = kn;
          var r = e.alternate;
          switch (n = e.flags, e.tag) {
            case 0:
              if ((n & 4) !== 0 && (n = e.updateQueue, n = n !== null ? n.events : null, n !== null)) for (var o = 0; o < n.length; o++) {
                var u = n[o];
                u.ref.impl = u.nextImpl;
              }
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((n & 1024) !== 0 && r !== null) {
                n = void 0, o = e, u = r.memoizedProps, r = r.memoizedState;
                var f = o.stateNode;
                try {
                  var b = io(o.type, u);
                  n = f.getSnapshotBeforeUpdate(b, r), f.__reactInternalSnapshotBeforeUpdate = n;
                } catch (S) {
                  We(o, o.return, S);
                }
              }
              break;
            case 3:
              (n & 1024) !== 0 && Vn && _m(e.stateNode.containerInfo);
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((n & 1024) !== 0) throw Error(l(163));
          }
          if (n = e.sibling, n !== null) {
            n.return = e.return, kn = n;
            break;
          }
          kn = e.return;
        }
      }
      function sf(e, n, r) {
        var o = r.flags;
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            Br(e, r), o & 4 && Ci(5, r);
            break;
          case 1:
            if (Br(e, r), o & 4) if (e = r.stateNode, n === null) try {
              e.componentDidMount();
            } catch (b) {
              We(r, r.return, b);
            }
            else {
              var u = io(r.type, n.memoizedProps);
              n = n.memoizedState;
              try {
                e.componentDidUpdate(u, n, e.__reactInternalSnapshotBeforeUpdate);
              } catch (b) {
                We(r, r.return, b);
              }
            }
            o & 64 && $c(r), o & 512 && Ei(r, r.return);
            break;
          case 3:
            if (Br(e, r), o & 64 && (o = r.updateQueue, o !== null)) {
              if (e = null, r.child !== null) switch (r.child.tag) {
                case 27:
                case 5:
                  e = Ii(r.child.stateNode);
                  break;
                case 1:
                  e = r.child.stateNode;
              }
              try {
                oe(o, e);
              } catch (b) {
                We(r, r.return, b);
              }
            }
            break;
          case 27:
            Dn && n === null && o & 4 && of(r);
          case 26:
          case 5:
            if (Br(e, r), n === null) {
              if (o & 4) nf(r);
              else if (o & 64) {
                e = r.type, n = r.memoizedProps, u = r.stateNode;
                try {
                  ng(u, e, n, r);
                } catch (b) {
                  We(r, r.return, b);
                }
              }
            }
            o & 512 && Ei(r, r.return);
            break;
          case 12:
            Br(e, r);
            break;
          case 31:
            Br(e, r), o & 4 && lf(e, r);
            break;
          case 13:
            Br(e, r), o & 4 && uf(e, r), o & 64 && (o = r.memoizedState, o !== null && (o = o.dehydrated, o !== null && (r = kh.bind(null, r), Om(o, r))));
            break;
          case 22:
            if (o = r.memoizedState !== null || Ir, !o) {
              n = n !== null && n.memoizedState !== null || In, u = Ir;
              var f = In;
              Ir = o, (In = n) && !f ? yr(e, r, (r.subtreeFlags & 8772) !== 0) : Br(e, r), Ir = u, In = f;
            }
            break;
          case 30:
            break;
          default:
            Br(e, r);
        }
      }
      function af(e) {
        var n = e.alternate;
        n !== null && (e.alternate = null, af(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && im(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
      function jt(e, n, r) {
        for (r = r.child; r !== null; ) Ka(e, n, r), r = r.sibling;
      }
      function Ka(e, n, r) {
        if (St && typeof St.onCommitFiberUnmount == "function") try {
          St.onCommitFiberUnmount(Ri, r);
        } catch {
        }
        switch (r.tag) {
          case 26:
            if (Qt) {
              In || or(r, n), jt(e, n, r), r.memoizedState ? ud(r.memoizedState) : r.stateNode && fd(r.stateNode);
              break;
            }
          case 27:
            if (Dn) {
              In || or(r, n);
              var o = Tn, u = ht;
              Ho(r.type) && (Tn = r.stateNode, ht = !1), jt(e, n, r), hd(r.stateNode), Tn = o, ht = u;
              break;
            }
          case 5:
            In || or(r, n);
          case 6:
            if (Vn) {
              if (o = Tn, u = ht, Tn = null, jt(e, n, r), Tn = o, ht = u, Tn !== null) if (ht) try {
                Im(Tn, r.stateNode);
              } catch (f) {
                We(r, n, f);
              }
              else try {
                wm(Tn, r.stateNode);
              } catch (f) {
                We(r, n, f);
              }
            } else jt(e, n, r);
            break;
          case 18:
            Vn && Tn !== null && (ht ? lg(Tn, r.stateNode) : ag(Tn, r.stateNode));
            break;
          case 4:
            Vn ? (o = Tn, u = ht, Tn = r.stateNode.containerInfo, ht = !0, jt(e, n, r), Tn = o, ht = u) : (ir && rf(r.stateNode, r, $f()), jt(e, n, r));
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            Gr(2, r, n), In || Gr(4, r, n), jt(e, n, r);
            break;
          case 1:
            In || (or(r, n), o = r.stateNode, typeof o.componentWillUnmount == "function" && ef(r, n, o)), jt(e, n, r);
            break;
          case 21:
            jt(e, n, r);
            break;
          case 22:
            In = (o = In) || r.memoizedState !== null, jt(e, n, r), In = o;
            break;
          default:
            jt(e, n, r);
        }
      }
      function lf(e, n) {
        if (qn && n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null))) {
          e = e.dehydrated;
          try {
            rg(e);
          } catch (r) {
            We(n, n.return, r);
          }
        }
      }
      function uf(e, n) {
        if (qn && n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
          og(e);
        } catch (r) {
          We(n, n.return, r);
        }
      }
      function xh(e) {
        switch (e.tag) {
          case 31:
          case 13:
          case 19:
            var n = e.stateNode;
            return n === null && (n = e.stateNode = new Sd()), n;
          case 22:
            return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new Sd()), n;
          default:
            throw Error(l(435, e.tag));
        }
      }
      function ms(e, n) {
        var r = xh(e);
        n.forEach(function(o) {
          if (!r.has(o)) {
            r.add(o);
            var u = Ph.bind(null, e, o);
            o.then(u, u);
          }
        });
      }
      function Zn(e, n) {
        var r = n.deletions;
        if (r !== null) for (var o = 0; o < r.length; o++) {
          var u = r[o], f = e, b = n;
          if (Vn) {
            var S = b;
            e: for (; S !== null; ) {
              switch (S.tag) {
                case 27:
                  if (Dn) {
                    if (Ho(S.type)) {
                      Tn = S.stateNode, ht = !1;
                      break e;
                    }
                    break;
                  }
                case 5:
                  Tn = S.stateNode, ht = !1;
                  break e;
                case 3:
                case 4:
                  Tn = S.stateNode.containerInfo, ht = !0;
                  break e;
              }
              S = S.return;
            }
            if (Tn === null) throw Error(l(160));
            Ka(f, b, u), Tn = null, ht = !1;
          } else Ka(f, b, u);
          f = u.alternate, f !== null && (f.return = null), u.return = null;
        }
        if (n.subtreeFlags & 13886) for (n = n.child; n !== null; ) cf(n, e), n = n.sibling;
      }
      function cf(e, n) {
        var r = e.alternate, o = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Zn(n, e), it(e), o & 4 && (Gr(3, e, e.return), Ci(3, e), Gr(5, e, e.return));
            break;
          case 1:
            Zn(n, e), it(e), o & 512 && (In || r === null || or(r, r.return)), o & 64 && Ir && (e = e.updateQueue, e !== null && (o = e.callbacks, o !== null && (r = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = r === null ? o : r.concat(o))));
            break;
          case 26:
            if (Qt) {
              var u = Yt;
              if (Zn(n, e), it(e), o & 512 && (In || r === null || or(r, r.return)), o & 4) {
                o = r !== null ? r.memoizedState : null;
                var f = e.memoizedState;
                r === null ? f === null ? e.stateNode === null ? e.stateNode = pg(u, e.type, e.memoizedProps, e) : cd(u, e.type, e.stateNode) : e.stateNode = ld(u, f, e.memoizedProps) : o !== f ? (o === null ? r.stateNode !== null && fd(r.stateNode) : ud(o), f === null ? cd(u, e.type, e.stateNode) : ld(u, f, e.memoizedProps)) : f === null && e.stateNode !== null && za(e, e.memoizedProps, r.memoizedProps);
              }
              break;
            }
          case 27:
            if (Dn) {
              Zn(n, e), it(e), o & 512 && (In || r === null || or(r, r.return)), r !== null && o & 4 && za(e, e.memoizedProps, r.memoizedProps);
              break;
            }
          case 5:
            if (Zn(n, e), it(e), o & 512 && (In || r === null || or(r, r.return)), Vn) {
              if (e.flags & 32) {
                u = e.stateNode;
                try {
                  qf(u);
                } catch ($) {
                  We(e, e.return, $);
                }
              }
              o & 4 && e.stateNode != null && (u = e.memoizedProps, za(e, u, r !== null ? r.memoizedProps : u)), o & 1024 && (Dl = !0);
            } else ir && e.alternate !== null && (e.alternate.stateNode = e.stateNode);
            break;
          case 6:
            if (Zn(n, e), it(e), o & 4 && Vn) {
              if (e.stateNode === null) throw Error(l(162));
              o = e.memoizedProps, r = r !== null ? r.memoizedProps : o, u = e.stateNode;
              try {
                ym(u, r, o);
              } catch ($) {
                We(e, e.return, $);
              }
            }
            break;
          case 3:
            if (Qt ? (mg(), u = Yt, Yt = gl(n.containerInfo), Zn(n, e), Yt = u) : Zn(n, e), it(e), o & 4) {
              if (Vn && qn && r !== null && r.memoizedState.isDehydrated) try {
                tg(n.containerInfo);
              } catch ($) {
                We(e, e.return, $);
              }
              if (ir) {
                o = n.containerInfo, r = n.pendingChildren;
                try {
                  nd(o, r);
                } catch ($) {
                  We(e, e.return, $);
                }
              }
            }
            Dl && (Dl = !1, ff(e));
            break;
          case 4:
            Qt ? (r = Yt, Yt = gl(e.stateNode.containerInfo), Zn(n, e), it(e), Yt = r) : (Zn(n, e), it(e)), o & 4 && ir && rf(e.stateNode, e, e.stateNode.pendingChildren);
            break;
          case 12:
            Zn(n, e), it(e);
            break;
          case 31:
            Zn(n, e), it(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, ms(e, o)));
            break;
          case 13:
            Zn(n, e), it(e), e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (zs = pt()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, ms(e, o)));
            break;
          case 22:
            u = e.memoizedState !== null;
            var b = r !== null && r.memoizedState !== null, S = Ir, H = In;
            if (Ir = S || u, In = H || b, Zn(n, e), In = H, Ir = S, it(e), o & 8192 && (n = e.stateNode, n._visibility = u ? n._visibility & -2 : n._visibility | 1, u && (r === null || b || Ir || In || so(e)), Vn)) {
              e: if (r = null, Vn) for (n = e; ; ) {
                if (n.tag === 5 || Qt && n.tag === 26) {
                  if (r === null) {
                    b = r = n;
                    try {
                      f = b.stateNode, u ? Tm(f) : Rm(b.stateNode, b.memoizedProps);
                    } catch ($) {
                      We(b, b.return, $);
                    }
                  }
                } else if (n.tag === 6) {
                  if (r === null) {
                    b = n;
                    try {
                      var X = b.stateNode;
                      u ? Fm(X) : xm(X, b.memoizedProps);
                    } catch ($) {
                      We(b, b.return, $);
                    }
                  }
                } else if (n.tag === 18) {
                  if (r === null) {
                    b = n;
                    try {
                      var ue = b.stateNode;
                      u ? ug(ue) : cg(b.stateNode);
                    } catch ($) {
                      We(b, b.return, $);
                    }
                  }
                } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === e) && n.child !== null) {
                  n.child.return = n, n = n.child;
                  continue;
                }
                if (n === e) break e;
                for (; n.sibling === null; ) {
                  if (n.return === null || n.return === e) break e;
                  r === n && (r = null), n = n.return;
                }
                r === n && (r = null), n.sibling.return = n.return, n = n.sibling;
              }
            }
            o & 4 && (o = e.updateQueue, o !== null && (r = o.retryQueue, r !== null && (o.retryQueue = null, ms(e, r))));
            break;
          case 19:
            Zn(n, e), it(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, ms(e, o)));
            break;
          case 30:
            break;
          case 21:
            break;
          default:
            Zn(n, e), it(e);
        }
      }
      function it(e) {
        var n = e.flags;
        if (n & 2) {
          try {
            for (var r, o = e.return; o !== null; ) {
              if (tf(o)) {
                r = o;
                break;
              }
              o = o.return;
            }
            if (Vn) {
              if (r == null) throw Error(l(160));
              switch (r.tag) {
                case 27:
                  if (Dn) {
                    var u = r.stateNode, f = Ja(e);
                    hs(e, f, u);
                    break;
                  }
                case 5:
                  var b = r.stateNode;
                  r.flags & 32 && (qf(b), r.flags &= -33);
                  var S = Ja(e);
                  hs(e, S, b);
                  break;
                case 3:
                case 4:
                  var H = r.stateNode.containerInfo, X = Ja(e);
                  ja(e, X, H);
                  break;
                default:
                  throw Error(l(161));
              }
            }
          } catch (ue) {
            We(e, e.return, ue);
          }
          e.flags &= -3;
        }
        n & 4096 && (e.flags &= -4097);
      }
      function ff(e) {
        if (e.subtreeFlags & 1024) for (e = e.child; e !== null; ) {
          var n = e;
          ff(n), n.tag === 5 && n.flags & 1024 && cm(n.stateNode), e = e.sibling;
        }
      }
      function Br(e, n) {
        if (n.subtreeFlags & 8772) for (n = n.child; n !== null; ) sf(e, n.alternate, n), n = n.sibling;
      }
      function so(e) {
        for (e = e.child; e !== null; ) {
          var n = e;
          switch (n.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              Gr(4, n, n.return), so(n);
              break;
            case 1:
              or(n, n.return);
              var r = n.stateNode;
              typeof r.componentWillUnmount == "function" && ef(n, n.return, r), so(n);
              break;
            case 27:
              Dn && hd(n.stateNode);
            case 26:
            case 5:
              or(n, n.return), so(n);
              break;
            case 22:
              n.memoizedState === null && so(n);
              break;
            case 30:
              so(n);
              break;
            default:
              so(n);
          }
          e = e.sibling;
        }
      }
      function yr(e, n, r) {
        for (r = r && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
          var o = n.alternate, u = e, f = n, b = f.flags;
          switch (f.tag) {
            case 0:
            case 11:
            case 15:
              yr(u, f, r), Ci(4, f);
              break;
            case 1:
              if (yr(u, f, r), o = f, u = o.stateNode, typeof u.componentDidMount == "function") try {
                u.componentDidMount();
              } catch (X) {
                We(o, o.return, X);
              }
              if (o = f, u = o.updateQueue, u !== null) {
                var S = o.stateNode;
                try {
                  var H = u.shared.hiddenCallbacks;
                  if (H !== null) for (u.shared.hiddenCallbacks = null, u = 0; u < H.length; u++) ie(H[u], S);
                } catch (X) {
                  We(o, o.return, X);
                }
              }
              r && b & 64 && $c(f), Ei(f, f.return);
              break;
            case 27:
              Dn && of(f);
            case 26:
            case 5:
              yr(u, f, r), r && o === null && b & 4 && nf(f), Ei(f, f.return);
              break;
            case 12:
              yr(u, f, r);
              break;
            case 31:
              yr(u, f, r), r && b & 4 && lf(u, f);
              break;
            case 13:
              yr(u, f, r), r && b & 4 && uf(u, f);
              break;
            case 22:
              f.memoizedState === null && yr(u, f, r), Ei(f, f.return);
              break;
            case 30:
              break;
            default:
              yr(u, f, r);
          }
          n = n.sibling;
        }
      }
      function Qa(e, n) {
        var r = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== r && (e != null && e.refCount++, r != null && Gn(r));
      }
      function Xa(e, n) {
        e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && Gn(e));
      }
      function Kt(e, n, r, o) {
        if (n.subtreeFlags & 10256) for (n = n.child; n !== null; ) df(e, n, r, o), n = n.sibling;
      }
      function df(e, n, r, o) {
        var u = n.flags;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Kt(e, n, r, o), u & 2048 && Ci(9, n);
            break;
          case 1:
            Kt(e, n, r, o);
            break;
          case 3:
            Kt(e, n, r, o), u & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && Gn(e)));
            break;
          case 12:
            if (u & 2048) {
              Kt(e, n, r, o), e = n.stateNode;
              try {
                var f = n.memoizedProps, b = f.id, S = f.onPostCommit;
                typeof S == "function" && S(b, n.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
              } catch (H) {
                We(n, n.return, H);
              }
            } else Kt(e, n, r, o);
            break;
          case 31:
            Kt(e, n, r, o);
            break;
          case 13:
            Kt(e, n, r, o);
            break;
          case 23:
            break;
          case 22:
            f = n.stateNode, b = n.alternate, n.memoizedState !== null ? f._visibility & 2 ? Kt(e, n, r, o) : Si(e, n) : f._visibility & 2 ? Kt(e, n, r, o) : (f._visibility |= 2, Do(e, n, r, o, (n.subtreeFlags & 10256) !== 0 || !1)), u & 2048 && Qa(b, n);
            break;
          case 24:
            Kt(e, n, r, o), u & 2048 && Xa(n.alternate, n);
            break;
          default:
            Kt(e, n, r, o);
        }
      }
      function Do(e, n, r, o, u) {
        for (u = u && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
          var f = e, b = n, S = r, H = o, X = b.flags;
          switch (b.tag) {
            case 0:
            case 11:
            case 15:
              Do(f, b, S, H, u), Ci(8, b);
              break;
            case 23:
              break;
            case 22:
              var ue = b.stateNode;
              b.memoizedState !== null ? ue._visibility & 2 ? Do(f, b, S, H, u) : Si(f, b) : (ue._visibility |= 2, Do(f, b, S, H, u)), u && X & 2048 && Qa(b.alternate, b);
              break;
            case 24:
              Do(f, b, S, H, u), u && X & 2048 && Xa(b.alternate, b);
              break;
            default:
              Do(f, b, S, H, u);
          }
          n = n.sibling;
        }
      }
      function Si(e, n) {
        if (n.subtreeFlags & 10256) for (n = n.child; n !== null; ) {
          var r = e, o = n, u = o.flags;
          switch (o.tag) {
            case 22:
              Si(r, o), u & 2048 && Qa(o.alternate, o);
              break;
            case 24:
              Si(r, o), u & 2048 && Xa(o.alternate, o);
              break;
            default:
              Si(r, o);
          }
          n = n.sibling;
        }
      }
      function ao(e, n, r) {
        if (e.subtreeFlags & $o) for (e = e.child; e !== null; ) pf(e, n, r), e = e.sibling;
      }
      function pf(e, n, r) {
        switch (e.tag) {
          case 26:
            if (ao(e, n, r), e.flags & $o) if (e.memoizedState !== null) Ag(r, Yt, e.memoizedState, e.memoizedProps);
            else {
              var o = e.stateNode, u = e.type;
              e = e.memoizedProps, ((n & 335544128) === n || pl(u, e)) && Vf(r, o, u, e);
            }
            break;
          case 5:
            ao(e, n, r), e.flags & $o && (o = e.stateNode, u = e.type, e = e.memoizedProps, ((n & 335544128) === n || pl(u, e)) && Vf(r, o, u, e));
            break;
          case 3:
          case 4:
            Qt ? (o = Yt, Yt = gl(e.stateNode.containerInfo), ao(e, n, r), Yt = o) : ao(e, n, r);
            break;
          case 22:
            e.memoizedState === null && (o = e.alternate, o !== null && o.memoizedState !== null ? (o = $o, $o = 16777216, ao(e, n, r), $o = o) : ao(e, n, r));
            break;
          default:
            ao(e, n, r);
        }
      }
      function hf(e) {
        var n = e.alternate;
        if (n !== null && (e = n.child, e !== null)) {
          n.child = null;
          do
            n = e.sibling, e.sibling = null, e = n;
          while (e !== null);
        }
      }
      function Mi(e) {
        var n = e.deletions;
        if ((e.flags & 16) !== 0) {
          if (n !== null) for (var r = 0; r < n.length; r++) {
            var o = n[r];
            kn = o, gf(o, e);
          }
          hf(e);
        }
        if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) mf(e), e = e.sibling;
      }
      function mf(e) {
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            Mi(e), e.flags & 2048 && Gr(9, e, e.return);
            break;
          case 3:
            Mi(e);
            break;
          case 12:
            Mi(e);
            break;
          case 22:
            var n = e.stateNode;
            e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, gs(e)) : Mi(e);
            break;
          default:
            Mi(e);
        }
      }
      function gs(e) {
        var n = e.deletions;
        if ((e.flags & 16) !== 0) {
          if (n !== null) for (var r = 0; r < n.length; r++) {
            var o = n[r];
            kn = o, gf(o, e);
          }
          hf(e);
        }
        for (e = e.child; e !== null; ) {
          switch (n = e, n.tag) {
            case 0:
            case 11:
            case 15:
              Gr(8, n, n.return), gs(n);
              break;
            case 22:
              r = n.stateNode, r._visibility & 2 && (r._visibility &= -3, gs(n));
              break;
            default:
              gs(n);
          }
          e = e.sibling;
        }
      }
      function gf(e, n) {
        for (; kn !== null; ) {
          var r = kn;
          switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Gr(8, r, n);
              break;
            case 23:
            case 22:
              if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
                var o = r.memoizedState.cachePool.pool;
                o != null && o.refCount++;
              }
              break;
            case 24:
              Gn(r.memoizedState.cache);
          }
          if (o = r.child, o !== null) o.return = r, kn = o;
          else e: for (r = e; kn !== null; ) {
            o = kn;
            var u = o.sibling, f = o.return;
            if (af(o), o === r) {
              kn = null;
              break e;
            }
            if (u !== null) {
              u.return = f, kn = u;
              break e;
            }
            kn = f;
          }
        }
      }
      function Ya(e) {
        var n = nm(e);
        if (n != null) {
          if (typeof n.memoizedProps["data-testname"] != "string") throw Error(l(364));
          return n;
        }
        if (e = pm(e), e === null) throw Error(l(362));
        return e.stateNode.current;
      }
      function Wa(e, n) {
        var r = e.tag;
        switch (n.$$typeof) {
          case ks:
            if (e.type === n.value) return !0;
            break;
          case Ps:
            e: {
              for (n = n.value, e = [e, 0], r = 0; r < e.length; ) {
                var o = e[r++], u = o.tag, f = e[r++], b = n[f];
                if (u !== 5 && u !== 26 && u !== 27 || !Fi(o)) {
                  for (; b != null && Wa(o, b); ) f++, b = n[f];
                  if (f === n.length) {
                    n = !0;
                    break e;
                  } else for (o = o.child; o !== null; ) e.push(o, f), o = o.sibling;
                }
              }
              n = !1;
            }
            return n;
          case Hs:
            if ((r === 5 || r === 26 || r === 27) && gm(e.stateNode, n.value)) return !0;
            break;
          case Us:
            if ((r === 5 || r === 6 || r === 26 || r === 27) && (e = mm(e), e !== null && 0 <= e.indexOf(n.value))) return !0;
            break;
          case Ns:
            if ((r === 5 || r === 26 || r === 27) && (e = e.memoizedProps["data-testname"], typeof e == "string" && e.toLowerCase() === n.value.toLowerCase())) return !0;
            break;
          default:
            throw Error(l(365));
        }
        return !1;
      }
      function Za(e) {
        switch (e.$$typeof) {
          case ks:
            return "<" + (A(e.value) || "Unknown") + ">";
          case Ps:
            return ":has(" + (Za(e) || "") + ")";
          case Hs:
            return '[role="' + e.value + '"]';
          case Us:
            return '"' + e.value + '"';
          case Ns:
            return '[data-testname="' + e.value + '"]';
          default:
            throw Error(l(365));
        }
      }
      function Af(e, n) {
        var r = [];
        e = [e, 0];
        for (var o = 0; o < e.length; ) {
          var u = e[o++], f = u.tag, b = e[o++], S = n[b];
          if (f !== 5 && f !== 26 && f !== 27 || !Fi(u)) {
            for (; S != null && Wa(u, S); ) b++, S = n[b];
            if (b === n.length) r.push(u);
            else for (u = u.child; u !== null; ) e.push(u, b), u = u.sibling;
          }
        }
        return r;
      }
      function Va(e, n) {
        if (!Ti) throw Error(l(363));
        e = Ya(e), e = Af(e, n), n = [], e = Array.from(e);
        for (var r = 0; r < e.length; ) {
          var o = e[r++], u = o.tag;
          if (u === 5 || u === 26 || u === 27) Fi(o) || n.push(o.stateNode);
          else for (o = o.child; o !== null; ) e.push(o), o = o.sibling;
        }
        return n;
      }
      function yt() {
        return (Ne & 2) !== 0 && je !== 0 ? je & -je : Se.T !== null ? Z() : rm();
      }
      function vf() {
        if (Tt === 0) if ((je & 536870912) === 0 || Xe) {
          var e = Ss;
          Ss <<= 1, (Ss & 3932160) === 0 && (Ss = 262144), Tt = e;
        } else Tt = 536870912;
        return e = wt.current, e !== null && (e.flags |= 32), Tt;
      }
      function dt(e, n, r) {
        (e === sn && (nn === 2 || nn === 9) || e.cancelPendingCommit !== null) && (Lo(e, 0), Or(e, je, Tt, !1)), R(e, r), ((Ne & 2) === 0 || e !== sn) && (e === sn && ((Ne & 2) === 0 && (vo |= r), bn === 4 && Or(e, je, Tt, !1)), Nn(e));
      }
      function bf(e, n, r) {
        if ((Ne & 6) !== 0) throw Error(l(327));
        var o = !r && (n & 127) === 0 && (n & e.expiredLanes) === 0 || F(e, n), u = o ? Lh(e, n) : $a(e, n, !0), f = o;
        do {
          if (u === 0) {
            ei && !o && Or(e, n, 0, !1);
            break;
          } else {
            if (r = e.current.alternate, f && !_h(r)) {
              u = $a(e, n, !1), f = !1;
              continue;
            }
            if (u === 2) {
              if (f = n, e.errorRecoveryDisabledLanes & f) var b = 0;
              else b = e.pendingLanes & -536870913, b = b !== 0 ? b : b & 536870912 ? 536870912 : 0;
              if (b !== 0) {
                n = b;
                e: {
                  var S = e;
                  u = Pi;
                  var H = qn && S.current.memoizedState.isDehydrated;
                  if (H && (Lo(S, b).flags |= 256), b = $a(S, b, !1), b !== 2) {
                    if (Ll && !H) {
                      S.errorRecoveryDisabledLanes |= f, vo |= f, u = 4;
                      break e;
                    }
                    f = mt, mt = u, f !== null && (mt === null ? mt = f : mt.push.apply(mt, f));
                  }
                  u = b;
                }
                if (f = !1, u !== 2) continue;
              }
            }
            if (u === 1) {
              Lo(e, 0), Or(e, n, 0, !0);
              break;
            }
            e: {
              switch (o = e, f = u, f) {
                case 0:
                case 1:
                  throw Error(l(345));
                case 4:
                  if ((n & 4194048) !== n) break;
                case 6:
                  Or(o, n, Tt, !Jr);
                  break e;
                case 2:
                  mt = null;
                  break;
                case 3:
                case 5:
                  break;
                default:
                  throw Error(l(329));
              }
              if ((n & 62914560) === n && (u = zs + 300 - pt(), 10 < u)) {
                if (Or(o, n, Tt, !Jr), I(o, 0, !0) !== 0) break e;
                Fr = n, o.timeoutHandle = $h(Bf.bind(null, o, r, mt, Js, Ol, n, Tt, vo, ni, Jr, f, "Throttled", -0, 0), u);
                break e;
              }
              Bf(o, r, mt, Js, Ol, n, Tt, vo, ni, Jr, f, null, -0, 0);
            }
          }
          break;
        } while (!0);
        Nn(e);
      }
      function Bf(e, n, r, o, u, f, b, S, H, X, ue, $, me, Le) {
        if (e.timeoutHandle = uo, $ = n.subtreeFlags, $ & 8192 || ($ & 16785408) === 16785408) {
          $ = lm(), pf(n, f, $);
          var Fn = (f & 62914560) === f ? zs - pt() : (f & 4194048) === f ? Md - pt() : 0;
          if (Fn = um($, Fn), Fn !== null) {
            Fr = f, e.cancelPendingCommit = Fn(Ff.bind(null, e, n, f, r, o, u, b, S, H, ue, $, null, me, Le)), Or(e, f, b, !X);
            return;
          }
        }
        Ff(e, n, f, r, o, u, b, S, H);
      }
      function _h(e) {
        for (var n = e; ; ) {
          var r = n.tag;
          if ((r === 0 || r === 11 || r === 15) && n.flags & 16384 && (r = n.updateQueue, r !== null && (r = r.stores, r !== null))) for (var o = 0; o < r.length; o++) {
            var u = r[o], f = u.getSnapshot;
            u = u.value;
            try {
              if (!Mt(f(), u)) return !1;
            } catch {
              return !1;
            }
          }
          if (r = n.child, n.subtreeFlags & 16384 && r !== null) r.return = n, n = r;
          else {
            if (n === e) break;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === e) return !0;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
        }
        return !0;
      }
      function Or(e, n, r, o) {
        n &= ~Gl, n &= ~vo, e.suspendedLanes |= n, e.pingedLanes &= ~n, o && (e.warmLanes |= n), o = e.expirationTimes;
        for (var u = n; 0 < u; ) {
          var f = 31 - Et(u), b = 1 << f;
          o[f] = -1, u &= ~b;
        }
        r !== 0 && J(e, r, n);
      }
      function yf() {
        return (Ne & 6) === 0 ? ($t(0), !1) : !0;
      }
      function qa() {
        if (Ue !== null) {
          if (nn === 0) var e = Ue.return;
          else e = Ue, Mr = fo = null, Wn(e), Yo = null, Li = 0, e = Ue;
          for (; e !== null; ) qc(e.alternate, e), e = e.return;
          Ue = null;
        }
      }
      function Lo(e, n) {
        var r = e.timeoutHandle;
        r !== uo && (e.timeoutHandle = uo, em(r)), r = e.cancelPendingCommit, r !== null && (e.cancelPendingCommit = null, r()), Fr = 0, qa(), sn = e, Ue = r = Cr(e.current, null), je = n, nn = 0, It = null, Jr = !1, ei = F(e, n), Ll = !1, ni = Tt = Gl = vo = jr = bn = 0, mt = Pi = null, Ol = !1, (n & 8) !== 0 && (n |= n & 32);
        var o = e.entangledLanes;
        if (o !== 0) for (e = e.entanglements, o &= n; 0 < o; ) {
          var u = 31 - Et(o), f = 1 << u;
          n |= e[u], o &= ~f;
        }
        return Tr = n, Ro(), r;
      }
      function Cf(e, n) {
        Oe = null, Se.H = Oi, n === Xo || n === _s ? (n = nr(), nn = 3) : n === wl ? (n = nr(), nn = 4) : nn = n === xl ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, It = n, Ue === null && (bn = 1, ls(e, fe(n, e.current)));
      }
      function Ef() {
        var e = wt.current;
        return e === null ? !0 : (je & 4194048) === je ? Xt === null : (je & 62914560) === je || (je & 536870912) !== 0 ? e === Xt : !1;
      }
      function Sf() {
        var e = Se.H;
        return Se.H = Oi, e === null ? Oi : e;
      }
      function Mf() {
        var e = Se.A;
        return Se.A = _g, e;
      }
      function As() {
        bn = 4, Jr || (je & 4194048) !== je && wt.current !== null || (ei = !0), (jr & 134217727) === 0 && (vo & 134217727) === 0 || sn === null || Or(sn, je, Tt, !1);
      }
      function $a(e, n, r) {
        var o = Ne;
        Ne |= 2;
        var u = Sf(), f = Mf();
        (sn !== e || je !== n) && (Js = null, Lo(e, n)), n = !1;
        var b = bn;
        e: do
          try {
            if (nn !== 0 && Ue !== null) {
              var S = Ue, H = It;
              switch (nn) {
                case 8:
                  qa(), b = 6;
                  break e;
                case 3:
                case 2:
                case 9:
                case 6:
                  wt.current === null && (n = !0);
                  var X = nn;
                  if (nn = 0, It = null, Go(e, S, H, X), r && ei) {
                    b = 0;
                    break e;
                  }
                  break;
                default:
                  X = nn, nn = 0, It = null, Go(e, S, H, X);
              }
            }
            Dh(), b = bn;
            break;
          } catch (ue) {
            Cf(e, ue);
          }
        while (!0);
        return n && e.shellSuspendCounter++, Mr = fo = null, Ne = o, Se.H = u, Se.A = f, Ue === null && (sn = null, je = 0, Ro()), b;
      }
      function Dh() {
        for (; Ue !== null; ) wf(Ue);
      }
      function Lh(e, n) {
        var r = Ne;
        Ne |= 2;
        var o = Sf(), u = Mf();
        sn !== e || je !== n ? (Js = null, Hi = pt() + 500, Lo(e, n)) : ei = F(e, n);
        e: do
          try {
            if (nn !== 0 && Ue !== null) {
              n = Ue;
              var f = It;
              n: switch (nn) {
                case 1:
                  nn = 0, It = null, Go(e, n, f, 1);
                  break;
                case 2:
                case 9:
                  if (ct(f)) {
                    nn = 0, It = null, If(n);
                    break;
                  }
                  n = function() {
                    nn !== 2 && nn !== 9 || sn !== e || (nn = 7), Nn(e);
                  }, f.then(n, n);
                  break e;
                case 3:
                  nn = 7;
                  break e;
                case 4:
                  nn = 5;
                  break e;
                case 7:
                  ct(f) ? (nn = 0, It = null, If(n)) : (nn = 0, It = null, Go(e, n, f, 7));
                  break;
                case 5:
                  var b = null;
                  switch (Ue.tag) {
                    case 26:
                      b = Ue.memoizedState;
                    case 5:
                    case 27:
                      var S = Ue, H = S.type, X = S.pendingProps;
                      if (b ? dd(b) : Zf(S.stateNode, H, X)) {
                        nn = 0, It = null;
                        var ue = S.sibling;
                        if (ue !== null) Ue = ue;
                        else {
                          var $ = S.return;
                          $ !== null ? (Ue = $, vs($)) : Ue = null;
                        }
                        break n;
                      }
                  }
                  nn = 0, It = null, Go(e, n, f, 5);
                  break;
                case 6:
                  nn = 0, It = null, Go(e, n, f, 6);
                  break;
                case 8:
                  qa(), bn = 6;
                  break e;
                default:
                  throw Error(l(462));
              }
            }
            Gh();
            break;
          } catch (me) {
            Cf(e, me);
          }
        while (!0);
        return Mr = fo = null, Se.H = o, Se.A = u, Ne = r, Ue !== null ? 0 : (sn = null, je = 0, Ro(), bn);
      }
      function Gh() {
        for (; Ue !== null && !yg(); ) wf(Ue);
      }
      function wf(e) {
        var n = Xc(e.alternate, e, Tr);
        e.memoizedProps = e.pendingProps, n === null ? vs(e) : Ue = n;
      }
      function If(e) {
        var n = e, r = n.alternate;
        switch (n.tag) {
          case 15:
          case 0:
            n = Uc(r, n, n.pendingProps, n.type, void 0, je);
            break;
          case 11:
            n = Uc(r, n, n.pendingProps, n.type.render, n.ref, je);
            break;
          case 5:
            Wn(n);
          default:
            qc(r, n), n = Ue = kf(n, Tr), n = Xc(r, n, Tr);
        }
        e.memoizedProps = e.pendingProps, n === null ? vs(e) : Ue = n;
      }
      function Go(e, n, r, o) {
        Mr = fo = null, Wn(n), Yo = null, Li = 0;
        var u = n.return;
        try {
          if (Mh(e, u, n, r, je)) {
            bn = 1, ls(e, fe(r, e.current)), Ue = null;
            return;
          }
        } catch (f) {
          if (u !== null) throw Ue = u, f;
          bn = 1, ls(e, fe(r, e.current)), Ue = null;
          return;
        }
        n.flags & 32768 ? (Xe || o === 1 ? e = !0 : ei || (je & 536870912) !== 0 ? e = !1 : (Jr = e = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = wt.current, o !== null && o.tag === 13 && (o.flags |= 16384))), Tf(n, e)) : vs(n);
      }
      function vs(e) {
        var n = e;
        do {
          if ((n.flags & 32768) !== 0) {
            Tf(n, Jr);
            return;
          }
          e = n.return;
          var r = Th(n.alternate, n, Tr);
          if (r !== null) {
            Ue = r;
            return;
          }
          if (n = n.sibling, n !== null) {
            Ue = n;
            return;
          }
          Ue = n = e;
        } while (n !== null);
        bn === 0 && (bn = 5);
      }
      function Tf(e, n) {
        do {
          var r = Fh(e.alternate, e);
          if (r !== null) {
            r.flags &= 32767, Ue = r;
            return;
          }
          if (r = e.return, r !== null && (r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null), !n && (e = e.sibling, e !== null)) {
            Ue = e;
            return;
          }
          Ue = e = r;
        } while (e !== null);
        bn = 6, Ue = null;
      }
      function Ff(e, n, r, o, u, f, b, S, H) {
        e.cancelPendingCommit = null;
        do
          wi();
        while (Ln !== 0);
        if ((Ne & 6) !== 0) throw Error(l(327));
        if (n !== null) {
          if (n === e.current) throw Error(l(177));
          if (f = n.lanes | n.childLanes, f |= Il, re(e, r, f, b, S, H), e === sn && (Ue = sn = null, je = 0), ti = n, Qr = e, Fr = r, kl = f, Pl = u, wd = o, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Hh(bl, function() {
            return Lf(), null;
          })) : (e.callbackNode = null, e.callbackPriority = 0), o = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || o) {
            o = Se.T, Se.T = null, u = Sr(), On(2), b = Ne, Ne |= 4;
            try {
              Rh(e, n, r);
            } finally {
              Ne = b, On(u), Se.T = o;
            }
          }
          Ln = 1, Rf(), xf(), _f();
        }
      }
      function Rf() {
        if (Ln === 1) {
          Ln = 0;
          var e = Qr, n = ti, r = (n.flags & 13878) !== 0;
          if ((n.subtreeFlags & 13878) !== 0 || r) {
            r = Se.T, Se.T = null;
            var o = Sr();
            On(2);
            var u = Ne;
            Ne |= 4;
            try {
              cf(n, e), Vh(e.containerInfo);
            } finally {
              Ne = u, On(o), Se.T = r;
            }
          }
          e.current = n, Ln = 2;
        }
      }
      function xf() {
        if (Ln === 2) {
          Ln = 0;
          var e = Qr, n = ti, r = (n.flags & 8772) !== 0;
          if ((n.subtreeFlags & 8772) !== 0 || r) {
            r = Se.T, Se.T = null;
            var o = Sr();
            On(2);
            var u = Ne;
            Ne |= 4;
            try {
              sf(e, n.alternate, n);
            } finally {
              Ne = u, On(o), Se.T = r;
            }
          }
          Ln = 3;
        }
      }
      function _f() {
        if (Ln === 4 || Ln === 3) {
          Ln = 0, Cg();
          var e = Qr, n = ti, r = Fr, o = wd;
          (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? Ln = 5 : (Ln = 0, ti = Qr = null, Df(e, e.pendingLanes));
          var u = e.pendingLanes;
          if (u === 0 && (Kr = null), ve(r), n = n.stateNode, St && typeof St.onCommitFiberRoot == "function") try {
            St.onCommitFiberRoot(Ri, n, void 0, (n.current.flags & 128) === 128);
          } catch {
          }
          if (o !== null) {
            n = Se.T, u = Sr(), On(2), Se.T = null;
            try {
              for (var f = e.onRecoverableError, b = 0; b < o.length; b++) {
                var S = o[b];
                f(S.value, {
                  componentStack: S.stack
                });
              }
            } finally {
              Se.T = n, On(u);
            }
          }
          (Fr & 3) !== 0 && wi(), Nn(e), u = e.pendingLanes, (r & 261930) !== 0 && (u & 42) !== 0 ? e === Hl ? Ni++ : (Ni = 0, Hl = e) : Ni = 0, qn && sg(), $t(0);
        }
      }
      function Df(e, n) {
        (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, Gn(n)));
      }
      function wi() {
        return Rf(), xf(), _f(), Lf();
      }
      function Lf() {
        if (Ln !== 5) return !1;
        var e = Qr, n = kl;
        kl = 0;
        var r = ve(Fr), o = 32 > r ? 32 : r;
        r = Se.T;
        var u = Sr();
        try {
          On(o), Se.T = null, o = Pl, Pl = null;
          var f = Qr, b = Fr;
          if (Ln = 0, ti = Qr = null, Fr = 0, (Ne & 6) !== 0) throw Error(l(331));
          var S = Ne;
          if (Ne |= 4, mf(f.current), df(f, f.current, b, o), Ne = S, $t(0, !1), St && typeof St.onPostCommitFiberRoot == "function") try {
            St.onPostCommitFiberRoot(Ri, f);
          } catch {
          }
          return !0;
        } finally {
          On(u), Se.T = r, Df(e, n);
        }
      }
      function Gf(e, n, r) {
        n = fe(r, n), n = xa(e.stateNode, n, 2), e = D(e, n, 2), e !== null && (R(e, 2), Nn(e));
      }
      function We(e, n, r) {
        if (e.tag === 3) Gf(e, e, r);
        else for (; n !== null; ) {
          if (n.tag === 3) {
            Gf(n, e, r);
            break;
          } else if (n.tag === 1) {
            var o = n.stateNode;
            if (typeof n.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Kr === null || !Kr.has(o))) {
              e = fe(r, e), r = Dc(2), o = D(n, r, 2), o !== null && (Lc(r, o, n, e), R(o, 2), Nn(o));
              break;
            }
          }
          n = n.return;
        }
      }
      function el(e, n, r) {
        var o = e.pingCache;
        if (o === null) {
          o = e.pingCache = new Dg();
          var u = /* @__PURE__ */ new Set();
          o.set(n, u);
        } else u = o.get(n), u === void 0 && (u = /* @__PURE__ */ new Set(), o.set(n, u));
        u.has(r) || (Ll = !0, u.add(r), e = Oh.bind(null, e, n, r), n.then(e, e));
      }
      function Oh(e, n, r) {
        var o = e.pingCache;
        o !== null && o.delete(n), e.pingedLanes |= e.suspendedLanes & r, e.warmLanes &= ~r, sn === e && (je & r) === r && (bn === 4 || bn === 3 && (je & 62914560) === je && 300 > pt() - zs ? (Ne & 2) === 0 && Lo(e, 0) : Gl |= r, ni === je && (ni = 0)), Nn(e);
      }
      function Of(e, n) {
        n === 0 && (n = P()), e = _e(e, n), e !== null && (R(e, n), Nn(e));
      }
      function kh(e) {
        var n = e.memoizedState, r = 0;
        n !== null && (r = n.retryLane), Of(e, r);
      }
      function Ph(e, n) {
        var r = 0;
        switch (e.tag) {
          case 31:
          case 13:
            var o = e.stateNode, u = e.memoizedState;
            u !== null && (r = u.retryLane);
            break;
          case 19:
            o = e.stateNode;
            break;
          case 22:
            o = e.stateNode._retryCache;
            break;
          default:
            throw Error(l(314));
        }
        o !== null && o.delete(n), Of(e, r);
      }
      function Hh(e, n) {
        return ws(e, n);
      }
      function Nh(e, n, r, o) {
        this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
      }
      function nl(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
      }
      function Cr(e, n) {
        var r = e.alternate;
        return r === null ? (r = i(e.tag, n, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = n, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 65011712, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, n = e.dependencies, r.dependencies = n === null ? null : {
          lanes: n.lanes,
          firstContext: n.firstContext
        }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r.refCleanup = e.refCleanup, r;
      }
      function kf(e, n) {
        e.flags &= 65011714;
        var r = e.alternate;
        return r === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = r.childLanes, e.lanes = r.lanes, e.child = r.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = r.memoizedProps, e.memoizedState = r.memoizedState, e.updateQueue = r.updateQueue, e.type = r.type, n = r.dependencies, e.dependencies = n === null ? null : {
          lanes: n.lanes,
          firstContext: n.firstContext
        }), e;
      }
      function bs(e, n, r, o, u, f) {
        var b = 0;
        if (o = e, typeof e == "function") nl(e) && (b = 1);
        else if (typeof e == "string") b = Qt && Dn ? sd(e, r, Jn.current) ? 26 : md(e) ? 27 : 5 : Qt ? sd(e, r, Jn.current) ? 26 : 5 : Dn && md(e) ? 27 : 5;
        else e: switch (e) {
          case fl:
            return e = i(31, r, n, u), e.elementType = fl, e.lanes = f, e;
          case ko:
            return lo(r.children, u, f, n);
          case jf:
            b = 8, u |= 24;
            break;
          case sl:
            return e = i(12, r, n, u | 2), e.elementType = sl, e.lanes = f, e;
          case ll:
            return e = i(13, r, n, u), e.elementType = ll, e.lanes = f, e;
          case ul:
            return e = i(19, r, n, u), e.elementType = ul, e.lanes = f, e;
          default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
              case kr:
                b = 10;
                break e;
              case Kf:
                b = 9;
                break e;
              case al:
                b = 11;
                break e;
              case cl:
                b = 14;
                break e;
              case Pr:
                b = 16, o = null;
                break e;
            }
            b = 29, r = Error(l(130, e === null ? "null" : typeof e, "")), o = null;
        }
        return n = i(b, r, n, u), n.elementType = e, n.type = o, n.lanes = f, n;
      }
      function lo(e, n, r, o) {
        return e = i(7, e, o, n), e.lanes = r, e;
      }
      function tl(e, n, r) {
        return e = i(6, e, null, n), e.lanes = r, e;
      }
      function Pf(e) {
        var n = i(18, null, null, 0);
        return n.stateNode = e, n;
      }
      function rl(e, n, r) {
        return n = i(4, e.children !== null ? e.children : [], e.key, n), n.lanes = r, n.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation
        }, n;
      }
      function Uh(e, n, r, o, u, f, b, S, H) {
        this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = uo, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = j(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = j(0), this.hiddenUpdates = j(null), this.identifierPrefix = o, this.onUncaughtError = u, this.onCaughtError = f, this.onRecoverableError = b, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = H, this.incompleteTransitions = /* @__PURE__ */ new Map();
      }
      function Hf(e, n, r, o, u, f, b, S, H, X, ue, $) {
        return e = new Uh(e, n, r, b, H, X, ue, $, S), n = 1, f === !0 && (n |= 24), f = i(3, null, null, n), e.current = f, f.stateNode = e, n = hr(), n.refCount++, e.pooledCache = n, n.refCount++, f.memoizedState = {
          element: o,
          isDehydrated: r,
          cache: n
        }, m(f), e;
      }
      function Nf(e) {
        return e ? (e = Uo, e) : Uo;
      }
      function Uf(e) {
        var n = e._reactInternals;
        if (n === void 0) throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
        return e = h(n), e = e !== null ? p(e) : null, e === null ? null : Ii(e.stateNode);
      }
      function zf(e, n, r, o, u, f) {
        u = Nf(u), o.context === null ? o.context = u : o.pendingContext = u, o = M(n), o.payload = {
          element: r
        }, f = f === void 0 ? null : f, f !== null && (o.callback = f), r = D(e, o, n), r !== null && (dt(r, e, n), N(r, e, n));
      }
      function Jf(e, n) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
          var r = e.retryLane;
          e.retryLane = r !== 0 && r < n ? r : n;
        }
      }
      function ol(e, n) {
        Jf(e, n), (e = e.alternate) && Jf(e, n);
      }
      var He = {}, zh = pa, Ct = ZA, il = Object.assign, Jh = /* @__PURE__ */ Symbol.for("react.element"), Bs = /* @__PURE__ */ Symbol.for("react.transitional.element"), Oo = /* @__PURE__ */ Symbol.for("react.portal"), ko = /* @__PURE__ */ Symbol.for("react.fragment"), jf = /* @__PURE__ */ Symbol.for("react.strict_mode"), sl = /* @__PURE__ */ Symbol.for("react.profiler"), Kf = /* @__PURE__ */ Symbol.for("react.consumer"), kr = /* @__PURE__ */ Symbol.for("react.context"), al = /* @__PURE__ */ Symbol.for("react.forward_ref"), ll = /* @__PURE__ */ Symbol.for("react.suspense"), ul = /* @__PURE__ */ Symbol.for("react.suspense_list"), cl = /* @__PURE__ */ Symbol.for("react.memo"), Pr = /* @__PURE__ */ Symbol.for("react.lazy"), fl = /* @__PURE__ */ Symbol.for("react.activity"), jh = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Qf = Symbol.iterator, Kh = /* @__PURE__ */ Symbol.for("react.client.reference"), ys = Array.isArray, Se = zh.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Qh = t.rendererVersion, Xh = t.rendererPackageName, Xf = t.extraDevToolsConfig, Ii = t.getPublicInstance, Yh = t.getRootHostContext, Wh = t.getChildHostContext, Zh = t.prepareForCommit, Vh = t.resetAfterCommit, qh = t.createInstance;
      t.cloneMutableInstance;
      var dl = t.appendInitialChild, Yf = t.finalizeInitialChildren, Cs = t.shouldSetTextContent, Wf = t.createTextInstance;
      t.cloneMutableTextInstance;
      var $h = t.scheduleTimeout, em = t.cancelTimeout, uo = t.noTimeout, Er = t.isPrimaryRenderer;
      t.warnsIfNotActing;
      var Vn = t.supportsMutation, ir = t.supportsPersistence, qn = t.supportsHydration, nm = t.getInstanceFromNode;
      t.beforeActiveInstanceBlur;
      var tm = t.preparePortalMount;
      t.prepareScopeUpdate, t.getInstanceFromScope;
      var On = t.setCurrentUpdatePriority, Sr = t.getCurrentUpdatePriority, rm = t.resolveUpdatePriority;
      t.trackSchedulerEvent, t.resolveEventType, t.resolveEventTimeStamp;
      var om = t.shouldAttemptEagerTransition, im = t.detachDeletedInstance;
      t.requestPostPaintCallback;
      var sm = t.maySuspendCommit, am = t.maySuspendCommitOnUpdate, pl = t.maySuspendCommitInSyncRender, Zf = t.preloadInstance, lm = t.startSuspendingCommit, Vf = t.suspendInstance;
      t.suspendOnActiveViewTransition;
      var um = t.waitForCommitToBeReady;
      t.getSuspendedCommitReason;
      var Po = t.NotPendingTransition, co = t.HostTransitionContext, cm = t.resetFormInstance;
      t.bindToConsole;
      var fm = t.supportsMicrotasks, dm = t.scheduleMicrotask, Ti = t.supportsTestSelectors, pm = t.findFiberRoot, hm = t.getBoundingRect, mm = t.getTextContent, Fi = t.isHiddenSubtree, gm = t.matchAccessibilityRole, Am = t.setFocusIfFocusable, vm = t.setupIntersectionObserver, bm = t.appendChild, Bm = t.appendChildToContainer, ym = t.commitTextUpdate, Cm = t.commitMount, Em = t.commitUpdate, Sm = t.insertBefore, Mm = t.insertInContainerBefore, wm = t.removeChild, Im = t.removeChildFromContainer, qf = t.resetTextContent, Tm = t.hideInstance, Fm = t.hideTextInstance, Rm = t.unhideInstance, xm = t.unhideTextInstance;
      t.cancelViewTransitionName, t.cancelRootViewTransitionName, t.restoreRootViewTransitionName, t.cloneRootViewTransitionContainer, t.removeRootViewTransitionClone, t.measureClonedInstance, t.hasInstanceChanged, t.hasInstanceAffectedParent, t.startViewTransition, t.startGestureTransition, t.stopViewTransition, t.getCurrentGestureOffset, t.createViewTransitionInstance;
      var _m = t.clearContainer;
      t.createFragmentInstance, t.updateFragmentInstanceFiber, t.commitNewChildToFragmentInstance, t.deleteChildFromFragmentInstance;
      var Dm = t.cloneInstance, $f = t.createContainerChildSet, ed = t.appendChildToContainerChildSet, Lm = t.finalizeContainerChildren, nd = t.replaceContainerChildren, td = t.cloneHiddenInstance, rd = t.cloneHiddenTextInstance, hl = t.isSuspenseInstancePending, ml = t.isSuspenseInstanceFallback, Gm = t.getSuspenseInstanceFallbackErrorDetails, Om = t.registerSuspenseInstanceRetry, km = t.canHydrateFormStateMarker, Pm = t.isFormStateMarkerMatching, od = t.getNextHydratableSibling, Hm = t.getNextHydratableSiblingAfterSingleton, Nm = t.getFirstHydratableChild, Um = t.getFirstHydratableChildWithinContainer, zm = t.getFirstHydratableChildWithinActivityInstance, Jm = t.getFirstHydratableChildWithinSuspenseInstance, jm = t.getFirstHydratableChildWithinSingleton, Km = t.canHydrateInstance, Qm = t.canHydrateTextInstance, Xm = t.canHydrateActivityInstance, Ym = t.canHydrateSuspenseInstance, Wm = t.hydrateInstance, Zm = t.hydrateTextInstance, Vm = t.hydrateActivityInstance, qm = t.hydrateSuspenseInstance, $m = t.getNextHydratableInstanceAfterActivityInstance, eg = t.getNextHydratableInstanceAfterSuspenseInstance, ng = t.commitHydratedInstance, tg = t.commitHydratedContainer, rg = t.commitHydratedActivityInstance, og = t.commitHydratedSuspenseInstance, ig = t.finalizeHydratedChildren, sg = t.flushHydrationEvents;
      t.clearActivityBoundary;
      var ag = t.clearSuspenseBoundary;
      t.clearActivityBoundaryFromContainer;
      var lg = t.clearSuspenseBoundaryFromContainer, ug = t.hideDehydratedBoundary, cg = t.unhideDehydratedBoundary, id = t.shouldDeleteUnhydratedTailInstances;
      t.diffHydratedPropsForDevWarnings, t.diffHydratedTextForDevWarnings, t.describeHydratableInstanceForDevWarnings;
      var fg = t.validateHydratableInstance, dg = t.validateHydratableTextInstance, Qt = t.supportsResources, sd = t.isHostHoistableType, gl = t.getHoistableRoot, ad = t.getResource, ld = t.acquireResource, ud = t.releaseResource, pg = t.hydrateHoistable, cd = t.mountHoistable, fd = t.unmountHoistable, hg = t.createHoistableInstance, mg = t.prepareToCommitHoistables, gg = t.mayResourceSuspendCommit, dd = t.preloadResource, Ag = t.suspendResource, Dn = t.supportsSingletons, pd = t.resolveSingletonInstance, vg = t.acquireSingletonInstance, hd = t.releaseSingletonInstance, md = t.isHostSingletonType, Ho = t.isSingletonScope, Al = [], No = -1, Uo = {}, Et = Math.clz32 ? Math.clz32 : G, bg = Math.log, Bg = Math.LN2, Es = 256, Ss = 262144, Ms = 4194304, ws = Ct.unstable_scheduleCallback, vl = Ct.unstable_cancelCallback, yg = Ct.unstable_shouldYield, Cg = Ct.unstable_requestPaint, pt = Ct.unstable_now, gd = Ct.unstable_ImmediatePriority, Eg = Ct.unstable_UserBlockingPriority, bl = Ct.unstable_NormalPriority, Sg = Ct.unstable_IdlePriority, Mg = Ct.log, wg = Ct.unstable_setDisableYieldValue, Ri = null, St = null, Mt = typeof Object.is == "function" ? Object.is : le, Ad = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var n = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
            error: e
          });
          if (!window.dispatchEvent(n)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", e);
          return;
        }
        console.error(e);
      }, Ig = Object.prototype.hasOwnProperty, Bl, vd, yl = !1, bd = /* @__PURE__ */ new WeakMap(), zo = [], Jo = 0, Is = null, xi = 0, Rt = [], xt = 0, Hr = null, sr = 1, ar = "", Jn = B(null), _i = B(null), Nr = B(null), Ts = B(null), jn = null, mn = null, Xe = !1, Ur = null, _t = !1, Cl = Error(l(519)), Fs = B(null), fo = null, Mr = null, Tg = typeof AbortController < "u" ? AbortController : function() {
        var e = [], n = this.signal = {
          aborted: !1,
          addEventListener: function(r, o) {
            e.push(o);
          }
        };
        this.abort = function() {
          n.aborted = !0, e.forEach(function(r) {
            return r();
          });
        };
      }, Fg = Ct.unstable_scheduleCallback, Rg = Ct.unstable_NormalPriority, gn = {
        $$typeof: kr,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
      }, Rs = null, jo = null, El = !1, xs = !1, Sl = !1, po = 0, Di = null, Ml = 0, Ko = 0, Qo = null, Bd = Se.S;
      Se.S = function(e, n) {
        Md = pt(), typeof n == "object" && n !== null && typeof n.then == "function" && ge(e, n), Bd !== null && Bd(e, n);
      };
      var ho = B(null), Xo = Error(l(460)), wl = Error(l(474)), _s = Error(l(542)), Ds = {
        then: function() {
        }
      }, mo = null, Yo = null, Li = 0, go = oo(!0), yd = oo(!1), Dt = [], Wo = 0, Il = 0, zr = !1, Tl = !1, Zo = B(null), Ls = B(0), wt = B(null), Xt = null, yn = B(0), wr = 0, Oe = null, rn = null, Mn = null, Gs = !1, Vo = !1, Ao = !1, Os = 0, Gi = 0, qo = null, xg = 0, Oi = {
        readContext: ln,
        use: Un,
        useCallback: Ge,
        useContext: Ge,
        useEffect: Ge,
        useImperativeHandle: Ge,
        useLayoutEffect: Ge,
        useInsertionEffect: Ge,
        useMemo: Ge,
        useReducer: Ge,
        useRef: Ge,
        useState: Ge,
        useDebugValue: Ge,
        useDeferredValue: Ge,
        useTransition: Ge,
        useSyncExternalStore: Ge,
        useId: Ge,
        useHostTransitionStatus: Ge,
        useFormState: Ge,
        useActionState: Ge,
        useOptimistic: Ge,
        useMemoCache: Ge,
        useCacheRefresh: Ge
      };
      Oi.useEffectEvent = Ge;
      var Cd = {
        readContext: ln,
        use: Un,
        useCallback: function(e, n) {
          return De().memoizedState = [e, n === void 0 ? null : n], e;
        },
        useContext: ln,
        useEffect: hc,
        useImperativeHandle: function(e, n, r) {
          r = r != null ? r.concat([e]) : null, is(4194308, 4, vc.bind(null, n, e), r);
        },
        useLayoutEffect: function(e, n) {
          return is(4194308, 4, e, n);
        },
        useInsertionEffect: function(e, n) {
          is(4, 2, e, n);
        },
        useMemo: function(e, n) {
          var r = De();
          n = n === void 0 ? null : n;
          var o = e();
          if (Ao) {
            W(!0);
            try {
              e();
            } finally {
              W(!1);
            }
          }
          return r.memoizedState = [o, n], o;
        },
        useReducer: function(e, n, r) {
          var o = De();
          if (r !== void 0) {
            var u = r(n);
            if (Ao) {
              W(!0);
              try {
                r(n);
              } finally {
                W(!1);
              }
            }
          } else u = n;
          return o.memoizedState = o.baseState = u, e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: u
          }, o.queue = e, e = e.dispatch = Sh.bind(null, Oe, e), [o.memoizedState, e];
        },
        useRef: function(e) {
          var n = De();
          return e = {
            current: e
          }, n.memoizedState = e;
        },
        useState: function(e) {
          e = Ea(e);
          var n = e.queue, r = Ic.bind(null, Oe, n);
          return n.dispatch = r, [e.memoizedState, r];
        },
        useDebugValue: wa,
        useDeferredValue: function(e, n) {
          var r = De();
          return Ia(r, e, n);
        },
        useTransition: function() {
          var e = Ea(!1);
          return e = Ec.bind(null, Oe, e.queue, !0, !1), De().memoizedState = e, [!1, e];
        },
        useSyncExternalStore: function(e, n, r) {
          var o = Oe, u = De();
          if (Xe) {
            if (r === void 0) throw Error(l(407));
            r = r();
          } else {
            if (r = n(), sn === null) throw Error(l(349));
            (je & 127) !== 0 || qu(o, n, r);
          }
          u.memoizedState = r;
          var f = {
            value: r,
            getSnapshot: n
          };
          return u.queue = f, hc(ec.bind(null, o, f, e), [e]), o.flags |= 2048, _o(9, {
            destroy: void 0
          }, $u.bind(null, o, f, r, n), null), r;
        },
        useId: function() {
          var e = De(), n = sn.identifierPrefix;
          if (Xe) {
            var r = ar, o = sr;
            r = (o & ~(1 << 32 - Et(o) - 1)).toString(32) + r, n = "_" + n + "R_" + r, r = Os++, 0 < r && (n += "H" + r.toString(32)), n += "_";
          } else r = xg++, n = "_" + n + "r_" + r.toString(32) + "_";
          return e.memoizedState = n;
        },
        useHostTransitionStatus: Ta,
        useFormState: uc,
        useActionState: uc,
        useOptimistic: function(e) {
          var n = De();
          n.memoizedState = n.baseState = e;
          var r = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null
          };
          return n.queue = r, n = Fa.bind(null, Oe, !0, r), r.dispatch = n, [e, n];
        },
        useMemoCache: zt,
        useCacheRefresh: function() {
          return De().memoizedState = Eh.bind(null, Oe);
        },
        useEffectEvent: function(e) {
          var n = De(), r = {
            impl: e
          };
          return n.memoizedState = r, function() {
            if ((Ne & 2) !== 0) throw Error(l(440));
            return r.impl.apply(void 0, arguments);
          };
        }
      }, Fl = {
        readContext: ln,
        use: Un,
        useCallback: Bc,
        useContext: ln,
        useEffect: Ma,
        useImperativeHandle: bc,
        useInsertionEffect: gc,
        useLayoutEffect: Ac,
        useMemo: yc,
        useReducer: Bt,
        useRef: pc,
        useState: function() {
          return Bt(hn);
        },
        useDebugValue: wa,
        useDeferredValue: function(e, n) {
          var r = Pe();
          return Cc(r, rn.memoizedState, e, n);
        },
        useTransition: function() {
          var e = Bt(hn)[0], n = Pe().memoizedState;
          return [typeof e == "boolean" ? e : Qe(e), n];
        },
        useSyncExternalStore: Vu,
        useId: Mc,
        useHostTransitionStatus: Ta,
        useFormState: cc,
        useActionState: cc,
        useOptimistic: function(e, n) {
          var r = Pe();
          return rc(r, rn, e, n);
        },
        useMemoCache: zt,
        useCacheRefresh: wc
      };
      Fl.useEffectEvent = mc;
      var Ed = {
        readContext: ln,
        use: Un,
        useCallback: Bc,
        useContext: ln,
        useEffect: Ma,
        useImperativeHandle: bc,
        useInsertionEffect: gc,
        useLayoutEffect: Ac,
        useMemo: yc,
        useReducer: Ca,
        useRef: pc,
        useState: function() {
          return Ca(hn);
        },
        useDebugValue: wa,
        useDeferredValue: function(e, n) {
          var r = Pe();
          return rn === null ? Ia(r, e, n) : Cc(r, rn.memoizedState, e, n);
        },
        useTransition: function() {
          var e = Ca(hn)[0], n = Pe().memoizedState;
          return [typeof e == "boolean" ? e : Qe(e), n];
        },
        useSyncExternalStore: Vu,
        useId: Mc,
        useHostTransitionStatus: Ta,
        useFormState: dc,
        useActionState: dc,
        useOptimistic: function(e, n) {
          var r = Pe();
          return rn !== null ? rc(r, rn, e, n) : (r.baseState = e, [e, r.queue.dispatch]);
        },
        useMemoCache: zt,
        useCacheRefresh: wc
      };
      Ed.useEffectEvent = mc;
      var Rl = {
        enqueueSetState: function(e, n, r) {
          e = e._reactInternals;
          var o = yt(), u = M(o);
          u.payload = n, r != null && (u.callback = r), n = D(e, u, o), n !== null && (dt(n, e, o), N(n, e, o));
        },
        enqueueReplaceState: function(e, n, r) {
          e = e._reactInternals;
          var o = yt(), u = M(o);
          u.tag = 1, u.payload = n, r != null && (u.callback = r), n = D(e, u, o), n !== null && (dt(n, e, o), N(n, e, o));
        },
        enqueueForceUpdate: function(e, n) {
          e = e._reactInternals;
          var r = yt(), o = M(r);
          o.tag = 2, n != null && (o.callback = n), n = D(e, o, r), n !== null && (dt(n, e, r), N(n, e, r));
        }
      }, xl = Error(l(461)), wn = !1, _l = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
      }, Ir = !1, In = !1, Dl = !1, Sd = typeof WeakSet == "function" ? WeakSet : Set, kn = null, Tn = null, ht = !1, Yt = null, $o = 8192, _g = {
        getCacheForType: function(e) {
          var n = ln(gn), r = n.data.get(e);
          return r === void 0 && (r = e(), n.data.set(e, r)), r;
        },
        cacheSignal: function() {
          return ln(gn).controller.signal;
        }
      }, ks = 0, Ps = 1, Hs = 2, Ns = 3, Us = 4;
      if (typeof Symbol == "function" && Symbol.for) {
        var ki = Symbol.for;
        ks = ki("selector.component"), Ps = ki("selector.has_pseudo_class"), Hs = ki("selector.role"), Ns = ki("selector.test_id"), Us = ki("selector.text");
      }
      var Dg = typeof WeakMap == "function" ? WeakMap : Map, Ne = 0, sn = null, Ue = null, je = 0, nn = 0, It = null, Jr = !1, ei = !1, Ll = !1, Tr = 0, bn = 0, jr = 0, vo = 0, Gl = 0, Tt = 0, ni = 0, Pi = null, mt = null, Ol = !1, zs = 0, Md = 0, Hi = 1 / 0, Js = null, Kr = null, Ln = 0, Qr = null, ti = null, Fr = 0, kl = 0, Pl = null, wd = null, Ni = 0, Hl = null;
      return He.attemptContinuousHydration = function(e) {
        if (e.tag === 13 || e.tag === 31) {
          var n = _e(e, 67108864);
          n !== null && dt(n, e, 67108864), ol(e, 67108864);
        }
      }, He.attemptHydrationAtCurrentPriority = function(e) {
        if (e.tag === 13 || e.tag === 31) {
          var n = yt();
          n = ae(n);
          var r = _e(e, n);
          r !== null && dt(r, e, n), ol(e, n);
        }
      }, He.attemptSynchronousHydration = function(e) {
        switch (e.tag) {
          case 3:
            if (e = e.stateNode, e.current.memoizedState.isDehydrated) {
              var n = x(e.pendingLanes);
              if (n !== 0) {
                for (e.pendingLanes |= 2, e.entangledLanes |= 2; n; ) {
                  var r = 1 << 31 - Et(n);
                  e.entanglements[1] |= r, n &= ~r;
                }
                Nn(e), (Ne & 6) === 0 && (Hi = pt() + 500, $t(0));
              }
            }
            break;
          case 31:
          case 13:
            n = _e(e, 2), n !== null && dt(n, e, 2), yf(), ol(e, 2);
        }
      }, He.batchedUpdates = function(e, n) {
        return e(n);
      }, He.createComponentSelector = function(e) {
        return {
          $$typeof: ks,
          value: e
        };
      }, He.createContainer = function(e, n, r, o, u, f, b, S, H, X) {
        return Hf(e, n, !1, null, r, o, f, null, b, S, H, X);
      }, He.createHasPseudoClassSelector = function(e) {
        return {
          $$typeof: Ps,
          value: e
        };
      }, He.createHydrationContainer = function(e, n, r, o, u, f, b, S, H, X, ue, $, me, Le) {
        var Fn;
        return e = Hf(r, o, !0, e, u, f, S, Le, H, X, ue, $), e.context = Nf(null), r = e.current, o = yt(), o = ae(o), u = M(o), u.callback = (Fn = n) != null ? Fn : null, D(r, u, o), n = o, e.current.lanes = n, R(e, n), Nn(e), e;
      }, He.createPortal = function(e, n, r) {
        var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: Oo,
          key: o == null ? null : "" + o,
          children: e,
          containerInfo: n,
          implementation: r
        };
      }, He.createRoleSelector = function(e) {
        return {
          $$typeof: Hs,
          value: e
        };
      }, He.createTestNameSelector = function(e) {
        return {
          $$typeof: Ns,
          value: e
        };
      }, He.createTextSelector = function(e) {
        return {
          $$typeof: Us,
          value: e
        };
      }, He.defaultOnCaughtError = function(e) {
        console.error(e);
      }, He.defaultOnRecoverableError = function(e) {
        Ad(e);
      }, He.defaultOnUncaughtError = function(e) {
        Ad(e);
      }, He.deferredUpdates = function(e) {
        var n = Se.T, r = Sr();
        try {
          return On(32), Se.T = null, e();
        } finally {
          On(r), Se.T = n;
        }
      }, He.discreteUpdates = function(e, n, r, o, u) {
        var f = Se.T, b = Sr();
        try {
          return On(2), Se.T = null, e(n, r, o, u);
        } finally {
          On(b), Se.T = f, Ne === 0 && (Hi = pt() + 500);
        }
      }, He.findAllNodes = Va, He.findBoundingRects = function(e, n) {
        if (!Ti) throw Error(l(363));
        n = Va(e, n), e = [];
        for (var r = 0; r < n.length; r++) e.push(hm(n[r]));
        for (n = e.length - 1; 0 < n; n--) {
          r = e[n];
          for (var o = r.x, u = o + r.width, f = r.y, b = f + r.height, S = n - 1; 0 <= S; S--) if (n !== S) {
            var H = e[S], X = H.x, ue = X + H.width, $ = H.y, me = $ + H.height;
            if (o >= X && f >= $ && u <= ue && b <= me) {
              e.splice(n, 1);
              break;
            } else if (o !== X || r.width !== H.width || me < f || $ > b) {
              if (!(f !== $ || r.height !== H.height || ue < o || X > u)) {
                X > o && (H.width += X - o, H.x = o), ue < u && (H.width = u - X), e.splice(n, 1);
                break;
              }
            } else {
              $ > f && (H.height += $ - f, H.y = f), me < b && (H.height = b - $), e.splice(n, 1);
              break;
            }
          }
        }
        return e;
      }, He.findHostInstance = Uf, He.findHostInstanceWithNoPortals = function(e) {
        return e = h(e), e = e !== null ? g(e) : null, e === null ? null : Ii(e.stateNode);
      }, He.findHostInstanceWithWarning = function(e) {
        return Uf(e);
      }, He.flushPassiveEffects = wi, He.flushSyncFromReconciler = function(e) {
        var n = Ne;
        Ne |= 1;
        var r = Se.T, o = Sr();
        try {
          if (On(2), Se.T = null, e) return e();
        } finally {
          On(o), Se.T = r, Ne = n, (Ne & 6) === 0 && $t(0);
        }
      }, He.flushSyncWork = yf, He.focusWithin = function(e, n) {
        if (!Ti) throw Error(l(363));
        for (e = Ya(e), n = Af(e, n), n = Array.from(n), e = 0; e < n.length; ) {
          var r = n[e++], o = r.tag;
          if (!Fi(r)) {
            if ((o === 5 || o === 26 || o === 27) && Am(r.stateNode)) return !0;
            for (r = r.child; r !== null; ) n.push(r), r = r.sibling;
          }
        }
        return !1;
      }, He.getFindAllNodesFailureDescription = function(e, n) {
        if (!Ti) throw Error(l(363));
        var r = 0, o = [];
        e = [Ya(e), 0];
        for (var u = 0; u < e.length; ) {
          var f = e[u++], b = f.tag, S = e[u++], H = n[S];
          if ((b !== 5 && b !== 26 && b !== 27 || !Fi(f)) && (Wa(f, H) && (o.push(Za(H)), S++, S > r && (r = S)), S < n.length)) for (f = f.child; f !== null; ) e.push(f, S), f = f.sibling;
        }
        if (r < n.length) {
          for (e = []; r < n.length; r++) e.push(Za(n[r]));
          return `findAllNodes was able to match part of the selector:
  ` + (o.join(" > ") + `

No matching component was found for:
  `) + e.join(" > ");
        }
        return null;
      }, He.getPublicRootInstance = function(e) {
        if (e = e.current, !e.child) return null;
        switch (e.child.tag) {
          case 27:
          case 5:
            return Ii(e.child.stateNode);
          default:
            return e.child.stateNode;
        }
      }, He.injectIntoDevTools = function() {
        var e = {
          bundleType: 0,
          version: Qh,
          rendererPackageName: Xh,
          currentDispatcherRef: Se,
          reconcilerVersion: "19.2.0"
        };
        if (Xf !== null && (e.rendererConfig = Xf), typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") e = !1;
        else {
          var n = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (n.isDisabled || !n.supportsFiber) e = !0;
          else {
            try {
              Ri = n.inject(e), St = n;
            } catch {
            }
            e = !!n.checkDCE;
          }
        }
        return e;
      }, He.isAlreadyRendering = function() {
        return (Ne & 6) !== 0;
      }, He.observeVisibleRects = function(e, n, r, o) {
        if (!Ti) throw Error(l(363));
        e = Va(e, n);
        var u = vm(e, r, o).disconnect;
        return {
          disconnect: function() {
            u();
          }
        };
      }, He.shouldError = function() {
        return null;
      }, He.shouldSuspend = function() {
        return !1;
      }, He.startHostTransition = function(e, n, r, o) {
        if (e.tag !== 5) throw Error(l(476));
        var u = Sc(e).queue;
        Ec(e, u, n, Po, r === null ? s : function() {
          var f = Sc(e);
          return f.next === null && (f = e.alternate.memoizedState), bi(e, f.next.queue, {}, yt()), r(o);
        });
      }, He.updateContainer = function(e, n, r, o) {
        var u = n.current, f = yt();
        return zf(u, f, e, n, r, o), f;
      }, He.updateContainerSync = function(e, n, r, o) {
        return zf(n.current, 2, e, n, r, o), 2;
      }, He;
    }, a.exports.default = a.exports, Object.defineProperty(a.exports, "__esModule", {
      value: !0
    });
  })(Yd)), Yd.exports;
}
var Zd;
function Mv() {
  return Zd || (Zd = 1, Xd.exports = Sv()), Xd.exports;
}
var wv = Mv();
const Iv = Ev(wv);
function Tv(a) {
  const t = Iv(a);
  return t.injectIntoDevTools(), t;
}
const Kp = 0, hi = {}, Fv = /^three(?=[A-Z])/, va = (a) => `${a[0].toUpperCase()}${a.slice(1)}`;
let Rv = 0;
const xv = (a) => typeof a == "function";
function Qp(a) {
  if (xv(a)) {
    const t = `${Rv++}`;
    return hi[t] = a, t;
  } else
    Object.assign(hi, a);
}
function Xp(a, t) {
  const i = va(a), s = hi[i];
  if (a !== "primitive" && !s) throw new Error(`R3F: ${i} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
  if (a === "primitive" && !t.object) throw new Error("R3F: Primitives without 'object' are invalid!");
  if (t.args !== void 0 && !Array.isArray(t.args)) throw new Error("R3F: The args prop must be an array!");
}
function _v(a, t, i) {
  var s;
  return a = va(a) in hi ? a : a.replace(Fv, ""), Xp(a, t), a === "primitive" && (s = t.object) != null && s.__r3f && delete t.object.__r3f, aa(t.object, i, a, t);
}
function Dv(a) {
  if (!a.isHidden) {
    var t;
    a.props.attach && (t = a.parent) != null && t.object ? ua(a.parent, a) : st(a.object) && (a.object.visible = !1), a.isHidden = !0, gi(a);
  }
}
function Yp(a) {
  if (a.isHidden) {
    var t;
    a.props.attach && (t = a.parent) != null && t.object ? la(a.parent, a) : st(a.object) && a.props.visible !== !1 && (a.object.visible = !0), a.isHidden = !1, gi(a);
  }
}
function Hu(a, t, i) {
  const s = t.root.getState();
  if (!(!a.parent && a.object !== s.scene)) {
    if (!t.object) {
      var l, c;
      const d = hi[va(t.type)];
      t.object = (l = t.props.object) != null ? l : new d(...(c = t.props.args) != null ? c : []), t.object.__r3f = t;
    }
    if (cr(t.object, t.props), t.props.attach)
      la(a, t);
    else if (st(t.object) && st(a.object)) {
      const d = a.object.children.indexOf(i?.object);
      if (i && d !== -1) {
        const h = a.object.children.indexOf(t.object);
        if (h !== -1) {
          a.object.children.splice(h, 1);
          const p = h < d ? d - 1 : d;
          a.object.children.splice(p, 0, t.object);
        } else
          t.object.parent = a.object, a.object.children.splice(d, 0, t.object), t.object.dispatchEvent({
            type: "added"
          }), a.object.dispatchEvent({
            type: "childadded",
            child: t.object
          });
      } else
        a.object.add(t.object);
    }
    for (const d of t.children) Hu(t, d);
    gi(t);
  }
}
function Yl(a, t) {
  t && (t.parent = a, a.children.push(t), Hu(a, t));
}
function Vd(a, t, i) {
  if (!t || !i) return;
  t.parent = a;
  const s = a.children.indexOf(i);
  s !== -1 ? a.children.splice(s, 0, t) : a.children.push(t), Hu(a, t, i);
}
function Wp(a) {
  if (typeof a.dispose == "function") {
    const t = () => {
      try {
        a.dispose();
      } catch {
      }
    };
    typeof IS_REACT_ACT_ENVIRONMENT < "u" ? t() : vu.unstable_scheduleCallback(vu.unstable_IdlePriority, t);
  }
}
function Bu(a, t, i) {
  if (!t) return;
  t.parent = null;
  const s = a.children.indexOf(t);
  s !== -1 && a.children.splice(s, 1), t.props.attach ? ua(a, t) : st(t.object) && st(a.object) && (a.object.remove(t.object), hv(Gu(t), t.object));
  const l = t.props.dispose !== null && i !== !1;
  for (let c = t.children.length - 1; c >= 0; c--) {
    const d = t.children[c];
    Bu(t, d, l);
  }
  t.children.length = 0, delete t.object.__r3f, l && t.type !== "primitive" && t.object.type !== "Scene" && Wp(t.object), i === void 0 && gi(t);
}
function Lv(a, t) {
  for (const i of [a, a.alternate])
    if (i !== null)
      if (typeof i.ref == "function") {
        i.refCleanup == null || i.refCleanup();
        const s = i.ref(t);
        typeof s == "function" && (i.refCleanup = s);
      } else i.ref && (i.ref.current = t);
}
const oa = [];
function Gv() {
  for (const [i] of oa) {
    const s = i.parent;
    if (s) {
      i.props.attach ? ua(s, i) : st(i.object) && st(s.object) && s.object.remove(i.object);
      for (const l of i.children)
        l.props.attach ? ua(i, l) : st(l.object) && st(i.object) && i.object.remove(l.object);
    }
    i.isHidden && Yp(i), i.object.__r3f && delete i.object.__r3f, i.type !== "primitive" && Wp(i.object);
  }
  for (const [i, s, l] of oa) {
    i.props = s;
    const c = i.parent;
    if (c) {
      var a, t;
      const d = hi[va(i.type)], h = i.object;
      i.object = (a = i.props.object) != null ? a : new d(...(t = i.props.args) != null ? t : []), i.object.__r3f = i, Lv(l, i.object), pv(Gu(i), h, i.object), cr(i.object, i.props), i.props.attach ? la(c, i) : st(i.object) && st(c.object) && c.object.add(i.object);
      for (const p of i.children)
        p.props.attach ? la(i, p) : st(p.object) && st(i.object) && i.object.add(p.object);
      gi(i);
    }
  }
  oa.length = 0;
}
const Wl = () => {
}, qd = {};
let js = Kp;
const Ov = 0, kv = 4, ca = /* @__PURE__ */ Tv({
  isPrimaryRenderer: !1,
  warnsIfNotActing: !1,
  supportsMutation: !0,
  supportsPersistence: !1,
  supportsHydration: !1,
  createInstance: _v,
  removeChild: Bu,
  appendChild: Yl,
  appendInitialChild: Yl,
  insertBefore: Vd,
  appendChildToContainer(a, t) {
    const i = a.getState().scene.__r3f;
    !t || !i || Yl(i, t);
  },
  removeChildFromContainer(a, t) {
    const i = a.getState().scene.__r3f;
    !t || !i || Bu(i, t);
  },
  insertInContainerBefore(a, t, i) {
    const s = a.getState().scene.__r3f;
    !t || !i || !s || Vd(s, t, i);
  },
  getRootHostContext: () => qd,
  getChildHostContext: () => qd,
  commitUpdate(a, t, i, s, l) {
    var c, d, h;
    Xp(t, s);
    let p = !1;
    if ((a.type === "primitive" && i.object !== s.object || ((c = s.args) == null ? void 0 : c.length) !== ((d = i.args) == null ? void 0 : d.length) || (h = s.args) != null && h.some((v, A) => {
      var B;
      return v !== ((B = i.args) == null ? void 0 : B[A]);
    })) && (p = !0), p)
      oa.push([a, {
        ...s
      }, l]);
    else {
      const v = cv(a, s);
      Object.keys(v).length && (Object.assign(a.props, v), cr(a.object, v));
    }
    (l.sibling === null || (l.flags & kv) === Ov) && Gv();
  },
  finalizeInitialChildren: () => !1,
  commitMount() {
  },
  getPublicInstance: (a) => a?.object,
  prepareForCommit: () => null,
  preparePortalMount: (a) => aa(a.getState().scene, a, "", {}),
  resetAfterCommit: () => {
  },
  shouldSetTextContent: () => !1,
  clearContainer: () => !1,
  hideInstance: Dv,
  unhideInstance: Yp,
  createTextInstance: Wl,
  hideTextInstance: Wl,
  unhideTextInstance: Wl,
  scheduleTimeout: typeof setTimeout == "function" ? setTimeout : void 0,
  cancelTimeout: typeof clearTimeout == "function" ? clearTimeout : void 0,
  noTimeout: -1,
  getInstanceFromNode: () => null,
  beforeActiveInstanceBlur() {
  },
  afterActiveInstanceBlur() {
  },
  detachDeletedInstance() {
  },
  prepareScopeUpdate() {
  },
  getInstanceFromScope: () => null,
  shouldAttemptEagerTransition: () => !1,
  trackSchedulerEvent: () => {
  },
  resolveEventType: () => null,
  resolveEventTimeStamp: () => -1.1,
  requestPostPaintCallback() {
  },
  maySuspendCommit: () => !1,
  preloadInstance: () => !0,
  // true indicates already loaded
  suspendInstance() {
  },
  waitForCommitToBeReady: () => null,
  NotPendingTransition: null,
  // The reconciler types use the internal ReactContext with all the hidden properties
  // so we have to cast from the public React.Context type
  HostTransitionContext: /* @__PURE__ */ Q.createContext(null),
  setCurrentUpdatePriority(a) {
    js = a;
  },
  getCurrentUpdatePriority() {
    return js;
  },
  resolveUpdatePriority() {
    var a;
    if (js !== Kp) return js;
    switch (typeof window < "u" && ((a = window.event) == null ? void 0 : a.type)) {
      case "click":
      case "contextmenu":
      case "dblclick":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
        return yv;
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "pointerenter":
      case "pointerleave":
      case "wheel":
        return bv;
      default:
        return Bv;
    }
  },
  resetFormInstance() {
  },
  // @ts-ignore DefinitelyTyped is not up to date
  rendererPackageName: "@react-three/fiber",
  rendererVersion: Cv.version,
  // https://github.com/facebook/react/pull/31975
  // https://github.com/facebook/react/pull/31999
  applyViewTransitionName(a, t, i) {
  },
  restoreViewTransitionName(a, t) {
  },
  cancelViewTransitionName(a, t, i) {
  },
  cancelRootViewTransitionName(a) {
  },
  restoreRootViewTransitionName(a) {
  },
  InstanceMeasurement: null,
  measureInstance: (a) => null,
  wasInstanceInViewport: (a) => !0,
  hasInstanceChanged: (a, t) => !1,
  hasInstanceAffectedParent: (a, t) => !1,
  // https://github.com/facebook/react/pull/32002
  // https://github.com/facebook/react/pull/34486
  suspendOnActiveViewTransition(a, t) {
  },
  // https://github.com/facebook/react/pull/32451
  // https://github.com/facebook/react/pull/32760
  startGestureTransition: () => null,
  startViewTransition: () => null,
  stopViewTransition(a) {
  },
  // https://github.com/facebook/react/pull/32038
  createViewTransitionInstance: (a) => null,
  // https://github.com/facebook/react/pull/32379
  // https://github.com/facebook/react/pull/32786
  getCurrentGestureOffset(a) {
    throw new Error("startGestureTransition is not yet supported in react-three-fiber.");
  },
  // https://github.com/facebook/react/pull/32500
  cloneMutableInstance(a, t) {
    return a;
  },
  cloneMutableTextInstance(a) {
    return a;
  },
  cloneRootViewTransitionContainer(a) {
    throw new Error("Not implemented.");
  },
  removeRootViewTransitionClone(a, t) {
    throw new Error("Not implemented.");
  },
  // https://github.com/facebook/react/pull/32465
  createFragmentInstance: (a) => null,
  updateFragmentInstanceFiber(a, t) {
  },
  commitNewChildToFragmentInstance(a, t) {
  },
  deleteChildFromFragmentInstance(a, t) {
  },
  // https://github.com/facebook/react/pull/32653
  measureClonedInstance: (a) => null,
  // https://github.com/facebook/react/pull/32819
  maySuspendCommitOnUpdate: (a, t, i) => !1,
  maySuspendCommitInSyncRender: (a, t) => !1,
  // https://github.com/facebook/react/pull/34486
  startSuspendingCommit: () => null,
  // https://github.com/facebook/react/pull/34522
  getSuspendedCommitReason: (a, t) => null
}), wo = /* @__PURE__ */ new Map(), si = {
  objects: "shallow",
  strict: !1
};
function Pv(a, t) {
  if (!t && typeof HTMLCanvasElement < "u" && a instanceof HTMLCanvasElement && a.parentElement) {
    const {
      width: i,
      height: s,
      top: l,
      left: c
    } = a.parentElement.getBoundingClientRect();
    return {
      width: i,
      height: s,
      top: l,
      left: c
    };
  } else if (!t && typeof OffscreenCanvas < "u" && a instanceof OffscreenCanvas)
    return {
      width: a.width,
      height: a.height,
      top: 0,
      left: 0
    };
  return {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    ...t
  };
}
function Hv(a) {
  const t = wo.get(a), i = t?.fiber, s = t?.store;
  t && console.warn("R3F.createRoot should only be called once!");
  const l = typeof reportError == "function" ? (
    // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError
  ) : (
    // In older browsers and test environments, fallback to console.error.
    console.error
  ), c = s || gv(Eu, ep), d = i || ca.createContainer(
    c,
    // container
    vv,
    // tag
    null,
    // hydration callbacks
    !1,
    // isStrictMode
    null,
    // concurrentUpdatesByDefaultOverride
    "",
    // identifierPrefix
    l,
    // onUncaughtError
    l,
    // onCaughtError
    l,
    // onRecoverableError
    null
    // transitionCallbacks
  );
  t || wo.set(a, {
    fiber: d,
    store: c
  });
  let h, p, g = !1, v = null;
  return {
    async configure(A = {}) {
      let B;
      v = new Promise((Be) => B = Be);
      let {
        gl: C,
        size: E,
        scene: G,
        events: x,
        onCreated: I,
        shadows: F = !1,
        linear: z = !1,
        flat: P = !1,
        legacy: j = !1,
        orthographic: R = !1,
        frameloop: re = "always",
        dpr: J = [1, 2],
        performance: O,
        raycaster: K,
        camera: ae,
        onPointerMissed: ve
      } = A, W = c.getState(), le = W.gl;
      if (!W.gl) {
        const Be = {
          canvas: a,
          powerPreference: "high-performance",
          antialias: !0,
          alpha: !0
        }, he = typeof C == "function" ? await C(Be) : C;
        Kd(he) ? le = he : le = new Te.WebGLRenderer({
          ...Be,
          ...C
        }), W.set({
          gl: le
        });
      }
      let pe = W.raycaster;
      pe || W.set({
        raycaster: pe = new Te.Raycaster()
      });
      const {
        params: _,
        ...q
      } = K || {};
      if (un.equ(q, pe, si) || cr(pe, {
        ...q
      }), un.equ(_, pe.params, si) || cr(pe, {
        params: {
          ...pe.params,
          ..._
        }
      }), !W.camera || W.camera === p && !un.equ(p, ae, si)) {
        p = ae;
        const Be = ae?.isCamera, he = Be ? ae : R ? new Te.OrthographicCamera(0, 0, 0, 0, 0.1, 1e3) : new Te.PerspectiveCamera(75, 0, 0.1, 1e3);
        Be || (he.position.z = 5, ae && (cr(he, ae), he.manual || ("aspect" in ae || "left" in ae || "right" in ae || "bottom" in ae || "top" in ae) && (he.manual = !0, he.updateProjectionMatrix())), !W.camera && !(ae != null && ae.rotation) && he.lookAt(0, 0, 0)), W.set({
          camera: he
        }), pe.camera = he;
      }
      if (!W.scene) {
        let Be;
        G != null && G.isScene ? (Be = G, aa(Be, c, "", {})) : (Be = new Te.Scene(), aa(Be, c, "", {}), G && cr(Be, G)), W.set({
          scene: Be
        });
      }
      x && !W.events.handlers && W.set({
        events: x(c)
      });
      const de = Pv(a, E);
      if (un.equ(de, W.size, si) || W.setSize(de.width, de.height, de.top, de.left), J && W.viewport.dpr !== Np(J) && W.setDpr(J), W.frameloop !== re && W.setFrameloop(re), W.onPointerMissed || W.set({
        onPointerMissed: ve
      }), O && !un.equ(O, W.performance, si) && W.set((Be) => ({
        performance: {
          ...Be.performance,
          ...O
        }
      })), !W.xr) {
        var fe;
        const Be = (Fe, an) => {
          const xe = c.getState();
          xe.frameloop !== "never" && ep(Fe, !0, xe, an);
        }, he = () => {
          const Fe = c.getState();
          Fe.gl.xr.enabled = Fe.gl.xr.isPresenting, Fe.gl.xr.setAnimationLoop(Fe.gl.xr.isPresenting ? Be : null), Fe.gl.xr.isPresenting || Eu(Fe);
        }, Ce = {
          connect() {
            const Fe = c.getState().gl;
            Fe.xr.addEventListener("sessionstart", he), Fe.xr.addEventListener("sessionend", he);
          },
          disconnect() {
            const Fe = c.getState().gl;
            Fe.xr.removeEventListener("sessionstart", he), Fe.xr.removeEventListener("sessionend", he);
          }
        };
        typeof ((fe = le.xr) == null ? void 0 : fe.addEventListener) == "function" && Ce.connect(), W.set({
          xr: Ce
        });
      }
      if (le.shadowMap) {
        const Be = le.shadowMap.enabled, he = le.shadowMap.type;
        if (le.shadowMap.enabled = !!F, un.boo(F))
          le.shadowMap.type = Te.PCFSoftShadowMap;
        else if (un.str(F)) {
          var ce;
          const Ce = {
            basic: Te.BasicShadowMap,
            percentage: Te.PCFShadowMap,
            soft: Te.PCFSoftShadowMap,
            variance: Te.VSMShadowMap
          };
          le.shadowMap.type = (ce = Ce[F]) != null ? ce : Te.PCFSoftShadowMap;
        } else un.obj(F) && Object.assign(le.shadowMap, F);
        (Be !== le.shadowMap.enabled || he !== le.shadowMap.type) && (le.shadowMap.needsUpdate = !0);
      }
      return Te.ColorManagement.enabled = !j, g || (le.outputColorSpace = z ? Te.LinearSRGBColorSpace : Te.SRGBColorSpace, le.toneMapping = P ? Te.NoToneMapping : Te.ACESFilmicToneMapping), W.legacy !== j && W.set(() => ({
        legacy: j
      })), W.linear !== z && W.set(() => ({
        linear: z
      })), W.flat !== P && W.set(() => ({
        flat: P
      })), C && !un.fun(C) && !Kd(C) && !un.equ(C, le, si) && cr(le, C), h = I, g = !0, B(), this;
    },
    render(A) {
      return !g && !v && this.configure(), v.then(() => {
        ca.updateContainer(/* @__PURE__ */ be(Nv, {
          store: c,
          children: A,
          onCreated: h,
          rootElement: a
        }), d, null, () => {
        });
      }), c;
    },
    unmount() {
      Zp(a);
    }
  };
}
function Nv({
  store: a,
  children: t,
  onCreated: i,
  rootElement: s
}) {
  return ns(() => {
    const l = a.getState();
    l.set((c) => ({
      internal: {
        ...c.internal,
        active: !0
      }
    })), i && i(l), a.getState().events.connected || l.events.connect == null || l.events.connect(s);
  }, []), /* @__PURE__ */ be(ku.Provider, {
    value: a,
    children: t
  });
}
function Zp(a, t) {
  const i = wo.get(a), s = i?.fiber;
  if (s) {
    const l = i?.store.getState();
    l && (l.internal.active = !1), ca.updateContainer(null, s, null, () => {
      l && setTimeout(() => {
        try {
          var c, d, h, p;
          l.events.disconnect == null || l.events.disconnect(), (c = l.gl) == null || (d = c.renderLists) == null || d.dispose == null || d.dispose(), (h = l.gl) == null || h.forceContextLoss == null || h.forceContextLoss(), (p = l.gl) != null && p.xr && l.xr.disconnect(), av(l.scene), wo.delete(a);
        } catch {
        }
      }, 500);
    });
  }
}
function Uv(a, t, i) {
  return /* @__PURE__ */ be(zv, {
    children: a,
    container: t,
    state: i
  });
}
function zv({
  state: a = {},
  children: t,
  container: i
}) {
  const {
    events: s,
    size: l,
    ...c
  } = a, d = Pu(), [h] = Q.useState(() => new Te.Raycaster()), [p] = Q.useState(() => new Te.Vector2()), g = Ou((A, B) => {
    let C;
    if (B.camera && l) {
      const E = B.camera;
      C = A.viewport.getCurrentViewport(E, new Te.Vector3(), l), E !== A.camera && zp(E, l);
    }
    return {
      // The intersect consists of the previous root state
      ...A,
      ...B,
      // Portals have their own scene, which forms the root, a raycaster and a pointer
      scene: i,
      raycaster: h,
      pointer: p,
      mouse: p,
      // Their previous root is the layer before it
      previousRoot: d,
      // Events, size and viewport can be overridden by the inject layer
      events: {
        ...A.events,
        ...B.events,
        ...s
      },
      size: {
        ...A.size,
        ...l
      },
      viewport: {
        ...A.viewport,
        ...C
      },
      // Layers are allowed to override events
      setEvents: (E) => B.set((G) => ({
        ...G,
        events: {
          ...G.events,
          ...E
        }
      }))
    };
  }), v = Q.useMemo(() => {
    const A = Dp((C, E) => ({
      ...c,
      set: C,
      get: E
    })), B = (C) => A.setState((E) => g.current(C, E));
    return B(d.getState()), d.subscribe(B), A;
  }, [d, i]);
  return (
    // @ts-ignore, reconciler types are not maintained
    /* @__PURE__ */ be(Bp, {
      children: ca.createPortal(/* @__PURE__ */ be(ku.Provider, {
        value: v,
        children: t
      }), v, null)
    })
  );
}
const Jv = /* @__PURE__ */ new Set(), jv = /* @__PURE__ */ new Set(), Kv = /* @__PURE__ */ new Set();
function Zl(a, t) {
  if (a.size)
    for (const {
      callback: i
    } of a.values())
      i(t);
}
function Yi(a, t) {
  switch (a) {
    case "before":
      return Zl(Jv, t);
    case "after":
      return Zl(jv, t);
    case "tail":
      return Zl(Kv, t);
  }
}
let Vl, ql;
function yu(a, t, i) {
  let s = t.clock.getDelta();
  t.frameloop === "never" && typeof a == "number" && (s = a - t.clock.elapsedTime, t.clock.oldTime = t.clock.elapsedTime, t.clock.elapsedTime = a), Vl = t.internal.subscribers;
  for (let l = 0; l < Vl.length; l++)
    ql = Vl[l], ql.ref.current(ql.store.getState(), s, i);
  return !t.internal.priority && t.gl.render && t.gl.render(t.scene, t.camera), t.internal.frames = Math.max(0, t.internal.frames - 1), t.frameloop === "always" ? 1 : t.internal.frames;
}
let fa = !1, Cu = !1, $l, $d, ai;
function Vp(a) {
  $d = requestAnimationFrame(Vp), fa = !0, $l = 0, Yi("before", a), Cu = !0;
  for (const i of wo.values()) {
    var t;
    ai = i.store.getState(), ai.internal.active && (ai.frameloop === "always" || ai.internal.frames > 0) && !((t = ai.gl.xr) != null && t.isPresenting) && ($l += yu(a, ai));
  }
  if (Cu = !1, Yi("after", a), $l === 0)
    return Yi("tail", a), fa = !1, cancelAnimationFrame($d);
}
function Eu(a, t = 1) {
  var i;
  if (!a) return wo.forEach((s) => Eu(s.store.getState(), t));
  (i = a.gl.xr) != null && i.isPresenting || !a.internal.active || a.frameloop === "never" || (t > 1 ? a.internal.frames = Math.min(60, a.internal.frames + t) : Cu ? a.internal.frames = 2 : a.internal.frames = 1, fa || (fa = !0, requestAnimationFrame(Vp)));
}
function ep(a, t = !0, i, s) {
  if (t && Yi("before", a), i) yu(a, i, s);
  else for (const l of wo.values()) yu(a, l.store.getState());
  t && Yi("after", a);
}
const eu = {
  onClick: ["click", !1],
  onContextMenu: ["contextmenu", !1],
  onDoubleClick: ["dblclick", !1],
  onWheel: ["wheel", !0],
  onPointerDown: ["pointerdown", !0],
  onPointerUp: ["pointerup", !0],
  onPointerLeave: ["pointerleave", !0],
  onPointerMove: ["pointermove", !0],
  onPointerCancel: ["pointercancel", !0],
  onLostPointerCapture: ["lostpointercapture", !0]
};
function Qv(a) {
  const {
    handlePointer: t
  } = mv(a);
  return {
    priority: 1,
    enabled: !0,
    compute(i, s, l) {
      s.pointer.set(i.offsetX / s.size.width * 2 - 1, -(i.offsetY / s.size.height) * 2 + 1), s.raycaster.setFromCamera(s.pointer, s.camera);
    },
    connected: void 0,
    handlers: Object.keys(eu).reduce((i, s) => ({
      ...i,
      [s]: t(s)
    }), {}),
    update: () => {
      var i;
      const {
        events: s,
        internal: l
      } = a.getState();
      (i = l.lastEvent) != null && i.current && s.handlers && s.handlers.onPointerMove(l.lastEvent.current);
    },
    connect: (i) => {
      const {
        set: s,
        events: l
      } = a.getState();
      if (l.disconnect == null || l.disconnect(), s((c) => ({
        events: {
          ...c.events,
          connected: i
        }
      })), l.handlers)
        for (const c in l.handlers) {
          const d = l.handlers[c], [h, p] = eu[c];
          i.addEventListener(h, d, {
            passive: p
          });
        }
    },
    disconnect: () => {
      const {
        set: i,
        events: s
      } = a.getState();
      if (s.connected) {
        if (s.handlers)
          for (const l in s.handlers) {
            const c = s.handlers[l], [d] = eu[l];
            s.connected.removeEventListener(d, c);
          }
        i((l) => ({
          events: {
            ...l.events,
            connected: void 0
          }
        }));
      }
    }
  };
}
function np(a, t) {
  let i;
  return (...s) => {
    window.clearTimeout(i), i = window.setTimeout(() => a(...s), t);
  };
}
function Xv({ debounce: a, scroll: t, polyfill: i, offsetSize: s } = { debounce: 0, scroll: !1, offsetSize: !1 }) {
  const l = i || (typeof window > "u" ? class {
  } : window.ResizeObserver);
  if (!l) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [c, d] = Zt({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }), h = ci({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: c, orientationHandler: null }), p = a ? typeof a == "number" ? a : a.scroll : null, g = a ? typeof a == "number" ? a : a.resize : null, v = ci(!1);
  dr(() => (v.current = !0, () => {
    v.current = !1;
  }));
  const [A, B, C] = ha(() => {
    const I = () => {
      if (!h.current.element) return;
      const { left: F, top: z, width: P, height: j, bottom: R, right: re, x: J, y: O } = h.current.element.getBoundingClientRect(), K = { left: F, top: z, width: P, height: j, bottom: R, right: re, x: J, y: O };
      h.current.element instanceof HTMLElement && s && (K.height = h.current.element.offsetHeight, K.width = h.current.element.offsetWidth), Object.freeze(K), v.current && !Vv(h.current.lastBounds, K) && d(h.current.lastBounds = K);
    };
    return [I, g ? np(I, g) : I, p ? np(I, p) : I];
  }, [d, s, p, g]);
  function E() {
    h.current.scrollContainers && (h.current.scrollContainers.forEach((I) => I.removeEventListener("scroll", C, !0)), h.current.scrollContainers = null), h.current.resizeObserver && (h.current.resizeObserver.disconnect(), h.current.resizeObserver = null), h.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", h.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", h.current.orientationHandler));
  }
  function G() {
    h.current.element && (h.current.resizeObserver = new l(C), h.current.resizeObserver.observe(h.current.element), t && h.current.scrollContainers && h.current.scrollContainers.forEach((I) => I.addEventListener("scroll", C, { capture: !0, passive: !0 })), h.current.orientationHandler = () => {
      C();
    }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", h.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", h.current.orientationHandler));
  }
  const x = (I) => {
    !I || I === h.current.element || (E(), h.current.element = I, h.current.scrollContainers = qp(I), G());
  };
  return Wv(C, !!t), Yv(B), dr(() => {
    E(), G();
  }, [t, C, B]), dr(() => E, []), [x, c, A];
}
function Yv(a) {
  dr(() => {
    const t = a;
    return window.addEventListener("resize", t), () => {
      window.removeEventListener("resize", t);
    };
  }, [a]);
}
function Wv(a, t) {
  dr(() => {
    if (t) {
      const i = a;
      return window.addEventListener("scroll", i, { capture: !0, passive: !0 }), () => {
        window.removeEventListener("scroll", i, !0);
      };
    }
  }, [a, t]);
}
function qp(a) {
  const t = [];
  if (!a || a === document.body) return t;
  const { overflow: i, overflowX: s, overflowY: l } = window.getComputedStyle(a);
  return [i, s, l].some((c) => c === "auto" || c === "scroll") && t.push(a), [...t, ...qp(a.parentElement)];
}
const Zv = ["x", "y", "top", "bottom", "left", "right", "width", "height"], Vv = (a, t) => Zv.every((i) => a[i] === t[i]);
function qv({
  ref: a,
  children: t,
  fallback: i,
  resize: s,
  style: l,
  gl: c,
  events: d = Qv,
  eventSource: h,
  eventPrefix: p,
  shadows: g,
  linear: v,
  flat: A,
  legacy: B,
  orthographic: C,
  frameloop: E,
  dpr: G,
  performance: x,
  raycaster: I,
  camera: F,
  scene: z,
  onPointerMissed: P,
  onCreated: j,
  ...R
}) {
  Q.useMemo(() => Qp(Te), []);
  const re = rv(), [J, O] = Xv({
    scroll: !0,
    debounce: {
      scroll: 50,
      resize: 0
    },
    ...s
  }), K = Q.useRef(null), ae = Q.useRef(null);
  Q.useImperativeHandle(a, () => K.current);
  const ve = Ou(P), [W, le] = Q.useState(!1), [pe, _] = Q.useState(!1);
  if (W) throw W;
  if (pe) throw pe;
  const q = Q.useRef(null);
  return ns(() => {
    const fe = K.current;
    if (O.width > 0 && O.height > 0 && fe) {
      q.current || (q.current = Hv(fe));
      async function ce() {
        await q.current.configure({
          gl: c,
          scene: z,
          events: d,
          shadows: g,
          linear: v,
          flat: A,
          legacy: B,
          orthographic: C,
          frameloop: E,
          dpr: G,
          performance: x,
          raycaster: I,
          camera: F,
          size: O,
          // Pass mutable reference to onPointerMissed so it's free to update
          onPointerMissed: (...Be) => ve.current == null ? void 0 : ve.current(...Be),
          onCreated: (Be) => {
            Be.events.connect == null || Be.events.connect(h ? nv(h) ? h.current : h : ae.current), p && Be.setEvents({
              compute: (he, Ce) => {
                const Fe = he[p + "X"], an = he[p + "Y"];
                Ce.pointer.set(Fe / Ce.size.width * 2 - 1, -(an / Ce.size.height) * 2 + 1), Ce.raycaster.setFromCamera(Ce.pointer, Ce.camera);
              }
            }), j?.(Be);
          }
        }), q.current.render(/* @__PURE__ */ be(re, {
          children: /* @__PURE__ */ be(iv, {
            set: _,
            children: /* @__PURE__ */ be(Q.Suspense, {
              fallback: /* @__PURE__ */ be(ov, {
                set: le
              }),
              children: t ?? null
            })
          })
        }));
      }
      ce();
    }
  }), Q.useEffect(() => {
    const fe = K.current;
    if (fe) return () => Zp(fe);
  }, []), /* @__PURE__ */ be("div", {
    ref: ae,
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      pointerEvents: h ? "none" : "auto",
      ...l
    },
    ...R,
    children: /* @__PURE__ */ be("div", {
      ref: J,
      style: {
        width: "100%",
        height: "100%"
      },
      children: /* @__PURE__ */ be("canvas", {
        ref: K,
        style: {
          display: "block"
        },
        children: i
      })
    })
  });
}
function $v(a) {
  return /* @__PURE__ */ be(kp, {
    children: /* @__PURE__ */ be(qv, {
      ...a
    })
  });
}
function Io() {
  return Io = Object.assign ? Object.assign.bind() : function(a) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];
      for (var s in i) ({}).hasOwnProperty.call(i, s) && (a[s] = i[s]);
    }
    return a;
  }, Io.apply(null, arguments);
}
const ts = /* @__PURE__ */ new Ke(), Nu = /* @__PURE__ */ new Ke(), eb = /* @__PURE__ */ new Ke(), tp = /* @__PURE__ */ new $n();
function nb(a, t, i) {
  const s = ts.setFromMatrixPosition(a.matrixWorld);
  s.project(t);
  const l = i.width / 2, c = i.height / 2;
  return [s.x * l + l, -(s.y * c) + c];
}
function tb(a, t) {
  const i = ts.setFromMatrixPosition(a.matrixWorld), s = Nu.setFromMatrixPosition(t.matrixWorld), l = i.sub(s), c = t.getWorldDirection(eb);
  return l.angleTo(c) > Math.PI / 2;
}
function rb(a, t, i, s) {
  const l = ts.setFromMatrixPosition(a.matrixWorld), c = l.clone();
  c.project(t), tp.set(c.x, c.y), i.setFromCamera(tp, t);
  const d = i.intersectObjects(s, !0);
  if (d.length) {
    const h = d[0].distance;
    return l.distanceTo(i.ray.origin) < h;
  }
  return !0;
}
function ob(a, t) {
  if (t instanceof So)
    return t.zoom;
  if (t instanceof fi) {
    const i = ts.setFromMatrixPosition(a.matrixWorld), s = Nu.setFromMatrixPosition(t.matrixWorld), l = t.fov * Math.PI / 180, c = i.distanceTo(s);
    return 1 / (2 * Math.tan(l / 2) * c);
  } else
    return 1;
}
function ib(a, t, i) {
  if (t instanceof fi || t instanceof So) {
    const s = ts.setFromMatrixPosition(a.matrixWorld), l = Nu.setFromMatrixPosition(t.matrixWorld), c = s.distanceTo(l), d = (i[1] - i[0]) / (t.far - t.near), h = i[1] - d * t.far;
    return Math.round(d * c + h);
  }
}
const Su = (a) => Math.abs(a) < 1e-10 ? 0 : a;
function $p(a, t, i = "") {
  let s = "matrix3d(";
  for (let l = 0; l !== 16; l++)
    s += Su(t[l] * a.elements[l]) + (l !== 15 ? "," : ")");
  return i + s;
}
const sb = /* @__PURE__ */ ((a) => (t) => $p(t, a))([1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1]), ab = /* @__PURE__ */ ((a) => (t, i) => $p(t, a(i), "translate(-50%,-50%)"))((a) => [1 / a, 1 / a, 1 / a, 1, -1 / a, -1 / a, -1 / a, -1, 1 / a, 1 / a, 1 / a, 1, 1, 1, 1, 1]);
function lb(a) {
  return a && typeof a == "object" && "current" in a;
}
const ub = /* @__PURE__ */ Q.forwardRef(({
  children: a,
  eps: t = 1e-3,
  style: i,
  className: s,
  prepend: l,
  center: c,
  fullscreen: d,
  portal: h,
  distanceFactor: p,
  sprite: g = !1,
  transform: v = !1,
  occlude: A,
  onOcclude: B,
  castShadow: C,
  receiveShadow: E,
  material: G,
  geometry: x,
  zIndexRange: I = [16777271, 0],
  calculatePosition: F = nb,
  as: z = "div",
  wrapperClass: P,
  pointerEvents: j = "auto",
  ...R
}, re) => {
  const {
    gl: J,
    camera: O,
    scene: K,
    size: ae,
    raycaster: ve,
    events: W,
    viewport: le
  } = et(), [pe] = Q.useState(() => document.createElement(z)), _ = Q.useRef(null), q = Q.useRef(null), de = Q.useRef(0), fe = Q.useRef([0, 0]), ce = Q.useRef(null), Be = Q.useRef(null), he = h?.current || W.connected || J.domElement.parentNode, Ce = Q.useRef(null), Fe = Q.useRef(!1), an = Q.useMemo(() => A && A !== "blending" || Array.isArray(A) && A.length && lb(A[0]), [A]);
  Q.useLayoutEffect(() => {
    const Cn = J.domElement;
    A && A === "blending" ? (Cn.style.zIndex = `${Math.floor(I[0] / 2)}`, Cn.style.position = "absolute", Cn.style.pointerEvents = "none") : (Cn.style.zIndex = null, Cn.style.position = null, Cn.style.pointerEvents = null);
  }, [A]), Q.useLayoutEffect(() => {
    if (q.current) {
      const Cn = _.current = kg.createRoot(pe);
      if (K.updateMatrixWorld(), v)
        pe.style.cssText = "position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";
      else {
        const Ye = F(q.current, O, ae);
        pe.style.cssText = `position:absolute;top:0;left:0;transform:translate3d(${Ye[0]}px,${Ye[1]}px,0);transform-origin:0 0;`;
      }
      return he && (l ? he.prepend(pe) : he.appendChild(pe)), () => {
        he && he.removeChild(pe), Cn.unmount();
      };
    }
  }, [he, v]), Q.useLayoutEffect(() => {
    P && (pe.className = P);
  }, [P]);
  const xe = Q.useMemo(() => v ? {
    position: "absolute",
    top: 0,
    left: 0,
    width: ae.width,
    height: ae.height,
    transformStyle: "preserve-3d",
    pointerEvents: "none"
  } : {
    position: "absolute",
    transform: c ? "translate3d(-50%,-50%,0)" : "none",
    ...d && {
      top: -ae.height / 2,
      left: -ae.width / 2,
      width: ae.width,
      height: ae.height
    },
    ...i
  }, [i, c, d, ae, v]), Hn = Q.useMemo(() => ({
    position: "absolute",
    pointerEvents: j
  }), [j]);
  Q.useLayoutEffect(() => {
    if (Fe.current = !1, v) {
      var Cn;
      (Cn = _.current) == null || Cn.render(/* @__PURE__ */ Q.createElement("div", {
        ref: ce,
        style: xe
      }, /* @__PURE__ */ Q.createElement("div", {
        ref: Be,
        style: Hn
      }, /* @__PURE__ */ Q.createElement("div", {
        ref: re,
        className: s,
        style: i,
        children: a
      }))));
    } else {
      var Ye;
      (Ye = _.current) == null || Ye.render(/* @__PURE__ */ Q.createElement("div", {
        ref: re,
        style: xe,
        className: s,
        children: a
      }));
    }
  });
  const dn = Q.useRef(!0);
  Aa((Cn) => {
    if (q.current) {
      O.updateMatrixWorld(), q.current.updateWorldMatrix(!0, !1);
      const Ye = v ? fe.current : F(q.current, O, ae);
      if (v || Math.abs(de.current - O.zoom) > t || Math.abs(fe.current[0] - Ye[0]) > t || Math.abs(fe.current[1] - Ye[1]) > t) {
        const Rn = tb(q.current, O);
        let pn = !1;
        an && (Array.isArray(A) ? pn = A.map((vn) => vn.current) : A !== "blending" && (pn = [K]));
        const nt = dn.current;
        if (pn) {
          const vn = rb(q.current, O, ve, pn);
          dn.current = vn && !Rn;
        } else
          dn.current = !Rn;
        nt !== dn.current && (B ? B(!dn.current) : pe.style.display = dn.current ? "block" : "none");
        const tt = Math.floor(I[0] / 2), at = A ? an ? [I[0], tt] : [tt - 1, 0] : I;
        if (pe.style.zIndex = `${ib(q.current, O, at)}`, v) {
          const [vn, Ht] = [ae.width / 2, ae.height / 2], Ft = O.projectionMatrix.elements[5] * Ht, {
            isOrthographicCamera: At,
            top: Vt,
            left: lt,
            bottom: ln,
            right: ut
          } = O, qt = sb(O.matrixWorldInverse), hr = At ? `scale(${Ft})translate(${Su(-(ut + lt) / 2)}px,${Su((Vt + ln) / 2)}px)` : `translateZ(${Ft}px)`;
          let Gn = q.current.matrixWorld;
          g && (Gn = O.matrixWorldInverse.clone().transpose().copyPosition(Gn).scale(q.current.scale), Gn.elements[3] = Gn.elements[7] = Gn.elements[11] = 0, Gn.elements[15] = 1), pe.style.width = ae.width + "px", pe.style.height = ae.height + "px", pe.style.perspective = At ? "" : `${Ft}px`, ce.current && Be.current && (ce.current.style.transform = `${hr}${qt}translate(${vn}px,${Ht}px)`, Be.current.style.transform = ab(Gn, 1 / ((p || 10) / 400)));
        } else {
          const vn = p === void 0 ? 1 : ob(q.current, O) * p;
          pe.style.transform = `translate3d(${Ye[0]}px,${Ye[1]}px,0) scale(${vn})`;
        }
        fe.current = Ye, de.current = O.zoom;
      }
    }
    if (!an && Ce.current && !Fe.current)
      if (v) {
        if (ce.current) {
          const Ye = ce.current.children[0];
          if (Ye != null && Ye.clientWidth && Ye != null && Ye.clientHeight) {
            const {
              isOrthographicCamera: Rn
            } = O;
            if (Rn || x)
              R.scale && (Array.isArray(R.scale) ? R.scale instanceof Ke ? Ce.current.scale.copy(R.scale.clone().divideScalar(1)) : Ce.current.scale.set(1 / R.scale[0], 1 / R.scale[1], 1 / R.scale[2]) : Ce.current.scale.setScalar(1 / R.scale));
            else {
              const pn = (p || 10) / 400, nt = Ye.clientWidth * pn, tt = Ye.clientHeight * pn;
              Ce.current.scale.set(nt, tt, 1);
            }
            Fe.current = !0;
          }
        }
      } else {
        const Ye = pe.children[0];
        if (Ye != null && Ye.clientWidth && Ye != null && Ye.clientHeight) {
          const Rn = 1 / le.factor, pn = Ye.clientWidth * Rn, nt = Ye.clientHeight * Rn;
          Ce.current.scale.set(pn, nt, 1), Fe.current = !0;
        }
        Ce.current.lookAt(Cn.camera.position);
      }
  });
  const Yn = Q.useMemo(() => ({
    vertexShader: v ? void 0 : (
      /* glsl */
      `
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `
    ),
    fragmentShader: (
      /* glsl */
      `
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `
    )
  }), [v]);
  return /* @__PURE__ */ Q.createElement("group", Io({}, R, {
    ref: q
  }), A && !an && /* @__PURE__ */ Q.createElement("mesh", {
    castShadow: C,
    receiveShadow: E,
    ref: Ce
  }, x || /* @__PURE__ */ Q.createElement("planeGeometry", null), G || /* @__PURE__ */ Q.createElement("shaderMaterial", {
    side: Ru,
    vertexShader: Yn.vertexShader,
    fragmentShader: Yn.fragmentShader
  })));
}), rs = parseInt(Hg.replace(/\D+/g, "")), eh = rs >= 125 ? "uv1" : "uv2";
function rp(a, t) {
  if (t === Ng)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), a;
  if (t === pu || t === yp) {
    let i = a.getIndex();
    if (i === null) {
      const d = [], h = a.getAttribute("position");
      if (h !== void 0) {
        for (let p = 0; p < h.count; p++)
          d.push(p);
        a.setIndex(d), i = a.getIndex();
      } else
        return console.error(
          "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
        ), a;
    }
    const s = i.count - 2, l = [];
    if (i)
      if (t === pu)
        for (let d = 1; d <= s; d++)
          l.push(i.getX(0)), l.push(i.getX(d)), l.push(i.getX(d + 1));
      else
        for (let d = 0; d < s; d++)
          d % 2 === 0 ? (l.push(i.getX(d)), l.push(i.getX(d + 1)), l.push(i.getX(d + 2))) : (l.push(i.getX(d + 2)), l.push(i.getX(d + 1)), l.push(i.getX(d)));
    l.length / 3 !== s && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const c = a.clone();
    return c.setIndex(l), c.clearGroups(), c;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", t), a;
}
var Gt = Uint8Array, $r = Uint16Array, Mu = Uint32Array, nh = new Gt([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), th = new Gt([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), cb = new Gt([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), rh = function(a, t) {
  for (var i = new $r(31), s = 0; s < 31; ++s)
    i[s] = t += 1 << a[s - 1];
  for (var l = new Mu(i[30]), s = 1; s < 30; ++s)
    for (var c = i[s]; c < i[s + 1]; ++c)
      l[c] = c - i[s] << 5 | s;
  return [i, l];
}, oh = rh(nh, 2), ih = oh[0], fb = oh[1];
ih[28] = 258, fb[258] = 28;
var db = rh(th, 0), pb = db[0], wu = new $r(32768);
for (var fn = 0; fn < 32768; ++fn) {
  var Yr = (fn & 43690) >>> 1 | (fn & 21845) << 1;
  Yr = (Yr & 52428) >>> 2 | (Yr & 13107) << 2, Yr = (Yr & 61680) >>> 4 | (Yr & 3855) << 4, wu[fn] = ((Yr & 65280) >>> 8 | (Yr & 255) << 8) >>> 1;
}
var Wi = (function(a, t, i) {
  for (var s = a.length, l = 0, c = new $r(t); l < s; ++l)
    ++c[a[l] - 1];
  var d = new $r(t);
  for (l = 0; l < t; ++l)
    d[l] = d[l - 1] + c[l - 1] << 1;
  var h;
  if (i) {
    h = new $r(1 << t);
    var p = 15 - t;
    for (l = 0; l < s; ++l)
      if (a[l])
        for (var g = l << 4 | a[l], v = t - a[l], A = d[a[l] - 1]++ << v, B = A | (1 << v) - 1; A <= B; ++A)
          h[wu[A] >>> p] = g;
  } else
    for (h = new $r(s), l = 0; l < s; ++l)
      a[l] && (h[l] = wu[d[a[l] - 1]++] >>> 15 - a[l]);
  return h;
}), os = new Gt(288);
for (var fn = 0; fn < 144; ++fn)
  os[fn] = 8;
for (var fn = 144; fn < 256; ++fn)
  os[fn] = 9;
for (var fn = 256; fn < 280; ++fn)
  os[fn] = 7;
for (var fn = 280; fn < 288; ++fn)
  os[fn] = 8;
var sh = new Gt(32);
for (var fn = 0; fn < 32; ++fn)
  sh[fn] = 5;
var hb = /* @__PURE__ */ Wi(os, 9, 1), mb = /* @__PURE__ */ Wi(sh, 5, 1), nu = function(a) {
  for (var t = a[0], i = 1; i < a.length; ++i)
    a[i] > t && (t = a[i]);
  return t;
}, Wt = function(a, t, i) {
  var s = t / 8 | 0;
  return (a[s] | a[s + 1] << 8) >> (t & 7) & i;
}, tu = function(a, t) {
  var i = t / 8 | 0;
  return (a[i] | a[i + 1] << 8 | a[i + 2] << 16) >> (t & 7);
}, gb = function(a) {
  return (a / 8 | 0) + (a & 7 && 1);
}, Ab = function(a, t, i) {
  (i == null || i > a.length) && (i = a.length);
  var s = new (a instanceof $r ? $r : a instanceof Mu ? Mu : Gt)(i - t);
  return s.set(a.subarray(t, i)), s;
}, vb = function(a, t, i) {
  var s = a.length;
  if (!s || i && !i.l && s < 5)
    return t || new Gt(0);
  var l = !t || i, c = !i || i.i;
  i || (i = {}), t || (t = new Gt(s * 3));
  var d = function(xe) {
    var Hn = t.length;
    if (xe > Hn) {
      var dn = new Gt(Math.max(Hn * 2, xe));
      dn.set(t), t = dn;
    }
  }, h = i.f || 0, p = i.p || 0, g = i.b || 0, v = i.l, A = i.d, B = i.m, C = i.n, E = s * 8;
  do {
    if (!v) {
      i.f = h = Wt(a, p, 1);
      var G = Wt(a, p + 1, 3);
      if (p += 3, G)
        if (G == 1)
          v = hb, A = mb, B = 9, C = 5;
        else if (G == 2) {
          var z = Wt(a, p, 31) + 257, P = Wt(a, p + 10, 15) + 4, j = z + Wt(a, p + 5, 31) + 1;
          p += 14;
          for (var R = new Gt(j), re = new Gt(19), J = 0; J < P; ++J)
            re[cb[J]] = Wt(a, p + J * 3, 7);
          p += P * 3;
          for (var O = nu(re), K = (1 << O) - 1, ae = Wi(re, O, 1), J = 0; J < j; ) {
            var ve = ae[Wt(a, p, K)];
            p += ve & 15;
            var x = ve >>> 4;
            if (x < 16)
              R[J++] = x;
            else {
              var W = 0, le = 0;
              for (x == 16 ? (le = 3 + Wt(a, p, 3), p += 2, W = R[J - 1]) : x == 17 ? (le = 3 + Wt(a, p, 7), p += 3) : x == 18 && (le = 11 + Wt(a, p, 127), p += 7); le--; )
                R[J++] = W;
            }
          }
          var pe = R.subarray(0, z), _ = R.subarray(z);
          B = nu(pe), C = nu(_), v = Wi(pe, B, 1), A = Wi(_, C, 1);
        } else
          throw "invalid block type";
      else {
        var x = gb(p) + 4, I = a[x - 4] | a[x - 3] << 8, F = x + I;
        if (F > s) {
          if (c)
            throw "unexpected EOF";
          break;
        }
        l && d(g + I), t.set(a.subarray(x, F), g), i.b = g += I, i.p = p = F * 8;
        continue;
      }
      if (p > E) {
        if (c)
          throw "unexpected EOF";
        break;
      }
    }
    l && d(g + 131072);
    for (var q = (1 << B) - 1, de = (1 << C) - 1, fe = p; ; fe = p) {
      var W = v[tu(a, p) & q], ce = W >>> 4;
      if (p += W & 15, p > E) {
        if (c)
          throw "unexpected EOF";
        break;
      }
      if (!W)
        throw "invalid length/literal";
      if (ce < 256)
        t[g++] = ce;
      else if (ce == 256) {
        fe = p, v = null;
        break;
      } else {
        var Be = ce - 254;
        if (ce > 264) {
          var J = ce - 257, he = nh[J];
          Be = Wt(a, p, (1 << he) - 1) + ih[J], p += he;
        }
        var Ce = A[tu(a, p) & de], Fe = Ce >>> 4;
        if (!Ce)
          throw "invalid distance";
        p += Ce & 15;
        var _ = pb[Fe];
        if (Fe > 3) {
          var he = th[Fe];
          _ += tu(a, p) & (1 << he) - 1, p += he;
        }
        if (p > E) {
          if (c)
            throw "unexpected EOF";
          break;
        }
        l && d(g + 131072);
        for (var an = g + Be; g < an; g += 4)
          t[g] = t[g - _], t[g + 1] = t[g + 1 - _], t[g + 2] = t[g + 2 - _], t[g + 3] = t[g + 3 - _];
        g = an;
      }
    }
    i.l = v, i.p = fe, i.b = g, v && (h = 1, i.m = B, i.d = A, i.n = C);
  } while (!h);
  return g == t.length ? t : Ab(t, 0, g);
}, bb = /* @__PURE__ */ new Gt(0), Bb = function(a) {
  if ((a[0] & 15) != 8 || a[0] >>> 4 > 7 || (a[0] << 8 | a[1]) % 31)
    throw "invalid zlib data";
  if (a[1] & 32)
    throw "invalid zlib data: preset dictionaries not supported";
};
function Ks(a, t) {
  return vb((Bb(a), a.subarray(2, -4)), t);
}
var yb = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), Cb = 0;
try {
  yb.decode(bb, { stream: !0 }), Cb = 1;
} catch {
}
const Eb = (a) => a && a.isCubeTexture;
class Sb extends es {
  constructor(t, i) {
    var s, l;
    const c = Eb(t), h = ((l = c ? (s = t.image[0]) == null ? void 0 : s.width : t.image.width) != null ? l : 1024) / 4, p = Math.floor(Math.log2(h)), g = Math.pow(2, p), v = 3 * Math.max(g, 112), A = 4 * g, B = [
      c ? "#define ENVMAP_TYPE_CUBE" : "",
      `#define CUBEUV_TEXEL_WIDTH ${1 / v}`,
      `#define CUBEUV_TEXEL_HEIGHT ${1 / A}`,
      `#define CUBEUV_MAX_MIP ${p}.0`
    ], C = (
      /* glsl */
      `
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `
    ), E = B.join(`
`) + /* glsl */
    `
        #define ENVMAP_TYPE_CUBE_UV
        varying vec3 vWorldPosition;
        uniform float radius;
        uniform float height;
        uniform float angle;
        #ifdef ENVMAP_TYPE_CUBE
            uniform samplerCube map;
        #else
            uniform sampler2D map;
        #endif
        // From: https://www.shadertoy.com/view/4tsBD7
        float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
        {
            float d = dot ( rd, n );
            
            if( d > 0.0 ) { return 1e6; }
            
            vec3  o = ro - c;
            float t = - dot( n, o ) / d;
            vec3  q = o + rd * t;
            
            return ( dot( q, q ) < r * r ) ? t : 1e6;
        }
        // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
        float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) 
        {
            vec3 oc = ro - ce;
            float b = dot( oc, rd );
            float c = dot( oc, oc ) - ra * ra;
            float h = b * b - c;
            
            if( h < 0.0 ) { return -1.0; }
            
            h = sqrt( h );
            
            return - b + h;
        }
        vec3 project() 
        {
            vec3 p = normalize( vWorldPosition );
            vec3 camPos = cameraPosition;
            camPos.y -= height;
            float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
            if( intersection > 0.0 ) {
                
                vec3 h = vec3( 0.0, - height, 0.0 );
                float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
                p = ( camPos + min( intersection, intersection2 ) * p ) / radius;
            } else {
                p = vec3( 0.0, 1.0, 0.0 );
            }
            return p;
        }
        #include <common>
        #include <cube_uv_reflection_fragment>
        void main() 
        {
            vec3 projectedWorldPosition = project();
            
            #ifdef ENVMAP_TYPE_CUBE
                vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;
            #else
                vec3 direction = normalize( projectedWorldPosition );
                vec2 uv = equirectUv( direction );
                vec3 outcolor = texture2D( map, uv ).rgb;
            #endif
            gl_FragColor = vec4( outcolor, 1.0 );
            #include <tonemapping_fragment>
            #include <${rs >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
        }
        `, G = {
      map: { value: t },
      height: { value: i?.height || 15 },
      radius: { value: i?.radius || 100 }
    }, x = new Ug(1, 16), I = new ma({
      uniforms: G,
      fragmentShader: E,
      vertexShader: C,
      side: Ru
    });
    super(x, I);
  }
  set radius(t) {
    this.material.uniforms.radius.value = t;
  }
  get radius() {
    return this.material.uniforms.radius.value;
  }
  set height(t) {
    this.material.uniforms.height.value = t;
  }
  get height() {
    return this.material.uniforms.height.value;
  }
}
var Mb = Object.defineProperty, wb = (a, t, i) => t in a ? Mb(a, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : a[t] = i, Ib = (a, t, i) => (wb(a, t + "", i), i);
class Tb {
  constructor() {
    Ib(this, "_listeners");
  }
  /**
   * Adds a listener to an event type.
   * @param type The type of event to listen to.
   * @param listener The function that gets called when the event is fired.
   */
  addEventListener(t, i) {
    this._listeners === void 0 && (this._listeners = {});
    const s = this._listeners;
    s[t] === void 0 && (s[t] = []), s[t].indexOf(i) === -1 && s[t].push(i);
  }
  /**
      * Checks if listener is added to an event type.
      * @param type The type of event to listen to.
      * @param listener The function that gets called when the event is fired.
      */
  hasEventListener(t, i) {
    if (this._listeners === void 0)
      return !1;
    const s = this._listeners;
    return s[t] !== void 0 && s[t].indexOf(i) !== -1;
  }
  /**
      * Removes a listener from an event type.
      * @param type The type of the listener that gets removed.
      * @param listener The listener function that gets removed.
      */
  removeEventListener(t, i) {
    if (this._listeners === void 0)
      return;
    const l = this._listeners[t];
    if (l !== void 0) {
      const c = l.indexOf(i);
      c !== -1 && l.splice(c, 1);
    }
  }
  /**
      * Fire an event type.
      * @param event The event that gets fired.
      */
  dispatchEvent(t) {
    if (this._listeners === void 0)
      return;
    const s = this._listeners[t.type];
    if (s !== void 0) {
      t.target = this;
      const l = s.slice(0);
      for (let c = 0, d = l.length; c < d; c++)
        l[c].call(this, t);
      t.target = null;
    }
  }
}
var Fb = Object.defineProperty, Rb = (a, t, i) => t in a ? Fb(a, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : a[t] = i, Ee = (a, t, i) => (Rb(a, typeof t != "symbol" ? t + "" : t, i), i);
const Qs = /* @__PURE__ */ new zg(), op = /* @__PURE__ */ new Jg(), xb = Math.cos(70 * (Math.PI / 180)), ip = (a, t) => (a % t + t) % t;
let _b = class extends Tb {
  constructor(t, i) {
    super(), Ee(this, "object"), Ee(this, "domElement"), Ee(this, "enabled", !0), Ee(this, "target", new Ke()), Ee(this, "minDistance", 0), Ee(this, "maxDistance", 1 / 0), Ee(this, "minZoom", 0), Ee(this, "maxZoom", 1 / 0), Ee(this, "minPolarAngle", 0), Ee(this, "maxPolarAngle", Math.PI), Ee(this, "minAzimuthAngle", -1 / 0), Ee(this, "maxAzimuthAngle", 1 / 0), Ee(this, "enableDamping", !1), Ee(this, "dampingFactor", 0.05), Ee(this, "enableZoom", !0), Ee(this, "zoomSpeed", 1), Ee(this, "enableRotate", !0), Ee(this, "rotateSpeed", 1), Ee(this, "enablePan", !0), Ee(this, "panSpeed", 1), Ee(this, "screenSpacePanning", !0), Ee(this, "keyPanSpeed", 7), Ee(this, "zoomToCursor", !1), Ee(this, "autoRotate", !1), Ee(this, "autoRotateSpeed", 2), Ee(this, "reverseOrbit", !1), Ee(this, "reverseHorizontalOrbit", !1), Ee(this, "reverseVerticalOrbit", !1), Ee(this, "keys", { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }), Ee(this, "mouseButtons", {
      LEFT: ri.ROTATE,
      MIDDLE: ri.DOLLY,
      RIGHT: ri.PAN
    }), Ee(this, "touches", { ONE: oi.ROTATE, TWO: oi.DOLLY_PAN }), Ee(this, "target0"), Ee(this, "position0"), Ee(this, "zoom0"), Ee(this, "_domElementKeyEvents", null), Ee(this, "getPolarAngle"), Ee(this, "getAzimuthalAngle"), Ee(this, "setPolarAngle"), Ee(this, "setAzimuthalAngle"), Ee(this, "getDistance"), Ee(this, "getZoomScale"), Ee(this, "listenToKeyEvents"), Ee(this, "stopListenToKeyEvents"), Ee(this, "saveState"), Ee(this, "reset"), Ee(this, "update"), Ee(this, "connect"), Ee(this, "dispose"), Ee(this, "dollyIn"), Ee(this, "dollyOut"), Ee(this, "getScale"), Ee(this, "setScale"), this.object = t, this.domElement = i, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = () => v.phi, this.getAzimuthalAngle = () => v.theta, this.setPolarAngle = (w) => {
      let Z = ip(w, 2 * Math.PI), ge = v.phi;
      ge < 0 && (ge += 2 * Math.PI), Z < 0 && (Z += 2 * Math.PI);
      let Je = Math.abs(Z - ge);
      2 * Math.PI - Je < Je && (Z < ge ? Z += 2 * Math.PI : ge += 2 * Math.PI), A.phi = Z - ge, s.update();
    }, this.setAzimuthalAngle = (w) => {
      let Z = ip(w, 2 * Math.PI), ge = v.theta;
      ge < 0 && (ge += 2 * Math.PI), Z < 0 && (Z += 2 * Math.PI);
      let Je = Math.abs(Z - ge);
      2 * Math.PI - Je < Je && (Z < ge ? Z += 2 * Math.PI : ge += 2 * Math.PI), A.theta = Z - ge, s.update();
    }, this.getDistance = () => s.object.position.distanceTo(s.target), this.listenToKeyEvents = (w) => {
      w.addEventListener("keydown", Nt), this._domElementKeyEvents = w;
    }, this.stopListenToKeyEvents = () => {
      this._domElementKeyEvents.removeEventListener("keydown", Nt), this._domElementKeyEvents = null;
    }, this.saveState = () => {
      s.target0.copy(s.target), s.position0.copy(s.object.position), s.zoom0 = s.object.zoom;
    }, this.reset = () => {
      s.target.copy(s.target0), s.object.position.copy(s.position0), s.object.zoom = s.zoom0, s.object.updateProjectionMatrix(), s.dispatchEvent(l), s.update(), p = h.NONE;
    }, this.update = (() => {
      const w = new Ke(), Z = new Ke(0, 1, 0), ge = new ia().setFromUnitVectors(t.up, Z), Je = ge.clone().invert(), ne = new Ke(), xn = new ia(), rt = 2 * Math.PI;
      return function() {
        const gr = s.object.position;
        ge.setFromUnitVectors(t.up, Z), Je.copy(ge).invert(), w.copy(gr).sub(s.target), w.applyQuaternion(ge), v.setFromVector3(w), s.autoRotate && p === h.NONE && le(ve()), s.enableDamping ? (v.theta += A.theta * s.dampingFactor, v.phi += A.phi * s.dampingFactor) : (v.theta += A.theta, v.phi += A.phi);
        let ct = s.minAzimuthAngle, ft = s.maxAzimuthAngle;
        isFinite(ct) && isFinite(ft) && (ct < -Math.PI ? ct += rt : ct > Math.PI && (ct -= rt), ft < -Math.PI ? ft += rt : ft > Math.PI && (ft -= rt), ct <= ft ? v.theta = Math.max(ct, Math.min(ft, v.theta)) : v.theta = v.theta > (ct + ft) / 2 ? Math.max(ct, v.theta) : Math.min(ft, v.theta)), v.phi = Math.max(s.minPolarAngle, Math.min(s.maxPolarAngle, v.phi)), v.makeSafe(), s.enableDamping === !0 ? s.target.addScaledVector(C, s.dampingFactor) : s.target.add(C), s.zoomToCursor && O || s.object.isOrthographicCamera ? v.radius = Ce(v.radius) : v.radius = Ce(v.radius * B), w.setFromSpherical(v), w.applyQuaternion(Je), gr.copy(s.target).add(w), s.object.matrixAutoUpdate || s.object.updateMatrix(), s.object.lookAt(s.target), s.enableDamping === !0 ? (A.theta *= 1 - s.dampingFactor, A.phi *= 1 - s.dampingFactor, C.multiplyScalar(1 - s.dampingFactor)) : (A.set(0, 0, 0), C.set(0, 0, 0));
        let ot = !1;
        if (s.zoomToCursor && O) {
          let nr = null;
          if (s.object instanceof fi && s.object.isPerspectiveCamera) {
            const tr = w.length();
            nr = Ce(tr * B);
            const Ut = tr - nr;
            s.object.position.addScaledVector(re, Ut), s.object.updateMatrixWorld();
          } else if (s.object.isOrthographicCamera) {
            const tr = new Ke(J.x, J.y, 0);
            tr.unproject(s.object), s.object.zoom = Math.max(s.minZoom, Math.min(s.maxZoom, s.object.zoom / B)), s.object.updateProjectionMatrix(), ot = !0;
            const Ut = new Ke(J.x, J.y, 0);
            Ut.unproject(s.object), s.object.position.sub(Ut).add(tr), s.object.updateMatrixWorld(), nr = w.length();
          } else
            console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), s.zoomToCursor = !1;
          nr !== null && (s.screenSpacePanning ? s.target.set(0, 0, -1).transformDirection(s.object.matrix).multiplyScalar(nr).add(s.object.position) : (Qs.origin.copy(s.object.position), Qs.direction.set(0, 0, -1).transformDirection(s.object.matrix), Math.abs(s.object.up.dot(Qs.direction)) < xb ? t.lookAt(s.target) : (op.setFromNormalAndCoplanarPoint(s.object.up, s.target), Qs.intersectPlane(op, s.target))));
        } else s.object instanceof So && s.object.isOrthographicCamera && (ot = B !== 1, ot && (s.object.zoom = Math.max(s.minZoom, Math.min(s.maxZoom, s.object.zoom / B)), s.object.updateProjectionMatrix()));
        return B = 1, O = !1, ot || ne.distanceToSquared(s.object.position) > g || 8 * (1 - xn.dot(s.object.quaternion)) > g ? (s.dispatchEvent(l), ne.copy(s.object.position), xn.copy(s.object.quaternion), ot = !1, !0) : !1;
      };
    })(), this.connect = (w) => {
      s.domElement = w, s.domElement.style.touchAction = "none", s.domElement.addEventListener("contextmenu", to), s.domElement.addEventListener("pointerdown", lt), s.domElement.addEventListener("pointercancel", ut), s.domElement.addEventListener("wheel", Gn);
    }, this.dispose = () => {
      var w, Z, ge, Je, ne, xn;
      s.domElement && (s.domElement.style.touchAction = "auto"), (w = s.domElement) == null || w.removeEventListener("contextmenu", to), (Z = s.domElement) == null || Z.removeEventListener("pointerdown", lt), (ge = s.domElement) == null || ge.removeEventListener("pointercancel", ut), (Je = s.domElement) == null || Je.removeEventListener("wheel", Gn), (ne = s.domElement) == null || ne.ownerDocument.removeEventListener("pointermove", ln), (xn = s.domElement) == null || xn.ownerDocument.removeEventListener("pointerup", ut), s._domElementKeyEvents !== null && s._domElementKeyEvents.removeEventListener("keydown", Nt);
    };
    const s = this, l = { type: "change" }, c = { type: "start" }, d = { type: "end" }, h = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let p = h.NONE;
    const g = 1e-6, v = new Id(), A = new Id();
    let B = 1;
    const C = new Ke(), E = new $n(), G = new $n(), x = new $n(), I = new $n(), F = new $n(), z = new $n(), P = new $n(), j = new $n(), R = new $n(), re = new Ke(), J = new $n();
    let O = !1;
    const K = [], ae = {};
    function ve() {
      return 2 * Math.PI / 60 / 60 * s.autoRotateSpeed;
    }
    function W() {
      return Math.pow(0.95, s.zoomSpeed);
    }
    function le(w) {
      s.reverseOrbit || s.reverseHorizontalOrbit ? A.theta += w : A.theta -= w;
    }
    function pe(w) {
      s.reverseOrbit || s.reverseVerticalOrbit ? A.phi += w : A.phi -= w;
    }
    const _ = (() => {
      const w = new Ke();
      return function(ge, Je) {
        w.setFromMatrixColumn(Je, 0), w.multiplyScalar(-ge), C.add(w);
      };
    })(), q = (() => {
      const w = new Ke();
      return function(ge, Je) {
        s.screenSpacePanning === !0 ? w.setFromMatrixColumn(Je, 1) : (w.setFromMatrixColumn(Je, 0), w.crossVectors(s.object.up, w)), w.multiplyScalar(ge), C.add(w);
      };
    })(), de = (() => {
      const w = new Ke();
      return function(ge, Je) {
        const ne = s.domElement;
        if (ne && s.object instanceof fi && s.object.isPerspectiveCamera) {
          const xn = s.object.position;
          w.copy(xn).sub(s.target);
          let rt = w.length();
          rt *= Math.tan(s.object.fov / 2 * Math.PI / 180), _(2 * ge * rt / ne.clientHeight, s.object.matrix), q(2 * Je * rt / ne.clientHeight, s.object.matrix);
        } else ne && s.object instanceof So && s.object.isOrthographicCamera ? (_(
          ge * (s.object.right - s.object.left) / s.object.zoom / ne.clientWidth,
          s.object.matrix
        ), q(
          Je * (s.object.top - s.object.bottom) / s.object.zoom / ne.clientHeight,
          s.object.matrix
        )) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), s.enablePan = !1);
      };
    })();
    function fe(w) {
      s.object instanceof fi && s.object.isPerspectiveCamera || s.object instanceof So && s.object.isOrthographicCamera ? B = w : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), s.enableZoom = !1);
    }
    function ce(w) {
      fe(B / w);
    }
    function Be(w) {
      fe(B * w);
    }
    function he(w) {
      if (!s.zoomToCursor || !s.domElement)
        return;
      O = !0;
      const Z = s.domElement.getBoundingClientRect(), ge = w.clientX - Z.left, Je = w.clientY - Z.top, ne = Z.width, xn = Z.height;
      J.x = ge / ne * 2 - 1, J.y = -(Je / xn) * 2 + 1, re.set(J.x, J.y, 1).unproject(s.object).sub(s.object.position).normalize();
    }
    function Ce(w) {
      return Math.max(s.minDistance, Math.min(s.maxDistance, w));
    }
    function Fe(w) {
      E.set(w.clientX, w.clientY);
    }
    function an(w) {
      he(w), P.set(w.clientX, w.clientY);
    }
    function xe(w) {
      I.set(w.clientX, w.clientY);
    }
    function Hn(w) {
      G.set(w.clientX, w.clientY), x.subVectors(G, E).multiplyScalar(s.rotateSpeed);
      const Z = s.domElement;
      Z && (le(2 * Math.PI * x.x / Z.clientHeight), pe(2 * Math.PI * x.y / Z.clientHeight)), E.copy(G), s.update();
    }
    function dn(w) {
      j.set(w.clientX, w.clientY), R.subVectors(j, P), R.y > 0 ? ce(W()) : R.y < 0 && Be(W()), P.copy(j), s.update();
    }
    function Yn(w) {
      F.set(w.clientX, w.clientY), z.subVectors(F, I).multiplyScalar(s.panSpeed), de(z.x, z.y), I.copy(F), s.update();
    }
    function Cn(w) {
      he(w), w.deltaY < 0 ? Be(W()) : w.deltaY > 0 && ce(W()), s.update();
    }
    function Ye(w) {
      let Z = !1;
      switch (w.code) {
        case s.keys.UP:
          de(0, s.keyPanSpeed), Z = !0;
          break;
        case s.keys.BOTTOM:
          de(0, -s.keyPanSpeed), Z = !0;
          break;
        case s.keys.LEFT:
          de(s.keyPanSpeed, 0), Z = !0;
          break;
        case s.keys.RIGHT:
          de(-s.keyPanSpeed, 0), Z = !0;
          break;
      }
      Z && (w.preventDefault(), s.update());
    }
    function Rn() {
      if (K.length == 1)
        E.set(K[0].pageX, K[0].pageY);
      else {
        const w = 0.5 * (K[0].pageX + K[1].pageX), Z = 0.5 * (K[0].pageY + K[1].pageY);
        E.set(w, Z);
      }
    }
    function pn() {
      if (K.length == 1)
        I.set(K[0].pageX, K[0].pageY);
      else {
        const w = 0.5 * (K[0].pageX + K[1].pageX), Z = 0.5 * (K[0].pageY + K[1].pageY);
        I.set(w, Z);
      }
    }
    function nt() {
      const w = K[0].pageX - K[1].pageX, Z = K[0].pageY - K[1].pageY, ge = Math.sqrt(w * w + Z * Z);
      P.set(0, ge);
    }
    function tt() {
      s.enableZoom && nt(), s.enablePan && pn();
    }
    function at() {
      s.enableZoom && nt(), s.enableRotate && Rn();
    }
    function vn(w) {
      if (K.length == 1)
        G.set(w.pageX, w.pageY);
      else {
        const ge = mr(w), Je = 0.5 * (w.pageX + ge.x), ne = 0.5 * (w.pageY + ge.y);
        G.set(Je, ne);
      }
      x.subVectors(G, E).multiplyScalar(s.rotateSpeed);
      const Z = s.domElement;
      Z && (le(2 * Math.PI * x.x / Z.clientHeight), pe(2 * Math.PI * x.y / Z.clientHeight)), E.copy(G);
    }
    function Ht(w) {
      if (K.length == 1)
        F.set(w.pageX, w.pageY);
      else {
        const Z = mr(w), ge = 0.5 * (w.pageX + Z.x), Je = 0.5 * (w.pageY + Z.y);
        F.set(ge, Je);
      }
      z.subVectors(F, I).multiplyScalar(s.panSpeed), de(z.x, z.y), I.copy(F);
    }
    function Ft(w) {
      const Z = mr(w), ge = w.pageX - Z.x, Je = w.pageY - Z.y, ne = Math.sqrt(ge * ge + Je * Je);
      j.set(0, ne), R.set(0, Math.pow(j.y / P.y, s.zoomSpeed)), ce(R.y), P.copy(j);
    }
    function At(w) {
      s.enableZoom && Ft(w), s.enablePan && Ht(w);
    }
    function Vt(w) {
      s.enableZoom && Ft(w), s.enableRotate && vn(w);
    }
    function lt(w) {
      var Z, ge;
      s.enabled !== !1 && (K.length === 0 && ((Z = s.domElement) == null || Z.ownerDocument.addEventListener("pointermove", ln), (ge = s.domElement) == null || ge.ownerDocument.addEventListener("pointerup", ut)), To(w), w.pointerType === "touch" ? Nn(w) : qt(w));
    }
    function ln(w) {
      s.enabled !== !1 && (w.pointerType === "touch" ? $t(w) : hr(w));
    }
    function ut(w) {
      var Z, ge, Je;
      er(w), K.length === 0 && ((Z = s.domElement) == null || Z.releasePointerCapture(w.pointerId), (ge = s.domElement) == null || ge.ownerDocument.removeEventListener("pointermove", ln), (Je = s.domElement) == null || Je.ownerDocument.removeEventListener("pointerup", ut)), s.dispatchEvent(d), p = h.NONE;
    }
    function qt(w) {
      let Z;
      switch (w.button) {
        case 0:
          Z = s.mouseButtons.LEFT;
          break;
        case 1:
          Z = s.mouseButtons.MIDDLE;
          break;
        case 2:
          Z = s.mouseButtons.RIGHT;
          break;
        default:
          Z = -1;
      }
      switch (Z) {
        case ri.DOLLY:
          if (s.enableZoom === !1)
            return;
          an(w), p = h.DOLLY;
          break;
        case ri.ROTATE:
          if (w.ctrlKey || w.metaKey || w.shiftKey) {
            if (s.enablePan === !1)
              return;
            xe(w), p = h.PAN;
          } else {
            if (s.enableRotate === !1)
              return;
            Fe(w), p = h.ROTATE;
          }
          break;
        case ri.PAN:
          if (w.ctrlKey || w.metaKey || w.shiftKey) {
            if (s.enableRotate === !1)
              return;
            Fe(w), p = h.ROTATE;
          } else {
            if (s.enablePan === !1)
              return;
            xe(w), p = h.PAN;
          }
          break;
        default:
          p = h.NONE;
      }
      p !== h.NONE && s.dispatchEvent(c);
    }
    function hr(w) {
      if (s.enabled !== !1)
        switch (p) {
          case h.ROTATE:
            if (s.enableRotate === !1)
              return;
            Hn(w);
            break;
          case h.DOLLY:
            if (s.enableZoom === !1)
              return;
            dn(w);
            break;
          case h.PAN:
            if (s.enablePan === !1)
              return;
            Yn(w);
            break;
        }
    }
    function Gn(w) {
      s.enabled === !1 || s.enableZoom === !1 || p !== h.NONE && p !== h.ROTATE || (w.preventDefault(), s.dispatchEvent(c), Cn(w), s.dispatchEvent(d));
    }
    function Nt(w) {
      s.enabled === !1 || s.enablePan === !1 || Ye(w);
    }
    function Nn(w) {
      switch (En(w), K.length) {
        case 1:
          switch (s.touches.ONE) {
            case oi.ROTATE:
              if (s.enableRotate === !1)
                return;
              Rn(), p = h.TOUCH_ROTATE;
              break;
            case oi.PAN:
              if (s.enablePan === !1)
                return;
              pn(), p = h.TOUCH_PAN;
              break;
            default:
              p = h.NONE;
          }
          break;
        case 2:
          switch (s.touches.TWO) {
            case oi.DOLLY_PAN:
              if (s.enableZoom === !1 && s.enablePan === !1)
                return;
              tt(), p = h.TOUCH_DOLLY_PAN;
              break;
            case oi.DOLLY_ROTATE:
              if (s.enableZoom === !1 && s.enableRotate === !1)
                return;
              at(), p = h.TOUCH_DOLLY_ROTATE;
              break;
            default:
              p = h.NONE;
          }
          break;
        default:
          p = h.NONE;
      }
      p !== h.NONE && s.dispatchEvent(c);
    }
    function $t(w) {
      switch (En(w), p) {
        case h.TOUCH_ROTATE:
          if (s.enableRotate === !1)
            return;
          vn(w), s.update();
          break;
        case h.TOUCH_PAN:
          if (s.enablePan === !1)
            return;
          Ht(w), s.update();
          break;
        case h.TOUCH_DOLLY_PAN:
          if (s.enableZoom === !1 && s.enablePan === !1)
            return;
          At(w), s.update();
          break;
        case h.TOUCH_DOLLY_ROTATE:
          if (s.enableZoom === !1 && s.enableRotate === !1)
            return;
          Vt(w), s.update();
          break;
        default:
          p = h.NONE;
      }
    }
    function to(w) {
      s.enabled !== !1 && w.preventDefault();
    }
    function To(w) {
      K.push(w);
    }
    function er(w) {
      delete ae[w.pointerId];
      for (let Z = 0; Z < K.length; Z++)
        if (K[Z].pointerId == w.pointerId) {
          K.splice(Z, 1);
          return;
        }
    }
    function En(w) {
      let Z = ae[w.pointerId];
      Z === void 0 && (Z = new $n(), ae[w.pointerId] = Z), Z.set(w.pageX, w.pageY);
    }
    function mr(w) {
      const Z = w.pointerId === K[0].pointerId ? K[1] : K[0];
      return ae[Z.pointerId];
    }
    this.dollyIn = (w = W()) => {
      Be(w), s.update();
    }, this.dollyOut = (w = W()) => {
      ce(w), s.update();
    }, this.getScale = () => B, this.setScale = (w) => {
      fe(w), s.update();
    }, this.getZoomScale = () => W(), i !== void 0 && this.connect(i), this.update();
  }
};
function da(a) {
  if (typeof TextDecoder < "u")
    return new TextDecoder().decode(a);
  let t = "";
  for (let i = 0, s = a.length; i < s; i++)
    t += String.fromCharCode(a[i]);
  try {
    return decodeURIComponent(escape(t));
  } catch {
    return t;
  }
}
const Eo = "srgb", Dr = "srgb-linear", sp = 3001, Db = 3e3;
class Uu extends xu {
  constructor(t) {
    super(t), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(i) {
      return new Pb(i);
    }), this.register(function(i) {
      return new Hb(i);
    }), this.register(function(i) {
      return new Yb(i);
    }), this.register(function(i) {
      return new Wb(i);
    }), this.register(function(i) {
      return new Zb(i);
    }), this.register(function(i) {
      return new Ub(i);
    }), this.register(function(i) {
      return new zb(i);
    }), this.register(function(i) {
      return new Jb(i);
    }), this.register(function(i) {
      return new jb(i);
    }), this.register(function(i) {
      return new kb(i);
    }), this.register(function(i) {
      return new Kb(i);
    }), this.register(function(i) {
      return new Nb(i);
    }), this.register(function(i) {
      return new Xb(i);
    }), this.register(function(i) {
      return new Qb(i);
    }), this.register(function(i) {
      return new Gb(i);
    }), this.register(function(i) {
      return new Vb(i);
    }), this.register(function(i) {
      return new qb(i);
    });
  }
  load(t, i, s, l) {
    const c = this;
    let d;
    if (this.resourcePath !== "")
      d = this.resourcePath;
    else if (this.path !== "") {
      const g = Qi.extractUrlBase(t);
      d = Qi.resolveURL(g, this.path);
    } else
      d = Qi.extractUrlBase(t);
    this.manager.itemStart(t);
    const h = function(g) {
      l ? l(g) : console.error(g), c.manager.itemError(t), c.manager.itemEnd(t);
    }, p = new eo(this.manager);
    p.setPath(this.path), p.setResponseType("arraybuffer"), p.setRequestHeader(this.requestHeader), p.setWithCredentials(this.withCredentials), p.load(
      t,
      function(g) {
        try {
          c.parse(
            g,
            d,
            function(v) {
              i(v), c.manager.itemEnd(t);
            },
            h
          );
        } catch (v) {
          h(v);
        }
      },
      s,
      h
    );
  }
  setDRACOLoader(t) {
    return this.dracoLoader = t, this;
  }
  setDDSLoader() {
    throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".');
  }
  setKTX2Loader(t) {
    return this.ktx2Loader = t, this;
  }
  setMeshoptDecoder(t) {
    return this.meshoptDecoder = t, this;
  }
  register(t) {
    return this.pluginCallbacks.indexOf(t) === -1 && this.pluginCallbacks.push(t), this;
  }
  unregister(t) {
    return this.pluginCallbacks.indexOf(t) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t), 1), this;
  }
  parse(t, i, s, l) {
    let c;
    const d = {}, h = {};
    if (typeof t == "string")
      c = JSON.parse(t);
    else if (t instanceof ArrayBuffer)
      if (da(new Uint8Array(t.slice(0, 4))) === ah) {
        try {
          d[ze.KHR_BINARY_GLTF] = new $b(t);
        } catch (v) {
          l && l(v);
          return;
        }
        c = JSON.parse(d[ze.KHR_BINARY_GLTF].content);
      } else
        c = JSON.parse(da(new Uint8Array(t)));
    else
      c = t;
    if (c.asset === void 0 || c.asset.version[0] < 2) {
      l && l(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const p = new dB(c, {
      path: i || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    p.fileLoader.setRequestHeader(this.requestHeader);
    for (let g = 0; g < this.pluginCallbacks.length; g++) {
      const v = this.pluginCallbacks[g](p);
      v.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), h[v.name] = v, d[v.name] = !0;
    }
    if (c.extensionsUsed)
      for (let g = 0; g < c.extensionsUsed.length; ++g) {
        const v = c.extensionsUsed[g], A = c.extensionsRequired || [];
        switch (v) {
          case ze.KHR_MATERIALS_UNLIT:
            d[v] = new Ob();
            break;
          case ze.KHR_DRACO_MESH_COMPRESSION:
            d[v] = new eB(c, this.dracoLoader);
            break;
          case ze.KHR_TEXTURE_TRANSFORM:
            d[v] = new nB();
            break;
          case ze.KHR_MESH_QUANTIZATION:
            d[v] = new tB();
            break;
          default:
            A.indexOf(v) >= 0 && h[v] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + v + '".');
        }
      }
    p.setExtensions(d), p.setPlugins(h), p.parse(s, l);
  }
  parseAsync(t, i) {
    const s = this;
    return new Promise(function(l, c) {
      s.parse(t, i, l, c);
    });
  }
}
function Lb() {
  let a = {};
  return {
    get: function(t) {
      return a[t];
    },
    add: function(t, i) {
      a[t] = i;
    },
    remove: function(t) {
      delete a[t];
    },
    removeAll: function() {
      a = {};
    }
  };
}
const ze = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class Gb {
  constructor(t) {
    this.parser = t, this.name = ze.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const t = this.parser, i = this.parser.json.nodes || [];
    for (let s = 0, l = i.length; s < l; s++) {
      const c = i[s];
      c.extensions && c.extensions[this.name] && c.extensions[this.name].light !== void 0 && t._addNodeRef(this.cache, c.extensions[this.name].light);
    }
  }
  _loadLight(t) {
    const i = this.parser, s = "light:" + t;
    let l = i.cache.get(s);
    if (l)
      return l;
    const c = i.json, p = ((c.extensions && c.extensions[this.name] || {}).lights || [])[t];
    let g;
    const v = new no(16777215);
    p.color !== void 0 && v.setRGB(p.color[0], p.color[1], p.color[2], Dr);
    const A = p.range !== void 0 ? p.range : 0;
    switch (p.type) {
      case "directional":
        g = new Qg(v), g.target.position.set(0, 0, -1), g.add(g.target);
        break;
      case "point":
        g = new Kg(v), g.distance = A;
        break;
      case "spot":
        g = new jg(v), g.distance = A, p.spot = p.spot || {}, p.spot.innerConeAngle = p.spot.innerConeAngle !== void 0 ? p.spot.innerConeAngle : 0, p.spot.outerConeAngle = p.spot.outerConeAngle !== void 0 ? p.spot.outerConeAngle : Math.PI / 4, g.angle = p.spot.outerConeAngle, g.penumbra = 1 - p.spot.innerConeAngle / p.spot.outerConeAngle, g.target.position.set(0, 0, -1), g.add(g.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + p.type);
    }
    return g.position.set(0, 0, 0), g.decay = 2, Rr(g, p), p.intensity !== void 0 && (g.intensity = p.intensity), g.name = i.createUniqueName(p.name || "light_" + t), l = Promise.resolve(g), i.cache.add(s, l), l;
  }
  getDependency(t, i) {
    if (t === "light")
      return this._loadLight(i);
  }
  createNodeAttachment(t) {
    const i = this, s = this.parser, c = s.json.nodes[t], h = (c.extensions && c.extensions[this.name] || {}).light;
    return h === void 0 ? null : this._loadLight(h).then(function(p) {
      return s._getNodeRef(i.cache, h, p);
    });
  }
}
class Ob {
  constructor() {
    this.name = ze.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return li;
  }
  extendParams(t, i, s) {
    const l = [];
    t.color = new no(1, 1, 1), t.opacity = 1;
    const c = i.pbrMetallicRoughness;
    if (c) {
      if (Array.isArray(c.baseColorFactor)) {
        const d = c.baseColorFactor;
        t.color.setRGB(d[0], d[1], d[2], Dr), t.opacity = d[3];
      }
      c.baseColorTexture !== void 0 && l.push(s.assignTexture(t, "map", c.baseColorTexture, Eo));
    }
    return Promise.all(l);
  }
}
class kb {
  constructor(t) {
    this.parser = t, this.name = ze.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(t, i) {
    const l = this.parser.json.materials[t];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const c = l.extensions[this.name].emissiveStrength;
    return c !== void 0 && (i.emissiveIntensity = c), Promise.resolve();
  }
}
class Pb {
  constructor(t) {
    this.parser = t, this.name = ze.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(t) {
    const s = this.parser.json.materials[t];
    return !s.extensions || !s.extensions[this.name] ? null : pr;
  }
  extendMaterialParams(t, i) {
    const s = this.parser, l = s.json.materials[t];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const c = [], d = l.extensions[this.name];
    if (d.clearcoatFactor !== void 0 && (i.clearcoat = d.clearcoatFactor), d.clearcoatTexture !== void 0 && c.push(s.assignTexture(i, "clearcoatMap", d.clearcoatTexture)), d.clearcoatRoughnessFactor !== void 0 && (i.clearcoatRoughness = d.clearcoatRoughnessFactor), d.clearcoatRoughnessTexture !== void 0 && c.push(s.assignTexture(i, "clearcoatRoughnessMap", d.clearcoatRoughnessTexture)), d.clearcoatNormalTexture !== void 0 && (c.push(s.assignTexture(i, "clearcoatNormalMap", d.clearcoatNormalTexture)), d.clearcoatNormalTexture.scale !== void 0)) {
      const h = d.clearcoatNormalTexture.scale;
      i.clearcoatNormalScale = new $n(h, h);
    }
    return Promise.all(c);
  }
}
class Hb {
  constructor(t) {
    this.parser = t, this.name = ze.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(t) {
    const s = this.parser.json.materials[t];
    return !s.extensions || !s.extensions[this.name] ? null : pr;
  }
  extendMaterialParams(t, i) {
    const l = this.parser.json.materials[t];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const c = l.extensions[this.name];
    return i.dispersion = c.dispersion !== void 0 ? c.dispersion : 0, Promise.resolve();
  }
}
class Nb {
  constructor(t) {
    this.parser = t, this.name = ze.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(t) {
    const s = this.parser.json.materials[t];
    return !s.extensions || !s.extensions[this.name] ? null : pr;
  }
  extendMaterialParams(t, i) {
    const s = this.parser, l = s.json.materials[t];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const c = [], d = l.extensions[this.name];
    return d.iridescenceFactor !== void 0 && (i.iridescence = d.iridescenceFactor), d.iridescenceTexture !== void 0 && c.push(s.assignTexture(i, "iridescenceMap", d.iridescenceTexture)), d.iridescenceIor !== void 0 && (i.iridescenceIOR = d.iridescenceIor), i.iridescenceThicknessRange === void 0 && (i.iridescenceThicknessRange = [100, 400]), d.iridescenceThicknessMinimum !== void 0 && (i.iridescenceThicknessRange[0] = d.iridescenceThicknessMinimum), d.iridescenceThicknessMaximum !== void 0 && (i.iridescenceThicknessRange[1] = d.iridescenceThicknessMaximum), d.iridescenceThicknessTexture !== void 0 && c.push(
      s.assignTexture(i, "iridescenceThicknessMap", d.iridescenceThicknessTexture)
    ), Promise.all(c);
  }
}
class Ub {
  constructor(t) {
    this.parser = t, this.name = ze.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(t) {
    const s = this.parser.json.materials[t];
    return !s.extensions || !s.extensions[this.name] ? null : pr;
  }
  extendMaterialParams(t, i) {
    const s = this.parser, l = s.json.materials[t];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const c = [];
    i.sheenColor = new no(0, 0, 0), i.sheenRoughness = 0, i.sheen = 1;
    const d = l.extensions[this.name];
    if (d.sheenColorFactor !== void 0) {
      const h = d.sheenColorFactor;
      i.sheenColor.setRGB(h[0], h[1], h[2], Dr);
    }
    return d.sheenRoughnessFactor !== void 0 && (i.sheenRoughness = d.sheenRoughnessFactor), d.sheenColorTexture !== void 0 && c.push(s.assignTexture(i, "sheenColorMap", d.sheenColorTexture, Eo)), d.sheenRoughnessTexture !== void 0 && c.push(s.assignTexture(i, "sheenRoughnessMap", d.sheenRoughnessTexture)), Promise.all(c);
  }
}
class zb {
  constructor(t) {
    this.parser = t, this.name = ze.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(t) {
    const s = this.parser.json.materials[t];
    return !s.extensions || !s.extensions[this.name] ? null : pr;
  }
  extendMaterialParams(t, i) {
    const s = this.parser, l = s.json.materials[t];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const c = [], d = l.extensions[this.name];
    return d.transmissionFactor !== void 0 && (i.transmission = d.transmissionFactor), d.transmissionTexture !== void 0 && c.push(s.assignTexture(i, "transmissionMap", d.transmissionTexture)), Promise.all(c);
  }
}
class Jb {
  constructor(t) {
    this.parser = t, this.name = ze.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(t) {
    const s = this.parser.json.materials[t];
    return !s.extensions || !s.extensions[this.name] ? null : pr;
  }
  extendMaterialParams(t, i) {
    const s = this.parser, l = s.json.materials[t];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const c = [], d = l.extensions[this.name];
    i.thickness = d.thicknessFactor !== void 0 ? d.thicknessFactor : 0, d.thicknessTexture !== void 0 && c.push(s.assignTexture(i, "thicknessMap", d.thicknessTexture)), i.attenuationDistance = d.attenuationDistance || 1 / 0;
    const h = d.attenuationColor || [1, 1, 1];
    return i.attenuationColor = new no().setRGB(
      h[0],
      h[1],
      h[2],
      Dr
    ), Promise.all(c);
  }
}
class jb {
  constructor(t) {
    this.parser = t, this.name = ze.KHR_MATERIALS_IOR;
  }
  getMaterialType(t) {
    const s = this.parser.json.materials[t];
    return !s.extensions || !s.extensions[this.name] ? null : pr;
  }
  extendMaterialParams(t, i) {
    const l = this.parser.json.materials[t];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const c = l.extensions[this.name];
    return i.ior = c.ior !== void 0 ? c.ior : 1.5, Promise.resolve();
  }
}
class Kb {
  constructor(t) {
    this.parser = t, this.name = ze.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(t) {
    const s = this.parser.json.materials[t];
    return !s.extensions || !s.extensions[this.name] ? null : pr;
  }
  extendMaterialParams(t, i) {
    const s = this.parser, l = s.json.materials[t];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const c = [], d = l.extensions[this.name];
    i.specularIntensity = d.specularFactor !== void 0 ? d.specularFactor : 1, d.specularTexture !== void 0 && c.push(s.assignTexture(i, "specularIntensityMap", d.specularTexture));
    const h = d.specularColorFactor || [1, 1, 1];
    return i.specularColor = new no().setRGB(h[0], h[1], h[2], Dr), d.specularColorTexture !== void 0 && c.push(
      s.assignTexture(i, "specularColorMap", d.specularColorTexture, Eo)
    ), Promise.all(c);
  }
}
class Qb {
  constructor(t) {
    this.parser = t, this.name = ze.EXT_MATERIALS_BUMP;
  }
  getMaterialType(t) {
    const s = this.parser.json.materials[t];
    return !s.extensions || !s.extensions[this.name] ? null : pr;
  }
  extendMaterialParams(t, i) {
    const s = this.parser, l = s.json.materials[t];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const c = [], d = l.extensions[this.name];
    return i.bumpScale = d.bumpFactor !== void 0 ? d.bumpFactor : 1, d.bumpTexture !== void 0 && c.push(s.assignTexture(i, "bumpMap", d.bumpTexture)), Promise.all(c);
  }
}
class Xb {
  constructor(t) {
    this.parser = t, this.name = ze.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(t) {
    const s = this.parser.json.materials[t];
    return !s.extensions || !s.extensions[this.name] ? null : pr;
  }
  extendMaterialParams(t, i) {
    const s = this.parser, l = s.json.materials[t];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const c = [], d = l.extensions[this.name];
    return d.anisotropyStrength !== void 0 && (i.anisotropy = d.anisotropyStrength), d.anisotropyRotation !== void 0 && (i.anisotropyRotation = d.anisotropyRotation), d.anisotropyTexture !== void 0 && c.push(s.assignTexture(i, "anisotropyMap", d.anisotropyTexture)), Promise.all(c);
  }
}
class Yb {
  constructor(t) {
    this.parser = t, this.name = ze.KHR_TEXTURE_BASISU;
  }
  loadTexture(t) {
    const i = this.parser, s = i.json, l = s.textures[t];
    if (!l.extensions || !l.extensions[this.name])
      return null;
    const c = l.extensions[this.name], d = i.options.ktx2Loader;
    if (!d) {
      if (s.extensionsRequired && s.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return i.loadTextureImage(t, c.source, d);
  }
}
class Wb {
  constructor(t) {
    this.parser = t, this.name = ze.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(t) {
    const i = this.name, s = this.parser, l = s.json, c = l.textures[t];
    if (!c.extensions || !c.extensions[i])
      return null;
    const d = c.extensions[i], h = l.images[d.source];
    let p = s.textureLoader;
    if (h.uri) {
      const g = s.options.manager.getHandler(h.uri);
      g !== null && (p = g);
    }
    return this.detectSupport().then(function(g) {
      if (g)
        return s.loadTextureImage(t, d.source, p);
      if (l.extensionsRequired && l.extensionsRequired.indexOf(i) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return s.loadTexture(t);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(t) {
      const i = new Image();
      i.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", i.onload = i.onerror = function() {
        t(i.height === 1);
      };
    })), this.isSupported;
  }
}
class Zb {
  constructor(t) {
    this.parser = t, this.name = ze.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(t) {
    const i = this.name, s = this.parser, l = s.json, c = l.textures[t];
    if (!c.extensions || !c.extensions[i])
      return null;
    const d = c.extensions[i], h = l.images[d.source];
    let p = s.textureLoader;
    if (h.uri) {
      const g = s.options.manager.getHandler(h.uri);
      g !== null && (p = g);
    }
    return this.detectSupport().then(function(g) {
      if (g)
        return s.loadTextureImage(t, d.source, p);
      if (l.extensionsRequired && l.extensionsRequired.indexOf(i) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return s.loadTexture(t);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(t) {
      const i = new Image();
      i.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", i.onload = i.onerror = function() {
        t(i.height === 1);
      };
    })), this.isSupported;
  }
}
class Vb {
  constructor(t) {
    this.name = ze.EXT_MESHOPT_COMPRESSION, this.parser = t;
  }
  loadBufferView(t) {
    const i = this.parser.json, s = i.bufferViews[t];
    if (s.extensions && s.extensions[this.name]) {
      const l = s.extensions[this.name], c = this.parser.getDependency("buffer", l.buffer), d = this.parser.options.meshoptDecoder;
      if (!d || !d.supported) {
        if (i.extensionsRequired && i.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return c.then(function(h) {
        const p = l.byteOffset || 0, g = l.byteLength || 0, v = l.count, A = l.byteStride, B = new Uint8Array(h, p, g);
        return d.decodeGltfBufferAsync ? d.decodeGltfBufferAsync(v, A, B, l.mode, l.filter).then(function(C) {
          return C.buffer;
        }) : d.ready.then(function() {
          const C = new ArrayBuffer(v * A);
          return d.decodeGltfBuffer(
            new Uint8Array(C),
            v,
            A,
            B,
            l.mode,
            l.filter
          ), C;
        });
      });
    } else
      return null;
  }
}
class qb {
  constructor(t) {
    this.name = ze.EXT_MESH_GPU_INSTANCING, this.parser = t;
  }
  createNodeMesh(t) {
    const i = this.parser.json, s = i.nodes[t];
    if (!s.extensions || !s.extensions[this.name] || s.mesh === void 0)
      return null;
    const l = i.meshes[s.mesh];
    for (const g of l.primitives)
      if (g.mode !== Lt.TRIANGLES && g.mode !== Lt.TRIANGLE_STRIP && g.mode !== Lt.TRIANGLE_FAN && g.mode !== void 0)
        return null;
    const d = s.extensions[this.name].attributes, h = [], p = {};
    for (const g in d)
      h.push(
        this.parser.getDependency("accessor", d[g]).then((v) => (p[g] = v, p[g]))
      );
    return h.length < 1 ? null : (h.push(this.parser.createNodeMesh(t)), Promise.all(h).then((g) => {
      const v = g.pop(), A = v.isGroup ? v.children : [v], B = g[0].count, C = [];
      for (const E of A) {
        const G = new Zi(), x = new Ke(), I = new ia(), F = new Ke(1, 1, 1), z = new Xg(E.geometry, E.material, B);
        for (let P = 0; P < B; P++)
          p.TRANSLATION && x.fromBufferAttribute(p.TRANSLATION, P), p.ROTATION && I.fromBufferAttribute(p.ROTATION, P), p.SCALE && F.fromBufferAttribute(p.SCALE, P), z.setMatrixAt(P, G.compose(x, I, F));
        for (const P in p)
          if (P === "_COLOR_0") {
            const j = p[P];
            z.instanceColor = new Yg(j.array, j.itemSize, j.normalized);
          } else P !== "TRANSLATION" && P !== "ROTATION" && P !== "SCALE" && E.geometry.setAttribute(P, p[P]);
        Cp.prototype.copy.call(z, E), this.parser.assignFinalMaterial(z), C.push(z);
      }
      return v.isGroup ? (v.clear(), v.add(...C), v) : C[0];
    }));
  }
}
const ah = "glTF", zi = 12, ap = { JSON: 1313821514, BIN: 5130562 };
class $b {
  constructor(t) {
    this.name = ze.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const i = new DataView(t, 0, zi);
    if (this.header = {
      magic: da(new Uint8Array(t.slice(0, 4))),
      version: i.getUint32(4, !0),
      length: i.getUint32(8, !0)
    }, this.header.magic !== ah)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const s = this.header.length - zi, l = new DataView(t, zi);
    let c = 0;
    for (; c < s; ) {
      const d = l.getUint32(c, !0);
      c += 4;
      const h = l.getUint32(c, !0);
      if (c += 4, h === ap.JSON) {
        const p = new Uint8Array(t, zi + c, d);
        this.content = da(p);
      } else if (h === ap.BIN) {
        const p = zi + c;
        this.body = t.slice(p, p + d);
      }
      c += d;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class eB {
  constructor(t, i) {
    if (!i)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = ze.KHR_DRACO_MESH_COMPRESSION, this.json = t, this.dracoLoader = i, this.dracoLoader.preload();
  }
  decodePrimitive(t, i) {
    const s = this.json, l = this.dracoLoader, c = t.extensions[this.name].bufferView, d = t.extensions[this.name].attributes, h = {}, p = {}, g = {};
    for (const v in d) {
      const A = Iu[v] || v.toLowerCase();
      h[A] = d[v];
    }
    for (const v in t.attributes) {
      const A = Iu[v] || v.toLowerCase();
      if (d[v] !== void 0) {
        const B = s.accessors[t.attributes[v]], C = di[B.componentType];
        g[A] = C.name, p[A] = B.normalized === !0;
      }
    }
    return i.getDependency("bufferView", c).then(function(v) {
      return new Promise(function(A, B) {
        l.decodeDracoFile(
          v,
          function(C) {
            for (const E in C.attributes) {
              const G = C.attributes[E], x = p[E];
              x !== void 0 && (G.normalized = x);
            }
            A(C);
          },
          h,
          g,
          Dr,
          B
        );
      });
    });
  }
}
class nB {
  constructor() {
    this.name = ze.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(t, i) {
    return (i.texCoord === void 0 || i.texCoord === t.channel) && i.offset === void 0 && i.rotation === void 0 && i.scale === void 0 || (t = t.clone(), i.texCoord !== void 0 && (t.channel = i.texCoord), i.offset !== void 0 && t.offset.fromArray(i.offset), i.rotation !== void 0 && (t.rotation = i.rotation), i.scale !== void 0 && t.repeat.fromArray(i.scale), t.needsUpdate = !0), t;
  }
}
class tB {
  constructor() {
    this.name = ze.KHR_MESH_QUANTIZATION;
  }
}
class lh extends gA {
  constructor(t, i, s, l) {
    super(t, i, s, l);
  }
  copySampleValue_(t) {
    const i = this.resultBuffer, s = this.sampleValues, l = this.valueSize, c = t * l * 3 + l;
    for (let d = 0; d !== l; d++)
      i[d] = s[c + d];
    return i;
  }
  interpolate_(t, i, s, l) {
    const c = this.resultBuffer, d = this.sampleValues, h = this.valueSize, p = h * 2, g = h * 3, v = l - i, A = (s - i) / v, B = A * A, C = B * A, E = t * g, G = E - g, x = -2 * C + 3 * B, I = C - B, F = 1 - x, z = I - B + A;
    for (let P = 0; P !== h; P++) {
      const j = d[G + P + h], R = d[G + P + p] * v, re = d[E + P + h], J = d[E + P] * v;
      c[P] = F * j + z * R + x * re + I * J;
    }
    return c;
  }
}
const rB = /* @__PURE__ */ new ia();
class oB extends lh {
  interpolate_(t, i, s, l) {
    const c = super.interpolate_(t, i, s, l);
    return rB.fromArray(c).normalize().toArray(c), c;
  }
}
const Lt = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, di = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, lp = {
  9728: nA,
  9729: Ot,
  9984: eA,
  9985: $g,
  9986: qg,
  9987: Ep
}, up = {
  33071: xr,
  33648: tA,
  10497: hu
}, ru = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Iu = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  // uv => uv1, 4 uv channels
  // https://github.com/mrdoob/three.js/pull/25943
  // https://github.com/mrdoob/three.js/pull/25788
  ...rs >= 152 ? {
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3"
  } : {
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv2"
  },
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, Wr = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, iB = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: Ip,
  STEP: hA
}, ou = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function sB(a) {
  return a.DefaultMaterial === void 0 && (a.DefaultMaterial = new Sp({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: mA
  })), a.DefaultMaterial;
}
function Bo(a, t, i) {
  for (const s in i.extensions)
    a[s] === void 0 && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[s] = i.extensions[s]);
}
function Rr(a, t) {
  t.extras !== void 0 && (typeof t.extras == "object" ? Object.assign(a.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras));
}
function aB(a, t, i) {
  let s = !1, l = !1, c = !1;
  for (let g = 0, v = t.length; g < v; g++) {
    const A = t[g];
    if (A.POSITION !== void 0 && (s = !0), A.NORMAL !== void 0 && (l = !0), A.COLOR_0 !== void 0 && (c = !0), s && l && c)
      break;
  }
  if (!s && !l && !c)
    return Promise.resolve(a);
  const d = [], h = [], p = [];
  for (let g = 0, v = t.length; g < v; g++) {
    const A = t[g];
    if (s) {
      const B = A.POSITION !== void 0 ? i.getDependency("accessor", A.POSITION) : a.attributes.position;
      d.push(B);
    }
    if (l) {
      const B = A.NORMAL !== void 0 ? i.getDependency("accessor", A.NORMAL) : a.attributes.normal;
      h.push(B);
    }
    if (c) {
      const B = A.COLOR_0 !== void 0 ? i.getDependency("accessor", A.COLOR_0) : a.attributes.color;
      p.push(B);
    }
  }
  return Promise.all([
    Promise.all(d),
    Promise.all(h),
    Promise.all(p)
  ]).then(function(g) {
    const v = g[0], A = g[1], B = g[2];
    return s && (a.morphAttributes.position = v), l && (a.morphAttributes.normal = A), c && (a.morphAttributes.color = B), a.morphTargetsRelative = !0, a;
  });
}
function lB(a, t) {
  if (a.updateMorphTargets(), t.weights !== void 0)
    for (let i = 0, s = t.weights.length; i < s; i++)
      a.morphTargetInfluences[i] = t.weights[i];
  if (t.extras && Array.isArray(t.extras.targetNames)) {
    const i = t.extras.targetNames;
    if (a.morphTargetInfluences.length === i.length) {
      a.morphTargetDictionary = {};
      for (let s = 0, l = i.length; s < l; s++)
        a.morphTargetDictionary[i[s]] = s;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function uB(a) {
  let t;
  const i = a.extensions && a.extensions[ze.KHR_DRACO_MESH_COMPRESSION];
  if (i ? t = "draco:" + i.bufferView + ":" + i.indices + ":" + iu(i.attributes) : t = a.indices + ":" + iu(a.attributes) + ":" + a.mode, a.targets !== void 0)
    for (let s = 0, l = a.targets.length; s < l; s++)
      t += ":" + iu(a.targets[s]);
  return t;
}
function iu(a) {
  let t = "";
  const i = Object.keys(a).sort();
  for (let s = 0, l = i.length; s < l; s++)
    t += i[s] + ":" + a[i[s]] + ";";
  return t;
}
function Tu(a) {
  switch (a) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function cB(a) {
  return a.search(/\.jpe?g($|\?)/i) > 0 || a.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : a.search(/\.webp($|\?)/i) > 0 || a.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const fB = /* @__PURE__ */ new Zi();
class dB {
  constructor(t = {}, i = {}) {
    this.json = t, this.extensions = {}, this.plugins = {}, this.options = i, this.cache = new Lb(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let s = !1, l = !1, c = -1;
    typeof navigator < "u" && typeof navigator.userAgent < "u" && (s = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, l = navigator.userAgent.indexOf("Firefox") > -1, c = l ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || s || l && c < 98 ? this.textureLoader = new Wg(this.options.manager) : this.textureLoader = new Zg(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new eo(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(t) {
    this.extensions = t;
  }
  setPlugins(t) {
    this.plugins = t;
  }
  parse(t, i) {
    const s = this, l = this.json, c = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(d) {
      return d._markDefs && d._markDefs();
    }), Promise.all(
      this._invokeAll(function(d) {
        return d.beforeRoot && d.beforeRoot();
      })
    ).then(function() {
      return Promise.all([
        s.getDependencies("scene"),
        s.getDependencies("animation"),
        s.getDependencies("camera")
      ]);
    }).then(function(d) {
      const h = {
        scene: d[0][l.scene || 0],
        scenes: d[0],
        animations: d[1],
        cameras: d[2],
        asset: l.asset,
        parser: s,
        userData: {}
      };
      return Bo(c, h, l), Rr(h, l), Promise.all(
        s._invokeAll(function(p) {
          return p.afterRoot && p.afterRoot(h);
        })
      ).then(function() {
        for (const p of h.scenes)
          p.updateMatrixWorld();
        t(h);
      });
    }).catch(i);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const t = this.json.nodes || [], i = this.json.skins || [], s = this.json.meshes || [];
    for (let l = 0, c = i.length; l < c; l++) {
      const d = i[l].joints;
      for (let h = 0, p = d.length; h < p; h++)
        t[d[h]].isBone = !0;
    }
    for (let l = 0, c = t.length; l < c; l++) {
      const d = t[l];
      d.mesh !== void 0 && (this._addNodeRef(this.meshCache, d.mesh), d.skin !== void 0 && (s[d.mesh].isSkinnedMesh = !0)), d.camera !== void 0 && this._addNodeRef(this.cameraCache, d.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(t, i) {
    i !== void 0 && (t.refs[i] === void 0 && (t.refs[i] = t.uses[i] = 0), t.refs[i]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(t, i, s) {
    if (t.refs[i] <= 1)
      return s;
    const l = s.clone(), c = (d, h) => {
      const p = this.associations.get(d);
      p != null && this.associations.set(h, p);
      for (const [g, v] of d.children.entries())
        c(v, h.children[g]);
    };
    return c(s, l), l.name += "_instance_" + t.uses[i]++, l;
  }
  _invokeOne(t) {
    const i = Object.values(this.plugins);
    i.push(this);
    for (let s = 0; s < i.length; s++) {
      const l = t(i[s]);
      if (l)
        return l;
    }
    return null;
  }
  _invokeAll(t) {
    const i = Object.values(this.plugins);
    i.unshift(this);
    const s = [];
    for (let l = 0; l < i.length; l++) {
      const c = t(i[l]);
      c && s.push(c);
    }
    return s;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(t, i) {
    const s = t + ":" + i;
    let l = this.cache.get(s);
    if (!l) {
      switch (t) {
        case "scene":
          l = this.loadScene(i);
          break;
        case "node":
          l = this._invokeOne(function(c) {
            return c.loadNode && c.loadNode(i);
          });
          break;
        case "mesh":
          l = this._invokeOne(function(c) {
            return c.loadMesh && c.loadMesh(i);
          });
          break;
        case "accessor":
          l = this.loadAccessor(i);
          break;
        case "bufferView":
          l = this._invokeOne(function(c) {
            return c.loadBufferView && c.loadBufferView(i);
          });
          break;
        case "buffer":
          l = this.loadBuffer(i);
          break;
        case "material":
          l = this._invokeOne(function(c) {
            return c.loadMaterial && c.loadMaterial(i);
          });
          break;
        case "texture":
          l = this._invokeOne(function(c) {
            return c.loadTexture && c.loadTexture(i);
          });
          break;
        case "skin":
          l = this.loadSkin(i);
          break;
        case "animation":
          l = this._invokeOne(function(c) {
            return c.loadAnimation && c.loadAnimation(i);
          });
          break;
        case "camera":
          l = this.loadCamera(i);
          break;
        default:
          if (l = this._invokeOne(function(c) {
            return c != this && c.getDependency && c.getDependency(t, i);
          }), !l)
            throw new Error("Unknown type: " + t);
          break;
      }
      this.cache.add(s, l);
    }
    return l;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(t) {
    let i = this.cache.get(t);
    if (!i) {
      const s = this, l = this.json[t + (t === "mesh" ? "es" : "s")] || [];
      i = Promise.all(
        l.map(function(c, d) {
          return s.getDependency(t, d);
        })
      ), this.cache.add(t, i);
    }
    return i;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(t) {
    const i = this.json.buffers[t], s = this.fileLoader;
    if (i.type && i.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + i.type + " buffer type is not supported.");
    if (i.uri === void 0 && t === 0)
      return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);
    const l = this.options;
    return new Promise(function(c, d) {
      s.load(Qi.resolveURL(i.uri, l.path), c, void 0, function() {
        d(new Error('THREE.GLTFLoader: Failed to load buffer "' + i.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(t) {
    const i = this.json.bufferViews[t];
    return this.getDependency("buffer", i.buffer).then(function(s) {
      const l = i.byteLength || 0, c = i.byteOffset || 0;
      return s.slice(c, c + l);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(t) {
    const i = this, s = this.json, l = this.json.accessors[t];
    if (l.bufferView === void 0 && l.sparse === void 0) {
      const d = ru[l.type], h = di[l.componentType], p = l.normalized === !0, g = new h(l.count * d);
      return Promise.resolve(new Xi(g, d, p));
    }
    const c = [];
    return l.bufferView !== void 0 ? c.push(this.getDependency("bufferView", l.bufferView)) : c.push(null), l.sparse !== void 0 && (c.push(this.getDependency("bufferView", l.sparse.indices.bufferView)), c.push(this.getDependency("bufferView", l.sparse.values.bufferView))), Promise.all(c).then(function(d) {
      const h = d[0], p = ru[l.type], g = di[l.componentType], v = g.BYTES_PER_ELEMENT, A = v * p, B = l.byteOffset || 0, C = l.bufferView !== void 0 ? s.bufferViews[l.bufferView].byteStride : void 0, E = l.normalized === !0;
      let G, x;
      if (C && C !== A) {
        const I = Math.floor(B / C), F = "InterleavedBuffer:" + l.bufferView + ":" + l.componentType + ":" + I + ":" + l.count;
        let z = i.cache.get(F);
        z || (G = new g(h, I * C, l.count * C / v), z = new Vg(G, C / v), i.cache.add(F, z)), x = new yo(
          z,
          p,
          B % C / v,
          E
        );
      } else
        h === null ? G = new g(l.count * p) : G = new g(h, B, l.count * p), x = new Xi(G, p, E);
      if (l.sparse !== void 0) {
        const I = ru.SCALAR, F = di[l.sparse.indices.componentType], z = l.sparse.indices.byteOffset || 0, P = l.sparse.values.byteOffset || 0, j = new F(
          d[1],
          z,
          l.sparse.count * I
        ), R = new g(d[2], P, l.sparse.count * p);
        h !== null && (x = new Xi(
          x.array.slice(),
          x.itemSize,
          x.normalized
        ));
        for (let re = 0, J = j.length; re < J; re++) {
          const O = j[re];
          if (x.setX(O, R[re * p]), p >= 2 && x.setY(O, R[re * p + 1]), p >= 3 && x.setZ(O, R[re * p + 2]), p >= 4 && x.setW(O, R[re * p + 3]), p >= 5)
            throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return x;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(t) {
    const i = this.json, s = this.options, c = i.textures[t].source, d = i.images[c];
    let h = this.textureLoader;
    if (d.uri) {
      const p = s.manager.getHandler(d.uri);
      p !== null && (h = p);
    }
    return this.loadTextureImage(t, c, h);
  }
  loadTextureImage(t, i, s) {
    const l = this, c = this.json, d = c.textures[t], h = c.images[i], p = (h.uri || h.bufferView) + ":" + d.sampler;
    if (this.textureCache[p])
      return this.textureCache[p];
    const g = this.loadImageSource(i, s).then(function(v) {
      v.flipY = !1, v.name = d.name || h.name || "", v.name === "" && typeof h.uri == "string" && h.uri.startsWith("data:image/") === !1 && (v.name = h.uri);
      const B = (c.samplers || {})[d.sampler] || {};
      return v.magFilter = lp[B.magFilter] || Ot, v.minFilter = lp[B.minFilter] || Ep, v.wrapS = up[B.wrapS] || hu, v.wrapT = up[B.wrapT] || hu, l.associations.set(v, { textures: t }), v;
    }).catch(function() {
      return null;
    });
    return this.textureCache[p] = g, g;
  }
  loadImageSource(t, i) {
    const s = this, l = this.json, c = this.options;
    if (this.sourceCache[t] !== void 0)
      return this.sourceCache[t].then((A) => A.clone());
    const d = l.images[t], h = self.URL || self.webkitURL;
    let p = d.uri || "", g = !1;
    if (d.bufferView !== void 0)
      p = s.getDependency("bufferView", d.bufferView).then(function(A) {
        g = !0;
        const B = new Blob([A], { type: d.mimeType });
        return p = h.createObjectURL(B), p;
      });
    else if (d.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + t + " is missing URI and bufferView");
    const v = Promise.resolve(p).then(function(A) {
      return new Promise(function(B, C) {
        let E = B;
        i.isImageBitmapLoader === !0 && (E = function(G) {
          const x = new qr(G);
          x.needsUpdate = !0, B(x);
        }), i.load(Qi.resolveURL(A, c.path), E, void 0, C);
      });
    }).then(function(A) {
      return g === !0 && h.revokeObjectURL(p), Rr(A, d), A.userData.mimeType = d.mimeType || cB(d.uri), A;
    }).catch(function(A) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", p), A;
    });
    return this.sourceCache[t] = v, v;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(t, i, s, l) {
    const c = this;
    return this.getDependency("texture", s.index).then(function(d) {
      if (!d)
        return null;
      if (s.texCoord !== void 0 && s.texCoord > 0 && (d = d.clone(), d.channel = s.texCoord), c.extensions[ze.KHR_TEXTURE_TRANSFORM]) {
        const h = s.extensions !== void 0 ? s.extensions[ze.KHR_TEXTURE_TRANSFORM] : void 0;
        if (h) {
          const p = c.associations.get(d);
          d = c.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(d, h), c.associations.set(d, p);
        }
      }
      return l !== void 0 && (typeof l == "number" && (l = l === sp ? Eo : Dr), "colorSpace" in d ? d.colorSpace = l : d.encoding = l === Eo ? sp : Db), t[i] = d, d;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(t) {
    const i = t.geometry;
    let s = t.material;
    const l = i.attributes.tangent === void 0, c = i.attributes.color !== void 0, d = i.attributes.normal === void 0;
    if (t.isPoints) {
      const h = "PointsMaterial:" + s.uuid;
      let p = this.cache.get(h);
      p || (p = new rA(), Nl.prototype.copy.call(p, s), p.color.copy(s.color), p.map = s.map, p.sizeAttenuation = !1, this.cache.add(h, p)), s = p;
    } else if (t.isLine) {
      const h = "LineBasicMaterial:" + s.uuid;
      let p = this.cache.get(h);
      p || (p = new oA(), Nl.prototype.copy.call(p, s), p.color.copy(s.color), p.map = s.map, this.cache.add(h, p)), s = p;
    }
    if (l || c || d) {
      let h = "ClonedMaterial:" + s.uuid + ":";
      l && (h += "derivative-tangents:"), c && (h += "vertex-colors:"), d && (h += "flat-shading:");
      let p = this.cache.get(h);
      p || (p = s.clone(), c && (p.vertexColors = !0), d && (p.flatShading = !0), l && (p.normalScale && (p.normalScale.y *= -1), p.clearcoatNormalScale && (p.clearcoatNormalScale.y *= -1)), this.cache.add(h, p), this.associations.set(p, this.associations.get(s))), s = p;
    }
    t.material = s;
  }
  getMaterialType() {
    return Sp;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(t) {
    const i = this, s = this.json, l = this.extensions, c = s.materials[t];
    let d;
    const h = {}, p = c.extensions || {}, g = [];
    if (p[ze.KHR_MATERIALS_UNLIT]) {
      const A = l[ze.KHR_MATERIALS_UNLIT];
      d = A.getMaterialType(), g.push(A.extendParams(h, c, i));
    } else {
      const A = c.pbrMetallicRoughness || {};
      if (h.color = new no(1, 1, 1), h.opacity = 1, Array.isArray(A.baseColorFactor)) {
        const B = A.baseColorFactor;
        h.color.setRGB(B[0], B[1], B[2], Dr), h.opacity = B[3];
      }
      A.baseColorTexture !== void 0 && g.push(i.assignTexture(h, "map", A.baseColorTexture, Eo)), h.metalness = A.metallicFactor !== void 0 ? A.metallicFactor : 1, h.roughness = A.roughnessFactor !== void 0 ? A.roughnessFactor : 1, A.metallicRoughnessTexture !== void 0 && (g.push(i.assignTexture(h, "metalnessMap", A.metallicRoughnessTexture)), g.push(i.assignTexture(h, "roughnessMap", A.metallicRoughnessTexture))), d = this._invokeOne(function(B) {
        return B.getMaterialType && B.getMaterialType(t);
      }), g.push(
        Promise.all(
          this._invokeAll(function(B) {
            return B.extendMaterialParams && B.extendMaterialParams(t, h);
          })
        )
      );
    }
    c.doubleSided === !0 && (h.side = Ru);
    const v = c.alphaMode || ou.OPAQUE;
    if (v === ou.BLEND ? (h.transparent = !0, h.depthWrite = !1) : (h.transparent = !1, v === ou.MASK && (h.alphaTest = c.alphaCutoff !== void 0 ? c.alphaCutoff : 0.5)), c.normalTexture !== void 0 && d !== li && (g.push(i.assignTexture(h, "normalMap", c.normalTexture)), h.normalScale = new $n(1, 1), c.normalTexture.scale !== void 0)) {
      const A = c.normalTexture.scale;
      h.normalScale.set(A, A);
    }
    if (c.occlusionTexture !== void 0 && d !== li && (g.push(i.assignTexture(h, "aoMap", c.occlusionTexture)), c.occlusionTexture.strength !== void 0 && (h.aoMapIntensity = c.occlusionTexture.strength)), c.emissiveFactor !== void 0 && d !== li) {
      const A = c.emissiveFactor;
      h.emissive = new no().setRGB(
        A[0],
        A[1],
        A[2],
        Dr
      );
    }
    return c.emissiveTexture !== void 0 && d !== li && g.push(i.assignTexture(h, "emissiveMap", c.emissiveTexture, Eo)), Promise.all(g).then(function() {
      const A = new d(h);
      return c.name && (A.name = c.name), Rr(A, c), i.associations.set(A, { materials: t }), c.extensions && Bo(l, A, c), A;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(t) {
    const i = iA.sanitizeNodeName(t || "");
    return i in this.nodeNamesUsed ? i + "_" + ++this.nodeNamesUsed[i] : (this.nodeNamesUsed[i] = 0, i);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(t) {
    const i = this, s = this.extensions, l = this.primitiveCache;
    function c(h) {
      return s[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(h, i).then(function(p) {
        return cp(p, h, i);
      });
    }
    const d = [];
    for (let h = 0, p = t.length; h < p; h++) {
      const g = t[h], v = uB(g), A = l[v];
      if (A)
        d.push(A.promise);
      else {
        let B;
        g.extensions && g.extensions[ze.KHR_DRACO_MESH_COMPRESSION] ? B = c(g) : B = cp(new Mp(), g, i), l[v] = { primitive: g, promise: B }, d.push(B);
      }
    }
    return Promise.all(d);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(t) {
    const i = this, s = this.json, l = this.extensions, c = s.meshes[t], d = c.primitives, h = [];
    for (let p = 0, g = d.length; p < g; p++) {
      const v = d[p].material === void 0 ? sB(this.cache) : this.getDependency("material", d[p].material);
      h.push(v);
    }
    return h.push(i.loadGeometries(d)), Promise.all(h).then(function(p) {
      const g = p.slice(0, p.length - 1), v = p[p.length - 1], A = [];
      for (let C = 0, E = v.length; C < E; C++) {
        const G = v[C], x = d[C];
        let I;
        const F = g[C];
        if (x.mode === Lt.TRIANGLES || x.mode === Lt.TRIANGLE_STRIP || x.mode === Lt.TRIANGLE_FAN || x.mode === void 0)
          I = c.isSkinnedMesh === !0 ? new sA(G, F) : new es(G, F), I.isSkinnedMesh === !0 && I.normalizeSkinWeights(), x.mode === Lt.TRIANGLE_STRIP ? I.geometry = rp(I.geometry, yp) : x.mode === Lt.TRIANGLE_FAN && (I.geometry = rp(I.geometry, pu));
        else if (x.mode === Lt.LINES)
          I = new aA(G, F);
        else if (x.mode === Lt.LINE_STRIP)
          I = new lA(G, F);
        else if (x.mode === Lt.LINE_LOOP)
          I = new uA(G, F);
        else if (x.mode === Lt.POINTS)
          I = new cA(G, F);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + x.mode);
        Object.keys(I.geometry.morphAttributes).length > 0 && lB(I, c), I.name = i.createUniqueName(c.name || "mesh_" + t), Rr(I, c), x.extensions && Bo(l, I, x), i.assignFinalMaterial(I), A.push(I);
      }
      for (let C = 0, E = A.length; C < E; C++)
        i.associations.set(A[C], {
          meshes: t,
          primitives: C
        });
      if (A.length === 1)
        return c.extensions && Bo(l, A[0], c), A[0];
      const B = new Ul();
      c.extensions && Bo(l, B, c), i.associations.set(B, { meshes: t });
      for (let C = 0, E = A.length; C < E; C++)
        B.add(A[C]);
      return B;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(t) {
    let i;
    const s = this.json.cameras[t], l = s[s.type];
    if (!l) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return s.type === "perspective" ? i = new fi(
      wp.radToDeg(l.yfov),
      l.aspectRatio || 1,
      l.znear || 1,
      l.zfar || 2e6
    ) : s.type === "orthographic" && (i = new So(-l.xmag, l.xmag, l.ymag, -l.ymag, l.znear, l.zfar)), s.name && (i.name = this.createUniqueName(s.name)), Rr(i, s), Promise.resolve(i);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(t) {
    const i = this.json.skins[t], s = [];
    for (let l = 0, c = i.joints.length; l < c; l++)
      s.push(this._loadNodeShallow(i.joints[l]));
    return i.inverseBindMatrices !== void 0 ? s.push(this.getDependency("accessor", i.inverseBindMatrices)) : s.push(null), Promise.all(s).then(function(l) {
      const c = l.pop(), d = l, h = [], p = [];
      for (let g = 0, v = d.length; g < v; g++) {
        const A = d[g];
        if (A) {
          h.push(A);
          const B = new Zi();
          c !== null && B.fromArray(c.array, g * 16), p.push(B);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', i.joints[g]);
      }
      return new fA(h, p);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(t) {
    const i = this.json, s = this, l = i.animations[t], c = l.name ? l.name : "animation_" + t, d = [], h = [], p = [], g = [], v = [];
    for (let A = 0, B = l.channels.length; A < B; A++) {
      const C = l.channels[A], E = l.samplers[C.sampler], G = C.target, x = G.node, I = l.parameters !== void 0 ? l.parameters[E.input] : E.input, F = l.parameters !== void 0 ? l.parameters[E.output] : E.output;
      G.node !== void 0 && (d.push(this.getDependency("node", x)), h.push(this.getDependency("accessor", I)), p.push(this.getDependency("accessor", F)), g.push(E), v.push(G));
    }
    return Promise.all([
      Promise.all(d),
      Promise.all(h),
      Promise.all(p),
      Promise.all(g),
      Promise.all(v)
    ]).then(function(A) {
      const B = A[0], C = A[1], E = A[2], G = A[3], x = A[4], I = [];
      for (let F = 0, z = B.length; F < z; F++) {
        const P = B[F], j = C[F], R = E[F], re = G[F], J = x[F];
        if (P === void 0)
          continue;
        P.updateMatrix && P.updateMatrix();
        const O = s._createAnimationTracks(P, j, R, re, J);
        if (O)
          for (let K = 0; K < O.length; K++)
            I.push(O[K]);
      }
      return new dA(c, void 0, I);
    });
  }
  createNodeMesh(t) {
    const i = this.json, s = this, l = i.nodes[t];
    return l.mesh === void 0 ? null : s.getDependency("mesh", l.mesh).then(function(c) {
      const d = s._getNodeRef(s.meshCache, l.mesh, c);
      return l.weights !== void 0 && d.traverse(function(h) {
        if (h.isMesh)
          for (let p = 0, g = l.weights.length; p < g; p++)
            h.morphTargetInfluences[p] = l.weights[p];
      }), d;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(t) {
    const i = this.json, s = this, l = i.nodes[t], c = s._loadNodeShallow(t), d = [], h = l.children || [];
    for (let g = 0, v = h.length; g < v; g++)
      d.push(s.getDependency("node", h[g]));
    const p = l.skin === void 0 ? Promise.resolve(null) : s.getDependency("skin", l.skin);
    return Promise.all([c, Promise.all(d), p]).then(function(g) {
      const v = g[0], A = g[1], B = g[2];
      B !== null && v.traverse(function(C) {
        C.isSkinnedMesh && C.bind(B, fB);
      });
      for (let C = 0, E = A.length; C < E; C++)
        v.add(A[C]);
      return v;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(t) {
    const i = this.json, s = this.extensions, l = this;
    if (this.nodeCache[t] !== void 0)
      return this.nodeCache[t];
    const c = i.nodes[t], d = c.name ? l.createUniqueName(c.name) : "", h = [], p = l._invokeOne(function(g) {
      return g.createNodeMesh && g.createNodeMesh(t);
    });
    return p && h.push(p), c.camera !== void 0 && h.push(
      l.getDependency("camera", c.camera).then(function(g) {
        return l._getNodeRef(l.cameraCache, c.camera, g);
      })
    ), l._invokeAll(function(g) {
      return g.createNodeAttachment && g.createNodeAttachment(t);
    }).forEach(function(g) {
      h.push(g);
    }), this.nodeCache[t] = Promise.all(h).then(function(g) {
      let v;
      if (c.isBone === !0 ? v = new pA() : g.length > 1 ? v = new Ul() : g.length === 1 ? v = g[0] : v = new Cp(), v !== g[0])
        for (let A = 0, B = g.length; A < B; A++)
          v.add(g[A]);
      if (c.name && (v.userData.name = c.name, v.name = d), Rr(v, c), c.extensions && Bo(s, v, c), c.matrix !== void 0) {
        const A = new Zi();
        A.fromArray(c.matrix), v.applyMatrix4(A);
      } else
        c.translation !== void 0 && v.position.fromArray(c.translation), c.rotation !== void 0 && v.quaternion.fromArray(c.rotation), c.scale !== void 0 && v.scale.fromArray(c.scale);
      return l.associations.has(v) || l.associations.set(v, {}), l.associations.get(v).nodes = t, v;
    }), this.nodeCache[t];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(t) {
    const i = this.extensions, s = this.json.scenes[t], l = this, c = new Ul();
    s.name && (c.name = l.createUniqueName(s.name)), Rr(c, s), s.extensions && Bo(i, c, s);
    const d = s.nodes || [], h = [];
    for (let p = 0, g = d.length; p < g; p++)
      h.push(l.getDependency("node", d[p]));
    return Promise.all(h).then(function(p) {
      for (let v = 0, A = p.length; v < A; v++)
        c.add(p[v]);
      const g = (v) => {
        const A = /* @__PURE__ */ new Map();
        for (const [B, C] of l.associations)
          (B instanceof Nl || B instanceof qr) && A.set(B, C);
        return v.traverse((B) => {
          const C = l.associations.get(B);
          C != null && A.set(B, C);
        }), A;
      };
      return l.associations = g(c), c;
    });
  }
  _createAnimationTracks(t, i, s, l, c) {
    const d = [], h = t.name ? t.name : t.uuid, p = [];
    Wr[c.path] === Wr.weights ? t.traverse(function(B) {
      B.morphTargetInfluences && p.push(B.name ? B.name : B.uuid);
    }) : p.push(h);
    let g;
    switch (Wr[c.path]) {
      case Wr.weights:
        g = Fd;
        break;
      case Wr.rotation:
        g = Rd;
        break;
      case Wr.position:
      case Wr.scale:
        g = Td;
        break;
      default:
        s.itemSize === 1 ? g = Fd : g = Td;
        break;
    }
    const v = l.interpolation !== void 0 ? iB[l.interpolation] : Ip, A = this._getArrayFromAccessor(s);
    for (let B = 0, C = p.length; B < C; B++) {
      const E = new g(
        p[B] + "." + Wr[c.path],
        i.array,
        A,
        v
      );
      l.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(E), d.push(E);
    }
    return d;
  }
  _getArrayFromAccessor(t) {
    let i = t.array;
    if (t.normalized) {
      const s = Tu(i.constructor), l = new Float32Array(i.length);
      for (let c = 0, d = i.length; c < d; c++)
        l[c] = i[c] * s;
      i = l;
    }
    return i;
  }
  _createCubicSplineTrackInterpolant(t) {
    t.createInterpolant = function(s) {
      const l = this instanceof Rd ? oB : lh;
      return new l(this.times, this.values, this.getValueSize() / 3, s);
    }, t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function pB(a, t, i) {
  const s = t.attributes, l = new ga();
  if (s.POSITION !== void 0) {
    const h = i.json.accessors[s.POSITION], p = h.min, g = h.max;
    if (p !== void 0 && g !== void 0) {
      if (l.set(new Ke(p[0], p[1], p[2]), new Ke(g[0], g[1], g[2])), h.normalized) {
        const v = Tu(di[h.componentType]);
        l.min.multiplyScalar(v), l.max.multiplyScalar(v);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const c = t.targets;
  if (c !== void 0) {
    const h = new Ke(), p = new Ke();
    for (let g = 0, v = c.length; g < v; g++) {
      const A = c[g];
      if (A.POSITION !== void 0) {
        const B = i.json.accessors[A.POSITION], C = B.min, E = B.max;
        if (C !== void 0 && E !== void 0) {
          if (p.setX(Math.max(Math.abs(C[0]), Math.abs(E[0]))), p.setY(Math.max(Math.abs(C[1]), Math.abs(E[1]))), p.setZ(Math.max(Math.abs(C[2]), Math.abs(E[2]))), B.normalized) {
            const G = Tu(di[B.componentType]);
            p.multiplyScalar(G);
          }
          h.max(p);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    l.expandByVector(h);
  }
  a.boundingBox = l;
  const d = new _u();
  l.getCenter(d.center), d.radius = l.min.distanceTo(l.max) / 2, a.boundingSphere = d;
}
function cp(a, t, i) {
  const s = t.attributes, l = [];
  function c(d, h) {
    return i.getDependency("accessor", d).then(function(p) {
      a.setAttribute(h, p);
    });
  }
  for (const d in s) {
    const h = Iu[d] || d.toLowerCase();
    h in a.attributes || l.push(c(s[d], h));
  }
  if (t.indices !== void 0 && !a.index) {
    const d = i.getDependency("accessor", t.indices).then(function(h) {
      a.setIndex(h);
    });
    l.push(d);
  }
  return Rr(a, t), pB(a, t, i), Promise.all(l).then(function() {
    return t.targets !== void 0 ? aB(a, t.targets, i) : a;
  });
}
class hB extends Tp {
  constructor(t) {
    super(t), this.type = kt;
  }
  // adapted from http://www.graphics.cornell.edu/~bjw/rgbe.html
  parse(t) {
    const d = function(J, O) {
      switch (J) {
        case 1:
          throw new Error("THREE.RGBELoader: Read Error: " + (O || ""));
        case 2:
          throw new Error("THREE.RGBELoader: Write Error: " + (O || ""));
        case 3:
          throw new Error("THREE.RGBELoader: Bad File Format: " + (O || ""));
        default:
        case 4:
          throw new Error("THREE.RGBELoader: Memory Error: " + (O || ""));
      }
    }, A = function(J, O, K) {
      O = O || 1024;
      let ve = J.pos, W = -1, le = 0, pe = "", _ = String.fromCharCode.apply(null, new Uint16Array(J.subarray(ve, ve + 128)));
      for (; 0 > (W = _.indexOf(`
`)) && le < O && ve < J.byteLength; )
        pe += _, le += _.length, ve += 128, _ += String.fromCharCode.apply(null, new Uint16Array(J.subarray(ve, ve + 128)));
      return -1 < W ? (J.pos += le + W + 1, pe + _.slice(0, W)) : !1;
    }, B = function(J) {
      const O = /^#\?(\S+)/, K = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, ae = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, ve = /^\s*FORMAT=(\S+)\s*$/, W = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, le = {
        valid: 0,
        string: "",
        comments: "",
        programtype: "RGBE",
        format: "",
        gamma: 1,
        exposure: 1,
        width: 0,
        height: 0
      };
      let pe, _;
      for ((J.pos >= J.byteLength || !(pe = A(J))) && d(1, "no header found"), (_ = pe.match(O)) || d(3, "bad initial token"), le.valid |= 1, le.programtype = _[1], le.string += pe + `
`; pe = A(J), pe !== !1; ) {
        if (le.string += pe + `
`, pe.charAt(0) === "#") {
          le.comments += pe + `
`;
          continue;
        }
        if ((_ = pe.match(K)) && (le.gamma = parseFloat(_[1])), (_ = pe.match(ae)) && (le.exposure = parseFloat(_[1])), (_ = pe.match(ve)) && (le.valid |= 2, le.format = _[1]), (_ = pe.match(W)) && (le.valid |= 4, le.height = parseInt(_[1], 10), le.width = parseInt(_[2], 10)), le.valid & 2 && le.valid & 4)
          break;
      }
      return le.valid & 2 || d(3, "missing format specifier"), le.valid & 4 || d(3, "missing image size specifier"), le;
    }, C = function(J, O, K) {
      const ae = O;
      if (
        // run length encoding is not allowed so read flat
        ae < 8 || ae > 32767 || // this file is not run length encoded
        J[0] !== 2 || J[1] !== 2 || J[2] & 128
      )
        return new Uint8Array(J);
      ae !== (J[2] << 8 | J[3]) && d(3, "wrong scanline width");
      const ve = new Uint8Array(4 * O * K);
      ve.length || d(4, "unable to allocate buffer space");
      let W = 0, le = 0;
      const pe = 4 * ae, _ = new Uint8Array(4), q = new Uint8Array(pe);
      let de = K;
      for (; de > 0 && le < J.byteLength; ) {
        le + 4 > J.byteLength && d(1), _[0] = J[le++], _[1] = J[le++], _[2] = J[le++], _[3] = J[le++], (_[0] != 2 || _[1] != 2 || (_[2] << 8 | _[3]) != ae) && d(3, "bad rgbe scanline format");
        let fe = 0, ce;
        for (; fe < pe && le < J.byteLength; ) {
          ce = J[le++];
          const he = ce > 128;
          if (he && (ce -= 128), (ce === 0 || fe + ce > pe) && d(3, "bad scanline data"), he) {
            const Ce = J[le++];
            for (let Fe = 0; Fe < ce; Fe++)
              q[fe++] = Ce;
          } else
            q.set(J.subarray(le, le + ce), fe), fe += ce, le += ce;
        }
        const Be = ae;
        for (let he = 0; he < Be; he++) {
          let Ce = 0;
          ve[W] = q[he + Ce], Ce += ae, ve[W + 1] = q[he + Ce], Ce += ae, ve[W + 2] = q[he + Ce], Ce += ae, ve[W + 3] = q[he + Ce], W += 4;
        }
        de--;
      }
      return ve;
    }, E = function(J, O, K, ae) {
      const ve = J[O + 3], W = Math.pow(2, ve - 128) / 255;
      K[ae + 0] = J[O + 0] * W, K[ae + 1] = J[O + 1] * W, K[ae + 2] = J[O + 2] * W, K[ae + 3] = 1;
    }, G = function(J, O, K, ae) {
      const ve = J[O + 3], W = Math.pow(2, ve - 128) / 255;
      K[ae + 0] = ui.toHalfFloat(Math.min(J[O + 0] * W, 65504)), K[ae + 1] = ui.toHalfFloat(Math.min(J[O + 1] * W, 65504)), K[ae + 2] = ui.toHalfFloat(Math.min(J[O + 2] * W, 65504)), K[ae + 3] = ui.toHalfFloat(1);
    }, x = new Uint8Array(t);
    x.pos = 0;
    const I = B(x), F = I.width, z = I.height, P = C(x.subarray(x.pos), F, z);
    let j, R, re;
    switch (this.type) {
      case _r:
        re = P.length / 4;
        const J = new Float32Array(re * 4);
        for (let K = 0; K < re; K++)
          E(P, K * 4, J, K * 4);
        j = J, R = _r;
        break;
      case kt:
        re = P.length / 4;
        const O = new Uint16Array(re * 4);
        for (let K = 0; K < re; K++)
          G(P, K * 4, O, K * 4);
        j = O, R = kt;
        break;
      default:
        throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
    }
    return {
      width: F,
      height: z,
      data: j,
      header: I.string,
      gamma: I.gamma,
      exposure: I.exposure,
      type: R
    };
  }
  setDataType(t) {
    return this.type = t, this;
  }
  load(t, i, s, l) {
    function c(d, h) {
      switch (d.type) {
        case _r:
        case kt:
          "colorSpace" in d ? d.colorSpace = "srgb-linear" : d.encoding = 3e3, d.minFilter = Ot, d.magFilter = Ot, d.generateMipmaps = !1, d.flipY = !0;
          break;
      }
      i && i(d, h);
    }
    return super.load(t, c, s, l);
  }
}
const Ji = rs >= 152;
class mB extends Tp {
  constructor(t) {
    super(t), this.type = kt;
  }
  parse(t) {
    const O = Math.pow(2.7182818, 2.2);
    function K(m, y) {
      for (var M = 0, D = 0; D < 65536; ++D)
        (D == 0 || m[D >> 3] & 1 << (D & 7)) && (y[M++] = D);
      for (var N = M - 1; M < 65536; )
        y[M++] = 0;
      return N;
    }
    function ae(m) {
      for (var y = 0; y < 16384; y++)
        m[y] = {}, m[y].len = 0, m[y].lit = 0, m[y].p = null;
    }
    const ve = { l: 0, c: 0, lc: 0 };
    function W(m, y, M, D, N) {
      for (; M < m; )
        y = y << 8 | mr(D, N), M += 8;
      M -= m, ve.l = y >> M & (1 << m) - 1, ve.c = y, ve.lc = M;
    }
    const le = new Array(59);
    function pe(m) {
      for (var y = 0; y <= 58; ++y)
        le[y] = 0;
      for (var y = 0; y < 65537; ++y)
        le[m[y]] += 1;
      for (var M = 0, y = 58; y > 0; --y) {
        var D = M + le[y] >> 1;
        le[y] = M, M = D;
      }
      for (var y = 0; y < 65537; ++y) {
        var N = m[y];
        N > 0 && (m[y] = N | le[N]++ << 6);
      }
    }
    function _(m, y, M, D, N, U, V) {
      for (var Y = M, ie = 0, oe = 0; N <= U; N++) {
        if (Y.value - M.value > D)
          return !1;
        W(6, ie, oe, m, Y);
        var se = ve.l;
        if (ie = ve.c, oe = ve.lc, V[N] = se, se == 63) {
          if (Y.value - M.value > D)
            throw "Something wrong with hufUnpackEncTable";
          W(8, ie, oe, m, Y);
          var te = ve.l + 6;
          if (ie = ve.c, oe = ve.lc, N + te > U + 1)
            throw "Something wrong with hufUnpackEncTable";
          for (; te--; )
            V[N++] = 0;
          N--;
        } else if (se >= 59) {
          var te = se - 59 + 2;
          if (N + te > U + 1)
            throw "Something wrong with hufUnpackEncTable";
          for (; te--; )
            V[N++] = 0;
          N--;
        }
      }
      pe(V);
    }
    function q(m) {
      return m & 63;
    }
    function de(m) {
      return m >> 6;
    }
    function fe(m, y, M, D) {
      for (; y <= M; y++) {
        var N = de(m[y]), U = q(m[y]);
        if (N >> U)
          throw "Invalid table entry";
        if (U > 14) {
          var V = D[N >> U - 14];
          if (V.len)
            throw "Invalid table entry";
          if (V.lit++, V.p) {
            var Y = V.p;
            V.p = new Array(V.lit);
            for (var ie = 0; ie < V.lit - 1; ++ie)
              V.p[ie] = Y[ie];
          } else
            V.p = new Array(1);
          V.p[V.lit - 1] = y;
        } else if (U)
          for (var oe = 0, ie = 1 << 14 - U; ie > 0; ie--) {
            var V = D[(N << 14 - U) + oe];
            if (V.len || V.p)
              throw "Invalid table entry";
            V.len = U, V.lit = y, oe++;
          }
      }
      return !0;
    }
    const ce = { c: 0, lc: 0 };
    function Be(m, y, M, D) {
      m = m << 8 | mr(M, D), y += 8, ce.c = m, ce.lc = y;
    }
    const he = { c: 0, lc: 0 };
    function Ce(m, y, M, D, N, U, V, Y, ie, oe) {
      if (m == y) {
        D < 8 && (Be(M, D, N, V), M = ce.c, D = ce.lc), D -= 8;
        var se = M >> D, se = new Uint8Array([se])[0];
        if (ie.value + se > oe)
          return !1;
        for (var te = Y[ie.value - 1]; se-- > 0; )
          Y[ie.value++] = te;
      } else if (ie.value < oe)
        Y[ie.value++] = m;
      else
        return !1;
      he.c = M, he.lc = D;
    }
    function Fe(m) {
      return m & 65535;
    }
    function an(m) {
      var y = Fe(m);
      return y > 32767 ? y - 65536 : y;
    }
    const xe = { a: 0, b: 0 };
    function Hn(m, y) {
      var M = an(m), D = an(y), N = D, U = M + (N & 1) + (N >> 1), V = U, Y = U - N;
      xe.a = V, xe.b = Y;
    }
    function dn(m, y) {
      var M = Fe(m), D = Fe(y), N = M - (D >> 1) & 65535, U = D + N - 32768 & 65535;
      xe.a = U, xe.b = N;
    }
    function Yn(m, y, M, D, N, U, V) {
      for (var Y = V < 16384, ie = M > N ? N : M, oe = 1, se; oe <= ie; )
        oe <<= 1;
      for (oe >>= 1, se = oe, oe >>= 1; oe >= 1; ) {
        for (var te = 0, on = te + U * (N - se), Ae = U * oe, ye = U * se, Re = D * oe, Ie = D * se, ke, qe, Ge, _n; te <= on; te += ye) {
          for (var $e = te, vt = te + D * (M - se); $e <= vt; $e += Ie) {
            var tn = $e + Re, Sn = $e + Ae, bt = Sn + Re;
            Y ? (Hn(m[$e + y], m[Sn + y]), ke = xe.a, Ge = xe.b, Hn(m[tn + y], m[bt + y]), qe = xe.a, _n = xe.b, Hn(ke, qe), m[$e + y] = xe.a, m[tn + y] = xe.b, Hn(Ge, _n), m[Sn + y] = xe.a, m[bt + y] = xe.b) : (dn(m[$e + y], m[Sn + y]), ke = xe.a, Ge = xe.b, dn(m[tn + y], m[bt + y]), qe = xe.a, _n = xe.b, dn(ke, qe), m[$e + y] = xe.a, m[tn + y] = xe.b, dn(Ge, _n), m[Sn + y] = xe.a, m[bt + y] = xe.b);
          }
          if (M & oe) {
            var Sn = $e + Ae;
            Y ? Hn(m[$e + y], m[Sn + y]) : dn(m[$e + y], m[Sn + y]), ke = xe.a, m[Sn + y] = xe.b, m[$e + y] = ke;
          }
        }
        if (N & oe)
          for (var $e = te, vt = te + D * (M - se); $e <= vt; $e += Ie) {
            var tn = $e + Re;
            Y ? Hn(m[$e + y], m[tn + y]) : dn(m[$e + y], m[tn + y]), ke = xe.a, m[tn + y] = xe.b, m[$e + y] = ke;
          }
        se = oe, oe >>= 1;
      }
      return te;
    }
    function Cn(m, y, M, D, N, U, V, Y, ie, oe) {
      for (var se = 0, te = 0, on = Y, Ae = Math.trunc(N.value + (U + 7) / 8); N.value < Ae; )
        for (Be(se, te, M, N), se = ce.c, te = ce.lc; te >= 14; ) {
          var ye = se >> te - 14 & 16383, Re = y[ye];
          if (Re.len)
            te -= Re.len, Ce(Re.lit, V, se, te, M, D, N, ie, oe, on), se = he.c, te = he.lc;
          else {
            if (!Re.p)
              throw "hufDecode issues";
            var Ie;
            for (Ie = 0; Ie < Re.lit; Ie++) {
              for (var ke = q(m[Re.p[Ie]]); te < ke && N.value < Ae; )
                Be(se, te, M, N), se = ce.c, te = ce.lc;
              if (te >= ke && de(m[Re.p[Ie]]) == (se >> te - ke & (1 << ke) - 1)) {
                te -= ke, Ce(
                  Re.p[Ie],
                  V,
                  se,
                  te,
                  M,
                  D,
                  N,
                  ie,
                  oe,
                  on
                ), se = he.c, te = he.lc;
                break;
              }
            }
            if (Ie == Re.lit)
              throw "hufDecode issues";
          }
        }
      var qe = 8 - U & 7;
      for (se >>= qe, te -= qe; te > 0; ) {
        var Re = y[se << 14 - te & 16383];
        if (Re.len)
          te -= Re.len, Ce(Re.lit, V, se, te, M, D, N, ie, oe, on), se = he.c, te = he.lc;
        else
          throw "hufDecode issues";
      }
      return !0;
    }
    function Ye(m, y, M, D, N, U) {
      var V = { value: 0 }, Y = M.value, ie = En(y, M), oe = En(y, M);
      M.value += 4;
      var se = En(y, M);
      if (M.value += 4, ie < 0 || ie >= 65537 || oe < 0 || oe >= 65537)
        throw "Something wrong with HUF_ENCSIZE";
      var te = new Array(65537), on = new Array(16384);
      ae(on);
      var Ae = D - (M.value - Y);
      if (_(m, y, M, Ae, ie, oe, te), se > 8 * (D - (M.value - Y)))
        throw "Something wrong with hufUncompress";
      fe(te, ie, oe, on), Cn(te, on, m, y, M, se, oe, U, N, V);
    }
    function Rn(m, y, M) {
      for (var D = 0; D < M; ++D)
        y[D] = m[y[D]];
    }
    function pn(m) {
      for (var y = 1; y < m.length; y++) {
        var M = m[y - 1] + m[y] - 128;
        m[y] = M;
      }
    }
    function nt(m, y) {
      for (var M = 0, D = Math.floor((m.length + 1) / 2), N = 0, U = m.length - 1; !(N > U || (y[N++] = m[M++], N > U)); )
        y[N++] = m[D++];
    }
    function tt(m) {
      for (var y = m.byteLength, M = new Array(), D = 0, N = new DataView(m); y > 0; ) {
        var U = N.getInt8(D++);
        if (U < 0) {
          var V = -U;
          y -= V + 1;
          for (var Y = 0; Y < V; Y++)
            M.push(N.getUint8(D++));
        } else {
          var V = U;
          y -= 2;
          for (var ie = N.getUint8(D++), Y = 0; Y < V + 1; Y++)
            M.push(ie);
        }
      }
      return M;
    }
    function at(m, y, M, D, N, U) {
      var tn = new DataView(U.buffer), V = M[m.idx[0]].width, Y = M[m.idx[0]].height, ie = 3, oe = Math.floor(V / 8), se = Math.ceil(V / 8), te = Math.ceil(Y / 8), on = V - (se - 1) * 8, Ae = Y - (te - 1) * 8, ye = { value: 0 }, Re = new Array(ie), Ie = new Array(ie), ke = new Array(ie), qe = new Array(ie), Ge = new Array(ie);
      for (let De = 0; De < ie; ++De)
        Ge[De] = y[m.idx[De]], Re[De] = De < 1 ? 0 : Re[De - 1] + se * te, Ie[De] = new Float32Array(64), ke[De] = new Uint16Array(64), qe[De] = new Uint16Array(se * 64);
      for (let De = 0; De < te; ++De) {
        var _n = 8;
        De == te - 1 && (_n = Ae);
        var $e = 8;
        for (let en = 0; en < se; ++en) {
          en == se - 1 && ($e = on);
          for (let Qe = 0; Qe < ie; ++Qe)
            ke[Qe].fill(0), ke[Qe][0] = N[Re[Qe]++], vn(ye, D, ke[Qe]), Ht(ke[Qe], Ie[Qe]), Ft(Ie[Qe]);
          At(Ie);
          for (let Qe = 0; Qe < ie; ++Qe)
            Vt(Ie[Qe], qe[Qe], en * 64);
        }
        let Pe = 0;
        for (let en = 0; en < ie; ++en) {
          const Qe = M[m.idx[en]].type;
          for (let Un = 8 * De; Un < 8 * De + _n; ++Un) {
            Pe = Ge[en][Un];
            for (let zt = 0; zt < oe; ++zt) {
              const hn = zt * 64 + (Un & 7) * 8;
              tn.setUint16(Pe + 0 * Qe, qe[en][hn + 0], !0), tn.setUint16(Pe + 2 * Qe, qe[en][hn + 1], !0), tn.setUint16(Pe + 4 * Qe, qe[en][hn + 2], !0), tn.setUint16(Pe + 6 * Qe, qe[en][hn + 3], !0), tn.setUint16(Pe + 8 * Qe, qe[en][hn + 4], !0), tn.setUint16(Pe + 10 * Qe, qe[en][hn + 5], !0), tn.setUint16(Pe + 12 * Qe, qe[en][hn + 6], !0), tn.setUint16(Pe + 14 * Qe, qe[en][hn + 7], !0), Pe += 16 * Qe;
            }
          }
          if (oe != se)
            for (let Un = 8 * De; Un < 8 * De + _n; ++Un) {
              const zt = Ge[en][Un] + 8 * oe * 2 * Qe, hn = oe * 64 + (Un & 7) * 8;
              for (let Bt = 0; Bt < $e; ++Bt)
                tn.setUint16(zt + Bt * 2 * Qe, qe[en][hn + Bt], !0);
            }
        }
      }
      for (var vt = new Uint16Array(V), tn = new DataView(U.buffer), Sn = 0; Sn < ie; ++Sn) {
        M[m.idx[Sn]].decoded = !0;
        var bt = M[m.idx[Sn]].type;
        if (M[Sn].type == 2)
          for (var vr = 0; vr < Y; ++vr) {
            const De = Ge[Sn][vr];
            for (var Wn = 0; Wn < V; ++Wn)
              vt[Wn] = tn.getUint16(De + Wn * 2 * bt, !0);
            for (var Wn = 0; Wn < V; ++Wn)
              tn.setFloat32(De + Wn * 2 * bt, ne(vt[Wn]), !0);
          }
      }
    }
    function vn(m, y, M) {
      for (var D, N = 1; N < 64; )
        D = y[m.value], D == 65280 ? N = 64 : D >> 8 == 255 ? N += D & 255 : (M[N] = D, N++), m.value++;
    }
    function Ht(m, y) {
      y[0] = ne(m[0]), y[1] = ne(m[1]), y[2] = ne(m[5]), y[3] = ne(m[6]), y[4] = ne(m[14]), y[5] = ne(m[15]), y[6] = ne(m[27]), y[7] = ne(m[28]), y[8] = ne(m[2]), y[9] = ne(m[4]), y[10] = ne(m[7]), y[11] = ne(m[13]), y[12] = ne(m[16]), y[13] = ne(m[26]), y[14] = ne(m[29]), y[15] = ne(m[42]), y[16] = ne(m[3]), y[17] = ne(m[8]), y[18] = ne(m[12]), y[19] = ne(m[17]), y[20] = ne(m[25]), y[21] = ne(m[30]), y[22] = ne(m[41]), y[23] = ne(m[43]), y[24] = ne(m[9]), y[25] = ne(m[11]), y[26] = ne(m[18]), y[27] = ne(m[24]), y[28] = ne(m[31]), y[29] = ne(m[40]), y[30] = ne(m[44]), y[31] = ne(m[53]), y[32] = ne(m[10]), y[33] = ne(m[19]), y[34] = ne(m[23]), y[35] = ne(m[32]), y[36] = ne(m[39]), y[37] = ne(m[45]), y[38] = ne(m[52]), y[39] = ne(m[54]), y[40] = ne(m[20]), y[41] = ne(m[22]), y[42] = ne(m[33]), y[43] = ne(m[38]), y[44] = ne(m[46]), y[45] = ne(m[51]), y[46] = ne(m[55]), y[47] = ne(m[60]), y[48] = ne(m[21]), y[49] = ne(m[34]), y[50] = ne(m[37]), y[51] = ne(m[47]), y[52] = ne(m[50]), y[53] = ne(m[56]), y[54] = ne(m[59]), y[55] = ne(m[61]), y[56] = ne(m[35]), y[57] = ne(m[36]), y[58] = ne(m[48]), y[59] = ne(m[49]), y[60] = ne(m[57]), y[61] = ne(m[58]), y[62] = ne(m[62]), y[63] = ne(m[63]);
    }
    function Ft(m) {
      const y = 0.5 * Math.cos(0.7853975), M = 0.5 * Math.cos(3.14159 / 16), D = 0.5 * Math.cos(3.14159 / 8), N = 0.5 * Math.cos(3 * 3.14159 / 16), U = 0.5 * Math.cos(5 * 3.14159 / 16), V = 0.5 * Math.cos(3 * 3.14159 / 8), Y = 0.5 * Math.cos(7 * 3.14159 / 16);
      for (var ie = new Array(4), oe = new Array(4), se = new Array(4), te = new Array(4), on = 0; on < 8; ++on) {
        var Ae = on * 8;
        ie[0] = D * m[Ae + 2], ie[1] = V * m[Ae + 2], ie[2] = D * m[Ae + 6], ie[3] = V * m[Ae + 6], oe[0] = M * m[Ae + 1] + N * m[Ae + 3] + U * m[Ae + 5] + Y * m[Ae + 7], oe[1] = N * m[Ae + 1] - Y * m[Ae + 3] - M * m[Ae + 5] - U * m[Ae + 7], oe[2] = U * m[Ae + 1] - M * m[Ae + 3] + Y * m[Ae + 5] + N * m[Ae + 7], oe[3] = Y * m[Ae + 1] - U * m[Ae + 3] + N * m[Ae + 5] - M * m[Ae + 7], se[0] = y * (m[Ae + 0] + m[Ae + 4]), se[3] = y * (m[Ae + 0] - m[Ae + 4]), se[1] = ie[0] + ie[3], se[2] = ie[1] - ie[2], te[0] = se[0] + se[1], te[1] = se[3] + se[2], te[2] = se[3] - se[2], te[3] = se[0] - se[1], m[Ae + 0] = te[0] + oe[0], m[Ae + 1] = te[1] + oe[1], m[Ae + 2] = te[2] + oe[2], m[Ae + 3] = te[3] + oe[3], m[Ae + 4] = te[3] - oe[3], m[Ae + 5] = te[2] - oe[2], m[Ae + 6] = te[1] - oe[1], m[Ae + 7] = te[0] - oe[0];
      }
      for (var ye = 0; ye < 8; ++ye)
        ie[0] = D * m[16 + ye], ie[1] = V * m[16 + ye], ie[2] = D * m[48 + ye], ie[3] = V * m[48 + ye], oe[0] = M * m[8 + ye] + N * m[24 + ye] + U * m[40 + ye] + Y * m[56 + ye], oe[1] = N * m[8 + ye] - Y * m[24 + ye] - M * m[40 + ye] - U * m[56 + ye], oe[2] = U * m[8 + ye] - M * m[24 + ye] + Y * m[40 + ye] + N * m[56 + ye], oe[3] = Y * m[8 + ye] - U * m[24 + ye] + N * m[40 + ye] - M * m[56 + ye], se[0] = y * (m[ye] + m[32 + ye]), se[3] = y * (m[ye] - m[32 + ye]), se[1] = ie[0] + ie[3], se[2] = ie[1] - ie[2], te[0] = se[0] + se[1], te[1] = se[3] + se[2], te[2] = se[3] - se[2], te[3] = se[0] - se[1], m[0 + ye] = te[0] + oe[0], m[8 + ye] = te[1] + oe[1], m[16 + ye] = te[2] + oe[2], m[24 + ye] = te[3] + oe[3], m[32 + ye] = te[3] - oe[3], m[40 + ye] = te[2] - oe[2], m[48 + ye] = te[1] - oe[1], m[56 + ye] = te[0] - oe[0];
    }
    function At(m) {
      for (var y = 0; y < 64; ++y) {
        var M = m[0][y], D = m[1][y], N = m[2][y];
        m[0][y] = M + 1.5747 * N, m[1][y] = M - 0.1873 * D - 0.4682 * N, m[2][y] = M + 1.8556 * D;
      }
    }
    function Vt(m, y, M) {
      for (var D = 0; D < 64; ++D)
        y[M + D] = ui.toHalfFloat(lt(m[D]));
    }
    function lt(m) {
      return m <= 1 ? Math.sign(m) * Math.pow(Math.abs(m), 2.2) : Math.sign(m) * Math.pow(O, Math.abs(m) - 1);
    }
    function ln(m) {
      return new DataView(m.array.buffer, m.offset.value, m.size);
    }
    function ut(m) {
      var y = m.viewer.buffer.slice(m.offset.value, m.offset.value + m.size), M = new Uint8Array(tt(y)), D = new Uint8Array(M.length);
      return pn(M), nt(M, D), new DataView(D.buffer);
    }
    function qt(m) {
      var y = m.array.slice(m.offset.value, m.offset.value + m.size), M = Ks(y), D = new Uint8Array(M.length);
      return pn(M), nt(M, D), new DataView(D.buffer);
    }
    function hr(m) {
      for (var y = m.viewer, M = { value: m.offset.value }, D = new Uint16Array(m.width * m.scanlineBlockSize * (m.channels * m.type)), N = new Uint8Array(8192), U = 0, V = new Array(m.channels), Y = 0; Y < m.channels; Y++)
        V[Y] = {}, V[Y].start = U, V[Y].end = V[Y].start, V[Y].nx = m.width, V[Y].ny = m.lines, V[Y].size = m.type, U += V[Y].nx * V[Y].ny * V[Y].size;
      var ie = xn(y, M), oe = xn(y, M);
      if (oe >= 8192)
        throw "Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";
      if (ie <= oe)
        for (var Y = 0; Y < oe - ie + 1; Y++)
          N[Y + ie] = w(y, M);
      var se = new Uint16Array(65536), te = K(N, se), on = En(y, M);
      Ye(m.array, y, M, on, D, U);
      for (var Y = 0; Y < m.channels; ++Y)
        for (var Ae = V[Y], ye = 0; ye < V[Y].size; ++ye)
          Yn(D, Ae.start + ye, Ae.nx, Ae.size, Ae.ny, Ae.nx * Ae.size, te);
      Rn(se, D, U);
      for (var Re = 0, Ie = new Uint8Array(D.buffer.byteLength), ke = 0; ke < m.lines; ke++)
        for (var qe = 0; qe < m.channels; qe++) {
          var Ae = V[qe], Ge = Ae.nx * Ae.size, _n = new Uint8Array(D.buffer, Ae.end * 2, Ge * 2);
          Ie.set(_n, Re), Re += Ge * 2, Ae.end += Ge;
        }
      return new DataView(Ie.buffer);
    }
    function Gn(m) {
      var y = m.array.slice(m.offset.value, m.offset.value + m.size), M = Ks(y);
      const D = m.lines * m.channels * m.width, N = m.type == 1 ? new Uint16Array(D) : new Uint32Array(D);
      let U = 0, V = 0;
      const Y = new Array(4);
      for (let ie = 0; ie < m.lines; ie++)
        for (let oe = 0; oe < m.channels; oe++) {
          let se = 0;
          switch (m.type) {
            case 1:
              Y[0] = U, Y[1] = Y[0] + m.width, U = Y[1] + m.width;
              for (let te = 0; te < m.width; ++te) {
                const on = M[Y[0]++] << 8 | M[Y[1]++];
                se += on, N[V] = se, V++;
              }
              break;
            case 2:
              Y[0] = U, Y[1] = Y[0] + m.width, Y[2] = Y[1] + m.width, U = Y[2] + m.width;
              for (let te = 0; te < m.width; ++te) {
                const on = M[Y[0]++] << 24 | M[Y[1]++] << 16 | M[Y[2]++] << 8;
                se += on, N[V] = se, V++;
              }
              break;
          }
        }
      return new DataView(N.buffer);
    }
    function Nt(m) {
      var y = m.viewer, M = { value: m.offset.value }, D = new Uint8Array(m.width * m.lines * (m.channels * m.type * 2)), N = {
        version: Z(y, M),
        unknownUncompressedSize: Z(y, M),
        unknownCompressedSize: Z(y, M),
        acCompressedSize: Z(y, M),
        dcCompressedSize: Z(y, M),
        rleCompressedSize: Z(y, M),
        rleUncompressedSize: Z(y, M),
        rleRawSize: Z(y, M),
        totalAcUncompressedCount: Z(y, M),
        totalDcUncompressedCount: Z(y, M),
        acCompression: Z(y, M)
      };
      if (N.version < 2)
        throw "EXRLoader.parse: " + Ar.compression + " version " + N.version + " is unsupported";
      for (var U = new Array(), V = xn(y, M) - 2; V > 0; ) {
        var Y = Nn(y.buffer, M), ie = w(y, M), oe = ie >> 2 & 3, se = (ie >> 4) - 1, te = new Int8Array([se])[0], on = w(y, M);
        U.push({
          name: Y,
          index: te,
          type: on,
          compression: oe
        }), V -= Y.length + 3;
      }
      for (var Ae = Ar.channels, ye = new Array(m.channels), Re = 0; Re < m.channels; ++Re) {
        var Ie = ye[Re] = {}, ke = Ae[Re];
        Ie.name = ke.name, Ie.compression = 0, Ie.decoded = !1, Ie.type = ke.pixelType, Ie.pLinear = ke.pLinear, Ie.width = m.width, Ie.height = m.lines;
      }
      for (var qe = {
        idx: new Array(3)
      }, Ge = 0; Ge < m.channels; ++Ge)
        for (var Ie = ye[Ge], Re = 0; Re < U.length; ++Re) {
          var _n = U[Re];
          Ie.name == _n.name && (Ie.compression = _n.compression, _n.index >= 0 && (qe.idx[_n.index] = Ge), Ie.offset = Ge);
        }
      if (N.acCompressedSize > 0)
        switch (N.acCompression) {
          case 0:
            var tn = new Uint16Array(N.totalAcUncompressedCount);
            Ye(
              m.array,
              y,
              M,
              N.acCompressedSize,
              tn,
              N.totalAcUncompressedCount
            );
            break;
          case 1:
            var $e = m.array.slice(M.value, M.value + N.totalAcUncompressedCount), vt = Ks($e), tn = new Uint16Array(vt.buffer);
            M.value += N.totalAcUncompressedCount;
            break;
        }
      if (N.dcCompressedSize > 0) {
        var Sn = {
          array: m.array,
          offset: M,
          size: N.dcCompressedSize
        }, bt = new Uint16Array(qt(Sn).buffer);
        M.value += N.dcCompressedSize;
      }
      if (N.rleRawSize > 0) {
        var $e = m.array.slice(M.value, M.value + N.rleCompressedSize), vt = Ks($e), vr = tt(vt.buffer);
        M.value += N.rleCompressedSize;
      }
      for (var Wn = 0, De = new Array(ye.length), Re = 0; Re < De.length; ++Re)
        De[Re] = new Array();
      for (var Pe = 0; Pe < m.lines; ++Pe)
        for (var en = 0; en < ye.length; ++en)
          De[en].push(Wn), Wn += ye[en].width * m.type * 2;
      at(qe, De, ye, tn, bt, D);
      for (var Re = 0; Re < ye.length; ++Re) {
        var Ie = ye[Re];
        if (!Ie.decoded)
          switch (Ie.compression) {
            case 2:
              for (var Qe = 0, Un = 0, Pe = 0; Pe < m.lines; ++Pe) {
                for (var zt = De[Re][Qe], hn = 0; hn < Ie.width; ++hn) {
                  for (var Bt = 0; Bt < 2 * Ie.type; ++Bt)
                    D[zt++] = vr[Un + Bt * Ie.width * Ie.height];
                  Un++;
                }
                Qe++;
              }
              break;
            default:
              throw "EXRLoader.parse: unsupported channel compression";
          }
      }
      return new DataView(D.buffer);
    }
    function Nn(m, y) {
      for (var M = new Uint8Array(m), D = 0; M[y.value + D] != 0; )
        D += 1;
      var N = new TextDecoder().decode(M.slice(y.value, y.value + D));
      return y.value = y.value + D + 1, N;
    }
    function $t(m, y, M) {
      var D = new TextDecoder().decode(new Uint8Array(m).slice(y.value, y.value + M));
      return y.value = y.value + M, D;
    }
    function to(m, y) {
      var M = er(m, y), D = En(m, y);
      return [M, D];
    }
    function To(m, y) {
      var M = En(m, y), D = En(m, y);
      return [M, D];
    }
    function er(m, y) {
      var M = m.getInt32(y.value, !0);
      return y.value = y.value + 4, M;
    }
    function En(m, y) {
      var M = m.getUint32(y.value, !0);
      return y.value = y.value + 4, M;
    }
    function mr(m, y) {
      var M = m[y.value];
      return y.value = y.value + 1, M;
    }
    function w(m, y) {
      var M = m.getUint8(y.value);
      return y.value = y.value + 1, M;
    }
    const Z = function(m, y) {
      let M;
      return "getBigInt64" in DataView.prototype ? M = Number(m.getBigInt64(y.value, !0)) : M = m.getUint32(y.value + 4, !0) + Number(m.getUint32(y.value, !0) << 32), y.value += 8, M;
    };
    function ge(m, y) {
      var M = m.getFloat32(y.value, !0);
      return y.value += 4, M;
    }
    function Je(m, y) {
      return ui.toHalfFloat(ge(m, y));
    }
    function ne(m) {
      var y = (m & 31744) >> 10, M = m & 1023;
      return (m >> 15 ? -1 : 1) * (y ? y === 31 ? M ? NaN : 1 / 0 : Math.pow(2, y - 15) * (1 + M / 1024) : 6103515625e-14 * (M / 1024));
    }
    function xn(m, y) {
      var M = m.getUint16(y.value, !0);
      return y.value += 2, M;
    }
    function rt(m, y) {
      return ne(xn(m, y));
    }
    function Ai(m, y, M, D) {
      for (var N = M.value, U = []; M.value < N + D - 1; ) {
        var V = Nn(y, M), Y = er(m, M), ie = w(m, M);
        M.value += 3;
        var oe = er(m, M), se = er(m, M);
        U.push({
          name: V,
          pixelType: Y,
          pLinear: ie,
          xSampling: oe,
          ySampling: se
        });
      }
      return M.value += 1, U;
    }
    function gr(m, y) {
      var M = ge(m, y), D = ge(m, y), N = ge(m, y), U = ge(m, y), V = ge(m, y), Y = ge(m, y), ie = ge(m, y), oe = ge(m, y);
      return {
        redX: M,
        redY: D,
        greenX: N,
        greenY: U,
        blueX: V,
        blueY: Y,
        whiteX: ie,
        whiteY: oe
      };
    }
    function ct(m, y) {
      var M = [
        "NO_COMPRESSION",
        "RLE_COMPRESSION",
        "ZIPS_COMPRESSION",
        "ZIP_COMPRESSION",
        "PIZ_COMPRESSION",
        "PXR24_COMPRESSION",
        "B44_COMPRESSION",
        "B44A_COMPRESSION",
        "DWAA_COMPRESSION",
        "DWAB_COMPRESSION"
      ], D = w(m, y);
      return M[D];
    }
    function ft(m, y) {
      var M = En(m, y), D = En(m, y), N = En(m, y), U = En(m, y);
      return { xMin: M, yMin: D, xMax: N, yMax: U };
    }
    function ot(m, y) {
      var M = ["INCREASING_Y"], D = w(m, y);
      return M[D];
    }
    function nr(m, y) {
      var M = ge(m, y), D = ge(m, y);
      return [M, D];
    }
    function tr(m, y) {
      var M = ge(m, y), D = ge(m, y), N = ge(m, y);
      return [M, D, N];
    }
    function Ut(m, y, M, D, N) {
      if (D === "string" || D === "stringvector" || D === "iccProfile")
        return $t(y, M, N);
      if (D === "chlist")
        return Ai(m, y, M, N);
      if (D === "chromaticities")
        return gr(m, M);
      if (D === "compression")
        return ct(m, M);
      if (D === "box2i")
        return ft(m, M);
      if (D === "lineOrder")
        return ot(m, M);
      if (D === "float")
        return ge(m, M);
      if (D === "v2f")
        return nr(m, M);
      if (D === "v3f")
        return tr(m, M);
      if (D === "int")
        return er(m, M);
      if (D === "rational")
        return to(m, M);
      if (D === "timecode")
        return To(m, M);
      if (D === "preview")
        return M.value += N, "skipped";
      M.value += N;
    }
    function ro(m, y, M) {
      const D = {};
      if (m.getUint32(0, !0) != 20000630)
        throw "THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";
      D.version = m.getUint8(4);
      const N = m.getUint8(5);
      D.spec = {
        singleTile: !!(N & 2),
        longName: !!(N & 4),
        deepFormat: !!(N & 8),
        multiPart: !!(N & 16)
      }, M.value = 8;
      for (var U = !0; U; ) {
        var V = Nn(y, M);
        if (V == 0)
          U = !1;
        else {
          var Y = Nn(y, M), ie = En(m, M), oe = Ut(m, y, M, Y, ie);
          oe === void 0 ? console.warn(`EXRLoader.parse: skipped unknown header attribute type '${Y}'.`) : D[V] = oe;
        }
      }
      if ((N & -5) != 0)
        throw console.error("EXRHeader:", D), "THREE.EXRLoader: provided file is currently unsupported.";
      return D;
    }
    function Fo(m, y, M, D, N) {
      const U = {
        size: 0,
        viewer: y,
        array: M,
        offset: D,
        width: m.dataWindow.xMax - m.dataWindow.xMin + 1,
        height: m.dataWindow.yMax - m.dataWindow.yMin + 1,
        channels: m.channels.length,
        bytesPerLine: null,
        lines: null,
        inputSize: null,
        type: m.channels[0].pixelType,
        uncompress: null,
        getter: null,
        format: null,
        [Ji ? "colorSpace" : "encoding"]: null
      };
      switch (m.compression) {
        case "NO_COMPRESSION":
          U.lines = 1, U.uncompress = ln;
          break;
        case "RLE_COMPRESSION":
          U.lines = 1, U.uncompress = ut;
          break;
        case "ZIPS_COMPRESSION":
          U.lines = 1, U.uncompress = qt;
          break;
        case "ZIP_COMPRESSION":
          U.lines = 16, U.uncompress = qt;
          break;
        case "PIZ_COMPRESSION":
          U.lines = 32, U.uncompress = hr;
          break;
        case "PXR24_COMPRESSION":
          U.lines = 16, U.uncompress = Gn;
          break;
        case "DWAA_COMPRESSION":
          U.lines = 32, U.uncompress = Nt;
          break;
        case "DWAB_COMPRESSION":
          U.lines = 256, U.uncompress = Nt;
          break;
        default:
          throw "EXRLoader.parse: " + m.compression + " is unsupported";
      }
      if (U.scanlineBlockSize = U.lines, U.type == 1)
        switch (N) {
          case _r:
            U.getter = rt, U.inputSize = 2;
            break;
          case kt:
            U.getter = xn, U.inputSize = 2;
            break;
        }
      else if (U.type == 2)
        switch (N) {
          case _r:
            U.getter = ge, U.inputSize = 4;
            break;
          case kt:
            U.getter = Je, U.inputSize = 4;
        }
      else
        throw "EXRLoader.parse: unsupported pixelType " + U.type + " for " + m.compression + ".";
      U.blockCount = (m.dataWindow.yMax + 1) / U.scanlineBlockSize;
      for (var V = 0; V < U.blockCount; V++)
        Z(y, D);
      U.outputChannels = U.channels == 3 ? 4 : U.channels;
      const Y = U.width * U.height * U.outputChannels;
      switch (N) {
        case _r:
          U.byteArray = new Float32Array(Y), U.channels < U.outputChannels && U.byteArray.fill(1, 0, Y);
          break;
        case kt:
          U.byteArray = new Uint16Array(Y), U.channels < U.outputChannels && U.byteArray.fill(15360, 0, Y);
          break;
        default:
          console.error("THREE.EXRLoader: unsupported type: ", N);
          break;
      }
      return U.bytesPerLine = U.width * U.inputSize * U.channels, U.outputChannels == 4 ? U.format = Vi : U.format = AA, Ji ? U.colorSpace = "srgb-linear" : U.encoding = 3e3, U;
    }
    const oo = new DataView(t), Ro = new Uint8Array(t), rr = { value: 0 }, Ar = ro(oo, t, rr), _e = Fo(Ar, oo, Ro, rr, this.type), vi = { value: 0 }, xo = { R: 0, G: 1, B: 2, A: 3, Y: 0 };
    for (let m = 0; m < _e.height / _e.scanlineBlockSize; m++) {
      const y = En(oo, rr);
      _e.size = En(oo, rr), _e.lines = y + _e.scanlineBlockSize > _e.height ? _e.height - y : _e.scanlineBlockSize;
      const D = _e.size < _e.lines * _e.bytesPerLine ? _e.uncompress(_e) : ln(_e);
      rr.value += _e.size;
      for (let N = 0; N < _e.scanlineBlockSize; N++) {
        const U = N + m * _e.scanlineBlockSize;
        if (U >= _e.height)
          break;
        for (let V = 0; V < _e.channels; V++) {
          const Y = xo[Ar.channels[V].name];
          for (let ie = 0; ie < _e.width; ie++) {
            vi.value = (N * (_e.channels * _e.width) + V * _e.width + ie) * _e.inputSize;
            const oe = (_e.height - 1 - U) * (_e.width * _e.outputChannels) + ie * _e.outputChannels + Y;
            _e.byteArray[oe] = _e.getter(D, vi);
          }
        }
      }
    }
    return {
      header: Ar,
      width: _e.width,
      height: _e.height,
      data: _e.byteArray,
      format: _e.format,
      [Ji ? "colorSpace" : "encoding"]: _e[Ji ? "colorSpace" : "encoding"],
      type: this.type
    };
  }
  setDataType(t) {
    return this.type = t, this;
  }
  load(t, i, s, l) {
    function c(d, h) {
      Ji ? d.colorSpace = h.colorSpace : d.encoding = h.encoding, d.minFilter = Ot, d.magFilter = Ot, d.generateMipmaps = !1, d.flipY = !1, i && i(d, h);
    }
    return super.load(t, c, s, l);
  }
}
const su = /* @__PURE__ */ new WeakMap();
class gB extends xu {
  constructor(t) {
    super(t), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
      position: "POSITION",
      normal: "NORMAL",
      color: "COLOR",
      uv: "TEX_COORD"
    }, this.defaultAttributeTypes = {
      position: "Float32Array",
      normal: "Float32Array",
      color: "Float32Array",
      uv: "Float32Array"
    };
  }
  setDecoderPath(t) {
    return this.decoderPath = t, this;
  }
  setDecoderConfig(t) {
    return this.decoderConfig = t, this;
  }
  setWorkerLimit(t) {
    return this.workerLimit = t, this;
  }
  load(t, i, s, l) {
    const c = new eo(this.manager);
    c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(this.withCredentials), c.load(
      t,
      (d) => {
        const h = {
          attributeIDs: this.defaultAttributeIDs,
          attributeTypes: this.defaultAttributeTypes,
          useUniqueIDs: !1
        };
        this.decodeGeometry(d, h).then(i).catch(l);
      },
      s,
      l
    );
  }
  /** @deprecated Kept for backward-compatibility with previous DRACOLoader versions. */
  decodeDracoFile(t, i, s, l) {
    const c = {
      attributeIDs: s || this.defaultAttributeIDs,
      attributeTypes: l || this.defaultAttributeTypes,
      useUniqueIDs: !!s
    };
    this.decodeGeometry(t, c).then(i);
  }
  decodeGeometry(t, i) {
    for (const p in i.attributeTypes) {
      const g = i.attributeTypes[p];
      g.BYTES_PER_ELEMENT !== void 0 && (i.attributeTypes[p] = g.name);
    }
    const s = JSON.stringify(i);
    if (su.has(t)) {
      const p = su.get(t);
      if (p.key === s)
        return p.promise;
      if (t.byteLength === 0)
        throw new Error(
          "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
        );
    }
    let l;
    const c = this.workerNextTaskID++, d = t.byteLength, h = this._getWorker(c, d).then((p) => (l = p, new Promise((g, v) => {
      l._callbacks[c] = { resolve: g, reject: v }, l.postMessage({ type: "decode", id: c, taskConfig: i, buffer: t }, [t]);
    }))).then((p) => this._createGeometry(p.geometry));
    return h.catch(() => !0).then(() => {
      l && c && this._releaseTask(l, c);
    }), su.set(t, {
      key: s,
      promise: h
    }), h;
  }
  _createGeometry(t) {
    const i = new Mp();
    t.index && i.setIndex(new Xi(t.index.array, 1));
    for (let s = 0; s < t.attributes.length; s++) {
      const l = t.attributes[s], c = l.name, d = l.array, h = l.itemSize;
      i.setAttribute(c, new Xi(d, h));
    }
    return i;
  }
  _loadLibrary(t, i) {
    const s = new eo(this.manager);
    return s.setPath(this.decoderPath), s.setResponseType(i), s.setWithCredentials(this.withCredentials), new Promise((l, c) => {
      s.load(t, l, void 0, c);
    });
  }
  preload() {
    return this._initDecoder(), this;
  }
  _initDecoder() {
    if (this.decoderPending)
      return this.decoderPending;
    const t = typeof WebAssembly != "object" || this.decoderConfig.type === "js", i = [];
    return t ? i.push(this._loadLibrary("draco_decoder.js", "text")) : (i.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), i.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(i).then((s) => {
      const l = s[0];
      t || (this.decoderConfig.wasmBinary = s[1]);
      const c = AB.toString(), d = [
        "/* draco decoder */",
        l,
        "",
        "/* worker */",
        c.substring(c.indexOf("{") + 1, c.lastIndexOf("}"))
      ].join(`
`);
      this.workerSourceURL = URL.createObjectURL(new Blob([d]));
    }), this.decoderPending;
  }
  _getWorker(t, i) {
    return this._initDecoder().then(() => {
      if (this.workerPool.length < this.workerLimit) {
        const l = new Worker(this.workerSourceURL);
        l._callbacks = {}, l._taskCosts = {}, l._taskLoad = 0, l.postMessage({ type: "init", decoderConfig: this.decoderConfig }), l.onmessage = function(c) {
          const d = c.data;
          switch (d.type) {
            case "decode":
              l._callbacks[d.id].resolve(d);
              break;
            case "error":
              l._callbacks[d.id].reject(d);
              break;
            default:
              console.error('THREE.DRACOLoader: Unexpected message, "' + d.type + '"');
          }
        }, this.workerPool.push(l);
      } else
        this.workerPool.sort(function(l, c) {
          return l._taskLoad > c._taskLoad ? -1 : 1;
        });
      const s = this.workerPool[this.workerPool.length - 1];
      return s._taskCosts[t] = i, s._taskLoad += i, s;
    });
  }
  _releaseTask(t, i) {
    t._taskLoad -= t._taskCosts[i], delete t._callbacks[i], delete t._taskCosts[i];
  }
  debug() {
    console.log(
      "Task load: ",
      this.workerPool.map((t) => t._taskLoad)
    );
  }
  dispose() {
    for (let t = 0; t < this.workerPool.length; ++t)
      this.workerPool[t].terminate();
    return this.workerPool.length = 0, this;
  }
}
function AB() {
  let a, t;
  onmessage = function(d) {
    const h = d.data;
    switch (h.type) {
      case "init":
        a = h.decoderConfig, t = new Promise(function(v) {
          a.onModuleLoaded = function(A) {
            v({ draco: A });
          }, DracoDecoderModule(a);
        });
        break;
      case "decode":
        const p = h.buffer, g = h.taskConfig;
        t.then((v) => {
          const A = v.draco, B = new A.Decoder(), C = new A.DecoderBuffer();
          C.Init(new Int8Array(p), p.byteLength);
          try {
            const E = i(A, B, C, g), G = E.attributes.map((x) => x.array.buffer);
            E.index && G.push(E.index.array.buffer), self.postMessage({ type: "decode", id: h.id, geometry: E }, G);
          } catch (E) {
            console.error(E), self.postMessage({ type: "error", id: h.id, error: E.message });
          } finally {
            A.destroy(C), A.destroy(B);
          }
        });
        break;
    }
  };
  function i(d, h, p, g) {
    const v = g.attributeIDs, A = g.attributeTypes;
    let B, C;
    const E = h.GetEncodedGeometryType(p);
    if (E === d.TRIANGULAR_MESH)
      B = new d.Mesh(), C = h.DecodeBufferToMesh(p, B);
    else if (E === d.POINT_CLOUD)
      B = new d.PointCloud(), C = h.DecodeBufferToPointCloud(p, B);
    else
      throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
    if (!C.ok() || B.ptr === 0)
      throw new Error("THREE.DRACOLoader: Decoding failed: " + C.error_msg());
    const G = { index: null, attributes: [] };
    for (const x in v) {
      const I = self[A[x]];
      let F, z;
      if (g.useUniqueIDs)
        z = v[x], F = h.GetAttributeByUniqueId(B, z);
      else {
        if (z = h.GetAttributeId(B, d[v[x]]), z === -1)
          continue;
        F = h.GetAttribute(B, z);
      }
      G.attributes.push(l(d, h, B, x, I, F));
    }
    return E === d.TRIANGULAR_MESH && (G.index = s(d, h, B)), d.destroy(B), G;
  }
  function s(d, h, p) {
    const v = p.num_faces() * 3, A = v * 4, B = d._malloc(A);
    h.GetTrianglesUInt32Array(p, A, B);
    const C = new Uint32Array(d.HEAPF32.buffer, B, v).slice();
    return d._free(B), { array: C, itemSize: 1 };
  }
  function l(d, h, p, g, v, A) {
    const B = A.num_components(), E = p.num_points() * B, G = E * v.BYTES_PER_ELEMENT, x = c(d, v), I = d._malloc(G);
    h.GetAttributeDataArrayForAllPoints(p, A, x, G, I);
    const F = new v(d.HEAPF32.buffer, I, E).slice();
    return d._free(I), {
      name: g,
      array: F,
      itemSize: B
    };
  }
  function c(d, h) {
    switch (h) {
      case Float32Array:
        return d.DT_FLOAT32;
      case Int8Array:
        return d.DT_INT8;
      case Int16Array:
        return d.DT_INT16;
      case Int32Array:
        return d.DT_INT32;
      case Uint8Array:
        return d.DT_UINT8;
      case Uint16Array:
        return d.DT_UINT16;
      case Uint32Array:
        return d.DT_UINT32;
    }
  }
}
const fp = /* @__PURE__ */ new ga(), Xs = /* @__PURE__ */ new Ke();
class zu extends vA {
  constructor() {
    super(), this.isLineSegmentsGeometry = !0, this.type = "LineSegmentsGeometry";
    const t = [-1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1, -1, 0], i = [-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2], s = [0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5];
    this.setIndex(s), this.setAttribute("position", new xd(t, 3)), this.setAttribute("uv", new xd(i, 2));
  }
  applyMatrix4(t) {
    const i = this.attributes.instanceStart, s = this.attributes.instanceEnd;
    return i !== void 0 && (i.applyMatrix4(t), s.applyMatrix4(t), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  setPositions(t) {
    let i;
    t instanceof Float32Array ? i = t : Array.isArray(t) && (i = new Float32Array(t));
    const s = new mu(i, 6, 1);
    return this.setAttribute("instanceStart", new yo(s, 3, 0)), this.setAttribute("instanceEnd", new yo(s, 3, 3)), this.computeBoundingBox(), this.computeBoundingSphere(), this;
  }
  setColors(t, i = 3) {
    let s;
    t instanceof Float32Array ? s = t : Array.isArray(t) && (s = new Float32Array(t));
    const l = new mu(s, i * 2, 1);
    return this.setAttribute("instanceColorStart", new yo(l, i, 0)), this.setAttribute("instanceColorEnd", new yo(l, i, i)), this;
  }
  fromWireframeGeometry(t) {
    return this.setPositions(t.attributes.position.array), this;
  }
  fromEdgesGeometry(t) {
    return this.setPositions(t.attributes.position.array), this;
  }
  fromMesh(t) {
    return this.fromWireframeGeometry(new bA(t.geometry)), this;
  }
  fromLineSegments(t) {
    const i = t.geometry;
    return this.setPositions(i.attributes.position.array), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new ga());
    const t = this.attributes.instanceStart, i = this.attributes.instanceEnd;
    t !== void 0 && i !== void 0 && (this.boundingBox.setFromBufferAttribute(t), fp.setFromBufferAttribute(i), this.boundingBox.union(fp));
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new _u()), this.boundingBox === null && this.computeBoundingBox();
    const t = this.attributes.instanceStart, i = this.attributes.instanceEnd;
    if (t !== void 0 && i !== void 0) {
      const s = this.boundingSphere.center;
      this.boundingBox.getCenter(s);
      let l = 0;
      for (let c = 0, d = t.count; c < d; c++)
        Xs.fromBufferAttribute(t, c), l = Math.max(l, s.distanceToSquared(Xs)), Xs.fromBufferAttribute(i, c), l = Math.max(l, s.distanceToSquared(Xs));
      this.boundingSphere.radius = Math.sqrt(l), isNaN(this.boundingSphere.radius) && console.error(
        "THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",
        this
      );
    }
  }
  toJSON() {
  }
  applyMatrix(t) {
    return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."), this.applyMatrix4(t);
  }
}
class uh extends zu {
  constructor() {
    super(), this.isLineGeometry = !0, this.type = "LineGeometry";
  }
  setPositions(t) {
    const i = t.length - 3, s = new Float32Array(2 * i);
    for (let l = 0; l < i; l += 3)
      s[2 * l] = t[l], s[2 * l + 1] = t[l + 1], s[2 * l + 2] = t[l + 2], s[2 * l + 3] = t[l + 3], s[2 * l + 4] = t[l + 4], s[2 * l + 5] = t[l + 5];
    return super.setPositions(s), this;
  }
  setColors(t, i = 3) {
    const s = t.length - i, l = new Float32Array(2 * s);
    if (i === 3)
      for (let c = 0; c < s; c += i)
        l[2 * c] = t[c], l[2 * c + 1] = t[c + 1], l[2 * c + 2] = t[c + 2], l[2 * c + 3] = t[c + 3], l[2 * c + 4] = t[c + 4], l[2 * c + 5] = t[c + 5];
    else
      for (let c = 0; c < s; c += i)
        l[2 * c] = t[c], l[2 * c + 1] = t[c + 1], l[2 * c + 2] = t[c + 2], l[2 * c + 3] = t[c + 3], l[2 * c + 4] = t[c + 4], l[2 * c + 5] = t[c + 5], l[2 * c + 6] = t[c + 6], l[2 * c + 7] = t[c + 7];
    return super.setColors(l, i), this;
  }
  fromLine(t) {
    const i = t.geometry;
    return this.setPositions(i.attributes.position.array), this;
  }
}
class Ju extends ma {
  constructor(t) {
    super({
      type: "LineMaterial",
      uniforms: _d.clone(
        _d.merge([
          Dd.common,
          Dd.fog,
          {
            worldUnits: { value: 1 },
            linewidth: { value: 1 },
            resolution: { value: new $n(1, 1) },
            dashOffset: { value: 0 },
            dashScale: { value: 1 },
            dashSize: { value: 1 },
            gapSize: { value: 1 }
            // todo FIX - maybe change to totalSize
          }
        ])
      ),
      vertexShader: (
        /* glsl */
        `
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${rs >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`
      ),
      clipping: !0
      // required for clipping support
    }), this.isLineMaterial = !0, this.onBeforeCompile = function() {
      this.transparent ? this.defines.USE_LINE_COLOR_ALPHA = "1" : delete this.defines.USE_LINE_COLOR_ALPHA;
    }, Object.defineProperties(this, {
      color: {
        enumerable: !0,
        get: function() {
          return this.uniforms.diffuse.value;
        },
        set: function(i) {
          this.uniforms.diffuse.value = i;
        }
      },
      worldUnits: {
        enumerable: !0,
        get: function() {
          return "WORLD_UNITS" in this.defines;
        },
        set: function(i) {
          i === !0 ? this.defines.WORLD_UNITS = "" : delete this.defines.WORLD_UNITS;
        }
      },
      linewidth: {
        enumerable: !0,
        get: function() {
          return this.uniforms.linewidth.value;
        },
        set: function(i) {
          this.uniforms.linewidth.value = i;
        }
      },
      dashed: {
        enumerable: !0,
        get: function() {
          return "USE_DASH" in this.defines;
        },
        set(i) {
          !!i != "USE_DASH" in this.defines && (this.needsUpdate = !0), i === !0 ? this.defines.USE_DASH = "" : delete this.defines.USE_DASH;
        }
      },
      dashScale: {
        enumerable: !0,
        get: function() {
          return this.uniforms.dashScale.value;
        },
        set: function(i) {
          this.uniforms.dashScale.value = i;
        }
      },
      dashSize: {
        enumerable: !0,
        get: function() {
          return this.uniforms.dashSize.value;
        },
        set: function(i) {
          this.uniforms.dashSize.value = i;
        }
      },
      dashOffset: {
        enumerable: !0,
        get: function() {
          return this.uniforms.dashOffset.value;
        },
        set: function(i) {
          this.uniforms.dashOffset.value = i;
        }
      },
      gapSize: {
        enumerable: !0,
        get: function() {
          return this.uniforms.gapSize.value;
        },
        set: function(i) {
          this.uniforms.gapSize.value = i;
        }
      },
      opacity: {
        enumerable: !0,
        get: function() {
          return this.uniforms.opacity.value;
        },
        set: function(i) {
          this.uniforms.opacity.value = i;
        }
      },
      resolution: {
        enumerable: !0,
        get: function() {
          return this.uniforms.resolution.value;
        },
        set: function(i) {
          this.uniforms.resolution.value.copy(i);
        }
      },
      alphaToCoverage: {
        enumerable: !0,
        get: function() {
          return "USE_ALPHA_TO_COVERAGE" in this.defines;
        },
        set: function(i) {
          !!i != "USE_ALPHA_TO_COVERAGE" in this.defines && (this.needsUpdate = !0), i === !0 ? (this.defines.USE_ALPHA_TO_COVERAGE = "", this.extensions.derivatives = !0) : (delete this.defines.USE_ALPHA_TO_COVERAGE, this.extensions.derivatives = !1);
        }
      }
    }), this.setValues(t);
  }
}
const au = /* @__PURE__ */ new mi(), dp = /* @__PURE__ */ new Ke(), pp = /* @__PURE__ */ new Ke(), Kn = /* @__PURE__ */ new mi(), Qn = /* @__PURE__ */ new mi(), lr = /* @__PURE__ */ new mi(), lu = /* @__PURE__ */ new Ke(), uu = /* @__PURE__ */ new Zi(), Xn = /* @__PURE__ */ new BA(), hp = /* @__PURE__ */ new Ke(), Ys = /* @__PURE__ */ new ga(), Ws = /* @__PURE__ */ new _u(), ur = /* @__PURE__ */ new mi();
let fr, Mo;
function mp(a, t, i) {
  return ur.set(0, 0, -t, 1).applyMatrix4(a.projectionMatrix), ur.multiplyScalar(1 / ur.w), ur.x = Mo / i.width, ur.y = Mo / i.height, ur.applyMatrix4(a.projectionMatrixInverse), ur.multiplyScalar(1 / ur.w), Math.abs(Math.max(ur.x, ur.y));
}
function vB(a, t) {
  const i = a.matrixWorld, s = a.geometry, l = s.attributes.instanceStart, c = s.attributes.instanceEnd, d = Math.min(s.instanceCount, l.count);
  for (let h = 0, p = d; h < p; h++) {
    Xn.start.fromBufferAttribute(l, h), Xn.end.fromBufferAttribute(c, h), Xn.applyMatrix4(i);
    const g = new Ke(), v = new Ke();
    fr.distanceSqToSegment(Xn.start, Xn.end, v, g), v.distanceTo(g) < Mo * 0.5 && t.push({
      point: v,
      pointOnLine: g,
      distance: fr.origin.distanceTo(v),
      object: a,
      face: null,
      faceIndex: h,
      uv: null,
      [eh]: null
    });
  }
}
function bB(a, t, i) {
  const s = t.projectionMatrix, c = a.material.resolution, d = a.matrixWorld, h = a.geometry, p = h.attributes.instanceStart, g = h.attributes.instanceEnd, v = Math.min(h.instanceCount, p.count), A = -t.near;
  fr.at(1, lr), lr.w = 1, lr.applyMatrix4(t.matrixWorldInverse), lr.applyMatrix4(s), lr.multiplyScalar(1 / lr.w), lr.x *= c.x / 2, lr.y *= c.y / 2, lr.z = 0, lu.copy(lr), uu.multiplyMatrices(t.matrixWorldInverse, d);
  for (let B = 0, C = v; B < C; B++) {
    if (Kn.fromBufferAttribute(p, B), Qn.fromBufferAttribute(g, B), Kn.w = 1, Qn.w = 1, Kn.applyMatrix4(uu), Qn.applyMatrix4(uu), Kn.z > A && Qn.z > A)
      continue;
    if (Kn.z > A) {
      const z = Kn.z - Qn.z, P = (Kn.z - A) / z;
      Kn.lerp(Qn, P);
    } else if (Qn.z > A) {
      const z = Qn.z - Kn.z, P = (Qn.z - A) / z;
      Qn.lerp(Kn, P);
    }
    Kn.applyMatrix4(s), Qn.applyMatrix4(s), Kn.multiplyScalar(1 / Kn.w), Qn.multiplyScalar(1 / Qn.w), Kn.x *= c.x / 2, Kn.y *= c.y / 2, Qn.x *= c.x / 2, Qn.y *= c.y / 2, Xn.start.copy(Kn), Xn.start.z = 0, Xn.end.copy(Qn), Xn.end.z = 0;
    const G = Xn.closestPointToPointParameter(lu, !0);
    Xn.at(G, hp);
    const x = wp.lerp(Kn.z, Qn.z, G), I = x >= -1 && x <= 1, F = lu.distanceTo(hp) < Mo * 0.5;
    if (I && F) {
      Xn.start.fromBufferAttribute(p, B), Xn.end.fromBufferAttribute(g, B), Xn.start.applyMatrix4(d), Xn.end.applyMatrix4(d);
      const z = new Ke(), P = new Ke();
      fr.distanceSqToSegment(Xn.start, Xn.end, P, z), i.push({
        point: P,
        pointOnLine: z,
        distance: fr.origin.distanceTo(P),
        object: a,
        face: null,
        faceIndex: B,
        uv: null,
        [eh]: null
      });
    }
  }
}
class ch extends es {
  constructor(t = new zu(), i = new Ju({ color: Math.random() * 16777215 })) {
    super(t, i), this.isLineSegments2 = !0, this.type = "LineSegments2";
  }
  // for backwards-compatibility, but could be a method of LineSegmentsGeometry...
  computeLineDistances() {
    const t = this.geometry, i = t.attributes.instanceStart, s = t.attributes.instanceEnd, l = new Float32Array(2 * i.count);
    for (let d = 0, h = 0, p = i.count; d < p; d++, h += 2)
      dp.fromBufferAttribute(i, d), pp.fromBufferAttribute(s, d), l[h] = h === 0 ? 0 : l[h - 1], l[h + 1] = l[h] + dp.distanceTo(pp);
    const c = new mu(l, 2, 1);
    return t.setAttribute("instanceDistanceStart", new yo(c, 1, 0)), t.setAttribute("instanceDistanceEnd", new yo(c, 1, 1)), this;
  }
  raycast(t, i) {
    const s = this.material.worldUnits, l = t.camera;
    l === null && !s && console.error(
      'LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'
    );
    const c = t.params.Line2 !== void 0 && t.params.Line2.threshold || 0;
    fr = t.ray;
    const d = this.matrixWorld, h = this.geometry, p = this.material;
    Mo = p.linewidth + c, h.boundingSphere === null && h.computeBoundingSphere(), Ws.copy(h.boundingSphere).applyMatrix4(d);
    let g;
    if (s)
      g = Mo * 0.5;
    else {
      const A = Math.max(l.near, Ws.distanceToPoint(fr.origin));
      g = mp(l, A, p.resolution);
    }
    if (Ws.radius += g, fr.intersectsSphere(Ws) === !1)
      return;
    h.boundingBox === null && h.computeBoundingBox(), Ys.copy(h.boundingBox).applyMatrix4(d);
    let v;
    if (s)
      v = Mo * 0.5;
    else {
      const A = Math.max(l.near, Ys.distanceToPoint(fr.origin));
      v = mp(l, A, p.resolution);
    }
    Ys.expandByScalar(v), fr.intersectsBox(Ys) !== !1 && (s ? vB(this, i) : bB(this, l, i));
  }
  onBeforeRender(t) {
    const i = this.material.uniforms;
    i && i.resolution && (t.getViewport(au), this.material.uniforms.resolution.value.set(au.z, au.w));
  }
}
class BB extends ch {
  constructor(t = new uh(), i = new Ju({ color: Math.random() * 16777215 })) {
    super(t, i), this.isLine2 = !0, this.type = "Line2";
  }
}
let Zs;
const cu = () => {
  if (Zs)
    return Zs;
  const a = "B9h9z9tFBBBF8fL9gBB9gLaaaaaFa9gEaaaB9gFaFa9gEaaaFaEMcBFFFGGGEIIILF9wFFFLEFBFKNFaFCx/IFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBF8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBGy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBEn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBIi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBKI9z9iqlBOc+x8ycGBM/qQFTa8jUUUUBCU/EBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAGTkUUUBRNCUoBAG9uC/wgBZHKCUGAKCUG9JyRVAECFJRICBRcGXEXAcAF9PQFAVAFAclAcAVJAF9JyRMGXGXAG9FQBAMCbJHKC9wZRSAKCIrCEJCGrRQANCUGJRfCBRbAIRTEXGXAOATlAQ9PQBCBRISEMATAQJRIGXAS9FQBCBRtCBREEXGXAOAIlCi9PQBCBRISLMANCU/CBJAEJRKGXGXGXGXGXATAECKrJ2BBAtCKZrCEZfIBFGEBMAKhB83EBAKCNJhB83EBSEMAKAI2BIAI2BBHmCKrHYAYCE6HYy86BBAKCFJAICIJAYJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCGJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCEJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCIJAYAmJHY2BBAI2BFHmCKrHPAPCE6HPy86BBAKCLJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCKJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCOJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCNJAYAmJHY2BBAI2BGHmCKrHPAPCE6HPy86BBAKCVJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCcJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCMJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCSJAYAmJHm2BBAI2BEHICKrHYAYCE6HYy86BBAKCQJAmAYJHm2BBAICIrCEZHYAYCE6HYy86BBAKCfJAmAYJHm2BBAICGrCEZHYAYCE6HYy86BBAKCbJAmAYJHK2BBAICEZHIAICE6HIy86BBAKAIJRISGMAKAI2BNAI2BBHmCIrHYAYCb6HYy86BBAKCFJAICNJAYJHY2BBAmCbZHmAmCb6Hmy86BBAKCGJAYAmJHm2BBAI2BFHYCIrHPAPCb6HPy86BBAKCEJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCIJAmAYJHm2BBAI2BGHYCIrHPAPCb6HPy86BBAKCLJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCKJAmAYJHm2BBAI2BEHYCIrHPAPCb6HPy86BBAKCOJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCNJAmAYJHm2BBAI2BIHYCIrHPAPCb6HPy86BBAKCVJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCcJAmAYJHm2BBAI2BLHYCIrHPAPCb6HPy86BBAKCMJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCSJAmAYJHm2BBAI2BKHYCIrHPAPCb6HPy86BBAKCQJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCfJAmAYJHm2BBAI2BOHICIrHYAYCb6HYy86BBAKCbJAmAYJHK2BBAICbZHIAICb6HIy86BBAKAIJRISFMAKAI8pBB83BBAKCNJAICNJ8pBB83BBAICTJRIMAtCGJRtAECTJHEAS9JQBMMGXAIQBCBRISEMGXAM9FQBANAbJ2BBRtCBRKAfREEXAEANCU/CBJAKJ2BBHTCFrCBATCFZl9zAtJHt86BBAEAGJREAKCFJHKAM9HQBMMAfCFJRfAIRTAbCFJHbAG9HQBMMABAcAG9sJANCUGJAMAG9sTkUUUBpANANCUGJAMCaJAG9sJAGTkUUUBpMAMCBAIyAcJRcAIQBMC9+RKSFMCBC99AOAIlAGCAAGCA9Ly6yRKMALCU/EBJ8kUUUUBAKM+OmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUFT+JUUUBpALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM+lLKFaF99GaG99FaG99GXGXAGCI9HQBAF9FQFEXGXGX9DBBB8/9DBBB+/ABCGJHG1BB+yAB1BBHE+yHI+L+TABCFJHL1BBHK+yHO+L+THN9DBBBB9gHVyAN9DBB/+hANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE86BBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG86BBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG86BBABCIJRBAFCaJHFQBSGMMAF9FQBEXGXGX9DBBB8/9DBBB+/ABCIJHG8uFB+yAB8uFBHE+yHI+L+TABCGJHL8uFBHK+yHO+L+THN9DBBBB9gHVyAN9DB/+g6ANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE87FBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG87FBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG87FBABCNJRBAFCaJHFQBMMM/SEIEaE99EaF99GXAF9FQBCBREABRIEXGXGX9D/zI818/AICKJ8uFBHLCEq+y+VHKAI8uFB+y+UHO9DB/+g6+U9DBBB8/9DBBB+/AO9DBBBB9gy+SHN+L9DBBB9P9d9FQBAN+oRVSFMCUUUU94RVMAICIJ8uFBRcAICGJ8uFBRMABALCFJCEZAEqCFWJAV87FBGXGXAKAM+y+UHN9DB/+g6+U9DBBB8/9DBBB+/AN9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRMSFMCUUUU94RMMABALCGJCEZAEqCFWJAM87FBGXGXAKAc+y+UHK9DB/+g6+U9DBBB8/9DBBB+/AK9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRcSFMCUUUU94RcMABALCaJCEZAEqCFWJAc87FBGXGX9DBBU8/AOAO+U+TANAN+U+TAKAK+U+THO9DBBBBAO9DBBBB9gy+R9DB/+g6+U9DBBB8/+SHO+L9DBBB9P9d9FQBAO+oRcSFMCUUUU94RcMABALCEZAEqCFWJAc87FBAICNJRIAECIJREAFCaJHFQBMMM9JBGXAGCGrAF9sHF9FQBEXABAB8oGBHGCNWCN91+yAGCi91CnWCUUU/8EJ+++U84GBABCIJRBAFCaJHFQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEM/lFFFaGXGXAFABqCEZ9FQBABRESFMGXGXAGCT9PQBABRESFMABREEXAEAF8oGBjGBAECIJAFCIJ8oGBjGBAECNJAFCNJ8oGBjGBAECSJAFCSJ8oGBjGBAECTJREAFCTJRFAGC9wJHGCb9LQBMMAGCI9JQBEXAEAF8oGBjGBAFCIJRFAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF2BB86BBAECFJREAFCFJRFAGCaJHGQBMMABMoFFGaGXGXABCEZ9FQBABRESFMAFCgFZC+BwsN9sRIGXGXAGCT9PQBABRESFMABREEXAEAIjGBAECSJAIjGBAECNJAIjGBAECIJAIjGBAECTJREAGC9wJHGCb9LQBMMAGCI9JQBEXAEAIjGBAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF86BBAECFJREAGCaJHGQBMMABMMMFBCUNMIT9kBB", t = "B9h9z9tFBBBFiI9gBB9gLaaaaaFa9gEaaaB9gFaFaEMcBBFBFFGGGEILF9wFFFLEFBFKNFaFCx/aFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBG8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBIy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBKi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBOn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBNI9z9iqlBVc+N9IcIBTEM9+FLa8jUUUUBCTlRBCBRFEXCBRGCBREEXABCNJAGJAECUaAFAGrCFZHIy86BBAEAIJREAGCFJHGCN9HQBMAFCx+YUUBJAE86BBAFCEWCxkUUBJAB8pEN83EBAFCFJHFCUG9HQBMMk8lLbaE97F9+FaL978jUUUUBCU/KBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAG/8cBBCUoBAG9uC/wgBZHKCUGAKCUG9JyRNAECFJRKCBRVGXEXAVAF9PQFANAFAVlAVANJAF9JyRcGXGXAG9FQBAcCbJHIC9wZHMCE9sRSAMCFWRQAICIrCEJCGrRfCBRbEXAKRTCBRtGXEXGXAOATlAf9PQBCBRKSLMALCU/CBJAtAM9sJRmATAfJRKCBREGXAMCoB9JQBAOAKlC/gB9JQBCBRIEXAmAIJREGXGXGXGXGXATAICKrJ2BBHYCEZfIBFGEBMAECBDtDMIBSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIBAKCTJRKMGXGXGXGXGXAYCGrCEZfIBFGEBMAECBDtDMITSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMITAKCTJRKMGXGXGXGXGXAYCIrCEZfIBFGEBMAECBDtDMIASEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIAAKCTJRKMGXGXGXGXGXAYCKrfIBFGEBMAECBDtDMI8wSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCIJAeDeBJAYCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCNJAeDeBJAYCx+YUUBJ2BBJRKSFMAEAKDBBBDMI8wAKCTJRKMAICoBJREAICUFJAM9LQFAERIAOAKlC/fB9LQBMMGXAEAM9PQBAECErRIEXGXAOAKlCi9PQBCBRKSOMAmAEJRYGXGXGXGXGXATAECKrJ2BBAICKZrCEZfIBFGEBMAYCBDtDMIBSEMAYAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAYAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAYAKDBBBDMIBAKCTJRKMAICGJRIAECTJHEAM9JQBMMGXAK9FQBAKRTAtCFJHtCI6QGSFMMCBRKSEMGXAM9FQBALCUGJAbJREALAbJDBGBReCBRYEXAEALCU/CBJAYJHIDBIBHdCFD9tAdCFDbHPD9OD9hD9RHdAIAMJDBIBH8ZCFD9tA8ZAPD9OD9hD9RH8ZDQBTFtGmEYIPLdKeOnHpAIAQJDBIBHyCFD9tAyAPD9OD9hD9RHyAIASJDBIBH8cCFD9tA8cAPD9OD9hD9RH8cDQBTFtGmEYIPLdKeOnH8dDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGEAeD9uHeDyBjGBAEAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeApA8dDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNiV8ZcpMyS8cQ8df8eb8fHdAyA8cDQNiV8ZcpMyS8cQ8df8eb8fH8ZDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJREAYCTJHYAM9JQBMMAbCIJHbAG9JQBMMABAVAG9sJALCUGJAcAG9s/8cBBALALCUGJAcCaJAG9sJAG/8cBBMAcCBAKyAVJRVAKQBMC9+RKSFMCBC99AOAKlAGCAAGCA9Ly6yRKMALCU/KBJ8kUUUUBAKMNBT+BUUUBM+KmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUF/8MBALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM/dLEK97FaF97GXGXAGCI9HQBAF9FQFCBRGEXABABDBBBHECiD+rFCiD+sFD/6FHIAECND+rFCiD+sFD/6FAID/gFAECTD+rFCiD+sFD/6FHLD/gFD/kFD/lFHKCBDtD+2FHOAICUUUU94DtHND9OD9RD/kFHI9DBB/+hDYAIAID/mFAKAKD/mFALAOALAND9OD9RD/kFHIAID/mFD/kFD/kFD/jFD/nFHLD/mF9DBBX9LDYHOD/kFCgFDtD9OAECUUU94DtD9OD9QAIALD/mFAOD/kFCND+rFCU/+EDtD9OD9QAKALD/mFAOD/kFCTD+rFCUU/8ODtD9OD9QDMBBABCTJRBAGCIJHGAF9JQBSGMMAF9FQBCBRGEXABCTJHVAVDBBBHECBDtHOCUU98D8cFCUU98D8cEHND9OABDBBBHKAEDQILKOSQfbPden8c8d8e8fCggFDtD9OD/6FAKAEDQBFGENVcMTtmYi8ZpyHECTD+sFD/6FHID/gFAECTD+rFCTD+sFD/6FHLD/gFD/kFD/lFHE9DB/+g6DYALAEAOD+2FHOALCUUUU94DtHcD9OD9RD/kFHLALD/mFAEAED/mFAIAOAIAcD9OD9RD/kFHEAED/mFD/kFD/kFD/jFD/nFHID/mF9DBBX9LDYHOD/kFCTD+rFALAID/mFAOD/kFCggEDtD9OD9QHLAEAID/mFAOD/kFCaDbCBDnGCBDnECBDnKCBDnOCBDncCBDnMCBDnfCBDnbD9OHEDQNVi8ZcMpySQ8c8dfb8e8fD9QDMBBABAKAND9OALAEDQBFTtGEmYILPdKOenD9QDMBBABCAJRBAGCIJHGAF9JQBMMM/hEIGaF97FaL978jUUUUBCTlREGXAF9FQBCBRIEXAEABDBBBHLABCTJHKDBBBHODQILKOSQfbPden8c8d8e8fHNCTD+sFHVCID+rFDMIBAB9DBBU8/DY9D/zI818/DYAVCEDtD9QD/6FD/nFHVALAODQBFGENVcMTtmYi8ZpyHLCTD+rFCTD+sFD/6FD/mFHOAOD/mFAVALCTD+sFD/6FD/mFHcAcD/mFAVANCTD+rFCTD+sFD/6FD/mFHNAND/mFD/kFD/kFD/lFCBDtD+4FD/jF9DB/+g6DYHVD/mF9DBBX9LDYHLD/kFCggEDtHMD9OAcAVD/mFALD/kFCTD+rFD9QHcANAVD/mFALD/kFCTD+rFAOAVD/mFALD/kFAMD9OD9QHVDQBFTtGEmYILPdKOenHLD8dBAEDBIBDyB+t+J83EBABCNJALD8dFAEDBIBDyF+t+J83EBAKAcAVDQNVi8ZcMpySQ8c8dfb8e8fHVD8dBAEDBIBDyG+t+J83EBABCiJAVD8dFAEDBIBDyE+t+J83EBABCAJRBAICIJHIAF9JQBMMM9jFF97GXAGCGrAF9sHG9FQBCBRFEXABABDBBBHECND+rFCND+sFD/6FAECiD+sFCnD+rFCUUU/8EDtD+uFD/mFDMBBABCTJRBAFCIJHFAG9JQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEMMMFBCUNMIT9tBB", i = new Uint8Array([
    0,
    97,
    115,
    109,
    1,
    0,
    0,
    0,
    1,
    4,
    1,
    96,
    0,
    0,
    3,
    3,
    2,
    0,
    0,
    5,
    3,
    1,
    0,
    1,
    12,
    1,
    0,
    10,
    22,
    2,
    12,
    0,
    65,
    0,
    65,
    0,
    65,
    0,
    252,
    10,
    0,
    0,
    11,
    7,
    0,
    65,
    0,
    253,
    15,
    26,
    11
  ]), s = new Uint8Array([
    32,
    0,
    65,
    253,
    3,
    1,
    2,
    34,
    4,
    106,
    6,
    5,
    11,
    8,
    7,
    20,
    13,
    33,
    12,
    16,
    128,
    9,
    116,
    64,
    19,
    113,
    127,
    15,
    10,
    21,
    22,
    14,
    255,
    66,
    24,
    54,
    136,
    107,
    18,
    23,
    192,
    26,
    114,
    118,
    132,
    17,
    77,
    101,
    130,
    144,
    27,
    87,
    131,
    44,
    45,
    74,
    156,
    154,
    70,
    167
  ]);
  if (typeof WebAssembly != "object")
    return {
      supported: !1
    };
  let l = a;
  WebAssembly.validate(i) && (l = t);
  let c;
  const d = WebAssembly.instantiate(h(l), {}).then((A) => {
    c = A.instance, c.exports.__wasm_call_ctors();
  });
  function h(A) {
    const B = new Uint8Array(A.length);
    for (let E = 0; E < A.length; ++E) {
      const G = A.charCodeAt(E);
      B[E] = G > 96 ? G - 71 : G > 64 ? G - 65 : G > 47 ? G + 4 : G > 46 ? 63 : 62;
    }
    let C = 0;
    for (let E = 0; E < A.length; ++E)
      B[C++] = B[E] < 60 ? s[B[E]] : (B[E] - 60) * 64 + B[++E];
    return B.buffer.slice(0, C);
  }
  function p(A, B, C, E, G, x) {
    const I = c.exports.sbrk, F = C + 3 & -4, z = I(F * E), P = I(G.length), j = new Uint8Array(c.exports.memory.buffer);
    j.set(G, P);
    const R = A(z, C, E, P, G.length);
    if (R === 0 && x && x(z, F, E), B.set(j.subarray(z, z + C * E)), I(z - I(0)), R !== 0)
      throw new Error(`Malformed buffer data: ${R}`);
  }
  const g = {
    // legacy index-based enums for glTF
    0: "",
    1: "meshopt_decodeFilterOct",
    2: "meshopt_decodeFilterQuat",
    3: "meshopt_decodeFilterExp",
    // string-based enums for glTF
    NONE: "",
    OCTAHEDRAL: "meshopt_decodeFilterOct",
    QUATERNION: "meshopt_decodeFilterQuat",
    EXPONENTIAL: "meshopt_decodeFilterExp"
  }, v = {
    // legacy index-based enums for glTF
    0: "meshopt_decodeVertexBuffer",
    1: "meshopt_decodeIndexBuffer",
    2: "meshopt_decodeIndexSequence",
    // string-based enums for glTF
    ATTRIBUTES: "meshopt_decodeVertexBuffer",
    TRIANGLES: "meshopt_decodeIndexBuffer",
    INDICES: "meshopt_decodeIndexSequence"
  };
  return Zs = {
    ready: d,
    supported: !0,
    decodeVertexBuffer(A, B, C, E, G) {
      p(
        c.exports.meshopt_decodeVertexBuffer,
        A,
        B,
        C,
        E,
        c.exports[g[G]]
      );
    },
    decodeIndexBuffer(A, B, C, E) {
      p(c.exports.meshopt_decodeIndexBuffer, A, B, C, E);
    },
    decodeIndexSequence(A, B, C, E) {
      p(c.exports.meshopt_decodeIndexSequence, A, B, C, E);
    },
    decodeGltfBuffer(A, B, C, E, G, x) {
      p(
        c.exports[v[G]],
        A,
        B,
        C,
        E,
        c.exports[g[x]]
      );
    }
  }, Zs;
}, Vs = /* @__PURE__ */ Q.forwardRef(function({
  points: t,
  color: i = 16777215,
  vertexColors: s,
  linewidth: l,
  lineWidth: c,
  segments: d,
  dashed: h,
  ...p
}, g) {
  var v, A;
  const B = et((I) => I.size), C = Q.useMemo(() => d ? new ch() : new BB(), [d]), [E] = Q.useState(() => new Ju()), G = (s == null || (v = s[0]) == null ? void 0 : v.length) === 4 ? 4 : 3, x = Q.useMemo(() => {
    const I = d ? new zu() : new uh(), F = t.map((z) => {
      const P = Array.isArray(z);
      return z instanceof Ke || z instanceof mi ? [z.x, z.y, z.z] : z instanceof $n ? [z.x, z.y, 0] : P && z.length === 3 ? [z[0], z[1], z[2]] : P && z.length === 2 ? [z[0], z[1], 0] : z;
    });
    if (I.setPositions(F.flat()), s) {
      i = 16777215;
      const z = s.map((P) => P instanceof no ? P.toArray() : P);
      I.setColors(z.flat(), G);
    }
    return I;
  }, [t, d, s, G]);
  return Q.useLayoutEffect(() => {
    C.computeLineDistances();
  }, [t, C]), Q.useLayoutEffect(() => {
    h ? E.defines.USE_DASH = "" : delete E.defines.USE_DASH, E.needsUpdate = !0;
  }, [h, E]), Q.useEffect(() => () => {
    x.dispose(), E.dispose();
  }, [x]), /* @__PURE__ */ Q.createElement("primitive", Io({
    object: C,
    ref: g
  }, p), /* @__PURE__ */ Q.createElement("primitive", {
    object: x,
    attach: "geometry"
  }), /* @__PURE__ */ Q.createElement("primitive", Io({
    object: E,
    attach: "material",
    color: i,
    vertexColors: !!s,
    resolution: [B.width, B.height],
    linewidth: (A = l ?? c) !== null && A !== void 0 ? A : 1,
    dashed: h,
    transparent: G === 4
  }, p)));
});
let qs = null, fh = "https://www.gstatic.com/draco/versioned/decoders/1.5.5/";
function dh(a = !0, t = !0, i) {
  return (s) => {
    i && i(s), a && (qs || (qs = new gB()), qs.setDecoderPath(typeof a == "string" ? a : fh), s.setDRACOLoader(qs)), t && s.setMeshoptDecoder(typeof cu == "function" ? cu() : cu);
  };
}
const ba = (a, t, i, s) => Lr(Uu, a, dh(t, i, s));
ba.preload = (a, t, i, s) => Lr.preload(Uu, a, dh(t, i, s));
ba.clear = (a) => Lr.clear(Uu, a);
ba.setDecoderPath = (a) => {
  fh = a;
};
const yB = /* @__PURE__ */ Q.forwardRef(({
  makeDefault: a,
  camera: t,
  regress: i,
  domElement: s,
  enableDamping: l = !0,
  keyEvents: c = !1,
  onChange: d,
  onStart: h,
  onEnd: p,
  ...g
}, v) => {
  const A = et((R) => R.invalidate), B = et((R) => R.camera), C = et((R) => R.gl), E = et((R) => R.events), G = et((R) => R.setEvents), x = et((R) => R.set), I = et((R) => R.get), F = et((R) => R.performance), z = t || B, P = s || E.connected || C.domElement, j = Q.useMemo(() => new _b(z), [z]);
  return Aa(() => {
    j.enabled && j.update();
  }, -1), Q.useEffect(() => (c && j.connect(c === !0 ? P : c), j.connect(P), () => {
    j.dispose();
  }), [c, P, i, j, A]), Q.useEffect(() => {
    const R = (O) => {
      A(), i && F.regress(), d && d(O);
    }, re = (O) => {
      h && h(O);
    }, J = (O) => {
      p && p(O);
    };
    return j.addEventListener("change", R), j.addEventListener("start", re), j.addEventListener("end", J), () => {
      j.removeEventListener("start", re), j.removeEventListener("end", J), j.removeEventListener("change", R);
    };
  }, [d, h, p, j, A, G]), Q.useEffect(() => {
    if (a) {
      const R = I().controls;
      return x({
        controls: j
      }), () => x({
        controls: R
      });
    }
  }, [a, j]), /* @__PURE__ */ Q.createElement("primitive", Io({
    ref: v,
    object: j,
    enableDamping: l
  }, g));
}), ph = (a, t, i) => {
  let s;
  switch (a) {
    case Au:
      s = new Uint8ClampedArray(t * i * 4);
      break;
    case kt:
      s = new Uint16Array(t * i * 4);
      break;
    case wA:
      s = new Uint32Array(t * i * 4);
      break;
    case MA:
      s = new Int8Array(t * i * 4);
      break;
    case SA:
      s = new Int16Array(t * i * 4);
      break;
    case EA:
      s = new Int32Array(t * i * 4);
      break;
    case _r:
      s = new Float32Array(t * i * 4);
      break;
    default:
      throw new Error("Unsupported data type");
  }
  return s;
};
let $s;
const CB = (a, t, i, s) => {
  if ($s !== void 0)
    return $s;
  const l = new xp(1, 1, s);
  t.setRenderTarget(l);
  const c = new es(new Rp(), new li({ color: 16777215 }));
  t.render(c, i), t.setRenderTarget(null);
  const d = ph(a, l.width, l.height);
  return t.readRenderTargetPixels(l, 0, 0, l.width, l.height, d), l.dispose(), c.geometry.dispose(), c.material.dispose(), $s = d[0] !== 0, $s;
};
class ju {
  _renderer;
  _rendererIsDisposable = !1;
  _material;
  _scene;
  _camera;
  _quad;
  _renderTarget;
  _width;
  _height;
  _type;
  _colorSpace;
  _supportsReadPixels = !0;
  /**
   * Constructs a new QuadRenderer
   *
   * @param options Parameters for this QuadRenderer
   */
  constructor(t) {
    this._width = t.width, this._height = t.height, this._type = t.type, this._colorSpace = t.colorSpace;
    const i = {
      // fixed options
      format: Vi,
      depthBuffer: !1,
      stencilBuffer: !1,
      // user options
      type: this._type,
      // set in class property
      colorSpace: this._colorSpace,
      // set in class property
      anisotropy: t.renderTargetOptions?.anisotropy !== void 0 ? t.renderTargetOptions?.anisotropy : 1,
      generateMipmaps: t.renderTargetOptions?.generateMipmaps !== void 0 ? t.renderTargetOptions?.generateMipmaps : !1,
      magFilter: t.renderTargetOptions?.magFilter !== void 0 ? t.renderTargetOptions?.magFilter : Ot,
      minFilter: t.renderTargetOptions?.minFilter !== void 0 ? t.renderTargetOptions?.minFilter : Ot,
      samples: t.renderTargetOptions?.samples !== void 0 ? t.renderTargetOptions?.samples : void 0,
      wrapS: t.renderTargetOptions?.wrapS !== void 0 ? t.renderTargetOptions?.wrapS : xr,
      wrapT: t.renderTargetOptions?.wrapT !== void 0 ? t.renderTargetOptions?.wrapT : xr
    };
    if (this._material = t.material, t.renderer ? this._renderer = t.renderer : (this._renderer = ju.instantiateRenderer(), this._rendererIsDisposable = !0), this._scene = new Fp(), this._camera = new So(), this._camera.position.set(0, 0, 10), this._camera.left = -0.5, this._camera.right = 0.5, this._camera.top = 0.5, this._camera.bottom = -0.5, this._camera.updateProjectionMatrix(), !CB(this._type, this._renderer, this._camera, i)) {
      let s;
      this._type === kt && (s = this._renderer.extensions.has("EXT_color_buffer_float") ? _r : void 0), s !== void 0 ? (console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${_r}`), this._type = s) : (this._supportsReadPixels = !1, console.warn("This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown"));
    }
    this._quad = new es(new Rp(), this._material), this._quad.geometry.computeBoundingBox(), this._scene.add(this._quad), this._renderTarget = new xp(this.width, this.height, i), this._renderTarget.texture.mapping = t.renderTargetOptions?.mapping !== void 0 ? t.renderTargetOptions?.mapping : sa;
  }
  /**
   * Instantiates a temporary renderer
   *
   * @returns
   */
  static instantiateRenderer() {
    const t = new yA();
    return t.setSize(128, 128), t;
  }
  /**
   * Renders the input texture using the specified material
   */
  render = () => {
    this._renderer.setRenderTarget(this._renderTarget);
    try {
      this._renderer.render(this._scene, this._camera);
    } catch (t) {
      throw this._renderer.setRenderTarget(null), t;
    }
    this._renderer.setRenderTarget(null);
  };
  /**
   * Obtains a Buffer containing the rendered texture.
   *
   * @throws Error if the browser cannot read pixels from this RenderTarget type.
   * @returns a TypedArray containing RGBA values from this renderer
   */
  toArray() {
    if (!this._supportsReadPixels)
      throw new Error("Can't read pixels in this browser");
    const t = ph(this._type, this._width, this._height);
    return this._renderer.readRenderTargetPixels(this._renderTarget, 0, 0, this._width, this._height, t), t;
  }
  /**
   * Performs a readPixel operation in the renderTarget
   * and returns a DataTexture containing the read data
   *
   * @param options options
   * @returns
   */
  toDataTexture(t) {
    const i = new CA(
      // fixed values
      this.toArray(),
      this.width,
      this.height,
      Vi,
      this._type,
      // user values
      t?.mapping || sa,
      t?.wrapS || xr,
      t?.wrapT || xr,
      t?.magFilter || Ot,
      t?.minFilter || Ot,
      t?.anisotropy || 1,
      // fixed value
      gu
    );
    return i.generateMipmaps = t?.generateMipmaps !== void 0 ? t?.generateMipmaps : !1, i;
  }
  /**
   * If using a disposable renderer, it will dispose it.
   */
  disposeOnDemandRenderer() {
    this._renderer.setRenderTarget(null), this._rendererIsDisposable && (this._renderer.dispose(), this._renderer.forceContextLoss());
  }
  /**
   * Will dispose of **all** assets used by this renderer.
   *
   *
   * @param disposeRenderTarget will dispose of the renderTarget which will not be usable later
   * set this to true if you passed the `renderTarget.texture` to a `PMREMGenerator`
   * or are otherwise done with it.
   *
   * @example
   * ```js
   * const loader = new HDRJPGLoader(renderer)
   * const result = await loader.loadAsync('gainmap.jpeg')
   * const mesh = new Mesh(geometry, new MeshBasicMaterial({ map: result.renderTarget.texture }) )
   * // DO NOT dispose the renderTarget here,
   * // it is used directly in the material
   * result.dispose()
   * ```
   *
   * @example
   * ```js
   * const loader = new HDRJPGLoader(renderer)
   * const pmremGenerator = new PMREMGenerator( renderer );
   * const result = await loader.loadAsync('gainmap.jpeg')
   * const envMap = pmremGenerator.fromEquirectangular(result.renderTarget.texture)
   * const mesh = new Mesh(geometry, new MeshStandardMaterial({ envMap }) )
   * // renderTarget can be disposed here
   * // because it was used to generate a PMREM texture
   * result.dispose(true)
   * ```
   */
  dispose(t) {
    this.disposeOnDemandRenderer(), t && this.renderTarget.dispose(), this.material instanceof ma && Object.values(this.material.uniforms).forEach((i) => {
      i.value instanceof qr && i.value.dispose();
    }), Object.values(this.material).forEach((i) => {
      i instanceof qr && i.dispose();
    }), this.material.dispose(), this._quad.geometry.dispose();
  }
  /**
   * Width of the texture
   */
  get width() {
    return this._width;
  }
  set width(t) {
    this._width = t, this._renderTarget.setSize(this._width, this._height);
  }
  /**
   * Height of the texture
   */
  get height() {
    return this._height;
  }
  set height(t) {
    this._height = t, this._renderTarget.setSize(this._width, this._height);
  }
  /**
   * The renderer used
   */
  get renderer() {
    return this._renderer;
  }
  /**
   * The `WebGLRenderTarget` used.
   */
  get renderTarget() {
    return this._renderTarget;
  }
  set renderTarget(t) {
    this._renderTarget = t, this._width = t.width, this._height = t.height;
  }
  /**
   * The `Material` used.
   */
  get material() {
    return this._material;
  }
  /**
   *
   */
  get type() {
    return this._type;
  }
  get colorSpace() {
    return this._colorSpace;
  }
}
class hh extends Error {
}
class mh extends Error {
}
const ji = (a, t, i) => {
  const s = new RegExp(`${t}="([^"]*)"`, "i").exec(a);
  if (s)
    return s[1];
  const l = new RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`, "i").exec(a);
  if (l) {
    const c = l[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);
    return c && c.length === 3 ? c.map((d) => d.replace(/<\/?rdf:li>/g, "")) : l[1].trim();
  }
  if (i !== void 0)
    return i;
  throw new Error(`Can't find ${t} in gainmap metadata`);
}, EB = (a) => {
  let t;
  typeof TextDecoder < "u" ? t = new TextDecoder().decode(a) : t = a.toString();
  let i = t.indexOf("<x:xmpmeta");
  for (; i !== -1; ) {
    const s = t.indexOf("x:xmpmeta>", i), l = t.slice(i, s + 10);
    try {
      const c = ji(l, "hdrgm:GainMapMin", "0"), d = ji(l, "hdrgm:GainMapMax"), h = ji(l, "hdrgm:Gamma", "1"), p = ji(l, "hdrgm:OffsetSDR", "0.015625"), g = ji(l, "hdrgm:OffsetHDR", "0.015625"), v = /hdrgm:HDRCapacityMin="([^"]*)"/.exec(l), A = v ? v[1] : "0", B = /hdrgm:HDRCapacityMax="([^"]*)"/.exec(l);
      if (!B)
        throw new Error("Incomplete gainmap metadata");
      const C = B[1];
      return {
        gainMapMin: Array.isArray(c) ? c.map((E) => parseFloat(E)) : [parseFloat(c), parseFloat(c), parseFloat(c)],
        gainMapMax: Array.isArray(d) ? d.map((E) => parseFloat(E)) : [parseFloat(d), parseFloat(d), parseFloat(d)],
        gamma: Array.isArray(h) ? h.map((E) => parseFloat(E)) : [parseFloat(h), parseFloat(h), parseFloat(h)],
        offsetSdr: Array.isArray(p) ? p.map((E) => parseFloat(E)) : [parseFloat(p), parseFloat(p), parseFloat(p)],
        offsetHdr: Array.isArray(g) ? g.map((E) => parseFloat(E)) : [parseFloat(g), parseFloat(g), parseFloat(g)],
        hdrCapacityMin: parseFloat(A),
        hdrCapacityMax: parseFloat(C)
      };
    } catch {
    }
    i = t.indexOf("<x:xmpmeta", s);
  }
};
class SB {
  options;
  constructor(t) {
    this.options = {
      debug: t && t.debug !== void 0 ? t.debug : !1,
      extractFII: t && t.extractFII !== void 0 ? t.extractFII : !0,
      extractNonFII: t && t.extractNonFII !== void 0 ? t.extractNonFII : !0
    };
  }
  extract(t) {
    return new Promise((i, s) => {
      const l = this.options.debug, c = new DataView(t.buffer);
      if (c.getUint16(0) !== 65496) {
        s(new Error("Not a valid jpeg"));
        return;
      }
      const d = c.byteLength;
      let h = 2, p = 0, g;
      for (; h < d; ) {
        if (++p > 250) {
          s(new Error(`Found no marker after ${p} loops 😵`));
          return;
        }
        if (c.getUint8(h) !== 255) {
          s(new Error(`Not a valid marker at offset 0x${h.toString(16)}, found: 0x${c.getUint8(h).toString(16)}`));
          return;
        }
        if (g = c.getUint8(h + 1), l && console.log(`Marker: ${g.toString(16)}`), g === 226) {
          l && console.log("Found APP2 marker (0xffe2)");
          const v = h + 4;
          if (c.getUint32(v) === 1297106432) {
            const A = v + 4;
            let B;
            if (c.getUint16(A) === 18761)
              B = !1;
            else if (c.getUint16(A) === 19789)
              B = !0;
            else {
              s(new Error("No valid endianness marker found in TIFF header"));
              return;
            }
            if (c.getUint16(A + 2, !B) !== 42) {
              s(new Error("Not valid TIFF data! (no 0x002A marker)"));
              return;
            }
            const C = c.getUint32(A + 4, !B);
            if (C < 8) {
              s(new Error("Not valid TIFF data! (First offset less than 8)"));
              return;
            }
            const E = A + C, G = c.getUint16(E, !B), x = E + 2;
            let I = 0;
            for (let j = x; j < x + 12 * G; j += 12)
              c.getUint16(j, !B) === 45057 && (I = c.getUint32(j + 8, !B));
            const z = E + 2 + G * 12 + 4, P = [];
            for (let j = z; j < z + I * 16; j += 16) {
              const R = {
                MPType: c.getUint32(j, !B),
                size: c.getUint32(j + 4, !B),
                // This offset is specified relative to the address of the MP Endian
                // field in the MP Header, unless the image is a First Individual Image,
                // in which case the value of the offset shall be NULL (0x00000000).
                dataOffset: c.getUint32(j + 8, !B),
                dependantImages: c.getUint32(j + 12, !B),
                start: -1,
                end: -1,
                isFII: !1
              };
              R.dataOffset ? (R.start = A + R.dataOffset, R.isFII = !1) : (R.start = 0, R.isFII = !0), R.end = R.start + R.size, P.push(R);
            }
            if (this.options.extractNonFII && P.length) {
              const j = new Blob([c]), R = [];
              for (const re of P) {
                if (re.isFII && !this.options.extractFII)
                  continue;
                const J = j.slice(re.start, re.end + 1, "image/jpeg");
                R.push(J);
              }
              i(R);
            }
          }
        }
        h += 2 + c.getUint16(h + 2);
      }
    });
  }
}
const MB = async (a) => {
  const t = EB(a);
  if (!t)
    throw new mh("Gain map XMP metadata not found");
  const s = await new SB({ extractFII: !0, extractNonFII: !0 }).extract(a);
  if (s.length !== 2)
    throw new hh("Gain map recovery image not found");
  return {
    sdr: new Uint8Array(await s[0].arrayBuffer()),
    gainMap: new Uint8Array(await s[1].arrayBuffer()),
    metadata: t
  };
}, gp = (a) => new Promise((t, i) => {
  const s = document.createElement("img");
  s.onload = () => {
    t(s);
  }, s.onerror = (l) => {
    i(l);
  }, s.src = URL.createObjectURL(a);
});
class wB extends xu {
  _renderer;
  _renderTargetOptions;
  _internalLoadingManager;
  _config;
  constructor(t, i) {
    super(i), this._config = t, t.renderer && (this._renderer = t.renderer), this._internalLoadingManager = new IA();
  }
  setRenderer(t) {
    return this._renderer = t, this;
  }
  setRenderTargetOptions(t) {
    return this._renderTargetOptions = t, this;
  }
  prepareQuadRenderer() {
    this._renderer || console.warn("WARNING: A Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.");
    const t = this._config.createMaterial({
      gainMapMax: [1, 1, 1],
      gainMapMin: [0, 0, 0],
      gamma: [1, 1, 1],
      offsetHdr: [1, 1, 1],
      offsetSdr: [1, 1, 1],
      hdrCapacityMax: 1,
      hdrCapacityMin: 0,
      maxDisplayBoost: 1,
      gainMap: new qr(),
      sdr: new qr()
    });
    return this._config.createQuadRenderer({
      width: 16,
      height: 16,
      type: kt,
      colorSpace: gu,
      material: t,
      renderer: this._renderer,
      renderTargetOptions: this._renderTargetOptions
    });
  }
  async processImages(t, i, s) {
    const l = i ? new Blob([i], { type: "image/jpeg" }) : void 0, c = new Blob([t], { type: "image/jpeg" });
    let d, h, p = !1;
    if (typeof createImageBitmap > "u") {
      const g = await Promise.all([
        l ? gp(l) : Promise.resolve(void 0),
        gp(c)
      ]);
      h = g[0], d = g[1], p = s === "flipY";
    } else {
      const g = await Promise.all([
        l ? createImageBitmap(l, { imageOrientation: s || "flipY" }) : Promise.resolve(void 0),
        createImageBitmap(c, { imageOrientation: s || "flipY" })
      ]);
      h = g[0], d = g[1];
    }
    return { sdrImage: d, gainMapImage: h, needsFlip: p };
  }
  createTextures(t, i, s) {
    const l = new qr(i || new ImageData(2, 2), sa, xr, xr, Ot, Ld, Vi, Au, 1, gu);
    l.flipY = s, l.needsUpdate = !0;
    const c = new qr(t, sa, xr, xr, Ot, Ld, Vi, Au, 1, TA);
    return c.flipY = s, c.needsUpdate = !0, { gainMap: l, sdr: c };
  }
  updateQuadRenderer(t, i, s, l, c) {
    t.width = i.width, t.height = i.height, t.material.gainMap = s, t.material.sdr = l, t.material.gainMapMin = c.gainMapMin, t.material.gainMapMax = c.gainMapMax, t.material.offsetHdr = c.offsetHdr, t.material.offsetSdr = c.offsetSdr, t.material.gamma = c.gamma, t.material.hdrCapacityMin = c.hdrCapacityMin, t.material.hdrCapacityMax = c.hdrCapacityMax, t.material.maxDisplayBoost = Math.pow(2, c.hdrCapacityMax), t.material.needsUpdate = !0;
  }
}
const IB = (
  /* glsl */
  `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`
), TB = (
  /* glsl */
  `
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`
);
class FB extends ma {
  _maxDisplayBoost;
  _hdrCapacityMin;
  _hdrCapacityMax;
  /**
   *
   * @param params
   */
  constructor({ gamma: t, offsetHdr: i, offsetSdr: s, gainMapMin: l, gainMapMax: c, maxDisplayBoost: d, hdrCapacityMin: h, hdrCapacityMax: p, sdr: g, gainMap: v }) {
    super({
      name: "GainMapDecoderMaterial",
      vertexShader: IB,
      fragmentShader: TB,
      uniforms: {
        sdr: { value: g },
        gainMap: { value: v },
        gamma: { value: new Ke(1 / t[0], 1 / t[1], 1 / t[2]) },
        offsetHdr: { value: new Ke().fromArray(i) },
        offsetSdr: { value: new Ke().fromArray(s) },
        gainMapMin: { value: new Ke().fromArray(l) },
        gainMapMax: { value: new Ke().fromArray(c) },
        weightFactor: {
          value: (Math.log2(d) - h) / (p - h)
        }
      },
      blending: FA,
      depthTest: !1,
      depthWrite: !1
    }), this._maxDisplayBoost = d, this._hdrCapacityMin = h, this._hdrCapacityMax = p, this.needsUpdate = !0, this.uniformsNeedUpdate = !0;
  }
  get sdr() {
    return this.uniforms.sdr.value;
  }
  set sdr(t) {
    this.uniforms.sdr.value = t;
  }
  get gainMap() {
    return this.uniforms.gainMap.value;
  }
  set gainMap(t) {
    this.uniforms.gainMap.value = t;
  }
  /**
   * @see {@link GainMapMetadata.offsetHdr}
   */
  get offsetHdr() {
    return this.uniforms.offsetHdr.value.toArray();
  }
  set offsetHdr(t) {
    this.uniforms.offsetHdr.value.fromArray(t);
  }
  /**
   * @see {@link GainMapMetadata.offsetSdr}
   */
  get offsetSdr() {
    return this.uniforms.offsetSdr.value.toArray();
  }
  set offsetSdr(t) {
    this.uniforms.offsetSdr.value.fromArray(t);
  }
  /**
   * @see {@link GainMapMetadata.gainMapMin}
   */
  get gainMapMin() {
    return this.uniforms.gainMapMin.value.toArray();
  }
  set gainMapMin(t) {
    this.uniforms.gainMapMin.value.fromArray(t);
  }
  /**
   * @see {@link GainMapMetadata.gainMapMax}
   */
  get gainMapMax() {
    return this.uniforms.gainMapMax.value.toArray();
  }
  set gainMapMax(t) {
    this.uniforms.gainMapMax.value.fromArray(t);
  }
  /**
   * @see {@link GainMapMetadata.gamma}
   */
  get gamma() {
    const t = this.uniforms.gamma.value;
    return [1 / t.x, 1 / t.y, 1 / t.z];
  }
  set gamma(t) {
    const i = this.uniforms.gamma.value;
    i.x = 1 / t[0], i.y = 1 / t[1], i.z = 1 / t[2];
  }
  /**
   * @see {@link GainMapMetadata.hdrCapacityMin}
   * @remarks Logarithmic space
   */
  get hdrCapacityMin() {
    return this._hdrCapacityMin;
  }
  set hdrCapacityMin(t) {
    this._hdrCapacityMin = t, this.calculateWeight();
  }
  /**
   * @see {@link GainMapMetadata.hdrCapacityMin}
   * @remarks Logarithmic space
   */
  get hdrCapacityMax() {
    return this._hdrCapacityMax;
  }
  set hdrCapacityMax(t) {
    this._hdrCapacityMax = t, this.calculateWeight();
  }
  /**
   * @see {@link GainmapDecodingParameters.maxDisplayBoost}
   * @remarks Non Logarithmic space
   */
  get maxDisplayBoost() {
    return this._maxDisplayBoost;
  }
  set maxDisplayBoost(t) {
    this._maxDisplayBoost = Math.max(1, Math.min(65504, t)), this.calculateWeight();
  }
  calculateWeight() {
    const t = (Math.log2(this._maxDisplayBoost) - this._hdrCapacityMin) / (this._hdrCapacityMax - this._hdrCapacityMin);
    this.uniforms.weightFactor.value = Math.max(0, Math.min(1, t));
  }
}
class gh extends wB {
  constructor(t, i) {
    super({
      renderer: t,
      createMaterial: (s) => new FB(s),
      createQuadRenderer: (s) => new ju(s)
    }, i);
  }
  /**
   * @private
   * @param quadRenderer
   * @param metadata
   * @param sdrBuffer
   * @param gainMapBuffer
   */
  async render(t, i, s, l) {
    const { sdrImage: c, gainMapImage: d, needsFlip: h } = await this.processImages(s, l, "flipY"), { gainMap: p, sdr: g } = this.createTextures(c, d, h);
    this.updateQuadRenderer(t, c, p, g, i), t.render();
  }
}
class RB extends gh {
  /**
   * Loads a gainmap using separate data
   * * sdr image
   * * gain map image
   * * metadata json
   *
   * useful for webp gain maps
   *
   * @param urls An array in the form of [sdr.jpg, gainmap.jpg, metadata.json]
   * @param onLoad Load complete callback, will receive the result
   * @param onProgress Progress callback, will receive a `ProgressEvent`
   * @param onError Error callback
   * @returns
   */
  load([t, i, s], l, c, d) {
    const h = this.prepareQuadRenderer();
    let p, g, v;
    const A = async () => {
      if (p && g && v) {
        try {
          await this.render(h, v, p, g);
        } catch (O) {
          this.manager.itemError(t), this.manager.itemError(i), this.manager.itemError(s), typeof d == "function" && d(O), h.disposeOnDemandRenderer();
          return;
        }
        typeof l == "function" && l(h), this.manager.itemEnd(t), this.manager.itemEnd(i), this.manager.itemEnd(s), h.disposeOnDemandRenderer();
      }
    };
    let B = !0, C = 0, E = 0, G = !0, x = 0, I = 0, F = !0, z = 0, P = 0;
    const j = () => {
      if (typeof c == "function") {
        const O = C + x + z, K = E + I + P, ae = B && G && F;
        c(new ProgressEvent("progress", { lengthComputable: ae, loaded: K, total: O }));
      }
    };
    this.manager.itemStart(t), this.manager.itemStart(i), this.manager.itemStart(s);
    const R = new eo(this._internalLoadingManager);
    R.setResponseType("arraybuffer"), R.setRequestHeader(this.requestHeader), R.setPath(this.path), R.setWithCredentials(this.withCredentials), R.load(t, async (O) => {
      if (typeof O == "string")
        throw new Error("Invalid sdr buffer");
      p = O, await A();
    }, (O) => {
      B = O.lengthComputable, E = O.loaded, C = O.total, j();
    }, (O) => {
      this.manager.itemError(t), typeof d == "function" && d(O);
    });
    const re = new eo(this._internalLoadingManager);
    re.setResponseType("arraybuffer"), re.setRequestHeader(this.requestHeader), re.setPath(this.path), re.setWithCredentials(this.withCredentials), re.load(i, async (O) => {
      if (typeof O == "string")
        throw new Error("Invalid gainmap buffer");
      g = O, await A();
    }, (O) => {
      G = O.lengthComputable, I = O.loaded, x = O.total, j();
    }, (O) => {
      this.manager.itemError(i), typeof d == "function" && d(O);
    });
    const J = new eo(this._internalLoadingManager);
    return J.setRequestHeader(this.requestHeader), J.setPath(this.path), J.setWithCredentials(this.withCredentials), J.load(s, async (O) => {
      if (typeof O != "string")
        throw new Error("Invalid metadata string");
      v = JSON.parse(O), await A();
    }, (O) => {
      F = O.lengthComputable, P = O.loaded, z = O.total, j();
    }, (O) => {
      this.manager.itemError(s), typeof d == "function" && d(O);
    }), h;
  }
}
class xB extends gh {
  /**
   * Loads a JPEG containing gain map metadata
   * Renders a normal SDR image if gainmap data is not found
   *
   * @param url Path to a JPEG file containing embedded gain map metadata
   * @param onLoad Load complete callback, will receive the result
   * @param onProgress Progress callback, will receive a `ProgressEvent`
   * @param onError Error callback
   * @returns
   */
  load(t, i, s, l) {
    const c = this.prepareQuadRenderer(), d = new eo(this._internalLoadingManager);
    return d.setResponseType("arraybuffer"), d.setRequestHeader(this.requestHeader), d.setPath(this.path), d.setWithCredentials(this.withCredentials), this.manager.itemStart(t), d.load(t, async (h) => {
      if (typeof h == "string")
        throw new Error("Invalid buffer, received [string], was expecting [ArrayBuffer]");
      const p = new Uint8Array(h);
      let g, v, A;
      try {
        const B = await MB(p);
        g = B.sdr, v = B.gainMap, A = B.metadata;
      } catch (B) {
        if (B instanceof mh || B instanceof hh)
          console.warn(`Failure to reconstruct an HDR image from ${t}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`), A = {
            gainMapMin: [0, 0, 0],
            gainMapMax: [1, 1, 1],
            gamma: [1, 1, 1],
            hdrCapacityMin: 0,
            hdrCapacityMax: 1,
            offsetHdr: [0, 0, 0],
            offsetSdr: [0, 0, 0]
          }, g = p;
        else
          throw B;
      }
      try {
        await this.render(c, A, g.buffer, v?.buffer);
      } catch (B) {
        this.manager.itemError(t), typeof l == "function" && l(B), c.disposeOnDemandRenderer();
        return;
      }
      typeof i == "function" && i(c), this.manager.itemEnd(t), c.disposeOnDemandRenderer();
    }, s, (h) => {
      this.manager.itemError(t), typeof l == "function" && l(h);
    }), c;
  }
}
const $i = {
  apartment: "lebombo_1k.hdr",
  city: "potsdamer_platz_1k.hdr",
  dawn: "kiara_1_dawn_1k.hdr",
  forest: "forest_slope_1k.hdr",
  lobby: "st_fagans_interior_1k.hdr",
  night: "dikhololo_night_1k.hdr",
  park: "rooitou_park_1k.hdr",
  studio: "studio_small_03_1k.hdr",
  sunset: "venice_sunset_1k.hdr",
  warehouse: "empty_warehouse_01_1k.hdr"
}, Ah = "https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/", pi = (a) => Array.isArray(a), Ku = ["/px.png", "/nx.png", "/py.png", "/ny.png", "/pz.png", "/nz.png"];
function Ba({
  files: a = Ku,
  path: t = "",
  preset: i = void 0,
  colorSpace: s = void 0,
  extensions: l
} = {}) {
  i && (Qu(i), a = $i[i], t = Ah);
  const c = pi(a), {
    extension: d,
    isCubemap: h
  } = Xu(a), p = Yu(d);
  if (!p) throw new Error("useEnvironment: Unrecognized file extension: " + a);
  const g = et((C) => C.gl);
  Gg(() => {
    if (d !== "webp" && d !== "jpg" && d !== "jpeg") return;
    function C() {
      Lr.clear(p, c ? [a] : a);
    }
    g.domElement.addEventListener("webglcontextlost", C, {
      once: !0
    });
  }, [a, g.domElement]);
  const v = Lr(p, c ? [a] : a, (C) => {
    (d === "webp" || d === "jpg" || d === "jpeg") && C.setRenderer(g), C.setPath == null || C.setPath(t), l && l(C);
  });
  let A = c ? (
    // @ts-ignore
    v[0]
  ) : v;
  if (d === "jpg" || d === "jpeg" || d === "webp") {
    var B;
    A = (B = A.renderTarget) == null ? void 0 : B.texture;
  }
  return A.mapping = h ? RA : xA, A.colorSpace = s ?? (h ? "srgb" : "srgb-linear"), A;
}
const _B = {
  files: Ku,
  path: "",
  preset: void 0,
  extensions: void 0
};
Ba.preload = (a) => {
  const t = {
    ..._B,
    ...a
  };
  let {
    files: i,
    path: s = ""
  } = t;
  const {
    preset: l,
    extensions: c
  } = t;
  l && (Qu(l), i = $i[l], s = Ah);
  const {
    extension: d
  } = Xu(i);
  if (d === "webp" || d === "jpg" || d === "jpeg")
    throw new Error("useEnvironment: Preloading gainmaps is not supported");
  const h = Yu(d);
  if (!h) throw new Error("useEnvironment: Unrecognized file extension: " + i);
  Lr.preload(h, pi(i) ? [i] : i, (p) => {
    p.setPath == null || p.setPath(s), c && c(p);
  });
};
const DB = {
  files: Ku,
  preset: void 0
};
Ba.clear = (a) => {
  const t = {
    ...DB,
    ...a
  };
  let {
    files: i
  } = t;
  const {
    preset: s
  } = t;
  s && (Qu(s), i = $i[s]);
  const {
    extension: l
  } = Xu(i), c = Yu(l);
  if (!c) throw new Error("useEnvironment: Unrecognized file extension: " + i);
  Lr.clear(c, pi(i) ? [i] : i);
};
function Qu(a) {
  if (!(a in $i)) throw new Error("Preset must be one of: " + Object.keys($i).join(", "));
}
function Xu(a) {
  var t;
  const i = pi(a) && a.length === 6, s = pi(a) && a.length === 3 && a.some((d) => d.endsWith("json")), l = pi(a) ? a[0] : a;
  return {
    extension: i ? "cube" : s ? "webp" : l.startsWith("data:application/exr") ? "exr" : l.startsWith("data:application/hdr") ? "hdr" : l.startsWith("data:image/jpeg") ? "jpg" : (t = l.split(".").pop()) == null || (t = t.split("?")) == null || (t = t.shift()) == null ? void 0 : t.toLowerCase(),
    isCubemap: i,
    isGainmap: s
  };
}
function Yu(a) {
  return a === "cube" ? _A : a === "hdr" ? hB : a === "exr" ? mB : a === "jpg" || a === "jpeg" ? xB : a === "webp" ? RB : null;
}
const LB = (a) => a.current && a.current.isScene, GB = (a) => LB(a) ? a.current : a;
function Wu(a, t, i, s, l = {}) {
  var c, d, h, p;
  l = {
    backgroundBlurriness: 0,
    backgroundIntensity: 1,
    backgroundRotation: [0, 0, 0],
    environmentIntensity: 1,
    environmentRotation: [0, 0, 0],
    ...l
  };
  const g = GB(t || i), v = g.background, A = g.environment, B = {
    // @ts-ignore
    backgroundBlurriness: g.backgroundBlurriness,
    // @ts-ignore
    backgroundIntensity: g.backgroundIntensity,
    // @ts-ignore
    backgroundRotation: (c = (d = g.backgroundRotation) == null || d.clone == null ? void 0 : d.clone()) !== null && c !== void 0 ? c : [0, 0, 0],
    // @ts-ignore
    environmentIntensity: g.environmentIntensity,
    // @ts-ignore
    environmentRotation: (h = (p = g.environmentRotation) == null || p.clone == null ? void 0 : p.clone()) !== null && h !== void 0 ? h : [0, 0, 0]
  };
  return a !== "only" && (g.environment = s), a && (g.background = s), cr(g, l), () => {
    a !== "only" && (g.environment = A), a && (g.background = v), cr(g, B);
  };
}
function Zu({
  scene: a,
  background: t = !1,
  map: i,
  ...s
}) {
  const l = et((c) => c.scene);
  return Q.useLayoutEffect(() => {
    if (i) return Wu(t, a, l, i, s);
  }), null;
}
function vh({
  background: a = !1,
  scene: t,
  blur: i,
  backgroundBlurriness: s,
  backgroundIntensity: l,
  backgroundRotation: c,
  environmentIntensity: d,
  environmentRotation: h,
  ...p
}) {
  const g = Ba(p), v = et((A) => A.scene);
  return Q.useLayoutEffect(() => Wu(a, t, v, g, {
    backgroundBlurriness: i ?? s,
    backgroundIntensity: l,
    backgroundRotation: c,
    environmentIntensity: d,
    environmentRotation: h
  })), Q.useEffect(() => () => {
    g.dispose();
  }, [g]), null;
}
function OB({
  children: a,
  near: t = 0.1,
  far: i = 1e3,
  resolution: s = 256,
  frames: l = 1,
  map: c,
  background: d = !1,
  blur: h,
  backgroundBlurriness: p,
  backgroundIntensity: g,
  backgroundRotation: v,
  environmentIntensity: A,
  environmentRotation: B,
  scene: C,
  files: E,
  path: G,
  preset: x = void 0,
  extensions: I
}) {
  const F = et((J) => J.gl), z = et((J) => J.scene), P = Q.useRef(null), [j] = Q.useState(() => new Fp()), R = Q.useMemo(() => {
    const J = new DA(s);
    return J.texture.type = kt, J;
  }, [s]);
  Q.useEffect(() => () => {
    R.dispose();
  }, [R]), Q.useLayoutEffect(() => {
    if (l === 1) {
      const J = F.autoClear;
      F.autoClear = !0, P.current.update(F, j), F.autoClear = J;
    }
    return Wu(d, C, z, R.texture, {
      backgroundBlurriness: h ?? p,
      backgroundIntensity: g,
      backgroundRotation: v,
      environmentIntensity: A,
      environmentRotation: B
    });
  }, [a, j, R.texture, C, z, d, l, F]);
  let re = 1;
  return Aa(() => {
    if (l === 1 / 0 || re < l) {
      const J = F.autoClear;
      F.autoClear = !0, P.current.update(F, j), F.autoClear = J, re++;
    }
  }), /* @__PURE__ */ Q.createElement(Q.Fragment, null, Uv(/* @__PURE__ */ Q.createElement(Q.Fragment, null, a, /* @__PURE__ */ Q.createElement("cubeCamera", {
    ref: P,
    args: [t, i, R]
  }), E || x ? /* @__PURE__ */ Q.createElement(vh, {
    background: !0,
    files: E,
    preset: x,
    path: G,
    extensions: I
  }) : c ? /* @__PURE__ */ Q.createElement(Zu, {
    background: !0,
    map: c,
    extensions: I
  }) : null), j));
}
function kB(a) {
  var t, i, s, l;
  const c = Ba(a), d = a.map || c;
  Q.useMemo(() => Qp({
    GroundProjectedEnvImpl: Sb
  }), []), Q.useEffect(() => () => {
    c.dispose();
  }, [c]);
  const h = Q.useMemo(() => [d], [d]), p = (t = a.ground) == null ? void 0 : t.height, g = (i = a.ground) == null ? void 0 : i.radius, v = (s = (l = a.ground) == null ? void 0 : l.scale) !== null && s !== void 0 ? s : 1e3;
  return /* @__PURE__ */ Q.createElement(Q.Fragment, null, /* @__PURE__ */ Q.createElement(Zu, Io({}, a, {
    map: d
  })), /* @__PURE__ */ Q.createElement("groundProjectedEnvImpl", {
    args: h,
    scale: v,
    height: p,
    radius: g
  }));
}
function PB(a) {
  return a.ground ? /* @__PURE__ */ Q.createElement(kB, a) : a.map ? /* @__PURE__ */ Q.createElement(Zu, a) : a.children ? /* @__PURE__ */ Q.createElement(OB, a) : /* @__PURE__ */ Q.createElement(vh, a);
}
function Pt(a, t, i) {
  return [a, i, -t];
}
const HB = new Te.Vector3(0, 0, 1);
function Ap({ handlePos: a, headPos: t, avgBatLength: i }) {
  const { scene: s } = ba("/models/bat.glb"), l = ha(() => s.clone(!0), [s]), c = ci(), d = ci(new Te.Vector3()), h = ci(null);
  return dr(() => {
    const p = new Te.Box3().setFromObject(l);
    h.current = p.max.z - p.min.z;
    const g = new Te.Vector3();
    p.getCenter(g);
    const v = new Te.Vector3(g.x, g.y, p.min.z);
    d.current.copy(v);
  }, [l, i]), Aa(() => {
    if (!c.current || !h.current) return;
    const p = new Te.Vector3(...a), g = new Te.Vector3(...t), v = p.distanceTo(g), A = i ?? h.current, B = v / A, C = A / h.current, E = g.clone().sub(p).normalize(), G = new Te.Quaternion().setFromUnitVectors(HB, E);
    c.current.quaternion.copy(G), c.current.scale.setScalar(C * B);
    const x = d.current.clone().multiplyScalar(C * B).applyQuaternion(G);
    c.current.position.copy(p).sub(x);
  }), /* @__PURE__ */ be("primitive", { ref: c, object: l });
}
function ea({ position: a, label: t, color: i }) {
  return /* @__PURE__ */ Bn("group", { position: a, children: [
    /* @__PURE__ */ Bn("mesh", { children: [
      /* @__PURE__ */ be("sphereGeometry", { args: [0.04, 16, 16] }),
      /* @__PURE__ */ be("meshStandardMaterial", { color: i, emissive: i, emissiveIntensity: 0.6 })
    ] }),
    /* @__PURE__ */ be(ub, { distanceFactor: 6, style: { pointerEvents: "none" }, children: /* @__PURE__ */ be("div", { style: {
      background: "rgba(0,0,0,0.65)",
      color: i,
      fontFamily: "monospace",
      fontSize: 11,
      padding: "2px 5px",
      borderRadius: 3,
      whiteSpace: "nowrap"
    }, children: t }) })
  ] });
}
const gt = 8.5 / 12, na = 8.5 / 12, vp = 17 / 12;
function NB() {
  const a = ha(() => {
    const A = new Te.Shape();
    return A.moveTo(-gt, 0), A.lineTo(gt, 0), A.lineTo(gt, na), A.lineTo(0, vp), A.lineTo(-gt, na), A.closePath(), A;
  }, []), t = [
    [-gt, 0, 0],
    [gt, 0, 0],
    [gt, -na, 0],
    [0, -vp, 0],
    [-gt, -na, 0],
    [-gt, 0, 0]
  ].map(([A, B, C]) => Pt(A, B, C)), i = [
    [-gt, 0, 1.5],
    [gt, 0, 1.5],
    [gt, 0, 3.5],
    [-gt, 0, 3.5],
    [-gt, 0, 1.5]
  ].map(([A, B, C]) => Pt(A, B, C)), s = (-8.5 - 6 - 48) / 12, l = (-8.5 - 6) / 12, c = (-8.5 + 36) / 12, d = (-8.5 - 36) / 12, h = (8.5 + 6) / 12, p = (8.5 + 6 + 48) / 12, g = [[s, c, 0], [l, c, 0], [l, d, 0], [s, d, 0], [s, c, 0]].map(([A, B, C]) => Pt(A, B, C)), v = [[h, c, 0], [p, c, 0], [p, d, 0], [h, d, 0], [h, c, 0]].map(([A, B, C]) => Pt(A, B, C));
  return /* @__PURE__ */ Bn("group", { children: [
    /* @__PURE__ */ Bn("mesh", { rotation: [Math.PI / 2, 0, 0], position: [0, 2e-3, 0], children: [
      /* @__PURE__ */ be("shapeGeometry", { args: [a] }),
      /* @__PURE__ */ be("meshStandardMaterial", { color: "white", side: Te.DoubleSide })
    ] }),
    /* @__PURE__ */ be(Vs, { points: t, color: "white", lineWidth: 2 }),
    /* @__PURE__ */ be(Vs, { points: i, color: "rgba(200,200,200,1)", lineWidth: 1 }),
    /* @__PURE__ */ be(Vs, { points: g, color: "rgba(150,150,150,1)", lineWidth: 1 }),
    /* @__PURE__ */ be(Vs, { points: v, color: "rgba(150,150,150,1)", lineWidth: 1 })
  ] });
}
const Vr = new Te.Vector3(0, 3.7, 17 / 24), Fu = 13, bh = 1.7, UB = { Front: 180, Right: 90, Back: 0, Left: 270, Aerial: null }, zB = 16.4;
function JB({ azimuth: a }) {
  const { camera: t } = et(), i = ci();
  return dr(() => {
    if (i.current) {
      if (a === null)
        t.position.set(Vr.x, zB, Vr.z), i.current.target.set(Vr.x, 0, Vr.z);
      else {
        const s = a * Math.PI / 180;
        t.position.set(
          Vr.x + Fu * Math.sin(s),
          bh,
          Vr.z + Fu * Math.cos(s)
        ), i.current.target.copy(Vr);
      }
      i.current.update();
    }
  }, [a, t]), /* @__PURE__ */ be(yB, { ref: i });
}
const Zr = {
  wrapper: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    gap: 6,
    width: 215,
    fontFamily: "monospace"
  },
  panel: {
    background: "rgba(20,20,20,0.82)",
    border: "1px solid #333",
    borderRadius: 6,
    padding: "8px 10px",
    backdropFilter: "blur(4px)"
  },
  heading: {
    color: "#ddd",
    fontSize: 14,
    fontFamily: "monospace",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    borderBottom: "1px solid #444",
    paddingBottom: 6
  },
  row: { display: "flex", gap: 4 },
  btn: {
    flex: 1,
    padding: "4px 0",
    background: "#2a2a2a",
    color: "#aaa",
    border: "1px solid #444",
    borderRadius: 4,
    cursor: "pointer",
    fontSize: 11,
    fontFamily: "monospace"
  },
  btnActive: {
    flex: 1,
    padding: "4px 0",
    background: "#4af",
    color: "#000",
    border: "1px solid #4af",
    borderRadius: 4,
    cursor: "pointer",
    fontSize: 11,
    fontFamily: "monospace",
    fontWeight: "bold"
  },
  degreeLabel: { color: "#888", textAlign: "center", marginTop: 2, fontSize: 11 },
  swingPathLabel: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    color: "#ccc",
    fontSize: 13,
    fontFamily: "monospace",
    cursor: "pointer",
    paddingLeft: 2
  }
};
function jB({ azimuth: a, onAzimuth: t, showSwingPath: i, onToggleSwingPath: s }) {
  return /* @__PURE__ */ Bn("div", { style: Zr.wrapper, children: [
    /* @__PURE__ */ Bn("div", { style: Zr.panel, children: [
      /* @__PURE__ */ be("div", { style: Zr.heading, children: "View Angle" }),
      /* @__PURE__ */ be("div", { style: Zr.row, children: Object.entries(UB).map(([l, c]) => /* @__PURE__ */ be(
        "button",
        {
          onClick: () => t(c),
          style: a === c ? Zr.btnActive : Zr.btn,
          children: l
        },
        l
      )) }),
      a !== null && /* @__PURE__ */ Bn(Bp, { children: [
        /* @__PURE__ */ be(
          "input",
          {
            type: "range",
            min: 0,
            max: 359,
            value: a,
            onChange: (l) => t(Number(l.target.value)),
            style: { width: "100%", accentColor: "#4af", marginTop: 6 }
          }
        ),
        /* @__PURE__ */ Bn("div", { style: Zr.degreeLabel, children: [
          a,
          "°"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ Bn("label", { style: Zr.swingPathLabel, children: [
      /* @__PURE__ */ be(
        "input",
        {
          type: "checkbox",
          checked: i,
          onChange: (l) => s(l.target.checked),
          style: { accentColor: "#4af", cursor: "pointer" }
        }
      ),
      "Show swing path"
    ] })
  ] });
}
const fu = {
  bar: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "8px 16px",
    background: "#1a1a1a",
    color: "#ccc",
    fontFamily: "monospace",
    fontSize: 13
  },
  playBtn: {
    background: "#2a2a2a",
    color: "#eee",
    border: "1px solid #444",
    borderRadius: 4,
    padding: "4px 10px",
    cursor: "pointer",
    fontSize: 14,
    lineHeight: 1,
    flexShrink: 0
  },
  label: { color: "#888", whiteSpace: "nowrap" }
};
function KB({ frameIndex: a, frameCount: t, isPlaying: i, onSeek: s, onPlayToggle: l }) {
  return /* @__PURE__ */ Bn("div", { style: fu.bar, children: [
    /* @__PURE__ */ be(
      "button",
      {
        onClick: l,
        style: fu.playBtn,
        disabled: t === 0,
        children: i ? "⏸" : "▶"
      }
    ),
    /* @__PURE__ */ be(
      "input",
      {
        type: "range",
        min: 0,
        max: Math.max(0, t - 1),
        value: a,
        onChange: (c) => s(Number(c.target.value)),
        style: { flex: 1, accentColor: "#4af" }
      }
    ),
    /* @__PURE__ */ Bn("span", { style: fu.label, children: [
      a + 1,
      " / ",
      t || "—"
    ] })
  ] });
}
function du(a, t, i) {
  const s = i - t + 1;
  if (s < 2) return null;
  const l = [], c = [];
  for (let h = t; h <= i; h++) {
    const p = a[h], [g, v, A] = Pt(p.handle.x, p.handle.y, p.handle.z), [B, C, E] = Pt(p.head.x, p.head.y, p.head.z);
    l.push(g, v, A), l.push(B, C, E);
  }
  for (let h = 0; h < s - 1; h++) {
    const p = 2 * h, g = 2 * h + 1, v = 2 * (h + 1), A = 2 * (h + 1) + 1;
    c.push(p, g, v), c.push(g, A, v);
  }
  const d = new Te.BufferGeometry();
  return d.setAttribute("position", new Te.Float32BufferAttribute(l, 3)), d.setIndex(c), d.computeVertexNormals(), d;
}
function bp({
  frames: a,
  frameIndex: t,
  colorPre: i = "#4488ff",
  colorPost: s = "#1a3a88"
}) {
  const { preGeo: l, postGeo: c } = ha(() => {
    const h = Math.min(t + 1, a.length);
    if (h < 2) return { preGeo: null, postGeo: null };
    const p = a.findIndex((g) => g.FRAME_FROM_CONTACT != null && g.FRAME_FROM_CONTACT >= 0);
    return p === -1 || p >= h ? { preGeo: du(a, 0, h - 1), postGeo: null } : {
      preGeo: p > 0 ? du(a, 0, p) : null,
      postGeo: du(a, p, h - 1)
    };
  }, [a, t]), d = { transparent: !0, opacity: 0.4, side: Te.DoubleSide, depthWrite: !1 };
  return /* @__PURE__ */ Bn("group", { children: [
    l && /* @__PURE__ */ Bn("mesh", { geometry: l, children: [
      "  ",
      /* @__PURE__ */ be("meshStandardMaterial", { ...d, color: i })
    ] }),
    c && /* @__PURE__ */ Bn("mesh", { geometry: c, children: [
      " ",
      /* @__PURE__ */ be("meshStandardMaterial", { ...d, color: s })
    ] })
  ] });
}
const QB = 0.75, ta = {
  handle: "#ff5555",
  head: "#55ffaa",
  pathPre: "#44aa44",
  pathPost: "#226622"
};
function XB(a, t) {
  let i = 0, s = 1 / 0;
  for (let l = 0; l < a.length; l++) {
    const c = a[l].SEC_FROM_CONTACT;
    if (c == null) continue;
    const d = Math.abs(c - t);
    d < s && (s = d, i = l);
  }
  return i;
}
function YB(a) {
  const t = Object.values(a).flatMap(
    (i) => i.map((s) => {
      const l = Pt(s.handle.x, s.handle.y, s.handle.z), c = Pt(s.head.x, s.head.y, s.head.z);
      return Math.hypot(c[0] - l[0], c[1] - l[1], c[2] - l[2]);
    })
  );
  return t.reduce((i, s) => i + s, 0) / t.length;
}
const ra = {
  bar: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "8px 16px",
    background: "#1a1a1a",
    color: "#ccc",
    fontFamily: "monospace",
    fontSize: 13
  },
  select: {
    background: "#2a2a2a",
    color: "#eee",
    border: "1px solid #444",
    padding: "4px 8px",
    borderRadius: 4,
    fontSize: 13
  },
  label: { color: "#888", whiteSpace: "nowrap" }
};
function WB() {
  const [a, t] = Zt(null), [i, s] = Zt([]), [l, c] = Zt({}), [d, h] = Zt(""), [p, g] = Zt(0), [v, A] = Zt(null), [B, C] = Zt(180), [E, G] = Zt(!1), [x, I] = Zt(""), [F, z] = Zt(!0), P = a?.[d] ?? [], j = a?.[x] ?? [];
  dr(() => {
    if (!E || P.length === 0) return;
    const _ = p, q = P[_].SEC_FROM_PITCH_RELEASE, de = performance.now();
    let fe;
    const ce = () => {
      const Be = (performance.now() - de) / 1e3 * QB, he = q + Be;
      let Ce = _;
      for (; Ce < P.length - 1 && P[Ce + 1].SEC_FROM_PITCH_RELEASE <= he; )
        Ce++;
      if (g(Ce), Ce >= P.length - 1) {
        G(!1);
        return;
      }
      fe = requestAnimationFrame(ce);
    };
    return fe = requestAnimationFrame(ce), () => cancelAnimationFrame(fe);
  }, [E, P]), dr(() => {
    fetch("/data/swings.json").then((_) => _.json()).then(({ swings: _, default_play_id: q, labels: de }) => {
      t(_), de && c(de);
      const fe = Object.keys(_);
      s(fe);
      const ce = q && _[q] ? q : fe[0];
      ce && h(ce);
      const Be = YB(_);
      A(Be), console.log("Avg bat length (ft):", Be.toFixed(3));
    }).catch(() => console.warn("No local swings.json — waiting for Shiny postMessage."));
  }, []), dr(() => {
    const _ = (q) => {
      if (q.data?.type === "load_frames") {
        const de = q.data.frames;
        t(de), q.data.labels && c(q.data.labels);
        const fe = Object.keys(de);
        s(fe), fe.length > 0 && h(fe[0]);
      } else q.data?.type === "seek_frame" ? g(q.data.index) : q.data?.type === "reset" && g(0);
    };
    return window.addEventListener("message", _), () => window.removeEventListener("message", _);
  }, []);
  const R = P[p], re = R ? Pt(R.handle.x, R.handle.y, R.handle.z) : [0, -1, 0], J = R ? Pt(R.head.x, R.head.y, R.head.z) : [0, 1, 0], O = (_) => _?.toFixed(2) ?? "—", K = R ? `handle (${O(R.handle.x)}, ${O(R.handle.y)}, ${O(R.handle.z)})` : "handle", ae = R ? `head (${O(R.head.x)}, ${O(R.head.y)}, ${O(R.head.z)})` : "head", ve = j.length > 0 && R?.SEC_FROM_CONTACT != null ? XB(j, R.SEC_FROM_CONTACT) : 0, W = j[ve], le = W ? Pt(W.handle.x, W.handle.y, W.handle.z) : null, pe = W ? Pt(W.head.x, W.head.y, W.head.z) : null;
  return /* @__PURE__ */ Bn("div", { style: { width: "100vw", height: "100vh", background: "#111", display: "flex", flexDirection: "column" }, children: [
    /* @__PURE__ */ Bn("div", { style: ra.bar, children: [
      /* @__PURE__ */ Bn(
        "select",
        {
          value: d,
          onChange: (_) => {
            h(_.target.value), g(0);
          },
          style: ra.select,
          children: [
            i.length === 0 && /* @__PURE__ */ be("option", { children: "Loading swings…" }),
            i.map((_) => /* @__PURE__ */ be("option", { value: _, children: l[_] ?? _ }, _))
          ]
        }
      ),
      /* @__PURE__ */ Bn(
        "select",
        {
          value: x,
          onChange: (_) => I(_.target.value),
          style: ra.select,
          children: [
            /* @__PURE__ */ be("option", { value: "", children: "— Compare with —" }),
            i.filter((_) => _ !== d).map((_) => /* @__PURE__ */ be("option", { value: _, children: l[_] ?? _ }, _))
          ]
        }
      ),
      /* @__PURE__ */ Bn("span", { style: ra.label, children: [
        R ? `t = ${R.SEC_FROM_PITCH_RELEASE?.toFixed(3)}s` : "—",
        R?.FRAME_FROM_CONTACT != null ? `  (${R.FRAME_FROM_CONTACT >= 0 ? "+" : ""}${R.FRAME_FROM_CONTACT} from contact)` : ""
      ] })
    ] }),
    /* @__PURE__ */ Bn("div", { style: { flex: 1, position: "relative" }, children: [
      /* @__PURE__ */ be(
        jB,
        {
          azimuth: B,
          onAzimuth: C,
          showSwingPath: F,
          onToggleSwingPath: z
        }
      ),
      /* @__PURE__ */ Bn($v, { camera: { position: [0, bh, Vr.z - Fu], fov: 50 }, children: [
        /* @__PURE__ */ be("ambientLight", { intensity: 0.6 }),
        /* @__PURE__ */ be("directionalLight", { position: [5, 5, 5], intensity: 1 }),
        /* @__PURE__ */ be("directionalLight", { position: [-5, -5, -5], intensity: 0.3 }),
        /* @__PURE__ */ Bn(Og, { fallback: null, children: [
          R && /* @__PURE__ */ be(Ap, { handlePos: re, headPos: J, avgBatLength: v }),
          R && /* @__PURE__ */ be(ea, { position: re, label: K, color: "#f90" }),
          R && /* @__PURE__ */ be(ea, { position: J, label: ae, color: "#4af" }),
          F && /* @__PURE__ */ be(bp, { frames: P, frameIndex: p }),
          W && /* @__PURE__ */ be(Ap, { handlePos: le, headPos: pe, avgBatLength: v }),
          W && /* @__PURE__ */ be(ea, { position: le, label: "handle (cmp)", color: ta.handle }),
          W && /* @__PURE__ */ be(ea, { position: pe, label: "head (cmp)", color: ta.head }),
          F && W && /* @__PURE__ */ be(bp, { frames: j, frameIndex: ve, colorPre: ta.pathPre, colorPost: ta.pathPost }),
          /* @__PURE__ */ be(NB, {}),
          /* @__PURE__ */ be(PB, { preset: "studio" })
        ] }),
        /* @__PURE__ */ be(JB, { azimuth: B })
      ] })
    ] }),
    /* @__PURE__ */ be(
      KB,
      {
        frameIndex: p,
        frameCount: P.length,
        isPlaying: E,
        onSeek: (_) => {
          G(!1), g(_);
        },
        onPlayToggle: () => {
          p >= P.length - 1 && g(0), G((_) => !_);
        }
      }
    )
  ] });
}
const ZB = Pg.createRoot(document.getElementById("root"));
ZB.render(/* @__PURE__ */ be(WB, {}));
