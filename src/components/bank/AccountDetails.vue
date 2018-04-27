<template>
  <div class="account-wrap" >
    <div class="account-main">
      <section class="box">
        <ul>
          <li>
            <h4>基本信息</h4>
          </li>
          <li>
            <span>账户状态</span>
            <span class="g-cen-y">{{obj.accountStatus}}<i class="iconfont icon-dui1"></i></span>
          </li>
          <li>
            <span>账户类型</span>
            <span>{{obj.accountType}}</span>
          </li>
          <li>
            <span>存管账户</span>
            <span>{{obj.accountNum}}</span>
          </li>
          <li>
            <span>客户号</span>
            <span>{{obj.customerNum}}</span>
          </li>
          <li>
            <span>交易密码</span>
            <span class="g-cen-y">
              <a :href="obj.updateUrl">修改</a>
              <a :href="obj.resetUrl">重置</a>
            </span>
          </li>
        </ul>
      </section>
      <section class="box">
        <ul>
          <li>
            <h4>客户信息</h4>
          </li>
          <li>
            <span>客户姓名</span>
            <span>{{obj.customerName}}</span>
          </li>
          <li>
            <span>身份证</span>
            <span>{{obj.idNum}}</span>
          </li>
          <li class="g-border">
            <span>手机号</span>
            <span>{{obj.loginPhone}}</span>
          </li>
        </ul>
        <ul>
          <li>
            <h4>其他信息</h4>
          </li>
          <li>
            <span>开户时间</span>
            <span>231123123？23423</span>
          </li>
          <li>
            <span>签约时间</span>
            <span>dsfaa56456</span>
          </li>
          <!-- <li>
            <span>是否授权放款</span>
            <span>dsfaa56456</span>
          </li>
          <li>
            <span>授权放款有效期</span>
            <span>dsfaa56456</span>
          </li>
          <li>
            <span>是否授权还款</span>
            <span>dsfaa56456</span>
          </li>
          <li>
            <span>授权还款有效期</span>
            <span>dsfaa56456</span>
          </li>
          <li>
            <span>是否授权缴费</span>
            <span>dsfaa56456</span>
          </li>
          <li>
            <span>授权缴费有效期</span>
            <span>dsfaa56456</span>
          </li>
          <li>
            <span>账户总金额</span>
            <span>dsfaa56456</span>
          </li>
          <li>
            <span>可用额度</span>
            <span>dsfaa56456</span>
          </li>
          <li>
            <span>冻结额度</span>
            <span>dsfaa56456</span>
          </li> -->
        </ul>
      </section>
    </div>
    <footer class="footer-text">
      <img src="/static/images/bank/footer-huaxia.png">
    </footer>
  </div>
</template>

<script>
import api  from '@/api/api';
import {mapActions} from 'vuex';
import globalFn from '@/assets/javascripts/globalFn';
export default {
  name: 'bank',
  data () {
    return {
      obj :{}
    }
  },
  methods : {
    ...mapActions(['setToastObj','setLodingAsync']),
    //查询存管账户信息接口
    queryCustodyAccInfo () {
      let obj =  globalFn.concatObj({});
      //显示loading
      this.setLodingAsync(true);
      api.queryCustodyAccInfo(obj).then((res) =>{
        console.log(res)
        this.setLodingAsync(false);
        if(res.respCode =='000'){
          this.obj =res;
        } else{ 
          this.setToastObj({async:true,respMesg:res.respMesg});
        }
      },(error)=>{
        console.log(error);
      });
    }

  },
  mounted () {
    //查询存管账户信息接口
    this.queryCustodyAccInfo();
  }
}
</script>
<style lang="scss" scoped>
.account-wrap{
  position: relative;
  min-height: 1136px;
  &>.account-main{
    .box{
      background: $col-f;
      padding:0 30px 20px;
      &:first-child{
        margin-bottom: 20px;
      }
      ul>li{
        height: 60px;
        font-size: 26px;
        color:$col-9;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h4{
          padding-top:10px;
          line-height: 60px;
          color:$col-3;
        }
        i{
          font-size: 44px;
          color:$col-blue;
          margin-left:10px;
        }
        a{
          border:1px solid $col-blue;
          height: 44px;
          width: 110px;
          line-height: 44px;
          text-align: center;
          color:$col-blue;
          font-weight: normal;
          margin-left: 20px;
          border-radius: 4px;
        }
      }
    }
  }
  .footer-text{
    padding:40px 30px;
    box-sizing: border-box;
    img{
      display: block;
      width: 100%;
    }
  }
}
</style>
