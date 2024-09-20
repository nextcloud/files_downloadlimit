import{l as T,t as m,a as V,g as I}from"./index-fMXldvg_.chunk.mjs";import{n as r,r as O,G as R,t as j,a as Z,c as _,v as k,d as D,N as F,s as C,b as G}from"./_plugin-vue2_normalizer--vonsA8I.chunk.mjs";import{l as x}from"./logger-BXyvyEpT.chunk.mjs";var y=(t=>(t[t.User=0]="User",t[t.Group=1]="Group",t[t.Link=3]="Link",t[t.Email=4]="Email",t[t.Remote=6]="Remote",t[t.Team=7]="Team",t[t.Guest=8]="Guest",t[t.RemoteGroup=9]="RemoteGroup",t[t.Room=10]="Room",t[t.Deck=12]="Deck",t[t.FederatedGroup=14]="FederatedGroup",t))(y||{});const P={name:"NcLoadingIcon",props:{size:{type:Number,default:20},appearance:{type:String,validator(t){return["auto","light","dark"].includes(t)},default:"auto"},name:{type:String,default:""}},computed:{colors(){const t=["#777","#CCC"];return this.appearance==="light"?t:this.appearance==="dark"?t.reverse():["var(--color-loading-light)","var(--color-loading-dark)"]}}};var W=function(){var t=this,e=t._self._c;return e("span",{staticClass:"material-design-icon loading-icon",attrs:{"aria-label":t.name,role:"img"}},[e("svg",{attrs:{width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:t.colors[0],d:"M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"}}),e("path",{attrs:{fill:t.colors[1],d:"M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"}},[t.name?e("title",[t._v(t._s(t.name))]):t._e()])])])},q=[],U=r(P,W,q,!1,null,"551209a3");const J=U.exports,K={name:"CheckboxMarkedCircleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Q=function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon checkbox-marked-circle-icon",attrs:{"aria-hidden":t.title?null:!0,"aria-label":t.title,role:"img"},on:{click:function(i){return t.$emit("click",i)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])},X=[],Y=r(K,Q,X,!1,null,null);const tt=Y.exports,et={name:"AlertDecagramIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var it=function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon alert-decagram-icon",attrs:{"aria-hidden":t.title?null:!0,"aria-label":t.title,role:"img"},on:{click:function(i){return t.$emit("click",i)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M13,17H11V15H13V17M13,13H11V7H13V13Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])},nt=[],at=r(et,it,nt,!1,null,null);const rt=at.exports,lt={name:"AlertIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var st=function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon alert-icon",attrs:{"aria-hidden":t.title?null:!0,"aria-label":t.title,role:"img"},on:{click:function(i){return t.$emit("click",i)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])},ot=[],ct=r(lt,st,ot,!1,null,null);const A=ct.exports,dt={name:"InformationIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var ut=function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon information-icon",attrs:{"aria-hidden":t.title?null:!0,"aria-label":t.title,role:"img"},on:{click:function(i){return t.$emit("click",i)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])},ht=[],pt=r(dt,ut,ht,!1,null,null);const ft=pt.exports,mt={name:"NcNoteCard",props:{type:{type:String,default:"warning",validator:t=>["success","info","warning","error"].includes(t)},showAlert:{type:Boolean,default:!1},heading:{type:String,default:""},text:{type:String,default:""}},computed:{shouldShowAlert(){return this.showAlert||this.type==="error"},icon(){switch(this.type){case"error":return rt;case"success":return tt;case"info":return ft;case"warning":return A;default:return A}},color(){switch(this.type){case"error":return"var(--color-error)";case"success":return"var(--color-success)";case"info":return"var(--color-info)";case"warning":return"var(--color-warning)";default:return"var(--color-warning)"}}}};var gt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"notecard",class:"notecard--".concat(t.type),attrs:{role:t.shouldShowAlert?"alert":"note"}},[t._t("icon",function(){return[e(t.icon,{tag:"component",staticClass:"notecard__icon",class:{"notecard__icon--heading":t.heading},attrs:{"fill-color":t.color,size:20}})]}),e("div",[t.heading?e("p",{staticClass:"notecard__heading"},[t._v(" "+t._s(t.heading)+" ")]):t._e(),t._t("default",function(){return[e("p",{staticClass:"notecard__text"},[t._v(" "+t._s(t.text)+" ")])]})],2)],2)},vt=[],bt=r(mt,gt,vt,!1,null,"7df28e9e");const yt=bt.exports;var v=Symbol(),h=Symbol(),S=Symbol(),N=Symbol(),w=function(t){return"frag"in t},_t={get:function(){return this[h]||this.parentElement},configurable:!0},p=function(t,e){h in t||(t[h]=e,Object.defineProperty(t,"parentNode",_t))},kt={get:function(){var t=this.parentNode.childNodes,e=t.indexOf(this);return e>-1&&t[e+1]||null}},g=function(t){S in t||(t[S]=!0,Object.defineProperty(t,"nextSibling",kt))},wt=function(t,e){for(;t.parentNode!==e;){var i=t,n=i.parentNode;n&&(t=n)}return t},b,M=function(t){if(!b){var e=Object.getOwnPropertyDescriptor(Node.prototype,"childNodes");b=e.get}var i=b.apply(t),n=Array.from(i).map(function(a){return wt(a,t)});return n.filter(function(a,l){return a!==n[l-1]})},Ct={get:function(){return this.frag||M(this)}},xt={get:function(){return this.childNodes[0]||null}};function At(){return this.childNodes.length>0}var L=function(t){N in t||(t[N]=!0,Object.defineProperties(t,{childNodes:Ct,firstChild:xt}),t.hasChildNodes=At)};function St(){var t;(t=this.frag[0]).before.apply(t,arguments)}function Nt(){var t=this.frag,e=t.splice(0,t.length);e.forEach(function(i){i.remove()})}var Lt=function t(e){var i;return(i=Array.prototype).concat.apply(i,e.map(function(n){return w(n)?t(n.frag):n}))},zt=function(t,e){var i=t[v];e.before(i),p(i,t),t.frag.unshift(i)};function z(t){if(w(this)){var e=this.frag.indexOf(t);if(e>-1){var i=this.frag.splice(e,1),n=i[0];this.frag.length===0&&zt(this,n),t.remove()}}else{var a=M(this),l=a.indexOf(t);l>-1&&t.remove()}return t}function E(t,e){var i=this,n=t.frag||[t];if(w(this)){if(t[h]===this&&t.parentElement)return t;var a=this.frag;if(e){var l=a.indexOf(e);l>-1&&(a.splice.apply(a,[l,0].concat(n)),e.before.apply(e,n))}else{var o=a[a.length-1];a.push.apply(a,n),o.after.apply(o,n)}$(this)}else e?this.childNodes.includes(e)&&e.before.apply(e,n):this.append.apply(this,n);n.forEach(function(H){p(H,i)});var f=n[n.length-1];return g(f),t}function Et(t){if(t[h]===this&&t.parentElement)return t;var e=this.frag,i=e[e.length-1];return i.after(t),p(t,this),$(this),e.push(t),t}var $=function(t){var e=t[v];t.frag[0]===e&&(t.frag.shift(),e.remove())},Bt={set:function(t){var e=this;if(this.frag[0]!==this[v]&&this.frag.slice().forEach(function(n){return e.removeChild(n)}),t){var i=document.createElement("div");i.innerHTML=t,Array.from(i.childNodes).forEach(function(n){e.appendChild(n)})}},get:function(){return""}},Mt={inserted:function(t){var e=t.parentNode,i=t.nextSibling,n=t.previousSibling,a=Array.from(t.childNodes),l=document.createComment("");a.length===0&&a.push(l),t.frag=a,t[v]=l;var o=document.createDocumentFragment();o.append.apply(o,Lt(a)),t.replaceWith(o),a.forEach(function(f){p(f,t),g(f)}),L(t),Object.assign(t,{remove:Nt,appendChild:Et,insertBefore:E,removeChild:z,before:St}),Object.defineProperty(t,"innerHTML",Bt),e&&(Object.assign(e,{removeChild:z,insertBefore:E}),p(t,e),L(e)),i&&g(t),n&&g(n)},unbind:function(t){t.remove()}},$t={name:"Fragment",directives:{frag:Mt},render:function(t){return t("div",{directives:[{name:"frag"}]},this.$slots.default)}};O();const Ht={name:"CheckboxBlankOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Tt=function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon checkbox-blank-outline-icon",attrs:{"aria-hidden":t.title?null:!0,"aria-label":t.title,role:"img"},on:{click:function(i){return t.$emit("click",i)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])},Vt=[],It=r(Ht,Tt,Vt,!1,null,null);const Ot=It.exports,Rt={name:"MinusBoxIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var jt=function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon minus-box-icon",attrs:{"aria-hidden":t.title?null:!0,"aria-label":t.title,role:"img"},on:{click:function(i){return t.$emit("click",i)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])},Zt=[],Dt=r(Rt,jt,Zt,!1,null,null);const Ft=Dt.exports,Gt={name:"CheckboxMarkedIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Pt=function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon checkbox-marked-icon",attrs:{"aria-hidden":t.title?null:!0,"aria-label":t.title,role:"img"},on:{click:function(i){return t.$emit("click",i)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])},Wt=[],qt=r(Gt,Pt,Wt,!1,null,null);const Ut=qt.exports,Jt={name:"RadioboxMarkedIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Kt=function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon radiobox-marked-icon",attrs:{"aria-hidden":t.title?null:!0,"aria-label":t.title,role:"img"},on:{click:function(i){return t.$emit("click",i)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])},Qt=[],Xt=r(Jt,Kt,Qt,!1,null,null);const Yt=Xt.exports,te={name:"RadioboxBlankIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var ee=function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon radiobox-blank-icon",attrs:{"aria-hidden":t.title?null:!0,"aria-label":t.title,role:"img"},on:{click:function(i){return t.$emit("click",i)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])},ie=[],ne=r(te,ee,ie,!1,null,null);const ae=ne.exports,re={name:"ToggleSwitchOffIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var le=function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon toggle-switch-off-icon",attrs:{"aria-hidden":t.title?null:!0,"aria-label":t.title,role:"img"},on:{click:function(i){return t.$emit("click",i)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M7,15A3,3 0 0,1 4,12A3,3 0 0,1 7,9A3,3 0 0,1 10,12A3,3 0 0,1 7,15Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])},se=[],oe=r(re,le,se,!1,null,null);const ce=oe.exports,de={name:"ToggleSwitchIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var ue=function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon toggle-switch-icon",attrs:{"aria-hidden":t.title?null:!0,"aria-label":t.title,role:"img"},on:{click:function(i){return t.$emit("click",i)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M17,15A3,3 0 0,1 14,12A3,3 0 0,1 17,9A3,3 0 0,1 20,12A3,3 0 0,1 17,15Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])},he=[],pe=r(de,ue,he,!1,null,null);const fe=pe.exports,c="checkbox",d="radio",s="switch",u="button",me={name:"NcCheckboxContent",components:{NcLoadingIcon:J},props:{id:{type:String,default:null},iconClass:{type:[String,Object],default:null},textClass:{type:[String,Object],default:null},type:{type:String,default:"checkbox",validator:t=>[c,d,s,u].includes(t)},buttonVariant:{type:Boolean,default:!1},isChecked:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:Number,default:24}},computed:{isButtonType(){return this.type===u},checkboxRadioIconElement(){return this.type===d?this.isChecked?Yt:ae:this.type===s?this.isChecked?fe:ce:this.indeterminate?Ft:this.isChecked?Ut:Ot}}};var ge=function(){var t=this,e=t._self._c;return e("span",{staticClass:"checkbox-content",class:{["checkbox-content-"+t.type]:!0,"checkbox-content--button-variant":t.buttonVariant,"checkbox-content--has-text":!!t.$slots.default},attrs:{id:t.isButtonType?void 0:"".concat(t.id,"-label")}},[e("span",{class:{"checkbox-content__icon":!0,"checkbox-content__icon--checked":t.isChecked,[t.iconClass]:!0},attrs:{"aria-hidden":!0,inert:""}},[t._t("icon",function(){return[t.loading?e("NcLoadingIcon"):t.buttonVariant?t._e():e(t.checkboxRadioIconElement,{tag:"component",attrs:{size:t.size}})]},{checked:t.isChecked,loading:t.loading})],2),t.$slots.default?e("span",{class:["checkbox-content__text",t.textClass]},[t._t("default")],2):t._e()])},ve=[],be=r(me,ge,ve,!1,null,"38a6f3e5");const ye=be.exports,_e={name:"NcCheckboxRadioSwitch",components:{NcCheckboxContent:ye},inheritAttrs:!1,props:{id:{type:String,default:()=>"checkbox-radio-switch-"+R(),validator:t=>t.trim()!==""},wrapperId:{type:String,default:null},name:{type:String,default:null},ariaLabel:{type:String,default:""},type:{type:String,default:"checkbox",validator:t=>[c,d,s,u].includes(t)},buttonVariant:{type:Boolean,default:!1},buttonVariantGrouped:{type:String,default:"no",validator:t=>["no","vertical","horizontal"].includes(t)},checked:{type:[Boolean,Array,String],default:!1},value:{type:String,default:null},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},required:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},wrapperElement:{type:String,default:null}},emits:["update:checked"],computed:{dataAttrs(){return Object.fromEntries(Object.entries(this.$attrs).filter(([t])=>t.startsWith("data-")))},nonDataAttrs(){return Object.fromEntries(Object.entries(this.$attrs).filter(([t])=>!t.startsWith("data-")))},isButtonType(){return this.type===u},computedWrapperElement(){return this.isButtonType?"button":this.wrapperElement!==null?this.wrapperElement:"span"},listeners(){return this.isButtonType?{click:this.onToggle}:{change:this.onToggle}},size(){return this.type===s?36:24},cssVars(){return{"--icon-size":this.size+"px","--icon-height":(this.type===s?16:this.size)+"px"}},inputType(){return[c,d,u].includes(this.type)?this.type:c},isChecked(){return this.value!==null?Array.isArray(this.checked)?[...this.checked].indexOf(this.value)>-1:this.checked===this.value:this.checked===!0},hasIndeterminate(){return[c,d].includes(this.inputType)}},mounted(){if(this.name&&this.type===c&&!Array.isArray(this.checked))throw new Error("When using groups of checkboxes, the updated value will be an array.");if(this.name&&this.type===s)throw new Error("Switches are not made to be used for data sets. Please use checkboxes instead.");if(typeof this.checked!="boolean"&&this.type===s)throw new Error("Switches can only be used with boolean as checked prop.")},methods:{t:j,n:Z,onToggle(t){if(this.disabled||t.target.tagName.toLowerCase()==="a")return;if(this.type===d){this.$emit("update:checked",this.value);return}if(this.type===s){this.$emit("update:checked",!this.isChecked);return}if(typeof this.checked=="boolean"){this.$emit("update:checked",!this.checked);return}const e=this.getInputsSet().filter(i=>i.checked).map(i=>i.value);e.includes(this.value)?this.$emit("update:checked",e.filter(i=>i!==this.value)):this.$emit("update:checked",[...e,this.value])},getInputsSet(){return[...document.getElementsByName(this.name)]}}};var ke=function(){var t=this,e=t._self._c;return e(t.computedWrapperElement,t._g(t._b({tag:"component",staticClass:"checkbox-radio-switch",class:{["checkbox-radio-switch-"+t.type]:t.type,"checkbox-radio-switch--checked":t.isChecked,"checkbox-radio-switch--disabled":t.disabled,"checkbox-radio-switch--indeterminate":t.hasIndeterminate?t.indeterminate:!1,"checkbox-radio-switch--button-variant":t.buttonVariant,"checkbox-radio-switch--button-variant-v-grouped":t.buttonVariant&&t.buttonVariantGrouped==="vertical","checkbox-radio-switch--button-variant-h-grouped":t.buttonVariant&&t.buttonVariantGrouped==="horizontal","button-vue":t.isButtonType},style:t.cssVars,attrs:{id:t.wrapperId,"aria-label":t.isButtonType&&t.ariaLabel?t.ariaLabel:void 0,type:t.isButtonType?"button":null}},"component",t.isButtonType?t.$attrs:t.dataAttrs,!1),t.isButtonType?t.listeners:null),[t.isButtonType?t._e():e("input",t._g(t._b({staticClass:"checkbox-radio-switch__input",attrs:{id:t.id,"aria-labelledby":!t.isButtonType&&!t.ariaLabel?"".concat(t.id,"-label"):null,"aria-label":t.ariaLabel||void 0,disabled:t.disabled,type:t.inputType,required:t.required,name:t.name},domProps:{value:t.value,checked:t.isChecked,indeterminate:t.hasIndeterminate?t.indeterminate:null}},"input",t.nonDataAttrs,!1),t.listeners)),e("NcCheckboxContent",{staticClass:"checkbox-radio-switch__content",attrs:{id:t.id,"icon-class":"checkbox-radio-switch__icon","text-class":"checkbox-radio-switch__text",type:t.type,indeterminate:t.hasIndeterminate?t.indeterminate:!1,"button-variant":t.buttonVariant,"is-checked":t.isChecked,loading:t.loading,size:t.size},nativeOn:{click:function(i){return t.onToggle.apply(null,arguments)}},scopedSlots:t._u([{key:"icon",fn:function(){return[t._t("icon")]},proxy:!0}],null,!0)},[t._t("default")],2)],1)},we=[],Ce=r(_e,ke,we,!1,null,"00597cce");const xe=Ce.exports,Ae=async t=>(await _.get(k("/apps/files_downloadlimit/api/v1/{token}/limit",{token:t}))).data.ocs.data,Se=async(t,e)=>(await _.put(k("/apps/files_downloadlimit/api/v1/{token}/limit",{token:t}),{limit:e})).data.ocs.data,Ne=async t=>(await _.delete(k("/apps/files_downloadlimit/api/v1/{token}/limit",{token:t}))).data.ocs.data,B=T("files_downloadlimit","default-download-limit",-1),Le=B===-1?"":B,ze=D({name:"DownloadLimitEntry",components:{Fragment:$t,NcCheckboxRadioSwitch:xe,NcNoteCard:yt,NcTextField:F},props:{share:{type:Object,required:!0}},data(){return{limitEnabled:!1,initialLimit:null,limit:Le,count:null,loading:!1,hasError:!1}},computed:{remainingCount(){var t,e;return((t=this.initialLimit)!=null?t:0)-((e=this.count)!=null?e:0)},helperText(){return this.limit&&this.limit>0?"":m("files_downloadlimit","The minimum limit is 1")},isNewShare(){return this.share.id===null||this.share.id===void 0},showRemainingDownloadsNote(){return typeof this.count=="number"},showResetNote(){return!this.isNewShare&&!!this.initialLimit&&typeof this.limit=="number"&&this.limit!==this.initialLimit}},async created(){x.debug("Loading download limit",{share:this.share}),this.loading=!0;try{const{limit:t,count:e}=await Ae(this.share.token);typeof t=="number"&&typeof e=="number"&&(this.limitEnabled=!!t,this.initialLimit=t,this.limit=t,this.count=e)}catch(t){this.hasError=!0,x.error("Failed to load download limit",{error:t,share:this.share})}this.loading=!1},methods:{n:V,t:m,handleUpdateLimit(t){this.limit=Number(t)},async onSave(){if(!(typeof this.limit!="number"||this.limit<=0)){if(this.isNewShare||this.limit!==this.initialLimit){try{await Se(this.share.token,this.limit)}catch{C(m("files_downloadlimit","Failed to set download limit"))}return}if(!this.limitEnabled&&this.initialLimit)try{await Ne(this.share.token)}catch{C(m("files_downloadlimit","Failed to remove download limit"))}}}}});var Ee=function(){var t=this,e=t._self._c;return t._self._setupProxy,e("Fragment",[e("NcCheckboxRadioSwitch",{attrs:{checked:t.limitEnabled,loading:t.loading,disabled:t.hasError},on:{"update:checked":function(i){t.limitEnabled=i}}},[t._v(" "+t._s(t.t("files_downloadlimit","Limit downloads"))+" ")]),!t.loading&&!t.hasError?[e("NcNoteCard",{directives:[{name:"show",rawName:"v-show",value:t.limitEnabled&&t.showRemainingDownloadsNote,expression:"limitEnabled && showRemainingDownloadsNote"}],staticClass:"action__count-note",attrs:{type:"info"}},[t._v(" "+t._s(t.n("files_downloadlimit","1 remaining download allowed","{count} remaining downloads allowed",t.remainingCount,{count:t.remainingCount}))+" ")]),e("NcTextField",{directives:[{name:"show",rawName:"v-show",value:t.limitEnabled,expression:"limitEnabled"}],attrs:{label:t.t("files_downloadlimit","Set download limit"),type:"number",min:"1",value:t.limit,"helper-text":t.helperText,error:!!t.helperText},on:{"update:value":t.handleUpdateLimit}}),e("NcNoteCard",{directives:[{name:"show",rawName:"v-show",value:t.limitEnabled&&t.showResetNote,expression:"limitEnabled && showResetNote"}],staticClass:"action__reset-note",attrs:{type:"warning"}},[t._v(" "+t._s(t.t("files_downloadlimit","Setting a new limit will reset the download count"))+" ")])]:t._e()],2)},Be=[],Me=G(ze,Ee,Be,!1,null,"95849c40");const $e=Me.exports;class He{get id(){return"files_downloadlimit"}get shareType(){return[y.Link,y.Email]}data({share:e,fileInfo:i}){var n;return typeof e.token!="string"||i.type!=="file"||e.owner!==((n=I())==null?void 0:n.uid)?{}:{is:$e,share:e}}get advanced(){return!0}get handlers(){return{}}}window.addEventListener("DOMContentLoaded",()=>{OCA.Sharing.ExternalShareActions.registerAction(new He)});
