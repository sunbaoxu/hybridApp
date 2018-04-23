<template>
  <div class="bank-box" @click="routerFn">
    <dl class="g-cen-y">
      <dt class="g-back" style="background-image:url(/static/images/order/fuwu-icon.png)"></dt>
      <dd>
        <h4 class="g-fen-cen">
          <span>建设银行</span>
          <span class="g-back user" @click.stop="userBtn" v-if="page == 'list' && obj.type=='user'"></span>
          <span class="g-back no"   @click.stop="userBtn" v-else-if="page == 'list' && obj.type=='no'">设为主卡</span>
          <span class="g-back user" v-else-if="obj.type=='user'"></span>
        </h4>
        <p>136****0678</p>
      </dd>
    </dl>
    <div class="bank-num g-cen-y g-border">
      <span>3124</span>
      <span>4242</span>
      <span class="g-fen-cen">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </span>
      <span>4242</span>
    </div>

    <!-- 页脚底部 - 认证状态 -->
    <p class="text g-cen-y yes" v-if="obj.type=='user'">
      <i></i>
      <router-link to="/bank/accountDetails" v-if="page!=''">华夏银行存管保障中</router-link>
      <span v-else>华夏银行存管保障中</span>
    </p>
    <p class="text g-cen-y etc" v-else-if="obj.type=='etc'">
      <i></i>
      <span>银行存管认证中</span>
    </p>
    <p class="text g-cen-y no" v-else-if="obj.type=='no'">
      <i></i>
      <span>银行存管尚未认证</span>
    </p>
  </div>
</template>

<script>
export default {
  props:{
    page : {
      type:String,
      default : ''
    },
    obj : {
      type:Object,
      default:function(){return {}}
    }
  },
  methods : {
    //跳转我的主卡页
    routerFn () {
      if(this.page == 'list' && this.obj.type=='user'){
        this.$router.push('/bank/userBank');
      }
    },
    //点击我的主卡按钮
    userBtn () {
      this.$emit('userBtn');
    }
  }
}
</script>
<style lang="scss" scoped>
.bank-box{
  background:$col-f;
  padding:30px 0 20px 30px;
  border-radius: 12px;
  margin-bottom: 20px;
  dl{
    height: 66px;
    dt{
      height: 54px;
      width: 54px;
      margin-right: 20px;
    }
    dd{
      width:0;
      flex:1;
      h4{
        padding:0 30px 4px 0;
        span{
          &:first-child{
            font-size: 28px;
          }
          &.user{
            background-image: url('/static/images/bank/user-bank.png');
            width:96px;
            height: 34px;
          }
          &.no{
            background:$col-blue;
            color:$col-f;
            font-size: 26px;
            border-radius: 30px;
            width:128px;
            height: 48px;
            line-height: 48px;
            text-align: center;
          }
        }
      }
      p{
        font-size: 24px;
        color:$col-9;
      }
    }
  }
  .bank-num{
    height: 118px;
    font-size: 40px;
    color:$col-6;
    font-weight: bold;
    span{
      margin-right: 40px;
      width:90px;
      i{
        width:14px;
        height: 14px;
        background: $col-9;
        border-radius: 100%;
      }
    }
  }
  &>p{
    font-size: 26px;
    padding-top:20px;
    i{
      height: 30px;;
      width: 26px;
      margin:0 20px;
    }
    a,span{
      text-decoration: underline;
    }
    &.yes{
      i{
        background-image: url('/static/images/bank/bank-yes.png');
      }
        a,span{
        color:$col-green;
      }
    }
    &.no{
      i{
        background-image: url('/static/images/bank/bank-no.png');
      }
        a,span{
        color:$col-red;
      }
    }
    &.etc{
      i{
        background-image: url('/static/images/bank/bank-etc.png');
      }
        a,span{
        color:$col-yel;
      }
    }
  }
}
</style>
