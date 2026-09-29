try{let e="u">typeof window?window:"u">typeof global?global:"u">typeof globalThis?globalThis:"u">typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="1293eb72-fb6d-4600-8d46-620fbb8665fd",e._sentryDebugIdIdentifier="sentry-dbid-1293eb72-fb6d-4600-8d46-620fbb8665fd")}catch(e){}"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4361],{34361:(e,t,r)=>{r.d(t,{V:()=>L,r:()=>j});var s=r(73321),n=r(12115);function i(e,t,r){return Math.max(t,Math.min(e,r))}function o(e,t){return"rtl"===t?(1-e)*100:(-1+e)*100}function a(e,t,r){if("string"==typeof t)void 0!==r&&(e.style[t]=r);else for(let r in t)if(t.hasOwnProperty(r)){let s=t[r];void 0!==s&&(e.style[r]=s)}}function l(e,t){e.classList.add(t)}function c(e,t){e.classList.remove(t)}function u(e){e&&e.parentNode&&e.parentNode.removeChild(e)}var p={minimum:.08,maximum:1,template:`<div class="bar"><div class="peg"></div></div>
             <div class="spinner"><div class="spinner-icon"></div></div>
             <div class="indeterminate"><div class="inc"></div><div class="dec"></div></div>`,easing:"linear",positionUsing:"",speed:200,trickle:!0,trickleSpeed:200,showSpinner:!0,indeterminate:!1,indeterminateSelector:".indeterminate",barSelector:".bar",spinnerSelector:".spinner",parent:"body",direction:"ltr"},d=class{static settings=p;static status=null;static pending=[];static isPaused=!1;static reset(){return this.status=null,this.isPaused=!1,this.pending=[],this.settings=p,this}static configure(e){return Object.assign(this.settings,e),this}static isStarted(){return"number"==typeof this.status}static set(e){if(this.isPaused)return this;let t=this.isStarted();e=i(e,this.settings.minimum,this.settings.maximum),this.status=e===this.settings.maximum?null:e;let r=this.render(!t),s=this.settings.speed,n=this.settings.easing;return r.forEach(e=>e.offsetWidth),this.queue(t=>{r.forEach(t=>{this.settings.indeterminate||a(t.querySelector(this.settings.barSelector),this.barPositionCSS({n:e,speed:s,ease:n}))}),e===this.settings.maximum?(r.forEach(e=>{a(e,{transition:"none",opacity:"1"}),e.offsetWidth}),setTimeout(()=>{r.forEach(e=>{a(e,{transition:`all ${s}ms ${n}`,opacity:"0"})}),setTimeout(()=>{r.forEach(e=>{this.remove(e),null===this.settings.template&&a(e,{transition:"none",opacity:"1"})}),t()},s)},s)):setTimeout(t,s)}),this}static start(){this.status||this.set(0);let e=()=>{this.isPaused||setTimeout(()=>{this.status&&(this.trickle(),e())},this.settings.trickleSpeed)};return this.settings.trickle&&e(),this}static done(e){return e||this.status?this.inc(.3+.5*Math.random()).set(1):this}static inc(e){if(this.isPaused||this.settings.indeterminate)return this;let t=this.status;return t?t>1?this:("number"!=typeof e&&(e=t>=0&&t<.2?.1:t>=.2&&t<.5?.04:t>=.5&&t<.8?.02:.005*(t>=.8&&t<.99)),t=i(t+e,0,.994),this.set(t)):this.start()}static dec(e){if(this.isPaused||this.settings.indeterminate)return this;let t=this.status;return"number"!=typeof t?this:("number"!=typeof e&&(e=t>.8?.1:t>.5?.05:t>.2?.02:.01),t=i(t-e,0,.994),this.set(t))}static trickle(){return this.isPaused||this.settings.indeterminate?this:this.inc()}static promise(e){if(!e||"resolved"===e.state())return this;let t=0,r=0;return this.start(),t++,r++,e.always(()=>{0==--r?(t=0,this.done()):this.set((t-r)/t)}),this}static render(e=!1){let t="string"==typeof this.settings.parent?document.querySelector(this.settings.parent):this.settings.parent,r=t?Array.from(t.querySelectorAll(".bprogress")):[];if(null!==this.settings.template&&0===r.length){l(document.documentElement,"bprogress-busy");let e=document.createElement("div");l(e,"bprogress"),e.innerHTML=this.settings.template,t!==document.body&&l(t,"bprogress-custom-parent"),t.appendChild(e),r.push(e)}return r.forEach(r=>{if(null===this.settings.template&&(r.style.display=""),l(document.documentElement,"bprogress-busy"),t!==document.body&&l(t,"bprogress-custom-parent"),this.settings.indeterminate){let e=r.querySelector(this.settings.barSelector);e&&(e.style.display="none");let t=r.querySelector(this.settings.indeterminateSelector);t&&(t.style.display="")}else{let t=r.querySelector(this.settings.barSelector),s=e?o(0,this.settings.direction):o(this.status||0,this.settings.direction);a(t,this.barPositionCSS({n:this.status||0,speed:this.settings.speed,ease:this.settings.easing,perc:s}));let n=r.querySelector(this.settings.indeterminateSelector);n&&(n.style.display="none")}if(null===this.settings.template){let e=r.querySelector(this.settings.spinnerSelector);e&&(e.style.display=this.settings.showSpinner?"block":"none")}else if(!this.settings.showSpinner){let e=r.querySelector(this.settings.spinnerSelector);e&&u(e)}}),r}static remove(e){e?null===this.settings.template?e.style.display="none":u(e):(c(document.documentElement,"bprogress-busy"),("string"==typeof this.settings.parent?document.querySelectorAll(this.settings.parent):[this.settings.parent]).forEach(e=>{c(e,"bprogress-custom-parent")}),document.querySelectorAll(".bprogress").forEach(e=>{null===this.settings.template?e.style.display="none":u(e)}))}static pause(){return!this.isStarted()||this.settings.indeterminate||(this.isPaused=!0),this}static resume(){if(!this.isStarted()||this.settings.indeterminate)return this;if(this.isPaused=!1,this.settings.trickle){let e=()=>{this.isPaused||setTimeout(()=>{this.status&&(this.trickle(),e())},this.settings.trickleSpeed)};e()}return this}static isRendered(){return document.querySelectorAll(".bprogress").length>0}static getPositioningCSS(){let e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return`${t}Perspective`in e?"translate3d":`${t}Transform`in e?"translate":"margin"}static queue(e){this.pending.push(e),1===this.pending.length&&this.next()}static next(){let e=this.pending.shift();e&&e(this.next.bind(this))}static initPositionUsing(){""===this.settings.positionUsing&&(this.settings.positionUsing=this.getPositioningCSS())}static barPositionCSS({n:e,speed:t,ease:r,perc:s}){this.initPositionUsing();let n={},i=s??o(e,this.settings.direction);return"translate3d"===this.settings.positionUsing?n={transform:`translate3d(${i}%,0,0)`}:"translate"===this.settings.positionUsing?n={transform:`translate(${i}%,0)`}:"width"===this.settings.positionUsing?n={width:`${"rtl"===this.settings.direction?100-i:i+100}%`,..."rtl"===this.settings.direction?{right:"0",left:"auto"}:{}}:"margin"===this.settings.positionUsing&&(n="rtl"===this.settings.direction?{"margin-left":`${-i}%`}:{"margin-right":`${-i}%`}),n.transition=`all ${t}ms ${r}`,n}};function h(e,t){return e.protocol+"//"+e.host+e.pathname+e.search==t.protocol+"//"+t.host+t.pathname+t.search}function f(e,t){if("string"==typeof t&&"data-disable-progress"===t){let r=t.substring(5).replace(/-([a-z])/g,(e,t)=>t.toUpperCase());return e.dataset[r]}let r=e[t];if(r instanceof SVGAnimatedString){let e=r.baseVal;return"href"===t?function(e,t){let r,s,n;if(!e.startsWith("/")||!t)return e;let{pathname:i,query:o,hash:a}=(r=e.indexOf("#"),(n=(s=e.indexOf("?"))>-1&&(r<0||s<r))||r>-1?{pathname:e.substring(0,n?s:r),query:n?e.substring(s,r>-1?r:void 0):"",hash:r>-1?e.slice(r):""}:{pathname:e,query:"",hash:""});return`${t}${i}${o}${a}`}(e,location.origin):e}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},s=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),s.forEach(function(t){var s;s=r[t],t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s})}return e}function b(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},i=Object.keys(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=(0,n.createContext)(void 0),y=function(){var e=(0,n.useContext)(m);if(!e)throw Error("useProgress must be used within a ProgressProvider");return e},v=function(e){var t=e.children,r=e.color,s=void 0===r?"#0A2FFF":r,i=e.height,o=void 0===i?"2px":i,a=e.options,l=e.spinnerPosition,c=void 0===l?"top-right":l,u=e.style,p=e.disableStyle,h=e.nonce,f=e.shallowRouting,b=e.disableSameURL,y=e.startPosition,v=e.delay,P=e.stopDelay,S=(0,n.useRef)(null),w=(0,n.useRef)(!1),O=(0,n.useCallback)(function(){return w.current=!0},[]),k=(0,n.useCallback)(function(){return w.current=!1},[]),E=(0,n.useCallback)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];r&&O(),S.current=setTimeout(function(){e>0&&d.set(e),d.start()},t)},[O]),x=(0,n.useCallback)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;setTimeout(function(){S.current&&clearTimeout(S.current),S.current=setTimeout(function(){d.isStarted()&&(d.done(),w.current&&k())},e)},t)},[k]),R=(0,n.useCallback)(function(e){return d.inc(e)},[]),j=(0,n.useCallback)(function(e){return d.dec(e)},[]),D=(0,n.useCallback)(function(e){return d.set(e)},[]),C=(0,n.useCallback)(function(){return d.pause()},[]),U=(0,n.useCallback)(function(){return d.resume()},[]),L=(0,n.useCallback)(function(){return d.settings},[]),N=(0,n.useCallback)(function(e){var t=L(),r="function"==typeof e?e(t):e,s=g({},t,r);d.configure(s)},[L]),T=(0,n.useMemo)(function(){return n.createElement("style",{nonce:h},u||(({color:e="#29d",height:t="2px",spinnerPosition:r="top-right"})=>`
:root {
  --bprogress-color: ${e};
  --bprogress-height: ${t};
  --bprogress-spinner-size: 18px;
  --bprogress-spinner-animation-duration: 400ms;
  --bprogress-spinner-border-size: 2px;
  --bprogress-box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
  --bprogress-z-index: 99999;
  --bprogress-spinner-top: ${"top-right"===r||"top-left"===r?"15px":"auto"};
  --bprogress-spinner-bottom: ${"bottom-right"===r||"bottom-left"===r?"15px":"auto"};
  --bprogress-spinner-right: ${"top-right"===r||"bottom-right"===r?"15px":"auto"};
  --bprogress-spinner-left: ${"top-left"===r||"bottom-left"===r?"15px":"auto"};
}

.bprogress {
  width: 0;
  height: 0;
  pointer-events: none;
  z-index: var(--bprogress-z-index);
}

.bprogress .bar {
  background: var(--bprogress-color);
  position: fixed;
  z-index: var(--bprogress-z-index);
  top: 0;
  left: 0;
  width: 100%;
  height: var(--bprogress-height);
}

/* Fancy blur effect */
.bprogress .peg {
  display: block;
  position: absolute;
  right: 0;
  width: 100px;
  height: 100%;
  box-shadow: var(--bprogress-box-shadow);
  opacity: 1.0;
  transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
.bprogress .spinner {
  display: block;
  position: fixed;
  z-index: var(--bprogress-z-index);
  top: var(--bprogress-spinner-top);
  bottom: var(--bprogress-spinner-bottom);
  right: var(--bprogress-spinner-right);
  left: var(--bprogress-spinner-left);
}

.bprogress .spinner-icon {
  width: var(--bprogress-spinner-size);
  height: var(--bprogress-spinner-size);
  box-sizing: border-box;
  border: solid var(--bprogress-spinner-border-size) transparent;
  border-top-color: var(--bprogress-color);
  border-left-color: var(--bprogress-color);
  border-radius: 50%;
  -webkit-animation: bprogress-spinner var(--bprogress-spinner-animation-duration) linear infinite;
  animation: bprogress-spinner var(--bprogress-spinner-animation-duration) linear infinite;
}

.bprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.bprogress-custom-parent .bprogress .spinner,
.bprogress-custom-parent .bprogress .bar {
  position: absolute;
}

.bprogress .indeterminate {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--bprogress-height);
  overflow: hidden;
}

.bprogress .indeterminate .inc,
.bprogress .indeterminate .dec {
  position: absolute;
  top: 0;
  height: 100%;
  background-color: var(--bprogress-color);
}

.bprogress .indeterminate .inc {
  animation: bprogress-indeterminate-increase 2s infinite;
}

.bprogress .indeterminate .dec {
  animation: bprogress-indeterminate-decrease 2s 0.5s infinite;
}

@-webkit-keyframes bprogress-spinner {
  0%   { -webkit-transform: rotate(0deg); transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }
}

@keyframes bprogress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes bprogress-indeterminate-increase {
  from { left: -5%; width: 5%; }
  to { left: 130%; width: 100%; }
}

@keyframes bprogress-indeterminate-decrease {
  from { left: -80%; width: 80%; }
  to { left: 110%; width: 10%; }
}
`)({color:s,height:o,spinnerPosition:c}))},[s,o,h,c,u]);return d.configure(a||{}),n.createElement(m.Provider,{value:{start:E,stop:x,inc:R,dec:j,set:D,pause:C,resume:U,setOptions:N,getOptions:L,isAutoStopDisabled:w,disableAutoStop:O,enableAutoStop:k,shallowRouting:void 0!==f&&f,disableSameURL:void 0===b||b,startPosition:void 0===y?0:y,delay:void 0===v?0:v,stopDelay:void 0===P?0:P}},void 0!==p&&p?null:T,t)};function P(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(Boolean).join(" ")}var S=n.forwardRef(function(e,t){var r=e.as,s=e.children,i=e.className,o=e.classSelector,a=b(e,["as","children","className","classSelector"]);return n.createElement(null!=r?r:"div",g({ref:t,className:P(void 0===o?"bar":o,i)},a),s)}),w=n.forwardRef(function(e,t){var r=e.as,s=e.children,i=e.className,o=e.classSelector,a=b(e,["as","children","className","classSelector"]);return n.createElement(null!=r?r:"div",g({ref:t,className:P(void 0===o?"peg":o,i)},a),s)}),O=n.forwardRef(function(e,t){var r=e.as,s=e.children,i=e.className,o=e.classSelector,a=b(e,["as","children","className","classSelector"]);return n.createElement(null!=r?r:"div",g({ref:t,className:P(void 0===o?"spinner":o,i)},a),s)}),k=n.forwardRef(function(e,t){var r=e.as,s=e.children,i=e.className,o=e.classSelector,a=b(e,["as","children","className","classSelector"]);return n.createElement(null!=r?r:"div",g({ref:t,className:P(void 0===o?"spinner-icon":o,i)},a),s)});function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},s=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),s.forEach(function(t){var s;s=r[t],t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s})}return e}function x(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r.push.apply(r,s)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}function R(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},i=Object.keys(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function j(e){var t=e||{},r=t.customRouter,i=R(t,["customRouter"]),o=r?r():(0,s.useRouter)(),a=y(),l=a.start,c=a.stop,u=a.disableSameURL,p=a.startPosition,d=a.delay,f=a.stopDelay,g=(0,n.useRef)(null);function b(e){return function(t,r){var s,n,o=r||{},a=o.showProgress,g=o.startPosition,b=o.disableSameURL,m=o.basePath,y=o.i18nPath,v=o.delay,P=o.stopDelay,S=R(o,["showProgress","startPosition","disableSameURL","basePath","i18nPath","delay","stopDelay"]),w=x(E({},i),{showProgress:a,startPosition:g,disableSameURL:b,basePath:m,i18nPath:y,delay:v,stopDelay:P}),O=void 0!==w.disableSameURL?w.disableSameURL:u,k=void 0!==w.startPosition?w.startPosition:p,j=void 0!==w.delay?w.delay:d,D=void 0!==w.stopDelay?w.stopDelay:f;if(!1===w.showProgress)return e(t,S);var C=new URL(location.href),U=new URL(t,location.href);w.i18nPath&&((n=(s=C).pathname.split("/")).length>1&&n[1]&&(n.splice(1,1),s.pathname=n.join("/")||"/"),C=s),w.basePath&&(U.pathname=w.basePath+("/"!==U.pathname?U.pathname:""));var L=h(U,C);return L&&O||(l(k,j),setTimeout(function(){L&&c(D)},j||0)),e(t,S)}}function m(e){return function(t){var r=t||{},s=r.showProgress,n=r.startPosition,o=r.disableSameURL,a=r.basePath,u=r.i18nPath,h=r.delay,g=r.stopDelay,b=R(r,["showProgress","startPosition","disableSameURL","basePath","i18nPath","delay","stopDelay"]),m=x(E({},i),{showProgress:s,startPosition:n,disableSameURL:o,basePath:a,i18nPath:u,delay:h,stopDelay:g}),y=void 0!==m.startPosition?m.startPosition:p,v=void 0!==m.delay?m.delay:d,P=void 0!==m.stopDelay?m.stopDelay:f;if(!1===m.showProgress)return e(b);l(y,v);var S=e(b);return setTimeout(function(){c(P)},v||0),S}}function v(e){return function(t,r){return e(t,r)}}return g.current?(g.current.push=b(o.push),g.current.replace=b(o.replace),g.current.prefetch=v(o.prefetch),g.current.back=m(o.back),g.current.refresh=m(o.refresh),g.current.forward=m(o.forward)):g.current=x(E({},o),{push:b(o.push),replace:b(o.replace),prefetch:v(o.prefetch),back:m(o.back),refresh:m(o.refresh),forward:m(o.forward)}),g.current}n.forwardRef(function(e,t){var r,s,i=e.as,o=e.children,a=e.className,l=e.style,c=b(e,["as","children","className","style"]);return n.createElement(null!=i?i:"div",g({ref:t,className:P("bprogress",a),style:(r=g({},l),s=s={display:"none"},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r.push.apply(r,s)}return r})(Object(s)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(s,e))}),r)},c),o||n.createElement(n.Fragment,null,n.createElement(S,null,n.createElement(w,null)),n.createElement(O,null,n.createElement(k,null))))}),n.forwardRef(function(e,t){var r=e.as,s=e.className,i=e.classSelector,o=b(e,["as","className","classSelector"]);return n.createElement(null!=r?r:"div",g({ref:t,className:P(void 0===i?"indeterminate":i,s)},o),n.createElement("div",{className:"inc"}),n.createElement("div",{className:"dec"}))});var D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["memo","shouldCompareComplexProps"];return(0,n.memo)(e,function(e,r){return!1!==r.memo&&(!r.shouldCompareComplexProps||function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],s=Object.keys(e).filter(function(e){return!r.includes(e)}),n=Object.keys(t).filter(function(e){return!r.includes(e)});if(s.length!==n.length)return!1;var i=!0,o=!1,a=void 0;try{for(var l,c=s[Symbol.iterator]();!(i=(l=c.next()).done);i=!0){var u=l.value;if(e[u]!==t[u])return!1}}catch(e){o=!0,a=e}finally{try{i||null==c.return||c.return()}finally{if(o)throw a}}return!0}(e,r,t))})}(function(e){return!function(e){var t=e.shallowRouting,r=void 0!==t&&t,s=e.disableSameURL,i=void 0===s||s,o=e.startPosition,a=void 0===o?0:o,l=e.delay,c=void 0===l?0:l,u=e.stopDelay,p=void 0===u?0:u,d=e.targetPreprocessor,g=e.disableAnchorClick,b=void 0!==g&&g,m=e.startOnLoad,v=void 0!==m&&m,P=e.forcedStopDelay,S=void 0===P?0:P,w=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],O=(0,n.useRef)([]),k=(0,n.useRef)(null),E=y(),x=E.start,R=E.stop,j=E.isAutoStopDisabled;(0,n.useEffect)(function(){v&&x(a,c)},[]),(0,n.useEffect)(function(){return k.current&&clearTimeout(k.current),k.current=setTimeout(function(){j.current||R()},p),function(){k.current&&clearTimeout(k.current)}},w),(0,n.useEffect)(function(){if(!b){var e=function(e){if(e.defaultPrevented)return;var t=e.currentTarget;if(!t.hasAttribute("download")){var s=e.target,n=(null==s?void 0:s.getAttribute("data-prevent-progress"))==="true"||(null==t?void 0:t.getAttribute("data-prevent-progress"))==="true";if(!n)for(var o,l=s;l&&"a"!==l.tagName.toLowerCase();){if((null==(o=l.parentElement)?void 0:o.getAttribute("data-prevent-progress"))==="true"){n=!0;break}l=l.parentElement}if(!n&&"_blank"!==f(t,"target")&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey){var u=f(t,"href"),p=d?d(new URL(u)):new URL(u),g=new URL(location.href);r&&p.protocol+"//"+p.host+p.pathname==g.protocol+"//"+g.host+g.pathname&&i||h(p,g)&&i||x(a,c)}}},t=new MutationObserver(function(){var t=Array.from(document.querySelectorAll("a")).filter(function(e){var t=f(e,"href"),r="true"===e.getAttribute("data-disable-progress"),s=t&&!t.startsWith("tel:")&&!t.startsWith("mailto:")&&!t.startsWith("blob:")&&!t.startsWith("javascript:");return!r&&s&&"_blank"!==f(e,"target")});t.forEach(function(t){t.addEventListener("click",e,!0)}),O.current=t});t.observe(document,{childList:!0,subtree:!0});var s=window.history.pushState;return window.history.pushState=new Proxy(window.history.pushState,{apply:function(e,t,r){return j.current||R(p,S),e.apply(t,r)}}),function(){t.disconnect(),O.current.forEach(function(t){t.removeEventListener("click",e,!0)}),O.current=[],window.history.pushState=s}}},[b,d,r,i,c,p,a,x,R,S,j])}(e,[(0,s.usePathname)(),(0,s.useSearchParams)()]),null});D.displayName="AppProgress";var C=function(e){var t=e.children,r=e.ProgressComponent,s=e.color,i=e.height,o=e.options,a=e.spinnerPosition,l=e.style,c=e.disableStyle,u=e.nonce,p=e.stopDelay,d=e.delay,h=e.startPosition,f=e.disableSameURL,g=e.shallowRouting,b=R(e,["children","ProgressComponent","color","height","options","spinnerPosition","style","disableStyle","nonce","stopDelay","delay","startPosition","disableSameURL","shallowRouting"]);return n.createElement(v,{color:s,height:i,options:o,spinnerPosition:a,style:l,disableStyle:c,nonce:u,stopDelay:p,delay:d,startPosition:h,disableSameURL:f,shallowRouting:g},n.createElement(r,E({stopDelay:p,delay:d,startPosition:h,disableSameURL:f,shallowRouting:g},b)),t)},U=function(e){return n.createElement(n.Suspense,null,n.createElement(D,g({},e)))},L=function(e){var t=e.children,r=R(e,["children"]);return n.createElement(C,E({ProgressComponent:U},r),t)}}}]);