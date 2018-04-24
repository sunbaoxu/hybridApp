<template>
  <div class="user-box" >
    <section>
      <bank-box class="list-box" page="router"  :obj="obj"></bank-box>
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
import api  from '@/api/api';
import {mapActions} from 'vuex';
import globalFn from '@/assets/javascripts/globalFn';
import bankBox from '$bank/common/bankBox.vue';
export default {
  components:{
    bankBox
  },
  data () {
    return {
      obj :{}
    }
  },
  methods : {
    ...mapActions(['setToastObj','setLodingAsync']),
    //查询银行卡
    queryUserBankInfo () {
      let obj =  globalFn.concatObj({});
      //显示loading
      this.setLodingAsync(true);
      api.queryUserBankInfo(obj).then((res) =>{
        console.log(res)
        this.setLodingAsync(false);
        if(res.respCode =='000'){
          // this.obj = res;
            this.obj = {
              cardSign :'Y',//是否是主卡
              cardType : '1',
              cardNo   : '11112222****3265',
              bank :'华夏银行',
              bankName : '华夏银行',
              bindStatus :'B01',
              custodyStatus : 'P02',
              bankIcon :'/static/images/order/fuwu-icon.png',
            };

            this.obj['arr'] = [this.obj.cardNo.substring(0,4),this.obj.cardNo.substring(4,8),this.obj.cardNo.substring(8,12),this.obj.cardNo.substring(12,16)];
        } else{ 
          this.setToastObj({async:true,respMesg:res.respMesg});
        }
      },(error)=>{
        console.log(error);
      });
    },

    //跳转 银行卡列表页面
    ChangeBankFn () {
      this.$router.push('/bank/changeBank');
    }
  },
  mounted () {
    this.queryUserBankInfo();
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
