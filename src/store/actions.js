//存放vuex的核心处理函数
export const fun = ({commit}) => {
  commit({
    type: 'getMsg',     //对应mutation.js中的getMsg方法
    msg: '我是修改后的数据...'
  });
};
//商品 详情对象
export const setBusinessObj = ({commit},obj) => {
  commit({
    type: 'setBusinessObj',     
    obj
  });
};

//商品 订单列表
export const setOrderRmpList = ({commit},arr) => {
  commit({
    type: 'setOrderRmpList',     
    arr
  });
};

//吐司 弹框提醒
export const setToastObj = ({commit},obj) => {
  commit({
    type: 'setToastObj',     
    obj
  });
};


//上传图片
export const setUploadImg = ({commit},str) => {
  commit({
    type: 'setUploadImg',     
    str
  });
};


//保存借款人
export const setLoancunAsync = ({commit},str) => {
  commit({
    type: 'setLoancunAsync',     
    str
  });
};

//loding 图片显示隐藏
export const setLodingAsync = ({commit},async) => {
  commit({
    type: 'setLodingAsync',     
    async
  });
};