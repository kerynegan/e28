(function(e){function t(t){for(var o,c,u=t[0],a=t[1],s=t[2],f=0,d=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,u=1;u<n.length;u++){var a=n[u];0!==r[a]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},i=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=a;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"391e":function(e,t,n){"use strict";var o=n("9e93"),r=n("650a");r["default"].render=o["a"],t["default"]=r["default"]},"4e13":function(e,t){},"541e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o,r=n("7a23"),i=n("9d64"),c=n.n(i),u={id:"dev_user"},a=Object(r["f"])("span",null,"Switch user (Jill is default):",-1),s={id:"header"},l=Object(r["f"])("img",{alt:"A Night In logo",id:"logo",src:c.a},null,-1),f={id:"main"};function d(e,t,n,o,i,c){var d=Object(r["t"])("router-link"),p=Object(r["t"])("router-view");return Object(r["o"])(),Object(r["d"])("div",null,[Object(r["f"])("div",u,[a,Object(r["f"])("button",{type:"button",onClick:t[1]||(t[1]=function(e){return i.userID=1})},"Jill"),Object(r["f"])("button",{type:"button",onClick:t[2]||(t[2]=function(e){return i.userID=2})},"Jamal"),Object(r["f"])("button",{type:"button",onClick:t[3]||(t[3]=function(e){return i.userID=3})},"Sandy"),Object(r["f"])("button",{type:"button",onClick:t[4]||(t[4]=function(e){return i.userID=4})},"Robert")]),Object(r["f"])("div",s,[l,Object(r["f"])("nav",null,[Object(r["f"])("ul",null,[Object(r["f"])("li",null,[(Object(r["o"])(!0),Object(r["d"])(r["a"],null,Object(r["s"])(i.links,(function(e){return Object(r["o"])(),Object(r["d"])(d,{key:e,to:i.paths[e]},{default:Object(r["y"])((function(){return[Object(r["e"])(Object(r["v"])(e),1)]})),_:2},1032,["to"])})),128))]),Object(r["f"])("li",null," User: "+Object(r["v"])(i.userID),1)])])]),Object(r["f"])("div",f,[Object(r["f"])(p)])])}var p=n("bc3a").create({baseURL:null!==(o="http://e28api.kerynegan.me")&&void 0!==o?o:"http://e28api.kerynegan.loc",responseType:"json"}),b={name:"App",data:function(){return{userID:null,movies:[],drinks:[],meals:[],selections:[],links:["home","movies","drinks","meals","matches"],paths:{home:"/",movies:"/movies",drinks:"/drinks",meals:"/meals",matches:"/matches"}}},mounted:function(){this.loadMovies(),this.loadDrinks(),this.loadMeals(),this.loadSelections(),this.userID=1},methods:{loadMovies:function(){var e=this;p.get("movie").then((function(t){e.movies=t.data.movie}))},loadDrinks:function(){var e=this;p.get("drink").then((function(t){e.drinks=t.data.drink}))},loadMeals:function(){var e=this;p.get("meal").then((function(t){e.meals=t.data.meal}))},loadSelections:function(){var e=this;p.get("selection").then((function(t){e.selections=t.data.selection}))}}};n("96e7");b.render=d;var h=b,v=n("6c02"),O=n("391e");const j={};var m=j;const y={};var g=y;const k={};var w=k;const D={};var I=D,M=Object(v["a"])({history:Object(v["b"])(),routes:[{path:"/",component:O["default"]},{path:"/movies",component:m},{path:"/movies/:id",component:m},{path:"/drinks",component:g},{path:"/meals",component:w},{path:"/matches",component:I}]});Object(r["c"])(h).use(M).mount("#app")},"650a":function(e,t,n){"use strict";var o=n("4e13"),r=n.n(o);n.d(t,"default",(function(){return r.a}))},"96e7":function(e,t,n){"use strict";n("541e")},"9d64":function(e,t,n){e.exports=n.p+"img/logo.cb2f3752.png"},"9e93":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n("7a23"),r={id:"home-page"},i=Object(o["f"])("p",null,"Excited for a night in with friends or your partner, but tired of trying to make plans that work for everyone?",-1),c=Object(o["f"])("h3",null,[Object(o["e"])("Then "),Object(o["f"])("strong",null,"A Night In"),Object(o["e"])(" is for you!")],-1),u=Object(o["f"])("p",null,"It's easy! Log in with your own account, and let us know what Movies, Meals, and Drinks you're interested in.",-1),a=Object(o["f"])("p",null,"Then, match up with your friend's profile, and we'll show you what you each have in common!",-1);function s(e,t,n,s,l,f){return Object(o["o"])(),Object(o["d"])("div",r,[i,c,u,a])}}});
//# sourceMappingURL=app.077f33da.js.map