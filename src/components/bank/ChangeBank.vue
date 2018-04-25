<template>
  <div class="bank-wrap" >
    <!-- 提醒文字 -->
    <section class="remind-box">
      <p class="icon-box"><i class="iconfont icon-tixing"></i></p>
      <p class="text-box">您已经开通华夏银行存管账户，并绑定以下银行卡，请选择一张您的常用银行卡，补全银行卡信息进行认证。认证成功的银行卡将作为您的还款银行卡。</p>
    </section>
    <!-- 银行卡列表 -->
    <section class="bank-box">
      <bank-box class="list-box" page='list' v-for="(m,i) in arr" :key="i" :obj="m" @userBtn="userBtn"></bank-box>
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
        <p class="bank-title">5633 4534 <span>****</span> 0040 (招商银行)</p>
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
      res : {
        bankCards : [
          {
            cardSign :'Y',//是否是主卡
            cardType : '1',
            cardNo   : '11112222****3265',
            bank :'华夏银行',
            bankName : '华夏银行',
            bindStatus :'B01',
            custodyStatus : 'P02',
            bankIcon :'/static/images/order/fuwu-icon.png',
          },
          {
            cardSign :'N',//是否是主卡
            cardType : '1',
            cardNo   : '54569878****3265',
            bank :'华夏银行',
            bankName : '华夏银行',
            bindStatus :'B01',
            custodyStatus : 'P00',
            bankIcon :'/static/images/order/fuwu-icon.png',
          },
          {
            cardSign :'N',//是否是主卡
            cardType : '1',
            cardNo   : '47853269****5489',
            bank :'华夏银行',
            bankName : '华夏银行',
            bindStatus :'B01',
            custodyStatus : 'P01',
            bankIcon :'/static/images/order/fuwu-icon.png',
          },
        ]
      },
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
      //数组替换
      this.bankObj.arr.splice(2,1,str);

      let obj =  globalFn.concatObj({
        cardNo : this.bankObj.arr.join(''),
        bankType : this.bankObj.bank
      });
      //鉴权 -- 输入脱敏卡号
      this.acountCertified();
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
      //显示loading
      // this.setLodingAsync(true);
      let obj =  globalFn.concatObj({});

      api.queryAcountCardList(obj).then((res) =>{
        if(res.respCode =='000'){
          // this.$router.push({path:'/business/shangList',query:{recoCode:this.text}});
        } else{
          // this.setLodingAsync(false);
          // this.setToastObj({async:true,respMesg:res.respMesg});
        }
      },(error)=>{
        this.arr = this.res.bankCards;
        this.arr.map((m,i)=>{
          return m['arr'] = [m.cardNo.substring(0,4),m.cardNo.substring(4,8),m.cardNo.substring(8,12),m.cardNo.substring(12,16)]
        })
        return
        console.log(error)
      });
    },
    //添加银行卡
    addBankCard () {
      //显示loading
      this.setLodingAsync(true);
      let obj =  globalFn.concatObj({});
      api.addBankCard(obj).then((res) =>{
        if(res.respCode =='000'){
          this.setLodingAsync(false);
          //跳转到 玖富绑卡页
          location.href = res.openUrl;
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
        this.setLodingAsync(false);
        if(res.respCode =='000'){
          this.alertAsync = false;
          this.setToastObj({async:true,respMesg:'恭喜！银行卡主卡设置成功'});
        } else{
          this.alertAsync = false;
          this.stateAsync = true;
        }
      },(error)=>{
        console.log(error);
        this.setLodingAsync(false);
        this.alertAsync = false;
        this.stateAsync = true;
      });
    }
  },
  mounted () {
    //银行卡列表
    this.queryAcountCardList();
  }
}
</script>
<style lang="scss" scoped>
.bank-wrap{
  padding-top:140px;
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
