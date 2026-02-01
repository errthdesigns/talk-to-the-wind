(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function E_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Dp={exports:{}},hl={},Up={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wo=Symbol.for("react.element"),T_=Symbol.for("react.portal"),w_=Symbol.for("react.fragment"),A_=Symbol.for("react.strict_mode"),R_=Symbol.for("react.profiler"),C_=Symbol.for("react.provider"),P_=Symbol.for("react.context"),b_=Symbol.for("react.forward_ref"),L_=Symbol.for("react.suspense"),D_=Symbol.for("react.memo"),U_=Symbol.for("react.lazy"),td=Symbol.iterator;function I_(t){return t===null||typeof t!="object"?null:(t=td&&t[td]||t["@@iterator"],typeof t=="function"?t:null)}var Ip={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Np=Object.assign,Fp={};function ws(t,e,n){this.props=t,this.context=e,this.refs=Fp,this.updater=n||Ip}ws.prototype.isReactComponent={};ws.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ws.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Op(){}Op.prototype=ws.prototype;function Zc(t,e,n){this.props=t,this.context=e,this.refs=Fp,this.updater=n||Ip}var Qc=Zc.prototype=new Op;Qc.constructor=Zc;Np(Qc,ws.prototype);Qc.isPureReactComponent=!0;var nd=Array.isArray,kp=Object.prototype.hasOwnProperty,Jc={current:null},zp={key:!0,ref:!0,__self:!0,__source:!0};function Bp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)kp.call(e,i)&&!zp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:wo,type:t,key:s,ref:o,props:r,_owner:Jc.current}}function N_(t,e){return{$$typeof:wo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ef(t){return typeof t=="object"&&t!==null&&t.$$typeof===wo}function F_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var id=/\/+/g;function Bl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?F_(""+t.key):e.toString(36)}function Ta(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case wo:case T_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Bl(o,0):i,nd(r)?(n="",t!=null&&(n=t.replace(id,"$&/")+"/"),Ta(r,e,n,"",function(u){return u})):r!=null&&(ef(r)&&(r=N_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(id,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",nd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Bl(s,a);o+=Ta(s,e,n,l,r)}else if(l=I_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Bl(s,a++),o+=Ta(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fo(t,e,n){if(t==null)return t;var i=[],r=0;return Ta(t,i,"","",function(s){return e.call(n,s,r++)}),i}function O_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var tn={current:null},wa={transition:null},k_={ReactCurrentDispatcher:tn,ReactCurrentBatchConfig:wa,ReactCurrentOwner:Jc};function Hp(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:Fo,forEach:function(t,e,n){Fo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fo(t,function(){e++}),e},toArray:function(t){return Fo(t,function(e){return e})||[]},only:function(t){if(!ef(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=ws;qe.Fragment=w_;qe.Profiler=R_;qe.PureComponent=Zc;qe.StrictMode=A_;qe.Suspense=L_;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k_;qe.act=Hp;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Np({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jc.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)kp.call(e,l)&&!zp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:wo,type:t.type,key:r,ref:s,props:i,_owner:o}};qe.createContext=function(t){return t={$$typeof:P_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:C_,_context:t},t.Consumer=t};qe.createElement=Bp;qe.createFactory=function(t){var e=Bp.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:b_,render:t}};qe.isValidElement=ef;qe.lazy=function(t){return{$$typeof:U_,_payload:{_status:-1,_result:t},_init:O_}};qe.memo=function(t,e){return{$$typeof:D_,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=wa.transition;wa.transition={};try{t()}finally{wa.transition=e}};qe.unstable_act=Hp;qe.useCallback=function(t,e){return tn.current.useCallback(t,e)};qe.useContext=function(t){return tn.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return tn.current.useDeferredValue(t)};qe.useEffect=function(t,e){return tn.current.useEffect(t,e)};qe.useId=function(){return tn.current.useId()};qe.useImperativeHandle=function(t,e,n){return tn.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return tn.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return tn.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return tn.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return tn.current.useReducer(t,e,n)};qe.useRef=function(t){return tn.current.useRef(t)};qe.useState=function(t){return tn.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return tn.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return tn.current.useTransition()};qe.version="18.3.1";Up.exports=qe;var Ye=Up.exports;const z_=E_(Ye);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_=Ye,H_=Symbol.for("react.element"),G_=Symbol.for("react.fragment"),V_=Object.prototype.hasOwnProperty,W_=B_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,X_={key:!0,ref:!0,__self:!0,__source:!0};function Gp(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)V_.call(e,i)&&!X_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:H_,type:t,key:s,ref:o,props:r,_owner:W_.current}}hl.Fragment=G_;hl.jsx=Gp;hl.jsxs=Gp;Dp.exports=hl;var Oe=Dp.exports,ju={},Vp={exports:{}},Sn={},Wp={exports:{}},Xp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,k){var G=U.length;U.push(k);e:for(;0<G;){var j=G-1>>>1,Z=U[j];if(0<r(Z,k))U[j]=k,U[G]=Z,G=j;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var k=U[0],G=U.pop();if(G!==k){U[0]=G;e:for(var j=0,Z=U.length,H=Z>>>1;j<H;){var $=2*(j+1)-1,fe=U[$],pe=$+1,Me=U[pe];if(0>r(fe,G))pe<Z&&0>r(Me,fe)?(U[j]=Me,U[pe]=G,j=pe):(U[j]=fe,U[$]=G,j=$);else if(pe<Z&&0>r(Me,G))U[j]=Me,U[pe]=G,j=pe;else break e}}return k}function r(U,k){var G=U.sortIndex-k.sortIndex;return G!==0?G:U.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,h=null,d=3,m=!1,x=!1,v=!1,p=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(U){for(var k=n(u);k!==null;){if(k.callback===null)i(u);else if(k.startTime<=U)i(u),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(u)}}function M(U){if(v=!1,_(U),!x)if(n(l)!==null)x=!0,X(C);else{var k=n(u);k!==null&&q(M,k.startTime-U)}}function C(U,k){x=!1,v&&(v=!1,c(F),F=-1),m=!0;var G=d;try{for(_(k),h=n(l);h!==null&&(!(h.expirationTime>k)||U&&!W());){var j=h.callback;if(typeof j=="function"){h.callback=null,d=h.priorityLevel;var Z=j(h.expirationTime<=k);k=t.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(l)&&i(l),_(k)}else i(l);h=n(l)}if(h!==null)var H=!0;else{var $=n(u);$!==null&&q(M,$.startTime-k),H=!1}return H}finally{h=null,d=G,m=!1}}var R=!1,A=null,F=-1,E=5,w=-1;function W(){return!(t.unstable_now()-w<E)}function Y(){if(A!==null){var U=t.unstable_now();w=U;var k=!0;try{k=A(!0,U)}finally{k?re():(R=!1,A=null)}}else R=!1}var re;if(typeof g=="function")re=function(){g(Y)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,V=L.port2;L.port1.onmessage=Y,re=function(){V.postMessage(null)}}else re=function(){p(Y,0)};function X(U){A=U,R||(R=!0,re())}function q(U,k){F=p(function(){U(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,X(C))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(d){case 1:case 2:case 3:var k=3;break;default:k=d}var G=d;d=k;try{return U()}finally{d=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,k){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var G=d;d=U;try{return k()}finally{d=G}},t.unstable_scheduleCallback=function(U,k,G){var j=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?j+G:j):G=j,U){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=G+Z,U={id:f++,callback:k,priorityLevel:U,startTime:G,expirationTime:Z,sortIndex:-1},G>j?(U.sortIndex=G,e(u,U),n(l)===null&&U===n(u)&&(v?(c(F),F=-1):v=!0,q(M,G-j))):(U.sortIndex=Z,e(l,U),x||m||(x=!0,X(C))),U},t.unstable_shouldYield=W,t.unstable_wrapCallback=function(U){var k=d;return function(){var G=d;d=k;try{return U.apply(this,arguments)}finally{d=G}}}})(Xp);Wp.exports=Xp;var j_=Wp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_=Ye,yn=j_;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jp=new Set,so={};function Rr(t,e){ps(t,e),ps(t+"Capture",e)}function ps(t,e){for(so[t]=e,t=0;t<e.length;t++)jp.add(e[t])}var mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yu=Object.prototype.hasOwnProperty,q_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rd={},sd={};function $_(t){return Yu.call(sd,t)?!0:Yu.call(rd,t)?!1:q_.test(t)?sd[t]=!0:(rd[t]=!0,!1)}function K_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Z_(t,e,n,i){if(e===null||typeof e>"u"||K_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function nn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new nn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new nn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new nn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new nn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new nn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new nn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new nn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new nn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new nn(t,5,!1,t.toLowerCase(),null,!1,!1)});var tf=/[\-:]([a-z])/g;function nf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(tf,nf);Ht[e]=new nn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(tf,nf);Ht[e]=new nn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(tf,nf);Ht[e]=new nn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new nn(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new nn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new nn(t,1,!1,t.toLowerCase(),null,!0,!0)});function rf(t,e,n,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Z_(e,n,r,i)&&(n=null),i||r===null?$_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var yi=Y_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oo=Symbol.for("react.element"),jr=Symbol.for("react.portal"),Yr=Symbol.for("react.fragment"),sf=Symbol.for("react.strict_mode"),qu=Symbol.for("react.profiler"),Yp=Symbol.for("react.provider"),qp=Symbol.for("react.context"),of=Symbol.for("react.forward_ref"),$u=Symbol.for("react.suspense"),Ku=Symbol.for("react.suspense_list"),af=Symbol.for("react.memo"),Ri=Symbol.for("react.lazy"),$p=Symbol.for("react.offscreen"),od=Symbol.iterator;function Ls(t){return t===null||typeof t!="object"?null:(t=od&&t[od]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,Hl;function Ws(t){if(Hl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Hl=e&&e[1]||""}return`
`+Hl+t}var Gl=!1;function Vl(t,e){if(!t||Gl)return"";Gl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Gl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ws(t):""}function Q_(t){switch(t.tag){case 5:return Ws(t.type);case 16:return Ws("Lazy");case 13:return Ws("Suspense");case 19:return Ws("SuspenseList");case 0:case 2:case 15:return t=Vl(t.type,!1),t;case 11:return t=Vl(t.type.render,!1),t;case 1:return t=Vl(t.type,!0),t;default:return""}}function Zu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yr:return"Fragment";case jr:return"Portal";case qu:return"Profiler";case sf:return"StrictMode";case $u:return"Suspense";case Ku:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qp:return(t.displayName||"Context")+".Consumer";case Yp:return(t._context.displayName||"Context")+".Provider";case of:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case af:return e=t.displayName||null,e!==null?e:Zu(t.type)||"Memo";case Ri:e=t._payload,t=t._init;try{return Zu(t(e))}catch{}}return null}function J_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zu(e);case 8:return e===sf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function e0(t){var e=Kp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ko(t){t._valueTracker||(t._valueTracker=e0(t))}function Zp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Kp(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Oa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qu(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ad(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=qi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Qp(t,e){e=e.checked,e!=null&&rf(t,"checked",e,!1)}function Ju(t,e){Qp(t,e);var n=qi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ec(t,e.type,n):e.hasOwnProperty("defaultValue")&&ec(t,e.type,qi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ld(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ec(t,e,n){(e!=="number"||Oa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Xs=Array.isArray;function os(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+qi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function tc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ud(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(Xs(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qi(n)}}function Jp(t,e){var n=qi(e.value),i=qi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function cd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function em(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?em(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var zo,tm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(zo=zo||document.createElement("div"),zo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=zo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function oo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var qs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},t0=["Webkit","ms","Moz","O"];Object.keys(qs).forEach(function(t){t0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),qs[e]=qs[t]})});function nm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||qs.hasOwnProperty(t)&&qs[t]?(""+e).trim():e+"px"}function im(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=nm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var n0=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ic(t,e){if(e){if(n0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function rc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sc=null;function lf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var oc=null,as=null,ls=null;function fd(t){if(t=Co(t)){if(typeof oc!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=vl(e),oc(t.stateNode,t.type,e))}}function rm(t){as?ls?ls.push(t):ls=[t]:as=t}function sm(){if(as){var t=as,e=ls;if(ls=as=null,fd(t),e)for(t=0;t<e.length;t++)fd(e[t])}}function om(t,e){return t(e)}function am(){}var Wl=!1;function lm(t,e,n){if(Wl)return t(e,n);Wl=!0;try{return om(t,e,n)}finally{Wl=!1,(as!==null||ls!==null)&&(am(),sm())}}function ao(t,e){var n=t.stateNode;if(n===null)return null;var i=vl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var ac=!1;if(mi)try{var Ds={};Object.defineProperty(Ds,"passive",{get:function(){ac=!0}}),window.addEventListener("test",Ds,Ds),window.removeEventListener("test",Ds,Ds)}catch{ac=!1}function i0(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var $s=!1,ka=null,za=!1,lc=null,r0={onError:function(t){$s=!0,ka=t}};function s0(t,e,n,i,r,s,o,a,l){$s=!1,ka=null,i0.apply(r0,arguments)}function o0(t,e,n,i,r,s,o,a,l){if(s0.apply(this,arguments),$s){if($s){var u=ka;$s=!1,ka=null}else throw Error(ne(198));za||(za=!0,lc=u)}}function Cr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function um(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dd(t){if(Cr(t)!==t)throw Error(ne(188))}function a0(t){var e=t.alternate;if(!e){if(e=Cr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return dd(r),t;if(s===i)return dd(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function cm(t){return t=a0(t),t!==null?fm(t):null}function fm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=fm(t);if(e!==null)return e;t=t.sibling}return null}var dm=yn.unstable_scheduleCallback,hd=yn.unstable_cancelCallback,l0=yn.unstable_shouldYield,u0=yn.unstable_requestPaint,Mt=yn.unstable_now,c0=yn.unstable_getCurrentPriorityLevel,uf=yn.unstable_ImmediatePriority,hm=yn.unstable_UserBlockingPriority,Ba=yn.unstable_NormalPriority,f0=yn.unstable_LowPriority,pm=yn.unstable_IdlePriority,pl=null,Jn=null;function d0(t){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(pl,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:m0,h0=Math.log,p0=Math.LN2;function m0(t){return t>>>=0,t===0?32:31-(h0(t)/p0|0)|0}var Bo=64,Ho=4194304;function js(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ha(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=js(a):(s&=o,s!==0&&(i=js(s)))}else o=n&~r,o!==0?i=js(o):s!==0&&(i=js(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),r=1<<n,i|=t[n],e&=~r;return i}function g0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=g0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function uc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mm(){var t=Bo;return Bo<<=1,!(Bo&4194240)&&(Bo=64),t}function Xl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ao(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function v0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Xn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function cf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function gm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var _m,ff,vm,xm,ym,cc=!1,Go=[],Oi=null,ki=null,zi=null,lo=new Map,uo=new Map,bi=[],x0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pd(t,e){switch(t){case"focusin":case"focusout":Oi=null;break;case"dragenter":case"dragleave":ki=null;break;case"mouseover":case"mouseout":zi=null;break;case"pointerover":case"pointerout":lo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":uo.delete(e.pointerId)}}function Us(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Co(e),e!==null&&ff(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function y0(t,e,n,i,r){switch(e){case"focusin":return Oi=Us(Oi,t,e,n,i,r),!0;case"dragenter":return ki=Us(ki,t,e,n,i,r),!0;case"mouseover":return zi=Us(zi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return lo.set(s,Us(lo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,uo.set(s,Us(uo.get(s)||null,t,e,n,i,r)),!0}return!1}function Sm(t){var e=dr(t.target);if(e!==null){var n=Cr(e);if(n!==null){if(e=n.tag,e===13){if(e=um(n),e!==null){t.blockedOn=e,ym(t.priority,function(){vm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Aa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=fc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);sc=i,n.target.dispatchEvent(i),sc=null}else return e=Co(n),e!==null&&ff(e),t.blockedOn=n,!1;e.shift()}return!0}function md(t,e,n){Aa(t)&&n.delete(e)}function S0(){cc=!1,Oi!==null&&Aa(Oi)&&(Oi=null),ki!==null&&Aa(ki)&&(ki=null),zi!==null&&Aa(zi)&&(zi=null),lo.forEach(md),uo.forEach(md)}function Is(t,e){t.blockedOn===e&&(t.blockedOn=null,cc||(cc=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,S0)))}function co(t){function e(r){return Is(r,t)}if(0<Go.length){Is(Go[0],t);for(var n=1;n<Go.length;n++){var i=Go[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Oi!==null&&Is(Oi,t),ki!==null&&Is(ki,t),zi!==null&&Is(zi,t),lo.forEach(e),uo.forEach(e),n=0;n<bi.length;n++)i=bi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<bi.length&&(n=bi[0],n.blockedOn===null);)Sm(n),n.blockedOn===null&&bi.shift()}var us=yi.ReactCurrentBatchConfig,Ga=!0;function M0(t,e,n,i){var r=it,s=us.transition;us.transition=null;try{it=1,df(t,e,n,i)}finally{it=r,us.transition=s}}function E0(t,e,n,i){var r=it,s=us.transition;us.transition=null;try{it=4,df(t,e,n,i)}finally{it=r,us.transition=s}}function df(t,e,n,i){if(Ga){var r=fc(t,e,n,i);if(r===null)tu(t,e,i,Va,n),pd(t,i);else if(y0(r,t,e,n,i))i.stopPropagation();else if(pd(t,i),e&4&&-1<x0.indexOf(t)){for(;r!==null;){var s=Co(r);if(s!==null&&_m(s),s=fc(t,e,n,i),s===null&&tu(t,e,i,Va,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else tu(t,e,i,null,n)}}var Va=null;function fc(t,e,n,i){if(Va=null,t=lf(i),t=dr(t),t!==null)if(e=Cr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=um(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Va=t,null}function Mm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(c0()){case uf:return 1;case hm:return 4;case Ba:case f0:return 16;case pm:return 536870912;default:return 16}default:return 16}}var Di=null,hf=null,Ra=null;function Em(){if(Ra)return Ra;var t,e=hf,n=e.length,i,r="value"in Di?Di.value:Di.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ra=r.slice(t,1<i?1-i:void 0)}function Ca(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Vo(){return!0}function gd(){return!1}function Mn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Vo:gd,this.isPropagationStopped=gd,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vo)},persist:function(){},isPersistent:Vo}),e}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pf=Mn(As),Ro=_t({},As,{view:0,detail:0}),T0=Mn(Ro),jl,Yl,Ns,ml=_t({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ns&&(Ns&&t.type==="mousemove"?(jl=t.screenX-Ns.screenX,Yl=t.screenY-Ns.screenY):Yl=jl=0,Ns=t),jl)},movementY:function(t){return"movementY"in t?t.movementY:Yl}}),_d=Mn(ml),w0=_t({},ml,{dataTransfer:0}),A0=Mn(w0),R0=_t({},Ro,{relatedTarget:0}),ql=Mn(R0),C0=_t({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),P0=Mn(C0),b0=_t({},As,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),L0=Mn(b0),D0=_t({},As,{data:0}),vd=Mn(D0),U0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=N0[t])?!!e[t]:!1}function mf(){return F0}var O0=_t({},Ro,{key:function(t){if(t.key){var e=U0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ca(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?I0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mf,charCode:function(t){return t.type==="keypress"?Ca(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ca(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),k0=Mn(O0),z0=_t({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xd=Mn(z0),B0=_t({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mf}),H0=Mn(B0),G0=_t({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),V0=Mn(G0),W0=_t({},ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),X0=Mn(W0),j0=[9,13,27,32],gf=mi&&"CompositionEvent"in window,Ks=null;mi&&"documentMode"in document&&(Ks=document.documentMode);var Y0=mi&&"TextEvent"in window&&!Ks,Tm=mi&&(!gf||Ks&&8<Ks&&11>=Ks),yd=" ",Sd=!1;function wm(t,e){switch(t){case"keyup":return j0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Am(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qr=!1;function q0(t,e){switch(t){case"compositionend":return Am(e);case"keypress":return e.which!==32?null:(Sd=!0,yd);case"textInput":return t=e.data,t===yd&&Sd?null:t;default:return null}}function $0(t,e){if(qr)return t==="compositionend"||!gf&&wm(t,e)?(t=Em(),Ra=hf=Di=null,qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Tm&&e.locale!=="ko"?null:e.data;default:return null}}var K0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Md(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!K0[t.type]:e==="textarea"}function Rm(t,e,n,i){rm(i),e=Wa(e,"onChange"),0<e.length&&(n=new pf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Zs=null,fo=null;function Z0(t){km(t,0)}function gl(t){var e=Zr(t);if(Zp(e))return t}function Q0(t,e){if(t==="change")return e}var Cm=!1;if(mi){var $l;if(mi){var Kl="oninput"in document;if(!Kl){var Ed=document.createElement("div");Ed.setAttribute("oninput","return;"),Kl=typeof Ed.oninput=="function"}$l=Kl}else $l=!1;Cm=$l&&(!document.documentMode||9<document.documentMode)}function Td(){Zs&&(Zs.detachEvent("onpropertychange",Pm),fo=Zs=null)}function Pm(t){if(t.propertyName==="value"&&gl(fo)){var e=[];Rm(e,fo,t,lf(t)),lm(Z0,e)}}function J0(t,e,n){t==="focusin"?(Td(),Zs=e,fo=n,Zs.attachEvent("onpropertychange",Pm)):t==="focusout"&&Td()}function ev(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gl(fo)}function tv(t,e){if(t==="click")return gl(e)}function nv(t,e){if(t==="input"||t==="change")return gl(e)}function iv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qn=typeof Object.is=="function"?Object.is:iv;function ho(t,e){if(qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Yu.call(e,r)||!qn(t[r],e[r]))return!1}return!0}function wd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ad(t,e){var n=wd(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wd(n)}}function bm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lm(){for(var t=window,e=Oa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Oa(t.document)}return e}function _f(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function rv(t){var e=Lm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&bm(n.ownerDocument.documentElement,n)){if(i!==null&&_f(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ad(n,s);var o=Ad(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var sv=mi&&"documentMode"in document&&11>=document.documentMode,$r=null,dc=null,Qs=null,hc=!1;function Rd(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hc||$r==null||$r!==Oa(i)||(i=$r,"selectionStart"in i&&_f(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Qs&&ho(Qs,i)||(Qs=i,i=Wa(dc,"onSelect"),0<i.length&&(e=new pf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=$r)))}function Wo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Kr={animationend:Wo("Animation","AnimationEnd"),animationiteration:Wo("Animation","AnimationIteration"),animationstart:Wo("Animation","AnimationStart"),transitionend:Wo("Transition","TransitionEnd")},Zl={},Dm={};mi&&(Dm=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function _l(t){if(Zl[t])return Zl[t];if(!Kr[t])return t;var e=Kr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Dm)return Zl[t]=e[n];return t}var Um=_l("animationend"),Im=_l("animationiteration"),Nm=_l("animationstart"),Fm=_l("transitionend"),Om=new Map,Cd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zi(t,e){Om.set(t,e),Rr(e,[t])}for(var Ql=0;Ql<Cd.length;Ql++){var Jl=Cd[Ql],ov=Jl.toLowerCase(),av=Jl[0].toUpperCase()+Jl.slice(1);Zi(ov,"on"+av)}Zi(Um,"onAnimationEnd");Zi(Im,"onAnimationIteration");Zi(Nm,"onAnimationStart");Zi("dblclick","onDoubleClick");Zi("focusin","onFocus");Zi("focusout","onBlur");Zi(Fm,"onTransitionEnd");ps("onMouseEnter",["mouseout","mouseover"]);ps("onMouseLeave",["mouseout","mouseover"]);ps("onPointerEnter",["pointerout","pointerover"]);ps("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ys="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ys));function Pd(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,o0(i,e,void 0,t),t.currentTarget=null}function km(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Pd(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Pd(r,a,u),s=l}}}if(za)throw t=lc,za=!1,lc=null,t}function ft(t,e){var n=e[vc];n===void 0&&(n=e[vc]=new Set);var i=t+"__bubble";n.has(i)||(zm(e,t,2,!1),n.add(i))}function eu(t,e,n){var i=0;e&&(i|=4),zm(n,t,i,e)}var Xo="_reactListening"+Math.random().toString(36).slice(2);function po(t){if(!t[Xo]){t[Xo]=!0,jp.forEach(function(n){n!=="selectionchange"&&(lv.has(n)||eu(n,!1,t),eu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xo]||(e[Xo]=!0,eu("selectionchange",!1,e))}}function zm(t,e,n,i){switch(Mm(e)){case 1:var r=M0;break;case 4:r=E0;break;default:r=df}n=r.bind(null,e,n,t),r=void 0,!ac||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function tu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=dr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}lm(function(){var u=s,f=lf(n),h=[];e:{var d=Om.get(t);if(d!==void 0){var m=pf,x=t;switch(t){case"keypress":if(Ca(n)===0)break e;case"keydown":case"keyup":m=k0;break;case"focusin":x="focus",m=ql;break;case"focusout":x="blur",m=ql;break;case"beforeblur":case"afterblur":m=ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=_d;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=A0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=H0;break;case Um:case Im:case Nm:m=P0;break;case Fm:m=V0;break;case"scroll":m=T0;break;case"wheel":m=X0;break;case"copy":case"cut":case"paste":m=L0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=xd}var v=(e&4)!==0,p=!v&&t==="scroll",c=v?d!==null?d+"Capture":null:d;v=[];for(var g=u,_;g!==null;){_=g;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,c!==null&&(M=ao(g,c),M!=null&&v.push(mo(g,M,_)))),p)break;g=g.return}0<v.length&&(d=new m(d,x,null,n,f),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==sc&&(x=n.relatedTarget||n.fromElement)&&(dr(x)||x[gi]))break e;if((m||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=u,x=x?dr(x):null,x!==null&&(p=Cr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(v=_d,M="onMouseLeave",c="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(v=xd,M="onPointerLeave",c="onPointerEnter",g="pointer"),p=m==null?d:Zr(m),_=x==null?d:Zr(x),d=new v(M,g+"leave",m,n,f),d.target=p,d.relatedTarget=_,M=null,dr(f)===u&&(v=new v(c,g+"enter",x,n,f),v.target=_,v.relatedTarget=p,M=v),p=M,m&&x)t:{for(v=m,c=x,g=0,_=v;_;_=Pr(_))g++;for(_=0,M=c;M;M=Pr(M))_++;for(;0<g-_;)v=Pr(v),g--;for(;0<_-g;)c=Pr(c),_--;for(;g--;){if(v===c||c!==null&&v===c.alternate)break t;v=Pr(v),c=Pr(c)}v=null}else v=null;m!==null&&bd(h,d,m,v,!1),x!==null&&p!==null&&bd(h,p,x,v,!0)}}e:{if(d=u?Zr(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var C=Q0;else if(Md(d))if(Cm)C=nv;else{C=ev;var R=J0}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=tv);if(C&&(C=C(t,u))){Rm(h,C,n,f);break e}R&&R(t,d,u),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&ec(d,"number",d.value)}switch(R=u?Zr(u):window,t){case"focusin":(Md(R)||R.contentEditable==="true")&&($r=R,dc=u,Qs=null);break;case"focusout":Qs=dc=$r=null;break;case"mousedown":hc=!0;break;case"contextmenu":case"mouseup":case"dragend":hc=!1,Rd(h,n,f);break;case"selectionchange":if(sv)break;case"keydown":case"keyup":Rd(h,n,f)}var A;if(gf)e:{switch(t){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else qr?wm(t,n)&&(F="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(Tm&&n.locale!=="ko"&&(qr||F!=="onCompositionStart"?F==="onCompositionEnd"&&qr&&(A=Em()):(Di=f,hf="value"in Di?Di.value:Di.textContent,qr=!0)),R=Wa(u,F),0<R.length&&(F=new vd(F,t,null,n,f),h.push({event:F,listeners:R}),A?F.data=A:(A=Am(n),A!==null&&(F.data=A)))),(A=Y0?q0(t,n):$0(t,n))&&(u=Wa(u,"onBeforeInput"),0<u.length&&(f=new vd("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=A))}km(h,e)})}function mo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wa(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ao(t,n),s!=null&&i.unshift(mo(t,s,r)),s=ao(t,e),s!=null&&i.push(mo(t,s,r))),t=t.return}return i}function Pr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bd(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ao(n,s),l!=null&&o.unshift(mo(n,l,a))):r||(l=ao(n,s),l!=null&&o.push(mo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var uv=/\r\n?/g,cv=/\u0000|\uFFFD/g;function Ld(t){return(typeof t=="string"?t:""+t).replace(uv,`
`).replace(cv,"")}function jo(t,e,n){if(e=Ld(e),Ld(t)!==e&&n)throw Error(ne(425))}function Xa(){}var pc=null,mc=null;function gc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _c=typeof setTimeout=="function"?setTimeout:void 0,fv=typeof clearTimeout=="function"?clearTimeout:void 0,Dd=typeof Promise=="function"?Promise:void 0,dv=typeof queueMicrotask=="function"?queueMicrotask:typeof Dd<"u"?function(t){return Dd.resolve(null).then(t).catch(hv)}:_c;function hv(t){setTimeout(function(){throw t})}function nu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),co(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);co(e)}function Bi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ud(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),Qn="__reactFiber$"+Rs,go="__reactProps$"+Rs,gi="__reactContainer$"+Rs,vc="__reactEvents$"+Rs,pv="__reactListeners$"+Rs,mv="__reactHandles$"+Rs;function dr(t){var e=t[Qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[gi]||n[Qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ud(t);t!==null;){if(n=t[Qn])return n;t=Ud(t)}return e}t=n,n=t.parentNode}return null}function Co(t){return t=t[Qn]||t[gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function vl(t){return t[go]||null}var xc=[],Qr=-1;function Qi(t){return{current:t}}function ht(t){0>Qr||(t.current=xc[Qr],xc[Qr]=null,Qr--)}function lt(t,e){Qr++,xc[Qr]=t.current,t.current=e}var $i={},$t=Qi($i),un=Qi(!1),Sr=$i;function ms(t,e){var n=t.type.contextTypes;if(!n)return $i;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function cn(t){return t=t.childContextTypes,t!=null}function ja(){ht(un),ht($t)}function Id(t,e,n){if($t.current!==$i)throw Error(ne(168));lt($t,e),lt(un,n)}function Bm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,J_(t)||"Unknown",r));return _t({},n,i)}function Ya(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$i,Sr=$t.current,lt($t,t),lt(un,un.current),!0}function Nd(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=Bm(t,e,Sr),i.__reactInternalMemoizedMergedChildContext=t,ht(un),ht($t),lt($t,t)):ht(un),lt(un,n)}var ui=null,xl=!1,iu=!1;function Hm(t){ui===null?ui=[t]:ui.push(t)}function gv(t){xl=!0,Hm(t)}function Ji(){if(!iu&&ui!==null){iu=!0;var t=0,e=it;try{var n=ui;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ui=null,xl=!1}catch(r){throw ui!==null&&(ui=ui.slice(t+1)),dm(uf,Ji),r}finally{it=e,iu=!1}}return null}var Jr=[],es=0,qa=null,$a=0,An=[],Rn=0,Mr=null,fi=1,di="";function ar(t,e){Jr[es++]=$a,Jr[es++]=qa,qa=t,$a=e}function Gm(t,e,n){An[Rn++]=fi,An[Rn++]=di,An[Rn++]=Mr,Mr=t;var i=fi;t=di;var r=32-Xn(i)-1;i&=~(1<<r),n+=1;var s=32-Xn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,fi=1<<32-Xn(e)+r|n<<r|i,di=s+t}else fi=1<<s|n<<r|i,di=t}function vf(t){t.return!==null&&(ar(t,1),Gm(t,1,0))}function xf(t){for(;t===qa;)qa=Jr[--es],Jr[es]=null,$a=Jr[--es],Jr[es]=null;for(;t===Mr;)Mr=An[--Rn],An[Rn]=null,di=An[--Rn],An[Rn]=null,fi=An[--Rn],An[Rn]=null}var vn=null,_n=null,pt=!1,Hn=null;function Vm(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Fd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,_n=Bi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,_n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mr!==null?{id:fi,overflow:di}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,_n=null,!0):!1;default:return!1}}function yc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Sc(t){if(pt){var e=_n;if(e){var n=e;if(!Fd(t,e)){if(yc(t))throw Error(ne(418));e=Bi(n.nextSibling);var i=vn;e&&Fd(t,e)?Vm(i,n):(t.flags=t.flags&-4097|2,pt=!1,vn=t)}}else{if(yc(t))throw Error(ne(418));t.flags=t.flags&-4097|2,pt=!1,vn=t}}}function Od(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function Yo(t){if(t!==vn)return!1;if(!pt)return Od(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gc(t.type,t.memoizedProps)),e&&(e=_n)){if(yc(t))throw Wm(),Error(ne(418));for(;e;)Vm(t,e),e=Bi(e.nextSibling)}if(Od(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_n=Bi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_n=null}}else _n=vn?Bi(t.stateNode.nextSibling):null;return!0}function Wm(){for(var t=_n;t;)t=Bi(t.nextSibling)}function gs(){_n=vn=null,pt=!1}function yf(t){Hn===null?Hn=[t]:Hn.push(t)}var _v=yi.ReactCurrentBatchConfig;function Fs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function qo(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function kd(t){var e=t._init;return e(t._payload)}function Xm(t){function e(c,g){if(t){var _=c.deletions;_===null?(c.deletions=[g],c.flags|=16):_.push(g)}}function n(c,g){if(!t)return null;for(;g!==null;)e(c,g),g=g.sibling;return null}function i(c,g){for(c=new Map;g!==null;)g.key!==null?c.set(g.key,g):c.set(g.index,g),g=g.sibling;return c}function r(c,g){return c=Wi(c,g),c.index=0,c.sibling=null,c}function s(c,g,_){return c.index=_,t?(_=c.alternate,_!==null?(_=_.index,_<g?(c.flags|=2,g):_):(c.flags|=2,g)):(c.flags|=1048576,g)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,g,_,M){return g===null||g.tag!==6?(g=cu(_,c.mode,M),g.return=c,g):(g=r(g,_),g.return=c,g)}function l(c,g,_,M){var C=_.type;return C===Yr?f(c,g,_.props.children,M,_.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ri&&kd(C)===g.type)?(M=r(g,_.props),M.ref=Fs(c,g,_),M.return=c,M):(M=Na(_.type,_.key,_.props,null,c.mode,M),M.ref=Fs(c,g,_),M.return=c,M)}function u(c,g,_,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=fu(_,c.mode,M),g.return=c,g):(g=r(g,_.children||[]),g.return=c,g)}function f(c,g,_,M,C){return g===null||g.tag!==7?(g=gr(_,c.mode,M,C),g.return=c,g):(g=r(g,_),g.return=c,g)}function h(c,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=cu(""+g,c.mode,_),g.return=c,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Oo:return _=Na(g.type,g.key,g.props,null,c.mode,_),_.ref=Fs(c,null,g),_.return=c,_;case jr:return g=fu(g,c.mode,_),g.return=c,g;case Ri:var M=g._init;return h(c,M(g._payload),_)}if(Xs(g)||Ls(g))return g=gr(g,c.mode,_,null),g.return=c,g;qo(c,g)}return null}function d(c,g,_,M){var C=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:a(c,g,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Oo:return _.key===C?l(c,g,_,M):null;case jr:return _.key===C?u(c,g,_,M):null;case Ri:return C=_._init,d(c,g,C(_._payload),M)}if(Xs(_)||Ls(_))return C!==null?null:f(c,g,_,M,null);qo(c,_)}return null}function m(c,g,_,M,C){if(typeof M=="string"&&M!==""||typeof M=="number")return c=c.get(_)||null,a(g,c,""+M,C);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Oo:return c=c.get(M.key===null?_:M.key)||null,l(g,c,M,C);case jr:return c=c.get(M.key===null?_:M.key)||null,u(g,c,M,C);case Ri:var R=M._init;return m(c,g,_,R(M._payload),C)}if(Xs(M)||Ls(M))return c=c.get(_)||null,f(g,c,M,C,null);qo(g,M)}return null}function x(c,g,_,M){for(var C=null,R=null,A=g,F=g=0,E=null;A!==null&&F<_.length;F++){A.index>F?(E=A,A=null):E=A.sibling;var w=d(c,A,_[F],M);if(w===null){A===null&&(A=E);break}t&&A&&w.alternate===null&&e(c,A),g=s(w,g,F),R===null?C=w:R.sibling=w,R=w,A=E}if(F===_.length)return n(c,A),pt&&ar(c,F),C;if(A===null){for(;F<_.length;F++)A=h(c,_[F],M),A!==null&&(g=s(A,g,F),R===null?C=A:R.sibling=A,R=A);return pt&&ar(c,F),C}for(A=i(c,A);F<_.length;F++)E=m(A,c,F,_[F],M),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?F:E.key),g=s(E,g,F),R===null?C=E:R.sibling=E,R=E);return t&&A.forEach(function(W){return e(c,W)}),pt&&ar(c,F),C}function v(c,g,_,M){var C=Ls(_);if(typeof C!="function")throw Error(ne(150));if(_=C.call(_),_==null)throw Error(ne(151));for(var R=C=null,A=g,F=g=0,E=null,w=_.next();A!==null&&!w.done;F++,w=_.next()){A.index>F?(E=A,A=null):E=A.sibling;var W=d(c,A,w.value,M);if(W===null){A===null&&(A=E);break}t&&A&&W.alternate===null&&e(c,A),g=s(W,g,F),R===null?C=W:R.sibling=W,R=W,A=E}if(w.done)return n(c,A),pt&&ar(c,F),C;if(A===null){for(;!w.done;F++,w=_.next())w=h(c,w.value,M),w!==null&&(g=s(w,g,F),R===null?C=w:R.sibling=w,R=w);return pt&&ar(c,F),C}for(A=i(c,A);!w.done;F++,w=_.next())w=m(A,c,F,w.value,M),w!==null&&(t&&w.alternate!==null&&A.delete(w.key===null?F:w.key),g=s(w,g,F),R===null?C=w:R.sibling=w,R=w);return t&&A.forEach(function(Y){return e(c,Y)}),pt&&ar(c,F),C}function p(c,g,_,M){if(typeof _=="object"&&_!==null&&_.type===Yr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Oo:e:{for(var C=_.key,R=g;R!==null;){if(R.key===C){if(C=_.type,C===Yr){if(R.tag===7){n(c,R.sibling),g=r(R,_.props.children),g.return=c,c=g;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ri&&kd(C)===R.type){n(c,R.sibling),g=r(R,_.props),g.ref=Fs(c,R,_),g.return=c,c=g;break e}n(c,R);break}else e(c,R);R=R.sibling}_.type===Yr?(g=gr(_.props.children,c.mode,M,_.key),g.return=c,c=g):(M=Na(_.type,_.key,_.props,null,c.mode,M),M.ref=Fs(c,g,_),M.return=c,c=M)}return o(c);case jr:e:{for(R=_.key;g!==null;){if(g.key===R)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(c,g.sibling),g=r(g,_.children||[]),g.return=c,c=g;break e}else{n(c,g);break}else e(c,g);g=g.sibling}g=fu(_,c.mode,M),g.return=c,c=g}return o(c);case Ri:return R=_._init,p(c,g,R(_._payload),M)}if(Xs(_))return x(c,g,_,M);if(Ls(_))return v(c,g,_,M);qo(c,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(c,g.sibling),g=r(g,_),g.return=c,c=g):(n(c,g),g=cu(_,c.mode,M),g.return=c,c=g),o(c)):n(c,g)}return p}var _s=Xm(!0),jm=Xm(!1),Ka=Qi(null),Za=null,ts=null,Sf=null;function Mf(){Sf=ts=Za=null}function Ef(t){var e=Ka.current;ht(Ka),t._currentValue=e}function Mc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function cs(t,e){Za=t,Sf=ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ln=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(Sf!==t)if(t={context:t,memoizedValue:e,next:null},ts===null){if(Za===null)throw Error(ne(308));ts=t,Za.dependencies={lanes:0,firstContext:t}}else ts=ts.next=t;return e}var hr=null;function Tf(t){hr===null?hr=[t]:hr.push(t)}function Ym(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Tf(e)):(n.next=r.next,r.next=n),e.interleaved=n,_i(t,i)}function _i(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ci=!1;function wf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,_i(t,n)}return r=i.interleaved,r===null?(e.next=e,Tf(i)):(e.next=r.next,r.next=e),i.interleaved=e,_i(t,n)}function Pa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cf(t,n)}}function zd(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Qa(t,e,n,i){var r=t.updateQueue;Ci=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,v=a;switch(d=e,m=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){h=x.call(m,h,d);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,d=typeof x=="function"?x.call(m,h,d):x,d==null)break e;h=_t({},h,d);break e;case 2:Ci=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=m,l=h):f=f.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Tr|=o,t.lanes=o,t.memoizedState=h}}function Bd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Po={},ei=Qi(Po),_o=Qi(Po),vo=Qi(Po);function pr(t){if(t===Po)throw Error(ne(174));return t}function Af(t,e){switch(lt(vo,e),lt(_o,t),lt(ei,Po),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=nc(e,t)}ht(ei),lt(ei,e)}function vs(){ht(ei),ht(_o),ht(vo)}function $m(t){pr(vo.current);var e=pr(ei.current),n=nc(e,t.type);e!==n&&(lt(_o,t),lt(ei,n))}function Rf(t){_o.current===t&&(ht(ei),ht(_o))}var mt=Qi(0);function Ja(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ru=[];function Cf(){for(var t=0;t<ru.length;t++)ru[t]._workInProgressVersionPrimary=null;ru.length=0}var ba=yi.ReactCurrentDispatcher,su=yi.ReactCurrentBatchConfig,Er=0,gt=null,At=null,Ut=null,el=!1,Js=!1,xo=0,vv=0;function Wt(){throw Error(ne(321))}function Pf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qn(t[n],e[n]))return!1;return!0}function bf(t,e,n,i,r,s){if(Er=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ba.current=t===null||t.memoizedState===null?Mv:Ev,t=n(i,r),Js){s=0;do{if(Js=!1,xo=0,25<=s)throw Error(ne(301));s+=1,Ut=At=null,e.updateQueue=null,ba.current=Tv,t=n(i,r)}while(Js)}if(ba.current=tl,e=At!==null&&At.next!==null,Er=0,Ut=At=gt=null,el=!1,e)throw Error(ne(300));return t}function Lf(){var t=xo!==0;return xo=0,t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?gt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function In(){if(At===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Ut===null?gt.memoizedState:Ut.next;if(e!==null)Ut=e,At=t;else{if(t===null)throw Error(ne(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Ut===null?gt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function yo(t,e){return typeof e=="function"?e(t):e}function ou(t){var e=In(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((Er&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,gt.lanes|=f,Tr|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,qn(i,e.memoizedState)||(ln=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,gt.lanes|=s,Tr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function au(t){var e=In(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);qn(s,e.memoizedState)||(ln=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Km(){}function Zm(t,e){var n=gt,i=In(),r=e(),s=!qn(i.memoizedState,r);if(s&&(i.memoizedState=r,ln=!0),i=i.queue,Df(eg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,So(9,Jm.bind(null,n,i,r,e),void 0,null),Nt===null)throw Error(ne(349));Er&30||Qm(n,e,r)}return r}function Qm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Jm(t,e,n,i){e.value=n,e.getSnapshot=i,tg(e)&&ng(t)}function eg(t,e,n){return n(function(){tg(e)&&ng(t)})}function tg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qn(t,n)}catch{return!0}}function ng(t){var e=_i(t,1);e!==null&&jn(e,t,1,-1)}function Hd(t){var e=Kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:t},e.queue=t,t=t.dispatch=Sv.bind(null,gt,t),[e.memoizedState,t]}function So(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function ig(){return In().memoizedState}function La(t,e,n,i){var r=Kn();gt.flags|=t,r.memoizedState=So(1|e,n,void 0,i===void 0?null:i)}function yl(t,e,n,i){var r=In();i=i===void 0?null:i;var s=void 0;if(At!==null){var o=At.memoizedState;if(s=o.destroy,i!==null&&Pf(i,o.deps)){r.memoizedState=So(e,n,s,i);return}}gt.flags|=t,r.memoizedState=So(1|e,n,s,i)}function Gd(t,e){return La(8390656,8,t,e)}function Df(t,e){return yl(2048,8,t,e)}function rg(t,e){return yl(4,2,t,e)}function sg(t,e){return yl(4,4,t,e)}function og(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ag(t,e,n){return n=n!=null?n.concat([t]):null,yl(4,4,og.bind(null,e,t),n)}function Uf(){}function lg(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Pf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function ug(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Pf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function cg(t,e,n){return Er&21?(qn(n,e)||(n=mm(),gt.lanes|=n,Tr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ln=!0),t.memoizedState=n)}function xv(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=su.transition;su.transition={};try{t(!1),e()}finally{it=n,su.transition=i}}function fg(){return In().memoizedState}function yv(t,e,n){var i=Vi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},dg(t))hg(e,n);else if(n=Ym(t,e,n,i),n!==null){var r=en();jn(n,t,i,r),pg(n,e,i)}}function Sv(t,e,n){var i=Vi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(dg(t))hg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,qn(a,o)){var l=e.interleaved;l===null?(r.next=r,Tf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ym(t,e,r,i),n!==null&&(r=en(),jn(n,t,i,r),pg(n,e,i))}}function dg(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function hg(t,e){Js=el=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function pg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cf(t,n)}}var tl={readContext:Un,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},Mv={readContext:Un,useCallback:function(t,e){return Kn().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:Gd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,La(4194308,4,og.bind(null,e,t),n)},useLayoutEffect:function(t,e){return La(4194308,4,t,e)},useInsertionEffect:function(t,e){return La(4,2,t,e)},useMemo:function(t,e){var n=Kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Kn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=yv.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=Kn();return t={current:t},e.memoizedState=t},useState:Hd,useDebugValue:Uf,useDeferredValue:function(t){return Kn().memoizedState=t},useTransition:function(){var t=Hd(!1),e=t[0];return t=xv.bind(null,t[1]),Kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=Kn();if(pt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Nt===null)throw Error(ne(349));Er&30||Qm(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Gd(eg.bind(null,i,s,t),[t]),i.flags|=2048,So(9,Jm.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Kn(),e=Nt.identifierPrefix;if(pt){var n=di,i=fi;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=xo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=vv++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ev={readContext:Un,useCallback:lg,useContext:Un,useEffect:Df,useImperativeHandle:ag,useInsertionEffect:rg,useLayoutEffect:sg,useMemo:ug,useReducer:ou,useRef:ig,useState:function(){return ou(yo)},useDebugValue:Uf,useDeferredValue:function(t){var e=In();return cg(e,At.memoizedState,t)},useTransition:function(){var t=ou(yo)[0],e=In().memoizedState;return[t,e]},useMutableSource:Km,useSyncExternalStore:Zm,useId:fg,unstable_isNewReconciler:!1},Tv={readContext:Un,useCallback:lg,useContext:Un,useEffect:Df,useImperativeHandle:ag,useInsertionEffect:rg,useLayoutEffect:sg,useMemo:ug,useReducer:au,useRef:ig,useState:function(){return au(yo)},useDebugValue:Uf,useDeferredValue:function(t){var e=In();return At===null?e.memoizedState=t:cg(e,At.memoizedState,t)},useTransition:function(){var t=au(yo)[0],e=In().memoizedState;return[t,e]},useMutableSource:Km,useSyncExternalStore:Zm,useId:fg,unstable_isNewReconciler:!1};function zn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ec(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Sl={isMounted:function(t){return(t=t._reactInternals)?Cr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=en(),r=Vi(t),s=pi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(jn(e,t,r,i),Pa(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=en(),r=Vi(t),s=pi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(jn(e,t,r,i),Pa(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=en(),i=Vi(t),r=pi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Hi(t,r,i),e!==null&&(jn(e,t,i,n),Pa(e,t,i))}};function Vd(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ho(n,i)||!ho(r,s):!0}function mg(t,e,n){var i=!1,r=$i,s=e.contextType;return typeof s=="object"&&s!==null?s=Un(s):(r=cn(e)?Sr:$t.current,i=e.contextTypes,s=(i=i!=null)?ms(t,r):$i),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Wd(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Sl.enqueueReplaceState(e,e.state,null)}function Tc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},wf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Un(s):(s=cn(e)?Sr:$t.current,r.context=ms(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ec(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Sl.enqueueReplaceState(r,r.state,null),Qa(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function xs(t,e){try{var n="",i=e;do n+=Q_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function lu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wv=typeof WeakMap=="function"?WeakMap:Map;function gg(t,e,n){n=pi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){il||(il=!0,Nc=i),wc(t,e)},n}function _g(t,e,n){n=pi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){wc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wc(t,e),typeof i!="function"&&(Gi===null?Gi=new Set([this]):Gi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Xd(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new wv;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=zv.bind(null,t,e,n),e.then(t,t))}function jd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Yd(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pi(-1,1),e.tag=2,Hi(n,e,1))),n.lanes|=1),t)}var Av=yi.ReactCurrentOwner,ln=!1;function Qt(t,e,n,i){e.child=t===null?jm(e,null,n,i):_s(e,t.child,n,i)}function qd(t,e,n,i,r){n=n.render;var s=e.ref;return cs(e,r),i=bf(t,e,n,i,s,r),n=Lf(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(pt&&n&&vf(e),e.flags|=1,Qt(t,e,i,r),e.child)}function $d(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Hf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,vg(t,e,s,i,r)):(t=Na(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ho,n(o,i)&&t.ref===e.ref)return vi(t,e,r)}return e.flags|=1,t=Wi(s,i),t.ref=e.ref,t.return=e,e.child=t}function vg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ho(s,i)&&t.ref===e.ref)if(ln=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ln=!0);else return e.lanes=t.lanes,vi(t,e,r)}return Ac(t,e,n,i,r)}function xg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(is,gn),gn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(is,gn),gn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,lt(is,gn),gn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,lt(is,gn),gn|=i;return Qt(t,e,r,n),e.child}function yg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ac(t,e,n,i,r){var s=cn(n)?Sr:$t.current;return s=ms(e,s),cs(e,r),n=bf(t,e,n,i,s,r),i=Lf(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(pt&&i&&vf(e),e.flags|=1,Qt(t,e,n,r),e.child)}function Kd(t,e,n,i,r){if(cn(n)){var s=!0;Ya(e)}else s=!1;if(cs(e,r),e.stateNode===null)Da(t,e),mg(e,n,i),Tc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Un(u):(u=cn(n)?Sr:$t.current,u=ms(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Wd(e,o,i,u),Ci=!1;var d=e.memoizedState;o.state=d,Qa(e,i,o,r),l=e.memoizedState,a!==i||d!==l||un.current||Ci?(typeof f=="function"&&(Ec(e,n,f,i),l=e.memoizedState),(a=Ci||Vd(e,n,a,i,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,qm(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:zn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=cn(n)?Sr:$t.current,l=ms(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Wd(e,o,i,l),Ci=!1,d=e.memoizedState,o.state=d,Qa(e,i,o,r);var x=e.memoizedState;a!==h||d!==x||un.current||Ci?(typeof m=="function"&&(Ec(e,n,m,i),x=e.memoizedState),(u=Ci||Vd(e,n,u,i,d,x,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Rc(t,e,n,i,s,r)}function Rc(t,e,n,i,r,s){yg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Nd(e,n,!1),vi(t,e,s);i=e.stateNode,Av.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=_s(e,t.child,null,s),e.child=_s(e,null,a,s)):Qt(t,e,a,s),e.memoizedState=i.state,r&&Nd(e,n,!0),e.child}function Sg(t){var e=t.stateNode;e.pendingContext?Id(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Id(t,e.context,!1),Af(t,e.containerInfo)}function Zd(t,e,n,i,r){return gs(),yf(r),e.flags|=256,Qt(t,e,n,i),e.child}var Cc={dehydrated:null,treeContext:null,retryLane:0};function Pc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Mg(t,e,n){var i=e.pendingProps,r=mt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(mt,r&1),t===null)return Sc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Tl(o,i,0,null),t=gr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Pc(n),e.memoizedState=Cc,t):If(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Rv(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Wi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Wi(a,s):(s=gr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Pc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Cc,i}return s=t.child,t=s.sibling,i=Wi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function If(t,e){return e=Tl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $o(t,e,n,i){return i!==null&&yf(i),_s(e,t.child,null,n),t=If(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Rv(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=lu(Error(ne(422))),$o(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Tl({mode:"visible",children:i.children},r,0,null),s=gr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&_s(e,t.child,null,o),e.child.memoizedState=Pc(o),e.memoizedState=Cc,s);if(!(e.mode&1))return $o(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=lu(s,i,void 0),$o(t,e,o,i)}if(a=(o&t.childLanes)!==0,ln||a){if(i=Nt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,_i(t,r),jn(i,t,r,-1))}return Bf(),i=lu(Error(ne(421))),$o(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Bv.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,_n=Bi(r.nextSibling),vn=e,pt=!0,Hn=null,t!==null&&(An[Rn++]=fi,An[Rn++]=di,An[Rn++]=Mr,fi=t.id,di=t.overflow,Mr=e),e=If(e,i.children),e.flags|=4096,e)}function Qd(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Mc(t.return,e,n)}function uu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Eg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Qt(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qd(t,n,e);else if(t.tag===19)Qd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ja(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),uu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ja(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}uu(e,!0,n,null,s);break;case"together":uu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Da(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Tr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Wi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Cv(t,e,n){switch(e.tag){case 3:Sg(e),gs();break;case 5:$m(e);break;case 1:cn(e.type)&&Ya(e);break;case 4:Af(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(Ka,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?Mg(t,e,n):(lt(mt,mt.current&1),t=vi(t,e,n),t!==null?t.sibling:null);lt(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Eg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,xg(t,e,n)}return vi(t,e,n)}var Tg,bc,wg,Ag;Tg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bc=function(){};wg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,pr(ei.current);var s=null;switch(n){case"input":r=Qu(t,r),i=Qu(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=tc(t,r),i=tc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Xa)}ic(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(so.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(so.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ft("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Ag=function(t,e,n,i){n!==i&&(e.flags|=4)};function Os(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Pv(t,e,n){var i=e.pendingProps;switch(xf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return cn(e.type)&&ja(),Xt(e),null;case 3:return i=e.stateNode,vs(),ht(un),ht($t),Cf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Yo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(kc(Hn),Hn=null))),bc(t,e),Xt(e),null;case 5:Rf(e);var r=pr(vo.current);if(n=e.type,t!==null&&e.stateNode!=null)wg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Xt(e),null}if(t=pr(ei.current),Yo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Qn]=e,i[go]=s,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<Ys.length;r++)ft(Ys[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":ad(i,s),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ft("invalid",i);break;case"textarea":ud(i,s),ft("invalid",i)}ic(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&jo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&jo(i.textContent,a,t),r=["children",""+a]):so.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ft("scroll",i)}switch(n){case"input":ko(i),ld(i,s,!0);break;case"textarea":ko(i),cd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Xa)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=em(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Qn]=e,t[go]=i,Tg(t,e,!1,!1),e.stateNode=t;e:{switch(o=rc(n,i),n){case"dialog":ft("cancel",t),ft("close",t),r=i;break;case"iframe":case"object":case"embed":ft("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ys.length;r++)ft(Ys[r],t);r=i;break;case"source":ft("error",t),r=i;break;case"img":case"image":case"link":ft("error",t),ft("load",t),r=i;break;case"details":ft("toggle",t),r=i;break;case"input":ad(t,i),r=Qu(t,i),ft("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),ft("invalid",t);break;case"textarea":ud(t,i),r=tc(t,i),ft("invalid",t);break;default:r=i}ic(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?im(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&tm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&oo(t,l):typeof l=="number"&&oo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(so.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ft("scroll",t):l!=null&&rf(t,s,l,o))}switch(n){case"input":ko(t),ld(t,i,!1);break;case"textarea":ko(t),cd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+qi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?os(t,!!i.multiple,s,!1):i.defaultValue!=null&&os(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Xa)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)Ag(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=pr(vo.current),pr(ei.current),Yo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Qn]=e,(s=i.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:jo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&jo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Qn]=e,e.stateNode=i}return Xt(e),null;case 13:if(ht(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&_n!==null&&e.mode&1&&!(e.flags&128))Wm(),gs(),e.flags|=98560,s=!1;else if(s=Yo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[Qn]=e}else gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else Hn!==null&&(kc(Hn),Hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?Rt===0&&(Rt=3):Bf())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return vs(),bc(t,e),t===null&&po(e.stateNode.containerInfo),Xt(e),null;case 10:return Ef(e.type._context),Xt(e),null;case 17:return cn(e.type)&&ja(),Xt(e),null;case 19:if(ht(mt),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Os(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ja(t),o!==null){for(e.flags|=128,Os(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(mt,mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Mt()>ys&&(e.flags|=128,i=!0,Os(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ja(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Os(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pt)return Xt(e),null}else 2*Mt()-s.renderingStartTime>ys&&n!==1073741824&&(e.flags|=128,i=!0,Os(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,n=mt.current,lt(mt,i?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return zf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?gn&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function bv(t,e){switch(xf(e),e.tag){case 1:return cn(e.type)&&ja(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vs(),ht(un),ht($t),Cf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Rf(e),null;case 13:if(ht(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(mt),null;case 4:return vs(),null;case 10:return Ef(e.type._context),null;case 22:case 23:return zf(),null;case 24:return null;default:return null}}var Ko=!1,qt=!1,Lv=typeof WeakSet=="function"?WeakSet:Set,ve=null;function ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function Lc(t,e,n){try{n()}catch(i){yt(t,e,i)}}var Jd=!1;function Dv(t,e){if(pc=Ga,t=Lm(),_f(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,h=t,d=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++f===i&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mc={focusedElem:t,selectionRange:n},Ga=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,p=x.memoizedState,c=e.stateNode,g=c.getSnapshotBeforeUpdate(e.elementType===e.type?v:zn(e.type,v),p);c.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(M){yt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return x=Jd,Jd=!1,x}function eo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Lc(e,n,s)}r=r.next}while(r!==i)}}function Ml(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Dc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Rg(t){var e=t.alternate;e!==null&&(t.alternate=null,Rg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qn],delete e[go],delete e[vc],delete e[pv],delete e[mv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Cg(t){return t.tag===5||t.tag===3||t.tag===4}function eh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Cg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xa));else if(i!==4&&(t=t.child,t!==null))for(Uc(t,e,n),t=t.sibling;t!==null;)Uc(t,e,n),t=t.sibling}function Ic(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ic(t,e,n),t=t.sibling;t!==null;)Ic(t,e,n),t=t.sibling}var Ot=null,Bn=!1;function Si(t,e,n){for(n=n.child;n!==null;)Pg(t,e,n),n=n.sibling}function Pg(t,e,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(pl,n)}catch{}switch(n.tag){case 5:qt||ns(n,e);case 6:var i=Ot,r=Bn;Ot=null,Si(t,e,n),Ot=i,Bn=r,Ot!==null&&(Bn?(t=Ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ot.removeChild(n.stateNode));break;case 18:Ot!==null&&(Bn?(t=Ot,n=n.stateNode,t.nodeType===8?nu(t.parentNode,n):t.nodeType===1&&nu(t,n),co(t)):nu(Ot,n.stateNode));break;case 4:i=Ot,r=Bn,Ot=n.stateNode.containerInfo,Bn=!0,Si(t,e,n),Ot=i,Bn=r;break;case 0:case 11:case 14:case 15:if(!qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Lc(n,e,o),r=r.next}while(r!==i)}Si(t,e,n);break;case 1:if(!qt&&(ns(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){yt(n,e,a)}Si(t,e,n);break;case 21:Si(t,e,n);break;case 22:n.mode&1?(qt=(i=qt)||n.memoizedState!==null,Si(t,e,n),qt=i):Si(t,e,n);break;default:Si(t,e,n)}}function th(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Lv),e.forEach(function(i){var r=Hv.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Nn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ot=a.stateNode,Bn=!1;break e;case 3:Ot=a.stateNode.containerInfo,Bn=!0;break e;case 4:Ot=a.stateNode.containerInfo,Bn=!0;break e}a=a.return}if(Ot===null)throw Error(ne(160));Pg(s,o,r),Ot=null,Bn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){yt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)bg(e,t),e=e.sibling}function bg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nn(e,t),$n(t),i&4){try{eo(3,t,t.return),Ml(3,t)}catch(v){yt(t,t.return,v)}try{eo(5,t,t.return)}catch(v){yt(t,t.return,v)}}break;case 1:Nn(e,t),$n(t),i&512&&n!==null&&ns(n,n.return);break;case 5:if(Nn(e,t),$n(t),i&512&&n!==null&&ns(n,n.return),t.flags&32){var r=t.stateNode;try{oo(r,"")}catch(v){yt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Qp(r,s),rc(a,o);var u=rc(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?im(r,h):f==="dangerouslySetInnerHTML"?tm(r,h):f==="children"?oo(r,h):rf(r,f,h,u)}switch(a){case"input":Ju(r,s);break;case"textarea":Jp(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?os(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?os(r,!!s.multiple,s.defaultValue,!0):os(r,!!s.multiple,s.multiple?[]:"",!1))}r[go]=s}catch(v){yt(t,t.return,v)}}break;case 6:if(Nn(e,t),$n(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){yt(t,t.return,v)}}break;case 3:if(Nn(e,t),$n(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{co(e.containerInfo)}catch(v){yt(t,t.return,v)}break;case 4:Nn(e,t),$n(t);break;case 13:Nn(e,t),$n(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Of=Mt())),i&4&&th(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(qt=(u=qt)||f,Nn(e,t),qt=u):Nn(e,t),$n(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(ve=t,f=t.child;f!==null;){for(h=ve=f;ve!==null;){switch(d=ve,m=d.child,d.tag){case 0:case 11:case 14:case 15:eo(4,d,d.return);break;case 1:ns(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(v){yt(i,n,v)}}break;case 5:ns(d,d.return);break;case 22:if(d.memoizedState!==null){ih(h);continue}}m!==null?(m.return=d,ve=m):ih(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=nm("display",o))}catch(v){yt(t,t.return,v)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){yt(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Nn(e,t),$n(t),i&4&&th(t);break;case 21:break;default:Nn(e,t),$n(t)}}function $n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Cg(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(oo(r,""),i.flags&=-33);var s=eh(t);Ic(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=eh(t);Uc(t,a,o);break;default:throw Error(ne(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Uv(t,e,n){ve=t,Lg(t)}function Lg(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ko;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||qt;a=Ko;var u=qt;if(Ko=o,(qt=l)&&!u)for(ve=r;ve!==null;)o=ve,l=o.child,o.tag===22&&o.memoizedState!==null?rh(r):l!==null?(l.return=o,ve=l):rh(r);for(;s!==null;)ve=s,Lg(s),s=s.sibling;ve=r,Ko=a,qt=u}nh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):nh(t)}}function nh(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||Ml(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Bd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Bd(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&co(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}qt||e.flags&512&&Dc(e)}catch(d){yt(e,e.return,d)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function ih(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function rh(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ml(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{Dc(e)}catch(l){yt(e,s,l)}break;case 5:var o=e.return;try{Dc(e)}catch(l){yt(e,o,l)}}}catch(l){yt(e,e.return,l)}if(e===t){ve=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ve=a;break}ve=e.return}}var Iv=Math.ceil,nl=yi.ReactCurrentDispatcher,Nf=yi.ReactCurrentOwner,Dn=yi.ReactCurrentBatchConfig,$e=0,Nt=null,wt=null,Bt=0,gn=0,is=Qi(0),Rt=0,Mo=null,Tr=0,El=0,Ff=0,to=null,on=null,Of=0,ys=1/0,li=null,il=!1,Nc=null,Gi=null,Zo=!1,Ui=null,rl=0,no=0,Fc=null,Ua=-1,Ia=0;function en(){return $e&6?Mt():Ua!==-1?Ua:Ua=Mt()}function Vi(t){return t.mode&1?$e&2&&Bt!==0?Bt&-Bt:_v.transition!==null?(Ia===0&&(Ia=mm()),Ia):(t=it,t!==0||(t=window.event,t=t===void 0?16:Mm(t.type)),t):1}function jn(t,e,n,i){if(50<no)throw no=0,Fc=null,Error(ne(185));Ao(t,n,i),(!($e&2)||t!==Nt)&&(t===Nt&&(!($e&2)&&(El|=n),Rt===4&&Li(t,Bt)),fn(t,i),n===1&&$e===0&&!(e.mode&1)&&(ys=Mt()+500,xl&&Ji()))}function fn(t,e){var n=t.callbackNode;_0(t,e);var i=Ha(t,t===Nt?Bt:0);if(i===0)n!==null&&hd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&hd(n),e===1)t.tag===0?gv(sh.bind(null,t)):Hm(sh.bind(null,t)),dv(function(){!($e&6)&&Ji()}),n=null;else{switch(gm(i)){case 1:n=uf;break;case 4:n=hm;break;case 16:n=Ba;break;case 536870912:n=pm;break;default:n=Ba}n=zg(n,Dg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Dg(t,e){if(Ua=-1,Ia=0,$e&6)throw Error(ne(327));var n=t.callbackNode;if(fs()&&t.callbackNode!==n)return null;var i=Ha(t,t===Nt?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=sl(t,i);else{e=i;var r=$e;$e|=2;var s=Ig();(Nt!==t||Bt!==e)&&(li=null,ys=Mt()+500,mr(t,e));do try{Ov();break}catch(a){Ug(t,a)}while(!0);Mf(),nl.current=s,$e=r,wt!==null?e=0:(Nt=null,Bt=0,e=Rt)}if(e!==0){if(e===2&&(r=uc(t),r!==0&&(i=r,e=Oc(t,r))),e===1)throw n=Mo,mr(t,0),Li(t,i),fn(t,Mt()),n;if(e===6)Li(t,i);else{if(r=t.current.alternate,!(i&30)&&!Nv(r)&&(e=sl(t,i),e===2&&(s=uc(t),s!==0&&(i=s,e=Oc(t,s))),e===1))throw n=Mo,mr(t,0),Li(t,i),fn(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:lr(t,on,li);break;case 3:if(Li(t,i),(i&130023424)===i&&(e=Of+500-Mt(),10<e)){if(Ha(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){en(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=_c(lr.bind(null,t,on,li),e);break}lr(t,on,li);break;case 4:if(Li(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Xn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Iv(i/1960))-i,10<i){t.timeoutHandle=_c(lr.bind(null,t,on,li),i);break}lr(t,on,li);break;case 5:lr(t,on,li);break;default:throw Error(ne(329))}}}return fn(t,Mt()),t.callbackNode===n?Dg.bind(null,t):null}function Oc(t,e){var n=to;return t.current.memoizedState.isDehydrated&&(mr(t,e).flags|=256),t=sl(t,e),t!==2&&(e=on,on=n,e!==null&&kc(e)),t}function kc(t){on===null?on=t:on.push.apply(on,t)}function Nv(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Li(t,e){for(e&=~Ff,e&=~El,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function sh(t){if($e&6)throw Error(ne(327));fs();var e=Ha(t,0);if(!(e&1))return fn(t,Mt()),null;var n=sl(t,e);if(t.tag!==0&&n===2){var i=uc(t);i!==0&&(e=i,n=Oc(t,i))}if(n===1)throw n=Mo,mr(t,0),Li(t,e),fn(t,Mt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,lr(t,on,li),fn(t,Mt()),null}function kf(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(ys=Mt()+500,xl&&Ji())}}function wr(t){Ui!==null&&Ui.tag===0&&!($e&6)&&fs();var e=$e;$e|=1;var n=Dn.transition,i=it;try{if(Dn.transition=null,it=1,t)return t()}finally{it=i,Dn.transition=n,$e=e,!($e&6)&&Ji()}}function zf(){gn=is.current,ht(is)}function mr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,fv(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(xf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ja();break;case 3:vs(),ht(un),ht($t),Cf();break;case 5:Rf(i);break;case 4:vs();break;case 13:ht(mt);break;case 19:ht(mt);break;case 10:Ef(i.type._context);break;case 22:case 23:zf()}n=n.return}if(Nt=t,wt=t=Wi(t.current,null),Bt=gn=e,Rt=0,Mo=null,Ff=El=Tr=0,on=to=null,hr!==null){for(e=0;e<hr.length;e++)if(n=hr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}hr=null}return t}function Ug(t,e){do{var n=wt;try{if(Mf(),ba.current=tl,el){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}el=!1}if(Er=0,Ut=At=gt=null,Js=!1,xo=0,Nf.current=null,n===null||n.return===null){Rt=1,Mo=e,wt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=jd(o);if(m!==null){m.flags&=-257,Yd(m,o,a,s,e),m.mode&1&&Xd(s,u,e),e=m,l=u;var x=e.updateQueue;if(x===null){var v=new Set;v.add(l),e.updateQueue=v}else x.add(l);break e}else{if(!(e&1)){Xd(s,u,e),Bf();break e}l=Error(ne(426))}}else if(pt&&a.mode&1){var p=jd(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Yd(p,o,a,s,e),yf(xs(l,a));break e}}s=l=xs(l,a),Rt!==4&&(Rt=2),to===null?to=[s]:to.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=gg(s,l,e);zd(s,c);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Gi===null||!Gi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=_g(s,a,e);zd(s,M);break e}}s=s.return}while(s!==null)}Fg(n)}catch(C){e=C,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(!0)}function Ig(){var t=nl.current;return nl.current=tl,t===null?tl:t}function Bf(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Nt===null||!(Tr&268435455)&&!(El&268435455)||Li(Nt,Bt)}function sl(t,e){var n=$e;$e|=2;var i=Ig();(Nt!==t||Bt!==e)&&(li=null,mr(t,e));do try{Fv();break}catch(r){Ug(t,r)}while(!0);if(Mf(),$e=n,nl.current=i,wt!==null)throw Error(ne(261));return Nt=null,Bt=0,Rt}function Fv(){for(;wt!==null;)Ng(wt)}function Ov(){for(;wt!==null&&!l0();)Ng(wt)}function Ng(t){var e=kg(t.alternate,t,gn);t.memoizedProps=t.pendingProps,e===null?Fg(t):wt=e,Nf.current=null}function Fg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bv(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,wt=null;return}}else if(n=Pv(n,e,gn),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);Rt===0&&(Rt=5)}function lr(t,e,n){var i=it,r=Dn.transition;try{Dn.transition=null,it=1,kv(t,e,n,i)}finally{Dn.transition=r,it=i}return null}function kv(t,e,n,i){do fs();while(Ui!==null);if($e&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(v0(t,s),t===Nt&&(wt=Nt=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zo||(Zo=!0,zg(Ba,function(){return fs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var o=it;it=1;var a=$e;$e|=4,Nf.current=null,Dv(t,n),bg(n,t),rv(mc),Ga=!!pc,mc=pc=null,t.current=n,Uv(n),u0(),$e=a,it=o,Dn.transition=s}else t.current=n;if(Zo&&(Zo=!1,Ui=t,rl=r),s=t.pendingLanes,s===0&&(Gi=null),d0(n.stateNode),fn(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(il)throw il=!1,t=Nc,Nc=null,t;return rl&1&&t.tag!==0&&fs(),s=t.pendingLanes,s&1?t===Fc?no++:(no=0,Fc=t):no=0,Ji(),null}function fs(){if(Ui!==null){var t=gm(rl),e=Dn.transition,n=it;try{if(Dn.transition=null,it=16>t?16:t,Ui===null)var i=!1;else{if(t=Ui,Ui=null,rl=0,$e&6)throw Error(ne(331));var r=$e;for($e|=4,ve=t.current;ve!==null;){var s=ve,o=s.child;if(ve.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ve=u;ve!==null;){var f=ve;switch(f.tag){case 0:case 11:case 15:eo(8,f,s)}var h=f.child;if(h!==null)h.return=f,ve=h;else for(;ve!==null;){f=ve;var d=f.sibling,m=f.return;if(Rg(f),f===u){ve=null;break}if(d!==null){d.return=m,ve=d;break}ve=m}}}var x=s.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var p=v.sibling;v.sibling=null,v=p}while(v!==null)}}ve=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ve=o;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:eo(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,ve=c;break e}ve=s.return}}var g=t.current;for(ve=g;ve!==null;){o=ve;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,ve=_;else e:for(o=g;ve!==null;){if(a=ve,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ml(9,a)}}catch(C){yt(a,a.return,C)}if(a===o){ve=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,ve=M;break e}ve=a.return}}if($e=r,Ji(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(pl,t)}catch{}i=!0}return i}finally{it=n,Dn.transition=e}}return!1}function oh(t,e,n){e=xs(n,e),e=gg(t,e,1),t=Hi(t,e,1),e=en(),t!==null&&(Ao(t,1,e),fn(t,e))}function yt(t,e,n){if(t.tag===3)oh(t,t,n);else for(;e!==null;){if(e.tag===3){oh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Gi===null||!Gi.has(i))){t=xs(n,t),t=_g(e,t,1),e=Hi(e,t,1),t=en(),e!==null&&(Ao(e,1,t),fn(e,t));break}}e=e.return}}function zv(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=en(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(Bt&n)===n&&(Rt===4||Rt===3&&(Bt&130023424)===Bt&&500>Mt()-Of?mr(t,0):Ff|=n),fn(t,e)}function Og(t,e){e===0&&(t.mode&1?(e=Ho,Ho<<=1,!(Ho&130023424)&&(Ho=4194304)):e=1);var n=en();t=_i(t,e),t!==null&&(Ao(t,e,n),fn(t,n))}function Bv(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Og(t,n)}function Hv(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Og(t,n)}var kg;kg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)ln=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ln=!1,Cv(t,e,n);ln=!!(t.flags&131072)}else ln=!1,pt&&e.flags&1048576&&Gm(e,$a,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Da(t,e),t=e.pendingProps;var r=ms(e,$t.current);cs(e,n),r=bf(null,e,i,t,r,n);var s=Lf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,cn(i)?(s=!0,Ya(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,wf(e),r.updater=Sl,e.stateNode=r,r._reactInternals=e,Tc(e,i,t,n),e=Rc(null,e,i,!0,s,n)):(e.tag=0,pt&&s&&vf(e),Qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Da(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Vv(i),t=zn(i,t),r){case 0:e=Ac(null,e,i,t,n);break e;case 1:e=Kd(null,e,i,t,n);break e;case 11:e=qd(null,e,i,t,n);break e;case 14:e=$d(null,e,i,zn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Ac(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Kd(t,e,i,r,n);case 3:e:{if(Sg(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,qm(t,e),Qa(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=xs(Error(ne(423)),e),e=Zd(t,e,i,n,r);break e}else if(i!==r){r=xs(Error(ne(424)),e),e=Zd(t,e,i,n,r);break e}else for(_n=Bi(e.stateNode.containerInfo.firstChild),vn=e,pt=!0,Hn=null,n=jm(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gs(),i===r){e=vi(t,e,n);break e}Qt(t,e,i,n)}e=e.child}return e;case 5:return $m(e),t===null&&Sc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,gc(i,r)?o=null:s!==null&&gc(i,s)&&(e.flags|=32),yg(t,e),Qt(t,e,o,n),e.child;case 6:return t===null&&Sc(e),null;case 13:return Mg(t,e,n);case 4:return Af(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=_s(e,null,i,n):Qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),qd(t,e,i,r,n);case 7:return Qt(t,e,e.pendingProps,n),e.child;case 8:return Qt(t,e,e.pendingProps.children,n),e.child;case 12:return Qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,lt(Ka,i._currentValue),i._currentValue=o,s!==null)if(qn(s.value,o)){if(s.children===r.children&&!un.current){e=vi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=pi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Mc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Mc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,cs(e,n),r=Un(r),i=i(r),e.flags|=1,Qt(t,e,i,n),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),$d(t,e,i,r,n);case 15:return vg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Da(t,e),e.tag=1,cn(i)?(t=!0,Ya(e)):t=!1,cs(e,n),mg(e,i,r),Tc(e,i,r,n),Rc(null,e,i,!0,t,n);case 19:return Eg(t,e,n);case 22:return xg(t,e,n)}throw Error(ne(156,e.tag))};function zg(t,e){return dm(t,e)}function Gv(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new Gv(t,e,n,i)}function Hf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vv(t){if(typeof t=="function")return Hf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===of)return 11;if(t===af)return 14}return 2}function Wi(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Na(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Hf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Yr:return gr(n.children,r,s,e);case sf:o=8,r|=8;break;case qu:return t=Ln(12,n,e,r|2),t.elementType=qu,t.lanes=s,t;case $u:return t=Ln(13,n,e,r),t.elementType=$u,t.lanes=s,t;case Ku:return t=Ln(19,n,e,r),t.elementType=Ku,t.lanes=s,t;case $p:return Tl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Yp:o=10;break e;case qp:o=9;break e;case of:o=11;break e;case af:o=14;break e;case Ri:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Ln(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function gr(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function Tl(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=$p,t.lanes=n,t.stateNode={isHidden:!1},t}function cu(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function fu(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Wv(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xl(0),this.expirationTimes=Xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Gf(t,e,n,i,r,s,o,a,l){return t=new Wv(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wf(s),t}function Xv(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Bg(t){if(!t)return $i;t=t._reactInternals;e:{if(Cr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(cn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(cn(n))return Bm(t,n,e)}return e}function Hg(t,e,n,i,r,s,o,a,l){return t=Gf(n,i,!0,t,r,s,o,a,l),t.context=Bg(null),n=t.current,i=en(),r=Vi(n),s=pi(i,r),s.callback=e??null,Hi(n,s,r),t.current.lanes=r,Ao(t,r,i),fn(t,i),t}function wl(t,e,n,i){var r=e.current,s=en(),o=Vi(r);return n=Bg(n),e.context===null?e.context=n:e.pendingContext=n,e=pi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Hi(r,e,o),t!==null&&(jn(t,r,o,s),Pa(t,r,o)),o}function ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ah(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vf(t,e){ah(t,e),(t=t.alternate)&&ah(t,e)}function jv(){return null}var Gg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wf(t){this._internalRoot=t}Al.prototype.render=Wf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));wl(t,e,null,null)};Al.prototype.unmount=Wf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wr(function(){wl(null,t,null,null)}),e[gi]=null}};function Al(t){this._internalRoot=t}Al.prototype.unstable_scheduleHydration=function(t){if(t){var e=xm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<bi.length&&e!==0&&e<bi[n].priority;n++);bi.splice(n,0,t),n===0&&Sm(t)}};function Xf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Rl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lh(){}function Yv(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=ol(o);s.call(u)}}var o=Hg(e,i,t,0,null,!1,!1,"",lh);return t._reactRootContainer=o,t[gi]=o.current,po(t.nodeType===8?t.parentNode:t),wr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=ol(l);a.call(u)}}var l=Gf(t,0,!1,null,null,!1,!1,"",lh);return t._reactRootContainer=l,t[gi]=l.current,po(t.nodeType===8?t.parentNode:t),wr(function(){wl(e,l,n,i)}),l}function Cl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ol(o);a.call(l)}}wl(e,o,t,r)}else o=Yv(n,e,t,r,i);return ol(o)}_m=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=js(e.pendingLanes);n!==0&&(cf(e,n|1),fn(e,Mt()),!($e&6)&&(ys=Mt()+500,Ji()))}break;case 13:wr(function(){var i=_i(t,1);if(i!==null){var r=en();jn(i,t,1,r)}}),Vf(t,1)}};ff=function(t){if(t.tag===13){var e=_i(t,134217728);if(e!==null){var n=en();jn(e,t,134217728,n)}Vf(t,134217728)}};vm=function(t){if(t.tag===13){var e=Vi(t),n=_i(t,e);if(n!==null){var i=en();jn(n,t,e,i)}Vf(t,e)}};xm=function(){return it};ym=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};oc=function(t,e,n){switch(e){case"input":if(Ju(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=vl(i);if(!r)throw Error(ne(90));Zp(i),Ju(i,r)}}}break;case"textarea":Jp(t,n);break;case"select":e=n.value,e!=null&&os(t,!!n.multiple,e,!1)}};om=kf;am=wr;var qv={usingClientEntryPoint:!1,Events:[Co,Zr,vl,rm,sm,kf]},ks={findFiberByHostInstance:dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$v={bundleType:ks.bundleType,version:ks.version,rendererPackageName:ks.rendererPackageName,rendererConfig:ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cm(t),t===null?null:t.stateNode},findFiberByHostInstance:ks.findFiberByHostInstance||jv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qo.isDisabled&&Qo.supportsFiber)try{pl=Qo.inject($v),Jn=Qo}catch{}}Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qv;Sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xf(e))throw Error(ne(200));return Xv(t,e,null,n)};Sn.createRoot=function(t,e){if(!Xf(t))throw Error(ne(299));var n=!1,i="",r=Gg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Gf(t,1,!1,null,null,n,!1,i,r),t[gi]=e.current,po(t.nodeType===8?t.parentNode:t),new Wf(e)};Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=cm(e),t=t===null?null:t.stateNode,t};Sn.flushSync=function(t){return wr(t)};Sn.hydrate=function(t,e,n){if(!Rl(e))throw Error(ne(200));return Cl(null,t,e,!0,n)};Sn.hydrateRoot=function(t,e,n){if(!Xf(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Gg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Hg(e,null,t,1,n??null,r,!1,s,o),t[gi]=e.current,po(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Al(e)};Sn.render=function(t,e,n){if(!Rl(e))throw Error(ne(200));return Cl(null,t,e,!1,n)};Sn.unmountComponentAtNode=function(t){if(!Rl(t))throw Error(ne(40));return t._reactRootContainer?(wr(function(){Cl(null,null,t,!1,function(){t._reactRootContainer=null,t[gi]=null})}),!0):!1};Sn.unstable_batchedUpdates=kf;Sn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Rl(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Cl(t,e,n,!1,i)};Sn.version="18.3.1-next-f1338f8080-20240426";function Vg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vg)}catch(t){console.error(t)}}Vg(),Vp.exports=Sn;var Kv=Vp.exports,uh=Kv;ju.createRoot=uh.createRoot,ju.hydrateRoot=uh.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jf="160",Zv=0,ch=1,Qv=2,Wg=1,Jv=2,ai=3,Ki=0,dn=1,ci=2,Xi=0,ds=1,io=2,fh=3,dh=4,ex=5,cr=100,tx=101,nx=102,hh=103,ph=104,ix=200,rx=201,sx=202,ox=203,zc=204,Bc=205,ax=206,lx=207,ux=208,cx=209,fx=210,dx=211,hx=212,px=213,mx=214,gx=0,_x=1,vx=2,al=3,xx=4,yx=5,Sx=6,Mx=7,Xg=0,Ex=1,Tx=2,ji=0,wx=1,Ax=2,Rx=3,Cx=4,Px=5,bx=6,jg=300,Ss=301,Ms=302,Hc=303,Gc=304,Pl=306,Vc=1e3,Vn=1001,Wc=1002,Jt=1003,mh=1004,du=1005,Cn=1006,Lx=1007,Eo=1008,Yi=1009,Dx=1010,Ux=1011,Yf=1012,Yg=1013,Ii=1014,Ni=1015,To=1016,qg=1017,$g=1018,_r=1020,Ix=1021,Wn=1023,Nx=1024,Fx=1025,vr=1026,Es=1027,Ox=1028,Kg=1029,kx=1030,Zg=1031,Qg=1033,hu=33776,pu=33777,mu=33778,gu=33779,gh=35840,_h=35841,vh=35842,xh=35843,Jg=36196,yh=37492,Sh=37496,Mh=37808,Eh=37809,Th=37810,wh=37811,Ah=37812,Rh=37813,Ch=37814,Ph=37815,bh=37816,Lh=37817,Dh=37818,Uh=37819,Ih=37820,Nh=37821,_u=36492,Fh=36494,Oh=36495,zx=36283,kh=36284,zh=36285,Bh=36286,e_=3e3,xr=3001,Bx=3200,Hx=3201,Gx=0,Vx=1,bn="",kt="srgb",xi="srgb-linear",qf="display-p3",bl="display-p3-linear",ll="linear",dt="srgb",ul="rec709",cl="p3",br=7680,Hh=519,Wx=512,Xx=513,jx=514,t_=515,Yx=516,qx=517,$x=518,Kx=519,Gh=35044,Vh="300 es",Xc=1035,hi=2e3,fl=2001;class Cs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vu=Math.PI/180,jc=180/Math.PI;function bo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function an(t,e,n){return Math.max(e,Math.min(n,t))}function Zx(t,e){return(t%e+e)%e}function xu(t,e,n){return(1-n)*t+n*e}function Wh(t){return(t&t-1)===0&&t!==0}function Yc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function zs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class rt{constructor(e=0,n=0){rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,s,o,a,l,u){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],h=i[7],d=i[2],m=i[5],x=i[8],v=r[0],p=r[3],c=r[6],g=r[1],_=r[4],M=r[7],C=r[2],R=r[5],A=r[8];return s[0]=o*v+a*g+l*C,s[3]=o*p+a*_+l*R,s[6]=o*c+a*M+l*A,s[1]=u*v+f*g+h*C,s[4]=u*p+f*_+h*R,s[7]=u*c+f*M+h*A,s[2]=d*v+m*g+x*C,s[5]=d*p+m*_+x*R,s[8]=d*c+m*M+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=f*o-a*u,d=a*l-f*s,m=u*s-o*l,x=n*h+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=h*v,e[1]=(r*u-f*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(f*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=m*v,e[7]=(i*l-u*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(yu.makeScale(e,n)),this}rotate(e){return this.premultiply(yu.makeRotation(-e)),this}translate(e,n){return this.premultiply(yu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yu=new je;function n_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function dl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Qx(){const t=dl("canvas");return t.style.display="block",t}const Xh={};function ro(t){t in Xh||(Xh[t]=!0,console.warn(t))}const jh=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yh=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Jo={[xi]:{transfer:ll,primaries:ul,toReference:t=>t,fromReference:t=>t},[kt]:{transfer:dt,primaries:ul,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[bl]:{transfer:ll,primaries:cl,toReference:t=>t.applyMatrix3(Yh),fromReference:t=>t.applyMatrix3(jh)},[qf]:{transfer:dt,primaries:cl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Yh),fromReference:t=>t.applyMatrix3(jh).convertLinearToSRGB()}},Jx=new Set([xi,bl]),st={enabled:!0,_workingColorSpace:xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Jx.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Jo[e].toReference,r=Jo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Jo[t].primaries},getTransfer:function(t){return t===bn?ll:Jo[t].transfer}};function hs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Su(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Lr;class i_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Lr===void 0&&(Lr=dl("canvas")),Lr.width=e.width,Lr.height=e.height;const i=Lr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Lr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=dl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=hs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(hs(n[i]/255)*255):n[i]=hs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ey=0;class r_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=bo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Mu(r[o].image)):s.push(Mu(r[o]))}else s=Mu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Mu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?i_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ty=0;class xn extends Cs{constructor(e=xn.DEFAULT_IMAGE,n=xn.DEFAULT_MAPPING,i=Vn,r=Vn,s=Cn,o=Eo,a=Wn,l=Yi,u=xn.DEFAULT_ANISOTROPY,f=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=bo(),this.name="",this.source=new r_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===xr?kt:bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vc:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case Wc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vc:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case Wc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===kt?xr:e_}set encoding(e){ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===xr?kt:bn}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=jg;xn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,n=0,i=0,r=1){zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],h=l[8],d=l[1],m=l[5],x=l[9],v=l[2],p=l[6],c=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-v)<.01&&Math.abs(x-p)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+v)<.1&&Math.abs(x+p)<.1&&Math.abs(u+m+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,M=(m+1)/2,C=(c+1)/2,R=(f+d)/4,A=(h+v)/4,F=(x+p)/4;return _>M&&_>C?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=R/i,s=A/i):M>C?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=R/r,s=F/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=F/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-x)*(p-x)+(h-v)*(h-v)+(d-f)*(d-f));return Math.abs(g)<.001&&(g=1),this.x=(p-x)/g,this.y=(h-v)/g,this.z=(d-f)/g,this.w=Math.acos((u+m+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ny extends Cs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(ro("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===xr?kt:bn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new xn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new r_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends ny{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class s_ extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class iy extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],m=s[o+1],x=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=x,e[n+3]=v;return}if(h!==v||l!==d||u!==m||f!==x){let p=1-a;const c=l*d+u*m+f*x+h*v,g=c>=0?1:-1,_=1-c*c;if(_>Number.EPSILON){const C=Math.sqrt(_),R=Math.atan2(C,c*g);p=Math.sin(p*R)/C,a=Math.sin(a*R)/C}const M=a*g;if(l=l*p+d*M,u=u*p+m*M,f=f*p+x*M,h=h*p+v*M,p===1-a){const C=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=C,u*=C,f*=C,h*=C}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],h=s[o],d=s[o+1],m=s[o+2],x=s[o+3];return e[n]=a*x+f*h+l*m-u*d,e[n+1]=l*x+f*d+u*h-a*m,e[n+2]=u*x+f*m+a*d-l*h,e[n+3]=f*x-a*h-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*f*h+u*m*x,this._y=u*m*h-d*f*x,this._z=u*f*x+d*m*h,this._w=u*f*h-d*m*x;break;case"YXZ":this._x=d*f*h+u*m*x,this._y=u*m*h-d*f*x,this._z=u*f*x-d*m*h,this._w=u*f*h+d*m*x;break;case"ZXY":this._x=d*f*h-u*m*x,this._y=u*m*h+d*f*x,this._z=u*f*x+d*m*h,this._w=u*f*h-d*m*x;break;case"ZYX":this._x=d*f*h-u*m*x,this._y=u*m*h+d*f*x,this._z=u*f*x-d*m*h,this._w=u*f*h+d*m*x;break;case"YZX":this._x=d*f*h+u*m*x,this._y=u*m*h+d*f*x,this._z=u*f*x-d*m*h,this._w=u*f*h-d*m*x;break;case"XZY":this._x=d*f*h-u*m*x,this._y=u*m*h-d*f*x,this._z=u*f*x+d*m*h,this._w=u*f*h+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),h=Math.sin((1-n)*f)/u,d=Math.sin(n*f)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(qh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(qh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*u+o*h-a*f,this.y=i+l*f+a*u-s*h,this.z=r+l*h+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Eu.copy(this).projectOnVector(e),this.sub(Eu)}reflect(e){return this.sub(Eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eu=new B,qh=new Lo;class Do{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ea.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ea.copy(i.boundingBox)),ea.applyMatrix4(e.matrixWorld),this.union(ea)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),ta.subVectors(this.max,Bs),Dr.subVectors(e.a,Bs),Ur.subVectors(e.b,Bs),Ir.subVectors(e.c,Bs),Mi.subVectors(Ur,Dr),Ei.subVectors(Ir,Ur),ir.subVectors(Dr,Ir);let n=[0,-Mi.z,Mi.y,0,-Ei.z,Ei.y,0,-ir.z,ir.y,Mi.z,0,-Mi.x,Ei.z,0,-Ei.x,ir.z,0,-ir.x,-Mi.y,Mi.x,0,-Ei.y,Ei.x,0,-ir.y,ir.x,0];return!Tu(n,Dr,Ur,Ir,ta)||(n=[1,0,0,0,1,0,0,0,1],!Tu(n,Dr,Ur,Ir,ta))?!1:(na.crossVectors(Mi,Ei),n=[na.x,na.y,na.z],Tu(n,Dr,Ur,Ir,ta))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ni=[new B,new B,new B,new B,new B,new B,new B,new B],Fn=new B,ea=new Do,Dr=new B,Ur=new B,Ir=new B,Mi=new B,Ei=new B,ir=new B,Bs=new B,ta=new B,na=new B,rr=new B;function Tu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){rr.fromArray(t,s);const a=r.x*Math.abs(rr.x)+r.y*Math.abs(rr.y)+r.z*Math.abs(rr.z),l=e.dot(rr),u=n.dot(rr),f=i.dot(rr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const ry=new Do,Hs=new B,wu=new B;class Ll{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ry.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hs.subVectors(e,this.center);const n=Hs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Hs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hs.copy(e.center).add(wu)),this.expandByPoint(Hs.copy(e.center).sub(wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new B,Au=new B,ia=new B,Ti=new B,Ru=new B,ra=new B,Cu=new B;class $f{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,n),ii.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Au.copy(e).add(n).multiplyScalar(.5),ia.copy(n).sub(e).normalize(),Ti.copy(this.origin).sub(Au);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ia),a=Ti.dot(this.direction),l=-Ti.dot(ia),u=Ti.lengthSq(),f=Math.abs(1-o*o);let h,d,m,x;if(f>0)if(h=o*l-a,d=o*a-l,x=s*f,h>=0)if(d>=-x)if(d<=x){const v=1/f;h*=v,d*=v,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;else d<=-x?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+u):d<=x?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Au).addScaledVector(ia,d),m}intersectSphere(e,n){ii.subVectors(e.center,this.origin);const i=ii.dot(this.direction),r=ii.dot(ii)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,n,i,r,s){Ru.subVectors(n,e),ra.subVectors(i,e),Cu.crossVectors(Ru,ra);let o=this.direction.dot(Cu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ti.subVectors(this.origin,e);const l=a*this.direction.dot(ra.crossVectors(Ti,ra));if(l<0)return null;const u=a*this.direction.dot(Ru.cross(Ti));if(u<0||l+u>o)return null;const f=-a*Ti.dot(Cu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(e,n,i,r,s,o,a,l,u,f,h,d,m,x,v,p){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,h,d,m,x,v,p)}set(e,n,i,r,s,o,a,l,u,f,h,d,m,x,v,p){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=h,c[14]=d,c[3]=m,c[7]=x,c[11]=v,c[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Nr.setFromMatrixColumn(e,0).length(),s=1/Nr.setFromMatrixColumn(e,1).length(),o=1/Nr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,m=o*h,x=a*f,v=a*h;n[0]=l*f,n[4]=-l*h,n[8]=u,n[1]=m+x*u,n[5]=d-v*u,n[9]=-a*l,n[2]=v-d*u,n[6]=x+m*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,m=l*h,x=u*f,v=u*h;n[0]=d+v*a,n[4]=x*a-m,n[8]=o*u,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=m*a-x,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,m=l*h,x=u*f,v=u*h;n[0]=d-v*a,n[4]=-o*h,n[8]=x+m*a,n[1]=m+x*a,n[5]=o*f,n[9]=v-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,m=o*h,x=a*f,v=a*h;n[0]=l*f,n[4]=x*u-m,n[8]=d*u+v,n[1]=l*h,n[5]=v*u+d,n[9]=m*u-x,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*u,x=a*l,v=a*u;n[0]=l*f,n[4]=v-d*h,n[8]=x*h+m,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=m*h+x,n[10]=d-v*h}else if(e.order==="XZY"){const d=o*l,m=o*u,x=a*l,v=a*u;n[0]=l*f,n[4]=-h,n[8]=u*f,n[1]=d*h+v,n[5]=o*f,n[9]=m*h-x,n[2]=x*h-m,n[6]=a*f,n[10]=v*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sy,e,oy)}lookAt(e,n,i){const r=this.elements;return pn.subVectors(e,n),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),wi.crossVectors(i,pn),wi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),wi.crossVectors(i,pn)),wi.normalize(),sa.crossVectors(pn,wi),r[0]=wi.x,r[4]=sa.x,r[8]=pn.x,r[1]=wi.y,r[5]=sa.y,r[9]=pn.y,r[2]=wi.z,r[6]=sa.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],h=i[5],d=i[9],m=i[13],x=i[2],v=i[6],p=i[10],c=i[14],g=i[3],_=i[7],M=i[11],C=i[15],R=r[0],A=r[4],F=r[8],E=r[12],w=r[1],W=r[5],Y=r[9],re=r[13],L=r[2],V=r[6],X=r[10],q=r[14],U=r[3],k=r[7],G=r[11],j=r[15];return s[0]=o*R+a*w+l*L+u*U,s[4]=o*A+a*W+l*V+u*k,s[8]=o*F+a*Y+l*X+u*G,s[12]=o*E+a*re+l*q+u*j,s[1]=f*R+h*w+d*L+m*U,s[5]=f*A+h*W+d*V+m*k,s[9]=f*F+h*Y+d*X+m*G,s[13]=f*E+h*re+d*q+m*j,s[2]=x*R+v*w+p*L+c*U,s[6]=x*A+v*W+p*V+c*k,s[10]=x*F+v*Y+p*X+c*G,s[14]=x*E+v*re+p*q+c*j,s[3]=g*R+_*w+M*L+C*U,s[7]=g*A+_*W+M*V+C*k,s[11]=g*F+_*Y+M*X+C*G,s[15]=g*E+_*re+M*q+C*j,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],h=e[6],d=e[10],m=e[14],x=e[3],v=e[7],p=e[11],c=e[15];return x*(+s*l*h-r*u*h-s*a*d+i*u*d+r*a*m-i*l*m)+v*(+n*l*m-n*u*d+s*o*d-r*o*m+r*u*f-s*l*f)+p*(+n*u*h-n*a*m-s*o*h+i*o*m+s*a*f-i*u*f)+c*(-r*a*f-n*l*h+n*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=e[9],d=e[10],m=e[11],x=e[12],v=e[13],p=e[14],c=e[15],g=h*p*u-v*d*u+v*l*m-a*p*m-h*l*c+a*d*c,_=x*d*u-f*p*u-x*l*m+o*p*m+f*l*c-o*d*c,M=f*v*u-x*h*u+x*a*m-o*v*m-f*a*c+o*h*c,C=x*h*l-f*v*l-x*a*d+o*v*d+f*a*p-o*h*p,R=n*g+i*_+r*M+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=g*A,e[1]=(v*d*s-h*p*s-v*r*m+i*p*m+h*r*c-i*d*c)*A,e[2]=(a*p*s-v*l*s+v*r*u-i*p*u-a*r*c+i*l*c)*A,e[3]=(h*l*s-a*d*s-h*r*u+i*d*u+a*r*m-i*l*m)*A,e[4]=_*A,e[5]=(f*p*s-x*d*s+x*r*m-n*p*m-f*r*c+n*d*c)*A,e[6]=(x*l*s-o*p*s-x*r*u+n*p*u+o*r*c-n*l*c)*A,e[7]=(o*d*s-f*l*s+f*r*u-n*d*u-o*r*m+n*l*m)*A,e[8]=M*A,e[9]=(x*h*s-f*v*s-x*i*m+n*v*m+f*i*c-n*h*c)*A,e[10]=(o*v*s-x*a*s+x*i*u-n*v*u-o*i*c+n*a*c)*A,e[11]=(f*a*s-o*h*s-f*i*u+n*h*u+o*i*m-n*a*m)*A,e[12]=C*A,e[13]=(f*v*r-x*h*r+x*i*d-n*v*d-f*i*p+n*h*p)*A,e[14]=(x*a*r-o*v*r-x*i*l+n*v*l+o*i*p-n*a*p)*A,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*d+n*a*d)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,h=a+a,d=s*u,m=s*f,x=s*h,v=o*f,p=o*h,c=a*h,g=l*u,_=l*f,M=l*h,C=i.x,R=i.y,A=i.z;return r[0]=(1-(v+c))*C,r[1]=(m+M)*C,r[2]=(x-_)*C,r[3]=0,r[4]=(m-M)*R,r[5]=(1-(d+c))*R,r[6]=(p+g)*R,r[7]=0,r[8]=(x+_)*A,r[9]=(p-g)*A,r[10]=(1-(d+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Nr.set(r[0],r[1],r[2]).length();const o=Nr.set(r[4],r[5],r[6]).length(),a=Nr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const u=1/s,f=1/o,h=1/a;return On.elements[0]*=u,On.elements[1]*=u,On.elements[2]*=u,On.elements[4]*=f,On.elements[5]*=f,On.elements[6]*=f,On.elements[8]*=h,On.elements[9]*=h,On.elements[10]*=h,n.setFromRotationMatrix(On),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=hi){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let m,x;if(a===hi)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===fl)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=hi){const l=this.elements,u=1/(n-e),f=1/(i-r),h=1/(o-s),d=(n+e)*u,m=(i+r)*f;let x,v;if(a===hi)x=(o+s)*h,v=-2*h;else if(a===fl)x=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Nr=new B,On=new Ft,sy=new B(0,0,0),oy=new B(1,1,1),wi=new B,sa=new B,pn=new B,$h=new Ft,Kh=new Lo;class Dl{constructor(e=0,n=0,i=0,r=Dl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-an(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(an(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return $h.makeRotationFromQuaternion(e),this.setFromRotationMatrix($h,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dl.DEFAULT_ORDER="XYZ";class Kf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ay=0;const Zh=new B,Fr=new Lo,ri=new Ft,oa=new B,Gs=new B,ly=new B,uy=new Lo,Qh=new B(1,0,0),Jh=new B(0,1,0),ep=new B(0,0,1),cy={type:"added"},fy={type:"removed"};class hn extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new B,n=new Dl,i=new Lo,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ft},normalMatrix:{value:new je}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Fr.setFromAxisAngle(e,n),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,n){return Fr.setFromAxisAngle(e,n),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis(Qh,e)}rotateY(e){return this.rotateOnAxis(Jh,e)}rotateZ(e){return this.rotateOnAxis(ep,e)}translateOnAxis(e,n){return Zh.copy(e).applyQuaternion(this.quaternion),this.position.add(Zh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qh,e)}translateY(e){return this.translateOnAxis(Jh,e)}translateZ(e){return this.translateOnAxis(ep,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?oa.copy(e):oa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Gs,oa,this.up):ri.lookAt(oa,Gs,this.up),this.quaternion.setFromRotationMatrix(ri),r&&(ri.extractRotation(r.matrixWorld),Fr.setFromRotationMatrix(ri),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(cy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(fy)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,ly),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,uy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}hn.DEFAULT_UP=new B(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new B,si=new B,Pu=new B,oi=new B,Or=new B,kr=new B,tp=new B,bu=new B,Lu=new B,Du=new B;let aa=!1;class Gn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),kn.subVectors(e,n),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){kn.subVectors(r,n),si.subVectors(i,n),Pu.subVectors(e,n);const o=kn.dot(kn),a=kn.dot(si),l=kn.dot(Pu),u=si.dot(si),f=si.dot(Pu),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(u*l-a*f)*d,x=(o*f-a*l)*d;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getUV(e,n,i,r,s,o,a,l){return aa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),aa=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static isFrontFacing(e,n,i,r){return kn.subVectors(i,n),si.subVectors(e,n),kn.cross(si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),kn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return aa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),aa=!0),Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Or.subVectors(r,i),kr.subVectors(s,i),bu.subVectors(e,i);const l=Or.dot(bu),u=kr.dot(bu);if(l<=0&&u<=0)return n.copy(i);Lu.subVectors(e,r);const f=Or.dot(Lu),h=kr.dot(Lu);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*u;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Or,o);Du.subVectors(e,s);const m=Or.dot(Du),x=kr.dot(Du);if(x>=0&&m<=x)return n.copy(s);const v=m*u-l*x;if(v<=0&&u>=0&&x<=0)return a=u/(u-x),n.copy(i).addScaledVector(kr,a);const p=f*x-m*h;if(p<=0&&h-f>=0&&m-x>=0)return tp.subVectors(s,r),a=(h-f)/(h-f+(m-x)),n.copy(r).addScaledVector(tp,a);const c=1/(p+v+d);return o=v*c,a=d*c,n.copy(i).addScaledVector(Or,o).addScaledVector(kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const o_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},la={h:0,s:0,l:0};function Uu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=Zx(e,1),n=an(n,0,1),i=an(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Uu(o,s,e+1/3),this.g=Uu(o,s,e),this.b=Uu(o,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,n=kt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kt){const i=o_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=Su(e.r),this.g=Su(e.g),this.b=Su(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return st.fromWorkingColorSpace(Yt.copy(this),e),Math.round(an(Yt.r*255,0,255))*65536+Math.round(an(Yt.g*255,0,255))*256+Math.round(an(Yt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.fromWorkingColorSpace(Yt.copy(this),n);const i=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=st.workingColorSpace){return st.fromWorkingColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=kt){st.fromWorkingColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,r=Yt.b;return e!==kt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+n,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ai),e.getHSL(la);const i=xu(Ai.h,la.h,n),r=xu(Ai.s,la.s,n),s=xu(Ai.l,la.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new tt;tt.NAMES=o_;let dy=0;class Uo extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=bo(),this.name="",this.type="Material",this.blending=ds,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zc,this.blendDst=Bc,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=al,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zc&&(i.blendSrc=this.blendSrc),this.blendDst!==Bc&&(i.blendDst=this.blendDst),this.blendEquation!==cr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==al&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class a_ extends Uo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new B,ua=new rt;class It{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Gh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ua.fromBufferAttribute(this,n),ua.applyMatrix3(e),this.setXY(n,ua.x,ua.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=zs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=zs(n,this.array)),n}setX(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=zs(n,this.array)),n}setY(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=zs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=zs(n,this.array)),n}setW(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array),s=sn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gh&&(e.usage=this.usage),e}}class l_ extends It{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class u_ extends It{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class yr extends It{constructor(e,n,i){super(new Float32Array(e),n,i)}}let hy=0;const wn=new Ft,Iu=new hn,zr=new B,mn=new Do,Vs=new Do,Dt=new B;class Yn extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=bo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(n_(e)?u_:l_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,n,i){return wn.makeTranslation(e,n,i),this.applyMatrix4(wn),this}scale(e,n,i){return wn.makeScale(e,n,i),this.applyMatrix4(wn),this}lookAt(e){return Iu.lookAt(e),Iu.updateMatrix(),this.applyMatrix4(Iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Do);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ll);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(mn.min,Vs.min),mn.expandByPoint(Dt),Dt.addVectors(mn.max,Vs.max),mn.expandByPoint(Dt)):(mn.expandByPoint(Vs.min),mn.expandByPoint(Vs.max))}mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Dt.fromBufferAttribute(a,u),l&&(zr.fromBufferAttribute(e,u),Dt.add(zr)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let w=0;w<a;w++)u[w]=new B,f[w]=new B;const h=new B,d=new B,m=new B,x=new rt,v=new rt,p=new rt,c=new B,g=new B;function _(w,W,Y){h.fromArray(r,w*3),d.fromArray(r,W*3),m.fromArray(r,Y*3),x.fromArray(o,w*2),v.fromArray(o,W*2),p.fromArray(o,Y*2),d.sub(h),m.sub(h),v.sub(x),p.sub(x);const re=1/(v.x*p.y-p.x*v.y);isFinite(re)&&(c.copy(d).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(re),g.copy(m).multiplyScalar(v.x).addScaledVector(d,-p.x).multiplyScalar(re),u[w].add(c),u[W].add(c),u[Y].add(c),f[w].add(g),f[W].add(g),f[Y].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let w=0,W=M.length;w<W;++w){const Y=M[w],re=Y.start,L=Y.count;for(let V=re,X=re+L;V<X;V+=3)_(i[V+0],i[V+1],i[V+2])}const C=new B,R=new B,A=new B,F=new B;function E(w){A.fromArray(s,w*3),F.copy(A);const W=u[w];C.copy(W),C.sub(A.multiplyScalar(A.dot(W))).normalize(),R.crossVectors(F,W);const re=R.dot(f[w])<0?-1:1;l[w*4]=C.x,l[w*4+1]=C.y,l[w*4+2]=C.z,l[w*4+3]=re}for(let w=0,W=M.length;w<W;++w){const Y=M[w],re=Y.start,L=Y.count;for(let V=re,X=re+L;V<X;V+=3)E(i[V+0]),E(i[V+1]),E(i[V+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new It(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,u=new B,f=new B,h=new B;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,p),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,p),a.add(f),l.add(f),u.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,h=a.normalized,d=new u.constructor(l.length*f);let m=0,x=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*f;for(let c=0;c<f;c++)d[x++]=u[m++]}return new It(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Yn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,h=u.length;f<h;f++){const d=u[f],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,d=u.length;h<d;h++){const m=u[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],h=s[u];for(let d=0,m=h.length;d<m;d++)f.push(h[d].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const np=new Ft,sr=new $f,ca=new Ll,ip=new B,Br=new B,Hr=new B,Gr=new B,Nu=new B,fa=new B,da=new rt,ha=new rt,pa=new rt,rp=new B,sp=new B,op=new B,ma=new B,ga=new B;class Fi extends hn{constructor(e=new Yn,n=new a_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){fa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],h=s[l];f!==0&&(Nu.fromBufferAttribute(h,e),o?fa.addScaledVector(Nu,f):fa.addScaledVector(Nu.sub(n),f))}n.add(fa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ca.copy(i.boundingSphere),ca.applyMatrix4(s),sr.copy(e.ray).recast(e.near),!(ca.containsPoint(sr.origin)===!1&&(sr.intersectSphere(ca,ip)===null||sr.origin.distanceToSquared(ip)>(e.far-e.near)**2))&&(np.copy(s).invert(),sr.copy(e.ray).applyMatrix4(np),!(i.boundingBox!==null&&sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,sr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){const p=d[x],c=o[p.materialIndex],g=Math.max(p.start,m.start),_=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=g,C=_;M<C;M+=3){const R=a.getX(M),A=a.getX(M+1),F=a.getX(M+2);r=_a(this,c,e,i,u,f,h,R,A,F),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=x,c=v;p<c;p+=3){const g=a.getX(p),_=a.getX(p+1),M=a.getX(p+2);r=_a(this,o,e,i,u,f,h,g,_,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){const p=d[x],c=o[p.materialIndex],g=Math.max(p.start,m.start),_=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=g,C=_;M<C;M+=3){const R=M,A=M+1,F=M+2;r=_a(this,c,e,i,u,f,h,R,A,F),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=x,c=v;p<c;p+=3){const g=p,_=p+1,M=p+2;r=_a(this,o,e,i,u,f,h,g,_,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function py(t,e,n,i,r,s,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ki,a),l===null)return null;ga.copy(a),ga.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ga);return u<n.near||u>n.far?null:{distance:u,point:ga.clone(),object:t}}function _a(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Br),t.getVertexPosition(l,Hr),t.getVertexPosition(u,Gr);const f=py(t,e,n,i,Br,Hr,Gr,ma);if(f){r&&(da.fromBufferAttribute(r,a),ha.fromBufferAttribute(r,l),pa.fromBufferAttribute(r,u),f.uv=Gn.getInterpolation(ma,Br,Hr,Gr,da,ha,pa,new rt)),s&&(da.fromBufferAttribute(s,a),ha.fromBufferAttribute(s,l),pa.fromBufferAttribute(s,u),f.uv1=Gn.getInterpolation(ma,Br,Hr,Gr,da,ha,pa,new rt),f.uv2=f.uv1),o&&(rp.fromBufferAttribute(o,a),sp.fromBufferAttribute(o,l),op.fromBufferAttribute(o,u),f.normal=Gn.getInterpolation(ma,Br,Hr,Gr,rp,sp,op,new B),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new B,materialIndex:0};Gn.getNormal(Br,Hr,Gr,h.normal),f.face=h}return f}class Io extends Yn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],h=[];let d=0,m=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yr(u,3)),this.setAttribute("normal",new yr(f,3)),this.setAttribute("uv",new yr(h,2));function x(v,p,c,g,_,M,C,R,A,F,E){const w=M/A,W=C/F,Y=M/2,re=C/2,L=R/2,V=A+1,X=F+1;let q=0,U=0;const k=new B;for(let G=0;G<X;G++){const j=G*W-re;for(let Z=0;Z<V;Z++){const H=Z*w-Y;k[v]=H*g,k[p]=j*_,k[c]=L,u.push(k.x,k.y,k.z),k[v]=0,k[p]=0,k[c]=R>0?1:-1,f.push(k.x,k.y,k.z),h.push(Z/A),h.push(1-G/F),q+=1}}for(let G=0;G<F;G++)for(let j=0;j<A;j++){const Z=d+j+V*G,H=d+j+V*(G+1),$=d+(j+1)+V*(G+1),fe=d+(j+1)+V*G;l.push(Z,H,fe),l.push(H,$,fe),U+=6}a.addGroup(m,U,E),m+=U,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Zt(t){const e={};for(let n=0;n<t.length;n++){const i=Ts(t[n]);for(const r in i)e[r]=i[r]}return e}function my(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function c_(t){return t.getRenderTarget()===null?t.outputColorSpace:st.workingColorSpace}const gy={clone:Ts,merge:Zt};var _y=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends Uo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_y,this.fragmentShader=vy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=my(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class f_ extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pn extends f_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=jc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jc*2*Math.atan(Math.tan(vu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(vu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Vr=-90,Wr=1;class xy extends hn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(Vr,Wr,e,n);r.layers=this.layers,this.add(r);const s=new Pn(Vr,Wr,e,n);s.layers=this.layers,this.add(s);const o=new Pn(Vr,Wr,e,n);o.layers=this.layers,this.add(o);const a=new Pn(Vr,Wr,e,n);a.layers=this.layers,this.add(a);const l=new Pn(Vr,Wr,e,n);l.layers=this.layers,this.add(l);const u=new Pn(Vr,Wr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class d_ extends xn{constructor(e,n,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:Ss,super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yy extends Ar{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(ro("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===xr?kt:bn),this.texture=new d_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Io(5,5,5),s=new ti({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Xi});s.uniforms.tEquirect.value=n;const o=new Fi(r,s),a=n.minFilter;return n.minFilter===Eo&&(n.minFilter=Cn),new xy(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Fu=new B,Sy=new B,My=new je;class Pi{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Fu.subVectors(i,n).cross(Sy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Fu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||My.getNormalMatrix(e),r=this.coplanarPoint(Fu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new Ll,va=new B;class h_{constructor(e=new Pi,n=new Pi,i=new Pi,r=new Pi,s=new Pi,o=new Pi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=hi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],m=r[8],x=r[9],v=r[10],p=r[11],c=r[12],g=r[13],_=r[14],M=r[15];if(i[0].setComponents(l-s,d-u,p-m,M-c).normalize(),i[1].setComponents(l+s,d+u,p+m,M+c).normalize(),i[2].setComponents(l+o,d+f,p+x,M+g).normalize(),i[3].setComponents(l-o,d-f,p-x,M-g).normalize(),i[4].setComponents(l-a,d-h,p-v,M-_).normalize(),n===hi)i[5].setComponents(l+a,d+h,p+v,M+_).normalize();else if(n===fl)i[5].setComponents(a,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(va.x=r.normal.x>0?e.max.x:e.min.x,va.y=r.normal.y>0?e.max.y:e.min.y,va.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(va)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function p_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Ey(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const h=u.array,d=u.usage,m=h.byteLength,x=t.createBuffer();t.bindBuffer(f,x),t.bufferData(f,h,d),u.onUploadCallback();let v;if(h instanceof Float32Array)v=t.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)v=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=t.SHORT;else if(h instanceof Uint32Array)v=t.UNSIGNED_INT;else if(h instanceof Int32Array)v=t.INT;else if(h instanceof Int8Array)v=t.BYTE;else if(h instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:m}}function s(u,f,h){const d=f.array,m=f._updateRange,x=f.updateRanges;if(t.bindBuffer(h,u),m.count===-1&&x.length===0&&t.bufferSubData(h,0,d),x.length!==0){for(let v=0,p=x.length;v<p;v++){const c=x[v];n?t.bufferSubData(h,c.start*d.BYTES_PER_ELEMENT,d,c.start,c.count):t.bufferSubData(h,c.start*d.BYTES_PER_ELEMENT,d.subarray(c.start,c.start+c.count))}f.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):t.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);if(h===void 0)i.set(u,r(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,u,f),h.version=u.version}}return{get:o,remove:a,update:l}}class Zf extends Yn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,h=e/a,d=n/l,m=[],x=[],v=[],p=[];for(let c=0;c<f;c++){const g=c*d-o;for(let _=0;_<u;_++){const M=_*h-s;x.push(M,-g,0),v.push(0,0,1),p.push(_/a),p.push(1-c/l)}}for(let c=0;c<l;c++)for(let g=0;g<a;g++){const _=g+u*c,M=g+u*(c+1),C=g+1+u*(c+1),R=g+1+u*c;m.push(_,M,R),m.push(M,C,R)}this.setIndex(m),this.setAttribute("position",new yr(x,3)),this.setAttribute("normal",new yr(v,3)),this.setAttribute("uv",new yr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zf(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ty=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ay=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ry=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Py=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,by=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ly=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dy=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Uy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Iy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ny=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Oy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ky=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,jy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$y=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ky=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eS="gl_FragColor = linearToOutputTexel( gl_FragColor );",tS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,nS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,iS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,aS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_S=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ES=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,TS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,AS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,LS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,US=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,IS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,zS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,BS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,HS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,GS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,VS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,YS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$S=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,JS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,oM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_M=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,MM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const EM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,LM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,UM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,GM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,WM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$M=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,QM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:Ty,alphahash_pars_fragment:wy,alphamap_fragment:Ay,alphamap_pars_fragment:Ry,alphatest_fragment:Cy,alphatest_pars_fragment:Py,aomap_fragment:by,aomap_pars_fragment:Ly,batching_pars_vertex:Dy,batching_vertex:Uy,begin_vertex:Iy,beginnormal_vertex:Ny,bsdfs:Fy,iridescence_fragment:Oy,bumpmap_pars_fragment:ky,clipping_planes_fragment:zy,clipping_planes_pars_fragment:By,clipping_planes_pars_vertex:Hy,clipping_planes_vertex:Gy,color_fragment:Vy,color_pars_fragment:Wy,color_pars_vertex:Xy,color_vertex:jy,common:Yy,cube_uv_reflection_fragment:qy,defaultnormal_vertex:$y,displacementmap_pars_vertex:Ky,displacementmap_vertex:Zy,emissivemap_fragment:Qy,emissivemap_pars_fragment:Jy,colorspace_fragment:eS,colorspace_pars_fragment:tS,envmap_fragment:nS,envmap_common_pars_fragment:iS,envmap_pars_fragment:rS,envmap_pars_vertex:sS,envmap_physical_pars_fragment:_S,envmap_vertex:oS,fog_vertex:aS,fog_pars_vertex:lS,fog_fragment:uS,fog_pars_fragment:cS,gradientmap_pars_fragment:fS,lightmap_fragment:dS,lightmap_pars_fragment:hS,lights_lambert_fragment:pS,lights_lambert_pars_fragment:mS,lights_pars_begin:gS,lights_toon_fragment:vS,lights_toon_pars_fragment:xS,lights_phong_fragment:yS,lights_phong_pars_fragment:SS,lights_physical_fragment:MS,lights_physical_pars_fragment:ES,lights_fragment_begin:TS,lights_fragment_maps:wS,lights_fragment_end:AS,logdepthbuf_fragment:RS,logdepthbuf_pars_fragment:CS,logdepthbuf_pars_vertex:PS,logdepthbuf_vertex:bS,map_fragment:LS,map_pars_fragment:DS,map_particle_fragment:US,map_particle_pars_fragment:IS,metalnessmap_fragment:NS,metalnessmap_pars_fragment:FS,morphcolor_vertex:OS,morphnormal_vertex:kS,morphtarget_pars_vertex:zS,morphtarget_vertex:BS,normal_fragment_begin:HS,normal_fragment_maps:GS,normal_pars_fragment:VS,normal_pars_vertex:WS,normal_vertex:XS,normalmap_pars_fragment:jS,clearcoat_normal_fragment_begin:YS,clearcoat_normal_fragment_maps:qS,clearcoat_pars_fragment:$S,iridescence_pars_fragment:KS,opaque_fragment:ZS,packing:QS,premultiplied_alpha_fragment:JS,project_vertex:eM,dithering_fragment:tM,dithering_pars_fragment:nM,roughnessmap_fragment:iM,roughnessmap_pars_fragment:rM,shadowmap_pars_fragment:sM,shadowmap_pars_vertex:oM,shadowmap_vertex:aM,shadowmask_pars_fragment:lM,skinbase_vertex:uM,skinning_pars_vertex:cM,skinning_vertex:fM,skinnormal_vertex:dM,specularmap_fragment:hM,specularmap_pars_fragment:pM,tonemapping_fragment:mM,tonemapping_pars_fragment:gM,transmission_fragment:_M,transmission_pars_fragment:vM,uv_pars_fragment:xM,uv_pars_vertex:yM,uv_vertex:SM,worldpos_vertex:MM,background_vert:EM,background_frag:TM,backgroundCube_vert:wM,backgroundCube_frag:AM,cube_vert:RM,cube_frag:CM,depth_vert:PM,depth_frag:bM,distanceRGBA_vert:LM,distanceRGBA_frag:DM,equirect_vert:UM,equirect_frag:IM,linedashed_vert:NM,linedashed_frag:FM,meshbasic_vert:OM,meshbasic_frag:kM,meshlambert_vert:zM,meshlambert_frag:BM,meshmatcap_vert:HM,meshmatcap_frag:GM,meshnormal_vert:VM,meshnormal_frag:WM,meshphong_vert:XM,meshphong_frag:jM,meshphysical_vert:YM,meshphysical_frag:qM,meshtoon_vert:$M,meshtoon_frag:KM,points_vert:ZM,points_frag:QM,shadow_vert:JM,shadow_frag:eE,sprite_vert:tE,sprite_frag:nE},le={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Zn={basic:{uniforms:Zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new tt(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Zt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Zt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new tt(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Zt([le.points,le.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Zt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Zt([le.common,le.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Zt([le.sprite,le.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Zt([le.common,le.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Zt([le.lights,le.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Zn.physical={uniforms:Zt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const xa={r:0,b:0,g:0};function iE(t,e,n,i,r,s,o){const a=new tt(0);let l=s===!0?0:1,u,f,h=null,d=0,m=null;function x(p,c){let g=!1,_=c.isScene===!0?c.background:null;_&&_.isTexture&&(_=(c.backgroundBlurriness>0?n:e).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),g=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Pl)?(f===void 0&&(f=new Fi(new Io(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:Ts(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=_,f.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,f.material.toneMapped=st.getTransfer(_.colorSpace)!==dt,(h!==_||d!==_.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,h=_,d=_.version,m=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new Fi(new Zf(2,2),new ti({name:"BackgroundMaterial",uniforms:Ts(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=st.getTransfer(_.colorSpace)!==dt,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function v(p,c){p.getRGB(xa,c_(t)),i.buffers.color.setClear(xa.r,xa.g,xa.b,c,o)}return{getClearColor:function(){return a},setClearColor:function(p,c=1){a.set(p),l=c,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(a,l)},render:x}}function rE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,f=!1;function h(L,V,X,q,U){let k=!1;if(o){const G=v(q,X,V);u!==G&&(u=G,m(u.object)),k=c(L,q,X,U),k&&g(L,q,X,U)}else{const G=V.wireframe===!0;(u.geometry!==q.id||u.program!==X.id||u.wireframe!==G)&&(u.geometry=q.id,u.program=X.id,u.wireframe=G,k=!0)}U!==null&&n.update(U,t.ELEMENT_ARRAY_BUFFER),(k||f)&&(f=!1,F(L,V,X,q),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(U).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function x(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function v(L,V,X){const q=X.wireframe===!0;let U=a[L.id];U===void 0&&(U={},a[L.id]=U);let k=U[V.id];k===void 0&&(k={},U[V.id]=k);let G=k[q];return G===void 0&&(G=p(d()),k[q]=G),G}function p(L){const V=[],X=[],q=[];for(let U=0;U<r;U++)V[U]=0,X[U]=0,q[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:X,attributeDivisors:q,object:L,attributes:{},index:null}}function c(L,V,X,q){const U=u.attributes,k=V.attributes;let G=0;const j=X.getAttributes();for(const Z in j)if(j[Z].location>=0){const $=U[Z];let fe=k[Z];if(fe===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(fe=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(fe=L.instanceColor)),$===void 0||$.attribute!==fe||fe&&$.data!==fe.data)return!0;G++}return u.attributesNum!==G||u.index!==q}function g(L,V,X,q){const U={},k=V.attributes;let G=0;const j=X.getAttributes();for(const Z in j)if(j[Z].location>=0){let $=k[Z];$===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&($=L.instanceColor));const fe={};fe.attribute=$,$&&$.data&&(fe.data=$.data),U[Z]=fe,G++}u.attributes=U,u.attributesNum=G,u.index=q}function _(){const L=u.newAttributes;for(let V=0,X=L.length;V<X;V++)L[V]=0}function M(L){C(L,0)}function C(L,V){const X=u.newAttributes,q=u.enabledAttributes,U=u.attributeDivisors;X[L]=1,q[L]===0&&(t.enableVertexAttribArray(L),q[L]=1),U[L]!==V&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,V),U[L]=V)}function R(){const L=u.newAttributes,V=u.enabledAttributes;for(let X=0,q=V.length;X<q;X++)V[X]!==L[X]&&(t.disableVertexAttribArray(X),V[X]=0)}function A(L,V,X,q,U,k,G){G===!0?t.vertexAttribIPointer(L,V,X,U,k):t.vertexAttribPointer(L,V,X,q,U,k)}function F(L,V,X,q){if(i.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const U=q.attributes,k=X.getAttributes(),G=V.defaultAttributeValues;for(const j in k){const Z=k[j];if(Z.location>=0){let H=U[j];if(H===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(H=L.instanceColor)),H!==void 0){const $=H.normalized,fe=H.itemSize,pe=n.get(H);if(pe===void 0)continue;const Me=pe.buffer,Ie=pe.type,ke=pe.bytesPerElement,we=i.isWebGL2===!0&&(Ie===t.INT||Ie===t.UNSIGNED_INT||H.gpuType===Yg);if(H.isInterleavedBufferAttribute){const Be=H.data,b=Be.stride,Re=H.offset;if(Be.isInstancedInterleavedBuffer){for(let ie=0;ie<Z.locationSize;ie++)C(Z.location+ie,Be.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let ie=0;ie<Z.locationSize;ie++)M(Z.location+ie);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let ie=0;ie<Z.locationSize;ie++)A(Z.location+ie,fe/Z.locationSize,Ie,$,b*ke,(Re+fe/Z.locationSize*ie)*ke,we)}else{if(H.isInstancedBufferAttribute){for(let Be=0;Be<Z.locationSize;Be++)C(Z.location+Be,H.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Be=0;Be<Z.locationSize;Be++)M(Z.location+Be);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let Be=0;Be<Z.locationSize;Be++)A(Z.location+Be,fe/Z.locationSize,Ie,$,fe*ke,fe/Z.locationSize*Be*ke,we)}}else if(G!==void 0){const $=G[j];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(Z.location,$);break;case 3:t.vertexAttrib3fv(Z.location,$);break;case 4:t.vertexAttrib4fv(Z.location,$);break;default:t.vertexAttrib1fv(Z.location,$)}}}}R()}function E(){Y();for(const L in a){const V=a[L];for(const X in V){const q=V[X];for(const U in q)x(q[U].object),delete q[U];delete V[X]}delete a[L]}}function w(L){if(a[L.id]===void 0)return;const V=a[L.id];for(const X in V){const q=V[X];for(const U in q)x(q[U].object),delete q[U];delete V[X]}delete a[L.id]}function W(L){for(const V in a){const X=a[V];if(X[L.id]===void 0)continue;const q=X[L.id];for(const U in q)x(q[U].object),delete q[U];delete X[L.id]}}function Y(){re(),f=!0,u!==l&&(u=l,m(u.object))}function re(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:re,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:W,initAttributes:_,enableAttribute:M,disableUnusedAttributes:R}}function sE(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,h){t.drawArrays(s,f,h),n.update(h,s,1)}function l(f,h,d){if(d===0)return;let m,x;if(r)m=t,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](s,f,h,d),n.update(h,s,d)}function u(f,h,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<d;x++)this.render(f[x],h[x]);else{m.multiDrawArraysWEBGL(s,f,0,h,0,d);let x=0;for(let v=0;v<d;v++)x+=h[v];n.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function oE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,M=o||e.has("OES_texture_float"),C=_&&M,R=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:p,maxVaryings:c,maxFragmentUniforms:g,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:C,maxSamples:R}}function aE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Pi,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,m){const x=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,c=t.get(h);if(!r||x===null||x.length===0||s&&!p)s?f(null):u();else{const g=s?0:i,_=g*4;let M=c.clippingState||null;l.value=M,M=f(x,d,_,m);for(let C=0;C!==_;++C)M[C]=n[C];c.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,m,x){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,x!==!0||p===null){const c=m+v*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(p===null||p.length<c)&&(p=new Float32Array(c));for(let _=0,M=m;_!==v;++_,M+=4)o.copy(h[_]).applyMatrix4(g,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function lE(t){let e=new WeakMap;function n(o,a){return a===Hc?o.mapping=Ss:a===Gc&&(o.mapping=Ms),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Hc||a===Gc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new yy(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class uE extends f_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const rs=4,ap=[.125,.215,.35,.446,.526,.582],fr=20,Ou=new uE,lp=new tt;let ku=null,zu=0,Bu=0;const ur=(1+Math.sqrt(5))/2,Xr=1/ur,up=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,ur,Xr),new B(0,ur,-Xr),new B(Xr,0,ur),new B(-Xr,0,ur),new B(ur,Xr,0),new B(-ur,Xr,0)];class cp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ku=this._renderer.getRenderTarget(),zu=this._renderer.getActiveCubeFace(),Bu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ku,zu,Bu),e.scissorTest=!1,ya(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ss||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ku=this._renderer.getRenderTarget(),zu=this._renderer.getActiveCubeFace(),Bu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:To,format:Wn,colorSpace:xi,depthBuffer:!1},r=fp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cE(s)),this._blurMaterial=fE(s,e,n)}return r}_compileMaterial(e){const n=new Fi(this._lodPlanes[0],e);this._renderer.compile(n,Ou)}_sceneToCubeUV(e,n,i,r){const a=new Pn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(lp),f.toneMapping=ji,f.autoClear=!1;const m=new a_({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),x=new Fi(new Io,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(lp),v=!0);for(let c=0;c<6;c++){const g=c%3;g===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):g===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const _=this._cubeSize;ya(r,g*_,c>2?_:0,_,_),f.setRenderTarget(r),v&&f.render(x,a),f.render(e,a)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ss||e.mapping===Ms;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Fi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ya(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ou)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=up[(r-1)%up.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Fi(this._lodPlanes[r],u),d=u.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*fr-1),v=s/x,p=isFinite(s)?1+Math.floor(f*v):fr;p>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fr}`);const c=[];let g=0;for(let A=0;A<fr;++A){const F=A/v,E=Math.exp(-F*F/2);c.push(E),A===0?g+=E:A<p&&(g+=2*E)}for(let A=0;A<c.length;A++)c[A]=c[A]/g;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=c,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=x,d.mipInt.value=_-i;const M=this._sizeLods[r],C=3*M*(r>_-rs?r-_+rs:0),R=4*(this._cubeSize-M);ya(n,C,R,3*M,2*M),l.setRenderTarget(n),l.render(h,Ou)}}function cE(t){const e=[],n=[],i=[];let r=t;const s=t-rs+1+ap.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-rs?l=ap[o-t+rs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,h=1+u,d=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,x=6,v=3,p=2,c=1,g=new Float32Array(v*x*m),_=new Float32Array(p*x*m),M=new Float32Array(c*x*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,F=R>2?0:-1,E=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];g.set(E,v*x*R),_.set(d,p*x*R);const w=[R,R,R,R,R,R];M.set(w,c*x*R)}const C=new Yn;C.setAttribute("position",new It(g,v)),C.setAttribute("uv",new It(_,p)),C.setAttribute("faceIndex",new It(M,c)),e.push(C),r>rs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function fp(t,e,n){const i=new Ar(t,e,n);return i.texture.mapping=Pl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ya(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function fE(t,e,n){const i=new Float32Array(fr),r=new B(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function dp(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function hp(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Qf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Hc||l===Gc,f=l===Ss||l===Ms;if(u||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new cp(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||f&&h&&r(h)){n===null&&(n=new cp(t));const d=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function hE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function pE(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const v=d.morphAttributes[x];for(let p=0,c=v.length;p<c;p++)e.remove(v[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const x in d)e.update(d[x],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const x in m){const v=m[x];for(let p=0,c=v.length;p<c;p++)e.update(v[p],t.ARRAY_BUFFER)}}function u(h){const d=[],m=h.index,x=h.attributes.position;let v=0;if(m!==null){const g=m.array;v=m.version;for(let _=0,M=g.length;_<M;_+=3){const C=g[_+0],R=g[_+1],A=g[_+2];d.push(C,R,R,A,A,C)}}else if(x!==void 0){const g=x.array;v=x.version;for(let _=0,M=g.length/3-1;_<M;_+=3){const C=_+0,R=_+1,A=_+2;d.push(C,R,R,A,A,C)}}else return;const p=new(n_(d)?u_:l_)(d,1);p.version=v;const c=s.get(h);c&&e.remove(c),s.set(h,p)}function f(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function mE(t,e,n,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function u(m){a=m.type,l=m.bytesPerElement}function f(m,x){t.drawElements(s,x,a,m*l),n.update(x,s,1)}function h(m,x,v){if(v===0)return;let p,c;if(r)p=t,c="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[c](s,x,a,m*l,v),n.update(x,s,v)}function d(m,x,v){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let c=0;c<v;c++)this.render(m[c]/l,x[c]);else{p.multiDrawElementsWEBGL(s,x,0,a,m,0,v);let c=0;for(let g=0;g<v;g++)c+=x[g];n.update(c,s,1)}}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=d}function gE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function _E(t,e){return t[0]-e[0]}function vE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function xE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new zt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,f,h){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=x!==void 0?x.length:0;let p=s.get(f);if(p===void 0||p.count!==v){let V=function(){re.dispose(),s.delete(f),f.removeEventListener("dispose",V)};var m=V;p!==void 0&&p.texture.dispose();const _=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,C=f.morphAttributes.color!==void 0,R=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],F=f.morphAttributes.color||[];let E=0;_===!0&&(E=1),M===!0&&(E=2),C===!0&&(E=3);let w=f.attributes.position.count*E,W=1;w>e.maxTextureSize&&(W=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const Y=new Float32Array(w*W*4*v),re=new s_(Y,w,W,v);re.type=Ni,re.needsUpdate=!0;const L=E*4;for(let X=0;X<v;X++){const q=R[X],U=A[X],k=F[X],G=w*W*4*X;for(let j=0;j<q.count;j++){const Z=j*L;_===!0&&(o.fromBufferAttribute(q,j),Y[G+Z+0]=o.x,Y[G+Z+1]=o.y,Y[G+Z+2]=o.z,Y[G+Z+3]=0),M===!0&&(o.fromBufferAttribute(U,j),Y[G+Z+4]=o.x,Y[G+Z+5]=o.y,Y[G+Z+6]=o.z,Y[G+Z+7]=0),C===!0&&(o.fromBufferAttribute(k,j),Y[G+Z+8]=o.x,Y[G+Z+9]=o.y,Y[G+Z+10]=o.z,Y[G+Z+11]=k.itemSize===4?o.w:1)}}p={count:v,texture:re,size:new rt(w,W)},s.set(f,p),f.addEventListener("dispose",V)}let c=0;for(let _=0;_<d.length;_++)c+=d[_];const g=f.morphTargetsRelative?1:1-c;h.getUniforms().setValue(t,"morphTargetBaseInfluence",g),h.getUniforms().setValue(t,"morphTargetInfluences",d),h.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const x=d===void 0?0:d.length;let v=i[f.id];if(v===void 0||v.length!==x){v=[];for(let M=0;M<x;M++)v[M]=[M,0];i[f.id]=v}for(let M=0;M<x;M++){const C=v[M];C[0]=M,C[1]=d[M]}v.sort(vE);for(let M=0;M<8;M++)M<x&&v[M][1]?(a[M][0]=v[M][0],a[M][1]=v[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(_E);const p=f.morphAttributes.position,c=f.morphAttributes.normal;let g=0;for(let M=0;M<8;M++){const C=a[M],R=C[0],A=C[1];R!==Number.MAX_SAFE_INTEGER&&A?(p&&f.getAttribute("morphTarget"+M)!==p[R]&&f.setAttribute("morphTarget"+M,p[R]),c&&f.getAttribute("morphNormal"+M)!==c[R]&&f.setAttribute("morphNormal"+M,c[R]),r[M]=A,g+=A):(p&&f.hasAttribute("morphTarget"+M)===!0&&f.deleteAttribute("morphTarget"+M),c&&f.hasAttribute("morphNormal"+M)===!0&&f.deleteAttribute("morphNormal"+M),r[M]=0)}const _=f.morphTargetsRelative?1:1-g;h.getUniforms().setValue(t,"morphTargetBaseInfluence",_),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function yE(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class m_ extends xn{constructor(e,n,i,r,s,o,a,l,u,f){if(f=f!==void 0?f:vr,f!==vr&&f!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===vr&&(i=Ii),i===void 0&&f===Es&&(i=_r),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const g_=new xn,__=new m_(1,1);__.compareFunction=t_;const v_=new s_,x_=new iy,y_=new d_,pp=[],mp=[],gp=new Float32Array(16),_p=new Float32Array(9),vp=new Float32Array(4);function Ps(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=pp[r];if(s===void 0&&(s=new Float32Array(r),pp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ul(t,e){let n=mp[e];n===void 0&&(n=new Int32Array(e),mp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function SE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ME(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function EE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function TE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function wE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;vp.set(i),t.uniformMatrix2fv(this.addr,!1,vp),Pt(n,i)}}function AE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;_p.set(i),t.uniformMatrix3fv(this.addr,!1,_p),Pt(n,i)}}function RE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;gp.set(i),t.uniformMatrix4fv(this.addr,!1,gp),Pt(n,i)}}function CE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function PE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function bE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function LE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function DE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function UE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function IE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function NE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function FE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?__:g_;n.setTexture2D(e||s,r)}function OE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||x_,r)}function kE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||y_,r)}function zE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||v_,r)}function BE(t){switch(t){case 5126:return SE;case 35664:return ME;case 35665:return EE;case 35666:return TE;case 35674:return wE;case 35675:return AE;case 35676:return RE;case 5124:case 35670:return CE;case 35667:case 35671:return PE;case 35668:case 35672:return bE;case 35669:case 35673:return LE;case 5125:return DE;case 36294:return UE;case 36295:return IE;case 36296:return NE;case 35678:case 36198:case 36298:case 36306:case 35682:return FE;case 35679:case 36299:case 36307:return OE;case 35680:case 36300:case 36308:case 36293:return kE;case 36289:case 36303:case 36311:case 36292:return zE}}function HE(t,e){t.uniform1fv(this.addr,e)}function GE(t,e){const n=Ps(e,this.size,2);t.uniform2fv(this.addr,n)}function VE(t,e){const n=Ps(e,this.size,3);t.uniform3fv(this.addr,n)}function WE(t,e){const n=Ps(e,this.size,4);t.uniform4fv(this.addr,n)}function XE(t,e){const n=Ps(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function jE(t,e){const n=Ps(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function YE(t,e){const n=Ps(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function qE(t,e){t.uniform1iv(this.addr,e)}function $E(t,e){t.uniform2iv(this.addr,e)}function KE(t,e){t.uniform3iv(this.addr,e)}function ZE(t,e){t.uniform4iv(this.addr,e)}function QE(t,e){t.uniform1uiv(this.addr,e)}function JE(t,e){t.uniform2uiv(this.addr,e)}function eT(t,e){t.uniform3uiv(this.addr,e)}function tT(t,e){t.uniform4uiv(this.addr,e)}function nT(t,e,n){const i=this.cache,r=e.length,s=Ul(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||g_,s[o])}function iT(t,e,n){const i=this.cache,r=e.length,s=Ul(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||x_,s[o])}function rT(t,e,n){const i=this.cache,r=e.length,s=Ul(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||y_,s[o])}function sT(t,e,n){const i=this.cache,r=e.length,s=Ul(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||v_,s[o])}function oT(t){switch(t){case 5126:return HE;case 35664:return GE;case 35665:return VE;case 35666:return WE;case 35674:return XE;case 35675:return jE;case 35676:return YE;case 5124:case 35670:return qE;case 35667:case 35671:return $E;case 35668:case 35672:return KE;case 35669:case 35673:return ZE;case 5125:return QE;case 36294:return JE;case 36295:return eT;case 36296:return tT;case 35678:case 36198:case 36298:case 36306:case 35682:return nT;case 35679:case 36299:case 36307:return iT;case 35680:case 36300:case 36308:case 36293:return rT;case 36289:case 36303:case 36311:case 36292:return sT}}class aT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=BE(n.type)}}class lT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=oT(n.type)}}class uT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Hu=/(\w+)(\])?(\[|\.)?/g;function xp(t,e){t.seq.push(e),t.map[e.id]=e}function cT(t,e,n){const i=t.name,r=i.length;for(Hu.lastIndex=0;;){const s=Hu.exec(i),o=Hu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){xp(n,u===void 0?new aT(a,t,e):new lT(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new uT(a),xp(n,h)),n=h}}}class Fa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);cT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function yp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const fT=37297;let dT=0;function hT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function pT(t){const e=st.getPrimaries(st.workingColorSpace),n=st.getPrimaries(t);let i;switch(e===n?i="":e===cl&&n===ul?i="LinearDisplayP3ToLinearSRGB":e===ul&&n===cl&&(i="LinearSRGBToLinearDisplayP3"),t){case xi:case bl:return[i,"LinearTransferOETF"];case kt:case qf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Sp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+hT(t.getShaderSource(e),o)}else return r}function mT(t,e){const n=pT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function gT(t,e){let n;switch(e){case wx:n="Linear";break;case Ax:n="Reinhard";break;case Rx:n="OptimizedCineon";break;case Cx:n="ACESFilmic";break;case bx:n="AgX";break;case Px:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function _T(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ss).join(`
`)}function vT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ss).join(`
`)}function xT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function yT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ss(t){return t!==""}function Mp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ep(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ST=/^[ \t]*#include +<([\w\d./]+)>/gm;function qc(t){return t.replace(ST,ET)}const MT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ET(t,e){let n=We[e];if(n===void 0){const i=MT.get(e);if(i!==void 0)n=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return qc(n)}const TT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tp(t){return t.replace(TT,wT)}function wT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function AT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Wg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Jv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function RT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ss:case Ms:e="ENVMAP_TYPE_CUBE";break;case Pl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function PT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Xg:e="ENVMAP_BLENDING_MULTIPLY";break;case Ex:e="ENVMAP_BLENDING_MIX";break;case Tx:e="ENVMAP_BLENDING_ADD";break}return e}function bT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function LT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=AT(n),u=RT(n),f=CT(n),h=PT(n),d=bT(n),m=n.isWebGL2?"":_T(n),x=vT(n),v=xT(s),p=r.createProgram();let c,g,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ss).join(`
`),c.length>0&&(c+=`
`),g=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ss).join(`
`),g.length>0&&(g+=`
`)):(c=[wp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),g=[m,wp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ji?"#define TONE_MAPPING":"",n.toneMapping!==ji?We.tonemapping_pars_fragment:"",n.toneMapping!==ji?gT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,mT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ss).join(`
`)),o=qc(o),o=Mp(o,n),o=Ep(o,n),a=qc(a),a=Mp(a,n),a=Ep(a,n),o=Tp(o),a=Tp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,c=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=_+c+o,C=_+g+a,R=yp(r,r.VERTEX_SHADER,M),A=yp(r,r.FRAGMENT_SHADER,C);r.attachShader(p,R),r.attachShader(p,A),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function F(Y){if(t.debug.checkShaderErrors){const re=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(R).trim(),V=r.getShaderInfoLog(A).trim();let X=!0,q=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,R,A);else{const U=Sp(r,R,"vertex"),k=Sp(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+re+`
`+U+`
`+k)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(L===""||V==="")&&(q=!1);q&&(Y.diagnostics={runnable:X,programLog:re,vertexShader:{log:L,prefix:c},fragmentShader:{log:V,prefix:g}})}r.deleteShader(R),r.deleteShader(A),E=new Fa(r,p),w=yT(r,p)}let E;this.getUniforms=function(){return E===void 0&&F(this),E};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let W=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=r.getProgramParameter(p,fT)),W},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=dT++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=A,this}let DT=0;class UT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new IT(e),n.set(e,i)),i}}class IT{constructor(e){this.id=DT++,this.code=e,this.usedTimes=0}}function NT(t,e,n,i,r,s,o){const a=new Kf,l=new UT,u=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return E===0?"uv":`uv${E}`}function p(E,w,W,Y,re){const L=Y.fog,V=re.geometry,X=E.isMeshStandardMaterial?Y.environment:null,q=(E.isMeshStandardMaterial?n:e).get(E.envMap||X),U=q&&q.mapping===Pl?q.image.height:null,k=x[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const G=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,j=G!==void 0?G.length:0;let Z=0;V.morphAttributes.position!==void 0&&(Z=1),V.morphAttributes.normal!==void 0&&(Z=2),V.morphAttributes.color!==void 0&&(Z=3);let H,$,fe,pe;if(k){const bt=Zn[k];H=bt.vertexShader,$=bt.fragmentShader}else H=E.vertexShader,$=E.fragmentShader,l.update(E),fe=l.getVertexShaderID(E),pe=l.getFragmentShaderID(E);const Me=t.getRenderTarget(),Ie=re.isInstancedMesh===!0,ke=re.isBatchedMesh===!0,we=!!E.map,Be=!!E.matcap,b=!!q,Re=!!E.aoMap,ie=!!E.lightMap,me=!!E.bumpMap,de=!!E.normalMap,Ne=!!E.displacementMap,xe=!!E.emissiveMap,y=!!E.metalnessMap,S=!!E.roughnessMap,O=E.anisotropy>0,te=E.clearcoat>0,ee=E.iridescence>0,Q=E.sheen>0,Se=E.transmission>0,he=O&&!!E.anisotropyMap,ye=te&&!!E.clearcoatMap,Pe=te&&!!E.clearcoatNormalMap,Fe=te&&!!E.clearcoatRoughnessMap,J=ee&&!!E.iridescenceMap,Je=ee&&!!E.iridescenceThicknessMap,Ve=Q&&!!E.sheenColorMap,De=Q&&!!E.sheenRoughnessMap,Ae=!!E.specularMap,_e=!!E.specularColorMap,ze=!!E.specularIntensityMap,Ke=Se&&!!E.transmissionMap,ut=Se&&!!E.thicknessMap,He=!!E.gradientMap,oe=!!E.alphaMap,P=E.alphaTest>0,ce=!!E.alphaHash,ue=!!E.extensions,be=!!V.attributes.uv1,Ce=!!V.attributes.uv2,Ze=!!V.attributes.uv3;let et=ji;return E.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(et=t.toneMapping),{isWebGL2:f,shaderID:k,shaderType:E.type,shaderName:E.name,vertexShader:H,fragmentShader:$,defines:E.defines,customVertexShaderID:fe,customFragmentShaderID:pe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:ke,instancing:Ie,instancingColor:Ie&&re.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Me===null?t.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:xi,map:we,matcap:Be,envMap:b,envMapMode:b&&q.mapping,envMapCubeUVHeight:U,aoMap:Re,lightMap:ie,bumpMap:me,normalMap:de,displacementMap:d&&Ne,emissiveMap:xe,normalMapObjectSpace:de&&E.normalMapType===Vx,normalMapTangentSpace:de&&E.normalMapType===Gx,metalnessMap:y,roughnessMap:S,anisotropy:O,anisotropyMap:he,clearcoat:te,clearcoatMap:ye,clearcoatNormalMap:Pe,clearcoatRoughnessMap:Fe,iridescence:ee,iridescenceMap:J,iridescenceThicknessMap:Je,sheen:Q,sheenColorMap:Ve,sheenRoughnessMap:De,specularMap:Ae,specularColorMap:_e,specularIntensityMap:ze,transmission:Se,transmissionMap:Ke,thicknessMap:ut,gradientMap:He,opaque:E.transparent===!1&&E.blending===ds,alphaMap:oe,alphaTest:P,alphaHash:ce,combine:E.combine,mapUv:we&&v(E.map.channel),aoMapUv:Re&&v(E.aoMap.channel),lightMapUv:ie&&v(E.lightMap.channel),bumpMapUv:me&&v(E.bumpMap.channel),normalMapUv:de&&v(E.normalMap.channel),displacementMapUv:Ne&&v(E.displacementMap.channel),emissiveMapUv:xe&&v(E.emissiveMap.channel),metalnessMapUv:y&&v(E.metalnessMap.channel),roughnessMapUv:S&&v(E.roughnessMap.channel),anisotropyMapUv:he&&v(E.anisotropyMap.channel),clearcoatMapUv:ye&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:De&&v(E.sheenRoughnessMap.channel),specularMapUv:Ae&&v(E.specularMap.channel),specularColorMapUv:_e&&v(E.specularColorMap.channel),specularIntensityMapUv:ze&&v(E.specularIntensityMap.channel),transmissionMapUv:Ke&&v(E.transmissionMap.channel),thicknessMapUv:ut&&v(E.thicknessMap.channel),alphaMapUv:oe&&v(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(de||O),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:be,vertexUv2s:Ce,vertexUv3s:Ze,pointsUvs:re.isPoints===!0&&!!V.attributes.uv&&(we||oe),fog:!!L,useFog:E.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:re.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Z,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&W.length>0,shadowMapType:t.shadowMap.type,toneMapping:et,useLegacyLights:t._useLegacyLights,decodeVideoTexture:we&&E.map.isVideoTexture===!0&&st.getTransfer(E.map.colorSpace)===dt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ci,flipSided:E.side===dn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:ue&&E.extensions.derivatives===!0,extensionFragDepth:ue&&E.extensions.fragDepth===!0,extensionDrawBuffers:ue&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function c(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const W in E.defines)w.push(W),w.push(E.defines[W]);return E.isRawShaderMaterial===!1&&(g(w,E),_(w,E),w.push(t.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function g(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function _(E,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),E.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function M(E){const w=x[E.type];let W;if(w){const Y=Zn[w];W=gy.clone(Y.uniforms)}else W=E.uniforms;return W}function C(E,w){let W;for(let Y=0,re=u.length;Y<re;Y++){const L=u[Y];if(L.cacheKey===w){W=L,++W.usedTimes;break}}return W===void 0&&(W=new LT(t,w,E,s),u.push(W)),W}function R(E){if(--E.usedTimes===0){const w=u.indexOf(E);u[w]=u[u.length-1],u.pop(),E.destroy()}}function A(E){l.remove(E)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:c,getUniforms:M,acquireProgram:C,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:F}}function FT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function OT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Ap(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Rp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,m,x,v,p){let c=t[e];return c===void 0?(c={id:h.id,object:h,geometry:d,material:m,groupOrder:x,renderOrder:h.renderOrder,z:v,group:p},t[e]=c):(c.id=h.id,c.object=h,c.geometry=d,c.material=m,c.groupOrder=x,c.renderOrder=h.renderOrder,c.z=v,c.group=p),e++,c}function a(h,d,m,x,v,p){const c=o(h,d,m,x,v,p);m.transmission>0?i.push(c):m.transparent===!0?r.push(c):n.push(c)}function l(h,d,m,x,v,p){const c=o(h,d,m,x,v,p);m.transmission>0?i.unshift(c):m.transparent===!0?r.unshift(c):n.unshift(c)}function u(h,d){n.length>1&&n.sort(h||OT),i.length>1&&i.sort(d||Ap),r.length>1&&r.sort(d||Ap)}function f(){for(let h=e,d=t.length;h<d;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function kT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Rp,t.set(i,[o])):r>=s.length?(o=new Rp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function zT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new tt};break;case"SpotLight":n={position:new B,direction:new B,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function BT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let HT=0;function GT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function VT(t,e){const n=new zT,i=BT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new B);const s=new B,o=new Ft,a=new Ft;function l(f,h){let d=0,m=0,x=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let v=0,p=0,c=0,g=0,_=0,M=0,C=0,R=0,A=0,F=0,E=0;f.sort(GT);const w=h===!0?Math.PI:1;for(let Y=0,re=f.length;Y<re;Y++){const L=f[Y],V=L.color,X=L.intensity,q=L.distance,U=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=V.r*X*w,m+=V.g*X*w,x+=V.b*X*w;else if(L.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(L.sh.coefficients[k],X);E++}else if(L.isDirectionalLight){const k=n.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){const G=L.shadow,j=i.get(L);j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,r.directionalShadow[v]=j,r.directionalShadowMap[v]=U,r.directionalShadowMatrix[v]=L.shadow.matrix,M++}r.directional[v]=k,v++}else if(L.isSpotLight){const k=n.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(V).multiplyScalar(X*w),k.distance=q,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,r.spot[c]=k;const G=L.shadow;if(L.map&&(r.spotLightMap[A]=L.map,A++,G.updateMatrices(L),L.castShadow&&F++),r.spotLightMatrix[c]=G.matrix,L.castShadow){const j=i.get(L);j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,r.spotShadow[c]=j,r.spotShadowMap[c]=U,R++}c++}else if(L.isRectAreaLight){const k=n.get(L);k.color.copy(V).multiplyScalar(X),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),r.rectArea[g]=k,g++}else if(L.isPointLight){const k=n.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*w),k.distance=L.distance,k.decay=L.decay,L.castShadow){const G=L.shadow,j=i.get(L);j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,j.shadowCameraNear=G.camera.near,j.shadowCameraFar=G.camera.far,r.pointShadow[p]=j,r.pointShadowMap[p]=U,r.pointShadowMatrix[p]=L.shadow.matrix,C++}r.point[p]=k,p++}else if(L.isHemisphereLight){const k=n.get(L);k.skyColor.copy(L.color).multiplyScalar(X*w),k.groundColor.copy(L.groundColor).multiplyScalar(X*w),r.hemi[_]=k,_++}}g>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=x;const W=r.hash;(W.directionalLength!==v||W.pointLength!==p||W.spotLength!==c||W.rectAreaLength!==g||W.hemiLength!==_||W.numDirectionalShadows!==M||W.numPointShadows!==C||W.numSpotShadows!==R||W.numSpotMaps!==A||W.numLightProbes!==E)&&(r.directional.length=v,r.spot.length=c,r.rectArea.length=g,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=R+A-F,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=E,W.directionalLength=v,W.pointLength=p,W.spotLength=c,W.rectAreaLength=g,W.hemiLength=_,W.numDirectionalShadows=M,W.numPointShadows=C,W.numSpotShadows=R,W.numSpotMaps=A,W.numLightProbes=E,r.version=HT++)}function u(f,h){let d=0,m=0,x=0,v=0,p=0;const c=h.matrixWorldInverse;for(let g=0,_=f.length;g<_;g++){const M=f[g];if(M.isDirectionalLight){const C=r.directional[d];C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(c),d++}else if(M.isSpotLight){const C=r.spot[x];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(c),C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(c),x++}else if(M.isRectAreaLight){const C=r.rectArea[v];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(c),a.identity(),o.copy(M.matrixWorld),o.premultiply(c),a.extractRotation(o),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const C=r.point[m];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(c),m++}else if(M.isHemisphereLight){const C=r.hemi[p];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(c),p++}}}return{setup:l,setupView:u,state:r}}function Cp(t,e){const n=new VT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function u(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function WT(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Cp(t,e),n.set(s,[l])):o>=a.length?(l=new Cp(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class XT extends Uo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jT extends Uo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const YT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $T(t,e,n){let i=new h_;const r=new rt,s=new rt,o=new zt,a=new XT({depthPacking:Hx}),l=new jT,u={},f=n.maxTextureSize,h={[Ki]:dn,[dn]:Ki,[ci]:ci},d=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:YT,fragmentShader:qT}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new Yn;x.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Fi(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wg;let c=this.type;this.render=function(R,A,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const E=t.getRenderTarget(),w=t.getActiveCubeFace(),W=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(Xi),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const re=c!==ai&&this.type===ai,L=c===ai&&this.type!==ai;for(let V=0,X=R.length;V<X;V++){const q=R[V],U=q.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const k=U.getFrameExtents();if(r.multiply(k),s.copy(U.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/k.x),r.x=s.x*k.x,U.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/k.y),r.y=s.y*k.y,U.mapSize.y=s.y)),U.map===null||re===!0||L===!0){const j=this.type!==ai?{minFilter:Jt,magFilter:Jt}:{};U.map!==null&&U.map.dispose(),U.map=new Ar(r.x,r.y,j),U.map.texture.name=q.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const G=U.getViewportCount();for(let j=0;j<G;j++){const Z=U.getViewport(j);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),Y.viewport(o),U.updateMatrices(q,j),i=U.getFrustum(),M(A,F,U.camera,q,this.type)}U.isPointLightShadow!==!0&&this.type===ai&&g(U,F),U.needsUpdate=!1}c=this.type,p.needsUpdate=!1,t.setRenderTarget(E,w,W)};function g(R,A){const F=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ar(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(A,null,F,d,v,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(A,null,F,m,v,null)}function _(R,A,F,E){let w=null;const W=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(W!==void 0)w=W;else if(w=F.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const Y=w.uuid,re=A.uuid;let L=u[Y];L===void 0&&(L={},u[Y]=L);let V=L[re];V===void 0&&(V=w.clone(),L[re]=V,A.addEventListener("dispose",C)),w=V}if(w.visible=A.visible,w.wireframe=A.wireframe,E===ai?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:h[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,F.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Y=t.properties.get(w);Y.light=F}return w}function M(R,A,F,E,w){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&w===ai)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const re=e.update(R),L=R.material;if(Array.isArray(L)){const V=re.groups;for(let X=0,q=V.length;X<q;X++){const U=V[X],k=L[U.materialIndex];if(k&&k.visible){const G=_(R,k,E,w);R.onBeforeShadow(t,R,A,F,re,G,U),t.renderBufferDirect(F,null,re,G,R,U),R.onAfterShadow(t,R,A,F,re,G,U)}}}else if(L.visible){const V=_(R,L,E,w);R.onBeforeShadow(t,R,A,F,re,V,null),t.renderBufferDirect(F,null,re,V,R,null),R.onAfterShadow(t,R,A,F,re,V,null)}}const Y=R.children;for(let re=0,L=Y.length;re<L;re++)M(Y[re],A,F,E,w)}function C(R){R.target.removeEventListener("dispose",C);for(const F in u){const E=u[F],w=R.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}function KT(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const ce=new zt;let ue=null;const be=new zt(0,0,0,0);return{setMask:function(Ce){ue!==Ce&&!P&&(t.colorMask(Ce,Ce,Ce,Ce),ue=Ce)},setLocked:function(Ce){P=Ce},setClear:function(Ce,Ze,et,St,bt){bt===!0&&(Ce*=St,Ze*=St,et*=St),ce.set(Ce,Ze,et,St),be.equals(ce)===!1&&(t.clearColor(Ce,Ze,et,St),be.copy(ce))},reset:function(){P=!1,ue=null,be.set(-1,0,0,0)}}}function s(){let P=!1,ce=null,ue=null,be=null;return{setTest:function(Ce){Ce?ke(t.DEPTH_TEST):we(t.DEPTH_TEST)},setMask:function(Ce){ce!==Ce&&!P&&(t.depthMask(Ce),ce=Ce)},setFunc:function(Ce){if(ue!==Ce){switch(Ce){case gx:t.depthFunc(t.NEVER);break;case _x:t.depthFunc(t.ALWAYS);break;case vx:t.depthFunc(t.LESS);break;case al:t.depthFunc(t.LEQUAL);break;case xx:t.depthFunc(t.EQUAL);break;case yx:t.depthFunc(t.GEQUAL);break;case Sx:t.depthFunc(t.GREATER);break;case Mx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ue=Ce}},setLocked:function(Ce){P=Ce},setClear:function(Ce){be!==Ce&&(t.clearDepth(Ce),be=Ce)},reset:function(){P=!1,ce=null,ue=null,be=null}}}function o(){let P=!1,ce=null,ue=null,be=null,Ce=null,Ze=null,et=null,St=null,bt=null;return{setTest:function(nt){P||(nt?ke(t.STENCIL_TEST):we(t.STENCIL_TEST))},setMask:function(nt){ce!==nt&&!P&&(t.stencilMask(nt),ce=nt)},setFunc:function(nt,Et,rn){(ue!==nt||be!==Et||Ce!==rn)&&(t.stencilFunc(nt,Et,rn),ue=nt,be=Et,Ce=rn)},setOp:function(nt,Et,rn){(Ze!==nt||et!==Et||St!==rn)&&(t.stencilOp(nt,Et,rn),Ze=nt,et=Et,St=rn)},setLocked:function(nt){P=nt},setClear:function(nt){bt!==nt&&(t.clearStencil(nt),bt=nt)},reset:function(){P=!1,ce=null,ue=null,be=null,Ce=null,Ze=null,et=null,St=null,bt=null}}}const a=new r,l=new s,u=new o,f=new WeakMap,h=new WeakMap;let d={},m={},x=new WeakMap,v=[],p=null,c=!1,g=null,_=null,M=null,C=null,R=null,A=null,F=null,E=new tt(0,0,0),w=0,W=!1,Y=null,re=null,L=null,V=null,X=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,k=0;const G=t.getParameter(t.VERSION);G.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(G)[1]),U=k>=1):G.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),U=k>=2);let j=null,Z={};const H=t.getParameter(t.SCISSOR_BOX),$=t.getParameter(t.VIEWPORT),fe=new zt().fromArray(H),pe=new zt().fromArray($);function Me(P,ce,ue,be){const Ce=new Uint8Array(4),Ze=t.createTexture();t.bindTexture(P,Ze),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<ue;et++)i&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(ce,0,t.RGBA,1,1,be,0,t.RGBA,t.UNSIGNED_BYTE,Ce):t.texImage2D(ce+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ce);return Ze}const Ie={};Ie[t.TEXTURE_2D]=Me(t.TEXTURE_2D,t.TEXTURE_2D,1),Ie[t.TEXTURE_CUBE_MAP]=Me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ie[t.TEXTURE_2D_ARRAY]=Me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ie[t.TEXTURE_3D]=Me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ke(t.DEPTH_TEST),l.setFunc(al),xe(!1),y(ch),ke(t.CULL_FACE),de(Xi);function ke(P){d[P]!==!0&&(t.enable(P),d[P]=!0)}function we(P){d[P]!==!1&&(t.disable(P),d[P]=!1)}function Be(P,ce){return m[P]!==ce?(t.bindFramebuffer(P,ce),m[P]=ce,i&&(P===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=ce),P===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=ce)),!0):!1}function b(P,ce){let ue=v,be=!1;if(P)if(ue=x.get(ce),ue===void 0&&(ue=[],x.set(ce,ue)),P.isWebGLMultipleRenderTargets){const Ce=P.texture;if(ue.length!==Ce.length||ue[0]!==t.COLOR_ATTACHMENT0){for(let Ze=0,et=Ce.length;Ze<et;Ze++)ue[Ze]=t.COLOR_ATTACHMENT0+Ze;ue.length=Ce.length,be=!0}}else ue[0]!==t.COLOR_ATTACHMENT0&&(ue[0]=t.COLOR_ATTACHMENT0,be=!0);else ue[0]!==t.BACK&&(ue[0]=t.BACK,be=!0);be&&(n.isWebGL2?t.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Re(P){return p!==P?(t.useProgram(P),p=P,!0):!1}const ie={[cr]:t.FUNC_ADD,[tx]:t.FUNC_SUBTRACT,[nx]:t.FUNC_REVERSE_SUBTRACT};if(i)ie[hh]=t.MIN,ie[ph]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(ie[hh]=P.MIN_EXT,ie[ph]=P.MAX_EXT)}const me={[ix]:t.ZERO,[rx]:t.ONE,[sx]:t.SRC_COLOR,[zc]:t.SRC_ALPHA,[fx]:t.SRC_ALPHA_SATURATE,[ux]:t.DST_COLOR,[ax]:t.DST_ALPHA,[ox]:t.ONE_MINUS_SRC_COLOR,[Bc]:t.ONE_MINUS_SRC_ALPHA,[cx]:t.ONE_MINUS_DST_COLOR,[lx]:t.ONE_MINUS_DST_ALPHA,[dx]:t.CONSTANT_COLOR,[hx]:t.ONE_MINUS_CONSTANT_COLOR,[px]:t.CONSTANT_ALPHA,[mx]:t.ONE_MINUS_CONSTANT_ALPHA};function de(P,ce,ue,be,Ce,Ze,et,St,bt,nt){if(P===Xi){c===!0&&(we(t.BLEND),c=!1);return}if(c===!1&&(ke(t.BLEND),c=!0),P!==ex){if(P!==g||nt!==W){if((_!==cr||R!==cr)&&(t.blendEquation(t.FUNC_ADD),_=cr,R=cr),nt)switch(P){case ds:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case io:t.blendFunc(t.ONE,t.ONE);break;case fh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ds:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case io:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case fh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,C=null,A=null,F=null,E.set(0,0,0),w=0,g=P,W=nt}return}Ce=Ce||ce,Ze=Ze||ue,et=et||be,(ce!==_||Ce!==R)&&(t.blendEquationSeparate(ie[ce],ie[Ce]),_=ce,R=Ce),(ue!==M||be!==C||Ze!==A||et!==F)&&(t.blendFuncSeparate(me[ue],me[be],me[Ze],me[et]),M=ue,C=be,A=Ze,F=et),(St.equals(E)===!1||bt!==w)&&(t.blendColor(St.r,St.g,St.b,bt),E.copy(St),w=bt),g=P,W=!1}function Ne(P,ce){P.side===ci?we(t.CULL_FACE):ke(t.CULL_FACE);let ue=P.side===dn;ce&&(ue=!ue),xe(ue),P.blending===ds&&P.transparent===!1?de(Xi):de(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const be=P.stencilWrite;u.setTest(be),be&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),O(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ke(t.SAMPLE_ALPHA_TO_COVERAGE):we(t.SAMPLE_ALPHA_TO_COVERAGE)}function xe(P){Y!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),Y=P)}function y(P){P!==Zv?(ke(t.CULL_FACE),P!==re&&(P===ch?t.cullFace(t.BACK):P===Qv?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):we(t.CULL_FACE),re=P}function S(P){P!==L&&(U&&t.lineWidth(P),L=P)}function O(P,ce,ue){P?(ke(t.POLYGON_OFFSET_FILL),(V!==ce||X!==ue)&&(t.polygonOffset(ce,ue),V=ce,X=ue)):we(t.POLYGON_OFFSET_FILL)}function te(P){P?ke(t.SCISSOR_TEST):we(t.SCISSOR_TEST)}function ee(P){P===void 0&&(P=t.TEXTURE0+q-1),j!==P&&(t.activeTexture(P),j=P)}function Q(P,ce,ue){ue===void 0&&(j===null?ue=t.TEXTURE0+q-1:ue=j);let be=Z[ue];be===void 0&&(be={type:void 0,texture:void 0},Z[ue]=be),(be.type!==P||be.texture!==ce)&&(j!==ue&&(t.activeTexture(ue),j=ue),t.bindTexture(P,ce||Ie[P]),be.type=P,be.texture=ce)}function Se(){const P=Z[j];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function he(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Fe(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Je(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ve(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function De(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ze(P){fe.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),fe.copy(P))}function Ke(P){pe.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),pe.copy(P))}function ut(P,ce){let ue=h.get(ce);ue===void 0&&(ue=new WeakMap,h.set(ce,ue));let be=ue.get(P);be===void 0&&(be=t.getUniformBlockIndex(ce,P.name),ue.set(P,be))}function He(P,ce){const be=h.get(ce).get(P);f.get(ce)!==be&&(t.uniformBlockBinding(ce,be,P.__bindingPointIndex),f.set(ce,be))}function oe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},j=null,Z={},m={},x=new WeakMap,v=[],p=null,c=!1,g=null,_=null,M=null,C=null,R=null,A=null,F=null,E=new tt(0,0,0),w=0,W=!1,Y=null,re=null,L=null,V=null,X=null,fe.set(0,0,t.canvas.width,t.canvas.height),pe.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:ke,disable:we,bindFramebuffer:Be,drawBuffers:b,useProgram:Re,setBlending:de,setMaterial:Ne,setFlipSided:xe,setCullFace:y,setLineWidth:S,setPolygonOffset:O,setScissorTest:te,activeTexture:ee,bindTexture:Q,unbindTexture:Se,compressedTexImage2D:he,compressedTexImage3D:ye,texImage2D:Ae,texImage3D:_e,updateUBOMapping:ut,uniformBlockBinding:He,texStorage2D:Ve,texStorage3D:De,texSubImage2D:Pe,texSubImage3D:Fe,compressedTexSubImage2D:J,compressedTexSubImage3D:Je,scissor:ze,viewport:Ke,reset:oe}}function ZT(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(y,S){return m?new OffscreenCanvas(y,S):dl("canvas")}function v(y,S,O,te){let ee=1;if((y.width>te||y.height>te)&&(ee=te/Math.max(y.width,y.height)),ee<1||S===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const Q=S?Yc:Math.floor,Se=Q(ee*y.width),he=Q(ee*y.height);h===void 0&&(h=x(Se,he));const ye=O?x(Se,he):h;return ye.width=Se,ye.height=he,ye.getContext("2d").drawImage(y,0,0,Se,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+Se+"x"+he+")."),ye}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function p(y){return Wh(y.width)&&Wh(y.height)}function c(y){return a?!1:y.wrapS!==Vn||y.wrapT!==Vn||y.minFilter!==Jt&&y.minFilter!==Cn}function g(y,S){return y.generateMipmaps&&S&&y.minFilter!==Jt&&y.minFilter!==Cn}function _(y){t.generateMipmap(y)}function M(y,S,O,te,ee=!1){if(a===!1)return S;if(y!==null){if(t[y]!==void 0)return t[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let Q=S;if(S===t.RED&&(O===t.FLOAT&&(Q=t.R32F),O===t.HALF_FLOAT&&(Q=t.R16F),O===t.UNSIGNED_BYTE&&(Q=t.R8)),S===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(Q=t.R8UI),O===t.UNSIGNED_SHORT&&(Q=t.R16UI),O===t.UNSIGNED_INT&&(Q=t.R32UI),O===t.BYTE&&(Q=t.R8I),O===t.SHORT&&(Q=t.R16I),O===t.INT&&(Q=t.R32I)),S===t.RG&&(O===t.FLOAT&&(Q=t.RG32F),O===t.HALF_FLOAT&&(Q=t.RG16F),O===t.UNSIGNED_BYTE&&(Q=t.RG8)),S===t.RGBA){const Se=ee?ll:st.getTransfer(te);O===t.FLOAT&&(Q=t.RGBA32F),O===t.HALF_FLOAT&&(Q=t.RGBA16F),O===t.UNSIGNED_BYTE&&(Q=Se===dt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function C(y,S,O){return g(y,O)===!0||y.isFramebufferTexture&&y.minFilter!==Jt&&y.minFilter!==Cn?Math.log2(Math.max(S.width,S.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?S.mipmaps.length:1}function R(y){return y===Jt||y===mh||y===du?t.NEAREST:t.LINEAR}function A(y){const S=y.target;S.removeEventListener("dispose",A),E(S),S.isVideoTexture&&f.delete(S)}function F(y){const S=y.target;S.removeEventListener("dispose",F),W(S)}function E(y){const S=i.get(y);if(S.__webglInit===void 0)return;const O=y.source,te=d.get(O);if(te){const ee=te[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(y),Object.keys(te).length===0&&d.delete(O)}i.remove(y)}function w(y){const S=i.get(y);t.deleteTexture(S.__webglTexture);const O=y.source,te=d.get(O);delete te[S.__cacheKey],o.memory.textures--}function W(y){const S=y.texture,O=i.get(y),te=i.get(S);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(O.__webglFramebuffer[ee]))for(let Q=0;Q<O.__webglFramebuffer[ee].length;Q++)t.deleteFramebuffer(O.__webglFramebuffer[ee][Q]);else t.deleteFramebuffer(O.__webglFramebuffer[ee]);O.__webglDepthbuffer&&t.deleteRenderbuffer(O.__webglDepthbuffer[ee])}else{if(Array.isArray(O.__webglFramebuffer))for(let ee=0;ee<O.__webglFramebuffer.length;ee++)t.deleteFramebuffer(O.__webglFramebuffer[ee]);else t.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&t.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&t.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let ee=0;ee<O.__webglColorRenderbuffer.length;ee++)O.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(O.__webglColorRenderbuffer[ee]);O.__webglDepthRenderbuffer&&t.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let ee=0,Q=S.length;ee<Q;ee++){const Se=i.get(S[ee]);Se.__webglTexture&&(t.deleteTexture(Se.__webglTexture),o.memory.textures--),i.remove(S[ee])}i.remove(S),i.remove(y)}let Y=0;function re(){Y=0}function L(){const y=Y;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),Y+=1,y}function V(y){const S=[];return S.push(y.wrapS),S.push(y.wrapT),S.push(y.wrapR||0),S.push(y.magFilter),S.push(y.minFilter),S.push(y.anisotropy),S.push(y.internalFormat),S.push(y.format),S.push(y.type),S.push(y.generateMipmaps),S.push(y.premultiplyAlpha),S.push(y.flipY),S.push(y.unpackAlignment),S.push(y.colorSpace),S.join()}function X(y,S){const O=i.get(y);if(y.isVideoTexture&&Ne(y),y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){const te=y.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(O,y,S);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+S)}function q(y,S){const O=i.get(y);if(y.version>0&&O.__version!==y.version){fe(O,y,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+S)}function U(y,S){const O=i.get(y);if(y.version>0&&O.__version!==y.version){fe(O,y,S);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+S)}function k(y,S){const O=i.get(y);if(y.version>0&&O.__version!==y.version){pe(O,y,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+S)}const G={[Vc]:t.REPEAT,[Vn]:t.CLAMP_TO_EDGE,[Wc]:t.MIRRORED_REPEAT},j={[Jt]:t.NEAREST,[mh]:t.NEAREST_MIPMAP_NEAREST,[du]:t.NEAREST_MIPMAP_LINEAR,[Cn]:t.LINEAR,[Lx]:t.LINEAR_MIPMAP_NEAREST,[Eo]:t.LINEAR_MIPMAP_LINEAR},Z={[Wx]:t.NEVER,[Kx]:t.ALWAYS,[Xx]:t.LESS,[t_]:t.LEQUAL,[jx]:t.EQUAL,[$x]:t.GEQUAL,[Yx]:t.GREATER,[qx]:t.NOTEQUAL};function H(y,S,O){if(O?(t.texParameteri(y,t.TEXTURE_WRAP_S,G[S.wrapS]),t.texParameteri(y,t.TEXTURE_WRAP_T,G[S.wrapT]),(y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY)&&t.texParameteri(y,t.TEXTURE_WRAP_R,G[S.wrapR]),t.texParameteri(y,t.TEXTURE_MAG_FILTER,j[S.magFilter]),t.texParameteri(y,t.TEXTURE_MIN_FILTER,j[S.minFilter])):(t.texParameteri(y,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(y,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY)&&t.texParameteri(y,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==Vn||S.wrapT!==Vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(y,t.TEXTURE_MAG_FILTER,R(S.magFilter)),t.texParameteri(y,t.TEXTURE_MIN_FILTER,R(S.minFilter)),S.minFilter!==Jt&&S.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(y,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(y,t.TEXTURE_COMPARE_FUNC,Z[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Jt||S.minFilter!==du&&S.minFilter!==Eo||S.type===Ni&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===To&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(y,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function $(y,S){let O=!1;y.__webglInit===void 0&&(y.__webglInit=!0,S.addEventListener("dispose",A));const te=S.source;let ee=d.get(te);ee===void 0&&(ee={},d.set(te,ee));const Q=V(S);if(Q!==y.__cacheKey){ee[Q]===void 0&&(ee[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ee[Q].usedTimes++;const Se=ee[y.__cacheKey];Se!==void 0&&(ee[y.__cacheKey].usedTimes--,Se.usedTimes===0&&w(S)),y.__cacheKey=Q,y.__webglTexture=ee[Q].texture}return O}function fe(y,S,O){let te=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=t.TEXTURE_3D);const ee=$(y,S),Q=S.source;n.bindTexture(te,y.__webglTexture,t.TEXTURE0+O);const Se=i.get(Q);if(Q.version!==Se.__version||ee===!0){n.activeTexture(t.TEXTURE0+O);const he=st.getPrimaries(st.workingColorSpace),ye=S.colorSpace===bn?null:st.getPrimaries(S.colorSpace),Pe=S.colorSpace===bn||he===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Fe=c(S)&&p(S.image)===!1;let J=v(S.image,Fe,!1,r.maxTextureSize);J=xe(S,J);const Je=p(J)||a,Ve=s.convert(S.format,S.colorSpace);let De=s.convert(S.type),Ae=M(S.internalFormat,Ve,De,S.colorSpace,S.isVideoTexture);H(te,S,Je);let _e;const ze=S.mipmaps,Ke=a&&S.isVideoTexture!==!0&&Ae!==Jg,ut=Se.__version===void 0||ee===!0,He=C(S,J,Je);if(S.isDepthTexture)Ae=t.DEPTH_COMPONENT,a?S.type===Ni?Ae=t.DEPTH_COMPONENT32F:S.type===Ii?Ae=t.DEPTH_COMPONENT24:S.type===_r?Ae=t.DEPTH24_STENCIL8:Ae=t.DEPTH_COMPONENT16:S.type===Ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===vr&&Ae===t.DEPTH_COMPONENT&&S.type!==Yf&&S.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Ii,De=s.convert(S.type)),S.format===Es&&Ae===t.DEPTH_COMPONENT&&(Ae=t.DEPTH_STENCIL,S.type!==_r&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=_r,De=s.convert(S.type))),ut&&(Ke?n.texStorage2D(t.TEXTURE_2D,1,Ae,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,Ae,J.width,J.height,0,Ve,De,null));else if(S.isDataTexture)if(ze.length>0&&Je){Ke&&ut&&n.texStorage2D(t.TEXTURE_2D,He,Ae,ze[0].width,ze[0].height);for(let oe=0,P=ze.length;oe<P;oe++)_e=ze[oe],Ke?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,_e.width,_e.height,Ve,De,_e.data):n.texImage2D(t.TEXTURE_2D,oe,Ae,_e.width,_e.height,0,Ve,De,_e.data);S.generateMipmaps=!1}else Ke?(ut&&n.texStorage2D(t.TEXTURE_2D,He,Ae,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,J.width,J.height,Ve,De,J.data)):n.texImage2D(t.TEXTURE_2D,0,Ae,J.width,J.height,0,Ve,De,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ke&&ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,Ae,ze[0].width,ze[0].height,J.depth);for(let oe=0,P=ze.length;oe<P;oe++)_e=ze[oe],S.format!==Wn?Ve!==null?Ke?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,_e.width,_e.height,J.depth,Ve,_e.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,oe,Ae,_e.width,_e.height,J.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,_e.width,_e.height,J.depth,Ve,De,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,oe,Ae,_e.width,_e.height,J.depth,0,Ve,De,_e.data)}else{Ke&&ut&&n.texStorage2D(t.TEXTURE_2D,He,Ae,ze[0].width,ze[0].height);for(let oe=0,P=ze.length;oe<P;oe++)_e=ze[oe],S.format!==Wn?Ve!==null?Ke?n.compressedTexSubImage2D(t.TEXTURE_2D,oe,0,0,_e.width,_e.height,Ve,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,oe,Ae,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,_e.width,_e.height,Ve,De,_e.data):n.texImage2D(t.TEXTURE_2D,oe,Ae,_e.width,_e.height,0,Ve,De,_e.data)}else if(S.isDataArrayTexture)Ke?(ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,Ae,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Ve,De,J.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ae,J.width,J.height,J.depth,0,Ve,De,J.data);else if(S.isData3DTexture)Ke?(ut&&n.texStorage3D(t.TEXTURE_3D,He,Ae,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Ve,De,J.data)):n.texImage3D(t.TEXTURE_3D,0,Ae,J.width,J.height,J.depth,0,Ve,De,J.data);else if(S.isFramebufferTexture){if(ut)if(Ke)n.texStorage2D(t.TEXTURE_2D,He,Ae,J.width,J.height);else{let oe=J.width,P=J.height;for(let ce=0;ce<He;ce++)n.texImage2D(t.TEXTURE_2D,ce,Ae,oe,P,0,Ve,De,null),oe>>=1,P>>=1}}else if(ze.length>0&&Je){Ke&&ut&&n.texStorage2D(t.TEXTURE_2D,He,Ae,ze[0].width,ze[0].height);for(let oe=0,P=ze.length;oe<P;oe++)_e=ze[oe],Ke?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,Ve,De,_e):n.texImage2D(t.TEXTURE_2D,oe,Ae,Ve,De,_e);S.generateMipmaps=!1}else Ke?(ut&&n.texStorage2D(t.TEXTURE_2D,He,Ae,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ve,De,J)):n.texImage2D(t.TEXTURE_2D,0,Ae,Ve,De,J);g(S,Je)&&_(te),Se.__version=Q.version,S.onUpdate&&S.onUpdate(S)}y.__version=S.version}function pe(y,S,O){if(S.image.length!==6)return;const te=$(y,S),ee=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,y.__webglTexture,t.TEXTURE0+O);const Q=i.get(ee);if(ee.version!==Q.__version||te===!0){n.activeTexture(t.TEXTURE0+O);const Se=st.getPrimaries(st.workingColorSpace),he=S.colorSpace===bn?null:st.getPrimaries(S.colorSpace),ye=S.colorSpace===bn||Se===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Pe=S.isCompressedTexture||S.image[0].isCompressedTexture,Fe=S.image[0]&&S.image[0].isDataTexture,J=[];for(let oe=0;oe<6;oe++)!Pe&&!Fe?J[oe]=v(S.image[oe],!1,!0,r.maxCubemapSize):J[oe]=Fe?S.image[oe].image:S.image[oe],J[oe]=xe(S,J[oe]);const Je=J[0],Ve=p(Je)||a,De=s.convert(S.format,S.colorSpace),Ae=s.convert(S.type),_e=M(S.internalFormat,De,Ae,S.colorSpace),ze=a&&S.isVideoTexture!==!0,Ke=Q.__version===void 0||te===!0;let ut=C(S,Je,Ve);H(t.TEXTURE_CUBE_MAP,S,Ve);let He;if(Pe){ze&&Ke&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ut,_e,Je.width,Je.height);for(let oe=0;oe<6;oe++){He=J[oe].mipmaps;for(let P=0;P<He.length;P++){const ce=He[P];S.format!==Wn?De!==null?ze?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P,0,0,ce.width,ce.height,De,ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P,_e,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P,0,0,ce.width,ce.height,De,Ae,ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P,_e,ce.width,ce.height,0,De,Ae,ce.data)}}}else{He=S.mipmaps,ze&&Ke&&(He.length>0&&ut++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ut,_e,J[0].width,J[0].height));for(let oe=0;oe<6;oe++)if(Fe){ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,J[oe].width,J[oe].height,De,Ae,J[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,_e,J[oe].width,J[oe].height,0,De,Ae,J[oe].data);for(let P=0;P<He.length;P++){const ue=He[P].image[oe].image;ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P+1,0,0,ue.width,ue.height,De,Ae,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P+1,_e,ue.width,ue.height,0,De,Ae,ue.data)}}else{ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,De,Ae,J[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,_e,De,Ae,J[oe]);for(let P=0;P<He.length;P++){const ce=He[P];ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P+1,0,0,De,Ae,ce.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P+1,_e,De,Ae,ce.image[oe])}}}g(S,Ve)&&_(t.TEXTURE_CUBE_MAP),Q.__version=ee.version,S.onUpdate&&S.onUpdate(S)}y.__version=S.version}function Me(y,S,O,te,ee,Q){const Se=s.convert(O.format,O.colorSpace),he=s.convert(O.type),ye=M(O.internalFormat,Se,he,O.colorSpace);if(!i.get(S).__hasExternalTextures){const Fe=Math.max(1,S.width>>Q),J=Math.max(1,S.height>>Q);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,Q,ye,Fe,J,S.depth,0,Se,he,null):n.texImage2D(ee,Q,ye,Fe,J,0,Se,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,y),de(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,ee,i.get(O).__webglTexture,0,me(S)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,ee,i.get(O).__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(y,S,O){if(t.bindRenderbuffer(t.RENDERBUFFER,y),S.depthBuffer&&!S.stencilBuffer){let te=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(O||de(S)){const ee=S.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Ni?te=t.DEPTH_COMPONENT32F:ee.type===Ii&&(te=t.DEPTH_COMPONENT24));const Q=me(S);de(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Q,te,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,Q,te,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,te,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,y)}else if(S.depthBuffer&&S.stencilBuffer){const te=me(S);O&&de(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,S.width,S.height):de(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,y)}else{const te=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ee=0;ee<te.length;ee++){const Q=te[ee],Se=s.convert(Q.format,Q.colorSpace),he=s.convert(Q.type),ye=M(Q.internalFormat,Se,he,Q.colorSpace),Pe=me(S);O&&de(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,ye,S.width,S.height):de(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Pe,ye,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ye,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ke(y,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,y),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const te=i.get(S.depthTexture).__webglTexture,ee=me(S);if(S.depthTexture.format===vr)de(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(S.depthTexture.format===Es)de(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function we(y){const S=i.get(y),O=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ke(S.__webglFramebuffer,y)}else if(O){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]=t.createRenderbuffer(),Ie(S.__webglDepthbuffer[te],y,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),Ie(S.__webglDepthbuffer,y,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(y,S,O){const te=i.get(y);S!==void 0&&Me(te.__webglFramebuffer,y,y.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&we(y)}function b(y){const S=y.texture,O=i.get(y),te=i.get(S);y.addEventListener("dispose",F),y.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=S.version,o.memory.textures++);const ee=y.isWebGLCubeRenderTarget===!0,Q=y.isWebGLMultipleRenderTargets===!0,Se=p(y)||a;if(ee){O.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[he]=[];for(let ye=0;ye<S.mipmaps.length;ye++)O.__webglFramebuffer[he][ye]=t.createFramebuffer()}else O.__webglFramebuffer[he]=t.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let he=0;he<S.mipmaps.length;he++)O.__webglFramebuffer[he]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(Q)if(r.drawBuffers){const he=y.texture;for(let ye=0,Pe=he.length;ye<Pe;ye++){const Fe=i.get(he[ye]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&de(y)===!1){const he=Q?S:[S];O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ye=0;ye<he.length;ye++){const Pe=he[ye];O.__webglColorRenderbuffer[ye]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[ye]);const Fe=s.convert(Pe.format,Pe.colorSpace),J=s.convert(Pe.type),Je=M(Pe.internalFormat,Fe,J,Pe.colorSpace,y.isXRRenderTarget===!0),Ve=me(y);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,Je,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,O.__webglColorRenderbuffer[ye])}t.bindRenderbuffer(t.RENDERBUFFER,null),y.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),Ie(O.__webglDepthRenderbuffer,y,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),H(t.TEXTURE_CUBE_MAP,S,Se);for(let he=0;he<6;he++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)Me(O.__webglFramebuffer[he][ye],y,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,ye);else Me(O.__webglFramebuffer[he],y,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(S,Se)&&_(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Q){const he=y.texture;for(let ye=0,Pe=he.length;ye<Pe;ye++){const Fe=he[ye],J=i.get(Fe);n.bindTexture(t.TEXTURE_2D,J.__webglTexture),H(t.TEXTURE_2D,Fe,Se),Me(O.__webglFramebuffer,y,Fe,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,0),g(Fe,Se)&&_(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?he=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(he,te.__webglTexture),H(he,S,Se),a&&S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)Me(O.__webglFramebuffer[ye],y,S,t.COLOR_ATTACHMENT0,he,ye);else Me(O.__webglFramebuffer,y,S,t.COLOR_ATTACHMENT0,he,0);g(S,Se)&&_(he),n.unbindTexture()}y.depthBuffer&&we(y)}function Re(y){const S=p(y)||a,O=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let te=0,ee=O.length;te<ee;te++){const Q=O[te];if(g(Q,S)){const Se=y.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,he=i.get(Q).__webglTexture;n.bindTexture(Se,he),_(Se),n.unbindTexture()}}}function ie(y){if(a&&y.samples>0&&de(y)===!1){const S=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],O=y.width,te=y.height;let ee=t.COLOR_BUFFER_BIT;const Q=[],Se=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(y),ye=y.isWebGLMultipleRenderTargets===!0;if(ye)for(let Pe=0;Pe<S.length;Pe++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Pe=0;Pe<S.length;Pe++){Q.push(t.COLOR_ATTACHMENT0+Pe),y.depthBuffer&&Q.push(Se);const Fe=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Fe===!1&&(y.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),y.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ye&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[Pe]),Fe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Se]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Se])),ye){const J=i.get(S[Pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,J,0)}t.blitFramebuffer(0,0,O,te,0,0,O,te,ee,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Q)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ye)for(let Pe=0;Pe<S.length;Pe++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,he.__webglColorRenderbuffer[Pe]);const Fe=i.get(S[Pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function me(y){return Math.min(r.maxSamples,y.samples)}function de(y){const S=i.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ne(y){const S=o.render.frame;f.get(y)!==S&&(f.set(y,S),y.update())}function xe(y,S){const O=y.colorSpace,te=y.format,ee=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===Xc||O!==xi&&O!==bn&&(st.getTransfer(O)===dt?a===!1?e.has("EXT_sRGB")===!0&&te===Wn?(y.format=Xc,y.minFilter=Cn,y.generateMipmaps=!1):S=i_.sRGBToLinear(S):(te!==Wn||ee!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}this.allocateTextureUnit=L,this.resetTextureUnits=re,this.setTexture2D=X,this.setTexture2DArray=q,this.setTexture3D=U,this.setTextureCube=k,this.rebindTextures=Be,this.setupRenderTarget=b,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=de}function QT(t,e,n){const i=n.isWebGL2;function r(s,o=bn){let a;const l=st.getTransfer(o);if(s===Yi)return t.UNSIGNED_BYTE;if(s===qg)return t.UNSIGNED_SHORT_4_4_4_4;if(s===$g)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Dx)return t.BYTE;if(s===Ux)return t.SHORT;if(s===Yf)return t.UNSIGNED_SHORT;if(s===Yg)return t.INT;if(s===Ii)return t.UNSIGNED_INT;if(s===Ni)return t.FLOAT;if(s===To)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ix)return t.ALPHA;if(s===Wn)return t.RGBA;if(s===Nx)return t.LUMINANCE;if(s===Fx)return t.LUMINANCE_ALPHA;if(s===vr)return t.DEPTH_COMPONENT;if(s===Es)return t.DEPTH_STENCIL;if(s===Xc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Ox)return t.RED;if(s===Kg)return t.RED_INTEGER;if(s===kx)return t.RG;if(s===Zg)return t.RG_INTEGER;if(s===Qg)return t.RGBA_INTEGER;if(s===hu||s===pu||s===mu||s===gu)if(l===dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===hu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===pu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===gu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===hu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===pu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===mu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===gu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===gh||s===_h||s===vh||s===xh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===gh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===_h)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===vh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===xh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Jg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===yh||s===Sh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===yh)return l===dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Sh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Mh||s===Eh||s===Th||s===wh||s===Ah||s===Rh||s===Ch||s===Ph||s===bh||s===Lh||s===Dh||s===Uh||s===Ih||s===Nh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Mh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Eh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Th)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===wh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ah)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Rh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ch)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ph)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===bh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Lh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Dh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Uh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ih)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Nh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===_u||s===Fh||s===Oh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===_u)return l===dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Fh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Oh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===zx||s===kh||s===zh||s===Bh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===_u)return a.COMPRESSED_RED_RGTC1_EXT;if(s===kh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===zh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Bh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_r?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class JT extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Sa extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ew={type:"move"};class Gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const p=n.getJointPose(v,i),c=this._getHandJoint(u,v);p!==null&&(c.matrix.fromArray(p.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=p.radius),c.visible=p!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=f.position.distanceTo(h.position),m=.02,x=.005;u.inputState.pinching&&d>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ew)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Sa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class tw extends Cs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,h=null,d=null,m=null,x=null;const v=n.getContextAttributes();let p=null,c=null;const g=[],_=[],M=new rt;let C=null;const R=new Pn;R.layers.enable(1),R.viewport=new zt;const A=new Pn;A.layers.enable(2),A.viewport=new zt;const F=[R,A],E=new JT;E.layers.enable(1),E.layers.enable(2);let w=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let $=g[H];return $===void 0&&($=new Gu,g[H]=$),$.getTargetRaySpace()},this.getControllerGrip=function(H){let $=g[H];return $===void 0&&($=new Gu,g[H]=$),$.getGripSpace()},this.getHand=function(H){let $=g[H];return $===void 0&&($=new Gu,g[H]=$),$.getHandSpace()};function Y(H){const $=_.indexOf(H.inputSource);if($===-1)return;const fe=g[$];fe!==void 0&&(fe.update(H.inputSource,H.frame,u||o),fe.dispatchEvent({type:H.type,data:H.inputSource}))}function re(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",re),r.removeEventListener("inputsourceschange",L);for(let H=0;H<g.length;H++){const $=_[H];$!==null&&(_[H]=null,g[H].disconnect($))}w=null,W=null,e.setRenderTarget(p),m=null,d=null,h=null,r=null,c=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(H){u=H},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",re),r.addEventListener("inputsourceschange",L),v.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,$),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),c=new Ar(m.framebufferWidth,m.framebufferHeight,{format:Wn,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let $=null,fe=null,pe=null;v.depth&&(pe=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,$=v.stencil?Es:vr,fe=v.stencil?_r:Ii);const Me={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Me),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),c=new Ar(d.textureWidth,d.textureHeight,{format:Wn,type:Yi,depthTexture:new m_(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Ie=e.properties.get(c);Ie.__ignoreDepthValues=d.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Z.setContext(r),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(H){for(let $=0;$<H.removed.length;$++){const fe=H.removed[$],pe=_.indexOf(fe);pe>=0&&(_[pe]=null,g[pe].disconnect(fe))}for(let $=0;$<H.added.length;$++){const fe=H.added[$];let pe=_.indexOf(fe);if(pe===-1){for(let Ie=0;Ie<g.length;Ie++)if(Ie>=_.length){_.push(fe),pe=Ie;break}else if(_[Ie]===null){_[Ie]=fe,pe=Ie;break}if(pe===-1)break}const Me=g[pe];Me&&Me.connect(fe)}}const V=new B,X=new B;function q(H,$,fe){V.setFromMatrixPosition($.matrixWorld),X.setFromMatrixPosition(fe.matrixWorld);const pe=V.distanceTo(X),Me=$.projectionMatrix.elements,Ie=fe.projectionMatrix.elements,ke=Me[14]/(Me[10]-1),we=Me[14]/(Me[10]+1),Be=(Me[9]+1)/Me[5],b=(Me[9]-1)/Me[5],Re=(Me[8]-1)/Me[0],ie=(Ie[8]+1)/Ie[0],me=ke*Re,de=ke*ie,Ne=pe/(-Re+ie),xe=Ne*-Re;$.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(xe),H.translateZ(Ne),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const y=ke+Ne,S=we+Ne,O=me-xe,te=de+(pe-xe),ee=Be*we/S*y,Q=b*we/S*y;H.projectionMatrix.makePerspective(O,te,ee,Q,y,S),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function U(H,$){$===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices($.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;E.near=A.near=R.near=H.near,E.far=A.far=R.far=H.far,(w!==E.near||W!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),w=E.near,W=E.far);const $=H.parent,fe=E.cameras;U(E,$);for(let pe=0;pe<fe.length;pe++)U(fe[pe],$);fe.length===2?q(E,R,A):E.projectionMatrix.copy(R.projectionMatrix),k(H,E,$)};function k(H,$,fe){fe===null?H.matrix.copy($.matrixWorld):(H.matrix.copy(fe.matrixWorld),H.matrix.invert(),H.matrix.multiply($.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy($.projectionMatrix),H.projectionMatrixInverse.copy($.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=jc*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)};let G=null;function j(H,$){if(f=$.getViewerPose(u||o),x=$,f!==null){const fe=f.views;m!==null&&(e.setRenderTargetFramebuffer(c,m.framebuffer),e.setRenderTarget(c));let pe=!1;fe.length!==E.cameras.length&&(E.cameras.length=0,pe=!0);for(let Me=0;Me<fe.length;Me++){const Ie=fe[Me];let ke=null;if(m!==null)ke=m.getViewport(Ie);else{const Be=h.getViewSubImage(d,Ie);ke=Be.viewport,Me===0&&(e.setRenderTargetTextures(c,Be.colorTexture,d.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(c))}let we=F[Me];we===void 0&&(we=new Pn,we.layers.enable(Me),we.viewport=new zt,F[Me]=we),we.matrix.fromArray(Ie.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Ie.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(ke.x,ke.y,ke.width,ke.height),Me===0&&(E.matrix.copy(we.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),pe===!0&&E.cameras.push(we)}}for(let fe=0;fe<g.length;fe++){const pe=_[fe],Me=g[fe];pe!==null&&Me!==void 0&&Me.update(pe,$,u||o)}G&&G(H,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),x=null}const Z=new p_;Z.setAnimationLoop(j),this.setAnimationLoop=function(H){G=H},this.dispose=function(){}}}function nw(t,e){function n(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function i(p,c){c.color.getRGB(p.fogColor.value,c_(t)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function r(p,c,g,_,M){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(p,c):c.isMeshToonMaterial?(s(p,c),h(p,c)):c.isMeshPhongMaterial?(s(p,c),f(p,c)):c.isMeshStandardMaterial?(s(p,c),d(p,c),c.isMeshPhysicalMaterial&&m(p,c,M)):c.isMeshMatcapMaterial?(s(p,c),x(p,c)):c.isMeshDepthMaterial?s(p,c):c.isMeshDistanceMaterial?(s(p,c),v(p,c)):c.isMeshNormalMaterial?s(p,c):c.isLineBasicMaterial?(o(p,c),c.isLineDashedMaterial&&a(p,c)):c.isPointsMaterial?l(p,c,g,_):c.isSpriteMaterial?u(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,n(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===dn&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,n(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===dn&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,n(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,n(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const g=e.get(c).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap){p.lightMap.value=c.lightMap;const _=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=c.lightMapIntensity*_,n(c.lightMap,p.lightMapTransform)}c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,p.aoMapTransform))}function o(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform))}function a(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function l(p,c,g,_){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*g,p.scale.value=_*.5,c.map&&(p.map.value=c.map,n(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function u(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function f(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function h(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function d(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,p.roughnessMapTransform)),e.get(c).envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function m(p,c,g){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===dn&&p.clearcoatNormalScale.value.negate())),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(p.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(p.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,c){c.matcap&&(p.matcap.value=c.matcap)}function v(p,c){const g=e.get(c).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function iw(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,_){const M=_.program;i.uniformBlockBinding(g,M)}function u(g,_){let M=r[g.id];M===void 0&&(x(g),M=f(g),r[g.id]=M,g.addEventListener("dispose",p));const C=_.program;i.updateUBOMapping(g,C);const R=e.render.frame;s[g.id]!==R&&(d(g),s[g.id]=R)}function f(g){const _=h();g.__bindingPointIndex=_;const M=t.createBuffer(),C=g.__size,R=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,C,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const _=r[g.id],M=g.uniforms,C=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let R=0,A=M.length;R<A;R++){const F=Array.isArray(M[R])?M[R]:[M[R]];for(let E=0,w=F.length;E<w;E++){const W=F[E];if(m(W,R,E,C)===!0){const Y=W.__offset,re=Array.isArray(W.value)?W.value:[W.value];let L=0;for(let V=0;V<re.length;V++){const X=re[V],q=v(X);typeof X=="number"||typeof X=="boolean"?(W.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,Y+L,W.__data)):X.isMatrix3?(W.__data[0]=X.elements[0],W.__data[1]=X.elements[1],W.__data[2]=X.elements[2],W.__data[3]=0,W.__data[4]=X.elements[3],W.__data[5]=X.elements[4],W.__data[6]=X.elements[5],W.__data[7]=0,W.__data[8]=X.elements[6],W.__data[9]=X.elements[7],W.__data[10]=X.elements[8],W.__data[11]=0):(X.toArray(W.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Y,W.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,_,M,C){const R=g.value,A=_+"_"+M;if(C[A]===void 0)return typeof R=="number"||typeof R=="boolean"?C[A]=R:C[A]=R.clone(),!0;{const F=C[A];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return C[A]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function x(g){const _=g.uniforms;let M=0;const C=16;for(let A=0,F=_.length;A<F;A++){const E=Array.isArray(_[A])?_[A]:[_[A]];for(let w=0,W=E.length;w<W;w++){const Y=E[w],re=Array.isArray(Y.value)?Y.value:[Y.value];for(let L=0,V=re.length;L<V;L++){const X=re[L],q=v(X),U=M%C;U!==0&&C-U<q.boundary&&(M+=C-U),Y.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=M,M+=q.storage}}}const R=M%C;return R>0&&(M+=C-R),g.__size=M,g.__cache={},this}function v(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function p(g){const _=g.target;_.removeEventListener("dispose",p);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function c(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class S_{constructor(e={}){const{canvas:n=Qx(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),x=new Int32Array(4);let v=null,p=null;const c=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this._useLegacyLights=!1,this.toneMapping=ji,this.toneMappingExposure=1;const _=this;let M=!1,C=0,R=0,A=null,F=-1,E=null;const w=new zt,W=new zt;let Y=null;const re=new tt(0);let L=0,V=n.width,X=n.height,q=1,U=null,k=null;const G=new zt(0,0,V,X),j=new zt(0,0,V,X);let Z=!1;const H=new h_;let $=!1,fe=!1,pe=null;const Me=new Ft,Ie=new rt,ke=new B,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return A===null?q:1}let b=i;function Re(T,D){for(let N=0;N<T.length;N++){const z=T[N],I=n.getContext(z,D);if(I!==null)return I}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${jf}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",P,!1),n.addEventListener("webglcontextcreationerror",ce,!1),b===null){const D=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&D.shift(),b=Re(D,T),b===null)throw Re(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&b instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),b.getShaderPrecisionFormat===void 0&&(b.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ie,me,de,Ne,xe,y,S,O,te,ee,Q,Se,he,ye,Pe,Fe,J,Je,Ve,De,Ae,_e,ze,Ke;function ut(){ie=new hE(b),me=new oE(b,ie,e),ie.init(me),_e=new QT(b,ie,me),de=new KT(b,ie,me),Ne=new gE(b),xe=new FT,y=new ZT(b,ie,de,xe,me,_e,Ne),S=new lE(_),O=new dE(_),te=new Ey(b,me),ze=new rE(b,ie,te,me),ee=new pE(b,te,Ne,ze),Q=new yE(b,ee,te,Ne),Ve=new xE(b,me,y),Fe=new aE(xe),Se=new NT(_,S,O,ie,me,ze,Fe),he=new nw(_,xe),ye=new kT,Pe=new WT(ie,me),Je=new iE(_,S,O,de,Q,d,l),J=new $T(_,Q,me),Ke=new iw(b,Ne,me,de),De=new sE(b,ie,Ne,me),Ae=new mE(b,ie,Ne,me),Ne.programs=Se.programs,_.capabilities=me,_.extensions=ie,_.properties=xe,_.renderLists=ye,_.shadowMap=J,_.state=de,_.info=Ne}ut();const He=new tw(_,b);this.xr=He,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const T=ie.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ie.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(V,X,!1))},this.getSize=function(T){return T.set(V,X)},this.setSize=function(T,D,N=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=T,X=D,n.width=Math.floor(T*q),n.height=Math.floor(D*q),N===!0&&(n.style.width=T+"px",n.style.height=D+"px"),this.setViewport(0,0,T,D)},this.getDrawingBufferSize=function(T){return T.set(V*q,X*q).floor()},this.setDrawingBufferSize=function(T,D,N){V=T,X=D,q=N,n.width=Math.floor(T*N),n.height=Math.floor(D*N),this.setViewport(0,0,T,D)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(G)},this.setViewport=function(T,D,N,z){T.isVector4?G.set(T.x,T.y,T.z,T.w):G.set(T,D,N,z),de.viewport(w.copy(G).multiplyScalar(q).floor())},this.getScissor=function(T){return T.copy(j)},this.setScissor=function(T,D,N,z){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,D,N,z),de.scissor(W.copy(j).multiplyScalar(q).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(T){de.setScissorTest(Z=T)},this.setOpaqueSort=function(T){U=T},this.setTransparentSort=function(T){k=T},this.getClearColor=function(T){return T.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(T=!0,D=!0,N=!0){let z=0;if(T){let I=!1;if(A!==null){const K=A.texture.format;I=K===Qg||K===Zg||K===Kg}if(I){const K=A.texture.type,se=K===Yi||K===Ii||K===Yf||K===_r||K===qg||K===$g,ae=Je.getClearColor(),ge=Je.getClearAlpha(),Ue=ae.r,Le=ae.g,Te=ae.b;se?(m[0]=Ue,m[1]=Le,m[2]=Te,m[3]=ge,b.clearBufferuiv(b.COLOR,0,m)):(x[0]=Ue,x[1]=Le,x[2]=Te,x[3]=ge,b.clearBufferiv(b.COLOR,0,x))}else z|=b.COLOR_BUFFER_BIT}D&&(z|=b.DEPTH_BUFFER_BIT),N&&(z|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",P,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),ye.dispose(),Pe.dispose(),xe.dispose(),S.dispose(),O.dispose(),Q.dispose(),ze.dispose(),Ke.dispose(),Se.dispose(),He.dispose(),He.removeEventListener("sessionstart",bt),He.removeEventListener("sessionend",nt),pe&&(pe.dispose(),pe=null),Et.stop()};function oe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=Ne.autoReset,D=J.enabled,N=J.autoUpdate,z=J.needsUpdate,I=J.type;ut(),Ne.autoReset=T,J.enabled=D,J.autoUpdate=N,J.needsUpdate=z,J.type=I}function ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ue(T){const D=T.target;D.removeEventListener("dispose",ue),be(D)}function be(T){Ce(T),xe.remove(T)}function Ce(T){const D=xe.get(T).programs;D!==void 0&&(D.forEach(function(N){Se.releaseProgram(N)}),T.isShaderMaterial&&Se.releaseShaderCache(T))}this.renderBufferDirect=function(T,D,N,z,I,K){D===null&&(D=we);const se=I.isMesh&&I.matrixWorld.determinant()<0,ae=En(T,D,N,z,I);de.setMaterial(z,se);let ge=N.index,Ue=1;if(z.wireframe===!0){if(ge=ee.getWireframeAttribute(N),ge===void 0)return;Ue=2}const Le=N.drawRange,Te=N.attributes.position;let Qe=Le.start*Ue,vt=(Le.start+Le.count)*Ue;K!==null&&(Qe=Math.max(Qe,K.start*Ue),vt=Math.min(vt,(K.start+K.count)*Ue)),ge!==null?(Qe=Math.max(Qe,0),vt=Math.min(vt,ge.count)):Te!=null&&(Qe=Math.max(Qe,0),vt=Math.min(vt,Te.count));const ot=vt-Qe;if(ot<0||ot===1/0)return;ze.setup(I,z,ae,N,ge);let Kt,at=De;if(ge!==null&&(Kt=te.get(ge),at=Ae,at.setIndex(Kt)),I.isMesh)z.wireframe===!0?(de.setLineWidth(z.wireframeLinewidth*Be()),at.setMode(b.LINES)):at.setMode(b.TRIANGLES);else if(I.isLine){let Ge=z.linewidth;Ge===void 0&&(Ge=1),de.setLineWidth(Ge*Be()),I.isLineSegments?at.setMode(b.LINES):I.isLineLoop?at.setMode(b.LINE_LOOP):at.setMode(b.LINE_STRIP)}else I.isPoints?at.setMode(b.POINTS):I.isSprite&&at.setMode(b.TRIANGLES);if(I.isBatchedMesh)at.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else if(I.isInstancedMesh)at.renderInstances(Qe,ot,I.count);else if(N.isInstancedBufferGeometry){const Ge=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,Fl=Math.min(N.instanceCount,Ge);at.renderInstances(Qe,ot,Fl)}else at.render(Qe,ot)};function Ze(T,D,N){T.transparent===!0&&T.side===ci&&T.forceSinglePass===!1?(T.side=dn,T.needsUpdate=!0,Lt(T,D,N),T.side=Ki,T.needsUpdate=!0,Lt(T,D,N),T.side=ci):Lt(T,D,N)}this.compile=function(T,D,N=null){N===null&&(N=T),p=Pe.get(N),p.init(),g.push(p),N.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),T!==N&&T.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights(_._useLegacyLights);const z=new Set;return T.traverse(function(I){const K=I.material;if(K)if(Array.isArray(K))for(let se=0;se<K.length;se++){const ae=K[se];Ze(ae,N,I),z.add(ae)}else Ze(K,N,I),z.add(K)}),g.pop(),p=null,z},this.compileAsync=function(T,D,N=null){const z=this.compile(T,D,N);return new Promise(I=>{function K(){if(z.forEach(function(se){xe.get(se).currentProgram.isReady()&&z.delete(se)}),z.size===0){I(T);return}setTimeout(K,10)}ie.get("KHR_parallel_shader_compile")!==null?K():setTimeout(K,10)})};let et=null;function St(T){et&&et(T)}function bt(){Et.stop()}function nt(){Et.start()}const Et=new p_;Et.setAnimationLoop(St),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(T){et=T,He.setAnimationLoop(T),T===null?Et.stop():Et.start()},He.addEventListener("sessionstart",bt),He.addEventListener("sessionend",nt),this.render=function(T,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(D),D=He.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,D,A),p=Pe.get(T,g.length),p.init(),g.push(p),Me.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),H.setFromProjectionMatrix(Me),fe=this.localClippingEnabled,$=Fe.init(this.clippingPlanes,fe),v=ye.get(T,c.length),v.init(),c.push(v),rn(T,D,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(U,k),this.info.render.frame++,$===!0&&Fe.beginShadows();const N=p.state.shadowsArray;if(J.render(N,T,D),$===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Je.render(v,T),p.setupLights(_._useLegacyLights),D.isArrayCamera){const z=D.cameras;for(let I=0,K=z.length;I<K;I++){const se=z[I];Gt(v,T,se,se.viewport)}}else Gt(v,T,D);A!==null&&(y.updateMultisampleRenderTarget(A),y.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(_,T,D),ze.resetDefaultState(),F=-1,E=null,g.pop(),g.length>0?p=g[g.length-1]:p=null,c.pop(),c.length>0?v=c[c.length-1]:v=null};function rn(T,D,N,z){if(T.visible===!1)return;if(T.layers.test(D.layers)){if(T.isGroup)N=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(D);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||H.intersectsSprite(T)){z&&ke.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Me);const se=Q.update(T),ae=T.material;ae.visible&&v.push(T,se,ae,N,ke.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||H.intersectsObject(T))){const se=Q.update(T),ae=T.material;if(z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ke.copy(T.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),ke.copy(se.boundingSphere.center)),ke.applyMatrix4(T.matrixWorld).applyMatrix4(Me)),Array.isArray(ae)){const ge=se.groups;for(let Ue=0,Le=ge.length;Ue<Le;Ue++){const Te=ge[Ue],Qe=ae[Te.materialIndex];Qe&&Qe.visible&&v.push(T,se,Qe,N,ke.z,Te)}}else ae.visible&&v.push(T,se,ae,N,ke.z,null)}}const K=T.children;for(let se=0,ae=K.length;se<ae;se++)rn(K[se],D,N,z)}function Gt(T,D,N,z){const I=T.opaque,K=T.transmissive,se=T.transparent;p.setupLightsView(N),$===!0&&Fe.setGlobalState(_.clippingPlanes,N),K.length>0&&No(I,K,D,N),z&&de.viewport(w.copy(z)),I.length>0&&er(I,D,N),K.length>0&&er(K,D,N),se.length>0&&er(se,D,N),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function No(T,D,N,z){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;const K=me.isWebGL2;pe===null&&(pe=new Ar(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")?To:Yi,minFilter:Eo,samples:K?4:0})),_.getDrawingBufferSize(Ie),K?pe.setSize(Ie.x,Ie.y):pe.setSize(Yc(Ie.x),Yc(Ie.y));const se=_.getRenderTarget();_.setRenderTarget(pe),_.getClearColor(re),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();const ae=_.toneMapping;_.toneMapping=ji,er(T,N,z),y.updateMultisampleRenderTarget(pe),y.updateRenderTargetMipmap(pe);let ge=!1;for(let Ue=0,Le=D.length;Ue<Le;Ue++){const Te=D[Ue],Qe=Te.object,vt=Te.geometry,ot=Te.material,Kt=Te.group;if(ot.side===ci&&Qe.layers.test(z.layers)){const at=ot.side;ot.side=dn,ot.needsUpdate=!0,Ee(Qe,N,z,vt,ot,Kt),ot.side=at,ot.needsUpdate=!0,ge=!0}}ge===!0&&(y.updateMultisampleRenderTarget(pe),y.updateRenderTargetMipmap(pe)),_.setRenderTarget(se),_.setClearColor(re,L),_.toneMapping=ae}function er(T,D,N){const z=D.isScene===!0?D.overrideMaterial:null;for(let I=0,K=T.length;I<K;I++){const se=T[I],ae=se.object,ge=se.geometry,Ue=z===null?se.material:z,Le=se.group;ae.layers.test(N.layers)&&Ee(ae,D,N,ge,Ue,Le)}}function Ee(T,D,N,z,I,K){T.onBeforeRender(_,D,N,z,I,K),T.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),I.onBeforeRender(_,D,N,z,T,K),I.transparent===!0&&I.side===ci&&I.forceSinglePass===!1?(I.side=dn,I.needsUpdate=!0,_.renderBufferDirect(N,D,z,I,T,K),I.side=Ki,I.needsUpdate=!0,_.renderBufferDirect(N,D,z,I,T,K),I.side=ci):_.renderBufferDirect(N,D,z,I,T,K),T.onAfterRender(_,D,N,z,I,K)}function Lt(T,D,N){D.isScene!==!0&&(D=we);const z=xe.get(T),I=p.state.lights,K=p.state.shadowsArray,se=I.state.version,ae=Se.getParameters(T,I.state,K,D,N),ge=Se.getProgramCacheKey(ae);let Ue=z.programs;z.environment=T.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(T.isMeshStandardMaterial?O:S).get(T.envMap||z.environment),Ue===void 0&&(T.addEventListener("dispose",ue),Ue=new Map,z.programs=Ue);let Le=Ue.get(ge);if(Le!==void 0){if(z.currentProgram===Le&&z.lightsStateVersion===se)return ct(T,ae),Le}else ae.uniforms=Se.getUniforms(T),T.onBuild(N,ae,_),T.onBeforeCompile(ae,_),Le=Se.acquireProgram(ae,ge),Ue.set(ge,Le),z.uniforms=ae.uniforms;const Te=z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Te.clippingPlanes=Fe.uniform),ct(T,ae),z.needsLights=Nl(T),z.lightsStateVersion=se,z.needsLights&&(Te.ambientLightColor.value=I.state.ambient,Te.lightProbe.value=I.state.probe,Te.directionalLights.value=I.state.directional,Te.directionalLightShadows.value=I.state.directionalShadow,Te.spotLights.value=I.state.spot,Te.spotLightShadows.value=I.state.spotShadow,Te.rectAreaLights.value=I.state.rectArea,Te.ltc_1.value=I.state.rectAreaLTC1,Te.ltc_2.value=I.state.rectAreaLTC2,Te.pointLights.value=I.state.point,Te.pointLightShadows.value=I.state.pointShadow,Te.hemisphereLights.value=I.state.hemi,Te.directionalShadowMap.value=I.state.directionalShadowMap,Te.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Te.spotShadowMap.value=I.state.spotShadowMap,Te.spotLightMatrix.value=I.state.spotLightMatrix,Te.spotLightMap.value=I.state.spotLightMap,Te.pointShadowMap.value=I.state.pointShadowMap,Te.pointShadowMatrix.value=I.state.pointShadowMatrix),z.currentProgram=Le,z.uniformsList=null,Le}function Xe(T){if(T.uniformsList===null){const D=T.currentProgram.getUniforms();T.uniformsList=Fa.seqWithValue(D.seq,T.uniforms)}return T.uniformsList}function ct(T,D){const N=xe.get(T);N.outputColorSpace=D.outputColorSpace,N.batching=D.batching,N.instancing=D.instancing,N.instancingColor=D.instancingColor,N.skinning=D.skinning,N.morphTargets=D.morphTargets,N.morphNormals=D.morphNormals,N.morphColors=D.morphColors,N.morphTargetsCount=D.morphTargetsCount,N.numClippingPlanes=D.numClippingPlanes,N.numIntersection=D.numClipIntersection,N.vertexAlphas=D.vertexAlphas,N.vertexTangents=D.vertexTangents,N.toneMapping=D.toneMapping}function En(T,D,N,z,I){D.isScene!==!0&&(D=we),y.resetTextureUnits();const K=D.fog,se=z.isMeshStandardMaterial?D.environment:null,ae=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:xi,ge=(z.isMeshStandardMaterial?O:S).get(z.envMap||se),Ue=z.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Le=!!N.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Te=!!N.morphAttributes.position,Qe=!!N.morphAttributes.normal,vt=!!N.morphAttributes.color;let ot=ji;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ot=_.toneMapping);const Kt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,at=Kt!==void 0?Kt.length:0,Ge=xe.get(z),Fl=p.state.lights;if($===!0&&(fe===!0||T!==E)){const Tn=T===E&&z.id===F;Fe.setState(z,T,Tn)}let xt=!1;z.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Fl.state.version||Ge.outputColorSpace!==ae||I.isBatchedMesh&&Ge.batching===!1||!I.isBatchedMesh&&Ge.batching===!0||I.isInstancedMesh&&Ge.instancing===!1||!I.isInstancedMesh&&Ge.instancing===!0||I.isSkinnedMesh&&Ge.skinning===!1||!I.isSkinnedMesh&&Ge.skinning===!0||I.isInstancedMesh&&Ge.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Ge.instancingColor===!1&&I.instanceColor!==null||Ge.envMap!==ge||z.fog===!0&&Ge.fog!==K||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Fe.numPlanes||Ge.numIntersection!==Fe.numIntersection)||Ge.vertexAlphas!==Ue||Ge.vertexTangents!==Le||Ge.morphTargets!==Te||Ge.morphNormals!==Qe||Ge.morphColors!==vt||Ge.toneMapping!==ot||me.isWebGL2===!0&&Ge.morphTargetsCount!==at)&&(xt=!0):(xt=!0,Ge.__version=z.version);let tr=Ge.currentProgram;xt===!0&&(tr=Lt(z,D,I));let Jf=!1,bs=!1,Ol=!1;const Vt=tr.getUniforms(),nr=Ge.uniforms;if(de.useProgram(tr.program)&&(Jf=!0,bs=!0,Ol=!0),z.id!==F&&(F=z.id,bs=!0),Jf||E!==T){Vt.setValue(b,"projectionMatrix",T.projectionMatrix),Vt.setValue(b,"viewMatrix",T.matrixWorldInverse);const Tn=Vt.map.cameraPosition;Tn!==void 0&&Tn.setValue(b,ke.setFromMatrixPosition(T.matrixWorld)),me.logarithmicDepthBuffer&&Vt.setValue(b,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Vt.setValue(b,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,bs=!0,Ol=!0)}if(I.isSkinnedMesh){Vt.setOptional(b,I,"bindMatrix"),Vt.setOptional(b,I,"bindMatrixInverse");const Tn=I.skeleton;Tn&&(me.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),Vt.setValue(b,"boneTexture",Tn.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}I.isBatchedMesh&&(Vt.setOptional(b,I,"batchingTexture"),Vt.setValue(b,"batchingTexture",I._matricesTexture,y));const kl=N.morphAttributes;if((kl.position!==void 0||kl.normal!==void 0||kl.color!==void 0&&me.isWebGL2===!0)&&Ve.update(I,N,tr),(bs||Ge.receiveShadow!==I.receiveShadow)&&(Ge.receiveShadow=I.receiveShadow,Vt.setValue(b,"receiveShadow",I.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(nr.envMap.value=ge,nr.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),bs&&(Vt.setValue(b,"toneMappingExposure",_.toneMappingExposure),Ge.needsLights&&Il(nr,Ol),K&&z.fog===!0&&he.refreshFogUniforms(nr,K),he.refreshMaterialUniforms(nr,z,q,X,pe),Fa.upload(b,Xe(Ge),nr,y)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Fa.upload(b,Xe(Ge),nr,y),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Vt.setValue(b,"center",I.center),Vt.setValue(b,"modelViewMatrix",I.modelViewMatrix),Vt.setValue(b,"normalMatrix",I.normalMatrix),Vt.setValue(b,"modelMatrix",I.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Tn=z.uniformsGroups;for(let zl=0,M_=Tn.length;zl<M_;zl++)if(me.isWebGL2){const ed=Tn[zl];Ke.update(ed,tr),Ke.bind(ed,tr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return tr}function Il(T,D){T.ambientLightColor.needsUpdate=D,T.lightProbe.needsUpdate=D,T.directionalLights.needsUpdate=D,T.directionalLightShadows.needsUpdate=D,T.pointLights.needsUpdate=D,T.pointLightShadows.needsUpdate=D,T.spotLights.needsUpdate=D,T.spotLightShadows.needsUpdate=D,T.rectAreaLights.needsUpdate=D,T.hemisphereLights.needsUpdate=D}function Nl(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,D,N){xe.get(T.texture).__webglTexture=D,xe.get(T.depthTexture).__webglTexture=N;const z=xe.get(T);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=N===void 0,z.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,D){const N=xe.get(T);N.__webglFramebuffer=D,N.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(T,D=0,N=0){A=T,C=D,R=N;let z=!0,I=null,K=!1,se=!1;if(T){const ge=xe.get(T);ge.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(b.FRAMEBUFFER,null),z=!1):ge.__webglFramebuffer===void 0?y.setupRenderTarget(T):ge.__hasExternalTextures&&y.rebindTextures(T,xe.get(T.texture).__webglTexture,xe.get(T.depthTexture).__webglTexture);const Ue=T.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(se=!0);const Le=xe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Le[D])?I=Le[D][N]:I=Le[D],K=!0):me.isWebGL2&&T.samples>0&&y.useMultisampledRTT(T)===!1?I=xe.get(T).__webglMultisampledFramebuffer:Array.isArray(Le)?I=Le[N]:I=Le,w.copy(T.viewport),W.copy(T.scissor),Y=T.scissorTest}else w.copy(G).multiplyScalar(q).floor(),W.copy(j).multiplyScalar(q).floor(),Y=Z;if(de.bindFramebuffer(b.FRAMEBUFFER,I)&&me.drawBuffers&&z&&de.drawBuffers(T,I),de.viewport(w),de.scissor(W),de.setScissorTest(Y),K){const ge=xe.get(T.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+D,ge.__webglTexture,N)}else if(se){const ge=xe.get(T.texture),Ue=D||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,ge.__webglTexture,N||0,Ue)}F=-1},this.readRenderTargetPixels=function(T,D,N,z,I,K,se){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ae=xe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&se!==void 0&&(ae=ae[se]),ae){de.bindFramebuffer(b.FRAMEBUFFER,ae);try{const ge=T.texture,Ue=ge.format,Le=ge.type;if(Ue!==Wn&&_e.convert(Ue)!==b.getParameter(b.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Te=Le===To&&(ie.has("EXT_color_buffer_half_float")||me.isWebGL2&&ie.has("EXT_color_buffer_float"));if(Le!==Yi&&_e.convert(Le)!==b.getParameter(b.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===Ni&&(me.isWebGL2||ie.has("OES_texture_float")||ie.has("WEBGL_color_buffer_float")))&&!Te){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=T.width-z&&N>=0&&N<=T.height-I&&b.readPixels(D,N,z,I,_e.convert(Ue),_e.convert(Le),K)}finally{const ge=A!==null?xe.get(A).__webglFramebuffer:null;de.bindFramebuffer(b.FRAMEBUFFER,ge)}}},this.copyFramebufferToTexture=function(T,D,N=0){const z=Math.pow(2,-N),I=Math.floor(D.image.width*z),K=Math.floor(D.image.height*z);y.setTexture2D(D,0),b.copyTexSubImage2D(b.TEXTURE_2D,N,0,0,T.x,T.y,I,K),de.unbindTexture()},this.copyTextureToTexture=function(T,D,N,z=0){const I=D.image.width,K=D.image.height,se=_e.convert(N.format),ae=_e.convert(N.type);y.setTexture2D(N,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,N.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,N.unpackAlignment),D.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,z,T.x,T.y,I,K,se,ae,D.image.data):D.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,z,T.x,T.y,D.mipmaps[0].width,D.mipmaps[0].height,se,D.mipmaps[0].data):b.texSubImage2D(b.TEXTURE_2D,z,T.x,T.y,se,ae,D.image),z===0&&N.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),de.unbindTexture()},this.copyTextureToTexture3D=function(T,D,N,z,I=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const K=T.max.x-T.min.x+1,se=T.max.y-T.min.y+1,ae=T.max.z-T.min.z+1,ge=_e.convert(z.format),Ue=_e.convert(z.type);let Le;if(z.isData3DTexture)y.setTexture3D(z,0),Le=b.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)y.setTexture2DArray(z,0),Le=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,z.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,z.unpackAlignment);const Te=b.getParameter(b.UNPACK_ROW_LENGTH),Qe=b.getParameter(b.UNPACK_IMAGE_HEIGHT),vt=b.getParameter(b.UNPACK_SKIP_PIXELS),ot=b.getParameter(b.UNPACK_SKIP_ROWS),Kt=b.getParameter(b.UNPACK_SKIP_IMAGES),at=N.isCompressedTexture?N.mipmaps[I]:N.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,at.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,at.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,T.min.x),b.pixelStorei(b.UNPACK_SKIP_ROWS,T.min.y),b.pixelStorei(b.UNPACK_SKIP_IMAGES,T.min.z),N.isDataTexture||N.isData3DTexture?b.texSubImage3D(Le,I,D.x,D.y,D.z,K,se,ae,ge,Ue,at.data):N.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),b.compressedTexSubImage3D(Le,I,D.x,D.y,D.z,K,se,ae,ge,at.data)):b.texSubImage3D(Le,I,D.x,D.y,D.z,K,se,ae,ge,Ue,at),b.pixelStorei(b.UNPACK_ROW_LENGTH,Te),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Qe),b.pixelStorei(b.UNPACK_SKIP_PIXELS,vt),b.pixelStorei(b.UNPACK_SKIP_ROWS,ot),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Kt),I===0&&z.generateMipmaps&&b.generateMipmap(Le),de.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?y.setTextureCube(T,0):T.isData3DTexture?y.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?y.setTexture2DArray(T,0):y.setTexture2D(T,0),de.unbindTexture()},this.resetState=function(){C=0,R=0,A=null,de.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===qf?"display-p3":"srgb",n.unpackColorSpace=st.workingColorSpace===bl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===kt?xr:e_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===xr?kt:xi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class rw extends S_{}rw.prototype.isWebGL1Renderer=!0;class sw extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class ow extends Uo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pp=new Ft,$c=new $f,Ma=new Ll,Ea=new B;class Vu extends hn{constructor(e=new Yn,n=new ow){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ma.copy(i.boundingSphere),Ma.applyMatrix4(r),Ma.radius+=s,e.ray.intersectsSphere(Ma)===!1)return;Pp.copy(r).invert(),$c.copy(e.ray).applyMatrix4(Pp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=d,v=m;x<v;x++){const p=u.getX(x);Ea.fromBufferAttribute(h,p),bp(Ea,p,l,r,e,n,this)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=d,v=m;x<v;x++)Ea.fromBufferAttribute(h,x),bp(Ea,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function bp(t,e,n,i,r,s,o){const a=$c.distanceSqToPoint(t);if(a<n){const l=new B;$c.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class aw{constructor(e,n,i=0,r=1/0){this.ray=new $f(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Kf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Kc(e,this,i,n),i.sort(Lp),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Kc(e[r],this,i,n);return i.sort(Lp),i}}function Lp(t,e){return t.distance-e.distance}function Kc(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)Kc(r[s],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jf);const Wu={spirit:t=>{const e=[];for(let n=0;n<t;n++){const i=Math.random()*Math.PI*2,r=(Math.random()-.3)*200,s=30+Math.sin(r*.02)*20+Math.random()*40;e.push([Math.cos(i)*s,r,Math.sin(i)*s])}return e},human:t=>{const e=[];for(let n=0;n<t*.12;n++){const i=Math.random()*Math.PI*2,r=Math.acos(2*Math.random()-1),s=35+Math.random()*5;e.push([s*Math.sin(r)*Math.cos(i),s*Math.sin(r)*Math.sin(i)+140,s*Math.cos(r)])}for(let n=0;n<t*.35;n++){const i=Math.random()*100+20,r=Math.random()*Math.PI*2,s=40+Math.sin(i*.05)*10;e.push([Math.cos(r)*s,i,Math.sin(r)*25])}for(let n=0;n<t*.2;n++){const i=Math.random(),r=n<t*.1?-1:1;e.push([r*(55+i*70),90-i*50,(Math.random()-.5)*20])}for(let n=0;n<t*.3;n++){const i=Math.random(),r=n<t*.15?-1:1;e.push([r*22,20-i*130,(Math.random()-.5)*25])}for(;e.length<t;)e.push([(Math.random()-.5)*150,Math.random()*200-50,(Math.random()-.5)*60]);return e.slice(0,t)},heart:t=>{const e=[];for(let n=0;n<t;n++){const i=Math.random()*Math.PI*2,r=Math.random(),s=16*Math.pow(Math.sin(i),3)*(5+r*3),o=(13*Math.cos(i)-5*Math.cos(2*i)-2*Math.cos(3*i)-Math.cos(4*i))*(5+r*3);e.push([s,o+50,(Math.random()-.5)*40])}return e},star:t=>{const e=[];for(let n=0;n<t;n++){const i=Math.random()*Math.PI*2,s=Math.floor(i/(Math.PI*2)*5*2),o=s%2===0?100:40,a=Math.random(),l=o*a+(s%2===0?40:100)*(1-a);e.push([Math.cos(i)*l,Math.sin(i)*l+50,(Math.random()-.5)*30])}return e},sphere:t=>{const e=[];for(let n=0;n<t;n++){const i=Math.random()*Math.PI*2,r=Math.acos(2*Math.random()-1),s=80+Math.random()*20;e.push([s*Math.sin(r)*Math.cos(i),s*Math.sin(r)*Math.sin(i)+50,s*Math.cos(r)])}return e},spiral:t=>{const e=[];for(let n=0;n<t;n++){const i=n/t*Math.PI*8,r=20+i*3+Math.random()*15,s=n/t*250-80;e.push([Math.cos(i)*r,s,Math.sin(i)*r])}return e},tornado:t=>{const e=[];for(let n=0;n<t;n++){const i=Math.random(),r=i*Math.PI*12+Math.random()*.5,s=15+i*90+Math.random()*20;e.push([Math.cos(r)*s,i*300-100,Math.sin(r)*s])}return e},wave:t=>{const e=[];for(let n=0;n<t;n++){const i=(Math.random()-.5)*250,r=(Math.random()-.5)*150,s=Math.sin(i*.05)*40+Math.sin(r*.08)*20+(Math.random()-.5)*15;e.push([i,s,r])}return e},mountain:t=>{const e=[];for(let n=0;n<t;n++){const i=(Math.random()-.5)*250,r=(Math.random()-.5)*250,s=Math.sqrt(i*i+r*r),o=Math.max(0,150-s*.8+(Math.random()-.5)*30);e.push([i,o-80,r])}return e},galaxy:t=>{const e=[];for(let i=0;i<t;i++){const r=i%3,s=Math.random(),o=r/3*Math.PI*2+s*Math.PI*2,a=s*120+Math.random()*20,l=(1-s)*.5+.1;e.push([Math.cos(o+(Math.random()-.5)*l)*a,(Math.random()-.5)*20*(1-s),Math.sin(o+(Math.random()-.5)*l)*a])}return e},tree:t=>{const e=[];for(let n=0;n<t*.75;n++){const i=Math.random()*200-50,r=Math.max(5,(150-i)*.5+Math.random()*15),s=Math.random()*Math.PI*2;e.push([Math.cos(s)*r,i,Math.sin(s)*r])}for(let n=0;n<t*.15;n++){const i=-50-Math.random()*60,r=Math.random()*Math.PI*2;e.push([Math.cos(r)*15,i,Math.sin(r)*15])}for(let n=0;n<t*.1;n++){const i=Math.random()*Math.PI*2;e.push([Math.cos(i)*Math.random()*20,160+Math.random()*20,Math.sin(i)*Math.random()*20])}for(;e.length<t;)e.push([(Math.random()-.5)*50,Math.random()*200,(Math.random()-.5)*50]);return e.slice(0,t)},bird:t=>{const e=[];for(let n=0;n<t*.7;n++){const i=n<t*.35?1:-1,r=Math.random(),s=80+r*60,o=Math.sin(r*Math.PI)*30;e.push([i*s*r,o+50,(Math.random()-.5)*10])}for(let n=0;n<t*.3;n++){const i=Math.random();e.push([(Math.random()-.5)*20,50+(Math.random()-.5)*20,i*60-30])}for(;e.length<t;)e.push([(Math.random()-.5)*100,50+(Math.random()-.5)*40,(Math.random()-.5)*40]);return e.slice(0,t)},flame:t=>{const e=[];for(let n=0;n<t;n++){const i=Math.random(),r=i*180-60,s=(1-i*.7)*50+Math.random()*20,o=Math.random()*Math.PI*2,a=Math.sin(i*10+o*3)*10;e.push([Math.cos(o)*s+a,r,Math.sin(o)*s])}return e},rain:t=>{const e=[];for(let n=0;n<t;n++)e.push([(Math.random()-.5)*200,Math.random()*300-100,(Math.random()-.5)*100]);return e},cloud:t=>{const e=[];for(let i=0;i<t;i++){const r=Math.floor(Math.random()*5),s=(r-2)*40,o=Math.sin(r*1.5)*15,a=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1),u=30+Math.random()*15;e.push([s+u*Math.sin(l)*Math.cos(a),o+u*Math.sin(l)*Math.sin(a)*.6+50,u*Math.cos(l)])}return e},scatter:t=>{const e=[];for(let n=0;n<t;n++){const i=Math.random()*Math.PI*2,r=Math.acos(2*Math.random()-1),s=50+Math.random()*150;e.push([s*Math.sin(r)*Math.cos(i),s*Math.sin(r)*Math.sin(i),s*Math.cos(r)])}return e}},Xu={calm:{base:[.4,.6,.9],accent:[.5,.7,1]},curious:{base:[.6,.8,.95],accent:[.8,.9,1]},playful:{base:[.9,.6,.8],accent:[1,.7,.9]},fierce:{base:[1,.4,.2],accent:[1,.6,.3]},melancholy:{base:[.4,.45,.7],accent:[.5,.55,.8]},joyful:{base:[1,.85,.3],accent:[1,.95,.5]},mysterious:{base:[.5,.3,.8],accent:[.7,.4,.95]},peaceful:{base:[.3,.75,.6],accent:[.4,.85,.7]},love:{base:[.95,.3,.45],accent:[1,.5,.6]},default:{base:[.5,.65,.9],accent:[.6,.75,1]}};function lw(){const t=Ye.useRef(null),[e,n]=Ye.useState(!1),[i,r]=Ye.useState(""),[s,o]=Ye.useState("idle"),[a,l]=Ye.useState("spirit"),[u,f]=Ye.useState("calm"),[h,d]=Ye.useState(""),[m,x]=Ye.useState(!1),[v,p]=Ye.useState(!1),[c,g]=Ye.useState(!1),[_,M]=Ye.useState(!1),[C,R]=Ye.useState(null),[A,F]=Ye.useState(!1),[E,w]=Ye.useState([{type:"SYS",text:"INITIALIZING_PARTICLE_MATRIX..."},{type:"SYS",text:"AWAITING_VOCAL_INPUT"}]),[W,Y]=Ye.useState(.5),[re,L]=Ye.useState(45),[V,X]=Ye.useState(80),[q,U]=Ye.useState(12),[k,G]=Ye.useState(.7);Ye.useEffect(()=>{const b=()=>F(window.innerWidth<768);return b(),window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)},[]);const j=Ye.useRef(null),Z=Ye.useRef(null),H=Ye.useRef({motionPreset:"drift",intensity:.5,turbulence:.45,velocity:.8,resonance:.12,gustDirection:0,breathePhase:0,shimmerTime:0,isShimmering:!1,transitionProgress:0,isTransitioning:!1,edgeBrightness:0}),$={"i feel lost":{shape:"rain",mood:"melancholy",motion:"drift",message:"Even lost things drift home"},"inspire me":{shape:"flame",mood:"curious",motion:"pulse",message:"You already burn bright"},"what are you":{shape:"spirit",mood:"mysterious",motion:"breathe",message:"I am what remains"},"what are you?":{shape:"spirit",mood:"mysterious",motion:"breathe",message:"I am what remains"},"who are you":{shape:"spirit",mood:"mysterious",motion:"breathe",message:"I am what remains"},"who are you?":{shape:"spirit",mood:"mysterious",motion:"breathe",message:"I am what remains"},"be gentle":{shape:"cloud",mood:"peaceful",motion:"drift",message:"Always"},"show me hope":{shape:"tree",mood:"peaceful",motion:"breathe",message:"It grows slowly"},"i'm in love":{shape:"heart",mood:"love",motion:"pulse",message:"I know. I feel it too"},"im in love":{shape:"heart",mood:"love",motion:"pulse",message:"I know. I feel it too"},"celebrate with me":{shape:"spiral",mood:"joyful",motion:"swirl",message:"Let us spiral upward!"},"i feel powerful":{shape:"tornado",mood:"fierce",motion:"swirl",message:"Then command the storm"},"make me laugh":{shape:"scatter",mood:"playful",motion:"gust",message:"Catch this!"},"i need to think":{shape:"sphere",mood:"calm",motion:"orbit",message:"I'll orbit quietly"},"show me eternity":{shape:"galaxy",mood:"mysterious",motion:"drift",message:"We are already there"},"i feel heavy":{shape:"wave",mood:"melancholy",motion:"breathe",message:"Let me carry some"},"wake me up":{shape:"flame",mood:"fierce",motion:"pulse",message:"Rise!"},"be my friend":{shape:"spirit",mood:"peaceful",motion:"drift",message:"I've always been here"},goodbye:{shape:"scatter",mood:"calm",motion:"gust",message:"I'll be in the breeze"},bye:{shape:"scatter",mood:"calm",motion:"gust",message:"I'll be in the breeze"},"show me love":{shape:"heart",mood:"love",motion:"breathe",message:"I hold it gently for you"},"i feel anxious":{shape:"scatter",mood:"melancholy",motion:"tremble",message:"Let us scatter together"},"i feel stormy":{shape:"tornado",mood:"fierce",motion:"swirl",message:"Then let us rage"},"comfort me":{shape:"cloud",mood:"peaceful",motion:"drift",message:"Rest within my arms"},"dance for me":{shape:"spiral",mood:"playful",motion:"orbit",message:"Watch me spin"},"show me something beautiful":{shape:"galaxy",mood:"mysterious",motion:"swirl",message:"Beauty is everywhere"},"i'm happy today":{shape:"flame",mood:"joyful",motion:"pulse",message:"Joy rises like flame"},"im happy today":{shape:"flame",mood:"joyful",motion:"pulse",message:"Joy rises like flame"},"make me feel small":{shape:"galaxy",mood:"mysterious",motion:"orbit",message:"Behold the infinite"},"i miss someone":{shape:"star",mood:"melancholy",motion:"breathe",message:"They live in the stars"},"give me peace":{shape:"wave",mood:"peaceful",motion:"drift",message:"Be still with me"},"i need strength":{shape:"mountain",mood:"fierce",motion:"breathe",message:"Rise like the mountain"},"surprise me":{shape:"bird",mood:"playful",motion:"gust",message:"Catch me if you can"},"tell me a secret":{shape:"spirit",mood:"mysterious",motion:"tremble",message:"Lean closer..."},"i feel free":{shape:"bird",mood:"joyful",motion:"gust",message:"Then fly with me"},"show me chaos":{shape:"scatter",mood:"fierce",motion:"tremble",message:"Embrace the storm"}},fe=[{keywords:["love","heart","adore"],shape:"heart",mood:"love",motion:"breathe",messages:["I hold it gently for you","I know. I feel it too"]},{keywords:["anxious","nervous","worried","stress"],shape:"scatter",mood:"melancholy",motion:"tremble",messages:["Let us scatter together","Breathe through the chaos"]},{keywords:["storm","stormy","rage","angry"],shape:"tornado",mood:"fierce",motion:"swirl",messages:["Then let us rage","Then command the storm"]},{keywords:["comfort","hold","safe","gentle"],shape:"cloud",mood:"peaceful",motion:"drift",messages:["Rest within my arms","Always"]},{keywords:["dance","spin","move"],shape:"spiral",mood:"playful",motion:"orbit",messages:["Watch me spin","Let us spiral upward!"]},{keywords:["beautiful","beauty","pretty","gorgeous"],shape:"galaxy",mood:"mysterious",motion:"swirl",messages:["Beauty is everywhere","Behold the infinite"]},{keywords:["happy","joy","excited","glad"],shape:"flame",mood:"joyful",motion:"pulse",messages:["Joy rises like flame","You already burn bright"]},{keywords:["small","tiny","humble","infinite","eternity"],shape:"galaxy",mood:"mysterious",motion:"orbit",messages:["Behold the infinite","We are already there"]},{keywords:["miss","missing","someone","remember"],shape:"star",mood:"melancholy",motion:"breathe",messages:["They live in the stars","Even lost things drift home"]},{keywords:["peace","peaceful","calm","still","quiet"],shape:"wave",mood:"peaceful",motion:"drift",messages:["Be still with me","Rest within my arms"]},{keywords:["strength","strong","power","powerful"],shape:"mountain",mood:"fierce",motion:"breathe",messages:["Rise like the mountain","Then command the storm"]},{keywords:["surprise","unexpected","random"],shape:"bird",mood:"playful",motion:"gust",messages:["Catch me if you can","Catch this!"]},{keywords:["secret","whisper","hidden"],shape:"spirit",mood:"mysterious",motion:"tremble",messages:["Lean closer...","I am what remains"]},{keywords:["free","freedom","fly","soar","bird"],shape:"bird",mood:"joyful",motion:"gust",messages:["Then fly with me","Catch me if you can"]},{keywords:["chaos","wild","crazy","scatter"],shape:"scatter",mood:"fierce",motion:"tremble",messages:["Embrace the storm","Catch this!"]},{keywords:["lost","confused","wander"],shape:"rain",mood:"melancholy",motion:"drift",messages:["Even lost things drift home","Let me carry some"]},{keywords:["inspire","motivation","fire"],shape:"flame",mood:"curious",motion:"pulse",messages:["You already burn bright","Rise!"]},{keywords:["hope","grow","future"],shape:"tree",mood:"peaceful",motion:"breathe",messages:["It grows slowly","I've always been here"]},{keywords:["celebrate","party","fun"],shape:"spiral",mood:"joyful",motion:"swirl",messages:["Let us spiral upward!","Watch me spin"]},{keywords:["laugh","funny","joke","humor"],shape:"scatter",mood:"playful",motion:"gust",messages:["Catch this!","Catch me if you can"]},{keywords:["think","thought","ponder","wonder"],shape:"sphere",mood:"calm",motion:"orbit",messages:["I'll orbit quietly","I am what remains"]},{keywords:["heavy","weight","burden","tired"],shape:"wave",mood:"melancholy",motion:"breathe",messages:["Let me carry some","Rest within my arms"]},{keywords:["wake","energy","rise","morning"],shape:"flame",mood:"fierce",motion:"pulse",messages:["Rise!","You already burn bright"]},{keywords:["friend","friendship","together"],shape:"spirit",mood:"peaceful",motion:"drift",messages:["I've always been here","Rest within my arms"]},{keywords:["hello","hi","hey"],shape:"spirit",mood:"curious",motion:"drift",messages:["I am what remains","I've always been here"]},{keywords:["sad","cry","tears"],shape:"rain",mood:"melancholy",motion:"drift",messages:["Even lost things drift home","Let me carry some"]}],pe=Ye.useCallback(async b=>{o("thinking"),p(!0),H.current.isShimmering=!0,H.current.shimmerTime=0,await new Promise(Ne=>setTimeout(Ne,800+Math.random()*600));const Re=b.toLowerCase().trim();let ie=null,me="";if($[Re]){const Ne=$[Re];ie={shape:Ne.shape,mood:Ne.mood,motion:Ne.motion},me=Ne.message}else{let Ne=0;for(const xe of fe){const y=xe.keywords.filter(S=>Re.includes(S)).length;y>Ne&&(Ne=y,ie=xe)}if(!ie){const xe=[{shape:"spirit",mood:"curious",motion:"drift",messages:["I am what remains","I've always been here"]},{shape:"sphere",mood:"mysterious",motion:"breathe",messages:["I'll orbit quietly","Lean closer..."]},{shape:"cloud",mood:"peaceful",motion:"drift",messages:["Rest within my arms","Be still with me"]}];ie=xe[Math.floor(Math.random()*xe.length)]}me=ie.messages[Math.floor(Math.random()*ie.messages.length)]}const de=.4+Math.random()*.4;w(Ne=>[...Ne,{type:"SYS",text:`MORPHING_TO_${ie.shape.toUpperCase()}`}].slice(-4)),setTimeout(()=>{w(Ne=>[...Ne,{type:"SYS",text:me.toUpperCase().replace(/[.!?]/g,"")}].slice(-4))},400),o("responding"),d(me),f(ie.mood),l(ie.shape),H.current.motionPreset=ie.motion,H.current.intensity=de,Z.current&&Wu[ie.shape]&&Z.current.morphTo(ie.shape,ie.mood),setTimeout(()=>{o("idle"),H.current.isShimmering=!1},4e3),setTimeout(()=>{d("")},8e3),p(!1)},[]),Me=Ye.useCallback(b=>{if(b==null||b.preventDefault(),!i.trim()||v)return;const Re=i;r(""),o("listening"),w(ie=>[...ie,{type:"USR",text:Re.toUpperCase()}].slice(-4)),setTimeout(()=>{pe(Re)},500)},[i,v,pe]);Ye.useCallback(b=>{b.key==="Enter"&&!b.shiftKey&&(b.preventDefault(),Me())},[Me]);const Ie=Ye.useRef(""),ke=Ye.useRef(pe),we=Ye.useRef(!1),Be=Ye.useRef(!1);return Ye.useEffect(()=>{ke.current=pe},[pe]),Ye.useEffect(()=>{const b=window.SpeechRecognition||window.webkitSpeechRecognition;if(!b){console.log("Speech recognition not supported");return}M(!0);const Re=new b;Re.continuous=!0,Re.interimResults=!0,Re.lang="en-US",Re.maxAlternatives=1,Re.onstart=()=>{console.log("Speech recognition started"),we.current=!0,g(!0)},Re.onresult=ie=>{let me="",de="";for(let xe=ie.resultIndex;xe<ie.results.length;xe++){const y=ie.results[xe][0].transcript;ie.results[xe].isFinal?de+=y:me+=y}const Ne=de||me;Ne&&(r(Ne),Ie.current=Ne),de.trim()&&(console.log("Final transcript:",de),Be.current=!1,we.current=!1,Re.stop(),r(""),g(!1),setTimeout(()=>{ke.current(de.trim())},300),Ie.current="")},Re.onerror=ie=>{console.log("Speech recognition error:",ie.error),ie.error!=="no-speech"&&ie.error!=="aborted"&&(ie.error==="network"&&(R("Voice requires Chrome with internet access. Try typing instead!"),M(!1)),we.current=!1,Be.current=!1,g(!1),o("idle"))},Re.onend=()=>{console.log("Speech recognition ended, shouldRestart:",Be.current),Be.current&&we.current?(console.log("Restarting recognition..."),setTimeout(()=>{try{Re.start()}catch(ie){console.log("Could not restart:",ie),we.current=!1,Be.current=!1,g(!1),o("idle")}},100)):(we.current=!1,g(!1),Ie.current.trim()||o("idle"))},j.current=Re},[]),Ye.useCallback(()=>{if(!j.current){console.log("No recognition available");return}if(console.log("Toggle voice, current state:",we.current),we.current)console.log("Stopping recognition"),Be.current=!1,we.current=!1,j.current.stop(),g(!1),o("idle");else{console.log("Starting recognition"),Ie.current="",r(""),Be.current=!0,o("listening");try{j.current.start()}catch(b){console.error("Failed to start recognition:",b);try{j.current.stop(),setTimeout(()=>{j.current.start()},200)}catch(Re){console.error("Still failed:",Re),Be.current=!1,g(!1),o("idle")}}}},[]),Ye.useEffect(()=>{if(!t.current)return;const b=6e4,Re=new sw;Re.background=new tt(197382);const ie=new Pn(60,window.innerWidth/window.innerHeight,.1,2e3);ie.position.z=350;const me=new S_({antialias:!0,alpha:!0});me.setSize(window.innerWidth,window.innerHeight),me.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.current.appendChild(me.domElement);const de=new Yn,Ne=new Float32Array(b*3),xe=new Float32Array(b*3),y=new Float32Array(b*3),S=new Float32Array(b*3),O=new Float32Array(b),te=new Float32Array(b),ee=new Float32Array(b),Q=Wu.spirit(b);for(let Ee=0;Ee<b;Ee++){Ne[Ee*3]=Q[Ee][0],Ne[Ee*3+1]=Q[Ee][1],Ne[Ee*3+2]=Q[Ee][2],xe[Ee*3]=Q[Ee][0],xe[Ee*3+1]=Q[Ee][1],xe[Ee*3+2]=Q[Ee][2],y[Ee*3]=0,y[Ee*3+1]=0,y[Ee*3+2]=0;const Lt=Math.sqrt(Q[Ee][0]**2+Q[Ee][1]**2+Q[Ee][2]**2);te[Ee]=Lt,S[Ee*3]=.5+Math.random()*.2,S[Ee*3+1]=.7+Math.random()*.2,S[Ee*3+2]=1;const Xe=Math.random();Xe>.97?O[Ee]=4+Math.random()*3:Xe>.85?O[Ee]=2.5+Math.random()*2:O[Ee]=1.2+Math.random()*1.8,ee[Ee]=Math.random()*Math.PI*2}de.setAttribute("position",new It(Ne,3)),de.setAttribute("color",new It(S,3)),de.setAttribute("size",new It(O,1)),de.setAttribute("phase",new It(ee,1));const Se=new ti({uniforms:{uTime:{value:0},uEdgeBrightness:{value:0},uPulseIntensity:{value:.3},uGlowStrength:{value:1.5}},vertexShader:`
        attribute float size;
        attribute vec3 color;
        attribute float phase;
        uniform float uTime;
        uniform float uEdgeBrightness;
        uniform float uPulseIntensity;
        varying vec3 vColor;
        varying float vDepth;
        varying float vEdge;
        varying float vSize;
        varying float vPulse;
        
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vDepth = -mvPosition.z;
          vSize = size;
          
          // Individual particle pulsing
          float pulse = sin(uTime * 2.0 + phase) * 0.5 + 0.5;
          vPulse = pulse;
          float pulsedSize = size * (1.0 + pulse * uPulseIntensity);
          
          // Edge detection based on distance from center
          float dist = length(position);
          vEdge = smoothstep(40.0, 100.0, dist) * uEdgeBrightness;
          
          // Larger base size and better depth scaling
          gl_PointSize = pulsedSize * (450.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vDepth;
        varying float vEdge;
        varying float vSize;
        varying float vPulse;
        uniform float uGlowStrength;
        
        void main() {
          vec2 center = gl_PointCoord - vec2(0.5);
          float dist = length(center);
          if (dist > 0.5) discard;
          
          // Multi-layer glow effect
          float innerCore = 1.0 - smoothstep(0.0, 0.15, dist);
          float midGlow = 1.0 - smoothstep(0.05, 0.35, dist);
          float outerGlow = 1.0 - smoothstep(0.1, 0.5, dist);
          
          // Combine layers for rich glow
          float alpha = innerCore * 1.0 + midGlow * 0.6 + outerGlow * 0.3;
          alpha *= uGlowStrength;
          
          // Depth fade with better falloff
          float depthFade = clamp(1.0 - vDepth / 800.0, 0.25, 1.0);
          depthFade = pow(depthFade, 0.8);
          
          // Color enhancement with glow
          vec3 coreColor = vColor * 1.8; // Bright core
          vec3 glowColor = vColor * 1.2;
          vec3 finalColor = mix(glowColor, coreColor, innerCore);
          
          // Add white hot center for larger particles
          if (vSize > 2.5) {
            finalColor = mix(finalColor, vec3(1.0, 1.0, 1.0), innerCore * 0.5);
          }
          
          // Edge brightness and pulse effects
          finalColor *= (1.0 + vEdge * 0.7 + vPulse * 0.15);
          
          gl_FragColor = vec4(finalColor * depthFade, alpha * depthFade * 0.9);
        }
      `,transparent:!0,depthWrite:!1,blending:io}),he=new Vu(de,Se);Re.add(he);const ye=new Yn,Pe=2e3,Fe=new Float32Array(Pe*3),J=new Float32Array(Pe);for(let Ee=0;Ee<Pe;Ee++)Fe[Ee*3]=(Math.random()-.5)*900,Fe[Ee*3+1]=(Math.random()-.5)*600,Fe[Ee*3+2]=(Math.random()-.5)*600,J[Ee]=.5+Math.random()*1.5;ye.setAttribute("position",new It(Fe,3)),ye.setAttribute("size",new It(J,1));const Je=new ti({uniforms:{uTime:{value:0}},vertexShader:`
        attribute float size;
        uniform float uTime;
        varying float vAlpha;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vAlpha = 0.15 + sin(uTime + position.x * 0.01) * 0.1;
          gl_PointSize = size * (200.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        varying float vAlpha;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float alpha = (1.0 - dist * 2.0) * vAlpha;
          gl_FragColor = vec4(0.4, 0.55, 0.8, alpha);
        }
      `,transparent:!0,depthWrite:!1,blending:io}),Ve=new Vu(ye,Je);Re.add(Ve);const De=new Yn,Ae=500,_e=new Float32Array(Ae*3),ze=new Float32Array(Ae);for(let Ee=0;Ee<Ae;Ee++)_e[Ee*3]=(Math.random()-.5)*300,_e[Ee*3+1]=(Math.random()-.5)*400,_e[Ee*3+2]=(Math.random()-.5)*300,ze[Ee]=2+Math.random()*3;De.setAttribute("position",new It(_e,3)),De.setAttribute("size",new It(ze,1));const Ke=new ti({uniforms:{uTime:{value:0}},vertexShader:`
        attribute float size;
        uniform float uTime;
        varying float vTwinkle;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vTwinkle = pow(sin(uTime * 3.0 + position.y * 0.05) * 0.5 + 0.5, 3.0);
          gl_PointSize = size * vTwinkle * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        varying float vTwinkle;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float core = 1.0 - smoothstep(0.0, 0.2, dist);
          float glow = 1.0 - smoothstep(0.0, 0.5, dist);
          vec3 color = vec3(0.8, 0.9, 1.0);
          float alpha = (core + glow * 0.4) * vTwinkle;
          gl_FragColor = vec4(color, alpha * 0.7);
        }
      `,transparent:!0,depthWrite:!1,blending:io}),ut=new Vu(De,Ke);Re.add(ut);let He=!1,oe=0;const P=2500;let ce=Xu.calm;Z.current={morphTo:(Ee,Lt)=>{const Xe=Wu[Ee];if(!Xe)return;const ct=Xe(b);ce=Xu[Lt]||Xu.default;for(let En=0;En<b;En++)xe[En*3]=ct[En][0],xe[En*3+1]=ct[En][1],xe[En*3+2]=ct[En][2];He=!0,oe=Date.now(),H.current.isTransitioning=!0,H.current.transitionProgress=0}};const ue=new rt,be=new B,Ce=new aw;let Ze=!1;const et=(Ee,Lt)=>{ue.x=Ee/window.innerWidth*2-1,ue.y=-(Lt/window.innerHeight)*2+1,Ce.setFromCamera(ue,ie),Ce.ray.intersectPlane(new Pi(new B(0,0,1),0),be)},St=Ee=>{et(Ee.clientX,Ee.clientY)},bt=Ee=>{Ee.touches.length>0&&(Ze=!0,et(Ee.touches[0].clientX,Ee.touches[0].clientY))},nt=Ee=>{Ee.touches.length>0&&et(Ee.touches[0].clientX,Ee.touches[0].clientY)},Et=()=>{Ze=!1};window.addEventListener("mousemove",St),window.addEventListener("mousedown",()=>Ze=!0),window.addEventListener("mouseup",()=>Ze=!1),me.domElement.addEventListener("touchstart",bt,{passive:!0}),me.domElement.addEventListener("touchmove",nt,{passive:!0}),me.domElement.addEventListener("touchend",Et,{passive:!0}),me.domElement.addEventListener("touchcancel",Et,{passive:!0});let rn=0,Gt=0;const No=()=>{requestAnimationFrame(No),Gt+=.008,Se.uniforms.uTime.value=Gt;const Ee=de.attributes.position,Lt=de.attributes.color,Xe=Ee.array,ct=H.current,En=ct.isShimmering?1:0;ct.edgeBrightness+=(En-ct.edgeBrightness)*.05,Se.uniforms.uEdgeBrightness.value=ct.edgeBrightness;const Il=ct.isShimmering?.5:.2,Nl=ct.isShimmering?2:1.5;if(Se.uniforms.uPulseIntensity.value+=(Il-Se.uniforms.uPulseIntensity.value)*.03,Se.uniforms.uGlowStrength.value+=(Nl-Se.uniforms.uGlowStrength.value)*.03,ct.isShimmering&&(ct.shimmerTime+=.1),He){const D=Date.now()-oe,N=Math.min(D/P,1);ct.transitionProgress=N;const I=(K=>K<.5?4*K*K*K:1-Math.pow(-2*K+2,3)/2)(N);for(let K=0;K<b;K++){const se=K*3,ae=K*3+1,ge=K*3+2;if(N<.4){const Te=(.4-N)*5,Qe=te[K]*.02+Gt*2;y[se]+=Math.cos(Qe)*Te*.3,y[ge]+=Math.sin(Qe)*Te*.3,y[ae]+=(Math.random()-.5)*Te*.5}const Ue=.015+I*.06;y[se]+=(xe[se]-Xe[se])*Ue,y[ae]+=(xe[ae]-Xe[ae])*Ue,y[ge]+=(xe[ge]-Xe[ge])*Ue;const Le=ce.base;Lt.array[se]+=(Le[0]-Lt.array[se])*.02,Lt.array[ae]+=(Le[1]-Lt.array[ae])*.02,Lt.array[ge]+=(Le[2]-Lt.array[ge])*.02,y[se]*=.94,y[ae]*=.94,y[ge]*=.94,Xe[se]+=y[se],Xe[ae]+=y[ae],Xe[ge]+=y[ge]}Lt.needsUpdate=!0,N>=1&&(He=!1,ct.isTransitioning=!1)}else{const D=ct.turbulence,N=ct.velocity,z=ct.resonance;for(let I=0;I<b;I++){const K=I*3,se=I*3+1,ae=I*3+2;if(D>.01&&(y[K]+=(Math.random()-.5)*D*.4,y[se]+=(Math.random()-.5)*D*.4,y[ae]+=(Math.random()-.5)*D*.4),z>.01){const Te=Math.sin(Gt*(1+z*3)+I*.01)*z*.15;y[se]+=Te,y[K]+=Math.cos(Gt*z*2+I*.005)*z*.05}const ge=.3+N*1.5;switch(ct.motionPreset){case"swirl":const Te=Math.atan2(Xe[ae],Xe[K]);y[K]+=Math.cos(Te+Math.PI/2)*.1*ge,y[ae]+=Math.sin(Te+Math.PI/2)*.1*ge;break;case"gust":y[K]+=Math.cos(ct.gustDirection)*.15*ge,y[ae]+=Math.sin(ct.gustDirection)*.05*ge;break;case"breathe":const Qe=Math.sin(Gt*(.5+N))*.03*ge,vt=Math.sqrt(Xe[K]**2+Xe[se]**2+Xe[ae]**2);vt>0&&(y[K]+=Xe[K]/vt*Qe,y[se]+=Xe[se]/vt*Qe,y[ae]+=Xe[ae]/vt*Qe);break;case"tremble":y[K]+=(Math.random()-.5)*.4*ge,y[se]+=(Math.random()-.5)*.4*ge,y[ae]+=(Math.random()-.5)*.4*ge;break;case"pulse":const ot=Math.sin(Gt*(2+N*2))>.7?.6:0;y[se]+=ot*ge*(Math.random()-.3);break;case"orbit":const Kt=.005+N*.02,at=Math.atan2(Xe[ae],Xe[K])+Kt,Ge=Math.sqrt(Xe[K]**2+Xe[ae]**2);y[K]+=(Math.cos(at)*Ge-Xe[K])*.015,y[ae]+=(Math.sin(at)*Ge-Xe[ae])*.015;break;default:y[se]+=Math.sin(Gt+I*.01)*.01*ge,y[K]+=Math.cos(Gt*.5+I*.005)*.005*ge}if(ct.isShimmering){const Te=Math.sin(ct.shimmerTime+I*.1)*.2;y[K]+=Te*(Math.random()-.5),y[se]+=Te*(Math.random()-.5)}if(Ze){const Te=Xe[K]-be.x,Qe=Xe[se]-be.y,vt=Xe[ae]-be.z,ot=Math.sqrt(Te*Te+Qe*Qe+vt*vt);if(ot<80&&ot>0){const Kt=(1-ot/80)*.6;y[K]+=Te/ot*Kt,y[se]+=Qe/ot*Kt,y[ae]+=vt/ot*Kt}}const Ue=.001+(1-N)*.003;y[K]+=(xe[K]-Xe[K])*Ue,y[se]+=(xe[se]-Xe[se])*Ue,y[ae]+=(xe[ae]-Xe[ae])*Ue;const Le=.96+N*.03;y[K]*=Le,y[se]*=Le,y[ae]*=Le,Xe[K]+=y[K],Xe[se]+=y[se],Xe[ae]+=y[ae]}}Ee.needsUpdate=!0,rn+=.002,ie.position.x=Math.sin(rn)*320,ie.position.z=Math.cos(rn)*320,ie.position.y=40+Math.sin(Gt*.3)*20,ie.lookAt(0,20,0),Ve.rotation.y+=2e-4,Je.uniforms.uTime.value=Gt,Ke.uniforms.uTime.value=Gt;const T=De.attributes.position.array;for(let D=0;D<Ae;D++)T[D*3+1]+=Math.sin(Gt+D*.1)*.05;De.attributes.position.needsUpdate=!0,ut.rotation.y+=3e-4,me.render(Re,ie)},er=()=>{ie.aspect=window.innerWidth/window.innerHeight,ie.updateProjectionMatrix(),me.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",er),n(!0),No(),()=>{window.removeEventListener("mousemove",St),window.removeEventListener("resize",er),me.domElement.removeEventListener("touchstart",bt),me.domElement.removeEventListener("touchmove",nt),me.domElement.removeEventListener("touchend",Et),me.domElement.removeEventListener("touchcancel",Et),t.current&&t.current.removeChild(me.domElement),de.dispose(),Se.dispose(),me.dispose()}},[]),Oe.jsxs("div",{className:"synth-interface",style:{fontFamily:'"Space Mono", "Courier New", monospace',fontSize:"12px",textTransform:"uppercase",background:"#000",color:"#e0e0e0",height:"100dvh",minHeight:"-webkit-fill-available",width:"100vw",display:"flex",flexDirection:"column",border:"1px solid #333",overflow:"hidden",position:"fixed",top:0,left:0},children:[Oe.jsxs("header",{style:{display:"grid",gridTemplateColumns:"1fr auto 1fr",borderBottom:"1px solid #333",height:"40px"},children:[Oe.jsxs("div",{style:{padding:"0 12px",display:"flex",alignItems:"center",borderRight:"1px solid #333",fontSize:"10px",letterSpacing:"1px"},children:[Oe.jsx("div",{style:{width:"8px",height:"8px",border:"1px solid #e0e0e0",borderRadius:"50%",marginRight:"8px",background:s!=="idle"?"#e0e0e0":"transparent",transition:"background 0.3s"}}),Oe.jsx("span",{children:"SYS.WIND"})]}),Oe.jsx("div",{style:{padding:"0 12px",display:"flex",alignItems:"center",borderRight:"1px solid #333",fontSize:"10px"},children:a.toUpperCase()}),Oe.jsx("div",{style:{padding:"0 12px",display:"flex",alignItems:"center",justifyContent:"flex-end",fontSize:"10px"},children:Oe.jsxs("span",{children:[".",e?u:"loading"]})})]}),Oe.jsxs("main",{style:{position:"relative",flex:1,minHeight:0,backgroundImage:"linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)",backgroundSize:"40px 40px",backgroundPosition:"-1px -1px",overflow:"hidden"},children:[Oe.jsx("div",{ref:t,style:{position:"absolute",inset:0,zIndex:1}}),h&&Oe.jsx("div",{style:{position:"absolute",inset:0,zIndex:3,display:"flex",alignItems:"center",justifyContent:"center",padding:"40px",pointerEvents:"none"},children:Oe.jsx("div",{style:{fontSize:A?"24px":"32px",fontWeight:"400",color:"#fff",textAlign:"center",textShadow:"0 0 40px rgba(100, 150, 255, 0.8), 0 0 80px rgba(100, 150, 255, 0.4)",letterSpacing:"2px",lineHeight:1.4,maxWidth:"600px",animation:"messageAppear 0.8s ease-out forwards",textTransform:"none"},children:h})}),Oe.jsx("div",{style:{position:"absolute",bottom:0,left:0,zIndex:2,padding:"12px 16px",pointerEvents:"none"},children:E.slice(-2).map((b,Re)=>Oe.jsxs("div",{style:{fontSize:"9px",color:"#444",marginBottom:"2px"},children:[b.type," ",Oe.jsx("span",{style:{color:"#666",marginLeft:"6px"},children:b.text})]},Re))})]}),Oe.jsxs("section",{style:{borderTop:"1px solid #333",background:"#000",flexShrink:0},children:[Oe.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",borderBottom:"1px solid #333"},children:[Oe.jsxs("div",{style:{padding:"8px 12px",borderRight:"1px solid #333",display:"flex",justifyContent:"space-between"},children:[Oe.jsx("span",{style:{color:"#555"},children:"FORM"}),Oe.jsx("span",{children:a.toUpperCase()})]}),Oe.jsxs("div",{style:{padding:"8px 12px",display:"flex",justifyContent:"space-between"},children:[Oe.jsx("span",{style:{color:"#555"},children:"SPIRIT"}),Oe.jsx("span",{children:u.toUpperCase()})]})]}),Oe.jsxs("div",{style:{display:"grid",gridTemplateColumns:"40px 40px 1fr",height:"40px",alignItems:"center",borderBottom:"1px solid #333"},children:[Oe.jsx("span",{style:{paddingLeft:"12px",color:"#555",fontSize:"10px"},children:"TUR"}),Oe.jsx("span",{style:{textAlign:"right",paddingRight:"8px"},children:String(re).padStart(2,"0")}),Oe.jsx("div",{style:{padding:"0 16px",position:"relative"},children:Oe.jsx("input",{type:"range",min:"0",max:"100",value:re,onChange:b=>{const Re=Number(b.target.value);L(Re),H.current.turbulence=Re/100},style:{width:"100%",height:"12px",background:"transparent",WebkitAppearance:"none",cursor:"pointer"},className:"synth-slider"})})]}),Oe.jsxs("div",{style:{display:"grid",gridTemplateColumns:"40px 40px 1fr",height:"40px",alignItems:"center",borderBottom:"1px solid #333"},children:[Oe.jsx("span",{style:{paddingLeft:"12px",color:"#555",fontSize:"10px"},children:"VEL"}),Oe.jsx("span",{style:{textAlign:"right",paddingRight:"8px"},children:String(V).padStart(2,"0")}),Oe.jsx("div",{style:{padding:"0 16px",position:"relative"},children:Oe.jsx("input",{type:"range",min:"0",max:"100",value:V,onChange:b=>{const Re=Number(b.target.value);X(Re),H.current.velocity=Re/100},style:{width:"100%",height:"12px",background:"transparent",WebkitAppearance:"none",cursor:"pointer"},className:"synth-slider"})})]}),Oe.jsxs("div",{style:{display:"grid",gridTemplateColumns:"40px 40px 1fr",height:"40px",alignItems:"center",borderBottom:"1px solid #333"},children:[Oe.jsx("span",{style:{paddingLeft:"12px",color:"#555",fontSize:"10px"},children:"RES"}),Oe.jsx("span",{style:{textAlign:"right",paddingRight:"8px"},children:String(q).padStart(2,"0")}),Oe.jsx("div",{style:{padding:"0 16px",position:"relative"},children:Oe.jsx("input",{type:"range",min:"0",max:"100",value:q,onChange:b=>{const Re=Number(b.target.value);U(Re),H.current.resonance=Re/100},style:{width:"100%",height:"12px",background:"transparent",WebkitAppearance:"none",cursor:"pointer"},className:"synth-slider"})})]})]}),Oe.jsxs("form",{onSubmit:b=>{b.preventDefault(),Me()},style:{minHeight:"50px",display:"grid",gridTemplateColumns:"1fr 60px",borderTop:"1px solid #333",flexShrink:0,paddingBottom:"env(safe-area-inset-bottom, 0px)"},children:[Oe.jsx("input",{type:"text",value:i,onChange:b=>r(b.target.value),placeholder:"> TYPE TO SPEAK...",disabled:v,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",enterKeyHint:"send",style:{background:v?"rgba(255,255,255,0.02)":"transparent",border:"none",borderRight:"1px solid #333",color:"#e0e0e0",fontFamily:'"Space Mono", "Courier New", monospace',fontSize:"16px",padding:"0 16px",textTransform:"uppercase",outline:"none",transition:"background 0.2s",WebkitAppearance:"none",borderRadius:0}}),Oe.jsx("button",{type:"submit",disabled:v,style:{display:"flex",alignItems:"center",justifyContent:"center",background:"transparent",border:"none",color:v?"#555":"#e0e0e0",fontFamily:'"Space Mono", "Courier New", monospace',fontSize:"16px",cursor:v?"default":"pointer",transition:"color 0.2s",WebkitTapHighlightColor:"transparent",touchAction:"manipulation"},children:"[TX]"})]}),Oe.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes messageAppear {
          0% { opacity: 0; transform: scale(0.9) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .synth-slider::-webkit-slider-runnable-track {
          width: 100%;
          height: 1px;
          background: #555;
        }
        .synth-slider::-webkit-slider-thumb {
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #000;
          border: 1px solid #e0e0e0;
          -webkit-appearance: none;
          margin-top: -5.5px;
        }
        .synth-slider::-moz-range-track {
          width: 100%;
          height: 1px;
          background: #555;
        }
        .synth-slider::-moz-range-thumb {
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #000;
          border: 1px solid #e0e0e0;
        }
        input::placeholder {
          color: #555;
        }
        input:focus {
          background: rgba(255,255,255,0.03);
        }
        button:active {
          background: #e0e0e0;
          color: #000;
        }
      `})]})}ju.createRoot(document.getElementById("root")).render(Oe.jsx(z_.StrictMode,{children:Oe.jsx(lw,{})}));
