<template>
  <div class="loan-wrap" >
    <section class="from-box">
      <P class="g-fen-cen-box g-border">
        <span>与本人的关系</span>
        <input type="text" placeholder="请输入与本人的关系" v-model="relationship">
      </P>
      <P class="g-fen-cen-box g-border">
        <span>姓名</span>
        <input type="text" placeholder="请输入姓名" v-model="relationName" maxlength="18">
      </P>
      <P class="g-fen-cen-box g-border">
        <span>手机号码</span>
        <input type="tel" placeholder="请输入手机号码" v-model="relationPhone" maxlength="11">
      </P>
      <P class="g-fen-cen-box g-border">
        <span>身份证号码</span>
        <input type="text" placeholder="请输入身份证号码" v-model="relationIdCard" maxlength="20">
      </P>
    </section>
    <section class="btn-box"><button :class="{'on': relationship!='' && relationName!='' && relationPhone!='' && relationIdCard!=''}" @click="submit">保存</button></section>
    <section class="text-box">
      <h4>温馨提示：</h4>
      <p>为了保证合同有效性，我公司将于借款人电话核实并录音。</p>
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
     relationPhone   :'',
     relationName    : '',
     relationship : '', //关系
     relationIdCard  :'' //身份证
    }
  },
  methods : {
    ...mapActions(['setToastObj']),
    submit () {
    if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.relationPhone))){ 
      this.setToastObj({
        async:true,
        respMesg:'手机号输入不正确'
      });
      this.relationPhone = '';
      
    } else if(!(/(^(\\d{14}|\\d{17})(\\d|[X])$)/.test(this.relationIdCard))) {
      this.setToastObj({
        async:true,
        respMesg:'身份证号输入不正确'
      });
      this.relationIdCard = '';
    }

      let obj =  globalFn.concatObj({
          relationship     : this.relationship,
          relationName     : this.relationName,
          relationIdCard   : this.relationIdCard,
          relationPhone    : this.relationPhone
        });
      this.saveBorrowers(obj);
    },
    //保存借款人
    saveBorrowers (obj) {
      api.saveBorrowers(obj).then((res) =>{
        if(res.respCode =='000'){
          history.go(-1);
        } else {
          this.setToastObj({
            async:true,
            respMesg:res.respMesg
          });
        }
      },(error)=>{
        console.log(error)
      });
    }
  },
  // mounted () {
  //   //默认请求还款计划
  //   // this.getOrderState()
  // }
}
</script>
<style lang="scss" scoped>
.loan-wrap{
  padding-top:20px;
  .from-box{
    background:$col-f;
    p{
      height: 80px;
      padding:0 30px;
      span{
        font-size: 24px;
        color:$col-3;
        width: 200px;
      }
      input{
        height: 100%;
        width:0;
        flex:1;
        border:none;
        text-align: right;
        font-size: 24px;
        padding-left:20px;
      }
    }
  }
  .btn-box{
    padding:100px 30px 0;
    box-sizing: border-box;
    button{
      height: 100px;
      background: $col-c;
      font-size: 30px;
      width: 100%;
      border:none;
      border-radius: 50px;
      color:$col-f;
      &.on{
        background: $col-blue;
      }
    }
  }
  .text-box{
    padding:60px 30px 0;
    color:$col-3;
    h4{
      font-size: 24px;
    }
    p{
      font-size: 24px;
    }
  }
}
</style>
