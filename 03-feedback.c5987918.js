function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return l.Date.now()};function g(t,e,n){var r,o,i,a,u,f,c=0,l=!1,s=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=r,i=o;return r=o=void 0,c=e,a=t.apply(i,n)}function S(t){return c=t,u=setTimeout(T,e),l?b(t):a}function j(t){var n=t-f;return void 0===f||n>=e||n<0||s&&t-c>=i}function T(){var t=p();if(j(t))return h(t);u=setTimeout(T,function(t){var n=e-(t-f);return s?m(n,i-(t-c)):n}(t))}function h(t){return u=void 0,g&&r?b(t):(r=o=void 0,a)}function w(){var t=p(),n=j(t);if(r=arguments,o=this,f=t,n){if(void 0===u)return S(f);if(s)return u=setTimeout(T,e),b(f)}return void 0===u&&(u=setTimeout(T,e)),a}return e=y(e)||0,v(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,e):i,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=o=u=void 0},w.flush=function(){return void 0===u?a:h(p())},w}function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=i.test(t);return n||a.test(t)?u(t.slice(2),n?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return v(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(t,e,{leading:r,maxWait:e,trailing:o})};const b={form:document.querySelector(".feedback-form"),inputEmail:document.querySelector("input"),inputMessage:document.querySelector("textarea")};b.form.addEventListener("submit",(function(t){t.preventDefault(),t.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),b.inputMessage.addEventListener("input",t(e)((function(t){const e=t.target.value;localStorage.setItem("feedback-form-state",e)}),500)),b.form.addEventListener("input",j);const S={},j=t=>JSON.parse(localStorage.getItem(T)),T=t=>{S[t.target.name]=t.target.value,localStorage.setItem("formData",JSON.stringify(S))};!function(){const t=localStorage.getItem("feedback-form-state");t&&(b.inputMessage.value=t)}();
//# sourceMappingURL=03-feedback.c5987918.js.map
