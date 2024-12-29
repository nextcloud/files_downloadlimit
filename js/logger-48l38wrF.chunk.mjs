import{g as c}from"./index-cJwqVMkm.chunk.mjs";var a=(s=>(s[s.Debug=0]="Debug",s[s.Info=1]="Info",s[s.Warn=2]="Warn",s[s.Error=3]="Error",s[s.Fatal=4]="Fatal",s))(a||{}),l=Object.defineProperty,u=(s,e,t)=>e in s?l(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,g=(s,e,t)=>(u(s,e+"",t),t);class h{constructor(e){g(this,"context"),this.context=e||{}}formatMessage(e,t,n){let o="["+a[t].toUpperCase()+"] ";return n&&n.app&&(o+=n.app+": "),typeof e=="string"?o+e:(o+="Unexpected ".concat(e.name),e.message&&(o+=' "'.concat(e.message,'"')),t===a.Debug&&e.stack&&(o+="\n\nStack trace:\n".concat(e.stack)),o)}log(e,t,n){var o,r;if(!(typeof((o=this.context)==null?void 0:o.level)=="number"&&e<((r=this.context)==null?void 0:r.level)))switch(typeof t=="object"&&(n==null?void 0:n.error)===void 0&&(n.error=t),e){case a.Debug:console.debug(this.formatMessage(t,a.Debug,n),n);break;case a.Info:console.info(this.formatMessage(t,a.Info,n),n);break;case a.Warn:console.warn(this.formatMessage(t,a.Warn,n),n);break;case a.Error:console.error(this.formatMessage(t,a.Error,n),n);break;case a.Fatal:default:console.error(this.formatMessage(t,a.Fatal,n),n);break}}debug(e,t){this.log(a.Debug,e,Object.assign({},this.context,t))}info(e,t){this.log(a.Info,e,Object.assign({},this.context,t))}warn(e,t){this.log(a.Warn,e,Object.assign({},this.context,t))}error(e,t){this.log(a.Error,e,Object.assign({},this.context,t))}fatal(e,t){this.log(a.Fatal,e,Object.assign({},this.context,t))}}function d(s){return new h(s)}var b=Object.defineProperty,f=(s,e,t)=>e in s?b(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,i=(s,e,t)=>(f(s,typeof e!="symbol"?e+"":e,t),t);class v{constructor(e){i(this,"context"),i(this,"factory"),this.context={},this.factory=e}setApp(e){return this.context.app=e,this}setLogLevel(e){return this.context.level=e,this}setUid(e){return this.context.uid=e,this}detectUser(){const e=c();return e!==null&&(this.context.uid=e.uid),this}detectLogLevel(){const e=this,t=()=>{var n,o;document.readyState==="complete"||document.readyState==="interactive"?(e.context.level=(o=(n=window._oc_config)==null?void 0:n.loglevel)!=null?o:a.Warn,window._oc_debug&&(e.context.level=a.Debug),document.removeEventListener("readystatechange",t)):document.addEventListener("readystatechange",t)};return t(),this}build(){return this.context.level===void 0&&this.detectLogLevel(),this.factory(this.context)}}function m(){return new v(d)}const x=m().setApp("files_downloadlimit").detectUser().build();export{x as l};