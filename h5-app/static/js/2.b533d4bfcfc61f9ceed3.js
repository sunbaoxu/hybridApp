webpackJsonp([2],{HjtI:function(t,s){},IM9W:function(t,s){},MivT:function(t,s){},VcNV:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("woOf"),i=e.n(n),a=e("mvHQ"),c=e.n(a),o=e("Dd8w"),r=e.n(o),l=e("P9l9"),u=e("9rMa"),y=e("hgh4"),d={name:"asides",props:{arr:{type:Array,default:function(){return[]}},name:{type:String,default:""},async:{type:Boolean,default:function(){return!1}}},data:function(){return{allAsync:!1}},methods:{closeAsideFn:function(){this.$emit("closeAsideFn",this.arr,this.name,this.allAsync)},clickFn:function(t){var s=this,e=0;this.arr.map(function(n,i){n.name==t.name&&(n.isCheck=!t.isCheck,s.$set(s.arr,i,n)),n.isCheck&&e++}),this.allAsync=e==this.arr.length},clickAll:function(t){var s=this;this.allAsync=!!t||!this.allAsync,this.arr.map(function(t,e){t.isCheck=s.allAsync})}},created:function(){this.async?this.clickAll(!0):this.clickFn({})}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aside-wrap",on:{click:function(s){return s.target!==s.currentTarget?null:t.closeAsideFn(s)},touchmove:function(t){t.preventDefault()}}},[e("div",{staticClass:"main"},[e("p",{staticClass:"g-cen-y"},[t._v("以下协议一经签订即可生效，请务必确认协议内容及条款")]),t._v(" "),e("ul",{directives:[{name:"ScrollMove",rawName:"v-ScrollMove"}]},t._l(t.arr,function(s,n){return e("li",{key:n,ref:"list",refInFor:!0,staticClass:"g-cen-y g-border"},[e("i",{staticClass:"iconfont",class:{"on icon-dui1":s.isCheck,"icon-dui":!s.isCheck},on:{click:function(e){t.clickFn(s,n)}}}),t._v(" "),e("a",{staticClass:"g-text-ove1",attrs:{href:s.url}},[t._v(t._s(s.name))])])})),t._v(" "),e("footer",{staticClass:"btn-box g-fen-box"},[e("span",{staticClass:"g-cen-y",on:{click:function(s){t.clickAll(!1)}}},[e("i",{staticClass:"iconfont",class:{"on icon-dui1":t.allAsync,"icon-dui":!t.allAsync}}),t._v("全选")]),t._v(" "),e("button",{class:{on:t.allAsync},attrs:{disabled:!t.allAsync},on:{click:t.closeAsideFn}},[t._v("我已知晓并确认")])])])])},staticRenderFns:[]};var p=e("VU/8")(d,v,!1,function(t){e("MivT")},"data-v-cff347e2",null).exports,f={name:"orderXinxi",props:{obj:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{}},_={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cont-box g-border"},[e("dl",[e("dt",{staticClass:"g-fen-cen-box g-border"},["xuefei"==t.obj.text?e("span",{staticClass:"g-cen-y title"},[e("i",{style:{background:"url("+t.obj.imgurl+")"}}),t._v("\n        "+t._s(t.obj.name)+"\n      ")]):e("div",{staticClass:"fuwu title g-cen-y"},[e("i",{staticStyle:{background:"url(/static/images/order/fuwu-icon.png)"}}),t._v(" "),e("div",[e("h6",[t._v("第三方服务费用套餐")]),t._v(" "),e("p",[t._v("网贷信息中介服务费   ￥"+t._s(t.obj.mediservFee))]),t._v(" "),e("p",[t._v("保障计划专款   ￥"+t._s(t.obj.securityFee))])])]),t._v(" "),"xuefei"==t.obj.text?e("span",{staticClass:"money"},[t._v("￥"+t._s(t.obj.money))]):e("span",{staticClass:"money"},[t._v("￥"+t._s(t.obj.servConsumFee))])]),t._v(" "),e("dd",[e("p",{staticClass:"g-col-cen-cen-box"},[e("span",[t._v("分期方案")]),t._v(" "),e("span",[t._v(t._s(t.obj.planText)+" 期")])]),t._v(" "),e("p",{staticClass:"g-col-cen-cen-box"},[e("span",[t._v("分期期数")]),t._v(" "),e("span",[t._v(" "+t._s(t.obj.fenNper)+" 期")])]),t._v(" "),e("p",{staticClass:"g-col-cen-cen-box"},[e("span",[t._v("个人还款期数")]),t._v(" "),e("span",[t._v(t._s(t.obj.userNper)+"期")])])])])])},staticRenderFns:[]};var b=e("VU/8")(f,_,!1,function(t){e("HjtI")},"data-v-6d67cf5e",null).exports,h={name:"order",components:{xieyiAside:p,alertBack:e("aK0F").a,orderXinxi:b},computed:r()({},Object(u.c)(["UploadImg","loancunAsync"])),data:function(){return{asideAsync:!1,asideName:"xuefei",asideArr:[],alertAsync:!1,xueAsync:!1,fuwuAsync1:!1,fuwuAsync2:!1,loanRuleAsync:!1,orDetail:{},feeDetail:{},orderObj:{},identityText:"在校学生",inentityAsync:!1,inentityObj:{},asideXueObj:{},asideFuObj:{},asideAll:!1,pageObj:{}}},methods:r()({},Object(u.b)(["setOrderRmpList","setUploadImg","setLoancunAsync","setToastObj","setLodingAsync"]),{openAsideFn:function(t){var s=localStorage.getItem(this.$route.query.bpcId+"-"+t);s?(this.asideAsync=!0,this.asideName=t,this.asideArr=JSON.parse(s)):(this.setLodingAsync(!0),this.bfContractLink(t)),this.asideAll="asideXueObj"==t?this.xueAsync:this.fuwuAsync1&&this.fuwuAsync2},closeAsideFn:function(t,s,e){localStorage.setItem(this.$route.query.bpcId+"-"+s,c()(t)),this.asideAsync=!1,"asideXueObj"==s?this.xueAsync=e:(this.fuwuAsync1=e,this.fuwuAsync2=e)},closeAlertFn:function(){this.alertAsync=!1},openDetailFn:function(t){this.setOrderRmpList(this[t].rmpList),localStorage.setItem("orderRmpList",c()(this[t].rmpList)),this.$router.push({path:"/order/orderDetail"})},submitFn:function(){var t=y.a.concatObj({loanMoney:this.$route.query.money,bpcId:this.$route.query.bpcId,nper:this.orDetail.userNper,businessType:this.$route.query.businessType,loanId:this.UploadImg,pstSign:this.inentityAsync?"1":"2",dnyCode:"9410"});this.setLodingAsync(!0),this.loanInstallOrderXf(t)},clickBtnFn:function(){this.alertAsync=!0},xueXieyiFn:function(){this.xueAsync=!this.xueAsync,localStorage.setItem(this.$route.query.bpcId+"-xueAsync",""+this.xueAsync)},fuwuFn:function(t){this[t]=!this[t],localStorage.setItem(this.$route.query.bpcId+"-"+t,""+this[t])},queryBorrowers:function(){var t=this,s=y.a.concatObj({});l.a.queryBorrowers(s).then(function(s){"000"==s.respCode?(t.inentityAsync=s.showStatus,t.inentityObj=s.borrowers,t.inentityObj.idNum1=y.a.plusXing(t.inentityObj.idNum,4,4),t.inentityObj.relationIdCard1=y.a.plusXing(t.inentityObj.relationIdCard,4,4)):t.setToastObj({async:!0,respMesg:s.respMesg})},function(t){console.log(t)})},loanInstallOrderXf:function(t){var s=this;l.a.loanInstallOrderXf(t).then(function(t){"000"==t.respCode?(s.setUploadImg(""),s.setLodingAsync(!0),localStorage.removeItem(s.$route.query.bpcId+"-xueAsync"),localStorage.removeItem(s.$route.query.bpcId+"-fuwuAsync1"),localStorage.removeItem(s.$route.query.bpcId+"-fuwuAsync2"),localStorage.removeItem(s.$route.query.bpcId+"-asideFuObj"),localStorage.removeItem(s.$route.query.bpcId+"-asideXueObj"),s.$router.push({path:"/order/orderState",query:{loanId:t.loanId}})):(s.setLodingAsync(!1),s.setToastObj({async:!0,respMesg:t.respMesg}))},function(t){s.setToastObj({async:!0,respMesg:res.respMesg})})},queryRepayDetails:function(){var t=this,s=y.a.concatObj({bpcId:this.$route.query.bpcId,businessType:this.$route.query.businessType,loanMoney:this.$route.query.money,nper:this.$route.query.nper});l.a.queryRepayDetails(s).then(function(s){"000"==s.respCode?(t.orDetail=s.orDetail,t.feeDetail=s.feeDetail,t.pageObj=s,i()(t.orDetail,{text:"xuefei",name:t.$route.query.name,planText:t.$route.query.planText,money:t.$route.query.money,fenNper:t.$route.query.fenNper,userNper:t.$route.query.userNper,imgurl:t.$route.query.orgImgPath}),i()(t.feeDetail,{planText:t.$route.query.planText,fenNper:t.$route.query.fenNper,userNper:t.$route.query.userNper}),t.setLodingAsync(!1)):t.setToastObj({async:!0,respMesg:s.respMesg})},function(t){console.log(t)})},bfContractLink:function(t){var s=this,e="";e="asideXueObj"==t?"1"==this.inentityAsync?"12":"9":"2"==this.inentityAsync?"13":"10";var n=y.a.concatObj({ctSign:e,pstSign:this.inentityAsync?"1":"2"});l.a.bfContractLink(n).then(function(e){s.setLodingAsync(!1),"000"==e.respCode?(s[t]=e.contractList,s[t].map(function(t){t.isCheck=!1}),localStorage.setItem(s.$route.query.bpcId+"-"+t,c()(e.contractList)),s.asideArr=s[t],s.asideAsync=!0,s.asideName=t):s.setToastObj({async:!0,respMesg:e.respMesg})},function(t){console.log(t,"dfs")})},identityFn:function(t){this.identityText=t},closeIdentity:function(){this.inentityAsync=!1},shehuiFn:function(){this.inentityAsync=!1,this.setLoancunAsync("false")},asyncFn:function(t,s){this[t]=!!localStorage.getItem(s)&&JSON.parse(localStorage.getItem(s))}}),mounted:function(){this.queryBorrowers(),this.queryRepayDetails(),this.asyncFn("xueAsync",this.$route.query.bpcId+"-xueAsync"),this.asyncFn("fuwuAsync1",this.$route.query.bpcId+"-fuwuAsync1"),this.asyncFn("fuwuAsync2",this.$route.query.bpcId+"-fuwuAsync2")}},g={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"wrap"},[e("header",{staticClass:"header g-fen-cen-box"},[t._m(0),t._v(" "),e("router-link",{staticClass:"a",attrs:{to:"/uploadeImg"}},[t._v(t._s(""==t.UploadImg?"去上传":"上传成功"))])],1),t._v(" "),e("main",{staticClass:"main"},[e("section",{staticClass:"section-box"},[e("p",{staticClass:"top-back"}),t._v(" "),e("h4",{staticClass:"title-box g-fen-cen-box g-border"},[e("span",[t._v("学费分期订单信息")]),t._v(" "),e("span",{staticClass:"g-cen-y",on:{click:function(s){t.openDetailFn("orDetail")}}},[e("i",{staticClass:"iconfont icon-xiangqing"}),t._v("详情\n        ")])]),t._v(" "),e("order-xinxi",{attrs:{obj:t.orDetail}}),t._v(" "),e("div",{staticClass:"xieyi-box g-fen-cen-box"},[e("span",{on:{click:t.xueXieyiFn}},[e("i",{staticClass:"iconfont",class:t.xueAsync?"icon-dui1 on":"icon-dui"})]),t._v(" "),e("span",{staticClass:"g-fen-cen",on:{click:function(s){t.openAsideFn("asideXueObj")}}},[t._v("\n          "+t._s(t.orDetail.contractMsg)+"\n          "),e("i",{staticClass:"iconfont icon-jiao-rig"})])]),t._v(" "),e("p",{staticClass:"bot-back"})],1),t._v(" "),e("section",{staticClass:"section-box on"},[e("p",{staticClass:"top-back"}),t._v(" "),t._m(1),t._v(" "),e("h4",{staticClass:"title-box g-fen-cen-box g-border"},[e("span",[t._v("服务订单信息")]),t._v(" "),e("span",{staticClass:"g-cen-y",on:{click:function(s){t.openDetailFn("feeDetail")}}},[e("i",{staticClass:"iconfont icon-xiangqing"}),t._v("详情")])]),t._v(" "),e("order-xinxi",{attrs:{obj:t.feeDetail}}),t._v(" "),e("div",{staticClass:"xieyi-box g-fen-cen-box"},[e("span",{on:{click:function(s){t.fuwuFn("fuwuAsync1")}}},[e("i",{staticClass:"iconfont",class:t.fuwuAsync1?"icon-dui1 on":"icon-dui"})]),t._v(" "),e("span",{staticClass:"g-fen-cen",on:{click:function(s){t.openAsideFn("asideFuObj")}}},[t._v("\n          "+t._s(t.feeDetail.contractMsg_1)+"\n          "),e("i",{staticClass:"iconfont icon-jiao-rig"})])]),t._v(" "),e("div",{staticClass:"xieyi-box g-fen-cen-box"},[e("span",{on:{click:function(s){t.fuwuFn("fuwuAsync2")}}},[e("i",{staticClass:"iconfont",class:t.fuwuAsync2?"icon-dui1 on":"icon-dui"})]),t._v(" "),e("span",{staticClass:"g-fen-cen",on:{click:function(s){t.openAsideFn("asideFuObj")}}},[t._v("\n          "+t._s(t.feeDetail.contractMsg_2)+"\n          "),e("i",{staticClass:"iconfont icon-jiao-rig"})])]),t._v(" "),e("p",{staticClass:"bot-back"})],1)]),t._v(" "),"true"==t.loancunAsync?e("section",{staticClass:"list-box"},[e("ul",[e("li",{staticClass:"g-fen-cen-box g-border"},[e("span",[t._v("借款人信息")]),t._v(" "),e("i",{staticClass:"iconfont icon-wenhao",on:{click:function(s){t.loanRuleAsync=!0}}})]),t._v(" "),e("li",{staticClass:"g-fen-cen-box g-border"},[e("span",[t._v("主借款人")]),t._v(" "),e("div",[e("p",[e("span",[t._v(t._s(t.inentityObj.relationName))]),t._v(" "),e("span",[t._v(t._s(t.inentityObj.relationIdCard1))])]),t._v(" "),e("i",{staticClass:"iconfont icon-jiao-rig"})])]),t._v(" "),e("li",{staticClass:"g-fen-cen-box"},[e("span",[t._v("共同借款人")]),t._v(" "),e("div",[e("p",[e("span",[t._v(t._s(t.inentityObj.realName))]),t._v(" "),e("span",[t._v(t._s(t.inentityObj.idNum1))])]),t._v(" "),e("i",{staticClass:"iconfont icon-jiao-rig"})])])])]):t._e(),t._v(" "),t._m(2),t._v(" "),e("footer",{staticClass:"footer"},[e("section",[t._v("网贷信息中介服务由玖富惠普提供")]),t._v(" "),e("section",[e("div",{staticClass:"money g-col-cen-y"},[e("p",[e("span",[t._v("订单总额")]),t._v(" "),e("span",[t._v("￥"+t._s(t.pageObj.totalMoney))])]),t._v(" "),e("p",[t._v("含学费 ￥"+t._s(t.$route.query.money)+"+服务费 ￥"+t._s(t.feeDetail.servConsumFee))])]),t._v(" "),e("button",{staticClass:"btn",class:{on:t.fuwuAsync1&&t.fuwuAsync2&&t.xueAsync&&""!=t.UploadImg},attrs:{disabled:!t.fuwuAsync1&&!t.fuwuAsync2&&!t.xueAsync&&""==t.UploadImg},on:{click:t.clickBtnFn}},[t._v("提交订单")])])]),t._v(" "),t.asideAsync?e("xieyi-aside",{ref:"xieyi",attrs:{arr:t.asideArr,name:t.asideName,async:t.asideAll},on:{closeAsideFn:t.closeAsideFn}}):t._e(),t._v(" "),t.alertAsync?e("alert-back",{staticClass:"order-alert-back",on:{closeAlertFn:t.closeAlertFn}},[e("h4",{staticClass:"title"},[t._v("提示")]),t._v(" "),e("div",{staticClass:"cont g-border"},[e("ul",[e("li",{staticClass:"g-fen-cen"},[e("span",[t._v("教育分期")]),e("span",[t._v("￥"+t._s(t.orDetail.money)+" | "+t._s(t.orDetail.userNper)+"期")])]),t._v(" "),e("li",{staticClass:"g-fen-cen"},[e("span",[t._v("三方服务费")]),e("span",[t._v("￥"+t._s(t.feeDetail.servConsumFee)+" | "+t._s(t.orDetail.userNper)+"期")])])])]),t._v(" "),e("div",{staticClass:"btn-boxs"},[e("button",{on:{click:t.closeAlertFn}},[t._v("我再看看")]),t._v(" "),e("button",{on:{click:t.submitFn}},[t._v("立即提交")])])]):t._e(),t._v(" "),t.inentityAsync&&""==t.loancunAsync?e("alert-back",{staticClass:"identity-alert-back"},[e("h4",{staticClass:"title g-border"},[t._v("请选择您当前的职业")]),t._v(" "),e("main",{staticClass:"identity-main"},[e("ul",{staticClass:"g-fen-cen"},[e("li",{staticClass:"g-col-cen-cen-box",class:{on:"在校学生"==t.identityText},on:{click:function(s){t.identityFn("在校学生")}}},[e("i",{staticClass:"jiao"}),t._v(" "),e("i",{staticClass:"g-back icon",style:{"background-image":"url(/static/images/identity/"+("在校学生"==t.identityText?"student-full":"student-fail")+".png)"}}),t._v(" "),e("span",[t._v("我是在校学生")])]),t._v(" "),e("li",{staticClass:"g-col-cen-cen-box",class:{on:"社会人士"==t.identityText},on:{click:function(s){t.identityFn("社会人士")}}},[e("i",{staticClass:"jiao"}),t._v(" "),e("i",{staticClass:"g-back icon",style:{"background-image":"url(/static/images/identity/"+("社会人士"==t.identityText?"social-full":"social-fail")+".png)"}}),t._v(" "),e("span",[t._v("我是社会人士")])])]),t._v(" "),"在校学生"==t.identityText?e("p",{staticClass:"text"},[t._v("感谢您选择蜡笔分期，根据国家监管要求，禁止向"),e("span",[t._v("全日制在校学生")]),t._v("提供分期服务。")]):e("p",{staticClass:"text"},[t._v("请您务必按照真实情况选择，您的所有操作过程都将被系统记录，并与您最终签署的相关协议具有同等的法律效力。")]),t._v(" "),e("p",{staticClass:"btn"},["在校学生"==t.identityText?e("button",{attrs:{onclick:"javascript:history.back(-1);"}},[t._v("我知道了")]):e("button",{on:{click:t.shehuiFn}},[t._v("继续申请")])]),t._v(" "),e("p",{staticClass:"tongyi",class:{on:"在校学生"==t.identityText}},[e("router-link",{attrs:{to:{path:"/LoanBaocun",query:{relationIdCard:this.inentityObj.relationIdCard,relationName:this.inentityObj.relationName,relationPhone:this.inentityObj.relationPhone,relationship:this.inentityObj.relationship}}}},[t._v("我的父亲/母亲同意作为主借款人申请  》")])],1)])]):t._e(),t._v(" "),t.loanRuleAsync?e("alert-back",{staticClass:"order-alert-back",on:{closeAlertFn:function(s){t.loanRuleAsync=!1}}},[e("h4",{staticClass:"title"},[t._v("提示")]),t._v(" "),e("div",{staticClass:"cont g-border"},[t._v("\n      根据国家监管要求，您不能作为申请借款的主体，但可经您的父母授权，有您的父亲或母亲作为主借款人进行申请，由您本人继续操作，我司后续会与您的父亲或母亲核实确认。\n    ")]),t._v(" "),e("div",{staticClass:"btn-boxs"},[e("button",{on:{click:function(s){t.loanRuleAsync=!1}}},[t._v("我知道了")])])]):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"g-cen-y"},[s("i",{staticClass:"g-back",staticStyle:{"background-image":"url(/static/images/shenfenzheng.png)"}}),this._v(" "),s("span",[this._v("手持身份证照片")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{staticClass:"tixing-box g-fen-cen-box g-border"},[s("span",{staticClass:"g-cen-y"},[s("i",{staticClass:"iconfont icon-xiangqing"}),this._v("\n          温馨提醒\n          ")]),this._v(" "),s("p",[this._v("以下为第三方机构专业的"),s("span",[this._v("服务套餐")]),this._v("，非玖富平台提供，会员客户选择并认可并自愿采购支付以下第三方服务消费")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"text-box"},[s("p",[this._v("以上费用均由"),s("span",[this._v("借款人自行承当")])])])}]};var C=e("VU/8")(h,g,!1,function(t){e("IM9W")},"data-v-5d67aaef",null);s.default=C.exports}});
//# sourceMappingURL=2.b533d4bfcfc61f9ceed3.js.map