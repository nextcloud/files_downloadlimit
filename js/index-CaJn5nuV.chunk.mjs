var kn=Object.defineProperty;var xn=(n,e,r)=>e in n?kn(n,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[e]=r;var Ke=(n,e,r)=>xn(n,typeof e!="symbol"?e+"":e,r);var eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ut(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function Un(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var en={exports:{}},E=en.exports={},H,j;function it(){throw new Error("setTimeout has not been defined")}function at(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?H=setTimeout:H=it}catch{H=it}try{typeof clearTimeout=="function"?j=clearTimeout:j=at}catch{j=at}})();function tn(n){if(H===setTimeout)return setTimeout(n,0);if((H===it||!H)&&setTimeout)return H=setTimeout,setTimeout(n,0);try{return H(n,0)}catch{try{return H.call(null,n,0)}catch{return H.call(this,n,0)}}}function Fn(n){if(j===clearTimeout)return clearTimeout(n);if((j===at||!j)&&clearTimeout)return j=clearTimeout,clearTimeout(n);try{return j(n)}catch{try{return j.call(null,n)}catch{return j.call(this,n)}}}var V=[],se=!1,J,Se=-1;function Gn(){!se||!J||(se=!1,J.length?V=J.concat(V):Se=-1,V.length&&nn())}function nn(){if(!se){var n=tn(Gn);se=!0;for(var e=V.length;e;){for(J=V,V=[];++Se<e;)J&&J[Se].run();Se=-1,e=V.length}J=null,se=!1,Fn(n)}}E.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];V.push(new rn(n,e)),V.length===1&&!se&&tn(nn)};function rn(n,e){this.fun=n,this.array=e}rn.prototype.run=function(){this.fun.apply(null,this.array)},E.title="browser",E.browser=!0,E.env={},E.argv=[],E.version="",E.versions={};function W(){}E.on=W,E.addListener=W,E.once=W,E.off=W,E.removeListener=W,E.removeAllListeners=W,E.emit=W,E.prependListener=W,E.prependOnceListener=W,E.listeners=function(n){return[]},E.binding=function(n){throw new Error("process.binding is not supported")},E.cwd=function(){return"/"},E.chdir=function(n){throw new Error("process.chdir is not supported")},E.umask=function(){return 0};var Hn=en.exports;const jn=Un(Hn);var Ze={};const Bn=typeof jn=="object"&&Ze&&Ze.NODE_DEBUG&&/\bsemver\b/i.test(Ze.NODE_DEBUG)?(...n)=>console.error("SEMVER",...n):()=>{};var on=Bn;const zn="2.0.0",an=256,Xn=Number.MAX_SAFE_INTEGER||9007199254740991,Wn=16,Vn=an-6,Yn=["major","premajor","minor","preminor","patch","prepatch","prerelease"];var sn={MAX_LENGTH:an,MAX_SAFE_COMPONENT_LENGTH:Wn,MAX_SAFE_BUILD_LENGTH:Vn,MAX_SAFE_INTEGER:Xn,RELEASE_TYPES:Yn,SEMVER_SPEC_VERSION:zn,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2},st={exports:{}};(function(n,e){const{MAX_SAFE_COMPONENT_LENGTH:r,MAX_SAFE_BUILD_LENGTH:o,MAX_LENGTH:c}=sn,p=on;e=n.exports={};const R=e.re=[],P=e.safeRe=[],a=e.src=[],i=e.t={};let Y=0;const _="[a-zA-Z0-9-]",$=[["\\s",1],["\\d",c],[_,o]],k=D=>{for(const[b,v]of $)D=D.split("".concat(b,"*")).join("".concat(b,"{0,").concat(v,"}")).split("".concat(b,"+")).join("".concat(b,"{1,").concat(v,"}"));return D},u=(D,b,v)=>{const $e=k(b),x=Y++;p(D,x,b),i[D]=x,a[x]=b,R[x]=new RegExp(b,v?"g":void 0),P[x]=new RegExp($e,v?"g":void 0)};u("NUMERICIDENTIFIER","0|[1-9]\\d*"),u("NUMERICIDENTIFIERLOOSE","\\d+"),u("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-]".concat(_,"*")),u("MAINVERSION","(".concat(a[i.NUMERICIDENTIFIER],")\\.(").concat(a[i.NUMERICIDENTIFIER],")\\.(").concat(a[i.NUMERICIDENTIFIER],")")),u("MAINVERSIONLOOSE","(".concat(a[i.NUMERICIDENTIFIERLOOSE],")\\.(").concat(a[i.NUMERICIDENTIFIERLOOSE],")\\.(").concat(a[i.NUMERICIDENTIFIERLOOSE],")")),u("PRERELEASEIDENTIFIER","(?:".concat(a[i.NUMERICIDENTIFIER],"|").concat(a[i.NONNUMERICIDENTIFIER],")")),u("PRERELEASEIDENTIFIERLOOSE","(?:".concat(a[i.NUMERICIDENTIFIERLOOSE],"|").concat(a[i.NONNUMERICIDENTIFIER],")")),u("PRERELEASE","(?:-(".concat(a[i.PRERELEASEIDENTIFIER],"(?:\\.").concat(a[i.PRERELEASEIDENTIFIER],")*))")),u("PRERELEASELOOSE","(?:-?(".concat(a[i.PRERELEASEIDENTIFIERLOOSE],"(?:\\.").concat(a[i.PRERELEASEIDENTIFIERLOOSE],")*))")),u("BUILDIDENTIFIER","".concat(_,"+")),u("BUILD","(?:\\+(".concat(a[i.BUILDIDENTIFIER],"(?:\\.").concat(a[i.BUILDIDENTIFIER],")*))")),u("FULLPLAIN","v?".concat(a[i.MAINVERSION]).concat(a[i.PRERELEASE],"?").concat(a[i.BUILD],"?")),u("FULL","^".concat(a[i.FULLPLAIN],"$")),u("LOOSEPLAIN","[v=\\s]*".concat(a[i.MAINVERSIONLOOSE]).concat(a[i.PRERELEASELOOSE],"?").concat(a[i.BUILD],"?")),u("LOOSE","^".concat(a[i.LOOSEPLAIN],"$")),u("GTLT","((?:<|>)?=?)"),u("XRANGEIDENTIFIERLOOSE","".concat(a[i.NUMERICIDENTIFIERLOOSE],"|x|X|\\*")),u("XRANGEIDENTIFIER","".concat(a[i.NUMERICIDENTIFIER],"|x|X|\\*")),u("XRANGEPLAIN","[v=\\s]*(".concat(a[i.XRANGEIDENTIFIER],")(?:\\.(").concat(a[i.XRANGEIDENTIFIER],")(?:\\.(").concat(a[i.XRANGEIDENTIFIER],")(?:").concat(a[i.PRERELEASE],")?").concat(a[i.BUILD],"?)?)?")),u("XRANGEPLAINLOOSE","[v=\\s]*(".concat(a[i.XRANGEIDENTIFIERLOOSE],")(?:\\.(").concat(a[i.XRANGEIDENTIFIERLOOSE],")(?:\\.(").concat(a[i.XRANGEIDENTIFIERLOOSE],")(?:").concat(a[i.PRERELEASELOOSE],")?").concat(a[i.BUILD],"?)?)?")),u("XRANGE","^".concat(a[i.GTLT],"\\s*").concat(a[i.XRANGEPLAIN],"$")),u("XRANGELOOSE","^".concat(a[i.GTLT],"\\s*").concat(a[i.XRANGEPLAINLOOSE],"$")),u("COERCEPLAIN","(^|[^\\d])(\\d{1,".concat(r,"})(?:\\.(\\d{1,").concat(r,"}))?(?:\\.(\\d{1,").concat(r,"}))?")),u("COERCE","".concat(a[i.COERCEPLAIN],"(?:$|[^\\d])")),u("COERCEFULL",a[i.COERCEPLAIN]+"(?:".concat(a[i.PRERELEASE],")?(?:").concat(a[i.BUILD],")?(?:$|[^\\d])")),u("COERCERTL",a[i.COERCE],!0),u("COERCERTLFULL",a[i.COERCEFULL],!0),u("LONETILDE","(?:~>?)"),u("TILDETRIM","(\\s*)".concat(a[i.LONETILDE],"\\s+"),!0),e.tildeTrimReplace="$1~",u("TILDE","^".concat(a[i.LONETILDE]).concat(a[i.XRANGEPLAIN],"$")),u("TILDELOOSE","^".concat(a[i.LONETILDE]).concat(a[i.XRANGEPLAINLOOSE],"$")),u("LONECARET","(?:\\^)"),u("CARETTRIM","(\\s*)".concat(a[i.LONECARET],"\\s+"),!0),e.caretTrimReplace="$1^",u("CARET","^".concat(a[i.LONECARET]).concat(a[i.XRANGEPLAIN],"$")),u("CARETLOOSE","^".concat(a[i.LONECARET]).concat(a[i.XRANGEPLAINLOOSE],"$")),u("COMPARATORLOOSE","^".concat(a[i.GTLT],"\\s*(").concat(a[i.LOOSEPLAIN],")$|^$")),u("COMPARATOR","^".concat(a[i.GTLT],"\\s*(").concat(a[i.FULLPLAIN],")$|^$")),u("COMPARATORTRIM","(\\s*)".concat(a[i.GTLT],"\\s*(").concat(a[i.LOOSEPLAIN],"|").concat(a[i.XRANGEPLAIN],")"),!0),e.comparatorTrimReplace="$1$2$3",u("HYPHENRANGE","^\\s*(".concat(a[i.XRANGEPLAIN],")\\s+-\\s+(").concat(a[i.XRANGEPLAIN],")\\s*$")),u("HYPHENRANGELOOSE","^\\s*(".concat(a[i.XRANGEPLAINLOOSE],")\\s+-\\s+(").concat(a[i.XRANGEPLAINLOOSE],")\\s*$")),u("STAR","(<|>)?=?\\s*\\*"),u("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),u("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")})(st,st.exports);var qn=st.exports;const Kn=Object.freeze({loose:!0}),Zn=Object.freeze({}),Jn=n=>n?typeof n!="object"?Kn:n:Zn;var Qn=Jn;const Ut=/^[0-9]+$/,ln=(n,e)=>{const r=Ut.test(n),o=Ut.test(e);return r&&o&&(n=+n,e=+e),n===e?0:r&&!o?-1:o&&!r?1:n<e?-1:1},er=(n,e)=>ln(e,n);var tr={compareIdentifiers:ln,rcompareIdentifiers:er};const be=on,{MAX_LENGTH:Ft,MAX_SAFE_INTEGER:ve}=sn,{safeRe:Gt,t:Ht}=qn,nr=Qn,{compareIdentifiers:ie}=tr;let rr=class G{constructor(e,r){if(r=nr(r),e instanceof G){if(e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease)return e;e=e.version}else if(typeof e!="string")throw new TypeError('Invalid version. Must be a string. Got type "'.concat(typeof e,'".'));if(e.length>Ft)throw new TypeError("version is longer than ".concat(Ft," characters"));be("SemVer",e,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;const o=e.trim().match(r.loose?Gt[Ht.LOOSE]:Gt[Ht.FULL]);if(!o)throw new TypeError("Invalid Version: ".concat(e));if(this.raw=e,this.major=+o[1],this.minor=+o[2],this.patch=+o[3],this.major>ve||this.major<0)throw new TypeError("Invalid major version");if(this.minor>ve||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>ve||this.patch<0)throw new TypeError("Invalid patch version");o[4]?this.prerelease=o[4].split(".").map(c=>{if(/^[0-9]+$/.test(c)){const p=+c;if(p>=0&&p<ve)return p}return c}):this.prerelease=[],this.build=o[5]?o[5].split("."):[],this.format()}format(){return this.version="".concat(this.major,".").concat(this.minor,".").concat(this.patch),this.prerelease.length&&(this.version+="-".concat(this.prerelease.join("."))),this.version}toString(){return this.version}compare(e){if(be("SemVer.compare",this.version,this.options,e),!(e instanceof G)){if(typeof e=="string"&&e===this.version)return 0;e=new G(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof G||(e=new G(e,this.options)),ie(this.major,e.major)||ie(this.minor,e.minor)||ie(this.patch,e.patch)}comparePre(e){if(e instanceof G||(e=new G(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let r=0;do{const o=this.prerelease[r],c=e.prerelease[r];if(be("prerelease compare",r,o,c),o===void 0&&c===void 0)return 0;if(c===void 0)return 1;if(o===void 0)return-1;if(o!==c)return ie(o,c)}while(++r)}compareBuild(e){e instanceof G||(e=new G(e,this.options));let r=0;do{const o=this.build[r],c=e.build[r];if(be("build compare",r,o,c),o===void 0&&c===void 0)return 0;if(c===void 0)return 1;if(o===void 0)return-1;if(o!==c)return ie(o,c)}while(++r)}inc(e,r,o){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r,o);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r,o);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r,o),this.inc("pre",r,o);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r,o),this.inc("pre",r,o);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const c=Number(o)?1:0;if(!r&&o===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[c];else{let p=this.prerelease.length;for(;--p>=0;)typeof this.prerelease[p]=="number"&&(this.prerelease[p]++,p=-2);if(p===-1){if(r===this.prerelease.join(".")&&o===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(c)}}if(r){let p=[r,c];o===!1&&(p=[r]),ie(this.prerelease[0],r)===0?isNaN(this.prerelease[1])&&(this.prerelease=p):this.prerelease=p}break}default:throw new Error("invalid increment argument: ".concat(e))}return this.raw=this.format(),this.build.length&&(this.raw+="+".concat(this.build.join("."))),this}};var cn=rr;const jt=cn,or=(n,e,r=!1)=>{if(n instanceof jt)return n;try{return new jt(n,e)}catch(o){if(!r)return null;throw o}};var ir=or;const ar=ir,sr=(n,e)=>{const r=ar(n,e);return r?r.version:null};var lr=sr;const cr=ut(lr),ur=cn,pr=(n,e)=>new ur(n,e).major;var mr=pr;const Bt=ut(mr);class fr{constructor(e){Ke(this,"bus");typeof e.getVersion!="function"||!cr(e.getVersion())?console.warn("Proxying an event bus with an unknown or invalid version"):Bt(e.getVersion())!==Bt(this.getVersion())&&console.warn("Proxying an event bus of version "+e.getVersion()+" with "+this.getVersion()),this.bus=e}getVersion(){return"3.3.1"}subscribe(e,r){this.bus.subscribe(e,r)}unsubscribe(e,r){this.bus.unsubscribe(e,r)}emit(e,r){this.bus.emit(e,r)}}class dr{constructor(){Ke(this,"handlers",new Map)}getVersion(){return"3.3.1"}subscribe(e,r){this.handlers.set(e,(this.handlers.get(e)||[]).concat(r))}unsubscribe(e,r){this.handlers.set(e,(this.handlers.get(e)||[]).filter(o=>o!==r))}emit(e,r){(this.handlers.get(e)||[]).forEach(o=>{try{o(r)}catch(c){console.error("could not invoke event listener",c)}})}}let fe=null;function Er(){var n;return fe!==null?fe:typeof window>"u"?new Proxy({},{get:()=>()=>console.error("Window not available, EventBus can not be established!")}):((n=window.OC)!=null&&n._eventBus&&typeof window._nc_event_bus>"u"&&(console.warn("found old event bus instance at OC._eventBus. Update your version!"),window._nc_event_bus=window.OC._eventBus),typeof(window==null?void 0:window._nc_event_bus)<"u"?fe=new fr(window._nc_event_bus):fe=window._nc_event_bus=new dr,fe)}function hr(n,e){Er().subscribe(n,e)}var Ce={},Me={},Ie={};Object.defineProperty(Ie,"__esModule",{value:!0}),Ie.default=void 0;function Pe(n,e,r){return e=gr(e),e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function gr(n){var e=Tr(n,"string");return typeof e=="symbol"?e:e+""}function Tr(n,e){if(typeof n!="object"||!n)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var o=r.call(n,e||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}class le{constructor(e,r,o){Pe(this,"scope",void 0),Pe(this,"wrapped",void 0),this.scope="".concat(o?le.GLOBAL_SCOPE_PERSISTENT:le.GLOBAL_SCOPE_VOLATILE,"_").concat(btoa(e),"_"),this.wrapped=r}scopeKey(e){return"".concat(this.scope).concat(e)}setItem(e,r){this.wrapped.setItem(this.scopeKey(e),r)}getItem(e){return this.wrapped.getItem(this.scopeKey(e))}removeItem(e){this.wrapped.removeItem(this.scopeKey(e))}clear(){Object.keys(this.wrapped).filter(e=>e.startsWith(this.scope)).map(this.wrapped.removeItem.bind(this.wrapped))}}Ie.default=le,Pe(le,"GLOBAL_SCOPE_VOLATILE","nextcloud_vol"),Pe(le,"GLOBAL_SCOPE_PERSISTENT","nextcloud_per"),Object.defineProperty(Me,"__esModule",{value:!0}),Me.default=void 0;var Nr=Ir(Ie);function Ir(n){return n&&n.__esModule?n:{default:n}}function Je(n,e,r){return e=Rr(e),e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function Rr(n){var e=Ar(n,"string");return typeof e=="symbol"?e:e+""}function Ar(n,e){if(typeof n!="object"||!n)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var o=r.call(n,e||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}class yr{constructor(e){Je(this,"appId",void 0),Je(this,"persisted",!1),Je(this,"clearedOnLogout",!1),this.appId=e}persist(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return this.persisted=e,this}clearOnLogout(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return this.clearedOnLogout=e,this}build(){return new Nr.default(this.appId,this.persisted?window.localStorage:window.sessionStorage,!this.clearedOnLogout)}}Me.default=yr,Object.defineProperty(Ce,"__esModule",{value:!0}),Ce.clearAll=wr,Ce.clearNonPersistent=_r;var Lr=Ce.getBuilder=vr,Or=un(Me),br=un(Ie);function un(n){return n&&n.__esModule?n:{default:n}}function vr(n){return new Or.default(n)}function pn(n,e){Object.keys(n).filter(r=>e?e(r):!0).map(n.removeItem.bind(n))}function wr(){[window.sessionStorage,window.localStorage].map(n=>pn(n))}function _r(){[window.sessionStorage,window.localStorage].map(n=>pn(n,e=>!e.startsWith(br.default.GLOBAL_SCOPE_PERSISTENT)))}let Ne;const mn=[];function to(){var n;return Ne===void 0&&(Ne=(n=document.head.dataset.requesttoken)!=null?n:null),Ne}function no(n){mn.push(n)}hr("csrf-token-update",n=>{Ne=n.token,mn.forEach(e=>{try{e(Ne)}catch(r){console.error("Error updating CSRF token observer",r)}})}),Lr("public").persist().build();let ae;const zt=(n,e)=>n?n.getAttribute(e):null;function ro(){if(ae!==void 0)return ae;const n=document==null?void 0:document.getElementsByTagName("head")[0];if(!n)return null;const e=zt(n,"data-user");return e===null?(ae=null,ae):(ae={uid:e,displayName:zt(n,"data-user-displayname"),isAdmin:!!window._oc_isadmin},ae)}const{entries:fn,setPrototypeOf:Xt,isFrozen:Sr,getPrototypeOf:Cr,getOwnPropertyDescriptor:Dr}=Object;let{freeze:O,seal:C,create:dn}=Object,{apply:lt,construct:ct}=typeof Reflect<"u"&&Reflect;O||(O=function(n){return n}),C||(C=function(n){return n}),lt||(lt=function(n,e,r){return n.apply(e,r)}),ct||(ct=function(n,e){return new n(...e)});const we=w(Array.prototype.forEach),Wt=w(Array.prototype.pop),de=w(Array.prototype.push),De=w(String.prototype.toLowerCase),Qe=w(String.prototype.toString),Vt=w(String.prototype.match),Ee=w(String.prototype.replace),Mr=w(String.prototype.indexOf),Pr=w(String.prototype.trim),M=w(Object.prototype.hasOwnProperty),L=w(RegExp.prototype.test),he=$r(TypeError);function w(n){return function(e){for(var r=arguments.length,o=new Array(r>1?r-1:0),c=1;c<r;c++)o[c-1]=arguments[c];return lt(n,e,o)}}function $r(n){return function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return ct(n,r)}}function m(n,e){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:De;Xt&&Xt(n,null);let o=e.length;for(;o--;){let c=e[o];if(typeof c=="string"){const p=r(c);p!==c&&(Sr(e)||(e[o]=p),c=p)}n[c]=!0}return n}function kr(n){for(let e=0;e<n.length;e++)M(n,e)||(n[e]=null);return n}function Z(n){const e=dn(null);for(const[r,o]of fn(n))M(n,r)&&(Array.isArray(o)?e[r]=kr(o):o&&typeof o=="object"&&o.constructor===Object?e[r]=Z(o):e[r]=o);return e}function ge(n,e){for(;n!==null;){const o=Dr(n,e);if(o){if(o.get)return w(o.get);if(typeof o.value=="function")return w(o.value)}n=Cr(n)}function r(){return null}return r}const Yt=O(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),et=O(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),tt=O(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),xr=O(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),nt=O(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Ur=O(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),qt=O(["#text"]),Kt=O(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),rt=O(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Zt=O(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),_e=O(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Fr=C(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Gr=C(/<%[\w\W]*|[\w\W]*%>/gm),Hr=C(/\${[\w\W]*}/gm),jr=C(/^data-[\-\w.\u00B7-\uFFFF]/),Br=C(/^aria-[\-\w]+$/),En=C(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),zr=C(/^(?:\w+script|data):/i),Xr=C(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),hn=C(/^html$/i),Wr=C(/^[a-z][.\w]*(-[.\w]+)+$/i);var Jt=Object.freeze({__proto__:null,MUSTACHE_EXPR:Fr,ERB_EXPR:Gr,TMPLIT_EXPR:Hr,DATA_ATTR:jr,ARIA_ATTR:Br,IS_ALLOWED_URI:En,IS_SCRIPT_OR_DATA:zr,ATTR_WHITESPACE:Xr,DOCTYPE_NAME:hn,CUSTOM_ELEMENT:Wr});const Te={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Vr=function(){return typeof window>"u"?null:window},Yr=function(n,e){if(typeof n!="object"||typeof n.createPolicy!="function")return null;let r=null;const o="data-tt-policy-suffix";e&&e.hasAttribute(o)&&(r=e.getAttribute(o));const c="dompurify"+(r?"#"+r:"");try{return n.createPolicy(c,{createHTML(p){return p},createScriptURL(p){return p}})}catch{return console.warn("TrustedTypes policy "+c+" could not be created."),null}};function gn(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Vr();const e=t=>gn(t);if(e.version="3.1.7",e.removed=[],!n||!n.document||n.document.nodeType!==Te.document)return e.isSupported=!1,e;let{document:r}=n;const o=r,c=o.currentScript,{DocumentFragment:p,HTMLTemplateElement:R,Node:P,Element:a,NodeFilter:i,NamedNodeMap:Y=n.NamedNodeMap||n.MozNamedAttrMap,HTMLFormElement:_,DOMParser:$,trustedTypes:k}=n,u=a.prototype,D=ge(u,"cloneNode"),b=ge(u,"remove"),v=ge(u,"nextSibling"),$e=ge(u,"childNodes"),x=ge(u,"parentNode");if(typeof R=="function"){const t=r.createElement("template");t.content&&t.content.ownerDocument&&(r=t.content.ownerDocument)}let A,ce="";const{implementation:ke,createNodeIterator:Nn,createDocumentFragment:In,getElementsByTagName:Rn}=r,{importNode:An}=o;let U={};e.isSupported=typeof fn=="function"&&typeof x=="function"&&ke&&ke.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:xe,ERB_EXPR:Ue,TMPLIT_EXPR:Fe,DATA_ATTR:yn,ARIA_ATTR:Ln,IS_SCRIPT_OR_DATA:On,ATTR_WHITESPACE:pt,CUSTOM_ELEMENT:bn}=Jt;let{IS_ALLOWED_URI:mt}=Jt,g=null;const ft=m({},[...Yt,...et,...tt,...nt,...qt]);let T=null;const dt=m({},[...Kt,...rt,...Zt,..._e]);let d=Object.seal(dn(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ue=null,Ge=null,Et=!0,He=!0,ht=!1,gt=!0,Q=!1,je=!0,q=!1,Be=!1,ze=!1,ee=!1,Re=!1,Ae=!1,Tt=!0,Nt=!1;const vn="user-content-";let Xe=!0,pe=!1,te={},ne=null;const It=m({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Rt=null;const At=m({},["audio","video","img","source","image","track"]);let We=null;const yt=m({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ye="http://www.w3.org/1998/Math/MathML",Le="http://www.w3.org/2000/svg",B="http://www.w3.org/1999/xhtml";let re=B,Ve=!1,Ye=null;const wn=m({},[ye,Le,B],Qe);let me=null;const _n=["application/xhtml+xml","text/html"],Sn="text/html";let N=null,oe=null;const Cn=r.createElement("form"),Lt=function(t){return t instanceof RegExp||t instanceof Function},qe=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(oe&&oe===t)){if((!t||typeof t!="object")&&(t={}),t=Z(t),me=_n.indexOf(t.PARSER_MEDIA_TYPE)===-1?Sn:t.PARSER_MEDIA_TYPE,N=me==="application/xhtml+xml"?Qe:De,g=M(t,"ALLOWED_TAGS")?m({},t.ALLOWED_TAGS,N):ft,T=M(t,"ALLOWED_ATTR")?m({},t.ALLOWED_ATTR,N):dt,Ye=M(t,"ALLOWED_NAMESPACES")?m({},t.ALLOWED_NAMESPACES,Qe):wn,We=M(t,"ADD_URI_SAFE_ATTR")?m(Z(yt),t.ADD_URI_SAFE_ATTR,N):yt,Rt=M(t,"ADD_DATA_URI_TAGS")?m(Z(At),t.ADD_DATA_URI_TAGS,N):At,ne=M(t,"FORBID_CONTENTS")?m({},t.FORBID_CONTENTS,N):It,ue=M(t,"FORBID_TAGS")?m({},t.FORBID_TAGS,N):{},Ge=M(t,"FORBID_ATTR")?m({},t.FORBID_ATTR,N):{},te=M(t,"USE_PROFILES")?t.USE_PROFILES:!1,Et=t.ALLOW_ARIA_ATTR!==!1,He=t.ALLOW_DATA_ATTR!==!1,ht=t.ALLOW_UNKNOWN_PROTOCOLS||!1,gt=t.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Q=t.SAFE_FOR_TEMPLATES||!1,je=t.SAFE_FOR_XML!==!1,q=t.WHOLE_DOCUMENT||!1,ee=t.RETURN_DOM||!1,Re=t.RETURN_DOM_FRAGMENT||!1,Ae=t.RETURN_TRUSTED_TYPE||!1,ze=t.FORCE_BODY||!1,Tt=t.SANITIZE_DOM!==!1,Nt=t.SANITIZE_NAMED_PROPS||!1,Xe=t.KEEP_CONTENT!==!1,pe=t.IN_PLACE||!1,mt=t.ALLOWED_URI_REGEXP||En,re=t.NAMESPACE||B,d=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&Lt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(d.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&Lt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(d.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(d.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Q&&(He=!1),Re&&(ee=!0),te&&(g=m({},qt),T=[],te.html===!0&&(m(g,Yt),m(T,Kt)),te.svg===!0&&(m(g,et),m(T,rt),m(T,_e)),te.svgFilters===!0&&(m(g,tt),m(T,rt),m(T,_e)),te.mathMl===!0&&(m(g,nt),m(T,Zt),m(T,_e))),t.ADD_TAGS&&(g===ft&&(g=Z(g)),m(g,t.ADD_TAGS,N)),t.ADD_ATTR&&(T===dt&&(T=Z(T)),m(T,t.ADD_ATTR,N)),t.ADD_URI_SAFE_ATTR&&m(We,t.ADD_URI_SAFE_ATTR,N),t.FORBID_CONTENTS&&(ne===It&&(ne=Z(ne)),m(ne,t.FORBID_CONTENTS,N)),Xe&&(g["#text"]=!0),q&&m(g,["html","head","body"]),g.table&&(m(g,["tbody"]),delete ue.tbody),t.TRUSTED_TYPES_POLICY){if(typeof t.TRUSTED_TYPES_POLICY.createHTML!="function")throw he('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof t.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw he('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');A=t.TRUSTED_TYPES_POLICY,ce=A.createHTML("")}else A===void 0&&(A=Yr(k,c)),A!==null&&typeof ce=="string"&&(ce=A.createHTML(""));O&&O(t),oe=t}},Ot=m({},["mi","mo","mn","ms","mtext"]),bt=m({},["annotation-xml"]),Dn=m({},["title","style","font","a","script"]),vt=m({},[...et,...tt,...xr]),wt=m({},[...nt,...Ur]),Mn=function(t){let l=x(t);(!l||!l.tagName)&&(l={namespaceURI:re,tagName:"template"});const s=De(t.tagName),f=De(l.tagName);return Ye[t.namespaceURI]?t.namespaceURI===Le?l.namespaceURI===B?s==="svg":l.namespaceURI===ye?s==="svg"&&(f==="annotation-xml"||Ot[f]):!!vt[s]:t.namespaceURI===ye?l.namespaceURI===B?s==="math":l.namespaceURI===Le?s==="math"&&bt[f]:!!wt[s]:t.namespaceURI===B?l.namespaceURI===Le&&!bt[f]||l.namespaceURI===ye&&!Ot[f]?!1:!wt[s]&&(Dn[s]||!vt[s]):!!(me==="application/xhtml+xml"&&Ye[t.namespaceURI]):!1},K=function(t){de(e.removed,{element:t});try{x(t).removeChild(t)}catch{b(t)}},Oe=function(t,l){try{de(e.removed,{attribute:l.getAttributeNode(t),from:l})}catch{de(e.removed,{attribute:null,from:l})}if(l.removeAttribute(t),t==="is"&&!T[t])if(ee||Re)try{K(l)}catch{}else try{l.setAttribute(t,"")}catch{}},_t=function(t){let l=null,s=null;if(ze)t="<remove></remove>"+t;else{const h=Vt(t,/^[\r\n\t ]+/);s=h&&h[0]}me==="application/xhtml+xml"&&re===B&&(t='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+t+"</body></html>");const f=A?A.createHTML(t):t;if(re===B)try{l=new $().parseFromString(f,me)}catch{}if(!l||!l.documentElement){l=ke.createDocument(re,"template",null);try{l.documentElement.innerHTML=Ve?ce:f}catch{}}const I=l.body||l.documentElement;return t&&s&&I.insertBefore(r.createTextNode(s),I.childNodes[0]||null),re===B?Rn.call(l,q?"html":"body")[0]:q?l.documentElement:I},St=function(t){return Nn.call(t.ownerDocument||t,t,i.SHOW_ELEMENT|i.SHOW_COMMENT|i.SHOW_TEXT|i.SHOW_PROCESSING_INSTRUCTION|i.SHOW_CDATA_SECTION,null)},Ct=function(t){return t instanceof _&&(typeof t.nodeName!="string"||typeof t.textContent!="string"||typeof t.removeChild!="function"||!(t.attributes instanceof Y)||typeof t.removeAttribute!="function"||typeof t.setAttribute!="function"||typeof t.namespaceURI!="string"||typeof t.insertBefore!="function"||typeof t.hasChildNodes!="function")},Dt=function(t){return typeof P=="function"&&t instanceof P},z=function(t,l,s){U[t]&&we(U[t],f=>{f.call(e,l,s,oe)})},Mt=function(t){let l=null;if(z("beforeSanitizeElements",t,null),Ct(t))return K(t),!0;const s=N(t.nodeName);if(z("uponSanitizeElement",t,{tagName:s,allowedTags:g}),t.hasChildNodes()&&!Dt(t.firstElementChild)&&L(/<[/\w]/g,t.innerHTML)&&L(/<[/\w]/g,t.textContent)||t.nodeType===Te.progressingInstruction||je&&t.nodeType===Te.comment&&L(/<[/\w]/g,t.data))return K(t),!0;if(!g[s]||ue[s]){if(!ue[s]&&$t(s)&&(d.tagNameCheck instanceof RegExp&&L(d.tagNameCheck,s)||d.tagNameCheck instanceof Function&&d.tagNameCheck(s)))return!1;if(Xe&&!ne[s]){const f=x(t)||t.parentNode,I=$e(t)||t.childNodes;if(I&&f){const h=I.length;for(let X=h-1;X>=0;--X){const S=D(I[X],!0);S.__removalCount=(t.__removalCount||0)+1,f.insertBefore(S,v(t))}}}return K(t),!0}return t instanceof a&&!Mn(t)||(s==="noscript"||s==="noembed"||s==="noframes")&&L(/<\/no(script|embed|frames)/i,t.innerHTML)?(K(t),!0):(Q&&t.nodeType===Te.text&&(l=t.textContent,we([xe,Ue,Fe],f=>{l=Ee(l,f," ")}),t.textContent!==l&&(de(e.removed,{element:t.cloneNode()}),t.textContent=l)),z("afterSanitizeElements",t,null),!1)},Pt=function(t,l,s){if(Tt&&(l==="id"||l==="name")&&(s in r||s in Cn))return!1;if(!(He&&!Ge[l]&&L(yn,l))&&!(Et&&L(Ln,l))){if(!T[l]||Ge[l]){if(!($t(t)&&(d.tagNameCheck instanceof RegExp&&L(d.tagNameCheck,t)||d.tagNameCheck instanceof Function&&d.tagNameCheck(t))&&(d.attributeNameCheck instanceof RegExp&&L(d.attributeNameCheck,l)||d.attributeNameCheck instanceof Function&&d.attributeNameCheck(l))||l==="is"&&d.allowCustomizedBuiltInElements&&(d.tagNameCheck instanceof RegExp&&L(d.tagNameCheck,s)||d.tagNameCheck instanceof Function&&d.tagNameCheck(s))))return!1}else if(!We[l]&&!L(mt,Ee(s,pt,""))&&!((l==="src"||l==="xlink:href"||l==="href")&&t!=="script"&&Mr(s,"data:")===0&&Rt[t])&&!(ht&&!L(On,Ee(s,pt,"")))&&s)return!1}return!0},$t=function(t){return t!=="annotation-xml"&&Vt(t,bn)},kt=function(t){z("beforeSanitizeAttributes",t,null);const{attributes:l}=t;if(!l)return;const s={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:T};let f=l.length;for(;f--;){const I=l[f],{name:h,namespaceURI:X,value:S}=I,F=N(h);let y=h==="value"?S:Pr(S);if(s.attrName=F,s.attrValue=y,s.keepAttr=!0,s.forceKeepAttr=void 0,z("uponSanitizeAttribute",t,s),y=s.attrValue,s.forceKeepAttr||(Oe(h,t),!s.keepAttr))continue;if(!gt&&L(/\/>/i,y)){Oe(h,t);continue}Q&&we([xe,Ue,Fe],$n=>{y=Ee(y,$n," ")});const xt=N(t.nodeName);if(Pt(xt,F,y)){if(Nt&&(F==="id"||F==="name")&&(Oe(h,t),y=vn+y),je&&L(/((--!?|])>)|<\/(style|title)/i,y)){Oe(h,t);continue}if(A&&typeof k=="object"&&typeof k.getAttributeType=="function"&&!X)switch(k.getAttributeType(xt,F)){case"TrustedHTML":{y=A.createHTML(y);break}case"TrustedScriptURL":{y=A.createScriptURL(y);break}}try{X?t.setAttributeNS(X,h,y):t.setAttribute(h,y),Ct(t)?K(t):Wt(e.removed)}catch{}}}z("afterSanitizeAttributes",t,null)},Pn=function t(l){let s=null;const f=St(l);for(z("beforeSanitizeShadowDOM",l,null);s=f.nextNode();)z("uponSanitizeShadowNode",s,null),!Mt(s)&&(s.content instanceof p&&t(s.content),kt(s));z("afterSanitizeShadowDOM",l,null)};return e.sanitize=function(t){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=null,f=null,I=null,h=null;if(Ve=!t,Ve&&(t="<!-->"),typeof t!="string"&&!Dt(t))if(typeof t.toString=="function"){if(t=t.toString(),typeof t!="string")throw he("dirty is not a string, aborting")}else throw he("toString is not a function");if(!e.isSupported)return t;if(Be||qe(l),e.removed=[],typeof t=="string"&&(pe=!1),pe){if(t.nodeName){const F=N(t.nodeName);if(!g[F]||ue[F])throw he("root node is forbidden and cannot be sanitized in-place")}}else if(t instanceof P)s=_t("<!---->"),f=s.ownerDocument.importNode(t,!0),f.nodeType===Te.element&&f.nodeName==="BODY"||f.nodeName==="HTML"?s=f:s.appendChild(f);else{if(!ee&&!Q&&!q&&t.indexOf("<")===-1)return A&&Ae?A.createHTML(t):t;if(s=_t(t),!s)return ee?null:Ae?ce:""}s&&ze&&K(s.firstChild);const X=St(pe?t:s);for(;I=X.nextNode();)Mt(I)||(I.content instanceof p&&Pn(I.content),kt(I));if(pe)return t;if(ee){if(Re)for(h=In.call(s.ownerDocument);s.firstChild;)h.appendChild(s.firstChild);else h=s;return(T.shadowroot||T.shadowrootmode)&&(h=An.call(o,h,!0)),h}let S=q?s.outerHTML:s.innerHTML;return q&&g["!doctype"]&&s.ownerDocument&&s.ownerDocument.doctype&&s.ownerDocument.doctype.name&&L(hn,s.ownerDocument.doctype.name)&&(S="<!DOCTYPE "+s.ownerDocument.doctype.name+">\n"+S),Q&&we([xe,Ue,Fe],F=>{S=Ee(S,F," ")}),A&&Ae?A.createHTML(S):S},e.setConfig=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};qe(t),Be=!0},e.clearConfig=function(){oe=null,Be=!1},e.isValidAttribute=function(t,l,s){oe||qe({});const f=N(t),I=N(l);return Pt(f,I,s)},e.addHook=function(t,l){typeof l=="function"&&(U[t]=U[t]||[],de(U[t],l))},e.removeHook=function(t){if(U[t])return Wt(U[t])},e.removeHooks=function(t){U[t]&&(U[t]=[])},e.removeAllHooks=function(){U={}},e}var qr=gn(),Kr=/["'&<>]/,Zr=Jr;function Jr(n){var e=""+n,r=Kr.exec(e);if(!r)return e;var o,c="",p=0,R=0;for(p=r.index;p<e.length;p++){switch(e.charCodeAt(p)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 39:o="&#39;";break;case 60:o="&lt;";break;case 62:o="&gt;";break;default:continue}R!==p&&(c+=e.substring(R,p)),R=p+1,c+=o}return R!==p?c+e.substring(R,p):c}const Qt=ut(Zr);function oo(n,e,r){const o=document.querySelector("#initial-state-".concat(n,"-").concat(e));if(o===null){if(r!==void 0)return r;throw new Error("Could not find initial state ".concat(e," of ").concat(n))}try{return JSON.parse(atob(o.value))}catch{throw new Error("Could not parse initial state ".concat(e," of ").concat(n))}}function Tn(n){var e,r,o,c;return{translations:(r=(e=window._oc_l10n_registry_translations)==null?void 0:e[n])!=null?r:{},pluralFunction:(c=(o=window._oc_l10n_registry_plural_functions)==null?void 0:o[n])!=null?c:p=>p}}function ot(n,e,r,o,c){const p={escape:!0,sanitize:!0,...c||{}},R=$=>$,P=p.sanitize?qr.sanitize:R,a=p.escape?Qt:R,i=$=>typeof $=="string"||typeof $=="number",Y=($,k,u)=>$.replace(/%n/g,""+u).replace(/{([^{}]*)}/g,(D,b)=>{if(k===void 0||!(b in k))return a(D);const v=k[b];return i(v)?a("".concat(v)):typeof v=="object"&&i(v.value)?(v.escape!==!1?Qt:R)("".concat(v.value)):a(D)});let _=Tn(n).translations[e]||e;return _=Array.isArray(_)?_[0]:_,P(typeof r=="object"||o!==void 0?Y(_,r,o):_)}function io(n,e,r,o,c,p){const R="_"+e+"_::_"+r+"_",P=Tn(n),a=P.translations[R];if(typeof a<"u"){const i=a;if(Array.isArray(i)){const Y=P.pluralFunction(o);return ot(n,i[Y],c,o,p)}}return o===1?ot(n,e,c,o,p):ot(n,r,c,o,p)}export{io as a,ut as b,eo as c,to as d,ro as g,oo as l,no as o,jn as p,ot as t};