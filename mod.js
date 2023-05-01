// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,c=e.__lookupGetter__,a=e.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,n){var f,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(c.call(t,r)||a.call(t,r)?(f=t.__proto__,t.__proto__=e,delete t[r],t[r]=n.value,t.__proto__=f):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,r,n.get),p&&i&&i.call(t,r,n.set),t};var f=r;function l(t,r,n){f(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function p(t){return"boolean"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,r){return null!=t&&d.call(t,r)}var j="function"==typeof Symbol?Symbol.toStringTag:"";var g=s()?function(t){var r,n,e;if(null==t)return v.call(t);n=t[j],r=m(t,j);try{t[j]=void 0}catch(r){return v.call(t)}return e=v.call(t),r?t[j]=n:delete t[j],e}:function(t){return v.call(t)},_=Boolean.prototype.toString;var w=s();function h(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===g(t)))}function O(t){return p(t)||h(t)}function S(){return new Function("return this;")()}l(O,"isPrimitive",p),l(O,"isObject",h);var E="object"==typeof self?self:null,P="object"==typeof window?window:null,N="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},A="object"==typeof N?N:null;var T=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(E)return E;if(P)return P;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),x=T.document&&T.document.childNodes,B=Int8Array;function V(){return/^\s*function\s*([^(]*)/i}var F=/^\s*function\s*([^(]*)/i;l(V,"REGEXP",F);var k=Array.isArray?Array.isArray:function(t){return"[object Array]"===g(t)};function C(t){return null!==t&&"object"==typeof t}function G(t){var r,n,e,o;if(("Object"===(n=g(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=F.exec(e.toString()))return r[1]}return C(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(C,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!k(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(C));var L="function"==typeof y||"object"==typeof B||"function"==typeof x?function(t){return G(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?G(t).toLowerCase():r};function M(t){return"function"===L(t)}function q(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&M(t.next)}function I(t){return"number"==typeof t}var R=Number,U=R.prototype.toString;var X=s();function z(t){return"object"==typeof t&&(t instanceof R||(X?function(t){try{return U.call(t),!0}catch(t){return!1}}(t):"[object Number]"===g(t)))}function D(t){return I(t)||z(t)}l(D,"isPrimitive",I),l(D,"isObject",z);var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var J,K=Object.getPrototypeOf;J=M(Object.getPrototypeOf)?K:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===g(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Q=J;var W=Object.prototype;function Y(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!k(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),Q(t))}(t),!r||!m(t,"constructor")&&m(r,"constructor")&&M(r.constructor)&&"[object Function]"===g(r.constructor)&&m(r,"isPrototypeOf")&&M(r.isPrototypeOf)&&(r===W||function(t){var r;for(r in t)if(!m(t,r))return!1;return!0}(t)))}function Z(t,r){return Y(r)?(m(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")}function $(t,r,n){var e,o,u,i;if(!q(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!M(r))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+r+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,n)))throw u;return l(o={},"next",c),l(o,"return",a),H&&M(t[H])&&l(o,H,f),o;function c(){var n;return i?{done:!0}:(n=t.next()).done?(i=!0,n):{value:I(n.value)?r(n.value):e.invalid,done:!1}}function a(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function f(){return $(t[H](),r,e)}}function tt(t){return t!=t}var rt=Math.sqrt,nt=.7853981633974483;function et(t){var r,n,e,o,u;if(tt(t))return NaN;if(t>0?e=t:(r=!0,e=-t),e>1)return NaN;if(e>.625)o=(n=1-e)*function(t){var r,n;return 0===t?.08333333333333809:((t<0?-t:t)<=1?(r=28.536655482610616+t*(t*(6.968710824104713+t*(.002967721961301243*t-.5634242780008963))-25.56901049652825),n=342.43986579130785+t*(t*(147.0656354026815+t*(1*t-21.947795316429207))-383.8770957603691)):(r=.002967721961301243+(t=1/t)*(t*(6.968710824104713+t*(28.536655482610616*t-25.56901049652825))-.5634242780008963),n=1+t*(t*(147.0656354026815+t*(342.43986579130785*t-383.8770957603691))-21.947795316429207)),r/n)}(n),n=rt(n+n),u=nt-n,u-=n=n*o-6123233995736766e-32,u+=nt;else{if(e<1e-8)return t;u=(n=e*e)*function(t){var r,n;return 0===t?.16666666666666713:((t<0?-t:t)<=1?(r=t*(19.562619833175948+t*(t*(5.444622390564711+t*(.004253011369004428*t-.6019598008014124))-16.262479672107002))-8.198089802484825,n=t*(139.51056146574857+t*(t*(70.49610280856842+t*(1*t-14.740913729888538))-147.1791292232726))-49.18853881490881):(r=.004253011369004428+(t=1/t)*(t*(5.444622390564711+t*(t*(19.562619833175948+-8.198089802484825*t)-16.262479672107002))-.6019598008014124),n=1+t*(t*(70.49610280856842+t*(t*(139.51056146574857+-49.18853881490881*t)-147.1791292232726))-14.740913729888538)),r/n)}(n),u=e*u+e}return r?-u:u}function ot(t){return function(t){var r;return tt(t)||t<-1||t>1?NaN:t>.5?2*et(rt(.5-.5*t)):(r=nt-et(t),r+=6123233995736766e-32,r+=nt)}(1+t)}function ut(t){return $(t,ot)}export{ut as default};
//# sourceMappingURL=mod.js.map
