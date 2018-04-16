import md5 from 'js-md5';
//md5加密
function getmd5(str) {
   return  md5(str); 
}
// {"loanID":"3W41cbivBAjwJUG1xac","chanName":"website","chanType":"APP4.11.4","entranceID":"41","loginPhone":"18900000066","reqTime":"2018-04-16 16:28:45","sign":"d348a83f1a9bc0da452c6fa899c8bf1b","token":"90366f71fe324d2b8cc3877466b70e6b"}
//参数合并
function concatObj(res) {
  let loginPhone = localStorage.getItem('loginPhone')!=null ?localStorage.getItem('loginPhone'):'18900000066' ,
      token      = localStorage.getItem('token')!=null ?localStorage.getItem('token'):'90366f71fe324d2b8cc3877466b70e6b' ,
      reqTime       = getFormateDate(),
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