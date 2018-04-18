
//改版store中各种状态的地方
export const getMsg = (state, payload) => {
  state.msg = payload.msg;
}
export const setBusinessObj = (state, payload) => {
  state.businessObj = payload.obj;
}

export const setOrderRmpList = (state, payload) => {
  state.orderRmpList = payload.arr;
}

export const setToastObj = (state, payload) => {
  state.toastObj = payload.obj;
}

//上传图片
export const setUploadImg = (state, payload) => {
  state.UploadImg = payload.str;
}

//保存借款人
export const setLoancunAsync = (state, payload) => {
  state.loancunAsync = payload.str;
}