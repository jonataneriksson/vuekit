(function(){"use strict";var t={628:function(t,e,r){var n=r(144),i=r(629),o=r(669),s=r.n(o);n.Z.use(i.ZP);var a=new i.ZP.Store({state:{submissionID:"",kirby:{site:[],pages:[],page:[]},loading:!1,loaded:!1},actions:{loadData({commit:t},e){console.info("Loading "+e+" from the API");const r=s().create({method:"GET",credentials:"include",mode:"no-cors",headers:{Accept:"*/*"}});r.get("json?path="+e.substr(e.indexOf("/")+1)+"&structure=1").then((r=>{t("setupKirby",r.data,e),t("updateKirby",e)}))}},mutations:{startSubmission(t,e){t.submissionID=e},setupKirby(t,e){t.kirby.site=e.site,t.kirby.pages=e.pages,t.loaded=!0},updateKirby(t,e){var r=!!Object.keys(t.kirby.pages).length&&t.kirby.pages;if(r){var n=e.substr(e.indexOf("/")+1).split("/"),i=!1,o=r;while(n.length){var a=n.shift();i="object"===typeof o[a]&&o[a],i&&(o="object"===typeof i.children&&i.children)}i&&(!0===i.extended?t.kirby.page=i:s().get("json?path="+i.uri+"&structure=0").then((e=>{t.kirby.page=e.data.page,t.kirby.page.children=i.children})))}}}}),u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{attrs:{id:"Landing"}},[r("router-view")],1)},l=[],c=r(280),d=r(272),f={data:function(){return{loading:!1,size:"default"}},computed:{kirby(){return this.$store.state.kirby},previousPath(){return this.$store.state.previousPath}},created(){window.addEventListener("resize",this.resizeHandler),this.size=window.getComputedStyle(document.querySelector("body"),":before").getPropertyValue("content").replace(/"/g,"")},destroyed(){window.removeEventListener("resize",this.resizeHandler)},watch:{"kirby.page":{immediate:!0,handler:function(){document.title=this.kirby.page.strings&&this.kirby.site?this.kirby.site.strings.title+" | "+this.kirby.page.strings.title:""}},$route:{immediate:!0,handler:function(t,e){e&&this.previousPath!==e.path&&this.$store.commit("changePreviousPath",e.path)}}},methods:{resizeHandler:function(t){this.size=window.getComputedStyle(document.querySelector("body"),":before").getPropertyValue("content").replace(/"/g,"")},firstOfArrayOrString:function(t){return"string"==typeof this.yaml(t)?t:this.yaml(t)[0]},getPagesFromPaths:function(t){let e=this,r="object"==typeof t?Object.values(t):t,n={};return r.map((function(t){let r=e.pageFromURI(t);r&&(n[r.uid]=e.pageFromURI(t))})),n},urltopath:function(t){let e=new URL(t);return e.pathname},md:function(t){return marked(t)},formattedDate:function(t,e){if(t){let r=new Date(t);return(0,c.ZP)(r,e)}return""},yaml(t){return t?d.ZP.load(t):""},pageFromURI(t){let e=this.kirby.pages;if(e&&t){var r=t.split("/"),n=!1,i=e;while(r.length){var o=r.shift();n=i[o],n&&(i="object"===typeof n.children?n.children:[])}if(n)return n}}}},h={mixins:[f]},p=h,m=r(1),y=(0,m.Z)(p,u,l,!1,null,"28cdb61f",null),g=y.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.kirby.page.template?r("main",{attrs:{id:"Intro"}},[t._v(" "+t._s(t.kirby)+" ")]):t._e()},v=[],w={mixins:[f]},k=w,x=(0,m.Z)(k,b,v,!1,null,"1026fdf4",null),O=x.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return"default"==t.kirby.page.template?r("main",{attrs:{id:"Default"}},[t._v(" Default ")]):t._e()},P=[],Z={mixins:[f]},$=Z,j=(0,m.Z)($,_,P,!1,null,"40efd642",null),E=(j.exports,[{path:"/",component:g,children:[{name:"Cover",path:"",component:O}]}]),K=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("svg",{staticClass:"arrow",style:t.style,attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 45 35"}},[r("polygon",{staticClass:"arrow",attrs:{points:"26.9,0 25,1.8 39.8,16.1 0,16.1 0,18.9 39.8,18.9 25,33.2 26.9,35 45,17.5 "}})])])},z=[],D={props:{direction:{type:String,default:"right"}},computed:{style:function(){var t="";return"left"==this.direction&&(t+="transform: scaleX(-1);"),"right"==this.direction&&(t+="transform: scaleX(1);"),t}}},S=D,C=(0,m.Z)(S,K,z,!1,null,null,null),I=C.exports;n.Z.component("Arrow",I);var U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"App"}},[r("router-view")],1)},A=[],F={},L=(0,m.Z)(F,U,A,!1,null,null,null),R=L.exports,T=r(345);n.Z.config.devtools=!0,n.Z.use(T.Z);const V=new T.Z({mode:"history",base:"/",routes:E,scrollBehavior(t){if(t.hash)return{selector:t.hash}}});new n.Z({store:a,router:V,mixins:f,watch:{$route:{immediate:!0,handler:function(){this.setupOrUpdateKirby()}}},methods:{setupOrUpdateKirby:function(){window.scrollTo(0,0);var t="/"==this.$route.path?"home":this.$route.path;this.$store.state.loaded?this.$store.commit("updateKirby",t):this.$store.dispatch("loadData",t)}},render:t=>t(R)}).$mount("#app")}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,n,i,o){if(!n){var s=1/0;for(c=0;c<t.length;c++){n=t[c][0],i=t[c][1],o=t[c][2];for(var a=!0,u=0;u<n.length;u++)(!1&o||s>=o)&&Object.keys(r.O).every((function(t){return r.O[t](n[u])}))?n.splice(u--,1):(a=!1,o<s&&(s=o));if(a){t.splice(c--,1);var l=i();void 0!==l&&(e=l)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[n,i,o]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,o,s=n[0],a=n[1],u=n[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(u)var c=u(r)}for(e&&e(n);l<s.length;l++)o=s[l],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(c)},n=self["webpackChunkVueKit"]=self["webpackChunkVueKit"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[772,200,727,582,761],(function(){return r(628)}));n=r.O(n)})();
//# sourceMappingURL=app-legacy.ed0d1d4f.js.map