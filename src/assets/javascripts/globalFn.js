import md5 from 'js-md5';
//md5加密
function getmd5(str) {
   return  md5(str); 
}
//参数合并
function concatObj(res) {
  //"source":"my","chanName":"website","chanType":"APP4.11.6","entranceID":"41","loginPhone":"18703421287","reqTime":"2018-05-02 10:33:21","sign":"2bce3dd559a6231c9ace989be3c277be","token":"64955775833e4b0b835d35361f8f163f"}

  let GetRequestObjs = JSON.parse(localStorage.getItem('GetRequestObj'));

  // let loginPhone = '18703421287' ,
  //     token      = '64955775833e4b0b835d35361f8f163f';

  let loginPhone = GetRequestObjs.loginPhone ,
      token      = GetRequestObjs.token;

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

  Object.assign(obj,res,GetRequestObjs);
  // Object.assign(obj,res);

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