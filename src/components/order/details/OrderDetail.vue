<template>
  <div class="still-wrap">
    <header class="header ">
      <p class="g-cen-y tixing">
        <i class="iconfont icon-tixing"></i>
        <span>严格遵守法律法规，杜绝过高利息，绝不暴力催收。</span>
      </p>
      <div class="date">
        <div>
          <p>具体还款日期请以<span>实际放款时间</span>为准</p>
          <p>假设还款为2017-12-15</p>
        </div>
      </div>
    </header>
    <main class="main">
      <nav class="nav g-fen-x">
        <button 
          :class="{on:tabText == '应还金额'}"
          @click="clickTab('应还金额','ying')"
          >应还金额</button>
        <button 
          :class="{on:tabText == '提前结清金额'}"
          @click="clickTab('提前结清金额','tiqian')"
        >提前结清金额</button>
      </nav>
      <p class="text">{{tishiText}}</p>
      <div class="list-box">
        <nav class="g-fen-x title" v-if="tabText =='应还金额'">
          <span>还款日期</span>
          <span class="zhong">本金</span>
          <span class="zhong">利息</span>
          <span>应还本息</span>
        </nav>
        <nav class="g-fen-x title" v-else>
          <span>还款日期</span>
          <span class="zhong">应还本息</span>
          <span>提前结清金额</span>
        </nav>
        <ul>
          <li class="g-fen-x" v-for="(m,i) in orderRmpList" :key="i">
            <span>{{m.retAmtDate}}</span>
            <span class="zhong"  v-if="tabText =='应还金额'">{{m.rePrincipal}}</span>
            <span class="zhong"  v-if="tabText =='应还金额'">{{m.reInterest}}</span>
            <span  v-if="tabText =='应还金额'">{{m.retAmt}}</span>
            <span class="zhong" v-if="tabText =='提前结清金额'">{{m.retAmt}}</span>
            <span v-if="tabText =='提前结清金额'">{{m.onceRetAmt}}</span>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'still',
  data () {
    return {
      tabText : '应还金额',
      tishiText :'以下每期应还金额含本息+利息',
      obj :[]
    }
  },
  //获取订单数据
  computed: {...mapGetters(['orderRmpList'])},
  methods : {
    clickTab (str,name) {
      this.tabText = str;
      this.tishiText = str=='应还金额'?'以下每期应还金额含本息+利息':'可一次行提前结清所有借款';
    }
  }
}
</script>
<style lang="scss" scoped>
.still-wrap{
  background: $col-f0;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: fixed;
  width:100%;
  overflow: hidden;
  .header{
    background: $col-f;
    margin-bottom: 20px;
    .tixing{
      height: 60px;
      background: $col-yel;
      font-size: 22px;
      padding:0 30px;
      i{
        font-size: 44px;
        color:$col-blue;
        margin-right: 14px;
      }
    }
    .date{
      padding:18px 100px;
      &>div{
        padding: 10px 86px;
        font-size: 22px;
        background: $col-f8;
        border-radius: 8px;
        p{
          line-height: 36px;
          color:$col-6;
          text-align: center;
          span{
            color:$col-blue;
          }
        }
      }
    }
  }
  .main{
    background: $col-f;
    flex:1;
    display: flex;
    flex-direction: column;
    .nav{
      height:78px;
      width:100%;
      button{
        height: 100%;
        border:none;
        border-bottom: 1px solid $col-c;
        width:0;
        flex:1;
        background: $col-f;
        font-size: 26px;
        color:$col-3;
        &.on{
          color:$col-blue;
          border-color: $col-blue;
        }
      }
    }
    .text{
      line-height: 88px;
      font-size: 24px;
      padding-left: 30px;
      color:$col-6;
    }
    .list-box{
      flex:1;
      padding:0 30px;
      overflow: hidden;
      margin-bottom: 30px;
      position: relative;
      .title{
        border-radius: 8px 8px 0 0;
        height: 64px;
        background: $col-f8;
        color:$col-9;
        font-size: 26px;
        border-top:1px solid $col-f0;
        display: flex;
        span{
          width: 0;
          flex:1;
          line-height: 64px;
          text-align: center;
          &.zhong{
            width:154px;
          }
        }
      }
      ul{
        overflow: scroll;
        height: 100%;
        li{
          height: 80px;
          font-size: 26px;
          border:1px solid $col-f0;
          border-top:none;
          &:last-child{
            border-radius:0 0 8px 8px ;
          }
          span{
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 0;
            flex:1;
            height: 100%;
            &.zhong{
              width:154px;
            }
            &:last-child{
              color:$col-red;
            }
          }
        }
      }
    }
  }
}
</style>
