if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),u={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>u[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-6xPtgH3-.js",revision:null},{url:"assets/index-DiwrgTda.css",revision:null},{url:"assets/production-C7m1psRp.js",revision:null},{url:"assets/U2TDTBMY-DOxnh3ix.js",revision:null},{url:"index.html",revision:"c45000ec841bcf498c06192c582d0542"},{url:"registerSW.js",revision:"21758044833166fdfba73e95ab220c9a"},{url:"manifest.webmanifest",revision:"3c45108c678dd13b95e300fbaaba21a2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
