(function(e){function t(t){for(var o,c,a=t[0],s=t[1],l=t[2],p=0,d=[];p<a.length;p++)c=a[p],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&d.push(i[c][0]),i[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(o=!1)}o&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},i={app:0},r=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0396":function(e,t,n){"use strict";var o=n("f3a3"),i=n.n(o);n.d(t,"default",(function(){return i.a}))},"05b5":function(e,t,n){e.exports=n.p+"img/3.9660af6e.jpg"},"18b9":function(e,t,n){e.exports=n.p+"img/5.fc87792b.jpg"},"1e9e":function(e,t,n){e.exports=n.p+"img/21.45c9121a.jpg"},"24f6":function(e,t,n){e.exports=n.p+"img/28.332a84ad.jpg"},"377a":function(e,t,n){e.exports=n.p+"img/9.a52e52f1.jpg"},"391e":function(e,t,n){"use strict";var o=n("9e93"),i=n("650a");i["default"].render=o["a"],t["default"]=i["default"]},"41cc":function(e,t,n){e.exports=n.p+"img/16.07c9db90.jpg"},"423a":function(e,t,n){e.exports=n.p+"img/15.5ace8ca4.jpg"},4771:function(e,t,n){e.exports=n.p+"img/27.092a7c9f.jpg"},"47d9":function(e,t,n){e.exports=n.p+"img/6.fd7dd528.jpg"},"49ee":function(e,t,n){e.exports=n.p+"img/24.6189bac1.jpg"},"4e13":function(e,t){},"541e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o,i=n("7a23"),r=n("9d64"),c=n.n(r),a={id:"dev_user"},s=Object(i["g"])("span",null,"Switch user (Jill is default):",-1),l={id:"header"},u=Object(i["g"])("img",{alt:"A Night In logo",id:"logo",src:c.a},null,-1),p={id:"main"},d=Object(i["g"])("div",{id:"footer"},[Object(i["g"])("p",null,[Object(i["f"])("Copyright (c) Keryn Egan 2021   |   Created for DGMD E-28 Spring 2021   |   "),Object(i["g"])("a",{href:"/credits"},"Credits Page")])],-1);function f(e,t,n,o,r,c){var f=Object(i["u"])("router-link"),g=Object(i["u"])("router-view");return Object(i["p"])(),Object(i["d"])("div",null,[Object(i["g"])("div",a,[s,Object(i["g"])("button",{type:"button",onClick:t[1]||(t[1]=function(e){return r.userID=1})},"Jill"),Object(i["g"])("button",{type:"button",onClick:t[2]||(t[2]=function(e){return r.userID=2})},"Jamal"),Object(i["g"])("button",{type:"button",onClick:t[3]||(t[3]=function(e){return r.userID=3})},"Sandy"),Object(i["g"])("button",{type:"button",onClick:t[4]||(t[4]=function(e){return r.userID=4})},"Robert")]),Object(i["g"])("div",l,[u,Object(i["g"])("nav",null,[Object(i["g"])("ul",null,[Object(i["g"])("li",null,[(Object(i["p"])(!0),Object(i["d"])(i["a"],null,Object(i["t"])(r.links,(function(e){return Object(i["p"])(),Object(i["d"])(f,{key:e,to:r.paths[e]},{default:Object(i["z"])((function(){return[Object(i["f"])(Object(i["w"])(e),1)]})),_:2},1032,["to"])})),128))]),Object(i["g"])("li",null," User: "+Object(i["w"])(r.userID),1)])])]),Object(i["g"])("div",p,[Object(i["g"])(g,{movies:r.movies,onUpdateMovies:c.loadMovies,meals:r.meals,onUpdateMeals:c.loadMeals,drinks:r.drinks,onUpdateDrinks:c.loadDrinks,selections:r.selections,onUpdateSelections:c.loadSelections,onSelectMovie:t[5]||(t[5]=function(e){return c.selectMovie(e)}),onReloadMovies:t[6]||(t[6]=function(e){return c.loadMovies(e)}),onSelectMeal:t[7]||(t[7]=function(e){return c.selectMeal(e)}),onSelectDrink:t[8]||(t[8]=function(e){return c.selectDrink(e)}),"show-confirmation":r.showConfirmation},null,8,["movies","onUpdateMovies","meals","onUpdateMeals","drinks","onUpdateDrinks","selections","onUpdateSelections","show-confirmation"])]),d])}var g=n("bc3a").create({baseURL:null!==(o="http://e28api.kerynegan.me")&&void 0!==o?o:"http://e28api.kerynegan.loc",responseType:"json"}),j={name:"App",data:function(){return{userID:null,movies:[],drinks:[],meals:[],selections:[],showConfirmation:!1,links:["home","movies","drinks","meals","matches"],paths:{home:"/",movies:"/movies",drinks:"/drinks",meals:"/meals",selections:"/selections",matches:"/matches"}}},mounted:function(){this.loadMovies(),this.loadDrinks(),this.loadMeals(),this.loadSelections(),this.userID=1},methods:{loadMovies:function(){var e=this;g.get("movie").then((function(t){e.movies=t.data.movie}))},loadDrinks:function(){var e=this;g.get("drink").then((function(t){e.drinks=t.data.drink}))},loadMeals:function(){var e=this;g.get("meal").then((function(t){e.meals=t.data.meal}))},loadSelections:function(){var e=this;g.get("selection").then((function(t){e.selections=t.data.selection}))},selectMovie:function(e){var t=this;g.post("/selection",{user_id:this.userID,movie_id:e}).then((function(e){e.data.errors?t.errors=e.data.errors:(t.showConfirmation=!0,t.loadMovies())}))},selectMeal:function(e){var t=this;g.post("/selection",{user_id:this.userID,meal_id:e}).then((function(e){e.data.errors?(t.errors=e.data.errors,t.displayRandom("meal")):(t.showConfirmation=!0,t.loadMeals())}))},selectDrink:function(e){var t=this;g.post("/selection",{user_id:this.userID,drink_id:e}).then((function(e){e.data.errors?(t.errors=e.data.errors,t.displayRandom("drink")):(t.showConfirmation=!0,t.loadDrinks())}))}}};n("96e7");j.render=f;var b=j,m=n("6c02"),O=n("391e"),h={id:"movies-page"},v=Object(i["g"])("h1",null,"Movies",-1),y={key:0},w={key:1},k=Object(i["g"])("p",null,"Loading...",-1);function M(e,t,n,o,r,c){var a=Object(i["u"])("show-movie");return Object(i["p"])(),Object(i["d"])("div",h,[v,c.movie?(Object(i["p"])(),Object(i["d"])("div",y,[Object(i["g"])(a,{movie:c.movie,onSelectIt:t[1]||(t[1]=function(e){return c.selectMovie(e)})},null,8,["movie"])])):c.reloadMovies?(Object(i["p"])(),Object(i["d"])("div",w,[k])):Object(i["e"])("",!0)])}n("a9e3"),n("4de4"),n("a15b"),n("1276"),n("ac1f");var x={class:"show-movie"},D={class:"split left"},S={class:"split right"},C={class:"title"},_={class:"notes"},I={class:"rating"},U=Object(i["f"])(),T={class:"runtime"},A={class:"tagline"},E={class:"director"},P={class:"synopsis"},R={class:"url"},N=Object(i["g"])("br",null,null,-1),Y=Object(i["f"])("(opens in new window)"),J=Object(i["g"])("h3",null,"Interested in this movie?:",-1),$={key:0};function B(e,t,n,o,r,c){return Object(i["p"])(),Object(i["d"])("div",x,[Object(i["g"])("div",D,[Object(i["g"])("img",{src:c.imgSrc},null,8,["src"])]),Object(i["g"])("div",S,[Object(i["g"])("h2",C,Object(i["w"])(n.movie.title)+" ("+Object(i["w"])(n.movie.year)+")",1),Object(i["g"])("h3",null,"ID is "+Object(i["w"])(n.movie.id),1),Object(i["g"])("p",_,[Object(i["g"])("span",I,"Rated: "+Object(i["w"])(n.movie.mpaa_rating),1),U,Object(i["g"])("span",T,"Runtime: "+Object(i["w"])(n.movie.runtime)+" minutes",1)]),Object(i["g"])("h3",A,Object(i["w"])(n.movie.tagline),1),Object(i["g"])("p",E,"Directed by: "+Object(i["w"])(n.movie.director.split(",").join(" and ")),1),Object(i["g"])("p",P,Object(i["w"])(n.movie.synopsis),1),Object(i["g"])("p",null,"Genres: "+Object(i["w"])(n.movie.genres.split(",").join(", ")),1),Object(i["g"])("p",R,[Object(i["g"])("a",{href:n.movie.tmdb_url,target:"_blank"},"View more details at The Movie Database",8,["href"]),N,Y]),J,Object(i["g"])("button",{class:"yes",type:"button",onClick:t[1]||(t[1]=function(e){return c.selectIt(n.movie.id)})},"YES"),n.showConfirmation?(Object(i["p"])(),Object(i["d"])("p",$,"Your movie was added to your selections!")):Object(i["e"])("",!0)])])}var L={props:{movie:{type:Object},showConfirmation:{type:Boolean,default:!1}},computed:{imgSrc:function(){try{return n("5fd3")("./"+this.movie.id+".jpg")}catch(e){return n("e4e6")}}},methods:{selectIt:function(e){this.$emit("select-it",e)}}};L.render=B;var z=L,F={components:{"show-movie":z},props:{id:{type:Number},movies:{type:Array,default:null}},data:function(){return{}},computed:{movie:function(){var e=this;return this.movies.filter((function(t){return t.id==Math.floor(Math.random()*e.movies.length)}),this.id)[0]},movieNotFound:function(){return this.reloadMovies()}},methods:{selectMovie:function(e){this.$emit("select-movie",e)},reloadMovies:function(){this.$emit("reload-movies")}}};F.render=M;var G=F,K=(n("b0c0"),{id:"drinks-page"}),V=Object(i["g"])("h1",null,"Drinks",-1),q={class:"split left"},H={class:"split right"},Q={class:"title"},W={key:0};function X(e,t,n,o,r,c){return Object(i["p"])(),Object(i["d"])("div",K,[V,(Object(i["p"])(!0),Object(i["d"])(i["a"],null,Object(i["t"])(n.drinks,(function(e){return Object(i["p"])(),Object(i["d"])("div",{class:"show-drink",key:e.id},[Object(i["g"])("div",q,[Object(i["g"])("img",{src:c.imgSrc(e.id)},null,8,["src"])]),Object(i["g"])("div",H,[Object(i["g"])("h2",Q,Object(i["w"])(e.name),1),Object(i["g"])("button",{class:"yes",type:"button",onClick:function(t){return c.selectIt(e.id)}},"YES",8,["onClick"]),n.showConfirmation?(Object(i["p"])(),Object(i["d"])("p",W,"Your drink was added to your selections!")):Object(i["e"])("",!0)])])})),128))])}var Z={props:{drinks:{type:Array,default:null},showConfirmation:{type:Boolean,default:!1}},methods:{imgSrc:function(e){try{return n("5fd3")("./"+e+".jpg")}catch(t){return n("e4e6")}},selectIt:function(e){this.$emit("select-drink",e)}},data:function(){return{}}};Z.render=X;var ee=Z,te=(n("a4d3"),n("e01a"),{id:"meals-page"}),ne=Object(i["g"])("h1",null,"Meals",-1),oe={class:"split left"},ie={class:"split right"},re={class:"title"},ce={class:"notes"},ae={class:"rating"},se=Object(i["f"])(),le={class:"runtime"},ue={class:"director"},pe={class:"synopsis"},de={class:"url"},fe=Object(i["g"])("br",null,null,-1),ge=Object(i["f"])("(opens in new window)"),je={key:0};function be(e,t,n,o,r,c){return Object(i["p"])(),Object(i["d"])("div",te,[ne,(Object(i["p"])(!0),Object(i["d"])(i["a"],null,Object(i["t"])(n.meals,(function(e){return Object(i["p"])(),Object(i["d"])("div",{class:"show-meal",key:e.id},[Object(i["g"])("div",oe,[Object(i["g"])("img",{src:c.imgSrc(e.id)},null,8,["src"])]),Object(i["g"])("div",ie,[Object(i["g"])("h2",re,Object(i["w"])(e.name),1),Object(i["g"])("p",ce,[Object(i["g"])("span",ae,"Serving Size: "+Object(i["w"])(e.serving_size),1),se,Object(i["g"])("span",le,"Total Time: "+Object(i["w"])(e.total_time)+" minutes",1)]),Object(i["g"])("p",ue,"Author: "+Object(i["w"])(e.author.split(",").join(" and ")),1),Object(i["g"])("p",pe,Object(i["w"])(e.description),1),Object(i["g"])("p",null,"Keywords: "+Object(i["w"])(e.keywords.split(",").join(", ")),1),Object(i["g"])("p",null,"Categories: "+Object(i["w"])(e.category.split(",").join(", ")),1),Object(i["g"])("p",de,[Object(i["g"])("a",{href:e.spoonacular_url,target:"_blank"},"View more details at Spoonacular",8,["href"]),fe,ge]),Object(i["g"])("button",{class:"yes",type:"button",onClick:function(t){return c.selectIt(e.id)}},"YES",8,["onClick"]),n.showConfirmation?(Object(i["p"])(),Object(i["d"])("p",je,"Your meal was added to your selections!")):Object(i["e"])("",!0)])])})),128))])}var me={props:{meals:{type:Array,default:null},showConfirmation:{type:Boolean,default:!1}},methods:{imgSrc:function(e){try{return n("5fd3")("./"+e+".jpg")}catch(t){return n("e4e6")}},selectIt:function(e){this.$emit("select-meal",e)}},data:function(){return{}}};me.render=be;var Oe=me,he={id:"matches-page"},ve=Object(i["g"])("h1",null,"Matches",-1);function ye(e,t,n,o,r,c){return Object(i["p"])(),Object(i["d"])("div",he,[ve])}var we={props:{matches:{type:Array,default:null}},methods:{imgSrc:function(e){try{return n("5fd3")("./"+e+".jpg")}catch(t){return n("e4e6")}}},data:function(){return{}}};we.render=ye;var ke=we,Me=n("66f7"),xe=Object(m["a"])({history:Object(m["b"])(),routes:[{path:"/",component:O["default"]},{path:"/movies",component:G},{path:"/movies/:id",component:G,redirect:"/movies"},{path:"/drinks",component:ee},{path:"/meals",component:Oe},{path:"/matches",component:ke},{path:"/credits",component:Me["default"]}]});Object(i["c"])(b).use(xe).mount("#app")},"5fd3":function(e,t,n){var o={"./1.jpg":"7282","./10.jpg":"7b34","./11.jpg":"c30c","./12.jpg":"dbfa","./13.jpg":"e7a6","./14.jpg":"9ea8","./15.jpg":"423a","./16.jpg":"41cc","./17.jpg":"79e8","./18.jpg":"9269","./19.jpg":"b963","./2.jpg":"d94e","./20.jpg":"a706","./21.jpg":"1e9e","./22.jpg":"70a5","./23.jpg":"bf4e","./24.jpg":"49ee","./25.jpg":"af5d","./26.jpg":"6458","./27.jpg":"4771","./28.jpg":"24f6","./29.jpg":"fa31","./3.jpg":"05b5","./30.jpg":"c8e9","./4.jpg":"89de","./5.jpg":"18b9","./6.jpg":"47d9","./7.jpg":"79f5","./8.jpg":"e8a6","./9.jpg":"377a","./example.jpg":"e4e6"};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=r,e.exports=i,i.id="5fd3"},6458:function(e,t,n){e.exports=n.p+"img/26.7bef937d.jpg"},"650a":function(e,t,n){"use strict";var o=n("4e13"),i=n.n(o);n.d(t,"default",(function(){return i.a}))},"66f7":function(e,t,n){"use strict";var o=n("75aa"),i=n("0396");i["default"].render=o["a"],t["default"]=i["default"]},"70a5":function(e,t,n){e.exports=n.p+"img/22.8e905a3e.jpg"},7282:function(e,t,n){e.exports=n.p+"img/1.2c8154a7.jpg"},"75aa":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n("7a23"),i={id:"credits-page"},r=Object(o["g"])("h1",null,"Credits",-1),c=Object(o["g"])("p",null,"All thanks and credit for the seed information for the following items belongs to:",-1),a=Object(o["g"])("ul",null,[Object(o["g"])("li",null,[Object(o["f"])("Movie Data - "),Object(o["g"])("a",{href:"https://www.themoviedb.org/?language=en-US"},"The Movie Database (TMDB)")]),Object(o["g"])("li",null,[Object(o["f"])("Drink Data - "),Object(o["g"])("a",{href:"https://www.thecocktaildb.com/"},"The Cocktail Database")]),Object(o["g"])("li",null,[Object(o["f"])("Meal Data - "),Object(o["g"])("a",{href:"https://spoonacular.com/"},"Spoonacular")])],-1);function s(e,t,n,s,l,u){return Object(o["p"])(),Object(o["d"])("div",i,[r,c,a])}},"79e8":function(e,t,n){e.exports=n.p+"img/17.2995013d.jpg"},"79f5":function(e,t,n){e.exports=n.p+"img/7.cf0a95b8.jpg"},"7b34":function(e,t,n){e.exports=n.p+"img/10.5dce88f1.jpg"},"89de":function(e,t,n){e.exports=n.p+"img/4.639a18d7.jpg"},9269:function(e,t,n){e.exports=n.p+"img/18.f39473e7.jpg"},"96e7":function(e,t,n){"use strict";n("541e")},"9d64":function(e,t,n){e.exports=n.p+"img/logo.cb2f3752.png"},"9e93":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n("7a23"),i={id:"home-page"},r=Object(o["g"])("p",null,"Excited for a night in with friends or your partner, but tired of trying to make plans that work for everyone?",-1),c=Object(o["g"])("h3",null,[Object(o["f"])("Then "),Object(o["g"])("strong",null,"A Night In"),Object(o["f"])(" is for you!")],-1),a=Object(o["g"])("p",null,"It's easy! Log in with your own account, and let us know what Movies, Meals, and Drinks you're interested in.",-1),s=Object(o["g"])("p",null,"Then, match up with your friend's profile, and we'll show you what you each have in common!",-1);function l(e,t,n,l,u,p){return Object(o["p"])(),Object(o["d"])("div",i,[r,c,a,s])}},"9ea8":function(e,t,n){e.exports=n.p+"img/14.72eeeaee.jpg"},a706:function(e,t,n){e.exports=n.p+"img/20.3a9c0bc7.jpg"},af5d:function(e,t,n){e.exports=n.p+"img/25.79cc9413.jpg"},b963:function(e,t,n){e.exports=n.p+"img/19.2987eaa9.jpg"},bf4e:function(e,t,n){e.exports=n.p+"img/23.f030c4c5.jpg"},c30c:function(e,t,n){e.exports=n.p+"img/11.ba9e56b5.jpg"},c8e9:function(e,t,n){e.exports=n.p+"img/30.97ba9340.jpg"},d94e:function(e,t,n){e.exports=n.p+"img/2.ba45ea6d.jpg"},dbfa:function(e,t,n){e.exports=n.p+"img/12.d77696d5.jpg"},e4e6:function(e,t,n){e.exports=n.p+"img/example.9cab09ed.jpg"},e7a6:function(e,t,n){e.exports=n.p+"img/13.802dd6dc.jpg"},e8a6:function(e,t,n){e.exports=n.p+"img/8.23e503fe.jpg"},f3a3:function(e,t){},fa31:function(e,t,n){e.exports=n.p+"img/29.5305619a.jpg"}});
//# sourceMappingURL=app.d12c7d24.js.map