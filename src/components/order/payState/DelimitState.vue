<template>
  <div class="delimit-wrap" >
    <section class="main-box">
        <img :src="imgUrl" alt="">
        <p class="text">{{text}}<span v-if="retStatus == '2'">(00:{{num}})</span></p>
        <p class="money">{{money}}元</p>
    </section>
    <section class="btn-box">
      <button @click="routerFn">{{btnText}}</button>
    </section>
    <section class="text-box">
      <p>{{remark}}</p>
    </section>
  </div>
</template>

<script>
import api  from '@/api/api';
import {mapActions} from 'vuex';
import globalFn from '@/assets/javascripts/globalFn';
export default {
  name: 'state',
  data () {
    return {
      imgUrl : '',
      text : '',
      money : '',
      remark : '',
      btnText : '',
      num : 60 ,
      retStatus : '',
      timer : null
    }
  },
  methods : {
    ...mapActions(['setToastObj','setLodingAsync']),
    //立即还款
    doPay () {
      let obj = globalFn.concatObj({
        repayMoney  :this.$route.query.scheduleAmt, //还款金额
        loanID      : this.$route.query.loanId, //订单id
        receiptType : this.$route.query.huaKouType, //划扣类型
        cardNo      : this.$route.query.cardNo //银行卡号
      });
      api.doPay(obj).then((res) =>{
        this.setLodingAsync(false);
        if(res.respCode =='000'){
          this.text   = res.retStatusMs;
          this.money  = res.repayMoney;
          this.remark = res.remark;
          //成功
          if(res.retStatus == '0'){
            this.imgUrl ='/static/images/payState/yes.png';
            this.btnText = '继续还款';
          } 
          //还款失败
          else if(res.retStatus =='1'){
            this.imgUrl ='/static/images/payState/no.png';
            this.btnText = '再试一次';
          } 
          //处理中
          else if(res.retStatus =='2'){
            this.imgUrl ='/static/images/payState/etc.png';
            this.btnText = '返回';
            this.websocketFn();
          }
          
        } else{
          this.btnText = '返回';
          this.setToastObj({async:true,respMesg:res.respMesg});
        }
      },(error)=>{
        console.log(error)
      });
    },
    //建立长连接
    websocketFn () {
     this.timer =  setInterval (()=>{
        this.num --;
        if(this.num <=0){
          //立即还款
          this.doPay();
          clearInterval(this.timer);
          this.num = 60;
        }
      },100)
    },
    //跳转回去
    routerFn (){
      this.$router.push({path:'/order/orderState',query:{loanId:this.$route.query.loanId}});
    }
  },
  mounted () {
    this.setLodingAsync(true);
    //立即还款
    this.doPay();
  }
}
</script>
<style lang="scss" scoped>
.delimit-wrap{
  padding:176px 30px 0;
  box-sizing: border-box;
  .main-box{
    img{
      display: block;
      width: 300px;
      margin:0 auto;
    }
    p{
      text-align: center;
      &.text{
        padding:30px 0 ;
        font-size: 42px;
        color:$col-3;
      }
      &.money{
        font-size: 40px;
        color:$col-9;
      }
    }
  }
  .btn-box{
    padding-top:84px;
    button{
      height: 100px;
      border:1px solid $col-blue;
      font-size: 36px;
      width:100%;
      border-radius: 50px;
      background: $col-f;
      color:$col-blue;
    }
  }
  .text-box{
    padding:30px 90px 0;
    p{
      font-size: 26px;
      color:$col-9;
    }
  }
}
</style>
