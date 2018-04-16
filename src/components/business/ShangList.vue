<template>
  <div class="list-wrap">
    <!-- 引入商家 头部 -->
    <header-detail :obj="shangObj"></header-detail>
    <main class="main">
      <ul>
        <li class="g-col-cen-y g-border" v-for="(m,i) in shangArr" :key="i">
          <router-link :to="{path:'/shangDetail',query:{commodityId:m.id,orgId:shangObj.id,cName:m.cName}}">
            <h4 class="g-text-ove1">{{m.cName}}</h4>
            <div>
              <p>可选<span v-for="(item,ind) in m.nperList" :key="ind">{{ind!=m.nperList.length-1?item+'/':item}}</span> 期</p>
              <p class="g-cen-y">
                最高可借
                <span>￥{{m.money}}</span>
                <i class="iconfont icon-jiao-rig"></i>
              </p>
            </div>
          </router-link>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import api  from '@/api/api';
import {mapGetters,mapActions} from 'vuex';
import globalFn from '@/assets/javascripts/globalFn';
import headerDetail from "$business/common/HeaderDetail";
export default {
  name: 'lists',
  components : {
    headerDetail
  },
  //获取商家信息
  computed: {...mapGetters(['businessObj','setToastObj'])},
  data () {
    return {
      shangObj : {},
      shangArr :[]
    }
  },
  methods : {
    ...mapActions(['setBusinessObj']),
    //1.根据机构推荐码查询商户信息及商品各个方案
    queryBusinessInfoAndProgram () {
      let obj =  globalFn.concatObj({
        QRcode :this.$route.query.recoCode
      });
      
      api.queryBusinessInfoAndProgram(obj).then((res) =>{
        this.shangObj = res;
        this.shangArr = res.lCommodities;
        //存储商家基本信息
        this.setBusinessObj(this.shangObj);
        localStorage.setItem('setBusinessObj',JSON.stringify(this.shangObj))

      },(error)=>{
        this.setToastObj({async:true,respMesg:res.respMesg});
      });
    }
  },
  mounted () {
    this.queryBusinessInfoAndProgram();
  }
}
</script>
<style lang="scss" scoped>
.list-wrap{
  padding-top:20px;
  .header{
    background: $col-f;
    padding:30px;
    box-sizing: border-box;
    margin-bottom: 20px;
    dl{
      display: flex;
      width:100%;
      height: 100px;
      dt{
        width: 100px;
        height: 100px;
        border-radius: 100%;
        margin-right: 22px;
      }
      dd{
        width:0;
        flex:1;
        h4{
          font-size: 26px;
          color:$col-blue;
        }
        p{
          font-size: 24px;
          color:$col-9;
        }
      }
    }
    &>.text{
      padding: 16px 26px;
      line-height: 46px;
      font-size: 24px;
      color:$col-6;
    }
    .more{
      height: 28px;
      font-size: 20px;
      color:$col-9;
      i{
        font-size: 30px;
        margin-right:8px;
      }
    }
  }
  .main{
    ul{
      background: $col-f;
      li{
        height: 128px;
        padding:0 30px;
        &>a{
          display: block;
          color:$col-3;
        }
        &:last-child::after{
          height: 0;
        }
        h4{
          font-size: 24px;
        }
        div{
          display: flex;
          justify-content: space-between;
          p{
            font-size: 22px;
            color:$col-9;
            line-height: 46px;
            &:last-child{
              span{
                color:$col-blue;
                font-size: 24px;
                margin:0 10px;
              }
            }
            i{
              font-size: 30px;
            }
          }
        }
      }
    }
  }
}
</style>
