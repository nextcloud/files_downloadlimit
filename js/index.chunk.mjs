/*! third party licenses: js/vendor.LICENSE.txt */
import{g as w,e as A}from"./purify.es.chunk.mjs";var h=/["'&<>]/,x=z;function z(a){var e=""+a,o=h.exec(e);if(!o)return e;var n,r="",t=0,i=0;for(t=o.index;t<e.length;t++){switch(e.charCodeAt(t)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 39:n="&#39;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}i!==t&&(r+=e.substring(i,t)),i=t+1,r+=n}return i!==t?r+e.substring(i,t):r}const g=w(x);function k(a){var e,o,n,r;return{translations:(o=(e=window._oc_l10n_registry_translations)==null?void 0:e[a])!=null?o:{},pluralFunction:(r=(n=window._oc_l10n_registry_plural_functions)==null?void 0:n[a])!=null?r:t=>t}}function v(a,e,o,n,r){const t={escape:!0,sanitize:!0,...r||{}},i=l=>l,p=t.sanitize?A.sanitize:i,s=t.escape?g:i,f=l=>typeof l=="string"||typeof l=="number",_=(l,d,m)=>l.replace(/%n/g,""+m).replace(/{([^{}]*)}/g,(y,b)=>{if(d===void 0||!(b in d))return s(y);const u=d[b];return f(u)?s("".concat(u)):typeof u=="object"&&f(u.value)?(u.escape!==!1?g:i)("".concat(u.value)):s(y)});let c=k(a).translations[e]||e;return c=Array.isArray(c)?c[0]:c,p(typeof o=="object"||n!==void 0?_(c,o,n):c)}function j(a,e,o,n,r,t){const i="_"+e+"_::_"+o+"_",p=k(a),s=p.translations[i];if(typeof s<"u"){const f=s;if(Array.isArray(f)){const _=p.pluralFunction(n);return v(a,f[_],r,n,t)}}return n===1?v(a,e,r,n,t):v(a,o,r,n,t)}export{j as a,v as t};
