(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e72e"],{d639:function(e,t,a){"use strict";a.r(t);var n=a("7a23"),l={id:"meals-page"},s={key:0},u={key:1},c=Object(n["g"])(" Oops something went wrong."),i=Object(n["h"])("br",null,null,-1);function o(e,t,a,o,p,d){var m=Object(n["v"])("show-meal");return Object(n["q"])(),Object(n["e"])("div",l,[p.meal?(Object(n["q"])(),Object(n["e"])("div",s,[Object(n["h"])(m,{meal:p.meal,mealspage:p.mealspage},null,8,["meal","mealspage"])])):(Object(n["q"])(),Object(n["e"])("div",u,[c,i,Object(n["h"])("button",{class:"yes",type:"button",onClick:t[1]||(t[1]=function(e){return d.updateMeal()})},"Reload?")]))])}var p=a("fcae"),d={components:{"show-meal":p["a"]},props:{id:{type:String},meals:{type:Array,default:null}},data:function(){return{meal:null,x:null,mealspage:!1}},mounted:function(){this.updateMeal()},watch:{meals:function(){this.updateMeal()}},methods:{updateMeal:function(){this.x=parseInt(this.id),this.x--,this.meal=this.meals[this.x]}}};d.render=o;t["default"]=d}}]);
//# sourceMappingURL=chunk-2d21e72e.7ff38fc5.js.map