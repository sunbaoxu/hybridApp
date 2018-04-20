<template>
  <div class="bank-box" @click="routerFn">
    <dl class="g-cen-y">
      <dt class="g-back" style="background-image:url(/static/images/order/fuwu-icon.png)"></dt>
      <dd>
        <h4 class="g-fen-cen">
          <span>建设银行</span>
          <span class="g-back"></span>
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
    <p class="text g-cen-y yes">
      <i></i>
      <router-link to="/bank/accountDetails" v-if="obj.type=='user' && page!='list'">华夏银行存管保障中</router-link>
      <span v-else>华夏银行存管保障中</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'bankBox',
  props:{
    page : {
      type:String,
      default : 'list'
    },
    obj : {
      type:Object,
      default:function(){return {}}
    }
  },
  methods : {
    routerFn () {
      if(this.page == 'list' && this.obj.type=='user'){
        this.$router.push('/');
      }
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
          &:last-child{
            background-image: url('/static/images/bank/user-bank.png');
            width:96px;
            height: 34px;
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
