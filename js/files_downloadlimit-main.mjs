/*! third party licenses: js/vendor.LICENSE.txt */
import{l as B,a as P}from"./purify.es.chunk.mjs";import{n as r,r as O,G as I,t as $,a as V,c as y,v as k,d as Y,N as D,s as C,b as Z}from"./_plugin-vue2_normalizer.chunk.mjs";import{l as E}from"./logger.chunk.mjs";var b=(e=>(e[e.SHARE_TYPE_USER=0]="SHARE_TYPE_USER",e[e.SHARE_TYPE_GROUP=1]="SHARE_TYPE_GROUP",e[e.SHARE_TYPE_LINK=3]="SHARE_TYPE_LINK",e[e.SHARE_TYPE_EMAIL=4]="SHARE_TYPE_EMAIL",e[e.SHARE_TYPE_REMOTE=6]="SHARE_TYPE_REMOTE",e[e.SHARE_TYPE_CIRCLE=7]="SHARE_TYPE_CIRCLE",e[e.SHARE_TYPE_GUEST=8]="SHARE_TYPE_GUEST",e[e.SHARE_TYPE_REMOTE_GROUP=9]="SHARE_TYPE_REMOTE_GROUP",e[e.SHARE_TYPE_ROOM=10]="SHARE_TYPE_ROOM",e[e.SHARE_TYPE_DECK=12]="SHARE_TYPE_DECK",e[e.SHARE_TYPE_FEDERATED_GROUP=14]="SHARE_TYPE_FEDERATED_GROUP",e))(b||{}),_=Symbol(),p=Symbol(),A=Symbol(),x=Symbol(),w=function(e){return"frag"in e},G={get:function(){return this[p]||this.parentElement},configurable:!0},f=function(e,i){p in e||(e[p]=i,Object.defineProperty(e,"parentNode",G))},U={get:function(){var e=this.parentNode.childNodes,i=e.indexOf(this);return i>-1&&e[i+1]||null}},g=function(e){A in e||(e[A]=!0,Object.defineProperty(e,"nextSibling",U))},F=function(e,i){for(;e.parentNode!==i;){var n=e,a=n.parentNode;a&&(e=a)}return e},v,R=function(e){if(!v){var i=Object.getOwnPropertyDescriptor(Node.prototype,"childNodes");v=i.get}var n=v.apply(e),a=Array.from(n).map(function(l){return F(l,e)});return a.filter(function(l,s){return l!==a[s-1]})},j={get:function(){return this.frag||R(this)}},K={get:function(){return this.childNodes[0]||null}};function q(){return this.childNodes.length>0}var S=function(e){x in e||(e[x]=!0,Object.defineProperties(e,{childNodes:j,firstChild:K}),e.hasChildNodes=q)};function W(){var e;(e=this.frag[0]).before.apply(e,arguments)}function J(){var e=this.frag,i=e.splice(0,e.length);i.forEach(function(n){n.remove()})}var Q=function e(i){var n;return(n=Array.prototype).concat.apply(n,i.map(function(a){return w(a)?e(a.frag):a}))},X=function(e,i){var n=e[_];i.before(n),f(n,e),e.frag.unshift(n)};function N(e){if(w(this)){var i=this.frag.indexOf(e);if(i>-1){var n=this.frag.splice(i,1),a=n[0];this.frag.length===0&&X(this,a),e.remove()}}else{var l=R(this),s=l.indexOf(e);s>-1&&e.remove()}return e}function L(e,i){var n=this,a=e.frag||[e];if(w(this)){if(e[p]===this&&e.parentElement)return e;var l=this.frag;if(i){var s=l.indexOf(i);s>-1&&(l.splice.apply(l,[s,0].concat(a)),i.before.apply(i,a))}else{var c=l[l.length-1];l.push.apply(l,a),c.after.apply(c,a)}z(this)}else i?this.childNodes.includes(i)&&i.before.apply(i,a):this.append.apply(this,a);a.forEach(function(M){f(M,n)});var m=a[a.length-1];return g(m),e}function tt(e){if(e[p]===this&&e.parentElement)return e;var i=this.frag,n=i[i.length-1];return n.after(e),f(e,this),z(this),i.push(e),e}var z=function(e){var i=e[_];e.frag[0]===i&&(e.frag.shift(),i.remove())},et={set:function(e){var i=this;if(this.frag[0]!==this[_]&&this.frag.slice().forEach(function(a){return i.removeChild(a)}),e){var n=document.createElement("div");n.innerHTML=e,Array.from(n.childNodes).forEach(function(a){i.appendChild(a)})}},get:function(){return""}},it={inserted:function(e){var i=e.parentNode,n=e.nextSibling,a=e.previousSibling,l=Array.from(e.childNodes),s=document.createComment("");l.length===0&&l.push(s),e.frag=l,e[_]=s;var c=document.createDocumentFragment();c.append.apply(c,Q(l)),e.replaceWith(c),l.forEach(function(m){f(m,e),g(m)}),S(e),Object.assign(e,{remove:J,appendChild:tt,insertBefore:L,removeChild:N,before:W}),Object.defineProperty(e,"innerHTML",et),i&&(Object.assign(i,{removeChild:N,insertBefore:L}),f(e,i),S(i)),n&&g(e),a&&g(a)},unbind:function(e){e.remove()}},nt={name:"Fragment",directives:{frag:it},render:function(e){return e("div",{directives:[{name:"frag"}]},this.$slots.default)}};const at={name:"CheckboxMarkedCircleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var lt=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon checkbox-marked-circle-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(n){return e.$emit("click",n)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},rt=[],st=r(at,lt,rt,!1,null,null,null,null);const ot=st.exports,ct={name:"AlertDecagramIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var dt=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon alert-decagram-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(n){return e.$emit("click",n)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M13,17H11V15H13V17M13,13H11V7H13V13Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},ut=[],ht=r(ct,dt,ut,!1,null,null,null,null);const pt=ht.exports,ft={name:"AlertIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var mt=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon alert-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(n){return e.$emit("click",n)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},gt=[],_t=r(ft,mt,gt,!1,null,null,null,null);const T=_t.exports,vt={name:"InformationIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var bt=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon information-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(n){return e.$emit("click",n)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},yt=[],kt=r(vt,bt,yt,!1,null,null,null,null);const wt=kt.exports,Ct={name:"NcNoteCard",props:{type:{type:String,default:"warning",validator:e=>["success","info","warning","error"].includes(e)},showAlert:{type:Boolean,default:!1},heading:{type:String,default:""}},computed:{shouldShowAlert(){return this.showAlert||this.type==="error"},icon(){switch(this.type){case"error":return pt;case"success":return ot;case"info":return wt;case"warning":return T;default:return T}},color(){switch(this.type){case"error":return"var(--color-error)";case"success":return"var(--color-success)";case"info":return"var(--color-info)";case"warning":return"var(--color-warning)";default:return"var(--color-warning)"}}}};var Et=function(){var e=this,i=e._self._c;return i("div",{staticClass:"notecard",class:"notecard--".concat(e.type),attrs:{role:e.shouldShowAlert?"alert":"note"}},[e._t("icon",function(){return[i(e.icon,{tag:"component",staticClass:"notecard__icon",class:{"notecard__icon--heading":e.heading},attrs:{"fill-color":e.color}})]}),i("div",[e.heading?i("h2",[e._v(" "+e._s(e.heading)+" ")]):e._e(),e._t("default")],2)],2)},At=[],xt=r(Ct,Et,At,!1,null,"722d543a",null,null);const St=xt.exports,Nt={name:"NcLoadingIcon",props:{size:{type:Number,default:20},appearance:{type:String,validator(e){return["auto","light","dark"].includes(e)},default:"auto"},name:{type:String,default:""}},computed:{colors(){const e=["#777","#CCC"];return this.appearance==="light"?e:this.appearance==="dark"?e.reverse():["var(--color-loading-light)","var(--color-loading-dark)"]}}};var Lt=function(){var e=this,i=e._self._c;return i("span",{staticClass:"material-design-icon loading-icon",attrs:{"aria-label":e.name,role:"img"}},[i("svg",{attrs:{width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{fill:e.colors[0],d:"M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"}}),i("path",{attrs:{fill:e.colors[1],d:"M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"}},[e.name?i("title",[e._v(e._s(e.name))]):e._e()])])])},Tt=[],Ht=r(Nt,Lt,Tt,!1,null,"626664cd",null,null);const Rt=Ht.exports;O();const zt={name:"CheckboxBlankOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Mt=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon checkbox-blank-outline-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(n){return e.$emit("click",n)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},Bt=[],Pt=r(zt,Mt,Bt,!1,null,null,null,null);const Ot=Pt.exports,It={name:"MinusBoxIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var $t=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon minus-box-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(n){return e.$emit("click",n)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},Vt=[],Yt=r(It,$t,Vt,!1,null,null,null,null);const Dt=Yt.exports,Zt={name:"CheckboxMarkedIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Gt=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon checkbox-marked-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(n){return e.$emit("click",n)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},Ut=[],Ft=r(Zt,Gt,Ut,!1,null,null,null,null);const jt=Ft.exports,Kt={name:"RadioboxMarkedIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var qt=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon radiobox-marked-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(n){return e.$emit("click",n)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},Wt=[],Jt=r(Kt,qt,Wt,!1,null,null,null,null);const Qt=Jt.exports,Xt={name:"RadioboxBlankIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var te=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon radiobox-blank-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(n){return e.$emit("click",n)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},ee=[],ie=r(Xt,te,ee,!1,null,null,null,null);const ne=ie.exports,ae={name:"ToggleSwitchOffIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var le=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon toggle-switch-off-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(n){return e.$emit("click",n)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M7,15A3,3 0 0,1 4,12A3,3 0 0,1 7,9A3,3 0 0,1 10,12A3,3 0 0,1 7,15Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},re=[],se=r(ae,le,re,!1,null,null,null,null);const oe=se.exports,ce={name:"ToggleSwitchIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var de=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon toggle-switch-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(n){return e.$emit("click",n)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M17,15A3,3 0 0,1 14,12A3,3 0 0,1 17,9A3,3 0 0,1 20,12A3,3 0 0,1 17,15Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},ue=[],he=r(ce,de,ue,!1,null,null,null,null);const pe=he.exports,d="checkbox",u="radio",o="switch",h="button",fe={name:"NcCheckboxContent",components:{NcLoadingIcon:Rt},props:{id:{type:String,default:null},iconClass:{type:[String,Object],default:null},textClass:{type:[String,Object],default:null},type:{type:String,default:"checkbox",validator:e=>[d,u,o,h].includes(e)},buttonVariant:{type:Boolean,default:!1},isChecked:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:Number,default:24}},computed:{isButtonType(){return this.type===h},checkboxRadioIconElement(){return this.type===u?this.isChecked?Qt:ne:this.type===o?this.isChecked?pe:oe:this.indeterminate?Dt:this.isChecked?jt:Ot}}};var me=function(){var e=this,i=e._self._c;return i("span",{staticClass:"checkbox-content",class:{["checkbox-content-"+e.type]:!0,"checkbox-content--button-variant":e.buttonVariant,"checkbox-content--has-text":!!e.$slots.default},attrs:{id:e.isButtonType?void 0:"".concat(e.id,"-label")}},[i("span",{class:{"checkbox-content__icon":!0,"checkbox-content__icon--checked":e.isChecked,[e.iconClass]:!0},attrs:{"aria-hidden":!0,inert:""}},[e._t("icon",function(){return[e.loading?i("NcLoadingIcon"):e.buttonVariant?e._e():i(e.checkboxRadioIconElement,{tag:"component",attrs:{size:e.size}})]},{checked:e.isChecked,loading:e.loading})],2),e.$slots.default?i("span",{class:["checkbox-content__text",e.textClass]},[e._t("default")],2):e._e()])},ge=[],_e=r(fe,me,ge,!1,null,"adf98230",null,null);const ve=_e.exports,be={name:"NcCheckboxRadioSwitch",components:{NcCheckboxContent:ve},inheritAttrs:!1,props:{id:{type:String,default:()=>"checkbox-radio-switch-"+I(),validator:e=>e.trim()!==""},wrapperId:{type:String,default:null},name:{type:String,default:null},ariaLabel:{type:String,default:""},type:{type:String,default:"checkbox",validator:e=>[d,u,o,h].includes(e)},buttonVariant:{type:Boolean,default:!1},buttonVariantGrouped:{type:String,default:"no",validator:e=>["no","vertical","horizontal"].includes(e)},checked:{type:[Boolean,Array,String],default:!1},value:{type:String,default:null},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},required:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},wrapperElement:{type:String,default:null}},emits:["update:checked"],computed:{isButtonType(){return this.type===h},computedWrapperElement(){return this.isButtonType?"button":this.wrapperElement!==null?this.wrapperElement:"span"},listeners(){return this.isButtonType?{click:this.onToggle}:{change:this.onToggle}},size(){return this.type===o?36:24},cssVars(){return{"--icon-size":this.size+"px","--icon-height":(this.type===o?16:this.size)+"px"}},inputType(){return[d,u,h].includes(this.type)?this.type:d},isChecked(){return this.value!==null?Array.isArray(this.checked)?[...this.checked].indexOf(this.value)>-1:this.checked===this.value:this.checked===!0},hasIndeterminate(){return[d,u].includes(this.inputType)}},mounted(){if(this.name&&this.type===d&&!Array.isArray(this.checked))throw new Error("When using groups of checkboxes, the updated value will be an array.");if(this.name&&this.type===o)throw new Error("Switches are not made to be used for data sets. Please use checkboxes instead.");if(typeof this.checked!="boolean"&&this.type===o)throw new Error("Switches can only be used with boolean as checked prop.")},methods:{t:$,n:V,onToggle(){if(this.disabled)return;if(this.type===u){this.$emit("update:checked",this.value);return}if(this.type===o){this.$emit("update:checked",!this.isChecked);return}if(typeof this.checked=="boolean"){this.$emit("update:checked",!this.checked);return}const e=this.getInputsSet().filter(i=>i.checked).map(i=>i.value);e.includes(this.value)?this.$emit("update:checked",e.filter(i=>i!==this.value)):this.$emit("update:checked",[...e,this.value])},getInputsSet(){return[...document.getElementsByName(this.name)]}}};var ye=function(){var e=this,i=e._self._c;return i(e.computedWrapperElement,e._g(e._b({tag:"component",staticClass:"checkbox-radio-switch",class:{["checkbox-radio-switch-"+e.type]:e.type,"checkbox-radio-switch--checked":e.isChecked,"checkbox-radio-switch--disabled":e.disabled,"checkbox-radio-switch--indeterminate":e.hasIndeterminate?e.indeterminate:!1,"checkbox-radio-switch--button-variant":e.buttonVariant,"checkbox-radio-switch--button-variant-v-grouped":e.buttonVariant&&e.buttonVariantGrouped==="vertical","checkbox-radio-switch--button-variant-h-grouped":e.buttonVariant&&e.buttonVariantGrouped==="horizontal","button-vue":e.isButtonType},style:e.cssVars,attrs:{id:e.wrapperId,"aria-label":e.isButtonType&&e.ariaLabel?e.ariaLabel:void 0,type:e.isButtonType?"button":null}},"component",e.isButtonType?e.$attrs:{},!1),e.isButtonType?e.listeners:null),[e.isButtonType?e._e():i("input",e._g(e._b({staticClass:"checkbox-radio-switch__input",attrs:{id:e.id,"aria-labelledby":!e.isButtonType&&!e.ariaLabel?"".concat(e.id,"-label"):null,"aria-label":e.ariaLabel||void 0,disabled:e.disabled,type:e.inputType,required:e.required,name:e.name},domProps:{value:e.value,checked:e.isChecked,indeterminate:e.hasIndeterminate?e.indeterminate:null}},"input",e.$attrs,!1),e.listeners)),i("NcCheckboxContent",{staticClass:"checkbox-radio-switch__content",attrs:{id:e.id,"icon-class":"checkbox-radio-switch__icon","text-class":"checkbox-radio-switch__text",type:e.type,indeterminate:e.hasIndeterminate?e.indeterminate:!1,"button-variant":e.buttonVariant,"is-checked":e.isChecked,loading:e.loading,size:e.size},nativeOn:{click:function(n){return e.onToggle.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[e._t("icon")]},proxy:!0}],null,!0)},[e._t("default")],2)],1)},ke=[],we=r(be,ye,ke,!1,null,"6d6e6a47",null,null);const Ce=we.exports,Ee=async e=>(await y.get(k("/apps/files_downloadlimit/api/v1/{token}/limit",{token:e}))).data.ocs.data,Ae=async(e,i)=>(await y.put(k("/apps/files_downloadlimit/api/v1/{token}/limit",{token:e}),{limit:i})).data.ocs.data,xe=async e=>(await y.delete(k("/apps/files_downloadlimit/api/v1/{token}/limit",{token:e}))).data.ocs.data,H=B("files_downloadlimit","default-download-limit",-1),Se=H===-1?"":H,Ne=Y({name:"DownloadLimitEntry",components:{Fragment:nt,NcCheckboxRadioSwitch:Ce,NcNoteCard:St,NcTextField:D},props:{share:{type:Object,required:!0}},data(){return{limitEnabled:!1,initialLimit:null,limit:Se,count:null,loading:!1,hasError:!1}},computed:{remainingCount(){return this.initialLimit-this.count},helperText(){return this.limit>0?"":t("files_downloadlimit","The minimum limit is 1")},isNewShare(){return this.share.id===null||this.share.id===void 0},showRemainingDownloadsNote(){return typeof this.count=="number"},showResetNote(){return!this.isNewShare&&!!this.initialLimit&&typeof this.limit=="number"&&this.limit!==this.initialLimit}},async created(){E.debug("Loading download limit",{share:this.share}),this.loading=!0;try{const{limit:e,count:i}=await Ee(this.share.token);typeof e=="number"&&typeof i=="number"&&(this.limitEnabled=!!e,this.initialLimit=e,this.limit=e,this.count=i)}catch(e){this.hasError=!0,E.error("Failed to load download limit",{error:e,share:this.share})}this.loading=!1},methods:{handleUpdateLimit(e){this.limit=Number(e)},async onSave(){if(typeof this.limit=="number"&&this.limit>0){if(this.isNewShare||this.limit!==this.initialLimit){try{await Ae(this.share.token,this.limit)}catch{C(t("files_downloadlimit","Failed to set download limit"))}return}if(!this.limitEnabled&&this.initialLimit)try{await xe(this.share.token)}catch{C(t("files_downloadlimit","Failed to remove download limit"))}}}}});var Le=function(){var e=this,i=e._self._c;return e._self._setupProxy,i("Fragment",[i("NcCheckboxRadioSwitch",{attrs:{checked:e.limitEnabled,loading:e.loading,disabled:e.hasError},on:{"update:checked":function(n){e.limitEnabled=n}}},[e._v(" "+e._s(e.t("files_downloadlimit","Limit downloads"))+" ")]),!e.loading&&!e.hasError?[i("NcNoteCard",{directives:[{name:"show",rawName:"v-show",value:e.limitEnabled&&e.showRemainingDownloadsNote,expression:"limitEnabled && showRemainingDownloadsNote"}],staticClass:"action__count-note",attrs:{type:"info"}},[e._v(" "+e._s(e.n("files_downloadlimit","1 remaining download allowed","{count} remaining downloads allowed",e.remainingCount,{count:e.remainingCount}))+" ")]),i("NcTextField",{directives:[{name:"show",rawName:"v-show",value:e.limitEnabled,expression:"limitEnabled"}],attrs:{label:e.t("files_downloadlimit","Set download limit"),type:"number",min:"1",value:e.limit,"helper-text":e.helperText,error:!!e.helperText},on:{"update:value":e.handleUpdateLimit}}),i("NcNoteCard",{directives:[{name:"show",rawName:"v-show",value:e.limitEnabled&&e.showResetNote,expression:"limitEnabled && showResetNote"}],staticClass:"action__reset-note",attrs:{type:"warning"}},[e._v(" "+e._s(e.t("files_downloadlimit","Setting a new limit will reset the download count"))+" ")])]:e._e()],2)},Te=[],He=Z(Ne,Le,Te,!1,null,"6af3ebb2",null,null);const Re=He.exports;class ze{get id(){return"files_downloadlimit"}get shareType(){return[b.SHARE_TYPE_LINK,b.SHARE_TYPE_EMAIL]}data({share:i,fileInfo:n}){var a;return typeof i.token!="string"||n.type!=="file"||i.owner!==((a=P())==null?void 0:a.uid)?{}:{is:Re,share:i}}get advanced(){return!0}get handlers(){return{}}}window.addEventListener("DOMContentLoaded",()=>{OCA.Sharing.ExternalShareActions.registerAction(new ze)});
