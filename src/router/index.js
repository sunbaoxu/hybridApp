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




//银行卡list 页
const ChangeBank    = resolve => require(['@/components/bank/ChangeBank.vue'], resolve);
//我的主卡
const UserBank    = resolve => require(['@/components/bank/UserBank.vue'], resolve);
//账户信息
const AccountDetails    = resolve => require(['@/components/bank/AccountDetails.vue'], resolve);


Vue.use(Router);
export default new Router({
  mode :'history',
  routes: [
    //商家
    //商家推荐码
    {path: '/business/shangCode',name: '商家推荐码',component: ShangCode},
    //商家列表
    {path: '/business/shangList',name: '商家列表',component: ShangList},
    //商家详情
    {path: '/business/shangDetail',name: '商家详情',component: ShangDetail},


    //订单
    //确认订单
    {path: '/order/orderConfirm',name: '确认订单',component: ConfirmOrder},
    //订单状态
    {path: '/order/orderState',name: '订单状态',component: OrderState},
    //订单详情
    {path: '/order/orderDetail',name: '订单详情',component: OrderDetail},
    //还款记录
    {path: '/order/orderRecord',name: '订单还款记录',component: OrderRecord},


    //银行卡
    //银行卡list 页
    {path: '/bank/changeBank',name: '银行卡列表',component: ChangeBank},
    //我的主卡
    {path: '/bank/userBank',name: '我的主卡',component: UserBank},
    //账户信息
    {path: '/bank/accountDetails',name: '账户信息',component: AccountDetails},


    //保存借款信息
    {path: '/loanBaocun',name: '保存借款信息',component: LoanBaocun},
    //协议页
    {path: '/agreement',name: 'agreement',component: Agreement},
    //上传照片
    {path: '/uploadeImg',name: '上传照片',component: UploadeImg},




    //404
    {path: '*',name: '404',component: ShangCode},
  ]
});