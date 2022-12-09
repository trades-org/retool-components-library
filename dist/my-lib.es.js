import le, { useLayoutEffect as fa, useEffect as Be, useMemo as Oe, useContext as Rt, useReducer as qi, useRef as re, useState as Yr } from "react";
import zi, { unstable_batchedUpdates as Ki } from "react-dom";
var At = { exports: {} }, Mr = {};
(function() {
  var e = le, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), c = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g = Symbol.iterator, b = "@@iterator";
  function D(v) {
    if (v === null || typeof v != "object")
      return null;
    var w = g && v[g] || v[b];
    return typeof w == "function" ? w : null;
  }
  var m = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function x(v) {
    {
      for (var w = arguments.length, P = new Array(w > 1 ? w - 1 : 0), Y = 1; Y < w; Y++)
        P[Y - 1] = arguments[Y];
      I("error", v, P);
    }
  }
  function I(v, w, P) {
    {
      var Y = m.ReactDebugCurrentFrame, X = Y.getStackAddendum();
      X !== "" && (w += "%s", P = P.concat([X]));
      var ie = P.map(function(q) {
        return String(q);
      });
      ie.unshift("Warning: " + w), Function.prototype.apply.call(console[v], console, ie);
    }
  }
  var y = !1, M = !1, O = !1, G = !1, z = !1, B;
  B = Symbol.for("react.module.reference");
  function V(v) {
    return !!(typeof v == "string" || typeof v == "function" || v === n || v === i || z || v === a || v === d || v === f || G || v === p || y || M || O || typeof v == "object" && v !== null && (v.$$typeof === c || v.$$typeof === u || v.$$typeof === o || v.$$typeof === l || v.$$typeof === s || v.$$typeof === B || v.getModuleId !== void 0));
  }
  function J(v, w, P) {
    var Y = v.displayName;
    if (Y)
      return Y;
    var X = w.displayName || w.name || "";
    return X !== "" ? P + "(" + X + ")" : P;
  }
  function te(v) {
    return v.displayName || "Context";
  }
  function E(v) {
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
          var w = v;
          return te(w) + ".Consumer";
        case o:
          var P = v;
          return te(P._context) + ".Provider";
        case s:
          return J(v, v.render, "ForwardRef");
        case u:
          var Y = v.displayName || null;
          return Y !== null ? Y : E(v.type) || "Memo";
        case c: {
          var X = v, ie = X._payload, q = X._init;
          try {
            return E(q(ie));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  var S = Object.assign, A = 0, N, T, j, F, W, $, H;
  function U() {
  }
  U.__reactDisabledLog = !0;
  function Z() {
    {
      if (A === 0) {
        N = console.log, T = console.info, j = console.warn, F = console.error, W = console.group, $ = console.groupCollapsed, H = console.groupEnd;
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
      A++;
    }
  }
  function ne() {
    {
      if (A--, A === 0) {
        var v = {
          configurable: !0,
          enumerable: !0,
          writable: !0
        };
        Object.defineProperties(console, {
          log: S({}, v, {
            value: N
          }),
          info: S({}, v, {
            value: T
          }),
          warn: S({}, v, {
            value: j
          }),
          error: S({}, v, {
            value: F
          }),
          group: S({}, v, {
            value: W
          }),
          groupCollapsed: S({}, v, {
            value: $
          }),
          groupEnd: S({}, v, {
            value: H
          })
        });
      }
      A < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
  }
  var ae = m.ReactCurrentDispatcher, be;
  function he(v, w, P) {
    {
      if (be === void 0)
        try {
          throw Error();
        } catch (X) {
          var Y = X.stack.trim().match(/\n( *(at )?)/);
          be = Y && Y[1] || "";
        }
      return `
` + be + v;
    }
  }
  var ge = !1, ye;
  {
    var R = typeof WeakMap == "function" ? WeakMap : Map;
    ye = new R();
  }
  function h(v, w) {
    if (!v || ge)
      return "";
    {
      var P = ye.get(v);
      if (P !== void 0)
        return P;
    }
    var Y;
    ge = !0;
    var X = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var ie;
    ie = ae.current, ae.current = null, Z();
    try {
      if (w) {
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
          } catch (Me) {
            Y = Me;
          }
          Reflect.construct(v, [], q);
        } else {
          try {
            q.call();
          } catch (Me) {
            Y = Me;
          }
          v.call(q.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (Me) {
          Y = Me;
        }
        v();
      }
    } catch (Me) {
      if (Me && Y && typeof Me.stack == "string") {
        for (var _ = Me.stack.split(`
`), De = Y.stack.split(`
`), ue = _.length - 1, ce = De.length - 1; ue >= 1 && ce >= 0 && _[ue] !== De[ce]; )
          ce--;
        for (; ue >= 1 && ce >= 0; ue--, ce--)
          if (_[ue] !== De[ce]) {
            if (ue !== 1 || ce !== 1)
              do
                if (ue--, ce--, ce < 0 || _[ue] !== De[ce]) {
                  var Ie = `
` + _[ue].replace(" at new ", " at ");
                  return v.displayName && Ie.includes("<anonymous>") && (Ie = Ie.replace("<anonymous>", v.displayName)), typeof v == "function" && ye.set(v, Ie), Ie;
                }
              while (ue >= 1 && ce >= 0);
            break;
          }
      }
    } finally {
      ge = !1, ae.current = ie, ne(), Error.prepareStackTrace = X;
    }
    var Je = v ? v.displayName || v.name : "", hn = Je ? he(Je) : "";
    return typeof v == "function" && ye.set(v, hn), hn;
  }
  function me(v, w, P) {
    return h(v, !1);
  }
  function de(v) {
    var w = v.prototype;
    return !!(w && w.isReactComponent);
  }
  function Se(v, w, P) {
    if (v == null)
      return "";
    if (typeof v == "function")
      return h(v, de(v));
    if (typeof v == "string")
      return he(v);
    switch (v) {
      case d:
        return he("Suspense");
      case f:
        return he("SuspenseList");
    }
    if (typeof v == "object")
      switch (v.$$typeof) {
        case s:
          return me(v.render);
        case u:
          return Se(v.type, w, P);
        case c: {
          var Y = v, X = Y._payload, ie = Y._init;
          try {
            return Se(ie(X), w, P);
          } catch {
          }
        }
      }
    return "";
  }
  var ke = Object.prototype.hasOwnProperty, Ke = {}, je = m.ReactDebugCurrentFrame;
  function Ue(v) {
    if (v) {
      var w = v._owner, P = Se(v.type, v._source, w ? w.type : null);
      je.setExtraStackFrame(P);
    } else
      je.setExtraStackFrame(null);
  }
  function or(v, w, P, Y, X) {
    {
      var ie = Function.call.bind(ke);
      for (var q in v)
        if (ie(v, q)) {
          var _ = void 0;
          try {
            if (typeof v[q] != "function") {
              var De = Error((Y || "React class") + ": " + P + " type `" + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof v[q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw De.name = "Invariant Violation", De;
            }
            _ = v[q](w, q, Y, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (ue) {
            _ = ue;
          }
          _ && !(_ instanceof Error) && (Ue(X), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Y || "React class", P, q, typeof _), Ue(null)), _ instanceof Error && !(_.message in Ke) && (Ke[_.message] = !0, Ue(X), x("Failed %s type: %s", P, _.message), Ue(null));
        }
    }
  }
  var lr = Array.isArray;
  function sr(v) {
    return lr(v);
  }
  function $e(v) {
    {
      var w = typeof Symbol == "function" && Symbol.toStringTag, P = w && v[Symbol.toStringTag] || v.constructor.name || "Object";
      return P;
    }
  }
  function ur(v) {
    try {
      return sn(v), !1;
    } catch {
      return !0;
    }
  }
  function sn(v) {
    return "" + v;
  }
  function un(v) {
    if (ur(v))
      return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $e(v)), sn(v);
  }
  var cr = m.ReactCurrentOwner, Oi = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  }, cn, dn, Xr;
  Xr = {};
  function Bi(v) {
    if (ke.call(v, "ref")) {
      var w = Object.getOwnPropertyDescriptor(v, "ref").get;
      if (w && w.isReactWarning)
        return !1;
    }
    return v.ref !== void 0;
  }
  function Mi(v) {
    if (ke.call(v, "key")) {
      var w = Object.getOwnPropertyDescriptor(v, "key").get;
      if (w && w.isReactWarning)
        return !1;
    }
    return v.key !== void 0;
  }
  function Ni(v, w) {
    if (typeof v.ref == "string" && cr.current && w && cr.current.stateNode !== w) {
      var P = E(cr.current.type);
      Xr[P] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(cr.current.type), v.ref), Xr[P] = !0);
    }
  }
  function Li(v, w) {
    {
      var P = function() {
        cn || (cn = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
      };
      P.isReactWarning = !0, Object.defineProperty(v, "key", {
        get: P,
        configurable: !0
      });
    }
  }
  function Fi(v, w) {
    {
      var P = function() {
        dn || (dn = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
      };
      P.isReactWarning = !0, Object.defineProperty(v, "ref", {
        get: P,
        configurable: !0
      });
    }
  }
  var Gi = function(v, w, P, Y, X, ie, q) {
    var _ = {
      $$typeof: r,
      type: v,
      key: w,
      ref: P,
      props: q,
      _owner: ie
    };
    return _._store = {}, Object.defineProperty(_._store, "validated", {
      configurable: !1,
      enumerable: !1,
      writable: !0,
      value: !1
    }), Object.defineProperty(_, "_self", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: Y
    }), Object.defineProperty(_, "_source", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: X
    }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
  };
  function Wi(v, w, P, Y, X) {
    {
      var ie, q = {}, _ = null, De = null;
      P !== void 0 && (un(P), _ = "" + P), Mi(w) && (un(w.key), _ = "" + w.key), Bi(w) && (De = w.ref, Ni(w, X));
      for (ie in w)
        ke.call(w, ie) && !Oi.hasOwnProperty(ie) && (q[ie] = w[ie]);
      if (v && v.defaultProps) {
        var ue = v.defaultProps;
        for (ie in ue)
          q[ie] === void 0 && (q[ie] = ue[ie]);
      }
      if (_ || De) {
        var ce = typeof v == "function" ? v.displayName || v.name || "Unknown" : v;
        _ && Li(q, ce), De && Fi(q, ce);
      }
      return Gi(v, _, De, X, Y, cr.current, q);
    }
  }
  var Jr = m.ReactCurrentOwner, fn = m.ReactDebugCurrentFrame;
  function Xe(v) {
    if (v) {
      var w = v._owner, P = Se(v.type, v._source, w ? w.type : null);
      fn.setExtraStackFrame(P);
    } else
      fn.setExtraStackFrame(null);
  }
  var Zr;
  Zr = !1;
  function Qr(v) {
    return typeof v == "object" && v !== null && v.$$typeof === r;
  }
  function pn() {
    {
      if (Jr.current) {
        var v = E(Jr.current.type);
        if (v)
          return `

Check the render method of \`` + v + "`.";
      }
      return "";
    }
  }
  function ki(v) {
    {
      if (v !== void 0) {
        var w = v.fileName.replace(/^.*[\\\/]/, ""), P = v.lineNumber;
        return `

Check your code at ` + w + ":" + P + ".";
      }
      return "";
    }
  }
  var vn = {};
  function ji(v) {
    {
      var w = pn();
      if (!w) {
        var P = typeof v == "string" ? v : v.displayName || v.name;
        P && (w = `

Check the top-level render call using <` + P + ">.");
      }
      return w;
    }
  }
  function gn(v, w) {
    {
      if (!v._store || v._store.validated || v.key != null)
        return;
      v._store.validated = !0;
      var P = ji(w);
      if (vn[P])
        return;
      vn[P] = !0;
      var Y = "";
      v && v._owner && v._owner !== Jr.current && (Y = " It was passed a child from " + E(v._owner.type) + "."), Xe(v), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', P, Y), Xe(null);
    }
  }
  function mn(v, w) {
    {
      if (typeof v != "object")
        return;
      if (sr(v))
        for (var P = 0; P < v.length; P++) {
          var Y = v[P];
          Qr(Y) && gn(Y, w);
        }
      else if (Qr(v))
        v._store && (v._store.validated = !0);
      else if (v) {
        var X = D(v);
        if (typeof X == "function" && X !== v.entries)
          for (var ie = X.call(v), q; !(q = ie.next()).done; )
            Qr(q.value) && gn(q.value, w);
      }
    }
  }
  function Ui(v) {
    {
      var w = v.type;
      if (w == null || typeof w == "string")
        return;
      var P;
      if (typeof w == "function")
        P = w.propTypes;
      else if (typeof w == "object" && (w.$$typeof === s || w.$$typeof === u))
        P = w.propTypes;
      else
        return;
      if (P) {
        var Y = E(w);
        or(P, v.props, "prop", Y, v);
      } else if (w.PropTypes !== void 0 && !Zr) {
        Zr = !0;
        var X = E(w);
        x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", X || "Unknown");
      }
      typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function $i(v) {
    {
      for (var w = Object.keys(v.props), P = 0; P < w.length; P++) {
        var Y = w[P];
        if (Y !== "children" && Y !== "key") {
          Xe(v), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Y), Xe(null);
          break;
        }
      }
      v.ref !== null && (Xe(v), x("Invalid attribute `ref` supplied to `React.Fragment`."), Xe(null));
    }
  }
  function bn(v, w, P, Y, X, ie) {
    {
      var q = V(v);
      if (!q) {
        var _ = "";
        (v === void 0 || typeof v == "object" && v !== null && Object.keys(v).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var De = ki(X);
        De ? _ += De : _ += pn();
        var ue;
        v === null ? ue = "null" : sr(v) ? ue = "array" : v !== void 0 && v.$$typeof === r ? (ue = "<" + (E(v.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : ue = typeof v, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ue, _);
      }
      var ce = Wi(v, w, P, X, ie);
      if (ce == null)
        return ce;
      if (q) {
        var Ie = w.children;
        if (Ie !== void 0)
          if (Y)
            if (sr(Ie)) {
              for (var Je = 0; Je < Ie.length; Je++)
                mn(Ie[Je], v);
              Object.freeze && Object.freeze(Ie);
            } else
              x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
          else
            mn(Ie, v);
      }
      return v === n ? $i(ce) : Ui(ce), ce;
    }
  }
  function Yi(v, w, P) {
    return bn(v, w, P, !0);
  }
  function Hi(v, w, P) {
    return bn(v, w, P, !1);
  }
  var Vi = Hi, _i = Yi;
  Mr.Fragment = n, Mr.jsx = Vi, Mr.jsxs = _i;
})();
(function(e) {
  e.exports = Mr;
})(At);
const Pr = At.exports.jsx, Xi = At.exports.jsxs;
function ht(e, r) {
  return ht = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, ht(e, r);
}
function pa(e, r) {
  e.prototype = Object.create(r.prototype), e.prototype.constructor = e, ht(e, r);
}
function k() {
  return k = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, k.apply(this, arguments);
}
function mr(e) {
  return mr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, mr(e);
}
function Ji(e, r) {
  if (mr(e) !== "object" || e === null)
    return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r || "default");
    if (mr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function Zi(e) {
  var r = Ji(e, "string");
  return mr(r) === "symbol" ? r : String(r);
}
function Qi(e, r, t) {
  return r = Zi(r), r in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function yn(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Dn(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? yn(Object(t), !0).forEach(function(n) {
      Qi(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : yn(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
var xn = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), et = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, En = {
  INIT: "@@redux/INIT" + et(),
  REPLACE: "@@redux/REPLACE" + et(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + et();
  }
};
function eo(e) {
  if (typeof e != "object" || e === null)
    return !1;
  for (var r = e; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return Object.getPrototypeOf(e) === r;
}
function ro(e) {
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
  if (ao(e))
    return "date";
  if (no(e))
    return "error";
  var t = to(e);
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
function to(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function no(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function ao(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function He(e) {
  var r = typeof e;
  return r = ro(e), r;
}
function va(e, r, t) {
  var n;
  if (typeof r == "function" && typeof t == "function" || typeof t == "function" && typeof arguments[3] == "function")
    throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof r == "function" && typeof t > "u" && (t = r, r = void 0), typeof t < "u") {
    if (typeof t != "function")
      throw new Error("Expected the enhancer to be a function. Instead, received: '" + He(t) + "'");
    return t(va)(e, r);
  }
  if (typeof e != "function")
    throw new Error("Expected the root reducer to be a function. Instead, received: '" + He(e) + "'");
  var a = e, i = r, o = [], l = o, s = !1;
  function d() {
    l === o && (l = o.slice());
  }
  function f() {
    if (s)
      throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function u(b) {
    if (typeof b != "function")
      throw new Error("Expected the listener to be a function. Instead, received: '" + He(b) + "'");
    if (s)
      throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var D = !0;
    return d(), l.push(b), function() {
      if (!!D) {
        if (s)
          throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        D = !1, d();
        var x = l.indexOf(b);
        l.splice(x, 1), o = null;
      }
    };
  }
  function c(b) {
    if (!eo(b))
      throw new Error("Actions must be plain objects. Instead, the actual type was: '" + He(b) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof b.type > "u")
      throw new Error('Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (s)
      throw new Error("Reducers may not dispatch actions.");
    try {
      s = !0, i = a(i, b);
    } finally {
      s = !1;
    }
    for (var D = o = l, m = 0; m < D.length; m++) {
      var x = D[m];
      x();
    }
    return b;
  }
  function p(b) {
    if (typeof b != "function")
      throw new Error("Expected the nextReducer to be a function. Instead, received: '" + He(b));
    a = b, c({
      type: En.REPLACE
    });
  }
  function g() {
    var b, D = u;
    return b = {
      subscribe: function(x) {
        if (typeof x != "object" || x === null)
          throw new Error("Expected the observer to be an object. Instead, received: '" + He(x) + "'");
        function I() {
          x.next && x.next(f());
        }
        I();
        var y = D(I);
        return {
          unsubscribe: y
        };
      }
    }, b[xn] = function() {
      return this;
    }, b;
  }
  return c({
    type: En.INIT
  }), n = {
    dispatch: c,
    subscribe: u,
    getState: f,
    replaceReducer: p
  }, n[xn] = g, n;
}
function io(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Cn(e, r) {
  return function() {
    return r(e.apply(this, arguments));
  };
}
function wn(e, r) {
  if (typeof e == "function")
    return Cn(e, r);
  if (typeof e != "object" || e === null)
    throw new Error("bindActionCreators expected an object or a function, but instead received: '" + He(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var t = {};
  for (var n in e) {
    var a = e[n];
    typeof a == "function" && (t[n] = Cn(a, r));
  }
  return t;
}
function ga() {
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
function oo() {
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
      return i = ga.apply(void 0, l)(a.dispatch), Dn(Dn({}, a), {}, {
        dispatch: i
      });
    };
  };
}
function Sn() {
}
typeof Sn.name == "string" && Sn.name !== "isCrushed" && io('You are currently using minified code outside of NODE_ENV === "production". This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) to ensure you have the correct code for your production build.');
var Ve = { exports: {} }, Ot = { exports: {} }, Q = {};
(function() {
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, c = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, D = e ? Symbol.for("react.fundamental") : 60117, m = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function I(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === d || h === i || h === a || h === u || h === c || typeof h == "object" && h !== null && (h.$$typeof === g || h.$$typeof === p || h.$$typeof === o || h.$$typeof === l || h.$$typeof === f || h.$$typeof === D || h.$$typeof === m || h.$$typeof === x || h.$$typeof === b);
  }
  function y(h) {
    if (typeof h == "object" && h !== null) {
      var me = h.$$typeof;
      switch (me) {
        case r:
          var de = h.type;
          switch (de) {
            case s:
            case d:
            case n:
            case i:
            case a:
            case u:
              return de;
            default:
              var Se = de && de.$$typeof;
              switch (Se) {
                case l:
                case f:
                case g:
                case p:
                case o:
                  return Se;
                default:
                  return me;
              }
          }
        case t:
          return me;
      }
    }
  }
  var M = s, O = d, G = l, z = o, B = r, V = f, J = n, te = g, E = p, S = t, A = i, N = a, T = u, j = !1;
  function F(h) {
    return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), W(h) || y(h) === s;
  }
  function W(h) {
    return y(h) === d;
  }
  function $(h) {
    return y(h) === l;
  }
  function H(h) {
    return y(h) === o;
  }
  function U(h) {
    return typeof h == "object" && h !== null && h.$$typeof === r;
  }
  function Z(h) {
    return y(h) === f;
  }
  function ne(h) {
    return y(h) === n;
  }
  function ae(h) {
    return y(h) === g;
  }
  function be(h) {
    return y(h) === p;
  }
  function he(h) {
    return y(h) === t;
  }
  function ge(h) {
    return y(h) === i;
  }
  function ye(h) {
    return y(h) === a;
  }
  function R(h) {
    return y(h) === u;
  }
  Q.AsyncMode = M, Q.ConcurrentMode = O, Q.ContextConsumer = G, Q.ContextProvider = z, Q.Element = B, Q.ForwardRef = V, Q.Fragment = J, Q.Lazy = te, Q.Memo = E, Q.Portal = S, Q.Profiler = A, Q.StrictMode = N, Q.Suspense = T, Q.isAsyncMode = F, Q.isConcurrentMode = W, Q.isContextConsumer = $, Q.isContextProvider = H, Q.isElement = U, Q.isForwardRef = Z, Q.isFragment = ne, Q.isLazy = ae, Q.isMemo = be, Q.isPortal = he, Q.isProfiler = ge, Q.isStrictMode = ye, Q.isSuspense = R, Q.isValidElementType = I, Q.typeOf = y;
})();
(function(e) {
  e.exports = Q;
})(Ot);
var In = Object.getOwnPropertySymbols, lo = Object.prototype.hasOwnProperty, so = Object.prototype.propertyIsEnumerable;
function uo(e) {
  if (e == null)
    throw new TypeError("Object.assign cannot be called with null or undefined");
  return Object(e);
}
function co() {
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
var fo = co() ? Object.assign : function(e, r) {
  for (var t, n = uo(e), a, i = 1; i < arguments.length; i++) {
    t = Object(arguments[i]);
    for (var o in t)
      lo.call(t, o) && (n[o] = t[o]);
    if (In) {
      a = In(t);
      for (var l = 0; l < a.length; l++)
        so.call(t, a[l]) && (n[a[l]] = t[a[l]]);
    }
  }
  return n;
}, po = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", ma = po, ba = Function.call.bind(Object.prototype.hasOwnProperty), yt = function() {
};
{
  var vo = ma, Dt = {}, go = ba;
  yt = function(e) {
    var r = "Warning: " + e;
    typeof console < "u" && console.error(r);
    try {
      throw new Error(r);
    } catch {
    }
  };
}
function ha(e, r, t, n, a) {
  for (var i in e)
    if (go(e, i)) {
      var o;
      try {
        if (typeof e[i] != "function") {
          var l = Error(
            (n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
          );
          throw l.name = "Invariant Violation", l;
        }
        o = e[i](r, i, n, t, null, vo);
      } catch (d) {
        o = d;
      }
      if (o && !(o instanceof Error) && yt(
        (n || "React class") + ": type specification of " + t + " `" + i + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof o + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
      ), o instanceof Error && !(o.message in Dt)) {
        Dt[o.message] = !0;
        var s = a ? a() : "";
        yt(
          "Failed " + t + " type: " + o.message + (s ?? "")
        );
      }
    }
}
ha.resetWarningCache = function() {
  Dt = {};
};
var mo = ha, bo = Ot.exports, ho = fo, Ze = ma, rt = ba, Pn = mo, er = function() {
};
er = function(e) {
  var r = "Warning: " + e;
  typeof console < "u" && console.error(r);
  try {
    throw new Error(r);
  } catch {
  }
};
function Tr() {
  return null;
}
var yo = function(e, r) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = "@@iterator";
  function a(E) {
    var S = E && (t && E[t] || E[n]);
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
    instanceOf: b,
    node: I(),
    objectOf: m,
    oneOf: D,
    oneOfType: x,
    shape: M,
    exact: O
  };
  function l(E, S) {
    return E === S ? E !== 0 || 1 / E === 1 / S : E !== E && S !== S;
  }
  function s(E, S) {
    this.message = E, this.data = S && typeof S == "object" ? S : {}, this.stack = "";
  }
  s.prototype = Error.prototype;
  function d(E) {
    var S = {}, A = 0;
    function N(j, F, W, $, H, U, Z) {
      if ($ = $ || i, U = U || W, Z !== Ze) {
        if (r) {
          var ne = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ne.name = "Invariant Violation", ne;
        } else if (typeof console < "u") {
          var ae = $ + ":" + W;
          !S[ae] && A < 3 && (er(
            "You are manually calling a React.PropTypes validation function for the `" + U + "` prop on `" + $ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
          ), S[ae] = !0, A++);
        }
      }
      return F[W] == null ? j ? F[W] === null ? new s("The " + H + " `" + U + "` is marked as required " + ("in `" + $ + "`, but its value is `null`.")) : new s("The " + H + " `" + U + "` is marked as required in " + ("`" + $ + "`, but its value is `undefined`.")) : null : E(F, W, $, H, U);
    }
    var T = N.bind(null, !1);
    return T.isRequired = N.bind(null, !0), T;
  }
  function f(E) {
    function S(A, N, T, j, F, W) {
      var $ = A[N], H = B($);
      if (H !== E) {
        var U = V($);
        return new s(
          "Invalid " + j + " `" + F + "` of type " + ("`" + U + "` supplied to `" + T + "`, expected ") + ("`" + E + "`."),
          { expectedType: E }
        );
      }
      return null;
    }
    return d(S);
  }
  function u() {
    return d(Tr);
  }
  function c(E) {
    function S(A, N, T, j, F) {
      if (typeof E != "function")
        return new s("Property `" + F + "` of component `" + T + "` has invalid PropType notation inside arrayOf.");
      var W = A[N];
      if (!Array.isArray(W)) {
        var $ = B(W);
        return new s("Invalid " + j + " `" + F + "` of type " + ("`" + $ + "` supplied to `" + T + "`, expected an array."));
      }
      for (var H = 0; H < W.length; H++) {
        var U = E(W, H, T, j, F + "[" + H + "]", Ze);
        if (U instanceof Error)
          return U;
      }
      return null;
    }
    return d(S);
  }
  function p() {
    function E(S, A, N, T, j) {
      var F = S[A];
      if (!e(F)) {
        var W = B(F);
        return new s("Invalid " + T + " `" + j + "` of type " + ("`" + W + "` supplied to `" + N + "`, expected a single ReactElement."));
      }
      return null;
    }
    return d(E);
  }
  function g() {
    function E(S, A, N, T, j) {
      var F = S[A];
      if (!bo.isValidElementType(F)) {
        var W = B(F);
        return new s("Invalid " + T + " `" + j + "` of type " + ("`" + W + "` supplied to `" + N + "`, expected a single ReactElement type."));
      }
      return null;
    }
    return d(E);
  }
  function b(E) {
    function S(A, N, T, j, F) {
      if (!(A[N] instanceof E)) {
        var W = E.name || i, $ = te(A[N]);
        return new s("Invalid " + j + " `" + F + "` of type " + ("`" + $ + "` supplied to `" + T + "`, expected ") + ("instance of `" + W + "`."));
      }
      return null;
    }
    return d(S);
  }
  function D(E) {
    if (!Array.isArray(E))
      return arguments.length > 1 ? er(
        "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
      ) : er("Invalid argument supplied to oneOf, expected an array."), Tr;
    function S(A, N, T, j, F) {
      for (var W = A[N], $ = 0; $ < E.length; $++)
        if (l(W, E[$]))
          return null;
      var H = JSON.stringify(E, function(Z, ne) {
        var ae = V(ne);
        return ae === "symbol" ? String(ne) : ne;
      });
      return new s("Invalid " + j + " `" + F + "` of value `" + String(W) + "` " + ("supplied to `" + T + "`, expected one of " + H + "."));
    }
    return d(S);
  }
  function m(E) {
    function S(A, N, T, j, F) {
      if (typeof E != "function")
        return new s("Property `" + F + "` of component `" + T + "` has invalid PropType notation inside objectOf.");
      var W = A[N], $ = B(W);
      if ($ !== "object")
        return new s("Invalid " + j + " `" + F + "` of type " + ("`" + $ + "` supplied to `" + T + "`, expected an object."));
      for (var H in W)
        if (rt(W, H)) {
          var U = E(W, H, T, j, F + "." + H, Ze);
          if (U instanceof Error)
            return U;
        }
      return null;
    }
    return d(S);
  }
  function x(E) {
    if (!Array.isArray(E))
      return er("Invalid argument supplied to oneOfType, expected an instance of array."), Tr;
    for (var S = 0; S < E.length; S++) {
      var A = E[S];
      if (typeof A != "function")
        return er(
          "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + J(A) + " at index " + S + "."
        ), Tr;
    }
    function N(T, j, F, W, $) {
      for (var H = [], U = 0; U < E.length; U++) {
        var Z = E[U], ne = Z(T, j, F, W, $, Ze);
        if (ne == null)
          return null;
        ne.data && rt(ne.data, "expectedType") && H.push(ne.data.expectedType);
      }
      var ae = H.length > 0 ? ", expected one of type [" + H.join(", ") + "]" : "";
      return new s("Invalid " + W + " `" + $ + "` supplied to " + ("`" + F + "`" + ae + "."));
    }
    return d(N);
  }
  function I() {
    function E(S, A, N, T, j) {
      return G(S[A]) ? null : new s("Invalid " + T + " `" + j + "` supplied to " + ("`" + N + "`, expected a ReactNode."));
    }
    return d(E);
  }
  function y(E, S, A, N, T) {
    return new s(
      (E || "React class") + ": " + S + " type `" + A + "." + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + T + "`."
    );
  }
  function M(E) {
    function S(A, N, T, j, F) {
      var W = A[N], $ = B(W);
      if ($ !== "object")
        return new s("Invalid " + j + " `" + F + "` of type `" + $ + "` " + ("supplied to `" + T + "`, expected `object`."));
      for (var H in E) {
        var U = E[H];
        if (typeof U != "function")
          return y(T, j, F, H, V(U));
        var Z = U(W, H, T, j, F + "." + H, Ze);
        if (Z)
          return Z;
      }
      return null;
    }
    return d(S);
  }
  function O(E) {
    function S(A, N, T, j, F) {
      var W = A[N], $ = B(W);
      if ($ !== "object")
        return new s("Invalid " + j + " `" + F + "` of type `" + $ + "` " + ("supplied to `" + T + "`, expected `object`."));
      var H = ho({}, A[N], E);
      for (var U in H) {
        var Z = E[U];
        if (rt(E, U) && typeof Z != "function")
          return y(T, j, F, U, V(Z));
        if (!Z)
          return new s(
            "Invalid " + j + " `" + F + "` key `" + U + "` supplied to `" + T + "`.\nBad object: " + JSON.stringify(A[N], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
          );
        var ne = Z(W, U, T, j, F + "." + U, Ze);
        if (ne)
          return ne;
      }
      return null;
    }
    return d(S);
  }
  function G(E) {
    switch (typeof E) {
      case "number":
      case "string":
      case "undefined":
        return !0;
      case "boolean":
        return !E;
      case "object":
        if (Array.isArray(E))
          return E.every(G);
        if (E === null || e(E))
          return !0;
        var S = a(E);
        if (S) {
          var A = S.call(E), N;
          if (S !== E.entries) {
            for (; !(N = A.next()).done; )
              if (!G(N.value))
                return !1;
          } else
            for (; !(N = A.next()).done; ) {
              var T = N.value;
              if (T && !G(T[1]))
                return !1;
            }
        } else
          return !1;
        return !0;
      default:
        return !1;
    }
  }
  function z(E, S) {
    return E === "symbol" ? !0 : S ? S["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && S instanceof Symbol : !1;
  }
  function B(E) {
    var S = typeof E;
    return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : z(S, E) ? "symbol" : S;
  }
  function V(E) {
    if (typeof E > "u" || E === null)
      return "" + E;
    var S = B(E);
    if (S === "object") {
      if (E instanceof Date)
        return "date";
      if (E instanceof RegExp)
        return "regexp";
    }
    return S;
  }
  function J(E) {
    var S = V(E);
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
  function te(E) {
    return !E.constructor || !E.constructor.name ? i : E.constructor.name;
  }
  return o.checkPropTypes = Pn, o.resetWarningCache = Pn.resetWarningCache, o.PropTypes = o, o;
};
{
  var Do = Ot.exports, xo = !0;
  Ve.exports = yo(Do.isElement, xo);
}
var Bt = /* @__PURE__ */ le.createContext(null);
Bt.displayName = "ReactRedux";
function Eo(e) {
  e();
}
var ya = Eo, Co = function(r) {
  return ya = r;
}, wo = function() {
  return ya;
};
function So() {
  var e = wo(), r = null, t = null;
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
var Tn = {
  notify: function() {
  },
  get: function() {
    return [];
  }
};
function Da(e, r) {
  var t, n = Tn;
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
    t || (t = r ? r.addNestedSub(o) : e.subscribe(o), n = So());
  }
  function d() {
    t && (t(), t = void 0, n.clear(), n = Tn);
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
var xa = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? fa : Be;
function Ea(e) {
  var r = e.store, t = e.context, n = e.children, a = Oe(function() {
    var l = Da(r);
    return {
      store: r,
      subscription: l
    };
  }, [r]), i = Oe(function() {
    return r.getState();
  }, [r]);
  xa(function() {
    var l = a.subscription;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), i !== r.getState() && l.notifyNestedSubs(), function() {
      l.tryUnsubscribe(), l.onStateChange = null;
    };
  }, [a, i]);
  var o = t || Bt;
  return /* @__PURE__ */ le.createElement(o.Provider, {
    value: a
  }, n);
}
Ea.propTypes = {
  store: Ve.exports.shape({
    subscribe: Ve.exports.func.isRequired,
    dispatch: Ve.exports.func.isRequired,
    getState: Ve.exports.func.isRequired
  }),
  context: Ve.exports.object,
  children: Ve.exports.any
};
function Lr(e, r) {
  if (e == null)
    return {};
  var t = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(r.indexOf(a) >= 0) && (t[a] = e[a]);
  return t;
}
var Ca = { exports: {} }, ee = {};
(function() {
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, c = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, D = e ? Symbol.for("react.fundamental") : 60117, m = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function I(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === d || h === i || h === a || h === u || h === c || typeof h == "object" && h !== null && (h.$$typeof === g || h.$$typeof === p || h.$$typeof === o || h.$$typeof === l || h.$$typeof === f || h.$$typeof === D || h.$$typeof === m || h.$$typeof === x || h.$$typeof === b);
  }
  function y(h) {
    if (typeof h == "object" && h !== null) {
      var me = h.$$typeof;
      switch (me) {
        case r:
          var de = h.type;
          switch (de) {
            case s:
            case d:
            case n:
            case i:
            case a:
            case u:
              return de;
            default:
              var Se = de && de.$$typeof;
              switch (Se) {
                case l:
                case f:
                case g:
                case p:
                case o:
                  return Se;
                default:
                  return me;
              }
          }
        case t:
          return me;
      }
    }
  }
  var M = s, O = d, G = l, z = o, B = r, V = f, J = n, te = g, E = p, S = t, A = i, N = a, T = u, j = !1;
  function F(h) {
    return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), W(h) || y(h) === s;
  }
  function W(h) {
    return y(h) === d;
  }
  function $(h) {
    return y(h) === l;
  }
  function H(h) {
    return y(h) === o;
  }
  function U(h) {
    return typeof h == "object" && h !== null && h.$$typeof === r;
  }
  function Z(h) {
    return y(h) === f;
  }
  function ne(h) {
    return y(h) === n;
  }
  function ae(h) {
    return y(h) === g;
  }
  function be(h) {
    return y(h) === p;
  }
  function he(h) {
    return y(h) === t;
  }
  function ge(h) {
    return y(h) === i;
  }
  function ye(h) {
    return y(h) === a;
  }
  function R(h) {
    return y(h) === u;
  }
  ee.AsyncMode = M, ee.ConcurrentMode = O, ee.ContextConsumer = G, ee.ContextProvider = z, ee.Element = B, ee.ForwardRef = V, ee.Fragment = J, ee.Lazy = te, ee.Memo = E, ee.Portal = S, ee.Profiler = A, ee.StrictMode = N, ee.Suspense = T, ee.isAsyncMode = F, ee.isConcurrentMode = W, ee.isContextConsumer = $, ee.isContextProvider = H, ee.isElement = U, ee.isForwardRef = Z, ee.isFragment = ne, ee.isLazy = ae, ee.isMemo = be, ee.isPortal = he, ee.isProfiler = ge, ee.isStrictMode = ye, ee.isSuspense = R, ee.isValidElementType = I, ee.typeOf = y;
})();
(function(e) {
  e.exports = ee;
})(Ca);
var Mt = Ca.exports, Io = {
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
}, Po = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, To = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, wa = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Nt = {};
Nt[Mt.ForwardRef] = To;
Nt[Mt.Memo] = wa;
function Rn(e) {
  return Mt.isMemo(e) ? wa : Nt[e.$$typeof] || Io;
}
var Ro = Object.defineProperty, Ao = Object.getOwnPropertyNames, An = Object.getOwnPropertySymbols, Oo = Object.getOwnPropertyDescriptor, Bo = Object.getPrototypeOf, On = Object.prototype;
function Sa(e, r, t) {
  if (typeof r != "string") {
    if (On) {
      var n = Bo(r);
      n && n !== On && Sa(e, n, t);
    }
    var a = Ao(r);
    An && (a = a.concat(An(r)));
    for (var i = Rn(e), o = Rn(r), l = 0; l < a.length; ++l) {
      var s = a[l];
      if (!Po[s] && !(t && t[s]) && !(o && o[s]) && !(i && i[s])) {
        var d = Oo(r, s);
        try {
          Ro(e, s, d);
        } catch {
        }
      }
    }
  }
  return e;
}
var Bn = Sa, xt = { exports: {} }, oe = {};
(function() {
  var e = 60103, r = 60106, t = 60107, n = 60108, a = 60114, i = 60109, o = 60110, l = 60112, s = 60113, d = 60120, f = 60115, u = 60116, c = 60121, p = 60122, g = 60117, b = 60129, D = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var m = Symbol.for;
    e = m("react.element"), r = m("react.portal"), t = m("react.fragment"), n = m("react.strict_mode"), a = m("react.profiler"), i = m("react.provider"), o = m("react.context"), l = m("react.forward_ref"), s = m("react.suspense"), d = m("react.suspense_list"), f = m("react.memo"), u = m("react.lazy"), c = m("react.block"), p = m("react.server.block"), g = m("react.fundamental"), m("react.scope"), m("react.opaque.id"), b = m("react.debug_trace_mode"), m("react.offscreen"), D = m("react.legacy_hidden");
  }
  var x = !1;
  function I(R) {
    return !!(typeof R == "string" || typeof R == "function" || R === t || R === a || R === b || R === n || R === s || R === d || R === D || x || typeof R == "object" && R !== null && (R.$$typeof === u || R.$$typeof === f || R.$$typeof === i || R.$$typeof === o || R.$$typeof === l || R.$$typeof === g || R.$$typeof === c || R[0] === p));
  }
  function y(R) {
    if (typeof R == "object" && R !== null) {
      var h = R.$$typeof;
      switch (h) {
        case e:
          var me = R.type;
          switch (me) {
            case t:
            case a:
            case n:
            case s:
            case d:
              return me;
            default:
              var de = me && me.$$typeof;
              switch (de) {
                case o:
                case l:
                case u:
                case f:
                case i:
                  return de;
                default:
                  return h;
              }
          }
        case r:
          return h;
      }
    }
  }
  var M = o, O = i, G = e, z = l, B = t, V = u, J = f, te = r, E = a, S = n, A = s, N = !1, T = !1;
  function j(R) {
    return N || (N = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
  }
  function F(R) {
    return T || (T = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
  }
  function W(R) {
    return y(R) === o;
  }
  function $(R) {
    return y(R) === i;
  }
  function H(R) {
    return typeof R == "object" && R !== null && R.$$typeof === e;
  }
  function U(R) {
    return y(R) === l;
  }
  function Z(R) {
    return y(R) === t;
  }
  function ne(R) {
    return y(R) === u;
  }
  function ae(R) {
    return y(R) === f;
  }
  function be(R) {
    return y(R) === r;
  }
  function he(R) {
    return y(R) === a;
  }
  function ge(R) {
    return y(R) === n;
  }
  function ye(R) {
    return y(R) === s;
  }
  oe.ContextConsumer = M, oe.ContextProvider = O, oe.Element = G, oe.ForwardRef = z, oe.Fragment = B, oe.Lazy = V, oe.Memo = J, oe.Portal = te, oe.Profiler = E, oe.StrictMode = S, oe.Suspense = A, oe.isAsyncMode = j, oe.isConcurrentMode = F, oe.isContextConsumer = W, oe.isContextProvider = $, oe.isElement = H, oe.isForwardRef = U, oe.isFragment = Z, oe.isLazy = ne, oe.isMemo = ae, oe.isPortal = be, oe.isProfiler = he, oe.isStrictMode = ge, oe.isSuspense = ye, oe.isValidElementType = I, oe.typeOf = y;
})();
(function(e) {
  e.exports = oe;
})(xt);
var Mo = ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"], No = ["reactReduxForwardedRef"], Lo = [], Fo = [null, null], Go = function(r) {
  try {
    return JSON.stringify(r);
  } catch {
    return String(r);
  }
};
function Wo(e, r) {
  var t = e[1];
  return [r.payload, t + 1];
}
function Mn(e, r, t) {
  xa(function() {
    return e.apply(void 0, r);
  }, t);
}
function ko(e, r, t, n, a, i, o) {
  e.current = n, r.current = a, t.current = !1, i.current && (i.current = null, o());
}
function jo(e, r, t, n, a, i, o, l, s, d) {
  if (!!e) {
    var f = !1, u = null, c = function() {
      if (!f) {
        var b = r.getState(), D, m;
        try {
          D = n(b, a.current);
        } catch (x) {
          m = x, u = x;
        }
        m || (u = null), D === i.current ? o.current || s() : (i.current = D, l.current = D, o.current = !0, d({
          type: "STORE_UPDATED",
          payload: {
            error: m
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
var Uo = function() {
  return [null, 0];
};
function $o(e, r) {
  r === void 0 && (r = {});
  var t = r, n = t.getDisplayName, a = n === void 0 ? function(O) {
    return "ConnectAdvanced(" + O + ")";
  } : n, i = t.methodName, o = i === void 0 ? "connectAdvanced" : i, l = t.renderCountProp, s = l === void 0 ? void 0 : l, d = t.shouldHandleStateChanges, f = d === void 0 ? !0 : d, u = t.storeKey, c = u === void 0 ? "store" : u, p = t.withRef, g = p === void 0 ? !1 : p, b = t.forwardRef, D = b === void 0 ? !1 : b, m = t.context, x = m === void 0 ? Bt : m, I = Lr(t, Mo);
  {
    if (s !== void 0)
      throw new Error("renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
    if (g)
      throw new Error("withRef is removed. To access the wrapped instance, use a ref on the connected component");
    var y = "To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect";
    if (c !== "store")
      throw new Error("storeKey has been removed and does not do anything. " + y);
  }
  var M = x;
  return function(G) {
    if (!xt.exports.isValidElementType(G))
      throw new Error("You must pass a component to the function returned by " + (o + ". Instead received " + Go(G)));
    var z = G.displayName || G.name || "Component", B = a(z), V = k({}, I, {
      getDisplayName: a,
      methodName: o,
      renderCountProp: s,
      shouldHandleStateChanges: f,
      storeKey: c,
      displayName: B,
      wrappedComponentName: z,
      WrappedComponent: G
    }), J = I.pure;
    function te(T) {
      return e(T.dispatch, V);
    }
    var E = J ? Oe : function(T) {
      return T();
    };
    function S(T) {
      var j = Oe(function() {
        var $e = T.reactReduxForwardedRef, ur = Lr(T, No);
        return [T.context, $e, ur];
      }, [T]), F = j[0], W = j[1], $ = j[2], H = Oe(function() {
        return F && F.Consumer && xt.exports.isContextConsumer(/* @__PURE__ */ le.createElement(F.Consumer, null)) ? F : M;
      }, [F, M]), U = Rt(H), Z = Boolean(T.store) && Boolean(T.store.getState) && Boolean(T.store.dispatch), ne = Boolean(U) && Boolean(U.store);
      if (!Z && !ne)
        throw new Error('Could not find "store" in the context of ' + ('"' + B + '". Either wrap the root component in a <Provider>, ') + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + B + " in connect options."));
      var ae = Z ? T.store : U.store, be = Oe(function() {
        return te(ae);
      }, [ae]), he = Oe(function() {
        if (!f)
          return Fo;
        var $e = Da(ae, Z ? null : U.subscription), ur = $e.notifyNestedSubs.bind($e);
        return [$e, ur];
      }, [ae, Z, U]), ge = he[0], ye = he[1], R = Oe(function() {
        return Z ? U : k({}, U, {
          subscription: ge
        });
      }, [Z, U, ge]), h = qi(Wo, Lo, Uo), me = h[0], de = me[0], Se = h[1];
      if (de && de.error)
        throw de.error;
      var ke = re(), Ke = re($), je = re(), Ue = re(!1), or = E(function() {
        return je.current && $ === Ke.current ? je.current : be(ae.getState(), $);
      }, [ae, de, $]);
      Mn(ko, [Ke, ke, Ue, $, or, je, ye]), Mn(jo, [f, ae, ge, be, Ke, ke, Ue, je, ye, Se], [ae, ge, be]);
      var lr = Oe(function() {
        return /* @__PURE__ */ le.createElement(G, k({}, or, {
          ref: W
        }));
      }, [W, G, or]), sr = Oe(function() {
        return f ? /* @__PURE__ */ le.createElement(H.Provider, {
          value: R
        }, lr) : lr;
      }, [H, lr, R]);
      return sr;
    }
    var A = J ? le.memo(S) : S;
    if (A.WrappedComponent = G, A.displayName = S.displayName = B, D) {
      var N = le.forwardRef(function(j, F) {
        return /* @__PURE__ */ le.createElement(A, k({}, j, {
          reactReduxForwardedRef: F
        }));
      });
      return N.displayName = B, N.WrappedComponent = G, Bn(N, G);
    }
    return Bn(A, G);
  };
}
function Nn(e, r) {
  return e === r ? e !== 0 || r !== 0 || 1 / e === 1 / r : e !== e && r !== r;
}
function tt(e, r) {
  if (Nn(e, r))
    return !0;
  if (typeof e != "object" || e === null || typeof r != "object" || r === null)
    return !1;
  var t = Object.keys(e), n = Object.keys(r);
  if (t.length !== n.length)
    return !1;
  for (var a = 0; a < t.length; a++)
    if (!Object.prototype.hasOwnProperty.call(r, t[a]) || !Nn(e[t[a]], r[t[a]]))
      return !1;
  return !0;
}
function Yo(e, r) {
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
function Ho(e) {
  if (typeof e != "object" || e === null)
    return !1;
  var r = Object.getPrototypeOf(e);
  if (r === null)
    return !0;
  for (var t = r; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return r === t;
}
function Ia(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Pa(e, r, t) {
  Ho(e) || Ia(t + "() in " + r + " must return a plain object. Instead received " + e + ".");
}
function Lt(e) {
  return function(t, n) {
    var a = e(t, n);
    function i() {
      return a;
    }
    return i.dependsOnOwnProps = !1, i;
  };
}
function Ln(e) {
  return e.dependsOnOwnProps !== null && e.dependsOnOwnProps !== void 0 ? Boolean(e.dependsOnOwnProps) : e.length !== 1;
}
function Ta(e, r) {
  return function(n, a) {
    var i = a.displayName, o = function(s, d) {
      return o.dependsOnOwnProps ? o.mapToProps(s, d) : o.mapToProps(s);
    };
    return o.dependsOnOwnProps = !0, o.mapToProps = function(s, d) {
      o.mapToProps = e, o.dependsOnOwnProps = Ln(e);
      var f = o(s, d);
      return typeof f == "function" && (o.mapToProps = f, o.dependsOnOwnProps = Ln(f), f = o(s, d)), Pa(f, i, r), f;
    }, o;
  };
}
function Vo(e) {
  return typeof e == "function" ? Ta(e, "mapDispatchToProps") : void 0;
}
function _o(e) {
  return e ? void 0 : Lt(function(r) {
    return {
      dispatch: r
    };
  });
}
function qo(e) {
  return e && typeof e == "object" ? Lt(function(r) {
    return Yo(e, r);
  }) : void 0;
}
const zo = [Vo, _o, qo];
function Ko(e) {
  return typeof e == "function" ? Ta(e, "mapStateToProps") : void 0;
}
function Xo(e) {
  return e ? void 0 : Lt(function() {
    return {};
  });
}
const Jo = [Ko, Xo];
function Zo(e, r, t) {
  return k({}, t, e, r);
}
function Qo(e) {
  return function(t, n) {
    var a = n.displayName, i = n.pure, o = n.areMergedPropsEqual, l = !1, s;
    return function(f, u, c) {
      var p = e(f, u, c);
      return l ? (!i || !o(p, s)) && (s = p) : (l = !0, s = p, Pa(s, a, "mergeProps")), s;
    };
  };
}
function el(e) {
  return typeof e == "function" ? Qo(e) : void 0;
}
function rl(e) {
  return e ? void 0 : function() {
    return Zo;
  };
}
const tl = [el, rl];
function nt(e, r, t) {
  if (e)
    (r === "mapStateToProps" || r === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Ia("The selector for " + r + " of " + t + " did not specify a value for dependsOnOwnProps."));
  else
    throw new Error("Unexpected value for " + r + " in " + t + ".");
}
function nl(e, r, t, n) {
  nt(e, "mapStateToProps", n), nt(r, "mapDispatchToProps", n), nt(t, "mergeProps", n);
}
var al = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function il(e, r, t, n) {
  return function(i, o) {
    return t(e(i, o), r(n, o), o);
  };
}
function ol(e, r, t, n, a) {
  var i = a.areStatesEqual, o = a.areOwnPropsEqual, l = a.areStatePropsEqual, s = !1, d, f, u, c, p;
  function g(I, y) {
    return d = I, f = y, u = e(d, f), c = r(n, f), p = t(u, c, f), s = !0, p;
  }
  function b() {
    return u = e(d, f), r.dependsOnOwnProps && (c = r(n, f)), p = t(u, c, f), p;
  }
  function D() {
    return e.dependsOnOwnProps && (u = e(d, f)), r.dependsOnOwnProps && (c = r(n, f)), p = t(u, c, f), p;
  }
  function m() {
    var I = e(d, f), y = !l(I, u);
    return u = I, y && (p = t(u, c, f)), p;
  }
  function x(I, y) {
    var M = !o(y, f), O = !i(I, d, y, f);
    return d = I, f = y, M && O ? b() : M ? D() : O ? m() : p;
  }
  return function(y, M) {
    return s ? x(y, M) : g(y, M);
  };
}
function ll(e, r) {
  var t = r.initMapStateToProps, n = r.initMapDispatchToProps, a = r.initMergeProps, i = Lr(r, al), o = t(e, i), l = n(e, i), s = a(e, i);
  nl(o, l, s, i.displayName);
  var d = i.pure ? ol : il;
  return d(o, l, s, e, i);
}
var sl = ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"];
function at(e, r, t) {
  for (var n = r.length - 1; n >= 0; n--) {
    var a = r[n](e);
    if (a)
      return a;
  }
  return function(i, o) {
    throw new Error("Invalid value of type " + typeof e + " for " + t + " argument when connecting component " + o.wrappedComponentName + ".");
  };
}
function ul(e, r) {
  return e === r;
}
function cl(e) {
  var r = e === void 0 ? {} : e, t = r.connectHOC, n = t === void 0 ? $o : t, a = r.mapStateToPropsFactories, i = a === void 0 ? Jo : a, o = r.mapDispatchToPropsFactories, l = o === void 0 ? zo : o, s = r.mergePropsFactories, d = s === void 0 ? tl : s, f = r.selectorFactory, u = f === void 0 ? ll : f;
  return function(p, g, b, D) {
    D === void 0 && (D = {});
    var m = D, x = m.pure, I = x === void 0 ? !0 : x, y = m.areStatesEqual, M = y === void 0 ? ul : y, O = m.areOwnPropsEqual, G = O === void 0 ? tt : O, z = m.areStatePropsEqual, B = z === void 0 ? tt : z, V = m.areMergedPropsEqual, J = V === void 0 ? tt : V, te = Lr(m, sl), E = at(p, i, "mapStateToProps"), S = at(g, l, "mapDispatchToProps"), A = at(b, d, "mergeProps");
    return n(u, k({
      methodName: "connect",
      getDisplayName: function(T) {
        return "Connect(" + T + ")";
      },
      shouldHandleStateChanges: Boolean(p),
      initMapStateToProps: E,
      initMapDispatchToProps: S,
      initMergeProps: A,
      pure: I,
      areStatesEqual: M,
      areOwnPropsEqual: G,
      areStatePropsEqual: B,
      areMergedPropsEqual: J
    }, te));
  };
}
const Ra = /* @__PURE__ */ cl();
Co(Ki);
function dl(e, r) {
  if (e.length !== r.length)
    return !1;
  for (var t = 0; t < e.length; t++)
    if (e[t] !== r[t])
      return !1;
  return !0;
}
function Aa(e, r) {
  var t = Yr(function() {
    return {
      inputs: r,
      result: e()
    };
  })[0], n = re(!0), a = re(t), i = n.current || Boolean(r && a.current.inputs && dl(r, a.current.inputs)), o = i ? a.current : {
    inputs: r,
    result: e()
  };
  return Be(function() {
    n.current = !1, a.current = o;
  }, [o]), o.result;
}
function fl(e, r) {
  return Aa(function() {
    return e;
  }, r);
}
var K = Aa, L = fl, pl = !1, it = "Invariant failed";
function vl(e, r) {
  if (!e) {
    if (pl)
      throw new Error(it);
    var t = typeof r == "function" ? r() : r, n = t ? "".concat(it, ": ").concat(t) : it;
    throw new Error(n);
  }
}
var Ae = function(r) {
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
}, Ft = function(r, t) {
  return {
    top: r.top - t.top,
    left: r.left - t.left,
    bottom: r.bottom + t.bottom,
    right: r.right + t.right
  };
}, Fn = function(r, t) {
  return {
    top: r.top + t.top,
    left: r.left + t.left,
    bottom: r.bottom - t.bottom,
    right: r.right - t.right
  };
}, gl = function(r, t) {
  return {
    top: r.top + t.y,
    left: r.left + t.x,
    bottom: r.bottom + t.y,
    right: r.right + t.x
  };
}, ot = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Gt = function(r) {
  var t = r.borderBox, n = r.margin, a = n === void 0 ? ot : n, i = r.border, o = i === void 0 ? ot : i, l = r.padding, s = l === void 0 ? ot : l, d = Ae(Ft(t, a)), f = Ae(Fn(t, o)), u = Ae(Fn(f, s));
  return {
    marginBox: d,
    borderBox: Ae(t),
    paddingBox: f,
    contentBox: u,
    margin: a,
    border: o,
    padding: s
  };
}, Pe = function(r) {
  var t = r.slice(0, -2), n = r.slice(-2);
  if (n !== "px")
    return 0;
  var a = Number(t);
  return isNaN(a) && vl(!1, "Could not parse value [raw: " + r + ", without suffix: " + t + "]"), a;
}, ml = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, Fr = function(r, t) {
  var n = r.borderBox, a = r.border, i = r.margin, o = r.padding, l = gl(n, t);
  return Gt({
    borderBox: l,
    border: a,
    margin: i,
    padding: o
  });
}, Gr = function(r, t) {
  return t === void 0 && (t = ml()), Fr(r, t);
}, Oa = function(r, t) {
  var n = {
    top: Pe(t.marginTop),
    right: Pe(t.marginRight),
    bottom: Pe(t.marginBottom),
    left: Pe(t.marginLeft)
  }, a = {
    top: Pe(t.paddingTop),
    right: Pe(t.paddingRight),
    bottom: Pe(t.paddingBottom),
    left: Pe(t.paddingLeft)
  }, i = {
    top: Pe(t.borderTopWidth),
    right: Pe(t.borderRightWidth),
    bottom: Pe(t.borderBottomWidth),
    left: Pe(t.borderLeftWidth)
  };
  return Gt({
    borderBox: r,
    margin: n,
    padding: a,
    border: i
  });
}, Ba = function(r) {
  var t = r.getBoundingClientRect(), n = window.getComputedStyle(r);
  return Oa(t, n);
}, Gn = Number.isNaN || function(r) {
  return typeof r == "number" && r !== r;
};
function bl(e, r) {
  return !!(e === r || Gn(e) && Gn(r));
}
function hl(e, r) {
  if (e.length !== r.length)
    return !1;
  for (var t = 0; t < e.length; t++)
    if (!bl(e[t], r[t]))
      return !1;
  return !0;
}
function fe(e, r) {
  r === void 0 && (r = hl);
  var t, n = [], a, i = !1;
  function o() {
    for (var l = [], s = 0; s < arguments.length; s++)
      l[s] = arguments[s];
    return i && t === this && r(l, n) || (a = e.apply(this, l), i = !0, t = this, n = l), a;
  }
  return o;
}
var yl = function(r) {
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
const br = yl;
var Dl = /[ \t]{2,}/g, xl = /^[ \t]*/gm, Wn = function(r) {
  return r.replace(Dl, " ").replace(xl, "").trim();
}, El = function(r) {
  return Wn(`
  %creact-beautiful-dnd

  %c` + Wn(r) + `

  %c👷‍ This is a development only message. It will be removed in production builds.
`);
}, Cl = function(r) {
  return [El(r), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"];
}, wl = "__react-beautiful-dnd-disable-dev-warnings";
function Ma(e, r) {
  var t;
  typeof window < "u" && window[wl] || (t = console)[e].apply(t, Cl(r));
}
var se = Ma.bind(null, "warn"), Et = Ma.bind(null, "error");
function Ne() {
}
function Sl(e, r) {
  return k({}, e, {}, r);
}
function Te(e, r, t) {
  var n = r.map(function(a) {
    var i = Sl(t, a.options);
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
var Il = "Invariant failed";
function Wr(e) {
  this.message = e;
}
Wr.prototype.toString = function() {
  return this.message;
};
function C(e, r) {
  if (!e)
    throw new Wr(Il + ": " + (r || ""));
}
var Pl = function(e) {
  pa(r, e);
  function r() {
    for (var n, a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return n = e.call.apply(e, [this].concat(i)) || this, n.callbacks = null, n.unbind = Ne, n.onWindowError = function(l) {
      var s = n.getCallbacks();
      s.isDragging() && (s.tryAbort(), se(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      var d = l.error;
      d instanceof Wr && (l.preventDefault(), Et(d.message));
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
    this.unbind = Te(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }, t.componentDidCatch = function(a) {
    if (a instanceof Wr) {
      Et(a.message), this.setState({});
      return;
    }
    throw a;
  }, t.componentWillUnmount = function() {
    this.unbind();
  }, t.render = function() {
    return this.props.children(this.setCallbacks);
  }, r;
}(le.Component), Tl = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, kr = function(r) {
  return r + 1;
}, Rl = function(r) {
  return `
  You have lifted an item in position ` + kr(r.source.index) + `
`;
}, Na = function(r, t) {
  var n = r.droppableId === t.droppableId, a = kr(r.index), i = kr(t.index);
  return n ? `
      You have moved the item from position ` + a + `
      to position ` + i + `
    ` : `
    You have moved the item from position ` + a + `
    in list ` + r.droppableId + `
    to list ` + t.droppableId + `
    in position ` + i + `
  `;
}, La = function(r, t, n) {
  var a = t.droppableId === n.droppableId;
  return a ? `
      The item ` + r + `
      has been combined with ` + n.draggableId : `
      The item ` + r + `
      in list ` + t.droppableId + `
      has been combined with ` + n.draggableId + `
      in list ` + n.droppableId + `
    `;
}, Al = function(r) {
  var t = r.destination;
  if (t)
    return Na(r.source, t);
  var n = r.combine;
  return n ? La(r.draggableId, r.source, n) : "You are over an area that cannot be dropped on";
}, kn = function(r) {
  return `
  The item has returned to its starting position
  of ` + kr(r.index) + `
`;
}, Ol = function(r) {
  if (r.reason === "CANCEL")
    return `
      Movement cancelled.
      ` + kn(r.source) + `
    `;
  var t = r.destination, n = r.combine;
  return t ? `
      You have dropped the item.
      ` + Na(r.source, t) + `
    ` : n ? `
      You have dropped the item.
      ` + La(r.draggableId, r.source, n) + `
    ` : `
    The item has been dropped while not over a drop area.
    ` + kn(r.source) + `
  `;
}, Nr = {
  dragHandleUsageInstructions: Tl,
  onDragStart: Rl,
  onDragUpdate: Al,
  onDragEnd: Ol
}, pe = {
  x: 0,
  y: 0
}, ve = function(r, t) {
  return {
    x: r.x + t.x,
    y: r.y + t.y
  };
}, Ee = function(r, t) {
  return {
    x: r.x - t.x,
    y: r.y - t.y
  };
}, Le = function(r, t) {
  return r.x === t.x && r.y === t.y;
}, ar = function(r) {
  return {
    x: r.x !== 0 ? -r.x : 0,
    y: r.y !== 0 ? -r.y : 0
  };
}, qe = function(r, t, n) {
  var a;
  return n === void 0 && (n = 0), a = {}, a[r] = t, a[r === "x" ? "y" : "x"] = n, a;
}, hr = function(r, t) {
  return Math.sqrt(Math.pow(t.x - r.x, 2) + Math.pow(t.y - r.y, 2));
}, jn = function(r, t) {
  return Math.min.apply(Math, t.map(function(n) {
    return hr(r, n);
  }));
}, Fa = function(r) {
  return function(t) {
    return {
      x: r(t.x),
      y: r(t.y)
    };
  };
}, Bl = function(e, r) {
  var t = Ae({
    top: Math.max(r.top, e.top),
    right: Math.min(r.right, e.right),
    bottom: Math.min(r.bottom, e.bottom),
    left: Math.max(r.left, e.left)
  });
  return t.width <= 0 || t.height <= 0 ? null : t;
}, Cr = function(r, t) {
  return {
    top: r.top + t.y,
    left: r.left + t.x,
    bottom: r.bottom + t.y,
    right: r.right + t.x
  };
}, Un = function(r) {
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
}, Ml = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Nl = function(r, t) {
  return t ? Cr(r, t.scroll.diff.displacement) : r;
}, Ll = function(r, t, n) {
  if (n && n.increasedBy) {
    var a;
    return k({}, r, (a = {}, a[t.end] = r[t.end] + n.increasedBy[t.line], a));
  }
  return r;
}, Fl = function(r, t) {
  return t && t.shouldClipSubject ? Bl(t.pageMarginBox, r) : Ae(r);
}, rr = function(e) {
  var r = e.page, t = e.withPlaceholder, n = e.axis, a = e.frame, i = Nl(r.marginBox, a), o = Ll(i, n, t), l = Fl(o, a);
  return {
    page: r,
    withPlaceholder: t,
    active: l
  };
}, Wt = function(e, r) {
  e.frame || C(!1);
  var t = e.frame, n = Ee(r, t.scroll.initial), a = ar(n), i = k({}, t, {
    scroll: {
      initial: t.scroll.initial,
      current: r,
      diff: {
        value: n,
        displacement: a
      },
      max: t.scroll.max
    }
  }), o = rr({
    page: e.subject.page,
    withPlaceholder: e.subject.withPlaceholder,
    axis: e.axis,
    frame: i
  }), l = k({}, e, {
    frame: i,
    subject: o
  });
  return l;
};
function Gl(e) {
  return Number.isInteger ? Number.isInteger(e) : typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
function jr(e) {
  return Object.values ? Object.values(e) : Object.keys(e).map(function(r) {
    return e[r];
  });
}
function kt(e, r) {
  if (e.findIndex)
    return e.findIndex(r);
  for (var t = 0; t < e.length; t++)
    if (r(e[t]))
      return t;
  return -1;
}
function We(e, r) {
  if (e.find)
    return e.find(r);
  var t = kt(e, r);
  if (t !== -1)
    return e[t];
}
function Ga(e) {
  return Array.prototype.slice.call(e);
}
var Wa = fe(function(e) {
  return e.reduce(function(r, t) {
    return r[t.descriptor.id] = t, r;
  }, {});
}), ka = fe(function(e) {
  return e.reduce(function(r, t) {
    return r[t.descriptor.id] = t, r;
  }, {});
}), Hr = fe(function(e) {
  return jr(e);
}), Wl = fe(function(e) {
  return jr(e);
}), ze = fe(function(e, r) {
  var t = Wl(r).filter(function(n) {
    return e === n.descriptor.droppableId;
  }).sort(function(n, a) {
    return n.descriptor.index - a.descriptor.index;
  });
  return t;
});
function jt(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Vr(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var _r = fe(function(e, r) {
  return r.filter(function(t) {
    return t.descriptor.id !== e.descriptor.id;
  });
}), kl = function(e) {
  var r = e.isMovingForward, t = e.draggable, n = e.destination, a = e.insideDestination, i = e.previousImpact;
  if (!n.isCombineEnabled)
    return null;
  var o = jt(i);
  if (!o)
    return null;
  function l(b) {
    var D = {
      type: "COMBINE",
      combine: {
        draggableId: b,
        droppableId: n.descriptor.id
      }
    };
    return k({}, i, {
      at: D
    });
  }
  var s = i.displaced.all, d = s.length ? s[0] : null;
  if (r)
    return d ? l(d) : null;
  var f = _r(t, a);
  if (!d) {
    if (!f.length)
      return null;
    var u = f[f.length - 1];
    return l(u.descriptor.id);
  }
  var c = kt(f, function(b) {
    return b.descriptor.id === d;
  });
  c === -1 && C(!1, "Could not find displaced item in set");
  var p = c - 1;
  if (p < 0)
    return null;
  var g = f[p];
  return l(g.descriptor.id);
}, ir = function(e, r) {
  return e.descriptor.droppableId === r.descriptor.id;
}, ja = {
  point: pe,
  value: 0
}, yr = {
  invisible: {},
  visible: {},
  all: []
}, jl = {
  displaced: yr,
  displacedBy: ja,
  at: null
}, Re = function(e, r) {
  return function(t) {
    return e <= t && t <= r;
  };
}, Ua = function(e) {
  var r = Re(e.top, e.bottom), t = Re(e.left, e.right);
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
}, Ul = function(e) {
  var r = Re(e.top, e.bottom), t = Re(e.left, e.right);
  return function(n) {
    var a = r(n.top) && r(n.bottom) && t(n.left) && t(n.right);
    return a;
  };
}, Ut = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, $a = {
  direction: "horizontal",
  line: "x",
  crossAxisLine: "y",
  start: "left",
  end: "right",
  size: "width",
  crossAxisStart: "top",
  crossAxisEnd: "bottom",
  crossAxisSize: "height"
}, $l = function(e) {
  return function(r) {
    var t = Re(r.top, r.bottom), n = Re(r.left, r.right);
    return function(a) {
      return e === Ut ? t(a.top) && t(a.bottom) : n(a.left) && n(a.right);
    };
  };
}, Yl = function(r, t) {
  var n = t.frame ? t.frame.scroll.diff.displacement : pe;
  return Cr(r, n);
}, Hl = function(r, t, n) {
  return t.subject.active ? n(t.subject.active)(r) : !1;
}, Vl = function(r, t, n) {
  return n(t)(r);
}, $t = function(r) {
  var t = r.target, n = r.destination, a = r.viewport, i = r.withDroppableDisplacement, o = r.isVisibleThroughFrameFn, l = i ? Yl(t, n) : t;
  return Hl(l, n, o) && Vl(l, a, o);
}, _l = function(r) {
  return $t(k({}, r, {
    isVisibleThroughFrameFn: Ua
  }));
}, Ya = function(r) {
  return $t(k({}, r, {
    isVisibleThroughFrameFn: Ul
  }));
}, ql = function(r) {
  return $t(k({}, r, {
    isVisibleThroughFrameFn: $l(r.destination.axis)
  }));
}, zl = function(r, t, n) {
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
function Kl(e, r) {
  var t = e.page.marginBox, n = {
    top: r.point.y,
    right: 0,
    bottom: 0,
    left: r.point.x
  };
  return Ae(Ft(t, n));
}
function Dr(e) {
  var r = e.afterDragging, t = e.destination, n = e.displacedBy, a = e.viewport, i = e.forceShouldAnimate, o = e.last;
  return r.reduce(function(s, d) {
    var f = Kl(d, n), u = d.descriptor.id;
    s.all.push(u);
    var c = _l({
      target: f,
      destination: t,
      viewport: a,
      withDroppableDisplacement: !0
    });
    if (!c)
      return s.invisible[d.descriptor.id] = !0, s;
    var p = zl(u, o, i), g = {
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
function Xl(e, r) {
  if (!e.length)
    return 0;
  var t = e[e.length - 1].descriptor.index;
  return r.inHomeList ? t : t + 1;
}
function $n(e) {
  var r = e.insideDestination, t = e.inHomeList, n = e.displacedBy, a = e.destination, i = Xl(r, {
    inHomeList: t
  });
  return {
    displaced: yr,
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
function Ur(e) {
  var r = e.draggable, t = e.insideDestination, n = e.destination, a = e.viewport, i = e.displacedBy, o = e.last, l = e.index, s = e.forceShouldAnimate, d = ir(r, n);
  if (l == null)
    return $n({
      insideDestination: t,
      inHomeList: d,
      displacedBy: i,
      destination: n
    });
  var f = We(t, function(b) {
    return b.descriptor.index === l;
  });
  if (!f)
    return $n({
      insideDestination: t,
      inHomeList: d,
      displacedBy: i,
      destination: n
    });
  var u = _r(r, t), c = t.indexOf(f), p = u.slice(c), g = Dr({
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
function Ge(e, r) {
  return Boolean(r.effected[e]);
}
var Jl = function(e) {
  var r = e.isMovingForward, t = e.destination, n = e.draggables, a = e.combine, i = e.afterCritical;
  if (!t.isCombineEnabled)
    return null;
  var o = a.draggableId, l = n[o], s = l.descriptor.index, d = Ge(o, i);
  return d ? r ? s : s - 1 : r ? s + 1 : s;
}, Zl = function(e) {
  var r = e.isMovingForward, t = e.isInHomeList, n = e.insideDestination, a = e.location;
  if (!n.length)
    return null;
  var i = a.index, o = r ? i + 1 : i - 1, l = n[0].descriptor.index, s = n[n.length - 1].descriptor.index, d = t ? s : s + 1;
  return o < l || o > d ? null : o;
}, Ql = function(e) {
  var r = e.isMovingForward, t = e.isInHomeList, n = e.draggable, a = e.draggables, i = e.destination, o = e.insideDestination, l = e.previousImpact, s = e.viewport, d = e.afterCritical, f = l.at;
  if (f || C(!1, "Cannot move in direction without previous impact location"), f.type === "REORDER") {
    var u = Zl({
      isMovingForward: r,
      isInHomeList: t,
      location: f.destination,
      insideDestination: o
    });
    return u == null ? null : Ur({
      draggable: n,
      insideDestination: o,
      destination: i,
      viewport: s,
      last: l.displaced,
      displacedBy: l.displacedBy,
      index: u
    });
  }
  var c = Jl({
    isMovingForward: r,
    destination: i,
    displaced: l.displaced,
    draggables: a,
    combine: f.combine,
    afterCritical: d
  });
  return c == null ? null : Ur({
    draggable: n,
    insideDestination: o,
    destination: i,
    viewport: s,
    last: l.displaced,
    displacedBy: l.displacedBy,
    index: c
  });
}, es = function(e) {
  var r = e.displaced, t = e.afterCritical, n = e.combineWith, a = e.displacedBy, i = Boolean(r.visible[n] || r.invisible[n]);
  return Ge(n, t) ? i ? pe : ar(a.point) : i ? a.point : pe;
}, rs = function(e) {
  var r = e.afterCritical, t = e.impact, n = e.draggables, a = Vr(t);
  a || C(!1);
  var i = a.draggableId, o = n[i].page.borderBox.center, l = es({
    displaced: t.displaced,
    afterCritical: r,
    combineWith: i,
    displacedBy: t.displacedBy
  });
  return ve(o, l);
}, Ha = function(r, t) {
  return t.margin[r.start] + t.borderBox[r.size] / 2;
}, ts = function(r, t) {
  return t.margin[r.end] + t.borderBox[r.size] / 2;
}, Yt = function(r, t, n) {
  return t[r.crossAxisStart] + n.margin[r.crossAxisStart] + n.borderBox[r.crossAxisSize] / 2;
}, Yn = function(r) {
  var t = r.axis, n = r.moveRelativeTo, a = r.isMoving;
  return qe(t.line, n.marginBox[t.end] + Ha(t, a), Yt(t, n.marginBox, a));
}, Hn = function(r) {
  var t = r.axis, n = r.moveRelativeTo, a = r.isMoving;
  return qe(t.line, n.marginBox[t.start] - ts(t, a), Yt(t, n.marginBox, a));
}, ns = function(r) {
  var t = r.axis, n = r.moveInto, a = r.isMoving;
  return qe(t.line, n.contentBox[t.start] + Ha(t, a), Yt(t, n.contentBox, a));
}, as = function(e) {
  var r = e.impact, t = e.draggable, n = e.draggables, a = e.droppable, i = e.afterCritical, o = ze(a.descriptor.id, n), l = t.page, s = a.axis;
  if (!o.length)
    return ns({
      axis: s,
      moveInto: a.page,
      isMoving: l
    });
  var d = r.displaced, f = r.displacedBy, u = d.all[0];
  if (u) {
    var c = n[u];
    if (Ge(u, i))
      return Hn({
        axis: s,
        moveRelativeTo: c.page,
        isMoving: l
      });
    var p = Fr(c.page, f.point);
    return Hn({
      axis: s,
      moveRelativeTo: p,
      isMoving: l
    });
  }
  var g = o[o.length - 1];
  if (g.descriptor.id === t.descriptor.id)
    return l.borderBox.center;
  if (Ge(g.descriptor.id, i)) {
    var b = Fr(g.page, ar(i.displacedBy.point));
    return Yn({
      axis: s,
      moveRelativeTo: b,
      isMoving: l
    });
  }
  return Yn({
    axis: s,
    moveRelativeTo: g.page,
    isMoving: l
  });
}, Ct = function(e, r) {
  var t = e.frame;
  return t ? ve(r, t.scroll.diff.displacement) : r;
}, is = function(r) {
  var t = r.impact, n = r.draggable, a = r.droppable, i = r.draggables, o = r.afterCritical, l = n.page.borderBox.center, s = t.at;
  return !a || !s ? l : s.type === "REORDER" ? as({
    impact: t,
    draggable: n,
    draggables: i,
    droppable: a,
    afterCritical: o
  }) : rs({
    impact: t,
    draggables: i,
    afterCritical: o
  });
}, qr = function(e) {
  var r = is(e), t = e.droppable, n = t ? Ct(t, r) : r;
  return n;
}, Va = function(e, r) {
  var t = Ee(r, e.scroll.initial), n = ar(t), a = Ae({
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
function Vn(e, r) {
  return e.map(function(t) {
    return r[t];
  });
}
function os(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t].visible[e];
    if (n)
      return n;
  }
  return null;
}
var ls = function(e) {
  var r = e.impact, t = e.viewport, n = e.destination, a = e.draggables, i = e.maxScrollChange, o = Va(t, ve(t.scroll.current, i)), l = n.frame ? Wt(n, ve(n.frame.scroll.current, i)) : n, s = r.displaced, d = Dr({
    afterDragging: Vn(s.all, a),
    destination: n,
    displacedBy: r.displacedBy,
    viewport: o.frame,
    last: s,
    forceShouldAnimate: !1
  }), f = Dr({
    afterDragging: Vn(s.all, a),
    destination: l,
    displacedBy: r.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), u = {}, c = {}, p = [s, d, f];
  s.all.forEach(function(b) {
    var D = os(b, p);
    if (D) {
      c[b] = D;
      return;
    }
    u[b] = !0;
  });
  var g = k({}, r, {
    displaced: {
      all: s.all,
      invisible: u,
      visible: c
    }
  });
  return g;
}, ss = function(e, r) {
  return ve(e.scroll.diff.displacement, r);
}, Ht = function(e) {
  var r = e.pageBorderBoxCenter, t = e.draggable, n = e.viewport, a = ss(n, r), i = Ee(a, t.page.borderBox.center);
  return ve(t.client.borderBox.center, i);
}, _a = function(e) {
  var r = e.draggable, t = e.destination, n = e.newPageBorderBoxCenter, a = e.viewport, i = e.withDroppableDisplacement, o = e.onlyOnMainAxis, l = o === void 0 ? !1 : o, s = Ee(n, r.page.borderBox.center), d = Cr(r.page.borderBox, s), f = {
    target: d,
    destination: t,
    withDroppableDisplacement: i,
    viewport: a
  };
  return l ? ql(f) : Ya(f);
}, us = function(e) {
  var r = e.isMovingForward, t = e.draggable, n = e.destination, a = e.draggables, i = e.previousImpact, o = e.viewport, l = e.previousPageBorderBoxCenter, s = e.previousClientSelection, d = e.afterCritical;
  if (!n.isEnabled)
    return null;
  var f = ze(n.descriptor.id, a), u = ir(t, n), c = kl({
    isMovingForward: r,
    draggable: t,
    destination: n,
    insideDestination: f,
    previousImpact: i
  }) || Ql({
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
  var p = qr({
    impact: c,
    draggable: t,
    droppable: n,
    draggables: a,
    afterCritical: d
  }), g = _a({
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: p,
    viewport: o.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  });
  if (g) {
    var b = Ht({
      pageBorderBoxCenter: p,
      draggable: t,
      viewport: o
    });
    return {
      clientSelection: b,
      impact: c,
      scrollJumpRequest: null
    };
  }
  var D = Ee(p, l), m = ls({
    impact: c,
    viewport: o,
    destination: n,
    draggables: a,
    maxScrollChange: D
  });
  return {
    clientSelection: s,
    impact: m,
    scrollJumpRequest: D
  };
}, xe = function(r) {
  var t = r.subject.active;
  return t || C(!1, "Cannot get clipped area from droppable"), t;
}, cs = function(e) {
  var r = e.isMovingForward, t = e.pageBorderBoxCenter, n = e.source, a = e.droppables, i = e.viewport, o = n.subject.active;
  if (!o)
    return null;
  var l = n.axis, s = Re(o[l.start], o[l.end]), d = Hr(a).filter(function(u) {
    return u !== n;
  }).filter(function(u) {
    return u.isEnabled;
  }).filter(function(u) {
    return Boolean(u.subject.active);
  }).filter(function(u) {
    return Ua(i.frame)(xe(u));
  }).filter(function(u) {
    var c = xe(u);
    return r ? o[l.crossAxisEnd] < c[l.crossAxisEnd] : c[l.crossAxisStart] < o[l.crossAxisStart];
  }).filter(function(u) {
    var c = xe(u), p = Re(c[l.start], c[l.end]);
    return s(c[l.start]) || s(c[l.end]) || p(o[l.start]) || p(o[l.end]);
  }).sort(function(u, c) {
    var p = xe(u)[l.crossAxisStart], g = xe(c)[l.crossAxisStart];
    return r ? p - g : g - p;
  }).filter(function(u, c, p) {
    return xe(u)[l.crossAxisStart] === xe(p[0])[l.crossAxisStart];
  });
  if (!d.length)
    return null;
  if (d.length === 1)
    return d[0];
  var f = d.filter(function(u) {
    var c = Re(xe(u)[l.start], xe(u)[l.end]);
    return c(t[l.line]);
  });
  return f.length === 1 ? f[0] : f.length > 1 ? f.sort(function(u, c) {
    return xe(u)[l.start] - xe(c)[l.start];
  })[0] : d.sort(function(u, c) {
    var p = jn(t, Un(xe(u))), g = jn(t, Un(xe(c)));
    return p !== g ? p - g : xe(u)[l.start] - xe(c)[l.start];
  })[0];
}, _n = function(r, t) {
  var n = r.page.borderBox.center;
  return Ge(r.descriptor.id, t) ? Ee(n, t.displacedBy.point) : n;
}, ds = function(r, t) {
  var n = r.page.borderBox;
  return Ge(r.descriptor.id, t) ? Cr(n, ar(t.displacedBy.point)) : n;
}, fs = function(e) {
  var r = e.pageBorderBoxCenter, t = e.viewport, n = e.destination, a = e.insideDestination, i = e.afterCritical, o = a.filter(function(l) {
    return Ya({
      target: ds(l, i),
      destination: n,
      viewport: t.frame,
      withDroppableDisplacement: !0
    });
  }).sort(function(l, s) {
    var d = hr(r, Ct(n, _n(l, i))), f = hr(r, Ct(n, _n(s, i)));
    return d < f ? -1 : f < d ? 1 : l.descriptor.index - s.descriptor.index;
  });
  return o[0] || null;
}, wr = fe(function(r, t) {
  var n = t[r.line];
  return {
    value: n,
    point: qe(r.line, n)
  };
}), ps = function(r, t, n) {
  var a = r.axis;
  if (r.descriptor.mode === "virtual")
    return qe(a.line, t[a.line]);
  var i = r.subject.page.contentBox[a.size], o = ze(r.descriptor.id, n), l = o.reduce(function(f, u) {
    return f + u.client.marginBox[a.size];
  }, 0), s = l + t[a.line], d = s - i;
  return d <= 0 ? null : qe(a.line, d);
}, qa = function(r, t) {
  return k({}, r, {
    scroll: k({}, r.scroll, {
      max: t
    })
  });
}, za = function(r, t, n) {
  var a = r.frame;
  ir(t, r) && C(!1, "Should not add placeholder space to home list"), r.subject.withPlaceholder && C(!1, "Cannot add placeholder size to a subject when it already has one");
  var i = wr(r.axis, t.displaceBy).point, o = ps(r, i, n), l = {
    placeholderSize: i,
    increasedBy: o,
    oldFrameMaxScroll: r.frame ? r.frame.scroll.max : null
  };
  if (!a) {
    var s = rr({
      page: r.subject.page,
      withPlaceholder: l,
      axis: r.axis,
      frame: r.frame
    });
    return k({}, r, {
      subject: s
    });
  }
  var d = o ? ve(a.scroll.max, o) : a.scroll.max, f = qa(a, d), u = rr({
    page: r.subject.page,
    withPlaceholder: l,
    axis: r.axis,
    frame: f
  });
  return k({}, r, {
    subject: u,
    frame: f
  });
}, vs = function(r) {
  var t = r.subject.withPlaceholder;
  t || C(!1, "Cannot remove placeholder form subject when there was none");
  var n = r.frame;
  if (!n) {
    var a = rr({
      page: r.subject.page,
      axis: r.axis,
      frame: null,
      withPlaceholder: null
    });
    return k({}, r, {
      subject: a
    });
  }
  var i = t.oldFrameMaxScroll;
  i || C(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder");
  var o = qa(n, i), l = rr({
    page: r.subject.page,
    axis: r.axis,
    frame: o,
    withPlaceholder: null
  });
  return k({}, r, {
    subject: l,
    frame: o
  });
}, gs = function(e) {
  var r = e.previousPageBorderBoxCenter, t = e.moveRelativeTo, n = e.insideDestination, a = e.draggable, i = e.draggables, o = e.destination, l = e.viewport, s = e.afterCritical;
  if (!t) {
    if (n.length)
      return null;
    var d = {
      displaced: yr,
      displacedBy: ja,
      at: {
        type: "REORDER",
        destination: {
          droppableId: o.descriptor.id,
          index: 0
        }
      }
    }, f = qr({
      impact: d,
      draggable: a,
      droppable: o,
      draggables: i,
      afterCritical: s
    }), u = ir(a, o) ? o : za(o, a, i), c = _a({
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
    var D = t.descriptor.index;
    return t.descriptor.id === a.descriptor.id || p ? D : D + 1;
  }(), b = wr(o.axis, a.displaceBy);
  return Ur({
    draggable: a,
    insideDestination: n,
    destination: o,
    viewport: l,
    displacedBy: b,
    last: yr,
    index: g
  });
}, ms = function(e) {
  var r = e.isMovingForward, t = e.previousPageBorderBoxCenter, n = e.draggable, a = e.isOver, i = e.draggables, o = e.droppables, l = e.viewport, s = e.afterCritical, d = cs({
    isMovingForward: r,
    pageBorderBoxCenter: t,
    source: a,
    droppables: o,
    viewport: l
  });
  if (!d)
    return null;
  var f = ze(d.descriptor.id, i), u = fs({
    pageBorderBoxCenter: t,
    viewport: l,
    destination: d,
    insideDestination: f,
    afterCritical: s
  }), c = gs({
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
  var p = qr({
    impact: c,
    draggable: n,
    droppable: d,
    draggables: i,
    afterCritical: s
  }), g = Ht({
    pageBorderBoxCenter: p,
    draggable: n,
    viewport: l
  });
  return {
    clientSelection: g,
    impact: c,
    scrollJumpRequest: null
  };
}, Ce = function(e) {
  var r = e.at;
  return r ? r.type === "REORDER" ? r.destination.droppableId : r.combine.droppableId : null;
}, bs = function(r, t) {
  var n = Ce(r);
  return n ? t[n] : null;
}, hs = function(e) {
  var r = e.state, t = e.type, n = bs(r.impact, r.dimensions.droppables), a = Boolean(n), i = r.dimensions.droppables[r.critical.droppable.id], o = n || i, l = o.axis.direction, s = l === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || l === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (s && !a)
    return null;
  var d = t === "MOVE_DOWN" || t === "MOVE_RIGHT", f = r.dimensions.draggables[r.critical.draggable.id], u = r.current.page.borderBoxCenter, c = r.dimensions, p = c.draggables, g = c.droppables;
  return s ? us({
    isMovingForward: d,
    previousPageBorderBoxCenter: u,
    draggable: f,
    destination: o,
    draggables: p,
    viewport: r.viewport,
    previousClientSelection: r.current.client.selection,
    previousImpact: r.impact,
    afterCritical: r.afterCritical
  }) : ms({
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
function _e(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function Ka(e) {
  var r = Re(e.top, e.bottom), t = Re(e.left, e.right);
  return function(a) {
    return r(a.y) && t(a.x);
  };
}
function ys(e, r) {
  return e.left < r.right && e.right > r.left && e.top < r.bottom && e.bottom > r.top;
}
function Ds(e) {
  var r = e.pageBorderBox, t = e.draggable, n = e.candidates, a = t.page.borderBox.center, i = n.map(function(o) {
    var l = o.axis, s = qe(o.axis.line, r.center[l.line], o.page.borderBox.center[l.crossAxisLine]);
    return {
      id: o.descriptor.id,
      distance: hr(a, s)
    };
  }).sort(function(o, l) {
    return l.distance - o.distance;
  });
  return i[0] ? i[0].id : null;
}
function xs(e) {
  var r = e.pageBorderBox, t = e.draggable, n = e.droppables, a = Hr(n).filter(function(i) {
    if (!i.isEnabled)
      return !1;
    var o = i.subject.active;
    if (!o || !ys(r, o))
      return !1;
    if (Ka(o)(r.center))
      return !0;
    var l = i.axis, s = o.center[l.crossAxisLine], d = r[l.crossAxisStart], f = r[l.crossAxisEnd], u = Re(o[l.crossAxisStart], o[l.crossAxisEnd]), c = u(d), p = u(f);
    return !c && !p ? !0 : c ? d < s : f > s;
  });
  return a.length ? a.length === 1 ? a[0].descriptor.id : Ds({
    pageBorderBox: r,
    draggable: t,
    candidates: a
  }) : null;
}
var Xa = function(r, t) {
  return Ae(Cr(r, t));
}, Es = function(e, r) {
  var t = e.frame;
  return t ? Xa(r, t.scroll.diff.value) : r;
};
function Ja(e) {
  var r = e.displaced, t = e.id;
  return Boolean(r.visible[t] || r.invisible[t]);
}
function Cs(e) {
  var r = e.draggable, t = e.closest, n = e.inHomeList;
  return t ? n && t.descriptor.index > r.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var ws = function(e) {
  var r = e.pageBorderBoxWithDroppableScroll, t = e.draggable, n = e.destination, a = e.insideDestination, i = e.last, o = e.viewport, l = e.afterCritical, s = n.axis, d = wr(n.axis, t.displaceBy), f = d.value, u = r[s.start], c = r[s.end], p = _r(t, a), g = We(p, function(D) {
    var m = D.descriptor.id, x = D.page.borderBox.center[s.line], I = Ge(m, l), y = Ja({
      displaced: i,
      id: m
    });
    return I ? y ? c <= x : u < x - f : y ? c <= x + f : u < x;
  }), b = Cs({
    draggable: t,
    closest: g,
    inHomeList: ir(t, n)
  });
  return Ur({
    draggable: t,
    insideDestination: a,
    destination: n,
    viewport: o,
    last: i,
    displacedBy: d,
    index: b
  });
}, Ss = 4, Is = function(e) {
  var r = e.draggable, t = e.pageBorderBoxWithDroppableScroll, n = e.previousImpact, a = e.destination, i = e.insideDestination, o = e.afterCritical;
  if (!a.isCombineEnabled)
    return null;
  var l = a.axis, s = wr(a.axis, r.displaceBy), d = s.value, f = t[l.start], u = t[l.end], c = _r(r, i), p = We(c, function(b) {
    var D = b.descriptor.id, m = b.page.borderBox, x = m[l.size], I = x / Ss, y = Ge(D, o), M = Ja({
      displaced: n.displaced,
      id: D
    });
    return y ? M ? u > m[l.start] + I && u < m[l.end] - I : f > m[l.start] - d + I && f < m[l.end] - d - I : M ? u > m[l.start] + d + I && u < m[l.end] + d - I : f > m[l.start] + I && f < m[l.end] - I;
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
}, Za = function(e) {
  var r = e.pageOffset, t = e.draggable, n = e.draggables, a = e.droppables, i = e.previousImpact, o = e.viewport, l = e.afterCritical, s = Xa(t.page.borderBox, r), d = xs({
    pageBorderBox: s,
    draggable: t,
    droppables: a
  });
  if (!d)
    return jl;
  var f = a[d], u = ze(f.descriptor.id, n), c = Es(f, s);
  return Is({
    pageBorderBoxWithDroppableScroll: c,
    draggable: t,
    previousImpact: i,
    destination: f,
    insideDestination: u,
    afterCritical: l
  }) || ws({
    pageBorderBoxWithDroppableScroll: c,
    draggable: t,
    destination: f,
    insideDestination: u,
    last: i.displaced,
    viewport: o,
    afterCritical: l
  });
}, Vt = function(e, r) {
  var t;
  return k({}, e, (t = {}, t[r.descriptor.id] = r, t));
}, Ps = function(r) {
  var t = r.previousImpact, n = r.impact, a = r.droppables, i = Ce(t), o = Ce(n);
  if (!i || i === o)
    return a;
  var l = a[i];
  if (!l.subject.withPlaceholder)
    return a;
  var s = vs(l);
  return Vt(a, s);
}, Ts = function(e) {
  var r = e.draggable, t = e.draggables, n = e.droppables, a = e.previousImpact, i = e.impact, o = Ps({
    previousImpact: a,
    impact: i,
    droppables: n
  }), l = Ce(i);
  if (!l)
    return o;
  var s = n[l];
  if (ir(r, s) || s.subject.withPlaceholder)
    return o;
  var d = za(s, r, t);
  return Vt(o, d);
}, vr = function(e) {
  var r = e.state, t = e.clientSelection, n = e.dimensions, a = e.viewport, i = e.impact, o = e.scrollJumpRequest, l = a || r.viewport, s = n || r.dimensions, d = t || r.current.client.selection, f = Ee(d, r.initial.client.selection), u = {
    offset: f,
    selection: d,
    borderBoxCenter: ve(r.initial.client.borderBoxCenter, f)
  }, c = {
    selection: ve(u.selection, l.scroll.current),
    borderBoxCenter: ve(u.borderBoxCenter, l.scroll.current),
    offset: ve(u.offset, l.scroll.diff.value)
  }, p = {
    client: u,
    page: c
  };
  if (r.phase === "COLLECTING")
    return k({
      phase: "COLLECTING"
    }, r, {
      dimensions: s,
      viewport: l,
      current: p
    });
  var g = s.draggables[r.critical.draggable.id], b = i || Za({
    pageOffset: c.offset,
    draggable: g,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: r.impact,
    viewport: l,
    afterCritical: r.afterCritical
  }), D = Ts({
    draggable: g,
    impact: b,
    previousImpact: r.impact,
    draggables: s.draggables,
    droppables: s.droppables
  }), m = k({}, r, {
    current: p,
    dimensions: {
      draggables: s.draggables,
      droppables: D
    },
    impact: b,
    viewport: l,
    scrollJumpRequest: o || null,
    forceShouldAnimate: o ? !1 : null
  });
  return m;
};
function Rs(e, r) {
  return e.map(function(t) {
    return r[t];
  });
}
var Qa = function(e) {
  var r = e.impact, t = e.viewport, n = e.draggables, a = e.destination, i = e.forceShouldAnimate, o = r.displaced, l = Rs(o.all, n), s = Dr({
    afterDragging: l,
    destination: a,
    displacedBy: r.displacedBy,
    viewport: t.frame,
    forceShouldAnimate: i,
    last: o
  });
  return k({}, r, {
    displaced: s
  });
}, ei = function(e) {
  var r = e.impact, t = e.draggable, n = e.droppable, a = e.draggables, i = e.viewport, o = e.afterCritical, l = qr({
    impact: r,
    draggable: t,
    draggables: a,
    droppable: n,
    afterCritical: o
  });
  return Ht({
    pageBorderBoxCenter: l,
    draggable: t,
    viewport: i
  });
}, ri = function(e) {
  var r = e.state, t = e.dimensions, n = e.viewport;
  r.movementMode !== "SNAP" && C(!1);
  var a = r.impact, i = n || r.viewport, o = t || r.dimensions, l = o.draggables, s = o.droppables, d = l[r.critical.draggable.id], f = Ce(a);
  f || C(!1, "Must be over a destination in SNAP movement mode");
  var u = s[f], c = Qa({
    impact: a,
    viewport: i,
    destination: u,
    draggables: l
  }), p = ei({
    impact: c,
    draggable: d,
    droppable: u,
    draggables: l,
    viewport: i,
    afterCritical: r.afterCritical
  });
  return vr({
    impact: c,
    clientSelection: p,
    state: r,
    dimensions: o,
    viewport: i
  });
}, As = function(e) {
  return {
    index: e.index,
    droppableId: e.droppableId
  };
}, ti = function(e) {
  var r = e.draggable, t = e.home, n = e.draggables, a = e.viewport, i = wr(t.axis, r.displaceBy), o = ze(t.descriptor.id, n), l = o.indexOf(r);
  l === -1 && C(!1, "Expected draggable to be inside home list");
  var s = o.slice(l + 1), d = s.reduce(function(p, g) {
    return p[g.descriptor.id] = !0, p;
  }, {}), f = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: i,
    effected: d
  }, u = Dr({
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
      destination: As(r.descriptor)
    }
  };
  return {
    impact: c,
    afterCritical: f
  };
}, Os = function(e, r) {
  return {
    draggables: e.draggables,
    droppables: Vt(e.droppables, r)
  };
}, Bs = function(e) {
  var r = e.draggable, t = e.offset, n = e.initialWindowScroll, a = Fr(r.client, t), i = Gr(a, n), o = k({}, r, {
    placeholder: k({}, r.placeholder, {
      client: a
    }),
    client: a,
    page: i
  });
  return o;
}, Ms = function(e) {
  var r = e.frame;
  return r || C(!1, "Expected Droppable to have a frame"), r;
}, Ns = function(e) {
  var r = e.additions, t = e.updatedDroppables, n = e.viewport, a = n.scroll.diff.value;
  return r.map(function(i) {
    var o = i.descriptor.droppableId, l = t[o], s = Ms(l), d = s.scroll.diff.value, f = ve(a, d), u = Bs({
      draggable: i,
      offset: f,
      initialWindowScroll: n.scroll.initial
    });
    return u;
  });
}, Ls = function(e) {
  var r = e.state, t = e.published, n = t.modified.map(function(I) {
    var y = r.dimensions.droppables[I.droppableId], M = Wt(y, I.scroll);
    return M;
  }), a = k({}, r.dimensions.droppables, {}, Wa(n)), i = ka(Ns({
    additions: t.additions,
    updatedDroppables: a,
    viewport: r.viewport
  })), o = k({}, r.dimensions.draggables, {}, i);
  t.removals.forEach(function(I) {
    delete o[I];
  });
  var l = {
    droppables: a,
    draggables: o
  }, s = Ce(r.impact), d = s ? l.droppables[s] : null, f = l.draggables[r.critical.draggable.id], u = l.droppables[r.critical.droppable.id], c = ti({
    draggable: f,
    home: u,
    draggables: o,
    viewport: r.viewport
  }), p = c.impact, g = c.afterCritical, b = d && d.isCombineEnabled ? r.impact : p, D = Za({
    pageOffset: r.current.page.offset,
    draggable: l.draggables[r.critical.draggable.id],
    draggables: l.draggables,
    droppables: l.droppables,
    previousImpact: b,
    viewport: r.viewport,
    afterCritical: g
  }), m = k({
    phase: "DRAGGING"
  }, r, {
    phase: "DRAGGING",
    impact: D,
    onLiftImpact: p,
    dimensions: l,
    afterCritical: g,
    forceShouldAnimate: !1
  });
  if (r.phase === "COLLECTING")
    return m;
  var x = k({
    phase: "DROP_PENDING"
  }, m, {
    phase: "DROP_PENDING",
    reason: r.reason,
    isWaiting: !1
  });
  return x;
}, wt = function(r) {
  return r.movementMode === "SNAP";
}, lt = function(r, t, n) {
  var a = Os(r.dimensions, t);
  return !wt(r) || n ? vr({
    state: r,
    dimensions: a
  }) : ri({
    state: r,
    dimensions: a
  });
};
function st(e) {
  return e.isDragging && e.movementMode === "SNAP" ? k({
    phase: "DRAGGING"
  }, e, {
    scrollJumpRequest: null
  }) : e;
}
var qn = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
}, Fs = function(e, r) {
  if (e === void 0 && (e = qn), r.type === "FLUSH")
    return k({}, qn, {
      shouldFlush: !0
    });
  if (r.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && C(!1, "INITIAL_PUBLISH must come after a IDLE phase");
    var t = r.payload, n = t.critical, a = t.clientSelection, i = t.viewport, o = t.dimensions, l = t.movementMode, s = o.draggables[n.draggable.id], d = o.droppables[n.droppable.id], f = {
      selection: a,
      borderBoxCenter: s.client.borderBox.center,
      offset: pe
    }, u = {
      client: f,
      page: {
        selection: ve(f.selection, i.scroll.initial),
        borderBoxCenter: ve(f.selection, i.scroll.initial),
        offset: ve(f.selection, i.scroll.diff.value)
      }
    }, c = Hr(o.droppables).every(function(R) {
      return !R.isFixedOnPage;
    }), p = ti({
      draggable: s,
      home: d,
      draggables: o.draggables,
      viewport: i
    }), g = p.impact, b = p.afterCritical, D = {
      phase: "DRAGGING",
      isDragging: !0,
      critical: n,
      movementMode: l,
      dimensions: o,
      initial: u,
      current: u,
      isWindowScrollAllowed: c,
      impact: g,
      afterCritical: b,
      onLiftImpact: g,
      viewport: i,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
    return D;
  }
  if (r.type === "COLLECTION_STARTING") {
    if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING")
      return e;
    e.phase !== "DRAGGING" && C(!1, "Collection cannot start from phase " + e.phase);
    var m = k({
      phase: "COLLECTING"
    }, e, {
      phase: "COLLECTING"
    });
    return m;
  }
  if (r.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || C(!1, "Unexpected " + r.type + " received in phase " + e.phase), Ls({
      state: e,
      published: r.payload
    });
  if (r.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    _e(e) || C(!1, r.type + " not permitted in phase " + e.phase);
    var x = r.payload.client;
    return Le(x, e.current.client.selection) ? e : vr({
      state: e,
      clientSelection: x,
      impact: wt(e) ? e.impact : null
    });
  }
  if (r.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return st(e);
    _e(e) || C(!1, r.type + " not permitted in phase " + e.phase);
    var I = r.payload, y = I.id, M = I.newScroll, O = e.dimensions.droppables[y];
    if (!O)
      return e;
    var G = Wt(O, M);
    return lt(e, G, !1);
  }
  if (r.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    _e(e) || C(!1, "Attempting to move in an unsupported phase " + e.phase);
    var z = r.payload, B = z.id, V = z.isEnabled, J = e.dimensions.droppables[B];
    J || C(!1, "Cannot find Droppable[id: " + B + "] to toggle its enabled state"), J.isEnabled === V && C(!1, "Trying to set droppable isEnabled to " + String(V) + `
      but it is already ` + String(J.isEnabled));
    var te = k({}, J, {
      isEnabled: V
    });
    return lt(e, te, !0);
  }
  if (r.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    _e(e) || C(!1, "Attempting to move in an unsupported phase " + e.phase);
    var E = r.payload, S = E.id, A = E.isCombineEnabled, N = e.dimensions.droppables[S];
    N || C(!1, "Cannot find Droppable[id: " + S + "] to toggle its isCombineEnabled state"), N.isCombineEnabled === A && C(!1, "Trying to set droppable isCombineEnabled to " + String(A) + `
      but it is already ` + String(N.isCombineEnabled));
    var T = k({}, N, {
      isCombineEnabled: A
    });
    return lt(e, T, !0);
  }
  if (r.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    _e(e) || C(!1, "Cannot move by window in phase " + e.phase), e.isWindowScrollAllowed || C(!1, "Window scrolling is currently not supported for fixed lists");
    var j = r.payload.newScroll;
    if (Le(e.viewport.scroll.current, j))
      return st(e);
    var F = Va(e.viewport, j);
    return wt(e) ? ri({
      state: e,
      viewport: F
    }) : vr({
      state: e,
      viewport: F
    });
  }
  if (r.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!_e(e))
      return e;
    var W = r.payload.maxScroll;
    if (Le(W, e.viewport.scroll.max))
      return e;
    var $ = k({}, e.viewport, {
      scroll: k({}, e.viewport.scroll, {
        max: W
      })
    });
    return k({
      phase: "DRAGGING"
    }, e, {
      viewport: $
    });
  }
  if (r.type === "MOVE_UP" || r.type === "MOVE_DOWN" || r.type === "MOVE_LEFT" || r.type === "MOVE_RIGHT") {
    if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING")
      return e;
    e.phase !== "DRAGGING" && C(!1, r.type + " received while not in DRAGGING phase");
    var H = hs({
      state: e,
      type: r.type
    });
    return H ? vr({
      state: e,
      impact: H.impact,
      clientSelection: H.clientSelection,
      scrollJumpRequest: H.scrollJumpRequest
    }) : e;
  }
  if (r.type === "DROP_PENDING") {
    var U = r.payload.reason;
    e.phase !== "COLLECTING" && C(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase");
    var Z = k({
      phase: "DROP_PENDING"
    }, e, {
      phase: "DROP_PENDING",
      isWaiting: !0,
      reason: U
    });
    return Z;
  }
  if (r.type === "DROP_ANIMATE") {
    var ne = r.payload, ae = ne.completed, be = ne.dropDuration, he = ne.newHomeClientOffset;
    e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || C(!1, "Cannot animate drop from phase " + e.phase);
    var ge = {
      phase: "DROP_ANIMATING",
      completed: ae,
      dropDuration: be,
      newHomeClientOffset: he,
      dimensions: e.dimensions
    };
    return ge;
  }
  if (r.type === "DROP_COMPLETE") {
    var ye = r.payload.completed;
    return {
      phase: "IDLE",
      completed: ye,
      shouldFlush: !1
    };
  }
  return e;
}, Gs = function(r) {
  return {
    type: "BEFORE_INITIAL_CAPTURE",
    payload: r
  };
}, Ws = function(r) {
  return {
    type: "LIFT",
    payload: r
  };
}, ks = function(r) {
  return {
    type: "INITIAL_PUBLISH",
    payload: r
  };
}, js = function(r) {
  return {
    type: "PUBLISH_WHILE_DRAGGING",
    payload: r
  };
}, Us = function() {
  return {
    type: "COLLECTION_STARTING",
    payload: null
  };
}, $s = function(r) {
  return {
    type: "UPDATE_DROPPABLE_SCROLL",
    payload: r
  };
}, Ys = function(r) {
  return {
    type: "UPDATE_DROPPABLE_IS_ENABLED",
    payload: r
  };
}, Hs = function(r) {
  return {
    type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
    payload: r
  };
}, ni = function(r) {
  return {
    type: "MOVE",
    payload: r
  };
}, Vs = function(r) {
  return {
    type: "MOVE_BY_WINDOW_SCROLL",
    payload: r
  };
}, _s = function(r) {
  return {
    type: "UPDATE_VIEWPORT_MAX_SCROLL",
    payload: r
  };
}, qs = function() {
  return {
    type: "MOVE_UP",
    payload: null
  };
}, zs = function() {
  return {
    type: "MOVE_DOWN",
    payload: null
  };
}, Ks = function() {
  return {
    type: "MOVE_RIGHT",
    payload: null
  };
}, Xs = function() {
  return {
    type: "MOVE_LEFT",
    payload: null
  };
}, _t = function() {
  return {
    type: "FLUSH",
    payload: null
  };
}, Js = function(r) {
  return {
    type: "DROP_ANIMATE",
    payload: r
  };
}, qt = function(r) {
  return {
    type: "DROP_COMPLETE",
    payload: r
  };
}, ai = function(r) {
  return {
    type: "DROP",
    payload: r
  };
}, Zs = function(r) {
  return {
    type: "DROP_PENDING",
    payload: r
  };
}, ii = function() {
  return {
    type: "DROP_ANIMATION_FINISHED",
    payload: null
  };
};
function Qs(e) {
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
function eu(e, r) {
  {
    var t = ze(e.droppable.id, r.draggables);
    Qs(t);
  }
}
var ru = function(e) {
  return function(r) {
    var t = r.getState, n = r.dispatch;
    return function(a) {
      return function(i) {
        if (i.type !== "LIFT") {
          a(i);
          return;
        }
        var o = i.payload, l = o.id, s = o.clientSelection, d = o.movementMode, f = t();
        f.phase === "DROP_ANIMATING" && n(qt({
          completed: f.completed
        })), t().phase !== "IDLE" && C(!1, "Unexpected phase to start a drag"), n(_t()), n(Gs({
          draggableId: l,
          movementMode: d
        }));
        var u = {
          shouldPublishImmediately: d === "SNAP"
        }, c = {
          draggableId: l,
          scrollOptions: u
        }, p = e.startPublishing(c), g = p.critical, b = p.dimensions, D = p.viewport;
        eu(g, b), n(ks({
          critical: g,
          dimensions: b,
          clientSelection: s,
          movementMode: d,
          viewport: D
        }));
      };
    };
  };
}, tu = function(e) {
  return function() {
    return function(r) {
      return function(t) {
        t.type === "INITIAL_PUBLISH" && e.dragging(), t.type === "DROP_ANIMATE" && e.dropping(t.payload.completed.result.reason), (t.type === "FLUSH" || t.type === "DROP_COMPLETE") && e.resting(), r(t);
      };
    };
  };
}, zt = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, xr = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, Kt = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Ye = Kt.outOfTheWay + "s " + zt.outOfTheWay, gr = {
  fluid: "opacity " + Ye,
  snap: "transform " + Ye + ", opacity " + Ye,
  drop: function(r) {
    var t = r + "s " + zt.drop;
    return "transform " + t + ", opacity " + t;
  },
  outOfTheWay: "transform " + Ye,
  placeholder: "height " + Ye + ", width " + Ye + ", margin " + Ye
}, zn = function(r) {
  return Le(r, pe) ? null : "translate(" + r.x + "px, " + r.y + "px)";
}, St = {
  moveTo: zn,
  drop: function(r, t) {
    var n = zn(r);
    return n ? t ? n + " scale(" + xr.scale.drop + ")" : n : null;
  }
}, It = Kt.minDropTime, oi = Kt.maxDropTime, nu = oi - It, Kn = 1500, au = 0.6, iu = function(e) {
  var r = e.current, t = e.destination, n = e.reason, a = hr(r, t);
  if (a <= 0)
    return It;
  if (a >= Kn)
    return oi;
  var i = a / Kn, o = It + nu * i, l = n === "CANCEL" ? o * au : o;
  return Number(l.toFixed(2));
}, ou = function(e) {
  var r = e.impact, t = e.draggable, n = e.dimensions, a = e.viewport, i = e.afterCritical, o = n.draggables, l = n.droppables, s = Ce(r), d = s ? l[s] : null, f = l[t.descriptor.droppableId], u = ei({
    impact: r,
    draggable: t,
    draggables: o,
    afterCritical: i,
    droppable: d || f,
    viewport: a
  }), c = Ee(u, t.client.borderBox.center);
  return c;
}, lu = function(e) {
  var r = e.draggables, t = e.reason, n = e.lastImpact, a = e.home, i = e.viewport, o = e.onLiftImpact;
  if (!n.at || t !== "DROP") {
    var l = Qa({
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
  var s = k({}, n, {
    displaced: yr
  });
  return {
    impact: s,
    didDropInsideDroppable: !0
  };
}, su = function(e) {
  var r = e.getState, t = e.dispatch;
  return function(n) {
    return function(a) {
      if (a.type !== "DROP") {
        n(a);
        return;
      }
      var i = r(), o = a.payload.reason;
      if (i.phase === "COLLECTING") {
        t(Zs({
          reason: o
        }));
        return;
      }
      if (i.phase !== "IDLE") {
        var l = i.phase === "DROP_PENDING" && i.isWaiting;
        l && C(!1, "A DROP action occurred while DROP_PENDING and still waiting"), i.phase === "DRAGGING" || i.phase === "DROP_PENDING" || C(!1, "Cannot drop in phase: " + i.phase);
        var s = i.critical, d = i.dimensions, f = d.draggables[i.critical.draggable.id], u = lu({
          reason: o,
          lastImpact: i.impact,
          afterCritical: i.afterCritical,
          onLiftImpact: i.onLiftImpact,
          home: i.dimensions.droppables[i.critical.droppable.id],
          viewport: i.viewport,
          draggables: i.dimensions.draggables
        }), c = u.impact, p = u.didDropInsideDroppable, g = p ? jt(c) : null, b = p ? Vr(c) : null, D = {
          index: s.draggable.index,
          droppableId: s.droppable.id
        }, m = {
          draggableId: f.descriptor.id,
          type: f.descriptor.type,
          source: D,
          reason: o,
          mode: i.movementMode,
          destination: g,
          combine: b
        }, x = ou({
          impact: c,
          draggable: f,
          dimensions: d,
          viewport: i.viewport,
          afterCritical: i.afterCritical
        }), I = {
          critical: i.critical,
          afterCritical: i.afterCritical,
          result: m,
          impact: c
        }, y = !Le(i.current.client.offset, x) || Boolean(m.combine);
        if (!y) {
          t(qt({
            completed: I
          }));
          return;
        }
        var M = iu({
          current: i.current.client.offset,
          destination: x,
          reason: o
        }), O = {
          newHomeClientOffset: x,
          dropDuration: M,
          completed: I
        };
        t(Js(O));
      }
    };
  };
}, li = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
};
function uu(e) {
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
function cu(e) {
  var r = e.onWindowScroll;
  function t() {
    r(li());
  }
  var n = br(t), a = uu(n), i = Ne;
  function o() {
    return i !== Ne;
  }
  function l() {
    o() && C(!1, "Cannot start scroll listener when already active"), i = Te(window, [a]);
  }
  function s() {
    o() || C(!1, "Cannot stop scroll listener when not active"), n.cancel(), i(), i = Ne;
  }
  return {
    start: l,
    stop: s,
    isActive: o
  };
}
var du = function(r) {
  return r.type === "DROP_COMPLETE" || r.type === "DROP_ANIMATE" || r.type === "FLUSH";
}, fu = function(e) {
  var r = cu({
    onWindowScroll: function(n) {
      e.dispatch(Vs({
        newScroll: n
      }));
    }
  });
  return function(t) {
    return function(n) {
      !r.isActive() && n.type === "INITIAL_PUBLISH" && r.start(), r.isActive() && du(n) && r.stop(), t(n);
    };
  };
}, pu = function(e) {
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
}, vu = function() {
  var e = [], r = function(i) {
    var o = kt(e, function(d) {
      return d.timerId === i;
    });
    o === -1 && C(!1, "Could not find timer");
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
}, gu = function(r, t) {
  return r == null && t == null ? !0 : r == null || t == null ? !1 : r.droppableId === t.droppableId && r.index === t.index;
}, mu = function(r, t) {
  return r == null && t == null ? !0 : r == null || t == null ? !1 : r.draggableId === t.draggableId && r.droppableId === t.droppableId;
}, bu = function(r, t) {
  if (r === t)
    return !0;
  var n = r.draggable.id === t.draggable.id && r.draggable.droppableId === t.draggable.droppableId && r.draggable.type === t.draggable.type && r.draggable.index === t.draggable.index, a = r.droppable.id === t.droppable.id && r.droppable.type === t.droppable.type;
  return n && a;
}, dr = function(r, t) {
  t();
}, Rr = function(r, t) {
  return {
    draggableId: r.draggable.id,
    type: r.droppable.type,
    source: {
      droppableId: r.droppable.id,
      index: r.draggable.index
    },
    mode: t
  };
}, ut = function(r, t, n, a) {
  if (!r) {
    n(a(t));
    return;
  }
  var i = pu(n), o = {
    announce: i
  };
  r(t, o), i.wasCalled() || n(a(t));
}, hu = function(e, r) {
  var t = vu(), n = null, a = function(c, p) {
    n && C(!1, "Cannot fire onBeforeCapture as a drag start has already been published"), dr("onBeforeCapture", function() {
      var g = e().onBeforeCapture;
      if (g) {
        var b = {
          draggableId: c,
          mode: p
        };
        g(b);
      }
    });
  }, i = function(c, p) {
    n && C(!1, "Cannot fire onBeforeDragStart as a drag start has already been published"), dr("onBeforeDragStart", function() {
      var g = e().onBeforeDragStart;
      g && g(Rr(c, p));
    });
  }, o = function(c, p) {
    n && C(!1, "Cannot fire onBeforeDragStart as a drag start has already been published");
    var g = Rr(c, p);
    n = {
      mode: p,
      lastCritical: c,
      lastLocation: g.source,
      lastCombine: null
    }, t.add(function() {
      dr("onDragStart", function() {
        return ut(e().onDragStart, g, r, Nr.onDragStart);
      });
    });
  }, l = function(c, p) {
    var g = jt(p), b = Vr(p);
    n || C(!1, "Cannot fire onDragMove when onDragStart has not been called");
    var D = !bu(c, n.lastCritical);
    D && (n.lastCritical = c);
    var m = !gu(n.lastLocation, g);
    m && (n.lastLocation = g);
    var x = !mu(n.lastCombine, b);
    if (x && (n.lastCombine = b), !(!D && !m && !x)) {
      var I = k({}, Rr(c, n.mode), {
        combine: b,
        destination: g
      });
      t.add(function() {
        dr("onDragUpdate", function() {
          return ut(e().onDragUpdate, I, r, Nr.onDragUpdate);
        });
      });
    }
  }, s = function() {
    n || C(!1, "Can only flush responders while dragging"), t.flush();
  }, d = function(c) {
    n || C(!1, "Cannot fire onDragEnd when there is no matching onDragStart"), n = null, dr("onDragEnd", function() {
      return ut(e().onDragEnd, c, r, Nr.onDragEnd);
    });
  }, f = function() {
    if (!!n) {
      var c = k({}, Rr(n.lastCritical, n.mode), {
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
}, yu = function(e, r) {
  var t = hu(e, r);
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
}, Du = function(e) {
  return function(r) {
    return function(t) {
      if (t.type !== "DROP_ANIMATION_FINISHED") {
        r(t);
        return;
      }
      var n = e.getState();
      n.phase !== "DROP_ANIMATING" && C(!1, "Cannot finish a drop animating when no drop is occurring"), e.dispatch(qt({
        completed: n.completed
      }));
    };
  };
}, xu = function(e) {
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
            s.phase === "DROP_ANIMATING" && e.dispatch(ii());
          }
        };
        t = requestAnimationFrame(function() {
          t = null, r = Te(window, [o]);
        });
      }
    };
  };
}, Eu = function(e) {
  return function() {
    return function(r) {
      return function(t) {
        (t.type === "DROP_COMPLETE" || t.type === "FLUSH" || t.type === "DROP_ANIMATE") && e.stopPublishing(), r(t);
      };
    };
  };
}, Cu = function(e) {
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
}, wu = function(r) {
  return r.type === "DROP_COMPLETE" || r.type === "DROP_ANIMATE" || r.type === "FLUSH";
}, Su = function(e) {
  return function(r) {
    return function(t) {
      return function(n) {
        if (wu(n)) {
          e.stop(), t(n);
          return;
        }
        if (n.type === "INITIAL_PUBLISH") {
          t(n);
          var a = r.getState();
          a.phase !== "DRAGGING" && C(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH"), e.start(a);
          return;
        }
        t(n), e.scroll(r.getState());
      };
    };
  };
}, Iu = function(e) {
  return function(r) {
    return function(t) {
      if (r(t), t.type === "PUBLISH_WHILE_DRAGGING") {
        var n = e.getState();
        n.phase === "DROP_PENDING" && (n.isWaiting || e.dispatch(ai({
          reason: n.reason
        })));
      }
    };
  };
}, Pu = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "react-beautiful-dnd"
}) : ga, Tu = function(e) {
  var r = e.dimensionMarshal, t = e.focusMarshal, n = e.styleMarshal, a = e.getResponders, i = e.announce, o = e.autoScroller;
  return va(Fs, Pu(oo(tu(n), Eu(r), ru(r), su, Du, xu, Iu, Su(o), fu, Cu(t), yu(a, i))));
}, ct = function() {
  return {
    additions: {},
    removals: {},
    modified: {}
  };
};
function Ru(e) {
  var r = e.registry, t = e.callbacks, n = ct(), a = null, i = function() {
    a || (t.collectionStarting(), a = requestAnimationFrame(function() {
      a = null;
      var f = n, u = f.additions, c = f.removals, p = f.modified, g = Object.keys(u).map(function(m) {
        return r.draggable.getById(m).getDimension(pe);
      }).sort(function(m, x) {
        return m.descriptor.index - x.descriptor.index;
      }), b = Object.keys(p).map(function(m) {
        var x = r.droppable.getById(m), I = x.callbacks.getScrollWhileDragging();
        return {
          droppableId: m,
          scroll: I
        };
      }), D = {
        additions: g,
        removals: Object.keys(c),
        modified: b
      };
      n = ct(), t.publish(D);
    }));
  }, o = function(f) {
    var u = f.descriptor.id;
    n.additions[u] = f, n.modified[f.descriptor.droppableId] = !0, n.removals[u] && delete n.removals[u], i();
  }, l = function(f) {
    var u = f.descriptor;
    n.removals[u.id] = !0, n.modified[u.droppableId] = !0, n.additions[u.id] && delete n.additions[u.id], i();
  }, s = function() {
    !a || (cancelAnimationFrame(a), a = null, n = ct());
  };
  return {
    add: o,
    remove: l,
    stop: s
  };
}
var si = function(e) {
  var r = e.scrollHeight, t = e.scrollWidth, n = e.height, a = e.width, i = Ee({
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
}, ui = function() {
  var e = document.documentElement;
  return e || C(!1, "Cannot find document.documentElement"), e;
}, ci = function() {
  var e = ui(), r = si({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
  return r;
}, Au = function() {
  var e = li(), r = ci(), t = e.y, n = e.x, a = ui(), i = a.clientWidth, o = a.clientHeight, l = n + i, s = t + o, d = Ae({
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
        value: pe,
        displacement: pe
      }
    }
  };
  return f;
}, Ou = function(e) {
  var r = e.critical, t = e.scrollOptions, n = e.registry, a = Au(), i = a.scroll.current, o = r.droppable, l = n.droppable.getAllByType(o.type).map(function(u) {
    return u.callbacks.getDimensionAndWatchScroll(i, t);
  }), s = n.draggable.getAllByType(r.draggable.type).map(function(u) {
    return u.getDimension(i);
  }), d = {
    draggables: ka(s),
    droppables: Wa(l)
  }, f = {
    dimensions: d,
    critical: r,
    viewport: a
  };
  return f;
};
function Xn(e, r, t) {
  if (t.descriptor.id === r.id || t.descriptor.type !== r.type)
    return !1;
  var n = e.droppable.getById(t.descriptor.droppableId);
  return n.descriptor.mode !== "virtual" ? (se(`
      You are attempting to add or remove a Draggable [id: ` + t.descriptor.id + `]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var Bu = function(e, r) {
  var t = null, n = Ru({
    callbacks: {
      publish: r.publishWhileDragging,
      collectionStarting: r.collectionStarting
    },
    registry: e
  }), a = function(p, g) {
    e.droppable.exists(p) || C(!1, "Cannot update is enabled flag of Droppable " + p + " as it is not registered"), t && r.updateDroppableIsEnabled({
      id: p,
      isEnabled: g
    });
  }, i = function(p, g) {
    !t || (e.droppable.exists(p) || C(!1, "Cannot update isCombineEnabled flag of Droppable " + p + " as it is not registered"), r.updateDroppableIsCombineEnabled({
      id: p,
      isCombineEnabled: g
    }));
  }, o = function(p, g) {
    !t || (e.droppable.exists(p) || C(!1, "Cannot update the scroll on Droppable " + p + " as it is not registered"), r.updateDroppableScroll({
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
    t || C(!1, "Should only be subscribed when a collection is occurring");
    var g = t.critical.draggable;
    p.type === "ADDITION" && Xn(e, g, p.value) && n.add(p.value), p.type === "REMOVAL" && Xn(e, g, p.value) && n.remove(p.value);
  }, f = function(p) {
    t && C(!1, "Cannot start capturing critical dimensions as there is already a collection");
    var g = e.draggable.getById(p.draggableId), b = e.droppable.getById(g.descriptor.droppableId), D = {
      draggable: g.descriptor,
      droppable: b.descriptor
    }, m = e.subscribe(d);
    return t = {
      critical: D,
      unsubscribe: m
    }, Ou({
      critical: D,
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
}, di = function(e, r) {
  return e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === r ? !1 : e.completed.result.reason === "DROP";
}, Mu = function(e) {
  window.scrollBy(e.x, e.y);
}, Nu = fe(function(e) {
  return Hr(e).filter(function(r) {
    return !(!r.isEnabled || !r.frame);
  });
}), Lu = function(r, t) {
  var n = We(Nu(t), function(a) {
    return a.frame || C(!1, "Invalid result"), Ka(a.frame.pageMarginBox)(r);
  });
  return n;
}, Fu = function(e) {
  var r = e.center, t = e.destination, n = e.droppables;
  if (t) {
    var a = n[t];
    return a.frame ? a : null;
  }
  var i = Lu(r, n);
  return i;
}, Fe = {
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
}, Gu = function(e, r) {
  var t = e[r.size] * Fe.startFromPercentage, n = e[r.size] * Fe.maxScrollAtPercentage, a = {
    startScrollingFrom: t,
    maxScrollValueAt: n
  };
  return a;
}, fi = function(e) {
  var r = e.startOfRange, t = e.endOfRange, n = e.current, a = t - r;
  if (a === 0)
    return se(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0;
  var i = n - r, o = i / a;
  return o;
}, Xt = 1, Wu = function(e, r) {
  if (e > r.startScrollingFrom)
    return 0;
  if (e <= r.maxScrollValueAt)
    return Fe.maxPixelScroll;
  if (e === r.startScrollingFrom)
    return Xt;
  var t = fi({
    startOfRange: r.maxScrollValueAt,
    endOfRange: r.startScrollingFrom,
    current: e
  }), n = 1 - t, a = Fe.maxPixelScroll * Fe.ease(n);
  return Math.ceil(a);
}, Jn = Fe.durationDampening.accelerateAt, Zn = Fe.durationDampening.stopDampeningAt, ku = function(e, r) {
  var t = r, n = Zn, a = Date.now(), i = a - t;
  if (i >= Zn)
    return e;
  if (i < Jn)
    return Xt;
  var o = fi({
    startOfRange: Jn,
    endOfRange: n,
    current: i
  }), l = e * Fe.ease(o);
  return Math.ceil(l);
}, Qn = function(e) {
  var r = e.distanceToEdge, t = e.thresholds, n = e.dragStartTime, a = e.shouldUseTimeDampening, i = Wu(r, t);
  return i === 0 ? 0 : a ? Math.max(ku(i, n), Xt) : i;
}, ea = function(e) {
  var r = e.container, t = e.distanceToEdges, n = e.dragStartTime, a = e.axis, i = e.shouldUseTimeDampening, o = Gu(r, a), l = t[a.end] < t[a.start];
  return l ? Qn({
    distanceToEdge: t[a.end],
    thresholds: o,
    dragStartTime: n,
    shouldUseTimeDampening: i
  }) : -1 * Qn({
    distanceToEdge: t[a.start],
    thresholds: o,
    dragStartTime: n,
    shouldUseTimeDampening: i
  });
}, ju = function(e) {
  var r = e.container, t = e.subject, n = e.proposedScroll, a = t.height > r.height, i = t.width > r.width;
  return !i && !a ? n : i && a ? null : {
    x: i ? 0 : n.x,
    y: a ? 0 : n.y
  };
}, Uu = Fa(function(e) {
  return e === 0 ? 0 : e;
}), pi = function(e) {
  var r = e.dragStartTime, t = e.container, n = e.subject, a = e.center, i = e.shouldUseTimeDampening, o = {
    top: a.y - t.top,
    right: t.right - a.x,
    bottom: t.bottom - a.y,
    left: a.x - t.left
  }, l = ea({
    container: t,
    distanceToEdges: o,
    dragStartTime: r,
    axis: Ut,
    shouldUseTimeDampening: i
  }), s = ea({
    container: t,
    distanceToEdges: o,
    dragStartTime: r,
    axis: $a,
    shouldUseTimeDampening: i
  }), d = Uu({
    x: s,
    y: l
  });
  if (Le(d, pe))
    return null;
  var f = ju({
    container: t,
    subject: n,
    proposedScroll: d
  });
  return f ? Le(f, pe) ? null : f : null;
}, $u = Fa(function(e) {
  return e === 0 ? 0 : e > 0 ? 1 : -1;
}), Jt = function() {
  var e = function(t, n) {
    return t < 0 ? t : t > n ? t - n : 0;
  };
  return function(r) {
    var t = r.current, n = r.max, a = r.change, i = ve(t, a), o = {
      x: e(i.x, n.x),
      y: e(i.y, n.y)
    };
    return Le(o, pe) ? null : o;
  };
}(), vi = function(r) {
  var t = r.max, n = r.current, a = r.change, i = {
    x: Math.max(n.x, t.x),
    y: Math.max(n.y, t.y)
  }, o = $u(a), l = Jt({
    max: i,
    current: n,
    change: o
  });
  return !l || o.x !== 0 && l.x === 0 || o.y !== 0 && l.y === 0;
}, Zt = function(r, t) {
  return vi({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  });
}, Yu = function(r, t) {
  if (!Zt(r, t))
    return null;
  var n = r.scroll.max, a = r.scroll.current;
  return Jt({
    current: a,
    max: n,
    change: t
  });
}, Qt = function(r, t) {
  var n = r.frame;
  return n ? vi({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, Hu = function(r, t) {
  var n = r.frame;
  return !n || !Qt(r, t) ? null : Jt({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
}, Vu = function(e) {
  var r = e.viewport, t = e.subject, n = e.center, a = e.dragStartTime, i = e.shouldUseTimeDampening, o = pi({
    dragStartTime: a,
    container: r.frame,
    subject: t,
    center: n,
    shouldUseTimeDampening: i
  });
  return o && Zt(r, o) ? o : null;
}, _u = function(e) {
  var r = e.droppable, t = e.subject, n = e.center, a = e.dragStartTime, i = e.shouldUseTimeDampening, o = r.frame;
  if (!o)
    return null;
  var l = pi({
    dragStartTime: a,
    container: o.pageMarginBox,
    subject: t,
    center: n,
    shouldUseTimeDampening: i
  });
  return l && Qt(r, l) ? l : null;
}, ra = function(e) {
  var r = e.state, t = e.dragStartTime, n = e.shouldUseTimeDampening, a = e.scrollWindow, i = e.scrollDroppable, o = r.current.page.borderBoxCenter, l = r.dimensions.draggables[r.critical.draggable.id], s = l.page.marginBox;
  if (r.isWindowScrollAllowed) {
    var d = r.viewport, f = Vu({
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
  var u = Fu({
    center: o,
    destination: Ce(r.impact),
    droppables: r.dimensions.droppables
  });
  if (!!u) {
    var c = _u({
      dragStartTime: t,
      droppable: u,
      subject: s,
      center: o,
      shouldUseTimeDampening: n
    });
    c && i(u.descriptor.id, c);
  }
}, qu = function(e) {
  var r = e.scrollWindow, t = e.scrollDroppable, n = br(r), a = br(t), i = null, o = function(f) {
    i || C(!1, "Cannot fluid scroll if not dragging");
    var u = i, c = u.shouldUseTimeDampening, p = u.dragStartTime;
    ra({
      state: f,
      scrollWindow: n,
      scrollDroppable: a,
      dragStartTime: p,
      shouldUseTimeDampening: c
    });
  }, l = function(f) {
    i && C(!1, "Cannot start auto scrolling when already started");
    var u = Date.now(), c = !1, p = function() {
      c = !0;
    };
    ra({
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
}, zu = function(e) {
  var r = e.move, t = e.scrollDroppable, n = e.scrollWindow, a = function(d, f) {
    var u = ve(d.current.client.selection, f);
    r({
      client: u
    });
  }, i = function(d, f) {
    if (!Qt(d, f))
      return f;
    var u = Hu(d, f);
    if (!u)
      return t(d.descriptor.id, f), null;
    var c = Ee(f, u);
    t(d.descriptor.id, c);
    var p = Ee(f, c);
    return p;
  }, o = function(d, f, u) {
    if (!d || !Zt(f, u))
      return u;
    var c = Yu(f, u);
    if (!c)
      return n(u), null;
    var p = Ee(u, c);
    n(p);
    var g = Ee(u, p);
    return g;
  }, l = function(d) {
    var f = d.scrollJumpRequest;
    if (!!f) {
      var u = Ce(d.impact);
      u || C(!1, "Cannot perform a jump scroll when there is no destination");
      var c = i(d.dimensions.droppables[u], f);
      if (!!c) {
        var p = d.viewport, g = o(d.isWindowScrollAllowed, p, c);
        !g || a(d, g);
      }
    }
  };
  return l;
}, Ku = function(e) {
  var r = e.scrollDroppable, t = e.scrollWindow, n = e.move, a = qu({
    scrollWindow: t,
    scrollDroppable: r
  }), i = zu({
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
}, tr = "data-rbd", nr = function() {
  var e = tr + "-drag-handle";
  return {
    base: e,
    draggableId: e + "-draggable-id",
    contextId: e + "-context-id"
  };
}(), Pt = function() {
  var e = tr + "-draggable";
  return {
    base: e,
    contextId: e + "-context-id",
    id: e + "-id"
  };
}(), Xu = function() {
  var e = tr + "-droppable";
  return {
    base: e,
    contextId: e + "-context-id",
    id: e + "-id"
  };
}(), ta = {
  contextId: tr + "-scroll-container-context-id"
}, Ju = function(r) {
  return function(t) {
    return "[" + t + '="' + r + '"]';
  };
}, fr = function(r, t) {
  return r.map(function(n) {
    var a = n.styles[t];
    return a ? n.selector + " { " + a + " }" : "";
  }).join(" ");
}, Zu = "pointer-events: none;", Qu = function(e) {
  var r = Ju(e), t = function() {
    var l = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: r(nr.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: l,
        dragging: Zu,
        dropAnimating: l
      }
    };
  }(), n = function() {
    var l = `
      transition: ` + gr.outOfTheWay + `;
    `;
    return {
      selector: r(Pt.contextId),
      styles: {
        dragging: l,
        dropAnimating: l,
        userCancel: l
      }
    };
  }(), a = {
    selector: r(Xu.contextId),
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
    always: fr(o, "always"),
    resting: fr(o, "resting"),
    dragging: fr(o, "dragging"),
    dropAnimating: fr(o, "dropAnimating"),
    userCancel: fr(o, "userCancel")
  };
}, we = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? fa : Be, dt = function() {
  var r = document.querySelector("head");
  return r || C(!1, "Cannot find the head to append a style to"), r;
}, na = function(r) {
  var t = document.createElement("style");
  return r && t.setAttribute("nonce", r), t.type = "text/css", t;
};
function ec(e, r) {
  var t = K(function() {
    return Qu(e);
  }, [e]), n = re(null), a = re(null), i = L(fe(function(u) {
    var c = a.current;
    c || C(!1, "Cannot set dynamic style element if it is not set"), c.textContent = u;
  }), []), o = L(function(u) {
    var c = n.current;
    c || C(!1, "Cannot set dynamic style element if it is not set"), c.textContent = u;
  }, []);
  we(function() {
    !n.current && !a.current || C(!1, "style elements already mounted");
    var u = na(r), c = na(r);
    return n.current = u, a.current = c, u.setAttribute(tr + "-always", e), c.setAttribute(tr + "-dynamic", e), dt().appendChild(u), dt().appendChild(c), o(t.always), i(t.resting), function() {
      var p = function(b) {
        var D = b.current;
        D || C(!1, "Cannot unmount ref as it is not set"), dt().removeChild(D), b.current = null;
      };
      p(n), p(a);
    };
  }, [r, o, i, t.always, t.resting, e]);
  var l = L(function() {
    return i(t.dragging);
  }, [i, t.dragging]), s = L(function(u) {
    if (u === "DROP") {
      i(t.dropAnimating);
      return;
    }
    i(t.userCancel);
  }, [i, t.dropAnimating, t.userCancel]), d = L(function() {
    !a.current || i(t.resting);
  }, [i, t.resting]), f = K(function() {
    return {
      dragging: l,
      dropping: s,
      resting: d
    };
  }, [l, s, d]);
  return f;
}
var gi = function(e) {
  return e && e.ownerDocument ? e.ownerDocument.defaultView : window;
};
function Sr(e) {
  return e instanceof gi(e).HTMLElement;
}
function mi(e, r) {
  var t = "[" + nr.contextId + '="' + e + '"]', n = Ga(document.querySelectorAll(t));
  if (!n.length)
    return se('Unable to find any drag handles in the context "' + e + '"'), null;
  var a = We(n, function(i) {
    return i.getAttribute(nr.draggableId) === r;
  });
  return a ? Sr(a) ? a : (se("drag handle needs to be a HTMLElement"), null) : (se('Unable to find drag handle with id "' + r + '" as no handle with a matching id was found'), null);
}
function rc(e) {
  var r = re({}), t = re(null), n = re(null), a = re(!1), i = L(function(c, p) {
    var g = {
      id: c,
      focus: p
    };
    return r.current[c] = g, function() {
      var D = r.current, m = D[c];
      m !== g && delete D[c];
    };
  }, []), o = L(function(c) {
    var p = mi(e, c);
    p && p !== document.activeElement && p.focus();
  }, [e]), l = L(function(c, p) {
    t.current === c && (t.current = p);
  }, []), s = L(function() {
    n.current || !a.current || (n.current = requestAnimationFrame(function() {
      n.current = null;
      var c = t.current;
      c && o(c);
    }));
  }, [o]), d = L(function(c) {
    t.current = null;
    var p = document.activeElement;
    !p || p.getAttribute(nr.draggableId) === c && (t.current = c);
  }, []);
  we(function() {
    return a.current = !0, function() {
      a.current = !1;
      var c = n.current;
      c && cancelAnimationFrame(c);
    };
  }, []);
  var f = K(function() {
    return {
      register: i,
      tryRecordFocus: d,
      tryRestoreFocusRecorded: s,
      tryShiftRecord: l
    };
  }, [i, d, s, l]);
  return f;
}
function tc() {
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
    return c || C(!1, "Cannot find draggable entry with id [" + u + "]"), c;
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
      return jr(e.draggables).filter(function(p) {
        return p.descriptor.type === c;
      });
    }
  };
  function l(u) {
    return e.droppables[u] || null;
  }
  function s(u) {
    var c = l(u);
    return c || C(!1, "Cannot find droppable entry with id [" + u + "]"), c;
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
      return jr(e.droppables).filter(function(p) {
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
function nc() {
  var e = K(tc, []);
  return Be(function() {
    return function() {
      requestAnimationFrame(e.clean);
    };
  }, [e]), e;
}
var en = le.createContext(null), Er = function() {
  var e = document.body;
  return e || C(!1, "Cannot find document.body"), e;
}, ac = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(100%)"
}, ic = function(r) {
  return "rbd-announcement-" + r;
};
function oc(e) {
  var r = K(function() {
    return ic(e);
  }, [e]), t = re(null);
  Be(function() {
    var i = document.createElement("div");
    return t.current = i, i.id = r, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), k(i.style, ac), Er().appendChild(i), function() {
      setTimeout(function() {
        var s = Er();
        s.contains(i) && s.removeChild(i), i === t.current && (t.current = null);
      });
    };
  }, [r]);
  var n = L(function(a) {
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
var lc = 0, sc = {
  separator: "::"
};
function rn(e, r) {
  return r === void 0 && (r = sc), K(function() {
    return "" + e + r.separator + lc++;
  }, [r.separator, e]);
}
function uc(e) {
  var r = e.contextId, t = e.uniqueId;
  return "rbd-hidden-text-" + r + "-" + t;
}
function cc(e) {
  var r = e.contextId, t = e.text, n = rn("hidden-text", {
    separator: "-"
  }), a = K(function() {
    return uc({
      contextId: r,
      uniqueId: n
    });
  }, [n, r]);
  return Be(function() {
    var o = document.createElement("div");
    return o.id = a, o.textContent = t, o.style.display = "none", Er().appendChild(o), function() {
      var s = Er();
      s.contains(o) && s.removeChild(o);
    };
  }, [a, t]), a;
}
var zr = le.createContext(null), dc = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
}, fc = /(\d+)\.(\d+)\.(\d+)/, aa = function(r) {
  var t = fc.exec(r);
  t == null && C(!1, "Unable to parse React version " + r);
  var n = Number(t[1]), a = Number(t[2]), i = Number(t[3]);
  return {
    major: n,
    minor: a,
    patch: i,
    raw: r
  };
}, pc = function(r, t) {
  return t.major > r.major ? !0 : t.major < r.major ? !1 : t.minor > r.minor ? !0 : t.minor < r.minor ? !1 : t.patch >= r.patch;
}, vc = function(e, r) {
  var t = aa(e), n = aa(r);
  pc(t, n) || se(`
    React version: [` + n.raw + `]
    does not satisfy expected peer dependency version: [` + t.raw + `]

    This can result in run time bugs, and even fatal crashes
  `);
}, ft = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/doctype.md
`, gc = function(e) {
  var r = e.doctype;
  if (!r) {
    se(`
      No <!doctype html> found.

      ` + ft + `
    `);
    return;
  }
  r.name.toLowerCase() !== "html" && se(`
      Unexpected <!doctype> found: (` + r.name + `)

      ` + ft + `
    `), r.publicId !== "" && se(`
      Unexpected <!doctype> publicId found: (` + r.publicId + `)
      A html5 doctype does not have a publicId

      ` + ft + `
    `);
};
function tn(e) {
  e();
}
function Ir(e, r) {
  tn(function() {
    Be(function() {
      try {
        e();
      } catch (t) {
        Et(`
          A setup problem was encountered.

          > ` + t.message + `
        `);
      }
    }, r);
  });
}
function mc() {
  Ir(function() {
    vc(dc.react, le.version), gc(document);
  }, []);
}
function nn(e) {
  var r = re(e);
  return Be(function() {
    r.current = e;
  }), r;
}
function bc() {
  var e = null;
  function r() {
    return Boolean(e);
  }
  function t(o) {
    return o === e;
  }
  function n(o) {
    e && C(!1, "Cannot claim lock as it is already claimed");
    var l = {
      abandon: o
    };
    return e = l, l;
  }
  function a() {
    e || C(!1, "Cannot release lock when there is no lock"), e = null;
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
var hc = 9, yc = 13, an = 27, bi = 32, Dc = 33, xc = 34, Ec = 35, Cc = 36, wc = 37, Sc = 38, Ic = 39, Pc = 40, Ar, Tc = (Ar = {}, Ar[yc] = !0, Ar[hc] = !0, Ar), hi = function(e) {
  Tc[e.keyCode] && e.preventDefault();
}, Kr = function() {
  var e = "visibilitychange";
  if (typeof document > "u")
    return e;
  var r = [e, "ms" + e, "webkit" + e, "moz" + e, "o" + e], t = We(r, function(n) {
    return "on" + n in document;
  });
  return t || e;
}(), yi = 0, ia = 5;
function Rc(e, r) {
  return Math.abs(r.x - e.x) >= ia || Math.abs(r.y - e.y) >= ia;
}
var oa = {
  type: "IDLE"
};
function Ac(e) {
  var r = e.cancel, t = e.completed, n = e.getPhase, a = e.setPhase;
  return [{
    eventName: "mousemove",
    fn: function(o) {
      var l = o.button, s = o.clientX, d = o.clientY;
      if (l === yi) {
        var f = {
          x: s,
          y: d
        }, u = n();
        if (u.type === "DRAGGING") {
          o.preventDefault(), u.actions.move(f);
          return;
        }
        u.type !== "PENDING" && C(!1, "Cannot be IDLE");
        var c = u.point;
        if (!!Rc(c, f)) {
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
      if (o.keyCode === an) {
        o.preventDefault(), r();
        return;
      }
      hi(o);
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
      if (l.type === "IDLE" && C(!1, "Unexpected phase"), l.actions.shouldRespectForcePress()) {
        r();
        return;
      }
      o.preventDefault();
    }
  }, {
    eventName: Kr,
    fn: r
  }];
}
function Oc(e) {
  var r = re(oa), t = re(Ne), n = K(function() {
    return {
      eventName: "mousedown",
      fn: function(u) {
        if (!u.defaultPrevented && u.button === yi && !(u.ctrlKey || u.metaKey || u.shiftKey || u.altKey)) {
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
  }, [e]), a = K(function() {
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
  }, [e]), i = L(function() {
    var u = {
      passive: !1,
      capture: !0
    };
    t.current = Te(window, [a, n], u);
  }, [a, n]), o = L(function() {
    var f = r.current;
    f.type !== "IDLE" && (r.current = oa, t.current(), i());
  }, [i]), l = L(function() {
    var f = r.current;
    o(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [o]), s = L(function() {
    var u = {
      capture: !0,
      passive: !1
    }, c = Ac({
      cancel: l,
      completed: o,
      getPhase: function() {
        return r.current;
      },
      setPhase: function(g) {
        r.current = g;
      }
    });
    t.current = Te(window, c, u);
  }, [l, o]), d = L(function(u, c) {
    r.current.type !== "IDLE" && C(!1, "Expected to move from IDLE to PENDING drag"), r.current = {
      type: "PENDING",
      point: c,
      actions: u
    }, s();
  }, [s]);
  we(function() {
    return i(), function() {
      t.current();
    };
  }, [i]);
}
var Qe;
function Bc() {
}
var Mc = (Qe = {}, Qe[xc] = !0, Qe[Dc] = !0, Qe[Cc] = !0, Qe[Ec] = !0, Qe);
function Nc(e, r) {
  function t() {
    r(), e.cancel();
  }
  function n() {
    r(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: function(i) {
      if (i.keyCode === an) {
        i.preventDefault(), t();
        return;
      }
      if (i.keyCode === bi) {
        i.preventDefault(), n();
        return;
      }
      if (i.keyCode === Pc) {
        i.preventDefault(), e.moveDown();
        return;
      }
      if (i.keyCode === Sc) {
        i.preventDefault(), e.moveUp();
        return;
      }
      if (i.keyCode === Ic) {
        i.preventDefault(), e.moveRight();
        return;
      }
      if (i.keyCode === wc) {
        i.preventDefault(), e.moveLeft();
        return;
      }
      if (Mc[i.keyCode]) {
        i.preventDefault();
        return;
      }
      hi(i);
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
    eventName: Kr,
    fn: t
  }];
}
function Lc(e) {
  var r = re(Bc), t = K(function() {
    return {
      eventName: "keydown",
      fn: function(i) {
        if (i.defaultPrevented || i.keyCode !== bi)
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
          s || C(!1, "Cannot stop capturing a keyboard drag when not capturing"), s = !1, r.current(), n();
        }
        r.current = Te(window, Nc(d, f), {
          capture: !0,
          passive: !1
        });
      }
    };
  }, [e]), n = L(function() {
    var i = {
      passive: !1,
      capture: !0
    };
    r.current = Te(window, [t], i);
  }, [t]);
  we(function() {
    return n(), function() {
      r.current();
    };
  }, [n]);
}
var pt = {
  type: "IDLE"
}, Fc = 120, Gc = 0.15;
function Wc(e) {
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
      a.keyCode === an && a.preventDefault(), r();
    }
  }, {
    eventName: Kr,
    fn: r
  }];
}
function kc(e) {
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
      o.type === "IDLE" && C(!1);
      var l = i.touches[0];
      if (!!l) {
        var s = l.force >= Gc;
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
    eventName: Kr,
    fn: r
  }];
}
function jc(e) {
  var r = re(pt), t = re(Ne), n = L(function() {
    return r.current;
  }, []), a = L(function(p) {
    r.current = p;
  }, []), i = K(function() {
    return {
      eventName: "touchstart",
      fn: function(p) {
        if (!p.defaultPrevented) {
          var g = e.findClosestDraggableId(p);
          if (!!g) {
            var b = e.tryGetLock(g, l, {
              sourceEvent: p
            });
            if (!!b) {
              var D = p.touches[0], m = D.clientX, x = D.clientY, I = {
                x: m,
                y: x
              };
              t.current(), u(b, I);
            }
          }
        }
      }
    };
  }, [e]), o = L(function() {
    var p = {
      capture: !0,
      passive: !1
    };
    t.current = Te(window, [i], p);
  }, [i]), l = L(function() {
    var c = r.current;
    c.type !== "IDLE" && (c.type === "PENDING" && clearTimeout(c.longPressTimerId), a(pt), t.current(), o());
  }, [o, a]), s = L(function() {
    var c = r.current;
    l(), c.type === "DRAGGING" && c.actions.cancel({
      shouldBlockNextClick: !0
    }), c.type === "PENDING" && c.actions.abort();
  }, [l]), d = L(function() {
    var p = {
      capture: !0,
      passive: !1
    }, g = {
      cancel: s,
      completed: l,
      getPhase: n
    }, b = Te(window, kc(g), p), D = Te(window, Wc(g), p);
    t.current = function() {
      b(), D();
    };
  }, [s, n, l]), f = L(function() {
    var p = n();
    p.type !== "PENDING" && C(!1, "Cannot start dragging from phase " + p.type);
    var g = p.actions.fluidLift(p.point);
    a({
      type: "DRAGGING",
      actions: g,
      hasMoved: !1
    });
  }, [n, a]), u = L(function(p, g) {
    n().type !== "IDLE" && C(!1, "Expected to move from IDLE to PENDING drag");
    var b = setTimeout(f, Fc);
    a({
      type: "PENDING",
      point: g,
      actions: p,
      longPressTimerId: b
    }), d();
  }, [d, n, a, f]);
  we(function() {
    return o(), function() {
      t.current();
      var g = n();
      g.type === "PENDING" && (clearTimeout(g.longPressTimerId), a(pt));
    };
  }, [n, o, a]), we(function() {
    var p = Te(window, [{
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
function Uc(e) {
  tn(function() {
    var r = nn(e);
    Ir(function() {
      r.current.length !== e.length && C(!1, "Cannot change the amount of sensor hooks after mounting");
    });
  });
}
var $c = {
  input: !0,
  button: !0,
  textarea: !0,
  select: !0,
  option: !0,
  optgroup: !0,
  video: !0,
  audio: !0
};
function Di(e, r) {
  if (r == null)
    return !1;
  var t = Boolean($c[r.tagName.toLowerCase()]);
  if (t)
    return !0;
  var n = r.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : r === e ? !1 : Di(e, r.parentElement);
}
function Yc(e, r) {
  var t = r.target;
  return Sr(t) ? Di(e, t) : !1;
}
var Hc = function(e) {
  return Ae(e.getBoundingClientRect()).center;
};
function Vc(e) {
  return e instanceof gi(e).Element;
}
var _c = function() {
  var e = "matches";
  if (typeof document > "u")
    return e;
  var r = [e, "msMatchesSelector", "webkitMatchesSelector"], t = We(r, function(n) {
    return n in Element.prototype;
  });
  return t || e;
}();
function xi(e, r) {
  return e == null ? null : e[_c](r) ? e : xi(e.parentElement, r);
}
function qc(e, r) {
  return e.closest ? e.closest(r) : xi(e, r);
}
function zc(e) {
  return "[" + nr.contextId + '="' + e + '"]';
}
function Kc(e, r) {
  var t = r.target;
  if (!Vc(t))
    return se("event.target must be a Element"), null;
  var n = zc(e), a = qc(t, n);
  return a ? Sr(a) ? a : (se("drag handle must be a HTMLElement"), null) : null;
}
function Xc(e, r) {
  var t = Kc(e, r);
  return t ? t.getAttribute(nr.draggableId) : null;
}
function Jc(e, r) {
  var t = "[" + Pt.contextId + '="' + e + '"]', n = Ga(document.querySelectorAll(t)), a = We(n, function(i) {
    return i.getAttribute(Pt.id) === r;
  });
  return a ? Sr(a) ? a : (se("Draggable element is not a HTMLElement"), null) : null;
}
function Zc(e) {
  e.preventDefault();
}
function Or(e) {
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
function Ei(e) {
  var r = e.lockAPI, t = e.store, n = e.registry, a = e.draggableId;
  if (r.isClaimed())
    return !1;
  var i = n.draggable.findById(a);
  return i ? !(!i.options.isEnabled || !di(t.getState(), a)) : (se("Unable to find draggable with id: " + a), !1);
}
function Qc(e) {
  var r = e.lockAPI, t = e.contextId, n = e.store, a = e.registry, i = e.draggableId, o = e.forceSensorStop, l = e.sourceEvent, s = Ei({
    lockAPI: r,
    store: n,
    registry: a,
    draggableId: i
  });
  if (!s)
    return null;
  var d = a.draggable.getById(i), f = Jc(t, d.descriptor.id);
  if (!f)
    return se("Unable to find draggable element with id: " + i), null;
  if (l && !d.options.canDragInteractiveElements && Yc(f, l))
    return null;
  var u = r.claim(o || Ne), c = "PRE_DRAG";
  function p() {
    return d.options.shouldRespectForcePress;
  }
  function g() {
    return r.isActive(u);
  }
  function b(O, G) {
    Or({
      expected: O,
      phase: c,
      isLockActive: g,
      shouldWarn: !0
    }) && n.dispatch(G());
  }
  var D = b.bind(null, "DRAGGING");
  function m(O) {
    function G() {
      r.release(), c = "COMPLETED";
    }
    c !== "PRE_DRAG" && (G(), c !== "PRE_DRAG" && C(!1, "Cannot lift in phase " + c)), n.dispatch(Ws(O.liftActionArgs)), c = "DRAGGING";
    function z(B, V) {
      if (V === void 0 && (V = {
        shouldBlockNextClick: !1
      }), O.cleanup(), V.shouldBlockNextClick) {
        var J = Te(window, [{
          eventName: "click",
          fn: Zc,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(J);
      }
      G(), n.dispatch(ai({
        reason: B
      }));
    }
    return k({
      isActive: function() {
        return Or({
          expected: "DRAGGING",
          phase: c,
          isLockActive: g,
          shouldWarn: !1
        });
      },
      shouldRespectForcePress: p,
      drop: function(V) {
        return z("DROP", V);
      },
      cancel: function(V) {
        return z("CANCEL", V);
      }
    }, O.actions);
  }
  function x(O) {
    var G = br(function(B) {
      D(function() {
        return ni({
          client: B
        });
      });
    }), z = m({
      liftActionArgs: {
        id: i,
        clientSelection: O,
        movementMode: "FLUID"
      },
      cleanup: function() {
        return G.cancel();
      },
      actions: {
        move: G
      }
    });
    return k({}, z, {
      move: G
    });
  }
  function I() {
    var O = {
      moveUp: function() {
        return D(qs);
      },
      moveRight: function() {
        return D(Ks);
      },
      moveDown: function() {
        return D(zs);
      },
      moveLeft: function() {
        return D(Xs);
      }
    };
    return m({
      liftActionArgs: {
        id: i,
        clientSelection: Hc(f),
        movementMode: "SNAP"
      },
      cleanup: Ne,
      actions: O
    });
  }
  function y() {
    var O = Or({
      expected: "PRE_DRAG",
      phase: c,
      isLockActive: g,
      shouldWarn: !0
    });
    O && r.release();
  }
  var M = {
    isActive: function() {
      return Or({
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
  return M;
}
var ed = [Oc, Lc, jc];
function rd(e) {
  var r = e.contextId, t = e.store, n = e.registry, a = e.customSensors, i = e.enableDefaultSensors, o = [].concat(i ? ed : [], a || []), l = Yr(function() {
    return bc();
  })[0], s = L(function(x, I) {
    x.isDragging && !I.isDragging && l.tryAbandon();
  }, [l]);
  we(function() {
    var x = t.getState(), I = t.subscribe(function() {
      var y = t.getState();
      s(x, y), x = y;
    });
    return I;
  }, [l, t, s]), we(function() {
    return l.tryAbandon;
  }, [l.tryAbandon]);
  var d = L(function(m) {
    return Ei({
      lockAPI: l,
      registry: n,
      store: t,
      draggableId: m
    });
  }, [l, n, t]), f = L(function(m, x, I) {
    return Qc({
      lockAPI: l,
      registry: n,
      contextId: r,
      store: t,
      draggableId: m,
      forceSensorStop: x,
      sourceEvent: I && I.sourceEvent ? I.sourceEvent : null
    });
  }, [r, l, n, t]), u = L(function(m) {
    return Xc(r, m);
  }, [r]), c = L(function(m) {
    var x = n.draggable.findById(m);
    return x ? x.options : null;
  }, [n.draggable]), p = L(function() {
    !l.isClaimed() || (l.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(_t()));
  }, [l, t]), g = L(l.isClaimed, [l]), b = K(function() {
    return {
      canGetLock: d,
      tryGetLock: f,
      findClosestDraggableId: u,
      findOptionsForDraggable: c,
      tryReleaseLock: p,
      isLockClaimed: g
    };
  }, [d, f, u, c, p, g]);
  Uc(o);
  for (var D = 0; D < o.length; D++)
    o[D](b);
}
var td = function(r) {
  return {
    onBeforeCapture: r.onBeforeCapture,
    onBeforeDragStart: r.onBeforeDragStart,
    onDragStart: r.onDragStart,
    onDragEnd: r.onDragEnd,
    onDragUpdate: r.onDragUpdate
  };
};
function pr(e) {
  return e.current || C(!1, "Could not find store from lazy ref"), e.current;
}
function nd(e) {
  var r = e.contextId, t = e.setCallbacks, n = e.sensors, a = e.nonce, i = e.dragHandleUsageInstructions, o = re(null);
  mc();
  var l = nn(e), s = L(function() {
    return td(l.current);
  }, [l]), d = oc(r), f = cc({
    contextId: r,
    text: i
  }), u = ec(r, a), c = L(function(B) {
    pr(o).dispatch(B);
  }, []), p = K(function() {
    return wn({
      publishWhileDragging: js,
      updateDroppableScroll: $s,
      updateDroppableIsEnabled: Ys,
      updateDroppableIsCombineEnabled: Hs,
      collectionStarting: Us
    }, c);
  }, [c]), g = nc(), b = K(function() {
    return Bu(g, p);
  }, [g, p]), D = K(function() {
    return Ku(k({
      scrollWindow: Mu,
      scrollDroppable: b.scrollDroppable
    }, wn({
      move: ni
    }, c)));
  }, [b.scrollDroppable, c]), m = rc(r), x = K(function() {
    return Tu({
      announce: d,
      autoScroller: D,
      dimensionMarshal: b,
      focusMarshal: m,
      getResponders: s,
      styleMarshal: u
    });
  }, [d, D, b, m, s, u]);
  o.current && o.current !== x && se("unexpected store change"), o.current = x;
  var I = L(function() {
    var B = pr(o), V = B.getState();
    V.phase !== "IDLE" && B.dispatch(_t());
  }, []), y = L(function() {
    var B = pr(o).getState();
    return B.isDragging || B.phase === "DROP_ANIMATING";
  }, []), M = K(function() {
    return {
      isDragging: y,
      tryAbort: I
    };
  }, [y, I]);
  t(M);
  var O = L(function(B) {
    return di(pr(o).getState(), B);
  }, []), G = L(function() {
    return _e(pr(o).getState());
  }, []), z = K(function() {
    return {
      marshal: b,
      focus: m,
      contextId: r,
      canLift: O,
      isMovementAllowed: G,
      dragHandleUsageInstructionsId: f,
      registry: g
    };
  }, [r, b, f, m, O, G, g]);
  return rd({
    contextId: r,
    store: x,
    registry: g,
    customSensors: n,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), Be(function() {
    return I;
  }, [I]), le.createElement(zr.Provider, {
    value: z
  }, le.createElement(Ea, {
    context: en,
    store: x
  }, e.children));
}
var ad = 0;
function id() {
  return K(function() {
    return "" + ad++;
  }, []);
}
function od(e) {
  var r = id(), t = e.dragHandleUsageInstructions || Nr.dragHandleUsageInstructions;
  return le.createElement(Pl, null, function(n) {
    return le.createElement(nd, {
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
var on = function(r) {
  return function(t) {
    return r === t;
  };
}, ld = on("scroll"), sd = on("auto"), ud = on("visible"), la = function(r, t) {
  return t(r.overflowX) || t(r.overflowY);
}, cd = function(r, t) {
  return t(r.overflowX) && t(r.overflowY);
}, Ci = function(r) {
  var t = window.getComputedStyle(r), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return la(n, ld) || la(n, sd);
}, dd = function() {
  var r = Er(), t = document.documentElement;
  if (t || C(!1), !Ci(r))
    return !1;
  var n = window.getComputedStyle(t), a = {
    overflowX: n.overflowX,
    overflowY: n.overflowY
  };
  return cd(a, ud) || se(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, wi = function e(r) {
  return r == null ? null : r === document.body ? dd() ? r : null : r === document.documentElement ? null : Ci(r) ? r : e(r.parentElement);
}, fd = function(e) {
  if (!!e) {
    var r = wi(e.parentElement);
    !r || se(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
  }
}, Tt = function(e) {
  return {
    x: e.scrollLeft,
    y: e.scrollTop
  };
}, pd = function e(r) {
  if (!r)
    return !1;
  var t = window.getComputedStyle(r);
  return t.position === "fixed" ? !0 : e(r.parentElement);
}, vd = function(e) {
  var r = wi(e), t = pd(e);
  return {
    closestScrollable: r,
    isFixedOnPage: t
  };
}, gd = function(e) {
  var r = e.descriptor, t = e.isEnabled, n = e.isCombineEnabled, a = e.isFixedOnPage, i = e.direction, o = e.client, l = e.page, s = e.closest, d = function() {
    if (!s)
      return null;
    var p = s.scrollSize, g = s.client, b = si({
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
        max: b,
        diff: {
          value: pe,
          displacement: pe
        }
      }
    };
  }(), f = i === "vertical" ? Ut : $a, u = rr({
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
}, md = function(r, t) {
  var n = Ba(r);
  if (!t || r !== t)
    return n;
  var a = n.paddingBox.top - t.scrollTop, i = n.paddingBox.left - t.scrollLeft, o = a + t.scrollHeight, l = i + t.scrollWidth, s = {
    top: a,
    right: l,
    bottom: o,
    left: i
  }, d = Ft(s, n.border), f = Gt({
    borderBox: d,
    margin: n.margin,
    border: n.border,
    padding: n.padding
  });
  return f;
}, bd = function(e) {
  var r = e.ref, t = e.descriptor, n = e.env, a = e.windowScroll, i = e.direction, o = e.isDropDisabled, l = e.isCombineEnabled, s = e.shouldClipSubject, d = n.closestScrollable, f = md(r, d), u = Gr(f, a), c = function() {
    if (!d)
      return null;
    var g = Ba(d), b = {
      scrollHeight: d.scrollHeight,
      scrollWidth: d.scrollWidth
    };
    return {
      client: g,
      page: Gr(g, a),
      scroll: Tt(d),
      scrollSize: b,
      shouldClipSubject: s
    };
  }(), p = gd({
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
}, hd = {
  passive: !1
}, yd = {
  passive: !0
}, sa = function(e) {
  return e.shouldPublishImmediately ? hd : yd;
};
function $r(e) {
  var r = Rt(e);
  return r || C(!1, "Could not find required context"), r;
}
var Br = function(r) {
  return r && r.env.closestScrollable || null;
};
function Dd(e) {
  var r = re(null), t = $r(zr), n = rn("droppable"), a = t.registry, i = t.marshal, o = nn(e), l = K(function() {
    return {
      id: e.droppableId,
      type: e.type,
      mode: e.mode
    };
  }, [e.droppableId, e.mode, e.type]), s = re(l), d = K(function() {
    return fe(function(y, M) {
      r.current || C(!1, "Can only update scroll when dragging");
      var O = {
        x: y,
        y: M
      };
      i.updateDroppableScroll(l.id, O);
    });
  }, [l.id, i]), f = L(function() {
    var y = r.current;
    return !y || !y.env.closestScrollable ? pe : Tt(y.env.closestScrollable);
  }, []), u = L(function() {
    var y = f();
    d(y.x, y.y);
  }, [f, d]), c = K(function() {
    return br(u);
  }, [u]), p = L(function() {
    var y = r.current, M = Br(y);
    y && M || C(!1, "Could not find scroll options while scrolling");
    var O = y.scrollOptions;
    if (O.shouldPublishImmediately) {
      u();
      return;
    }
    c();
  }, [c, u]), g = L(function(y, M) {
    r.current && C(!1, "Cannot collect a droppable while a drag is occurring");
    var O = o.current, G = O.getDroppableRef();
    G || C(!1, "Cannot collect without a droppable ref");
    var z = vd(G), B = {
      ref: G,
      descriptor: l,
      env: z,
      scrollOptions: M
    };
    r.current = B;
    var V = bd({
      ref: G,
      descriptor: l,
      env: z,
      windowScroll: y,
      direction: O.direction,
      isDropDisabled: O.isDropDisabled,
      isCombineEnabled: O.isCombineEnabled,
      shouldClipSubject: !O.ignoreContainerClipping
    }), J = z.closestScrollable;
    return J && (J.setAttribute(ta.contextId, t.contextId), J.addEventListener("scroll", p, sa(B.scrollOptions)), fd(J)), V;
  }, [t.contextId, l, p, o]), b = L(function() {
    var y = r.current, M = Br(y);
    return y && M || C(!1, "Can only recollect Droppable client for Droppables that have a scroll container"), Tt(M);
  }, []), D = L(function() {
    var y = r.current;
    y || C(!1, "Cannot stop drag when no active drag");
    var M = Br(y);
    r.current = null, M && (c.cancel(), M.removeAttribute(ta.contextId), M.removeEventListener("scroll", p, sa(y.scrollOptions)));
  }, [p, c]), m = L(function(y) {
    var M = r.current;
    M || C(!1, "Cannot scroll when there is no drag");
    var O = Br(M);
    O || C(!1, "Cannot scroll a droppable with no closest scrollable"), O.scrollTop += y.y, O.scrollLeft += y.x;
  }, []), x = K(function() {
    return {
      getDimensionAndWatchScroll: g,
      getScrollWhileDragging: b,
      dragStopped: D,
      scroll: m
    };
  }, [D, g, b, m]), I = K(function() {
    return {
      uniqueId: n,
      descriptor: l,
      callbacks: x
    };
  }, [x, l, n]);
  we(function() {
    return s.current = I.descriptor, a.droppable.register(I), function() {
      r.current && (se("Unsupported: changing the droppableId or type of a Droppable during a drag"), D()), a.droppable.unregister(I);
    };
  }, [x, l, D, I, i, a.droppable]), we(function() {
    !r.current || i.updateDroppableIsEnabled(s.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), we(function() {
    !r.current || i.updateDroppableIsCombineEnabled(s.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function vt() {
}
var ua = {
  width: 0,
  height: 0,
  margin: Ml
}, xd = function(r) {
  var t = r.isAnimatingOpenOnMount, n = r.placeholder, a = r.animate;
  return t || a === "close" ? ua : {
    height: n.client.borderBox.height,
    width: n.client.borderBox.width,
    margin: n.client.margin
  };
}, Ed = function(r) {
  var t = r.isAnimatingOpenOnMount, n = r.placeholder, a = r.animate, i = xd({
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
    transition: a !== "none" ? gr.placeholder : null
  };
};
function Cd(e) {
  var r = re(null), t = L(function() {
    !r.current || (clearTimeout(r.current), r.current = null);
  }, []), n = e.animate, a = e.onTransitionEnd, i = e.onClose, o = e.contextId, l = Yr(e.animate === "open"), s = l[0], d = l[1];
  Be(function() {
    return s ? n !== "open" ? (t(), d(!1), vt) : r.current ? vt : (r.current = setTimeout(function() {
      r.current = null, d(!1);
    }), t) : vt;
  }, [n, s, t]);
  var f = L(function(c) {
    c.propertyName === "height" && (a(), n === "close" && i());
  }, [n, i, a]), u = Ed({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return le.createElement(e.placeholder.tagName, {
    style: u,
    "data-rbd-placeholder-context-id": o,
    onTransitionEnd: f,
    ref: e.innerRef
  });
}
var wd = le.memo(Cd), ln = le.createContext(null);
function Si(e) {
  e && Sr(e) || C(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/using-inner-ref.md
  `);
}
function gt(e) {
  return typeof e == "boolean";
}
function mt(e, r) {
  r.forEach(function(t) {
    return t(e);
  });
}
var Sd = [function(r) {
  var t = r.props;
  t.droppableId || C(!1, "A Droppable requires a droppableId prop"), typeof t.droppableId != "string" && C(!1, "A Droppable requires a [string] droppableId. Provided: [" + typeof t.droppableId + "]");
}, function(r) {
  var t = r.props;
  gt(t.isDropDisabled) || C(!1, "isDropDisabled must be a boolean"), gt(t.isCombineEnabled) || C(!1, "isCombineEnabled must be a boolean"), gt(t.ignoreContainerClipping) || C(!1, "ignoreContainerClipping must be a boolean");
}, function(r) {
  var t = r.getDroppableRef;
  Si(t());
}], Id = [function(r) {
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
}], Pd = [function(r) {
  var t = r.props;
  t.renderClone || C(!1, "Must provide a clone render function (renderClone) for virtual lists");
}, function(r) {
  var t = r.getPlaceholderRef;
  t() && C(!1, "Expected virtual list to not have a placeholder");
}];
function Td(e) {
  Ir(function() {
    mt(e, Sd), e.props.mode === "standard" && mt(e, Id), e.props.mode === "virtual" && mt(e, Pd);
  });
}
var Rd = function(e) {
  pa(r, e);
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
}(le.PureComponent), ca = {
  dragging: 5e3,
  dropAnimating: 4500
}, Ad = function(r, t) {
  return t ? gr.drop(t.duration) : r ? gr.snap : gr.fluid;
}, Od = function(r, t) {
  return r ? t ? xr.opacity.drop : xr.opacity.combining : null;
}, Bd = function(r) {
  return r.forceShouldAnimate != null ? r.forceShouldAnimate : r.mode === "SNAP";
};
function Md(e) {
  var r = e.dimension, t = r.client, n = e.offset, a = e.combineWith, i = e.dropping, o = Boolean(a), l = Bd(e), s = Boolean(i), d = s ? St.drop(n, o) : St.moveTo(n), f = {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: Ad(l, i),
    transform: d,
    opacity: Od(o, s),
    zIndex: s ? ca.dropAnimating : ca.dragging,
    pointerEvents: "none"
  };
  return f;
}
function Nd(e) {
  return {
    transform: St.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? null : "none"
  };
}
function Ld(e) {
  return e.type === "DRAGGING" ? Md(e) : Nd(e);
}
function Fd(e, r, t) {
  t === void 0 && (t = pe);
  var n = window.getComputedStyle(r), a = r.getBoundingClientRect(), i = Oa(a, n), o = Gr(i, t), l = {
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
function Gd(e) {
  var r = rn("draggable"), t = e.descriptor, n = e.registry, a = e.getDraggableRef, i = e.canDragInteractiveElements, o = e.shouldRespectForcePress, l = e.isEnabled, s = K(function() {
    return {
      canDragInteractiveElements: i,
      shouldRespectForcePress: o,
      isEnabled: l
    };
  }, [i, l, o]), d = L(function(p) {
    var g = a();
    return g || C(!1, "Cannot get dimension when no ref is set"), Fd(t, g, p);
  }, [t, a]), f = K(function() {
    return {
      uniqueId: r,
      descriptor: t,
      options: s,
      getDimension: d
    };
  }, [t, d, s, r]), u = re(f), c = re(!0);
  we(function() {
    return n.draggable.register(u.current), function() {
      return n.draggable.unregister(u.current);
    };
  }, [n.draggable]), we(function() {
    if (c.current) {
      c.current = !1;
      return;
    }
    var p = u.current;
    u.current = f, n.draggable.update(f, p);
  }, [f, n.draggable]);
}
function Wd(e, r, t) {
  Ir(function() {
    function n(i) {
      return "Draggable[id: " + i + "]: ";
    }
    var a = e.draggableId;
    a || C(!1, "Draggable requires a draggableId"), typeof a != "string" && C(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ` + typeof a + "] (value: " + a + ")"), Gl(e.index) || C(!1, n(a) + " requires an integer index prop"), e.mapped.type !== "DRAGGING" && (Si(t()), e.isEnabled && (mi(r, a) || C(!1, n(a) + " Unable to find drag handle")));
  });
}
function kd(e) {
  tn(function() {
    var r = re(e);
    Ir(function() {
      e !== r.current && C(!1, "Draggable isClone prop value changed during component life");
    }, [e]);
  });
}
function jd(e) {
  e.preventDefault();
}
function Ud(e) {
  var r = re(null), t = L(function(B) {
    r.current = B;
  }, []), n = L(function() {
    return r.current;
  }, []), a = $r(zr), i = a.contextId, o = a.dragHandleUsageInstructionsId, l = a.registry, s = $r(ln), d = s.type, f = s.droppableId, u = K(function() {
    return {
      id: e.draggableId,
      index: e.index,
      type: d,
      droppableId: f
    };
  }, [e.draggableId, e.index, d, f]), c = e.children, p = e.draggableId, g = e.isEnabled, b = e.shouldRespectForcePress, D = e.canDragInteractiveElements, m = e.isClone, x = e.mapped, I = e.dropAnimationFinished;
  if (Wd(e, i, n), kd(m), !m) {
    var y = K(function() {
      return {
        descriptor: u,
        registry: l,
        getDraggableRef: n,
        canDragInteractiveElements: D,
        shouldRespectForcePress: b,
        isEnabled: g
      };
    }, [u, l, n, D, b, g]);
    Gd(y);
  }
  var M = K(function() {
    return g ? {
      tabIndex: 0,
      role: "button",
      "aria-describedby": o,
      "data-rbd-drag-handle-draggable-id": p,
      "data-rbd-drag-handle-context-id": i,
      draggable: !1,
      onDragStart: jd
    } : null;
  }, [i, o, p, g]), O = L(function(B) {
    x.type === "DRAGGING" && (!x.dropping || B.propertyName === "transform" && I());
  }, [I, x]), G = K(function() {
    var B = Ld(x), V = x.type === "DRAGGING" && x.dropping ? O : null, J = {
      innerRef: t,
      draggableProps: {
        "data-rbd-draggable-context-id": i,
        "data-rbd-draggable-id": p,
        style: B,
        onTransitionEnd: V
      },
      dragHandleProps: M
    };
    return J;
  }, [i, M, p, x, O, t]), z = K(function() {
    return {
      draggableId: u.id,
      type: u.type,
      source: {
        index: u.index,
        droppableId: u.droppableId
      }
    };
  }, [u.droppableId, u.id, u.index, u.type]);
  return c(G, x.snapshot, z);
}
var Ii = function(e, r) {
  return e === r;
}, Pi = function(e) {
  var r = e.combine, t = e.destination;
  return t ? t.droppableId : r ? r.droppableId : null;
}, $d = function(r) {
  return r.combine ? r.combine.draggableId : null;
}, Yd = function(r) {
  return r.at && r.at.type === "COMBINE" ? r.at.combine.draggableId : null;
};
function Hd() {
  var e = fe(function(a, i) {
    return {
      x: a,
      y: i
    };
  }), r = fe(function(a, i, o, l, s) {
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
  }), t = fe(function(a, i, o, l, s, d, f) {
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
      var l = i.current.client.offset, s = i.dimensions.draggables[o.draggableId], d = Ce(i.impact), f = Yd(i.impact), u = i.forceShouldAnimate;
      return t(e(l.x, l.y), i.movementMode, s, o.isClone, d, f, u);
    }
    if (i.phase === "DROP_ANIMATING") {
      var c = i.completed;
      if (c.result.draggableId !== o.draggableId)
        return null;
      var p = o.isClone, g = i.dimensions.draggables[o.draggableId], b = c.result, D = b.mode, m = Pi(b), x = $d(b), I = i.dropDuration, y = {
        duration: I,
        curve: zt.drop,
        moveTo: i.newHomeClientOffset,
        opacity: x ? xr.opacity.drop : null,
        scale: x ? xr.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: i.newHomeClientOffset,
          dimension: g,
          dropping: y,
          draggingOver: m,
          combineWith: x,
          mode: D,
          forceShouldAnimate: null,
          snapshot: r(D, p, m, x, y)
        }
      };
    }
    return null;
  };
  return n;
}
function Ti(e) {
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
var Vd = {
  mapped: {
    type: "SECONDARY",
    offset: pe,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Ti(null)
  }
};
function _d() {
  var e = fe(function(o, l) {
    return {
      x: o,
      y: l
    };
  }), r = fe(Ti), t = fe(function(o, l, s) {
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
    return l ? t(pe, l, !0) : null;
  }, a = function(l, s, d, f) {
    var u = d.displaced.visible[l], c = Boolean(f.inVirtualList && f.effected[l]), p = Vr(d), g = p && p.draggableId === l ? s : null;
    if (!u) {
      if (!c)
        return n(g);
      if (d.displaced.invisible[l])
        return null;
      var b = ar(f.displacedBy.point), D = e(b.x, b.y);
      return t(D, g, !0);
    }
    if (c)
      return n(g);
    var m = d.displacedBy.point, x = e(m.x, m.y);
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
var qd = function() {
  var r = Hd(), t = _d(), n = function(i, o) {
    return r(i, o) || t(i, o) || Vd;
  };
  return n;
}, zd = {
  dropAnimationFinished: ii
}, Kd = Ra(qd, zd, null, {
  context: en,
  pure: !0,
  areStatePropsEqual: Ii
})(Ud);
function Ri(e) {
  var r = $r(ln), t = r.isUsingCloneFor;
  return t === e.draggableId && !e.isClone ? null : le.createElement(Kd, e);
}
function Xd(e) {
  var r = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, t = Boolean(e.disableInteractiveElementBlocking), n = Boolean(e.shouldRespectForcePress);
  return le.createElement(Ri, k({}, e, {
    isClone: !1,
    isEnabled: r,
    canDragInteractiveElements: t,
    shouldRespectForcePress: n
  }));
}
function Jd(e) {
  var r = Rt(zr);
  r || C(!1, "Could not find app context");
  var t = r.contextId, n = r.isMovementAllowed, a = re(null), i = re(null), o = e.children, l = e.droppableId, s = e.type, d = e.mode, f = e.direction, u = e.ignoreContainerClipping, c = e.isDropDisabled, p = e.isCombineEnabled, g = e.snapshot, b = e.useClone, D = e.updateViewportMaxScroll, m = e.getContainerForClone, x = L(function() {
    return a.current;
  }, []), I = L(function(te) {
    a.current = te;
  }, []), y = L(function() {
    return i.current;
  }, []), M = L(function(te) {
    i.current = te;
  }, []);
  Td({
    props: e,
    getDroppableRef: x,
    getPlaceholderRef: y
  });
  var O = L(function() {
    n() && D({
      maxScroll: ci()
    });
  }, [n, D]);
  Dd({
    droppableId: l,
    type: s,
    mode: d,
    direction: f,
    isDropDisabled: c,
    isCombineEnabled: p,
    ignoreContainerClipping: u,
    getDroppableRef: x
  });
  var G = le.createElement(Rd, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, function(te) {
    var E = te.onClose, S = te.data, A = te.animate;
    return le.createElement(wd, {
      placeholder: S,
      onClose: E,
      innerRef: M,
      animate: A,
      contextId: t,
      onTransitionEnd: O
    });
  }), z = K(function() {
    return {
      innerRef: I,
      placeholder: G,
      droppableProps: {
        "data-rbd-droppable-id": l,
        "data-rbd-droppable-context-id": t
      }
    };
  }, [t, l, G, I]), B = b ? b.dragging.draggableId : null, V = K(function() {
    return {
      droppableId: l,
      type: s,
      isUsingCloneFor: B
    };
  }, [l, B, s]);
  function J() {
    if (!b)
      return null;
    var te = b.dragging, E = b.render, S = le.createElement(Ri, {
      draggableId: te.draggableId,
      index: te.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, function(A, N) {
      return E(A, N, te);
    });
    return zi.createPortal(S, m());
  }
  return le.createElement(ln.Provider, {
    value: V
  }, o(z, g), J());
}
var bt = function(r, t) {
  return r === t.droppable.type;
}, da = function(r, t) {
  return t.draggables[r.draggable.id];
}, Zd = function() {
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
  }, t = k({}, r, {
    shouldAnimatePlaceholder: !1
  }), n = fe(function(o) {
    return {
      draggableId: o.id,
      type: o.type,
      source: {
        index: o.index,
        droppableId: o.droppableId
      }
    };
  }), a = fe(function(o, l, s, d, f, u) {
    var c = f.descriptor.id, p = f.descriptor.droppableId === o;
    if (p) {
      var g = u ? {
        render: u,
        dragging: n(f.descriptor)
      } : null, b = {
        isDraggingOver: s,
        draggingOverWith: s ? c : null,
        draggingFromThisWith: c,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: f.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: b,
        useClone: g
      };
    }
    if (!l)
      return t;
    if (!d)
      return r;
    var D = {
      isDraggingOver: s,
      draggingOverWith: c,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: f.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: D,
      useClone: null
    };
  }), i = function(l, s) {
    var d = s.droppableId, f = s.type, u = !s.isDropDisabled, c = s.renderClone;
    if (l.isDragging) {
      var p = l.critical;
      if (!bt(f, p))
        return t;
      var g = da(p, l.dimensions), b = Ce(l.impact) === d;
      return a(d, u, b, b, g, c);
    }
    if (l.phase === "DROP_ANIMATING") {
      var D = l.completed;
      if (!bt(f, D.critical))
        return t;
      var m = da(D.critical, l.dimensions);
      return a(d, u, Pi(D.result) === d, Ce(D.impact) === d, m, c);
    }
    if (l.phase === "IDLE" && l.completed && !l.shouldFlush) {
      var x = l.completed;
      if (!bt(f, x.critical))
        return t;
      var I = Ce(x.impact) === d, y = Boolean(x.impact.at && x.impact.at.type === "COMBINE"), M = x.critical.droppable.id === d;
      return I ? y ? r : t : M ? r : t;
    }
    return t;
  };
  return i;
}, Qd = {
  updateViewportMaxScroll: _s
};
function ef() {
  return document.body || C(!1, "document.body is not ready"), document.body;
}
var rf = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: ef
}, Ai = Ra(Zd, Qd, null, {
  context: en,
  pure: !0,
  areStatePropsEqual: Ii
})(Jd);
Ai.defaultProps = rf;
const af = ({}) => {
  const [e, r] = Yr([
    {
      slug: "1",
      title: "Test 1"
    },
    {
      slug: "2",
      title: "Test 2"
    },
    {
      slug: "3",
      title: "Test 3"
    }
  ]), t = (a, i, o) => {
    const l = Array.from(a), [s] = l.splice(i, 1);
    return l.splice(o, 0, s), l;
  };
  return /* @__PURE__ */ Pr(od, { onDragEnd: (a) => {
    if (!a.destination)
      return;
    const i = t(e, a.source.index, a.destination.index);
    r(i);
  }, children: /* @__PURE__ */ Pr(Ai, { droppableId: "droppable", children: (a, i) => /* @__PURE__ */ Xi("div", { ref: a.innerRef, ...a.droppableProps, children: [
    e.map((o, l) => /* @__PURE__ */ Pr(Xd, { draggableId: o.slug, index: l, children: (s, d) => /* @__PURE__ */ Pr(
      "div",
      {
        ref: s.innerRef,
        ...s.draggableProps,
        ...s.dragHandleProps,
        children: o.title
      }
    ) }, o.slug)),
    a.placeholder
  ] }) }) });
};
export {
  af as DragAndDrop
};
