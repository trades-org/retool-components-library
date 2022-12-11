import te, { useLayoutEffect as Ma, useEffect as ke, useMemo as Le, useContext as Ht, useReducer as bi, useRef as ne, useState as cr, useCallback as Ln } from "react";
import hi, { unstable_batchedUpdates as yi } from "react-dom";
var tt = { exports: {} }, _r = {};
(function() {
  var e = te, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), l = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g = Symbol.iterator, m = "@@iterator";
  function h(v) {
    if (v === null || typeof v != "object")
      return null;
    var I = g && v[g] || v[m];
    return typeof I == "function" ? I : null;
  }
  var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function x(v) {
    {
      for (var I = arguments.length, R = new Array(I > 1 ? I - 1 : 0), _ = 1; _ < I; _++)
        R[_ - 1] = arguments[_];
      S("error", v, R);
    }
  }
  function S(v, I, R) {
    {
      var _ = b.ReactDebugCurrentFrame, Z = _.getStackAddendum();
      Z !== "" && (I += "%s", R = R.concat([Z]));
      var ie = R.map(function(X) {
        return String(X);
      });
      ie.unshift("Warning: " + I), Function.prototype.apply.call(console[v], console, ie);
    }
  }
  var y = !1, N = !1, M = !1, P = !1, k = !1, T;
  T = Symbol.for("react.module.reference");
  function H(v) {
    return !!(typeof v == "string" || typeof v == "function" || v === n || v === o || k || v === a || v === u || v === d || P || v === p || y || N || M || typeof v == "object" && v !== null && (v.$$typeof === f || v.$$typeof === c || v.$$typeof === i || v.$$typeof === l || v.$$typeof === s || v.$$typeof === T || v.getModuleId !== void 0));
  }
  function q(v, I, R) {
    var _ = v.displayName;
    if (_)
      return _;
    var Z = I.displayName || I.name || "";
    return Z !== "" ? R + "(" + Z + ")" : R;
  }
  function G(v) {
    return v.displayName || "Context";
  }
  function w(v) {
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
      case o:
        return "Profiler";
      case a:
        return "StrictMode";
      case u:
        return "Suspense";
      case d:
        return "SuspenseList";
    }
    if (typeof v == "object")
      switch (v.$$typeof) {
        case l:
          var I = v;
          return G(I) + ".Consumer";
        case i:
          var R = v;
          return G(R._context) + ".Provider";
        case s:
          return q(v, v.render, "ForwardRef");
        case c:
          var _ = v.displayName || null;
          return _ !== null ? _ : w(v.type) || "Memo";
        case f: {
          var Z = v, ie = Z._payload, X = Z._init;
          try {
            return w(X(ie));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  var D = Object.assign, O = 0, L, A, j, B, U, Y, z;
  function V() {
  }
  V.__reactDisabledLog = !0;
  function Q() {
    {
      if (O === 0) {
        L = console.log, A = console.info, j = console.warn, B = console.error, U = console.group, Y = console.groupCollapsed, z = console.groupEnd;
        var v = {
          configurable: !0,
          enumerable: !0,
          value: V,
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
      O++;
    }
  }
  function ae() {
    {
      if (O--, O === 0) {
        var v = {
          configurable: !0,
          enumerable: !0,
          writable: !0
        };
        Object.defineProperties(console, {
          log: D({}, v, {
            value: L
          }),
          info: D({}, v, {
            value: A
          }),
          warn: D({}, v, {
            value: j
          }),
          error: D({}, v, {
            value: B
          }),
          group: D({}, v, {
            value: U
          }),
          groupCollapsed: D({}, v, {
            value: Y
          }),
          groupEnd: D({}, v, {
            value: z
          })
        });
      }
      O < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
  }
  var oe = b.ReactCurrentDispatcher, xe;
  function we(v, I, R) {
    {
      if (xe === void 0)
        try {
          throw Error();
        } catch (Z) {
          var _ = Z.stack.trim().match(/\n( *(at )?)/);
          xe = _ && _[1] || "";
        }
      return `
` + xe + v;
    }
  }
  var be = !1, Ce;
  {
    var F = typeof WeakMap == "function" ? WeakMap : Map;
    Ce = new F();
  }
  function C(v, I) {
    if (!v || be)
      return "";
    {
      var R = Ce.get(v);
      if (R !== void 0)
        return R;
    }
    var _;
    be = !0;
    var Z = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var ie;
    ie = oe.current, oe.current = null, Q();
    try {
      if (I) {
        var X = function() {
          throw Error();
        };
        if (Object.defineProperty(X.prototype, "props", {
          set: function() {
            throw Error();
          }
        }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(X, []);
          } catch (We) {
            _ = We;
          }
          Reflect.construct(v, [], X);
        } else {
          try {
            X.call();
          } catch (We) {
            _ = We;
          }
          v.call(X.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (We) {
          _ = We;
        }
        v();
      }
    } catch (We) {
      if (We && _ && typeof We.stack == "string") {
        for (var K = We.stack.split(`
`), Ee = _.stack.split(`
`), ce = K.length - 1, de = Ee.length - 1; ce >= 1 && de >= 0 && K[ce] !== Ee[de]; )
          de--;
        for (; ce >= 1 && de >= 0; ce--, de--)
          if (K[ce] !== Ee[de]) {
            if (ce !== 1 || de !== 1)
              do
                if (ce--, de--, de < 0 || K[ce] !== Ee[de]) {
                  var Ae = `
` + K[ce].replace(" at new ", " at ");
                  return v.displayName && Ae.includes("<anonymous>") && (Ae = Ae.replace("<anonymous>", v.displayName)), typeof v == "function" && Ce.set(v, Ae), Ae;
                }
              while (ce >= 1 && de >= 0);
            break;
          }
      }
    } finally {
      be = !1, oe.current = ie, ae(), Error.prepareStackTrace = Z;
    }
    var ir = v ? v.displayName || v.name : "", Nn = ir ? we(ir) : "";
    return typeof v == "function" && Ce.set(v, Nn), Nn;
  }
  function he(v, I, R) {
    return C(v, !1);
  }
  function fe(v) {
    var I = v.prototype;
    return !!(I && I.isReactComponent);
  }
  function Re(v, I, R) {
    if (v == null)
      return "";
    if (typeof v == "function")
      return C(v, fe(v));
    if (typeof v == "string")
      return we(v);
    switch (v) {
      case u:
        return we("Suspense");
      case d:
        return we("SuspenseList");
    }
    if (typeof v == "object")
      switch (v.$$typeof) {
        case s:
          return he(v.render);
        case c:
          return Re(v.type, I, R);
        case f: {
          var _ = v, Z = _._payload, ie = _._init;
          try {
            return Re(ie(Z), I, R);
          } catch {
          }
        }
      }
    return "";
  }
  var ze = Object.prototype.hasOwnProperty, ar = {}, qe = b.ReactDebugCurrentFrame;
  function Ke(v) {
    if (v) {
      var I = v._owner, R = Re(v.type, v._source, I ? I.type : null);
      qe.setExtraStackFrame(R);
    } else
      qe.setExtraStackFrame(null);
  }
  function mr(v, I, R, _, Z) {
    {
      var ie = Function.call.bind(ze);
      for (var X in v)
        if (ie(v, X)) {
          var K = void 0;
          try {
            if (typeof v[X] != "function") {
              var Ee = Error((_ || "React class") + ": " + R + " type `" + X + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof v[X] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw Ee.name = "Invariant Violation", Ee;
            }
            K = v[X](I, X, _, R, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (ce) {
            K = ce;
          }
          K && !(K instanceof Error) && (Ke(Z), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", R, X, typeof K), Ke(null)), K instanceof Error && !(K.message in ar) && (ar[K.message] = !0, Ke(Z), x("Failed %s type: %s", R, K.message), Ke(null));
        }
    }
  }
  var br = Array.isArray;
  function hr(v) {
    return br(v);
  }
  function Xe(v) {
    {
      var I = typeof Symbol == "function" && Symbol.toStringTag, R = I && v[Symbol.toStringTag] || v.constructor.name || "Object";
      return R;
    }
  }
  function yr(v) {
    try {
      return Dn(v), !1;
    } catch {
      return !0;
    }
  }
  function Dn(v) {
    return "" + v;
  }
  function In(v) {
    if (yr(v))
      return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(v)), Dn(v);
  }
  var xr = b.ReactCurrentOwner, ri = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  }, Sn, Pn, ut;
  ut = {};
  function ti(v) {
    if (ze.call(v, "ref")) {
      var I = Object.getOwnPropertyDescriptor(v, "ref").get;
      if (I && I.isReactWarning)
        return !1;
    }
    return v.ref !== void 0;
  }
  function ni(v) {
    if (ze.call(v, "key")) {
      var I = Object.getOwnPropertyDescriptor(v, "key").get;
      if (I && I.isReactWarning)
        return !1;
    }
    return v.key !== void 0;
  }
  function ai(v, I) {
    if (typeof v.ref == "string" && xr.current && I && xr.current.stateNode !== I) {
      var R = w(xr.current.type);
      ut[R] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(xr.current.type), v.ref), ut[R] = !0);
    }
  }
  function oi(v, I) {
    {
      var R = function() {
        Sn || (Sn = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
      };
      R.isReactWarning = !0, Object.defineProperty(v, "key", {
        get: R,
        configurable: !0
      });
    }
  }
  function ii(v, I) {
    {
      var R = function() {
        Pn || (Pn = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
      };
      R.isReactWarning = !0, Object.defineProperty(v, "ref", {
        get: R,
        configurable: !0
      });
    }
  }
  var li = function(v, I, R, _, Z, ie, X) {
    var K = {
      $$typeof: r,
      type: v,
      key: I,
      ref: R,
      props: X,
      _owner: ie
    };
    return K._store = {}, Object.defineProperty(K._store, "validated", {
      configurable: !1,
      enumerable: !1,
      writable: !0,
      value: !1
    }), Object.defineProperty(K, "_self", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: _
    }), Object.defineProperty(K, "_source", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: Z
    }), Object.freeze && (Object.freeze(K.props), Object.freeze(K)), K;
  };
  function si(v, I, R, _, Z) {
    {
      var ie, X = {}, K = null, Ee = null;
      R !== void 0 && (In(R), K = "" + R), ni(I) && (In(I.key), K = "" + I.key), ti(I) && (Ee = I.ref, ai(I, Z));
      for (ie in I)
        ze.call(I, ie) && !ri.hasOwnProperty(ie) && (X[ie] = I[ie]);
      if (v && v.defaultProps) {
        var ce = v.defaultProps;
        for (ie in ce)
          X[ie] === void 0 && (X[ie] = ce[ie]);
      }
      if (K || Ee) {
        var de = typeof v == "function" ? v.displayName || v.name || "Unknown" : v;
        K && oi(X, de), Ee && ii(X, de);
      }
      return li(v, K, Ee, Z, _, xr.current, X);
    }
  }
  var ct = b.ReactCurrentOwner, Tn = b.ReactDebugCurrentFrame;
  function or(v) {
    if (v) {
      var I = v._owner, R = Re(v.type, v._source, I ? I.type : null);
      Tn.setExtraStackFrame(R);
    } else
      Tn.setExtraStackFrame(null);
  }
  var dt;
  dt = !1;
  function ft(v) {
    return typeof v == "object" && v !== null && v.$$typeof === r;
  }
  function Rn() {
    {
      if (ct.current) {
        var v = w(ct.current.type);
        if (v)
          return `

Check the render method of \`` + v + "`.";
      }
      return "";
    }
  }
  function ui(v) {
    {
      if (v !== void 0) {
        var I = v.fileName.replace(/^.*[\\\/]/, ""), R = v.lineNumber;
        return `

Check your code at ` + I + ":" + R + ".";
      }
      return "";
    }
  }
  var An = {};
  function ci(v) {
    {
      var I = Rn();
      if (!I) {
        var R = typeof v == "string" ? v : v.displayName || v.name;
        R && (I = `

Check the top-level render call using <` + R + ">.");
      }
      return I;
    }
  }
  function On(v, I) {
    {
      if (!v._store || v._store.validated || v.key != null)
        return;
      v._store.validated = !0;
      var R = ci(I);
      if (An[R])
        return;
      An[R] = !0;
      var _ = "";
      v && v._owner && v._owner !== ct.current && (_ = " It was passed a child from " + w(v._owner.type) + "."), or(v), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', R, _), or(null);
    }
  }
  function Mn(v, I) {
    {
      if (typeof v != "object")
        return;
      if (hr(v))
        for (var R = 0; R < v.length; R++) {
          var _ = v[R];
          ft(_) && On(_, I);
        }
      else if (ft(v))
        v._store && (v._store.validated = !0);
      else if (v) {
        var Z = h(v);
        if (typeof Z == "function" && Z !== v.entries)
          for (var ie = Z.call(v), X; !(X = ie.next()).done; )
            ft(X.value) && On(X.value, I);
      }
    }
  }
  function di(v) {
    {
      var I = v.type;
      if (I == null || typeof I == "string")
        return;
      var R;
      if (typeof I == "function")
        R = I.propTypes;
      else if (typeof I == "object" && (I.$$typeof === s || I.$$typeof === c))
        R = I.propTypes;
      else
        return;
      if (R) {
        var _ = w(I);
        mr(R, v.props, "prop", _, v);
      } else if (I.PropTypes !== void 0 && !dt) {
        dt = !0;
        var Z = w(I);
        x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
      }
      typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function fi(v) {
    {
      for (var I = Object.keys(v.props), R = 0; R < I.length; R++) {
        var _ = I[R];
        if (_ !== "children" && _ !== "key") {
          or(v), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), or(null);
          break;
        }
      }
      v.ref !== null && (or(v), x("Invalid attribute `ref` supplied to `React.Fragment`."), or(null));
    }
  }
  function Bn(v, I, R, _, Z, ie) {
    {
      var X = H(v);
      if (!X) {
        var K = "";
        (v === void 0 || typeof v == "object" && v !== null && Object.keys(v).length === 0) && (K += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var Ee = ui(Z);
        Ee ? K += Ee : K += Rn();
        var ce;
        v === null ? ce = "null" : hr(v) ? ce = "array" : v !== void 0 && v.$$typeof === r ? (ce = "<" + (w(v.type) || "Unknown") + " />", K = " Did you accidentally export a JSX literal instead of a component?") : ce = typeof v, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ce, K);
      }
      var de = si(v, I, R, Z, ie);
      if (de == null)
        return de;
      if (X) {
        var Ae = I.children;
        if (Ae !== void 0)
          if (_)
            if (hr(Ae)) {
              for (var ir = 0; ir < Ae.length; ir++)
                Mn(Ae[ir], v);
              Object.freeze && Object.freeze(Ae);
            } else
              x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
          else
            Mn(Ae, v);
      }
      return v === n ? fi(de) : di(de), de;
    }
  }
  function pi(v, I, R) {
    return Bn(v, I, R, !0);
  }
  function vi(v, I, R) {
    return Bn(v, I, R, !1);
  }
  var gi = vi, mi = pi;
  _r.Fragment = n, _r.jsx = gi, _r.jsxs = mi;
})();
(function(e) {
  e.exports = _r;
})(tt);
const xi = tt.exports.Fragment, ye = tt.exports.jsx, Tr = tt.exports.jsxs;
function Ot(e, r) {
  return Ot = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Ot(e, r);
}
function Ba(e, r) {
  e.prototype = Object.create(r.prototype), e.prototype.constructor = e, Ot(e, r);
}
function $() {
  return $ = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, $.apply(this, arguments);
}
function Rr(e) {
  return Rr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Rr(e);
}
function wi(e, r) {
  if (Rr(e) !== "object" || e === null)
    return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r || "default");
    if (Rr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function Ci(e) {
  var r = wi(e, "string");
  return Rr(r) === "symbol" ? r : String(r);
}
function Ei(e, r, t) {
  return r = Ci(r), r in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function Fn(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Gn(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Fn(Object(t), !0).forEach(function(n) {
      Ei(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Fn(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
var kn = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), pt = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Wn = {
  INIT: "@@redux/INIT" + pt(),
  REPLACE: "@@redux/REPLACE" + pt(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + pt();
  }
};
function Di(e) {
  if (typeof e != "object" || e === null)
    return !1;
  for (var r = e; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return Object.getPrototypeOf(e) === r;
}
function Ii(e) {
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
  if (Ti(e))
    return "date";
  if (Pi(e))
    return "error";
  var t = Si(e);
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
function Si(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Pi(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Ti(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Ze(e) {
  var r = typeof e;
  return r = Ii(e), r;
}
function Na(e, r, t) {
  var n;
  if (typeof r == "function" && typeof t == "function" || typeof t == "function" && typeof arguments[3] == "function")
    throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof r == "function" && typeof t > "u" && (t = r, r = void 0), typeof t < "u") {
    if (typeof t != "function")
      throw new Error("Expected the enhancer to be a function. Instead, received: '" + Ze(t) + "'");
    return t(Na)(e, r);
  }
  if (typeof e != "function")
    throw new Error("Expected the root reducer to be a function. Instead, received: '" + Ze(e) + "'");
  var a = e, o = r, i = [], l = i, s = !1;
  function u() {
    l === i && (l = i.slice());
  }
  function d() {
    if (s)
      throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function c(m) {
    if (typeof m != "function")
      throw new Error("Expected the listener to be a function. Instead, received: '" + Ze(m) + "'");
    if (s)
      throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var h = !0;
    return u(), l.push(m), function() {
      if (!!h) {
        if (s)
          throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        h = !1, u();
        var x = l.indexOf(m);
        l.splice(x, 1), i = null;
      }
    };
  }
  function f(m) {
    if (!Di(m))
      throw new Error("Actions must be plain objects. Instead, the actual type was: '" + Ze(m) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof m.type > "u")
      throw new Error('Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (s)
      throw new Error("Reducers may not dispatch actions.");
    try {
      s = !0, o = a(o, m);
    } finally {
      s = !1;
    }
    for (var h = i = l, b = 0; b < h.length; b++) {
      var x = h[b];
      x();
    }
    return m;
  }
  function p(m) {
    if (typeof m != "function")
      throw new Error("Expected the nextReducer to be a function. Instead, received: '" + Ze(m));
    a = m, f({
      type: Wn.REPLACE
    });
  }
  function g() {
    var m, h = c;
    return m = {
      subscribe: function(x) {
        if (typeof x != "object" || x === null)
          throw new Error("Expected the observer to be an object. Instead, received: '" + Ze(x) + "'");
        function S() {
          x.next && x.next(d());
        }
        S();
        var y = h(S);
        return {
          unsubscribe: y
        };
      }
    }, m[kn] = function() {
      return this;
    }, m;
  }
  return f({
    type: Wn.INIT
  }), n = {
    dispatch: f,
    subscribe: c,
    getState: d,
    replaceReducer: p
  }, n[kn] = g, n;
}
function Ri(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function jn(e, r) {
  return function() {
    return r(e.apply(this, arguments));
  };
}
function Un(e, r) {
  if (typeof e == "function")
    return jn(e, r);
  if (typeof e != "object" || e === null)
    throw new Error("bindActionCreators expected an object or a function, but instead received: '" + Ze(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var t = {};
  for (var n in e) {
    var a = e[n];
    typeof a == "function" && (t[n] = jn(a, r));
  }
  return t;
}
function La() {
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
function Ai() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return function(n) {
    return function() {
      var a = n.apply(void 0, arguments), o = function() {
        throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, i = {
        getState: a.getState,
        dispatch: function() {
          return o.apply(void 0, arguments);
        }
      }, l = r.map(function(s) {
        return s(i);
      });
      return o = La.apply(void 0, l)(a.dispatch), Gn(Gn({}, a), {}, {
        dispatch: o
      });
    };
  };
}
function $n() {
}
typeof $n.name == "string" && $n.name !== "isCrushed" && Ri('You are currently using minified code outside of NODE_ENV === "production". This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) to ensure you have the correct code for your production build.');
var Qe = { exports: {} }, Yt = { exports: {} }, ee = {};
(function() {
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function S(C) {
    return typeof C == "string" || typeof C == "function" || C === n || C === u || C === o || C === a || C === c || C === f || typeof C == "object" && C !== null && (C.$$typeof === g || C.$$typeof === p || C.$$typeof === i || C.$$typeof === l || C.$$typeof === d || C.$$typeof === h || C.$$typeof === b || C.$$typeof === x || C.$$typeof === m);
  }
  function y(C) {
    if (typeof C == "object" && C !== null) {
      var he = C.$$typeof;
      switch (he) {
        case r:
          var fe = C.type;
          switch (fe) {
            case s:
            case u:
            case n:
            case o:
            case a:
            case c:
              return fe;
            default:
              var Re = fe && fe.$$typeof;
              switch (Re) {
                case l:
                case d:
                case g:
                case p:
                case i:
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
  var N = s, M = u, P = l, k = i, T = r, H = d, q = n, G = g, w = p, D = t, O = o, L = a, A = c, j = !1;
  function B(C) {
    return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), U(C) || y(C) === s;
  }
  function U(C) {
    return y(C) === u;
  }
  function Y(C) {
    return y(C) === l;
  }
  function z(C) {
    return y(C) === i;
  }
  function V(C) {
    return typeof C == "object" && C !== null && C.$$typeof === r;
  }
  function Q(C) {
    return y(C) === d;
  }
  function ae(C) {
    return y(C) === n;
  }
  function oe(C) {
    return y(C) === g;
  }
  function xe(C) {
    return y(C) === p;
  }
  function we(C) {
    return y(C) === t;
  }
  function be(C) {
    return y(C) === o;
  }
  function Ce(C) {
    return y(C) === a;
  }
  function F(C) {
    return y(C) === c;
  }
  ee.AsyncMode = N, ee.ConcurrentMode = M, ee.ContextConsumer = P, ee.ContextProvider = k, ee.Element = T, ee.ForwardRef = H, ee.Fragment = q, ee.Lazy = G, ee.Memo = w, ee.Portal = D, ee.Profiler = O, ee.StrictMode = L, ee.Suspense = A, ee.isAsyncMode = B, ee.isConcurrentMode = U, ee.isContextConsumer = Y, ee.isContextProvider = z, ee.isElement = V, ee.isForwardRef = Q, ee.isFragment = ae, ee.isLazy = oe, ee.isMemo = xe, ee.isPortal = we, ee.isProfiler = be, ee.isStrictMode = Ce, ee.isSuspense = F, ee.isValidElementType = S, ee.typeOf = y;
})();
(function(e) {
  e.exports = ee;
})(Yt);
var Vn = Object.getOwnPropertySymbols, Oi = Object.prototype.hasOwnProperty, Mi = Object.prototype.propertyIsEnumerable;
function Bi(e) {
  if (e == null)
    throw new TypeError("Object.assign cannot be called with null or undefined");
  return Object(e);
}
function Ni() {
  try {
    if (!Object.assign)
      return !1;
    var e = new String("abc");
    if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5")
      return !1;
    for (var r = {}, t = 0; t < 10; t++)
      r["_" + String.fromCharCode(t)] = t;
    var n = Object.getOwnPropertyNames(r).map(function(o) {
      return r[o];
    });
    if (n.join("") !== "0123456789")
      return !1;
    var a = {};
    return "abcdefghijklmnopqrst".split("").forEach(function(o) {
      a[o] = o;
    }), Object.keys(Object.assign({}, a)).join("") === "abcdefghijklmnopqrst";
  } catch {
    return !1;
  }
}
var Li = Ni() ? Object.assign : function(e, r) {
  for (var t, n = Bi(e), a, o = 1; o < arguments.length; o++) {
    t = Object(arguments[o]);
    for (var i in t)
      Oi.call(t, i) && (n[i] = t[i]);
    if (Vn) {
      a = Vn(t);
      for (var l = 0; l < a.length; l++)
        Mi.call(t, a[l]) && (n[a[l]] = t[a[l]]);
    }
  }
  return n;
}, Fi = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Fa = Fi, Ga = Function.call.bind(Object.prototype.hasOwnProperty), Mt = function() {
};
{
  var Gi = Fa, Bt = {}, ki = Ga;
  Mt = function(e) {
    var r = "Warning: " + e;
    typeof console < "u" && console.error(r);
    try {
      throw new Error(r);
    } catch {
    }
  };
}
function ka(e, r, t, n, a) {
  for (var o in e)
    if (ki(e, o)) {
      var i;
      try {
        if (typeof e[o] != "function") {
          var l = Error(
            (n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
          );
          throw l.name = "Invariant Violation", l;
        }
        i = e[o](r, o, n, t, null, Gi);
      } catch (u) {
        i = u;
      }
      if (i && !(i instanceof Error) && Mt(
        (n || "React class") + ": type specification of " + t + " `" + o + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof i + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
      ), i instanceof Error && !(i.message in Bt)) {
        Bt[i.message] = !0;
        var s = a ? a() : "";
        Mt(
          "Failed " + t + " type: " + i.message + (s ?? "")
        );
      }
    }
}
ka.resetWarningCache = function() {
  Bt = {};
};
var Wi = ka, ji = Yt.exports, Ui = Li, lr = Fa, vt = Ga, Hn = Wi, ur = function() {
};
ur = function(e) {
  var r = "Warning: " + e;
  typeof console < "u" && console.error(r);
  try {
    throw new Error(r);
  } catch {
  }
};
function Ur() {
  return null;
}
var $i = function(e, r) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = "@@iterator";
  function a(w) {
    var D = w && (t && w[t] || w[n]);
    if (typeof D == "function")
      return D;
  }
  var o = "<<anonymous>>", i = {
    array: d("array"),
    bigint: d("bigint"),
    bool: d("boolean"),
    func: d("function"),
    number: d("number"),
    object: d("object"),
    string: d("string"),
    symbol: d("symbol"),
    any: c(),
    arrayOf: f,
    element: p(),
    elementType: g(),
    instanceOf: m,
    node: S(),
    objectOf: b,
    oneOf: h,
    oneOfType: x,
    shape: N,
    exact: M
  };
  function l(w, D) {
    return w === D ? w !== 0 || 1 / w === 1 / D : w !== w && D !== D;
  }
  function s(w, D) {
    this.message = w, this.data = D && typeof D == "object" ? D : {}, this.stack = "";
  }
  s.prototype = Error.prototype;
  function u(w) {
    var D = {}, O = 0;
    function L(j, B, U, Y, z, V, Q) {
      if (Y = Y || o, V = V || U, Q !== lr) {
        if (r) {
          var ae = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ae.name = "Invariant Violation", ae;
        } else if (typeof console < "u") {
          var oe = Y + ":" + U;
          !D[oe] && O < 3 && (ur(
            "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + Y + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
          ), D[oe] = !0, O++);
        }
      }
      return B[U] == null ? j ? B[U] === null ? new s("The " + z + " `" + V + "` is marked as required " + ("in `" + Y + "`, but its value is `null`.")) : new s("The " + z + " `" + V + "` is marked as required in " + ("`" + Y + "`, but its value is `undefined`.")) : null : w(B, U, Y, z, V);
    }
    var A = L.bind(null, !1);
    return A.isRequired = L.bind(null, !0), A;
  }
  function d(w) {
    function D(O, L, A, j, B, U) {
      var Y = O[L], z = T(Y);
      if (z !== w) {
        var V = H(Y);
        return new s(
          "Invalid " + j + " `" + B + "` of type " + ("`" + V + "` supplied to `" + A + "`, expected ") + ("`" + w + "`."),
          { expectedType: w }
        );
      }
      return null;
    }
    return u(D);
  }
  function c() {
    return u(Ur);
  }
  function f(w) {
    function D(O, L, A, j, B) {
      if (typeof w != "function")
        return new s("Property `" + B + "` of component `" + A + "` has invalid PropType notation inside arrayOf.");
      var U = O[L];
      if (!Array.isArray(U)) {
        var Y = T(U);
        return new s("Invalid " + j + " `" + B + "` of type " + ("`" + Y + "` supplied to `" + A + "`, expected an array."));
      }
      for (var z = 0; z < U.length; z++) {
        var V = w(U, z, A, j, B + "[" + z + "]", lr);
        if (V instanceof Error)
          return V;
      }
      return null;
    }
    return u(D);
  }
  function p() {
    function w(D, O, L, A, j) {
      var B = D[O];
      if (!e(B)) {
        var U = T(B);
        return new s("Invalid " + A + " `" + j + "` of type " + ("`" + U + "` supplied to `" + L + "`, expected a single ReactElement."));
      }
      return null;
    }
    return u(w);
  }
  function g() {
    function w(D, O, L, A, j) {
      var B = D[O];
      if (!ji.isValidElementType(B)) {
        var U = T(B);
        return new s("Invalid " + A + " `" + j + "` of type " + ("`" + U + "` supplied to `" + L + "`, expected a single ReactElement type."));
      }
      return null;
    }
    return u(w);
  }
  function m(w) {
    function D(O, L, A, j, B) {
      if (!(O[L] instanceof w)) {
        var U = w.name || o, Y = G(O[L]);
        return new s("Invalid " + j + " `" + B + "` of type " + ("`" + Y + "` supplied to `" + A + "`, expected ") + ("instance of `" + U + "`."));
      }
      return null;
    }
    return u(D);
  }
  function h(w) {
    if (!Array.isArray(w))
      return arguments.length > 1 ? ur(
        "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
      ) : ur("Invalid argument supplied to oneOf, expected an array."), Ur;
    function D(O, L, A, j, B) {
      for (var U = O[L], Y = 0; Y < w.length; Y++)
        if (l(U, w[Y]))
          return null;
      var z = JSON.stringify(w, function(Q, ae) {
        var oe = H(ae);
        return oe === "symbol" ? String(ae) : ae;
      });
      return new s("Invalid " + j + " `" + B + "` of value `" + String(U) + "` " + ("supplied to `" + A + "`, expected one of " + z + "."));
    }
    return u(D);
  }
  function b(w) {
    function D(O, L, A, j, B) {
      if (typeof w != "function")
        return new s("Property `" + B + "` of component `" + A + "` has invalid PropType notation inside objectOf.");
      var U = O[L], Y = T(U);
      if (Y !== "object")
        return new s("Invalid " + j + " `" + B + "` of type " + ("`" + Y + "` supplied to `" + A + "`, expected an object."));
      for (var z in U)
        if (vt(U, z)) {
          var V = w(U, z, A, j, B + "." + z, lr);
          if (V instanceof Error)
            return V;
        }
      return null;
    }
    return u(D);
  }
  function x(w) {
    if (!Array.isArray(w))
      return ur("Invalid argument supplied to oneOfType, expected an instance of array."), Ur;
    for (var D = 0; D < w.length; D++) {
      var O = w[D];
      if (typeof O != "function")
        return ur(
          "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + q(O) + " at index " + D + "."
        ), Ur;
    }
    function L(A, j, B, U, Y) {
      for (var z = [], V = 0; V < w.length; V++) {
        var Q = w[V], ae = Q(A, j, B, U, Y, lr);
        if (ae == null)
          return null;
        ae.data && vt(ae.data, "expectedType") && z.push(ae.data.expectedType);
      }
      var oe = z.length > 0 ? ", expected one of type [" + z.join(", ") + "]" : "";
      return new s("Invalid " + U + " `" + Y + "` supplied to " + ("`" + B + "`" + oe + "."));
    }
    return u(L);
  }
  function S() {
    function w(D, O, L, A, j) {
      return P(D[O]) ? null : new s("Invalid " + A + " `" + j + "` supplied to " + ("`" + L + "`, expected a ReactNode."));
    }
    return u(w);
  }
  function y(w, D, O, L, A) {
    return new s(
      (w || "React class") + ": " + D + " type `" + O + "." + L + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + A + "`."
    );
  }
  function N(w) {
    function D(O, L, A, j, B) {
      var U = O[L], Y = T(U);
      if (Y !== "object")
        return new s("Invalid " + j + " `" + B + "` of type `" + Y + "` " + ("supplied to `" + A + "`, expected `object`."));
      for (var z in w) {
        var V = w[z];
        if (typeof V != "function")
          return y(A, j, B, z, H(V));
        var Q = V(U, z, A, j, B + "." + z, lr);
        if (Q)
          return Q;
      }
      return null;
    }
    return u(D);
  }
  function M(w) {
    function D(O, L, A, j, B) {
      var U = O[L], Y = T(U);
      if (Y !== "object")
        return new s("Invalid " + j + " `" + B + "` of type `" + Y + "` " + ("supplied to `" + A + "`, expected `object`."));
      var z = Ui({}, O[L], w);
      for (var V in z) {
        var Q = w[V];
        if (vt(w, V) && typeof Q != "function")
          return y(A, j, B, V, H(Q));
        if (!Q)
          return new s(
            "Invalid " + j + " `" + B + "` key `" + V + "` supplied to `" + A + "`.\nBad object: " + JSON.stringify(O[L], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(w), null, "  ")
          );
        var ae = Q(U, V, A, j, B + "." + V, lr);
        if (ae)
          return ae;
      }
      return null;
    }
    return u(D);
  }
  function P(w) {
    switch (typeof w) {
      case "number":
      case "string":
      case "undefined":
        return !0;
      case "boolean":
        return !w;
      case "object":
        if (Array.isArray(w))
          return w.every(P);
        if (w === null || e(w))
          return !0;
        var D = a(w);
        if (D) {
          var O = D.call(w), L;
          if (D !== w.entries) {
            for (; !(L = O.next()).done; )
              if (!P(L.value))
                return !1;
          } else
            for (; !(L = O.next()).done; ) {
              var A = L.value;
              if (A && !P(A[1]))
                return !1;
            }
        } else
          return !1;
        return !0;
      default:
        return !1;
    }
  }
  function k(w, D) {
    return w === "symbol" ? !0 : D ? D["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && D instanceof Symbol : !1;
  }
  function T(w) {
    var D = typeof w;
    return Array.isArray(w) ? "array" : w instanceof RegExp ? "object" : k(D, w) ? "symbol" : D;
  }
  function H(w) {
    if (typeof w > "u" || w === null)
      return "" + w;
    var D = T(w);
    if (D === "object") {
      if (w instanceof Date)
        return "date";
      if (w instanceof RegExp)
        return "regexp";
    }
    return D;
  }
  function q(w) {
    var D = H(w);
    switch (D) {
      case "array":
      case "object":
        return "an " + D;
      case "boolean":
      case "date":
      case "regexp":
        return "a " + D;
      default:
        return D;
    }
  }
  function G(w) {
    return !w.constructor || !w.constructor.name ? o : w.constructor.name;
  }
  return i.checkPropTypes = Hn, i.resetWarningCache = Hn.resetWarningCache, i.PropTypes = i, i;
};
{
  var Vi = Yt.exports, Hi = !0;
  Qe.exports = $i(Vi.isElement, Hi);
}
var _t = /* @__PURE__ */ te.createContext(null);
_t.displayName = "ReactRedux";
function Yi(e) {
  e();
}
var Wa = Yi, _i = function(r) {
  return Wa = r;
}, zi = function() {
  return Wa;
};
function qi() {
  var e = zi(), r = null, t = null;
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
      for (var a = [], o = r; o; )
        a.push(o), o = o.next;
      return a;
    },
    subscribe: function(a) {
      var o = !0, i = t = {
        callback: a,
        next: null,
        prev: t
      };
      return i.prev ? i.prev.next = i : r = i, function() {
        !o || r === null || (o = !1, i.next ? i.next.prev = i.prev : t = i.prev, i.prev ? i.prev.next = i.next : r = i.next);
      };
    }
  };
}
var Yn = {
  notify: function() {
  },
  get: function() {
    return [];
  }
};
function ja(e, r) {
  var t, n = Yn;
  function a(c) {
    return s(), n.subscribe(c);
  }
  function o() {
    n.notify();
  }
  function i() {
    d.onStateChange && d.onStateChange();
  }
  function l() {
    return Boolean(t);
  }
  function s() {
    t || (t = r ? r.addNestedSub(i) : e.subscribe(i), n = qi());
  }
  function u() {
    t && (t(), t = void 0, n.clear(), n = Yn);
  }
  var d = {
    addNestedSub: a,
    notifyNestedSubs: o,
    handleChangeWrapper: i,
    isSubscribed: l,
    trySubscribe: s,
    tryUnsubscribe: u,
    getListeners: function() {
      return n;
    }
  };
  return d;
}
var Ua = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Ma : ke;
function $a(e) {
  var r = e.store, t = e.context, n = e.children, a = Le(function() {
    var l = ja(r);
    return {
      store: r,
      subscription: l
    };
  }, [r]), o = Le(function() {
    return r.getState();
  }, [r]);
  Ua(function() {
    var l = a.subscription;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), o !== r.getState() && l.notifyNestedSubs(), function() {
      l.tryUnsubscribe(), l.onStateChange = null;
    };
  }, [a, o]);
  var i = t || _t;
  return /* @__PURE__ */ te.createElement(i.Provider, {
    value: a
  }, n);
}
$a.propTypes = {
  store: Qe.exports.shape({
    subscribe: Qe.exports.func.isRequired,
    dispatch: Qe.exports.func.isRequired,
    getState: Qe.exports.func.isRequired
  }),
  context: Qe.exports.object,
  children: Qe.exports.any
};
function qr(e, r) {
  if (e == null)
    return {};
  var t = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(r.indexOf(a) >= 0) && (t[a] = e[a]);
  return t;
}
var Va = { exports: {} }, re = {};
(function() {
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function S(C) {
    return typeof C == "string" || typeof C == "function" || C === n || C === u || C === o || C === a || C === c || C === f || typeof C == "object" && C !== null && (C.$$typeof === g || C.$$typeof === p || C.$$typeof === i || C.$$typeof === l || C.$$typeof === d || C.$$typeof === h || C.$$typeof === b || C.$$typeof === x || C.$$typeof === m);
  }
  function y(C) {
    if (typeof C == "object" && C !== null) {
      var he = C.$$typeof;
      switch (he) {
        case r:
          var fe = C.type;
          switch (fe) {
            case s:
            case u:
            case n:
            case o:
            case a:
            case c:
              return fe;
            default:
              var Re = fe && fe.$$typeof;
              switch (Re) {
                case l:
                case d:
                case g:
                case p:
                case i:
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
  var N = s, M = u, P = l, k = i, T = r, H = d, q = n, G = g, w = p, D = t, O = o, L = a, A = c, j = !1;
  function B(C) {
    return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), U(C) || y(C) === s;
  }
  function U(C) {
    return y(C) === u;
  }
  function Y(C) {
    return y(C) === l;
  }
  function z(C) {
    return y(C) === i;
  }
  function V(C) {
    return typeof C == "object" && C !== null && C.$$typeof === r;
  }
  function Q(C) {
    return y(C) === d;
  }
  function ae(C) {
    return y(C) === n;
  }
  function oe(C) {
    return y(C) === g;
  }
  function xe(C) {
    return y(C) === p;
  }
  function we(C) {
    return y(C) === t;
  }
  function be(C) {
    return y(C) === o;
  }
  function Ce(C) {
    return y(C) === a;
  }
  function F(C) {
    return y(C) === c;
  }
  re.AsyncMode = N, re.ConcurrentMode = M, re.ContextConsumer = P, re.ContextProvider = k, re.Element = T, re.ForwardRef = H, re.Fragment = q, re.Lazy = G, re.Memo = w, re.Portal = D, re.Profiler = O, re.StrictMode = L, re.Suspense = A, re.isAsyncMode = B, re.isConcurrentMode = U, re.isContextConsumer = Y, re.isContextProvider = z, re.isElement = V, re.isForwardRef = Q, re.isFragment = ae, re.isLazy = oe, re.isMemo = xe, re.isPortal = we, re.isProfiler = be, re.isStrictMode = Ce, re.isSuspense = F, re.isValidElementType = S, re.typeOf = y;
})();
(function(e) {
  e.exports = re;
})(Va);
var zt = Va.exports, Ki = {
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
}, Xi = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Ji = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ha = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, qt = {};
qt[zt.ForwardRef] = Ji;
qt[zt.Memo] = Ha;
function _n(e) {
  return zt.isMemo(e) ? Ha : qt[e.$$typeof] || Ki;
}
var Zi = Object.defineProperty, Qi = Object.getOwnPropertyNames, zn = Object.getOwnPropertySymbols, el = Object.getOwnPropertyDescriptor, rl = Object.getPrototypeOf, qn = Object.prototype;
function Ya(e, r, t) {
  if (typeof r != "string") {
    if (qn) {
      var n = rl(r);
      n && n !== qn && Ya(e, n, t);
    }
    var a = Qi(r);
    zn && (a = a.concat(zn(r)));
    for (var o = _n(e), i = _n(r), l = 0; l < a.length; ++l) {
      var s = a[l];
      if (!Xi[s] && !(t && t[s]) && !(i && i[s]) && !(o && o[s])) {
        var u = el(r, s);
        try {
          Zi(e, s, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var Kn = Ya, Nt = { exports: {} }, le = {};
(function() {
  var e = 60103, r = 60106, t = 60107, n = 60108, a = 60114, o = 60109, i = 60110, l = 60112, s = 60113, u = 60120, d = 60115, c = 60116, f = 60121, p = 60122, g = 60117, m = 60129, h = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var b = Symbol.for;
    e = b("react.element"), r = b("react.portal"), t = b("react.fragment"), n = b("react.strict_mode"), a = b("react.profiler"), o = b("react.provider"), i = b("react.context"), l = b("react.forward_ref"), s = b("react.suspense"), u = b("react.suspense_list"), d = b("react.memo"), c = b("react.lazy"), f = b("react.block"), p = b("react.server.block"), g = b("react.fundamental"), b("react.scope"), b("react.opaque.id"), m = b("react.debug_trace_mode"), b("react.offscreen"), h = b("react.legacy_hidden");
  }
  var x = !1;
  function S(F) {
    return !!(typeof F == "string" || typeof F == "function" || F === t || F === a || F === m || F === n || F === s || F === u || F === h || x || typeof F == "object" && F !== null && (F.$$typeof === c || F.$$typeof === d || F.$$typeof === o || F.$$typeof === i || F.$$typeof === l || F.$$typeof === g || F.$$typeof === f || F[0] === p));
  }
  function y(F) {
    if (typeof F == "object" && F !== null) {
      var C = F.$$typeof;
      switch (C) {
        case e:
          var he = F.type;
          switch (he) {
            case t:
            case a:
            case n:
            case s:
            case u:
              return he;
            default:
              var fe = he && he.$$typeof;
              switch (fe) {
                case i:
                case l:
                case c:
                case d:
                case o:
                  return fe;
                default:
                  return C;
              }
          }
        case r:
          return C;
      }
    }
  }
  var N = i, M = o, P = e, k = l, T = t, H = c, q = d, G = r, w = a, D = n, O = s, L = !1, A = !1;
  function j(F) {
    return L || (L = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
  }
  function B(F) {
    return A || (A = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
  }
  function U(F) {
    return y(F) === i;
  }
  function Y(F) {
    return y(F) === o;
  }
  function z(F) {
    return typeof F == "object" && F !== null && F.$$typeof === e;
  }
  function V(F) {
    return y(F) === l;
  }
  function Q(F) {
    return y(F) === t;
  }
  function ae(F) {
    return y(F) === c;
  }
  function oe(F) {
    return y(F) === d;
  }
  function xe(F) {
    return y(F) === r;
  }
  function we(F) {
    return y(F) === a;
  }
  function be(F) {
    return y(F) === n;
  }
  function Ce(F) {
    return y(F) === s;
  }
  le.ContextConsumer = N, le.ContextProvider = M, le.Element = P, le.ForwardRef = k, le.Fragment = T, le.Lazy = H, le.Memo = q, le.Portal = G, le.Profiler = w, le.StrictMode = D, le.Suspense = O, le.isAsyncMode = j, le.isConcurrentMode = B, le.isContextConsumer = U, le.isContextProvider = Y, le.isElement = z, le.isForwardRef = V, le.isFragment = Q, le.isLazy = ae, le.isMemo = oe, le.isPortal = xe, le.isProfiler = we, le.isStrictMode = be, le.isSuspense = Ce, le.isValidElementType = S, le.typeOf = y;
})();
(function(e) {
  e.exports = le;
})(Nt);
var tl = ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"], nl = ["reactReduxForwardedRef"], al = [], ol = [null, null], il = function(r) {
  try {
    return JSON.stringify(r);
  } catch {
    return String(r);
  }
};
function ll(e, r) {
  var t = e[1];
  return [r.payload, t + 1];
}
function Xn(e, r, t) {
  Ua(function() {
    return e.apply(void 0, r);
  }, t);
}
function sl(e, r, t, n, a, o, i) {
  e.current = n, r.current = a, t.current = !1, o.current && (o.current = null, i());
}
function ul(e, r, t, n, a, o, i, l, s, u) {
  if (!!e) {
    var d = !1, c = null, f = function() {
      if (!d) {
        var m = r.getState(), h, b;
        try {
          h = n(m, a.current);
        } catch (x) {
          b = x, c = x;
        }
        b || (c = null), h === o.current ? i.current || s() : (o.current = h, l.current = h, i.current = !0, u({
          type: "STORE_UPDATED",
          payload: {
            error: b
          }
        }));
      }
    };
    t.onStateChange = f, t.trySubscribe(), f();
    var p = function() {
      if (d = !0, t.tryUnsubscribe(), t.onStateChange = null, c)
        throw c;
    };
    return p;
  }
}
var cl = function() {
  return [null, 0];
};
function dl(e, r) {
  r === void 0 && (r = {});
  var t = r, n = t.getDisplayName, a = n === void 0 ? function(M) {
    return "ConnectAdvanced(" + M + ")";
  } : n, o = t.methodName, i = o === void 0 ? "connectAdvanced" : o, l = t.renderCountProp, s = l === void 0 ? void 0 : l, u = t.shouldHandleStateChanges, d = u === void 0 ? !0 : u, c = t.storeKey, f = c === void 0 ? "store" : c, p = t.withRef, g = p === void 0 ? !1 : p, m = t.forwardRef, h = m === void 0 ? !1 : m, b = t.context, x = b === void 0 ? _t : b, S = qr(t, tl);
  {
    if (s !== void 0)
      throw new Error("renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
    if (g)
      throw new Error("withRef is removed. To access the wrapped instance, use a ref on the connected component");
    var y = "To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect";
    if (f !== "store")
      throw new Error("storeKey has been removed and does not do anything. " + y);
  }
  var N = x;
  return function(P) {
    if (!Nt.exports.isValidElementType(P))
      throw new Error("You must pass a component to the function returned by " + (i + ". Instead received " + il(P)));
    var k = P.displayName || P.name || "Component", T = a(k), H = $({}, S, {
      getDisplayName: a,
      methodName: i,
      renderCountProp: s,
      shouldHandleStateChanges: d,
      storeKey: f,
      displayName: T,
      wrappedComponentName: k,
      WrappedComponent: P
    }), q = S.pure;
    function G(A) {
      return e(A.dispatch, H);
    }
    var w = q ? Le : function(A) {
      return A();
    };
    function D(A) {
      var j = Le(function() {
        var Xe = A.reactReduxForwardedRef, yr = qr(A, nl);
        return [A.context, Xe, yr];
      }, [A]), B = j[0], U = j[1], Y = j[2], z = Le(function() {
        return B && B.Consumer && Nt.exports.isContextConsumer(/* @__PURE__ */ te.createElement(B.Consumer, null)) ? B : N;
      }, [B, N]), V = Ht(z), Q = Boolean(A.store) && Boolean(A.store.getState) && Boolean(A.store.dispatch), ae = Boolean(V) && Boolean(V.store);
      if (!Q && !ae)
        throw new Error('Could not find "store" in the context of ' + ('"' + T + '". Either wrap the root component in a <Provider>, ') + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + T + " in connect options."));
      var oe = Q ? A.store : V.store, xe = Le(function() {
        return G(oe);
      }, [oe]), we = Le(function() {
        if (!d)
          return ol;
        var Xe = ja(oe, Q ? null : V.subscription), yr = Xe.notifyNestedSubs.bind(Xe);
        return [Xe, yr];
      }, [oe, Q, V]), be = we[0], Ce = we[1], F = Le(function() {
        return Q ? V : $({}, V, {
          subscription: be
        });
      }, [Q, V, be]), C = bi(ll, al, cl), he = C[0], fe = he[0], Re = C[1];
      if (fe && fe.error)
        throw fe.error;
      var ze = ne(), ar = ne(Y), qe = ne(), Ke = ne(!1), mr = w(function() {
        return qe.current && Y === ar.current ? qe.current : xe(oe.getState(), Y);
      }, [oe, fe, Y]);
      Xn(sl, [ar, ze, Ke, Y, mr, qe, Ce]), Xn(ul, [d, oe, be, xe, ar, ze, Ke, qe, Ce, Re], [oe, be, xe]);
      var br = Le(function() {
        return /* @__PURE__ */ te.createElement(P, $({}, mr, {
          ref: U
        }));
      }, [U, P, mr]), hr = Le(function() {
        return d ? /* @__PURE__ */ te.createElement(z.Provider, {
          value: F
        }, br) : br;
      }, [z, br, F]);
      return hr;
    }
    var O = q ? te.memo(D) : D;
    if (O.WrappedComponent = P, O.displayName = D.displayName = T, h) {
      var L = te.forwardRef(function(j, B) {
        return /* @__PURE__ */ te.createElement(O, $({}, j, {
          reactReduxForwardedRef: B
        }));
      });
      return L.displayName = T, L.WrappedComponent = P, Kn(L, P);
    }
    return Kn(O, P);
  };
}
function Jn(e, r) {
  return e === r ? e !== 0 || r !== 0 || 1 / e === 1 / r : e !== e && r !== r;
}
function gt(e, r) {
  if (Jn(e, r))
    return !0;
  if (typeof e != "object" || e === null || typeof r != "object" || r === null)
    return !1;
  var t = Object.keys(e), n = Object.keys(r);
  if (t.length !== n.length)
    return !1;
  for (var a = 0; a < t.length; a++)
    if (!Object.prototype.hasOwnProperty.call(r, t[a]) || !Jn(e[t[a]], r[t[a]]))
      return !1;
  return !0;
}
function fl(e, r) {
  var t = {}, n = function(i) {
    var l = e[i];
    typeof l == "function" && (t[i] = function() {
      return r(l.apply(void 0, arguments));
    });
  };
  for (var a in e)
    n(a);
  return t;
}
function pl(e) {
  if (typeof e != "object" || e === null)
    return !1;
  var r = Object.getPrototypeOf(e);
  if (r === null)
    return !0;
  for (var t = r; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return r === t;
}
function _a(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function za(e, r, t) {
  pl(e) || _a(t + "() in " + r + " must return a plain object. Instead received " + e + ".");
}
function Kt(e) {
  return function(t, n) {
    var a = e(t, n);
    function o() {
      return a;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Zn(e) {
  return e.dependsOnOwnProps !== null && e.dependsOnOwnProps !== void 0 ? Boolean(e.dependsOnOwnProps) : e.length !== 1;
}
function qa(e, r) {
  return function(n, a) {
    var o = a.displayName, i = function(s, u) {
      return i.dependsOnOwnProps ? i.mapToProps(s, u) : i.mapToProps(s);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(s, u) {
      i.mapToProps = e, i.dependsOnOwnProps = Zn(e);
      var d = i(s, u);
      return typeof d == "function" && (i.mapToProps = d, i.dependsOnOwnProps = Zn(d), d = i(s, u)), za(d, o, r), d;
    }, i;
  };
}
function vl(e) {
  return typeof e == "function" ? qa(e, "mapDispatchToProps") : void 0;
}
function gl(e) {
  return e ? void 0 : Kt(function(r) {
    return {
      dispatch: r
    };
  });
}
function ml(e) {
  return e && typeof e == "object" ? Kt(function(r) {
    return fl(e, r);
  }) : void 0;
}
const bl = [vl, gl, ml];
function hl(e) {
  return typeof e == "function" ? qa(e, "mapStateToProps") : void 0;
}
function yl(e) {
  return e ? void 0 : Kt(function() {
    return {};
  });
}
const xl = [hl, yl];
function wl(e, r, t) {
  return $({}, t, e, r);
}
function Cl(e) {
  return function(t, n) {
    var a = n.displayName, o = n.pure, i = n.areMergedPropsEqual, l = !1, s;
    return function(d, c, f) {
      var p = e(d, c, f);
      return l ? (!o || !i(p, s)) && (s = p) : (l = !0, s = p, za(s, a, "mergeProps")), s;
    };
  };
}
function El(e) {
  return typeof e == "function" ? Cl(e) : void 0;
}
function Dl(e) {
  return e ? void 0 : function() {
    return wl;
  };
}
const Il = [El, Dl];
function mt(e, r, t) {
  if (e)
    (r === "mapStateToProps" || r === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || _a("The selector for " + r + " of " + t + " did not specify a value for dependsOnOwnProps."));
  else
    throw new Error("Unexpected value for " + r + " in " + t + ".");
}
function Sl(e, r, t, n) {
  mt(e, "mapStateToProps", n), mt(r, "mapDispatchToProps", n), mt(t, "mergeProps", n);
}
var Pl = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function Tl(e, r, t, n) {
  return function(o, i) {
    return t(e(o, i), r(n, i), i);
  };
}
function Rl(e, r, t, n, a) {
  var o = a.areStatesEqual, i = a.areOwnPropsEqual, l = a.areStatePropsEqual, s = !1, u, d, c, f, p;
  function g(S, y) {
    return u = S, d = y, c = e(u, d), f = r(n, d), p = t(c, f, d), s = !0, p;
  }
  function m() {
    return c = e(u, d), r.dependsOnOwnProps && (f = r(n, d)), p = t(c, f, d), p;
  }
  function h() {
    return e.dependsOnOwnProps && (c = e(u, d)), r.dependsOnOwnProps && (f = r(n, d)), p = t(c, f, d), p;
  }
  function b() {
    var S = e(u, d), y = !l(S, c);
    return c = S, y && (p = t(c, f, d)), p;
  }
  function x(S, y) {
    var N = !i(y, d), M = !o(S, u, y, d);
    return u = S, d = y, N && M ? m() : N ? h() : M ? b() : p;
  }
  return function(y, N) {
    return s ? x(y, N) : g(y, N);
  };
}
function Al(e, r) {
  var t = r.initMapStateToProps, n = r.initMapDispatchToProps, a = r.initMergeProps, o = qr(r, Pl), i = t(e, o), l = n(e, o), s = a(e, o);
  Sl(i, l, s, o.displayName);
  var u = o.pure ? Rl : Tl;
  return u(i, l, s, e, o);
}
var Ol = ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"];
function bt(e, r, t) {
  for (var n = r.length - 1; n >= 0; n--) {
    var a = r[n](e);
    if (a)
      return a;
  }
  return function(o, i) {
    throw new Error("Invalid value of type " + typeof e + " for " + t + " argument when connecting component " + i.wrappedComponentName + ".");
  };
}
function Ml(e, r) {
  return e === r;
}
function Bl(e) {
  var r = e === void 0 ? {} : e, t = r.connectHOC, n = t === void 0 ? dl : t, a = r.mapStateToPropsFactories, o = a === void 0 ? xl : a, i = r.mapDispatchToPropsFactories, l = i === void 0 ? bl : i, s = r.mergePropsFactories, u = s === void 0 ? Il : s, d = r.selectorFactory, c = d === void 0 ? Al : d;
  return function(p, g, m, h) {
    h === void 0 && (h = {});
    var b = h, x = b.pure, S = x === void 0 ? !0 : x, y = b.areStatesEqual, N = y === void 0 ? Ml : y, M = b.areOwnPropsEqual, P = M === void 0 ? gt : M, k = b.areStatePropsEqual, T = k === void 0 ? gt : k, H = b.areMergedPropsEqual, q = H === void 0 ? gt : H, G = qr(b, Ol), w = bt(p, o, "mapStateToProps"), D = bt(g, l, "mapDispatchToProps"), O = bt(m, u, "mergeProps");
    return n(c, $({
      methodName: "connect",
      getDisplayName: function(A) {
        return "Connect(" + A + ")";
      },
      shouldHandleStateChanges: Boolean(p),
      initMapStateToProps: w,
      initMapDispatchToProps: D,
      initMergeProps: O,
      pure: S,
      areStatesEqual: N,
      areOwnPropsEqual: P,
      areStatePropsEqual: T,
      areMergedPropsEqual: q
    }, G));
  };
}
const Ka = /* @__PURE__ */ Bl();
_i(yi);
function Nl(e, r) {
  if (e.length !== r.length)
    return !1;
  for (var t = 0; t < e.length; t++)
    if (e[t] !== r[t])
      return !1;
  return !0;
}
function Xa(e, r) {
  var t = cr(function() {
    return {
      inputs: r,
      result: e()
    };
  })[0], n = ne(!0), a = ne(t), o = n.current || Boolean(r && a.current.inputs && Nl(r, a.current.inputs)), i = o ? a.current : {
    inputs: r,
    result: e()
  };
  return ke(function() {
    n.current = !1, a.current = i;
  }, [i]), i.result;
}
function Ll(e, r) {
  return Xa(function() {
    return e;
  }, r);
}
var J = Xa, W = Ll, Fl = !1, ht = "Invariant failed";
function Gl(e, r) {
  if (!e) {
    if (Fl)
      throw new Error(ht);
    var t = typeof r == "function" ? r() : r, n = t ? "".concat(ht, ": ").concat(t) : ht;
    throw new Error(n);
  }
}
var Ge = function(r) {
  var t = r.top, n = r.right, a = r.bottom, o = r.left, i = n - o, l = a - t, s = {
    top: t,
    right: n,
    bottom: a,
    left: o,
    width: i,
    height: l,
    x: o,
    y: t,
    center: {
      x: (n + o) / 2,
      y: (a + t) / 2
    }
  };
  return s;
}, Xt = function(r, t) {
  return {
    top: r.top - t.top,
    left: r.left - t.left,
    bottom: r.bottom + t.bottom,
    right: r.right + t.right
  };
}, Qn = function(r, t) {
  return {
    top: r.top + t.top,
    left: r.left + t.left,
    bottom: r.bottom - t.bottom,
    right: r.right - t.right
  };
}, kl = function(r, t) {
  return {
    top: r.top + t.y,
    left: r.left + t.x,
    bottom: r.bottom + t.y,
    right: r.right + t.x
  };
}, yt = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Jt = function(r) {
  var t = r.borderBox, n = r.margin, a = n === void 0 ? yt : n, o = r.border, i = o === void 0 ? yt : o, l = r.padding, s = l === void 0 ? yt : l, u = Ge(Xt(t, a)), d = Ge(Qn(t, i)), c = Ge(Qn(d, s));
  return {
    marginBox: u,
    borderBox: Ge(t),
    paddingBox: d,
    contentBox: c,
    margin: a,
    border: i,
    padding: s
  };
}, Oe = function(r) {
  var t = r.slice(0, -2), n = r.slice(-2);
  if (n !== "px")
    return 0;
  var a = Number(t);
  return isNaN(a) && Gl(!1, "Could not parse value [raw: " + r + ", without suffix: " + t + "]"), a;
}, Wl = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, Kr = function(r, t) {
  var n = r.borderBox, a = r.border, o = r.margin, i = r.padding, l = kl(n, t);
  return Jt({
    borderBox: l,
    border: a,
    margin: o,
    padding: i
  });
}, Xr = function(r, t) {
  return t === void 0 && (t = Wl()), Kr(r, t);
}, Ja = function(r, t) {
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
  }, o = {
    top: Oe(t.borderTopWidth),
    right: Oe(t.borderRightWidth),
    bottom: Oe(t.borderBottomWidth),
    left: Oe(t.borderLeftWidth)
  };
  return Jt({
    borderBox: r,
    margin: n,
    padding: a,
    border: o
  });
}, Za = function(r) {
  var t = r.getBoundingClientRect(), n = window.getComputedStyle(r);
  return Ja(t, n);
}, ea = Number.isNaN || function(r) {
  return typeof r == "number" && r !== r;
};
function jl(e, r) {
  return !!(e === r || ea(e) && ea(r));
}
function Ul(e, r) {
  if (e.length !== r.length)
    return !1;
  for (var t = 0; t < e.length; t++)
    if (!jl(e[t], r[t]))
      return !1;
  return !0;
}
function pe(e, r) {
  r === void 0 && (r = Ul);
  var t, n = [], a, o = !1;
  function i() {
    for (var l = [], s = 0; s < arguments.length; s++)
      l[s] = arguments[s];
    return o && t === this && r(l, n) || (a = e.apply(this, l), o = !0, t = this, n = l), a;
  }
  return i;
}
var $l = function(r) {
  var t = [], n = null, a = function() {
    for (var i = arguments.length, l = new Array(i), s = 0; s < i; s++)
      l[s] = arguments[s];
    t = l, !n && (n = requestAnimationFrame(function() {
      n = null, r.apply(void 0, t);
    }));
  };
  return a.cancel = function() {
    !n || (cancelAnimationFrame(n), n = null);
  }, a;
};
const Ar = $l;
var Vl = /[ \t]{2,}/g, Hl = /^[ \t]*/gm, ra = function(r) {
  return r.replace(Vl, " ").replace(Hl, "").trim();
}, Yl = function(r) {
  return ra(`
  %creact-beautiful-dnd

  %c` + ra(r) + `

  %c👷‍ This is a development only message. It will be removed in production builds.
`);
}, _l = function(r) {
  return [Yl(r), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"];
}, zl = "__react-beautiful-dnd-disable-dev-warnings";
function Qa(e, r) {
  var t;
  typeof window < "u" && window[zl] || (t = console)[e].apply(t, _l(r));
}
var se = Qa.bind(null, "warn"), Lt = Qa.bind(null, "error");
function Ue() {
}
function ql(e, r) {
  return $({}, e, {}, r);
}
function Me(e, r, t) {
  var n = r.map(function(a) {
    var o = ql(t, a.options);
    return e.addEventListener(a.eventName, a.fn, o), function() {
      e.removeEventListener(a.eventName, a.fn, o);
    };
  });
  return function() {
    n.forEach(function(o) {
      o();
    });
  };
}
var Kl = "Invariant failed";
function Jr(e) {
  this.message = e;
}
Jr.prototype.toString = function() {
  return this.message;
};
function E(e, r) {
  if (!e)
    throw new Jr(Kl + ": " + (r || ""));
}
var Xl = function(e) {
  Ba(r, e);
  function r() {
    for (var n, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return n = e.call.apply(e, [this].concat(o)) || this, n.callbacks = null, n.unbind = Ue, n.onWindowError = function(l) {
      var s = n.getCallbacks();
      s.isDragging() && (s.tryAbort(), se(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      var u = l.error;
      u instanceof Jr && (l.preventDefault(), Lt(u.message));
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
    if (a instanceof Jr) {
      Lt(a.message), this.setState({});
      return;
    }
    throw a;
  }, t.componentWillUnmount = function() {
    this.unbind();
  }, t.render = function() {
    return this.props.children(this.setCallbacks);
  }, r;
}(te.Component), Jl = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, Zr = function(r) {
  return r + 1;
}, Zl = function(r) {
  return `
  You have lifted an item in position ` + Zr(r.source.index) + `
`;
}, eo = function(r, t) {
  var n = r.droppableId === t.droppableId, a = Zr(r.index), o = Zr(t.index);
  return n ? `
      You have moved the item from position ` + a + `
      to position ` + o + `
    ` : `
    You have moved the item from position ` + a + `
    in list ` + r.droppableId + `
    to list ` + t.droppableId + `
    in position ` + o + `
  `;
}, ro = function(r, t, n) {
  var a = t.droppableId === n.droppableId;
  return a ? `
      The item ` + r + `
      has been combined with ` + n.draggableId : `
      The item ` + r + `
      in list ` + t.droppableId + `
      has been combined with ` + n.draggableId + `
      in list ` + n.droppableId + `
    `;
}, Ql = function(r) {
  var t = r.destination;
  if (t)
    return eo(r.source, t);
  var n = r.combine;
  return n ? ro(r.draggableId, r.source, n) : "You are over an area that cannot be dropped on";
}, ta = function(r) {
  return `
  The item has returned to its starting position
  of ` + Zr(r.index) + `
`;
}, es = function(r) {
  if (r.reason === "CANCEL")
    return `
      Movement cancelled.
      ` + ta(r.source) + `
    `;
  var t = r.destination, n = r.combine;
  return t ? `
      You have dropped the item.
      ` + eo(r.source, t) + `
    ` : n ? `
      You have dropped the item.
      ` + ro(r.draggableId, r.source, n) + `
    ` : `
    The item has been dropped while not over a drop area.
    ` + ta(r.source) + `
  `;
}, zr = {
  dragHandleUsageInstructions: Jl,
  onDragStart: Zl,
  onDragUpdate: Ql,
  onDragEnd: es
}, ve = {
  x: 0,
  y: 0
}, me = function(r, t) {
  return {
    x: r.x + t.x,
    y: r.y + t.y
  };
}, Se = function(r, t) {
  return {
    x: r.x - t.x,
    y: r.y - t.y
  };
}, $e = function(r, t) {
  return r.x === t.x && r.y === t.y;
}, vr = function(r) {
  return {
    x: r.x !== 0 ? -r.x : 0,
    y: r.y !== 0 ? -r.y : 0
  };
}, tr = function(r, t, n) {
  var a;
  return n === void 0 && (n = 0), a = {}, a[r] = t, a[r === "x" ? "y" : "x"] = n, a;
}, Or = function(r, t) {
  return Math.sqrt(Math.pow(t.x - r.x, 2) + Math.pow(t.y - r.y, 2));
}, na = function(r, t) {
  return Math.min.apply(Math, t.map(function(n) {
    return Or(r, n);
  }));
}, to = function(r) {
  return function(t) {
    return {
      x: r(t.x),
      y: r(t.y)
    };
  };
}, rs = function(e, r) {
  var t = Ge({
    top: Math.max(r.top, e.top),
    right: Math.min(r.right, e.right),
    bottom: Math.min(r.bottom, e.bottom),
    left: Math.max(r.left, e.left)
  });
  return t.width <= 0 || t.height <= 0 ? null : t;
}, Gr = function(r, t) {
  return {
    top: r.top + t.y,
    left: r.left + t.x,
    bottom: r.bottom + t.y,
    right: r.right + t.x
  };
}, aa = function(r) {
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
}, ts = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, ns = function(r, t) {
  return t ? Gr(r, t.scroll.diff.displacement) : r;
}, as = function(r, t, n) {
  if (n && n.increasedBy) {
    var a;
    return $({}, r, (a = {}, a[t.end] = r[t.end] + n.increasedBy[t.line], a));
  }
  return r;
}, os = function(r, t) {
  return t && t.shouldClipSubject ? rs(t.pageMarginBox, r) : Ge(r);
}, dr = function(e) {
  var r = e.page, t = e.withPlaceholder, n = e.axis, a = e.frame, o = ns(r.marginBox, a), i = as(o, n, t), l = os(i, a);
  return {
    page: r,
    withPlaceholder: t,
    active: l
  };
}, Zt = function(e, r) {
  e.frame || E(!1);
  var t = e.frame, n = Se(r, t.scroll.initial), a = vr(n), o = $({}, t, {
    scroll: {
      initial: t.scroll.initial,
      current: r,
      diff: {
        value: n,
        displacement: a
      },
      max: t.scroll.max
    }
  }), i = dr({
    page: e.subject.page,
    withPlaceholder: e.subject.withPlaceholder,
    axis: e.axis,
    frame: o
  }), l = $({}, e, {
    frame: o,
    subject: i
  });
  return l;
};
function is(e) {
  return Number.isInteger ? Number.isInteger(e) : typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
function Qr(e) {
  return Object.values ? Object.values(e) : Object.keys(e).map(function(r) {
    return e[r];
  });
}
function Qt(e, r) {
  if (e.findIndex)
    return e.findIndex(r);
  for (var t = 0; t < e.length; t++)
    if (r(e[t]))
      return t;
  return -1;
}
function Ye(e, r) {
  if (e.find)
    return e.find(r);
  var t = Qt(e, r);
  if (t !== -1)
    return e[t];
}
function no(e) {
  return Array.prototype.slice.call(e);
}
var ao = pe(function(e) {
  return e.reduce(function(r, t) {
    return r[t.descriptor.id] = t, r;
  }, {});
}), oo = pe(function(e) {
  return e.reduce(function(r, t) {
    return r[t.descriptor.id] = t, r;
  }, {});
}), nt = pe(function(e) {
  return Qr(e);
}), ls = pe(function(e) {
  return Qr(e);
}), nr = pe(function(e, r) {
  var t = ls(r).filter(function(n) {
    return e === n.descriptor.droppableId;
  }).sort(function(n, a) {
    return n.descriptor.index - a.descriptor.index;
  });
  return t;
});
function en(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function at(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var ot = pe(function(e, r) {
  return r.filter(function(t) {
    return t.descriptor.id !== e.descriptor.id;
  });
}), ss = function(e) {
  var r = e.isMovingForward, t = e.draggable, n = e.destination, a = e.insideDestination, o = e.previousImpact;
  if (!n.isCombineEnabled)
    return null;
  var i = en(o);
  if (!i)
    return null;
  function l(m) {
    var h = {
      type: "COMBINE",
      combine: {
        draggableId: m,
        droppableId: n.descriptor.id
      }
    };
    return $({}, o, {
      at: h
    });
  }
  var s = o.displaced.all, u = s.length ? s[0] : null;
  if (r)
    return u ? l(u) : null;
  var d = ot(t, a);
  if (!u) {
    if (!d.length)
      return null;
    var c = d[d.length - 1];
    return l(c.descriptor.id);
  }
  var f = Qt(d, function(m) {
    return m.descriptor.id === u;
  });
  f === -1 && E(!1, "Could not find displaced item in set");
  var p = f - 1;
  if (p < 0)
    return null;
  var g = d[p];
  return l(g.descriptor.id);
}, gr = function(e, r) {
  return e.descriptor.droppableId === r.descriptor.id;
}, io = {
  point: ve,
  value: 0
}, Mr = {
  invisible: {},
  visible: {},
  all: []
}, us = {
  displaced: Mr,
  displacedBy: io,
  at: null
}, Be = function(e, r) {
  return function(t) {
    return e <= t && t <= r;
  };
}, lo = function(e) {
  var r = Be(e.top, e.bottom), t = Be(e.left, e.right);
  return function(n) {
    var a = r(n.top) && r(n.bottom) && t(n.left) && t(n.right);
    if (a)
      return !0;
    var o = r(n.top) || r(n.bottom), i = t(n.left) || t(n.right), l = o && i;
    if (l)
      return !0;
    var s = n.top < e.top && n.bottom > e.bottom, u = n.left < e.left && n.right > e.right, d = s && u;
    if (d)
      return !0;
    var c = s && i || u && o;
    return c;
  };
}, cs = function(e) {
  var r = Be(e.top, e.bottom), t = Be(e.left, e.right);
  return function(n) {
    var a = r(n.top) && r(n.bottom) && t(n.left) && t(n.right);
    return a;
  };
}, rn = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, so = {
  direction: "horizontal",
  line: "x",
  crossAxisLine: "y",
  start: "left",
  end: "right",
  size: "width",
  crossAxisStart: "top",
  crossAxisEnd: "bottom",
  crossAxisSize: "height"
}, ds = function(e) {
  return function(r) {
    var t = Be(r.top, r.bottom), n = Be(r.left, r.right);
    return function(a) {
      return e === rn ? t(a.top) && t(a.bottom) : n(a.left) && n(a.right);
    };
  };
}, fs = function(r, t) {
  var n = t.frame ? t.frame.scroll.diff.displacement : ve;
  return Gr(r, n);
}, ps = function(r, t, n) {
  return t.subject.active ? n(t.subject.active)(r) : !1;
}, vs = function(r, t, n) {
  return n(t)(r);
}, tn = function(r) {
  var t = r.target, n = r.destination, a = r.viewport, o = r.withDroppableDisplacement, i = r.isVisibleThroughFrameFn, l = o ? fs(t, n) : t;
  return ps(l, n, i) && vs(l, a, i);
}, gs = function(r) {
  return tn($({}, r, {
    isVisibleThroughFrameFn: lo
  }));
}, uo = function(r) {
  return tn($({}, r, {
    isVisibleThroughFrameFn: cs
  }));
}, ms = function(r) {
  return tn($({}, r, {
    isVisibleThroughFrameFn: ds(r.destination.axis)
  }));
}, bs = function(r, t, n) {
  if (typeof n == "boolean")
    return n;
  if (!t)
    return !0;
  var a = t.invisible, o = t.visible;
  if (a[r])
    return !1;
  var i = o[r];
  return i ? i.shouldAnimate : !0;
};
function hs(e, r) {
  var t = e.page.marginBox, n = {
    top: r.point.y,
    right: 0,
    bottom: 0,
    left: r.point.x
  };
  return Ge(Xt(t, n));
}
function Br(e) {
  var r = e.afterDragging, t = e.destination, n = e.displacedBy, a = e.viewport, o = e.forceShouldAnimate, i = e.last;
  return r.reduce(function(s, u) {
    var d = hs(u, n), c = u.descriptor.id;
    s.all.push(c);
    var f = gs({
      target: d,
      destination: t,
      viewport: a,
      withDroppableDisplacement: !0
    });
    if (!f)
      return s.invisible[u.descriptor.id] = !0, s;
    var p = bs(c, i, o), g = {
      draggableId: c,
      shouldAnimate: p
    };
    return s.visible[c] = g, s;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function ys(e, r) {
  if (!e.length)
    return 0;
  var t = e[e.length - 1].descriptor.index;
  return r.inHomeList ? t : t + 1;
}
function oa(e) {
  var r = e.insideDestination, t = e.inHomeList, n = e.displacedBy, a = e.destination, o = ys(r, {
    inHomeList: t
  });
  return {
    displaced: Mr,
    displacedBy: n,
    at: {
      type: "REORDER",
      destination: {
        droppableId: a.descriptor.id,
        index: o
      }
    }
  };
}
function et(e) {
  var r = e.draggable, t = e.insideDestination, n = e.destination, a = e.viewport, o = e.displacedBy, i = e.last, l = e.index, s = e.forceShouldAnimate, u = gr(r, n);
  if (l == null)
    return oa({
      insideDestination: t,
      inHomeList: u,
      displacedBy: o,
      destination: n
    });
  var d = Ye(t, function(m) {
    return m.descriptor.index === l;
  });
  if (!d)
    return oa({
      insideDestination: t,
      inHomeList: u,
      displacedBy: o,
      destination: n
    });
  var c = ot(r, t), f = t.indexOf(d), p = c.slice(f), g = Br({
    afterDragging: p,
    destination: n,
    displacedBy: o,
    last: i,
    viewport: a.frame,
    forceShouldAnimate: s
  });
  return {
    displaced: g,
    displacedBy: o,
    at: {
      type: "REORDER",
      destination: {
        droppableId: n.descriptor.id,
        index: l
      }
    }
  };
}
function He(e, r) {
  return Boolean(r.effected[e]);
}
var xs = function(e) {
  var r = e.isMovingForward, t = e.destination, n = e.draggables, a = e.combine, o = e.afterCritical;
  if (!t.isCombineEnabled)
    return null;
  var i = a.draggableId, l = n[i], s = l.descriptor.index, u = He(i, o);
  return u ? r ? s : s - 1 : r ? s + 1 : s;
}, ws = function(e) {
  var r = e.isMovingForward, t = e.isInHomeList, n = e.insideDestination, a = e.location;
  if (!n.length)
    return null;
  var o = a.index, i = r ? o + 1 : o - 1, l = n[0].descriptor.index, s = n[n.length - 1].descriptor.index, u = t ? s : s + 1;
  return i < l || i > u ? null : i;
}, Cs = function(e) {
  var r = e.isMovingForward, t = e.isInHomeList, n = e.draggable, a = e.draggables, o = e.destination, i = e.insideDestination, l = e.previousImpact, s = e.viewport, u = e.afterCritical, d = l.at;
  if (d || E(!1, "Cannot move in direction without previous impact location"), d.type === "REORDER") {
    var c = ws({
      isMovingForward: r,
      isInHomeList: t,
      location: d.destination,
      insideDestination: i
    });
    return c == null ? null : et({
      draggable: n,
      insideDestination: i,
      destination: o,
      viewport: s,
      last: l.displaced,
      displacedBy: l.displacedBy,
      index: c
    });
  }
  var f = xs({
    isMovingForward: r,
    destination: o,
    displaced: l.displaced,
    draggables: a,
    combine: d.combine,
    afterCritical: u
  });
  return f == null ? null : et({
    draggable: n,
    insideDestination: i,
    destination: o,
    viewport: s,
    last: l.displaced,
    displacedBy: l.displacedBy,
    index: f
  });
}, Es = function(e) {
  var r = e.displaced, t = e.afterCritical, n = e.combineWith, a = e.displacedBy, o = Boolean(r.visible[n] || r.invisible[n]);
  return He(n, t) ? o ? ve : vr(a.point) : o ? a.point : ve;
}, Ds = function(e) {
  var r = e.afterCritical, t = e.impact, n = e.draggables, a = at(t);
  a || E(!1);
  var o = a.draggableId, i = n[o].page.borderBox.center, l = Es({
    displaced: t.displaced,
    afterCritical: r,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return me(i, l);
}, co = function(r, t) {
  return t.margin[r.start] + t.borderBox[r.size] / 2;
}, Is = function(r, t) {
  return t.margin[r.end] + t.borderBox[r.size] / 2;
}, nn = function(r, t, n) {
  return t[r.crossAxisStart] + n.margin[r.crossAxisStart] + n.borderBox[r.crossAxisSize] / 2;
}, ia = function(r) {
  var t = r.axis, n = r.moveRelativeTo, a = r.isMoving;
  return tr(t.line, n.marginBox[t.end] + co(t, a), nn(t, n.marginBox, a));
}, la = function(r) {
  var t = r.axis, n = r.moveRelativeTo, a = r.isMoving;
  return tr(t.line, n.marginBox[t.start] - Is(t, a), nn(t, n.marginBox, a));
}, Ss = function(r) {
  var t = r.axis, n = r.moveInto, a = r.isMoving;
  return tr(t.line, n.contentBox[t.start] + co(t, a), nn(t, n.contentBox, a));
}, Ps = function(e) {
  var r = e.impact, t = e.draggable, n = e.draggables, a = e.droppable, o = e.afterCritical, i = nr(a.descriptor.id, n), l = t.page, s = a.axis;
  if (!i.length)
    return Ss({
      axis: s,
      moveInto: a.page,
      isMoving: l
    });
  var u = r.displaced, d = r.displacedBy, c = u.all[0];
  if (c) {
    var f = n[c];
    if (He(c, o))
      return la({
        axis: s,
        moveRelativeTo: f.page,
        isMoving: l
      });
    var p = Kr(f.page, d.point);
    return la({
      axis: s,
      moveRelativeTo: p,
      isMoving: l
    });
  }
  var g = i[i.length - 1];
  if (g.descriptor.id === t.descriptor.id)
    return l.borderBox.center;
  if (He(g.descriptor.id, o)) {
    var m = Kr(g.page, vr(o.displacedBy.point));
    return ia({
      axis: s,
      moveRelativeTo: m,
      isMoving: l
    });
  }
  return ia({
    axis: s,
    moveRelativeTo: g.page,
    isMoving: l
  });
}, Ft = function(e, r) {
  var t = e.frame;
  return t ? me(r, t.scroll.diff.displacement) : r;
}, Ts = function(r) {
  var t = r.impact, n = r.draggable, a = r.droppable, o = r.draggables, i = r.afterCritical, l = n.page.borderBox.center, s = t.at;
  return !a || !s ? l : s.type === "REORDER" ? Ps({
    impact: t,
    draggable: n,
    draggables: o,
    droppable: a,
    afterCritical: i
  }) : Ds({
    impact: t,
    draggables: o,
    afterCritical: i
  });
}, it = function(e) {
  var r = Ts(e), t = e.droppable, n = t ? Ft(t, r) : r;
  return n;
}, fo = function(e, r) {
  var t = Se(r, e.scroll.initial), n = vr(t), a = Ge({
    top: r.y,
    bottom: r.y + e.frame.height,
    left: r.x,
    right: r.x + e.frame.width
  }), o = {
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
  return o;
};
function sa(e, r) {
  return e.map(function(t) {
    return r[t];
  });
}
function Rs(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t].visible[e];
    if (n)
      return n;
  }
  return null;
}
var As = function(e) {
  var r = e.impact, t = e.viewport, n = e.destination, a = e.draggables, o = e.maxScrollChange, i = fo(t, me(t.scroll.current, o)), l = n.frame ? Zt(n, me(n.frame.scroll.current, o)) : n, s = r.displaced, u = Br({
    afterDragging: sa(s.all, a),
    destination: n,
    displacedBy: r.displacedBy,
    viewport: i.frame,
    last: s,
    forceShouldAnimate: !1
  }), d = Br({
    afterDragging: sa(s.all, a),
    destination: l,
    displacedBy: r.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), c = {}, f = {}, p = [s, u, d];
  s.all.forEach(function(m) {
    var h = Rs(m, p);
    if (h) {
      f[m] = h;
      return;
    }
    c[m] = !0;
  });
  var g = $({}, r, {
    displaced: {
      all: s.all,
      invisible: c,
      visible: f
    }
  });
  return g;
}, Os = function(e, r) {
  return me(e.scroll.diff.displacement, r);
}, an = function(e) {
  var r = e.pageBorderBoxCenter, t = e.draggable, n = e.viewport, a = Os(n, r), o = Se(a, t.page.borderBox.center);
  return me(t.client.borderBox.center, o);
}, po = function(e) {
  var r = e.draggable, t = e.destination, n = e.newPageBorderBoxCenter, a = e.viewport, o = e.withDroppableDisplacement, i = e.onlyOnMainAxis, l = i === void 0 ? !1 : i, s = Se(n, r.page.borderBox.center), u = Gr(r.page.borderBox, s), d = {
    target: u,
    destination: t,
    withDroppableDisplacement: o,
    viewport: a
  };
  return l ? ms(d) : uo(d);
}, Ms = function(e) {
  var r = e.isMovingForward, t = e.draggable, n = e.destination, a = e.draggables, o = e.previousImpact, i = e.viewport, l = e.previousPageBorderBoxCenter, s = e.previousClientSelection, u = e.afterCritical;
  if (!n.isEnabled)
    return null;
  var d = nr(n.descriptor.id, a), c = gr(t, n), f = ss({
    isMovingForward: r,
    draggable: t,
    destination: n,
    insideDestination: d,
    previousImpact: o
  }) || Cs({
    isMovingForward: r,
    isInHomeList: c,
    draggable: t,
    draggables: a,
    destination: n,
    insideDestination: d,
    previousImpact: o,
    viewport: i,
    afterCritical: u
  });
  if (!f)
    return null;
  var p = it({
    impact: f,
    draggable: t,
    droppable: n,
    draggables: a,
    afterCritical: u
  }), g = po({
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: p,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  });
  if (g) {
    var m = an({
      pageBorderBoxCenter: p,
      draggable: t,
      viewport: i
    });
    return {
      clientSelection: m,
      impact: f,
      scrollJumpRequest: null
    };
  }
  var h = Se(p, l), b = As({
    impact: f,
    viewport: i,
    destination: n,
    draggables: a,
    maxScrollChange: h
  });
  return {
    clientSelection: s,
    impact: b,
    scrollJumpRequest: h
  };
}, De = function(r) {
  var t = r.subject.active;
  return t || E(!1, "Cannot get clipped area from droppable"), t;
}, Bs = function(e) {
  var r = e.isMovingForward, t = e.pageBorderBoxCenter, n = e.source, a = e.droppables, o = e.viewport, i = n.subject.active;
  if (!i)
    return null;
  var l = n.axis, s = Be(i[l.start], i[l.end]), u = nt(a).filter(function(c) {
    return c !== n;
  }).filter(function(c) {
    return c.isEnabled;
  }).filter(function(c) {
    return Boolean(c.subject.active);
  }).filter(function(c) {
    return lo(o.frame)(De(c));
  }).filter(function(c) {
    var f = De(c);
    return r ? i[l.crossAxisEnd] < f[l.crossAxisEnd] : f[l.crossAxisStart] < i[l.crossAxisStart];
  }).filter(function(c) {
    var f = De(c), p = Be(f[l.start], f[l.end]);
    return s(f[l.start]) || s(f[l.end]) || p(i[l.start]) || p(i[l.end]);
  }).sort(function(c, f) {
    var p = De(c)[l.crossAxisStart], g = De(f)[l.crossAxisStart];
    return r ? p - g : g - p;
  }).filter(function(c, f, p) {
    return De(c)[l.crossAxisStart] === De(p[0])[l.crossAxisStart];
  });
  if (!u.length)
    return null;
  if (u.length === 1)
    return u[0];
  var d = u.filter(function(c) {
    var f = Be(De(c)[l.start], De(c)[l.end]);
    return f(t[l.line]);
  });
  return d.length === 1 ? d[0] : d.length > 1 ? d.sort(function(c, f) {
    return De(c)[l.start] - De(f)[l.start];
  })[0] : u.sort(function(c, f) {
    var p = na(t, aa(De(c))), g = na(t, aa(De(f)));
    return p !== g ? p - g : De(c)[l.start] - De(f)[l.start];
  })[0];
}, ua = function(r, t) {
  var n = r.page.borderBox.center;
  return He(r.descriptor.id, t) ? Se(n, t.displacedBy.point) : n;
}, Ns = function(r, t) {
  var n = r.page.borderBox;
  return He(r.descriptor.id, t) ? Gr(n, vr(t.displacedBy.point)) : n;
}, Ls = function(e) {
  var r = e.pageBorderBoxCenter, t = e.viewport, n = e.destination, a = e.insideDestination, o = e.afterCritical, i = a.filter(function(l) {
    return uo({
      target: Ns(l, o),
      destination: n,
      viewport: t.frame,
      withDroppableDisplacement: !0
    });
  }).sort(function(l, s) {
    var u = Or(r, Ft(n, ua(l, o))), d = Or(r, Ft(n, ua(s, o)));
    return u < d ? -1 : d < u ? 1 : l.descriptor.index - s.descriptor.index;
  });
  return i[0] || null;
}, kr = pe(function(r, t) {
  var n = t[r.line];
  return {
    value: n,
    point: tr(r.line, n)
  };
}), Fs = function(r, t, n) {
  var a = r.axis;
  if (r.descriptor.mode === "virtual")
    return tr(a.line, t[a.line]);
  var o = r.subject.page.contentBox[a.size], i = nr(r.descriptor.id, n), l = i.reduce(function(d, c) {
    return d + c.client.marginBox[a.size];
  }, 0), s = l + t[a.line], u = s - o;
  return u <= 0 ? null : tr(a.line, u);
}, vo = function(r, t) {
  return $({}, r, {
    scroll: $({}, r.scroll, {
      max: t
    })
  });
}, go = function(r, t, n) {
  var a = r.frame;
  gr(t, r) && E(!1, "Should not add placeholder space to home list"), r.subject.withPlaceholder && E(!1, "Cannot add placeholder size to a subject when it already has one");
  var o = kr(r.axis, t.displaceBy).point, i = Fs(r, o, n), l = {
    placeholderSize: o,
    increasedBy: i,
    oldFrameMaxScroll: r.frame ? r.frame.scroll.max : null
  };
  if (!a) {
    var s = dr({
      page: r.subject.page,
      withPlaceholder: l,
      axis: r.axis,
      frame: r.frame
    });
    return $({}, r, {
      subject: s
    });
  }
  var u = i ? me(a.scroll.max, i) : a.scroll.max, d = vo(a, u), c = dr({
    page: r.subject.page,
    withPlaceholder: l,
    axis: r.axis,
    frame: d
  });
  return $({}, r, {
    subject: c,
    frame: d
  });
}, Gs = function(r) {
  var t = r.subject.withPlaceholder;
  t || E(!1, "Cannot remove placeholder form subject when there was none");
  var n = r.frame;
  if (!n) {
    var a = dr({
      page: r.subject.page,
      axis: r.axis,
      frame: null,
      withPlaceholder: null
    });
    return $({}, r, {
      subject: a
    });
  }
  var o = t.oldFrameMaxScroll;
  o || E(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder");
  var i = vo(n, o), l = dr({
    page: r.subject.page,
    axis: r.axis,
    frame: i,
    withPlaceholder: null
  });
  return $({}, r, {
    subject: l,
    frame: i
  });
}, ks = function(e) {
  var r = e.previousPageBorderBoxCenter, t = e.moveRelativeTo, n = e.insideDestination, a = e.draggable, o = e.draggables, i = e.destination, l = e.viewport, s = e.afterCritical;
  if (!t) {
    if (n.length)
      return null;
    var u = {
      displaced: Mr,
      displacedBy: io,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, d = it({
      impact: u,
      draggable: a,
      droppable: i,
      draggables: o,
      afterCritical: s
    }), c = gr(a, i) ? i : go(i, a, o), f = po({
      draggable: a,
      destination: c,
      newPageBorderBoxCenter: d,
      viewport: l.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    });
    return f ? u : null;
  }
  var p = Boolean(r[i.axis.line] <= t.page.borderBox.center[i.axis.line]), g = function() {
    var h = t.descriptor.index;
    return t.descriptor.id === a.descriptor.id || p ? h : h + 1;
  }(), m = kr(i.axis, a.displaceBy);
  return et({
    draggable: a,
    insideDestination: n,
    destination: i,
    viewport: l,
    displacedBy: m,
    last: Mr,
    index: g
  });
}, Ws = function(e) {
  var r = e.isMovingForward, t = e.previousPageBorderBoxCenter, n = e.draggable, a = e.isOver, o = e.draggables, i = e.droppables, l = e.viewport, s = e.afterCritical, u = Bs({
    isMovingForward: r,
    pageBorderBoxCenter: t,
    source: a,
    droppables: i,
    viewport: l
  });
  if (!u)
    return null;
  var d = nr(u.descriptor.id, o), c = Ls({
    pageBorderBoxCenter: t,
    viewport: l,
    destination: u,
    insideDestination: d,
    afterCritical: s
  }), f = ks({
    previousPageBorderBoxCenter: t,
    destination: u,
    draggable: n,
    draggables: o,
    moveRelativeTo: c,
    insideDestination: d,
    viewport: l,
    afterCritical: s
  });
  if (!f)
    return null;
  var p = it({
    impact: f,
    draggable: n,
    droppable: u,
    draggables: o,
    afterCritical: s
  }), g = an({
    pageBorderBoxCenter: p,
    draggable: n,
    viewport: l
  });
  return {
    clientSelection: g,
    impact: f,
    scrollJumpRequest: null
  };
}, Pe = function(e) {
  var r = e.at;
  return r ? r.type === "REORDER" ? r.destination.droppableId : r.combine.droppableId : null;
}, js = function(r, t) {
  var n = Pe(r);
  return n ? t[n] : null;
}, Us = function(e) {
  var r = e.state, t = e.type, n = js(r.impact, r.dimensions.droppables), a = Boolean(n), o = r.dimensions.droppables[r.critical.droppable.id], i = n || o, l = i.axis.direction, s = l === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || l === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (s && !a)
    return null;
  var u = t === "MOVE_DOWN" || t === "MOVE_RIGHT", d = r.dimensions.draggables[r.critical.draggable.id], c = r.current.page.borderBoxCenter, f = r.dimensions, p = f.draggables, g = f.droppables;
  return s ? Ms({
    isMovingForward: u,
    previousPageBorderBoxCenter: c,
    draggable: d,
    destination: i,
    draggables: p,
    viewport: r.viewport,
    previousClientSelection: r.current.client.selection,
    previousImpact: r.impact,
    afterCritical: r.afterCritical
  }) : Ws({
    isMovingForward: u,
    previousPageBorderBoxCenter: c,
    draggable: d,
    isOver: i,
    draggables: p,
    droppables: g,
    viewport: r.viewport,
    afterCritical: r.afterCritical
  });
};
function er(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function mo(e) {
  var r = Be(e.top, e.bottom), t = Be(e.left, e.right);
  return function(a) {
    return r(a.y) && t(a.x);
  };
}
function $s(e, r) {
  return e.left < r.right && e.right > r.left && e.top < r.bottom && e.bottom > r.top;
}
function Vs(e) {
  var r = e.pageBorderBox, t = e.draggable, n = e.candidates, a = t.page.borderBox.center, o = n.map(function(i) {
    var l = i.axis, s = tr(i.axis.line, r.center[l.line], i.page.borderBox.center[l.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: Or(a, s)
    };
  }).sort(function(i, l) {
    return l.distance - i.distance;
  });
  return o[0] ? o[0].id : null;
}
function Hs(e) {
  var r = e.pageBorderBox, t = e.draggable, n = e.droppables, a = nt(n).filter(function(o) {
    if (!o.isEnabled)
      return !1;
    var i = o.subject.active;
    if (!i || !$s(r, i))
      return !1;
    if (mo(i)(r.center))
      return !0;
    var l = o.axis, s = i.center[l.crossAxisLine], u = r[l.crossAxisStart], d = r[l.crossAxisEnd], c = Be(i[l.crossAxisStart], i[l.crossAxisEnd]), f = c(u), p = c(d);
    return !f && !p ? !0 : f ? u < s : d > s;
  });
  return a.length ? a.length === 1 ? a[0].descriptor.id : Vs({
    pageBorderBox: r,
    draggable: t,
    candidates: a
  }) : null;
}
var bo = function(r, t) {
  return Ge(Gr(r, t));
}, Ys = function(e, r) {
  var t = e.frame;
  return t ? bo(r, t.scroll.diff.value) : r;
};
function ho(e) {
  var r = e.displaced, t = e.id;
  return Boolean(r.visible[t] || r.invisible[t]);
}
function _s(e) {
  var r = e.draggable, t = e.closest, n = e.inHomeList;
  return t ? n && t.descriptor.index > r.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var zs = function(e) {
  var r = e.pageBorderBoxWithDroppableScroll, t = e.draggable, n = e.destination, a = e.insideDestination, o = e.last, i = e.viewport, l = e.afterCritical, s = n.axis, u = kr(n.axis, t.displaceBy), d = u.value, c = r[s.start], f = r[s.end], p = ot(t, a), g = Ye(p, function(h) {
    var b = h.descriptor.id, x = h.page.borderBox.center[s.line], S = He(b, l), y = ho({
      displaced: o,
      id: b
    });
    return S ? y ? f <= x : c < x - d : y ? f <= x + d : c < x;
  }), m = _s({
    draggable: t,
    closest: g,
    inHomeList: gr(t, n)
  });
  return et({
    draggable: t,
    insideDestination: a,
    destination: n,
    viewport: i,
    last: o,
    displacedBy: u,
    index: m
  });
}, qs = 4, Ks = function(e) {
  var r = e.draggable, t = e.pageBorderBoxWithDroppableScroll, n = e.previousImpact, a = e.destination, o = e.insideDestination, i = e.afterCritical;
  if (!a.isCombineEnabled)
    return null;
  var l = a.axis, s = kr(a.axis, r.displaceBy), u = s.value, d = t[l.start], c = t[l.end], f = ot(r, o), p = Ye(f, function(m) {
    var h = m.descriptor.id, b = m.page.borderBox, x = b[l.size], S = x / qs, y = He(h, i), N = ho({
      displaced: n.displaced,
      id: h
    });
    return y ? N ? c > b[l.start] + S && c < b[l.end] - S : d > b[l.start] - u + S && d < b[l.end] - u - S : N ? c > b[l.start] + u + S && c < b[l.end] + u - S : d > b[l.start] + S && d < b[l.end] - S;
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
}, yo = function(e) {
  var r = e.pageOffset, t = e.draggable, n = e.draggables, a = e.droppables, o = e.previousImpact, i = e.viewport, l = e.afterCritical, s = bo(t.page.borderBox, r), u = Hs({
    pageBorderBox: s,
    draggable: t,
    droppables: a
  });
  if (!u)
    return us;
  var d = a[u], c = nr(d.descriptor.id, n), f = Ys(d, s);
  return Ks({
    pageBorderBoxWithDroppableScroll: f,
    draggable: t,
    previousImpact: o,
    destination: d,
    insideDestination: c,
    afterCritical: l
  }) || zs({
    pageBorderBoxWithDroppableScroll: f,
    draggable: t,
    destination: d,
    insideDestination: c,
    last: o.displaced,
    viewport: i,
    afterCritical: l
  });
}, on = function(e, r) {
  var t;
  return $({}, e, (t = {}, t[r.descriptor.id] = r, t));
}, Xs = function(r) {
  var t = r.previousImpact, n = r.impact, a = r.droppables, o = Pe(t), i = Pe(n);
  if (!o || o === i)
    return a;
  var l = a[o];
  if (!l.subject.withPlaceholder)
    return a;
  var s = Gs(l);
  return on(a, s);
}, Js = function(e) {
  var r = e.draggable, t = e.draggables, n = e.droppables, a = e.previousImpact, o = e.impact, i = Xs({
    previousImpact: a,
    impact: o,
    droppables: n
  }), l = Pe(o);
  if (!l)
    return i;
  var s = n[l];
  if (gr(r, s) || s.subject.withPlaceholder)
    return i;
  var u = go(s, r, t);
  return on(i, u);
}, Ir = function(e) {
  var r = e.state, t = e.clientSelection, n = e.dimensions, a = e.viewport, o = e.impact, i = e.scrollJumpRequest, l = a || r.viewport, s = n || r.dimensions, u = t || r.current.client.selection, d = Se(u, r.initial.client.selection), c = {
    offset: d,
    selection: u,
    borderBoxCenter: me(r.initial.client.borderBoxCenter, d)
  }, f = {
    selection: me(c.selection, l.scroll.current),
    borderBoxCenter: me(c.borderBoxCenter, l.scroll.current),
    offset: me(c.offset, l.scroll.diff.value)
  }, p = {
    client: c,
    page: f
  };
  if (r.phase === "COLLECTING")
    return $({
      phase: "COLLECTING"
    }, r, {
      dimensions: s,
      viewport: l,
      current: p
    });
  var g = s.draggables[r.critical.draggable.id], m = o || yo({
    pageOffset: f.offset,
    draggable: g,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: r.impact,
    viewport: l,
    afterCritical: r.afterCritical
  }), h = Js({
    draggable: g,
    impact: m,
    previousImpact: r.impact,
    draggables: s.draggables,
    droppables: s.droppables
  }), b = $({}, r, {
    current: p,
    dimensions: {
      draggables: s.draggables,
      droppables: h
    },
    impact: m,
    viewport: l,
    scrollJumpRequest: i || null,
    forceShouldAnimate: i ? !1 : null
  });
  return b;
};
function Zs(e, r) {
  return e.map(function(t) {
    return r[t];
  });
}
var xo = function(e) {
  var r = e.impact, t = e.viewport, n = e.draggables, a = e.destination, o = e.forceShouldAnimate, i = r.displaced, l = Zs(i.all, n), s = Br({
    afterDragging: l,
    destination: a,
    displacedBy: r.displacedBy,
    viewport: t.frame,
    forceShouldAnimate: o,
    last: i
  });
  return $({}, r, {
    displaced: s
  });
}, wo = function(e) {
  var r = e.impact, t = e.draggable, n = e.droppable, a = e.draggables, o = e.viewport, i = e.afterCritical, l = it({
    impact: r,
    draggable: t,
    draggables: a,
    droppable: n,
    afterCritical: i
  });
  return an({
    pageBorderBoxCenter: l,
    draggable: t,
    viewport: o
  });
}, Co = function(e) {
  var r = e.state, t = e.dimensions, n = e.viewport;
  r.movementMode !== "SNAP" && E(!1);
  var a = r.impact, o = n || r.viewport, i = t || r.dimensions, l = i.draggables, s = i.droppables, u = l[r.critical.draggable.id], d = Pe(a);
  d || E(!1, "Must be over a destination in SNAP movement mode");
  var c = s[d], f = xo({
    impact: a,
    viewport: o,
    destination: c,
    draggables: l
  }), p = wo({
    impact: f,
    draggable: u,
    droppable: c,
    draggables: l,
    viewport: o,
    afterCritical: r.afterCritical
  });
  return Ir({
    impact: f,
    clientSelection: p,
    state: r,
    dimensions: i,
    viewport: o
  });
}, Qs = function(e) {
  return {
    index: e.index,
    droppableId: e.droppableId
  };
}, Eo = function(e) {
  var r = e.draggable, t = e.home, n = e.draggables, a = e.viewport, o = kr(t.axis, r.displaceBy), i = nr(t.descriptor.id, n), l = i.indexOf(r);
  l === -1 && E(!1, "Expected draggable to be inside home list");
  var s = i.slice(l + 1), u = s.reduce(function(p, g) {
    return p[g.descriptor.id] = !0, p;
  }, {}), d = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: u
  }, c = Br({
    afterDragging: s,
    destination: t,
    displacedBy: o,
    last: null,
    viewport: a.frame,
    forceShouldAnimate: !1
  }), f = {
    displaced: c,
    displacedBy: o,
    at: {
      type: "REORDER",
      destination: Qs(r.descriptor)
    }
  };
  return {
    impact: f,
    afterCritical: d
  };
}, eu = function(e, r) {
  return {
    draggables: e.draggables,
    droppables: on(e.droppables, r)
  };
}, ru = function(e) {
  var r = e.draggable, t = e.offset, n = e.initialWindowScroll, a = Kr(r.client, t), o = Xr(a, n), i = $({}, r, {
    placeholder: $({}, r.placeholder, {
      client: a
    }),
    client: a,
    page: o
  });
  return i;
}, tu = function(e) {
  var r = e.frame;
  return r || E(!1, "Expected Droppable to have a frame"), r;
}, nu = function(e) {
  var r = e.additions, t = e.updatedDroppables, n = e.viewport, a = n.scroll.diff.value;
  return r.map(function(o) {
    var i = o.descriptor.droppableId, l = t[i], s = tu(l), u = s.scroll.diff.value, d = me(a, u), c = ru({
      draggable: o,
      offset: d,
      initialWindowScroll: n.scroll.initial
    });
    return c;
  });
}, au = function(e) {
  var r = e.state, t = e.published, n = t.modified.map(function(S) {
    var y = r.dimensions.droppables[S.droppableId], N = Zt(y, S.scroll);
    return N;
  }), a = $({}, r.dimensions.droppables, {}, ao(n)), o = oo(nu({
    additions: t.additions,
    updatedDroppables: a,
    viewport: r.viewport
  })), i = $({}, r.dimensions.draggables, {}, o);
  t.removals.forEach(function(S) {
    delete i[S];
  });
  var l = {
    droppables: a,
    draggables: i
  }, s = Pe(r.impact), u = s ? l.droppables[s] : null, d = l.draggables[r.critical.draggable.id], c = l.droppables[r.critical.droppable.id], f = Eo({
    draggable: d,
    home: c,
    draggables: i,
    viewport: r.viewport
  }), p = f.impact, g = f.afterCritical, m = u && u.isCombineEnabled ? r.impact : p, h = yo({
    pageOffset: r.current.page.offset,
    draggable: l.draggables[r.critical.draggable.id],
    draggables: l.draggables,
    droppables: l.droppables,
    previousImpact: m,
    viewport: r.viewport,
    afterCritical: g
  }), b = $({
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
  var x = $({
    phase: "DROP_PENDING"
  }, b, {
    phase: "DROP_PENDING",
    reason: r.reason,
    isWaiting: !1
  });
  return x;
}, Gt = function(r) {
  return r.movementMode === "SNAP";
}, xt = function(r, t, n) {
  var a = eu(r.dimensions, t);
  return !Gt(r) || n ? Ir({
    state: r,
    dimensions: a
  }) : Co({
    state: r,
    dimensions: a
  });
};
function wt(e) {
  return e.isDragging && e.movementMode === "SNAP" ? $({
    phase: "DRAGGING"
  }, e, {
    scrollJumpRequest: null
  }) : e;
}
var ca = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
}, ou = function(e, r) {
  if (e === void 0 && (e = ca), r.type === "FLUSH")
    return $({}, ca, {
      shouldFlush: !0
    });
  if (r.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && E(!1, "INITIAL_PUBLISH must come after a IDLE phase");
    var t = r.payload, n = t.critical, a = t.clientSelection, o = t.viewport, i = t.dimensions, l = t.movementMode, s = i.draggables[n.draggable.id], u = i.droppables[n.droppable.id], d = {
      selection: a,
      borderBoxCenter: s.client.borderBox.center,
      offset: ve
    }, c = {
      client: d,
      page: {
        selection: me(d.selection, o.scroll.initial),
        borderBoxCenter: me(d.selection, o.scroll.initial),
        offset: me(d.selection, o.scroll.diff.value)
      }
    }, f = nt(i.droppables).every(function(F) {
      return !F.isFixedOnPage;
    }), p = Eo({
      draggable: s,
      home: u,
      draggables: i.draggables,
      viewport: o
    }), g = p.impact, m = p.afterCritical, h = {
      phase: "DRAGGING",
      isDragging: !0,
      critical: n,
      movementMode: l,
      dimensions: i,
      initial: c,
      current: c,
      isWindowScrollAllowed: f,
      impact: g,
      afterCritical: m,
      onLiftImpact: g,
      viewport: o,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
    return h;
  }
  if (r.type === "COLLECTION_STARTING") {
    if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING")
      return e;
    e.phase !== "DRAGGING" && E(!1, "Collection cannot start from phase " + e.phase);
    var b = $({
      phase: "COLLECTING"
    }, e, {
      phase: "COLLECTING"
    });
    return b;
  }
  if (r.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || E(!1, "Unexpected " + r.type + " received in phase " + e.phase), au({
      state: e,
      published: r.payload
    });
  if (r.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    er(e) || E(!1, r.type + " not permitted in phase " + e.phase);
    var x = r.payload.client;
    return $e(x, e.current.client.selection) ? e : Ir({
      state: e,
      clientSelection: x,
      impact: Gt(e) ? e.impact : null
    });
  }
  if (r.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return wt(e);
    er(e) || E(!1, r.type + " not permitted in phase " + e.phase);
    var S = r.payload, y = S.id, N = S.newScroll, M = e.dimensions.droppables[y];
    if (!M)
      return e;
    var P = Zt(M, N);
    return xt(e, P, !1);
  }
  if (r.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    er(e) || E(!1, "Attempting to move in an unsupported phase " + e.phase);
    var k = r.payload, T = k.id, H = k.isEnabled, q = e.dimensions.droppables[T];
    q || E(!1, "Cannot find Droppable[id: " + T + "] to toggle its enabled state"), q.isEnabled === H && E(!1, "Trying to set droppable isEnabled to " + String(H) + `
      but it is already ` + String(q.isEnabled));
    var G = $({}, q, {
      isEnabled: H
    });
    return xt(e, G, !0);
  }
  if (r.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    er(e) || E(!1, "Attempting to move in an unsupported phase " + e.phase);
    var w = r.payload, D = w.id, O = w.isCombineEnabled, L = e.dimensions.droppables[D];
    L || E(!1, "Cannot find Droppable[id: " + D + "] to toggle its isCombineEnabled state"), L.isCombineEnabled === O && E(!1, "Trying to set droppable isCombineEnabled to " + String(O) + `
      but it is already ` + String(L.isCombineEnabled));
    var A = $({}, L, {
      isCombineEnabled: O
    });
    return xt(e, A, !0);
  }
  if (r.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    er(e) || E(!1, "Cannot move by window in phase " + e.phase), e.isWindowScrollAllowed || E(!1, "Window scrolling is currently not supported for fixed lists");
    var j = r.payload.newScroll;
    if ($e(e.viewport.scroll.current, j))
      return wt(e);
    var B = fo(e.viewport, j);
    return Gt(e) ? Co({
      state: e,
      viewport: B
    }) : Ir({
      state: e,
      viewport: B
    });
  }
  if (r.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!er(e))
      return e;
    var U = r.payload.maxScroll;
    if ($e(U, e.viewport.scroll.max))
      return e;
    var Y = $({}, e.viewport, {
      scroll: $({}, e.viewport.scroll, {
        max: U
      })
    });
    return $({
      phase: "DRAGGING"
    }, e, {
      viewport: Y
    });
  }
  if (r.type === "MOVE_UP" || r.type === "MOVE_DOWN" || r.type === "MOVE_LEFT" || r.type === "MOVE_RIGHT") {
    if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING")
      return e;
    e.phase !== "DRAGGING" && E(!1, r.type + " received while not in DRAGGING phase");
    var z = Us({
      state: e,
      type: r.type
    });
    return z ? Ir({
      state: e,
      impact: z.impact,
      clientSelection: z.clientSelection,
      scrollJumpRequest: z.scrollJumpRequest
    }) : e;
  }
  if (r.type === "DROP_PENDING") {
    var V = r.payload.reason;
    e.phase !== "COLLECTING" && E(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase");
    var Q = $({
      phase: "DROP_PENDING"
    }, e, {
      phase: "DROP_PENDING",
      isWaiting: !0,
      reason: V
    });
    return Q;
  }
  if (r.type === "DROP_ANIMATE") {
    var ae = r.payload, oe = ae.completed, xe = ae.dropDuration, we = ae.newHomeClientOffset;
    e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || E(!1, "Cannot animate drop from phase " + e.phase);
    var be = {
      phase: "DROP_ANIMATING",
      completed: oe,
      dropDuration: xe,
      newHomeClientOffset: we,
      dimensions: e.dimensions
    };
    return be;
  }
  if (r.type === "DROP_COMPLETE") {
    var Ce = r.payload.completed;
    return {
      phase: "IDLE",
      completed: Ce,
      shouldFlush: !1
    };
  }
  return e;
}, iu = function(r) {
  return {
    type: "BEFORE_INITIAL_CAPTURE",
    payload: r
  };
}, lu = function(r) {
  return {
    type: "LIFT",
    payload: r
  };
}, su = function(r) {
  return {
    type: "INITIAL_PUBLISH",
    payload: r
  };
}, uu = function(r) {
  return {
    type: "PUBLISH_WHILE_DRAGGING",
    payload: r
  };
}, cu = function() {
  return {
    type: "COLLECTION_STARTING",
    payload: null
  };
}, du = function(r) {
  return {
    type: "UPDATE_DROPPABLE_SCROLL",
    payload: r
  };
}, fu = function(r) {
  return {
    type: "UPDATE_DROPPABLE_IS_ENABLED",
    payload: r
  };
}, pu = function(r) {
  return {
    type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
    payload: r
  };
}, Do = function(r) {
  return {
    type: "MOVE",
    payload: r
  };
}, vu = function(r) {
  return {
    type: "MOVE_BY_WINDOW_SCROLL",
    payload: r
  };
}, gu = function(r) {
  return {
    type: "UPDATE_VIEWPORT_MAX_SCROLL",
    payload: r
  };
}, mu = function() {
  return {
    type: "MOVE_UP",
    payload: null
  };
}, bu = function() {
  return {
    type: "MOVE_DOWN",
    payload: null
  };
}, hu = function() {
  return {
    type: "MOVE_RIGHT",
    payload: null
  };
}, yu = function() {
  return {
    type: "MOVE_LEFT",
    payload: null
  };
}, ln = function() {
  return {
    type: "FLUSH",
    payload: null
  };
}, xu = function(r) {
  return {
    type: "DROP_ANIMATE",
    payload: r
  };
}, sn = function(r) {
  return {
    type: "DROP_COMPLETE",
    payload: r
  };
}, Io = function(r) {
  return {
    type: "DROP",
    payload: r
  };
}, wu = function(r) {
  return {
    type: "DROP_PENDING",
    payload: r
  };
}, So = function() {
  return {
    type: "DROP_ANIMATION_FINISHED",
    payload: null
  };
};
function Cu(e) {
  if (!(e.length <= 1)) {
    for (var r = e.map(function(l) {
      return l.descriptor.index;
    }), t = {}, n = 1; n < r.length; n++) {
      var a = r[n], o = r[n - 1];
      a !== o + 1 && (t[a] = !0);
    }
    if (!!Object.keys(t).length) {
      var i = r.map(function(l) {
        var s = Boolean(t[l]);
        return s ? "[🔥" + l + "]" : "" + l;
      }).join(", ");
      se(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ` + i + `
  `);
    }
  }
}
function Eu(e, r) {
  {
    var t = nr(e.droppable.id, r.draggables);
    Cu(t);
  }
}
var Du = function(e) {
  return function(r) {
    var t = r.getState, n = r.dispatch;
    return function(a) {
      return function(o) {
        if (o.type !== "LIFT") {
          a(o);
          return;
        }
        var i = o.payload, l = i.id, s = i.clientSelection, u = i.movementMode, d = t();
        d.phase === "DROP_ANIMATING" && n(sn({
          completed: d.completed
        })), t().phase !== "IDLE" && E(!1, "Unexpected phase to start a drag"), n(ln()), n(iu({
          draggableId: l,
          movementMode: u
        }));
        var c = {
          shouldPublishImmediately: u === "SNAP"
        }, f = {
          draggableId: l,
          scrollOptions: c
        }, p = e.startPublishing(f), g = p.critical, m = p.dimensions, h = p.viewport;
        Eu(g, m), n(su({
          critical: g,
          dimensions: m,
          clientSelection: s,
          movementMode: u,
          viewport: h
        }));
      };
    };
  };
}, Iu = function(e) {
  return function() {
    return function(r) {
      return function(t) {
        t.type === "INITIAL_PUBLISH" && e.dragging(), t.type === "DROP_ANIMATE" && e.dropping(t.payload.completed.result.reason), (t.type === "FLUSH" || t.type === "DROP_COMPLETE") && e.resting(), r(t);
      };
    };
  };
}, un = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Nr = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, cn = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Je = cn.outOfTheWay + "s " + un.outOfTheWay, Sr = {
  fluid: "opacity " + Je,
  snap: "transform " + Je + ", opacity " + Je,
  drop: function(r) {
    var t = r + "s " + un.drop;
    return "transform " + t + ", opacity " + t;
  },
  outOfTheWay: "transform " + Je,
  placeholder: "height " + Je + ", width " + Je + ", margin " + Je
}, da = function(r) {
  return $e(r, ve) ? null : "translate(" + r.x + "px, " + r.y + "px)";
}, kt = {
  moveTo: da,
  drop: function(r, t) {
    var n = da(r);
    return n ? t ? n + " scale(" + Nr.scale.drop + ")" : n : null;
  }
}, Wt = cn.minDropTime, Po = cn.maxDropTime, Su = Po - Wt, fa = 1500, Pu = 0.6, Tu = function(e) {
  var r = e.current, t = e.destination, n = e.reason, a = Or(r, t);
  if (a <= 0)
    return Wt;
  if (a >= fa)
    return Po;
  var o = a / fa, i = Wt + Su * o, l = n === "CANCEL" ? i * Pu : i;
  return Number(l.toFixed(2));
}, Ru = function(e) {
  var r = e.impact, t = e.draggable, n = e.dimensions, a = e.viewport, o = e.afterCritical, i = n.draggables, l = n.droppables, s = Pe(r), u = s ? l[s] : null, d = l[t.descriptor.droppableId], c = wo({
    impact: r,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: u || d,
    viewport: a
  }), f = Se(c, t.client.borderBox.center);
  return f;
}, Au = function(e) {
  var r = e.draggables, t = e.reason, n = e.lastImpact, a = e.home, o = e.viewport, i = e.onLiftImpact;
  if (!n.at || t !== "DROP") {
    var l = xo({
      draggables: r,
      impact: i,
      destination: a,
      viewport: o,
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
  var s = $({}, n, {
    displaced: Mr
  });
  return {
    impact: s,
    didDropInsideDroppable: !0
  };
}, Ou = function(e) {
  var r = e.getState, t = e.dispatch;
  return function(n) {
    return function(a) {
      if (a.type !== "DROP") {
        n(a);
        return;
      }
      var o = r(), i = a.payload.reason;
      if (o.phase === "COLLECTING") {
        t(wu({
          reason: i
        }));
        return;
      }
      if (o.phase !== "IDLE") {
        var l = o.phase === "DROP_PENDING" && o.isWaiting;
        l && E(!1, "A DROP action occurred while DROP_PENDING and still waiting"), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || E(!1, "Cannot drop in phase: " + o.phase);
        var s = o.critical, u = o.dimensions, d = u.draggables[o.critical.draggable.id], c = Au({
          reason: i,
          lastImpact: o.impact,
          afterCritical: o.afterCritical,
          onLiftImpact: o.onLiftImpact,
          home: o.dimensions.droppables[o.critical.droppable.id],
          viewport: o.viewport,
          draggables: o.dimensions.draggables
        }), f = c.impact, p = c.didDropInsideDroppable, g = p ? en(f) : null, m = p ? at(f) : null, h = {
          index: s.draggable.index,
          droppableId: s.droppable.id
        }, b = {
          draggableId: d.descriptor.id,
          type: d.descriptor.type,
          source: h,
          reason: i,
          mode: o.movementMode,
          destination: g,
          combine: m
        }, x = Ru({
          impact: f,
          draggable: d,
          dimensions: u,
          viewport: o.viewport,
          afterCritical: o.afterCritical
        }), S = {
          critical: o.critical,
          afterCritical: o.afterCritical,
          result: b,
          impact: f
        }, y = !$e(o.current.client.offset, x) || Boolean(b.combine);
        if (!y) {
          t(sn({
            completed: S
          }));
          return;
        }
        var N = Tu({
          current: o.current.client.offset,
          destination: x,
          reason: i
        }), M = {
          newHomeClientOffset: x,
          dropDuration: N,
          completed: S
        };
        t(xu(M));
      }
    };
  };
}, To = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
};
function Mu(e) {
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
function Bu(e) {
  var r = e.onWindowScroll;
  function t() {
    r(To());
  }
  var n = Ar(t), a = Mu(n), o = Ue;
  function i() {
    return o !== Ue;
  }
  function l() {
    i() && E(!1, "Cannot start scroll listener when already active"), o = Me(window, [a]);
  }
  function s() {
    i() || E(!1, "Cannot stop scroll listener when not active"), n.cancel(), o(), o = Ue;
  }
  return {
    start: l,
    stop: s,
    isActive: i
  };
}
var Nu = function(r) {
  return r.type === "DROP_COMPLETE" || r.type === "DROP_ANIMATE" || r.type === "FLUSH";
}, Lu = function(e) {
  var r = Bu({
    onWindowScroll: function(n) {
      e.dispatch(vu({
        newScroll: n
      }));
    }
  });
  return function(t) {
    return function(n) {
      !r.isActive() && n.type === "INITIAL_PUBLISH" && r.start(), r.isActive() && Nu(n) && r.stop(), t(n);
    };
  };
}, Fu = function(e) {
  var r = !1, t = !1, n = setTimeout(function() {
    t = !0;
  }), a = function(i) {
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
    r = !0, e(i), clearTimeout(n);
  };
  return a.wasCalled = function() {
    return r;
  }, a;
}, Gu = function() {
  var e = [], r = function(o) {
    var i = Qt(e, function(u) {
      return u.timerId === o;
    });
    i === -1 && E(!1, "Could not find timer");
    var l = e.splice(i, 1), s = l[0];
    s.callback();
  }, t = function(o) {
    var i = setTimeout(function() {
      return r(i);
    }), l = {
      timerId: i,
      callback: o
    };
    e.push(l);
  }, n = function() {
    if (!!e.length) {
      var o = [].concat(e);
      e.length = 0, o.forEach(function(i) {
        clearTimeout(i.timerId), i.callback();
      });
    }
  };
  return {
    add: t,
    flush: n
  };
}, ku = function(r, t) {
  return r == null && t == null ? !0 : r == null || t == null ? !1 : r.droppableId === t.droppableId && r.index === t.index;
}, Wu = function(r, t) {
  return r == null && t == null ? !0 : r == null || t == null ? !1 : r.draggableId === t.draggableId && r.droppableId === t.droppableId;
}, ju = function(r, t) {
  if (r === t)
    return !0;
  var n = r.draggable.id === t.draggable.id && r.draggable.droppableId === t.draggable.droppableId && r.draggable.type === t.draggable.type && r.draggable.index === t.draggable.index, a = r.droppable.id === t.droppable.id && r.droppable.type === t.droppable.type;
  return n && a;
}, wr = function(r, t) {
  t();
}, $r = function(r, t) {
  return {
    draggableId: r.draggable.id,
    type: r.droppable.type,
    source: {
      droppableId: r.droppable.id,
      index: r.draggable.index
    },
    mode: t
  };
}, Ct = function(r, t, n, a) {
  if (!r) {
    n(a(t));
    return;
  }
  var o = Fu(n), i = {
    announce: o
  };
  r(t, i), o.wasCalled() || n(a(t));
}, Uu = function(e, r) {
  var t = Gu(), n = null, a = function(f, p) {
    n && E(!1, "Cannot fire onBeforeCapture as a drag start has already been published"), wr("onBeforeCapture", function() {
      var g = e().onBeforeCapture;
      if (g) {
        var m = {
          draggableId: f,
          mode: p
        };
        g(m);
      }
    });
  }, o = function(f, p) {
    n && E(!1, "Cannot fire onBeforeDragStart as a drag start has already been published"), wr("onBeforeDragStart", function() {
      var g = e().onBeforeDragStart;
      g && g($r(f, p));
    });
  }, i = function(f, p) {
    n && E(!1, "Cannot fire onBeforeDragStart as a drag start has already been published");
    var g = $r(f, p);
    n = {
      mode: p,
      lastCritical: f,
      lastLocation: g.source,
      lastCombine: null
    }, t.add(function() {
      wr("onDragStart", function() {
        return Ct(e().onDragStart, g, r, zr.onDragStart);
      });
    });
  }, l = function(f, p) {
    var g = en(p), m = at(p);
    n || E(!1, "Cannot fire onDragMove when onDragStart has not been called");
    var h = !ju(f, n.lastCritical);
    h && (n.lastCritical = f);
    var b = !ku(n.lastLocation, g);
    b && (n.lastLocation = g);
    var x = !Wu(n.lastCombine, m);
    if (x && (n.lastCombine = m), !(!h && !b && !x)) {
      var S = $({}, $r(f, n.mode), {
        combine: m,
        destination: g
      });
      t.add(function() {
        wr("onDragUpdate", function() {
          return Ct(e().onDragUpdate, S, r, zr.onDragUpdate);
        });
      });
    }
  }, s = function() {
    n || E(!1, "Can only flush responders while dragging"), t.flush();
  }, u = function(f) {
    n || E(!1, "Cannot fire onDragEnd when there is no matching onDragStart"), n = null, wr("onDragEnd", function() {
      return Ct(e().onDragEnd, f, r, zr.onDragEnd);
    });
  }, d = function() {
    if (!!n) {
      var f = $({}, $r(n.lastCritical, n.mode), {
        combine: null,
        destination: null,
        reason: "CANCEL"
      });
      u(f);
    }
  };
  return {
    beforeCapture: a,
    beforeStart: o,
    start: i,
    update: l,
    flush: s,
    drop: u,
    abort: d
  };
}, $u = function(e, r) {
  var t = Uu(e, r);
  return function(n) {
    return function(a) {
      return function(o) {
        if (o.type === "BEFORE_INITIAL_CAPTURE") {
          t.beforeCapture(o.payload.draggableId, o.payload.movementMode);
          return;
        }
        if (o.type === "INITIAL_PUBLISH") {
          var i = o.payload.critical;
          t.beforeStart(i, o.payload.movementMode), a(o), t.start(i, o.payload.movementMode);
          return;
        }
        if (o.type === "DROP_COMPLETE") {
          var l = o.payload.completed.result;
          t.flush(), a(o), t.drop(l);
          return;
        }
        if (a(o), o.type === "FLUSH") {
          t.abort();
          return;
        }
        var s = n.getState();
        s.phase === "DRAGGING" && t.update(s.critical, s.impact);
      };
    };
  };
}, Vu = function(e) {
  return function(r) {
    return function(t) {
      if (t.type !== "DROP_ANIMATION_FINISHED") {
        r(t);
        return;
      }
      var n = e.getState();
      n.phase !== "DROP_ANIMATING" && E(!1, "Cannot finish a drop animating when no drop is occurring"), e.dispatch(sn({
        completed: n.completed
      }));
    };
  };
}, Hu = function(e) {
  var r = null, t = null;
  function n() {
    t && (cancelAnimationFrame(t), t = null), r && (r(), r = null);
  }
  return function(a) {
    return function(o) {
      if ((o.type === "FLUSH" || o.type === "DROP_COMPLETE" || o.type === "DROP_ANIMATION_FINISHED") && n(), a(o), o.type === "DROP_ANIMATE") {
        var i = {
          eventName: "scroll",
          options: {
            capture: !0,
            passive: !1,
            once: !0
          },
          fn: function() {
            var s = e.getState();
            s.phase === "DROP_ANIMATING" && e.dispatch(So());
          }
        };
        t = requestAnimationFrame(function() {
          t = null, r = Me(window, [i]);
        });
      }
    };
  };
}, Yu = function(e) {
  return function() {
    return function(r) {
      return function(t) {
        (t.type === "DROP_COMPLETE" || t.type === "FLUSH" || t.type === "DROP_ANIMATE") && e.stopPublishing(), r(t);
      };
    };
  };
}, _u = function(e) {
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
}, zu = function(r) {
  return r.type === "DROP_COMPLETE" || r.type === "DROP_ANIMATE" || r.type === "FLUSH";
}, qu = function(e) {
  return function(r) {
    return function(t) {
      return function(n) {
        if (zu(n)) {
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
}, Ku = function(e) {
  return function(r) {
    return function(t) {
      if (r(t), t.type === "PUBLISH_WHILE_DRAGGING") {
        var n = e.getState();
        n.phase === "DROP_PENDING" && (n.isWaiting || e.dispatch(Io({
          reason: n.reason
        })));
      }
    };
  };
}, Xu = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "react-beautiful-dnd"
}) : La, Ju = function(e) {
  var r = e.dimensionMarshal, t = e.focusMarshal, n = e.styleMarshal, a = e.getResponders, o = e.announce, i = e.autoScroller;
  return Na(ou, Xu(Ai(Iu(n), Yu(r), Du(r), Ou, Vu, Hu, Ku, qu(i), Lu, _u(t), $u(a, o))));
}, Et = function() {
  return {
    additions: {},
    removals: {},
    modified: {}
  };
};
function Zu(e) {
  var r = e.registry, t = e.callbacks, n = Et(), a = null, o = function() {
    a || (t.collectionStarting(), a = requestAnimationFrame(function() {
      a = null;
      var d = n, c = d.additions, f = d.removals, p = d.modified, g = Object.keys(c).map(function(b) {
        return r.draggable.getById(b).getDimension(ve);
      }).sort(function(b, x) {
        return b.descriptor.index - x.descriptor.index;
      }), m = Object.keys(p).map(function(b) {
        var x = r.droppable.getById(b), S = x.callbacks.getScrollWhileDragging();
        return {
          droppableId: b,
          scroll: S
        };
      }), h = {
        additions: g,
        removals: Object.keys(f),
        modified: m
      };
      n = Et(), t.publish(h);
    }));
  }, i = function(d) {
    var c = d.descriptor.id;
    n.additions[c] = d, n.modified[d.descriptor.droppableId] = !0, n.removals[c] && delete n.removals[c], o();
  }, l = function(d) {
    var c = d.descriptor;
    n.removals[c.id] = !0, n.modified[c.droppableId] = !0, n.additions[c.id] && delete n.additions[c.id], o();
  }, s = function() {
    !a || (cancelAnimationFrame(a), a = null, n = Et());
  };
  return {
    add: i,
    remove: l,
    stop: s
  };
}
var Ro = function(e) {
  var r = e.scrollHeight, t = e.scrollWidth, n = e.height, a = e.width, o = Se({
    x: t,
    y: r
  }, {
    x: a,
    y: n
  }), i = {
    x: Math.max(0, o.x),
    y: Math.max(0, o.y)
  };
  return i;
}, Ao = function() {
  var e = document.documentElement;
  return e || E(!1, "Cannot find document.documentElement"), e;
}, Oo = function() {
  var e = Ao(), r = Ro({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
  return r;
}, Qu = function() {
  var e = To(), r = Oo(), t = e.y, n = e.x, a = Ao(), o = a.clientWidth, i = a.clientHeight, l = n + o, s = t + i, u = Ge({
    top: t,
    left: n,
    right: l,
    bottom: s
  }), d = {
    frame: u,
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
  return d;
}, ec = function(e) {
  var r = e.critical, t = e.scrollOptions, n = e.registry, a = Qu(), o = a.scroll.current, i = r.droppable, l = n.droppable.getAllByType(i.type).map(function(c) {
    return c.callbacks.getDimensionAndWatchScroll(o, t);
  }), s = n.draggable.getAllByType(r.draggable.type).map(function(c) {
    return c.getDimension(o);
  }), u = {
    draggables: oo(s),
    droppables: ao(l)
  }, d = {
    dimensions: u,
    critical: r,
    viewport: a
  };
  return d;
};
function pa(e, r, t) {
  if (t.descriptor.id === r.id || t.descriptor.type !== r.type)
    return !1;
  var n = e.droppable.getById(t.descriptor.droppableId);
  return n.descriptor.mode !== "virtual" ? (se(`
      You are attempting to add or remove a Draggable [id: ` + t.descriptor.id + `]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var rc = function(e, r) {
  var t = null, n = Zu({
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
  }, o = function(p, g) {
    !t || (e.droppable.exists(p) || E(!1, "Cannot update isCombineEnabled flag of Droppable " + p + " as it is not registered"), r.updateDroppableIsCombineEnabled({
      id: p,
      isCombineEnabled: g
    }));
  }, i = function(p, g) {
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
  }, u = function(p) {
    t || E(!1, "Should only be subscribed when a collection is occurring");
    var g = t.critical.draggable;
    p.type === "ADDITION" && pa(e, g, p.value) && n.add(p.value), p.type === "REMOVAL" && pa(e, g, p.value) && n.remove(p.value);
  }, d = function(p) {
    t && E(!1, "Cannot start capturing critical dimensions as there is already a collection");
    var g = e.draggable.getById(p.draggableId), m = e.droppable.getById(g.descriptor.droppableId), h = {
      draggable: g.descriptor,
      droppable: m.descriptor
    }, b = e.subscribe(u);
    return t = {
      critical: h,
      unsubscribe: b
    }, ec({
      critical: h,
      registry: e,
      scrollOptions: p.scrollOptions
    });
  }, c = {
    updateDroppableIsEnabled: a,
    updateDroppableIsCombineEnabled: o,
    scrollDroppable: l,
    updateDroppableScroll: i,
    startPublishing: d,
    stopPublishing: s
  };
  return c;
}, Mo = function(e, r) {
  return e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === r ? !1 : e.completed.result.reason === "DROP";
}, tc = function(e) {
  window.scrollBy(e.x, e.y);
}, nc = pe(function(e) {
  return nt(e).filter(function(r) {
    return !(!r.isEnabled || !r.frame);
  });
}), ac = function(r, t) {
  var n = Ye(nc(t), function(a) {
    return a.frame || E(!1, "Invalid result"), mo(a.frame.pageMarginBox)(r);
  });
  return n;
}, oc = function(e) {
  var r = e.center, t = e.destination, n = e.droppables;
  if (t) {
    var a = n[t];
    return a.frame ? a : null;
  }
  var o = ac(r, n);
  return o;
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
}, ic = function(e, r) {
  var t = e[r.size] * Ve.startFromPercentage, n = e[r.size] * Ve.maxScrollAtPercentage, a = {
    startScrollingFrom: t,
    maxScrollValueAt: n
  };
  return a;
}, Bo = function(e) {
  var r = e.startOfRange, t = e.endOfRange, n = e.current, a = t - r;
  if (a === 0)
    return se(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0;
  var o = n - r, i = o / a;
  return i;
}, dn = 1, lc = function(e, r) {
  if (e > r.startScrollingFrom)
    return 0;
  if (e <= r.maxScrollValueAt)
    return Ve.maxPixelScroll;
  if (e === r.startScrollingFrom)
    return dn;
  var t = Bo({
    startOfRange: r.maxScrollValueAt,
    endOfRange: r.startScrollingFrom,
    current: e
  }), n = 1 - t, a = Ve.maxPixelScroll * Ve.ease(n);
  return Math.ceil(a);
}, va = Ve.durationDampening.accelerateAt, ga = Ve.durationDampening.stopDampeningAt, sc = function(e, r) {
  var t = r, n = ga, a = Date.now(), o = a - t;
  if (o >= ga)
    return e;
  if (o < va)
    return dn;
  var i = Bo({
    startOfRange: va,
    endOfRange: n,
    current: o
  }), l = e * Ve.ease(i);
  return Math.ceil(l);
}, ma = function(e) {
  var r = e.distanceToEdge, t = e.thresholds, n = e.dragStartTime, a = e.shouldUseTimeDampening, o = lc(r, t);
  return o === 0 ? 0 : a ? Math.max(sc(o, n), dn) : o;
}, ba = function(e) {
  var r = e.container, t = e.distanceToEdges, n = e.dragStartTime, a = e.axis, o = e.shouldUseTimeDampening, i = ic(r, a), l = t[a.end] < t[a.start];
  return l ? ma({
    distanceToEdge: t[a.end],
    thresholds: i,
    dragStartTime: n,
    shouldUseTimeDampening: o
  }) : -1 * ma({
    distanceToEdge: t[a.start],
    thresholds: i,
    dragStartTime: n,
    shouldUseTimeDampening: o
  });
}, uc = function(e) {
  var r = e.container, t = e.subject, n = e.proposedScroll, a = t.height > r.height, o = t.width > r.width;
  return !o && !a ? n : o && a ? null : {
    x: o ? 0 : n.x,
    y: a ? 0 : n.y
  };
}, cc = to(function(e) {
  return e === 0 ? 0 : e;
}), No = function(e) {
  var r = e.dragStartTime, t = e.container, n = e.subject, a = e.center, o = e.shouldUseTimeDampening, i = {
    top: a.y - t.top,
    right: t.right - a.x,
    bottom: t.bottom - a.y,
    left: a.x - t.left
  }, l = ba({
    container: t,
    distanceToEdges: i,
    dragStartTime: r,
    axis: rn,
    shouldUseTimeDampening: o
  }), s = ba({
    container: t,
    distanceToEdges: i,
    dragStartTime: r,
    axis: so,
    shouldUseTimeDampening: o
  }), u = cc({
    x: s,
    y: l
  });
  if ($e(u, ve))
    return null;
  var d = uc({
    container: t,
    subject: n,
    proposedScroll: u
  });
  return d ? $e(d, ve) ? null : d : null;
}, dc = to(function(e) {
  return e === 0 ? 0 : e > 0 ? 1 : -1;
}), fn = function() {
  var e = function(t, n) {
    return t < 0 ? t : t > n ? t - n : 0;
  };
  return function(r) {
    var t = r.current, n = r.max, a = r.change, o = me(t, a), i = {
      x: e(o.x, n.x),
      y: e(o.y, n.y)
    };
    return $e(i, ve) ? null : i;
  };
}(), Lo = function(r) {
  var t = r.max, n = r.current, a = r.change, o = {
    x: Math.max(n.x, t.x),
    y: Math.max(n.y, t.y)
  }, i = dc(a), l = fn({
    max: o,
    current: n,
    change: i
  });
  return !l || i.x !== 0 && l.x === 0 || i.y !== 0 && l.y === 0;
}, pn = function(r, t) {
  return Lo({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  });
}, fc = function(r, t) {
  if (!pn(r, t))
    return null;
  var n = r.scroll.max, a = r.scroll.current;
  return fn({
    current: a,
    max: n,
    change: t
  });
}, vn = function(r, t) {
  var n = r.frame;
  return n ? Lo({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, pc = function(r, t) {
  var n = r.frame;
  return !n || !vn(r, t) ? null : fn({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
}, vc = function(e) {
  var r = e.viewport, t = e.subject, n = e.center, a = e.dragStartTime, o = e.shouldUseTimeDampening, i = No({
    dragStartTime: a,
    container: r.frame,
    subject: t,
    center: n,
    shouldUseTimeDampening: o
  });
  return i && pn(r, i) ? i : null;
}, gc = function(e) {
  var r = e.droppable, t = e.subject, n = e.center, a = e.dragStartTime, o = e.shouldUseTimeDampening, i = r.frame;
  if (!i)
    return null;
  var l = No({
    dragStartTime: a,
    container: i.pageMarginBox,
    subject: t,
    center: n,
    shouldUseTimeDampening: o
  });
  return l && vn(r, l) ? l : null;
}, ha = function(e) {
  var r = e.state, t = e.dragStartTime, n = e.shouldUseTimeDampening, a = e.scrollWindow, o = e.scrollDroppable, i = r.current.page.borderBoxCenter, l = r.dimensions.draggables[r.critical.draggable.id], s = l.page.marginBox;
  if (r.isWindowScrollAllowed) {
    var u = r.viewport, d = vc({
      dragStartTime: t,
      viewport: u,
      subject: s,
      center: i,
      shouldUseTimeDampening: n
    });
    if (d) {
      a(d);
      return;
    }
  }
  var c = oc({
    center: i,
    destination: Pe(r.impact),
    droppables: r.dimensions.droppables
  });
  if (!!c) {
    var f = gc({
      dragStartTime: t,
      droppable: c,
      subject: s,
      center: i,
      shouldUseTimeDampening: n
    });
    f && o(c.descriptor.id, f);
  }
}, mc = function(e) {
  var r = e.scrollWindow, t = e.scrollDroppable, n = Ar(r), a = Ar(t), o = null, i = function(d) {
    o || E(!1, "Cannot fluid scroll if not dragging");
    var c = o, f = c.shouldUseTimeDampening, p = c.dragStartTime;
    ha({
      state: d,
      scrollWindow: n,
      scrollDroppable: a,
      dragStartTime: p,
      shouldUseTimeDampening: f
    });
  }, l = function(d) {
    o && E(!1, "Cannot start auto scrolling when already started");
    var c = Date.now(), f = !1, p = function() {
      f = !0;
    };
    ha({
      state: d,
      dragStartTime: 0,
      shouldUseTimeDampening: !1,
      scrollWindow: p,
      scrollDroppable: p
    }), o = {
      dragStartTime: c,
      shouldUseTimeDampening: f
    }, f && i(d);
  }, s = function() {
    !o || (n.cancel(), a.cancel(), o = null);
  };
  return {
    start: l,
    stop: s,
    scroll: i
  };
}, bc = function(e) {
  var r = e.move, t = e.scrollDroppable, n = e.scrollWindow, a = function(u, d) {
    var c = me(u.current.client.selection, d);
    r({
      client: c
    });
  }, o = function(u, d) {
    if (!vn(u, d))
      return d;
    var c = pc(u, d);
    if (!c)
      return t(u.descriptor.id, d), null;
    var f = Se(d, c);
    t(u.descriptor.id, f);
    var p = Se(d, f);
    return p;
  }, i = function(u, d, c) {
    if (!u || !pn(d, c))
      return c;
    var f = fc(d, c);
    if (!f)
      return n(c), null;
    var p = Se(c, f);
    n(p);
    var g = Se(c, p);
    return g;
  }, l = function(u) {
    var d = u.scrollJumpRequest;
    if (!!d) {
      var c = Pe(u.impact);
      c || E(!1, "Cannot perform a jump scroll when there is no destination");
      var f = o(u.dimensions.droppables[c], d);
      if (!!f) {
        var p = u.viewport, g = i(u.isWindowScrollAllowed, p, f);
        !g || a(u, g);
      }
    }
  };
  return l;
}, hc = function(e) {
  var r = e.scrollDroppable, t = e.scrollWindow, n = e.move, a = mc({
    scrollWindow: t,
    scrollDroppable: r
  }), o = bc({
    move: n,
    scrollWindow: t,
    scrollDroppable: r
  }), i = function(u) {
    if (u.phase === "DRAGGING") {
      if (u.movementMode === "FLUID") {
        a.scroll(u);
        return;
      }
      !u.scrollJumpRequest || o(u);
    }
  }, l = {
    scroll: i,
    start: a.start,
    stop: a.stop
  };
  return l;
}, fr = "data-rbd", pr = function() {
  var e = fr + "-drag-handle";
  return {
    base: e,
    draggableId: e + "-draggable-id",
    contextId: e + "-context-id"
  };
}(), jt = function() {
  var e = fr + "-draggable";
  return {
    base: e,
    contextId: e + "-context-id",
    id: e + "-id"
  };
}(), yc = function() {
  var e = fr + "-droppable";
  return {
    base: e,
    contextId: e + "-context-id",
    id: e + "-id"
  };
}(), ya = {
  contextId: fr + "-scroll-container-context-id"
}, xc = function(r) {
  return function(t) {
    return "[" + t + '="' + r + '"]';
  };
}, Cr = function(r, t) {
  return r.map(function(n) {
    var a = n.styles[t];
    return a ? n.selector + " { " + a + " }" : "";
  }).join(" ");
}, wc = "pointer-events: none;", Cc = function(e) {
  var r = xc(e), t = function() {
    var l = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: r(pr.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: l,
        dragging: wc,
        dropAnimating: l
      }
    };
  }(), n = function() {
    var l = `
      transition: ` + Sr.outOfTheWay + `;
    `;
    return {
      selector: r(jt.contextId),
      styles: {
        dragging: l,
        dropAnimating: l,
        userCancel: l
      }
    };
  }(), a = {
    selector: r(yc.contextId),
    styles: {
      always: "overflow-anchor: none;"
    }
  }, o = {
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
  }, i = [n, t, a, o];
  return {
    always: Cr(i, "always"),
    resting: Cr(i, "resting"),
    dragging: Cr(i, "dragging"),
    dropAnimating: Cr(i, "dropAnimating"),
    userCancel: Cr(i, "userCancel")
  };
}, Te = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Ma : ke, Dt = function() {
  var r = document.querySelector("head");
  return r || E(!1, "Cannot find the head to append a style to"), r;
}, xa = function(r) {
  var t = document.createElement("style");
  return r && t.setAttribute("nonce", r), t.type = "text/css", t;
};
function Ec(e, r) {
  var t = J(function() {
    return Cc(e);
  }, [e]), n = ne(null), a = ne(null), o = W(pe(function(c) {
    var f = a.current;
    f || E(!1, "Cannot set dynamic style element if it is not set"), f.textContent = c;
  }), []), i = W(function(c) {
    var f = n.current;
    f || E(!1, "Cannot set dynamic style element if it is not set"), f.textContent = c;
  }, []);
  Te(function() {
    !n.current && !a.current || E(!1, "style elements already mounted");
    var c = xa(r), f = xa(r);
    return n.current = c, a.current = f, c.setAttribute(fr + "-always", e), f.setAttribute(fr + "-dynamic", e), Dt().appendChild(c), Dt().appendChild(f), i(t.always), o(t.resting), function() {
      var p = function(m) {
        var h = m.current;
        h || E(!1, "Cannot unmount ref as it is not set"), Dt().removeChild(h), m.current = null;
      };
      p(n), p(a);
    };
  }, [r, i, o, t.always, t.resting, e]);
  var l = W(function() {
    return o(t.dragging);
  }, [o, t.dragging]), s = W(function(c) {
    if (c === "DROP") {
      o(t.dropAnimating);
      return;
    }
    o(t.userCancel);
  }, [o, t.dropAnimating, t.userCancel]), u = W(function() {
    !a.current || o(t.resting);
  }, [o, t.resting]), d = J(function() {
    return {
      dragging: l,
      dropping: s,
      resting: u
    };
  }, [l, s, u]);
  return d;
}
var Fo = function(e) {
  return e && e.ownerDocument ? e.ownerDocument.defaultView : window;
};
function Wr(e) {
  return e instanceof Fo(e).HTMLElement;
}
function Go(e, r) {
  var t = "[" + pr.contextId + '="' + e + '"]', n = no(document.querySelectorAll(t));
  if (!n.length)
    return se('Unable to find any drag handles in the context "' + e + '"'), null;
  var a = Ye(n, function(o) {
    return o.getAttribute(pr.draggableId) === r;
  });
  return a ? Wr(a) ? a : (se("drag handle needs to be a HTMLElement"), null) : (se('Unable to find drag handle with id "' + r + '" as no handle with a matching id was found'), null);
}
function Dc(e) {
  var r = ne({}), t = ne(null), n = ne(null), a = ne(!1), o = W(function(f, p) {
    var g = {
      id: f,
      focus: p
    };
    return r.current[f] = g, function() {
      var h = r.current, b = h[f];
      b !== g && delete h[f];
    };
  }, []), i = W(function(f) {
    var p = Go(e, f);
    p && p !== document.activeElement && p.focus();
  }, [e]), l = W(function(f, p) {
    t.current === f && (t.current = p);
  }, []), s = W(function() {
    n.current || !a.current || (n.current = requestAnimationFrame(function() {
      n.current = null;
      var f = t.current;
      f && i(f);
    }));
  }, [i]), u = W(function(f) {
    t.current = null;
    var p = document.activeElement;
    !p || p.getAttribute(pr.draggableId) === f && (t.current = f);
  }, []);
  Te(function() {
    return a.current = !0, function() {
      a.current = !1;
      var f = n.current;
      f && cancelAnimationFrame(f);
    };
  }, []);
  var d = J(function() {
    return {
      register: o,
      tryRecordFocus: u,
      tryRestoreFocusRecorded: s,
      tryShiftRecord: l
    };
  }, [o, u, s, l]);
  return d;
}
function Ic() {
  var e = {
    draggables: {},
    droppables: {}
  }, r = [];
  function t(c) {
    return r.push(c), function() {
      var p = r.indexOf(c);
      p !== -1 && r.splice(p, 1);
    };
  }
  function n(c) {
    r.length && r.forEach(function(f) {
      return f(c);
    });
  }
  function a(c) {
    return e.draggables[c] || null;
  }
  function o(c) {
    var f = a(c);
    return f || E(!1, "Cannot find draggable entry with id [" + c + "]"), f;
  }
  var i = {
    register: function(f) {
      e.draggables[f.descriptor.id] = f, n({
        type: "ADDITION",
        value: f
      });
    },
    update: function(f, p) {
      var g = e.draggables[p.descriptor.id];
      !g || g.uniqueId === f.uniqueId && (delete e.draggables[p.descriptor.id], e.draggables[f.descriptor.id] = f);
    },
    unregister: function(f) {
      var p = f.descriptor.id, g = a(p);
      !g || f.uniqueId === g.uniqueId && (delete e.draggables[p], n({
        type: "REMOVAL",
        value: f
      }));
    },
    getById: o,
    findById: a,
    exists: function(f) {
      return Boolean(a(f));
    },
    getAllByType: function(f) {
      return Qr(e.draggables).filter(function(p) {
        return p.descriptor.type === f;
      });
    }
  };
  function l(c) {
    return e.droppables[c] || null;
  }
  function s(c) {
    var f = l(c);
    return f || E(!1, "Cannot find droppable entry with id [" + c + "]"), f;
  }
  var u = {
    register: function(f) {
      e.droppables[f.descriptor.id] = f;
    },
    unregister: function(f) {
      var p = l(f.descriptor.id);
      !p || f.uniqueId === p.uniqueId && delete e.droppables[f.descriptor.id];
    },
    getById: s,
    findById: l,
    exists: function(f) {
      return Boolean(l(f));
    },
    getAllByType: function(f) {
      return Qr(e.droppables).filter(function(p) {
        return p.descriptor.type === f;
      });
    }
  };
  function d() {
    e.draggables = {}, e.droppables = {}, r.length = 0;
  }
  return {
    draggable: i,
    droppable: u,
    subscribe: t,
    clean: d
  };
}
function Sc() {
  var e = J(Ic, []);
  return ke(function() {
    return function() {
      requestAnimationFrame(e.clean);
    };
  }, [e]), e;
}
var gn = te.createContext(null), Lr = function() {
  var e = document.body;
  return e || E(!1, "Cannot find document.body"), e;
}, Pc = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(100%)"
}, Tc = function(r) {
  return "rbd-announcement-" + r;
};
function Rc(e) {
  var r = J(function() {
    return Tc(e);
  }, [e]), t = ne(null);
  ke(function() {
    var o = document.createElement("div");
    return t.current = o, o.id = r, o.setAttribute("aria-live", "assertive"), o.setAttribute("aria-atomic", "true"), $(o.style, Pc), Lr().appendChild(o), function() {
      setTimeout(function() {
        var s = Lr();
        s.contains(o) && s.removeChild(o), o === t.current && (t.current = null);
      });
    };
  }, [r]);
  var n = W(function(a) {
    var o = t.current;
    if (o) {
      o.textContent = a;
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
var Ac = 0, Oc = {
  separator: "::"
};
function mn(e, r) {
  return r === void 0 && (r = Oc), J(function() {
    return "" + e + r.separator + Ac++;
  }, [r.separator, e]);
}
function Mc(e) {
  var r = e.contextId, t = e.uniqueId;
  return "rbd-hidden-text-" + r + "-" + t;
}
function Bc(e) {
  var r = e.contextId, t = e.text, n = mn("hidden-text", {
    separator: "-"
  }), a = J(function() {
    return Mc({
      contextId: r,
      uniqueId: n
    });
  }, [n, r]);
  return ke(function() {
    var i = document.createElement("div");
    return i.id = a, i.textContent = t, i.style.display = "none", Lr().appendChild(i), function() {
      var s = Lr();
      s.contains(i) && s.removeChild(i);
    };
  }, [a, t]), a;
}
var lt = te.createContext(null), Nc = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
}, Lc = /(\d+)\.(\d+)\.(\d+)/, wa = function(r) {
  var t = Lc.exec(r);
  t == null && E(!1, "Unable to parse React version " + r);
  var n = Number(t[1]), a = Number(t[2]), o = Number(t[3]);
  return {
    major: n,
    minor: a,
    patch: o,
    raw: r
  };
}, Fc = function(r, t) {
  return t.major > r.major ? !0 : t.major < r.major ? !1 : t.minor > r.minor ? !0 : t.minor < r.minor ? !1 : t.patch >= r.patch;
}, Gc = function(e, r) {
  var t = wa(e), n = wa(r);
  Fc(t, n) || se(`
    React version: [` + n.raw + `]
    does not satisfy expected peer dependency version: [` + t.raw + `]

    This can result in run time bugs, and even fatal crashes
  `);
}, It = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/doctype.md
`, kc = function(e) {
  var r = e.doctype;
  if (!r) {
    se(`
      No <!doctype html> found.

      ` + It + `
    `);
    return;
  }
  r.name.toLowerCase() !== "html" && se(`
      Unexpected <!doctype> found: (` + r.name + `)

      ` + It + `
    `), r.publicId !== "" && se(`
      Unexpected <!doctype> publicId found: (` + r.publicId + `)
      A html5 doctype does not have a publicId

      ` + It + `
    `);
};
function bn(e) {
  e();
}
function jr(e, r) {
  bn(function() {
    ke(function() {
      try {
        e();
      } catch (t) {
        Lt(`
          A setup problem was encountered.

          > ` + t.message + `
        `);
      }
    }, r);
  });
}
function Wc() {
  jr(function() {
    Gc(Nc.react, te.version), kc(document);
  }, []);
}
function hn(e) {
  var r = ne(e);
  return ke(function() {
    r.current = e;
  }), r;
}
function jc() {
  var e = null;
  function r() {
    return Boolean(e);
  }
  function t(i) {
    return i === e;
  }
  function n(i) {
    e && E(!1, "Cannot claim lock as it is already claimed");
    var l = {
      abandon: i
    };
    return e = l, l;
  }
  function a() {
    e || E(!1, "Cannot release lock when there is no lock"), e = null;
  }
  function o() {
    e && (e.abandon(), a());
  }
  return {
    isClaimed: r,
    isActive: t,
    claim: n,
    release: a,
    tryAbandon: o
  };
}
var Uc = 9, $c = 13, yn = 27, ko = 32, Vc = 33, Hc = 34, Yc = 35, _c = 36, zc = 37, qc = 38, Kc = 39, Xc = 40, Vr, Jc = (Vr = {}, Vr[$c] = !0, Vr[Uc] = !0, Vr), Wo = function(e) {
  Jc[e.keyCode] && e.preventDefault();
}, st = function() {
  var e = "visibilitychange";
  if (typeof document > "u")
    return e;
  var r = [e, "ms" + e, "webkit" + e, "moz" + e, "o" + e], t = Ye(r, function(n) {
    return "on" + n in document;
  });
  return t || e;
}(), jo = 0, Ca = 5;
function Zc(e, r) {
  return Math.abs(r.x - e.x) >= Ca || Math.abs(r.y - e.y) >= Ca;
}
var Ea = {
  type: "IDLE"
};
function Qc(e) {
  var r = e.cancel, t = e.completed, n = e.getPhase, a = e.setPhase;
  return [{
    eventName: "mousemove",
    fn: function(i) {
      var l = i.button, s = i.clientX, u = i.clientY;
      if (l === jo) {
        var d = {
          x: s,
          y: u
        }, c = n();
        if (c.type === "DRAGGING") {
          i.preventDefault(), c.actions.move(d);
          return;
        }
        c.type !== "PENDING" && E(!1, "Cannot be IDLE");
        var f = c.point;
        if (!!Zc(f, d)) {
          i.preventDefault();
          var p = c.actions.fluidLift(d);
          a({
            type: "DRAGGING",
            actions: p
          });
        }
      }
    }
  }, {
    eventName: "mouseup",
    fn: function(i) {
      var l = n();
      if (l.type !== "DRAGGING") {
        r();
        return;
      }
      i.preventDefault(), l.actions.drop({
        shouldBlockNextClick: !0
      }), t();
    }
  }, {
    eventName: "mousedown",
    fn: function(i) {
      n().type === "DRAGGING" && i.preventDefault(), r();
    }
  }, {
    eventName: "keydown",
    fn: function(i) {
      var l = n();
      if (l.type === "PENDING") {
        r();
        return;
      }
      if (i.keyCode === yn) {
        i.preventDefault(), r();
        return;
      }
      Wo(i);
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
    fn: function(i) {
      var l = n();
      if (l.type === "IDLE" && E(!1, "Unexpected phase"), l.actions.shouldRespectForcePress()) {
        r();
        return;
      }
      i.preventDefault();
    }
  }, {
    eventName: st,
    fn: r
  }];
}
function ed(e) {
  var r = ne(Ea), t = ne(Ue), n = J(function() {
    return {
      eventName: "mousedown",
      fn: function(c) {
        if (!c.defaultPrevented && c.button === jo && !(c.ctrlKey || c.metaKey || c.shiftKey || c.altKey)) {
          var f = e.findClosestDraggableId(c);
          if (!!f) {
            var p = e.tryGetLock(f, i, {
              sourceEvent: c
            });
            if (!!p) {
              c.preventDefault();
              var g = {
                x: c.clientX,
                y: c.clientY
              };
              t.current(), u(p, g);
            }
          }
        }
      }
    };
  }, [e]), a = J(function() {
    return {
      eventName: "webkitmouseforcewillbegin",
      fn: function(c) {
        if (!c.defaultPrevented) {
          var f = e.findClosestDraggableId(c);
          if (!!f) {
            var p = e.findOptionsForDraggable(f);
            !p || p.shouldRespectForcePress || !e.canGetLock(f) || c.preventDefault();
          }
        }
      }
    };
  }, [e]), o = W(function() {
    var c = {
      passive: !1,
      capture: !0
    };
    t.current = Me(window, [a, n], c);
  }, [a, n]), i = W(function() {
    var d = r.current;
    d.type !== "IDLE" && (r.current = Ea, t.current(), o());
  }, [o]), l = W(function() {
    var d = r.current;
    i(), d.type === "DRAGGING" && d.actions.cancel({
      shouldBlockNextClick: !0
    }), d.type === "PENDING" && d.actions.abort();
  }, [i]), s = W(function() {
    var c = {
      capture: !0,
      passive: !1
    }, f = Qc({
      cancel: l,
      completed: i,
      getPhase: function() {
        return r.current;
      },
      setPhase: function(g) {
        r.current = g;
      }
    });
    t.current = Me(window, f, c);
  }, [l, i]), u = W(function(c, f) {
    r.current.type !== "IDLE" && E(!1, "Expected to move from IDLE to PENDING drag"), r.current = {
      type: "PENDING",
      point: f,
      actions: c
    }, s();
  }, [s]);
  Te(function() {
    return o(), function() {
      t.current();
    };
  }, [o]);
}
var sr;
function rd() {
}
var td = (sr = {}, sr[Hc] = !0, sr[Vc] = !0, sr[_c] = !0, sr[Yc] = !0, sr);
function nd(e, r) {
  function t() {
    r(), e.cancel();
  }
  function n() {
    r(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: function(o) {
      if (o.keyCode === yn) {
        o.preventDefault(), t();
        return;
      }
      if (o.keyCode === ko) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === Xc) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === qc) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === Kc) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === zc) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (td[o.keyCode]) {
        o.preventDefault();
        return;
      }
      Wo(o);
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
    eventName: st,
    fn: t
  }];
}
function ad(e) {
  var r = ne(rd), t = J(function() {
    return {
      eventName: "keydown",
      fn: function(o) {
        if (o.defaultPrevented || o.keyCode !== ko)
          return;
        var i = e.findClosestDraggableId(o);
        if (!i)
          return;
        var l = e.tryGetLock(i, d, {
          sourceEvent: o
        });
        if (!l)
          return;
        o.preventDefault();
        var s = !0, u = l.snapLift();
        r.current();
        function d() {
          s || E(!1, "Cannot stop capturing a keyboard drag when not capturing"), s = !1, r.current(), n();
        }
        r.current = Me(window, nd(u, d), {
          capture: !0,
          passive: !1
        });
      }
    };
  }, [e]), n = W(function() {
    var o = {
      passive: !1,
      capture: !0
    };
    r.current = Me(window, [t], o);
  }, [t]);
  Te(function() {
    return n(), function() {
      r.current();
    };
  }, [n]);
}
var St = {
  type: "IDLE"
}, od = 120, id = 0.15;
function ld(e) {
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
      a.keyCode === yn && a.preventDefault(), r();
    }
  }, {
    eventName: st,
    fn: r
  }];
}
function sd(e) {
  var r = e.cancel, t = e.completed, n = e.getPhase;
  return [{
    eventName: "touchmove",
    options: {
      capture: !1
    },
    fn: function(o) {
      var i = n();
      if (i.type !== "DRAGGING") {
        r();
        return;
      }
      i.hasMoved = !0;
      var l = o.touches[0], s = l.clientX, u = l.clientY, d = {
        x: s,
        y: u
      };
      o.preventDefault(), i.actions.move(d);
    }
  }, {
    eventName: "touchend",
    fn: function(o) {
      var i = n();
      if (i.type !== "DRAGGING") {
        r();
        return;
      }
      o.preventDefault(), i.actions.drop({
        shouldBlockNextClick: !0
      }), t();
    }
  }, {
    eventName: "touchcancel",
    fn: function(o) {
      if (n().type !== "DRAGGING") {
        r();
        return;
      }
      o.preventDefault(), r();
    }
  }, {
    eventName: "touchforcechange",
    fn: function(o) {
      var i = n();
      i.type === "IDLE" && E(!1);
      var l = o.touches[0];
      if (!!l) {
        var s = l.force >= id;
        if (!!s) {
          var u = i.actions.shouldRespectForcePress();
          if (i.type === "PENDING") {
            u && r();
            return;
          }
          if (u) {
            if (i.hasMoved) {
              o.preventDefault();
              return;
            }
            r();
            return;
          }
          o.preventDefault();
        }
      }
    }
  }, {
    eventName: st,
    fn: r
  }];
}
function ud(e) {
  var r = ne(St), t = ne(Ue), n = W(function() {
    return r.current;
  }, []), a = W(function(p) {
    r.current = p;
  }, []), o = J(function() {
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
              var h = p.touches[0], b = h.clientX, x = h.clientY, S = {
                x: b,
                y: x
              };
              t.current(), c(m, S);
            }
          }
        }
      }
    };
  }, [e]), i = W(function() {
    var p = {
      capture: !0,
      passive: !1
    };
    t.current = Me(window, [o], p);
  }, [o]), l = W(function() {
    var f = r.current;
    f.type !== "IDLE" && (f.type === "PENDING" && clearTimeout(f.longPressTimerId), a(St), t.current(), i());
  }, [i, a]), s = W(function() {
    var f = r.current;
    l(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [l]), u = W(function() {
    var p = {
      capture: !0,
      passive: !1
    }, g = {
      cancel: s,
      completed: l,
      getPhase: n
    }, m = Me(window, sd(g), p), h = Me(window, ld(g), p);
    t.current = function() {
      m(), h();
    };
  }, [s, n, l]), d = W(function() {
    var p = n();
    p.type !== "PENDING" && E(!1, "Cannot start dragging from phase " + p.type);
    var g = p.actions.fluidLift(p.point);
    a({
      type: "DRAGGING",
      actions: g,
      hasMoved: !1
    });
  }, [n, a]), c = W(function(p, g) {
    n().type !== "IDLE" && E(!1, "Expected to move from IDLE to PENDING drag");
    var m = setTimeout(d, od);
    a({
      type: "PENDING",
      point: g,
      actions: p,
      longPressTimerId: m
    }), u();
  }, [u, n, a, d]);
  Te(function() {
    return i(), function() {
      t.current();
      var g = n();
      g.type === "PENDING" && (clearTimeout(g.longPressTimerId), a(St));
    };
  }, [n, i, a]), Te(function() {
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
function cd(e) {
  bn(function() {
    var r = hn(e);
    jr(function() {
      r.current.length !== e.length && E(!1, "Cannot change the amount of sensor hooks after mounting");
    });
  });
}
var dd = {
  input: !0,
  button: !0,
  textarea: !0,
  select: !0,
  option: !0,
  optgroup: !0,
  video: !0,
  audio: !0
};
function Uo(e, r) {
  if (r == null)
    return !1;
  var t = Boolean(dd[r.tagName.toLowerCase()]);
  if (t)
    return !0;
  var n = r.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : r === e ? !1 : Uo(e, r.parentElement);
}
function fd(e, r) {
  var t = r.target;
  return Wr(t) ? Uo(e, t) : !1;
}
var pd = function(e) {
  return Ge(e.getBoundingClientRect()).center;
};
function vd(e) {
  return e instanceof Fo(e).Element;
}
var gd = function() {
  var e = "matches";
  if (typeof document > "u")
    return e;
  var r = [e, "msMatchesSelector", "webkitMatchesSelector"], t = Ye(r, function(n) {
    return n in Element.prototype;
  });
  return t || e;
}();
function $o(e, r) {
  return e == null ? null : e[gd](r) ? e : $o(e.parentElement, r);
}
function md(e, r) {
  return e.closest ? e.closest(r) : $o(e, r);
}
function bd(e) {
  return "[" + pr.contextId + '="' + e + '"]';
}
function hd(e, r) {
  var t = r.target;
  if (!vd(t))
    return se("event.target must be a Element"), null;
  var n = bd(e), a = md(t, n);
  return a ? Wr(a) ? a : (se("drag handle must be a HTMLElement"), null) : null;
}
function yd(e, r) {
  var t = hd(e, r);
  return t ? t.getAttribute(pr.draggableId) : null;
}
function xd(e, r) {
  var t = "[" + jt.contextId + '="' + e + '"]', n = no(document.querySelectorAll(t)), a = Ye(n, function(o) {
    return o.getAttribute(jt.id) === r;
  });
  return a ? Wr(a) ? a : (se("Draggable element is not a HTMLElement"), null) : null;
}
function wd(e) {
  e.preventDefault();
}
function Hr(e) {
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
function Vo(e) {
  var r = e.lockAPI, t = e.store, n = e.registry, a = e.draggableId;
  if (r.isClaimed())
    return !1;
  var o = n.draggable.findById(a);
  return o ? !(!o.options.isEnabled || !Mo(t.getState(), a)) : (se("Unable to find draggable with id: " + a), !1);
}
function Cd(e) {
  var r = e.lockAPI, t = e.contextId, n = e.store, a = e.registry, o = e.draggableId, i = e.forceSensorStop, l = e.sourceEvent, s = Vo({
    lockAPI: r,
    store: n,
    registry: a,
    draggableId: o
  });
  if (!s)
    return null;
  var u = a.draggable.getById(o), d = xd(t, u.descriptor.id);
  if (!d)
    return se("Unable to find draggable element with id: " + o), null;
  if (l && !u.options.canDragInteractiveElements && fd(d, l))
    return null;
  var c = r.claim(i || Ue), f = "PRE_DRAG";
  function p() {
    return u.options.shouldRespectForcePress;
  }
  function g() {
    return r.isActive(c);
  }
  function m(M, P) {
    Hr({
      expected: M,
      phase: f,
      isLockActive: g,
      shouldWarn: !0
    }) && n.dispatch(P());
  }
  var h = m.bind(null, "DRAGGING");
  function b(M) {
    function P() {
      r.release(), f = "COMPLETED";
    }
    f !== "PRE_DRAG" && (P(), f !== "PRE_DRAG" && E(!1, "Cannot lift in phase " + f)), n.dispatch(lu(M.liftActionArgs)), f = "DRAGGING";
    function k(T, H) {
      if (H === void 0 && (H = {
        shouldBlockNextClick: !1
      }), M.cleanup(), H.shouldBlockNextClick) {
        var q = Me(window, [{
          eventName: "click",
          fn: wd,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(q);
      }
      P(), n.dispatch(Io({
        reason: T
      }));
    }
    return $({
      isActive: function() {
        return Hr({
          expected: "DRAGGING",
          phase: f,
          isLockActive: g,
          shouldWarn: !1
        });
      },
      shouldRespectForcePress: p,
      drop: function(H) {
        return k("DROP", H);
      },
      cancel: function(H) {
        return k("CANCEL", H);
      }
    }, M.actions);
  }
  function x(M) {
    var P = Ar(function(T) {
      h(function() {
        return Do({
          client: T
        });
      });
    }), k = b({
      liftActionArgs: {
        id: o,
        clientSelection: M,
        movementMode: "FLUID"
      },
      cleanup: function() {
        return P.cancel();
      },
      actions: {
        move: P
      }
    });
    return $({}, k, {
      move: P
    });
  }
  function S() {
    var M = {
      moveUp: function() {
        return h(mu);
      },
      moveRight: function() {
        return h(hu);
      },
      moveDown: function() {
        return h(bu);
      },
      moveLeft: function() {
        return h(yu);
      }
    };
    return b({
      liftActionArgs: {
        id: o,
        clientSelection: pd(d),
        movementMode: "SNAP"
      },
      cleanup: Ue,
      actions: M
    });
  }
  function y() {
    var M = Hr({
      expected: "PRE_DRAG",
      phase: f,
      isLockActive: g,
      shouldWarn: !0
    });
    M && r.release();
  }
  var N = {
    isActive: function() {
      return Hr({
        expected: "PRE_DRAG",
        phase: f,
        isLockActive: g,
        shouldWarn: !1
      });
    },
    shouldRespectForcePress: p,
    fluidLift: x,
    snapLift: S,
    abort: y
  };
  return N;
}
var Ed = [ed, ad, ud];
function Dd(e) {
  var r = e.contextId, t = e.store, n = e.registry, a = e.customSensors, o = e.enableDefaultSensors, i = [].concat(o ? Ed : [], a || []), l = cr(function() {
    return jc();
  })[0], s = W(function(x, S) {
    x.isDragging && !S.isDragging && l.tryAbandon();
  }, [l]);
  Te(function() {
    var x = t.getState(), S = t.subscribe(function() {
      var y = t.getState();
      s(x, y), x = y;
    });
    return S;
  }, [l, t, s]), Te(function() {
    return l.tryAbandon;
  }, [l.tryAbandon]);
  var u = W(function(b) {
    return Vo({
      lockAPI: l,
      registry: n,
      store: t,
      draggableId: b
    });
  }, [l, n, t]), d = W(function(b, x, S) {
    return Cd({
      lockAPI: l,
      registry: n,
      contextId: r,
      store: t,
      draggableId: b,
      forceSensorStop: x,
      sourceEvent: S && S.sourceEvent ? S.sourceEvent : null
    });
  }, [r, l, n, t]), c = W(function(b) {
    return yd(r, b);
  }, [r]), f = W(function(b) {
    var x = n.draggable.findById(b);
    return x ? x.options : null;
  }, [n.draggable]), p = W(function() {
    !l.isClaimed() || (l.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(ln()));
  }, [l, t]), g = W(l.isClaimed, [l]), m = J(function() {
    return {
      canGetLock: u,
      tryGetLock: d,
      findClosestDraggableId: c,
      findOptionsForDraggable: f,
      tryReleaseLock: p,
      isLockClaimed: g
    };
  }, [u, d, c, f, p, g]);
  cd(i);
  for (var h = 0; h < i.length; h++)
    i[h](m);
}
var Id = function(r) {
  return {
    onBeforeCapture: r.onBeforeCapture,
    onBeforeDragStart: r.onBeforeDragStart,
    onDragStart: r.onDragStart,
    onDragEnd: r.onDragEnd,
    onDragUpdate: r.onDragUpdate
  };
};
function Er(e) {
  return e.current || E(!1, "Could not find store from lazy ref"), e.current;
}
function Sd(e) {
  var r = e.contextId, t = e.setCallbacks, n = e.sensors, a = e.nonce, o = e.dragHandleUsageInstructions, i = ne(null);
  Wc();
  var l = hn(e), s = W(function() {
    return Id(l.current);
  }, [l]), u = Rc(r), d = Bc({
    contextId: r,
    text: o
  }), c = Ec(r, a), f = W(function(T) {
    Er(i).dispatch(T);
  }, []), p = J(function() {
    return Un({
      publishWhileDragging: uu,
      updateDroppableScroll: du,
      updateDroppableIsEnabled: fu,
      updateDroppableIsCombineEnabled: pu,
      collectionStarting: cu
    }, f);
  }, [f]), g = Sc(), m = J(function() {
    return rc(g, p);
  }, [g, p]), h = J(function() {
    return hc($({
      scrollWindow: tc,
      scrollDroppable: m.scrollDroppable
    }, Un({
      move: Do
    }, f)));
  }, [m.scrollDroppable, f]), b = Dc(r), x = J(function() {
    return Ju({
      announce: u,
      autoScroller: h,
      dimensionMarshal: m,
      focusMarshal: b,
      getResponders: s,
      styleMarshal: c
    });
  }, [u, h, m, b, s, c]);
  i.current && i.current !== x && se("unexpected store change"), i.current = x;
  var S = W(function() {
    var T = Er(i), H = T.getState();
    H.phase !== "IDLE" && T.dispatch(ln());
  }, []), y = W(function() {
    var T = Er(i).getState();
    return T.isDragging || T.phase === "DROP_ANIMATING";
  }, []), N = J(function() {
    return {
      isDragging: y,
      tryAbort: S
    };
  }, [y, S]);
  t(N);
  var M = W(function(T) {
    return Mo(Er(i).getState(), T);
  }, []), P = W(function() {
    return er(Er(i).getState());
  }, []), k = J(function() {
    return {
      marshal: m,
      focus: b,
      contextId: r,
      canLift: M,
      isMovementAllowed: P,
      dragHandleUsageInstructionsId: d,
      registry: g
    };
  }, [r, m, d, b, M, P, g]);
  return Dd({
    contextId: r,
    store: x,
    registry: g,
    customSensors: n,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), ke(function() {
    return S;
  }, [S]), te.createElement(lt.Provider, {
    value: k
  }, te.createElement($a, {
    context: gn,
    store: x
  }, e.children));
}
var Pd = 0;
function Td() {
  return J(function() {
    return "" + Pd++;
  }, []);
}
function Rd(e) {
  var r = Td(), t = e.dragHandleUsageInstructions || zr.dragHandleUsageInstructions;
  return te.createElement(Xl, null, function(n) {
    return te.createElement(Sd, {
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
var xn = function(r) {
  return function(t) {
    return r === t;
  };
}, Ad = xn("scroll"), Od = xn("auto"), Md = xn("visible"), Da = function(r, t) {
  return t(r.overflowX) || t(r.overflowY);
}, Bd = function(r, t) {
  return t(r.overflowX) && t(r.overflowY);
}, Ho = function(r) {
  var t = window.getComputedStyle(r), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Da(n, Ad) || Da(n, Od);
}, Nd = function() {
  var r = Lr(), t = document.documentElement;
  if (t || E(!1), !Ho(r))
    return !1;
  var n = window.getComputedStyle(t), a = {
    overflowX: n.overflowX,
    overflowY: n.overflowY
  };
  return Bd(a, Md) || se(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Yo = function e(r) {
  return r == null ? null : r === document.body ? Nd() ? r : null : r === document.documentElement ? null : Ho(r) ? r : e(r.parentElement);
}, Ld = function(e) {
  if (!!e) {
    var r = Yo(e.parentElement);
    !r || se(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
  }
}, Ut = function(e) {
  return {
    x: e.scrollLeft,
    y: e.scrollTop
  };
}, Fd = function e(r) {
  if (!r)
    return !1;
  var t = window.getComputedStyle(r);
  return t.position === "fixed" ? !0 : e(r.parentElement);
}, Gd = function(e) {
  var r = Yo(e), t = Fd(e);
  return {
    closestScrollable: r,
    isFixedOnPage: t
  };
}, kd = function(e) {
  var r = e.descriptor, t = e.isEnabled, n = e.isCombineEnabled, a = e.isFixedOnPage, o = e.direction, i = e.client, l = e.page, s = e.closest, u = function() {
    if (!s)
      return null;
    var p = s.scrollSize, g = s.client, m = Ro({
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
  }(), d = o === "vertical" ? rn : so, c = dr({
    page: l,
    withPlaceholder: null,
    axis: d,
    frame: u
  }), f = {
    descriptor: r,
    isCombineEnabled: n,
    isFixedOnPage: a,
    axis: d,
    isEnabled: t,
    client: i,
    page: l,
    frame: u,
    subject: c
  };
  return f;
}, Wd = function(r, t) {
  var n = Za(r);
  if (!t || r !== t)
    return n;
  var a = n.paddingBox.top - t.scrollTop, o = n.paddingBox.left - t.scrollLeft, i = a + t.scrollHeight, l = o + t.scrollWidth, s = {
    top: a,
    right: l,
    bottom: i,
    left: o
  }, u = Xt(s, n.border), d = Jt({
    borderBox: u,
    margin: n.margin,
    border: n.border,
    padding: n.padding
  });
  return d;
}, jd = function(e) {
  var r = e.ref, t = e.descriptor, n = e.env, a = e.windowScroll, o = e.direction, i = e.isDropDisabled, l = e.isCombineEnabled, s = e.shouldClipSubject, u = n.closestScrollable, d = Wd(r, u), c = Xr(d, a), f = function() {
    if (!u)
      return null;
    var g = Za(u), m = {
      scrollHeight: u.scrollHeight,
      scrollWidth: u.scrollWidth
    };
    return {
      client: g,
      page: Xr(g, a),
      scroll: Ut(u),
      scrollSize: m,
      shouldClipSubject: s
    };
  }(), p = kd({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: l,
    isFixedOnPage: n.isFixedOnPage,
    direction: o,
    client: d,
    page: c,
    closest: f
  });
  return p;
}, Ud = {
  passive: !1
}, $d = {
  passive: !0
}, Ia = function(e) {
  return e.shouldPublishImmediately ? Ud : $d;
};
function rt(e) {
  var r = Ht(e);
  return r || E(!1, "Could not find required context"), r;
}
var Yr = function(r) {
  return r && r.env.closestScrollable || null;
};
function Vd(e) {
  var r = ne(null), t = rt(lt), n = mn("droppable"), a = t.registry, o = t.marshal, i = hn(e), l = J(function() {
    return {
      id: e.droppableId,
      type: e.type,
      mode: e.mode
    };
  }, [e.droppableId, e.mode, e.type]), s = ne(l), u = J(function() {
    return pe(function(y, N) {
      r.current || E(!1, "Can only update scroll when dragging");
      var M = {
        x: y,
        y: N
      };
      o.updateDroppableScroll(l.id, M);
    });
  }, [l.id, o]), d = W(function() {
    var y = r.current;
    return !y || !y.env.closestScrollable ? ve : Ut(y.env.closestScrollable);
  }, []), c = W(function() {
    var y = d();
    u(y.x, y.y);
  }, [d, u]), f = J(function() {
    return Ar(c);
  }, [c]), p = W(function() {
    var y = r.current, N = Yr(y);
    y && N || E(!1, "Could not find scroll options while scrolling");
    var M = y.scrollOptions;
    if (M.shouldPublishImmediately) {
      c();
      return;
    }
    f();
  }, [f, c]), g = W(function(y, N) {
    r.current && E(!1, "Cannot collect a droppable while a drag is occurring");
    var M = i.current, P = M.getDroppableRef();
    P || E(!1, "Cannot collect without a droppable ref");
    var k = Gd(P), T = {
      ref: P,
      descriptor: l,
      env: k,
      scrollOptions: N
    };
    r.current = T;
    var H = jd({
      ref: P,
      descriptor: l,
      env: k,
      windowScroll: y,
      direction: M.direction,
      isDropDisabled: M.isDropDisabled,
      isCombineEnabled: M.isCombineEnabled,
      shouldClipSubject: !M.ignoreContainerClipping
    }), q = k.closestScrollable;
    return q && (q.setAttribute(ya.contextId, t.contextId), q.addEventListener("scroll", p, Ia(T.scrollOptions)), Ld(q)), H;
  }, [t.contextId, l, p, i]), m = W(function() {
    var y = r.current, N = Yr(y);
    return y && N || E(!1, "Can only recollect Droppable client for Droppables that have a scroll container"), Ut(N);
  }, []), h = W(function() {
    var y = r.current;
    y || E(!1, "Cannot stop drag when no active drag");
    var N = Yr(y);
    r.current = null, N && (f.cancel(), N.removeAttribute(ya.contextId), N.removeEventListener("scroll", p, Ia(y.scrollOptions)));
  }, [p, f]), b = W(function(y) {
    var N = r.current;
    N || E(!1, "Cannot scroll when there is no drag");
    var M = Yr(N);
    M || E(!1, "Cannot scroll a droppable with no closest scrollable"), M.scrollTop += y.y, M.scrollLeft += y.x;
  }, []), x = J(function() {
    return {
      getDimensionAndWatchScroll: g,
      getScrollWhileDragging: m,
      dragStopped: h,
      scroll: b
    };
  }, [h, g, m, b]), S = J(function() {
    return {
      uniqueId: n,
      descriptor: l,
      callbacks: x
    };
  }, [x, l, n]);
  Te(function() {
    return s.current = S.descriptor, a.droppable.register(S), function() {
      r.current && (se("Unsupported: changing the droppableId or type of a Droppable during a drag"), h()), a.droppable.unregister(S);
    };
  }, [x, l, h, S, o, a.droppable]), Te(function() {
    !r.current || o.updateDroppableIsEnabled(s.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, o]), Te(function() {
    !r.current || o.updateDroppableIsCombineEnabled(s.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, o]);
}
function Pt() {
}
var Sa = {
  width: 0,
  height: 0,
  margin: ts
}, Hd = function(r) {
  var t = r.isAnimatingOpenOnMount, n = r.placeholder, a = r.animate;
  return t || a === "close" ? Sa : {
    height: n.client.borderBox.height,
    width: n.client.borderBox.width,
    margin: n.client.margin
  };
}, Yd = function(r) {
  var t = r.isAnimatingOpenOnMount, n = r.placeholder, a = r.animate, o = Hd({
    isAnimatingOpenOnMount: t,
    placeholder: n,
    animate: a
  });
  return {
    display: n.display,
    boxSizing: "border-box",
    width: o.width,
    height: o.height,
    marginTop: o.margin.top,
    marginRight: o.margin.right,
    marginBottom: o.margin.bottom,
    marginLeft: o.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: a !== "none" ? Sr.placeholder : null
  };
};
function _d(e) {
  var r = ne(null), t = W(function() {
    !r.current || (clearTimeout(r.current), r.current = null);
  }, []), n = e.animate, a = e.onTransitionEnd, o = e.onClose, i = e.contextId, l = cr(e.animate === "open"), s = l[0], u = l[1];
  ke(function() {
    return s ? n !== "open" ? (t(), u(!1), Pt) : r.current ? Pt : (r.current = setTimeout(function() {
      r.current = null, u(!1);
    }), t) : Pt;
  }, [n, s, t]);
  var d = W(function(f) {
    f.propertyName === "height" && (a(), n === "close" && o());
  }, [n, o, a]), c = Yd({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return te.createElement(e.placeholder.tagName, {
    style: c,
    "data-rbd-placeholder-context-id": i,
    onTransitionEnd: d,
    ref: e.innerRef
  });
}
var zd = te.memo(_d), wn = te.createContext(null);
function _o(e) {
  e && Wr(e) || E(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/using-inner-ref.md
  `);
}
function Tt(e) {
  return typeof e == "boolean";
}
function Rt(e, r) {
  r.forEach(function(t) {
    return t(e);
  });
}
var qd = [function(r) {
  var t = r.props;
  t.droppableId || E(!1, "A Droppable requires a droppableId prop"), typeof t.droppableId != "string" && E(!1, "A Droppable requires a [string] droppableId. Provided: [" + typeof t.droppableId + "]");
}, function(r) {
  var t = r.props;
  Tt(t.isDropDisabled) || E(!1, "isDropDisabled must be a boolean"), Tt(t.isCombineEnabled) || E(!1, "isCombineEnabled must be a boolean"), Tt(t.ignoreContainerClipping) || E(!1, "ignoreContainerClipping must be a boolean");
}, function(r) {
  var t = r.getDroppableRef;
  _o(t());
}], Kd = [function(r) {
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
}], Xd = [function(r) {
  var t = r.props;
  t.renderClone || E(!1, "Must provide a clone render function (renderClone) for virtual lists");
}, function(r) {
  var t = r.getPlaceholderRef;
  t() && E(!1, "Expected virtual list to not have a placeholder");
}];
function Jd(e) {
  jr(function() {
    Rt(e, qd), e.props.mode === "standard" && Rt(e, Kd), e.props.mode === "virtual" && Rt(e, Xd);
  });
}
var Zd = function(e) {
  Ba(r, e);
  function r() {
    for (var n, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return n = e.call.apply(e, [this].concat(o)) || this, n.state = {
      isVisible: Boolean(n.props.on),
      data: n.props.on,
      animate: n.props.shouldAnimate && n.props.on ? "open" : "none"
    }, n.onClose = function() {
      n.state.animate === "close" && n.setState({
        isVisible: !1
      });
    }, n;
  }
  r.getDerivedStateFromProps = function(a, o) {
    return a.shouldAnimate ? a.on ? {
      isVisible: !0,
      data: a.on,
      animate: "open"
    } : o.isVisible ? {
      isVisible: !0,
      data: o.data,
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
}(te.PureComponent), Pa = {
  dragging: 5e3,
  dropAnimating: 4500
}, Qd = function(r, t) {
  return t ? Sr.drop(t.duration) : r ? Sr.snap : Sr.fluid;
}, ef = function(r, t) {
  return r ? t ? Nr.opacity.drop : Nr.opacity.combining : null;
}, rf = function(r) {
  return r.forceShouldAnimate != null ? r.forceShouldAnimate : r.mode === "SNAP";
};
function tf(e) {
  var r = e.dimension, t = r.client, n = e.offset, a = e.combineWith, o = e.dropping, i = Boolean(a), l = rf(e), s = Boolean(o), u = s ? kt.drop(n, i) : kt.moveTo(n), d = {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: Qd(l, o),
    transform: u,
    opacity: ef(i, s),
    zIndex: s ? Pa.dropAnimating : Pa.dragging,
    pointerEvents: "none"
  };
  return d;
}
function nf(e) {
  return {
    transform: kt.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? null : "none"
  };
}
function af(e) {
  return e.type === "DRAGGING" ? tf(e) : nf(e);
}
function of(e, r, t) {
  t === void 0 && (t = ve);
  var n = window.getComputedStyle(r), a = r.getBoundingClientRect(), o = Ja(a, n), i = Xr(o, t), l = {
    client: o,
    tagName: r.tagName.toLowerCase(),
    display: n.display
  }, s = {
    x: o.marginBox.width,
    y: o.marginBox.height
  }, u = {
    descriptor: e,
    placeholder: l,
    displaceBy: s,
    client: o,
    page: i
  };
  return u;
}
function lf(e) {
  var r = mn("draggable"), t = e.descriptor, n = e.registry, a = e.getDraggableRef, o = e.canDragInteractiveElements, i = e.shouldRespectForcePress, l = e.isEnabled, s = J(function() {
    return {
      canDragInteractiveElements: o,
      shouldRespectForcePress: i,
      isEnabled: l
    };
  }, [o, l, i]), u = W(function(p) {
    var g = a();
    return g || E(!1, "Cannot get dimension when no ref is set"), of(t, g, p);
  }, [t, a]), d = J(function() {
    return {
      uniqueId: r,
      descriptor: t,
      options: s,
      getDimension: u
    };
  }, [t, u, s, r]), c = ne(d), f = ne(!0);
  Te(function() {
    return n.draggable.register(c.current), function() {
      return n.draggable.unregister(c.current);
    };
  }, [n.draggable]), Te(function() {
    if (f.current) {
      f.current = !1;
      return;
    }
    var p = c.current;
    c.current = d, n.draggable.update(d, p);
  }, [d, n.draggable]);
}
function sf(e, r, t) {
  jr(function() {
    function n(o) {
      return "Draggable[id: " + o + "]: ";
    }
    var a = e.draggableId;
    a || E(!1, "Draggable requires a draggableId"), typeof a != "string" && E(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ` + typeof a + "] (value: " + a + ")"), is(e.index) || E(!1, n(a) + " requires an integer index prop"), e.mapped.type !== "DRAGGING" && (_o(t()), e.isEnabled && (Go(r, a) || E(!1, n(a) + " Unable to find drag handle")));
  });
}
function uf(e) {
  bn(function() {
    var r = ne(e);
    jr(function() {
      e !== r.current && E(!1, "Draggable isClone prop value changed during component life");
    }, [e]);
  });
}
function cf(e) {
  e.preventDefault();
}
function df(e) {
  var r = ne(null), t = W(function(T) {
    r.current = T;
  }, []), n = W(function() {
    return r.current;
  }, []), a = rt(lt), o = a.contextId, i = a.dragHandleUsageInstructionsId, l = a.registry, s = rt(wn), u = s.type, d = s.droppableId, c = J(function() {
    return {
      id: e.draggableId,
      index: e.index,
      type: u,
      droppableId: d
    };
  }, [e.draggableId, e.index, u, d]), f = e.children, p = e.draggableId, g = e.isEnabled, m = e.shouldRespectForcePress, h = e.canDragInteractiveElements, b = e.isClone, x = e.mapped, S = e.dropAnimationFinished;
  if (sf(e, o, n), uf(b), !b) {
    var y = J(function() {
      return {
        descriptor: c,
        registry: l,
        getDraggableRef: n,
        canDragInteractiveElements: h,
        shouldRespectForcePress: m,
        isEnabled: g
      };
    }, [c, l, n, h, m, g]);
    lf(y);
  }
  var N = J(function() {
    return g ? {
      tabIndex: 0,
      role: "button",
      "aria-describedby": i,
      "data-rbd-drag-handle-draggable-id": p,
      "data-rbd-drag-handle-context-id": o,
      draggable: !1,
      onDragStart: cf
    } : null;
  }, [o, i, p, g]), M = W(function(T) {
    x.type === "DRAGGING" && (!x.dropping || T.propertyName === "transform" && S());
  }, [S, x]), P = J(function() {
    var T = af(x), H = x.type === "DRAGGING" && x.dropping ? M : null, q = {
      innerRef: t,
      draggableProps: {
        "data-rbd-draggable-context-id": o,
        "data-rbd-draggable-id": p,
        style: T,
        onTransitionEnd: H
      },
      dragHandleProps: N
    };
    return q;
  }, [o, N, p, x, M, t]), k = J(function() {
    return {
      draggableId: c.id,
      type: c.type,
      source: {
        index: c.index,
        droppableId: c.droppableId
      }
    };
  }, [c.droppableId, c.id, c.index, c.type]);
  return f(P, x.snapshot, k);
}
var zo = function(e, r) {
  return e === r;
}, qo = function(e) {
  var r = e.combine, t = e.destination;
  return t ? t.droppableId : r ? r.droppableId : null;
}, ff = function(r) {
  return r.combine ? r.combine.draggableId : null;
}, pf = function(r) {
  return r.at && r.at.type === "COMBINE" ? r.at.combine.draggableId : null;
};
function vf() {
  var e = pe(function(a, o) {
    return {
      x: a,
      y: o
    };
  }), r = pe(function(a, o, i, l, s) {
    return {
      isDragging: !0,
      isClone: o,
      isDropAnimating: Boolean(s),
      dropAnimation: s,
      mode: a,
      draggingOver: i,
      combineWith: l,
      combineTargetFor: null
    };
  }), t = pe(function(a, o, i, l, s, u, d) {
    return {
      mapped: {
        type: "DRAGGING",
        dropping: null,
        draggingOver: s,
        combineWith: u,
        mode: o,
        offset: a,
        dimension: i,
        forceShouldAnimate: d,
        snapshot: r(o, l, s, u, null)
      }
    };
  }), n = function(o, i) {
    if (o.isDragging) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      var l = o.current.client.offset, s = o.dimensions.draggables[i.draggableId], u = Pe(o.impact), d = pf(o.impact), c = o.forceShouldAnimate;
      return t(e(l.x, l.y), o.movementMode, s, i.isClone, u, d, c);
    }
    if (o.phase === "DROP_ANIMATING") {
      var f = o.completed;
      if (f.result.draggableId !== i.draggableId)
        return null;
      var p = i.isClone, g = o.dimensions.draggables[i.draggableId], m = f.result, h = m.mode, b = qo(m), x = ff(m), S = o.dropDuration, y = {
        duration: S,
        curve: un.drop,
        moveTo: o.newHomeClientOffset,
        opacity: x ? Nr.opacity.drop : null,
        scale: x ? Nr.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
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
function Ko(e) {
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
var gf = {
  mapped: {
    type: "SECONDARY",
    offset: ve,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Ko(null)
  }
};
function mf() {
  var e = pe(function(i, l) {
    return {
      x: i,
      y: l
    };
  }), r = pe(Ko), t = pe(function(i, l, s) {
    return l === void 0 && (l = null), {
      mapped: {
        type: "SECONDARY",
        offset: i,
        combineTargetFor: l,
        shouldAnimateDisplacement: s,
        snapshot: r(l)
      }
    };
  }), n = function(l) {
    return l ? t(ve, l, !0) : null;
  }, a = function(l, s, u, d) {
    var c = u.displaced.visible[l], f = Boolean(d.inVirtualList && d.effected[l]), p = at(u), g = p && p.draggableId === l ? s : null;
    if (!c) {
      if (!f)
        return n(g);
      if (u.displaced.invisible[l])
        return null;
      var m = vr(d.displacedBy.point), h = e(m.x, m.y);
      return t(h, g, !0);
    }
    if (f)
      return n(g);
    var b = u.displacedBy.point, x = e(b.x, b.y);
    return t(x, g, c.shouldAnimate);
  }, o = function(l, s) {
    if (l.isDragging)
      return l.critical.draggable.id === s.draggableId ? null : a(s.draggableId, l.critical.draggable.id, l.impact, l.afterCritical);
    if (l.phase === "DROP_ANIMATING") {
      var u = l.completed;
      return u.result.draggableId === s.draggableId ? null : a(s.draggableId, u.result.draggableId, u.impact, u.afterCritical);
    }
    return null;
  };
  return o;
}
var bf = function() {
  var r = vf(), t = mf(), n = function(o, i) {
    return r(o, i) || t(o, i) || gf;
  };
  return n;
}, hf = {
  dropAnimationFinished: So
}, yf = Ka(bf, hf, null, {
  context: gn,
  pure: !0,
  areStatePropsEqual: zo
})(df);
function Xo(e) {
  var r = rt(wn), t = r.isUsingCloneFor;
  return t === e.draggableId && !e.isClone ? null : te.createElement(yf, e);
}
function Jo(e) {
  var r = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, t = Boolean(e.disableInteractiveElementBlocking), n = Boolean(e.shouldRespectForcePress);
  return te.createElement(Xo, $({}, e, {
    isClone: !1,
    isEnabled: r,
    canDragInteractiveElements: t,
    shouldRespectForcePress: n
  }));
}
function xf(e) {
  var r = Ht(lt);
  r || E(!1, "Could not find app context");
  var t = r.contextId, n = r.isMovementAllowed, a = ne(null), o = ne(null), i = e.children, l = e.droppableId, s = e.type, u = e.mode, d = e.direction, c = e.ignoreContainerClipping, f = e.isDropDisabled, p = e.isCombineEnabled, g = e.snapshot, m = e.useClone, h = e.updateViewportMaxScroll, b = e.getContainerForClone, x = W(function() {
    return a.current;
  }, []), S = W(function(G) {
    a.current = G;
  }, []), y = W(function() {
    return o.current;
  }, []), N = W(function(G) {
    o.current = G;
  }, []);
  Jd({
    props: e,
    getDroppableRef: x,
    getPlaceholderRef: y
  });
  var M = W(function() {
    n() && h({
      maxScroll: Oo()
    });
  }, [n, h]);
  Vd({
    droppableId: l,
    type: s,
    mode: u,
    direction: d,
    isDropDisabled: f,
    isCombineEnabled: p,
    ignoreContainerClipping: c,
    getDroppableRef: x
  });
  var P = te.createElement(Zd, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, function(G) {
    var w = G.onClose, D = G.data, O = G.animate;
    return te.createElement(zd, {
      placeholder: D,
      onClose: w,
      innerRef: N,
      animate: O,
      contextId: t,
      onTransitionEnd: M
    });
  }), k = J(function() {
    return {
      innerRef: S,
      placeholder: P,
      droppableProps: {
        "data-rbd-droppable-id": l,
        "data-rbd-droppable-context-id": t
      }
    };
  }, [t, l, P, S]), T = m ? m.dragging.draggableId : null, H = J(function() {
    return {
      droppableId: l,
      type: s,
      isUsingCloneFor: T
    };
  }, [l, T, s]);
  function q() {
    if (!m)
      return null;
    var G = m.dragging, w = m.render, D = te.createElement(Xo, {
      draggableId: G.draggableId,
      index: G.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, function(O, L) {
      return w(O, L, G);
    });
    return hi.createPortal(D, b());
  }
  return te.createElement(wn.Provider, {
    value: H
  }, i(k, g), q());
}
var At = function(r, t) {
  return r === t.droppable.type;
}, Ta = function(r, t) {
  return t.draggables[r.draggable.id];
}, wf = function() {
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
  }, t = $({}, r, {
    shouldAnimatePlaceholder: !1
  }), n = pe(function(i) {
    return {
      draggableId: i.id,
      type: i.type,
      source: {
        index: i.index,
        droppableId: i.droppableId
      }
    };
  }), a = pe(function(i, l, s, u, d, c) {
    var f = d.descriptor.id, p = d.descriptor.droppableId === i;
    if (p) {
      var g = c ? {
        render: c,
        dragging: n(d.descriptor)
      } : null, m = {
        isDraggingOver: s,
        draggingOverWith: s ? f : null,
        draggingFromThisWith: f,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: d.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: m,
        useClone: g
      };
    }
    if (!l)
      return t;
    if (!u)
      return r;
    var h = {
      isDraggingOver: s,
      draggingOverWith: f,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: d.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: h,
      useClone: null
    };
  }), o = function(l, s) {
    var u = s.droppableId, d = s.type, c = !s.isDropDisabled, f = s.renderClone;
    if (l.isDragging) {
      var p = l.critical;
      if (!At(d, p))
        return t;
      var g = Ta(p, l.dimensions), m = Pe(l.impact) === u;
      return a(u, c, m, m, g, f);
    }
    if (l.phase === "DROP_ANIMATING") {
      var h = l.completed;
      if (!At(d, h.critical))
        return t;
      var b = Ta(h.critical, l.dimensions);
      return a(u, c, qo(h.result) === u, Pe(h.impact) === u, b, f);
    }
    if (l.phase === "IDLE" && l.completed && !l.shouldFlush) {
      var x = l.completed;
      if (!At(d, x.critical))
        return t;
      var S = Pe(x.impact) === u, y = Boolean(x.impact.at && x.impact.at.type === "COMBINE"), N = x.critical.droppable.id === u;
      return S ? y ? r : t : N ? r : t;
    }
    return t;
  };
  return o;
}, Cf = {
  updateViewportMaxScroll: gu
};
function Ef() {
  return document.body || E(!1, "document.body is not ready"), document.body;
}
var Df = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: Ef
}, Cn = Ka(wf, Cf, null, {
  context: gn,
  pure: !0,
  areStatePropsEqual: zo
})(xf);
Cn.defaultProps = Df;
function If() {
  for (var e = 0, r, t, n = ""; e < arguments.length; )
    (r = arguments[e++]) && (t = Zo(r)) && (n && (n += " "), n += t);
  return n;
}
function Zo(e) {
  if (typeof e == "string")
    return e;
  for (var r, t = "", n = 0; n < e.length; n++)
    e[n] && (r = Zo(e[n])) && (t && (t += " "), t += r);
  return t;
}
function $t() {
  return $t = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, $t.apply(this, arguments);
}
function Sf(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var r = 0, t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function a(o, i) {
    t.set(o, i), r++, r > e && (r = 0, n = t, t = /* @__PURE__ */ new Map());
  }
  return {
    get: function(i) {
      var l = t.get(i);
      if (l !== void 0)
        return l;
      if ((l = n.get(i)) !== void 0)
        return a(i, l), l;
    },
    set: function(i, l) {
      t.has(i) ? t.set(i, l) : a(i, l);
    }
  };
}
var En = "-";
function Pf(e) {
  var r = Rf(e);
  function t(a) {
    var o = a.split(En);
    return o[0] === "" && o.length !== 1 && o.shift(), Qo(o, r) || Tf(a);
  }
  function n(a) {
    return e.conflictingClassGroups[a] || [];
  }
  return {
    getClassGroupId: t,
    getConflictingClassGroupIds: n
  };
}
function Qo(e, r) {
  var t;
  if (e.length === 0)
    return r.classGroupId;
  var n = e[0], a = r.nextPart.get(n), o = a ? Qo(e.slice(1), a) : void 0;
  if (o)
    return o;
  if (r.validators.length !== 0) {
    var i = e.join(En);
    return (t = r.validators.find(function(l) {
      var s = l.validator;
      return s(i);
    })) == null ? void 0 : t.classGroupId;
  }
}
var Ra = /^\[(.+)\]$/;
function Tf(e) {
  if (Ra.test(e)) {
    var r = Ra.exec(e)[1], t = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}
function Rf(e) {
  var r = e.theme, t = e.prefix, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, a = Of(Object.entries(e.classGroups), t);
  return a.forEach(function(o) {
    var i = o[0], l = o[1];
    Vt(l, n, i, r);
  }), n;
}
function Vt(e, r, t, n) {
  e.forEach(function(a) {
    if (typeof a == "string") {
      var o = a === "" ? r : Aa(r, a);
      o.classGroupId = t;
      return;
    }
    if (typeof a == "function") {
      if (Af(a)) {
        Vt(a(n), r, t, n);
        return;
      }
      r.validators.push({
        validator: a,
        classGroupId: t
      });
      return;
    }
    Object.entries(a).forEach(function(i) {
      var l = i[0], s = i[1];
      Vt(s, Aa(r, l), t, n);
    });
  });
}
function Aa(e, r) {
  var t = e;
  return r.split(En).forEach(function(n) {
    t.nextPart.has(n) || t.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(n);
  }), t;
}
function Af(e) {
  return e.isThemeGetter;
}
function Of(e, r) {
  return r ? e.map(function(t) {
    var n = t[0], a = t[1], o = a.map(function(i) {
      return typeof i == "string" ? r + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(function(l) {
        var s = l[0], u = l[1];
        return [r + s, u];
      })) : i;
    });
    return [n, o];
  }) : e;
}
var ei = "!";
function Mf(e) {
  var r = e.separator || ":";
  return function(n) {
    for (var a = 0, o = [], i = 0, l = 0; l < n.length; l++) {
      var s = n[l];
      a === 0 && s === r[0] && (r.length === 1 || n.slice(l, l + r.length) === r) && (o.push(n.slice(i, l)), i = l + r.length), s === "[" ? a++ : s === "]" && a--;
    }
    var u = o.length === 0 ? n : n.substring(i), d = u.startsWith(ei), c = d ? u.substring(1) : u;
    return {
      modifiers: o,
      hasImportantModifier: d,
      baseClassName: c
    };
  };
}
function Bf(e) {
  if (e.length <= 1)
    return e;
  var r = [], t = [];
  return e.forEach(function(n) {
    var a = n[0] === "[";
    a ? (r.push.apply(r, t.sort().concat([n])), t = []) : t.push(n);
  }), r.push.apply(r, t.sort()), r;
}
function Nf(e) {
  return $t({
    cache: Sf(e.cacheSize),
    splitModifiers: Mf(e)
  }, Pf(e));
}
var Lf = /\s+/;
function Ff(e, r) {
  var t = r.splitModifiers, n = r.getClassGroupId, a = r.getConflictingClassGroupIds, o = /* @__PURE__ */ new Set();
  return e.trim().split(Lf).map(function(i) {
    var l = t(i), s = l.modifiers, u = l.hasImportantModifier, d = l.baseClassName, c = n(d);
    if (!c)
      return {
        isTailwindClass: !1,
        originalClassName: i
      };
    var f = Bf(s).join(":"), p = u ? f + ei : f;
    return {
      isTailwindClass: !0,
      modifierId: p,
      classGroupId: c,
      originalClassName: i
    };
  }).reverse().filter(function(i) {
    if (!i.isTailwindClass)
      return !0;
    var l = i.modifierId, s = i.classGroupId, u = l + s;
    return o.has(u) ? !1 : (o.add(u), a(s).forEach(function(d) {
      return o.add(l + d);
    }), !0);
  }).reverse().map(function(i) {
    return i.originalClassName;
  }).join(" ");
}
function Gf() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  var n, a, o, i = l;
  function l(u) {
    var d = r[0], c = r.slice(1), f = c.reduce(function(p, g) {
      return g(p);
    }, d());
    return n = Nf(f), a = n.cache.get, o = n.cache.set, i = s, s(u);
  }
  function s(u) {
    var d = a(u);
    if (d)
      return d;
    var c = Ff(u, n);
    return o(u, c), c;
  }
  return function() {
    return i(If.apply(null, arguments));
  };
}
function ue(e) {
  var r = function(n) {
    return n[e] || [];
  };
  return r.isThemeGetter = !0, r;
}
var _e = /^\[(.+)\]$/, kf = /^\d+\/\d+$/, Wf = /* @__PURE__ */ new Set(["px", "full", "screen"]), jf = /^(\d+)?(xs|sm|md|lg|xl)$/, Uf = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh)/, $f = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Ne(e) {
  return !Number.isNaN(Number(e)) || Wf.has(e) || kf.test(e) || rr(e);
}
function rr(e) {
  var r, t = (r = _e.exec(e)) == null ? void 0 : r[1];
  return t ? t.startsWith("length:") || Uf.test(t) : !1;
}
function Vf(e) {
  var r, t = (r = _e.exec(e)) == null ? void 0 : r[1];
  return t ? t.startsWith("size:") : !1;
}
function Hf(e) {
  var r, t = (r = _e.exec(e)) == null ? void 0 : r[1];
  return t ? t.startsWith("position:") : !1;
}
function Yf(e) {
  var r, t = (r = _e.exec(e)) == null ? void 0 : r[1];
  return t ? t.startsWith("url(") || t.startsWith("url:") : !1;
}
function Oa(e) {
  var r, t = (r = _e.exec(e)) == null ? void 0 : r[1];
  return t ? !Number.isNaN(Number(t)) || t.startsWith("number:") : !1;
}
function Ie(e) {
  var r, t = (r = _e.exec(e)) == null ? void 0 : r[1];
  return t ? Number.isInteger(Number(t)) : Number.isInteger(Number(e));
}
function ge(e) {
  return _e.test(e);
}
function Dr() {
  return !0;
}
function je(e) {
  return jf.test(e);
}
function _f(e) {
  var r, t = (r = _e.exec(e)) == null ? void 0 : r[1];
  return t ? $f.test(t) : !1;
}
function zf() {
  var e = ue("colors"), r = ue("spacing"), t = ue("blur"), n = ue("brightness"), a = ue("borderColor"), o = ue("borderRadius"), i = ue("borderSpacing"), l = ue("borderWidth"), s = ue("contrast"), u = ue("grayscale"), d = ue("hueRotate"), c = ue("invert"), f = ue("gap"), p = ue("gradientColorStops"), g = ue("inset"), m = ue("margin"), h = ue("opacity"), b = ue("padding"), x = ue("saturate"), S = ue("scale"), y = ue("sepia"), N = ue("skew"), M = ue("space"), P = ue("translate"), k = function() {
    return ["auto", "contain", "none"];
  }, T = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, H = function() {
    return ["auto", r];
  }, q = function() {
    return ["", Ne];
  }, G = function() {
    return ["auto", Ie];
  }, w = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, D = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, O = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, L = function() {
    return ["start", "end", "center", "between", "around", "evenly"];
  }, A = function() {
    return ["", "0", ge];
  }, j = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Dr],
      spacing: [Ne],
      blur: ["none", "", je, rr],
      brightness: [Ie],
      borderColor: [e],
      borderRadius: ["none", "", "full", je, rr],
      borderSpacing: [r],
      borderWidth: q(),
      contrast: [Ie],
      grayscale: A(),
      hueRotate: [Ie],
      invert: A(),
      gap: [r],
      gradientColorStops: [e],
      inset: H(),
      margin: H(),
      opacity: [Ie],
      padding: [r],
      saturate: [Ie],
      scale: [Ie],
      sepia: A(),
      skew: [Ie, ge],
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
        "break-after": j()
      }],
      "break-before": [{
        "break-before": j()
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
        object: [].concat(w(), [ge])
      }],
      overflow: [{
        overflow: T()
      }],
      "overflow-x": [{
        "overflow-x": T()
      }],
      "overflow-y": [{
        "overflow-y": T()
      }],
      overscroll: [{
        overscroll: k()
      }],
      "overscroll-x": [{
        "overscroll-x": k()
      }],
      "overscroll-y": [{
        "overscroll-y": k()
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
        z: [Ie]
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
        grow: A()
      }],
      shrink: [{
        shrink: A()
      }],
      order: [{
        order: ["first", "last", "none", Ie]
      }],
      "grid-cols": [{
        "grid-cols": [Dr]
      }],
      "col-start-end": [{
        col: ["auto", {
          span: [Ie]
        }]
      }],
      "col-start": [{
        "col-start": G()
      }],
      "col-end": [{
        "col-end": G()
      }],
      "grid-rows": [{
        "grid-rows": [Dr]
      }],
      "row-start-end": [{
        row: ["auto", {
          span: [Ie]
        }]
      }],
      "row-start": [{
        "row-start": G()
      }],
      "row-end": [{
        "row-end": G()
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
        gap: [f]
      }],
      "gap-x": [{
        "gap-x": [f]
      }],
      "gap-y": [{
        "gap-y": [f]
      }],
      "justify-content": [{
        justify: L()
      }],
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      "align-content": [{
        content: [].concat(L(), ["baseline"])
      }],
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      "place-content": [{
        "place-content": [].concat(L(), ["baseline", "stretch"])
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Oa]
      }],
      "font-family": [{
        font: [Dr]
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
        decoration: [].concat(D(), ["wavy"])
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
        bg: [].concat(w(), [Hf])
      }],
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      "bg-size": [{
        bg: ["auto", "cover", "contain", Vf]
      }],
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Yf]
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
        rounded: [o]
      }],
      "rounded-t": [{
        "rounded-t": [o]
      }],
      "rounded-r": [{
        "rounded-r": [o]
      }],
      "rounded-b": [{
        "rounded-b": [o]
      }],
      "rounded-l": [{
        "rounded-l": [o]
      }],
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      "rounded-br": [{
        "rounded-br": [o]
      }],
      "rounded-bl": [{
        "rounded-bl": [o]
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
        border: [].concat(D(), ["hidden"])
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
        divide: D()
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
        outline: [""].concat(D())
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
        ring: q()
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
        shadow: ["", "inner", "none", je, _f]
      }],
      "shadow-color": [{
        shadow: [Dr]
      }],
      opacity: [{
        opacity: [h]
      }],
      "mix-blend": [{
        "mix-blend": O()
      }],
      "bg-blend": [{
        "bg-blend": O()
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
        grayscale: [u]
      }],
      "hue-rotate": [{
        "hue-rotate": [d]
      }],
      invert: [{
        invert: [c]
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
        "backdrop-grayscale": [u]
      }],
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
      }],
      "backdrop-invert": [{
        "backdrop-invert": [c]
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
        "border-spacing": [i]
      }],
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      "border-spacing-y": [{
        "border-spacing-y": [i]
      }],
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ge]
      }],
      duration: [{
        duration: [Ie]
      }],
      ease: [{
        ease: ["linear", "in", "out", "in-out", ge]
      }],
      delay: [{
        delay: [Ie]
      }],
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ge]
      }],
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      scale: [{
        scale: [S]
      }],
      "scale-x": [{
        "scale-x": [S]
      }],
      "scale-y": [{
        "scale-y": [S]
      }],
      rotate: [{
        rotate: [Ie, ge]
      }],
      "translate-x": [{
        "translate-x": [P]
      }],
      "translate-y": [{
        "translate-y": [P]
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
        stroke: [Ne, Oa]
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
var Fe = /* @__PURE__ */ Gf(zf);
const qf = ({
  row: e,
  index: r,
  rowWrapperClassNames: t,
  rowContentClassNames: n,
  rowImageClassNames: a,
  rowTagsClassNames: o,
  rowTagsWrapperClassNames: i,
  rowWrapperGhostingClassNames: l,
  rowWrapperSelectedClassNames: s,
  onClickRow: u,
  isSelected: d,
  isGhosting: c,
  selectionCount: f,
  toggleSelection: p,
  toggleSelectionInGroup: g,
  multiSelectTo: m
}) => {
  const h = Fe(
    "opacity-10",
    l
  ), b = Fe(
    "bg-blue-100",
    s
  ), x = Fe(
    "p-2 flex rounded bg-white relative border",
    t,
    c ? h : "",
    d ? b : ""
  ), S = Fe(
    "mr-2 rounded-full h-12 w-12",
    a
  ), y = Fe(
    "pb-1 text-sm",
    n
  ), N = Fe(
    "py-1",
    i
  ), M = Fe(
    "inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2",
    o
  ), P = (G) => navigator.userAgent.indexOf("Windows") >= 0 ? G.ctrlKey : G.metaKey, k = (G) => {
    if (P(G)) {
      g && g(e.id);
      return;
    }
    if (G.shiftKey) {
      m && m(e.id);
      return;
    }
    u && u(e);
  }, T = (G) => {
    G.defaultPrevented || G.button === 0 && (G.preventDefault(), k(G));
  }, H = (G) => {
    G.defaultPrevented || (G.preventDefault(), g && g(e.id));
  }, q = (G, w, D) => {
    G.defaultPrevented || D.isDragging || G.keyCode === 13 && (G.preventDefault(), k(G));
  };
  return /* @__PURE__ */ ye(Jo, { draggableId: e.id, index: r, children: (G, w) => {
    var D;
    return /* @__PURE__ */ Tr(
      "div",
      {
        ref: G.innerRef,
        ...G.draggableProps,
        ...G.dragHandleProps,
        className: `${x} ${w.isDragging ? "shadow-md" : ""} }`,
        onClick: (O) => T(O),
        onTouchEnd: (O) => H(O),
        onKeyDown: (O) => q(O, G, w),
        children: [
          w.isDragging && (f || 0) > 1 ? /* @__PURE__ */ ye("div", { className: "-top-2.5 -right-2.5 absolute w-5 h-5 rounded-full bg-slate-200 text-xs flex justify-center items-center", children: f }) : null,
          e.img && /* @__PURE__ */ ye(
            "img",
            {
              src: e.img,
              alt: e.content,
              className: S
            }
          ),
          /* @__PURE__ */ Tr("div", { children: [
            /* @__PURE__ */ ye("p", { className: y, children: e.content }),
            ((D = e == null ? void 0 : e.tags) == null ? void 0 : D.length) && /* @__PURE__ */ ye("div", { className: N, children: e.tags.map((O, L) => /* @__PURE__ */ ye(
              "span",
              {
                className: M,
                children: O
              },
              `${e.id}-${L}-tags`
            )) })
          ] })
        ]
      }
    );
  } });
}, Kf = te.memo(
  function({
    rows: r,
    rowClassNames: t,
    onClickRow: n,
    multiSelect: a
  }) {
    const o = Le(() => {
      var u;
      return (u = a == null ? void 0 : a.selectedRowIds) == null ? void 0 : u.reduce(
        (d, c) => ({ ...d, [c]: !0 }),
        {}
      );
    }, [a == null ? void 0 : a.selectedRowIds]), i = Ln(
      (s) => o && o[s] || !1,
      [o]
    ), l = Ln(
      (s) => i(s) && Boolean(a == null ? void 0 : a.draggingRowId) && (a == null ? void 0 : a.draggingRowId) !== s,
      [a == null ? void 0 : a.draggingRowId]
    );
    return /* @__PURE__ */ ye(xi, { children: r.map((s, u) => {
      var d, c, f, p;
      return /* @__PURE__ */ ye(
        qf,
        {
          index: u,
          row: s,
          ...t,
          onClickRow: n,
          isSelected: i(s.id),
          isGhosting: l(s.id),
          selectionCount: (d = a == null ? void 0 : a.selectedRowIds) == null ? void 0 : d.length,
          toggleSelection: (c = a == null ? void 0 : a.functions) == null ? void 0 : c.toggleSelection,
          toggleSelectionInGroup: (f = a == null ? void 0 : a.functions) == null ? void 0 : f.toggleSelectionInGroup,
          multiSelectTo: (p = a == null ? void 0 : a.functions) == null ? void 0 : p.multiSelectTo
        },
        s.id
      );
    }) });
  },
  function(r, t) {
    return r.rows === t.rows;
  }
), Xf = ({
  column: e,
  index: r,
  rows: t,
  columnTitleClassNames: n,
  columnTitleWrapperClassNames: a,
  columnListClassNames: o,
  rowClassNames: i,
  isDragColumnsEnabled: l,
  onClickRow: s,
  multiSelect: u
}) => {
  const d = Fe(
    "p-2 font-bold",
    n
  ), c = Fe(
    "w-[250px]",
    a
  ), f = Fe(
    "p-2 min-h-[200px]",
    o
  );
  return /* @__PURE__ */ ye(
    Jo,
    {
      draggableId: e.id,
      index: r,
      isDragDisabled: !l,
      children: (p) => /* @__PURE__ */ Tr(
        "div",
        {
          ...p.draggableProps,
          ref: p.innerRef,
          className: c,
          children: [
            /* @__PURE__ */ ye(
              "div",
              {
                ...p.dragHandleProps,
                className: d,
                children: e.content
              }
            ),
            /* @__PURE__ */ ye(Cn, { droppableId: e.id, children: (g, m) => /* @__PURE__ */ Tr(
              "div",
              {
                ref: g.innerRef,
                ...g.droppableProps,
                className: f,
                children: [
                  /* @__PURE__ */ ye(
                    Kf,
                    {
                      rows: t,
                      rowClassNames: i,
                      onClickRow: s,
                      multiSelect: u
                    }
                  ),
                  g.placeholder
                ]
              }
            ) })
          ]
        }
      )
    }
  );
}, Jf = te.memo(function({
  column: r,
  rowsMap: t,
  index: n,
  columnClassNames: a,
  rowClassNames: o,
  isDragColumnsEnabled: i,
  onClickRow: l,
  multiSelect: s
}) {
  const u = r.rowIds.map((d) => t[d]);
  return /* @__PURE__ */ ye(
    Xf,
    {
      column: r,
      index: n,
      rows: u,
      ...a,
      rowClassNames: o,
      isDragColumnsEnabled: i,
      onClickRow: l,
      multiSelect: s
    }
  );
}), Zf = (e, r, t) => {
  const n = Array.from(e), [a] = n.splice(r, 1);
  return n.splice(t, 0, a), n;
}, Qf = (e) => e.selectedRowIds.length > 1 ? rp(e) : ep(e), ep = ({
  data: e,
  selectedRowIds: r,
  source: t,
  destination: n
}) => {
  if (t.droppableId === n.droppableId) {
    const d = e.columns[t.droppableId], c = Zf(d.rowIds, t.index, n.index);
    return {
      data: {
        ...e,
        columns: {
          ...e.columns,
          [d.id]: Pr(d, c)
        }
      },
      selectedRowIds: r
    };
  }
  const a = e.columns[t.droppableId], o = e.columns[n.droppableId], i = a.rowIds[t.index], l = [...a.rowIds];
  l.splice(t.index, 1);
  const s = [...o.rowIds];
  return s.splice(n.index, 0, i), {
    data: {
      ...e,
      columns: {
        ...e.columns,
        [a.id]: Pr(a, l),
        [o.id]: Pr(o, s)
      }
    },
    selectedRowIds: r
  };
}, rp = ({
  data: e,
  selectedRowIds: r,
  destination: t,
  source: n
}) => {
  const o = e.columns[n.droppableId].rowIds[n.index], i = np({
    data: e,
    selectedRowIds: r,
    destination: t,
    dragged: o
  }), l = [...r];
  l.sort((p, g) => {
    var b, x;
    if (p === o)
      return -1;
    if (g === o)
      return 1;
    const m = Fr(e, p), h = Fr(e, g);
    if (m && h) {
      const S = (b = m.rowIds) == null ? void 0 : b.indexOf(p), y = (x = h.rowIds) == null ? void 0 : x.indexOf(g);
      if (S !== y)
        return S - y;
    }
    return -1;
  });
  const s = e.columnOrder.reduce((p, g) => {
    const m = e.columns[g], h = m.rowIds.filter(
      (b) => !r.includes(b)
    );
    return p[m.id] = Pr(m, h), p;
  }, e.columns), u = s[t.droppableId], d = tp({
    column: u,
    insertAtIndex: i,
    orderedSelectedRowIds: l
  }), c = {
    ...s,
    [u.id]: Pr(u, d)
  };
  return {
    data: {
      ...e,
      columns: c
    },
    selectedRowIds: l
  };
}, Pr = (e, r) => ({
  id: e.id,
  content: e.content,
  rowIds: r
}), tp = ({
  column: e,
  insertAtIndex: r,
  orderedSelectedRowIds: t
}) => {
  const n = [...e.rowIds];
  return n.splice(r, 0, ...t), n;
}, Fr = (e, r) => {
  const t = e.columnOrder.find((n) => e.columns[n].rowIds.includes(r));
  return t ? e.columns[t] : null;
}, np = ({
  dragged: e,
  data: r,
  destination: t,
  selectedRowIds: n
}) => {
  const a = n.reduce((i, l) => {
    if (l === e)
      return i;
    const s = r.columns[t.droppableId], u = Fr(r, l);
    return u !== s || u.rowIds.indexOf(l) >= t.index ? i : i + 1;
  }, 0);
  return t.index - a;
}, ap = (e, r, t) => {
  if (!r.length)
    return [t];
  const n = Fr(e, t), a = r[r.length - 1], o = Fr(e, a);
  if (!n || !o)
    return null;
  const i = n.rowIds.indexOf(t), l = o.rowIds.indexOf(a);
  if (n !== o)
    return n.rowIds.slice(0, i + 1);
  if (i === l)
    return null;
  const s = i > l, u = s ? l : i, d = s ? i : l, f = n.rowIds.slice(u, d + 1).filter((m) => !r.includes(m)), p = s ? f : [...f].reverse();
  return [...r, ...p];
}, lp = ({
  data: e,
  wrapperClassNames: r,
  columnClassNames: t,
  rowClassNames: n,
  isDragColumnsEnabled: a,
  onClickRow: o,
  onDragEnd: i
}) => {
  const [l, s] = cr(e), [u, d] = cr([]), [c, f] = cr(null), p = Fe(
    "p-4 flex flex-row space-x-4",
    r
  ), g = (P) => {
    const k = P.draggableId;
    u.find((H) => H === k) || h(), f(k);
  }, m = (P) => {
    const { destination: k, source: T, draggableId: H, type: q } = P;
    if (!k || P.reason === "CANCEL" || k.droppableId === T.droppableId && k.index === T.index) {
      f(null);
      return;
    }
    if (i && i(P), q === "column") {
      const w = Array.from(l.columnOrder);
      w.splice(T.index, 1), w.splice(k.index, 0, H);
      const D = {
        ...l,
        columnOrder: w
      };
      s(D), d([]), f(null);
      return;
    }
    const G = Qf({
      data: l,
      selectedRowIds: u,
      source: T,
      destination: k
    });
    s(G.data), d(G.selectedRowIds), f(null);
  }, h = () => {
    d([]);
  }, b = (P) => {
    const k = ap(l, u, P);
    k != null && d(k);
  }, x = (P) => {
    const k = u.indexOf(P);
    if (k === -1) {
      d([...u, P]);
      return;
    }
    const T = [...u];
    T.splice(k, 1), d(T);
  }, S = (P) => {
    const k = u.includes(P);
    d((() => k ? u.length > 1 ? [P] : [] : [P])());
  }, y = (P) => {
    P.defaultPrevented || P.key === "Escape" && h();
  }, N = (P) => {
    P.defaultPrevented || h();
  }, M = (P) => {
    P.defaultPrevented || h();
  };
  return ke(() => (window.addEventListener("keydown", y), window.addEventListener("click", N), window.addEventListener("touchend", M), () => {
    window.removeEventListener("keydown", y), window.removeEventListener("click", N), window.removeEventListener("touchend", M);
  }), []), /* @__PURE__ */ ye(
    Rd,
    {
      onDragStart: g,
      onDragEnd: m,
      children: /* @__PURE__ */ ye(Cn, { droppableId: "all-columns", direction: "horizontal", type: "column", children: (P, k) => /* @__PURE__ */ Tr(
        "div",
        {
          ref: P.innerRef,
          ...P.droppableProps,
          className: p,
          children: [
            l.columnOrder.map((T, H) => {
              const q = l.columns[T];
              return /* @__PURE__ */ ye(
                Jf,
                {
                  onClickRow: o,
                  column: q,
                  index: H,
                  rowsMap: l.rows,
                  columnClassNames: t,
                  rowClassNames: n,
                  isDragColumnsEnabled: a,
                  multiSelect: {
                    selectedRowIds: u,
                    draggingRowId: c || void 0,
                    functions: {
                      toggleSelection: S,
                      toggleSelectionInGroup: x,
                      multiSelectTo: b
                    }
                  }
                },
                q.id
              );
            }),
            P.placeholder
          ]
        }
      ) })
    }
  );
};
export {
  lp as DragAndDrop
};
