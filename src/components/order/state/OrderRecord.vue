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
      <ul>
        <li>
          <i class="xian"></i>
          <h4 class="g-fen-cen">
            <span class="g-cen-y"><i class="iconfont icon-clock"></i>2017-03-36</span>
            <span>已还清</span>
          </h4>
          <div>
            <i class="icon"></i>
            <p>
              <span>应还金额</span>
              <span>1500.98元</span>
            </p>
            <p class="hui">本金（123412元第三发）</p>
            <p><span>应还金额</span><span>150.9元</span></p>
          </div>
        </li>
        <li>
          <i class="xian"></i>
          <h4 class="g-fen-cen">
            <span class="g-cen-y"><i class="iconfont icon-clock"></i>2017-03-36</span>
            <span>逾期中</span>
          </h4>
          <div>
            <i class="icon"></i>
            <p>
              <span>应还金额：</span>
              <span>1500.98元</span>
            </p>
            <p class="hui">本金(123412元)+利息(80元)</p>
            <p><span>应还金额：</span><span>150.9元</span></p>
            <p class="yuqi"><span>逾期费用</span><span>150.9元</span></p>
          </div>
        </li>
        <li class="not">
          <h4 class="g-fen-cen">
            <span class="g-cen-y"><i class="iconfont icon-clock"></i>2017-03-36</span>
            <span>未开始</span>
          </h4>
          <div>
            <i class="icon"></i>
            <p>
              <span>应还金额：</span>
              <span>1500.98元</span>
            </p>
            <p class="hui">本金(123412元)+利息(80元)</p>
            <p><span>应还金额：</span><span>150.9元</span></p>
            <p class="yuqi"><span>逾期费用</span><span>150.9元</span></p>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import api  from '@/api/api';
import globalFn from '@/assets/javascripts/globalFn';
export default {
  name: 'state',
  data () {
    return {
      btnText : '还款计划',
      recordObj : {},
      error : {}
    }
  },
  methods : {
    clickBtn (str) {
      this.btnText = str;
    },
    //还款计划
    getOrderState () {
      // console.log(n)
      let sign = globalFn.getmd5('15133303272'+'2018-04-12 15:51:11');

      let obj = {"loanId":"wBN9Frw6omnsS3QhAnj","chanName":"website","chanType":"APP4.11.4","entranceID":"41","loginPhone":"15133303272","reqTime":"2018-04-12 19:07:30","sign":"add690535c1bff3791e78f457a0e9e73","token":"b3f10d243c6640a4b9c9740fc0f233ae"}
      api.getOrderState(obj).then((res) =>{
         console.log(res.loanInfo.rmpList)
        if(res.respCode == '000'){
          this.recordObj = res.loanInfo.rmpList;
        }
      },(error)=>{
        console.log(error,'dfs')
      });
    }
  },
  mounted () {
    //默认请求还款计划
    // this.getOrderState()
  }
}
</script>
<style lang="scss" scoped>
.record-wrap{
  background: $col-f;
  padding-bottom: 30px;
  .nav-box{
    position: fixed;
    top:0;
    left:0;
    background: $col-f;
    width:100%;
    height: 116px;
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
              color:$col-blue;
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
