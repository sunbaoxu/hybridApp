<template>
  <div class="cont-box g-border">
    <dl>
      <dt class="g-fen-cen-box g-border">
        <!-- 学费 -->
        <span class="g-cen-y title" v-if="obj.text == 'xuefei'">
          <i style="background:url(/static/images/order/ios-icon.png)"></i>
          {{obj.name}}
        </span>
        <!-- 服务费 -->
        <div class="fuwu title g-cen-y" v-else>
          <i style="background:url(/static/images/order/ios-icon.png)"></i>
          <div>
            <h6>第三方服务费用套餐</h6>
            <p>网贷信息中介服务费   ￥{{obj.mediservFee}}</p>
            <p>保障计划专款   ￥{{obj.securityFee}}</p>
          </div>
        </div>
        <!-- 学费-服务费不同价格 -->
        <span class="money" v-if="obj.text == 'xuefei'">￥{{obj.money}}</span>
        <span class="money" v-else>￥{{obj.servConsumFee}}</span>
      </dt>
      <dd>
        <p class="g-col-cen-cen-box">
          <span>分期方案</span>
          <span>{{obj.planText}} 期</span>
        </p>
        <p class="g-col-cen-cen-box">
          <span>分期期数</span>
          <span> {{obj.fenNper}} 期</span>
        </p>
        <p class="g-col-cen-cen-box">
          <span>个人还款期数</span>
          <span>{{obj.userNper}}期</span>
        </p>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'orderXinxi',
  props : {
    obj :{
      type : Object,
      default :function(){return {}}
    }
  },
  data () {
    return {
    }
  },
  methods : {
    
  }
}
</script>
<style lang="scss" scoped>
.cont-box{
  padding:0 20px;
  box-sizing: border-box;
  dl{
    dt{
      height: 136px;
      &.fuwu-box{
        height: 154px;
      }
      .money{
        font-size: 36px;
        color:$col-red;
      }
      .title{
        font-size: 32px;
        color:$col-0;
        i{
          width:65px;
          height: 65px;
          margin-right: 16px;
        }
      }
      .fuwu{
        div{
          h6{
            font-size: 28px;
            color:$col-3;
            padding-bottom: 14px;
          }
          p{
            font-size: 24px;
            color:$col-9;
          }
        }
      }
    }
    dd{
      padding:30px 0;
      box-sizing: border-box;
      display: flex;
      p{
        width:0;
        flex:1;
        height: 80px;
        border-right:1px solid $col-c;
        &:last-child{
          border-right: 0;
        }
        span{
          &:first-child{
            font-size: 24px;
            color:$col-9;
          }
          &:last-child{
            font-size: 32px;
            color:$col-6;
          }
        }
      }
    }
  }
}
</style>
