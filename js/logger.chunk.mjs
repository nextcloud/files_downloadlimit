/*! third party licenses: js/vendor.LICENSE.txt */
import{a as c}from"./purify.es.chunk.mjs";var o=(s=>(s[s.Debug=0]="Debug",s[s.Info=1]="Info",s[s.Warn=2]="Warn",s[s.Error=3]="Error",s[s.Fatal=4]="Fatal",s))(o||{}),l=Object.defineProperty,u=(s,e,t)=>e in s?l(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,h=(s,e,t)=>(u(s,typeof e!="symbol"?e+"":e,t),t);class g{constructor(e){h(this,"context"),this.context=e||{}}formatMessage(e,t,n){let a="["+o[t].toUpperCase()+"] ";return n&&n.app&&(a+=n.app+": "),typeof e=="string"?a+e:(a+="Unexpected ".concat(e.name),e.message&&(a+=' "'.concat(e.message,'"')),t===o.Debug&&e.stack&&(a+="\n\nStack trace:\n".concat(e.stack)),a)}log(e,t,n){var a,r;if(!(typeof((a=this.context)==null?void 0:a.level)=="number"&&e<((r=this.context)==null?void 0:r.level)))switch(typeof t=="object"&&(n==null?void 0:n.error)===void 0&&(n.error=t),e){case o.Debug:console.debug(this.formatMessage(t,o.Debug,n),n);break;case o.Info:console.info(this.formatMessage(t,o.Info,n),n);break;case o.Warn:console.warn(this.formatMessage(t,o.Warn,n),n);break;case o.Error:console.error(this.formatMessage(t,o.Error,n),n);break;case o.Fatal:default:console.error(this.formatMessage(t,o.Fatal,n),n);break}}debug(e,t){this.log(o.Debug,e,Object.assign({},this.context,t))}info(e,t){this.log(o.Info,e,Object.assign({},this.context,t))}warn(e,t){this.log(o.Warn,e,Object.assign({},this.context,t))}error(e,t){this.log(o.Error,e,Object.assign({},this.context,t))}fatal(e,t){this.log(o.Fatal,e,Object.assign({},this.context,t))}}function d(s){return new g(s)}var b=Object.defineProperty,f=(s,e,t)=>e in s?b(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,i=(s,e,t)=>(f(s,typeof e!="symbol"?e+"":e,t),t);class v{constructor(e){i(this,"context"),i(this,"factory"),this.context={},this.factory=e}setApp(e){return this.context.app=e,this}setLogLevel(e){return this.context.level=e,this}setUid(e){return this.context.uid=e,this}detectUser(){const e=c();return e!==null&&(this.context.uid=e.uid),this}detectLogLevel(){const e=this,t=()=>{var n,a;document.readyState==="complete"||document.readyState==="interactive"?(e.context.level=(a=(n=window._oc_config)==null?void 0:n.loglevel)!=null?a:o.Warn,window._oc_debug&&(e.context.level=o.Debug),document.removeEventListener("readystatechange",t)):document.addEventListener("readystatechange",t)};return t(),this}build(){return this.context.level===void 0&&this.detectLogLevel(),this.factory(this.context)}}function m(){return new v(d)}const x=m().setApp("files_downloadlimit").detectUser().build();export{x as l};