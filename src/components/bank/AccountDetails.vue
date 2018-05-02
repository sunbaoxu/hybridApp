<template>
  <div class="account-wrap" ref="wrap" :class="{'on':heightAsync}">
    <div class="account-main">
      <section class="box">
        <ul>
          <li>
            <h4>基本信息</h4>
          </li>
          <li>
            <span>账户状态</span>
            <span class="g-cen-y">{{obj.accountMesg}}</span>
          </li>
          <li>
            <span>账户类型</span>
            <span>{{obj.accountTypeMesg}}</span>
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
              <b @click="changeAccountPwd">修改</b>
              <b @click="resetAccountPwd">重置</b>
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
            <span v-if="obj.othInfos">{{obj.othInfos[0].othInfoMesg}}</span>
          </li>
          <li>
            <span>签约时间</span>
            <span v-if="obj.othInfos">{{obj.othInfos[1].othInfoMesg}}</span>
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
    <footer class="footer-text" ref="footerBox">
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
      obj :{},
      heightAsync :false
    }
  },
  methods : {
    ...mapActions(['setToastObj','setLodingAsync']),
    //初始化
    init () {
      //查询存管账户信息接口
      this.queryCustodyAccInfo();
      //判断设备高度
      this.getHeight();
    },
    //查询存管账户信息接口
    queryCustodyAccInfo () {
      let obj =  globalFn.concatObj({});
      //显示loading
      this.setLodingAsync(true);
      api.queryCustodyAccInfo(obj).then((res) =>{
        this.setLodingAsync(false);
        if(res.respCode =='000'){
          this.obj =res;
        } else{ 
          this.setToastObj({async:true,respMesg:res.respMesg});
        }
      },(error)=>{
        console.log(error);
      });
    },
    //修改
    changeAccountPwd () {
      let obj =  globalFn.concatObj({
        backUrl : `http://192.168.94.24:8080/bank/changeBank?loginPhone=${globalFn.concatObj({}).loginPhone}&token=${globalFn.concatObj({}).token}`
      });
      //显示loading
      this.setLodingAsync(true);
      api.changeAccountPwd(obj).then((res) =>{
        
        this.setLodingAsync(false);
        if(res.respCode =='000'){

          console.log(res)
          location.href = res.openUrl;
          // this.obj =res;
        } else{ 
          this.setToastObj({async:true,respMesg:res.respMesg});
        }
      },(error)=>{
        console.log(error);
      });
    },
    //重置
    resetAccountPwd () {
      let obj =  globalFn.concatObj({
        backUrl : `http://192.168.94.24:8080/bank/changeBank?loginPhone=${globalFn.concatObj({}).loginPhone}&token=${globalFn.concatObj({}).token}`
      });
      //显示loading
      this.setLodingAsync(true);
      api.resetAccountPwd(obj).then((res) =>{
        console.log(res)
        this.setLodingAsync(false);
        if(res.respCode =='000'){
          location.href = res.openUrl;
          // this.obj =res;
        } else{ 
          this.setToastObj({async:true,respMesg:res.respMesg});
        }
      },(error)=>{
        console.log(error);
      });
    },
    //判断设备高度
    getHeight () {
      let H = document.documentElement.clientHeight,
          h = this.$refs.wrap.clientHeight,
          fh= this.$refs.footerBox.scrollHeight ;

          if(h>=H-fh){
            this.heightAsync =true;
            this.$refs.wrap.style.paddingBottom=`${fh*2 + 40}px`;
          }
    }
  },
  mounted () {
    this.init();
  }
}
</script>
<style lang="scss" scoped>
.account-wrap{
  &.on{
    position: relative;
  }
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
        b{
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
    position: absolute;
    bottom: 0;
    left:0;
    width:100%;
    img{
      display: block;
      width: 100%;
    }
  }
}
</style>
