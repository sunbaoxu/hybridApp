webpackJsonp([10],{"+u4O":function(t,s){},F1Jg:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=n("Dd8w"),a=n.n(e),o=n("P9l9"),i=n("9rMa"),c=n("hgh4"),_={name:"bank",data:function(){return{obj:{},heightAsync:!1}},methods:a()({},Object(i.b)(["setToastObj","setLodingAsync"]),{queryCustodyAccInfo:function(){var t=this,s=c.a.concatObj({});this.setLodingAsync(!0),o.a.queryCustodyAccInfo(s).then(function(s){console.log(s),t.setLodingAsync(!1),"000"==s.respCode?t.obj=s:t.setToastObj({async:!0,respMesg:s.respMesg})},function(t){console.log(t)})},getHeight:function(){var t=document.documentElement.clientHeight,s=this.$refs.wrap.clientHeight,n=this.$refs.footerBox.scrollHeight;s>=t-n&&(this.heightAsync=!0,this.$refs.wrap.style.paddingBottom=2*n+40+"px")}}),mounted:function(){this.queryCustodyAccInfo(),this.getHeight()}},r={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{ref:"wrap",staticClass:"account-wrap",class:{on:t.heightAsync}},[n("div",{staticClass:"account-main"},[n("section",{staticClass:"box"},[n("ul",[t._m(0),t._v(" "),n("li",[n("span",[t._v("账户状态")]),t._v(" "),n("span",{staticClass:"g-cen-y"},[t._v(t._s(t.obj.accountStatus)),n("i",{staticClass:"iconfont icon-dui1"})])]),t._v(" "),n("li",[n("span",[t._v("账户类型")]),t._v(" "),n("span",[t._v(t._s(t.obj.accountType))])]),t._v(" "),n("li",[n("span",[t._v("存管账户")]),t._v(" "),n("span",[t._v(t._s(t.obj.accountNum))])]),t._v(" "),n("li",[n("span",[t._v("客户号")]),t._v(" "),n("span",[t._v(t._s(t.obj.customerNum))])]),t._v(" "),n("li",[n("span",[t._v("交易密码")]),t._v(" "),n("span",{staticClass:"g-cen-y"},[n("a",{attrs:{href:t.obj.updateUrl}},[t._v("修改")]),t._v(" "),n("a",{attrs:{href:t.obj.resetUrl}},[t._v("重置")])])])])]),t._v(" "),n("section",{staticClass:"box"},[n("ul",[t._m(1),t._v(" "),n("li",[n("span",[t._v("客户姓名")]),t._v(" "),n("span",[t._v(t._s(t.obj.customerName))])]),t._v(" "),n("li",[n("span",[t._v("身份证")]),t._v(" "),n("span",[t._v(t._s(t.obj.idNum))])]),t._v(" "),n("li",{staticClass:"g-border"},[n("span",[t._v("手机号")]),t._v(" "),n("span",[t._v(t._s(t.obj.loginPhone))])])]),t._v(" "),t._m(2)])]),t._v(" "),n("footer",{ref:"footerBox",staticClass:"footer-text"},[n("img",{attrs:{src:"/static/images/bank/footer-huaxia.png"}})])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("h4",[this._v("基本信息")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("h4",[this._v("客户信息")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("h4",[t._v("其他信息")])]),t._v(" "),n("li",[n("span",[t._v("开户时间")]),t._v(" "),n("span",[t._v("231123123？23423")])]),t._v(" "),n("li",[n("span",[t._v("签约时间")]),t._v(" "),n("span",[t._v("dsfaa56456")])])])}]};var v=n("VU/8")(_,r,!1,function(t){n("+u4O")},"data-v-7dd0a1fb",null);s.default=v.exports}});
//# sourceMappingURL=10.7caaa9326bca0673df45.js.map