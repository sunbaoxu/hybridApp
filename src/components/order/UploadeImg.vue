<template>
  <div class="wrap-div">
    <div class="top-div">
      <p class="top-tip">
        <span>请确保姓名、身份证号码清晰!</span>
      </p>
      <p class="middle-img">
        <i></i>
      </p>
      <p class="bottom-tip">
        <i></i>
        <span>正确的拍照示例</span>
      </p>
    </div>

    <div>
      <div class="upload-div">
        <img @click="goNative" v-bind:src="imgUrl" />
        <p class="reset-tab" v-show="isLoad">
          <i @click="goNative"></i>
          <i @click="backFn(true)"></i>
        </p>
      </div>
    </div>

    <div class="bottom-stru">
      <p><span>拍照说明:</span></p>
      <p><span>1.免冠，建议使用素颜照，保证五官清晰可见。</span></p>
      <p><span>2.照片放大后，证件上的文字信息和证件号清晰可见。</span></p>
      <p><span>3.手持证件拍照，不要遮挡证件上的任何信息。</span></p>
      <p><span>4.照片文件大小不要超过5M。</span></p>
    </div>

    <div class="btn-save" @click="saveImg">
      <button :class="{'on':isLoad}">保存</button>
    </div>

    <div class="back" v-if="backAsync" @click="backFn(false)">
      <img :src="imgUrl" alt="">
    </div>

  </div>
</template>

<script>

import api  from '@/api/api';
import globalFn from '@/assets/javascripts/globalFn';
export default {
  data(){
    return{
      imgUrl:'/static/images/img/default_bg.png',
      isLoad:false,
      backAsync:false,
    }
  },

  methods : {
    goNative:function () {
      window.LabiWinJSI.showImgPickDialog();
    },
    ImgPickCallBack:function (str) {
      if (str!=null){
        this.isLoad=true;
        this.imgUrl = "data:image/gif;base64,"+str;
      }else{
        this.isLoad=false;
      }
    },
    backFn (async) {
        this.backAsync = async;
    },
    saveImg(){
      if (this.isLoad){
        let obj =  globalFn.concatObj({
          imgPath1 : this.imgUrl,
          imgPath2 :'',
          loanId   : '',
          imgId1   : '',
          imgId2   : ''
        });
        // alert('dfsfdsfads');
        this.uploadConfirmation(obj);
      }else{
        alert("我去")
      }
    },
    //下单前合同地址展示
    uploadConfirmation (obj) {
      api.uploadConfirmation(obj).then((res) =>{
          alert(res.respMesg)
          
        if(res.respCode =='000'){

          alert(res.respCode)
        }

      },(error)=>{
        alert('qweqeqweqweerror')
        console.log(error,'dfs')
      });
    }
  },
  mounted () {
    window.ImgPickCallBack=this.ImgPickCallBack;
  }

}

</script>

<style scoped lang="scss">

  .wrap-div{
    background: #ffF0F0F0;
  }
  .top-div{
    background: #fff;
    padding: 30px 30px;
  }
  .top-div>.top-tip{
    color: red;
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .middle-img{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .middle-img>i{
    background: url("/static/images/img/hand_img.png") no-repeat;
    background-size: 100%;
    width:200px;
    height: 228px;
    margin-top: 20px;
  }

  .bottom-tip{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
  }
  .bottom-tip>i{
    background: url("/static/images/img/checked.png") no-repeat;
    background-size: 100%;
    width:34px;
    height: 34px;
  }

  .bottom-tip>span{
    font-size: 28px;
    margin-left:10px;
    color: #3080ff;
  }

  .upload-div{
    display:flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #fff;
    padding-top: 20px;
  }

  .upload-div>img{
    background-size: 100%;
    width:510px;
    height: 300px;
    position: relative;
  }

  .upload-div>p{
    width:510px;
    bottom: 0;
    height: 60px;
    background-color:rgba(0,0,0,0.3);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:16px 16px;
  }

  .upload-div>p>i:first-child{
    background: url("/static/images/img/reload.png") no-repeat;
    background-size: 100%;
    width: 40px;
    height:36px ;
  }

  .upload-div>p>i:nth-child(2){
    background: url("/static/images/img/preview.png") no-repeat;
    background-size: 100%;
    width: 40px;
    height:36px ;
  }
  .bottom-stru{
    font-size: 24px;
    padding: 40px 70px;
  }

  .btn-save{
    padding:0 30px;
    button{
      background: $col-c;
      color: #fff;
      border:none;
      border-radius:50px;
      font-size: 30px;
      height: 100px;
      width:100%;
      &.on{
        background: $col-blue;
      }
    }
  }

  .back{
    position: fixed;;
    left:0;
    right: 0;
    bottom: 0;
    top:0;
    display: flex;;
    justify-content: center;;
    align-items: center;
    background: rgba(0,0,0,0.7);
  }
  .back>img{
    width:90%
  }

</style>
