import{l as w}from"./purify.es-BOnkNlGJ.chunk.mjs";import{t as s,a as f}from"./index-HVzjZH6Z.chunk.mjs";import{l as p}from"./logger-CH0rl3CU.chunk.mjs";const{limit:i,downloads:c}=w("files_downloadlimit","download_limit",{limit:-1,downloads:0});p.debug("Download limit",{limit:i,downloads:c});let n=i-c,r=0;const m=(e,o)=>{o===0?e.innerText=s("files_downloadlimit","You have reached the maximum amount of downloads allowed"):e.innerText=f("files_downloadlimit","1 remaining download allowed","{count} remaining downloads allowed",o,{count:o})};window.addEventListener("DOMContentLoaded",()=>{if(i<1)return;const e=document.getElementById("header-primary-action");if(!e)return;const o=document.createElement("span");o.setAttribute("style","color: var(--color-primary-text); padding: 0 10px;"),m(o,n),e.prepend(o);const a=document.querySelector("#files-public-content");if(!a)return;a.oncontextmenu=t=>(t.preventDefault(),t.stopPropagation(),!1);const l=document.querySelectorAll('a[href*="/download/"]')||[];new Set(l).forEach(t=>{t.addEventListener("click",d=>{if(r>0&&!confirm(s("files_downloadlimit","This share has a limited number of downloads. Are you sure you want to trigger a new download?"))){d.preventDefault(),d.stopPropagation();return}n--,r++,m(o,n),n===0&&[...l].forEach(u=>u.remove())})})});
