<template>
  <div class="bank-wrap">
    <!-- 提醒文字 -->
    <section class="remind-box" v-for="(m,i) in 2" :key="i" :class="{'remind-box1':i==1}">
      <p class="icon-box"><i class="iconfont icon-tixing"></i></p>
      <p class="text-box" v-if="arr.length >0">您已经开通华夏银行存管账户，并绑定以下银行卡，请选择一张您的常用银行卡，补全银行卡信息进行认证。认证成功的银行卡将作为您的还款银行卡。</p>
      <p class="text-box" v-else>请添加一张您本人名下的常用储蓄卡，并设定为您的主卡。
目前支持的银行共9家包括：中国银行、工商银行、建设银行、交通银行、中信银行、兴业银行、光大银行、邮政储蓄、广发银行。</p>
    </section>
    <!-- 银行卡列表 -->
    <section class="bank-box">
      <bank-box class="list-box" v-for="(m,i) in arr" :key="i" :obj="m" @userBtn="userBtn"></bank-box>
    </section>
    <!-- 添加银行卡 -->
    <section class="add-bank g-fen-cen-box" @click="addBankCard">
      <span class="g-cen-y">
        <i class="iconfont icon-jia"></i>添加银行卡
      </span>
      <span><i class="iconfont icon-jiao-rig"></i></span>
    </section>

    <!-- 脱敏弹框 -->
    <alert-back class="alert-back" v-show="alertAsync" @closeAlertFn="alertAsync =false">
      <h4 class="title g-border">请补充标记为型号的4位数字</h4>
      <div class="box">
        <p class="bank-title" >{{bankObj.cardNo}} ({{bankObj.bankName}})</p>
        <!-- <p class="bank-title">5633 4534 <span>****</span> 0040 ({{bankObj.bankName}})</p> -->
        <p class="text">
          <input type="tel" class="code-num" v-on:input ="inputFunc" v-model="input1"  maxlength="1">
          <input type="tel" class="code-num" v-on:input ="inputFunc" v-model="input2"  maxlength="1">
          <input type="tel" class="code-num" v-on:input ="inputFunc" v-model="input3"  maxlength="1">
          <input type="tel" class="code-num" v-on:input ="inputFunc" v-model="input4"  maxlength="1">
        </p>
      </div>
    </alert-back>
    <!-- 输入数字状态 -->
    <alert-back class="alert-state-back" v-if="stateAsync">
      <h4 class="title g-border">提示</h4>
      <div class="box">
        <p class="bank-title">主卡设置失败！银行卡号码错误</p>
      </div>
      <div class="btns g-border1">
        <button @click="stateAsync = false">放弃</button>
        <button @click="retryFn">重试</button>
      </div>
    </alert-back>
  </div>
</template>

<script>
import api  from '@/api/api';
import {mapActions} from 'vuex';
import globalFn from '@/assets/javascripts/globalFn';
import bankBox from '$bank/common/bankBox.vue';
import alertBack from '@/common/alert/alertBack.vue';

export default {
  name: 'bank',
  components:{
    bankBox,
    alertBack
  },
  data () {
    return {
      arr : [],
      input1 :'',
      input2 :'',
      input3 :'',
      input4 :'',
      alertAsync : false, //脱敏
      stateAsync : false,//状态
      bankObj : {}
    }
  },
  methods : {
    ...mapActions(['setToastObj','setLodingAsync']),
    //点击我的主卡
    userBtn (obj) {
      this.retryFn();
      this.goNextInput('.code-num');
      this.bankObj = obj;
    },
    //监听是否都输入了
    inputFunc () {
      if(this.input1 =='' || this.input2 =='' || this.input3 =='' || this.input4 ==''){return false};
      let str = this.input1+this.input2+this.input3+this.input4;
      //字符串替换
      var s = this.bankObj.cardNo.replace('****',str);
      
      let obj =  globalFn.concatObj({
        cardNo : s,
        bankType : this.bankObj.bank
      });
      //鉴权 -- 输入脱敏卡号
      this.acountCertified(obj);
    },
    //输入光标自动到下一个input
    goNextInput (el) {
        var txts = document.querySelectorAll(el);
        for(let i = 0; i<txts.length;i++){
          var t = txts[i];
              t.index = i;
            //光标自动聚焦到前边没有输入的input
            t.addEventListener('focus',function (){
              for(let j =0;j<txts.length ;j++){
                if(j<i){
                 if(txts[j].value==''){
                   txts[j].focus();
                   return;
                 }
                }
              }
            });

            //输入时，自动跳转到下一个
            t.addEventListener('keyup',function (){
              if(window.event.keyCode == 8){
                this[`input${i+1}`] = '';
                if(i>0){
                  txts[i-1].focus();
                }
              } else{
                this.value=this.value.replace(/^(.).*$/,'$1');
                var next = this.index + 1;
                if(next > txts.length - 1) {return};
                if (this.value) {
                  txts[next].focus();
                }
              }
            });
        }
    },
    //初始化 输入框的值
    retryFn () {
      this.input1 =''; 
      this.input2 =''; 
      this.input3 =''; 
      this.input4 ='';
      this.alertAsync = true;
      this.stateAsync = false;
    },
    //银行卡列表
    queryAcountCardList () {
      let obj =  globalFn.concatObj({});
      api.queryAcountCardList(obj).then((res) =>{
        //隐藏loading
        this.setLodingAsync(false);
        if(res.respCode =='000'){
          this.arr = res.bankCards;
          this.arr.map((m,i)=>{
            if(m.cardNo.length == 16){
              m['async'] =true;
              return m['arr'] = [m.cardNo.substring(0,4),m.cardNo.substring(4,8),m.cardNo.substring(8,12),m.cardNo.substring(12,16)];
            } else{
              m['async'] =false;
              return m['arr'] =  [
                        m.cardNo.substring(0,4),
                        m.cardNo.substring(4,8),
                        [m.cardNo.substring(8,m.cardNo.length-8),
                        m.cardNo.substring(m.cardNo.length-8,m.cardNo.length-4),
                        m.cardNo.substring(m.cardNo.length-4,m.cardNo.length)]
                      ];
            }
          });
        } else{
          this.setToastObj({async:true,respMesg:res.respMesg});
        }
      },(error)=>{
        console.log(error)
      });
    },
    //添加银行卡
    addBankCard () {
      //显示loading
      this.setLodingAsync(true);
      let obj =  globalFn.concatObj({
        backUrl : `${location.origin}/bank/changeBank?loginPhone=${globalFn.concatObj({}).loginPhone}&token=${globalFn.concatObj({}).token}`
      });
      api.addBankCard(obj).then((res) =>{
        if(res.respCode =='000'){
          this.setLodingAsync(false);
          //跳转到 玖富绑卡页
          this.$router.push({path:'/bank/notesBank',query:{url:res.openUrl}});
          // location.href = res.openUrl;
        } else{
          this.setLodingAsync(false);
          this.setToastObj({async:true,respMesg:res.respMesg});
        }
      },(error)=>{
        console.log(error);
      });
    },
    //开户接口
    openAcount () {
      //显示loading
      this.setLodingAsync(true);
      let obj =  globalFn.concatObj({
        backUrl : `http://192.168.94.24:8080/bank/changeBank?loginPhone=${globalFn.concatObj({}).loginPhone}&token=${globalFn.concatObj({}).token}`
      });
      api.openAcount(obj).then((res) =>{;;;
        if(res.respCode =='000'){
          //已开户
          if(res.status =='1'){
            //银行卡列表
            this.queryAcountCardList();
          } 
          //未开户
          else if(res.status =='2'){
            this.setLodingAsync(false);
            //跳转到 玖富绑卡页
            this.$router.push({path:'/bank/notesBank',query:{url:res.openUrl}});
            // location.href = res.openUrl;
          }
        } else{
          this.setLodingAsync(false);
          this.setToastObj({async:true,respMesg:res.respMesg});
        }
      },(error)=>{
        console.log(error);
      });
    },
    //鉴权 -- 输入脱敏卡号
    acountCertified (obj) {
      //显示loading
      this.setLodingAsync(true);
      api.acountCertified(obj).then((res) =>{
        if(res.respCode =='000'){
          this.alertAsync = false;
          this.setToastObj({async:true,respMesg:'恭喜！银行卡主卡设置成功'});
          //银行卡列表
          this.queryAcountCardList();
        } else{
          this.setLodingAsync(false);
          this.alertAsync = false;
          this.stateAsync = true;
        }
      },(error)=>{
        this.setLodingAsync(false);
        this.alertAsync = false;
        this.stateAsync = true;
      });
    }
  },
  mounted () {
    //开户接口
    this.openAcount();
  }
}
</script>
<style lang="scss" scoped>
.bank-wrap{
  // padding-top:140px;
  .remind-box{
    padding:20px 30px;
    background:$col-yel;
    color:$col-red;
    display: flex;
    position: fixed;
    left:0;
    top:0;
    width: 100%;
    z-index: 5;
    &.remind-box1{
      position: relative;
    }
    .icon-box{
      padding-right:20px;
      i{
        font-size: 40px;
      }
    }
    .text-box{
      font-size: 24px;
      line-height: 34px;
    }
  }
  .bank-box{
    padding:20px 30px;
  }
  .add-bank{
    height: 110px;
    padding: 0 30px;
    background: $col-f;
    span{
      font-size: 32px;
      color:$col-3;
      &:first-child{
        i{
          font-size: 50px;
          color:$col-6;
          padding-right: 20px;
        }
      }
      &:last-child{
        i{
          font-size: 30px;
          color:$col-9;
        }
      }
    }
  }
  .alert-back{
    .title{
      line-height: 100px;
      text-align: center;
      font-size: 30px;
    }
    .box{
      padding:20px 0 46px;
      .bank-title{
        font-size: 28px;
        color:$col-6;
        text-align: center;
        line-height: 62px;
      }
      .text{
        display: flex;
        justify-content: center;
        height: 120px;
        input{
          border:none;
          margin:0 7px;
          border-bottom: 2px solid $col-9;
          width:96px;
          font-size: 60px;
          color:$col-3;
          text-align: center;
          caret-color:$col-blue;
        }
      }
    }
    .btns{
      height: 100px;
      padding-top:20px;
      display: flex;
      button{
        width:0;
        flex:1;
        height: 60px;
        font-size: 30px;
        border:none;
        background:$col-f;
        &:last-child{
          color:$col-blue;
          border-left:1px solid $col-c;
        }
      }
    }
  }
}
</style>
