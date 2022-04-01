// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return t({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,c=o.__lookupGetter__,f=o.__lookupSetter__;var l=function(r,t,e){var n,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(c.call(r,t)||f.call(r,t)?(n=r.__proto__,r.__proto__=o,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),v="get"in e,y="set"in e,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&i&&i.call(r,t,e.get),y&&a&&a.call(r,t,e.set),r},v=n,y=l,p=e()?v:y;var b=function(r,t,e){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},s=b,m=/./;var d=function(r){return"boolean"==typeof r};var j=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var _=function(){return j&&"symbol"==typeof Symbol.toStringTag},g=Object.prototype.toString,w=g;var O=function(r){return w.call(r)},h=Object.prototype.hasOwnProperty;var S=function(r,t){return null!=r&&h.call(r,t)},P="function"==typeof Symbol?Symbol.toStringTag:"",E=S,N=P,A=g;var T=O,x=function(r){var t,e,n;if(null==r)return A.call(r);e=r[N],t=E(r,N);try{r[N]=void 0}catch(t){return A.call(r)}return n=A.call(r),t?r[N]=e:delete r[N],n},B=_()?x:T,V=Boolean.prototype.toString;var F=B,M=function(r){try{return V.call(r),!0}catch(r){return!1}},k=_();var G=function(r){return"object"==typeof r&&(r instanceof Boolean||(k?M(r):"[object Boolean]"===F(r)))},C=d,L=G;var R=s,X=function(r){return C(r)||L(r)},q=G;R(X,"isPrimitive",d),R(X,"isObject",q);var z="object"==typeof self?self:null,D="object"==typeof window?window:null,I=X.isPrimitive,U=function(){return new Function("return this;")()},H=z,J=D,K=r(Object.freeze({__proto__:null}));var Q=function(r){if(arguments.length){if(!I(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return U()}if(H)return H;if(J)return J;if(K)return K;throw new Error("unexpected error. Unable to resolve global object.")},W=Q(),Y=W.document&&W.document.childNodes,Z=Int8Array,$=m,rr=Y,tr=Z;var er=function(){return"function"==typeof $||"object"==typeof tr||"function"==typeof rr};var nr=function(){return/^\s*function\s*([^(]*)/i},or=nr;s(or,"REGEXP",nr());var ur=or,ir=B;var ar=Array.isArray?Array.isArray:function(r){return"[object Array]"===ir(r)},cr=ar;var fr=function(r){return null!==r&&"object"==typeof r};s(fr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!cr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(fr));var lr=fr;var vr=B,yr=ur.REGEXP,pr=function(r){return lr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var br=function(r){var t,e,n;if(("Object"===(e=vr(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=yr.exec(n.toString()))return t[1]}return pr(r)?"Buffer":e},sr=br;var mr=br;var dr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?sr(r).toLowerCase():t},jr=function(r){return mr(r).toLowerCase()},_r=er()?jr:dr;var gr=function(r){return"function"===_r(r)},wr=gr;var Or=function(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&wr(r.next)};var hr=function(r){return"number"==typeof r},Sr=Number,Pr=Sr.prototype.toString;var Er=B,Nr=Sr,Ar=function(r){try{return Pr.call(r),!0}catch(r){return!1}},Tr=_();var xr=function(r){return"object"==typeof r&&(r instanceof Nr||(Tr?Ar(r):"[object Number]"===Er(r)))},Br=hr,Vr=xr;var Fr=s,Mr=function(r){return Br(r)||Vr(r)},kr=xr;Fr(Mr,"isPrimitive",hr),Fr(Mr,"isObject",kr);var Gr=Mr,Cr=S;var Lr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Cr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Rr=ar;var Xr=function(r){return"object"==typeof r&&null!==r&&!Rr(r)},qr=Object.getPrototypeOf;var zr=function(r){return r.__proto__},Dr=B,Ir=zr;var Ur=function(r){var t=Ir(r);return t||null===t?t:"[object Function]"===Dr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Hr=qr,Jr=Ur,Kr=gr(Object.getPrototypeOf)?Hr:Jr;var Qr=Xr,Wr=gr,Yr=function(r){return null==r?null:(r=Object(r),Kr(r))},Zr=S,$r=B,rt=Object.prototype;var tt=function(r){var t;return!!Qr(r)&&(!(t=Yr(r))||!Zr(r,"constructor")&&Zr(t,"constructor")&&Wr(t.constructor)&&"[object Function]"===$r(t.constructor)&&Zr(t,"isPrototypeOf")&&Wr(t.isPrototypeOf)&&(t===rt||function(r){var t;for(t in r)if(!Zr(r,t))return!1;return!0}(r)))},et=tt,nt=S;var ot=s,ut=gr,it=Or,at=Gr.isPrimitive,ct=Lr,ft=function(r,t){return et(t)?(nt(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")};var lt=function r(t,e,n){var o,u,i,a;if(!it(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!ut(e))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+e+"`.");if(o={invalid:NaN},arguments.length>2&&(i=ft(o,n)))throw i;return ot(u={},"next",c),ot(u,"return",f),ct&&ut(t[ct])&&ot(u,ct,l),u;function c(){var r;return a?{done:!0}:(r=t.next()).done?(a=!0,r):{value:at(r.value)?e(r.value):o.invalid,done:!1}}function f(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(t[ct](),e,o)}},vt=lt;var yt=function(r){return r!=r},pt=Math.sqrt,bt=.7853981633974483;var st=yt,mt=pt,dt=function(r){var t,e;return 0===r?.16666666666666713:((r<0?-r:r)<=1?(t=r*(19.562619833175948+r*(r*(5.444622390564711+r*(.004253011369004428*r-.6019598008014124))-16.262479672107002))-8.198089802484825,e=r*(139.51056146574857+r*(r*(70.49610280856842+r*(1*r-14.740913729888538))-147.1791292232726))-49.18853881490881):(t=.004253011369004428+(r=1/r)*(r*(5.444622390564711+r*(r*(19.562619833175948+-8.198089802484825*r)-16.262479672107002))-.6019598008014124),e=1+r*(r*(70.49610280856842+r*(r*(139.51056146574857+-49.18853881490881*r)-147.1791292232726))-14.740913729888538)),t/e)},jt=function(r){var t,e;return 0===r?.08333333333333809:((r<0?-r:r)<=1?(t=28.536655482610616+r*(r*(6.968710824104713+r*(.002967721961301243*r-.5634242780008963))-25.56901049652825),e=342.43986579130785+r*(r*(147.0656354026815+r*(1*r-21.947795316429207))-383.8770957603691)):(t=.002967721961301243+(r=1/r)*(r*(6.968710824104713+r*(28.536655482610616*r-25.56901049652825))-.5634242780008963),e=1+r*(r*(147.0656354026815+r*(342.43986579130785*r-383.8770957603691))-21.947795316429207)),t/e)};var _t=yt,gt=function(r){var t,e,n,o,u;if(st(r))return NaN;if(r>0?n=r:(t=!0,n=-r),n>1)return NaN;if(n>.625)o=(e=1-n)*jt(e),u=.7853981633974483-(e=mt(e+e)),u-=e=e*o-6123233995736766e-32,u+=.7853981633974483;else{if(n<1e-8)return r;u=n*(u=(e=n*n)*dt(e))+n}return t?-u:u},wt=pt,Ot=bt;var ht=function(r){var t;return _t(r)||r<-1||r>1?NaN:r>.5?2*gt(wt(.5-.5*r)):(t=Ot-gt(r),t+=6123233995736766e-32,t+=Ot)};var St=vt,Pt=function(r){return ht(1+r)};var Et=function(r){return St(r,Pt)},Nt=Et;export{Nt as default};
//# sourceMappingURL=mod.js.map
