(function(e){function t(t){for(var n,s,i=t[0],c=t[1],u=t[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={"app~01e7b97c":0},a=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;a.push([0,"chunk-vendors~e4173fa2","chunk-vendors~d939e436","chunk-vendors~fdc6512a","chunk-vendors~0605657e","chunk-vendors~d2305125"]),r()})({0:function(e,t,r){e.exports=r("5722")},"0527":function(e,t,r){"use strict";var n=r("d528"),o=r("0c7b"),a=r("2877"),s=Object(a["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},"0c7b":function(e,t,r){"use strict";var n=r("7c56"),o=r.n(n);t["default"]=o.a},"166a":function(e,t,r){"use strict";r("c140")},5722:function(e,t,r){"use strict";r.r(t);r("e6cf"),r("e260");var n=r("2b0e"),o=r("2f62"),a=r("bc3a"),s=r.n(a);n["a"].use(o["a"]);var i=new o["a"].Store({state:{kirby:{site:[],pages:[],page:[]},loading:!1,loaded:!1},actions:{loadData({commit:e},t){console.info("Loading "+t+" from the API");const r=s.a.create({method:"GET",credentials:"include",mode:"no-cors",headers:{Accept:"*/*"}});r.get("json?path="+t.substr(t.indexOf("/")+1)+"&structure=1").then(r=>{e("setupKirby",r.data,t),e("updateKirby",t)})}},mutations:{setupKirby(e,t){e.kirby.site=t.site,e.kirby.pages=t.pages,e.loaded=!0},updateKirby(e,t){var r=!!Object.keys(e.kirby.pages).length&&e.kirby.pages;if(r){var n=t.substr(t.indexOf("/")+1).split("/"),o=!1,a=r;while(n.length){var i=n.shift();o=a[i],o&&(a="object"===typeof o.children?o.children:[])}o?!0===o.extended?e.kirby.page=o:s.a.get("json?path="+o.uri).then(t=>{e.kirby.page=t.data.page}):console.error("No page!",t,e)}else console.error("No pages!",t,e)}}}),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{attrs:{id:"Content"}},[r("router-view"),r("arrow",{attrs:{direction:"left"}})],1)},u=[],l=r("e0c1"),p=r.n(l),d={computed:{kirby(){return this.$store.state.kirby}},methods:{urltopath(e){let t=new URL(e);return t.pathname},md(e){return p()(e)},pageFromURI(e,t){if(t&&e){var r=e.split("/"),n=!1,o=t;while(r.length){var a=r.shift();console.log(a),n=o[a],n&&(o="object"===typeof n.children?n.children:[])}if(n)return n;console.error("No page!",e,t)}else console.error("No pages!",e,t)}}},f={mixins:[d]},h=f,b=r("2877"),m=Object(b["a"])(h,c,u,!1,null,null,null),v=m.exports,y=[{path:"/",component:v,children:[]}],g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{style:e.style,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 12"}},[r("path",{attrs:{d:"M11.6,6H0 M8,2.5L11.6,6L8,9.5"}}),r("line",{attrs:{x1:"14.2",y1:"0",x2:"14.2",y2:"12"}})])},w=[],x={props:["direction"],computed:{style:function(){return"left"==this.direction?"transform: scaleX(-1);":"right"==this.direction?"transform: scaleX(1);":void 0}}},j=x,O=(r("8579"),Object(b["a"])(j,g,w,!1,null,null,null)),k=O.exports,_=r("0527");n["a"].component("arrow",k),n["a"].component("srcset",_["default"]);var $=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},P=[],K=(r("166a"),{}),E=Object(b["a"])(K,$,P,!1,null,null,null),M=E.exports,S=r("8c4f");n["a"].config.devtools=!0,n["a"].use(S["a"]);const L=new S["a"]({mode:"history",base:"/",routes:y,scrollBehavior(e){if(e.hash)return{selector:e.hash}}});new n["a"]({store:i,router:L,mixins:d,watch:{$route:{immediate:!0,handler:function(){this.setupOrUpdateKirby()}}},methods:{setupOrUpdateKirby:function(){var e="/"==this.$route.path?"home":this.$route.path;this.$store.state.loaded?this.$store.commit("updateKirby",e):this.$store.dispatch("loadData",e)}},render:e=>e(M)}).$mount("#app")},"7c56":function(e,t){e.exports={props:["file"],methods:{srcset(e){if(e.thumbnails){var t=[],r=[];return Object.keys(e.thumbnails).forEach(n=>{t.push(e.thumbnails[n]+" "+n.replace("w","")+"w"),r.push("(max-width: "+n.replace("w","")+"px) "+n.replace("w","")+"px")}),{srcset:t.join(", "),sizes:r.join(", ")}}}}}},8579:function(e,t,r){"use strict";r("9a18")},"9a18":function(e,t,r){},c140:function(e,t,r){},d528:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("img",e._b({attrs:{scr:"empty.gif"}},"img",e.srcset(e.file),!1))},o=[]}});
//# sourceMappingURL=app~01e7b97c.23d15fc6.js.map