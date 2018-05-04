import md5 from 'js-md5';
//md5加密
function getmd5(str) {
   return  md5(str); 
}
//参数合并
function concatObj(res) {
  //{"chanName":"website","chanType":"APP4.11.4","entranceID":"41","loginPhone":"18911894265","token":"9a2e1be5a4184a9b9bd5aea811d75688","reqTime":"2018-05-04 14:17:41","sign":"30fd543ec8b3f2f152df827e145b8e82","loanId":"bfrovJOX579vbjISQhr"}

  let GetRequestObjs = JSON.parse(localStorage.getItem('GetRequestObj'));

  // let loginPhone = '18700086649' ,
  //     token      = '63ad4de38a324a4a8844de7d86b10049';

  
  let loginPhone = '18911894265' ,
      token      = '9a2e1be5a4184a9b9bd5aea811d75688';

  // let loginPhone = GetRequestObjs.loginPhone ,
  //     token      = GetRequestObjs.token;

  let   reqTime    = getFormateDate(),
        sign       = getmd5(loginPhone+reqTime);

   let obj = {
    "chanName":"website",
    "chanType":"APP4.11.4",
    "entranceID":"41",
    loginPhone,
    token,
    reqTime,
    sign
  }

  // Object.assign(obj,res,GetRequestObjs);
  Object.assign(obj,res);

  return obj;
}

//对字符串部分隐藏  str：字符串，frontLen：前面保留位数，endLen：后面保留位数。
function plusXing (str,frontLen,endLen) {
  if(!str){return ''};
  var len = str.length-frontLen-endLen;
  var xing = '';
  for (var i=0;i<len;i++) {
  xing+='*';
  }
  return str.substring(0,frontLen)+xing+str.substring(str.length-endLen);
}

//转译  时间
function getFormateDate(){
  var date = new Date();
  var year = date.getFullYear()
  var month = (date.getMonth()+1)<10?'0'+(date.getMonth()+1):(date.getMonth()+1)
  var day = date.getDate()<10?'0'+date.getDate():date.getDate()
  var hours = date.getHours()<10?'0'+date.getHours():date.getHours()
  var min = date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()
  var sec = date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds()
  return year+'-'+month+'-'+day+' '+hours+':'+min+':'+sec
}

var Gfn = {
  getmd5,
  concatObj,
  plusXing
};
export default Gfn;