import te, { useLayoutEffect as Ra, useEffect as Ge, useMemo as Fe, useContext as $t, useReducer as vo, useRef as ne, useState as Qr } from "react";
import go, { unstable_batchedUpdates as mo } from "react-dom";
var et = { exports: {} }, Vr = {};
(function() {
  var e = te, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), c = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g = Symbol.iterator, m = "@@iterator";
  function h(v) {
    if (v === null || typeof v != "object")
      return null;
    var D = g && v[g] || v[m];
    return typeof D == "function" ? D : null;
  }
  var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function x(v) {
    {
      for (var D = arguments.length, P = new Array(D > 1 ? D - 1 : 0), V = 1; V < D; V++)
        P[V - 1] = arguments[V];
      I("error", v, P);
    }
  }
  function I(v, D, P) {
    {
      var V = b.ReactDebugCurrentFrame, Z = V.getStackAddendum();
      Z !== "" && (D += "%s", P = P.concat([Z]));
      var oe = P.map(function(q) {
        return String(q);
      });
      oe.unshift("Warning: " + D), Function.prototype.apply.call(console[v], console, oe);
    }
  }
  var y = !1, N = !1, M = !1, R = !1, H = !1, O;
  O = Symbol.for("react.module.reference");
  function _(v) {
    return !!(typeof v == "string" || typeof v == "function" || v === n || v === i || H || v === a || v === d || v === f || R || v === p || y || N || M || typeof v == "object" && v !== null && (v.$$typeof === c || v.$$typeof === u || v.$$typeof === o || v.$$typeof === l || v.$$typeof === s || v.$$typeof === O || v.getModuleId !== void 0));
  }
  function K(v, D, P) {
    var V = v.displayName;
    if (V)
      return V;
    var Z = D.displayName || D.name || "";
    return Z !== "" ? P + "(" + Z + ")" : P;
  }
  function X(v) {
    return v.displayName || "Context";
  }
  function C(v) {
    if (v == null)
      return null;
    if (typeof v.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof v == "function")
      return v.displayName || v.name || null;
    if (typeof v == "string")
      return v;
    switch (v) {
      case n:
        return "Fragment";
      case t:
        return "Portal";
      case i:
        return "Profiler";
      case a:
        return "StrictMode";
      case d:
        return "Suspense";
      case f:
        return "SuspenseList";
    }
    if (typeof v == "object")
      switch (v.$$typeof) {
        case l:
          var D = v;
          return X(D) + ".Consumer";
        case o:
          var P = v;
          return X(P._context) + ".Provider";
        case s:
          return K(v, v.render, "ForwardRef");
        case u:
          var V = v.displayName || null;
          return V !== null ? V : C(v.type) || "Memo";
        case c: {
          var Z = v, oe = Z._payload, q = Z._init;
          try {
            return C(q(oe));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  var S = Object.assign, B = 0, F, T, k, A, W, $, Y;
  function U() {
  }
  U.__reactDisabledLog = !0;
  function Q() {
    {
      if (B === 0) {
        F = console.log, T = console.info, k = console.warn, A = console.error, W = console.group, $ = console.groupCollapsed, Y = console.groupEnd;
        var v = {
          configurable: !0,
          enumerable: !0,
          value: U,
          writable: !0
        };
        Object.defineProperties(console, {
          info: v,
          log: v,
          warn: v,
          error: v,
          group: v,
          groupCollapsed: v,
          groupEnd: v
        });
      }
      B++;
    }
  }
  function ae() {
    {
      if (B--, B === 0) {
        var v = {
          configurable: !0,
          enumerable: !0,
          writable: !0
        };
        Object.defineProperties(console, {
          log: S({}, v, {
            value: F
          }),
          info: S({}, v, {
            value: T
          }),
          warn: S({}, v, {
            value: k
          }),
          error: S({}, v, {
            value: A
          }),
          group: S({}, v, {
            value: W
          }),
          groupCollapsed: S({}, v, {
            value: $
          }),
          groupEnd: S({}, v, {
            value: Y
          })
        });
      }
      B < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
  }
  var ie = b.ReactCurrentDispatcher, ye;
  function xe(v, D, P) {
    {
      if (ye === void 0)
        try {
          throw Error();
        } catch (Z) {
          var V = Z.stack.trim().match(/\n( *(at )?)/);
          ye = V && V[1] || "";
        }
      return `
` + ye + v;
    }
  }
  var be = !1, we;
  {
    var L = typeof WeakMap == "function" ? WeakMap : Map;
    we = new L();
  }
  function w(v, D) {
    if (!v || be)
      return "";
    {
      var P = we.get(v);
      if (P !== void 0)
        return P;
    }
    var V;
    be = !0;
    var Z = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var oe;
    oe = ie.current, ie.current = null, Q();
    try {
      if (D) {
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
          } catch (ke) {
            V = ke;
          }
          Reflect.construct(v, [], q);
        } else {
          try {
            q.call();
          } catch (ke) {
            V = ke;
          }
          v.call(q.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (ke) {
          V = ke;
        }
        v();
      }
    } catch (ke) {
      if (ke && V && typeof ke.stack == "string") {
        for (var z = ke.stack.split(`
`), Ce = V.stack.split(`
`), ce = z.length - 1, de = Ce.length - 1; ce >= 1 && de >= 0 && z[ce] !== Ce[de]; )
          de--;
        for (; ce >= 1 && de >= 0; ce--, de--)
          if (z[ce] !== Ce[de]) {
            if (ce !== 1 || de !== 1)
              do
                if (ce--, de--, de < 0 || z[ce] !== Ce[de]) {
                  var Ae = `
` + z[ce].replace(" at new ", " at ");
                  return v.displayName && Ae.includes("<anonymous>") && (Ae = Ae.replace("<anonymous>", v.displayName)), typeof v == "function" && we.set(v, Ae), Ae;
                }
              while (ce >= 1 && de >= 0);
            break;
          }
      }
    } finally {
      be = !1, ie.current = oe, ae(), Error.prepareStackTrace = Z;
    }
    var or = v ? v.displayName || v.name : "", Mn = or ? xe(or) : "";
    return typeof v == "function" && we.set(v, Mn), Mn;
  }
  function he(v, D, P) {
    return w(v, !1);
  }
  function fe(v) {
    var D = v.prototype;
    return !!(D && D.isReactComponent);
  }
  function Re(v, D, P) {
    if (v == null)
      return "";
    if (typeof v == "function")
      return w(v, fe(v));
    if (typeof v == "string")
      return xe(v);
    switch (v) {
      case d:
        return xe("Suspense");
      case f:
        return xe("SuspenseList");
    }
    if (typeof v == "object")
      switch (v.$$typeof) {
        case s:
          return he(v.render);
        case u:
          return Re(v.type, D, P);
        case c: {
          var V = v, Z = V._payload, oe = V._init;
          try {
            return Re(oe(Z), D, P);
          } catch {
          }
        }
      }
    return "";
  }
  var ze = Object.prototype.hasOwnProperty, ar = {}, qe = b.ReactDebugCurrentFrame;
  function Ke(v) {
    if (v) {
      var D = v._owner, P = Re(v.type, v._source, D ? D.type : null);
      qe.setExtraStackFrame(P);
    } else
      qe.setExtraStackFrame(null);
  }
  function gr(v, D, P, V, Z) {
    {
      var oe = Function.call.bind(ze);
      for (var q in v)
        if (oe(v, q)) {
          var z = void 0;
          try {
            if (typeof v[q] != "function") {
              var Ce = Error((V || "React class") + ": " + P + " type `" + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof v[q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw Ce.name = "Invariant Violation", Ce;
            }
            z = v[q](D, q, V, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (ce) {
            z = ce;
          }
          z && !(z instanceof Error) && (Ke(Z), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", V || "React class", P, q, typeof z), Ke(null)), z instanceof Error && !(z.message in ar) && (ar[z.message] = !0, Ke(Z), x("Failed %s type: %s", P, z.message), Ke(null));
        }
    }
  }
  var mr = Array.isArray;
  function br(v) {
    return mr(v);
  }
  function Xe(v) {
    {
      var D = typeof Symbol == "function" && Symbol.toStringTag, P = D && v[Symbol.toStringTag] || v.constructor.name || "Object";
      return P;
    }
  }
  function hr(v) {
    try {
      return Cn(v), !1;
    } catch {
      return !0;
    }
  }
  function Cn(v) {
    return "" + v;
  }
  function En(v) {
    if (hr(v))
      return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(v)), Cn(v);
  }
  var yr = b.ReactCurrentOwner, Ji = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  }, Dn, Sn, lt;
  lt = {};
  function Zi(v) {
    if (ze.call(v, "ref")) {
      var D = Object.getOwnPropertyDescriptor(v, "ref").get;
      if (D && D.isReactWarning)
        return !1;
    }
    return v.ref !== void 0;
  }
  function Qi(v) {
    if (ze.call(v, "key")) {
      var D = Object.getOwnPropertyDescriptor(v, "key").get;
      if (D && D.isReactWarning)
        return !1;
    }
    return v.key !== void 0;
  }
  function eo(v, D) {
    if (typeof v.ref == "string" && yr.current && D && yr.current.stateNode !== D) {
      var P = C(yr.current.type);
      lt[P] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(yr.current.type), v.ref), lt[P] = !0);
    }
  }
  function ro(v, D) {
    {
      var P = function() {
        Dn || (Dn = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
      };
      P.isReactWarning = !0, Object.defineProperty(v, "key", {
        get: P,
        configurable: !0
      });
    }
  }
  function to(v, D) {
    {
      var P = function() {
        Sn || (Sn = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
      };
      P.isReactWarning = !0, Object.defineProperty(v, "ref", {
        get: P,
        configurable: !0
      });
    }
  }
  var no = function(v, D, P, V, Z, oe, q) {
    var z = {
      $$typeof: r,
      type: v,
      key: D,
      ref: P,
      props: q,
      _owner: oe
    };
    return z._store = {}, Object.defineProperty(z._store, "validated", {
      configurable: !1,
      enumerable: !1,
      writable: !0,
      value: !1
    }), Object.defineProperty(z, "_self", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: V
    }), Object.defineProperty(z, "_source", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: Z
    }), Object.freeze && (Object.freeze(z.props), Object.freeze(z)), z;
  };
  function ao(v, D, P, V, Z) {
    {
      var oe, q = {}, z = null, Ce = null;
      P !== void 0 && (En(P), z = "" + P), Qi(D) && (En(D.key), z = "" + D.key), Zi(D) && (Ce = D.ref, eo(D, Z));
      for (oe in D)
        ze.call(D, oe) && !Ji.hasOwnProperty(oe) && (q[oe] = D[oe]);
      if (v && v.defaultProps) {
        var ce = v.defaultProps;
        for (oe in ce)
          q[oe] === void 0 && (q[oe] = ce[oe]);
      }
      if (z || Ce) {
        var de = typeof v == "function" ? v.displayName || v.name || "Unknown" : v;
        z && ro(q, de), Ce && to(q, de);
      }
      return no(v, z, Ce, Z, V, yr.current, q);
    }
  }
  var st = b.ReactCurrentOwner, In = b.ReactDebugCurrentFrame;
  function ir(v) {
    if (v) {
      var D = v._owner, P = Re(v.type, v._source, D ? D.type : null);
      In.setExtraStackFrame(P);
    } else
      In.setExtraStackFrame(null);
  }
  var ut;
  ut = !1;
  function ct(v) {
    return typeof v == "object" && v !== null && v.$$typeof === r;
  }
  function Pn() {
    {
      if (st.current) {
        var v = C(st.current.type);
        if (v)
          return `

Check the render method of \`` + v + "`.";
      }
      return "";
    }
  }
  function io(v) {
    {
      if (v !== void 0) {
        var D = v.fileName.replace(/^.*[\\\/]/, ""), P = v.lineNumber;
        return `

Check your code at ` + D + ":" + P + ".";
      }
      return "";
    }
  }
  var Tn = {};
  function oo(v) {
    {
      var D = Pn();
      if (!D) {
        var P = typeof v == "string" ? v : v.displayName || v.name;
        P && (D = `

Check the top-level render call using <` + P + ">.");
      }
      return D;
    }
  }
  function Rn(v, D) {
    {
      if (!v._store || v._store.validated || v.key != null)
        return;
      v._store.validated = !0;
      var P = oo(D);
      if (Tn[P])
        return;
      Tn[P] = !0;
      var V = "";
      v && v._owner && v._owner !== st.current && (V = " It was passed a child from " + C(v._owner.type) + "."), ir(v), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', P, V), ir(null);
    }
  }
  function An(v, D) {
    {
      if (typeof v != "object")
        return;
      if (br(v))
        for (var P = 0; P < v.length; P++) {
          var V = v[P];
          ct(V) && Rn(V, D);
        }
      else if (ct(v))
        v._store && (v._store.validated = !0);
      else if (v) {
        var Z = h(v);
        if (typeof Z == "function" && Z !== v.entries)
          for (var oe = Z.call(v), q; !(q = oe.next()).done; )
            ct(q.value) && Rn(q.value, D);
      }
    }
  }
  function lo(v) {
    {
      var D = v.type;
      if (D == null || typeof D == "string")
        return;
      var P;
      if (typeof D == "function")
        P = D.propTypes;
      else if (typeof D == "object" && (D.$$typeof === s || D.$$typeof === u))
        P = D.propTypes;
      else
        return;
      if (P) {
        var V = C(D);
        gr(P, v.props, "prop", V, v);
      } else if (D.PropTypes !== void 0 && !ut) {
        ut = !0;
        var Z = C(D);
        x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
      }
      typeof D.getDefaultProps == "function" && !D.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function so(v) {
    {
      for (var D = Object.keys(v.props), P = 0; P < D.length; P++) {
        var V = D[P];
        if (V !== "children" && V !== "key") {
          ir(v), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", V), ir(null);
          break;
        }
      }
      v.ref !== null && (ir(v), x("Invalid attribute `ref` supplied to `React.Fragment`."), ir(null));
    }
  }
  function On(v, D, P, V, Z, oe) {
    {
      var q = _(v);
      if (!q) {
        var z = "";
        (v === void 0 || typeof v == "object" && v !== null && Object.keys(v).length === 0) && (z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var Ce = io(Z);
        Ce ? z += Ce : z += Pn();
        var ce;
        v === null ? ce = "null" : br(v) ? ce = "array" : v !== void 0 && v.$$typeof === r ? (ce = "<" + (C(v.type) || "Unknown") + " />", z = " Did you accidentally export a JSX literal instead of a component?") : ce = typeof v, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ce, z);
      }
      var de = ao(v, D, P, Z, oe);
      if (de == null)
        return de;
      if (q) {
        var Ae = D.children;
        if (Ae !== void 0)
          if (V)
            if (br(Ae)) {
              for (var or = 0; or < Ae.length; or++)
                An(Ae[or], v);
              Object.freeze && Object.freeze(Ae);
            } else
              x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
          else
            An(Ae, v);
      }
      return v === n ? so(de) : lo(de), de;
    }
  }
  function uo(v, D, P) {
    return On(v, D, P, !0);
  }
  function co(v, D, P) {
    return On(v, D, P, !1);
  }
  var fo = co, po = uo;
  Vr.Fragment = n, Vr.jsx = fo, Vr.jsxs = po;
})();
(function(e) {
  e.exports = Vr;
})(et);
const bo = et.exports.Fragment, Se = et.exports.jsx, Ir = et.exports.jsxs;
function Rt(e, r) {
  return Rt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Rt(e, r);
}
function Aa(e, r) {
  e.prototype = Object.create(r.prototype), e.prototype.constructor = e, Rt(e, r);
}
function j() {
  return j = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, j.apply(this, arguments);
}
function Pr(e) {
  return Pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Pr(e);
}
function ho(e, r) {
  if (Pr(e) !== "object" || e === null)
    return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r || "default");
    if (Pr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function yo(e) {
  var r = ho(e, "string");
  return Pr(r) === "symbol" ? r : String(r);
}
function xo(e, r, t) {
  return r = yo(r), r in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function Bn(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Nn(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Bn(Object(t), !0).forEach(function(n) {
      xo(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Bn(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
var Ln = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), dt = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Fn = {
  INIT: "@@redux/INIT" + dt(),
  REPLACE: "@@redux/REPLACE" + dt(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + dt();
  }
};
function wo(e) {
  if (typeof e != "object" || e === null)
    return !1;
  for (var r = e; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return Object.getPrototypeOf(e) === r;
}
function Co(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  var r = typeof e;
  switch (r) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return r;
  }
  if (Array.isArray(e))
    return "array";
  if (So(e))
    return "date";
  if (Do(e))
    return "error";
  var t = Eo(e);
  switch (t) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return t;
  }
  return r.slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function Eo(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Do(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function So(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Ze(e) {
  var r = typeof e;
  return r = Co(e), r;
}
function Oa(e, r, t) {
  var n;
  if (typeof r == "function" && typeof t == "function" || typeof t == "function" && typeof arguments[3] == "function")
    throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof r == "function" && typeof t > "u" && (t = r, r = void 0), typeof t < "u") {
    if (typeof t != "function")
      throw new Error("Expected the enhancer to be a function. Instead, received: '" + Ze(t) + "'");
    return t(Oa)(e, r);
  }
  if (typeof e != "function")
    throw new Error("Expected the root reducer to be a function. Instead, received: '" + Ze(e) + "'");
  var a = e, i = r, o = [], l = o, s = !1;
  function d() {
    l === o && (l = o.slice());
  }
  function f() {
    if (s)
      throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function u(m) {
    if (typeof m != "function")
      throw new Error("Expected the listener to be a function. Instead, received: '" + Ze(m) + "'");
    if (s)
      throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var h = !0;
    return d(), l.push(m), function() {
      if (!!h) {
        if (s)
          throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        h = !1, d();
        var x = l.indexOf(m);
        l.splice(x, 1), o = null;
      }
    };
  }
  function c(m) {
    if (!wo(m))
      throw new Error("Actions must be plain objects. Instead, the actual type was: '" + Ze(m) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof m.type > "u")
      throw new Error('Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (s)
      throw new Error("Reducers may not dispatch actions.");
    try {
      s = !0, i = a(i, m);
    } finally {
      s = !1;
    }
    for (var h = o = l, b = 0; b < h.length; b++) {
      var x = h[b];
      x();
    }
    return m;
  }
  function p(m) {
    if (typeof m != "function")
      throw new Error("Expected the nextReducer to be a function. Instead, received: '" + Ze(m));
    a = m, c({
      type: Fn.REPLACE
    });
  }
  function g() {
    var m, h = u;
    return m = {
      subscribe: function(x) {
        if (typeof x != "object" || x === null)
          throw new Error("Expected the observer to be an object. Instead, received: '" + Ze(x) + "'");
        function I() {
          x.next && x.next(f());
        }
        I();
        var y = h(I);
        return {
          unsubscribe: y
        };
      }
    }, m[Ln] = function() {
      return this;
    }, m;
  }
  return c({
    type: Fn.INIT
  }), n = {
    dispatch: c,
    subscribe: u,
    getState: f,
    replaceReducer: p
  }, n[Ln] = g, n;
}
function Io(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Gn(e, r) {
  return function() {
    return r(e.apply(this, arguments));
  };
}
function kn(e, r) {
  if (typeof e == "function")
    return Gn(e, r);
  if (typeof e != "object" || e === null)
    throw new Error("bindActionCreators expected an object or a function, but instead received: '" + Ze(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var t = {};
  for (var n in e) {
    var a = e[n];
    typeof a == "function" && (t[n] = Gn(a, r));
  }
  return t;
}
function Ma() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return r.length === 0 ? function(n) {
    return n;
  } : r.length === 1 ? r[0] : r.reduce(function(n, a) {
    return function() {
      return n(a.apply(void 0, arguments));
    };
  });
}
function Po() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return function(n) {
    return function() {
      var a = n.apply(void 0, arguments), i = function() {
        throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, o = {
        getState: a.getState,
        dispatch: function() {
          return i.apply(void 0, arguments);
        }
      }, l = r.map(function(s) {
        return s(o);
      });
      return i = Ma.apply(void 0, l)(a.dispatch), Nn(Nn({}, a), {}, {
        dispatch: i
      });
    };
  };
}
function Wn() {
}
typeof Wn.name == "string" && Wn.name !== "isCrushed" && Io('You are currently using minified code outside of NODE_ENV === "production". This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) to ensure you have the correct code for your production build.');
var Qe = { exports: {} }, Vt = { exports: {} }, ee = {};
(function() {
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, c = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function I(w) {
    return typeof w == "string" || typeof w == "function" || w === n || w === d || w === i || w === a || w === u || w === c || typeof w == "object" && w !== null && (w.$$typeof === g || w.$$typeof === p || w.$$typeof === o || w.$$typeof === l || w.$$typeof === f || w.$$typeof === h || w.$$typeof === b || w.$$typeof === x || w.$$typeof === m);
  }
  function y(w) {
    if (typeof w == "object" && w !== null) {
      var he = w.$$typeof;
      switch (he) {
        case r:
          var fe = w.type;
          switch (fe) {
            case s:
            case d:
            case n:
            case i:
            case a:
            case u:
              return fe;
            default:
              var Re = fe && fe.$$typeof;
              switch (Re) {
                case l:
                case f:
                case g:
                case p:
                case o:
                  return Re;
                default:
                  return he;
              }
          }
        case t:
          return he;
      }
    }
  }
  var N = s, M = d, R = l, H = o, O = r, _ = f, K = n, X = g, C = p, S = t, B = i, F = a, T = u, k = !1;
  function A(w) {
    return k || (k = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), W(w) || y(w) === s;
  }
  function W(w) {
    return y(w) === d;
  }
  function $(w) {
    return y(w) === l;
  }
  function Y(w) {
    return y(w) === o;
  }
  function U(w) {
    return typeof w == "object" && w !== null && w.$$typeof === r;
  }
  function Q(w) {
    return y(w) === f;
  }
  function ae(w) {
    return y(w) === n;
  }
  function ie(w) {
    return y(w) === g;
  }
  function ye(w) {
    return y(w) === p;
  }
  function xe(w) {
    return y(w) === t;
  }
  function be(w) {
    return y(w) === i;
  }
  function we(w) {
    return y(w) === a;
  }
  function L(w) {
    return y(w) === u;
  }
  ee.AsyncMode = N, ee.ConcurrentMode = M, ee.ContextConsumer = R, ee.ContextProvider = H, ee.Element = O, ee.ForwardRef = _, ee.Fragment = K, ee.Lazy = X, ee.Memo = C, ee.Portal = S, ee.Profiler = B, ee.StrictMode = F, ee.Suspense = T, ee.isAsyncMode = A, ee.isConcurrentMode = W, ee.isContextConsumer = $, ee.isContextProvider = Y, ee.isElement = U, ee.isForwardRef = Q, ee.isFragment = ae, ee.isLazy = ie, ee.isMemo = ye, ee.isPortal = xe, ee.isProfiler = be, ee.isStrictMode = we, ee.isSuspense = L, ee.isValidElementType = I, ee.typeOf = y;
})();
(function(e) {
  e.exports = ee;
})(Vt);
var jn = Object.getOwnPropertySymbols, To = Object.prototype.hasOwnProperty, Ro = Object.prototype.propertyIsEnumerable;
function Ao(e) {
  if (e == null)
    throw new TypeError("Object.assign cannot be called with null or undefined");
  return Object(e);
}
function Oo() {
  try {
    if (!Object.assign)
      return !1;
    var e = new String("abc");
    if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5")
      return !1;
    for (var r = {}, t = 0; t < 10; t++)
      r["_" + String.fromCharCode(t)] = t;
    var n = Object.getOwnPropertyNames(r).map(function(i) {
      return r[i];
    });
    if (n.join("") !== "0123456789")
      return !1;
    var a = {};
    return "abcdefghijklmnopqrst".split("").forEach(function(i) {
      a[i] = i;
    }), Object.keys(Object.assign({}, a)).join("") === "abcdefghijklmnopqrst";
  } catch {
    return !1;
  }
}
var Mo = Oo() ? Object.assign : function(e, r) {
  for (var t, n = Ao(e), a, i = 1; i < arguments.length; i++) {
    t = Object(arguments[i]);
    for (var o in t)
      To.call(t, o) && (n[o] = t[o]);
    if (jn) {
      a = jn(t);
      for (var l = 0; l < a.length; l++)
        Ro.call(t, a[l]) && (n[a[l]] = t[a[l]]);
    }
  }
  return n;
}, Bo = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Ba = Bo, Na = Function.call.bind(Object.prototype.hasOwnProperty), At = function() {
};
{
  var No = Ba, Ot = {}, Lo = Na;
  At = function(e) {
    var r = "Warning: " + e;
    typeof console < "u" && console.error(r);
    try {
      throw new Error(r);
    } catch {
    }
  };
}
function La(e, r, t, n, a) {
  for (var i in e)
    if (Lo(e, i)) {
      var o;
      try {
        if (typeof e[i] != "function") {
          var l = Error(
            (n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
          );
          throw l.name = "Invariant Violation", l;
        }
        o = e[i](r, i, n, t, null, No);
      } catch (d) {
        o = d;
      }
      if (o && !(o instanceof Error) && At(
        (n || "React class") + ": type specification of " + t + " `" + i + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof o + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
      ), o instanceof Error && !(o.message in Ot)) {
        Ot[o.message] = !0;
        var s = a ? a() : "";
        At(
          "Failed " + t + " type: " + o.message + (s ?? "")
        );
      }
    }
}
La.resetWarningCache = function() {
  Ot = {};
};
var Fo = La, Go = Vt.exports, ko = Mo, lr = Ba, ft = Na, Un = Fo, ur = function() {
};
ur = function(e) {
  var r = "Warning: " + e;
  typeof console < "u" && console.error(r);
  try {
    throw new Error(r);
  } catch {
  }
};
function kr() {
  return null;
}
var Wo = function(e, r) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = "@@iterator";
  function a(C) {
    var S = C && (t && C[t] || C[n]);
    if (typeof S == "function")
      return S;
  }
  var i = "<<anonymous>>", o = {
    array: f("array"),
    bigint: f("bigint"),
    bool: f("boolean"),
    func: f("function"),
    number: f("number"),
    object: f("object"),
    string: f("string"),
    symbol: f("symbol"),
    any: u(),
    arrayOf: c,
    element: p(),
    elementType: g(),
    instanceOf: m,
    node: I(),
    objectOf: b,
    oneOf: h,
    oneOfType: x,
    shape: N,
    exact: M
  };
  function l(C, S) {
    return C === S ? C !== 0 || 1 / C === 1 / S : C !== C && S !== S;
  }
  function s(C, S) {
    this.message = C, this.data = S && typeof S == "object" ? S : {}, this.stack = "";
  }
  s.prototype = Error.prototype;
  function d(C) {
    var S = {}, B = 0;
    function F(k, A, W, $, Y, U, Q) {
      if ($ = $ || i, U = U || W, Q !== lr) {
        if (r) {
          var ae = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ae.name = "Invariant Violation", ae;
        } else if (typeof console < "u") {
          var ie = $ + ":" + W;
          !S[ie] && B < 3 && (ur(
            "You are manually calling a React.PropTypes validation function for the `" + U + "` prop on `" + $ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
          ), S[ie] = !0, B++);
        }
      }
      return A[W] == null ? k ? A[W] === null ? new s("The " + Y + " `" + U + "` is marked as required " + ("in `" + $ + "`, but its value is `null`.")) : new s("The " + Y + " `" + U + "` is marked as required in " + ("`" + $ + "`, but its value is `undefined`.")) : null : C(A, W, $, Y, U);
    }
    var T = F.bind(null, !1);
    return T.isRequired = F.bind(null, !0), T;
  }
  function f(C) {
    function S(B, F, T, k, A, W) {
      var $ = B[F], Y = O($);
      if (Y !== C) {
        var U = _($);
        return new s(
          "Invalid " + k + " `" + A + "` of type " + ("`" + U + "` supplied to `" + T + "`, expected ") + ("`" + C + "`."),
          { expectedType: C }
        );
      }
      return null;
    }
    return d(S);
  }
  function u() {
    return d(kr);
  }
  function c(C) {
    function S(B, F, T, k, A) {
      if (typeof C != "function")
        return new s("Property `" + A + "` of component `" + T + "` has invalid PropType notation inside arrayOf.");
      var W = B[F];
      if (!Array.isArray(W)) {
        var $ = O(W);
        return new s("Invalid " + k + " `" + A + "` of type " + ("`" + $ + "` supplied to `" + T + "`, expected an array."));
      }
      for (var Y = 0; Y < W.length; Y++) {
        var U = C(W, Y, T, k, A + "[" + Y + "]", lr);
        if (U instanceof Error)
          return U;
      }
      return null;
    }
    return d(S);
  }
  function p() {
    function C(S, B, F, T, k) {
      var A = S[B];
      if (!e(A)) {
        var W = O(A);
        return new s("Invalid " + T + " `" + k + "` of type " + ("`" + W + "` supplied to `" + F + "`, expected a single ReactElement."));
      }
      return null;
    }
    return d(C);
  }
  function g() {
    function C(S, B, F, T, k) {
      var A = S[B];
      if (!Go.isValidElementType(A)) {
        var W = O(A);
        return new s("Invalid " + T + " `" + k + "` of type " + ("`" + W + "` supplied to `" + F + "`, expected a single ReactElement type."));
      }
      return null;
    }
    return d(C);
  }
  function m(C) {
    function S(B, F, T, k, A) {
      if (!(B[F] instanceof C)) {
        var W = C.name || i, $ = X(B[F]);
        return new s("Invalid " + k + " `" + A + "` of type " + ("`" + $ + "` supplied to `" + T + "`, expected ") + ("instance of `" + W + "`."));
      }
      return null;
    }
    return d(S);
  }
  function h(C) {
    if (!Array.isArray(C))
      return arguments.length > 1 ? ur(
        "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
      ) : ur("Invalid argument supplied to oneOf, expected an array."), kr;
    function S(B, F, T, k, A) {
      for (var W = B[F], $ = 0; $ < C.length; $++)
        if (l(W, C[$]))
          return null;
      var Y = JSON.stringify(C, function(Q, ae) {
        var ie = _(ae);
        return ie === "symbol" ? String(ae) : ae;
      });
      return new s("Invalid " + k + " `" + A + "` of value `" + String(W) + "` " + ("supplied to `" + T + "`, expected one of " + Y + "."));
    }
    return d(S);
  }
  function b(C) {
    function S(B, F, T, k, A) {
      if (typeof C != "function")
        return new s("Property `" + A + "` of component `" + T + "` has invalid PropType notation inside objectOf.");
      var W = B[F], $ = O(W);
      if ($ !== "object")
        return new s("Invalid " + k + " `" + A + "` of type " + ("`" + $ + "` supplied to `" + T + "`, expected an object."));
      for (var Y in W)
        if (ft(W, Y)) {
          var U = C(W, Y, T, k, A + "." + Y, lr);
          if (U instanceof Error)
            return U;
        }
      return null;
    }
    return d(S);
  }
  function x(C) {
    if (!Array.isArray(C))
      return ur("Invalid argument supplied to oneOfType, expected an instance of array."), kr;
    for (var S = 0; S < C.length; S++) {
      var B = C[S];
      if (typeof B != "function")
        return ur(
          "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + K(B) + " at index " + S + "."
        ), kr;
    }
    function F(T, k, A, W, $) {
      for (var Y = [], U = 0; U < C.length; U++) {
        var Q = C[U], ae = Q(T, k, A, W, $, lr);
        if (ae == null)
          return null;
        ae.data && ft(ae.data, "expectedType") && Y.push(ae.data.expectedType);
      }
      var ie = Y.length > 0 ? ", expected one of type [" + Y.join(", ") + "]" : "";
      return new s("Invalid " + W + " `" + $ + "` supplied to " + ("`" + A + "`" + ie + "."));
    }
    return d(F);
  }
  function I() {
    function C(S, B, F, T, k) {
      return R(S[B]) ? null : new s("Invalid " + T + " `" + k + "` supplied to " + ("`" + F + "`, expected a ReactNode."));
    }
    return d(C);
  }
  function y(C, S, B, F, T) {
    return new s(
      (C || "React class") + ": " + S + " type `" + B + "." + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + T + "`."
    );
  }
  function N(C) {
    function S(B, F, T, k, A) {
      var W = B[F], $ = O(W);
      if ($ !== "object")
        return new s("Invalid " + k + " `" + A + "` of type `" + $ + "` " + ("supplied to `" + T + "`, expected `object`."));
      for (var Y in C) {
        var U = C[Y];
        if (typeof U != "function")
          return y(T, k, A, Y, _(U));
        var Q = U(W, Y, T, k, A + "." + Y, lr);
        if (Q)
          return Q;
      }
      return null;
    }
    return d(S);
  }
  function M(C) {
    function S(B, F, T, k, A) {
      var W = B[F], $ = O(W);
      if ($ !== "object")
        return new s("Invalid " + k + " `" + A + "` of type `" + $ + "` " + ("supplied to `" + T + "`, expected `object`."));
      var Y = ko({}, B[F], C);
      for (var U in Y) {
        var Q = C[U];
        if (ft(C, U) && typeof Q != "function")
          return y(T, k, A, U, _(Q));
        if (!Q)
          return new s(
            "Invalid " + k + " `" + A + "` key `" + U + "` supplied to `" + T + "`.\nBad object: " + JSON.stringify(B[F], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(C), null, "  ")
          );
        var ae = Q(W, U, T, k, A + "." + U, lr);
        if (ae)
          return ae;
      }
      return null;
    }
    return d(S);
  }
  function R(C) {
    switch (typeof C) {
      case "number":
      case "string":
      case "undefined":
        return !0;
      case "boolean":
        return !C;
      case "object":
        if (Array.isArray(C))
          return C.every(R);
        if (C === null || e(C))
          return !0;
        var S = a(C);
        if (S) {
          var B = S.call(C), F;
          if (S !== C.entries) {
            for (; !(F = B.next()).done; )
              if (!R(F.value))
                return !1;
          } else
            for (; !(F = B.next()).done; ) {
              var T = F.value;
              if (T && !R(T[1]))
                return !1;
            }
        } else
          return !1;
        return !0;
      default:
        return !1;
    }
  }
  function H(C, S) {
    return C === "symbol" ? !0 : S ? S["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && S instanceof Symbol : !1;
  }
  function O(C) {
    var S = typeof C;
    return Array.isArray(C) ? "array" : C instanceof RegExp ? "object" : H(S, C) ? "symbol" : S;
  }
  function _(C) {
    if (typeof C > "u" || C === null)
      return "" + C;
    var S = O(C);
    if (S === "object") {
      if (C instanceof Date)
        return "date";
      if (C instanceof RegExp)
        return "regexp";
    }
    return S;
  }
  function K(C) {
    var S = _(C);
    switch (S) {
      case "array":
      case "object":
        return "an " + S;
      case "boolean":
      case "date":
      case "regexp":
        return "a " + S;
      default:
        return S;
    }
  }
  function X(C) {
    return !C.constructor || !C.constructor.name ? i : C.constructor.name;
  }
  return o.checkPropTypes = Un, o.resetWarningCache = Un.resetWarningCache, o.PropTypes = o, o;
};
{
  var jo = Vt.exports, Uo = !0;
  Qe.exports = Wo(jo.isElement, Uo);
}
var Yt = /* @__PURE__ */ te.createContext(null);
Yt.displayName = "ReactRedux";
function $o(e) {
  e();
}
var Fa = $o, Vo = function(r) {
  return Fa = r;
}, Yo = function() {
  return Fa;
};
function Ho() {
  var e = Yo(), r = null, t = null;
  return {
    clear: function() {
      r = null, t = null;
    },
    notify: function() {
      e(function() {
        for (var a = r; a; )
          a.callback(), a = a.next;
      });
    },
    get: function() {
      for (var a = [], i = r; i; )
        a.push(i), i = i.next;
      return a;
    },
    subscribe: function(a) {
      var i = !0, o = t = {
        callback: a,
        next: null,
        prev: t
      };
      return o.prev ? o.prev.next = o : r = o, function() {
        !i || r === null || (i = !1, o.next ? o.next.prev = o.prev : t = o.prev, o.prev ? o.prev.next = o.next : r = o.next);
      };
    }
  };
}
var $n = {
  notify: function() {
  },
  get: function() {
    return [];
  }
};
function Ga(e, r) {
  var t, n = $n;
  function a(u) {
    return s(), n.subscribe(u);
  }
  function i() {
    n.notify();
  }
  function o() {
    f.onStateChange && f.onStateChange();
  }
  function l() {
    return Boolean(t);
  }
  function s() {
    t || (t = r ? r.addNestedSub(o) : e.subscribe(o), n = Ho());
  }
  function d() {
    t && (t(), t = void 0, n.clear(), n = $n);
  }
  var f = {
    addNestedSub: a,
    notifyNestedSubs: i,
    handleChangeWrapper: o,
    isSubscribed: l,
    trySubscribe: s,
    tryUnsubscribe: d,
    getListeners: function() {
      return n;
    }
  };
  return f;
}
var ka = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Ra : Ge;
function Wa(e) {
  var r = e.store, t = e.context, n = e.children, a = Fe(function() {
    var l = Ga(r);
    return {
      store: r,
      subscription: l
    };
  }, [r]), i = Fe(function() {
    return r.getState();
  }, [r]);
  ka(function() {
    var l = a.subscription;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), i !== r.getState() && l.notifyNestedSubs(), function() {
      l.tryUnsubscribe(), l.onStateChange = null;
    };
  }, [a, i]);
  var o = t || Yt;
  return /* @__PURE__ */ te.createElement(o.Provider, {
    value: a
  }, n);
}
Wa.propTypes = {
  store: Qe.exports.shape({
    subscribe: Qe.exports.func.isRequired,
    dispatch: Qe.exports.func.isRequired,
    getState: Qe.exports.func.isRequired
  }),
  context: Qe.exports.object,
  children: Qe.exports.any
};
function Hr(e, r) {
  if (e == null)
    return {};
  var t = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(r.indexOf(a) >= 0) && (t[a] = e[a]);
  return t;
}
var ja = { exports: {} }, re = {};
(function() {
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, c = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function I(w) {
    return typeof w == "string" || typeof w == "function" || w === n || w === d || w === i || w === a || w === u || w === c || typeof w == "object" && w !== null && (w.$$typeof === g || w.$$typeof === p || w.$$typeof === o || w.$$typeof === l || w.$$typeof === f || w.$$typeof === h || w.$$typeof === b || w.$$typeof === x || w.$$typeof === m);
  }
  function y(w) {
    if (typeof w == "object" && w !== null) {
      var he = w.$$typeof;
      switch (he) {
        case r:
          var fe = w.type;
          switch (fe) {
            case s:
            case d:
            case n:
            case i:
            case a:
            case u:
              return fe;
            default:
              var Re = fe && fe.$$typeof;
              switch (Re) {
                case l:
                case f:
                case g:
                case p:
                case o:
                  return Re;
                default:
                  return he;
              }
          }
        case t:
          return he;
      }
    }
  }
  var N = s, M = d, R = l, H = o, O = r, _ = f, K = n, X = g, C = p, S = t, B = i, F = a, T = u, k = !1;
  function A(w) {
    return k || (k = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), W(w) || y(w) === s;
  }
  function W(w) {
    return y(w) === d;
  }
  function $(w) {
    return y(w) === l;
  }
  function Y(w) {
    return y(w) === o;
  }
  function U(w) {
    return typeof w == "object" && w !== null && w.$$typeof === r;
  }
  function Q(w) {
    return y(w) === f;
  }
  function ae(w) {
    return y(w) === n;
  }
  function ie(w) {
    return y(w) === g;
  }
  function ye(w) {
    return y(w) === p;
  }
  function xe(w) {
    return y(w) === t;
  }
  function be(w) {
    return y(w) === i;
  }
  function we(w) {
    return y(w) === a;
  }
  function L(w) {
    return y(w) === u;
  }
  re.AsyncMode = N, re.ConcurrentMode = M, re.ContextConsumer = R, re.ContextProvider = H, re.Element = O, re.ForwardRef = _, re.Fragment = K, re.Lazy = X, re.Memo = C, re.Portal = S, re.Profiler = B, re.StrictMode = F, re.Suspense = T, re.isAsyncMode = A, re.isConcurrentMode = W, re.isContextConsumer = $, re.isContextProvider = Y, re.isElement = U, re.isForwardRef = Q, re.isFragment = ae, re.isLazy = ie, re.isMemo = ye, re.isPortal = xe, re.isProfiler = be, re.isStrictMode = we, re.isSuspense = L, re.isValidElementType = I, re.typeOf = y;
})();
(function(e) {
  e.exports = re;
})(ja);
var Ht = ja.exports, _o = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, zo = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, qo = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ua = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, _t = {};
_t[Ht.ForwardRef] = qo;
_t[Ht.Memo] = Ua;
function Vn(e) {
  return Ht.isMemo(e) ? Ua : _t[e.$$typeof] || _o;
}
var Ko = Object.defineProperty, Xo = Object.getOwnPropertyNames, Yn = Object.getOwnPropertySymbols, Jo = Object.getOwnPropertyDescriptor, Zo = Object.getPrototypeOf, Hn = Object.prototype;
function $a(e, r, t) {
  if (typeof r != "string") {
    if (Hn) {
      var n = Zo(r);
      n && n !== Hn && $a(e, n, t);
    }
    var a = Xo(r);
    Yn && (a = a.concat(Yn(r)));
    for (var i = Vn(e), o = Vn(r), l = 0; l < a.length; ++l) {
      var s = a[l];
      if (!zo[s] && !(t && t[s]) && !(o && o[s]) && !(i && i[s])) {
        var d = Jo(r, s);
        try {
          Ko(e, s, d);
        } catch {
        }
      }
    }
  }
  return e;
}
var _n = $a, Mt = { exports: {} }, le = {};
(function() {
  var e = 60103, r = 60106, t = 60107, n = 60108, a = 60114, i = 60109, o = 60110, l = 60112, s = 60113, d = 60120, f = 60115, u = 60116, c = 60121, p = 60122, g = 60117, m = 60129, h = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var b = Symbol.for;
    e = b("react.element"), r = b("react.portal"), t = b("react.fragment"), n = b("react.strict_mode"), a = b("react.profiler"), i = b("react.provider"), o = b("react.context"), l = b("react.forward_ref"), s = b("react.suspense"), d = b("react.suspense_list"), f = b("react.memo"), u = b("react.lazy"), c = b("react.block"), p = b("react.server.block"), g = b("react.fundamental"), b("react.scope"), b("react.opaque.id"), m = b("react.debug_trace_mode"), b("react.offscreen"), h = b("react.legacy_hidden");
  }
  var x = !1;
  function I(L) {
    return !!(typeof L == "string" || typeof L == "function" || L === t || L === a || L === m || L === n || L === s || L === d || L === h || x || typeof L == "object" && L !== null && (L.$$typeof === u || L.$$typeof === f || L.$$typeof === i || L.$$typeof === o || L.$$typeof === l || L.$$typeof === g || L.$$typeof === c || L[0] === p));
  }
  function y(L) {
    if (typeof L == "object" && L !== null) {
      var w = L.$$typeof;
      switch (w) {
        case e:
          var he = L.type;
          switch (he) {
            case t:
            case a:
            case n:
            case s:
            case d:
              return he;
            default:
              var fe = he && he.$$typeof;
              switch (fe) {
                case o:
                case l:
                case u:
                case f:
                case i:
                  return fe;
                default:
                  return w;
              }
          }
        case r:
          return w;
      }
    }
  }
  var N = o, M = i, R = e, H = l, O = t, _ = u, K = f, X = r, C = a, S = n, B = s, F = !1, T = !1;
  function k(L) {
    return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
  }
  function A(L) {
    return T || (T = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
  }
  function W(L) {
    return y(L) === o;
  }
  function $(L) {
    return y(L) === i;
  }
  function Y(L) {
    return typeof L == "object" && L !== null && L.$$typeof === e;
  }
  function U(L) {
    return y(L) === l;
  }
  function Q(L) {
    return y(L) === t;
  }
  function ae(L) {
    return y(L) === u;
  }
  function ie(L) {
    return y(L) === f;
  }
  function ye(L) {
    return y(L) === r;
  }
  function xe(L) {
    return y(L) === a;
  }
  function be(L) {
    return y(L) === n;
  }
  function we(L) {
    return y(L) === s;
  }
  le.ContextConsumer = N, le.ContextProvider = M, le.Element = R, le.ForwardRef = H, le.Fragment = O, le.Lazy = _, le.Memo = K, le.Portal = X, le.Profiler = C, le.StrictMode = S, le.Suspense = B, le.isAsyncMode = k, le.isConcurrentMode = A, le.isContextConsumer = W, le.isContextProvider = $, le.isElement = Y, le.isForwardRef = U, le.isFragment = Q, le.isLazy = ae, le.isMemo = ie, le.isPortal = ye, le.isProfiler = xe, le.isStrictMode = be, le.isSuspense = we, le.isValidElementType = I, le.typeOf = y;
})();
(function(e) {
  e.exports = le;
})(Mt);
var Qo = ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"], el = ["reactReduxForwardedRef"], rl = [], tl = [null, null], nl = function(r) {
  try {
    return JSON.stringify(r);
  } catch {
    return String(r);
  }
};
function al(e, r) {
  var t = e[1];
  return [r.payload, t + 1];
}
function zn(e, r, t) {
  ka(function() {
    return e.apply(void 0, r);
  }, t);
}
function il(e, r, t, n, a, i, o) {
  e.current = n, r.current = a, t.current = !1, i.current && (i.current = null, o());
}
function ol(e, r, t, n, a, i, o, l, s, d) {
  if (!!e) {
    var f = !1, u = null, c = function() {
      if (!f) {
        var m = r.getState(), h, b;
        try {
          h = n(m, a.current);
        } catch (x) {
          b = x, u = x;
        }
        b || (u = null), h === i.current ? o.current || s() : (i.current = h, l.current = h, o.current = !0, d({
          type: "STORE_UPDATED",
          payload: {
            error: b
          }
        }));
      }
    };
    t.onStateChange = c, t.trySubscribe(), c();
    var p = function() {
      if (f = !0, t.tryUnsubscribe(), t.onStateChange = null, u)
        throw u;
    };
    return p;
  }
}
var ll = function() {
  return [null, 0];
};
function sl(e, r) {
  r === void 0 && (r = {});
  var t = r, n = t.getDisplayName, a = n === void 0 ? function(M) {
    return "ConnectAdvanced(" + M + ")";
  } : n, i = t.methodName, o = i === void 0 ? "connectAdvanced" : i, l = t.renderCountProp, s = l === void 0 ? void 0 : l, d = t.shouldHandleStateChanges, f = d === void 0 ? !0 : d, u = t.storeKey, c = u === void 0 ? "store" : u, p = t.withRef, g = p === void 0 ? !1 : p, m = t.forwardRef, h = m === void 0 ? !1 : m, b = t.context, x = b === void 0 ? Yt : b, I = Hr(t, Qo);
  {
    if (s !== void 0)
      throw new Error("renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
    if (g)
      throw new Error("withRef is removed. To access the wrapped instance, use a ref on the connected component");
    var y = "To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect";
    if (c !== "store")
      throw new Error("storeKey has been removed and does not do anything. " + y);
  }
  var N = x;
  return function(R) {
    if (!Mt.exports.isValidElementType(R))
      throw new Error("You must pass a component to the function returned by " + (o + ". Instead received " + nl(R)));
    var H = R.displayName || R.name || "Component", O = a(H), _ = j({}, I, {
      getDisplayName: a,
      methodName: o,
      renderCountProp: s,
      shouldHandleStateChanges: f,
      storeKey: c,
      displayName: O,
      wrappedComponentName: H,
      WrappedComponent: R
    }), K = I.pure;
    function X(T) {
      return e(T.dispatch, _);
    }
    var C = K ? Fe : function(T) {
      return T();
    };
    function S(T) {
      var k = Fe(function() {
        var Xe = T.reactReduxForwardedRef, hr = Hr(T, el);
        return [T.context, Xe, hr];
      }, [T]), A = k[0], W = k[1], $ = k[2], Y = Fe(function() {
        return A && A.Consumer && Mt.exports.isContextConsumer(/* @__PURE__ */ te.createElement(A.Consumer, null)) ? A : N;
      }, [A, N]), U = $t(Y), Q = Boolean(T.store) && Boolean(T.store.getState) && Boolean(T.store.dispatch), ae = Boolean(U) && Boolean(U.store);
      if (!Q && !ae)
        throw new Error('Could not find "store" in the context of ' + ('"' + O + '". Either wrap the root component in a <Provider>, ') + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + O + " in connect options."));
      var ie = Q ? T.store : U.store, ye = Fe(function() {
        return X(ie);
      }, [ie]), xe = Fe(function() {
        if (!f)
          return tl;
        var Xe = Ga(ie, Q ? null : U.subscription), hr = Xe.notifyNestedSubs.bind(Xe);
        return [Xe, hr];
      }, [ie, Q, U]), be = xe[0], we = xe[1], L = Fe(function() {
        return Q ? U : j({}, U, {
          subscription: be
        });
      }, [Q, U, be]), w = vo(al, rl, ll), he = w[0], fe = he[0], Re = w[1];
      if (fe && fe.error)
        throw fe.error;
      var ze = ne(), ar = ne($), qe = ne(), Ke = ne(!1), gr = C(function() {
        return qe.current && $ === ar.current ? qe.current : ye(ie.getState(), $);
      }, [ie, fe, $]);
      zn(il, [ar, ze, Ke, $, gr, qe, we]), zn(ol, [f, ie, be, ye, ar, ze, Ke, qe, we, Re], [ie, be, ye]);
      var mr = Fe(function() {
        return /* @__PURE__ */ te.createElement(R, j({}, gr, {
          ref: W
        }));
      }, [W, R, gr]), br = Fe(function() {
        return f ? /* @__PURE__ */ te.createElement(Y.Provider, {
          value: L
        }, mr) : mr;
      }, [Y, mr, L]);
      return br;
    }
    var B = K ? te.memo(S) : S;
    if (B.WrappedComponent = R, B.displayName = S.displayName = O, h) {
      var F = te.forwardRef(function(k, A) {
        return /* @__PURE__ */ te.createElement(B, j({}, k, {
          reactReduxForwardedRef: A
        }));
      });
      return F.displayName = O, F.WrappedComponent = R, _n(F, R);
    }
    return _n(B, R);
  };
}
function qn(e, r) {
  return e === r ? e !== 0 || r !== 0 || 1 / e === 1 / r : e !== e && r !== r;
}
function pt(e, r) {
  if (qn(e, r))
    return !0;
  if (typeof e != "object" || e === null || typeof r != "object" || r === null)
    return !1;
  var t = Object.keys(e), n = Object.keys(r);
  if (t.length !== n.length)
    return !1;
  for (var a = 0; a < t.length; a++)
    if (!Object.prototype.hasOwnProperty.call(r, t[a]) || !qn(e[t[a]], r[t[a]]))
      return !1;
  return !0;
}
function ul(e, r) {
  var t = {}, n = function(o) {
    var l = e[o];
    typeof l == "function" && (t[o] = function() {
      return r(l.apply(void 0, arguments));
    });
  };
  for (var a in e)
    n(a);
  return t;
}
function cl(e) {
  if (typeof e != "object" || e === null)
    return !1;
  var r = Object.getPrototypeOf(e);
  if (r === null)
    return !0;
  for (var t = r; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return r === t;
}
function Va(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Ya(e, r, t) {
  cl(e) || Va(t + "() in " + r + " must return a plain object. Instead received " + e + ".");
}
function zt(e) {
  return function(t, n) {
    var a = e(t, n);
    function i() {
      return a;
    }
    return i.dependsOnOwnProps = !1, i;
  };
}
function Kn(e) {
  return e.dependsOnOwnProps !== null && e.dependsOnOwnProps !== void 0 ? Boolean(e.dependsOnOwnProps) : e.length !== 1;
}
function Ha(e, r) {
  return function(n, a) {
    var i = a.displayName, o = function(s, d) {
      return o.dependsOnOwnProps ? o.mapToProps(s, d) : o.mapToProps(s);
    };
    return o.dependsOnOwnProps = !0, o.mapToProps = function(s, d) {
      o.mapToProps = e, o.dependsOnOwnProps = Kn(e);
      var f = o(s, d);
      return typeof f == "function" && (o.mapToProps = f, o.dependsOnOwnProps = Kn(f), f = o(s, d)), Ya(f, i, r), f;
    }, o;
  };
}
function dl(e) {
  return typeof e == "function" ? Ha(e, "mapDispatchToProps") : void 0;
}
function fl(e) {
  return e ? void 0 : zt(function(r) {
    return {
      dispatch: r
    };
  });
}
function pl(e) {
  return e && typeof e == "object" ? zt(function(r) {
    return ul(e, r);
  }) : void 0;
}
const vl = [dl, fl, pl];
function gl(e) {
  return typeof e == "function" ? Ha(e, "mapStateToProps") : void 0;
}
function ml(e) {
  return e ? void 0 : zt(function() {
    return {};
  });
}
const bl = [gl, ml];
function hl(e, r, t) {
  return j({}, t, e, r);
}
function yl(e) {
  return function(t, n) {
    var a = n.displayName, i = n.pure, o = n.areMergedPropsEqual, l = !1, s;
    return function(f, u, c) {
      var p = e(f, u, c);
      return l ? (!i || !o(p, s)) && (s = p) : (l = !0, s = p, Ya(s, a, "mergeProps")), s;
    };
  };
}
function xl(e) {
  return typeof e == "function" ? yl(e) : void 0;
}
function wl(e) {
  return e ? void 0 : function() {
    return hl;
  };
}
const Cl = [xl, wl];
function vt(e, r, t) {
  if (e)
    (r === "mapStateToProps" || r === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Va("The selector for " + r + " of " + t + " did not specify a value for dependsOnOwnProps."));
  else
    throw new Error("Unexpected value for " + r + " in " + t + ".");
}
function El(e, r, t, n) {
  vt(e, "mapStateToProps", n), vt(r, "mapDispatchToProps", n), vt(t, "mergeProps", n);
}
var Dl = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function Sl(e, r, t, n) {
  return function(i, o) {
    return t(e(i, o), r(n, o), o);
  };
}
function Il(e, r, t, n, a) {
  var i = a.areStatesEqual, o = a.areOwnPropsEqual, l = a.areStatePropsEqual, s = !1, d, f, u, c, p;
  function g(I, y) {
    return d = I, f = y, u = e(d, f), c = r(n, f), p = t(u, c, f), s = !0, p;
  }
  function m() {
    return u = e(d, f), r.dependsOnOwnProps && (c = r(n, f)), p = t(u, c, f), p;
  }
  function h() {
    return e.dependsOnOwnProps && (u = e(d, f)), r.dependsOnOwnProps && (c = r(n, f)), p = t(u, c, f), p;
  }
  function b() {
    var I = e(d, f), y = !l(I, u);
    return u = I, y && (p = t(u, c, f)), p;
  }
  function x(I, y) {
    var N = !o(y, f), M = !i(I, d, y, f);
    return d = I, f = y, N && M ? m() : N ? h() : M ? b() : p;
  }
  return function(y, N) {
    return s ? x(y, N) : g(y, N);
  };
}
function Pl(e, r) {
  var t = r.initMapStateToProps, n = r.initMapDispatchToProps, a = r.initMergeProps, i = Hr(r, Dl), o = t(e, i), l = n(e, i), s = a(e, i);
  El(o, l, s, i.displayName);
  var d = i.pure ? Il : Sl;
  return d(o, l, s, e, i);
}
var Tl = ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"];
function gt(e, r, t) {
  for (var n = r.length - 1; n >= 0; n--) {
    var a = r[n](e);
    if (a)
      return a;
  }
  return function(i, o) {
    throw new Error("Invalid value of type " + typeof e + " for " + t + " argument when connecting component " + o.wrappedComponentName + ".");
  };
}
function Rl(e, r) {
  return e === r;
}
function Al(e) {
  var r = e === void 0 ? {} : e, t = r.connectHOC, n = t === void 0 ? sl : t, a = r.mapStateToPropsFactories, i = a === void 0 ? bl : a, o = r.mapDispatchToPropsFactories, l = o === void 0 ? vl : o, s = r.mergePropsFactories, d = s === void 0 ? Cl : s, f = r.selectorFactory, u = f === void 0 ? Pl : f;
  return function(p, g, m, h) {
    h === void 0 && (h = {});
    var b = h, x = b.pure, I = x === void 0 ? !0 : x, y = b.areStatesEqual, N = y === void 0 ? Rl : y, M = b.areOwnPropsEqual, R = M === void 0 ? pt : M, H = b.areStatePropsEqual, O = H === void 0 ? pt : H, _ = b.areMergedPropsEqual, K = _ === void 0 ? pt : _, X = Hr(b, Tl), C = gt(p, i, "mapStateToProps"), S = gt(g, l, "mapDispatchToProps"), B = gt(m, d, "mergeProps");
    return n(u, j({
      methodName: "connect",
      getDisplayName: function(T) {
        return "Connect(" + T + ")";
      },
      shouldHandleStateChanges: Boolean(p),
      initMapStateToProps: C,
      initMapDispatchToProps: S,
      initMergeProps: B,
      pure: I,
      areStatesEqual: N,
      areOwnPropsEqual: R,
      areStatePropsEqual: O,
      areMergedPropsEqual: K
    }, X));
  };
}
const _a = /* @__PURE__ */ Al();
Vo(mo);
function Ol(e, r) {
  if (e.length !== r.length)
    return !1;
  for (var t = 0; t < e.length; t++)
    if (e[t] !== r[t])
      return !1;
  return !0;
}
function za(e, r) {
  var t = Qr(function() {
    return {
      inputs: r,
      result: e()
    };
  })[0], n = ne(!0), a = ne(t), i = n.current || Boolean(r && a.current.inputs && Ol(r, a.current.inputs)), o = i ? a.current : {
    inputs: r,
    result: e()
  };
  return Ge(function() {
    n.current = !1, a.current = o;
  }, [o]), o.result;
}
function Ml(e, r) {
  return za(function() {
    return e;
  }, r);
}
var J = za, G = Ml, Bl = !1, mt = "Invariant failed";
function Nl(e, r) {
  if (!e) {
    if (Bl)
      throw new Error(mt);
    var t = typeof r == "function" ? r() : r, n = t ? "".concat(mt, ": ").concat(t) : mt;
    throw new Error(n);
  }
}
var Le = function(r) {
  var t = r.top, n = r.right, a = r.bottom, i = r.left, o = n - i, l = a - t, s = {
    top: t,
    right: n,
    bottom: a,
    left: i,
    width: o,
    height: l,
    x: i,
    y: t,
    center: {
      x: (n + i) / 2,
      y: (a + t) / 2
    }
  };
  return s;
}, qt = function(r, t) {
  return {
    top: r.top - t.top,
    left: r.left - t.left,
    bottom: r.bottom + t.bottom,
    right: r.right + t.right
  };
}, Xn = function(r, t) {
  return {
    top: r.top + t.top,
    left: r.left + t.left,
    bottom: r.bottom - t.bottom,
    right: r.right - t.right
  };
}, Ll = function(r, t) {
  return {
    top: r.top + t.y,
    left: r.left + t.x,
    bottom: r.bottom + t.y,
    right: r.right + t.x
  };
}, bt = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Kt = function(r) {
  var t = r.borderBox, n = r.margin, a = n === void 0 ? bt : n, i = r.border, o = i === void 0 ? bt : i, l = r.padding, s = l === void 0 ? bt : l, d = Le(qt(t, a)), f = Le(Xn(t, o)), u = Le(Xn(f, s));
  return {
    marginBox: d,
    borderBox: Le(t),
    paddingBox: f,
    contentBox: u,
    margin: a,
    border: o,
    padding: s
  };
}, Oe = function(r) {
  var t = r.slice(0, -2), n = r.slice(-2);
  if (n !== "px")
    return 0;
  var a = Number(t);
  return isNaN(a) && Nl(!1, "Could not parse value [raw: " + r + ", without suffix: " + t + "]"), a;
}, Fl = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, _r = function(r, t) {
  var n = r.borderBox, a = r.border, i = r.margin, o = r.padding, l = Ll(n, t);
  return Kt({
    borderBox: l,
    border: a,
    margin: i,
    padding: o
  });
}, zr = function(r, t) {
  return t === void 0 && (t = Fl()), _r(r, t);
}, qa = function(r, t) {
  var n = {
    top: Oe(t.marginTop),
    right: Oe(t.marginRight),
    bottom: Oe(t.marginBottom),
    left: Oe(t.marginLeft)
  }, a = {
    top: Oe(t.paddingTop),
    right: Oe(t.paddingRight),
    bottom: Oe(t.paddingBottom),
    left: Oe(t.paddingLeft)
  }, i = {
    top: Oe(t.borderTopWidth),
    right: Oe(t.borderRightWidth),
    bottom: Oe(t.borderBottomWidth),
    left: Oe(t.borderLeftWidth)
  };
  return Kt({
    borderBox: r,
    margin: n,
    padding: a,
    border: i
  });
}, Ka = function(r) {
  var t = r.getBoundingClientRect(), n = window.getComputedStyle(r);
  return qa(t, n);
}, Jn = Number.isNaN || function(r) {
  return typeof r == "number" && r !== r;
};
function Gl(e, r) {
  return !!(e === r || Jn(e) && Jn(r));
}
function kl(e, r) {
  if (e.length !== r.length)
    return !1;
  for (var t = 0; t < e.length; t++)
    if (!Gl(e[t], r[t]))
      return !1;
  return !0;
}
function pe(e, r) {
  r === void 0 && (r = kl);
  var t, n = [], a, i = !1;
  function o() {
    for (var l = [], s = 0; s < arguments.length; s++)
      l[s] = arguments[s];
    return i && t === this && r(l, n) || (a = e.apply(this, l), i = !0, t = this, n = l), a;
  }
  return o;
}
var Wl = function(r) {
  var t = [], n = null, a = function() {
    for (var o = arguments.length, l = new Array(o), s = 0; s < o; s++)
      l[s] = arguments[s];
    t = l, !n && (n = requestAnimationFrame(function() {
      n = null, r.apply(void 0, t);
    }));
  };
  return a.cancel = function() {
    !n || (cancelAnimationFrame(n), n = null);
  }, a;
};
const Tr = Wl;
var jl = /[ \t]{2,}/g, Ul = /^[ \t]*/gm, Zn = function(r) {
  return r.replace(jl, " ").replace(Ul, "").trim();
}, $l = function(r) {
  return Zn(`
  %creact-beautiful-dnd

  %c` + Zn(r) + `

  %c👷‍ This is a development only message. It will be removed in production builds.
`);
}, Vl = function(r) {
  return [$l(r), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"];
}, Yl = "__react-beautiful-dnd-disable-dev-warnings";
function Xa(e, r) {
  var t;
  typeof window < "u" && window[Yl] || (t = console)[e].apply(t, Vl(r));
}
var se = Xa.bind(null, "warn"), Bt = Xa.bind(null, "error");
function Ue() {
}
function Hl(e, r) {
  return j({}, e, {}, r);
}
function Me(e, r, t) {
  var n = r.map(function(a) {
    var i = Hl(t, a.options);
    return e.addEventListener(a.eventName, a.fn, i), function() {
      e.removeEventListener(a.eventName, a.fn, i);
    };
  });
  return function() {
    n.forEach(function(i) {
      i();
    });
  };
}
var _l = "Invariant failed";
function qr(e) {
  this.message = e;
}
qr.prototype.toString = function() {
  return this.message;
};
function E(e, r) {
  if (!e)
    throw new qr(_l + ": " + (r || ""));
}
var zl = function(e) {
  Aa(r, e);
  function r() {
    for (var n, a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return n = e.call.apply(e, [this].concat(i)) || this, n.callbacks = null, n.unbind = Ue, n.onWindowError = function(l) {
      var s = n.getCallbacks();
      s.isDragging() && (s.tryAbort(), se(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      var d = l.error;
      d instanceof qr && (l.preventDefault(), Bt(d.message));
    }, n.getCallbacks = function() {
      if (!n.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return n.callbacks;
    }, n.setCallbacks = function(l) {
      n.callbacks = l;
    }, n;
  }
  var t = r.prototype;
  return t.componentDidMount = function() {
    this.unbind = Me(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }, t.componentDidCatch = function(a) {
    if (a instanceof qr) {
      Bt(a.message), this.setState({});
      return;
    }
    throw a;
  }, t.componentWillUnmount = function() {
    this.unbind();
  }, t.render = function() {
    return this.props.children(this.setCallbacks);
  }, r;
}(te.Component), ql = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, Kr = function(r) {
  return r + 1;
}, Kl = function(r) {
  return `
  You have lifted an item in position ` + Kr(r.source.index) + `
`;
}, Ja = function(r, t) {
  var n = r.droppableId === t.droppableId, a = Kr(r.index), i = Kr(t.index);
  return n ? `
      You have moved the item from position ` + a + `
      to position ` + i + `
    ` : `
    You have moved the item from position ` + a + `
    in list ` + r.droppableId + `
    to list ` + t.droppableId + `
    in position ` + i + `
  `;
}, Za = function(r, t, n) {
  var a = t.droppableId === n.droppableId;
  return a ? `
      The item ` + r + `
      has been combined with ` + n.draggableId : `
      The item ` + r + `
      in list ` + t.droppableId + `
      has been combined with ` + n.draggableId + `
      in list ` + n.droppableId + `
    `;
}, Xl = function(r) {
  var t = r.destination;
  if (t)
    return Ja(r.source, t);
  var n = r.combine;
  return n ? Za(r.draggableId, r.source, n) : "You are over an area that cannot be dropped on";
}, Qn = function(r) {
  return `
  The item has returned to its starting position
  of ` + Kr(r.index) + `
`;
}, Jl = function(r) {
  if (r.reason === "CANCEL")
    return `
      Movement cancelled.
      ` + Qn(r.source) + `
    `;
  var t = r.destination, n = r.combine;
  return t ? `
      You have dropped the item.
      ` + Ja(r.source, t) + `
    ` : n ? `
      You have dropped the item.
      ` + Za(r.draggableId, r.source, n) + `
    ` : `
    The item has been dropped while not over a drop area.
    ` + Qn(r.source) + `
  `;
}, Yr = {
  dragHandleUsageInstructions: ql,
  onDragStart: Kl,
  onDragUpdate: Xl,
  onDragEnd: Jl
}, ve = {
  x: 0,
  y: 0
}, me = function(r, t) {
  return {
    x: r.x + t.x,
    y: r.y + t.y
  };
}, Ie = function(r, t) {
  return {
    x: r.x - t.x,
    y: r.y - t.y
  };
}, $e = function(r, t) {
  return r.x === t.x && r.y === t.y;
}, pr = function(r) {
  return {
    x: r.x !== 0 ? -r.x : 0,
    y: r.y !== 0 ? -r.y : 0
  };
}, tr = function(r, t, n) {
  var a;
  return n === void 0 && (n = 0), a = {}, a[r] = t, a[r === "x" ? "y" : "x"] = n, a;
}, Rr = function(r, t) {
  return Math.sqrt(Math.pow(t.x - r.x, 2) + Math.pow(t.y - r.y, 2));
}, ea = function(r, t) {
  return Math.min.apply(Math, t.map(function(n) {
    return Rr(r, n);
  }));
}, Qa = function(r) {
  return function(t) {
    return {
      x: r(t.x),
      y: r(t.y)
    };
  };
}, Zl = function(e, r) {
  var t = Le({
    top: Math.max(r.top, e.top),
    right: Math.min(r.right, e.right),
    bottom: Math.min(r.bottom, e.bottom),
    left: Math.max(r.left, e.left)
  });
  return t.width <= 0 || t.height <= 0 ? null : t;
}, Nr = function(r, t) {
  return {
    top: r.top + t.y,
    left: r.left + t.x,
    bottom: r.bottom + t.y,
    right: r.right + t.x
  };
}, ra = function(r) {
  return [{
    x: r.left,
    y: r.top
  }, {
    x: r.right,
    y: r.top
  }, {
    x: r.left,
    y: r.bottom
  }, {
    x: r.right,
    y: r.bottom
  }];
}, Ql = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, es = function(r, t) {
  return t ? Nr(r, t.scroll.diff.displacement) : r;
}, rs = function(r, t, n) {
  if (n && n.increasedBy) {
    var a;
    return j({}, r, (a = {}, a[t.end] = r[t.end] + n.increasedBy[t.line], a));
  }
  return r;
}, ts = function(r, t) {
  return t && t.shouldClipSubject ? Zl(t.pageMarginBox, r) : Le(r);
}, cr = function(e) {
  var r = e.page, t = e.withPlaceholder, n = e.axis, a = e.frame, i = es(r.marginBox, a), o = rs(i, n, t), l = ts(o, a);
  return {
    page: r,
    withPlaceholder: t,
    active: l
  };
}, Xt = function(e, r) {
  e.frame || E(!1);
  var t = e.frame, n = Ie(r, t.scroll.initial), a = pr(n), i = j({}, t, {
    scroll: {
      initial: t.scroll.initial,
      current: r,
      diff: {
        value: n,
        displacement: a
      },
      max: t.scroll.max
    }
  }), o = cr({
    page: e.subject.page,
    withPlaceholder: e.subject.withPlaceholder,
    axis: e.axis,
    frame: i
  }), l = j({}, e, {
    frame: i,
    subject: o
  });
  return l;
};
function ns(e) {
  return Number.isInteger ? Number.isInteger(e) : typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
function Xr(e) {
  return Object.values ? Object.values(e) : Object.keys(e).map(function(r) {
    return e[r];
  });
}
function Jt(e, r) {
  if (e.findIndex)
    return e.findIndex(r);
  for (var t = 0; t < e.length; t++)
    if (r(e[t]))
      return t;
  return -1;
}
function He(e, r) {
  if (e.find)
    return e.find(r);
  var t = Jt(e, r);
  if (t !== -1)
    return e[t];
}
function ei(e) {
  return Array.prototype.slice.call(e);
}
var ri = pe(function(e) {
  return e.reduce(function(r, t) {
    return r[t.descriptor.id] = t, r;
  }, {});
}), ti = pe(function(e) {
  return e.reduce(function(r, t) {
    return r[t.descriptor.id] = t, r;
  }, {});
}), rt = pe(function(e) {
  return Xr(e);
}), as = pe(function(e) {
  return Xr(e);
}), nr = pe(function(e, r) {
  var t = as(r).filter(function(n) {
    return e === n.descriptor.droppableId;
  }).sort(function(n, a) {
    return n.descriptor.index - a.descriptor.index;
  });
  return t;
});
function Zt(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function tt(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var nt = pe(function(e, r) {
  return r.filter(function(t) {
    return t.descriptor.id !== e.descriptor.id;
  });
}), is = function(e) {
  var r = e.isMovingForward, t = e.draggable, n = e.destination, a = e.insideDestination, i = e.previousImpact;
  if (!n.isCombineEnabled)
    return null;
  var o = Zt(i);
  if (!o)
    return null;
  function l(m) {
    var h = {
      type: "COMBINE",
      combine: {
        draggableId: m,
        droppableId: n.descriptor.id
      }
    };
    return j({}, i, {
      at: h
    });
  }
  var s = i.displaced.all, d = s.length ? s[0] : null;
  if (r)
    return d ? l(d) : null;
  var f = nt(t, a);
  if (!d) {
    if (!f.length)
      return null;
    var u = f[f.length - 1];
    return l(u.descriptor.id);
  }
  var c = Jt(f, function(m) {
    return m.descriptor.id === d;
  });
  c === -1 && E(!1, "Could not find displaced item in set");
  var p = c - 1;
  if (p < 0)
    return null;
  var g = f[p];
  return l(g.descriptor.id);
}, vr = function(e, r) {
  return e.descriptor.droppableId === r.descriptor.id;
}, ni = {
  point: ve,
  value: 0
}, Ar = {
  invisible: {},
  visible: {},
  all: []
}, os = {
  displaced: Ar,
  displacedBy: ni,
  at: null
}, Be = function(e, r) {
  return function(t) {
    return e <= t && t <= r;
  };
}, ai = function(e) {
  var r = Be(e.top, e.bottom), t = Be(e.left, e.right);
  return function(n) {
    var a = r(n.top) && r(n.bottom) && t(n.left) && t(n.right);
    if (a)
      return !0;
    var i = r(n.top) || r(n.bottom), o = t(n.left) || t(n.right), l = i && o;
    if (l)
      return !0;
    var s = n.top < e.top && n.bottom > e.bottom, d = n.left < e.left && n.right > e.right, f = s && d;
    if (f)
      return !0;
    var u = s && o || d && i;
    return u;
  };
}, ls = function(e) {
  var r = Be(e.top, e.bottom), t = Be(e.left, e.right);
  return function(n) {
    var a = r(n.top) && r(n.bottom) && t(n.left) && t(n.right);
    return a;
  };
}, Qt = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, ii = {
  direction: "horizontal",
  line: "x",
  crossAxisLine: "y",
  start: "left",
  end: "right",
  size: "width",
  crossAxisStart: "top",
  crossAxisEnd: "bottom",
  crossAxisSize: "height"
}, ss = function(e) {
  return function(r) {
    var t = Be(r.top, r.bottom), n = Be(r.left, r.right);
    return function(a) {
      return e === Qt ? t(a.top) && t(a.bottom) : n(a.left) && n(a.right);
    };
  };
}, us = function(r, t) {
  var n = t.frame ? t.frame.scroll.diff.displacement : ve;
  return Nr(r, n);
}, cs = function(r, t, n) {
  return t.subject.active ? n(t.subject.active)(r) : !1;
}, ds = function(r, t, n) {
  return n(t)(r);
}, en = function(r) {
  var t = r.target, n = r.destination, a = r.viewport, i = r.withDroppableDisplacement, o = r.isVisibleThroughFrameFn, l = i ? us(t, n) : t;
  return cs(l, n, o) && ds(l, a, o);
}, fs = function(r) {
  return en(j({}, r, {
    isVisibleThroughFrameFn: ai
  }));
}, oi = function(r) {
  return en(j({}, r, {
    isVisibleThroughFrameFn: ls
  }));
}, ps = function(r) {
  return en(j({}, r, {
    isVisibleThroughFrameFn: ss(r.destination.axis)
  }));
}, vs = function(r, t, n) {
  if (typeof n == "boolean")
    return n;
  if (!t)
    return !0;
  var a = t.invisible, i = t.visible;
  if (a[r])
    return !1;
  var o = i[r];
  return o ? o.shouldAnimate : !0;
};
function gs(e, r) {
  var t = e.page.marginBox, n = {
    top: r.point.y,
    right: 0,
    bottom: 0,
    left: r.point.x
  };
  return Le(qt(t, n));
}
function Or(e) {
  var r = e.afterDragging, t = e.destination, n = e.displacedBy, a = e.viewport, i = e.forceShouldAnimate, o = e.last;
  return r.reduce(function(s, d) {
    var f = gs(d, n), u = d.descriptor.id;
    s.all.push(u);
    var c = fs({
      target: f,
      destination: t,
      viewport: a,
      withDroppableDisplacement: !0
    });
    if (!c)
      return s.invisible[d.descriptor.id] = !0, s;
    var p = vs(u, o, i), g = {
      draggableId: u,
      shouldAnimate: p
    };
    return s.visible[u] = g, s;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function ms(e, r) {
  if (!e.length)
    return 0;
  var t = e[e.length - 1].descriptor.index;
  return r.inHomeList ? t : t + 1;
}
function ta(e) {
  var r = e.insideDestination, t = e.inHomeList, n = e.displacedBy, a = e.destination, i = ms(r, {
    inHomeList: t
  });
  return {
    displaced: Ar,
    displacedBy: n,
    at: {
      type: "REORDER",
      destination: {
        droppableId: a.descriptor.id,
        index: i
      }
    }
  };
}
function Jr(e) {
  var r = e.draggable, t = e.insideDestination, n = e.destination, a = e.viewport, i = e.displacedBy, o = e.last, l = e.index, s = e.forceShouldAnimate, d = vr(r, n);
  if (l == null)
    return ta({
      insideDestination: t,
      inHomeList: d,
      displacedBy: i,
      destination: n
    });
  var f = He(t, function(m) {
    return m.descriptor.index === l;
  });
  if (!f)
    return ta({
      insideDestination: t,
      inHomeList: d,
      displacedBy: i,
      destination: n
    });
  var u = nt(r, t), c = t.indexOf(f), p = u.slice(c), g = Or({
    afterDragging: p,
    destination: n,
    displacedBy: i,
    last: o,
    viewport: a.frame,
    forceShouldAnimate: s
  });
  return {
    displaced: g,
    displacedBy: i,
    at: {
      type: "REORDER",
      destination: {
        droppableId: n.descriptor.id,
        index: l
      }
    }
  };
}
function Ye(e, r) {
  return Boolean(r.effected[e]);
}
var bs = function(e) {
  var r = e.isMovingForward, t = e.destination, n = e.draggables, a = e.combine, i = e.afterCritical;
  if (!t.isCombineEnabled)
    return null;
  var o = a.draggableId, l = n[o], s = l.descriptor.index, d = Ye(o, i);
  return d ? r ? s : s - 1 : r ? s + 1 : s;
}, hs = function(e) {
  var r = e.isMovingForward, t = e.isInHomeList, n = e.insideDestination, a = e.location;
  if (!n.length)
    return null;
  var i = a.index, o = r ? i + 1 : i - 1, l = n[0].descriptor.index, s = n[n.length - 1].descriptor.index, d = t ? s : s + 1;
  return o < l || o > d ? null : o;
}, ys = function(e) {
  var r = e.isMovingForward, t = e.isInHomeList, n = e.draggable, a = e.draggables, i = e.destination, o = e.insideDestination, l = e.previousImpact, s = e.viewport, d = e.afterCritical, f = l.at;
  if (f || E(!1, "Cannot move in direction without previous impact location"), f.type === "REORDER") {
    var u = hs({
      isMovingForward: r,
      isInHomeList: t,
      location: f.destination,
      insideDestination: o
    });
    return u == null ? null : Jr({
      draggable: n,
      insideDestination: o,
      destination: i,
      viewport: s,
      last: l.displaced,
      displacedBy: l.displacedBy,
      index: u
    });
  }
  var c = bs({
    isMovingForward: r,
    destination: i,
    displaced: l.displaced,
    draggables: a,
    combine: f.combine,
    afterCritical: d
  });
  return c == null ? null : Jr({
    draggable: n,
    insideDestination: o,
    destination: i,
    viewport: s,
    last: l.displaced,
    displacedBy: l.displacedBy,
    index: c
  });
}, xs = function(e) {
  var r = e.displaced, t = e.afterCritical, n = e.combineWith, a = e.displacedBy, i = Boolean(r.visible[n] || r.invisible[n]);
  return Ye(n, t) ? i ? ve : pr(a.point) : i ? a.point : ve;
}, ws = function(e) {
  var r = e.afterCritical, t = e.impact, n = e.draggables, a = tt(t);
  a || E(!1);
  var i = a.draggableId, o = n[i].page.borderBox.center, l = xs({
    displaced: t.displaced,
    afterCritical: r,
    combineWith: i,
    displacedBy: t.displacedBy
  });
  return me(o, l);
}, li = function(r, t) {
  return t.margin[r.start] + t.borderBox[r.size] / 2;
}, Cs = function(r, t) {
  return t.margin[r.end] + t.borderBox[r.size] / 2;
}, rn = function(r, t, n) {
  return t[r.crossAxisStart] + n.margin[r.crossAxisStart] + n.borderBox[r.crossAxisSize] / 2;
}, na = function(r) {
  var t = r.axis, n = r.moveRelativeTo, a = r.isMoving;
  return tr(t.line, n.marginBox[t.end] + li(t, a), rn(t, n.marginBox, a));
}, aa = function(r) {
  var t = r.axis, n = r.moveRelativeTo, a = r.isMoving;
  return tr(t.line, n.marginBox[t.start] - Cs(t, a), rn(t, n.marginBox, a));
}, Es = function(r) {
  var t = r.axis, n = r.moveInto, a = r.isMoving;
  return tr(t.line, n.contentBox[t.start] + li(t, a), rn(t, n.contentBox, a));
}, Ds = function(e) {
  var r = e.impact, t = e.draggable, n = e.draggables, a = e.droppable, i = e.afterCritical, o = nr(a.descriptor.id, n), l = t.page, s = a.axis;
  if (!o.length)
    return Es({
      axis: s,
      moveInto: a.page,
      isMoving: l
    });
  var d = r.displaced, f = r.displacedBy, u = d.all[0];
  if (u) {
    var c = n[u];
    if (Ye(u, i))
      return aa({
        axis: s,
        moveRelativeTo: c.page,
        isMoving: l
      });
    var p = _r(c.page, f.point);
    return aa({
      axis: s,
      moveRelativeTo: p,
      isMoving: l
    });
  }
  var g = o[o.length - 1];
  if (g.descriptor.id === t.descriptor.id)
    return l.borderBox.center;
  if (Ye(g.descriptor.id, i)) {
    var m = _r(g.page, pr(i.displacedBy.point));
    return na({
      axis: s,
      moveRelativeTo: m,
      isMoving: l
    });
  }
  return na({
    axis: s,
    moveRelativeTo: g.page,
    isMoving: l
  });
}, Nt = function(e, r) {
  var t = e.frame;
  return t ? me(r, t.scroll.diff.displacement) : r;
}, Ss = function(r) {
  var t = r.impact, n = r.draggable, a = r.droppable, i = r.draggables, o = r.afterCritical, l = n.page.borderBox.center, s = t.at;
  return !a || !s ? l : s.type === "REORDER" ? Ds({
    impact: t,
    draggable: n,
    draggables: i,
    droppable: a,
    afterCritical: o
  }) : ws({
    impact: t,
    draggables: i,
    afterCritical: o
  });
}, at = function(e) {
  var r = Ss(e), t = e.droppable, n = t ? Nt(t, r) : r;
  return n;
}, si = function(e, r) {
  var t = Ie(r, e.scroll.initial), n = pr(t), a = Le({
    top: r.y,
    bottom: r.y + e.frame.height,
    left: r.x,
    right: r.x + e.frame.width
  }), i = {
    frame: a,
    scroll: {
      initial: e.scroll.initial,
      max: e.scroll.max,
      current: r,
      diff: {
        value: t,
        displacement: n
      }
    }
  };
  return i;
};
function ia(e, r) {
  return e.map(function(t) {
    return r[t];
  });
}
function Is(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t].visible[e];
    if (n)
      return n;
  }
  return null;
}
var Ps = function(e) {
  var r = e.impact, t = e.viewport, n = e.destination, a = e.draggables, i = e.maxScrollChange, o = si(t, me(t.scroll.current, i)), l = n.frame ? Xt(n, me(n.frame.scroll.current, i)) : n, s = r.displaced, d = Or({
    afterDragging: ia(s.all, a),
    destination: n,
    displacedBy: r.displacedBy,
    viewport: o.frame,
    last: s,
    forceShouldAnimate: !1
  }), f = Or({
    afterDragging: ia(s.all, a),
    destination: l,
    displacedBy: r.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), u = {}, c = {}, p = [s, d, f];
  s.all.forEach(function(m) {
    var h = Is(m, p);
    if (h) {
      c[m] = h;
      return;
    }
    u[m] = !0;
  });
  var g = j({}, r, {
    displaced: {
      all: s.all,
      invisible: u,
      visible: c
    }
  });
  return g;
}, Ts = function(e, r) {
  return me(e.scroll.diff.displacement, r);
}, tn = function(e) {
  var r = e.pageBorderBoxCenter, t = e.draggable, n = e.viewport, a = Ts(n, r), i = Ie(a, t.page.borderBox.center);
  return me(t.client.borderBox.center, i);
}, ui = function(e) {
  var r = e.draggable, t = e.destination, n = e.newPageBorderBoxCenter, a = e.viewport, i = e.withDroppableDisplacement, o = e.onlyOnMainAxis, l = o === void 0 ? !1 : o, s = Ie(n, r.page.borderBox.center), d = Nr(r.page.borderBox, s), f = {
    target: d,
    destination: t,
    withDroppableDisplacement: i,
    viewport: a
  };
  return l ? ps(f) : oi(f);
}, Rs = function(e) {
  var r = e.isMovingForward, t = e.draggable, n = e.destination, a = e.draggables, i = e.previousImpact, o = e.viewport, l = e.previousPageBorderBoxCenter, s = e.previousClientSelection, d = e.afterCritical;
  if (!n.isEnabled)
    return null;
  var f = nr(n.descriptor.id, a), u = vr(t, n), c = is({
    isMovingForward: r,
    draggable: t,
    destination: n,
    insideDestination: f,
    previousImpact: i
  }) || ys({
    isMovingForward: r,
    isInHomeList: u,
    draggable: t,
    draggables: a,
    destination: n,
    insideDestination: f,
    previousImpact: i,
    viewport: o,
    afterCritical: d
  });
  if (!c)
    return null;
  var p = at({
    impact: c,
    draggable: t,
    droppable: n,
    draggables: a,
    afterCritical: d
  }), g = ui({
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: p,
    viewport: o.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  });
  if (g) {
    var m = tn({
      pageBorderBoxCenter: p,
      draggable: t,
      viewport: o
    });
    return {
      clientSelection: m,
      impact: c,
      scrollJumpRequest: null
    };
  }
  var h = Ie(p, l), b = Ps({
    impact: c,
    viewport: o,
    destination: n,
    draggables: a,
    maxScrollChange: h
  });
  return {
    clientSelection: s,
    impact: b,
    scrollJumpRequest: h
  };
}, Ee = function(r) {
  var t = r.subject.active;
  return t || E(!1, "Cannot get clipped area from droppable"), t;
}, As = function(e) {
  var r = e.isMovingForward, t = e.pageBorderBoxCenter, n = e.source, a = e.droppables, i = e.viewport, o = n.subject.active;
  if (!o)
    return null;
  var l = n.axis, s = Be(o[l.start], o[l.end]), d = rt(a).filter(function(u) {
    return u !== n;
  }).filter(function(u) {
    return u.isEnabled;
  }).filter(function(u) {
    return Boolean(u.subject.active);
  }).filter(function(u) {
    return ai(i.frame)(Ee(u));
  }).filter(function(u) {
    var c = Ee(u);
    return r ? o[l.crossAxisEnd] < c[l.crossAxisEnd] : c[l.crossAxisStart] < o[l.crossAxisStart];
  }).filter(function(u) {
    var c = Ee(u), p = Be(c[l.start], c[l.end]);
    return s(c[l.start]) || s(c[l.end]) || p(o[l.start]) || p(o[l.end]);
  }).sort(function(u, c) {
    var p = Ee(u)[l.crossAxisStart], g = Ee(c)[l.crossAxisStart];
    return r ? p - g : g - p;
  }).filter(function(u, c, p) {
    return Ee(u)[l.crossAxisStart] === Ee(p[0])[l.crossAxisStart];
  });
  if (!d.length)
    return null;
  if (d.length === 1)
    return d[0];
  var f = d.filter(function(u) {
    var c = Be(Ee(u)[l.start], Ee(u)[l.end]);
    return c(t[l.line]);
  });
  return f.length === 1 ? f[0] : f.length > 1 ? f.sort(function(u, c) {
    return Ee(u)[l.start] - Ee(c)[l.start];
  })[0] : d.sort(function(u, c) {
    var p = ea(t, ra(Ee(u))), g = ea(t, ra(Ee(c)));
    return p !== g ? p - g : Ee(u)[l.start] - Ee(c)[l.start];
  })[0];
}, oa = function(r, t) {
  var n = r.page.borderBox.center;
  return Ye(r.descriptor.id, t) ? Ie(n, t.displacedBy.point) : n;
}, Os = function(r, t) {
  var n = r.page.borderBox;
  return Ye(r.descriptor.id, t) ? Nr(n, pr(t.displacedBy.point)) : n;
}, Ms = function(e) {
  var r = e.pageBorderBoxCenter, t = e.viewport, n = e.destination, a = e.insideDestination, i = e.afterCritical, o = a.filter(function(l) {
    return oi({
      target: Os(l, i),
      destination: n,
      viewport: t.frame,
      withDroppableDisplacement: !0
    });
  }).sort(function(l, s) {
    var d = Rr(r, Nt(n, oa(l, i))), f = Rr(r, Nt(n, oa(s, i)));
    return d < f ? -1 : f < d ? 1 : l.descriptor.index - s.descriptor.index;
  });
  return o[0] || null;
}, Lr = pe(function(r, t) {
  var n = t[r.line];
  return {
    value: n,
    point: tr(r.line, n)
  };
}), Bs = function(r, t, n) {
  var a = r.axis;
  if (r.descriptor.mode === "virtual")
    return tr(a.line, t[a.line]);
  var i = r.subject.page.contentBox[a.size], o = nr(r.descriptor.id, n), l = o.reduce(function(f, u) {
    return f + u.client.marginBox[a.size];
  }, 0), s = l + t[a.line], d = s - i;
  return d <= 0 ? null : tr(a.line, d);
}, ci = function(r, t) {
  return j({}, r, {
    scroll: j({}, r.scroll, {
      max: t
    })
  });
}, di = function(r, t, n) {
  var a = r.frame;
  vr(t, r) && E(!1, "Should not add placeholder space to home list"), r.subject.withPlaceholder && E(!1, "Cannot add placeholder size to a subject when it already has one");
  var i = Lr(r.axis, t.displaceBy).point, o = Bs(r, i, n), l = {
    placeholderSize: i,
    increasedBy: o,
    oldFrameMaxScroll: r.frame ? r.frame.scroll.max : null
  };
  if (!a) {
    var s = cr({
      page: r.subject.page,
      withPlaceholder: l,
      axis: r.axis,
      frame: r.frame
    });
    return j({}, r, {
      subject: s
    });
  }
  var d = o ? me(a.scroll.max, o) : a.scroll.max, f = ci(a, d), u = cr({
    page: r.subject.page,
    withPlaceholder: l,
    axis: r.axis,
    frame: f
  });
  return j({}, r, {
    subject: u,
    frame: f
  });
}, Ns = function(r) {
  var t = r.subject.withPlaceholder;
  t || E(!1, "Cannot remove placeholder form subject when there was none");
  var n = r.frame;
  if (!n) {
    var a = cr({
      page: r.subject.page,
      axis: r.axis,
      frame: null,
      withPlaceholder: null
    });
    return j({}, r, {
      subject: a
    });
  }
  var i = t.oldFrameMaxScroll;
  i || E(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder");
  var o = ci(n, i), l = cr({
    page: r.subject.page,
    axis: r.axis,
    frame: o,
    withPlaceholder: null
  });
  return j({}, r, {
    subject: l,
    frame: o
  });
}, Ls = function(e) {
  var r = e.previousPageBorderBoxCenter, t = e.moveRelativeTo, n = e.insideDestination, a = e.draggable, i = e.draggables, o = e.destination, l = e.viewport, s = e.afterCritical;
  if (!t) {
    if (n.length)
      return null;
    var d = {
      displaced: Ar,
      displacedBy: ni,
      at: {
        type: "REORDER",
        destination: {
          droppableId: o.descriptor.id,
          index: 0
        }
      }
    }, f = at({
      impact: d,
      draggable: a,
      droppable: o,
      draggables: i,
      afterCritical: s
    }), u = vr(a, o) ? o : di(o, a, i), c = ui({
      draggable: a,
      destination: u,
      newPageBorderBoxCenter: f,
      viewport: l.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    });
    return c ? d : null;
  }
  var p = Boolean(r[o.axis.line] <= t.page.borderBox.center[o.axis.line]), g = function() {
    var h = t.descriptor.index;
    return t.descriptor.id === a.descriptor.id || p ? h : h + 1;
  }(), m = Lr(o.axis, a.displaceBy);
  return Jr({
    draggable: a,
    insideDestination: n,
    destination: o,
    viewport: l,
    displacedBy: m,
    last: Ar,
    index: g
  });
}, Fs = function(e) {
  var r = e.isMovingForward, t = e.previousPageBorderBoxCenter, n = e.draggable, a = e.isOver, i = e.draggables, o = e.droppables, l = e.viewport, s = e.afterCritical, d = As({
    isMovingForward: r,
    pageBorderBoxCenter: t,
    source: a,
    droppables: o,
    viewport: l
  });
  if (!d)
    return null;
  var f = nr(d.descriptor.id, i), u = Ms({
    pageBorderBoxCenter: t,
    viewport: l,
    destination: d,
    insideDestination: f,
    afterCritical: s
  }), c = Ls({
    previousPageBorderBoxCenter: t,
    destination: d,
    draggable: n,
    draggables: i,
    moveRelativeTo: u,
    insideDestination: f,
    viewport: l,
    afterCritical: s
  });
  if (!c)
    return null;
  var p = at({
    impact: c,
    draggable: n,
    droppable: d,
    draggables: i,
    afterCritical: s
  }), g = tn({
    pageBorderBoxCenter: p,
    draggable: n,
    viewport: l
  });
  return {
    clientSelection: g,
    impact: c,
    scrollJumpRequest: null
  };
}, Pe = function(e) {
  var r = e.at;
  return r ? r.type === "REORDER" ? r.destination.droppableId : r.combine.droppableId : null;
}, Gs = function(r, t) {
  var n = Pe(r);
  return n ? t[n] : null;
}, ks = function(e) {
  var r = e.state, t = e.type, n = Gs(r.impact, r.dimensions.droppables), a = Boolean(n), i = r.dimensions.droppables[r.critical.droppable.id], o = n || i, l = o.axis.direction, s = l === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || l === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (s && !a)
    return null;
  var d = t === "MOVE_DOWN" || t === "MOVE_RIGHT", f = r.dimensions.draggables[r.critical.draggable.id], u = r.current.page.borderBoxCenter, c = r.dimensions, p = c.draggables, g = c.droppables;
  return s ? Rs({
    isMovingForward: d,
    previousPageBorderBoxCenter: u,
    draggable: f,
    destination: o,
    draggables: p,
    viewport: r.viewport,
    previousClientSelection: r.current.client.selection,
    previousImpact: r.impact,
    afterCritical: r.afterCritical
  }) : Fs({
    isMovingForward: d,
    previousPageBorderBoxCenter: u,
    draggable: f,
    isOver: o,
    draggables: p,
    droppables: g,
    viewport: r.viewport,
    afterCritical: r.afterCritical
  });
};
function er(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function fi(e) {
  var r = Be(e.top, e.bottom), t = Be(e.left, e.right);
  return function(a) {
    return r(a.y) && t(a.x);
  };
}
function Ws(e, r) {
  return e.left < r.right && e.right > r.left && e.top < r.bottom && e.bottom > r.top;
}
function js(e) {
  var r = e.pageBorderBox, t = e.draggable, n = e.candidates, a = t.page.borderBox.center, i = n.map(function(o) {
    var l = o.axis, s = tr(o.axis.line, r.center[l.line], o.page.borderBox.center[l.crossAxisLine]);
    return {
      id: o.descriptor.id,
      distance: Rr(a, s)
    };
  }).sort(function(o, l) {
    return l.distance - o.distance;
  });
  return i[0] ? i[0].id : null;
}
function Us(e) {
  var r = e.pageBorderBox, t = e.draggable, n = e.droppables, a = rt(n).filter(function(i) {
    if (!i.isEnabled)
      return !1;
    var o = i.subject.active;
    if (!o || !Ws(r, o))
      return !1;
    if (fi(o)(r.center))
      return !0;
    var l = i.axis, s = o.center[l.crossAxisLine], d = r[l.crossAxisStart], f = r[l.crossAxisEnd], u = Be(o[l.crossAxisStart], o[l.crossAxisEnd]), c = u(d), p = u(f);
    return !c && !p ? !0 : c ? d < s : f > s;
  });
  return a.length ? a.length === 1 ? a[0].descriptor.id : js({
    pageBorderBox: r,
    draggable: t,
    candidates: a
  }) : null;
}
var pi = function(r, t) {
  return Le(Nr(r, t));
}, $s = function(e, r) {
  var t = e.frame;
  return t ? pi(r, t.scroll.diff.value) : r;
};
function vi(e) {
  var r = e.displaced, t = e.id;
  return Boolean(r.visible[t] || r.invisible[t]);
}
function Vs(e) {
  var r = e.draggable, t = e.closest, n = e.inHomeList;
  return t ? n && t.descriptor.index > r.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var Ys = function(e) {
  var r = e.pageBorderBoxWithDroppableScroll, t = e.draggable, n = e.destination, a = e.insideDestination, i = e.last, o = e.viewport, l = e.afterCritical, s = n.axis, d = Lr(n.axis, t.displaceBy), f = d.value, u = r[s.start], c = r[s.end], p = nt(t, a), g = He(p, function(h) {
    var b = h.descriptor.id, x = h.page.borderBox.center[s.line], I = Ye(b, l), y = vi({
      displaced: i,
      id: b
    });
    return I ? y ? c <= x : u < x - f : y ? c <= x + f : u < x;
  }), m = Vs({
    draggable: t,
    closest: g,
    inHomeList: vr(t, n)
  });
  return Jr({
    draggable: t,
    insideDestination: a,
    destination: n,
    viewport: o,
    last: i,
    displacedBy: d,
    index: m
  });
}, Hs = 4, _s = function(e) {
  var r = e.draggable, t = e.pageBorderBoxWithDroppableScroll, n = e.previousImpact, a = e.destination, i = e.insideDestination, o = e.afterCritical;
  if (!a.isCombineEnabled)
    return null;
  var l = a.axis, s = Lr(a.axis, r.displaceBy), d = s.value, f = t[l.start], u = t[l.end], c = nt(r, i), p = He(c, function(m) {
    var h = m.descriptor.id, b = m.page.borderBox, x = b[l.size], I = x / Hs, y = Ye(h, o), N = vi({
      displaced: n.displaced,
      id: h
    });
    return y ? N ? u > b[l.start] + I && u < b[l.end] - I : f > b[l.start] - d + I && f < b[l.end] - d - I : N ? u > b[l.start] + d + I && u < b[l.end] + d - I : f > b[l.start] + I && f < b[l.end] - I;
  });
  if (!p)
    return null;
  var g = {
    displacedBy: s,
    displaced: n.displaced,
    at: {
      type: "COMBINE",
      combine: {
        draggableId: p.descriptor.id,
        droppableId: a.descriptor.id
      }
    }
  };
  return g;
}, gi = function(e) {
  var r = e.pageOffset, t = e.draggable, n = e.draggables, a = e.droppables, i = e.previousImpact, o = e.viewport, l = e.afterCritical, s = pi(t.page.borderBox, r), d = Us({
    pageBorderBox: s,
    draggable: t,
    droppables: a
  });
  if (!d)
    return os;
  var f = a[d], u = nr(f.descriptor.id, n), c = $s(f, s);
  return _s({
    pageBorderBoxWithDroppableScroll: c,
    draggable: t,
    previousImpact: i,
    destination: f,
    insideDestination: u,
    afterCritical: l
  }) || Ys({
    pageBorderBoxWithDroppableScroll: c,
    draggable: t,
    destination: f,
    insideDestination: u,
    last: i.displaced,
    viewport: o,
    afterCritical: l
  });
}, nn = function(e, r) {
  var t;
  return j({}, e, (t = {}, t[r.descriptor.id] = r, t));
}, zs = function(r) {
  var t = r.previousImpact, n = r.impact, a = r.droppables, i = Pe(t), o = Pe(n);
  if (!i || i === o)
    return a;
  var l = a[i];
  if (!l.subject.withPlaceholder)
    return a;
  var s = Ns(l);
  return nn(a, s);
}, qs = function(e) {
  var r = e.draggable, t = e.draggables, n = e.droppables, a = e.previousImpact, i = e.impact, o = zs({
    previousImpact: a,
    impact: i,
    droppables: n
  }), l = Pe(i);
  if (!l)
    return o;
  var s = n[l];
  if (vr(r, s) || s.subject.withPlaceholder)
    return o;
  var d = di(s, r, t);
  return nn(o, d);
}, Dr = function(e) {
  var r = e.state, t = e.clientSelection, n = e.dimensions, a = e.viewport, i = e.impact, o = e.scrollJumpRequest, l = a || r.viewport, s = n || r.dimensions, d = t || r.current.client.selection, f = Ie(d, r.initial.client.selection), u = {
    offset: f,
    selection: d,
    borderBoxCenter: me(r.initial.client.borderBoxCenter, f)
  }, c = {
    selection: me(u.selection, l.scroll.current),
    borderBoxCenter: me(u.borderBoxCenter, l.scroll.current),
    offset: me(u.offset, l.scroll.diff.value)
  }, p = {
    client: u,
    page: c
  };
  if (r.phase === "COLLECTING")
    return j({
      phase: "COLLECTING"
    }, r, {
      dimensions: s,
      viewport: l,
      current: p
    });
  var g = s.draggables[r.critical.draggable.id], m = i || gi({
    pageOffset: c.offset,
    draggable: g,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: r.impact,
    viewport: l,
    afterCritical: r.afterCritical
  }), h = qs({
    draggable: g,
    impact: m,
    previousImpact: r.impact,
    draggables: s.draggables,
    droppables: s.droppables
  }), b = j({}, r, {
    current: p,
    dimensions: {
      draggables: s.draggables,
      droppables: h
    },
    impact: m,
    viewport: l,
    scrollJumpRequest: o || null,
    forceShouldAnimate: o ? !1 : null
  });
  return b;
};
function Ks(e, r) {
  return e.map(function(t) {
    return r[t];
  });
}
var mi = function(e) {
  var r = e.impact, t = e.viewport, n = e.draggables, a = e.destination, i = e.forceShouldAnimate, o = r.displaced, l = Ks(o.all, n), s = Or({
    afterDragging: l,
    destination: a,
    displacedBy: r.displacedBy,
    viewport: t.frame,
    forceShouldAnimate: i,
    last: o
  });
  return j({}, r, {
    displaced: s
  });
}, bi = function(e) {
  var r = e.impact, t = e.draggable, n = e.droppable, a = e.draggables, i = e.viewport, o = e.afterCritical, l = at({
    impact: r,
    draggable: t,
    draggables: a,
    droppable: n,
    afterCritical: o
  });
  return tn({
    pageBorderBoxCenter: l,
    draggable: t,
    viewport: i
  });
}, hi = function(e) {
  var r = e.state, t = e.dimensions, n = e.viewport;
  r.movementMode !== "SNAP" && E(!1);
  var a = r.impact, i = n || r.viewport, o = t || r.dimensions, l = o.draggables, s = o.droppables, d = l[r.critical.draggable.id], f = Pe(a);
  f || E(!1, "Must be over a destination in SNAP movement mode");
  var u = s[f], c = mi({
    impact: a,
    viewport: i,
    destination: u,
    draggables: l
  }), p = bi({
    impact: c,
    draggable: d,
    droppable: u,
    draggables: l,
    viewport: i,
    afterCritical: r.afterCritical
  });
  return Dr({
    impact: c,
    clientSelection: p,
    state: r,
    dimensions: o,
    viewport: i
  });
}, Xs = function(e) {
  return {
    index: e.index,
    droppableId: e.droppableId
  };
}, yi = function(e) {
  var r = e.draggable, t = e.home, n = e.draggables, a = e.viewport, i = Lr(t.axis, r.displaceBy), o = nr(t.descriptor.id, n), l = o.indexOf(r);
  l === -1 && E(!1, "Expected draggable to be inside home list");
  var s = o.slice(l + 1), d = s.reduce(function(p, g) {
    return p[g.descriptor.id] = !0, p;
  }, {}), f = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: i,
    effected: d
  }, u = Or({
    afterDragging: s,
    destination: t,
    displacedBy: i,
    last: null,
    viewport: a.frame,
    forceShouldAnimate: !1
  }), c = {
    displaced: u,
    displacedBy: i,
    at: {
      type: "REORDER",
      destination: Xs(r.descriptor)
    }
  };
  return {
    impact: c,
    afterCritical: f
  };
}, Js = function(e, r) {
  return {
    draggables: e.draggables,
    droppables: nn(e.droppables, r)
  };
}, Zs = function(e) {
  var r = e.draggable, t = e.offset, n = e.initialWindowScroll, a = _r(r.client, t), i = zr(a, n), o = j({}, r, {
    placeholder: j({}, r.placeholder, {
      client: a
    }),
    client: a,
    page: i
  });
  return o;
}, Qs = function(e) {
  var r = e.frame;
  return r || E(!1, "Expected Droppable to have a frame"), r;
}, eu = function(e) {
  var r = e.additions, t = e.updatedDroppables, n = e.viewport, a = n.scroll.diff.value;
  return r.map(function(i) {
    var o = i.descriptor.droppableId, l = t[o], s = Qs(l), d = s.scroll.diff.value, f = me(a, d), u = Zs({
      draggable: i,
      offset: f,
      initialWindowScroll: n.scroll.initial
    });
    return u;
  });
}, ru = function(e) {
  var r = e.state, t = e.published, n = t.modified.map(function(I) {
    var y = r.dimensions.droppables[I.droppableId], N = Xt(y, I.scroll);
    return N;
  }), a = j({}, r.dimensions.droppables, {}, ri(n)), i = ti(eu({
    additions: t.additions,
    updatedDroppables: a,
    viewport: r.viewport
  })), o = j({}, r.dimensions.draggables, {}, i);
  t.removals.forEach(function(I) {
    delete o[I];
  });
  var l = {
    droppables: a,
    draggables: o
  }, s = Pe(r.impact), d = s ? l.droppables[s] : null, f = l.draggables[r.critical.draggable.id], u = l.droppables[r.critical.droppable.id], c = yi({
    draggable: f,
    home: u,
    draggables: o,
    viewport: r.viewport
  }), p = c.impact, g = c.afterCritical, m = d && d.isCombineEnabled ? r.impact : p, h = gi({
    pageOffset: r.current.page.offset,
    draggable: l.draggables[r.critical.draggable.id],
    draggables: l.draggables,
    droppables: l.droppables,
    previousImpact: m,
    viewport: r.viewport,
    afterCritical: g
  }), b = j({
    phase: "DRAGGING"
  }, r, {
    phase: "DRAGGING",
    impact: h,
    onLiftImpact: p,
    dimensions: l,
    afterCritical: g,
    forceShouldAnimate: !1
  });
  if (r.phase === "COLLECTING")
    return b;
  var x = j({
    phase: "DROP_PENDING"
  }, b, {
    phase: "DROP_PENDING",
    reason: r.reason,
    isWaiting: !1
  });
  return x;
}, Lt = function(r) {
  return r.movementMode === "SNAP";
}, ht = function(r, t, n) {
  var a = Js(r.dimensions, t);
  return !Lt(r) || n ? Dr({
    state: r,
    dimensions: a
  }) : hi({
    state: r,
    dimensions: a
  });
};
function yt(e) {
  return e.isDragging && e.movementMode === "SNAP" ? j({
    phase: "DRAGGING"
  }, e, {
    scrollJumpRequest: null
  }) : e;
}
var la = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
}, tu = function(e, r) {
  if (e === void 0 && (e = la), r.type === "FLUSH")
    return j({}, la, {
      shouldFlush: !0
    });
  if (r.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && E(!1, "INITIAL_PUBLISH must come after a IDLE phase");
    var t = r.payload, n = t.critical, a = t.clientSelection, i = t.viewport, o = t.dimensions, l = t.movementMode, s = o.draggables[n.draggable.id], d = o.droppables[n.droppable.id], f = {
      selection: a,
      borderBoxCenter: s.client.borderBox.center,
      offset: ve
    }, u = {
      client: f,
      page: {
        selection: me(f.selection, i.scroll.initial),
        borderBoxCenter: me(f.selection, i.scroll.initial),
        offset: me(f.selection, i.scroll.diff.value)
      }
    }, c = rt(o.droppables).every(function(L) {
      return !L.isFixedOnPage;
    }), p = yi({
      draggable: s,
      home: d,
      draggables: o.draggables,
      viewport: i
    }), g = p.impact, m = p.afterCritical, h = {
      phase: "DRAGGING",
      isDragging: !0,
      critical: n,
      movementMode: l,
      dimensions: o,
      initial: u,
      current: u,
      isWindowScrollAllowed: c,
      impact: g,
      afterCritical: m,
      onLiftImpact: g,
      viewport: i,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
    return h;
  }
  if (r.type === "COLLECTION_STARTING") {
    if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING")
      return e;
    e.phase !== "DRAGGING" && E(!1, "Collection cannot start from phase " + e.phase);
    var b = j({
      phase: "COLLECTING"
    }, e, {
      phase: "COLLECTING"
    });
    return b;
  }
  if (r.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || E(!1, "Unexpected " + r.type + " received in phase " + e.phase), ru({
      state: e,
      published: r.payload
    });
  if (r.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    er(e) || E(!1, r.type + " not permitted in phase " + e.phase);
    var x = r.payload.client;
    return $e(x, e.current.client.selection) ? e : Dr({
      state: e,
      clientSelection: x,
      impact: Lt(e) ? e.impact : null
    });
  }
  if (r.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return yt(e);
    er(e) || E(!1, r.type + " not permitted in phase " + e.phase);
    var I = r.payload, y = I.id, N = I.newScroll, M = e.dimensions.droppables[y];
    if (!M)
      return e;
    var R = Xt(M, N);
    return ht(e, R, !1);
  }
  if (r.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    er(e) || E(!1, "Attempting to move in an unsupported phase " + e.phase);
    var H = r.payload, O = H.id, _ = H.isEnabled, K = e.dimensions.droppables[O];
    K || E(!1, "Cannot find Droppable[id: " + O + "] to toggle its enabled state"), K.isEnabled === _ && E(!1, "Trying to set droppable isEnabled to " + String(_) + `
      but it is already ` + String(K.isEnabled));
    var X = j({}, K, {
      isEnabled: _
    });
    return ht(e, X, !0);
  }
  if (r.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    er(e) || E(!1, "Attempting to move in an unsupported phase " + e.phase);
    var C = r.payload, S = C.id, B = C.isCombineEnabled, F = e.dimensions.droppables[S];
    F || E(!1, "Cannot find Droppable[id: " + S + "] to toggle its isCombineEnabled state"), F.isCombineEnabled === B && E(!1, "Trying to set droppable isCombineEnabled to " + String(B) + `
      but it is already ` + String(F.isCombineEnabled));
    var T = j({}, F, {
      isCombineEnabled: B
    });
    return ht(e, T, !0);
  }
  if (r.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    er(e) || E(!1, "Cannot move by window in phase " + e.phase), e.isWindowScrollAllowed || E(!1, "Window scrolling is currently not supported for fixed lists");
    var k = r.payload.newScroll;
    if ($e(e.viewport.scroll.current, k))
      return yt(e);
    var A = si(e.viewport, k);
    return Lt(e) ? hi({
      state: e,
      viewport: A
    }) : Dr({
      state: e,
      viewport: A
    });
  }
  if (r.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!er(e))
      return e;
    var W = r.payload.maxScroll;
    if ($e(W, e.viewport.scroll.max))
      return e;
    var $ = j({}, e.viewport, {
      scroll: j({}, e.viewport.scroll, {
        max: W
      })
    });
    return j({
      phase: "DRAGGING"
    }, e, {
      viewport: $
    });
  }
  if (r.type === "MOVE_UP" || r.type === "MOVE_DOWN" || r.type === "MOVE_LEFT" || r.type === "MOVE_RIGHT") {
    if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING")
      return e;
    e.phase !== "DRAGGING" && E(!1, r.type + " received while not in DRAGGING phase");
    var Y = ks({
      state: e,
      type: r.type
    });
    return Y ? Dr({
      state: e,
      impact: Y.impact,
      clientSelection: Y.clientSelection,
      scrollJumpRequest: Y.scrollJumpRequest
    }) : e;
  }
  if (r.type === "DROP_PENDING") {
    var U = r.payload.reason;
    e.phase !== "COLLECTING" && E(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase");
    var Q = j({
      phase: "DROP_PENDING"
    }, e, {
      phase: "DROP_PENDING",
      isWaiting: !0,
      reason: U
    });
    return Q;
  }
  if (r.type === "DROP_ANIMATE") {
    var ae = r.payload, ie = ae.completed, ye = ae.dropDuration, xe = ae.newHomeClientOffset;
    e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || E(!1, "Cannot animate drop from phase " + e.phase);
    var be = {
      phase: "DROP_ANIMATING",
      completed: ie,
      dropDuration: ye,
      newHomeClientOffset: xe,
      dimensions: e.dimensions
    };
    return be;
  }
  if (r.type === "DROP_COMPLETE") {
    var we = r.payload.completed;
    return {
      phase: "IDLE",
      completed: we,
      shouldFlush: !1
    };
  }
  return e;
}, nu = function(r) {
  return {
    type: "BEFORE_INITIAL_CAPTURE",
    payload: r
  };
}, au = function(r) {
  return {
    type: "LIFT",
    payload: r
  };
}, iu = function(r) {
  return {
    type: "INITIAL_PUBLISH",
    payload: r
  };
}, ou = function(r) {
  return {
    type: "PUBLISH_WHILE_DRAGGING",
    payload: r
  };
}, lu = function() {
  return {
    type: "COLLECTION_STARTING",
    payload: null
  };
}, su = function(r) {
  return {
    type: "UPDATE_DROPPABLE_SCROLL",
    payload: r
  };
}, uu = function(r) {
  return {
    type: "UPDATE_DROPPABLE_IS_ENABLED",
    payload: r
  };
}, cu = function(r) {
  return {
    type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
    payload: r
  };
}, xi = function(r) {
  return {
    type: "MOVE",
    payload: r
  };
}, du = function(r) {
  return {
    type: "MOVE_BY_WINDOW_SCROLL",
    payload: r
  };
}, fu = function(r) {
  return {
    type: "UPDATE_VIEWPORT_MAX_SCROLL",
    payload: r
  };
}, pu = function() {
  return {
    type: "MOVE_UP",
    payload: null
  };
}, vu = function() {
  return {
    type: "MOVE_DOWN",
    payload: null
  };
}, gu = function() {
  return {
    type: "MOVE_RIGHT",
    payload: null
  };
}, mu = function() {
  return {
    type: "MOVE_LEFT",
    payload: null
  };
}, an = function() {
  return {
    type: "FLUSH",
    payload: null
  };
}, bu = function(r) {
  return {
    type: "DROP_ANIMATE",
    payload: r
  };
}, on = function(r) {
  return {
    type: "DROP_COMPLETE",
    payload: r
  };
}, wi = function(r) {
  return {
    type: "DROP",
    payload: r
  };
}, hu = function(r) {
  return {
    type: "DROP_PENDING",
    payload: r
  };
}, Ci = function() {
  return {
    type: "DROP_ANIMATION_FINISHED",
    payload: null
  };
};
function yu(e) {
  if (!(e.length <= 1)) {
    for (var r = e.map(function(l) {
      return l.descriptor.index;
    }), t = {}, n = 1; n < r.length; n++) {
      var a = r[n], i = r[n - 1];
      a !== i + 1 && (t[a] = !0);
    }
    if (!!Object.keys(t).length) {
      var o = r.map(function(l) {
        var s = Boolean(t[l]);
        return s ? "[🔥" + l + "]" : "" + l;
      }).join(", ");
      se(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ` + o + `
  `);
    }
  }
}
function xu(e, r) {
  {
    var t = nr(e.droppable.id, r.draggables);
    yu(t);
  }
}
var wu = function(e) {
  return function(r) {
    var t = r.getState, n = r.dispatch;
    return function(a) {
      return function(i) {
        if (i.type !== "LIFT") {
          a(i);
          return;
        }
        var o = i.payload, l = o.id, s = o.clientSelection, d = o.movementMode, f = t();
        f.phase === "DROP_ANIMATING" && n(on({
          completed: f.completed
        })), t().phase !== "IDLE" && E(!1, "Unexpected phase to start a drag"), n(an()), n(nu({
          draggableId: l,
          movementMode: d
        }));
        var u = {
          shouldPublishImmediately: d === "SNAP"
        }, c = {
          draggableId: l,
          scrollOptions: u
        }, p = e.startPublishing(c), g = p.critical, m = p.dimensions, h = p.viewport;
        xu(g, m), n(iu({
          critical: g,
          dimensions: m,
          clientSelection: s,
          movementMode: d,
          viewport: h
        }));
      };
    };
  };
}, Cu = function(e) {
  return function() {
    return function(r) {
      return function(t) {
        t.type === "INITIAL_PUBLISH" && e.dragging(), t.type === "DROP_ANIMATE" && e.dropping(t.payload.completed.result.reason), (t.type === "FLUSH" || t.type === "DROP_COMPLETE") && e.resting(), r(t);
      };
    };
  };
}, ln = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Mr = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, sn = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Je = sn.outOfTheWay + "s " + ln.outOfTheWay, Sr = {
  fluid: "opacity " + Je,
  snap: "transform " + Je + ", opacity " + Je,
  drop: function(r) {
    var t = r + "s " + ln.drop;
    return "transform " + t + ", opacity " + t;
  },
  outOfTheWay: "transform " + Je,
  placeholder: "height " + Je + ", width " + Je + ", margin " + Je
}, sa = function(r) {
  return $e(r, ve) ? null : "translate(" + r.x + "px, " + r.y + "px)";
}, Ft = {
  moveTo: sa,
  drop: function(r, t) {
    var n = sa(r);
    return n ? t ? n + " scale(" + Mr.scale.drop + ")" : n : null;
  }
}, Gt = sn.minDropTime, Ei = sn.maxDropTime, Eu = Ei - Gt, ua = 1500, Du = 0.6, Su = function(e) {
  var r = e.current, t = e.destination, n = e.reason, a = Rr(r, t);
  if (a <= 0)
    return Gt;
  if (a >= ua)
    return Ei;
  var i = a / ua, o = Gt + Eu * i, l = n === "CANCEL" ? o * Du : o;
  return Number(l.toFixed(2));
}, Iu = function(e) {
  var r = e.impact, t = e.draggable, n = e.dimensions, a = e.viewport, i = e.afterCritical, o = n.draggables, l = n.droppables, s = Pe(r), d = s ? l[s] : null, f = l[t.descriptor.droppableId], u = bi({
    impact: r,
    draggable: t,
    draggables: o,
    afterCritical: i,
    droppable: d || f,
    viewport: a
  }), c = Ie(u, t.client.borderBox.center);
  return c;
}, Pu = function(e) {
  var r = e.draggables, t = e.reason, n = e.lastImpact, a = e.home, i = e.viewport, o = e.onLiftImpact;
  if (!n.at || t !== "DROP") {
    var l = mi({
      draggables: r,
      impact: o,
      destination: a,
      viewport: i,
      forceShouldAnimate: !0
    });
    return {
      impact: l,
      didDropInsideDroppable: !1
    };
  }
  if (n.at.type === "REORDER")
    return {
      impact: n,
      didDropInsideDroppable: !0
    };
  var s = j({}, n, {
    displaced: Ar
  });
  return {
    impact: s,
    didDropInsideDroppable: !0
  };
}, Tu = function(e) {
  var r = e.getState, t = e.dispatch;
  return function(n) {
    return function(a) {
      if (a.type !== "DROP") {
        n(a);
        return;
      }
      var i = r(), o = a.payload.reason;
      if (i.phase === "COLLECTING") {
        t(hu({
          reason: o
        }));
        return;
      }
      if (i.phase !== "IDLE") {
        var l = i.phase === "DROP_PENDING" && i.isWaiting;
        l && E(!1, "A DROP action occurred while DROP_PENDING and still waiting"), i.phase === "DRAGGING" || i.phase === "DROP_PENDING" || E(!1, "Cannot drop in phase: " + i.phase);
        var s = i.critical, d = i.dimensions, f = d.draggables[i.critical.draggable.id], u = Pu({
          reason: o,
          lastImpact: i.impact,
          afterCritical: i.afterCritical,
          onLiftImpact: i.onLiftImpact,
          home: i.dimensions.droppables[i.critical.droppable.id],
          viewport: i.viewport,
          draggables: i.dimensions.draggables
        }), c = u.impact, p = u.didDropInsideDroppable, g = p ? Zt(c) : null, m = p ? tt(c) : null, h = {
          index: s.draggable.index,
          droppableId: s.droppable.id
        }, b = {
          draggableId: f.descriptor.id,
          type: f.descriptor.type,
          source: h,
          reason: o,
          mode: i.movementMode,
          destination: g,
          combine: m
        }, x = Iu({
          impact: c,
          draggable: f,
          dimensions: d,
          viewport: i.viewport,
          afterCritical: i.afterCritical
        }), I = {
          critical: i.critical,
          afterCritical: i.afterCritical,
          result: b,
          impact: c
        }, y = !$e(i.current.client.offset, x) || Boolean(b.combine);
        if (!y) {
          t(on({
            completed: I
          }));
          return;
        }
        var N = Su({
          current: i.current.client.offset,
          destination: x,
          reason: o
        }), M = {
          newHomeClientOffset: x,
          dropDuration: N,
          completed: I
        };
        t(bu(M));
      }
    };
  };
}, Di = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
};
function Ru(e) {
  return {
    eventName: "scroll",
    options: {
      passive: !0,
      capture: !1
    },
    fn: function(t) {
      t.target !== window && t.target !== window.document || e();
    }
  };
}
function Au(e) {
  var r = e.onWindowScroll;
  function t() {
    r(Di());
  }
  var n = Tr(t), a = Ru(n), i = Ue;
  function o() {
    return i !== Ue;
  }
  function l() {
    o() && E(!1, "Cannot start scroll listener when already active"), i = Me(window, [a]);
  }
  function s() {
    o() || E(!1, "Cannot stop scroll listener when not active"), n.cancel(), i(), i = Ue;
  }
  return {
    start: l,
    stop: s,
    isActive: o
  };
}
var Ou = function(r) {
  return r.type === "DROP_COMPLETE" || r.type === "DROP_ANIMATE" || r.type === "FLUSH";
}, Mu = function(e) {
  var r = Au({
    onWindowScroll: function(n) {
      e.dispatch(du({
        newScroll: n
      }));
    }
  });
  return function(t) {
    return function(n) {
      !r.isActive() && n.type === "INITIAL_PUBLISH" && r.start(), r.isActive() && Ou(n) && r.stop(), t(n);
    };
  };
}, Bu = function(e) {
  var r = !1, t = !1, n = setTimeout(function() {
    t = !0;
  }), a = function(o) {
    if (r) {
      se("Announcement already made. Not making a second announcement");
      return;
    }
    if (t) {
      se(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    r = !0, e(o), clearTimeout(n);
  };
  return a.wasCalled = function() {
    return r;
  }, a;
}, Nu = function() {
  var e = [], r = function(i) {
    var o = Jt(e, function(d) {
      return d.timerId === i;
    });
    o === -1 && E(!1, "Could not find timer");
    var l = e.splice(o, 1), s = l[0];
    s.callback();
  }, t = function(i) {
    var o = setTimeout(function() {
      return r(o);
    }), l = {
      timerId: o,
      callback: i
    };
    e.push(l);
  }, n = function() {
    if (!!e.length) {
      var i = [].concat(e);
      e.length = 0, i.forEach(function(o) {
        clearTimeout(o.timerId), o.callback();
      });
    }
  };
  return {
    add: t,
    flush: n
  };
}, Lu = function(r, t) {
  return r == null && t == null ? !0 : r == null || t == null ? !1 : r.droppableId === t.droppableId && r.index === t.index;
}, Fu = function(r, t) {
  return r == null && t == null ? !0 : r == null || t == null ? !1 : r.draggableId === t.draggableId && r.droppableId === t.droppableId;
}, Gu = function(r, t) {
  if (r === t)
    return !0;
  var n = r.draggable.id === t.draggable.id && r.draggable.droppableId === t.draggable.droppableId && r.draggable.type === t.draggable.type && r.draggable.index === t.draggable.index, a = r.droppable.id === t.droppable.id && r.droppable.type === t.droppable.type;
  return n && a;
}, xr = function(r, t) {
  t();
}, Wr = function(r, t) {
  return {
    draggableId: r.draggable.id,
    type: r.droppable.type,
    source: {
      droppableId: r.droppable.id,
      index: r.draggable.index
    },
    mode: t
  };
}, xt = function(r, t, n, a) {
  if (!r) {
    n(a(t));
    return;
  }
  var i = Bu(n), o = {
    announce: i
  };
  r(t, o), i.wasCalled() || n(a(t));
}, ku = function(e, r) {
  var t = Nu(), n = null, a = function(c, p) {
    n && E(!1, "Cannot fire onBeforeCapture as a drag start has already been published"), xr("onBeforeCapture", function() {
      var g = e().onBeforeCapture;
      if (g) {
        var m = {
          draggableId: c,
          mode: p
        };
        g(m);
      }
    });
  }, i = function(c, p) {
    n && E(!1, "Cannot fire onBeforeDragStart as a drag start has already been published"), xr("onBeforeDragStart", function() {
      var g = e().onBeforeDragStart;
      g && g(Wr(c, p));
    });
  }, o = function(c, p) {
    n && E(!1, "Cannot fire onBeforeDragStart as a drag start has already been published");
    var g = Wr(c, p);
    n = {
      mode: p,
      lastCritical: c,
      lastLocation: g.source,
      lastCombine: null
    }, t.add(function() {
      xr("onDragStart", function() {
        return xt(e().onDragStart, g, r, Yr.onDragStart);
      });
    });
  }, l = function(c, p) {
    var g = Zt(p), m = tt(p);
    n || E(!1, "Cannot fire onDragMove when onDragStart has not been called");
    var h = !Gu(c, n.lastCritical);
    h && (n.lastCritical = c);
    var b = !Lu(n.lastLocation, g);
    b && (n.lastLocation = g);
    var x = !Fu(n.lastCombine, m);
    if (x && (n.lastCombine = m), !(!h && !b && !x)) {
      var I = j({}, Wr(c, n.mode), {
        combine: m,
        destination: g
      });
      t.add(function() {
        xr("onDragUpdate", function() {
          return xt(e().onDragUpdate, I, r, Yr.onDragUpdate);
        });
      });
    }
  }, s = function() {
    n || E(!1, "Can only flush responders while dragging"), t.flush();
  }, d = function(c) {
    n || E(!1, "Cannot fire onDragEnd when there is no matching onDragStart"), n = null, xr("onDragEnd", function() {
      return xt(e().onDragEnd, c, r, Yr.onDragEnd);
    });
  }, f = function() {
    if (!!n) {
      var c = j({}, Wr(n.lastCritical, n.mode), {
        combine: null,
        destination: null,
        reason: "CANCEL"
      });
      d(c);
    }
  };
  return {
    beforeCapture: a,
    beforeStart: i,
    start: o,
    update: l,
    flush: s,
    drop: d,
    abort: f
  };
}, Wu = function(e, r) {
  var t = ku(e, r);
  return function(n) {
    return function(a) {
      return function(i) {
        if (i.type === "BEFORE_INITIAL_CAPTURE") {
          t.beforeCapture(i.payload.draggableId, i.payload.movementMode);
          return;
        }
        if (i.type === "INITIAL_PUBLISH") {
          var o = i.payload.critical;
          t.beforeStart(o, i.payload.movementMode), a(i), t.start(o, i.payload.movementMode);
          return;
        }
        if (i.type === "DROP_COMPLETE") {
          var l = i.payload.completed.result;
          t.flush(), a(i), t.drop(l);
          return;
        }
        if (a(i), i.type === "FLUSH") {
          t.abort();
          return;
        }
        var s = n.getState();
        s.phase === "DRAGGING" && t.update(s.critical, s.impact);
      };
    };
  };
}, ju = function(e) {
  return function(r) {
    return function(t) {
      if (t.type !== "DROP_ANIMATION_FINISHED") {
        r(t);
        return;
      }
      var n = e.getState();
      n.phase !== "DROP_ANIMATING" && E(!1, "Cannot finish a drop animating when no drop is occurring"), e.dispatch(on({
        completed: n.completed
      }));
    };
  };
}, Uu = function(e) {
  var r = null, t = null;
  function n() {
    t && (cancelAnimationFrame(t), t = null), r && (r(), r = null);
  }
  return function(a) {
    return function(i) {
      if ((i.type === "FLUSH" || i.type === "DROP_COMPLETE" || i.type === "DROP_ANIMATION_FINISHED") && n(), a(i), i.type === "DROP_ANIMATE") {
        var o = {
          eventName: "scroll",
          options: {
            capture: !0,
            passive: !1,
            once: !0
          },
          fn: function() {
            var s = e.getState();
            s.phase === "DROP_ANIMATING" && e.dispatch(Ci());
          }
        };
        t = requestAnimationFrame(function() {
          t = null, r = Me(window, [o]);
        });
      }
    };
  };
}, $u = function(e) {
  return function() {
    return function(r) {
      return function(t) {
        (t.type === "DROP_COMPLETE" || t.type === "FLUSH" || t.type === "DROP_ANIMATE") && e.stopPublishing(), r(t);
      };
    };
  };
}, Vu = function(e) {
  var r = !1;
  return function() {
    return function(t) {
      return function(n) {
        if (n.type === "INITIAL_PUBLISH") {
          r = !0, e.tryRecordFocus(n.payload.critical.draggable.id), t(n), e.tryRestoreFocusRecorded();
          return;
        }
        if (t(n), !!r) {
          if (n.type === "FLUSH") {
            r = !1, e.tryRestoreFocusRecorded();
            return;
          }
          if (n.type === "DROP_COMPLETE") {
            r = !1;
            var a = n.payload.completed.result;
            a.combine && e.tryShiftRecord(a.draggableId, a.combine.draggableId), e.tryRestoreFocusRecorded();
          }
        }
      };
    };
  };
}, Yu = function(r) {
  return r.type === "DROP_COMPLETE" || r.type === "DROP_ANIMATE" || r.type === "FLUSH";
}, Hu = function(e) {
  return function(r) {
    return function(t) {
      return function(n) {
        if (Yu(n)) {
          e.stop(), t(n);
          return;
        }
        if (n.type === "INITIAL_PUBLISH") {
          t(n);
          var a = r.getState();
          a.phase !== "DRAGGING" && E(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH"), e.start(a);
          return;
        }
        t(n), e.scroll(r.getState());
      };
    };
  };
}, _u = function(e) {
  return function(r) {
    return function(t) {
      if (r(t), t.type === "PUBLISH_WHILE_DRAGGING") {
        var n = e.getState();
        n.phase === "DROP_PENDING" && (n.isWaiting || e.dispatch(wi({
          reason: n.reason
        })));
      }
    };
  };
}, zu = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "react-beautiful-dnd"
}) : Ma, qu = function(e) {
  var r = e.dimensionMarshal, t = e.focusMarshal, n = e.styleMarshal, a = e.getResponders, i = e.announce, o = e.autoScroller;
  return Oa(tu, zu(Po(Cu(n), $u(r), wu(r), Tu, ju, Uu, _u, Hu(o), Mu, Vu(t), Wu(a, i))));
}, wt = function() {
  return {
    additions: {},
    removals: {},
    modified: {}
  };
};
function Ku(e) {
  var r = e.registry, t = e.callbacks, n = wt(), a = null, i = function() {
    a || (t.collectionStarting(), a = requestAnimationFrame(function() {
      a = null;
      var f = n, u = f.additions, c = f.removals, p = f.modified, g = Object.keys(u).map(function(b) {
        return r.draggable.getById(b).getDimension(ve);
      }).sort(function(b, x) {
        return b.descriptor.index - x.descriptor.index;
      }), m = Object.keys(p).map(function(b) {
        var x = r.droppable.getById(b), I = x.callbacks.getScrollWhileDragging();
        return {
          droppableId: b,
          scroll: I
        };
      }), h = {
        additions: g,
        removals: Object.keys(c),
        modified: m
      };
      n = wt(), t.publish(h);
    }));
  }, o = function(f) {
    var u = f.descriptor.id;
    n.additions[u] = f, n.modified[f.descriptor.droppableId] = !0, n.removals[u] && delete n.removals[u], i();
  }, l = function(f) {
    var u = f.descriptor;
    n.removals[u.id] = !0, n.modified[u.droppableId] = !0, n.additions[u.id] && delete n.additions[u.id], i();
  }, s = function() {
    !a || (cancelAnimationFrame(a), a = null, n = wt());
  };
  return {
    add: o,
    remove: l,
    stop: s
  };
}
var Si = function(e) {
  var r = e.scrollHeight, t = e.scrollWidth, n = e.height, a = e.width, i = Ie({
    x: t,
    y: r
  }, {
    x: a,
    y: n
  }), o = {
    x: Math.max(0, i.x),
    y: Math.max(0, i.y)
  };
  return o;
}, Ii = function() {
  var e = document.documentElement;
  return e || E(!1, "Cannot find document.documentElement"), e;
}, Pi = function() {
  var e = Ii(), r = Si({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
  return r;
}, Xu = function() {
  var e = Di(), r = Pi(), t = e.y, n = e.x, a = Ii(), i = a.clientWidth, o = a.clientHeight, l = n + i, s = t + o, d = Le({
    top: t,
    left: n,
    right: l,
    bottom: s
  }), f = {
    frame: d,
    scroll: {
      initial: e,
      current: e,
      max: r,
      diff: {
        value: ve,
        displacement: ve
      }
    }
  };
  return f;
}, Ju = function(e) {
  var r = e.critical, t = e.scrollOptions, n = e.registry, a = Xu(), i = a.scroll.current, o = r.droppable, l = n.droppable.getAllByType(o.type).map(function(u) {
    return u.callbacks.getDimensionAndWatchScroll(i, t);
  }), s = n.draggable.getAllByType(r.draggable.type).map(function(u) {
    return u.getDimension(i);
  }), d = {
    draggables: ti(s),
    droppables: ri(l)
  }, f = {
    dimensions: d,
    critical: r,
    viewport: a
  };
  return f;
};
function ca(e, r, t) {
  if (t.descriptor.id === r.id || t.descriptor.type !== r.type)
    return !1;
  var n = e.droppable.getById(t.descriptor.droppableId);
  return n.descriptor.mode !== "virtual" ? (se(`
      You are attempting to add or remove a Draggable [id: ` + t.descriptor.id + `]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var Zu = function(e, r) {
  var t = null, n = Ku({
    callbacks: {
      publish: r.publishWhileDragging,
      collectionStarting: r.collectionStarting
    },
    registry: e
  }), a = function(p, g) {
    e.droppable.exists(p) || E(!1, "Cannot update is enabled flag of Droppable " + p + " as it is not registered"), t && r.updateDroppableIsEnabled({
      id: p,
      isEnabled: g
    });
  }, i = function(p, g) {
    !t || (e.droppable.exists(p) || E(!1, "Cannot update isCombineEnabled flag of Droppable " + p + " as it is not registered"), r.updateDroppableIsCombineEnabled({
      id: p,
      isCombineEnabled: g
    }));
  }, o = function(p, g) {
    !t || (e.droppable.exists(p) || E(!1, "Cannot update the scroll on Droppable " + p + " as it is not registered"), r.updateDroppableScroll({
      id: p,
      newScroll: g
    }));
  }, l = function(p, g) {
    !t || e.droppable.getById(p).callbacks.scroll(g);
  }, s = function() {
    if (!!t) {
      n.stop();
      var p = t.critical.droppable;
      e.droppable.getAllByType(p.type).forEach(function(g) {
        return g.callbacks.dragStopped();
      }), t.unsubscribe(), t = null;
    }
  }, d = function(p) {
    t || E(!1, "Should only be subscribed when a collection is occurring");
    var g = t.critical.draggable;
    p.type === "ADDITION" && ca(e, g, p.value) && n.add(p.value), p.type === "REMOVAL" && ca(e, g, p.value) && n.remove(p.value);
  }, f = function(p) {
    t && E(!1, "Cannot start capturing critical dimensions as there is already a collection");
    var g = e.draggable.getById(p.draggableId), m = e.droppable.getById(g.descriptor.droppableId), h = {
      draggable: g.descriptor,
      droppable: m.descriptor
    }, b = e.subscribe(d);
    return t = {
      critical: h,
      unsubscribe: b
    }, Ju({
      critical: h,
      registry: e,
      scrollOptions: p.scrollOptions
    });
  }, u = {
    updateDroppableIsEnabled: a,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: l,
    updateDroppableScroll: o,
    startPublishing: f,
    stopPublishing: s
  };
  return u;
}, Ti = function(e, r) {
  return e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === r ? !1 : e.completed.result.reason === "DROP";
}, Qu = function(e) {
  window.scrollBy(e.x, e.y);
}, ec = pe(function(e) {
  return rt(e).filter(function(r) {
    return !(!r.isEnabled || !r.frame);
  });
}), rc = function(r, t) {
  var n = He(ec(t), function(a) {
    return a.frame || E(!1, "Invalid result"), fi(a.frame.pageMarginBox)(r);
  });
  return n;
}, tc = function(e) {
  var r = e.center, t = e.destination, n = e.droppables;
  if (t) {
    var a = n[t];
    return a.frame ? a : null;
  }
  var i = rc(r, n);
  return i;
}, Ve = {
  startFromPercentage: 0.25,
  maxScrollAtPercentage: 0.05,
  maxPixelScroll: 28,
  ease: function(r) {
    return Math.pow(r, 2);
  },
  durationDampening: {
    stopDampeningAt: 1200,
    accelerateAt: 360
  }
}, nc = function(e, r) {
  var t = e[r.size] * Ve.startFromPercentage, n = e[r.size] * Ve.maxScrollAtPercentage, a = {
    startScrollingFrom: t,
    maxScrollValueAt: n
  };
  return a;
}, Ri = function(e) {
  var r = e.startOfRange, t = e.endOfRange, n = e.current, a = t - r;
  if (a === 0)
    return se(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0;
  var i = n - r, o = i / a;
  return o;
}, un = 1, ac = function(e, r) {
  if (e > r.startScrollingFrom)
    return 0;
  if (e <= r.maxScrollValueAt)
    return Ve.maxPixelScroll;
  if (e === r.startScrollingFrom)
    return un;
  var t = Ri({
    startOfRange: r.maxScrollValueAt,
    endOfRange: r.startScrollingFrom,
    current: e
  }), n = 1 - t, a = Ve.maxPixelScroll * Ve.ease(n);
  return Math.ceil(a);
}, da = Ve.durationDampening.accelerateAt, fa = Ve.durationDampening.stopDampeningAt, ic = function(e, r) {
  var t = r, n = fa, a = Date.now(), i = a - t;
  if (i >= fa)
    return e;
  if (i < da)
    return un;
  var o = Ri({
    startOfRange: da,
    endOfRange: n,
    current: i
  }), l = e * Ve.ease(o);
  return Math.ceil(l);
}, pa = function(e) {
  var r = e.distanceToEdge, t = e.thresholds, n = e.dragStartTime, a = e.shouldUseTimeDampening, i = ac(r, t);
  return i === 0 ? 0 : a ? Math.max(ic(i, n), un) : i;
}, va = function(e) {
  var r = e.container, t = e.distanceToEdges, n = e.dragStartTime, a = e.axis, i = e.shouldUseTimeDampening, o = nc(r, a), l = t[a.end] < t[a.start];
  return l ? pa({
    distanceToEdge: t[a.end],
    thresholds: o,
    dragStartTime: n,
    shouldUseTimeDampening: i
  }) : -1 * pa({
    distanceToEdge: t[a.start],
    thresholds: o,
    dragStartTime: n,
    shouldUseTimeDampening: i
  });
}, oc = function(e) {
  var r = e.container, t = e.subject, n = e.proposedScroll, a = t.height > r.height, i = t.width > r.width;
  return !i && !a ? n : i && a ? null : {
    x: i ? 0 : n.x,
    y: a ? 0 : n.y
  };
}, lc = Qa(function(e) {
  return e === 0 ? 0 : e;
}), Ai = function(e) {
  var r = e.dragStartTime, t = e.container, n = e.subject, a = e.center, i = e.shouldUseTimeDampening, o = {
    top: a.y - t.top,
    right: t.right - a.x,
    bottom: t.bottom - a.y,
    left: a.x - t.left
  }, l = va({
    container: t,
    distanceToEdges: o,
    dragStartTime: r,
    axis: Qt,
    shouldUseTimeDampening: i
  }), s = va({
    container: t,
    distanceToEdges: o,
    dragStartTime: r,
    axis: ii,
    shouldUseTimeDampening: i
  }), d = lc({
    x: s,
    y: l
  });
  if ($e(d, ve))
    return null;
  var f = oc({
    container: t,
    subject: n,
    proposedScroll: d
  });
  return f ? $e(f, ve) ? null : f : null;
}, sc = Qa(function(e) {
  return e === 0 ? 0 : e > 0 ? 1 : -1;
}), cn = function() {
  var e = function(t, n) {
    return t < 0 ? t : t > n ? t - n : 0;
  };
  return function(r) {
    var t = r.current, n = r.max, a = r.change, i = me(t, a), o = {
      x: e(i.x, n.x),
      y: e(i.y, n.y)
    };
    return $e(o, ve) ? null : o;
  };
}(), Oi = function(r) {
  var t = r.max, n = r.current, a = r.change, i = {
    x: Math.max(n.x, t.x),
    y: Math.max(n.y, t.y)
  }, o = sc(a), l = cn({
    max: i,
    current: n,
    change: o
  });
  return !l || o.x !== 0 && l.x === 0 || o.y !== 0 && l.y === 0;
}, dn = function(r, t) {
  return Oi({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  });
}, uc = function(r, t) {
  if (!dn(r, t))
    return null;
  var n = r.scroll.max, a = r.scroll.current;
  return cn({
    current: a,
    max: n,
    change: t
  });
}, fn = function(r, t) {
  var n = r.frame;
  return n ? Oi({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, cc = function(r, t) {
  var n = r.frame;
  return !n || !fn(r, t) ? null : cn({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
}, dc = function(e) {
  var r = e.viewport, t = e.subject, n = e.center, a = e.dragStartTime, i = e.shouldUseTimeDampening, o = Ai({
    dragStartTime: a,
    container: r.frame,
    subject: t,
    center: n,
    shouldUseTimeDampening: i
  });
  return o && dn(r, o) ? o : null;
}, fc = function(e) {
  var r = e.droppable, t = e.subject, n = e.center, a = e.dragStartTime, i = e.shouldUseTimeDampening, o = r.frame;
  if (!o)
    return null;
  var l = Ai({
    dragStartTime: a,
    container: o.pageMarginBox,
    subject: t,
    center: n,
    shouldUseTimeDampening: i
  });
  return l && fn(r, l) ? l : null;
}, ga = function(e) {
  var r = e.state, t = e.dragStartTime, n = e.shouldUseTimeDampening, a = e.scrollWindow, i = e.scrollDroppable, o = r.current.page.borderBoxCenter, l = r.dimensions.draggables[r.critical.draggable.id], s = l.page.marginBox;
  if (r.isWindowScrollAllowed) {
    var d = r.viewport, f = dc({
      dragStartTime: t,
      viewport: d,
      subject: s,
      center: o,
      shouldUseTimeDampening: n
    });
    if (f) {
      a(f);
      return;
    }
  }
  var u = tc({
    center: o,
    destination: Pe(r.impact),
    droppables: r.dimensions.droppables
  });
  if (!!u) {
    var c = fc({
      dragStartTime: t,
      droppable: u,
      subject: s,
      center: o,
      shouldUseTimeDampening: n
    });
    c && i(u.descriptor.id, c);
  }
}, pc = function(e) {
  var r = e.scrollWindow, t = e.scrollDroppable, n = Tr(r), a = Tr(t), i = null, o = function(f) {
    i || E(!1, "Cannot fluid scroll if not dragging");
    var u = i, c = u.shouldUseTimeDampening, p = u.dragStartTime;
    ga({
      state: f,
      scrollWindow: n,
      scrollDroppable: a,
      dragStartTime: p,
      shouldUseTimeDampening: c
    });
  }, l = function(f) {
    i && E(!1, "Cannot start auto scrolling when already started");
    var u = Date.now(), c = !1, p = function() {
      c = !0;
    };
    ga({
      state: f,
      dragStartTime: 0,
      shouldUseTimeDampening: !1,
      scrollWindow: p,
      scrollDroppable: p
    }), i = {
      dragStartTime: u,
      shouldUseTimeDampening: c
    }, c && o(f);
  }, s = function() {
    !i || (n.cancel(), a.cancel(), i = null);
  };
  return {
    start: l,
    stop: s,
    scroll: o
  };
}, vc = function(e) {
  var r = e.move, t = e.scrollDroppable, n = e.scrollWindow, a = function(d, f) {
    var u = me(d.current.client.selection, f);
    r({
      client: u
    });
  }, i = function(d, f) {
    if (!fn(d, f))
      return f;
    var u = cc(d, f);
    if (!u)
      return t(d.descriptor.id, f), null;
    var c = Ie(f, u);
    t(d.descriptor.id, c);
    var p = Ie(f, c);
    return p;
  }, o = function(d, f, u) {
    if (!d || !dn(f, u))
      return u;
    var c = uc(f, u);
    if (!c)
      return n(u), null;
    var p = Ie(u, c);
    n(p);
    var g = Ie(u, p);
    return g;
  }, l = function(d) {
    var f = d.scrollJumpRequest;
    if (!!f) {
      var u = Pe(d.impact);
      u || E(!1, "Cannot perform a jump scroll when there is no destination");
      var c = i(d.dimensions.droppables[u], f);
      if (!!c) {
        var p = d.viewport, g = o(d.isWindowScrollAllowed, p, c);
        !g || a(d, g);
      }
    }
  };
  return l;
}, gc = function(e) {
  var r = e.scrollDroppable, t = e.scrollWindow, n = e.move, a = pc({
    scrollWindow: t,
    scrollDroppable: r
  }), i = vc({
    move: n,
    scrollWindow: t,
    scrollDroppable: r
  }), o = function(d) {
    if (d.phase === "DRAGGING") {
      if (d.movementMode === "FLUID") {
        a.scroll(d);
        return;
      }
      !d.scrollJumpRequest || i(d);
    }
  }, l = {
    scroll: o,
    start: a.start,
    stop: a.stop
  };
  return l;
}, dr = "data-rbd", fr = function() {
  var e = dr + "-drag-handle";
  return {
    base: e,
    draggableId: e + "-draggable-id",
    contextId: e + "-context-id"
  };
}(), kt = function() {
  var e = dr + "-draggable";
  return {
    base: e,
    contextId: e + "-context-id",
    id: e + "-id"
  };
}(), mc = function() {
  var e = dr + "-droppable";
  return {
    base: e,
    contextId: e + "-context-id",
    id: e + "-id"
  };
}(), ma = {
  contextId: dr + "-scroll-container-context-id"
}, bc = function(r) {
  return function(t) {
    return "[" + t + '="' + r + '"]';
  };
}, wr = function(r, t) {
  return r.map(function(n) {
    var a = n.styles[t];
    return a ? n.selector + " { " + a + " }" : "";
  }).join(" ");
}, hc = "pointer-events: none;", yc = function(e) {
  var r = bc(e), t = function() {
    var l = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: r(fr.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: l,
        dragging: hc,
        dropAnimating: l
      }
    };
  }(), n = function() {
    var l = `
      transition: ` + Sr.outOfTheWay + `;
    `;
    return {
      selector: r(kt.contextId),
      styles: {
        dragging: l,
        dropAnimating: l,
        userCancel: l
      }
    };
  }(), a = {
    selector: r(mc.contextId),
    styles: {
      always: "overflow-anchor: none;"
    }
  }, i = {
    selector: "body",
    styles: {
      dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `
    }
  }, o = [n, t, a, i];
  return {
    always: wr(o, "always"),
    resting: wr(o, "resting"),
    dragging: wr(o, "dragging"),
    dropAnimating: wr(o, "dropAnimating"),
    userCancel: wr(o, "userCancel")
  };
}, Te = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Ra : Ge, Ct = function() {
  var r = document.querySelector("head");
  return r || E(!1, "Cannot find the head to append a style to"), r;
}, ba = function(r) {
  var t = document.createElement("style");
  return r && t.setAttribute("nonce", r), t.type = "text/css", t;
};
function xc(e, r) {
  var t = J(function() {
    return yc(e);
  }, [e]), n = ne(null), a = ne(null), i = G(pe(function(u) {
    var c = a.current;
    c || E(!1, "Cannot set dynamic style element if it is not set"), c.textContent = u;
  }), []), o = G(function(u) {
    var c = n.current;
    c || E(!1, "Cannot set dynamic style element if it is not set"), c.textContent = u;
  }, []);
  Te(function() {
    !n.current && !a.current || E(!1, "style elements already mounted");
    var u = ba(r), c = ba(r);
    return n.current = u, a.current = c, u.setAttribute(dr + "-always", e), c.setAttribute(dr + "-dynamic", e), Ct().appendChild(u), Ct().appendChild(c), o(t.always), i(t.resting), function() {
      var p = function(m) {
        var h = m.current;
        h || E(!1, "Cannot unmount ref as it is not set"), Ct().removeChild(h), m.current = null;
      };
      p(n), p(a);
    };
  }, [r, o, i, t.always, t.resting, e]);
  var l = G(function() {
    return i(t.dragging);
  }, [i, t.dragging]), s = G(function(u) {
    if (u === "DROP") {
      i(t.dropAnimating);
      return;
    }
    i(t.userCancel);
  }, [i, t.dropAnimating, t.userCancel]), d = G(function() {
    !a.current || i(t.resting);
  }, [i, t.resting]), f = J(function() {
    return {
      dragging: l,
      dropping: s,
      resting: d
    };
  }, [l, s, d]);
  return f;
}
var Mi = function(e) {
  return e && e.ownerDocument ? e.ownerDocument.defaultView : window;
};
function Fr(e) {
  return e instanceof Mi(e).HTMLElement;
}
function Bi(e, r) {
  var t = "[" + fr.contextId + '="' + e + '"]', n = ei(document.querySelectorAll(t));
  if (!n.length)
    return se('Unable to find any drag handles in the context "' + e + '"'), null;
  var a = He(n, function(i) {
    return i.getAttribute(fr.draggableId) === r;
  });
  return a ? Fr(a) ? a : (se("drag handle needs to be a HTMLElement"), null) : (se('Unable to find drag handle with id "' + r + '" as no handle with a matching id was found'), null);
}
function wc(e) {
  var r = ne({}), t = ne(null), n = ne(null), a = ne(!1), i = G(function(c, p) {
    var g = {
      id: c,
      focus: p
    };
    return r.current[c] = g, function() {
      var h = r.current, b = h[c];
      b !== g && delete h[c];
    };
  }, []), o = G(function(c) {
    var p = Bi(e, c);
    p && p !== document.activeElement && p.focus();
  }, [e]), l = G(function(c, p) {
    t.current === c && (t.current = p);
  }, []), s = G(function() {
    n.current || !a.current || (n.current = requestAnimationFrame(function() {
      n.current = null;
      var c = t.current;
      c && o(c);
    }));
  }, [o]), d = G(function(c) {
    t.current = null;
    var p = document.activeElement;
    !p || p.getAttribute(fr.draggableId) === c && (t.current = c);
  }, []);
  Te(function() {
    return a.current = !0, function() {
      a.current = !1;
      var c = n.current;
      c && cancelAnimationFrame(c);
    };
  }, []);
  var f = J(function() {
    return {
      register: i,
      tryRecordFocus: d,
      tryRestoreFocusRecorded: s,
      tryShiftRecord: l
    };
  }, [i, d, s, l]);
  return f;
}
function Cc() {
  var e = {
    draggables: {},
    droppables: {}
  }, r = [];
  function t(u) {
    return r.push(u), function() {
      var p = r.indexOf(u);
      p !== -1 && r.splice(p, 1);
    };
  }
  function n(u) {
    r.length && r.forEach(function(c) {
      return c(u);
    });
  }
  function a(u) {
    return e.draggables[u] || null;
  }
  function i(u) {
    var c = a(u);
    return c || E(!1, "Cannot find draggable entry with id [" + u + "]"), c;
  }
  var o = {
    register: function(c) {
      e.draggables[c.descriptor.id] = c, n({
        type: "ADDITION",
        value: c
      });
    },
    update: function(c, p) {
      var g = e.draggables[p.descriptor.id];
      !g || g.uniqueId === c.uniqueId && (delete e.draggables[p.descriptor.id], e.draggables[c.descriptor.id] = c);
    },
    unregister: function(c) {
      var p = c.descriptor.id, g = a(p);
      !g || c.uniqueId === g.uniqueId && (delete e.draggables[p], n({
        type: "REMOVAL",
        value: c
      }));
    },
    getById: i,
    findById: a,
    exists: function(c) {
      return Boolean(a(c));
    },
    getAllByType: function(c) {
      return Xr(e.draggables).filter(function(p) {
        return p.descriptor.type === c;
      });
    }
  };
  function l(u) {
    return e.droppables[u] || null;
  }
  function s(u) {
    var c = l(u);
    return c || E(!1, "Cannot find droppable entry with id [" + u + "]"), c;
  }
  var d = {
    register: function(c) {
      e.droppables[c.descriptor.id] = c;
    },
    unregister: function(c) {
      var p = l(c.descriptor.id);
      !p || c.uniqueId === p.uniqueId && delete e.droppables[c.descriptor.id];
    },
    getById: s,
    findById: l,
    exists: function(c) {
      return Boolean(l(c));
    },
    getAllByType: function(c) {
      return Xr(e.droppables).filter(function(p) {
        return p.descriptor.type === c;
      });
    }
  };
  function f() {
    e.draggables = {}, e.droppables = {}, r.length = 0;
  }
  return {
    draggable: o,
    droppable: d,
    subscribe: t,
    clean: f
  };
}
function Ec() {
  var e = J(Cc, []);
  return Ge(function() {
    return function() {
      requestAnimationFrame(e.clean);
    };
  }, [e]), e;
}
var pn = te.createContext(null), Br = function() {
  var e = document.body;
  return e || E(!1, "Cannot find document.body"), e;
}, Dc = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(100%)"
}, Sc = function(r) {
  return "rbd-announcement-" + r;
};
function Ic(e) {
  var r = J(function() {
    return Sc(e);
  }, [e]), t = ne(null);
  Ge(function() {
    var i = document.createElement("div");
    return t.current = i, i.id = r, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), j(i.style, Dc), Br().appendChild(i), function() {
      setTimeout(function() {
        var s = Br();
        s.contains(i) && s.removeChild(i), i === t.current && (t.current = null);
      });
    };
  }, [r]);
  var n = G(function(a) {
    var i = t.current;
    if (i) {
      i.textContent = a;
      return;
    }
    se(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "` + a + `"
    `);
  }, []);
  return n;
}
var Pc = 0, Tc = {
  separator: "::"
};
function vn(e, r) {
  return r === void 0 && (r = Tc), J(function() {
    return "" + e + r.separator + Pc++;
  }, [r.separator, e]);
}
function Rc(e) {
  var r = e.contextId, t = e.uniqueId;
  return "rbd-hidden-text-" + r + "-" + t;
}
function Ac(e) {
  var r = e.contextId, t = e.text, n = vn("hidden-text", {
    separator: "-"
  }), a = J(function() {
    return Rc({
      contextId: r,
      uniqueId: n
    });
  }, [n, r]);
  return Ge(function() {
    var o = document.createElement("div");
    return o.id = a, o.textContent = t, o.style.display = "none", Br().appendChild(o), function() {
      var s = Br();
      s.contains(o) && s.removeChild(o);
    };
  }, [a, t]), a;
}
var it = te.createContext(null), Oc = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
}, Mc = /(\d+)\.(\d+)\.(\d+)/, ha = function(r) {
  var t = Mc.exec(r);
  t == null && E(!1, "Unable to parse React version " + r);
  var n = Number(t[1]), a = Number(t[2]), i = Number(t[3]);
  return {
    major: n,
    minor: a,
    patch: i,
    raw: r
  };
}, Bc = function(r, t) {
  return t.major > r.major ? !0 : t.major < r.major ? !1 : t.minor > r.minor ? !0 : t.minor < r.minor ? !1 : t.patch >= r.patch;
}, Nc = function(e, r) {
  var t = ha(e), n = ha(r);
  Bc(t, n) || se(`
    React version: [` + n.raw + `]
    does not satisfy expected peer dependency version: [` + t.raw + `]

    This can result in run time bugs, and even fatal crashes
  `);
}, Et = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/doctype.md
`, Lc = function(e) {
  var r = e.doctype;
  if (!r) {
    se(`
      No <!doctype html> found.

      ` + Et + `
    `);
    return;
  }
  r.name.toLowerCase() !== "html" && se(`
      Unexpected <!doctype> found: (` + r.name + `)

      ` + Et + `
    `), r.publicId !== "" && se(`
      Unexpected <!doctype> publicId found: (` + r.publicId + `)
      A html5 doctype does not have a publicId

      ` + Et + `
    `);
};
function gn(e) {
  e();
}
function Gr(e, r) {
  gn(function() {
    Ge(function() {
      try {
        e();
      } catch (t) {
        Bt(`
          A setup problem was encountered.

          > ` + t.message + `
        `);
      }
    }, r);
  });
}
function Fc() {
  Gr(function() {
    Nc(Oc.react, te.version), Lc(document);
  }, []);
}
function mn(e) {
  var r = ne(e);
  return Ge(function() {
    r.current = e;
  }), r;
}
function Gc() {
  var e = null;
  function r() {
    return Boolean(e);
  }
  function t(o) {
    return o === e;
  }
  function n(o) {
    e && E(!1, "Cannot claim lock as it is already claimed");
    var l = {
      abandon: o
    };
    return e = l, l;
  }
  function a() {
    e || E(!1, "Cannot release lock when there is no lock"), e = null;
  }
  function i() {
    e && (e.abandon(), a());
  }
  return {
    isClaimed: r,
    isActive: t,
    claim: n,
    release: a,
    tryAbandon: i
  };
}
var kc = 9, Wc = 13, bn = 27, Ni = 32, jc = 33, Uc = 34, $c = 35, Vc = 36, Yc = 37, Hc = 38, _c = 39, zc = 40, jr, qc = (jr = {}, jr[Wc] = !0, jr[kc] = !0, jr), Li = function(e) {
  qc[e.keyCode] && e.preventDefault();
}, ot = function() {
  var e = "visibilitychange";
  if (typeof document > "u")
    return e;
  var r = [e, "ms" + e, "webkit" + e, "moz" + e, "o" + e], t = He(r, function(n) {
    return "on" + n in document;
  });
  return t || e;
}(), Fi = 0, ya = 5;
function Kc(e, r) {
  return Math.abs(r.x - e.x) >= ya || Math.abs(r.y - e.y) >= ya;
}
var xa = {
  type: "IDLE"
};
function Xc(e) {
  var r = e.cancel, t = e.completed, n = e.getPhase, a = e.setPhase;
  return [{
    eventName: "mousemove",
    fn: function(o) {
      var l = o.button, s = o.clientX, d = o.clientY;
      if (l === Fi) {
        var f = {
          x: s,
          y: d
        }, u = n();
        if (u.type === "DRAGGING") {
          o.preventDefault(), u.actions.move(f);
          return;
        }
        u.type !== "PENDING" && E(!1, "Cannot be IDLE");
        var c = u.point;
        if (!!Kc(c, f)) {
          o.preventDefault();
          var p = u.actions.fluidLift(f);
          a({
            type: "DRAGGING",
            actions: p
          });
        }
      }
    }
  }, {
    eventName: "mouseup",
    fn: function(o) {
      var l = n();
      if (l.type !== "DRAGGING") {
        r();
        return;
      }
      o.preventDefault(), l.actions.drop({
        shouldBlockNextClick: !0
      }), t();
    }
  }, {
    eventName: "mousedown",
    fn: function(o) {
      n().type === "DRAGGING" && o.preventDefault(), r();
    }
  }, {
    eventName: "keydown",
    fn: function(o) {
      var l = n();
      if (l.type === "PENDING") {
        r();
        return;
      }
      if (o.keyCode === bn) {
        o.preventDefault(), r();
        return;
      }
      Li(o);
    }
  }, {
    eventName: "resize",
    fn: r
  }, {
    eventName: "scroll",
    options: {
      passive: !0,
      capture: !1
    },
    fn: function() {
      n().type === "PENDING" && r();
    }
  }, {
    eventName: "webkitmouseforcedown",
    fn: function(o) {
      var l = n();
      if (l.type === "IDLE" && E(!1, "Unexpected phase"), l.actions.shouldRespectForcePress()) {
        r();
        return;
      }
      o.preventDefault();
    }
  }, {
    eventName: ot,
    fn: r
  }];
}
function Jc(e) {
  var r = ne(xa), t = ne(Ue), n = J(function() {
    return {
      eventName: "mousedown",
      fn: function(u) {
        if (!u.defaultPrevented && u.button === Fi && !(u.ctrlKey || u.metaKey || u.shiftKey || u.altKey)) {
          var c = e.findClosestDraggableId(u);
          if (!!c) {
            var p = e.tryGetLock(c, o, {
              sourceEvent: u
            });
            if (!!p) {
              u.preventDefault();
              var g = {
                x: u.clientX,
                y: u.clientY
              };
              t.current(), d(p, g);
            }
          }
        }
      }
    };
  }, [e]), a = J(function() {
    return {
      eventName: "webkitmouseforcewillbegin",
      fn: function(u) {
        if (!u.defaultPrevented) {
          var c = e.findClosestDraggableId(u);
          if (!!c) {
            var p = e.findOptionsForDraggable(c);
            !p || p.shouldRespectForcePress || !e.canGetLock(c) || u.preventDefault();
          }
        }
      }
    };
  }, [e]), i = G(function() {
    var u = {
      passive: !1,
      capture: !0
    };
    t.current = Me(window, [a, n], u);
  }, [a, n]), o = G(function() {
    var f = r.current;
    f.type !== "IDLE" && (r.current = xa, t.current(), i());
  }, [i]), l = G(function() {
    var f = r.current;
    o(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [o]), s = G(function() {
    var u = {
      capture: !0,
      passive: !1
    }, c = Xc({
      cancel: l,
      completed: o,
      getPhase: function() {
        return r.current;
      },
      setPhase: function(g) {
        r.current = g;
      }
    });
    t.current = Me(window, c, u);
  }, [l, o]), d = G(function(u, c) {
    r.current.type !== "IDLE" && E(!1, "Expected to move from IDLE to PENDING drag"), r.current = {
      type: "PENDING",
      point: c,
      actions: u
    }, s();
  }, [s]);
  Te(function() {
    return i(), function() {
      t.current();
    };
  }, [i]);
}
var sr;
function Zc() {
}
var Qc = (sr = {}, sr[Uc] = !0, sr[jc] = !0, sr[Vc] = !0, sr[$c] = !0, sr);
function ed(e, r) {
  function t() {
    r(), e.cancel();
  }
  function n() {
    r(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: function(i) {
      if (i.keyCode === bn) {
        i.preventDefault(), t();
        return;
      }
      if (i.keyCode === Ni) {
        i.preventDefault(), n();
        return;
      }
      if (i.keyCode === zc) {
        i.preventDefault(), e.moveDown();
        return;
      }
      if (i.keyCode === Hc) {
        i.preventDefault(), e.moveUp();
        return;
      }
      if (i.keyCode === _c) {
        i.preventDefault(), e.moveRight();
        return;
      }
      if (i.keyCode === Yc) {
        i.preventDefault(), e.moveLeft();
        return;
      }
      if (Qc[i.keyCode]) {
        i.preventDefault();
        return;
      }
      Li(i);
    }
  }, {
    eventName: "mousedown",
    fn: t
  }, {
    eventName: "mouseup",
    fn: t
  }, {
    eventName: "click",
    fn: t
  }, {
    eventName: "touchstart",
    fn: t
  }, {
    eventName: "resize",
    fn: t
  }, {
    eventName: "wheel",
    fn: t,
    options: {
      passive: !0
    }
  }, {
    eventName: ot,
    fn: t
  }];
}
function rd(e) {
  var r = ne(Zc), t = J(function() {
    return {
      eventName: "keydown",
      fn: function(i) {
        if (i.defaultPrevented || i.keyCode !== Ni)
          return;
        var o = e.findClosestDraggableId(i);
        if (!o)
          return;
        var l = e.tryGetLock(o, f, {
          sourceEvent: i
        });
        if (!l)
          return;
        i.preventDefault();
        var s = !0, d = l.snapLift();
        r.current();
        function f() {
          s || E(!1, "Cannot stop capturing a keyboard drag when not capturing"), s = !1, r.current(), n();
        }
        r.current = Me(window, ed(d, f), {
          capture: !0,
          passive: !1
        });
      }
    };
  }, [e]), n = G(function() {
    var i = {
      passive: !1,
      capture: !0
    };
    r.current = Me(window, [t], i);
  }, [t]);
  Te(function() {
    return n(), function() {
      r.current();
    };
  }, [n]);
}
var Dt = {
  type: "IDLE"
}, td = 120, nd = 0.15;
function ad(e) {
  var r = e.cancel, t = e.getPhase;
  return [{
    eventName: "orientationchange",
    fn: r
  }, {
    eventName: "resize",
    fn: r
  }, {
    eventName: "contextmenu",
    fn: function(a) {
      a.preventDefault();
    }
  }, {
    eventName: "keydown",
    fn: function(a) {
      if (t().type !== "DRAGGING") {
        r();
        return;
      }
      a.keyCode === bn && a.preventDefault(), r();
    }
  }, {
    eventName: ot,
    fn: r
  }];
}
function id(e) {
  var r = e.cancel, t = e.completed, n = e.getPhase;
  return [{
    eventName: "touchmove",
    options: {
      capture: !1
    },
    fn: function(i) {
      var o = n();
      if (o.type !== "DRAGGING") {
        r();
        return;
      }
      o.hasMoved = !0;
      var l = i.touches[0], s = l.clientX, d = l.clientY, f = {
        x: s,
        y: d
      };
      i.preventDefault(), o.actions.move(f);
    }
  }, {
    eventName: "touchend",
    fn: function(i) {
      var o = n();
      if (o.type !== "DRAGGING") {
        r();
        return;
      }
      i.preventDefault(), o.actions.drop({
        shouldBlockNextClick: !0
      }), t();
    }
  }, {
    eventName: "touchcancel",
    fn: function(i) {
      if (n().type !== "DRAGGING") {
        r();
        return;
      }
      i.preventDefault(), r();
    }
  }, {
    eventName: "touchforcechange",
    fn: function(i) {
      var o = n();
      o.type === "IDLE" && E(!1);
      var l = i.touches[0];
      if (!!l) {
        var s = l.force >= nd;
        if (!!s) {
          var d = o.actions.shouldRespectForcePress();
          if (o.type === "PENDING") {
            d && r();
            return;
          }
          if (d) {
            if (o.hasMoved) {
              i.preventDefault();
              return;
            }
            r();
            return;
          }
          i.preventDefault();
        }
      }
    }
  }, {
    eventName: ot,
    fn: r
  }];
}
function od(e) {
  var r = ne(Dt), t = ne(Ue), n = G(function() {
    return r.current;
  }, []), a = G(function(p) {
    r.current = p;
  }, []), i = J(function() {
    return {
      eventName: "touchstart",
      fn: function(p) {
        if (!p.defaultPrevented) {
          var g = e.findClosestDraggableId(p);
          if (!!g) {
            var m = e.tryGetLock(g, l, {
              sourceEvent: p
            });
            if (!!m) {
              var h = p.touches[0], b = h.clientX, x = h.clientY, I = {
                x: b,
                y: x
              };
              t.current(), u(m, I);
            }
          }
        }
      }
    };
  }, [e]), o = G(function() {
    var p = {
      capture: !0,
      passive: !1
    };
    t.current = Me(window, [i], p);
  }, [i]), l = G(function() {
    var c = r.current;
    c.type !== "IDLE" && (c.type === "PENDING" && clearTimeout(c.longPressTimerId), a(Dt), t.current(), o());
  }, [o, a]), s = G(function() {
    var c = r.current;
    l(), c.type === "DRAGGING" && c.actions.cancel({
      shouldBlockNextClick: !0
    }), c.type === "PENDING" && c.actions.abort();
  }, [l]), d = G(function() {
    var p = {
      capture: !0,
      passive: !1
    }, g = {
      cancel: s,
      completed: l,
      getPhase: n
    }, m = Me(window, id(g), p), h = Me(window, ad(g), p);
    t.current = function() {
      m(), h();
    };
  }, [s, n, l]), f = G(function() {
    var p = n();
    p.type !== "PENDING" && E(!1, "Cannot start dragging from phase " + p.type);
    var g = p.actions.fluidLift(p.point);
    a({
      type: "DRAGGING",
      actions: g,
      hasMoved: !1
    });
  }, [n, a]), u = G(function(p, g) {
    n().type !== "IDLE" && E(!1, "Expected to move from IDLE to PENDING drag");
    var m = setTimeout(f, td);
    a({
      type: "PENDING",
      point: g,
      actions: p,
      longPressTimerId: m
    }), d();
  }, [d, n, a, f]);
  Te(function() {
    return o(), function() {
      t.current();
      var g = n();
      g.type === "PENDING" && (clearTimeout(g.longPressTimerId), a(Dt));
    };
  }, [n, o, a]), Te(function() {
    var p = Me(window, [{
      eventName: "touchmove",
      fn: function() {
      },
      options: {
        capture: !1,
        passive: !1
      }
    }]);
    return p;
  }, []);
}
function ld(e) {
  gn(function() {
    var r = mn(e);
    Gr(function() {
      r.current.length !== e.length && E(!1, "Cannot change the amount of sensor hooks after mounting");
    });
  });
}
var sd = {
  input: !0,
  button: !0,
  textarea: !0,
  select: !0,
  option: !0,
  optgroup: !0,
  video: !0,
  audio: !0
};
function Gi(e, r) {
  if (r == null)
    return !1;
  var t = Boolean(sd[r.tagName.toLowerCase()]);
  if (t)
    return !0;
  var n = r.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : r === e ? !1 : Gi(e, r.parentElement);
}
function ud(e, r) {
  var t = r.target;
  return Fr(t) ? Gi(e, t) : !1;
}
var cd = function(e) {
  return Le(e.getBoundingClientRect()).center;
};
function dd(e) {
  return e instanceof Mi(e).Element;
}
var fd = function() {
  var e = "matches";
  if (typeof document > "u")
    return e;
  var r = [e, "msMatchesSelector", "webkitMatchesSelector"], t = He(r, function(n) {
    return n in Element.prototype;
  });
  return t || e;
}();
function ki(e, r) {
  return e == null ? null : e[fd](r) ? e : ki(e.parentElement, r);
}
function pd(e, r) {
  return e.closest ? e.closest(r) : ki(e, r);
}
function vd(e) {
  return "[" + fr.contextId + '="' + e + '"]';
}
function gd(e, r) {
  var t = r.target;
  if (!dd(t))
    return se("event.target must be a Element"), null;
  var n = vd(e), a = pd(t, n);
  return a ? Fr(a) ? a : (se("drag handle must be a HTMLElement"), null) : null;
}
function md(e, r) {
  var t = gd(e, r);
  return t ? t.getAttribute(fr.draggableId) : null;
}
function bd(e, r) {
  var t = "[" + kt.contextId + '="' + e + '"]', n = ei(document.querySelectorAll(t)), a = He(n, function(i) {
    return i.getAttribute(kt.id) === r;
  });
  return a ? Fr(a) ? a : (se("Draggable element is not a HTMLElement"), null) : null;
}
function hd(e) {
  e.preventDefault();
}
function Ur(e) {
  var r = e.expected, t = e.phase, n = e.isLockActive, a = e.shouldWarn;
  return n() ? r !== t ? (a && se(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ` + r + `
        You called an action from outdated phase: ` + t + `

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (a && se(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function Wi(e) {
  var r = e.lockAPI, t = e.store, n = e.registry, a = e.draggableId;
  if (r.isClaimed())
    return !1;
  var i = n.draggable.findById(a);
  return i ? !(!i.options.isEnabled || !Ti(t.getState(), a)) : (se("Unable to find draggable with id: " + a), !1);
}
function yd(e) {
  var r = e.lockAPI, t = e.contextId, n = e.store, a = e.registry, i = e.draggableId, o = e.forceSensorStop, l = e.sourceEvent, s = Wi({
    lockAPI: r,
    store: n,
    registry: a,
    draggableId: i
  });
  if (!s)
    return null;
  var d = a.draggable.getById(i), f = bd(t, d.descriptor.id);
  if (!f)
    return se("Unable to find draggable element with id: " + i), null;
  if (l && !d.options.canDragInteractiveElements && ud(f, l))
    return null;
  var u = r.claim(o || Ue), c = "PRE_DRAG";
  function p() {
    return d.options.shouldRespectForcePress;
  }
  function g() {
    return r.isActive(u);
  }
  function m(M, R) {
    Ur({
      expected: M,
      phase: c,
      isLockActive: g,
      shouldWarn: !0
    }) && n.dispatch(R());
  }
  var h = m.bind(null, "DRAGGING");
  function b(M) {
    function R() {
      r.release(), c = "COMPLETED";
    }
    c !== "PRE_DRAG" && (R(), c !== "PRE_DRAG" && E(!1, "Cannot lift in phase " + c)), n.dispatch(au(M.liftActionArgs)), c = "DRAGGING";
    function H(O, _) {
      if (_ === void 0 && (_ = {
        shouldBlockNextClick: !1
      }), M.cleanup(), _.shouldBlockNextClick) {
        var K = Me(window, [{
          eventName: "click",
          fn: hd,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(K);
      }
      R(), n.dispatch(wi({
        reason: O
      }));
    }
    return j({
      isActive: function() {
        return Ur({
          expected: "DRAGGING",
          phase: c,
          isLockActive: g,
          shouldWarn: !1
        });
      },
      shouldRespectForcePress: p,
      drop: function(_) {
        return H("DROP", _);
      },
      cancel: function(_) {
        return H("CANCEL", _);
      }
    }, M.actions);
  }
  function x(M) {
    var R = Tr(function(O) {
      h(function() {
        return xi({
          client: O
        });
      });
    }), H = b({
      liftActionArgs: {
        id: i,
        clientSelection: M,
        movementMode: "FLUID"
      },
      cleanup: function() {
        return R.cancel();
      },
      actions: {
        move: R
      }
    });
    return j({}, H, {
      move: R
    });
  }
  function I() {
    var M = {
      moveUp: function() {
        return h(pu);
      },
      moveRight: function() {
        return h(gu);
      },
      moveDown: function() {
        return h(vu);
      },
      moveLeft: function() {
        return h(mu);
      }
    };
    return b({
      liftActionArgs: {
        id: i,
        clientSelection: cd(f),
        movementMode: "SNAP"
      },
      cleanup: Ue,
      actions: M
    });
  }
  function y() {
    var M = Ur({
      expected: "PRE_DRAG",
      phase: c,
      isLockActive: g,
      shouldWarn: !0
    });
    M && r.release();
  }
  var N = {
    isActive: function() {
      return Ur({
        expected: "PRE_DRAG",
        phase: c,
        isLockActive: g,
        shouldWarn: !1
      });
    },
    shouldRespectForcePress: p,
    fluidLift: x,
    snapLift: I,
    abort: y
  };
  return N;
}
var xd = [Jc, rd, od];
function wd(e) {
  var r = e.contextId, t = e.store, n = e.registry, a = e.customSensors, i = e.enableDefaultSensors, o = [].concat(i ? xd : [], a || []), l = Qr(function() {
    return Gc();
  })[0], s = G(function(x, I) {
    x.isDragging && !I.isDragging && l.tryAbandon();
  }, [l]);
  Te(function() {
    var x = t.getState(), I = t.subscribe(function() {
      var y = t.getState();
      s(x, y), x = y;
    });
    return I;
  }, [l, t, s]), Te(function() {
    return l.tryAbandon;
  }, [l.tryAbandon]);
  var d = G(function(b) {
    return Wi({
      lockAPI: l,
      registry: n,
      store: t,
      draggableId: b
    });
  }, [l, n, t]), f = G(function(b, x, I) {
    return yd({
      lockAPI: l,
      registry: n,
      contextId: r,
      store: t,
      draggableId: b,
      forceSensorStop: x,
      sourceEvent: I && I.sourceEvent ? I.sourceEvent : null
    });
  }, [r, l, n, t]), u = G(function(b) {
    return md(r, b);
  }, [r]), c = G(function(b) {
    var x = n.draggable.findById(b);
    return x ? x.options : null;
  }, [n.draggable]), p = G(function() {
    !l.isClaimed() || (l.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(an()));
  }, [l, t]), g = G(l.isClaimed, [l]), m = J(function() {
    return {
      canGetLock: d,
      tryGetLock: f,
      findClosestDraggableId: u,
      findOptionsForDraggable: c,
      tryReleaseLock: p,
      isLockClaimed: g
    };
  }, [d, f, u, c, p, g]);
  ld(o);
  for (var h = 0; h < o.length; h++)
    o[h](m);
}
var Cd = function(r) {
  return {
    onBeforeCapture: r.onBeforeCapture,
    onBeforeDragStart: r.onBeforeDragStart,
    onDragStart: r.onDragStart,
    onDragEnd: r.onDragEnd,
    onDragUpdate: r.onDragUpdate
  };
};
function Cr(e) {
  return e.current || E(!1, "Could not find store from lazy ref"), e.current;
}
function Ed(e) {
  var r = e.contextId, t = e.setCallbacks, n = e.sensors, a = e.nonce, i = e.dragHandleUsageInstructions, o = ne(null);
  Fc();
  var l = mn(e), s = G(function() {
    return Cd(l.current);
  }, [l]), d = Ic(r), f = Ac({
    contextId: r,
    text: i
  }), u = xc(r, a), c = G(function(O) {
    Cr(o).dispatch(O);
  }, []), p = J(function() {
    return kn({
      publishWhileDragging: ou,
      updateDroppableScroll: su,
      updateDroppableIsEnabled: uu,
      updateDroppableIsCombineEnabled: cu,
      collectionStarting: lu
    }, c);
  }, [c]), g = Ec(), m = J(function() {
    return Zu(g, p);
  }, [g, p]), h = J(function() {
    return gc(j({
      scrollWindow: Qu,
      scrollDroppable: m.scrollDroppable
    }, kn({
      move: xi
    }, c)));
  }, [m.scrollDroppable, c]), b = wc(r), x = J(function() {
    return qu({
      announce: d,
      autoScroller: h,
      dimensionMarshal: m,
      focusMarshal: b,
      getResponders: s,
      styleMarshal: u
    });
  }, [d, h, m, b, s, u]);
  o.current && o.current !== x && se("unexpected store change"), o.current = x;
  var I = G(function() {
    var O = Cr(o), _ = O.getState();
    _.phase !== "IDLE" && O.dispatch(an());
  }, []), y = G(function() {
    var O = Cr(o).getState();
    return O.isDragging || O.phase === "DROP_ANIMATING";
  }, []), N = J(function() {
    return {
      isDragging: y,
      tryAbort: I
    };
  }, [y, I]);
  t(N);
  var M = G(function(O) {
    return Ti(Cr(o).getState(), O);
  }, []), R = G(function() {
    return er(Cr(o).getState());
  }, []), H = J(function() {
    return {
      marshal: m,
      focus: b,
      contextId: r,
      canLift: M,
      isMovementAllowed: R,
      dragHandleUsageInstructionsId: f,
      registry: g
    };
  }, [r, m, f, b, M, R, g]);
  return wd({
    contextId: r,
    store: x,
    registry: g,
    customSensors: n,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), Ge(function() {
    return I;
  }, [I]), te.createElement(it.Provider, {
    value: H
  }, te.createElement(Wa, {
    context: pn,
    store: x
  }, e.children));
}
var Dd = 0;
function Sd() {
  return J(function() {
    return "" + Dd++;
  }, []);
}
function Id(e) {
  var r = Sd(), t = e.dragHandleUsageInstructions || Yr.dragHandleUsageInstructions;
  return te.createElement(zl, null, function(n) {
    return te.createElement(Ed, {
      nonce: e.nonce,
      contextId: r,
      setCallbacks: n,
      dragHandleUsageInstructions: t,
      enableDefaultSensors: e.enableDefaultSensors,
      sensors: e.sensors,
      onBeforeCapture: e.onBeforeCapture,
      onBeforeDragStart: e.onBeforeDragStart,
      onDragStart: e.onDragStart,
      onDragUpdate: e.onDragUpdate,
      onDragEnd: e.onDragEnd
    }, e.children);
  });
}
var hn = function(r) {
  return function(t) {
    return r === t;
  };
}, Pd = hn("scroll"), Td = hn("auto"), Rd = hn("visible"), wa = function(r, t) {
  return t(r.overflowX) || t(r.overflowY);
}, Ad = function(r, t) {
  return t(r.overflowX) && t(r.overflowY);
}, ji = function(r) {
  var t = window.getComputedStyle(r), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return wa(n, Pd) || wa(n, Td);
}, Od = function() {
  var r = Br(), t = document.documentElement;
  if (t || E(!1), !ji(r))
    return !1;
  var n = window.getComputedStyle(t), a = {
    overflowX: n.overflowX,
    overflowY: n.overflowY
  };
  return Ad(a, Rd) || se(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Ui = function e(r) {
  return r == null ? null : r === document.body ? Od() ? r : null : r === document.documentElement ? null : ji(r) ? r : e(r.parentElement);
}, Md = function(e) {
  if (!!e) {
    var r = Ui(e.parentElement);
    !r || se(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
  }
}, Wt = function(e) {
  return {
    x: e.scrollLeft,
    y: e.scrollTop
  };
}, Bd = function e(r) {
  if (!r)
    return !1;
  var t = window.getComputedStyle(r);
  return t.position === "fixed" ? !0 : e(r.parentElement);
}, Nd = function(e) {
  var r = Ui(e), t = Bd(e);
  return {
    closestScrollable: r,
    isFixedOnPage: t
  };
}, Ld = function(e) {
  var r = e.descriptor, t = e.isEnabled, n = e.isCombineEnabled, a = e.isFixedOnPage, i = e.direction, o = e.client, l = e.page, s = e.closest, d = function() {
    if (!s)
      return null;
    var p = s.scrollSize, g = s.client, m = Si({
      scrollHeight: p.scrollHeight,
      scrollWidth: p.scrollWidth,
      height: g.paddingBox.height,
      width: g.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: g,
      scrollSize: p,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: m,
        diff: {
          value: ve,
          displacement: ve
        }
      }
    };
  }(), f = i === "vertical" ? Qt : ii, u = cr({
    page: l,
    withPlaceholder: null,
    axis: f,
    frame: d
  }), c = {
    descriptor: r,
    isCombineEnabled: n,
    isFixedOnPage: a,
    axis: f,
    isEnabled: t,
    client: o,
    page: l,
    frame: d,
    subject: u
  };
  return c;
}, Fd = function(r, t) {
  var n = Ka(r);
  if (!t || r !== t)
    return n;
  var a = n.paddingBox.top - t.scrollTop, i = n.paddingBox.left - t.scrollLeft, o = a + t.scrollHeight, l = i + t.scrollWidth, s = {
    top: a,
    right: l,
    bottom: o,
    left: i
  }, d = qt(s, n.border), f = Kt({
    borderBox: d,
    margin: n.margin,
    border: n.border,
    padding: n.padding
  });
  return f;
}, Gd = function(e) {
  var r = e.ref, t = e.descriptor, n = e.env, a = e.windowScroll, i = e.direction, o = e.isDropDisabled, l = e.isCombineEnabled, s = e.shouldClipSubject, d = n.closestScrollable, f = Fd(r, d), u = zr(f, a), c = function() {
    if (!d)
      return null;
    var g = Ka(d), m = {
      scrollHeight: d.scrollHeight,
      scrollWidth: d.scrollWidth
    };
    return {
      client: g,
      page: zr(g, a),
      scroll: Wt(d),
      scrollSize: m,
      shouldClipSubject: s
    };
  }(), p = Ld({
    descriptor: t,
    isEnabled: !o,
    isCombineEnabled: l,
    isFixedOnPage: n.isFixedOnPage,
    direction: i,
    client: f,
    page: u,
    closest: c
  });
  return p;
}, kd = {
  passive: !1
}, Wd = {
  passive: !0
}, Ca = function(e) {
  return e.shouldPublishImmediately ? kd : Wd;
};
function Zr(e) {
  var r = $t(e);
  return r || E(!1, "Could not find required context"), r;
}
var $r = function(r) {
  return r && r.env.closestScrollable || null;
};
function jd(e) {
  var r = ne(null), t = Zr(it), n = vn("droppable"), a = t.registry, i = t.marshal, o = mn(e), l = J(function() {
    return {
      id: e.droppableId,
      type: e.type,
      mode: e.mode
    };
  }, [e.droppableId, e.mode, e.type]), s = ne(l), d = J(function() {
    return pe(function(y, N) {
      r.current || E(!1, "Can only update scroll when dragging");
      var M = {
        x: y,
        y: N
      };
      i.updateDroppableScroll(l.id, M);
    });
  }, [l.id, i]), f = G(function() {
    var y = r.current;
    return !y || !y.env.closestScrollable ? ve : Wt(y.env.closestScrollable);
  }, []), u = G(function() {
    var y = f();
    d(y.x, y.y);
  }, [f, d]), c = J(function() {
    return Tr(u);
  }, [u]), p = G(function() {
    var y = r.current, N = $r(y);
    y && N || E(!1, "Could not find scroll options while scrolling");
    var M = y.scrollOptions;
    if (M.shouldPublishImmediately) {
      u();
      return;
    }
    c();
  }, [c, u]), g = G(function(y, N) {
    r.current && E(!1, "Cannot collect a droppable while a drag is occurring");
    var M = o.current, R = M.getDroppableRef();
    R || E(!1, "Cannot collect without a droppable ref");
    var H = Nd(R), O = {
      ref: R,
      descriptor: l,
      env: H,
      scrollOptions: N
    };
    r.current = O;
    var _ = Gd({
      ref: R,
      descriptor: l,
      env: H,
      windowScroll: y,
      direction: M.direction,
      isDropDisabled: M.isDropDisabled,
      isCombineEnabled: M.isCombineEnabled,
      shouldClipSubject: !M.ignoreContainerClipping
    }), K = H.closestScrollable;
    return K && (K.setAttribute(ma.contextId, t.contextId), K.addEventListener("scroll", p, Ca(O.scrollOptions)), Md(K)), _;
  }, [t.contextId, l, p, o]), m = G(function() {
    var y = r.current, N = $r(y);
    return y && N || E(!1, "Can only recollect Droppable client for Droppables that have a scroll container"), Wt(N);
  }, []), h = G(function() {
    var y = r.current;
    y || E(!1, "Cannot stop drag when no active drag");
    var N = $r(y);
    r.current = null, N && (c.cancel(), N.removeAttribute(ma.contextId), N.removeEventListener("scroll", p, Ca(y.scrollOptions)));
  }, [p, c]), b = G(function(y) {
    var N = r.current;
    N || E(!1, "Cannot scroll when there is no drag");
    var M = $r(N);
    M || E(!1, "Cannot scroll a droppable with no closest scrollable"), M.scrollTop += y.y, M.scrollLeft += y.x;
  }, []), x = J(function() {
    return {
      getDimensionAndWatchScroll: g,
      getScrollWhileDragging: m,
      dragStopped: h,
      scroll: b
    };
  }, [h, g, m, b]), I = J(function() {
    return {
      uniqueId: n,
      descriptor: l,
      callbacks: x
    };
  }, [x, l, n]);
  Te(function() {
    return s.current = I.descriptor, a.droppable.register(I), function() {
      r.current && (se("Unsupported: changing the droppableId or type of a Droppable during a drag"), h()), a.droppable.unregister(I);
    };
  }, [x, l, h, I, i, a.droppable]), Te(function() {
    !r.current || i.updateDroppableIsEnabled(s.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Te(function() {
    !r.current || i.updateDroppableIsCombineEnabled(s.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function St() {
}
var Ea = {
  width: 0,
  height: 0,
  margin: Ql
}, Ud = function(r) {
  var t = r.isAnimatingOpenOnMount, n = r.placeholder, a = r.animate;
  return t || a === "close" ? Ea : {
    height: n.client.borderBox.height,
    width: n.client.borderBox.width,
    margin: n.client.margin
  };
}, $d = function(r) {
  var t = r.isAnimatingOpenOnMount, n = r.placeholder, a = r.animate, i = Ud({
    isAnimatingOpenOnMount: t,
    placeholder: n,
    animate: a
  });
  return {
    display: n.display,
    boxSizing: "border-box",
    width: i.width,
    height: i.height,
    marginTop: i.margin.top,
    marginRight: i.margin.right,
    marginBottom: i.margin.bottom,
    marginLeft: i.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: a !== "none" ? Sr.placeholder : null
  };
};
function Vd(e) {
  var r = ne(null), t = G(function() {
    !r.current || (clearTimeout(r.current), r.current = null);
  }, []), n = e.animate, a = e.onTransitionEnd, i = e.onClose, o = e.contextId, l = Qr(e.animate === "open"), s = l[0], d = l[1];
  Ge(function() {
    return s ? n !== "open" ? (t(), d(!1), St) : r.current ? St : (r.current = setTimeout(function() {
      r.current = null, d(!1);
    }), t) : St;
  }, [n, s, t]);
  var f = G(function(c) {
    c.propertyName === "height" && (a(), n === "close" && i());
  }, [n, i, a]), u = $d({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return te.createElement(e.placeholder.tagName, {
    style: u,
    "data-rbd-placeholder-context-id": o,
    onTransitionEnd: f,
    ref: e.innerRef
  });
}
var Yd = te.memo(Vd), yn = te.createContext(null);
function $i(e) {
  e && Fr(e) || E(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/using-inner-ref.md
  `);
}
function It(e) {
  return typeof e == "boolean";
}
function Pt(e, r) {
  r.forEach(function(t) {
    return t(e);
  });
}
var Hd = [function(r) {
  var t = r.props;
  t.droppableId || E(!1, "A Droppable requires a droppableId prop"), typeof t.droppableId != "string" && E(!1, "A Droppable requires a [string] droppableId. Provided: [" + typeof t.droppableId + "]");
}, function(r) {
  var t = r.props;
  It(t.isDropDisabled) || E(!1, "isDropDisabled must be a boolean"), It(t.isCombineEnabled) || E(!1, "isCombineEnabled must be a boolean"), It(t.ignoreContainerClipping) || E(!1, "ignoreContainerClipping must be a boolean");
}, function(r) {
  var t = r.getDroppableRef;
  $i(t());
}], _d = [function(r) {
  var t = r.props, n = r.getPlaceholderRef;
  if (!!t.placeholder) {
    var a = n();
    a || se(`
      Droppable setup issue [droppableId: "` + t.droppableId + `"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/droppable.md
    `);
  }
}], zd = [function(r) {
  var t = r.props;
  t.renderClone || E(!1, "Must provide a clone render function (renderClone) for virtual lists");
}, function(r) {
  var t = r.getPlaceholderRef;
  t() && E(!1, "Expected virtual list to not have a placeholder");
}];
function qd(e) {
  Gr(function() {
    Pt(e, Hd), e.props.mode === "standard" && Pt(e, _d), e.props.mode === "virtual" && Pt(e, zd);
  });
}
var Kd = function(e) {
  Aa(r, e);
  function r() {
    for (var n, a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return n = e.call.apply(e, [this].concat(i)) || this, n.state = {
      isVisible: Boolean(n.props.on),
      data: n.props.on,
      animate: n.props.shouldAnimate && n.props.on ? "open" : "none"
    }, n.onClose = function() {
      n.state.animate === "close" && n.setState({
        isVisible: !1
      });
    }, n;
  }
  r.getDerivedStateFromProps = function(a, i) {
    return a.shouldAnimate ? a.on ? {
      isVisible: !0,
      data: a.on,
      animate: "open"
    } : i.isVisible ? {
      isVisible: !0,
      data: i.data,
      animate: "close"
    } : {
      isVisible: !1,
      animate: "close",
      data: null
    } : {
      isVisible: Boolean(a.on),
      data: a.on,
      animate: "none"
    };
  };
  var t = r.prototype;
  return t.render = function() {
    if (!this.state.isVisible)
      return null;
    var a = {
      onClose: this.onClose,
      data: this.state.data,
      animate: this.state.animate
    };
    return this.props.children(a);
  }, r;
}(te.PureComponent), Da = {
  dragging: 5e3,
  dropAnimating: 4500
}, Xd = function(r, t) {
  return t ? Sr.drop(t.duration) : r ? Sr.snap : Sr.fluid;
}, Jd = function(r, t) {
  return r ? t ? Mr.opacity.drop : Mr.opacity.combining : null;
}, Zd = function(r) {
  return r.forceShouldAnimate != null ? r.forceShouldAnimate : r.mode === "SNAP";
};
function Qd(e) {
  var r = e.dimension, t = r.client, n = e.offset, a = e.combineWith, i = e.dropping, o = Boolean(a), l = Zd(e), s = Boolean(i), d = s ? Ft.drop(n, o) : Ft.moveTo(n), f = {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: Xd(l, i),
    transform: d,
    opacity: Jd(o, s),
    zIndex: s ? Da.dropAnimating : Da.dragging,
    pointerEvents: "none"
  };
  return f;
}
function ef(e) {
  return {
    transform: Ft.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? null : "none"
  };
}
function rf(e) {
  return e.type === "DRAGGING" ? Qd(e) : ef(e);
}
function tf(e, r, t) {
  t === void 0 && (t = ve);
  var n = window.getComputedStyle(r), a = r.getBoundingClientRect(), i = qa(a, n), o = zr(i, t), l = {
    client: i,
    tagName: r.tagName.toLowerCase(),
    display: n.display
  }, s = {
    x: i.marginBox.width,
    y: i.marginBox.height
  }, d = {
    descriptor: e,
    placeholder: l,
    displaceBy: s,
    client: i,
    page: o
  };
  return d;
}
function nf(e) {
  var r = vn("draggable"), t = e.descriptor, n = e.registry, a = e.getDraggableRef, i = e.canDragInteractiveElements, o = e.shouldRespectForcePress, l = e.isEnabled, s = J(function() {
    return {
      canDragInteractiveElements: i,
      shouldRespectForcePress: o,
      isEnabled: l
    };
  }, [i, l, o]), d = G(function(p) {
    var g = a();
    return g || E(!1, "Cannot get dimension when no ref is set"), tf(t, g, p);
  }, [t, a]), f = J(function() {
    return {
      uniqueId: r,
      descriptor: t,
      options: s,
      getDimension: d
    };
  }, [t, d, s, r]), u = ne(f), c = ne(!0);
  Te(function() {
    return n.draggable.register(u.current), function() {
      return n.draggable.unregister(u.current);
    };
  }, [n.draggable]), Te(function() {
    if (c.current) {
      c.current = !1;
      return;
    }
    var p = u.current;
    u.current = f, n.draggable.update(f, p);
  }, [f, n.draggable]);
}
function af(e, r, t) {
  Gr(function() {
    function n(i) {
      return "Draggable[id: " + i + "]: ";
    }
    var a = e.draggableId;
    a || E(!1, "Draggable requires a draggableId"), typeof a != "string" && E(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ` + typeof a + "] (value: " + a + ")"), ns(e.index) || E(!1, n(a) + " requires an integer index prop"), e.mapped.type !== "DRAGGING" && ($i(t()), e.isEnabled && (Bi(r, a) || E(!1, n(a) + " Unable to find drag handle")));
  });
}
function of(e) {
  gn(function() {
    var r = ne(e);
    Gr(function() {
      e !== r.current && E(!1, "Draggable isClone prop value changed during component life");
    }, [e]);
  });
}
function lf(e) {
  e.preventDefault();
}
function sf(e) {
  var r = ne(null), t = G(function(O) {
    r.current = O;
  }, []), n = G(function() {
    return r.current;
  }, []), a = Zr(it), i = a.contextId, o = a.dragHandleUsageInstructionsId, l = a.registry, s = Zr(yn), d = s.type, f = s.droppableId, u = J(function() {
    return {
      id: e.draggableId,
      index: e.index,
      type: d,
      droppableId: f
    };
  }, [e.draggableId, e.index, d, f]), c = e.children, p = e.draggableId, g = e.isEnabled, m = e.shouldRespectForcePress, h = e.canDragInteractiveElements, b = e.isClone, x = e.mapped, I = e.dropAnimationFinished;
  if (af(e, i, n), of(b), !b) {
    var y = J(function() {
      return {
        descriptor: u,
        registry: l,
        getDraggableRef: n,
        canDragInteractiveElements: h,
        shouldRespectForcePress: m,
        isEnabled: g
      };
    }, [u, l, n, h, m, g]);
    nf(y);
  }
  var N = J(function() {
    return g ? {
      tabIndex: 0,
      role: "button",
      "aria-describedby": o,
      "data-rbd-drag-handle-draggable-id": p,
      "data-rbd-drag-handle-context-id": i,
      draggable: !1,
      onDragStart: lf
    } : null;
  }, [i, o, p, g]), M = G(function(O) {
    x.type === "DRAGGING" && (!x.dropping || O.propertyName === "transform" && I());
  }, [I, x]), R = J(function() {
    var O = rf(x), _ = x.type === "DRAGGING" && x.dropping ? M : null, K = {
      innerRef: t,
      draggableProps: {
        "data-rbd-draggable-context-id": i,
        "data-rbd-draggable-id": p,
        style: O,
        onTransitionEnd: _
      },
      dragHandleProps: N
    };
    return K;
  }, [i, N, p, x, M, t]), H = J(function() {
    return {
      draggableId: u.id,
      type: u.type,
      source: {
        index: u.index,
        droppableId: u.droppableId
      }
    };
  }, [u.droppableId, u.id, u.index, u.type]);
  return c(R, x.snapshot, H);
}
var Vi = function(e, r) {
  return e === r;
}, Yi = function(e) {
  var r = e.combine, t = e.destination;
  return t ? t.droppableId : r ? r.droppableId : null;
}, uf = function(r) {
  return r.combine ? r.combine.draggableId : null;
}, cf = function(r) {
  return r.at && r.at.type === "COMBINE" ? r.at.combine.draggableId : null;
};
function df() {
  var e = pe(function(a, i) {
    return {
      x: a,
      y: i
    };
  }), r = pe(function(a, i, o, l, s) {
    return {
      isDragging: !0,
      isClone: i,
      isDropAnimating: Boolean(s),
      dropAnimation: s,
      mode: a,
      draggingOver: o,
      combineWith: l,
      combineTargetFor: null
    };
  }), t = pe(function(a, i, o, l, s, d, f) {
    return {
      mapped: {
        type: "DRAGGING",
        dropping: null,
        draggingOver: s,
        combineWith: d,
        mode: i,
        offset: a,
        dimension: o,
        forceShouldAnimate: f,
        snapshot: r(i, l, s, d, null)
      }
    };
  }), n = function(i, o) {
    if (i.isDragging) {
      if (i.critical.draggable.id !== o.draggableId)
        return null;
      var l = i.current.client.offset, s = i.dimensions.draggables[o.draggableId], d = Pe(i.impact), f = cf(i.impact), u = i.forceShouldAnimate;
      return t(e(l.x, l.y), i.movementMode, s, o.isClone, d, f, u);
    }
    if (i.phase === "DROP_ANIMATING") {
      var c = i.completed;
      if (c.result.draggableId !== o.draggableId)
        return null;
      var p = o.isClone, g = i.dimensions.draggables[o.draggableId], m = c.result, h = m.mode, b = Yi(m), x = uf(m), I = i.dropDuration, y = {
        duration: I,
        curve: ln.drop,
        moveTo: i.newHomeClientOffset,
        opacity: x ? Mr.opacity.drop : null,
        scale: x ? Mr.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: i.newHomeClientOffset,
          dimension: g,
          dropping: y,
          draggingOver: b,
          combineWith: x,
          mode: h,
          forceShouldAnimate: null,
          snapshot: r(h, p, b, x, y)
        }
      };
    }
    return null;
  };
  return n;
}
function Hi(e) {
  return {
    isDragging: !1,
    isDropAnimating: !1,
    isClone: !1,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor: e,
    combineWith: null
  };
}
var ff = {
  mapped: {
    type: "SECONDARY",
    offset: ve,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Hi(null)
  }
};
function pf() {
  var e = pe(function(o, l) {
    return {
      x: o,
      y: l
    };
  }), r = pe(Hi), t = pe(function(o, l, s) {
    return l === void 0 && (l = null), {
      mapped: {
        type: "SECONDARY",
        offset: o,
        combineTargetFor: l,
        shouldAnimateDisplacement: s,
        snapshot: r(l)
      }
    };
  }), n = function(l) {
    return l ? t(ve, l, !0) : null;
  }, a = function(l, s, d, f) {
    var u = d.displaced.visible[l], c = Boolean(f.inVirtualList && f.effected[l]), p = tt(d), g = p && p.draggableId === l ? s : null;
    if (!u) {
      if (!c)
        return n(g);
      if (d.displaced.invisible[l])
        return null;
      var m = pr(f.displacedBy.point), h = e(m.x, m.y);
      return t(h, g, !0);
    }
    if (c)
      return n(g);
    var b = d.displacedBy.point, x = e(b.x, b.y);
    return t(x, g, u.shouldAnimate);
  }, i = function(l, s) {
    if (l.isDragging)
      return l.critical.draggable.id === s.draggableId ? null : a(s.draggableId, l.critical.draggable.id, l.impact, l.afterCritical);
    if (l.phase === "DROP_ANIMATING") {
      var d = l.completed;
      return d.result.draggableId === s.draggableId ? null : a(s.draggableId, d.result.draggableId, d.impact, d.afterCritical);
    }
    return null;
  };
  return i;
}
var vf = function() {
  var r = df(), t = pf(), n = function(i, o) {
    return r(i, o) || t(i, o) || ff;
  };
  return n;
}, gf = {
  dropAnimationFinished: Ci
}, mf = _a(vf, gf, null, {
  context: pn,
  pure: !0,
  areStatePropsEqual: Vi
})(sf);
function _i(e) {
  var r = Zr(yn), t = r.isUsingCloneFor;
  return t === e.draggableId && !e.isClone ? null : te.createElement(mf, e);
}
function zi(e) {
  var r = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, t = Boolean(e.disableInteractiveElementBlocking), n = Boolean(e.shouldRespectForcePress);
  return te.createElement(_i, j({}, e, {
    isClone: !1,
    isEnabled: r,
    canDragInteractiveElements: t,
    shouldRespectForcePress: n
  }));
}
function bf(e) {
  var r = $t(it);
  r || E(!1, "Could not find app context");
  var t = r.contextId, n = r.isMovementAllowed, a = ne(null), i = ne(null), o = e.children, l = e.droppableId, s = e.type, d = e.mode, f = e.direction, u = e.ignoreContainerClipping, c = e.isDropDisabled, p = e.isCombineEnabled, g = e.snapshot, m = e.useClone, h = e.updateViewportMaxScroll, b = e.getContainerForClone, x = G(function() {
    return a.current;
  }, []), I = G(function(X) {
    a.current = X;
  }, []), y = G(function() {
    return i.current;
  }, []), N = G(function(X) {
    i.current = X;
  }, []);
  qd({
    props: e,
    getDroppableRef: x,
    getPlaceholderRef: y
  });
  var M = G(function() {
    n() && h({
      maxScroll: Pi()
    });
  }, [n, h]);
  jd({
    droppableId: l,
    type: s,
    mode: d,
    direction: f,
    isDropDisabled: c,
    isCombineEnabled: p,
    ignoreContainerClipping: u,
    getDroppableRef: x
  });
  var R = te.createElement(Kd, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, function(X) {
    var C = X.onClose, S = X.data, B = X.animate;
    return te.createElement(Yd, {
      placeholder: S,
      onClose: C,
      innerRef: N,
      animate: B,
      contextId: t,
      onTransitionEnd: M
    });
  }), H = J(function() {
    return {
      innerRef: I,
      placeholder: R,
      droppableProps: {
        "data-rbd-droppable-id": l,
        "data-rbd-droppable-context-id": t
      }
    };
  }, [t, l, R, I]), O = m ? m.dragging.draggableId : null, _ = J(function() {
    return {
      droppableId: l,
      type: s,
      isUsingCloneFor: O
    };
  }, [l, O, s]);
  function K() {
    if (!m)
      return null;
    var X = m.dragging, C = m.render, S = te.createElement(_i, {
      draggableId: X.draggableId,
      index: X.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, function(B, F) {
      return C(B, F, X);
    });
    return go.createPortal(S, b());
  }
  return te.createElement(yn.Provider, {
    value: _
  }, o(H, g), K());
}
var Tt = function(r, t) {
  return r === t.droppable.type;
}, Sa = function(r, t) {
  return t.draggables[r.draggable.id];
}, hf = function() {
  var r = {
    placeholder: null,
    shouldAnimatePlaceholder: !0,
    snapshot: {
      isDraggingOver: !1,
      draggingOverWith: null,
      draggingFromThisWith: null,
      isUsingPlaceholder: !1
    },
    useClone: null
  }, t = j({}, r, {
    shouldAnimatePlaceholder: !1
  }), n = pe(function(o) {
    return {
      draggableId: o.id,
      type: o.type,
      source: {
        index: o.index,
        droppableId: o.droppableId
      }
    };
  }), a = pe(function(o, l, s, d, f, u) {
    var c = f.descriptor.id, p = f.descriptor.droppableId === o;
    if (p) {
      var g = u ? {
        render: u,
        dragging: n(f.descriptor)
      } : null, m = {
        isDraggingOver: s,
        draggingOverWith: s ? c : null,
        draggingFromThisWith: c,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: f.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: m,
        useClone: g
      };
    }
    if (!l)
      return t;
    if (!d)
      return r;
    var h = {
      isDraggingOver: s,
      draggingOverWith: c,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: f.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: h,
      useClone: null
    };
  }), i = function(l, s) {
    var d = s.droppableId, f = s.type, u = !s.isDropDisabled, c = s.renderClone;
    if (l.isDragging) {
      var p = l.critical;
      if (!Tt(f, p))
        return t;
      var g = Sa(p, l.dimensions), m = Pe(l.impact) === d;
      return a(d, u, m, m, g, c);
    }
    if (l.phase === "DROP_ANIMATING") {
      var h = l.completed;
      if (!Tt(f, h.critical))
        return t;
      var b = Sa(h.critical, l.dimensions);
      return a(d, u, Yi(h.result) === d, Pe(h.impact) === d, b, c);
    }
    if (l.phase === "IDLE" && l.completed && !l.shouldFlush) {
      var x = l.completed;
      if (!Tt(f, x.critical))
        return t;
      var I = Pe(x.impact) === d, y = Boolean(x.impact.at && x.impact.at.type === "COMBINE"), N = x.critical.droppable.id === d;
      return I ? y ? r : t : N ? r : t;
    }
    return t;
  };
  return i;
}, yf = {
  updateViewportMaxScroll: fu
};
function xf() {
  return document.body || E(!1, "document.body is not ready"), document.body;
}
var wf = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: xf
}, xn = _a(hf, yf, null, {
  context: pn,
  pure: !0,
  areStatePropsEqual: Vi
})(bf);
xn.defaultProps = wf;
function Cf() {
  for (var e = 0, r, t, n = ""; e < arguments.length; )
    (r = arguments[e++]) && (t = qi(r)) && (n && (n += " "), n += t);
  return n;
}
function qi(e) {
  if (typeof e == "string")
    return e;
  for (var r, t = "", n = 0; n < e.length; n++)
    e[n] && (r = qi(e[n])) && (t && (t += " "), t += r);
  return t;
}
function jt() {
  return jt = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, jt.apply(this, arguments);
}
function Ef(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var r = 0, t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function a(i, o) {
    t.set(i, o), r++, r > e && (r = 0, n = t, t = /* @__PURE__ */ new Map());
  }
  return {
    get: function(o) {
      var l = t.get(o);
      if (l !== void 0)
        return l;
      if ((l = n.get(o)) !== void 0)
        return a(o, l), l;
    },
    set: function(o, l) {
      t.has(o) ? t.set(o, l) : a(o, l);
    }
  };
}
var wn = "-";
function Df(e) {
  var r = If(e);
  function t(a) {
    var i = a.split(wn);
    return i[0] === "" && i.length !== 1 && i.shift(), Ki(i, r) || Sf(a);
  }
  function n(a) {
    return e.conflictingClassGroups[a] || [];
  }
  return {
    getClassGroupId: t,
    getConflictingClassGroupIds: n
  };
}
function Ki(e, r) {
  var t;
  if (e.length === 0)
    return r.classGroupId;
  var n = e[0], a = r.nextPart.get(n), i = a ? Ki(e.slice(1), a) : void 0;
  if (i)
    return i;
  if (r.validators.length !== 0) {
    var o = e.join(wn);
    return (t = r.validators.find(function(l) {
      var s = l.validator;
      return s(o);
    })) == null ? void 0 : t.classGroupId;
  }
}
var Ia = /^\[(.+)\]$/;
function Sf(e) {
  if (Ia.test(e)) {
    var r = Ia.exec(e)[1], t = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}
function If(e) {
  var r = e.theme, t = e.prefix, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, a = Tf(Object.entries(e.classGroups), t);
  return a.forEach(function(i) {
    var o = i[0], l = i[1];
    Ut(l, n, o, r);
  }), n;
}
function Ut(e, r, t, n) {
  e.forEach(function(a) {
    if (typeof a == "string") {
      var i = a === "" ? r : Pa(r, a);
      i.classGroupId = t;
      return;
    }
    if (typeof a == "function") {
      if (Pf(a)) {
        Ut(a(n), r, t, n);
        return;
      }
      r.validators.push({
        validator: a,
        classGroupId: t
      });
      return;
    }
    Object.entries(a).forEach(function(o) {
      var l = o[0], s = o[1];
      Ut(s, Pa(r, l), t, n);
    });
  });
}
function Pa(e, r) {
  var t = e;
  return r.split(wn).forEach(function(n) {
    t.nextPart.has(n) || t.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(n);
  }), t;
}
function Pf(e) {
  return e.isThemeGetter;
}
function Tf(e, r) {
  return r ? e.map(function(t) {
    var n = t[0], a = t[1], i = a.map(function(o) {
      return typeof o == "string" ? r + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(function(l) {
        var s = l[0], d = l[1];
        return [r + s, d];
      })) : o;
    });
    return [n, i];
  }) : e;
}
var Xi = "!";
function Rf(e) {
  var r = e.separator || ":";
  return function(n) {
    for (var a = 0, i = [], o = 0, l = 0; l < n.length; l++) {
      var s = n[l];
      a === 0 && s === r[0] && (r.length === 1 || n.slice(l, l + r.length) === r) && (i.push(n.slice(o, l)), o = l + r.length), s === "[" ? a++ : s === "]" && a--;
    }
    var d = i.length === 0 ? n : n.substring(o), f = d.startsWith(Xi), u = f ? d.substring(1) : d;
    return {
      modifiers: i,
      hasImportantModifier: f,
      baseClassName: u
    };
  };
}
function Af(e) {
  if (e.length <= 1)
    return e;
  var r = [], t = [];
  return e.forEach(function(n) {
    var a = n[0] === "[";
    a ? (r.push.apply(r, t.sort().concat([n])), t = []) : t.push(n);
  }), r.push.apply(r, t.sort()), r;
}
function Of(e) {
  return jt({
    cache: Ef(e.cacheSize),
    splitModifiers: Rf(e)
  }, Df(e));
}
var Mf = /\s+/;
function Bf(e, r) {
  var t = r.splitModifiers, n = r.getClassGroupId, a = r.getConflictingClassGroupIds, i = /* @__PURE__ */ new Set();
  return e.trim().split(Mf).map(function(o) {
    var l = t(o), s = l.modifiers, d = l.hasImportantModifier, f = l.baseClassName, u = n(f);
    if (!u)
      return {
        isTailwindClass: !1,
        originalClassName: o
      };
    var c = Af(s).join(":"), p = d ? c + Xi : c;
    return {
      isTailwindClass: !0,
      modifierId: p,
      classGroupId: u,
      originalClassName: o
    };
  }).reverse().filter(function(o) {
    if (!o.isTailwindClass)
      return !0;
    var l = o.modifierId, s = o.classGroupId, d = l + s;
    return i.has(d) ? !1 : (i.add(d), a(s).forEach(function(f) {
      return i.add(l + f);
    }), !0);
  }).reverse().map(function(o) {
    return o.originalClassName;
  }).join(" ");
}
function Nf() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  var n, a, i, o = l;
  function l(d) {
    var f = r[0], u = r.slice(1), c = u.reduce(function(p, g) {
      return g(p);
    }, f());
    return n = Of(c), a = n.cache.get, i = n.cache.set, o = s, s(d);
  }
  function s(d) {
    var f = a(d);
    if (f)
      return f;
    var u = Bf(d, n);
    return i(d, u), u;
  }
  return function() {
    return o(Cf.apply(null, arguments));
  };
}
function ue(e) {
  var r = function(n) {
    return n[e] || [];
  };
  return r.isThemeGetter = !0, r;
}
var _e = /^\[(.+)\]$/, Lf = /^\d+\/\d+$/, Ff = /* @__PURE__ */ new Set(["px", "full", "screen"]), Gf = /^(\d+)?(xs|sm|md|lg|xl)$/, kf = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh)/, Wf = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Ne(e) {
  return !Number.isNaN(Number(e)) || Ff.has(e) || Lf.test(e) || rr(e);
}
function rr(e) {
  var r, t = (r = _e.exec(e)) == null ? void 0 : r[1];
  return t ? t.startsWith("length:") || kf.test(t) : !1;
}
function jf(e) {
  var r, t = (r = _e.exec(e)) == null ? void 0 : r[1];
  return t ? t.startsWith("size:") : !1;
}
function Uf(e) {
  var r, t = (r = _e.exec(e)) == null ? void 0 : r[1];
  return t ? t.startsWith("position:") : !1;
}
function $f(e) {
  var r, t = (r = _e.exec(e)) == null ? void 0 : r[1];
  return t ? t.startsWith("url(") || t.startsWith("url:") : !1;
}
function Ta(e) {
  var r, t = (r = _e.exec(e)) == null ? void 0 : r[1];
  return t ? !Number.isNaN(Number(t)) || t.startsWith("number:") : !1;
}
function De(e) {
  var r, t = (r = _e.exec(e)) == null ? void 0 : r[1];
  return t ? Number.isInteger(Number(t)) : Number.isInteger(Number(e));
}
function ge(e) {
  return _e.test(e);
}
function Er() {
  return !0;
}
function je(e) {
  return Gf.test(e);
}
function Vf(e) {
  var r, t = (r = _e.exec(e)) == null ? void 0 : r[1];
  return t ? Wf.test(t) : !1;
}
function Yf() {
  var e = ue("colors"), r = ue("spacing"), t = ue("blur"), n = ue("brightness"), a = ue("borderColor"), i = ue("borderRadius"), o = ue("borderSpacing"), l = ue("borderWidth"), s = ue("contrast"), d = ue("grayscale"), f = ue("hueRotate"), u = ue("invert"), c = ue("gap"), p = ue("gradientColorStops"), g = ue("inset"), m = ue("margin"), h = ue("opacity"), b = ue("padding"), x = ue("saturate"), I = ue("scale"), y = ue("sepia"), N = ue("skew"), M = ue("space"), R = ue("translate"), H = function() {
    return ["auto", "contain", "none"];
  }, O = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, _ = function() {
    return ["auto", r];
  }, K = function() {
    return ["", Ne];
  }, X = function() {
    return ["auto", De];
  }, C = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, S = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, B = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, F = function() {
    return ["start", "end", "center", "between", "around", "evenly"];
  }, T = function() {
    return ["", "0", ge];
  }, k = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Er],
      spacing: [Ne],
      blur: ["none", "", je, rr],
      brightness: [De],
      borderColor: [e],
      borderRadius: ["none", "", "full", je, rr],
      borderSpacing: [r],
      borderWidth: K(),
      contrast: [De],
      grayscale: T(),
      hueRotate: [De],
      invert: T(),
      gap: [r],
      gradientColorStops: [e],
      inset: _(),
      margin: _(),
      opacity: [De],
      padding: [r],
      saturate: [De],
      scale: [De],
      sepia: T(),
      skew: [De, ge],
      space: [r],
      translate: [r]
    },
    classGroups: {
      aspect: [{
        aspect: ["auto", "square", "video", ge]
      }],
      container: ["container"],
      columns: [{
        columns: [je]
      }],
      "break-after": [{
        "break-after": k()
      }],
      "break-before": [{
        "break-before": k()
      }],
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      box: [{
        box: ["border", "content"]
      }],
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      float: [{
        float: ["right", "left", "none"]
      }],
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      "object-position": [{
        object: [].concat(C(), [ge])
      }],
      overflow: [{
        overflow: O()
      }],
      "overflow-x": [{
        "overflow-x": O()
      }],
      "overflow-y": [{
        "overflow-y": O()
      }],
      overscroll: [{
        overscroll: H()
      }],
      "overscroll-x": [{
        "overscroll-x": H()
      }],
      "overscroll-y": [{
        "overscroll-y": H()
      }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{
        inset: [g]
      }],
      "inset-x": [{
        "inset-x": [g]
      }],
      "inset-y": [{
        "inset-y": [g]
      }],
      top: [{
        top: [g]
      }],
      right: [{
        right: [g]
      }],
      bottom: [{
        bottom: [g]
      }],
      left: [{
        left: [g]
      }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{
        z: [De]
      }],
      basis: [{
        basis: [r]
      }],
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      flex: [{
        flex: ["1", "auto", "initial", "none", ge]
      }],
      grow: [{
        grow: T()
      }],
      shrink: [{
        shrink: T()
      }],
      order: [{
        order: ["first", "last", "none", De]
      }],
      "grid-cols": [{
        "grid-cols": [Er]
      }],
      "col-start-end": [{
        col: ["auto", {
          span: [De]
        }]
      }],
      "col-start": [{
        "col-start": X()
      }],
      "col-end": [{
        "col-end": X()
      }],
      "grid-rows": [{
        "grid-rows": [Er]
      }],
      "row-start-end": [{
        row: ["auto", {
          span: [De]
        }]
      }],
      "row-start": [{
        "row-start": X()
      }],
      "row-end": [{
        "row-end": X()
      }],
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", ge]
      }],
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ge]
      }],
      gap: [{
        gap: [c]
      }],
      "gap-x": [{
        "gap-x": [c]
      }],
      "gap-y": [{
        "gap-y": [c]
      }],
      "justify-content": [{
        justify: F()
      }],
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      "align-content": [{
        content: [].concat(F(), ["baseline"])
      }],
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      "place-content": [{
        "place-content": [].concat(F(), ["baseline", "stretch"])
      }],
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      p: [{
        p: [b]
      }],
      px: [{
        px: [b]
      }],
      py: [{
        py: [b]
      }],
      pt: [{
        pt: [b]
      }],
      pr: [{
        pr: [b]
      }],
      pb: [{
        pb: [b]
      }],
      pl: [{
        pl: [b]
      }],
      m: [{
        m: [m]
      }],
      mx: [{
        mx: [m]
      }],
      my: [{
        my: [m]
      }],
      mt: [{
        mt: [m]
      }],
      mr: [{
        mr: [m]
      }],
      mb: [{
        mb: [m]
      }],
      ml: [{
        ml: [m]
      }],
      "space-x": [{
        "space-x": [M]
      }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{
        "space-y": [M]
      }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{
        w: ["auto", "min", "max", "fit", r]
      }],
      "min-w": [{
        "min-w": ["min", "max", "fit", Ne]
      }],
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [je]
        }, je, rr]
      }],
      h: [{
        h: [r, "auto", "min", "max", "fit"]
      }],
      "min-h": [{
        "min-h": ["min", "max", "fit", Ne]
      }],
      "max-h": [{
        "max-h": [r, "min", "max", "fit"]
      }],
      "font-size": [{
        text: ["base", je, rr]
      }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ta]
      }],
      "font-family": [{
        font: [Er]
      }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", rr]
      }],
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ne]
      }],
      "list-style-type": [{
        list: ["none", "disc", "decimal", ge]
      }],
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      "placeholder-color": [{
        placeholder: [e]
      }],
      "placeholder-opacity": [{
        "placeholder-opacity": [h]
      }],
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      "text-color": [{
        text: [e]
      }],
      "text-opacity": [{
        "text-opacity": [h]
      }],
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      "text-decoration-style": [{
        decoration: [].concat(S(), ["wavy"])
      }],
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ne]
      }],
      "underline-offset": [{
        "underline-offset": ["auto", Ne]
      }],
      "text-decoration-color": [{
        decoration: [e]
      }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      indent: [{
        indent: [r]
      }],
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", rr]
      }],
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap"]
      }],
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      content: [{
        content: ["none", ge]
      }],
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      "bg-opacity": [{
        "bg-opacity": [h]
      }],
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      "bg-position": [{
        bg: [].concat(C(), [Uf])
      }],
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      "bg-size": [{
        bg: ["auto", "cover", "contain", jf]
      }],
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, $f]
      }],
      "bg-color": [{
        bg: [e]
      }],
      "gradient-from": [{
        from: [p]
      }],
      "gradient-via": [{
        via: [p]
      }],
      "gradient-to": [{
        to: [p]
      }],
      rounded: [{
        rounded: [i]
      }],
      "rounded-t": [{
        "rounded-t": [i]
      }],
      "rounded-r": [{
        "rounded-r": [i]
      }],
      "rounded-b": [{
        "rounded-b": [i]
      }],
      "rounded-l": [{
        "rounded-l": [i]
      }],
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      "rounded-br": [{
        "rounded-br": [i]
      }],
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      "border-w": [{
        border: [l]
      }],
      "border-w-x": [{
        "border-x": [l]
      }],
      "border-w-y": [{
        "border-y": [l]
      }],
      "border-w-t": [{
        "border-t": [l]
      }],
      "border-w-r": [{
        "border-r": [l]
      }],
      "border-w-b": [{
        "border-b": [l]
      }],
      "border-w-l": [{
        "border-l": [l]
      }],
      "border-opacity": [{
        "border-opacity": [h]
      }],
      "border-style": [{
        border: [].concat(S(), ["hidden"])
      }],
      "divide-x": [{
        "divide-x": [l]
      }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{
        "divide-y": [l]
      }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{
        "divide-opacity": [h]
      }],
      "divide-style": [{
        divide: S()
      }],
      "border-color": [{
        border: [a]
      }],
      "border-color-x": [{
        "border-x": [a]
      }],
      "border-color-y": [{
        "border-y": [a]
      }],
      "border-color-t": [{
        "border-t": [a]
      }],
      "border-color-r": [{
        "border-r": [a]
      }],
      "border-color-b": [{
        "border-b": [a]
      }],
      "border-color-l": [{
        "border-l": [a]
      }],
      "divide-color": [{
        divide: [a]
      }],
      "outline-style": [{
        outline: [""].concat(S())
      }],
      "outline-offset": [{
        "outline-offset": [Ne]
      }],
      "outline-w": [{
        outline: [Ne]
      }],
      "outline-color": [{
        outline: [e]
      }],
      "ring-w": [{
        ring: K()
      }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{
        ring: [e]
      }],
      "ring-opacity": [{
        "ring-opacity": [h]
      }],
      "ring-offset-w": [{
        "ring-offset": [Ne]
      }],
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      shadow: [{
        shadow: ["", "inner", "none", je, Vf]
      }],
      "shadow-color": [{
        shadow: [Er]
      }],
      opacity: [{
        opacity: [h]
      }],
      "mix-blend": [{
        "mix-blend": B()
      }],
      "bg-blend": [{
        "bg-blend": B()
      }],
      filter: [{
        filter: ["", "none"]
      }],
      blur: [{
        blur: [t]
      }],
      brightness: [{
        brightness: [n]
      }],
      contrast: [{
        contrast: [s]
      }],
      "drop-shadow": [{
        "drop-shadow": ["", "none", je, ge]
      }],
      grayscale: [{
        grayscale: [d]
      }],
      "hue-rotate": [{
        "hue-rotate": [f]
      }],
      invert: [{
        invert: [u]
      }],
      saturate: [{
        saturate: [x]
      }],
      sepia: [{
        sepia: [y]
      }],
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      "backdrop-blur": [{
        "backdrop-blur": [t]
      }],
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      "backdrop-contrast": [{
        "backdrop-contrast": [s]
      }],
      "backdrop-grayscale": [{
        "backdrop-grayscale": [d]
      }],
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [f]
      }],
      "backdrop-invert": [{
        "backdrop-invert": [u]
      }],
      "backdrop-opacity": [{
        "backdrop-opacity": [h]
      }],
      "backdrop-saturate": [{
        "backdrop-saturate": [x]
      }],
      "backdrop-sepia": [{
        "backdrop-sepia": [y]
      }],
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      "border-spacing": [{
        "border-spacing": [o]
      }],
      "border-spacing-x": [{
        "border-spacing-x": [o]
      }],
      "border-spacing-y": [{
        "border-spacing-y": [o]
      }],
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ge]
      }],
      duration: [{
        duration: [De]
      }],
      ease: [{
        ease: ["linear", "in", "out", "in-out", ge]
      }],
      delay: [{
        delay: [De]
      }],
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ge]
      }],
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      scale: [{
        scale: [I]
      }],
      "scale-x": [{
        "scale-x": [I]
      }],
      "scale-y": [{
        "scale-y": [I]
      }],
      rotate: [{
        rotate: [De, ge]
      }],
      "translate-x": [{
        "translate-x": [R]
      }],
      "translate-y": [{
        "translate-y": [R]
      }],
      "skew-x": [{
        "skew-x": [N]
      }],
      "skew-y": [{
        "skew-y": [N]
      }],
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ge]
      }],
      accent: [{
        accent: ["auto", e]
      }],
      appearance: ["appearance-none"],
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ge]
      }],
      "caret-color": [{
        caret: [e]
      }],
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      "scroll-m": [{
        "scroll-m": [r]
      }],
      "scroll-mx": [{
        "scroll-mx": [r]
      }],
      "scroll-my": [{
        "scroll-my": [r]
      }],
      "scroll-mt": [{
        "scroll-mt": [r]
      }],
      "scroll-mr": [{
        "scroll-mr": [r]
      }],
      "scroll-mb": [{
        "scroll-mb": [r]
      }],
      "scroll-ml": [{
        "scroll-ml": [r]
      }],
      "scroll-p": [{
        "scroll-p": [r]
      }],
      "scroll-px": [{
        "scroll-px": [r]
      }],
      "scroll-py": [{
        "scroll-py": [r]
      }],
      "scroll-pt": [{
        "scroll-pt": [r]
      }],
      "scroll-pr": [{
        "scroll-pr": [r]
      }],
      "scroll-pb": [{
        "scroll-pb": [r]
      }],
      "scroll-pl": [{
        "scroll-pl": [r]
      }],
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", ge]
      }],
      fill: [{
        fill: [e, "none"]
      }],
      "stroke-w": [{
        stroke: [Ne, Ta]
      }],
      stroke: [{
        stroke: [e, "none"]
      }],
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      "col-start-end": ["col-start", "col-end"],
      "row-start-end": ["row-start", "row-end"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    }
  };
}
var We = /* @__PURE__ */ Nf(Yf);
const Hf = ({
  row: e,
  index: r,
  rowWrapperClassNames: t,
  rowContentClassNames: n,
  rowImageClassNames: a,
  rowTagsClassNames: i,
  rowTagsWrapperClassNames: o,
  onClickRow: l
}) => {
  const s = We("p-2 flex rounded bg-white", t), d = We(
    "mr-2 rounded-full h-12 w-12",
    a
  ), f = We(
    "pb-1 text-sm",
    n
  ), u = We(
    "py-1",
    o
  ), c = We(
    "inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2",
    i
  );
  return /* @__PURE__ */ Se(zi, { draggableId: e.id, index: r, children: (p, g) => {
    var m;
    return /* @__PURE__ */ Ir(
      "div",
      {
        ref: p.innerRef,
        ...p.draggableProps,
        ...p.dragHandleProps,
        className: `${s} ${g.isDragging ? "shadow-md" : ""} }`,
        onClick: () => l && l(e),
        children: [
          e.img && /* @__PURE__ */ Se(
            "img",
            {
              src: e.img,
              alt: e.content,
              className: d
            }
          ),
          /* @__PURE__ */ Ir("div", { children: [
            /* @__PURE__ */ Se("p", { className: f, children: e.content }),
            ((m = e == null ? void 0 : e.tags) == null ? void 0 : m.length) && /* @__PURE__ */ Se("div", { className: u, children: e.tags.map((h, b) => /* @__PURE__ */ Se(
              "span",
              {
                className: c,
                children: h
              },
              `${e.id}-${b}-tags`
            )) })
          ] })
        ]
      }
    );
  } });
}, _f = te.memo(
  function({ rows: r, rowClassNames: t, onClickRow: n }) {
    return /* @__PURE__ */ Se(bo, { children: r.map((a, i) => /* @__PURE__ */ Se(Hf, { index: i, row: a, ...t, onClickRow: n }, a.id)) });
  },
  function(r, t) {
    return r.rows === t.rows;
  }
), zf = ({
  column: e,
  index: r,
  rows: t,
  columnTitleClassNames: n,
  columnTitleWrapperClassNames: a,
  columnListClassNames: i,
  rowClassNames: o,
  isDragColumnsEnabled: l,
  onClickRow: s
}) => {
  const d = We(
    "p-2 font-bold",
    n
  ), f = We(
    "w-[250px]",
    a
  ), u = We(
    "p-2 min-h-[200px]",
    i
  );
  return /* @__PURE__ */ Se(zi, { draggableId: e.id, index: r, isDragDisabled: !l, children: (c) => /* @__PURE__ */ Ir(
    "div",
    {
      ...c.draggableProps,
      ref: c.innerRef,
      className: f,
      children: [
        /* @__PURE__ */ Se(
          "div",
          {
            ...c.dragHandleProps,
            className: d,
            children: e.content
          }
        ),
        /* @__PURE__ */ Se(xn, { droppableId: e.id, children: (p, g) => /* @__PURE__ */ Ir(
          "div",
          {
            ref: p.innerRef,
            ...p.droppableProps,
            className: u,
            children: [
              /* @__PURE__ */ Se(_f, { rows: t, rowClassNames: o, onClickRow: s }),
              p.placeholder
            ]
          }
        ) })
      ]
    }
  ) });
}, qf = te.memo(function({
  column: r,
  rowsMap: t,
  index: n,
  columnClassNames: a,
  rowClassNames: i,
  isDragColumnsEnabled: o,
  onClickRow: l
}) {
  const s = r.rowIds.map((d) => t[d]);
  return /* @__PURE__ */ Se(
    zf,
    {
      column: r,
      index: n,
      rows: s,
      ...a,
      rowClassNames: i,
      isDragColumnsEnabled: o,
      onClickRow: l
    }
  );
}), Jf = ({
  data: e,
  wrapperClassNames: r,
  columnClassNames: t,
  rowClassNames: n,
  isDragColumnsEnabled: a,
  onClickRow: i,
  onDragEnd: o
}) => {
  const [l, s] = Qr(e), d = We(
    "p-4 flex flex-row space-x-4",
    r
  );
  return /* @__PURE__ */ Se(Id, { onDragEnd: (u) => {
    const { destination: c, source: p, draggableId: g, type: m } = u;
    if (!c || c.droppableId === p.droppableId && c.index === p.index)
      return;
    if (o && o(u), m === "column") {
      const R = Array.from(l.columnOrder);
      R.splice(p.index, 1), R.splice(c.index, 0, g), console.log({ newColumnOrder: R });
      const H = {
        ...l,
        columnOrder: R
      };
      s(H);
      return;
    }
    const h = l.columns[p.droppableId], b = l.columns[c.droppableId];
    if (h === b) {
      const R = Array.from(h.rowIds);
      R.splice(p.index, 1), R.splice(c.index, 0, g);
      const H = {
        ...h,
        rowIds: R
      }, O = {
        ...l,
        columns: {
          ...l.columns,
          [H.id]: H
        }
      };
      s(O);
      return;
    }
    const x = Array.from(h.rowIds);
    x.splice(p.index, 1);
    const I = {
      ...h,
      rowIds: x
    }, y = Array.from(b.rowIds);
    y.splice(c.index, 0, g);
    const N = {
      ...b,
      rowIds: y
    }, M = {
      ...l,
      columns: {
        ...l.columns,
        [I.id]: I,
        [N.id]: N
      }
    };
    s(M);
  }, children: /* @__PURE__ */ Se(xn, { droppableId: "all-columns", direction: "horizontal", type: "column", children: (u, c) => /* @__PURE__ */ Ir(
    "div",
    {
      ref: u.innerRef,
      ...u.droppableProps,
      className: d,
      children: [
        l.columnOrder.map((p, g) => {
          const m = l.columns[p];
          return /* @__PURE__ */ Se(
            qf,
            {
              onClickRow: i,
              column: m,
              index: g,
              rowsMap: l.rows,
              columnClassNames: t,
              rowClassNames: n,
              isDragColumnsEnabled: a
            },
            m.id
          );
        }),
        u.placeholder
      ]
    }
  ) }) });
};
export {
  Jf as DragAndDrop
};
