import { jsx as Ce, Fragment as Rg, jsxs as Xn } from "https://esm.sh/react/jsx-runtime";
import * as X from "https://esm.sh/react";
import ca, { useState as Fr, useRef as ui, useEffect as fr, useMemo as wu, useLayoutEffect as xg, Suspense as _g } from "https://esm.sh/react";
import * as Dg from "https://esm.sh/react-dom/client";
import Lg from "https://esm.sh/react-dom/client";
import * as Te from "https://esm.sh/three";
import { DoubleSide as Iu, Vector3 as Ke, Vector2 as $n, PerspectiveCamera as ci, OrthographicCamera as Eo, REVISION as Gg, TrianglesDrawMode as kg, TriangleFanDrawMode as uu, TriangleStripDrawMode as gp, Mesh as $i, IcosahedronGeometry as Og, ShaderMaterial as fa, MOUSE as ti, TOUCH as ri, Spherical as Sd, Quaternion as ta, Ray as Pg, Plane as Hg, Loader as Tu, LoaderUtils as Ki, FileLoader as $r, MeshPhysicalMaterial as dr, Color as eo, SpotLight as Ng, PointLight as Ug, DirectionalLight as zg, Matrix4 as Wi, InstancedMesh as Jg, InstancedBufferAttribute as jg, Object3D as Ap, TextureLoader as Kg, ImageBitmapLoader as Qg, BufferAttribute as Qi, InterleavedBuffer as Xg, InterleavedBufferAttribute as Bo, LinearMipmapLinearFilter as vp, NearestMipmapLinearFilter as Yg, LinearMipmapNearestFilter as Wg, NearestMipmapNearestFilter as Zg, LinearFilter as kt, NearestFilter as Vg, RepeatWrapping as cu, MirroredRepeatWrapping as qg, ClampToEdgeWrapping as xr, PointsMaterial as $g, Material as kl, LineBasicMaterial as eA, MeshStandardMaterial as bp, MeshBasicMaterial as ai, PropertyBinding as nA, BufferGeometry as Bp, SkinnedMesh as tA, LineSegments as rA, Line as oA, LineLoop as iA, Points as sA, Group as Ol, MathUtils as yp, Skeleton as aA, AnimationClip as lA, Bone as uA, InterpolateDiscrete as cA, InterpolateLinear as Cp, Texture as Vr, VectorKeyframeTrack as Md, NumberKeyframeTrack as wd, QuaternionKeyframeTrack as Id, FrontSide as fA, Interpolant as dA, Box3 as da, Sphere as Fu, DataTextureLoader as Ep, HalfFloatType as Ot, FloatType as _r, DataUtils as li, RGBAFormat as Zi, RedFormat as pA, InstancedBufferGeometry as hA, Float32BufferAttribute as Td, InstancedInterleavedBuffer as fu, WireframeGeometry as mA, UniformsUtils as Fd, UniformsLib as Rd, Vector4 as hi, Line3 as gA, Scene as Sp, PlaneGeometry as Mp, WebGLRenderTarget as wp, UVMapping as ra, WebGLRenderer as AA, DataTexture as vA, LinearSRGBColorSpace as du, IntType as bA, ShortType as BA, ByteType as yA, UnsignedIntType as CA, UnsignedByteType as pu, LoadingManager as EA, LinearMipMapLinearFilter as xd, SRGBColorSpace as SA, NoBlending as MA, CubeReflectionMapping as wA, EquirectangularReflectionMapping as IA, CubeTextureLoader as TA, WebGLCubeRenderTarget as FA } from "https://esm.sh/three";
function Ip(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Pl = { exports: {} }, Hl = {}, Nl = { exports: {} }, Ul = {};
var _d;
function RA() {
  if (_d) return Ul;
  _d = 1;
  var a = ca;
  function r(g, B) {
    return g === B && (g !== 0 || 1 / g === 1 / B) || g !== g && B !== B;
  }
  var i = typeof Object.is == "function" ? Object.is : r, s = a.useState, l = a.useEffect, c = a.useLayoutEffect, d = a.useDebugValue;
  function h(g, B) {
    var C = B(), E = s({ inst: { value: C, getSnapshot: B } }), D = E[0].inst, R = E[1];
    return c(
      function() {
        D.value = C, D.getSnapshot = B, p(D) && R({ inst: D });
      },
      [g, C, B]
    ), l(
      function() {
        return p(D) && R({ inst: D }), g(function() {
          p(D) && R({ inst: D });
        });
      },
      [g]
    ), d(C), C;
  }
  function p(g) {
    var B = g.getSnapshot;
    g = g.value;
    try {
      var C = B();
      return !i(g, C);
    } catch {
      return !0;
    }
  }
  function A(g, B) {
    return B();
  }
  var v = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? A : h;
  return Ul.useSyncExternalStore = a.useSyncExternalStore !== void 0 ? a.useSyncExternalStore : v, Ul;
}
var Dd;
function xA() {
  return Dd || (Dd = 1, Nl.exports = RA()), Nl.exports;
}
var Ld;
function _A() {
  if (Ld) return Hl;
  Ld = 1;
  var a = ca, r = xA();
  function i(A, v) {
    return A === v && (A !== 0 || 1 / A === 1 / v) || A !== A && v !== v;
  }
  var s = typeof Object.is == "function" ? Object.is : i, l = r.useSyncExternalStore, c = a.useRef, d = a.useEffect, h = a.useMemo, p = a.useDebugValue;
  return Hl.useSyncExternalStoreWithSelector = function(A, v, g, B, C) {
    var E = c(null);
    if (E.current === null) {
      var D = { hasValue: !1, value: null };
      E.current = D;
    } else D = E.current;
    E = h(
      function() {
        function w(L) {
          if (!F) {
            if (F = !0, N = L, L = B(L), C !== void 0 && D.hasValue) {
              var Q = D.value;
              if (C(Q, L))
                return U = Q;
            }
            return U = L;
          }
          if (Q = U, s(N, L)) return Q;
          var O = B(L);
          return C !== void 0 && C(Q, O) ? (N = L, Q) : (N = L, U = O);
        }
        var F = !1, N, U, j = g === void 0 ? null : g;
        return [
          function() {
            return w(v());
          },
          j === null ? void 0 : function() {
            return w(j());
          }
        ];
      },
      [v, g, B, C]
    );
    var R = l(A, E[0], E[1]);
    return d(
      function() {
        D.hasValue = !0, D.value = R;
      },
      [R]
    ), p(R), R;
  }, Hl;
}
var Gd;
function DA() {
  return Gd || (Gd = 1, Pl.exports = _A()), Pl.exports;
}
var LA = DA();
const GA = /* @__PURE__ */ Ip(LA), kd = (a) => {
  let r;
  const i = /* @__PURE__ */ new Set(), s = (A, v) => {
    const g = typeof A == "function" ? A(r) : A;
    if (!Object.is(g, r)) {
      const B = r;
      r = v ?? (typeof g != "object" || g === null) ? g : Object.assign({}, r, g), i.forEach((C) => C(r, B));
    }
  }, l = () => r, h = { setState: s, getState: l, getInitialState: () => p, subscribe: (A) => (i.add(A), () => i.delete(A)) }, p = r = a(s, l, h);
  return h;
}, kA = ((a) => a ? kd(a) : kd), { useSyncExternalStoreWithSelector: OA } = GA, PA = (a) => a;
function HA(a, r = PA, i) {
  const s = OA(
    a.subscribe,
    a.getState,
    a.getInitialState,
    r,
    i
  );
  return ca.useDebugValue(s), s;
}
const Od = (a, r) => {
  const i = kA(a), s = (l, c = r) => HA(i, l, c);
  return Object.assign(s, i), s;
}, Tp = ((a, r) => a ? Od(a, r) : Od), NA = (a) => typeof a == "object" && typeof a.then == "function", yo = [];
function Fp(a, r, i = (s, l) => s === l) {
  if (a === r) return !0;
  if (!a || !r) return !1;
  const s = a.length;
  if (r.length !== s) return !1;
  for (let l = 0; l < s; l++) if (!i(a[l], r[l])) return !1;
  return !0;
}
function Rp(a, r = null, i = !1, s = {}) {
  r === null && (r = [a]);
  for (const c of yo)
    if (Fp(r, c.keys, c.equal)) {
      if (i) return;
      if (Object.prototype.hasOwnProperty.call(c, "error")) throw c.error;
      if (Object.prototype.hasOwnProperty.call(c, "response"))
        return s.lifespan && s.lifespan > 0 && (c.timeout && clearTimeout(c.timeout), c.timeout = setTimeout(c.remove, s.lifespan)), c.response;
      if (!i) throw c.promise;
    }
  const l = {
    keys: r,
    equal: s.equal,
    remove: () => {
      const c = yo.indexOf(l);
      c !== -1 && yo.splice(c, 1);
    },
    promise: (
      // Execute the promise
      (NA(a) ? a : a(...r)).then((c) => {
        l.response = c, s.lifespan && s.lifespan > 0 && (l.timeout = setTimeout(l.remove, s.lifespan));
      }).catch((c) => l.error = c)
    )
  };
  if (yo.push(l), !i) throw l.promise;
}
const UA = (a, r, i) => Rp(a, r, !1, i), zA = (a, r, i) => {
  Rp(a, r, !0, i);
}, JA = (a) => {
  if (a === void 0 || a.length === 0) yo.splice(0, yo.length);
  else {
    const r = yo.find((i) => Fp(a, i.keys, i.equal));
    r && r.remove();
  }
};
var zl = { exports: {} }, Jl = {};
var Pd;
function jA() {
  return Pd || (Pd = 1, (function(a) {
    function r(J, ue) {
      var pe = J.length;
      J.push(ue);
      e: for (; 0 < pe; ) {
        var Ae = pe - 1 >>> 1, ce = J[Ae];
        if (0 < l(ce, ue))
          J[Ae] = ue, J[pe] = ce, pe = Ae;
        else break e;
      }
    }
    function i(J) {
      return J.length === 0 ? null : J[0];
    }
    function s(J) {
      if (J.length === 0) return null;
      var ue = J[0], pe = J.pop();
      if (pe !== ue) {
        J[0] = pe;
        e: for (var Ae = 0, ce = J.length, Be = ce >>> 1; Ae < Be; ) {
          var he = 2 * (Ae + 1) - 1, Me = J[he], Fe = he + 1, an = J[Fe];
          if (0 > l(Me, pe))
            Fe < ce && 0 > l(an, Me) ? (J[Ae] = an, J[Fe] = pe, Ae = Fe) : (J[Ae] = Me, J[he] = pe, Ae = he);
          else if (Fe < ce && 0 > l(an, pe))
            J[Ae] = an, J[Fe] = pe, Ae = Fe;
          else break e;
        }
      }
      return ue;
    }
    function l(J, ue) {
      var pe = J.sortIndex - ue.sortIndex;
      return pe !== 0 ? pe : J.id - ue.id;
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
    var p = [], A = [], v = 1, g = null, B = 3, C = !1, E = !1, D = !1, R = !1, w = typeof setTimeout == "function" ? setTimeout : null, F = typeof clearTimeout == "function" ? clearTimeout : null, N = typeof setImmediate < "u" ? setImmediate : null;
    function U(J) {
      for (var ue = i(A); ue !== null; ) {
        if (ue.callback === null) s(A);
        else if (ue.startTime <= J)
          s(A), ue.sortIndex = ue.expirationTime, r(p, ue);
        else break;
        ue = i(A);
      }
    }
    function j(J) {
      if (D = !1, U(J), !E)
        if (i(p) !== null)
          E = !0, L || (L = !0, be());
        else {
          var ue = i(A);
          ue !== null && de(j, ue.startTime - J);
        }
    }
    var L = !1, Q = -1, O = 5, k = -1;
    function K() {
      return R ? !0 : !(a.unstable_now() - k < O);
    }
    function ie() {
      if (R = !1, L) {
        var J = a.unstable_now();
        k = J;
        var ue = !0;
        try {
          e: {
            E = !1, D && (D = !1, F(Q), Q = -1), C = !0;
            var pe = B;
            try {
              n: {
                for (U(J), g = i(p); g !== null && !(g.expirationTime > J && K()); ) {
                  var Ae = g.callback;
                  if (typeof Ae == "function") {
                    g.callback = null, B = g.priorityLevel;
                    var ce = Ae(
                      g.expirationTime <= J
                    );
                    if (J = a.unstable_now(), typeof ce == "function") {
                      g.callback = ce, U(J), ue = !0;
                      break n;
                    }
                    g === i(p) && s(p), U(J);
                  } else s(p);
                  g = i(p);
                }
                if (g !== null) ue = !0;
                else {
                  var Be = i(A);
                  Be !== null && de(
                    j,
                    Be.startTime - J
                  ), ue = !1;
                }
              }
              break e;
            } finally {
              g = null, B = pe, C = !1;
            }
            ue = void 0;
          }
        } finally {
          ue ? be() : L = !1;
        }
      }
    }
    var be;
    if (typeof N == "function")
      be = function() {
        N(ie);
      };
    else if (typeof MessageChannel < "u") {
      var ee = new MessageChannel(), le = ee.port2;
      ee.port1.onmessage = ie, be = function() {
        le.postMessage(null);
      };
    } else
      be = function() {
        w(ie, 0);
      };
    function de(J, ue) {
      Q = w(function() {
        J(a.unstable_now());
      }, ue);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(J) {
      J.callback = null;
    }, a.unstable_forceFrameRate = function(J) {
      0 > J || 125 < J ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : O = 0 < J ? Math.floor(1e3 / J) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return B;
    }, a.unstable_next = function(J) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var ue = 3;
          break;
        default:
          ue = B;
      }
      var pe = B;
      B = ue;
      try {
        return J();
      } finally {
        B = pe;
      }
    }, a.unstable_requestPaint = function() {
      R = !0;
    }, a.unstable_runWithPriority = function(J, ue) {
      switch (J) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          J = 3;
      }
      var pe = B;
      B = J;
      try {
        return ue();
      } finally {
        B = pe;
      }
    }, a.unstable_scheduleCallback = function(J, ue, pe) {
      var Ae = a.unstable_now();
      switch (typeof pe == "object" && pe !== null ? (pe = pe.delay, pe = typeof pe == "number" && 0 < pe ? Ae + pe : Ae) : pe = Ae, J) {
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
      return ce = pe + ce, J = {
        id: v++,
        callback: ue,
        priorityLevel: J,
        startTime: pe,
        expirationTime: ce,
        sortIndex: -1
      }, pe > Ae ? (J.sortIndex = pe, r(A, J), i(p) === null && J === i(A) && (D ? (F(Q), Q = -1) : D = !0, de(j, pe - Ae))) : (J.sortIndex = ce, r(p, J), E || C || (E = !0, L || (L = !0, be()))), J;
    }, a.unstable_shouldYield = K, a.unstable_wrapCallback = function(J) {
      var ue = B;
      return function() {
        var pe = B;
        B = ue;
        try {
          return J.apply(this, arguments);
        } finally {
          B = pe;
        }
      };
    };
  })(Jl)), Jl;
}
var Hd;
function KA() {
  return Hd || (Hd = 1, zl.exports = jA()), zl.exports;
}
var hu = KA();
const QA = /* @__PURE__ */ Ip(hu);
function Ru(a, r, i) {
  if (!a) return;
  if (i(a) === !0) return a;
  let s = r ? a.return : a.child;
  for (; s; ) {
    const l = Ru(s, r, i);
    if (l) return l;
    s = r ? null : s.sibling;
  }
}
function xp(a) {
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
const xu = /* @__PURE__ */ xp(/* @__PURE__ */ X.createContext(null));
class _p extends X.Component {
  render() {
    return /* @__PURE__ */ X.createElement(xu.Provider, { value: this._reactInternals }, this.props.children);
  }
}
function Dp() {
  const a = X.useContext(xu);
  if (a === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const r = X.useId();
  return X.useMemo(() => {
    for (const i of [a, a?.alternate]) {
      if (!i) continue;
      const s = Ru(i, !1, (l) => {
        let c = l.memoizedState;
        for (; c; ) {
          if (c.memoizedState === r) return !0;
          c = c.next;
        }
      });
      if (s) return s;
    }
  }, [a, r]);
}
const XA = /* @__PURE__ */ Symbol.for("react.context"), YA = (a) => a !== null && typeof a == "object" && "$$typeof" in a && a.$$typeof === XA;
function WA() {
  const a = Dp(), [r] = X.useState(() => /* @__PURE__ */ new Map());
  r.clear();
  let i = a;
  for (; i; ) {
    const s = i.type;
    YA(s) && s !== xu && !r.has(s) && r.set(s, X.use(xp(s))), i = i.return;
  }
  return r;
}
function ZA() {
  const a = WA();
  return X.useMemo(
    () => Array.from(a.keys()).reduce(
      (r, i) => (s) => /* @__PURE__ */ X.createElement(r, null, /* @__PURE__ */ X.createElement(i.Provider, { ...s, value: a.get(i) })),
      (r) => /* @__PURE__ */ X.createElement(_p, { ...r })
    ),
    [a]
  );
}
function _u(a) {
  let r = a.root;
  for (; r.getState().previousRoot; ) r = r.getState().previousRoot;
  return r;
}
const Lp = (a) => a && a.isOrthographicCamera, VA = (a) => a && a.hasOwnProperty("current"), qA = (a) => a != null && (typeof a == "string" || typeof a == "number" || a.isColor), es = /* @__PURE__ */ ((a, r) => typeof window < "u" && (((a = window.document) == null ? void 0 : a.createElement) || ((r = window.navigator) == null ? void 0 : r.product) === "ReactNative"))() ? X.useLayoutEffect : X.useEffect;
function Du(a) {
  const r = X.useRef(a);
  return es(() => {
    r.current = a;
  }, [a]), r;
}
function $A() {
  const a = Dp(), r = ZA();
  return X.useMemo(() => ({
    children: i
  }) => {
    const l = !!Ru(a, !0, (c) => c.type === X.StrictMode) ? X.StrictMode : X.Fragment;
    return /* @__PURE__ */ Ce(l, {
      children: /* @__PURE__ */ Ce(r, {
        children: i
      })
    });
  }, [a, r]);
}
function ev({
  set: a
}) {
  return es(() => (a(new Promise(() => null)), () => a(!1)), [a]), null;
}
const nv = /* @__PURE__ */ ((a) => (a = class extends X.Component {
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
function Gp(a) {
  var r;
  const i = typeof window < "u" ? (r = window.devicePixelRatio) != null ? r : 2 : 1;
  return Array.isArray(a) ? Math.min(Math.max(a[0], i), a[1]) : a;
}
function oi(a) {
  var r;
  return (r = a.__r3f) == null ? void 0 : r.root.getState();
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
  equ(a, r, {
    arrays: i = "shallow",
    objects: s = "reference",
    strict: l = !0
  } = {}) {
    if (typeof a != typeof r || !!a != !!r) return !1;
    if (un.str(a) || un.num(a) || un.boo(a)) return a === r;
    const c = un.obj(a);
    if (c && s === "reference") return a === r;
    const d = un.arr(a);
    if (d && i === "reference") return a === r;
    if ((d || c) && a === r) return !0;
    let h;
    for (h in a) if (!(h in r)) return !1;
    if (c && i === "shallow" && s === "shallow") {
      for (h in l ? r : a) if (!un.equ(a[h], r[h], {
        strict: l,
        objects: "reference"
      })) return !1;
    } else
      for (h in l ? r : a) if (a[h] !== r[h]) return !1;
    if (un.und(h)) {
      if (d && a.length === 0 && r.length === 0 || c && Object.keys(a).length === 0 && Object.keys(r).length === 0) return !0;
      if (a !== r) return !1;
    }
    return !0;
  }
};
function tv(a) {
  const r = {
    nodes: {},
    materials: {},
    meshes: {}
  };
  return a && a.traverse((i) => {
    i.name && (r.nodes[i.name] = i), i.material && !r.materials[i.material.name] && (r.materials[i.material.name] = i.material), i.isMesh && !r.meshes[i.name] && (r.meshes[i.name] = i);
  }), r;
}
function rv(a) {
  a.type !== "Scene" && (a.dispose == null || a.dispose());
  for (const r in a) {
    const i = a[r];
    i?.type !== "Scene" && (i == null || i.dispose == null || i.dispose());
  }
}
const kp = ["children", "key", "ref"];
function ov(a) {
  const r = {};
  for (const i in a)
    kp.includes(i) || (r[i] = a[i]);
  return r;
}
function oa(a, r, i, s) {
  const l = a;
  let c = l?.__r3f;
  return c || (c = {
    root: r,
    type: i,
    parent: null,
    children: [],
    props: ov(s),
    object: l,
    eventCount: 0,
    handlers: {},
    isHidden: !1
  }, l && (l.__r3f = c)), c;
}
function Vi(a, r) {
  if (!r.includes("-")) return {
    root: a,
    key: r,
    target: a[r]
  };
  if (r in a)
    return {
      root: a,
      key: r,
      target: a[r]
    };
  let i = a;
  const s = r.split("-");
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
        key: r,
        target: void 0
      };
    }
    r = l, a = i, i = i[r];
  }
  return {
    root: a,
    key: r,
    target: i
  };
}
const Nd = /-\d+$/;
function ia(a, r) {
  if (un.str(r.props.attach)) {
    if (Nd.test(r.props.attach)) {
      const l = r.props.attach.replace(Nd, ""), {
        root: c,
        key: d
      } = Vi(a.object, l);
      Array.isArray(c[d]) || (c[d] = []);
    }
    const {
      root: i,
      key: s
    } = Vi(a.object, r.props.attach);
    r.previousAttach = i[s], i[s] = r.object;
  } else un.fun(r.props.attach) && (r.previousAttach = r.props.attach(a.object, r.object));
}
function sa(a, r) {
  if (un.str(r.props.attach)) {
    const {
      root: i,
      key: s
    } = Vi(a.object, r.props.attach), l = r.previousAttach;
    l === void 0 ? delete i[s] : i[s] = l;
  } else
    r.previousAttach == null || r.previousAttach(a.object, r.object);
  delete r.previousAttach;
}
const mu = [
  ...kp,
  // Instance props
  "args",
  "dispose",
  "attach",
  "object",
  "onUpdate",
  // Behavior flags
  "dispose"
], Ud = /* @__PURE__ */ new Map();
function iv(a) {
  let r = Ud.get(a.constructor);
  try {
    r || (r = new a.constructor(), Ud.set(a.constructor, r));
  } catch {
  }
  return r;
}
function sv(a, r) {
  const i = {};
  for (const s in r)
    if (!mu.includes(s) && !un.equ(r[s], a.props[s])) {
      i[s] = r[s];
      for (const l in r)
        l.startsWith(`${s}-`) && (i[l] = r[l]);
    }
  for (const s in a.props) {
    if (mu.includes(s) || r.hasOwnProperty(s)) continue;
    const {
      root: l,
      key: c
    } = Vi(a.object, s);
    if (l.constructor && l.constructor.length === 0) {
      const d = iv(l);
      un.und(d) || (i[c] = d[c]);
    } else
      i[c] = 0;
  }
  return i;
}
const av = ["map", "emissiveMap", "sheenColorMap", "specularColorMap", "envMap"], lv = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;
function lr(a, r) {
  var i;
  const s = a.__r3f, l = s && _u(s).getState(), c = s?.eventCount;
  for (const h in r) {
    let p = r[h];
    if (mu.includes(h)) continue;
    if (s && lv.test(h)) {
      typeof p == "function" ? s.handlers[h] = p : delete s.handlers[h], s.eventCount = Object.keys(s.handlers).length;
      continue;
    }
    if (p === void 0) continue;
    let {
      root: A,
      key: v,
      target: g
    } = Vi(a, h);
    if (g === void 0 && (typeof A != "object" || A === null))
      throw Error(`R3F: Cannot set "${h}". Ensure it is an object before setting "${v}".`);
    if (g instanceof Te.Layers && p instanceof Te.Layers)
      g.mask = p.mask;
    else if (g instanceof Te.Color && qA(p))
      g.set(p);
    else if (g !== null && typeof g == "object" && typeof g.set == "function" && typeof g.copy == "function" && p != null && p.constructor && g.constructor === p.constructor)
      g.copy(p);
    else if (g !== null && typeof g == "object" && typeof g.set == "function" && Array.isArray(p))
      typeof g.fromArray == "function" ? g.fromArray(p) : g.set(...p);
    else if (g !== null && typeof g == "object" && typeof g.set == "function" && typeof p == "number")
      typeof g.setScalar == "function" ? g.setScalar(p) : g.set(p);
    else if (A instanceof Te.ShaderMaterial && v === "uniforms" && un.obj(p)) {
      un.obj(A.uniforms) || (A.uniforms = {});
      const B = A.uniforms, C = p;
      for (const E in C) {
        const D = C[E], R = B[E];
        R ? Object.assign(R, D) : B[E] = {
          ...D
        };
      }
    } else {
      var d;
      A[v] = p, l && !l.linear && av.includes(v) && (d = A[v]) != null && d.isTexture && // sRGB textures must be RGBA8 since r137 https://github.com/mrdoob/three.js/pull/23129
      A[v].format === Te.RGBAFormat && A[v].type === Te.UnsignedByteType && (A[v].colorSpace = Te.SRGBColorSpace);
    }
  }
  if (s != null && s.parent && l != null && l.internal && (i = s.object) != null && i.isObject3D && c !== s.eventCount) {
    const h = s.object, p = l.internal.interaction.indexOf(h);
    p > -1 && l.internal.interaction.splice(p, 1), s.eventCount && h.raycast !== null && l.internal.interaction.push(h);
  }
  return s && s.props.attach === void 0 && (s.object.isBufferGeometry ? s.props.attach = "geometry" : s.object.isMaterial && (s.props.attach = "material")), s && mi(s), a;
}
function mi(a) {
  var r;
  if (!a.parent) return;
  a.props.onUpdate == null || a.props.onUpdate(a.object);
  const i = (r = a.root) == null || r.getState == null ? void 0 : r.getState();
  i && i.internal.frames === 0 && i.invalidate();
}
function Op(a, r) {
  a.manual || (Lp(a) ? (a.left = r.width / -2, a.right = r.width / 2, a.top = r.height / 2, a.bottom = r.height / -2) : a.aspect = r.width / r.height, a.updateProjectionMatrix());
}
const st = (a) => a?.isObject3D;
function ji(a) {
  return (a.eventObject || a.object).uuid + "/" + a.index + a.instanceId;
}
function Pp(a, r, i, s) {
  const l = i.get(r);
  l && (i.delete(r), i.size === 0 && (a.delete(s), l.target.releasePointerCapture(s)));
}
function uv(a, r, i) {
  const {
    internal: s
  } = a.getState();
  for (let l = 0; l < s.interaction.length; l++)
    s.interaction[l] === r && (s.interaction[l] = i);
  for (let l = 0; l < s.initialHits.length; l++)
    s.initialHits[l] === r && (s.initialHits[l] = i);
  s.hovered.forEach((l, c) => {
    if (l.eventObject === r || l.object === r) {
      s.hovered.delete(c);
      const d = {
        ...l,
        eventObject: l.eventObject === r ? i : l.eventObject,
        object: l.object === r ? i : l.object
      };
      s.hovered.set(ji(d), d);
    }
  }), s.capturedMap.forEach((l) => {
    const c = l.get(r);
    c && (l.delete(r), l.set(i, c));
  });
}
function cv(a, r) {
  const {
    internal: i
  } = a.getState();
  i.interaction = i.interaction.filter((s) => s !== r), i.initialHits = i.initialHits.filter((s) => s !== r), i.hovered.forEach((s, l) => {
    (s.eventObject === r || s.object === r) && i.hovered.delete(l);
  }), i.capturedMap.forEach((s, l) => {
    Pp(i.capturedMap, r, s, l);
  });
}
function fv(a) {
  function r(p) {
    const {
      internal: A
    } = a.getState(), v = p.offsetX - A.initialClick[0], g = p.offsetY - A.initialClick[1];
    return Math.round(Math.sqrt(v * v + g * g));
  }
  function i(p) {
    return p.filter((A) => ["Move", "Over", "Enter", "Out", "Leave"].some((v) => {
      var g;
      return (g = A.__r3f) == null ? void 0 : g.handlers["onPointer" + v];
    }));
  }
  function s(p, A) {
    const v = a.getState(), g = /* @__PURE__ */ new Set(), B = [], C = A ? A(v.internal.interaction) : v.internal.interaction;
    for (let w = 0; w < C.length; w++) {
      const F = oi(C[w]);
      F && (F.raycaster.camera = void 0);
    }
    v.previousRoot || v.events.compute == null || v.events.compute(p, v);
    function E(w) {
      const F = oi(w);
      if (!F || !F.events.enabled || F.raycaster.camera === null) return [];
      if (F.raycaster.camera === void 0) {
        var N;
        F.events.compute == null || F.events.compute(p, F, (N = F.previousRoot) == null ? void 0 : N.getState()), F.raycaster.camera === void 0 && (F.raycaster.camera = null);
      }
      return F.raycaster.camera ? F.raycaster.intersectObject(w, !0) : [];
    }
    let D = C.flatMap(E).sort((w, F) => {
      const N = oi(w.object), U = oi(F.object);
      return !N || !U ? w.distance - F.distance : U.events.priority - N.events.priority || w.distance - F.distance;
    }).filter((w) => {
      const F = ji(w);
      return g.has(F) ? !1 : (g.add(F), !0);
    });
    v.events.filter && (D = v.events.filter(D, v));
    for (const w of D) {
      let F = w.object;
      for (; F; ) {
        var R;
        (R = F.__r3f) != null && R.eventCount && B.push({
          ...w,
          eventObject: F
        }), F = F.parent;
      }
    }
    if ("pointerId" in p && v.internal.capturedMap.has(p.pointerId))
      for (let w of v.internal.capturedMap.get(p.pointerId).values())
        g.has(ji(w.intersection)) || B.push(w.intersection);
    return B;
  }
  function l(p, A, v, g) {
    if (p.length) {
      const B = {
        stopped: !1
      };
      for (const C of p) {
        let E = oi(C.object);
        if (E || C.object.traverseAncestors((D) => {
          const R = oi(D);
          if (R)
            return E = R, !1;
        }), E) {
          const {
            raycaster: D,
            pointer: R,
            camera: w,
            internal: F
          } = E, N = new Te.Vector3(R.x, R.y, 0).unproject(w), U = (k) => {
            var K, ie;
            return (K = (ie = F.capturedMap.get(k)) == null ? void 0 : ie.has(C.eventObject)) != null ? K : !1;
          }, j = (k) => {
            const K = {
              intersection: C,
              target: A.target
            };
            F.capturedMap.has(k) ? F.capturedMap.get(k).set(C.eventObject, K) : F.capturedMap.set(k, /* @__PURE__ */ new Map([[C.eventObject, K]])), A.target.setPointerCapture(k);
          }, L = (k) => {
            const K = F.capturedMap.get(k);
            K && Pp(F.capturedMap, C.eventObject, K, k);
          };
          let Q = {};
          for (let k in A) {
            let K = A[k];
            typeof K != "function" && (Q[k] = K);
          }
          let O = {
            ...C,
            ...Q,
            pointer: R,
            intersections: p,
            stopped: B.stopped,
            delta: v,
            unprojectedPoint: N,
            ray: D.ray,
            camera: w,
            // Hijack stopPropagation, which just sets a flag
            stopPropagation() {
              const k = "pointerId" in A && F.capturedMap.get(A.pointerId);
              if (
                // ...if this pointer hasn't been captured
                (!k || // ... or if the hit object is capturing the pointer
                k.has(C.eventObject)) && (O.stopped = B.stopped = !0, F.hovered.size && Array.from(F.hovered.values()).find((K) => K.eventObject === C.eventObject))
              ) {
                const K = p.slice(0, p.indexOf(C));
                c([...K, C]);
              }
            },
            // there should be a distinction between target and currentTarget
            target: {
              hasPointerCapture: U,
              setPointerCapture: j,
              releasePointerCapture: L
            },
            currentTarget: {
              hasPointerCapture: U,
              setPointerCapture: j,
              releasePointerCapture: L
            },
            nativeEvent: A
          };
          if (g(O), B.stopped === !0) break;
        }
      }
    }
    return p;
  }
  function c(p) {
    const {
      internal: A
    } = a.getState();
    for (const v of A.hovered.values())
      if (!p.length || !p.find((g) => g.object === v.object && g.index === v.index && g.instanceId === v.instanceId)) {
        const B = v.eventObject.__r3f;
        if (A.hovered.delete(ji(v)), B != null && B.eventCount) {
          const C = B.handlers, E = {
            ...v,
            intersections: p
          };
          C.onPointerOut == null || C.onPointerOut(E), C.onPointerLeave == null || C.onPointerLeave(E);
        }
      }
  }
  function d(p, A) {
    for (let v = 0; v < A.length; v++) {
      const g = A[v].__r3f;
      g == null || g.handlers.onPointerMissed == null || g.handlers.onPointerMissed(p);
    }
  }
  function h(p) {
    switch (p) {
      case "onPointerLeave":
      case "onPointerCancel":
        return () => c([]);
      case "onLostPointerCapture":
        return (A) => {
          const {
            internal: v
          } = a.getState();
          "pointerId" in A && v.capturedMap.has(A.pointerId) && requestAnimationFrame(() => {
            v.capturedMap.has(A.pointerId) && (v.capturedMap.delete(A.pointerId), c([]));
          });
        };
    }
    return function(v) {
      const {
        onPointerMissed: g,
        internal: B
      } = a.getState();
      B.lastEvent.current = v;
      const C = p === "onPointerMove", E = p === "onClick" || p === "onContextMenu" || p === "onDoubleClick", R = s(v, C ? i : void 0), w = E ? r(v) : 0;
      p === "onPointerDown" && (B.initialClick = [v.offsetX, v.offsetY], B.initialHits = R.map((N) => N.eventObject)), E && !R.length && w <= 2 && (d(v, B.interaction), g && g(v)), C && c(R);
      function F(N) {
        const U = N.eventObject, j = U.__r3f;
        if (!(j != null && j.eventCount)) return;
        const L = j.handlers;
        if (C) {
          if (L.onPointerOver || L.onPointerEnter || L.onPointerOut || L.onPointerLeave) {
            const Q = ji(N), O = B.hovered.get(Q);
            O ? O.stopped && N.stopPropagation() : (B.hovered.set(Q, N), L.onPointerOver == null || L.onPointerOver(N), L.onPointerEnter == null || L.onPointerEnter(N));
          }
          L.onPointerMove == null || L.onPointerMove(N);
        } else {
          const Q = L[p];
          Q ? (!E || B.initialHits.includes(U)) && (d(v, B.interaction.filter((O) => !B.initialHits.includes(O))), Q(N)) : E && B.initialHits.includes(U) && d(v, B.interaction.filter((O) => !B.initialHits.includes(O)));
        }
      }
      l(R, v, w, F);
    };
  }
  return {
    handlePointer: h
  };
}
const zd = (a) => !!(a != null && a.render), Lu = /* @__PURE__ */ X.createContext(null), dv = (a, r) => {
  const i = Tp((h, p) => {
    const A = new Te.Vector3(), v = new Te.Vector3(), g = new Te.Vector3();
    function B(w = p().camera, F = v, N = p().size) {
      const {
        width: U,
        height: j,
        top: L,
        left: Q
      } = N, O = U / j;
      F.isVector3 ? g.copy(F) : g.set(...F);
      const k = w.getWorldPosition(A).distanceTo(g);
      if (Lp(w))
        return {
          width: U / w.zoom,
          height: j / w.zoom,
          top: L,
          left: Q,
          factor: 1,
          distance: k,
          aspect: O
        };
      {
        const K = w.fov * Math.PI / 180, ie = 2 * Math.tan(K / 2) * k, be = ie * (U / j);
        return {
          width: be,
          height: ie,
          top: L,
          left: Q,
          factor: U / be,
          distance: k,
          aspect: O
        };
      }
    }
    let C;
    const E = (w) => h((F) => ({
      performance: {
        ...F.performance,
        current: w
      }
    })), D = new Te.Vector2();
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
      invalidate: (w = 1) => a(p(), w),
      advance: (w, F) => r(w, F, p()),
      legacy: !1,
      linear: !1,
      flat: !1,
      controls: null,
      clock: new Te.Clock(),
      pointer: D,
      mouse: D,
      frameloop: "always",
      onPointerMissed: void 0,
      performance: {
        current: 1,
        min: 0.5,
        max: 1,
        debounce: 200,
        regress: () => {
          const w = p();
          C && clearTimeout(C), w.performance.current !== w.performance.min && E(w.performance.min), C = setTimeout(() => E(p().performance.max), w.performance.debounce);
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
      setEvents: (w) => h((F) => ({
        ...F,
        events: {
          ...F.events,
          ...w
        }
      })),
      setSize: (w, F, N = 0, U = 0) => {
        const j = p().camera, L = {
          width: w,
          height: F,
          top: N,
          left: U
        };
        h((Q) => ({
          size: L,
          viewport: {
            ...Q.viewport,
            ...B(j, v, L)
          }
        }));
      },
      setDpr: (w) => h((F) => {
        const N = Gp(w);
        return {
          viewport: {
            ...F.viewport,
            dpr: N,
            initialDpr: F.viewport.initialDpr || N
          }
        };
      }),
      setFrameloop: (w = "always") => {
        const F = p().clock;
        F.stop(), F.elapsedTime = 0, w !== "never" && (F.start(), F.elapsedTime = 0), h(() => ({
          frameloop: w
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
        lastEvent: /* @__PURE__ */ X.createRef(),
        // Updates
        active: !1,
        frames: 0,
        priority: 0,
        subscribe: (w, F, N) => {
          const U = p().internal;
          return U.priority = U.priority + (F > 0 ? 1 : 0), U.subscribers.push({
            ref: w,
            priority: F,
            store: N
          }), U.subscribers = U.subscribers.sort((j, L) => j.priority - L.priority), () => {
            const j = p().internal;
            j != null && j.subscribers && (j.priority = j.priority - (F > 0 ? 1 : 0), j.subscribers = j.subscribers.filter((L) => L.ref !== w));
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
      viewport: A,
      gl: v,
      set: g
    } = i.getState();
    if (p.width !== l.width || p.height !== l.height || A.dpr !== c) {
      l = p, c = A.dpr, Op(h, p), A.dpr > 0 && v.setPixelRatio(A.dpr);
      const B = typeof HTMLCanvasElement < "u" && v.domElement instanceof HTMLCanvasElement;
      v.setSize(p.width, p.height, B);
    }
    h !== d && (d = h, g((B) => ({
      viewport: {
        ...B.viewport,
        ...B.viewport.getCurrentViewport(h)
      }
    })));
  }), i.subscribe((h) => a(h)), i;
};
function Gu() {
  const a = X.useContext(Lu);
  if (!a) throw new Error("R3F: Hooks can only be used within the Canvas component!");
  return a;
}
function et(a = (i) => i, r) {
  return Gu()(a, r);
}
function pa(a, r = 0) {
  const i = Gu(), s = i.getState().internal.subscribe, l = Du(a);
  return es(() => s(l, r, i), [r, s, i]), null;
}
const Jd = /* @__PURE__ */ new WeakMap(), pv = (a) => {
  var r;
  return typeof a == "function" && (a == null || (r = a.prototype) == null ? void 0 : r.constructor) === a;
};
function Hp(a, r) {
  return function(i, ...s) {
    let l;
    return pv(i) ? (l = Jd.get(i), l || (l = new i(), Jd.set(i, l))) : l = i, a && a(l), Promise.all(s.map((c) => new Promise((d, h) => l.load(c, (p) => {
      st(p?.scene) && Object.assign(p, tv(p.scene)), d(p);
    }, r, (p) => h(new Error(`Could not load ${c}: ${p?.message}`))))));
  };
}
function Lr(a, r, i, s) {
  const l = Array.isArray(r) ? r : [r], c = UA(Hp(i, s), [a, ...l], {
    equal: un.equ
  });
  return Array.isArray(r) ? c : c[0];
}
Lr.preload = function(a, r, i) {
  const s = Array.isArray(r) ? r : [r];
  return zA(Hp(i), [a, ...s]);
};
Lr.clear = function(a, r) {
  const i = Array.isArray(r) ? r : [r];
  return JA([a, ...i]);
};
const hv = 1, mv = 8, gv = 32, Av = 2;
var vv = {
  version: "9.6.1"
};
function bv(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var jd = {
  exports: {}
}, Kd = {
  exports: {}
}, Qd;
function Bv() {
  return Qd || (Qd = 1, (function(a) {
    a.exports = function(r) {
      function i(e, n, t, o) {
        return new Gh(e, n, t, o);
      }
      function s() {
      }
      function l(e) {
        var n = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
          n += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var t = 2; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
        }
        return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      function c(e) {
        var n = e, t = e;
        if (e.alternate) for (; n.return; ) n = n.return;
        else {
          e = n;
          do
            n = e, (n.flags & 4098) !== 0 && (t = n.return), e = n.return;
          while (e);
        }
        return n.tag === 3 ? t : null;
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
        for (var t = e, o = n; ; ) {
          var u = t.return;
          if (u === null) break;
          var f = u.alternate;
          if (f === null) {
            if (o = u.return, o !== null) {
              t = o;
              continue;
            }
            break;
          }
          if (u.child === f.child) {
            for (f = u.child; f; ) {
              if (f === t) return d(u), e;
              if (f === o) return d(u), n;
              f = f.sibling;
            }
            throw Error(l(188));
          }
          if (t.return !== o.return) t = u, o = f;
          else {
            for (var b = !1, S = u.child; S; ) {
              if (S === t) {
                b = !0, t = u, o = f;
                break;
              }
              if (S === o) {
                b = !0, o = u, t = f;
                break;
              }
              S = S.sibling;
            }
            if (!b) {
              for (S = f.child; S; ) {
                if (S === t) {
                  b = !0, t = f, o = u;
                  break;
                }
                if (S === o) {
                  b = !0, o = f, t = u;
                  break;
                }
                S = S.sibling;
              }
              if (!b) throw Error(l(189));
            }
          }
          if (t.alternate !== o) throw Error(l(190));
        }
        if (t.tag !== 3) throw Error(l(188));
        return t.stateNode.current === t ? e : n;
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
      function A(e) {
        var n = e.tag;
        if (n === 5 || n === 26 || n === 27 || n === 6) return e;
        for (e = e.child; e !== null; ) {
          if (e.tag !== 4 && (n = A(e), n !== null)) return n;
          e = e.sibling;
        }
        return null;
      }
      function v(e) {
        return e === null || typeof e != "object" ? null : (e = Jf && e[Jf] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      function g(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.$$typeof === Nh ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
          case ko:
            return "Fragment";
          case tl:
            return "Profiler";
          case Uf:
            return "StrictMode";
          case ol:
            return "Suspense";
          case il:
            return "SuspenseList";
          case al:
            return "Activity";
        }
        if (typeof e == "object") switch (e.$$typeof) {
          case Go:
            return "Portal";
          case Or:
            return e.displayName || "Context";
          case zf:
            return (e._context.displayName || "Context") + ".Consumer";
          case rl:
            var n = e.render;
            return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case sl:
            return n = e.displayName || null, n !== null ? n : g(e.type) || "Memo";
          case Pr:
            n = e._payload, e = e._init;
            try {
              return g(e(n));
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
        0 > Ho || (e.current = pl[Ho], pl[Ho] = null, Ho--);
      }
      function E(e, n) {
        Ho++, pl[Ho] = e.current, e.current = n;
      }
      function D(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (hg(e) / mg | 0) | 0;
      }
      function R(e) {
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
      function w(e, n, t) {
        var o = e.pendingLanes;
        if (o === 0) return 0;
        var u = 0, f = e.suspendedLanes, b = e.pingedLanes;
        e = e.warmLanes;
        var S = o & 134217727;
        return S !== 0 ? (o = S & ~f, o !== 0 ? u = R(o) : (b &= S, b !== 0 ? u = R(b) : t || (t = S & ~e, t !== 0 && (u = R(t))))) : (S = o & ~f, S !== 0 ? u = R(S) : b !== 0 ? u = R(b) : t || (t = o & ~e, t !== 0 && (u = R(t)))), u === 0 ? 0 : n !== 0 && n !== u && (n & f) === 0 && (f = u & -u, t = n & -n, f >= t || f === 32 && (t & 4194048) !== 0) ? n : u;
      }
      function F(e, n) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
      }
      function N(e, n) {
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
      function U() {
        var e = Ss;
        return Ss <<= 1, (Ss & 62914560) === 0 && (Ss = 4194304), e;
      }
      function j(e) {
        for (var n = [], t = 0; 31 > t; t++) n.push(e);
        return n;
      }
      function L(e, n) {
        e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
      }
      function Q(e, n, t, o, u, f) {
        var b = e.pendingLanes;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= t, e.entangledLanes &= t, e.errorRecoveryDisabledLanes &= t, e.shellSuspendCounter = 0;
        var S = e.entanglements, P = e.expirationTimes, Y = e.hiddenUpdates;
        for (t = b & ~t; 0 < t; ) {
          var ae = 31 - Et(t), q = 1 << ae;
          S[ae] = 0, P[ae] = -1;
          var fe = Y[ae];
          if (fe !== null) for (Y[ae] = null, ae = 0; ae < fe.length; ae++) {
            var Le = fe[ae];
            Le !== null && (Le.lane &= -536870913);
          }
          t &= ~q;
        }
        o !== 0 && O(e, o, 0), f !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(b & ~n));
      }
      function O(e, n, t) {
        e.pendingLanes |= n, e.suspendedLanes &= ~n;
        var o = 31 - Et(n);
        e.entangledLanes |= n, e.entanglements[o] = e.entanglements[o] | 1073741824 | t & 261930;
      }
      function k(e, n) {
        var t = e.entangledLanes |= n;
        for (e = e.entanglements; t; ) {
          var o = 31 - Et(t), u = 1 << o;
          u & n | e[o] & n && (e[o] |= n), t &= ~u;
        }
      }
      function K(e, n) {
        var t = n & -n;
        return t = (t & 42) !== 0 ? 1 : ie(t), (t & (e.suspendedLanes | n)) !== 0 ? 0 : t;
      }
      function ie(e) {
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
      function be(e) {
        return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
      }
      function ee(e) {
        if (typeof Bg == "function" && yg(e), St && typeof St.setStrictMode == "function") try {
          St.setStrictMode(Fi, e);
        } catch {
        }
      }
      function le(e, n) {
        return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
      }
      function de(e) {
        if (gl === void 0) try {
          throw Error();
        } catch (t) {
          var n = t.stack.trim().match(/\n( *(at )?)/);
          gl = n && n[1] || "", md = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
        return `
` + gl + e + md;
      }
      function J(e, n) {
        if (!e || Al) return "";
        Al = !0;
        var t = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          var o = {
            DetermineComponentFrameRoot: function() {
              try {
                if (n) {
                  var q = function() {
                    throw Error();
                  };
                  if (Object.defineProperty(q.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                      Reflect.construct(q, []);
                    } catch (Le) {
                      var fe = Le;
                    }
                    Reflect.construct(e, [], q);
                  } else {
                    try {
                      q.call();
                    } catch (Le) {
                      fe = Le;
                    }
                    e.call(q.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (Le) {
                    fe = Le;
                  }
                  (q = e()) && typeof q.catch == "function" && q.catch(function() {
                  });
                }
              } catch (Le) {
                if (Le && fe && typeof Le.stack == "string") return [Le.stack, fe.stack];
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
            var P = b.split(`
`), Y = S.split(`
`);
            for (u = o = 0; o < P.length && !P[o].includes("DetermineComponentFrameRoot"); ) o++;
            for (; u < Y.length && !Y[u].includes("DetermineComponentFrameRoot"); ) u++;
            if (o === P.length || u === Y.length) for (o = P.length - 1, u = Y.length - 1; 1 <= o && 0 <= u && P[o] !== Y[u]; ) u--;
            for (; 1 <= o && 0 <= u; o--, u--) if (P[o] !== Y[u]) {
              if (o !== 1 || u !== 1) do
                if (o--, u--, 0 > u || P[o] !== Y[u]) {
                  var ae = `
` + P[o].replace(" at new ", " at ");
                  return e.displayName && ae.includes("<anonymous>") && (ae = ae.replace("<anonymous>", e.displayName)), ae;
                }
              while (1 <= o && 0 <= u);
              break;
            }
          }
        } finally {
          Al = !1, Error.prepareStackTrace = t;
        }
        return (t = e ? e.displayName || e.name : "") ? de(t) : "";
      }
      function ue(e, n) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            return de(e.type);
          case 16:
            return de("Lazy");
          case 13:
            return e.child !== n && n !== null ? de("Suspense Fallback") : de("Suspense");
          case 19:
            return de("SuspenseList");
          case 0:
          case 15:
            return J(e.type, !1);
          case 11:
            return J(e.type.render, !1);
          case 1:
            return J(e.type, !0);
          case 31:
            return de("Activity");
          default:
            return "";
        }
      }
      function pe(e) {
        try {
          var n = "", t = null;
          do
            n += ue(e, t), t = e, e = e.return;
          while (e);
          return n;
        } catch (o) {
          return `
Error generating stack: ` + o.message + `
` + o.stack;
        }
      }
      function Ae(e, n) {
        if (typeof e == "object" && e !== null) {
          var t = gd.get(e);
          return t !== void 0 ? t : (n = {
            value: e,
            source: n,
            stack: pe(n)
          }, gd.set(e, n), n);
        }
        return {
          value: e,
          source: n,
          stack: pe(n)
        };
      }
      function ce(e, n) {
        Uo[zo++] = Ri, Uo[zo++] = ws, ws = e, Ri = n;
      }
      function Be(e, n, t) {
        Rt[xt++] = or, Rt[xt++] = ir, Rt[xt++] = Hr, Hr = e;
        var o = or;
        e = ir;
        var u = 32 - Et(o) - 1;
        o &= ~(1 << u), t += 1;
        var f = 32 - Et(n) + u;
        if (30 < f) {
          var b = u - u % 5;
          f = (o & (1 << b) - 1).toString(32), o >>= b, u -= b, or = 1 << 32 - Et(n) + u | t << u | o, ir = f + e;
        } else or = 1 << f | t << u | o, ir = e;
      }
      function he(e) {
        e.return !== null && (ce(e, 1), Be(e, 1, 0));
      }
      function Me(e) {
        for (; e === ws; ) ws = Uo[--zo], Uo[zo] = null, Ri = Uo[--zo], Uo[zo] = null;
        for (; e === Hr; ) Hr = Rt[--xt], Rt[xt] = null, ir = Rt[--xt], Rt[xt] = null, or = Rt[--xt], Rt[xt] = null;
      }
      function Fe(e, n) {
        Rt[xt++] = or, Rt[xt++] = ir, Rt[xt++] = Hr, or = n.id, ir = n.overflow, Hr = e;
      }
      function an(e, n) {
        E(Nr, n), E(xi, e), E(zn, null), e = Jh(n), C(zn), E(zn, e);
      }
      function xe() {
        C(zn), C(xi), C(Nr);
      }
      function Pn(e) {
        e.memoizedState !== null && E(Is, e);
        var n = zn.current, t = jh(n, e.type);
        n !== t && (E(xi, e), E(zn, t));
      }
      function dn(e) {
        xi.current === e && (C(zn), C(xi)), Is.current === e && (C(Is), Cr ? uo._currentValue = Oo : uo._currentValue2 = Oo);
      }
      function Yn(e) {
        var n = Error(l(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw tt(Ae(n, e)), vl;
      }
      function yn(e, n) {
        if (!qn) throw Error(l(175));
        jm(e.stateNode, e.type, e.memoizedProps, n, e) || Yn(e, !0);
      }
      function Ye(e) {
        for (Jn = e.return; Jn; ) switch (Jn.tag) {
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
            Jn = Jn.return;
        }
      }
      function Fn(e) {
        if (!qn || e !== Jn) return !1;
        if (!Xe) return Ye(e), Xe = !0, !1;
        var n = e.tag;
        if (_n ? n !== 3 && n !== 27 && (n !== 5 || td(e.type) && !ys(e.type, e.memoizedProps)) && mn && Yn(e) : n !== 3 && (n !== 5 || td(e.type) && !ys(e.type, e.memoizedProps)) && mn && Yn(e), Ye(e), n === 13) {
          if (!qn) throw Error(l(316));
          if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
          mn = Wm(e);
        } else if (n === 31) {
          if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
          mn = Ym(e);
        } else mn = _n && n === 27 ? Lm(e.type, mn) : Jn ? nd(e.stateNode) : null;
        return !0;
      }
      function pn() {
        qn && (mn = Jn = null, Xe = !1);
      }
      function nt() {
        var e = Ur;
        return e !== null && (mt === null ? mt = e : mt.push.apply(mt, e), Ur = null), e;
      }
      function tt(e) {
        Ur === null ? Ur = [e] : Ur.push(e);
      }
      function at(e, n, t) {
        Cr ? (E(Ts, n._currentValue), n._currentValue = t) : (E(Ts, n._currentValue2), n._currentValue2 = t);
      }
      function vn(e) {
        var n = Ts.current;
        Cr ? e._currentValue = n : e._currentValue2 = n, C(Ts);
      }
      function Pt(e, n, t) {
        for (; e !== null; ) {
          var o = e.alternate;
          if ((e.childLanes & n) !== n ? (e.childLanes |= n, o !== null && (o.childLanes |= n)) : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n), e === t) break;
          e = e.return;
        }
      }
      function Ft(e, n, t, o) {
        var u = e.child;
        for (u !== null && (u.return = e); u !== null; ) {
          var f = u.dependencies;
          if (f !== null) {
            var b = u.child;
            f = f.firstContext;
            e: for (; f !== null; ) {
              var S = f;
              f = u;
              for (var P = 0; P < n.length; P++) if (S.context === n[P]) {
                f.lanes |= t, S = f.alternate, S !== null && (S.lanes |= t), Pt(f.return, t, e), o || (b = null);
                break e;
              }
              f = S.next;
            }
          } else if (u.tag === 18) {
            if (b = u.return, b === null) throw Error(l(341));
            b.lanes |= t, f = b.alternate, f !== null && (f.lanes |= t), Pt(b, t, e), b = null;
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
      function At(e, n, t, o) {
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
          } else if (u === Is.current) {
            if (b = u.alternate, b === null) throw Error(l(387));
            b.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(uo) : e = [uo]);
          }
          u = u.return;
        }
        e !== null && Ft(n, e, t, o), n.flags |= 262144;
      }
      function Wt(e) {
        for (e = e.firstContext; e !== null; ) {
          var n = e.context;
          if (!Mt(Cr ? n._currentValue : n._currentValue2, e.memoizedValue)) return !0;
          e = e.next;
        }
        return !1;
      }
      function lt(e) {
        co = e, Sr = null, e = e.dependencies, e !== null && (e.firstContext = null);
      }
      function ln(e) {
        return Zt(co, e);
      }
      function ut(e, n) {
        return co === null && lt(e), Zt(e, n);
      }
      function Zt(e, n) {
        var t = Cr ? n._currentValue : n._currentValue2;
        if (n = {
          context: n,
          memoizedValue: t,
          next: null
        }, Sr === null) {
          if (e === null) throw Error(l(308));
          Sr = n, e.dependencies = {
            lanes: 0,
            firstContext: n
          }, e.flags |= 524288;
        } else Sr = Sr.next = n;
        return t;
      }
      function pr() {
        return {
          controller: new Eg(),
          data: /* @__PURE__ */ new Map(),
          refCount: 0
        };
      }
      function Ln(e) {
        e.refCount--, e.refCount === 0 && Sg(Mg, function() {
          e.controller.abort();
        });
      }
      function Ht() {
      }
      function Hn(e) {
        e !== Jo && e.next === null && (Jo === null ? Fs = Jo = e : Jo = Jo.next = e), Rs = !0, bl || (bl = !0, I());
      }
      function Vt(e, n) {
        if (!Bl && Rs) {
          Bl = !0;
          do
            for (var t = !1, o = Fs; o !== null; ) {
              if (e !== 0) {
                var u = o.pendingLanes;
                if (u === 0) var f = 0;
                else {
                  var b = o.suspendedLanes, S = o.pingedLanes;
                  f = (1 << 31 - Et(42 | e) + 1) - 1, f &= u & ~(b & ~S), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
                }
                f !== 0 && (t = !0, hr(o, f));
              } else f = je, f = w(o, o === sn ? f : 0, o.cancelPendingCommit !== null || o.timeoutHandle !== lo), (f & 3) === 0 || F(o, f) || (t = !0, hr(o, f));
              o = o.next;
            }
          while (t);
          Bl = !1;
        }
      }
      function no() {
        Io();
      }
      function Io() {
        Rs = bl = !1;
        var e = 0;
        fo !== 0 && $h() && (e = fo);
        for (var n = pt(), t = null, o = Fs; o !== null; ) {
          var u = o.next, f = qt(o, n);
          f === 0 ? (o.next = null, t === null ? Fs = u : t.next = u, u === null && (Jo = t)) : (t = o, (e !== 0 || (f & 3) !== 0) && (Rs = !0)), o = u;
        }
        Dn !== 0 && Dn !== 5 || Vt(e), fo !== 0 && (fo = 0);
      }
      function qt(e, n) {
        for (var t = e.suspendedLanes, o = e.pingedLanes, u = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
          var b = 31 - Et(f), S = 1 << b, P = u[b];
          P === -1 ? ((S & t) === 0 || (S & o) !== 0) && (u[b] = N(S, n)) : P <= n && (e.expiredLanes |= S), f &= ~S;
        }
        if (n = sn, t = je, t = w(e, e === n ? t : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== lo), o = e.callbackNode, t === 0 || e === n && (nn === 2 || nn === 9) || e.cancelPendingCommit !== null) return o !== null && o !== null && hl(o), e.callbackNode = null, e.callbackPriority = 0;
        if ((t & 3) === 0 || F(e, t)) {
          if (n = t & -t, n === e.callbackPriority) return n;
          switch (o !== null && hl(o), be(t)) {
            case 2:
            case 8:
              t = vg;
              break;
            case 32:
              t = ml;
              break;
            case 268435456:
              t = bg;
              break;
            default:
              t = ml;
          }
          return o = Cn.bind(null, e), t = Ms(t, o), e.callbackPriority = n, e.callbackNode = t, n;
        }
        return o !== null && o !== null && hl(o), e.callbackPriority = 2, e.callbackNode = null, 2;
      }
      function Cn(e, n) {
        if (Dn !== 0 && Dn !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
        var t = e.callbackNode;
        if (Mi() && e.callbackNode !== t) return null;
        var o = je;
        return o = w(e, e === sn ? o : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== lo), o === 0 ? null : (gf(e, o, n), qt(e, pt()), e.callbackNode != null && e.callbackNode === t ? Cn.bind(null, e) : null);
      }
      function hr(e, n) {
        if (Mi()) return null;
        gf(e, n, !0);
      }
      function I() {
        sm ? am(function() {
          (Ne & 6) !== 0 ? Ms(pd, no) : Io();
        }) : Ms(pd, no);
      }
      function Z() {
        if (fo === 0) {
          var e = jo;
          e === 0 && (e = Cs, Cs <<= 1, (Cs & 261888) === 0 && (Cs = 256)), fo = e;
        }
        return fo;
      }
      function me(e, n) {
        if (_i === null) {
          var t = _i = [];
          yl = 0, jo = Z(), Ko = {
            status: "pending",
            value: void 0,
            then: function(o) {
              t.push(o);
            }
          };
        }
        return yl++, n.then(Je, Je), n;
      }
      function Je() {
        if (--yl === 0 && _i !== null) {
          Ko !== null && (Ko.status = "fulfilled");
          var e = _i;
          _i = null, jo = 0, Ko = null;
          for (var n = 0; n < e.length; n++) (0, e[n])();
        }
      }
      function ne(e, n) {
        var t = [], o = {
          status: "pending",
          value: null,
          reason: null,
          then: function(u) {
            t.push(u);
          }
        };
        return e.then(function() {
          o.status = "fulfilled", o.value = n;
          for (var u = 0; u < t.length; u++) (0, t[u])(n);
        }, function(u) {
          for (o.status = "rejected", o.reason = u, u = 0; u < t.length; u++) (0, t[u])(void 0);
        }), o;
      }
      function Rn() {
        var e = po.current;
        return e !== null ? e : sn.pooledCache;
      }
      function rt(e, n) {
        n === null ? E(po, po.current) : E(po, n.pool);
      }
      function gi() {
        var e = Rn();
        return e === null ? null : {
          parent: Cr ? gn._currentValue : gn._currentValue2,
          pool: e
        };
      }
      function mr(e, n) {
        if (Mt(e, n)) return !0;
        if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
        var t = Object.keys(e), o = Object.keys(n);
        if (t.length !== o.length) return !1;
        for (o = 0; o < t.length; o++) {
          var u = t[o];
          if (!Cg.call(n, u) || !Mt(e[u], n[u])) return !1;
        }
        return !0;
      }
      function ct(e) {
        return e = e.status, e === "fulfilled" || e === "rejected";
      }
      function ft(e, n, t) {
        switch (t = e[t], t === void 0 ? e.push(n) : t !== n && (n.then(Ht, Ht), n = t), n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw e = n.reason, er(e), e;
          default:
            if (typeof n.status == "string") n.then(Ht, Ht);
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
                throw e = n.reason, er(e), e;
            }
            throw ho = n, Qo;
        }
      }
      function ot(e) {
        try {
          var n = e._init;
          return n(e._payload);
        } catch (t) {
          throw t !== null && typeof t == "object" && typeof t.then == "function" ? (ho = t, Qo) : t;
        }
      }
      function $t() {
        if (ho === null) throw Error(l(459));
        var e = ho;
        return ho = null, e;
      }
      function er(e) {
        if (e === Qo || e === xs) throw Error(l(483));
      }
      function Nt(e) {
        var n = Di;
        return Di += 1, Xo === null && (Xo = []), ft(Xo, e, n);
      }
      function to(e, n) {
        n = n.props.ref, e.ref = n !== void 0 ? n : null;
      }
      function To(e, n) {
        throw n.$$typeof === Ph ? Error(l(525)) : (e = Object.prototype.toString.call(n), Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e)));
      }
      function ro(e) {
        function n(_, T) {
          if (e) {
            var G = _.deletions;
            G === null ? (_.deletions = [T], _.flags |= 16) : G.push(T);
          }
        }
        function t(_, T) {
          if (!e) return null;
          for (; T !== null; ) n(_, T), T = T.sibling;
          return null;
        }
        function o(_) {
          for (var T = /* @__PURE__ */ new Map(); _ !== null; ) _.key !== null ? T.set(_.key, _) : T.set(_.index, _), _ = _.sibling;
          return T;
        }
        function u(_, T) {
          return _ = yr(_, T), _.index = 0, _.sibling = null, _;
        }
        function f(_, T, G) {
          return _.index = G, e ? (G = _.alternate, G !== null ? (G = G.index, G < T ? (_.flags |= 67108866, T) : G) : (_.flags |= 67108866, T)) : (_.flags |= 1048576, T);
        }
        function b(_) {
          return e && _.alternate === null && (_.flags |= 67108866), _;
        }
        function S(_, T, G, $) {
          return T === null || T.tag !== 6 ? (T = qa(G, _.mode, $), T.return = _, T) : (T = u(T, G), T.return = _, T);
        }
        function P(_, T, G, $) {
          var Se = G.type;
          return Se === ko ? ae(_, T, G.props.children, $, G.key) : T !== null && (T.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === Pr && ot(Se) === T.type) ? (T = u(T, G.props), to(T, G), T.return = _, T) : (T = vs(G.type, G.key, G.props, null, _.mode, $), to(T, G), T.return = _, T);
        }
        function Y(_, T, G, $) {
          return T === null || T.tag !== 4 || T.stateNode.containerInfo !== G.containerInfo || T.stateNode.implementation !== G.implementation ? (T = $a(G, _.mode, $), T.return = _, T) : (T = u(T, G.children || []), T.return = _, T);
        }
        function ae(_, T, G, $, Se) {
          return T === null || T.tag !== 7 ? (T = ao(G, _.mode, $, Se), T.return = _, T) : (T = u(T, G), T.return = _, T);
        }
        function q(_, T, G) {
          if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint") return T = qa("" + T, _.mode, G), T.return = _, T;
          if (typeof T == "object" && T !== null) {
            switch (T.$$typeof) {
              case bs:
                return G = vs(T.type, T.key, T.props, null, _.mode, G), to(G, T), G.return = _, G;
              case Go:
                return T = $a(T, _.mode, G), T.return = _, T;
              case Pr:
                return T = ot(T), q(_, T, G);
            }
            if (Bs(T) || v(T)) return T = ao(T, _.mode, G, null), T.return = _, T;
            if (typeof T.then == "function") return q(_, Nt(T), G);
            if (T.$$typeof === Or) return q(_, ut(_, T), G);
            To(_, T);
          }
          return null;
        }
        function fe(_, T, G, $) {
          var Se = T !== null ? T.key : null;
          if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint") return Se !== null ? null : S(_, T, "" + G, $);
          if (typeof G == "object" && G !== null) {
            switch (G.$$typeof) {
              case bs:
                return G.key === Se ? P(_, T, G, $) : null;
              case Go:
                return G.key === Se ? Y(_, T, G, $) : null;
              case Pr:
                return G = ot(G), fe(_, T, G, $);
            }
            if (Bs(G) || v(G)) return Se !== null ? null : ae(_, T, G, $, null);
            if (typeof G.then == "function") return fe(_, T, Nt(G), $);
            if (G.$$typeof === Or) return fe(_, T, ut(_, G), $);
            To(_, G);
          }
          return null;
        }
        function Le(_, T, G, $, Se) {
          if (typeof $ == "string" && $ !== "" || typeof $ == "number" || typeof $ == "bigint") return _ = _.get(G) || null, S(T, _, "" + $, Se);
          if (typeof $ == "object" && $ !== null) {
            switch ($.$$typeof) {
              case bs:
                return _ = _.get($.key === null ? G : $.key) || null, P(T, _, $, Se);
              case Go:
                return _ = _.get($.key === null ? G : $.key) || null, Y(T, _, $, Se);
              case Pr:
                return $ = ot($), Le(_, T, G, $, Se);
            }
            if (Bs($) || v($)) return _ = _.get(G) || null, ae(T, _, $, Se, null);
            if (typeof $.then == "function") return Le(_, T, G, Nt($), Se);
            if ($.$$typeof === Or) return Le(_, T, G, ut(T, $), Se);
            To(T, $);
          }
          return null;
        }
        function Tn(_, T, G, $) {
          for (var Se = null, An = null, we = T, Ze = T = 0, On = null; we !== null && Ze < G.length; Ze++) {
            we.index > Ze ? (On = we, we = null) : On = we.sibling;
            var Ve = fe(_, we, G[Ze], $);
            if (Ve === null) {
              we === null && (we = On);
              break;
            }
            e && we && Ve.alternate === null && n(_, we), T = f(Ve, T, Ze), An === null ? Se = Ve : An.sibling = Ve, An = Ve, we = On;
          }
          if (Ze === G.length) return t(_, we), Xe && ce(_, Ze), Se;
          if (we === null) {
            for (; Ze < G.length; Ze++) we = q(_, G[Ze], $), we !== null && (T = f(we, T, Ze), An === null ? Se = we : An.sibling = we, An = we);
            return Xe && ce(_, Ze), Se;
          }
          for (we = o(we); Ze < G.length; Ze++) On = Le(we, _, Ze, G[Ze], $), On !== null && (e && On.alternate !== null && we.delete(On.key === null ? Ze : On.key), T = f(On, T, Ze), An === null ? Se = On : An.sibling = On, An = On);
          return e && we.forEach(function(Xr) {
            return n(_, Xr);
          }), Xe && ce(_, Ze), Se;
        }
        function Ni(_, T, G, $) {
          if (G == null) throw Error(l(151));
          for (var Se = null, An = null, we = T, Ze = T = 0, On = null, Ve = G.next(); we !== null && !Ve.done; Ze++, Ve = G.next()) {
            we.index > Ze ? (On = we, we = null) : On = we.sibling;
            var Xr = fe(_, we, Ve.value, $);
            if (Xr === null) {
              we === null && (we = On);
              break;
            }
            e && we && Xr.alternate === null && n(_, we), T = f(Xr, T, Ze), An === null ? Se = Xr : An.sibling = Xr, An = Xr, we = On;
          }
          if (Ve.done) return t(_, we), Xe && ce(_, Ze), Se;
          if (we === null) {
            for (; !Ve.done; Ze++, Ve = G.next()) Ve = q(_, Ve.value, $), Ve !== null && (T = f(Ve, T, Ze), An === null ? Se = Ve : An.sibling = Ve, An = Ve);
            return Xe && ce(_, Ze), Se;
          }
          for (we = o(we); !Ve.done; Ze++, Ve = G.next()) Ve = Le(we, _, Ze, Ve.value, $), Ve !== null && (e && Ve.alternate !== null && we.delete(Ve.key === null ? Ze : Ve.key), T = f(Ve, T, Ze), An === null ? Se = Ve : An.sibling = Ve, An = Ve);
          return e && we.forEach(function(Fg) {
            return n(_, Fg);
          }), Xe && ce(_, Ze), Se;
        }
        function vo(_, T, G, $) {
          if (typeof G == "object" && G !== null && G.type === ko && G.key === null && (G = G.props.children), typeof G == "object" && G !== null) {
            switch (G.$$typeof) {
              case bs:
                e: {
                  for (var Se = G.key; T !== null; ) {
                    if (T.key === Se) {
                      if (Se = G.type, Se === ko) {
                        if (T.tag === 7) {
                          t(_, T.sibling), $ = u(T, G.props.children), $.return = _, _ = $;
                          break e;
                        }
                      } else if (T.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === Pr && ot(Se) === T.type) {
                        t(_, T.sibling), $ = u(T, G.props), to($, G), $.return = _, _ = $;
                        break e;
                      }
                      t(_, T);
                      break;
                    } else n(_, T);
                    T = T.sibling;
                  }
                  G.type === ko ? ($ = ao(G.props.children, _.mode, $, G.key), $.return = _, _ = $) : ($ = vs(G.type, G.key, G.props, null, _.mode, $), to($, G), $.return = _, _ = $);
                }
                return b(_);
              case Go:
                e: {
                  for (Se = G.key; T !== null; ) {
                    if (T.key === Se)
                      if (T.tag === 4 && T.stateNode.containerInfo === G.containerInfo && T.stateNode.implementation === G.implementation) {
                        t(_, T.sibling), $ = u(T, G.children || []), $.return = _, _ = $;
                        break e;
                      } else {
                        t(_, T);
                        break;
                      }
                    else n(_, T);
                    T = T.sibling;
                  }
                  $ = $a(G, _.mode, $), $.return = _, _ = $;
                }
                return b(_);
              case Pr:
                return G = ot(G), vo(_, T, G, $);
            }
            if (Bs(G)) return Tn(_, T, G, $);
            if (v(G)) {
              if (Se = v(G), typeof Se != "function") throw Error(l(150));
              return G = Se.call(G), Ni(_, T, G, $);
            }
            if (typeof G.then == "function") return vo(_, T, Nt(G), $);
            if (G.$$typeof === Or) return vo(_, T, ut(_, G), $);
            To(_, G);
          }
          return typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint" ? (G = "" + G, T !== null && T.tag === 6 ? (t(_, T.sibling), $ = u(T, G), $.return = _, _ = $) : (t(_, T), $ = qa(G, _.mode, $), $.return = _, _ = $), b(_)) : t(_, T);
        }
        return function(_, T, G, $) {
          try {
            Di = 0;
            var Se = vo(_, T, G, $);
            return Xo = null, Se;
          } catch (we) {
            if (we === Qo || we === xs) throw we;
            var An = i(29, we, null, _.mode);
            return An.lanes = $, An.return = _, An;
          }
        };
      }
      function Fo() {
        for (var e = Yo, n = El = Yo = 0; n < e; ) {
          var t = Dt[n];
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
          f !== 0 && Ai(t, u, f);
        }
      }
      function nr(e, n, t, o) {
        Dt[Yo++] = e, Dt[Yo++] = n, Dt[Yo++] = t, Dt[Yo++] = o, El |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
      }
      function gr(e, n, t, o) {
        return nr(e, n, t, o), Ro(e);
      }
      function _e(e, n) {
        return nr(e, null, null, n), Ro(e);
      }
      function Ai(e, n, t) {
        e.lanes |= t;
        var o = e.alternate;
        o !== null && (o.lanes |= t);
        for (var u = !1, f = e.return; f !== null; ) f.childLanes |= t, o = f.alternate, o !== null && (o.childLanes |= t), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & 1 || (u = !0)), e = f, f = f.return;
        return e.tag === 3 ? (f = e.stateNode, u && n !== null && (u = 31 - Et(t), e = f.hiddenUpdates, o = e[u], o === null ? e[u] = [n] : o.push(n), n.lane = t | 536870912), f) : null;
      }
      function Ro(e) {
        if (50 < Hi) throw Hi = 0, Gl = null, Error(l(185));
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
      function x(e, n, t) {
        var o = e.updateQueue;
        if (o === null) return null;
        if (o = o.shared, (Ne & 2) !== 0) {
          var u = o.pending;
          return u === null ? n.next = n : (n.next = u.next, u.next = n), o.pending = n, n = Ro(e), Ai(e, null, t), n;
        }
        return nr(e, o, n, t), Ro(e);
      }
      function H(e, n, t) {
        if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194048) !== 0)) {
          var o = n.lanes;
          o &= e.pendingLanes, t |= o, n.lanes = t, k(e, t);
        }
      }
      function z(e, n) {
        var t = e.updateQueue, o = e.alternate;
        if (o !== null && (o = o.updateQueue, t === o)) {
          var u = null, f = null;
          if (t = t.firstBaseUpdate, t !== null) {
            do {
              var b = {
                lane: t.lane,
                tag: t.tag,
                payload: t.payload,
                callback: null,
                next: null
              };
              f === null ? u = f = b : f = f.next = b, t = t.next;
            } while (t !== null);
            f === null ? u = f = n : f = f.next = n;
          } else u = f = n;
          t = {
            baseState: o.baseState,
            firstBaseUpdate: u,
            lastBaseUpdate: f,
            shared: o.shared,
            callbacks: o.callbacks
          }, e.updateQueue = t;
          return;
        }
        e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
      }
      function V() {
        if (Sl) {
          var e = Ko;
          if (e !== null) throw e;
        }
      }
      function W(e, n, t, o) {
        Sl = !1;
        var u = e.updateQueue;
        zr = !1;
        var f = u.firstBaseUpdate, b = u.lastBaseUpdate, S = u.shared.pending;
        if (S !== null) {
          u.shared.pending = null;
          var P = S, Y = P.next;
          P.next = null, b === null ? f = Y : b.next = Y, b = P;
          var ae = e.alternate;
          ae !== null && (ae = ae.updateQueue, S = ae.lastBaseUpdate, S !== b && (S === null ? ae.firstBaseUpdate = Y : S.next = Y, ae.lastBaseUpdate = P));
        }
        if (f !== null) {
          var q = u.baseState;
          b = 0, ae = Y = P = null, S = f;
          do {
            var fe = S.lane & -536870913, Le = fe !== S.lane;
            if (Le ? (je & fe) === fe : (o & fe) === fe) {
              fe !== 0 && fe === jo && (Sl = !0), ae !== null && (ae = ae.next = {
                lane: 0,
                tag: S.tag,
                payload: S.payload,
                callback: null,
                next: null
              });
              e: {
                var Tn = e, Ni = S;
                fe = n;
                var vo = t;
                switch (Ni.tag) {
                  case 1:
                    if (Tn = Ni.payload, typeof Tn == "function") {
                      q = Tn.call(vo, q, fe);
                      break e;
                    }
                    q = Tn;
                    break e;
                  case 3:
                    Tn.flags = Tn.flags & -65537 | 128;
                  case 0:
                    if (Tn = Ni.payload, fe = typeof Tn == "function" ? Tn.call(vo, q, fe) : Tn, fe == null) break e;
                    q = nl({}, q, fe);
                    break e;
                  case 2:
                    zr = !0;
                }
              }
              fe = S.callback, fe !== null && (e.flags |= 64, Le && (e.flags |= 8192), Le = u.callbacks, Le === null ? u.callbacks = [fe] : Le.push(fe));
            } else Le = {
              lane: fe,
              tag: S.tag,
              payload: S.payload,
              callback: S.callback,
              next: null
            }, ae === null ? (Y = ae = Le, P = q) : ae = ae.next = Le, b |= fe;
            if (S = S.next, S === null) {
              if (S = u.shared.pending, S === null) break;
              Le = S, S = Le.next, Le.next = null, u.lastBaseUpdate = Le, u.shared.pending = null;
            }
          } while (!0);
          ae === null && (P = q), u.baseState = P, u.firstBaseUpdate = Y, u.lastBaseUpdate = ae, f === null && (u.shared.lanes = 0), jr |= b, e.lanes = b, e.memoizedState = q;
        }
      }
      function oe(e, n) {
        if (typeof e != "function") throw Error(l(191, e));
        e.call(n);
      }
      function re(e, n) {
        var t = e.callbacks;
        if (t !== null) for (e.callbacks = null, e = 0; e < t.length; e++) oe(t[e], n);
      }
      function se(e, n) {
        e = Ir, E(Ds, e), E(Wo, n), Ir = e | n.baseLanes;
      }
      function te() {
        E(Ds, Ir), E(Wo, Wo.current);
      }
      function on() {
        Ir = Ds.current, C(Wo), C(Ds);
      }
      function ge(e) {
        var n = e.alternate;
        E(Bn, Bn.current & 1), E(wt, e), Qt === null && (n === null || Wo.current !== null || n.memoizedState !== null) && (Qt = e);
      }
      function ve(e) {
        E(Bn, Bn.current), E(wt, e), Qt === null && (Qt = e);
      }
      function Re(e) {
        e.tag === 22 ? (E(Bn, Bn.current), E(wt, e), Qt === null && (Qt = e)) : Ie();
      }
      function Ie() {
        E(Bn, Bn.current), E(wt, wt.current);
      }
      function Oe(e) {
        C(wt), Qt === e && (Qt = null), C(Bn);
      }
      function qe(e) {
        for (var n = e; n !== null; ) {
          if (n.tag === 13) {
            var t = n.memoizedState;
            if (t !== null && (t = t.dehydrated, t === null || cl(t) || fl(t))) return n;
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
      function xn(e, n) {
        if (n === null) return !1;
        for (var t = 0; t < n.length && t < e.length; t++) if (!Mt(e[t], n[t])) return !1;
        return !0;
      }
      function $e(e, n, t, o, u, f) {
        return Mr = f, ke = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Ee.H = e === null || e.memoizedState === null ? bd : Ml, go = !1, f = t(o, u), go = !1, Zo && (f = tn(n, t, o, u)), vt(e), f;
      }
      function vt(e) {
        Ee.H = Gi;
        var n = rn !== null && rn.next !== null;
        if (Mr = 0, Sn = rn = ke = null, Ls = !1, Li = 0, Vo = null, n) throw Error(l(300));
        e === null || Mn || (e = e.dependencies, e !== null && Wt(e) && (Mn = !0));
      }
      function tn(e, n, t, o) {
        ke = e;
        var u = 0;
        do {
          if (Zo && (Vo = null), Li = 0, Zo = !1, 25 <= u) throw Error(l(301));
          if (u += 1, Sn = rn = null, e.updateQueue != null) {
            var f = e.updateQueue;
            f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
          }
          Ee.H = Bd, f = n(t, o);
        } while (Zo);
        return f;
      }
      function En() {
        var e = Ee.H, n = e.useState()[0];
        return n = typeof n.then == "function" ? Qe(n) : n, e = e.useState()[0], (rn !== null ? rn.memoizedState : null) !== e && (ke.flags |= 1024), n;
      }
      function bt() {
        var e = Gs !== 0;
        return Gs = 0, e;
      }
      function Ar(e, n, t) {
        n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~t;
      }
      function Wn(e) {
        if (Ls) {
          for (e = e.memoizedState; e !== null; ) {
            var n = e.queue;
            n !== null && (n.pending = null), e = e.next;
          }
          Ls = !1;
        }
        Mr = 0, Sn = rn = ke = null, Zo = !1, Li = Gs = 0, Vo = null;
      }
      function De() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return Sn === null ? ke.memoizedState = Sn = e : Sn = Sn.next = e, Sn;
      }
      function Pe() {
        if (rn === null) {
          var e = ke.alternate;
          e = e !== null ? e.memoizedState : null;
        } else e = rn.next;
        var n = Sn === null ? ke.memoizedState : Sn.next;
        if (n !== null) Sn = n, rn = e;
        else {
          if (e === null) throw ke.alternate === null ? Error(l(467)) : Error(l(310));
          rn = e, e = {
            memoizedState: rn.memoizedState,
            baseState: rn.baseState,
            baseQueue: rn.baseQueue,
            queue: rn.queue,
            next: null
          }, Sn === null ? ke.memoizedState = Sn = e : Sn = Sn.next = e;
        }
        return Sn;
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
        var n = Li;
        return Li += 1, Vo === null && (Vo = []), e = ft(Vo, e, n), n = ke, (Sn === null ? n.memoizedState : Sn.next) === null && (n = n.alternate, Ee.H = n === null || n.memoizedState === null ? bd : Ml), e;
      }
      function Nn(e) {
        if (e !== null && typeof e == "object") {
          if (typeof e.then == "function") return Qe(e);
          if (e.$$typeof === Or) return ln(e);
        }
        throw Error(l(438, String(e)));
      }
      function Ut(e) {
        var n = null, t = ke.updateQueue;
        if (t !== null && (n = t.memoCache), n == null) {
          var o = ke.alternate;
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
        }), t === null && (t = en(), ke.updateQueue = t), t.memoCache = n, t = n.data[n.index], t === void 0) for (t = n.data[n.index] = Array(e), o = 0; o < e; o++) t[o] = Hh;
        return n.index++, t;
      }
      function hn(e, n) {
        return typeof n == "function" ? n(e) : n;
      }
      function Bt(e) {
        var n = Pe();
        return Aa(n, rn, e);
      }
      function Aa(e, n, t) {
        var o = e.queue;
        if (o === null) throw Error(l(311));
        o.lastRenderedReducer = t;
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
          var S = b = null, P = null, Y = n, ae = !1;
          do {
            var q = Y.lane & -536870913;
            if (q !== Y.lane ? (je & q) === q : (Mr & q) === q) {
              var fe = Y.revertLane;
              if (fe === 0) P !== null && (P = P.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: Y.action,
                hasEagerState: Y.hasEagerState,
                eagerState: Y.eagerState,
                next: null
              }), q === jo && (ae = !0);
              else if ((Mr & fe) === fe) {
                Y = Y.next, fe === jo && (ae = !0);
                continue;
              } else q = {
                lane: 0,
                revertLane: Y.revertLane,
                gesture: null,
                action: Y.action,
                hasEagerState: Y.hasEagerState,
                eagerState: Y.eagerState,
                next: null
              }, P === null ? (S = P = q, b = f) : P = P.next = q, ke.lanes |= fe, jr |= fe;
              q = Y.action, go && t(f, q), f = Y.hasEagerState ? Y.eagerState : t(f, q);
            } else fe = {
              lane: q,
              revertLane: Y.revertLane,
              gesture: Y.gesture,
              action: Y.action,
              hasEagerState: Y.hasEagerState,
              eagerState: Y.eagerState,
              next: null
            }, P === null ? (S = P = fe, b = f) : P = P.next = fe, ke.lanes |= q, jr |= q;
            Y = Y.next;
          } while (Y !== null && Y !== n);
          if (P === null ? b = f : P.next = S, !Mt(f, e.memoizedState) && (Mn = !0, ae && (t = Ko, t !== null))) throw t;
          e.memoizedState = f, e.baseState = b, e.baseQueue = P, o.lastRenderedState = f;
        }
        return u === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
      }
      function va(e) {
        var n = Pe(), t = n.queue;
        if (t === null) throw Error(l(311));
        t.lastRenderedReducer = e;
        var o = t.dispatch, u = t.pending, f = n.memoizedState;
        if (u !== null) {
          t.pending = null;
          var b = u = u.next;
          do
            f = e(f, b.action), b = b.next;
          while (b !== u);
          Mt(f, n.memoizedState) || (Mn = !0), n.memoizedState = f, n.baseQueue === null && (n.baseState = f), t.lastRenderedState = f;
        }
        return [f, o];
      }
      function Yu(e, n, t) {
        var o = ke, u = Pe(), f = Xe;
        if (f) {
          if (t === void 0) throw Error(l(407));
          t = t();
        } else t = n();
        var b = !Mt((rn || u).memoizedState, t);
        if (b && (u.memoizedState = t, Mn = !0), u = u.queue, ya(Vu.bind(null, o, u, e), [e]), u.getSnapshot !== n || b || Sn !== null && Sn.memoizedState.tag & 1) {
          if (o.flags |= 2048, xo(9, {
            destroy: void 0
          }, Zu.bind(null, o, u, t, n), null), sn === null) throw Error(l(349));
          f || (Mr & 127) !== 0 || Wu(o, n, t);
        }
        return t;
      }
      function Wu(e, n, t) {
        e.flags |= 16384, e = {
          getSnapshot: n,
          value: t
        }, n = ke.updateQueue, n === null ? (n = en(), ke.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
      }
      function Zu(e, n, t, o) {
        n.value = t, n.getSnapshot = o, qu(n) && $u(e);
      }
      function Vu(e, n, t) {
        return t(function() {
          qu(n) && $u(e);
        });
      }
      function qu(e) {
        var n = e.getSnapshot;
        e = e.value;
        try {
          var t = n();
          return !Mt(e, t);
        } catch {
          return !0;
        }
      }
      function $u(e) {
        var n = _e(e, 2);
        n !== null && dt(n, e, 2);
      }
      function ba(e) {
        var n = De();
        if (typeof e == "function") {
          var t = e;
          if (e = t(), go) {
            ee(!0);
            try {
              t();
            } finally {
              ee(!1);
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
      function ec(e, n, t, o) {
        return e.baseState = t, Aa(e, rn, typeof o == "function" ? o : hn);
      }
      function mh(e, n, t, o, u) {
        if (ss(e)) throw Error(l(485));
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
          Ee.T !== null ? t(!0) : f.isTransition = !1, o(f), t = n.pending, t === null ? (f.next = n.pending = f, nc(n, f)) : (f.next = t.next, n.pending = t.next = f);
        }
      }
      function nc(e, n) {
        var t = n.action, o = n.payload, u = e.state;
        if (n.isTransition) {
          var f = Ee.T, b = {};
          Ee.T = b;
          try {
            var S = t(u, o), P = Ee.S;
            P !== null && P(b, S), tc(e, n, S);
          } catch (Y) {
            Ba(e, n, Y);
          } finally {
            f !== null && b.types !== null && (f.types = b.types), Ee.T = f;
          }
        } else try {
          f = t(u, o), tc(e, n, f);
        } catch (Y) {
          Ba(e, n, Y);
        }
      }
      function tc(e, n, t) {
        t !== null && typeof t == "object" && typeof t.then == "function" ? t.then(function(o) {
          rc(e, n, o);
        }, function(o) {
          return Ba(e, n, o);
        }) : rc(e, n, t);
      }
      function rc(e, n, t) {
        n.status = "fulfilled", n.value = t, oc(n), e.state = t, n = e.pending, n !== null && (t = n.next, t === n ? e.pending = null : (t = t.next, n.next = t, nc(e, t)));
      }
      function Ba(e, n, t) {
        var o = e.pending;
        if (e.pending = null, o !== null) {
          o = o.next;
          do
            n.status = "rejected", n.reason = t, oc(n), n = n.next;
          while (n !== o);
        }
        e.action = null;
      }
      function oc(e) {
        e = e.listeners;
        for (var n = 0; n < e.length; n++) (0, e[n])();
      }
      function ic(e, n) {
        return n;
      }
      function sc(e, n) {
        if (Xe) {
          var t = sn.formState;
          if (t !== null) {
            e: {
              var o = ke;
              if (Xe) {
                if (mn) {
                  var u = _m(mn, _t);
                  if (u) {
                    mn = nd(u), o = Dm(u);
                    break e;
                  }
                }
                Yn(o);
              }
              o = !1;
            }
            o && (n = t[0]);
          }
        }
        t = De(), t.memoizedState = t.baseState = n, o = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ic,
          lastRenderedState: n
        }, t.queue = o, t = Sc.bind(null, ke, o), o.dispatch = t, o = ba(!1);
        var f = Ma.bind(null, ke, !1, o.queue);
        return o = De(), u = {
          state: n,
          dispatch: null,
          action: e,
          pending: null
        }, o.queue = u, t = mh.bind(null, ke, u, f, t), u.dispatch = t, o.memoizedState = e, [n, t, !1];
      }
      function ac(e) {
        var n = Pe();
        return lc(n, rn, e);
      }
      function lc(e, n, t) {
        if (n = Aa(e, n, ic)[0], e = Bt(hn)[0], typeof n == "object" && n !== null && typeof n.then == "function") try {
          var o = Qe(n);
        } catch (b) {
          throw b === Qo ? xs : b;
        }
        else o = n;
        n = Pe();
        var u = n.queue, f = u.dispatch;
        return t !== n.memoizedState && (ke.flags |= 2048, xo(9, {
          destroy: void 0
        }, gh.bind(null, u, t), null)), [o, f, e];
      }
      function gh(e, n) {
        e.action = n;
      }
      function uc(e) {
        var n = Pe(), t = rn;
        if (t !== null) return lc(n, t, e);
        Pe(), n = n.memoizedState, t = Pe();
        var o = t.queue.dispatch;
        return t.memoizedState = e, [n, o, !1];
      }
      function xo(e, n, t, o) {
        return e = {
          tag: e,
          create: t,
          deps: o,
          inst: n,
          next: null
        }, n = ke.updateQueue, n === null && (n = en(), ke.updateQueue = n), t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (o = t.next, t.next = e, e.next = o, n.lastEffect = e), e;
      }
      function cc() {
        return Pe().memoizedState;
      }
      function os(e, n, t, o) {
        var u = De();
        ke.flags |= e, u.memoizedState = xo(1 | n, {
          destroy: void 0
        }, t, o === void 0 ? null : o);
      }
      function is(e, n, t, o) {
        var u = Pe();
        o = o === void 0 ? null : o;
        var f = u.memoizedState.inst;
        rn !== null && o !== null && xn(o, rn.memoizedState.deps) ? u.memoizedState = xo(n, f, t, o) : (ke.flags |= e, u.memoizedState = xo(1 | n, f, t, o));
      }
      function fc(e, n) {
        os(8390656, 8, e, n);
      }
      function ya(e, n) {
        is(2048, 8, e, n);
      }
      function Ah(e) {
        ke.flags |= 4;
        var n = ke.updateQueue;
        if (n === null) n = en(), ke.updateQueue = n, n.events = [e];
        else {
          var t = n.events;
          t === null ? n.events = [e] : t.push(e);
        }
      }
      function dc(e) {
        var n = Pe().memoizedState;
        return Ah({
          ref: n,
          nextImpl: e
        }), function() {
          if ((Ne & 2) !== 0) throw Error(l(440));
          return n.impl.apply(void 0, arguments);
        };
      }
      function pc(e, n) {
        return is(4, 2, e, n);
      }
      function hc(e, n) {
        return is(4, 4, e, n);
      }
      function mc(e, n) {
        if (typeof n == "function") {
          e = e();
          var t = n(e);
          return function() {
            typeof t == "function" ? t() : n(null);
          };
        }
        if (n != null) return e = e(), n.current = e, function() {
          n.current = null;
        };
      }
      function gc(e, n, t) {
        t = t != null ? t.concat([e]) : null, is(4, 4, mc.bind(null, n, e), t);
      }
      function Ca() {
      }
      function Ac(e, n) {
        var t = Pe();
        n = n === void 0 ? null : n;
        var o = t.memoizedState;
        return n !== null && xn(n, o[1]) ? o[0] : (t.memoizedState = [e, n], e);
      }
      function vc(e, n) {
        var t = Pe();
        n = n === void 0 ? null : n;
        var o = t.memoizedState;
        if (n !== null && xn(n, o[1])) return o[0];
        if (o = e(), go) {
          ee(!0);
          try {
            e();
          } finally {
            ee(!1);
          }
        }
        return t.memoizedState = [o, n], o;
      }
      function Ea(e, n, t) {
        return t === void 0 || (Mr & 1073741824) !== 0 && (je & 261930) === 0 ? e.memoizedState = n : (e.memoizedState = t, e = mf(), ke.lanes |= e, jr |= e, t);
      }
      function bc(e, n, t, o) {
        return Mt(t, n) ? t : Wo.current !== null ? (e = Ea(e, t, o), Mt(e, n) || (Mn = !0), e) : (Mr & 42) === 0 || (Mr & 1073741824) !== 0 && (je & 261930) === 0 ? (Mn = !0, e.memoizedState = t) : (e = mf(), ke.lanes |= e, jr |= e, n);
      }
      function Bc(e, n, t, o, u) {
        var f = Er();
        Gn(f !== 0 && 8 > f ? f : 8);
        var b = Ee.T, S = {};
        Ee.T = S, Ma(e, !1, n, t);
        try {
          var P = u(), Y = Ee.S;
          if (Y !== null && Y(S, P), P !== null && typeof P == "object" && typeof P.then == "function") {
            var ae = ne(P, o);
            vi(e, n, ae, yt(e));
          } else vi(e, n, o, yt(e));
        } catch (q) {
          vi(e, n, {
            then: function() {
            },
            status: "rejected",
            reason: q
          }, yt());
        } finally {
          Gn(f), b !== null && S.types !== null && (b.types = S.types), Ee.T = b;
        }
      }
      function yc(e) {
        var n = e.memoizedState;
        if (n !== null) return n;
        n = {
          memoizedState: Oo,
          baseState: Oo,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: hn,
            lastRenderedState: Oo
          },
          next: null
        };
        var t = {};
        return n.next = {
          memoizedState: t,
          baseState: t,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: hn,
            lastRenderedState: t
          },
          next: null
        }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
      }
      function Sa() {
        return ln(uo);
      }
      function Cc() {
        return Pe().memoizedState;
      }
      function Ec() {
        return Pe().memoizedState;
      }
      function vh(e) {
        for (var n = e.return; n !== null; ) {
          switch (n.tag) {
            case 24:
            case 3:
              var t = yt();
              e = M(t);
              var o = x(n, e, t);
              o !== null && (dt(o, n, t), H(o, n, t)), n = {
                cache: pr()
              }, e.payload = n;
              return;
          }
          n = n.return;
        }
      }
      function bh(e, n, t) {
        var o = yt();
        t = {
          lane: o,
          revertLane: 0,
          gesture: null,
          action: t,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, ss(e) ? Mc(n, t) : (t = gr(e, n, t, o), t !== null && (dt(t, e, o), wc(t, n, o)));
      }
      function Sc(e, n, t) {
        var o = yt();
        vi(e, n, t, o);
      }
      function vi(e, n, t, o) {
        var u = {
          lane: o,
          revertLane: 0,
          gesture: null,
          action: t,
          hasEagerState: !1,
          eagerState: null,
          next: null
        };
        if (ss(e)) Mc(n, u);
        else {
          var f = e.alternate;
          if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = n.lastRenderedReducer, f !== null)) try {
            var b = n.lastRenderedState, S = f(b, t);
            if (u.hasEagerState = !0, u.eagerState = S, Mt(S, b)) return nr(e, n, u, 0), sn === null && Fo(), !1;
          } catch {
          }
          if (t = gr(e, n, u, o), t !== null) return dt(t, e, o), wc(t, n, o), !0;
        }
        return !1;
      }
      function Ma(e, n, t, o) {
        if (o = {
          lane: 2,
          revertLane: Z(),
          gesture: null,
          action: o,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, ss(e)) {
          if (n) throw Error(l(479));
        } else n = gr(e, t, o, 2), n !== null && dt(n, e, 2);
      }
      function ss(e) {
        var n = e.alternate;
        return e === ke || n !== null && n === ke;
      }
      function Mc(e, n) {
        Zo = Ls = !0;
        var t = e.pending;
        t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
      }
      function wc(e, n, t) {
        if ((t & 4194048) !== 0) {
          var o = n.lanes;
          o &= e.pendingLanes, t |= o, n.lanes = t, k(e, t);
        }
      }
      function wa(e, n, t, o) {
        n = e.memoizedState, t = t(o, n), t = t == null ? n : nl({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
      }
      function Ic(e, n, t, o, u, f, b) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, f, b) : n.prototype && n.prototype.isPureReactComponent ? !mr(t, o) || !mr(u, f) : !0;
      }
      function Tc(e, n, t, o) {
        e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, o), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, o), n.state !== e && wl.enqueueReplaceState(n, n.state, null);
      }
      function oo(e, n) {
        var t = n;
        if ("ref" in n) {
          t = {};
          for (var o in n) o !== "ref" && (t[o] = n[o]);
        }
        if (e = e.defaultProps) {
          t === n && (t = nl({}, t));
          for (var u in e) t[u] === void 0 && (t[u] = e[u]);
        }
        return t;
      }
      function as(e, n) {
        try {
          var t = e.onUncaughtError;
          t(n.value, {
            componentStack: n.stack
          });
        } catch (o) {
          setTimeout(function() {
            throw o;
          });
        }
      }
      function Fc(e, n, t) {
        try {
          var o = e.onCaughtError;
          o(t.value, {
            componentStack: t.stack,
            errorBoundary: n.tag === 1 ? n.stateNode : null
          });
        } catch (u) {
          setTimeout(function() {
            throw u;
          });
        }
      }
      function Ia(e, n, t) {
        return t = M(t), t.tag = 3, t.payload = {
          element: null
        }, t.callback = function() {
          as(e, n);
        }, t;
      }
      function Rc(e) {
        return e = M(e), e.tag = 3, e;
      }
      function xc(e, n, t, o) {
        var u = t.type.getDerivedStateFromError;
        if (typeof u == "function") {
          var f = o.value;
          e.payload = function() {
            return u(f);
          }, e.callback = function() {
            Fc(n, t, o);
          };
        }
        var b = t.stateNode;
        b !== null && typeof b.componentDidCatch == "function" && (e.callback = function() {
          Fc(n, t, o), typeof u != "function" && (Kr === null ? Kr = /* @__PURE__ */ new Set([this]) : Kr.add(this));
          var S = o.stack;
          this.componentDidCatch(o.value, {
            componentStack: S !== null ? S : ""
          });
        });
      }
      function Bh(e, n, t, o, u) {
        if (t.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
          if (n = t.alternate, n !== null && At(n, t, u, !0), t = wt.current, t !== null) {
            switch (t.tag) {
              case 31:
              case 13:
                return Qt === null ? gs() : t.alternate === null && bn === 0 && (bn = 3), t.flags &= -257, t.flags |= 65536, t.lanes = u, o === _s ? t.flags |= 16384 : (n = t.updateQueue, n === null ? t.updateQueue = /* @__PURE__ */ new Set([o]) : n.add(o), Za(e, o, u)), !1;
              case 22:
                return t.flags |= 65536, o === _s ? t.flags |= 16384 : (n = t.updateQueue, n === null ? (n = {
                  transitions: null,
                  markerInstances: null,
                  retryQueue: /* @__PURE__ */ new Set([o])
                }, t.updateQueue = n) : (t = n.retryQueue, t === null ? n.retryQueue = /* @__PURE__ */ new Set([o]) : t.add(o)), Za(e, o, u)), !1;
            }
            throw Error(l(435, t.tag));
          }
          return Za(e, o, u), gs(), !1;
        }
        if (Xe) return n = wt.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = u, o !== vl && (e = Error(l(422), {
          cause: o
        }), tt(Ae(e, t)))) : (o !== vl && (n = Error(l(423), {
          cause: o
        }), tt(Ae(n, t))), e = e.current.alternate, e.flags |= 65536, u &= -u, e.lanes |= u, o = Ae(o, t), u = Ia(e.stateNode, o, u), z(e, u), bn !== 4 && (bn = 2)), !1;
        var f = Error(l(520), {
          cause: o
        });
        if (f = Ae(f, t), Oi === null ? Oi = [f] : Oi.push(f), bn !== 4 && (bn = 2), n === null) return !0;
        o = Ae(o, t), t = n;
        do {
          switch (t.tag) {
            case 3:
              return t.flags |= 65536, e = u & -u, t.lanes |= e, e = Ia(t.stateNode, o, e), z(t, e), !1;
            case 1:
              if (n = t.type, f = t.stateNode, (t.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Kr === null || !Kr.has(f)))) return t.flags |= 65536, u &= -u, t.lanes |= u, u = Rc(u), xc(u, e, t, o), z(t, u), !1;
          }
          t = t.return;
        } while (t !== null);
        return !1;
      }
      function Un(e, n, t, o) {
        n.child = e === null ? vd(n, null, t, o) : mo(n, e.child, t, o);
      }
      function _c(e, n, t, o, u) {
        t = t.render;
        var f = n.ref;
        if ("ref" in o) {
          var b = {};
          for (var S in o) S !== "ref" && (b[S] = o[S]);
        } else b = o;
        return lt(n), o = $e(e, n, t, b, f, u), S = bt(), e !== null && !Mn ? (Ar(e, n, u), vr(e, n, u)) : (Xe && S && he(n), n.flags |= 1, Un(e, n, o, u), n.child);
      }
      function Dc(e, n, t, o, u) {
        if (e === null) {
          var f = t.type;
          return typeof f == "function" && !Va(f) && f.defaultProps === void 0 && t.compare === null ? (n.tag = 15, n.type = f, Lc(e, n, f, o, u)) : (e = vs(t.type, null, o, n, n.mode, u), e.ref = n.ref, e.return = n, n.child = e);
        }
        if (f = e.child, !La(e, u)) {
          var b = f.memoizedProps;
          if (t = t.compare, t = t !== null ? t : mr, t(b, o) && e.ref === n.ref) return vr(e, n, u);
        }
        return n.flags |= 1, e = yr(f, o), e.ref = n.ref, e.return = n, n.child = e;
      }
      function Lc(e, n, t, o, u) {
        if (e !== null) {
          var f = e.memoizedProps;
          if (mr(f, o) && e.ref === n.ref) if (Mn = !1, n.pendingProps = o = f, La(e, u)) (e.flags & 131072) !== 0 && (Mn = !0);
          else return n.lanes = e.lanes, vr(e, n, u);
        }
        return Ta(e, n, t, o, u);
      }
      function Gc(e, n, t, o) {
        var u = o.children, f = e !== null ? e.memoizedState : null;
        if (e === null && n.stateNode === null && (n.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null
        }), o.mode === "hidden") {
          if ((n.flags & 128) !== 0) {
            if (f = f !== null ? f.baseLanes | t : t, e !== null) {
              for (o = n.child = e.child, u = 0; o !== null; ) u = u | o.lanes | o.childLanes, o = o.sibling;
              o = u & ~f;
            } else o = 0, n.child = null;
            return kc(e, n, f, t, o);
          }
          if ((t & 536870912) !== 0) n.memoizedState = {
            baseLanes: 0,
            cachePool: null
          }, e !== null && rt(n, f !== null ? f.cachePool : null), f !== null ? se(n, f) : te(), Re(n);
          else return o = n.lanes = 536870912, kc(e, n, f !== null ? f.baseLanes | t : t, t, o);
        } else f !== null ? (rt(n, f.cachePool), se(n, f), Ie(), n.memoizedState = null) : (e !== null && rt(n, null), te(), Ie());
        return Un(e, n, u, t), n.child;
      }
      function bi(e, n) {
        return e !== null && e.tag === 22 || n.stateNode !== null || (n.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null
        }), n.sibling;
      }
      function kc(e, n, t, o, u) {
        var f = Rn();
        return f = f === null ? null : {
          parent: Cr ? gn._currentValue : gn._currentValue2,
          pool: f
        }, n.memoizedState = {
          baseLanes: t,
          cachePool: f
        }, e !== null && rt(n, null), te(), Re(n), e !== null && At(e, n, o, !0), n.childLanes = u, null;
      }
      function ls(e, n) {
        return n = cs({
          mode: n.mode,
          children: n.children
        }, e.mode), n.ref = e.ref, e.child = n, n.return = e, n;
      }
      function Oc(e, n, t) {
        return mo(n, e.child, null, t), e = ls(n, n.pendingProps), e.flags |= 2, Oe(n), n.memoizedState = null, e;
      }
      function yh(e, n, t) {
        var o = n.pendingProps, u = (n.flags & 128) !== 0;
        if (n.flags &= -129, e === null) {
          if (Xe) {
            if (o.mode === "hidden") return e = ls(n, o), n.lanes = 536870912, bi(null, e);
            if (ve(n), (e = mn) ? (e = zm(e, _t), e !== null && (n.memoizedState = {
              dehydrated: e,
              treeContext: Hr !== null ? {
                id: or,
                overflow: ir
              } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, t = Gf(e), t.return = n, n.child = t, Jn = n, mn = null)) : e = null, e === null) throw Yn(n);
            return n.lanes = 536870912, null;
          }
          return ls(n, o);
        }
        var f = e.memoizedState;
        if (f !== null) {
          var b = f.dehydrated;
          if (ve(n), u)
            if (n.flags & 256) n.flags &= -257, n = Oc(e, n, t);
            else if (n.memoizedState !== null) n.child = e.child, n.flags |= 128, n = null;
            else throw Error(l(558));
          else if (Mn || At(e, n, t, !1), u = (t & e.childLanes) !== 0, Mn || u) {
            if (o = sn, o !== null && (b = K(o, t), b !== 0 && b !== f.retryLane)) throw f.retryLane = b, _e(e, b), dt(o, e, b), Il;
            gs(), n = Oc(e, n, t);
          } else e = f.treeContext, qn && (mn = Om(b), Jn = n, Xe = !0, Ur = null, _t = !1, e !== null && Fe(n, e)), n = ls(n, o), n.flags |= 4096;
          return n;
        }
        return e = yr(e.child, {
          mode: o.mode,
          children: o.children
        }), e.ref = n.ref, n.child = e, e.return = n, e;
      }
      function us(e, n) {
        var t = n.ref;
        if (t === null) e !== null && e.ref !== null && (n.flags |= 4194816);
        else {
          if (typeof t != "function" && typeof t != "object") throw Error(l(284));
          (e === null || e.ref !== t) && (n.flags |= 4194816);
        }
      }
      function Ta(e, n, t, o, u) {
        return lt(n), t = $e(e, n, t, o, void 0, u), o = bt(), e !== null && !Mn ? (Ar(e, n, u), vr(e, n, u)) : (Xe && o && he(n), n.flags |= 1, Un(e, n, t, u), n.child);
      }
      function Pc(e, n, t, o, u, f) {
        return lt(n), n.updateQueue = null, t = tn(n, o, t, u), vt(e), o = bt(), e !== null && !Mn ? (Ar(e, n, f), vr(e, n, f)) : (Xe && o && he(n), n.flags |= 1, Un(e, n, t, f), n.child);
      }
      function Hc(e, n, t, o, u) {
        if (lt(n), n.stateNode === null) {
          var f = No, b = t.contextType;
          typeof b == "object" && b !== null && (f = ln(b)), f = new t(o, f), n.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = wl, n.stateNode = f, f._reactInternals = n, f = n.stateNode, f.props = o, f.state = n.memoizedState, f.refs = {}, m(n), b = t.contextType, f.context = typeof b == "object" && b !== null ? ln(b) : No, f.state = n.memoizedState, b = t.getDerivedStateFromProps, typeof b == "function" && (wa(n, t, b, o), f.state = n.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (b = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), b !== f.state && wl.enqueueReplaceState(f, f.state, null), W(n, o, f, u), V(), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308), o = !0;
        } else if (e === null) {
          f = n.stateNode;
          var S = n.memoizedProps, P = oo(t, S);
          f.props = P;
          var Y = f.context, ae = t.contextType;
          b = No, typeof ae == "object" && ae !== null && (b = ln(ae));
          var q = t.getDerivedStateFromProps;
          ae = typeof q == "function" || typeof f.getSnapshotBeforeUpdate == "function", S = n.pendingProps !== S, ae || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (S || Y !== b) && Tc(n, f, o, b), zr = !1;
          var fe = n.memoizedState;
          f.state = fe, W(n, o, f, u), V(), Y = n.memoizedState, S || fe !== Y || zr ? (typeof q == "function" && (wa(n, t, q, o), Y = n.memoizedState), (P = zr || Ic(n, t, P, o, fe, Y, b)) ? (ae || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = o, n.memoizedState = Y), f.props = o, f.state = Y, f.context = b, o = P) : (typeof f.componentDidMount == "function" && (n.flags |= 4194308), o = !1);
        } else {
          f = n.stateNode, y(e, n), b = n.memoizedProps, ae = oo(t, b), f.props = ae, q = n.pendingProps, fe = f.context, Y = t.contextType, P = No, typeof Y == "object" && Y !== null && (P = ln(Y)), S = t.getDerivedStateFromProps, (Y = typeof S == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (b !== q || fe !== P) && Tc(n, f, o, P), zr = !1, fe = n.memoizedState, f.state = fe, W(n, o, f, u), V();
          var Le = n.memoizedState;
          b !== q || fe !== Le || zr || e !== null && e.dependencies !== null && Wt(e.dependencies) ? (typeof S == "function" && (wa(n, t, S, o), Le = n.memoizedState), (ae = zr || Ic(n, t, ae, o, fe, Le, P) || e !== null && e.dependencies !== null && Wt(e.dependencies)) ? (Y || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(o, Le, P), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(o, Le, P)), typeof f.componentDidUpdate == "function" && (n.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || b === e.memoizedProps && fe === e.memoizedState || (n.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || b === e.memoizedProps && fe === e.memoizedState || (n.flags |= 1024), n.memoizedProps = o, n.memoizedState = Le), f.props = o, f.state = Le, f.context = P, o = ae) : (typeof f.componentDidUpdate != "function" || b === e.memoizedProps && fe === e.memoizedState || (n.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || b === e.memoizedProps && fe === e.memoizedState || (n.flags |= 1024), o = !1);
        }
        return f = o, us(e, n), o = (n.flags & 128) !== 0, f || o ? (f = n.stateNode, t = o && typeof t.getDerivedStateFromError != "function" ? null : f.render(), n.flags |= 1, e !== null && o ? (n.child = mo(n, e.child, null, u), n.child = mo(n, null, t, u)) : Un(e, n, t, u), n.memoizedState = f.state, e = n.child) : e = vr(e, n, u), e;
      }
      function Nc(e, n, t, o) {
        return pn(), n.flags |= 256, Un(e, n, t, o), n.child;
      }
      function Fa(e) {
        return {
          baseLanes: e,
          cachePool: gi()
        };
      }
      function Ra(e, n, t) {
        return e = e !== null ? e.childLanes & ~t : 0, n && (e |= Tt), e;
      }
      function Uc(e, n, t) {
        var o = n.pendingProps, u = !1, f = (n.flags & 128) !== 0, b;
        if ((b = f) || (b = e !== null && e.memoizedState === null ? !1 : (Bn.current & 2) !== 0), b && (u = !0, n.flags &= -129), b = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
          if (Xe) {
            if (u ? ge(n) : Ie(), (e = mn) ? (e = Jm(e, _t), e !== null && (n.memoizedState = {
              dehydrated: e,
              treeContext: Hr !== null ? {
                id: or,
                overflow: ir
              } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, t = Gf(e), t.return = n, n.child = t, Jn = n, mn = null)) : e = null, e === null) throw Yn(n);
            return fl(e) ? n.lanes = 32 : n.lanes = 536870912, null;
          }
          var S = o.children;
          return o = o.fallback, u ? (Ie(), u = n.mode, S = cs({
            mode: "hidden",
            children: S
          }, u), o = ao(o, u, t, null), S.return = n, o.return = n, S.sibling = o, n.child = S, o = n.child, o.memoizedState = Fa(t), o.childLanes = Ra(e, b, t), n.memoizedState = Tl, bi(null, o)) : (ge(n), xa(n, S));
        }
        var P = e.memoizedState;
        if (P !== null && (S = P.dehydrated, S !== null)) {
          if (f) n.flags & 256 ? (ge(n), n.flags &= -257, n = _a(e, n, t)) : n.memoizedState !== null ? (Ie(), n.child = e.child, n.flags |= 128, n = null) : (Ie(), S = o.fallback, u = n.mode, o = cs({
            mode: "visible",
            children: o.children
          }, u), S = ao(S, u, t, null), S.flags |= 2, o.return = n, S.return = n, o.sibling = S, n.child = o, mo(n, e.child, null, t), o = n.child, o.memoizedState = Fa(t), o.childLanes = Ra(e, b, t), n.memoizedState = Tl, n = bi(null, o));
          else if (ge(n), fl(S)) b = Rm(S).digest, o = Error(l(419)), o.stack = "", o.digest = b, tt({
            value: o,
            source: null,
            stack: null
          }), n = _a(e, n, t);
          else if (Mn || At(e, n, t, !1), b = (t & e.childLanes) !== 0, Mn || b) {
            if (b = sn, b !== null && (o = K(b, t), o !== 0 && o !== P.retryLane)) throw P.retryLane = o, _e(e, o), dt(b, e, o), Il;
            cl(S) || gs(), n = _a(e, n, t);
          } else cl(S) ? (n.flags |= 192, n.child = e.child, n = null) : (e = P.treeContext, qn && (mn = Pm(S), Jn = n, Xe = !0, Ur = null, _t = !1, e !== null && Fe(n, e)), n = xa(n, o.children), n.flags |= 4096);
          return n;
        }
        return u ? (Ie(), S = o.fallback, u = n.mode, P = e.child, f = P.sibling, o = yr(P, {
          mode: "hidden",
          children: o.children
        }), o.subtreeFlags = P.subtreeFlags & 65011712, f !== null ? S = yr(f, S) : (S = ao(S, u, t, null), S.flags |= 2), S.return = n, o.return = n, o.sibling = S, n.child = o, bi(null, o), o = n.child, S = e.child.memoizedState, S === null ? S = Fa(t) : (u = S.cachePool, u !== null ? (P = Cr ? gn._currentValue : gn._currentValue2, u = u.parent !== P ? {
          parent: P,
          pool: P
        } : u) : u = gi(), S = {
          baseLanes: S.baseLanes | t,
          cachePool: u
        }), o.memoizedState = S, o.childLanes = Ra(e, b, t), n.memoizedState = Tl, bi(e.child, o)) : (ge(n), t = e.child, e = t.sibling, t = yr(t, {
          mode: "visible",
          children: o.children
        }), t.return = n, t.sibling = null, e !== null && (b = n.deletions, b === null ? (n.deletions = [e], n.flags |= 16) : b.push(e)), n.child = t, n.memoizedState = null, t);
      }
      function xa(e, n) {
        return n = cs({
          mode: "visible",
          children: n
        }, e.mode), n.return = e, e.child = n;
      }
      function cs(e, n) {
        return e = i(22, e, null, n), e.lanes = 0, e;
      }
      function _a(e, n, t) {
        return mo(n, e.child, null, t), e = xa(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
      }
      function zc(e, n, t) {
        e.lanes |= n;
        var o = e.alternate;
        o !== null && (o.lanes |= n), Pt(e.return, n, t);
      }
      function Da(e, n, t, o, u, f) {
        var b = e.memoizedState;
        b === null ? e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: t,
          tailMode: u,
          treeForkCount: f
        } : (b.isBackwards = n, b.rendering = null, b.renderingStartTime = 0, b.last = o, b.tail = t, b.tailMode = u, b.treeForkCount = f);
      }
      function Jc(e, n, t) {
        var o = n.pendingProps, u = o.revealOrder, f = o.tail;
        o = o.children;
        var b = Bn.current, S = (b & 2) !== 0;
        if (S ? (b = b & 1 | 2, n.flags |= 128) : b &= 1, E(Bn, b), Un(e, n, o, t), o = Xe ? Ri : 0, !S && e !== null && (e.flags & 128) !== 0) e: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && zc(e, t, n);
          else if (e.tag === 19) zc(e, t, n);
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
            for (t = n.child, u = null; t !== null; ) e = t.alternate, e !== null && qe(e) === null && (u = t), t = t.sibling;
            t = u, t === null ? (u = n.child, n.child = null) : (u = t.sibling, t.sibling = null), Da(n, !1, u, t, f, o);
            break;
          case "backwards":
          case "unstable_legacy-backwards":
            for (t = null, u = n.child, n.child = null; u !== null; ) {
              if (e = u.alternate, e !== null && qe(e) === null) {
                n.child = u;
                break;
              }
              e = u.sibling, u.sibling = t, t = u, u = e;
            }
            Da(n, !0, t, null, f, o);
            break;
          case "together":
            Da(n, !1, null, null, void 0, o);
            break;
          default:
            n.memoizedState = null;
        }
        return n.child;
      }
      function vr(e, n, t) {
        if (e !== null && (n.dependencies = e.dependencies), jr |= n.lanes, (t & n.childLanes) === 0) if (e !== null) {
          if (At(e, n, t, !1), (t & n.childLanes) === 0) return null;
        } else return null;
        if (e !== null && n.child !== e.child) throw Error(l(153));
        if (n.child !== null) {
          for (e = n.child, t = yr(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = yr(e, e.pendingProps), t.return = n;
          t.sibling = null;
        }
        return n.child;
      }
      function La(e, n) {
        return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Wt(e)));
      }
      function Ch(e, n, t) {
        switch (n.tag) {
          case 3:
            an(n, n.stateNode.containerInfo), at(n, gn, e.memoizedState.cache), pn();
            break;
          case 27:
          case 5:
            Pn(n);
            break;
          case 4:
            an(n, n.stateNode.containerInfo);
            break;
          case 10:
            at(n, n.type, n.memoizedProps.value);
            break;
          case 31:
            if (n.memoizedState !== null) return n.flags |= 128, ve(n), null;
            break;
          case 13:
            var o = n.memoizedState;
            if (o !== null) return o.dehydrated !== null ? (ge(n), n.flags |= 128, null) : (t & n.child.childLanes) !== 0 ? Uc(e, n, t) : (ge(n), e = vr(e, n, t), e !== null ? e.sibling : null);
            ge(n);
            break;
          case 19:
            var u = (e.flags & 128) !== 0;
            if (o = (t & n.childLanes) !== 0, o || (At(e, n, t, !1), o = (t & n.childLanes) !== 0), u) {
              if (o) return Jc(e, n, t);
              n.flags |= 128;
            }
            if (u = n.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), E(Bn, Bn.current), o) break;
            return null;
          case 22:
            return n.lanes = 0, Gc(e, n, t, n.pendingProps);
          case 24:
            at(n, gn, e.memoizedState.cache);
        }
        return vr(e, n, t);
      }
      function jc(e, n, t) {
        if (e !== null)
          if (e.memoizedProps !== n.pendingProps) Mn = !0;
          else {
            if (!La(e, t) && (n.flags & 128) === 0) return Mn = !1, Ch(e, n, t);
            Mn = (e.flags & 131072) !== 0;
          }
        else Mn = !1, Xe && (n.flags & 1048576) !== 0 && Be(n, Ri, n.index);
        switch (n.lanes = 0, n.tag) {
          case 16:
            e: {
              var o = n.pendingProps;
              if (e = ot(n.elementType), n.type = e, typeof e == "function") Va(e) ? (o = oo(e, o), n.tag = 1, n = Hc(null, n, e, o, t)) : (n.tag = 0, n = Ta(null, n, e, o, t));
              else {
                if (e != null) {
                  var u = e.$$typeof;
                  if (u === rl) {
                    n.tag = 11, n = _c(null, n, e, o, t);
                    break e;
                  } else if (u === sl) {
                    n.tag = 14, n = Dc(null, n, e, o, t);
                    break e;
                  }
                }
                throw n = g(e) || e, Error(l(306, n, ""));
              }
            }
            return n;
          case 0:
            return Ta(e, n, n.type, n.pendingProps, t);
          case 1:
            return o = n.type, u = oo(o, n.pendingProps), Hc(e, n, o, u, t);
          case 3:
            e: {
              if (an(n, n.stateNode.containerInfo), e === null) throw Error(l(387));
              var f = n.pendingProps;
              u = n.memoizedState, o = u.element, y(e, n), W(n, f, null, t);
              var b = n.memoizedState;
              if (f = b.cache, at(n, gn, f), f !== u.cache && Ft(n, [gn], t, !0), V(), f = b.element, qn && u.isDehydrated)
                if (u = {
                  element: f,
                  isDehydrated: !1,
                  cache: b.cache
                }, n.updateQueue.baseState = u, n.memoizedState = u, n.flags & 256) {
                  n = Nc(e, n, f, t);
                  break e;
                } else if (f !== o) {
                  o = Ae(Error(l(424)), n), tt(o), n = Nc(e, n, f, t);
                  break e;
                } else for (qn && (mn = km(n.stateNode.containerInfo), Jn = n, Xe = !0, Ur = null, _t = !0), t = vd(n, null, f, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
              else {
                if (pn(), f === o) {
                  n = vr(e, n, t);
                  break e;
                }
                Un(e, n, f, t);
              }
              n = n.child;
            }
            return n;
          case 26:
            if (Kt) return us(e, n), e === null ? (t = od(n.type, null, n.pendingProps, null)) ? n.memoizedState = t : Xe || (n.stateNode = ug(n.type, n.pendingProps, Nr.current, n)) : n.memoizedState = od(n.type, e.memoizedProps, n.pendingProps, e.memoizedState), null;
          case 27:
            if (_n) return Pn(n), e === null && _n && Xe && (o = n.stateNode = cd(n.type, n.pendingProps, Nr.current, zn.current, !1), Jn = n, _t = !0, mn = Hm(n.type, o, mn)), Un(e, n, n.pendingProps.children, t), us(e, n), e === null && (n.flags |= 4194304), n.child;
          case 5:
            return e === null && Xe && (sg(n.type, n.pendingProps, zn.current), (u = o = mn) && (o = Nm(o, n.type, n.pendingProps, _t), o !== null ? (n.stateNode = o, Jn = n, mn = Gm(o), _t = !1, u = !0) : u = !1), u || Yn(n)), Pn(n), u = n.type, f = n.pendingProps, b = e !== null ? e.memoizedProps : null, o = f.children, ys(u, f) ? o = null : b !== null && ys(u, b) && (n.flags |= 32), n.memoizedState !== null && (u = $e(e, n, En, null, null, t), Cr ? uo._currentValue = u : uo._currentValue2 = u), us(e, n), Un(e, n, o, t), n.child;
          case 6:
            return e === null && Xe && (ag(n.pendingProps, zn.current), (e = t = mn) && (t = Um(t, n.pendingProps, _t), t !== null ? (n.stateNode = t, Jn = n, mn = null, e = !0) : e = !1), e || Yn(n)), null;
          case 13:
            return Uc(e, n, t);
          case 4:
            return an(n, n.stateNode.containerInfo), o = n.pendingProps, e === null ? n.child = mo(n, null, o, t) : Un(e, n, o, t), n.child;
          case 11:
            return _c(e, n, n.type, n.pendingProps, t);
          case 7:
            return Un(e, n, n.pendingProps, t), n.child;
          case 8:
            return Un(e, n, n.pendingProps.children, t), n.child;
          case 12:
            return Un(e, n, n.pendingProps.children, t), n.child;
          case 10:
            return o = n.pendingProps, at(n, n.type, o.value), Un(e, n, o.children, t), n.child;
          case 9:
            return u = n.type._context, o = n.pendingProps.children, lt(n), u = ln(u), o = o(u), n.flags |= 1, Un(e, n, o, t), n.child;
          case 14:
            return Dc(e, n, n.type, n.pendingProps, t);
          case 15:
            return Lc(e, n, n.type, n.pendingProps, t);
          case 19:
            return Jc(e, n, t);
          case 31:
            return yh(e, n, t);
          case 22:
            return Gc(e, n, t, n.pendingProps);
          case 24:
            return lt(n), o = ln(gn), e === null ? (u = Rn(), u === null && (u = sn, f = pr(), u.pooledCache = f, f.refCount++, f !== null && (u.pooledCacheLanes |= t), u = f), n.memoizedState = {
              parent: o,
              cache: u
            }, m(n), at(n, gn, u)) : ((e.lanes & t) !== 0 && (y(e, n), W(n, null, null, t), V()), u = e.memoizedState, f = n.memoizedState, u.parent !== o ? (u = {
              parent: o,
              cache: o
            }, n.memoizedState = u, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = u), at(n, gn, o)) : (o = f.cache, at(n, gn, o), o !== u.cache && Ft(n, [gn], t, !0))), Un(e, n, n.pendingProps.children, t), n.child;
          case 29:
            throw n.pendingProps;
        }
        throw Error(l(156, n.tag));
      }
      function zt(e) {
        e.flags |= 4;
      }
      function fs(e) {
        rr && (e.flags |= 8);
      }
      function Kc(e, n) {
        if (e !== null && e.child === n.child) return !1;
        if ((n.flags & 16) !== 0) return !0;
        for (e = n.child; e !== null; ) {
          if ((e.flags & 8218) !== 0 || (e.subtreeFlags & 8218) !== 0) return !0;
          e = e.sibling;
        }
        return !1;
      }
      function Ga(e, n, t, o) {
        if (Vn) for (t = n.child; t !== null; ) {
          if (t.tag === 5 || t.tag === 6) ll(e, t.stateNode);
          else if (!(t.tag === 4 || _n && t.tag === 27) && t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === n) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === n) return;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
        else if (rr) for (var u = n.child; u !== null; ) {
          if (u.tag === 5) {
            var f = u.stateNode;
            t && o && (f = $f(f, u.type, u.memoizedProps)), ll(e, f);
          } else if (u.tag === 6) f = u.stateNode, t && o && (f = ed(f, u.memoizedProps)), ll(e, f);
          else if (u.tag !== 4) {
            if (u.tag === 22 && u.memoizedState !== null) f = u.child, f !== null && (f.return = u), Ga(e, u, !0, !0);
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
      function Qc(e, n, t, o) {
        var u = !1;
        if (rr) for (var f = n.child; f !== null; ) {
          if (f.tag === 5) {
            var b = f.stateNode;
            t && o && (b = $f(b, f.type, f.memoizedProps)), Vf(e, b);
          } else if (f.tag === 6) b = f.stateNode, t && o && (b = ed(b, f.memoizedProps)), Vf(e, b);
          else if (f.tag !== 4) {
            if (f.tag === 22 && f.memoizedState !== null) u = f.child, u !== null && (u.return = f), Qc(e, f, !0, !0), u = !0;
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
      function Xc(e, n) {
        if (rr && Kc(e, n)) {
          e = n.stateNode;
          var t = e.containerInfo, o = Zf();
          Qc(o, n, !1, !1), e.pendingChildren = o, zt(n), Fm(t, o);
        }
      }
      function ka(e, n, t, o) {
        if (Vn) e.memoizedProps !== o && zt(n);
        else if (rr) {
          var u = e.stateNode, f = e.memoizedProps;
          if ((e = Kc(e, n)) || f !== o) {
            var b = zn.current;
            f = Tm(u, t, f, o, !e, null), f === u ? n.stateNode = u : (fs(n), Kf(f, t, o, b) && zt(n), n.stateNode = f, e && Ga(f, n, !1, !1));
          } else n.stateNode = u;
        }
      }
      function Oa(e, n, t, o, u) {
        if ((e.mode & 32) !== 0 && (t === null ? nm(n, o) : tm(n, t, o))) {
          if (e.flags |= 16777216, (u & 335544128) === u || ul(n, o)) if (Xf(e.stateNode, n, o)) e.flags |= 8192;
          else if (Bf()) e.flags |= 8192;
          else throw ho = _s, Cl;
        } else e.flags &= -16777217;
      }
      function Yc(e, n) {
        if (fg(n)) {
          if (e.flags |= 16777216, !ud(n)) if (Bf()) e.flags |= 8192;
          else throw ho = _s, Cl;
        } else e.flags &= -16777217;
      }
      function ds(e, n) {
        n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? U() : 536870912, e.lanes |= n, ei |= n);
      }
      function Bi(e, n) {
        if (!Xe) switch (e.tailMode) {
          case "hidden":
            n = e.tail;
            for (var t = null; n !== null; ) n.alternate !== null && (t = n), n = n.sibling;
            t === null ? e.tail = null : t.sibling = null;
            break;
          case "collapsed":
            t = e.tail;
            for (var o = null; t !== null; ) t.alternate !== null && (o = t), t = t.sibling;
            o === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null;
        }
      }
      function cn(e) {
        var n = e.alternate !== null && e.alternate.child === e.child, t = 0, o = 0;
        if (n) for (var u = e.child; u !== null; ) t |= u.lanes | u.childLanes, o |= u.subtreeFlags & 65011712, o |= u.flags & 65011712, u.return = e, u = u.sibling;
        else for (u = e.child; u !== null; ) t |= u.lanes | u.childLanes, o |= u.subtreeFlags, o |= u.flags, u.return = e, u = u.sibling;
        return e.subtreeFlags |= o, e.childLanes = t, n;
      }
      function Eh(e, n, t) {
        var o = n.pendingProps;
        switch (Me(n), n.tag) {
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
            return t = n.stateNode, o = null, e !== null && (o = e.memoizedState.cache), n.memoizedState.cache !== o && (n.flags |= 2048), vn(gn), xe(), t.pendingContext && (t.context = t.pendingContext, t.pendingContext = null), (e === null || e.child === null) && (Fn(n) ? zt(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, nt())), Xc(e, n), cn(n), null;
          case 26:
            if (Kt) {
              var u = n.type, f = n.memoizedState;
              return e === null ? (zt(n), f !== null ? (cn(n), Yc(n, f)) : (cn(n), Oa(n, u, null, o, t))) : f ? f !== e.memoizedState ? (zt(n), cn(n), Yc(n, f)) : (cn(n), n.flags &= -16777217) : (f = e.memoizedProps, Vn ? f !== o && zt(n) : ka(e, n, u, o), cn(n), Oa(n, u, f, o, t)), null;
            }
          case 27:
            if (_n) {
              if (dn(n), t = Nr.current, u = n.type, e !== null && n.stateNode != null) Vn ? e.memoizedProps !== o && zt(n) : ka(e, n, u, o);
              else {
                if (!o) {
                  if (n.stateNode === null) throw Error(l(166));
                  return cn(n), null;
                }
                e = zn.current, Fn(n) ? yn(n, e) : (e = cd(u, o, t, e, !0), n.stateNode = e, zt(n));
              }
              return cn(n), null;
            }
          case 5:
            if (dn(n), u = n.type, e !== null && n.stateNode != null) ka(e, n, u, o);
            else {
              if (!o) {
                if (n.stateNode === null) throw Error(l(166));
                return cn(n), null;
              }
              if (f = zn.current, Fn(n)) yn(n, f), eg(n.stateNode, u, o, f) && (n.flags |= 64);
              else {
                var b = Xh(u, o, Nr.current, f, n);
                fs(n), Ga(b, n, !1, !1), n.stateNode = b, Kf(b, u, o, f) && zt(n);
              }
            }
            return cn(n), Oa(n, n.type, e === null ? null : e.memoizedProps, n.pendingProps, t), null;
          case 6:
            if (e && n.stateNode != null) t = e.memoizedProps, Vn ? t !== o && zt(n) : rr && (t !== o ? (e = Nr.current, t = zn.current, fs(n), n.stateNode = Qf(o, e, t, n)) : n.stateNode = e.stateNode);
            else {
              if (typeof o != "string" && n.stateNode === null) throw Error(l(166));
              if (e = Nr.current, t = zn.current, Fn(n)) {
                if (!qn) throw Error(l(176));
                if (e = n.stateNode, t = n.memoizedProps, o = null, u = Jn, u !== null) switch (u.tag) {
                  case 27:
                  case 5:
                    o = u.memoizedProps;
                }
                Km(e, t, n, o) || Yn(n, !0);
              } else fs(n), n.stateNode = Qf(o, e, t, n);
            }
            return cn(n), null;
          case 31:
            if (t = n.memoizedState, e === null || e.memoizedState !== null) {
              if (o = Fn(n), t !== null) {
                if (e === null) {
                  if (!o) throw Error(l(318));
                  if (!qn) throw Error(l(556));
                  if (e = n.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(557));
                  Qm(e, n);
                } else pn(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
                cn(n), e = !1;
              } else t = nt(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = t), e = !0;
              if (!e) return n.flags & 256 ? (Oe(n), n) : (Oe(n), null);
              if ((n.flags & 128) !== 0) throw Error(l(558));
            }
            return cn(n), null;
          case 13:
            if (o = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
              if (u = Fn(n), o !== null && o.dehydrated !== null) {
                if (e === null) {
                  if (!u) throw Error(l(318));
                  if (!qn) throw Error(l(344));
                  if (u = n.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(l(317));
                  Xm(u, n);
                } else pn(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
                cn(n), u = !1;
              } else u = nt(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u), u = !0;
              if (!u) return n.flags & 256 ? (Oe(n), n) : (Oe(n), null);
            }
            return Oe(n), (n.flags & 128) !== 0 ? (n.lanes = t, n) : (t = o !== null, e = e !== null && e.memoizedState !== null, t && (o = n.child, u = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (u = o.alternate.memoizedState.cachePool.pool), f = null, o.memoizedState !== null && o.memoizedState.cachePool !== null && (f = o.memoizedState.cachePool.pool), f !== u && (o.flags |= 2048)), t !== e && t && (n.child.flags |= 8192), ds(n, n.updateQueue), cn(n), null);
          case 4:
            return xe(), Xc(e, n), e === null && Vh(n.stateNode.containerInfo), cn(n), null;
          case 10:
            return vn(n.type), cn(n), null;
          case 19:
            if (C(Bn), o = n.memoizedState, o === null) return cn(n), null;
            if (u = (n.flags & 128) !== 0, f = o.rendering, f === null)
              if (u) Bi(o, !1);
              else {
                if (bn !== 0 || e !== null && (e.flags & 128) !== 0) for (e = n.child; e !== null; ) {
                  if (f = qe(e), f !== null) {
                    for (n.flags |= 128, Bi(o, !1), e = f.updateQueue, n.updateQueue = e, ds(n, e), n.subtreeFlags = 0, e = t, t = n.child; t !== null; ) Lf(t, e), t = t.sibling;
                    return E(Bn, Bn.current & 1 | 2), Xe && ce(n, o.treeForkCount), n.child;
                  }
                  e = e.sibling;
                }
                o.tail !== null && pt() > Pi && (n.flags |= 128, u = !0, Bi(o, !1), n.lanes = 4194304);
              }
            else {
              if (!u) if (e = qe(f), e !== null) {
                if (n.flags |= 128, u = !0, e = e.updateQueue, n.updateQueue = e, ds(n, e), Bi(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !Xe) return cn(n), null;
              } else 2 * pt() - o.renderingStartTime > Pi && t !== 536870912 && (n.flags |= 128, u = !0, Bi(o, !1), n.lanes = 4194304);
              o.isBackwards ? (f.sibling = n.child, n.child = f) : (e = o.last, e !== null ? e.sibling = f : n.child = f, o.last = f);
            }
            return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = pt(), e.sibling = null, t = Bn.current, E(Bn, u ? t & 1 | 2 : t & 1), Xe && ce(n, o.treeForkCount), e) : (cn(n), null);
          case 22:
          case 23:
            return Oe(n), on(), o = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (n.flags |= 8192) : o && (n.flags |= 8192), o ? (t & 536870912) !== 0 && (n.flags & 128) === 0 && (cn(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : cn(n), t = n.updateQueue, t !== null && ds(n, t.retryQueue), t = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), o = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (o = n.memoizedState.cachePool.pool), o !== t && (n.flags |= 2048), e !== null && C(po), null;
          case 24:
            return t = null, e !== null && (t = e.memoizedState.cache), n.memoizedState.cache !== t && (n.flags |= 2048), vn(gn), cn(n), null;
          case 25:
            return null;
          case 30:
            return null;
        }
        throw Error(l(156, n.tag));
      }
      function Sh(e, n) {
        switch (Me(n), n.tag) {
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
              if (Oe(n), n.alternate === null) throw Error(l(340));
              pn();
            }
            return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
          case 13:
            if (Oe(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
              if (n.alternate === null) throw Error(l(340));
              pn();
            }
            return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
          case 19:
            return C(Bn), null;
          case 4:
            return xe(), null;
          case 10:
            return vn(n.type), null;
          case 22:
          case 23:
            return Oe(n), on(), e !== null && C(po), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
          case 24:
            return vn(gn), null;
          case 25:
            return null;
          default:
            return null;
        }
      }
      function Wc(e, n) {
        switch (Me(n), n.tag) {
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
            n.memoizedState !== null && Oe(n);
            break;
          case 13:
            Oe(n);
            break;
          case 19:
            C(Bn);
            break;
          case 10:
            vn(n.type);
            break;
          case 22:
          case 23:
            Oe(n), on(), e !== null && C(po);
            break;
          case 24:
            vn(gn);
        }
      }
      function yi(e, n) {
        try {
          var t = n.updateQueue, o = t !== null ? t.lastEffect : null;
          if (o !== null) {
            var u = o.next;
            t = u;
            do {
              if ((t.tag & e) === e) {
                o = void 0;
                var f = t.create, b = t.inst;
                o = f(), b.destroy = o;
              }
              t = t.next;
            } while (t !== u);
          }
        } catch (S) {
          We(n, n.return, S);
        }
      }
      function Gr(e, n, t) {
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
                  var P = t, Y = S;
                  try {
                    Y();
                  } catch (ae) {
                    We(u, P, ae);
                  }
                }
              }
              o = o.next;
            } while (o !== f);
          }
        } catch (ae) {
          We(n, n.return, ae);
        }
      }
      function Zc(e) {
        var n = e.updateQueue;
        if (n !== null) {
          var t = e.stateNode;
          try {
            re(n, t);
          } catch (o) {
            We(e, e.return, o);
          }
        }
      }
      function Vc(e, n, t) {
        t.props = oo(e.type, e.memoizedProps), t.state = e.memoizedState;
        try {
          t.componentWillUnmount();
        } catch (o) {
          We(e, n, o);
        }
      }
      function Ci(e, n) {
        try {
          var t = e.ref;
          if (t !== null) {
            switch (e.tag) {
              case 26:
              case 27:
              case 5:
                var o = wi(e.stateNode);
                break;
              case 30:
                o = e.stateNode;
                break;
              default:
                o = e.stateNode;
            }
            typeof t == "function" ? e.refCleanup = t(o) : t.current = o;
          }
        } catch (u) {
          We(e, n, u);
        }
      }
      function tr(e, n) {
        var t = e.ref, o = e.refCleanup;
        if (t !== null) if (typeof o == "function") try {
          o();
        } catch (u) {
          We(e, n, u);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
        else if (typeof t == "function") try {
          t(null);
        } catch (u) {
          We(e, n, u);
        }
        else t.current = null;
      }
      function qc(e) {
        var n = e.type, t = e.memoizedProps, o = e.stateNode;
        try {
          Am(o, n, t, e);
        } catch (u) {
          We(e, e.return, u);
        }
      }
      function Pa(e, n, t) {
        try {
          vm(e.stateNode, e.type, t, n, e);
        } catch (o) {
          We(e, e.return, o);
        }
      }
      function $c(e) {
        return e.tag === 5 || e.tag === 3 || (Kt ? e.tag === 26 : !1) || (_n ? e.tag === 27 && Po(e.type) : !1) || e.tag === 4;
      }
      function Ha(e) {
        e: for (; ; ) {
          for (; e.sibling === null; ) {
            if (e.return === null || $c(e.return)) return null;
            e = e.return;
          }
          for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (_n && e.tag === 27 && Po(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child;
          }
          if (!(e.flags & 2)) return e.stateNode;
        }
      }
      function Na(e, n, t) {
        var o = e.tag;
        if (o === 5 || o === 6) e = e.stateNode, n ? Bm(t, e, n) : mm(t, e);
        else if (o !== 4 && (_n && o === 27 && Po(e.type) && (t = e.stateNode, n = null), e = e.child, e !== null)) for (Na(e, n, t), e = e.sibling; e !== null; ) Na(e, n, t), e = e.sibling;
      }
      function ps(e, n, t) {
        var o = e.tag;
        if (o === 5 || o === 6) e = e.stateNode, n ? bm(t, e, n) : hm(t, e);
        else if (o !== 4 && (_n && o === 27 && Po(e.type) && (t = e.stateNode), e = e.child, e !== null)) for (ps(e, n, t), e = e.sibling; e !== null; ) ps(e, n, t), e = e.sibling;
      }
      function ef(e, n, t) {
        e = e.containerInfo;
        try {
          qf(e, t);
        } catch (o) {
          We(n, n.return, o);
        }
      }
      function nf(e) {
        var n = e.stateNode, t = e.memoizedProps;
        try {
          pg(e.type, t, n, e);
        } catch (o) {
          We(e, e.return, o);
        }
      }
      function Mh(e, n) {
        for (Kh(e.containerInfo), kn = n; kn !== null; ) if (e = kn, n = e.child, (e.subtreeFlags & 1028) !== 0 && n !== null) n.return = e, kn = n;
        else for (; kn !== null; ) {
          e = kn;
          var t = e.alternate;
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
              if ((n & 1024) !== 0 && t !== null) {
                n = void 0, o = e, u = t.memoizedProps, t = t.memoizedState;
                var f = o.stateNode;
                try {
                  var b = oo(o.type, u);
                  n = f.getSnapshotBeforeUpdate(b, t), f.__reactInternalSnapshotBeforeUpdate = n;
                } catch (S) {
                  We(o, o.return, S);
                }
              }
              break;
            case 3:
              (n & 1024) !== 0 && Vn && Im(e.stateNode.containerInfo);
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
      function tf(e, n, t) {
        var o = t.flags;
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            br(e, t), o & 4 && yi(5, t);
            break;
          case 1:
            if (br(e, t), o & 4) if (e = t.stateNode, n === null) try {
              e.componentDidMount();
            } catch (b) {
              We(t, t.return, b);
            }
            else {
              var u = oo(t.type, n.memoizedProps);
              n = n.memoizedState;
              try {
                e.componentDidUpdate(u, n, e.__reactInternalSnapshotBeforeUpdate);
              } catch (b) {
                We(t, t.return, b);
              }
            }
            o & 64 && Zc(t), o & 512 && Ci(t, t.return);
            break;
          case 3:
            if (br(e, t), o & 64 && (o = t.updateQueue, o !== null)) {
              if (e = null, t.child !== null) switch (t.child.tag) {
                case 27:
                case 5:
                  e = wi(t.child.stateNode);
                  break;
                case 1:
                  e = t.child.stateNode;
              }
              try {
                re(o, e);
              } catch (b) {
                We(t, t.return, b);
              }
            }
            break;
          case 27:
            _n && n === null && o & 4 && nf(t);
          case 26:
          case 5:
            if (br(e, t), n === null) {
              if (o & 4) qc(t);
              else if (o & 64) {
                e = t.type, n = t.memoizedProps, u = t.stateNode;
                try {
                  Zm(u, e, n, t);
                } catch (b) {
                  We(t, t.return, b);
                }
              }
            }
            o & 512 && Ci(t, t.return);
            break;
          case 12:
            br(e, t);
            break;
          case 31:
            br(e, t), o & 4 && of(e, t);
            break;
          case 13:
            br(e, t), o & 4 && sf(e, t), o & 64 && (o = t.memoizedState, o !== null && (o = o.dehydrated, o !== null && (t = _h.bind(null, t), xm(o, t))));
            break;
          case 22:
            if (o = t.memoizedState !== null || wr, !o) {
              n = n !== null && n.memoizedState !== null || wn, u = wr;
              var f = wn;
              wr = o, (wn = n) && !f ? Br(e, t, (t.subtreeFlags & 8772) !== 0) : br(e, t), wr = u, wn = f;
            }
            break;
          case 30:
            break;
          default:
            br(e, t);
        }
      }
      function rf(e) {
        var n = e.alternate;
        n !== null && (e.alternate = null, rf(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && em(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
      function Jt(e, n, t) {
        for (t = t.child; t !== null; ) Ua(e, n, t), t = t.sibling;
      }
      function Ua(e, n, t) {
        if (St && typeof St.onCommitFiberUnmount == "function") try {
          St.onCommitFiberUnmount(Fi, t);
        } catch {
        }
        switch (t.tag) {
          case 26:
            if (Kt) {
              wn || tr(t, n), Jt(e, n, t), t.memoizedState ? sd(t.memoizedState) : t.stateNode && ld(t.stateNode);
              break;
            }
          case 27:
            if (_n) {
              wn || tr(t, n);
              var o = In, u = ht;
              Po(t.type) && (In = t.stateNode, ht = !1), Jt(e, n, t), fd(t.stateNode), In = o, ht = u;
              break;
            }
          case 5:
            wn || tr(t, n);
          case 6:
            if (Vn) {
              if (o = In, u = ht, In = null, Jt(e, n, t), In = o, ht = u, In !== null) if (ht) try {
                Cm(In, t.stateNode);
              } catch (f) {
                We(t, n, f);
              }
              else try {
                ym(In, t.stateNode);
              } catch (f) {
                We(t, n, f);
              }
            } else Jt(e, n, t);
            break;
          case 18:
            Vn && In !== null && (ht ? rg(In, t.stateNode) : tg(In, t.stateNode));
            break;
          case 4:
            Vn ? (o = In, u = ht, In = t.stateNode.containerInfo, ht = !0, Jt(e, n, t), In = o, ht = u) : (rr && ef(t.stateNode, t, Zf()), Jt(e, n, t));
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            Gr(2, t, n), wn || Gr(4, t, n), Jt(e, n, t);
            break;
          case 1:
            wn || (tr(t, n), o = t.stateNode, typeof o.componentWillUnmount == "function" && Vc(t, n, o)), Jt(e, n, t);
            break;
          case 21:
            Jt(e, n, t);
            break;
          case 22:
            wn = (o = wn) || t.memoizedState !== null, Jt(e, n, t), wn = o;
            break;
          default:
            Jt(e, n, t);
        }
      }
      function of(e, n) {
        if (qn && n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null))) {
          e = e.dehydrated;
          try {
            qm(e);
          } catch (t) {
            We(n, n.return, t);
          }
        }
      }
      function sf(e, n) {
        if (qn && n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
          $m(e);
        } catch (t) {
          We(n, n.return, t);
        }
      }
      function wh(e) {
        switch (e.tag) {
          case 31:
          case 13:
          case 19:
            var n = e.stateNode;
            return n === null && (n = e.stateNode = new yd()), n;
          case 22:
            return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new yd()), n;
          default:
            throw Error(l(435, e.tag));
        }
      }
      function hs(e, n) {
        var t = wh(e);
        n.forEach(function(o) {
          if (!t.has(o)) {
            t.add(o);
            var u = Dh.bind(null, e, o);
            o.then(u, u);
          }
        });
      }
      function Zn(e, n) {
        var t = n.deletions;
        if (t !== null) for (var o = 0; o < t.length; o++) {
          var u = t[o], f = e, b = n;
          if (Vn) {
            var S = b;
            e: for (; S !== null; ) {
              switch (S.tag) {
                case 27:
                  if (_n) {
                    if (Po(S.type)) {
                      In = S.stateNode, ht = !1;
                      break e;
                    }
                    break;
                  }
                case 5:
                  In = S.stateNode, ht = !1;
                  break e;
                case 3:
                case 4:
                  In = S.stateNode.containerInfo, ht = !0;
                  break e;
              }
              S = S.return;
            }
            if (In === null) throw Error(l(160));
            Ua(f, b, u), In = null, ht = !1;
          } else Ua(f, b, u);
          f = u.alternate, f !== null && (f.return = null), u.return = null;
        }
        if (n.subtreeFlags & 13886) for (n = n.child; n !== null; ) af(n, e), n = n.sibling;
      }
      function af(e, n) {
        var t = e.alternate, o = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Zn(n, e), it(e), o & 4 && (Gr(3, e, e.return), yi(3, e), Gr(5, e, e.return));
            break;
          case 1:
            Zn(n, e), it(e), o & 512 && (wn || t === null || tr(t, t.return)), o & 64 && wr && (e = e.updateQueue, e !== null && (o = e.callbacks, o !== null && (t = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = t === null ? o : t.concat(o))));
            break;
          case 26:
            if (Kt) {
              var u = Xt;
              if (Zn(n, e), it(e), o & 512 && (wn || t === null || tr(t, t.return)), o & 4) {
                o = t !== null ? t.memoizedState : null;
                var f = e.memoizedState;
                t === null ? f === null ? e.stateNode === null ? e.stateNode = lg(u, e.type, e.memoizedProps, e) : ad(u, e.type, e.stateNode) : e.stateNode = id(u, f, e.memoizedProps) : o !== f ? (o === null ? t.stateNode !== null && ld(t.stateNode) : sd(o), f === null ? ad(u, e.type, e.stateNode) : id(u, f, e.memoizedProps)) : f === null && e.stateNode !== null && Pa(e, e.memoizedProps, t.memoizedProps);
              }
              break;
            }
          case 27:
            if (_n) {
              Zn(n, e), it(e), o & 512 && (wn || t === null || tr(t, t.return)), t !== null && o & 4 && Pa(e, e.memoizedProps, t.memoizedProps);
              break;
            }
          case 5:
            if (Zn(n, e), it(e), o & 512 && (wn || t === null || tr(t, t.return)), Vn) {
              if (e.flags & 32) {
                u = e.stateNode;
                try {
                  Wf(u);
                } catch (q) {
                  We(e, e.return, q);
                }
              }
              o & 4 && e.stateNode != null && (u = e.memoizedProps, Pa(e, u, t !== null ? t.memoizedProps : u)), o & 1024 && (Fl = !0);
            } else rr && e.alternate !== null && (e.alternate.stateNode = e.stateNode);
            break;
          case 6:
            if (Zn(n, e), it(e), o & 4 && Vn) {
              if (e.stateNode === null) throw Error(l(162));
              o = e.memoizedProps, t = t !== null ? t.memoizedProps : o, u = e.stateNode;
              try {
                gm(u, t, o);
              } catch (q) {
                We(e, e.return, q);
              }
            }
            break;
          case 3:
            if (Kt ? (cg(), u = Xt, Xt = dl(n.containerInfo), Zn(n, e), Xt = u) : Zn(n, e), it(e), o & 4) {
              if (Vn && qn && t !== null && t.memoizedState.isDehydrated) try {
                Vm(n.containerInfo);
              } catch (q) {
                We(e, e.return, q);
              }
              if (rr) {
                o = n.containerInfo, t = n.pendingChildren;
                try {
                  qf(o, t);
                } catch (q) {
                  We(e, e.return, q);
                }
              }
            }
            Fl && (Fl = !1, lf(e));
            break;
          case 4:
            Kt ? (t = Xt, Xt = dl(e.stateNode.containerInfo), Zn(n, e), it(e), Xt = t) : (Zn(n, e), it(e)), o & 4 && rr && ef(e.stateNode, e, e.stateNode.pendingChildren);
            break;
          case 12:
            Zn(n, e), it(e);
            break;
          case 31:
            Zn(n, e), it(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, hs(e, o)));
            break;
          case 13:
            Zn(n, e), it(e), e.child.flags & 8192 && e.memoizedState !== null != (t !== null && t.memoizedState !== null) && (Us = pt()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, hs(e, o)));
            break;
          case 22:
            u = e.memoizedState !== null;
            var b = t !== null && t.memoizedState !== null, S = wr, P = wn;
            if (wr = S || u, wn = P || b, Zn(n, e), wn = P, wr = S, it(e), o & 8192 && (n = e.stateNode, n._visibility = u ? n._visibility & -2 : n._visibility | 1, u && (t === null || b || wr || wn || io(e)), Vn)) {
              e: if (t = null, Vn) for (n = e; ; ) {
                if (n.tag === 5 || Kt && n.tag === 26) {
                  if (t === null) {
                    b = t = n;
                    try {
                      f = b.stateNode, u ? Em(f) : Mm(b.stateNode, b.memoizedProps);
                    } catch (q) {
                      We(b, b.return, q);
                    }
                  }
                } else if (n.tag === 6) {
                  if (t === null) {
                    b = n;
                    try {
                      var Y = b.stateNode;
                      u ? Sm(Y) : wm(Y, b.memoizedProps);
                    } catch (q) {
                      We(b, b.return, q);
                    }
                  }
                } else if (n.tag === 18) {
                  if (t === null) {
                    b = n;
                    try {
                      var ae = b.stateNode;
                      u ? og(ae) : ig(b.stateNode);
                    } catch (q) {
                      We(b, b.return, q);
                    }
                  }
                } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === e) && n.child !== null) {
                  n.child.return = n, n = n.child;
                  continue;
                }
                if (n === e) break e;
                for (; n.sibling === null; ) {
                  if (n.return === null || n.return === e) break e;
                  t === n && (t = null), n = n.return;
                }
                t === n && (t = null), n.sibling.return = n.return, n = n.sibling;
              }
            }
            o & 4 && (o = e.updateQueue, o !== null && (t = o.retryQueue, t !== null && (o.retryQueue = null, hs(e, t))));
            break;
          case 19:
            Zn(n, e), it(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, hs(e, o)));
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
            for (var t, o = e.return; o !== null; ) {
              if ($c(o)) {
                t = o;
                break;
              }
              o = o.return;
            }
            if (Vn) {
              if (t == null) throw Error(l(160));
              switch (t.tag) {
                case 27:
                  if (_n) {
                    var u = t.stateNode, f = Ha(e);
                    ps(e, f, u);
                    break;
                  }
                case 5:
                  var b = t.stateNode;
                  t.flags & 32 && (Wf(b), t.flags &= -33);
                  var S = Ha(e);
                  ps(e, S, b);
                  break;
                case 3:
                case 4:
                  var P = t.stateNode.containerInfo, Y = Ha(e);
                  Na(e, Y, P);
                  break;
                default:
                  throw Error(l(161));
              }
            }
          } catch (ae) {
            We(e, e.return, ae);
          }
          e.flags &= -3;
        }
        n & 4096 && (e.flags &= -4097);
      }
      function lf(e) {
        if (e.subtreeFlags & 1024) for (e = e.child; e !== null; ) {
          var n = e;
          lf(n), n.tag === 5 && n.flags & 1024 && im(n.stateNode), e = e.sibling;
        }
      }
      function br(e, n) {
        if (n.subtreeFlags & 8772) for (n = n.child; n !== null; ) tf(e, n.alternate, n), n = n.sibling;
      }
      function io(e) {
        for (e = e.child; e !== null; ) {
          var n = e;
          switch (n.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              Gr(4, n, n.return), io(n);
              break;
            case 1:
              tr(n, n.return);
              var t = n.stateNode;
              typeof t.componentWillUnmount == "function" && Vc(n, n.return, t), io(n);
              break;
            case 27:
              _n && fd(n.stateNode);
            case 26:
            case 5:
              tr(n, n.return), io(n);
              break;
            case 22:
              n.memoizedState === null && io(n);
              break;
            case 30:
              io(n);
              break;
            default:
              io(n);
          }
          e = e.sibling;
        }
      }
      function Br(e, n, t) {
        for (t = t && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
          var o = n.alternate, u = e, f = n, b = f.flags;
          switch (f.tag) {
            case 0:
            case 11:
            case 15:
              Br(u, f, t), yi(4, f);
              break;
            case 1:
              if (Br(u, f, t), o = f, u = o.stateNode, typeof u.componentDidMount == "function") try {
                u.componentDidMount();
              } catch (Y) {
                We(o, o.return, Y);
              }
              if (o = f, u = o.updateQueue, u !== null) {
                var S = o.stateNode;
                try {
                  var P = u.shared.hiddenCallbacks;
                  if (P !== null) for (u.shared.hiddenCallbacks = null, u = 0; u < P.length; u++) oe(P[u], S);
                } catch (Y) {
                  We(o, o.return, Y);
                }
              }
              t && b & 64 && Zc(f), Ci(f, f.return);
              break;
            case 27:
              _n && nf(f);
            case 26:
            case 5:
              Br(u, f, t), t && o === null && b & 4 && qc(f), Ci(f, f.return);
              break;
            case 12:
              Br(u, f, t);
              break;
            case 31:
              Br(u, f, t), t && b & 4 && of(u, f);
              break;
            case 13:
              Br(u, f, t), t && b & 4 && sf(u, f);
              break;
            case 22:
              f.memoizedState === null && Br(u, f, t), Ci(f, f.return);
              break;
            case 30:
              break;
            default:
              Br(u, f, t);
          }
          n = n.sibling;
        }
      }
      function za(e, n) {
        var t = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== t && (e != null && e.refCount++, t != null && Ln(t));
      }
      function Ja(e, n) {
        e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && Ln(e));
      }
      function jt(e, n, t, o) {
        if (n.subtreeFlags & 10256) for (n = n.child; n !== null; ) uf(e, n, t, o), n = n.sibling;
      }
      function uf(e, n, t, o) {
        var u = n.flags;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            jt(e, n, t, o), u & 2048 && yi(9, n);
            break;
          case 1:
            jt(e, n, t, o);
            break;
          case 3:
            jt(e, n, t, o), u & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && Ln(e)));
            break;
          case 12:
            if (u & 2048) {
              jt(e, n, t, o), e = n.stateNode;
              try {
                var f = n.memoizedProps, b = f.id, S = f.onPostCommit;
                typeof S == "function" && S(b, n.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
              } catch (P) {
                We(n, n.return, P);
              }
            } else jt(e, n, t, o);
            break;
          case 31:
            jt(e, n, t, o);
            break;
          case 13:
            jt(e, n, t, o);
            break;
          case 23:
            break;
          case 22:
            f = n.stateNode, b = n.alternate, n.memoizedState !== null ? f._visibility & 2 ? jt(e, n, t, o) : Ei(e, n) : f._visibility & 2 ? jt(e, n, t, o) : (f._visibility |= 2, _o(e, n, t, o, (n.subtreeFlags & 10256) !== 0 || !1)), u & 2048 && za(b, n);
            break;
          case 24:
            jt(e, n, t, o), u & 2048 && Ja(n.alternate, n);
            break;
          default:
            jt(e, n, t, o);
        }
      }
      function _o(e, n, t, o, u) {
        for (u = u && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
          var f = e, b = n, S = t, P = o, Y = b.flags;
          switch (b.tag) {
            case 0:
            case 11:
            case 15:
              _o(f, b, S, P, u), yi(8, b);
              break;
            case 23:
              break;
            case 22:
              var ae = b.stateNode;
              b.memoizedState !== null ? ae._visibility & 2 ? _o(f, b, S, P, u) : Ei(f, b) : (ae._visibility |= 2, _o(f, b, S, P, u)), u && Y & 2048 && za(b.alternate, b);
              break;
            case 24:
              _o(f, b, S, P, u), u && Y & 2048 && Ja(b.alternate, b);
              break;
            default:
              _o(f, b, S, P, u);
          }
          n = n.sibling;
        }
      }
      function Ei(e, n) {
        if (n.subtreeFlags & 10256) for (n = n.child; n !== null; ) {
          var t = e, o = n, u = o.flags;
          switch (o.tag) {
            case 22:
              Ei(t, o), u & 2048 && za(o.alternate, o);
              break;
            case 24:
              Ei(t, o), u & 2048 && Ja(o.alternate, o);
              break;
            default:
              Ei(t, o);
          }
          n = n.sibling;
        }
      }
      function so(e, n, t) {
        if (e.subtreeFlags & qo) for (e = e.child; e !== null; ) cf(e, n, t), e = e.sibling;
      }
      function cf(e, n, t) {
        switch (e.tag) {
          case 26:
            if (so(e, n, t), e.flags & qo) if (e.memoizedState !== null) dg(t, Xt, e.memoizedState, e.memoizedProps);
            else {
              var o = e.stateNode, u = e.type;
              e = e.memoizedProps, ((n & 335544128) === n || ul(u, e)) && Yf(t, o, u, e);
            }
            break;
          case 5:
            so(e, n, t), e.flags & qo && (o = e.stateNode, u = e.type, e = e.memoizedProps, ((n & 335544128) === n || ul(u, e)) && Yf(t, o, u, e));
            break;
          case 3:
          case 4:
            Kt ? (o = Xt, Xt = dl(e.stateNode.containerInfo), so(e, n, t), Xt = o) : so(e, n, t);
            break;
          case 22:
            e.memoizedState === null && (o = e.alternate, o !== null && o.memoizedState !== null ? (o = qo, qo = 16777216, so(e, n, t), qo = o) : so(e, n, t));
            break;
          default:
            so(e, n, t);
        }
      }
      function ff(e) {
        var n = e.alternate;
        if (n !== null && (e = n.child, e !== null)) {
          n.child = null;
          do
            n = e.sibling, e.sibling = null, e = n;
          while (e !== null);
        }
      }
      function Si(e) {
        var n = e.deletions;
        if ((e.flags & 16) !== 0) {
          if (n !== null) for (var t = 0; t < n.length; t++) {
            var o = n[t];
            kn = o, pf(o, e);
          }
          ff(e);
        }
        if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) df(e), e = e.sibling;
      }
      function df(e) {
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            Si(e), e.flags & 2048 && Gr(9, e, e.return);
            break;
          case 3:
            Si(e);
            break;
          case 12:
            Si(e);
            break;
          case 22:
            var n = e.stateNode;
            e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, ms(e)) : Si(e);
            break;
          default:
            Si(e);
        }
      }
      function ms(e) {
        var n = e.deletions;
        if ((e.flags & 16) !== 0) {
          if (n !== null) for (var t = 0; t < n.length; t++) {
            var o = n[t];
            kn = o, pf(o, e);
          }
          ff(e);
        }
        for (e = e.child; e !== null; ) {
          switch (n = e, n.tag) {
            case 0:
            case 11:
            case 15:
              Gr(8, n, n.return), ms(n);
              break;
            case 22:
              t = n.stateNode, t._visibility & 2 && (t._visibility &= -3, ms(n));
              break;
            default:
              ms(n);
          }
          e = e.sibling;
        }
      }
      function pf(e, n) {
        for (; kn !== null; ) {
          var t = kn;
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Gr(8, t, n);
              break;
            case 23:
            case 22:
              if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
                var o = t.memoizedState.cachePool.pool;
                o != null && o.refCount++;
              }
              break;
            case 24:
              Ln(t.memoizedState.cache);
          }
          if (o = t.child, o !== null) o.return = t, kn = o;
          else e: for (t = e; kn !== null; ) {
            o = kn;
            var u = o.sibling, f = o.return;
            if (rf(o), o === t) {
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
      function ja(e) {
        var n = Zh(e);
        if (n != null) {
          if (typeof n.memoizedProps["data-testname"] != "string") throw Error(l(364));
          return n;
        }
        if (e = lm(e), e === null) throw Error(l(362));
        return e.stateNode.current;
      }
      function Ka(e, n) {
        var t = e.tag;
        switch (n.$$typeof) {
          case ks:
            if (e.type === n.value) return !0;
            break;
          case Os:
            e: {
              for (n = n.value, e = [e, 0], t = 0; t < e.length; ) {
                var o = e[t++], u = o.tag, f = e[t++], b = n[f];
                if (u !== 5 && u !== 26 && u !== 27 || !Ti(o)) {
                  for (; b != null && Ka(o, b); ) f++, b = n[f];
                  if (f === n.length) {
                    n = !0;
                    break e;
                  } else for (o = o.child; o !== null; ) e.push(o, f), o = o.sibling;
                }
              }
              n = !1;
            }
            return n;
          case Ps:
            if ((t === 5 || t === 26 || t === 27) && fm(e.stateNode, n.value)) return !0;
            break;
          case Ns:
            if ((t === 5 || t === 6 || t === 26 || t === 27) && (e = cm(e), e !== null && 0 <= e.indexOf(n.value))) return !0;
            break;
          case Hs:
            if ((t === 5 || t === 26 || t === 27) && (e = e.memoizedProps["data-testname"], typeof e == "string" && e.toLowerCase() === n.value.toLowerCase())) return !0;
            break;
          default:
            throw Error(l(365));
        }
        return !1;
      }
      function Qa(e) {
        switch (e.$$typeof) {
          case ks:
            return "<" + (g(e.value) || "Unknown") + ">";
          case Os:
            return ":has(" + (Qa(e) || "") + ")";
          case Ps:
            return '[role="' + e.value + '"]';
          case Ns:
            return '"' + e.value + '"';
          case Hs:
            return '[data-testname="' + e.value + '"]';
          default:
            throw Error(l(365));
        }
      }
      function hf(e, n) {
        var t = [];
        e = [e, 0];
        for (var o = 0; o < e.length; ) {
          var u = e[o++], f = u.tag, b = e[o++], S = n[b];
          if (f !== 5 && f !== 26 && f !== 27 || !Ti(u)) {
            for (; S != null && Ka(u, S); ) b++, S = n[b];
            if (b === n.length) t.push(u);
            else for (u = u.child; u !== null; ) e.push(u, b), u = u.sibling;
          }
        }
        return t;
      }
      function Xa(e, n) {
        if (!Ii) throw Error(l(363));
        e = ja(e), e = hf(e, n), n = [], e = Array.from(e);
        for (var t = 0; t < e.length; ) {
          var o = e[t++], u = o.tag;
          if (u === 5 || u === 26 || u === 27) Ti(o) || n.push(o.stateNode);
          else for (o = o.child; o !== null; ) e.push(o), o = o.sibling;
        }
        return n;
      }
      function yt() {
        return (Ne & 2) !== 0 && je !== 0 ? je & -je : Ee.T !== null ? Z() : qh();
      }
      function mf() {
        if (Tt === 0) if ((je & 536870912) === 0 || Xe) {
          var e = Es;
          Es <<= 1, (Es & 3932160) === 0 && (Es = 262144), Tt = e;
        } else Tt = 536870912;
        return e = wt.current, e !== null && (e.flags |= 32), Tt;
      }
      function dt(e, n, t) {
        (e === sn && (nn === 2 || nn === 9) || e.cancelPendingCommit !== null) && (Do(e, 0), kr(e, je, Tt, !1)), L(e, t), ((Ne & 2) === 0 || e !== sn) && (e === sn && ((Ne & 2) === 0 && (Ao |= t), bn === 4 && kr(e, je, Tt, !1)), Hn(e));
      }
      function gf(e, n, t) {
        if ((Ne & 6) !== 0) throw Error(l(327));
        var o = !t && (n & 127) === 0 && (n & e.expiredLanes) === 0 || F(e, n), u = o ? Fh(e, n) : Wa(e, n, !0), f = o;
        do {
          if (u === 0) {
            $o && !o && kr(e, n, 0, !1);
            break;
          } else {
            if (t = e.current.alternate, f && !Ih(t)) {
              u = Wa(e, n, !1), f = !1;
              continue;
            }
            if (u === 2) {
              if (f = n, e.errorRecoveryDisabledLanes & f) var b = 0;
              else b = e.pendingLanes & -536870913, b = b !== 0 ? b : b & 536870912 ? 536870912 : 0;
              if (b !== 0) {
                n = b;
                e: {
                  var S = e;
                  u = Oi;
                  var P = qn && S.current.memoizedState.isDehydrated;
                  if (P && (Do(S, b).flags |= 256), b = Wa(S, b, !1), b !== 2) {
                    if (Rl && !P) {
                      S.errorRecoveryDisabledLanes |= f, Ao |= f, u = 4;
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
              Do(e, 0), kr(e, n, 0, !0);
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
                  kr(o, n, Tt, !Jr);
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
              if ((n & 62914560) === n && (u = Us + 300 - pt(), 10 < u)) {
                if (kr(o, n, Tt, !Jr), w(o, 0, !0) !== 0) break e;
                Tr = n, o.timeoutHandle = Yh(Af.bind(null, o, t, mt, zs, _l, n, Tt, Ao, ei, Jr, f, "Throttled", -0, 0), u);
                break e;
              }
              Af(o, t, mt, zs, _l, n, Tt, Ao, ei, Jr, f, null, -0, 0);
            }
          }
          break;
        } while (!0);
        Hn(e);
      }
      function Af(e, n, t, o, u, f, b, S, P, Y, ae, q, fe, Le) {
        if (e.timeoutHandle = lo, q = n.subtreeFlags, q & 8192 || (q & 16785408) === 16785408) {
          q = rm(), cf(n, f, q);
          var Tn = (f & 62914560) === f ? Us - pt() : (f & 4194048) === f ? Cd - pt() : 0;
          if (Tn = om(q, Tn), Tn !== null) {
            Tr = f, e.cancelPendingCommit = Tn(wf.bind(null, e, n, f, t, o, u, b, S, P, ae, q, null, fe, Le)), kr(e, f, b, !Y);
            return;
          }
        }
        wf(e, n, f, t, o, u, b, S, P);
      }
      function Ih(e) {
        for (var n = e; ; ) {
          var t = n.tag;
          if ((t === 0 || t === 11 || t === 15) && n.flags & 16384 && (t = n.updateQueue, t !== null && (t = t.stores, t !== null))) for (var o = 0; o < t.length; o++) {
            var u = t[o], f = u.getSnapshot;
            u = u.value;
            try {
              if (!Mt(f(), u)) return !1;
            } catch {
              return !1;
            }
          }
          if (t = n.child, n.subtreeFlags & 16384 && t !== null) t.return = n, n = t;
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
      function kr(e, n, t, o) {
        n &= ~xl, n &= ~Ao, e.suspendedLanes |= n, e.pingedLanes &= ~n, o && (e.warmLanes |= n), o = e.expirationTimes;
        for (var u = n; 0 < u; ) {
          var f = 31 - Et(u), b = 1 << f;
          o[f] = -1, u &= ~b;
        }
        t !== 0 && O(e, t, n);
      }
      function vf() {
        return (Ne & 6) === 0 ? (Vt(0), !1) : !0;
      }
      function Ya() {
        if (Ue !== null) {
          if (nn === 0) var e = Ue.return;
          else e = Ue, Sr = co = null, Wn(e), Xo = null, Di = 0, e = Ue;
          for (; e !== null; ) Wc(e.alternate, e), e = e.return;
          Ue = null;
        }
      }
      function Do(e, n) {
        var t = e.timeoutHandle;
        t !== lo && (e.timeoutHandle = lo, Wh(t)), t = e.cancelPendingCommit, t !== null && (e.cancelPendingCommit = null, t()), Tr = 0, Ya(), sn = e, Ue = t = yr(e.current, null), je = n, nn = 0, It = null, Jr = !1, $o = F(e, n), Rl = !1, ei = Tt = xl = Ao = jr = bn = 0, mt = Oi = null, _l = !1, (n & 8) !== 0 && (n |= n & 32);
        var o = e.entangledLanes;
        if (o !== 0) for (e = e.entanglements, o &= n; 0 < o; ) {
          var u = 31 - Et(o), f = 1 << u;
          n |= e[u], o &= ~f;
        }
        return Ir = n, Fo(), t;
      }
      function bf(e, n) {
        ke = null, Ee.H = Gi, n === Qo || n === xs ? (n = $t(), nn = 3) : n === Cl ? (n = $t(), nn = 4) : nn = n === Il ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, It = n, Ue === null && (bn = 1, as(e, Ae(n, e.current)));
      }
      function Bf() {
        var e = wt.current;
        return e === null ? !0 : (je & 4194048) === je ? Qt === null : (je & 62914560) === je || (je & 536870912) !== 0 ? e === Qt : !1;
      }
      function yf() {
        var e = Ee.H;
        return Ee.H = Gi, e === null ? Gi : e;
      }
      function Cf() {
        var e = Ee.A;
        return Ee.A = Ig, e;
      }
      function gs() {
        bn = 4, Jr || (je & 4194048) !== je && wt.current !== null || ($o = !0), (jr & 134217727) === 0 && (Ao & 134217727) === 0 || sn === null || kr(sn, je, Tt, !1);
      }
      function Wa(e, n, t) {
        var o = Ne;
        Ne |= 2;
        var u = yf(), f = Cf();
        (sn !== e || je !== n) && (zs = null, Do(e, n)), n = !1;
        var b = bn;
        e: do
          try {
            if (nn !== 0 && Ue !== null) {
              var S = Ue, P = It;
              switch (nn) {
                case 8:
                  Ya(), b = 6;
                  break e;
                case 3:
                case 2:
                case 9:
                case 6:
                  wt.current === null && (n = !0);
                  var Y = nn;
                  if (nn = 0, It = null, Lo(e, S, P, Y), t && $o) {
                    b = 0;
                    break e;
                  }
                  break;
                default:
                  Y = nn, nn = 0, It = null, Lo(e, S, P, Y);
              }
            }
            Th(), b = bn;
            break;
          } catch (ae) {
            bf(e, ae);
          }
        while (!0);
        return n && e.shellSuspendCounter++, Sr = co = null, Ne = o, Ee.H = u, Ee.A = f, Ue === null && (sn = null, je = 0, Fo()), b;
      }
      function Th() {
        for (; Ue !== null; ) Ef(Ue);
      }
      function Fh(e, n) {
        var t = Ne;
        Ne |= 2;
        var o = yf(), u = Cf();
        sn !== e || je !== n ? (zs = null, Pi = pt() + 500, Do(e, n)) : $o = F(e, n);
        e: do
          try {
            if (nn !== 0 && Ue !== null) {
              n = Ue;
              var f = It;
              n: switch (nn) {
                case 1:
                  nn = 0, It = null, Lo(e, n, f, 1);
                  break;
                case 2:
                case 9:
                  if (ct(f)) {
                    nn = 0, It = null, Sf(n);
                    break;
                  }
                  n = function() {
                    nn !== 2 && nn !== 9 || sn !== e || (nn = 7), Hn(e);
                  }, f.then(n, n);
                  break e;
                case 3:
                  nn = 7;
                  break e;
                case 4:
                  nn = 5;
                  break e;
                case 7:
                  ct(f) ? (nn = 0, It = null, Sf(n)) : (nn = 0, It = null, Lo(e, n, f, 7));
                  break;
                case 5:
                  var b = null;
                  switch (Ue.tag) {
                    case 26:
                      b = Ue.memoizedState;
                    case 5:
                    case 27:
                      var S = Ue, P = S.type, Y = S.pendingProps;
                      if (b ? ud(b) : Xf(S.stateNode, P, Y)) {
                        nn = 0, It = null;
                        var ae = S.sibling;
                        if (ae !== null) Ue = ae;
                        else {
                          var q = S.return;
                          q !== null ? (Ue = q, As(q)) : Ue = null;
                        }
                        break n;
                      }
                  }
                  nn = 0, It = null, Lo(e, n, f, 5);
                  break;
                case 6:
                  nn = 0, It = null, Lo(e, n, f, 6);
                  break;
                case 8:
                  Ya(), bn = 6;
                  break e;
                default:
                  throw Error(l(462));
              }
            }
            Rh();
            break;
          } catch (fe) {
            bf(e, fe);
          }
        while (!0);
        return Sr = co = null, Ee.H = o, Ee.A = u, Ne = t, Ue !== null ? 0 : (sn = null, je = 0, Fo(), bn);
      }
      function Rh() {
        for (; Ue !== null && !gg(); ) Ef(Ue);
      }
      function Ef(e) {
        var n = jc(e.alternate, e, Ir);
        e.memoizedProps = e.pendingProps, n === null ? As(e) : Ue = n;
      }
      function Sf(e) {
        var n = e, t = n.alternate;
        switch (n.tag) {
          case 15:
          case 0:
            n = Pc(t, n, n.pendingProps, n.type, void 0, je);
            break;
          case 11:
            n = Pc(t, n, n.pendingProps, n.type.render, n.ref, je);
            break;
          case 5:
            Wn(n);
          default:
            Wc(t, n), n = Ue = Lf(n, Ir), n = jc(t, n, Ir);
        }
        e.memoizedProps = e.pendingProps, n === null ? As(e) : Ue = n;
      }
      function Lo(e, n, t, o) {
        Sr = co = null, Wn(n), Xo = null, Di = 0;
        var u = n.return;
        try {
          if (Bh(e, u, n, t, je)) {
            bn = 1, as(e, Ae(t, e.current)), Ue = null;
            return;
          }
        } catch (f) {
          if (u !== null) throw Ue = u, f;
          bn = 1, as(e, Ae(t, e.current)), Ue = null;
          return;
        }
        n.flags & 32768 ? (Xe || o === 1 ? e = !0 : $o || (je & 536870912) !== 0 ? e = !1 : (Jr = e = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = wt.current, o !== null && o.tag === 13 && (o.flags |= 16384))), Mf(n, e)) : As(n);
      }
      function As(e) {
        var n = e;
        do {
          if ((n.flags & 32768) !== 0) {
            Mf(n, Jr);
            return;
          }
          e = n.return;
          var t = Eh(n.alternate, n, Ir);
          if (t !== null) {
            Ue = t;
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
      function Mf(e, n) {
        do {
          var t = Sh(e.alternate, e);
          if (t !== null) {
            t.flags &= 32767, Ue = t;
            return;
          }
          if (t = e.return, t !== null && (t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null), !n && (e = e.sibling, e !== null)) {
            Ue = e;
            return;
          }
          Ue = e = t;
        } while (e !== null);
        bn = 6, Ue = null;
      }
      function wf(e, n, t, o, u, f, b, S, P) {
        e.cancelPendingCommit = null;
        do
          Mi();
        while (Dn !== 0);
        if ((Ne & 6) !== 0) throw Error(l(327));
        if (n !== null) {
          if (n === e.current) throw Error(l(177));
          if (f = n.lanes | n.childLanes, f |= El, Q(e, t, f, b, S, P), e === sn && (Ue = sn = null, je = 0), ni = n, Qr = e, Tr = t, Dl = f, Ll = u, Ed = o, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Lh(ml, function() {
            return xf(), null;
          })) : (e.callbackNode = null, e.callbackPriority = 0), o = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || o) {
            o = Ee.T, Ee.T = null, u = Er(), Gn(2), b = Ne, Ne |= 4;
            try {
              Mh(e, n, t);
            } finally {
              Ne = b, Gn(u), Ee.T = o;
            }
          }
          Dn = 1, If(), Tf(), Ff();
        }
      }
      function If() {
        if (Dn === 1) {
          Dn = 0;
          var e = Qr, n = ni, t = (n.flags & 13878) !== 0;
          if ((n.subtreeFlags & 13878) !== 0 || t) {
            t = Ee.T, Ee.T = null;
            var o = Er();
            Gn(2);
            var u = Ne;
            Ne |= 4;
            try {
              af(n, e), Qh(e.containerInfo);
            } finally {
              Ne = u, Gn(o), Ee.T = t;
            }
          }
          e.current = n, Dn = 2;
        }
      }
      function Tf() {
        if (Dn === 2) {
          Dn = 0;
          var e = Qr, n = ni, t = (n.flags & 8772) !== 0;
          if ((n.subtreeFlags & 8772) !== 0 || t) {
            t = Ee.T, Ee.T = null;
            var o = Er();
            Gn(2);
            var u = Ne;
            Ne |= 4;
            try {
              tf(e, n.alternate, n);
            } finally {
              Ne = u, Gn(o), Ee.T = t;
            }
          }
          Dn = 3;
        }
      }
      function Ff() {
        if (Dn === 4 || Dn === 3) {
          Dn = 0, Ag();
          var e = Qr, n = ni, t = Tr, o = Ed;
          (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? Dn = 5 : (Dn = 0, ni = Qr = null, Rf(e, e.pendingLanes));
          var u = e.pendingLanes;
          if (u === 0 && (Kr = null), be(t), n = n.stateNode, St && typeof St.onCommitFiberRoot == "function") try {
            St.onCommitFiberRoot(Fi, n, void 0, (n.current.flags & 128) === 128);
          } catch {
          }
          if (o !== null) {
            n = Ee.T, u = Er(), Gn(2), Ee.T = null;
            try {
              for (var f = e.onRecoverableError, b = 0; b < o.length; b++) {
                var S = o[b];
                f(S.value, {
                  componentStack: S.stack
                });
              }
            } finally {
              Ee.T = n, Gn(u);
            }
          }
          (Tr & 3) !== 0 && Mi(), Hn(e), u = e.pendingLanes, (t & 261930) !== 0 && (u & 42) !== 0 ? e === Gl ? Hi++ : (Hi = 0, Gl = e) : Hi = 0, qn && ng(), Vt(0);
        }
      }
      function Rf(e, n) {
        (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, Ln(n)));
      }
      function Mi() {
        return If(), Tf(), Ff(), xf();
      }
      function xf() {
        if (Dn !== 5) return !1;
        var e = Qr, n = Dl;
        Dl = 0;
        var t = be(Tr), o = 32 > t ? 32 : t;
        t = Ee.T;
        var u = Er();
        try {
          Gn(o), Ee.T = null, o = Ll, Ll = null;
          var f = Qr, b = Tr;
          if (Dn = 0, ni = Qr = null, Tr = 0, (Ne & 6) !== 0) throw Error(l(331));
          var S = Ne;
          if (Ne |= 4, df(f.current), uf(f, f.current, b, o), Ne = S, Vt(0, !1), St && typeof St.onPostCommitFiberRoot == "function") try {
            St.onPostCommitFiberRoot(Fi, f);
          } catch {
          }
          return !0;
        } finally {
          Gn(u), Ee.T = t, Rf(e, n);
        }
      }
      function _f(e, n, t) {
        n = Ae(t, n), n = Ia(e.stateNode, n, 2), e = x(e, n, 2), e !== null && (L(e, 2), Hn(e));
      }
      function We(e, n, t) {
        if (e.tag === 3) _f(e, e, t);
        else for (; n !== null; ) {
          if (n.tag === 3) {
            _f(n, e, t);
            break;
          } else if (n.tag === 1) {
            var o = n.stateNode;
            if (typeof n.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Kr === null || !Kr.has(o))) {
              e = Ae(t, e), t = Rc(2), o = x(n, t, 2), o !== null && (xc(t, o, n, e), L(o, 2), Hn(o));
              break;
            }
          }
          n = n.return;
        }
      }
      function Za(e, n, t) {
        var o = e.pingCache;
        if (o === null) {
          o = e.pingCache = new Tg();
          var u = /* @__PURE__ */ new Set();
          o.set(n, u);
        } else u = o.get(n), u === void 0 && (u = /* @__PURE__ */ new Set(), o.set(n, u));
        u.has(t) || (Rl = !0, u.add(t), e = xh.bind(null, e, n, t), n.then(e, e));
      }
      function xh(e, n, t) {
        var o = e.pingCache;
        o !== null && o.delete(n), e.pingedLanes |= e.suspendedLanes & t, e.warmLanes &= ~t, sn === e && (je & t) === t && (bn === 4 || bn === 3 && (je & 62914560) === je && 300 > pt() - Us ? (Ne & 2) === 0 && Do(e, 0) : xl |= t, ei === je && (ei = 0)), Hn(e);
      }
      function Df(e, n) {
        n === 0 && (n = U()), e = _e(e, n), e !== null && (L(e, n), Hn(e));
      }
      function _h(e) {
        var n = e.memoizedState, t = 0;
        n !== null && (t = n.retryLane), Df(e, t);
      }
      function Dh(e, n) {
        var t = 0;
        switch (e.tag) {
          case 31:
          case 13:
            var o = e.stateNode, u = e.memoizedState;
            u !== null && (t = u.retryLane);
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
        o !== null && o.delete(n), Df(e, t);
      }
      function Lh(e, n) {
        return Ms(e, n);
      }
      function Gh(e, n, t, o) {
        this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
      }
      function Va(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
      }
      function yr(e, n) {
        var t = e.alternate;
        return t === null ? (t = i(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 65011712, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : {
          lanes: n.lanes,
          firstContext: n.firstContext
        }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t.refCleanup = e.refCleanup, t;
      }
      function Lf(e, n) {
        e.flags &= 65011714;
        var t = e.alternate;
        return t === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, e.type = t.type, n = t.dependencies, e.dependencies = n === null ? null : {
          lanes: n.lanes,
          firstContext: n.firstContext
        }), e;
      }
      function vs(e, n, t, o, u, f) {
        var b = 0;
        if (o = e, typeof e == "function") Va(e) && (b = 1);
        else if (typeof e == "string") b = Kt && _n ? rd(e, t, zn.current) ? 26 : dd(e) ? 27 : 5 : Kt ? rd(e, t, zn.current) ? 26 : 5 : _n && dd(e) ? 27 : 5;
        else e: switch (e) {
          case al:
            return e = i(31, t, n, u), e.elementType = al, e.lanes = f, e;
          case ko:
            return ao(t.children, u, f, n);
          case Uf:
            b = 8, u |= 24;
            break;
          case tl:
            return e = i(12, t, n, u | 2), e.elementType = tl, e.lanes = f, e;
          case ol:
            return e = i(13, t, n, u), e.elementType = ol, e.lanes = f, e;
          case il:
            return e = i(19, t, n, u), e.elementType = il, e.lanes = f, e;
          default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
              case Or:
                b = 10;
                break e;
              case zf:
                b = 9;
                break e;
              case rl:
                b = 11;
                break e;
              case sl:
                b = 14;
                break e;
              case Pr:
                b = 16, o = null;
                break e;
            }
            b = 29, t = Error(l(130, e === null ? "null" : typeof e, "")), o = null;
        }
        return n = i(b, t, n, u), n.elementType = e, n.type = o, n.lanes = f, n;
      }
      function ao(e, n, t, o) {
        return e = i(7, e, o, n), e.lanes = t, e;
      }
      function qa(e, n, t) {
        return e = i(6, e, null, n), e.lanes = t, e;
      }
      function Gf(e) {
        var n = i(18, null, null, 0);
        return n.stateNode = e, n;
      }
      function $a(e, n, t) {
        return n = i(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation
        }, n;
      }
      function kh(e, n, t, o, u, f, b, S, P) {
        this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = lo, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = j(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = j(0), this.hiddenUpdates = j(null), this.identifierPrefix = o, this.onUncaughtError = u, this.onCaughtError = f, this.onRecoverableError = b, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = P, this.incompleteTransitions = /* @__PURE__ */ new Map();
      }
      function kf(e, n, t, o, u, f, b, S, P, Y, ae, q) {
        return e = new kh(e, n, t, b, P, Y, ae, q, S), n = 1, f === !0 && (n |= 24), f = i(3, null, null, n), e.current = f, f.stateNode = e, n = pr(), n.refCount++, e.pooledCache = n, n.refCount++, f.memoizedState = {
          element: o,
          isDehydrated: t,
          cache: n
        }, m(f), e;
      }
      function Of(e) {
        return e ? (e = No, e) : No;
      }
      function Pf(e) {
        var n = e._reactInternals;
        if (n === void 0) throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
        return e = h(n), e = e !== null ? p(e) : null, e === null ? null : wi(e.stateNode);
      }
      function Hf(e, n, t, o, u, f) {
        u = Of(u), o.context === null ? o.context = u : o.pendingContext = u, o = M(n), o.payload = {
          element: t
        }, f = f === void 0 ? null : f, f !== null && (o.callback = f), t = x(e, o, n), t !== null && (dt(t, e, n), H(t, e, n));
      }
      function Nf(e, n) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
          var t = e.retryLane;
          e.retryLane = t !== 0 && t < n ? t : n;
        }
      }
      function el(e, n) {
        Nf(e, n), (e = e.alternate) && Nf(e, n);
      }
      var He = {}, Oh = ca, Ct = QA, nl = Object.assign, Ph = /* @__PURE__ */ Symbol.for("react.element"), bs = /* @__PURE__ */ Symbol.for("react.transitional.element"), Go = /* @__PURE__ */ Symbol.for("react.portal"), ko = /* @__PURE__ */ Symbol.for("react.fragment"), Uf = /* @__PURE__ */ Symbol.for("react.strict_mode"), tl = /* @__PURE__ */ Symbol.for("react.profiler"), zf = /* @__PURE__ */ Symbol.for("react.consumer"), Or = /* @__PURE__ */ Symbol.for("react.context"), rl = /* @__PURE__ */ Symbol.for("react.forward_ref"), ol = /* @__PURE__ */ Symbol.for("react.suspense"), il = /* @__PURE__ */ Symbol.for("react.suspense_list"), sl = /* @__PURE__ */ Symbol.for("react.memo"), Pr = /* @__PURE__ */ Symbol.for("react.lazy"), al = /* @__PURE__ */ Symbol.for("react.activity"), Hh = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Jf = Symbol.iterator, Nh = /* @__PURE__ */ Symbol.for("react.client.reference"), Bs = Array.isArray, Ee = Oh.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Uh = r.rendererVersion, zh = r.rendererPackageName, jf = r.extraDevToolsConfig, wi = r.getPublicInstance, Jh = r.getRootHostContext, jh = r.getChildHostContext, Kh = r.prepareForCommit, Qh = r.resetAfterCommit, Xh = r.createInstance;
      r.cloneMutableInstance;
      var ll = r.appendInitialChild, Kf = r.finalizeInitialChildren, ys = r.shouldSetTextContent, Qf = r.createTextInstance;
      r.cloneMutableTextInstance;
      var Yh = r.scheduleTimeout, Wh = r.cancelTimeout, lo = r.noTimeout, Cr = r.isPrimaryRenderer;
      r.warnsIfNotActing;
      var Vn = r.supportsMutation, rr = r.supportsPersistence, qn = r.supportsHydration, Zh = r.getInstanceFromNode;
      r.beforeActiveInstanceBlur;
      var Vh = r.preparePortalMount;
      r.prepareScopeUpdate, r.getInstanceFromScope;
      var Gn = r.setCurrentUpdatePriority, Er = r.getCurrentUpdatePriority, qh = r.resolveUpdatePriority;
      r.trackSchedulerEvent, r.resolveEventType, r.resolveEventTimeStamp;
      var $h = r.shouldAttemptEagerTransition, em = r.detachDeletedInstance;
      r.requestPostPaintCallback;
      var nm = r.maySuspendCommit, tm = r.maySuspendCommitOnUpdate, ul = r.maySuspendCommitInSyncRender, Xf = r.preloadInstance, rm = r.startSuspendingCommit, Yf = r.suspendInstance;
      r.suspendOnActiveViewTransition;
      var om = r.waitForCommitToBeReady;
      r.getSuspendedCommitReason;
      var Oo = r.NotPendingTransition, uo = r.HostTransitionContext, im = r.resetFormInstance;
      r.bindToConsole;
      var sm = r.supportsMicrotasks, am = r.scheduleMicrotask, Ii = r.supportsTestSelectors, lm = r.findFiberRoot, um = r.getBoundingRect, cm = r.getTextContent, Ti = r.isHiddenSubtree, fm = r.matchAccessibilityRole, dm = r.setFocusIfFocusable, pm = r.setupIntersectionObserver, hm = r.appendChild, mm = r.appendChildToContainer, gm = r.commitTextUpdate, Am = r.commitMount, vm = r.commitUpdate, bm = r.insertBefore, Bm = r.insertInContainerBefore, ym = r.removeChild, Cm = r.removeChildFromContainer, Wf = r.resetTextContent, Em = r.hideInstance, Sm = r.hideTextInstance, Mm = r.unhideInstance, wm = r.unhideTextInstance;
      r.cancelViewTransitionName, r.cancelRootViewTransitionName, r.restoreRootViewTransitionName, r.cloneRootViewTransitionContainer, r.removeRootViewTransitionClone, r.measureClonedInstance, r.hasInstanceChanged, r.hasInstanceAffectedParent, r.startViewTransition, r.startGestureTransition, r.stopViewTransition, r.getCurrentGestureOffset, r.createViewTransitionInstance;
      var Im = r.clearContainer;
      r.createFragmentInstance, r.updateFragmentInstanceFiber, r.commitNewChildToFragmentInstance, r.deleteChildFromFragmentInstance;
      var Tm = r.cloneInstance, Zf = r.createContainerChildSet, Vf = r.appendChildToContainerChildSet, Fm = r.finalizeContainerChildren, qf = r.replaceContainerChildren, $f = r.cloneHiddenInstance, ed = r.cloneHiddenTextInstance, cl = r.isSuspenseInstancePending, fl = r.isSuspenseInstanceFallback, Rm = r.getSuspenseInstanceFallbackErrorDetails, xm = r.registerSuspenseInstanceRetry, _m = r.canHydrateFormStateMarker, Dm = r.isFormStateMarkerMatching, nd = r.getNextHydratableSibling, Lm = r.getNextHydratableSiblingAfterSingleton, Gm = r.getFirstHydratableChild, km = r.getFirstHydratableChildWithinContainer, Om = r.getFirstHydratableChildWithinActivityInstance, Pm = r.getFirstHydratableChildWithinSuspenseInstance, Hm = r.getFirstHydratableChildWithinSingleton, Nm = r.canHydrateInstance, Um = r.canHydrateTextInstance, zm = r.canHydrateActivityInstance, Jm = r.canHydrateSuspenseInstance, jm = r.hydrateInstance, Km = r.hydrateTextInstance, Qm = r.hydrateActivityInstance, Xm = r.hydrateSuspenseInstance, Ym = r.getNextHydratableInstanceAfterActivityInstance, Wm = r.getNextHydratableInstanceAfterSuspenseInstance, Zm = r.commitHydratedInstance, Vm = r.commitHydratedContainer, qm = r.commitHydratedActivityInstance, $m = r.commitHydratedSuspenseInstance, eg = r.finalizeHydratedChildren, ng = r.flushHydrationEvents;
      r.clearActivityBoundary;
      var tg = r.clearSuspenseBoundary;
      r.clearActivityBoundaryFromContainer;
      var rg = r.clearSuspenseBoundaryFromContainer, og = r.hideDehydratedBoundary, ig = r.unhideDehydratedBoundary, td = r.shouldDeleteUnhydratedTailInstances;
      r.diffHydratedPropsForDevWarnings, r.diffHydratedTextForDevWarnings, r.describeHydratableInstanceForDevWarnings;
      var sg = r.validateHydratableInstance, ag = r.validateHydratableTextInstance, Kt = r.supportsResources, rd = r.isHostHoistableType, dl = r.getHoistableRoot, od = r.getResource, id = r.acquireResource, sd = r.releaseResource, lg = r.hydrateHoistable, ad = r.mountHoistable, ld = r.unmountHoistable, ug = r.createHoistableInstance, cg = r.prepareToCommitHoistables, fg = r.mayResourceSuspendCommit, ud = r.preloadResource, dg = r.suspendResource, _n = r.supportsSingletons, cd = r.resolveSingletonInstance, pg = r.acquireSingletonInstance, fd = r.releaseSingletonInstance, dd = r.isHostSingletonType, Po = r.isSingletonScope, pl = [], Ho = -1, No = {}, Et = Math.clz32 ? Math.clz32 : D, hg = Math.log, mg = Math.LN2, Cs = 256, Es = 262144, Ss = 4194304, Ms = Ct.unstable_scheduleCallback, hl = Ct.unstable_cancelCallback, gg = Ct.unstable_shouldYield, Ag = Ct.unstable_requestPaint, pt = Ct.unstable_now, pd = Ct.unstable_ImmediatePriority, vg = Ct.unstable_UserBlockingPriority, ml = Ct.unstable_NormalPriority, bg = Ct.unstable_IdlePriority, Bg = Ct.log, yg = Ct.unstable_setDisableYieldValue, Fi = null, St = null, Mt = typeof Object.is == "function" ? Object.is : le, hd = typeof reportError == "function" ? reportError : function(e) {
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
      }, Cg = Object.prototype.hasOwnProperty, gl, md, Al = !1, gd = /* @__PURE__ */ new WeakMap(), Uo = [], zo = 0, ws = null, Ri = 0, Rt = [], xt = 0, Hr = null, or = 1, ir = "", zn = B(null), xi = B(null), Nr = B(null), Is = B(null), Jn = null, mn = null, Xe = !1, Ur = null, _t = !1, vl = Error(l(519)), Ts = B(null), co = null, Sr = null, Eg = typeof AbortController < "u" ? AbortController : function() {
        var e = [], n = this.signal = {
          aborted: !1,
          addEventListener: function(t, o) {
            e.push(o);
          }
        };
        this.abort = function() {
          n.aborted = !0, e.forEach(function(t) {
            return t();
          });
        };
      }, Sg = Ct.unstable_scheduleCallback, Mg = Ct.unstable_NormalPriority, gn = {
        $$typeof: Or,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
      }, Fs = null, Jo = null, bl = !1, Rs = !1, Bl = !1, fo = 0, _i = null, yl = 0, jo = 0, Ko = null, Ad = Ee.S;
      Ee.S = function(e, n) {
        Cd = pt(), typeof n == "object" && n !== null && typeof n.then == "function" && me(e, n), Ad !== null && Ad(e, n);
      };
      var po = B(null), Qo = Error(l(460)), Cl = Error(l(474)), xs = Error(l(542)), _s = {
        then: function() {
        }
      }, ho = null, Xo = null, Di = 0, mo = ro(!0), vd = ro(!1), Dt = [], Yo = 0, El = 0, zr = !1, Sl = !1, Wo = B(null), Ds = B(0), wt = B(null), Qt = null, Bn = B(0), Mr = 0, ke = null, rn = null, Sn = null, Ls = !1, Zo = !1, go = !1, Gs = 0, Li = 0, Vo = null, wg = 0, Gi = {
        readContext: ln,
        use: Nn,
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
      Gi.useEffectEvent = Ge;
      var bd = {
        readContext: ln,
        use: Nn,
        useCallback: function(e, n) {
          return De().memoizedState = [e, n === void 0 ? null : n], e;
        },
        useContext: ln,
        useEffect: fc,
        useImperativeHandle: function(e, n, t) {
          t = t != null ? t.concat([e]) : null, os(4194308, 4, mc.bind(null, n, e), t);
        },
        useLayoutEffect: function(e, n) {
          return os(4194308, 4, e, n);
        },
        useInsertionEffect: function(e, n) {
          os(4, 2, e, n);
        },
        useMemo: function(e, n) {
          var t = De();
          n = n === void 0 ? null : n;
          var o = e();
          if (go) {
            ee(!0);
            try {
              e();
            } finally {
              ee(!1);
            }
          }
          return t.memoizedState = [o, n], o;
        },
        useReducer: function(e, n, t) {
          var o = De();
          if (t !== void 0) {
            var u = t(n);
            if (go) {
              ee(!0);
              try {
                t(n);
              } finally {
                ee(!1);
              }
            }
          } else u = n;
          return o.memoizedState = o.baseState = u, e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: u
          }, o.queue = e, e = e.dispatch = bh.bind(null, ke, e), [o.memoizedState, e];
        },
        useRef: function(e) {
          var n = De();
          return e = {
            current: e
          }, n.memoizedState = e;
        },
        useState: function(e) {
          e = ba(e);
          var n = e.queue, t = Sc.bind(null, ke, n);
          return n.dispatch = t, [e.memoizedState, t];
        },
        useDebugValue: Ca,
        useDeferredValue: function(e, n) {
          var t = De();
          return Ea(t, e, n);
        },
        useTransition: function() {
          var e = ba(!1);
          return e = Bc.bind(null, ke, e.queue, !0, !1), De().memoizedState = e, [!1, e];
        },
        useSyncExternalStore: function(e, n, t) {
          var o = ke, u = De();
          if (Xe) {
            if (t === void 0) throw Error(l(407));
            t = t();
          } else {
            if (t = n(), sn === null) throw Error(l(349));
            (je & 127) !== 0 || Wu(o, n, t);
          }
          u.memoizedState = t;
          var f = {
            value: t,
            getSnapshot: n
          };
          return u.queue = f, fc(Vu.bind(null, o, f, e), [e]), o.flags |= 2048, xo(9, {
            destroy: void 0
          }, Zu.bind(null, o, f, t, n), null), t;
        },
        useId: function() {
          var e = De(), n = sn.identifierPrefix;
          if (Xe) {
            var t = ir, o = or;
            t = (o & ~(1 << 32 - Et(o) - 1)).toString(32) + t, n = "_" + n + "R_" + t, t = Gs++, 0 < t && (n += "H" + t.toString(32)), n += "_";
          } else t = wg++, n = "_" + n + "r_" + t.toString(32) + "_";
          return e.memoizedState = n;
        },
        useHostTransitionStatus: Sa,
        useFormState: sc,
        useActionState: sc,
        useOptimistic: function(e) {
          var n = De();
          n.memoizedState = n.baseState = e;
          var t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null
          };
          return n.queue = t, n = Ma.bind(null, ke, !0, t), t.dispatch = n, [e, n];
        },
        useMemoCache: Ut,
        useCacheRefresh: function() {
          return De().memoizedState = vh.bind(null, ke);
        },
        useEffectEvent: function(e) {
          var n = De(), t = {
            impl: e
          };
          return n.memoizedState = t, function() {
            if ((Ne & 2) !== 0) throw Error(l(440));
            return t.impl.apply(void 0, arguments);
          };
        }
      }, Ml = {
        readContext: ln,
        use: Nn,
        useCallback: Ac,
        useContext: ln,
        useEffect: ya,
        useImperativeHandle: gc,
        useInsertionEffect: pc,
        useLayoutEffect: hc,
        useMemo: vc,
        useReducer: Bt,
        useRef: cc,
        useState: function() {
          return Bt(hn);
        },
        useDebugValue: Ca,
        useDeferredValue: function(e, n) {
          var t = Pe();
          return bc(t, rn.memoizedState, e, n);
        },
        useTransition: function() {
          var e = Bt(hn)[0], n = Pe().memoizedState;
          return [typeof e == "boolean" ? e : Qe(e), n];
        },
        useSyncExternalStore: Yu,
        useId: Cc,
        useHostTransitionStatus: Sa,
        useFormState: ac,
        useActionState: ac,
        useOptimistic: function(e, n) {
          var t = Pe();
          return ec(t, rn, e, n);
        },
        useMemoCache: Ut,
        useCacheRefresh: Ec
      };
      Ml.useEffectEvent = dc;
      var Bd = {
        readContext: ln,
        use: Nn,
        useCallback: Ac,
        useContext: ln,
        useEffect: ya,
        useImperativeHandle: gc,
        useInsertionEffect: pc,
        useLayoutEffect: hc,
        useMemo: vc,
        useReducer: va,
        useRef: cc,
        useState: function() {
          return va(hn);
        },
        useDebugValue: Ca,
        useDeferredValue: function(e, n) {
          var t = Pe();
          return rn === null ? Ea(t, e, n) : bc(t, rn.memoizedState, e, n);
        },
        useTransition: function() {
          var e = va(hn)[0], n = Pe().memoizedState;
          return [typeof e == "boolean" ? e : Qe(e), n];
        },
        useSyncExternalStore: Yu,
        useId: Cc,
        useHostTransitionStatus: Sa,
        useFormState: uc,
        useActionState: uc,
        useOptimistic: function(e, n) {
          var t = Pe();
          return rn !== null ? ec(t, rn, e, n) : (t.baseState = e, [e, t.queue.dispatch]);
        },
        useMemoCache: Ut,
        useCacheRefresh: Ec
      };
      Bd.useEffectEvent = dc;
      var wl = {
        enqueueSetState: function(e, n, t) {
          e = e._reactInternals;
          var o = yt(), u = M(o);
          u.payload = n, t != null && (u.callback = t), n = x(e, u, o), n !== null && (dt(n, e, o), H(n, e, o));
        },
        enqueueReplaceState: function(e, n, t) {
          e = e._reactInternals;
          var o = yt(), u = M(o);
          u.tag = 1, u.payload = n, t != null && (u.callback = t), n = x(e, u, o), n !== null && (dt(n, e, o), H(n, e, o));
        },
        enqueueForceUpdate: function(e, n) {
          e = e._reactInternals;
          var t = yt(), o = M(t);
          o.tag = 2, n != null && (o.callback = n), n = x(e, o, t), n !== null && (dt(n, e, t), H(n, e, t));
        }
      }, Il = Error(l(461)), Mn = !1, Tl = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
      }, wr = !1, wn = !1, Fl = !1, yd = typeof WeakSet == "function" ? WeakSet : Set, kn = null, In = null, ht = !1, Xt = null, qo = 8192, Ig = {
        getCacheForType: function(e) {
          var n = ln(gn), t = n.data.get(e);
          return t === void 0 && (t = e(), n.data.set(e, t)), t;
        },
        cacheSignal: function() {
          return ln(gn).controller.signal;
        }
      }, ks = 0, Os = 1, Ps = 2, Hs = 3, Ns = 4;
      if (typeof Symbol == "function" && Symbol.for) {
        var ki = Symbol.for;
        ks = ki("selector.component"), Os = ki("selector.has_pseudo_class"), Ps = ki("selector.role"), Hs = ki("selector.test_id"), Ns = ki("selector.text");
      }
      var Tg = typeof WeakMap == "function" ? WeakMap : Map, Ne = 0, sn = null, Ue = null, je = 0, nn = 0, It = null, Jr = !1, $o = !1, Rl = !1, Ir = 0, bn = 0, jr = 0, Ao = 0, xl = 0, Tt = 0, ei = 0, Oi = null, mt = null, _l = !1, Us = 0, Cd = 0, Pi = 1 / 0, zs = null, Kr = null, Dn = 0, Qr = null, ni = null, Tr = 0, Dl = 0, Ll = null, Ed = null, Hi = 0, Gl = null;
      return He.attemptContinuousHydration = function(e) {
        if (e.tag === 13 || e.tag === 31) {
          var n = _e(e, 67108864);
          n !== null && dt(n, e, 67108864), el(e, 67108864);
        }
      }, He.attemptHydrationAtCurrentPriority = function(e) {
        if (e.tag === 13 || e.tag === 31) {
          var n = yt();
          n = ie(n);
          var t = _e(e, n);
          t !== null && dt(t, e, n), el(e, n);
        }
      }, He.attemptSynchronousHydration = function(e) {
        switch (e.tag) {
          case 3:
            if (e = e.stateNode, e.current.memoizedState.isDehydrated) {
              var n = R(e.pendingLanes);
              if (n !== 0) {
                for (e.pendingLanes |= 2, e.entangledLanes |= 2; n; ) {
                  var t = 1 << 31 - Et(n);
                  e.entanglements[1] |= t, n &= ~t;
                }
                Hn(e), (Ne & 6) === 0 && (Pi = pt() + 500, Vt(0));
              }
            }
            break;
          case 31:
          case 13:
            n = _e(e, 2), n !== null && dt(n, e, 2), vf(), el(e, 2);
        }
      }, He.batchedUpdates = function(e, n) {
        return e(n);
      }, He.createComponentSelector = function(e) {
        return {
          $$typeof: ks,
          value: e
        };
      }, He.createContainer = function(e, n, t, o, u, f, b, S, P, Y) {
        return kf(e, n, !1, null, t, o, f, null, b, S, P, Y);
      }, He.createHasPseudoClassSelector = function(e) {
        return {
          $$typeof: Os,
          value: e
        };
      }, He.createHydrationContainer = function(e, n, t, o, u, f, b, S, P, Y, ae, q, fe, Le) {
        var Tn;
        return e = kf(t, o, !0, e, u, f, S, Le, P, Y, ae, q), e.context = Of(null), t = e.current, o = yt(), o = ie(o), u = M(o), u.callback = (Tn = n) != null ? Tn : null, x(t, u, o), n = o, e.current.lanes = n, L(e, n), Hn(e), e;
      }, He.createPortal = function(e, n, t) {
        var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: Go,
          key: o == null ? null : "" + o,
          children: e,
          containerInfo: n,
          implementation: t
        };
      }, He.createRoleSelector = function(e) {
        return {
          $$typeof: Ps,
          value: e
        };
      }, He.createTestNameSelector = function(e) {
        return {
          $$typeof: Hs,
          value: e
        };
      }, He.createTextSelector = function(e) {
        return {
          $$typeof: Ns,
          value: e
        };
      }, He.defaultOnCaughtError = function(e) {
        console.error(e);
      }, He.defaultOnRecoverableError = function(e) {
        hd(e);
      }, He.defaultOnUncaughtError = function(e) {
        hd(e);
      }, He.deferredUpdates = function(e) {
        var n = Ee.T, t = Er();
        try {
          return Gn(32), Ee.T = null, e();
        } finally {
          Gn(t), Ee.T = n;
        }
      }, He.discreteUpdates = function(e, n, t, o, u) {
        var f = Ee.T, b = Er();
        try {
          return Gn(2), Ee.T = null, e(n, t, o, u);
        } finally {
          Gn(b), Ee.T = f, Ne === 0 && (Pi = pt() + 500);
        }
      }, He.findAllNodes = Xa, He.findBoundingRects = function(e, n) {
        if (!Ii) throw Error(l(363));
        n = Xa(e, n), e = [];
        for (var t = 0; t < n.length; t++) e.push(um(n[t]));
        for (n = e.length - 1; 0 < n; n--) {
          t = e[n];
          for (var o = t.x, u = o + t.width, f = t.y, b = f + t.height, S = n - 1; 0 <= S; S--) if (n !== S) {
            var P = e[S], Y = P.x, ae = Y + P.width, q = P.y, fe = q + P.height;
            if (o >= Y && f >= q && u <= ae && b <= fe) {
              e.splice(n, 1);
              break;
            } else if (o !== Y || t.width !== P.width || fe < f || q > b) {
              if (!(f !== q || t.height !== P.height || ae < o || Y > u)) {
                Y > o && (P.width += Y - o, P.x = o), ae < u && (P.width = u - Y), e.splice(n, 1);
                break;
              }
            } else {
              q > f && (P.height += q - f, P.y = f), fe < b && (P.height = b - q), e.splice(n, 1);
              break;
            }
          }
        }
        return e;
      }, He.findHostInstance = Pf, He.findHostInstanceWithNoPortals = function(e) {
        return e = h(e), e = e !== null ? A(e) : null, e === null ? null : wi(e.stateNode);
      }, He.findHostInstanceWithWarning = function(e) {
        return Pf(e);
      }, He.flushPassiveEffects = Mi, He.flushSyncFromReconciler = function(e) {
        var n = Ne;
        Ne |= 1;
        var t = Ee.T, o = Er();
        try {
          if (Gn(2), Ee.T = null, e) return e();
        } finally {
          Gn(o), Ee.T = t, Ne = n, (Ne & 6) === 0 && Vt(0);
        }
      }, He.flushSyncWork = vf, He.focusWithin = function(e, n) {
        if (!Ii) throw Error(l(363));
        for (e = ja(e), n = hf(e, n), n = Array.from(n), e = 0; e < n.length; ) {
          var t = n[e++], o = t.tag;
          if (!Ti(t)) {
            if ((o === 5 || o === 26 || o === 27) && dm(t.stateNode)) return !0;
            for (t = t.child; t !== null; ) n.push(t), t = t.sibling;
          }
        }
        return !1;
      }, He.getFindAllNodesFailureDescription = function(e, n) {
        if (!Ii) throw Error(l(363));
        var t = 0, o = [];
        e = [ja(e), 0];
        for (var u = 0; u < e.length; ) {
          var f = e[u++], b = f.tag, S = e[u++], P = n[S];
          if ((b !== 5 && b !== 26 && b !== 27 || !Ti(f)) && (Ka(f, P) && (o.push(Qa(P)), S++, S > t && (t = S)), S < n.length)) for (f = f.child; f !== null; ) e.push(f, S), f = f.sibling;
        }
        if (t < n.length) {
          for (e = []; t < n.length; t++) e.push(Qa(n[t]));
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
            return wi(e.child.stateNode);
          default:
            return e.child.stateNode;
        }
      }, He.injectIntoDevTools = function() {
        var e = {
          bundleType: 0,
          version: Uh,
          rendererPackageName: zh,
          currentDispatcherRef: Ee,
          reconcilerVersion: "19.2.0"
        };
        if (jf !== null && (e.rendererConfig = jf), typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") e = !1;
        else {
          var n = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (n.isDisabled || !n.supportsFiber) e = !0;
          else {
            try {
              Fi = n.inject(e), St = n;
            } catch {
            }
            e = !!n.checkDCE;
          }
        }
        return e;
      }, He.isAlreadyRendering = function() {
        return (Ne & 6) !== 0;
      }, He.observeVisibleRects = function(e, n, t, o) {
        if (!Ii) throw Error(l(363));
        e = Xa(e, n);
        var u = pm(e, t, o).disconnect;
        return {
          disconnect: function() {
            u();
          }
        };
      }, He.shouldError = function() {
        return null;
      }, He.shouldSuspend = function() {
        return !1;
      }, He.startHostTransition = function(e, n, t, o) {
        if (e.tag !== 5) throw Error(l(476));
        var u = yc(e).queue;
        Bc(e, u, n, Oo, t === null ? s : function() {
          var f = yc(e);
          return f.next === null && (f = e.alternate.memoizedState), vi(e, f.next.queue, {}, yt()), t(o);
        });
      }, He.updateContainer = function(e, n, t, o) {
        var u = n.current, f = yt();
        return Hf(u, f, e, n, t, o), f;
      }, He.updateContainerSync = function(e, n, t, o) {
        return Hf(n.current, 2, e, n, t, o), 2;
      }, He;
    }, a.exports.default = a.exports, Object.defineProperty(a.exports, "__esModule", {
      value: !0
    });
  })(Kd)), Kd.exports;
}
var Xd;
function yv() {
  return Xd || (Xd = 1, jd.exports = Bv()), jd.exports;
}
var Cv = yv();
const Ev = bv(Cv);
function Sv(a) {
  const r = Ev(a);
  return r.injectIntoDevTools(), r;
}
const Np = 0, pi = {}, Mv = /^three(?=[A-Z])/, ha = (a) => `${a[0].toUpperCase()}${a.slice(1)}`;
let wv = 0;
const Iv = (a) => typeof a == "function";
function Up(a) {
  if (Iv(a)) {
    const r = `${wv++}`;
    return pi[r] = a, r;
  } else
    Object.assign(pi, a);
}
function zp(a, r) {
  const i = ha(a), s = pi[i];
  if (a !== "primitive" && !s) throw new Error(`R3F: ${i} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
  if (a === "primitive" && !r.object) throw new Error("R3F: Primitives without 'object' are invalid!");
  if (r.args !== void 0 && !Array.isArray(r.args)) throw new Error("R3F: The args prop must be an array!");
}
function Tv(a, r, i) {
  var s;
  return a = ha(a) in pi ? a : a.replace(Mv, ""), zp(a, r), a === "primitive" && (s = r.object) != null && s.__r3f && delete r.object.__r3f, oa(r.object, i, a, r);
}
function Fv(a) {
  if (!a.isHidden) {
    var r;
    a.props.attach && (r = a.parent) != null && r.object ? sa(a.parent, a) : st(a.object) && (a.object.visible = !1), a.isHidden = !0, mi(a);
  }
}
function Jp(a) {
  if (a.isHidden) {
    var r;
    a.props.attach && (r = a.parent) != null && r.object ? ia(a.parent, a) : st(a.object) && a.props.visible !== !1 && (a.object.visible = !0), a.isHidden = !1, mi(a);
  }
}
function ku(a, r, i) {
  const s = r.root.getState();
  if (!(!a.parent && a.object !== s.scene)) {
    if (!r.object) {
      var l, c;
      const d = pi[ha(r.type)];
      r.object = (l = r.props.object) != null ? l : new d(...(c = r.props.args) != null ? c : []), r.object.__r3f = r;
    }
    if (lr(r.object, r.props), r.props.attach)
      ia(a, r);
    else if (st(r.object) && st(a.object)) {
      const d = a.object.children.indexOf(i?.object);
      if (i && d !== -1) {
        const h = a.object.children.indexOf(r.object);
        if (h !== -1) {
          a.object.children.splice(h, 1);
          const p = h < d ? d - 1 : d;
          a.object.children.splice(p, 0, r.object);
        } else
          r.object.parent = a.object, a.object.children.splice(d, 0, r.object), r.object.dispatchEvent({
            type: "added"
          }), a.object.dispatchEvent({
            type: "childadded",
            child: r.object
          });
      } else
        a.object.add(r.object);
    }
    for (const d of r.children) ku(r, d);
    mi(r);
  }
}
function jl(a, r) {
  r && (r.parent = a, a.children.push(r), ku(a, r));
}
function Yd(a, r, i) {
  if (!r || !i) return;
  r.parent = a;
  const s = a.children.indexOf(i);
  s !== -1 ? a.children.splice(s, 0, r) : a.children.push(r), ku(a, r, i);
}
function jp(a) {
  if (typeof a.dispose == "function") {
    const r = () => {
      try {
        a.dispose();
      } catch {
      }
    };
    typeof IS_REACT_ACT_ENVIRONMENT < "u" ? r() : hu.unstable_scheduleCallback(hu.unstable_IdlePriority, r);
  }
}
function gu(a, r, i) {
  if (!r) return;
  r.parent = null;
  const s = a.children.indexOf(r);
  s !== -1 && a.children.splice(s, 1), r.props.attach ? sa(a, r) : st(r.object) && st(a.object) && (a.object.remove(r.object), cv(_u(r), r.object));
  const l = r.props.dispose !== null && i !== !1;
  for (let c = r.children.length - 1; c >= 0; c--) {
    const d = r.children[c];
    gu(r, d, l);
  }
  r.children.length = 0, delete r.object.__r3f, l && r.type !== "primitive" && r.object.type !== "Scene" && jp(r.object), i === void 0 && mi(r);
}
function Rv(a, r) {
  for (const i of [a, a.alternate])
    if (i !== null)
      if (typeof i.ref == "function") {
        i.refCleanup == null || i.refCleanup();
        const s = i.ref(r);
        typeof s == "function" && (i.refCleanup = s);
      } else i.ref && (i.ref.current = r);
}
const ea = [];
function xv() {
  for (const [i] of ea) {
    const s = i.parent;
    if (s) {
      i.props.attach ? sa(s, i) : st(i.object) && st(s.object) && s.object.remove(i.object);
      for (const l of i.children)
        l.props.attach ? sa(i, l) : st(l.object) && st(i.object) && i.object.remove(l.object);
    }
    i.isHidden && Jp(i), i.object.__r3f && delete i.object.__r3f, i.type !== "primitive" && jp(i.object);
  }
  for (const [i, s, l] of ea) {
    i.props = s;
    const c = i.parent;
    if (c) {
      var a, r;
      const d = pi[ha(i.type)], h = i.object;
      i.object = (a = i.props.object) != null ? a : new d(...(r = i.props.args) != null ? r : []), i.object.__r3f = i, Rv(l, i.object), uv(_u(i), h, i.object), lr(i.object, i.props), i.props.attach ? ia(c, i) : st(i.object) && st(c.object) && c.object.add(i.object);
      for (const p of i.children)
        p.props.attach ? ia(i, p) : st(p.object) && st(i.object) && i.object.add(p.object);
      mi(i);
    }
  }
  ea.length = 0;
}
const Kl = () => {
}, Wd = {};
let Js = Np;
const _v = 0, Dv = 4, aa = /* @__PURE__ */ Sv({
  isPrimaryRenderer: !1,
  warnsIfNotActing: !1,
  supportsMutation: !0,
  supportsPersistence: !1,
  supportsHydration: !1,
  createInstance: Tv,
  removeChild: gu,
  appendChild: jl,
  appendInitialChild: jl,
  insertBefore: Yd,
  appendChildToContainer(a, r) {
    const i = a.getState().scene.__r3f;
    !r || !i || jl(i, r);
  },
  removeChildFromContainer(a, r) {
    const i = a.getState().scene.__r3f;
    !r || !i || gu(i, r);
  },
  insertInContainerBefore(a, r, i) {
    const s = a.getState().scene.__r3f;
    !r || !i || !s || Yd(s, r, i);
  },
  getRootHostContext: () => Wd,
  getChildHostContext: () => Wd,
  commitUpdate(a, r, i, s, l) {
    var c, d, h;
    zp(r, s);
    let p = !1;
    if ((a.type === "primitive" && i.object !== s.object || ((c = s.args) == null ? void 0 : c.length) !== ((d = i.args) == null ? void 0 : d.length) || (h = s.args) != null && h.some((v, g) => {
      var B;
      return v !== ((B = i.args) == null ? void 0 : B[g]);
    })) && (p = !0), p)
      ea.push([a, {
        ...s
      }, l]);
    else {
      const v = sv(a, s);
      Object.keys(v).length && (Object.assign(a.props, v), lr(a.object, v));
    }
    (l.sibling === null || (l.flags & Dv) === _v) && xv();
  },
  finalizeInitialChildren: () => !1,
  commitMount() {
  },
  getPublicInstance: (a) => a?.object,
  prepareForCommit: () => null,
  preparePortalMount: (a) => oa(a.getState().scene, a, "", {}),
  resetAfterCommit: () => {
  },
  shouldSetTextContent: () => !1,
  clearContainer: () => !1,
  hideInstance: Fv,
  unhideInstance: Jp,
  createTextInstance: Kl,
  hideTextInstance: Kl,
  unhideTextInstance: Kl,
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
  HostTransitionContext: /* @__PURE__ */ X.createContext(null),
  setCurrentUpdatePriority(a) {
    Js = a;
  },
  getCurrentUpdatePriority() {
    return Js;
  },
  resolveUpdatePriority() {
    var a;
    if (Js !== Np) return Js;
    switch (typeof window < "u" && ((a = window.event) == null ? void 0 : a.type)) {
      case "click":
      case "contextmenu":
      case "dblclick":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
        return Av;
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "pointerenter":
      case "pointerleave":
      case "wheel":
        return mv;
      default:
        return gv;
    }
  },
  resetFormInstance() {
  },
  // @ts-ignore DefinitelyTyped is not up to date
  rendererPackageName: "@react-three/fiber",
  rendererVersion: vv.version,
  // https://github.com/facebook/react/pull/31975
  // https://github.com/facebook/react/pull/31999
  applyViewTransitionName(a, r, i) {
  },
  restoreViewTransitionName(a, r) {
  },
  cancelViewTransitionName(a, r, i) {
  },
  cancelRootViewTransitionName(a) {
  },
  restoreRootViewTransitionName(a) {
  },
  InstanceMeasurement: null,
  measureInstance: (a) => null,
  wasInstanceInViewport: (a) => !0,
  hasInstanceChanged: (a, r) => !1,
  hasInstanceAffectedParent: (a, r) => !1,
  // https://github.com/facebook/react/pull/32002
  // https://github.com/facebook/react/pull/34486
  suspendOnActiveViewTransition(a, r) {
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
  cloneMutableInstance(a, r) {
    return a;
  },
  cloneMutableTextInstance(a) {
    return a;
  },
  cloneRootViewTransitionContainer(a) {
    throw new Error("Not implemented.");
  },
  removeRootViewTransitionClone(a, r) {
    throw new Error("Not implemented.");
  },
  // https://github.com/facebook/react/pull/32465
  createFragmentInstance: (a) => null,
  updateFragmentInstanceFiber(a, r) {
  },
  commitNewChildToFragmentInstance(a, r) {
  },
  deleteChildFromFragmentInstance(a, r) {
  },
  // https://github.com/facebook/react/pull/32653
  measureClonedInstance: (a) => null,
  // https://github.com/facebook/react/pull/32819
  maySuspendCommitOnUpdate: (a, r, i) => !1,
  maySuspendCommitInSyncRender: (a, r) => !1,
  // https://github.com/facebook/react/pull/34486
  startSuspendingCommit: () => null,
  // https://github.com/facebook/react/pull/34522
  getSuspendedCommitReason: (a, r) => null
}), Mo = /* @__PURE__ */ new Map(), ii = {
  objects: "shallow",
  strict: !1
};
function Lv(a, r) {
  if (!r && typeof HTMLCanvasElement < "u" && a instanceof HTMLCanvasElement && a.parentElement) {
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
  } else if (!r && typeof OffscreenCanvas < "u" && a instanceof OffscreenCanvas)
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
    ...r
  };
}
function Gv(a) {
  const r = Mo.get(a), i = r?.fiber, s = r?.store;
  r && console.warn("R3F.createRoot should only be called once!");
  const l = typeof reportError == "function" ? (
    // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError
  ) : (
    // In older browsers and test environments, fallback to console.error.
    console.error
  ), c = s || dv(bu, Vd), d = i || aa.createContainer(
    c,
    // container
    hv,
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
  r || Mo.set(a, {
    fiber: d,
    store: c
  });
  let h, p, A = !1, v = null;
  return {
    async configure(g = {}) {
      let B;
      v = new Promise((Be) => B = Be);
      let {
        gl: C,
        size: E,
        scene: D,
        events: R,
        onCreated: w,
        shadows: F = !1,
        linear: N = !1,
        flat: U = !1,
        legacy: j = !1,
        orthographic: L = !1,
        frameloop: Q = "always",
        dpr: O = [1, 2],
        performance: k,
        raycaster: K,
        camera: ie,
        onPointerMissed: be
      } = g, ee = c.getState(), le = ee.gl;
      if (!ee.gl) {
        const Be = {
          canvas: a,
          powerPreference: "high-performance",
          antialias: !0,
          alpha: !0
        }, he = typeof C == "function" ? await C(Be) : C;
        zd(he) ? le = he : le = new Te.WebGLRenderer({
          ...Be,
          ...C
        }), ee.set({
          gl: le
        });
      }
      let de = ee.raycaster;
      de || ee.set({
        raycaster: de = new Te.Raycaster()
      });
      const {
        params: J,
        ...ue
      } = K || {};
      if (un.equ(ue, de, ii) || lr(de, {
        ...ue
      }), un.equ(J, de.params, ii) || lr(de, {
        params: {
          ...de.params,
          ...J
        }
      }), !ee.camera || ee.camera === p && !un.equ(p, ie, ii)) {
        p = ie;
        const Be = ie?.isCamera, he = Be ? ie : L ? new Te.OrthographicCamera(0, 0, 0, 0, 0.1, 1e3) : new Te.PerspectiveCamera(75, 0, 0.1, 1e3);
        Be || (he.position.z = 5, ie && (lr(he, ie), he.manual || ("aspect" in ie || "left" in ie || "right" in ie || "bottom" in ie || "top" in ie) && (he.manual = !0, he.updateProjectionMatrix())), !ee.camera && !(ie != null && ie.rotation) && he.lookAt(0, 0, 0)), ee.set({
          camera: he
        }), de.camera = he;
      }
      if (!ee.scene) {
        let Be;
        D != null && D.isScene ? (Be = D, oa(Be, c, "", {})) : (Be = new Te.Scene(), oa(Be, c, "", {}), D && lr(Be, D)), ee.set({
          scene: Be
        });
      }
      R && !ee.events.handlers && ee.set({
        events: R(c)
      });
      const pe = Lv(a, E);
      if (un.equ(pe, ee.size, ii) || ee.setSize(pe.width, pe.height, pe.top, pe.left), O && ee.viewport.dpr !== Gp(O) && ee.setDpr(O), ee.frameloop !== Q && ee.setFrameloop(Q), ee.onPointerMissed || ee.set({
        onPointerMissed: be
      }), k && !un.equ(k, ee.performance, ii) && ee.set((Be) => ({
        performance: {
          ...Be.performance,
          ...k
        }
      })), !ee.xr) {
        var Ae;
        const Be = (Fe, an) => {
          const xe = c.getState();
          xe.frameloop !== "never" && Vd(Fe, !0, xe, an);
        }, he = () => {
          const Fe = c.getState();
          Fe.gl.xr.enabled = Fe.gl.xr.isPresenting, Fe.gl.xr.setAnimationLoop(Fe.gl.xr.isPresenting ? Be : null), Fe.gl.xr.isPresenting || bu(Fe);
        }, Me = {
          connect() {
            const Fe = c.getState().gl;
            Fe.xr.addEventListener("sessionstart", he), Fe.xr.addEventListener("sessionend", he);
          },
          disconnect() {
            const Fe = c.getState().gl;
            Fe.xr.removeEventListener("sessionstart", he), Fe.xr.removeEventListener("sessionend", he);
          }
        };
        typeof ((Ae = le.xr) == null ? void 0 : Ae.addEventListener) == "function" && Me.connect(), ee.set({
          xr: Me
        });
      }
      if (le.shadowMap) {
        const Be = le.shadowMap.enabled, he = le.shadowMap.type;
        if (le.shadowMap.enabled = !!F, un.boo(F))
          le.shadowMap.type = Te.PCFSoftShadowMap;
        else if (un.str(F)) {
          var ce;
          const Me = {
            basic: Te.BasicShadowMap,
            percentage: Te.PCFShadowMap,
            soft: Te.PCFSoftShadowMap,
            variance: Te.VSMShadowMap
          };
          le.shadowMap.type = (ce = Me[F]) != null ? ce : Te.PCFSoftShadowMap;
        } else un.obj(F) && Object.assign(le.shadowMap, F);
        (Be !== le.shadowMap.enabled || he !== le.shadowMap.type) && (le.shadowMap.needsUpdate = !0);
      }
      return Te.ColorManagement.enabled = !j, A || (le.outputColorSpace = N ? Te.LinearSRGBColorSpace : Te.SRGBColorSpace, le.toneMapping = U ? Te.NoToneMapping : Te.ACESFilmicToneMapping), ee.legacy !== j && ee.set(() => ({
        legacy: j
      })), ee.linear !== N && ee.set(() => ({
        linear: N
      })), ee.flat !== U && ee.set(() => ({
        flat: U
      })), C && !un.fun(C) && !zd(C) && !un.equ(C, le, ii) && lr(le, C), h = w, A = !0, B(), this;
    },
    render(g) {
      return !A && !v && this.configure(), v.then(() => {
        aa.updateContainer(/* @__PURE__ */ Ce(kv, {
          store: c,
          children: g,
          onCreated: h,
          rootElement: a
        }), d, null, () => {
        });
      }), c;
    },
    unmount() {
      Kp(a);
    }
  };
}
function kv({
  store: a,
  children: r,
  onCreated: i,
  rootElement: s
}) {
  return es(() => {
    const l = a.getState();
    l.set((c) => ({
      internal: {
        ...c.internal,
        active: !0
      }
    })), i && i(l), a.getState().events.connected || l.events.connect == null || l.events.connect(s);
  }, []), /* @__PURE__ */ Ce(Lu.Provider, {
    value: a,
    children: r
  });
}
function Kp(a, r) {
  const i = Mo.get(a), s = i?.fiber;
  if (s) {
    const l = i?.store.getState();
    l && (l.internal.active = !1), aa.updateContainer(null, s, null, () => {
      l && setTimeout(() => {
        try {
          var c, d, h, p;
          l.events.disconnect == null || l.events.disconnect(), (c = l.gl) == null || (d = c.renderLists) == null || d.dispose == null || d.dispose(), (h = l.gl) == null || h.forceContextLoss == null || h.forceContextLoss(), (p = l.gl) != null && p.xr && l.xr.disconnect(), rv(l.scene), Mo.delete(a);
        } catch {
        }
      }, 500);
    });
  }
}
function Ov(a, r, i) {
  return /* @__PURE__ */ Ce(Pv, {
    children: a,
    container: r,
    state: i
  });
}
function Pv({
  state: a = {},
  children: r,
  container: i
}) {
  const {
    events: s,
    size: l,
    ...c
  } = a, d = Gu(), [h] = X.useState(() => new Te.Raycaster()), [p] = X.useState(() => new Te.Vector2()), A = Du((g, B) => {
    let C;
    if (B.camera && l) {
      const E = B.camera;
      C = g.viewport.getCurrentViewport(E, new Te.Vector3(), l), E !== g.camera && Op(E, l);
    }
    return {
      // The intersect consists of the previous root state
      ...g,
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
        ...g.events,
        ...B.events,
        ...s
      },
      size: {
        ...g.size,
        ...l
      },
      viewport: {
        ...g.viewport,
        ...C
      },
      // Layers are allowed to override events
      setEvents: (E) => B.set((D) => ({
        ...D,
        events: {
          ...D.events,
          ...E
        }
      }))
    };
  }), v = X.useMemo(() => {
    const g = Tp((C, E) => ({
      ...c,
      set: C,
      get: E
    })), B = (C) => g.setState((E) => A.current(C, E));
    return B(d.getState()), d.subscribe(B), g;
  }, [d, i]);
  return (
    // @ts-ignore, reconciler types are not maintained
    /* @__PURE__ */ Ce(Rg, {
      children: aa.createPortal(/* @__PURE__ */ Ce(Lu.Provider, {
        value: v,
        children: r
      }), v, null)
    })
  );
}
const Hv = /* @__PURE__ */ new Set(), Nv = /* @__PURE__ */ new Set(), Uv = /* @__PURE__ */ new Set();
function Ql(a, r) {
  if (a.size)
    for (const {
      callback: i
    } of a.values())
      i(r);
}
function Xi(a, r) {
  switch (a) {
    case "before":
      return Ql(Hv, r);
    case "after":
      return Ql(Nv, r);
    case "tail":
      return Ql(Uv, r);
  }
}
let Xl, Yl;
function Au(a, r, i) {
  let s = r.clock.getDelta();
  r.frameloop === "never" && typeof a == "number" && (s = a - r.clock.elapsedTime, r.clock.oldTime = r.clock.elapsedTime, r.clock.elapsedTime = a), Xl = r.internal.subscribers;
  for (let l = 0; l < Xl.length; l++)
    Yl = Xl[l], Yl.ref.current(Yl.store.getState(), s, i);
  return !r.internal.priority && r.gl.render && r.gl.render(r.scene, r.camera), r.internal.frames = Math.max(0, r.internal.frames - 1), r.frameloop === "always" ? 1 : r.internal.frames;
}
let la = !1, vu = !1, Wl, Zd, si;
function Qp(a) {
  Zd = requestAnimationFrame(Qp), la = !0, Wl = 0, Xi("before", a), vu = !0;
  for (const i of Mo.values()) {
    var r;
    si = i.store.getState(), si.internal.active && (si.frameloop === "always" || si.internal.frames > 0) && !((r = si.gl.xr) != null && r.isPresenting) && (Wl += Au(a, si));
  }
  if (vu = !1, Xi("after", a), Wl === 0)
    return Xi("tail", a), la = !1, cancelAnimationFrame(Zd);
}
function bu(a, r = 1) {
  var i;
  if (!a) return Mo.forEach((s) => bu(s.store.getState(), r));
  (i = a.gl.xr) != null && i.isPresenting || !a.internal.active || a.frameloop === "never" || (r > 1 ? a.internal.frames = Math.min(60, a.internal.frames + r) : vu ? a.internal.frames = 2 : a.internal.frames = 1, la || (la = !0, requestAnimationFrame(Qp)));
}
function Vd(a, r = !0, i, s) {
  if (r && Xi("before", a), i) Au(a, i, s);
  else for (const l of Mo.values()) Au(a, l.store.getState());
  r && Xi("after", a);
}
const Zl = {
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
function zv(a) {
  const {
    handlePointer: r
  } = fv(a);
  return {
    priority: 1,
    enabled: !0,
    compute(i, s, l) {
      s.pointer.set(i.offsetX / s.size.width * 2 - 1, -(i.offsetY / s.size.height) * 2 + 1), s.raycaster.setFromCamera(s.pointer, s.camera);
    },
    connected: void 0,
    handlers: Object.keys(Zl).reduce((i, s) => ({
      ...i,
      [s]: r(s)
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
          const d = l.handlers[c], [h, p] = Zl[c];
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
            const c = s.handlers[l], [d] = Zl[l];
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
function qd(a, r) {
  let i;
  return (...s) => {
    window.clearTimeout(i), i = window.setTimeout(() => a(...s), r);
  };
}
function Jv({ debounce: a, scroll: r, polyfill: i, offsetSize: s } = { debounce: 0, scroll: !1, offsetSize: !1 }) {
  const l = i || (typeof window > "u" ? class {
  } : window.ResizeObserver);
  if (!l) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [c, d] = Fr({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }), h = ui({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: c, orientationHandler: null }), p = a ? typeof a == "number" ? a : a.scroll : null, A = a ? typeof a == "number" ? a : a.resize : null, v = ui(!1);
  fr(() => (v.current = !0, () => {
    v.current = !1;
  }));
  const [g, B, C] = wu(() => {
    const w = () => {
      if (!h.current.element) return;
      const { left: F, top: N, width: U, height: j, bottom: L, right: Q, x: O, y: k } = h.current.element.getBoundingClientRect(), K = { left: F, top: N, width: U, height: j, bottom: L, right: Q, x: O, y: k };
      h.current.element instanceof HTMLElement && s && (K.height = h.current.element.offsetHeight, K.width = h.current.element.offsetWidth), Object.freeze(K), v.current && !Xv(h.current.lastBounds, K) && d(h.current.lastBounds = K);
    };
    return [w, A ? qd(w, A) : w, p ? qd(w, p) : w];
  }, [d, s, p, A]);
  function E() {
    h.current.scrollContainers && (h.current.scrollContainers.forEach((w) => w.removeEventListener("scroll", C, !0)), h.current.scrollContainers = null), h.current.resizeObserver && (h.current.resizeObserver.disconnect(), h.current.resizeObserver = null), h.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", h.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", h.current.orientationHandler));
  }
  function D() {
    h.current.element && (h.current.resizeObserver = new l(C), h.current.resizeObserver.observe(h.current.element), r && h.current.scrollContainers && h.current.scrollContainers.forEach((w) => w.addEventListener("scroll", C, { capture: !0, passive: !0 })), h.current.orientationHandler = () => {
      C();
    }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", h.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", h.current.orientationHandler));
  }
  const R = (w) => {
    !w || w === h.current.element || (E(), h.current.element = w, h.current.scrollContainers = Xp(w), D());
  };
  return Kv(C, !!r), jv(B), fr(() => {
    E(), D();
  }, [r, C, B]), fr(() => E, []), [R, c, g];
}
function jv(a) {
  fr(() => {
    const r = a;
    return window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, [a]);
}
function Kv(a, r) {
  fr(() => {
    if (r) {
      const i = a;
      return window.addEventListener("scroll", i, { capture: !0, passive: !0 }), () => {
        window.removeEventListener("scroll", i, !0);
      };
    }
  }, [a, r]);
}
function Xp(a) {
  const r = [];
  if (!a || a === document.body) return r;
  const { overflow: i, overflowX: s, overflowY: l } = window.getComputedStyle(a);
  return [i, s, l].some((c) => c === "auto" || c === "scroll") && r.push(a), [...r, ...Xp(a.parentElement)];
}
const Qv = ["x", "y", "top", "bottom", "left", "right", "width", "height"], Xv = (a, r) => Qv.every((i) => a[i] === r[i]);
function Yv({
  ref: a,
  children: r,
  fallback: i,
  resize: s,
  style: l,
  gl: c,
  events: d = zv,
  eventSource: h,
  eventPrefix: p,
  shadows: A,
  linear: v,
  flat: g,
  legacy: B,
  orthographic: C,
  frameloop: E,
  dpr: D,
  performance: R,
  raycaster: w,
  camera: F,
  scene: N,
  onPointerMissed: U,
  onCreated: j,
  ...L
}) {
  X.useMemo(() => Up(Te), []);
  const Q = $A(), [O, k] = Jv({
    scroll: !0,
    debounce: {
      scroll: 50,
      resize: 0
    },
    ...s
  }), K = X.useRef(null), ie = X.useRef(null);
  X.useImperativeHandle(a, () => K.current);
  const be = Du(U), [ee, le] = X.useState(!1), [de, J] = X.useState(!1);
  if (ee) throw ee;
  if (de) throw de;
  const ue = X.useRef(null);
  return es(() => {
    const Ae = K.current;
    if (k.width > 0 && k.height > 0 && Ae) {
      ue.current || (ue.current = Gv(Ae));
      async function ce() {
        await ue.current.configure({
          gl: c,
          scene: N,
          events: d,
          shadows: A,
          linear: v,
          flat: g,
          legacy: B,
          orthographic: C,
          frameloop: E,
          dpr: D,
          performance: R,
          raycaster: w,
          camera: F,
          size: k,
          // Pass mutable reference to onPointerMissed so it's free to update
          onPointerMissed: (...Be) => be.current == null ? void 0 : be.current(...Be),
          onCreated: (Be) => {
            Be.events.connect == null || Be.events.connect(h ? VA(h) ? h.current : h : ie.current), p && Be.setEvents({
              compute: (he, Me) => {
                const Fe = he[p + "X"], an = he[p + "Y"];
                Me.pointer.set(Fe / Me.size.width * 2 - 1, -(an / Me.size.height) * 2 + 1), Me.raycaster.setFromCamera(Me.pointer, Me.camera);
              }
            }), j?.(Be);
          }
        }), ue.current.render(/* @__PURE__ */ Ce(Q, {
          children: /* @__PURE__ */ Ce(nv, {
            set: J,
            children: /* @__PURE__ */ Ce(X.Suspense, {
              fallback: /* @__PURE__ */ Ce(ev, {
                set: le
              }),
              children: r ?? null
            })
          })
        }));
      }
      ce();
    }
  }), X.useEffect(() => {
    const Ae = K.current;
    if (Ae) return () => Kp(Ae);
  }, []), /* @__PURE__ */ Ce("div", {
    ref: ie,
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      pointerEvents: h ? "none" : "auto",
      ...l
    },
    ...L,
    children: /* @__PURE__ */ Ce("div", {
      ref: O,
      style: {
        width: "100%",
        height: "100%"
      },
      children: /* @__PURE__ */ Ce("canvas", {
        ref: K,
        style: {
          display: "block"
        },
        children: i
      })
    })
  });
}
function Wv(a) {
  return /* @__PURE__ */ Ce(_p, {
    children: /* @__PURE__ */ Ce(Yv, {
      ...a
    })
  });
}
function wo() {
  return wo = Object.assign ? Object.assign.bind() : function(a) {
    for (var r = 1; r < arguments.length; r++) {
      var i = arguments[r];
      for (var s in i) ({}).hasOwnProperty.call(i, s) && (a[s] = i[s]);
    }
    return a;
  }, wo.apply(null, arguments);
}
const ns = /* @__PURE__ */ new Ke(), Ou = /* @__PURE__ */ new Ke(), Zv = /* @__PURE__ */ new Ke(), $d = /* @__PURE__ */ new $n();
function Vv(a, r, i) {
  const s = ns.setFromMatrixPosition(a.matrixWorld);
  s.project(r);
  const l = i.width / 2, c = i.height / 2;
  return [s.x * l + l, -(s.y * c) + c];
}
function qv(a, r) {
  const i = ns.setFromMatrixPosition(a.matrixWorld), s = Ou.setFromMatrixPosition(r.matrixWorld), l = i.sub(s), c = r.getWorldDirection(Zv);
  return l.angleTo(c) > Math.PI / 2;
}
function $v(a, r, i, s) {
  const l = ns.setFromMatrixPosition(a.matrixWorld), c = l.clone();
  c.project(r), $d.set(c.x, c.y), i.setFromCamera($d, r);
  const d = i.intersectObjects(s, !0);
  if (d.length) {
    const h = d[0].distance;
    return l.distanceTo(i.ray.origin) < h;
  }
  return !0;
}
function eb(a, r) {
  if (r instanceof Eo)
    return r.zoom;
  if (r instanceof ci) {
    const i = ns.setFromMatrixPosition(a.matrixWorld), s = Ou.setFromMatrixPosition(r.matrixWorld), l = r.fov * Math.PI / 180, c = i.distanceTo(s);
    return 1 / (2 * Math.tan(l / 2) * c);
  } else
    return 1;
}
function nb(a, r, i) {
  if (r instanceof ci || r instanceof Eo) {
    const s = ns.setFromMatrixPosition(a.matrixWorld), l = Ou.setFromMatrixPosition(r.matrixWorld), c = s.distanceTo(l), d = (i[1] - i[0]) / (r.far - r.near), h = i[1] - d * r.far;
    return Math.round(d * c + h);
  }
}
const Bu = (a) => Math.abs(a) < 1e-10 ? 0 : a;
function Yp(a, r, i = "") {
  let s = "matrix3d(";
  for (let l = 0; l !== 16; l++)
    s += Bu(r[l] * a.elements[l]) + (l !== 15 ? "," : ")");
  return i + s;
}
const tb = /* @__PURE__ */ ((a) => (r) => Yp(r, a))([1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1]), rb = /* @__PURE__ */ ((a) => (r, i) => Yp(r, a(i), "translate(-50%,-50%)"))((a) => [1 / a, 1 / a, 1 / a, 1, -1 / a, -1 / a, -1 / a, -1, 1 / a, 1 / a, 1 / a, 1, 1, 1, 1, 1]);
function ob(a) {
  return a && typeof a == "object" && "current" in a;
}
const ib = /* @__PURE__ */ X.forwardRef(({
  children: a,
  eps: r = 1e-3,
  style: i,
  className: s,
  prepend: l,
  center: c,
  fullscreen: d,
  portal: h,
  distanceFactor: p,
  sprite: A = !1,
  transform: v = !1,
  occlude: g,
  onOcclude: B,
  castShadow: C,
  receiveShadow: E,
  material: D,
  geometry: R,
  zIndexRange: w = [16777271, 0],
  calculatePosition: F = Vv,
  as: N = "div",
  wrapperClass: U,
  pointerEvents: j = "auto",
  ...L
}, Q) => {
  const {
    gl: O,
    camera: k,
    scene: K,
    size: ie,
    raycaster: be,
    events: ee,
    viewport: le
  } = et(), [de] = X.useState(() => document.createElement(N)), J = X.useRef(null), ue = X.useRef(null), pe = X.useRef(0), Ae = X.useRef([0, 0]), ce = X.useRef(null), Be = X.useRef(null), he = h?.current || ee.connected || O.domElement.parentNode, Me = X.useRef(null), Fe = X.useRef(!1), an = X.useMemo(() => g && g !== "blending" || Array.isArray(g) && g.length && ob(g[0]), [g]);
  X.useLayoutEffect(() => {
    const yn = O.domElement;
    g && g === "blending" ? (yn.style.zIndex = `${Math.floor(w[0] / 2)}`, yn.style.position = "absolute", yn.style.pointerEvents = "none") : (yn.style.zIndex = null, yn.style.position = null, yn.style.pointerEvents = null);
  }, [g]), X.useLayoutEffect(() => {
    if (ue.current) {
      const yn = J.current = Dg.createRoot(de);
      if (K.updateMatrixWorld(), v)
        de.style.cssText = "position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";
      else {
        const Ye = F(ue.current, k, ie);
        de.style.cssText = `position:absolute;top:0;left:0;transform:translate3d(${Ye[0]}px,${Ye[1]}px,0);transform-origin:0 0;`;
      }
      return he && (l ? he.prepend(de) : he.appendChild(de)), () => {
        he && he.removeChild(de), yn.unmount();
      };
    }
  }, [he, v]), X.useLayoutEffect(() => {
    U && (de.className = U);
  }, [U]);
  const xe = X.useMemo(() => v ? {
    position: "absolute",
    top: 0,
    left: 0,
    width: ie.width,
    height: ie.height,
    transformStyle: "preserve-3d",
    pointerEvents: "none"
  } : {
    position: "absolute",
    transform: c ? "translate3d(-50%,-50%,0)" : "none",
    ...d && {
      top: -ie.height / 2,
      left: -ie.width / 2,
      width: ie.width,
      height: ie.height
    },
    ...i
  }, [i, c, d, ie, v]), Pn = X.useMemo(() => ({
    position: "absolute",
    pointerEvents: j
  }), [j]);
  X.useLayoutEffect(() => {
    if (Fe.current = !1, v) {
      var yn;
      (yn = J.current) == null || yn.render(/* @__PURE__ */ X.createElement("div", {
        ref: ce,
        style: xe
      }, /* @__PURE__ */ X.createElement("div", {
        ref: Be,
        style: Pn
      }, /* @__PURE__ */ X.createElement("div", {
        ref: Q,
        className: s,
        style: i,
        children: a
      }))));
    } else {
      var Ye;
      (Ye = J.current) == null || Ye.render(/* @__PURE__ */ X.createElement("div", {
        ref: Q,
        style: xe,
        className: s,
        children: a
      }));
    }
  });
  const dn = X.useRef(!0);
  pa((yn) => {
    if (ue.current) {
      k.updateMatrixWorld(), ue.current.updateWorldMatrix(!0, !1);
      const Ye = v ? Ae.current : F(ue.current, k, ie);
      if (v || Math.abs(pe.current - k.zoom) > r || Math.abs(Ae.current[0] - Ye[0]) > r || Math.abs(Ae.current[1] - Ye[1]) > r) {
        const Fn = qv(ue.current, k);
        let pn = !1;
        an && (Array.isArray(g) ? pn = g.map((vn) => vn.current) : g !== "blending" && (pn = [K]));
        const nt = dn.current;
        if (pn) {
          const vn = $v(ue.current, k, be, pn);
          dn.current = vn && !Fn;
        } else
          dn.current = !Fn;
        nt !== dn.current && (B ? B(!dn.current) : de.style.display = dn.current ? "block" : "none");
        const tt = Math.floor(w[0] / 2), at = g ? an ? [w[0], tt] : [tt - 1, 0] : w;
        if (de.style.zIndex = `${nb(ue.current, k, at)}`, v) {
          const [vn, Pt] = [ie.width / 2, ie.height / 2], Ft = k.projectionMatrix.elements[5] * Pt, {
            isOrthographicCamera: At,
            top: Wt,
            left: lt,
            bottom: ln,
            right: ut
          } = k, Zt = tb(k.matrixWorldInverse), pr = At ? `scale(${Ft})translate(${Bu(-(ut + lt) / 2)}px,${Bu((Wt + ln) / 2)}px)` : `translateZ(${Ft}px)`;
          let Ln = ue.current.matrixWorld;
          A && (Ln = k.matrixWorldInverse.clone().transpose().copyPosition(Ln).scale(ue.current.scale), Ln.elements[3] = Ln.elements[7] = Ln.elements[11] = 0, Ln.elements[15] = 1), de.style.width = ie.width + "px", de.style.height = ie.height + "px", de.style.perspective = At ? "" : `${Ft}px`, ce.current && Be.current && (ce.current.style.transform = `${pr}${Zt}translate(${vn}px,${Pt}px)`, Be.current.style.transform = rb(Ln, 1 / ((p || 10) / 400)));
        } else {
          const vn = p === void 0 ? 1 : eb(ue.current, k) * p;
          de.style.transform = `translate3d(${Ye[0]}px,${Ye[1]}px,0) scale(${vn})`;
        }
        Ae.current = Ye, pe.current = k.zoom;
      }
    }
    if (!an && Me.current && !Fe.current)
      if (v) {
        if (ce.current) {
          const Ye = ce.current.children[0];
          if (Ye != null && Ye.clientWidth && Ye != null && Ye.clientHeight) {
            const {
              isOrthographicCamera: Fn
            } = k;
            if (Fn || R)
              L.scale && (Array.isArray(L.scale) ? L.scale instanceof Ke ? Me.current.scale.copy(L.scale.clone().divideScalar(1)) : Me.current.scale.set(1 / L.scale[0], 1 / L.scale[1], 1 / L.scale[2]) : Me.current.scale.setScalar(1 / L.scale));
            else {
              const pn = (p || 10) / 400, nt = Ye.clientWidth * pn, tt = Ye.clientHeight * pn;
              Me.current.scale.set(nt, tt, 1);
            }
            Fe.current = !0;
          }
        }
      } else {
        const Ye = de.children[0];
        if (Ye != null && Ye.clientWidth && Ye != null && Ye.clientHeight) {
          const Fn = 1 / le.factor, pn = Ye.clientWidth * Fn, nt = Ye.clientHeight * Fn;
          Me.current.scale.set(pn, nt, 1), Fe.current = !0;
        }
        Me.current.lookAt(yn.camera.position);
      }
  });
  const Yn = X.useMemo(() => ({
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
  return /* @__PURE__ */ X.createElement("group", wo({}, L, {
    ref: ue
  }), g && !an && /* @__PURE__ */ X.createElement("mesh", {
    castShadow: C,
    receiveShadow: E,
    ref: Me
  }, R || /* @__PURE__ */ X.createElement("planeGeometry", null), D || /* @__PURE__ */ X.createElement("shaderMaterial", {
    side: Iu,
    vertexShader: Yn.vertexShader,
    fragmentShader: Yn.fragmentShader
  })));
}), ts = parseInt(Gg.replace(/\D+/g, "")), Wp = ts >= 125 ? "uv1" : "uv2";
function ep(a, r) {
  if (r === kg)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), a;
  if (r === uu || r === gp) {
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
      if (r === uu)
        for (let d = 1; d <= s; d++)
          l.push(i.getX(0)), l.push(i.getX(d)), l.push(i.getX(d + 1));
      else
        for (let d = 0; d < s; d++)
          d % 2 === 0 ? (l.push(i.getX(d)), l.push(i.getX(d + 1)), l.push(i.getX(d + 2))) : (l.push(i.getX(d + 2)), l.push(i.getX(d + 1)), l.push(i.getX(d)));
    l.length / 3 !== s && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const c = a.clone();
    return c.setIndex(l), c.clearGroups(), c;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", r), a;
}
var Gt = Uint8Array, qr = Uint16Array, yu = Uint32Array, Zp = new Gt([
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
]), Vp = new Gt([
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
]), sb = new Gt([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), qp = function(a, r) {
  for (var i = new qr(31), s = 0; s < 31; ++s)
    i[s] = r += 1 << a[s - 1];
  for (var l = new yu(i[30]), s = 1; s < 30; ++s)
    for (var c = i[s]; c < i[s + 1]; ++c)
      l[c] = c - i[s] << 5 | s;
  return [i, l];
}, $p = qp(Zp, 2), eh = $p[0], ab = $p[1];
eh[28] = 258, ab[258] = 28;
var lb = qp(Vp, 0), ub = lb[0], Cu = new qr(32768);
for (var fn = 0; fn < 32768; ++fn) {
  var Yr = (fn & 43690) >>> 1 | (fn & 21845) << 1;
  Yr = (Yr & 52428) >>> 2 | (Yr & 13107) << 2, Yr = (Yr & 61680) >>> 4 | (Yr & 3855) << 4, Cu[fn] = ((Yr & 65280) >>> 8 | (Yr & 255) << 8) >>> 1;
}
var Yi = (function(a, r, i) {
  for (var s = a.length, l = 0, c = new qr(r); l < s; ++l)
    ++c[a[l] - 1];
  var d = new qr(r);
  for (l = 0; l < r; ++l)
    d[l] = d[l - 1] + c[l - 1] << 1;
  var h;
  if (i) {
    h = new qr(1 << r);
    var p = 15 - r;
    for (l = 0; l < s; ++l)
      if (a[l])
        for (var A = l << 4 | a[l], v = r - a[l], g = d[a[l] - 1]++ << v, B = g | (1 << v) - 1; g <= B; ++g)
          h[Cu[g] >>> p] = A;
  } else
    for (h = new qr(s), l = 0; l < s; ++l)
      a[l] && (h[l] = Cu[d[a[l] - 1]++] >>> 15 - a[l]);
  return h;
}), rs = new Gt(288);
for (var fn = 0; fn < 144; ++fn)
  rs[fn] = 8;
for (var fn = 144; fn < 256; ++fn)
  rs[fn] = 9;
for (var fn = 256; fn < 280; ++fn)
  rs[fn] = 7;
for (var fn = 280; fn < 288; ++fn)
  rs[fn] = 8;
var nh = new Gt(32);
for (var fn = 0; fn < 32; ++fn)
  nh[fn] = 5;
var cb = /* @__PURE__ */ Yi(rs, 9, 1), fb = /* @__PURE__ */ Yi(nh, 5, 1), Vl = function(a) {
  for (var r = a[0], i = 1; i < a.length; ++i)
    a[i] > r && (r = a[i]);
  return r;
}, Yt = function(a, r, i) {
  var s = r / 8 | 0;
  return (a[s] | a[s + 1] << 8) >> (r & 7) & i;
}, ql = function(a, r) {
  var i = r / 8 | 0;
  return (a[i] | a[i + 1] << 8 | a[i + 2] << 16) >> (r & 7);
}, db = function(a) {
  return (a / 8 | 0) + (a & 7 && 1);
}, pb = function(a, r, i) {
  (i == null || i > a.length) && (i = a.length);
  var s = new (a instanceof qr ? qr : a instanceof yu ? yu : Gt)(i - r);
  return s.set(a.subarray(r, i)), s;
}, hb = function(a, r, i) {
  var s = a.length;
  if (!s || i && !i.l && s < 5)
    return r || new Gt(0);
  var l = !r || i, c = !i || i.i;
  i || (i = {}), r || (r = new Gt(s * 3));
  var d = function(xe) {
    var Pn = r.length;
    if (xe > Pn) {
      var dn = new Gt(Math.max(Pn * 2, xe));
      dn.set(r), r = dn;
    }
  }, h = i.f || 0, p = i.p || 0, A = i.b || 0, v = i.l, g = i.d, B = i.m, C = i.n, E = s * 8;
  do {
    if (!v) {
      i.f = h = Yt(a, p, 1);
      var D = Yt(a, p + 1, 3);
      if (p += 3, D)
        if (D == 1)
          v = cb, g = fb, B = 9, C = 5;
        else if (D == 2) {
          var N = Yt(a, p, 31) + 257, U = Yt(a, p + 10, 15) + 4, j = N + Yt(a, p + 5, 31) + 1;
          p += 14;
          for (var L = new Gt(j), Q = new Gt(19), O = 0; O < U; ++O)
            Q[sb[O]] = Yt(a, p + O * 3, 7);
          p += U * 3;
          for (var k = Vl(Q), K = (1 << k) - 1, ie = Yi(Q, k, 1), O = 0; O < j; ) {
            var be = ie[Yt(a, p, K)];
            p += be & 15;
            var R = be >>> 4;
            if (R < 16)
              L[O++] = R;
            else {
              var ee = 0, le = 0;
              for (R == 16 ? (le = 3 + Yt(a, p, 3), p += 2, ee = L[O - 1]) : R == 17 ? (le = 3 + Yt(a, p, 7), p += 3) : R == 18 && (le = 11 + Yt(a, p, 127), p += 7); le--; )
                L[O++] = ee;
            }
          }
          var de = L.subarray(0, N), J = L.subarray(N);
          B = Vl(de), C = Vl(J), v = Yi(de, B, 1), g = Yi(J, C, 1);
        } else
          throw "invalid block type";
      else {
        var R = db(p) + 4, w = a[R - 4] | a[R - 3] << 8, F = R + w;
        if (F > s) {
          if (c)
            throw "unexpected EOF";
          break;
        }
        l && d(A + w), r.set(a.subarray(R, F), A), i.b = A += w, i.p = p = F * 8;
        continue;
      }
      if (p > E) {
        if (c)
          throw "unexpected EOF";
        break;
      }
    }
    l && d(A + 131072);
    for (var ue = (1 << B) - 1, pe = (1 << C) - 1, Ae = p; ; Ae = p) {
      var ee = v[ql(a, p) & ue], ce = ee >>> 4;
      if (p += ee & 15, p > E) {
        if (c)
          throw "unexpected EOF";
        break;
      }
      if (!ee)
        throw "invalid length/literal";
      if (ce < 256)
        r[A++] = ce;
      else if (ce == 256) {
        Ae = p, v = null;
        break;
      } else {
        var Be = ce - 254;
        if (ce > 264) {
          var O = ce - 257, he = Zp[O];
          Be = Yt(a, p, (1 << he) - 1) + eh[O], p += he;
        }
        var Me = g[ql(a, p) & pe], Fe = Me >>> 4;
        if (!Me)
          throw "invalid distance";
        p += Me & 15;
        var J = ub[Fe];
        if (Fe > 3) {
          var he = Vp[Fe];
          J += ql(a, p) & (1 << he) - 1, p += he;
        }
        if (p > E) {
          if (c)
            throw "unexpected EOF";
          break;
        }
        l && d(A + 131072);
        for (var an = A + Be; A < an; A += 4)
          r[A] = r[A - J], r[A + 1] = r[A + 1 - J], r[A + 2] = r[A + 2 - J], r[A + 3] = r[A + 3 - J];
        A = an;
      }
    }
    i.l = v, i.p = Ae, i.b = A, v && (h = 1, i.m = B, i.d = g, i.n = C);
  } while (!h);
  return A == r.length ? r : pb(r, 0, A);
}, mb = /* @__PURE__ */ new Gt(0), gb = function(a) {
  if ((a[0] & 15) != 8 || a[0] >>> 4 > 7 || (a[0] << 8 | a[1]) % 31)
    throw "invalid zlib data";
  if (a[1] & 32)
    throw "invalid zlib data: preset dictionaries not supported";
};
function js(a, r) {
  return hb((gb(a), a.subarray(2, -4)), r);
}
var Ab = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), vb = 0;
try {
  Ab.decode(mb, { stream: !0 }), vb = 1;
} catch {
}
const bb = (a) => a && a.isCubeTexture;
class Bb extends $i {
  constructor(r, i) {
    var s, l;
    const c = bb(r), h = ((l = c ? (s = r.image[0]) == null ? void 0 : s.width : r.image.width) != null ? l : 1024) / 4, p = Math.floor(Math.log2(h)), A = Math.pow(2, p), v = 3 * Math.max(A, 112), g = 4 * A, B = [
      c ? "#define ENVMAP_TYPE_CUBE" : "",
      `#define CUBEUV_TEXEL_WIDTH ${1 / v}`,
      `#define CUBEUV_TEXEL_HEIGHT ${1 / g}`,
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
            #include <${ts >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
        }
        `, D = {
      map: { value: r },
      height: { value: i?.height || 15 },
      radius: { value: i?.radius || 100 }
    }, R = new Og(1, 16), w = new fa({
      uniforms: D,
      fragmentShader: E,
      vertexShader: C,
      side: Iu
    });
    super(R, w);
  }
  set radius(r) {
    this.material.uniforms.radius.value = r;
  }
  get radius() {
    return this.material.uniforms.radius.value;
  }
  set height(r) {
    this.material.uniforms.height.value = r;
  }
  get height() {
    return this.material.uniforms.height.value;
  }
}
var yb = Object.defineProperty, Cb = (a, r, i) => r in a ? yb(a, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : a[r] = i, Eb = (a, r, i) => (Cb(a, r + "", i), i);
class Sb {
  constructor() {
    Eb(this, "_listeners");
  }
  /**
   * Adds a listener to an event type.
   * @param type The type of event to listen to.
   * @param listener The function that gets called when the event is fired.
   */
  addEventListener(r, i) {
    this._listeners === void 0 && (this._listeners = {});
    const s = this._listeners;
    s[r] === void 0 && (s[r] = []), s[r].indexOf(i) === -1 && s[r].push(i);
  }
  /**
      * Checks if listener is added to an event type.
      * @param type The type of event to listen to.
      * @param listener The function that gets called when the event is fired.
      */
  hasEventListener(r, i) {
    if (this._listeners === void 0)
      return !1;
    const s = this._listeners;
    return s[r] !== void 0 && s[r].indexOf(i) !== -1;
  }
  /**
      * Removes a listener from an event type.
      * @param type The type of the listener that gets removed.
      * @param listener The listener function that gets removed.
      */
  removeEventListener(r, i) {
    if (this._listeners === void 0)
      return;
    const l = this._listeners[r];
    if (l !== void 0) {
      const c = l.indexOf(i);
      c !== -1 && l.splice(c, 1);
    }
  }
  /**
      * Fire an event type.
      * @param event The event that gets fired.
      */
  dispatchEvent(r) {
    if (this._listeners === void 0)
      return;
    const s = this._listeners[r.type];
    if (s !== void 0) {
      r.target = this;
      const l = s.slice(0);
      for (let c = 0, d = l.length; c < d; c++)
        l[c].call(this, r);
      r.target = null;
    }
  }
}
var Mb = Object.defineProperty, wb = (a, r, i) => r in a ? Mb(a, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : a[r] = i, ye = (a, r, i) => (wb(a, typeof r != "symbol" ? r + "" : r, i), i);
const Ks = /* @__PURE__ */ new Pg(), np = /* @__PURE__ */ new Hg(), Ib = Math.cos(70 * (Math.PI / 180)), tp = (a, r) => (a % r + r) % r;
let Tb = class extends Sb {
  constructor(r, i) {
    super(), ye(this, "object"), ye(this, "domElement"), ye(this, "enabled", !0), ye(this, "target", new Ke()), ye(this, "minDistance", 0), ye(this, "maxDistance", 1 / 0), ye(this, "minZoom", 0), ye(this, "maxZoom", 1 / 0), ye(this, "minPolarAngle", 0), ye(this, "maxPolarAngle", Math.PI), ye(this, "minAzimuthAngle", -1 / 0), ye(this, "maxAzimuthAngle", 1 / 0), ye(this, "enableDamping", !1), ye(this, "dampingFactor", 0.05), ye(this, "enableZoom", !0), ye(this, "zoomSpeed", 1), ye(this, "enableRotate", !0), ye(this, "rotateSpeed", 1), ye(this, "enablePan", !0), ye(this, "panSpeed", 1), ye(this, "screenSpacePanning", !0), ye(this, "keyPanSpeed", 7), ye(this, "zoomToCursor", !1), ye(this, "autoRotate", !1), ye(this, "autoRotateSpeed", 2), ye(this, "reverseOrbit", !1), ye(this, "reverseHorizontalOrbit", !1), ye(this, "reverseVerticalOrbit", !1), ye(this, "keys", { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }), ye(this, "mouseButtons", {
      LEFT: ti.ROTATE,
      MIDDLE: ti.DOLLY,
      RIGHT: ti.PAN
    }), ye(this, "touches", { ONE: ri.ROTATE, TWO: ri.DOLLY_PAN }), ye(this, "target0"), ye(this, "position0"), ye(this, "zoom0"), ye(this, "_domElementKeyEvents", null), ye(this, "getPolarAngle"), ye(this, "getAzimuthalAngle"), ye(this, "setPolarAngle"), ye(this, "setAzimuthalAngle"), ye(this, "getDistance"), ye(this, "getZoomScale"), ye(this, "listenToKeyEvents"), ye(this, "stopListenToKeyEvents"), ye(this, "saveState"), ye(this, "reset"), ye(this, "update"), ye(this, "connect"), ye(this, "dispose"), ye(this, "dollyIn"), ye(this, "dollyOut"), ye(this, "getScale"), ye(this, "setScale"), this.object = r, this.domElement = i, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = () => v.phi, this.getAzimuthalAngle = () => v.theta, this.setPolarAngle = (I) => {
      let Z = tp(I, 2 * Math.PI), me = v.phi;
      me < 0 && (me += 2 * Math.PI), Z < 0 && (Z += 2 * Math.PI);
      let Je = Math.abs(Z - me);
      2 * Math.PI - Je < Je && (Z < me ? Z += 2 * Math.PI : me += 2 * Math.PI), g.phi = Z - me, s.update();
    }, this.setAzimuthalAngle = (I) => {
      let Z = tp(I, 2 * Math.PI), me = v.theta;
      me < 0 && (me += 2 * Math.PI), Z < 0 && (Z += 2 * Math.PI);
      let Je = Math.abs(Z - me);
      2 * Math.PI - Je < Je && (Z < me ? Z += 2 * Math.PI : me += 2 * Math.PI), g.theta = Z - me, s.update();
    }, this.getDistance = () => s.object.position.distanceTo(s.target), this.listenToKeyEvents = (I) => {
      I.addEventListener("keydown", Ht), this._domElementKeyEvents = I;
    }, this.stopListenToKeyEvents = () => {
      this._domElementKeyEvents.removeEventListener("keydown", Ht), this._domElementKeyEvents = null;
    }, this.saveState = () => {
      s.target0.copy(s.target), s.position0.copy(s.object.position), s.zoom0 = s.object.zoom;
    }, this.reset = () => {
      s.target.copy(s.target0), s.object.position.copy(s.position0), s.object.zoom = s.zoom0, s.object.updateProjectionMatrix(), s.dispatchEvent(l), s.update(), p = h.NONE;
    }, this.update = (() => {
      const I = new Ke(), Z = new Ke(0, 1, 0), me = new ta().setFromUnitVectors(r.up, Z), Je = me.clone().invert(), ne = new Ke(), Rn = new ta(), rt = 2 * Math.PI;
      return function() {
        const mr = s.object.position;
        me.setFromUnitVectors(r.up, Z), Je.copy(me).invert(), I.copy(mr).sub(s.target), I.applyQuaternion(me), v.setFromVector3(I), s.autoRotate && p === h.NONE && le(be()), s.enableDamping ? (v.theta += g.theta * s.dampingFactor, v.phi += g.phi * s.dampingFactor) : (v.theta += g.theta, v.phi += g.phi);
        let ct = s.minAzimuthAngle, ft = s.maxAzimuthAngle;
        isFinite(ct) && isFinite(ft) && (ct < -Math.PI ? ct += rt : ct > Math.PI && (ct -= rt), ft < -Math.PI ? ft += rt : ft > Math.PI && (ft -= rt), ct <= ft ? v.theta = Math.max(ct, Math.min(ft, v.theta)) : v.theta = v.theta > (ct + ft) / 2 ? Math.max(ct, v.theta) : Math.min(ft, v.theta)), v.phi = Math.max(s.minPolarAngle, Math.min(s.maxPolarAngle, v.phi)), v.makeSafe(), s.enableDamping === !0 ? s.target.addScaledVector(C, s.dampingFactor) : s.target.add(C), s.zoomToCursor && k || s.object.isOrthographicCamera ? v.radius = Me(v.radius) : v.radius = Me(v.radius * B), I.setFromSpherical(v), I.applyQuaternion(Je), mr.copy(s.target).add(I), s.object.matrixAutoUpdate || s.object.updateMatrix(), s.object.lookAt(s.target), s.enableDamping === !0 ? (g.theta *= 1 - s.dampingFactor, g.phi *= 1 - s.dampingFactor, C.multiplyScalar(1 - s.dampingFactor)) : (g.set(0, 0, 0), C.set(0, 0, 0));
        let ot = !1;
        if (s.zoomToCursor && k) {
          let $t = null;
          if (s.object instanceof ci && s.object.isPerspectiveCamera) {
            const er = I.length();
            $t = Me(er * B);
            const Nt = er - $t;
            s.object.position.addScaledVector(Q, Nt), s.object.updateMatrixWorld();
          } else if (s.object.isOrthographicCamera) {
            const er = new Ke(O.x, O.y, 0);
            er.unproject(s.object), s.object.zoom = Math.max(s.minZoom, Math.min(s.maxZoom, s.object.zoom / B)), s.object.updateProjectionMatrix(), ot = !0;
            const Nt = new Ke(O.x, O.y, 0);
            Nt.unproject(s.object), s.object.position.sub(Nt).add(er), s.object.updateMatrixWorld(), $t = I.length();
          } else
            console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), s.zoomToCursor = !1;
          $t !== null && (s.screenSpacePanning ? s.target.set(0, 0, -1).transformDirection(s.object.matrix).multiplyScalar($t).add(s.object.position) : (Ks.origin.copy(s.object.position), Ks.direction.set(0, 0, -1).transformDirection(s.object.matrix), Math.abs(s.object.up.dot(Ks.direction)) < Ib ? r.lookAt(s.target) : (np.setFromNormalAndCoplanarPoint(s.object.up, s.target), Ks.intersectPlane(np, s.target))));
        } else s.object instanceof Eo && s.object.isOrthographicCamera && (ot = B !== 1, ot && (s.object.zoom = Math.max(s.minZoom, Math.min(s.maxZoom, s.object.zoom / B)), s.object.updateProjectionMatrix()));
        return B = 1, k = !1, ot || ne.distanceToSquared(s.object.position) > A || 8 * (1 - Rn.dot(s.object.quaternion)) > A ? (s.dispatchEvent(l), ne.copy(s.object.position), Rn.copy(s.object.quaternion), ot = !1, !0) : !1;
      };
    })(), this.connect = (I) => {
      s.domElement = I, s.domElement.style.touchAction = "none", s.domElement.addEventListener("contextmenu", no), s.domElement.addEventListener("pointerdown", lt), s.domElement.addEventListener("pointercancel", ut), s.domElement.addEventListener("wheel", Ln);
    }, this.dispose = () => {
      var I, Z, me, Je, ne, Rn;
      s.domElement && (s.domElement.style.touchAction = "auto"), (I = s.domElement) == null || I.removeEventListener("contextmenu", no), (Z = s.domElement) == null || Z.removeEventListener("pointerdown", lt), (me = s.domElement) == null || me.removeEventListener("pointercancel", ut), (Je = s.domElement) == null || Je.removeEventListener("wheel", Ln), (ne = s.domElement) == null || ne.ownerDocument.removeEventListener("pointermove", ln), (Rn = s.domElement) == null || Rn.ownerDocument.removeEventListener("pointerup", ut), s._domElementKeyEvents !== null && s._domElementKeyEvents.removeEventListener("keydown", Ht);
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
    const A = 1e-6, v = new Sd(), g = new Sd();
    let B = 1;
    const C = new Ke(), E = new $n(), D = new $n(), R = new $n(), w = new $n(), F = new $n(), N = new $n(), U = new $n(), j = new $n(), L = new $n(), Q = new Ke(), O = new $n();
    let k = !1;
    const K = [], ie = {};
    function be() {
      return 2 * Math.PI / 60 / 60 * s.autoRotateSpeed;
    }
    function ee() {
      return Math.pow(0.95, s.zoomSpeed);
    }
    function le(I) {
      s.reverseOrbit || s.reverseHorizontalOrbit ? g.theta += I : g.theta -= I;
    }
    function de(I) {
      s.reverseOrbit || s.reverseVerticalOrbit ? g.phi += I : g.phi -= I;
    }
    const J = (() => {
      const I = new Ke();
      return function(me, Je) {
        I.setFromMatrixColumn(Je, 0), I.multiplyScalar(-me), C.add(I);
      };
    })(), ue = (() => {
      const I = new Ke();
      return function(me, Je) {
        s.screenSpacePanning === !0 ? I.setFromMatrixColumn(Je, 1) : (I.setFromMatrixColumn(Je, 0), I.crossVectors(s.object.up, I)), I.multiplyScalar(me), C.add(I);
      };
    })(), pe = (() => {
      const I = new Ke();
      return function(me, Je) {
        const ne = s.domElement;
        if (ne && s.object instanceof ci && s.object.isPerspectiveCamera) {
          const Rn = s.object.position;
          I.copy(Rn).sub(s.target);
          let rt = I.length();
          rt *= Math.tan(s.object.fov / 2 * Math.PI / 180), J(2 * me * rt / ne.clientHeight, s.object.matrix), ue(2 * Je * rt / ne.clientHeight, s.object.matrix);
        } else ne && s.object instanceof Eo && s.object.isOrthographicCamera ? (J(
          me * (s.object.right - s.object.left) / s.object.zoom / ne.clientWidth,
          s.object.matrix
        ), ue(
          Je * (s.object.top - s.object.bottom) / s.object.zoom / ne.clientHeight,
          s.object.matrix
        )) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), s.enablePan = !1);
      };
    })();
    function Ae(I) {
      s.object instanceof ci && s.object.isPerspectiveCamera || s.object instanceof Eo && s.object.isOrthographicCamera ? B = I : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), s.enableZoom = !1);
    }
    function ce(I) {
      Ae(B / I);
    }
    function Be(I) {
      Ae(B * I);
    }
    function he(I) {
      if (!s.zoomToCursor || !s.domElement)
        return;
      k = !0;
      const Z = s.domElement.getBoundingClientRect(), me = I.clientX - Z.left, Je = I.clientY - Z.top, ne = Z.width, Rn = Z.height;
      O.x = me / ne * 2 - 1, O.y = -(Je / Rn) * 2 + 1, Q.set(O.x, O.y, 1).unproject(s.object).sub(s.object.position).normalize();
    }
    function Me(I) {
      return Math.max(s.minDistance, Math.min(s.maxDistance, I));
    }
    function Fe(I) {
      E.set(I.clientX, I.clientY);
    }
    function an(I) {
      he(I), U.set(I.clientX, I.clientY);
    }
    function xe(I) {
      w.set(I.clientX, I.clientY);
    }
    function Pn(I) {
      D.set(I.clientX, I.clientY), R.subVectors(D, E).multiplyScalar(s.rotateSpeed);
      const Z = s.domElement;
      Z && (le(2 * Math.PI * R.x / Z.clientHeight), de(2 * Math.PI * R.y / Z.clientHeight)), E.copy(D), s.update();
    }
    function dn(I) {
      j.set(I.clientX, I.clientY), L.subVectors(j, U), L.y > 0 ? ce(ee()) : L.y < 0 && Be(ee()), U.copy(j), s.update();
    }
    function Yn(I) {
      F.set(I.clientX, I.clientY), N.subVectors(F, w).multiplyScalar(s.panSpeed), pe(N.x, N.y), w.copy(F), s.update();
    }
    function yn(I) {
      he(I), I.deltaY < 0 ? Be(ee()) : I.deltaY > 0 && ce(ee()), s.update();
    }
    function Ye(I) {
      let Z = !1;
      switch (I.code) {
        case s.keys.UP:
          pe(0, s.keyPanSpeed), Z = !0;
          break;
        case s.keys.BOTTOM:
          pe(0, -s.keyPanSpeed), Z = !0;
          break;
        case s.keys.LEFT:
          pe(s.keyPanSpeed, 0), Z = !0;
          break;
        case s.keys.RIGHT:
          pe(-s.keyPanSpeed, 0), Z = !0;
          break;
      }
      Z && (I.preventDefault(), s.update());
    }
    function Fn() {
      if (K.length == 1)
        E.set(K[0].pageX, K[0].pageY);
      else {
        const I = 0.5 * (K[0].pageX + K[1].pageX), Z = 0.5 * (K[0].pageY + K[1].pageY);
        E.set(I, Z);
      }
    }
    function pn() {
      if (K.length == 1)
        w.set(K[0].pageX, K[0].pageY);
      else {
        const I = 0.5 * (K[0].pageX + K[1].pageX), Z = 0.5 * (K[0].pageY + K[1].pageY);
        w.set(I, Z);
      }
    }
    function nt() {
      const I = K[0].pageX - K[1].pageX, Z = K[0].pageY - K[1].pageY, me = Math.sqrt(I * I + Z * Z);
      U.set(0, me);
    }
    function tt() {
      s.enableZoom && nt(), s.enablePan && pn();
    }
    function at() {
      s.enableZoom && nt(), s.enableRotate && Fn();
    }
    function vn(I) {
      if (K.length == 1)
        D.set(I.pageX, I.pageY);
      else {
        const me = hr(I), Je = 0.5 * (I.pageX + me.x), ne = 0.5 * (I.pageY + me.y);
        D.set(Je, ne);
      }
      R.subVectors(D, E).multiplyScalar(s.rotateSpeed);
      const Z = s.domElement;
      Z && (le(2 * Math.PI * R.x / Z.clientHeight), de(2 * Math.PI * R.y / Z.clientHeight)), E.copy(D);
    }
    function Pt(I) {
      if (K.length == 1)
        F.set(I.pageX, I.pageY);
      else {
        const Z = hr(I), me = 0.5 * (I.pageX + Z.x), Je = 0.5 * (I.pageY + Z.y);
        F.set(me, Je);
      }
      N.subVectors(F, w).multiplyScalar(s.panSpeed), pe(N.x, N.y), w.copy(F);
    }
    function Ft(I) {
      const Z = hr(I), me = I.pageX - Z.x, Je = I.pageY - Z.y, ne = Math.sqrt(me * me + Je * Je);
      j.set(0, ne), L.set(0, Math.pow(j.y / U.y, s.zoomSpeed)), ce(L.y), U.copy(j);
    }
    function At(I) {
      s.enableZoom && Ft(I), s.enablePan && Pt(I);
    }
    function Wt(I) {
      s.enableZoom && Ft(I), s.enableRotate && vn(I);
    }
    function lt(I) {
      var Z, me;
      s.enabled !== !1 && (K.length === 0 && ((Z = s.domElement) == null || Z.ownerDocument.addEventListener("pointermove", ln), (me = s.domElement) == null || me.ownerDocument.addEventListener("pointerup", ut)), Io(I), I.pointerType === "touch" ? Hn(I) : Zt(I));
    }
    function ln(I) {
      s.enabled !== !1 && (I.pointerType === "touch" ? Vt(I) : pr(I));
    }
    function ut(I) {
      var Z, me, Je;
      qt(I), K.length === 0 && ((Z = s.domElement) == null || Z.releasePointerCapture(I.pointerId), (me = s.domElement) == null || me.ownerDocument.removeEventListener("pointermove", ln), (Je = s.domElement) == null || Je.ownerDocument.removeEventListener("pointerup", ut)), s.dispatchEvent(d), p = h.NONE;
    }
    function Zt(I) {
      let Z;
      switch (I.button) {
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
        case ti.DOLLY:
          if (s.enableZoom === !1)
            return;
          an(I), p = h.DOLLY;
          break;
        case ti.ROTATE:
          if (I.ctrlKey || I.metaKey || I.shiftKey) {
            if (s.enablePan === !1)
              return;
            xe(I), p = h.PAN;
          } else {
            if (s.enableRotate === !1)
              return;
            Fe(I), p = h.ROTATE;
          }
          break;
        case ti.PAN:
          if (I.ctrlKey || I.metaKey || I.shiftKey) {
            if (s.enableRotate === !1)
              return;
            Fe(I), p = h.ROTATE;
          } else {
            if (s.enablePan === !1)
              return;
            xe(I), p = h.PAN;
          }
          break;
        default:
          p = h.NONE;
      }
      p !== h.NONE && s.dispatchEvent(c);
    }
    function pr(I) {
      if (s.enabled !== !1)
        switch (p) {
          case h.ROTATE:
            if (s.enableRotate === !1)
              return;
            Pn(I);
            break;
          case h.DOLLY:
            if (s.enableZoom === !1)
              return;
            dn(I);
            break;
          case h.PAN:
            if (s.enablePan === !1)
              return;
            Yn(I);
            break;
        }
    }
    function Ln(I) {
      s.enabled === !1 || s.enableZoom === !1 || p !== h.NONE && p !== h.ROTATE || (I.preventDefault(), s.dispatchEvent(c), yn(I), s.dispatchEvent(d));
    }
    function Ht(I) {
      s.enabled === !1 || s.enablePan === !1 || Ye(I);
    }
    function Hn(I) {
      switch (Cn(I), K.length) {
        case 1:
          switch (s.touches.ONE) {
            case ri.ROTATE:
              if (s.enableRotate === !1)
                return;
              Fn(), p = h.TOUCH_ROTATE;
              break;
            case ri.PAN:
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
            case ri.DOLLY_PAN:
              if (s.enableZoom === !1 && s.enablePan === !1)
                return;
              tt(), p = h.TOUCH_DOLLY_PAN;
              break;
            case ri.DOLLY_ROTATE:
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
    function Vt(I) {
      switch (Cn(I), p) {
        case h.TOUCH_ROTATE:
          if (s.enableRotate === !1)
            return;
          vn(I), s.update();
          break;
        case h.TOUCH_PAN:
          if (s.enablePan === !1)
            return;
          Pt(I), s.update();
          break;
        case h.TOUCH_DOLLY_PAN:
          if (s.enableZoom === !1 && s.enablePan === !1)
            return;
          At(I), s.update();
          break;
        case h.TOUCH_DOLLY_ROTATE:
          if (s.enableZoom === !1 && s.enableRotate === !1)
            return;
          Wt(I), s.update();
          break;
        default:
          p = h.NONE;
      }
    }
    function no(I) {
      s.enabled !== !1 && I.preventDefault();
    }
    function Io(I) {
      K.push(I);
    }
    function qt(I) {
      delete ie[I.pointerId];
      for (let Z = 0; Z < K.length; Z++)
        if (K[Z].pointerId == I.pointerId) {
          K.splice(Z, 1);
          return;
        }
    }
    function Cn(I) {
      let Z = ie[I.pointerId];
      Z === void 0 && (Z = new $n(), ie[I.pointerId] = Z), Z.set(I.pageX, I.pageY);
    }
    function hr(I) {
      const Z = I.pointerId === K[0].pointerId ? K[1] : K[0];
      return ie[Z.pointerId];
    }
    this.dollyIn = (I = ee()) => {
      Be(I), s.update();
    }, this.dollyOut = (I = ee()) => {
      ce(I), s.update();
    }, this.getScale = () => B, this.setScale = (I) => {
      Ae(I), s.update();
    }, this.getZoomScale = () => ee(), i !== void 0 && this.connect(i), this.update();
  }
};
function ua(a) {
  if (typeof TextDecoder < "u")
    return new TextDecoder().decode(a);
  let r = "";
  for (let i = 0, s = a.length; i < s; i++)
    r += String.fromCharCode(a[i]);
  try {
    return decodeURIComponent(escape(r));
  } catch {
    return r;
  }
}
const Co = "srgb", Dr = "srgb-linear", rp = 3001, Fb = 3e3;
class Pu extends Tu {
  constructor(r) {
    super(r), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(i) {
      return new Lb(i);
    }), this.register(function(i) {
      return new Gb(i);
    }), this.register(function(i) {
      return new jb(i);
    }), this.register(function(i) {
      return new Kb(i);
    }), this.register(function(i) {
      return new Qb(i);
    }), this.register(function(i) {
      return new Ob(i);
    }), this.register(function(i) {
      return new Pb(i);
    }), this.register(function(i) {
      return new Hb(i);
    }), this.register(function(i) {
      return new Nb(i);
    }), this.register(function(i) {
      return new Db(i);
    }), this.register(function(i) {
      return new Ub(i);
    }), this.register(function(i) {
      return new kb(i);
    }), this.register(function(i) {
      return new Jb(i);
    }), this.register(function(i) {
      return new zb(i);
    }), this.register(function(i) {
      return new xb(i);
    }), this.register(function(i) {
      return new Xb(i);
    }), this.register(function(i) {
      return new Yb(i);
    });
  }
  load(r, i, s, l) {
    const c = this;
    let d;
    if (this.resourcePath !== "")
      d = this.resourcePath;
    else if (this.path !== "") {
      const A = Ki.extractUrlBase(r);
      d = Ki.resolveURL(A, this.path);
    } else
      d = Ki.extractUrlBase(r);
    this.manager.itemStart(r);
    const h = function(A) {
      l ? l(A) : console.error(A), c.manager.itemError(r), c.manager.itemEnd(r);
    }, p = new $r(this.manager);
    p.setPath(this.path), p.setResponseType("arraybuffer"), p.setRequestHeader(this.requestHeader), p.setWithCredentials(this.withCredentials), p.load(
      r,
      function(A) {
        try {
          c.parse(
            A,
            d,
            function(v) {
              i(v), c.manager.itemEnd(r);
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
  setDRACOLoader(r) {
    return this.dracoLoader = r, this;
  }
  setDDSLoader() {
    throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".');
  }
  setKTX2Loader(r) {
    return this.ktx2Loader = r, this;
  }
  setMeshoptDecoder(r) {
    return this.meshoptDecoder = r, this;
  }
  register(r) {
    return this.pluginCallbacks.indexOf(r) === -1 && this.pluginCallbacks.push(r), this;
  }
  unregister(r) {
    return this.pluginCallbacks.indexOf(r) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(r), 1), this;
  }
  parse(r, i, s, l) {
    let c;
    const d = {}, h = {};
    if (typeof r == "string")
      c = JSON.parse(r);
    else if (r instanceof ArrayBuffer)
      if (ua(new Uint8Array(r.slice(0, 4))) === th) {
        try {
          d[ze.KHR_BINARY_GLTF] = new Wb(r);
        } catch (v) {
          l && l(v);
          return;
        }
        c = JSON.parse(d[ze.KHR_BINARY_GLTF].content);
      } else
        c = JSON.parse(ua(new Uint8Array(r)));
    else
      c = r;
    if (c.asset === void 0 || c.asset.version[0] < 2) {
      l && l(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const p = new lB(c, {
      path: i || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    p.fileLoader.setRequestHeader(this.requestHeader);
    for (let A = 0; A < this.pluginCallbacks.length; A++) {
      const v = this.pluginCallbacks[A](p);
      v.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), h[v.name] = v, d[v.name] = !0;
    }
    if (c.extensionsUsed)
      for (let A = 0; A < c.extensionsUsed.length; ++A) {
        const v = c.extensionsUsed[A], g = c.extensionsRequired || [];
        switch (v) {
          case ze.KHR_MATERIALS_UNLIT:
            d[v] = new _b();
            break;
          case ze.KHR_DRACO_MESH_COMPRESSION:
            d[v] = new Zb(c, this.dracoLoader);
            break;
          case ze.KHR_TEXTURE_TRANSFORM:
            d[v] = new Vb();
            break;
          case ze.KHR_MESH_QUANTIZATION:
            d[v] = new qb();
            break;
          default:
            g.indexOf(v) >= 0 && h[v] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + v + '".');
        }
      }
    p.setExtensions(d), p.setPlugins(h), p.parse(s, l);
  }
  parseAsync(r, i) {
    const s = this;
    return new Promise(function(l, c) {
      s.parse(r, i, l, c);
    });
  }
}
function Rb() {
  let a = {};
  return {
    get: function(r) {
      return a[r];
    },
    add: function(r, i) {
      a[r] = i;
    },
    remove: function(r) {
      delete a[r];
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
class xb {
  constructor(r) {
    this.parser = r, this.name = ze.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const r = this.parser, i = this.parser.json.nodes || [];
    for (let s = 0, l = i.length; s < l; s++) {
      const c = i[s];
      c.extensions && c.extensions[this.name] && c.extensions[this.name].light !== void 0 && r._addNodeRef(this.cache, c.extensions[this.name].light);
    }
  }
  _loadLight(r) {
    const i = this.parser, s = "light:" + r;
    let l = i.cache.get(s);
    if (l)
      return l;
    const c = i.json, p = ((c.extensions && c.extensions[this.name] || {}).lights || [])[r];
    let A;
    const v = new eo(16777215);
    p.color !== void 0 && v.setRGB(p.color[0], p.color[1], p.color[2], Dr);
    const g = p.range !== void 0 ? p.range : 0;
    switch (p.type) {
      case "directional":
        A = new zg(v), A.target.position.set(0, 0, -1), A.add(A.target);
        break;
      case "point":
        A = new Ug(v), A.distance = g;
        break;
      case "spot":
        A = new Ng(v), A.distance = g, p.spot = p.spot || {}, p.spot.innerConeAngle = p.spot.innerConeAngle !== void 0 ? p.spot.innerConeAngle : 0, p.spot.outerConeAngle = p.spot.outerConeAngle !== void 0 ? p.spot.outerConeAngle : Math.PI / 4, A.angle = p.spot.outerConeAngle, A.penumbra = 1 - p.spot.innerConeAngle / p.spot.outerConeAngle, A.target.position.set(0, 0, -1), A.add(A.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + p.type);
    }
    return A.position.set(0, 0, 0), A.decay = 2, Rr(A, p), p.intensity !== void 0 && (A.intensity = p.intensity), A.name = i.createUniqueName(p.name || "light_" + r), l = Promise.resolve(A), i.cache.add(s, l), l;
  }
  getDependency(r, i) {
    if (r === "light")
      return this._loadLight(i);
  }
  createNodeAttachment(r) {
    const i = this, s = this.parser, c = s.json.nodes[r], h = (c.extensions && c.extensions[this.name] || {}).light;
    return h === void 0 ? null : this._loadLight(h).then(function(p) {
      return s._getNodeRef(i.cache, h, p);
    });
  }
}
class _b {
  constructor() {
    this.name = ze.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return ai;
  }
  extendParams(r, i, s) {
    const l = [];
    r.color = new eo(1, 1, 1), r.opacity = 1;
    const c = i.pbrMetallicRoughness;
    if (c) {
      if (Array.isArray(c.baseColorFactor)) {
        const d = c.baseColorFactor;
        r.color.setRGB(d[0], d[1], d[2], Dr), r.opacity = d[3];
      }
      c.baseColorTexture !== void 0 && l.push(s.assignTexture(r, "map", c.baseColorTexture, Co));
    }
    return Promise.all(l);
  }
}
class Db {
  constructor(r) {
    this.parser = r, this.name = ze.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(r, i) {
    const l = this.parser.json.materials[r];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const c = l.extensions[this.name].emissiveStrength;
    return c !== void 0 && (i.emissiveIntensity = c), Promise.resolve();
  }
}
class Lb {
  constructor(r) {
    this.parser = r, this.name = ze.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(r) {
    const s = this.parser.json.materials[r];
    return !s.extensions || !s.extensions[this.name] ? null : dr;
  }
  extendMaterialParams(r, i) {
    const s = this.parser, l = s.json.materials[r];
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
class Gb {
  constructor(r) {
    this.parser = r, this.name = ze.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(r) {
    const s = this.parser.json.materials[r];
    return !s.extensions || !s.extensions[this.name] ? null : dr;
  }
  extendMaterialParams(r, i) {
    const l = this.parser.json.materials[r];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const c = l.extensions[this.name];
    return i.dispersion = c.dispersion !== void 0 ? c.dispersion : 0, Promise.resolve();
  }
}
class kb {
  constructor(r) {
    this.parser = r, this.name = ze.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(r) {
    const s = this.parser.json.materials[r];
    return !s.extensions || !s.extensions[this.name] ? null : dr;
  }
  extendMaterialParams(r, i) {
    const s = this.parser, l = s.json.materials[r];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const c = [], d = l.extensions[this.name];
    return d.iridescenceFactor !== void 0 && (i.iridescence = d.iridescenceFactor), d.iridescenceTexture !== void 0 && c.push(s.assignTexture(i, "iridescenceMap", d.iridescenceTexture)), d.iridescenceIor !== void 0 && (i.iridescenceIOR = d.iridescenceIor), i.iridescenceThicknessRange === void 0 && (i.iridescenceThicknessRange = [100, 400]), d.iridescenceThicknessMinimum !== void 0 && (i.iridescenceThicknessRange[0] = d.iridescenceThicknessMinimum), d.iridescenceThicknessMaximum !== void 0 && (i.iridescenceThicknessRange[1] = d.iridescenceThicknessMaximum), d.iridescenceThicknessTexture !== void 0 && c.push(
      s.assignTexture(i, "iridescenceThicknessMap", d.iridescenceThicknessTexture)
    ), Promise.all(c);
  }
}
class Ob {
  constructor(r) {
    this.parser = r, this.name = ze.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(r) {
    const s = this.parser.json.materials[r];
    return !s.extensions || !s.extensions[this.name] ? null : dr;
  }
  extendMaterialParams(r, i) {
    const s = this.parser, l = s.json.materials[r];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const c = [];
    i.sheenColor = new eo(0, 0, 0), i.sheenRoughness = 0, i.sheen = 1;
    const d = l.extensions[this.name];
    if (d.sheenColorFactor !== void 0) {
      const h = d.sheenColorFactor;
      i.sheenColor.setRGB(h[0], h[1], h[2], Dr);
    }
    return d.sheenRoughnessFactor !== void 0 && (i.sheenRoughness = d.sheenRoughnessFactor), d.sheenColorTexture !== void 0 && c.push(s.assignTexture(i, "sheenColorMap", d.sheenColorTexture, Co)), d.sheenRoughnessTexture !== void 0 && c.push(s.assignTexture(i, "sheenRoughnessMap", d.sheenRoughnessTexture)), Promise.all(c);
  }
}
class Pb {
  constructor(r) {
    this.parser = r, this.name = ze.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(r) {
    const s = this.parser.json.materials[r];
    return !s.extensions || !s.extensions[this.name] ? null : dr;
  }
  extendMaterialParams(r, i) {
    const s = this.parser, l = s.json.materials[r];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const c = [], d = l.extensions[this.name];
    return d.transmissionFactor !== void 0 && (i.transmission = d.transmissionFactor), d.transmissionTexture !== void 0 && c.push(s.assignTexture(i, "transmissionMap", d.transmissionTexture)), Promise.all(c);
  }
}
class Hb {
  constructor(r) {
    this.parser = r, this.name = ze.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(r) {
    const s = this.parser.json.materials[r];
    return !s.extensions || !s.extensions[this.name] ? null : dr;
  }
  extendMaterialParams(r, i) {
    const s = this.parser, l = s.json.materials[r];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const c = [], d = l.extensions[this.name];
    i.thickness = d.thicknessFactor !== void 0 ? d.thicknessFactor : 0, d.thicknessTexture !== void 0 && c.push(s.assignTexture(i, "thicknessMap", d.thicknessTexture)), i.attenuationDistance = d.attenuationDistance || 1 / 0;
    const h = d.attenuationColor || [1, 1, 1];
    return i.attenuationColor = new eo().setRGB(
      h[0],
      h[1],
      h[2],
      Dr
    ), Promise.all(c);
  }
}
class Nb {
  constructor(r) {
    this.parser = r, this.name = ze.KHR_MATERIALS_IOR;
  }
  getMaterialType(r) {
    const s = this.parser.json.materials[r];
    return !s.extensions || !s.extensions[this.name] ? null : dr;
  }
  extendMaterialParams(r, i) {
    const l = this.parser.json.materials[r];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const c = l.extensions[this.name];
    return i.ior = c.ior !== void 0 ? c.ior : 1.5, Promise.resolve();
  }
}
class Ub {
  constructor(r) {
    this.parser = r, this.name = ze.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(r) {
    const s = this.parser.json.materials[r];
    return !s.extensions || !s.extensions[this.name] ? null : dr;
  }
  extendMaterialParams(r, i) {
    const s = this.parser, l = s.json.materials[r];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const c = [], d = l.extensions[this.name];
    i.specularIntensity = d.specularFactor !== void 0 ? d.specularFactor : 1, d.specularTexture !== void 0 && c.push(s.assignTexture(i, "specularIntensityMap", d.specularTexture));
    const h = d.specularColorFactor || [1, 1, 1];
    return i.specularColor = new eo().setRGB(h[0], h[1], h[2], Dr), d.specularColorTexture !== void 0 && c.push(
      s.assignTexture(i, "specularColorMap", d.specularColorTexture, Co)
    ), Promise.all(c);
  }
}
class zb {
  constructor(r) {
    this.parser = r, this.name = ze.EXT_MATERIALS_BUMP;
  }
  getMaterialType(r) {
    const s = this.parser.json.materials[r];
    return !s.extensions || !s.extensions[this.name] ? null : dr;
  }
  extendMaterialParams(r, i) {
    const s = this.parser, l = s.json.materials[r];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const c = [], d = l.extensions[this.name];
    return i.bumpScale = d.bumpFactor !== void 0 ? d.bumpFactor : 1, d.bumpTexture !== void 0 && c.push(s.assignTexture(i, "bumpMap", d.bumpTexture)), Promise.all(c);
  }
}
class Jb {
  constructor(r) {
    this.parser = r, this.name = ze.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(r) {
    const s = this.parser.json.materials[r];
    return !s.extensions || !s.extensions[this.name] ? null : dr;
  }
  extendMaterialParams(r, i) {
    const s = this.parser, l = s.json.materials[r];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const c = [], d = l.extensions[this.name];
    return d.anisotropyStrength !== void 0 && (i.anisotropy = d.anisotropyStrength), d.anisotropyRotation !== void 0 && (i.anisotropyRotation = d.anisotropyRotation), d.anisotropyTexture !== void 0 && c.push(s.assignTexture(i, "anisotropyMap", d.anisotropyTexture)), Promise.all(c);
  }
}
class jb {
  constructor(r) {
    this.parser = r, this.name = ze.KHR_TEXTURE_BASISU;
  }
  loadTexture(r) {
    const i = this.parser, s = i.json, l = s.textures[r];
    if (!l.extensions || !l.extensions[this.name])
      return null;
    const c = l.extensions[this.name], d = i.options.ktx2Loader;
    if (!d) {
      if (s.extensionsRequired && s.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return i.loadTextureImage(r, c.source, d);
  }
}
class Kb {
  constructor(r) {
    this.parser = r, this.name = ze.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(r) {
    const i = this.name, s = this.parser, l = s.json, c = l.textures[r];
    if (!c.extensions || !c.extensions[i])
      return null;
    const d = c.extensions[i], h = l.images[d.source];
    let p = s.textureLoader;
    if (h.uri) {
      const A = s.options.manager.getHandler(h.uri);
      A !== null && (p = A);
    }
    return this.detectSupport().then(function(A) {
      if (A)
        return s.loadTextureImage(r, d.source, p);
      if (l.extensionsRequired && l.extensionsRequired.indexOf(i) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return s.loadTexture(r);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(r) {
      const i = new Image();
      i.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", i.onload = i.onerror = function() {
        r(i.height === 1);
      };
    })), this.isSupported;
  }
}
class Qb {
  constructor(r) {
    this.parser = r, this.name = ze.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(r) {
    const i = this.name, s = this.parser, l = s.json, c = l.textures[r];
    if (!c.extensions || !c.extensions[i])
      return null;
    const d = c.extensions[i], h = l.images[d.source];
    let p = s.textureLoader;
    if (h.uri) {
      const A = s.options.manager.getHandler(h.uri);
      A !== null && (p = A);
    }
    return this.detectSupport().then(function(A) {
      if (A)
        return s.loadTextureImage(r, d.source, p);
      if (l.extensionsRequired && l.extensionsRequired.indexOf(i) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return s.loadTexture(r);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(r) {
      const i = new Image();
      i.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", i.onload = i.onerror = function() {
        r(i.height === 1);
      };
    })), this.isSupported;
  }
}
class Xb {
  constructor(r) {
    this.name = ze.EXT_MESHOPT_COMPRESSION, this.parser = r;
  }
  loadBufferView(r) {
    const i = this.parser.json, s = i.bufferViews[r];
    if (s.extensions && s.extensions[this.name]) {
      const l = s.extensions[this.name], c = this.parser.getDependency("buffer", l.buffer), d = this.parser.options.meshoptDecoder;
      if (!d || !d.supported) {
        if (i.extensionsRequired && i.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return c.then(function(h) {
        const p = l.byteOffset || 0, A = l.byteLength || 0, v = l.count, g = l.byteStride, B = new Uint8Array(h, p, A);
        return d.decodeGltfBufferAsync ? d.decodeGltfBufferAsync(v, g, B, l.mode, l.filter).then(function(C) {
          return C.buffer;
        }) : d.ready.then(function() {
          const C = new ArrayBuffer(v * g);
          return d.decodeGltfBuffer(
            new Uint8Array(C),
            v,
            g,
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
class Yb {
  constructor(r) {
    this.name = ze.EXT_MESH_GPU_INSTANCING, this.parser = r;
  }
  createNodeMesh(r) {
    const i = this.parser.json, s = i.nodes[r];
    if (!s.extensions || !s.extensions[this.name] || s.mesh === void 0)
      return null;
    const l = i.meshes[s.mesh];
    for (const A of l.primitives)
      if (A.mode !== Lt.TRIANGLES && A.mode !== Lt.TRIANGLE_STRIP && A.mode !== Lt.TRIANGLE_FAN && A.mode !== void 0)
        return null;
    const d = s.extensions[this.name].attributes, h = [], p = {};
    for (const A in d)
      h.push(
        this.parser.getDependency("accessor", d[A]).then((v) => (p[A] = v, p[A]))
      );
    return h.length < 1 ? null : (h.push(this.parser.createNodeMesh(r)), Promise.all(h).then((A) => {
      const v = A.pop(), g = v.isGroup ? v.children : [v], B = A[0].count, C = [];
      for (const E of g) {
        const D = new Wi(), R = new Ke(), w = new ta(), F = new Ke(1, 1, 1), N = new Jg(E.geometry, E.material, B);
        for (let U = 0; U < B; U++)
          p.TRANSLATION && R.fromBufferAttribute(p.TRANSLATION, U), p.ROTATION && w.fromBufferAttribute(p.ROTATION, U), p.SCALE && F.fromBufferAttribute(p.SCALE, U), N.setMatrixAt(U, D.compose(R, w, F));
        for (const U in p)
          if (U === "_COLOR_0") {
            const j = p[U];
            N.instanceColor = new jg(j.array, j.itemSize, j.normalized);
          } else U !== "TRANSLATION" && U !== "ROTATION" && U !== "SCALE" && E.geometry.setAttribute(U, p[U]);
        Ap.prototype.copy.call(N, E), this.parser.assignFinalMaterial(N), C.push(N);
      }
      return v.isGroup ? (v.clear(), v.add(...C), v) : C[0];
    }));
  }
}
const th = "glTF", Ui = 12, op = { JSON: 1313821514, BIN: 5130562 };
class Wb {
  constructor(r) {
    this.name = ze.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const i = new DataView(r, 0, Ui);
    if (this.header = {
      magic: ua(new Uint8Array(r.slice(0, 4))),
      version: i.getUint32(4, !0),
      length: i.getUint32(8, !0)
    }, this.header.magic !== th)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const s = this.header.length - Ui, l = new DataView(r, Ui);
    let c = 0;
    for (; c < s; ) {
      const d = l.getUint32(c, !0);
      c += 4;
      const h = l.getUint32(c, !0);
      if (c += 4, h === op.JSON) {
        const p = new Uint8Array(r, Ui + c, d);
        this.content = ua(p);
      } else if (h === op.BIN) {
        const p = Ui + c;
        this.body = r.slice(p, p + d);
      }
      c += d;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class Zb {
  constructor(r, i) {
    if (!i)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = ze.KHR_DRACO_MESH_COMPRESSION, this.json = r, this.dracoLoader = i, this.dracoLoader.preload();
  }
  decodePrimitive(r, i) {
    const s = this.json, l = this.dracoLoader, c = r.extensions[this.name].bufferView, d = r.extensions[this.name].attributes, h = {}, p = {}, A = {};
    for (const v in d) {
      const g = Eu[v] || v.toLowerCase();
      h[g] = d[v];
    }
    for (const v in r.attributes) {
      const g = Eu[v] || v.toLowerCase();
      if (d[v] !== void 0) {
        const B = s.accessors[r.attributes[v]], C = fi[B.componentType];
        A[g] = C.name, p[g] = B.normalized === !0;
      }
    }
    return i.getDependency("bufferView", c).then(function(v) {
      return new Promise(function(g, B) {
        l.decodeDracoFile(
          v,
          function(C) {
            for (const E in C.attributes) {
              const D = C.attributes[E], R = p[E];
              R !== void 0 && (D.normalized = R);
            }
            g(C);
          },
          h,
          A,
          Dr,
          B
        );
      });
    });
  }
}
class Vb {
  constructor() {
    this.name = ze.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(r, i) {
    return (i.texCoord === void 0 || i.texCoord === r.channel) && i.offset === void 0 && i.rotation === void 0 && i.scale === void 0 || (r = r.clone(), i.texCoord !== void 0 && (r.channel = i.texCoord), i.offset !== void 0 && r.offset.fromArray(i.offset), i.rotation !== void 0 && (r.rotation = i.rotation), i.scale !== void 0 && r.repeat.fromArray(i.scale), r.needsUpdate = !0), r;
  }
}
class qb {
  constructor() {
    this.name = ze.KHR_MESH_QUANTIZATION;
  }
}
class rh extends dA {
  constructor(r, i, s, l) {
    super(r, i, s, l);
  }
  copySampleValue_(r) {
    const i = this.resultBuffer, s = this.sampleValues, l = this.valueSize, c = r * l * 3 + l;
    for (let d = 0; d !== l; d++)
      i[d] = s[c + d];
    return i;
  }
  interpolate_(r, i, s, l) {
    const c = this.resultBuffer, d = this.sampleValues, h = this.valueSize, p = h * 2, A = h * 3, v = l - i, g = (s - i) / v, B = g * g, C = B * g, E = r * A, D = E - A, R = -2 * C + 3 * B, w = C - B, F = 1 - R, N = w - B + g;
    for (let U = 0; U !== h; U++) {
      const j = d[D + U + h], L = d[D + U + p] * v, Q = d[E + U + h], O = d[E + U] * v;
      c[U] = F * j + N * L + R * Q + w * O;
    }
    return c;
  }
}
const $b = /* @__PURE__ */ new ta();
class eB extends rh {
  interpolate_(r, i, s, l) {
    const c = super.interpolate_(r, i, s, l);
    return $b.fromArray(c).normalize().toArray(c), c;
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
}, fi = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, ip = {
  9728: Vg,
  9729: kt,
  9984: Zg,
  9985: Wg,
  9986: Yg,
  9987: vp
}, sp = {
  33071: xr,
  33648: qg,
  10497: cu
}, $l = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Eu = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  // uv => uv1, 4 uv channels
  // https://github.com/mrdoob/three.js/pull/25943
  // https://github.com/mrdoob/three.js/pull/25788
  ...ts >= 152 ? {
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
}, nB = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: Cp,
  STEP: cA
}, eu = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function tB(a) {
  return a.DefaultMaterial === void 0 && (a.DefaultMaterial = new bp({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: fA
  })), a.DefaultMaterial;
}
function bo(a, r, i) {
  for (const s in i.extensions)
    a[s] === void 0 && (r.userData.gltfExtensions = r.userData.gltfExtensions || {}, r.userData.gltfExtensions[s] = i.extensions[s]);
}
function Rr(a, r) {
  r.extras !== void 0 && (typeof r.extras == "object" ? Object.assign(a.userData, r.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + r.extras));
}
function rB(a, r, i) {
  let s = !1, l = !1, c = !1;
  for (let A = 0, v = r.length; A < v; A++) {
    const g = r[A];
    if (g.POSITION !== void 0 && (s = !0), g.NORMAL !== void 0 && (l = !0), g.COLOR_0 !== void 0 && (c = !0), s && l && c)
      break;
  }
  if (!s && !l && !c)
    return Promise.resolve(a);
  const d = [], h = [], p = [];
  for (let A = 0, v = r.length; A < v; A++) {
    const g = r[A];
    if (s) {
      const B = g.POSITION !== void 0 ? i.getDependency("accessor", g.POSITION) : a.attributes.position;
      d.push(B);
    }
    if (l) {
      const B = g.NORMAL !== void 0 ? i.getDependency("accessor", g.NORMAL) : a.attributes.normal;
      h.push(B);
    }
    if (c) {
      const B = g.COLOR_0 !== void 0 ? i.getDependency("accessor", g.COLOR_0) : a.attributes.color;
      p.push(B);
    }
  }
  return Promise.all([
    Promise.all(d),
    Promise.all(h),
    Promise.all(p)
  ]).then(function(A) {
    const v = A[0], g = A[1], B = A[2];
    return s && (a.morphAttributes.position = v), l && (a.morphAttributes.normal = g), c && (a.morphAttributes.color = B), a.morphTargetsRelative = !0, a;
  });
}
function oB(a, r) {
  if (a.updateMorphTargets(), r.weights !== void 0)
    for (let i = 0, s = r.weights.length; i < s; i++)
      a.morphTargetInfluences[i] = r.weights[i];
  if (r.extras && Array.isArray(r.extras.targetNames)) {
    const i = r.extras.targetNames;
    if (a.morphTargetInfluences.length === i.length) {
      a.morphTargetDictionary = {};
      for (let s = 0, l = i.length; s < l; s++)
        a.morphTargetDictionary[i[s]] = s;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function iB(a) {
  let r;
  const i = a.extensions && a.extensions[ze.KHR_DRACO_MESH_COMPRESSION];
  if (i ? r = "draco:" + i.bufferView + ":" + i.indices + ":" + nu(i.attributes) : r = a.indices + ":" + nu(a.attributes) + ":" + a.mode, a.targets !== void 0)
    for (let s = 0, l = a.targets.length; s < l; s++)
      r += ":" + nu(a.targets[s]);
  return r;
}
function nu(a) {
  let r = "";
  const i = Object.keys(a).sort();
  for (let s = 0, l = i.length; s < l; s++)
    r += i[s] + ":" + a[i[s]] + ";";
  return r;
}
function Su(a) {
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
function sB(a) {
  return a.search(/\.jpe?g($|\?)/i) > 0 || a.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : a.search(/\.webp($|\?)/i) > 0 || a.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const aB = /* @__PURE__ */ new Wi();
class lB {
  constructor(r = {}, i = {}) {
    this.json = r, this.extensions = {}, this.plugins = {}, this.options = i, this.cache = new Rb(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let s = !1, l = !1, c = -1;
    typeof navigator < "u" && typeof navigator.userAgent < "u" && (s = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, l = navigator.userAgent.indexOf("Firefox") > -1, c = l ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || s || l && c < 98 ? this.textureLoader = new Kg(this.options.manager) : this.textureLoader = new Qg(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new $r(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(r) {
    this.extensions = r;
  }
  setPlugins(r) {
    this.plugins = r;
  }
  parse(r, i) {
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
      return bo(c, h, l), Rr(h, l), Promise.all(
        s._invokeAll(function(p) {
          return p.afterRoot && p.afterRoot(h);
        })
      ).then(function() {
        for (const p of h.scenes)
          p.updateMatrixWorld();
        r(h);
      });
    }).catch(i);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const r = this.json.nodes || [], i = this.json.skins || [], s = this.json.meshes || [];
    for (let l = 0, c = i.length; l < c; l++) {
      const d = i[l].joints;
      for (let h = 0, p = d.length; h < p; h++)
        r[d[h]].isBone = !0;
    }
    for (let l = 0, c = r.length; l < c; l++) {
      const d = r[l];
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
  _addNodeRef(r, i) {
    i !== void 0 && (r.refs[i] === void 0 && (r.refs[i] = r.uses[i] = 0), r.refs[i]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(r, i, s) {
    if (r.refs[i] <= 1)
      return s;
    const l = s.clone(), c = (d, h) => {
      const p = this.associations.get(d);
      p != null && this.associations.set(h, p);
      for (const [A, v] of d.children.entries())
        c(v, h.children[A]);
    };
    return c(s, l), l.name += "_instance_" + r.uses[i]++, l;
  }
  _invokeOne(r) {
    const i = Object.values(this.plugins);
    i.push(this);
    for (let s = 0; s < i.length; s++) {
      const l = r(i[s]);
      if (l)
        return l;
    }
    return null;
  }
  _invokeAll(r) {
    const i = Object.values(this.plugins);
    i.unshift(this);
    const s = [];
    for (let l = 0; l < i.length; l++) {
      const c = r(i[l]);
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
  getDependency(r, i) {
    const s = r + ":" + i;
    let l = this.cache.get(s);
    if (!l) {
      switch (r) {
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
            return c != this && c.getDependency && c.getDependency(r, i);
          }), !l)
            throw new Error("Unknown type: " + r);
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
  getDependencies(r) {
    let i = this.cache.get(r);
    if (!i) {
      const s = this, l = this.json[r + (r === "mesh" ? "es" : "s")] || [];
      i = Promise.all(
        l.map(function(c, d) {
          return s.getDependency(r, d);
        })
      ), this.cache.add(r, i);
    }
    return i;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(r) {
    const i = this.json.buffers[r], s = this.fileLoader;
    if (i.type && i.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + i.type + " buffer type is not supported.");
    if (i.uri === void 0 && r === 0)
      return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);
    const l = this.options;
    return new Promise(function(c, d) {
      s.load(Ki.resolveURL(i.uri, l.path), c, void 0, function() {
        d(new Error('THREE.GLTFLoader: Failed to load buffer "' + i.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(r) {
    const i = this.json.bufferViews[r];
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
  loadAccessor(r) {
    const i = this, s = this.json, l = this.json.accessors[r];
    if (l.bufferView === void 0 && l.sparse === void 0) {
      const d = $l[l.type], h = fi[l.componentType], p = l.normalized === !0, A = new h(l.count * d);
      return Promise.resolve(new Qi(A, d, p));
    }
    const c = [];
    return l.bufferView !== void 0 ? c.push(this.getDependency("bufferView", l.bufferView)) : c.push(null), l.sparse !== void 0 && (c.push(this.getDependency("bufferView", l.sparse.indices.bufferView)), c.push(this.getDependency("bufferView", l.sparse.values.bufferView))), Promise.all(c).then(function(d) {
      const h = d[0], p = $l[l.type], A = fi[l.componentType], v = A.BYTES_PER_ELEMENT, g = v * p, B = l.byteOffset || 0, C = l.bufferView !== void 0 ? s.bufferViews[l.bufferView].byteStride : void 0, E = l.normalized === !0;
      let D, R;
      if (C && C !== g) {
        const w = Math.floor(B / C), F = "InterleavedBuffer:" + l.bufferView + ":" + l.componentType + ":" + w + ":" + l.count;
        let N = i.cache.get(F);
        N || (D = new A(h, w * C, l.count * C / v), N = new Xg(D, C / v), i.cache.add(F, N)), R = new Bo(
          N,
          p,
          B % C / v,
          E
        );
      } else
        h === null ? D = new A(l.count * p) : D = new A(h, B, l.count * p), R = new Qi(D, p, E);
      if (l.sparse !== void 0) {
        const w = $l.SCALAR, F = fi[l.sparse.indices.componentType], N = l.sparse.indices.byteOffset || 0, U = l.sparse.values.byteOffset || 0, j = new F(
          d[1],
          N,
          l.sparse.count * w
        ), L = new A(d[2], U, l.sparse.count * p);
        h !== null && (R = new Qi(
          R.array.slice(),
          R.itemSize,
          R.normalized
        ));
        for (let Q = 0, O = j.length; Q < O; Q++) {
          const k = j[Q];
          if (R.setX(k, L[Q * p]), p >= 2 && R.setY(k, L[Q * p + 1]), p >= 3 && R.setZ(k, L[Q * p + 2]), p >= 4 && R.setW(k, L[Q * p + 3]), p >= 5)
            throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return R;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(r) {
    const i = this.json, s = this.options, c = i.textures[r].source, d = i.images[c];
    let h = this.textureLoader;
    if (d.uri) {
      const p = s.manager.getHandler(d.uri);
      p !== null && (h = p);
    }
    return this.loadTextureImage(r, c, h);
  }
  loadTextureImage(r, i, s) {
    const l = this, c = this.json, d = c.textures[r], h = c.images[i], p = (h.uri || h.bufferView) + ":" + d.sampler;
    if (this.textureCache[p])
      return this.textureCache[p];
    const A = this.loadImageSource(i, s).then(function(v) {
      v.flipY = !1, v.name = d.name || h.name || "", v.name === "" && typeof h.uri == "string" && h.uri.startsWith("data:image/") === !1 && (v.name = h.uri);
      const B = (c.samplers || {})[d.sampler] || {};
      return v.magFilter = ip[B.magFilter] || kt, v.minFilter = ip[B.minFilter] || vp, v.wrapS = sp[B.wrapS] || cu, v.wrapT = sp[B.wrapT] || cu, l.associations.set(v, { textures: r }), v;
    }).catch(function() {
      return null;
    });
    return this.textureCache[p] = A, A;
  }
  loadImageSource(r, i) {
    const s = this, l = this.json, c = this.options;
    if (this.sourceCache[r] !== void 0)
      return this.sourceCache[r].then((g) => g.clone());
    const d = l.images[r], h = self.URL || self.webkitURL;
    let p = d.uri || "", A = !1;
    if (d.bufferView !== void 0)
      p = s.getDependency("bufferView", d.bufferView).then(function(g) {
        A = !0;
        const B = new Blob([g], { type: d.mimeType });
        return p = h.createObjectURL(B), p;
      });
    else if (d.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + r + " is missing URI and bufferView");
    const v = Promise.resolve(p).then(function(g) {
      return new Promise(function(B, C) {
        let E = B;
        i.isImageBitmapLoader === !0 && (E = function(D) {
          const R = new Vr(D);
          R.needsUpdate = !0, B(R);
        }), i.load(Ki.resolveURL(g, c.path), E, void 0, C);
      });
    }).then(function(g) {
      return A === !0 && h.revokeObjectURL(p), Rr(g, d), g.userData.mimeType = d.mimeType || sB(d.uri), g;
    }).catch(function(g) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", p), g;
    });
    return this.sourceCache[r] = v, v;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(r, i, s, l) {
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
      return l !== void 0 && (typeof l == "number" && (l = l === rp ? Co : Dr), "colorSpace" in d ? d.colorSpace = l : d.encoding = l === Co ? rp : Fb), r[i] = d, d;
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
  assignFinalMaterial(r) {
    const i = r.geometry;
    let s = r.material;
    const l = i.attributes.tangent === void 0, c = i.attributes.color !== void 0, d = i.attributes.normal === void 0;
    if (r.isPoints) {
      const h = "PointsMaterial:" + s.uuid;
      let p = this.cache.get(h);
      p || (p = new $g(), kl.prototype.copy.call(p, s), p.color.copy(s.color), p.map = s.map, p.sizeAttenuation = !1, this.cache.add(h, p)), s = p;
    } else if (r.isLine) {
      const h = "LineBasicMaterial:" + s.uuid;
      let p = this.cache.get(h);
      p || (p = new eA(), kl.prototype.copy.call(p, s), p.color.copy(s.color), p.map = s.map, this.cache.add(h, p)), s = p;
    }
    if (l || c || d) {
      let h = "ClonedMaterial:" + s.uuid + ":";
      l && (h += "derivative-tangents:"), c && (h += "vertex-colors:"), d && (h += "flat-shading:");
      let p = this.cache.get(h);
      p || (p = s.clone(), c && (p.vertexColors = !0), d && (p.flatShading = !0), l && (p.normalScale && (p.normalScale.y *= -1), p.clearcoatNormalScale && (p.clearcoatNormalScale.y *= -1)), this.cache.add(h, p), this.associations.set(p, this.associations.get(s))), s = p;
    }
    r.material = s;
  }
  getMaterialType() {
    return bp;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(r) {
    const i = this, s = this.json, l = this.extensions, c = s.materials[r];
    let d;
    const h = {}, p = c.extensions || {}, A = [];
    if (p[ze.KHR_MATERIALS_UNLIT]) {
      const g = l[ze.KHR_MATERIALS_UNLIT];
      d = g.getMaterialType(), A.push(g.extendParams(h, c, i));
    } else {
      const g = c.pbrMetallicRoughness || {};
      if (h.color = new eo(1, 1, 1), h.opacity = 1, Array.isArray(g.baseColorFactor)) {
        const B = g.baseColorFactor;
        h.color.setRGB(B[0], B[1], B[2], Dr), h.opacity = B[3];
      }
      g.baseColorTexture !== void 0 && A.push(i.assignTexture(h, "map", g.baseColorTexture, Co)), h.metalness = g.metallicFactor !== void 0 ? g.metallicFactor : 1, h.roughness = g.roughnessFactor !== void 0 ? g.roughnessFactor : 1, g.metallicRoughnessTexture !== void 0 && (A.push(i.assignTexture(h, "metalnessMap", g.metallicRoughnessTexture)), A.push(i.assignTexture(h, "roughnessMap", g.metallicRoughnessTexture))), d = this._invokeOne(function(B) {
        return B.getMaterialType && B.getMaterialType(r);
      }), A.push(
        Promise.all(
          this._invokeAll(function(B) {
            return B.extendMaterialParams && B.extendMaterialParams(r, h);
          })
        )
      );
    }
    c.doubleSided === !0 && (h.side = Iu);
    const v = c.alphaMode || eu.OPAQUE;
    if (v === eu.BLEND ? (h.transparent = !0, h.depthWrite = !1) : (h.transparent = !1, v === eu.MASK && (h.alphaTest = c.alphaCutoff !== void 0 ? c.alphaCutoff : 0.5)), c.normalTexture !== void 0 && d !== ai && (A.push(i.assignTexture(h, "normalMap", c.normalTexture)), h.normalScale = new $n(1, 1), c.normalTexture.scale !== void 0)) {
      const g = c.normalTexture.scale;
      h.normalScale.set(g, g);
    }
    if (c.occlusionTexture !== void 0 && d !== ai && (A.push(i.assignTexture(h, "aoMap", c.occlusionTexture)), c.occlusionTexture.strength !== void 0 && (h.aoMapIntensity = c.occlusionTexture.strength)), c.emissiveFactor !== void 0 && d !== ai) {
      const g = c.emissiveFactor;
      h.emissive = new eo().setRGB(
        g[0],
        g[1],
        g[2],
        Dr
      );
    }
    return c.emissiveTexture !== void 0 && d !== ai && A.push(i.assignTexture(h, "emissiveMap", c.emissiveTexture, Co)), Promise.all(A).then(function() {
      const g = new d(h);
      return c.name && (g.name = c.name), Rr(g, c), i.associations.set(g, { materials: r }), c.extensions && bo(l, g, c), g;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(r) {
    const i = nA.sanitizeNodeName(r || "");
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
  loadGeometries(r) {
    const i = this, s = this.extensions, l = this.primitiveCache;
    function c(h) {
      return s[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(h, i).then(function(p) {
        return ap(p, h, i);
      });
    }
    const d = [];
    for (let h = 0, p = r.length; h < p; h++) {
      const A = r[h], v = iB(A), g = l[v];
      if (g)
        d.push(g.promise);
      else {
        let B;
        A.extensions && A.extensions[ze.KHR_DRACO_MESH_COMPRESSION] ? B = c(A) : B = ap(new Bp(), A, i), l[v] = { primitive: A, promise: B }, d.push(B);
      }
    }
    return Promise.all(d);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(r) {
    const i = this, s = this.json, l = this.extensions, c = s.meshes[r], d = c.primitives, h = [];
    for (let p = 0, A = d.length; p < A; p++) {
      const v = d[p].material === void 0 ? tB(this.cache) : this.getDependency("material", d[p].material);
      h.push(v);
    }
    return h.push(i.loadGeometries(d)), Promise.all(h).then(function(p) {
      const A = p.slice(0, p.length - 1), v = p[p.length - 1], g = [];
      for (let C = 0, E = v.length; C < E; C++) {
        const D = v[C], R = d[C];
        let w;
        const F = A[C];
        if (R.mode === Lt.TRIANGLES || R.mode === Lt.TRIANGLE_STRIP || R.mode === Lt.TRIANGLE_FAN || R.mode === void 0)
          w = c.isSkinnedMesh === !0 ? new tA(D, F) : new $i(D, F), w.isSkinnedMesh === !0 && w.normalizeSkinWeights(), R.mode === Lt.TRIANGLE_STRIP ? w.geometry = ep(w.geometry, gp) : R.mode === Lt.TRIANGLE_FAN && (w.geometry = ep(w.geometry, uu));
        else if (R.mode === Lt.LINES)
          w = new rA(D, F);
        else if (R.mode === Lt.LINE_STRIP)
          w = new oA(D, F);
        else if (R.mode === Lt.LINE_LOOP)
          w = new iA(D, F);
        else if (R.mode === Lt.POINTS)
          w = new sA(D, F);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + R.mode);
        Object.keys(w.geometry.morphAttributes).length > 0 && oB(w, c), w.name = i.createUniqueName(c.name || "mesh_" + r), Rr(w, c), R.extensions && bo(l, w, R), i.assignFinalMaterial(w), g.push(w);
      }
      for (let C = 0, E = g.length; C < E; C++)
        i.associations.set(g[C], {
          meshes: r,
          primitives: C
        });
      if (g.length === 1)
        return c.extensions && bo(l, g[0], c), g[0];
      const B = new Ol();
      c.extensions && bo(l, B, c), i.associations.set(B, { meshes: r });
      for (let C = 0, E = g.length; C < E; C++)
        B.add(g[C]);
      return B;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(r) {
    let i;
    const s = this.json.cameras[r], l = s[s.type];
    if (!l) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return s.type === "perspective" ? i = new ci(
      yp.radToDeg(l.yfov),
      l.aspectRatio || 1,
      l.znear || 1,
      l.zfar || 2e6
    ) : s.type === "orthographic" && (i = new Eo(-l.xmag, l.xmag, l.ymag, -l.ymag, l.znear, l.zfar)), s.name && (i.name = this.createUniqueName(s.name)), Rr(i, s), Promise.resolve(i);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(r) {
    const i = this.json.skins[r], s = [];
    for (let l = 0, c = i.joints.length; l < c; l++)
      s.push(this._loadNodeShallow(i.joints[l]));
    return i.inverseBindMatrices !== void 0 ? s.push(this.getDependency("accessor", i.inverseBindMatrices)) : s.push(null), Promise.all(s).then(function(l) {
      const c = l.pop(), d = l, h = [], p = [];
      for (let A = 0, v = d.length; A < v; A++) {
        const g = d[A];
        if (g) {
          h.push(g);
          const B = new Wi();
          c !== null && B.fromArray(c.array, A * 16), p.push(B);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', i.joints[A]);
      }
      return new aA(h, p);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(r) {
    const i = this.json, s = this, l = i.animations[r], c = l.name ? l.name : "animation_" + r, d = [], h = [], p = [], A = [], v = [];
    for (let g = 0, B = l.channels.length; g < B; g++) {
      const C = l.channels[g], E = l.samplers[C.sampler], D = C.target, R = D.node, w = l.parameters !== void 0 ? l.parameters[E.input] : E.input, F = l.parameters !== void 0 ? l.parameters[E.output] : E.output;
      D.node !== void 0 && (d.push(this.getDependency("node", R)), h.push(this.getDependency("accessor", w)), p.push(this.getDependency("accessor", F)), A.push(E), v.push(D));
    }
    return Promise.all([
      Promise.all(d),
      Promise.all(h),
      Promise.all(p),
      Promise.all(A),
      Promise.all(v)
    ]).then(function(g) {
      const B = g[0], C = g[1], E = g[2], D = g[3], R = g[4], w = [];
      for (let F = 0, N = B.length; F < N; F++) {
        const U = B[F], j = C[F], L = E[F], Q = D[F], O = R[F];
        if (U === void 0)
          continue;
        U.updateMatrix && U.updateMatrix();
        const k = s._createAnimationTracks(U, j, L, Q, O);
        if (k)
          for (let K = 0; K < k.length; K++)
            w.push(k[K]);
      }
      return new lA(c, void 0, w);
    });
  }
  createNodeMesh(r) {
    const i = this.json, s = this, l = i.nodes[r];
    return l.mesh === void 0 ? null : s.getDependency("mesh", l.mesh).then(function(c) {
      const d = s._getNodeRef(s.meshCache, l.mesh, c);
      return l.weights !== void 0 && d.traverse(function(h) {
        if (h.isMesh)
          for (let p = 0, A = l.weights.length; p < A; p++)
            h.morphTargetInfluences[p] = l.weights[p];
      }), d;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(r) {
    const i = this.json, s = this, l = i.nodes[r], c = s._loadNodeShallow(r), d = [], h = l.children || [];
    for (let A = 0, v = h.length; A < v; A++)
      d.push(s.getDependency("node", h[A]));
    const p = l.skin === void 0 ? Promise.resolve(null) : s.getDependency("skin", l.skin);
    return Promise.all([c, Promise.all(d), p]).then(function(A) {
      const v = A[0], g = A[1], B = A[2];
      B !== null && v.traverse(function(C) {
        C.isSkinnedMesh && C.bind(B, aB);
      });
      for (let C = 0, E = g.length; C < E; C++)
        v.add(g[C]);
      return v;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(r) {
    const i = this.json, s = this.extensions, l = this;
    if (this.nodeCache[r] !== void 0)
      return this.nodeCache[r];
    const c = i.nodes[r], d = c.name ? l.createUniqueName(c.name) : "", h = [], p = l._invokeOne(function(A) {
      return A.createNodeMesh && A.createNodeMesh(r);
    });
    return p && h.push(p), c.camera !== void 0 && h.push(
      l.getDependency("camera", c.camera).then(function(A) {
        return l._getNodeRef(l.cameraCache, c.camera, A);
      })
    ), l._invokeAll(function(A) {
      return A.createNodeAttachment && A.createNodeAttachment(r);
    }).forEach(function(A) {
      h.push(A);
    }), this.nodeCache[r] = Promise.all(h).then(function(A) {
      let v;
      if (c.isBone === !0 ? v = new uA() : A.length > 1 ? v = new Ol() : A.length === 1 ? v = A[0] : v = new Ap(), v !== A[0])
        for (let g = 0, B = A.length; g < B; g++)
          v.add(A[g]);
      if (c.name && (v.userData.name = c.name, v.name = d), Rr(v, c), c.extensions && bo(s, v, c), c.matrix !== void 0) {
        const g = new Wi();
        g.fromArray(c.matrix), v.applyMatrix4(g);
      } else
        c.translation !== void 0 && v.position.fromArray(c.translation), c.rotation !== void 0 && v.quaternion.fromArray(c.rotation), c.scale !== void 0 && v.scale.fromArray(c.scale);
      return l.associations.has(v) || l.associations.set(v, {}), l.associations.get(v).nodes = r, v;
    }), this.nodeCache[r];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(r) {
    const i = this.extensions, s = this.json.scenes[r], l = this, c = new Ol();
    s.name && (c.name = l.createUniqueName(s.name)), Rr(c, s), s.extensions && bo(i, c, s);
    const d = s.nodes || [], h = [];
    for (let p = 0, A = d.length; p < A; p++)
      h.push(l.getDependency("node", d[p]));
    return Promise.all(h).then(function(p) {
      for (let v = 0, g = p.length; v < g; v++)
        c.add(p[v]);
      const A = (v) => {
        const g = /* @__PURE__ */ new Map();
        for (const [B, C] of l.associations)
          (B instanceof kl || B instanceof Vr) && g.set(B, C);
        return v.traverse((B) => {
          const C = l.associations.get(B);
          C != null && g.set(B, C);
        }), g;
      };
      return l.associations = A(c), c;
    });
  }
  _createAnimationTracks(r, i, s, l, c) {
    const d = [], h = r.name ? r.name : r.uuid, p = [];
    Wr[c.path] === Wr.weights ? r.traverse(function(B) {
      B.morphTargetInfluences && p.push(B.name ? B.name : B.uuid);
    }) : p.push(h);
    let A;
    switch (Wr[c.path]) {
      case Wr.weights:
        A = wd;
        break;
      case Wr.rotation:
        A = Id;
        break;
      case Wr.position:
      case Wr.scale:
        A = Md;
        break;
      default:
        s.itemSize === 1 ? A = wd : A = Md;
        break;
    }
    const v = l.interpolation !== void 0 ? nB[l.interpolation] : Cp, g = this._getArrayFromAccessor(s);
    for (let B = 0, C = p.length; B < C; B++) {
      const E = new A(
        p[B] + "." + Wr[c.path],
        i.array,
        g,
        v
      );
      l.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(E), d.push(E);
    }
    return d;
  }
  _getArrayFromAccessor(r) {
    let i = r.array;
    if (r.normalized) {
      const s = Su(i.constructor), l = new Float32Array(i.length);
      for (let c = 0, d = i.length; c < d; c++)
        l[c] = i[c] * s;
      i = l;
    }
    return i;
  }
  _createCubicSplineTrackInterpolant(r) {
    r.createInterpolant = function(s) {
      const l = this instanceof Id ? eB : rh;
      return new l(this.times, this.values, this.getValueSize() / 3, s);
    }, r.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function uB(a, r, i) {
  const s = r.attributes, l = new da();
  if (s.POSITION !== void 0) {
    const h = i.json.accessors[s.POSITION], p = h.min, A = h.max;
    if (p !== void 0 && A !== void 0) {
      if (l.set(new Ke(p[0], p[1], p[2]), new Ke(A[0], A[1], A[2])), h.normalized) {
        const v = Su(fi[h.componentType]);
        l.min.multiplyScalar(v), l.max.multiplyScalar(v);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const c = r.targets;
  if (c !== void 0) {
    const h = new Ke(), p = new Ke();
    for (let A = 0, v = c.length; A < v; A++) {
      const g = c[A];
      if (g.POSITION !== void 0) {
        const B = i.json.accessors[g.POSITION], C = B.min, E = B.max;
        if (C !== void 0 && E !== void 0) {
          if (p.setX(Math.max(Math.abs(C[0]), Math.abs(E[0]))), p.setY(Math.max(Math.abs(C[1]), Math.abs(E[1]))), p.setZ(Math.max(Math.abs(C[2]), Math.abs(E[2]))), B.normalized) {
            const D = Su(fi[B.componentType]);
            p.multiplyScalar(D);
          }
          h.max(p);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    l.expandByVector(h);
  }
  a.boundingBox = l;
  const d = new Fu();
  l.getCenter(d.center), d.radius = l.min.distanceTo(l.max) / 2, a.boundingSphere = d;
}
function ap(a, r, i) {
  const s = r.attributes, l = [];
  function c(d, h) {
    return i.getDependency("accessor", d).then(function(p) {
      a.setAttribute(h, p);
    });
  }
  for (const d in s) {
    const h = Eu[d] || d.toLowerCase();
    h in a.attributes || l.push(c(s[d], h));
  }
  if (r.indices !== void 0 && !a.index) {
    const d = i.getDependency("accessor", r.indices).then(function(h) {
      a.setIndex(h);
    });
    l.push(d);
  }
  return Rr(a, r), uB(a, r, i), Promise.all(l).then(function() {
    return r.targets !== void 0 ? rB(a, r.targets, i) : a;
  });
}
class cB extends Ep {
  constructor(r) {
    super(r), this.type = Ot;
  }
  // adapted from http://www.graphics.cornell.edu/~bjw/rgbe.html
  parse(r) {
    const d = function(O, k) {
      switch (O) {
        case 1:
          throw new Error("THREE.RGBELoader: Read Error: " + (k || ""));
        case 2:
          throw new Error("THREE.RGBELoader: Write Error: " + (k || ""));
        case 3:
          throw new Error("THREE.RGBELoader: Bad File Format: " + (k || ""));
        default:
        case 4:
          throw new Error("THREE.RGBELoader: Memory Error: " + (k || ""));
      }
    }, g = function(O, k, K) {
      k = k || 1024;
      let be = O.pos, ee = -1, le = 0, de = "", J = String.fromCharCode.apply(null, new Uint16Array(O.subarray(be, be + 128)));
      for (; 0 > (ee = J.indexOf(`
`)) && le < k && be < O.byteLength; )
        de += J, le += J.length, be += 128, J += String.fromCharCode.apply(null, new Uint16Array(O.subarray(be, be + 128)));
      return -1 < ee ? (O.pos += le + ee + 1, de + J.slice(0, ee)) : !1;
    }, B = function(O) {
      const k = /^#\?(\S+)/, K = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, ie = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, be = /^\s*FORMAT=(\S+)\s*$/, ee = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, le = {
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
      let de, J;
      for ((O.pos >= O.byteLength || !(de = g(O))) && d(1, "no header found"), (J = de.match(k)) || d(3, "bad initial token"), le.valid |= 1, le.programtype = J[1], le.string += de + `
`; de = g(O), de !== !1; ) {
        if (le.string += de + `
`, de.charAt(0) === "#") {
          le.comments += de + `
`;
          continue;
        }
        if ((J = de.match(K)) && (le.gamma = parseFloat(J[1])), (J = de.match(ie)) && (le.exposure = parseFloat(J[1])), (J = de.match(be)) && (le.valid |= 2, le.format = J[1]), (J = de.match(ee)) && (le.valid |= 4, le.height = parseInt(J[1], 10), le.width = parseInt(J[2], 10)), le.valid & 2 && le.valid & 4)
          break;
      }
      return le.valid & 2 || d(3, "missing format specifier"), le.valid & 4 || d(3, "missing image size specifier"), le;
    }, C = function(O, k, K) {
      const ie = k;
      if (
        // run length encoding is not allowed so read flat
        ie < 8 || ie > 32767 || // this file is not run length encoded
        O[0] !== 2 || O[1] !== 2 || O[2] & 128
      )
        return new Uint8Array(O);
      ie !== (O[2] << 8 | O[3]) && d(3, "wrong scanline width");
      const be = new Uint8Array(4 * k * K);
      be.length || d(4, "unable to allocate buffer space");
      let ee = 0, le = 0;
      const de = 4 * ie, J = new Uint8Array(4), ue = new Uint8Array(de);
      let pe = K;
      for (; pe > 0 && le < O.byteLength; ) {
        le + 4 > O.byteLength && d(1), J[0] = O[le++], J[1] = O[le++], J[2] = O[le++], J[3] = O[le++], (J[0] != 2 || J[1] != 2 || (J[2] << 8 | J[3]) != ie) && d(3, "bad rgbe scanline format");
        let Ae = 0, ce;
        for (; Ae < de && le < O.byteLength; ) {
          ce = O[le++];
          const he = ce > 128;
          if (he && (ce -= 128), (ce === 0 || Ae + ce > de) && d(3, "bad scanline data"), he) {
            const Me = O[le++];
            for (let Fe = 0; Fe < ce; Fe++)
              ue[Ae++] = Me;
          } else
            ue.set(O.subarray(le, le + ce), Ae), Ae += ce, le += ce;
        }
        const Be = ie;
        for (let he = 0; he < Be; he++) {
          let Me = 0;
          be[ee] = ue[he + Me], Me += ie, be[ee + 1] = ue[he + Me], Me += ie, be[ee + 2] = ue[he + Me], Me += ie, be[ee + 3] = ue[he + Me], ee += 4;
        }
        pe--;
      }
      return be;
    }, E = function(O, k, K, ie) {
      const be = O[k + 3], ee = Math.pow(2, be - 128) / 255;
      K[ie + 0] = O[k + 0] * ee, K[ie + 1] = O[k + 1] * ee, K[ie + 2] = O[k + 2] * ee, K[ie + 3] = 1;
    }, D = function(O, k, K, ie) {
      const be = O[k + 3], ee = Math.pow(2, be - 128) / 255;
      K[ie + 0] = li.toHalfFloat(Math.min(O[k + 0] * ee, 65504)), K[ie + 1] = li.toHalfFloat(Math.min(O[k + 1] * ee, 65504)), K[ie + 2] = li.toHalfFloat(Math.min(O[k + 2] * ee, 65504)), K[ie + 3] = li.toHalfFloat(1);
    }, R = new Uint8Array(r);
    R.pos = 0;
    const w = B(R), F = w.width, N = w.height, U = C(R.subarray(R.pos), F, N);
    let j, L, Q;
    switch (this.type) {
      case _r:
        Q = U.length / 4;
        const O = new Float32Array(Q * 4);
        for (let K = 0; K < Q; K++)
          E(U, K * 4, O, K * 4);
        j = O, L = _r;
        break;
      case Ot:
        Q = U.length / 4;
        const k = new Uint16Array(Q * 4);
        for (let K = 0; K < Q; K++)
          D(U, K * 4, k, K * 4);
        j = k, L = Ot;
        break;
      default:
        throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
    }
    return {
      width: F,
      height: N,
      data: j,
      header: w.string,
      gamma: w.gamma,
      exposure: w.exposure,
      type: L
    };
  }
  setDataType(r) {
    return this.type = r, this;
  }
  load(r, i, s, l) {
    function c(d, h) {
      switch (d.type) {
        case _r:
        case Ot:
          "colorSpace" in d ? d.colorSpace = "srgb-linear" : d.encoding = 3e3, d.minFilter = kt, d.magFilter = kt, d.generateMipmaps = !1, d.flipY = !0;
          break;
      }
      i && i(d, h);
    }
    return super.load(r, c, s, l);
  }
}
const zi = ts >= 152;
class fB extends Ep {
  constructor(r) {
    super(r), this.type = Ot;
  }
  parse(r) {
    const k = Math.pow(2.7182818, 2.2);
    function K(m, y) {
      for (var M = 0, x = 0; x < 65536; ++x)
        (x == 0 || m[x >> 3] & 1 << (x & 7)) && (y[M++] = x);
      for (var H = M - 1; M < 65536; )
        y[M++] = 0;
      return H;
    }
    function ie(m) {
      for (var y = 0; y < 16384; y++)
        m[y] = {}, m[y].len = 0, m[y].lit = 0, m[y].p = null;
    }
    const be = { l: 0, c: 0, lc: 0 };
    function ee(m, y, M, x, H) {
      for (; M < m; )
        y = y << 8 | hr(x, H), M += 8;
      M -= m, be.l = y >> M & (1 << m) - 1, be.c = y, be.lc = M;
    }
    const le = new Array(59);
    function de(m) {
      for (var y = 0; y <= 58; ++y)
        le[y] = 0;
      for (var y = 0; y < 65537; ++y)
        le[m[y]] += 1;
      for (var M = 0, y = 58; y > 0; --y) {
        var x = M + le[y] >> 1;
        le[y] = M, M = x;
      }
      for (var y = 0; y < 65537; ++y) {
        var H = m[y];
        H > 0 && (m[y] = H | le[H]++ << 6);
      }
    }
    function J(m, y, M, x, H, z, V) {
      for (var W = M, oe = 0, re = 0; H <= z; H++) {
        if (W.value - M.value > x)
          return !1;
        ee(6, oe, re, m, W);
        var se = be.l;
        if (oe = be.c, re = be.lc, V[H] = se, se == 63) {
          if (W.value - M.value > x)
            throw "Something wrong with hufUnpackEncTable";
          ee(8, oe, re, m, W);
          var te = be.l + 6;
          if (oe = be.c, re = be.lc, H + te > z + 1)
            throw "Something wrong with hufUnpackEncTable";
          for (; te--; )
            V[H++] = 0;
          H--;
        } else if (se >= 59) {
          var te = se - 59 + 2;
          if (H + te > z + 1)
            throw "Something wrong with hufUnpackEncTable";
          for (; te--; )
            V[H++] = 0;
          H--;
        }
      }
      de(V);
    }
    function ue(m) {
      return m & 63;
    }
    function pe(m) {
      return m >> 6;
    }
    function Ae(m, y, M, x) {
      for (; y <= M; y++) {
        var H = pe(m[y]), z = ue(m[y]);
        if (H >> z)
          throw "Invalid table entry";
        if (z > 14) {
          var V = x[H >> z - 14];
          if (V.len)
            throw "Invalid table entry";
          if (V.lit++, V.p) {
            var W = V.p;
            V.p = new Array(V.lit);
            for (var oe = 0; oe < V.lit - 1; ++oe)
              V.p[oe] = W[oe];
          } else
            V.p = new Array(1);
          V.p[V.lit - 1] = y;
        } else if (z)
          for (var re = 0, oe = 1 << 14 - z; oe > 0; oe--) {
            var V = x[(H << 14 - z) + re];
            if (V.len || V.p)
              throw "Invalid table entry";
            V.len = z, V.lit = y, re++;
          }
      }
      return !0;
    }
    const ce = { c: 0, lc: 0 };
    function Be(m, y, M, x) {
      m = m << 8 | hr(M, x), y += 8, ce.c = m, ce.lc = y;
    }
    const he = { c: 0, lc: 0 };
    function Me(m, y, M, x, H, z, V, W, oe, re) {
      if (m == y) {
        x < 8 && (Be(M, x, H, V), M = ce.c, x = ce.lc), x -= 8;
        var se = M >> x, se = new Uint8Array([se])[0];
        if (oe.value + se > re)
          return !1;
        for (var te = W[oe.value - 1]; se-- > 0; )
          W[oe.value++] = te;
      } else if (oe.value < re)
        W[oe.value++] = m;
      else
        return !1;
      he.c = M, he.lc = x;
    }
    function Fe(m) {
      return m & 65535;
    }
    function an(m) {
      var y = Fe(m);
      return y > 32767 ? y - 65536 : y;
    }
    const xe = { a: 0, b: 0 };
    function Pn(m, y) {
      var M = an(m), x = an(y), H = x, z = M + (H & 1) + (H >> 1), V = z, W = z - H;
      xe.a = V, xe.b = W;
    }
    function dn(m, y) {
      var M = Fe(m), x = Fe(y), H = M - (x >> 1) & 65535, z = x + H - 32768 & 65535;
      xe.a = z, xe.b = H;
    }
    function Yn(m, y, M, x, H, z, V) {
      for (var W = V < 16384, oe = M > H ? H : M, re = 1, se; re <= oe; )
        re <<= 1;
      for (re >>= 1, se = re, re >>= 1; re >= 1; ) {
        for (var te = 0, on = te + z * (H - se), ge = z * re, ve = z * se, Re = x * re, Ie = x * se, Oe, qe, Ge, xn; te <= on; te += ve) {
          for (var $e = te, vt = te + x * (M - se); $e <= vt; $e += Ie) {
            var tn = $e + Re, En = $e + ge, bt = En + Re;
            W ? (Pn(m[$e + y], m[En + y]), Oe = xe.a, Ge = xe.b, Pn(m[tn + y], m[bt + y]), qe = xe.a, xn = xe.b, Pn(Oe, qe), m[$e + y] = xe.a, m[tn + y] = xe.b, Pn(Ge, xn), m[En + y] = xe.a, m[bt + y] = xe.b) : (dn(m[$e + y], m[En + y]), Oe = xe.a, Ge = xe.b, dn(m[tn + y], m[bt + y]), qe = xe.a, xn = xe.b, dn(Oe, qe), m[$e + y] = xe.a, m[tn + y] = xe.b, dn(Ge, xn), m[En + y] = xe.a, m[bt + y] = xe.b);
          }
          if (M & re) {
            var En = $e + ge;
            W ? Pn(m[$e + y], m[En + y]) : dn(m[$e + y], m[En + y]), Oe = xe.a, m[En + y] = xe.b, m[$e + y] = Oe;
          }
        }
        if (H & re)
          for (var $e = te, vt = te + x * (M - se); $e <= vt; $e += Ie) {
            var tn = $e + Re;
            W ? Pn(m[$e + y], m[tn + y]) : dn(m[$e + y], m[tn + y]), Oe = xe.a, m[tn + y] = xe.b, m[$e + y] = Oe;
          }
        se = re, re >>= 1;
      }
      return te;
    }
    function yn(m, y, M, x, H, z, V, W, oe, re) {
      for (var se = 0, te = 0, on = W, ge = Math.trunc(H.value + (z + 7) / 8); H.value < ge; )
        for (Be(se, te, M, H), se = ce.c, te = ce.lc; te >= 14; ) {
          var ve = se >> te - 14 & 16383, Re = y[ve];
          if (Re.len)
            te -= Re.len, Me(Re.lit, V, se, te, M, x, H, oe, re, on), se = he.c, te = he.lc;
          else {
            if (!Re.p)
              throw "hufDecode issues";
            var Ie;
            for (Ie = 0; Ie < Re.lit; Ie++) {
              for (var Oe = ue(m[Re.p[Ie]]); te < Oe && H.value < ge; )
                Be(se, te, M, H), se = ce.c, te = ce.lc;
              if (te >= Oe && pe(m[Re.p[Ie]]) == (se >> te - Oe & (1 << Oe) - 1)) {
                te -= Oe, Me(
                  Re.p[Ie],
                  V,
                  se,
                  te,
                  M,
                  x,
                  H,
                  oe,
                  re,
                  on
                ), se = he.c, te = he.lc;
                break;
              }
            }
            if (Ie == Re.lit)
              throw "hufDecode issues";
          }
        }
      var qe = 8 - z & 7;
      for (se >>= qe, te -= qe; te > 0; ) {
        var Re = y[se << 14 - te & 16383];
        if (Re.len)
          te -= Re.len, Me(Re.lit, V, se, te, M, x, H, oe, re, on), se = he.c, te = he.lc;
        else
          throw "hufDecode issues";
      }
      return !0;
    }
    function Ye(m, y, M, x, H, z) {
      var V = { value: 0 }, W = M.value, oe = Cn(y, M), re = Cn(y, M);
      M.value += 4;
      var se = Cn(y, M);
      if (M.value += 4, oe < 0 || oe >= 65537 || re < 0 || re >= 65537)
        throw "Something wrong with HUF_ENCSIZE";
      var te = new Array(65537), on = new Array(16384);
      ie(on);
      var ge = x - (M.value - W);
      if (J(m, y, M, ge, oe, re, te), se > 8 * (x - (M.value - W)))
        throw "Something wrong with hufUncompress";
      Ae(te, oe, re, on), yn(te, on, m, y, M, se, re, z, H, V);
    }
    function Fn(m, y, M) {
      for (var x = 0; x < M; ++x)
        y[x] = m[y[x]];
    }
    function pn(m) {
      for (var y = 1; y < m.length; y++) {
        var M = m[y - 1] + m[y] - 128;
        m[y] = M;
      }
    }
    function nt(m, y) {
      for (var M = 0, x = Math.floor((m.length + 1) / 2), H = 0, z = m.length - 1; !(H > z || (y[H++] = m[M++], H > z)); )
        y[H++] = m[x++];
    }
    function tt(m) {
      for (var y = m.byteLength, M = new Array(), x = 0, H = new DataView(m); y > 0; ) {
        var z = H.getInt8(x++);
        if (z < 0) {
          var V = -z;
          y -= V + 1;
          for (var W = 0; W < V; W++)
            M.push(H.getUint8(x++));
        } else {
          var V = z;
          y -= 2;
          for (var oe = H.getUint8(x++), W = 0; W < V + 1; W++)
            M.push(oe);
        }
      }
      return M;
    }
    function at(m, y, M, x, H, z) {
      var tn = new DataView(z.buffer), V = M[m.idx[0]].width, W = M[m.idx[0]].height, oe = 3, re = Math.floor(V / 8), se = Math.ceil(V / 8), te = Math.ceil(W / 8), on = V - (se - 1) * 8, ge = W - (te - 1) * 8, ve = { value: 0 }, Re = new Array(oe), Ie = new Array(oe), Oe = new Array(oe), qe = new Array(oe), Ge = new Array(oe);
      for (let De = 0; De < oe; ++De)
        Ge[De] = y[m.idx[De]], Re[De] = De < 1 ? 0 : Re[De - 1] + se * te, Ie[De] = new Float32Array(64), Oe[De] = new Uint16Array(64), qe[De] = new Uint16Array(se * 64);
      for (let De = 0; De < te; ++De) {
        var xn = 8;
        De == te - 1 && (xn = ge);
        var $e = 8;
        for (let en = 0; en < se; ++en) {
          en == se - 1 && ($e = on);
          for (let Qe = 0; Qe < oe; ++Qe)
            Oe[Qe].fill(0), Oe[Qe][0] = H[Re[Qe]++], vn(ve, x, Oe[Qe]), Pt(Oe[Qe], Ie[Qe]), Ft(Ie[Qe]);
          At(Ie);
          for (let Qe = 0; Qe < oe; ++Qe)
            Wt(Ie[Qe], qe[Qe], en * 64);
        }
        let Pe = 0;
        for (let en = 0; en < oe; ++en) {
          const Qe = M[m.idx[en]].type;
          for (let Nn = 8 * De; Nn < 8 * De + xn; ++Nn) {
            Pe = Ge[en][Nn];
            for (let Ut = 0; Ut < re; ++Ut) {
              const hn = Ut * 64 + (Nn & 7) * 8;
              tn.setUint16(Pe + 0 * Qe, qe[en][hn + 0], !0), tn.setUint16(Pe + 2 * Qe, qe[en][hn + 1], !0), tn.setUint16(Pe + 4 * Qe, qe[en][hn + 2], !0), tn.setUint16(Pe + 6 * Qe, qe[en][hn + 3], !0), tn.setUint16(Pe + 8 * Qe, qe[en][hn + 4], !0), tn.setUint16(Pe + 10 * Qe, qe[en][hn + 5], !0), tn.setUint16(Pe + 12 * Qe, qe[en][hn + 6], !0), tn.setUint16(Pe + 14 * Qe, qe[en][hn + 7], !0), Pe += 16 * Qe;
            }
          }
          if (re != se)
            for (let Nn = 8 * De; Nn < 8 * De + xn; ++Nn) {
              const Ut = Ge[en][Nn] + 8 * re * 2 * Qe, hn = re * 64 + (Nn & 7) * 8;
              for (let Bt = 0; Bt < $e; ++Bt)
                tn.setUint16(Ut + Bt * 2 * Qe, qe[en][hn + Bt], !0);
            }
        }
      }
      for (var vt = new Uint16Array(V), tn = new DataView(z.buffer), En = 0; En < oe; ++En) {
        M[m.idx[En]].decoded = !0;
        var bt = M[m.idx[En]].type;
        if (M[En].type == 2)
          for (var Ar = 0; Ar < W; ++Ar) {
            const De = Ge[En][Ar];
            for (var Wn = 0; Wn < V; ++Wn)
              vt[Wn] = tn.getUint16(De + Wn * 2 * bt, !0);
            for (var Wn = 0; Wn < V; ++Wn)
              tn.setFloat32(De + Wn * 2 * bt, ne(vt[Wn]), !0);
          }
      }
    }
    function vn(m, y, M) {
      for (var x, H = 1; H < 64; )
        x = y[m.value], x == 65280 ? H = 64 : x >> 8 == 255 ? H += x & 255 : (M[H] = x, H++), m.value++;
    }
    function Pt(m, y) {
      y[0] = ne(m[0]), y[1] = ne(m[1]), y[2] = ne(m[5]), y[3] = ne(m[6]), y[4] = ne(m[14]), y[5] = ne(m[15]), y[6] = ne(m[27]), y[7] = ne(m[28]), y[8] = ne(m[2]), y[9] = ne(m[4]), y[10] = ne(m[7]), y[11] = ne(m[13]), y[12] = ne(m[16]), y[13] = ne(m[26]), y[14] = ne(m[29]), y[15] = ne(m[42]), y[16] = ne(m[3]), y[17] = ne(m[8]), y[18] = ne(m[12]), y[19] = ne(m[17]), y[20] = ne(m[25]), y[21] = ne(m[30]), y[22] = ne(m[41]), y[23] = ne(m[43]), y[24] = ne(m[9]), y[25] = ne(m[11]), y[26] = ne(m[18]), y[27] = ne(m[24]), y[28] = ne(m[31]), y[29] = ne(m[40]), y[30] = ne(m[44]), y[31] = ne(m[53]), y[32] = ne(m[10]), y[33] = ne(m[19]), y[34] = ne(m[23]), y[35] = ne(m[32]), y[36] = ne(m[39]), y[37] = ne(m[45]), y[38] = ne(m[52]), y[39] = ne(m[54]), y[40] = ne(m[20]), y[41] = ne(m[22]), y[42] = ne(m[33]), y[43] = ne(m[38]), y[44] = ne(m[46]), y[45] = ne(m[51]), y[46] = ne(m[55]), y[47] = ne(m[60]), y[48] = ne(m[21]), y[49] = ne(m[34]), y[50] = ne(m[37]), y[51] = ne(m[47]), y[52] = ne(m[50]), y[53] = ne(m[56]), y[54] = ne(m[59]), y[55] = ne(m[61]), y[56] = ne(m[35]), y[57] = ne(m[36]), y[58] = ne(m[48]), y[59] = ne(m[49]), y[60] = ne(m[57]), y[61] = ne(m[58]), y[62] = ne(m[62]), y[63] = ne(m[63]);
    }
    function Ft(m) {
      const y = 0.5 * Math.cos(0.7853975), M = 0.5 * Math.cos(3.14159 / 16), x = 0.5 * Math.cos(3.14159 / 8), H = 0.5 * Math.cos(3 * 3.14159 / 16), z = 0.5 * Math.cos(5 * 3.14159 / 16), V = 0.5 * Math.cos(3 * 3.14159 / 8), W = 0.5 * Math.cos(7 * 3.14159 / 16);
      for (var oe = new Array(4), re = new Array(4), se = new Array(4), te = new Array(4), on = 0; on < 8; ++on) {
        var ge = on * 8;
        oe[0] = x * m[ge + 2], oe[1] = V * m[ge + 2], oe[2] = x * m[ge + 6], oe[3] = V * m[ge + 6], re[0] = M * m[ge + 1] + H * m[ge + 3] + z * m[ge + 5] + W * m[ge + 7], re[1] = H * m[ge + 1] - W * m[ge + 3] - M * m[ge + 5] - z * m[ge + 7], re[2] = z * m[ge + 1] - M * m[ge + 3] + W * m[ge + 5] + H * m[ge + 7], re[3] = W * m[ge + 1] - z * m[ge + 3] + H * m[ge + 5] - M * m[ge + 7], se[0] = y * (m[ge + 0] + m[ge + 4]), se[3] = y * (m[ge + 0] - m[ge + 4]), se[1] = oe[0] + oe[3], se[2] = oe[1] - oe[2], te[0] = se[0] + se[1], te[1] = se[3] + se[2], te[2] = se[3] - se[2], te[3] = se[0] - se[1], m[ge + 0] = te[0] + re[0], m[ge + 1] = te[1] + re[1], m[ge + 2] = te[2] + re[2], m[ge + 3] = te[3] + re[3], m[ge + 4] = te[3] - re[3], m[ge + 5] = te[2] - re[2], m[ge + 6] = te[1] - re[1], m[ge + 7] = te[0] - re[0];
      }
      for (var ve = 0; ve < 8; ++ve)
        oe[0] = x * m[16 + ve], oe[1] = V * m[16 + ve], oe[2] = x * m[48 + ve], oe[3] = V * m[48 + ve], re[0] = M * m[8 + ve] + H * m[24 + ve] + z * m[40 + ve] + W * m[56 + ve], re[1] = H * m[8 + ve] - W * m[24 + ve] - M * m[40 + ve] - z * m[56 + ve], re[2] = z * m[8 + ve] - M * m[24 + ve] + W * m[40 + ve] + H * m[56 + ve], re[3] = W * m[8 + ve] - z * m[24 + ve] + H * m[40 + ve] - M * m[56 + ve], se[0] = y * (m[ve] + m[32 + ve]), se[3] = y * (m[ve] - m[32 + ve]), se[1] = oe[0] + oe[3], se[2] = oe[1] - oe[2], te[0] = se[0] + se[1], te[1] = se[3] + se[2], te[2] = se[3] - se[2], te[3] = se[0] - se[1], m[0 + ve] = te[0] + re[0], m[8 + ve] = te[1] + re[1], m[16 + ve] = te[2] + re[2], m[24 + ve] = te[3] + re[3], m[32 + ve] = te[3] - re[3], m[40 + ve] = te[2] - re[2], m[48 + ve] = te[1] - re[1], m[56 + ve] = te[0] - re[0];
    }
    function At(m) {
      for (var y = 0; y < 64; ++y) {
        var M = m[0][y], x = m[1][y], H = m[2][y];
        m[0][y] = M + 1.5747 * H, m[1][y] = M - 0.1873 * x - 0.4682 * H, m[2][y] = M + 1.8556 * x;
      }
    }
    function Wt(m, y, M) {
      for (var x = 0; x < 64; ++x)
        y[M + x] = li.toHalfFloat(lt(m[x]));
    }
    function lt(m) {
      return m <= 1 ? Math.sign(m) * Math.pow(Math.abs(m), 2.2) : Math.sign(m) * Math.pow(k, Math.abs(m) - 1);
    }
    function ln(m) {
      return new DataView(m.array.buffer, m.offset.value, m.size);
    }
    function ut(m) {
      var y = m.viewer.buffer.slice(m.offset.value, m.offset.value + m.size), M = new Uint8Array(tt(y)), x = new Uint8Array(M.length);
      return pn(M), nt(M, x), new DataView(x.buffer);
    }
    function Zt(m) {
      var y = m.array.slice(m.offset.value, m.offset.value + m.size), M = js(y), x = new Uint8Array(M.length);
      return pn(M), nt(M, x), new DataView(x.buffer);
    }
    function pr(m) {
      for (var y = m.viewer, M = { value: m.offset.value }, x = new Uint16Array(m.width * m.scanlineBlockSize * (m.channels * m.type)), H = new Uint8Array(8192), z = 0, V = new Array(m.channels), W = 0; W < m.channels; W++)
        V[W] = {}, V[W].start = z, V[W].end = V[W].start, V[W].nx = m.width, V[W].ny = m.lines, V[W].size = m.type, z += V[W].nx * V[W].ny * V[W].size;
      var oe = Rn(y, M), re = Rn(y, M);
      if (re >= 8192)
        throw "Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";
      if (oe <= re)
        for (var W = 0; W < re - oe + 1; W++)
          H[W + oe] = I(y, M);
      var se = new Uint16Array(65536), te = K(H, se), on = Cn(y, M);
      Ye(m.array, y, M, on, x, z);
      for (var W = 0; W < m.channels; ++W)
        for (var ge = V[W], ve = 0; ve < V[W].size; ++ve)
          Yn(x, ge.start + ve, ge.nx, ge.size, ge.ny, ge.nx * ge.size, te);
      Fn(se, x, z);
      for (var Re = 0, Ie = new Uint8Array(x.buffer.byteLength), Oe = 0; Oe < m.lines; Oe++)
        for (var qe = 0; qe < m.channels; qe++) {
          var ge = V[qe], Ge = ge.nx * ge.size, xn = new Uint8Array(x.buffer, ge.end * 2, Ge * 2);
          Ie.set(xn, Re), Re += Ge * 2, ge.end += Ge;
        }
      return new DataView(Ie.buffer);
    }
    function Ln(m) {
      var y = m.array.slice(m.offset.value, m.offset.value + m.size), M = js(y);
      const x = m.lines * m.channels * m.width, H = m.type == 1 ? new Uint16Array(x) : new Uint32Array(x);
      let z = 0, V = 0;
      const W = new Array(4);
      for (let oe = 0; oe < m.lines; oe++)
        for (let re = 0; re < m.channels; re++) {
          let se = 0;
          switch (m.type) {
            case 1:
              W[0] = z, W[1] = W[0] + m.width, z = W[1] + m.width;
              for (let te = 0; te < m.width; ++te) {
                const on = M[W[0]++] << 8 | M[W[1]++];
                se += on, H[V] = se, V++;
              }
              break;
            case 2:
              W[0] = z, W[1] = W[0] + m.width, W[2] = W[1] + m.width, z = W[2] + m.width;
              for (let te = 0; te < m.width; ++te) {
                const on = M[W[0]++] << 24 | M[W[1]++] << 16 | M[W[2]++] << 8;
                se += on, H[V] = se, V++;
              }
              break;
          }
        }
      return new DataView(H.buffer);
    }
    function Ht(m) {
      var y = m.viewer, M = { value: m.offset.value }, x = new Uint8Array(m.width * m.lines * (m.channels * m.type * 2)), H = {
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
      if (H.version < 2)
        throw "EXRLoader.parse: " + gr.compression + " version " + H.version + " is unsupported";
      for (var z = new Array(), V = Rn(y, M) - 2; V > 0; ) {
        var W = Hn(y.buffer, M), oe = I(y, M), re = oe >> 2 & 3, se = (oe >> 4) - 1, te = new Int8Array([se])[0], on = I(y, M);
        z.push({
          name: W,
          index: te,
          type: on,
          compression: re
        }), V -= W.length + 3;
      }
      for (var ge = gr.channels, ve = new Array(m.channels), Re = 0; Re < m.channels; ++Re) {
        var Ie = ve[Re] = {}, Oe = ge[Re];
        Ie.name = Oe.name, Ie.compression = 0, Ie.decoded = !1, Ie.type = Oe.pixelType, Ie.pLinear = Oe.pLinear, Ie.width = m.width, Ie.height = m.lines;
      }
      for (var qe = {
        idx: new Array(3)
      }, Ge = 0; Ge < m.channels; ++Ge)
        for (var Ie = ve[Ge], Re = 0; Re < z.length; ++Re) {
          var xn = z[Re];
          Ie.name == xn.name && (Ie.compression = xn.compression, xn.index >= 0 && (qe.idx[xn.index] = Ge), Ie.offset = Ge);
        }
      if (H.acCompressedSize > 0)
        switch (H.acCompression) {
          case 0:
            var tn = new Uint16Array(H.totalAcUncompressedCount);
            Ye(
              m.array,
              y,
              M,
              H.acCompressedSize,
              tn,
              H.totalAcUncompressedCount
            );
            break;
          case 1:
            var $e = m.array.slice(M.value, M.value + H.totalAcUncompressedCount), vt = js($e), tn = new Uint16Array(vt.buffer);
            M.value += H.totalAcUncompressedCount;
            break;
        }
      if (H.dcCompressedSize > 0) {
        var En = {
          array: m.array,
          offset: M,
          size: H.dcCompressedSize
        }, bt = new Uint16Array(Zt(En).buffer);
        M.value += H.dcCompressedSize;
      }
      if (H.rleRawSize > 0) {
        var $e = m.array.slice(M.value, M.value + H.rleCompressedSize), vt = js($e), Ar = tt(vt.buffer);
        M.value += H.rleCompressedSize;
      }
      for (var Wn = 0, De = new Array(ve.length), Re = 0; Re < De.length; ++Re)
        De[Re] = new Array();
      for (var Pe = 0; Pe < m.lines; ++Pe)
        for (var en = 0; en < ve.length; ++en)
          De[en].push(Wn), Wn += ve[en].width * m.type * 2;
      at(qe, De, ve, tn, bt, x);
      for (var Re = 0; Re < ve.length; ++Re) {
        var Ie = ve[Re];
        if (!Ie.decoded)
          switch (Ie.compression) {
            case 2:
              for (var Qe = 0, Nn = 0, Pe = 0; Pe < m.lines; ++Pe) {
                for (var Ut = De[Re][Qe], hn = 0; hn < Ie.width; ++hn) {
                  for (var Bt = 0; Bt < 2 * Ie.type; ++Bt)
                    x[Ut++] = Ar[Nn + Bt * Ie.width * Ie.height];
                  Nn++;
                }
                Qe++;
              }
              break;
            default:
              throw "EXRLoader.parse: unsupported channel compression";
          }
      }
      return new DataView(x.buffer);
    }
    function Hn(m, y) {
      for (var M = new Uint8Array(m), x = 0; M[y.value + x] != 0; )
        x += 1;
      var H = new TextDecoder().decode(M.slice(y.value, y.value + x));
      return y.value = y.value + x + 1, H;
    }
    function Vt(m, y, M) {
      var x = new TextDecoder().decode(new Uint8Array(m).slice(y.value, y.value + M));
      return y.value = y.value + M, x;
    }
    function no(m, y) {
      var M = qt(m, y), x = Cn(m, y);
      return [M, x];
    }
    function Io(m, y) {
      var M = Cn(m, y), x = Cn(m, y);
      return [M, x];
    }
    function qt(m, y) {
      var M = m.getInt32(y.value, !0);
      return y.value = y.value + 4, M;
    }
    function Cn(m, y) {
      var M = m.getUint32(y.value, !0);
      return y.value = y.value + 4, M;
    }
    function hr(m, y) {
      var M = m[y.value];
      return y.value = y.value + 1, M;
    }
    function I(m, y) {
      var M = m.getUint8(y.value);
      return y.value = y.value + 1, M;
    }
    const Z = function(m, y) {
      let M;
      return "getBigInt64" in DataView.prototype ? M = Number(m.getBigInt64(y.value, !0)) : M = m.getUint32(y.value + 4, !0) + Number(m.getUint32(y.value, !0) << 32), y.value += 8, M;
    };
    function me(m, y) {
      var M = m.getFloat32(y.value, !0);
      return y.value += 4, M;
    }
    function Je(m, y) {
      return li.toHalfFloat(me(m, y));
    }
    function ne(m) {
      var y = (m & 31744) >> 10, M = m & 1023;
      return (m >> 15 ? -1 : 1) * (y ? y === 31 ? M ? NaN : 1 / 0 : Math.pow(2, y - 15) * (1 + M / 1024) : 6103515625e-14 * (M / 1024));
    }
    function Rn(m, y) {
      var M = m.getUint16(y.value, !0);
      return y.value += 2, M;
    }
    function rt(m, y) {
      return ne(Rn(m, y));
    }
    function gi(m, y, M, x) {
      for (var H = M.value, z = []; M.value < H + x - 1; ) {
        var V = Hn(y, M), W = qt(m, M), oe = I(m, M);
        M.value += 3;
        var re = qt(m, M), se = qt(m, M);
        z.push({
          name: V,
          pixelType: W,
          pLinear: oe,
          xSampling: re,
          ySampling: se
        });
      }
      return M.value += 1, z;
    }
    function mr(m, y) {
      var M = me(m, y), x = me(m, y), H = me(m, y), z = me(m, y), V = me(m, y), W = me(m, y), oe = me(m, y), re = me(m, y);
      return {
        redX: M,
        redY: x,
        greenX: H,
        greenY: z,
        blueX: V,
        blueY: W,
        whiteX: oe,
        whiteY: re
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
      ], x = I(m, y);
      return M[x];
    }
    function ft(m, y) {
      var M = Cn(m, y), x = Cn(m, y), H = Cn(m, y), z = Cn(m, y);
      return { xMin: M, yMin: x, xMax: H, yMax: z };
    }
    function ot(m, y) {
      var M = ["INCREASING_Y"], x = I(m, y);
      return M[x];
    }
    function $t(m, y) {
      var M = me(m, y), x = me(m, y);
      return [M, x];
    }
    function er(m, y) {
      var M = me(m, y), x = me(m, y), H = me(m, y);
      return [M, x, H];
    }
    function Nt(m, y, M, x, H) {
      if (x === "string" || x === "stringvector" || x === "iccProfile")
        return Vt(y, M, H);
      if (x === "chlist")
        return gi(m, y, M, H);
      if (x === "chromaticities")
        return mr(m, M);
      if (x === "compression")
        return ct(m, M);
      if (x === "box2i")
        return ft(m, M);
      if (x === "lineOrder")
        return ot(m, M);
      if (x === "float")
        return me(m, M);
      if (x === "v2f")
        return $t(m, M);
      if (x === "v3f")
        return er(m, M);
      if (x === "int")
        return qt(m, M);
      if (x === "rational")
        return no(m, M);
      if (x === "timecode")
        return Io(m, M);
      if (x === "preview")
        return M.value += H, "skipped";
      M.value += H;
    }
    function to(m, y, M) {
      const x = {};
      if (m.getUint32(0, !0) != 20000630)
        throw "THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";
      x.version = m.getUint8(4);
      const H = m.getUint8(5);
      x.spec = {
        singleTile: !!(H & 2),
        longName: !!(H & 4),
        deepFormat: !!(H & 8),
        multiPart: !!(H & 16)
      }, M.value = 8;
      for (var z = !0; z; ) {
        var V = Hn(y, M);
        if (V == 0)
          z = !1;
        else {
          var W = Hn(y, M), oe = Cn(m, M), re = Nt(m, y, M, W, oe);
          re === void 0 ? console.warn(`EXRLoader.parse: skipped unknown header attribute type '${W}'.`) : x[V] = re;
        }
      }
      if ((H & -5) != 0)
        throw console.error("EXRHeader:", x), "THREE.EXRLoader: provided file is currently unsupported.";
      return x;
    }
    function To(m, y, M, x, H) {
      const z = {
        size: 0,
        viewer: y,
        array: M,
        offset: x,
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
        [zi ? "colorSpace" : "encoding"]: null
      };
      switch (m.compression) {
        case "NO_COMPRESSION":
          z.lines = 1, z.uncompress = ln;
          break;
        case "RLE_COMPRESSION":
          z.lines = 1, z.uncompress = ut;
          break;
        case "ZIPS_COMPRESSION":
          z.lines = 1, z.uncompress = Zt;
          break;
        case "ZIP_COMPRESSION":
          z.lines = 16, z.uncompress = Zt;
          break;
        case "PIZ_COMPRESSION":
          z.lines = 32, z.uncompress = pr;
          break;
        case "PXR24_COMPRESSION":
          z.lines = 16, z.uncompress = Ln;
          break;
        case "DWAA_COMPRESSION":
          z.lines = 32, z.uncompress = Ht;
          break;
        case "DWAB_COMPRESSION":
          z.lines = 256, z.uncompress = Ht;
          break;
        default:
          throw "EXRLoader.parse: " + m.compression + " is unsupported";
      }
      if (z.scanlineBlockSize = z.lines, z.type == 1)
        switch (H) {
          case _r:
            z.getter = rt, z.inputSize = 2;
            break;
          case Ot:
            z.getter = Rn, z.inputSize = 2;
            break;
        }
      else if (z.type == 2)
        switch (H) {
          case _r:
            z.getter = me, z.inputSize = 4;
            break;
          case Ot:
            z.getter = Je, z.inputSize = 4;
        }
      else
        throw "EXRLoader.parse: unsupported pixelType " + z.type + " for " + m.compression + ".";
      z.blockCount = (m.dataWindow.yMax + 1) / z.scanlineBlockSize;
      for (var V = 0; V < z.blockCount; V++)
        Z(y, x);
      z.outputChannels = z.channels == 3 ? 4 : z.channels;
      const W = z.width * z.height * z.outputChannels;
      switch (H) {
        case _r:
          z.byteArray = new Float32Array(W), z.channels < z.outputChannels && z.byteArray.fill(1, 0, W);
          break;
        case Ot:
          z.byteArray = new Uint16Array(W), z.channels < z.outputChannels && z.byteArray.fill(15360, 0, W);
          break;
        default:
          console.error("THREE.EXRLoader: unsupported type: ", H);
          break;
      }
      return z.bytesPerLine = z.width * z.inputSize * z.channels, z.outputChannels == 4 ? z.format = Zi : z.format = pA, zi ? z.colorSpace = "srgb-linear" : z.encoding = 3e3, z;
    }
    const ro = new DataView(r), Fo = new Uint8Array(r), nr = { value: 0 }, gr = to(ro, r, nr), _e = To(gr, ro, Fo, nr, this.type), Ai = { value: 0 }, Ro = { R: 0, G: 1, B: 2, A: 3, Y: 0 };
    for (let m = 0; m < _e.height / _e.scanlineBlockSize; m++) {
      const y = Cn(ro, nr);
      _e.size = Cn(ro, nr), _e.lines = y + _e.scanlineBlockSize > _e.height ? _e.height - y : _e.scanlineBlockSize;
      const x = _e.size < _e.lines * _e.bytesPerLine ? _e.uncompress(_e) : ln(_e);
      nr.value += _e.size;
      for (let H = 0; H < _e.scanlineBlockSize; H++) {
        const z = H + m * _e.scanlineBlockSize;
        if (z >= _e.height)
          break;
        for (let V = 0; V < _e.channels; V++) {
          const W = Ro[gr.channels[V].name];
          for (let oe = 0; oe < _e.width; oe++) {
            Ai.value = (H * (_e.channels * _e.width) + V * _e.width + oe) * _e.inputSize;
            const re = (_e.height - 1 - z) * (_e.width * _e.outputChannels) + oe * _e.outputChannels + W;
            _e.byteArray[re] = _e.getter(x, Ai);
          }
        }
      }
    }
    return {
      header: gr,
      width: _e.width,
      height: _e.height,
      data: _e.byteArray,
      format: _e.format,
      [zi ? "colorSpace" : "encoding"]: _e[zi ? "colorSpace" : "encoding"],
      type: this.type
    };
  }
  setDataType(r) {
    return this.type = r, this;
  }
  load(r, i, s, l) {
    function c(d, h) {
      zi ? d.colorSpace = h.colorSpace : d.encoding = h.encoding, d.minFilter = kt, d.magFilter = kt, d.generateMipmaps = !1, d.flipY = !1, i && i(d, h);
    }
    return super.load(r, c, s, l);
  }
}
const tu = /* @__PURE__ */ new WeakMap();
class dB extends Tu {
  constructor(r) {
    super(r), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
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
  setDecoderPath(r) {
    return this.decoderPath = r, this;
  }
  setDecoderConfig(r) {
    return this.decoderConfig = r, this;
  }
  setWorkerLimit(r) {
    return this.workerLimit = r, this;
  }
  load(r, i, s, l) {
    const c = new $r(this.manager);
    c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(this.withCredentials), c.load(
      r,
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
  decodeDracoFile(r, i, s, l) {
    const c = {
      attributeIDs: s || this.defaultAttributeIDs,
      attributeTypes: l || this.defaultAttributeTypes,
      useUniqueIDs: !!s
    };
    this.decodeGeometry(r, c).then(i);
  }
  decodeGeometry(r, i) {
    for (const p in i.attributeTypes) {
      const A = i.attributeTypes[p];
      A.BYTES_PER_ELEMENT !== void 0 && (i.attributeTypes[p] = A.name);
    }
    const s = JSON.stringify(i);
    if (tu.has(r)) {
      const p = tu.get(r);
      if (p.key === s)
        return p.promise;
      if (r.byteLength === 0)
        throw new Error(
          "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
        );
    }
    let l;
    const c = this.workerNextTaskID++, d = r.byteLength, h = this._getWorker(c, d).then((p) => (l = p, new Promise((A, v) => {
      l._callbacks[c] = { resolve: A, reject: v }, l.postMessage({ type: "decode", id: c, taskConfig: i, buffer: r }, [r]);
    }))).then((p) => this._createGeometry(p.geometry));
    return h.catch(() => !0).then(() => {
      l && c && this._releaseTask(l, c);
    }), tu.set(r, {
      key: s,
      promise: h
    }), h;
  }
  _createGeometry(r) {
    const i = new Bp();
    r.index && i.setIndex(new Qi(r.index.array, 1));
    for (let s = 0; s < r.attributes.length; s++) {
      const l = r.attributes[s], c = l.name, d = l.array, h = l.itemSize;
      i.setAttribute(c, new Qi(d, h));
    }
    return i;
  }
  _loadLibrary(r, i) {
    const s = new $r(this.manager);
    return s.setPath(this.decoderPath), s.setResponseType(i), s.setWithCredentials(this.withCredentials), new Promise((l, c) => {
      s.load(r, l, void 0, c);
    });
  }
  preload() {
    return this._initDecoder(), this;
  }
  _initDecoder() {
    if (this.decoderPending)
      return this.decoderPending;
    const r = typeof WebAssembly != "object" || this.decoderConfig.type === "js", i = [];
    return r ? i.push(this._loadLibrary("draco_decoder.js", "text")) : (i.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), i.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(i).then((s) => {
      const l = s[0];
      r || (this.decoderConfig.wasmBinary = s[1]);
      const c = pB.toString(), d = [
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
  _getWorker(r, i) {
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
      return s._taskCosts[r] = i, s._taskLoad += i, s;
    });
  }
  _releaseTask(r, i) {
    r._taskLoad -= r._taskCosts[i], delete r._callbacks[i], delete r._taskCosts[i];
  }
  debug() {
    console.log(
      "Task load: ",
      this.workerPool.map((r) => r._taskLoad)
    );
  }
  dispose() {
    for (let r = 0; r < this.workerPool.length; ++r)
      this.workerPool[r].terminate();
    return this.workerPool.length = 0, this;
  }
}
function pB() {
  let a, r;
  onmessage = function(d) {
    const h = d.data;
    switch (h.type) {
      case "init":
        a = h.decoderConfig, r = new Promise(function(v) {
          a.onModuleLoaded = function(g) {
            v({ draco: g });
          }, DracoDecoderModule(a);
        });
        break;
      case "decode":
        const p = h.buffer, A = h.taskConfig;
        r.then((v) => {
          const g = v.draco, B = new g.Decoder(), C = new g.DecoderBuffer();
          C.Init(new Int8Array(p), p.byteLength);
          try {
            const E = i(g, B, C, A), D = E.attributes.map((R) => R.array.buffer);
            E.index && D.push(E.index.array.buffer), self.postMessage({ type: "decode", id: h.id, geometry: E }, D);
          } catch (E) {
            console.error(E), self.postMessage({ type: "error", id: h.id, error: E.message });
          } finally {
            g.destroy(C), g.destroy(B);
          }
        });
        break;
    }
  };
  function i(d, h, p, A) {
    const v = A.attributeIDs, g = A.attributeTypes;
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
    const D = { index: null, attributes: [] };
    for (const R in v) {
      const w = self[g[R]];
      let F, N;
      if (A.useUniqueIDs)
        N = v[R], F = h.GetAttributeByUniqueId(B, N);
      else {
        if (N = h.GetAttributeId(B, d[v[R]]), N === -1)
          continue;
        F = h.GetAttribute(B, N);
      }
      D.attributes.push(l(d, h, B, R, w, F));
    }
    return E === d.TRIANGULAR_MESH && (D.index = s(d, h, B)), d.destroy(B), D;
  }
  function s(d, h, p) {
    const v = p.num_faces() * 3, g = v * 4, B = d._malloc(g);
    h.GetTrianglesUInt32Array(p, g, B);
    const C = new Uint32Array(d.HEAPF32.buffer, B, v).slice();
    return d._free(B), { array: C, itemSize: 1 };
  }
  function l(d, h, p, A, v, g) {
    const B = g.num_components(), E = p.num_points() * B, D = E * v.BYTES_PER_ELEMENT, R = c(d, v), w = d._malloc(D);
    h.GetAttributeDataArrayForAllPoints(p, g, R, D, w);
    const F = new v(d.HEAPF32.buffer, w, E).slice();
    return d._free(w), {
      name: A,
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
const lp = /* @__PURE__ */ new da(), Qs = /* @__PURE__ */ new Ke();
class Hu extends hA {
  constructor() {
    super(), this.isLineSegmentsGeometry = !0, this.type = "LineSegmentsGeometry";
    const r = [-1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1, -1, 0], i = [-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2], s = [0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5];
    this.setIndex(s), this.setAttribute("position", new Td(r, 3)), this.setAttribute("uv", new Td(i, 2));
  }
  applyMatrix4(r) {
    const i = this.attributes.instanceStart, s = this.attributes.instanceEnd;
    return i !== void 0 && (i.applyMatrix4(r), s.applyMatrix4(r), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  setPositions(r) {
    let i;
    r instanceof Float32Array ? i = r : Array.isArray(r) && (i = new Float32Array(r));
    const s = new fu(i, 6, 1);
    return this.setAttribute("instanceStart", new Bo(s, 3, 0)), this.setAttribute("instanceEnd", new Bo(s, 3, 3)), this.computeBoundingBox(), this.computeBoundingSphere(), this;
  }
  setColors(r, i = 3) {
    let s;
    r instanceof Float32Array ? s = r : Array.isArray(r) && (s = new Float32Array(r));
    const l = new fu(s, i * 2, 1);
    return this.setAttribute("instanceColorStart", new Bo(l, i, 0)), this.setAttribute("instanceColorEnd", new Bo(l, i, i)), this;
  }
  fromWireframeGeometry(r) {
    return this.setPositions(r.attributes.position.array), this;
  }
  fromEdgesGeometry(r) {
    return this.setPositions(r.attributes.position.array), this;
  }
  fromMesh(r) {
    return this.fromWireframeGeometry(new mA(r.geometry)), this;
  }
  fromLineSegments(r) {
    const i = r.geometry;
    return this.setPositions(i.attributes.position.array), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new da());
    const r = this.attributes.instanceStart, i = this.attributes.instanceEnd;
    r !== void 0 && i !== void 0 && (this.boundingBox.setFromBufferAttribute(r), lp.setFromBufferAttribute(i), this.boundingBox.union(lp));
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Fu()), this.boundingBox === null && this.computeBoundingBox();
    const r = this.attributes.instanceStart, i = this.attributes.instanceEnd;
    if (r !== void 0 && i !== void 0) {
      const s = this.boundingSphere.center;
      this.boundingBox.getCenter(s);
      let l = 0;
      for (let c = 0, d = r.count; c < d; c++)
        Qs.fromBufferAttribute(r, c), l = Math.max(l, s.distanceToSquared(Qs)), Qs.fromBufferAttribute(i, c), l = Math.max(l, s.distanceToSquared(Qs));
      this.boundingSphere.radius = Math.sqrt(l), isNaN(this.boundingSphere.radius) && console.error(
        "THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",
        this
      );
    }
  }
  toJSON() {
  }
  applyMatrix(r) {
    return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."), this.applyMatrix4(r);
  }
}
class oh extends Hu {
  constructor() {
    super(), this.isLineGeometry = !0, this.type = "LineGeometry";
  }
  setPositions(r) {
    const i = r.length - 3, s = new Float32Array(2 * i);
    for (let l = 0; l < i; l += 3)
      s[2 * l] = r[l], s[2 * l + 1] = r[l + 1], s[2 * l + 2] = r[l + 2], s[2 * l + 3] = r[l + 3], s[2 * l + 4] = r[l + 4], s[2 * l + 5] = r[l + 5];
    return super.setPositions(s), this;
  }
  setColors(r, i = 3) {
    const s = r.length - i, l = new Float32Array(2 * s);
    if (i === 3)
      for (let c = 0; c < s; c += i)
        l[2 * c] = r[c], l[2 * c + 1] = r[c + 1], l[2 * c + 2] = r[c + 2], l[2 * c + 3] = r[c + 3], l[2 * c + 4] = r[c + 4], l[2 * c + 5] = r[c + 5];
    else
      for (let c = 0; c < s; c += i)
        l[2 * c] = r[c], l[2 * c + 1] = r[c + 1], l[2 * c + 2] = r[c + 2], l[2 * c + 3] = r[c + 3], l[2 * c + 4] = r[c + 4], l[2 * c + 5] = r[c + 5], l[2 * c + 6] = r[c + 6], l[2 * c + 7] = r[c + 7];
    return super.setColors(l, i), this;
  }
  fromLine(r) {
    const i = r.geometry;
    return this.setPositions(i.attributes.position.array), this;
  }
}
class Nu extends fa {
  constructor(r) {
    super({
      type: "LineMaterial",
      uniforms: Fd.clone(
        Fd.merge([
          Rd.common,
          Rd.fog,
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
					#include <${ts >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
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
    }), this.setValues(r);
  }
}
const ru = /* @__PURE__ */ new hi(), up = /* @__PURE__ */ new Ke(), cp = /* @__PURE__ */ new Ke(), jn = /* @__PURE__ */ new hi(), Kn = /* @__PURE__ */ new hi(), sr = /* @__PURE__ */ new hi(), ou = /* @__PURE__ */ new Ke(), iu = /* @__PURE__ */ new Wi(), Qn = /* @__PURE__ */ new gA(), fp = /* @__PURE__ */ new Ke(), Xs = /* @__PURE__ */ new da(), Ys = /* @__PURE__ */ new Fu(), ar = /* @__PURE__ */ new hi();
let ur, So;
function dp(a, r, i) {
  return ar.set(0, 0, -r, 1).applyMatrix4(a.projectionMatrix), ar.multiplyScalar(1 / ar.w), ar.x = So / i.width, ar.y = So / i.height, ar.applyMatrix4(a.projectionMatrixInverse), ar.multiplyScalar(1 / ar.w), Math.abs(Math.max(ar.x, ar.y));
}
function hB(a, r) {
  const i = a.matrixWorld, s = a.geometry, l = s.attributes.instanceStart, c = s.attributes.instanceEnd, d = Math.min(s.instanceCount, l.count);
  for (let h = 0, p = d; h < p; h++) {
    Qn.start.fromBufferAttribute(l, h), Qn.end.fromBufferAttribute(c, h), Qn.applyMatrix4(i);
    const A = new Ke(), v = new Ke();
    ur.distanceSqToSegment(Qn.start, Qn.end, v, A), v.distanceTo(A) < So * 0.5 && r.push({
      point: v,
      pointOnLine: A,
      distance: ur.origin.distanceTo(v),
      object: a,
      face: null,
      faceIndex: h,
      uv: null,
      [Wp]: null
    });
  }
}
function mB(a, r, i) {
  const s = r.projectionMatrix, c = a.material.resolution, d = a.matrixWorld, h = a.geometry, p = h.attributes.instanceStart, A = h.attributes.instanceEnd, v = Math.min(h.instanceCount, p.count), g = -r.near;
  ur.at(1, sr), sr.w = 1, sr.applyMatrix4(r.matrixWorldInverse), sr.applyMatrix4(s), sr.multiplyScalar(1 / sr.w), sr.x *= c.x / 2, sr.y *= c.y / 2, sr.z = 0, ou.copy(sr), iu.multiplyMatrices(r.matrixWorldInverse, d);
  for (let B = 0, C = v; B < C; B++) {
    if (jn.fromBufferAttribute(p, B), Kn.fromBufferAttribute(A, B), jn.w = 1, Kn.w = 1, jn.applyMatrix4(iu), Kn.applyMatrix4(iu), jn.z > g && Kn.z > g)
      continue;
    if (jn.z > g) {
      const N = jn.z - Kn.z, U = (jn.z - g) / N;
      jn.lerp(Kn, U);
    } else if (Kn.z > g) {
      const N = Kn.z - jn.z, U = (Kn.z - g) / N;
      Kn.lerp(jn, U);
    }
    jn.applyMatrix4(s), Kn.applyMatrix4(s), jn.multiplyScalar(1 / jn.w), Kn.multiplyScalar(1 / Kn.w), jn.x *= c.x / 2, jn.y *= c.y / 2, Kn.x *= c.x / 2, Kn.y *= c.y / 2, Qn.start.copy(jn), Qn.start.z = 0, Qn.end.copy(Kn), Qn.end.z = 0;
    const D = Qn.closestPointToPointParameter(ou, !0);
    Qn.at(D, fp);
    const R = yp.lerp(jn.z, Kn.z, D), w = R >= -1 && R <= 1, F = ou.distanceTo(fp) < So * 0.5;
    if (w && F) {
      Qn.start.fromBufferAttribute(p, B), Qn.end.fromBufferAttribute(A, B), Qn.start.applyMatrix4(d), Qn.end.applyMatrix4(d);
      const N = new Ke(), U = new Ke();
      ur.distanceSqToSegment(Qn.start, Qn.end, U, N), i.push({
        point: U,
        pointOnLine: N,
        distance: ur.origin.distanceTo(U),
        object: a,
        face: null,
        faceIndex: B,
        uv: null,
        [Wp]: null
      });
    }
  }
}
class ih extends $i {
  constructor(r = new Hu(), i = new Nu({ color: Math.random() * 16777215 })) {
    super(r, i), this.isLineSegments2 = !0, this.type = "LineSegments2";
  }
  // for backwards-compatibility, but could be a method of LineSegmentsGeometry...
  computeLineDistances() {
    const r = this.geometry, i = r.attributes.instanceStart, s = r.attributes.instanceEnd, l = new Float32Array(2 * i.count);
    for (let d = 0, h = 0, p = i.count; d < p; d++, h += 2)
      up.fromBufferAttribute(i, d), cp.fromBufferAttribute(s, d), l[h] = h === 0 ? 0 : l[h - 1], l[h + 1] = l[h] + up.distanceTo(cp);
    const c = new fu(l, 2, 1);
    return r.setAttribute("instanceDistanceStart", new Bo(c, 1, 0)), r.setAttribute("instanceDistanceEnd", new Bo(c, 1, 1)), this;
  }
  raycast(r, i) {
    const s = this.material.worldUnits, l = r.camera;
    l === null && !s && console.error(
      'LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'
    );
    const c = r.params.Line2 !== void 0 && r.params.Line2.threshold || 0;
    ur = r.ray;
    const d = this.matrixWorld, h = this.geometry, p = this.material;
    So = p.linewidth + c, h.boundingSphere === null && h.computeBoundingSphere(), Ys.copy(h.boundingSphere).applyMatrix4(d);
    let A;
    if (s)
      A = So * 0.5;
    else {
      const g = Math.max(l.near, Ys.distanceToPoint(ur.origin));
      A = dp(l, g, p.resolution);
    }
    if (Ys.radius += A, ur.intersectsSphere(Ys) === !1)
      return;
    h.boundingBox === null && h.computeBoundingBox(), Xs.copy(h.boundingBox).applyMatrix4(d);
    let v;
    if (s)
      v = So * 0.5;
    else {
      const g = Math.max(l.near, Xs.distanceToPoint(ur.origin));
      v = dp(l, g, p.resolution);
    }
    Xs.expandByScalar(v), ur.intersectsBox(Xs) !== !1 && (s ? hB(this, i) : mB(this, l, i));
  }
  onBeforeRender(r) {
    const i = this.material.uniforms;
    i && i.resolution && (r.getViewport(ru), this.material.uniforms.resolution.value.set(ru.z, ru.w));
  }
}
class gB extends ih {
  constructor(r = new oh(), i = new Nu({ color: Math.random() * 16777215 })) {
    super(r, i), this.isLine2 = !0, this.type = "Line2";
  }
}
let Ws;
const su = () => {
  if (Ws)
    return Ws;
  const a = "B9h9z9tFBBBF8fL9gBB9gLaaaaaFa9gEaaaB9gFaFa9gEaaaFaEMcBFFFGGGEIIILF9wFFFLEFBFKNFaFCx/IFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBF8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBGy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBEn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBIi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBKI9z9iqlBOc+x8ycGBM/qQFTa8jUUUUBCU/EBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAGTkUUUBRNCUoBAG9uC/wgBZHKCUGAKCUG9JyRVAECFJRICBRcGXEXAcAF9PQFAVAFAclAcAVJAF9JyRMGXGXAG9FQBAMCbJHKC9wZRSAKCIrCEJCGrRQANCUGJRfCBRbAIRTEXGXAOATlAQ9PQBCBRISEMATAQJRIGXAS9FQBCBRtCBREEXGXAOAIlCi9PQBCBRISLMANCU/CBJAEJRKGXGXGXGXGXATAECKrJ2BBAtCKZrCEZfIBFGEBMAKhB83EBAKCNJhB83EBSEMAKAI2BIAI2BBHmCKrHYAYCE6HYy86BBAKCFJAICIJAYJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCGJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCEJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCIJAYAmJHY2BBAI2BFHmCKrHPAPCE6HPy86BBAKCLJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCKJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCOJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCNJAYAmJHY2BBAI2BGHmCKrHPAPCE6HPy86BBAKCVJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCcJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCMJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCSJAYAmJHm2BBAI2BEHICKrHYAYCE6HYy86BBAKCQJAmAYJHm2BBAICIrCEZHYAYCE6HYy86BBAKCfJAmAYJHm2BBAICGrCEZHYAYCE6HYy86BBAKCbJAmAYJHK2BBAICEZHIAICE6HIy86BBAKAIJRISGMAKAI2BNAI2BBHmCIrHYAYCb6HYy86BBAKCFJAICNJAYJHY2BBAmCbZHmAmCb6Hmy86BBAKCGJAYAmJHm2BBAI2BFHYCIrHPAPCb6HPy86BBAKCEJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCIJAmAYJHm2BBAI2BGHYCIrHPAPCb6HPy86BBAKCLJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCKJAmAYJHm2BBAI2BEHYCIrHPAPCb6HPy86BBAKCOJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCNJAmAYJHm2BBAI2BIHYCIrHPAPCb6HPy86BBAKCVJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCcJAmAYJHm2BBAI2BLHYCIrHPAPCb6HPy86BBAKCMJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCSJAmAYJHm2BBAI2BKHYCIrHPAPCb6HPy86BBAKCQJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCfJAmAYJHm2BBAI2BOHICIrHYAYCb6HYy86BBAKCbJAmAYJHK2BBAICbZHIAICb6HIy86BBAKAIJRISFMAKAI8pBB83BBAKCNJAICNJ8pBB83BBAICTJRIMAtCGJRtAECTJHEAS9JQBMMGXAIQBCBRISEMGXAM9FQBANAbJ2BBRtCBRKAfREEXAEANCU/CBJAKJ2BBHTCFrCBATCFZl9zAtJHt86BBAEAGJREAKCFJHKAM9HQBMMAfCFJRfAIRTAbCFJHbAG9HQBMMABAcAG9sJANCUGJAMAG9sTkUUUBpANANCUGJAMCaJAG9sJAGTkUUUBpMAMCBAIyAcJRcAIQBMC9+RKSFMCBC99AOAIlAGCAAGCA9Ly6yRKMALCU/EBJ8kUUUUBAKM+OmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUFT+JUUUBpALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM+lLKFaF99GaG99FaG99GXGXAGCI9HQBAF9FQFEXGXGX9DBBB8/9DBBB+/ABCGJHG1BB+yAB1BBHE+yHI+L+TABCFJHL1BBHK+yHO+L+THN9DBBBB9gHVyAN9DBB/+hANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE86BBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG86BBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG86BBABCIJRBAFCaJHFQBSGMMAF9FQBEXGXGX9DBBB8/9DBBB+/ABCIJHG8uFB+yAB8uFBHE+yHI+L+TABCGJHL8uFBHK+yHO+L+THN9DBBBB9gHVyAN9DB/+g6ANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE87FBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG87FBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG87FBABCNJRBAFCaJHFQBMMM/SEIEaE99EaF99GXAF9FQBCBREABRIEXGXGX9D/zI818/AICKJ8uFBHLCEq+y+VHKAI8uFB+y+UHO9DB/+g6+U9DBBB8/9DBBB+/AO9DBBBB9gy+SHN+L9DBBB9P9d9FQBAN+oRVSFMCUUUU94RVMAICIJ8uFBRcAICGJ8uFBRMABALCFJCEZAEqCFWJAV87FBGXGXAKAM+y+UHN9DB/+g6+U9DBBB8/9DBBB+/AN9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRMSFMCUUUU94RMMABALCGJCEZAEqCFWJAM87FBGXGXAKAc+y+UHK9DB/+g6+U9DBBB8/9DBBB+/AK9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRcSFMCUUUU94RcMABALCaJCEZAEqCFWJAc87FBGXGX9DBBU8/AOAO+U+TANAN+U+TAKAK+U+THO9DBBBBAO9DBBBB9gy+R9DB/+g6+U9DBBB8/+SHO+L9DBBB9P9d9FQBAO+oRcSFMCUUUU94RcMABALCEZAEqCFWJAc87FBAICNJRIAECIJREAFCaJHFQBMMM9JBGXAGCGrAF9sHF9FQBEXABAB8oGBHGCNWCN91+yAGCi91CnWCUUU/8EJ+++U84GBABCIJRBAFCaJHFQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEM/lFFFaGXGXAFABqCEZ9FQBABRESFMGXGXAGCT9PQBABRESFMABREEXAEAF8oGBjGBAECIJAFCIJ8oGBjGBAECNJAFCNJ8oGBjGBAECSJAFCSJ8oGBjGBAECTJREAFCTJRFAGC9wJHGCb9LQBMMAGCI9JQBEXAEAF8oGBjGBAFCIJRFAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF2BB86BBAECFJREAFCFJRFAGCaJHGQBMMABMoFFGaGXGXABCEZ9FQBABRESFMAFCgFZC+BwsN9sRIGXGXAGCT9PQBABRESFMABREEXAEAIjGBAECSJAIjGBAECNJAIjGBAECIJAIjGBAECTJREAGC9wJHGCb9LQBMMAGCI9JQBEXAEAIjGBAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF86BBAECFJREAGCaJHGQBMMABMMMFBCUNMIT9kBB", r = "B9h9z9tFBBBFiI9gBB9gLaaaaaFa9gEaaaB9gFaFaEMcBBFBFFGGGEILF9wFFFLEFBFKNFaFCx/aFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBG8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBIy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBKi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBOn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBNI9z9iqlBVc+N9IcIBTEM9+FLa8jUUUUBCTlRBCBRFEXCBRGCBREEXABCNJAGJAECUaAFAGrCFZHIy86BBAEAIJREAGCFJHGCN9HQBMAFCx+YUUBJAE86BBAFCEWCxkUUBJAB8pEN83EBAFCFJHFCUG9HQBMMk8lLbaE97F9+FaL978jUUUUBCU/KBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAG/8cBBCUoBAG9uC/wgBZHKCUGAKCUG9JyRNAECFJRKCBRVGXEXAVAF9PQFANAFAVlAVANJAF9JyRcGXGXAG9FQBAcCbJHIC9wZHMCE9sRSAMCFWRQAICIrCEJCGrRfCBRbEXAKRTCBRtGXEXGXAOATlAf9PQBCBRKSLMALCU/CBJAtAM9sJRmATAfJRKCBREGXAMCoB9JQBAOAKlC/gB9JQBCBRIEXAmAIJREGXGXGXGXGXATAICKrJ2BBHYCEZfIBFGEBMAECBDtDMIBSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIBAKCTJRKMGXGXGXGXGXAYCGrCEZfIBFGEBMAECBDtDMITSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMITAKCTJRKMGXGXGXGXGXAYCIrCEZfIBFGEBMAECBDtDMIASEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIAAKCTJRKMGXGXGXGXGXAYCKrfIBFGEBMAECBDtDMI8wSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCIJAeDeBJAYCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCNJAeDeBJAYCx+YUUBJ2BBJRKSFMAEAKDBBBDMI8wAKCTJRKMAICoBJREAICUFJAM9LQFAERIAOAKlC/fB9LQBMMGXAEAM9PQBAECErRIEXGXAOAKlCi9PQBCBRKSOMAmAEJRYGXGXGXGXGXATAECKrJ2BBAICKZrCEZfIBFGEBMAYCBDtDMIBSEMAYAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAYAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAYAKDBBBDMIBAKCTJRKMAICGJRIAECTJHEAM9JQBMMGXAK9FQBAKRTAtCFJHtCI6QGSFMMCBRKSEMGXAM9FQBALCUGJAbJREALAbJDBGBReCBRYEXAEALCU/CBJAYJHIDBIBHdCFD9tAdCFDbHPD9OD9hD9RHdAIAMJDBIBH8ZCFD9tA8ZAPD9OD9hD9RH8ZDQBTFtGmEYIPLdKeOnHpAIAQJDBIBHyCFD9tAyAPD9OD9hD9RHyAIASJDBIBH8cCFD9tA8cAPD9OD9hD9RH8cDQBTFtGmEYIPLdKeOnH8dDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGEAeD9uHeDyBjGBAEAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeApA8dDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNiV8ZcpMyS8cQ8df8eb8fHdAyA8cDQNiV8ZcpMyS8cQ8df8eb8fH8ZDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJREAYCTJHYAM9JQBMMAbCIJHbAG9JQBMMABAVAG9sJALCUGJAcAG9s/8cBBALALCUGJAcCaJAG9sJAG/8cBBMAcCBAKyAVJRVAKQBMC9+RKSFMCBC99AOAKlAGCAAGCA9Ly6yRKMALCU/KBJ8kUUUUBAKMNBT+BUUUBM+KmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUF/8MBALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM/dLEK97FaF97GXGXAGCI9HQBAF9FQFCBRGEXABABDBBBHECiD+rFCiD+sFD/6FHIAECND+rFCiD+sFD/6FAID/gFAECTD+rFCiD+sFD/6FHLD/gFD/kFD/lFHKCBDtD+2FHOAICUUUU94DtHND9OD9RD/kFHI9DBB/+hDYAIAID/mFAKAKD/mFALAOALAND9OD9RD/kFHIAID/mFD/kFD/kFD/jFD/nFHLD/mF9DBBX9LDYHOD/kFCgFDtD9OAECUUU94DtD9OD9QAIALD/mFAOD/kFCND+rFCU/+EDtD9OD9QAKALD/mFAOD/kFCTD+rFCUU/8ODtD9OD9QDMBBABCTJRBAGCIJHGAF9JQBSGMMAF9FQBCBRGEXABCTJHVAVDBBBHECBDtHOCUU98D8cFCUU98D8cEHND9OABDBBBHKAEDQILKOSQfbPden8c8d8e8fCggFDtD9OD/6FAKAEDQBFGENVcMTtmYi8ZpyHECTD+sFD/6FHID/gFAECTD+rFCTD+sFD/6FHLD/gFD/kFD/lFHE9DB/+g6DYALAEAOD+2FHOALCUUUU94DtHcD9OD9RD/kFHLALD/mFAEAED/mFAIAOAIAcD9OD9RD/kFHEAED/mFD/kFD/kFD/jFD/nFHID/mF9DBBX9LDYHOD/kFCTD+rFALAID/mFAOD/kFCggEDtD9OD9QHLAEAID/mFAOD/kFCaDbCBDnGCBDnECBDnKCBDnOCBDncCBDnMCBDnfCBDnbD9OHEDQNVi8ZcMpySQ8c8dfb8e8fD9QDMBBABAKAND9OALAEDQBFTtGEmYILPdKOenD9QDMBBABCAJRBAGCIJHGAF9JQBMMM/hEIGaF97FaL978jUUUUBCTlREGXAF9FQBCBRIEXAEABDBBBHLABCTJHKDBBBHODQILKOSQfbPden8c8d8e8fHNCTD+sFHVCID+rFDMIBAB9DBBU8/DY9D/zI818/DYAVCEDtD9QD/6FD/nFHVALAODQBFGENVcMTtmYi8ZpyHLCTD+rFCTD+sFD/6FD/mFHOAOD/mFAVALCTD+sFD/6FD/mFHcAcD/mFAVANCTD+rFCTD+sFD/6FD/mFHNAND/mFD/kFD/kFD/lFCBDtD+4FD/jF9DB/+g6DYHVD/mF9DBBX9LDYHLD/kFCggEDtHMD9OAcAVD/mFALD/kFCTD+rFD9QHcANAVD/mFALD/kFCTD+rFAOAVD/mFALD/kFAMD9OD9QHVDQBFTtGEmYILPdKOenHLD8dBAEDBIBDyB+t+J83EBABCNJALD8dFAEDBIBDyF+t+J83EBAKAcAVDQNVi8ZcMpySQ8c8dfb8e8fHVD8dBAEDBIBDyG+t+J83EBABCiJAVD8dFAEDBIBDyE+t+J83EBABCAJRBAICIJHIAF9JQBMMM9jFF97GXAGCGrAF9sHG9FQBCBRFEXABABDBBBHECND+rFCND+sFD/6FAECiD+sFCnD+rFCUUU/8EDtD+uFD/mFDMBBABCTJRBAFCIJHFAG9JQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEMMMFBCUNMIT9tBB", i = new Uint8Array([
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
  WebAssembly.validate(i) && (l = r);
  let c;
  const d = WebAssembly.instantiate(h(l), {}).then((g) => {
    c = g.instance, c.exports.__wasm_call_ctors();
  });
  function h(g) {
    const B = new Uint8Array(g.length);
    for (let E = 0; E < g.length; ++E) {
      const D = g.charCodeAt(E);
      B[E] = D > 96 ? D - 71 : D > 64 ? D - 65 : D > 47 ? D + 4 : D > 46 ? 63 : 62;
    }
    let C = 0;
    for (let E = 0; E < g.length; ++E)
      B[C++] = B[E] < 60 ? s[B[E]] : (B[E] - 60) * 64 + B[++E];
    return B.buffer.slice(0, C);
  }
  function p(g, B, C, E, D, R) {
    const w = c.exports.sbrk, F = C + 3 & -4, N = w(F * E), U = w(D.length), j = new Uint8Array(c.exports.memory.buffer);
    j.set(D, U);
    const L = g(N, C, E, U, D.length);
    if (L === 0 && R && R(N, F, E), B.set(j.subarray(N, N + C * E)), w(N - w(0)), L !== 0)
      throw new Error(`Malformed buffer data: ${L}`);
  }
  const A = {
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
  return Ws = {
    ready: d,
    supported: !0,
    decodeVertexBuffer(g, B, C, E, D) {
      p(
        c.exports.meshopt_decodeVertexBuffer,
        g,
        B,
        C,
        E,
        c.exports[A[D]]
      );
    },
    decodeIndexBuffer(g, B, C, E) {
      p(c.exports.meshopt_decodeIndexBuffer, g, B, C, E);
    },
    decodeIndexSequence(g, B, C, E) {
      p(c.exports.meshopt_decodeIndexSequence, g, B, C, E);
    },
    decodeGltfBuffer(g, B, C, E, D, R) {
      p(
        c.exports[v[D]],
        g,
        B,
        C,
        E,
        c.exports[A[R]]
      );
    }
  }, Ws;
}, Zs = /* @__PURE__ */ X.forwardRef(function({
  points: r,
  color: i = 16777215,
  vertexColors: s,
  linewidth: l,
  lineWidth: c,
  segments: d,
  dashed: h,
  ...p
}, A) {
  var v, g;
  const B = et((w) => w.size), C = X.useMemo(() => d ? new ih() : new gB(), [d]), [E] = X.useState(() => new Nu()), D = (s == null || (v = s[0]) == null ? void 0 : v.length) === 4 ? 4 : 3, R = X.useMemo(() => {
    const w = d ? new Hu() : new oh(), F = r.map((N) => {
      const U = Array.isArray(N);
      return N instanceof Ke || N instanceof hi ? [N.x, N.y, N.z] : N instanceof $n ? [N.x, N.y, 0] : U && N.length === 3 ? [N[0], N[1], N[2]] : U && N.length === 2 ? [N[0], N[1], 0] : N;
    });
    if (w.setPositions(F.flat()), s) {
      i = 16777215;
      const N = s.map((U) => U instanceof eo ? U.toArray() : U);
      w.setColors(N.flat(), D);
    }
    return w;
  }, [r, d, s, D]);
  return X.useLayoutEffect(() => {
    C.computeLineDistances();
  }, [r, C]), X.useLayoutEffect(() => {
    h ? E.defines.USE_DASH = "" : delete E.defines.USE_DASH, E.needsUpdate = !0;
  }, [h, E]), X.useEffect(() => () => {
    R.dispose(), E.dispose();
  }, [R]), /* @__PURE__ */ X.createElement("primitive", wo({
    object: C,
    ref: A
  }, p), /* @__PURE__ */ X.createElement("primitive", {
    object: R,
    attach: "geometry"
  }), /* @__PURE__ */ X.createElement("primitive", wo({
    object: E,
    attach: "material",
    color: i,
    vertexColors: !!s,
    resolution: [B.width, B.height],
    linewidth: (g = l ?? c) !== null && g !== void 0 ? g : 1,
    dashed: h,
    transparent: D === 4
  }, p)));
});
let Vs = null, sh = "https://www.gstatic.com/draco/versioned/decoders/1.5.5/";
function ah(a = !0, r = !0, i) {
  return (s) => {
    i && i(s), a && (Vs || (Vs = new dB()), Vs.setDecoderPath(typeof a == "string" ? a : sh), s.setDRACOLoader(Vs)), r && s.setMeshoptDecoder(typeof su == "function" ? su() : su);
  };
}
const ma = (a, r, i, s) => Lr(Pu, a, ah(r, i, s));
ma.preload = (a, r, i, s) => Lr.preload(Pu, a, ah(r, i, s));
ma.clear = (a) => Lr.clear(Pu, a);
ma.setDecoderPath = (a) => {
  sh = a;
};
const AB = /* @__PURE__ */ X.forwardRef(({
  makeDefault: a,
  camera: r,
  regress: i,
  domElement: s,
  enableDamping: l = !0,
  keyEvents: c = !1,
  onChange: d,
  onStart: h,
  onEnd: p,
  ...A
}, v) => {
  const g = et((L) => L.invalidate), B = et((L) => L.camera), C = et((L) => L.gl), E = et((L) => L.events), D = et((L) => L.setEvents), R = et((L) => L.set), w = et((L) => L.get), F = et((L) => L.performance), N = r || B, U = s || E.connected || C.domElement, j = X.useMemo(() => new Tb(N), [N]);
  return pa(() => {
    j.enabled && j.update();
  }, -1), X.useEffect(() => (c && j.connect(c === !0 ? U : c), j.connect(U), () => {
    j.dispose();
  }), [c, U, i, j, g]), X.useEffect(() => {
    const L = (k) => {
      g(), i && F.regress(), d && d(k);
    }, Q = (k) => {
      h && h(k);
    }, O = (k) => {
      p && p(k);
    };
    return j.addEventListener("change", L), j.addEventListener("start", Q), j.addEventListener("end", O), () => {
      j.removeEventListener("start", Q), j.removeEventListener("end", O), j.removeEventListener("change", L);
    };
  }, [d, h, p, j, g, D]), X.useEffect(() => {
    if (a) {
      const L = w().controls;
      return R({
        controls: j
      }), () => R({
        controls: L
      });
    }
  }, [a, j]), /* @__PURE__ */ X.createElement("primitive", wo({
    ref: v,
    object: j,
    enableDamping: l
  }, A));
}), lh = (a, r, i) => {
  let s;
  switch (a) {
    case pu:
      s = new Uint8ClampedArray(r * i * 4);
      break;
    case Ot:
      s = new Uint16Array(r * i * 4);
      break;
    case CA:
      s = new Uint32Array(r * i * 4);
      break;
    case yA:
      s = new Int8Array(r * i * 4);
      break;
    case BA:
      s = new Int16Array(r * i * 4);
      break;
    case bA:
      s = new Int32Array(r * i * 4);
      break;
    case _r:
      s = new Float32Array(r * i * 4);
      break;
    default:
      throw new Error("Unsupported data type");
  }
  return s;
};
let qs;
const vB = (a, r, i, s) => {
  if (qs !== void 0)
    return qs;
  const l = new wp(1, 1, s);
  r.setRenderTarget(l);
  const c = new $i(new Mp(), new ai({ color: 16777215 }));
  r.render(c, i), r.setRenderTarget(null);
  const d = lh(a, l.width, l.height);
  return r.readRenderTargetPixels(l, 0, 0, l.width, l.height, d), l.dispose(), c.geometry.dispose(), c.material.dispose(), qs = d[0] !== 0, qs;
};
class Uu {
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
  constructor(r) {
    this._width = r.width, this._height = r.height, this._type = r.type, this._colorSpace = r.colorSpace;
    const i = {
      // fixed options
      format: Zi,
      depthBuffer: !1,
      stencilBuffer: !1,
      // user options
      type: this._type,
      // set in class property
      colorSpace: this._colorSpace,
      // set in class property
      anisotropy: r.renderTargetOptions?.anisotropy !== void 0 ? r.renderTargetOptions?.anisotropy : 1,
      generateMipmaps: r.renderTargetOptions?.generateMipmaps !== void 0 ? r.renderTargetOptions?.generateMipmaps : !1,
      magFilter: r.renderTargetOptions?.magFilter !== void 0 ? r.renderTargetOptions?.magFilter : kt,
      minFilter: r.renderTargetOptions?.minFilter !== void 0 ? r.renderTargetOptions?.minFilter : kt,
      samples: r.renderTargetOptions?.samples !== void 0 ? r.renderTargetOptions?.samples : void 0,
      wrapS: r.renderTargetOptions?.wrapS !== void 0 ? r.renderTargetOptions?.wrapS : xr,
      wrapT: r.renderTargetOptions?.wrapT !== void 0 ? r.renderTargetOptions?.wrapT : xr
    };
    if (this._material = r.material, r.renderer ? this._renderer = r.renderer : (this._renderer = Uu.instantiateRenderer(), this._rendererIsDisposable = !0), this._scene = new Sp(), this._camera = new Eo(), this._camera.position.set(0, 0, 10), this._camera.left = -0.5, this._camera.right = 0.5, this._camera.top = 0.5, this._camera.bottom = -0.5, this._camera.updateProjectionMatrix(), !vB(this._type, this._renderer, this._camera, i)) {
      let s;
      this._type === Ot && (s = this._renderer.extensions.has("EXT_color_buffer_float") ? _r : void 0), s !== void 0 ? (console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${_r}`), this._type = s) : (this._supportsReadPixels = !1, console.warn("This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown"));
    }
    this._quad = new $i(new Mp(), this._material), this._quad.geometry.computeBoundingBox(), this._scene.add(this._quad), this._renderTarget = new wp(this.width, this.height, i), this._renderTarget.texture.mapping = r.renderTargetOptions?.mapping !== void 0 ? r.renderTargetOptions?.mapping : ra;
  }
  /**
   * Instantiates a temporary renderer
   *
   * @returns
   */
  static instantiateRenderer() {
    const r = new AA();
    return r.setSize(128, 128), r;
  }
  /**
   * Renders the input texture using the specified material
   */
  render = () => {
    this._renderer.setRenderTarget(this._renderTarget);
    try {
      this._renderer.render(this._scene, this._camera);
    } catch (r) {
      throw this._renderer.setRenderTarget(null), r;
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
    const r = lh(this._type, this._width, this._height);
    return this._renderer.readRenderTargetPixels(this._renderTarget, 0, 0, this._width, this._height, r), r;
  }
  /**
   * Performs a readPixel operation in the renderTarget
   * and returns a DataTexture containing the read data
   *
   * @param options options
   * @returns
   */
  toDataTexture(r) {
    const i = new vA(
      // fixed values
      this.toArray(),
      this.width,
      this.height,
      Zi,
      this._type,
      // user values
      r?.mapping || ra,
      r?.wrapS || xr,
      r?.wrapT || xr,
      r?.magFilter || kt,
      r?.minFilter || kt,
      r?.anisotropy || 1,
      // fixed value
      du
    );
    return i.generateMipmaps = r?.generateMipmaps !== void 0 ? r?.generateMipmaps : !1, i;
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
  dispose(r) {
    this.disposeOnDemandRenderer(), r && this.renderTarget.dispose(), this.material instanceof fa && Object.values(this.material.uniforms).forEach((i) => {
      i.value instanceof Vr && i.value.dispose();
    }), Object.values(this.material).forEach((i) => {
      i instanceof Vr && i.dispose();
    }), this.material.dispose(), this._quad.geometry.dispose();
  }
  /**
   * Width of the texture
   */
  get width() {
    return this._width;
  }
  set width(r) {
    this._width = r, this._renderTarget.setSize(this._width, this._height);
  }
  /**
   * Height of the texture
   */
  get height() {
    return this._height;
  }
  set height(r) {
    this._height = r, this._renderTarget.setSize(this._width, this._height);
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
  set renderTarget(r) {
    this._renderTarget = r, this._width = r.width, this._height = r.height;
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
class uh extends Error {
}
class ch extends Error {
}
const Ji = (a, r, i) => {
  const s = new RegExp(`${r}="([^"]*)"`, "i").exec(a);
  if (s)
    return s[1];
  const l = new RegExp(`<${r}[^>]*>([\\s\\S]*?)</${r}>`, "i").exec(a);
  if (l) {
    const c = l[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);
    return c && c.length === 3 ? c.map((d) => d.replace(/<\/?rdf:li>/g, "")) : l[1].trim();
  }
  if (i !== void 0)
    return i;
  throw new Error(`Can't find ${r} in gainmap metadata`);
}, bB = (a) => {
  let r;
  typeof TextDecoder < "u" ? r = new TextDecoder().decode(a) : r = a.toString();
  let i = r.indexOf("<x:xmpmeta");
  for (; i !== -1; ) {
    const s = r.indexOf("x:xmpmeta>", i), l = r.slice(i, s + 10);
    try {
      const c = Ji(l, "hdrgm:GainMapMin", "0"), d = Ji(l, "hdrgm:GainMapMax"), h = Ji(l, "hdrgm:Gamma", "1"), p = Ji(l, "hdrgm:OffsetSDR", "0.015625"), A = Ji(l, "hdrgm:OffsetHDR", "0.015625"), v = /hdrgm:HDRCapacityMin="([^"]*)"/.exec(l), g = v ? v[1] : "0", B = /hdrgm:HDRCapacityMax="([^"]*)"/.exec(l);
      if (!B)
        throw new Error("Incomplete gainmap metadata");
      const C = B[1];
      return {
        gainMapMin: Array.isArray(c) ? c.map((E) => parseFloat(E)) : [parseFloat(c), parseFloat(c), parseFloat(c)],
        gainMapMax: Array.isArray(d) ? d.map((E) => parseFloat(E)) : [parseFloat(d), parseFloat(d), parseFloat(d)],
        gamma: Array.isArray(h) ? h.map((E) => parseFloat(E)) : [parseFloat(h), parseFloat(h), parseFloat(h)],
        offsetSdr: Array.isArray(p) ? p.map((E) => parseFloat(E)) : [parseFloat(p), parseFloat(p), parseFloat(p)],
        offsetHdr: Array.isArray(A) ? A.map((E) => parseFloat(E)) : [parseFloat(A), parseFloat(A), parseFloat(A)],
        hdrCapacityMin: parseFloat(g),
        hdrCapacityMax: parseFloat(C)
      };
    } catch {
    }
    i = r.indexOf("<x:xmpmeta", s);
  }
};
class BB {
  options;
  constructor(r) {
    this.options = {
      debug: r && r.debug !== void 0 ? r.debug : !1,
      extractFII: r && r.extractFII !== void 0 ? r.extractFII : !0,
      extractNonFII: r && r.extractNonFII !== void 0 ? r.extractNonFII : !0
    };
  }
  extract(r) {
    return new Promise((i, s) => {
      const l = this.options.debug, c = new DataView(r.buffer);
      if (c.getUint16(0) !== 65496) {
        s(new Error("Not a valid jpeg"));
        return;
      }
      const d = c.byteLength;
      let h = 2, p = 0, A;
      for (; h < d; ) {
        if (++p > 250) {
          s(new Error(`Found no marker after ${p} loops 😵`));
          return;
        }
        if (c.getUint8(h) !== 255) {
          s(new Error(`Not a valid marker at offset 0x${h.toString(16)}, found: 0x${c.getUint8(h).toString(16)}`));
          return;
        }
        if (A = c.getUint8(h + 1), l && console.log(`Marker: ${A.toString(16)}`), A === 226) {
          l && console.log("Found APP2 marker (0xffe2)");
          const v = h + 4;
          if (c.getUint32(v) === 1297106432) {
            const g = v + 4;
            let B;
            if (c.getUint16(g) === 18761)
              B = !1;
            else if (c.getUint16(g) === 19789)
              B = !0;
            else {
              s(new Error("No valid endianness marker found in TIFF header"));
              return;
            }
            if (c.getUint16(g + 2, !B) !== 42) {
              s(new Error("Not valid TIFF data! (no 0x002A marker)"));
              return;
            }
            const C = c.getUint32(g + 4, !B);
            if (C < 8) {
              s(new Error("Not valid TIFF data! (First offset less than 8)"));
              return;
            }
            const E = g + C, D = c.getUint16(E, !B), R = E + 2;
            let w = 0;
            for (let j = R; j < R + 12 * D; j += 12)
              c.getUint16(j, !B) === 45057 && (w = c.getUint32(j + 8, !B));
            const N = E + 2 + D * 12 + 4, U = [];
            for (let j = N; j < N + w * 16; j += 16) {
              const L = {
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
              L.dataOffset ? (L.start = g + L.dataOffset, L.isFII = !1) : (L.start = 0, L.isFII = !0), L.end = L.start + L.size, U.push(L);
            }
            if (this.options.extractNonFII && U.length) {
              const j = new Blob([c]), L = [];
              for (const Q of U) {
                if (Q.isFII && !this.options.extractFII)
                  continue;
                const O = j.slice(Q.start, Q.end + 1, "image/jpeg");
                L.push(O);
              }
              i(L);
            }
          }
        }
        h += 2 + c.getUint16(h + 2);
      }
    });
  }
}
const yB = async (a) => {
  const r = bB(a);
  if (!r)
    throw new ch("Gain map XMP metadata not found");
  const s = await new BB({ extractFII: !0, extractNonFII: !0 }).extract(a);
  if (s.length !== 2)
    throw new uh("Gain map recovery image not found");
  return {
    sdr: new Uint8Array(await s[0].arrayBuffer()),
    gainMap: new Uint8Array(await s[1].arrayBuffer()),
    metadata: r
  };
}, pp = (a) => new Promise((r, i) => {
  const s = document.createElement("img");
  s.onload = () => {
    r(s);
  }, s.onerror = (l) => {
    i(l);
  }, s.src = URL.createObjectURL(a);
});
class CB extends Tu {
  _renderer;
  _renderTargetOptions;
  _internalLoadingManager;
  _config;
  constructor(r, i) {
    super(i), this._config = r, r.renderer && (this._renderer = r.renderer), this._internalLoadingManager = new EA();
  }
  setRenderer(r) {
    return this._renderer = r, this;
  }
  setRenderTargetOptions(r) {
    return this._renderTargetOptions = r, this;
  }
  prepareQuadRenderer() {
    this._renderer || console.warn("WARNING: A Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.");
    const r = this._config.createMaterial({
      gainMapMax: [1, 1, 1],
      gainMapMin: [0, 0, 0],
      gamma: [1, 1, 1],
      offsetHdr: [1, 1, 1],
      offsetSdr: [1, 1, 1],
      hdrCapacityMax: 1,
      hdrCapacityMin: 0,
      maxDisplayBoost: 1,
      gainMap: new Vr(),
      sdr: new Vr()
    });
    return this._config.createQuadRenderer({
      width: 16,
      height: 16,
      type: Ot,
      colorSpace: du,
      material: r,
      renderer: this._renderer,
      renderTargetOptions: this._renderTargetOptions
    });
  }
  async processImages(r, i, s) {
    const l = i ? new Blob([i], { type: "image/jpeg" }) : void 0, c = new Blob([r], { type: "image/jpeg" });
    let d, h, p = !1;
    if (typeof createImageBitmap > "u") {
      const A = await Promise.all([
        l ? pp(l) : Promise.resolve(void 0),
        pp(c)
      ]);
      h = A[0], d = A[1], p = s === "flipY";
    } else {
      const A = await Promise.all([
        l ? createImageBitmap(l, { imageOrientation: s || "flipY" }) : Promise.resolve(void 0),
        createImageBitmap(c, { imageOrientation: s || "flipY" })
      ]);
      h = A[0], d = A[1];
    }
    return { sdrImage: d, gainMapImage: h, needsFlip: p };
  }
  createTextures(r, i, s) {
    const l = new Vr(i || new ImageData(2, 2), ra, xr, xr, kt, xd, Zi, pu, 1, du);
    l.flipY = s, l.needsUpdate = !0;
    const c = new Vr(r, ra, xr, xr, kt, xd, Zi, pu, 1, SA);
    return c.flipY = s, c.needsUpdate = !0, { gainMap: l, sdr: c };
  }
  updateQuadRenderer(r, i, s, l, c) {
    r.width = i.width, r.height = i.height, r.material.gainMap = s, r.material.sdr = l, r.material.gainMapMin = c.gainMapMin, r.material.gainMapMax = c.gainMapMax, r.material.offsetHdr = c.offsetHdr, r.material.offsetSdr = c.offsetSdr, r.material.gamma = c.gamma, r.material.hdrCapacityMin = c.hdrCapacityMin, r.material.hdrCapacityMax = c.hdrCapacityMax, r.material.maxDisplayBoost = Math.pow(2, c.hdrCapacityMax), r.material.needsUpdate = !0;
  }
}
const EB = (
  /* glsl */
  `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`
), SB = (
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
class MB extends fa {
  _maxDisplayBoost;
  _hdrCapacityMin;
  _hdrCapacityMax;
  /**
   *
   * @param params
   */
  constructor({ gamma: r, offsetHdr: i, offsetSdr: s, gainMapMin: l, gainMapMax: c, maxDisplayBoost: d, hdrCapacityMin: h, hdrCapacityMax: p, sdr: A, gainMap: v }) {
    super({
      name: "GainMapDecoderMaterial",
      vertexShader: EB,
      fragmentShader: SB,
      uniforms: {
        sdr: { value: A },
        gainMap: { value: v },
        gamma: { value: new Ke(1 / r[0], 1 / r[1], 1 / r[2]) },
        offsetHdr: { value: new Ke().fromArray(i) },
        offsetSdr: { value: new Ke().fromArray(s) },
        gainMapMin: { value: new Ke().fromArray(l) },
        gainMapMax: { value: new Ke().fromArray(c) },
        weightFactor: {
          value: (Math.log2(d) - h) / (p - h)
        }
      },
      blending: MA,
      depthTest: !1,
      depthWrite: !1
    }), this._maxDisplayBoost = d, this._hdrCapacityMin = h, this._hdrCapacityMax = p, this.needsUpdate = !0, this.uniformsNeedUpdate = !0;
  }
  get sdr() {
    return this.uniforms.sdr.value;
  }
  set sdr(r) {
    this.uniforms.sdr.value = r;
  }
  get gainMap() {
    return this.uniforms.gainMap.value;
  }
  set gainMap(r) {
    this.uniforms.gainMap.value = r;
  }
  /**
   * @see {@link GainMapMetadata.offsetHdr}
   */
  get offsetHdr() {
    return this.uniforms.offsetHdr.value.toArray();
  }
  set offsetHdr(r) {
    this.uniforms.offsetHdr.value.fromArray(r);
  }
  /**
   * @see {@link GainMapMetadata.offsetSdr}
   */
  get offsetSdr() {
    return this.uniforms.offsetSdr.value.toArray();
  }
  set offsetSdr(r) {
    this.uniforms.offsetSdr.value.fromArray(r);
  }
  /**
   * @see {@link GainMapMetadata.gainMapMin}
   */
  get gainMapMin() {
    return this.uniforms.gainMapMin.value.toArray();
  }
  set gainMapMin(r) {
    this.uniforms.gainMapMin.value.fromArray(r);
  }
  /**
   * @see {@link GainMapMetadata.gainMapMax}
   */
  get gainMapMax() {
    return this.uniforms.gainMapMax.value.toArray();
  }
  set gainMapMax(r) {
    this.uniforms.gainMapMax.value.fromArray(r);
  }
  /**
   * @see {@link GainMapMetadata.gamma}
   */
  get gamma() {
    const r = this.uniforms.gamma.value;
    return [1 / r.x, 1 / r.y, 1 / r.z];
  }
  set gamma(r) {
    const i = this.uniforms.gamma.value;
    i.x = 1 / r[0], i.y = 1 / r[1], i.z = 1 / r[2];
  }
  /**
   * @see {@link GainMapMetadata.hdrCapacityMin}
   * @remarks Logarithmic space
   */
  get hdrCapacityMin() {
    return this._hdrCapacityMin;
  }
  set hdrCapacityMin(r) {
    this._hdrCapacityMin = r, this.calculateWeight();
  }
  /**
   * @see {@link GainMapMetadata.hdrCapacityMin}
   * @remarks Logarithmic space
   */
  get hdrCapacityMax() {
    return this._hdrCapacityMax;
  }
  set hdrCapacityMax(r) {
    this._hdrCapacityMax = r, this.calculateWeight();
  }
  /**
   * @see {@link GainmapDecodingParameters.maxDisplayBoost}
   * @remarks Non Logarithmic space
   */
  get maxDisplayBoost() {
    return this._maxDisplayBoost;
  }
  set maxDisplayBoost(r) {
    this._maxDisplayBoost = Math.max(1, Math.min(65504, r)), this.calculateWeight();
  }
  calculateWeight() {
    const r = (Math.log2(this._maxDisplayBoost) - this._hdrCapacityMin) / (this._hdrCapacityMax - this._hdrCapacityMin);
    this.uniforms.weightFactor.value = Math.max(0, Math.min(1, r));
  }
}
class fh extends CB {
  constructor(r, i) {
    super({
      renderer: r,
      createMaterial: (s) => new MB(s),
      createQuadRenderer: (s) => new Uu(s)
    }, i);
  }
  /**
   * @private
   * @param quadRenderer
   * @param metadata
   * @param sdrBuffer
   * @param gainMapBuffer
   */
  async render(r, i, s, l) {
    const { sdrImage: c, gainMapImage: d, needsFlip: h } = await this.processImages(s, l, "flipY"), { gainMap: p, sdr: A } = this.createTextures(c, d, h);
    this.updateQuadRenderer(r, c, p, A, i), r.render();
  }
}
class wB extends fh {
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
  load([r, i, s], l, c, d) {
    const h = this.prepareQuadRenderer();
    let p, A, v;
    const g = async () => {
      if (p && A && v) {
        try {
          await this.render(h, v, p, A);
        } catch (k) {
          this.manager.itemError(r), this.manager.itemError(i), this.manager.itemError(s), typeof d == "function" && d(k), h.disposeOnDemandRenderer();
          return;
        }
        typeof l == "function" && l(h), this.manager.itemEnd(r), this.manager.itemEnd(i), this.manager.itemEnd(s), h.disposeOnDemandRenderer();
      }
    };
    let B = !0, C = 0, E = 0, D = !0, R = 0, w = 0, F = !0, N = 0, U = 0;
    const j = () => {
      if (typeof c == "function") {
        const k = C + R + N, K = E + w + U, ie = B && D && F;
        c(new ProgressEvent("progress", { lengthComputable: ie, loaded: K, total: k }));
      }
    };
    this.manager.itemStart(r), this.manager.itemStart(i), this.manager.itemStart(s);
    const L = new $r(this._internalLoadingManager);
    L.setResponseType("arraybuffer"), L.setRequestHeader(this.requestHeader), L.setPath(this.path), L.setWithCredentials(this.withCredentials), L.load(r, async (k) => {
      if (typeof k == "string")
        throw new Error("Invalid sdr buffer");
      p = k, await g();
    }, (k) => {
      B = k.lengthComputable, E = k.loaded, C = k.total, j();
    }, (k) => {
      this.manager.itemError(r), typeof d == "function" && d(k);
    });
    const Q = new $r(this._internalLoadingManager);
    Q.setResponseType("arraybuffer"), Q.setRequestHeader(this.requestHeader), Q.setPath(this.path), Q.setWithCredentials(this.withCredentials), Q.load(i, async (k) => {
      if (typeof k == "string")
        throw new Error("Invalid gainmap buffer");
      A = k, await g();
    }, (k) => {
      D = k.lengthComputable, w = k.loaded, R = k.total, j();
    }, (k) => {
      this.manager.itemError(i), typeof d == "function" && d(k);
    });
    const O = new $r(this._internalLoadingManager);
    return O.setRequestHeader(this.requestHeader), O.setPath(this.path), O.setWithCredentials(this.withCredentials), O.load(s, async (k) => {
      if (typeof k != "string")
        throw new Error("Invalid metadata string");
      v = JSON.parse(k), await g();
    }, (k) => {
      F = k.lengthComputable, U = k.loaded, N = k.total, j();
    }, (k) => {
      this.manager.itemError(s), typeof d == "function" && d(k);
    }), h;
  }
}
class IB extends fh {
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
  load(r, i, s, l) {
    const c = this.prepareQuadRenderer(), d = new $r(this._internalLoadingManager);
    return d.setResponseType("arraybuffer"), d.setRequestHeader(this.requestHeader), d.setPath(this.path), d.setWithCredentials(this.withCredentials), this.manager.itemStart(r), d.load(r, async (h) => {
      if (typeof h == "string")
        throw new Error("Invalid buffer, received [string], was expecting [ArrayBuffer]");
      const p = new Uint8Array(h);
      let A, v, g;
      try {
        const B = await yB(p);
        A = B.sdr, v = B.gainMap, g = B.metadata;
      } catch (B) {
        if (B instanceof ch || B instanceof uh)
          console.warn(`Failure to reconstruct an HDR image from ${r}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`), g = {
            gainMapMin: [0, 0, 0],
            gainMapMax: [1, 1, 1],
            gamma: [1, 1, 1],
            hdrCapacityMin: 0,
            hdrCapacityMax: 1,
            offsetHdr: [0, 0, 0],
            offsetSdr: [0, 0, 0]
          }, A = p;
        else
          throw B;
      }
      try {
        await this.render(c, g, A.buffer, v?.buffer);
      } catch (B) {
        this.manager.itemError(r), typeof l == "function" && l(B), c.disposeOnDemandRenderer();
        return;
      }
      typeof i == "function" && i(c), this.manager.itemEnd(r), c.disposeOnDemandRenderer();
    }, s, (h) => {
      this.manager.itemError(r), typeof l == "function" && l(h);
    }), c;
  }
}
const qi = {
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
}, dh = "https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/", di = (a) => Array.isArray(a), zu = ["/px.png", "/nx.png", "/py.png", "/ny.png", "/pz.png", "/nz.png"];
function ga({
  files: a = zu,
  path: r = "",
  preset: i = void 0,
  colorSpace: s = void 0,
  extensions: l
} = {}) {
  i && (Ju(i), a = qi[i], r = dh);
  const c = di(a), {
    extension: d,
    isCubemap: h
  } = ju(a), p = Ku(d);
  if (!p) throw new Error("useEnvironment: Unrecognized file extension: " + a);
  const A = et((C) => C.gl);
  xg(() => {
    if (d !== "webp" && d !== "jpg" && d !== "jpeg") return;
    function C() {
      Lr.clear(p, c ? [a] : a);
    }
    A.domElement.addEventListener("webglcontextlost", C, {
      once: !0
    });
  }, [a, A.domElement]);
  const v = Lr(p, c ? [a] : a, (C) => {
    (d === "webp" || d === "jpg" || d === "jpeg") && C.setRenderer(A), C.setPath == null || C.setPath(r), l && l(C);
  });
  let g = c ? (
    // @ts-ignore
    v[0]
  ) : v;
  if (d === "jpg" || d === "jpeg" || d === "webp") {
    var B;
    g = (B = g.renderTarget) == null ? void 0 : B.texture;
  }
  return g.mapping = h ? wA : IA, g.colorSpace = s ?? (h ? "srgb" : "srgb-linear"), g;
}
const TB = {
  files: zu,
  path: "",
  preset: void 0,
  extensions: void 0
};
ga.preload = (a) => {
  const r = {
    ...TB,
    ...a
  };
  let {
    files: i,
    path: s = ""
  } = r;
  const {
    preset: l,
    extensions: c
  } = r;
  l && (Ju(l), i = qi[l], s = dh);
  const {
    extension: d
  } = ju(i);
  if (d === "webp" || d === "jpg" || d === "jpeg")
    throw new Error("useEnvironment: Preloading gainmaps is not supported");
  const h = Ku(d);
  if (!h) throw new Error("useEnvironment: Unrecognized file extension: " + i);
  Lr.preload(h, di(i) ? [i] : i, (p) => {
    p.setPath == null || p.setPath(s), c && c(p);
  });
};
const FB = {
  files: zu,
  preset: void 0
};
ga.clear = (a) => {
  const r = {
    ...FB,
    ...a
  };
  let {
    files: i
  } = r;
  const {
    preset: s
  } = r;
  s && (Ju(s), i = qi[s]);
  const {
    extension: l
  } = ju(i), c = Ku(l);
  if (!c) throw new Error("useEnvironment: Unrecognized file extension: " + i);
  Lr.clear(c, di(i) ? [i] : i);
};
function Ju(a) {
  if (!(a in qi)) throw new Error("Preset must be one of: " + Object.keys(qi).join(", "));
}
function ju(a) {
  var r;
  const i = di(a) && a.length === 6, s = di(a) && a.length === 3 && a.some((d) => d.endsWith("json")), l = di(a) ? a[0] : a;
  return {
    extension: i ? "cube" : s ? "webp" : l.startsWith("data:application/exr") ? "exr" : l.startsWith("data:application/hdr") ? "hdr" : l.startsWith("data:image/jpeg") ? "jpg" : (r = l.split(".").pop()) == null || (r = r.split("?")) == null || (r = r.shift()) == null ? void 0 : r.toLowerCase(),
    isCubemap: i,
    isGainmap: s
  };
}
function Ku(a) {
  return a === "cube" ? TA : a === "hdr" ? cB : a === "exr" ? fB : a === "jpg" || a === "jpeg" ? IB : a === "webp" ? wB : null;
}
const RB = (a) => a.current && a.current.isScene, xB = (a) => RB(a) ? a.current : a;
function Qu(a, r, i, s, l = {}) {
  var c, d, h, p;
  l = {
    backgroundBlurriness: 0,
    backgroundIntensity: 1,
    backgroundRotation: [0, 0, 0],
    environmentIntensity: 1,
    environmentRotation: [0, 0, 0],
    ...l
  };
  const A = xB(r || i), v = A.background, g = A.environment, B = {
    // @ts-ignore
    backgroundBlurriness: A.backgroundBlurriness,
    // @ts-ignore
    backgroundIntensity: A.backgroundIntensity,
    // @ts-ignore
    backgroundRotation: (c = (d = A.backgroundRotation) == null || d.clone == null ? void 0 : d.clone()) !== null && c !== void 0 ? c : [0, 0, 0],
    // @ts-ignore
    environmentIntensity: A.environmentIntensity,
    // @ts-ignore
    environmentRotation: (h = (p = A.environmentRotation) == null || p.clone == null ? void 0 : p.clone()) !== null && h !== void 0 ? h : [0, 0, 0]
  };
  return a !== "only" && (A.environment = s), a && (A.background = s), lr(A, l), () => {
    a !== "only" && (A.environment = g), a && (A.background = v), lr(A, B);
  };
}
function Xu({
  scene: a,
  background: r = !1,
  map: i,
  ...s
}) {
  const l = et((c) => c.scene);
  return X.useLayoutEffect(() => {
    if (i) return Qu(r, a, l, i, s);
  }), null;
}
function ph({
  background: a = !1,
  scene: r,
  blur: i,
  backgroundBlurriness: s,
  backgroundIntensity: l,
  backgroundRotation: c,
  environmentIntensity: d,
  environmentRotation: h,
  ...p
}) {
  const A = ga(p), v = et((g) => g.scene);
  return X.useLayoutEffect(() => Qu(a, r, v, A, {
    backgroundBlurriness: i ?? s,
    backgroundIntensity: l,
    backgroundRotation: c,
    environmentIntensity: d,
    environmentRotation: h
  })), X.useEffect(() => () => {
    A.dispose();
  }, [A]), null;
}
function _B({
  children: a,
  near: r = 0.1,
  far: i = 1e3,
  resolution: s = 256,
  frames: l = 1,
  map: c,
  background: d = !1,
  blur: h,
  backgroundBlurriness: p,
  backgroundIntensity: A,
  backgroundRotation: v,
  environmentIntensity: g,
  environmentRotation: B,
  scene: C,
  files: E,
  path: D,
  preset: R = void 0,
  extensions: w
}) {
  const F = et((O) => O.gl), N = et((O) => O.scene), U = X.useRef(null), [j] = X.useState(() => new Sp()), L = X.useMemo(() => {
    const O = new FA(s);
    return O.texture.type = Ot, O;
  }, [s]);
  X.useEffect(() => () => {
    L.dispose();
  }, [L]), X.useLayoutEffect(() => {
    if (l === 1) {
      const O = F.autoClear;
      F.autoClear = !0, U.current.update(F, j), F.autoClear = O;
    }
    return Qu(d, C, N, L.texture, {
      backgroundBlurriness: h ?? p,
      backgroundIntensity: A,
      backgroundRotation: v,
      environmentIntensity: g,
      environmentRotation: B
    });
  }, [a, j, L.texture, C, N, d, l, F]);
  let Q = 1;
  return pa(() => {
    if (l === 1 / 0 || Q < l) {
      const O = F.autoClear;
      F.autoClear = !0, U.current.update(F, j), F.autoClear = O, Q++;
    }
  }), /* @__PURE__ */ X.createElement(X.Fragment, null, Ov(/* @__PURE__ */ X.createElement(X.Fragment, null, a, /* @__PURE__ */ X.createElement("cubeCamera", {
    ref: U,
    args: [r, i, L]
  }), E || R ? /* @__PURE__ */ X.createElement(ph, {
    background: !0,
    files: E,
    preset: R,
    path: D,
    extensions: w
  }) : c ? /* @__PURE__ */ X.createElement(Xu, {
    background: !0,
    map: c,
    extensions: w
  }) : null), j));
}
function DB(a) {
  var r, i, s, l;
  const c = ga(a), d = a.map || c;
  X.useMemo(() => Up({
    GroundProjectedEnvImpl: Bb
  }), []), X.useEffect(() => () => {
    c.dispose();
  }, [c]);
  const h = X.useMemo(() => [d], [d]), p = (r = a.ground) == null ? void 0 : r.height, A = (i = a.ground) == null ? void 0 : i.radius, v = (s = (l = a.ground) == null ? void 0 : l.scale) !== null && s !== void 0 ? s : 1e3;
  return /* @__PURE__ */ X.createElement(X.Fragment, null, /* @__PURE__ */ X.createElement(Xu, wo({}, a, {
    map: d
  })), /* @__PURE__ */ X.createElement("groundProjectedEnvImpl", {
    args: h,
    scale: v,
    height: p,
    radius: A
  }));
}
function LB(a) {
  return a.ground ? /* @__PURE__ */ X.createElement(DB, a) : a.map ? /* @__PURE__ */ X.createElement(Xu, a) : a.children ? /* @__PURE__ */ X.createElement(_B, a) : /* @__PURE__ */ X.createElement(ph, a);
}
function cr(a, r, i) {
  return [a, i, -r];
}
const GB = new Te.Vector3(0, 0, 1);
function kB({ handlePos: a, headPos: r, avgBatLength: i }) {
  const { scene: s } = ma("/models/bat.glb"), l = ui(), c = ui(new Te.Vector3()), d = ui(null);
  return fr(() => {
    const h = new Te.Box3().setFromObject(s);
    d.current = h.max.z - h.min.z;
    const p = new Te.Vector3();
    h.getCenter(p);
    const A = new Te.Vector3(p.x, p.y, h.min.z);
    c.current.copy(A), console.log("GLB natural length (units):", d.current), i && console.log("Base scale:", (i / d.current).toFixed(3));
  }, [s, i]), pa(() => {
    if (!l.current || !d.current) return;
    const h = new Te.Vector3(...a), p = new Te.Vector3(...r), A = h.distanceTo(p), v = i ?? d.current, g = A / v, B = v / d.current, C = p.clone().sub(h).normalize(), E = new Te.Quaternion().setFromUnitVectors(GB, C);
    l.current.quaternion.copy(E), l.current.scale.setScalar(B * g);
    const D = c.current.clone().multiplyScalar(B * g).applyQuaternion(E);
    l.current.position.copy(h).sub(D);
  }), /* @__PURE__ */ Ce("primitive", { ref: l, object: s });
}
function hp({ position: a, label: r, color: i }) {
  return /* @__PURE__ */ Xn("group", { position: a, children: [
    /* @__PURE__ */ Xn("mesh", { children: [
      /* @__PURE__ */ Ce("sphereGeometry", { args: [0.04, 16, 16] }),
      /* @__PURE__ */ Ce("meshStandardMaterial", { color: i, emissive: i, emissiveIntensity: 0.6 })
    ] }),
    /* @__PURE__ */ Ce(ib, { distanceFactor: 6, style: { pointerEvents: "none" }, children: /* @__PURE__ */ Ce("div", { style: {
      background: "rgba(0,0,0,0.65)",
      color: i,
      fontFamily: "monospace",
      fontSize: 11,
      padding: "2px 5px",
      borderRadius: 3,
      whiteSpace: "nowrap"
    }, children: r }) })
  ] });
}
const gt = 8.5 / 12, $s = 8.5 / 12, mp = 17 / 12;
function OB() {
  const a = wu(() => {
    const g = new Te.Shape();
    return g.moveTo(-gt, 0), g.lineTo(gt, 0), g.lineTo(gt, $s), g.lineTo(0, mp), g.lineTo(-gt, $s), g.closePath(), g;
  }, []), r = [
    [-gt, 0, 0],
    [gt, 0, 0],
    [gt, -$s, 0],
    [0, -mp, 0],
    [-gt, -$s, 0],
    [-gt, 0, 0]
  ].map(([g, B, C]) => cr(g, B, C)), i = [
    [-gt, 0, 1.5],
    [gt, 0, 1.5],
    [gt, 0, 3.5],
    [-gt, 0, 3.5],
    [-gt, 0, 1.5]
  ].map(([g, B, C]) => cr(g, B, C)), s = (-8.5 - 6 - 48) / 12, l = (-8.5 - 6) / 12, c = (-8.5 + 36) / 12, d = (-8.5 - 36) / 12, h = (8.5 + 6) / 12, p = (8.5 + 6 + 48) / 12, A = [[s, c, 0], [l, c, 0], [l, d, 0], [s, d, 0], [s, c, 0]].map(([g, B, C]) => cr(g, B, C)), v = [[h, c, 0], [p, c, 0], [p, d, 0], [h, d, 0], [h, c, 0]].map(([g, B, C]) => cr(g, B, C));
  return /* @__PURE__ */ Xn("group", { children: [
    /* @__PURE__ */ Xn("mesh", { rotation: [Math.PI / 2, 0, 0], position: [0, 2e-3, 0], children: [
      /* @__PURE__ */ Ce("shapeGeometry", { args: [a] }),
      /* @__PURE__ */ Ce("meshStandardMaterial", { color: "white", side: Te.DoubleSide })
    ] }),
    /* @__PURE__ */ Ce(Zs, { points: r, color: "white", lineWidth: 2 }),
    /* @__PURE__ */ Ce(Zs, { points: i, color: "rgba(200,200,200,1)", lineWidth: 1 }),
    /* @__PURE__ */ Ce(Zs, { points: A, color: "rgba(150,150,150,1)", lineWidth: 1 }),
    /* @__PURE__ */ Ce(Zs, { points: v, color: "rgba(150,150,150,1)", lineWidth: 1 })
  ] });
}
const na = new Te.Vector3(0, 3.7, 17 / 24), Mu = 13, hh = 1.7, PB = { Front: 180, Right: 90, Back: 0, Left: 270 };
function HB({ azimuth: a }) {
  const { camera: r } = et(), i = ui();
  return fr(() => {
    if (!i.current) return;
    const s = a * Math.PI / 180;
    r.position.set(
      na.x + Mu * Math.sin(s),
      hh,
      na.z + Mu * Math.cos(s)
    ), i.current.target.copy(na), i.current.update();
  }, [a, r]), /* @__PURE__ */ Ce(AB, { ref: i });
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
    width: 190,
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
function NB({ azimuth: a, onAzimuth: r, showSwingPath: i, onToggleSwingPath: s }) {
  return /* @__PURE__ */ Xn("div", { style: Zr.wrapper, children: [
    /* @__PURE__ */ Xn("div", { style: Zr.panel, children: [
      /* @__PURE__ */ Ce("div", { style: Zr.heading, children: "View Angle" }),
      /* @__PURE__ */ Ce("div", { style: Zr.row, children: Object.entries(PB).map(([l, c]) => /* @__PURE__ */ Ce(
        "button",
        {
          onClick: () => r(c),
          style: a === c ? Zr.btnActive : Zr.btn,
          children: l
        },
        l
      )) }),
      /* @__PURE__ */ Ce(
        "input",
        {
          type: "range",
          min: 0,
          max: 359,
          value: a,
          onChange: (l) => r(Number(l.target.value)),
          style: { width: "100%", accentColor: "#4af", marginTop: 6 }
        }
      ),
      /* @__PURE__ */ Xn("div", { style: Zr.degreeLabel, children: [
        a,
        "°"
      ] })
    ] }),
    /* @__PURE__ */ Xn("label", { style: Zr.swingPathLabel, children: [
      /* @__PURE__ */ Ce(
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
const au = {
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
function UB({ frameIndex: a, frameCount: r, isPlaying: i, onSeek: s, onPlayToggle: l }) {
  return /* @__PURE__ */ Xn("div", { style: au.bar, children: [
    /* @__PURE__ */ Ce(
      "button",
      {
        onClick: l,
        style: au.playBtn,
        disabled: r === 0,
        children: i ? "⏸" : "▶"
      }
    ),
    /* @__PURE__ */ Ce(
      "input",
      {
        type: "range",
        min: 0,
        max: Math.max(0, r - 1),
        value: a,
        onChange: (c) => s(Number(c.target.value)),
        style: { flex: 1, accentColor: "#4af" }
      }
    ),
    /* @__PURE__ */ Xn("span", { style: au.label, children: [
      a + 1,
      " / ",
      r || "—"
    ] })
  ] });
}
function zB({ frames: a, frameIndex: r }) {
  const i = wu(() => {
    const s = Math.min(r + 1, a.length);
    if (s < 2) return null;
    const l = [], c = [];
    for (let h = 0; h < s; h++) {
      const p = a[h], [A, v, g] = cr(p.handle.x, p.handle.y, p.handle.z), [B, C, E] = cr(p.head.x, p.head.y, p.head.z);
      l.push(A, v, g), l.push(B, C, E);
    }
    for (let h = 0; h < s - 1; h++) {
      const p = 2 * h, A = 2 * h + 1, v = 2 * (h + 1), g = 2 * (h + 1) + 1;
      c.push(p, A, v), c.push(A, g, v);
    }
    const d = new Te.BufferGeometry();
    return d.setAttribute("position", new Te.Float32BufferAttribute(l, 3)), d.setIndex(c), d.computeVertexNormals(), d;
  }, [a, r]);
  return i ? /* @__PURE__ */ Ce("mesh", { geometry: i, children: /* @__PURE__ */ Ce(
    "meshStandardMaterial",
    {
      color: "#4488ff",
      transparent: !0,
      opacity: 0.35,
      side: Te.DoubleSide,
      depthWrite: !1
    }
  ) }) : null;
}
function JB(a) {
  const r = Object.values(a).flatMap(
    (i) => i.map((s) => {
      const l = cr(s.handle.x, s.handle.y, s.handle.z), c = cr(s.head.x, s.head.y, s.head.z);
      return Math.hypot(c[0] - l[0], c[1] - l[1], c[2] - l[2]);
    })
  );
  return r.reduce((i, s) => i + s, 0) / r.length;
}
const lu = {
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
function jB() {
  const [a, r] = Fr(null), [i, s] = Fr([]), [l, c] = Fr(""), [d, h] = Fr(0), [p, A] = Fr(null), [v, g] = Fr(180), [B, C] = Fr(!1), [E, D] = Fr(!1), R = a?.[l] ?? [];
  fr(() => {
    if (!B || R.length === 0) return;
    const Q = setInterval(() => {
      h((O) => O >= R.length - 1 ? (C(!1), O) : O + 1);
    }, 20);
    return () => clearInterval(Q);
  }, [B, R.length]), fr(() => {
    fetch("/data/swings.json").then((Q) => Q.json()).then(({ swings: Q, default_play_id: O }) => {
      r(Q);
      const k = Object.keys(Q);
      s(k);
      const K = O && Q[O] ? O : k[0];
      K && c(K);
      const ie = JB(Q);
      A(ie), console.log("Avg bat length (ft):", ie.toFixed(3));
    }).catch(() => console.warn("No local swings.json — waiting for Shiny postMessage."));
  }, []), fr(() => {
    const Q = (O) => {
      if (O.data?.type === "load_frames") {
        const k = O.data.frames;
        r(k);
        const K = Object.keys(k);
        s(K), K.length > 0 && c(K[0]);
      } else O.data?.type === "seek_frame" ? h(O.data.index) : O.data?.type === "reset" && h(0);
    };
    return window.addEventListener("message", Q), () => window.removeEventListener("message", Q);
  }, []);
  const w = R[d], F = w ? cr(w.handle.x, w.handle.y, w.handle.z) : [0, -1, 0], N = w ? cr(w.head.x, w.head.y, w.head.z) : [0, 1, 0], U = (Q) => Q?.toFixed(2) ?? "—", j = w ? `handle (${U(w.handle.x)}, ${U(w.handle.y)}, ${U(w.handle.z)})` : "handle", L = w ? `head (${U(w.head.x)}, ${U(w.head.y)}, ${U(w.head.z)})` : "head";
  return /* @__PURE__ */ Xn("div", { style: { width: "100vw", height: "100vh", background: "#111", display: "flex", flexDirection: "column" }, children: [
    /* @__PURE__ */ Xn("div", { style: lu.bar, children: [
      /* @__PURE__ */ Xn(
        "select",
        {
          value: l,
          onChange: (Q) => {
            c(Q.target.value), h(0);
          },
          style: lu.select,
          children: [
            i.length === 0 && /* @__PURE__ */ Ce("option", { children: "Loading swings…" }),
            i.map((Q) => /* @__PURE__ */ Ce("option", { value: Q, children: Q }, Q))
          ]
        }
      ),
      /* @__PURE__ */ Xn("span", { style: lu.label, children: [
        w ? `t = ${w.SEC_FROM_PITCH_RELEASE?.toFixed(3)}s` : "—",
        w?.FRAME_FROM_CONTACT != null ? `  (${w.FRAME_FROM_CONTACT >= 0 ? "+" : ""}${w.FRAME_FROM_CONTACT} from contact)` : ""
      ] })
    ] }),
    /* @__PURE__ */ Xn("div", { style: { flex: 1, position: "relative" }, children: [
      /* @__PURE__ */ Ce(
        NB,
        {
          azimuth: v,
          onAzimuth: g,
          showSwingPath: E,
          onToggleSwingPath: D
        }
      ),
      /* @__PURE__ */ Xn(Wv, { camera: { position: [0, hh, na.z - Mu], fov: 50 }, children: [
        /* @__PURE__ */ Ce("ambientLight", { intensity: 0.6 }),
        /* @__PURE__ */ Ce("directionalLight", { position: [5, 5, 5], intensity: 1 }),
        /* @__PURE__ */ Ce("directionalLight", { position: [-5, -5, -5], intensity: 0.3 }),
        /* @__PURE__ */ Xn(_g, { fallback: null, children: [
          w && /* @__PURE__ */ Ce(kB, { handlePos: F, headPos: N, avgBatLength: p }),
          w && /* @__PURE__ */ Ce(hp, { position: F, label: j, color: "#f90" }),
          w && /* @__PURE__ */ Ce(hp, { position: N, label: L, color: "#4af" }),
          E && /* @__PURE__ */ Ce(zB, { frames: R, frameIndex: d }),
          /* @__PURE__ */ Ce(OB, {}),
          /* @__PURE__ */ Ce(LB, { preset: "studio" })
        ] }),
        /* @__PURE__ */ Ce(HB, { azimuth: v })
      ] })
    ] }),
    /* @__PURE__ */ Ce(
      UB,
      {
        frameIndex: d,
        frameCount: R.length,
        isPlaying: B,
        onSeek: (Q) => {
          C(!1), h(Q);
        },
        onPlayToggle: () => {
          d >= R.length - 1 && h(0), C((Q) => !Q);
        }
      }
    )
  ] });
}
const KB = Lg.createRoot(document.getElementById("root"));
KB.render(/* @__PURE__ */ Ce(jB, {}));
