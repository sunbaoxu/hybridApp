webpackJsonp([6],{IOna:function(t,s){},Ip62:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("Dd8w"),n=e.n(a),i=e("P9l9"),o=e("9rMa"),c=e("hgh4"),r=e("aK0F"),l={name:"state",data:function(){return{startY:0,startX:0,startScroll:0,touching:0,text:"下拉刷新...",diff:0}},methods:n()({},Object(o.b)(["setLodingAsync"]),{touchStart:function(t){this.startY=t.targetTouches[0].pageY,this.startX=t.targetTouches[0].pageX},touchMove:function(t){this.diff=(t.targetTouches[0].pageY-this.startY)/2,this.diff>20&&this.diff<150?this.$emit("moveRefresh",200-this.diff):this.diff>150&&this.diff<=200?(this.text="放开以刷新...",this.$emit("moveRefresh",200-this.diff)):this.diff<=20?(this.diff<=0&&(this.diff=0),this.$emit("moveRefresh",200-this.diff)):this.diff=200},touchEnd:function(t){var s=this,e=0;if(this.diff>=150)this.setLodingAsync(!0),this.$emit("endRefresh");else{if(!(this.diff>0))return;e=200-this.diff}this.text="正在载入...";var a=setInterval(function(){(e+=3)>=200?(e=200,s.$emit("moveRefresh",e),clearInterval(a)):s.$emit("moveRefresh",e)},1)}}),mounted:function(){window.addEventListener("touchstart",this.touchStart),window.addEventListener("touchmove",this.touchMove),window.addEventListener("touchend",this.touchEnd)}},u={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"refresh-wrap g-cen-cen"},[s("p",[this._v(this._s(this.text))])])},staticRenderFns:[]};var v=e("VU/8")(l,u,!1,function(t){e("XADg")},"data-v-3682a864",null).exports,h={name:"state",components:{alertBack:r.a,downRefresh:v},data:function(){return{stateObj:{},obj:{},orderObj:{},alertAsync:!1,alertArr:[],asyncText:"按期",listAsync:!1,bankAsync:!1,bankObj:{},startY:200,huaKouType:"",atreObj:{}}},methods:n()({},Object(o.b)(["setToastObj","setLodingAsync"]),{classFn:function(t){switch(t){case 5:return"state-hui";case"3":case"4":case"1":return"state-ori";case 2:case 6:return"state-red";case"8":case 7:return"state-blue"}},queryOrderByLoanIDNew:function(){var t=this,s=c.a.concatObj({loanId:this.$route.query.loanId});i.a.queryOrderByLoanIDNew(s).then(function(s){t.setLodingAsync(!1),"000"==s.respCode?(t.obj=s.loanInfo,"3"!=t.obj.retStatus&&"4"!=t.obj.retStatus||(t.listAsync=!0,t.activePayDetail())):t.setToastObj({async:!0,respMesg:s.respMesg})},function(t){console.log(t)})},activePayDetail:function(){var t=this,s=c.a.concatObj({loanID:this.$route.query.loanId});i.a.activePayDetail(s).then(function(s){"000"==s.respCode?(t.orderObj=s,t.alertArr=s.overdueInfoList,"0"==s.scheduleFlag?t.huaKouType=s.onTimeType:"0"==s.settleFlag&&(t.huaKouType=s.settleType)):t.setToastObj({async:!0,respMesg:s.respMesg})},function(t){console.log(t)})},queryUserBankByPhone:function(){var t=this,s=c.a.concatObj({});i.a.queryUserBankByPhone(s).then(function(s){"000"==s.respCode?(t.bankAsync=!0,t.bankObj=s):t.setToastObj({async:!0,respMesg:s.respMesg})},function(t){console.log(t)})},queryRepayMethod:function(){var t=this,s=c.a.concatObj({repayMoney:this.orderObj.scheduleAmt,loanID:this.$route.query.loanId,receiptType:this.huaKouType});i.a.queryRepayMethod(s).then(function(s){"000"==s.respCode?(t.atreObj=s,t.queryUserBankByPhone()):t.setToastObj({async:!0,respMesg:s.respMesg})},function(t){console.log(t)})},closeAlertFn:function(){this.alertAsync=!1},submitFn:function(){"1"==this.atreObj.atreMethCode?location.href=this.atreObj.atreMethUrl:this.$router.push({path:"/order/delimitState",query:{repayMoney:this.orderObj.scheduleAmt,loanID:this.$route.query.loanId,receiptType:this.huaKouType,cardNo:this.bankObj.cardNo}})},downDetail:function(){this.alertAsync=!0},clickAsyncFn:function(t,s){this.asyncText=t,this.huaKouType=this.orderObj[s]},routerFn:function(){this.$router.push({path:"/business/shangList",query:{recoCode:this.obj.recoCode}})},agreementFn:function(){this.$router.push({path:"/agreement",query:{id:this.obj.id}})},moveRefresh:function(t){this.startY=t},endRefresh:function(){this.queryOrderByLoanIDNew()},listCallBack:function(){this.$router.push({path:"/order/orderRecord",query:{loanId:this.$route.query.loanId}})}}),mounted:function(){this.queryOrderByLoanIDNew(),window.listCallBack=this.listCallBack}},_={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"state-wrap",style:{transform:"translate(0,-"+t.startY+"px)"}},[e("down-refresh",{ref:"refreshID",staticClass:"refresh-box",on:{moveRefresh:t.moveRefresh,endRefresh:t.endRefresh}}),t._v(" "),e("p",{staticClass:"xiyi g-cen-y",class:{on:"3"==t.obj.retStatus||"4"==t.obj.retStatus},on:{click:t.agreementFn}},[e("i",{staticClass:"iconfont icon-tixing"}),e("span",[t._v("查看协议")])]),t._v(" "),e("header",{staticClass:"header-state"},[e("section",{staticClass:"detail"},[e("dl",[e("dt",{staticClass:"g-back",style:{"background-image":"url("+t.obj.orgImgPath+")"}}),t._v(" "),e("dd",[e("h4",{staticClass:"g-fen-cen"},[e("span",[t._v(t._s(t.obj.cName))]),t._v(" "),e("span",{class:t.classFn(t.obj.retStatus)},[t._v(t._s(t.obj.retMsg))])]),t._v(" "),e("p",{staticClass:"bianhao"},[t._v("订单编号："+t._s(t.obj.loanCode))]),t._v(" "),e("p",{staticClass:"date"},[t._v("交易时间："+t._s(t.obj.createDate))])])])]),t._v(" "),e("section",{staticClass:"g-border qishu"},[e("ul",{staticClass:"g-fen-cen"},[e("li",{staticClass:"g-col-cen-cen-box"},[e("span",[t._v("分期期数")]),t._v(" "),e("span",[t._v(t._s(t.obj.totalNper)+"期")])]),t._v(" "),e("li",{staticClass:"g-col-cen-cen-box"},[e("span",[t._v("分期金额（元）")]),t._v(" "),e("span",[t._v("￥"+t._s(t.obj.loanMoney))])]),t._v(" "),e("li",{staticClass:"g-col-cen-cen-box"},[e("span",[t._v("个人还款期数")]),t._v(" "),e("span",[t._v(t._s(t.obj.personalNper)+"期")])])])]),t._v(" "),"4"==t.obj.retStatus||"3"==t.obj.retStatus?e("section",{staticClass:"yuqi g-fen-cen"},[e("span",[t._v("当前应还（元）：")]),t._v(" "),e("span",[t._v("￥"+t._s(t.obj.totalRetAmt))])]):"7"==t.obj.retStatus?e("section",{staticClass:"jiesuan g-fen-cen"},[t._m(0),t._v(" "),e("span",[t._v("下载")])]):t._e()]),t._v(" "),e("main",{staticClass:"main-state"},[e("section",{staticClass:"huankuan"},[e("ul",["0"==t.orderObj.scheduleFlag?e("li",[e("div",{staticClass:"g-cen-y",on:{click:function(s){t.clickAsyncFn("按期","onTimeType")}}},[e("i",{staticClass:"iconfont",class:{"icon-dui1 on":"按期"==t.asyncText,"icon-dui":"按期"!=t.asyncText}})]),t._v(" "),e("div",{staticClass:"g-col-cen-y"},[e("p",{staticClass:"g-fen-x"},[e("span",{staticClass:"g-cen-y"},[t._v("按期还款"),"0"==t.orderObj.overFlag?e("i",[t._v("已逾期")]):t._e()]),t._v(" "),e("span",{staticClass:"hui"},[t._v("￥"+t._s(t.orderObj.scheduleAmt))])]),t._v(" "),e("p",{staticClass:"g-fen-x"},[e("span",[t._v("账单已逾期，快去还款吧")]),t._v(" "),e("span",[t._v("共"+t._s(t.orderObj.scheduleNper)+"期")])])])]):t._e(),t._v(" "),"0"==t.orderObj.settleFlag?e("li",[e("div",{staticClass:"g-cen-y",on:{click:function(s){t.clickAsyncFn("提前","settleType")}}},[e("i",{staticClass:"iconfont",class:{"icon-dui1 on":"提前"==t.asyncText,"icon-dui":"提前"!=t.asyncText}})]),t._v(" "),t._m(1)]):t._e()])]),t._v(" "),e("section",{staticClass:"tishi"},[e("h4",[t._v("温馨提醒：")]),t._v(" "),t.listAsync?e("p",[t._v(t._s(t.orderObj.reasonMesg))]):e("p",[t._v(t._s(t.obj.notify))])])]),t._v(" "),"4"==t.obj.retStatus||"3"==t.obj.retStatus?e("footer",{staticClass:"footer-state footer-money"},["4"==t.obj.retStatus?e("div",{staticClass:"g-col-cen-y"},[e("div",{staticClass:"g-fen-y"},[e("p",[e("span",[t._v("待支付")]),t._v(" "),e("span",[t._v("￥"+t._s(t.orderObj.overdueTotalAmt))])]),t._v(" "),e("p",{staticClass:"g-cen-y",on:{click:t.downDetail}},[t._v("\n          详情"),e("i",{staticClass:"iconfont icon-jiao-rig"})])]),t._v(" "),e("p",[t._v("含逾期费 ￥"+t._s(t.orderObj.overAmt))])]):e("div",{staticClass:"g-cen-y huan"},[e("span",[t._v("待支付")]),t._v(" "),e("span",[t._v("￥"+t._s(t.obj.totalRetAmt))])]),t._v(" "),e("div",[e("button",{on:{click:t.queryRepayMethod}},[t._v("立即还款")])])]):"5"==t.obj.retStatus||"6"==t.obj.retStatus||"7"==t.obj.retStatus?e("footer",{staticClass:"footer-state"},[e("button",{on:{click:t.routerFn}},[t._v("重新申请")])]):t._e(),t._v(" "),t.alertAsync?e("alert-back",{staticClass:"alert-back",on:{closeAlertFn:t.closeAlertFn}},[e("h4",{staticClass:"title"},[t._v("详情")]),t._v(" "),e("section",{staticClass:"box g-border"},[e("ul",{directives:[{name:"ScrollMove",rawName:"v-ScrollMove"}]},t._l(t.alertArr,function(s,a){return e("li",{key:a},[e("i",{staticClass:"xian"}),t._v(" "),e("h5",{staticClass:"g-fen-cen"},[e("span",[e("i",{staticClass:"iconfont icon-clock"}),t._v(t._s(s.retAmtDate))]),t._v(" "),e("span",[t._v(t._s(s.overdueMess))])]),t._v(" "),e("p",[t._v("应还本息："+t._s(s.retAmt)+"元")]),t._v(" "),e("p",[t._v("逾期费用："+t._s(s.overdueAmt)+"元")])])}))]),t._v(" "),e("section",{staticClass:"money g-fen-cen"},[e("span",[t._v("合计(含逾期费)")]),t._v(" "),e("span",[t._v(t._s(t.orderObj.overdueTotalAmt)+"元")])])]):t._e(),t._v(" "),t.bankAsync?e("div",{staticClass:"bank-back",on:{click:function(s){if(s.target!==s.currentTarget)return null;t.bankAsync=!1}}},[e("section",{staticClass:"main"},[e("h4",{staticClass:"title g-border"},[t._v("还款确认")]),t._v(" "),e("div",{staticClass:"money-box"},[e("P",[t._v("我已经确认并同意还款")]),t._v(" "),e("p",[t._v("17.26元")])],1),t._v(" "),e("div",{staticClass:"from-box"},[t._m(2),t._v(" "),e("p",{staticClass:"g-border1 g-fen-cen-box"},[e("span",[t._v("还款银行卡")]),t._v(" "),e("span",{staticClass:"g-cen-y"},[e("i",{staticClass:"g-back",style:{"background-image":"url("+t.bankObj.bankIcon+")"}}),t._v("\n            "+t._s(t.bankObj.bankName)+"\n          ")])])]),t._v(" "),e("div",{staticClass:"btn-box"},[e("p",[t._v("您本月还有"),e("span",[t._v(t._s(t.orderObj.availNum))]),t._v("次主动还款机会")]),t._v(" "),e("p",[e("button",{on:{click:t.submitFn}},[t._v("立即还款")])])]),t._v(" "),e("div",{staticClass:"text-box"},[t._v(t._s(t.bankObj.warmMesg))])])]):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"g-cen-y"},[s("i",{staticClass:"iconfont icon-jie"}),this._v("结算证明")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"g-col-cen-y"},[s("p",{staticClass:"g-fen-x"},[s("span",[this._v("提前结清")]),this._v(" "),s("span",[this._v("￥1323.23")])]),this._v(" "),s("p",{staticClass:"g-fen-x"},[s("span",[this._v("可提前结清所有借款")]),this._v(" "),s("span",[this._v("共9期")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"g-border1 g-fen-cen-box"},[s("span",[this._v("还款方式")]),this._v(" "),s("span",[this._v("银行划扣")])])}]};var d=e("VU/8")(h,_,!1,function(t){e("IOna")},"data-v-5e2ad53a",null);s.default=d.exports},XADg:function(t,s){}});
//# sourceMappingURL=6.95789fcadef45c88cca5.js.map