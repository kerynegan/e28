(function(e){function t(t){for(var r,c,a=t[0],u=t[1],s=t[2],d=0,h=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&h.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(h.length)h.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function c(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-0bc76413":"83885af8","chunk-151a2d7a":"e2490947","chunk-2d0aa9e3":"cf3c926d","chunk-2d0ea123":"04193951","chunk-3434b797":"53d32dc4","chunk-2d21e72e":"7740fcfa","chunk-4becdbe0":"53df47a8","chunk-37e9e59e":"e91b97bd","chunk-43fb1788":"bfa32ac8","chunk-52e04353":"588c3624","chunk-6c189ed6":"59e96078","chunk-7a6933b8":"66106c80","chunk-f9dcaf50":"9783410d"}[e]+".js"}function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=c(e);var s=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,n[1](s)}o[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0091":function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return o}));var o=n("bc3a").create({baseURL:null!==(r="http://e28api.kerynegan.me")&&void 0!==r?r:"http://e28api.kerynegan.loc",responseType:"json",withCredentials:!0})},"541e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=(n("b0c0"),n("9d64")),i=n.n(o),c={id:"header"},a=Object(r["h"])("img",{alt:"A Night In logo",id:"logo",src:i.a},null,-1),u={key:0},s={key:1},d=Object(r["h"])("a",{href:"/account"},"Login or Register",-1),l={id:"main"},h=Object(r["h"])("div",{id:"footer"},[Object(r["h"])("p",null,[Object(r["g"])("Copyright (c) Keryn Egan 2021   |   Created for DGMD E-28 Spring 2021   |   "),Object(r["h"])("a",{href:"/credits"},"Credits Page")])],-1);function f(e,t,n,o,i,f){var p=Object(r["v"])("router-link"),m=Object(r["v"])("router-view");return Object(r["q"])(),Object(r["e"])("div",null,[Object(r["h"])("div",c,[a,Object(r["h"])("nav",null,[Object(r["h"])("ul",null,[Object(r["h"])("li",null,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["u"])(i.links,(function(e){return Object(r["q"])(),Object(r["e"])(p,{key:e,to:i.paths[e],"data-test":"nav"},{default:Object(r["C"])((function(){return[Object(r["g"])(Object(r["x"])(e),1)]})),_:2},1032,["to"])})),128))]),f.user?(Object(r["q"])(),Object(r["e"])("li",u," User: "+Object(r["x"])(f.user.name)+", ID Number: "+Object(r["x"])(f.user.id),1)):(Object(r["q"])(),Object(r["e"])("li",s,[d]))])])]),Object(r["h"])("div",l,[Object(r["h"])(m,{movies:i.movies,onUpdateMovies:f.loadMovies,drinks:i.drinks,onUpdateDrinks:f.loadDrinks,meals:i.meals,onUpdateMeals:f.loadMeals,onUpdateSelections:f.loadSelections},null,8,["movies","onUpdateMovies","drinks","onUpdateDrinks","meals","onUpdateMeals","onUpdateSelections"])]),h])}var p=n("0091"),m={name:"App",data:function(){return{movies:[],drinks:[],meals:[],showConfirmation:!1,links:["home","movies","drinks","meals","account"],paths:{home:"/",movies:"/movies",drinks:"/drinks",meals:"/meals",account:"/account"}}},computed:{selections:function(){return this.$store.state.selections},user:function(){return this.$store.state.user}},mounted:function(){this.$store.dispatch("authUser"),this.loadMovies(),this.loadDrinks(),this.loadMeals(),this.loadSelections()},methods:{loadMovies:function(){var e=this;p["a"].get("movie").then((function(t){e.movies=t.data.movie}))},loadDrinks:function(){var e=this;p["a"].get("drink").then((function(t){e.drinks=t.data.drink}))},loadMeals:function(){var e=this;p["a"].get("meal").then((function(t){e.meals=t.data.meal}))},loadSelections:function(){this.$store.dispatch("fetchSelections")},rejectMovie:function(e){var t=this;p["a"].post("/selection",{user_id:this.user.id,movie_id:e,movie_decision:"rejected"}).then((function(e){e.data.errors?t.errors=e.data.errors:t.showConfirmation=!0}))},selectDrink:function(e){var t=this;p["a"].post("/selection",{user_id:this.user.id,drink_id:e,drink_decision:"selected"}).then((function(e){e.data.errors?t.errors=e.data.errors:t.showConfirmation=!0}))},rejectDrink:function(e){var t=this;p["a"].post("/selection",{user_id:this.user.id,drink_id:e,drink_decision:"rejected"}).then((function(e){e.data.errors?t.errors=e.data.errors:t.showConfirmation=!0}))},selectMeal:function(e){var t=this;p["a"].post("/selection",{user_id:this.user.id,meal_id:e,meal_decision:"selected"}).then((function(e){e.data.errors?t.errors=e.data.errors:t.showConfirmation=!0}))},rejectMeal:function(e){var t=this;p["a"].post("/selection",{user_id:this.user.id,meal_id:e,meal_decision:"rejected"}).then((function(e){e.data.errors?t.errors=e.data.errors:t.showConfirmation=!0}))}}};n("96e7");m.render=f;var b=m,v=n("1da1"),k=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),j=(n("4de4"),n("5502")),g=!1,O=g?[Object(j["a"])({})]:[],y=new j["b"].Store({plugins:O,state:function(){return{selections:[],user:null}},mutations:{setSelections:function(e,t){e.selections=t},setUser:function(e,t){e.user=t}},actions:{fetchSelections:function(e){p["a"].get("selection").then((function(t){e.commit("setSelections",t.data.selection)}))},makeSelection:function(e){return new Promise((function(t){p["a"].post("auth").then((function(n){n.data.authenticated?e.commit("setSelections",n.data.user):e.commit("setSelections",!1),t()}))}))},authUser:function(e){return new Promise((function(t){p["a"].post("auth").then((function(n){n.data.authenticated?e.commit("setUser",n.data.user):e.commit("setUser",!1),t()}))}))}},getters:{getSelectionById:function(e){return function(t){return e.selections.filter((function(e){return e.id==t}),t)[0]}},getSelectionByMovieId:function(e){return function(t){return e.selections.filter((function(e){return e.movie_id==t}),t)[0]}},getSelectionByUserId:function(e){return function(t){return e.selections.filter((function(e){return e.user_id==t}),t)[0]}}}}),w=y,_=[{path:"/",component:function(){return n.e("chunk-f9dcaf50").then(n.bind(null,"391e"))}},{path:"/movies",component:function(){return n.e("chunk-37e9e59e").then(n.bind(null,"70fd"))}},{path:"/movies/:id",component:function(){return n.e("chunk-151a2d7a").then(n.bind(null,"dee4"))},props:!0},{path:"/drinks",component:function(){return n.e("chunk-43fb1788").then(n.bind(null,"05ec"))}},{path:"/drinks/:id",component:function(){return n.e("chunk-6c189ed6").then(n.bind(null,"d66b"))},props:!0},{path:"/meals",component:function(){return Promise.all([n.e("chunk-3434b797"),n.e("chunk-4becdbe0")]).then(n.bind(null,"501ec"))}},{path:"/meals/:id",component:function(){return Promise.all([n.e("chunk-3434b797"),n.e("chunk-2d21e72e")]).then(n.bind(null,"d639"))},props:!0},{path:"/selections",name:"decisions",component:function(){return n.e("chunk-52e04353").then(n.bind(null,"66be"))},meta:{requiresAuth:!0}},{path:"/credits",component:function(){return n.e("chunk-0bc76413").then(n.bind(null,"66f7"))}},{path:"/account",name:"account",component:function(){return n.e("chunk-2d0ea123").then(n.bind(null,"8fdc"))}},{path:"/register",component:function(){return n.e("chunk-7a6933b8").then(n.bind(null,"637f"))}},{path:"/denied",component:function(){return n.e("chunk-2d0aa9e3").then(n.bind(null,"127c"))}}],S=Object(k["a"])({history:Object(k["b"])(),routes:_});S.beforeEach(function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.matched.some((function(e){return e.meta.requiresAuth})),r=function(e){return!(n&&!e)||"/denied"},null!==w.state.user){e.next=10;break}return e.next=5,w.dispatch("authUser");case 5:if(o=e.sent,null===o){e.next=8;break}return e.abrupt("return",r(w.state.user));case 8:e.next=11;break;case 10:return e.abrupt("return",r(w.state.user));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Object(r["d"])(b).use(S).use(w).mount("#app")},"96e7":function(e,t,n){"use strict";n("541e")},"9d64":function(e,t,n){e.exports=n.p+"img/logo.cb2f3752.png"}});
//# sourceMappingURL=app.4c3b2e56.js.map