import {fetch} from './config.js';
export default {
  //根据订单ID查看详细信息
  queryOrderByLoanIDNew(params) {return fetch('basicFController/queryOrderByLoanIDNew', params,'post')},

  
  //获取还款详情
  activePayRecord(params) {return fetch('activePayController/activePayRecord', params,'post')},
  //主动还款列表
  activePayDetail(params) {return fetch('activePayController/activePayDetail', params,'post')},


  
  //学贷下订单
  loanInstallOrder(params) {return fetch('rulecheckController/loanInstallOrder', params,'post')},

  //上传确认函 -  改为上传照片
  uploadConfirmation(params) {return fetch('/beforeOrder/uploadConfirmationNew', params,'post')},
  //2.保存借款人
  saveBorrowers(params) {return fetch('borrowerController/saveBorrowers', params,'post')},
  //2.查询银行卡（主卡）
  queryUserBankByPhone(params) {return fetch('tradeController/queryUserBankByPhone', params,'post')},




  //2.基本信息认证
  queryAuthInfo(params) {return fetch('rulecheckController/queryAuthInfo', params,'post')},



  
  //查询还款详情以及费用详情(两笔)
  queryRepayDetails(params) {return fetch('custodyController/queryRepayDetails', params,'post')},
  //下单前合同地址展示
  bfContractLink(params) {return fetch('custodyController/bfContractLink', params,'post')},
  //下单前合同地址展示
  afContractLink(params) {return fetch('custodyController/afContractLink', params,'post')},


  
  
  //根据机构推荐码查询商户信息及商品各个方案
  queryBusinessInfoAndProgram(params) {return fetch('basicFController/queryBusinessInfoAndProgram', params,'post')},
  //根据方案查低高额还款期
  queriesProgramListNew(params) {return fetch('borrowerController/queriesProgramListNew', params,'post')},
  //学贷检查是否可以下单
  loanCheckInstall(params) {return fetch('rulecheckController/loanCheckInstall', params,'post')},
  //查询共同借款人
  queryBorrowers(params) {return fetch('borrowerController/queryBorrowers', params,'post')},








  //个人银行卡
  //银行卡列表
  queryAcountCardList(params) {return fetch('userAcountController/queryAcountCardList', params,'post')},
  //鉴权 -- 输入脱敏卡号
  acountCertified(params) {return fetch('userAcountController/acountCertified', params,'post')},
  //添加银行卡
  addBankCard(params) {return fetch('userAcountController/addBankCard', params,'post')},
}
