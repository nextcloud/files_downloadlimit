import{l as w,t as s,a as f}from"./index-iJN9WzfE.chunk.mjs";import{l as p}from"./logger-BjhrAWZC.chunk.mjs";const{limit:a,downloads:c}=w("files_downloadlimit","download_limit",{limit:-1,downloads:0});p.debug("Download limit",{limit:a,downloads:c});let n=a-c,r=0;const m=(e,o)=>{o===0?e.innerText=s("files_downloadlimit","You have reached the maximum amount of downloads allowed"):e.innerText=f("files_downloadlimit","1 remaining download allowed","{count} remaining downloads allowed",o,{count:o})};window.addEventListener("DOMContentLoaded",()=>{if(a<1)return;const e=document.getElementById("header-primary-action");if(!e)return;const o=document.createElement("span");o.setAttribute("style","color: var(--color-primary-text); padding: 0 10px;"),m(o,n),e.prepend(o);const i=document.querySelector("#files-public-content");if(!i)return;i.oncontextmenu=t=>(t.preventDefault(),t.stopPropagation(),!1);const l=Array.from(document.querySelectorAll('a[href*="/download/"]'));new Set(l).forEach(t=>{t.addEventListener("click",d=>{if(r>0&&!confirm(s("files_downloadlimit","This share has a limited number of downloads. Are you sure you want to trigger a new download?"))){d.preventDefault(),d.stopPropagation();return}n--,r++,m(o,n),n===0&&[...l].forEach(u=>u.remove())})})});
