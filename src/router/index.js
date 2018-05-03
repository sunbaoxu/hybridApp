import Vue from 'vue';
import Router from 'vue-router';
//商家推荐码
const ShangCode            = resolve => require(['@/components/business/ShangCode.vue'], resolve);
//商家列表
const ShangList            = resolve => require(['@/components/business/ShangList.vue'], resolve);
//商家列表
const ShangDetail           = resolve => require(['@/components/business/ShangDetail.vue'], resolve);




//上传照片
const UploadeImg    = resolve => require(['@/components/order/UploadeImg.vue'], resolve);


//保存借款信息
const LoanBaocun    = resolve => require(['@/components/order/LoanBaocun.vue'], resolve);
//协议页
const Agreement    = resolve => require(['@/components/order/state/Agreement.vue'], resolve);



//订单确认
const ConfirmOrder    = resolve => require(['@/components/order/ConfirmOrder.vue'], resolve);
//订单状态
const OrderState    = resolve => require(['@/components/order/state/OrderState.vue'], resolve);
//订单详情
const OrderRecord    = resolve => require(['@/components/order/state/OrderRecord.vue'], resolve);
//还款详情
const OrderDetail    = resolve => require(['@/components/order/details/OrderDetail.vue'], resolve);



//划扣结果
const DelimitState    = resolve => require(['@/components/order/payState/DelimitState.vue'], resolve);




//银行卡list 页
const ChangeBank    = resolve => require(['@/components/bank/ChangeBank.vue'], resolve);
//我的主卡
const UserBank    = resolve => require(['@/components/bank/UserBank.vue'], resolve);
//账户信息
const AccountDetails    = resolve => require(['@/components/bank/AccountDetails.vue'], resolve);
//存管账户授权确认
const NotesBank    = resolve => require(['@/components/bank/NotesBank.vue'], resolve);


Vue.use(Router);

let router = new Router({
  mode :'history',
  routes: [
    //商家
    //商家推荐码
    {path: '/business/shangCode',name: '商家推荐码',component: ShangCode,meta:{title:'商家推荐码'}},
    //商家列表
    {path: '/business/shangList',name: '商家列表',component: ShangList,meta:{title:'商品列表'}},
    //商家详情
    {path: '/business/shangDetail',name: '商家详情',component: ShangDetail,meta:{title:'分期申请'}},


    //订单
    //确认订单
    {path: '/order/orderConfirm',name: '确认订单',component: ConfirmOrder,meta:{title:'确认订单'}},
    //订单状态
    {path: '/order/orderState',name: '订单状态',component: OrderState,meta:{title:'订单详情'}},
    //订单详情
    {path: '/order/orderDetail',name: '订单详情',component: OrderDetail,meta:{title:'还款详情'}},
    //还款记录
    {path: '/order/orderRecord',name: '订单还款记录',component: OrderRecord,meta:{title:'还款记录详情'}},


    //划扣 支付结果页
    {path: '/order/delimitState',name: '划扣结果',component: DelimitState,meta:{title:'支付结果'}},


    //银行卡
    //银行卡list 页
    {path: '/bank/changeBank',name: '设定主卡',component: ChangeBank,meta:{title:'设定主卡'}},
    //我的主卡
    {path: '/bank/userBank',name: '我的主卡',component: UserBank,meta:{title:'我的主卡'}},
    //账户信息
    {path: '/bank/accountDetails',name: '账户信息',component: AccountDetails,meta:{title:'账户信息'}},
    //存管账户授权确认
    {path: '/bank/notesBank',name: '存管账户授权确认',component: NotesBank,meta:{title:'存管账户授权确认'}},


    //保存借款信息
    {path: '/loanBaocun',name: '保存借款信息',component: LoanBaocun,meta:{title:'保存借款信息'}},
    //协议页
    {path: '/agreement',name: 'agreement',component: Agreement,meta:{title:'协议列表'}},
    //上传照片
    {path: '/uploadeImg',name: '上传照片',component: UploadeImg,meta:{title:'上传照片'}},


    //404
    {path: '*',name: '404',component: ShangCode,meta:{title:'商家推荐码'}},

  ]
});

export {router};


router.beforeEach((to, from, next) => {
  // console.log(to, from, next);
  if(to.name == '订单状态'){
    window.LabiWinJSI.backNative('backNative');
    window.LabiWinJSI.showList('show');
    
  } else{
    window.LabiWinJSI.backNative('backWeb');
    window.LabiWinJSI.showList('hide');
  }
  //遍历meta改变title
  if (to.meta.title) {
    window.LabiWinJSI.setNativeTitle(to.meta.title);
    document.title = to.meta.title;
  }
  //执行
  next();
});