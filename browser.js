// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterAvercos=r()}(this,(function(){"use strict";function t(t){var r=t.default;if("function"==typeof r){var e=function(){return r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(t){return!1}},n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,c=o.__lookupGetter__,f=o.__lookupSetter__;var l=function(t,r,e){var n,l,p,v;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(c.call(t,r)||f.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,v="set"in e,l&&(p||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,e.get),v&&a&&a.call(t,r,e.set),t},p=n,v=l,y=e()?p:v;var b=function(t,r,e){y(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})},s=b,d=/./;var m=function(t){return"boolean"==typeof t};var j=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var g=function(){return j&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,w=_;var O=function(t){return w.call(t)},h=Object.prototype.hasOwnProperty;var S=function(t,r){return null!=t&&h.call(t,r)},P="function"==typeof Symbol?Symbol.toStringTag:"",E=S,N=P,T=_;var A=O,x=function(t){var r,e,n;if(null==t)return T.call(t);e=t[N],r=E(t,N);try{t[N]=void 0}catch(r){return T.call(t)}return n=T.call(t),r?t[N]=e:delete t[N],n},B=g()?x:A,V=Boolean.prototype.toString;var F=B,k=function(t){try{return V.call(t),!0}catch(t){return!1}},G=g();var M=function(t){return"object"==typeof t&&(t instanceof Boolean||(G?k(t):"[object Boolean]"===F(t)))},C=m,L=M;var R=s,X=function(t){return C(t)||L(t)},q=M;R(X,"isPrimitive",m),R(X,"isObject",q);var z=X;var D=function(){return new Function("return this;")()},I="object"==typeof self?self:null,U="object"==typeof window?window:null,H="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},J="object"==typeof H?H:null;module.exports=J;var K=z.isPrimitive,Q=D,W=I,Y=U,Z=t(Object.freeze({__proto__:null}));var $=function(t){if(arguments.length){if(!K(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return Q()}if(W)return W;if(Y)return Y;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},tt=$(),rt=tt.document&&tt.document.childNodes,et=Int8Array,nt=d,ot=rt,ut=et;var it=function(){return"function"==typeof nt||"object"==typeof ut||"function"==typeof ot};var at=function(){return/^\s*function\s*([^(]*)/i},ct=at;s(ct,"REGEXP",at());var ft=ct,lt=B;var pt=Array.isArray?Array.isArray:function(t){return"[object Array]"===lt(t)},vt=pt;var yt=function(t){return null!==t&&"object"==typeof t};s(yt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!vt(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(yt));var bt=yt;var st=B,dt=ft.REGEXP,mt=function(t){return bt(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var jt=function(t){var r,e,n;if(("Object"===(e=st(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=dt.exec(n.toString()))return r[1]}return mt(t)?"Buffer":e},gt=jt;var _t=jt;var wt=function(t){var r;return null===t?"null":"object"===(r=typeof t)?gt(t).toLowerCase():r},Ot=function(t){return _t(t).toLowerCase()},ht=it()?Ot:wt;var St=function(t){return"function"===ht(t)},Pt=St;var Et=function(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&Pt(t.next)};var Nt=function(t){return"number"==typeof t},Tt=Number,At=Tt.prototype.toString;var xt=B,Bt=Tt,Vt=function(t){try{return At.call(t),!0}catch(t){return!1}},Ft=g();var kt=function(t){return"object"==typeof t&&(t instanceof Bt||(Ft?Vt(t):"[object Number]"===xt(t)))},Gt=Nt,Mt=kt;var Ct=s,Lt=function(t){return Gt(t)||Mt(t)},Rt=kt;Ct(Lt,"isPrimitive",Nt),Ct(Lt,"isObject",Rt);var Xt=Lt,qt=S;var zt=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&qt(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Dt=pt;var It=function(t){return"object"==typeof t&&null!==t&&!Dt(t)},Ut=Object.getPrototypeOf;var Ht=function(t){return t.__proto__},Jt=B,Kt=Ht;var Qt=function(t){var r=Kt(t);return r||null===r?r:"[object Function]"===Jt(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},Wt=Ut,Yt=Qt,Zt=St(Object.getPrototypeOf)?Wt:Yt;var $t=It,tr=St,rr=function(t){return null==t?null:(t=Object(t),Zt(t))},er=S,nr=B,or=Object.prototype;var ur=function(t){var r;return!!$t(t)&&(!(r=rr(t))||!er(t,"constructor")&&er(r,"constructor")&&tr(r.constructor)&&"[object Function]"===nr(r.constructor)&&er(r,"isPrototypeOf")&&tr(r.isPrototypeOf)&&(r===or||function(t){var r;for(r in t)if(!er(t,r))return!1;return!0}(t)))},ir=ur,ar=S;var cr=s,fr=St,lr=Et,pr=Xt.isPrimitive,vr=zt,yr=function(t,r){return ir(r)?(ar(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")};var br=function t(r,e,n){var o,u,i,a;if(!lr(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!fr(e))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+e+"`.");if(o={invalid:NaN},arguments.length>2&&(i=yr(o,n)))throw i;return cr(u={},"next",c),cr(u,"return",f),vr&&fr(r[vr])&&cr(u,vr,l),u;function c(){var t;return a?{done:!0}:(t=r.next()).done?(a=!0,t):{value:pr(t.value)?e(t.value):o.invalid,done:!1}}function f(t){return a=!0,arguments.length?{value:t,done:!0}:{done:!0}}function l(){return t(r[vr](),e,o)}},sr=br;var dr=function(t){return t!=t},mr=Math.sqrt,jr=.7853981633974483;var gr=dr,_r=mr,wr=jr,Or=function(t){var r,e;return 0===t?.16666666666666713:((t<0?-t:t)<=1?(r=t*(19.562619833175948+t*(t*(5.444622390564711+t*(.004253011369004428*t-.6019598008014124))-16.262479672107002))-8.198089802484825,e=t*(139.51056146574857+t*(t*(70.49610280856842+t*(1*t-14.740913729888538))-147.1791292232726))-49.18853881490881):(r=.004253011369004428+(t=1/t)*(t*(5.444622390564711+t*(t*(19.562619833175948+-8.198089802484825*t)-16.262479672107002))-.6019598008014124),e=1+t*(t*(70.49610280856842+t*(t*(139.51056146574857+-49.18853881490881*t)-147.1791292232726))-14.740913729888538)),r/e)},hr=function(t){var r,e;return 0===t?.08333333333333809:((t<0?-t:t)<=1?(r=28.536655482610616+t*(t*(6.968710824104713+t*(.002967721961301243*t-.5634242780008963))-25.56901049652825),e=342.43986579130785+t*(t*(147.0656354026815+t*(1*t-21.947795316429207))-383.8770957603691)):(r=.002967721961301243+(t=1/t)*(t*(6.968710824104713+t*(28.536655482610616*t-25.56901049652825))-.5634242780008963),e=1+t*(t*(147.0656354026815+t*(342.43986579130785*t-383.8770957603691))-21.947795316429207)),r/e)};var Sr=dr,Pr=function(t){var r,e,n,o,u;if(gr(t))return NaN;if(t>0?n=t:(r=!0,n=-t),n>1)return NaN;if(n>.625)o=(e=1-n)*hr(e),e=_r(e+e),u=wr-e,u-=e=e*o-6123233995736766e-32,u+=wr;else{if(n<1e-8)return t;u=n*(u=(e=n*n)*Or(e))+n}return r?-u:u},Er=mr,Nr=jr;var Tr=function(t){var r;return Sr(t)||t<-1||t>1?NaN:t>.5?2*Pr(Er(.5-.5*t)):(r=Nr-Pr(t),r+=6123233995736766e-32,r+=Nr)};var Ar=function(t){return Tr(1+t)};return function(t){return sr(t,Ar)}}));
//# sourceMappingURL=browser.js.map
