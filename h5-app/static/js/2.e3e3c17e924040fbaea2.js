webpackJsonp([2],{"1Sb1":function(n,t){},"2gPk":function(n,t){},"4s4M":function(n,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=s("Dd8w"),a=s.n(e),o=s("P9l9"),i=s("9rMa"),l=s("hgh4"),c=s("DzZP"),r=s("mvHQ"),p=s.n(r),u={name:"plan",props:{planObj:{type:Object,default:function(){return{}}},planArr:{type:Array,default:function(){return[]}}},data:function(){return{obj:""}},methods:{closePlan:function(n){this.$emit("closePlan",n,this.obj)},listFn:function(n){this.obj=n}},created:function(){"{}"==p()(this.planObj)?this.obj=this.planArr[0]:this.obj=this.planObj}},b={render:function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",{staticClass:"plan-wrap",on:{click:function(t){if(t.target!==t.currentTarget)return null;n.closePlan(!1)}}},[s("main",{staticClass:"main"},[s("section",{staticClass:"box"},[s("h6",[n._v("已选方案：“"+n._s(n.obj.planName)+"”")]),n._v(" "),s("div",{staticClass:"list-box g-border"},[s("ul",{staticClass:"list-box-ul g-box-duo"},n._l(n.planArr,function(t,e){return s("li",{key:e,staticClass:"g-cen-y",class:{"list-li-lef":e%3==0,"list-li-cen":e%3==1,"list-li-rig":e%3==2,on:n.obj.planId==t.planId},on:{click:function(s){n.listFn(t)}}},[s("span",[n._v(n._s(t.planName))])])})),n._v(" "),s("div",{staticClass:"fenqi-list g-fen-cen"},[s("p",[s("span",[n._v("机构代偿期：")]),n._v(" "),s("span",[n._v(n._s(n.obj.orgNper)+"期")])]),n._v(" "),s("p",[s("span",[n._v("低额还款期：")]),n._v(" "),n.obj.lowRate<=0?s("span",{staticClass:"line"},[s("i",[n._v(n._s(n.obj.lowNper)+"期")]),n._v("0期")]):s("span",[n._v(n._s(n.obj.lowNper)+"期")])]),n._v(" "),s("p",[s("span",[n._v("高额还款期：")]),n._v(" "),n.obj.highRate<=0?s("span",{staticClass:"line"},[s("i",[n._v(n._s(n.obj.highNper)+"期")]),n._v("0期")]):s("span",[n._v(n._s(n.obj.highNper)+"期")])])])]),n._v(" "),s("div",{staticClass:"text g-fen-cen"},[s("p",[n._v("个人还款期数：")]),n._v(" "),s("p",[n.obj.lowRate<=0&&n.obj.highRate<=0?s("span",{staticClass:"line"},[n._v(n._s(n.obj.userNper)+"期")]):n._e(),n._v(" "),n.obj.lowRate>0&&n.obj.highRate>0?s("span",[n._v(n._s(n.obj.userNper)+"期")]):n.obj.lowRate>0?s("span",[n._v(n._s(n.obj.lowNper)+"期")]):n.obj.highRate>0?s("span",[n._v(n._s(n.obj.highNper)+"期")]):s("span",[n._v("0期")])])])]),n._v(" "),s("p",[s("button",{on:{click:function(t){t.preventDefault(),n.closePlan(!0)}}},[n._v("确定")])])])])},staticRenderFns:[]};var _=s("VU/8")(u,b,!1,function(n){s("mXvw")},"data-v-9b9a885a",null).exports,h=s("aK0F"),v={name:"detailss",computed:a()({},Object(i.c)(["businessObj"])),components:{headerDetail:c.a,fenqiPlan:_,alertBack:h.a},data:function(){return{moneyValStr:"",moneyValNum:0,planAsync:!1,planText:"",planObj:{},planArr:[],fanganAsync:!1,moneyAsync:!1}},methods:a()({},Object(i.b)(["setToastObj","setLodingAsync"]),{closePlan:function(n,t){this.planAsync=!1,n&&(this.planText=t.planName,this.planObj=t,this.moneyValNum=t.money,this.moneyValStr=String(this.moneyValNum))},submitFn:function(){var n=l.a.concatObj({source:"loan"});this.queryAuthInfo(n)},queriesProgramListNew:function(){var n=this,t=l.a.concatObj({commodityId:this.$route.query.commodityId,orgId:this.$route.query.orgId});o.a.queriesProgramListNew(t).then(function(t){"000"==t.respCode?(n.planArr=t.plans,n.setLodingAsync(!1)):(n.setLodingAsync(!1),n.setToastObj({async:!0,respMesg:t.respMesg}))},function(n){console.log(n)})},queryAuthInfo:function(n){var t=this;this.setLodingAsync(!0),o.a.queryAuthInfo(n).then(function(n){"000"==n.respCode?n.authInfoList[0].perfect&&n.authInfoList[1].perfect?t.loanCheckInstall():(t.setLodingAsync(!1),window.LabiWinJSI.openNativeWindow("perfectData")):(t.setLodingAsync(!1),t.setToastObj({async:!0,respMesg:n.respMesg}))},function(n){console.log(n)})},loanCheckInstall:function(){var n=this,t=l.a.concatObj({loanMoney:this.moneyValStr,businessType:this.$route.query.businessType,bpcId:this.planObj.id});o.a.loanCheckInstall(t).then(function(t){"000"==t.respCode?"1"==t.state?n.routerOrderFn():(n.setLodingAsync(!1),window.LabiWinJSI.openNativeWindow("perfectData")):(n.setLodingAsync(!1),n.setToastObj({async:!0,respMesg:t.respMesg}))},function(n){console.log(n)})},closeFangan:function(){this.fanganAsync=!1},closeMoney:function(){this.moneyAsync=!1,this.moneyValStr=String(this.moneyValNum)},yesMoney:function(){this.moneyAsync=!1,this.moneyValNum=Number(this.moneyValStr)},openMoney:function(){this.moneyAsync=!0,this.moneyValStr=String(this.moneyValNum)},routerOrderFn:function(){var n="";n=this.planObj.lowRate>0&&this.planObj.highRate>0?this.planObj.userNper:this.planObj.lowRate>0?this.planObj.lowNper:this.planObj.highRate>0?this.planObj.highNper:0,this.$router.push({path:"/order/orderConfirm",query:{bpcId:this.planObj.id,businessType:this.$route.query.businessType,loanMoney:this.moneyValStr,nper:this.planObj.userNper,planText:this.planText,name:this.$route.query.cName,money:this.moneyValNum,userNper:this.planObj.userNper,fenNper:n,orgImgPath:this.businessObj.orgImgPath}})}}),mounted:function(){this.queriesProgramListNew()}},m={render:function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",{staticClass:"detail-wrap"},[s("header-detail",{attrs:{obj:n.businessObj}}),n._v(" "),s("section",{staticClass:"shang-box"},[s("ul",[s("li",{staticClass:"g-border g-fen-cen"},[n._m(0),n._v(" "),s("span",[n._v(n._s(n.$route.query.cName))])]),n._v(" "),s("li",{staticClass:"g-fen-cen"},[n._m(1),n._v(" "),s("span",{on:{click:function(t){n.planAsync=!0}}},[n._v(n._s(""!=n.planText?n.planText:"点击选择分期方案")),s("i",{staticClass:"iconfont icon-jiao-rig"})])])]),n._v(" "),n.planObj.money?s("div",{staticClass:"text-box g-fen-cen-box g-border1"},[n._m(2),n._v(" "),s("p",{staticClass:"g-cen-y"},[n.planObj.lowRate<=0&&n.planObj.highRate<=0?s("span",{staticClass:"line"},[n._v(n._s(n.planObj.highNper)+"期")]):n._e(),n._v(" "),n.planObj.lowRate>0&&n.planObj.highRate>0?s("span",{staticClass:"money"},[n._v(n._s(n.planObj.userNper)+"期")]):n.planObj.lowRate>0?s("span",{staticClass:"money"},[n._v(n._s(n.planObj.lowNper)+"期")]):n.planObj.highRate>0?s("span",{staticClass:"money"},[n._v(n._s(n.planObj.highNper)+"期")]):s("span",{staticClass:"money"},[n._v("0期")]),n._v(" "),s("span",{staticClass:"iconfont icon-tixing",on:{click:function(t){n.fanganAsync=!0}}})])]):n._e()]),n._v(" "),n.planObj.money?s("section",{staticClass:"money-box"},[s("h4",{staticClass:"g-fen-cen-box"},[s("span",[n._v("分期金额(元)")]),n._v(" "),s("span",{staticClass:"g-cen-y"},[n._v(n._s(n.moneyValNum)+" "),s("i",{staticClass:"iconfont icon-xiugai",on:{click:n.openMoney}})])]),n._v(" "),s("div",{staticClass:"slider-box g-border"},[s("el-slider",{attrs:{"show-tooltip":!1,max:n.planObj.money,min:3e3},model:{value:n.moneyValNum,callback:function(t){n.moneyValNum=t},expression:"moneyValNum"}}),n._v(" "),s("p",{staticClass:"g-fen-cen"},[s("span",[n._v("3000")]),s("span",[n._v(n._s(n.planObj.money))])])],1)]):n._e(),n._v(" "),s("section",{staticClass:"btn-box"},[s("button",{class:{on:""!=n.planText},attrs:{disabled:""==n.planText},on:{click:n.submitFn}},[n._v("下一步")])]),n._v(" "),n.planAsync?s("fenqi-plan",{attrs:{planObj:n.planObj,planArr:n.planArr},on:{closePlan:n.closePlan}}):n._e(),n._v(" "),n.fanganAsync?s("alert-back",{staticClass:"fangan-alert-back",on:{closeAlertFn:n.closeFangan}},[s("h4",{staticClass:"title"},[n._v("详情")]),n._v(" "),s("ul",[s("li",{staticClass:"g-fen-cen"},[s("span",[n._v("机构代偿期")]),s("span",[n._v(n._s(n.planObj.orgNper)+"期")])]),n._v(" "),s("li",{staticClass:"g-fen-cen"},[s("span",[n._v("低额还款期")]),s("span",[n._v(n._s(n.planObj.lowNper)+"期")])]),n._v(" "),s("li",{staticClass:"g-fen-cen"},[s("span",[n._v("高额还款期")]),s("span",[n._v(n._s(n.planObj.highNper)+"期")])])]),n._v(" "),s("div",{staticClass:"g-fen-cen g-border1"},[s("p",[n._v("个人还款期")]),n._v(" "),s("p",[n.planObj.lowRate<=0&&n.planObj.highRate<=0?s("span",{staticClass:"line"},[n._v(n._s(n.planObj.highNper)+"期")]):n._e(),n._v(" "),n.planObj.lowRate>0&&n.planObj.highRate>0?s("span",[n._v(n._s(n.planObj.userNper)+"期")]):n.planObj.lowRate>0?s("span",[n._v(n._s(n.planObj.lowNper)+"期")]):n.planObj.highRate>0?s("span",[n._v(n._s(n.planObj.highNper)+"期")]):s("span",[n._v("0期")])])])]):n._e(),n._v(" "),n.moneyAsync?s("alert-back",{staticClass:"money-alert-back",on:{closeAlertFn:n.closeMoney}},[s("h4",{staticClass:"title"},[n._v("请输入金额")]),n._v(" "),""==n.moneyValStr?s("p",{staticClass:"tishi"},[n._v("请输入一个整数")]):Number(n.moneyValStr)<3e3||Number(n.moneyValStr)>n.planObj.money?s("p",{staticClass:"tishi"},[n._v("请输入金额范围：3000~"+n._s(n.planObj.money))]):s("p",{staticClass:"tishi"}),n._v(" "),s("p",{staticClass:"text"},[s("input",{directives:[{name:"model",rawName:"v-model",value:n.moneyValStr,expression:"moneyValStr"}],attrs:{type:"tel",maxlength:"8"},domProps:{value:n.moneyValStr},on:{input:function(t){t.target.composing||(n.moneyValStr=t.target.value)}}}),n._v(" "),s("i",{staticClass:"iconfont icon-guanbi",class:{on:""!=n.moneyValStr},on:{click:function(t){n.moneyValStr=""}}})]),n._v(" "),s("div",{staticClass:"btns-box"},[s("button",{on:{click:n.closeMoney}},[n._v("取消")]),n._v(" "),s("button",{class:{none:""==n.moneyValStr||Number(n.moneyValStr)<3e3||Number(n.moneyValStr)>n.planObj.money},attrs:{disabled:""==n.moneyValStr||Number(n.moneyValStr)<3e3||Number(n.moneyValStr)>n.planObj.money},on:{click:n.yesMoney}},[n._v("确定")])])]):n._e()],1)},staticRenderFns:[function(){var n=this.$createElement,t=this._self._c||n;return t("span",{staticClass:"g-cen-y"},[t("i",{staticClass:"icon shang g-back"}),this._v("商品名称")])},function(){var n=this.$createElement,t=this._self._c||n;return t("span",{staticClass:"g-cen-y"},[t("i",{staticClass:"icon fen g-back"}),this._v("分期方案")])},function(){var n=this.$createElement,t=this._self._c||n;return t("p",[t("span",[this._v("个人还款期数：")])])}]};var y=s("VU/8")(v,m,!1,function(n){s("1Sb1"),s("2gPk")},"data-v-daaefd9e",null);t.default=y.exports},DzZP:function(n,t,s){"use strict";var e={name:"detail",props:{obj:{type:Object,default:function(){return{}}}},data:function(){return{moreAsync:!1,moreText:"查看更多"}},methods:{clickMore:function(){this.moreAsync=!this.moreAsync,this.moreText=this.moreAsync?"收起更多":"查看更多"}}},a={render:function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("header",{staticClass:"header-detail"},[s("dl",{staticClass:"g-cen-y"},[s("dt",{staticClass:"g-back",style:{"background-image":"url("+n.obj.orgImgPath+")"}}),n._v(" "),s("dd",[s("h4",{staticClass:"g-text-ove1"},[n._v(n._s(n.obj.orgShortName))]),n._v(" "),s("p",{staticClass:"g-text-ove1"},[n._v("商家地址："+n._s(n.obj.orgAddrDetailed))])])]),n._v(" "),s("p",{staticClass:"text",class:{"g-text-ove2":!n.moreAsync}},[n._v(n._s(n.obj.remark))]),n._v(" "),s("p",{staticClass:"more g-cen-cen",on:{click:n.clickMore}},[s("i",{staticClass:"iconfont icon-jiao-bot",class:{on:!n.moreAsync}}),n._v(" "),s("span",[n._v(n._s(n.moreText))])])])},staticRenderFns:[]};var o=s("VU/8")(e,a,!1,function(n){s("Opar")},"data-v-137ab224",null);t.a=o.exports},Opar:function(n,t){},mXvw:function(n,t){}});
//# sourceMappingURL=2.e3e3c17e924040fbaea2.js.map