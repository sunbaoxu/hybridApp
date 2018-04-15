
const state = {
  msg    : '我是原始数据',
  businessObj  :localStorage.getItem('setBusinessObj')?JSON.parse(localStorage.getItem('setBusinessObj')):{},
  orderRmpList :localStorage.getItem('orderRmpList')?JSON.parse(localStorage.getItem('orderRmpList')):[],
  toastObj :{async:false}
}
export default state;