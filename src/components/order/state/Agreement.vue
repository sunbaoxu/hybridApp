<template>
  <div class="agreement-wrap" >
    <nav class="nav">
      <router-link v-for="(m,i) in arr" :key="i" :to="m.url" class="g-fen-cen-box g-border">
        <span>{{m.name}}</span>
        <i class="iconfont icon-jiao-rig"></i>
      </router-link>
    </nav>
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
      arr :[]
    }
  },
  methods : {
    ...mapActions(['setToastObj']),
    //下单前合同地址展示
    afContractLink () {
      let obj =  globalFn.concatObj({
          loanId : this.$route.query.id
        });

      api.afContractLink(obj).then((res) =>{
        if(res.respCode =='000'){
          this.arr = res.contractList;
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
  mounted () {
    //下单前合同地址展示
    this.afContractLink()
  }
}
</script>
<style lang="scss" scoped>
.agreement-wrap{
  .nav{
    background: $col-f;
    &>a{
      height: 100px;
      padding:0 30px;
      span{
        font-size: 24px;
        color:$col-3;
      }
      i{
        font-size: 34px;
        color:$col-9;
      }
    }
  }
}
</style>
