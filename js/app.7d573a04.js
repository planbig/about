(function(e){function n(n){for(var a,c,u=n[0],f=n[1],i=n[2],l=0,d=[];l<u.length;l++)c=u[l],r[c]&&d.push(r[c][0]),r[c]=0;for(a in f)Object.prototype.hasOwnProperty.call(f,a)&&(e[a]=f[a]);s&&s(n);while(d.length)d.shift()();return o.push.apply(o,i||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,c=1;c<t.length;c++){var u=t[c];0!==r[u]&&(a=!1)}a&&(o.splice(n--,1),e=f(f.s=t[0]))}return e}var a={},c={app:0},r={app:0},o=[];function u(e){return f.p+"js/"+({}[e]||e)+"."+{"chunk-0fc1594c":"f073679d","chunk-12a868f4":"cf2a2fda","chunk-23d430dd":"0b8aaf67","chunk-2d208348":"1b7b73a3","chunk-4ae21241":"d88dbf58","chunk-4c1ce880":"fc44a774","chunk-4f647c82":"2a2077d4","chunk-504b24ae":"3423a4e1","chunk-541dd53b":"7e51172b","chunk-60db8a42":"3e508804","chunk-61a3f8c3":"f83ad4a7","chunk-8977a82a":"d6d3041d","chunk-9564bd8c":"ce1c7aaf","chunk-95f9b322":"53c6c8c6","chunk-bf35b6f4":"0ea4b2b0","chunk-c343d3a4":"c9baa446","chunk-e6f22838":"74d4301a"}[e]+".js"}function f(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,f),t.l=!0,t.exports}f.e=function(e){var n=[],t={"chunk-0fc1594c":1,"chunk-12a868f4":1,"chunk-23d430dd":1,"chunk-4ae21241":1,"chunk-4c1ce880":1,"chunk-4f647c82":1,"chunk-504b24ae":1,"chunk-541dd53b":1,"chunk-60db8a42":1,"chunk-61a3f8c3":1,"chunk-8977a82a":1,"chunk-9564bd8c":1,"chunk-95f9b322":1,"chunk-bf35b6f4":1,"chunk-c343d3a4":1,"chunk-e6f22838":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise(function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-0fc1594c":"d8d40ea8","chunk-12a868f4":"86131ad4","chunk-23d430dd":"4cb14020","chunk-2d208348":"31d6cfe0","chunk-4ae21241":"9f893690","chunk-4c1ce880":"618acc86","chunk-4f647c82":"0c37442a","chunk-504b24ae":"68968b36","chunk-541dd53b":"52c740d9","chunk-60db8a42":"97f9c453","chunk-61a3f8c3":"b3a26194","chunk-8977a82a":"d2339d5a","chunk-9564bd8c":"a4e1d99a","chunk-95f9b322":"1d309029","chunk-bf35b6f4":"0fcafe41","chunk-c343d3a4":"9c76fc75","chunk-e6f22838":"6aa860b0"}[e]+".css",r=f.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var i=o[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===a||l===r))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],l=i.getAttribute("data-href");if(l===a||l===r)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var a=n&&n.target&&n.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete c[e],s.parentNode.removeChild(s),t(o)},s.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(s)}).then(function(){c[e]=0}));var a=r[e];if(0!==a)if(a)n.push(a[2]);else{var o=new Promise(function(n,t){a=r[e]=[n,t]});n.push(a[2]=o);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,f.nc&&l.setAttribute("nonce",f.nc),l.src=u(e),i=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=r[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+c+")");o.type=a,o.request=c,t[1](o)}r[e]=void 0}};var d=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(n)},f.m=e,f.c=a,f.d=function(e,n,t){f.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},f.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(e,n){if(1&n&&(e=f(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(f.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)f.d(t,a,function(n){return e[n]}.bind(null,a));return t},f.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return f.d(n,"a",n),n},f.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},f.p="",f.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var d=0;d<i.length;d++)n(i[d]);var s=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var a=t("64a9"),c=t.n(a);c.a},2862:function(e,n,t){"use strict";var a=t("9242"),c=t.n(a);c.a},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var a=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("el-container",[t("el-header",{staticClass:"header"},[t("navmenu")],1),t("el-main",[t("VautoSummary"),t("router-view")],1),t("el-footer",[t("el-row",{staticClass:"footer",attrs:{type:"flex",justify:"center"}},[t("span",{staticClass:"footerText"},[e._v("\n            Powered by\n            "),t("el-tag",{staticStyle:{margin:"0 .5rem"},attrs:{type:"success",size:"mini"}},[e._v("Vue")]),e._v("Copyright © all rights reserved\n          ")],1)])],1)],1)],1)},r=[],o=t("6eaf"),u={name:"app",components:{navmenu:o["default"]}},f=u,i=(t("034f"),t("2877")),l=Object(i["a"])(f,c,r,!1,null,null,null),d=l.exports,s=t("5c96"),h=t.n(s),m=(t("0fae"),t("f5df"),t("673e"),t("ac6a"),t("8c4f")),p=t("a21b"),b=t.n(p);a["default"].use(m["a"]);var k=[{path:"*",redirect:"/myIntro"}];b.a.forEach(function(e){e.sub.forEach(function(e){k.push({path:"/".concat(e.componentName),name:e.componentName,component:function(){return t("ce68")("./".concat(e.componentName))}})})});var v=new m["a"]({routes:k});a["default"].config.productionTip=!1,a["default"].use(h.a),new a["default"]({router:v,render:function(e){return e(d)}}).$mount("#app")},"64a9":function(e,n,t){},"6eaf":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("el-row",[t("el-col",{attrs:{xs:8,sm:8,md:6,lg:4}},[t("div",{staticClass:"head-wrap"},[t("span",[t("i",{staticClass:"el-icon-edit"})]),e._v(" Resume")])]),t("el-col",{attrs:{xs:16,sm:16,md:18,lg:20}},[t("el-menu",{staticClass:"el-menu-vertical",attrs:{mode:"horizontal",router:"","unique-opened":"","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:e.handleOpen,close:e.handleClose}},e._l(e.menu,function(n){return t("el-submenu",{key:n.id,attrs:{index:n.id}},[t("template",{slot:"title"},[t("span",{domProps:{textContent:e._s(n.name)}})]),e._l(n.sub,function(n){return t("el-menu-item-group",{key:n.componentName,staticClass:"over-hide"},[t("el-menu-item",{attrs:{index:n.componentName},domProps:{textContent:e._s(n.name)}})],1)})],2)}),1)],1)],1)},c=[],r=t("a21b"),o=t.n(r),u={data:function(){return{menu:o.a}}},f=u,i=(t("2862"),t("2877")),l=Object(i["a"])(f,a,c,!1,null,"7aa70d80",null);n["default"]=l.exports},9242:function(e,n,t){},a21b:function(e,n){e.exports=[{name:"About Me",id:"aboutMe",sub:[{name:"Introduction",componentName:"myIntro"},{name:"Autobiography",componentName:"autobiography"}]},{name:"Portfolio",id:"myPortfolio",sub:[{name:"====== Grid View ======",componentName:"prf_grid"},{name:"Home Care Service",componentName:"prf_hoca"},{name:"Smart Home Control",componentName:"prf_smartVille"},{name:"Social Network of Sport",componentName:"prf_locomo"},{name:"Fitness App",componentName:"prf_fitmi"},{name:"Digital Signage",componentName:"prf_d230"},{name:"Facial Recognition",componentName:"prf_br06"},{name:"Beacon Solution",componentName:"prf_ips"},{name:"Others",componentName:"prf_others"}]}]},ce68:function(e,n,t){var a={"./autobiography":["67d7","chunk-e6f22838"],"./autobiography.vue":["67d7","chunk-e6f22838"],"./autobiography_summary":["a498","chunk-2d208348"],"./autobiography_summary.vue":["a498","chunk-2d208348"],"./myIntro":["c319","chunk-8977a82a"],"./myIntro.vue":["c319","chunk-8977a82a"],"./myIntro_Bill":["3e3b","chunk-c343d3a4"],"./myIntro_Bill.vue":["3e3b","chunk-c343d3a4"],"./myIntro_skill_design":["e14d","chunk-4f647c82"],"./myIntro_skill_design.vue":["e14d","chunk-4f647c82"],"./myIntro_skill_prototype":["92cc","chunk-60db8a42"],"./myIntro_skill_prototype.vue":["92cc","chunk-60db8a42"],"./myIntro_skill_website":["afaa","chunk-4ae21241"],"./myIntro_skill_website.vue":["afaa","chunk-4ae21241"],"./myIntro_skill_wireflow":["2b28","chunk-9564bd8c"],"./myIntro_skill_wireflow.vue":["2b28","chunk-9564bd8c"],"./navMenu":["6eaf"],"./navMenu.vue":["6eaf"],"./prf_br06":["a394","chunk-61a3f8c3"],"./prf_br06.vue":["a394","chunk-61a3f8c3"],"./prf_d230":["c1f6","chunk-504b24ae"],"./prf_d230.vue":["c1f6","chunk-504b24ae"],"./prf_fitmi":["250b","chunk-95f9b322"],"./prf_fitmi.vue":["250b","chunk-95f9b322"],"./prf_grid":["5aa4","chunk-12a868f4"],"./prf_grid.vue":["5aa4","chunk-12a868f4"],"./prf_hoca":["e5f0","chunk-4c1ce880"],"./prf_hoca.vue":["e5f0","chunk-4c1ce880"],"./prf_ips":["fbc7","chunk-23d430dd"],"./prf_ips.vue":["fbc7","chunk-23d430dd"],"./prf_locomo":["c0be","chunk-541dd53b"],"./prf_locomo.vue":["c0be","chunk-541dd53b"],"./prf_others":["c7d2","chunk-0fc1594c"],"./prf_others.vue":["c7d2","chunk-0fc1594c"],"./prf_smartVille":["fa55","chunk-bf35b6f4"],"./prf_smartVille.vue":["fa55","chunk-bf35b6f4"]};function c(e){var n=a[e];return n?Promise.all(n.slice(1).map(t.e)).then(function(){var e=n[0];return t(e)}):Promise.resolve().then(function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n})}c.keys=function(){return Object.keys(a)},c.id="ce68",e.exports=c}});
//# sourceMappingURL=app.7d573a04.js.map