if(!self.define){let s,e={};const l=(l,t)=>(l=new URL(l+".js",t).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(t,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let n={};const u=s=>l(s,r),a={module:{uri:r},exports:n,require:u};e[r]=Promise.all(t.map((s=>a[s]||u(s)))).then((s=>(i(...s),n)))}}define(["./workbox-85077874"],(function(s){"use strict";self.skipWaiting(),s.precacheAndRoute([{url:"404.html",revision:"1def71fba18d513cbec3362e6df2b4d1"},{url:"assets/404.f2a78e96.js",revision:null},{url:"assets/404.html.93146c89.js",revision:null},{url:"assets/404.html.bee13de6.js",revision:null},{url:"assets/app.5d368867.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/getting_started.html.12099df3.js",revision:null},{url:"assets/getting_started.html.8e6505e4.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.11633409.js",revision:null},{url:"assets/index.html.504c7800.js",revision:null},{url:"assets/index.html.6c44090a.js",revision:null},{url:"assets/index.html.7ca8439b.js",revision:null},{url:"assets/Layout.0a3d47cc.js",revision:null},{url:"assets/other.html.468e09d5.js",revision:null},{url:"assets/other.html.cba2c3b1.js",revision:null},{url:"assets/patch_download.html.c56bcdc7.js",revision:null},{url:"assets/patch_download.html.fad3950a.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/purchase.html.1cbcc250.js",revision:null},{url:"assets/purchase.html.c2041891.js",revision:null},{url:"assets/search.0782d0d1.svg",revision:null},{url:"assets/strategy.html.b27b3031.js",revision:null},{url:"assets/strategy.html.e6552dbd.js",revision:null},{url:"assets/style.e98e4a1b.css",revision:null},{url:"guide/getting_started.html",revision:"e05afc1f71333cff6aaa9e2085347455"},{url:"guide/index.html",revision:"19be09b433c8af7d0770b8980798baa8"},{url:"guide/other.html",revision:"3eac899f8594b7e27227287342286f71"},{url:"guide/patch_download.html",revision:"2b600c9e82fadd8e799a9d342aa44c9b"},{url:"guide/purchase.html",revision:"1f4c120fc6adf817a63dd1847607cc78"},{url:"guide/strategy.html",revision:"06d6c69516da0b33527a7461aac47271"},{url:"index.html",revision:"e7c8a64f53ae49d7cf8cde585c5e5df2"}],{})}));