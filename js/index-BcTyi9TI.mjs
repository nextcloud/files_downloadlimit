/*! third party licenses: js/vendor.LICENSE.txt */
import{g as w,b as k}from"./purify.es-s39PBv2B.mjs";var A=/["'&<>]/,m=h;function h(o){var t=""+o,a=A.exec(t);if(!a)return t;var n,e="",r=0,s=0;for(r=a.index;r<t.length;r++){switch(t.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 39:n="&#39;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}s!==r&&(e+=t.substring(s,r)),s=r+1,e+=n}return s!==r?e+t.substring(s,r):e}const x=w(m);function y(o){var t,a,n,e;return{translations:(a=(t=window._oc_l10n_registry_translations)===null||t===void 0?void 0:t[o])!==null&&a!==void 0?a:{},pluralFunction:(e=(n=window._oc_l10n_registry_plural_functions)===null||n===void 0?void 0:n[o])!==null&&e!==void 0?e:r=>r}}function g(o,t,a,n,e){const r=Object.assign({},{escape:!0,sanitize:!0},e||{}),s=f=>f,c=r.sanitize?k.sanitize:s,u=r.escape?x:s,l=(f,d,b)=>f.replace(/%n/g,""+b).replace(/{([^{}]*)}/g,(_,v)=>{if(d===void 0||!(v in d))return c(_);const p=d[v];return c(typeof p=="string"||typeof p=="number"?u(p):_)});let i=y(o).translations[t]||t;return i=Array.isArray(i)?i[0]:i,c(typeof a=="object"||n!==void 0?l(i,a,n):i)}function F(o,t,a,n,e,r){const s="_"+t+"_::_"+a+"_",c=y(o),u=c.translations[s];if(typeof u<"u"){const l=u;if(Array.isArray(l)){const i=c.pluralFunction(n);return g(o,l[i],e,n,r)}}return n===1?g(o,t,e,n,r):g(o,a,e,n,r)}export{F as a,g as t};
