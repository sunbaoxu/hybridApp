import {fetch} from './config.js';
export default {
  //获取订单详情
  getOrderState(params) {return fetch('basicFController/queryOrderByLoanIDNew', params,'post')},
  //获取还款详情
  getOrderRecord(params) {return fetch('activePayController/activePayRecord', params,'post')},




  
  //查询还款详情以及费用详情(两笔)
  queryRepayDetails(params) {return fetch('custodyController/queryRepayDetails', params,'post')},
  //下单前合同地址展示
  bfContractLink(params) {return fetch('custodyController/bfContractLink', params,'post')},


  
  
  //根据机构推荐码查询商户信息及商品各个方案
  queryBusinessInfoAndProgram(params) {return fetch('basicFController/queryBusinessInfoAndProgram', params,'post')},
  //根据方案查低高额还款期
  queriesProgramListNew(params) {return fetch('borrowerController/queriesProgramListNew', params,'post')},
  //4.学贷检查是否可以下单
  loanCheckInstall(params) {return fetch('rulecheckController/loanCheckInstall', params,'post')},
   //查询共同借款人
   queryBorrowers(params) {return fetch('borrowerController/queryBorrowers', params,'post')},
}
