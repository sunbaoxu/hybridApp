<template>
  <div class="wrap">
    <header class="header g-fen-cen-box">
      <div class="g-cen-y">
        <i class="g-back"></i>
        <span>现场认函</span>
      </div>
      <div>去上传</div>
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
        <order-xinxi :obj="xuefeiObj"></order-xinxi>
        <div class="xieyi-box g-fen-cen-box">
          <span @click="xueXieyiFn">
            <i 
              class="iconfont" 
              :class="(!xueAsync?'icon-dui':'icon-dui1 on')"
            ></i>
          </span>
          <span class="g-fen-cen" @click="openAsideFn('xuefei')">
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
        <order-xinxi :obj="fuwuObj"></order-xinxi>
        <div class="xieyi-box g-fen-cen-box">
          <span @click="fuwuFn('fuwuAsync1')">
            <i 
              class="iconfont"
              :class="(!fuwuAsync1?'icon-dui':'icon-dui1 on')"
            ></i>
          </span>
          <span class="g-fen-cen" @click="openAsideFn('fuwu')">
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
          <span class="g-fen-cen" @click="openAsideFn('fuwu')">
            {{feeDetail.contractMsg_2}}
            <i class="iconfont icon-jiao-rig"></i>
          </span>
        </div>
        <p class="bot-back"></p>
      </section>
    </main>
    <!-- 借款人信息 -->
    <section class="list-box">
      <ul>
        <li class="g-fen-cen-box g-border">
          <span>借款人信息</span>
          <i class="iconfont icon-wenhao"></i>
        </li>
        <li class="g-fen-cen-box g-border">
          <span>主借款人</span>
          <div>
            <p>
              <span>张三</span>
              <span>422125**********0593</span>
            </p>
            <i class="iconfont icon-jiao-rig"></i>
          </div>
        </li>
        <li class="g-fen-cen-box">
          <span>共同借款人</span>
          <div>
            <p>
              <span>张三</span>
              <span>422125**********0593</span>
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
            <span>￥18232.99</span>
          </p>
          <p>含学费 ￥18000+服务费 ￥145.99</p>
        </div>
        <div class="btn" @click="clickBtnFn">提交订单</div>
      </section>
    </footer>
    <!-- 协议 -侧边栏 -->
    <xieyi-aside v-if="asideAsync" @closeAsideFn="closeAsideFn" :arr="asideArr" :name ="asideName" :async="asideAll"></xieyi-aside>

    <!-- 弹框组件 - 订单 -->
    <alert-back class="order-alert-back" @closeAlertFn="closeAlertFn" v-if="alertAsync">
      <h4 class="title">提示</h4>
      <div class="cont g-border">
        根据国家监管要求，您不能作为申请的主体，但可经您父母的授权，有大是否大师
        傅打算发的说法地方萨芬多岁的方式的地方十大盛大发售大法师
      </div>
      <!-- <div class="btn-box" @click="closeAlertFn">知道了</div> -->
      <div class="btn-boxs" >
        <button @click="closeAlertFn">我再看看</button>
        <button @click="submitFn">立即提交</button>
      </div>
    </alert-back>

    <!-- 弹框组件 - 身份 -->
    <alert-back class="identity-alert-back" @closeAlertFn="closeIdentity" v-if="inentityAsync">
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

        <p class="btn"><button>我知道了</button></p>
        <p class="tongyi" :class="{'on':identityText =='在校学生'}">我的父亲/母亲同意作为主借款人申请》</p>
      </main>
    </alert-back>
  </div>
</template>

<script>
import api  from '@/api/api';
import {mapActions} from 'vuex';
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
  data () {
    return {
      asideAsync : false,
      asideName : 'xuefei',
      asideArr  : [],//侧边栏
      alertAsync : false,
      xuefeiObj :{text:'xuefei'},
      fuwuObj :{text:'fuwu'},
      xueAsync   : false ,//学费协议是否勾选
      fuwuAsync1 : false,//服务是否勾选
      fuwuAsync2 : false,//服务是否勾选
      orDetail  :{} ,//学费订单
      feeDetail :{},//服务
      orderObj : {} ,
      identityText : '在校学生',
      inentityAsync : false
    }
  },
  methods : {
    ...mapActions(['setOrderRmpList']),
    //打开侧边栏
    openAsideFn (name) {
      this.asideAsync = true;
      this.asideName  = name;
      this.asideAll   = false;
      let arr = JSON.parse(localStorage.getItem(name));
      let xuefei = [
            {id: '1',value: '香蕉',isCheck: false},
            {id: '2',value: '苹果',isCheck: false},
            {id: '3',value: '梨子',isCheck: false},
            {id: '4',value: '菠萝',isCheck: false}
          ],
          fuwu   = [
            {id: '1',value: '绿萝',isCheck: false},
            {id: '2',value: '仙人泪',isCheck: false},
            {id: '3',value: '观音竹',isCheck: false},
            {id: '4',value: '栀子花',isCheck: false},
            {id: '5',value: '夏荷',isCheck: false}
          ];

      if(name == 'xuefei'){
        this.asideAll = this.xueAsync;
      } else{
        this.asideAll = this.fuwuAsync2 && this.fuwuAsync1;
      }
      //为侧边栏赋值
      if(arr){
        this.asideArr = arr;
        return;
      } else{
        if(name = 'xuefei'){
          this.asideArr = xuefei;
        } else{
          this.asideArr = fuwu;
        }
      }
    },
    //关闭侧边栏 
    closeAsideFn (async,name) {
      this.asideAsync = false;
      if(name == 'xuefei') {
        this.xueAsync = async;
      } else{
        this.fuwuAsync2 = async;
        this.fuwuAsync1 = async;
      }
    },
    //关闭弹框提醒
    closeAlertFn () {
      this.alertAsync = false;
    },
    //打开闲情
    openDetailFn (str) {
      return false
      this.setOrderRmpList(this[str].rmpList);
      localStorage.setItem('orderRmpList',JSON.stringify(this[str].rmpList));
      this.$router.push({path:'/stillDetail'});
    },
    //点击提交订单
    submitFn () {
      this.$router.push('/orderState');
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
    //查询还款详情以及费用详情(两笔)
    queryRepayDetails () {
      let obj =  {"bpcId":"cFh05LWhoTxRQLmRvdQ","businessType":"5","loanMoney":"20000","nper":"24","chanName":"website","chanType":"APP4.11.4","entranceID":"41","loginPhone":"18900000066","reqTime":"2018-04-13 15:49:58","sign":"3a781778cd3dcecf3cf78a885169235b","token":"6eb763411de240c9bde8729088499995"}
      api.queryRepayDetails(obj).then((res) =>{
        if(res.respCode =='000'){
          // this.orderObj = res;
          console.log(res);
          this.orDetail = res.orDetail;
          this.feeDetail = res.feeDetail;
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
    }
  },
  mounted () {
    // this.queryRepayDetails()
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
      &:first-child{
        i{
          background-image: url("/static/images/order/sure-fail.png");
          width:35px;
          height: 40px;
          margin-right: 20px;
        }
        span{
          font-size: 32px;
          color:$col-3;
        }
      }
      &:last-child{
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
  }
  &>.main{
    padding:20px 16px;
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
          line-height: 120px;
          font-size: 36px;
          color:$col-f;
          text-align: center;
          background: $col-blue;
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
    .title{
      line-height: 100px;
      text-align: center;
      font-size: 40px;
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
        }
      }
    }
  }
}
</style>
