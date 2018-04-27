<template>
  <div class="record-wrap" >
    <section class="nav-box g-cen-y">
      <nav class="g-cen-cen nav">
        <span 
          :class="{'on':btnText=='还款计划'}"
          @click="clickBtn('还款计划')"
        >还款计划</span>
        <span
          :class="{'on':btnText=='还款历史'}"
          @click="clickBtn('还款历史')"
        >还款历史</span>
      </nav>
    </section>
    <main class="record-main">
      <!-- 还款计划 -->
      <ul v-if="btnText =='还款计划'">
        <li v-for="(m,i) in planArr" :key="i" :class="{'not':m.retStatus =='1'}">
          <i class="xian"></i>
          <h4 class="g-fen-cen">
            <span class="g-cen-y"><i class="iconfont icon-clock"></i>{{m.retAmtDate}}</span>
            <span 
              :class="{
                'hui':m.retStatus =='1',
                'blue':m.retStatus =='2'||m.retStatus =='3',
                'red':m.retStatus =='4'
              }"
            >{{m.retMsg}}</span>
          </h4>
          <div>
            <i class="icon"></i>
            <p>
              <span>应还金额</span>
              <span>{{m.retAmt}}元</span>
            </p>
            <p class="hui">本金({{m.reInterest}}元)+利息({{m.rePrincipal}}元)</p>
            <p><span>实还金额</span><span>{{m.realAmt}}元</span></p>
            <p class="yuqi" v-if="m.retStatus =='4'"><span>逾期费用</span><span>{{m.overDue}}元</span></p>
            <p class="jieqing" v-if="m.retStatus =='3'"><span>提前结清金额</span><span>{{m.onceRetAmt}}元</span></p>
          </div>
        </li>
      </ul>
      <!-- 还款历史 -->
      <ul v-else-if="btnText =='还款历史'">
        <li v-for="(m,i) in historyArr" :key="i">
          <i class="xian"></i>
          <h4 class="g-fen-cen">
            <span class="g-cen-y"><i class="iconfont icon-clock"></i>{{m.retAmtDate}}</span>
            <span 
              :class="{
                'hui':m.retStatus =='0',
                'blue':m.retStatus =='2',
                'red':m.retStatus =='1'
              }"
            >{{m.retMsg}}</span>
          </h4>
          <div>
            <i class="icon"></i>
            <p>
              <span>还款金额：</span>
              <span>{{m.retAmt}}元</span>
            </p>
            <p><span>还款方式：</span><span>{{m.receiptDesc}}</span></p>
            <p class="hui" v-if="m.remark !=''">{{m.remark}}</p>
            <p class="hui" v-if="m.reqMsg !=''">{{m.reqMsg}}</p>
          </div>
        </li>
      </ul>
    </main>
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
      btnText : '还款计划',
      recordObj : {},
      error : {} ,
      planArr : [] ,//计划
      historyArr : []
    }
  },
  methods : {
    ...mapActions(['setToastObj','setLodingAsync']),
    clickBtn (str) {
      this.btnText = str;
      if(str == '还款历史' && this.historyArr.length <=0){
        //主动还款记录
        this.activePayRecord();
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
          this.planArr  = res.loanInfo.rmpList;
        } else{
          this.setToastObj({async:true,respMesg:res.respMesg});
        }
      },(error)=>{
        console.log(error)
      });
    },
    //主动还款记录
    activePayRecord () {
      let obj = globalFn.concatObj({
        loanID : this.$route.query.loanId
      });
      api.activePayRecord(obj).then((res) =>{
        //隐藏loading
        this.setLodingAsync(false);
        if(res.respCode =='000'){
          this.historyArr = res.payRecordList;
        } else{
          this.setToastObj({async:true,respMesg:res.respMesg});
        }
      },(error)=>{
        console.log(error)
      });
    },
  },
  mounted () {
    //默认请求还款计划
    this.queryOrderByLoanIDNew();
  }
}
</script>
<style lang="scss" scoped>
.record-wrap{
  background: $col-f;
  .nav-box{
    position: fixed;
    top:0;
    left:0;
    background: $col-f;
    width:100%;
    height: 116px;
    z-index: 22;
    .nav{
      width: 100%;
      span{
        border:2px solid $col-blue;
        color:$col-blue;
        font-size: 30px;
        line-height: 52px;
        text-align: center;
        width: 242px;
        &:first-child{
          border-radius: 6px 0 0 6px;
        }
        &:last-child{
          border-radius: 0 6px 6px 0;
        }
        &.on{
          background: $col-blue;
          color:$col-f;
        }
      }
    }
  }
  .record-main{
    padding-top: 116px;
    ul{
      li{
        overflow: hidden;
        padding-bottom: 26px;
        position: relative;
        &:last-child{
          &>.xian{
            display: none;
          }
        }
        &>.xian{
          height: 100%;
          width: 2px;
          background: $col-c;
          position: absolute;
          left:49px;
          top:36px;
        }
        h4{
          height: 36px;
          padding: 0 30px;
          margin-bottom: 10px;
          span{
            font-size: 24px;
            &:first-child{
              color:$col-9;
              i{
                font-size: 40px;
                margin-right: 10px;
              }
            }
            &:last-child{
              &.blue{
                color:$col-blue;
              }
              &.hui{
                color:$col-9;
              }
              &.red{
                color:$col-red;
              }
            }
          }
        }
        div{
          border:2px solid $col-c;
          float: right;
          margin-right: 30px;
          padding:20px 30px;
          border-radius: 8px;
          width: 630px;
          box-sizing: border-box;
          position: relative;
          p{
            font-size: 28px;
            line-height: 44px;
            &.hui{
              color:$col-9;
              padding-left: 140px;
            }
            span{
              &:first-child{
                color:$col-6;
                width: 140px;
                display: inline-block;
              }
              &:last-child{
                color:$col-0;
              }
            }
            &.yuqi{
              span{
                &:last-child{
                  color:$col-red;
                }
              }
            }
            &.jieqing{
              span{
                &:first-child{
                  width: 200px;
                }
              }
            }
          }
          &>.icon{
            position: absolute;
            left:70px;
            top:-11px;
            height: 20px;
            width: 20px;
            border-left:2px solid $col-c;
            border-top:2px solid $col-c;
            transform: rotate(45deg);
            background: $col-f;
            border-radius: 2px 0 0 0;
          }
        }
        &.not{
          span{
            color:$col-9!important;
          }
        }
      }
    }
  }
}
</style>
