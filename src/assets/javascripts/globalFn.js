import md5 from 'js-md5';
//md5加密
function getmd5(str) {
   return  md5(str); 
}
//参数合并
function concatObj(res) {
  // let GetRequestObjs = JSON.parse(localStorage.getItem('GetRequestObj'));
  // {"chanName":"website","chanType":"APP4.11.4","entranceID":"41","loginPhone":"15133303272","token":"ed6b78edde8d4c72b7c5341efaaec05a","reqTime":"2018-04-17 11:27:07","sign":"0902d8e05fc006d483ee3c2974a57951","ctSign":"9"}
  // {"chanName":"website","chanType":"APP4.11.4","entranceID":"41","loginPhone":"15133303272","token":"ed6b78edde8d4c72b7c5341efaaec05a","reqTime":"2018-04-17 11:28:39","sign":"62d80715416150a894e539e5bb20c06f","bpcId":"m7nnzzXWHubhHt73Ih6","businessType":"5","loanMoney":"18800","nper":23}
  let loginPhone = '15133303272' ,
  token      = 'ed6b78edde8d4c72b7c5341efaaec05a' ;

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
  concatObj
};
export default Gfn;