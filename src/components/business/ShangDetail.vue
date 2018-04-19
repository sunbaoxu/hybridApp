<template>
  <div class="detail-wrap">
    <!-- 引入头部 -->
    <header-detail :obj="businessObj"></header-detail>
    <section class="shang-box">
      <ul>
        <li class="g-border g-fen-cen">
          <span class="g-cen-y"><i class="icon shang g-back"></i>商品名称</span>
          <span>{{$route.query.cName}}</span>
        </li>
        <li class="g-fen-cen">
          <span class="g-cen-y"><i class="icon fen g-back"></i>分期方案</span>
          <span @click="planAsync = true">{{planText!=''?planText:'点击选择分期方案'}}<i class="iconfont icon-jiao-rig"></i></span>
        </li>
      </ul>
       <!-- 个人还款 模块 -->
      <div class="text-box g-fen-cen-box g-border1" v-if="planObj.money">
        <p>
          <span>个人还款期数：</span>
        </p>
        <p class="g-cen-y">
          <span class="line" v-if="(planObj.lowRate<=0 && planObj.highRate<=0)">{{planObj.highNper}}期</span>


          <span class="money" v-if="(planObj.lowRate>0 && planObj.highRate>0)">{{planObj.userNper}}期</span>
          <span class="money" v-else-if="planObj.lowRate>0">{{planObj.lowNper}}期</span>
          <span class="money" v-else-if="planObj.highRate>0">{{planObj.highNper}}期</span>
          <span class="money" v-else>0期</span>

          <span class="iconfont icon-tixing" @click="fanganAsync = true"></span>
        </p>
      </div>
    </section>
    <!-- 个人还款 模块 -->
    <section class="money-box" v-if="planObj.money">
      <h4 class="g-fen-cen-box">
        <span>分期金额(元)</span>
        <span class="g-cen-y">{{moneyValNum}} <i class="iconfont icon-xiugai" @click="openMoney"></i></span>
      </h4>
      <!-- 引入滑块 -->
      <div class="slider-box g-border">
        <el-slider v-model="moneyValNum" :show-tooltip="false" :max="planObj.money" :min="300"></el-slider>
        <p class="g-fen-cen"><span>3000</span><span>{{planObj.money}}</span></p>
      </div>
    </section>
    <!-- 下一步 -->
    <section class="btn-box">
      <button @click="submitFn" :disabled="planText==''" :class="{'on':planText!=''}">下一步</button>
    </section>
    <!-- 分期方案 组件 -->
    <fenqi-plan v-if="planAsync" @closePlan="closePlan" :planObj="planObj" :planArr="planArr"></fenqi-plan>

    <!-- 引入方案弹框 -->
    <alert-back class="fangan-alert-back" @closeAlertFn="closeFangan" v-if="fanganAsync">
      <h4 class="title">详情</h4>
      <ul>
        <li class="g-fen-cen"><span>机构代偿期</span><span>{{planObj.orgNper}}期</span></li>
        <li class="g-fen-cen"><span>低额还款期</span><span>{{planObj.lowNper}}期</span></li>
        <li class="g-fen-cen"><span>高额还款期</span><span>{{planObj.highNper}}期</span></li>
      </ul>
      <div class="g-fen-cen g-border1">
        <p>个人还款期</p>
        <p>
          <span class="line" v-if="(planObj.lowRate<=0 && planObj.highRate<=0)">{{planObj.highNper}}期</span>

          <span v-if="(planObj.lowRate>0 && planObj.highRate>0)">{{planObj.userNper}}期</span>
          <span v-else-if="planObj.lowRate>0">{{planObj.lowNper}}期</span>
          <span v-else-if="planObj.highRate>0">{{planObj.highNper}}期</span>
          <span v-else>0期</span>
        </p>
      </div>
    </alert-back>
    <!-- 引入金额 弹唱 -->
    <alert-back v-if="moneyAsync" class="money-alert-back" @closeAlertFn="closeMoney">
      <h4 class="title">请输入金额</h4>

      <p class="tishi" v-if="moneyValStr ==''">请输入一个整数</p>
      <p class="tishi" v-else-if="Number(moneyValStr) <3000 || Number(moneyValStr)> planObj.money">请输入金额范围：3000~{{planObj.money}}</p> 
      <p v-else class="tishi"></p>


      <p class="text">
        <input type="tel" maxlength="8" v-model="moneyValStr">
        <i 
          class="iconfont icon-guanbi" 
          :class="{'on':moneyValStr!=''}"
          @click="moneyValStr = ''"
        ></i>
      </p>
      <div class="btns-box">
        <button @click="closeMoney">取消</button>
        <button 
          @click="yesMoney" 
          :disabled="moneyValStr =='' || Number(moneyValStr) <3000 || Number(moneyValStr)> planObj.money"
          :class="{'none':moneyValStr =='' || Number(moneyValStr) <3000 || Number(moneyValStr)> planObj.money}"
        >确定</button>
      </div>
    </alert-back>
  </div>
</template>

<script>
import api  from '@/api/api';
import {mapGetters,mapActions} from 'vuex';
import globalFn from '@/assets/javascripts/globalFn';
import headerDetail from "$business/common/HeaderDetail";
import fenqiPlan from "$business/common/FenqiPlan";
import alertBack from '@/common/alert/alertBack.vue';
export default {
  name: 'detailss',
  //获取商家信息
  computed: {...mapGetters(['businessObj'])},
  components : {
    headerDetail,
    fenqiPlan,
    alertBack
  },
  data () {
    return {
      moneyValStr :'',
      moneyValNum : 0,
      planAsync : false,
      planText  : '',
      planObj   : {},
      planArr   : [],//方案数据
      fanganAsync : false,
      moneyAsync  : false
    }
  },
  methods : {
    ...mapActions(['setToastObj','setLodingAsync']),
    //关闭方案弹窗
    closePlan (async,obj) {
      this.planAsync = false;
      if(async){
        this.planText = obj.planName;
        this.planObj  = obj;
        this.moneyValNum = obj.money;
        this.moneyValStr = String(this.moneyValNum);
      }
    },
    //点击下一步
    submitFn () {
      let obj =  globalFn.concatObj({
        loanMoney    :this.moneyValStr,
        businessType :this.$route.query.businessType,
        bpcId        :this.planObj.id
      });
      this.loanCheckInstall(obj);
    },
    //根据方案查低高额还款期
    queriesProgramListNew () {
      let obj =  globalFn.concatObj({
        commodityId :this.$route.query.commodityId,
        orgId       :this.$route.query.orgId
      });
      api.queriesProgramListNew(obj).then((res) =>{
        if(res.respCode == '000'){
          this.planArr = res.plans;
          //隐藏loading
          this.setLodingAsync(false);
        } else{
          this.setLodingAsync(false);
          this.setToastObj({async:true,respMesg:res.respMesg});
        }
      },(error)=>{
        console.log(error)
      });
    },
    //学贷检查是否可以下单
    loanCheckInstall (obj) {
      //显示loading
      this.setLodingAsync(true);
      api.loanCheckInstall(obj).then((res) =>{
        if(res.respCode == '000'){
          let fenNper ='';
          if(this.planObj.lowRate>0 && this.planObj.highRate>0){
            fenNper = this.planObj.userNper
          } else if(this.planObj.lowRate>0){
            fenNper = this.planObj.lowNper
          }else if(this.planObj.highRate>0){
            fenNper = this.planObj.highNper
          } else{
            fenNper =0;
          }

          this.$router.push({path:'/h5-app/order/orderConfirm',query:{
            "bpcId"       :this.planObj.id,
            "businessType":this.$route.query.businessType,
            "loanMoney"   :this.moneyValStr,
            "nper"     : this.planObj.userNper,
            "planText" : this.planText,
            "name"     : this.$route.query.cName,
            "money"    : this.moneyValNum,
            userNper   : this.planObj.userNper ,//个人还款期数
            fenNper    ,
            orgImgPath : this.businessObj.orgImgPath
          }});
        } else{
          //隐藏loading
          this.setLodingAsync(false);
          this.setToastObj({async:true,respMesg:res.respMesg});
        }
      },(error)=>{
        console.log(error)
      });
    },
    //关闭方案弹窗
    closeFangan () {
      this.fanganAsync = false;
    },
    //关闭金额弹窗
    closeMoney () {
      this.moneyAsync = false;
      this.moneyValStr = String(this.moneyValNum);
    },
    //确定金额弹窗
    yesMoney  () {
      this.moneyAsync = false;
      this.moneyValNum = Number(this.moneyValStr);
    },
    //打开金额弹窗
    openMoney () {
      this.moneyAsync = true;
      this.moneyValStr = String(this.moneyValNum);
    }
  },
  mounted () {
    //根据方案查低高额还款期
    this.queriesProgramListNew();
  }
}
</script>
<style lang="scss" scoped>
.detail-wrap{
  padding-top:20px;
  .shang-box{
    background: $col-f;
    margin-bottom: 20px;
    ul{
      li{
        height: 108px;
        padding:0 30px;
        .icon{
          width: 40px;
          height: 40px;
          margin-right: 10px;
          &.shang{
            background-image: url('/static/images/shang.png');
          }
          &.fen{
            background-image: url('/static/images/fangan-icon.png');
          }
        }
        span{
          color:$col-3;
          &:first-child{
            font-size: 32px;
          }
          &:last-child{
            font-size: 28px;
          }
        }
        &:last-child{
          span{
            &:last-child{
              color:$col-9;
              i{
                font-size: 30px;
              }
            }
          }
        }
      }
    }
    &>.text-box{
      height: 112px;
      padding:0 30px;
      p{
        font-size: 30px;
        &:first-child{
          color:$col-3;
        }
        &:last-child{
          span{
            &.line{
              font-size: 28px;
              text-decoration: line-through;
              color:$col-9;
            }
            &.money{
              color:$col-ori;
              padding:0 14px;
            }
            &:last-child{
              font-size: 40px;
              color:$col-9;
            }
          }
        }
      }
    }
  }
  .money-box{
    background: $col-f;
    &>h4{
      height: 108px;
      padding:0 30px;
      span{
        &:first-child{
          font-size: 32px;
          color:$col-3;
        }
        &:last-child{
          color:$col-6;
          font-size: 28px;
          i{
            font-size: 40px;
            margin-left: 10px;
            color:$col-blue;
          }
        }
      }
    }
    &>.slider-box{
      padding-bottom: 30px;
      &>p{
        font-size: 30px;
        color:$col-9;
      }
    }
  }
  &>.btn-box{
    padding:162px 30px 40px;
    box-sizing: border-box;
    button{
      color:$col-f;
      font-size: 34px;
      border-radius: 50px;
      height: 100px;
      border:none;
      width: 100%;
      background: $col-c;
      &.on{
        background: $col-blue;
      }
    }
  }
  .fangan-alert-back{
    padding:0 60px;
    .title{
      line-height: 100px;
      color:$col-blue;
      text-align: center;
      font-size: 32px;
    }
    ul{
      li{
        height: 60px;
        padding:0 30px;
        font-size: 26px;
        span{
          &:first-child{
            color:$col-9;
          }
          &:last-child{
            color:$col-3;
            &.line{
              text-decoration: line-through;
              color:$col-9;
            }
          }
        }
      }
    }
    div{
      height: 100px;
      padding:0 30px;
      p{
        &:first-child{
          font-size: 30px;
          color:$col-3;
        }
        &:last-child{
          font-size: 28px;
          span{
            &.line{
              color:$col-9;
              text-decoration: line-through;
            }
            &:last-child{
              color: $col-red;
              margin-left: 10px;
            }
          }
        }
      }
    }
  }
  .money-alert-back{
    padding:0 60px;
    .title{
      line-height: 100px;
      color:$col-blue;
      text-align: center;
      font-size: 32px;
    }
    .tishi{
      height: 40px;
      line-height: 40px;
      text-align: center;
      color:$col-red;
      font-size: 20px;
    }
    .text{
      padding:0 30px;
      margin-bottom: 30px;
      position: relative;
      input{
        height: 80px;
        border:none;
        border-bottom: 2px solid $col-blue;
        width: 100%;
        font-size: 30px;
        padding-right: 100px;
        box-sizing: border-box;
      }
      i{
        position: absolute;
        right:40px;
        font-size: 36px;
        top:30px;
        color:$col-6;
        display: none;
        &.on{
          display: block;
        }
      }
    }
    .btns-box{
      height: 80px;
      display: flex;
      width:100%;
      border-radius: 0 0 8px 8px;
      overflow: hidden;
      border-top:1px solid $col-blue;
      button{
        width:0;
        flex:1;
        font-size: 30px;
        border:none;
        &:first-child{
          color:$col-blue;
          background: $col-f;
        }
        &:last-child{
          background:$col-blue;
          color:$col-f;
          &.none{
            opacity: .6;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.slider-box{
  padding:0 30px;
  .el-slider__runway{
    height: 10px;
    .el-slider__bar{
      height: 100%;
    }
    .el-slider__button-wrapper{
      width:26px;
      height: 26px;
      top:-10px;
      .el-slider__button{
        height:34px;
        width:34px;
        background:url('/static/images/slide-icon.png') no-repeat center center;
        background-size:100%;
        border:none;
      }
    }
  }
}
</style>
