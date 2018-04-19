

function GetRequest() {   
  var url = location.search; //获取url中"?"符后的字串   
  var theRequest = new Object();   
  if (url.indexOf("?") != -1) {   
     var str = url.substr(1);   
     var strs = str.split("&");   
     for(var i = 0; i < strs.length; i ++) {   
        theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);   
     }   
  }   
  return theRequest;   
}   

let GetRequestObj = GetRequest();
localStorage.setItem('GetRequestObj',JSON.stringify(GetRequestObj));


const state = {
  msg    : '我是原始数据',
  businessObj  :localStorage.getItem('setBusinessObj')?JSON.parse(localStorage.getItem('setBusinessObj')):{},
  orderRmpList :localStorage.getItem('orderRmpList')?JSON.parse(localStorage.getItem('orderRmpList')):[],
  toastObj :{async:false},
  UploadImg :'',
  loancunAsync :'',
  lodingAsync :false
}
export default state;