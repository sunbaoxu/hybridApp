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
const stillDetail    = resolve => require(['@/components/order/details/stillDetail.vue'], resolve);
Vue.use(Router);
export default new Router({
  mode :'history',
  routes: [
    //商家推荐码
    {path: '/shangCode',name: 'shangCode',component: ShangCode},
    //商家列表
    {path: '/shangList',name: 'shangList',component: ShangList},
    //商家详情
    {path: '/shangDetail',name: 'shangDetail',component: ShangDetail},
    //上传照片
    {path: '/uploadeImg',name: 'uploadeImg',component: UploadeImg},

    //确认订单
    {path: '/confirmOrder',name: 'confirmOrder',component: ConfirmOrder},
    //订单状态
    {path: '/orderState/',name: 'orderState',component: OrderState},
    //订单详情
    {path: '/stillDetail',name: 'stillDetail',component: stillDetail},

    //还款记录
    {path: '/orderRecord',name: 'orderRecord',component: OrderRecord},



    //保存借款信息
    {path: '/loanBaocun',name: 'loanBaocun',component: LoanBaocun},
    //协议页
    {path: '/agreement',name: 'agreement',component: Agreement},
  ]
});