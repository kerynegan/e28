(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ea123"],{"8fdc":function(t,e,n){"use strict";n.r(e);n("b0c0");var a=n("7a23"),o={id:"account-page"},c={key:0},u={"data-test":"welcome-message"},r=Object(a["h"])("a",{href:"/selections","data-test":"view-selections"},"View my selections",-1),l=Object(a["h"])("br",null,null,-1),s={key:1,id:"loginForm"},i=Object(a["h"])("h2",null,"Login",-1),b=Object(a["g"])(" Email: "),d=Object(a["g"])(" Password: "),j={key:0},O=Object(a["h"])("p",null,[Object(a["g"])("Don't have an account yet? "),Object(a["h"])("a",{href:"/register"},"Register here!")],-1);function h(t,e,n,h,p,g){return Object(a["q"])(),Object(a["e"])("div",o,[g.user?(Object(a["q"])(),Object(a["e"])("div",c,[Object(a["h"])("h2",u,"Hi, "+Object(a["x"])(g.user.name)+"!",1),r,l,Object(a["h"])("button",{onClick:e[1]||(e[1]=function(){return g.logout&&g.logout.apply(g,arguments)}),"data-test":"logout-button"},"Logout")])):(Object(a["q"])(),Object(a["e"])("div",s,[i,Object(a["h"])("div",null,[Object(a["h"])("label",null,[b,Object(a["D"])(Object(a["h"])("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=function(t){return p.data.email=t}),"data-test":"email"},null,512),[[a["z"],p.data.email]])])]),Object(a["h"])("div",null,[Object(a["h"])("label",null,[d,Object(a["D"])(Object(a["h"])("input",{type:"password","onUpdate:modelValue":e[3]||(e[3]=function(t){return p.data.password=t}),"data-test":"password"},null,512),[[a["z"],p.data.password]])])]),Object(a["h"])("button",{onClick:e[4]||(e[4]=function(){return g.login&&g.login.apply(g,arguments)}),"data-test":"login-button"},"Login"),p.errors?(Object(a["q"])(),Object(a["e"])("ul",j,[(Object(a["q"])(!0),Object(a["e"])(a["a"],null,Object(a["u"])(p.errors,(function(t,e){return Object(a["q"])(),Object(a["e"])("li",{class:"error",key:e},Object(a["x"])(t),1)})),128))])):Object(a["f"])("",!0),O]))])}var p=n("0091"),g={data:function(){return{data:{email:null,password:null},errors:null,favorites:[]}},computed:{user:function(){return this.$store.state.user}},methods:{login:function(){var t=this;p["a"].post("login",this.data).then((function(e){e.data.authenticated?t.$store.commit("setUser",e.data.user):t.errors=e.data.errors}))},logout:function(){var t=this;p["a"].post("logout").then((function(e){e.data.success&&t.$store.commit("setUser",null)}))}},watch:{},mounted:function(){this.user}};g.render=h;e["default"]=g}}]);
//# sourceMappingURL=chunk-2d0ea123.04193951.js.map