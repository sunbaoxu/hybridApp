webpackJsonp([9],{"XO+H":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a("Dd8w"),r=a.n(e),s=a("P9l9"),o=a("9rMa"),c=a("hgh4"),i={name:"state",data:function(){return{arr:[]}},methods:r()({},Object(o.b)(["setToastObj"]),{afContractLink:function(){var t=this,n=c.a.concatObj({loanId:this.$route.query.id});s.a.afContractLink(n).then(function(n){"000"==n.respCode?t.arr=n.contractList:t.setToastObj({async:!0,respMesg:n.respMesg})},function(t){console.log(t)})}}),mounted:function(){this.afContractLink()}},u={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"agreement-wrap"},[a("nav",{staticClass:"nav"},t._l(t.arr,function(n,e){return a("router-link",{key:e,staticClass:"g-fen-cen-box g-border",attrs:{to:n.url}},[a("span",[t._v(t._s(n.name))]),t._v(" "),a("i",{staticClass:"iconfont icon-jiao-rig"})])}))])},staticRenderFns:[]};var l=a("VU/8")(i,u,!1,function(t){a("l3KC")},"data-v-a1fe7682",null);n.default=l.exports},l3KC:function(t,n){}});
//# sourceMappingURL=9.52acaa484f11f10a2866.js.map