!function(){function t(e){return e&&e.__esModule?e.default:e}var n,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",u=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,d="object"==typeof r&&r&&r.Object===Object&&r,s="object"==typeof self&&self&&self.Object===Object&&self,m=d||s||Function("return this")(),v=Object.prototype.toString,p=Math.max,b=Math.min,y=function(){return m.Date.now()};function g(e,t,n){var r,o,u,a,f,c,l=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function v(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function g(e){return l=e,f=setTimeout(T,t),d?v(e):a}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function T(){var e=y();if(O(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-c);return s?b(n,u-(e-l)):n}(e))}function h(e){return f=void 0,m&&r?v(e):(r=o=void 0,a)}function w(){var e=y(),n=O(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return g(c);if(s)return f=setTimeout(T,t),v(c)}return void 0===f&&(f=setTimeout(T,t)),a}return t=S(t)||0,j(n)&&(d=!!n.leading,u=(s="maxWait"in n)?p(S(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},w.flush=function(){return void 0===f?a:h(y())},w}function j(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(j(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=j(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var r=f.test(e);return r||c.test(e)?l(e.slice(2),r?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return j(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};var O,T="feedback-form-state",h={},w={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),email:document.querySelector(".feedback-form input")};w.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(T)})),w.form.addEventListener("input",t(n)((function(t){var n=e.target.name,r=e.target.value;h[n]=r,localStorage.setItem(T,JSON.stringify(h))}),500)),(O=JSON.parse(localStorage.getItem(T)))&&(w.email.value=O.email,w.textarea.value=O.message)}();
//# sourceMappingURL=03-feedback.e06beeab.js.map
