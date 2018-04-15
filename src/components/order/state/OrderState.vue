<template>
  <div class="state-wrap" >
    <header class="header-state">
      <!-- 订单 信息 -->
      <section class="detail">
        <dl>
          <dt class="g-back" style="background-image:url(/static/images/order/ios-icon.png)"></dt>
          <dd>
            <h4 class="g-fen-cen">
              <span>第三方服务费用套餐</span>
              <span
              :class="classFn(stateObj)"
              >{{stateObj.str}}</span>
            </h4>
            <p class="bianhao">订单编号：LB120884</p>
            <p class="date">交易时间：2017-03-03 18:00:32</p>
          </dd>
        </dl>
      </section>
      <!-- 订单期数 -->
      <section class="g-border qishu">
        <ul class="g-fen-cen">
          <li class="g-col-cen-cen-box">
            <span>分期期数</span>
            <span>18期</span>
          </li>
          <li class="g-col-cen-cen-box">
            <span>分期金额（元）</span>
            <span>￥13000</span>
          </li>
          <li class="g-col-cen-cen-box">
            <span>个人还款期数</span>
            <span>12期</span>
          </li>
        </ul>
      </section>
      <!-- 订单逾期 -->
      <section class="yuqi g-fen-cen" v-if="true">
        <span>当前应还（元）：</span>
        <span>￥134.87</span>
      </section>
      <!-- 订单结算 -->
      <section class="jiesuan g-fen-cen" v-if="false">
        <span class="g-cen-y"><i class="iconfont icon-jie"></i>结算证明</span>
        <span>下载</span>
      </section>
    </header>
    <main class="main-state">
      <section class="huankuan">
        <ul>
          <li>
            <div class="g-cen-y"><i class="iconfont icon-dui"></i></div>
            <div class="g-col-cen-y">
              <p class="g-fen-x">
                <span>按期还款</span>
                <span class="hui">￥134123.23</span>
              </p>
              <p class="g-fen-x">
                <span>账单已逾期，快去还款吧</span>
                <span>共1期</span>
              </p>
            </div>
          </li>
          <li>
            <div class="g-cen-y"><i class="iconfont icon-dui"></i></div>
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
      <section class="tishi">
        <h4>温馨提示：</h4>
        <p>您的分期申请已经发第三方撒地方设定浮动搜房
          是发生的发多少撒地方渡水复渡水发多少分
          大师傅大师傅大师傅地方 发送分阿道夫分的发多少发多
          少发多少发多少发多少</p>
      </section>
    </main>
    <!-- 重新申请 -->
    <footer class="footer-state" v-if="false">
      <button>重新申请</button>
    </footer>
    <!-- 立即还款 -->
    <footer class="footer-state footer-money" v-if="true">
      <div class="g-col-cen-y">
        <div class="g-fen-y">
          <p>
            <span>待支付</span>
            <span>￥232.34</span>
          </p>
          <p @click="downDetail" class="g-cen-y">
            详情<i class="iconfont icon-jiao-rig"></i>
          </p>
        </div>
        <p>含逾期费 ￥343.33</p>
      </div>
      <div>
        <button @click="submitFn">立即还款</button>
      </div>
    </footer>
    <!-- 引入弹框组件 -->
    <alert-back class="alert-back" @closeAlertFn="closeAlertFn" v-if="alertAsync">
      <h4 class="title">详情</h4>
      <section class="box g-border">
        <ul>
          <li>
            <h5 class="g-fen-cen">
              <span><i class="iconfont icon-clock"></i>2017-02-23</span>
              <span>已逾期</span>
            </h5>
            <p>应还本息：189.93元</p>
            <p>逾期费用：189.93元</p>
          </li>
          <li>
            <h5 class="g-fen-cen">
              <span><i class="iconfont icon-clock"></i>2017-02-23</span>
              <span>已逾期</span>
            </h5>
            <p>应还本息：189.93元</p>
            <p>逾期费用：189.93元</p>
          </li>
        </ul>
      </section>
      <section class="money g-fen-cen">
        <span>合计(含逾期费)</span>
        <span>345.53元</span>
      </section>
    </alert-back>
  </div>
</template>

<script>
import api  from '@/api/api';
import globalFn from '@/assets/javascripts/globalFn';
import alertBack from '@/common/alert/alertBack.vue';
export default {
  name: 'state',
  components :{
    alertBack
  },
  data () {
    return {
      stateArr : [
        {num:1,str:'成功'},
        {num:2,str:'审核中',footer:'',con:'有内容'},
        {num:3,str:'审核未通过',footer:'重新申请',con:''},
        {num:4,str:'已还清',footer:'重新申请'},
        {num:5,str:'已取消'},
        {num:6,str:'逾期中'},
        {num:7,str:'分期成功'},
        {num:8,str:'还款中'}
      ],
      stateObj : {},
      obj :{},
      alertAsync : false
    }
  },
  methods : {
    classFn (obj) {
      switch (obj.num) {
        case 5:
          return 'state-hui'
        case 2:
        case 8:
          return 'state-ori'
        case 3:
        case 6:
          return 'state-red'
        case 4:
        case 7:
          return 'state-blue'
      }
    },
    //获取 订单状态详情
    getOrderState () {
      // console.log(new Date())
      let sign = globalFn.getmd5('15809090909'+'2016-08-29 15:51:11')
      return false

      let obj = {
        "loginPhone": "15809090909",
        "token": "088b0a9ed6f946deae12a88281bbe4c8",
        "chanType": "APP4.0",
        "entranceID": "40",
        "reqTime": "2016-08-29 15:51:11",
        sign,
        "loanId":'qwnId7GhQu8bNfmSH8Y'
      }
      api.getOrderState(obj).then((res) =>{
        console.log(res)
      },(error)=>{
        console.log(error,'dfs')
      });
    },
    //关闭弹框
    closeAlertFn () {
      this.alertAsync = false;
    },
    //立即还款
    submitFn () {
      this.$router.push('/orderRecord')
    },
    //详情
    downDetail () {
      this.alertAsync = true;
    }
  },
  mounted () {
    this.stateObj = this.stateArr[5];
    this.getOrderState();
  }
}
</script>
<style lang="scss" scoped>
.state-wrap{
  padding:20px 0 100px;
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
                font-size: 46px;
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
        li{
          padding-bottom: 66px;
          &:last-child{
            padding-bottom: 0;
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
  }
}
</style>
