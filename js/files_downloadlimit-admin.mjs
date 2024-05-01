/*! third party licenses: js/vendor.LICENSE.txt */
import{d as o,T as r,v as n,m as c,a as d,b as m,f as u,y as h,z as p,n as f,V as _}from"./_plugin-vue2_normalizer-DYIIBCYU.mjs";import{l as g}from"./purify.es-s39PBv2B.mjs";import{t as l}from"./index-BcTyi9TI.mjs";o(r);const w={name:"HelpCircleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var v=function(){var t=this,i=t._self._c;return i("span",t._b({staticClass:"material-design-icon help-circle-icon",attrs:{"aria-hidden":t.title?null:!0,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"}},[t.title?i("title",[t._v(t._s(t.title))]):t._e()])])])},C=[],S=n(w,v,C,!1,null,null,null,null);const b=S.exports,y={name:"NcSettingsSection",components:{HelpCircle:b},props:{name:{type:String,required:!0},description:{type:String,default:""},docUrl:{type:String,default:""},limitWidth:{type:Boolean,default:!0}},data(){return{docNameTranslated:c("External documentation for {name}",{name:this.name})}},computed:{hasDescription(){return this.description.length>0},hasDocUrl(){return this.docUrl.length>0}}};var x=function(){var t=this,i=t._self._c;return i("div",{staticClass:"settings-section",class:{"settings-section--limit-width":t.limitWidth}},[i("h2",{staticClass:"settings-section__name"},[t._v(" "+t._s(t.name)+" "),t.hasDocUrl?i("a",{staticClass:"settings-section__info",attrs:{href:t.docUrl,title:t.docNameTranslated,"aria-label":t.docNameTranslated,target:"_blank",rel:"noreferrer nofollow"}},[i("HelpCircle",{attrs:{size:20}})],1):t._e()]),t.hasDescription?i("p",{staticClass:"settings-section__desc"},[t._v(" "+t._s(t.description)+" ")]):t._e(),t._t("default")],2)},T=[],N=n(y,x,T,!1,null,"f51cf2d3",null,null);const A=N.exports,H=async t=>(await d.put(m("/apps/files_downloadlimit/api/v1/limit"),{limit:t})).data.ocs.data,s=g("files_downloadlimit","default-download-limit",-1),a=s===-1?"":s,L=u({name:"AdminSettings",components:{NcSettingsSection:A,NcTextField:h},data(){return{limit:a,savedLimit:a,showSuccess:!1}},computed:{helperText(){return typeof this.limit!="number"||this.limit>0?"":l("files_downloadlimit","The minimum limit is 1")},showTrailingButton(){return typeof this.limit=="number"&&this.limit>0&&this.limit!==this.savedLimit}},methods:{t:l,handleUpdateLimit(t){this.limit=Number(t)},async handleSave(){if(typeof this.limit=="number"&&this.limit>0)try{await H(this.limit),this.savedLimit=this.limit,this.showSuccess=!0,setTimeout(()=>{this.showSuccess=!1},3e3)}catch{p(l("files_downloadlimit","Failed to set default download limit"))}}}});var U=function(){var t=this,i=t._self._c;return t._self._setupProxy,i("NcSettingsSection",{attrs:{name:t.t("files_downloadlimit","Download limit"),description:t.t("files_downloadlimit","Configure the default download limit for external shares.")}},[i("form",{on:{submit:function(e){return e.preventDefault(),t.handleSave.apply(null,arguments)}}},[i("NcTextField",{staticClass:"settings__field",attrs:{label:t.t("files_downloadlimit","Set default download limit"),type:"number",min:"1",value:t.limit,"helper-text":t.helperText,error:!!t.helperText,success:t.showSuccess,"show-trailing-button":t.showTrailingButton,"trailing-button-icon":"arrowRight"},on:{"update:value":t.handleUpdateLimit,"trailing-button-click":t.handleSave}})],1)])},D=[],k=f(L,U,D,!1,null,"4a670ffb",null,null);const z=k.exports;new _({el:"#admin-download-limit",render:t=>t(z)});
