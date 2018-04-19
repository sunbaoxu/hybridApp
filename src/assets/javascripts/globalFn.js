import md5 from 'js-md5';
//md5加密
function getmd5(str) {
   return  md5(str); 
}
//参数合并
function concatObj(res) {
  //{"chanName":"website","chanType":"APP4.11.4","entranceID":"41","loginPhone":"18900000066","token":"bf61f31e47ef45508b2dc721edb2191e","reqTime":"2018-04-19 10:51:32","sign":"313555c7e973144737882fd40ce5c2b3","QRcode":"trda001"}
  // let GetRequestObjs = JSON.parse(localStorage.getItem('GetRequestObj'));
  // {"chanName":"website","chanType":"APP4.11.4","entranceID":"41","loginPhone":"15133303272","token":"67b2a9c9ffec48d8b5b9bef676e584e7","reqTime":"2018-04-18 10:18:08","sign":"7f26cc97c05bba247c5f6928a4feed97","QRcode":"trda001"}
  // let loginPhone = '18900000066' ,
  // token      = 'bf61f31e47ef45508b2dc721edb2191e' ;

  // let loginPhone = GetRequestObjs.loginPhone ,
  //     token      = GetRequestObjs.token ;

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
  
    var date = new Date()

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