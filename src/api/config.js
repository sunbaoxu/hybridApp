import axios from 'axios'
import qs from 'qs'
axios.defaults.timeout = 5000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';           //配置请求头
//配置接口地址
//A
// axios.defaults.baseURL = 'http://101.201.77.80:9810/gateway2server/';   
//B
//axios.defaults.baseURL = 'http://39.107.202.1:7716/gateway2server/';   
//C
axios.defaults.baseURL = 'http://39.107.202.87:7720/gateway2server/'; 
//D
// axios.defaults.baseURL = 'http://192.168.70.11/gateway2server/';   

//axios.defaults.baseURL = 'https://www.labifenqi.com/gateway2server/'; 


//POST传参序列化(添加请求拦截器)
// axios.interceptors.request.use((config) => {
// 	//在发送请求之前做某件事
//     if(config.method  === 'post'){
//       config.data = qs.stringify(config.data);
//     } else{
//       config.data = qs.stringify(config.data);
//     }
//     return config;
// },(error) =>{
//     return Promise.reject(error);
// });
//返回一个Promise
export function fetch(url, params,type) {
  return new Promise((resolve, reject) => {
    if(type=='post'){
      axios.post(url, params)
      .then(response => {
          resolve(response.data);
      }, err => {
          reject(err);
      })
      .catch((error) => {
          reject(error)
      })
    } else{
      axios.get(url,{params})
      .then(response => {
          resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
          reject(error)
      })
    }   
  })
}