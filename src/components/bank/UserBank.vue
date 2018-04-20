<template>
  <div class="user-box" >
    <section>
      <bank-box class="list-box" page="router"  :obj="{type:'user'}"></bank-box>
    </section>
    <!-- 更换主卡 -->
    <section class="add-bank g-fen-cen-box" @click="ChangeBankFn">
      <span class="g-cen-y">
        <i class="iconfont icon-jia"></i>更换主卡
      </span>
      <span><i class="iconfont icon-jiao-rig"></i></span>
    </section>
    <!-- 提示文字 -->
    <section class="text-box">
      <h4>温馨提示</h4>
      <p>请斯大林副科级十大发多少大厦法定盛大
        发售的撒发生佛挡杀佛第三方第三方第三方大厦法定舒服点是否大师傅是否大师傅第三方</p>
    </section>
  </div>
</template>

<script>
import bankBox from '$bank/common/bankBox.vue';
export default {
  components:{
    bankBox
  },
  methods : {
    ChangeBankFn () {
      this.$router.push('/bank/changeBank');
    }
  }
}
</script>
<style lang="scss" scoped>
.user-box{
  padding-top:20px;
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
  .text-box{
    padding:26px 50px;
    color:$col-9;
    line-height: 44px;
    font-size: 26px;
    h4{
      color:$col-6;
    }
  }
}
</style>
