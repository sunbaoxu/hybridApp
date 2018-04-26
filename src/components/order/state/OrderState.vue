<template>
  <div class="state-wrap" :style="{'transform': 'translate(0,-'+startY+'px)'}">
    <!-- 下拉刷新 -->
    <down-refresh class="refresh-box" ref="refreshID" @moveRefresh="moveRefresh" @endRefresh="endRefresh"></down-refresh>
    <!-- 协议是否显示 -->
    <p class="xiyi g-cen-y" :class="{'on':obj.retStatus =='3' || obj.retStatus =='4'}" @click="agreementFn">
      <i class="iconfont icon-tixing"></i><span>查看协议</span>
    </p>
    <!-- 头部主体内容 -->
    <header class="header-state">
      <!-- 订单 信息 -->
      <section class="detail">
        <dl>
          <dt class="g-back" :style="{'background-image':'url('+obj.orgImgPath+')'}"></dt>
          <dd>
            <h4 class="g-fen-cen">
              <span>{{obj.cName}}</span>
              <span
              :class="classFn(obj.retStatus)"
              >{{obj.retMsg}}</span>
            </h4>
            <p class="bianhao">订单编号：{{obj.loanCode}}</p>
            <p class="date">交易时间：{{obj.createDate}}</p>
          </dd>
        </dl>
      </section>
      <!-- 订单期数 -->
      <section class="g-border qishu">
        <ul class="g-fen-cen">
          <li class="g-col-cen-cen-box">
            <span>分期期数</span>
            <span>{{obj.totalNper}}期</span>
          </li>
          <li class="g-col-cen-cen-box">
            <span>分期金额（元）</span>
            <span>￥{{obj.loanMoney}}</span>
          </li>
          <li class="g-col-cen-cen-box">
            <span>个人还款期数</span>
            <span>{{obj.personalNper}}期</span>
          </li>
        </ul>
      </section>
      <!-- 订单逾期 -->
      <section class="yuqi g-fen-cen" v-if="obj.retStatus =='4'||obj.retStatus =='3'">
        <span>当前应还（元）：</span>
        <span>￥{{obj.totalRetAmt}}</span>
      </section>
      <!-- 订单结算 -->
      <section class="jiesuan g-fen-cen" v-else-if="obj.retStatus =='7'">
        <span class="g-cen-y"><i class="iconfont icon-jie"></i>结算证明</span>
        <span>下载</span>
      </section>
    </header>
    <main class="main-state">
      <section class="huankuan">
        <ul>
          <li v-if="orderObj.scheduleFlag =='0'">
            <div class="g-cen-y" @click="clickAsyncFn('按期','onTimeType')"><i class="iconfont" :class="{'icon-dui1 on':asyncText =='按期','icon-dui':asyncText !='按期'}"></i></div>
            <div class="g-col-cen-y">
              <p class="g-fen-x">
                <span class="g-cen-y">按期还款<i v-if="orderObj.overFlag =='0'">已逾期</i></span>
                <span class="hui">￥{{orderObj.scheduleAmt}}</span>
              </p>
              <p class="g-fen-x">
                <span>账单已逾期，快去还款吧</span>
                <span>共{{orderObj.scheduleNper}}期</span>
              </p>
            </div>
          </li>
          <li v-if="orderObj.settleFlag == '0'">
            <div class="g-cen-y" @click="clickAsyncFn('提前','settleType')"><i class="iconfont" :class="{'icon-dui1 on':asyncText =='提前','icon-dui':asyncText !='提前'}"></i></div>
            <div class="g-col-cen-y">
              <p class="g-fen-x">
                <span>提前结清</span>
                <span>￥1323.23</span>
              </p>
              <p class="g-fen-x">
                <span>可提前结清所有借款</span>
                <span>共9期</span>
              </p>
            </div>
          </li>
        </ul>
      </section>
      <!-- 提示性文字 -->
      <section class="tishi">
        <h4>温馨提醒：</h4>
        <p v-if="listAsync">{{orderObj.reasonMesg}}</p>
        <p v-else>{{obj.notify}}</p>
      </section>
    </main>
    <!-- 立即还款 -->
    <footer class="footer-state footer-money" v-if="obj.retStatus =='4'|| obj.retStatus =='3'">
      <!-- 逾期中 -->
      <div class="g-col-cen-y" v-if="obj.retStatus =='4'">
        <div class="g-fen-y" >
          <p>
            <span>待支付</span>
            <span>￥{{orderObj.overdueTotalAmt}}</span>
          </p>
          <p @click="downDetail" class="g-cen-y">
            详情<i class="iconfont icon-jiao-rig"></i>
          </p>
        </div>
        <p>含逾期费 ￥{{orderObj.overAmt}}</p>
      </div>
      <!-- 还款中 -->
      <div class="g-cen-y huan" v-else>
        <span>待支付</span>
        <span>￥{{obj.totalRetAmt}}</span>
      </div>
      <div>
        <button @click="queryRepayMethod">立即还款</button>
      </div>
    </footer> 
    <!-- 重新申请 -->
    <footer class="footer-state" v-else-if="obj.retStatus =='5' ||obj.retStatus =='6' ||obj.retStatus =='7' ">
      <button @click="routerFn">重新申请</button>
    </footer>
    <!-- 引入弹框组件 -->
    <alert-back class="alert-back" @closeAlertFn="closeAlertFn" v-if="alertAsync">
      <h4 class="title">详情</h4>
      <section class="box g-border">
        <ul v-ScrollMove>
          <li v-for="(m,i) in alertArr" :key="i">
            <i class="xian"></i>
            <h5 class="g-fen-cen">
              <span><i class="iconfont icon-clock"></i>{{m.retAmtDate}}</span>
              <span>{{m.overdueMess}}</span>
            </h5>
            <p>应还本息：{{m.retAmt}}元</p>
            <p>逾期费用：{{m.overdueAmt}}元</p>
          </li>
        </ul>
      </section>
      <section class="money g-fen-cen">
        <span>合计(含逾期费)</span>
        <span>{{orderObj.overdueTotalAmt}}元</span>
      </section>
    </alert-back>
    <!-- 银行卡 支付 -->
    <div class="bank-back" v-if="bankAsync" @click.self="bankAsync =false">
      <section class="main">
        <h4 class="title g-border">还款确认</h4>
        <div class="money-box">
          <P>我已经确认并同意还款</P>
          <p>17.26元</p>
        </div>
        <div class="from-box">
          <p class="g-border1 g-fen-cen-box">
            <span>还款方式</span>
            <span>银行划扣</span>
          </p>
          <p class="g-border1 g-fen-cen-box">
            <span>还款银行卡</span>
            <span class="g-cen-y">
              <i class="g-back" :style="{'background-image':'url('+bankObj.bankIcon+')'}"></i>
              {{bankObj.bankName}}
            </span>
          </p>
        </div>
        <div class="btn-box">
          <p>您本月还有<span>{{orderObj.availNum}}</span>次主动还款机会</p>
          <p><button @click="submitFn">立即还款</button></p>
        </div>
        <div class="text-box">{{bankObj.warmMesg}}</div>
      </section>
    </div>
  </div>
</template>

<script>
import api  from '@/api/api';
import {mapActions} from 'vuex';
import globalFn from '@/assets/javascripts/globalFn';
import alertBack from '@/common/alert/alertBack.vue';
import downRefresh from '@/common/refresh/downRefresh.vue';
export default {
  name: 'state',
  components :{
    alertBack,
    downRefresh
  },
  data () {
    return {
      stateObj : {},
      obj :{},
      orderObj : {},
      alertAsync : false,//详情弹框
      alertArr   : [] , //详情数据
      asyncText : '按期' ,
      listAsync : false,
      bankAsync : false,
      bankObj : {} ,
      startY : 200,
      huaKouType : '',//划扣类型
      atreObj : {}
    }
  },
  methods : {
    ...mapActions(['setToastObj','setLodingAsync']),
    classFn (status) {
      switch (status) {
        case 5:
          return 'state-hui'
        case '3':
        case '4':
        case '1':
          return 'state-ori'
        case 2:
        case 6:
          return 'state-red'
        case '8':
        case 7:
          return 'state-blue'
      }
    },
    //根据订单ID查看详细信息
    queryOrderByLoanIDNew () {
      let obj = globalFn.concatObj({
        loanId : this.$route.query.loanId
      });
      api.queryOrderByLoanIDNew(obj).then((res) =>{
        //隐藏loading
        this.setLodingAsync(false);
        if(res.respCode =='000'){
          this.obj = res.loanInfo;
          if(this.obj.retStatus =='3' || this.obj.retStatus =='4' ){
            this.listAsync = true;
            this.activePayDetail();
          }
        } else{
          this.setToastObj({async:true,respMesg:res.respMesg});
        }
      },(error)=>{
        console.log(error)
      });
    },
    //主动还款列表
    activePayDetail () {
      let obj = globalFn.concatObj({
        loanID : this.$route.query.loanId
      });
      api.activePayDetail(obj).then((res) =>{
        if(res.respCode =='000'){
          this.orderObj= res;
          this.alertArr = res.overdueInfoList;
          //按期
          if(res.scheduleFlag == '0'){
            this.huaKouType = res.onTimeType;
          } 
          //提前结清
          else if(res.settleFlag == '0'){
            this.huaKouType = res.settleType;
          }

        } else{
          this.setToastObj({async:true,respMesg:res.respMesg});
        }
      },(error)=>{
        console.log(error)
      });
    },
    //查询银行卡（主卡）
    queryUserBankByPhone () {
      let obj = globalFn.concatObj({});
      api.queryUserBankByPhone(obj).then((res) =>{
        if(res.respCode =='000'){
          this.bankAsync = true;
          this.bankObj = res;
        } else{
          this.setToastObj({async:true,respMesg:res.respMesg});
        }
      },(error)=>{
        console.log(error)
      });
    },
    //还款方式查询接口
    queryRepayMethod () {
      let obj = globalFn.concatObj({
        repayMoney :this.orderObj.scheduleAmt, //还款金额
        loanID     : this.$route.query.loanId, //订单id
        receiptType : this.huaKouType //划扣类型
      });
      api.queryRepayMethod(obj).then((res) =>{
        if(res.respCode =='000'){
          this.atreObj = res;
          //查询银行卡（主卡）
          this.queryUserBankByPhone();
        } else{
          this.setToastObj({async:true,respMesg:res.respMesg});
        }
      },(error)=>{
        console.log(error)
      });
    },
    //关闭弹框
    closeAlertFn () {
      this.alertAsync = false;
    },
    //立即还款
    submitFn () {
      if(this.atreObj.atreMethCode =='1'){
        location.href = this.atreObj.atreMethUrl;
      } else{
        //划扣结果页
        this.$router.push({path:'/order/delimitState',query:{
          repayMoney  : this.orderObj.scheduleAmt, //还款金额
          loanID      : this.$route.query.loanId, //订单id
          receiptType : this.huaKouType, //划扣类型
          cardNo      : this.bankObj.cardNo //银行卡号
        }});  
      }
      // this.$router.push('/order/orderRecord')
    },
    //详情
    downDetail () {
      this.alertAsync = true;
    },
    //更改状态
    clickAsyncFn (str,name) {
      this.asyncText = str;
      this.huaKouType = this.orderObj[name];
    },
    //跳转商家页
    routerFn () {
      this.$router.push({path:'/business/shangList',query:{recoCode:this.obj.recoCode}})
    },
    //跳转协议页
    agreementFn () {
      this.$router.push({path:'/agreement',query:{id:this.obj.id}})
    },
    moveRefresh (num) {
      this.startY = num;
    },
    //松开刷新
    endRefresh () {
      //根据订单ID查看详细信息
      this.queryOrderByLoanIDNew();
    },
    listCallBack () {
      this.$router.push({path:'/order/orderRecord',query:{loanId:this.$route.query.loanId}})
    }
  },
  mounted () {
    //根据订单ID查看详细信息
    this.queryOrderByLoanIDNew();
    window.listCallBack = this.listCallBack;
  },
  //解绑window事件
  beforeRouteLeave   (to,from,next) {
    if(from.name == '订单状态'){
      window.removeEventListener('touchstart',this.$refs.refreshID.touchStart,false);
      window.removeEventListener('touchmove',this.$refs.refreshID.touchMove,false);
      window.removeEventListener('touchend',this.$refs.refreshID.touchEnd,false);
    }
    next();
  }
}
</script>
<style lang="scss" scoped>
.state-wrap{
  padding:0px 0 100px;
  transform: translate(0,-200px);
  .refresh-box{
    margin-bottom: 20px;
  }
  &>.xiyi{
    color:$col-6;
    padding:0 0 20px 30px;
    display: none;
    &.on{
      display: flex;
    }
    i{
      font-size: 40px;
      color:$col-blue;
      margin-right: 10px;
    }
    span{
      font-size:24px;
    }
  }
  .header-state{
    background: $col-f;
    padding-top:30px;
    section{
      &.detail{
        padding: 0 30px;
        dl{
          display: flex;
          overflow: hidden;
          dt{
            height: 104px;
            width:104px;
            margin-right: 20px;
            border:1px solid $col-c;
            border-radius: 100%;
          }
          dd{
            width:0;
            flex:1;
            h4{
              height: 56px;
              span{
                &:first-child{
                  font-size: 32px;
                }
                &:last-child{
                  font-size: 26px;
                }
              }
              .state-blue{
                color:$col-blue;
              }
              .state-red{
                color:$col-red;
              }
              .state-ori{
                color:$col-ori;
              }
              .state-hui{
                color:$col-9;
              }
            }
            p{
              font-size: 24px;
              color:$col-9;
            }
          }
        }
      }
      &.qishu{
        padding:30px 0;
        ul{
          li{
            height: 66px;
            width:0;
            flex:1;
            justify-content: space-between;
            border-right:1px solid $col-c;
            &:last-child{
              border-right: 0;
            }
            span{
              font-size: 24px;
              &:first-child{
                color:$col-9;
              }
              &:last-child{
                color:$col-6;
              }
            }
          }
        }
      }
      &.yuqi{
        height: 108px;
        font-size: 30px;
        padding:0 30px;
        span{
          &:last-child{
            color:$col-red;
          }
        }
      }
      &.jiesuan{
        height: 108px;
        font-size: 30px;
        padding:0 30px;
        span{
          &:first-child{
            color:$col-9;
            i{
              font-size: 46px;
              margin-right: 10px;
            }
          }
          &:last-child{
            color:$col-blue;
            border:2px solid $col-blue;
            line-height: 44px;
            width: 100px;
            text-align: center;
            border-radius: 6px;
          }
        }
      }
    }
  }
  .main-state{
    .huankuan{
      margin-top:20px;
      background: $col-f;
      ul{
        li{
          display: flex;
          width:100%;
          height: 146px;
          padding:0 30px;
          border-bottom: 2px solid $col-c;
          &:last-child{
            border-bottom: 0;
          }
          div{
            &:first-child{
              height: 100%;
              padding-right: 10px;
              i{
                font-size: 50px;
                &.on{
                  color:$col-blue;
                }
              }
            }
            &:last-child{
              width:0;
              flex:1;
              p{
                padding:6px 0;
                &:first-child{
                  font-size: 34px;
                  color:$col-3;
                  i{
                    font-style: normal;
                    font-size: 22px;
                    background:$col-red;
                    color:$col-f;
                    padding:4px 10px;
                    border-radius:6px;
                    margin-left: 14px;
                  }
                }
                &:last-child{
                  font-size: 24px;
                  color:$col-9;
                }
                .hui{
                  color:$col-9;
                }
              }
            }
          }
        }
      }
      
    }
    .tishi{
      padding: 30px 46px 0; 
      line-height: 36px;
      font-size: 24px;
      color:$col-9;
    }
  }
  .alert-back{
    .title{
      line-height: 100px;
      text-align:center;
      font-size: 40px;
      color:$col-blue;
    }
    .money{
      line-height: 160px;
      padding:0 30px;
      span{
        &:first-child{
          font-size: 36px;
        }
        &:last-child{
          font-size: 30px;
          color:$col-red;
        }
      }
    }
    .box{
      padding:0 30px 58px;
      ul{
        max-height: 410px;
        overflow-y:auto;
        li{
          padding-bottom: 66px;
          position: relative;
          box-sizing: border-box;
          &:last-child{
            padding-bottom: 0;
            &>.xian{
              display: none;
            }
          }
          h5{
            height: 88px;
            span{
              &:first-child{
                font-size: 24px;
                color:$col-9;
                display: flex;
                align-items: center;
                i{
                  font-size: 40px;
                  margin-right: 10px;
                  background: $col-f;
                }
              }
              &:last-child{
                font-size: 24px;
                color:$col-red;
              }
            }
          }
          p{
            font-size: 28px;
            padding-left: 50px;
            line-height: 44px;
          }
          &>.xian{
            position: absolute;
            height: 100%;
            width:2px;
            background: $col-c;
            left:18px;
            top:62px;
          }
        }
      }
    }
  }
  .footer-state{
    position: fixed;
    width:100%;
    bottom:0;
    left:0;
    button{
      height: 100px;
      font-size: 36px;
      color:$col-f;
      border:none;
      background: $col-blue;
      width:100%;
    }
  }
  .footer-money{
    display: flex;
    background: $col-f;
    &>div{
      &:first-child{
        width: 0;
        flex:1;
        padding:0 40px 0 30px;
        div{
          display: flex;
          justify-content: space-between;
          p{
            &:first-child{
              font-size: 30px;
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
              color:$col-blue;
              font-size: 30px;
              line-height: 0;
              i{
                font-size: 30px;
                line-height: 0;
              }
            }
          }
        }
        &>p{
          padding-top:6px;
          color: $col-9;
          font-size: 26px;
        }
      }
      &:last-child{
        width: 200px;
      }
    }
    .huan{
      span{
        font-size: 26px;
        &:first-child{
          color:$col-3;
        }
        &:last-child{
          color:$col-red;
        }
      }
    }
  }
  .bank-back{
    position: fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background: rgba(0,0,0,0.6);
    display: flex;
    align-items: flex-end;
    .main{
      background: $col-f;
      width:100%;
      .title{
        height: 100px;
        text-align: center;
        line-height: 100px;
        font-size: 30px;
      }
      .money-box{
        padding:30px 0;
        p{
          text-align: center;
          &:first-child{
            font-size: 24px;
            padding-bottom: 10px;
          }
          &:last-child{
            color:$col-red;
            font-size: 28px;
          }
        }
      }
      .from-box{
        p{
          height: 80px;
          padding:0 30px;
          span{
            color:$col-3;
            font-size: 24px;
            i{
              width:36px;
              height: 36px;
              margin-right: 10px;
            }
          }
        }
      }
      .btn-box{
        padding-top:30px;
        p{
          &:first-child{
            line-height: 60px;
            text-align: center;
            font-size: 20px;
            color:$col-9;
            span{
              color:$col-blue;
              padding:0 4px;
            }
          }
          &:last-child{
            padding:0 30px;
            button{
              width: 100%;
              height: 80px;
              border-radius: 40px;
              border:none;
              background: $col-blue;
              font-size: 26px;
              color:$col-f;
            }
          }
        }
      }
      .text-box{
        padding:40px 30px;
        font-size: 24px;
        color:$col-9;
      }
    }
  }
}
</style>
