//工具接口为了方便构建全局state自定义方法

export const msg    = state => state.msg;
//商户信息
export const businessObj    = state => state.businessObj;
//订单信息列表
export const orderRmpList    = state => state.orderRmpList;


//吐司是否显示
export const toastObj    = state => state.toastObj;


//上传图片
export const UploadImg    = state => state.UploadImg;


//保存借款人
export const loancunAsync    = state => state.loancunAsync;