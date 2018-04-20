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
    <section class="add-bank g-fen-cen-box">
      <span class="g-cen-y">
        <i class="iconfont icon-jia"></i>添加银行卡
      </span>
      <span><i class="iconfont icon-jiao-rig"></i></span>
    </section>

    <!-- 脱敏弹框 -->
    <alert-back class="alert-back">
      <h4 class="title">请补充标记为型号的4位数字</h4>

    </alert-back>
  </div>
</template>

<script>
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
      arr : [
        {type:'user'},
        {type:''},
        {type:''}
      ]
    }
  },
  methods : {
    userBtn () {

    }
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
  }
}
</style>
