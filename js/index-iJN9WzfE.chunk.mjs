var On=Object.defineProperty;var wn=(n,t,r)=>t in n?On(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r;var Be=(n,t,r)=>wn(n,typeof t!="symbol"?t+"":t,r);var Dr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function tt(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function Sn(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Wt={exports:{}},g=Wt.exports={},G,H;function Ke(){throw new Error("setTimeout has not been defined")}function Ze(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?G=setTimeout:G=Ke}catch{G=Ke}try{typeof clearTimeout=="function"?H=clearTimeout:H=Ze}catch{H=Ze}})();function Yt(n){if(G===setTimeout)return setTimeout(n,0);if((G===Ke||!G)&&setTimeout)return G=setTimeout,setTimeout(n,0);try{return G(n,0)}catch{try{return G.call(null,n,0)}catch{return G.call(this,n,0)}}}function vn(n){if(H===clearTimeout)return clearTimeout(n);if((H===Ze||!H)&&clearTimeout)return H=clearTimeout,clearTimeout(n);try{return H(n)}catch{try{return H.call(null,n)}catch{return H.call(this,n)}}}var W=[],se=!1,J,be=-1;function Cn(){!se||!J||(se=!1,J.length?W=J.concat(W):be=-1,W.length&&Vt())}function Vt(){if(!se){var n=Yt(Cn);se=!0;for(var t=W.length;t;){for(J=W,W=[];++be<t;)J&&J[be].run();be=-1,t=W.length}J=null,se=!1,vn(n)}}g.nextTick=function(n){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];W.push(new qt(n,t)),W.length===1&&!se&&Yt(Vt)};function qt(n,t){this.fun=n,this.array=t}qt.prototype.run=function(){this.fun.apply(null,this.array)},g.title="browser",g.browser=!0,g.env={},g.argv=[],g.version="",g.versions={};function j(){}g.on=j,g.addListener=j,g.once=j,g.off=j,g.removeListener=j,g.removeAllListeners=j,g.emit=j,g.prependListener=j,g.prependOnceListener=j,g.listeners=function(n){return[]},g.binding=function(n){throw new Error("process.binding is not supported")},g.cwd=function(){return"/"},g.chdir=function(n){throw new Error("process.chdir is not supported")},g.umask=function(){return 0};var Dn=Wt.exports;const Mn=Sn(Dn);var ze={};const $n=typeof Mn=="object"&&ze&&ze.NODE_DEBUG&&/\bsemver\b/i.test(ze.NODE_DEBUG)?(...n)=>console.error("SEMVER",...n):()=>{};var Kt=$n;const Pn="2.0.0",Zt=256,kn=Number.MAX_SAFE_INTEGER||9007199254740991,xn=16,Un=Zt-6,Fn=["major","premajor","minor","preminor","patch","prepatch","prerelease"];var Jt={MAX_LENGTH:Zt,MAX_SAFE_COMPONENT_LENGTH:xn,MAX_SAFE_BUILD_LENGTH:Un,MAX_SAFE_INTEGER:kn,RELEASE_TYPES:Fn,SEMVER_SPEC_VERSION:Pn,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2},Je={exports:{}};(function(n,t){const{MAX_SAFE_COMPONENT_LENGTH:r,MAX_SAFE_BUILD_LENGTH:o,MAX_LENGTH:c}=Jt,p=Kt;t=n.exports={};const A=t.re=[],P=t.safeRe=[],s=t.src=[],a=t.t={};let V=0;const v="[a-zA-Z0-9-]",k=[["\\s",1],["\\d",c],[v,o]],x=M=>{for(const[y,L]of k)M=M.split("".concat(y,"*")).join("".concat(y,"{0,").concat(L,"}")).split("".concat(y,"+")).join("".concat(y,"{1,").concat(L,"}"));return M},u=(M,y,L)=>{const q=x(y),d=V++;p(M,d,y),a[M]=d,s[d]=y,A[d]=new RegExp(y,L?"g":void 0),P[d]=new RegExp(q,L?"g":void 0)};u("NUMERICIDENTIFIER","0|[1-9]\\d*"),u("NUMERICIDENTIFIERLOOSE","\\d+"),u("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-]".concat(v,"*")),u("MAINVERSION","(".concat(s[a.NUMERICIDENTIFIER],")\\.(").concat(s[a.NUMERICIDENTIFIER],")\\.(").concat(s[a.NUMERICIDENTIFIER],")")),u("MAINVERSIONLOOSE","(".concat(s[a.NUMERICIDENTIFIERLOOSE],")\\.(").concat(s[a.NUMERICIDENTIFIERLOOSE],")\\.(").concat(s[a.NUMERICIDENTIFIERLOOSE],")")),u("PRERELEASEIDENTIFIER","(?:".concat(s[a.NUMERICIDENTIFIER],"|").concat(s[a.NONNUMERICIDENTIFIER],")")),u("PRERELEASEIDENTIFIERLOOSE","(?:".concat(s[a.NUMERICIDENTIFIERLOOSE],"|").concat(s[a.NONNUMERICIDENTIFIER],")")),u("PRERELEASE","(?:-(".concat(s[a.PRERELEASEIDENTIFIER],"(?:\\.").concat(s[a.PRERELEASEIDENTIFIER],")*))")),u("PRERELEASELOOSE","(?:-?(".concat(s[a.PRERELEASEIDENTIFIERLOOSE],"(?:\\.").concat(s[a.PRERELEASEIDENTIFIERLOOSE],")*))")),u("BUILDIDENTIFIER","".concat(v,"+")),u("BUILD","(?:\\+(".concat(s[a.BUILDIDENTIFIER],"(?:\\.").concat(s[a.BUILDIDENTIFIER],")*))")),u("FULLPLAIN","v?".concat(s[a.MAINVERSION]).concat(s[a.PRERELEASE],"?").concat(s[a.BUILD],"?")),u("FULL","^".concat(s[a.FULLPLAIN],"$")),u("LOOSEPLAIN","[v=\\s]*".concat(s[a.MAINVERSIONLOOSE]).concat(s[a.PRERELEASELOOSE],"?").concat(s[a.BUILD],"?")),u("LOOSE","^".concat(s[a.LOOSEPLAIN],"$")),u("GTLT","((?:<|>)?=?)"),u("XRANGEIDENTIFIERLOOSE","".concat(s[a.NUMERICIDENTIFIERLOOSE],"|x|X|\\*")),u("XRANGEIDENTIFIER","".concat(s[a.NUMERICIDENTIFIER],"|x|X|\\*")),u("XRANGEPLAIN","[v=\\s]*(".concat(s[a.XRANGEIDENTIFIER],")(?:\\.(").concat(s[a.XRANGEIDENTIFIER],")(?:\\.(").concat(s[a.XRANGEIDENTIFIER],")(?:").concat(s[a.PRERELEASE],")?").concat(s[a.BUILD],"?)?)?")),u("XRANGEPLAINLOOSE","[v=\\s]*(".concat(s[a.XRANGEIDENTIFIERLOOSE],")(?:\\.(").concat(s[a.XRANGEIDENTIFIERLOOSE],")(?:\\.(").concat(s[a.XRANGEIDENTIFIERLOOSE],")(?:").concat(s[a.PRERELEASELOOSE],")?").concat(s[a.BUILD],"?)?)?")),u("XRANGE","^".concat(s[a.GTLT],"\\s*").concat(s[a.XRANGEPLAIN],"$")),u("XRANGELOOSE","^".concat(s[a.GTLT],"\\s*").concat(s[a.XRANGEPLAINLOOSE],"$")),u("COERCEPLAIN","(^|[^\\d])(\\d{1,".concat(r,"})(?:\\.(\\d{1,").concat(r,"}))?(?:\\.(\\d{1,").concat(r,"}))?")),u("COERCE","".concat(s[a.COERCEPLAIN],"(?:$|[^\\d])")),u("COERCEFULL",s[a.COERCEPLAIN]+"(?:".concat(s[a.PRERELEASE],")?(?:").concat(s[a.BUILD],")?(?:$|[^\\d])")),u("COERCERTL",s[a.COERCE],!0),u("COERCERTLFULL",s[a.COERCEFULL],!0),u("LONETILDE","(?:~>?)"),u("TILDETRIM","(\\s*)".concat(s[a.LONETILDE],"\\s+"),!0),t.tildeTrimReplace="$1~",u("TILDE","^".concat(s[a.LONETILDE]).concat(s[a.XRANGEPLAIN],"$")),u("TILDELOOSE","^".concat(s[a.LONETILDE]).concat(s[a.XRANGEPLAINLOOSE],"$")),u("LONECARET","(?:\\^)"),u("CARETTRIM","(\\s*)".concat(s[a.LONECARET],"\\s+"),!0),t.caretTrimReplace="$1^",u("CARET","^".concat(s[a.LONECARET]).concat(s[a.XRANGEPLAIN],"$")),u("CARETLOOSE","^".concat(s[a.LONECARET]).concat(s[a.XRANGEPLAINLOOSE],"$")),u("COMPARATORLOOSE","^".concat(s[a.GTLT],"\\s*(").concat(s[a.LOOSEPLAIN],")$|^$")),u("COMPARATOR","^".concat(s[a.GTLT],"\\s*(").concat(s[a.FULLPLAIN],")$|^$")),u("COMPARATORTRIM","(\\s*)".concat(s[a.GTLT],"\\s*(").concat(s[a.LOOSEPLAIN],"|").concat(s[a.XRANGEPLAIN],")"),!0),t.comparatorTrimReplace="$1$2$3",u("HYPHENRANGE","^\\s*(".concat(s[a.XRANGEPLAIN],")\\s+-\\s+(").concat(s[a.XRANGEPLAIN],")\\s*$")),u("HYPHENRANGELOOSE","^\\s*(".concat(s[a.XRANGEPLAINLOOSE],")\\s+-\\s+(").concat(s[a.XRANGEPLAINLOOSE],")\\s*$")),u("STAR","(<|>)?=?\\s*\\*"),u("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),u("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")})(Je,Je.exports);var Gn=Je.exports;const Hn=Object.freeze({loose:!0}),Bn=Object.freeze({}),zn=n=>n?typeof n!="object"?Hn:n:Bn;var Xn=zn;const vt=/^[0-9]+$/,Qt=(n,t)=>{const r=vt.test(n),o=vt.test(t);return r&&o&&(n=+n,t=+t),n===t?0:r&&!o?-1:o&&!r?1:n<t?-1:1},jn=(n,t)=>Qt(t,n);var Wn={compareIdentifiers:Qt,rcompareIdentifiers:jn};const Re=Kt,{MAX_LENGTH:Ct,MAX_SAFE_INTEGER:Ae}=Jt,{safeRe:Dt,t:Mt}=Gn,Yn=Xn,{compareIdentifiers:ie}=Wn;let Vn=class F{constructor(t,r){if(r=Yn(r),t instanceof F){if(t.loose===!!r.loose&&t.includePrerelease===!!r.includePrerelease)return t;t=t.version}else if(typeof t!="string")throw new TypeError('Invalid version. Must be a string. Got type "'.concat(typeof t,'".'));if(t.length>Ct)throw new TypeError("version is longer than ".concat(Ct," characters"));Re("SemVer",t,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;const o=t.trim().match(r.loose?Dt[Mt.LOOSE]:Dt[Mt.FULL]);if(!o)throw new TypeError("Invalid Version: ".concat(t));if(this.raw=t,this.major=+o[1],this.minor=+o[2],this.patch=+o[3],this.major>Ae||this.major<0)throw new TypeError("Invalid major version");if(this.minor>Ae||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>Ae||this.patch<0)throw new TypeError("Invalid patch version");o[4]?this.prerelease=o[4].split(".").map(c=>{if(/^[0-9]+$/.test(c)){const p=+c;if(p>=0&&p<Ae)return p}return c}):this.prerelease=[],this.build=o[5]?o[5].split("."):[],this.format()}format(){return this.version="".concat(this.major,".").concat(this.minor,".").concat(this.patch),this.prerelease.length&&(this.version+="-".concat(this.prerelease.join("."))),this.version}toString(){return this.version}compare(t){if(Re("SemVer.compare",this.version,this.options,t),!(t instanceof F)){if(typeof t=="string"&&t===this.version)return 0;t=new F(t,this.options)}return t.version===this.version?0:this.compareMain(t)||this.comparePre(t)}compareMain(t){return t instanceof F||(t=new F(t,this.options)),ie(this.major,t.major)||ie(this.minor,t.minor)||ie(this.patch,t.patch)}comparePre(t){if(t instanceof F||(t=new F(t,this.options)),this.prerelease.length&&!t.prerelease.length)return-1;if(!this.prerelease.length&&t.prerelease.length)return 1;if(!this.prerelease.length&&!t.prerelease.length)return 0;let r=0;do{const o=this.prerelease[r],c=t.prerelease[r];if(Re("prerelease compare",r,o,c),o===void 0&&c===void 0)return 0;if(c===void 0)return 1;if(o===void 0)return-1;if(o!==c)return ie(o,c)}while(++r)}compareBuild(t){t instanceof F||(t=new F(t,this.options));let r=0;do{const o=this.build[r],c=t.build[r];if(Re("build compare",r,o,c),o===void 0&&c===void 0)return 0;if(c===void 0)return 1;if(o===void 0)return-1;if(o!==c)return ie(o,c)}while(++r)}inc(t,r,o){switch(t){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r,o);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r,o);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r,o),this.inc("pre",r,o);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r,o),this.inc("pre",r,o);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const c=Number(o)?1:0;if(!r&&o===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[c];else{let p=this.prerelease.length;for(;--p>=0;)typeof this.prerelease[p]=="number"&&(this.prerelease[p]++,p=-2);if(p===-1){if(r===this.prerelease.join(".")&&o===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(c)}}if(r){let p=[r,c];o===!1&&(p=[r]),ie(this.prerelease[0],r)===0?isNaN(this.prerelease[1])&&(this.prerelease=p):this.prerelease=p}break}default:throw new Error("invalid increment argument: ".concat(t))}return this.raw=this.format(),this.build.length&&(this.raw+="+".concat(this.build.join("."))),this}};var en=Vn;const $t=en,qn=(n,t,r=!1)=>{if(n instanceof $t)return n;try{return new $t(n,t)}catch(o){if(!r)return null;throw o}};var Kn=qn;const Zn=Kn,Jn=(n,t)=>{const r=Zn(n,t);return r?r.version:null};var Qn=Jn;const er=tt(Qn),tr=en,nr=(n,t)=>new tr(n,t).major;var rr=nr;const Pt=tt(rr);class or{constructor(t){Be(this,"bus");typeof t.getVersion!="function"||!er(t.getVersion())?console.warn("Proxying an event bus with an unknown or invalid version"):Pt(t.getVersion())!==Pt(this.getVersion())&&console.warn("Proxying an event bus of version "+t.getVersion()+" with "+this.getVersion()),this.bus=t}getVersion(){return"3.3.1"}subscribe(t,r){this.bus.subscribe(t,r)}unsubscribe(t,r){this.bus.unsubscribe(t,r)}emit(t,r){this.bus.emit(t,r)}}class ir{constructor(){Be(this,"handlers",new Map)}getVersion(){return"3.3.1"}subscribe(t,r){this.handlers.set(t,(this.handlers.get(t)||[]).concat(r))}unsubscribe(t,r){this.handlers.set(t,(this.handlers.get(t)||[]).filter(o=>o!==r))}emit(t,r){(this.handlers.get(t)||[]).forEach(o=>{try{o(r)}catch(c){console.error("could not invoke event listener",c)}})}}let me=null;function ar(){var n;return me!==null?me:typeof window>"u"?new Proxy({},{get:()=>()=>console.error("Window not available, EventBus can not be established!")}):((n=window.OC)!=null&&n._eventBus&&typeof window._nc_event_bus>"u"&&(console.warn("found old event bus instance at OC._eventBus. Update your version!"),window._nc_event_bus=window.OC._eventBus),typeof(window==null?void 0:window._nc_event_bus)<"u"?me=new or(window._nc_event_bus):me=window._nc_event_bus=new ir,me)}function sr(n,t){ar().subscribe(n,t)}let he;const tn=[];function Mr(){if(he===void 0){const n=document==null?void 0:document.getElementsByTagName("head")[0];he=n?n.getAttribute("data-requesttoken"):null}return he}function $r(n){tn.push(n)}sr("csrf-token-update",n=>{he=n.token,tn.forEach(t=>{try{t(he)}catch(r){console.error("error updating CSRF token observer",r)}})});let ae;const kt=(n,t)=>n?n.getAttribute(t):null;function Pr(){if(ae!==void 0)return ae;const n=document==null?void 0:document.getElementsByTagName("head")[0];if(!n)return null;const t=kt(n,"data-user");return t===null?(ae=null,ae):(ae={uid:t,displayName:kt(n,"data-user-displayname"),isAdmin:!!window._oc_isadmin},ae)}const{entries:nn,setPrototypeOf:xt,isFrozen:lr,getPrototypeOf:cr,getOwnPropertyDescriptor:ur}=Object;let{freeze:_,seal:D,create:rn}=Object,{apply:Qe,construct:et}=typeof Reflect<"u"&&Reflect;_||(_=function(n){return n}),D||(D=function(n){return n}),Qe||(Qe=function(n,t,r){return n.apply(t,r)}),et||(et=function(n,t){return new n(...t)});const _e=S(Array.prototype.forEach),Ut=S(Array.prototype.pop),fe=S(Array.prototype.push),Oe=S(String.prototype.toLowerCase),Xe=S(String.prototype.toString),Ft=S(String.prototype.match),Ee=S(String.prototype.replace),pr=S(String.prototype.indexOf),mr=S(String.prototype.trim),$=S(Object.prototype.hasOwnProperty),w=S(RegExp.prototype.test),de=fr(TypeError);function S(n){return function(t){for(var r=arguments.length,o=new Array(r>1?r-1:0),c=1;c<r;c++)o[c-1]=arguments[c];return Qe(n,t,o)}}function fr(n){return function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return et(n,r)}}function m(n,t){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Oe;xt&&xt(n,null);let o=t.length;for(;o--;){let c=t[o];if(typeof c=="string"){const p=r(c);p!==c&&(lr(t)||(t[o]=p),c=p)}n[c]=!0}return n}function Er(n){for(let t=0;t<n.length;t++)$(n,t)||(n[t]=null);return n}function Z(n){const t=rn(null);for(const[r,o]of nn(n))$(n,r)&&(Array.isArray(o)?t[r]=Er(o):o&&typeof o=="object"&&o.constructor===Object?t[r]=Z(o):t[r]=o);return t}function ye(n,t){for(;n!==null;){const o=ur(n,t);if(o){if(o.get)return S(o.get);if(typeof o.value=="function")return S(o.value)}n=cr(n)}function r(){return null}return r}const Gt=_(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),je=_(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),We=_(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),dr=_(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ye=_(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),hr=_(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Ht=_(["#text"]),Bt=_(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Ve=_(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),zt=_(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Le=_(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),gr=D(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Tr=D(/<%[\w\W]*|[\w\W]*%>/gm),Nr=D(/\${[\w\W]*}/gm),Ir=D(/^data-[\-\w.\u00B7-\uFFFF]/),Rr=D(/^aria-[\-\w]+$/),on=D(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ar=D(/^(?:\w+script|data):/i),_r=D(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),an=D(/^html$/i),yr=D(/^[a-z][.\w]*(-[.\w]+)+$/i);var Xt=Object.freeze({__proto__:null,MUSTACHE_EXPR:gr,ERB_EXPR:Tr,TMPLIT_EXPR:Nr,DATA_ATTR:Ir,ARIA_ATTR:Rr,IS_ALLOWED_URI:on,IS_SCRIPT_OR_DATA:Ar,ATTR_WHITESPACE:_r,DOCTYPE_NAME:an,CUSTOM_ELEMENT:yr});const Lr=function(){return typeof window>"u"?null:window},br=function(n,t){if(typeof n!="object"||typeof n.createPolicy!="function")return null;let r=null;const o="data-tt-policy-suffix";t&&t.hasAttribute(o)&&(r=t.getAttribute(o));const c="dompurify"+(r?"#"+r:"");try{return n.createPolicy(c,{createHTML(p){return p},createScriptURL(p){return p}})}catch{return console.warn("TrustedTypes policy "+c+" could not be created."),null}};function sn(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Lr();const t=e=>sn(e);if(t.version="3.1.2",t.removed=[],!n||!n.document||n.document.nodeType!==9)return t.isSupported=!1,t;let{document:r}=n;const o=r,c=o.currentScript,{DocumentFragment:p,HTMLTemplateElement:A,Node:P,Element:s,NodeFilter:a,NamedNodeMap:V=n.NamedNodeMap||n.MozNamedAttrMap,HTMLFormElement:v,DOMParser:k,trustedTypes:x}=n,u=s.prototype,M=ye(u,"cloneNode"),y=ye(u,"nextSibling"),L=ye(u,"childNodes"),q=ye(u,"parentNode");if(typeof A=="function"){const e=r.createElement("template");e.content&&e.content.ownerDocument&&(r=e.content.ownerDocument)}let d,le="";const{implementation:we,createNodeIterator:cn,createDocumentFragment:un,getElementsByTagName:pn}=r,{importNode:mn}=o;let U={};t.isSupported=typeof nn=="function"&&typeof q=="function"&&we&&we.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:Se,ERB_EXPR:ve,TMPLIT_EXPR:Ce,DATA_ATTR:fn,ARIA_ATTR:En,IS_SCRIPT_OR_DATA:dn,ATTR_WHITESPACE:nt,CUSTOM_ELEMENT:hn}=Xt;let{IS_ALLOWED_URI:rt}=Xt,N=null;const ot=m({},[...Gt,...je,...We,...Ye,...Ht]);let I=null;const it=m({},[...Bt,...Ve,...zt,...Le]);let h=Object.seal(rn(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ce=null,De=null,at=!0,Me=!0,st=!1,lt=!0,Q=!1,ct=!0,K=!1,$e=!1,Pe=!1,ee=!1,ge=!1,Te=!1,ut=!0,pt=!1;const gn="user-content-";let ke=!0,ue=!1,te={},ne=null;const mt=m({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let ft=null;const Et=m({},["audio","video","img","source","image","track"]);let xe=null;const dt=m({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ne="http://www.w3.org/1998/Math/MathML",Ie="http://www.w3.org/2000/svg",B="http://www.w3.org/1999/xhtml";let re=B,Ue=!1,Fe=null;const Tn=m({},[Ne,Ie,B],Xe);let pe=null;const Nn=["application/xhtml+xml","text/html"],In="text/html";let R=null,oe=null;const ht=255,Rn=r.createElement("form"),gt=function(e){return e instanceof RegExp||e instanceof Function},Ge=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(oe&&oe===e)){if((!e||typeof e!="object")&&(e={}),e=Z(e),pe=Nn.indexOf(e.PARSER_MEDIA_TYPE)===-1?In:e.PARSER_MEDIA_TYPE,R=pe==="application/xhtml+xml"?Xe:Oe,N=$(e,"ALLOWED_TAGS")?m({},e.ALLOWED_TAGS,R):ot,I=$(e,"ALLOWED_ATTR")?m({},e.ALLOWED_ATTR,R):it,Fe=$(e,"ALLOWED_NAMESPACES")?m({},e.ALLOWED_NAMESPACES,Xe):Tn,xe=$(e,"ADD_URI_SAFE_ATTR")?m(Z(dt),e.ADD_URI_SAFE_ATTR,R):dt,ft=$(e,"ADD_DATA_URI_TAGS")?m(Z(Et),e.ADD_DATA_URI_TAGS,R):Et,ne=$(e,"FORBID_CONTENTS")?m({},e.FORBID_CONTENTS,R):mt,ce=$(e,"FORBID_TAGS")?m({},e.FORBID_TAGS,R):{},De=$(e,"FORBID_ATTR")?m({},e.FORBID_ATTR,R):{},te=$(e,"USE_PROFILES")?e.USE_PROFILES:!1,at=e.ALLOW_ARIA_ATTR!==!1,Me=e.ALLOW_DATA_ATTR!==!1,st=e.ALLOW_UNKNOWN_PROTOCOLS||!1,lt=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Q=e.SAFE_FOR_TEMPLATES||!1,ct=e.SAFE_FOR_XML!==!1,K=e.WHOLE_DOCUMENT||!1,ee=e.RETURN_DOM||!1,ge=e.RETURN_DOM_FRAGMENT||!1,Te=e.RETURN_TRUSTED_TYPE||!1,Pe=e.FORCE_BODY||!1,ut=e.SANITIZE_DOM!==!1,pt=e.SANITIZE_NAMED_PROPS||!1,ke=e.KEEP_CONTENT!==!1,ue=e.IN_PLACE||!1,rt=e.ALLOWED_URI_REGEXP||on,re=e.NAMESPACE||B,h=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&gt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(h.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&gt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(h.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(h.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Q&&(Me=!1),ge&&(ee=!0),te&&(N=m({},Ht),I=[],te.html===!0&&(m(N,Gt),m(I,Bt)),te.svg===!0&&(m(N,je),m(I,Ve),m(I,Le)),te.svgFilters===!0&&(m(N,We),m(I,Ve),m(I,Le)),te.mathMl===!0&&(m(N,Ye),m(I,zt),m(I,Le))),e.ADD_TAGS&&(N===ot&&(N=Z(N)),m(N,e.ADD_TAGS,R)),e.ADD_ATTR&&(I===it&&(I=Z(I)),m(I,e.ADD_ATTR,R)),e.ADD_URI_SAFE_ATTR&&m(xe,e.ADD_URI_SAFE_ATTR,R),e.FORBID_CONTENTS&&(ne===mt&&(ne=Z(ne)),m(ne,e.FORBID_CONTENTS,R)),ke&&(N["#text"]=!0),K&&m(N,["html","head","body"]),N.table&&(m(N,["tbody"]),delete ce.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!="function")throw de('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw de('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');d=e.TRUSTED_TYPES_POLICY,le=d.createHTML("")}else d===void 0&&(d=br(x,c)),d!==null&&typeof le=="string"&&(le=d.createHTML(""));_&&_(e),oe=e}},Tt=m({},["mi","mo","mn","ms","mtext"]),Nt=m({},["foreignobject","annotation-xml"]),An=m({},["title","style","font","a","script"]),It=m({},[...je,...We,...dr]),Rt=m({},[...Ye,...hr]),_n=function(e){let l=q(e);(!l||!l.tagName)&&(l={namespaceURI:re,tagName:"template"});const i=Oe(e.tagName),E=Oe(l.tagName);return Fe[e.namespaceURI]?e.namespaceURI===Ie?l.namespaceURI===B?i==="svg":l.namespaceURI===Ne?i==="svg"&&(E==="annotation-xml"||Tt[E]):!!It[i]:e.namespaceURI===Ne?l.namespaceURI===B?i==="math":l.namespaceURI===Ie?i==="math"&&Nt[E]:!!Rt[i]:e.namespaceURI===B?l.namespaceURI===Ie&&!Nt[E]||l.namespaceURI===Ne&&!Tt[E]?!1:!Rt[i]&&(An[i]||!It[i]):!!(pe==="application/xhtml+xml"&&Fe[e.namespaceURI]):!1},Y=function(e){fe(t.removed,{element:e});try{e.parentNode.removeChild(e)}catch{e.remove()}},He=function(e,l){try{fe(t.removed,{attribute:l.getAttributeNode(e),from:l})}catch{fe(t.removed,{attribute:null,from:l})}if(l.removeAttribute(e),e==="is"&&!I[e])if(ee||ge)try{Y(l)}catch{}else try{l.setAttribute(e,"")}catch{}},At=function(e){let l=null,i=null;if(Pe)e="<remove></remove>"+e;else{const T=Ft(e,/^[\r\n\t ]+/);i=T&&T[0]}pe==="application/xhtml+xml"&&re===B&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const E=d?d.createHTML(e):e;if(re===B)try{l=new k().parseFromString(E,pe)}catch{}if(!l||!l.documentElement){l=we.createDocument(re,"template",null);try{l.documentElement.innerHTML=Ue?le:E}catch{}}const f=l.body||l.documentElement;return e&&i&&f.insertBefore(r.createTextNode(i),f.childNodes[0]||null),re===B?pn.call(l,K?"html":"body")[0]:K?l.documentElement:f},_t=function(e){return cn.call(e.ownerDocument||e,e,a.SHOW_ELEMENT|a.SHOW_COMMENT|a.SHOW_TEXT|a.SHOW_PROCESSING_INSTRUCTION|a.SHOW_CDATA_SECTION,null)},yn=function(e){return e instanceof v&&(typeof e.__depth<"u"&&typeof e.__depth!="number"||typeof e.__removalCount<"u"&&typeof e.__removalCount!="number"||typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof V)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},yt=function(e){return typeof P=="function"&&e instanceof P},z=function(e,l,i){U[e]&&_e(U[e],E=>{E.call(t,l,i,oe)})},Lt=function(e){let l=null;if(z("beforeSanitizeElements",e,null),yn(e))return Y(e),!0;const i=R(e.nodeName);if(z("uponSanitizeElement",e,{tagName:i,allowedTags:N}),e.hasChildNodes()&&!yt(e.firstElementChild)&&w(/<[/\w]/g,e.innerHTML)&&w(/<[/\w]/g,e.textContent)||e.nodeType===7||ct&&e.nodeType===8&&w(/<[/\w]/g,e.data))return Y(e),!0;if(!N[i]||ce[i]){if(!ce[i]&&Ot(i)&&(h.tagNameCheck instanceof RegExp&&w(h.tagNameCheck,i)||h.tagNameCheck instanceof Function&&h.tagNameCheck(i)))return!1;if(ke&&!ne[i]){const E=q(e)||e.parentNode,f=L(e)||e.childNodes;if(f&&E){const T=f.length;for(let X=T-1;X>=0;--X){const C=M(f[X],!0);C.__removalCount=(e.__removalCount||0)+1,E.insertBefore(C,y(e))}}}return Y(e),!0}return e instanceof s&&!_n(e)||(i==="noscript"||i==="noembed"||i==="noframes")&&w(/<\/no(script|embed|frames)/i,e.innerHTML)?(Y(e),!0):(Q&&e.nodeType===3&&(l=e.textContent,_e([Se,ve,Ce],E=>{l=Ee(l,E," ")}),e.textContent!==l&&(fe(t.removed,{element:e.cloneNode()}),e.textContent=l)),z("afterSanitizeElements",e,null),!1)},bt=function(e,l,i){if(ut&&(l==="id"||l==="name")&&(i in r||i in Rn))return!1;if(!(Me&&!De[l]&&w(fn,l))&&!(at&&w(En,l))){if(!I[l]||De[l]){if(!(Ot(e)&&(h.tagNameCheck instanceof RegExp&&w(h.tagNameCheck,e)||h.tagNameCheck instanceof Function&&h.tagNameCheck(e))&&(h.attributeNameCheck instanceof RegExp&&w(h.attributeNameCheck,l)||h.attributeNameCheck instanceof Function&&h.attributeNameCheck(l))||l==="is"&&h.allowCustomizedBuiltInElements&&(h.tagNameCheck instanceof RegExp&&w(h.tagNameCheck,i)||h.tagNameCheck instanceof Function&&h.tagNameCheck(i))))return!1}else if(!xe[l]&&!w(rt,Ee(i,nt,""))&&!((l==="src"||l==="xlink:href"||l==="href")&&e!=="script"&&pr(i,"data:")===0&&ft[e])&&!(st&&!w(dn,Ee(i,nt,"")))&&i)return!1}return!0},Ot=function(e){return e!=="annotation-xml"&&Ft(e,hn)},wt=function(e){z("beforeSanitizeAttributes",e,null);const{attributes:l}=e;if(!l)return;const i={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:I};let E=l.length;for(;E--;){const f=l[E],{name:T,namespaceURI:X,value:C}=f,b=R(T);let O=T==="value"?C:mr(C);if(i.attrName=b,i.attrValue=O,i.keepAttr=!0,i.forceKeepAttr=void 0,z("uponSanitizeAttribute",e,i),O=i.attrValue,i.forceKeepAttr||(He(T,e),!i.keepAttr))continue;if(!lt&&w(/\/>/i,O)){He(T,e);continue}Q&&_e([Se,ve,Ce],bn=>{O=Ee(O,bn," ")});const St=R(e.nodeName);if(bt(St,b,O)){if(pt&&(b==="id"||b==="name")&&(He(T,e),O=gn+O),d&&typeof x=="object"&&typeof x.getAttributeType=="function"&&!X)switch(x.getAttributeType(St,b)){case"TrustedHTML":{O=d.createHTML(O);break}case"TrustedScriptURL":{O=d.createScriptURL(O);break}}try{X?e.setAttributeNS(X,T,O):e.setAttribute(T,O),Ut(t.removed)}catch{}}}z("afterSanitizeAttributes",e,null)},Ln=function e(l){let i=null;const E=_t(l);for(z("beforeSanitizeShadowDOM",l,null);i=E.nextNode();){if(z("uponSanitizeShadowNode",i,null),Lt(i))continue;const f=q(i);i.nodeType===1&&(f&&f.__depth?i.__depth=(i.__removalCount||0)+f.__depth+1:i.__depth=1),i.__depth>=ht&&Y(i),i.content instanceof p&&(i.content.__depth=i.__depth,e(i.content)),wt(i)}z("afterSanitizeShadowDOM",l,null)};return t.sanitize=function(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=null,E=null,f=null,T=null;if(Ue=!e,Ue&&(e="<!-->"),typeof e!="string"&&!yt(e))if(typeof e.toString=="function"){if(e=e.toString(),typeof e!="string")throw de("dirty is not a string, aborting")}else throw de("toString is not a function");if(!t.isSupported)return e;if($e||Ge(l),t.removed=[],typeof e=="string"&&(ue=!1),ue){if(e.nodeName){const b=R(e.nodeName);if(!N[b]||ce[b])throw de("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof P)i=At("<!---->"),E=i.ownerDocument.importNode(e,!0),E.nodeType===1&&E.nodeName==="BODY"||E.nodeName==="HTML"?i=E:i.appendChild(E);else{if(!ee&&!Q&&!K&&e.indexOf("<")===-1)return d&&Te?d.createHTML(e):e;if(i=At(e),!i)return ee?null:Te?le:""}i&&Pe&&Y(i.firstChild);const X=_t(ue?e:i);for(;f=X.nextNode();){if(Lt(f))continue;const b=q(f);f.nodeType===1&&(b&&b.__depth?f.__depth=(f.__removalCount||0)+b.__depth+1:f.__depth=1),f.__depth>=ht&&Y(f),f.content instanceof p&&(f.content.__depth=f.__depth,Ln(f.content)),wt(f)}if(ue)return e;if(ee){if(ge)for(T=un.call(i.ownerDocument);i.firstChild;)T.appendChild(i.firstChild);else T=i;return(I.shadowroot||I.shadowrootmode)&&(T=mn.call(o,T,!0)),T}let C=K?i.outerHTML:i.innerHTML;return K&&N["!doctype"]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&w(an,i.ownerDocument.doctype.name)&&(C="<!DOCTYPE "+i.ownerDocument.doctype.name+">\n"+C),Q&&_e([Se,ve,Ce],b=>{C=Ee(C,b," ")}),d&&Te?d.createHTML(C):C},t.setConfig=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ge(e),$e=!0},t.clearConfig=function(){oe=null,$e=!1},t.isValidAttribute=function(e,l,i){oe||Ge({});const E=R(e),f=R(l);return bt(E,f,i)},t.addHook=function(e,l){typeof l=="function"&&(U[e]=U[e]||[],fe(U[e],l))},t.removeHook=function(e){if(U[e])return Ut(U[e])},t.removeHooks=function(e){U[e]&&(U[e]=[])},t.removeAllHooks=function(){U={}},t}var Or=sn(),wr=/["'&<>]/,Sr=vr;function vr(n){var t=""+n,r=wr.exec(t);if(!r)return t;var o,c="",p=0,A=0;for(p=r.index;p<t.length;p++){switch(t.charCodeAt(p)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 39:o="&#39;";break;case 60:o="&lt;";break;case 62:o="&gt;";break;default:continue}A!==p&&(c+=t.substring(A,p)),A=p+1,c+=o}return A!==p?c+t.substring(A,p):c}const jt=tt(Sr);function kr(n,t,r){const o=document.querySelector("#initial-state-".concat(n,"-").concat(t));if(o===null){if(r!==void 0)return r;throw new Error("Could not find initial state ".concat(t," of ").concat(n))}try{return JSON.parse(atob(o.value))}catch{throw new Error("Could not parse initial state ".concat(t," of ").concat(n))}}function ln(n){var t,r,o,c;return{translations:(r=(t=window._oc_l10n_registry_translations)==null?void 0:t[n])!=null?r:{},pluralFunction:(c=(o=window._oc_l10n_registry_plural_functions)==null?void 0:o[n])!=null?c:p=>p}}function qe(n,t,r,o,c){const p={escape:!0,sanitize:!0,...c||{}},A=k=>k,P=p.sanitize?Or.sanitize:A,s=p.escape?jt:A,a=k=>typeof k=="string"||typeof k=="number",V=(k,x,u)=>k.replace(/%n/g,""+u).replace(/{([^{}]*)}/g,(M,y)=>{if(x===void 0||!(y in x))return s(M);const L=x[y];return a(L)?s("".concat(L)):typeof L=="object"&&a(L.value)?(L.escape!==!1?jt:A)("".concat(L.value)):s(M)});let v=ln(n).translations[t]||t;return v=Array.isArray(v)?v[0]:v,P(typeof r=="object"||o!==void 0?V(v,r,o):v)}function xr(n,t,r,o,c,p){const A="_"+t+"_::_"+r+"_",P=ln(n),s=P.translations[A];if(typeof s<"u"){const a=s;if(Array.isArray(a)){const V=P.pluralFunction(o);return qe(n,a[V],c,o,p)}}return o===1?qe(n,t,c,o,p):qe(n,r,c,o,p)}export{xr as a,Pr as b,Dr as c,Mr as d,$r as e,tt as g,kr as l,Mn as p,qe as t};