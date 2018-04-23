<template>
  <div class="wrap">
    <header class="header g-fen-cen-box">
      <div class="g-cen-y">
        <i class="g-back" style="background-image:url(/static/images/shenfenzheng.png)"></i>
        <span>手持身份证照片</span>
      </div>
      <router-link to="/uploadeImg" class="a">{{UploadImg ==''?'去上传':'上传成功'}}</router-link>
    </header>
    <main class="main">
      <!-- 学费 -->
      <section class="section-box">
        <p class="top-back"></p>
        <h4 class="title-box g-fen-cen-box g-border">
          <span>学费分期订单信息</span>
          <span class="g-cen-y" @click="openDetailFn('orDetail')">
            <i class="iconfont icon-xiangqing"></i>详情
          </span>
        </h4>
        <!-- 学费分期信息订单 -->
        <order-xinxi :obj="orDetail"></order-xinxi>
        <div class="xieyi-box g-fen-cen-box">
          <span @click="xueXieyiFn">
            <i 
              class="iconfont" 
              :class="(!xueAsync?'icon-dui':'icon-dui1 on')"
            ></i>
          </span>
          <span class="g-fen-cen" @click="openAsideFn('asideXueObj')">
            {{orDetail.contractMsg}}
            <i class="iconfont icon-jiao-rig"></i>
          </span>
        </div>
        <p class="bot-back"></p>
      </section>
      <!-- 服务费 -->
      <section class="section-box on">
        <p class="top-back"></p>
        <h4 class="tixing-box g-fen-cen-box g-border">
          <span class="g-cen-y">
            <i class="iconfont icon-xiangqing"></i>
            温馨提醒
            </span>
          <p>以下为第三方机构专业的<span>服务套餐</span>，非玖富平台提供，会员客户选择并认可并自愿采购支付以下第三方服务消费</p>
        </h4>
        <h4 class="title-box g-fen-cen-box g-border">
          <span>服务订单信息</span>
          <span class="g-cen-y" @click="openDetailFn('feeDetail')"><i class="iconfont icon-xiangqing"></i>详情</span>
        </h4>
        <!-- 服务信息订单 -->
        <order-xinxi :obj="feeDetail"></order-xinxi>
        <div class="xieyi-box g-fen-cen-box">
          <span @click="fuwuFn('fuwuAsync1')">
            <i 
              class="iconfont"
              :class="(!fuwuAsync1?'icon-dui':'icon-dui1 on')"
            ></i>
          </span>
          <span class="g-fen-cen" @click="openAsideFn('asideFuObj')">
            {{feeDetail.contractMsg_1}}
            <i class="iconfont icon-jiao-rig"></i>
          </span>
        </div>
        <div class="xieyi-box g-fen-cen-box">
          <span @click="fuwuFn('fuwuAsync2')">
            <i 
              class="iconfont"
              :class="(!fuwuAsync2?'icon-dui':'icon-dui1 on')"
            ></i>
          </span>
          <span class="g-fen-cen" @click="openAsideFn('asideFuObj')">
            {{feeDetail.contractMsg_2}}
            <i class="iconfont icon-jiao-rig"></i>
          </span>
        </div>
        <p class="bot-back"></p>
      </section>
    </main>
    <!-- 借款人信息 -->
    <section class="list-box" v-if="loancunAsync=='true'">
      <ul>
        <li class="g-fen-cen-box g-border">
          <span>借款人信息</span>
          <i class="iconfont icon-wenhao"></i>
        </li>
        <li class="g-fen-cen-box g-border">
          <span>主借款人</span>
          <div>
            <p>
              <span>{{inentityObj.relationName}}</span>
              <span>{{inentityObj.relationIdCard1}}</span>
            </p>
            <i class="iconfont icon-jiao-rig"></i>
          </div>
        </li>
        <li class="g-fen-cen-box">
          <span>共同借款人</span>
          <div>
            <p>
              <span>{{inentityObj.realName}}</span>
              <span>{{inentityObj.idNum1}}</span>
            </p>
            <i class="iconfont icon-jiao-rig"></i>
          </div>
        </li>
      </ul>
    </section>
    <!-- 文字声明 -->
    <section class="text-box">
      <p>以上费用均由<span>借款人自行承当</span></p>
    </section>
    <!-- 订单页脚 -->
    <footer class="footer">
      <section>网贷信息中介服务由玖富惠普提供</section>
      <section>
        <div class="money g-col-cen-y">
          <p>
            <span>订单总额</span>
            <span>￥{{pageObj.totalMoney}}</span>
          </p>
          <p>含学费 ￥{{$route.query.money}}+服务费 ￥{{feeDetail.servConsumFee}}</p>
        </div>
        <!-- <div class="btn" @click="clickBtnFn" >提交订单</div> -->
        <!-- 订单协议全部选中  允许点击 -->
        <button 
          class="btn" 
          @click="clickBtnFn" 
          :disabled ="!fuwuAsync1 && !fuwuAsync2 && !xueAsync && UploadImg==''" 
          :class="{'on':fuwuAsync1 && fuwuAsync2 && xueAsync && UploadImg!=''}"
        >提交订单</button>
      </section>
    </footer>
    <!-- 协议 -侧边栏 -->
    <xieyi-aside v-if="asideAsync" @closeAsideFn="closeAsideFn" :arr="asideArr" :name ="asideName" :async="asideAll" ref="xieyi"></xieyi-aside>

    <!-- 弹框组件 - 订单 -->
    <alert-back class="order-alert-back" @closeAlertFn="closeAlertFn" v-if="alertAsync">
      <h4 class="title">提示</h4>
      <div class="cont g-border">
        <ul>
          <li class="g-fen-cen"><span>教育分期</span><span>￥{{orDetail.money}} | {{orDetail.userNper}}期</span></li>
          <li class="g-fen-cen"><span>三方服务费</span><span>￥{{feeDetail.servConsumFee}} | {{orDetail.userNper}}期</span></li>
        </ul>
      </div>
      <div class="btn-boxs" >
        <button @click="closeAlertFn">我再看看</button>
        <button @click="submitFn">立即提交</button>
      </div>
    </alert-back>

    <!-- 弹框组件 - 身份 -->
    <alert-back class="identity-alert-back"  v-if="inentityAsync && loancunAsync==''">
      <h4 class="title g-border">请选择您当前的职业</h4>
      <main class="identity-main">
        <ul class="g-fen-cen">
          <li class="g-col-cen-cen-box" @click="identityFn('在校学生')" :class="{'on':identityText =='在校学生'}">
            <i class="jiao"></i>
            <i class="g-back icon" :style="{'background-image':'url(/static/images/identity/'+(identityText=='在校学生' ?'student-full':'student-fail')+'.png)'}"></i>
            <span>我是在校学生</span>
          </li>
          <li class="g-col-cen-cen-box" @click="identityFn('社会人士')" :class="{'on':identityText == '社会人士'}">
            <i class="jiao"></i>
            <i class="g-back icon" :style="{'background-image':'url(/static/images/identity/'+(identityText=='社会人士' ?'social-full':'social-fail')+'.png)'}"></i>
            <span>我是社会人士</span>
          </li>
        </ul>
        <!-- 根据不同角色，显示不同提醒 -->
        <p class="text" v-if="identityText =='在校学生'">感谢您选择蜡笔分期，根据国家监管要求，禁止向<span>全日制在校学生</span>提供分期服务。</p>
        <p class="text" v-else>请您务必按照真实情况选择，您的所有操作过程都将被系统记录，并与您最终签署的相关协议具有同等的法律效力。</p>

        <p class="btn">
          <button onclick="javascript:history.back(-1);" v-if="identityText =='在校学生'">我知道了</button>
          <button @click="shehuiFn" v-else>继续申请</button>
        </p>
        <p class="tongyi" :class="{'on':identityText =='在校学生'}">
          <router-link 
            :to="{path:'/LoanBaocun',
              query:{
                relationIdCard:this.inentityObj.relationIdCard,
                relationName:this.inentityObj.relationName,
                relationPhone:this.inentityObj.relationPhone,
                relationship :this.inentityObj.relationship
              }
            }">我的父亲/母亲同意作为主借款人申请  》</router-link> 
        </p>
      </main>
    </alert-back>
  </div>
</template>

<script>
import api  from '@/api/api';
import {mapActions,mapGetters} from 'vuex';
import globalFn from '@/assets/javascripts/globalFn';
import xieyiAside from '$order/common/Aside.vue';
import orderXinxi from '$order/common/orderXinxi.vue';
import alertBack from '@/common/alert/alertBack.vue';
export default {
  name: 'order',
  components: {
    xieyiAside,
    alertBack,
    orderXinxi
  },
  computed: {...mapGetters(['UploadImg','loancunAsync'])},
  data () {
    return {
      asideAsync : false,
      asideName : 'xuefei',
      asideArr  : [],//侧边栏
      alertAsync : false,
      xueAsync   : false ,//学费协议是否勾选
      fuwuAsync1 : false,//服务是否勾选
      fuwuAsync2 : false,//服务是否勾选
      orDetail  :{} ,//学费订单
      feeDetail :{},//服务
      orderObj : {} ,
      identityText : '在校学生',
      inentityAsync : false,
      inentityObj :{},
      asideXueObj :{},
      asideFuObj  :{},
      asideAll :false,
      pageObj  :{}

    }
  },
  methods : {
    ...mapActions(['setOrderRmpList','setUploadImg','setLoancunAsync','setToastObj','setLodingAsync']),
    //打开侧边栏
    openAsideFn (name) {
      //如果没有值，请求数据
      if(JSON.stringify(this[name]) == "{}"){
        this.bfContractLink(name);
      } 
      else{
        this.asideAsync = true;
        this.asideName  = name;
        this.asideArr   = this[name];
      };
      //判断是否全选
      this.asideAll = name =='asideXueObj' ?this.xueAsync : this.fuwuAsync1 && this.fuwuAsync2
    },
    //关闭侧边栏 
    closeAsideFn (arr,name,async) {
      this[name] = arr;
      this.asideAsync = false;
      
      if(name =='asideXueObj'){
        this.xueAsync = async;
      } else{
        this.fuwuAsync1 = async;
        this.fuwuAsync2 = async;
      }
    },
    //关闭弹框提醒
    closeAlertFn () {
      this.alertAsync = false;
    },
    //打开闲情
    openDetailFn (str) {
      this.setOrderRmpList(this[str].rmpList);
      localStorage.setItem('orderRmpList',JSON.stringify(this[str].rmpList));
      this.$router.push({path:'/order/orderDetail'});
    },
    //点击提交订单
    submitFn () {
      let obj =  globalFn.concatObj({
        loanMoney    : this.pageObj.totalMoney,
        bpcId        : this.$route.query.bpcId,
        nper         : this.orDetail.userNper,
        businessType : this.$route.query.businessType,
        loanId       : this.UploadImg,
        pstSign      : this.inentityAsync?'1':'2',
        // dnyCode      : '9410'
      });
      //显示loading
      this.setLodingAsync(true);
      this.loanInstallOrder(obj);
    },
    //确定提交订单
    clickBtnFn () {
      this.alertAsync = true;
    },
    //学费协议点击 
    xueXieyiFn () {
      this.xueAsync = !this.xueAsync;
    },
    //服务协议点击
    fuwuFn    (name) {
      this[name] = !this[name]
    },
    //查询共同借款人(两笔)
    queryBorrowers () {
      let obj =  globalFn.concatObj({});
      api.queryBorrowers(obj).then((res) =>{
        if(res.respCode =='000'){
          this.inentityAsync = res.showStatus;
          this.inentityObj   = res.borrowers;
          this.inentityObj['idNum1'] = globalFn.plusXing(this.inentityObj.idNum,4,4);
          this.inentityObj['relationIdCard1'] = globalFn.plusXing(this.inentityObj.relationIdCard,4,4);
        } else{
          this.setToastObj({async:true,respMesg:res.respMesg});
        }
      },(error)=>{
        console.log(error)
      });
    },
    //学贷下订单
    loanInstallOrder (obj) {
      api.loanInstallOrder(obj).then((res) =>{
        // alert(JSON.stringify(res))
        if(res.respCode =='000'){
          //成功后上传图片 为空
          this.setUploadImg('');
          this.setLodingAsync(true);
          this.$router.push({path:'/order/orderState',query:{loanId : res.loanId}});
        } else{
          this.setLodingAsync(false);
          this.setToastObj({async:true,respMesg:res.respMesg});
        }
      },(error)=>{
        this.setToastObj({async:true,respMesg:res.respMesg});
      });
    },
    //查询还款详情以及费用详情(两笔)
    queryRepayDetails () {
      let obj =  globalFn.concatObj({
        "bpcId":this.$route.query.bpcId,
        "businessType":this.$route.query.businessType,
        "loanMoney":this.$route.query.loanMoney,
        "nper":this.$route.query.nper
      });
      api.queryRepayDetails(obj).then((res) =>{
        if(res.respCode =='000'){
          this.orDetail = res.orDetail;
          this.feeDetail = res.feeDetail;
          this.pageObj = res;
          //学费
           Object.assign(this.orDetail,{
             text:'xuefei',
             name : this.$route.query.name,
             planText : this.$route.query.planText,
             money    : this.$route.query.money,
             fenNper  : this.$route.query.fenNper,
             userNper : this.$route.query.userNper,
             imgurl   :this.$route.query.orgImgPath
           });

          //服务
           Object.assign(this.feeDetail,{
             planText : this.$route.query.planText,
             fenNper  : this.$route.query.fenNper,
             userNper  : this.$route.query.userNper
           });

          //隐藏loading
          this.setLodingAsync(false);
        } else{
          this.setToastObj({async:true,respMesg:res.respMesg});
        }

      },(error)=>{
        console.log(error)
      });
    },
    //下单前合同地址展示
    bfContractLink (name) {
      let ctSign = '';
      if(name == 'asideXueObj'){
        ctSign = this.inentityAsync =='1'?'12' :'9';
      } else{
        ctSign = this.inentityAsync =='2'?'13' :'10';
      }

      let obj =  globalFn.concatObj({
            ctSign,
            pstSign : this.inentityAsync?'1':'2'
          });
      api.bfContractLink(obj).then((res) =>{
        if(res.respCode =='000'){
          this[name]    = res.contractList;
          this[name].map((m)=>{
            m['isCheck'] = false;
          });   
          this.asideArr = this[name];
          this.asideAsync = true;
          this.asideName  = name;
        }

      },(error)=>{
        console.log(error,'dfs')
      });
    },
    //选择职业
    identityFn (str) {
      this.identityText = str;
    },
    closeIdentity () {
      this.inentityAsync = false;
    },
    //社会人 身份确定
    shehuiFn (){
      this.inentityAsync = false;
      this.setLoancunAsync('false');
    }
  },
  mounted () {
    //查询共同借款人(两笔)
    this.queryBorrowers();
    //查询还款详情以及费用详情(两笔)
    this.queryRepayDetails();
  }
}
</script>
<style lang="scss" scoped>
.wrap{
  background: $col-f0;
  padding-bottom: 180px;
  .header{
    height: 120px;
    padding:0 30px;
    width: 100%;
    background: $col-f;
    &>div{
      i{
        background-image: url("/static/images/order/sure-fail.png");
        width:40px;
        height: 40px;
        margin-right: 10px;
      }
      span{
        font-size: 32px;
        color:$col-3;
      }
    }
    a{
      width:120px;
      height: 60px;
      font-size: 28px;
      color:#fb5151;
      line-height: 60px;
      text-align: center;
      border:1px solid #fb5151;
      border-radius: 4px;
    }
  }
  &>.main{
    padding:20px 16px 0;
    box-sizing: border-box; 
    .top-back{
      height: 12px;
      background: url('/static/images/order/blue-back.png') no-repeat top center;
    }
    .bot-back{
      height: 12px;
      background: url('/static/images/order/juchi-back.png') no-repeat top center;
      background-color: $col-f0;
    }
    .section-box{
      margin-bottom: 20px;
      background:$col-f;
      border-radius: 8px;
      overflow: hidden;
      &.on{
        .top-back{
          background: url('/static/images/order/origin-back.png') no-repeat top center;
        }
        .bot-back{
          background: url('/static/images/order/juchi-back.png') no-repeat top center;
          background-color: $col-f0;
        }
      }
    }
    
    .title-box{
      padding:0 30px;
      height: 84px;
      span{
        font-size: 28px;
        &:first-child{
          color:$col-3;
        }
        &:last-child{
          color:$col-blue;
          height: 100%;
          i{
            font-size: 46px;
            margin-right: 8px;
          }
        }
      }
    }
    .xieyi-box{
      padding:20px 20px;
      box-sizing: border-box;
      span{
        font-size: 24px;
        color:$col-9;
        &:first-child{
          i{
            margin-right: 8px;
            font-size: 48px;
            &.on{
              color:$col-blue;
            }
          }
        }
        &:last-child{
          flex:1;
          i{
            font-size: 34px;
            margin-left:20px;
          }
        }
      }
    }
    .tixing-box{
      height:118px;
      padding:0 20px 0 20px;
      box-sizing: border-box;
      background: #ffede5;
      display: flex;
      p{
        font-size: 22px;
        color:$col-6;
        width: 0;
        flex:1;
        span{
          color:$col-ori;
        }
      }
      &>span{
        font-size: 28px;
        color:$col-ori;
        margin-right: 32px;
        i{
          font-size: 48px;
          margin-right: 16px;
        }
      }
    }
  }
  .list-box{
    background: #fff;
    ul{
      li{
        height: 96px;
        padding:0 30px;
        box-sizing: border-box;
        &>span{
          font-size: 30px;
          color:$col-3;
        }
        &>i{
          color:$col-blue;
          font-size: 46px;
        }
        div{
          display: flex;
          color:$col-6;
          align-items: center;
          p{
            text-align: right;
            span{
              display: block;
              font-size: 28px;
              line-height: 34px;
            }
          }
          &>i{
            font-size: 44px;
            color:$col-9;
          }
        }
      }
    }
  }
  .text-box{
    padding: 40px 60px;
    P{
      font-size: 24px;
      line-height: 42px;
      color:$col-9;
      span{
        color:$col-red;
      }
    }
  }
  .footer{
    background: $col-f;
    position: fixed;
    bottom:0;
    left:0;
    width: 100%;
    section{
      &:first-child{
        height: 60px;
        text-align: center;
        background: rgba(0,0,0,0.6);
        font-size: 24px;
        color:$col-f;
        line-height: 60px;
      }
      &:last-child{
        height: 120px;
        display: flex;
        .btn{
          width: 216px;
          font-size: 36px;
          color:$col-f;
          background: $col-c;
          border:none;
          &.on{
            background: $col-blue;
          }
        }
        .money{
          width: 0;
          flex:1;
          height: 100%;
          padding-left: 30px;
          p{
            padding:4px 0;
            &:first-child{
              font-size: 34px;
              span{
                &:first-child{
                  color:$col-3;
                }
                &:last-child{
                  color:$col-red;
                }
              }
            }
            &:last-child{
              font-size: 22px;
              color:$col-9;
            }
          }
        }
      }
    }
  }
  .order-alert-back{
    padding:0 80px;
    .title{
      line-height: 100px;
      text-align: center;
      font-size: 40px;
      color:$col-3;
    }
    .cont{
      line-height: 44px;
      font-size: 24px;
      color:$col-9;
      padding:0 40px 20px;
    }
    .btn-box{
      line-height: 100px;
      text-align: center;
      color:$col-blue;
      font-size: 32px;
    }
    .btn-boxs{
      height: 100px;
      display: flex;
      padding:20px 0;
      button{
        width: 0;
        flex:1;
        font-size: 32px;
        border:none;
        background: $col-f;
        color:$col-blue;
        &:last-child{
          border-left: 2px solid $col-e;
        }
      }
    }
  }
  .identity-alert-back{
    .title{
      height: 108px;
      font-size: 32px;
      text-align: center;
      line-height: 108px;
    }
    .identity-main{
      padding:20px 40px 0;
      ul{
        li{
          width:0;
          flex:1;
          border:2px solid $col-c;
          background:$col-f0;
          border-radius: 8px;
          height: 180px;
          color:$col-9;
          font-size: 26px;
          position: relative;
          &>.icon{
            width: 68px;
            height: 56px;
            margin-bottom: 10px;
          }
          &.on{
            color:$col-blue;
            border-color: $col-blue;
            .jiao{
              display: block;
            }
          }
          &:first-child{
            margin-right: 10px;
          }
          &:last-child{
            margin-left:10px;
          }
          .jiao{
            border-left:2px solid $col-blue;
            border-bottom:2px solid $col-blue;
            position: absolute;
            width:20px;
            height: 20px;
            bottom:-4px;
            transform: rotate(-45deg) translate(-50%,0);
            background:$col-f0;
            border-radius: 0 0 0 4px;
            display: none;
            left:50%;
          }
        }
      }
      p{
        &.text{
          font-size: 23px;
          color:$col-6;
          line-height: 34px;
          padding:30px 0;
          span{
            color:$col-red;
          }
        }
        &.btn{
          button{
            width:100%;
            height: 80px;
            border:none;
            border-radius: 40px;
            background:$col-blue;
            color:$col-f;
            font-size:36px;
            color:$col-f;
          }
        }
        &.tongyi{
          height: 84px;
          line-height: 84px;
          font-size: 24px;
          color:$col-blue;
          padding:0 40px;
          opacity: 0;
          &.on{
            opacity: 1;
          }
          a{
            color:$col-blue;
          }
        }
      }
    }
  }



}
</style>
