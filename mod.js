// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){var t=r.default;if("function"==typeof t){var e=function(){return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return t({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,c=o.__lookupGetter__,f=o.__lookupSetter__;var l=function(r,t,e){var n,l,v,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(c.call(r,t)||f.call(r,t)?(n=r.__proto__,r.__proto__=o,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),v="get"in e,p="set"in e,l&&(v||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&i&&i.call(r,t,e.get),p&&a&&a.call(r,t,e.set),r},v=n,p=l,y=e()?v:p;var b=function(r,t,e){y(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},s=b,d=/./;var m=function(r){return"boolean"==typeof r};var j=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var _=function(){return j&&"symbol"==typeof Symbol.toStringTag},g=Object.prototype.toString,w=g;var O=function(r){return w.call(r)},h=Object.prototype.hasOwnProperty;var S=function(r,t){return null!=r&&h.call(r,t)},P="function"==typeof Symbol?Symbol.toStringTag:"",E=S,N=P,A=g;var T=O,x=function(r){var t,e,n;if(null==r)return A.call(r);e=r[N],t=E(r,N);try{r[N]=void 0}catch(t){return A.call(r)}return n=A.call(r),t?r[N]=e:delete r[N],n},B=_()?x:T,V=Boolean.prototype.toString;var F=B,k=function(r){try{return V.call(r),!0}catch(r){return!1}},G=_();var M=function(r){return"object"==typeof r&&(r instanceof Boolean||(G?k(r):"[object Boolean]"===F(r)))},C=m,L=M;var R=s,X=function(r){return C(r)||L(r)},q=M;R(X,"isPrimitive",m),R(X,"isObject",q);var z=X;var D=function(){return new Function("return this;")()},I="object"==typeof self?self:null,U="object"==typeof window?window:null,H="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},J="object"==typeof H?H:null;module.exports=J;var K=z.isPrimitive,Q=D,W=I,Y=U,Z=r(Object.freeze({__proto__:null}));var $=function(r){if(arguments.length){if(!K(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Q()}if(W)return W;if(Y)return Y;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},rr=$(),tr=rr.document&&rr.document.childNodes,er=Int8Array,nr=d,or=tr,ur=er;var ir=function(){return"function"==typeof nr||"object"==typeof ur||"function"==typeof or};var ar=function(){return/^\s*function\s*([^(]*)/i},cr=ar;s(cr,"REGEXP",ar());var fr=cr,lr=B;var vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===lr(r)},pr=vr;var yr=function(r){return null!==r&&"object"==typeof r};s(yr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!pr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(yr));var br=yr;var sr=B,dr=fr.REGEXP,mr=function(r){return br(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var jr=function(r){var t,e,n;if(("Object"===(e=sr(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=dr.exec(n.toString()))return t[1]}return mr(r)?"Buffer":e},_r=jr;var gr=jr;var wr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?_r(r).toLowerCase():t},Or=function(r){return gr(r).toLowerCase()},hr=ir()?Or:wr;var Sr=function(r){return"function"===hr(r)},Pr=Sr;var Er=function(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&Pr(r.next)};var Nr=function(r){return"number"==typeof r},Ar=Number,Tr=Ar.prototype.toString;var xr=B,Br=Ar,Vr=function(r){try{return Tr.call(r),!0}catch(r){return!1}},Fr=_();var kr=function(r){return"object"==typeof r&&(r instanceof Br||(Fr?Vr(r):"[object Number]"===xr(r)))},Gr=Nr,Mr=kr;var Cr=s,Lr=function(r){return Gr(r)||Mr(r)},Rr=kr;Cr(Lr,"isPrimitive",Nr),Cr(Lr,"isObject",Rr);var Xr=Lr,qr=S;var zr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&qr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Dr=vr;var Ir=function(r){return"object"==typeof r&&null!==r&&!Dr(r)},Ur=Object.getPrototypeOf;var Hr=function(r){return r.__proto__},Jr=B,Kr=Hr;var Qr=function(r){var t=Kr(r);return t||null===t?t:"[object Function]"===Jr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Wr=Ur,Yr=Qr,Zr=Sr(Object.getPrototypeOf)?Wr:Yr;var $r=Ir,rt=Sr,tt=function(r){return null==r?null:(r=Object(r),Zr(r))},et=S,nt=B,ot=Object.prototype;var ut=function(r){var t;return!!$r(r)&&(!(t=tt(r))||!et(r,"constructor")&&et(t,"constructor")&&rt(t.constructor)&&"[object Function]"===nt(t.constructor)&&et(t,"isPrototypeOf")&&rt(t.isPrototypeOf)&&(t===ot||function(r){var t;for(t in r)if(!et(r,t))return!1;return!0}(r)))},it=ut,at=S;var ct=s,ft=Sr,lt=Er,vt=Xr.isPrimitive,pt=zr,yt=function(r,t){return it(t)?(at(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")};var bt=function r(t,e,n){var o,u,i,a;if(!lt(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!ft(e))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+e+"`.");if(o={invalid:NaN},arguments.length>2&&(i=yt(o,n)))throw i;return ct(u={},"next",c),ct(u,"return",f),pt&&ft(t[pt])&&ct(u,pt,l),u;function c(){var r;return a?{done:!0}:(r=t.next()).done?(a=!0,r):{value:vt(r.value)?e(r.value):o.invalid,done:!1}}function f(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(t[pt](),e,o)}},st=bt;var dt=function(r){return r!=r},mt=Math.sqrt,jt=.7853981633974483;var _t=dt,gt=mt,wt=function(r){var t,e;return 0===r?.16666666666666713:((r<0?-r:r)<=1?(t=r*(19.562619833175948+r*(r*(5.444622390564711+r*(.004253011369004428*r-.6019598008014124))-16.262479672107002))-8.198089802484825,e=r*(139.51056146574857+r*(r*(70.49610280856842+r*(1*r-14.740913729888538))-147.1791292232726))-49.18853881490881):(t=.004253011369004428+(r=1/r)*(r*(5.444622390564711+r*(r*(19.562619833175948+-8.198089802484825*r)-16.262479672107002))-.6019598008014124),e=1+r*(r*(70.49610280856842+r*(r*(139.51056146574857+-49.18853881490881*r)-147.1791292232726))-14.740913729888538)),t/e)},Ot=function(r){var t,e;return 0===r?.08333333333333809:((r<0?-r:r)<=1?(t=28.536655482610616+r*(r*(6.968710824104713+r*(.002967721961301243*r-.5634242780008963))-25.56901049652825),e=342.43986579130785+r*(r*(147.0656354026815+r*(1*r-21.947795316429207))-383.8770957603691)):(t=.002967721961301243+(r=1/r)*(r*(6.968710824104713+r*(28.536655482610616*r-25.56901049652825))-.5634242780008963),e=1+r*(r*(147.0656354026815+r*(342.43986579130785*r-383.8770957603691))-21.947795316429207)),t/e)};var ht=dt,St=function(r){var t,e,n,o,u;if(_t(r))return NaN;if(r>0?n=r:(t=!0,n=-r),n>1)return NaN;if(n>.625)o=(e=1-n)*Ot(e),u=.7853981633974483-(e=gt(e+e)),u-=e=e*o-6123233995736766e-32,u+=.7853981633974483;else{if(n<1e-8)return r;u=n*(u=(e=n*n)*wt(e))+n}return t?-u:u},Pt=mt,Et=jt;var Nt=function(r){var t;return ht(r)||r<-1||r>1?NaN:r>.5?2*St(Pt(.5-.5*r)):(t=Et-St(r),t+=6123233995736766e-32,t+=Et)};var At=function(r){return Nt(1+r)};function Tt(r){return st(r,At)}export{Tt as default};
//# sourceMappingURL=mod.js.map
