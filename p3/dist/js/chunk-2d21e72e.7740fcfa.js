(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e72e"],{d639:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),l={id:"meals-page"},s={key:0},u={key:1},c=Object(a["g"])(" Oops something went wrong."),i=Object(a["h"])("br",null,null,-1);function o(e,t,n,o,d,r){var h=Object(a["v"])("show-meal");return Object(a["q"])(),Object(a["e"])("div",l,[d.meal?(Object(a["q"])(),Object(a["e"])("div",s,[Object(a["h"])(h,{meal:d.meal},null,8,["meal"])])):(Object(a["q"])(),Object(a["e"])("div",u,[c,i,Object(a["h"])("button",{class:"yes",type:"button",onClick:t[1]||(t[1]=function(e){return r.updateMeal()})},"Reload?")]))])}var d=n("fcae"),r={components:{"show-meal":d["a"]},props:{id:{type:String},meals:{type:Array,default:null}},data:function(){return{meal:null,x:null}},mounted:function(){this.updateMeal()},watch:{meals:function(){this.updateMeal()}},methods:{updateMeal:function(){this.x=parseInt(this.id),this.x--,this.meal=this.meals[this.x]}}};r.render=o;t["default"]=r}}]);
//# sourceMappingURL=chunk-2d21e72e.7740fcfa.js.map